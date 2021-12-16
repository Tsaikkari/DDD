(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{124:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(24),s=a.n(r),i=(a(90),a(91),a(92),a(7)),o=a(1);function l(){return Object(o.jsx)("div",{className:"home-container",children:Object(o.jsx)("h1",{className:"homepage-header",children:"DAILY DOSE OF DOPAMINE"})})}var j=a(4),d=a(19),u=a(136),b=a(83),h=a(131),O=a(81),x=a(9),m=a.n(x),p=a(130),v=function(e){var t=e.children;return Object(o.jsx)(p.a,{children:Object(o.jsx)(h.a,{className:"justify-content-md-center",children:Object(o.jsx)(O.a,{xs:12,md:6,children:t})})})},f=a(132),g=function(e){var t=e.variant,a=e.children;return Object(o.jsx)(f.a,{variant:t,children:a})};g.defaultProps={variant:"info"};var N=g,S=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(j.a)(r,2),l=s[0],x=s[1],p=Object(n.useState)(""),f=Object(j.a)(p,2),g=f[0],S=f[1],C=Object(n.useState)(void 0),k=Object(j.a)(C,2),w=k[0],y=k[1],I=Object(i.t)();return Object(o.jsxs)(v,{children:[Object(o.jsx)("h1",{className:"m-4",children:"Sign Up"}),Object(o.jsxs)(u.a,{onSubmit:function(e){e.preventDefault();var t={email:a,password:g,name:l};m.a.post("/auth/signup",t).then((function(e){I("/login")})).catch((function(e){var t=e.response.data.message;y(t)}))},children:[Object(o.jsxs)(u.a.Group,{controlId:"name",children:[Object(o.jsx)(u.a.Label,{children:"Name"}),Object(o.jsx)(u.a.Control,{type:"text",placeholder:"Enter Name",value:l,onChange:function(e){return x(e.target.value)}})]}),Object(o.jsxs)(u.a.Group,{controlId:"email",children:[Object(o.jsx)(u.a.Label,{children:"Email Address"}),Object(o.jsx)(u.a.Control,{type:"email",placeholder:"Enter Email",value:a,onChange:function(e){return c(e.target.value)}})]}),Object(o.jsxs)(u.a.Group,{controlId:"password",children:[Object(o.jsx)(u.a.Label,{children:"Password"}),Object(o.jsx)(u.a.Control,{type:"password",placeholder:"Enter Password",value:g,onChange:function(e){return S(e.target.value)}})]}),Object(o.jsx)(b.a,{type:"submit",className:"save-btn",variant:"",children:"Sign Up"})]}),w&&Object(o.jsx)(N,{variant:"danger",children:w}),Object(o.jsx)(h.a,{className:"py-3",children:Object(o.jsxs)(O.a,{children:["Already have an account? ",Object(o.jsx)(d.Link,{to:"/login",children:"Login"})]})})]})},C=c.a.createContext();function k(e){var t=Object(n.useState)(!1),a=Object(j.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(null),l=Object(j.a)(s,2),d=l[0],u=l[1],b=Object(n.useState)(!0),h=Object(j.a)(b,2),O=h[0],x=h[1],p=Object(i.t)(),v=function(){var e=localStorage.getItem("authToken");e?m.a.get("/auth/verify",{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){console.log(e);var t=e.data;u(t),r(!0),x(!1)})).catch((function(e){r(!1),u(null),x(!1)})):x(!1)};return Object(n.useEffect)((function(){v()}),[]),Object(o.jsx)(C.Provider,{value:{isLoggedIn:c,user:d,isLoading:O,loginUser:function(e){localStorage.setItem("authToken",e),v()},logoutUser:function(){localStorage.removeItem("authToken"),r(!1),u(null),p("/")}},children:e.children})}var w=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(j.a)(r,2),l=s[0],x=s[1],p=Object(n.useState)(void 0),f=Object(j.a)(p,2),g=f[0],S=f[1],k=Object(i.t)(),w=Object(n.useContext)(C),y=w.loginUser,I=w.isLoading;return Object(o.jsxs)(v,{children:[Object(o.jsx)("h1",{className:"m-4",children:"Login"}),Object(o.jsxs)(u.a,{onSubmit:function(e){e.preventDefault();var t={email:a,password:l};m.a.post("/auth/login",t).then((function(e){var t=e.data.authToken;y(t),k("/profile")})).catch((function(e){var t=e.response.data.message;S(t)}))},children:[Object(o.jsxs)(u.a.Group,{controlId:"email",children:[Object(o.jsx)(u.a.Label,{children:"Email Address"}),Object(o.jsx)(u.a.Control,{type:"email",placeholder:"Enter Email",value:a,onChange:function(e){return c(e.target.value)}})]}),Object(o.jsxs)(u.a.Group,{controlId:"password",children:[Object(o.jsx)(u.a.Label,{children:"Password"}),Object(o.jsx)(u.a.Control,{type:"password",placeholder:"Enter Password",value:l,onChange:function(e){return x(e.target.value)}})]}),Object(o.jsx)(b.a,{type:"submit",className:"save-btn",variant:"",children:"Login"})]}),g&&Object(o.jsx)(N,{variant:"danger",children:g}),I&&Object(o.jsx)("h3",{children:"Loading ..."}),Object(o.jsx)(h.a,{className:"py-3",children:Object(o.jsxs)(O.a,{children:["Don't have an account? ",Object(o.jsx)(d.Link,{to:"/signup",children:"Sign Up"})]})})]})},y=a(135),I=a(138),L=a(134),B=a(35),A=function(){var e=Object(n.useContext)(C),t=e.isLoggedIn,a=e.logoutUser,c=e.user;return Object(o.jsxs)(y.a,{bg:"light",expand:"lg",collapseOnSelect:!0,className:"navbar",children:[Object(o.jsx)(B.LinkContainer,{to:"/",children:Object(o.jsx)(y.a.Brand,{children:"DDD"})}),Object(o.jsx)(y.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(o.jsx)(y.a.Collapse,{id:"basic-navbar-nav",children:Object(o.jsx)(I.a,{className:"ml-auto",children:t?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(B.LinkContainer,{to:"/videos",children:Object(o.jsxs)(I.a.Link,{children:[Object(o.jsx)("i",{className:"fab fa-youtube"})," My Videos"]})}),Object(o.jsx)(B.LinkContainer,{to:"/visionboards",children:Object(o.jsxs)(I.a.Link,{children:[Object(o.jsx)("i",{className:"fab fa-wpexplorer"})," My Vision Boards"]})}),Object(o.jsxs)(L.a,{title:c.name,id:"username",children:[Object(o.jsx)(B.LinkContainer,{to:"/profile",children:Object(o.jsx)(L.a.Item,{children:"Profile"})}),Object(o.jsx)(L.a.Item,{onClick:a,children:"Logout"})]})]}):Object(o.jsxs)("div",{className:"nav-not-signedin",children:[Object(o.jsx)(B.LinkContainer,{to:"/signup",children:Object(o.jsxs)(I.a.Link,{children:[Object(o.jsx)("i",{className:"fas fa-user-plus"})," Sign Up"]})}),Object(o.jsx)(B.LinkContainer,{to:"/login",children:Object(o.jsxs)(I.a.Link,{children:[Object(o.jsx)("i",{className:"fas fa-user"})," Login"]})})]})})})]})},E=a(139),D=a(133),T=function(){return Object(o.jsx)("footer",{children:Object(o.jsx)(p.a,{children:Object(o.jsx)(h.a,{children:Object(o.jsx)(O.a,{className:"copyright",children:"Copyright \xa9 Kirsi Trospe"})})})})},V=localStorage.getItem("authToken"),G={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(V)}},P=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(j.a)(r,2),i=s[0],l=s[1],x=Object(n.useState)(void 0),p=Object(j.a)(x,2),v=p[0],f=p[1],g=Object(n.useContext)(C),S=g.user,k=g.isLoading,w=g.isLoggedIn,y=localStorage.getItem("authToken");Object(n.useEffect)((function(){m.a.get("/api/users/profile",{headers:{Authorization:"Bearer ".concat(y)}}).then((function(e){c(e.data.name),l(e.data.email)})).catch((function(e){return console.log(e)}))}),[]);return Object(o.jsxs)(o.Fragment,{children:[w&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("h1",{className:"greeting",children:["Hey, ",S.name," \u2766"]}),Object(o.jsxs)(h.a,{className:"profile-row",children:[Object(o.jsxs)(O.a,{className:"info-col",md:8,children:[Object(o.jsx)("h2",{className:"create",children:"Create and enjoy your daily dose of dopamine!"}),Object(o.jsxs)(E.a,{className:"group",variant:"flush",children:[Object(o.jsx)(E.a.Item,{children:Object(o.jsx)(d.Link,{to:"/videos",className:"link",children:"Upload your favorite YouTube videos"})}),Object(o.jsx)(E.a.Item,{children:Object(o.jsx)(d.Link,{to:"/visionboards",className:"link",children:"Create your vision boards"})})]}),Object(o.jsx)(D.a,{src:"",alt:"",className:"profile-page-img"})]}),Object(o.jsxs)(O.a,{className:"form-col",md:3,children:[Object(o.jsx)("h1",{className:"form-header m-4",children:"Update Your Info"}),Object(o.jsxs)(u.a,{onSubmit:function(e){e.preventDefault();var t={email:i,name:a};m.a.put("/api/users/".concat(S._id),t,G).then((function(e){console.log(e)})).catch((function(e){var t=e.response.data.message;f(t)}))},children:[Object(o.jsxs)(u.a.Group,{controlId:"name",children:[Object(o.jsx)(u.a.Label,{children:"Name"}),Object(o.jsx)(u.a.Control,{type:"text",placeholder:"Enter Name",value:a,onChange:function(e){return c(e.target.value)}})]}),Object(o.jsxs)(u.a.Group,{controlId:"email",children:[Object(o.jsx)(u.a.Label,{children:"Email Address"}),Object(o.jsx)(u.a.Control,{type:"email",placeholder:"Enter Email",value:i,onChange:function(e){return l(e.target.value)}})]}),Object(o.jsx)(b.a,{type:"submit",className:"save-btn",variant:"",children:"Update"})]})]})]}),Object(o.jsxs)(h.a,{children:[k&&Object(o.jsx)("h3",{children:"Loading ..."}),v&&Object(o.jsx)(N,{variant:"danger",children:v})]})]}),Object(o.jsx)(T,{})]})},F=a(11),U=a.n(F),_=a(17),z=a(65),M=a.n(z),Y=a(137),J=function(e){var t=e.title,a=e.url,n=e.id,c=e.refreshVideos,r=function(){var e=Object(_.a)(U.a.mark((function e(t){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Delete this video?")){e.next=10;break}return e.prev=1,e.next=4,m.a.delete("/api/videos/".concat(t),G);case 4:c(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsx)(M.a,{children:Object(o.jsxs)(Y.a,{className:"video-card",children:[Object(o.jsx)("iframe",{title:t,width:"477",height:"315",src:a}),Object(o.jsxs)("div",{className:"text-trash video",children:[Object(o.jsx)("p",{className:"video-title",children:t}),Object(o.jsxs)("p",{className:"delete",onClick:function(){r(n)},children:[" ","*"]})]})]})})};function R(e){var t=Object(n.useState)(""),a=Object(j.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(""),i=Object(j.a)(s,2),l=i[0],d=i[1],h=Object(n.useContext)(C).user,O=function(){var t=Object(_.a)(U.a.mark((function t(a){var n;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,n={title:c,url:l,user:h},t.next=5,m.a.post("/api/videos",n,G);case 5:r(""),d(""),e.refreshVideos(),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h4",{className:"add-video-header",children:"Add a Video"}),Object(o.jsxs)(u.a,{onSubmit:O,className:"video-form",children:[Object(o.jsx)(u.a.Group,{controlId:"title",className:"mb-3",children:Object(o.jsx)(u.a.Control,{type:"text",placeholder:"Give a title for the video",value:c,onChange:function(e){return r(e.target.value)}})}),Object(o.jsx)(u.a.Group,{controlId:"url",className:"mb-3 url-input",children:Object(o.jsx)(u.a.Control,{type:"text",placeholder:"Enter YouTube Video URL",value:l,onChange:function(e){d((function(t){return e.target.value}));var t=e.target.value.split("watch?v="),a=t[0]+"embed/"+t[1];d(a)}})}),Object(o.jsx)(u.a.Group,{children:Object(o.jsx)(b.a,{type:"submit",className:"save-btn add-video-btn",children:"Save"})})]})]})}var H=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(j.a)(r,2),i=s[0],l=s[1],d=Object(n.useState)(""),x=Object(j.a)(d,2),p=(x[0],x[1],Object(n.useState)(!0)),v=Object(j.a)(p,2),f=v[0],g=v[1],N=localStorage.getItem("authToken"),S=function(){var e=Object(_.a)(U.a.mark((function e(t){var a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),l((function(e){return i})),e.next=5,m.a.get("/api/videos/user-videos?title=".concat(i),{headers:{Authorization:"Bearer ".concat(N)}});case 5:a=e.sent,c(a.data.filter((function(e){return e.title.toLowerCase().includes(i.toLowerCase())}))),l(""),g(!f),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:t&&!f&&C();case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),C=function(e){i?S(e):m.a.get("/api/videos/user-videos",{headers:{Authorization:"Bearer ".concat(N)}}).then((function(e){c(e.data)})).catch((function(e){return console.log(e)}))};return Object(n.useEffect)((function(){C()}),[]),Object(o.jsxs)("div",{className:"video-container",children:[Object(o.jsxs)(h.a,{children:[Object(o.jsx)(O.a,{md:9,children:Object(o.jsx)(R,{refreshVideos:C,videos:a})}),Object(o.jsx)(O.a,{md:3,children:Object(o.jsxs)(u.a,{onSubmit:S,className:"video-search",children:[Object(o.jsx)(u.a.Group,{controlId:"title",children:Object(o.jsx)(u.a.Control,{type:"text",placeholder:"Search from your videos",value:i,name:"title",onChange:function(e){return l(e.target.value)}})}),Object(o.jsx)(b.a,{className:"search-btn",type:"submit",children:f?"Search":"All Videos"})]})})]}),Object(o.jsx)(h.a,{children:a.map((function(e){return Object(o.jsx)(O.a,{sm:12,md:6,lg:4,xl:4,children:Object(o.jsx)(J,{title:e.title,url:e.url,refreshVideos:C,id:e._id})},e._id)}))})]})},K=function(){return Object(o.jsx)("div",{})},q=function(e){var t=e.handleShowVisionBoardForm;return Object(o.jsxs)("header",{children:[Object(o.jsx)(b.a,{className:"add-board-btn",onClick:t,children:"Add Board"}),Object(o.jsx)(K,{})]})},Q=function(e){var t=e.text,a=e.imgPath,n=e.id,c=e.refreshVisionBoards,r=function(){var e=Object(_.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Delete image?")){e.next=10;break}return e.prev=1,e.next=4,m.a.delete("/api/imgboxes/".concat(n),G);case 4:c(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}();return Object(o.jsx)(M.a,{children:Object(o.jsxs)(Y.a,{className:"img-card",children:[Object(o.jsx)(D.a,{className:"img",src:a,alt:"vision-board-img",fluid:!0}),Object(o.jsxs)("div",{className:"text-trash",children:[Object(o.jsx)("p",{children:t}),Object(o.jsxs)("p",{className:"delete",onClick:function(){r(n)},children:[" ","*"]})]})]})})},W=function(e){var t=e.title,a=e.images,n=e.id,c=e.refreshVisionBoards,r=function(){var e=Object(_.a)(U.a.mark((function e(t){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Delete this vision board?")){e.next=10;break}return e.prev=1,e.next=4,m.a.delete("/api/visions/".concat(t),G);case 4:c(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"vision-board",children:[Object(o.jsxs)("div",{className:"text-trash",children:[Object(o.jsx)("p",{className:"vision-board-title",children:t}),Object(o.jsxs)("p",{className:"delete",onClick:function(){r(n)},children:[" ","*"]})]}),Object(o.jsx)(h.a,{children:a.map((function(e){return Object(o.jsx)(O.a,{sm:12,md:6,lg:4,xl:3,children:Object(o.jsx)(Q,{imgPath:e.imgPath,text:e.text,id:e._id,refreshVisionBoards:c})},e._id)}))})]})},X=function(e){var t=e.addBoard,a=e.setAddBoard,c=e.refreshVisionBoards,r=Object(n.useState)(""),s=Object(j.a)(r,2),l=s[0],d=s[1],h=Object(i.t)(),O=Object(n.useContext)(C).user,x=function(){var e=Object(_.a)(U.a.mark((function e(n){var r,s;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,r={title:l,user:O},e.next=5,m.a.post("/api/visions",r,G);case 5:s=e.sent,d(""),a(!t),c(),h("/visionboards/".concat(s.data._id)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsx)("div",{className:"vision-board-form-container",children:Object(o.jsxs)(u.a,{onSubmit:x,children:[Object(o.jsx)(u.a.Group,{controlId:"title",className:"mb-3",children:Object(o.jsx)(u.a.Control,{type:"text",placeholder:"Give Title",value:l,onChange:function(e){return d(e.target.value)}})}),Object(o.jsx)(b.a,{type:"submit",children:"Save"})]})})},Z=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),s=Object(j.a)(r,2),i=s[0],l=s[1],d=localStorage.getItem("authToken"),u=function(){m.a.get("/api/visions/user-visions",{headers:{Authorization:"Bearer ".concat(d)}}).then((function(e){var t=e.data.reverse();c(t)})).catch((function(e){return console.log(e)}))};Object(n.useEffect)((function(){u()}),[]);return Object(o.jsxs)("div",{children:[Object(o.jsx)(q,{handleShowVisionBoardForm:function(){l(!i)}}),Object(o.jsxs)("main",{children:[i&&Object(o.jsx)(X,{addBoard:i,setAddBoard:l,boards:a,refreshVisionBoards:u}),0===a.length?Object(o.jsx)("p",{children:"Instructions"}):Object(o.jsx)("div",{className:"boards",children:a.map((function(e){return Object(o.jsx)("div",{children:Object(o.jsx)(W,{images:e.images,title:e.title,id:e._id,refreshVisionBoards:u})},e._id)}))})]})]})},$=function(e){var t=e.handleShowImgBoxForm;return Object(o.jsx)("header",{children:Object(o.jsx)(b.a,{className:"add-image-btn",onClick:t,children:"Add an Image"})})},ee=function(e){var t=e.addBox,a=e.setAddBox,c=e.refreshImgBoxes,r=(e.boxes,e.setMessage),s=Object(n.useState)(""),l=Object(j.a)(s,2),d=l[0],h=l[1],O=Object(n.useState)(""),x=Object(j.a)(O,2),p=x[0],f=x[1],g=Object(n.useState)(!1),N=Object(j.a)(g,2),S=N[0],k=N[1],w=Object(n.useContext)(C).user,y=Object(i.w)().id,I=function(){var e=Object(_.a)(U.a.mark((function e(n){var s,i,o,l;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),(s=new FormData).append("image",d),e.prev=3,k(!0),e.next=7,m.a.post("/api/imgboxes/upload",s);case 7:return i=e.sent,o=i.data.secure_url,l={imgPath:o,text:p,user:w,id:y},e.next=12,m.a.post("/api/imgboxes",l,G);case 12:k(!S),h(l.imgPath),f(""),c(),r("Image uploaded!"),a(!t),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(3),console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[3,20]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsx)(v,{children:Object(o.jsxs)(u.a,{onSubmit:I,children:[Object(o.jsxs)(u.a.Group,{className:"mb-3",children:[Object(o.jsx)(u.a.Label,{children:"Choose Image"}),Object(o.jsx)(u.a.Control,{accept:"image/*",type:"file",id:"image",name:"image",onChange:function(e){h(e.target.files[0])}})]}),Object(o.jsx)(u.a.Group,{controlId:"text",className:"mb-3",children:Object(o.jsx)(u.a.Control,{type:"textarea",rows:"5",placeholder:"Add text",value:p,onChange:function(e){return f(e.target.value)}})}),Object(o.jsx)(b.a,{className:"save-img-btn",type:"submit",children:"Add This Image to the Vision Board"})]})})},te=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),s=Object(j.a)(r,2),i=s[0],l=s[1],d=Object(n.useState)(void 0),u=Object(j.a)(d,2),b=u[0],h=u[1],O=Object(n.useState)(""),x=Object(j.a)(O,2),p=x[0],v=x[1],f=localStorage.getItem("authToken"),g=function(){m.a.get("/api/imgboxes",{headers:{Authorization:"Bearer ".concat(f)}}).then((function(e){console.log(e),c(e.data)})).catch((function(e){var t=e.response.data.message;h(t)}))};return Object(n.useEffect)((function(){g()}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)($,{handleShowImgBoxForm:function(){l(!i)}}),i&&Object(o.jsx)(ee,{boxes:a,addBox:i,setAddBox:l,refreshImgBoxes:g,setMessage:v}),b&&Object(o.jsx)(N,{variant:"danger",children:b}),Object(o.jsx)(N,{children:p}),Object(o.jsx)("h1",{children:"Instructions on how to create a vision board. "})]})};var ae=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(A,{}),Object(o.jsxs)(i.f,{children:[Object(o.jsx)(i.d,{path:"/",element:Object(o.jsx)(l,{})}),Object(o.jsx)(i.d,{path:"/profile",element:Object(o.jsx)(P,{})}),Object(o.jsx)(i.d,{path:"/videos",element:Object(o.jsx)(H,{})}),Object(o.jsx)(i.d,{path:"/visionboards",element:Object(o.jsx)(Z,{})}),Object(o.jsx)(i.d,{path:"/visionboards/:id",element:Object(o.jsx)(te,{})}),Object(o.jsx)(i.d,{path:"/signup",element:Object(o.jsx)(S,{})}),Object(o.jsx)(i.d,{path:"/login",element:Object(o.jsx)(w,{})})]})]})},ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,140)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(d.BrowserRouter,{children:Object(o.jsx)(k,{children:Object(o.jsx)(ae,{})})}),document.getElementById("root")),ne()},91:function(e,t,a){},92:function(e,t,a){}},[[124,1,2]]]);
//# sourceMappingURL=main.9f110fa1.chunk.js.map