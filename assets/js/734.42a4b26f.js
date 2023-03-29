(window.webpackJsonp=window.webpackJsonp||[]).push([[734],{1216:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"typescript-1-7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typescript-1-7"}},[t._v("#")]),t._v(" TypeScript 1.7")]),t._v(" "),s("p",[t._v("完整的破坏性改动列表请到这里查看:"),s("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/issues?q=is%3Aissue+milestone%3A%22TypeScript+1.7%22+label%3A%22breaking+change%22",target:"_blank",rel:"noopener noreferrer"}},[t._v("breaking change issues"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"从this中推断类型发生了变化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从this中推断类型发生了变化"}},[t._v("#")]),t._v(" 从"),s("code",[t._v("this")]),t._v("中推断类型发生了变化")]),t._v(" "),s("p",[t._v("在类里，"),s("code",[t._v("this")]),t._v("值的类型将被推断成"),s("code",[t._v("this")]),t._v("类型。 这意味着随后使用原始类型赋值时可能会发生错误。")]),t._v(" "),s("p",[s("strong",[t._v("例子：")])]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Fighter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** @returns the winner of the fight. */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("opponent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Fighter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" theVeryBest "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rand")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            theVeryBest "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" opponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// error")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" theVeryBest\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("推荐：")])]),t._v(" "),s("p",[t._v("添加类型注解：")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Fighter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** @returns the winner of the fight. */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("opponent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Fighter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" theVeryBest"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Fighter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rand")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            theVeryBest "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" opponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// no error")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" theVeryBest\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"类成员修饰符后面会自动插入分号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类成员修饰符后面会自动插入分号"}},[t._v("#")]),t._v(" 类成员修饰符后面会自动插入分号")]),t._v(" "),s("p",[t._v("关键字"),s("code",[t._v("abstract，public，protected")]),t._v("和"),s("code",[t._v("private")]),t._v("是ECMAScript 3里的_保留关键字_并适用于自动插入分号机制。 之前，在这些关键字出现的行尾，TypeScript是不会插入分号的。 现在，这已经被改正了，在上例中"),s("code",[t._v("abstract class D")]),t._v("不再能够正确地继承"),s("code",[t._v("C")]),t._v("了，而是声明了一个"),s("code",[t._v("m")]),t._v("方法和一个额外的属性"),s("code",[t._v("abstract")]),t._v("。")]),t._v(" "),s("p",[t._v("注意，"),s("code",[t._v("async")]),t._v("和"),s("code",[t._v("declare")]),t._v("已经能够正确自动插入分号了。")]),t._v(" "),s("p",[s("strong",[t._v("例子：")])]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("m")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("m")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("推荐：")])]),t._v(" "),s("p",[t._v("在定义类成员时删除关键字后面的换行。通常来讲，要避免依赖于自动插入分号机制。")])])}),[],!1,null,null,null);s.default=e.exports}}]);