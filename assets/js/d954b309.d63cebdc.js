"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3776],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),g=i,f=u["".concat(c,".").concat(g)]||u[g]||d[g]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},45745:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const a={slug:"/t/nginx/prohibit-direct-access-through-ip",title:"Nginx\u7981\u6b62IP\u76f4\u63a5\u8bbf\u95ee\u7f51\u7ad9",description:"\u7981\u6b62\u522b\u4eba\u76f4\u63a5\u901a\u8fc7IP\u8bbf\u95ee\u7f51\u7ad9\uff0c\u5728nginx\u7684server\u914d\u7f6e\u6587\u4ef6\u524d\u9762\u52a0\u4e0a\u5982\u4e0b\u7684\u914d\u7f6e\uff0c\u5982\u679c\u6709\u901a\u8fc7IP\u76f4\u63a5\u8bbf\u95ee\u7684\uff0c\u76f4\u63a5\u62d2\u7edd\u8fde\u63a5(\u9700\u8981\u53bb\u6389\u522b\u7684server\u4e0b\u7684default_server)\u3002",keywords:["nginx"],date:new Date("2023-02-28T00:00:00.000Z"),tags:["nginx","2023-02"],last_update:{date:new Date("2023-02-28T00:00:00.000Z"),author:"machu"}},o=void 0,s={unversionedId:"\u5de5\u5177/Nginx/\u7981\u6b62\u901a\u8fc7IP\u76f4\u63a5\u8bbf\u95ee",id:"\u5de5\u5177/Nginx/\u7981\u6b62\u901a\u8fc7IP\u76f4\u63a5\u8bbf\u95ee",title:"Nginx\u7981\u6b62IP\u76f4\u63a5\u8bbf\u95ee\u7f51\u7ad9",description:"\u7981\u6b62\u522b\u4eba\u76f4\u63a5\u901a\u8fc7IP\u8bbf\u95ee\u7f51\u7ad9\uff0c\u5728nginx\u7684server\u914d\u7f6e\u6587\u4ef6\u524d\u9762\u52a0\u4e0a\u5982\u4e0b\u7684\u914d\u7f6e\uff0c\u5982\u679c\u6709\u901a\u8fc7IP\u76f4\u63a5\u8bbf\u95ee\u7684\uff0c\u76f4\u63a5\u62d2\u7edd\u8fde\u63a5(\u9700\u8981\u53bb\u6389\u522b\u7684server\u4e0b\u7684default_server)\u3002",source:"@site/docs/\u5de5\u5177/Nginx/\u7981\u6b62\u901a\u8fc7IP\u76f4\u63a5\u8bbf\u95ee.md",sourceDirName:"\u5de5\u5177/Nginx",slug:"/t/nginx/prohibit-direct-access-through-ip",permalink:"/docs/t/nginx/prohibit-direct-access-through-ip",draft:!1,editUrl:"https://github.com/heshibin/heshibin.github.io/edit/main/docs/\u5de5\u5177/Nginx/\u7981\u6b62\u901a\u8fc7IP\u76f4\u63a5\u8bbf\u95ee.md",tags:[{label:"nginx",permalink:"/docs/tags/nginx"},{label:"2023-02",permalink:"/docs/tags/2023-02"}],version:"current",lastUpdatedBy:"machu",lastUpdatedAt:1677542400,formattedLastUpdatedAt:"Feb 28, 2023",frontMatter:{slug:"/t/nginx/prohibit-direct-access-through-ip",title:"Nginx\u7981\u6b62IP\u76f4\u63a5\u8bbf\u95ee\u7f51\u7ad9",description:"\u7981\u6b62\u522b\u4eba\u76f4\u63a5\u901a\u8fc7IP\u8bbf\u95ee\u7f51\u7ad9\uff0c\u5728nginx\u7684server\u914d\u7f6e\u6587\u4ef6\u524d\u9762\u52a0\u4e0a\u5982\u4e0b\u7684\u914d\u7f6e\uff0c\u5982\u679c\u6709\u901a\u8fc7IP\u76f4\u63a5\u8bbf\u95ee\u7684\uff0c\u76f4\u63a5\u62d2\u7edd\u8fde\u63a5(\u9700\u8981\u53bb\u6389\u522b\u7684server\u4e0b\u7684default_server)\u3002",keywords:["nginx"],date:"2023-02-28T00:00:00.000Z",tags:["nginx","2023-02"],last_update:{date:"2023-02-28T00:00:00.000Z",author:"machu"}},sidebar:"tutorialSidebar",previous:{title:"Nginx\u670d\u52a1\u5668\u4e0a\u5b89\u88c5SSL\u8bc1\u4e66",permalink:"/docs/t/nginx/instal-ssl-cert"},next:{title:"idea\u5feb\u6377\u952e",permalink:"/docs/\u5de5\u5177/idea\u5feb\u6377\u952e"}},c={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u7981\u6b62\u522b\u4eba\u76f4\u63a5\u901a\u8fc7IP\u8bbf\u95ee\u7f51\u7ad9\uff0c\u5728nginx\u7684server\u914d\u7f6e\u6587\u4ef6\u524d\u9762\u52a0\u4e0a\u5982\u4e0b\u7684\u914d\u7f6e\uff0c\u5982\u679c\u6709\u901a\u8fc7IP\u76f4\u63a5\u8bbf\u95ee\u7684\uff0c\u76f4\u63a5\u62d2\u7edd\u8fde\u63a5(\u9700\u8981\u53bb\u6389\u522b\u7684server\u4e0b\u7684default_server)\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-conf"},"server {\n  listen 80 default_server;\n  return 403;\n}\n")))}u.isMDXComponent=!0}}]);