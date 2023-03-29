(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{548:function(s,t,a){"use strict";a.r(t);var e=a(14),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"重定向"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重定向"}},[s._v("#")]),s._v(" 重定向")]),s._v(" "),t("p",[s._v("重定向指的是将命令行输出写入指定位置。")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("cmd1 | cmd2")]),s._v("：Pipe; take standard output of cmd1 as standard input to cmd2.")]),s._v(" "),t("li",[t("code",[s._v("> file")]),s._v("：Direct standard output to file.")]),s._v(" "),t("li",[t("code",[s._v("< file")]),s._v("：Take standard input from file.")]),s._v(" "),t("li",[t("code",[s._v(">> file")]),s._v("：Direct standard output to file; append to file if it already exists.")]),s._v(" "),t("li",[t("code",[s._v(">| file")]),s._v("：Force standard output to file even if noclobber is set.")]),s._v(" "),t("li",[t("code",[s._v("n>| file")]),s._v("：Force output to file from file descriptor n even if noclobber is set.")]),s._v(" "),t("li",[t("code",[s._v("<> file")]),s._v("：Use file as both standard input and standard output.")]),s._v(" "),t("li",[t("code",[s._v("n<> file")]),s._v("：Use file as both input and output for file descriptor n.")]),s._v(" "),t("li",[t("code",[s._v("<< label")]),s._v("：Here-document; see text.")]),s._v(" "),t("li",[t("code",[s._v("n > file")]),s._v("：Direct file descriptor n to file.")]),s._v(" "),t("li",[t("code",[s._v("n < file")]),s._v("：Take file descriptor n from file.")]),s._v(" "),t("li",[t("code",[s._v("n >> file")]),s._v("：Direct file descriptor n to file; append to file if it already exists.")]),s._v(" "),t("li",[t("code",[s._v("n>&")]),s._v("：Duplicate standard output to file descriptor n.")]),s._v(" "),t("li",[t("code",[s._v("n<&")]),s._v("：Duplicate standard input from file descriptor n.")]),s._v(" "),t("li",[t("code",[s._v("n>&m")]),s._v("：File descriptor  n is made to be a copy of the output file descriptor.")]),s._v(" "),t("li",[t("code",[s._v("n<&m")]),s._v("：File descriptor  n is made to be a copy of the input file descriptor.")]),s._v(" "),t("li",[t("code",[s._v("&>file")]),s._v("：Directs standard output and standard error to file.")]),s._v(" "),t("li",[t("code",[s._v("<&-")]),s._v("：Close the standard input.")]),s._v(" "),t("li",[t("code",[s._v(">&-")]),s._v("：Close the standard output.")]),s._v(" "),t("li",[t("code",[s._v("n>&-")]),s._v("：Close the output from file descriptor  n.")]),s._v(" "),t("li",[t("code",[s._v("n<&-")]),s._v("：Close the input from file descriptor  n.")]),s._v(" "),t("li",[t("code",[s._v("n>&word")]),s._v("：If  n is not specified, the standard output (file descriptor 1) is used. If the digits in word do not specify a file descriptor open for output, a redirection error occurs. As a special case, if n is omitted, and word does not expand to one or more digits, the standard output and standard error are redirected as described previously.")]),s._v(" "),t("li",[t("code",[s._v("n<&word")]),s._v("：If word expands to one or more digits, the file descriptor denoted by  n is made to be a copy of that file descriptor. If the digits in word do not specify a file descriptor open for input, a redirection error occurs. If word evaluates to -, file descriptor n is closed. If n is not specified, the standard input (file descriptor 0) is used.")]),s._v(" "),t("li",[t("code",[s._v("n>&digit-")]),s._v("：Moves the file descriptor digit to file descriptor  n, or the standard output (file descriptor 1) if n is not specified.")]),s._v(" "),t("li",[t("code",[s._v("n<&digit-")]),s._v("：Moves the file descriptor digit to file descriptor  n, or the standard input (file descriptor 0) if n is not specified. digit is closed after being duplicated to n.")])]),s._v(" "),t("p",[t("code",[s._v(">")]),s._v("用来将标准输出重定向到指定文件。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" /usr/bin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ls-output.txt\n")])])]),t("p",[s._v("如果重定向后的指定文件已经存在，就会被覆盖，不会有任何提示。")]),s._v(" "),t("p",[s._v("如果命令没有任何输出，那么重定向之后，得到的是一个长度为"),t("code",[s._v("0")]),s._v("的文件。因此，"),t("code",[s._v(">")]),s._v("具有创建新文件或改写现存文件、将其改为长度"),t("code",[s._v("0")]),s._v("的作用。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ls-output.txt\n")])])]),t("p",[t("code",[s._v(">>")]),s._v("用来将标准输出重定向追加到指定文件。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" /usr/bin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ls-output.txt\n")])])]),t("p",[t("code",[s._v("2>")]),s._v("用来将标准错误重定向到指定文件。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" /bin/usr "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v(" ls-error.txt\n")])])]),t("p",[s._v("标准输出和标准错误，可以重定向到同一个文件。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" /bin/usr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ls-output.txt "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" /bin/usr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" ls-output.txt\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 追加到同一个文件")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" /bin/usr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>>")]),s._v(" ls-output.txt\n")])])]),t("p",[s._v("如果不希望输出错误信息，可以将它重定向到一个特殊文件"),t("code",[s._v("/dev/null")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" /bin/usr "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v(" /dev/null\n")])])]),t("p",[t("code",[s._v("|")]),s._v("用于将一个命令的标准输出，重定向到另一个命令的标准输入。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" /usr/bin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("less")]),s._v("\n")])])]),t("p",[s._v("不要将"),t("code",[s._v(">")]),s._v("与"),t("code",[s._v("|")]),s._v("混淆。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("less")]),s._v("\n")])])]),t("p",[s._v("上面命令会在当前目录，生成一个名为"),t("code",[s._v("less")]),s._v("的文本文件。")]),s._v(" "),t("p",[s._v("下面是标准错误重定向的一个例子。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("invalid_input")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"Invalid input '"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$REPLY")]),s._v("'\"")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&2")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Enter a single item > "')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-z")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$REPLY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" invalid_input\n")])])]),t("h2",{attrs:{id:"tee"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tee"}},[s._v("#")]),s._v(" tee")]),s._v(" "),t("p",[t("code",[s._v("tee")]),s._v("命令用于同时将标准输出重定向到文件，以及另一个命令的标准输入。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /usr/bin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" ls.txt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("zip")]),s._v("\n")])])]),t("h2",{attrs:{id:"命令替换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令替换"}},[s._v("#")]),s._v(" 命令替换")]),s._v(" "),t("p",[s._v("命令替换（command substitution）指的是将一个命令的输出，替换进入另一个命令。"),t("code",[s._v("$(command)")]),s._v("表示命令替换，另一种写法是使用反引号。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n")])])]),t("h2",{attrs:{id:"basename"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basename"}},[s._v("#")]),s._v(" basename")]),s._v(" "),t("p",[t("code",[s._v("basename")]),s._v("命令清除 一个路径名的开头部分，只留下一个文件的基本名称。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# file_info: simple file information program")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PROGNAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("basename")]),s._v(" $0"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('File Type:"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('File Status:"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("stat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PROGNAME")]),s._v(": usage: "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PROGNAME")]),s._v(' file"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&2")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);