"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5686],{3905:(e,r,n)=>{n.d(r,{Zo:()=>s,kt:()=>b});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=t.createContext({}),p=function(e){var r=t.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},s=function(e){var r=p(e.components);return t.createElement(d.Provider,{value:r},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,b=u["".concat(d,".").concat(g)]||u[g]||c[g]||l;return n?t.createElement(b,i(i({ref:r},s),{},{components:n})):t.createElement(b,i({ref:r},s))}));function b(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var d in r)hasOwnProperty.call(r,d)&&(o[d]=r[d]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},50956:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var t=n(87462),a=(n(67294),n(3905));const l={slug:"/java-buildgrale",title:"java\u89e3\u6790build.gradle\u6587\u4ef6\u5e76\u83b7\u53d6\u4f9d\u8d56\u4fe1\u606f",description:"\u53ef\u4ee5\u4f7f\u7528Java\u4e2d\u7684Groovy\u8bed\u8a00\u5e93\u6765\u89e3\u6790build.gradle\u6587\u4ef6\u5e76\u83b7\u53d6\u4f9d\u8d56\u4fe1\u606f\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\u4ee3\u7801\u7247\u6bb5\uff0c\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528Groovy\u6765\u89e3\u6790build.gradle\u6587\u4ef6\u5e76\u83b7\u53d6\u5176\u4f9d\u8d56\u9879\uff1a",date:new Date("2023-03-30T00:00:00.000Z"),authors:"heshibin",tags:["java","gradle"]},i=void 0,o={permalink:"/blog/java-buildgrale",editUrl:"https://github.com/heshibin/heshibin.github.io/edit/main/blog/java\u89e3\u6790build.gradle\u6587\u4ef6\u5e76\u83b7\u53d6\u4f9d\u8d56\u4fe1\u606f.md",source:"@site/blog/java\u89e3\u6790build.gradle\u6587\u4ef6\u5e76\u83b7\u53d6\u4f9d\u8d56\u4fe1\u606f.md",title:"java\u89e3\u6790build.gradle\u6587\u4ef6\u5e76\u83b7\u53d6\u4f9d\u8d56\u4fe1\u606f",description:"\u53ef\u4ee5\u4f7f\u7528Java\u4e2d\u7684Groovy\u8bed\u8a00\u5e93\u6765\u89e3\u6790build.gradle\u6587\u4ef6\u5e76\u83b7\u53d6\u4f9d\u8d56\u4fe1\u606f\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\u4ee3\u7801\u7247\u6bb5\uff0c\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528Groovy\u6765\u89e3\u6790build.gradle\u6587\u4ef6\u5e76\u83b7\u53d6\u5176\u4f9d\u8d56\u9879\uff1a",date:"2023-03-30T00:00:00.000Z",formattedDate:"March 30, 2023",tags:[{label:"java",permalink:"/blog/tags/java"},{label:"gradle",permalink:"/blog/tags/gradle"}],readingTime:3.195,hasTruncateMarker:!1,authors:[{name:"Ma Chu",title:"\u5929\u9009\u6253\u5de5\u4eba",url:"https://github.com/heshibin",email:"heshibina@gmail.com",imageURL:"https://avatars.githubusercontent.com/u/49633468?s=400&u=e1850391be1aa0356c3ae4202a8e8b8018c584d0&v=4",key:"heshibin"}],frontMatter:{slug:"/java-buildgrale",title:"java\u89e3\u6790build.gradle\u6587\u4ef6\u5e76\u83b7\u53d6\u4f9d\u8d56\u4fe1\u606f",description:"\u53ef\u4ee5\u4f7f\u7528Java\u4e2d\u7684Groovy\u8bed\u8a00\u5e93\u6765\u89e3\u6790build.gradle\u6587\u4ef6\u5e76\u83b7\u53d6\u4f9d\u8d56\u4fe1\u606f\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\u4ee3\u7801\u7247\u6bb5\uff0c\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528Groovy\u6765\u89e3\u6790build.gradle\u6587\u4ef6\u5e76\u83b7\u53d6\u5176\u4f9d\u8d56\u9879\uff1a",date:"2023-03-30T00:00:00.000Z",authors:"heshibin",tags:["java","gradle"]},prevItem:{title:"span\u81ea\u52a8\u6362\u884c",permalink:"/blog/span-auto-line-feed"},nextItem:{title:"springboot\u8de8\u57df\u8bbe\u7f6e",permalink:"/blog/spring-boot-cors-config"}},d={authorsImageUrls:[void 0]},p=[],s={toc:p};function u(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Gradle \u652f\u6301\u4f7f\u7528\u4ee5\u4e0b\u51e0\u79cd\u8bed\u8a00\u7f16\u5199 build.gradle \u6587\u4ef6\uff1a   "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Groovy\uff1aGroovy \u662f Gradle \u7684\u9ed8\u8ba4\u8bed\u8a00\uff0c\u4e5f\u662f\u6700\u5e38\u7528\u7684\u4e00\u79cd\u3002\u4f7f\u7528 Groovy \u7f16\u5199\u7684 build.gradle \u6587\u4ef6\u901a\u5e38\u66f4\u52a0\u7b80\u6d01\u6613\u61c2\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Kotlin\uff1a\u4ece Gradle 3.0 \u5f00\u59cb\uff0cGradle \u5f00\u59cb\u652f\u6301\u4f7f\u7528 Kotlin \u4f5c\u4e3a build.gradle \u6587\u4ef6\u7684\u7f16\u5199\u8bed\u8a00\u3002\u4e0e Groovy \u76f8\u6bd4\uff0cKotlin \u5177\u6709\u66f4\u5f3a\u7684\u7c7b\u578b\u5b89\u5168\u548c\u8868\u8fbe\u80fd\u529b\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Scala\uff1aGradle \u8fd8\u652f\u6301\u4f7f\u7528 Scala \u8bed\u8a00\u7f16\u5199 build.gradle \u6587\u4ef6\uff0cScala \u662f\u4e00\u79cd\u5f3a\u7c7b\u578b\u7684\u51fd\u6570\u5f0f\u7f16\u7a0b\u8bed\u8a00\u3002"))),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528Java\u4e2d\u7684Groovy\u8bed\u8a00\u5e93\u6765\u89e3\u6790build.gradle\u6587\u4ef6\u5e76\u83b7\u53d6\u4f9d\u8d56\u4fe1\u606f\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\u4ee3\u7801\u7247\u6bb5\uff0c\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528Groovy\u6765\u89e3\u6790build.gradle\u6587\u4ef6\u5e76\u83b7\u53d6\u5176\u4f9d\u8d56\u9879\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import groovy.util.Node\nimport groovy.util.NodeList\nimport groovy.util.XmlParser\n\npublic class GradleDependencyParser {\n\n    public static void main(String[] args) {\n        String buildFilePath = "path/to/build.gradle";\n        GradleDependencyParser parser = new GradleDependencyParser();\n        parser.parse(buildFilePath);\n    }\n\n    public void parse(String buildFilePath) {\n        XmlParser parser = new XmlParser(false, false);\n        Node rootNode = parser.parse(new File(buildFilePath));\n        NodeList dependencies = rootNode.depthFirst().findAll { it.name() == \'dependencies\' }[0];\n        dependencies.children().each { dependency ->\n            String group = dependency.attributes().get("group");\n            String name = dependency.attributes().get("name");\n            String version = dependency.attributes().get("version");\n            System.out.println("Group: " + group + ", Name: " + name + ", Version: " + version);\n        }\n    }\n}\n')),(0,a.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u4f7f\u7528\u4e86groovy.util.XmlParser\u6765\u89e3\u6790build.gradle\u6587\u4ef6\uff0c\u7136\u540e\u4f7f\u7528depthFirst()\u65b9\u6cd5\u904d\u5386\u4e86\u6574\u4e2aXML\u6811\uff0c\u67e5\u627e\u6240\u6709\u540d\u4e3adependencies\u7684\u8282\u70b9\uff0c\u5e76\u4e14\u904d\u5386\u6bcf\u4e2a\u4f9d\u8d56\u9879\u8282\u70b9\uff0c\u83b7\u53d6\u5176\u4e2d\u7684group\u3001name\u548cversion\u5c5e\u6027\uff0c\u5e76\u6253\u5370\u8f93\u51fa\u3002    "),(0,a.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cGradle\u652f\u6301\u4f7f\u7528\u4e0d\u540c\u7684\u8bed\u8a00\u6765\u7f16\u5199build.gradle\u6587\u4ef6\uff0c\u6bd4\u5982Groovy\u3001Kotlin\u7b49\uff0c\u56e0\u6b64\u9700\u8981\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u8c03\u6574\u4ee3\u7801\u6765\u89e3\u6790\u4e0d\u540c\u7684build.gradle\u6587\u4ef6\u3002           "),(0,a.kt)("p",null,"\u4e0e\u89e3\u6790 Groovy \u7f16\u5199\u7684 build.gradle \u6587\u4ef6\u7c7b\u4f3c\uff0c\u89e3\u6790 Kotlin \u7f16\u5199\u7684 build.gradle.kts \u6587\u4ef6\u4e5f\u53ef\u4ee5\u4f7f\u7528 Groovy \u63d0\u4f9b\u7684 API \u8fdb\u884c\u89e3\u6790\u3002   "),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u793a\u4f8b\u4ee3\u7801\u7247\u6bb5\uff0c\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528 Groovy \u89e3\u6790 Kotlin \u7f16\u5199\u7684 build.gradle.kts \u6587\u4ef6\u5e76\u83b7\u53d6\u5176\u4e2d\u7684\u4f9d\u8d56\u9879\uff1a   "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import groovy.util.Node\nimport groovy.util.NodeList\nimport groovy.util.XmlParser\nimport org.jetbrains.kotlin.script.jsr223.KotlinJsr223JvmLocalScriptEngineFactory\nimport javax.script.ScriptEngine\n\npublic class KotlinGradleDependencyParser {\n\n    public static void main(String[] args) {\n        String buildFilePath = "path/to/build.gradle.kts";\n        KotlinGradleDependencyParser parser = new KotlinGradleDependencyParser();\n        parser.parse(buildFilePath);\n    }\n\n    public void parse(String buildFilePath) {\n        ScriptEngine engine = new KotlinJsr223JvmLocalScriptEngineFactory().scriptEngine\n        engine.eval("file(\\"" + buildFilePath + "\\").readText()")\n        String dependencies = (String) engine.eval("kotlin.runCatching {"\n                + "val deps = arrayListOf<String>()\\n"\n                + "dependencies {\\n"\n                + "  classpath.forEach { dep -> deps.add(\\"${dep.group}:${dep.name}:${dep.version}\\") }\\n"\n                + "}\\n"\n                + "deps.joinToString(\\"\\n\\")"\n                + "}.getOrNull()");\n        System.out.println(dependencies);\n    }\n}\n')),(0,a.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u4f7f\u7528\u4e86 org.jetbrains.kotlin.script.jsr223.KotlinJsr223JvmLocalScriptEngineFactory \u7c7b\u6765\u521b\u5efa\u4e00\u4e2a\u53ef\u4ee5\u89e3\u6790 Kotlin \u811a\u672c\u7684 ScriptEngine\u3002\u7136\u540e\u4f7f\u7528 eval \u65b9\u6cd5\u5c06 Kotlin \u811a\u672c\u8bfb\u5165\u5e76\u6267\u884c\uff0c\u83b7\u53d6\u5176\u4e2d\u7684\u4f9d\u8d56\u9879\uff0c\u5e76\u5c06\u7ed3\u679c\u4f5c\u4e3a\u5b57\u7b26\u4e32\u8fd4\u56de\u3002    "),(0,a.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cKotlin \u7f16\u5199\u7684 build.gradle.kts \u6587\u4ef6\u4e0e Groovy \u7f16\u5199\u7684 build.gradle \u6587\u4ef6\u6709\u6240\u4e0d\u540c\uff0c\u56e0\u6b64\u9700\u8981\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u8c03\u6574\u4ee3\u7801\u6765\u89e3\u6790\u4e0d\u540c\u7684 build.gradle.kts \u6587\u4ef6\u3002"))}u.isMDXComponent=!0}}]);