- 无编译 不代码
  webpack已经成为工作流程的霸主
  vue-cli
  编译过程和js的promise一样 是一个异步的
  1. 代码卸载 dev src/
  2. 上线在 build dist/
  3. 启动web 服务器 webpack-dev-server

- webpack html template
  plugin html-webpack-plugin

- log 不在根目录下，怎么找到它 多写点地址 ./utils/log.js
  alias 路径缩写 不需要写完整路径，可以快速定位文件位置
  
  resolve 找.js文件 
    -> module 要搞定的问题需要用到哪个模块 
      -> rules 在module模块下通过rules规则里面匹配.js文件
        -> babel-loader 交给babel-loader处理

babel-core babel-cli babel-preset-env
babel-loader 存在兼容性问题，需要安装相应指定版本 v7.1.4
module 
rules:[
  {
    test:/\.js$/,
    use:'babel-loader'
  }
]
resolve:{
  extensions:['.js']
}

8080 webpack-dev-server html-webpack-plugin
template ./src/index.html
为什么 js 运行了
html+js

<script type="text/javascript" src="main.js"></script> 打包成main.js文件引入
将模板文件由webpack入口文件index.html编译成html，在下面将webpack编译的main.js文件引入 形成首页（不是开始的模板问及那

- webpack 一切皆可打包 打包到js里 main.js
  css 对于js 来说是个文本
  img 对于js 宝贝城base64
  但是css 应该独立打包，性能优化需要,尽早渲染dom树
  
  只有main.js的时候 他的显示是最慢的

>yarn add webpack webpack-cli webpack-dev-server -D 
  -D开发阶段的依赖
>"webpack-dev-server": "^3.4.1"
>yarn add babel-core babel-cli babel-preset-env
yarn add babel-core babel-cli babel-pre