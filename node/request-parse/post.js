const http = require('http');

http.createServer((req, res) => {
  console.log(req.method, req.url);
  console.log('content-type', req.headers['content-type'])
  if (req.method === 'POST' && req.url === '/user') {//限制请求端是post/user
    req.on('data', (chunk) => {
      data += chunk
    })
    req.on('end', () => {
      if (req.headers['content-type'] === 'application/json') {
        res.writeHead(200, {
          'Content-Type': 'application/json;charset=utf-8'
        })
      }
      //res.end 结束请求
      res.end(data);
    })
  }
})
  .listen(3000, () => {
    console.log('服务器运行在3000 端口')
  })