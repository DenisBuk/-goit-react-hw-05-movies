"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[579],{579:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var r=t(439),a=t(791),c=t(689),i=t(237),s=t(87),o=t(7),u=t.n(o),l="Addititonal_title__lKgN2",d="Addititonal_item__6bfSn",f="Addititonal_link__pKTnj",p=t(184),h=[{href:"credit",text:"Credit"},{href:"reviews",text:"Reviews"}];h.propTypes={location:u().shape({pathname:u().string.isRequired,search:u().string.isRequired,key:u().string.isRequired,hash:u().string,state:u().bool}).isRequired};var v=function(e){var n=e.location;return(0,p.jsxs)("div",{children:[(0,p.jsx)("h4",{className:l,children:"Addititonal information"}),(0,p.jsx)("ul",{children:h.map((function(e){var t=e.href,r=e.text;return(0,p.jsx)("li",{className:d,children:(0,p.jsx)(s.rU,{to:t,state:{from:n},className:f,children:r})},t)}))}),(0,p.jsx)("hr",{})]})},m="InfoMovie_cardFilm__VOC91",_="InfoMovie_title__7-N3R",x="InfoMovie_img__QfNMG",g="InfoMovie_score__KbE3a",j=function(e){var n=e.movie,t=n.title,r=n.name,a=n.overview,c=n.genres,i=n.release_date,s=n.first_air_date,o=n.poster_path,u=n.vote_average,l=Math.round(10*u),d=o?"https://image.tmdb.org/t/p/w500/".concat(o):"https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:m,children:[(0,p.jsx)("img",{src:d,alt:t||r,width:"200",className:x}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("h2",{className:_,children:[t||r," (",(s||i).slice(0,4),")"]}),(0,p.jsxs)("p",{className:g,children:["User Score: ",l,"%"]}),(0,p.jsx)("h3",{children:"Overview"}),(0,p.jsx)("p",{children:a}),(0,p.jsx)("h3",{children:"Genres"}),(0,p.jsx)("p",{children:c.map((function(e){return e.name})).join(", ")})]})]}),(0,p.jsx)("hr",{})]})},k=t(185),w="GoBackButton_container__prr-a",b="GoBackButton_link__5eNxG",y=function(e){var n=e.backLinkHref;return(0,p.jsx)("div",{className:w,children:(0,p.jsxs)(s.rU,{to:n,className:b,children:[(0,p.jsx)(k.i1r,{size:20}),"Go Back"]})})},N=t(2),Z=function(){var e,n,t=(0,a.useState)(null),s=(0,r.Z)(t,2),o=s[0],u=s[1],l=(0,c.UO)().movieId,d=null!==(e=null===(n=(0,c.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";if((0,a.useEffect)((function(){i.Pg(l).then((function(e){u(e)})).catch(console.log)}),[l]),o)return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(y,{backLinkHref:d}),(0,p.jsx)(j,{movie:o}),(0,p.jsx)(v,{location:d}),(0,p.jsx)(a.Suspense,{fallback:(0,p.jsx)(N.Z,{}),children:(0,p.jsx)(c.j3,{})})]})}},237:function(e,n,t){t.d(n,{Pg:function(){return d},rj:function(){return u},t_:function(){return l},tx:function(){return p},zv:function(){return f}});var r=t(861),a=t(757),c=t.n(a),i=t(912),s="8f097ac1772f5d24a794202a251ed2ca",o="https://api.themoviedb.org/3/",u=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(o,"/trending/all/day?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(o,"search/movie?api_key=").concat(s,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(o,"movie/").concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(o,"movie/").concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.credits);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(o,"movie/").concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=579.1605eeae.chunk.js.map