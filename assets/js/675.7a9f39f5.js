(window.webpackJsonp=window.webpackJsonp||[]).push([[675],{1158:function(t,s,a){"use strict";a.r(s);var n=a(14),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_16-10-糟糕的错误处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_16-10-糟糕的错误处理"}},[t._v("#")]),t._v(" 16.10 糟糕的错误处理")]),t._v(" "),s("p",[t._v("译者注：该小结关于错误处理的观点，译者并不完全赞同，关于本小结的部分想法请参考 "),s("RouterLink",{attrs:{to:"/the-way-to-go/Discussion_about_16.10.html"}},[t._v("关于 16.10.2 小节错误处理的一些见解")]),t._v("。")],1),t._v(" "),s("p",[t._v("依附于"),s("RouterLink",{attrs:{to:"/the-way-to-go/13.0.html"}},[t._v("第 13 章")]),t._v("模式的描述和"),s("RouterLink",{attrs:{to:"/the-way-to-go/17.1.html"}},[t._v("第 17.1 小节")]),t._v("与"),s("RouterLink",{attrs:{to:"/the-way-to-go/17.2.html"}},[t._v("第 17.2.4 小节")]),t._v("的总结。")],1),t._v(" "),s("h2",{attrs:{id:"_16-10-1-不要使用布尔值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_16-10-1-不要使用布尔值"}},[t._v("#")]),t._v(" 16.10.1 不要使用布尔值：")]),t._v(" "),s("p",[t._v("像下面代码一样，创建一个布尔型变量用于测试错误条件是多余的：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" good "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 测试一个错误，`good` 被赋为 `true` 或者 `false`")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("good "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" errors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"things aren’t good"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("立即检测一个错误：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" err1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Func1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" … "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"_16-10-2-避免错误检测使代码变得混乱"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_16-10-2-避免错误检测使代码变得混乱"}},[t._v("#")]),t._v(" 16.10.2 避免错误检测使代码变得混乱：")]),t._v(" "),s("p",[t._v("避免写出这样的代码：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" err1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Func1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"err: "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nerr2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Func2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    \n")])])]),s("p",[t._v("首先，包括在一个初始化的 "),s("code",[t._v("if")]),t._v(" 语句中对函数的调用。但即使代码中到处都是以 "),s("code",[t._v("if")]),t._v(" 语句的形式通知错误（通过打印错误信息）。通过这种方式，很难分辨什么是正常的程序逻辑，什么是错误检测或错误通知。还需注意的是，大部分代码都是致力于错误的检测。通常解决此问题的好办法是尽可能以闭包的形式封装你的错误检测，例如下面的代码：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("httpRequestHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ResponseWriter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Method "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" errors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"expected GET"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" input "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInput")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" input "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"command"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" errors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"malformed command"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以在此进行其他的错误检测")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteHeader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),s("p",[t._v("这种方法可以很容易分辨出错误检测、错误通知和正常的程序逻辑（更详细的方式参考"),s("RouterLink",{attrs:{to:"/the-way-to-go/13.5.html"}},[t._v("第 13.5 小节")]),t._v("）。")],1),t._v(" "),s("p",[s("strong",[t._v("在开始阅读"),s("RouterLink",{attrs:{to:"/the-way-to-go/17.0.html"}},[t._v("第 17 章")]),t._v("前，先回答下列 2 个问题：")],1)]),t._v(" "),s("ul",[s("li",[s("p",[t._v("问题 16.1：总结你能记住的所有关于 "),s("code",[t._v(", ok")]),t._v(" 模式的情况。")])]),t._v(" "),s("li",[s("p",[t._v("问题 16.2：总结你能记住的所有关于 "),s("code",[t._v("defer")]),t._v(" 模式的情况。")])])]),t._v(" "),s("h2",{attrs:{id:"链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[t._v("#")]),t._v(" 链接")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/the-way-to-go/directory.html"}},[t._v("目录")])],1),t._v(" "),s("li",[t._v("上一节："),s("RouterLink",{attrs:{to:"/the-way-to-go/16.9.html"}},[t._v("闭包和协程的使用")])],1),t._v(" "),s("li",[t._v("下一章："),s("RouterLink",{attrs:{to:"/the-way-to-go/17.0.html"}},[t._v("Go 语言模式")])],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);