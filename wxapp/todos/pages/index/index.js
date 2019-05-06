Page({
  data: {
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: {},
    addShow: false,
    addText: '',
    todos: []
  },
  addInput: function (e) {
    this.setData({
      //响应式编程
      addText: e.detail.value
    })
  },
  getUserInfo: function (e) {
    // console.log(e);
    // 设置数据项 数据改变之后页面会更新一次
    this.setData({
      userInfo: e.detail.userInfo,
      //mvvm编程 响应式 状态
      hasUserInfo: true
    })
  },
  addTodoShow: function (e) {
    this.setData({
      addShow: true
    })
  },
  addTodoHide: function (e) {
    this.setData({
      addShow: false
    })
  },
  addTodo: function () {
    //检测输入框内容是否存在 trim去除首尾空格
    if (!this.data.addText.trim()) {
      return
    }
    let todos = this.data.todos;//对数据项的get获取操作 不会引发界面  更新
    //todos 界面上 wx:for 将新的todos的值setData() 重新绘制页面
    todos.push({
      id: new Date().getTime(),//时间戳
      title: this.data.addText,
      status: '0' //状态
    })
    //将前面get的data数据写进todos[]
    this.setData({
      todos
    })
    //退出输入状态
    this.addTodoHide()
  }
})