const path = require('path');
const resolve = dir => path.join(__dirname, dir);

const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: path.join(__dirname, './src/main.js'),
  output: {
    path: path.join(__dirname, './src/dist/'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      '@': resolve('src'),
      '~': resolve('src/assets'),
    }
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|png|gif|jpeg|bmp)$/,
        use: 'url-loader?limit=7624&name=[name].[ext]'
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        use: 'url-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({ // 根据指定模板页面生成内存镜像
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    }),
    new VueLoaderPlugin() // 4.x
  ]
}