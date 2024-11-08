(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{385:function(e,n,t){"use strict";t.r(n);var v=t(4),a=Object(v.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"前端进阶算法3-从浏览器缓存淘汰策略和vue的keep-alive学习lru算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前端进阶算法3-从浏览器缓存淘汰策略和vue的keep-alive学习lru算法"}},[e._v("#")]),e._v(" 前端进阶算法3：从浏览器缓存淘汰策略和Vue的keep-alive学习LRU算法")]),e._v(" "),n("p",[e._v("原创 前端瓶子君 前端瓶子君 "),n("em",[e._v("2020-04-07")])]),e._v(" "),n("h3",{attrs:{id:"引言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#引言"}},[e._v("#")]),e._v(" 引言")]),e._v(" "),n("p",[e._v("这个标题已经很明显的告诉我们：前端需要了解 LRU 算法！")]),e._v(" "),n("p",[e._v("这也是前端技能的亮点，当面试官在问到你前端开发中遇到过哪些算法，你也可以把这部分丢过去！")]),e._v(" "),n("p",[e._v("本节按以下步骤切入：")]),e._v(" "),n("ul",[n("li",[e._v("由浏览器缓存策略引出 LRU 算法原理")]),e._v(" "),n("li",[e._v("然后走进 "),n("code",[e._v("vue")]),e._v(" 中 "),n("code",[e._v("keep-alive")]),e._v(" 的应用")]),e._v(" "),n("li",[e._v("接着，透过 "),n("code",[e._v("vue")]),e._v(" 中 "),n("code",[e._v("keep-alive")]),e._v(" 源码看 "),n("code",[e._v("LRU")]),e._v(" 算法的实现")]),e._v(" "),n("li",[e._v("最后，来一道 leetcode 题目，我们来实现一个 LRU 算法")])]),e._v(" "),n("p",[e._v("按这个步骤来，完全掌握 LRU 算法，点亮前端技能，下面就开始吧👇")]),e._v(" "),n("h3",{attrs:{id:"一、lru-缓存淘汰策略"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、lru-缓存淘汰策略"}},[e._v("#")]),e._v(" 一、LRU 缓存淘汰策略")]),e._v(" "),n("p",[n("strong",[e._v("缓存")]),e._v("在计算机网络上随处可见，例如：当我们首次访问一个网页时，打开很慢，但当我们再次打开这个网页时，打开就很快。")]),e._v(" "),n("p",[e._v("这就涉及缓存在浏览器上的应用："),n("strong",[e._v("浏览器缓存")]),e._v("。当我们打开一个网页时，例如 "),n("code",[e._v("https://github.com/sisterAn/JavaScript-Algorithms")]),e._v(" ，它会在发起真正的网络请求前，查询浏览器缓存，看是否有要请求的文件，如果有，浏览器将会拦截请求，返回缓存文件，并直接结束请求，不会再去服务器上下载。如果不存在，才会去服务器请求。")]),e._v(" "),n("p",[e._v("其实，浏览器中的缓存是一种在本地保存资源副本，它的大小是有限的，当我们请求数过多时，缓存空间会被用满，此时，继续进行网络请求就需要确定缓存中哪些数据被保留，哪些数据被移除，这就是"),n("strong",[e._v("浏览器缓存淘汰策略")]),e._v("，最常见的淘汰策略有 FIFO（先进先出）、LFU（最少使用）、LRU（最近最少使用）。")]),e._v(" "),n("p",[e._v("LRU （ "),n("code",[e._v("Least Recently Used")]),e._v(" ：最近最少使用 ）缓存淘汰策略，故名思义，就是根据数据的历史访问记录来进行淘汰数据，其核心思想是 "),n("strong",[e._v("如果数据最近被访问过，那么将来被访问的几率也更高")]),e._v(" ，优先淘汰最近没有被访问到的数据。")]),e._v(" "),n("p",[e._v("画个图帮助我们理解：")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/pfCCZhlbMQRb2E8Kxdfpg7KrvYvFXwGhYgLlfHCxl4Kwuic9tqqofCbpbP8qZ948UjUS6GcQ8q3JwYKg6S3Gxng/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),e._v(" "),n("h3",{attrs:{id:"二、lru-在-keep-alive-vue-上的实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、lru-在-keep-alive-vue-上的实现"}},[e._v("#")]),e._v(" 二、LRU 在 keep-alive (Vue) 上的实现")]),e._v(" "),n("h4",{attrs:{id:"_1-keep-alive"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-keep-alive"}},[e._v("#")]),e._v(" 1. keep-alive")]),e._v(" "),n("p",[e._v("keep-alive 在 vue 中用于实现组件的缓存，当组件切换时不会对当前组件进行卸载。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('\x3c!-- 基本 --\x3e\n<keep-alive>\n  <component :is="view"></component>\n</keep-alive>\n')])])]),n("p",[e._v("最常用的两个属性："),n("code",[e._v("include")]),e._v(" 、 "),n("code",[e._v("exculde")]),e._v(" ，用于组件进行有条件的缓存，可以用逗号分隔字符串、正则表达式或一个数组来表示。")]),e._v(" "),n("p",[e._v("在 2.5.0 版本中，"),n("code",[e._v("keep-alive")]),e._v(" 新增了 "),n("code",[e._v("max")]),e._v(" 属性，用于最多可以缓存多少组件实例，一旦这个数字达到了，在新实例被创建之前，已缓存组件中最久没有被访问的实例会被销毁掉，"),n("strong",[e._v("看，这里就应用了 LRU 算法")]),e._v("。即在 "),n("code",[e._v("keep-alive")]),e._v(" 中缓存达到 "),n("code",[e._v("max")]),e._v("，新增缓存实例会优先淘汰最近没有被访问到的实例🎉🎉🎉")]),e._v(" "),n("p",[e._v("下面我们透过 vue 源码看一下具体的实现👇")]),e._v(" "),n("h3",{attrs:{id:"_2-从-vue-源码看-keep-alive-的实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-从-vue-源码看-keep-alive-的实现"}},[e._v("#")]),e._v(" 2. 从 vue 源码看 keep-alive 的实现")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('export default {\n  name: "keep-alive",\n  // 抽象组件属性 ,它在组件实例建立父子关系的时候会被忽略,\n  // 发生在 initLifecycle 的过程中\n  abstract: true,\n  props: {\n    // 被缓存组件\n    include: patternTypes,\n    // 不被缓存组件\n    exclude: patternTypes,\n    // 指定缓存大小\n    max: [String, Number]\n  },\n  created() {\n    // 初始化用于存储缓存的 cache 对象\n    this.cache = Object.create(null);\n    // 初始化用于存储VNode key值的 keys 数组\n    this.keys = [];\n  },\n  destroyed() {\n    for (const key in this.cache) {\n      // 删除所有缓存\n      pruneCacheEntry(this.cache, key, this.keys);\n    }\n  },\n  mounted() {\n    // 监听缓存（include）/不缓存（exclude）组件的变化\n    // 在变化时，重新调整 cache\n    // pruneCache：遍历 cache，\n    //   如果缓存的节点名称与传入的规则没有匹配上的话，\n    //   就把这个节点从缓存中移除\n    this.$watch("include", val => {\n      pruneCache(this, name => matches(val, name));\n    });\n    this.$watch("exclude", val => {\n      pruneCache(this, name => !matches(val, name));\n    });\n  },\n  render() {\n    // 获取第一个子元素的 vnode\n    const slot = this.$slots.default;\n    const vnode: VNode = getFirstComponentChild(slot);\n    const componentOptions: ?VNodeComponentOptions =\n      vnode && vnode.componentOptions;\n    if (componentOptions) {\n      // name 不在 inlcude 中或者在 exlude 中则直接返回 vnode，\n      // 否则继续进行下一步\n      // check pattern\n      const name: ?string = getComponentName(componentOptions);\n      const { include, exclude } = this;\n      if (\n        // not included\n        (include && (!name || !matches(include, name))) ||\n        // excluded\n        (exclude && name && matches(exclude, name))\n      ) {\n        return vnode;\n      }\n      \n      const { cache, keys } = this;\n      // 获取键，优先获取组件的 name 字段，否则是组件的 tag\n      const key: ?string =\n        vnode.key == null\n          ? // same constructor may get registered as\n            // different local components\n            // so cid alone is not enough (#3269)\n            componentOptions.Ctor.cid +\n            (componentOptions.tag ? `::${componentOptions.tag}` : "")\n          : vnode.key;\n        \n      // --------------------------------------------------\n      // 下面就是 LRU 算法了，\n      // 如果在缓存里有则调整，\n      // 没有则放入（长度超过 max，则淘汰最近没有访问的）\n      // --------------------------------------------------\n      // 如果命中缓存，则从缓存中获取 vnode 的组件实例，\n      // 并且调整 key 的顺序放入 keys 数组的末尾\n      if (cache[key]) {\n        vnode.componentInstance = cache[key].componentInstance;\n        // make current key freshest\n        remove(keys, key);\n        keys.push(key);\n      }\n      // 如果没有命中缓存,就把 vnode 放进缓存\n      else {\n        cache[key] = vnode;\n        keys.push(key);\n        // prune oldest entry\n        // 如果配置了 max 并且缓存的长度超过了 this.max，还要从缓存中删除第一个\n        if (this.max && keys.length > parseInt(this.max)) {\n          pruneCacheEntry(cache, keys[0], keys, this._vnode);\n        }\n      }\n      \n      // keepAlive标记位\n      vnode.data.keepAlive = true;\n    }\n    return vnode || (slot && slot[0]);\n  }\n};\n\n// 移除 key 缓存\nfunction pruneCacheEntry (\n  cache: VNodeCache,\n  key: string,\n  keys: Array<string>,\n  current?: VNode\n) {\n  const cached = cache[key]\n  if (cached && (!current || cached.tag !== current.tag)) {\n    cached.componentInstance.$destroy()\n  }\n  cache[key] = null\n  remove(keys, key)\n}\n\n// remove 方法（shared/util.js）\n/**\n * Remove an item from an array.\n */\nexport function remove (arr: Array<any>, item: any): Array<any> | void {\n  if (arr.length) {\n    const index = arr.indexOf(item)\n    if (index > -1) {\n      return arr.splice(index, 1)\n    }\n  }\n}\n')])])]),n("p",[e._v("keep-alive源码路径")]),e._v(" "),n("p",[e._v("在 "),n("code",[e._v("keep-alive")]),e._v(" 缓存超过 "),n("code",[e._v("max")]),e._v(" 时，使用的缓存淘汰算法就是 LRU 算法，它在实现的过程中用到了 "),n("code",[e._v("cache")]),e._v(" 对象用于保存缓存的组件实例及 "),n("code",[e._v("key")]),e._v(" 值，"),n("code",[e._v("keys")]),e._v(" 数组用于保存缓存组件的 "),n("code",[e._v("key")]),e._v("，当 "),n("code",[e._v("keep-alive")]),e._v(" 中渲染一个需要缓存的实例时：")]),e._v(" "),n("ul",[n("li",[e._v("判断缓存中是否已缓存了该实例，缓存了则直接获取，并调整 "),n("code",[e._v("key")]),e._v(" 在 "),n("code",[e._v("keys")]),e._v(" 中的位置（移除 "),n("code",[e._v("keys")]),e._v(" 中 "),n("code",[e._v("key")]),e._v(" ，并放入 "),n("code",[e._v("keys")]),e._v(" 数组的最后一位）")]),e._v(" "),n("li",[e._v("如果没有缓存，则缓存该实例，若 "),n("code",[e._v("keys")]),e._v(" 的长度大于 "),n("code",[e._v("max")]),e._v(" （缓存长度超过上限），则移除 "),n("code",[e._v("keys[0]")]),e._v(" 缓存")])]),e._v(" "),n("p",[e._v("下面我们来自己实现一个 LRU 算法吧⛽️⛽️⛽️")]),e._v(" "),n("h3",{attrs:{id:"三、leetcode-lru-缓存机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、leetcode-lru-缓存机制"}},[e._v("#")]),e._v(" 三、leetcode：LRU 缓存机制")]),e._v(" "),n("p",[e._v("运用你所掌握的数据结构，设计和实现一个 LRU (最近最少使用) 缓存机制。它应该支持以下操作：获取数据 "),n("code",[e._v("get")]),e._v(" 和写入数据 "),n("code",[e._v("put")]),e._v(" 。")]),e._v(" "),n("p",[e._v("获取数据 "),n("code",[e._v("get(key)")]),e._v(" - 如果密钥 ( "),n("code",[e._v("key")]),e._v(" ) 存在于缓存中，则获取密钥的值（总是正数），否则返回 "),n("code",[e._v("-1")]),e._v(" 。写入数据 "),n("code",[e._v("put(key, value)")]),e._v(" - 如果密钥不存在，则写入数据。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据，从而为新数据留出空间。")]),e._v(" "),n("p",[n("strong",[e._v("进阶:")])]),e._v(" "),n("p",[e._v("你是否可以在 "),n("strong",[e._v("O(1)")]),e._v(" 时间复杂度内完成这两种操作？")]),e._v(" "),n("p",[n("strong",[e._v("示例:")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("LRUCache cache = new LRUCache( 2 /* 缓存容量 */ );\n\ncache.put(1, 1);\ncache.put(2, 2);\ncache.get(1);       // 返回  1\ncache.put(3, 3);    // 该操作会使得密钥 2 作废\ncache.get(2);       // 返回 -1 (未找到)\ncache.put(4, 4);    // 该操作会使得密钥 1 作废\ncache.get(1);       // 返回 -1 (未找到)\ncache.get(3);       // 返回  3\ncache.get(4);       // 返回  4\n")])])]),n("p",[e._v("前面已经介绍过了 "),n("code",[e._v("keep-alive")]),e._v(" 中LRU实现源码，现在来看这道题是不是很简单😊😊😊，可以尝试自己解答一下⛽️，然后思考一下有没有什么继续优化的！欢迎提供更多的解法")]),e._v(" "),n("p",[e._v("欢迎将答案提交到 https://github.com/sisterAn/JavaScript-Algorithms/issues/7 ，让更多人看到，瓶子君也会在明日放上自己的解答。")]),e._v(" "),n("h3",{attrs:{id:"四、认识更多的前端道友-一起进阶前端开发"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、认识更多的前端道友-一起进阶前端开发"}},[e._v("#")]),e._v(" 四、认识更多的前端道友，一起进阶前端开发")]),e._v(" "),n("p",[e._v("前端算法集训营第一期免费开营啦🎉🎉🎉，免费哟！")]),e._v(" "),n("p",[e._v("在这里，你可以和志同道合的前端朋友们（600+）一起进阶前端算法，从0到1构建完整的数据结构与算法体系。")]),e._v(" "),n("p",[e._v("在这里，瓶子君不仅介绍算法，还将算法与前端各个领域进行结合，包括浏览器、HTTP、V8、React、Vue源码等。")]),e._v(" "),n("p",[e._v("在这里，你可以每天学习一道大厂算法题（阿里、腾讯、百度、字节等等）或 leetcode，瓶子君都会在第二天解答哟！")])])}),[],!1,null,null,null);n.default=a.exports}}]);