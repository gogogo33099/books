(window.webpackJsonp=window.webpackJsonp||[]).push([[462],{902:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符串"}},[t._v("#")]),t._v(" 字符串")]),t._v(" "),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("h3",{attrs:{id:"定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),s("p",[t._v("字符串就是零个或多个排在一起的字符，放在单引号或双引号之中。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abc"')]),t._v("\n")])])]),s("p",[t._v("单引号字符串的内部，可以使用双引号。双引号字符串的内部，可以使用单引号。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key = \"value\"'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"It\'s a long journey"')]),t._v("\n")])])]),s("p",[t._v("上面两个都是合法的字符串。")]),t._v(" "),s("p",[t._v("如果要在单引号字符串的内部，使用单引号，就必须在内部的单引号前面加上反斜杠，用来转义。双引号字符串内部使用双引号，也是如此。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Did she say \\'Hello\\'?'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \"Did she say 'Hello'?\"")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Did she say \\"Hello\\"?"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "Did she say "Hello"?"')]),t._v("\n")])])]),s("p",[t._v("由于 HTML 语言的属性值使用双引号，所以很多项目约定 JavaScript 语言的字符串只使用单引号，本教程遵守这个约定。当然，只使用双引号也完全可以。重要的是坚持使用一种风格，不要一会使用单引号表示字符串，一会又使用双引号表示。")]),t._v(" "),s("p",[t._v("字符串默认只能写在一行内，分成多行将会报错。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("'a\nb\nc'\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SyntaxError: Unexpected token ILLEGAL")]),t._v("\n")])])]),s("p",[t._v("上面代码将一个字符串分成三行，JavaScript 就会报错。")]),t._v(" "),s("p",[t._v("如果长字符串必须分成多行，可以在每一行的尾部使用反斜杠。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" longString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Long \\\nlong \\\nlong \\\nstring'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nlongString\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "Long long long string"')]),t._v("\n")])])]),s("p",[t._v("上面代码表示，加了反斜杠以后，原来写在一行的字符串，可以分成多行书写。但是，输出的时候还是单行，效果与写在同一行完全一样。注意，反斜杠的后面必须是换行符，而不能有其他字符（比如空格），否则会报错。")]),t._v(" "),s("p",[t._v("连接运算符（"),s("code",[t._v("+")]),t._v("）可以连接多个单行字符串，将长字符串拆成多行书写，输出的时候也是单行。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" longString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Long '")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'long '")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'long '")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("如果想输出多行字符串，有一种利用多行注释的变通方法。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\nline 1\nline 2\nline 3\n*/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\n'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\n'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "line 1')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// line 2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// line 3"')]),t._v("\n")])])]),s("p",[t._v("上面的例子中，输出的字符串就是多行。")]),t._v(" "),s("h3",{attrs:{id:"转义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转义"}},[t._v("#")]),t._v(" 转义")]),t._v(" "),s("p",[t._v("反斜杠（\\）在字符串内有特殊含义，用来表示一些特殊字符，所以又称为转义符。")]),t._v(" "),s("p",[t._v("需要用反斜杠转义的特殊字符，主要有下面这些。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("\\0")]),t._v(" ：null（"),s("code",[t._v("\\u0000")]),t._v("）")]),t._v(" "),s("li",[s("code",[t._v("\\b")]),t._v(" ：后退键（"),s("code",[t._v("\\u0008")]),t._v("）")]),t._v(" "),s("li",[s("code",[t._v("\\f")]),t._v(" ：换页符（"),s("code",[t._v("\\u000C")]),t._v("）")]),t._v(" "),s("li",[s("code",[t._v("\\n")]),t._v(" ：换行符（"),s("code",[t._v("\\u000A")]),t._v("）")]),t._v(" "),s("li",[s("code",[t._v("\\r")]),t._v(" ：回车键（"),s("code",[t._v("\\u000D")]),t._v("）")]),t._v(" "),s("li",[s("code",[t._v("\\t")]),t._v(" ：制表符（"),s("code",[t._v("\\u0009")]),t._v("）")]),t._v(" "),s("li",[s("code",[t._v("\\v")]),t._v(" ：垂直制表符（"),s("code",[t._v("\\u000B")]),t._v("）")]),t._v(" "),s("li",[s("code",[t._v("\\'")]),t._v(" ：单引号（"),s("code",[t._v("\\u0027")]),t._v("）")]),t._v(" "),s("li",[s("code",[t._v('\\"')]),t._v(" ：双引号（"),s("code",[t._v("\\u0022")]),t._v("）")]),t._v(" "),s("li",[s("code",[t._v("\\\\")]),t._v(" ：反斜杠（"),s("code",[t._v("\\u005C")]),t._v("）")])]),t._v(" "),s("p",[t._v("上面这些字符前面加上反斜杠，都表示特殊含义。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1\\n2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n")])])]),s("p",[t._v("上面代码中，"),s("code",[t._v("\\n")]),t._v("表示换行，输出的时候就分成了两行。")]),t._v(" "),s("p",[t._v("反斜杠还有三种特殊用法。")]),t._v(" "),s("p",[t._v("（1）"),s("code",[t._v("\\HHH")])]),t._v(" "),s("p",[t._v("反斜杠后面紧跟三个八进制数（"),s("code",[t._v("000")]),t._v("到"),s("code",[t._v("377")]),t._v("），代表一个字符。"),s("code",[t._v("HHH")]),t._v("对应该字符的 Unicode 码点，比如"),s("code",[t._v("\\251")]),t._v("表示版权符号。显然，这种方法只能输出256种字符。")]),t._v(" "),s("p",[t._v("（2）"),s("code",[t._v("\\xHH")])]),t._v(" "),s("p",[s("code",[t._v("\\x")]),t._v("后面紧跟两个十六进制数（"),s("code",[t._v("00")]),t._v("到"),s("code",[t._v("FF")]),t._v("），代表一个字符。"),s("code",[t._v("HH")]),t._v("对应该字符的 Unicode 码点，比如"),s("code",[t._v("\\xA9")]),t._v("表示版权符号。这种方法也只能输出256种字符。")]),t._v(" "),s("p",[t._v("（3）"),s("code",[t._v("\\uXXXX")])]),t._v(" "),s("p",[s("code",[t._v("\\u")]),t._v("后面紧跟四个十六进制数（"),s("code",[t._v("0000")]),t._v("到"),s("code",[t._v("FFFF")]),t._v("），代表一个字符。"),s("code",[t._v("XXXX")]),t._v("对应该字符的 Unicode 码点，比如"),s("code",[t._v("\\u00A9")]),t._v("表示版权符号。")]),t._v(" "),s("p",[t._v("下面是这三种字符特殊写法的例子。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\251'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "©"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\xA9'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "©"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\u00A9'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "©"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\172'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'z'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\x7A'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'z'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\u007A'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'z'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),s("p",[t._v("如果在非特殊字符前面使用反斜杠，则反斜杠会被省略。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\a'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "a"')]),t._v("\n")])])]),s("p",[t._v("上面代码中，"),s("code",[t._v("a")]),t._v("是一个正常字符，前面加反斜杠没有特殊含义，反斜杠会被自动省略。")]),t._v(" "),s("p",[t._v("如果字符串的正常内容之中，需要包含反斜杠，则反斜杠前面需要再加一个反斜杠，用来对自身转义。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Prev \\\\ Next"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "Prev \\ Next"')]),t._v("\n")])])]),s("h3",{attrs:{id:"字符串与数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符串与数组"}},[t._v("#")]),t._v(" 字符串与数组")]),t._v(" "),s("p",[t._v("字符串可以被视为字符数组，因此可以使用数组的方括号运算符，用来返回某个位置的字符（位置编号从0开始）。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ns"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "h"')]),t._v("\ns"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "e"')]),t._v("\ns"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "o"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 直接对字符串使用方括号运算符")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "e"')]),t._v("\n")])])]),s("p",[t._v("如果方括号中的数字超过字符串的长度，或者方括号中根本不是数字，则返回"),s("code",[t._v("undefined")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n")])])]),s("p",[t._v("但是，字符串与数组的相似性仅此而已。实际上，无法改变字符串之中的单个字符。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ns "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "hello"')]),t._v("\n\ns"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ns "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "hello"')]),t._v("\n\ns"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ns "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "hello"')]),t._v("\n")])])]),s("p",[t._v("上面代码表示，字符串内部的单个字符无法改变和增删，这些操作会默默地失败。")]),t._v(" "),s("h3",{attrs:{id:"length-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#length-属性"}},[t._v("#")]),t._v(" length 属性")]),t._v(" "),s("p",[s("code",[t._v("length")]),t._v("属性返回字符串的长度，该属性也是无法改变的。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ns"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 5")]),t._v("\n\ns"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ns"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 5")]),t._v("\n\ns"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ns"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 5")]),t._v("\n")])])]),s("p",[t._v("上面代码表示字符串的"),s("code",[t._v("length")]),t._v("属性无法改变，但是不会报错。")]),t._v(" "),s("h2",{attrs:{id:"字符集"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符集"}},[t._v("#")]),t._v(" 字符集")]),t._v(" "),s("p",[t._v("JavaScript 使用 Unicode 字符集。JavaScript 引擎内部，所有字符都用 Unicode 表示。")]),t._v(" "),s("p",[t._v("JavaScript 不仅以 Unicode 储存字符，还允许直接在程序中使用 Unicode 码点表示字符，即将字符写成"),s("code",[t._v("\\uxxxx")]),t._v("的形式，其中"),s("code",[t._v("xxxx")]),t._v("代表该字符的 Unicode 码点。比如，"),s("code",[t._v("\\u00A9")]),t._v("代表版权符号。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\u00A9'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ns "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "©"')]),t._v("\n")])])]),s("p",[t._v("解析代码的时候，JavaScript 会自动识别一个字符是字面形式表示，还是 Unicode 形式表示。输出给用户的时候，所有字符都会转成字面形式。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" f\\u006F\\u006F "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfoo "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "abc"')]),t._v("\n")])])]),s("p",[t._v("上面代码中，第一行的变量名"),s("code",[t._v("foo")]),t._v("是 Unicode 形式表示，第二行是字面形式表示。JavaScript 会自动识别。")]),t._v(" "),s("p",[t._v("我们还需要知道，每个字符在 JavaScript 内部都是以16位（即2个字节）的 UTF-16 格式储存。也就是说，JavaScript 的单位字符长度固定为16位长度，即2个字节。")]),t._v(" "),s("p",[t._v("但是，UTF-16 有两种长度：对于码点在"),s("code",[t._v("U+0000")]),t._v("到"),s("code",[t._v("U+FFFF")]),t._v("之间的字符，长度为16位（即2个字节）；对于码点在"),s("code",[t._v("U+10000")]),t._v("到"),s("code",[t._v("U+10FFFF")]),t._v("之间的字符，长度为32位（即4个字节），而且前两个字节在"),s("code",[t._v("0xD800")]),t._v("到"),s("code",[t._v("0xDBFF")]),t._v("之间，后两个字节在"),s("code",[t._v("0xDC00")]),t._v("到"),s("code",[t._v("0xDFFF")]),t._v("之间。举例来说，码点"),s("code",[t._v("U+1D306")]),t._v("对应的字符为"),s("code",[t._v("𝌆，")]),t._v("它写成 UTF-16 就是"),s("code",[t._v("0xD834 0xDF06")]),t._v("。")]),t._v(" "),s("p",[t._v("JavaScript 对 UTF-16 的支持是不完整的，由于历史原因，只支持两字节的字符，不支持四字节的字符。这是因为 JavaScript 第一版发布的时候，Unicode 的码点只编到"),s("code",[t._v("U+FFFF")]),t._v("，因此两字节足够表示了。后来，Unicode 纳入的字符越来越多，出现了四字节的编码。但是，JavaScript 的标准此时已经定型了，统一将字符长度限制在两字节，导致无法识别四字节的字符。上一节的那个四字节字符"),s("code",[t._v("𝌆")]),t._v("，浏览器会正确识别这是一个字符，但是 JavaScript 无法识别，会认为这是两个字符。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'𝌆'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n")])])]),s("p",[t._v("上面代码中，JavaScript 认为"),s("code",[t._v("𝌆")]),t._v("的长度为2，而不是1。")]),t._v(" "),s("p",[t._v("总结一下，对于码点在"),s("code",[t._v("U+10000")]),t._v("到"),s("code",[t._v("U+10FFFF")]),t._v("之间的字符，JavaScript 总是认为它们是两个字符（"),s("code",[t._v("length")]),t._v("属性为2）。所以处理的时候，必须把这一点考虑在内，也就是说，JavaScript 返回的字符串长度可能是不正确的。")]),t._v(" "),s("h2",{attrs:{id:"base64-转码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#base64-转码"}},[t._v("#")]),t._v(" Base64 转码")]),t._v(" "),s("p",[t._v("有时，文本里面包含一些不可打印的符号，比如 ASCII 码0到31的符号都无法打印出来，这时可以使用 Base64 编码，将它们转成可以打印的字符。另一个场景是，有时需要以文本格式传递二进制数据，那么也可以使用 Base64 编码。")]),t._v(" "),s("p",[t._v("所谓 Base64 就是一种编码方法，可以将任意值转成 0～9、A～Z、a-z、"),s("code",[t._v("+")]),t._v("和"),s("code",[t._v("/")]),t._v("这64个字符组成的可打印字符。使用它的主要目的，不是为了加密，而是为了不出现特殊字符，简化程序的处理。")]),t._v(" "),s("p",[t._v("JavaScript 原生提供两个 Base64 相关的方法。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("btoa()")]),t._v("：任意值转为 Base64 编码")]),t._v(" "),s("li",[s("code",[t._v("atob()")]),t._v("：Base64 编码转为原来的值")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" string "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("btoa")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "SGVsbG8gV29ybGQh"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("atob")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SGVsbG8gV29ybGQh'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "Hello World!"')]),t._v("\n")])])]),s("p",[t._v("注意，这两个方法不适合非 ASCII 码的字符，会报错。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("btoa")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'你好'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 报错")]),t._v("\n")])])]),s("p",[t._v("要将非 ASCII 码字符转为 Base64 编码，必须中间插入一个转码环节，再使用这两个方法。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("b64Encode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("btoa")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURIComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("b64Decode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("decodeURIComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("atob")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("b64Encode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'你好'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "JUU0JUJEJUEwJUU1JUE1JUJE"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("b64Decode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'JUU0JUJEJUEwJUU1JUE1JUJE'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "你好"')]),t._v("\n")])])]),s("h2",{attrs:{id:"参考链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),s("ul",[s("li",[t._v("Mathias Bynens, "),s("a",{attrs:{href:"http://mathiasbynens.be/notes/javascript-encoding",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript’s internal character encoding: UCS-2 or UTF-16?"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("Mathias Bynens, "),s("a",{attrs:{href:"http://mathiasbynens.be/notes/javascript-unicode",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript has a Unicode problem"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("Mozilla Developer Network, "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window.btoa",target:"_blank",rel:"noopener noreferrer"}},[t._v("Window.btoa"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);