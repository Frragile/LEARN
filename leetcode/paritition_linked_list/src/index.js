import LinkedList from './LinkedList'
// partition方法接收两个参数
const partition = (head, x) => {
  // 分成两个节点来做
  let cur = head, next,
    preHead, preTail, afterHead, afterTail;
  if (head === null)
    return null;
  // 遍历整个链表
  while (cur) { // 一次遍历 
    next = cur.next;
    cur.next = null; // 打掉以前的关系
    if (cur.val < x) {
      if (!preHead) { // 空节点
        preHead = cur;
        preTail = cur;
      } else {
        preTail.next = cur;
        preTail = cur;
      }
    } else {
      if (!afterHead) {
        afterHead = cur;
        afterTail = cur;
      } else {
        afterTail.next = cur;
        afterTail = cur;
      }
    }
    cur = next;
  }
  if (preTail) {
    preTail.next = afterHead; // 左链表与右链表结合
    return preHead;
  } else {
    return afterHead;
  }
}
// 拿来一个链表 存放数据 存储结构和特征
const list = new LinkedList();
list.append(1).append(4).append(3).append(2).append(5).append(2); // 1->4->3->2->5->2
// console.log(list.toString());
const newHead = partition(list.head, 3)
// console.log(newHead);
let curNode = newHead;
while (curNode) {
  console.log(curNode.val);
  curNode = curNode.next;
}