(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],[,,,,,,,,,,,,,function(e,n,c){},function(e,n,c){},,function(e,n,c){},function(e,n,c){},function(e,n,c){},function(e,n,c){},function(e,n,c){"use strict";c.r(n);var r=c(1),t=c.n(r),a=c(7),o=c.n(a),i=(c(13),c(8)),s=c(2),l=(c(14),c(0)),h=function(){return Object(l.jsx)("header",{children:"MEMO GAME for The Odin Project"})},d=(c(16),function(e){return Object(l.jsxs)("div",{className:"scoreboard",children:[Object(l.jsxs)("div",{children:["Current score: ",e.currentScore]}),Object(l.jsxs)("div",{children:["High score: ",e.highScore]})]})}),j=(c(17),[{name:"Red",hex:"#e6194B"},{name:"Green",hex:"#3cb44b"},{name:"Yellow",hex:"#ffe119"},{name:"Blue",hex:"#4363d8"},{name:"Orange",hex:"#f58231"},{name:"Purple",hex:"#911eb4"},{name:"Cyan",hex:"#42d4f4"},{name:"Magenta",hex:"#f032e6"},{name:"Lime",hex:"#bfef45"},{name:"Pink",hex:"#fabed4"},{name:"Teal",hex:"#469990"},{name:"Lavender",hex:"#dcbeff"},{name:"Brown",hex:"#9A6324"},{name:"Beige",hex:"#fffac8"},{name:"Maroon",hex:"#800000"},{name:"Mint",hex:"#aaffc3"},{name:"Olive",hex:"#808000"},{name:"Apricot",hex:"#ffd8b1"},{name:"Navy",hex:"#000075"},{name:"Black",hex:"#000000"}]),u=function(){for(var e=[].concat(j),n=e.length-1;n>0;n--){var c=Math.floor(Math.random()*(n+1)),r=[e[c],e[n]];e[n]=r[0],e[c]=r[1]}return e.slice(0,10)},x=(c(18),c(19),c(6)),b=c.n(x),f=function(e){return Object(l.jsx)("div",{onClick:e.handleClick,className:"card",style:{boxShadow:"0 0 7px 5px ".concat(e.colors.hex),backgroundColor:"".concat(e.colors.hex),border:"3px solid ".concat(b()(e.colors.hex))},children:Object(l.jsx)("p",{style:{color:"".concat(b()(e.colors.hex))},children:e.colors.name})})},m=c(22),O=function(e){var n=e.arrayOfColours.map((function(n){return Object(l.jsx)(f,{handleClick:e.handleClick,colors:n},Object(m.a)())}));return Object(l.jsx)("div",{className:"colors-grid",children:n})},g=function(e){return Object(l.jsx)("button",{onClick:e.handleTryAgain,children:"Try again"})},p=function(){var e=Object(r.useState)(u()),n=Object(s.a)(e,2),c=n[0],t=n[1],a=Object(r.useState)(0),o=Object(s.a)(a,2),j=o[0],x=o[1],b=Object(r.useState)(0),f=Object(s.a)(b,2),m=f[0],p=f[1],v=Object(r.useState)([]),y=Object(s.a)(v,2),C=y[0],k=y[1],S=Object(r.useState)(!1),M=Object(s.a)(S,2),T=M[0],w=M[1];console.log("App component rendered..."),j>m&&p(j);var A=T||15===j?Object(l.jsxs)("div",{className:"result",children:[Object(l.jsxs)("p",{children:["You ",15===j?"won":"lost",". Try again!"]}),Object(l.jsx)(g,{handleTryAgain:function(){k([]),x(0),w(!1)}})]}):Object(l.jsx)(O,{handleClick:function(e){var n=e.target.firstChild.innerText;C.includes(n)?w(!0):(x((function(e){return e+1})),k((function(e){return[].concat(Object(i.a)(e),[n])})),t(u()))},arrayOfColours:c});return Object(l.jsxs)("main",{children:[Object(l.jsx)(h,{}),Object(l.jsx)(d,{currentScore:j,highScore:m}),A]})};o.a.render(Object(l.jsx)(t.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.c817cbf7.chunk.js.map