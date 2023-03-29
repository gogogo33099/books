(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{518:function(a,s,t){"use strict";t.r(s);var e=t(14),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"find"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#find"}},[a._v("#")]),a._v(" find")]),a._v(" "),s("p",[s("code",[a._v("find")]),a._v("命令用于寻找文件，会包括当前目录的所有下级目录。")]),a._v(" "),s("p",[a._v("如果不带任何参数，"),s("code",[a._v("find")]),a._v("文件会列出当前目录的所有文件，甚至还包括相对路径。如果把结果导入 sort 效果更好。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sort")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n./Makefile\n./README\n./build\n./client.c\n./client.h\n./common.h\n./project.c\n./server.c\n./server.h\n./tests\n./tests/suite1.pl\n./tests/suite2.pl\n./tests/suite3.pl\n./tests/suite4.pl\n")])])]),s("p",[a._v("如果想要 ls -l 样式的列表，只要在 find 后面加上 -ls。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ls")]),a._v("\n")])])]),s("p",[a._v("find 有它自己的一套复杂的过滤语句。下面列举的是一些最常用的你可以用以获取某些文件列表的过滤器：")]),a._v(" "),s("ul",[s("li",[a._v("find -name '*.c' —— 查找符合某 shell 式样式的文件名的文件。用 iname 开启大小写不敏感搜索。")]),a._v(" "),s("li",[a._v("find -path '"),s("em",[a._v("test")]),a._v("' —— 查找符合某 shell 式样式的路径的文件。用 ipath 开启大小写不敏感搜索。")]),a._v(" "),s("li",[a._v("find -mtime -5 —— 查找近五天内编辑过的文件。你也可以用 +5 来查找五天之前编辑过的文件。")]),a._v(" "),s("li",[a._v("find -newer server.c —— 查找比 server.c 更新的文件。")]),a._v(" "),s("li",[a._v("find -type d —— 查找所有文件夹。如果想找出所有文件，那就用 -type f；找符号连接就用 -type l。")])]),a._v(" "),s("p",[a._v("要注意，上面提到的这些过滤器都是可以组合使用的，例如找出近两天内编辑过的 C 源码：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-name")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'*.c'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-mtime")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-2")]),a._v("\n")])])]),s("p",[a._v("默认情况下， find 对搜索结果所采取的动作只是简单地通过标准输出输出一个列表，然而其实还有其他一些有用的后续动作。")]),a._v(" "),s("ul",[s("li",[a._v("-ls —— 如前文，提供了一种类 ls -l 式的列表。")]),a._v(" "),s("li",[a._v("-delete —— 删除符合查找条件的文件。")]),a._v(" "),s("li",[a._v("-exec —— 对搜索结果里的每个文件都运行某个命令， "),s("code",[a._v("{}")]),a._v("会被替换成适当的文件名，并且命令用"),s("code",[a._v("\\;")]),a._v("终结。")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-name")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'*.pl'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-exec")]),a._v(" perl "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("你也可以使用"),s("code",[a._v("+")]),a._v("作为终止符来对所有结果运行一次命令。我还发现一个我经常使用的小技巧，就是用 find 生成一个文件列表，然后在 Vim 的垂直分窗中编辑：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-name")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'*.c'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-exec")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" +\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);