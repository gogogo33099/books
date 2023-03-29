(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{412:function(t,s,a){t.exports=a.p+"assets/img/cookie-result-01.a2f8d237.png"},953:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"koa2使用cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#koa2使用cookie"}},[t._v("#")]),t._v(" koa2使用cookie")]),t._v(" "),s("h2",{attrs:{id:"使用方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),s("p",[t._v("koa提供了从上下文直接读取、写入cookie的方法")]),t._v(" "),s("ul",[s("li",[t._v("ctx.cookies.get(name, [options]) 读取上下文请求中的cookie")]),t._v(" "),s("li",[t._v("ctx.cookies.set(name, value, [options]) 在上下文中写入cookie")])]),t._v(" "),s("p",[t._v("koa2 中操作的cookies是使用了npm的cookies模块，源码在"),s("a",{attrs:{href:"https://github.com/pillarjs/cookies",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/pillarjs/cookies"),s("OutboundLink")],1),t._v("，所以在读写cookie的使用参数与该模块的使用一致。")]),t._v(" "),s("h2",{attrs:{id:"例子代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#例子代码"}},[t._v("#")]),t._v(" 例子代码")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Koa "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'koa'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Koa")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ctx")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/index'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookies"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cid'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello world'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("domain")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'localhost'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 写cookie所在的域名")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/index'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 写cookie所在的路径")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("maxAge")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cookie有效时长")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("expires")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2017-02-15'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cookie失效时间")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("httpOnly")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否只用于http请求中获取")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("overwrite")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否允许重写")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cookie is ok'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello world'")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[demo] cookie is starting at port 3000'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n")])])]),s("h2",{attrs:{id:"运行例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行例子"}},[t._v("#")]),t._v(" 运行例子")]),t._v(" "),s("h3",{attrs:{id:"执行脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行脚本"}},[t._v("#")]),t._v(" 执行脚本")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("node")]),t._v(" index.js\n")])])]),s("h3",{attrs:{id:"运行结果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行结果"}},[t._v("#")]),t._v(" 运行结果")]),t._v(" "),s("h4",{attrs:{id:"访问http-localhost-3000-index"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#访问http-localhost-3000-index"}},[t._v("#")]),t._v(" 访问"),s("a",{attrs:{href:"http://localhost:3000/index",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:3000/index"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[t._v("可以在控制台的cookie列表中中看到写在页面上的cookie")]),t._v(" "),s("li",[t._v("在控制台的console中使用document.cookie可以打印出在页面的所有cookie（需要是httpOnly设置false才能显示）")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(412),alt:"cookie-result-01"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);