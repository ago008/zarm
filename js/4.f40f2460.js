webpackJsonp([4],{332:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(88),i=a.n(n),l=a(89),s=a.n(l),r=a(90),c=a.n(r),o=a(91),m=a.n(o),u=a(92),d=a.n(u),E=a(5),h=a.n(E),v=a(347),f=a(350),b=a(348),p=a(349),k=a(586),x=(a.n(k),function(e){function t(e){s()(this,t);var a=m()(this,(t.__proto__||i()(t)).call(this,e));return a.state={toast:{visible:!1,onMaskClick:function(){var e=a.state.toast;e.visible=!1,a.setState({toast:e})}},loading:!1},a}return d()(t,e),c()(t,[{key:"render",value:function(){var e=this,t=this.state.toast;return h.a.createElement(v.a,{className:"toast-page"},h.a.createElement(f.a,{title:"轻提示 Toast"}),h.a.createElement("main",null,h.a.createElement(p.n,null,h.a.createElement(p.n.Header,{title:"基本"}),h.a.createElement(p.n.Body,null,h.a.createElement(p.e,{description:h.a.createElement(p.d,{size:"xs",theme:"error",onClick:function(){t.visible=!0,t.duration=3e3,t.children="默认3秒自动关闭",e.setState({toast:t})}},"开启")},"错误提示"),h.a.createElement(p.e,{description:h.a.createElement(p.d,{size:"xs",theme:"success",onClick:function(){t.visible=!0,t.duration=3e3,t.children=h.a.createElement("div",{className:"box"},h.a.createElement(p.h,{className:"box-icon",type:"right-round-fill"}),h.a.createElement("div",{className:"box-text"},"预约成功")),e.setState({toast:t})}},"开启")},"成功提示"),h.a.createElement(p.e,{description:h.a.createElement(p.d,{size:"xs",onClick:function(){t.visible=!0,t.duration=1e4,t.children="指定10秒自动关闭",e.setState({toast:t})}},"开启")},"指定关闭时间"))),h.a.createElement(p.n,null,h.a.createElement(p.n.Header,{title:"加载中"}),h.a.createElement(p.n.Body,null,h.a.createElement(p.e,{description:h.a.createElement(p.d,{size:"xs",onClick:function(){return e.setState({loading:!0})}},"开启")},"Loading"))),h.a.createElement(p.A,this.state.toast),h.a.createElement(p.j,{visible:this.state.loading})),h.a.createElement(b.a,null))}}]),t}(E.Component));t.default=x},586:function(e,t){}});