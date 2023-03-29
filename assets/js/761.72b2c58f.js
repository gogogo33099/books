(window.webpackJsonp=window.webpackJsonp||[]).push([[761],{1244:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"global-plugin-d-ts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#global-plugin-d-ts"}},[t._v("#")]),t._v(" global-plugin.d.ts")]),t._v(" "),s("h2",{attrs:{id:"umd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#umd"}},[t._v("#")]),t._v(" UMD")]),t._v(" "),s("p",[t._v("一个 UMD 模块既可以用作 ES 模块（使用导入语句），也可以用作全局变量（在缺少模块加载器的环境中使用）。\n许多流行的代码库，如"),s("a",{attrs:{href:"http://momentjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Moment.js"),s("OutboundLink")],1),t._v("，都是使用这模式发布的。\n例如，在 Node.js 中或使用了 RequireJS 时，你可以这样使用：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" moment "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'moment'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("moment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("在纯浏览器环境中，你可以这样使用：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("moment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"识别-umd-代码库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#识别-umd-代码库"}},[t._v("#")]),t._v(" 识别 UMD 代码库")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/umdjs/umd",target:"_blank",rel:"noopener noreferrer"}},[t._v("UMD 模块"),s("OutboundLink")],1),t._v("会检查运行环境中是否存在模块加载器。\n这是一种常见模式，示例如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" factory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" define "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"function"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" define"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("amd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"libName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" factory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" module "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("factory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"libName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("returnExports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("factory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("libName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n")])])]),s("p",[t._v("如果你看到代码库中存在类如"),s("code",[t._v("typeof define")]),t._v("，"),s("code",[t._v("typeof window")]),t._v("或"),s("code",[t._v("typeof module")]),t._v("的检测代码，尤其是在文件的顶端，那么它大概率是 UMD 代码库。")]),t._v(" "),s("p",[t._v("在 UMD 模块的文档中经常会提供在 Node.js 中结合"),s("code",[t._v("require")]),t._v("使用的示例，以及在浏览器中结合"),s("code",[t._v("<script>")]),t._v("标签使用的示例。")]),t._v(" "),s("h3",{attrs:{id:"umd-代码库的示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#umd-代码库的示例"}},[t._v("#")]),t._v(" UMD 代码库的示例")]),t._v(" "),s("p",[t._v("大多数流行的代码库均提供了 UMD 格式的包。\n例如，"),s("a",{attrs:{href:"https://jquery.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("jQuery"),s("OutboundLink")],1),t._v("，"),s("a",{attrs:{href:"http://momentjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Moment.js"),s("OutboundLink")],1),t._v("和"),s("a",{attrs:{href:"https://lodash.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("lodash"),s("OutboundLink")],1),t._v("等。")]),t._v(" "),s("h3",{attrs:{id:"模版"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模版"}},[t._v("#")]),t._v(" 模版")]),t._v(" "),s("p",[t._v("针对模块，共存在三个模版。它们是：")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/ts-manual/declaration-files/templates/templates/module.d.ts.html"}},[s("code",[t._v("module.d.ts")])])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ts-manual/declaration-files/templates/templates/module-class.d.ts.html"}},[s("code",[t._v("module-class.d.ts")])])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ts-manual/declaration-files/templates/templates/module-function.d.ts.html"}},[s("code",[t._v("module-function.d.ts")])])],1)]),t._v(" "),s("p",[t._v("若一个模块可以当作函数调用，则使用"),s("RouterLink",{attrs:{to:"/ts-manual/declaration-files/templates/templates/module-function.d.ts.html"}},[s("code",[t._v("module-function.d.ts")])]),t._v("。")],1),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Note: calling 'x' as a function")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("x")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("请务必阅读"),s("a",{attrs:{href:"#es6-%E5%AF%B9%E6%A8%A1%E5%9D%97%E8%B0%83%E7%94%A8%E7%AD%BE%E5%90%8D%E7%9A%84%E5%BD%B1%E5%93%8D"}},[t._v('脚注："ES6 对模块调用签名的影响"')]),t._v("。")]),t._v(" "),s("p",[t._v("如果一个模块可以使用"),s("code",[t._v("new")]),t._v("来构造，则使用"),s("RouterLink",{attrs:{to:"/ts-manual/declaration-files/templates/templates/module-class.d.ts.html"}},[s("code",[t._v("module-class.d.ts")])]),t._v("。")],1),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Note: using 'new' operator on the imported variable")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("x")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("请务必阅读"),s("a",{attrs:{href:"#es6-%E5%AF%B9%E6%A8%A1%E5%9D%97%E8%B0%83%E7%94%A8%E7%AD%BE%E5%90%8D%E7%9A%84%E5%BD%B1%E5%93%8D"}},[t._v('脚注："ES6 对模块调用签名的影响"')]),t._v("，它同样适用于这类模块。")]),t._v(" "),s("p",[t._v("如果一个模块既不可以调用，又不可以构造，那么就使用"),s("RouterLink",{attrs:{to:"/ts-manual/declaration-files/templates/templates/module.d.ts.html"}},[s("code",[t._v("module.d.ts")])]),t._v("。")],1),t._v(" "),s("h2",{attrs:{id:"模块插件或-umd-插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块插件或-umd-插件"}},[t._v("#")]),t._v(" 模块插件或 UMD 插件")]),t._v(" "),s("p",[t._v("模块插件会改变其它模块的结构（包含 UMD 或 ES 模块）。\n例如，在 Moment.js 中，"),s("code",[t._v("moment-range")]),t._v("会将"),s("code",[t._v("range")]),t._v("方法添加到"),s("code",[t._v("moment")]),t._v("对象上。")]),t._v(" "),s("p",[t._v("对于编写声明文件而言，无论是 ES 模块还是 UMD 模块，你都可以使用相同的代码。")]),t._v(" "),s("h3",{attrs:{id:"模版-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模版-2"}},[t._v("#")]),t._v(" 模版")]),t._v(" "),s("p",[t._v("使用"),s("RouterLink",{attrs:{to:"/ts-manual/declaration-files/templates/templates/module-plugin.d.ts.html"}},[s("code",[t._v("module-plugin.d.ts")])]),t._v("模版。")],1),t._v(" "),s("h2",{attrs:{id:"全局插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局插件"}},[t._v("#")]),t._v(" 全局插件")]),t._v(" "),s("p",[t._v("全局插件是一段全局代码，它会改变某个全局变量。\n对于修改了全局作用域的模块，它会增加出现运行时冲突的可能性。")]),t._v(" "),s("p",[t._v("例如，有些库会向"),s("code",[t._v("Array.prototype")]),t._v("或"),s("code",[t._v("String.prototype")]),t._v("中增加新的函数。")]),t._v(" "),s("h3",{attrs:{id:"识别全局插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#识别全局插件"}},[t._v("#")]),t._v(" 识别全局插件")]),t._v(" "),s("p",[t._v("全局插件通常可以根据其文档来识别。")]),t._v(" "),s("p",[t._v("你会看到如下示例：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello, world'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Creates new methods on built-in types")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startsWithHello")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Creates new methods on built-in types")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reverseAndSort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"模版-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模版-3"}},[t._v("#")]),t._v(" 模版")]),t._v(" "),s("p",[t._v("使用"),s("RouterLink",{attrs:{to:"/ts-manual/declaration-files/templates/templates/global-plugin.d.ts.html"}},[s("code",[t._v("global-plugin.d.ts")])]),t._v("模版。")],1),t._v(" "),s("h2",{attrs:{id:"修改了全局作用域的模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改了全局作用域的模块"}},[t._v("#")]),t._v(" 修改了全局作用域的模块")]),t._v(" "),s("p",[t._v("对于修改了全局作用域的模块来讲，在导入它们时，会对全局作用域中的值进行修改。\n比如存在某个代码库，当导入它时，它会向"),s("code",[t._v("String.prototype")]),t._v("上添加新的成员。\n该模式存在危险，因为它有导致运行时冲突的可能性，\n但我们仍然可以为其编写声明文件。")]),t._v(" "),s("h3",{attrs:{id:"识别出修改了全局作用域的模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#识别出修改了全局作用域的模块"}},[t._v("#")]),t._v(" 识别出修改了全局作用域的模块")]),t._v(" "),s("p",[t._v("我们可以通过文档来识别修改了全局作用域的模块。\n通常来讲，它们与全局插件类似，但是需要"),s("code",[t._v("require")]),t._v("语句来激活对全局作用域的修改。")]),t._v(" "),s("p",[t._v("你可能看到过如下的文档：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'require' call that doesn't use its return value")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" unused "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'magic-string-time'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* or */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'magic-string-time'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello, world'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Creates new methods on built-in types")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startsWithHello")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Creates new methods on built-in types")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reverseAndSort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"模版-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模版-4"}},[t._v("#")]),t._v(" 模版")]),t._v(" "),s("p",[t._v("使用"),s("RouterLink",{attrs:{to:"/ts-manual/declaration-files/templates/templates/global-modifying-module.d.ts.html"}},[s("code",[t._v("global-modifying-module.d.ts")])]),t._v("模版。")],1),t._v(" "),s("h2",{attrs:{id:"利用依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#利用依赖"}},[t._v("#")]),t._v(" 利用依赖")]),t._v(" "),s("p",[t._v("你的代码库可能会有若干种依赖。\n本节会介绍如何在声明文件中导入它们。")]),t._v(" "),s("h3",{attrs:{id:"对全局库的依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对全局库的依赖"}},[t._v("#")]),t._v(" 对全局库的依赖")]),t._v(" "),s("p",[t._v("如果你的代码库依赖于某个全局代码库，则使用"),s("code",[t._v('/// <reference types="..." />')]),t._v("指令：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/// <reference types="someLib" />')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getThing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" someLib"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("thing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"对模块的依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对模块的依赖"}},[t._v("#")]),t._v(" 对模块的依赖")]),t._v(" "),s("p",[t._v("如果你的代码库依赖于某个模块，则使用"),s("code",[t._v("import")]),t._v("语句：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" moment "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'moment'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getThing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" moment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"对-umd-模块的依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对-umd-模块的依赖"}},[t._v("#")]),t._v(" 对 UMD 模块的依赖")]),t._v(" "),s("h4",{attrs:{id:"全局代码库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局代码库"}},[t._v("#")]),t._v(" 全局代码库")]),t._v(" "),s("p",[t._v("如果你的全局代码库依赖于某个 UMD 模块，则使用"),s("code",[t._v("/// <reference types")]),t._v("指令：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/// <reference types="moment" />')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getThing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" moment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"es-模块或-umd-模块代码库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es-模块或-umd-模块代码库"}},[t._v("#")]),t._v(" ES 模块或 UMD 模块代码库")]),t._v(" "),s("p",[t._v("如果你的模块或 UMD 代码库依赖于某个 UMD 代码库，则使用"),s("code",[t._v("import")]),t._v("语句：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" someLib "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'someLib'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("不要使用"),s("code",[t._v("/// <reference")]),t._v("指令来声明对 UMD 代码库的依赖。")]),t._v(" "),s("h2",{attrs:{id:"脚注"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#脚注"}},[t._v("#")]),t._v(" 脚注")]),t._v(" "),s("h3",{attrs:{id:"防止命名冲突"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防止命名冲突"}},[t._v("#")]),t._v(" 防止命名冲突")]),t._v(" "),s("p",[t._v("注意，虽说可以在全局作用域内定义许多类型。\n但我们强烈建议不要这样做，因为当一个工程中存在多个声明文件时，它可能会导致难以解决的命名冲突。")]),t._v(" "),s("p",[t._v("可以遵循的一个简单规则是使用代码库提供的某个全局变量来声明拥有命名空间的类型。\n例如，如果代码库提供了全局变量"),s("code",[t._v("cats")]),t._v("，那么可以这样写：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" cats "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("KittySettings")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("而不是：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// at top-level")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CatsKittySettings")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这样做会保证代码库可以被转换成 UMD 模块，且不会影响声明文件的使用者。")]),t._v(" "),s("h3",{attrs:{id:"es6-对模块插件的影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es6-对模块插件的影响"}},[t._v("#")]),t._v(" ES6 对模块插件的影响")]),t._v(" "),s("p",[t._v("一些插件会对已有模块的顶层导出进行添加或修改。\n这在 CommonJS 以及其它模块加载器里是合法的，但 ES6 模块是不可改变的，因此该模式是不可行的。\n因为，TypeScript 是模块加载器无关的，所以在编译时不会对该行为加以限制，但是开发者若想要转换到 ES6 模块加载器则需要注意这一点。")]),t._v(" "),s("h3",{attrs:{id:"es6-对模块调用签名的影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es6-对模块调用签名的影响"}},[t._v("#")]),t._v(" ES6 对模块调用签名的影响")]),t._v(" "),s("p",[t._v("许多代码库，如 Express，将自身导出为可调用的函数。\n例如，Express 的典型用法如下：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" exp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'express'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("在 ES6 模块加载器中，顶层对象（此例中就"),s("code",[t._v("exp")]),t._v("）只能拥有属性；\n顶层的模块对象永远不能够被调用。\n最常见的解决方案是为可调用的/可构造的对象定义一个"),s("code",[t._v("default")]),t._v("导出；\n有些模块加载器会自动检测这种情况并且将顶层对象替换为"),s("code",[t._v("default")]),t._v("导出。")]),t._v(" "),s("h2",{attrs:{id:"代码库文件结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码库文件结构"}},[t._v("#")]),t._v(" 代码库文件结构")]),t._v(" "),s("p",[t._v("声明文件的结构应该反映代码库源码的结构。")]),t._v(" "),s("p",[t._v("一个代码库可以包含多个模块，比如：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("myLib\n  +---- index.js\n  +---- foo.js\n  +---- bar\n         +---- index.js\n         +---- baz.js\n")])])]),s("p",[t._v("它们可以通过如下方式导入：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myLib'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myLib/foo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myLib/bar'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" d "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myLib/bar/baz'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("声明文件如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("@types/myLib\n  +---- index.d.ts\n  +---- foo.d.ts\n  +---- bar\n         +---- index.d.ts\n         +---- baz.d.ts\n")])])]),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Project: [~THE PROJECT NAME~]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*~ This template shows how to write a global plugin. */")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*~ Write a declaration for the original type and add new members.\n *~ For example, this adds a 'toBinaryString' method with overloads to\n *~ the built-in number type.\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBinaryString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("opts"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MyLibrary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BinaryFormatOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBinaryString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        callback"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MyLibrary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BinaryFormatCallback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        opts"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MyLibrary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BinaryFormatOptions\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*~ If you need to declare several types, place them inside a namespace\n *~ to avoid adding too many things to the global namespace.\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" MyLibrary "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BinaryFormatCallback")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BinaryFormatOptions")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        prefix"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        padding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);