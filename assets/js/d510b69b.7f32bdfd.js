"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[880],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),h=r,f=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return t?a.createElement(f,c(c({ref:n},p),{},{components:t})):a.createElement(f,c({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=h;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},61929:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const o={title:"axios\u4e4bCancelToken\u53d6\u6d88\u8bf7\u6c42",description:"\u5728\u9879\u76ee\u4e2d\u5207\u6362\u9891\u7e41\u5207\u6362\u8def\u7531\u65f6\uff0c\u5f53\u4e0a\u4e00\u4e2a\u8def\u7531\u5c1a\u672a\u6709\u54cd\u5e94\u65f6\uff0c\u4f1a\u5bf9\u5f53\u524d\u8def\u7531\u7684\u9875\u9762\u4fe1\u606f\u6e32\u67d3\u4ea7\u751f\u4e00\u5b9a\u5f71\u54cd\uff0c\u5bf9\u6211\u4eec\u7684\u6027\u80fd\u4f1a\u9020\u6210\u4e00\u5b9a\u5f71\u54cd\u3002",keywords:["axios","CancelToken"],date:new Date("2023-02-03T00:00:00.000Z"),authors:"heshibin",tags:["axios"],last_update:{date:new Date("2023-02-03T00:00:00.000Z"),author:"machu"}},c=void 0,i={unversionedId:"\u524d\u7aef/axios/axios\u4e4bCancelToken\u53d6\u6d88\u8bf7\u6c42",id:"\u524d\u7aef/axios/axios\u4e4bCancelToken\u53d6\u6d88\u8bf7\u6c42",title:"axios\u4e4bCancelToken\u53d6\u6d88\u8bf7\u6c42",description:"\u5728\u9879\u76ee\u4e2d\u5207\u6362\u9891\u7e41\u5207\u6362\u8def\u7531\u65f6\uff0c\u5f53\u4e0a\u4e00\u4e2a\u8def\u7531\u5c1a\u672a\u6709\u54cd\u5e94\u65f6\uff0c\u4f1a\u5bf9\u5f53\u524d\u8def\u7531\u7684\u9875\u9762\u4fe1\u606f\u6e32\u67d3\u4ea7\u751f\u4e00\u5b9a\u5f71\u54cd\uff0c\u5bf9\u6211\u4eec\u7684\u6027\u80fd\u4f1a\u9020\u6210\u4e00\u5b9a\u5f71\u54cd\u3002",source:"@site/docs/\u524d\u7aef/axios/axios\u4e4bCancelToken\u53d6\u6d88\u8bf7\u6c42.md",sourceDirName:"\u524d\u7aef/axios",slug:"/\u524d\u7aef/axios/axios\u4e4bCancelToken\u53d6\u6d88\u8bf7\u6c42",permalink:"/docs/\u524d\u7aef/axios/axios\u4e4bCancelToken\u53d6\u6d88\u8bf7\u6c42",draft:!1,editUrl:"https://github.com/heshibin/heshibin.github.io/edit/main/docs/\u524d\u7aef/axios/axios\u4e4bCancelToken\u53d6\u6d88\u8bf7\u6c42.md",tags:[{label:"axios",permalink:"/docs/tags/axios"}],version:"current",lastUpdatedBy:"machu",lastUpdatedAt:1675382400,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{title:"axios\u4e4bCancelToken\u53d6\u6d88\u8bf7\u6c42",description:"\u5728\u9879\u76ee\u4e2d\u5207\u6362\u9891\u7e41\u5207\u6362\u8def\u7531\u65f6\uff0c\u5f53\u4e0a\u4e00\u4e2a\u8def\u7531\u5c1a\u672a\u6709\u54cd\u5e94\u65f6\uff0c\u4f1a\u5bf9\u5f53\u524d\u8def\u7531\u7684\u9875\u9762\u4fe1\u606f\u6e32\u67d3\u4ea7\u751f\u4e00\u5b9a\u5f71\u54cd\uff0c\u5bf9\u6211\u4eec\u7684\u6027\u80fd\u4f1a\u9020\u6210\u4e00\u5b9a\u5f71\u54cd\u3002",keywords:["axios","CancelToken"],date:"2023-02-03T00:00:00.000Z",authors:"heshibin",tags:["axios"],last_update:{date:"2023-02-03T00:00:00.000Z",author:"machu"}},sidebar:"tutorialSidebar",previous:{title:"antd\u81ea\u5b9a\u4e49\u4e0a\u4f20\u7f3a\u5931\u8fdb\u5ea6\u6761\u89e3\u51b3\u65b9\u6cd5",permalink:"/docs/\u524d\u7aef/antd/antd\u81ea\u5b9a\u4e49\u4e0a\u4f20\u7f3a\u5931\u8fdb\u5ea6\u6761\u89e3\u51b3\u65b9\u6cd5"},next:{title:"\u6e10\u53d8\uff08Gradients\uff09",permalink:"/docs/\u524d\u7aef/css3/\u6e10\u53d8"}},s={},l=[{value:"\u5177\u4f53\u5b9e\u73b0",id:"\u5177\u4f53\u5b9e\u73b0",level:4}],p={toc:l};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728\u9879\u76ee\u4e2d\u5207\u6362\u9891\u7e41\u5207\u6362\u8def\u7531\u65f6\uff0c\u5f53\u4e0a\u4e00\u4e2a\u8def\u7531\u5c1a\u672a\u6709\u54cd\u5e94\u65f6\uff0c\u4f1a\u5bf9\u5f53\u524d\u8def\u7531\u7684\u9875\u9762\u4fe1\u606f\u6e32\u67d3\u4ea7\u751f\u4e00\u5b9a\u5f71\u54cd\uff0c\u5bf9\u6211\u4eec\u7684\u6027\u80fd\u4f1a\u9020\u6210\u4e00\u5b9a\u5f71\u54cd\u3002\n\u56e0\u6b64\uff0c\u6211\u4eec\u8981\u505a\u7684\u5c31\u662f\u5728\u8def\u7531\u5207\u6362\u65f6\u53d6\u6d88\u4e0a\u4e00\u8def\u7531\u672a\u54cd\u5e94\u7684\u8bf7\u6c42\uff0c\u4ece\u800c\u63d0\u9ad8\u6027\u80fd\u3002"),(0,r.kt)("h4",{id:"\u5177\u4f53\u5b9e\u73b0"},"\u5177\u4f53\u5b9e\u73b0"),(0,r.kt)("p",null,"\u5b9a\u4e49\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"CacheUtils"),"\u5b58\u50a8\u8bf7\u6c42\u63a5\u53e3\u5730\u5740\u4ee5\u53ca\u8bf7\u6c42\u4f53\u548c\u53d6\u6d88\u51fd\u6570\u4e4b\u95f4\u7684\u6620\u5c04\u5173\u7cfb\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="CacheUtils"',title:'"CacheUtils"'},'export const CacheUtils = {\n  // \u5b58\u50a8\u8bf7\u6c42\u63a5\u53e3\u5730\u5740\u4ee5\u53ca\u8bf7\u6c42\u4f53\u548c\u53d6\u6d88\u51fd\u6570\u4e4b\u95f4\u7684\u6620\u5c04\u5173\u7cfb\n  cache: {},\n  \n  // \u6839\u636e\u63d0\u4f9b\u7684\u952e\u540d key \u53d6\u6d88\u5bf9\u5e94\u7684\u8bf7\u6c42\uff0c\u82e5\u672a\u63d0\u4f9b\u5219\u53d6\u6d88\u5168\u90e8\u8bf7\u6c42\n  clearCache: function (key) {\n    if (key) {\n      const cancel = this.cache[key];\n      if (cancel && typeof cancel === \'function\') {\n        cancel("\u8bf7\u6c42\u53d6\u6d88");\n        delete this.cache[key];\n      }\n\n      return;\n    }\n\n    Object.keys(this.cache).forEach(cacheKey => {\n      const cancel = this.cache[cacheKey];\n      cancel("\u8bf7\u6c42\u53d6\u6d88");\n      delete this.cache[cacheKey];\n    });\n  },\n};\n')),(0,r.kt)("p",null,"\u8c03\u6574axios\u8bf7\u6c42\u5c01\u88c5\u7c7b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import axios from 'axios';\nconst CancelToken = axios.CancelToken;\n\n......\n\noptions = {\n  ...options,\n  cancelToken: new CancelToken(function executor(c) {\n    CacheUtils.cache[\"\u8bf7\u6c42url\"] = c\n  })\n}\n\nreturn axios(options)\n.then((response) => {\n      ......\n})\n")),(0,r.kt)("p",null,"\u5728\u9700\u8981\u53d6\u6d88\u7684\u65f6\u5019\u8c03\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'CacheUtils.clearCache("\u8bf7\u6c42url")\n')))}u.isMDXComponent=!0}}]);