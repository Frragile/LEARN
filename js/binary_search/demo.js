function binary_search(arr, data) {
  // 1.计算出mid，小于往左，大于往右，重复执行
  // 2.递归思想
  // 退出条件：重复计算直到只剩一个数了
  let min = 0, max = arr.length - 1, mid;
  // 中间不能再分时
  while (min <= max) {
    // mid = parseInt((min + max) / 2); //parseInt求整
    // 最大值加最小值可能触碰到雷区
    // 求mid? 不用加法 规避溢出 怎么取得mid呢？
    // mid = parseInt(min + (max - min) / 2);//规避了溢出的可能性
    // 位移运算 更加高效 
    mid = min + ((max - min) >> 1); // 右移一位等于/2

    if (arr[mid] > data) {
      max = mid - 1;
    } else if (arr[mid] < data) {
      min = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(binary_search([1, 4, 7, 9, 10, 12], 10));


//二分查找的bug,数组太大时 二分查找搞不定
let arr = [];
for (let i = 0; i < 5000; i++) {
  arr.push(i);
}
console.log(binary_search(arr, 2019));