<template>
  <div class="textInput-box">
    <div contenteditable="true" ref="textInput" class="textInput" :class="type" @blur="blur" @paste="paste" @dragover="dragover">
    </div>
    <div class="color-box" v-show="colorBoxShow && showColorSelect">
      <span v-for="(item, key) in colors"
      :key="key"
      :style="item.bg"
      @click="selectColor(item)">
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'textInput',
  props: {
    type: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    isTextHtml: {
      type: Boolean,
      default: true
    },
    showColorSelect: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      colors: [
        {
          bg: 'background: #FD6720;',
          color: '#FD6720'
        },
        {
          bg: 'background: #657180;',
          color: '#657180'
        }
      ],
      colorBoxShow: false,
      blurTime: null,
      mouseupTime: null,
      // 光标位置
      startI: 0,
      // 光标位置
      endI: 0,
      // 文本信息
      text: '',
      // 包含html节点
      textHtml: '',
      // 选中的 文本节点
      textNode: null,
      // 记录光标位置
      range: null,
      // 选中的文本
      selectText: ''
    }
  },
  computed: {
  },
  watch: {
    value (val) {
      this.text = val
      this.$refs.textInput.innerHTML = this.text
    }
  },
  mounted () {
    this.text = this.value
    this.$refs.textInput.innerHTML = this.text

    // this.$refs.textInput.addEventListener('keydown', () => {
    //   clearTimeout(this.keydownTime)
    //   this.keydownTime = setTimeout(() => {
    //     this.emit()
    //     this.keydownTime = null
    //   }, 800)
    // })
    this.$refs.textInput.addEventListener('mouseup', () => {
      this.text = this.$refs.textInput.textContent
      this.textHtml = this.$refs.textInput.innerHTML

      const selectionObj = window.getSelection && window.getSelection()
      this.range = selectionObj.getRangeAt(0)
      // console.log(selectionObj, 'selectionObj')
      // 获取选中文本节点
      if (selectionObj.extentNode.nodeName === '#text') {
        this.textNode = selectionObj.extentNode
      } else {
        this.textNode = null
      }

      if (selectionObj.anchorOffset < selectionObj.focusOffset) {
        this.startI = selectionObj.anchorOffset
        this.endI = selectionObj.focusOffset
      } else {
        this.startI = selectionObj.focusOffset
        this.endI = selectionObj.anchorOffset
      }
      this.selectText = (selectionObj && selectionObj.toString()) || ''

      clearTimeout(this.mouseupTime)
      this.mouseupTime = setTimeout(() => {
        // 有选中文本 显示颜色选择器
        if (this.endI > this.startI) {
          this.colorBoxShow = true
        }
        this.mouseupTime = null
      }, 300)
    })
  },
  methods: {
    dragover (e) {
      e.preventDefault()
      e.stopPropagation()
      return false
    },
    // 粘贴事件
    paste (e) {
      let pasteText = ''
      if (window.clipboardData && window.clipboardData.getData) {
        pasteText = window.clipboardData.getData('Text')
      } else {
        pasteText = e.clipboardData.getData('Text') || e.clipboardData.getData('text/plain')
        const selectionObj = window.getSelection && window.getSelection()
        if (selectionObj) {
          const range = selectionObj.getRangeAt(0)
          const textNode = document.createTextNode(pasteText)
          range.insertNode(textNode)
        }
      }
      e.preventDefault()
      e.stopPropagation()
      return false
    },
    blur () {
      clearTimeout(this.blurTime)
      this.blurTime = setTimeout(() => {
        this.emit()
        this.keydownTime = null
        this.colorBoxShow = false
        this.blurTime = null
      }, 350)
    },
    emit () {
      this.range = null
      this.text = this.$refs.textInput.textContent
      this.textHtml = this.$refs.textInput.innerHTML
      let str = this.textHtml
      // 删除颜色标签
      let tempStr = this.textHtml
      tempStr = tempStr.replace(/<font id="[0-9]+" color="#[0-9a-zA-Z]+">[^<]*<\/font>/g, '')
      // 判断是否存在 div 等标签
      if (/<(\/)?[a-zA-Z]+/g.test(tempStr)) {
        this.$refs.textInput.innerHTML = this.$refs.textInput.textContent
        str = this.$refs.textInput.textContent
        this.text = this.$refs.textInput.textContent
        this.textHtml = this.$refs.textInput.textContent
        if (this.isTextHtml) {
          this.$emit('input', str)
        } else {
          this.$emit('input', this.text)
        }
        return false
      }

      // 删除黑色
      str = str.replace(/<font id="[0-9]+" color="#657180">([^<]*)<\/font>/g, '$1')
      if (this.isTextHtml) {
        this.$emit('input', str)
      } else {
        this.$emit('input', this.text)
      }
    },
    selectColor (item) {
      // console.log(item)
      // const REG = new RegExp(this.selectText)
      // this.text = `${this.startTxt}<font id="${new Date().getTime()}" color="${item.color}">${this.selectText}</font>${this.endTxt}`
      // this.$refs.textInput.innerHTML = this.text
      if (this.range && this.selectText) {
        const font = document.createElement('font')
        font.setAttribute('id', new Date().getTime())
        font.setAttribute('color', item.color)
        font.innerText = this.selectText
        let parentNode = this.textNode.parentNode
        // 删除选中文字
        if (this.textNode) {
          if (parentNode && parentNode.nodeName === 'FONT') {
            parentNode.setAttribute('id', new Date().getTime())
            parentNode.setAttribute('color', item.color)
          } else {
            this.textNode.deleteData(this.startI, this.selectText.length)
            // 在光标位置插入 node 节点
            this.range.insertNode(font)
          }
          this.textNode = null
          // 防止重复触发 blur 事件
          clearTimeout(this.blurTime)
          this.emit()
        }
      }
      this.colorBoxShow = false
    }
  }
}
</script>
<style lang="less" scoped>
  .textInput-box {
    position: relative;
    .color-box {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 18px;
      margin-top: -13px;
      span {
        display: inline-block;
        vertical-align: top;
        width: 12px;
        height: 12px;
      }
    }
  }
  .textInput {
    width: 100%;
    height: 32px;
    line-height: 1.5;
    padding: 4px 7px;
    font-size: 12px;
    border: 1px solid #EAECF1;
    border-radius: 4px;
    color: #657180;
    background-color: #fff;
    overflow: auto;
    &:hover {
      border: 1px solid #656c7f;
    }
  }
  .textInput.textarea {
    height: 100px;
  }
  .error {
    .textInput {
      border: 1px solid #D1592C;
    }
  }
</style>
