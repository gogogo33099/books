(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{699:function(t,a,n){"use strict";n.r(a);var s=n(14),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_10-3-包声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-包声明"}},[t._v("#")]),t._v(" 10.3. 包声明")]),t._v(" "),a("p",[t._v("在每个Go语言源文件的开头都必须有包声明语句。包声明语句的主要目的是确定当前包被其它包导入时默认的标识符（也称为包名）。")]),t._v(" "),a("p",[t._v("例如，math/rand包的每个源文件的开头都包含"),a("code",[t._v("package rand")]),t._v("包声明语句，所以当你导入这个包，你就可以用rand.Int、rand.Float64类似的方式访问包的成员。")]),t._v(" "),a("div",{staticClass:"language-Go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"math/rand"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rand"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("通常来说，默认的包名就是包导入路径名的最后一段，因此即使两个包的导入路径不同，它们依然可能有一个相同的包名。例如，math/rand包和crypto/rand包的包名都是rand。稍后我们将看到如何同时导入两个有相同包名的包。")]),t._v(" "),a("p",[t._v("关于默认包名一般采用导入路径名的最后一段的约定也有三种例外情况。第一个例外，包对应一个可执行程序，也就是main包，这时候main包本身的导入路径是无关紧要的。名字为main的包是给go build（§10.7.3）构建命令一个信息，这个包编译完之后必须调用连接器生成一个可执行程序。")]),t._v(" "),a("p",[t._v("第二个例外，包所在的目录中可能有一些文件名是以"),a("code",[t._v("_test.go")]),t._v("为后缀的Go源文件（译注：前面必须有其它的字符，因为以"),a("code",[t._v("_")]),t._v("或"),a("code",[t._v(".")]),t._v("开头的源文件会被构建工具忽略），并且这些源文件声明的包名也是以"),a("code",[t._v("_test")]),t._v("为后缀名的。这种目录可以包含两种包：一种是普通包，另一种则是测试的外部扩展包。所有以"),a("code",[t._v("_test")]),t._v("为后缀包名的测试外部扩展包都由go test命令独立编译，普通包和测试的外部扩展包是相互独立的。测试的外部扩展包一般用来避免测试代码中的循环导入依赖，具体细节我们将在11.2.4节中介绍。")]),t._v(" "),a("p",[t._v("第三个例外，一些依赖版本号的管理工具会在导入路径后追加版本号信息，例如“gopkg.in/yaml.v2”。这种情况下包的名字并不包含版本号后缀，而是yaml。")])])}),[],!1,null,null,null);a.default=r.exports}}]);