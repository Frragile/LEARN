node 让js 来到了后端
服务器 Linux
文件系统操作 fs

没有DOM
文件读取 要花时间 是异步操作
 定位文件参数1 (服务器根据相对路径找到文件) 
 打开文件
 将文件内容读取到内存中
 输出到命令行

JS是单线程语言
异步有两种解决方案
 1. callback 先记录一下 之后再拿回调函数
 fs.readFile(path, 'utf8', function(err,data){

 } )
 2. promise 
 分开，Promise 是类 用于处理耗时异步问题的类，所以为了防止回调地狱，看到耗时问题就用出一个Promise实例
 Promise 拥有resolve的能力，将控制权交给then，这样就保证了异步问题的同步化
 resolve(data)传
 reject 失败 Promise 执行 .catch(e){ }
