(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{560:function(t,s,v){"use strict";v.r(s);var _=v(4),l=Object(_.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"介绍下https中间人攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍下https中间人攻击"}},[t._v("#")]),t._v(" 介绍下HTTPS中间人攻击")]),t._v(" "),s("p",[t._v("https协议由 http + ssl 协议构成，具体的链接过程可参考"),s("a",{attrs:{href:"https://github.com/lvwxx/blog/issues/3",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSL或TLS握手的概述"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("中间人攻击过程如下：")]),t._v(" "),s("ol",[s("li",[t._v("服务器向客户端发送公钥。")]),t._v(" "),s("li",[t._v("攻击者截获公钥，保留在自己手上。")]),t._v(" "),s("li",[t._v("然后攻击者自己生成一个【伪造的】公钥，发给客户端。")]),t._v(" "),s("li",[t._v("客户端收到伪造的公钥后，生成加密hash值发给服务器。")]),t._v(" "),s("li",[t._v("攻击者获得加密hash值，用自己的私钥解密获得真秘钥。")]),t._v(" "),s("li",[t._v("同时生成假的加密hash值，发给服务器。")]),t._v(" "),s("li",[t._v("服务器用私钥解密获得假秘钥。")]),t._v(" "),s("li",[t._v("服务器用加秘钥加密传输信息")])]),t._v(" "),s("p",[t._v("防范方法：")]),t._v(" "),s("ol",[s("li",[t._v("服务端在发送浏览器的公钥中加入CA证书，浏览器可以验证CA证书的有效性")])])])}),[],!1,null,null,null);s.default=l.exports}}]);