"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{8460:function(n,t,e){e.d(t,{Hx:function(){return h},Y5:function(){return p},bI:function(){return v},wr:function(){return s},xc:function(){return l}});var r=e(5861),a=e(7757),c=e.n(a),u=e(1243),i="597f9408c4003b5df23df8b028e83258";function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&query=").concat(t,"&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}u.Z.defaults.baseURL="https://api.themoviedb.org/3/"},9779:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,a,c,u=e(5861),i=e(9439),s=e(7757),o=e.n(s),p=e(7689),f=e(2791),l=e(8460),d=e(168),h=e(6444),x=h.ZP.ul(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),v=h.ZP.p(a||(a=(0,d.Z)(["\n  display: block;\n  text-align: center;\n"]))),m=h.ZP.li(c||(c=(0,d.Z)(["\n  padding: 20px;\n  background-color: rgb(243 129 7);\n  color: white;\n  border-radius: 4px;\n  & + & {\n    margin-top: 20px;\n  }\n  p + p {\n    margin-top: 8px;\n  }\n"]))),y=e(184),k=function(){var n=(0,p.UO)().movieId,t=(0,f.useState)([]),e=(0,i.Z)(t,2),r=e[0],a=e[1];return(0,f.useEffect)((function(){function t(){return(t=(0,u.Z)(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,l.Hx)(n);case 3:e=t.sent,a(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n]),(0,y.jsx)(y.Fragment,{children:(0,y.jsx)("div",{children:(0,y.jsx)(x,{children:0===r.length?(0,y.jsx)(v,{children:"We don't have any reviews for this movie."}):r.map((function(n){return(0,y.jsxs)(m,{children:[(0,y.jsxs)(v,{children:["Author: ",n.author]}),(0,y.jsxs)("p",{children:[" ",n.content]})]},n.id)}))})})})}}}]);
//# sourceMappingURL=779.12720b5b.chunk.js.map