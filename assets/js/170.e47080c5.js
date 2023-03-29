(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{566:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mktemp-命令-trap-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mktemp-命令-trap-命令"}},[t._v("#")]),t._v(" mktemp 命令，trap 命令")]),t._v(" "),s("p",[t._v("Bash 脚本有时需要创建临时文件或临时目录。常见的做法是，在"),s("code",[t._v("/tmp")]),t._v("目录里面创建文件或目录，这样做有很多弊端，使用"),s("code",[t._v("mktemp")]),t._v("命令是最安全的做法。")]),t._v(" "),s("h2",{attrs:{id:"临时文件的安全问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#临时文件的安全问题"}},[t._v("#")]),t._v(" 临时文件的安全问题")]),t._v(" "),s("p",[t._v("直接创建临时文件，尤其在"),s("code",[t._v("/tmp")]),t._v("目录里面，往往会导致安全问题。")]),t._v(" "),s("p",[t._v("首先，"),s("code",[t._v("/tmp")]),t._v("目录是所有人可读写的，任何用户都可以往该目录里面写文件。创建的临时文件也是所有人可读的。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" /tmp/info.txt\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-l")]),t._v(" /tmp/info.txt\n-rw-r--r-- "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" ruanyf ruanyf "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("月 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":12 /tmp/info.txt\n")])])]),s("p",[t._v("上面命令在"),s("code",[t._v("/tmp")]),t._v("目录直接创建文件，该文件默认是所有人可读的。")]),t._v(" "),s("p",[t._v("其次，如果攻击者知道临时文件的文件名，他可以创建符号链接，链接到临时文件，可能导致系统运行异常。攻击者也可能向脚本提供一些恶意数据。因此，临时文件最好使用不可预测、每次都不一样的文件名，防止被利用。")]),t._v(" "),s("p",[t._v("最后，临时文件使用完毕，应该删除。但是，脚本意外退出时，往往会忽略清理临时文件。")]),t._v(" "),s("p",[t._v("生成临时文件应该遵循下面的规则。")]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("创建前检查文件是否已经存在。")]),t._v(" "),s("li",[t._v("确保临时文件已成功创建。")]),t._v(" "),s("li",[t._v("临时文件必须有权限的限制。")]),t._v(" "),s("li",[t._v("临时文件要使用不可预测的文件名。")]),t._v(" "),s("li",[t._v("脚本退出时，要删除临时文件（使用"),s("code",[t._v("trap")]),t._v("命令）。")])])]),t._v(" "),s("h2",{attrs:{id:"mktemp-命令的用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mktemp-命令的用法"}},[t._v("#")]),t._v(" mktemp 命令的用法")]),t._v(" "),s("p",[s("code",[t._v("mktemp")]),t._v("命令就是为安全创建临时文件而设计的。虽然在创建临时文件之前，它不会检查临时文件是否存在，但是它支持唯一文件名和清除机制，因此可以减轻安全攻击的风险。")]),t._v(" "),s("p",[t._v("直接运行"),s("code",[t._v("mktemp")]),t._v("命令，就能生成一个临时文件。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ mktemp\n/tmp/tmp.4GcsWSG4vj\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-l")]),t._v(" /tmp/tmp.4GcsWSG4vj\n-rw------- "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" ruanyf ruanyf "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("月 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(":49 /tmp/tmp.4GcsWSG4vj\n")])])]),s("p",[t._v("上面命令中，"),s("code",[t._v("mktemp")]),t._v("命令生成的临时文件名是随机的，而且权限是只有用户本人可读写。")]),t._v(" "),s("p",[t._v("Bash 脚本使用"),s("code",[t._v("mktemp")]),t._v("命令的用法如下。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("TMPFILE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("mktemp"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Our temp file is '),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$TMPFILE")]),t._v('"')]),t._v("\n")])])]),s("p",[t._v("为了确保临时文件创建成功，"),s("code",[t._v("mktemp")]),t._v("命令后面最好使用 OR 运算符（"),s("code",[t._v("||")]),t._v("），保证创建失败时退出脚本。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("TMPFILE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("mktemp"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Our temp file is '),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$TMPFILE")]),t._v('"')]),t._v("\n")])])]),s("p",[t._v("为了保证脚本退出时临时文件被删除，可以使用"),s("code",[t._v("trap")]),t._v("命令指定退出时的清除操作。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("trap")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rm -f \"$TMPFILE\"'")]),t._v(" EXIT\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("TMPFILE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("mktemp"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Our temp file is '),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$TMPFILE")]),t._v('"')]),t._v("\n")])])]),s("h2",{attrs:{id:"mktemp-命令的参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mktemp-命令的参数"}},[t._v("#")]),t._v(" mktemp 命令的参数")]),t._v(" "),s("p",[s("code",[t._v("-d")]),t._v("参数可以创建一个临时目录。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ mktemp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v("\n/tmp/tmp.Wcau5UjmN6\n")])])]),s("p",[s("code",[t._v("-p")]),t._v("参数可以指定临时文件所在的目录。默认是使用"),s("code",[t._v("$TMPDIR")]),t._v("环境变量指定的目录，如果这个变量没设置，那么使用"),s("code",[t._v("/tmp")]),t._v("目录。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ mktemp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" /home/ruanyf/\n/home/ruanyf/tmp.FOKEtvs2H3\n")])])]),s("p",[s("code",[t._v("-t")]),t._v("参数可以指定临时文件的文件名模板，模板的末尾必须至少包含三个连续的"),s("code",[t._v("X")]),t._v("字符，表示随机字符，建议至少使用六个"),s("code",[t._v("X")]),t._v("。默认的文件名模板是"),s("code",[t._v("tmp.")]),t._v("后接十个随机字符。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ mktemp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-t")]),t._v(" mytemp.XXXXXXX\n/tmp/mytemp.yZ1HgZV\n")])])]),s("h2",{attrs:{id:"trap-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#trap-命令"}},[t._v("#")]),t._v(" trap 命令")]),t._v(" "),s("p",[s("code",[t._v("trap")]),t._v("命令用来在 Bash 脚本中响应系统信号。")]),t._v(" "),s("p",[t._v("最常见的系统信号就是 SIGINT（中断），即按 Ctrl + C 所产生的信号。"),s("code",[t._v("trap")]),t._v("命令的"),s("code",[t._v("-l")]),t._v("参数，可以列出所有的系统信号。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("trap")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-l")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGHUP\t "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGINT\t "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGQUIT\t "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGILL\t "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGTRAP\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGABRT\t "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGBUS\t "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGFPE\t "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGKILL\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGUSR1\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGSEGV\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGUSR2\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGPIPE\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGALRM\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGTERM\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGSTKFLT\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGCHLD\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGCONT\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGSTOP\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGTSTP\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGTTIN\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGTTOU\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGURG\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGXCPU\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGXFSZ\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("26")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGVTALRM\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGPROF\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGWINCH\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("29")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGIO\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGPWR\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("31")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGSYS\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("34")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMIN\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("35")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMIN+1\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("36")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMIN+2\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("37")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMIN+3\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("38")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMIN+4\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("39")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMIN+5\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMIN+6\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("41")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMIN+7\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMIN+8\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("43")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMIN+9\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("44")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMIN+10\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("45")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMIN+11\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("46")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMIN+12\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("47")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMIN+13\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("48")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMIN+14\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("49")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMIN+15\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMAX-14\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("51")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMAX-13\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("52")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMAX-12\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMAX-11\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("54")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMAX-10\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("55")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMAX-9\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("56")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMAX-8\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("57")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMAX-7\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("58")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMAX-6\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("59")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMAX-5\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMAX-4\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("61")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMAX-3\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("62")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMAX-2\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("63")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMAX-1\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMAX\n")])])]),s("p",[s("code",[t._v("trap")]),t._v("的命令格式如下。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("trap")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("动作"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("信号1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("信号2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),s("p",[t._v("上面代码中，“动作”是一个 Bash 命令，“信号”常用的有以下几个。")]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("HUP：编号1，脚本与所在的终端脱离联系。")]),t._v(" "),s("li",[t._v("INT：编号2，用户按下 Ctrl + C，意图让脚本终止运行。")]),t._v(" "),s("li",[t._v("QUIT：编号3，用户按下 Ctrl + 斜杠，意图退出脚本。")]),t._v(" "),s("li",[t._v("KILL：编号9，该信号用于杀死进程。")]),t._v(" "),s("li",[t._v("TERM：编号15，这是"),s("code",[t._v("kill")]),t._v("命令发出的默认信号。")]),t._v(" "),s("li",[t._v("EXIT：编号0，这不是系统信号，而是 Bash 脚本特有的信号，不管什么情况，只要退出脚本就会产生。")])])]),t._v(" "),s("p",[s("code",[t._v("trap")]),t._v("命令响应"),s("code",[t._v("EXIT")]),t._v("信号的写法如下。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("trap")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rm -f \"$TMPFILE\"'")]),t._v(" EXIT\n")])])]),s("p",[t._v("上面命令中，脚本遇到"),s("code",[t._v("EXIT")]),t._v("信号时，就会执行"),s("code",[t._v('rm -f "$TMPFILE"')]),t._v("。")]),t._v(" "),s("p",[t._v("trap 命令的常见使用场景，就是在 Bash 脚本中指定退出时执行的清理命令。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("trap")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rm -f \"$TMPFILE\"'")]),t._v(" EXIT\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("TMPFILE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("mktemp"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" /etc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$TMPFILE")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-qi")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kernel"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$TMPFILE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'find'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n")])])]),s("p",[t._v("上面代码中，不管是脚本正常执行结束，还是用户按 Ctrl + C 终止，都会产生"),s("code",[t._v("EXIT")]),t._v("信号，从而触发删除临时文件。")]),t._v(" "),s("p",[t._v("注意，"),s("code",[t._v("trap")]),t._v("命令必须放在脚本的开头。否则，它上方的任何命令导致脚本退出，都不会被它捕获。")]),t._v(" "),s("p",[t._v("如果"),s("code",[t._v("trap")]),t._v("需要触发多条命令，可以封装一个 Bash 函数。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("egress")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  command1\n  command2\n  command3\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("trap")]),t._v(" egress EXIT\n")])])]),s("h2",{attrs:{id:"参考链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.putorius.net/working-with-temporary-files.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Working with Temporary Files and Directories in Shell Scripts"),s("OutboundLink")],1),t._v(", Steven Vona")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.putorius.net/using-trap-to-exit-bash-scripts-cleanly.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Using Trap to Exit Bash Scripts Cleanly"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://mywiki.wooledge.org/SignalTrap",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sending and Trapping Signals"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);