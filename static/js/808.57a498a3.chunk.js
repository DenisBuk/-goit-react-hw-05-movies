"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[808],{808:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var r=n(439),a=n(791),c=n(689),u=n(237),i="CreditMovie_item__4j8Mx",o="CreditMovie_img__CLvRi",s="CreditMovie_imgNotFound__jBtxZ",p=n(184),f=function(){var t=(0,a.useState)(null),e=(0,r.Z)(t,2),n=e[0],f=e[1],d=(0,c.UO)().movieId;if((0,a.useEffect)((function(){u.zv(d).then((function(t){return f(t)})).catch(console.log)}),[d]),n)return(0,p.jsx)(p.Fragment,{children:n.lenght>0?(0,p.jsx)("ul",{children:n.slice(0,19).map((function(t){var e=t.id,n=t.name,r=t.character,a=t.profile_path;return(0,p.jsxs)("li",{className:i,children:[a?(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(a),alt:n,className:o,width:"100"}):(0,p.jsx)("div",{className:s,children:"Image not found"}),(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{children:(0,p.jsx)("b",{children:n})}),(0,p.jsxs)("p",{children:["Character: ",(0,p.jsx)("b",{children:r})]})]})]},e)}))}):(0,p.jsx)("div",{children:"No credits"})})}},237:function(t,e,n){n.d(e,{Pg:function(){return f},rj:function(){return s},t_:function(){return p},tx:function(){return l},zv:function(){return d}});var r=n(861),a=n(757),c=n.n(a),u=n(912),i="8f097ac1772f5d24a794202a251ed2ca",o="https://api.themoviedb.org/3/",s=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"/trending/all/day?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"search/movie?api_key=").concat(i,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"movie/").concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data.credits);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=808.57a498a3.chunk.js.map