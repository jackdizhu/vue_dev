<template>
  <div class="pdf-box">
    <pdf :src="src"
      v-if="src"
      :rotate="rotate"
      :scale.sync="scale"
      :resize="resize"
      :page="page"
      :annotation="annotation"
      :text="text"
      @numpages="setNumPages"
      @loading="pageLoad">
      <!-- <template slot="loading">
        loading content here...
      </template> -->
    </pdf>
    <div class="btn-box">
      <a href="javascript:;" @click="prev" :disabled="page===1">上一页</a><a>{{page}}/{{numPages}}</a><a href="javascript:;" @click="next" :disabled="page===numPages">下一页</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pdfView',
  props: {
    src: {
      type: String,
      default: './static/test.pdf'
    }
  },
  data () {
    return {
      page: 1, // 要显示的页码
      numPages: 1, // 总页数
      rotate: 0, // 页面旋转度数，只有90的倍数有效。
      scale: 'page-width', // 比例因子。默认情况下，将缩放pdf以使页面宽度与容器宽度相匹配
      resize: true, // 在窗口调整大小时启用自动调整大小。默认情况下，禁用自动调整大小。
      annotation: false, // 在pdf中显示注释。默认情况下，禁用注记图层。
      text: true // 在pdf中显示文本图层。默认情况下，启用文本图层。
    }
  },
  methods: {
    pageLoad (boo) { // loading state
      console.log(boo, 'pageLoad')
    },
    setNumPages (num) {
      console.log(num, 'setNumPages')
      this.numPages = num
    },
    prev () {
      if (this.page > 1) {
        this.page -= 1
      }
    },
    next () {
      if (this.page < this.numPages) {
        this.page += 1
      }
    }
  }
}
</script>
<style lang="less" scoped>
.pdf-box {
  padding-top: 30px;
  position: relative;
  .btn-box {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 30px;
    line-height: 30px;
    a {
      display: inline-block;
      width: 33.33%;
      text-align: center;
      text-decoration: none;
      color: #666;
    }
    a[disabled] {
      color: #999;
      cursor: not-allowed;
    }
    a:nth-child(2) {
      letter-spacing: 2px;
    }
  }
}
</style>
