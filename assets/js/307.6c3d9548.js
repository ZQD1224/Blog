(window.webpackJsonp=window.webpackJsonp||[]).push([[307],{598:function(t,s,e){"use strict";e.r(s);var n=e(4),a=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"扩展运算符的技巧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#扩展运算符的技巧"}},[t._v("#")]),t._v(" 扩展运算符的技巧")]),t._v(" "),s("h3",{attrs:{id:"字符串转字符数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符串转字符数组"}},[t._v("#")]),t._v(" 字符串转字符数组")]),t._v(" "),s("p",[t._v("String 也是一个可迭代对象，所以也可以使用扩展运算符 ... 将其转为字符数组")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("const title = \"china\";\nconst charts = [...title];\nconsole.log(charts); // [ 'c', 'h', 'i', 'n', 'a' ]\n\n\n//简单的字符串截取\nconst title = \"china\";\nconst short = [...title];\nshort.length = 2;\nconsole.log(short.join(\"\")); // ch\n")])])]),s("h3",{attrs:{id:"nodelist-转数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nodelist-转数组"}},[t._v("#")]),t._v(" NodeList 转数组")]),t._v(" "),s("p",[s("em",[t._v("NodeList 对象是节点的集合，通常是由属性，如 Node.childNodes 和方法，如 document.querySelectorAll 返回的。")])]),t._v(" "),s("p",[t._v("NodeList 类似于数组，但不是数组，没有 Array 的所有方法，例如find、map、filter 等，但是可以使用 forEach() 来迭代。")]),t._v(" "),s("p",[t._v("可以通过扩展运算符将其转为数组，如下")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('const nodeList = document.querySelectorAll(".row");\nconst nodeArray = [...nodeList];\nconsole.log(nodeList);\nconsole.log(nodeArray)\n')])])])])}),[],!1,null,null,null);s.default=a.exports}}]);