const arr1 = [99, 0, 33,[101,202,[303]], 1, 2];
// 如何推平一个数组？ 数组扁平化
const _=require('lodash');
const flattenArr1 = _.flattenDeep(arr1);// 双层 flatten 三层 falttenDeep
console.log(flattenArr1);

const arr2 = [2,1,2];
// 去除数组重复项？
const uniqArr2 = _.uniq(arr2);
console.log(uniqArr2);

const users = [
  {user:'Fred',age:28},
  {user:'Teddy',age:25},
  {user:'Fred',age:49},
  {user:'Teddy',age:12},
]
// 对数组进行排序 
const sortedUser = _.sortBy(users,['user','age']);//名字排序作为第一条件，年龄第二条件
_.sortBy(users, [function(o) { return o.user; }]);
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
_.sortBy(users, ['user', 'age']);
// => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
console.log(sortedUser);