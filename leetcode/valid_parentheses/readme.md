JS的基本数据类型：数值 字符串 布尔值 null undefined
其他的都是 Object  Array 可遍历的对象 for()
JSON Object 对象字面量 可枚举的对象
function函数 也是对象
document.querySelectorAll('a'); 类数组
arr.push()
- 字符串是字符的数组 
 .length str[0] 具有.length 用下标来访问的属性
- 运算符匹配的问题时，选择数组作为数据结构
  只在顶部做操作时 (push pop)  栈stack 
  算法+数据结构 "()"
  sta = [] 这个栈现在是空的
  1. (  sta.push("(") 入栈 sta.length = 1
  sta[0] = "("
  2. )  栈不为空 跟栈顶部元素进行比较，如果是一对，顶部元素pop() 
  或者 push 为新的顶
  3. sta 为空 true|false