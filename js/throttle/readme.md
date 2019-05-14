search suggest 搜索建议 帮助用户快速找到ta想找的内容 

ajax request1
ajax request11
ajax request111
ajax request1111
ajax request11111

有必要每打一次keyup都去搜索吗？ 应该防止，性能问题
所以我们需要防抖，防止服务器抖动
如何防抖？
打完一个单词再去搜 basketball 
定时器实现了防抖 debounce函数利用闭包(函数内部再有函数，返回一个新函数)
将定时器id封闭在闭包空间中，所以下一次的keyup事件会消除上一次的timeout
只有最后一个keyup间隔时间超过delay的得以执行，在频繁触发时，只执行一次
