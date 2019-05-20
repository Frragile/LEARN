生产线 Webpack 代码生产工艺 工作流 WorkFlow 

- 前端开发 html + css + js = development 开发阶段
  html 可能只是个templete 有{{}} 预编译
  css stylus
  js es6,7,8,9 => es5(大部分浏览器支持)
  
  开发要考虑最后代码运行的环境 env：
  - 使用什么浏览器？ js在前端还是后端运行？

- js 
  处理js问题：babel
  能让js使用最新的技术开发，由babel编译成es5 或任何适应于平台的输出,帮助你把js降级
  
  工具准备：
  - 安装yarn
  > npm install -g yarn 
  - 初始化node文件
  > npm init -y 
  - 安装插件
  > yarn add babel-core babel-cli babel-preset-env
  - 专门处理展开问题
  > yarn add babel-plugin-transform-object-rest-spread
  > yarn add eslint 
    配置 .babelrc文件
        //babel 的配置文件 告诉babel 你要如何编译
      {
        // 预处理 将js按照环境来编 默认将es6编成es5
        "presets": [
          "env"
        ]
      }

  > npm run
  > npm run build
  
  > yarn add webpack  
  > yarn add webpack-cli webpack-dev-server

- babel-core 核心的转译库
  npm run build "babel..." build的是脚本的名字 
  
  后面执行的是babelxxxx文件 -o xxxx文件 将一个文件输出成另一个文件
     > babel index.js -o babel-compile.js

- babel-cli 
- babel-preset-env 其中预编译的一个规则
  配合 .babelrc
  {
    "presets":["env"] 可以编译成任何样式 "env"：按照当前环境编译
  }

- preset 预处理
  如果env搞不定 就安装插件 
  > yarn add babel-plugin-...

- yarn add eslint 强势检查工具工具 限制规范代码

- webpack 是一切工作流的主宰 最复杂
  webpack --mode development (会出现dist目录)

  /src 开发目录 以后所有代码都在这个目录下写
  /dist 上线目录 开发和上线还差整个webpack工艺

- 开发时 development 强调的是代码的可读性 dev阶段 本地 localhost
- 上线时 production 产品阶段 代码要压缩，混淆代码 要经历build过程 服务器 域名
- 测试 test 将你的代码提交到测试服务器上去 没有问题要提交到产品服务器上去 局域网 在内网中访问