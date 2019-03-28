# 相对单位，为了自适应
  不同的移动设备
  750px 
  iphone XR 小手机
  小米，华为
  iPhone Max 大手机
  小米，华为
  vw,vh 按比例分配宽/高 20% 20vh 100vh 主体容器

  em rem 移动端少用px 用于细致的每个盒子或盒子模型的大小等比例定义。    
  em 是相对于自身的字体大小来比例
  10em 10*14px(自身字体大小) = 140px
  rem 相对于html根元素上的fontSize

  :before :after 伪元素
  没有标签，但却可以像真正的元素一样，在页面上占位置。
  dom 文档流里不需要写这个元素，无副作用，不会影响内容的显示。
  使用CSS来声明，content 属性是必须的，

  html 默认的字体大小是16px 
  如果没有设置，会使用父级，或body font-size
    