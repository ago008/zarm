webpackJsonp([8],{341:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(86),n=l(r),s=a(87),u=l(s),c=a(88),f=l(c),i=a(89),d=l(i),m=a(90),o=l(m),p=a(5),h=l(p),v=a(348),E=l(v),g=a(351),N=l(g),_=a(349),b=l(_),P=a(350);a(704);var y=function(e){function t(e){(0,u.default)(this,t);var a=(0,d.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.state={percent:10,theme:"primary"},a}return(0,o.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this;return h.default.createElement(E.default,{className:"progress-page"},h.default.createElement(N.default,{title:"进度条 Progress"}),h.default.createElement("main",null,h.default.createElement("div",{className:"progress"},h.default.createElement(P.Progress,{percent:this.state.percent,theme:this.state.theme},this.state.percent,"%")),h.default.createElement("div",{className:"progress"},h.default.createElement(P.Progress,{shape:"circle",percent:this.state.percent,theme:this.state.theme},h.default.createElement("div",{className:"progress-content"},h.default.createElement("span",{className:"progress-text"},this.state.percent),h.default.createElement("span",{className:"progress-percent"},"%")))),h.default.createElement(P.Panel,null,h.default.createElement(P.Panel.Body,null,h.default.createElement(P.Cell,{title:"进度"},h.default.createElement(P.Stepper,{shape:"radius",step:10,min:0,max:100,value:this.state.percent,onChange:function(t){isNaN(t)||e.setState({percent:t})}})),h.default.createElement(P.Cell,{title:"主题"},h.default.createElement(P.Picker,{value:this.state.theme,dataSource:[{value:"default",label:"default"},{value:"primary",label:"primary"},{value:"info",label:"info"},{value:"warning",label:"warning"},{value:"error",label:"error"}],onOk:function(t){e.setState({theme:t.value})}}))))),h.default.createElement(b.default,null))}}]),t}(p.Component);t.default=y,e.exports=t.default},704:function(e,t){}});