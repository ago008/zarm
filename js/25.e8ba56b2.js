webpackJsonp([25],{328:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=n(346),a=n.n(l),r=n(88),o=n.n(r),c=n(89),i=n.n(c),m=n(90),s=n.n(m),u=n(91),d=n.n(u),E=n(92),f=n.n(E),p=n(5),b=n.n(p),h=n(347),k=n(350),v=n(348),C=n(349),y=function(e){function t(e){i()(this,t);var n=d()(this,(t.__proto__||o()(t)).call(this,e));return n.open=function(e){n.setState(a()({},""+e,!0))},n.close=function(e){n.setState(a()({},""+e,!1))},n.state={alert:!1,confirm:!1},n}return f()(t,e),s()(t,[{key:"render",value:function(){var e=this;return b.a.createElement(h.a,{className:"modal-page"},b.a.createElement(k.a,{title:"模态框 Modal"}),b.a.createElement("main",null,b.a.createElement(C.n,null,b.a.createElement(C.n.Header,{title:"基本"}),b.a.createElement(C.n.Body,null,b.a.createElement(C.e,{description:b.a.createElement(C.d,{size:"xs",onClick:function(){return e.open("modal1")}},"开启")},"普通"),b.a.createElement(C.e,{description:b.a.createElement(C.d,{size:"xs",onClick:function(){return e.open("modal3")}},"开启")},"圆角"),b.a.createElement(C.e,{description:b.a.createElement(C.d,{size:"xs",onClick:function(){return e.open("modal2")}},"开启")},"遮罩层可关闭"),b.a.createElement(C.e,{description:b.a.createElement(C.d,{size:"xs",onClick:function(){return e.open("modal4")}},"开启")},"无头部"),b.a.createElement(C.e,{description:b.a.createElement(C.d,{size:"xs",onClick:function(){return e.open("modal5")}},"开启")},"动画效果"))),b.a.createElement(C.n,null,b.a.createElement(C.n.Header,{title:"特定场景"}),b.a.createElement(C.n.Body,null,b.a.createElement(C.e,{description:b.a.createElement(C.d,{size:"xs",theme:"warning",onClick:function(){return e.open("alert")}},"开启")},"警告框 Alert"),b.a.createElement(C.e,{description:b.a.createElement(C.d,{size:"xs",theme:"warning",onClick:function(){return e.open("confirm")}},"开启")},"确认框 Confirm"))),b.a.createElement(C.l,{visible:this.state.modal1},b.a.createElement(C.l.Header,{title:"标题",onClose:function(){return e.close("modal1")}}),b.a.createElement(C.l.Body,null,"模态框内容")),b.a.createElement(C.l,{visible:this.state.modal2,onMaskClick:function(){return e.close("modal2")}},b.a.createElement(C.l.Header,{title:"标题"}),b.a.createElement(C.l.Body,null,"点击遮罩层关闭")),b.a.createElement(C.l,{shape:"radius",visible:this.state.modal3},b.a.createElement(C.l.Header,{title:"标题",onClose:function(){return e.close("modal3")}}),b.a.createElement(C.l.Body,null,"模态框内容")),b.a.createElement(C.l,{visible:this.state.modal4,onMaskClick:function(){return e.close("modal4")}},b.a.createElement(C.l.Body,null,"无头部")),b.a.createElement(C.l,{visible:this.state.modal5,animationType:"rotate",onMaskClick:function(){return e.close("modal5")}},b.a.createElement(C.l.Body,null,"当前使用的是rotate旋转效果。",b.a.createElement("br",null),b.a.createElement("br",null),"支持多种动画效果：",b.a.createElement("br",null),"fade：淡出淡入效果（默认）",b.a.createElement("br",null),"zoom：缩放效果",b.a.createElement("br",null),"rotate：旋转效果",b.a.createElement("br",null),"door：开关门效果",b.a.createElement("br",null),"flip：翻转效果",b.a.createElement("br",null),"moveUp、moveDown、moveLeft、moveRight：移出移入效果",b.a.createElement("br",null),"slideUp、slideDown、slideLeft、slideRight：滑出滑入效果",b.a.createElement("br",null))),b.a.createElement(C.b,{shape:"radius",visible:this.state.alert,title:"警告",message:"这里是警告信息",onCancel:function(){return e.close("alert")}}),b.a.createElement(C.g,{shape:"radius",visible:this.state.confirm,title:"确认信息",message:"你确定要这样做吗？",onOk:function(){return alert("click ok")},onCancel:function(){return e.close("confirm")}})),b.a.createElement(v.a,null))}}]),t}(p.Component);t.default=y}});