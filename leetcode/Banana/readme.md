蜗牛爱吃香蕉

N piles bananas
Each pile of bananas 数量不同
[3,6,7,11]
[30,11,23,4,20]
每个小时可以吃某个pile里的N只香蕉，规定H小时内一定要吃完，吃每把香蕉时，要不吃m只，要不就吃剩下的

let code koko bananas
- 把香蕉吃完函数 canEatAllBananas
  h 来自于吃法规则 一小时吃mid只 一次只吃一把
  return h >= H;
- while 去尝试
  1,2,3,4,5,6...Math.max
  (...piles)
  从1开始走 能拿到结果 但是太慢了
  取中间值来尝试 是最大概率最快的 也叫二分查找
  二分查找 优化查找的效率

  简单查找 时间开销是n
  二分查找的写法是有规律的
  在x 和y 之间存在符合条件的最小值min 可以优化
  找中间值mid =x +((y-x) >> 1)
  如果小了 mid+1 是新的x
  如果大了 mid-1 是新的y
  二分查找的算法复杂度 log2 n 远小于简单查找 n