var baseObj = {
  //随机数
  randomNum: function (min, max) {
    // 取整，生成一个0-1间的随机数
    return parseInt(Math.random() * (max - min + 1) + min)
  }
  
}