(window.webpackJsonp=window.webpackJsonp||[]).push([[656],{1133:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_14-5-通道、超时和计时器-ticker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_14-5-通道、超时和计时器-ticker"}},[t._v("#")]),t._v(" 14.5 通道、超时和计时器（Ticker）")]),t._v(" "),s("p",[s("code",[t._v("time")]),t._v(" 包中有一些有趣的功能可以和通道组合使用。")]),t._v(" "),s("p",[t._v("其中就包含了 "),s("code",[t._v("time.Ticker")]),t._v(" 结构体，这个对象以指定的时间间隔重复的向通道 "),s("code",[t._v("C")]),t._v(" 发送时间值：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Ticker "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    C "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("chan")]),t._v(" Time "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the channel on which the ticks are delivered.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// contains filtered or unexported fields")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("时间间隔的单位是 "),s("code",[t._v("ns")]),t._v("（纳秒，"),s("code",[t._v("int64")]),t._v("），在工厂函数 "),s("code",[t._v("time.NewTicker")]),t._v(" 中以 "),s("code",[t._v("Duration")]),t._v(" 类型的参数传入："),s("code",[t._v("func NewTicker(dur) *Ticker")]),t._v("。")]),t._v(" "),s("p",[t._v("在协程周期性的执行一些事情（打印状态日志，输出，计算等等）的时候非常有用。")]),t._v(" "),s("p",[t._v("调用 "),s("code",[t._v("Stop()")]),t._v(" 使计时器停止，在 "),s("code",[t._v("defer")]),t._v(" 语句中使用。这些都很好地适应 "),s("code",[t._v("select")]),t._v(" 语句:")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("ticker "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewTicker")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("updateInterval"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defer")]),t._v(" ticker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Stop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" u"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v("ch1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v("ch2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v("ticker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("C"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("logState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// call some logging function logState")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// no value ready to be received")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("time.Tick()")]),t._v(" 函数声明为 "),s("code",[t._v("Tick(d Duration) <-chan Time")]),t._v("，当你想返回一个通道而不必关闭它的时候这个函数非常有用：它以 "),s("code",[t._v("d")]),t._v(" 为周期给返回的通道发送时间，"),s("code",[t._v("d")]),t._v(" 是纳秒数。如果需要，像下边的代码一样，可以限制处理频率（函数 "),s("code",[t._v("client.Call()")]),t._v(" 是一个 RPC 调用，这里暂不赘述（参见第 "),s("RouterLink",{attrs:{to:"/the-way-to-go/15.9.html"}},[t._v("15.9")]),t._v(" 节））：")],1),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),t._v("\n\nrate_per_sec "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" dur Duration "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1e9")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" rate_per_sec\nchRate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Tick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dur"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a tick every 1/10th of a second")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" req "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("range")]),t._v(" requests "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" chRate "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// rate limit our Service.Method RPC calls")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Service.Method"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这样只会按照指定频率处理请求："),s("code",[t._v("chRate")]),t._v(" 阻塞了更高的频率。每秒处理的频率可以根据机器负载（和/或）资源的情况而增加或减少。")]),t._v(" "),s("p",[t._v("问题 14.1：扩展上边的代码，思考如何承载周期请求数的暴增（提示：使用带缓冲通道和计时器对象）。")]),t._v(" "),s("p",[t._v("定时器 ("),s("code",[t._v("Timer")]),t._v(")  结构体看上去和计时器 ("),s("code",[t._v("Ticker")]),t._v(") 结构体的确很像（构造为 "),s("code",[t._v("NewTimer(d Duration)")]),t._v("），但是它只发送一次时间，在 "),s("code",[t._v("Dration d")]),t._v(" 之后。")]),t._v(" "),s("p",[t._v("还有 "),s("code",[t._v("time.After(d)")]),t._v(" 函数，声明如下：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("After")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d Duration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("chan")]),t._v(" Time\n")])])]),s("p",[t._v("在 "),s("code",[t._v("Duration d")]),t._v(" 之后，当前时间被发到返回的通道；所以它和 "),s("code",[t._v("NewTimer(d).C")]),t._v(" 是等价的；它类似 "),s("code",[t._v("Tick()")]),t._v("，但是 "),s("code",[t._v("After()")]),t._v(" 只发送一次时间。下边有个很具体的示例，很好的阐明了 "),s("code",[t._v("select")]),t._v(" 中 "),s("code",[t._v("default")]),t._v(" 的作用：")]),t._v(" "),s("p",[t._v("示例 14.11："),s("a",{attrs:{href:"examples/chapter_14/timer_goroutine.go"}},[t._v("timer_goroutine.go")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ttick "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Tick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1e8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tboom "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("After")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5e8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v("tick"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tick."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v("boom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BOOM!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"    ."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\ttime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sleep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5e7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("输出：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("    .\n    .\ntick.\n    .\n    .\ntick.\n    .\n    .\ntick.\n    .\n    .\ntick.\n    .\n    .\ntick.\nBOOM!\n")])])]),s("p",[s("strong",[t._v("习惯用法：简单超时模式")])]),t._v(" "),s("p",[t._v("要从通道 "),s("code",[t._v("ch")]),t._v(" 中接收数据，但是最多等待 1 秒。先创建一个信号通道，然后启动一个 "),s("code",[t._v("lambda")]),t._v(" 协程，协程在给通道发送数据之前是休眠的：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("timeout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("chan")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sleep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1e9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// one second")]),t._v("\n        timeout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("然后使用 "),s("code",[t._v("select")]),t._v(" 语句接收 "),s("code",[t._v("ch")]),t._v(" 或者 "),s("code",[t._v("timeout")]),t._v(" 的数据：如果 "),s("code",[t._v("ch")]),t._v(" 在 1 秒内没有收到数据，就选择到了 "),s("code",[t._v("time")]),t._v(" 分支并放弃了 "),s("code",[t._v("ch")]),t._v(" 的读取。")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v("ch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a read from ch has occured")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v("timeout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the read from ch has timed out")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("第二种形式：取消耗时很长的同步调用")]),t._v(" "),s("p",[t._v("也可以使用 "),s("code",[t._v("time.After()")]),t._v(" 函数替换 "),s("code",[t._v("timeout-channel")]),t._v("。可以在 "),s("code",[t._v("select")]),t._v(" 中通过 "),s("code",[t._v("time.After()")]),t._v(" 发送的超时信号来停止协程的执行。以下代码，在 "),s("code",[t._v("timeoutNs")]),t._v(" 纳秒后执行 "),s("code",[t._v("select")]),t._v(" 的 "),s("code",[t._v("timeout")]),t._v(" 分支后，执行 "),s("code",[t._v("client.Call")]),t._v(" 的协程也随之结束，不会给通道 "),s("code",[t._v("ch")]),t._v(" 返回值：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("ch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("chan")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Service.Method"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("reply"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" resp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v("ch\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// use resp and reply")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v("time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("After")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timeoutNs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// call timed out")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("注意缓冲大小设置为 "),s("code",[t._v("1")]),t._v(" 是必要的，可以避免协程死锁以及确保超时的通道可以被垃圾回收。此外，需要注意在有多个 "),s("code",[t._v("case")]),t._v(" 符合条件时， "),s("code",[t._v("select")]),t._v(" 对 "),s("code",[t._v("case")]),t._v(" 的选择是伪随机的，如果上面的代码稍作修改如下，则 "),s("code",[t._v("select")]),t._v(" 语句可能不会在定时器超时信号到来时立刻选中 "),s("code",[t._v("time.After(timeoutNs)")]),t._v(" 对应的 "),s("code",[t._v("case")]),t._v("，因此协程可能不会严格按照定时器设置的时间结束。")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("ch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("chan")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v("ch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do something")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v("time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("After")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timeoutNs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// call timed out")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v(" L\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("第三种形式：假设程序从多个复制的数据库同时读取。只需要一个答案，需要接收首先到达的答案，"),s("code",[t._v("Query")]),t._v(" 函数获取数据库的连接切片并请求。并行请求每一个数据库并返回收到的第一个响应：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Query")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("conns "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("Conn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" query "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Result "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("chan")]),t._v(" Result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" conn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("range")]),t._v(" conns "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c Conn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" ch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("DoQuery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("conn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" ch\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("再次声明，结果通道 "),s("code",[t._v("ch")]),t._v(" 必须是带缓冲的：以保证第一个发送进来的数据有地方可以存放，确保放入的首个数据总会成功，所以第一个到达的值会被获取而与执行的顺序无关。正在执行的协程可以总是可以使用 "),s("code",[t._v("runtime.Goexit()")]),t._v(" 来停止。")]),t._v(" "),s("p",[t._v("在应用中缓存数据：")]),t._v(" "),s("p",[t._v("应用程序中用到了来自数据库（或者常见的数据存储）的数据时，经常会把数据缓存到内存中，因为从数据库中获取数据的操作代价很高；如果数据库中的值不发生变化就没有问题。但是如果值有变化，我们需要一个机制来周期性的从数据库重新读取这些值：缓存的值就不可用（过期）了，而且我们也不希望用户看到陈旧的数据。")]),t._v(" "),s("h2",{attrs:{id:"链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[t._v("#")]),t._v(" 链接")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/the-way-to-go/directory.html"}},[t._v("目录")])],1),t._v(" "),s("li",[t._v("上一节："),s("RouterLink",{attrs:{to:"/the-way-to-go/14.4.html"}},[t._v("使用select切换协程")])],1),t._v(" "),s("li",[t._v("下一节："),s("RouterLink",{attrs:{to:"/the-way-to-go/14.6.html"}},[t._v("协程和恢复（recover）")])],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);