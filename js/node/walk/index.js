//引入文件模块
const fs = require('fs');
const files = [];
//遍历 目录 一级级走下去
const walk = function(path) {
  fs //同步
    .readdirSync(path) //readdirSync(路径)读取该目录下面的 文件/目录 返回数组
    .forEach(file => {
      // 文件 是否是JS文件？ 正则
      // 目录？ 递归 再执行walk 
      const newPath = path + '/' + file;
      //拿到文件信息
      const stat = fs.statSync(newPath);
      // console.log(stat);
      if(stat.isFile()){
        //判断是否是js文件 正则/\./ $匹配结束 slice 切割 .js
        if(/\.js$/.test(file)){
          files.push(file);
        }
      }else if(stat.isDirectory()){
        walk(newPath);
      }
      // console.log(item);
    })
  // fs //异步
  //   .readdir(path, function(err, items){
  //     console.log(items);
  //   });
  //   console.log('啦啦啦')
}

walk('./src');
console.log(files);