(this["webpackJsonpschat-admin"]=this["webpackJsonpschat-admin"]||[]).push([[0],{152:function(e,t,n){},153:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),o=n.n(c),i=(n(98),n(59)),s=n(10),l=(n(99),n(15)),d=n(202),j=n(201),u=n(197),p=n(210),b=n(212),h=n(204),x=n(198),f=n(193),m=n(200),O=n(196),g=n(83),v=n.n(g),w=n(203),y=n(54),k=n(18),C=n(8),F=n(192),S="Digi Support Chat",P=240,N=Object(F.a)((function(e){var t;return{root:{display:"flex",flexGrow:1,padding:2,backgroundColor:"#F4F6F8"},formRoot:{"& > *":{},padding:"15px 0px 15px 0px"},input:{width:"100%"},title:{fontSize:"1.3em",fontWeight:500,color:"#333"},gridTitle:{display:"inline",marginTop:"14px"},drawer:Object(C.a)({},e.breakpoints.up("sm"),{width:P,flexShrink:0}),appBar:(t={},Object(C.a)(t,e.breakpoints.up("sm"),{width:"calc(100% - ".concat(P,"px)"),marginLeft:P}),Object(C.a)(t,"backgroundColor","#0f0679"),t),menuButton:Object(C.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:{marginTop:65},drawerPaper:{width:P},content:{flexGrow:1,padding:e.spacing(1),backgroundColor:"#F6F5F5",maxHeight:"1px"},paper:{padding:e.spacing(2),textAlign:"center"},avaIcon:{background:"#ffffff",width:30,height:30,color:"#514487"},colorReceived:{color:"grey",borderColor:"grey"},colorInTransit:{color:"orange",borderColor:"orange"},colorReady:{color:"#0CB6E1"},colorDelivered:{color:"green"},colorOnHold:{color:"#ff2f4c"},packStatusPanel:{color:"white"},purpleTitle:{fontWeight:500,fontSize:"1.2em",color:"#2D0C57"},inline:{display:"inline"}}})),T=n.p+"static/media/logo.ce2c20c8.svg",B=n(2);var E=n(199),D=n(82),R=n.n(D),z=n(25),I=n.n(z),L=n(35),W=n(195),A=n(213),H=(n(104),n(105)),M=n(124),G={domain:"https://jsonplaceholder.typicode.com/"};G.domain="https://jsonplaceholder.typicode.com/",H.defaults.timeout=6e3;var J=H.create({baseURL:G.domain,timeout:9e3});function U(){return M.get("cb_token",{path:"/",domain:".shippcartja.com"})}function Y(e,t,n){return _.apply(this,arguments)}function _(){return(_=Object(L.a)(I.a.mark((function e(t,n,a){var r,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J({method:t,url:n,data:a,headers:{Authorization:"Bearer "+U()}});case 3:return r=e.sent,e.abrupt("return",r);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response){e.next=12;break}if(403!==e.t0.response.status){e.next=12;break}return e.abrupt("return",!1);case 12:if(!e.t0.response){e.next=16;break}throw new Error(null===(c=e.t0.response)||void 0===c?void 0:c.data.message);case 16:throw new Error("Request timeout.");case 17:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var q=r.a.createContext(),K=r.a.createContext();function Q(){return Object(a.useContext)(q)}function V(e){var t=e.children,n=Object(a.useState)({channel:"users"}),r=Object(l.a)(n,2),c=r[0],o=r[1];return Object(B.jsx)(q.Provider,{value:c,children:Object(B.jsx)(K.Provider,{value:function(e){o(e)},children:t})})}var X=Object(F.a)((function(e){return{root:{width:"100%",maxWidth:"36ch",backgroundColor:e.palette.background.paper},inline:{display:"inline"}}}));var Z=function(){var e=X(),t=r.a.useState([]),n=Object(l.a)(t,2),c=n[0],o=n[1],i=Q(),s=Object(a.useContext)(K);Object(a.useEffect)((function(){console.log(i,"config"),d()}),[i]);var d=function(){var e=Object(L.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function j(){return(j=Object(L.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y("get","/users/",[]);case 3:t=e.sent,o(t.data.slice(0,3)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return r.a.useEffect((function(){!function(){j.apply(this,arguments)}()}),[]),Object(B.jsx)(B.Fragment,{children:null===c||void 0===c?void 0:c.map((function(t){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)(f.a,{alignItems:"flex-start",button:!0,onClick:function(){return s({channel:t.name})},children:[Object(B.jsx)(W.a,{children:Object(B.jsx)(A.a,{alt:t.name,src:"/static/images/avatar/1.jpg"})}),Object(B.jsx)(O.a,{primary:t.name,secondary:Object(B.jsxs)(r.a.Fragment,{children:[Object(B.jsx)(y.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary"})," "+t.company.catchPhrase]})})]}),Object(B.jsx)(u.a,{variant:"inset",component:"li"})]})}))})};var $=function(e){var t=Object(s.f)(),n=e.window,a=N(),c=Object(k.a)(),o=r.a.useState(!1),i=Object(l.a)(o,2),g=i[0],C=i[1],F=function(){C(!g)};console.log(e.comp);var P=Object(B.jsxs)("div",{children:[Object(B.jsxs)("div",{style:{textAlign:"center",width:"auto",padding:5},children:[Object(B.jsx)("img",{alt:"logo",style:{width:50},src:T}),Object(B.jsx)("div",{style:{fontSize:"1.3em"},children:S})]}),Object(B.jsx)("div",{className:a.toolbar,style:{marginTop:0}}),Object(B.jsx)(u.a,{}),Object(B.jsx)(x.a,{children:Object(B.jsx)("div",{style:{height:"50vh",overflowY:"scroll"},children:Object(B.jsx)(Z,{})})}),Object(B.jsx)(u.a,{}),Object(B.jsx)(x.a,{children:[["Dasboard","/dashboard",Object(B.jsx)(R.a,{})],["Sign Out","/signout",Object(B.jsx)(E.a,{})]].map((function(e,n){return Object(B.jsxs)(f.a,{button:!0,onClick:function(n){return function(e,n){t.push(""+n[1]),C(!1)}(0,e)},children:[Object(B.jsx)(m.a,{children:e[2]}),Object(B.jsx)(O.a,{primary:e[0]})]},e[0])}))}),Object(B.jsx)(u.a,{})]}),D=void 0!==n?function(){return n().document.body}:void 0;return Object(B.jsxs)("div",{className:a.root,children:[Object(B.jsx)(j.a,{}),Object(B.jsx)(d.a,{position:"fixed",className:a.appBar,children:Object(B.jsxs)(w.a,{children:[Object(B.jsx)(h.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:F,className:a.menuButton,children:Object(B.jsx)(v.a,{})}),Object(B.jsx)(y.a,{variant:"h6",noWrap:!0,children:"Chatting with Leanne1"})]})}),Object(B.jsxs)("nav",{className:a.drawer,"aria-label":"mailbox folders",children:[Object(B.jsx)(b.a,{smUp:!0,implementation:"css",children:Object(B.jsx)(p.a,{container:D,variant:"temporary",anchor:"rtl"===c.direction?"right":"left",open:g,onClose:F,classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0},children:P})}),Object(B.jsx)(b.a,{xsDown:!0,implementation:"css",children:Object(B.jsx)(p.a,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0,children:P})})]}),Object(B.jsxs)("main",{className:a.content,children:[Object(B.jsx)("div",{className:a.toolbar}),e.comp]})]})};n(41),n(3),n(84),n(211),n(205),n(209);Object(F.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,width:"100%"}}}));var ee=n(206),te=n(207),ne=n(208),ae=(n(152),Object(F.a)((function(e){return{root:{width:"100%",maxWidth:"36ch",backgroundColor:e.palette.background.paper},inline:{display:"inline"}}})));var re=function(e){ae();var t=r.a.useState([]),n=Object(l.a)(t,2),a=n[0],c=n[1],o=Q();function i(){return(i=Object(L.a)(I.a.mark((function e(t){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y("get","/posts/",[]);case 3:n=e.sent,c(n.data.slice(0,40)),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return r.a.useEffect((function(){console.log(o.channel),function(e){i.apply(this,arguments)}(o.channel)}),[o]),Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)(ee.a,{container:!0,children:[Object(B.jsx)(ee.a,{item:!0,xs:12,children:Object(B.jsx)("div",{style:{maxHeight:"calc(100vh - 150px)",overflowY:"scroll"},className:"imessage",children:null===a||void 0===a?void 0:a.map((function(e,t){return Object(B.jsx)("p",{className:t%2===0?"from-me":"from-them  margin-b_one",children:e.body.substring(0,10)})}))})}),Object(B.jsxs)(ee.a,{item:!0,xs:12,style:{display:"flex"},children:[Object(B.jsx)("textarea",{style:{width:"100%",height:50,fontSize:"1.1em",marginTop:"10",flex:100},rows:"3"}),Object(B.jsx)(te.a,{variant:"contained",style:{flex:1},children:Object(B.jsx)(ne.a,{style:{color:"#666"}})})]})]})})};var ce=function(){return Object(B.jsx)(i.a,{children:Object(B.jsxs)(s.c,{children:[" ",Object(B.jsx)(V,{}),Object(B.jsx)(s.a,{path:"/",exact:!0,children:Object(B.jsx)($,{comp:Object(B.jsx)(re,{})})}),Object(B.jsx)(s.a,{path:"/chat",exact:!0,children:Object(B.jsx)(re,{})}),Object(B.jsx)(s.a,{path:"/test",exact:!0,children:Object(B.jsx)("div",{children:"Tester"})})]})})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,215)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};o.a.render(Object(B.jsx)(r.a.StrictMode,{children:Object(B.jsx)(ce,{})}),document.getElementById("root")),oe()},98:function(e,t,n){},99:function(e,t,n){}},[[153,1,2]]]);
//# sourceMappingURL=main.4b61f089.chunk.js.map