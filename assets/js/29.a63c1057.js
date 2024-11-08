(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{320:function(t,s,a){"use strict";a.r(s);var n=a(4),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"理解javascript中的执行上下文和执行栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#理解javascript中的执行上下文和执行栈"}},[t._v("#")]),t._v(" 理解JavaScript中的执行上下文和执行栈")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://muyiy.cn/blog/1/1.1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://muyiy.cn/blog/1/1.1.html"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("执行上下文是当前 JavaScript 代码被解析和执行时所在环境的抽象概念。")]),t._v(" "),s("h2",{attrs:{id:"执行上下文的类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文的类型"}},[t._v("#")]),t._v(" 执行上下文的类型")]),t._v(" "),s("p",[t._v("执行上下文总共有三种类型")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("全局执行上下文")]),t._v("：只有一个，浏览器中的全局对象就是 window 对象，"),s("code",[t._v("this")]),t._v(" 指向这个全局对象。")]),t._v(" "),s("li",[s("strong",[t._v("函数执行上下文")]),t._v("：存在无数个，只有在函数被调用的时候才会被创建，每次调用函数都会创建一个新的执行上下文。")]),t._v(" "),s("li",[s("strong",[t._v("Eval 函数执行上下文")]),t._v("： 指的是运行在 "),s("code",[t._v("eval")]),t._v(" 函数中的代码，很少用而且不建议使用。")])]),t._v(" "),s("h2",{attrs:{id:"执行栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行栈"}},[t._v("#")]),t._v(" 执行栈")]),t._v(" "),s("p",[t._v("执行栈，也叫调用栈，具有 "),s("code",[t._v("LIFO")]),t._v("（后进先出）结构，用于存储在代码执行期间创建的所有执行上下文。")]),t._v(" "),s("p",[t._v("首次运行JS代码时，会创建一个"),s("strong",[t._v("全局")]),t._v("执行上下文并"),s("code",[t._v("Push")]),t._v("到当前的执行栈中。每当发生函数调用，引擎都会为该函数创建一个"),s("strong",[t._v("新的函数")]),t._v("执行上下文并"),s("code",[t._v("Push")]),t._v("到当前执行栈的栈顶。")]),t._v(" "),s("p",[t._v("根据执行栈"),s("code",[t._v("LIFO")]),t._v("规则，当栈顶函数运行完成后，其对应的"),s("strong",[t._v("函数")]),t._v("执行上下文将会从执行栈中"),s("code",[t._v("Pop")]),t._v("出，上下文控制权将移到当前执行栈的"),s("strong",[t._v("下一个")]),t._v("执行上下文。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("first")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Inside first function'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("second")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Again inside first function'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("second")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Inside second function'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("first")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Inside Global Execution Context'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Inside first function")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Inside second function")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Again inside first function")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Inside Global Execution Context")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"https://gitee.com/qdzhou/img-upload/raw/master/images/202202161500910.jpg",alt:"img"}})]),t._v(" "),s("h2",{attrs:{id:"执行上下文的创建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文的创建"}},[t._v("#")]),t._v(" 执行上下文的创建")]),t._v(" "),s("p",[t._v("执行上下文分两个阶段创建：")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("创建阶段")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("执行阶段")])])])]),t._v(" "),s("h3",{attrs:{id:"创建阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建阶段"}},[t._v("#")]),t._v(" 创建阶段")]),t._v(" "),s("ul",[s("li",[t._v("1、确定 "),s("strong",[t._v("this")]),t._v(" 的值，也被称为 "),s("strong",[t._v("This Binding")]),t._v("。")]),t._v(" "),s("li",[t._v("2、"),s("strong",[t._v("LexicalEnvironment（词法环境）")]),t._v(" 组件被创建。")]),t._v(" "),s("li",[t._v("3、"),s("strong",[t._v("VariableEnvironment（变量环境）")]),t._v(" 组件被创建。")])]),t._v(" "),s("p",[t._v("直接看伪代码可能更加直观")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("ExecutionContext "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n  ThisBinding "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 确定this ")]),t._v("\n  LexicalEnvironment "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 词法环境")]),t._v("\n  VariableEnvironment "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 变量环境")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"this-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#this-binding"}},[t._v("#")]),t._v(" This Binding")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("全局")]),t._v("执行上下文中，"),s("code",[t._v("this")]),t._v(" 的值指向全局对象，在浏览器中"),s("code",[t._v("this")]),t._v(" 的值指向 "),s("code",[t._v("window")]),t._v("对象，而在"),s("code",[t._v("nodejs")]),t._v("中指向这个文件的"),s("code",[t._v("module")]),t._v("对象。")]),t._v(" "),s("li",[s("strong",[t._v("函数")]),t._v("执行上下文中，"),s("code",[t._v("this")]),t._v(" 的值取决于函数的调用方式。具体有：默认绑定、隐式绑定、显式绑定（硬绑定）、"),s("code",[t._v("new")]),t._v("绑定、箭头函数，具体内容会在【this全面解析】部分详解。")])]),t._v(" "),s("h4",{attrs:{id:"词法环境-lexical-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#词法环境-lexical-environment"}},[t._v("#")]),t._v(" 词法环境（Lexical Environment）")]),t._v(" "),s("p",[t._v("词法环境有两个"),s("strong",[t._v("组成部分")])]),t._v(" "),s("ul",[s("li",[t._v("1、"),s("strong",[t._v("环境记录")]),t._v("：存储变量和函数声明的实际位置")]),t._v(" "),s("li",[t._v("2、"),s("strong",[t._v("对外部环境的引用")]),t._v("：可以访问其外部词法环境")])]),t._v(" "),s("p",[t._v("词法环境有两种"),s("strong",[t._v("类型")])]),t._v(" "),s("ul",[s("li",[t._v("1、"),s("strong",[t._v("全局环境")]),t._v("：是一个没有外部环境的词法环境，其外部环境引用为 "),s("strong",[t._v("null")]),t._v("。拥有一个全局对象（window 对象）及其关联的方法和属性（例如数组方法）以及任何用户自定义的全局变量，"),s("code",[t._v("this")]),t._v(" 的值指向这个全局对象。")]),t._v(" "),s("li",[t._v("2、"),s("strong",[t._v("函数环境")]),t._v("：用户在函数中定义的变量被存储在"),s("strong",[t._v("环境记录")]),t._v("中，包含了"),s("code",[t._v("arguments")]),t._v(" 对象。对外部环境的引用可以是全局环境，也可以是包含内部函数的外部函数环境。")])]),t._v(" "),s("p",[t._v("直接看伪代码可能更加直观")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("GlobalExectionContext "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局执行上下文")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("LexicalEnvironment")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    \t  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 词法环境")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("EnvironmentRecord")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   \t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 环境记录")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Object"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("      \t\t   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局环境")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标识符绑定在这里 ")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("outer")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \t   \t\t   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对外部环境的引用")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nFunctionExectionContext "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 函数执行上下文")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("LexicalEnvironment")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \t  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 词法环境")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("EnvironmentRecord")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 环境记录")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Declarative"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \t   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 函数环境")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标识符绑定在这里 \t\t\t  // 对外部环境的引用")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("outer")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Global or outer "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" environment reference"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"变量环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量环境"}},[t._v("#")]),t._v(" 变量环境")]),t._v(" "),s("p",[t._v("变量环境也是一个词法环境，因此它具有上面定义的词法环境的所有属性。")]),t._v(" "),s("p",[t._v("在 ES6 中，"),s("strong",[t._v("词法")]),t._v(" 环境和 "),s("strong",[t._v("变量")]),t._v(" 环境的区别在于前者用于存储**函数声明和变量（ "),s("code",[t._v("let")]),t._v(" 和 "),s("code",[t._v("const")]),t._v(" ）"),s("strong",[t._v("绑定，而后者仅用于存储")]),t._v("变量（ "),s("code",[t._v("var")]),t._v(" ）**绑定。")]),t._v(" "),s("p",[t._v("使用例子进行介绍")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("multiply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" g "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" e "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" f "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" g"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("multiply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("执行上下文如下所示")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("GlobalExectionContext "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ThisBinding")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Global Object"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("LexicalEnvironment")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("EnvironmentRecord")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Object"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标识符绑定在这里  ")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" uninitialized "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("b")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" uninitialized "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("multiply")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" func "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("outer")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("VariableEnvironment")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("EnvironmentRecord")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Object"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标识符绑定在这里  ")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("c")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("outer")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nFunctionExectionContext "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n   \n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ThisBinding")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Global Object"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("LexicalEnvironment")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("EnvironmentRecord")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Declarative"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标识符绑定在这里  ")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Arguments")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("length")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("outer")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("GlobalLexicalEnvironment"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("VariableEnvironment")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("EnvironmentRecord")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Declarative"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标识符绑定在这里  ")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("g")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("outer")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("GlobalLexicalEnvironment"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("变量提升")]),t._v("的原因：在创建阶段，函数声明存储在环境中，而变量会被设置为 "),s("code",[t._v("undefined")]),t._v("（在 "),s("code",[t._v("var")]),t._v(" 的情况下）或保持未初始化（在 "),s("code",[t._v("let")]),t._v(" 和 "),s("code",[t._v("const")]),t._v(" 的情况下）。所以这就是为什么可以在声明之前访问 "),s("code",[t._v("var")]),t._v(" 定义的变量（尽管是 "),s("code",[t._v("undefined")]),t._v(" ），但如果在声明之前访问 "),s("code",[t._v("let")]),t._v(" 和 "),s("code",[t._v("const")]),t._v(" 定义的变量就会提示引用错误的原因。这就是所谓的变量提升。")]),t._v(" "),s("h3",{attrs:{id:"执行阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行阶段"}},[t._v("#")]),t._v(" 执行阶段")]),t._v(" "),s("p",[t._v("此阶段，完成对所有变量的分配，最后执行代码。")]),t._v(" "),s("p",[t._v("如果 Javascript 引擎在源代码中声明的实际位置找不到 "),s("code",[t._v("let")]),t._v(" 变量的值，那么将为其分配 "),s("code",[t._v("undefined")]),t._v(" 值。")]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://juejin.im/post/5bdfd3e151882516c6432c32",target:"_blank",rel:"noopener noreferrer"}},[t._v("理解 Javascript 执行上下文和执行栈"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);