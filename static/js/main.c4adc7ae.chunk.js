(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(2),i=n(3),s=n(5),r=n(4),l=n(1),u=(n(12),n(0)),d=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={today:(new Date).toUTCString().slice(-12,-4)},e.timerId=0,e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){var t=(new Date).toUTCString().slice(-12,-4);e.setState({today:t}),console.info(t)}),1e3)}},{key:"componentDidUpdate",value:function(e){this.props.name!==e.name&&console.debug("Renamed from ".concat(e.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:this.props.name})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:this.state.today})]})}}]),n}(l.Component);function h(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var m=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={hasClock:!0,clockName:"Clock-0"},e.timerId=0,e.handleLeftMouseClick=function(){e.setState({hasClock:!0})},e.handleRightMouseClick=function(t){t.preventDefault(),e.setState({hasClock:!1})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("contextmenu",this.handleRightMouseClick),document.addEventListener("click",this.handleLeftMouseClick),this.timerId=window.setInterval((function(){e.setState({clockName:h()})}),3300)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("contextmenu",this.handleRightMouseClick),document.removeEventListener("click",this.handleLeftMouseClick),window.clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state,t=e.hasClock,n=e.clockName;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),t&&Object(u.jsx)(d,{name:n})]})}}]),n}(l.Component);a.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.c4adc7ae.chunk.js.map