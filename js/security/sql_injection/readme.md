## 前端需要负责的安全问题？

- sql_injection 注入脚本攻击
- 前端安全涉及什么？ form 表单
  form -> onsubmit -> url
  - POST方式请求数据处理 带上数据data
    POST data:{email:'user@email.com', password:'password'}

  - 后端登录 有一个sql查找的过程
    sql语法报错，服务器出错
      SELECT *
      FROM users
      WHERE email = 'user@email.com'
      AND pass  = 'password'' LIMIT 1

  - 用户的输入不可信任 password''' 导致sql的提前结束或多了''' 500错误 (后端使用编码解码解决)
  - 黑客登入账号

    - 前端 应用JS escape(password') "password%27"
    
    部分规避了这种问题
      SELECT *
      FROM users
      WHERE email = 'user@email.com'
      AND pass  = 'password%27' LIMIT 1
    
    - 后端 unescape(password%27) "password'"

