(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{399:function(e,a,s){"use strict";s.r(a);var n=s(4),t=Object(n.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"npm-依赖管理中被忽略的那些细节"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-依赖管理中被忽略的那些细节"}},[e._v("#")]),e._v(" npm 依赖管理中被忽略的那些细节")]),e._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://www.zoo.team/article/npm-details",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.zoo.team/article/npm-details"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),a("p",[e._v("提起 npm，大家第一个想到的应该就是 npm install 了，但是 npm install 之后生成的 node_modules 大家有观察过吗？package-lock.json 文件的作用大家知道吗？除了 dependencies 和 devDependencies，其他的依赖有什么作用呢？接下来，本文将针对 npm 中的你可能忽略的细节和大家分享一些经验 。")]),e._v(" "),a("h2",{attrs:{id:"npm-安装机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-安装机制"}},[e._v("#")]),e._v(" npm 安装机制")]),e._v(" "),a("p",[e._v("A 和 B 同时依赖 C，C 这个包会被安装在哪里呢？C 的版本相同和版本不同时安装会有什么差异呢？package.json 中包的前后顺序对于安装时有什么影响吗？这些问题平时大家可能没有注意过，今天我们就来一起研究一下吧。")]),e._v(" "),a("h3",{attrs:{id:"a-和-b-同时依赖-c-这个包会被安装在哪里呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-和-b-同时依赖-c-这个包会被安装在哪里呢"}},[e._v("#")]),e._v(" A 和 B 同时依赖 C，这个包会被安装在哪里呢？")]),e._v(" "),a("p",[e._v("假如有 A 和 B 两个包，两个包都依赖 C 这个包，npm 2 会依次递归安装 A 和 B 两个包及其子依赖包到 node_modules 中。\b执行完毕后，我们会看到 "),a("code",[e._v("./node_modules")]),e._v(" 这层目录只含有这两个子目录：")]),e._v(" "),a("div",{staticClass:"language-plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("node_modules/ \n├─┬ A \n│ ├── C \n├─┬ B \n│ └── C \n")])])]),a("p",[e._v("如果使用 npm 3 来进行安装的话，"),a("code",[e._v("./node_modules")]),e._v(" 下的目录将会包含三个子目录：")]),e._v(" "),a("div",{staticClass:"language-plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("node_modules/ \n├─┬ A \n├─┬ B \n├─┬ C \n")])])]),a("p",[e._v("为什么会出现这样的区别呢？这就要从 npm 的工作方式说起了：")]),e._v(" "),a("h3",{attrs:{id:"npm-2-和-npm-3-模块安装机制的差异"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-2-和-npm-3-模块安装机制的差异"}},[e._v("#")]),e._v(" npm 2 和 npm 3 模块安装机制的差异")]),e._v(" "),a("p",[e._v("虽然目前最新的 npm 版本是 npm 6，但 npm 2 到 npm 3 的版本变更中实现了目录打平，与其他版本相比差别较大。因此，让我们具体看下这两个版本的差异。")]),e._v(" "),a("p",[e._v("npm 2 在安装依赖包时，采用\b简单的递归安装方法。执行 "),a("code",[e._v("npm install")]),e._v(" 后，npm 根据 dependencies 和 devDependencies 属性中指定的包来确定第一层依赖，npm 2 会根据第一层依赖的子依赖，递归安装各个包到子依赖的 node_modules 中，直到子依赖不再依赖其他模块。\b执行完毕后，我们会看到 "),a("code",[e._v("./node_modules")]),e._v(" 这层目录中包含有我们 package.json 文件中所有的依赖包，而这些依赖包的子依赖包都安装在了自己的 node_modules 中 ，形成类似于下面的依赖树：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://www.zoo.team/images/upload/upload_2353c438e4777d358ec10e7ee05abc9c.png",alt:"图片"}})]),e._v(" "),a("p",[e._v("这样的目录有较为明显的好处：")]),e._v(" "),a("p",[e._v("1）层级结构非常明显，可以清楚的在第一层的 node_modules 中看到我们安装的所有包的子目录；")]),e._v(" "),a("p",[e._v("2）在已知自己所需包的名字以及版本号时，可以复制粘贴相应的文件到 node_modules 中，然后手动更改 package.json 中的配置；")]),e._v(" "),a("p",[e._v("3）如果想要删除某个包，只需要简单的删除 package.json 文件中相应的某一行，然后删除 node_modules 中该包的目录；")]),e._v(" "),a("p",[e._v("但是这样的层级结构也有较为明显的缺陷，当我的 A，B，C 三个包中有相同的依赖 D 时，执行 "),a("code",[e._v("npm install")]),e._v(" 后，D 会被重复下载三次，而随着我们的项目越来越复杂，node_modules 中的依赖树也会越来越复杂，像 D 这样的包也会越来越多，造成了大量的冗余；在 windows 系统中，甚至会因为目录的层级太深导致文件的路径过长，触发文件路径不能超过 280 个字符的错误；")]),e._v(" "),a("p",[e._v("为了解决以上问题，npm 3 的 node_modules 目录改成了更为扁平状的层级结构，尽量把依赖以及依赖的依赖平铺在 node_modules 文件夹下共享使用。")]),e._v(" "),a("h3",{attrs:{id:"npm-3-对于同一依赖的不同版本会怎么处理呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-3-对于同一依赖的不同版本会怎么处理呢"}},[e._v("#")]),e._v(" npm 3 对于同一依赖的不同版本会怎么处理呢？")]),e._v(" "),a("p",[e._v("npm 3 会遍历所有的节点，逐个将模块放在 node_modules 的第一层，当发现有重复模块时，则丢弃， 如果遇到某些依赖版本不兼容的问题，则继续采用 npm 2 的处理方式，前面的放在 node_modules 目录中，后面的放在依赖树中。举个例子： A，B，依赖 D(v 0.0.1)，C 依赖 D(v 0.0.2):")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://www.zoo.team/images/upload/upload_1328c0b8feaf525299de1aaef56f9295.png",alt:"图片"}})]),e._v(" "),a("p",[e._v("但是 npm 3 会带来一个新的问题：由于在执行 "),a("code",[e._v("npm install")]),e._v(" 的时候，按照 "),a("code",[e._v("package.json")]),e._v(" 里依赖的顺序依次解析，上图如果 C 的顺序在 A，B 的前边，node_modules 树则会改变，会出现下边的情况：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://www.zoo.team/images/upload/upload_38829baa0cca45c29d2b3b2f98aae83c.png",alt:"图片"}})]),e._v(" "),a("p",[e._v("由此可见，npm 3 并未完全解决冗余的问题，甚至还会带来新的问题。")]),e._v(" "),a("h2",{attrs:{id:"为什么会出现-package-lock-json-呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么会出现-package-lock-json-呢"}},[e._v("#")]),e._v(" 为什么会出现 package-lock.json 呢？")]),e._v(" "),a("p",[e._v("为什么会有 package-lock.json 文件呢？这个我们就要先从 package.json 文件说起了。")]),e._v(" "),a("h3",{attrs:{id:"package-json-的不足之处"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-json-的不足之处"}},[e._v("#")]),e._v(" package.json 的不足之处")]),e._v(" "),a("p",[e._v("npm install 执行后，会生成一个 node_modules 树，在理想情况下， 希望对于同一个 package.json 总是生成完全相同 node_modules 树。在某些情况下，确实如此。但在多数情况下，npm 无法做到这一点。有以下两个原因：")]),e._v(" "),a("p",[e._v("1）某些依赖项自上次安装以来，可能已发布了新版本 。比如：A 包在团队中第一个人安装的时候是 1.0.5 版本，package.json 中的配置项为 "),a("code",[e._v("A: '^1.0.5'")]),e._v(" ；团队中第二个人把代码拉下来的时候，A 包的版本已经升级成了 1.0.8，根据 package.json 中的 semver-range version 规范，此时第二个人 npm install 后 A 的版本为 1.0.8； 可能会造成因为依赖版本不同而导致的 bug；")]),e._v(" "),a("p",[e._v("2）针对 1）中的问题，可能有的小伙伴会想，把 A 的版本号固定为 "),a("code",[e._v("A: '1.0.5'")]),e._v(" 不就可以了吗？但是这样的做法其实并没有解决问题， 比如 A 的某个依赖在第一个人下载的时候是 2.1.3 版本，但是第二个人下载的时候已经升级到了 2.2.5 版本，此时生成的 node_modules 树依旧不完全相同 ，固定版本只是固定来自身的版本，依赖的版本无法固定。")]),e._v(" "),a("h3",{attrs:{id:"针对-package-json-不足的解决方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#针对-package-json-不足的解决方法"}},[e._v("#")]),e._v(" 针对 package.json 不足的解决方法")]),e._v(" "),a("p",[e._v("为了解决上述问题以及 npm 3 的问题，在 npm 5.0 版本后，npm install 后都会自动生成一个 package-lock.json 文件 ，当包中有 package-lock.json 文件时，npm install 执行时，如果 package.json 和 package-lock.json 中的版本兼容，会根据 package-lock.json 中的版本下载；如果不兼容，将会根据 package.json 的版本，更新 package-lock.json 中的版本，已保证 package-lock.json 中的版本兼容 package.json。")]),e._v(" "),a("h3",{attrs:{id:"package-lock-json-文件的结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-lock-json-文件的结构"}},[e._v("#")]),e._v(" package-lock.json 文件的结构")]),e._v(" "),a("p",[e._v("package-lock.json 文件中的 name、version 与 package.json 中的 name、version 一样，描述了当前包的名字和版本，dependencies 是一个对象，该对象和 node_modules 中的包结构一一对应，对象的 key 为包的名称，值为包的一些描述信息， 根据 "),a("a",{attrs:{href:"https://docs.npmjs.com/configuring-npm/package-lock-json.html#requires",target:"_blank",rel:"noopener noreferrer"}},[e._v("package-lock-json官方文档"),a("OutboundLink")],1),e._v("，主要的结构如下：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("version")]),e._v(" ：包版本，即这个包当前安装在 "),a("code",[e._v("node_modules")]),e._v(" 中的版本")]),e._v(" "),a("li",[a("code",[e._v("resolved")]),e._v(" ：包具体的安装来源")]),e._v(" "),a("li",[a("code",[e._v("integrity")]),e._v(" ：包 "),a("code",[e._v("hash")]),e._v(" 值，验证已安装的软件包是否被改动过、是否已失效")]),e._v(" "),a("li",[a("code",[e._v("requires")]),e._v(" ：对应子依赖的依赖，与子依赖的 "),a("code",[e._v("package.json")]),e._v(" 中 "),a("code",[e._v("dependencies")]),e._v(" 的依赖项相同")]),e._v(" "),a("li",[a("code",[e._v("dependencies")]),e._v(" ：结构和外层的 "),a("code",[e._v("dependencies")]),e._v(" 结构相同，存储安装在子依赖 "),a("code",[e._v("node_modules")]),e._v(" 中的依赖包")])]),e._v(" "),a("p",[e._v("需要注意的是，并不是所有的子依赖都有 "),a("code",[e._v("dependencies")]),e._v(" 属性，只有子依赖的依赖和当前已安装在根目录的 "),a("code",[e._v("node_modules")]),e._v(" 中的依赖冲突之后，才会有这个属性。")]),e._v(" "),a("h3",{attrs:{id:"package-lock-json-文件的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-lock-json-文件的作用"}},[e._v("#")]),e._v(" package-lock.json 文件的作用")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("在团队开发中，确保每个团队成员安装的依赖版本是一致的，确定一棵唯一的 node_modules 树；")])]),e._v(" "),a("li",[a("p",[e._v("node_modules 目录本身是不会被提交到代码库的，但是 package-lock.json 可以提交到代码库，如果开发人员想要回溯到某一天的目录状态，只需要把 package.json 和 package-lock.json 这两个文件回退到那一天即可 。")])]),e._v(" "),a("li",[a("p",[e._v("由于 package-lock.json 和 node_modules 中的依赖嵌套完全一致，可以更加清楚的了解树的结构及其变化。")])]),e._v(" "),a("li",[a("p",[e._v("在安装时，npm 会比较 node_modules 已有的包，和 package-lock.json 进行比较，如果重复的话，就跳过安装 ，从而优化了安装的过程。")]),e._v(" "),a("h2",{attrs:{id:"依赖的区别与使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖的区别与使用场景"}},[e._v("#")]),e._v(" 依赖的区别与使用场景")])])]),e._v(" "),a("p",[e._v("npm 目前支持以下几类依赖包管理包括")]),e._v(" "),a("ul",[a("li",[e._v("dependencies")]),e._v(" "),a("li",[e._v("devDependencies")]),e._v(" "),a("li",[e._v("optionalDependencies 可选择的依赖包")]),e._v(" "),a("li",[e._v("peerDependencies 同等依赖")]),e._v(" "),a("li",[e._v("bundledDependencies 捆绑依赖包")])]),e._v(" "),a("p",[e._v("下面我们来看一下这几种依赖的区别以及各自的应用场景：")]),e._v(" "),a("h3",{attrs:{id:"dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[e._v("#")]),e._v(" dependencies")]),e._v(" "),a("p",[e._v("dependencies 是无论在开发环境还是在生产环境都必须使用的依赖，是我们最常用的依赖包管理对象，例如 React，Loadsh，Axios 等，通过 "),a("code",[e._v("npm install XXX")]),e._v(" 下载的包都会默认安装在 dependencies 对象中，也可以使用 "),a("code",[e._v("npm install XXX --save")]),e._v(" 下载 dependencies 中的包；")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://www.zoo.team/images/upload/upload_c82bbe6a2dc1166f9451fe384555d9b2.jpg",alt:"图片"}})]),e._v(" "),a("h3",{attrs:{id:"devdependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#devdependencies"}},[e._v("#")]),e._v(" devDependencies")]),e._v(" "),a("p",[e._v("devDependencies 是指可以在开发环境使用的依赖，例如 eslint，debug 等，通过 "),a("code",[e._v("npm install packageName --save-dev")]),e._v(" 下载的包都会在 devDependencies 对象中；")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://www.zoo.team/images/upload/upload_1f6df72181ade2dd9081b38eab252160.jpg",alt:"图片"}})]),e._v(" "),a("p",[e._v("dependencies 和 devDependencies 最大的区别是在打包运行时，执行 "),a("code",[e._v("npm install")]),e._v(" 时默认会把所有依赖全部安装，但是如果使用 "),a("code",[e._v("npm install --production")]),e._v(" 时就只会安装 dependencies 中的依赖，如果是 node 服务项目，就可以采用这样的方式用于服务运行时安装和打包，减少包大小。")]),e._v(" "),a("h3",{attrs:{id:"optionaldependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optionaldependencies"}},[e._v("#")]),e._v(" optionalDependencies")]),e._v(" "),a("p",[e._v("optionalDependencies 指的是可以选择的依赖，当你希望某些依赖即使下载失败或者没有找到时，项目依然可以正常运行或者 npm 继续运行的时，就可以把这些依赖放在 optionalDependencies 对象中，但是 optionalDependencies 会覆盖 dependencies 中的同名依赖包，所以不要把一个包同时写进两个对象中。")]),e._v(" "),a("p",[e._v("optionalDependencies 就像是我们的代码的一种保护机制一样，如果包存在的话就走存在的逻辑，不存在的就走不存在的逻辑。")]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("try")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" axios "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'axios'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" fooVersion "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'axios/package.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("version \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("catch")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("er"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" \n  foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),e._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// .. then later in your program .. ")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" \n  foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("doFooThings")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" \n")])])]),a("h3",{attrs:{id:"peerdependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#peerdependencies"}},[e._v("#")]),e._v(" peerDependencies")]),e._v(" "),a("p",[e._v("peerDependencies 用于指定你当前的插件兼容的宿主必须要安装的包的版本，这个是什么意思呢？举个例子🌰：我们常用的 react 组件库 "),a("code",[e._v("ant-design@3.x")]),e._v(" 的 "),a("a",{attrs:{href:"https://github.com/ant-design/ant-design/blob/master/package.json#L37",target:"_blank",rel:"noopener noreferrer"}},[e._v("package.json"),a("OutboundLink")],1),e._v(" 中的配置如下：")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"peerDependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" \n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"react"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('">=16.9.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" \n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"react-dom"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('">=16.9.0"')]),e._v(" \n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" \n")])])]),a("p",[e._v("假设我们创建了一个名为 project 的项目，在此项目中我们要使用 "),a("code",[e._v("ant-design@3.x")]),e._v(" 这个插件，此时我们的项目就必须先安装 "),a("code",[e._v("React >= 16.9.0")]),e._v(" 和 "),a("code",[e._v("React-dom >= 16.9.0")]),e._v(" 的版本。")]),e._v(" "),a("p",[e._v("在 npm 2 中，当我们下载 "),a("code",[e._v("ant-design@3.x")]),e._v(" 时，peerDependencies 中指定的依赖会随着 "),a("code",[e._v("ant-design@3.x")]),e._v(" 一起被强制安装，所以我们不需要在宿主项目的 package.json 文件中指定 peerDependencies 中的依赖，但是在 npm 3 中，不会再强制安装 peerDependencies 中所指定的包，而是通过警告的方式来提示我们，此时就需要手动在 package.json 文件中手动添加依赖；")]),e._v(" "),a("h3",{attrs:{id:"bundleddependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bundleddependencies"}},[e._v("#")]),e._v(" bundledDependencies")]),e._v(" "),a("p",[e._v("这个依赖项也可以记为 bundleDependencies，与其他几种依赖项不同，他不是一个键值对的对象，而是一个数组，数组里是包名的字符串，例如：")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" \n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"project"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" \n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" \n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"bundleDependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" \n    "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"axios"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("  \n    "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"lodash"')]),e._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" \n")])])]),a("p",[e._v("当使用 npm pack 的方式来打包时，上述的例子会生成一个 project-1.0.0.tgz 的文件，在使用了 bundledDependencies 后，打包时会把 Axios 和 Lodash 这两个依赖一起放入包中，之后有人使用 "),a("code",[e._v("npm install project-1.0.0.tgz")]),e._v(" 下载包时，Axios 和 Lodash 这两个依赖也会被安装。需要注意的是安装之后 Axios 和 Lodash 这两个包的信息在 dependencies 中，并且不包括版本信息。")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"bundleDependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" \n    "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"axios"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" \n    "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"lodash"')]),e._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" \n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"dependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" \n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"axios"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" \n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"lodash"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"*"')]),e._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" \n")])])]),a("p",[e._v("如果我们使用常规的 npm publish 来发布的话，这个属性是不会生效的，所以日常情况中使用的较少。")]),e._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),a("p",[e._v("本文介绍的是 npm 2，npm 3，package-lock.json 以及几种依赖的区别和使用场景，希望能够让大家对 npm 的了解更加多一点，有什么不清楚的地方或者不足之处欢迎大家在评论区留言。")]),e._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[e._v("#")]),e._v(" 参考文献")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://docs.npmjs.com/files/package.json#peerdependencies",target:"_blank",rel:"noopener noreferrer"}},[e._v("package.json官方文档"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://docs.npmjs.com/configuring-npm/package-lock-json.html#requires",target:"_blank",rel:"noopener noreferrer"}},[e._v("package-lock-json官方文档"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/6844903582337237006#heading-0",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm文档总结"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.cn/cli/pack/",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm-pack"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=t.exports}}]);