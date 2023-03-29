(window.webpackJsonp=window.webpackJsonp||[]).push([[628],{1103:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_12-4-从命令行读取参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-4-从命令行读取参数"}},[t._v("#")]),t._v(" 12.4 从命令行读取参数")]),t._v(" "),s("h2",{attrs:{id:"_12-4-1-os-包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-4-1-os-包"}},[t._v("#")]),t._v(" 12.4.1 os 包")]),t._v(" "),s("p",[s("code",[t._v("os")]),t._v(" 包中有一个 "),s("code",[t._v("string")]),t._v(" 类型的切片变量 "),s("code",[t._v("os.Args")]),t._v("，用来处理一些基本的命令行参数，它在程序启动后读取命令行输入的参数。来看下面的打招呼程序：")]),t._v(" "),s("p",[t._v("示例 12.11 "),s("a",{attrs:{href:"examples/chapter_12/os_args.go"}},[t._v("os_args.go")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// os_args.go")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"os"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"strings"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\twho "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Alice "')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\twho "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" strings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Good Morning"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" who"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("我们在 IDE 或编辑器中直接运行这个程序输出："),s("code",[t._v("Good Morning Alice")])]),t._v(" "),s("p",[t._v("我们在命令行运行 "),s("code",[t._v("os_args")]),t._v(" 或 "),s("code",[t._v("./os_args")]),t._v(" 会得到同样的结果。")]),t._v(" "),s("p",[t._v("但是我们在命令行加入参数，像这样："),s("code",[t._v("os_args John Bill Marc Luke")]),t._v("，将得到这样的输出："),s("code",[t._v("Good Morning Alice John Bill Marc Luke")])]),t._v(" "),s("p",[t._v("这个命令行参数会放置在切片 "),s("code",[t._v("os.Args[]")]),t._v(" 中（以空格分隔），从索引 1 开始（"),s("code",[t._v("os.Args[0]")]),t._v(" 放的是程序本身的名字，在本例中是 "),s("code",[t._v("os_args")]),t._v("）。函数 "),s("code",[t._v("strings.Join")]),t._v(" 以空格为间隔连接这些参数。")]),t._v(" "),s("p",[s("strong",[t._v("练习 12.5")]),t._v("："),s("a",{attrs:{href:"exercises/chapter_12/hello_who.go"}},[t._v("hello_who.go")])]),t._v(" "),s("p",[t._v("写一个“Hello World”的变种程序：把人的名字作为程序命令行执行的一个参数，比如： "),s("code",[t._v("hello_who Evan Michael Laura")]),t._v(" 那么会输出 "),s("code",[t._v("Hello Evan Michael Laura!")])]),t._v(" "),s("h2",{attrs:{id:"_12-4-2-flag-包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-4-2-flag-包"}},[t._v("#")]),t._v(" 12.4.2 flag 包")]),t._v(" "),s("p",[s("code",[t._v("flag")]),t._v(" 包有一个扩展功能用来解析命令行选项。但是通常被用来替换基本常量，例如，在某些情况下我们希望在命令行给常量一些不一样的值。（参看 "),s("RouterLink",{attrs:{to:"/the-way-to-go/19.0.html"}},[t._v("19 章")]),t._v("的项目）")],1),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("flag")]),t._v(" 包中有一个 "),s("code",[t._v("Flag")]),t._v(" 是被定义成一个含有如下字段的结构体：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Flag "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tName     "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// name as it appears on command line")]),t._v("\n\tUsage    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// help message")]),t._v("\n\tValue    Value  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// value as set")]),t._v("\n\tDefValue "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// default value (as text); for usage message")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("下面的程序 "),s("a",{attrs:{href:"examples/chapter_12/echo.go"}},[t._v("echo.go")]),t._v(" 模拟了 Unix 的 echo 功能：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"flag"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// command line option parser")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"os"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" NewLine "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" flag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Bool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"print newline"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// echo -n flag, of type *bool")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tSpace   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),t._v("\n\tNewline "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\n"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tflag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PrintDefaults")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tflag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Scans the arg list and sets up flags")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" flag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NArg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\ts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("NewLine "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -n is parsed, flag becomes true")]),t._v("\n\t\t\t\ts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" Newline\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\ts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" flag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Arg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Stdout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("flag.Parse()")]),t._v(" 扫描参数列表（或者常量列表）并设置 flag, "),s("code",[t._v("flag.Arg(i)")]),t._v(" 表示第 i 个参数。"),s("code",[t._v("Parse()")]),t._v(" 之后 "),s("code",[t._v("flag.Arg(i)")]),t._v(" 全部可用，"),s("code",[t._v("flag.Arg(0)")]),t._v(" 就是第一个真实的 flag，而不是像 "),s("code",[t._v("os.Args(0)")]),t._v(" 放置程序的名字。")]),t._v(" "),s("p",[s("code",[t._v("flag.Narg()")]),t._v(" 返回参数的数量。解析后 flag 或常量就可用了。\n"),s("code",[t._v("flag.Bool()")]),t._v(" 定义了一个默认值是 "),s("code",[t._v("false")]),t._v(" 的 flag：当在命令行出现了第一个参数（这里是 "),s("code",[t._v("'n'")]),t._v("），flag 被设置成 "),s("code",[t._v("true")]),t._v("（"),s("code",[t._v("NewLine")]),t._v(" 是 "),s("code",[t._v("*bool")]),t._v(" 类型）。flag 被解引用到 "),s("code",[t._v("*NewLine")]),t._v("，所以当值是 "),s("code",[t._v("true")]),t._v(" 时将添加一个 "),s("code",[t._v('Newline("\\n")')]),t._v("。")]),t._v(" "),s("p",[s("code",[t._v("flag.PrintDefaults()")]),t._v(" 打印 flag 的使用帮助信息，本例中打印的是：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("print")]),t._v(" newline\n")])])]),s("p",[s("code",[t._v("flag.VisitAll(fn func(*Flag))")]),t._v(" 是另一个有用的功能：按照字典顺序遍历 flag，并且对每个标签调用 fn （参考 "),s("RouterLink",{attrs:{to:"/the-way-to-go/15.8.html"}},[t._v("15.8 章")]),t._v("的例子）")],1),t._v(" "),s("p",[t._v("当在命令行 (Windows) 中执行："),s("code",[t._v("echo.exe A B C")]),t._v("，将输出："),s("code",[t._v("A B C")]),t._v("；执行 "),s("code",[t._v("echo.exe -n A B C")]),t._v("，将输出：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("A\nB\nC\n")])])]),s("p",[t._v("每个字符的输出都新起一行，每次都在输出的数据前面打印使用帮助信息："),s("code",[t._v("-n=false: print newline")]),t._v("。")]),t._v(" "),s("p",[t._v("对于 "),s("code",[t._v("flag.Bool")]),t._v(" 你可以设置布尔型 flag 来测试你的代码，例如定义一个 flag "),s("code",[t._v("processedFlag")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" processedFlag "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" flag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Bool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"proc"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nothing processed yet"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("在后面用如下代码来测试：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("processedFlag "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// found flag -proc")]),t._v("\n\tr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("process")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("要给 flag 定义其它类型，可以使用 "),s("code",[t._v("flag.Int()")]),t._v("，"),s("code",[t._v("flag.Float64()")]),t._v("，"),s("code",[t._v("flag.String()")]),t._v("。")]),t._v(" "),s("p",[t._v("在"),s("RouterLink",{attrs:{to:"/the-way-to-go/15.8.html"}},[t._v("第 15.8 章")]),t._v("你将找到一个具体的例子。")],1),t._v(" "),s("h2",{attrs:{id:"链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[t._v("#")]),t._v(" 链接")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/the-way-to-go/directory.html"}},[t._v("目录")])],1),t._v(" "),s("li",[t._v("上一节："),s("RouterLink",{attrs:{to:"/the-way-to-go/12.3.html"}},[t._v("文件拷贝")])],1),t._v(" "),s("li",[t._v("下一节："),s("RouterLink",{attrs:{to:"/the-way-to-go/12.5.html"}},[t._v("用 buffer 读取文件")])],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);