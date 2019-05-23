// 将数字的每一位变成一个类变成一个ListNode的实例
// 既不是字符串，也不是数值 而是采用了线性表数据结构
function ListNode(val) {
  // 每一位都有它的val value 值
  this.val = val;
  // 指向后面的指针 指针运算
  this.next = null;
}
let number = 1234567890;
// 实例化number的第一位
let n1 = new ListNode(1)
let n2 = new ListNode(2)
n1.next = n2;
// console.log(n2)

// 遍历链表 数字很大 每个节点知道下个节点的信息
// travel一下 使用while处理
let node = n1;
while (node) {
  console.log(node.val)
  node = node.next
  // 最后一个节点的next属性为null 为假就会退出 周游了列表
}