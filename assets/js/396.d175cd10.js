(window.webpackJsonp=window.webpackJsonp||[]).push([[396],{837:function(a,t,s){"use strict";s.r(t);var n=s(14),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"navigator-对象-screen-对象。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#navigator-对象-screen-对象。"}},[a._v("#")]),a._v(" Navigator 对象，Screen 对象。")]),a._v(" "),t("p",[t("code",[a._v("window.navigator")]),a._v("属性指向一个包含浏览器和系统信息的 Navigator 对象。脚本通过这个属性了解用户的环境信息。")]),a._v(" "),t("h2",{attrs:{id:"navigator-对象的属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#navigator-对象的属性"}},[a._v("#")]),a._v(" Navigator 对象的属性")]),a._v(" "),t("h3",{attrs:{id:"navigator-useragent"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#navigator-useragent"}},[a._v("#")]),a._v(" Navigator.userAgent")]),a._v(" "),t("p",[t("code",[a._v("navigator.userAgent")]),a._v("属性返回浏览器的 User Agent 字符串，表示用户设备信息，包含了浏览器的厂商、版本、操作系统等信息。")]),a._v(" "),t("p",[a._v("下面是 Chrome 浏览器的"),t("code",[a._v("userAgent")]),a._v("。")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("navigator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("userAgent\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('// "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.57 Safari/537.36"')]),a._v("\n")])])]),t("p",[a._v("通过"),t("code",[a._v("userAgent")]),a._v("属性识别浏览器，不是一个好办法。因为必须考虑所有的情况（不同的浏览器，不同的版本），非常麻烦，而且用户可以改变这个字符串。这个字符串的格式并无统一规定，也无法保证未来的适用性，各种上网设备层出不穷，难以穷尽。所以，现在一般不再通过它识别浏览器了，而是使用“功能识别”方法，即逐一测试当前浏览器是否支持要用到的 JavaScript 功能。")]),a._v(" "),t("p",[a._v("不过，通过"),t("code",[a._v("userAgent")]),a._v("可以大致准确地识别手机浏览器，方法就是测试是否包含"),t("code",[a._v("mobi")]),a._v("字符串。")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" ua "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" navigator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("userAgent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("toLowerCase")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[a._v("mobi")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ua"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 手机浏览器")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 非手机浏览器")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("如果想要识别所有移动设备的浏览器，可以测试更多的特征字符串。")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[a._v("mobi|android|touch|mini")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ua"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("h3",{attrs:{id:"navigator-plugins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#navigator-plugins"}},[a._v("#")]),a._v(" Navigator.plugins")]),a._v(" "),t("p",[t("code",[a._v("Navigator.plugins")]),a._v("属性返回一个类似数组的对象，成员是 Plugin 实例对象，表示浏览器安装的插件，比如 Flash、ActiveX 等。")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" pluginsLength "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" navigator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("plugins"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("length"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" pluginsLength"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" i"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("navigator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("plugins"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("navigator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("plugins"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("filename"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("navigator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("plugins"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("description"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("navigator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("plugins"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("h3",{attrs:{id:"navigator-platform"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#navigator-platform"}},[a._v("#")]),a._v(" Navigator.platform")]),a._v(" "),t("p",[t("code",[a._v("Navigator.platform")]),a._v("属性返回用户的操作系统信息，比如"),t("code",[a._v("MacIntel")]),a._v("、"),t("code",[a._v("Win32")]),a._v("、"),t("code",[a._v("Linux x86_64")]),a._v("等 。")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("navigator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("platform\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('// "Linux x86_64"')]),a._v("\n")])])]),t("h3",{attrs:{id:"navigator-online"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#navigator-online"}},[a._v("#")]),a._v(" Navigator.onLine")]),a._v(" "),t("p",[t("code",[a._v("navigator.onLine")]),a._v("属性返回一个布尔值，表示用户当前在线还是离线（浏览器断线）。")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("navigator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("onLine "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// true")]),a._v("\n")])])]),t("p",[a._v("有时，浏览器可以连接局域网，但是局域网不能连通外网。这时，有的浏览器的"),t("code",[a._v("onLine")]),a._v("属性会返回"),t("code",[a._v("true")]),a._v("，所以不能假定只要是"),t("code",[a._v("true")]),a._v("，用户就一定能访问互联网。不过，如果是"),t("code",[a._v("false")]),a._v("，可以断定用户一定离线。")]),a._v(" "),t("p",[a._v("用户变成在线会触发"),t("code",[a._v("online")]),a._v("事件，变成离线会触发"),t("code",[a._v("offline")]),a._v("事件，可以通过"),t("code",[a._v("window.ononline")]),a._v("和"),t("code",[a._v("window.onoffline")]),a._v("指定这两个事件的回调函数。")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("addEventListener")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'offline'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("e")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'offline'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nwindow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("addEventListener")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'online'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("e")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'online'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h3",{attrs:{id:"navigator-language-navigator-languages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#navigator-language-navigator-languages"}},[a._v("#")]),a._v(" Navigator.language，Navigator.languages")]),a._v(" "),t("p",[t("code",[a._v("Navigator.language")]),a._v("属性返回一个字符串，表示浏览器的首选语言。该属性只读。")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("navigator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("language "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('// "en"')]),a._v("\n")])])]),t("p",[t("code",[a._v("Navigator.languages")]),a._v("属性返回一个数组，表示用户可以接受的语言。"),t("code",[a._v("Navigator.language")]),a._v("总是这个数组的第一个成员。HTTP 请求头信息的"),t("code",[a._v("Accept-Language")]),a._v("字段，就来自这个数组。")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("navigator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("languages  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('// ["en-US", "en", "zh-CN", "zh", "zh-TW"]')]),a._v("\n")])])]),t("p",[a._v("如果这个属性发生变化，就会在"),t("code",[a._v("window")]),a._v("对象上触发"),t("code",[a._v("languagechange")]),a._v("事件。")]),a._v(" "),t("h3",{attrs:{id:"navigator-geolocation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#navigator-geolocation"}},[a._v("#")]),a._v(" Navigator.geolocation")]),a._v(" "),t("p",[t("code",[a._v("Navigator.geolocation")]),a._v("属性返回一个 Geolocation 对象，包含用户地理位置的信息。注意，该 API 只有在 HTTPS 协议下可用，否则调用下面方法时会报错。")]),a._v(" "),t("p",[a._v("Geolocation 对象提供下面三个方法。")]),a._v(" "),t("ul",[t("li",[a._v("Geolocation.getCurrentPosition()：得到用户的当前位置")]),a._v(" "),t("li",[a._v("Geolocation.watchPosition()：监听用户位置变化")]),a._v(" "),t("li",[a._v("Geolocation.clearWatch()：取消"),t("code",[a._v("watchPosition()")]),a._v("方法指定的监听函数")])]),a._v(" "),t("p",[a._v("注意，调用这三个方法时，浏览器会跳出一个对话框，要求用户给予授权。")]),a._v(" "),t("h3",{attrs:{id:"navigator-cookieenabled"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#navigator-cookieenabled"}},[a._v("#")]),a._v(" Navigator.cookieEnabled")]),a._v(" "),t("p",[t("code",[a._v("navigator.cookieEnabled")]),a._v("属性返回一个布尔值，表示浏览器的 Cookie 功能是否打开。")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("navigator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cookieEnabled "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// true")]),a._v("\n")])])]),t("p",[a._v("注意，这个属性反映的是浏览器总的特性，与是否储存某个具体的网站的 Cookie 无关。用户可以设置某个网站不得储存 Cookie，这时"),t("code",[a._v("cookieEnabled")]),a._v("返回的还是"),t("code",[a._v("true")]),a._v("。")]),a._v(" "),t("h2",{attrs:{id:"navigator-对象的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#navigator-对象的方法"}},[a._v("#")]),a._v(" Navigator 对象的方法")]),a._v(" "),t("h3",{attrs:{id:"navigator-javaenabled"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#navigator-javaenabled"}},[a._v("#")]),a._v(" Navigator.javaEnabled()")]),a._v(" "),t("p",[t("code",[a._v("navigator.javaEnabled()")]),a._v("方法返回一个布尔值，表示浏览器是否能运行 Java Applet 小程序。")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("navigator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("javaEnabled")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// false")]),a._v("\n")])])]),t("h3",{attrs:{id:"navigator-sendbeacon"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#navigator-sendbeacon"}},[a._v("#")]),a._v(" Navigator.sendBeacon()")]),a._v(" "),t("p",[t("code",[a._v("Navigator.sendBeacon()")]),a._v("方法用于向服务器异步发送数据，详见《XMLHttpRequest 对象》一章。")]),a._v(" "),t("h2",{attrs:{id:"navigator-的实验性属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#navigator-的实验性属性"}},[a._v("#")]),a._v(" Navigator 的实验性属性")]),a._v(" "),t("p",[a._v("Navigator 对象有一些实验性属性，在部分浏览器可用。")]),a._v(" "),t("h3",{attrs:{id:"navigator-devicememory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#navigator-devicememory"}},[a._v("#")]),a._v(" Navigator.deviceMemory")]),a._v(" "),t("p",[t("code",[a._v("navigator.deviceMemory")]),a._v("属性返回当前计算机的内存数量（单位为 GB）。该属性只读，只在 HTTPS 环境下可用。")]),a._v(" "),t("p",[a._v("它的返回值是一个近似值，四舍五入到最接近的2的幂，通常是 0.25、0.5、1、2、4、8。实际内存超过 8GB，也返回"),t("code",[a._v("8")]),a._v("。")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("navigator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("deviceMemory "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("await")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./costly-module.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("上面示例中，只有当前内存大于 1GB，才加载大型的脚本。")]),a._v(" "),t("h3",{attrs:{id:"navigator-hardwareconcurrency"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#navigator-hardwareconcurrency"}},[a._v("#")]),a._v(" Navigator.hardwareConcurrency")]),a._v(" "),t("p",[t("code",[a._v("navigator.hardwareConcurrency")]),a._v("属性返回用户计算机上可用的逻辑处理器的数量。该属性只读。")]),a._v(" "),t("p",[a._v("现代计算机的 CPU 有多个物理核心，每个物理核心有时支持一次运行多个线程。因此，四核 CPU 可以提供八个逻辑处理器核心。")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("navigator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("hardwareConcurrency "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("await")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./costly-module.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("上面示例中，可用的逻辑处理器大于4，才会加载大型脚本。")]),a._v(" "),t("p",[a._v("该属性通过用于创建 Web Worker，每个可用的逻辑处理器都创建一个 Worker。")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" workerList "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("navigator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("hardwareConcurrency"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" i"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" newWorker "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("worker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Worker")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'cpuworker.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("inUse")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  workerList"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("push")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("newWorker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("上面示例中，有多少个可用的逻辑处理器，就创建多少个 Web Worker。")]),a._v(" "),t("h3",{attrs:{id:"navigator-connection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#navigator-connection"}},[a._v("#")]),a._v(" Navigator.connection")]),a._v(" "),t("p",[t("code",[a._v("navigator.connection")]),a._v("属性返回一个对象，包含当前网络连接的相关信息。")]),a._v(" "),t("ul",[t("li",[a._v("downlink：有效带宽估计值（单位：兆比特/秒，Mbps），四舍五入到每秒 25KB 的最接近倍数。")]),a._v(" "),t("li",[a._v("downlinkMax：当前连接的最大下行链路速度（单位：兆比特每秒，Mbps）。")]),a._v(" "),t("li",[a._v("effectiveType：返回连接的等效类型，可能的值为"),t("code",[a._v("slow-2g")]),a._v("、"),t("code",[a._v("2g")]),a._v("、"),t("code",[a._v("3g")]),a._v("、"),t("code",[a._v("4g")]),a._v("。")]),a._v(" "),t("li",[a._v("rtt：当前连接的估计有效往返时间，四舍五入到最接近的25毫秒的倍数。")]),a._v(" "),t("li",[a._v("saveData：用户是否设置了浏览器的减少数据使用量选项（比如不加载图片），返回"),t("code",[a._v("true")]),a._v("或者"),t("code",[a._v("false")]),a._v("。")]),a._v(" "),t("li",[a._v("type：当前连接的介质类型，可能的值为"),t("code",[a._v("bluetooth")]),a._v("、"),t("code",[a._v("cellular")]),a._v("、"),t("code",[a._v("ethernet")]),a._v("、"),t("code",[a._v("none")]),a._v("、"),t("code",[a._v("wifi")]),a._v("、"),t("code",[a._v("wimax")]),a._v("、"),t("code",[a._v("other")]),a._v("、"),t("code",[a._v("unknown")]),a._v("。")])]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("navigator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("connection"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("effectiveType "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("===")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'4g'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("await")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./costly-module.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("上面示例中，如果网络连接是 4G，则加载大型脚本。")]),a._v(" "),t("h2",{attrs:{id:"screen-对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#screen-对象"}},[a._v("#")]),a._v(" Screen 对象")]),a._v(" "),t("p",[a._v("Screen 对象表示当前窗口所在的屏幕，提供显示设备的信息。"),t("code",[a._v("window.screen")]),a._v("属性指向这个对象。")]),a._v(" "),t("p",[a._v("该对象有下面的属性。")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("Screen.height")]),a._v("：浏览器窗口所在的屏幕的高度（单位像素）。除非调整显示器的分辨率，否则这个值可以看作常量，不会发生变化。显示器的分辨率与浏览器设置无关，缩放网页并不会改变分辨率。")]),a._v(" "),t("li",[t("code",[a._v("Screen.width")]),a._v("：浏览器窗口所在的屏幕的宽度（单位像素）。")]),a._v(" "),t("li",[t("code",[a._v("Screen.availHeight")]),a._v("：浏览器窗口可用的屏幕高度（单位像素）。因为部分空间可能不可用，比如系统的任务栏或者 Mac 系统屏幕底部的 Dock 区，这个属性等于"),t("code",[a._v("height")]),a._v("减去那些被系统组件的高度。")]),a._v(" "),t("li",[t("code",[a._v("Screen.availWidth")]),a._v("：浏览器窗口可用的屏幕宽度（单位像素）。")]),a._v(" "),t("li",[t("code",[a._v("Screen.pixelDepth")]),a._v("：整数，表示屏幕的色彩位数，比如"),t("code",[a._v("24")]),a._v("表示屏幕提供24位色彩。")]),a._v(" "),t("li",[t("code",[a._v("Screen.colorDepth")]),a._v("："),t("code",[a._v("Screen.pixelDepth")]),a._v("的别名。严格地说，colorDepth 表示应用程序的颜色深度，pixelDepth 表示屏幕的颜色深度，绝大多数情况下，它们都是同一件事。")]),a._v(" "),t("li",[t("code",[a._v("Screen.orientation")]),a._v("：返回一个对象，表示屏幕的方向。该对象的"),t("code",[a._v("type")]),a._v("属性是一个字符串，表示屏幕的具体方向，"),t("code",[a._v("landscape-primary")]),a._v("表示横放，"),t("code",[a._v("landscape-secondary")]),a._v("表示颠倒的横放，"),t("code",[a._v("portrait-primary")]),a._v("表示竖放，"),t("code",[a._v("portrait-secondary")]),a._v("表示颠倒的竖放。")])]),a._v(" "),t("p",[a._v("下面是"),t("code",[a._v("Screen.orientation")]),a._v("的例子。")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("screen"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("orientation\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('// { angle: 0, type: "landscape-primary", onchange: null }')]),a._v("\n")])])]),t("p",[a._v("下面的例子保证屏幕分辨率大于 1024 x 768。")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("screen"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("width "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1024")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("screen"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("height "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("768")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 分辨率不低于 1024x768")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("下面是根据屏幕的宽度，将用户导向不同网页的代码。")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("screen"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("width "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("800")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("screen"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("height "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("600")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("location"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("replace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'small.html'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("location"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("replace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'wide.html'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);