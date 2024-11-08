(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{476:function(n,t,e){"use strict";e.r(t);var a=e(4),l=Object(a.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"apply-call-bind-自我实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apply-call-bind-自我实现"}},[n._v("#")]),n._v(" apply/call/bind 自我实现")]),n._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/dTADi6_vwrpZ5IlgDK_4GQ",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://mp.weixin.qq.com/s/dTADi6_vwrpZ5IlgDK_4GQ"),t("OutboundLink")],1)])]),n._v(" "),t("p",[n._v("面试题：“call/apply/bind源码实现”，事实上是对 JavaScript 基础知识的一个综合考核。")]),n._v(" "),t("p",[n._v("相关知识点：")]),n._v(" "),t("ol",[t("li",[n._v("作用域；")]),n._v(" "),t("li",[n._v("this 指向；")]),n._v(" "),t("li",[n._v("函数柯里化；")]),n._v(" "),t("li",[n._v("原型与原型链；")])]),n._v(" "),t("h3",{attrs:{id:"call-apply-bind-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#call-apply-bind-的区别"}},[n._v("#")]),n._v(" call/apply/bind 的区别")]),n._v(" "),t("ol",[t("li",[t("p",[n._v("三者都可用于显示绑定 "),t("code",[n._v("this")]),n._v(";")])]),n._v(" "),t("li",[t("p",[t("code",[n._v("call/apply")]),n._v(" 的区别方式在于参数传递方式的不同；")])]),n._v(" "),t("li",[t("ul",[t("li",[t("code",[n._v("fn.call(obj, arg1, arg2, ...)")]),n._v("， 传参数列表，以逗号隔开；")]),n._v(" "),t("li",[t("code",[n._v("fn.apply(obj, [arg1, arg2, ...])")]),n._v("， 传参数数组；")])])]),n._v(" "),t("li",[t("p",[t("code",[n._v("bind")]),n._v(" 返回的是一个待执行函数，是函数柯里化的应用，而 "),t("code",[n._v("call/apply")]),n._v(" 则是立即执行函数")])])]),n._v(" "),t("h3",{attrs:{id:"思路初探"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#思路初探"}},[n._v("#")]),n._v(" 思路初探")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('Function.prototype.myCall = function(context) {\n    // 原型中 this 指向的是实例对象，所以这里指向 [Function: bar]\n    console.log(this);  // [Function: bar]\n    // 在传入的上下文对象中，创建一个属性，值指向方法 bar\n    context.fn = this;  // foo.fn = [Function: bar]\n    // 调用这个方法，此时调用者是 foo，this 指向 foo\n    context.fn();\n    // 执行后删除它，仅使用一次，避免该属性被其它地方使用（遍历）\n    delete context.fn;\n};\n\nlet foo = {\n    value: 2\n};\n\nfunction bar() {\n    console.log(this.value);\n}\n// bar 函数的声明等同于：var bar = new Function("console.log(this.value)");\n\nbar.call(foo);   // 2;\n')])])]),t("h3",{attrs:{id:"call-的源码实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#call-的源码实现"}},[n._v("#")]),n._v(" call 的源码实现")]),n._v(" "),t("p",[n._v("初步思路有个大概，剩下的就是完善代码。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("// ES6 版本\nFunction.prototype.myCall = function(context, ...params) {\n  // ES6 函数 Rest 参数，使其可指定一个对象，接收函数的剩余参数，合成数组\n  if (typeof context === 'object') {\n    context = context || window;\n  } else {\n    context = Object.create(null);\n  }\n\n  // 用 Symbol 来作属性 key 值，保持唯一性，避免冲突\n  let fn = Symbol();\n  context[fn] = this;\n  // 将参数数组展开，作为多个参数传入\n  const result = context[fn](...params);\n  // 删除避免永久存在\n  delete(context[fn]);\n  // 函数可以有返回值\n  return result;\n}\n\n// 测试\nvar mine = {\n    name: '以乐之名'\n}\n\nvar person = {\n  name: '无名氏',\n  sayHi: function(msg) {\n    console.log('我的名字：' + this.name + '，', msg);\n  }\n}\n\nperson.sayHi.myCall(mine, '很高兴认识你！');\n// 我的名字：以乐之名，很高兴认识你！\n")])])]),t("p",[t("em",[n._v("知识点补充：")])]),n._v(" "),t("ol",[t("li",[n._v("ES6 新的原始数据类型 "),t("code",[n._v("Symbol")]),n._v("，表示独一无二的值;")]),n._v(" "),t("li",[t("code",[n._v("Object.create(null)")]),n._v(" 创建一个空对象")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("// 创建一个空对象的方式\n\n// eg.A\nlet emptyObj = {};\n\n// eg.B\nlet emptyObj = new Object();\n\n// eg.C\nlet emptyObj = Object.create(null);\n")])])]),t("p",[n._v("使用 "),t("code",[n._v("Object.create(null)")]),n._v(" 创建的空对象，不会受到原型链的干扰。原型链终端指向 "),t("code",[n._v("null")]),n._v("，不会有构造函数，也不会有 "),t("code",[n._v("toString")]),n._v("、 "),t("code",[n._v("hasOwnProperty")]),n._v("、"),t("code",[n._v("valueOf")]),n._v(" 等属性，这些属性来自 "),t("code",[n._v("Object.prototype")]),n._v("。有原型链基础的伙伴们，应该都知道，所有普通对象的原型链都会指向 "),t("code",[n._v("Object.prototype")]),n._v("。")]),n._v(" "),t("p",[n._v("所以 "),t("code",[n._v("Object.create(null)")]),n._v(" 创建的空对象比其它两种方式，更干净，不会有 "),t("code",[n._v("Object")]),n._v(" 原型链上的属性。")]),n._v(" "),t("p",[n._v("ES5 版本：")]),n._v(" "),t("ol",[t("li",[n._v("自行处理参数；")]),n._v(" "),t("li",[n._v("自实现 "),t("code",[n._v("Symobo")])])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("// ES5 版本\n\n// 模拟Symbol\nfunction getSymbol(obj) {\n  var uniqAttr = '00' + Math.random();\n  if (obj.hasOwnProperty(uniqAttr)) {\n    // 如果已存在，则递归自调用函数\n    arguments.callee(obj);\n  } else {\n    return uniqAttr;\n  }\n}\n\nFunction.prototype.myCall = function() {\n  var args = arguments;\n  if (!args.length) return;\n\n  var context = [].shift.apply(args);\n  context = context || window;\n\n  var fn = getSymbol(context);\n  context[fn] = this;\n\n  // 无其它参数传入\n  if (!arguments.length) {\n    return context[fn];\n  }\n\n  var param = args[i];\n  // 类型判断，不然 eval 运行会出错\n  var paramType = typeof param;\n  switch(paramType) {\n    case 'string':\n      param = '\"' + param + '\"'\n    break;\n    case 'object':\n      param = JSON.stringify(param);\n    break;\n  }\n\n  fnStr += i == args.length - 1 ? param : param + ',';\n\n  // 借助 eval 执行\n  var result = eval(fnStr);\n  delete context[fn];\n  return result;\n}\n\n// 测试\nvar mine = {\n    name: '以乐之名'\n}\n\nvar person = {\n  name: '无名氏',\n  sayHi: function(msg) {\n    console.log('我的名字：' + this.name + '，', msg);\n  }\n}\n\nperson.sayHi.myCall(mine, '很高兴认识你！');\n// 我的名字：以乐之名，很高兴认识！\n")])])]),t("h3",{attrs:{id:"apply-的源码实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apply-的源码实现"}},[n._v("#")]),n._v(" apply 的源码实现")]),n._v(" "),t("p",[t("code",[n._v("call")]),n._v(" 的源码实现，那么 "),t("code",[n._v("apply")]),n._v(" 就简单，两者只是传递参数方式不同而已。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("Function.prototype.myApply = function(context, params) {\n    // apply 与 call 的区别，第二个参数是数组，且不会有第三个参数\n    if (typeof context === 'object') {\n        context = context || window;\n    } else {\n        context = Object.create(null);\n    }\n\n    let fn = Symbol();\n    context[fn] = this;\n    const result context[fn](...params);\n    delete context[fn];\n    return result;\n}\n")])])]),t("h3",{attrs:{id:"bind-的源码实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bind-的源码实现"}},[n._v("#")]),n._v(" bind 的源码实现")]),n._v(" "),t("ol",[t("li",[t("code",[n._v("bind")]),n._v(" 与 "),t("code",[n._v("call/apply")]),n._v(" 的区别就是返回的是一个待执行的函数，而不是函数的执行结果;")]),n._v(" "),t("li",[t("code",[n._v("bind")]),n._v(" 返回的函数作为构造函数与 "),t("code",[n._v("new")]),n._v(" 一起使用，绑定的 "),t("code",[n._v("this")]),n._v(" 需要被忽略;")])]),n._v(" "),t("blockquote",[t("p",[n._v("调用绑定函数时作为this参数传递给目标函数的值。如果使用new运算符构造绑定函数，则忽略该值。—— MDN")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("Function.prototype.bind = function(context, ...initArgs) {\n    // bind 调用的方法一定要是一个函数\n    if (typeof this !== 'function') {\n      throw new TypeError('not a function');\n    }\n    let self = this;\n    let F = function() {};\n    F.prototype = this.prototype;\n    let bound = function(...finnalyArgs) {\n      // 将前后参数合并传入\n      return self.call(this instanceof F ? this : context || this, ...initArgs, ...finnalyArgs);\n    }\n    bound.prototype = new F();\n    return bound;\n}\n")])])]),t("p",[n._v("不少伙伴还会遇到这样的追问，不使用 "),t("code",[n._v("call/apply")]),n._v("，如何实现 "),t("code",[n._v("bind")]),n._v(" ？")]),n._v(" "),t("p",[n._v("骚年先别慌，不用 "),t("code",[n._v("call/apply")]),n._v("，不就是相当于把 "),t("code",[n._v("call/apply")]),n._v(" 换成对应的自我实现方法，算是偷懒取个巧吧。")]),n._v(" "),t("p",[n._v("本篇 "),t("code",[n._v("call/apply/bind")]),n._v(" 源码实现，算是对之前文章系列知识点的一次加深巩固。")]),n._v(" "),t("p",[n._v("“心中有码，前路莫慌。”")]),n._v(" "),t("p",[n._v("参考文档：")]),n._v(" "),t("ul",[t("li",[n._v("MDN - Function.prototype.bind()")]),n._v(" "),t("li",[n._v("不用call和apply方法模拟实现ES5的bind方法")])])])}),[],!1,null,null,null);t.default=l.exports}}]);