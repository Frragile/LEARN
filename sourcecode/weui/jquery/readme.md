DOM树有html结构，再加上css，DOM树将被生成，静态页面就有了。
 DOM节点 树 结构 层次 都有了，此时document上触发DOMContentLoaded，有了元素节点，就可以做JS的交互了。
 页面上还依赖于其它资源，例如js(阻塞下载)，img(网页性能杀手)
 window.onload 此时写js就晚了
 如果不等事件的发生，js操作可能无效