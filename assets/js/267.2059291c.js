(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{689:function(t,s,n){"use strict";n.r(s);var a=n(14),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_1-3-查找重复的行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-查找重复的行"}},[t._v("#")]),t._v(" 1.3. 查找重复的行")]),t._v(" "),s("p",[t._v("对文件做拷贝、打印、搜索、排序、统计或类似事情的程序都有一个差不多的程序结构：一个处理输入的循环，在每个元素上执行计算处理，在处理的同时或最后产生输出。我们会展示一个名为 "),s("code",[t._v("dup")]),t._v(" 的程序的三个版本；灵感来自于 Unix 的 "),s("code",[t._v("uniq")]),t._v(" 命令，其寻找相邻的重复行。该程序使用的结构和包是个参考范例，可以方便地修改。")]),t._v(" "),s("p",[s("code",[t._v("dup")]),t._v(" 的第一个版本打印标准输入中多次出现的行，以重复次数开头。该程序将引入 "),s("code",[t._v("if")]),t._v(" 语句，"),s("code",[t._v("map")]),t._v(" 数据类型以及 "),s("code",[t._v("bufio")]),t._v(" 包。")]),t._v(" "),s("p",[s("u",[s("i",[t._v("gopl.io/ch1/dup1")])])]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Dup1 prints the text of each line that appears more than")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// once in the standard input, preceded by its count.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bufio"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"os"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tcounts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tinput "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" bufio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewScanner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Stdin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Scan")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tcounts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NOTE: ignoring potential errors from input.Err()")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" line"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("range")]),t._v(" counts "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d\\t%s\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" line"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("正如 "),s("code",[t._v("for")]),t._v(" 循环一样，"),s("code",[t._v("if")]),t._v(" 语句条件两边也不加括号，但是主体部分需要加。"),s("code",[t._v("if")]),t._v(" 语句的 "),s("code",[t._v("else")]),t._v(" 部分是可选的，在 "),s("code",[t._v("if")]),t._v(" 的条件为 "),s("code",[t._v("false")]),t._v(" 时执行。")]),t._v(" "),s("p",[s("strong",[t._v("map")]),t._v(" 存储了键/值（key/value）的集合，对集合元素，提供常数时间的存、取或测试操作。键可以是任意类型，只要其值能用 "),s("code",[t._v("==")]),t._v(" 运算符比较，最常见的例子是字符串；值则可以是任意类型。这个例子中的键是字符串，值是整数。内置函数 "),s("code",[t._v("make")]),t._v(" 创建空 "),s("code",[t._v("map")]),t._v("，此外，它还有别的作用。4.3 节讨论 "),s("code",[t._v("map")]),t._v("。")]),t._v(" "),s("p",[t._v("（译注：从功能和实现上说，"),s("code",[t._v("Go")]),t._v(" 的 "),s("code",[t._v("map")]),t._v(" 类似于 "),s("code",[t._v("Java")]),t._v(" 语言中的 "),s("code",[t._v("HashMap")]),t._v("，Python 语言中的 "),s("code",[t._v("dict")]),t._v("，"),s("code",[t._v("Lua")]),t._v(" 语言中的 "),s("code",[t._v("table")]),t._v("，通常使用 "),s("code",[t._v("hash")]),t._v(" 实现。遗憾的是，对于该词的翻译并不统一，数学界术语为"),s("em",[t._v("映射")]),t._v("，而计算机界众说纷纭莫衷一是。为了防止对读者造成误解，保留不译。）")]),t._v(" "),s("p",[t._v("每次 "),s("code",[t._v("dup")]),t._v(" 读取一行输入，该行被当做键存入 "),s("code",[t._v("map")]),t._v("，其对应的值递增。"),s("code",[t._v("counts[input.Text()]++")]),t._v(" 语句等价下面两句：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("line "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncounts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("line"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" counts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("line"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),s("p",[s("code",[t._v("map")]),t._v(" 中不含某个键时不用担心，首次读到新行时，等号右边的表达式 "),s("code",[t._v("counts[line]")]),t._v(" 的值将被计算为其类型的零值，对于 "),s("code",[t._v("int")]),t._v(" 即 "),s("code",[t._v("0")]),t._v("。")]),t._v(" "),s("p",[t._v("为了打印结果，我们使用了基于 "),s("code",[t._v("range")]),t._v(" 的循环，并在 "),s("code",[t._v("counts")]),t._v(" 这个 "),s("code",[t._v("map")]),t._v(" 上迭代。跟之前类似，每次迭代得到两个结果，键和其在 "),s("code",[t._v("map")]),t._v(" 中对应的值。"),s("code",[t._v("map")]),t._v(" 的迭代顺序并不确定，从实践来看，该顺序随机，每次运行都会变化。这种设计是有意为之的，因为能防止程序依赖特定遍历顺序，而这是无法保证的。（译注：具体可以参见这里"),s("a",{attrs:{href:"https://stackoverflow.com/questions/11853396/google-go-lang-assignment-order",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://stackoverflow.com/questions/11853396/google-go-lang-assignment-order"),s("OutboundLink")],1),t._v("）")]),t._v(" "),s("p",[t._v("继续来看 "),s("code",[t._v("bufio")]),t._v(" 包，它使处理输入和输出方便又高效。"),s("code",[t._v("Scanner")]),t._v(" 类型是该包最有用的特性之一，它读取输入并将其拆成行或单词；通常是处理行形式的输入最简单的方法。")]),t._v(" "),s("p",[t._v("程序使用短变量声明创建 "),s("code",[t._v("bufio.Scanner")]),t._v(" 类型的变量 "),s("code",[t._v("input")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("input "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" bufio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewScanner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Stdin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("该变量从程序的标准输入中读取内容。每次调用 "),s("code",[t._v("input.Scan()")]),t._v("，即读入下一行，并移除行末的换行符；读取的内容可以调用 "),s("code",[t._v("input.Text()")]),t._v(" 得到。"),s("code",[t._v("Scan")]),t._v(" 函数在读到一行时返回 "),s("code",[t._v("true")]),t._v("，不再有输入时返回 "),s("code",[t._v("false")]),t._v("。")]),t._v(" "),s("p",[t._v("类似于 C 或其它语言里的 "),s("code",[t._v("printf")]),t._v(" 函数，"),s("code",[t._v("fmt.Printf")]),t._v(" 函数对一些表达式产生格式化输出。该函数的首个参数是个格式字符串，指定后续参数被如何格式化。各个参数的格式取决于“转换字符”（conversion character），形式为百分号后跟一个字母。举个例子，"),s("code",[t._v("%d")]),t._v(" 表示以十进制形式打印一个整型操作数，而 "),s("code",[t._v("%s")]),t._v(" 则表示把字符串型操作数的值展开。")]),t._v(" "),s("p",[s("code",[t._v("Printf")]),t._v(" 有一大堆这种转换，Go程序员称之为"),s("em",[t._v("动词（verb）")]),t._v("。下面的表格虽然远不是完整的规范，但展示了可用的很多特性：")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("%d          十进制整数\n%x, %o, %b  十六进制，八进制，二进制整数。\n%f, %g, %e  浮点数： 3.141593 3.141592653589793 3.141593e+00\n%t          布尔：true或false\n%c          字符（rune） (Unicode码点)\n%s          字符串\n%q          带双引号的字符串\"abc\"或带单引号的字符'c'\n%v          变量的自然形式（natural format）\n%T          变量的类型\n%%          字面上的百分号标志（无操作数）\n")])])]),s("p",[s("code",[t._v("dup1")]),t._v(" 的格式字符串中还含有制表符"),s("code",[t._v("\\t")]),t._v("和换行符"),s("code",[t._v("\\n")]),t._v("。字符串字面上可能含有这些代表不可见字符的"),s("strong",[t._v("转义字符（escape sequences）")]),t._v("。默认情况下，"),s("code",[t._v("Printf")]),t._v(" 不会换行。按照惯例，以字母 "),s("code",[t._v("f")]),t._v(" 结尾的格式化函数，如 "),s("code",[t._v("log.Printf")]),t._v(" 和 "),s("code",[t._v("fmt.Errorf")]),t._v("，都采用 "),s("code",[t._v("fmt.Printf")]),t._v(" 的格式化准则。而以 "),s("code",[t._v("ln")]),t._v(" 结尾的格式化函数，则遵循 "),s("code",[t._v("Println")]),t._v(" 的方式，以跟 "),s("code",[t._v("%v")]),t._v(" 差不多的方式格式化参数，并在最后添加一个换行符。（译注：后缀 "),s("code",[t._v("f")]),t._v(" 指 "),s("code",[t._v("format")]),t._v("，"),s("code",[t._v("ln")]),t._v(" 指 "),s("code",[t._v("line")]),t._v("。）")]),t._v(" "),s("p",[t._v("很多程序要么从标准输入中读取数据，如上面的例子所示，要么从一系列具名文件中读取数据。"),s("code",[t._v("dup")]),t._v(" 程序的下个版本读取标准输入或是使用 "),s("code",[t._v("os.Open")]),t._v(" 打开各个具名文件，并操作它们。")]),t._v(" "),s("p",[s("u",[s("i",[t._v("gopl.io/ch1/dup2")])])]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Dup2 prints the count and text of lines that appear more than once")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// in the input.  It reads from stdin or from a list of named files.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bufio"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"os"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tcounts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfiles "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("files"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("countLines")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Stdin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" counts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("range")]),t._v(" files "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fprintf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Stderr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dup2: %v\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("countLines")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" counts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\tf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Close")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" line"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("range")]),t._v(" counts "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d\\t%s\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" line"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("countLines")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("File"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" counts "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tinput "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" bufio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewScanner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Scan")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tcounts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NOTE: ignoring potential errors from input.Err()")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("os.Open")]),t._v(" 函数返回两个值。第一个值是被打开的文件（"),s("code",[t._v("*os.File")]),t._v("），其后被 "),s("code",[t._v("Scanner")]),t._v(" 读取。")]),t._v(" "),s("p",[s("code",[t._v("os.Open")]),t._v(" 返回的第二个值是内置 "),s("code",[t._v("error")]),t._v(" 类型的值。如果 "),s("code",[t._v("err")]),t._v(" 等于内置值"),s("code",[t._v("nil")]),t._v("（译注：相当于其它语言里的 "),s("code",[t._v("NULL")]),t._v("），那么文件被成功打开。读取文件，直到文件结束，然后调用 "),s("code",[t._v("Close")]),t._v(" 关闭该文件，并释放占用的所有资源。相反的话，如果 "),s("code",[t._v("err")]),t._v(" 的值不是 "),s("code",[t._v("nil")]),t._v("，说明打开文件时出错了。这种情况下，错误值描述了所遇到的问题。我们的错误处理非常简单，只是使用 "),s("code",[t._v("Fprintf")]),t._v(" 与表示任意类型默认格式值的动词 "),s("code",[t._v("%v")]),t._v("，向标准错误流打印一条信息，然后 "),s("code",[t._v("dup")]),t._v(" 继续处理下一个文件；"),s("code",[t._v("continue")]),t._v(" 语句直接跳到 "),s("code",[t._v("for")]),t._v(" 循环的下个迭代开始执行。")]),t._v(" "),s("p",[t._v("为了使示例代码保持合理的大小，本书开始的一些示例有意简化了错误处理，显而易见的是，应该检查 "),s("code",[t._v("os.Open")]),t._v(" 返回的错误值，然而，使用 "),s("code",[t._v("input.Scan")]),t._v(" 读取文件过程中，不大可能出现错误，因此我们忽略了错误处理。我们会在跳过错误检查的地方做说明。5.4 节中深入介绍错误处理。")]),t._v(" "),s("p",[t._v("注意 "),s("code",[t._v("countLines")]),t._v(" 函数在其声明前被调用。函数和包级别的变量（package-level entities）可以任意顺序声明，并不影响其被调用。（译注：最好还是遵循一定的规范）")]),t._v(" "),s("p",[s("code",[t._v("map")]),t._v(" 是一个由 "),s("code",[t._v("make")]),t._v(" 函数创建的数据结构的引用。"),s("code",[t._v("map")]),t._v(" 作为参数传递给某函数时，该函数接收这个引用的一份拷贝（copy，或译为副本），被调用函数对 "),s("code",[t._v("map")]),t._v(" 底层数据结构的任何修改，调用者函数都可以通过持有的 "),s("code",[t._v("map")]),t._v(" 引用看到。在我们的例子中，"),s("code",[t._v("countLines")]),t._v(" 函数向 "),s("code",[t._v("counts")]),t._v(" 插入的值，也会被 "),s("code",[t._v("main")]),t._v(" 函数看到。（译注：类似于 C++ 里的引用传递，实际上指针是另一个指针了，但内部存的值指向同一块内存）")]),t._v(" "),s("p",[s("code",[t._v("dup")]),t._v(' 的前两个版本以"流”模式读取输入，并根据需要拆分成多个行。理论上，这些程序可以处理任意数量的输入数据。还有另一个方法，就是一口气把全部输入数据读到内存中，一次分割为多行，然后处理它们。下面这个版本，'),s("code",[t._v("dup3")]),t._v("，就是这么操作的。这个例子引入了 "),s("code",[t._v("ReadFile")]),t._v(" 函数（来自于"),s("code",[t._v("io/ioutil")]),t._v("包），其读取指定文件的全部内容，"),s("code",[t._v("strings.Split")]),t._v(" 函数把字符串分割成子串的切片。（"),s("code",[t._v("Split")]),t._v(" 的作用与前文提到的 "),s("code",[t._v("strings.Join")]),t._v(" 相反。）")]),t._v(" "),s("p",[t._v("我们略微简化了 "),s("code",[t._v("dup3")]),t._v("。首先，由于 "),s("code",[t._v("ReadFile")]),t._v(" 函数需要文件名作为参数，因此只读指定文件，不读标准输入。其次，由于行计数代码只在一处用到，故将其移回 "),s("code",[t._v("main")]),t._v(" 函数。")]),t._v(" "),s("p",[s("u",[s("i",[t._v("gopl.io/ch1/dup3")])])]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io/ioutil"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"os"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"strings"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tcounts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" filename "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("range")]),t._v(" os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tdata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" ioutil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ReadFile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fprintf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Stderr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dup3: %v\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" line "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("range")]),t._v(" strings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Split")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tcounts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("line"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" line"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("range")]),t._v(" counts "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d\\t%s\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" line"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("ReadFile")]),t._v(" 函数返回一个字节切片（byte slice），必须把它转换为 "),s("code",[t._v("string")]),t._v("，才能用 "),s("code",[t._v("strings.Split")]),t._v(" 分割。我们会在3.5.4 节详细讲解字符串和字节切片。")]),t._v(" "),s("p",[t._v("实现上，"),s("code",[t._v("bufio.Scanner")]),t._v("、"),s("code",[t._v("ioutil.ReadFile")]),t._v(" 和 "),s("code",[t._v("ioutil.WriteFile")]),t._v(" 都使用 "),s("code",[t._v("*os.File")]),t._v(" 的 "),s("code",[t._v("Read")]),t._v(" 和 "),s("code",[t._v("Write")]),t._v(" 方法，但是，大多数程序员很少需要直接调用那些低级（lower-level）函数。高级（higher-level）函数，像 "),s("code",[t._v("bufio")]),t._v(" 和 "),s("code",[t._v("io/ioutil")]),t._v(" 包中所提供的那些，用起来要容易点。")]),t._v(" "),s("hr"),t._v(" "),s("p",[s("strong",[t._v("练习 1.4：")]),t._v(" 修改 "),s("code",[t._v("dup2")]),t._v("，出现重复的行时打印文件名称。")])])}),[],!1,null,null,null);s.default=e.exports}}]);