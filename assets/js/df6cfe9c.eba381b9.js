"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8922],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),y=l,d=u["".concat(s,".").concat(y)]||u[y]||m[y]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},96320:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(87462),l=(r(67294),r(3905));const a={},i="Mysql\u5206\u5e93\u5206\u8868\u540e\u5e26\u6765\u7684\u4f18\u70b9",o={unversionedId:"\u4e2d\u95f4\u4ef6/sharing-jdbc/1\u3001Mysql\u67b6\u6784\u6f14\u53d8\u5347\u7ea7+\u5206\u5e93\u5206\u8868\u4f18\u7f3a\u70b9/1.3 Mysql\u5206\u5e93\u5206\u8868\u540e\u5e26\u6765\u7684\u4f18\u70b9",id:"\u4e2d\u95f4\u4ef6/sharing-jdbc/1\u3001Mysql\u67b6\u6784\u6f14\u53d8\u5347\u7ea7+\u5206\u5e93\u5206\u8868\u4f18\u7f3a\u70b9/1.3 Mysql\u5206\u5e93\u5206\u8868\u540e\u5e26\u6765\u7684\u4f18\u70b9",title:"Mysql\u5206\u5e93\u5206\u8868\u540e\u5e26\u6765\u7684\u4f18\u70b9",description:"\u5206\u5e93\u5206\u8868\u89e3\u51b3\u7684\u73b0\u72b6\u95ee\u9898",source:"@site/docs/\u4e2d\u95f4\u4ef6/sharing-jdbc/1\u3001Mysql\u67b6\u6784\u6f14\u53d8\u5347\u7ea7+\u5206\u5e93\u5206\u8868\u4f18\u7f3a\u70b9/1.3 Mysql\u5206\u5e93\u5206\u8868\u540e\u5e26\u6765\u7684\u4f18\u70b9.md",sourceDirName:"\u4e2d\u95f4\u4ef6/sharing-jdbc/1\u3001Mysql\u67b6\u6784\u6f14\u53d8\u5347\u7ea7+\u5206\u5e93\u5206\u8868\u4f18\u7f3a\u70b9",slug:"/\u4e2d\u95f4\u4ef6/sharing-jdbc/1\u3001Mysql\u67b6\u6784\u6f14\u53d8\u5347\u7ea7+\u5206\u5e93\u5206\u8868\u4f18\u7f3a\u70b9/1.3 Mysql\u5206\u5e93\u5206\u8868\u540e\u5e26\u6765\u7684\u4f18\u70b9",permalink:"/docs/\u4e2d\u95f4\u4ef6/sharing-jdbc/1\u3001Mysql\u67b6\u6784\u6f14\u53d8\u5347\u7ea7+\u5206\u5e93\u5206\u8868\u4f18\u7f3a\u70b9/1.3 Mysql\u5206\u5e93\u5206\u8868\u540e\u5e26\u6765\u7684\u4f18\u70b9",draft:!1,editUrl:"https://github.com/heshibin/heshibin.github.io/edit/main/docs/\u4e2d\u95f4\u4ef6/sharing-jdbc/1\u3001Mysql\u67b6\u6784\u6f14\u53d8\u5347\u7ea7+\u5206\u5e93\u5206\u8868\u4f18\u7f3a\u70b9/1.3 Mysql\u5206\u5e93\u5206\u8868\u540e\u5e26\u6765\u7684\u4f18\u70b9.md",tags:[],version:"current",lastUpdatedBy:"Machu",lastUpdatedAt:1677509652,formattedLastUpdatedAt:"Feb 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mysql\u6570\u636e\u5e93\u6027\u80fd\u4f18\u5316\u601d\u8def",permalink:"/docs/\u4e2d\u95f4\u4ef6/sharing-jdbc/1\u3001Mysql\u67b6\u6784\u6f14\u53d8\u5347\u7ea7+\u5206\u5e93\u5206\u8868\u4f18\u7f3a\u70b9/1.2 Mysql\u6570\u636e\u5e93\u6027\u80fd\u4f18\u5316\u601d\u8def"},next:{title:"Mysql\u5206\u5e93\u5206\u8868\u540e\u5e26\u6765\u7684\u516d\u5927\u95ee\u9898",permalink:"/docs/\u4e2d\u95f4\u4ef6/sharing-jdbc/1\u3001Mysql\u67b6\u6784\u6f14\u53d8\u5347\u7ea7+\u5206\u5e93\u5206\u8868\u4f18\u7f3a\u70b9/1.4 Mysql\u5206\u5e93\u5206\u8868\u540e\u5e26\u6765\u7684\u516d\u5927\u95ee\u9898"}},s={},c=[{value:"\u5206\u5e93\u5206\u8868\u89e3\u51b3\u7684\u73b0\u72b6\u95ee\u9898",id:"\u5206\u5e93\u5206\u8868\u89e3\u51b3\u7684\u73b0\u72b6\u95ee\u9898",level:3},{value:"\u89e3\u51b3\u6570\u636e\u5e93\u672c\u8eab\u74f6\u9888",id:"\u89e3\u51b3\u6570\u636e\u5e93\u672c\u8eab\u74f6\u9888",level:4},{value:"\u89e3\u51b3\u7cfb\u7edf\u672c\u8eabIO\u3001CPU\u74f6\u9888",id:"\u89e3\u51b3\u7cfb\u7edf\u672c\u8eabiocpu\u74f6\u9888",level:4}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mysql\u5206\u5e93\u5206\u8868\u540e\u5e26\u6765\u7684\u4f18\u70b9"},"Mysql\u5206\u5e93\u5206\u8868\u540e\u5e26\u6765\u7684\u4f18\u70b9"),(0,l.kt)("h3",{id:"\u5206\u5e93\u5206\u8868\u89e3\u51b3\u7684\u73b0\u72b6\u95ee\u9898"},"\u5206\u5e93\u5206\u8868\u89e3\u51b3\u7684\u73b0\u72b6\u95ee\u9898"),(0,l.kt)("h4",{id:"\u89e3\u51b3\u6570\u636e\u5e93\u672c\u8eab\u74f6\u9888"},"\u89e3\u51b3\u6570\u636e\u5e93\u672c\u8eab\u74f6\u9888"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u8fde\u63a5\u6570"),"\uff1a \u8fde\u63a5\u6570\u8fc7\u591a\u65f6\uff0c\u5c31\u4f1a\u51fa\u73b0\u2018too many connections\u2019\u7684\u9519\u8bef\uff0c\u8bbf\u95ee\u91cf\u592a\u5927\u6216\u8005\u6570\u636e\u5e93\u8bbe\u7f6e\u7684\u6700\u5927\u8fde\u63a5\u6570\u592a\u5c0f\u7684\u539f\u56e0"),(0,l.kt)("li",{parentName:"ul"},"Mysql\u9ed8\u8ba4\u7684\u6700\u5927\u8fde\u63a5\u6570\u4e3a100.\u53ef\u4ee5\u4fee\u6539\uff0c\u800cmysql\u670d\u52a1\u5141\u8bb8\u7684\u6700\u5927\u8fde\u63a5\u6570\u4e3a16384"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u5206\u8868\u53ef\u4ee5\u89e3\u51b3",(0,l.kt)("strong",{parentName:"li"},"\u5355\u8868\u6d77\u91cf\u6570\u636e\u7684\u67e5\u8be2\u6027\u80fd\u95ee\u9898")),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u5206\u5e93\u53ef\u4ee5\u89e3\u51b3\u5355\u53f0\u6570\u636e\u5e93\u7684\u5e76\u53d1\u8bbf\u95ee\u538b\u529b\u95ee\u9898")),(0,l.kt)("h4",{id:"\u89e3\u51b3\u7cfb\u7edf\u672c\u8eabiocpu\u74f6\u9888"},"\u89e3\u51b3\u7cfb\u7edf\u672c\u8eabIO\u3001CPU\u74f6\u9888"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u78c1\u76d8\u8bfb\u5199IO\u74f6\u9888"),"\uff0c\u70ed\u70b9\u6570\u636e\u592a\u591a\uff0c\u5c3d\u7ba1\u4f7f\u7528\u4e86\u6570\u636e\u5e93\u672c\u8eab\u7f13\u5b58\uff0c\u4f46\u662f\u4f9d\u65e7\u6709\u5927\u91cfIO,\u5bfc\u81f4sql\u6267\u884c\u901f\u5ea6\u6162"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u7f51\u7edcIO\u74f6\u9888"),"\uff0c\u8bf7\u6c42\u7684\u6570\u636e\u592a\u591a\uff0c\u6570\u636e\u4f20\u8f93\u5927\uff0c\u7f51\u7edc\u5e26\u5bbd\u4e0d\u591f\uff0c\u94fe\u8def\u54cd\u5e94\u65f6\u95f4\u53d8\u957f"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"CPU\u74f6\u9888"),"\uff0c\u5c24\u5176\u5728\u57fa\u7840\u6570\u636e\u91cf\u5927\u5355\u673a\u590d\u6742SQL\u8ba1\u7b97\uff0cSQL\u8bed\u53e5\u6267\u884c\u5360\u7528CPU\u4f7f\u7528\u7387\u9ad8\uff0c\u4e5f\u6709\u626b\u63cf\u884c\u6570\u5927\u3001\u9501\u51b2\u7a81\u3001\u9501\u7b49\u5f85\u7b49\u539f\u56e0",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("strong",{parentName:"li"},"show processlist; \u3001show full processlist"),"\uff0c\u53d1\u73b0 CPU \u4f7f\u7528\u7387\u6bd4\u8f83\u9ad8\u7684SQL"),(0,l.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u7684\u5bf9\u4e8e\u67e5\u8be2\u65f6\u95f4\u957f\uff0c",(0,l.kt)("strong",{parentName:"li"},"State")," \u5217\u503c\u662f ",(0,l.kt)("strong",{parentName:"li"},"Sending data\uff0cCopying to tmp table\uff0cCopying to tmp table on disk\uff0cSorting result\uff0cUsing filesort")," \u7b49\u90fd\u662f\u53ef\u80fd\u6709\u6027\u80fd\u95ee\u9898SQL\uff0c\u6e05\u695a\u76f8\u5173\u5f71\u54cd\u95ee\u9898\u7684\u60c5\u51b5\u53ef\u4ee5kill\u6389"),(0,l.kt)("li",{parentName:"ul"},"\u4e5f\u5b58\u5728\u6267\u884c\u65f6\u95f4\u77ed\uff0c\u4f46\u662fCPU\u5360\u7528\u7387\u9ad8\u7684SQL\uff0c\u901a\u8fc7\u4e0a\u9762\u547d\u4ee4\u67e5\u8be2\u4e0d\u5230\uff0c\u8fd9\u4e2a\u65f6\u5019\u6700\u597d\u901a\u8fc7\u6267\u884c\u8ba1\u5212\u5206\u6790explain\u8fdb\u884c\u5206\u6790",(0,l.kt)("strong",{parentName:"li"},"\uff1f\uff1f\uff1f\u53ef\u80fd\u51fa\u73b0\u7684\u60c5\u51b5\uff1f\uff1f\uff1f"))))))}u.isMDXComponent=!0}}]);