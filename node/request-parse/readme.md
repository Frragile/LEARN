# 通用首部 处理get和post请求方式的数据解析

# 响应头
- Content-Type: 告诉浏览器 返回的东西是什么类型
  类型：text/plain text/html ... image/jpg mime
# 请求头
- Content-Type 告诉后台 发送数据的格式
  post 请求格式1： application/x-www-form-urlencoded form 默认编码
  post 请求格式2： application/json json 交换数据

  区别：
    表单编码的格式 发给后端
    json的格式 发给后端
 
  - 获取请求头：
    在req大对象上，上面有headers的信息 req.headers[]
    想要content-type这个头 req.headers['content-type']
  - 获取请求方式：
    req.method
  - url
    req.url

## Get请求
- >?query=''&type=''&a=''
  1. 拿query 用url.parse()
  2. 拿对象 queryString 
  
## Post

## createServer 
- http默认端口80 listen指定另外一个端口
