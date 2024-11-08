(window.webpackJsonp=window.webpackJsonp||[]).push([[495],{786:function(e,_,v){"use strict";v.r(_);var c=v(4),a=Object(c.a)({},(function(){var e=this,_=e._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"不用一行代码-搞懂react调度器原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#不用一行代码-搞懂react调度器原理"}},[e._v("#")]),e._v(" 不用一行代码，搞懂React调度器原理")]),e._v(" "),_("p",[_("strong",[e._v("Scheduler(调度器)")]),e._v("[1]是"),_("code",[e._v("React")]),e._v("重要的组成部分。")]),e._v(" "),_("p",[e._v("同时，他也是个独立的包，任何**「连续、可中断」**的流程都可以用"),_("code",[e._v("Scheduler")]),e._v("来调度，比如：")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("const work = {count: 100};\n\nfunction doWork(work) {\n  work.count--;\n  console.log('do work!')\n}\n")])])]),_("p",[_("code",[e._v("work")]),e._v("满足两个条件：")]),e._v(" "),_("ol",[_("li",[e._v("工作是连续的。一共需要执行100次，每次执行时调用"),_("code",[e._v("doWork")])]),e._v(" "),_("li",[e._v("工作是可中断的。中断恢复后，接着中断前的"),_("code",[e._v("work.count")]),e._v("继续执行就行")])]),e._v(" "),_("p",[e._v("满足这两个条件的工作都可以用"),_("code",[e._v("Scheduler")]),e._v("来调度。")]),e._v(" "),_("p",[e._v("调度后，"),_("code",[e._v("Scheduler")]),e._v("内部会生成对应"),_("code",[e._v("task")]),e._v("，并在正确的时机执行"),_("code",[e._v("task.callback")]),e._v("：")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("const task1 = {\n  // 过期时间 等于 当前时间 + 优先级对应时间\n  expirationTime: currentTime + priority,\n  callback: doWork.bind(null, work)\n}\n")])])]),_("p",[e._v("本文会讲解"),_("code",[e._v("Scheduler")]),e._v("的实现原理。知道你不喜欢看大段的代码，所以本文没有一行代码。文末有"),_("code",[e._v("Scheduler")]),e._v("的源码地址，感兴趣的话可以去看看。")]),e._v(" "),_("p",[e._v("开整～")]),e._v(" "),_("h2",{attrs:{id:"工作流程概览"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#工作流程概览"}},[e._v("#")]),e._v(" 工作流程概览")]),e._v(" "),_("p",[_("code",[e._v("Scheduler")]),e._v("的工作原理如下图，接下来会详细解释：")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/5Q3ZxrD2qNDZDmWdkibOIygJN3RWUa6vcTmlf3K7q0Q3wricYuse3Eb5EJTpTkV7hX9UweyWDbkiaYeh9AYQEJcGA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),e._v(" "),_("p",[e._v("在"),_("code",[e._v("Scheduler")]),e._v("中有两个容易混淆的概念：")]),e._v(" "),_("ol",[_("li",[e._v("delay")])]),e._v(" "),_("p",[_("code",[e._v("delay")]),e._v("代表**「task需要延迟执行的时间」**。配置了"),_("code",[e._v("delay")]),e._v("的"),_("code",[e._v("task")]),e._v("会先进入"),_("code",[e._v("timerQueue")]),e._v("中。")]),e._v(" "),_("p",[e._v("当"),_("code",[e._v("delay")]),e._v("对应时间到期后，该"),_("code",[e._v("task")]),e._v("会转移到"),_("code",[e._v("taskQueue")]),e._v("中。")]),e._v(" "),_("ol",[_("li",[e._v("expirationTime")])]),e._v(" "),_("p",[_("code",[e._v("expirationTime")]),e._v("代表**「task的过期时间」**。")]),e._v(" "),_("p",[e._v("不是所有"),_("code",[e._v("task")]),e._v("都会配置"),_("code",[e._v("delay")]),e._v("，没有配置"),_("code",[e._v("delay")]),e._v("的"),_("code",[e._v("task")]),e._v("会直接进入"),_("code",[e._v("taskQueue")]),e._v("。这就导致"),_("code",[e._v("taskQueue")]),e._v("中可能存在多个"),_("code",[e._v("task")]),e._v("。")]),e._v(" "),_("p",[e._v("如何决定哪个"),_("code",[e._v("task.callback")]),e._v("先执行呢？"),_("code",[e._v("Scheduler")]),e._v("根据"),_("code",[e._v("task.expirationTime")]),e._v("作为排序依据，值越小优先级越高。")]),e._v(" "),_("p",[e._v("如果"),_("code",[e._v("task.expirationTime")]),e._v("小于当前时间，不仅优先级最高，而且"),_("code",[e._v("task.callback")]),e._v("的执行不会被中断。")]),e._v(" "),_("p",[e._v("总结一下"),_("code",[e._v("task")]),e._v("的几种情况：")]),e._v(" "),_("ol",[_("li",[e._v("配置"),_("code",[e._v("delay")]),e._v("且"),_("code",[e._v("delay")]),e._v("未到期："),_("code",[e._v("task")]),e._v("一定不会执行")]),e._v(" "),_("li",[e._v("配置"),_("code",[e._v("delay")]),e._v("且到期，或者未配置"),_("code",[e._v("delay")]),e._v("的"),_("code",[e._v("task")]),e._v("，同时"),_("code",[e._v("task.expirationTime")]),e._v("未到期：根据"),_("code",[e._v("task.expirationTime")]),e._v("排序后，按顺序执行")]),e._v(" "),_("li",[_("code",[e._v("task.expirationTime")]),e._v("到期的"),_("code",[e._v("task")]),e._v("：优先级最高，且同步、不可中断")])]),e._v(" "),_("h2",{attrs:{id:"工作流程详解"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#工作流程详解"}},[e._v("#")]),e._v(" 工作流程详解")]),e._v(" "),_("p",[e._v("将流程概览图替换为"),_("code",[e._v("Scheduler")]),e._v("中具体方法后，如下：")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/5Q3ZxrD2qNDZDmWdkibOIygJN3RWUa6vcWPzkLaUx1yLAlsYkkflGOXLwoyXjPWmib4m1MIicvft5FjMJQqmFrGFQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),e._v(" "),_("p",[e._v("完整工作流程如下：")]),e._v(" "),_("ol",[_("li",[e._v("执行"),_("code",[e._v("Scheduler.scheduleCallback")]),e._v("生成"),_("code",[e._v("task")])])]),e._v(" "),_("p",[e._v("根据**「是否传递delay参数」**，生成的"),_("code",[e._v("task")]),e._v("会进入"),_("code",[e._v("timerQueue")]),e._v("或"),_("code",[e._v("taskQueue")]),e._v("。")]),e._v(" "),_("ol",[_("li",[e._v("当"),_("code",[e._v("timerQueue")]),e._v("中第一个"),_("code",[e._v("task")]),e._v("延迟的时间到期后，执行"),_("code",[e._v("advanceTimers")]),e._v("将**「到期的task」**从"),_("code",[e._v("timerQueue")]),e._v("中移到"),_("code",[e._v("taskQueue")]),e._v("中")])]),e._v(" "),_("p",[e._v("其中，"),_("code",[e._v("timerQueue")]),e._v("、"),_("code",[e._v("taskQueue")]),e._v("的数据结构为"),_("code",[e._v("小顶堆")]),e._v("实现的"),_("code",[e._v("优先级队列")]),e._v("。")]),e._v(" "),_("ol",[_("li",[e._v("接下来，执行"),_("code",[e._v("requestHostCallback")]),e._v("方法，他会在新的"),_("code",[e._v("宏任务")]),e._v("中执行"),_("code",[e._v("workLoop")]),e._v("方法")])]),e._v(" "),_("p",[e._v("**「在宏任务中执行回调」**的方法很多，"),_("code",[e._v("Scheduler")]),e._v("在浏览器环境默认使用"),_("code",[e._v("MessageChannel")]),e._v("实现。")]),e._v(" "),_("p",[e._v("如果不支持"),_("code",[e._v("MessageChannel")]),e._v("，会降级到"),_("code",[e._v("setTimeout")]),e._v("。"),_("code",[e._v("Node")]),e._v("或"),_("code",[e._v("老版IE")]),e._v("下会使用"),_("code",[e._v("setImmediate")]),e._v("。")]),e._v(" "),_("ol",[_("li",[_("code",[e._v("workLoop")]),e._v("方法会循环消费"),_("code",[e._v("taskQueue")]),e._v("中的"),_("code",[e._v("task")]),e._v("（即执行"),_("code",[e._v("task.callback")]),e._v("），直到满足如下条件之一，中断循环：")])]),e._v(" "),_("ul",[_("li",[_("code",[e._v("taskQueue")]),e._v("中不存在"),_("code",[e._v("task")])]),e._v(" "),_("li",[e._v("时间切片用尽")])]),e._v(" "),_("ol",[_("li",[e._v("循环中断后，如果"),_("code",[e._v("taskQueue")]),e._v("不为空，则进入步骤3。如果"),_("code",[e._v("timerQueue")]),e._v("不为空，则进入步骤2")])]),e._v(" "),_("h2",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),_("p",[e._v("总结一下，"),_("code",[e._v("Scheduler")]),e._v("的完整执行流程包括两个循环：")]),e._v(" "),_("ol",[_("li",[_("code",[e._v("taskQueue")]),e._v("的生产（从"),_("code",[e._v("timerQueue")]),e._v("中移入或执行"),_("code",[e._v("scheduleCallback")]),e._v("生成）到消费的过程（即图中灰色部分），这是个异步循环")]),e._v(" "),_("li",[_("code",[e._v("taskQueue")]),e._v("的具体消费过程（即"),_("code",[e._v("workLoop")]),e._v("方法的执行），这是个同步循环")])]),e._v(" "),_("p",[e._v("如果你想了解**「React中如何使用Scheduler」**，可以参考"),_("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzkzMjIxNTcyMA==&mid=2247489391&idx=1&sn=bf420bb9013f0093cd897b1865b62681&chksm=c25e79a8f529f0bea56db9adfb95f4b933982c96afbb9674eda6693e67d591c5b19ce41f0f37&token=1599882398&lang=zh_CN&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("100行代码实现React核心调度功能"),_("OutboundLink")],1)]),e._v(" "),_("h3",{attrs:{id:"参考资料"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),_("p",[e._v("[1]Scheduler(调度器): https://github.com/facebook/react/blob/main/packages/scheduler/src/forks/Scheduler.js")])])}),[],!1,null,null,null);_.default=a.exports}}]);