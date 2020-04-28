
// 引用 npm ip包，用来获取本地ip等操作，文档地址：https://www.npmjs.com/package/ip
const ip = require('ip')//我是dev的修改
// 引用path包(path属于node自带包，无需在package.json中引用安装即可直接引用)，用来操作路径，文档地址：https://nodejs.org/docs/latest/api/path.html
const path = require('path')
// 引用 npm html-webpack-inline-plugin包，用来将html中inline标识的<script>,<link>,<img>标签的元素内容压缩进html中
// const HtmlWebpackInlinePlugin = require('html-webpack-inline-plugin')
// 引用 npm filemanager-webpack-plugin包，用来操作文件，允许复制，归档成 (.zip/.tar/.tar.gz)，移动，删除文件和目录在构建前或者构建前， 文档地址：https://www.npmjs.com/package/filemanager-webpack-plugin
const FileManagerPlugin = require('filemanager-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
// 判断时候是生产环境 devxiugai  
const isProd = process.env.NODE_ENV === 'production'
console.log('环境1：', process.env.NODE_ENV);
function getPage(index = "index", entry = 'src/main.js', template = 'public/index.html', filename = 'index') {
  return {
    [index]: {
      // page 的入口
      entry: entry,
      // 模板来源afdsfasdfasdfdsa
      template: template,
      // 在 dist/index.html 的输出
      filename: `${filename}.html`,
      // 当使用 title 选项时，template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      // title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
    // 当使用只有入口的字符串格式时，模板会被推导为 `public/subpage.html`，并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // subpage: 'src/subpage/main.js'} 
  }
}
  let pages = getPage()
  // if (process.argv[4] == 'xd') {
  //   pages = getPage('xd', 'src/views/xd-store/xd-index.js', 'public/xd.html', 'xd')
  // }
  let _config = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: '',//相对于dist的路径
    // indexPath:'',//相对dist的路径
    filenameHashing: true,//默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希
    css: {
      extract: true,
      sourceMap: false
    },
    productionSourceMap: false,//生产环境的map
    pages: {
      index: {
        // page 的入口
        entry: 'src/main.js',
        // 模板来源
        template: 'public/index.html',
        // 在 dist/index.html 的输出
        filename: `index.html`,
        // 当使用 title 选项时，template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        // title: 'Index Page',
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ['chunk-vendors', 'chunk-common', 'index']
      }
      // 当使用只有入口的字符串格式时，模板会被推导为 `public/subpage.html`，并且如果找不到的话，就回退到 `public/index.html`。
      // 输出文件名会被推导为 `subpage.html`。
      // subpage: 'src/subpage/main.js'} 
    },
    devServer: {
      https: false,
      port: 80,
      // host: 'mcrm.staff.xdf.cn',
      host: 'localhost',
      // host: '10.200.80.17',
      disableHostCheck: true,
      open: true
    },
    /*configureWebpack: {
      plugins: config => {
        if (process.env.NODE_ENV === 'production') {
          // 为生产环境修改配置...
        } else {
          // 为开发环境修改配置...
        }
      },
      performance: {
        maxEntrypointSize: 2048000,
        maxAssetSize: 2048000
      }
    },*/
    configureWebpack: config => {
      console.log('环境2：', process.env.NODE_ENV)
      console.log('process：', process.argv[4])
      config.resolve.alias = {
        '@@@@': path.join(__dirname, 'src')
      },
        //也就是说当遇到  require('./data')  这样的导入语句时，Webpack 会先去寻找  
        //./data.js  文件，如果该文件不存在就去寻找  ./data.json  文件， 如果还是找不到就报错。
        config.resolve.extensions = ['.js', '.vue', '.json'];
      /**
       *  resolve.modules  配置 Webpack 去哪些目录下寻找第三方模块，默认是只会去  node_modules  目录下寻找。 
       * 有时你的项目里会有一些模块会大量被其它模块依赖和导入，由于其它模块的位置分布不定，
       * 针对不同的文件都要去计算被导入模块文件的相对路径， 这个路径有时候会很长，就像这样  import '../../../components/button'  这时你可以利用  modules  配置项优化，假如那些被大量导入的模块都在  ./src/components  目录下，把  modules  配置成
           modules:['./src/components','node_modules']
        后，你可以简单通过  import 'button'  导入。
       */
      // config.resolve.modules =['./src/components','node_modules'];
      if(process.argv[4] == 'xd'){
        config.plugins.push(
          new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'src', 'lib/copy.js'),
            to: 'copy_lib'
          }])
        )

      }
    },
    pluginOptions: {
      foo: {
        // 插件可以作为 `options.pluginOptions.foo` 访问这些选项。
      }
    }
  }

  module.exports = _config;
