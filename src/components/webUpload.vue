<template>
  <div class="upload-btn-box">
    <div class="upload-btn" ref="uploadBtn">
    </div>
  </div>
</template>
<script>
// import 'webuploader/dist/webuploader.css' npm i webuploader --s-dev
export default {
  props: {
    uploadUrl: {
      type: String,
      default: 'http://127.0.0.1:3000/api/'
    },
    auto: {
      type: Boolean,
      default: true
    },
    chunked: {
      type: Boolean,
      default: true
    },
    chunkSize: {
      type: Number,
      default: 5242880 // 分多大一片 5M
    },
    formData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {}
  },
  created () {
    let _this = this
    require.ensure([], function (r) {
      const webuploader = require('webuploader')
      const Uploader = webuploader.create({
        pick: {
          id: _this.$el.querySelector('.upload-btn'),
          innerHTML: '上传',
          multiple: false
        },
        accept: [
          // {
          //   title: 'Images',
          //   extensions: 'gif,jpg,jpeg,bmp,png',
          //   mimeTypes: 'image/*'
          // }
        ],
        auto: _this.auto,
        chunked: _this.chunked,
        chunkSize: _this.chunkSize, // 分多大一片 5M
        chunkRetry: 2,
        threads: 3,
        fileNumLimit: void (0), // 文件总数量
        fileSizeLimit: void (0), // 文件总大小
        fileSingleSizeLimit: void (0), // 单个文件大小
        duplicate: void (0), // 去重
        formData: _this.formData,
        fileVal: 'file',
        sendAsBinary: true,
        swf: './Uploader.swf',
        server: _this.uploadUrl
      })
      Uploader
      .on('beforeFileQueued', function (res) {
        // console.log(res, '当文件被加入队列之前触发')
        _this.$emit('beforeFileQueued', res)
      })
      .on('fileQueued', function (res) {
        // console.log(res, '当文件被加入队列以后触发')
        _this.$emit('fileQueued', res)
      })
      .on('filesQueued', function (res) {
        // console.log(res, '当多个文件被加入队列以后触发')
        _this.$emit('filesQueued', res)
      })
      .on('fileDequeued', function (res) {
        // console.log(res, '当文件被移除队列后触发')
        _this.$emit('fileDequeued', res)
      })
      .on('reset', function (res) {
        // console.log(res, '当 uploader 被重置的时候触发')
        _this.$emit('reset', res)
      })
      .on('startUpload', function (res) {
        // console.log(res, '当开始上传流程时触发')
        _this.$emit('startUpload', res)
      })
      .on('stopUpload', function (res) {
        // console.log(res, '当开始上传流程暂停时触发')
        _this.$emit('stopUpload', res)
      })
      .on('uploadFinished', function (res) {
        // console.log(res, '当所有文件上传结束时触发')
        _this.$emit('uploadFinished', res)
      })
      .on('uploadStart', function (res) {
        let {name, size} = res
        console.log({name, size}, '某个文件开始上传前触发，一个文件只会触发一次')
        _this.$emit('uploadStart', res)
      })
      .on('uploadBeforeSend', function (res) {
        let {chunk, chunks, start, end, total, percentage} = res
        // console.log(res, `当某个文件的分块在发送前触发--${res.percentage}`)
        console.log({chunk, chunks, start, end, total, percentage}, `当某个文件的分块在发送前触发--${res.percentage}`)
        _this.$emit('uploadBeforeSend', res)
      })
      .on('uploadAccept', function (res) {
        // console.log(res, '当某个文件上传到服务端响应后，会派送此事件来询问服务端响应是否有效')
        _this.$emit('uploadAccept', res)
      })
      .on('uploadProgress', function (res) {
        // console.log(res, '上传过程中触发，携带上传进度')
        _this.$emit('uploadProgress', res)
      })
      .on('uploadError', function (res) {
        // console.log(res, '当文件上传出错时触发')
        _this.$emit('uploadError', res)
      })
      .on('uploadSuccess', function (res) {
        // console.log(res, '当文件上传成功时触发')
        _this.$emit('uploadSuccess', res)
      })
      .on('uploadComplete', function (res) {
        // console.log(res, '不管成功或者失败，文件上传完成时触发')
        _this.$emit('uploadComplete', res)
      })
      .on('error', function (res) {
        // console.log(res, '当validate不通过时，会以派送错误')
        _this.$emit('error', res)
      })
    })
  }
}
</script>
<style lang="less" scoped>
  .upload-btn-box,
  .upload-btn {
    display: inline-block;
  }
  .upload-btn {
    position: relative;
    width: 96px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    /deep/ .webuploader-pick {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      background: #fff;
      color: #666;
      overflow: hidden;
    }
    /deep/ .webuploader-pick+div {
      z-index: 3;
      input {
        width: 100%;
        height: 1px;
        position: absolute;
        left: 0;
        top: -2px;
        z-index: 4;
      }
      label {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 5;
      }
    }
  }
</style>


