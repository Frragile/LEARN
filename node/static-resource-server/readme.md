## 静态资源
  不会随着服务运行而改变内容：html css js 图片  
  1. 如果有 index.html 打开
  2. 否则 列出所有文件
  3. 请求路径和磁盘路径一一对应

  请求:
    /static/*.*  磁盘位置static目录下面 一一对应
    1. 拿到请求的路径 req.url
    2. 读取磁盘下面同一个位置 返回
    3. 静态资源 通常放在某一个目录下面 /static/ 所以请求都以某个目录开头 ^


## 打开方式
file:// 本地文件读取协议 ./xx.png 
http://localhost:8080/ (http协议) 图片读取
html 里面引入的资源 都会发出请求

## 上传图片
### formidable
处理请求 解析请求第三方的包(npm i formidable -S)
fileds 非input[type="file"]的提交项
files input[type="file"] 提交项
根据 input 的 name 属性 来获取 值