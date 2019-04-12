// fs模块 是node后端开发的一部分

const fs = require('fs');

//读取文件 传入路径 读取一个文件的内容是异步的
//使用回调函数处理异步问题 callBack
//utf8 指定编码格式 中文
// fs.readFile('./a.txt', 'utf8', function(err,data){
//   if(err){
//     console.log(err);
//   }
//   console.log(data);
//   fs.readFile('./b.txt', 'utf8', function(err,data){
//     console.log('--------', data);
//   })
// })

// 将使用callback处理异步的方案抛弃

// 实例化一个promise 将耗时的任务 用于封装一个异步任务的 此时fs.readFile还没做
// 将promise运行 里面的readfile才会执行 因为里面有个API 
const fileAPromise = new Promise((reslove, reject) => {
  fs.readFile('./a.txt', 'utf8', (err, data) => {
    //流程的控权怎么移交
    //只有resolve才能将一个promise解决掉
    reslove(data);
  })
});
const fileBPromise = new Promise((resolve, reject) => {
  fs.readFile('./b.txt', 'utf8', (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  })
});
// 将内部的耗时任务运行起来
fileAPromise.then(data => {
  console.log(data);
  return fileBPromise;
}).then(data => {
  console.log('------', data);
})