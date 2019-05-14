//会计 计算年终奖  
//绩效 S->5 A->3 B->2 C->1 
var performanceX = function (salary) {
  return salary * 60;
}
var performanceS = function (salary) {
  return salary * 5;
}
var performanceA = function (salary) {
  return salary * 3;
}
var performanceB = function (salary) {
  return salary * 2;
}
var performanceC = function (salary) {
  return salary * 1;
}
var calculateBonus = function (perfomanceLevel, salary) {
  if (perfomanceLevel === 'X') {
    return performanceX(salary);
  }
  if (perfomanceLevel === 'S') {
    return performanceS(salary);
  }
  if (perfomanceLevel === 'A') {
    return performanceA(salary);
  }
  if (perfomanceLevel === 'B') {
    return performanceB(salary);
  }
  if (perfomanceLevel === 'C') {
    return performanceC(salary);
  }
}
console.log(calculateBonus('X', 20000))
// 分支太多，计算策略太简陋 如何优化？
// 行动应该和策略分开
// 策略函数
// var performanceS = function (salary) {
//   return salary * 5;
// }
// var calculateBounce = function (perfomanceLevel, salary) {
//   if (perfomanceLevel === 'S') {
//     return performanceS(salary);
//   }