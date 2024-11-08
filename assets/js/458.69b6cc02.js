(window.webpackJsonp=window.webpackJsonp||[]).push([[458],{749:function(t,e,n){"use strict";n.r(e);var i=n(4),l=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"提高-react-代码质量的方法-让你的-react-代码更简洁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提高-react-代码质量的方法-让你的-react-代码更简洁"}},[t._v("#")]),t._v(" 提高 React 代码质量的方法 - 让你的 React 代码更简洁")]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/Ovv21kiVhZHcz4US2KdkVQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://mp.weixin.qq.com/s/Ovv21kiVhZHcz4US2KdkVQ"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"_1-条件渲染-一个条件时"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-条件渲染-一个条件时"}},[t._v("#")]),t._v(" "),e("strong",[t._v("1. 条件渲染（一个条件时）")])]),t._v(" "),e("p",[t._v("当你要根据条件来判断，以渲染不同的组件时，比如条件满足（为 true) 时，就渲染组件，否则不渲染（渲染空内容），这种情况下\n不要用三元运算符，而是要用 "),e("code",[t._v("&&")]),t._v(" 这个操作符来处理，看下面的例子：")]),t._v(" "),e("p",[e("strong",[t._v("**不好的代码**：")])]),t._v(" "),e("ul",[e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import React, { useState } from 'react'\nexport const ConditionalRenderingWhenTrueBad = () => {  const [showConditionalText, setShowConditionalText] = useState(false)\n  const handleClick = () =>    setShowConditionalText(showConditionalText => !showConditionalText)\n  return (    <div>      <button onClick={handleClick}>Toggle the text</button>      {showConditionalText ? <p>The condition must be true!</p> : null}    </div>  )}\n")])])]),e("p",[e("strong",[t._v("**改进后的代码**：")])]),t._v(" "),e("ul",[e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import React, { useState } from 'react'\nexport const ConditionalRenderingWhenTrueGood = () => {  const [showConditionalText, setShowConditionalText] = useState(false)\n  const handleClick = () =>    setShowConditionalText(showConditionalText => !showConditionalText)\n  return (    <div>      <button onClick={handleClick}>Toggle the text</button>      {showConditionalText && <p>The condition must be true!</p>}    </div>  )}\n")])])]),e("h3",{attrs:{id:"_2-条件渲染-不同的条件时"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-条件渲染-不同的条件时"}},[t._v("#")]),t._v(" "),e("strong",[t._v("2. 条件渲染（不同的条件时）")])]),t._v(" "),e("p",[t._v("跟上面的情况有点像，也是根据条件来判断渲染的组件，只是条件不满足时不再渲染空内容，而是渲染别的组件内容。")]),t._v(" "),e("p",[t._v("这个时候应该用三元运算符。")]),t._v(" "),e("p",[e("strong",[t._v("**不好的代码**：")])]),t._v(" "),e("ul",[e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import React, { useState } from 'react'\nexport const ConditionalRenderingBad = () => {  const [showConditionOneText, setShowConditionOneText] = useState(false)\n  const handleClick = () =>    setShowConditionOneText(showConditionOneText => !showConditionOneText)\n  return (    <div>      <button onClick={handleClick}>Toggle the text</button>      {showConditionOneText && <p>The condition must be true!</p>}      {!showConditionOneText && <p>The condition must be false!</p>}    </div>  )}\n")])])]),e("p",[e("strong",[t._v("**改进后的代码**：")])]),t._v(" "),e("ul",[e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import React, { useState } from 'react'\nexport const ConditionalRenderingGood = () => {  const [showConditionOneText, setShowConditionOneText] = useState(false)\n  const handleClick = () =>    setShowConditionOneText(showConditionOneText => !showConditionOneText)\n  return (    <div>      <button onClick={handleClick}>Toggle the text</button>      {showConditionOneText ? (        <p>The condition must be true!</p>      ) : (        <p>The condition must be false!</p>      )}    </div>  )}\n")])])]),e("h3",{attrs:{id:"_3-布尔值属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-布尔值属性"}},[t._v("#")]),t._v(" "),e("strong",[t._v("3. 布尔值属性")])]),t._v(" "),e("p",[t._v("我们经常会传一个布尔类型的属性 (props) 给组件，类似 "),e("code",[t._v("myTruthyProp={true}")]),t._v(" 这样的写法是没有必要的。")]),t._v(" "),e("p",[e("strong",[t._v("不好的代码")]),t._v("：")]),t._v(" "),e("ul",[e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import React from 'react'\nconst HungryMessage = ({ isHungry }) => (  <span>{isHungry ? 'I am hungry' : 'I am full'}</span>)\nexport const BooleanPropBad = () => (  <div>    <span>      <b>This person is hungry: </b>    </span>    <HungryMessage isHungry={true} />    <br />    <span>      <b>This person is full: </b>    </span>    <HungryMessage isHungry={false} />  </div>)\n")])])]),e("p",[e("strong",[t._v("**改进后的代码**：")])]),t._v(" "),e("ul",[e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import React from 'react'\nconst HungryMessage = ({ isHungry }) => (  <span>{isHungry ? 'I am hungry' : 'I am full'}</span>)\nexport const BooleanPropGood = () => (  <div>    <span>      <b>This person is hungry: </b>    </span>    <HungryMessage isHungry />    <br />    <span>      <b>This person is full: </b>    </span>    <HungryMessage isHungry={false} />  </div>)\n")])])]),e("p",[t._v("这样更简洁点，虽然只是一个小小技巧，但是可以从中看出你是不是一个有经验且优秀的程序员。")]),t._v(" "),e("h3",{attrs:{id:"_4-字符串属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-字符串属性"}},[t._v("#")]),t._v(" "),e("strong",[t._v("4. 字符串属性")])]),t._v(" "),e("p",[t._v("跟上面的例子差不多，只是换成了字符串类型，这个时候，我们通常用双引号把字符串括起来，再加上花括号，如下面这样：")]),t._v(" "),e("p",[e("strong",[t._v("不好的代码")]),t._v("：")]),t._v(" "),e("ul",[e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import React from 'react'\nconst Greeting = ({ personName }) => <p>Hi, {personName}!</p>\nexport const StringPropValuesBad = () => (  <div>    <Greeting personName={\"John\"} />    <Greeting personName={'Matt'} />    <Greeting personName={`Paul`} />  </div>)\n")])])]),e("p",[e("strong",[t._v("****改进后的代码**：**")])]),t._v(" "),e("ul",[e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('import React from \'react\'\nconst Greeting = ({ personName }) => <p>Hi, {personName}!</p>\nexport const StringPropValuesGood = () => (  <div>    <Greeting personName="John" />    <Greeting personName="Matt" />    <Greeting personName="Paul" />  </div>)\n')])])]),e("h3",{attrs:{id:"_5-事件绑定函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-事件绑定函数"}},[t._v("#")]),t._v(" "),e("strong",[t._v("5. 事件绑定函数")])]),t._v(" "),e("p",[t._v("我们经常会给一个组件绑定类似 "),e("code",[t._v("onClick")]),t._v(" 或 "),e("code",[t._v("onChange")]),t._v(" 这样的事件，比如我们可能会这样写："),e("code",[t._v("onChange={e => handleChange(e)}")]),t._v("，其实是没必要的，且看：")]),t._v(" "),e("p",[e("strong",[t._v("**不好的代码**：")])]),t._v(" "),e("ul",[e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import React, { useState } from 'react'\nexport const UnnecessaryAnonymousFunctionsBad = () => {  const [inputValue, setInputValue] = useState('')\n  const handleChange = e => {    setInputValue(e.target.value)  }\n  return (    <>      <label htmlFor=\"name\">Name: </label>      <input id=\"name\" value={inputValue} onChange={e => handleChange(e)} />    </>  )}\n")])])]),e("p",[e("strong",[t._v("**改进后的代码**：")])]),t._v(" "),e("ul",[e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import React, { useState } from 'react'\nexport const UnnecessaryAnonymousFunctionsGood = () => {  const [inputValue, setInputValue] = useState('')\n  const handleChange = e => {    setInputValue(e.target.value)  }\n  return (    <>      <label htmlFor=\"name\">Name: </label>      <input id=\"name\" value={inputValue} onChange={handleChange} />    </>  )}\n")])])]),e("h3",{attrs:{id:"_6-组件属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-组件属性"}},[t._v("#")]),t._v(" "),e("strong",[t._v("6. 组件属性")])]),t._v(" "),e("p",[t._v("跟上面的例子差不多，我们也可以把组件作为属性传给别的组件，这个时候，支持使用把组件包成函数来传递，但没有接任何参数的时候，这种是没有必要的，且看：")]),t._v(" "),e("p",[e("strong",[t._v("**不好的代码**：")])]),t._v(" "),e("ul",[e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('import React from \'react\'\nconst CircleIcon = () => (  <svg height="100" width="100">    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />  </svg>)\nconst ComponentThatAcceptsAnIcon = ({ IconComponent }) => (  <div>    <p>Below is the icon component prop I was given:</p>    <IconComponent />  </div>)\nexport const UnnecessaryAnonymousFunctionComponentsBad = () => (  <ComponentThatAcceptsAnIcon IconComponent={() => <CircleIcon />} />)\n')])])]),e("p",[e("strong",[t._v("****改进后的代码**：**")])]),t._v(" "),e("ul",[e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li"),t._v(" "),e("li")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('import React from \'react\'\nconst CircleIcon = () => (  <svg height="100" width="100">    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />  </svg>)\nconst ComponentThatAcceptsAnIcon = ({ IconComponent }) => (  <div>    <p>Below is the icon component prop I was given:</p>    <IconComponent />  </div>)\nexport const UnnecessaryAnonymousFunctionComponentsGood = () => (  <ComponentThatAcceptsAnIcon IconComponent={CircleIcon} />)\n')])])]),e("ul",[e("li")])])}),[],!1,null,null,null);e.default=l.exports}}]);