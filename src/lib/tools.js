export default {
    alert1(){
        alert('我是tools的alert1方法')
    },
    alert2(...a){
        console.log(a)
    },
    //("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
		// ("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
    dateFormat(date,fmt ="yyyy-MM-dd"){
        let o = {
            "M+": new Date(date).getMonth() + 1, //月份
            "d+": new Date(date).getDate(), //日
            "h+": new Date(date).getHours(), //小时
            "m+": new Date(date).getMinutes(), //分
            "s+": new Date(date).getSeconds(), //秒
            "q+": Math.floor((new Date(date).getMonth() + 3) / 3), //季度
            "S": new Date(date).getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (new Date(date).getFullYear() + "").substr(4 - RegExp.$1.length));
        for (let k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;

    },
     /**
   * 添加cookie
   *
   * @param objName
   *            cookie名
   * @param objValue
   *            cookie值
   * @param objHours
   *            过期时间 为0时不设定过期时间，浏览器关闭时cookie自动消失
   * @return
   */
  addCookie: function(objName, objValue, objHours, domain, path) {
    var str = objName + "=" + objValue;
    if (objHours > 0) {
      var date = new Date();
      var ms = objHours * 3600 * 1000;
      date.setTime(date.getTime() + ms);
      str += "; expires=" + date.toGMTString();
      if (domain) {
        str += "; domain=" + domain;
      }
      if (path) {
        str = str + "; path=" + path;
      } else {
        str += "; path=/";
      }
    }
    document.cookie = str;
  },
  /**
   * 获取指定名称的cookie的值
   *
   * @param objName
   *           cookie名
   * @return
   */
  getCookie: function(objName) {
    var arrStr = document.cookie.split("; ");
    for (var i = 0; i < arrStr.length; i++) {
      var temp = arrStr[i].split("=");
      if (temp[0] == objName) return unescape(temp[1]);
    }
  },
  delCookie: function(objName) {
    var date = new Date();
    date.setTime(date.getTime() - 10000);
    document.cookie = objName + "=a;path=/; expires=" + date.toGMTString();
  },

}