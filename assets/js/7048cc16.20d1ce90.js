"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6784],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(r),m=a,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},65122:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,c={unversionedId:"\u524d\u7aef/es6\u8bed\u6cd5",id:"\u524d\u7aef/es6\u8bed\u6cd5",title:"es6\u8bed\u6cd5",description:"\u6570\u7ec4\u8fc7\u6ee4",source:"@site/docs/\u524d\u7aef/es6\u8bed\u6cd5.md",sourceDirName:"\u524d\u7aef",slug:"/\u524d\u7aef/es6\u8bed\u6cd5",permalink:"/docs/\u524d\u7aef/es6\u8bed\u6cd5",draft:!1,editUrl:"https://github.com/heshibin/heshibin.github.io/edit/main/docs/\u524d\u7aef/es6\u8bed\u6cd5.md",tags:[],version:"current",lastUpdatedBy:"Machu",lastUpdatedAt:1676858665,formattedLastUpdatedAt:"Feb 20, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6e10\u53d8\uff08Gradients\uff09",permalink:"/docs/\u524d\u7aef/css3/\u6e10\u53d8"},next:{title:"Docusaurus\u5f15\u5165cursor-effects\u5b9e\u73b0\u9f20\u6807\u7279\u6548",permalink:"/docs/\u524d\u7aef/javascript/Docusaurus-\u9f20\u6807\u7279\u6548"}},u={},l=[{value:"\u6570\u7ec4\u8fc7\u6ee4",id:"\u6570\u7ec4\u8fc7\u6ee4",level:4},{value:"\u6570\u7ec4\u4e2d\u67d0\u4e00\u9879\u6c42\u548c",id:"\u6570\u7ec4\u4e2d\u67d0\u4e00\u9879\u6c42\u548c",level:4},{value:"\u6570\u7ec4\u5feb\u901f\u53bb\u91cd",id:"\u6570\u7ec4\u5feb\u901f\u53bb\u91cd",level:4}],p={toc:l};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"\u6570\u7ec4\u8fc7\u6ee4"},"\u6570\u7ec4\u8fc7\u6ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"let arr = [1, 2, 3];\nlet newArr = arr.filter((item, index, arr) => {\n    return item <= 2;\n})\n")),(0,a.kt)("h4",{id:"\u6570\u7ec4\u4e2d\u67d0\u4e00\u9879\u6c42\u548c"},"\u6570\u7ec4\u4e2d\u67d0\u4e00\u9879\u6c42\u548c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"let arrquantitynew = item.items.map(itemnew => {\n  return itemnew.quantity;\n});\narrquantitynew = arrquantitynew.reduce((n,m) => n + m);\n")),(0,a.kt)("h4",{id:"\u6570\u7ec4\u5feb\u901f\u53bb\u91cd"},"\u6570\u7ec4\u5feb\u901f\u53bb\u91cd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const arr = [1,1,2,2,3,3,]\narr.reduce((prev,current)=>{\n    !prev.includes(current) && prev.push(current)\n    return  prev\n},[])\n")))}s.isMDXComponent=!0}}]);