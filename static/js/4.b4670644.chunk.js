(this.webpackJsonpheury=this.webpackJsonpheury||[]).push([[4],{114:function(e,n,t){"use strict";t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return s}));var c=t(21),i=function(e){return(e.match(/[A-Z]+(?![a-z])|[A-Z]?[a-z]+|\d+/g)||[e]).join(" ")},a=function(e){return e.charAt(0).toUpperCase()+e.slice(1).toLocaleLowerCase()},s=function(e){return c.d[parseInt(e.split(" ")[0])-1]}},116:function(e,n,t){e.exports={container:"DocumentView_container__2ZlFD",title:"DocumentView_title__28jlW",main:"DocumentView_main__2_ANU",card:"DocumentView_card__3qeuX",under:"DocumentView_under__yLnVf",observation:"DocumentView_observation__2tWsC",recommendation:"DocumentView_recommendation__hAAh4","heuristic-container":"DocumentView_heuristic-container__2uhID",image:"DocumentView_image__31kT9","evidence-img":"DocumentView_evidence-img__3d_sQ"}},117:function(e,n,t){e.exports={area:"DocumentArea_area__3xlM3"}},118:function(e,n,t){e.exports={container:"EmptyDocument_container__3PPNi","info-area":"EmptyDocument_info-area__3BO7R",info:"EmptyDocument_info__1XXzQ",link:"EmptyDocument_link__1RiOd"}},126:function(e,n,t){"use strict";t.r(n);var c=t(1),i=t(116),a=t.n(i),s=t(114),r=t(2),o=function(e){var n=e.observationData,t=e.index,c=n.notes,i=n.heuristics,o=n.severity,d=n.evidence,j=n.recommendations;return Object(r.jsxs)("div",{className:a.a.container,children:[Object(r.jsxs)("div",{className:a.a.title,children:[Object(r.jsx)("h1",{children:t+1}),Object(r.jsx)("span",{style:{backgroundColor:Object(s.b)(o),color:"2 Middle"===o?"#1F1D2C":"#FAFAFE"},children:o})]}),Object(r.jsxs)("div",{className:a.a.main,children:[Object(r.jsxs)("div",{className:a.a.card,children:[Object(r.jsx)("h1",{children:"Evidence"}),d&&Object(r.jsx)("img",{src:d,alt:"evidence",className:a.a.image})]}),Object(r.jsxs)("div",{className:a.a.under,children:[Object(r.jsxs)("div",{className:a.a.observation,children:[Object(r.jsxs)("div",{className:a.a.card,children:[Object(r.jsx)("h1",{children:"Notes"}),Object(r.jsx)("p",{children:c})]}),Object(r.jsxs)("div",{className:a.a.card,children:[Object(r.jsx)("h1",{children:"Heuristics"}),Object(r.jsx)("ul",{className:a.a["heuristic-container"],children:i.map((function(e){return Object(r.jsx)("li",{children:Object(s.a)(e)},Math.random())}))})]})]}),Object(r.jsxs)("div",{className:[a.a.card,a.a.recommendation].join(" "),children:[Object(r.jsx)("h1",{children:"Recommendation"}),Object(r.jsx)("p",{children:j})]})]})]})]})},d=t(117),j=t.n(d),l=t(46),m=t(118),u=t.n(m),h=t.p+"static/media/frameEmpty.46ee8a1d.svg",b=(t(88),t(26)),_=function(){return Object(r.jsx)("div",{className:u.a.container,children:Object(r.jsxs)("div",{className:u.a["info-area"],children:[Object(r.jsx)("img",{src:h,alt:""}),Object(r.jsxs)("div",{className:u.a.info,children:[Object(r.jsx)("h1",{children:"Start by creating an observation"}),Object(r.jsxs)("p",{children:["You can create an observation in the table view, by pressing the button ",Object(r.jsx)("span",{children:"New Observation"})," and then adding the info in the form"]}),Object(r.jsxs)(b.b,{className:u.a.link,to:"/project/table",children:[Object(r.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{d:"M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0L14 0C14.5304 0 15.0391 0.210714 15.4142 0.585786C15.7893 0.960859 16 1.46957 16 2V14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H2C1.46957 16 0.960859 15.7893 0.585786 15.4142C0.210714 15.0391 0 14.5304 0 14V2ZM15 4H11V7H15V4ZM15 8H11V11H15V8ZM15 12H11V15H14C14.2652 15 14.5196 14.8946 14.7071 14.7071C14.8946 14.5196 15 14.2652 15 14V12ZM10 15V12H6V15H10ZM5 15V12H1V14C1 14.2652 1.10536 14.5196 1.29289 14.7071C1.48043 14.8946 1.73478 15 2 15H5ZM1 11H5V8H1V11ZM1 7H5V4H1V7ZM6 4V7H10V4H6ZM10 8H6V11H10V8Z",fill:"#7F828F"})}),Object(r.jsx)("span",{children:"Table"})]})]})]})})};n.default=function(){var e=Object(c.useContext)(l.a).observationArray;return Object(r.jsxs)("div",{className:j.a.area,children:[0===e.length&&Object(r.jsx)(_,{}),e.map((function(e,n){return Object(r.jsx)(o,{observationData:e,index:n},e.id)}))]})}}}]);
//# sourceMappingURL=4.b4670644.chunk.js.map