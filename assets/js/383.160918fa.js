(window.webpackJsonp=window.webpackJsonp||[]).push([[383],{676:function(e,v,_){"use strict";_.r(v);var a=_(4),s=Object(a.a)({},(function(){var e=this,v=e._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"面试官-听说你对package-json很熟"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#面试官-听说你对package-json很熟"}},[e._v("#")]),e._v(" 面试官：听说你对package.json很熟？")]),e._v(" "),v("blockquote",[v("p",[v("a",{attrs:{href:"https://mp.weixin.qq.com/s/hfZMjcLdEUKiUlS8qA4lWQ",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://mp.weixin.qq.com/s/hfZMjcLdEUKiUlS8qA4lWQ"),v("OutboundLink")],1)])]),e._v(" "),v("h2",{attrs:{id:"前言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),v("p",[e._v("平常在工作中，对"),v("code",[e._v("package.json")]),e._v("这个文件的接触非常非常少。")]),e._v(" "),v("ul",[v("li",[e._v("一些同学可能还会看一下script里面有什么命令，执行了哪些方法。")]),e._v(" "),v("li",[e._v("又或者了解一下"),v("code",[e._v("dependencies")]),e._v("和"),v("code",[e._v("devDependencies")])]),e._v(" "),v("li",[e._v("其他大部分的同学可能直接就"),v("code",[e._v("npm i")]),e._v("和"),v("code",[e._v("npm start")]),e._v("就开始工作了。")]),e._v(" "),v("li",[e._v("但是"),v("code",[e._v("package.json")]),e._v("的魅力远不止如此")]),e._v(" "),v("li",[e._v("今天就和我一起探索一下这个项目中不可或缺的——"),v("code",[e._v("package.json")]),e._v("吧！")])]),e._v(" "),v("h2",{attrs:{id:"由浅入深-核心内容"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#由浅入深-核心内容"}},[e._v("#")]),e._v(" 由浅入深-核心内容")]),e._v(" "),v("h3",{attrs:{id:"准备工作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[e._v("#")]),e._v(" 准备工作")]),e._v(" "),v("p",[e._v("手摸手新建一个空的package.json")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/sz_mmbiz_jpg/Voibl9R35rqqNK6T3jH4O0JCfm8AIWyiab6cCYBK6R4CWbwCZAcE1Gf801c5OFM92nSddCKriaUNQHWiakH0gJllXg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}}),e._v("img")]),e._v(" "),v("ol",[v("li",[v("code",[e._v("npm init")])]),e._v(" "),v("li",[v("code",[e._v("上万个回车")])])]),e._v(" "),v("p",[e._v("或者直接执行")]),e._v(" "),v("ol",[v("li",[v("code",[e._v("npm init -y")])]),e._v(" "),v("li",[e._v("其意思就是全部都略过，和我们上面的无数个回车的效果一样")])]),e._v(" "),v("p",[e._v("先看看上面有的东西。")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('{\n  "name": "package.json", # 项目名称\n  "version": "1.0.0", # 项目版本（格式：大版本.次要版本.小版本）\n  "description": "", # 项目描述\n  "main": "index.js", # 入口文件\n  "scripts": { # 指定运行脚本命令的 npm 命令行缩写\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "keywords": [], # 关键词\n  "author": "", # 作者\n  "license": "ISC" # 许可证\n}\n')])])]),v("h3",{attrs:{id:"scripts-快捷脚本"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#scripts-快捷脚本"}},[e._v("#")]),e._v(" scripts（快捷脚本）")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("scripts")]),e._v(" 字段是 "),v("code",[e._v("package.json")]),e._v(" 中的一种元数据功能，它接受一个对象，对象的属性为可以通过 "),v("code",[e._v("npm run")]),e._v("运行的脚本，值为实际运行的命令（通常是终端命令），如：")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('"scripts": {\n  "start": "node index.js"\n},\n复制代码\n')])])]),v("ul",[v("li",[e._v("将终端命令放入 "),v("code",[e._v("scripts")]),e._v(" 字段，既可以记录它们又可以实现轻松重用。")])]),e._v(" "),v("h3",{attrs:{id:"dependencies-devdependencies-项目依赖"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dependencies-devdependencies-项目依赖"}},[e._v("#")]),e._v(" dependencies & devDependencies（项目依赖）")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("dependencies")]),e._v(" 字段指定了项目运行所依赖的模块")]),e._v(" "),v("li",[e._v("可以理解为我们的项目在生产环境运行中要用到的东西。")]),e._v(" "),v("li",[e._v("比如说我们常用的"),v("code",[e._v("antd")]),e._v("只能哪个代码块就会用到里面的组件，所以要放到"),v("code",[e._v("dependencies")]),e._v("里面去")]),e._v(" "),v("li",[v("code",[e._v("devDependencies")]),e._v("字段指定了项目开发所需要的模块")]),e._v(" "),v("li",[e._v("开发环境会用到的东西，比如说webpack。我们打包的时候会用到，但是项目运行的时候却用不到，所以只需要放到"),v("code",[e._v("devDependencies")]),e._v("中去就好了")]),e._v(" "),v("li",[e._v("类似的"),v("code",[e._v("eslint")]),e._v("之类的")])]),e._v(" "),v("p",[e._v("这里重点谈一下这些版本号直接的差异")]),e._v(" "),v("h4",{attrs:{id:"_1-1-1"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1"}},[e._v("#")]),e._v(" ~1.1.1")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("~1.2.3")]),e._v(":= "),v("code",[e._v(">=1.2.3 <1.(2+1).0")]),e._v(":="),v("code",[e._v(">=1.2.3 <1.3.0-0")])]),e._v(" "),v("li",[v("code",[e._v("~1.2")]),e._v(":= "),v("code",[e._v(">=1.2.0 <1.(2+1).0")]),e._v(":= "),v("code",[e._v(">=1.2.0 <1.3.0-0")]),e._v("(同"),v("code",[e._v("1.2.x")]),e._v(")")]),e._v(" "),v("li",[v("code",[e._v("~1")]),e._v(":= "),v("code",[e._v(">=1.0.0 <(1+1).0.0")]),e._v(":= "),v("code",[e._v(">=1.0.0 <2.0.0-0")]),e._v("(同"),v("code",[e._v("1.x")]),e._v(")")]),e._v(" "),v("li",[v("code",[e._v("~0.2.3")]),e._v(":= "),v("code",[e._v(">=0.2.3 <0.(2+1).0")]),e._v(":="),v("code",[e._v(">=0.2.3 <0.3.0-0")])]),e._v(" "),v("li",[v("code",[e._v("~0.2")]),e._v(":= "),v("code",[e._v(">=0.2.0 <0.(2+1).0")]),e._v(":= "),v("code",[e._v(">=0.2.0 <0.3.0-0")]),e._v("(同"),v("code",[e._v("0.2.x")]),e._v(")")]),e._v(" "),v("li",[v("code",[e._v("~0")]),e._v(":= "),v("code",[e._v(">=0.0.0 <(0+1).0.0")]),e._v(":= "),v("code",[e._v(">=0.0.0 <1.0.0-0")]),e._v("(同"),v("code",[e._v("0.x")]),e._v(")")]),e._v(" "),v("li",[v("code",[e._v("~1.2.3-beta.2")]),e._v(":="),v("code",[e._v(">=1.2.3-beta.2 <1.3.0-0")]),e._v("请注意，"),v("code",[e._v("1.2.3")]),e._v("版本中的预发布将被允许，如果它们大于或等于"),v("code",[e._v("beta.2")]),e._v(". 所以，"),v("code",[e._v("1.2.3-beta.4")]),e._v("会被允许，但 "),v("code",[e._v("1.2.4-beta.2")]),e._v("不会，因为它是不同"),v("code",[e._v("[major, minor, patch]")]),e._v("元组的预发布。")])]),e._v(" "),v("h4",{attrs:{id:"_1-1-1-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-2"}},[e._v("#")]),e._v(" ^1.1.1")]),e._v(" "),v("p",[e._v("允许不修改"),v("code",[e._v("[major, minor, patch]")]),e._v("元组中最左边的非零元素的更改 。换句话说，这允许版本"),v("code",[e._v("1.0.0")]),e._v("及以上版本的补丁和次要更新，版本的补丁更新"),v("code",[e._v("0.X >=0.1.0")]),e._v("，以及版本的"),v("em",[e._v("不")]),e._v("更新"),v("code",[e._v("0.0.X")]),e._v("。")]),e._v(" "),v("p",[e._v("许多作者将"),v("code",[e._v("0.x")]),e._v("版本视为"),v("code",[e._v("x")]),e._v("主要的“重大变化”指标。")]),e._v(" "),v("p",[e._v("当作者可能在发行版"),v("code",[e._v("0.2.4")]),e._v("和"),v("code",[e._v("0.3.0")]),e._v("发行版之间进行重大更改时，插入符范围是理想的，这是一种常见做法。但是，它假定和之间"),v("em",[e._v("不会")]),e._v("有重大变化 。根据通常观察到的做法，它允许进行假定为附加（但不会破坏）的更改。"),v("code",[e._v("0.2.4``0.2.5")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("^1.2.3")]),e._v(" := "),v("code",[e._v(">=1.2.3 <2.0.0-0")])]),e._v(" "),v("li",[v("code",[e._v("^0.2.3")]),e._v(" := "),v("code",[e._v(">=0.2.3 <0.3.0-0")])]),e._v(" "),v("li",[v("code",[e._v("^0.0.3")]),e._v(" := "),v("code",[e._v(">=0.0.3 <0.0.4-0")])]),e._v(" "),v("li",[v("code",[e._v("^1.2.3-beta.2")]),e._v(":="),v("code",[e._v(">=1.2.3-beta.2 <2.0.0-0")]),e._v("请注意，"),v("code",[e._v("1.2.3")]),e._v("版本中的预发布将被允许，如果它们大于或等于"),v("code",[e._v("beta.2")]),e._v(". 所以，"),v("code",[e._v("1.2.3-beta.4")]),e._v("会被允许，但 "),v("code",[e._v("1.2.4-beta.2")]),e._v("不会，因为它是不同"),v("code",[e._v("[major, minor, patch]")]),e._v("元组的预发布。")]),e._v(" "),v("li",[v("code",[e._v("^0.0.3-beta")]),e._v(":="),v("code",[e._v(">=0.0.3-beta <0.0.4-0")]),e._v(" 请注意，"),v("em",[e._v("仅")]),e._v("允许"),v("code",[e._v("0.0.3")]),e._v("版本中的预发布 ，如果它们大于或等于. 所以，会被允许。"),v("code",[e._v("beta``0.0.3-pr.2")])])]),e._v(" "),v("p",[e._v("解析插入符范围时，缺失"),v("code",[e._v("patch")]),e._v("值会被减为数字"),v("code",[e._v("0")]),e._v("，但即使主要版本和次要版本都是"),v("code",[e._v("0")]),e._v(".")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("^1.2.x")]),e._v(" := "),v("code",[e._v(">=1.2.0 <2.0.0-0")])]),e._v(" "),v("li",[v("code",[e._v("^0.0.x")]),e._v(" := "),v("code",[e._v(">=0.0.0 <0.1.0-0")])]),e._v(" "),v("li",[v("code",[e._v("^0.0")]),e._v(" := "),v("code",[e._v(">=0.0.0 <0.1.0-0")])])]),e._v(" "),v("p",[e._v("缺失值"),v("code",[e._v("minor")]),e._v("和"),v("code",[e._v("patch")]),e._v("值将脱糖为零，但也允许在这些值内具有灵活性，即使主要版本为零。")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("^1.x")]),e._v(" := "),v("code",[e._v(">=1.0.0 <2.0.0-0")])]),e._v(" "),v("li",[v("code",[e._v("^0.x")]),e._v(" := "),v("code",[e._v(">=0.0.0 <1.0.0-0")])])]),e._v(" "),v("h4",{attrs:{id:"_1-1-x"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-x"}},[e._v("#")]),e._v(" 1.1.x")]),e._v(" "),v("p",[e._v("任何的"),v("code",[e._v("X")]),e._v("，"),v("code",[e._v("x")]),e._v("或"),v("code",[e._v("*")]),e._v("可被用来“立场在”在数字值中的一个"),v("code",[e._v("[major, minor, patch]")]),e._v("元组。")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("*")]),e._v(":= "),v("code",[e._v(">=0.0.0")]),e._v("(任何版本都满足)")]),e._v(" "),v("li",[v("code",[e._v("1.x")]),e._v(":= "),v("code",[e._v(">=1.0.0 <2.0.0-0")]),e._v("(匹配主要版本)")]),e._v(" "),v("li",[v("code",[e._v("1.2.x")]),e._v(":= "),v("code",[e._v(">=1.2.0 <1.3.0-0")]),e._v("（匹配主要和次要版本）")])]),e._v(" "),v("p",[e._v("部分版本范围被视为 X 范围，因此特殊字符实际上是可选的。")]),e._v(" "),v("ul",[v("li",[v("code",[e._v('""')]),e._v("（空字符串）:= "),v("code",[e._v("*")]),e._v(":="),v("code",[e._v(">=0.0.0")])]),e._v(" "),v("li",[v("code",[e._v("1")]),e._v(":= "),v("code",[e._v("1.x.x")]),e._v(":="),v("code",[e._v(">=1.0.0 <2.0.0-0")])]),e._v(" "),v("li",[v("code",[e._v("1.2")]),e._v(":= "),v("code",[e._v("1.2.x")]),e._v(":="),v("code",[e._v(">=1.2.0 <1.3.0-0")])])]),e._v(" "),v("h4",{attrs:{id:"_1-1-1-1-1-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-1-1-2"}},[e._v("#")]),e._v(" 1.1.1 - 1.1.2")]),e._v(" "),v("p",[e._v("指定一个包含集。")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("1.2.3 - 2.3.4")]),e._v(" := "),v("code",[e._v(">=1.2.3 <=2.3.4")])])]),e._v(" "),v("p",[e._v("如果部分版本作为包含范围中的第一个版本提供，则缺失的部分将替换为零。")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("1.2 - 2.3.4")]),e._v(" := "),v("code",[e._v(">=1.2.0 <=2.3.4")])])]),e._v(" "),v("p",[e._v("如果部分版本作为包含范围中的第二个版本提供，则接受以元组提供的部分开头的所有版本，但不会大于提供的元组部分。")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("1.2.3 - 2.3")]),e._v(" := "),v("code",[e._v(">=1.2.3 <2.4.0-0")])]),e._v(" "),v("li",[v("code",[e._v("1.2.3 - 2")]),e._v(" := "),v("code",[e._v(">=1.2.3 <3.0.0-0")])])]),e._v(" "),v("h3",{attrs:{id:"engines-指定项目-node-版本"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#engines-指定项目-node-版本"}},[e._v("#")]),e._v(" engines（指定项目 node 版本）")]),e._v(" "),v("ul",[v("li",[e._v("有时候，新拉一个项目的时候，由于和其他开发使用的 "),v("code",[e._v("node")]),e._v(" 版本不同，导致会出现很多奇奇怪怪的问题（如某些依赖安装报错、依赖安装完项目跑步起来等）。")]),e._v(" "),v("li",[e._v("为了实现项目开箱即用的伟大理想，这时候可以使用 "),v("code",[e._v("package.json")]),e._v(" 的 "),v("code",[e._v("engines")]),e._v(" 字段来指定项目 node 版本：")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('"engines": {\n   "node": ">= 8.16.0"\n},\n复制代码\n')])])]),v("ul",[v("li",[e._v("该字段也可以指定适用的 "),v("code",[e._v("npm")]),e._v(" 版本：")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('"engines": {\n   "npm": ">= 6.9.0"\n },\n复制代码\n')])])]),v("ul",[v("li",[e._v("需要注意的是，engines属性仅起到一个说明的作用，当用户版本不符合指定值时也不影响依赖的安装。")])]),e._v(" "),v("h3",{attrs:{id:"os-模块适用系统"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#os-模块适用系统"}},[e._v("#")]),e._v(" os（模块适用系统）")]),e._v(" "),v("ul",[v("li",[e._v("假如我们开发了一个模块，只能跑在 "),v("code",[e._v("darwin")]),e._v(" 系统下，我们需要保证 "),v("code",[e._v("windows")]),e._v(" 用户不会安装到该模块，从而避免发生不必要的错误。")]),e._v(" "),v("li",[e._v("这时候，使用 "),v("code",[e._v("os")]),e._v(" 属性则可以帮助我们实现以上的需求，该属性可以指定模块适用系统的系统，或者指定不能安装的系统黑名单（当在系统黑名单中的系统中安装模块则会报错）：")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('"os" : [ "darwin", "linux" ] # 适用系统\n"os" : [ "!win32" ] # 黑名单\n复制代码\n')])])]),v("blockquote",[v("p",[e._v("Tips：在 "),v("code",[e._v("node")]),e._v(" 环境下可以使用 "),v("code",[e._v("process.platform")]),e._v(" 来判断操作系统。")])]),e._v(" "),v("h3",{attrs:{id:"cpu-指定模块适用-cpu-架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cpu-指定模块适用-cpu-架构"}},[e._v("#")]),e._v(" cpu（指定模块适用 cpu 架构）")]),e._v(" "),v("ul",[v("li",[e._v("和上面的 "),v("code",[e._v("os")]),e._v(" 字段类似，我们可以用 "),v("code",[e._v("cpu")]),e._v(" 字段更精准的限制用户安装环境：")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('"cpu" : [ "x64", "ia32" ] # 适用 cpu\n"cpu" : [ "!arm", "!mips" ] # 黑名单\n复制代码\n')])])]),v("blockquote",[v("p",[e._v("Tips：在 "),v("code",[e._v("node")]),e._v(" 环境下可以使用 "),v("code",[e._v("process.arch")]),e._v(" 来判断 "),v("code",[e._v("cpu")]),e._v(" 架构。")])]),e._v(" "),v("h3",{attrs:{id:"private-定义私有模块"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#private-定义私有模块"}},[e._v("#")]),e._v(" private（定义私有模块）")]),e._v(" "),v("ul",[v("li",[e._v("一般公司的非开源项目，都会设置 "),v("code",[e._v("private")]),e._v(" 属性的值为 "),v("code",[e._v("true")]),e._v("，这是因为 "),v("code",[e._v("npm")]),e._v(" 拒绝发布私有模块，通过设置该字段可以防止私有模块被无意间发布出去。")])]),e._v(" "),v("h2",{attrs:{id:"次重要-可以当百科全书"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#次重要-可以当百科全书"}},[e._v("#")]),e._v(" 次重要（可以当百科全书）")]),e._v(" "),v("h3",{attrs:{id:"name-项目名称"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#name-项目名称"}},[e._v("#")]),e._v(" name（项目名称）")]),e._v(" "),v("ul",[v("li",[e._v("这个名称和你要发布项目到"),v("code",[e._v("npm")]),e._v("上的有关系。")]),e._v(" "),v("li",[e._v("假如你不想发布的话那这个"),v("code",[e._v("name")]),e._v("和"),v("code",[e._v("version")]),e._v("就不是必填项了")])]),e._v(" "),v("p",[e._v("名字就是你的东西叫什么。（name名称）和（version版本号）构成一个唯一的标识符。")]),e._v(" "),v("p",[e._v("名称的一些规则：")]),e._v(" "),v("ul",[v("li",[e._v("名称必须小于或等于 214 个字符。这包括范围包的范围。")]),e._v(" "),v("li",[e._v("作用域包的名称可以以点或下划线开头。这在没有范围的情况下是不允许的。")]),e._v(" "),v("li",[e._v("新包的名称中不得包含大写字母。")]),e._v(" "),v("li",[e._v("该名称最终成为 URL 的一部分、命令行上的参数和文件夹名称。因此，名称不能包含任何非 URL 安全字符。")])]),e._v(" "),v("p",[e._v("一些技巧：")]),e._v(" "),v("ul",[v("li",[e._v("不要使用与核心节点模块相同的名称。")]),e._v(" "),v("li",[e._v("不要在名称中加入“js”或“node”。假设它是 js，因为您正在编写 package.json 文件，并且您可以使用“engines”字段指定引擎。（见下文。）")]),e._v(" "),v("li",[e._v("该名称可能会作为参数传递给 require()，因此它应该是简短的，但也应该具有合理的描述性。")]),e._v(" "),v("li",[e._v("您可能需要检查 npm 注册表以查看是否已经存在使用该名称的内容，以免过于依赖它。https://www.npmjs.com/")]),e._v(" "),v("li",[e._v("方法一：直接到npm官网去搜")]),e._v(" "),v("li",[e._v("方法二："),v("code",[e._v("npm view <packageName>")])])]),e._v(" "),v("p",[e._v("如果模块存在，可以查看该模块的一些基本信息：")]),e._v(" "),v("p",[v("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}}),e._v("img")]),e._v(" "),v("p",[e._v("如果该模块名从未被使用过，则会抛出 404 错误：")]),e._v(" "),v("p",[v("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}}),e._v("img")]),e._v(" "),v("h3",{attrs:{id:"version-版本号"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#version-版本号"}},[e._v("#")]),e._v(" version（版本号）")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("version")]),e._v("和"),v("code",[e._v("name")]),e._v("组成在"),v("code",[e._v("npm")]),e._v("内部的一个唯一标识符。")]),e._v(" "),v("li",[e._v("假如你不想发布的话那这个"),v("code",[e._v("name")]),e._v("和"),v("code",[e._v("version")]),e._v("就不是必填项了")]),e._v(" "),v("li",[e._v("版本必须可由node-semver解析 ，它作为依赖项与 npm 捆绑在一起。（"),v("code",[e._v("npm install semver")]),e._v("自己使用。）")]),e._v(" "),v("li",[e._v("我们可以执行以下命令查看模块的版本：")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("npm view <packageName> version # 查看某个模块的最新版本\nnpm view <packageName> versions # 查看某个模块的所有历史版本\n")])])]),v("ul",[v("li",[v("code",[e._v("npm view <packageName> version")])])]),e._v(" "),v("h3",{attrs:{id:"description-项目描述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#description-项目描述"}},[e._v("#")]),e._v(" description（项目描述）")]),e._v(" "),v("p",[e._v("此文档是您需要了解的有关 "),v("code",[e._v("package.json")]),e._v(" 文件中所需内容的全部信息。它必须是实际的 "),v("code",[e._v("JSON")]),e._v("，而不仅仅是 "),v("code",[e._v("JavaScript")]),e._v("对象文字。")]),e._v(" "),v("p",[e._v("本文档中描述的许多行为受 中描述的配置设置的影响"),v("code",[e._v("config")]),e._v("。")]),e._v(" "),v("h3",{attrs:{id:"keywords"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[e._v("#")]),e._v(" keywords")]),e._v(" "),v("p",[e._v("把关键字放进去。它是一个字符串数组。这有助于人们发现您的包裹，因为它在 中列出"),v("code",[e._v("npm search")]),e._v("。")]),e._v(" "),v("h3",{attrs:{id:"homepage-项目主页"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#homepage-项目主页"}},[e._v("#")]),e._v(" homepage（项目主页）")]),e._v(" "),v("p",[e._v("项目主页的"),v("code",[e._v("url")]),e._v("。")]),e._v(" "),v("p",[e._v("例子：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('"homepage" ：“https://github.com/owner/project#readme”\n')])])]),v("h3",{attrs:{id:"bugs-问题追踪"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#bugs-问题追踪"}},[e._v("#")]),e._v(" bugs（问题追踪）")]),e._v(" "),v("p",[e._v("项目问题跟踪器的 url 和/或应报告问题的电子邮件地址。这些对于遇到包裹问题的人很有帮助。")]),e._v(" "),v("p",[e._v("它应该是这样的：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('{\n  "url" : "https://github.com/owner/project/issues" ,  \n  "email" ："project@hostname.com"\n}\n')])])]),v("p",[e._v("您可以指定一个或两个值。如果您只想提供一个 url，您可以将“bugs”的值指定为一个简单的字符串而不是一个对象。")]),e._v(" "),v("p",[e._v("如果提供了"),v("code",[e._v("url")]),e._v("，它将被"),v("code",[e._v("npm bugs")]),e._v("命令使用。")]),e._v(" "),v("h3",{attrs:{id:"license-执照"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#license-执照"}},[e._v("#")]),e._v(" license（执照）")]),e._v(" "),v("p",[e._v("你应该为你的包指定一个许可证，以便人们知道他们如何被允许使用它，以及你对它施加的任何限制。")]),e._v(" "),v("p",[e._v("如果您使用的是 BSD-2-Clause 或 MIT 等通用许可证，请为您使用的许可证添加当前的"),v("code",[e._v("SPDX")]),e._v(" 许可证标识符，如下所示：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('{\n  "license" : "BSD-3-Clause"\n}\n')])])]),v("p",[e._v("您可以查看SPDX 许可证 ID 的完整列表。理想情况下，您应该选择 OSI批准的一种。")]),e._v(" "),v("p",[e._v("如果您的软件包在多个通用许可下获得许可，请使用SPDX 许可表达式语法版本 2.0 string，如下所示：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('{\n  "license" : "(ISC OR GPL-3.0)"\n}\n')])])]),v("p",[e._v("如果您使用的许可证尚未分配"),v("code",[e._v("SPDX")]),e._v(" 标识符，或者您使用的是自定义许可证，请使用如下字符串值：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('{\n  "license" : "SEE LICENSE IN <filename>"\n}\n')])])]),v("p",[e._v("然后包含一个"),v("code",[e._v("<filename>")]),e._v("在包的顶层命名的文件。")]),e._v(" "),v("p",[e._v("一些旧包使用许可证对象或包含许可证对象数组的“许可证”属性：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('// 无效的元数据\n{\n  "license" : {\n    "type" : "ISC",\n    "url" : "https://opensource.org/licenses/ISC"\n  }\n}\n\n// 无效的元数据\n{\n  "licenses" : [\n    {\n      "type": "MIT",\n      "url": "https://www.opensource.org/licenses/mit-license.php"\n    },\n    {\n      "type": "Apache-2.0",\n      "url": "https://opensource.org/licenses/apache2.0.php"\n    }\n  ]\n}\n')])])]),v("p",[e._v("这些样式现在已被弃用。相反，使用"),v("code",[e._v("SPDX")]),e._v("表达式，如下所示：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('{\n  "license": "ISC"\n}\n{\n  "license": "(MIT OR Apache-2.0)"\n}\n')])])]),v("p",[e._v("最后，如果您不希望根据任何条款授予他人使用私有或未发布包的权利：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('{\n  "license": "UNLICENSED"\n}\n')])])]),v("p",[e._v("还要考虑设置"),v("code",[e._v('"private": true')]),e._v("以防止意外发布。")]),e._v(" "),v("h3",{attrs:{id:"author-contributors-作者和贡献者"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#author-contributors-作者和贡献者"}},[e._v("#")]),e._v(" author, contributors（作者和贡献者）")]),e._v(" "),v("p",[e._v("“作者”是一个人。“贡献者”是一群人。“person”是一个带有“name”字段和可选的“url”和“email”的对象，像这样：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('{\n  "name" : "Barney Rubble",\n  "email" : "b@rubble.com",\n  "url" : "http://barnyrubble.tumblr.com/"\n}\n')])])]),v("p",[e._v("或者，您可以将其全部缩短为一个字符串，然后 npm 将为您解析它：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('{\n  "author": "Barney Rubble <b@rubble.com> (http://barnyrubble.tumblr.com/)"\n}\n')])])]),v("p",[e._v("email 和 url 都是可选的。")]),e._v(" "),v("p",[e._v("npm 还使用您的 npm 用户信息设置顶级“维护者”字段。")]),e._v(" "),v("h3",{attrs:{id:"funding-档案"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#funding-档案"}},[e._v("#")]),e._v(" funding（档案）")]),e._v(" "),v("p",[e._v("可选"),v("code",[e._v("files")]),e._v("字段是一个文件模式数组，它描述了当您的包作为依赖项安装时要包含的条目。文件模式遵循与 类似的语法"),v("code",[e._v(".gitignore")]),e._v("，但相反：包含文件、目录或 glob 模式（"),v("code",[e._v("*")]),e._v(","),v("code",[e._v("**/*")]),e._v("等）将使该文件在打包时包含在 tarball 中。省略该字段将使其默认为"),v("code",[e._v('["*"]')]),e._v("，这意味着它将包含所有文件。")]),e._v(" "),v("p",[e._v("一些特殊的文件和目录也会被包含或排除，无论它们是否存在于"),v("code",[e._v("files")]),e._v("数组中（见下文）。")]),e._v(" "),v("p",[e._v("您还可以"),v("code",[e._v(".npmignore")]),e._v("在包的根目录或子目录中提供一个文件，以防止文件被包含在内。在包的根目录中，它不会覆盖“文件”字段，但在子目录中会覆盖。该"),v("code",[e._v(".npmignore")]),e._v("文件就像一个"),v("code",[e._v(".gitignore")]),e._v(". 如果有一个"),v("code",[e._v(".gitignore")]),e._v("文件，并且"),v("code",[e._v(".npmignore")]),e._v("丢失了，"),v("code",[e._v(".gitignore")]),e._v("则将使用 的内容。")]),e._v(" "),v("p",[e._v("文件包含了“的package.json＃文件”栏中"),v("em",[e._v("无法")]),e._v("通过排除"),v("code",[e._v(".npmignore")]),e._v("或"),v("code",[e._v(".gitignore")]),e._v("。")]),e._v(" "),v("p",[e._v("无论设置如何，始终包含某些文件：")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("package.json")])]),e._v(" "),v("li",[v("code",[e._v("README")])]),e._v(" "),v("li",[v("code",[e._v("CHANGES")]),e._v("/ "),v("code",[e._v("CHANGELOG")]),e._v("/"),v("code",[e._v("HISTORY")])]),e._v(" "),v("li",[v("code",[e._v("LICENSE")]),e._v(" / "),v("code",[e._v("LICENCE")])]),e._v(" "),v("li",[v("code",[e._v("NOTICE")])]),e._v(" "),v("li",[e._v("“主要”字段中的文件")])]),e._v(" "),v("p",[v("code",[e._v("README")]),e._v(", "),v("code",[e._v("CHANGES")]),e._v(", "),v("code",[e._v("LICENSE")]),e._v("&"),v("code",[e._v("NOTICE")]),e._v("可以有任何大小写和扩展名。")]),e._v(" "),v("p",[e._v("相反，一些文件总是被忽略：")]),e._v(" "),v("ul",[v("li",[v("code",[e._v(".git")])]),e._v(" "),v("li",[v("code",[e._v("CVS")])]),e._v(" "),v("li",[v("code",[e._v(".svn")])]),e._v(" "),v("li",[v("code",[e._v(".hg")])]),e._v(" "),v("li",[v("code",[e._v(".lock-wscript")])]),e._v(" "),v("li",[v("code",[e._v(".wafpickle-N")])]),e._v(" "),v("li",[v("code",[e._v(".*.swp")])]),e._v(" "),v("li",[v("code",[e._v(".DS_Store")])]),e._v(" "),v("li",[v("code",[e._v("._*")])]),e._v(" "),v("li",[v("code",[e._v("npm-debug.log")])]),e._v(" "),v("li",[v("code",[e._v(".npmrc")])]),e._v(" "),v("li",[v("code",[e._v("node_modules")])]),e._v(" "),v("li",[v("code",[e._v("config.gypi")])]),e._v(" "),v("li",[v("code",[e._v("*.orig")])]),e._v(" "),v("li",[v("code",[e._v("package-lock.json")]),e._v("（ "),v("code",[e._v("npm-shrinkwrap.json")]),e._v("如果您希望发布，请使用）")])]),e._v(" "),v("h3",{attrs:{id:"main-主要入口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#main-主要入口"}},[e._v("#")]),e._v(" main（主要入口）")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("main")]),e._v(" 字段是 "),v("code",[e._v("package.json")]),e._v(" 中的另一种元数据功能，它可以用来指定加载的入口文件。假如你的项目是一个 "),v("code",[e._v("npm")]),e._v(" 包，当用户安装你的包后，"),v("code",[e._v("require('my-module')")]),e._v(" 返回的是 "),v("code",[e._v("main")]),e._v(" 字段中所列出文件的 "),v("code",[e._v("module.exports")]),e._v(" 属性。")]),e._v(" "),v("li",[e._v("当不指定"),v("code",[e._v("main")]),e._v(" 字段时，默认值是模块根目录下面的"),v("code",[e._v("index.js")]),e._v(" 文件。")])]),e._v(" "),v("h3",{attrs:{id:"browser-浏览器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#browser-浏览器"}},[e._v("#")]),e._v(" browser（浏览器）")]),e._v(" "),v("p",[e._v("如果您的模块打算在客户端使用，则应使用浏览器字段而不是主字段。这有助于提示用户它可能依赖于 Node.js 模块中不可用的原语。（例如 "),v("code",[e._v("window")]),e._v("）")]),e._v(" "),v("h3",{attrs:{id:"bin-自定义命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#bin-自定义命令"}},[e._v("#")]),e._v(" bin（自定义命令）")]),e._v(" "),v("p",[e._v("很多包都有一个或多个他们想要安装到 PATH 中的可执行文件。npm 使这变得非常简单（实际上，它使用此功能来安装“npm”可执行文件。）")]),e._v(" "),v("p",[e._v("要使用它，请"),v("code",[e._v("bin")]),e._v("在 package.json 中提供一个字段，它是命令名到本地文件名的映射。在安装时，npm 会将该文件符号链接到"),v("code",[e._v("prefix/bin")]),e._v("全局安装或"),v("code",[e._v("./node_modules/.bin/")]),e._v("本地安装。")]),e._v(" "),v("p",[e._v("给大家看看我自己做一个简单的demo：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('{\n  "name": "react-cli-library",\n  "version": "0.0.2",\n  "description": "",\n  "bin": {\n    "react-cli": "./bin/index.js"\n  },\n}\n')])])]),v("p",[e._v("我的名称叫做react-cli-library。")]),e._v(" "),v("p",[e._v("所以，"),v("code",[e._v("npm i react-cli-library")])]),e._v(" "),v("p",[e._v("安装完成之后，执行react-cli就会有一些命令，他会执行我的根目录底下"),v("code",[e._v("./bin/index.js")]),e._v("这个文件。")]),e._v(" "),v("p",[e._v("虽然我的项目名称是："),v("code",[e._v("react-cli-library")]),e._v("。但是我执行的内容却是"),v("code",[e._v("react-cli")]),e._v("，这个取决于bin的内容")]),e._v(" "),v("h3",{attrs:{id:"man-快捷入口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#man-快捷入口"}},[e._v("#")]),e._v(" man（快捷入口）")]),e._v(" "),v("p",[e._v("用来给Linux下的man命令查找文档地址，是个单一文件或者文件数组。如果是单一文件，安装完成后，他就是man + 的结果，和此文件名无关，例如：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('{\n  "name": "foo",\n  "version": "1.2.3",\n  "description": "A packaged foo fooer for fooing foos",\n  "main": "foo.js",\n  "man": "./man/doc.1"\n}\n')])])]),v("p",[e._v("通过man foo命令会得到 ./man/doc.1 文件的内容。如果man文件名称不是以模块名称开头的，安装的时候会给加上模块名称前缀。因此，下面这段配置：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('{\n  "name": "foo",\n  "version": "1.2.3",\n  "description": "A packaged foo fooer for fooing foos",\n  "main": "foo.js",\n  "man": [\n    "./man/foo.1",\n    "./man/bar.1"\n  ]\n}\n')])])]),v("p",[e._v("会创建一些文件来作为man foo和man foo-bar命令的结果。man文件必须以数字结尾，或者如果被压缩了，以.gz结尾。数字表示文件将被安装到man的哪个部分。")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('{\n  "name": "foo",\n  "version": "1.2.3",\n  "description": "A packaged foo fooer for fooing foos",\n  "main": "foo.js",\n  "man": [\n    "./man/foo.1",\n    "./man/foo.2"\n  ]\n}\n')])])]),v("p",[e._v("会创建 man foo 和 man 2 foo 两条命令。")]),e._v(" "),v("h3",{attrs:{id:"directories-目录"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#directories-目录"}},[e._v("#")]),e._v(" directories（目录）")]),e._v(" "),v("p",[e._v("CommonJS Packages规范详细说明了一些可以使用"),v("code",[e._v("directories")]),e._v("对象指示包结构的方法。如果您查看npm 的 package.json，您会看到它包含 doc、lib 和 man 目录。")]),e._v(" "),v("p",[e._v("将来，这些信息可能会以其他创造性的方式使用。")]),e._v(" "),v("h3",{attrs:{id:"目录-bin"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#目录-bin"}},[e._v("#")]),e._v(" 目录.bin")]),e._v(" "),v("p",[e._v("如果在 中指定"),v("code",[e._v("bin")]),e._v("目录"),v("code",[e._v("directories.bin")]),e._v("，则将添加该文件夹中的所有文件。")]),e._v(" "),v("p",[e._v("由于"),v("code",[e._v("bin")]),e._v("指令的工作方式，同时指定"),v("code",[e._v("bin")]),e._v("路径和设置"),v("code",[e._v("directories.bin")]),e._v("是错误的。如果要指定单个文件，请使用"),v("code",[e._v("bin")]),e._v("，对于现有"),v("code",[e._v("bin")]),e._v(" 目录中的所有文件，请使用"),v("code",[e._v("directories.bin")]),e._v("。")]),e._v(" "),v("h3",{attrs:{id:"目录-man"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#目录-man"}},[e._v("#")]),e._v(" 目录.man")]),e._v(" "),v("p",[e._v("一个充满手册页的文件夹。Sugar 通过遍历文件夹来生成“man”数组。")]),e._v(" "),v("h3",{attrs:{id:"repository-代码存储位置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#repository-代码存储位置"}},[e._v("#")]),e._v(" repository（代码存储位置）")]),e._v(" "),v("p",[e._v("指定代码所在的位置。这对想要贡献的人很有帮助。如果 git repo 在 GitHub 上，那么该"),v("code",[e._v("npm docs")]),e._v(" 命令将能够找到您。")]),e._v(" "),v("p",[e._v("像这样做：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('{\n  "repository": {\n    "type": "git",\n    "url": "https://github.com/npm/cli.git"\n  }\n}\n')])])]),v("p",[e._v("URL 应该是一个公开可用的（可能是只读的）url，可以直接传递给 VCS 程序，无需任何修改。它不应该是您放入浏览器的 html 项目页面的 url。是给电脑用的。")]),e._v(" "),v("p",[e._v("对于 GitHub、GitHub gist、Bitbucket 或 GitLab 存储库，您可以使用与 相同的快捷语法"),v("code",[e._v("npm install")]),e._v("：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('{\n  "repository": "npm/npm",\n\n  "repository": "github:user/repo",\n\n  "repository": "gist:11081aaa281",\n\n  "repository": "bitbucket:user/repo",\n\n  "repository": "gitlab:user/repo"\n}\n')])])]),v("p",[e._v("如果"),v("code",[e._v("package.json")]),e._v("您的包的 不在根目录中（例如，如果它是 monorepo 的一部分），您可以指定它所在的目录：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('{\n  "repository": {\n    "type": "git",\n    "url": "https://github.com/facebook/react.git",\n    "directory": "packages/react-dom"\n  }\n}\n')])])]),v("h3",{attrs:{id:"config-配置内容"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#config-配置内容"}},[e._v("#")]),e._v(" config（配置内容）")]),e._v(" "),v("p",[e._v("“config”对象可用于设置在升级过程中持续存在的包脚本中使用的配置参数。例如，如果一个包具有以下内容：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('{\n  "name": "foo",\n  "config": {\n    "port": "8080"\n  }\n}\n')])])]),v("p",[e._v("然后有一个“开始”命令，然后引用 "),v("code",[e._v("npm_package_config_port")]),e._v("环境变量，然后用户可以通过执行"),v("code",[e._v("npm config set foo:port 8001")]),e._v(".")]),e._v(" "),v("p",[e._v("查看"),v("code",[e._v("config")]),e._v("和"),v("code",[e._v("scripts")]),e._v("了解更多关于包配置的信息。")]),e._v(" "),v("h3",{attrs:{id:"peerdependencies-对等依赖"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#peerdependencies-对等依赖"}},[e._v("#")]),e._v(" peerDependencies（对等依赖）")]),e._v(" "),v("p",[e._v("在某些情况下，您希望表达您的包与主机工具或库的兼容性，而不必执行"),v("code",[e._v("require")]),e._v("此主机的操作。这通常称为"),v("em",[e._v("插件")]),e._v("。值得注意的是，您的模块可能会公开主机文档所预期和指定的特定接口。")]),e._v(" "),v("p",[e._v("例如：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('{\n  "name": "tea-latte",\n  "version": "1.3.5",\n  "peerDependencies": {\n    "tea": "2.x"\n  }\n}\n')])])]),v("p",[e._v("这确保您的软件包"),v("code",[e._v("tea-latte")]),e._v("只能与主机软件包的第二个主要版本"),v("em",[e._v("一起")]),e._v("安装"),v("code",[e._v("tea")]),e._v("。"),v("code",[e._v("npm install tea-latte")]),e._v("可能会产生以下依赖图：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("├── tea-latte@1.3.5\n└── tea@2.2.0\n")])])]),v("p",[e._v("在 npm 版本 3 到 6 中，"),v("code",[e._v("peerDependencies")]),e._v("不会自动安装，如果在树中发现对等依赖项的无效版本，则会发出警告。由于NPM V7的，peerDependencies"),v("em",[e._v("被")]),e._v(" 默认安装。")]),e._v(" "),v("p",[e._v("如果无法正确解析树，尝试安装具有冲突要求的另一个插件可能会导致错误。因此，请确保您的插件要求尽可能广泛，而不是将其锁定为特定的补丁版本。")]),e._v(" "),v("p",[e._v("假设主机符合semver，只有主机包的主要版本中的更改才会破坏您的插件。因此，如果您使用过主机包的每个 1.x 版本，请使用"),v("code",[e._v('"^1.0"')]),e._v("或"),v("code",[e._v('"1.x"')]),e._v(" 来表达这一点。如果您依赖 1.5.2 中引入的功能，请使用 "),v("code",[e._v('"^1.5.2"')]),e._v(".")]),e._v(" "),v("h3",{attrs:{id:"peerdependenciesmeta-捆绑依赖"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#peerdependenciesmeta-捆绑依赖"}},[e._v("#")]),e._v(" peerDependenciesMeta（捆绑依赖）")]),e._v(" "),v("p",[e._v("这定义了在发布包时将捆绑的包名称数组。")]),e._v(" "),v("p",[e._v("如果您需要在本地保留 npm 包或通过单个文件下载使它们可用，您可以通过在"),v("code",[e._v("bundledDependencies")]),e._v(" 数组中指定包名称并执行"),v("code",[e._v("npm pack")]),e._v(".")]),e._v(" "),v("p",[e._v("例如：")]),e._v(" "),v("p",[e._v("如果我们像这样定义 package.json：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('{\n  "name": "awesome-web-framework",\n  "version": "1.0.0",\n  "bundledDependencies": [\n    "renderized",\n    "super-streams"\n  ]\n}\n')])])]),v("p",[e._v("我们可以"),v("code",[e._v("awesome-web-framework-1.0.0.tgz")]),e._v("通过运行获取文件"),v("code",[e._v("npm pack")]),e._v("。此文件包含的依赖关系"),v("code",[e._v("renderized")]),e._v("，并"),v("code",[e._v("super-streams")]),e._v("可以通过执行安装在一个新的项目"),v("code",[e._v("npm install awesome-web-framework-1.0.0.tgz")]),e._v("。请注意，包名称不包含任何版本，因为该信息在"),v("code",[e._v("dependencies")]),e._v(".")]),e._v(" "),v("p",[e._v("如果这是拼写"),v("code",[e._v('"bundleDependencies"')]),e._v("，那么这也很荣幸。")]),e._v(" "),v("h3",{attrs:{id:"optionaldependencies-可选依赖项"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#optionaldependencies-可选依赖项"}},[e._v("#")]),e._v(" optionalDependencies（可选依赖项）")]),e._v(" "),v("p",[e._v("如果可以使用依赖项，但如果找不到或安装失败，您希望 npm 继续，那么您可以将其放入 "),v("code",[e._v("optionalDependencies")]),e._v("对象中。这是包名称到版本或 url 的映射，就像"),v("code",[e._v("dependencies")]),e._v("对象一样。不同之处在于构建失败不会导致安装失败。运行"),v("code",[e._v("npm install --no-optional")]),e._v("将阻止安装这些依赖项。")]),e._v(" "),v("p",[e._v("处理缺少依赖项仍然是您的程序的责任。例如，这样的事情：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("try {\n  var foo = require('foo')\n  var fooVersion = require('foo/package.json').version\n} catch (er) {\n  foo = null\n}\nif ( notGoodFooVersion(fooVersion) ) {\n  foo = null\n}\n\n// .. then later in your program ..\n\nif (foo) {\n  foo.doFooThings()\n}\n")])])]),v("p",[e._v("中的条目"),v("code",[e._v("optionalDependencies")]),e._v("将覆盖 中的同名条目 "),v("code",[e._v("dependencies")]),e._v("，因此通常最好只放在一个地方。")]),e._v(" "),v("h3",{attrs:{id:"publishconfig-发布配置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#publishconfig-发布配置"}},[e._v("#")]),e._v(" publishConfig（发布配置）")]),e._v(" "),v("p",[e._v("这是一组将在发布时使用的配置值。如果您想设置标记、注册表或访问权限，这将特别方便，这样您就可以确保给定的包没有被标记为“最新”、未发布到全局公共注册表或默认情况下范围模块是私有的。")]),e._v(" "),v("p",[e._v("查看"),v("code",[e._v("config")]),e._v("可覆盖的配置选项列表。")]),e._v(" "),v("h3",{attrs:{id:"workspaces-工作区"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#workspaces-工作区"}},[e._v("#")]),e._v(" workspaces（工作区）")]),e._v(" "),v("p",[e._v("可选"),v("code",[e._v("workspaces")]),e._v("字段是一个文件模式数组，它描述了本地文件系统内的位置，安装客户端应该查找这些位置以找到需要符号链接到顶级文件夹的每个工作区"),v("code",[e._v("node_modules")]),e._v("。")]),e._v(" "),v("p",[e._v("它可以描述要用作工作区的文件夹的直接路径，也可以定义将解析为这些相同文件夹的 glob。")]),e._v(" "),v("p",[e._v("在以下示例中，"),v("code",[e._v("./packages")]),e._v("只要文件夹中包含有效"),v("code",[e._v("package.json")]),e._v("文件，位于文件夹内的所有文件夹 都将被视为工作区 ：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('{\n  "name": "workspace-example",\n  "workspaces": [\n    "./packages/*"\n  ]\n}\n')])])]),v("p",[e._v("有关"),v("code",[e._v("workspaces")]),e._v("更多示例，请参见。")]),e._v(" "),v("h2",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),v("p",[e._v("本文几乎是全网最全的package.json的讲解了。一些常用的和不常用的都有区分，不常用的可以当百科全书查一下，面试主要也是会问一些主要内容。")]),e._v(" "),v("blockquote",[v("p",[e._v("如果觉得本文对你有帮助的话，请点个赞。")])])])}),[],!1,null,null,null);v.default=s.exports}}]);