import LinkedListNode from './LinkedListNode.js';
// 数据结构中最小的值是节点
// 可以被实例化 被引入 是一个类、class
class LinkedList {
  constructor() {
    // 1->4->3->2->5->2
    // 链表的关键是 head
    this.head = null;
    this.tail = null;
  }
  // 在DOM的api中添加节点 一直append() 形成链表
  append(value) {
    const newNode = new LinkedListNode(value);
    if (!this.head) { // 如果空链表
      this.head = newNode; // 将新做出来的节点变成头结点
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode; //挂载完之后新的尾节点为newNode
    }
    return this;
  }
  // 拿到value属性
  toArray() {
    const nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }
  toString() {
    // 返回一个节点数组.map一下 变成值
    return this.toArray().map(node => node.val);
  }
}
export default LinkedList; //es6向外输出写法
