// 会溢出
// 用的是字符串，链表
// addTwoNumbers 的js数据结构版本
function LinkedNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * 
 * @param {LinkedList} l1 
 * @param {LinkedList} l2 
 */


// 初始化两个节点变成数组方便reverse
var addTwoNumbers = function (l1, l2) {
  // 负责接住第一个链表的每一位
  // newL1 newL2 引用赋值原理 不会影响到原来的
  // 引用赋值对象传变参的时候要注意 会不会改变函数外面的赋值
  let a = [], b = [], newL1 = l1, newL2 = l2;
  // 倒着来 链表是单向的，是实现不了的，转成一个数组 
  // 数组 使用 array reverse();
  while (newL1) {
    a.push(newL1.val);
    newL1 = newL1.next;
  }
  while (newL2) {
    b.push(newL2.val);
    newL2 = newL2.next;
  }
  a.reverse();
  b.reverse();
  console.log(a, b);

  // 两数相加
  let ans = []; //存放两位相加的结果
  let carry = 0; // 进位存储
  // 用循环对长度较长的一个数进行循环
  while (a.length || b.length) { //shift 把相加完的数扔掉
    let c = a.length ? a.shift() : 0;
    let d = b.length ? b.shift() : 0;
    let sum = c + d + carry;
    //只留下小于10的值 求余
    ans.push(sum % 10)
    // 进位问题
    if (sum >= 10) {
      carry = 1;
    } else {
      carry = 0;
    }
  }
  // 考虑最后一位，如果有进位 carry存在 就执行&&后面的东西
  carry && (ans.push(carry));
  //将数组反回来
  ans.reverse();
  // 从数组转换为字符串
  // return ans.join('')

  // 不应该返回字符串 应该返回结点，而且只要头结点就可以 一直next下去 直到拿到整个链表
  let ret = [];
  // 形成一个链表
  for (let i = 0, len = ans.length; i < len; i++) {
    ret[i] = new LinkedNode(ans[i])
  }
  // i<len-1 next属性最后一个是null 不用算
  for (let i = 0, len = ans.length; i < len - 1; i++) {
    ret[i].next = ret[i + 1];
  }
  // 只需返回头结点
  return ret[0];
}
// 链表的实例化
let a1 = new LinkedNode(1),
  a2 = new LinkedNode(2),
  a3 = new LinkedNode(3);
a1.next = a2;
a2.next = a3;
let b1 = new LinkedNode(4),
  b2 = new LinkedNode(5),
  b3 = new LinkedNode(6);
b1.next = b2;
b2.next = b3;

// let node = a1;
// while (node) {
//   console.log(node.val)
//   node = node.next
// }

//将头结点放过去 从头结点一次往下找节点
let ret = addTwoNumbers(a1, b1);
while (ret) {
  console.log(ret.val);
  ret = ret.next
}