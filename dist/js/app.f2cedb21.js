(function(t){function e(e){for(var o,r,u=e[0],c=e[1],l=e[2],s=0,f=[];s<u.length;s++)r=u[s],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},a={app:0},i=[];function r(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-2d0e19c3":"9a5a0e17","chunk-2d208342":"b028c089","chunk-4bba17bc":"d9ec6c8c"}[t]+".js"}function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=a[t]=[e,o]}));e.push(n[2]=o);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=r(t);var l=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(s);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,n[1](l)}a[t]=void 0}};var s=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var d=l;i.push(["08da","chunk-vendors"]),n()})({"08da":function(t,e,n){"use strict";n.r(e);n("0fae");var o=n("9e2f"),a=n.n(o),i=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("layout",{scopedSlots:t._u([{key:"main",fn:function(){return[n("router-view")]},proxy:!0}])})],1)},u=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"layout-left"},[n("el-row",{ref:"menuLeft",staticClass:"menu-left"},[n("el-col",[n("el-menu",{staticClass:"menu-left-box",attrs:{"default-active":"2","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:t.handleOpen,close:t.handleClose}},t._l(t.menuList,(function(e){return n("el-submenu",{key:e.id,attrs:{index:e.id}},["parent"==e.type?n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),n("span",[t._v(t._s(e.label))])]):t._e(),t._l(e.children,(function(e){return n("el-menu-item-group",{key:e.id},[n("el-menu-item",{attrs:{index:e.id},on:{click:function(n){return t.menuClick(e)}}},[t._v(t._s(e.label))])],1)}))],2)})),1)],1)],1)],1),n("div",{staticClass:"layout-right"},[n("div",{staticClass:"layout-top"},t._l(t.tabList,(function(e){return n("el-tag",{key:e.name,attrs:{closable:"home"!=e.name,size:"small",effect:e.active?"dark":"plain",type:e.type},on:{close:function(n){return t.tabClose(e)},click:function(n){return t.tabClick(e)}}},[t._v(t._s(e.name))])})),1),n("div",{staticClass:"layout-content"},[t._t("main")],2)])])},l=[],s=(n("7db0"),n("d81d"),n("b0c0"),n("4de4"),[{id:"1",label:"首页",path:"/",name:"home",isShow:!1},{id:"2",label:"选项",path:"",type:"parent",name:"option",children:[{id:"3",label:"选项1",path:"/option1",name:"option1"},{id:"4",label:"选项2",name:"option2",path:"/option2"}]}]),d=s.filter((function(t){return 0!=t.isShow})),f=(n("d7ac"),{name:"layout",data:function(){return{menuList:d}},components:{},created:function(){var t=this;this.$nextTick((function(){document.querySelector(".menu-left-box").style.height=window.innerHeight-10+"px",t.$router.push({path:"/"})}))},computed:{tabList:function(){return this.$store.getters.getTabList}},mounted:function(){},methods:{handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)},menuClick:function(t){t.id!=this.$store.getters.getActiveTabid&&(this.$store.commit("setTabList",this.$store.getters.getTabList.map((function(t){return t.active=!1,t}))),this.$store.getters.getTabList.find((function(e){return e.id==t.id}))?this.$store.commit("setTabList",this.$store.getters.getTabList.map((function(e){return e.id==t.id&&(e.active=!0),e}))):(this.$store.commit("addTab",{id:t.id,path:t.path,name:t.name,active:!0}),this.$store.commit("setActiveTabid",t.id)),this.$router.push({path:t.path}))},tabClose:function(t){console.log(t)},tabClick:function(t){this.$store.commit("setTabList",this.$store.getters.getTabList.map((function(e){return e.id==t.id?e.active=!0:e.active=!1,e}))),this.$store.commit("setActiveTabid",t.id),this.$router.push({path:t.path})},appendRouter:function(t){this.$router.addRoutes(t)}}}),p=f,h=(n("dead"),n("2877")),m=Object(h["a"])(p,c,l,!1,null,"7a931752",null),b=m.exports,v={name:"app",data:function(){return{}},components:{layout:b},computed:{},mounted:function(){},methods:{},created:function(){}},y=v,g=(n("cc1e"),Object(h["a"])(y,r,u,!1,null,null,null)),w=g.exports,T=n("2f62");i["default"].use(T["a"]);var k=new T["a"].Store({state:{num:0,activeTabid:"1",tabList:[{id:"1",path:"/",label:"首页",name:"home",active:!0}]},getters:{getNum:function(t){return t.num},getActiveTabid:function(t){return t.activeTabid},getTabList:function(t){return t.tabList}},mutations:{addNum:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;t.num=t.num+e},setActiveTabid:function(t,e){t.activeTabid=e},setTabList:function(t,e){t.tabList=e},addTab:function(t,e){t.tabList.push(e)},removeTab:function(t,e){t.tabList=t.tabList.filter((function(t){return t!=e}))}},actions:{},modules:{}}),L=(n("a4d3"),n("e01a"),n("d28b"),n("99af"),n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));i["default"].use(L["a"]);var _=[];function $(t){if("parent"!=t.type&&_.push({path:t.path,component:function(e){return n.e("chunk-4bba17bc").then(function(){var o=[n("4b3b")("./".concat(t.name))];e.apply(null,o)}.bind(this)).catch(n.oe)},name:t.name,title:t.label,id:t.id,isShow:t.isShow}),t.children&&t.children.length>0){var e=!0,o=!1,a=void 0;try{for(var i,r=t.children[Symbol.iterator]();!(e=(i=r.next()).done);e=!0){var u=i.value;$(u)}}catch(c){o=!0,a=c}finally{try{e||null==r.return||r.return()}finally{if(o)throw a}}}}var x=!0,C=!1,O=void 0;try{for(var S,j=d[Symbol.iterator]();!(x=(S=j.next()).done);x=!0){var A=S.value;$(A)}}catch(M){C=!0,O=M}finally{try{x||null==j.return||j.return()}finally{if(C)throw O}}var P=[{id:"404",path:"/nofound",label:"网页找不到",name:"nofound",component:function(){return n.e("chunk-2d208342").then(n.bind(null,"a492"))}},{id:"1",path:"/",label:"首页",name:"home",component:function(){return n.e("chunk-2d0e19c3").then(n.bind(null,"7abe"))}}],R=new L["a"]({routes:[].concat(_,P)});window.hasAddRouter=!1,R.beforeEach((function(t,e,n){window.hasAddRouter||(R.addRoutes(_),window.hasAddRouter=!0),console.log(t.path),console.log(e.path),_.find((function(e){return e.path==t.path}))||"/"==t.path?n():"/nofound"==t.path?n():n("/nofound")}));var E=R;i["default"].use(a.a),i["default"].config.productionTip=!1,i["default"].prototype._proURL="我是通过原型添加的全局变量",i["default"].prototype.BUS=new i["default"];new i["default"]({router:E,store:k,render:function(t){return t(w)}}).$mount("#app")},"7b73":function(t,e,n){},cc1e:function(t,e,n){"use strict";var o=n("cd52"),a=n.n(o);a.a},cd52:function(t,e,n){},dead:function(t,e,n){"use strict";var o=n("7b73"),a=n.n(o);a.a}});