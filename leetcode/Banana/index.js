
/**
 * 
 * @param {number[]} piles 
 * @param {number} H 
 * @param {number} mid
 * @return {boolean}
 */
function canEatAllBananas(piles, H, mid) {
  // 一定要用H小时吃完
  let h = 0;
  //吃
  for (let pile of piles) {
    h += Math.ceil(pile / mid);//Math.cell 向上取整 大于或等于给定数字的最小整数
  }
  return h <= H;
}
/**
 * 
 * @param {number[]} piles 整型
 * @param {number} H 
 * @return {number} 整数
 * 
 */
function minEatingSpeed(piles, H) {
  let lo = 1;
  let hi = Math.max(...piles);//找出piles里面香蕉数量最多的那一把 Math.max接收逗号隔开的数组
  // console.log(hi);
  while (lo <= hi) {
    // lo的尝试
    //拿到1和最大piles的中间值
    let mid = lo + ((hi - lo) >> 1);
    console.log('-----', mid);
    // 如何验证这个m正好可以？
    if (canEatAllBananas(piles, H, mid)) {
      // 能吃完 但是可能不是最优解 结果可能在最小值和中间值之间
      // 最大值从Math.max(...piles)变为中间值-1  hi = mid - 1;
      hi = mid - 1;
    } else {
      //不能吃完香蕉 中间值太小了 结果在中间值和最大值之间
      //最小值从1 变成最小值为中间值+1  lo = mid + 1
      lo = mid + 1;
    }
  }
  return lo;
}

// console.log(canEatAllBananas([3,6,7,11],8,4));
console.log(minEatingSpeed([3, 6, 7, 11], 8));