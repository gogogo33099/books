(window.webpackJsonp=window.webpackJsonp||[]).push([[603],{1071:function(t,s,a){"use strict";a.r(s);var n=a(14),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_10-3-使用自定义包中的结构体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-使用自定义包中的结构体"}},[t._v("#")]),t._v(" 10.3 使用自定义包中的结构体")]),t._v(" "),s("p",[t._v("下面的例子中，main.go 使用了一个结构体，它来自 struct_pack 下的包 "),s("code",[t._v("structPack")]),t._v("。")]),t._v(" "),s("p",[t._v("示例 10.5 "),s("a",{attrs:{href:"examples/chapter_10/struct_pack/structPack.go"}},[t._v("structPack.go")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" structPack\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" ExpStruct "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Mi1 "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n    Mf1 "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float32")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("示例 10.6 "),s("a",{attrs:{href:"examples/chapter_10/main.go"}},[t._v("main.go")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./struct_pack/structPack"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    struct1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("structPack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ExpStruct"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    struct1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Mi1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n    struct1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Mf1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.")]),t._v("\n\n    fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Mi1 = %d\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" struct1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Mi1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Mf1 = %f\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" struct1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Mf1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("输出：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("Mi1 = 10\nMf1 = 16.000000\n")])])]),s("h2",{attrs:{id:"链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[t._v("#")]),t._v(" 链接")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/the-way-to-go/directory.html"}},[t._v("目录")])],1),t._v(" "),s("li",[t._v("上一节："),s("RouterLink",{attrs:{to:"/the-way-to-go/10.2.html"}},[t._v("使用工厂方法创建结构体实例")])],1),t._v(" "),s("li",[t._v("下一节："),s("RouterLink",{attrs:{to:"/the-way-to-go/10.4.html"}},[t._v("带标签的结构体")])],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);