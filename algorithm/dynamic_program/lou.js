function lou(n){
  //边界
  if (n < 0)
    return 0
  if (n === 1)
    return 1
  if (n === 2)
    return 2
  //缺点 存在 n-2的重复计算
  //子结构
  return lou(n-1) + lou(n-2);
}

console.log('12级台阶的走法：', lou(12));
