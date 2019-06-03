// 构造函数new的时候讲val交给
class LinkedListNode {
  constructor(val) {
    // 指针 是链表形成的钥匙 因为指针 链表可以不连续
    this.val = val;
    this.next = null;
  }
}
export default LinkedListNode;