"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2950],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>N});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},E=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),E=a,N=p["".concat(c,".").concat(E)]||p[E]||d[E]||i;return n?r.createElement(N,l(l({ref:t},u),{},{components:n})):r.createElement(N,l({ref:t},u))}));function N(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=E;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}E.displayName="MDXCreateElement"},20083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={},l="\u5782\u76f4\u5206\u8868\u8bb2\u89e3",o={unversionedId:"\u4e2d\u95f4\u4ef6/sharing-jdbc/2\u3001Mysql\u5e38\u89c1\u5206\u5e93\u5206\u8868\u4ecb\u7ecd/2.1 \u5782\u76f4\u5206\u8868\u8bb2\u89e3",id:"\u4e2d\u95f4\u4ef6/sharing-jdbc/2\u3001Mysql\u5e38\u89c1\u5206\u5e93\u5206\u8868\u4ecb\u7ecd/2.1 \u5782\u76f4\u5206\u8868\u8bb2\u89e3",title:"\u5782\u76f4\u5206\u8868\u8bb2\u89e3",description:"\u80cc\u666f",source:"@site/docs/\u4e2d\u95f4\u4ef6/sharing-jdbc/2\u3001Mysql\u5e38\u89c1\u5206\u5e93\u5206\u8868\u4ecb\u7ecd/2.1 \u5782\u76f4\u5206\u8868\u8bb2\u89e3.md",sourceDirName:"\u4e2d\u95f4\u4ef6/sharing-jdbc/2\u3001Mysql\u5e38\u89c1\u5206\u5e93\u5206\u8868\u4ecb\u7ecd",slug:"/\u4e2d\u95f4\u4ef6/sharing-jdbc/2\u3001Mysql\u5e38\u89c1\u5206\u5e93\u5206\u8868\u4ecb\u7ecd/2.1 \u5782\u76f4\u5206\u8868\u8bb2\u89e3",permalink:"/docs/\u4e2d\u95f4\u4ef6/sharing-jdbc/2\u3001Mysql\u5e38\u89c1\u5206\u5e93\u5206\u8868\u4ecb\u7ecd/2.1 \u5782\u76f4\u5206\u8868\u8bb2\u89e3",draft:!1,editUrl:"https://github.com/heshibin/heshibin.github.io/edit/main/docs/\u4e2d\u95f4\u4ef6/sharing-jdbc/2\u3001Mysql\u5e38\u89c1\u5206\u5e93\u5206\u8868\u4ecb\u7ecd/2.1 \u5782\u76f4\u5206\u8868\u8bb2\u89e3.md",tags:[],version:"current",lastUpdatedBy:"heshibin",lastUpdatedAt:1677494581,formattedLastUpdatedAt:"Feb 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mysql\u5206\u5e93\u5206\u8868\u540e\u5e26\u6765\u7684\u516d\u5927\u95ee\u9898",permalink:"/docs/\u4e2d\u95f4\u4ef6/sharing-jdbc/1\u3001Mysql\u67b6\u6784\u6f14\u53d8\u5347\u7ea7+\u5206\u5e93\u5206\u8868\u4f18\u7f3a\u70b9/1.4 Mysql\u5206\u5e93\u5206\u8868\u540e\u5e26\u6765\u7684\u516d\u5927\u95ee\u9898"},next:{title:"\u5782\u76f4\u5206\u5e93\u8bb2\u89e3",permalink:"/docs/\u4e2d\u95f4\u4ef6/sharing-jdbc/2\u3001Mysql\u5e38\u89c1\u5206\u5e93\u5206\u8868\u4ecb\u7ecd/2.2 \u5782\u76f4\u5206\u5e93\u8bb2\u89e3"}},c={},s=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:4},{value:"\u5782\u76f4\u5206\u8868\u4ecb\u7ecd",id:"\u5782\u76f4\u5206\u8868\u4ecb\u7ecd",level:4},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:4}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5782\u76f4\u5206\u8868\u8bb2\u89e3"},"\u5782\u76f4\u5206\u8868\u8bb2\u89e3"),(0,a.kt)("h4",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,a.kt)("p",null,"\u5546\u54c1\u8868\u5b57\u6bb5\u592a\u591a\uff0c\u6bcf\u4e2a\u5b57\u6bb5\u8bbf\u95ee\u9891\u6b21\u4e0d\u4e00\u6837\uff0c\u6d6a\u8d39\u4e86IO\u8d44\u6e90\uff0c\u9700\u8981\u8fdb\u884c\u4f18\u5316"),(0,a.kt)("h4",{id:"\u5782\u76f4\u5206\u8868\u4ecb\u7ecd"},"\u5782\u76f4\u5206\u8868\u4ecb\u7ecd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e5f\u5c31\u662f\u201c",(0,a.kt)("strong",{parentName:"li"},"\u5927\u8868\u62c6\u5c0f\u8868"),"\u201d\uff0c\u57fa\u4e8e\u5217\u5b57\u6bb5\u8fdb\u884c\u7684"),(0,a.kt)("li",{parentName:"ul"},"\u62c6\u5206\u539f\u5219\u4e00\u822c\u662f\u8868\u4e2d\u7684\u5b57\u6bb5\u8f83\u591a\uff0c\u5c06\u4e0d\u5e38\u7528\u7684\u6216\u8005\u6570\u636e\u8f83\u5927\uff0c\u957f\u5ea6\u8f83\u957f\u7684\u62c6\u5206\u5230\u201c\u6269\u5c55\u8868 \u5982text\u7c7b\u578b\u5b57\u6bb5"),(0,a.kt)("li",{parentName:"ul"},"\u8bbf\u95ee\u9891\u6b21\u4f4e\u3001\u5b57\u6bb5\u5927\u7684\u5546\u54c1\u63cf\u8ff0\u4fe1\u606f\u5355\u72ec\u5b58\u653e\u5728\u4e00\u5f20\u8868\u4e2d\uff0c\u8bbf\u95ee\u9891\u6b21\u8f83\u9ad8\u7684\u5546\u54c1\u57fa\u672c\u4fe1\u606f\u5355\u72ec\u653e\u5728\u4e00\u5f20\u8868\u4e2d"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5782\u76f4\u62c6\u5206\u539f\u5219"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u628a\u4e0d\u5e38\u7528\u7684\u5b57\u6bb5\u5355\u72ec\u653e\u5728\u4e00\u5f20\u8868"),(0,a.kt)("li",{parentName:"ul"},"\u628atext\uff0cblob\u7b49\u5927\u5b57\u6bb5\u62c6\u5206\u51fa\u6765\u653e\u5728\u9644\u8868\u4e2d"),(0,a.kt)("li",{parentName:"ul"},"\u4e1a\u52a1\u7ecf\u5e38\u7ec4\u5408\u67e5\u8be2\u7684\u5217\u653e\u5728\u4e00\u5f20\u8868\u4e2d")))),(0,a.kt)("h4",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"//\u62c6\u5206\u524d\nCREATE TABLE `product` (\n  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,\n  `title` varchar(524) DEFAULT NULL COMMENT '\u89c6\u9891\u6807\u9898',\n  `cover_img` varchar(524) DEFAULT NULL COMMENT '\u5c01\u9762\u56fe',\n  `price` int(11) DEFAULT NULL COMMENT '\u4ef7\u683c,\u5206',\n  `total` int(10) DEFAULT '0' COMMENT '\u603b\u5e93\u5b58',\n  `left_num` int(10) DEFAULT '0' COMMENT '\u5269\u4f59',\n  \n  `learn_base` text COMMENT '\u8bfe\u524d\u987b\u77e5\uff0c\u5b66\u4e60\u57fa\u7840',\n  `learn_result` text COMMENT '\u8fbe\u5230\u6c34\u5e73',\n  `summary` varchar(1026) DEFAULT NULL COMMENT '\u6982\u8ff0',  \n  `detail` text COMMENT '\u89c6\u9891\u5546\u54c1\u8be6\u60c5',\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;\n\n\n//\u62c6\u5206\u540e\nCREATE TABLE `product` (\n  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,\n  `title` varchar(524) DEFAULT NULL COMMENT '\u89c6\u9891\u6807\u9898',\n  `cover_img` varchar(524) DEFAULT NULL COMMENT '\u5c01\u9762\u56fe',\n  `price` int(11) DEFAULT NULL COMMENT '\u4ef7\u683c,\u5206',\n  `total` int(10) DEFAULT '0' COMMENT '\u603b\u5e93\u5b58',\n  `left_num` int(10) DEFAULT '0' COMMENT '\u5269\u4f59',\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;\n\nCREATE TABLE `product_detail` (\n  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,\n  `product_id` int(11) DEFAULT NULL COMMENT '\u4ea7\u54c1\u4e3b\u952e',\n  `learn_base` text COMMENT '\u8bfe\u524d\u987b\u77e5\uff0c\u5b66\u4e60\u57fa\u7840',\n  `learn_result` text COMMENT '\u8fbe\u5230\u6c34\u5e73',\n  `summary` varchar(1026) DEFAULT NULL COMMENT '\u6982\u8ff0',  \n  `detail` text COMMENT '\u89c6\u9891\u5546\u54c1\u8be6\u60c5',\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;\n")))}p.isMDXComponent=!0}}]);