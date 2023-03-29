(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{675:function(t,s,a){"use strict";a.r(s);var n=a(14),p=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_6-6-分布式配置管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-分布式配置管理"}},[t._v("#")]),t._v(" 6.6 分布式配置管理")]),t._v(" "),s("p",[t._v("在分布式系统中，常困扰我们的还有上线问题。虽然目前有一些优雅重启方案，但实际应用中可能受限于我们系统内部的运行情况而没有办法做到真正的 “优雅”。比如我们为了对去下游的流量进行限制，在内存中堆积一些数据，并对堆积设定时间或总量的阈值。在任意阈值达到之后将数据统一发送给下游，以避免频繁的请求超出下游的承载能力而将下游打垮。这种情况下重启要做到优雅就比较难了。")]),t._v(" "),s("p",[t._v("所以我们的目标还是尽量避免采用或者绕过上线的方式，对线上程序做一些修改。比较典型的修改内容就是程序的配置项。")]),t._v(" "),s("h2",{attrs:{id:"_6-6-1-场景举例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-1-场景举例"}},[t._v("#")]),t._v(" 6.6.1 场景举例")]),t._v(" "),s("h3",{attrs:{id:"_6-6-1-1-报表系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-1-1-报表系统"}},[t._v("#")]),t._v(" 6.6.1.1 报表系统")]),t._v(" "),s("p",[t._v("在一些偏 OLAP 或者离线的数据平台中，经过长期的迭代开发，整个系统的功能模块已经渐渐稳定。可变动的项只出现在数据层，而数据层的变动大多可以认为是 SQL 的变动，架构师们自然而然地会想着把这些变动项抽离到系统外部。比如本节所述的配置管理系统。")]),t._v(" "),s("p",[t._v("当业务提出了新的需求时，我们的需求是将新的 SQL 录入到系统内部，或者简单修改一下老的 SQL。不对系统进行上线，就可以直接完成这些修改。")]),t._v(" "),s("h3",{attrs:{id:"_6-6-1-2-业务配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-1-2-业务配置"}},[t._v("#")]),t._v(" 6.6.1.2 业务配置")]),t._v(" "),s("p",[t._v("大公司的平台部门服务众多业务线，在平台内为各业务线分配唯一 id。平台本身也由多个模块构成，这些模块需要共享相同的业务线定义（要不然就乱套了）。当公司新开产品线时，需要能够在短时间内打通所有平台系统的流程。这时候每个系统都走上线流程肯定是来不及的。另外需要对这种公共配置进行统一管理，同时对其增减逻辑也做统一管理。这些信息变更时，需要自动通知到业务方的系统，而不需要人力介入（或者只需要很简单的介入，比如点击审核通过）。")]),t._v(" "),s("p",[t._v("除业务线管理之外，很多互联网公司会按照城市来铺展自己的业务。在某个城市未开城之前，理论上所有模块都应该认为带有该城市 id 的数据是脏数据并自动过滤掉。而如果业务开城，在系统中就应该自己把这个新的城市 id 自动加入到白名单中。这样业务流程便可以自动运转。")]),t._v(" "),s("p",[t._v("再举个例子，互联网公司的运营系统中会有各种类型的运营活动，有些运营活动推出后可能出现了超出预期的事件（比如公关危机），需要紧急将系统下线。这时候会用到一些开关来快速关闭相应的功能。或者快速将想要剔除的活动 id 从白名单中剔除。在 Web 章节中的 AB 测试一节中，我们也提到，有时需要有这样的系统来告诉我们当前需要放多少流量到相应的功能代码上。我们可以像那一节中，使用远程 RPC 来获知这些信息，但同时，也可以结合分布式配置系统，主动地拉取到这些信息。")]),t._v(" "),s("h2",{attrs:{id:"_6-6-2-使用-etcd-实现配置更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-2-使用-etcd-实现配置更新"}},[t._v("#")]),t._v(" 6.6.2 使用 etcd 实现配置更新")]),t._v(" "),s("p",[t._v("我们使用 etcd 实现一个简单的配置读取和动态更新流程，以此来了解线上的配置更新流程。")]),t._v(" "),s("h3",{attrs:{id:"_6-6-2-1-配置定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-2-1-配置定义"}},[t._v("#")]),t._v(" 6.6.2.1 配置定义")]),t._v(" "),s("p",[t._v("简单的配置，可以将内容完全存储在 etcd 中。比如：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("etcdctl get /configs/remote_config.json\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"addr"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:1080"')]),t._v(",\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aes_key"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"01B345B7A9ABC00F0123456789ABCDAF"')]),t._v(",\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" false,\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"secret"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(",\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"private_key_path"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(",\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cert_file_path"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_6-6-2-2-新建-etcd-client"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-2-2-新建-etcd-client"}},[t._v("#")]),t._v(" 6.6.2.2 新建 etcd client")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("cfg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tEndpoints"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("               "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:2379"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tTransport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("               client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DefaultTransport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tHeaderTimeoutPerRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("直接用 etcd client 包中的结构体初始化，没什么可说的。")]),t._v(" "),s("h3",{attrs:{id:"_6-6-2-3-配置获取"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-2-3-配置获取"}},[t._v("#")]),t._v(" 6.6.2.3 配置获取")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("resp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" kapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/your/config"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tlog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fatal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tlog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Get is done. Metadata is %q\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tlog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%q key has %q value\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("获取配置使用 etcd KeysAPI 的 "),s("code",[t._v("Get()")]),t._v(" 方法，比较简单。")]),t._v(" "),s("h3",{attrs:{id:"_6-6-2-4-配置更新订阅"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-2-4-配置更新订阅"}},[t._v("#")]),t._v(" 6.6.2.4 配置更新订阅")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("kapi "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewKeysAPI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nw "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" kapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Watcher")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/your/config"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tresp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tlog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tlog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"new values is"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("通过订阅 config 路径的变动事件，在该路径下内容发生变化时，客户端侧可以收到变动通知，并收到变动后的字符串值。")]),t._v(" "),s("h3",{attrs:{id:"_6-6-2-5-整合起来"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-2-5-整合起来"}},[t._v("#")]),t._v(" 6.6.2.5 整合起来")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"log"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"golang.org/x/net/context"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/coreos/etcd/client"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" configPath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("`/configs/remote_config.json`")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" kapi client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("KeysAPI\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" ConfigStruct "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tAddr           "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"addr"`')]),t._v("\n\tAesKey         "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"aes_key"`')]),t._v("\n\tHTTPS          "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"https"`')]),t._v("\n\tSecret         "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"secret"`')]),t._v("\n\tPrivateKeyPath "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"private_key_path"`')]),t._v("\n\tCertFilePath   "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"cert_file_path"`')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" appConfig ConfigStruct\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tcfg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tEndpoints"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("               "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:2379"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tTransport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("               client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DefaultTransport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tHeaderTimeoutPerRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\tc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cfg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tlog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fatal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tkapi "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewKeysAPI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("watchAndUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tw "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" kapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Watcher")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("configPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// watch 该节点下的每次变化")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tresp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tlog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fatal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\tlog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"new values is"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t\t\terr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Unmarshal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("appConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tlog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fatal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tresp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" kapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" configPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tlog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fatal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\terr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Unmarshal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("appConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tlog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fatal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ConfigStruct "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" appConfig\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// init your app")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("如果业务规模不大，使用本节中的例子就可以实现功能了。")]),t._v(" "),s("p",[t._v("这里只需要注意一点，我们在更新配置时，进行了一系列操作：watch 响应，json 解析，这些操作都不具备原子性。当单个业务请求流程中多次获取 config 时，有可能因为中途 config 发生变化而导致单个请求前后逻辑不一致。因此，在使用类似这样的方式来更新配置时，需要在单个请求的生命周期内使用同样的配置。具体实现方式可以是只在请求开始的时候获取一次配置，然后依次向下透传等等，具体情况具体分析。")]),t._v(" "),s("h2",{attrs:{id:"_6-6-3-配置膨胀"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-3-配置膨胀"}},[t._v("#")]),t._v(" 6.6.3 配置膨胀")]),t._v(" "),s("p",[t._v("随着业务的发展，配置系统本身所承载的压力可能也会越来越大，配置文件可能成千上万。客户端同样上万，将配置内容存储在 etcd 内部便不再合适了。随着配置文件数量的膨胀，除了存储系统本身的吞吐量问题，还有配置信息的管理问题。我们需要对相应的配置进行权限管理，需要根据业务量进行配置存储的集群划分。如果客户端太多，导致了配置存储系统无法承受瞬时大量的 QPS，那可能还需要在客户端侧进行缓存优化，等等。")]),t._v(" "),s("p",[t._v("这也就是为什么大公司都会针对自己的业务额外开发一套复杂配置系统的原因。")]),t._v(" "),s("h2",{attrs:{id:"_6-6-4-配置版本管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-4-配置版本管理"}},[t._v("#")]),t._v(" 6.6.4 配置版本管理")]),t._v(" "),s("p",[t._v("在配置管理过程中，难免出现用户误操作的情况，例如在更新配置时，输入了无法解析的配置。这种情况下我们可以通过配置校验来解决。")]),t._v(" "),s("p",[t._v("有时错误的配置可能不是格式上有问题，而是在逻辑上有问题。比如我们写 SQL 时少 select 了一个字段，更新配置时，不小心丢掉了 json 字符串中的一个 field 而导致程序无法理解新的配置而进入诡异的逻辑。为了快速止损，最快且最有效的办法就是进行版本管理，并支持按版本回滚。")]),t._v(" "),s("p",[t._v("在配置进行更新时，我们要为每份配置的新内容赋予一个版本号，并将修改前的内容和版本号记录下来，当发现新配置出问题时，能够及时地回滚回来。")]),t._v(" "),s("p",[t._v("常见的做法是，使用 MySQL 来存储配置文件或配置字符串的不同版本内容，在需要回滚时，只要进行简单的查询即可。")]),t._v(" "),s("h2",{attrs:{id:"_6-6-5-客户端容错"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-5-客户端容错"}},[t._v("#")]),t._v(" 6.6.5 客户端容错")]),t._v(" "),s("p",[t._v("在业务系统的配置被剥离到配置中心之后，并不意味着我们的系统可以高枕无忧了。当配置中心本身宕机时，我们也需要一定的容错能力，至少保证在其宕机期间，业务依然可以运转。这要求我们的系统能够在配置中心宕机时，也能拿到需要的配置信息。哪怕这些信息不够新。")]),t._v(" "),s("p",[t._v("具体来讲，在给业务提供配置读取的 SDK 时，最好能够将拿到的配置在业务机器的磁盘上也缓存一份。这样远程配置中心不可用时，可以直接用硬盘上的内容来做兜底。当重新连接上配置中心时，再把相应的内容进行更新。")]),t._v(" "),s("p",[t._v("加入缓存之后务必需要考虑的是数据一致性问题，当个别业务机器因为网络错误而与其它机器配置不一致时，我们也应该能够从监控系统中知晓。")]),t._v(" "),s("p",[t._v("我们使用一种手段解决了我们配置更新痛点，但同时可能因为使用的手段而带给我们新的问题。实际开发中，我们要对每一步决策多多思考，以使自己不在问题到来时手足无措。")])])}),[],!1,null,null,null);s.default=p.exports}}]);