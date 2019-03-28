Person 由 prototype属性来解决它自身构造之外的原型上的属性或方法
原型对象会有它的构造函数 Person.prorotype.constructor属性
第三者？ 实例
 实例 跟Person 有什么关系， Person.prototype 有关系

JS实例 跟 类 其实不是java等语言的血缘关系
 wh 实例是怎么来的呢 - new Person()出来的
 1. Person 函数以new的方式运行 this => new Object();
 2. wh 如何拿到 Person.prototype原型对象上定义的方法 __proto__ 属性
 3. 方法有prototype属性，值为对象 开支
 4. 任何对象都有 __proto__ 属性 指向它的原型对象
 5. 原型对象上有 constructor 属性指向谁是它的构造函数

 原型链

父类的实例对象作为子类的原型对象
