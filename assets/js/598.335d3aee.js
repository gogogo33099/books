(window.webpackJsonp=window.webpackJsonp||[]).push([[598],{1068:function(t,o,e){"use strict";e.r(o);var _=e(14),a=Object(_.a)({},(function(){var t=this,o=t._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"_9-7-使用-go-install-安装自定义包"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_9-7-使用-go-install-安装自定义包"}},[t._v("#")]),t._v(" 9.7 使用 go install 安装自定义包")]),t._v(" "),o("p",[t._v("go install 是 Go 中自动包安装工具：如需要将包安装到本地它会从远端仓库下载包：检出、编译和安装一气呵成。")]),t._v(" "),o("p",[t._v("在包安装前的先决条件是要自动处理包自身依赖关系的安装。被依赖的包也会安装到子目录下，但是没有文档和示例：可以到网上浏览。")]),t._v(" "),o("p",[t._v("go install 使用了 GOPATH 变量（详见"),o("RouterLink",{attrs:{to:"/the-way-to-go/02.2.html"}},[t._v("第 2.2 节")]),t._v("）。")],1),t._v(" "),o("p",[t._v("远端包（详见"),o("RouterLink",{attrs:{to:"/the-way-to-go/09.5.html"}},[t._v("第 9.5 节")]),t._v("）：")],1),t._v(" "),o("p",[t._v("假设我们要安装一个有趣的包 "),o("code",[t._v("tideland")]),t._v("（它包含了许多帮助示例，参见"),o("a",{attrs:{href:"http://code.google.com/p/tideland-cgl",target:"_blank",rel:"noopener noreferrer"}},[t._v("项目主页"),o("OutboundLink")],1),t._v("）。")]),t._v(" "),o("p",[t._v("因为我们需要创建目录在 Go 安装目录下，所以我们需要使用 root 或者 su 的身份执行命令。")]),t._v(" "),o("p",[t._v("确保 Go 环境变量已经设置在 root 用户下的 "),o("code",[t._v("./bashrc")]),t._v(" 文件中。")]),t._v(" "),o("p",[t._v("使用命令安装："),o("code",[t._v("go install tideland-cgl.googlecode.com/hg")]),t._v("。")]),t._v(" "),o("p",[t._v("可执行文件 "),o("code",[t._v("hg.a")]),t._v(" 将被放到 "),o("code",[t._v("$GOROOT/pkg/linux_amd64/tideland-cgl.googlecode.com")]),t._v(" 目录下，源码文件被放置在 "),o("code",[t._v("$GOROOT/src/tideland-cgl.googlecode.com/hg")]),t._v(" 目录下，同样有个 "),o("code",[t._v("hg.a")]),t._v(" 放置在 "),o("code",[t._v("_obj")]),t._v(" 的子目录下。")]),t._v(" "),o("p",[t._v("现在就可以在 go 代码中使用这个包中的功能了，例如使用包名 cgl 导入：")]),t._v(" "),o("div",{staticClass:"language-go extra-class"},[o("pre",{pre:!0,attrs:{class:"language-go"}},[o("code",[o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" cgl "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tideland-cgl.googlecode.com/hg"')]),t._v("\n")])])]),o("p",[t._v("从 Go1 起 go install 安装 Google Code 的导入路径形式是："),o("code",[t._v('"code.google.com/p/tideland-cgl"')])]),t._v(" "),o("p",[t._v("升级到新的版本：")]),t._v(" "),o("p",[t._v("更新到新版本的 Go 之后本地安装包的二进制文件将全被删除。如果你想更新，重编译、重安装所有的 go 安装包可以使用："),o("code",[t._v("go install -a")]),t._v("。")]),t._v(" "),o("p",[t._v("go 的版本发布的很频繁，所以需要注意发布版本和包的兼容性。go1 之后都是自己编译自己了。")]),t._v(" "),o("p",[t._v("go install 同样可以使用 go install 编译链接并安装本地自己的包（详见"),o("RouterLink",{attrs:{to:"/the-way-to-go/09.8.html"}},[t._v("第 9.8.2 节")]),t._v("）。")],1),t._v(" "),o("p",[t._v("更多信息可以在 "),o("a",{attrs:{href:"http://golang.org/cmd/go/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方网站"),o("OutboundLink")],1),t._v(" 找到。")]),t._v(" "),o("h2",{attrs:{id:"链接"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[t._v("#")]),t._v(" 链接")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/the-way-to-go/directory.html"}},[t._v("目录")])],1),t._v(" "),o("li",[t._v("上一节："),o("RouterLink",{attrs:{to:"/the-way-to-go/09.6.html"}},[t._v("为自定义包使用 godoc")])],1),t._v(" "),o("li",[t._v("下一节："),o("RouterLink",{attrs:{to:"/the-way-to-go/09.8.html"}},[t._v("自定义包的目录结构、go install 和 go test")])],1)])])}),[],!1,null,null,null);o.default=a.exports}}]);