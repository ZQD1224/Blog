(window.webpackJsonp=window.webpackJsonp||[]).push([[429],{721:function(v,e,o){"use strict";o.r(e);var _=o(4),t=Object(_.a)({},(function(){var v=this,e=v._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[v._v("#")]),v._v(" 前言")]),v._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[v._v("注意")]),v._v(" "),e("p",[v._v("在开始本章学习前，你需要了解"),e("code",[v._v("Hooks")]),v._v("的基本用法。")]),v._v(" "),e("p",[v._v("如果你还未使用过"),e("code",[v._v("Hooks")]),v._v("，可以从"),e("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/hooks-intro.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("官方文档"),e("OutboundLink")],1),v._v("开始。")])]),v._v(" "),e("p",[v._v("你可以从"),e("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/hooks-intro.html#motivation",target:"_blank",rel:"noopener noreferrer"}},[v._v("这里"),e("OutboundLink")],1),v._v("了解"),e("code",[v._v("Hooks")]),v._v("的设计动机。作为一名"),e("code",[v._v("框架使用者")]),v._v("，了解"),e("code",[v._v("设计动机")]),v._v("对于我们日常开发就足够了。")]),v._v(" "),e("p",[v._v("但是，为了更好的理解"),e("code",[v._v("Hooks")]),v._v("的"),e("code",[v._v("源码架构")]),v._v("，我们需要转换身份，以"),e("code",[v._v("框架开发者")]),v._v("的角度来看待"),e("code",[v._v("Hooks")]),v._v("的"),e("code",[v._v("设计理念")]),v._v("。")]),v._v(" "),e("h2",{attrs:{id:"从-logo-聊起"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从-logo-聊起"}},[v._v("#")]),v._v(" 从 LOGO 聊起")]),v._v(" "),e("img",{attrs:{src:v.$withBase("/img/logo.png"),alt:"LOGO"}}),v._v(" "),e("p",[e("code",[v._v("React")]),v._v(" "),e("code",[v._v("LOGO")]),v._v("的图案是代表"),e("code",[v._v("原子")]),v._v("（"),e("code",[v._v("atom")]),v._v("）的符号。世间万物由"),e("code",[v._v("原子")]),v._v("组成，"),e("code",[v._v("原子")]),v._v("的"),e("code",[v._v("类型")]),v._v("与"),e("code",[v._v("属性")]),v._v("决定了事物的外观与表现。")]),v._v(" "),e("p",[v._v("同样，在"),e("code",[v._v("React")]),v._v("中，我们可以将"),e("code",[v._v("UI")]),v._v("拆分为很多独立的单元，每个单元被称为"),e("code",[v._v("Component")]),v._v("。这些"),e("code",[v._v("Component")]),v._v("的"),e("code",[v._v("属性")]),v._v("与"),e("code",[v._v("类型")]),v._v("决定了"),e("code",[v._v("UI")]),v._v("的外观与表现。")]),v._v(" "),e("p",[v._v("讽刺的是，"),e("code",[v._v("原子")]),v._v("在希腊语中的意思为"),e("code",[v._v("不可分割的")]),v._v("（"),e("code",[v._v("indivisible")]),v._v("），但随后科学家在原子中发现了更小的粒子 —— 电子（"),e("code",[v._v("electron")]),v._v("）。电子可以很好的解释"),e("code",[v._v("原子")]),v._v("是如何工作的。")]),v._v(" "),e("p",[v._v("在"),e("code",[v._v("React")]),v._v("中，我们可以说"),e("code",[v._v("ClassComponent")]),v._v("是一类"),e("code",[v._v("原子")]),v._v("。")]),v._v(" "),e("p",[v._v("但对于"),e("code",[v._v("Hooks")]),v._v("来说，与其说是一类"),e("code",[v._v("原子")]),v._v("，不如说他是更贴近事物"),e("code",[v._v("运行规律")]),v._v("的"),e("code",[v._v("电子")]),v._v("。")]),v._v(" "),e("p",[v._v("我们知道，"),e("code",[v._v("React")]),v._v("的架构遵循"),e("code",[v._v("schedule - render - commit")]),v._v("的运行流程，这个流程是"),e("code",[v._v("React")]),v._v("世界最底层的"),e("code",[v._v("运行规律")]),v._v("。")]),v._v(" "),e("p",[e("code",[v._v("ClassComponent")]),v._v("作为"),e("code",[v._v("React")]),v._v("世界的"),e("code",[v._v("原子")]),v._v("，他的"),e("code",[v._v("生命周期")]),v._v("（"),e("code",[v._v("componentWillXXX")]),v._v("/"),e("code",[v._v("componentDidXXX")]),v._v("）是为了介入"),e("code",[v._v("React")]),v._v("的运行流程而实现的更上层抽象，这么做是为了方便"),e("code",[v._v("框架使用者")]),v._v("更容易上手。")]),v._v(" "),e("p",[v._v("相比于"),e("code",[v._v("ClassComponent")]),v._v("的更上层抽象，"),e("code",[v._v("Hooks")]),v._v("则更贴近"),e("code",[v._v("React")]),v._v("内部运行的各种概念（"),e("code",[v._v("state")]),v._v(" | "),e("code",[v._v("context")]),v._v(" | "),e("code",[v._v("life-cycle")]),v._v("）。")]),v._v(" "),e("p",[v._v("作为使用"),e("code",[v._v("React")]),v._v("技术栈的开发者，当我们初次学习"),e("code",[v._v("Hooks")]),v._v("时，不管是官方文档还是身边有经验的同事，总会拿"),e("code",[v._v("ClassComponent")]),v._v("的生命周期来类比"),e("code",[v._v("Hooks API")]),v._v("的执行时机。")]),v._v(" "),e("p",[v._v("这固然是很好的上手方式，但是当我们熟练运用"),e("code",[v._v("Hooks")]),v._v("时，就会发现，这两者的概念有很多割裂感，并不是同一抽象层次可以互相替代的概念。")]),v._v(" "),e("p",[v._v("比如：替代"),e("code",[v._v("componentWillReceiveProps")]),v._v("的"),e("code",[v._v("Hooks")]),v._v("是什么呢？")]),v._v(" "),e("p",[v._v("可能有些同学会回答，是"),e("code",[v._v("useEffect")]),v._v("：")]),v._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[v._v("useEffect")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=>")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),v._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[v._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[v._v('"something updated"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(",")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),v._v("props"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),v._v("something"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n")])])]),e("p",[v._v("但是"),e("code",[v._v("componentWillReceiveProps")]),v._v("是在"),e("code",[v._v("render阶段")]),v._v("执行，而"),e("code",[v._v("useEffect")]),v._v("是在"),e("code",[v._v("commit阶段")]),v._v("完成渲染后异步执行。")]),v._v(" "),e("blockquote",[e("p",[v._v("这篇文章可以帮你更好理解"),e("code",[v._v("componentWillReceiveProps")]),v._v("："),e("a",{attrs:{href:"https://juejin.im/post/5f05a3e25188252e5c576cdb",target:"_blank",rel:"noopener noreferrer"}},[v._v("深入源码剖析 componentWillXXX 为什么 UNSAFE"),e("OutboundLink")],1)])]),v._v(" "),e("p",[v._v("所以，从源码运行规律的角度看待"),e("code",[v._v("Hooks")]),v._v("，可能是更好的角度。这也是为什么上文说"),e("code",[v._v("Hooks")]),v._v("是"),e("code",[v._v("React")]),v._v("世界的"),e("code",[v._v("电子")]),v._v("而不是"),e("code",[v._v("原子")]),v._v("的原因。")]),v._v(" "),e("blockquote",[e("p",[v._v("以上见解参考自"),e("a",{attrs:{href:"https://www.youtube.com/watch?v=dpw9EHDh2bM&feature=youtu.be",target:"_blank",rel:"noopener noreferrer"}},[v._v("React Core Team Dan 在 React Conf2018 的演讲"),e("OutboundLink")],1)])]),v._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),e("p",[e("code",[v._v("Concurrent Mode")]),v._v("是"),e("code",[v._v("React")]),v._v("未来的发展方向，而"),e("code",[v._v("Hooks")]),v._v("是能够最大限度发挥"),e("code",[v._v("Concurrent Mode")]),v._v("潜力的"),e("code",[v._v("Component")]),v._v("构建方式。")]),v._v(" "),e("p",[v._v("正如 Dan 在"),e("code",[v._v("React Conf 2018")]),v._v("演讲结尾所说：你可以从"),e("code",[v._v("React")]),v._v("的"),e("code",[v._v("LOGO")]),v._v("中看到这些围绕着"),e("code",[v._v("核心")]),v._v("的"),e("code",[v._v("电子飞行轨道")]),v._v("，"),e("code",[v._v("Hooks")]),v._v("可能一直就在其中。")])])}),[],!1,null,null,null);e.default=t.exports}}]);