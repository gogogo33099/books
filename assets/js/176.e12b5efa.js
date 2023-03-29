(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{568:function(s,a,t){"use strict";t.r(a);var e=t(14),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"set-命令-shopt-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-命令-shopt-命令"}},[s._v("#")]),s._v(" set 命令，shopt 命令")]),s._v(" "),a("p",[a("code",[s._v("set")]),s._v("命令是 Bash 脚本的重要环节，却常常被忽视，导致脚本的安全性和可维护性出问题。本章介绍"),a("code",[s._v("set")]),s._v("的基本用法，帮助你写出更安全的 Bash 脚本。")]),s._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),a("p",[s._v("我们知道，Bash 执行脚本时，会创建一个子 Shell。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" script.sh\n")])])]),a("p",[s._v("上面代码中，"),a("code",[s._v("script.sh")]),s._v("是在一个子 Shell 里面执行。这个子 Shell 就是脚本的执行环境，Bash 默认给定了这个环境的各种参数。")]),s._v(" "),a("p",[a("code",[s._v("set")]),s._v("命令用来修改子 Shell 环境的运行参数，即定制环境。一共有十几个参数可以定制，"),a("a",{attrs:{href:"https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方手册"),a("OutboundLink")],1),s._v("有完整清单，本章介绍其中最常用的几个。")]),s._v(" "),a("p",[s._v("顺便提一下，如果命令行下不带任何参数，直接运行"),a("code",[s._v("set")]),s._v("，会显示所有的环境变量和 Shell 函数。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v("\n")])])]),a("h2",{attrs:{id:"set-u"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-u"}},[s._v("#")]),s._v(" set -u")]),s._v(" "),a("p",[s._v("执行脚本时，如果遇到不存在的变量，Bash 默认忽略它。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env bash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$a")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" bar\n")])])]),a("p",[s._v("上面代码中，"),a("code",[s._v("$a")]),s._v("是一个不存在的变量。执行结果如下。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" script.sh\n\nbar\n")])])]),a("p",[s._v("可以看到，"),a("code",[s._v("echo $a")]),s._v("输出了一个空行，Bash 忽略了不存在的"),a("code",[s._v("$a")]),s._v("，然后继续执行"),a("code",[s._v("echo bar")]),s._v("。大多数情况下，这不是开发者想要的行为，遇到变量不存在，脚本应该报错，而不是一声不响地往下执行。")]),s._v(" "),a("p",[a("code",[s._v("set -u")]),s._v("就用来改变这种行为。脚本在头部加上它，遇到不存在的变量就会报错，并停止执行。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$a")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" bar\n")])])]),a("p",[s._v("运行结果如下。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" script.sh\nbash: script.sh:行4: a: 未绑定的变量\n")])])]),a("p",[s._v("可以看到，脚本报错了，并且不再执行后面的语句。")]),s._v(" "),a("p",[a("code",[s._v("-u")]),s._v("还有另一种写法"),a("code",[s._v("-o nounset")]),s._v("，两者是等价的。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" nounset\n")])])]),a("h2",{attrs:{id:"set-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-x"}},[s._v("#")]),s._v(" set -x")]),s._v(" "),a("p",[s._v("默认情况下，脚本执行后，只输出运行结果，没有其他内容。如果多个命令连续执行，它们的运行结果就会连续输出。有时会分不清，某一段内容是什么命令产生的。")]),s._v(" "),a("p",[a("code",[s._v("set -x")]),s._v("用来在运行结果之前，先输出执行的那一行命令。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-x")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" bar\n")])])]),a("p",[s._v("执行上面的脚本，结果如下。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" script.sh\n+ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" bar\nbar\n")])])]),a("p",[s._v("可以看到，执行"),a("code",[s._v("echo bar")]),s._v("之前，该命令会先打印出来，行首以"),a("code",[s._v("+")]),s._v("表示。这对于调试复杂的脚本是很有用的。")]),s._v(" "),a("p",[a("code",[s._v("-x")]),s._v("还有另一种写法"),a("code",[s._v("-o xtrace")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" xtrace\n")])])]),a("p",[s._v("脚本当中如果要关闭命令输出，可以使用"),a("code",[s._v("set +x")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("number")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-x")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$number")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Number equals 1"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Number does not equal 1"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" +x\n")])])]),a("p",[s._v("上面的例子中，只对特定的代码段打开命令输出。")]),s._v(" "),a("h2",{attrs:{id:"bash-的错误处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bash-的错误处理"}},[s._v("#")]),s._v(" Bash 的错误处理")]),s._v(" "),a("p",[s._v("如果脚本里面有运行失败的命令（返回值非"),a("code",[s._v("0")]),s._v("），Bash 默认会继续执行后面的命令。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env bash")]),s._v("\n\nfoo\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" bar\n")])])]),a("p",[s._v("上面脚本中，"),a("code",[s._v("foo")]),s._v("是一个不存在的命令，执行时会报错。但是，Bash 会忽略这个错误，继续往下执行。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" script.sh\nscript.sh:行3: foo: 未找到命令\nbar\n")])])]),a("p",[s._v("可以看到，Bash 只是显示有错误，并没有终止执行。")]),s._v(" "),a("p",[s._v("这种行为很不利于脚本安全和除错。实际开发中，如果某个命令失败，往往需要脚本停止执行，防止错误累积。这时，一般采用下面的写法。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])])]),a("p",[s._v("上面的写法表示只要"),a("code",[s._v("command")]),s._v("有非零返回值，脚本就会停止执行。")]),s._v(" "),a("p",[s._v("如果停止执行之前需要完成多个操作，就要采用下面三种写法。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 写法一")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"command failed"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 写法二")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"command failed"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 写法三")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ne")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"command failed"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])])]),a("p",[s._v("另外，除了停止执行，还有一种情况。如果两个命令有继承关系，只有第一个命令成功了，才能继续执行第二个命令，那么就要采用下面的写法。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("command1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" command2\n")])])]),a("h2",{attrs:{id:"set-e"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-e"}},[s._v("#")]),s._v(" set -e")]),s._v(" "),a("p",[s._v("上面这些写法多少有些麻烦，容易疏忽。"),a("code",[s._v("set -e")]),s._v("从根本上解决了这个问题，它使得脚本只要发生错误，就终止执行。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v("\n\nfoo\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" bar\n")])])]),a("p",[s._v("执行结果如下。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" script.sh\nscript.sh:行4: foo: 未找到命令\n")])])]),a("p",[s._v("可以看到，第4行执行失败以后，脚本就终止执行了。")]),s._v(" "),a("p",[a("code",[s._v("set -e")]),s._v("根据返回值来判断，一个命令是否运行失败。但是，某些命令的非零返回值可能不表示失败，或者开发者希望在命令失败的情况下，脚本继续执行下去。这时可以暂时关闭"),a("code",[s._v("set -e")]),s._v("，该命令执行结束后，再重新打开"),a("code",[s._v("set -e")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" +e\ncommand1\ncommand2\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v("\n")])])]),a("p",[s._v("上面代码中，"),a("code",[s._v("set +e")]),s._v("表示关闭"),a("code",[s._v("-e")]),s._v("选项，"),a("code",[s._v("set -e")]),s._v("表示重新打开"),a("code",[s._v("-e")]),s._v("选项。")]),s._v(" "),a("p",[s._v("还有一种方法是使用"),a("code",[s._v("command || true")]),s._v("，使得该命令即使执行失败，脚本也不会终止执行。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v("\n\nfoo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" bar\n")])])]),a("p",[s._v("上面代码中，"),a("code",[s._v("true")]),s._v("使得这一行语句总是会执行成功，后面的"),a("code",[s._v("echo bar")]),s._v("会执行。")]),s._v(" "),a("p",[a("code",[s._v("-e")]),s._v("还有另一种写法"),a("code",[s._v("-o errexit")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" errexit\n")])])]),a("h2",{attrs:{id:"set-o-pipefail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-o-pipefail"}},[s._v("#")]),s._v(" set -o pipefail")]),s._v(" "),a("p",[a("code",[s._v("set -e")]),s._v("有一个例外情况，就是不适用于管道命令。")]),s._v(" "),a("p",[s._v("所谓管道命令，就是多个子命令通过管道运算符（"),a("code",[s._v("|")]),s._v("）组合成为一个大的命令。Bash 会把最后一个子命令的返回值，作为整个命令的返回值。也就是说，只要最后一个子命令不失败，管道命令总是会执行成功，因此它后面命令依然会执行，"),a("code",[s._v("set -e")]),s._v("就失效了。")]),s._v(" "),a("p",[s._v("请看下面这个例子。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v("\n\nfoo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" a\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" bar\n")])])]),a("p",[s._v("执行结果如下。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" script.sh\na\nscript.sh:行4: foo: 未找到命令\nbar\n")])])]),a("p",[s._v("上面代码中，"),a("code",[s._v("foo")]),s._v("是一个不存在的命令，但是"),a("code",[s._v("foo | echo a")]),s._v("这个管道命令会执行成功，导致后面的"),a("code",[s._v("echo bar")]),s._v("会继续执行。")]),s._v(" "),a("p",[a("code",[s._v("set -o pipefail")]),s._v("用来解决这种情况，只要一个子命令失败，整个管道命令就失败，脚本就会终止执行。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-eo")]),s._v(" pipefail\n\nfoo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" a\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" bar\n")])])]),a("p",[s._v("运行后，结果如下。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" script.sh\na\nscript.sh:行4: foo: 未找到命令\n")])])]),a("p",[s._v("可以看到，"),a("code",[s._v("echo bar")]),s._v("没有执行。")]),s._v(" "),a("h2",{attrs:{id:"set-e-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-e-2"}},[s._v("#")]),s._v(" set -E")]),s._v(" "),a("p",[s._v("一旦设置了"),a("code",[s._v("-e")]),s._v("参数，会导致函数内的错误不会被"),a("code",[s._v("trap")]),s._v("命令捕获（参考《trap 命令》一章）。"),a("code",[s._v("-E")]),s._v("参数可以纠正这个行为，使得函数也能继承"),a("code",[s._v("trap")]),s._v("命令。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("trap")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo ERR trap fired!"')]),s._v(" ERR\n\n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("myfunc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 'foo' 是一个不存在的命令")]),s._v("\n  foo\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nmyfunc\n")])])]),a("p",[s._v("上面示例中，"),a("code",[s._v("myfunc")]),s._v("函数内部调用了一个不存在的命令"),a("code",[s._v("foo")]),s._v("，导致执行这个函数会报错。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" test.sh\ntest.sh:行9: foo：未找到命令\n")])])]),a("p",[s._v("但是，由于设置了"),a("code",[s._v("set -e")]),s._v("，函数内部的报错并没有被"),a("code",[s._v("trap")]),s._v("命令捕获，需要加上"),a("code",[s._v("-E")]),s._v("参数才可以。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Eeuo")]),s._v(" pipefail\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("trap")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo ERR trap fired!"')]),s._v(" ERR\n\n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("myfunc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 'foo' 是一个不存在的命令")]),s._v("\n  foo\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nmyfunc\n")])])]),a("p",[s._v("执行上面这个脚本，就可以看到"),a("code",[s._v("trap")]),s._v("命令生效了。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" test.sh\ntest.sh:行9: foo：未找到命令\nERR "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("trap")]),s._v(" fired"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n")])])]),a("h2",{attrs:{id:"其他参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他参数"}},[s._v("#")]),s._v(" 其他参数")]),s._v(" "),a("p",[a("code",[s._v("set")]),s._v("命令还有一些其他参数。")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("set -n")]),s._v("：等同于"),a("code",[s._v("set -o noexec")]),s._v("，不运行命令，只检查语法是否正确。")]),s._v(" "),a("li",[a("code",[s._v("set -f")]),s._v("：等同于"),a("code",[s._v("set -o noglob")]),s._v("，表示不对通配符进行文件名扩展。")]),s._v(" "),a("li",[a("code",[s._v("set -v")]),s._v("：等同于"),a("code",[s._v("set -o verbose")]),s._v("，表示打印 Shell 接收到的每一行输入。")]),s._v(" "),a("li",[a("code",[s._v("set -o noclobber")]),s._v("：防止使用重定向运算符"),a("code",[s._v(">")]),s._v("覆盖已经存在的文件。")])]),s._v(" "),a("p",[s._v("上面的"),a("code",[s._v("-f")]),s._v("和"),a("code",[s._v("-v")]),s._v("参数，可以分别使用"),a("code",[s._v("set +f")]),s._v("、"),a("code",[s._v("set +v")]),s._v("关闭。")]),s._v(" "),a("h2",{attrs:{id:"set-命令总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-命令总结"}},[s._v("#")]),s._v(" set 命令总结")]),s._v(" "),a("p",[s._v("上面重点介绍的"),a("code",[s._v("set")]),s._v("命令的几个参数，一般都放在一起使用。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 写法一")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Eeuxo")]),s._v(" pipefail\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 写法二")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Eeux")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" pipefail\n")])])]),a("p",[s._v("这两种写法建议放在所有 Bash 脚本的头部。")]),s._v(" "),a("p",[s._v("另一种办法是在执行 Bash 脚本的时候，从命令行传入这些参数。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-euxo")]),s._v(" pipefail script.sh\n")])])]),a("h2",{attrs:{id:"shopt-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shopt-命令"}},[s._v("#")]),s._v(" shopt 命令")]),s._v(" "),a("p",[a("code",[s._v("shopt")]),s._v("命令用来调整 Shell 的参数，跟"),a("code",[s._v("set")]),s._v("命令的作用很类似。之所以会有这两个类似命令的主要原因是，"),a("code",[s._v("set")]),s._v("是从 Ksh 继承的，属于 POSIX 规范的一部分，而"),a("code",[s._v("shopt")]),s._v("是 Bash 特有的。")]),s._v(" "),a("p",[s._v("直接输入"),a("code",[s._v("shopt")]),s._v("可以查看所有参数，以及它们各自打开和关闭的状态。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("shopt")]),s._v("\n")])])]),a("p",[a("code",[s._v("shopt")]),s._v("命令后面跟着参数名，可以查询该参数是否打开。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("shopt")]),s._v(" globstar\nglobstar  off\n")])])]),a("p",[s._v("上面例子表示"),a("code",[s._v("globstar")]),s._v("参数默认是关闭的。")]),s._v(" "),a("p",[a("strong",[s._v("（1）-s")])]),s._v(" "),a("p",[a("code",[s._v("-s")]),s._v("用来打开某个参数。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("shopt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" optionNameHere\n")])])]),a("p",[a("strong",[s._v("（2）-u")])]),s._v(" "),a("p",[a("code",[s._v("-u")]),s._v("用来关闭某个参数。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("shopt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" optionNameHere\n")])])]),a("p",[s._v("举例来说，"),a("code",[s._v("histappend")]),s._v("这个参数表示退出当前 Shell 时，将操作历史追加到历史文件中。这个参数默认是打开的，如果使用下面的命令将其关闭，那么当前 Shell 的操作历史将替换掉整个历史文件。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("shopt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" histappend\n")])])]),a("p",[a("strong",[s._v("（3）-q")])]),s._v(" "),a("p",[a("code",[s._v("-q")]),s._v("的作用也是查询某个参数是否打开，但不是直接输出查询结果，而是通过命令的执行状态（"),a("code",[s._v("$?")]),s._v("）表示查询结果。如果状态为"),a("code",[s._v("0")]),s._v("，表示该参数打开；如果为"),a("code",[s._v("1")]),s._v("，表示该参数关闭。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("shopt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-q")]),s._v(" globstar\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])])]),a("p",[s._v("上面命令查询"),a("code",[s._v("globstar")]),s._v("参数是否打开。返回状态为"),a("code",[s._v("1")]),s._v("，表示该参数是关闭的。")]),s._v(" "),a("p",[s._v("这个用法主要用于脚本，供"),a("code",[s._v("if")]),s._v("条件结构使用。下面例子是如果打开了这个参数，就执行"),a("code",[s._v("if")]),s._v("结构内部的语句。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("shopt "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-q")]),s._v(" globstar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])])]),a("h2",{attrs:{id:"参考链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[s._v("#")]),s._v(" 参考链接")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("The Set Builtin"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://vaneyckt.io/posts/safer_bash_scripts_with_set_euxo_pipefail/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Safer bash scripts with 'set -euxo pipefail'"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"http://www.davidpashley.com/articles/writing-robust-shell-scripts/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Writing Robust Bash Shell Scripts"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);