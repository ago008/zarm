webpackJsonp([7],{332:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var a=t-e,l=Math.random();return e+Math.round(l*a)}Object.defineProperty(t,"__esModule",{value:!0});var u=a(347),o=l(u),r=a(86),c=l(r),f=a(87),s=l(f),d=a(88),i=l(d),m=a(89),h=l(m),g=a(90),p=l(g),v=a(5),E=l(v),S=a(348),y=l(S),_=a(351),k=l(_),D=a(349),P=l(D),L=a(350);a(695);var M={normal:0,pull:1,drop:2,loading:3,success:4,failure:5},R={normal:0,abort:1,loading:2,success:3,failure:4,complete:5},C=function(e){function t(e){(0,s.default)(this,t);var a=(0,h.default)(this,(t.__proto__||(0,c.default)(t)).call(this,e));return a.fetchData=function(e){a.setState((0,o.default)({},""+e,M.loading)),setTimeout(function(){if(a.mounted){for(var t=[],l=t.length,n=l;n<l+20;n++)t.push(E.default.createElement(L.Cell,{key:+n},"第 ",n+1," 行"));a.setState((0,o.default)({dataSource:t},""+e,M.success))}},2e3)},a.loadData=function(){a.setState({customLoading:R.loading}),setTimeout(function(){if(a.mounted){var e=n(0,5),t=a.state.dataSource,l=R.success;if(console.log("状态: "+(0===e?"失败":1===e?"完成":"成功")),0===e)l=R.failure;else if(1===e)l=R.complete;else for(var u=t.length,o=u;o<u+5;o++)t.push(E.default.createElement(L.Cell,{key:+o},"第 ",o+1," 行"));a.setState({dataSource:t,customLoading:l})}},2e3)},a.mounted=!0,a.state={customRefreshing:M.normal,customLoading:R.normal,dataSource:[]},a}return(0,p.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.fetchData("customRefreshing")}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){for(var e=this,t=this.state,a=t.customRefreshing,l=t.customLoading,n=t.dataSource,u=[],o=0;o<3;o++)u.push(E.default.createElement(L.Cell,{key:+o},"第 ",o+1," 行"));return E.default.createElement(y.default,{className:"pull-page"},E.default.createElement(k.default,{title:"上拉加载下拉刷新 Pull"}),E.default.createElement("main",null,E.default.createElement(L.Panel,null,E.default.createElement(L.Panel.Header,{title:"基本"}),E.default.createElement(L.Panel.Body,null,E.default.createElement(L.Pull,{refreshing:a,loading:l,onRefresh:function(){e.fetchData("customRefreshing")},onLoad:this.loadData},n)))),E.default.createElement(P.default,null))}}]),t}(v.Component);t.default=C,e.exports=t.default},695:function(e,t){}});