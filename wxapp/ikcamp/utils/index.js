// 引入 封装
import config from './config'
import * as Mock from './mock'
//请求数据的参数
const DEFAULT_RUQUEST_OPTIONS = {
  url: '',
  data: {},
  header: {
    "Content-Type": "application/json"
  },
  method: "GET",
  dataType: "json"                                                 //数据请求的格式
}
let util = {
  isDev: config.isDev,
  log() {
    this.isDev && console.log(...arguments)                        //...arguments es6解构方法 将数组打散作为。。。。
  },
  alert(title = "提示", content = config.defaultAlertMessage) {    //弹出框 (参数) 给参数写了默认值
    if ('object' === typeof content) {                             //如果是object类型
      content = this.isDev && JSON.stringify(content) || config.defaultAlertMessage //转变格式
    }
    wx.showModal({
      title: title,
      content: content
    })
  },
  getStorageData(key, cb) {//获取本地存储
    let self = this
    wx.getStorage({
      key: key,
      success(res) {
        cb && cb(res.data)
      },
      fail(err) {
        let msg = err.errMsg || '';
        if (/getStorage:fail/.test(msg)) {//正则
          self.getStorageData(key)
        }
      }
    })
  },
  setStorageData(key, value = '', ) {//将数据存入本地存储
    wx.setStorage({
      key: key,
      data: value,
      success() {
        cb && cb();
      }
    })
  }
}