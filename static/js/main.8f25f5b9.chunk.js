(this["webpackJsonpmini-app"]=this["webpackJsonpmini-app"]||[]).push([[0],{144:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(17),r=c.n(n),s=c(12),o=c.n(s),i=c(22),u=c.n(i),b=c(26),j=c(7),d=c(6),p=(c(142),c(5)),l=function(e){var t=e.id,c=(e.go,e.fetchedUser,e.pos),n=e.gyrData,r=Object(a.useState)(160),s=Object(j.a)(r,2),o=s[0],i=s[1],u=Object(a.useState)(160),b=Object(j.a)(u,2),l=b[0],O=b[1],f=Object(a.useState)(0),h=Object(j.a)(f,2),x=(h[0],h[1],Object(a.useState)(0)),g=Object(j.a)(x,2),v=(g[0],g[1],Object(a.useState)({a:0,b:0,c:0})),y=Object(j.a)(v,2);y[0],y[1];Object(a.useEffect)((function(){A(c.x,c.y)}),[c]);var m=function(e,t){return e[0]<=t[0]&&t[0]<=e[0]+20&&e[1]<=t[1]&&t[1]<=e[1]+20},S=function(e,t){var c=N();if(e<0||e>=320||t<0||t>=320)return!1;for(var a=[e,t],n=[e+10,t],r=[e,t+10],s=[e+10,t+10],o=0;o<c.length;o++){var i=c[o];if(m(i,a)||m(i,n)||m(i,r)||m(i,s))return!1}return!0},A=function(e,t){var c=o,a=l;(void 0===c||isNaN(c))&&(c=160),(void 0===a||isNaN(a))&&(a=160),(void 0===e||isNaN(e))&&(e=0),(void 0===t||isNaN(t))&&(t=0),console.log(c+" "+a),S(c+e,a)?c+=e:c-=e,S(c,a+t)?a+=t:a-=t,console.log(e+" "+t),i(c),O(a)},N=function(){for(var e=["0000000000000000","0000111111100000","0011100010111110","0010100010100010","0000000010101010","0111111110111010","0010100000101010","0111100111101010","0010100110001010","0010100000001010","0010111111101010","0010000001001010","0110111111001010","0010100000001110","0010111011111000","0000001000000000"],t=[],c=0;c<16;c++)for(var a=0;a<16;a++)"0"===e[c][a]&&t.push([20*a,20*c]);return t},D=N();return Object(p.jsxs)(d.d,{id:t,style:{backgroundColor:"#AAAAAA"},children:[Object(p.jsx)(d.c,{style:{margin:"auto",width:"100px",height:"100px",padding:"0px"},children:D.map((function(e){return Object(p.jsx)(d.c,{style:{position:"fixed",padding:"0",width:20,height:20,left:e[0],top:e[1],backgroundColor:"#DDDDDD"}},100*e[0]+e[1])}))}),Object(p.jsx)(d.c,{style:{position:"absolute",padding:"0",width:10,height:10,left:o,top:l,backgroundColor:"#000000"}}),Object(p.jsx)(d.c,{children:"7"}),Object(p.jsxs)(d.c,{style:{marginTop:"auto",marginBottom:"0"},children:["x=",n.x]}),Object(p.jsxs)(d.c,{children:["y=",n.y]}),Object(p.jsxs)(d.c,{children:["z=",n.z]})]})},O=function(){var e=Object(a.useState)("home"),t=Object(j.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(null),s=Object(j.a)(r,2),i=s[0],O=s[1],f=Object(a.useState)(Object(p.jsx)(d.e,{size:"large"})),h=Object(j.a)(f,2),x=h[0],g=h[1],v=Object(a.useState)([0,0]),y=Object(j.a)(v,2),m=y[0],S=y[1],A=Object(a.useState)({x:0,y:0,z:0}),N=Object(j.a)(A,2),D=N[0],w=N[1],z=Object(a.useState)(0),k=Object(j.a)(z,2),C=k[0],K=k[1],V=Object(a.useState)(0),W=Object(j.a)(V,2),I=W[0],U=W[1];Object(a.useEffect)((function(){function e(){return(e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.a.send("VKWebAppGyroscopeStart",{refresh_rate:20}),g(null),e.next=4,o.a.send("VKWebAppGetUserInfo");case 4:t=e.sent,O(t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.a.subscribe((function(e){var t=e.detail,c=t.type,a=t.data;if("VKWebAppUpdateConfig"===c){var n=document.createAttribute("scheme");n.value=a.scheme?a.scheme:"client_light",document.body.attributes.setNamedItem(n)}else if("VKWebAppGyroscopeChanged"===c){w({x:a.x,y:a.y,z:a.z});var r=function(e){console.log("zhopa");var t=C+100*e.y,c=I+100*e.x;return K(t),U(c),[t,c]}(a);S(r)}})),function(){e.apply(this,arguments)}()}),[]);return Object(p.jsx)(d.a,{children:Object(p.jsx)(d.b,{children:Object(p.jsx)(d.f,{activePanel:c,popout:x,children:Object(p.jsx)(l,{id:"home",fetchedUser:i,go:function(e){n(e.currentTarget.dataset.to)},pos:m,gyrData:D})})})})};o.a.send("VKWebAppInit"),r.a.render(Object(p.jsx)(O,{}),document.getElementById("root"))}},[[144,1,2]]]);
//# sourceMappingURL=main.8f25f5b9.chunk.js.map