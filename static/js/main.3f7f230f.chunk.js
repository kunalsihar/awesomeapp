(this.webpackJsonpawesomeapp=this.webpackJsonpawesomeapp||[]).push([[0],{151:function(e,t,n){},454:function(e,t,n){"use strict";n.r(t);var c=n(3),s=n(1),a=n(36),j=n.n(a),o=(n(151),n(143)),r=n(53),i=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("img",{src:"https://picsum.photos/70/50",alt:"logo"})," ",Object(c.jsx)("h1",{children:'  " Keep Notes "'})]})})},l=(n(152),function(){var e=(new Date).getFullYear();return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("footer",{children:[Object(c.jsxs)("p",{children:["copyright \xa9 ",e]})," "]})})}),u=n(65),b=n(91),O=n(469),d=n(141),x=n.n(d),h=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),a=n[0],j=n[1],o=Object(s.useState)({title:"",content:""}),i=Object(r.a)(o,2),l=i[0],d=i[1],h=function(e){var t=e.target,n=t.name,c=t.value;d((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(u.a)({},n,c))}))};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"main",onDoubleClick:function(){j(!1)},children:Object(c.jsxs)("form",{children:[a?Object(c.jsx)("input",{type:"text",name:"title",value:l.title,onChange:h,placeholder:" Title",autoComplete:"off"}):null,Object(c.jsx)("textarea",{rows:"",column:"",name:"content",value:l.content,onChange:h,placeholder:"Write a note...",onClick:function(){j(!0)}}),a?Object(c.jsx)(O.a,{onClick:function(){e.passNote(l),d({title:"",content:""})},children:Object(c.jsx)(x.a,{className:"plus-sign"})}):null]})})})},m=n(142),p=n.n(m),f=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"note",children:[Object(c.jsx)("h1",{children:e.title}),Object(c.jsx)("br",{}),Object(c.jsx)("p",{children:e.content}),Object(c.jsxs)("button",{className:"btn",onClick:function(){e.deleteItem(e.id)},children:[" ",Object(c.jsx)(p.a,{className:"deleteIcon"})]})]})})},g=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],j=function(e){a((function(t){return t.filter((function(t,n){return n!==e}))}))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(i,{}),Object(c.jsx)(h,{passNote:function(e){a((function(t){return[].concat(Object(o.a)(t),[e])})),console.log(e)}}),Object(c.jsx)(f,{}),n.map((function(e,t){return Object(c.jsx)(f,{id:t,title:e.title,content:e.content,deleteItem:j},t)})),Object(c.jsx)(l,{})]})};j.a.render(Object(c.jsx)(g,{}),document.getElementById("root"))}},[[454,1,2]]]);
//# sourceMappingURL=main.3f7f230f.chunk.js.map