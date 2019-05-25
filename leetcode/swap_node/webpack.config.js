const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin=require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  // 如何解决 modules模块机制 rules方案 添加规则
  module: {
    rules: [{//使用正则表达式匹配js文件
      test: /\.css$/,
      use: ExtractTextPlugin.extract({ //使用ExtractTextPlugin 从js文件中把文本吸出来
        fallback: 'style-loader',
        use: [
          'css-loader'
        ]
      })
    },
    {
      test: /\.js$/,
      include: [//声明 在这个项目中的所有js文件不需要全部处理 只需处理指定目录下的
        path.resolve(__dirname, 'src')
      ],
      use: 'babel-loader' //使用babel-loader编译文件
    }]
  },
  // resolve 搞定哪些问题
  resolve: {
    alias: {// 匹配一个短连接
      //和log相关的文件的路径 同步解析为src目录下的utils下的log.js
      log$: path.resolve(__dirname, 'src/utils/log.js')//超级变量 一定是根目录 和webpack同级
    },
    extensions: ['.js', '.css'] // 允许自动补全后缀
  },
  plugins: [
    // 插件 帮助html来到webpack开发模式中
    new HtmlWebpackPlugin({
      filename: 'index.html',// 将模板文件编译成为index.html 交给webpack-dev-server
      template: 'src/index.html' //模板文件
    }),
    new ExtractTextPlugin('[name].css') //默认 由它自己决定
  ]
}