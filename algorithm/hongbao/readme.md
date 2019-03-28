如何实现红包算法
固定金额的红包，由若干人来抢
规则
1. 抢到总金额=红包金额 不能超过也不能少于
2. 手气王 至少0.01 
3. 金额随机，产生一个随机数，确保公平，每个人抢到金额的概率相同

发钱 组织计算过程，变量计算的本质

开始时 total 总和 = restAmount 剩余金额 (减少)
 Num 红包数量 = restNun 剩余应发红包数 (减少)
随机一次， restAmount = restAmount- 随机数
 restNum--
最后一个人，拿最后的restAmount for(i=0; i < num - 1 ; i++)
每次随机，钱数使我们需要的，push到数组里

Math 是数学对象
Math.random() 随机数
parseFloat() 可以将一个随机数解析为浮点数
parseFloat 类型转换 “12.3” => 12.3
parseInt 转换为整数

.toFixed() 保留几位小数
Math.floor()向下取整
Math.ceil()向上取整
Math.round()四舍五入

0-9之间的整数 Math.floor(Math.random()*10);

let max = 100 ;
let min = 0;
生成一个最小值与最大值之间的数
min + Math.floor(Math.random()*(max-min));


