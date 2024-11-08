(window.webpackJsonp=window.webpackJsonp||[]).push([[438],{730:function(t,s,a){"use strict";a.r(s);var e=a(4),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"scheduler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scheduler"}},[t._v("#")]),t._v(" Scheduler")]),t._v(" "),s("p",[t._v("在"),s("RouterLink",{attrs:{to:"/react-source/preparation/newConstructure.html#react16架构"}},[t._v("新的 React 架构")]),t._v("一节我们介绍了"),s("code",[t._v("Scheduler")]),t._v("，他包含两个功能：")],1),t._v(" "),s("ol",[s("li",[s("p",[t._v("时间切片")])]),t._v(" "),s("li",[s("p",[t._v("优先级调度")])])]),t._v(" "),s("p",[t._v("本节我们学习这个两个功能是如何在"),s("code",[t._v("Scheduler")]),t._v("中实现的。")]),t._v(" "),s("h2",{attrs:{id:"时间切片原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#时间切片原理"}},[t._v("#")]),t._v(" 时间切片原理")]),t._v(" "),s("p",[s("code",[t._v("时间切片")]),t._v("的本质是模拟实现"),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestIdleCallback",target:"_blank",rel:"noopener noreferrer"}},[t._v("requestIdleCallback"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("除去“浏览器重排/重绘”，下图是浏览器一帧中可以用于执行"),s("code",[t._v("JS")]),t._v("的时机。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("一个task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("宏任务"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("队列中全部job")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("微任务"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" requestAnimationFrame "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" 浏览器重排"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("重绘 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" requestIdleCallback\n")])])]),s("p",[s("code",[t._v("requestIdleCallback")]),t._v("是在“浏览器重排/重绘”后如果当前帧还有空余时间时被调用的。")]),t._v(" "),s("p",[t._v("浏览器并没有提供其他"),s("code",[t._v("API")]),t._v("能够在同样的时机（浏览器重排/重绘后）调用以模拟其实现。")]),t._v(" "),s("p",[t._v("唯一能精准控制调用时机的"),s("code",[t._v("API")]),t._v("是"),s("code",[t._v("requestAnimationFrame")]),t._v("，他能让我们在“浏览器重排/重绘”之前执行"),s("code",[t._v("JS")]),t._v("。")]),t._v(" "),s("p",[t._v("这也是为什么我们通常用这个"),s("code",[t._v("API")]),t._v("实现"),s("code",[t._v("JS")]),t._v("动画 —— 这是浏览器渲染前的最后时机，所以动画能快速被渲染。")]),t._v(" "),s("p",[t._v("所以，退而求其次，"),s("code",[t._v("Scheduler")]),t._v("的"),s("code",[t._v("时间切片")]),t._v("功能是通过"),s("code",[t._v("task")]),t._v("（宏任务）实现的。")]),t._v(" "),s("p",[t._v("最常见的"),s("code",[t._v("task")]),t._v("当属"),s("code",[t._v("setTimeout")]),t._v("了。但是有个"),s("code",[t._v("task")]),t._v("比"),s("code",[t._v("setTimeout")]),t._v("执行时机更靠前，那就是"),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/MessageChannel",target:"_blank",rel:"noopener noreferrer"}},[t._v("MessageChannel"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("所以"),s("code",[t._v("Scheduler")]),t._v("将需要被执行的回调函数作为"),s("code",[t._v("MessageChannel")]),t._v("的回调执行。如果当前宿主环境不支持"),s("code",[t._v("MessageChannel")]),t._v("，则使用"),s("code",[t._v("setTimeout")]),t._v("。")]),t._v(" "),s("blockquote",[s("p",[t._v("你可以在"),s("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/scheduler/src/forks/SchedulerHostConfig.default.js#L228-L234",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("看到"),s("code",[t._v("MessageChannel")]),t._v("的实现。"),s("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/scheduler/src/forks/SchedulerHostConfig.default.js#L47-L55",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("看到"),s("code",[t._v("setTimeout")]),t._v("的实现")])]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("React")]),t._v("的"),s("code",[t._v("render")]),t._v("阶段，开启"),s("code",[t._v("Concurrent Mode")]),t._v("时，每次遍历前，都会通过"),s("code",[t._v("Scheduler")]),t._v("提供的"),s("code",[t._v("shouldYield")]),t._v("方法判断是否需要中断遍历，使浏览器有时间渲染：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("workLoopConcurrent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Perform work until Scheduler asks us to yield")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workInProgress "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shouldYield")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("performUnitOfWork")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workInProgress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("是否中断的依据，最重要的一点便是每个任务的剩余时间是否用完。")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("Schdeduler")]),t._v("中，为任务分配的初始剩余时间为"),s("code",[t._v("5ms")]),t._v("。")]),t._v(" "),s("blockquote",[s("p",[t._v("你可以从"),s("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/scheduler/src/forks/SchedulerHostConfig.default.js#L119",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("看到初始剩余时间的定义")])]),t._v(" "),s("p",[t._v("随着应用运行，会通过"),s("code",[t._v("fps")]),t._v("动态调整分配给任务的可执行时间。")]),t._v(" "),s("blockquote",[s("p",[t._v("你可以从"),s("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/scheduler/src/forks/SchedulerHostConfig.default.js#L172-L187",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("看到动态分配任务时间")])]),t._v(" "),s("p",[t._v("这也解释了为什么"),s("RouterLink",{attrs:{to:"/react-source/preparation/idea.html#cpu的瓶颈"}},[t._v("设计理念")]),t._v("一节启用"),s("code",[t._v("Concurrent Mode")]),t._v("后每个任务的执行时间大体都是多于 5ms 的一小段时间 —— 每个时间切片被设定为 5ms，任务本身再执行一小段时间，所以整体时间是多于 5ms 的时间")],1),t._v(" "),s("img",{attrs:{src:t.$withBase("/img/time-slice.png"),alt:"长任务"}}),t._v(" "),s("p",[t._v("那么当"),s("code",[t._v("shouldYield")]),t._v("为"),s("code",[t._v("true")]),t._v("，以至于"),s("code",[t._v("performUnitOfWork")]),t._v('被中断后是如何重新启动的呢？我们会在介绍完"优先级调度"后解答。')]),t._v(" "),s("h2",{attrs:{id:"优先级调度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优先级调度"}},[t._v("#")]),t._v(" 优先级调度")]),t._v(" "),s("p",[t._v("首先我们来了解"),s("code",[t._v("优先级")]),t._v("的来源。需要明确的一点是，"),s("code",[t._v("Scheduler")]),t._v("是独立于"),s("code",[t._v("React")]),t._v("的包，所以他的"),s("code",[t._v("优先级")]),t._v("也是独立于"),s("code",[t._v("React")]),t._v("的"),s("code",[t._v("优先级")]),t._v("的。")]),t._v(" "),s("p",[s("code",[t._v("Scheduler")]),t._v("对外暴露了一个方法"),s("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/scheduler/src/Scheduler.js#L217-L237",target:"_blank",rel:"noopener noreferrer"}},[t._v("unstable_runWithPriority"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("这个方法接受一个"),s("code",[t._v("优先级")]),t._v("与一个"),s("code",[t._v("回调函数")]),t._v("，在"),s("code",[t._v("回调函数")]),t._v("内部调用获取"),s("code",[t._v("优先级")]),t._v("的方法都会取得第一个参数对应的"),s("code",[t._v("优先级")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unstable_runWithPriority")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("priorityLevel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" eventHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("priorityLevel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ImmediatePriority")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("UserBlockingPriority")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("NormalPriority")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("LowPriority")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("IdlePriority")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n      priorityLevel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" NormalPriority"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" previousPriorityLevel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" currentPriorityLevel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  currentPriorityLevel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" priorityLevel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("eventHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    currentPriorityLevel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" previousPriorityLevel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("可以看到，"),s("code",[t._v("Scheduler")]),t._v("内部存在 5 种优先级。")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("React")]),t._v("内部凡是涉及到"),s("code",[t._v("优先级")]),t._v("调度的地方，都会使用"),s("code",[t._v("unstable_runWithPriority")]),t._v("。")]),t._v(" "),s("p",[t._v("比如，我们知道"),s("code",[t._v("commit")]),t._v("阶段是同步执行的。可以看到，"),s("code",[t._v("commit")]),t._v("阶段的起点"),s("code",[t._v("commitRoot")]),t._v("方法的优先级为"),s("code",[t._v("ImmediateSchedulerPriority")]),t._v("。")]),t._v(" "),s("p",[s("code",[t._v("ImmediateSchedulerPriority")]),t._v("即"),s("code",[t._v("ImmediatePriority")]),t._v("的别名，为最高优先级，会立即执行。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("commitRoot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("root")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" renderPriorityLevel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCurrentPriorityLevel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("runWithPriority")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    ImmediateSchedulerPriority"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("commitRootImpl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" renderPriorityLevel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"优先级的意义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优先级的意义"}},[t._v("#")]),t._v(" 优先级的意义")]),t._v(" "),s("p",[s("code",[t._v("Scheduler")]),t._v("对外暴露最重要的方法便是"),s("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/scheduler/src/Scheduler.js#L279-L359",target:"_blank",rel:"noopener noreferrer"}},[t._v("unstable_scheduleCallback"),s("OutboundLink")],1),t._v("。该方法用于以某个"),s("code",[t._v("优先级")]),t._v("注册回调函数。")]),t._v(" "),s("p",[t._v("比如在"),s("code",[t._v("React")]),t._v("中，之前讲过在"),s("code",[t._v("commit")]),t._v("阶段的"),s("code",[t._v("beforeMutation")]),t._v("阶段会调度"),s("code",[t._v("useEffect")]),t._v("的回调：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("rootDoesHavePassiveEffects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  rootDoesHavePassiveEffects "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scheduleCallback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NormalSchedulerPriority"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("flushPassiveEffects")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这里的回调便是通过"),s("code",[t._v("scheduleCallback")]),t._v("调度的，优先级为"),s("code",[t._v("NormalSchedulerPriority")]),t._v("，即"),s("code",[t._v("NormalPriority")]),t._v("。")]),t._v(" "),s("p",[t._v("不同"),s("code",[t._v("优先级")]),t._v("意味着什么？不同"),s("code",[t._v("优先级")]),t._v("意味着不同时长的任务过期时间：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" timeout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("priorityLevel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ImmediatePriority")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    timeout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IMMEDIATE_PRIORITY_TIMEOUT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("UserBlockingPriority")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    timeout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("USER_BLOCKING_PRIORITY_TIMEOUT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("IdlePriority")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    timeout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IDLE_PRIORITY_TIMEOUT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("LowPriority")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    timeout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LOW_PRIORITY_TIMEOUT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("NormalPriority")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    timeout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NORMAL_PRIORITY_TIMEOUT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" expirationTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" startTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" timeout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("其中：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Times out immediately")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IMMEDIATE_PRIORITY_TIMEOUT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Eventually times out")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("USER_BLOCKING_PRIORITY_TIMEOUT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("250")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NORMAL_PRIORITY_TIMEOUT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LOW_PRIORITY_TIMEOUT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Never times out")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IDLE_PRIORITY_TIMEOUT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" maxSigned31BitInt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("可以看到，如果一个任务的"),s("code",[t._v("优先级")]),t._v("是"),s("code",[t._v("ImmediatePriority")]),t._v("，对应"),s("code",[t._v("IMMEDIATE_PRIORITY_TIMEOUT")]),t._v("为"),s("code",[t._v("-1")]),t._v("，那么")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" expirationTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" startTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("则该任务的过期时间比当前时间还短，表示他已经过期了，需要立即被执行。")]),t._v(" "),s("h2",{attrs:{id:"不同优先级任务的排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不同优先级任务的排序"}},[t._v("#")]),t._v(" 不同优先级任务的排序")]),t._v(" "),s("p",[t._v("我们已经知道"),s("code",[t._v("优先级")]),t._v("意味着任务的过期时间。设想一个大型"),s("code",[t._v("React")]),t._v("项目，在某一刻，存在很多不同"),s("code",[t._v("优先级")]),t._v("的"),s("code",[t._v("任务")]),t._v("，对应不同的过期时间。")]),t._v(" "),s("p",[t._v("同时，又因为任务可以被延迟，所以我们可以将这些任务按是否被延迟分为：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("已就绪任务")])]),t._v(" "),s("li",[s("p",[t._v("未就绪任务")])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" options "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" options "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" delay "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delay"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" delay "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"number"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" delay "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 任务被延迟")]),t._v("\n    startTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" currentTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" delay"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    startTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" currentTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  startTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" currentTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("所以，"),s("code",[t._v("Scheduler")]),t._v("存在两个队列：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("timerQueue：保存未就绪任务")])]),t._v(" "),s("li",[s("p",[t._v("taskQueue：保存已就绪任务")])])]),t._v(" "),s("p",[t._v("每当有新的未就绪的任务被注册，我们将其插入"),s("code",[t._v("timerQueue")]),t._v("并根据开始时间重新排列"),s("code",[t._v("timerQueue")]),t._v("中任务的顺序。")]),t._v(" "),s("p",[t._v("当"),s("code",[t._v("timerQueue")]),t._v("中有任务就绪，即"),s("code",[t._v("startTime <= currentTime")]),t._v("，我们将其取出并加入"),s("code",[t._v("taskQueue")]),t._v("。")]),t._v(" "),s("p",[t._v("取出"),s("code",[t._v("taskQueue")]),t._v("中最早过期的任务并执行他。")]),t._v(" "),s("p",[t._v("为了能在 O(1)复杂度找到两个队列中时间最早的那个任务，"),s("code",[t._v("Scheduler")]),t._v("使用"),s("a",{attrs:{href:"https://www.cnblogs.com/lanhaicode/p/10546257.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("小顶堆"),s("OutboundLink")],1),t._v("实现了"),s("code",[t._v("优先级队列")]),t._v("。")]),t._v(" "),s("blockquote",[s("p",[t._v("你可以在"),s("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/scheduler/src/SchedulerMinHeap.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("看到"),s("code",[t._v("优先级队列")]),t._v("的实现")])]),t._v(" "),s("p",[t._v("至此，我们了解了"),s("code",[t._v("Scheduler")]),t._v("的实现。现在可以回答介绍"),s("code",[t._v("时间切片")]),t._v("时提到的问题：")]),t._v(" "),s("blockquote",[s("p",[t._v("那么当 shouldYield 为 true，以至于 performUnitOfWork 被中断后是如何重新启动的呢？")])]),t._v(" "),s("p",[t._v("在“取出"),s("code",[t._v("taskQueue")]),t._v("中最早过期的任务并执行他”这一步中有如下关键步骤：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" continuationCallback "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("didUserCallbackTimeout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncurrentTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCurrentTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" continuationCallback "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"function"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// continuationCallback是函数")]),t._v("\n  currentTask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("callback "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" continuationCallback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("markTaskYield")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("currentTask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" currentTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("enableProfiling"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("markTaskCompleted")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("currentTask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" currentTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    currentTask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isQueued "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("currentTask "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("peek")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("taskQueue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将当前任务清除")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("taskQueue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("advanceTimers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("currentTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("当注册的回调函数执行后的返回值"),s("code",[t._v("continuationCallback")]),t._v("为"),s("code",[t._v("function")]),t._v("，会将"),s("code",[t._v("continuationCallback")]),t._v("作为当前任务的回调函数。")]),t._v(" "),s("p",[t._v("如果返回值不是"),s("code",[t._v("function")]),t._v("，则将当前被执行的任务清除出"),s("code",[t._v("taskQueue")]),t._v("。")]),t._v(" "),s("p",[s("code",[t._v("render")]),t._v("阶段被调度的函数为"),s("code",[t._v("performConcurrentWorkOnRoot")]),t._v("，在该函数末尾有这样一段代码：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("callbackNode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" originalCallbackNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The task node scheduled for this root is the same one that's")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// currently executed. Need to return a continuation.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("performConcurrentWorkOnRoot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("可以看到，在满足一定条件时，该函数会将自己作为返回值。")]),t._v(" "),s("blockquote",[s("p",[t._v("你可以在"),s("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberWorkLoop.old.js#L850-L854",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("看到这段代码")])]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("刚才我们讲到，"),s("code",[t._v("Scheduler")]),t._v("与"),s("code",[t._v("React")]),t._v("是两套"),s("code",[t._v("优先级")]),t._v("机制。那么"),s("code",[t._v("React")]),t._v("中的"),s("code",[t._v("优先级")]),t._v("是如何运转的？我们会在下一节介绍。")])])}),[],!1,null,null,null);s.default=n.exports}}]);