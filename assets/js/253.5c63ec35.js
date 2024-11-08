(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{544:function(e,t,n){"use strict";n.r(t);var r=n(4),o=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"一文搞懂-koa2-核心原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一文搞懂-koa2-核心原理"}},[e._v("#")]),e._v(" 一文搞懂 koa2 核心原理")]),e._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/dC2MlBK-fCLnr1DDnAjgUQ",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://mp.weixin.qq.com/s/dC2MlBK-fCLnr1DDnAjgUQ"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"koa的基础结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#koa的基础结构"}},[e._v("#")]),e._v(" koa的基础结构")]),e._v(" "),t("p",[e._v("首先，让我们认识一下koa框架的定位——koa是一个精简的node框架：")]),e._v(" "),t("ul",[t("li",[e._v("它基于node原生req和res，封装自定义的request和response对象，并基于它们封装成一个统一的context对象。")]),e._v(" "),t("li",[e._v("它基于async/await（generator）的洋葱模型实现了中间件机制。")])]),e._v(" "),t("p",[e._v("koa框架的核心目录如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("── lib\n   ├── application.js\n   ├── context.js\n   ├── request.js\n   └── response.js\n\n// 每个文件的具体功能\n── lib\n   ├── new Koa()  || ctx.app\n   ├── ctx\n   ├── ctx.req  || ctx.request\n   └── ctx.res  || ctx.response\n复制代码\n")])])]),t("p",[t("img",{attrs:{src:"https://mmbiz.qpic.cn/sz_mmbiz_png/H8M5QJDxMHqDVfNYjycFhicdeSxfLCDqstZ3UFt0qh6Fec6XLcqD9RouQRQxpLnUiaQVXfKFrbHdVlVdVRWDwyEw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}}),e._v("undefined")]),e._v(" "),t("h2",{attrs:{id:"koa源码基础骨架"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#koa源码基础骨架"}},[e._v("#")]),e._v(" koa源码基础骨架")]),e._v(" "),t("p",[t("code",[e._v("application.js")]),e._v(" application.js是koa的主入口，也是核心部分，主要干了以下几件事情：")]),e._v(" "),t("ol",[t("li",[e._v("完成了koa实例初始化的工作，启动服务器")]),e._v(" "),t("li",[e._v("实现了洋葱模型的中间件机制")]),e._v(" "),t("li",[e._v("封装了高内聚的context对象")]),e._v(" "),t("li",[e._v("实现了异步函数的统一错误处理机制")])]),e._v(" "),t("p",[t("code",[e._v("context.js")]),e._v(" context.js主要干了两件事情：")]),e._v(" "),t("ol",[t("li",[e._v("完成了错误事件处理")]),e._v(" "),t("li",[e._v("代理了response对象和request对象的部分属性和方法")])]),e._v(" "),t("p",[t("code",[e._v("request.js")]),e._v(" request对象基于node原生req封装了一系列便利属性和方法，供处理请求时调用。所以当你访问ctx.request.xxx的时候，实际上是在访问request对象上的setter和getter。")]),e._v(" "),t("p",[t("code",[e._v("response.js")]),e._v(" response对象基于node原生res封装了一系列便利属性和方法，供处理请求时调用。所以当你访问ctx.response.xxx的时候，实际上是在访问response对象上的setter和getter。")]),e._v(" "),t("p",[t("strong",[e._v("4个文件的代码结构如下：")])]),e._v(" "),t("p",[t("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),e._v(" "),t("p",[e._v("undefined")]),e._v(" "),t("p",[t("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}}),e._v("undefined")]),e._v(" "),t("h3",{attrs:{id:"koa工作流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#koa工作流"}},[e._v("#")]),e._v(" koa工作流")]),e._v(" "),t("p",[t("strong",[e._v("Koa整个流程可以分成三步:")])]),e._v(" "),t("ol",[t("li",[e._v("初始化阶段")])]),e._v(" "),t("p",[e._v("new初始化一个实例，包括创建中间件数组、创建context/request/response对象，再使用use(fn)添加中间件到middleware数组，最后使用listen 合成中间件fnMiddleware，按照洋葱模型依次执行中间件，返回一个callback函数给http.createServer，开启服务器，等待http请求。结构图如下图所示：")]),e._v(" "),t("p",[t("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}}),e._v("undefined")]),e._v(" "),t("ol",[t("li",[e._v("请求阶段")])]),e._v(" "),t("p",[e._v("每次请求，createContext生成一个新的ctx，传给fnMiddleware，触发中间件的整个流程。3. 响应阶段 整个中间件完成后，调用respond方法，对请求做最后的处理，返回响应给客户端。")]),e._v(" "),t("h3",{attrs:{id:"koa中间件机制与实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#koa中间件机制与实现"}},[e._v("#")]),e._v(" koa中间件机制与实现")]),e._v(" "),t("p",[e._v("koa中间件机制是采用koa-compose实现的，compose函数接收middleware数组作为参数，middleware中每个对象都是async函数，返回一个以context和next作为入参的函数，我们跟源码一样，称其为fnMiddleware在外部调用this.handleRequest的最后一行，运行了中间件："),t("code",[e._v("fnMiddleware(ctx).then(handleResponse).catch(onerror);")])]),e._v(" "),t("p",[e._v("以下是"),t("code",[e._v("koa-compose")]),e._v("库中的核心函数："),t("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),e._v(" "),t("p",[e._v("我们不禁会问：中间件中的"),t("code",[e._v("next")]),e._v("到底是什么呢？为什么执行"),t("code",[e._v("next")]),e._v("就进入到了下一个中间件了呢？中间件所构成的执行栈如下图所示，其中"),t("code",[e._v("next")]),e._v("就是一个含有"),t("code",[e._v("dispatch")]),e._v("方法的函数。在第1个中间件执行"),t("code",[e._v("next")]),e._v("时，相当于在执行"),t("code",[e._v("dispatch(2)")]),e._v("，就进入到了下一个中间件的处理流程。因为"),t("code",[e._v("dispatch")]),e._v("返回的都是"),t("code",[e._v("Promise")]),e._v("对象，因此在第n个中间件"),t("code",[e._v("await next()")]),e._v("时，就进入到了第n+1个中间件，而当第n+1个中间件执行完成后，可以返回第n个中间件。但是在某个中间件中，我们没有写"),t("code",[e._v("next()")]),e._v("，就不会再执行它后面所有的中间件。运行机制如下图所示：")]),e._v(" "),t("p",[t("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),e._v(" "),t("p",[e._v("undefined")]),e._v(" "),t("h3",{attrs:{id:"koa-convert解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#koa-convert解析"}},[e._v("#")]),e._v(" koa-convert解析")]),e._v(" "),t("p",[e._v("在koa2中引入了koa-convert库，在使用use函数时，会使用到convert方法（只展示核心的代码）：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const convert = require('koa-convert');\n\nmodule.exports = class Application extends Emitter {\n    use(fn) {\n        if (typeof fn !== 'function') throw new TypeError('middleware must be a function!');\n        if (isGeneratorFunction(fn)) {\n            deprecate('Support for generators will be removed';\n            fn = convert(fn);\n        }\n        debug('use %s', fn._name || fn.name || '-');\n        this.middleware.push(fn);\n        return this;\n    }\n}\n复制代码\n")])])]),t("p",[e._v("koa2框架针对koa1版本作了兼容处理，中间件函数如果是"),t("code",[e._v("generator")]),e._v("函数的话，会使用"),t("code",[e._v("koa-convert")]),e._v("进行转换为“类async函数”。首先我们必须理解"),t("code",[e._v("generator")]),e._v("和"),t("code",[e._v("async")]),e._v("的区别："),t("code",[e._v("async")]),e._v("函数会自动执行，而"),t("code",[e._v("generator")]),e._v("每次都要调用next函数才能执行，因此我们需要寻找到一个合适的方法，让"),t("code",[e._v("next()")]),e._v("函数能够一直持续下去即可，这时可以将"),t("code",[e._v("generator")]),e._v("中"),t("code",[e._v("yield")]),e._v("的"),t("code",[e._v("value")]),e._v("指定成为一个"),t("code",[e._v("Promise")]),e._v("对象。下面看看"),t("code",[e._v("koa-convert")]),e._v("中的核心代码：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const co = require('co')\nconst compose = require('koa-compose')\n\nmodule.exports = convert\n\nfunction convert (mw) {\n  if (typeof mw !== 'function') {\n    throw new TypeError('middleware must be a function')\n  }\n  if (mw.constructor.name !== 'GeneratorFunction') {\n    return mw\n  }\n  const converted = function (ctx, next) {\n    return co.call(ctx, mw.call(ctx, createGenerator(next)))\n  }\n  converted._name = mw._name || mw.name\n  return converted\n}\n复制代码\n")])])]),t("p",[e._v("首先针对传入的参数mw作校验，如果不是函数则抛异常，如果不是"),t("code",[e._v("generator")]),e._v("函数则直接返回，如果是"),t("code",[e._v("generator")]),e._v("函数则使用"),t("code",[e._v("co")]),e._v("函数进行处理。co的核心代码如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function co(gen) {\n  var ctx = this;\n  var args = slice.call(arguments, 1);\n  \n  return new Promise(function(resolve, reject) {\n    if (typeof gen === 'function') gen = gen.apply(ctx, args);\n    if (!gen || typeof gen.next !== 'function') return resolve(gen);\n\n    onFulfilled();\n    \n    function onFulfilled(res) {\n      var ret;\n      try {\n        ret = gen.next(res);\n      } catch (e) {\n        return reject(e);\n      }\n      next(ret);\n      return null;\n    }\n\n    function onRejected(err) {\n      var ret;\n      try {\n        ret = gen.throw(err);\n      } catch (e) {\n        return reject(e);\n      }\n      next(ret);\n    }\n\n    function next(ret) {\n      if (ret.done) return resolve(ret.value);\n      var value = toPromise.call(ctx, ret.value);\n      if (value && isPromise(value)) return value.then(onFulfilled, onRejected);\n      return onRejected(new TypeError('You may only yield a function, promise, generator, array, or object, '\n        + 'but the following object was passed: \"' + String(ret.value) + '\"'));\n    }\n  });\n}\n复制代码\n")])])]),t("p",[e._v("由以上代码可以看出，co中作了这样的处理：")]),e._v(" "),t("ol",[t("li",[e._v("把一个"),t("code",[e._v("generator")]),e._v("封装在一个"),t("code",[e._v("Promise")]),e._v("对象中")]),e._v(" "),t("li",[e._v("这个"),t("code",[e._v("Promise")]),e._v("对象再次把它的"),t("code",[e._v("gen.next()")]),e._v("也封装出"),t("code",[e._v("Promise")]),e._v("对象，相当于这个子"),t("code",[e._v("Promise")]),e._v("对象完成的时候也重复调用"),t("code",[e._v("gen.next()")])]),e._v(" "),t("li",[e._v("当所有迭代完成时，对父"),t("code",[e._v("Promise")]),e._v("对象进行"),t("code",[e._v("resolve")])])]),e._v(" "),t("p",[e._v("以上工作完成后，就形成了一个类async函数。")]),e._v(" "),t("h3",{attrs:{id:"异步函数的统一错误处理机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#异步函数的统一错误处理机制"}},[e._v("#")]),e._v(" 异步函数的统一错误处理机制")]),e._v(" "),t("p",[e._v("在koa框架中，有两种错误的处理机制，分别为：")]),e._v(" "),t("ol",[t("li",[e._v("中间件捕获")]),e._v(" "),t("li",[e._v("框架捕获")])]),e._v(" "),t("p",[t("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}}),e._v("undefined")]),e._v(" "),t("p",[e._v("中间件捕获是针对中间件做了错误处理响应，如"),t("code",[e._v("fnMiddleware(ctx).then(handleResponse).catch(onerror)")]),e._v("，在中间件运行出错时，会出发onerror监听函数。框架捕获是在"),t("code",[e._v("context.js")]),e._v("中作了相应的处理"),t("code",[e._v("this.app.emit('error', err, this)")]),e._v("，这里的"),t("code",[e._v("this.app")]),e._v("是对"),t("code",[e._v("application")]),e._v("的引用，当"),t("code",[e._v("context.js")]),e._v("调用"),t("code",[e._v("onerror")]),e._v("时，实际上是触发"),t("code",[e._v("application")]),e._v("实例的"),t("code",[e._v("error")]),e._v("事件 ，因为"),t("code",[e._v("Application")]),e._v("类是继承自"),t("code",[e._v("EventEmitter")]),e._v("类的，因此具备了处理异步事件的能力，可以使用"),t("code",[e._v("EventEmitter")]),e._v("类中对于异步函数的错误处理方法。")]),e._v(" "),t("p",[e._v("koa为什么能实现异步函数的统一错误处理？因为async函数返回的是一个Promise对象，如果async函数内部抛出了异常，则会导致Promise对象变为reject状态，异常会被catch的回调函数(onerror)捕获到。如果await后面的Promise对象变为reject状态，reject的参数也可以被catch的回调函数(onerror)捕获到。")]),e._v(" "),t("h3",{attrs:{id:"委托模式在koa中的应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#委托模式在koa中的应用"}},[e._v("#")]),e._v(" 委托模式在koa中的应用")]),e._v(" "),t("p",[e._v("delegates库由知名的 TJ 所写，可以帮我们方便快捷地使用设计模式当中的委托模式，即外层暴露的对象将请求委托给内部的其他对象进行处理。")]),e._v(" "),t("p",[e._v("delegates 基本用法就是将内部对象的变量或者函数绑定在暴露在外层的变量上，直接通过 delegates 方法进行如下委托，基本的委托方式包含：")]),e._v(" "),t("ul",[t("li",[e._v("getter：外部对象可以直接访问内部对象的值")]),e._v(" "),t("li",[e._v("setter：外部对象可以直接修改内部对象的值")]),e._v(" "),t("li",[e._v("access：包含 getter 与 setter 的功能")]),e._v(" "),t("li",[e._v("method：外部对象可以直接调用内部对象的函数")])]),e._v(" "),t("p",[e._v("delegates 原理就是__defineGetter__和__defineSetter__。在application.createContext函数中，被创建的context对象会挂载基于request.js实现的request对象和基于response.js实现的response对象。下面2个delegate的作用是让context对象代理request和response的部分属性和方法：")]),e._v(" "),t("p",[t("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}}),e._v("undefined")]),e._v(" "),t("p",[e._v("做了以上的处理之后，"),t("code",[e._v("context.request")]),e._v("的许多属性都被委托在"),t("code",[e._v("context上")]),e._v("了，"),t("code",[e._v("context.response")]),e._v("的许多方法都被委托在"),t("code",[e._v("context")]),e._v("上了，因此我们不仅可以使用"),t("code",[e._v("this.ctx.request.xx")]),e._v("、"),t("code",[e._v("this.ctx.response.xx")]),e._v("取到对应的属性，还可以通过"),t("code",[e._v("this.ctx.xx")]),e._v("取到"),t("code",[e._v("this.ctx.request")]),e._v("或"),t("code",[e._v("this.ctx.response")]),e._v("下挂载的"),t("code",[e._v("xx")]),e._v("方法。")]),e._v(" "),t("p",[e._v("我们在源码中可以看到，response.js和request.js使用的是get set代理，而context.js使用的是delegate代理，为什么呢？因为delegate方法比较单一，只代理属性；但是使用set和get方法还可以加入一些额外的逻辑处理。在context.js中，只需要代理属性即可，使用delegate方法完全可以实现此效果，而在response.js和request.js中是需要处理其他逻辑的，如以下对query作的格式化操作：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("get query() {\n  const str = this.querystring;\n  const c = this._querycache = this._querycache || {};\n  return c[str] || (c[str] = qs.parse(str));\n}\n复制代码\n")])])]),t("p",[e._v("到这里，相信你对koa2的原理实现有了更深的理解吧？")])])}),[],!1,null,null,null);t.default=o.exports}}]);