(window.webpackJsonp=window.webpackJsonp||[]).push([[758],{1240:function(t,s,e){"use strict";e.r(s);var a=e(14),n=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"发布"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布"}},[t._v("#")]),t._v(" 发布")]),t._v(" "),s("p",[t._v("现在我们已经按照指南里的步骤写好了一个声明文件，是时候把它发布到 npm 了。\n有两种主要方式用来将声明文件发布到 npm：")]),t._v(" "),s("ol",[s("li",[t._v("与你的 npm 包捆绑在一起，或")]),t._v(" "),s("li",[t._v("发布到 npm 上的"),s("a",{attrs:{href:"https://www.npmjs.com/~types",target:"_blank",rel:"noopener noreferrer"}},[t._v("@types organization"),s("OutboundLink")],1),t._v("。")])]),t._v(" "),s("p",[t._v("如果声明文件是由你写的源码生成的，那么就将声明文件与源码一起发布。\nTypeScript 工程和 JavaScript 工程都可以使用"),s("a",{attrs:{href:"/tsconfig#declaration"}},[s("code",[t._v("--declaration")])]),t._v("选项来生成声明文件。")]),t._v(" "),s("p",[t._v("否则，我们推荐你将声明文件提交到 DefinitelyTyped，它会被发布到 npm 的"),s("code",[t._v("@types")]),t._v("里。")]),t._v(" "),s("h2",{attrs:{id:"包含声明文件到你的-npm-包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#包含声明文件到你的-npm-包"}},[t._v("#")]),t._v(" 包含声明文件到你的 npm 包")]),t._v(" "),s("p",[t._v("如果你的包有一个主"),s("code",[t._v(".js")]),t._v("文件，你还需要在"),s("code",[t._v("package.json")]),t._v("里指定主声明文件。\n设置"),s("code",[t._v("types")]),t._v("属性指向捆绑在一起的声明文件。 比如：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"awesome"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"author"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vandelay Industries"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"main"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./lib/main.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"types"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./lib/main.d.ts"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("注意"),s("code",[t._v('"typings"')]),t._v("与"),s("code",[t._v('"types"')]),t._v("具有相同的意义，也可以使用它。")]),t._v(" "),s("p",[t._v("同样要注意的是如果主声明文件名是"),s("code",[t._v("index.d.ts")]),t._v("并且位置在包的根目录里（与"),s("code",[t._v("index.js")]),t._v("并列），你就不需要使用"),s("code",[t._v('"types"')]),t._v("属性指定了。")]),t._v(" "),s("h2",{attrs:{id:"依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#依赖"}},[t._v("#")]),t._v(" 依赖")]),t._v(" "),s("p",[t._v("所有的依赖是由 npm 管理的。\n确保所依赖的声明包都在"),s("code",[t._v("package.json")]),t._v("的"),s("code",[t._v('"dependencies"')]),t._v("里指明了。\n比如，假设我们写了一个包，它依赖于 Browserify 和 TypeScript。")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"browserify-typescript-extension"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"author"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vandelay Industries"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"main"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./lib/main.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"types"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./lib/main.d.ts"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dependencies"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"browserify"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"latest"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@types/browserify"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"latest"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"typescript"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"next"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这里，我们的包依赖于"),s("code",[t._v("browserify")]),t._v("和"),s("code",[t._v("typescript")]),t._v("包。 "),s("code",[t._v("browserify")]),t._v("没有把它的声明文件捆绑在它的 npm 包里，所以我们需要依赖于"),s("code",[t._v("@types/browserify")]),t._v("得到它的声明文件。\n而"),s("code",[t._v("typescript")]),t._v("则相反，它把声明文件放在了 npm 包里，因此我们不需要依赖额外的包。")]),t._v(" "),s("p",[t._v("我们的包要从这两个包里暴露出声明文件，因此"),s("code",[t._v("browserify-typescript-extension")]),t._v("的用户也需要这些依赖。 正因此，我们使用"),s("code",[t._v('"dependencies"')]),t._v("而不是"),s("code",[t._v('"devDependencies"')]),t._v("，否则用户将需要手动安装那些包。 如果我们只是在写一个命令行应用，并且我们的包不会被当做一个库使用的话，那么就可以使用"),s("code",[t._v("devDependencies")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"危险信号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#危险信号"}},[t._v("#")]),t._v(" 危险信号")]),t._v(" "),s("h3",{attrs:{id:"reference-path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference-path"}},[t._v("#")]),t._v(" "),s("code",[t._v('/// <reference path="..." />')])]),t._v(" "),s("p",[s("em",[t._v("不要")]),t._v("在声明文件里使用"),s("code",[t._v('/// <reference path="..." />')]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/// <reference path="../typescript/lib/typescriptServices.d.ts" />')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),s("p",[s("em",[t._v("应该")]),t._v("使用"),s("code",[t._v('/// <reference types="..." />')]),t._v("代替")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/// <reference types="typescript" />')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),s("p",[t._v("务必阅读"),s("RouterLink",{attrs:{to:"/ts-manual/declaration-files/library-structures.html#利用依赖"}},[t._v("利用依赖")]),t._v("一节了解详情。")],1),t._v(" "),s("h3",{attrs:{id:"打包所依赖的声明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包所依赖的声明"}},[t._v("#")]),t._v(" 打包所依赖的声明")]),t._v(" "),s("p",[t._v("如果你的类型声明依赖于另一个包：")]),t._v(" "),s("ul",[s("li",[s("em",[t._v("不要")]),t._v("把依赖的包放进你的包里，保持它们在各自的文件里。")]),t._v(" "),s("li",[s("em",[t._v("不要")]),t._v("将声明拷贝到你的包里。")]),t._v(" "),s("li",[s("em",[t._v("应该")]),t._v("依赖在 npm 上的类型声明包，如果依赖包没包含它自己的声明文件的话。")])]),t._v(" "),s("h2",{attrs:{id:"使用typesversions选择版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用typesversions选择版本"}},[t._v("#")]),t._v(" 使用"),s("code",[t._v("typesVersions")]),t._v("选择版本")]),t._v(" "),s("p",[t._v("当 TypeScript 打开一个"),s("code",[t._v("package.json")]),t._v("文件来决定要读取哪个文件，它首先会检查"),s("code",[t._v("typesVersions")]),t._v("字段。")]),t._v(" "),s("p",[t._v("带有"),s("code",[t._v("typesVersions")]),t._v("字段的"),s("code",[t._v("package.json")]),t._v("可能如下：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"package-name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"types"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./index.d.ts"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"typesVersions"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('">=3.1"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"*"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ts3.1/*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("该"),s("code",[t._v("package.json")]),t._v("告诉 TypeScript 去检查当前正在运行的 TypeScript 版本。\n如果是 3.1 及以上版本，则会相对于"),s("code",[t._v("package.json")]),t._v("的位置来读取"),s("code",[t._v("ts3.1")]),t._v("目录的内容。\n这就是"),s("code",[t._v('{ "*": ["ts3.1/*"] }')]),t._v("的含义 - 如果你熟悉路径映射的话，它们是相似的工作方式。")]),t._v(" "),s("p",[t._v("上例中，如果我们从"),s("code",[t._v('"package-name"')]),t._v("导入，当 TypeScript 版本为 3.1 时，TypeScript 会尝试解析"),s("code",[t._v("[...]/node_modules/package-name/ts3.1/index.d.ts")]),t._v("（及其它相应路径）。\n如果导入的是"),s("code",[t._v("package-name/foo")]),t._v("，那么会尝试加载"),s("code",[t._v("[...]/node_modules/package-name/ts3.1/foo.d.ts")]),t._v("和"),s("code",[t._v("[...]/node_modules/package-name/ts3.1/foo/index.d.ts")]),t._v("。")]),t._v(" "),s("p",[t._v("那么如果不是在 TypeScript 3.1 环境中呢？\n如果"),s("code",[t._v("typesVersions")]),t._v("中的每个字段都无法匹配，TypeScript 会回退到"),s("code",[t._v("types")]),t._v("字段，因此在 TypeScript 3.0 及之前的版本中会加载"),s("code",[t._v("[...]/node_modules/package-name/index.d.ts")]),t._v("文件。")]),t._v(" "),s("h2",{attrs:{id:"匹配行为"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#匹配行为"}},[t._v("#")]),t._v(" 匹配行为")]),t._v(" "),s("p",[t._v("TypeScript 是根据 Node.js 的"),s("a",{attrs:{href:"https://github.com/npm/node-semver#ranges",target:"_blank",rel:"noopener noreferrer"}},[t._v("语言化版本"),s("OutboundLink")],1),t._v("来进行编译器及语言版本匹配的。")]),t._v(" "),s("h2",{attrs:{id:"存在多个字段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存在多个字段"}},[t._v("#")]),t._v(" 存在多个字段")]),t._v(" "),s("p",[s("code",[t._v("typesVersions")]),t._v("支持同时指定多个字段，每个字段都指定了匹配的范围。")]),t._v(" "),s("div",{staticClass:"language-json tsconfig extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"package-name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"types"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./index.d.ts"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"typesVersions"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('">=3.2"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"*"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ts3.2/*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('">=3.1"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"*"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ts3.1/*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("由于指定的范围有发生重叠的潜在风险，因此声明文件的解析与指定的顺序是相关的。\n也就是说，虽然"),s("code",[t._v(">=3.2")]),t._v("和"),s("code",[t._v(">=3.1")]),t._v("都匹配 TypeScript 3.2 及以上版本，但调换顺序后会有不同的行为，因此上例不同于下例。")]),t._v(" "),s("div",{staticClass:"language-jsonc tsconfig extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n    "name": "package-name",\n    "version": "1.0",\n    "types": "./index.d.ts",\n    "typesVersions": {\n        // NOTE: this doesn\'t work!\n        ">=3.1": { "*": ["ts3.1/*"] },\n        ">=3.2": { "*": ["ts3.2/*"] }\n    }\n}\n')])])]),s("h2",{attrs:{id:"发布到-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布到-types"}},[t._v("#")]),t._v(" 发布到"),s("a",{attrs:{href:"https://www.npmjs.com/~types",target:"_blank",rel:"noopener noreferrer"}},[t._v("@types"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.npmjs.com/~types",target:"_blank",rel:"noopener noreferrer"}},[t._v("@types"),s("OutboundLink")],1),t._v("里的包是使用"),s("a",{attrs:{href:"https://github.com/Microsoft/types-publisher",target:"_blank",rel:"noopener noreferrer"}},[t._v("types-publisher 工具"),s("OutboundLink")],1),t._v("从"),s("a",{attrs:{href:"https://github.com/DefinitelyTyped/DefinitelyTyped",target:"_blank",rel:"noopener noreferrer"}},[t._v("DefinitelyTyped"),s("OutboundLink")],1),t._v("里自动发布的。\n如果想让你的包发布为"),s("code",[t._v("@types")]),t._v("包，提交一个 pull request 到"),s("a",{attrs:{href:"https://github.com/DefinitelyTyped/DefinitelyTyped",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/DefinitelyTyped/DefinitelyTyped"),s("OutboundLink")],1),t._v("。\n更多详情请参考"),s("a",{attrs:{href:"http://definitelytyped.org/guides/contributing.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("contribution guidelines page"),s("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);s.default=n.exports}}]);