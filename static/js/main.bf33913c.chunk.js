(this["webpackJsonpmini-app"]=this["webpackJsonpmini-app"]||[]).push([[0],{144:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(18),r=c.n(a),s=c(12),i=c.n(s),o=c(17),u=c.n(o),b=c(23),j=c(7),p=c(6),d=(c(142),c(5)),O=function(e){var t=e.id,c=(e.go,e.fetchedUser,e.pos),a=e.gyrData,r=Object(n.useState)(160),s=Object(j.a)(r,2),i=s[0],o=s[1],u=Object(n.useState)(160),b=Object(j.a)(u,2),O=b[0],l=b[1],f=Object(n.useState)(0),h=Object(j.a)(f,2),g=(h[0],h[1],Object(n.useState)(0)),x=Object(j.a)(g,2),v=(x[0],x[1],Object(n.useState)({a:0,b:0,c:0})),m=Object(j.a)(v,2);m[0],m[1];Object(n.useEffect)((function(){A(c.x,c.y)}),[c]);var y=function(e,t){return e[0]<=t[0]&&t[0]<=e[0]+20&&e[1]<=t[1]&&t[1]<=e[1]+20},S=function(e,t){var c=D();if(e<0||e>=320||t<0||t>=320)return!1;for(var n=[e,t],a=[e+10,t],r=[e,t+10],s=[e+10,t+10],i=0;i<c.length;i++){var o=c[i];if(y(o,n)||y(o,a)||y(o,r)||y(o,s))return!1}return!0},A=function(e,t){var c=i,n=O;(void 0===c||isNaN(c))&&(c=160),(void 0===n||isNaN(n))&&(n=160),console.log(c+" "+n),S(c+e,n)?c+=e:c-=e,S(c,n+t)?n+=t:n-=t,console.log(e+" "+t),o(c),l(n)},D=function(){for(var e=["0000000000000000","0000111111100000","0011100010111110","0010100010100010","0000000010101010","0111111110111010","0010100000101010","0111100111101010","0010100110001010","0010100000001010","0010111111101010","0010000001001010","0110111111001010","0010100000001110","0010111011111000","0000001000000000"],t=[],c=0;c<16;c++)for(var n=0;n<16;n++)"0"===e[c][n]&&t.push([20*n,20*c]);return t},w=D();return Object(d.jsxs)(p.d,{id:t,style:{backgroundColor:"#AAAAAA"},children:[Object(d.jsx)(p.c,{style:{margin:"auto",width:"100px",height:"100px",padding:"0px"},children:w.map((function(e){return Object(d.jsx)(p.c,{style:{position:"fixed",padding:"0",width:20,height:20,left:e[0],top:e[1],backgroundColor:"#DDDDDD"}},100*e[0]+e[1])}))}),Object(d.jsx)(p.c,{style:{position:"absolute",padding:"0",width:10,height:10,left:i,top:O,backgroundColor:"#000000"}}),Object(d.jsx)(p.c,{children:"1"}),Object(d.jsxs)(p.c,{style:{marginTop:"auto",marginBottom:"0"},children:["x=",a.x]}),Object(d.jsxs)(p.c,{children:["y=",a.y]}),Object(d.jsxs)(p.c,{children:["z=",a.z]})]})},l=function(){var e=Object(n.useState)("home"),t=Object(j.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(null),s=Object(j.a)(r,2),o=s[0],l=s[1],f=Object(n.useState)(Object(d.jsx)(p.e,{size:"large"})),h=Object(j.a)(f,2),g=h[0],x=h[1],v=Object(n.useState)([0,0]),m=Object(j.a)(v,2),y=m[0],S=m[1],A=Object(n.useState)({x:0,y:0,z:0}),D=Object(j.a)(A,2),w=D[0],k=D[1],C=Object(n.useState)(0),K=Object(j.a)(C,2),N=K[0],V=K[1],W=Object(n.useState)(0),z=Object(j.a)(W,2),I=z[0],U=z[1];Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.a.send("VKWebAppGyroscopeStart",{refresh_rate:1e3}),x(null),e.next=4,i.a.send("VKWebAppGetUserInfo");case 4:t=e.sent,l(t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.a.subscribe((function(e){var t=e.detail,c=t.type,n=t.data;if("VKWebAppUpdateConfig"===c){var a=document.createAttribute("scheme");a.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(a)}else if("VKWebAppGyroscopeChanged"===c){k(n);var r=function(e){var t=N+e.y,c=I+e.x;return V(t),U(c),[t,c]}(n);S(r)}})),function(){e.apply(this,arguments)}()}),[]);return Object(d.jsx)(p.a,{children:Object(d.jsx)(p.b,{children:Object(d.jsx)(p.f,{activePanel:c,popout:g,children:Object(d.jsx)(O,{id:"home",fetchedUser:o,go:function(e){a(e.currentTarget.dataset.to)},pos:y,gyrData:w})})})})};i.a.send("VKWebAppInit"),r.a.render(Object(d.jsx)(l,{}),document.getElementById("root"))}},[[144,1,2]]]);
//# sourceMappingURL=main.bf33913c.chunk.js.map