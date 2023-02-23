"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8568],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(r),m=l,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return r?n.createElement(k,a(a({ref:t},d),{},{components:r})):n.createElement(k,a({ref:t},d))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,a=new Array(i);a[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:l,a[1]=o;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},26265:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(87462),l=(r(67294),r(3905));const i={},a=void 0,o={unversionedId:"\u9762\u8bd5\u9898/redis",id:"\u9762\u8bd5\u9898/redis",title:"redis",description:"redis\u7684\u6570\u636e\u7c7b\u578b",source:"@site/docs/\u9762\u8bd5\u9898/redis.md",sourceDirName:"\u9762\u8bd5\u9898",slug:"/\u9762\u8bd5\u9898/redis",permalink:"/docs/\u9762\u8bd5\u9898/redis",draft:!1,editUrl:"https://github.com/heshibin/heshibin.github.io/edit/main/docs/\u9762\u8bd5\u9898/redis.md",tags:[],version:"current",lastUpdatedBy:"Machu",lastUpdatedAt:1677153312,formattedLastUpdatedAt:"Feb 23, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"mysql",permalink:"/docs/\u9762\u8bd5\u9898/mysql"},next:{title:"zookeeper",permalink:"/docs/\u9762\u8bd5\u9898/zookeeper"}},s={},p=[{value:"redis\u7684\u6570\u636e\u7c7b\u578b",id:"redis\u7684\u6570\u636e\u7c7b\u578b",level:4},{value:"redis\u6301\u4e45\u5316\u673a\u5236",id:"redis\u6301\u4e45\u5316\u673a\u5236",level:4},{value:"redis\u8fc7\u671f\u952e\u7684\u5220\u9664\u7b56\u7565",id:"redis\u8fc7\u671f\u952e\u7684\u5220\u9664\u7b56\u7565",level:4},{value:"redis\u56de\u6536\u7b56\u7565",id:"redis\u56de\u6536\u7b56\u7565",level:4},{value:"redis\u4e3b\u4ece\u540c\u6b65\u673a\u5236",id:"redis\u4e3b\u4ece\u540c\u6b65\u673a\u5236",level:4},{value:"redis\u4e8b\u52a1",id:"redis\u4e8b\u52a1",level:4},{value:"redis\u4e8b\u52a1\u76f8\u5173\u7684\u547d\u4ee4",id:"redis\u4e8b\u52a1\u76f8\u5173\u7684\u547d\u4ee4",level:4}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"redis\u7684\u6570\u636e\u7c7b\u578b"},"redis\u7684\u6570\u636e\u7c7b\u578b"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"string"),(0,l.kt)("li",{parentName:"ol"},"hash"),(0,l.kt)("li",{parentName:"ol"},"list"),(0,l.kt)("li",{parentName:"ol"},"set"),(0,l.kt)("li",{parentName:"ol"},"sortset")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"redis\u6301\u4e45\u5316\u673a\u5236"},"redis\u6301\u4e45\u5316\u673a\u5236"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"RDB"),"\n\u5728\u67d0\u4e2a\u65f6\u95f4\u70b9\u5c06\u6570\u636e\u5199\u5165\u4e00\u4e2a\u4e34\u65f6\u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u4f18\u70b9\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u53ea\u6709\u4e00\u4e2adump.rdb \u65b9\u4fbf\u6301\u4e45\u5316"),(0,l.kt)("li",{parentName:"ol"},"\u5bb9\u707e\u6027\u597d\uff0c\u4e00\u4e2a\u6587\u4ef6\u53ef\u4ee5\u4fdd\u5b58\u5230\u5b89\u5168\u7684\u78c1\u76d8\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6027\u80fd\u6700\u5927\u5316\uff0cfork\u5b50\u8fdb\u7a0b\u6765\u5b8c\u6210\u5199\u64cd\u4f5c\uff0c\u6240\u4ee5\u662fIO\u6700\u5927\u5316\u3002")),(0,l.kt)("p",null,"\u7f3a\u70b9\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6570\u636e\u5b89\u5168\u6027\u4f4e\uff0c\u56e0\u4e3a\u662f\u95f4\u9694\u4e00\u6bb5\u65f6\u95f4\uff0c\u4f1a\u53d1\u751f\u6570\u636e\u4e22\u5931\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"AOF"),"\n\u5c06\u6240\u6709\u7684\u547d\u4ee4\u884c\u8bb0\u5f55\u4ee5redis\u547d\u4ee4\u8bf7\u6c42\u534f\u8bae\u7684\u683c\u5f0f\u5b8c\u5168\u6301\u4e45\u5316\u5b58\u50a8\uff0c\u4fdd\u5b58\u4e3aAOP\u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u4f18\u70b9\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6570\u636e\u5b89\u5168\uff0c\u6bcf\u8fdb\u884c\u4e00\u6b21\u547d\u4ee4\u64cd\u4f5c\u5c31\u8bb0\u5f55\u4e00\u6b21\u3002"),(0,l.kt)("li",{parentName:"ol"},"AOF\u673a\u5236\u4e2d\u7684rewrite\u6a21\u5f0f\uff0cAOF\u6587\u4ef6\u6ca1\u6709\u88abrewrite(\u6587\u4ef6\u8fc7\u5927\u65f6\u4f1a\u5bf9\u547d\u4ee4\u8fdb\u884c\u5408\u5e76\u91cd\u5199)\u4e4b\u524d\uff0c\u53ef\u4ee5\u5220\u9664\u5176\u4e2d\u7684\u547d\u4ee4\u3002")),(0,l.kt)("p",null,"\u7f3a\u70b9\uff1a\nAOF\u6587\u4ef6\u6bd4RDB\u6587\u4ef6\u5927\uff0c\u6062\u590d\u901f\u5ea6\u6162\u3002\n\u6570\u636e\u96c6\u5927\u7684\u65f6\u5019\uff0c\u6bd4rdb\u542f\u52a8\u6162\u3002"),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"redis\u8fc7\u671f\u952e\u7684\u5220\u9664\u7b56\u7565"},"redis\u8fc7\u671f\u952e\u7684\u5220\u9664\u7b56\u7565"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5b9a\u65f6\u5220\u9664"),(0,l.kt)("li",{parentName:"ol"},"\u60f0\u6027\u5220\u9664"),(0,l.kt)("li",{parentName:"ol"},"\u5b9a\u671f\u5220\u9664"),(0,l.kt)("li",{parentName:"ol"})),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"redis\u56de\u6536\u7b56\u7565"},"redis\u56de\u6536\u7b56\u7565"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4ece\u5df2\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4\u7684\u6570\u636e\u96c6\u4e2d\u6311\u9009\u6700\u8fd1\u6700\u5c11\u4f7f\u7528\u7684\u6570\u636e\u6dd8\u6c70"),(0,l.kt)("li",{parentName:"ol"},"\u4ece\u5df2\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4\u7684\u6570\u636e\u96c6\u4e2d\u6311\u9009\u5c06\u8981\u8fc7\u671f\u7684\u6570\u636e\u6dd8\u6c70"),(0,l.kt)("li",{parentName:"ol"},"\u4ece\u5df2\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4\u7684\u6570\u636e\u96c6\u4e2d\u968f\u673a\u6dd8\u6c70"),(0,l.kt)("li",{parentName:"ol"},"\u4ece\u6570\u636e\u96c6\u4e2d\u6311\u9009\u6700\u8fd1\u6700\u5c11\u4f7f\u7528\u7684\u6570\u636e\u6dd8\u6c70"),(0,l.kt)("li",{parentName:"ol"},"\u4ece\u6570\u636e\u96c6\u4e2d\u968f\u673a\u6dd8\u6c70"),(0,l.kt)("li",{parentName:"ol"},"\u7981\u6b62\u6dd8\u6c70\u6570\u636e")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"redis\u4e3b\u4ece\u540c\u6b65\u673a\u5236"},"redis\u4e3b\u4ece\u540c\u6b65\u673a\u5236"),(0,l.kt)("p",null,"\u7b2c\u4e00\u6b21\u540c\u6b65\u65f6\uff0c\u4e3b\u8282\u70b9\u505a\u4e00\u6b21bgsave\uff0c\u5e76\u540c\u65f6\u5c06\u540e\u7eed\u4fee\u6539\u64cd\u4f5c\u8bb0\u5f55\u5230\u5185\u5b58buffer\uff0c\u5f85\u5b8c\u6210\u540e\u5c06rdb\u6587\u4ef6\u5168\u91cf\u540c\u6b65\u5230\u590d\u5236\u8282\u70b9\uff0c\u590d\u5236\u8282\u70b9\u63a5\u53d7\u5b8c\u6210\u4e4b\u540e\u5c06rdb\u955c\u50cf\u52a0\u8f7d\u5230\u5185\u5b58\u4e2d\uff0c\u52a0\u8f7d\u5b8c\u6210\u540e\uff0c\u901a\u77e5\u4e3b\u8282\u70b9\u5c06\u671f\u95f4\u4fee\u6539\u7684\u64cd\u4f5c\u8bb0\u5f55\u540c\u6b65\u5230\u590d\u5236\u8282\u70b9\u8fdb\u884c\u91cd\u653e\u5c31\u5b8c\u6210\u4e86\u540c\u6b65\u3002"),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"redis\u4e8b\u52a1"},"redis\u4e8b\u52a1"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4e8b\u52a1\u662f\u4e00\u4e2a\u5355\u72ec\u7684\u9694\u79bb\u64cd\u4f5c\uff0c\u4e8b\u52a1\u4e2d\u7684\u6240\u6709\u547d\u4ee4\u90fd\u4f1a\u5e8f\u5217\u5316\u3001\u6309\u987a\u5e8f\u7684\u6267\u884c\u3002\u4e8b\u52a1\u5728\u6267\u884c\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4e0d\u4f1a\u88ab\u5176\u4ed6\u5ba2\u6237\u7aef\u53d1\u9001\u6765\u7684\u547d\u4ee4\u6253\u65ad\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4e8b\u52a1\u662f\u4e00\u4e2a\u539f\u5b50\u64cd\u4f5c\u3002")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"redis\u4e8b\u52a1\u76f8\u5173\u7684\u547d\u4ee4"},"redis\u4e8b\u52a1\u76f8\u5173\u7684\u547d\u4ee4"),(0,l.kt)("p",null,"MULTI\u3001EXEC\u3001DISCARD\u3001WATCH"),(0,l.kt)("hr",null))}u.isMDXComponent=!0}}]);