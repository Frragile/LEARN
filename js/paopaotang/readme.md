#class 类 js现在也有
- es5 没有class关键字 如何做面向对象？
    js 是面向对象的，Function 是一等对象
    普通函数 Player(); 作为普通函数被运行
    new Player(); 作为类的构造函数被运行
    function Player() {this } this 一直都在，函数里的一个常在，也是一个指针
    this 指向一个Object {} this.name = name

- 函数运行方式的不同，里面的this指向不同
    当它作为一个普通函数被运行时，里面的this指针没有使命，js会指向全局 在前端指向window 在node指向global  undefined
    当函数作为构造函数被运行时 new Player(); 此时this 指向实例化的对象，是构造函数需要的过程

- 函数可以用来构造类  js 借，它可以通过this
- this 是一直在的，他是一个指针
  函数运行方式会导致this的指向不一样
  作为普通函数 this => 全局||window||global
  如果代码启动严格模式，this 就会undefined
- 什么是new new过程之中发生了什么
    new Player(); 将函数作为构造函数运行时，里面一直存在的this指针会指向我们要新生成的new对象 Player只是一个类
    this 指向 Object { 花括号里的对象.添加属性和方法 例如:皮蛋有个name属性就叫皮蛋 }
    this => { } constructor
    this.name = name 在new中this会指向新生成的对象
- 构造函数 constructor