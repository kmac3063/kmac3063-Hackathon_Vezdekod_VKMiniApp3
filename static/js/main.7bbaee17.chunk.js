(this["webpackJsonpmini-app"]=this["webpackJsonpmini-app"]||[]).push([[0],{144:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(17),r=c.n(a),s=c(12),i=c.n(s),o=c(22),u=c.n(o),b=c(26),j=c(7),p=c(6),d=(c(142),c(5)),f=function(e){var t=e.id,c=(e.go,e.fetchedUser,e.pos),a=e.gyrData,r=Object(n.useState)(0),s=Object(j.a)(r,2),i=s[0],o=s[1],u=Object(n.useState)(0),b=Object(j.a)(u,2),f=b[0],h=b[1],O=Object(n.useState)(0),l=Object(j.a)(O,2),x=(l[0],l[1],Object(n.useState)(0)),g=Object(j.a)(x,2),y=(g[0],g[1],Object(n.useState)({a:0,b:0,c:0})),m=Object(j.a)(y,2);m[0],m[1];Object(n.useEffect)((function(){S(c.x,c.y)}),[c]);var v=function(e,t){return e[0]<=t[0]&&t[0]<=e[0]+20&&e[1]<=t[1]&&t[1]<=e[1]+20},A=function(e,t){var c=D();if(e<0||e>=320||t<0||t>=320)return!1;for(var n=[e,t],a=[e+10,t],r=[e,t+10],s=[e+10,t+10],i=0;i<c.length;i++){var o=c[i];if(v(o,n)||v(o,a)||v(o,r)||v(o,s))return!1}return!0},S=function(e,t){var c=i,n=f;(void 0===c||isNaN(c))&&(c=160),(void 0===n||isNaN(n))&&(n=160),A(c+t,n)?c+=t:c-=t,A(c,n+e)?n+=e:n-=e,o(c),h(n)},D=function(){for(var e=["0000000000000000","0000111111100000","0011100010111110","0010100010100010","0000000010101010","0111111110111010","0010100000101010","0111100111101010","0010100110001010","0010100000001010","0010111111101010","0010000001001010","0110111111001010","0010100000001110","0010111011111000","0000001000000000"],t=[],c=0;c<16;c++)for(var n=0;n<16;n++)"0"===e[c][n]&&t.push([20*n,20*c]);return t},w=D();return Object(d.jsxs)(p.d,{id:t,style:{backgroundColor:"#AAAAAA"},children:[Object(d.jsx)(p.c,{style:{margin:"auto",width:"100px",height:"100px",padding:"0px"},children:w.map((function(e){return Object(d.jsx)(p.c,{style:{position:"fixed",padding:"0",width:20,height:20,left:e[0],top:e[1],backgroundColor:"#DDDDDD"}},100*e[0]+e[1])}))}),Object(d.jsx)(p.c,{style:{position:"absolute",padding:"0",width:10,height:10,left:i,top:f,backgroundColor:"#000000"}}),Object(d.jsx)(p.c,{children:"5"}),Object(d.jsxs)(p.c,{style:{marginTop:"auto",marginBottom:"0"},children:["x=",a.x]}),Object(d.jsxs)(p.c,{children:["y=",a.y]}),Object(d.jsxs)(p.c,{children:["z=",a.z]})]})},h=function(){var e=Object(n.useState)("home"),t=Object(j.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(null),s=Object(j.a)(r,2),o=s[0],h=s[1],O=Object(n.useState)(Object(d.jsx)(p.e,{size:"large"})),l=Object(j.a)(O,2),x=l[0],g=l[1],y=Object(n.useState)([0,0]),m=Object(j.a)(y,2),v=m[0],A=m[1],S=Object(n.useState)({x:0,y:0,z:0}),D=Object(j.a)(S,2),w=D[0];D[1];Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.a.send("VKWebAppGyroscopeStart",{refresh_rate:20}),g(null),e.next=4,i.a.send("VKWebAppGetUserInfo");case 4:t=e.sent,h(t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.a.subscribe((function(e){var t,c,n=e.detail,a=n.type,r=n.data;if("VKWebAppUpdateConfig"===a){var s=document.createAttribute("scheme");s.value=r.scheme?r.scheme:"client_light",document.body.attributes.setNamedItem(s)}else"VKWebAppGyroscopeChanged"===a&&(t=r.x,c=r.y,t<.01&&c<.01||A(function(e,t){var c=Math.sqrt(e*e+t*t);return{x:e/c,y:t/c}}(r.x,r.y)))})),function(){e.apply(this,arguments)}()}),[]);return Object(d.jsx)(p.a,{children:Object(d.jsx)(p.b,{children:Object(d.jsx)(p.f,{activePanel:c,popout:x,children:Object(d.jsx)(f,{id:"home",fetchedUser:o,go:function(e){a(e.currentTarget.dataset.to)},pos:v,gyrData:w})})})})};i.a.send("VKWebAppInit"),r.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[144,1,2]]]);
//# sourceMappingURL=main.7bbaee17.chunk.js.map