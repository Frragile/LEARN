- readdir
  帮助我们读取目录内容(包括文件/目录) IO操作异步 
  - readdirSync
    Sync 同步 Async异步 
    自动将操作改为同步
    - 不使用Sync 将操作改为同步？

  JS是单线程的，用回调或Promise 释放主线程的控制权，主要因为JS是前端DOM的编程，用户交互比较多
  等到执行完后，再通过event-loop 机制来拿回控制权(callback resolve)
  来到node，js获取了服务器端的能力，readdirSync()
