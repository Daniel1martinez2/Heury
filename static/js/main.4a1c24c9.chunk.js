(this.webpackJsonpheury=this.webpackJsonpheury||[]).push([[0],{109:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(89),a=n.n(s),r=(n(88),n(64)),o=n.n(r),l=n.p+"static/media/plus.5a82668c.svg",j=n(13),u=n(26),d=n(65),b=n.n(d),h=n(2),x=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)("Untitled"),a=Object(j.a)(s,2),r=a[0],o=a[1],l=Object(c.useRef)(null);return Object(h.jsxs)("div",{className:b.a["page-header__project"],children:[Object(h.jsxs)(u.b,{to:"/",children:[Object(h.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("path",{d:"M10 3.20399V12.796L4.519 7.99999L10 3.20399ZM9.341 2.45099L3.861 7.24699C3.75359 7.34085 3.6675 7.4566 3.60852 7.58648C3.54954 7.71636 3.51902 7.85735 3.51902 7.99999C3.51902 8.14263 3.54954 8.28362 3.60852 8.4135C3.6675 8.54337 3.75359 8.65913 3.861 8.75299L9.34 13.549C9.989 14.115 11 13.655 11 12.796V3.20399C11.0002 3.01174 10.9449 2.82353 10.8409 2.66188C10.7368 2.50023 10.5884 2.372 10.4133 2.29254C10.2383 2.21308 10.044 2.18577 9.85382 2.21387C9.66364 2.24197 9.48559 2.3243 9.341 2.45099Z",fill:"#FAFAFE"})}),Object(h.jsx)("h1",{children:"All Reports "})]}),Object(h.jsx)("h1",{children:"/"}),Object(h.jsxs)("div",{className:b.a.container,children:[Object(h.jsx)("div",{onDoubleClick:function(){i(!0),function(){var e;l&&l.current&&(null===l||void 0===l||null===(e=l.current)||void 0===e||e.focus())}()},className:"".concat(b.a.clickable," ").concat(n&&b.a.hidden)}),Object(h.jsx)("input",{onBlur:function(){i(!1),0===r.trim().length&&o("Untitled")},ref:l,onChange:function(e){o(e.target.value)},type:"text",autoComplete:"off",value:r})]})]})},p=n(46),m=n(93),f=n.n(m),O=function(e){var t=e.imgSource,n=e.className;return Object(h.jsx)("img",{className:"".concat(n," ").concat(f.a["img-profile"]),src:t,alt:"profile"})},v=n(66),_=n.n(v),g=n(113),w=n(21),C=n(112),M=n(111),N=n(90),y=n(9),H=n.n(y),U=n(77),V=n.n(U),F=function(e){var t=e.data,n=e.type,i=e.onClick,s=t.role,a=t.profileImg,r=t.name,o=Object(c.useState)(s),l=Object(j.a)(o,2),u=l[0],d=l[1],b=function(){return"owner"!==s};return Object(h.jsxs)("div",{className:V.a["user-project-list-item"],onMouseOver:function(){return b()?d("Remove"):null},onMouseLeave:function(){return b()?d(s):null},children:[Object(h.jsxs)("div",{className:V.a["user-info"],children:[Object(h.jsx)(O,{imgSource:a||""}),Object(h.jsx)("h1",{children:r})]}),"list"===n&&Object(h.jsx)("span",{className:b()?V.a.active:"",onClick:function(){return b()&&i?i(t.id):null},children:u})]})},I=function(e){var t=e.usersArray,n=e.setView,c=e.onDelete;return Object(h.jsxs)(M.a.div,{className:H.a["list-container"],variants:w.a,initial:"hidden",animate:"visible",exit:"exit",children:[Object(h.jsx)("div",{className:H.a.list,children:t.map((function(e){return Object(h.jsx)(F,{onClick:c,type:"list",data:e},e.id)}))}),Object(h.jsx)("button",{className:"reset-btn ".concat(H.a.btn),onClick:function(){return n("inviteUsers")},children:"Invite Evaluators"})]})},P=function(e){var t=e.rightBtnValue,n=e.cancelFunction,c=e.rightBtnFunction;return Object(h.jsxs)("div",{className:H.a["btn-container"],children:[Object(h.jsx)("button",{onClick:n,className:"reset-btn ".concat(H.a.cancel),children:"Cancel"}),Object(h.jsx)("button",{onClick:c,className:"reset-btn ".concat(H.a.add," ").concat(H.a.active),children:t})]})},A=function(e){var t=e.setView,n=e.deleteUser,i=Object(c.useContext)(p.a).deleteProjectUsers;return Object(h.jsx)(C.a,{children:Object(h.jsxs)(M.a.div,{className:H.a["data-container"],variants:w.a,initial:"hidden",animate:"visible",exit:"exit",children:[Object(h.jsx)("h1",{children:"Removing Evaluator"}),Object(h.jsxs)("p",{className:H.a.message,children:["Are you sure you want to remove ",Object(h.jsx)("span",{children:n.name})," from this project? "]}),Object(h.jsx)(P,{rightBtnValue:"Remove",cancelFunction:function(){return t("projectUsersList")},rightBtnFunction:function(){i(n.id),t("projectUsersList")}})]})})},k=function(e){var t=e.searchUser,n=e.usersArray,c=e.setSearchUser,i=e.setView;return Object(h.jsxs)(M.a.div,{className:H.a["data-container"],variants:w.a,initial:"hidden",animate:"visible",exit:"exit",children:[Object(h.jsx)("h1",{children:"Invite Evaluators To This Project"}),Object(h.jsxs)("div",{className:H.a["actions-container"],children:[Object(h.jsx)("input",{value:t,onChange:function(e){c(e.target.value),console.log(e.target.value)},placeholder:"user@mail.com",className:H.a.input,type:"text"}),function(){if(""!==t.trim())return Object(h.jsx)(M.a.div,{className:H.a["recommend-users-container"],variants:w.a,initial:"hidden",animate:"visible",exit:"exit",children:Object(h.jsx)(F,{type:"search",data:n[0]})})}(),!1]}),Object(h.jsx)(P,{rightBtnValue:"Invite Evaluators",cancelFunction:function(){c(""),i("projectUsersList")},rightBtnFunction:function(){return null}})]})},Z=n(94),S=n.n(Z),D=function(e){e.classes;return Object(h.jsxs)(M.a.div,{className:S.a["user-actions-container"],variants:w.a,initial:"hidden",animate:"visible",exit:"exit",children:[Object(h.jsx)("button",{className:"reset-btn",children:"Settings"}),Object(h.jsx)("button",{className:"reset-btn",children:"Sign Out"})]})},B=function(e){var t=e.setModalVisible,n=e.usersArray,i=e.type,s=Object(N.a)(t),a=Object(c.useState)("projectUsersList"),r=Object(j.a)(a,2),o=r[0],l=r[1],u=Object(c.useState)(""),d=Object(j.a)(u,2),b=d[0],x=d[1],p=Object(c.useState)(),m=Object(j.a)(p,2),f=m[0],O=m[1],v=function(e){l("deleteUser"),O(n.find((function(t){return t.id===e})))};return Object(h.jsx)(C.a,{children:Object(h.jsx)(M.a.div,{className:H.a["project-users-info"],ref:s,variants:w.f,initial:"hidden",animate:"visible",exit:"exit",children:Object(h.jsx)(M.a.div,{layout:!0,className:H.a["view-container"],children:Object(h.jsx)(g.a,{children:function(){switch(i){case"home":return Object(h.jsx)(D,{});case"project":return function(){switch(o){case"projectUsersList":return Object(h.jsx)(I,{onDelete:v,usersArray:n,setView:l});case"inviteUsers":return Object(h.jsx)(k,{searchUser:b,usersArray:n,setSearchUser:x,setView:l});case"deleteUser":if(f)return Object(h.jsx)(A,{setView:l,deleteUser:f})}}()}}()})})})})},J=function(e){var t=e.type,n=Object(c.useState)(!1),i=Object(j.a)(n,2),s=i[0],a=i[1],r=Object(c.useContext)(p.a),o=r.projectUsers,l=r.user;return Object(h.jsxs)("div",{className:_.a.container,children:[Object(h.jsx)("div",{className:_.a["container-main"],onClick:function(){return a(!0)},children:function(){switch(t){case"project":return Object(h.jsxs)(c.Fragment,{children:[1!==o.length&&Object(h.jsxs)("span",{children:["+",o.length-1]}),Object(h.jsx)(O,{className:_.a["main-pp"],imgSource:l.profileImg?l.profileImg:""})]});case"home":return Object(h.jsxs)(c.Fragment,{children:[Object(h.jsx)("span",{children:l.name}),Object(h.jsx)(O,{className:_.a["main-pp"],imgSource:l.profileImg?l.profileImg:""})]})}}()}),Object(h.jsx)(g.a,{initial:!1,exitBeforeEnter:!0,children:s&&Object(h.jsx)(B,{type:t,usersArray:o,setModalVisible:a})})]})},z=n(7),L=n(39),E=n.n(L),R=function(){var e=Object(z.e)().projectId;return Object(h.jsxs)("nav",{className:E.a["page-header__nav"],children:[Object(h.jsxs)(u.c,{to:"/project/".concat(e,"/table"),activeClassName:E.a.active,className:"".concat(E.a.table),children:[Object(h.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("path",{d:"M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0L14 0C14.5304 0 15.0391 0.210714 15.4142 0.585786C15.7893 0.960859 16 1.46957 16 2V14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H2C1.46957 16 0.960859 15.7893 0.585786 15.4142C0.210714 15.0391 0 14.5304 0 14V2ZM15 4H11V7H15V4ZM15 8H11V11H15V8ZM15 12H11V15H14C14.2652 15 14.5196 14.8946 14.7071 14.7071C14.8946 14.5196 15 14.2652 15 14V12ZM10 15V12H6V15H10ZM5 15V12H1V14C1 14.2652 1.10536 14.5196 1.29289 14.7071C1.48043 14.8946 1.73478 15 2 15H5ZM1 11H5V8H1V11ZM1 7H5V4H1V7ZM6 4V7H10V4H6ZM10 8H6V11H10V8Z",fill:"#7F828F"})}),Object(h.jsx)("h1",{children:"Table"})]}),Object(h.jsxs)(u.c,{to:"/project/".concat(e,"/document"),activeClassName:E.a.active,className:E.a.document,children:[Object(h.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("path",{d:"M14 4.5V14C14 14.5304 13.7893 15.0391 13.4142 15.4142C13.0391 15.7893 12.5304 16 12 16H4C3.46957 16 2.96086 15.7893 2.58579 15.4142C2.21071 15.0391 2 14.5304 2 14V2C2 1.46957 2.21071 0.960859 2.58579 0.585786C2.96086 0.210714 3.46957 0 4 0L9.5 0L14 4.5ZM11 4.5C10.6022 4.5 10.2206 4.34196 9.93934 4.06066C9.65804 3.77936 9.5 3.39782 9.5 3V1H4C3.73478 1 3.48043 1.10536 3.29289 1.29289C3.10536 1.48043 3 1.73478 3 2V14C3 14.2652 3.10536 14.5196 3.29289 14.7071C3.48043 14.8946 3.73478 15 4 15H12C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8946 14.5196 13 14.2652 13 14V4.5H11Z",fill:"#7F828F"})}),Object(h.jsx)("h1",{children:"Document"})]}),Object(h.jsxs)(u.c,{to:"/project/".concat(e,"/statistics"),activeClassName:E.a.active,className:E.a.graph,children:[Object(h.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("path",{d:"M1 11C1 10.7348 1.10536 10.4804 1.29289 10.2929C1.48043 10.1054 1.73478 10 2 10H4C4.26522 10 4.51957 10.1054 4.70711 10.2929C4.89464 10.4804 5 10.7348 5 11V14C5 14.2652 4.89464 14.5196 4.70711 14.7071C4.51957 14.8946 4.26522 15 4 15H2C1.73478 15 1.48043 14.8946 1.29289 14.7071C1.10536 14.5196 1 14.2652 1 14V11ZM6 7C6 6.73478 6.10536 6.48043 6.29289 6.29289C6.48043 6.10536 6.73478 6 7 6H9C9.26522 6 9.51957 6.10536 9.70711 6.29289C9.89464 6.48043 10 6.73478 10 7V14C10 14.2652 9.89464 14.5196 9.70711 14.7071C9.51957 14.8946 9.26522 15 9 15H7C6.73478 15 6.48043 14.8946 6.29289 14.7071C6.10536 14.5196 6 14.2652 6 14V7ZM11 2C11 1.73478 11.1054 1.48043 11.2929 1.29289C11.4804 1.10536 11.7348 1 12 1H14C14.2652 1 14.5196 1.10536 14.7071 1.29289C14.8946 1.48043 15 1.73478 15 2V14C15 14.2652 14.8946 14.5196 14.7071 14.7071C14.5196 14.8946 14.2652 15 14 15H12C11.7348 15 11.4804 14.8946 11.2929 14.7071C11.1054 14.5196 11 14.2652 11 14V2Z",fill:"#7F828F"})}),Object(h.jsx)("h1",{children:"Statistics"})]})]})},T=function(e){var t=e.type;return Object(h.jsx)("div",{className:o.a["page-header"],children:function(){switch(t){case"project":return Object(h.jsxs)(c.Fragment,{children:[Object(h.jsx)(x,{}),Object(h.jsx)(R,{}),Object(h.jsx)(J,{type:"project"})]});case"home":return Object(h.jsxs)(c.Fragment,{children:[Object(h.jsx)("h1",{className:o.a.logo,children:"Heury"}),Object(h.jsxs)("div",{className:o.a["right-content"],children:[Object(h.jsxs)("button",{className:"reset-btn ".concat(o.a.button),children:[Object(h.jsx)("img",{src:l,alt:"sss"}),"New Report"]}),Object(h.jsx)(J,{type:"home"})]})]})}}()})},Y=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,126))})),X=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,125))}));function W(){var e=Object(z.e)().projectId;return Object(h.jsxs)(c.Fragment,{children:[Object(h.jsx)(c.Suspense,{fallback:Object(h.jsx)("h1",{children:"loading \ud83d\udd25"}),children:Object(h.jsx)(z.a,{path:"/project/".concat(e,"/table"),children:Object(h.jsx)(X,{})})}),Object(h.jsx)(c.Suspense,{fallback:Object(h.jsx)("h1",{children:"loading \ud83d\udd25"}),children:Object(h.jsx)(z.a,{path:"/project/".concat(e,"/document"),children:Object(h.jsx)(Y,{})})})]})}var q=n(68),Q=n.n(q),G=n(86),K=n.n(G),$=function(){return Object(h.jsxs)(M.a.div,{whileHover:{scale:1.05},className:K.a["thumb-container"],children:[Object(h.jsx)(u.b,{to:"/project/alooooo/table",children:Object(h.jsx)("img",{src:"https://cdn.dribbble.com/users/584216/screenshots/16446283/media/8102a68338fc86f7f229af5238bd9d2d.jpg?compress=1&resize=400x300",alt:"si"})}),Object(h.jsx)("div",{className:K.a["title-container"],children:Object(h.jsx)("span",{children:"Monday 2021 report"})})]})},ee=function(){return Object(h.jsxs)("div",{className:Q.a.app,children:[Object(h.jsxs)(z.a,{path:"/project/:projectId",children:[Object(h.jsx)(T,{type:"project"}),Object(h.jsx)(W,{})]}),Object(h.jsxs)(z.a,{path:"/",exact:!0,children:[Object(h.jsx)(T,{type:"home"}),Object(h.jsxs)("div",{className:Q.a["projects-container"],children:[Object(h.jsxs)("div",{className:Q.a["projects-title"],children:[Object(h.jsx)("h1",{children:"All Reports"}),Object(h.jsx)("span",{children:"(1)"})]}),Object(h.jsxs)("div",{className:Q.a["thumb-container"],children:[Object(h.jsx)($,{}),Object(h.jsx)($,{}),Object(h.jsx)($,{}),Object(h.jsx)($,{}),Object(h.jsx)($,{}),Object(h.jsx)($,{}),Object(h.jsx)($,{})]})]})]})]})},te=n(56),ne=n(55),ce=function(e){var t=Object(c.useState)({heuristic:"",severity:""}),n=Object(j.a)(t,2),i=n[0],s=n[1],a=Object(c.useState)([]),r=Object(j.a)(a,2),o=r[0],l=r[1],u=Object(c.useState)(w.g),d=Object(j.a)(u,2),b=d[0],x=d[1],m=Object(c.useState)([]),f=Object(j.a)(m,2),O=(f[0],f[1],{user:{name:"Daniel",id:"asdsad",profileImg:"https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9iMDVhNWNjMDY1M2FiNDNjNzU0NjY1ZmQxOWNmNzU3MT9zaXplPTEwMCZkZWZhdWx0PXJldHJvIn0.AUtQ0KIK-lJbX9MAPyq_8rTlkO4_CiuhTGbmyvuJJ40"},userProjects:[],filterData:i,observationArray:o,deleteObservation:function(e){l(Object(ne.a)(o).filter((function(t){return t.id!==e})))},editObservation:function(e){var t=e.newObservation,n=e.id,c=o.findIndex((function(e){return e.id===n})),i=Object(ne.a)(o);i[c]=Object(te.a)({},t),l(i)},createObservation:function(e){l((function(t){return[].concat(Object(ne.a)(t),[e])}))},setHeuristicFilter:function(e){s((function(t){return Object(te.a)(Object(te.a)({},t),{},{heuristic:e.target.value})}))},setSeverityFilter:function(e){s((function(t){return Object(te.a)(Object(te.a)({},t),{},{severity:e.target.value})}))},projectUsers:b,deleteProjectUsers:function(e){x(Object(ne.a)(b).filter((function(t){return t.id!==e})))}});return Object(h.jsx)(p.a.Provider,{value:O,children:e.children})};var ie=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(ce,{children:Object(h.jsx)(u.a,{children:Object(h.jsx)(ee,{})})})})};a.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(ie,{})}),document.getElementById("root"))},21:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"g",(function(){return a})),n.d(t,"f",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return l}));var c=["VisibilityOfSystemStatus","MatchBetweenSystemAndTheRealWorld","UserControlAndFreedom","ConsistencyAndStandards","ErrorPrevention","RecognitionRatherThanRecall","FlexibilityAndEfficiencyOfUse","AestheticAndMinimalistDesign","HelpRecognizeAndRecoverFromErrors","HelpAndDocumentation"],i=["1Minor","2Middle","3High","4Major"],s=["#33A2E0","#E0C433","#E09033","#E05D33"],a=[{role:"owner",profileImg:"https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9iMDVhNWNjMDY1M2FiNDNjNzU0NjY1ZmQxOWNmNzU3MT9zaXplPTEwMCZkZWZhdWx0PXJldHJvIn0.AUtQ0KIK-lJbX9MAPyq_8rTlkO4_CiuhTGbmyvuJJ40",name:"Daniel",id:"1"},{role:"collaborator",profileImg:"https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",name:"Nath",id:"2"},{role:"collaborator",profileImg:"https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",name:"Sofia Martinez Villegas",id:"3"},{role:"collaborator",profileImg:"https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",name:"Nadie",id:"4"},{role:"collaborator",profileImg:"https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",name:"AAAA",id:"5"},{role:"collaborator",profileImg:"https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",name:"EFE",id:"6"}],r={hidden:{x:"100%",opacity:0},visible:{x:0,opacity:1,transition:{duration:.3,type:"ease-in-out",damping:0,stiffness:0}},exit:{x:"100%",opacity:0,transition:{duration:.3,type:"ease-in-out",damping:0,stiffness:0}}},o={hidden:{y:"-100%",opacity:0},visible:{y:0,opacity:1,transition:{duration:.2,type:"ease-in",damping:0,stiffness:0}},exit:{y:"-100%",opacity:0,transition:{duration:.2,type:"ease-in",damping:0,stiffness:0}}},l={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.3,type:"ease-in-out",damping:0,stiffness:0}},exit:{opacity:0,transition:{duration:.3,type:"ease-in-out",damping:0,stiffness:0}}}},39:function(e,t,n){e.exports={"page-header__nav":"Visualization_page-header__nav__1FeMX",active:"Visualization_active__3-Nxq"}},46:function(e,t,n){"use strict";var c=n(1),i=n.n(c).a.createContext({user:{name:"",id:"",profileImg:""},userProjects:[],projectUsers:[],deleteProjectUsers:function(){},observationArray:[],filterData:{heuristic:"",severity:""},deleteObservation:function(){},editObservation:function(){},createObservation:function(){},setHeuristicFilter:function(){},setSeverityFilter:function(){}});t.a=i},64:function(e,t,n){e.exports={"page-header":"Header_page-header__3bkke","right-content":"Header_right-content__3GWk9",logo:"Header_logo__weVT7",button:"Header_button__1Swdy"}},65:function(e,t,n){e.exports={"page-header__project":"Nav_page-header__project__2rHUl",container:"Nav_container__iRa4l",clickable:"Nav_clickable__2AB6c",hidden:"Nav_hidden__21eIE"}},66:function(e,t,n){e.exports={container:"UserProject_container__j4Yle","main-pp":"UserProject_main-pp__3C9I5","container-main":"UserProject_container-main__3zLkx"}},68:function(e,t,n){e.exports={app:"Project_app__2xfiA","projects-container":"Project_projects-container__3Lx1v","thumb-container":"Project_thumb-container__1VqrD","projects-title":"Project_projects-title__2MQQn"}},77:function(e,t,n){e.exports={"user-project-list-item":"UserProjectListItem_user-project-list-item__X3M7d",active:"UserProjectListItem_active__1znkC","user-info":"UserProjectListItem_user-info__2vHWY"}},86:function(e,t,n){e.exports={"thumb-container":"ProjectThumb_thumb-container__B0Ik_","title-container":"ProjectThumb_title-container__1T91k"}},88:function(e,t,n){},9:function(e,t,n){e.exports={"project-users-info":"UsersProjectModal_project-users-info__2P3B1","list-container":"UsersProjectModal_list-container__21YAy",list:"UsersProjectModal_list__shqEq",btn:"UsersProjectModal_btn__BFaEm","view-container":"UsersProjectModal_view-container__2J2X7","data-container":"UsersProjectModal_data-container__1CHQx",message:"UsersProjectModal_message__1NYAD","btn-container":"UsersProjectModal_btn-container__W-15w","actions-container":"UsersProjectModal_actions-container__3uRzP",input:"UsersProjectModal_input__2KUGu",cancel:"UsersProjectModal_cancel__LT0X6",add:"UsersProjectModal_add__v94xi",active:"UsersProjectModal_active__24IGc","users-selected":"UsersProjectModal_users-selected__NxeLV","recommend-users-container":"UsersProjectModal_recommend-users-container__1bRXK"}},90:function(e,t,n){"use strict";var c=n(1);t.a=function(e){var t=Object(c.useRef)(null),n=Object(c.useCallback)((function(n){t&&t.current&&t.current&&!t.current.contains(n.target)&&e(!1)}),[e]);return Object(c.useEffect)((function(){return document.addEventListener("click",n,!0),function(){document.removeEventListener("click",n,!0)}}),[n]),t}},93:function(e,t,n){e.exports={"img-profile":"UserPP_img-profile__2pRQn"}},94:function(e,t,n){e.exports={"user-actions-container":"UserActions_user-actions-container__388zM"}}},[[109,1,2]]]);
//# sourceMappingURL=main.4a1c24c9.chunk.js.map