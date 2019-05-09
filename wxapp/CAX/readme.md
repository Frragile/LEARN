小程序 canvas 找 cax

引入 cax组件 
new cax.Stage()
cax.Rect
add 的关系
update

- countdown 组件
  有一个文案，获取验证码，没有点击之前的状态
  点击开始计时 start 默认 false|true
  Page 为组件的调用者 由组件构成页面 组件引入组件
  组件 data 自身数据(内) + properties 外给内传递数据(外界传入)
  <countdown start="{{start}}"/> 

- properties属性 有 observer选项
  当外界传的值改变时，会执行 组件是构成页面的，为页面服务

- start 由外传到内properties
  有利于页面操作关键状态 
  由外到内通过properties，
  内部组件通知页面？ 可以做

