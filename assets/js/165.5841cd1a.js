(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{454:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前端运维部署那些事"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端运维部署那些事"}},[t._v("#")]),t._v(" 前端运维部署那些事")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s/2-DIsGx9rKNxdRyYBFTv9w",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://mp.weixin.qq.com/s/2-DIsGx9rKNxdRyYBFTv9w"),s("OutboundLink")],1)])]),t._v(" "),s("blockquote",[s("p",[t._v("❝")]),t._v(" "),s("p",[t._v("聊到运维，很长一段时间我觉得跟前端就是毫无关联的玩意，应该说半毛钱关系都木。但随着前端工程化的发展，前端基本运维部署相关知识甚至也逐步被重视，如果你公司的运维部门很强大，那么你也可以完全忽略运维相关的。只是树酱觉得，如果你想更多了解前端架构，还是需要具备一定的运维相关知识储备。当然，现在云厂商都想应推出自己的Serverless服务(下一篇会讲～)，号称让前端更专注业务的开发，而不用担心底层应用的部署和维护，对开发者而言可以更多聚焦到业务领域的开发，有兴趣的童鞋可以去玩玩")]),t._v(" "),s("p",[t._v("❞")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/lXoAxSVgJib309JpyfsgbGdM4Ergib06PCKYibfFPCh90jh87WLWneqJHOXKeacibagaOvNmzcZUYC7ubnlq30G2Qw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),t._v(" "),s("h3",{attrs:{id:"_1-npm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-npm"}},[t._v("#")]),t._v(" 1.npm")]),t._v(" "),s("blockquote",[s("p",[t._v("❝")]),t._v(" "),s("p",[t._v("npm 是 Node.js 官方提供的包管理工具，主要用来管理项目依赖，发布等等，下面介绍几个比较常见的部署应用场景，常用的npm命令这里不作介绍了")]),t._v(" "),s("p",[t._v("❞")])]),t._v(" "),s("h4",{attrs:{id:"_1-1-nrm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-nrm"}},[t._v("#")]),t._v(" 1.1 nrm")]),t._v(" "),s("blockquote",[s("p",[t._v("❝")]),t._v(" "),s("p",[t._v("nrm(npm registry manager )是npm的镜像源管理工具，因为npm默认建立的链接访问的是国外的资源，访问速度较慢，使用这个就可以快速地在 npm 源间切")]),t._v(" "),s("p",[t._v("❞")])]),t._v(" "),s("ul",[s("li",[t._v("如何安装")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-g")]),t._v(" nrm\n")])])]),s("ul",[s("li",[t._v("查看可选的资源")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("nrm "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v("   \n\n*npm ---- https://registry.npmjs.org/\n\ncnpm --- http://r.cnpmjs.org/\n\ntaobao - http://registry.npm.taobao.org/\n\neu ----- http://registry.npmjs.eu/\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),s("ul",[s("li",[t._v("添加私有仓库链接")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("nrm "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" name http://registry.npm.tree.com/  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 私有仓库链接")]),t._v("\nnrm use name "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用本址的镜像地址")]),t._v("\n")])])]),s("p",[t._v("nrm 更多用于如果公司内网部署了私有仓库，也就是方便用nrm作来源切换，也有益于依赖的版本管理，如果你想搭建自己的私有仓库，可以使用verdaccio，可以看这个具体的教程 点我")]),t._v(" "),s("h4",{attrs:{id:"_1-2-发布npm包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-发布npm包"}},[t._v("#")]),t._v(" 1.2 发布npm包")]),t._v(" "),s("blockquote",[s("p",[t._v("❝")]),t._v(" "),s("p",[t._v("当我们想发布一个npm包，需要完成什么样的流程呢？")]),t._v(" "),s("p",[t._v("❞")])]),t._v(" "),s("ul",[s("li",[t._v("先注册npm账号 🔗")]),t._v(" "),s("li",[t._v("配置package.json")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kutil"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #版本名称\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # 可执行的脚本命令\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"repository"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com/xxx/xxx.git"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #github仓库地址\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"author"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tree <shuxin_liu@kingdee.com>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #作者\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(' "工具包“'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #包的说明\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"keywords"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utils"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("配置打包机制")])]),t._v(" "),s("blockquote",[s("p",[t._v("❝")]),t._v(" "),s("p",[t._v("如果是工具类打包，推荐使用rollup，webpack比较适合打包一些应用，例如SPA或者同构项目")]),t._v(" "),s("p",[t._v("❞")])]),t._v(" "),s("ul",[s("li",[t._v("添加单元测试")])]),t._v(" "),s("blockquote",[s("p",[t._v("❝")]),t._v(" "),s("p",[t._v("优质的开源包，都有单元测试模块，来保证包的稳定性和代码质量，常见会有build-passing的标记，有兴趣的童鞋可以阅读树酱之前写的前端单元测试那些事")]),t._v(" "),s("p",[t._v("❞")])]),t._v(" "),s("ul",[s("li",[t._v("开发文档readme.me")])]),t._v(" "),s("blockquote",[s("p",[t._v("❝")]),t._v(" "),s("p",[t._v("readme方便开发者快速熟悉，包括具体的Api介绍、使用例子、项目介绍等等，还可以加入包括单元测试覆盖率、下载量、证书等等")]),t._v(" "),s("p",[t._v("❞")])]),t._v(" "),s("p",[t._v("最后完成上面一系列操作之后，到了最终的发布环节")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" login "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 登录你上面注册的npm账号")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" publish "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 登录成功后，执行发布命令")]),t._v("\n\n+ kutil@1.0.0 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 发布成功显示npm报名及包的版本号")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-jenkins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-jenkins"}},[t._v("#")]),t._v(" 2. jenkins")]),t._v(" "),s("blockquote",[s("p",[t._v("❝")]),t._v(" "),s("p",[t._v("jenkins作为一个可扩展的自动化服务器，可以用作简单的 CI 服务器，具有自动化构建、测试和部署等功能，简而言之，jenkins可以方便我们日常的前端项目版本更新迭代（开发、测试、生产环境等），也可以通过它自动化完成一系列的操作包括：编译打包元测试、代码扫描等，官方文档")]),t._v(" "),s("p",[t._v("❞")])]),t._v(" "),s("h4",{attrs:{id:"_2-1-如何安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-如何安装"}},[t._v("#")]),t._v(" 2.1 如何安装")]),t._v(" "),s("ul",[s("li",[t._v("下载 Jenkins.")]),t._v(" "),s("li",[t._v("打开终端进入到下载目录.")]),t._v(" "),s("li",[t._v("运行命令 "),s("code",[t._v("java -jar jenkins.war --httpPort=8080.")])]),t._v(" "),s("li",[t._v("打开浏览器进入链接 http://localhost:8080.")]),t._v(" "),s("li",[t._v("按照说明完成安装.")])]),t._v(" "),s("p",[t._v("详细流程图可参考 Jenkins+github 前端自动化部署")]),t._v(" "),s("h4",{attrs:{id:"_2-2-配合前端项目自动化部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-配合前端项目自动化部署"}},[t._v("#")]),t._v(" 2.2 配合前端项目自动化部署")]),t._v(" "),s("blockquote",[s("p",[t._v("❝")]),t._v(" "),s("p",[t._v("这里主要介绍jenkins流水线配置的使用，流水线的代码定义了整个的构建过程, 他通常包括构建, 测试和交付应用程序的阶段，下面是路径和仓库的配置")]),t._v(" "),s("p",[t._v("❞")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/lXoAxSVgJib309JpyfsgbGdM4Ergib06PC1cQc9Ml1KicnVEcshLSTCJJVM4kBRzWuv5ySP2EKksERxulCEib3TtFg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),t._v(" "),s("p",[t._v("图片相关配置如下：")]),t._v(" "),s("ul",[s("li",[t._v("SCM:选择git或者svn作为代码触发器")]),t._v(" "),s("li",[t._v("脚本路径：在项目根目录创建jenkinsfile来编写流水线")])]),t._v(" "),s("p",[t._v("下面介绍一个简单版的jenkinsfile的流水线任务写法，完成整个前端工程化部署涉及的编译打包、静态扫描、单元测试等环节")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("def gitUrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://gitlab.****.com/shc/****.git"')]),t._v("//GIT入口（随不同工程改变）\ndef gitCred "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"***-***-4f00-a926-1848b670d97b"')]),t._v("    //GIT 身份凭据\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DEV"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" buildType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    buildScript "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"build_development"')]),t._v("\n    try "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'k8s'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            stage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'下拉源码'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                   checkout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$class")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GitSCM'")]),t._v(", branches: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*/master'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", doGenerateSubmoduleConfigurations: false, extensions: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", submoduleCfg: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", userRemoteConfigs: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("credentialsId: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${gitCred}")]),t._v('"')]),t._v(", url: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${gitUrl}")]),t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#可由片段生成器生成，选择示例步骤 “checkout:Check out from version control”，生成流水线脚本获取")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            checkStatus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'下拉源码'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            stage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'代码构建编译'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yarn run '),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${buildScript}")]),t._v('"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            checkStatus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'代码构建编译'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            stage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'代码静态扫描'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yarn run lint'")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            checkStatus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'代码静态扫描'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            stage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'单元测试'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yarn run unit'")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            checkStatus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'单元测试'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" catch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Exception e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("完成后，即可构建项目，分阶段完成，首先是下拉源码、代码构建编译、代码扫描等等，所有环节成功才算自动化部署成功，如下所示")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/lXoAxSVgJib309JpyfsgbGdM4Ergib06PCdwCJZHvjHspD1pk9QoetxhuYMHK5L4WKefwVWEILibc6lelnPUtUD3A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),t._v(" "),s("h3",{attrs:{id:"_3-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-docker"}},[t._v("#")]),t._v(" 3.Docker")]),t._v(" "),s("blockquote",[s("p",[t._v("❝")]),t._v(" "),s("p",[t._v("Docker是一个虚拟环境容器,可以将开发环境、代码、配置文件等一并打包到这个容器中,最后发布应用")]),t._v(" "),s("p",[t._v("❞")])]),t._v(" "),s("h4",{attrs:{id:"_3-1-如何使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-如何使用"}},[t._v("#")]),t._v(" 3.1 如何使用")]),t._v(" "),s("blockquote",[s("p",[t._v("❝")]),t._v(" "),s("p",[t._v("通过将部署的操作集中成一个部署脚本完成传统的部署流程，通过在服务器上运行docker容器来运行前端应用")]),t._v(" "),s("p",[t._v("❞")])]),t._v(" "),s("p",[t._v("如何安装")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("yum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" docker-ce\n")])])]),s("p",[t._v("项目目录，部署项目需要准备Dockerfile和nginx.conf(如果nginx不作定制化，可以直接用官方镜像)")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/lXoAxSVgJib309JpyfsgbGdM4Ergib06PChmIuNhcpbOTv0mibmPa9e3lwcNlE1lkEzia3g5Qj5qTPY2kHcpTia643g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),t._v(" "),s("h4",{attrs:{id:"_3-2-dockerfile-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-dockerfile-配置"}},[t._v("#")]),t._v(" 3.2 Dockerfile 配置")]),t._v(" "),s("blockquote",[s("p",[t._v("❝")]),t._v(" "),s("p",[t._v("dockerfile是一个配置文件,用来让docker build命令清楚运行那些操作，创建dockerfile并编写相关配置")]),t._v(" "),s("p",[t._v("❞")])]),t._v(" "),s("blockquote",[s("p",[t._v("每一个指令的前缀都必须是大写的")])]),t._v(" "),s("div",{staticClass:"language-dockerfile extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[s("code",[s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" node:latest "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" builder ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /app")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" package.json ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" npm install   ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" . .")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" npm run build")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" nginx:latest")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" nginx.conf /etc/nginx")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token options"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("--from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("builder")])]),t._v(" /app/dist  /usr/share/nginx/html")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXPOSE")]),t._v(" 80")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("ADD和COPY")]),t._v("： 将文件或目录复制到Dockerfile构建的镜像中")]),t._v(" "),s("li",[s("code",[t._v("EXPOSE")]),t._v("： 指定运行该镜像的容器使用的端口，可以是多个。")]),t._v(" "),s("li",[s("code",[t._v("RUN")]),t._v(" ：指令告诉docker 在镜像内执行命令")]),t._v(" "),s("li",[s("code",[t._v("FROM")]),t._v(" ：通过FROM指定的镜像名称，这个镜像称之为基础镜像，必须位于第一条非注释指令")]),t._v(" "),s("li",[s("code",[t._v("WORKDIR")]),t._v("： 在容器内部设置工作目录")])]),t._v(" "),s("p",[s("code",[t._v("Nginx.conf")]),t._v(" 配置如下")]),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("events")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("worker_connections")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v("  localhost")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v("   /usr/share/nginx/html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v("  index.html index.htm")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("   \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("创建文件并编写后，用docker创建镜像")]),t._v(" "),s("h4",{attrs:{id:"_3-3-如何创建镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-如何创建镜像"}},[t._v("#")]),t._v(" 3.3 如何创建镜像")]),t._v(" "),s("blockquote",[s("p",[t._v("❝")]),t._v(" "),s("p",[t._v("使用当前目录的 Dockerfile 创建镜像，标签为 frontend")]),t._v(" "),s("p",[t._v("❞")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" build "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-t")]),t._v(" frontend "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),s("ul",[s("li",[s("p",[s("code",[t._v("-t")]),t._v(" ：指定要创建的目标镜像")])]),t._v(" "),s("li",[s("p",[s("code",[t._v(".")]),t._v(" ：Dockerfile 文件所在目录，可以指定Dockerfile 的绝对路径")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/lXoAxSVgJib309JpyfsgbGdM4Ergib06PCKkCibqcxfpCrQ0Qr18xAvic9dRm8JtU7Wv6pcIXiahV8ZaMzTGZpZicuTw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/lXoAxSVgJib309JpyfsgbGdM4Ergib06PCTQup8kuVPUj3gYBM2oibJmQV9v3LXC2YibaBmWGzUMK0pjoOFtFRZI2w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})])])]),t._v(" "),s("p",[t._v("镜像成功生成")]),t._v(" "),s("h4",{attrs:{id:"_3-4-查看镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-查看镜像"}},[t._v("#")]),t._v(" 3.4 查看镜像")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" image "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" frontend\n")])])]),s("p",[s("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/lXoAxSVgJib309JpyfsgbGdM4Ergib06PCL3Rd1GLk7g0C8dSbvaySlgyn7n7sVYMZib4RdMeNcWszMCxn6TxbLYA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),t._v(" "),s("p",[t._v("出现结果则应用镜像 frontend 成功创建,然后我们基于该镜像启动一个Docker容器")]),t._v(" "),s("h4",{attrs:{id:"_4-5-如何启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-如何启动"}},[t._v("#")]),t._v(" 4.5 如何启动")]),t._v(" "),s("blockquote",[s("p",[t._v("❝")]),t._v(" "),s("p",[t._v("使用docker镜像frontend:latest以指定80端口映射模式启动容器,并将容器命名为frontend")]),t._v(" "),s("p",[t._v("❞")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--name")]),t._v(" frontend "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(":80 frontend:latest\n")])])]),s("ul",[s("li",[s("code",[t._v("-p")]),t._v(": 指定端口映射，格式为：主机(宿主)端口:容器端口 将宿主的80端口映射到容器的80端口")]),t._v(" "),s("li",[s("code",[t._v("--name")]),t._v(": 为容器指定一个名称；")])]),t._v(" "),s("p",[t._v("完成 "),s("code",[t._v("docker")]),t._v(" 部署")]),t._v(" "),s("p",[s("code",[t._v("docker")]),t._v("也可以集成到上一节讲的"),s("code",[t._v("jenkins")]),t._v("自动化部署流水线中去")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("  stage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'部署到开发联调环境'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auto deploy to test environment"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"docker build -t frontend ."')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"docker run --name frontend -p 80:80 frontend:latest"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_4-pm2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-pm2"}},[t._v("#")]),t._v(" 4.PM2")]),t._v(" "),s("blockquote",[s("p",[t._v("❝")]),t._v(" "),s("p",[t._v("PM2是node进程管理工具，可以利用它来简化很多node应用管中繁琐任务，是Nodejs应用程序守护进程必不可少的选择，方便管理基于nodejs平台下能够有独立运行访问的web服务，如nextjs、express、koa等前端应用")]),t._v(" "),s("p",[t._v("❞")])]),t._v(" "),s("h4",{attrs:{id:"_4-1-常见的应用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-常见的应用场景"}},[t._v("#")]),t._v(" 4.1 常见的应用场景")]),t._v(" "),s("ul",[s("li",[t._v("部署"),s("code",[t._v("node koa2")]),t._v("或 "),s("code",[t._v("express")]),t._v("项目应用")]),t._v(" "),s("li",[t._v("部署 前端"),s("code",[t._v("SSR")]),t._v("（后端渲染）应用，如"),s("code",[t._v("nuxt.js（Vue）")]),t._v("和"),s("code",[t._v("next.js(React)")]),t._v("等构建服务端渲染应用框架")])]),t._v(" "),s("h4",{attrs:{id:"_4-2-如何使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-如何使用"}},[t._v("#")]),t._v(" 4.2 如何使用")]),t._v(" "),s("ul",[s("li",[t._v("安装 ："),s("code",[t._v("npm install -g pm2")])]),t._v(" "),s("li",[t._v("启动node项目 : "),s("code",[t._v("pm2 start app.js 或者 pm2 start bin/www")])]),t._v(" "),s("li",[t._v("停止pm2服务："),s("code",[t._v("pm2 stop bin/www")])]),t._v(" "),s("li",[t._v("停止所有pm2服务: "),s("code",[t._v("pm2 stop all")])]),t._v(" "),s("li",[t._v("重启pm2服务: "),s("code",[t._v("pm2 restart bin/www")])]),t._v(" "),s("li",[t._v("pm2所有进程信息："),s("code",[t._v("pm2 list")])])]),t._v(" "),s("p",[t._v("启动后如下所示")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/lXoAxSVgJib309JpyfsgbGdM4Ergib06PC9j1G4h6u3HU8Xt3p8tX5N65ImGxibxdtwPrPibGibBvibpD9Xtm9wbqLRg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),t._v(" "),s("h4",{attrs:{id:"_4-3-高阶应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-高阶应用"}},[t._v("#")]),t._v(" 4.3 高阶应用")]),t._v(" "),s("blockquote",[s("p",[t._v("❝")]),t._v(" "),s("p",[t._v("在项目根目录中添加一个processes.json")]),t._v(" "),s("p",[t._v("❞")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n #apps是一个数组，每一个数组成员就是对应一个pm2中运行的应用\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"apps"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  #名称\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"script"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #程序入口\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cwd"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("           #应用程序所在的目录\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error_file"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./logs/err.log"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("#错误输出日志\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"log_date_format"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YYYY-MM-DD HH:mm Z"')]),t._v(" #日期格式\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("结合"),s("code",[t._v("package.json")]),t._v("脚本命令，可以用"),s("code",[t._v("processes")]),t._v("来管理多应用")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"script"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pm2"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pm2 start processes.json"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("更多命令和配置信息查看 pm2文档")]),t._v(" "),s("h3",{attrs:{id:"_5-nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-nginx"}},[t._v("#")]),t._v(" 5.Nginx")]),t._v(" "),s("blockquote",[s("p",[t._v("❝")]),t._v(" "),s("p",[t._v("Nginx它既可以作为 Web 服务器，也可以作为负载均衡服务器，具备高性能、高并发连接等")]),t._v(" "),s("p",[t._v("❞")])]),t._v(" "),s("h4",{attrs:{id:"_5-1-前端nginx那些事"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-前端nginx那些事"}},[t._v("#")]),t._v(" 5.1 前端Nginx那些事")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/lXoAxSVgJib309JpyfsgbGdM4Ergib06PCL6EL0wsMTWxqfsCLsAw2iahQYpo9U0Mcgk0BwUSvbUepver8RFW7K1w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),t._v(" "),s("p",[t._v("详细信息请看之前梳理的"),s("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MjM5OTExNzQ3NQ==&mid=2450958611&idx=1&sn=a4cfe928fd06e93b0da1ce2b602d6e64&chksm=b1225edf8655d7c9fc708c70445b7613f4919dac0d429f5f85d0b05c4d0c98656affd7b6d246&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端Nginx那些事"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"_5-2-补充"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-补充"}},[t._v("#")]),t._v(" 5.2 补充")]),t._v(" "),s("ul",[s("li",[t._v("灰度发布")])]),t._v(" "),s("blockquote",[s("p",[t._v("❝")]),t._v(" "),s("p",[t._v("灰度发布即是让一部分人继续用旧版本的产品A，然后一部分用户开始用新版本特征的产品B，如果用户对B没有什么问题反馈，则逐步扩大范围。一方面可以保证整体系统的稳定，而且在初始灰度的时候就可以发现、调整问题，以保证其影响度")]),t._v(" "),s("p",[t._v("❞")])]),t._v(" "),s("p",[t._v("传统的灰度是通过"),s("code",[t._v("Nginx")]),t._v("分发流量到服务器，这里介绍一下简单的灰度规则配置，通过在"),s("code",[t._v("nginx")]),t._v("里面配置路由规则就好，如果是规则复杂的话,可以结合"),s("code",[t._v("nginx+lua")]),t._v(" 做一些些灰度的业务逻辑")]),t._v(" "),s("p",[t._v("1.根据Cookie实现灰度发布")]),t._v(" "),s("blockquote",[s("p",[t._v("❝")]),t._v(" "),s("p",[t._v("通过获取cookie设置的版本号来区分")]),t._v(" "),s("p",[t._v("❞")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('upstream test1 {\n    server 192.168.0.1:8080 max_fails=1 fail_timeout=60;\n}\n\nupstream default {\n    server 192.168.0.0:8080 max_fails=1 fail_timeout=60;\n}\n\nserver {\n  listen 80;\n  server_name  www.****.com;\n  set $group "default";\n    if ($http_cookie ~* "version=V1"){\n        set $group test1;\n    }\n\n  location / {                       \n    proxy_pass http://$group;\n    proxy_set_header   Host             $host;\n    proxy_set_header   X-Real-IP        $remote_addr;\n    proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;\n    index  index.html index.htm;\n  }\n }\n')])])]),s("ol",[s("li",[t._v("根据IP实现灰度发布")])]),t._v(" "),s("blockquote",[s("p",[t._v("❝")]),t._v(" "),s("p",[t._v("通过内外网IP来区分")]),t._v(" "),s("p",[t._v("❞")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('upstream test1 {\n    server 192.168.0.1:8080 max_fails=1 fail_timeout=60;\n}\n\nupstream default {\n    server 192.168.0.0:8080 max_fails=1 fail_timeout=60;\n}\n\nserver {\n  listen 80;\n  server_name  www.xxx.com;\n  set $group default;\n  if ($remote_addr ~ "10.0.0.110") {\n      set $group test1;\n  }\n\nlocation / {                       \n    proxy_pass http://$group;\n    proxy_set_header   Host             $host;\n    proxy_set_header   X-Real-IP        $remote_addr;\n    proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;\n    index  index.html index.htm;\n  }\n}\n')])])])])}),[],!1,null,null,null);s.default=e.exports}}]);