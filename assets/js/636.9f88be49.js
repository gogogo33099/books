(window.webpackJsonp=window.webpackJsonp||[]).push([[636],{1112:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_13-10-性能调试-分析并优化-go-程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_13-10-性能调试-分析并优化-go-程序"}},[t._v("#")]),t._v(" 13.10 性能调试：分析并优化 Go 程序")]),t._v(" "),s("h2",{attrs:{id:"_13-10-1-时间和内存消耗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_13-10-1-时间和内存消耗"}},[t._v("#")]),t._v(" 13.10.1 时间和内存消耗")]),t._v(" "),s("p",[t._v("可以用这个便捷脚本 "),s("em",[t._v("xtime")]),t._v(" 来测量：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/sh")]),t._v("\n/usr/bin/time "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%Uu %Ss %er %MkB %C'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$@")]),t._v('"')]),t._v("\n")])])]),s("p",[t._v("在 Unix 命令行中像这样使用 "),s("code",[t._v("xtime goprogexec")]),t._v("，这里的 progexec 是一个 Go 可执行程序，这句命令行输出类似：56.63u 0.26s 56.92r 1642640kB progexec，分别对应用户时间，系统时间，实际时间和最大内存占用。")]),t._v(" "),s("h2",{attrs:{id:"_13-10-2-用-go-test-调试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_13-10-2-用-go-test-调试"}},[t._v("#")]),t._v(" 13.10.2 用 go test 调试")]),t._v(" "),s("p",[t._v("如果代码使用了 Go 中 "),s("code",[t._v("testing")]),t._v(" 包的基准测试功能，我们可以用 gotest 标准的 "),s("code",[t._v("-cpuprofile")]),t._v(" 和 "),s("code",[t._v("-memprofile")]),t._v(" 标志向指定文件写入 CPU 或 内存使用情况报告。")]),t._v(" "),s("p",[t._v("使用方式："),s("code",[t._v("go test -x -v -cpuprofile=prof.out -file x_test.go")])]),t._v(" "),s("p",[t._v("编译执行 x_test.go 中的测试，并向 prof.out 文件中写入 cpu 性能分析信息。")]),t._v(" "),s("h2",{attrs:{id:"_13-10-3-用-pprof-调试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_13-10-3-用-pprof-调试"}},[t._v("#")]),t._v(" 13.10.3 用 pprof 调试")]),t._v(" "),s("p",[t._v("你可以在单机程序 progexec 中引入 "),s("code",[t._v("runtime/pprof")]),t._v(" 包；这个包以 pprof 可视化工具需要的格式写入运行时报告数据。对于 CPU 性能分析来说你需要添加一些代码：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cpuprofile "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" flag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cpuprofile"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"write cpu profile to file"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tflag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("cpuprofile "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("cpuprofile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tlog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fatal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\tpprof"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("StartCPUProfile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defer")]),t._v(" pprof"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("StopCPUProfile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),s("p",[t._v("代码定义了一个名为 cpuprofile 的 flag，调用 Go flag 库来解析命令行 flag，如果命令行设置了 cpuprofile flag，则开始 CPU 性能分析并把结果重定向到那个文件（"),s("code",[t._v("os.Create")]),t._v(" 用拿到的名字创建了用来写入分析数据的文件）。这个分析程序最后需要在程序退出之前调用 "),s("code",[t._v("StopCPUProfile()")]),t._v(" 来刷新挂起的写操作到文件中；我们用 "),s("code",[t._v("defer")]),t._v(" 来保证这一切会在 "),s("code",[t._v("main()")]),t._v(" 返回时触发。")]),t._v(" "),s("p",[t._v("现在用这个 flag 运行程序："),s("code",[t._v("progexec -cpuprofile=progexec.prof")])]),t._v(" "),s("p",[t._v("然后可以像这样用 gopprof 工具："),s("code",[t._v("gopprof progexec progexec.prof")])]),t._v(" "),s("p",[t._v("gopprof 程序是 Google pprofC++ 分析器的一个轻微变种；关于此工具更多的信息，参见"),s("a",{attrs:{href:"https://github.com/gperftools/gperftools",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/gperftools/gperftools"),s("OutboundLink")],1),t._v(" 。")]),t._v(" "),s("p",[t._v("如果开启了 CPU 性能分析，Go 程序会以大约每秒 100 次的频率阻塞，并记录当前执行的 goroutine 栈上的程序计数器样本。")]),t._v(" "),s("p",[t._v("此工具一些有趣的命令：")]),t._v(" "),s("p",[t._v("1）"),s("code",[t._v("topN")])]),t._v(" "),s("p",[t._v("用来展示分析结果中最开头的 N 份样本，例如："),s("code",[t._v("top5")]),t._v("\n它会展示在程序运行期间调用最频繁的 5 个函数，输出如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Total: 3099 samples\n626 20.2% 20.2% 626 20.2% scanblock\n309 10.0% 30.2% 2839 91.6% main.FindLoops\n...\n")])])]),s("p",[t._v("第 5 列表示函数的调用频度。")]),t._v(" "),s("p",[t._v("2）"),s("code",[t._v("web")]),t._v(" 或 "),s("code",[t._v("web 函数名")])]),t._v(" "),s("p",[t._v("该命令生成一份 SVG 格式的分析数据图表，并在网络浏览器中打开它（还有一个 gv 命令可以生成 PostScript 格式的数据，并在 GhostView 中打开，这个命令需要安装 graphviz）。函数被表示成不同的矩形（被调用越多，矩形越大），箭头指示函数调用链。")]),t._v(" "),s("p",[t._v("3）"),s("code",[t._v("list 函数名")]),t._v(" 或 "),s("code",[t._v("weblist 函数名")])]),t._v(" "),s("p",[t._v("展示对应函数名的代码行列表，第 2 列表示当前行执行消耗的时间，这样就很好地指出了运行过程中消耗最大的代码。")]),t._v(" "),s("p",[t._v("如果发现函数 "),s("code",[t._v("runtime.mallocgc")]),t._v("（分配内存并执行周期性的垃圾回收）调用频繁，那么是应该进行内存分析的时候了。找出垃圾回收频繁执行的原因，和内存大量分配的根源。")]),t._v(" "),s("p",[t._v("为了做到这一点必须在合适的地方添加下面的代码：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" memprofile "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" flag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"memprofile"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"write memory profile to this file"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CallToFunctionWhichAllocatesLotsOfMemory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("memprofile "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("memprofile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tlog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fatal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tpprof"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteHeapProfile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Close")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("用 "),s("code",[t._v("-memprofile flag")]),t._v(" 运行这个程序："),s("code",[t._v("progexec -memprofile=progexec.mprof")])]),t._v(" "),s("p",[t._v("然后你可以像这样再次使用 gopprof 工具："),s("code",[t._v("gopprof progexec progexec.mprof")])]),t._v(" "),s("p",[s("code",[t._v("top5")]),t._v("，"),s("code",[t._v("list 函数名")]),t._v(" 等命令同样适用，只不过现在是以 Mb 为单位测量内存分配情况，这是 top 命令输出的例子：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Total: 118.3 MB\n\t66.1 55.8% 55.8% 103.7 87.7% main.FindLoops\n\t30.5 25.8% 81.6% 30.5 25.8% main.*LSG·NewLoop\n\t...\n")])])]),s("p",[t._v("从第 1 列可以看出，最上面的函数占用了最多的内存。")]),t._v(" "),s("p",[t._v("同样有一个报告内存分配计数的有趣工具：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("gopprof "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--inuse_objects")]),t._v(" progexec progexec.mprof\n")])])]),s("p",[t._v("对于 web 应用来说，有标准的 HTTP 接口可以分析数据。在 HTTP 服务中添加")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http/pprof"')]),t._v("\n")])])]),s("p",[t._v("会为 /debug/pprof/ 下的一些 URL 安装处理器。然后你可以用一个唯一的参数——你服务中的分析数据的 URL 来执行 gopprof 命令——它会下载并执行在线分析。")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("gopprof http://localhost:6060/debug/pprof/profile "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 30-second CPU profile")]),t._v("\ngopprof http://localhost:6060/debug/pprof/heap "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# heap profile")]),t._v("\n")])])]),s("p",[t._v("在 Go-blog（引用 15）中有一篇很好的文章用具体的例子进行了分析：分析 Go 程序（2011年6月）。")]),t._v(" "),s("h2",{attrs:{id:"链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[t._v("#")]),t._v(" 链接")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/the-way-to-go/directory.html"}},[t._v("目录")])],1),t._v(" "),s("li",[t._v("上一节："),s("RouterLink",{attrs:{to:"/the-way-to-go/13.9.html"}},[t._v("用（测试数据）表驱动测试")])],1),t._v(" "),s("li",[t._v("下一章："),s("RouterLink",{attrs:{to:"/the-way-to-go/14.0.html"}},[t._v("协程（goroutine）与通道（channel）")])],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);