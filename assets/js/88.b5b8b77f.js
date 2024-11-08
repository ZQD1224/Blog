(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{382:function(n,e,t){"use strict";t.r(e);var a=t(4),s=Object(a.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"工作中会使用到的数据结构和算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工作中会使用到的数据结构和算法"}},[n._v("#")]),n._v(" 工作中会使用到的数据结构和算法")]),n._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/lgw7-EBaQybawD2143fQUA",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://mp.weixin.qq.com/s/lgw7-EBaQybawD2143fQUA"),e("OutboundLink")],1)])]),n._v(" "),e("h2",{attrs:{id:"背景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[n._v("#")]),n._v(" 背景")]),n._v(" "),e("p",[n._v("我们日常的开发工作避免不了和数据打交道。展示数据时，接口返回的数据结构可能没办法直接拿来使用，需要做一层转换；保存数据时，通过表单拿到的数据结构和接口定义的数据结构也可能不一致，需要做一层转换；还有一些业务场景本身的需要，需要对数据的逻辑校验等。因此避免不了会使用到一些常用的数据结构和算法。本文主要是讨论在前端开发工作中，可能会使用到的数据结构和算法。")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/ndgH50E7pIoAvJlib4f4lvae67jul6t2D9n3icE6sngDk9JxiaQSiaSKUZgGibCDkzhqCsC6WAicl8RlQjiboYzFFSOeQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}}),n._v("image.png")]),n._v(" "),e("h2",{attrs:{id:"数据结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[n._v("#")]),n._v(" 数据结构")]),n._v(" "),e("h3",{attrs:{id:"栈"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#栈"}},[n._v("#")]),n._v(" 栈")]),n._v(" "),e("p",[n._v("栈是一种特殊的线性表。它的特点是，只能在表的一端操作。可以操作的端称为栈顶，不可以操作的另一端称为栈底。栈的特性：先进后出。")]),n._v(" "),e("h5",{attrs:{id:"原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[n._v("#")]),n._v(" 原理")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/ndgH50E7pIoAvJlib4f4lvae67jul6t2DPK0iafmGq86E9eXRy7TibwQPfLYgicUfCNPv8DMziaLESR71x9mZDTxLuQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),n._v(" "),e("p",[n._v("生活中的例子：蒸馒头的笼屉、羽毛球筒。")]),n._v(" "),e("h5",{attrs:{id:"实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[n._v("#")]),n._v(" 实现")]),n._v(" "),e("p",[n._v("我们可以使用 JS 来模拟栈的功能。从数据存储的方式来看，可以使用数组存储数据，也可以使用链表存储数据。因为数组是最简单的方式，所以这里是用数组的方式来实现栈。")]),n._v(" "),e("p",[n._v("栈的操作包括入栈、出栈、清空、获取栈顶元素、获取栈的大小等。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("class Stack {\n\n    constructor() {\n\n        // 存储数据\n\n        this.items = [];\n\n    }\n\n    push(item) {\n\n        // 入栈\n\n        this.items.push(item);\n\n    }\n\n    pop() {\n\n        // 出栈\n\n        return this.items.pop();\n\n    }\n\n    top() {\n\n        // 获取栈顶元素\n\n        return this.items[this.items.length - 1];\n\n    }\n\n    clear() {\n\n        // 清空栈\n\n        this.items = [];\n\n    }\n\n    size() {\n\n        // 获取栈的大小\n\n        return this.items.length;\n\n    }\n\n    isEmpty() {\n\n        // 判断栈是否为空\n\n        return this.items.length === 0;\n\n    }\n\n}\n")])])]),e("h5",{attrs:{id:"应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[n._v("#")]),n._v(" 应用")]),n._v(" "),e("ol",[e("li",[n._v("判断括号是否匹配")])]),n._v(" "),e("p",[n._v("方法一思路分析：")]),n._v(" "),e("ul",[e("li",[n._v("首先从头到尾遍历整个字符串；")]),n._v(" "),e("li",[n._v('当遇到字符"("则入栈，遇到字符")"则出栈；')]),n._v(" "),e("li",[n._v("出栈时，如果栈已经为空，则返回 false；")]),n._v(" "),e("li",[n._v("当字符串遍历完毕以后，判断栈是否为空。")])]),n._v(" "),e("p",[n._v("方法二思路分析：")]),n._v(" "),e("ul",[e("li",[n._v("声明变量 num 为 0，并从头到尾遍历整个字符串；")]),n._v(" "),e("li",[n._v('当遇到字符"("则 num 加 1，遇到字符")"num 减 1；')]),n._v(" "),e("li",[n._v("在遍历的过程中，当 num 减 1 时，num 的值已经为 0 则返回 false；")]),n._v(" "),e("li",[n._v("当字符串遍历完毕以后，判断 num 是否为 0。")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// 方式一：栈\n\nfunction isPairing(str = '') {\n\n    const stack = new Stack();\n\n    for(let i of str) {\n\n        if (i === '(') {\n\n            stack.push(i);\n\n        } else if (i === ')') {\n\n            if (stack.isEmpty()) {\n\n                return false;\n\n            } else {\n\n                stack.pop();\n\n            }\n\n        }\n\n    }\n\n    return stack.size() === 0;\n\n}\n\n\n\n// 方式二：计数\n\nfunction isPairing(str = '') {\n\n    let num = 0;\n\n    for(let i of str) {\n\n        if (i === '(') {\n\n            num++;\n\n        } else if (i === ')') {\n\n            if (num === 0) {\n\n                return false;\n\n            } else {\n\n                num--;\n\n            }\n\n        }\n\n    }\n\n    return num === 0;\n\n}\n")])])]),e("ol",[e("li",[n._v("判断 HTML 标签是否匹配")])]),n._v(" "),e("p",[n._v("思路分析：")]),n._v(" "),e("ul",[e("li",[e("p",[n._v('声明变量 stack、nodes；并从头遍历 HTML 字符串，查找字符"<"的位置；')])]),n._v(" "),e("li",[e("p",[n._v('如果字符"<"的位置等于 0：')])]),n._v(" "),e("li",[e("ul",[e("li",[n._v("则继续尝试匹配 HTML 结束标签，匹配成功并且与栈顶的标签名称一致，则弹出栈顶；否则报错；")]),n._v(" "),e("li",[n._v("匹配 HTML 结束标签失败以后，则尝试匹配开始标签的起始部分，然后循环匹配标签属性对，最后匹配开始标签的结束部分。匹配完成以后，将匹配到的标签压入栈顶；并构建 node 节点数；")])])]),n._v(" "),e("li",[e("p",[n._v('如果字符"<"的位置大于 0：')])]),n._v(" "),e("li",[e("ul",[e("li",[n._v("则 html.slice(0, pos)，创建文本节点。")])])])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('function parseHtml(html = \'\') {\n\n    const startIndex = 0;\n\n    const endIndex = 0;\n\n    // 匹配标签<div>、<br/>等标签的开始部分"<div、<br"\n\n    const startTagOpen = /^<([a-zA-Z\\d]+)/;\n\n    // 匹配标签<div>、<br/>等标签的闭合部分">、/>"\n\n    const startTagClose = /^\\s*(/?)>/;\n\n    // 匹配属性\n\n    const attribute = /^\\s*([\\w-]+)(?:="([^"]*)")?\\s*/;\n\n    // 匹配闭合标签，例如</div>、</p>\n\n    const endTag = /^</([a-zA-Z\\d]+)>/;\n\n\n\n    const stack = [];\n\n    const nodes = [];\n\n\n\n    while(html) {\n\n        // 查找<的起始位置\n\n        const index = html.indexOf(\'<\');\n\n        if (index === 0) {\n\n            // 先匹配整体结束标签，例如</div>、</p>\n\n            let endTagMatch = html.match(endTag);\n\n            if (endTagMatch) {\n\n                if (stack[stack.length - 1]) {\n\n                    if (stack[stack.length - 1].tag === endTagMatch[1]) {\n\n                        // 出栈\n\n                        stack.pop();\n\n                        advanced(endTagMatch[0].length);\n\n                        continue;\n\n                    } else {\n\n                        throw new Error(`起始标签和结束标签不匹配: 起始标签（${stack[stack.length - 1].tag}），结束标签（${endTagMatch[0]}）`);\n\n                    }\n\n                } else {\n\n                    throw new Error(`${endTagMatch[0]}没有起始标签`);\n\n                }\n\n            }\n\n\n\n            // 然后匹配起始标签的开始部分，例如<div>的<div、<p>的<p、<br/>的<br\n\n            let startTagOpenMatch = html.match(startTagOpen);\n\n            if (startTagOpenMatch) {\n\n                const node = {\n\n                    nodeType: 1,\n\n                    tag: startTagOpenMatch[1],\n\n                    attrs: [],\n\n                    children: [],\n\n                };\n\n                advanced(startTagOpenMatch[0].length);\n\n                let end, attr;\n\n                // 匹配标签属性列表\n\n                while(!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {\n\n                    advanced(attr[0].length);\n\n                    node.attrs.push({\n\n                        name: attr[1],\n\n                        value: attr[2],\n\n                    });\n\n                }\n\n\n\n                // 匹配起始标签的结束部分\n\n                if (end) {\n\n                    if (stack.length === 0) {\n\n                        nodes.push(node);\n\n                    } else {\n\n                        stack[stack.length - 1].children.push(node);\n\n                    }\n\n\n\n                    // 自闭和标签不加入栈中\n\n                    if (end[1] !== \'/\') {\n\n                        stack.push(node);\n\n                    }\n\n\n\n                    advanced(end[0].length);\n\n                }\n\n            }\n\n        } else {\n\n            // 文本\n\n            const node = {\n\n                nodeType: 3,\n\n                textContent: html.slice(0, index)\n\n            };\n\n            if (stack.length === 0) {\n\n                nodes.push(node);\n\n            } else {\n\n                stack[stack.length - 1].children.push(node);\n\n            }\n\n            advanced(node.textContent.length);\n\n        }\n\n    }\n\n\n\n    function advanced(n) {\n\n        html = html.substring(n);\n\n    }\n\n    return nodes;\n\n}\n\nparseHtml(\'<div id="test" class="a b"></div>\');\n\nparseHtml(\'<div id="test" class="a b">Hello World</div>\');\n\nparseHtml(\'开始<div id="test" class="a b">Hello World</div>\');\n\nparseHtml(\'<div id="test" class="a b"><br class="br" />Hello World</div>\');\n\nparseHtml(\'</div>\');\n\nparseHtml(\'<div></p>\');\n')])])]),e("ol",[e("li",[n._v("版本号比较大小")])]),n._v(" "),e("p",[n._v("思路分析：")]),n._v(" "),e("ul",[e("li",[n._v('版本号 v1、v2 按照符号"."分割成数组，从左右依次进行大小比较；')]),n._v(" "),e("li",[n._v("v1 大于 v2 返回 1，v2 小于 v2 返回-1，v1 等于 v2 返回 0。")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('/*\n\n    比较版本号大小\n\n    v1：第一个版本号\n\n    v2：第二个版本号\n\n    如果版本号相等，返回 0, * 如果第一个版本号低于第二个，返回 -1，否则返回 1.\n\n*/\n\nfunction compareVersion(v1, v2) {\n\n    if (!v1 && !v2) return 0;\n\n    if (!v1) return -1;\n\n    if (!v2) return 1;\n\n    const v1Stack = v1.split(\'.\');\n\n    const v2Stack = v2.split(\'.\');\n\n    const maxLen = Math.max(v1Stack.length, v2Stack.length);\n\n    for(let i = 0; i < maxLen; i++) {\n\n        // 必须转整，否则按照字符顺序比较大小\n\n        const prevVal = ~~v1Stack[i];\n\n        const currVal = ~~v2Stack[i];\n\n        if (prevVal > currVal) {\n\n            return 1;\n\n        }\n\n        if (prevVal < currVal) {\n\n            return -1;\n\n        }\n\n    }\n\n    return 0;\n\n}\n\nconsole.log(compareVersion("2.2.1", "2.2.01")); // 0\n\nconsole.log(compareVersion("2.2.1", "2.2.0")); // 1\n\nconsole.log(compareVersion("2.2.1", "2.1.9")); // 1\n\nconsole.log(compareVersion("2.2", "2.1.1")); // 1\n\nconsole.log(compareVersion("2.2", "2.2.1")); // -1\n\nconsole.log(compareVersion("2.2.3.4.5.6", "2.2.2.4.5.12")); // 1\n\nconsole.log(compareVersion("2.2.3.4.5.6", "2.2.3.4.5.12")); // -1\n')])])]),e("h5",{attrs:{id:"用途"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用途"}},[n._v("#")]),n._v(" 用途")]),n._v(" "),e("ul",[e("li",[n._v("Vue 模板编译将模板字符串转换成 AST。")]),n._v(" "),e("li",[n._v("自动更新最新版本的 NPM 包。")]),n._v(" "),e("li",[n._v("函数执行上下文栈。")])]),n._v(" "),e("h3",{attrs:{id:"队列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#队列"}},[n._v("#")]),n._v(" 队列")]),n._v(" "),e("p",[n._v("队列也是一种特殊的线性表，它的特点是，只能在表的一端进行删除操作，而在表的另一点进行插入操作。可以进行删除操作的端称为"),e("strong",[n._v("队首")]),n._v("，而可以进行插入操作的端称为"),e("strong",[n._v("队尾")]),n._v("。删除一个元素称为"),e("strong",[n._v("出队")]),n._v("，插入一个元素称为"),e("strong",[n._v("入队")]),n._v("。和栈一样，队列也是一种操作受限制的线性表。队列的特性：先进先出 (FIFO，First-In-First-Out)。")]),n._v(" "),e("h5",{attrs:{id:"原理-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原理-2"}},[n._v("#")]),n._v(" 原理")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/ndgH50E7pIoAvJlib4f4lvae67jul6t2D3KqKIEtNdu1SuOmnILm5HyHJErlFEBOicXsUqGTHmV0Y6Vu8lGGWAHQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),n._v(" "),e("p",[n._v("生活中的例子：排队买东西。")]),n._v(" "),e("h5",{attrs:{id:"实现-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现-2"}},[n._v("#")]),n._v(" 实现")]),n._v(" "),e("p",[n._v("我们也可以使用 JS 来模拟队列的功能。从数据存储的方式来看，可以使用数组存储数据，也可以使用链表存储数据。因为数组是最简单的方式，所以这里是用数组的方式来实现队列。")]),n._v(" "),e("p",[n._v("队列的操作包括入队、出队、清空队列、获取队头元素、获取队列的长度等。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("class Queue {\n\n  constructor() {\n\n    // 存储数据\n\n    this.items = [];\n\n  }\n\n  enqueue(item) {\n\n    // 入队\n\n    this.items.push(item);\n\n  }\n\n  dequeue() {\n\n    // 出队\n\n    return this.items.shift();\n\n  }\n\n  head() {\n\n    // 获取队首的元素\n\n    return this.items[0];\n\n  }\n\n  tail() {\n\n    // 获取队尾的元素\n\n    return this.items[this.items.length - 1];\n\n  }\n\n  clear() {\n\n    // 清空队列\n\n    this.items = [];\n\n  }\n\n  size() {\n\n    // 获取队列的长度\n\n    return this.items.length;\n\n  }\n\n  isEmpty() {\n\n    // 判断队列是否为空\n\n    return this.items.length === 0;\n\n  }\n\n}\n")])])]),e("h5",{attrs:{id:"应用-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用-2"}},[n._v("#")]),n._v(" 应用")]),n._v(" "),e("ol",[e("li",[n._v("约瑟夫环问题")])]),n._v(" "),e("p",[n._v("有一个数组存放了 100 个数据 0-99，要求每隔两个数删除一个数，到末尾时再循环至开头继续进行，求最后一个被删除的数字。")]),n._v(" "),e("p",[e("strong",[n._v("思路分析")])]),n._v(" "),e("ul",[e("li",[n._v("创建队列，将 0 到 99 的数字入队；")]),n._v(" "),e("li",[n._v("循环队列，依次出列队列中的数字，对当前出队的数字进行计数 index + 1；")]),n._v(" "),e("li",[n._v("判断当前出列的 index % 3 是否等于 0，如果不等于 0 则入队；")]),n._v(" "),e("li",[n._v("直到队列的长度为 1，退出循环，返回队列中的数字。")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function ring(arr) {\n\n    const queue = new Queue();\n\n    arr.forEach(v => queue.enqueue(v));\n\n\n\n    let index = 0;\n\n    while(queue.size() > 1) {\n\n        const item = queue.dequeue();\n\n        if (++index % 3 !== 0) {\n\n            queue.enqueue(item);\n\n        }\n\n    }\n\n    return queue.head();\n\n}\n")])])]),e("ol",[e("li",[n._v("斐波那契数列")])]),n._v(" "),e("p",[n._v("斐波那契数列（Fibonacci sequence），又称黄金分割数列，因数学家莱昂纳多·斐波那契（Leonardoda Fibonacci）以兔子繁殖为例子而引入，故又称为“兔子数列”，指的是这样一个数列：0、1、1、2、3、5、8、13、21、34、……在数学上，斐波那契数列以如下被以递推的方法定义："),e("em",[n._v("F")]),n._v("(0)=0，"),e("em",[n._v("F")]),n._v("(1)=1, "),e("em",[n._v("F")]),n._v("(n)="),e("em",[n._v("F")]),n._v("(n - 1)+"),e("em",[n._v("F")]),n._v("(n - 2)（"),e("em",[n._v("n")]),n._v(" ≥ 2，"),e("em",[n._v("n")]),n._v(" ∈ N*）。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function fiboSequence(num) {\n\n    if (num < 2) return num;\n\n    const queue = [];\n\n    queue.push(0);\n\n    queue.push(1);\n\n    for(let i = 2; i < num; i++) {\n\n        const len = queue.length;\n\n        queue.push(queue[len - 2] + queue[len  - 1]);\n\n    }\n\n    return queue;\n\n}\n")])])]),e("ol",[e("li",[n._v("打印杨辉三角")])]),n._v(" "),e("p",[e("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/ndgH50E7pIoAvJlib4f4lvae67jul6t2DRk4tFIdyBa443wJvtTRsE6H5rlmvNfb2yevDzguMzVGoU8DIWQRYvQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),n._v(" "),e("p",[n._v("思路分析：")]),n._v(" "),e("ul",[e("li",[n._v("通过观察发现，三角中的每一行数据都依赖于上一行的数据；")]),n._v(" "),e("li",[n._v("我们首先创建队列 queue，用于存储每一行的数据，供下一行数据使用；")]),n._v(" "),e("li",[n._v("然后初始化第一行的数据 1 入队，这里需要两个 for 循环嵌套，外层的 for 循环决定最终打印的总行数，内层的 for 循环生成每行的数据；")]),n._v(" "),e("li",[n._v("在生成当前行的数据时，将队列中的数据源依次出队，然后将新生成的数据入队；并记录当前出队的数据，供生成新数据使用。")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function printYangHui(num) {\n\n    const queue = [];\n\n    // 存储第一行数据\n\n    queue.push(1);\n\n    for(let i = 1; i <= num; i++) {\n\n        let rowArr = [];\n\n        // 填充空格\n\n        for(let j = 0; j < Math.floor((num - i) / 2); j++) {\n\n            rowArr.push('');\n\n        }\n\n        let prev = 0;\n\n        for(let j = 0; j < i; j++) {\n\n            const num = queue.shift();\n\n            queue.push(prev + num);\n\n            rowArr.push(num);\n\n            prev = num;\n\n        }\n\n        queue.push(1);\n\n        console.log(rowArr.join(' '));\n\n    }\n\n}\n\nprintYangHui(10);\n")])])]),e("h5",{attrs:{id:"用途-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用途-2"}},[n._v("#")]),n._v(" 用途")]),n._v(" "),e("ol",[e("li",[n._v("实现洋葱模型")])]),n._v(" "),e("p",[e("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/ndgH50E7pIoAvJlib4f4lvae67jul6t2DT48ccIXsiclvBbp45GXndGHiaR2oLS1mqef9eYkqPHmicVicdyic51P1OXw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),n._v(" "),e("p",[e("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/ndgH50E7pIoAvJlib4f4lvae67jul6t2DTxENib7vlS2C84RRF4UWzftMfHoao2icmKNSNFSHeVdn2Ut1OoyRTjUg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),n._v(" "),e("p",[n._v("完善代码，实现输出 1、2、3。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function createApp(){\n\n  return {\n\n    use(fn){},\n\n    run(){},\n\n  }\n\n}\n\nconst app = createApp();\n\n\n\napp.use((next)=>{\n\n  setTimeout(function(){\n\n    next();\n\n  })\n\n  console.log(new Date() ,'1');\n\n})\n\napp.use((next)=>{\n\n  console.log(new Date() ,'2');\n\n  next();\n\n})\n\napp.use((next)=>{\n\n  console.log(new Date() ,'3');\n\n  next();\n\n})\n\napp.run();\n")])])]),e("ol",[e("li",[n._v("消息队列")])]),n._v(" "),e("h3",{attrs:{id:"链表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#链表"}},[n._v("#")]),n._v(" 链表")]),n._v(" "),e("p",[n._v("由若干个结点链结成一个链表，称之为链式存储结构。")]),n._v(" "),e("p",[e("strong",[n._v("链表和数组的区别")])]),n._v(" "),e("p",[n._v("链表和数组都可以存储多个数据，那么链表和数组有什么区别呢？")]),n._v(" "),e("p",[n._v("数组需要一块连续的内存空间来存储数据，对内存的要求比较高。而链表却相反，它并不需要一块连续的内存空间。链表是通过指针将一组零散的内存块串联在一起。")]),n._v(" "),e("p",[n._v("相比数组，链表是一种稍微复杂一点的数据结构。两者没有好坏之分，各有各的优缺点。")]),n._v(" "),e("p",[n._v("由于内存存储特性，数组可以实现快速的查找元素，但是在插入和删除时就需要移动大量的元素。原因就在于相邻元素在内存中的位置也是紧挨着的，中间没有空隙，因此就无法快速添加元素。而当删除后，内存空间中就会留出空隙，自然需要弥补。")]),n._v(" "),e("h5",{attrs:{id:"分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分类"}},[n._v("#")]),n._v(" 分类")]),n._v(" "),e("ul",[e("li",[n._v("单向链表")])]),n._v(" "),e("p",[e("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/ndgH50E7pIoAvJlib4f4lvae67jul6t2D8jf3qJiaQYWHPF0ib17IglU5eek0MneDDMfmZlFGZY7QGC17JFkNcgLg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),n._v(" "),e("ul",[e("li",[n._v("双向链表")])]),n._v(" "),e("p",[e("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/ndgH50E7pIoAvJlib4f4lvae67jul6t2DoGnd76Tuq4coiaTkGq0yuBzwx4XdvY5GXkwDkpEqGeGYc08Nx63vfDg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),n._v(" "),e("ul",[e("li",[n._v("单向循环链表")])]),n._v(" "),e("p",[e("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),n._v(" "),e("ul",[e("li",[n._v("双向循环链表")])]),n._v(" "),e("p",[e("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),n._v(" "),e("h5",{attrs:{id:"实现-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现-3"}},[n._v("#")]),n._v(" 实现")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("const Node = function (data) {\n\n    this.data = data;\n\n    this.next = null;\n\n}\n\n\n\nconst node1 = new Node(1);\n\nconst node2 = new Node(2);\n\nconst node3 = new Node(3);\n\n\n\nnode1.next = node2;\n\nnode2.next = node3;\n")])])]),e("h5",{attrs:{id:"应用-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用-3"}},[n._v("#")]),n._v(" 应用")]),n._v(" "),e("ol",[e("li",[n._v("环形链表")])]),n._v(" "),e("p",[n._v("给定一个链表，如何判断链表中是否有环？")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/ndgH50E7pIoAvJlib4f4lvae67jul6t2DQ2bQnZdgwHUiaHdSOyvcicrEmkE7mPXzPDsYhMrHZ2NXWIa0WicWZiam7Q/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),n._v(" "),e("p",[n._v("思路分析：")]),n._v(" "),e("ol",[e("li",[n._v("首先创建两个指针 1 和 2，同时指向这个链表的头节点。然后开始一个大循环，在循环体中，让指针 1 每次向下移动一个节点，让指针 2 每次向下移动两个节点，然后比较两个指针指向的节点是否相同。如果相同，则判断出链表有环，如果不同，则继续下一次循环。")]),n._v(" "),e("li",[n._v("例如链表 A->B->C->D->B->C->D，两个指针最初都指向节点 A，进入第一轮循环，指针 1 移动到了节点 B，指针 2 移动到了 C。第二轮循环，指针 1 移动到了节点 C，指针 2 移动到了节点 B。第三轮循环，指针 1 移动到了节点 D，指针 2 移动到了节点 D，此时两指针指向同一节点，判断出链表有环。")]),n._v(" "),e("li",[n._v("假设从链表头节点到入环点的距离是 D，链表的环长是 S。那么循环会进行 S 次，可以简单理解为 O（N）。除了两个指针以外，没有使用任何额外存储空间，所以空间复杂度是 O（1）。")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("const Node = function (data) {\n\n    this.data = data;\n\n    this.next = null;\n\n}\n\n\n\nconst nodeA = new Node('A');\n\nconst nodeB = new Node('B');\n\nconst nodeC = new Node('C');\n\nconst nodeD = new Node('D');\n\nconst nodeE = new Node('E');\n\nnodeA.next = nodeB;\n\nnodeB.next = nodeC;\n\nnodeC.next = nodeD;\n\nnodeD.next = nodeE;\n\nnodeE.next = nodeC;\n\n\n\nfunction isCircularLinkedList(head) {\n\n    if (head === null || head.next === null) {\n\n        return false;\n\n    }\n\n    let point1 = head;\n\n    let point2 = head;\n\n    do {\n\n        point1 = point1.next;\n\n        point2 = point2.next && point2.next.next;\n\n    } while(point1 && point2 && point1 !== point2);\n\n    if (point1 === point2) {\n\n        return true;\n\n    }\n\n    return false;\n\n}\n\nconsole.log(isCircularLinkedList(nodeA));\n")])])]),e("ol",[e("li",[n._v("相交链表")])]),n._v(" "),e("p",[n._v("判断两个单链表是否相交并求出相交的第一结点。")]),n._v(" "),e("p",[e("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),n._v(" "),e("p",[n._v("思路分析：")]),n._v(" "),e("ol",[e("li",[n._v("两个没有环的链表如果是相交于某一结点，如上图所示，这个结点后面都是共有的。所以如果两个链表相交，那么两个链表的尾结点的地址也是一样的。程序实现时分别遍历两个单链表，直到尾结点。判断尾结点地址是否相等即可。时间复杂度为 O(L1+L2)。")]),n._v(" "),e("li",[n._v("如何找到第一个相交结点？判断是否相交的时候，记录下两个链表的长度，算出长度差 len，接着先让较长的链表遍历 len 个长度，然后两个链表同时遍历，判断是否相等，如果相等，就是第一个相交的结点。")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function intersectNode(head1, head2) {\n\n  if (head1 && head2) {\n\n    // 计算链表的长度\n\n    let len1 = 0, p = head1;\n\n    let len2 = 0, q = head2;\n\n    while(p.next) {\n\n      len1++;\n\n      p = p.next;\n\n    }\n\n    while(q.next) {\n\n      len2++;\n\n      q = q.next;\n\n    }\n\n    if (p === q) {\n\n      // p指向短链，q指向长链\n\n      let len = 0;\n\n      if (len1 > len2) {\n\n        len = len1 - len2;\n\n        p = head2;\n\n        q = head1;\n\n      } else {\n\n        len = len2 - len1;\n\n        p = head1;\n\n        q = head2;\n\n      }\n\n      while(len > 0) {\n\n        len--;\n\n        q = q.next;\n\n      }\n\n      while(p && q && p !== q) {\n\n        p = p.next;\n\n        q = q.next;\n\n      }\n\n      return p;\n\n    }\n\n  }\n\n  return null;\n\n}\n\n\n\nconst Node = function (data) {\n\n  this.data = data;\n\n  this.next = null;\n\n}\n\n\n\nconst nodeA = new Node('A');\n\nconst nodeB = new Node('B');\n\nconst nodeC = new Node('C');\n\nconst node1 = new Node('1');\n\nconst node2 = new Node('2');\n\nconst node3 = new Node('3');\n\nconst nodeD4 = new Node('D4');\n\nconst nodeE5 = new Node('E5');\n\nnodeA.next = nodeB;\n\nnodeB.next = nodeC;\n\nnodeC.next = nodeD4;\n\n\n\nnode1.next = node2;\n\nnode2.next = node3;\n\nnode3.next = nodeD4;\n\nnodeD4.next = nodeE5;\n\n\n\nconsole.log(intersectNode(nodeA, node1));\n")])])]),e("ol",[e("li",[n._v("回文链表")])]),n._v(" "),e("p",[n._v("请判断一个链表是否为回文链表。")]),n._v(" "),e("p",[e("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),n._v(" "),e("p",[n._v("思路分析：")]),n._v(" "),e("ol",[e("li",[n._v("从头遍历链表，同时正向和反向拼接每个链表的数据，最后比对正向和反向得到的字符串是否相等。如果相等则是回文链表；否则不是。")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("const Node = function (data) {\n\n  this.data = data;\n\n  this.next = null;\n\n}\n\n\n\nconst node1 = new Node('A');\n\nconst node2 = new Node('B');\n\nconst node3 = new Node('C');\n\nconst node4 = new Node('C');\n\nconst node5 = new Node('B');\n\nconst node6 = new Node('A');\n\nnode1.next = node2;\n\nnode2.next = node3;\n\nnode3.next = node4;\n\nnode4.next = node5;\n\nnode5.next = node6;\n\n\n\nconst isPalindrome = head => {\n\n    let a = '', b = '';\n\n    while(head !== null) {\n\n        a = a + head.data;\n\n        b = head.data + b;\n\n        head = head.next;\n\n    }\n\n    return a === b;\n\n}\n\nconsole.log(isPalindrome(node1));\n")])])]),e("h5",{attrs:{id:"用途-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用途-3"}},[n._v("#")]),n._v(" 用途")]),n._v(" "),e("ol",[e("li",[n._v("原型链")]),n._v(" "),e("li",[n._v("作用域链")])]),n._v(" "),e("h3",{attrs:{id:"树"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#树"}},[n._v("#")]),n._v(" 树")]),n._v(" "),e("p",[n._v("树是一种数据结构，它是由 n(n>=1)个有限节点组成一个具有层次关系的集合。把它叫做“树”是因为它看起来像一棵倒挂的树，也就是说它是根朝上，而叶朝下的。")]),n._v(" "),e("h5",{attrs:{id:"分类-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分类-2"}},[n._v("#")]),n._v(" 分类")]),n._v(" "),e("ul",[e("li",[n._v("无序树：树中任意节点的子结点之间没有顺序关系，这种树称为无序树,也称为自由树。")]),n._v(" "),e("li",[n._v("有序树：树中任意节点的子结点之间有顺序关系，这种树称为有序树。")]),n._v(" "),e("li",[n._v("二叉树：每个节点最多含有两个子树的树称为二叉树。")]),n._v(" "),e("li",[n._v("满二叉树：叶节点除外的所有节点均含有两个子树的树被称为满二叉树。")]),n._v(" "),e("li",[n._v("完全二叉树：除最后一层外，所有层都是满节点，且最后一层缺右边连续节点的二叉树称为完全二叉树（堆就是一个完全二叉树）。")]),n._v(" "),e("li",[n._v("哈夫曼树（最优二叉树）：带权路径最短的二叉树称为哈夫曼树或最优二叉树。")])]),n._v(" "),e("h5",{attrs:{id:"实现-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现-4"}},[n._v("#")]),n._v(" 实现")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// 二叉树的实现\n\nfunction Node(data) {\n\n    this.data = data;\n\n    this.left = null;\n\n    this.right = null;\n\n}\n\nconst nodeA = new Node('A');\n\nconst nodeB = new Node('B');\n\nconst nodeC = new Node('C');\n\nconst nodeD = new Node('D');\n\nconst nodeE = new Node('E');\n\nconst nodeF = new Node('F');\n\nconst nodeG = new Node('G');\n\n\n\nnodeA.left = nodeB;\n\nnodeA.right = nodeC;\n\nnodeB.left = nodeD;\n\nnodeB.right = nodeE;\n\nnodeC.left = nodeF;\n\nnodeC.right = nodeG;\n")])])]),e("p",[n._v("我们日常工作中接触到最多的是多叉树。")]),n._v(" "),e("h5",{attrs:{id:"遍历"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#遍历"}},[n._v("#")]),n._v(" 遍历")]),n._v(" "),e("p",[e("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),n._v(" "),e("ul",[e("li",[e("p",[n._v("深度优先遍历")])]),n._v(" "),e("li",[e("ul",[e("li",[n._v("先序遍历")])])])]),n._v(" "),e("p",[n._v("先序遍历（又称先根遍历）为 ABDECFG（根-左-右）。")]),n._v(" "),e("ul",[e("li",[n._v("中序遍历")])]),n._v(" "),e("p",[n._v("中序遍历（又称中根遍历）为 DBEAFCG（左-根-右）（仅二叉树有中序遍历）。")]),n._v(" "),e("ul",[e("li",[n._v("后序遍历")])]),n._v(" "),e("p",[n._v("后序遍历（又称后根遍历）为 DEBFGCA（左-右-根）。")]),n._v(" "),e("ul",[e("li",[e("p",[n._v("广度优先遍历")])]),n._v(" "),e("li",[e("ul",[e("li",[n._v("层序遍历")])])])]),n._v(" "),e("p",[n._v("层序遍历为 ABCDEFG。")]),n._v(" "),e("h5",{attrs:{id:"用途-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用途-4"}},[n._v("#")]),n._v(" 用途")]),n._v(" "),e("ol",[e("li",[n._v("树的扁平化（展示 OCR 识别结果）")]),n._v(" "),e("li",[n._v("扁平化数组转换成树（标签树）")])]),n._v(" "),e("h3",{attrs:{id:"图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图"}},[n._v("#")]),n._v(" 图")]),n._v(" "),e("p",[n._v("图（Graph）结构是一种非线性的数据结构，图在实际生活中有很多例子，比如交通运输网，地铁网络，等等都可以抽象成图结构。图结构比树结构复杂的非线性结构。")]),n._v(" "),e("p",[n._v("图是由若干个顶点和边组成。")]),n._v(" "),e("p",[e("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),n._v(" "),e("h5",{attrs:{id:"分类-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分类-3"}},[n._v("#")]),n._v(" 分类")]),n._v(" "),e("ul",[e("li",[n._v("无向图")])]),n._v(" "),e("p",[n._v("如果一个图结构中，所有的边都没有方向性，那么这种图便称为无向图。")]),n._v(" "),e("ul",[e("li",[n._v("有向图")])]),n._v(" "),e("p",[n._v("一个图结构中，边是有方向性的，那么这种图就称为有向图。")]),n._v(" "),e("ul",[e("li",[n._v("加权图")])]),n._v(" "),e("p",[n._v("如果给边加上一个值表示权重，这种图就是加权图。")]),n._v(" "),e("ul",[e("li",[n._v("连通图")])]),n._v(" "),e("p",[n._v("如果图中任意两个节点都能找到路径可以将它们进行连接，则称该图为连通图。")]),n._v(" "),e("h5",{attrs:{id:"表示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#表示"}},[n._v("#")]),n._v(" 表示")]),n._v(" "),e("p",[n._v("图有两种表示方法：邻接矩阵、邻接链表。不同的场景及算法可能需要不同的图表示方式，一般情况下当结点数量非常庞大时，会造成矩阵非常稀疏，空间开销会较大，此时使用邻接链表的表示方式会占用较少的空间。而如果是稠密矩阵或者需要快速判断任意两个结点是否有边相连等情况，可能邻接矩阵更合适。")]),n._v(" "),e("ul",[e("li",[n._v("邻接矩阵")])]),n._v(" "),e("p",[e("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),n._v(" "),e("ul",[e("li",[n._v("邻接链表")])]),n._v(" "),e("p",[e("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),n._v(" "),e("h5",{attrs:{id:"遍历-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#遍历-2"}},[n._v("#")]),n._v(" 遍历")]),n._v(" "),e("ul",[e("li",[n._v("深度优先遍历")]),n._v(" "),e("li",[n._v("广度优先遍历")])]),n._v(" "),e("h5",{attrs:{id:"用途-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用途-5"}},[n._v("#")]),n._v(" 用途")]),n._v(" "),e("ul",[e("li",[n._v("商品分类选择")])]),n._v(" "),e("p",[e("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),n._v(" "),e("h2",{attrs:{id:"算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#算法"}},[n._v("#")]),n._v(" 算法")]),n._v(" "),e("h3",{attrs:{id:"lru"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lru"}},[n._v("#")]),n._v(" LRU")]),n._v(" "),e("p",[n._v("LRU 是 Least Recently Used 的缩写，即最近最少使用，是一种常用的页面置换算法，将最近最久未使用的页面予以淘汰。")]),n._v(" "),e("p",[n._v("核心的思想就是“如果数据最近被访问，那么将来被访问的几率也就更高”。")]),n._v(" "),e("h5",{attrs:{id:"原理-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原理-3"}},[n._v("#")]),n._v(" 原理")]),n._v(" "),e("p",[e("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),n._v(" "),e("h5",{attrs:{id:"实现-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现-5"}},[n._v("#")]),n._v(" 实现")]),n._v(" "),e("p",[n._v("思路分析：")]),n._v(" "),e("ul",[e("li",[e("p",[n._v("选择合适的数据结构。")])]),n._v(" "),e("li",[e("ul",[e("li",[n._v("哈希表：O(1) 级别的时间复杂度，适合数据查找。但是元素无序，没办法判断元素访问的先后顺序。")]),n._v(" "),e("li",[n._v("数组：元素的插入和删除元素都是 O(n)。")]),n._v(" "),e("li",[n._v("单向链表：删除节点需要访问前驱节点，需要花 O(n)从前遍历查找。")]),n._v(" "),e("li",[n._v("双向链表：结点有前驱指针，删除和移动节点都是指针的变动，都是 O(1)。")])])])]),n._v(" "),e("p",[n._v("结论：哈希表 + 双向链表。")]),n._v(" "),e("p",[n._v("使用哈希表的目的就是快速访问到存储在双向链表中的数据，存储双向链表的 key 和节点的引用；使用双向链表的目的就是快速进行节点位置的移动和删除，存储 key 和对应的数据。")]),n._v(" "),e("ul",[e("li",[e("p",[n._v("设置虚拟节点，方便快速的访问头尾节点。初始时没有添加真实的节点，所以需要将虚拟节点的前驱指针和后继指针指向自己。")])]),n._v(" "),e("li",[e("p",[n._v("get 方法的实现。")])]),n._v(" "),e("li",[e("p",[n._v("put 方法的实现。")])]),n._v(" "),e("li",[e("ul",[e("li",[n._v("写入新数据，需要先检查一下当前节点数量；如果节点数量达到容量的最大值，则需要先删除链表尾部的节点，然后创建新的节点，添加到链表头部，并写入到哈希表。")]),n._v(" "),e("li",[n._v("写入已存在的数据，则更新数据值，移动节点位置到链表头部。")])])])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function Node(key, value) {\n\n    this.key = key;\n\n    this.value = value;\n\n    this.prev = null;\n\n    this.next = null;\n\n}\n\n\n\nclass LRUCache {\n\n    constructor(capacity) {\n\n        this.capacity = capacity; // 容量\n\n        this.hash = {}; // 哈希表\n\n        this.count = 0; // 当前节点数量\n\n        this.virtualNode = new Node(); // 虚拟结点\n\n\n\n        // 相互引用\n\n        this.virtualNode.next = this.virtualNode;\n\n        this.virtualNode.prev = this.virtualNode;\n\n    }\n\n    get(key) {\n\n        const node = this.hash[key];\n\n        if (node) {\n\n                this.moveToHead(node);\n\n                return node.value;\n\n        }\n\n    }\n\n    put(key, value) {\n\n        const node = this.hash[key];\n\n        if (node) {\n\n            node.value = value;\n\n            this.moveToHead(node);\n\n        } else {\n\n            if (this.count === this.capacity) {\n\n                this.removeLRUItem();\n\n            }\n\n            const newNode = new Node(key, value);\n\n            this.hash[key] = newNode;\n\n            this.addToHead(newNode);\n\n            this.count++;\n\n        }\n\n    }\n\n    remove(key) {\n\n        const node = this.hash[key];\n\n        if (node) {\n\n            this.removeFromList(node);\n\n            Reflect.deleteProperty(this.hash, key);\n\n            this.count--;\n\n        }\n\n    }\n\n    isEmpty() {\n\n        return this.count === 0;\n\n    }\n\n    moveToHead(node) {\n\n        this.removeFromList(node);\n\n        this.addToHead(node);\n\n    }\n\n    removeFromList(node) {\n\n        const prevNode = node.prev;\n\n        const nextNode = node.next;\n\n        prevNode.next = nextNode;\n\n        nextNode.prev = prevNode;\n\n        node.prev = null;\n\n        node.next = null;\n\n    }\n\n    addToHead(node) {\n\n        const nextNode = this.virtualNode.next;\n\n        this.virtualNode.next = node;\n\n        nextNode.prev = node;\n\n        node.prev = this.virtualNode;\n\n        node.next = nextNode;\n\n    }\n\n    removeLRUItem() {\n\n        const tailNode = this.virtualNode.prev;\n\n        this.remove(tailNode.key);\n\n    }\n\n}\n\nconst cache = new LRUCache(5);\n\nconsole.log(cache.isEmpty());\n\ncache.put('A', 'A');\n\ncache.put('B', 'B');\n\ncache.put('C', 'C');\n\ncache.put('D', 'D');\n\ncache.put('E', 'E');\n\nconsole.log(cache.get('A'));\n\ncache.put('F', 'F');\n\nconsole.log(cache.get('B'));\n\nconsole.log(cache.isEmpty());\n\ncache.remove('E');\n\ncache.remove('F');\n\ncache.remove('A');\n\ncache.remove('C');\n\ncache.remove('D');\n\nconsole.log(cache.isEmpty());\n\nconsole.log(cache);\n")])])]),e("h5",{attrs:{id:"用途-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用途-6"}},[n._v("#")]),n._v(" 用途")]),n._v(" "),e("ul",[e("li",[n._v("历史浏览记录。")]),n._v(" "),e("li",[n._v("缓存淘汰策略。")])])])}),[],!1,null,null,null);e.default=s.exports}}]);