(window.webpackJsonp=window.webpackJsonp||[]).push([[418],{709:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("本章为选读章节")]),t._v(" "),s("p",[t._v("是否学习该章对后续章节的学习没有影响。")])]),t._v(" "),s("p",[t._v("在"),s("RouterLink",{attrs:{to:"/react-source/process/beginWork.html#reconcilechildren"}},[t._v("beginWork 一节")]),t._v("我们提到")],1),t._v(" "),s("blockquote",[s("p",[t._v("对于"),s("code",[t._v("update")]),t._v("的组件，他会将当前组件与该组件在上次更新时对应的 Fiber 节点比较（也就是俗称的 Diff 算法），将比较的结果生成新 Fiber 节点。")])]),t._v(" "),s("p",[t._v("这一章我们讲解"),s("code",[t._v("Diff算法")]),t._v("的实现。")]),t._v(" "),s("blockquote",[s("p",[t._v("你可以从"),s("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/reconciliation.html#the-diffing-algorithm",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("看到"),s("code",[t._v("Diff算法")]),t._v("的介绍。")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("为了防止概念混淆，这里再强调下")]),t._v(" "),s("p",[t._v("一个"),s("code",[t._v("DOM节点")]),t._v("在某一时刻最多会有 4 个节点和他相关。")]),t._v(" "),s("ol",[s("li",[s("p",[s("code",[t._v("current Fiber")]),t._v("。如果该"),s("code",[t._v("DOM节点")]),t._v("已在页面中，"),s("code",[t._v("current Fiber")]),t._v("代表该"),s("code",[t._v("DOM节点")]),t._v("对应的"),s("code",[t._v("Fiber节点")]),t._v("。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("workInProgress Fiber")]),t._v("。如果该"),s("code",[t._v("DOM节点")]),t._v("将在本次更新中渲染到页面中，"),s("code",[t._v("workInProgress Fiber")]),t._v("代表该"),s("code",[t._v("DOM节点")]),t._v("对应的"),s("code",[t._v("Fiber节点")]),t._v("。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("DOM节点")]),t._v("本身。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("JSX对象")]),t._v("。即"),s("code",[t._v("ClassComponent")]),t._v("的"),s("code",[t._v("render")]),t._v("方法的返回结果，或"),s("code",[t._v("FunctionComponent")]),t._v("的调用结果。"),s("code",[t._v("JSX对象")]),t._v("中包含描述"),s("code",[t._v("DOM节点")]),t._v("的信息。")])])]),t._v(" "),s("p",[s("code",[t._v("Diff算法")]),t._v("的本质是对比 1 和 4，生成 2。")])]),t._v(" "),s("h2",{attrs:{id:"diff-的瓶颈以及-react-如何应对"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#diff-的瓶颈以及-react-如何应对"}},[t._v("#")]),t._v(" Diff 的瓶颈以及 React 如何应对")]),t._v(" "),s("p",[t._v("由于"),s("code",[t._v("Diff")]),t._v("操作本身也会带来性能损耗，React 文档中提到，即使在最前沿的算法中，将前后两棵树完全比对的算法的复杂程度为 O(n 3 )，其中"),s("code",[t._v("n")]),t._v("是树中元素的数量。")]),t._v(" "),s("p",[t._v("如果在"),s("code",[t._v("React")]),t._v("中使用了该算法，那么展示 1000 个元素所需要执行的计算量将在十亿的量级范围。这个开销实在是太过高昂。")]),t._v(" "),s("p",[t._v("为了降低算法复杂度，"),s("code",[t._v("React")]),t._v("的"),s("code",[t._v("diff")]),t._v("会预设三个限制：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("只对同级元素进行"),s("code",[t._v("Diff")]),t._v("。如果一个"),s("code",[t._v("DOM节点")]),t._v("在前后两次更新中跨越了层级，那么"),s("code",[t._v("React")]),t._v("不会尝试复用他。")])]),t._v(" "),s("li",[s("p",[t._v("两个不同类型的元素会产生出不同的树。如果元素由"),s("code",[t._v("div")]),t._v("变为"),s("code",[t._v("p")]),t._v("，React 会销毁"),s("code",[t._v("div")]),t._v("及其子孙节点，并新建"),s("code",[t._v("p")]),t._v("及其子孙节点。")])]),t._v(" "),s("li",[s("p",[t._v("开发者可以通过 "),s("code",[t._v("key prop")]),t._v("来暗示哪些子元素在不同的渲染下能保持稳定。考虑如下例子：")])])]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新前")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n  ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ka"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("ka")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n  ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("song"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("song")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新后")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n  ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("song"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("song")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n  ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ka"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("ka")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])]),s("p",[t._v("如果没有"),s("code",[t._v("key")]),t._v("，"),s("code",[t._v("React")]),t._v("会认为"),s("code",[t._v("div")]),t._v("的第一个子节点由"),s("code",[t._v("p")]),t._v("变为"),s("code",[t._v("h3")]),t._v("，第二个子节点由"),s("code",[t._v("h3")]),t._v("变为"),s("code",[t._v("p")]),t._v("。这符合限制 2 的设定，会销毁并新建。")]),t._v(" "),s("p",[t._v("但是当我们用"),s("code",[t._v("key")]),t._v("指明了节点前后对应关系后，"),s("code",[t._v("React")]),t._v("知道"),s("code",[t._v('key === "ka"')]),t._v("的"),s("code",[t._v("p")]),t._v("在更新后还存在，所以"),s("code",[t._v("DOM节点")]),t._v("可以复用，只是需要交换下顺序。")]),t._v(" "),s("p",[t._v("这就是"),s("code",[t._v("React")]),t._v("为了应对算法性能瓶颈做出的三条限制。")]),t._v(" "),s("h2",{attrs:{id:"diff-是如何实现的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#diff-是如何实现的"}},[t._v("#")]),t._v(" Diff 是如何实现的")]),t._v(" "),s("p",[t._v("我们从"),s("code",[t._v("Diff")]),t._v("的入口函数"),s("code",[t._v("reconcileChildFibers")]),t._v("出发，该函数会根据"),s("code",[t._v("newChild")]),t._v("（即"),s("code",[t._v("JSX对象")]),t._v("）类型调用不同的处理函数。")]),t._v(" "),s("blockquote",[s("p",[t._v("你可以从"),s("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactChildFiber.new.js#L1280",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("看到"),s("code",[t._v("reconcileChildFibers")]),t._v("的源码。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据newChild类型选择不同diff函数处理")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reconcileChildFibers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("returnFiber")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Fiber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("currentFirstChild")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Fiber "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("newChild")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" any")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Fiber "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" isObject "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" newChild "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" newChild "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// object类型，可能是 REACT_ELEMENT_TYPE 或 REACT_PORTAL_TYPE")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newChild"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$$"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REACT_ELEMENT_TYPE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用 reconcileSingleElement 处理")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// // ...省略其他case")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" newChild "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" newChild "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"number"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用 reconcileSingleTextNode 处理")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...省略")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newChild"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用 reconcileChildrenArray 处理")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...省略")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一些其他情况调用处理函数")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...省略")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以上都没有命中，删除节点")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteRemainingChildren")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("returnFiber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" currentFirstChild"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("我们可以从同级的节点数量将 Diff 分为两类：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("当"),s("code",[t._v("newChild")]),t._v("类型为"),s("code",[t._v("object")]),t._v("、"),s("code",[t._v("number")]),t._v("、"),s("code",[t._v("string")]),t._v("，代表同级只有一个节点")])]),t._v(" "),s("li",[s("p",[t._v("当"),s("code",[t._v("newChild")]),t._v("类型为"),s("code",[t._v("Array")]),t._v("，同级有多个节点")])])]),t._v(" "),s("p",[t._v("在接下来两节我们会分别讨论这两类节点的"),s("code",[t._v("Diff")]),t._v("。")])])}),[],!1,null,null,null);s.default=e.exports}}]);