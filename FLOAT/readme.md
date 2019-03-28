# 清除浮动 的 五种方法
1. 在父元素底部加一行代码 <div style="clear: both"></div>
2. 利用 BFC 块级格式化上下文 给父元素增加CSS 
     div.content {
         overflow: hidden/ auto/ scroll;
     }
3.  使用CSS中的after伪元素 给父元素div添加一个clearfix的类名
     .clearfix::after{
         content:"";
         display: block;
         clear: both;
         <!-- height: 0;
         visibility: hidden; -->
     }
4. 给父元素增加一行css(不建议使用)
     .content{
         float:left;
     }
5. 一个更优雅的改进 --尼古拉斯大师 方法
   将display设置成table，可以默认创建一个表格单元，这个匿名的表格单元可以直接触发BFC，
    .clearfix:after{ //加一个冒号的是伪类
        content:'';
        display: table;//直接触发块级格式化上下文
        clear:both;
    }