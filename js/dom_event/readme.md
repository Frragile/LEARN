# DOM event(事件)
 - DOM
   onclick 事件注册只有一个 dom-0
   addEventListener('click') 不限 dom-2
   addEventListener('keyup') 不限 dom-3
 - event
   event.stopPropagation() 阻止事件冒泡
   event.stopImmediatePropagation() 阻止后面注册的事件
 - DOM 事件流
    捕获 (capture)
    window -> document(document.document.Element) -> body -> 父级 -> 目标元素
    冒泡 (bubble)
    目标元素 -> 父级 -> body -> document(document.document.Element) -> window

    事件按照 dom流 的顺序执行我们的事件回调
    处于目标阶段时，事件调用顺序取决于事件注册的顺序。

 - 事件代理 (事件委托) 
    event_question.html
    原理: 冒泡 拿到标签