(window.webpackJsonp=window.webpackJsonp||[]).push([[764],{1246:function(t,e,s){"use strict";s.r(e);var n=s(14),a=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Project: [~THE PROJECT NAME~]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*~ This is the module template file for function modules.\n *~ You should rename it to index.d.ts and place it in a folder with the same name as the module.\n *~ For example, if you were writing a file for \"super-greeter\", this\n *~ file should be 'super-greeter/index.d.ts'\n */")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Note that ES6 modules cannot directly export class objects.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This file should be imported using the CommonJS-style:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   import x = require('[~THE MODULE~]');")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Alternatively, if --allowSyntheticDefaultImports or")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// --esModuleInterop is turned on, this file can also be")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// imported as a default import:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   import x from '[~THE MODULE~]';")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Refer to the TypeScript documentation at")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://www.typescriptlang.org/docs/handbook/modules.html#export--and-import--require")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// to understand common workarounds for this limitation of ES6 modules.")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*~ If this module is a UMD module that exposes a global variable 'myFuncLib' when\n *~ loaded outside a module loader environment, declare that global here.\n *~ Otherwise, delete this declaration.\n */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" myFuncLib"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*~ This declaration specifies that the function\n *~ is the exported object from the file\n */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MyFunction"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*~ This example shows how to have multiple overloads for your function */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("MyFunction")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MyFunction"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NamedReturnType"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("MyFunction")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("length"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MyFunction"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LengthReturnType"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*~ If you want to expose types from your module as well, you can\n *~ place them in this block. Often you will want to describe the\n *~ shape of the return type of the function; that type should\n *~ be declared in here, as this example shows.\n *~\n *~ Note that if you decide to include this namespace, the module can be\n *~ incorrectly imported as a namespace object, unless\n *~ --esModuleInterop is turned on:\n *~   import * as x from '[~THE MODULE~]'; // WRONG! DO NOT DO THIS!\n */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" MyFunction "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LengthReturnType")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        width"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        height"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NamedReturnType")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        firstName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        lastName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*~ If the module also has properties, declare them here. For example,\n     *~ this declaration says that this code is legal:\n     *~   import f = require('myFuncLibrary');\n     *~   console.log(f.defaultName);\n     */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" defaultName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" defaultLength"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);