import axios from 'axios'
import tools from './tools'
import { Message, Loading } from 'element-ui'
let _loading
let responseType
let { NODE_ENV, VUE_APP_BASE_API ,VUE_APP_BASE_URL} = process.env
const token = sessionStorage.getItem('userToken');
const userInfo = JSON.parse(sessionStorage.getItem('userInfo')) || {};
// 仅在生产环境判断是否存在token
if (NODE_ENV === 'production' && !token) {
  Message.closeAll();
  Message.warning('用户未登录，正在前往登陆页面...')
  location.href = `${process.env.VUE_APP_BASE_URI}/index.html`
}
// create an axios instance
const service = axios.create({
//   baseURL: VUE_APP_BASE_API, // url = base url + request url
  timeout: 300000, // request timeout
  withCredentials:true,
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded'
    'Content-Type': 'application/json'
  },
  transformRequest: [data => {
    if (data) {
      if (NODE_ENV != 'production' && !data.modifyUser) {
      }
    }
    return JSON.stringify(data)
  }]
})
// request interceptor
service.interceptors.request.use(
  config => {
    _loading = Loading.service({
      lock: true,
      text: '加载中',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.5)'
    })
    if (config.url) {
      if (config.url.includes("?")) {
        if (!config.url.includes("_random")) {
          config.url = config.url + "&_random=" + Math.random();
        }
      } else {
        config.url = config.url + "?_random=" + Math.random();
      }
    }
    console.log(config)
    if (config.params) {
      config.params.userToken = token;
      config.params.modifyUser = userInfo.email;
      if (NODE_ENV != 'production' && !config.params.modifyUser) {
        config.params.modifyUser = 'testuser1'
      }
    }
    responseType = config.responseType;
    config.headers.U2AT = tools.getCookie('U2AT');
    config.headers.userToken = '54b736356b135701e9369a09bdcfd5cdf1a8d3ae201c78f3298ce74f50c2f22775c897c2689c0b8cf8dd53ffc03201914378b8516a41aaa80cf977e79edb814167289f70a1f656a50c6bd1fbbbe55f47ab4181ce25410d35f333030bb1d8f345e5220d3237df132d5a9a65b975b517efbab720e11b7fbc17d6c87cd9c2cae40f4412557039f4a53d6cb984fecd496af067a4f6137a19de69450cd012a26fb4220670fac3f9103c36cf0d4fb37de312b9b7f70371130afc6bcd4040b6e1a1cd721fe912c40f24134c8dea2bf81a07e62d0b27cd6b7bd3129a76be2f316fd0a280';
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code.
   */
  ({ res }) => {
    _loading.close();
    if(responseType != 'blob'){
      let { code, errorMsg ,message,data } = res
      if(code == 490 && NODE_ENV != 'development'){
        Message.closeAll();
        Message.warning('用户未登录，正在前往登陆页面...')
        location.href = `${process.env.VUE_APP_BASE_URI}/index.html`
      }
      if (code != 200) {
        Message.closeAll();
        Message({
          showClose: true,
          message: errorMsg || message || data,
          type: 'error',
          duration: 5000
        })
      }
    }
    return res

  },
  error => {
    _loading.close()
    return Promise.reject(error)
  }
)

export default service
