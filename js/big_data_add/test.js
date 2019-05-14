// 大数相加，先解决数据的表达问题
//用位数表达

let str1 = '123354136541684154354338416543154351841534';
let str2 = '456';
// console.log(+"123"+(+"456"))
function addTwoNumbers(str1, str2) {
  let carry = 0,//是否有进位
    l1 = str1.length,//数字1的长度
    l2 = str2.length,//数字2的长度
    arr = [];//为变成字符串大值做准备

  //从个位开始,到哪里截止？
  var max = Math.max(l1, l2);//算出最大循环长度
  // 倒循环，退出条件是最大值的[0]
  // 从各位开始 同一位相加，再加之前的进位，进位即是flag，又是要加的值
  for (let i = l1 - 1, j = l2 - 1, n = max - 1; n >= 0; n-- , i-- , j--) {
    // +str1[i] 从字符串取一位 变成取一位数字 再加上有可能存在的进位
    // 位数不够 短的下标会减成负数 ||0
    var sum = (+str1[i] || 0) + (+str2[j] || 0) + carry;
    //如果本位数相加大于10 表示有进位
    if (sum >= 10) {
      carry = 1;
      arr.push(sum - 10);//将次进位交给它的更高一位处理
    } else {
      carry = 0;
      arr.push(sum)
    }
  }
  //最高位可能存在进位
  if (carry > 0) {
    arr.push(carry);
  }
  //将数组顺序反转 .join('') 变成数字
  return arr.reverse().join('');
}
console.log(addTwoNumbers(str1, str2));