(window.webpackJsonp=window.webpackJsonp||[]).push([[410],{851:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"parentnode-接口-childnode-接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parentnode-接口-childnode-接口"}},[t._v("#")]),t._v(" ParentNode 接口，ChildNode 接口")]),t._v(" "),a("p",[t._v("节点对象除了继承 Node 接口以外，还拥有其他接口。"),a("code",[t._v("ParentNode")]),t._v("接口表示当前节点是一个父节点，提供一些处理子节点的方法。"),a("code",[t._v("ChildNode")]),t._v("接口表示当前节点是一个子节点，提供一些相关方法。")]),t._v(" "),a("h2",{attrs:{id:"parentnode-接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parentnode-接口"}},[t._v("#")]),t._v(" ParentNode 接口")]),t._v(" "),a("p",[t._v("如果当前节点是父节点，就会混入了（mixin）"),a("code",[t._v("ParentNode")]),t._v("接口。由于只有元素节点（element）、文档节点（document）和文档片段节点（documentFragment）拥有子节点，因此只有这三类节点会拥有"),a("code",[t._v("ParentNode")]),t._v("接口。")]),t._v(" "),a("h3",{attrs:{id:"parentnode-children"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parentnode-children"}},[t._v("#")]),t._v(" ParentNode.children")]),t._v(" "),a("p",[a("code",[t._v("children")]),t._v("属性返回一个"),a("code",[t._v("HTMLCollection")]),t._v("实例，成员是当前节点的所有元素子节点。该属性只读。")]),t._v(" "),a("p",[t._v("下面是遍历某个节点的所有元素子节点的示例。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("注意，"),a("code",[t._v("children")]),t._v("属性只包括元素子节点，不包括其他类型的子节点（比如文本子节点）。如果没有元素类型的子节点，返回值"),a("code",[t._v("HTMLCollection")]),t._v("实例的"),a("code",[t._v("length")]),t._v("属性为"),a("code",[t._v("0")]),t._v("。")]),t._v(" "),a("p",[t._v("另外，"),a("code",[t._v("HTMLCollection")]),t._v("是动态集合，会实时反映 DOM 的任何变化。")]),t._v(" "),a("h3",{attrs:{id:"parentnode-firstelementchild"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parentnode-firstelementchild"}},[t._v("#")]),t._v(" ParentNode.firstElementChild")]),t._v(" "),a("p",[a("code",[t._v("firstElementChild")]),t._v("属性返回当前节点的第一个元素子节点。如果没有任何元素子节点，则返回"),a("code",[t._v("null")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstElementChild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeName\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "HTML"')]),t._v("\n")])])]),a("p",[t._v("上面代码中，"),a("code",[t._v("document")]),t._v("节点的第一个元素子节点是"),a("code",[t._v("<HTML>")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"parentnode-lastelementchild"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parentnode-lastelementchild"}},[t._v("#")]),t._v(" ParentNode.lastElementChild")]),t._v(" "),a("p",[a("code",[t._v("lastElementChild")]),t._v("属性返回当前节点的最后一个元素子节点，如果不存在任何元素子节点，则返回"),a("code",[t._v("null")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastElementChild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeName\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "HTML"')]),t._v("\n")])])]),a("p",[t._v("上面代码中，"),a("code",[t._v("document")]),t._v("节点的最后一个元素子节点是"),a("code",[t._v("<HTML>")]),t._v("（因为"),a("code",[t._v("document")]),t._v("只包含这一个元素子节点）。")]),t._v(" "),a("h3",{attrs:{id:"parentnode-childelementcount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parentnode-childelementcount"}},[t._v("#")]),t._v(" ParentNode.childElementCount")]),t._v(" "),a("p",[a("code",[t._v("childElementCount")]),t._v("属性返回一个整数，表示当前节点的所有元素子节点的数目。如果不包含任何元素子节点，则返回"),a("code",[t._v("0")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("childElementCount "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 13")]),t._v("\n")])])]),a("h3",{attrs:{id:"parentnode-append-parentnode-prepend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parentnode-append-parentnode-prepend"}},[t._v("#")]),t._v(" ParentNode.append()，ParentNode.prepend()")]),t._v(" "),a("p",[a("strong",[t._v("（1）ParentNode.append()")])]),t._v(" "),a("p",[a("code",[t._v("append()")]),t._v("方法为当前节点追加一个或多个子节点，位置是最后一个元素子节点的后面。")]),t._v(" "),a("p",[t._v("该方法不仅可以添加元素子节点（参数为元素节点），还可以添加文本子节点（参数为字符串）。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" parent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加元素子节点")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'p'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nparent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加文本子节点")]),t._v("\nparent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加多个元素子节点")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" p1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'p'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" p2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'p'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nparent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加元素子节点和文本子节点")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'p'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nparent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("该方法没有返回值。")]),t._v(" "),a("p",[t._v("注意，该方法与"),a("code",[t._v("Node.prototype.appendChild()")]),t._v("方法有三点不同。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("append()")]),t._v("允许字符串作为参数，"),a("code",[t._v("appendChild()")]),t._v("只允许子节点作为参数。")]),t._v(" "),a("li",[a("code",[t._v("append()")]),t._v("没有返回值，而"),a("code",[t._v("appendChild()")]),t._v("返回添加的子节点。")]),t._v(" "),a("li",[a("code",[t._v("append()")]),t._v("可以添加多个子节点和字符串（即允许多个参数），"),a("code",[t._v("appendChild()")]),t._v("只能添加一个节点（即只允许一个参数）。")])]),t._v(" "),a("p",[a("strong",[t._v("（2）ParentNode.prepend()")])]),t._v(" "),a("p",[a("code",[t._v("prepend()")]),t._v("方法为当前节点追加一个或多个子节点，位置是第一个元素子节点的前面。它的用法与"),a("code",[t._v("append()")]),t._v("方法完全一致，也是没有返回值。")]),t._v(" "),a("h2",{attrs:{id:"childnode-接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#childnode-接口"}},[t._v("#")]),t._v(" ChildNode 接口")]),t._v(" "),a("p",[t._v("如果一个节点有父节点，那么该节点就拥有了"),a("code",[t._v("ChildNode")]),t._v("接口。")]),t._v(" "),a("h3",{attrs:{id:"childnode-remove"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#childnode-remove"}},[t._v("#")]),t._v(" ChildNode.remove()")]),t._v(" "),a("p",[a("code",[t._v("remove()")]),t._v("方法用于从父节点移除当前节点。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("上面代码在 DOM 里面移除了"),a("code",[t._v("el")]),t._v("节点。")]),t._v(" "),a("h3",{attrs:{id:"childnode-before-childnode-after"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#childnode-before-childnode-after"}},[t._v("#")]),t._v(" ChildNode.before()，ChildNode.after()")]),t._v(" "),a("p",[a("strong",[t._v("（1）ChildNode.before()")])]),t._v(" "),a("p",[a("code",[t._v("before()")]),t._v("方法用于在当前节点的前面，插入一个或多个同级节点。两者拥有相同的父节点。")]),t._v(" "),a("p",[t._v("注意，该方法不仅可以插入元素节点，还可以插入文本节点。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'p'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" p1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'p'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 插入元素节点")]),t._v("\nel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("before")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 插入文本节点")]),t._v("\nel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("before")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 插入多个元素节点")]),t._v("\nel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("before")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 插入元素节点和文本节点")]),t._v("\nel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("before")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("strong",[t._v("（2）ChildNode.after()")])]),t._v(" "),a("p",[a("code",[t._v("after()")]),t._v("方法用于在当前节点的后面，插入一个或多个同级节点，两者拥有相同的父节点。用法与"),a("code",[t._v("before")]),t._v("方法完全相同。")]),t._v(" "),a("h3",{attrs:{id:"childnode-replacewith"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#childnode-replacewith"}},[t._v("#")]),t._v(" ChildNode.replaceWith()")]),t._v(" "),a("p",[a("code",[t._v("replaceWith()")]),t._v("方法使用参数节点，替换当前节点。参数可以是元素节点，也可以是文本节点。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" span "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'span'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replaceWith")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("span"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("上面代码中，"),a("code",[t._v("el")]),t._v("节点将被"),a("code",[t._v("span")]),t._v("节点替换。")])])}),[],!1,null,null,null);a.default=e.exports}}]);