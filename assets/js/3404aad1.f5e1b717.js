"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9200],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>y});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=a.createContext({}),s=function(t){var e=a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=s(t.components);return a.createElement(c.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=s(r),u=n,y=m["".concat(c,".").concat(u)]||m[u]||d[u]||l;return r?a.createElement(y,o(o({ref:e},p),{},{components:r})):a.createElement(y,o({ref:e},p))}));function y(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[m]="string"==typeof t?t:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},26464:(t,e,r)=>{r.d(e,{Z:()=>n});var a=r(67294);function n(){return a.createElement(a.Fragment,null,"\u672c\u6587\u5185\u5bb9\u8f6c\u8f7d\u81ea",a.createElement("a",{href:"https://xdclass.net/",target:"_blank"},"\u5c0f\u6ef4\u8bfe\u5802"),"\u3002")}},58240:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),l=r(26464);const o={slug:"/note/mysql-percona-toolkit",title:"Mysql\u7684\u745e\u58eb\u519b\u5200-Percona toolkit",description:"Percona-toolkit\u662fMySQL\u7684\u9ad8\u7ea7\u8fd0\u7ef4\u5de5\u5177\u96c6\u5408\uff0c\u66f4\u9ad8\u6548\u6267\u884c\u5404\u79cd\u901a\u8fc7\u624b\u5de5\u975e\u5e38\u590d\u6742\u548c\u9ebb\u70e6\u7684mysql\u4efb\u52a1\uff0c\u5305\u62ec\u5f00\u53d1\u3001\u6027\u80fd\u5206\u6790\u3001\u76d1\u63a7\u3001\u6570\u636e\u5907\u4efd\u590d\u5236\u3001\u7cfb\u7edf\u7ba1\u7406\u7b49\u3002",keywords:["java","mysql","Percona toolkit"],date:new Date("2023-03-07T00:00:00.000Z"),tags:["java","mysql","\u77e5\u8bc6\u5c0f\u8bb0","2023-03"],last_update:{date:new Date("2023-03-07T00:00:00.000Z"),author:"machu"}},i=void 0,c={unversionedId:"\u5c0f\u8bb0/2023-03/07Mysql\u7684\u745e\u58eb\u519b\u5200-Percona toolkit",id:"\u5c0f\u8bb0/2023-03/07Mysql\u7684\u745e\u58eb\u519b\u5200-Percona toolkit",title:"Mysql\u7684\u745e\u58eb\u519b\u5200-Percona toolkit",description:"Percona-toolkit\u662fMySQL\u7684\u9ad8\u7ea7\u8fd0\u7ef4\u5de5\u5177\u96c6\u5408\uff0c\u66f4\u9ad8\u6548\u6267\u884c\u5404\u79cd\u901a\u8fc7\u624b\u5de5\u975e\u5e38\u590d\u6742\u548c\u9ebb\u70e6\u7684mysql\u4efb\u52a1\uff0c\u5305\u62ec\u5f00\u53d1\u3001\u6027\u80fd\u5206\u6790\u3001\u76d1\u63a7\u3001\u6570\u636e\u5907\u4efd\u590d\u5236\u3001\u7cfb\u7edf\u7ba1\u7406\u7b49\u3002",source:"@site/docs/\u5c0f\u8bb0/2023-03/07Mysql\u7684\u745e\u58eb\u519b\u5200-Percona toolkit.md",sourceDirName:"\u5c0f\u8bb0/2023-03",slug:"/note/mysql-percona-toolkit",permalink:"/docs/note/mysql-percona-toolkit",draft:!1,editUrl:"https://github.com/heshibin/heshibin.github.io/edit/main/docs/\u5c0f\u8bb0/2023-03/07Mysql\u7684\u745e\u58eb\u519b\u5200-Percona toolkit.md",tags:[{label:"java",permalink:"/docs/tags/java"},{label:"mysql",permalink:"/docs/tags/mysql"},{label:"\u77e5\u8bc6\u5c0f\u8bb0",permalink:"/docs/tags/\u77e5\u8bc6\u5c0f\u8bb0"},{label:"2023-03",permalink:"/docs/tags/2023-03"}],version:"current",lastUpdatedBy:"machu",lastUpdatedAt:1678147200,formattedLastUpdatedAt:"Mar 7, 2023",frontMatter:{slug:"/note/mysql-percona-toolkit",title:"Mysql\u7684\u745e\u58eb\u519b\u5200-Percona toolkit",description:"Percona-toolkit\u662fMySQL\u7684\u9ad8\u7ea7\u8fd0\u7ef4\u5de5\u5177\u96c6\u5408\uff0c\u66f4\u9ad8\u6548\u6267\u884c\u5404\u79cd\u901a\u8fc7\u624b\u5de5\u975e\u5e38\u590d\u6742\u548c\u9ebb\u70e6\u7684mysql\u4efb\u52a1\uff0c\u5305\u62ec\u5f00\u53d1\u3001\u6027\u80fd\u5206\u6790\u3001\u76d1\u63a7\u3001\u6570\u636e\u5907\u4efd\u590d\u5236\u3001\u7cfb\u7edf\u7ba1\u7406\u7b49\u3002",keywords:["java","mysql","Percona toolkit"],date:"2023-03-07T00:00:00.000Z",tags:["java","mysql","\u77e5\u8bc6\u5c0f\u8bb0","2023-03"],last_update:{date:"2023-03-07T00:00:00.000Z",author:"machu"}},sidebar:"tutorialSidebar",previous:{title:"Mysql\u4e3b\u4ece\u590d\u5236\u67b6\u6784\u56fe",permalink:"/docs/note/mysql-master-slave"},next:{title:"Mysql\u7684\u6570\u636e\u5b89\u5168\u5907\u4efd\u5de5\u5177-XtraBackup",permalink:"/docs/note/mysql-xtrabackup"}},s={},p=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:4},{value:"\u547d\u4ee4",id:"\u547d\u4ee4",level:4}],m={toc:p};function d(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,n.kt)("p",null,"Percona-toolkit\u662fMySQL\u7684\u9ad8\u7ea7\u8fd0\u7ef4\u5de5\u5177\u96c6\u5408\uff0c\u66f4\u9ad8\u6548\u6267\u884c\u5404\u79cd\u901a\u8fc7\u624b\u5de5\u975e\u5e38\u590d\u6742\u548c\u9ebb\u70e6\u7684mysql\u4efb\u52a1\uff0c\u5305\u62ec\u5f00\u53d1\u3001\u6027\u80fd\u5206\u6790\u3001\u76d1\u63a7\u3001\u6570\u636e\u5907\u4efd\u590d\u5236\u3001\u7cfb\u7edf\u7ba1\u7406\u7b49\u3002"),(0,n.kt)("h4",{id:"\u547d\u4ee4"},"\u547d\u4ee4"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u547d\u4ee4"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u4f5c\u7528"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"pt-online-schema-change"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5728\u7ebf\u4fee\u6539\u8868\u7ed3\u6784")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"pt-heartbeat"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5065\u5eb7mysql\u4e3b\u4ece\u590d\u5236\u5ef6\u8fdf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"pt-table-checksum"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6821\u9a8c\u4e3b\u4ece\u590d\u5236\u4e00\u81f4\u6027")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"pt-summary"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6536\u96c6\u548c\u663e\u793a\u7cfb\u7edf\u6982\u51b5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"pt-query-digest"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5206\u6790\u6162\u67e5\u8be2\u65e5\u5fd7\uff0c\u7ed3\u679c\u66f4\u5177\u4f53")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"pt-table-sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5f53\u4e3b\u4ece\u6570\u636e\u4e0d\u4e00\u81f4\u65f6\u4fee\u590d\u6570\u636e")))),(0,n.kt)("blockquote",null,(0,n.kt)(l.Z,{mdxType:"Quote"})))}d.isMDXComponent=!0}}]);