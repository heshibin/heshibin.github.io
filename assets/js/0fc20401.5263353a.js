"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2673],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,b=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return r?o.createElement(b,l(l({ref:t},s),{},{components:r})):o.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48950:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const a={title:"Go \u8bed\u8a00\u7b80\u4ecb",description:"Go \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u7f16\u7a0b\u8bed\u8a00\uff0c\u5b83\u80fd\u8ba9\u6784\u9020\u7b80\u5355\u3001\u53ef\u9760\u4e14\u9ad8\u6548\u7684\u8f6f\u4ef6\u53d8\u5f97\u5bb9\u6613\u3002Go\u662f\u4ece2007\u5e74\u672b\u7531Robert Griesemer, Rob Pike, Ken Thompson\u4e3b\u6301\u5f00\u53d1\uff0c\u540e\u6765\u8fd8\u52a0\u5165\u4e86Ian Lance Taylor, Russ Cox\u7b49\u4eba\uff0c\u5e76\u6700\u7ec8\u4e8e2009\u5e7411\u6708\u5f00\u6e90\uff0c\u57282012\u5e74\u65e9\u4e9b\u65f6\u5019\u53d1\u5e03\u4e86Go 1\u7a33\u5b9a\u7248\u672c\u3002\u73b0\u5728Go\u7684\u5f00\u53d1\u5df2\u7ecf\u662f\u5b8c\u5168\u5f00\u653e\u7684\uff0c\u5e76\u4e14\u62e5\u6709\u4e00\u4e2a\u6d3b\u8dc3\u7684\u793e\u533a\u3002",date:new Date("2023-01-30T00:00:00.000Z"),authors:"heshibin",tags:["Go"]},l=void 0,i={unversionedId:"Go \u8bed\u8a00/01Go \u8bed\u8a00\u7b80\u4ecb",id:"Go \u8bed\u8a00/01Go \u8bed\u8a00\u7b80\u4ecb",title:"Go \u8bed\u8a00\u7b80\u4ecb",description:"Go \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u7f16\u7a0b\u8bed\u8a00\uff0c\u5b83\u80fd\u8ba9\u6784\u9020\u7b80\u5355\u3001\u53ef\u9760\u4e14\u9ad8\u6548\u7684\u8f6f\u4ef6\u53d8\u5f97\u5bb9\u6613\u3002Go\u662f\u4ece2007\u5e74\u672b\u7531Robert Griesemer, Rob Pike, Ken Thompson\u4e3b\u6301\u5f00\u53d1\uff0c\u540e\u6765\u8fd8\u52a0\u5165\u4e86Ian Lance Taylor, Russ Cox\u7b49\u4eba\uff0c\u5e76\u6700\u7ec8\u4e8e2009\u5e7411\u6708\u5f00\u6e90\uff0c\u57282012\u5e74\u65e9\u4e9b\u65f6\u5019\u53d1\u5e03\u4e86Go 1\u7a33\u5b9a\u7248\u672c\u3002\u73b0\u5728Go\u7684\u5f00\u53d1\u5df2\u7ecf\u662f\u5b8c\u5168\u5f00\u653e\u7684\uff0c\u5e76\u4e14\u62e5\u6709\u4e00\u4e2a\u6d3b\u8dc3\u7684\u793e\u533a\u3002",source:"@site/docs/Go \u8bed\u8a00/01Go \u8bed\u8a00\u7b80\u4ecb.md",sourceDirName:"Go \u8bed\u8a00",slug:"/Go \u8bed\u8a00/01Go \u8bed\u8a00\u7b80\u4ecb",permalink:"/docs/Go \u8bed\u8a00/01Go \u8bed\u8a00\u7b80\u4ecb",draft:!1,editUrl:"https://github.com/heshibin/heshibin.github.io/edit/main/docs/Go \u8bed\u8a00/01Go \u8bed\u8a00\u7b80\u4ecb.md",tags:[{label:"Go",permalink:"/docs/tags/go"}],version:"current",lastUpdatedBy:"Machu",lastUpdatedAt:1678364867,formattedLastUpdatedAt:"Mar 9, 2023",frontMatter:{title:"Go \u8bed\u8a00\u7b80\u4ecb",description:"Go \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u7f16\u7a0b\u8bed\u8a00\uff0c\u5b83\u80fd\u8ba9\u6784\u9020\u7b80\u5355\u3001\u53ef\u9760\u4e14\u9ad8\u6548\u7684\u8f6f\u4ef6\u53d8\u5f97\u5bb9\u6613\u3002Go\u662f\u4ece2007\u5e74\u672b\u7531Robert Griesemer, Rob Pike, Ken Thompson\u4e3b\u6301\u5f00\u53d1\uff0c\u540e\u6765\u8fd8\u52a0\u5165\u4e86Ian Lance Taylor, Russ Cox\u7b49\u4eba\uff0c\u5e76\u6700\u7ec8\u4e8e2009\u5e7411\u6708\u5f00\u6e90\uff0c\u57282012\u5e74\u65e9\u4e9b\u65f6\u5019\u53d1\u5e03\u4e86Go 1\u7a33\u5b9a\u7248\u672c\u3002\u73b0\u5728Go\u7684\u5f00\u53d1\u5df2\u7ecf\u662f\u5b8c\u5168\u5f00\u653e\u7684\uff0c\u5e76\u4e14\u62e5\u6709\u4e00\u4e2a\u6d3b\u8dc3\u7684\u793e\u533a\u3002",date:"2023-01-30T00:00:00.000Z",authors:"heshibin",tags:["Go"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc1f \u6478\u9c7c\u4eba\u65e5\u5386 \ud83d\udc1f",permalink:"/docs/moyurli"},next:{title:"Go \u8bed\u8a00\u73af\u5883\u5b89\u88c5",permalink:"/docs/Go \u8bed\u8a00/02Go \u8bed\u8a00\u73af\u5883\u5b89\u88c5"}},p={},c=[{value:"\u7279\u8272",id:"\u7279\u8272",level:2},{value:"\u7528\u9014",id:"\u7528\u9014",level:2},{value:"\u7b2c\u4e00\u4e2a Go \u7a0b\u5e8f",id:"\u7b2c\u4e00\u4e2a-go-\u7a0b\u5e8f",level:2}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Go \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u7f16\u7a0b\u8bed\u8a00\uff0c\u5b83\u80fd\u8ba9\u6784\u9020\u7b80\u5355\u3001\u53ef\u9760\u4e14\u9ad8\u6548\u7684\u8f6f\u4ef6\u53d8\u5f97\u5bb9\u6613\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","Go\u662f\u4ece2007\u5e74\u672b\u7531Robert Griesemer, Rob Pike, Ken Thompson\u4e3b\u6301\u5f00\u53d1\uff0c\u540e\u6765\u8fd8\u52a0\u5165\u4e86Ian Lance Taylor, Russ Cox\u7b49\u4eba\uff0c\u5e76\u6700\u7ec8\u4e8e2009\u5e7411\u6708\u5f00\u6e90\uff0c\u57282012\u5e74\u65e9\u4e9b\u65f6\u5019\u53d1\u5e03\u4e86Go 1\u7a33\u5b9a\u7248\u672c\u3002\u73b0\u5728Go\u7684\u5f00\u53d1\u5df2\u7ecf\u662f\u5b8c\u5168\u5f00\u653e\u7684\uff0c\u5e76\u4e14\u62e5\u6709\u4e00\u4e2a\u6d3b\u8dc3\u7684\u793e\u533a\u3002  "),(0,n.kt)("h2",{id:"\u7279\u8272"},"\u7279\u8272"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7b80\u6d01\u3001\u5feb\u901f\u3001\u5b89\u5168"),(0,n.kt)("li",{parentName:"ul"},"\u5e76\u884c\u3001\u6709\u8da3\u3001\u5f00\u6e90"),(0,n.kt)("li",{parentName:"ul"},"\u5185\u5b58\u7ba1\u7406\u3001\u6570\u7ec4\u5b89\u5168\u3001\u7f16\u8bd1\u8fc5\u901f")),(0,n.kt)("h2",{id:"\u7528\u9014"},"\u7528\u9014"),(0,n.kt)("p",null,"Go \u8bed\u8a00\u88ab\u8bbe\u8ba1\u6210\u4e00\u95e8\u5e94\u7528\u4e8e\u642d\u8f7d Web \u670d\u52a1\u5668\uff0c\u5b58\u50a8\u96c6\u7fa4\u6216\u7c7b\u4f3c\u7528\u9014\u7684\u5de8\u578b\u4e2d\u592e\u670d\u52a1\u5668\u7684\u7cfb\u7edf\u7f16\u7a0b\u8bed\u8a00\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u5bf9\u4e8e\u9ad8\u6027\u80fd\u5206\u5e03\u5f0f\u7cfb\u7edf\u9886\u57df\u800c\u8a00\uff0cGo \u8bed\u8a00\u65e0\u7591\u6bd4\u5927\u591a\u6570\u5176\u5b83\u8bed\u8a00\u6709\u7740\u66f4\u9ad8\u7684\u5f00\u53d1\u6548\u7387\u3002\u5b83\u63d0\u4f9b\u4e86\u6d77\u91cf\u5e76\u884c\u7684\u652f\u6301\uff0c\u8fd9\u5bf9\u4e8e\u6e38\u620f\u670d\u52a1\u7aef\u7684\u5f00\u53d1\u800c\u8a00\u662f\u518d\u597d\u4e0d\u8fc7\u4e86\u3002"),(0,n.kt)("h2",{id:"\u7b2c\u4e00\u4e2a-go-\u7a0b\u5e8f"},"\u7b2c\u4e00\u4e2a Go \u7a0b\u5e8f"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, World!")\n}\n')),(0,n.kt)("p",null,"\u8981\u6267\u884c Go \u8bed\u8a00\u4ee3\u7801\u53ef\u4ee5\u4f7f\u7528 go run \u547d\u4ee4\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u6267\u884c\u4ee5\u4e0a\u4ee3\u7801\u8f93\u51fa:  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"go run hello.go \nHello, World!\n")),(0,n.kt)("p",null,"\u6b64\u5916\u6211\u4eec\u8fd8\u53ef\u4ee5\u4f7f\u7528 go build \u547d\u4ee4\u6765\u751f\u6210\u4e8c\u8fdb\u5236\u6587\u4ef6\uff1a  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"go build hello.go \nls\nhello    hello.go\n./hello \nHello, World!\n")))}u.isMDXComponent=!0}}]);