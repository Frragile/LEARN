'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var a = 1,
    b = 2,
    c = a + b;
console.log(c);
// 在经过工作流传送带的时候，需要做什么？
// 开发思路？代码的执行过程 在内存中声明变量 给ab赋值再计算
// 这行代码的问题: es6 语法 全程const  IE9还不支持es6 会出问题


[1, 2, 3].map(function (item) {
  return item + 'item';
});

//es6的大部分功能 其实es5也能实现 只是不够优雅
var wh = { name: '吴赫', hometown: 'Seoul' };
wh = _extends({}, wh, { "company": 'YG' //使用了es6的 spread展开运算符 展开 添加新的key

});console.log(wh);
