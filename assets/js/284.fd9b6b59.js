(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{577:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"深入浅出节流函数-throttle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#深入浅出节流函数-throttle"}},[t._v("#")]),t._v(" 深入浅出节流函数 throttle")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://muyiy.cn/blog/7/7.1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://muyiy.cn/blog/7/7.1.html"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"引言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引言"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://muyiy.cn/blog/7/7.1.html#%E5%BC%95%E8%A8%80",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),s("OutboundLink")],1),t._v("引言")]),t._v(" "),s("p",[t._v("上一节我们详细聊了聊高阶函数之柯里化，通过介绍其定义和三种柯里化应用，并在最后实现了一个通用的 currying 函数。这一小节会继续之前的篇幅聊聊函数节流 throttle，给出这种高阶函数的定义、实现原理以及在 underscore 中的实现，欢迎大家拍砖。")]),t._v(" "),s("p",[t._v("有什么想法或者意见都可以在评论区留言，下图是本文的思维导图，高清思维导图和更多文章请看我的 "),s("a",{attrs:{href:"https://github.com/yygmind/blog",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://resource.muyiy.cn/image/2019-07-24-060201.jpg",alt:"66666333"}})]),t._v(" "),s("h2",{attrs:{id:"定义及解读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义及解读"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://muyiy.cn/blog/7/7.1.html#%E5%AE%9A%E4%B9%89%E5%8F%8A%E8%A7%A3%E8%AF%BB",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),s("OutboundLink")],1),t._v("定义及解读")]),t._v(" "),s("p",[t._v("函数节流指的是某个函数在一定时间间隔内（例如 3 秒）只执行一次，在这 3 秒内 "),s("strong",[t._v("无视后来产生的函数调用请求")]),t._v("，也不会延长时间间隔。3 秒间隔结束后第一次遇到新的函数调用会触发执行，然后在这新的 3 秒内依旧无视后来产生的函数调用请求，以此类推。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://resource.muyiy.cn/image/2019-07-24-060202.jpg",alt:"img"}})]),t._v(" "),s("p",[t._v("举一个小例子，不知道大家小时候有没有养过小金鱼啥的，养金鱼肯定少不了接水，刚开始接水时管道中水流很大，水到半满时开始拧紧水龙头，减少水流的速度变成 3 秒一滴，通过滴水给小金鱼增加氧气。")]),t._v(" "),s("p",[t._v("此时「管道中的水」就是我们频繁操作事件而不断涌入的回调任务，它需要接受「水龙头」安排；「水龙头」就是节流阀，控制水的流速，过滤无效的回调任务；「滴水」就是每隔一段时间执行一次函数，「3 秒」就是间隔时间，它是「水龙头」决定「滴水」的依据。")]),t._v(" "),s("p",[t._v("如果你还无法理解，看下面这张图就清晰多了，另外点击 "),s("a",{attrs:{href:"http://demo.nimius.net/debounce_throttle/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这个页面"),s("OutboundLink")],1),t._v(" 查看节流和防抖的可视化比较。其中 Regular 是不做任何处理的情况，throttle 是函数节流之后的结果，debounce 是函数防抖之后的结果（下一小节介绍）。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://resource.muyiy.cn/image/2019-07-24-060203.jpg",alt:"image-20190525193539745"}})]),t._v(" "),s("h2",{attrs:{id:"原理及实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原理及实现"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://muyiy.cn/blog/7/7.1.html#%E5%8E%9F%E7%90%86%E5%8F%8A%E5%AE%9E%E7%8E%B0",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),s("OutboundLink")],1),t._v("原理及实现")]),t._v(" "),s("p",[t._v("函数节流非常适用于函数被频繁调用的场景，例如：window.onresize() 事件、mousemove 事件、上传进度等情况。使用 throttle API 很简单，那应该如何实现 throttle 这个函数呢？")]),t._v(" "),s("p",[t._v("实现方案有以下两种")]),t._v(" "),s("ul",[s("li",[t._v("第一种是用时间戳来判断是否已到执行时间，记录上次执行的时间戳，然后每次触发事件执行回调，回调中判断当前时间戳距离上次执行时间戳的间隔是否已经达到时间差（Xms） ，如果是则执行，并更新上次执行的时间戳，如此循环。")]),t._v(" "),s("li",[t._v("第二种方法是使用定时器，比如当 scroll 事件刚触发时，打印一个 "),s("em",[t._v("hello world")]),t._v("，然后设置个 1000ms 的定时器，此后每次触发 scroll 事件触发回调，如果已经存在定时器，则回调不执行方法，直到定时器触发，handler 被清除，然后重新设置定时器。")])]),t._v(" "),s("p",[t._v("这里我们采用第一种方案来实现，通过闭包保存一个 previous 变量，每次触发 throttle 函数时判断当前时间和 previous 的时间差，如果这段时间差小于等待时间，那就忽略本次事件触发。如果大于等待时间就把 previous 设置为当前时间并执行函数 fn。")]),t._v(" "),s("p",[t._v("我们来一步步实现，首先实现用闭包保存 previous 变量。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("throttle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" wait")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上一次执行该函数的时间")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" previous "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("previous"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("执行 throttle 函数后会返回一个新的 function，我们命名为 betterFn。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("betterFn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("previous"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("betterFn 函数中可以获取到 previous 变量值也可以修改，在回调监听或事件触发时就会执行 betterFn，即 "),s("code",[t._v("betterFn()")]),t._v("，所以在这个新函数内判断当前时间和 previous 的时间差即可。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("betterFn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" now "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("now "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" previous "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" wait"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    previous "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" now\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行 fn 函数")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("结合上面两段代码就实现了节流函数，所以完整的实现如下。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fn 是需要执行的函数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// wait 是时间间隔")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("throttle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" wait "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上一次执行 fn 的时间")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" previous "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将 throttle 处理结果当作函数返回")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取当前时间，转换成时间戳，单位毫秒")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" now "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将当前时间和上一次执行函数的时间进行对比")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 大于等待时间就把 previous 设置为当前时间并执行函数 fn")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("now "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" previous "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" wait"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      previous "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" now\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DEMO")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行 throttle 函数返回新函数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" betterFn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("throttle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fn 函数执行了'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 每 10 毫秒执行一次 betterFn 函数，但是只有时间差大于 1000 时才会执行 fn")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("betterFn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"underscore-源码解读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#underscore-源码解读"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://muyiy.cn/blog/7/7.1.html#underscore-%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),s("OutboundLink")],1),t._v("underscore 源码解读")]),t._v(" "),s("p",[t._v("上述代码实现了一个简单的节流函数，不过 underscore 实现了更高级的功能，即新增了两个功能")]),t._v(" "),s("ul",[s("li",[t._v("配置是否需要响应事件刚开始的那次回调（ leading 参数，false 时忽略）")]),t._v(" "),s("li",[t._v("配置是否需要响应事件结束后的那次回调（ trailing 参数，false 时忽略）")])]),t._v(" "),s("p",[t._v("配置 { leading: false } 时，事件刚开始的那次回调不执行；配置 { trailing: false } 时，事件结束后的那次回调不执行，不过需要注意的是，这两者不能同时配置。")]),t._v(" "),s("p",[t._v("所以在 underscore 中的节流函数有 3 种调用方式，默认的（有头有尾），设置 { leading: false } 的，以及设置 { trailing: false } 的。上面说过实现 throttle 的方案有 2 种，一种是通过时间戳判断，另一种是通过定时器创建和销毁来控制。")]),t._v(" "),s("p",[t._v("第一种方案实现这 3 种调用方式存在一个问题，即事件停止触发时无法响应回调，所以 { trailing: true } 时无法生效。")]),t._v(" "),s("p",[t._v("第二种方案来实现也存在一个问题，因为定时器是延迟执行的，所以事件停止触发时必然会响应回调，所以 { trailing: false } 时无法生效。")]),t._v(" "),s("p",[t._v("underscore 采用的方案是两种方案搭配使用来实现这个功能。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("throttle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" wait"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" timeout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上一次执行回调的时间戳")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" previous "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 无传入参数时，初始化 options 为空对象")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" options "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("later")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当设置 { leading: false } 时")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 每次触发回调函数后设置 previous 为 0")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不然为当前时间")]),t._v("\n    previous "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("leading "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" _"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 防止内存泄漏，置为 null 便于后面根据 !timeout 设置新的 timeout")]),t._v("\n    timeout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行函数")]),t._v("\n    result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("timeout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" context "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" args "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 每次触发事件回调都执行这个函数")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 函数内判断是否执行 func")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// func 才是我们业务层代码想要执行的函数")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("throttled")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 记录当前时间")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" now "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第一次执行时（此时 previous 为 0，之后为上一次时间戳）")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 并且设置了 { leading: false }（表示第一次回调不执行）")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时设置 previous 为当前值，表示刚执行过，本次就不执行了")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("previous "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("leading "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" previous "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" now"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 距离下次触发 func 还需要等待的时间")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" remaining "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wait "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("now "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" previous"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    context "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    args "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 要么是到了间隔时间了，随即触发方法（remaining <= 0）")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 要么是没有传入 {leading: false}，且第一次触发回调，即立即触发")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时 previous 为 0，wait - (now - previous) 也满足 <= 0")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 之后便会把 previous 值迅速置为 now")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("remaining "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" remaining "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" wait"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timeout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timeout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// clearTimeout(timeout) 并不会把 timeout 设为 null")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 手动设置，便于后续判断")]),t._v("\n        timeout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      \n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置 previous 为当前时间")]),t._v("\n      previous "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" now"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      \n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行 func 函数")]),t._v("\n      result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("timeout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" context "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" args "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("timeout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("trailing "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最后一次需要触发的情况")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果已经存在一个定时器，则不会进入该 if 分支")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果 {trailing: false}，即最后一次不需要触发了，也不会进入这个分支")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 间隔 remaining milliseconds 后触发 later 方法")]),t._v("\n      timeout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("later"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" remaining"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 手动取消")]),t._v("\n  throttled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("cancel")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timeout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    previous "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    timeout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" args "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行 _.throttle 返回 throttled 函数")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" throttled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://muyiy.cn/blog/7/7.1.html#%E5%B0%8F%E7%BB%93",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),s("OutboundLink")],1),t._v("小结")]),t._v(" "),s("ul",[s("li",[t._v("函数节流指的是某个函数在一定时间间隔内（例如 3 秒）只执行一次，在这 3 秒内 "),s("strong",[t._v("无视后来产生的函数调用请求")])]),t._v(" "),s("li",[t._v("节流可以理解为养金鱼时拧紧水龙头放水，3 秒一滴\n"),s("ul",[s("li",[t._v("「管道中的水」就是我们频繁操作事件而不断涌入的回调任务，它需要接受「水龙头」安排")]),t._v(" "),s("li",[t._v("「水龙头」就是节流阀，控制水的流速，过滤无效的回调任务")]),t._v(" "),s("li",[t._v("「滴水」就是每隔一段时间执行一次函数")]),t._v(" "),s("li",[t._v("「3 秒」就是间隔时间，它是「水龙头」决定「滴水」的依据")])])]),t._v(" "),s("li",[t._v("节流实现方案有 2 种\n"),s("ul",[s("li",[t._v("第一种是用时间戳来判断是否已到执行时间，记录上次执行的时间戳，然后每次触发事件执行回调，回调中判断当前时间戳距离上次执行时间戳的间隔是否已经达到时间差（Xms） ，如果是则执行，并更新上次执行的时间戳，如此循环。")]),t._v(" "),s("li",[t._v("第二种方法是使用定时器，比如当 scroll 事件刚触发时，打印一个 "),s("em",[t._v("hello world")]),t._v("，然后设置个 1000ms 的定时器，此后每次触发 scroll 事件触发回调，如果已经存在定时器，则回调不执行方法，直到定时器触发，handler 被清除，然后重新设置定时器。")])])])]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://muyiy.cn/blog/7/7.1.html#%E5%8F%82%E8%80%83",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),s("OutboundLink")],1),t._v("参考")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://github.com/jashkenas/underscore/blob/master/underscore.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("underscore.js"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.im/book/5b936540f265da0a9624b04b?referrer=56dea4aa7664bf00559f002d",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端性能优化原理与实践"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/lessfish/underscore-analysis/issues/22",target:"_blank",rel:"noopener noreferrer"}},[t._v("underscore 函数节流的实现"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);