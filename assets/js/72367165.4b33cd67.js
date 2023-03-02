"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1869],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),k=r,s=m["".concat(c,".").concat(k)]||m[k]||d[k]||l;return n?a.createElement(s,i(i({ref:t},u),{},{components:n})):a.createElement(s,i({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},57099:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={slug:"/java/concurrent/nio-with-bio",tilte:"JAVA\u4e2d\u7684NIO\u548cBIO",description:"N\u5c31\u662f Non-blocking\uff0c\u540c\u6b65\u975e\u963b\u585eIO\uff0c\u670d\u52a1\u5668\u5b9e\u73b0\u6a21\u5f0f\u4e3a\u4e00\u4e2a\u7ebf\u7a0b\u5904\u7406\u591a\u4e2a\u8bf7\u6c42(\u8fde\u63a5)\uff0c\u5373\u5ba2\u6237\u7aef\u53d1\u9001\u7684\u8fde\u63a5\u8bf7\u6c42\u90fd\u4f1a\u6ce8\u518c\u5230\u591a\u8def\u590d\u7528\u5668\u4e0a\uff0c\u591a\u8def\u590d\u7528\u5668\u8f6e\u8be2\u5230\u8fde\u63a5\u6709I/O\u8bf7\u6c42\u5c31\u8fdb\u884c\u5904\u7406\u3002",keywords:["java","NIO","BIO"],date:new Date("2023-03-02T00:00:00.000Z"),authors:"heshibin",tags:["java","\u5e76\u53d1\u7f16\u7a0b"],last_update:{date:new Date("2023-03-02T00:00:00.000Z"),author:"machu"}},i="\u4ec0\u4e48\u662fJAVA NIO\uff1f",o={unversionedId:"JAVA/\u5e76\u53d1\u7f16\u7a0b/JAVA\u4e2d\u7684NIO\u548cBIO",id:"JAVA/\u5e76\u53d1\u7f16\u7a0b/JAVA\u4e2d\u7684NIO\u548cBIO",title:"\u4ec0\u4e48\u662fJAVA NIO\uff1f",description:"N\u5c31\u662f Non-blocking\uff0c\u540c\u6b65\u975e\u963b\u585eIO\uff0c\u670d\u52a1\u5668\u5b9e\u73b0\u6a21\u5f0f\u4e3a\u4e00\u4e2a\u7ebf\u7a0b\u5904\u7406\u591a\u4e2a\u8bf7\u6c42(\u8fde\u63a5)\uff0c\u5373\u5ba2\u6237\u7aef\u53d1\u9001\u7684\u8fde\u63a5\u8bf7\u6c42\u90fd\u4f1a\u6ce8\u518c\u5230\u591a\u8def\u590d\u7528\u5668\u4e0a\uff0c\u591a\u8def\u590d\u7528\u5668\u8f6e\u8be2\u5230\u8fde\u63a5\u6709I/O\u8bf7\u6c42\u5c31\u8fdb\u884c\u5904\u7406\u3002",source:"@site/docs/JAVA/\u5e76\u53d1\u7f16\u7a0b/JAVA\u4e2d\u7684NIO\u548cBIO.md",sourceDirName:"JAVA/\u5e76\u53d1\u7f16\u7a0b",slug:"/java/concurrent/nio-with-bio",permalink:"/docs/java/concurrent/nio-with-bio",draft:!1,editUrl:"https://github.com/heshibin/heshibin.github.io/edit/main/docs/JAVA/\u5e76\u53d1\u7f16\u7a0b/JAVA\u4e2d\u7684NIO\u548cBIO.md",tags:[{label:"java",permalink:"/docs/tags/java"},{label:"\u5e76\u53d1\u7f16\u7a0b",permalink:"/docs/tags/\u5e76\u53d1\u7f16\u7a0b"}],version:"current",lastUpdatedBy:"machu",lastUpdatedAt:1677715200,formattedLastUpdatedAt:"Mar 2, 2023",frontMatter:{slug:"/java/concurrent/nio-with-bio",tilte:"JAVA\u4e2d\u7684NIO\u548cBIO",description:"N\u5c31\u662f Non-blocking\uff0c\u540c\u6b65\u975e\u963b\u585eIO\uff0c\u670d\u52a1\u5668\u5b9e\u73b0\u6a21\u5f0f\u4e3a\u4e00\u4e2a\u7ebf\u7a0b\u5904\u7406\u591a\u4e2a\u8bf7\u6c42(\u8fde\u63a5)\uff0c\u5373\u5ba2\u6237\u7aef\u53d1\u9001\u7684\u8fde\u63a5\u8bf7\u6c42\u90fd\u4f1a\u6ce8\u518c\u5230\u591a\u8def\u590d\u7528\u5668\u4e0a\uff0c\u591a\u8def\u590d\u7528\u5668\u8f6e\u8be2\u5230\u8fde\u63a5\u6709I/O\u8bf7\u6c42\u5c31\u8fdb\u884c\u5904\u7406\u3002",keywords:["java","NIO","BIO"],date:"2023-03-02T00:00:00.000Z",authors:"heshibin",tags:["java","\u5e76\u53d1\u7f16\u7a0b"],last_update:{date:"2023-03-02T00:00:00.000Z",author:"machu"}},sidebar:"tutorialSidebar",previous:{title:"\u65e5\u671f\u65f6\u95f4\u76f8\u5173",permalink:"/docs/JAVA/\u5de5\u5177\u7c7b/\u83b7\u53d6Unix\u65f6\u95f4\u6233"},next:{title:"\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5",permalink:"/docs/java/data-structure"}},c={},p=[{value:"NIO\u7684\u6838\u5fc3\u7ec4\u4ef6",id:"nio\u7684\u6838\u5fc3\u7ec4\u4ef6",level:2},{value:"Channel\uff08\u901a\u9053\uff09",id:"channel\u901a\u9053",level:3},{value:"\u4e3b\u8981\u5b9e\u73b0\u7c7b",id:"\u4e3b\u8981\u5b9e\u73b0\u7c7b",level:4},{value:"FileChannel",id:"filechannel",level:5},{value:"SocketChannel",id:"socketchannel",level:5},{value:"ServerSocketChannel",id:"serversocketchannel",level:5},{value:"DatagramChannel",id:"datagramchannel",level:5},{value:"Buffer\uff08\u7f13\u51b2\u533a\uff09",id:"buffer\u7f13\u51b2\u533a",level:3},{value:"Selector\uff08\u591a\u8def\u590d\u7528\u5668\uff09",id:"selector\u591a\u8def\u590d\u7528\u5668",level:3}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4ec0\u4e48\u662fjava-nio"},"\u4ec0\u4e48\u662fJAVA NIO\uff1f"),(0,r.kt)("p",null,"N\u5c31\u662f Non-blocking\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u540c\u6b65\u975e\u963b\u585eIO"),"\uff0c\u670d\u52a1\u5668\u5b9e\u73b0\u6a21\u5f0f\u4e3a\u4e00\u4e2a\u7ebf\u7a0b\u5904\u7406\u591a\u4e2a\u8bf7\u6c42(\u8fde\u63a5)\uff0c\u5373\u5ba2\u6237\u7aef\u53d1\u9001\u7684\u8fde\u63a5\u8bf7\u6c42\u90fd\u4f1a\u6ce8\u518c\u5230\u591a\u8def\u590d\u7528\u5668\u4e0a\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u591a\u8def\u590d\u7528\u5668"),"\u8f6e\u8be2\u5230\u8fde\u63a5\u6709I/O\u8bf7\u6c42\u5c31\u8fdb\u884c\u5904\u7406\u3002   "),(0,r.kt)("img",{width:"453",alt:"image",src:"https://user-images.githubusercontent.com/49633468/222096775-401675e3-4d6b-4d78-a524-e4b87e83d8e5.png"}),(0,r.kt)("h2",{id:"nio\u7684\u6838\u5fc3\u7ec4\u4ef6"},"NIO\u7684\u6838\u5fc3\u7ec4\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Channel\uff08\u901a\u9053\uff09"),(0,r.kt)("li",{parentName:"ul"},"Buffer\uff08\u7f13\u51b2\u533a\uff09"),(0,r.kt)("li",{parentName:"ul"},"Selector\uff08\u9009\u62e9\u5668\uff09")),(0,r.kt)("img",{width:"445",alt:"image",src:"https://user-images.githubusercontent.com/49633468/222098759-dc73f231-e24b-47d3-84f3-56890d70f52c.png"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5173\u7cfb\u56fe\u8bf4\u660e\uff1a")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"Channel")," \u5bf9\u5e94\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"Buffer")," \u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"Selector")," \u5bf9\u5e94\u4e00\u4e2a\u7ebf\u7a0b\uff0c\u4e00\u4e2a\u7ebf\u7a0b\u5bf9\u5e94\u591a\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"Channel"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4e0a\u56fe\u53cd\u5e94\u4e86\u6709\u4e09\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"Channel")," \u6ce8\u518c\u5230\u8be5 ",(0,r.kt)("inlineCode",{parentName:"li"},"Selector"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u7a0b\u5e8f\u5207\u6362\u5230\u90a3\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"Channel")," \u662f\u7531\u4e8b\u4ef6\u51b3\u5b9a\u7684\uff08Event\uff09\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Selector")," \u4f1a\u6839\u636e\u4e0d\u540c\u7684\u4e8b\u4ef6\uff0c\u5728\u5404\u4e2a\u901a\u9053\u4e0a\u5207\u6362\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Buffer")," \u5c31\u662f\u4e00\u4e2a\u5185\u5b58\u5757\uff0c\u5e95\u5c42\u662f\u6709\u4e00\u4e2a\u6570\u7ec4\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6570\u636e\u7684\u8bfb\u53d6\u548c\u5199\u5165\u662f\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"Buffer"),"\uff0c\u4f46\u662f\u9700\u8981 ",(0,r.kt)("inlineCode",{parentName:"li"},"flip()")," \u5207\u6362\u8bfb\u5199\u6a21\u5f0f\uff0c\u800c ",(0,r.kt)("inlineCode",{parentName:"li"},"BIO")," \u662f\u5355\u5411\u7684\uff0c\u8981\u4e48\u8f93\u5165\u6d41\u8981\u4e48\u8f93\u51fa\u6d41\u3002")),(0,r.kt)("h3",{id:"channel\u901a\u9053"},"Channel\uff08\u901a\u9053\uff09"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Channel"),"\u662f\u4e00\u4e2a\u5bf9\u8c61,\u4f5c\u7528\u662f\u7528\u4e8e\u6e90\u8282\u70b9\u548c\u76ee\u6807\u8282\u70b9\u7684\u8fde\u63a5,\u5728java NIO\u4e2d\u8d1f\u8d23",(0,r.kt)("strong",{parentName:"p"},"\u7f13\u51b2\u533a\u6570\u636e\u7684\u4f20\u9012"),"\u3002Channel\u672c\u8eab",(0,r.kt)("strong",{parentName:"p"},"\u4e0d\u5b58\u50a8"),"\u6570\u636e\uff0c\u56e0\u6b64\u9700\u8981",(0,r.kt)("strong",{parentName:"p"},"\u914d\u5408\u7f13\u51b2\u533a"),"\u8fdb\u884c\u4f20\u8f93\u3002  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/49633468/222172615-372fd569-6e96-4f3c-8ca1-a4b8e426d3a1.png",alt:"image"})),(0,r.kt)("p",null,"\u4f20\u7edf\u7684IO\u662f\u57fa\u4e8e\u6d41\u64cd\u4f5c\u7684\uff0cChannel\u548c\u5b83\u7c7b\u4f3c\uff0c\u4f46\u53c8\u6709\u4e0d\u540c\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u533a\u522b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u4f20\u7edfIO"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u901a\u8fc7Channel"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u652f\u6301\u5f02\u6b65"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u4e0d\u652f\u6301"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u652f\u6301")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u662f\u5426\u53ef\u53cc\u5411\u4f20\u8f93\u6570\u636e"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u4e0d\u80fd\uff0c\u53ea\u80fd\u5355\u5411"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u53ef\u4ee5\uff0c\u65e2\u53ef\u4ee5\u4ece\u901a\u9053\u8bfb\u53d6\u6570\u636e\uff0c\u4e5f\u53ef\u4ee5\u5411\u901a\u9053\u5199\u5165\u6570\u636e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u662f\u5426\u7ed3\u5408 Buffer \u4f7f\u7528"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5fc5\u987b\u7ed3\u5408 Buffer \u4f7f\u7528")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u6027\u80fd"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u8f83\u4f4e"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u8f83\u9ad8")))),(0,r.kt)("p",null,"Channel \u5fc5\u987b\u8981\u914d\u5408 Buffer \u4e00\u8d77\u4f7f\u7528\uff0c\u6211\u4eec\u6c38\u8fdc\u4e0d\u53ef\u80fd\u5c06\u6570\u636e\u76f4\u63a5\u5199\u5165\u5230 Channel \u4e2d\uff0c\u540c\u6837\u4e5f\u4e0d\u53ef\u80fd\u76f4\u63a5\u4ece Channel \u4e2d\u8bfb\u53d6\u6570\u636e\u3002\u90fd\u662f\u901a\u8fc7\u4ece Channel \u8bfb\u53d6\u6570\u636e\u5230 Buffer \u4e2d\u6216\u8005\u4ece Buffer \u5199\u5165\u6570\u636e\u5230 Channel \u4e2d\u3002"),(0,r.kt)("img",{width:"342",alt:"image",src:"https://user-images.githubusercontent.com/49633468/222383358-ba9a6e51-395d-479e-b852-e0b653f10cf2.png"}),(0,r.kt)("p",null,"\u7b80\u5355\u70b9\u8bf4\uff0cChannel \u662f\u6570\u636e\u7684\u6e90\u5934\u6216\u8005\u6570\u636e\u7684\u76ee\u7684\u5730\uff0c\u7528\u4e8e\u5411 buffer \u63d0\u4f9b\u6570\u636e\u6216\u8005\u8bfb\u53d6 buffer \u6570\u636e\uff0c\u5e76\u4e14\u5bf9 I/O \u63d0\u4f9b\u5f02\u6b65\u652f\u6301\u3002"),(0,r.kt)("h4",{id:"\u4e3b\u8981\u5b9e\u73b0\u7c7b"},"\u4e3b\u8981\u5b9e\u73b0\u7c7b"),(0,r.kt)("p",null,"\u4e3b\u8981\u7684\u5b9e\u73b0\u7c7b\u6709\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"FileChannel, SocketChannel, ServerSocketChannel, DatagramChannel"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/49633468/222175843-e343ef8c-fe5f-4b37-9ae3-c9cb5cbb49c2.png",alt:"image"})),(0,r.kt)("h5",{id:"filechannel"},"FileChannel"),(0,r.kt)("p",null,"\u672c\u5730\u6587\u4ef6IO\u901a\u9053\uff0c\u7528\u4e8e\u8bfb\u53d6\u3001\u5199\u5165\u3001\u6620\u5c04\u548c\u64cd\u4f5c\u6587\u4ef6\u7684\u901a\u9053\u3002"),(0,r.kt)("h5",{id:"socketchannel"},"SocketChannel"),(0,r.kt)("p",null,"\u7f51\u7edc\u5957\u63a5\u5b57IO\u901a\u9053\uff0cTCP\u534f\u8bae\uff0c\u9488\u5bf9\u9762\u5411\u6d41\u7684\u8fde\u63a5\u5957\u63a5\u5b57\u7684\u53ef\u9009\u62e9\u901a\u9053\uff08\u4e00\u822c\u7528\u5728\u5ba2\u6237\u7aef\uff09\u3002"),(0,r.kt)("h5",{id:"serversocketchannel"},"ServerSocketChannel"),(0,r.kt)("p",null,"\u7f51\u7edc\u901a\u4fe1IO\u64cd\u4f5c\uff0cTCP\u534f\u8bae\uff0c\u9488\u5bf9\u9762\u5411\u6d41\u7684\u76d1\u542c\u5957\u63a5\u5b57\u7684\u53ef\u9009\u62e9\u901a\u9053\uff08\u4e00\u822c\u7528\u4e8e\u670d\u52a1\u7aef\uff09\u3002"),(0,r.kt)("h5",{id:"datagramchannel"},"DatagramChannel"),(0,r.kt)("p",null,"\u6570\u636e\u62a5\u901a\u9053\uff0c\u80fd\u901a\u8fc7 UDP \u8bfb\u5199\u7f51\u7edc\u4e2d\u7684\u6570\u636e\u3002"),(0,r.kt)("h3",{id:"buffer\u7f13\u51b2\u533a"},"Buffer\uff08\u7f13\u51b2\u533a\uff09"),(0,r.kt)("p",null,"Buffer \u662f\u4e00\u4e2a",(0,r.kt)("strong",{parentName:"p"},"\u6570\u636e\u5bf9\u8c61"),"\uff0c\u6211\u4eec\u53ef\u4ee5\u628a\u5b83\u7406\u89e3\u4e3a\u56fa\u5b9a\u6570\u91cf\u7684\u6570\u636e\u7684\u5bb9\u5668\uff0c\u5b83\u5305\u542b\u4e00\u4e9b\u8981\u5199\u5165\u6216\u8005\u8bfb\u51fa\u7684\u6570\u636e\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5728 Java NIO \u4e2d\uff0c\u4efb\u4f55\u65f6\u5019\u8bbf\u95ee NIO \u4e2d\u7684\u6570\u636e\uff0c\u90fd\u9700\u8981\u901a\u8fc7\u7f13\u51b2\u533a\uff08Buffer\uff09\u8fdb\u884c\u64cd\u4f5c\u3002\u8bfb\u53d6\u6570\u636e\u65f6\uff0c\u76f4\u63a5\u4ece\u7f13\u51b2\u533a\u4e2d\u8bfb\u53d6\uff0c\u5199\u5165\u6570\u636e\u65f6\uff0c\u5199\u5165\u81f3\u7f13\u51b2\u533a\u3002NIO \u6700\u5e38\u7528\u7684\u7f13\u51b2\u533a\u5219\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"ByteBuffer"),"\u3002"),(0,r.kt)("img",{width:"1150",alt:"image",src:"https://user-images.githubusercontent.com/49633468/222324394-55b8a2db-a4d4-4142-91d9-91cdeb7cfcee.png"}),(0,r.kt)("p",null,"\u6bcf\u4e00\u4e2a Java \u57fa\u672c\u7c7b\u578b\u90fd\u5bf9\u5e94\u7740\u4e00\u79cd Buffer\uff0c\u4ed6\u4eec\u90fd\u5305\u542b\u8fd9\u76f8\u540c\u7684\u64cd\u4f5c\uff0c\u53ea\u4e0d\u8fc7\u662f\u6240\u5904\u7406\u7684\u6570\u636e\u7c7b\u578b\u4e0d\u540c\u800c\u5df2\u3002"),(0,r.kt)("h3",{id:"selector\u591a\u8def\u590d\u7528\u5668"},"Selector\uff08\u591a\u8def\u590d\u7528\u5668\uff09"),(0,r.kt)("p",null,"\u591a\u8def\u590d\u7528\u5668 Selector\uff0c\u5b83\u662f Java NIO \u7f16\u7a0b\u7684\u57fa\u7840\uff0c\u5b83\u63d0\u4f9b\u4e86\u9009\u62e9\u5df2\u7ecf\u5c31\u7eea\u7684\u4efb\u52a1\u7684\u80fd\u529b\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u4ece\u5e95\u5c42\u6765\u770b\uff0cSelector \u63d0\u4f9b\u4e86\u8be2\u95ee\u901a\u9053\u662f\u5426\u5df2\u7ecf\u51c6\u5907\u597d\u6267\u884c\u6bcf\u4e2a I/O \u64cd\u4f5c\u7684\u80fd\u529b\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u7b80\u5355\u6765\u8bb2\uff0cSelector \u4f1a\u4e0d\u65ad\u5730\u8f6e\u8be2\u6ce8\u518c\u5728\u5176\u4e0a\u7684 Channel\uff0c\u5982\u679c\u67d0\u4e2a Channel \u4e0a\u9762\u53d1\u751f\u4e86\u8bfb\u6216\u8005\u5199\u4e8b\u4ef6\uff0c\u8fd9\u4e2a Channel \u5c31\u5904\u4e8e\u5c31\u7eea\u72b6\u6001\uff0c\u4f1a\u88ab Selector \u8f6e\u8be2\u51fa\u6765\uff0c\u7136\u540e\u901a\u8fc7 SelectionKey \u53ef\u4ee5\u83b7\u53d6\u5c31\u7eea Channel \u7684\u96c6\u5408\uff0c\u8fdb\u884c\u540e\u7eed\u7684 I/O \u64cd\u4f5c\u3002   "),(0,r.kt)("p",null,"Selector \u5141\u8bb8\u4e00\u4e2a\u7ebf\u7a0b\u5904\u7406\u591a\u4e2a Channel \uff0c\u4e5f\u5c31\u662f\u8bf4\u53ea\u8981\u4e00\u4e2a\u7ebf\u7a0b\u590d\u6742 Selector \u7684\u8f6e\u8be2\uff0c\u5c31\u53ef\u4ee5\u5904\u7406\u6210\u5343\u4e0a\u4e07\u4e2a Channel \uff0c\u76f8\u6bd4\u4e8e\u591a\u7ebf\u7a0b\u6765\u5904\u7406\u52bf\u5fc5\u4f1a",(0,r.kt)("strong",{parentName:"p"},"\u51cf\u5c11\u7ebf\u7a0b\u7684\u4e0a\u4e0b\u6587\u5207\u6362\u95ee\u9898"),"\u3002"),(0,r.kt)("h1",{id:"\u4ec0\u4e48\u662fjava-bio"},"\u4ec0\u4e48\u662fJAVA BIO?"))}m.isMDXComponent=!0}}]);