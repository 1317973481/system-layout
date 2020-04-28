const path = require('path');//我是直接在线上修改的,你改我也该ahfsoafdhopafdhphafdsphadfspsadfhpasdfhpfa
const absolutePath = require('./absolute.path');
const CopyWebpackPlugin = require('copy-webpack-plugin');//服气不小老弟，你必定爆冲突，是的小老弟
//你改我也该  dev修改
function resolve(dir) {
  return path.join(__dirname, "./", dir);
}
function getCurrentTime(fmt) {
  let t=new Date();//dev xiugai
  var o = {
      "M+": t.getMonth() + 1, //月份
      "d+": t.getDate(), //日
      "h+": t.getHours(), //小时
      "m+": t.getMinutes(), //分
      "s+": t.getSeconds(), //秒
      "q+": Math.floor((t.getMonth() + 3) / 3), //季度
      "S": t.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt))
      fmt = fmt.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt))
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}


let objectProject = {
  android: {
    entry: ['./src/main.js', './src/views/Home/loading/loading.js'], // page 的入口
    template: './src/entrys/index.html', // 模板来源
    filename: 'index.html', // 在 dist/index.html 的输出
    chunks: ['chunk-vendors', 'chunk-common', 'android']
  },
  ios: {
    entry: ['./src/main.js', './src/views/Home/loading/loading.js'], // page 的入口
    template: './src/entrys/index.html', // 模板来源
    filename: 'index.html', // 在 dist/index.html 的输出
    chunks: ['chunk-vendors', 'chunk-common', 'ios']
  },
  wx: {
    entry: './src/main.js', // page 的入口
    template: './src/entrys/index.html', // 模板来源
    filename: 'index.html', // 在 dist/index.html 的输出
    chunks: ['chunk-vendors', 'chunk-common', 'wx']
  },
  allinonewx:{ //企业微信
    entry: './src/views/Allinonewx/main.js', // page 的入口
    template: './src/entrys/allinone-wx.html', // 模板来源
    filename: 'allinonewx.html', // 在 dist/index.html 的输出
    chunks: ['chunk-vendors', 'chunk-common', 'allinonewx']
  },
  allinoneac:{  //奥创
    entry: './src/views/Allinoneac/main.js', // page 的入口
    template: './src/entrys/allinone-ac.html', // 模板来源
    filename: 'allinoneac.html', // 在 dist/index.html 的输出
    chunks: ['chunk-vendors', 'chunk-common', 'allinoneac']
  },
  index: {
    entry: './src/main.js', // page 的入口
    template: './src/entrys/index.html', // 模板来源
    filename: 'index.html', // 在 dist/index.html 的输出
    chunks: ['chunk-vendors', 'chunk-common', 'index']
  }
}
let page = {}
let projectname = process.argv[3] // 获取执行哪个文件
if (process.env.NODE_ENV == 'development') {
  page = objectProject;
} else {
  page[projectname] = objectProject[projectname];
}
 let _config={
    publicPath: './',
    outputDir: 'kuafu_'+ projectname + getCurrentTime('yyyyMMddhhmmss'),
    css: {
      extract: true,//生产环境下是 true，开发环境下是 false 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。
      sourceMap: false
    },
    pages: page,
    productionSourceMap:false,
    devServer: {
      https:false,
      port: 80,
      // host: 'mcrm.staff.xdf.cn',
      host: 'localhost',
      // host: '10.200.80.17',
      disableHostCheck: true,
      open: true
    },
    configureWebpack: {
      resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: Object.assign(
          {
            "@": resolve('src')
          },
          absolutePath
        )
      },
      plugins:[],
      performance: {
        maxEntrypointSize: 2048000,
        maxAssetSize: 2048000
      }
    }
};

if(projectname=='android' || projectname=='ios'){
    _config.configureWebpack.plugins.push(
        new CopyWebpackPlugin([{
          from: path.resolve(__dirname, 'src/lib/cordova/' + projectname),
          to: 'cordova',
        }])
    );
}
_config.configureWebpack.plugins.push(
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, 'src/entrys/favicon.ico')
    }])
);
module.exports = _config;
