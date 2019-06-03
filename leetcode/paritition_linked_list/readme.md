## 分隔链表

- 为什么要学数据结构？
  1. 抽象能力 ADT 由具象来引导
  2. 解决特定问题
    - leetcode 数据结构题 
      LinkedList
    - github algorithm OO写法
      将 LinkedList 类封装成 Class
      将使用 export default
    - webpack 抽象的数据结构 ->　所见即可得
    
  链表是一个对象 服务于各种算法
  存放数据 与数组不同，是不连续，动态的
  找到head就可以 while循环

  1. node(n) -> LinkedList n个节点构成一个链表，第一个节点是head节点，最后一个节点为tile节点，next属性为null
    - 可以应用于各种算法，所以应该实现es6 模块化 export default import，下次需要只需引入LinkedList.js，一个文件一个类
      append() 链表这种结构的ADT 抽象数据行为
    - index.js 业务代码 new 然后写具体是什么


- 数据结构中最小的值是节点，节点 指针

- append() 如何支持链式调用？
  返回一个新的

- ADT Abstract Data Type
  抽象数据类型
  链表 数据结构 配套方法
  append() 在链表的尾部新加一个节点 new
  toString() 查看链表存储数据 借助于toArray().map()

题目：
  head = 1->4->3->2->5->2  x = 3 对链表进行分隔 小于x的节点放左边 大于  或等于x的节点放其后
  不影响之前的顺序(保留两个分区每个节点的初始相对位置)
  1->2->2 左链表 之前 
  4->3->5 右链表 之后
  链表 head tail append() 
  两个链表首尾相连 tail1.next = head2 左链表 尾节点的 tail 指向 右链表的head

- SyntaxError: Unexpected identifier
  node 不支持es6的模块化 原生支持的是require的 commonJS
  需要compile presets 对它下一个定义的预处理
  - 创建src文件夹 
    根目录新建 .babelrc 
    {
    "presets":["env"]
    }
    >yarn add babel-cli babel-core babel-preset-env -D
    - package.json "babel-loader":"^7.1.4",
    >yarn add webpack webpack-cli webpack-dev-server html-webpack-plugin -D
    webpack.config.js