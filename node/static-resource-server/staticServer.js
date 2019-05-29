const http = require('http');
const fs = require('fs');
const path = require('path');
// 浏览器转圈  说明没有响应
// localhost:8080/static/[index.html]
http.createServer((req, res) => {
  // console.log(req.url) // /pic.jpg
  // static/index.html ->
  // static/xxx.png ->
  const url = req.url;
  // ^
  if (/^\/static\//.test(url)) {
    staticServer(req, res);
    return false;
  }
  // 请求index.html文件，先读出文件的内容 （指定文件目录，读取文件格式，回调
  // fs.readFile('./static/index.html', 'binary', (err, file) => {
  //   // 读取到文件之后以二进制格式写回
  //   res.write(file, 'binary');
  //   res.end();
  // })
})
  .listen(8080, () => {
    console.log('server is running 8080')
  })
function staticServer(req, res) {
  let url = req.url;
  if (url === '/static/') url += 'index.html'; //http://localhost:8080/static/ +[index.html]
  console.log('url', url);
  const filePath = path.join(__dirname, url);
  fs.exists(filePath, exists => {
    if (!exists) {
      res.end(`the request url:${url} was not found`);
    } else {
      fs.readFile(filePath, 'binary', (err, file) => {
        if (!err) {
          res.write(file, 'binary');
          res.end();
        }
      })
    }
  })
}