(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{569:function(s,a,t){"use strict";t.r(a);var e=t(14),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"目录堆栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录堆栈"}},[s._v("#")]),s._v(" 目录堆栈")]),s._v(" "),a("p",[s._v("为了方便用户在不同目录之间切换，Bash 提供了目录堆栈功能。")]),s._v(" "),a("h2",{attrs:{id:"cd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cd"}},[s._v("#")]),s._v(" cd -")]),s._v(" "),a("p",[s._v("Bash 可以记忆用户进入过的目录。默认情况下，只记忆前一次所在的目录，"),a("code",[s._v("cd -")]),s._v("命令可以返回前一次的目录。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当前目录是 /path/to/foo")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" bar\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新回到 /path/to/foo")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" -\n")])])]),a("p",[s._v("上面例子中，用户原来所在的目录是"),a("code",[s._v("/path/to/foo")]),s._v("，进入子目录"),a("code",[s._v("bar")]),s._v("以后，使用"),a("code",[s._v("cd -")]),s._v("可以回到原来的目录。")]),s._v(" "),a("h2",{attrs:{id:"pushd-popd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pushd-popd"}},[s._v("#")]),s._v(" pushd，popd")]),s._v(" "),a("p",[s._v("如果希望记忆多重目录，可以使用"),a("code",[s._v("pushd")]),s._v("命令和"),a("code",[s._v("popd")]),s._v("命令。它们用来操作目录堆栈。")]),s._v(" "),a("p",[a("code",[s._v("pushd")]),s._v("命令的用法类似"),a("code",[s._v("cd")]),s._v("命令，可以进入指定的目录。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pushd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dirname")]),s._v("\n")])])]),a("p",[s._v("上面命令会进入目录"),a("code",[s._v("dirname")]),s._v("，并将该目录放入堆栈。")]),s._v(" "),a("p",[s._v("第一次使用"),a("code",[s._v("pushd")]),s._v("命令时，会将当前目录先放入堆栈，然后将所要进入的目录也放入堆栈，位置在前一个记录的上方。以后每次使用"),a("code",[s._v("pushd")]),s._v("命令，都会将所要进入的目录，放在堆栈的顶部。")]),s._v(" "),a("p",[a("code",[s._v("popd")]),s._v("命令不带有参数时，会移除堆栈的顶部记录，并进入新的栈顶目录（即原来的第二条目录）。")]),s._v(" "),a("p",[s._v("下面是一个例子。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当前处在主目录，堆栈为空")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("\n/home/me\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入 /home/me/foo")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当前堆栈为 /home/me/foo /home/me")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pushd")]),s._v(" ~/foo\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入 /etc")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当前堆栈为 /etc /home/me/foo /home/me")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pushd")]),s._v(" /etc\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入 /home/me/foo")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当前堆栈为 /home/me/foo /home/me")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("popd")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入 /home/me")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当前堆栈为 /home/me")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("popd")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 目录不变，当前堆栈为空")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("popd")]),s._v("\n")])])]),a("p",[s._v("这两个命令的参数如下。")]),s._v(" "),a("p",[a("strong",[s._v("（1）-n 参数")])]),s._v(" "),a("p",[a("code",[s._v("-n")]),s._v("的参数表示仅操作堆栈，不改变目录。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("popd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v("\n")])])]),a("p",[s._v("上面的命令仅删除堆栈顶部的记录，不改变目录，执行完成后还停留在当前目录。")]),s._v(" "),a("p",[a("strong",[s._v("（2）整数参数")])]),s._v(" "),a("p",[s._v("这两个命令还可以接受一个整数作为参数，该整数表示堆栈中指定位置的记录（从0开始）。"),a("code",[s._v("pushd")]),s._v("命令会把这条记录移动到栈顶，同时切换到该目录；"),a("code",[s._v("popd")]),s._v("则从堆栈中删除这条记录，不会切换目录。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将从栈顶算起的3号目录（从0开始）移动到栈顶，同时切换到该目录")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pushd")]),s._v(" +3\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将从栈底算起的3号目录（从0开始）移动到栈顶，同时切换到该目录")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pushd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-3")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除从栈顶算起的3号目录（从0开始），不改变当前目录")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("popd")]),s._v(" +3\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除从栈底算起的3号目录（从0开始），不改变当前目录")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("popd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-3")]),s._v("\n")])])]),a("p",[s._v("上面例子的整数编号都是从0开始计算，"),a("code",[s._v("popd +0")]),s._v("是删除第一个目录，"),a("code",[s._v("popd +1")]),s._v("是删除第二个，"),a("code",[s._v("popd -0")]),s._v("是删除最后一个目录，"),a("code",[s._v("popd -1")]),s._v("是删除倒数第二个。")]),s._v(" "),a("p",[a("strong",[s._v("（3）目录参数")])]),s._v(" "),a("p",[a("code",[s._v("pushd")]),s._v("可以接受一个目录作为参数，表示将该目录放到堆栈顶部，并进入该目录。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pushd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v("\n")])])]),a("p",[a("code",[s._v("popd")]),s._v("没有这个参数。")]),s._v(" "),a("h2",{attrs:{id:"dirs-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dirs-命令"}},[s._v("#")]),s._v(" dirs 命令")]),s._v(" "),a("p",[a("code",[s._v("dirs")]),s._v("命令可以显示目录堆栈的内容，一般用来查看"),a("code",[s._v("pushd")]),s._v("和"),a("code",[s._v("popd")]),s._v("操作后的结果。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dirs")]),s._v("\n~/foo/bar ~/foo ~\n")])])]),a("p",[s._v("该命令会输出一行文本，列出目录堆栈，目录之间使用空格分隔。栈顶（最晚入栈的目录）在最左边，栈底（最早入栈的目录）在最右边。")]),s._v(" "),a("p",[s._v("它有以下参数。")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("-c")]),s._v("：清空目录栈。")]),s._v(" "),a("li",[a("code",[s._v("-l")]),s._v("：用户主目录不显示波浪号前缀，而打印完整的目录。")]),s._v(" "),a("li",[a("code",[s._v("-p")]),s._v("：每行一个条目打印目录栈，默认是打印在一行。")]),s._v(" "),a("li",[a("code",[s._v("-v")]),s._v("：每行一个条目，每个条目之前显示位置编号（从0开始）。")]),s._v(" "),a("li",[a("code",[s._v("+N")]),s._v("："),a("code",[s._v("N")]),s._v("为整数，表示显示堆顶算起的第 N 个目录，从零开始。")]),s._v(" "),a("li",[a("code",[s._v("-N")]),s._v("："),a("code",[s._v("N")]),s._v("为整数，表示显示堆底算起的第 N 个目录，从零开始。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);