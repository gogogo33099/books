(window.webpackJsonp=window.webpackJsonp||[]).push([[800],{1285:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"symbols"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#symbols"}},[t._v("#")]),t._v(" Symbols")]),t._v(" "),s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),s("p",[t._v("自ECMAScript 2015起，"),s("code",[t._v("symbol")]),t._v("成为了一种新的原生类型，就像"),s("code",[t._v("number")]),t._v("和"),s("code",[t._v("string")]),t._v("一样。")]),t._v(" "),s("p",[s("code",[t._v("symbol")]),t._v("类型的值是通过"),s("code",[t._v("Symbol")]),t._v("构造函数创建的。")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sym1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sym2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可选的字符串key")]),t._v("\n")])])]),s("p",[t._v("Symbols是不可改变且唯一的。")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sym2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sym3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nsym2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" sym3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false, symbols是唯一的")]),t._v("\n")])])]),s("p",[t._v("像字符串一样，symbols也可以被用做对象属性的键。")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" sym "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sym"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sym"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "value"')]),t._v("\n")])])]),s("p",[t._v("Symbols也可以与计算出的属性名声明相结合来声明对象的属性和类成员。")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" getClassNameSymbol "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("getClassNameSymbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" className "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("getClassNameSymbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "C"')]),t._v("\n")])])]),s("h2",{attrs:{id:"众所周知的symbols"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#众所周知的symbols"}},[t._v("#")]),t._v(" 众所周知的Symbols")]),t._v(" "),s("p",[t._v("除了用户定义的symbols，还有一些已经众所周知的内置symbols。 内置symbols用来表示语言内部的行为。")]),t._v(" "),s("p",[t._v("以下为这些symbols的列表：")]),t._v(" "),s("h3",{attrs:{id:"symbol-hasinstance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#symbol-hasinstance"}},[t._v("#")]),t._v(" "),s("code",[t._v("Symbol.hasInstance")])]),t._v(" "),s("p",[t._v("方法，会被"),s("code",[t._v("instanceof")]),t._v("运算符调用。构造器对象用来识别一个对象是否是其实例。")]),t._v(" "),s("h3",{attrs:{id:"symbol-isconcatspreadable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#symbol-isconcatspreadable"}},[t._v("#")]),t._v(" "),s("code",[t._v("Symbol.isConcatSpreadable")])]),t._v(" "),s("p",[t._v("布尔值，表示当在一个对象上调用"),s("code",[t._v("Array.prototype.concat")]),t._v("时，这个对象的数组元素是否可展开。")]),t._v(" "),s("h3",{attrs:{id:"symbol-iterator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#symbol-iterator"}},[t._v("#")]),t._v(" "),s("code",[t._v("Symbol.iterator")])]),t._v(" "),s("p",[t._v("方法，被"),s("code",[t._v("for-of")]),t._v("语句调用。返回对象的默认迭代器。")]),t._v(" "),s("h3",{attrs:{id:"symbol-match"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#symbol-match"}},[t._v("#")]),t._v(" "),s("code",[t._v("Symbol.match")])]),t._v(" "),s("p",[t._v("方法，被"),s("code",[t._v("String.prototype.match")]),t._v("调用。正则表达式用来匹配字符串。")]),t._v(" "),s("h3",{attrs:{id:"symbol-replace"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#symbol-replace"}},[t._v("#")]),t._v(" "),s("code",[t._v("Symbol.replace")])]),t._v(" "),s("p",[t._v("方法，被"),s("code",[t._v("String.prototype.replace")]),t._v("调用。正则表达式用来替换字符串中匹配的子串。")]),t._v(" "),s("h3",{attrs:{id:"symbol-search"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#symbol-search"}},[t._v("#")]),t._v(" "),s("code",[t._v("Symbol.search")])]),t._v(" "),s("p",[t._v("方法，被"),s("code",[t._v("String.prototype.search")]),t._v("调用。正则表达式返回被匹配部分在字符串中的索引。")]),t._v(" "),s("h3",{attrs:{id:"symbol-species"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#symbol-species"}},[t._v("#")]),t._v(" "),s("code",[t._v("Symbol.species")])]),t._v(" "),s("p",[t._v("函数值，为一个构造函数。用来创建派生对象。")]),t._v(" "),s("h3",{attrs:{id:"symbol-split"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#symbol-split"}},[t._v("#")]),t._v(" "),s("code",[t._v("Symbol.split")])]),t._v(" "),s("p",[t._v("方法，被"),s("code",[t._v("String.prototype.split")]),t._v("调用。正则表达式来用分割字符串。")]),t._v(" "),s("h3",{attrs:{id:"symbol-toprimitive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#symbol-toprimitive"}},[t._v("#")]),t._v(" "),s("code",[t._v("Symbol.toPrimitive")])]),t._v(" "),s("p",[t._v("方法，被"),s("code",[t._v("ToPrimitive")]),t._v("抽象操作调用。把对象转换为相应的原始值。")]),t._v(" "),s("h3",{attrs:{id:"symbol-tostringtag"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#symbol-tostringtag"}},[t._v("#")]),t._v(" "),s("code",[t._v("Symbol.toStringTag")])]),t._v(" "),s("p",[t._v("方法，被内置方法"),s("code",[t._v("Object.prototype.toString")]),t._v("调用。返回创建对象时默认的字符串描述。")]),t._v(" "),s("h3",{attrs:{id:"symbol-unscopables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#symbol-unscopables"}},[t._v("#")]),t._v(" "),s("code",[t._v("Symbol.unscopables")])]),t._v(" "),s("p",[t._v("对象，它自己拥有的属性会被"),s("code",[t._v("with")]),t._v("作用域排除在外。")])])}),[],!1,null,null,null);s.default=e.exports}}]);