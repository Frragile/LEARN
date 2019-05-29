const http = require('http');
// 解析请求
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
  // upload 请求方法是post时 确定这是提交按钮发起的上传请求
  if (req.url === '/upload' && req.method.toLowerCase() === 'post') {
    // 解析文件 生成一个form的实例
    const form = new formidable.IncomingForm();
    // 上传文件存放位置
    form.uploadDir = './static/';
    form.parse(req, (err, fields, files) => {
      console.log(fields, files)
      const oldPath = files.upload.path;
      const fileName = files.upload.name;
      //  path: 'static\\upload_87454cbff2fb28b6105259f9bdd1aeab',
      const dirname = path.dirname(oldPath);
      // dirname === static/
      const newPath = path.join(dirname, fileName);
      fs.rename(oldPath, newPath, (err) => {
        res.writeHead(200, {
          'Content-Type': 'text/html;charset=utf8'
        });
        res.end('文件上传完毕');
      })
    })
    return false;
  }
  res.writeHead(200, {
    'Content-Type': 'text/html;charset=utf8'
  });
  res.end(
    `
    <form action="/upload" method="POST" enctype="multipart/form-data">
      <input type="file" name="upload">
      <input type="text" name="nickname">
      <input type="submit" value="submit">
    </form>
    `
  )
}).listen(8080, () => {
  console.log('server is running port 8080')
})