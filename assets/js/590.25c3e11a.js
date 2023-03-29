(window.webpackJsonp=window.webpackJsonp||[]).push([[590],{1060:function(t,_,e){"use strict";e.r(_);var v=e(14),s=Object(v.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"_9-1-标准库概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-标准库概述"}},[t._v("#")]),t._v(" 9.1 标准库概述")]),t._v(" "),_("p",[t._v("像 "),_("code",[t._v("fmt")]),t._v("、"),_("code",[t._v("os")]),t._v(" 等这样具有常用功能的内置包在 Go 语言中有 150 个以上，它们被称为标准库，大部分(一些底层的除外)内置于 Go 本身。完整列表可以在 "),_("a",{attrs:{href:"https://gowalker.org/search?q=gorepos",target:"_blank",rel:"noopener noreferrer"}},[t._v("Go Walker"),_("OutboundLink")],1),t._v(" 查看。")]),t._v(" "),_("p",[t._v("在贯穿本书的例子和练习中，我们都是用标准库的包。可以通过查阅第 350 页包中的内容快速找到相关的包的实例。这里我们只是按功能进行分组来介绍这些包的简单用途，我们不会深入讨论他们的内部结构。")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("unsafe")]),t._v(": 包含了一些打破 Go 语言“类型安全”的命令，一般的程序中不会被使用，可用在 C/C++ 程序的调用中。")]),t._v(" "),_("li",[_("code",[t._v("syscall")]),t._v("-"),_("code",[t._v("os")]),t._v("-"),_("code",[t._v("os/exec")]),t._v(":\n"),_("ul",[_("li",[_("code",[t._v("os")]),t._v(": 提供给我们一个平台无关性的操作系统功能接口，采用类 Unix 设计，隐藏了不同操作系统间的差异，让不同的文件系统和操作系统对象表现一致。")]),t._v(" "),_("li",[_("code",[t._v("os/exec")]),t._v(": 提供我们运行外部操作系统命令和程序的方式。")]),t._v(" "),_("li",[_("code",[t._v("syscall")]),t._v(": 底层的外部包，提供了操作系统底层调用的基本接口。")])])])]),t._v(" "),_("p",[t._v("通过一个 Go 程序让Linux重启来体现它的能力。")]),t._v(" "),_("p",[t._v("示例 9.1 "),_("a",{attrs:{href:"examples/chapter_9/reboot.go"}},[t._v("reboot.go")]),t._v("：")]),t._v(" "),_("div",{staticClass:"language-go extra-class"},[_("pre",{pre:!0,attrs:{class:"language-go"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"syscall"')]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" LINUX_REBOOT_MAGIC1 "),_("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uintptr")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xfee1dead")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" LINUX_REBOOT_MAGIC2 "),_("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uintptr")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("672274793")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" LINUX_REBOOT_CMD_RESTART "),_("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uintptr")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x1234567")]),t._v("\n\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tsyscall"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("Syscall")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("syscall"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SYS_REBOOT"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tLINUX_REBOOT_MAGIC1"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tLINUX_REBOOT_MAGIC2"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tLINUX_REBOOT_CMD_RESTART"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),_("ul",[_("li",[_("code",[t._v("archive/tar")]),t._v(" 和 "),_("code",[t._v("/zip-compress")]),t._v("：压缩（解压缩）文件功能。")]),t._v(" "),_("li",[_("code",[t._v("fmt")]),t._v("-"),_("code",[t._v("io")]),t._v("-"),_("code",[t._v("bufio")]),t._v("-"),_("code",[t._v("path/filepath")]),t._v("-"),_("code",[t._v("flag")]),t._v(":\n"),_("ul",[_("li",[_("code",[t._v("fmt")]),t._v(": 提供了格式化输入输出功能。")]),t._v(" "),_("li",[_("code",[t._v("io")]),t._v(": 提供了基本输入输出功能，大多数是围绕系统功能的封装。")]),t._v(" "),_("li",[_("code",[t._v("bufio")]),t._v(": 缓冲输入输出功能的封装。")]),t._v(" "),_("li",[_("code",[t._v("path/filepath")]),t._v(": 用来操作在当前系统中的目标文件名路径。")]),t._v(" "),_("li",[_("code",[t._v("flag")]),t._v(": 对命令行参数的操作。")])])]),t._v(" "),_("li",[_("code",[t._v("strings")]),t._v("-"),_("code",[t._v("strconv")]),t._v("-"),_("code",[t._v("unicode")]),t._v("-"),_("code",[t._v("regexp")]),t._v("-"),_("code",[t._v("bytes")]),t._v(":\n"),_("ul",[_("li",[_("code",[t._v("strings")]),t._v(": 提供对字符串的操作。")]),t._v(" "),_("li",[_("code",[t._v("strconv")]),t._v(": 提供将字符串转换为基础类型的功能。")]),t._v(" "),_("li",[_("code",[t._v("unicode")]),t._v(": 为 unicode 型的字符串提供特殊的功能。")]),t._v(" "),_("li",[_("code",[t._v("regexp")]),t._v(": 正则表达式功能。")]),t._v(" "),_("li",[_("code",[t._v("bytes")]),t._v(": 提供对字符型分片的操作。")]),t._v(" "),_("li",[_("code",[t._v("index/suffixarray")]),t._v(": 子字符串快速查询。")])])]),t._v(" "),_("li",[_("code",[t._v("math")]),t._v("-"),_("code",[t._v("math/cmath")]),t._v("-"),_("code",[t._v("math/big")]),t._v("-"),_("code",[t._v("math/rand")]),t._v("-"),_("code",[t._v("sort")]),t._v(":\n"),_("ul",[_("li",[_("code",[t._v("math")]),t._v(": 基本的数学函数。")]),t._v(" "),_("li",[_("code",[t._v("math/cmath")]),t._v(": 对复数的操作。")]),t._v(" "),_("li",[_("code",[t._v("math/rand")]),t._v(": 伪随机数生成。")]),t._v(" "),_("li",[_("code",[t._v("sort")]),t._v(": 为数组排序和自定义集合。")]),t._v(" "),_("li",[_("code",[t._v("math/big")]),t._v(": 大数的实现和计算。")])])]),t._v(" "),_("li",[_("code",[t._v("container")]),t._v("-"),_("code",[t._v("/list-ring-heap")]),t._v(": 实现对集合的操作。\n"),_("ul",[_("li",[_("code",[t._v("list")]),t._v(": 双链表。")]),t._v(" "),_("li",[_("code",[t._v("ring")]),t._v(": 环形链表。")])])])]),t._v(" "),_("p",[t._v("下面代码演示了如何遍历一个链表(当 l 是 "),_("code",[t._v("*List")]),t._v(")：")]),t._v(" "),_("div",{staticClass:"language-go extra-class"},[_("pre",{pre:!0,attrs:{class:"language-go"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" e "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" l"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("Front")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" e "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" e "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("Next")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//do something with e.Value")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),_("ul",[_("li",[_("code",[t._v("time")]),t._v("-"),_("code",[t._v("log")]),t._v(":\n"),_("ul",[_("li",[_("code",[t._v("time")]),t._v(": 日期和时间的基本操作。")]),t._v(" "),_("li",[_("code",[t._v("log")]),t._v(": 记录程序运行时产生的日志，我们将在后面的章节使用它。")])])]),t._v(" "),_("li",[_("code",[t._v("encoding/json")]),t._v("-"),_("code",[t._v("encoding/xml")]),t._v("-"),_("code",[t._v("text/template")]),t._v(":\n"),_("ul",[_("li",[_("code",[t._v("encoding/json")]),t._v(": 读取并解码和写入并编码 JSON 数据。")]),t._v(" "),_("li",[_("code",[t._v("encoding/xml")]),t._v(": 简单的 XML1.0 解析器，有关 JSON 和 XML 的实例请查阅第 "),_("RouterLink",{attrs:{to:"/the-way-to-go/12.9.html"}},[t._v("12.9")]),t._v("/"),_("RouterLink",{attrs:{to:"/the-way-to-go/10.0.html"}},[t._v("10")]),t._v(" 章节。")],1),t._v(" "),_("li",[_("code",[t._v("text/template")]),t._v(":生成像 HTML 一样的数据与文本混合的数据驱动模板（参见"),_("RouterLink",{attrs:{to:"/the-way-to-go/15.7.html"}},[t._v("第 15.7 节")]),t._v("）。")],1)])]),t._v(" "),_("li",[_("code",[t._v("net")]),t._v("-"),_("code",[t._v("net/http")]),t._v("-"),_("code",[t._v("html")]),t._v(":（参见"),_("RouterLink",{attrs:{to:"/the-way-to-go/15.0.html"}},[t._v("第 15 章")]),t._v("）\n"),_("ul",[_("li",[_("code",[t._v("net")]),t._v(": 网络数据的基本操作。")]),t._v(" "),_("li",[_("code",[t._v("http")]),t._v(": 提供了一个可扩展的 HTTP 服务器和基础客户端，解析 HTTP 请求和回复。")]),t._v(" "),_("li",[_("code",[t._v("html")]),t._v(": HTML5 解析器。")])])],1),t._v(" "),_("li",[_("code",[t._v("runtime")]),t._v(": Go 程序运行时的交互操作，例如垃圾回收和协程创建。")]),t._v(" "),_("li",[_("code",[t._v("reflect")]),t._v(": 实现通过程序运行时反射，让程序操作任意类型的变量。")])]),t._v(" "),_("p",[_("code",[t._v("exp")]),t._v(" 包中有许多将被编译为新包的实验性的包。在下次稳定版本发布的时候，它们将成为独立的包。如果前一个版本已经存在了，它们将被作为过时的包被回收。然而 Go1.0 发布的时候并没有包含过时或者实验性的包。")]),t._v(" "),_("p",[_("strong",[t._v("练习 9.1")]),t._v(" "),_("a",{attrs:{href:"exercises/chapter_9/dlinked_list.go"}},[t._v("Q20_linked_list.go")])]),t._v(" "),_("p",[t._v("使用 "),_("code",[t._v("container/list")]),t._v(" 包实现一个双向链表，将 "),_("code",[t._v("101")]),t._v("、"),_("code",[t._v("102")]),t._v(" 和 "),_("code",[t._v("103")]),t._v(" 放入其中并打印出来。")]),t._v(" "),_("p",[_("strong",[t._v("练习 9.2")]),t._v(" "),_("a",{attrs:{href:"exercises/chapter_9/size_int.go"}},[t._v("size_int.go")])]),t._v(" "),_("p",[t._v("通过使用 "),_("code",[t._v("unsafe")]),t._v(" 包中的方法来测试你电脑上一个整型变量占用多少个字节。")]),t._v(" "),_("h2",{attrs:{id:"链接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[t._v("#")]),t._v(" 链接")]),t._v(" "),_("ul",[_("li",[_("RouterLink",{attrs:{to:"/the-way-to-go/directory.html"}},[t._v("目录")])],1),t._v(" "),_("li",[t._v("上一节："),_("RouterLink",{attrs:{to:"/the-way-to-go/09.0.html"}},[t._v("包 (package)")])],1),t._v(" "),_("li",[t._v("下一节："),_("RouterLink",{attrs:{to:"/the-way-to-go/09.2.html"}},[t._v("regexp 包")])],1)])])}),[],!1,null,null,null);_.default=s.exports}}]);