吴赫 三年 她的QQ是多少？

980220827 合格的qq号

- 正则
 确定待检测的字符是否正是符合规则的对象
 在js 里 除了简单类型之外，一切都是对象
 /[]/ 正则对象 RegExp RegularExpression
 正则表达式的运算符号，用于表达规则
 [0-9] 表示范围 数字
 [a-z] 表示范围 小写字母
 [A-Z] 表示范围 大写字母
 {5,13} 限定长度 最短5 最长13
 ^，$ 字符串开始，字符串结束

 980220827 加密过后的QQ号
 解码规则是 第一个数删除，第二个数移到末尾，依次重复，直至最后一个数也删除
 删除顺序即为真正的QQ号

 631758924 6
 17589243 1
 5892437 5
 924378 9
 43782 4
 7823 7
 238 2
 83 8
 3 3

 数组 是最廉价的数据结构，是数据的集合。
      本身就是一个线性的存储空间，有下标。
      head 指向头部 start
      tail 指向尾部 end 是否留空看自己需求
      若一个数组只在尾部tail插入和删除，对应 栈 stack LF LastFirst
      在头部删除，在尾部添加 对应 队列 Queue 先进先出的