(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),l=n.n(r),c=n(2),s=n(3),u=n(5),i=n(4),d=(n(13),n(1)),h=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={isVisible:!1,goods:Object(d.a)(e.props.goods),wordLength:[1,2,3,4,5,6,7,8,9,10],selectedWordLength:1},e.handleStart=function(){e.setState({isVisible:!0})},e.handleReverse=function(){e.setState((function(e){var t=e.goods;return{goods:Object(d.a)(t).reverse()}}))},e.handleSortAlphabetically=function(){e.setState((function(e){var t=e.goods;return{goods:Object(d.a)(t).sort()}}))},e.handleSortByLength=function(){e.setState((function(e){var t=e.goods;return{goods:Object(d.a)(t).sort((function(e,t){return e.length-t.length}))}}))},e.handleReset=function(){e.setState({goods:Object(d.a)(e.props.goods)})},e.handleDefineLength=function(t){e.setState({selectedWordLength:t.target.value})},e.unpackList=function(){var t=e.state,n=t.wordLength,a=t.goods,r=t.selectedWordLength;return o.a.createElement(o.a.Fragment,null,o.a.createElement("ul",null,a.filter((function(e){return e.length>=r})).map((function(e){return o.a.createElement("li",{key:e},e)}))),o.a.createElement("button",{type:"button",onClick:e.handleReverse},"Reverse"),o.a.createElement("button",{type:"button",onClick:e.handleSortAlphabetically},"Sort Alphabetically"),o.a.createElement("button",{type:"button",onClick:e.handleSortByLength},"Sort by Length"),o.a.createElement("button",{type:"button",onClick:e.handleReset},"Reset"),o.a.createElement("select",{onChange:e.handleDefineLength},n.map((function(e,t){return o.a.createElement("option",{key:e},t+1)}))))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.isVisible;return o.a.createElement(o.a.Fragment,null,!e&&o.a.createElement("button",{type:"button",onClick:this.handleStart},"Start"),e&&this.unpackList())}}]),n}(o.a.PureComponent),g=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],p=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Goods"),o.a.createElement(h,{goods:g}))}}]),n}(o.a.PureComponent);l.a.render(o.a.createElement(p,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.12e09c97.chunk.js.map