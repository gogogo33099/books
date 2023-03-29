(window.webpackJsonp=window.webpackJsonp||[]).push([[860],{1344:function(t,r,e){"use strict";e.r(r);var a=e(14),n=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"typescript-入门教程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#typescript-入门教程"}},[t._v("#")]),t._v(" TypeScript 入门教程")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/xcatliu/typescript-tutorial/actions",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://github.com/xcatliu/typescript-tutorial/workflows/gh-pages/badge.svg",alt:"Actions Status"}}),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("从 JavaScript 程序员的角度总结思考，循序渐进的理解 TypeScript。")]),t._v(" "),r("h2",{attrs:{id:"关于本书"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#关于本书"}},[t._v("#")]),t._v(" 关于本书")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://ts.xcatliu.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线阅读"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/xcatliu/typescript-tutorial",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub 地址"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("作者："),r("a",{attrs:{href:"https://github.com/xcatliu/",target:"_blank",rel:"noopener noreferrer"}},[t._v("xcatliu"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("本网站使用 "),r("a",{attrs:{href:"https://github.com/xcatliu/pagic",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pagic"),r("OutboundLink")],1),t._v(" 构建")])]),t._v(" "),r("p",[t._v("本书是作者在学习 "),r("a",{attrs:{href:"http://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScript"),r("OutboundLink")],1),t._v(" 后整理的学习笔记。")]),t._v(" "),r("p",[t._v("随着对 TypeScript 理解的加深和 TypeScript 社区的发展，本书也会做出相应的更新，欢迎大家 "),r("a",{attrs:{href:"https://github.com/xcatliu/typescript-tutorial",target:"_blank",rel:"noopener noreferrer"}},[t._v("Star 收藏"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("ul",[r("li",[t._v("发现文章内容有问题，可以直接在页面下方评论")]),t._v(" "),r("li",[t._v("对项目的建议，可以"),r("a",{attrs:{href:"https://github.com/xcatliu/typescript-tutorial/issues/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("提交 issue"),r("OutboundLink")],1),t._v(" 向作者反馈")]),t._v(" "),r("li",[t._v("欢迎直接提交 pull-request 参与贡献")])]),t._v(" "),r("h2",{attrs:{id:"为什么要写本书"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么要写本书"}},[t._v("#")]),t._v(" 为什么要写本书")]),t._v(" "),r("p",[t._v("TypeScript 虽然有"),r("a",{attrs:{href:"http://www.typescriptlang.org/docs/handbook/basic-types.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方手册"),r("OutboundLink")],1),t._v("及其"),r("a",{attrs:{href:"https://zhongsp.gitbook.io/typescript-handbook/",target:"_blank",rel:"noopener noreferrer"}},[t._v("非官方中文版"),r("OutboundLink")],1),t._v("，但是它每一章都希望能详尽的描述一个概念，导致前面的章节就会包含很多后面才会学习到的内容，而有些本该一开始就了解的基础知识却在后面才会涉及。如果是初学者，可能需要阅读多次才能理解。所以它更适合用来查阅，而不是学习。")]),t._v(" "),r("p",[t._v("与官方手册不同，本书着重于从 JavaScript 程序员的角度总结思考，循序渐进的理解 TypeScript，希望能给大家一些帮助和启示。")]),t._v(" "),r("p",[t._v("由于一些知识点与官方手册重合度很高，本书会在相应章节推荐直接阅读中文手册。")]),t._v(" "),r("h2",{attrs:{id:"关于-typescript"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#关于-typescript"}},[t._v("#")]),t._v(" 关于 TypeScript")]),t._v(" "),r("p",[r("a",{attrs:{href:"http://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScript"),r("OutboundLink")],1),t._v(" 是 JavaScript 的一个超集，主要提供了"),r("strong",[t._v("类型系统")]),t._v("和"),r("strong",[t._v("对 ES6 的支持")]),t._v("，它由 Microsoft 开发，代码"),r("a",{attrs:{href:"https://github.com/Microsoft/TypeScript",target:"_blank",rel:"noopener noreferrer"}},[t._v("开源于 GitHub"),r("OutboundLink")],1),t._v(" 上。")]),t._v(" "),r("p",[t._v("它的第一个版本发布于 2012 年 10 月，经历了多次更新后，现在已成为前端社区中不可忽视的力量，不仅在 Microsoft 内部得到广泛运用，而且 Google 开发的 "),r("a",{attrs:{href:"https://angular.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Angular"),r("OutboundLink")],1),t._v(" 从 2.0 开始就使用了 TypeScript 作为开发语言，"),r("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue"),r("OutboundLink")],1),t._v(" 3.0 也使用 TypeScript 进行了重构。")]),t._v(" "),r("h2",{attrs:{id:"适合人群"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#适合人群"}},[t._v("#")]),t._v(" 适合人群")]),t._v(" "),r("p",[t._v("本书适合以下人群")]),t._v(" "),r("ul",[r("li",[t._v("熟悉 JavaScript，至少阅读过一遍"),r("a",{attrs:{href:"https://book.douban.com/subject/10546125/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《JavaScript 高级程序设计》"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("了解 ES6，推荐阅读 "),r("a",{attrs:{href:"http://es6.ruanyifeng.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ECMAScript 6 入门"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("了解 Node.js，会用 npm 安装及使用一些工具")]),t._v(" "),r("li",[t._v("想了解 TypeScript 或者想对 TypeScript 有更深的理解")])]),t._v(" "),r("p",[t._v("本书"),r("strong",[t._v("不适合")]),t._v("以下人群")]),t._v(" "),r("ul",[r("li",[t._v("没有系统学习过 JavaScript")]),t._v(" "),r("li",[t._v("已经能够很熟练的运用 TypeScript")])]),t._v(" "),r("h2",{attrs:{id:"评价"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#评价"}},[t._v("#")]),t._v(" 评价")]),t._v(" "),r("blockquote",[r("p",[t._v("《TypeScript 入门教程》全面介绍了 TypeScript 强大的类型系统，完整而简洁，示例丰富，比官方文档更易读，非常适合作为初学者学习 TypeScript 的第一本书。")]),t._v(" "),r("p",[t._v("—— "),r("a",{attrs:{href:"https://github.com/ruanyf",target:"_blank",rel:"noopener noreferrer"}},[t._v("阮一峰"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"版权许可"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#版权许可"}},[t._v("#")]),t._v(" 版权许可")]),t._v(" "),r("p",[t._v("本书采用「保持署名—非商用」创意共享 4.0 许可证。")]),t._v(" "),r("p",[t._v("只要保持原作者署名和非商用，您可以自由地阅读、分享、修改本书。")]),t._v(" "),r("p",[t._v("详细的法律条文请参见"),r("a",{attrs:{href:"http://creativecommons.org/licenses/by-nc/4.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("创意共享"),r("OutboundLink")],1),t._v("网站。")]),t._v(" "),r("h2",{attrs:{id:"相关资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#相关资料"}},[t._v("#")]),t._v(" 相关资料")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScript 官网"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://www.typescriptlang.org/docs/handbook/basic-types.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Handbook"),r("OutboundLink")],1),t._v("（"),r("a",{attrs:{href:"https://zhongsp.gitbook.io/typescript-handbook/",target:"_blank",rel:"noopener noreferrer"}},[t._v("中文版"),r("OutboundLink")],1),t._v("）")]),t._v(" "),r("li",[r("a",{attrs:{href:"http://es6.ruanyifeng.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ECMAScript 6 入门"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=n.exports}}]);