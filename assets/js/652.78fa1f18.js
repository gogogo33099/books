(window.webpackJsonp=window.webpackJsonp||[]).push([[652],{1127:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_14-15-漏桶算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_14-15-漏桶算法"}},[t._v("#")]),t._v(" 14.15 漏桶算法")]),t._v(" "),s("p",[t._v("（译者注：翻译遵照原文，但是对于完全没听过这个算法的人来说比较晦涩，请配合代码片段理解）")]),t._v(" "),s("p",[t._v("考虑以下的客户端-服务器结构：客户端协程执行一个无限循环从某个源头（也许是网络）接收数据；数据读取到 "),s("code",[t._v("Buffer")]),t._v(" 类型的缓冲区。为了避免分配过多的缓冲区以及释放缓冲区，它保留了一份空闲缓冲区列表，并且使用一个缓冲通道来表示这个列表："),s("code",[t._v("var freeList = make(chan *Buffer,100)")])]),t._v(" "),s("p",[t._v("这个可重用的缓冲区队列 ("),s("code",[t._v("freeList")]),t._v(") 与服务器是共享的。 当接收数据时，客户端尝试从 "),s("code",[t._v("freeList")]),t._v(" 获取缓冲区；但如果此时通道为空，则会分配新的缓冲区。一旦消息被加载后，它将被发送到服务器上的 "),s("code",[t._v("serverChan")]),t._v(" 通道：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" serverChan "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("chan")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Buffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("以下是客户端的算法代码：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("client")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Buffer\n       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Grab a buffer if available; allocate if not ")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v("freeList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n               "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Got one; nothing more to do")]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n               "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// None free, so allocate a new one")]),t._v("\n               b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Buffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadInto")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Read next message from the network")]),t._v("\n       serverChan "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" b     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Send to server")]),t._v("\n       \n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("服务器的循环则接收每一条来自客户端的消息并处理它，之后尝试将缓冲返回给共享的空闲缓冲区：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("server")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v("serverChan       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Wait for work.")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("process")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Reuse buffer if there's room.")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" freeList "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Reuse buffer if free slot on freeList; nothing more to do")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Free list full, just carry on: the buffer is 'dropped'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("但是这种方法在 "),s("code",[t._v("freeList")]),t._v(" 通道已满的时候是行不通的，因为无法放入空闲 "),s("code",[t._v("freeList")]),t._v(" 通道的缓冲区会被“丢到地上”由垃圾收集器回收（故名：漏桶算法）。")]),t._v(" "),s("h2",{attrs:{id:"链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[t._v("#")]),t._v(" 链接")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/the-way-to-go/directory.html"}},[t._v("目录")])],1),t._v(" "),s("li",[t._v("上一节："),s("RouterLink",{attrs:{to:"/the-way-to-go/14.14.html"}},[t._v("并行化大量数据的计算")])],1),t._v(" "),s("li",[t._v("下一节："),s("RouterLink",{attrs:{to:"/the-way-to-go/14.16.html"}},[t._v("对 Go 协程进行基准测试")])],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);