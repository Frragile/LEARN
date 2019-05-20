const http = require('http');
const url = require('url');
const queryString = require('querystring')

// /
// /favicon.ico 浏览器网页小图标
http.createServer((req, res) => {
  // req request请求 res response响应 query 查询
  if (req.url === '/favicon.ico') return;
  const urlObj = url.parse(req.url);
  const queryObj = queryString.parse(urlObj.query) //[Object: null prototype] { query: '吴赫', type: 'all' }
  console.log(queryObj);
  // {query:'吴赫',type='all'}
  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' }) //plain -> html
  // res.end(JSON.stringify(queryObj))//返回内容 告诉我们是字符串
  res.end(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
  ${JSON.stringify(queryObj)}
  </body>
  </html>\
    `)
})
  .listen(3000, () => {
    console.log('服务正在 3000 端口');
  })
  //
  // 协议 域名 端口号 路径
  // http://localhost:3000/?query=%E5%90%B4%E8%B5%AB&type=all
