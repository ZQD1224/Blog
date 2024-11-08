(window.webpackJsonp=window.webpackJsonp||[]).push([[423],{713:function(v,_,e){"use strict";e.r(_);var t=e(4),c=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"心智模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#心智模型"}},[v._v("#")]),v._v(" 心智模型")]),v._v(" "),_("p",[v._v("在深入源码前，让我们先建立"),_("code",[v._v("更新机制")]),v._v("的"),_("code",[v._v("心智模型")]),v._v("。")]),v._v(" "),_("p",[v._v("在后面两节讲解源码时，我们会将代码与"),_("code",[v._v("心智模型")]),v._v("联系上，方便你更好理解。")]),v._v(" "),_("h2",{attrs:{id:"同步更新的-react"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#同步更新的-react"}},[v._v("#")]),v._v(" 同步更新的 React")]),v._v(" "),_("p",[v._v("我们可以将"),_("code",[v._v("更新机制")]),v._v("类比"),_("code",[v._v("代码版本控制")]),v._v("。")]),v._v(" "),_("p",[v._v("在没有"),_("code",[v._v("代码版本控制")]),v._v("前，我们在代码中逐步叠加功能。一切看起来井然有序，直到我们遇到了一个紧急线上 bug（红色节点）。")]),v._v(" "),_("img",{attrs:{src:v.$withBase("/img/git1.png"),alt:"流程1"}}),v._v(" "),_("p",[v._v("为了修复这个 bug，我们需要首先将之前的代码提交。")]),v._v(" "),_("p",[v._v("在"),_("code",[v._v("React")]),v._v("中，所有通过"),_("code",[v._v("ReactDOM.render")]),v._v("创建的应用（其他创建应用的方式参考"),_("RouterLink",{attrs:{to:"/react-source/6-实现-状态更新/reactdom.html#react的其他入口函数"}},[v._v("ReactDOM.render 一节")]),v._v("）都是通过类似的方式"),_("code",[v._v("更新状态")]),v._v("。")],1),v._v(" "),_("p",[v._v("即没有"),_("code",[v._v("优先级")]),v._v("概念，"),_("code",[v._v("高优更新")]),v._v("（红色节点）需要排在其他"),_("code",[v._v("更新")]),v._v("后面执行。")]),v._v(" "),_("h2",{attrs:{id:"并发更新的-react"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#并发更新的-react"}},[v._v("#")]),v._v(" 并发更新的 React")]),v._v(" "),_("p",[v._v("当有了"),_("code",[v._v("代码版本控制")]),v._v("，有紧急线上 bug 需要修复时，我们暂存当前分支的修改，在"),_("code",[v._v("master分支")]),v._v("修复 bug 并紧急上线。")]),v._v(" "),_("img",{attrs:{src:v.$withBase("/img/git2.png"),alt:"流程2"}}),v._v(" "),_("p",[v._v("bug 修复上线后通过"),_("code",[v._v("git rebase")]),v._v("命令和"),_("code",[v._v("开发分支")]),v._v("连接上。"),_("code",[v._v("开发分支")]),v._v("基于"),_("code",[v._v("修复bug的版本")]),v._v("继续开发。")]),v._v(" "),_("img",{attrs:{src:v.$withBase("/img/git3.png"),alt:"流程3"}}),v._v(" "),_("p",[v._v("在"),_("code",[v._v("React")]),v._v("中，通过"),_("code",[v._v("ReactDOM.createBlockingRoot")]),v._v("和"),_("code",[v._v("ReactDOM.createRoot")]),v._v("创建的应用会采用"),_("code",[v._v("并发")]),v._v("的方式"),_("code",[v._v("更新状态")]),v._v("。")]),v._v(" "),_("p",[_("code",[v._v("高优更新")]),v._v("（红色节点）中断正在进行中的"),_("code",[v._v("低优更新")]),v._v("（蓝色节点），先完成"),_("code",[v._v("render - commit流程")]),v._v("。")]),v._v(" "),_("p",[v._v("待"),_("code",[v._v("高优更新")]),v._v("完成后，"),_("code",[v._v("低优更新")]),v._v("基于"),_("code",[v._v("高优更新")]),v._v("的结果"),_("code",[v._v("重新更新")]),v._v("。")]),v._v(" "),_("p",[v._v("接下来两节我们会从源码角度讲解这套"),_("code",[v._v("并发更新")]),v._v("是如何实现的。")]),v._v(" "),_("h2",{attrs:{id:"参考资料"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[v._v("#")]),v._v(" 参考资料")]),v._v(" "),_("p",[_("a",{attrs:{href:"https://www.youtube.com/watch?v=v6iR3Zk4oDY",target:"_blank",rel:"noopener noreferrer"}},[_("code",[v._v("外网")]),v._v(" "),_("code",[v._v("英文")]),v._v(" React Core Team Dan 介绍 React 未来发展方向"),_("OutboundLink")],1)])])}),[],!1,null,null,null);_.default=c.exports}}]);