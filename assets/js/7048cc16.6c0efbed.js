"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6784],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),m=a,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},65122:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,c={unversionedId:"\u524d\u7aef/es6\u8bed\u6cd5",id:"\u524d\u7aef/es6\u8bed\u6cd5",title:"es6\u8bed\u6cd5",description:"\u6570\u7ec4\u8fc7\u6ee4",source:"@site/docs/\u524d\u7aef/es6\u8bed\u6cd5.md",sourceDirName:"\u524d\u7aef",slug:"/\u524d\u7aef/es6\u8bed\u6cd5",permalink:"/docs/\u524d\u7aef/es6\u8bed\u6cd5",draft:!1,editUrl:"https://github.com/heshibin/heshibin.github.io/edit/main/docs/\u524d\u7aef/es6\u8bed\u6cd5.md",tags:[],version:"current",lastUpdatedBy:"Machu",lastUpdatedAt:1677426807,formattedLastUpdatedAt:"Feb 26, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"React\u76f8\u5173\u95ee\u9898",permalink:"/docs/\u524d\u7aef/react\u76f8\u5173"},next:{title:"mxGraph\u5bfc\u51fasvg\u56fe\u5f62",permalink:"/docs/\u524d\u7aef/mxGraph\u5bfc\u51fasvg\u56fe\u5f62"}},l={},p=[{value:"\u6570\u7ec4\u8fc7\u6ee4",id:"\u6570\u7ec4\u8fc7\u6ee4",level:4},{value:"\u6570\u7ec4\u4e2d\u67d0\u4e00\u9879\u6c42\u548c",id:"\u6570\u7ec4\u4e2d\u67d0\u4e00\u9879\u6c42\u548c",level:4},{value:"\u6570\u7ec4\u5feb\u901f\u53bb\u91cd",id:"\u6570\u7ec4\u5feb\u901f\u53bb\u91cd",level:4}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"\u6570\u7ec4\u8fc7\u6ee4"},"\u6570\u7ec4\u8fc7\u6ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"let arr = [1, 2, 3];\nlet newArr = arr.filter((item, index, arr) => {\n    return item <= 2;\n})\n")),(0,a.kt)("h4",{id:"\u6570\u7ec4\u4e2d\u67d0\u4e00\u9879\u6c42\u548c"},"\u6570\u7ec4\u4e2d\u67d0\u4e00\u9879\u6c42\u548c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"let arrquantitynew = item.items.map(itemnew => {\n  return itemnew.quantity;\n});\narrquantitynew = arrquantitynew.reduce((n,m) => n + m);\n")),(0,a.kt)("h4",{id:"\u6570\u7ec4\u5feb\u901f\u53bb\u91cd"},"\u6570\u7ec4\u5feb\u901f\u53bb\u91cd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const arr = [1,1,2,2,3,3,]\narr.reduce((prev,current)=>{\n    !prev.includes(current) && prev.push(current)\n    return  prev\n},[])\n")))}s.isMDXComponent=!0}}]);