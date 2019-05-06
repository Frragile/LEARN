- wxml 是模板 {{}} 要被编译的模板
 我们看到的view 不是wxml，是wxml 被js data填充编译后的页面，也就叫做page
 是wxml + js + wxss合体 compile

- setData({
  相应数据
}) 触发重新compile

- 我们会在wxml里把所有的逻辑及对数据的渴求都表达出来，在某一刻 页面只会显示当前状态的页面状态
  与数据息息相关
  状态 把握状态 由数据决定
  改变数据， setData 界面自动变
  数据驱动的界面 mvvm
  数据要和界面状态唯一 一一对应

- todos
  要有一个表单 js dom 加 todos [] appendChild
  数据驱动界面
  data{
    todos:[]
  }
  表单 form submit时 如何添加新的一条 
  form submit this.setData() 

- {{js 运行区域}}
- input -> todos 将数据添加进表单
