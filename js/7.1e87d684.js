webpackJsonp([7],{334:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var d=a(152),u=l(d),n=a(153),r=l(n),o=a(154),c=l(o),f=a(156),i=l(f),m=a(155),E=l(m),s=a(9),R=l(s),p=a(346),v=l(p),b=a(349),P=l(b),y=a(347),C=l(y),h=a(348);a(580);var G=function(e){function t(e){(0,r.default)(this,t);var a=(0,i.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e));return a.state={radio:"0"},a}return(0,E.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return R.default.createElement(v.default,{className:"radio-page"},R.default.createElement(P.default,{title:"单选框 Radio"}),R.default.createElement("main",null,R.default.createElement(h.Panel,null,R.default.createElement(h.Panel.Header,{title:"基本"}),R.default.createElement(h.Panel.Body,{className:"radio-buttons"},R.default.createElement(h.Cell,null,R.default.createElement(h.Radio,null,"普通")),R.default.createElement(h.Cell,null,R.default.createElement(h.Radio,{defaultChecked:!0},"默认选中")),R.default.createElement(h.Cell,null,R.default.createElement(h.Radio,{disabled:!0},"禁用")),R.default.createElement(h.Cell,null,R.default.createElement(h.Radio,{defaultChecked:!0,disabled:!0},"选中且禁用")))),R.default.createElement(h.Panel,null,R.default.createElement(h.Panel.Header,{title:"按钮样式"}),R.default.createElement(h.Panel.Body,{className:"radio-buttons"},R.default.createElement(h.Cell,{description:R.default.createElement(h.Radio.Group,{type:"button",value:this.state.radio,onChange:function(e){return console.log("radio to "+e)}},R.default.createElement(h.Radio,{value:"0"},"选项一"),R.default.createElement(h.Radio,{value:"1"},"选项二"),R.default.createElement(h.Radio,{value:"2"},"选项三"))},"普通"),R.default.createElement(h.Cell,{description:R.default.createElement(h.Radio.Group,{type:"button",defaultValue:"1"},R.default.createElement(h.Radio,{value:"0"},"选项一"),R.default.createElement(h.Radio,{value:"1"},"选项二"),R.default.createElement(h.Radio,{value:"2"},"选项三"))},"指定默认值"),R.default.createElement(h.Cell,{description:R.default.createElement(h.Radio.Group,{type:"button"},R.default.createElement(h.Radio,{value:"0"},"选项一"),R.default.createElement(h.Radio,{value:"1"},"选项二"),R.default.createElement(h.Radio,{value:"2",disabled:!0},"选项三"))},"禁用指定项"),R.default.createElement(h.Cell,{description:R.default.createElement(h.Radio.Group,{type:"button",shape:"radius"},R.default.createElement(h.Radio,{value:"0"},"选项一"),R.default.createElement(h.Radio,{value:"1"},"选项二"),R.default.createElement(h.Radio,{value:"2"},"选项三"))},"圆角"),R.default.createElement(h.Cell,{description:R.default.createElement(h.Radio.Group,{type:"button",shape:"round"},R.default.createElement(h.Radio,{value:"0"},"选项一"),R.default.createElement(h.Radio,{value:"1"},"选项二"),R.default.createElement(h.Radio,{value:"2"},"选项三"))},"椭圆角"))),R.default.createElement(h.Panel,null,R.default.createElement(h.Panel.Header,{title:"块级样式"}),R.default.createElement(h.Panel.Body,{className:"block-box"},R.default.createElement(h.Radio.Group,{block:!0,compact:!0,type:"button",shape:"radius"},R.default.createElement(h.Radio,{value:"0"},"选项一"),R.default.createElement(h.Radio,{value:"1"},"选项二"),R.default.createElement(h.Radio,{value:"2"},"选项三")))),R.default.createElement(h.Panel,null,R.default.createElement(h.Panel.Header,{title:"列表样式"}),R.default.createElement(h.Panel.Body,null,R.default.createElement(h.Radio.Group,{type:"cell"},R.default.createElement(h.Radio,{value:"0"},"选项一"),R.default.createElement(h.Radio,{value:"1"},"选项二"),R.default.createElement(h.Radio,{value:"2",disabled:!0},"选项三（禁止选择）")))),R.default.createElement(h.Panel,null,R.default.createElement(h.Panel.Header,{title:"列表样式禁用状态"}),R.default.createElement(h.Panel.Body,null,R.default.createElement(h.Radio.Group,{disabled:!0,type:"cell"},R.default.createElement(h.Radio,{value:"0"},"选项一"),R.default.createElement(h.Radio,{value:"1"},"选项二"),R.default.createElement(h.Radio,{value:"2"},"选项三"))))),R.default.createElement(C.default,null))}}]),t}(s.PureComponent);t.default=G,e.exports=t.default},580:function(e,t){}});