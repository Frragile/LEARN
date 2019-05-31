>npm install superagent -S

>npm install cheerio -S

>npm i nodemailer -S

>npm i ejs -S
## $
> const SingleDay = $(elem).find("li");
- x.find() 查找 x 元素下面的内容 $('.box').find('p');

> const Day = $(SingleDay[0]).text().replace(/\s/g, "");
- \s 空白字符 
- .replace(/\s/g, "") 去除无用的空白字符

## Promise.all
promise.all([promise组成的数组])
返回一个 promise 所有的promise resolve的时候 它才resolve
resolve时候的值 就是 所有promise resolve组成的数组

## 模板引擎
发漂亮的邮件 需要发送 html
html 不是静态的 需要数据填充
{{ name }}
{name } 变量编译进去
模板引擎 同理 - 将位置占好 ，再将变量编译进去
编译成html

MVC 
jsp
node 模板引擎 承载页面充当一个(view)的角色
ejs jade 模板引擎
<%= %> 变量
<% %> js执行

ifjzgtybrkhwbech