(this.webpackJsonpheury=this.webpackJsonpheury||[]).push([[0],{101:function(e,t,n){},11:function(e,t,n){e.exports={"register-container":"Auth_register-container__1BOtj",form:"Auth_form__YyYoq",google:"Auth_google__xv5EG","other-register-container":"Auth_other-register-container__zywxO","other-register":"Auth_other-register__2jkD7",submit:"Auth_submit__3Nuvx","bottom-actions":"Auth_bottom-actions__7dIp2","bottom-mss":"Auth_bottom-mss__1j6oK",link:"Auth_link__1xODJ"}},115:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),s=n(93),a=n.n(s),r=(n(101),n(36)),o=n(65),l=n.n(o),j=n.p+"static/media/plus.5a82668c.svg",u=n(13),d=n(22),b=n(66),h=n.n(b),m=n(2),p=function(){var e=Object(i.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(i.useState)("Untitled"),a=Object(u.a)(s,2),r=a[0],o=a[1],l=Object(i.useRef)(null);return Object(m.jsxs)("div",{className:h.a["page-header__project"],children:[Object(m.jsxs)(d.b,{to:"/",children:[Object(m.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(m.jsx)("path",{d:"M10 3.20399V12.796L4.519 7.99999L10 3.20399ZM9.341 2.45099L3.861 7.24699C3.75359 7.34085 3.6675 7.4566 3.60852 7.58648C3.54954 7.71636 3.51902 7.85735 3.51902 7.99999C3.51902 8.14263 3.54954 8.28362 3.60852 8.4135C3.6675 8.54337 3.75359 8.65913 3.861 8.75299L9.34 13.549C9.989 14.115 11 13.655 11 12.796V3.20399C11.0002 3.01174 10.9449 2.82353 10.8409 2.66188C10.7368 2.50023 10.5884 2.372 10.4133 2.29254C10.2383 2.21308 10.044 2.18577 9.85382 2.21387C9.66364 2.24197 9.48559 2.3243 9.341 2.45099Z",fill:"#FAFAFE"})}),Object(m.jsx)("h1",{children:"All Reports "})]}),Object(m.jsx)("h1",{children:"/"}),Object(m.jsxs)("div",{className:h.a.container,children:[Object(m.jsx)("div",{onDoubleClick:function(){c(!0),function(){var e;l&&l.current&&(null===l||void 0===l||null===(e=l.current)||void 0===e||e.focus())}()},className:"".concat(h.a.clickable," ").concat(n&&h.a.hidden)}),Object(m.jsx)("input",{onBlur:function(){c(!1),0===r.trim().length&&o("Untitled")},ref:l,onChange:function(e){o(e.target.value)},type:"text",autoComplete:"off",value:r})]})]})},x=n(30),f=n(97),O=n.n(f),v=function(e){var t=e.imgSource,n=e.className;return Object(m.jsx)("img",{className:"".concat(n," ").concat(O.a["img-profile"]),src:t,alt:"profile"})},_=n(67),g=n.n(_),w=n(119),C=n(12),N=n(118),y=n(117),M=n(94),H=n(86),U=n.n(H),V=n(79),I=n.n(V),A=function(e){var t=e.data,n=e.type,c=e.onClick,s=t.role,a=t.profileImg,r=t.name,o=Object(i.useState)(s),l=Object(u.a)(o,2),j=l[0],d=l[1],b=function(){return"owner"!==s};return Object(m.jsxs)("div",{className:I.a["user-project-list-item"],onMouseOver:function(){return b()?d("Remove"):null},onMouseLeave:function(){return b()?d(s):null},children:[Object(m.jsxs)("div",{className:I.a["user-info"],children:[Object(m.jsx)(v,{imgSource:a||""}),Object(m.jsx)("h1",{children:r})]}),"list"===n&&Object(m.jsx)("span",{className:b()?I.a.active:"",onClick:function(){return b()&&c?c(t.id):null},children:j})]})},F=n(80),P=n.n(F),k=function(e){var t=e.usersArray,n=e.setView,i=e.onDelete;return Object(m.jsxs)(y.a.div,{className:P.a["list-container"],variants:C.a,initial:"hidden",animate:"visible",exit:"exit",children:[Object(m.jsx)("div",{className:P.a.list,children:t.map((function(e){return Object(m.jsx)(A,{onClick:i,type:"list",data:e},e.id)}))}),Object(m.jsx)("button",{className:"reset-btn ".concat(P.a.btn),onClick:function(){return n("inviteUsers")},children:"Invite Evaluators"})]})},S=n(69),Z=n.n(S),D=function(e){var t=e.rightBtnValue,n=e.cancelFunction,i=e.rightBtnFunction;return Object(m.jsxs)("div",{className:Z.a["btn-container"],children:[Object(m.jsx)("button",{onClick:n,className:"reset-btn ".concat(Z.a.cancel),children:"Cancel"}),Object(m.jsx)("button",{onClick:i,className:"reset-btn ".concat(Z.a.add," ").concat(Z.a.active),children:t})]})},J=n(90),B=n.n(J),R=function(e){var t=e.setView,n=e.deleteUser,c=Object(i.useContext)(x.a).deleteProjectUsers;return Object(m.jsx)(N.a,{children:Object(m.jsxs)(y.a.div,{className:B.a["data-container"],variants:C.a,initial:"hidden",animate:"visible",exit:"exit",children:[Object(m.jsx)("h1",{children:"Removing Evaluator"}),Object(m.jsxs)("p",{className:B.a.message,children:["Are you sure you want to remove ",Object(m.jsx)("span",{children:n.name})," from this project? "]}),Object(m.jsx)(D,{rightBtnValue:"Remove",cancelFunction:function(){return t("projectUsersList")},rightBtnFunction:function(){c(n.id),t("projectUsersList")}})]})})},L=n(70),z=n.n(L),E=function(e){var t=e.searchUser,n=e.usersArray,i=e.setSearchUser,c=e.setView;return Object(m.jsxs)(y.a.div,{className:z.a["data-container"],variants:C.a,initial:"hidden",animate:"visible",exit:"exit",children:[Object(m.jsx)("h1",{children:"Invite Evaluators To This Project"}),Object(m.jsxs)("div",{className:z.a["actions-container"],children:[Object(m.jsx)("input",{value:t,onChange:function(e){i(e.target.value),console.log(e.target.value)},placeholder:"user@mail.com",className:z.a.input,type:"text"}),function(){if(""!==t.trim())return Object(m.jsx)(y.a.div,{className:z.a["recommend-users-container"],variants:C.a,initial:"hidden",animate:"visible",exit:"exit",children:Object(m.jsx)(A,{type:"search",data:n[0]})})}(),!1]}),Object(m.jsx)(D,{rightBtnValue:"Invite Evaluators",cancelFunction:function(){i(""),c("projectUsersList")},rightBtnFunction:function(){return null}})]})},T=n(98),Y=n.n(T),W=n(7),X=function(e){e.classes;var t=Object(W.f)();return Object(m.jsxs)(y.a.div,{className:Y.a["user-actions-container"],variants:C.a,initial:"hidden",animate:"visible",exit:"exit",children:[Object(m.jsx)("button",{className:"reset-btn",children:"Settings"}),Object(m.jsx)("button",{className:"reset-btn",onClick:function(){return t.push("/session")},children:"Sign Out"})]})},q=function(e){var t=e.setModalVisible,n=e.usersArray,c=e.type,s=Object(M.a)(t),a=Object(i.useState)("projectUsersList"),r=Object(u.a)(a,2),o=r[0],l=r[1],j=Object(i.useState)(""),d=Object(u.a)(j,2),b=d[0],h=d[1],p=Object(i.useState)(),x=Object(u.a)(p,2),f=x[0],O=x[1],v=function(e){l("deleteUser"),O(n.find((function(t){return t.id===e})))};return Object(m.jsx)(N.a,{children:Object(m.jsx)(y.a.div,{className:U.a["project-users-info"],ref:s,variants:C.f,initial:"hidden",animate:"visible",exit:"exit",children:Object(m.jsx)(y.a.div,{layout:!0,className:U.a["view-container"],children:Object(m.jsx)(w.a,{children:function(){switch(c){case"home":return Object(m.jsx)(X,{});case"project":return function(){switch(o){case"projectUsersList":return Object(m.jsx)(k,{onDelete:v,usersArray:n,setView:l});case"inviteUsers":return Object(m.jsx)(E,{searchUser:b,usersArray:n,setSearchUser:h,setView:l});case"deleteUser":if(f)return Object(m.jsx)(R,{setView:l,deleteUser:f})}}()}}()})})})})},G=function(e){var t=e.type,n=Object(i.useState)(!1),c=Object(u.a)(n,2),s=c[0],a=c[1],r=Object(i.useContext)(x.a),o=r.projectUsers,l=r.user;return Object(m.jsxs)("div",{className:g.a.container,children:[Object(m.jsx)("div",{className:g.a["container-main"],onClick:function(){return a(!0)},children:function(){switch(t){case"project":return Object(m.jsxs)(i.Fragment,{children:[1!==o.length&&Object(m.jsxs)("span",{children:["+",o.length-1]}),Object(m.jsx)(v,{className:g.a["main-pp"],imgSource:l.profileImg?l.profileImg:""})]});case"home":return Object(m.jsxs)(i.Fragment,{children:[Object(m.jsx)("span",{children:l.name}),Object(m.jsx)(v,{className:g.a["main-pp"],imgSource:l.profileImg?l.profileImg:""})]})}}()}),Object(m.jsx)(w.a,{initial:!1,exitBeforeEnter:!0,children:s&&Object(m.jsx)(q,{type:t,usersArray:o,setModalVisible:a})})]})},K=n(42),Q=n.n(K),$=function(){var e=Object(W.g)().projectId;return Object(m.jsxs)("nav",{className:Q.a["page-header__nav"],children:[Object(m.jsxs)(d.c,{to:"/project/".concat(e,"/table"),activeClassName:Q.a.active,className:"".concat(Q.a.table),children:[Object(m.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(m.jsx)("path",{d:"M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0L14 0C14.5304 0 15.0391 0.210714 15.4142 0.585786C15.7893 0.960859 16 1.46957 16 2V14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H2C1.46957 16 0.960859 15.7893 0.585786 15.4142C0.210714 15.0391 0 14.5304 0 14V2ZM15 4H11V7H15V4ZM15 8H11V11H15V8ZM15 12H11V15H14C14.2652 15 14.5196 14.8946 14.7071 14.7071C14.8946 14.5196 15 14.2652 15 14V12ZM10 15V12H6V15H10ZM5 15V12H1V14C1 14.2652 1.10536 14.5196 1.29289 14.7071C1.48043 14.8946 1.73478 15 2 15H5ZM1 11H5V8H1V11ZM1 7H5V4H1V7ZM6 4V7H10V4H6ZM10 8H6V11H10V8Z",fill:"#7F828F"})}),Object(m.jsx)("h1",{children:"Table"})]}),Object(m.jsxs)(d.c,{to:"/project/".concat(e,"/document"),activeClassName:Q.a.active,className:Q.a.document,children:[Object(m.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(m.jsx)("path",{d:"M14 4.5V14C14 14.5304 13.7893 15.0391 13.4142 15.4142C13.0391 15.7893 12.5304 16 12 16H4C3.46957 16 2.96086 15.7893 2.58579 15.4142C2.21071 15.0391 2 14.5304 2 14V2C2 1.46957 2.21071 0.960859 2.58579 0.585786C2.96086 0.210714 3.46957 0 4 0L9.5 0L14 4.5ZM11 4.5C10.6022 4.5 10.2206 4.34196 9.93934 4.06066C9.65804 3.77936 9.5 3.39782 9.5 3V1H4C3.73478 1 3.48043 1.10536 3.29289 1.29289C3.10536 1.48043 3 1.73478 3 2V14C3 14.2652 3.10536 14.5196 3.29289 14.7071C3.48043 14.8946 3.73478 15 4 15H12C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8946 14.5196 13 14.2652 13 14V4.5H11Z",fill:"#7F828F"})}),Object(m.jsx)("h1",{children:"Document"})]}),Object(m.jsxs)(d.c,{to:"/project/".concat(e,"/statistics"),activeClassName:Q.a.active,className:Q.a.graph,children:[Object(m.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(m.jsx)("path",{d:"M1 11C1 10.7348 1.10536 10.4804 1.29289 10.2929C1.48043 10.1054 1.73478 10 2 10H4C4.26522 10 4.51957 10.1054 4.70711 10.2929C4.89464 10.4804 5 10.7348 5 11V14C5 14.2652 4.89464 14.5196 4.70711 14.7071C4.51957 14.8946 4.26522 15 4 15H2C1.73478 15 1.48043 14.8946 1.29289 14.7071C1.10536 14.5196 1 14.2652 1 14V11ZM6 7C6 6.73478 6.10536 6.48043 6.29289 6.29289C6.48043 6.10536 6.73478 6 7 6H9C9.26522 6 9.51957 6.10536 9.70711 6.29289C9.89464 6.48043 10 6.73478 10 7V14C10 14.2652 9.89464 14.5196 9.70711 14.7071C9.51957 14.8946 9.26522 15 9 15H7C6.73478 15 6.48043 14.8946 6.29289 14.7071C6.10536 14.5196 6 14.2652 6 14V7ZM11 2C11 1.73478 11.1054 1.48043 11.2929 1.29289C11.4804 1.10536 11.7348 1 12 1H14C14.2652 1 14.5196 1.10536 14.7071 1.29289C14.8946 1.48043 15 1.73478 15 2V14C15 14.2652 14.8946 14.5196 14.7071 14.7071C14.5196 14.8946 14.2652 15 14 15H12C11.7348 15 11.4804 14.8946 11.2929 14.7071C11.1054 14.5196 11 14.2652 11 14V2Z",fill:"#7F828F"})}),Object(m.jsx)("h1",{children:"Statistics"})]})]})},ee=function(e){var t=e.type,n=Object(W.f)(),c=Object(i.useContext)(x.a),s=c.createProject,a=c.user,o=function(){var e=Math.random().toString(),t={name:"prueba",id:e,users:[Object(r.a)(Object(r.a)({},a),{},{role:"owner"})],observations:[]};s(t),n.push("/project/".concat(e,"/table"))};return Object(m.jsx)("div",{className:l.a["page-header"],children:function(){switch(t){case"project":return Object(m.jsxs)(i.Fragment,{children:[Object(m.jsx)(p,{}),Object(m.jsx)($,{}),Object(m.jsx)(G,{type:"project"})]});case"home":return Object(m.jsxs)(i.Fragment,{children:[Object(m.jsx)("h1",{className:l.a.logo,children:"Heury"}),Object(m.jsxs)("div",{className:l.a["right-content"],children:[Object(m.jsxs)("button",{onClick:o,className:"reset-btn ".concat(l.a.button),children:[Object(m.jsx)("img",{src:j,alt:"sss"}),"Report"]}),Object(m.jsx)(G,{type:"home"})]})]})}}()})},te=Object(i.lazy)((function(){return n.e(4).then(n.bind(null,133))})),ne=Object(i.lazy)((function(){return n.e(3).then(n.bind(null,132))}));function ie(){var e=Object(W.g)().projectId;return Object(m.jsxs)(i.Fragment,{children:[Object(m.jsx)(i.Suspense,{fallback:Object(m.jsx)("h1",{children:"loading \ud83d\udd25"}),children:Object(m.jsx)(W.b,{path:"/project/".concat(e,"/table"),children:Object(m.jsx)(ne,{id:e})})}),Object(m.jsx)(i.Suspense,{fallback:Object(m.jsx)("h1",{children:"loading \ud83d\udd25"}),children:Object(m.jsx)(W.b,{path:"/project/".concat(e,"/document"),children:Object(m.jsx)(te,{id:e})})})]})}var ce=n(57),se=n.n(ce),ae=n(91),re=n.n(ae),oe=function(e){var t=e.data,n=t.name,i=t.id;return Object(m.jsxs)(y.a.div,{whileHover:{scale:1.05},className:re.a["thumb-container"],children:[Object(m.jsx)(d.b,{to:"/project/".concat(i,"/table"),children:Object(m.jsx)("img",{src:"https://cdn.dribbble.com/users/584216/screenshots/16446283/media/8102a68338fc86f7f229af5238bd9d2d.jpg?compress=1&resize=400x300",alt:"si"})}),Object(m.jsx)("div",{className:re.a["title-container"],children:Object(m.jsx)("span",{children:n})})]})},le=n.p+"static/media/google.9ed16233.svg",je=n.p+"static/media/git.d561aa2c.svg",ue=n(11),de=n.n(ue),be=n.p+"static/media/mail.8e2c3fb9.svg",he=n.p+"static/media/lock.d35a333a.svg",me=n(99),pe=n.n(me),xe=function(e){var t=e.label,n=e.icon,i=e.type,c=e.placeholder;return Object(m.jsxs)("label",{children:[Object(m.jsx)("span",{children:t}),Object(m.jsxs)("div",{className:pe.a["input-container"],children:[Object(m.jsx)("img",{src:n,alt:""}),Object(m.jsx)("input",{type:i,placeholder:c})]})]})},fe=function(e){var t=e.setMode;return Object(m.jsxs)(y.a.form,{className:de.a.form,variants:C.a,initial:"hidden",animate:"visible",exit:"exit",children:[Object(m.jsx)(xe,{label:"Mail",placeholder:"user@mail.com",icon:be,type:"text"}),Object(m.jsx)(xe,{label:"Password",placeholder:"6 characters",icon:he,type:"password"}),Object(m.jsxs)("div",{className:de.a["bottom-actions"],children:[Object(m.jsx)("button",{className:["reset-btn",de.a.submit].join(" "),children:"Login"}),Object(m.jsxs)("span",{className:de.a["bottom-mss"],children:["Not have an account?",Object(m.jsx)("span",{onClick:function(){return t("register")},className:de.a.link,children:"Register"})]})]})]})},Oe=n.p+"static/media/user.256b62fa.svg",ve=function(e){var t=e.setMode;return Object(m.jsxs)(y.a.form,{className:de.a.form,variants:C.a,initial:"hidden",animate:"visible",exit:"exit",children:[Object(m.jsx)(xe,{label:"Name",placeholder:"name",icon:Oe,type:"text"}),Object(m.jsx)(xe,{label:"Mail",placeholder:"user@mail.com",icon:be,type:"text"}),Object(m.jsx)(xe,{label:"Password",placeholder:"6 characters",icon:he,type:"password"}),Object(m.jsx)(xe,{label:"Confirm Password",placeholder:"6 characters",icon:he,type:"password"}),Object(m.jsxs)("div",{className:de.a["bottom-actions"],children:[Object(m.jsx)("button",{type:"submit",className:["reset-btn",de.a.submit].join(" "),children:"Register"}),Object(m.jsxs)("span",{className:de.a["bottom-mss"],children:["Already have an account?",Object(m.jsx)("span",{onClick:function(){return t("login")},className:de.a.link,children:"Sign Up"})]})]})]})},_e=function(){var e=Object(i.useState)("login"),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(m.jsx)(N.a,{children:Object(m.jsxs)(y.a.div,{layout:!0,className:de.a["register-container"],children:[Object(m.jsxs)("div",{className:de.a["other-register-container"],children:[Object(m.jsxs)("button",{className:["reset-btn",de.a["other-register"],de.a.google].join(" "),children:[Object(m.jsx)("img",{src:le,alt:""}),Object(m.jsx)("span",{children:"Register with Google"})]}),Object(m.jsx)("button",{className:["reset-btn",de.a["other-register"]].join(" "),children:Object(m.jsx)("img",{src:je,alt:""})})]}),"login"===n&&Object(m.jsx)(fe,{setMode:c}),"register"===n&&Object(m.jsx)(ve,{setMode:c})]})})},ge=function(){var e=Object(i.useContext)(x.a).userProjects;return Object(m.jsxs)("div",{className:se.a.app,children:[Object(m.jsxs)(W.b,{path:"/project/:projectId",children:[Object(m.jsx)(ee,{type:"project"}),Object(m.jsx)(ie,{})]}),Object(m.jsx)(W.b,{path:"/session",children:Object(m.jsx)("div",{className:se.a["register-container"],children:Object(m.jsx)(_e,{})})}),Object(m.jsxs)(W.b,{path:"/",exact:!0,children:[Object(m.jsx)(ee,{type:"home"}),Object(m.jsxs)("div",{className:se.a["projects-container"],children:[Object(m.jsxs)("div",{className:se.a["projects-title"],children:[Object(m.jsx)("h1",{children:"All Reports"}),Object(m.jsxs)("span",{children:["( ",e.length," )"]})]}),Object(m.jsx)("div",{className:se.a["thumb-container"],children:e.map((function(e){return Object(m.jsx)(oe,{data:e},e.id)}))})]})]})]})},we=n(56),Ce=function(e){var t=Object(i.useState)({heuristic:"",severity:""}),n=Object(u.a)(t,2),c=n[0],s=n[1],a=Object(i.useState)(C.g),o=Object(u.a)(a,2),l=o[0],j=o[1],d=Object(i.useState)([]),b=Object(u.a)(d,2),h=b[0],p=b[1],f={user:{name:"Daniel",id:"asdsad",profileImg:"https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9iMDVhNWNjMDY1M2FiNDNjNzU0NjY1ZmQxOWNmNzU3MT9zaXplPTEwMCZkZWZhdWx0PXJldHJvIn0.AUtQ0KIK-lJbX9MAPyq_8rTlkO4_CiuhTGbmyvuJJ40"},userProjects:h,filterData:c,deleteObservation:function(e,t){var n=Object(we.a)(h),i=n.find((function(e){return e.id===t}));if(i){var c=i.observations;i.observations=c.filter((function(t){return t.id!==e})),p(n)}},editObservation:function(e){var t=e.newObservation,n=e.id,i=e.projectId,c=Object(we.a)(h),s=c.find((function(e){return e.id===i}));if(s){var a=s.observations,o=a.findIndex((function(e){return e.id===n}));a[o]=Object(r.a)({},t),p(c)}},createObservation:function(e,t){var n=Object(we.a)(h),i=n.find((function(e){return e.id===t}));null===i||void 0===i||i.observations.push(e),p(n)},setHeuristicFilter:function(e){s((function(t){return Object(r.a)(Object(r.a)({},t),{},{heuristic:e.target.value})}))},setSeverityFilter:function(e){s((function(t){return Object(r.a)(Object(r.a)({},t),{},{severity:e.target.value})}))},projectUsers:l,deleteProjectUsers:function(e){j(Object(we.a)(l).filter((function(t){return t.id!==e})))},createProject:function(e){p((function(t){return[].concat(Object(we.a)(t),[e])}))}};return Object(m.jsx)(x.a.Provider,{value:f,children:e.children})};var Ne=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(Ce,{children:Object(m.jsx)(d.a,{children:Object(m.jsx)(ge,{})})})})};a.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(Ne,{})}),document.getElementById("root"))},12:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"g",(function(){return a})),n.d(t,"f",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return l}));var i=["VisibilityOfSystemStatus","MatchBetweenSystemAndTheRealWorld","UserControlAndFreedom","ConsistencyAndStandards","ErrorPrevention","RecognitionRatherThanRecall","FlexibilityAndEfficiencyOfUse","AestheticAndMinimalistDesign","HelpRecognizeAndRecoverFromErrors","HelpAndDocumentation"],c=["1Minor","2Middle","3High","4Major"],s=["#33A2E0","#E0C433","#E09033","#E05D33"],a=[{role:"owner",profileImg:"https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9iMDVhNWNjMDY1M2FiNDNjNzU0NjY1ZmQxOWNmNzU3MT9zaXplPTEwMCZkZWZhdWx0PXJldHJvIn0.AUtQ0KIK-lJbX9MAPyq_8rTlkO4_CiuhTGbmyvuJJ40",name:"Daniel",id:"1"},{role:"collaborator",profileImg:"https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",name:"Nath",id:"2"},{role:"collaborator",profileImg:"https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",name:"Sofia Martinez Villegas",id:"3"},{role:"collaborator",profileImg:"https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",name:"Nadie",id:"4"},{role:"collaborator",profileImg:"https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",name:"AAAA",id:"5"},{role:"collaborator",profileImg:"https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",name:"EFE",id:"6"}],r={hidden:{x:"100%",opacity:0},visible:{x:0,opacity:1,transition:{duration:.3,type:"ease-in-out",damping:0,stiffness:0}},exit:{x:"100%",opacity:0,transition:{duration:.3,type:"ease-in-out",damping:0,stiffness:0}}},o={hidden:{y:"-100%",opacity:0},visible:{y:0,opacity:1,transition:{duration:.2,type:"ease-in",damping:0,stiffness:0}},exit:{y:"-100%",opacity:0,transition:{duration:.2,type:"ease-in",damping:0,stiffness:0}}},l={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.3,type:"ease-in-out",damping:0,stiffness:0}},exit:{opacity:0,transition:{duration:.3,type:"ease-in-out",damping:0,stiffness:0}}}},30:function(e,t,n){"use strict";var i=n(1),c=n.n(i).a.createContext({user:{name:"",id:"",profileImg:""},userProjects:[],projectUsers:[],deleteProjectUsers:function(){},filterData:{heuristic:"",severity:""},deleteObservation:function(){},editObservation:function(){},createObservation:function(){},setHeuristicFilter:function(){},setSeverityFilter:function(){},createProject:function(){}});t.a=c},42:function(e,t,n){e.exports={"page-header__nav":"Visualization_page-header__nav__1V67N",active:"Visualization_active__1-dUt"}},57:function(e,t,n){e.exports={app:"Project_app__2smSO","projects-container":"Project_projects-container__1rWQc","rive-animation":"Project_rive-animation__3KoWd","thumb-container":"Project_thumb-container__1glBz","projects-title":"Project_projects-title__ulk4-","register-container":"Project_register-container__3y_MZ"}},65:function(e,t,n){e.exports={"page-header":"Header_page-header__RREOa","right-content":"Header_right-content__17juC",logo:"Header_logo__3_SJs",button:"Header_button__3kSo_"}},66:function(e,t,n){e.exports={"page-header__project":"Nav_page-header__project__2fRbT",container:"Nav_container__3O35C",clickable:"Nav_clickable__3s9Ob",hidden:"Nav_hidden__3a5Dm"}},67:function(e,t,n){e.exports={container:"UserProject_container__2NCm9","main-pp":"UserProject_main-pp__2ZBxS","container-main":"UserProject_container-main__17gym"}},69:function(e,t,n){e.exports={"btn-container":"UnderBtnActions_btn-container__34KJX",cancel:"UnderBtnActions_cancel__3tPma",add:"UnderBtnActions_add__2slvq",active:"UnderBtnActions_active__2MZiq"}},70:function(e,t,n){e.exports={"data-container":"InviteUsers_data-container__1Dfuv","actions-container":"InviteUsers_actions-container__3N__q",input:"InviteUsers_input__1LvVR","users-selected":"InviteUsers_users-selected__2cpb5","recommend-users-container":"InviteUsers_recommend-users-container__JcbD4"}},79:function(e,t,n){e.exports={"user-project-list-item":"UserProjectListItem_user-project-list-item__2AoG9",active:"UserProjectListItem_active__2uh5R","user-info":"UserProjectListItem_user-info__CZ-se"}},80:function(e,t,n){e.exports={"list-container":"ProjectUsersList_list-container__yjWIM",list:"ProjectUsersList_list__vuPWI",btn:"ProjectUsersList_btn__264bb"}},86:function(e,t,n){e.exports={"project-users-info":"UsersProjectModal_project-users-info__2jfE2","view-container":"UsersProjectModal_view-container__1h_f0"}},90:function(e,t,n){e.exports={"data-container":"DeleteUser_data-container__2JSpR",message:"DeleteUser_message__2DhDj"}},91:function(e,t,n){e.exports={"thumb-container":"ProjectThumb_thumb-container__3J67c","title-container":"ProjectThumb_title-container__2c_wN"}},94:function(e,t,n){"use strict";var i=n(1);t.a=function(e){var t=Object(i.useRef)(null),n=Object(i.useCallback)((function(n){t&&t.current&&t.current&&!t.current.contains(n.target)&&e(!1)}),[e]);return Object(i.useEffect)((function(){return document.addEventListener("click",n,!0),function(){document.removeEventListener("click",n,!0)}}),[n]),t}},97:function(e,t,n){e.exports={"img-profile":"UserPP_img-profile__2pRQn"}},98:function(e,t,n){e.exports={"user-actions-container":"UserActions_user-actions-container__1v0YZ"}},99:function(e,t,n){e.exports={"input-container":"AuthInput_input-container__1NHc0"}}},[[115,1,2]]]);
//# sourceMappingURL=main.d814b008.chunk.js.map