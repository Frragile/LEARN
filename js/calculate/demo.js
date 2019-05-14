//传统策略模式
var PerformanceS = function () {
}
PerformanceS.prototype.calculate = function (salary) {
  return salary * 5;
}
var PerformanceA = function () {
}
PerformanceA.prototype.calculate = function (salary) {
  return salary * 3;
}
var PerformanceB = function () {
}
PerformanceB.prototype.calculate = function (salary) {
  return salary * 2;
}
var PerformanceC = function () {
}
PerformanceC.prototype.calculate = function (salary) {
  return salary * 1;
}

var Bonus = function (salary) {
  this.salary = salary;
}
Bonus.prototype.setStrategy = function (strategy) {
  this.strategy = strategy;
}
Bonus.prototype.getBonus = function () {
  return this.strategy.calculate(this.salary);
}


var bonus = new Bonus(20000);
bonus.setStrategy(new PerformanceS());
console.log(bonus.getBonus())
var bonus2 = new Bonus(5000);
bonus2.setStrategy(new PerformanceB());
console.log(bonus2.getBonus())
