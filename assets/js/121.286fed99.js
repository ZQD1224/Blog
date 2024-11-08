(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{413:function(e,n,o){"use strict";o.r(n);var d=o(4),a=Object(d.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"有点难的-webpack-知识点-dependency-graph-深度解析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#有点难的-webpack-知识点-dependency-graph-深度解析"}},[e._v("#")]),e._v(" 有点难的 webpack 知识点：Dependency Graph 深度解析")]),e._v(" "),n("h1",{attrs:{id:"背景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[e._v("#")]),e._v(" 背景")]),e._v(" "),n("p",[e._v("Dependency Graph 概念来自官网 Dependency Graph | webpack 一文，原文解释是这样的：")]),e._v(" "),n("blockquote",[n("p",[e._v("Any time one file depends on another, webpack treats this as a dependency. This allows webpack to take non-code assets, such as images or web fonts, and also provide them as dependencies for your application.")]),e._v(" "),n("p",[e._v("When webpack processes your application, it starts from a list of modules defined on the command line or in its configuration file. Starting from these entry points, webpack recursively builds a dependency graph that includes every module your application needs, then bundles all of those modules into a small number of bundles - often, just one - to be loaded by the browser.")])]),e._v(" "),n("p",[e._v("翻译过来核心意思是：webpack 处理应用代码时，会从开发者提供的 entry 开始递归地组建起包含所有模块的 "),n("strong",[e._v("dependency graph")]),e._v(" _，_之后再将这些 module 打包为 bundles 。")]),e._v(" "),n("p",[e._v("然而事实远不止官网描述的这么简单，Dependency Graph 贯穿 webpack 整个运行周期，从 make 阶段的模块解析，到 seal 阶段的 chunk 生成，以及 tree-shaking 功能都高度依赖于Dependency Graph ，是 webpack 资源构建的一个非常核心的数据结构。")]),e._v(" "),n("p",[e._v("本文将围绕 webpack@v5.x 的 Dependency Graph 实现，展开讨论三个方面的内容：")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Dependency Graph 在 webpack 实现中以何种数据结构呈现")])]),e._v(" "),n("li",[n("p",[e._v("Webpack 运行过程中如何收集模块间依赖关系，进而构建出 Dependency Graph")])]),e._v(" "),n("li",[n("p",[e._v("Dependency Graph 构建完毕后，又是如何被消费的")])])]),e._v(" "),n("p",[e._v("学习本文，您将进一步了解 webpack 模块解析的处理细节，结合前文 [万字总结] 一文吃透 Webpack 核心原理 ，您可以更透彻地了解 webpack 的核心机制。")]),e._v(" "),n("h1",{attrs:{id:"dependency-graph"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dependency-graph"}},[e._v("#")]),e._v(" Dependency Graph")]),e._v(" "),n("p",[e._v("本节将深入 webpack 源码，解读 Dependency Graph 的内在数据结构及依赖关系收集过程。在正式展开之前，有必要回顾几个 webpack 重要的概念：")]),e._v(" "),n("ul",[n("li",[n("p",[n("code",[e._v("Module")]),e._v("：资源在 webpack 内部的映射对象，包含了资源的路径、上下文、依赖、内容等信息")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Dependency")]),e._v(" ：在模块中引用其它模块，例如 "),n("code",[e._v('import "a.js"')]),e._v(" 语句，webpack 会先将引用关系表述为 Dependency 子类并关联 module 对象，等到当前 module 内容都解析完毕之后，启动下次循环开始将 Dependency 对象转换为适当的 Module 子类。")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Chunk")]),e._v(" ：用于组织输出结构的对象，webpack 分析完所有模块资源的内容，构建出完整的 Dependency Graph 之后，会根据用户配置及 Dependency Graph 内容构建出一个或多个 chunk 实例，每个 chunk 与最终输出的文件大致上是一一对应的。")])])]),e._v(" "),n("h2",{attrs:{id:"数据结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[e._v("#")]),e._v(" 数据结构")]),e._v(" "),n("p",[e._v("Webpack 4.x 的 Dependency Graph 实现较简单，主要由 Dependence/Module 内置的系列属性记录引用、被引用关系。")]),e._v(" "),n("p",[e._v("而 Webpack 5.0 之后则实现了一套相对复杂的类结构记录模块间依赖关系，将模块依赖相关的逻辑从 Dependence/Module 解耦为一套独立的类型结构，主要类型有：")]),e._v(" "),n("ul",[n("li",[n("p",[n("code",[e._v("ModuleGraph")]),e._v(" ：记录 Dependency Graph 信息的容器，一方面保存了构建过程中涉及到的所有 "),n("code",[e._v("module")]),e._v(" 、"),n("code",[e._v("dependency")]),e._v(" 对象，以及这些对象互相之间的引用；另一方面提供了各种工具方法，方便使用者迅速读取出 "),n("code",[e._v("module")]),e._v(" 或 "),n("code",[e._v("dependency")]),e._v(" 附加的信息")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("ModuleGraphConnection")]),e._v(" ：记录模块间引用关系的数据结构，内部通过 "),n("code",[e._v("originModule")]),e._v(" 属性记录引用关系中的父模块，通过 "),n("code",[e._v("module")]),e._v(" 属性记录子模块。此外还提供了一系列函数工具用于判断对应的引用关系的有效性")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("ModuleGraphModule")]),e._v(" ："),n("code",[e._v("Module")]),e._v(" 对象在 Dependency Graph 体系下的补充信息，包含模块对象的 "),n("code",[e._v("incomingConnections")]),e._v(" —— 指向模块本身的 ModuleGraphConnection 集合，即谁引用了模块自己；"),n("code",[e._v("outgoingConnections")]),e._v(" —— 该模块对外的依赖，即该模块引用了其他那些模块。")])])]),e._v(" "),n("p",[e._v("类间关系大致为：")]),e._v(" "),n("p",[n("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),e._v(" "),n("p",[e._v("上面类图需要额外注意：")]),e._v(" "),n("ul",[n("li",[n("p",[n("code",[e._v("ModuleGraph")]),e._v(" 对象通过 "),n("code",[e._v("_dependencyMap")]),e._v(" 属性记录 "),n("code",[e._v("Dependency")]),e._v(" 对象与 "),n("code",[e._v("ModuleGraphConnection")]),e._v(" 连接对象之间的映射关系，后续的处理中可以基于这层映射迅速找到 "),n("code",[e._v("Dependency")]),e._v(" 实例对应的引用与被引用者")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("ModuleGraph")]),e._v(" 对象通过 "),n("code",[e._v("_moduleMap")]),e._v(" 在 "),n("code",[e._v("module")]),e._v(" 基础上附加 "),n("code",[e._v("ModuleGraphModule")]),e._v(" 信息，而 "),n("code",[e._v("ModuleGraphModule")]),e._v(" 最大的作用就是记录了模块的引用与被引用关系，后续的处理可以基于该属性找到 "),n("code",[e._v("module")]),e._v(" 实例的所有依赖与被依赖关系")])])]),e._v(" "),n("h2",{attrs:{id:"依赖收集过程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#依赖收集过程"}},[e._v("#")]),e._v(" 依赖收集过程")]),e._v(" "),n("p",[n("code",[e._v("ModuleGraph")]),e._v("、"),n("code",[e._v("ModuleGraphConnection")]),e._v("、"),n("code",[e._v("ModuleGraphModule")]),e._v(" 三者协作，在 webpack 构建过程(make 阶段)中逐步收集模块间的依赖关系，回顾前文 [万字总结] 一文吃透 Webpack 核心原理 提及的构建流程图：")]),e._v(" "),n("p",[n("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),e._v(" "),n("p",[e._v("构建流程本身很复杂，建议读者对比阅读 [万字总结] 一文吃透 Webpack 核心原理 一文，加深理解。依赖关系收集过程主要发生在两个节点：")]),e._v(" "),n("ul",[n("li",[n("p",[n("code",[e._v("addDependency")]),e._v(" ：webpack 从模块内容中解析出引用关系后，创建适当的 "),n("code",[e._v("Dependency")]),e._v(" 子类并调用该方法记录到 "),n("code",[e._v("module")]),e._v(" 实例")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("handleModuleCreation")]),e._v(" ：模块解析完毕后，webpack 遍历父模块的依赖集合，调用该方法创建 "),n("code",[e._v("Dependency")]),e._v(" 对应的子模块对象，之后调用 "),n("code",[e._v("compilation.moduleGraph.setResolvedModule")]),e._v(" 方法将父子引用信息记录到 "),n("code",[e._v("moduleGraph")]),e._v(" 对象上")])])]),e._v(" "),n("p",[n("code",[e._v("setResolvedModule")]),e._v(" 方法的逻辑大致为：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("class ModuleGraph {\n    constructor() {\n        /** @type {Map<Dependency, ModuleGraphConnection>} */\n        this._dependencyMap = new Map();\n        /** @type {Map<Module, ModuleGraphModule>} */\n        this._moduleMap = new Map();\n    }\n\n    /**\n     * @param {Module} originModule the referencing module\n     * @param {Dependency} dependency the referencing dependency\n     * @param {Module} module the referenced module\n     * @returns {void}\n     */\n    setResolvedModule(originModule, dependency, module) {\n        const connection = new ModuleGraphConnection(\n            originModule,\n            dependency,\n            module,\n            undefined,\n            dependency.weak,\n            dependency.getCondition(this)\n        );\n        this._dependencyMap.set(dependency, connection);\n        const connections = this._getModuleGraphModule(module).incomingConnections;\n        connections.add(connection);\n        const mgm = this._getModuleGraphModule(originModule);\n        if (mgm.outgoingConnections === undefined) {\n            mgm.outgoingConnections = new Set();\n        }\n        mgm.outgoingConnections.add(connection);\n    }\n}\n")])])]),n("p",[e._v("上例代码主要更改了 "),n("code",[e._v("_dependencyMap")]),e._v(" 及 "),n("code",[e._v("moduleGraphModule")]),e._v(" 的出入 "),n("code",[e._v("connections")]),e._v(" 属性，以此收集当前模块的上下游依赖关系。")]),e._v(" "),n("h2",{attrs:{id:"实例解析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实例解析"}},[e._v("#")]),e._v(" 实例解析")]),e._v(" "),n("p",[e._v("看个简单例子，对于下面的依赖关系：")]),e._v(" "),n("p",[n("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),e._v(" "),n("p",[e._v("Webpack 启动后，在构建阶段递归调用 "),n("code",[e._v("compilation.handleModuleCreation")]),e._v(" 函数，逐步补齐 Dependency Graph 结构，最终可能生成如下数据结果：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('ModuleGraph: {\n    _dependencyMap: Map(3){\n        { \n            EntryDependency{request: "./src/index.js"} => ModuleGraphConnection{\n                module: NormalModule{request: "./src/index.js"}, \n                // 入口模块没有引用者，故设置为 null\n                originModule: null\n            } \n        },\n        { \n            HarmonyImportSideEffectDependency{request: "./src/a.js"} => ModuleGraphConnection{\n                module: NormalModule{request: "./src/a.js"}, \n                originModule: NormalModule{request: "./src/index.js"}\n            } \n        },\n        { \n            HarmonyImportSideEffectDependency{request: "./src/a.js"} => ModuleGraphConnection{\n                module: NormalModule{request: "./src/b.js"}, \n                originModule: NormalModule{request: "./src/index.js"}\n            } \n        }\n    },\n\n    _moduleMap: Map(3){\n        NormalModule{request: "./src/index.js"} => ModuleGraphModule{\n            incomingConnections: Set(1) [\n                // entry 模块，对应 originModule 为null\n                ModuleGraphConnection{ module: NormalModule{request: "./src/index.js"}, originModule:null }\n            ],\n            outgoingConnections: Set(2) [\n                // 从 index 指向 a 模块\n                ModuleGraphConnection{ module: NormalModule{request: "./src/a.js"}, originModule: NormalModule{request: "./src/index.js"} },\n                // 从 index 指向 b 模块\n                ModuleGraphConnection{ module: NormalModule{request: "./src/b.js"}, originModule: NormalModule{request: "./src/index.js"} }\n            ]\n        },\n        NormalModule{request: "./src/a.js"} => ModuleGraphModule{\n            incomingConnections: Set(1) [\n                ModuleGraphConnection{ module: NormalModule{request: "./src/a.js"}, originModule: NormalModule{request: "./src/index.js"} }\n            ],\n            // a 模块没有其他依赖，故 outgoingConnections 属性值为 undefined\n            outgoingConnections: undefined\n        },\n        NormalModule{request: "./src/b.js"} => ModuleGraphModule{\n            incomingConnections: Set(1) [\n                ModuleGraphConnection{ module: NormalModule{request: "./src/b.js"}, originModule: NormalModule{request: "./src/index.js"} }\n            ],\n            // b 模块没有其他依赖，故 outgoingConnections 属性值为 undefined\n            outgoingConnections: undefined\n        }\n    }\n}\n')])])]),n("p",[e._v("从上面的 Dependency Graph 可以看出，本质上 "),n("code",[e._v("ModuleGraph._moduleMap")]),e._v(" 已经形成了一个有向无环图结构，其中字典 "),n("code",[e._v("_moduleMap")]),e._v(" 的 key 为图的节点，对应 value "),n("code",[e._v("ModuleGraphModule")]),e._v(" 结构中的 "),n("code",[e._v("outgoingConnections")]),e._v(" 属性为图的边，则上例中从起点 "),n("code",[e._v("index.js")]),e._v(" 出发沿 "),n("code",[e._v("outgoingConnections")]),e._v(" 向前可遍历出图的所有顶点。")]),e._v(" "),n("h1",{attrs:{id:"作用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[e._v("#")]),e._v(" 作用")]),e._v(" "),n("p",[e._v("以 webpack@v5.16.0 为例，关键字 "),n("code",[e._v("moduleGraph")]),e._v(" 出现了 1277 次，几乎覆盖了 "),n("code",[e._v("webpack/lib")]),e._v(" 文件夹下的所有文件，其作用可见一斑。虽然出现的频率很高，但总的来说可以看出有两个主要作用：信息索引、转变为 "),n("code",[e._v("ChunkGraph")]),e._v(" 以确定输出结构。")]),e._v(" "),n("h2",{attrs:{id:"信息索引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#信息索引"}},[e._v("#")]),e._v(" 信息索引")]),e._v(" "),n("p",[n("code",[e._v("ModuleGraph")]),e._v(" 类型提供了很多实现 module / dependency 信息查询的工具函数，例如：")]),e._v(" "),n("ul",[n("li",[n("p",[n("code",[e._v("getModule(dep: Dependency)")]),e._v(" ：根据 dep 查找对应的 "),n("code",[e._v("module")]),e._v(" 实例")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("getOutgoingConnections(module: Module)")]),e._v(" ：查找 "),n("code",[e._v("module")]),e._v(" 实例的所有依赖")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("getIssuer(module: Module)")]),e._v(" ：查找 "),n("code",[e._v("module")]),e._v(" 在何处被引用(关于 issuer 机制的更多信息，可参考我的另一篇文章：十分钟精进 Webpack：module.issuer 属性详解 )")])])]),e._v(" "),n("p",[e._v("等等。")]),e._v(" "),n("p",[e._v("Webpack@v5.x 内部的许多插件、Dependency 子类、Module 子类的实现都需要用到这些工具函数查找特定模块、依赖的信息，例如：")]),e._v(" "),n("ul",[n("li",[n("p",[n("code",[e._v("SplitChunksPlugin")]),e._v(" 在优化 chunks 处理中，需要使用 "),n("code",[e._v("moduleGraph.getExportsInfo")]),e._v(" 查询各个模块的 "),n("code",[e._v("exportsInfo")]),e._v(" (模块导出的信息集合，与 tree-shaking 强相关，后续会单出一篇文章讲解)信息以确定如何分离 "),n("code",[e._v("chunk")]),e._v("。")])]),e._v(" "),n("li",[n("p",[e._v("在 "),n("code",[e._v("compilation.seal")]),e._v(" 函数中，需要遍历 entry 对应的 dep 并调用 "),n("code",[e._v("moduleGraph.getModule")]),e._v(" 获取完整的 module 定义")])]),e._v(" "),n("li",[n("p",[e._v("...")])])]),e._v(" "),n("p",[e._v("那么，在您编写插件时，可以考虑适度参考 "),n("code",[e._v("webpack/lib/ModuleGraph.js")]),e._v(" 中提供的方法，确认可以获取使用那些函数获取到您所需要的信息。")]),e._v(" "),n("h2",{attrs:{id:"构建-chunkgraph"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#构建-chunkgraph"}},[e._v("#")]),e._v(" 构建 ChunkGraph")]),e._v(" "),n("p",[e._v("Webpack 主体流程中，make 构建阶段结束之后会进入 "),n("code",[e._v("seal")]),e._v(" 阶段，开始梳理以何种方式组织输出内容。在 webpack@v4.x 时，"),n("code",[e._v("seal")]),e._v(" 阶段主要围绕 "),n("code",[e._v("Chunk")]),e._v(" 及 "),n("code",[e._v("ChunkGroup")]),e._v(" 两个类型展开，而到了 5.0 之后，与 Dependency Graph 类似也引入了一套全新的基于 "),n("code",[e._v("ChunkGraph")]),e._v(" 的图结构实现资源生成算法。")]),e._v(" "),n("p",[e._v("在 compilation.seal 函数中，首先根据默认规则 —— 每个 entry 对应组织为一个 chunk ，之后调用 "),n("code",[e._v("webpack/lib/buildChunkGraph.js")]),e._v(" 文件定义的 "),n("code",[e._v("buildChunkGraph")]),e._v(" 方法，遍历 "),n("code",[e._v("make")]),e._v("阶段生成的 "),n("code",[e._v("moduleGraph")]),e._v(" 对象从而将 module 依赖关系转化为 "),n("code",[e._v("chunkGraph")]),e._v(" 对象。")]),e._v(" "),n("p",[e._v("这一块的逻辑也特别复杂，不在这里展开，下次会单独出一篇文章讲解 "),n("code",[e._v("chunk/chunkGroup/chunkGraph")]),e._v(" 等对象构筑成的模块输出规则。")]),e._v(" "),n("h1",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),n("p",[e._v("本文讨论的 Dependency Graph 概念在 webpack 内部被大量使用，因此理解这个概念对我们理解 webpack 源码，或者学习如何编写插件、loader 都会有极大的帮助。在分析过程其实也挖掘出了很多新的知识盲点：")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Chunk 的完整机制是怎么样的？")])]),e._v(" "),n("li",[n("p",[e._v("Dependency 的完整体系是如何实现的，有何作用？")])]),e._v(" "),n("li",[n("p",[e._v("Module 的 exportsInfo 如何收集？在 tree-shaking 过程中如何被使用？")])])]),e._v(" "),n("p",[e._v("如果你也对上述问题感兴趣，欢迎点赞关注，后续会围绕 webpack 输出更多有用的文章。")]),e._v(" "),n("blockquote",[n("p",[e._v("往期文章：")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("[万字总结] 一文吃透 Webpack 核心原理")])]),e._v(" "),n("li",[n("p",[e._v("十分钟精进 Webpack：module.issuer 属性详解")])]),e._v(" "),n("li",[n("p",[e._v("[源码解读] Webpack 插件架构深度讲解")])])])])])}),[],!1,null,null,null);n.default=a.exports}}]);