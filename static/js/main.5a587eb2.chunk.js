(this["webpackJsonpedom-react"]=this["webpackJsonpedom-react"]||[]).push([[0],{11:function(e,t,c){e.exports={screen:"HomeScreen_screen__1zQsn",content:"HomeScreen_content__3u22D",mainBlock:"HomeScreen_mainBlock__1DwAS",logoContainer:"HomeScreen_logoContainer__py7SH",textContainer:"HomeScreen_textContainer__3qnBy",slogan:"HomeScreen_slogan__3DL_U",bgVideo:"HomeScreen_bgVideo__kVll4"}},14:function(e,t,c){e.exports={screenContainer:"Screen_screenContainer__1j0Ti",screenHeader:"Screen_screenHeader__DvJg9",screenContent:"Screen_screenContent__1i6Dn",mapContainer:"Screen_mapContainer__2pbQ2"}},19:function(e,t,c){e.exports={nav_link:"CustomNavLink_nav_link__-zIij",nav_link_text:"CustomNavLink_nav_link_text__1P-0q",icon:"CustomNavLink_icon__-rYYv",is_active:"CustomNavLink_is_active__xmoiQ"}},23:function(e,t,c){e.exports={loaderContainer:"Loader_loaderContainer__19ipN",lds_default:"Loader_lds_default__2mQvn"}},26:function(e,t,c){e.exports={logo:"LogoWithHeader_logo__1Xkal",logo_container:"LogoWithHeader_logo_container__TuRjb"}},31:function(e,t,c){e.exports={logoImg:"Logo_logoImg__3m3uE"}},38:function(e,t,c){},39:function(e,t,c){},54:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),s=c(16),i=c.n(s),r=(c(38),c(12)),o=c(17),j=c(3),l=(c(39),c(27)),d=c(30),m=c.n(d),b=c(1),x=function(e){var t=n.a.useState(0),c=Object(r.a)(t,2),a=c[0],s=c[1],i=n.a.useState(0),o=Object(r.a)(i,2),j=o[0],d=o[1],x=n.a.useRef(null),u={onStart:function(){return s(++a)},onStop:function(){return s(--a)}},O=e.onDragChange;return Object(b.jsx)(m.a,Object(l.a)(Object(l.a)({nodeRef:x,defaultPosition:{x:0,y:0},axis:"x",position:{x:j,y:0}},u),{},{onStop:function(e,t){t.x<j?(O(!0),d(-240)):(O(!1),d(0))},children:Object(b.jsxs)("div",{className:"box cursor-x",ref:x,children:[Object(b.jsx)("div",{className:"box_nav_icon ".concat(0===j?"":"box_nav_icon_active")}),e.children]})}))},u=c(23),O=c.n(u),h=function(){return Object(b.jsx)("div",{className:O.a.loaderContainer,children:Object(b.jsxs)("div",{className:O.a.lds_default,children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{})]})})},_=function(e){var t=e.children,c=n.a.useState(2),a=Object(r.a)(c,2),s=a[0],i=a[1],o=function(){return i(s-1)};return n.a.useEffect((function(){if(!(s<=0)){var e=setInterval(o,1e3);return function(){return clearInterval(e)}}}),[s]),Object(b.jsx)(b.Fragment,{children:0!==s?Object(b.jsx)(h,{}):t})},p=c(11),v=c.n(p),f=c.p+"static/media/bgVideo.688cc3a8.mp4",g=c.p+"static/media/logo-new.00e5acdc.png",N=c(31),C=c.n(N),k=function(){return Object(b.jsx)("img",{src:g,className:C.a.logoImg,alt:"Edom main logo png"})},H=function(){return Object(b.jsxs)("div",{className:v.a.screen,children:[Object(b.jsx)("video",{className:v.a.bgVideo,autoPlay:!0,loop:!0,muted:!0,children:Object(b.jsx)("source",{src:f,type:"video/mp4"})}),Object(b.jsx)("div",{className:v.a.content,children:Object(b.jsxs)("div",{className:v.a.mainBlock,children:[Object(b.jsx)("div",{className:v.a.logoContainer,children:Object(b.jsx)(k,{})}),Object(b.jsx)("div",{className:v.a.textContainer,children:Object(b.jsxs)("p",{className:v.a.slogan,children:["\u0417\u0430\u0433\u043e\u0440\u043e\u0434\u043d\u0438\u0435 ",Object(b.jsx)("br",{})," \u0435\u043d\u0435\u0440\u0433\u043e\u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0435 ",Object(b.jsx)("br",{})," \u0434\u043e\u043c\u0430"]})})]})})]})},S=c(5),L=(c(47),c(18)),D=c(32),I=c(14),P=c.n(I),w=c.p+"static/media/edom_townhouse.e687870e.jpeg",V=c(6),q=c.n(V),A=function(e){var t=e.imgPath,c=e.aboutProject;return Object(b.jsx)("div",{className:q.a.animetedGradient,children:Object(b.jsxs)("div",{className:q.a.headerContent,children:[Object(b.jsx)("img",{src:t,alt:"",className:q.a.objectHeaderImage}),Object(b.jsxs)("div",{className:q.a.objectHeaderInfo,children:[Object(b.jsx)("h2",{children:"\u0422\u0430\u0443\u043d\u0445\u0430\u0443\u0441 "}),Object(b.jsx)("h3",{children:"\u0437\u0430\u043a\u0440\u044b\u0442\u043e\u0433\u043e \u0442\u0438\u043f\u0430 \u043d\u0430 \u0434\u0432\u0435 \u0441\u0435\u043c\u044c\u0438"}),c?Object(b.jsxs)("ul",{className:q.a.aboutProjectList,children:[Object(b.jsxs)("li",{children:[Object(b.jsx)("p",{className:q.a.fieldName,children:"\u041f\u043b\u043e\u0449\u0430\u0434\u044c \u0434\u043e\u043c\u0430"}),Object(b.jsxs)("p",{className:q.a.fieldValue,children:[c.totalHouseArea," \u043c2"]})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("p",{className:q.a.fieldName,children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043f\u0430\u043b\u0435\u043d"}),Object(b.jsx)("p",{className:q.a.fieldValue,children:c.badroomsCount})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("p",{className:q.a.fieldName,children:"\u041a\u0440\u044b\u0442\u044b\u0435 \u043f\u0430\u0440\u043a\u043e-\u043c\u0435\u0441\u0442\u0430"}),Object(b.jsx)("p",{className:q.a.fieldValue,children:c.carsCanBeParcing})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("p",{className:q.a.fieldName,children:"\u041f\u043b\u043e\u0449\u0430\u0434\u044c \u0443\u0447\u0430\u0441\u0442\u043a\u0430"}),Object(b.jsxs)("p",{className:q.a.fieldValue,children:[c.totalObjectArea," \u0441\u043e\u0442\u043e\u043a"]})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("p",{className:q.a.fieldName,children:"\u0426\u0435\u043d\u0430, \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0430\u0446\u0438\u044f"}),Object(b.jsxs)("p",{className:q.a.fieldValue,children:[c.totalPrice," $"]})]})]}):null]})]})})},E=function(){return Object(b.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6575650975005!2d30.1848206742669!3d50.42728005867663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDI1JzQxLjIiTiAzMMKwMTEnMDcuNSJF!5e0!3m2!1sru!2sua!4v1515096581549",title:"Edom Town House Location",width:"100%",height:"450",frameBorder:0,style:{border:0}})},B=function(){return Object(b.jsxs)(S.d,{className:P.a.objectStages,children:[Object(b.jsxs)(S.b,{children:[Object(b.jsx)(S.a,{children:Object(b.jsxs)("p",{children:["\u042d\u0442\u0430\u043f 1 ",Object(b.jsx)("br",{})," \u0424\u0443\u043d\u0434\u0430\u043c\u0435\u043d\u0442"]})}),Object(b.jsx)(S.a,{children:Object(b.jsxs)("p",{children:["\u042d\u0442\u0430\u043f 2 ",Object(b.jsx)("br",{})," \u0421\u0442\u0435\u043d\u044b"]})}),Object(b.jsx)(S.a,{children:Object(b.jsxs)("p",{children:["\u042d\u0442\u0430\u043f 3 ",Object(b.jsx)("br",{})," \u041e\u0442\u0434\u0435\u043b\u043a\u0430"]})})]}),Object(b.jsx)(S.c,{children:Object(b.jsx)("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quos ullam? Amet, harum, ullam reprehenderit hic corrupti voluptatem quibusdam aperiam excepturi fuga, ad dolorem fugit impedit assumenda voluptates possimus modi."})}),Object(b.jsx)(S.c,{children:Object(b.jsx)("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quos ullam? Amet, harum, ullam reprehenderit hic corrupti voluptatem quibusdam aperiam excepturi fuga, ad dolorem fugit impedit assumenda voluptates possimus modi."})}),Object(b.jsx)(S.c,{children:Object(b.jsx)("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quos ullam? Amet, harum, ullam reprehenderit hic corrupti voluptatem quibusdam aperiam excepturi fuga, ad dolorem fugit impedit assumenda voluptates possimus modi."})})]})},M=function(){return Object(b.jsxs)("div",{className:P.a.screenContainer,children:[Object(b.jsx)("div",{className:P.a.screenHeader,children:Object(b.jsx)(A,{imgPath:w,aboutProject:{totalHouseArea:125,badroomsCount:4,carsCanBeParcing:4,totalObjectArea:5,totalPrice:1e5}})}),Object(b.jsx)("div",{className:P.a.screenContent,children:Object(b.jsxs)(S.d,{children:[Object(b.jsxs)(S.b,{children:[Object(b.jsxs)(S.a,{children:[Object(b.jsx)(L.b,{}),"\u041e\u0431\u0449\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"]}),Object(b.jsxs)(S.a,{children:[Object(b.jsx)(D.a,{}),"\u041a\u0430\u0440\u0442\u0430"]}),Object(b.jsxs)(S.a,{children:[Object(b.jsx)(L.a,{}),"\u042d\u0442\u0430\u043f\u044b \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430"]}),Object(b.jsxs)(S.a,{children:[Object(b.jsx)(L.a,{}),"\u0424\u043e\u0442\u043e \u043e\u0431\u044c\u0435\u043a\u0442\u0430"]})]}),Object(b.jsx)(S.c,{className:P.a.mapContainer,children:Object(b.jsx)(E,{})}),Object(b.jsx)(S.c,{children:Object(b.jsx)("h2",{children:"\u041e\u0431\u0449\u0430\u044f \u0438\u043d\u0444\u0430 \u043e\u0431 \u043f\u0440\u043e\u0435\u043a\u0442\u0435"})}),Object(b.jsx)(S.c,{children:Object(b.jsx)(B,{})})]})})]})},y=c(19),F=c.n(y),T=function(e){var t=e.link,c=(e.icon,e.text);return Object(b.jsx)(o.b,{activeClassName:F.a.is_active,className:F.a.nav_link,to:"/".concat(t),children:Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("p",{className:F.a.nav_link_text,children:c})})})},Q=c(26),G=c.n(Q),z=function(e){var t=e.img;return Object(b.jsx)("div",{className:G.a.logo_container,children:Object(b.jsx)("img",{src:t||g,className:G.a.logo,alt:"Edom logo"})})},J=[{text:"\u0422\u0430\u0443\u043d\u0425\u0430\u0443\u0441",link:"home",path:"/home",screen:Object(b.jsx)(M,{})},{text:"\u041a\u0430\u0440\u043a\u0430\u0441\u043d\u044b\u0439 \u0413\u0438\u0433\u0430\u043d\u0442",link:"home2",path:"/home2",screen:Object(b.jsx)(M,{})},{text:"\u041a\u0440\u0435\u043f\u043e\u0441\u0442\u044c",link:"home3",path:"/home3",screen:Object(b.jsx)(M,{})}],Y=[{text:"\u041d\u043e\u0432\u044b\u0439 \u0434\u043e\u043c",link:"home4",path:"/home4",screen:Object(b.jsx)(M,{})},{text:"\u041d\u043e\u0432\u044b\u0439 \u0434\u043e\u043c 2",link:"home5",path:"/home5",screen:Object(b.jsx)(M,{})},{text:"\u041d\u043e\u0432\u044b\u0439 \u0434\u043e\u043c 3",link:"home6",path:"/home6",screen:Object(b.jsx)(M,{})}],R=[{exact:!0,text:"\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438",link:"EDOM",path:"/EDOM",screen:Object(b.jsx)(H,{})},{text:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",link:"home8",path:"/home8",screen:Object(b.jsx)(H,{})},{text:"\u0418\u043d\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b",link:"home9",path:"/home9",screen:Object(b.jsx)(H,{})}];var W=function(){var e=n.a.useState(!1),t=Object(r.a)(e,2),c=t[0],a=t[1],s=[].concat(R,Y,J);return Object(b.jsx)(o.a,{children:Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)("div",{className:"control",children:Object(b.jsxs)(x,{onDragChange:a,children:[Object(b.jsx)(z,{}),Object(b.jsx)("div",{className:"separator_line"}),Object(b.jsx)("p",{className:"separator_header",children:"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b"}),Object(b.jsx)("div",{className:"separator_line"}),J.map((function(e,t){return Object(b.jsx)(T,{link:e.link,text:e.text},t)})),Object(b.jsx)("div",{className:"separator_line"}),Object(b.jsx)("p",{className:"separator_header",children:"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b"}),Object(b.jsx)("div",{className:"separator_line"}),Y.map((function(e,t){return Object(b.jsx)(T,{link:e.link,text:e.text},t)})),Object(b.jsx)("div",{className:"separator_line"}),Object(b.jsx)("p",{className:"separator_header",children:"\u0414\u0440\u0443\u0433\u043e\u0435"}),Object(b.jsx)("div",{className:"separator_line"}),R.map((function(e,t){return Object(b.jsx)(T,{link:e.link,text:e.text},t)}))]})}),Object(b.jsx)("div",{className:"window ".concat(c&&"window_fullWidth"),children:Object(b.jsx)(j.c,{children:s.map((function(e,t){return Object(b.jsx)(j.a,{path:e.path,children:Object(b.jsx)(_,{children:e.screen})},t)}))})})]})})},K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,55)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(W,{})}),document.getElementById("root")),K()},6:function(e,t,c){e.exports={headerContent:"ObjectHeader_headerContent__2bbhZ",objectHeaderImage:"ObjectHeader_objectHeaderImage__1MHle",objectHeaderInfo:"ObjectHeader_objectHeaderInfo__Q6qCx",aboutProjectList:"ObjectHeader_aboutProjectList__moCka",fieldName:"ObjectHeader_fieldName__3EHQq",fieldValue:"ObjectHeader_fieldValue__rbY-6",animetedGradient:"ObjectHeader_animetedGradient__2GxFb",moveGradient:"ObjectHeader_moveGradient__3pYM6"}}},[[54,1,2]]]);
//# sourceMappingURL=main.5a587eb2.chunk.js.map