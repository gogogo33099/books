(window.webpackJsonp=window.webpackJsonp||[]).push([[842],{1320:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"typescript-4-8"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typescript-4-8"}},[t._v("#")]),t._v(" TypeScript 4.8")]),t._v(" "),s("h2",{attrs:{id:"改进的交叉类型化简、联合类型兼容性以及类型细化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#改进的交叉类型化简、联合类型兼容性以及类型细化"}},[t._v("#")]),t._v(" 改进的交叉类型化简、联合类型兼容性以及类型细化")]),t._v(" "),s("p",[t._v("TypeScript 4.8 为 "),s("code",[t._v("--strictNullChecks")]),t._v(" 带来了一系列修正和改进。\n这些变化会影响交叉类型和联合类型的工作方式，也作用于 TypeScript 的类型细化。")]),t._v(" "),s("p",[t._v("例如，"),s("code",[t._v("unknown")]),t._v(" 与 "),s("code",[t._v("{} | null | undefined")]),t._v(" 类型神似，\n因为它接受 "),s("code",[t._v("null")]),t._v("，"),s("code",[t._v("undefined")]),t._v(" 以及任何其它类型。\nTypeScript 现在能够识别出这种情况，允许将 "),s("code",[t._v("unknown")]),t._v(" 赋值给 "),s("code",[t._v("{} | null | undefined")]),t._v("。")]),t._v(" "),s("blockquote",[s("p",[t._v("译者注：除 "),s("code",[t._v("null")]),t._v(" 和 "),s("code",[t._v("undefined")]),t._v(" 类型外，其它任何类型都可以赋值给 "),s("code",[t._v("{}")]),t._v(" 类型。")])]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("unknown")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以工作")]),t._v("\n    y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以前会报错，现在可以工作")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("另一个变化是 "),s("code",[t._v("{}")]),t._v(" 与任何其它对象类型交叉会得到那个对象类型。\n因此，我们可以重写 "),s("code",[t._v("NonNullable")]),t._v(" 类型为与 "),s("code",[t._v("{}")]),t._v(" 的交叉类型，\n因为 "),s("code",[t._v("{} & null")]),t._v(" 和 "),s("code",[t._v("{} & undefined")]),t._v(" 会被消掉。")]),t._v(" "),s("div",{staticClass:"language-diff extra-class"},[s("pre",{pre:!0,attrs:{class:"language-diff"}},[s("code",[s("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[s("span",{pre:!0,attrs:{class:"token prefix deleted"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token line"}},[t._v(" type NonNullable<T> = T extends null | undefined ? never : T;\n")])]),s("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[s("span",{pre:!0,attrs:{class:"token prefix inserted"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token line"}},[t._v(" type NonNullable<T> = T & {};\n")])])])])]),s("p",[t._v("之所以称其为一项改进，是因为交叉类型可以被化简和赋值了，\n而有条件类型目前是不支持的。\n因此，"),s("code",[t._v("NonNullable<NonNullable<T>>")]),t._v(" 至少可以简化为 "),s("code",[t._v("NonNullable<T>")]),t._v("，在以前这是不行的。")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token generic-function"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" NonNullable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" NonNullable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("NonNullable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一直没问题")]),t._v("\n    y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以前会报错，现在没问题")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这些变化还为我们带来了更合理的控制流分析和类型细化。\n比如，"),s("code",[t._v("unknown")]),t._v(" 在条件为“真”的分支中被细化为 "),s("code",[t._v("{} | null | undefined")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("narrowUnknownishUnion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {} | null | undefined")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("narrowUnknown")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("unknown")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以前是 'unknown'，现在是 '{}'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// unknown")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("泛型也会进行类似的细化。\n当检查一个值不为 "),s("code",[t._v("null")]),t._v(" 或 "),s("code",[t._v("undefined")]),t._v(" 时，\nTypeScript 会将其与 "),s("code",[t._v("{}")]),t._v(" 进行交叉 - 等同于使用 "),s("code",[t._v("NonNullable")]),t._v("。\n把所有变化放在一起，我们就可以在不使用类型断言的情况下定义下列函数。")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token generic-function"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("throwIfNullable")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" NonNullable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Nullable value!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以前会报错，因为 'T' 不能赋值给 'NonNullable<T>'。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 现在会细化为 'T & {}' 并且不报错，因为它等同于 'NonNullable<T>'。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("value")]),t._v(" 细化为了 "),s("code",[t._v("T & {}")]),t._v("，此时它与 "),s("code",[t._v("NonNullable<T>")]),t._v(" 等同 -\n因此在函数体中不再需要使用 TypeScript 的特定语法。")]),t._v(" "),s("p",[t._v("就该改进本身而言可能是一个很小的变化 - 但它却实实在在地修复了在过去几年中报告的大量问题。")]),t._v(" "),s("p",[t._v("更多详情，请参考"),s("a",{attrs:{href:"https://github.com/microsoft/TypeScript/pull/49119",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"改进模版字符串类型中-infer-类型的类型推断"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#改进模版字符串类型中-infer-类型的类型推断"}},[t._v("#")]),t._v(" 改进模版字符串类型中 "),s("code",[t._v("infer")]),t._v(" 类型的类型推断")]),t._v(" "),s("p",[t._v("近期，TypeScript 支持了在有条件类型中的 "),s("code",[t._v("infer")]),t._v(" 类型变量上添加 "),s("code",[t._v("extends")]),t._v(" 约束。")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 提取元组类型中的第一个元素，若其能够赋值给 'number'，")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回 'never' 若无这样的元素。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TryGetNumberIfFirst"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("infer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("U")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("unknown")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("U")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("never")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("若 "),s("code",[t._v("infer")]),t._v(" 类型出现在模版字符串类型中且被原始类型所约束，则 TypeScript 会尝试将其解析为字面量类型。")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SomeNum 以前是 'number'；现在是 '100'。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SomeNum")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("infer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("U")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")])]),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("U")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("never")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SomeBigInt 以前是 'bigint'；现在是 '100n'。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SomeBigInt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("infer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("U")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("bigint")]),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("U")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("never")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SomeBool 以前是 'boolean'；现在是 'true'。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SomeBool")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("infer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("U")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")])]),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("U")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("never")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("现在它能更好地表达代码库在运行时的行为，提供更准确的类型。")]),t._v(" "),s("p",[t._v("要注意的一点是当 TypeScript 解析这些字面量类型时会使用贪心策略，尽可能多地提取原始类型；\n然后再回头检查解析出的原始类型是否匹配字符串的内容。\n也就是说，TypeScript 检查从字符串到原始类型再到字符串是否匹配。\n如果发现字符串前后对不上了，那么回退到基本的原始类型。")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// JustNumber 为 `number` 因为 TypeScript 解析 出 `"1.0"`，但 `String(Number("1.0"))` 为 `"1"` 不匹配。')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JustNumber")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("infer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")])]),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("never")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),s("p",[t._v("更多详情请参考"),s("a",{attrs:{href:"https://github.com/microsoft/TypeScript/pull/48094",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"build-watch-和-incremental-的性能优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-watch-和-incremental-的性能优化"}},[t._v("#")]),t._v(" "),s("code",[t._v("--build")]),t._v(", "),s("code",[t._v("--watch")]),t._v(", 和 "),s("code",[t._v("--incremental")]),t._v(" 的性能优化")]),t._v(" "),s("p",[t._v("TypeScript 4.8 优化了使用 "),s("code",[t._v("--watch")]),t._v(" 和 "),s("code",[t._v("--incremental")]),t._v(" 时的速度，以及使用 "),s("code",[t._v("--build")]),t._v(" 构建工程引用时的速度。\n例如，现在在 "),s("code",[t._v("--watch")]),t._v(" 模式下 TypeScript 不会去更新未改动文件的时间戳，\n这使得重新构建更快，避免与其它监视 TypeScript 输出文件的构建工具之间产生干扰。\n此外，TypeScript 也能够重用 "),s("code",[t._v("--build")]),t._v(", "),s("code",[t._v("--watch")]),t._v(" 和 "),s("code",[t._v("--incremental")]),t._v(" 之间的信息。")]),t._v(" "),s("p",[t._v("这些优化有多大效果？在一个相当大的代码库上，对于简单常用的操作有 10%-25% 的改进，对于无改动操作的场景节省了 40% 的时间。\n在 TypeScript 代码库中我们也看到了相似的结果。")]),t._v(" "),s("p",[t._v("更多详情请参考"),s("a",{attrs:{href:"https://github.com/microsoft/TypeScript/pull/48784",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"比较对象和数组字面量时报错"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#比较对象和数组字面量时报错"}},[t._v("#")]),t._v(" 比较对象和数组字面量时报错")]),t._v(" "),s("p",[t._v("在许多语言中，"),s("code",[t._v("==")]),t._v(" 操作符在对象上比较的是“值”。\n例如，在 Python 语言中想检查列表是否为空时可以使用 "),s("code",[t._v("==")]),t._v(" 检查该值是否与空列表相等。")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" people_at_home "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"that\'s where she lies, broken inside. </3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("在 JavaScript 里却不是这样，使用 "),s("code",[t._v("==")]),t._v(" 和 "),s("code",[t._v("===")]),t._v(" 比较对象和数组时比较的是引用。\n我们确信这会让 JavaScript 程序员搬起石头砸自己脚，且最坏的情况是在生产环境中存在 bug。\n因此，TypeScript 现在不允许如下的代码：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" peopleAtHome "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("peopleAtHome "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  ~~~~~~~~~~~~~~~~~~~")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This condition will always return 'false' since JavaScript compares objects by reference, not value.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"that\'s where she lies, broken inside. </3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("非常感谢"),s("a",{attrs:{href:"https://github.com/Jack-Works",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jack Works"),s("OutboundLink")],1),t._v("的贡献。\n更多详情请参考"),s("a",{attrs:{href:"https://github.com/microsoft/TypeScript/pull/45978",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"改进从绑定模式中进行类型推断"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#改进从绑定模式中进行类型推断"}},[t._v("#")]),t._v(" 改进从绑定模式中进行类型推断")]),t._v(" "),s("p",[t._v("在某些情况下，TypeScript 会从绑定模式中获取类型来帮助类型推断。")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token generic-function"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chooseRandomly")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chooseRandomly")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hi!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bye!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   ^  ^  ^")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   |  |  |")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   |  |  string")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   |  |")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   |  boolean")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   |")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   number")]),t._v("\n")])])]),s("p",[t._v("当 "),s("code",[t._v("chooseRandomly")]),t._v(" 需要确定 "),s("code",[t._v("T")]),t._v(" 的类型时，它主要检查 "),s("code",[t._v('[42, true, "hi!"]')]),t._v(" 和 "),s("code",[t._v('[0, false, "bye!"]')]),t._v(";\n但 TypeScript 还需要确定这两个类型是 "),s("code",[t._v("Array<number | boolean | string>")]),t._v("\n还是 "),s("code",[t._v("[number, boolean, string]")]),t._v("。\n为此，它会检查当前类型推断候选列表中是否存在元组类型。\n当 TypeScript 看到了绑定模式 "),s("code",[t._v("[a, b, c]")]),t._v("，它创建了类型 "),s("code",[t._v("[any, any, any]")]),t._v("，\n该类型会被加入到 "),s("code",[t._v("T")]),t._v(" 的候选列表（作为推断 "),s("code",[t._v('[42, true, "hi!"]')]),t._v(" 和 "),s("code",[t._v('[0, false, "bye!"]')]),t._v(" 的参考）但优先级较低。")]),t._v(" "),s("p",[t._v("这对 "),s("code",[t._v("chooseRandomly")]),t._v(" 函数来讲不错，但在有些情况下不合适。例如：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token generic-function"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" z"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("绑定模式 "),s("code",[t._v("[x, y, z]")]),t._v(" 提示 "),s("code",[t._v("f")]),t._v(" 应该输出 "),s("code",[t._v("[any, any, any]")]),t._v(" 元组；\n但是 "),s("code",[t._v("f")]),t._v(" 不应该根据绑定模式来改变类型参数的类型。\n它不应该像变戏法一样根据被赋的值突然变成一个类数组的值，\n因此绑定模式过多地影响到了生成的类型。\n由于绑定模式中均为 "),s("code",[t._v("any")]),t._v(" 类型，因此我们也就让 "),s("code",[t._v("x")]),t._v("，"),s("code",[t._v("y")]),t._v(" 和 "),s("code",[t._v("z")]),t._v(" 为 "),s("code",[t._v("any")]),t._v(" 类型。")]),t._v(" "),s("p",[t._v("在 TypeScript 4.8 里，绑定模式不会成为类型参数的候选类型。\n它们仅在参数需要更确切的类型时提供参考，例如 "),s("code",[t._v("chooseRandomly")]),t._v(" 的情况。\n如果你想回到之前的行为，可以提供明确的类型参数。")]),t._v(" "),s("p",[t._v("更多详情请参考"),s("a",{attrs:{href:"https://github.com/microsoft/TypeScript/pull/49086",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"修复文件监视-尤其是在-git-checkout-之间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修复文件监视-尤其是在-git-checkout-之间"}},[t._v("#")]),t._v(" 修复文件监视（尤其是在 "),s("code",[t._v("git checkout")]),t._v(" 之间）")]),t._v(" "),s("p",[t._v("长久以来 TypeScript 中存在一个 bug，它对在编辑器中使用 "),s("code",[t._v("--watch")]),t._v(" 模式监视文件改动处理的不好。\n它有时表现为错误提示不准确，需要重启 "),s("code",[t._v("tsc")]),t._v(" 或 VS Code 才行。\n这在 Unix 系统上常发生，例如用 vim 保存了一个文件或切换了 git 的分支。")]),t._v(" "),s("p",[t._v("这是因为错误地假设了 Node.js 在不同文件系统下处理文件重命名的方式。\nLinux 和 macOS 使用 "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Inode",target:"_blank",rel:"noopener noreferrer"}},[t._v("inodes"),s("OutboundLink")],1),t._v("，\n"),s("a",{attrs:{href:"https://nodejs.org/api/fs.html#inodes",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js 监视的是 inodes 的变化而非文件路径"),s("OutboundLink")],1),t._v("。\n因此，当 Node.js 返回了 "),s("a",{attrs:{href:"https://nodejs.org/api/fs.html#class-fsfswatcher",target:"_blank",rel:"noopener noreferrer"}},[t._v("watcher 对象"),s("OutboundLink")],1),t._v("，\n根据平台和文件系统的不同，它即可能监视文件路径也可能是 inode。")]),t._v(" "),s("p",[t._v("为了高效，TypeScript 尝试重用 watcher 对象，如果它检测到文件路径仍存在于磁盘上。\n这里就产生了问题，因为即使给定路径上的文件仍然存在，但它可能是全新创建的文件，inode 已经发生了变化。\nTypeScript 重用了 watcher 对象而非重新创建一个 watcher 对象，因此可能监视了一个完全不相关的文件。\nTypeScript 4.8 能够在 inode 系统上处理这些情况，新建 watcher 对象。")]),t._v(" "),s("p",[t._v("非常感谢 "),s("a",{attrs:{href:"https://github.com/MarcCelani-at",target:"_blank",rel:"noopener noreferrer"}},[t._v("Marc Celani"),s("OutboundLink")],1),t._v(" 和他的团队的贡献。\n更多详情请参考"),s("a",{attrs:{href:"https://github.com/microsoft/TypeScript/pull/48997",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"查找所有引用性能优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查找所有引用性能优化"}},[t._v("#")]),t._v(" 查找所有引用性能优化")]),t._v(" "),s("p",[t._v("在编辑器中执行“查找所有引用”时，TypeScript 现在能够更智能地聚合引用。\n在 TypeScript 自己的代码库中去搜索一个广泛使用的标识符时能够减少 20% 时间。")]),t._v(" "),s("p",[t._v("更多详情请参考"),s("a",{attrs:{href:"https://github.com/microsoft/TypeScript/pull/49581",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"从自动导入中排除指定文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从自动导入中排除指定文件"}},[t._v("#")]),t._v(" 从自动导入中排除指定文件")]),t._v(" "),s("p",[t._v("TypeScript 4.8 增加了一个编辑器首选项从自动导入中排除指定文件。\n在 Visual Studio Code 里，可以将文件名和 globs 添加到 Settings UI 的 “Auto Import File Exclude Patterns” 下，或者 "),s("code",[t._v(".vscode/settings.json")]),t._v(" 文件中：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Note that `javascript.preferences.autoImportFileExcludePatterns` can be specified for JavaScript too.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"typescript.preferences.autoImportFileExcludePatterns"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**/node_modules/@types/node"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("如果你想避免导入某些模块或代码库，它个功能就派上用场了。\n有些模块可能有过多的导出以致于影响到了自动导入功能，让我们难以选择一条自动导入。")]),t._v(" "),s("p",[t._v("更多详情请参考"),s("a",{attrs:{href:"https://github.com/microsoft/TypeScript/pull/49578",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);s.default=e.exports}}]);