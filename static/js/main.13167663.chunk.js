(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var s=n(3),o=n.n(s),r=n(4),i=n(5),c=n(7),a=n(6),u=n(1),l=n.n(u),b=(n(12),n(0)),p=function(t){var e=t.goodsFromServer;return Object(b.jsx)("ul",{className:"list-group list",children:e.map((function(t){return Object(b.jsx)("li",{className:"list-group-item list-group-item-info",children:t},t)}))})},h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],d=function(t){Object(c.a)(n,t);var e=Object(a.a)(n);function n(){var t;Object(r.a)(this,n);for(var s=arguments.length,o=new Array(s),i=0;i<s;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={goods:[].concat(h),isVisible:!0},t.showGoodsList=function(){t.setState({isVisible:!1})},t.reverseList=function(){t.setState((function(t){return{goods:t.goods.map((function(t){return t})).reverse()}}))},t.sortAlphavet=function(){t.setState((function(t){return{goods:t.goods.map((function(t){return t})).sort((function(t,e){return t.localeCompare(e)}))}}))},t.sortByLength=function(){t.setState((function(t){return{goods:t.goods.map((function(t){return t})).sort((function(t,e){return t.length-e.length}))}}))},t.resetList=function(){t.setState({goods:[].concat(h)})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.goods,n=t.isVisible;return Object(b.jsx)("div",{className:"App",children:n?Object(b.jsx)("button",{type:"button",onClick:this.showGoodsList,className:"btn btn-success",children:"Start"}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{type:"button",onClick:this.reverseList,className:"btn btn-primary",children:"Reverse"}),Object(b.jsx)("button",{type:"button",onClick:this.sortAlphavet,className:"btn btn-primary",children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",onClick:this.resetList,className:"btn btn-primary",children:"Reset"}),Object(b.jsx)("button",{type:"button",onClick:this.sortByLength,className:"btn btn-primary",children:"Sort by length"}),Object(b.jsx)(p,{goodsFromServer:e})]})})}}]),n}(l.a.Component),m=d;o.a.render(Object(b.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.13167663.chunk.js.map