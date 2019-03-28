// Player类，也叫构造函数
"use strict"; // 使用严格模式
function Player(name) {
    // constructor 构造器,
    // 全局 || 指向的对象
    console.log(this);
    this.name = name;
    this.enemy = null;
}
//js 类的方法要定义在prototype上 //添加原型链
Player.prototype.win = function() {
    console.log(this.name + "win"); // + 加号 字符串连接符
} 
Player.prototype.lose = function() {
    console.log(this.name + "lose");
}
// Player("皮蛋") // 普通函数调用
var player1 = new Player("皮蛋");// 实例化
// var player2 = new Player("小乖");
// console.log(player1.name);
//win函数，作为对象的方法被调用
//this会指向对象本身
var player2 = new Player("小乖");
player1.enemy = player2;
player2.enemy = player1;
player1.win();
player2.lose();
