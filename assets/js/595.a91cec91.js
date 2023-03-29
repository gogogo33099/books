(window.webpackJsonp=window.webpackJsonp||[]).push([[595],{1066:function(t,s,n){"use strict";n.r(s);var a=n(14),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_9-4-精密计算和-big-包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-4-精密计算和-big-包"}},[t._v("#")]),t._v(" 9.4 精密计算和 big 包")]),t._v(" "),s("p",[t._v("我们知道有些时候通过编程的方式去进行计算是不精确的。如果你使用 Go 语言中的 "),s("code",[t._v("float64")]),t._v(" 类型进行浮点运算，返回结果将精确到 15 位，足以满足大多数的任务。当对超出 "),s("code",[t._v("int64")]),t._v(" 或者 "),s("code",[t._v("uint64")]),t._v(" 类型这样的大数进行计算时，如果对精度没有要求，"),s("code",[t._v("float32")]),t._v(" 或者 "),s("code",[t._v("float64")]),t._v(" 可以胜任，但如果对精度有严格要求的时候，我们不能使用浮点数，在内存中它们只能被近似的表示。")]),t._v(" "),s("p",[t._v("对于整数的高精度计算 Go 语言中提供了 "),s("code",[t._v("big")]),t._v(" 包，被包含在 "),s("code",[t._v("math")]),t._v(" 包下：有用来表示大整数的 "),s("code",[t._v("big.Int")]),t._v(" 和表示大有理数的 "),s("code",[t._v("big.Rat")]),t._v(" 类型（可以表示为 2/5 或 3.1416 这样的分数，而不是无理数或 π）。这些类型可以实现任意位类型的数字，只要内存足够大。缺点是更大的内存和处理开销使它们使用起来要比内置的数字类型慢很多。")]),t._v(" "),s("p",[t._v("大的整型数字是通过 "),s("code",[t._v("big.NewInt(n)")]),t._v(" 来构造的，其中 "),s("code",[t._v("n")]),t._v(" 为 "),s("code",[t._v("int64")]),t._v(" 类型整数。而大有理数是通过 "),s("code",[t._v("big.NewRat(n, d)")]),t._v(" 方法构造。"),s("code",[t._v("n")]),t._v("（分子）和 "),s("code",[t._v("d")]),t._v("（分母）都是 "),s("code",[t._v("int64")]),t._v(" 型整数。因为 Go 语言不支持运算符重载，所以所有大数字类型都有像是 "),s("code",[t._v("Add()")]),t._v(" 和 "),s("code",[t._v("Mul()")]),t._v(" 这样的方法。它们作用于作为 receiver 的整数和有理数，大多数情况下它们修改 receiver 并以 receiver 作为返回结果。因为没有必要创建 "),s("code",[t._v("big.Int")]),t._v(" 类型的临时变量来存放中间结果，所以运算可以被链式地调用，并节省内存。")]),t._v(" "),s("p",[t._v("示例 9.2 "),s("a",{attrs:{href:"examples/chapter_9/big.go"}},[t._v("big.go")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// big.go")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"math"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"math/big"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Here are some calculations with bigInts:")]),t._v("\n\tim "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" big"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MaxInt64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" im\n\tio "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" big"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1956")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tip "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" big"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Mul")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("im"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" in"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" im"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Big Int: %v\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Here are some calculations with bigInts:")]),t._v("\n\trm "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" big"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewRat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MaxInt64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1956")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\trn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" big"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewRat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1956")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MaxInt64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tro "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" big"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewRat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("56")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\trp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" big"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewRat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1111")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2222")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\trq "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" big"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewRat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\trq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Mul")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ro"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Mul")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Big Rat: %v\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Output:\nBig Int: 43492122561469640008497075573153004\nBig Rat: -37/112\n*/")]),t._v("\n")])])]),s("p",[t._v("输出结果：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("Big Int: 43492122561469640008497075573153004\nBig Rat: -37/112\n")])])]),s("h2",{attrs:{id:"链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[t._v("#")]),t._v(" 链接")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/the-way-to-go/directory.html"}},[t._v("目录")])],1),t._v(" "),s("li",[t._v("上一节："),s("RouterLink",{attrs:{to:"/the-way-to-go/09.3.html"}},[t._v("锁和 sync 包")])],1),t._v(" "),s("li",[t._v("下一节："),s("RouterLink",{attrs:{to:"/the-way-to-go/09.5.html"}},[t._v("自定义包和可见性")])],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);