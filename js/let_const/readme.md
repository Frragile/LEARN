# 作用域 Scope
document DOM
  getElementByTagName
  getElementByClassName
  querySelector
  querySelectorAll
window BOM
  全局定义 var name = "吴赫";
  全局变量 前端 js window
  局部变量 function () {} 外界不能访问内部 只能访问函数名
  window js 内嵌在浏览器中的脚本语言，他与其他语言不一样的地方在于 有一个顶级的window
  全局变量挂载在window上
  console.log(name); console.log(window.name);都能找到定义在全局的名字
  window 类型 typeof 
  数值 字符串 布尔值 unll定义了但是没有值 undefined未定义
  Symbol object 
  const let 比var 优秀的地方 遵守块级作用域
  全局 -> 函数局部 -> 块级作用域
  scope 范围    

  setTimeout 异步的内置函数
  for 循环 立即同步执行 
  1000 之后 i var 变成了10
  let 块级作用域 for { 块级作用域 let } 1000 后，
