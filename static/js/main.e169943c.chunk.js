(this["webpackJsonpmini-app"]=this["webpackJsonpmini-app"]||[]).push([[0],{144:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(18),r=n.n(a),s=n(12),i=n.n(s),o=n(17),u=n.n(o),b=n(23),p=n(7),j=n(6),d=(n(142),n(5)),f=function(e){var t=e.id,n=(e.go,e.fetchedUser,e.pos),a=e.gyrData,r=Object(c.useState)(0),s=Object(p.a)(r,2),i=s[0],o=s[1],u=Object(c.useState)(0),b=Object(p.a)(u,2),f=b[0],l=b[1],h=Object(c.useState)(0),O=Object(p.a)(h,2),x=(O[0],O[1],Object(c.useState)(0)),g=Object(p.a)(x,2),y=(g[0],g[1],Object(c.useState)({a:0,b:0,c:0})),m=Object(p.a)(y,2);m[0],m[1];Object(c.useEffect)((function(){S(n.x,n.y)}),[n]);var v=function(e,t){return e[0]<=t[0]&&t[0]<=e[0]+20&&e[1]<=t[1]&&t[1]<=e[1]+20},A=function(e,t){var n=w();if(e<0||e>=320||t<0||t>=320)return!1;for(var c=[e,t],a=[e+10,t],r=[e,t+10],s=[e+10,t+10],i=0;i<n.length;i++){var o=n[i];if(v(o,c)||v(o,a)||v(o,r)||v(o,s))return!1}return!0},S=function(e,t){var n=i,c=f;(void 0===n||isNaN(n))&&(n=160),(void 0===c||isNaN(c))&&(c=160),console.log(n+" "+c),A(n+e,c)?n+=e:n-=e,A(n,c+t)?c+=t:c-=t,o(n),l(c)},w=function(){for(var e=["0000000000000000","0000111111100000","0011100010111110","0010100010100010","0000000010101010","0111111110111010","0010100000101010","0111100111101010","0010100110001010","0010100000001010","0010111111101010","0010000001001010","0110111111001010","0010100000001110","0010111011111000","0000001000000000"],t=[],n=0;n<16;n++)for(var c=0;c<16;c++)"0"===e[n][c]&&t.push([20*c,20*n]);return t},D=w();return Object(d.jsxs)(j.d,{id:t,style:{backgroundColor:"#AAAAAA"},children:[Object(d.jsx)(j.c,{style:{margin:"auto",width:"100px",height:"100px",padding:"0px"},children:D.map((function(e){return Object(d.jsx)(j.c,{style:{position:"fixed",padding:"0",width:20,height:20,left:e[0],top:e[1],backgroundColor:"#DDDDDD"}},100*e[0]+e[1])}))}),Object(d.jsx)(j.c,{style:{position:"absolute",padding:"0",width:10,height:10,left:i,top:f,backgroundColor:"#000000"}}),Object(d.jsx)(j.c,{children:"1"}),Object(d.jsxs)(j.c,{style:{marginTop:"auto",marginBottom:"0"},children:["x=",a.x]}),Object(d.jsxs)(j.c,{children:["y=",a.y]}),Object(d.jsxs)(j.c,{children:["z=",a.z]})]})},l=function(){var e=Object(c.useState)("home"),t=Object(p.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),s=Object(p.a)(r,2),o=s[0],l=s[1],h=Object(c.useState)(Object(d.jsx)(j.e,{size:"large"})),O=Object(p.a)(h,2),x=O[0],g=O[1],y=Object(c.useState)([0,0]),m=Object(p.a)(y,2),v=m[0],A=m[1],S=Object(c.useState)({x:0,y:0,z:0}),w=Object(p.a)(S,2),D=w[0];w[1];Object(c.useEffect)((function(){function e(){return(e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.a.send("VKWebAppGyroscopeStart",{refresh_rate:1e3}),g(null),e.next=4,i.a.send("VKWebAppGetUserInfo");case 4:t=e.sent,l(t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=Object(b.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setInterval((function(){A({x:1,y:-1})}),100);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.a.subscribe((function(e){var t=e.detail,n=t.type,c=t.data;if("VKWebAppUpdateConfig"===n){var a=document.createAttribute("scheme");a.value=c.scheme?c.scheme:"client_light",document.body.attributes.setNamedItem(a)}else"VKWebAppGyroscopeChanged"===n&&A({x:10*c.x,y:10*c.y})})),function(){e.apply(this,arguments)}(),function(){t.apply(this,arguments)}()}),[]);return Object(d.jsx)(j.a,{children:Object(d.jsx)(j.b,{children:Object(d.jsx)(j.f,{activePanel:n,popout:x,children:Object(d.jsx)(f,{id:"home",fetchedUser:o,go:function(e){a(e.currentTarget.dataset.to)},pos:v,gyrData:D})})})})};i.a.send("VKWebAppInit"),r.a.render(Object(d.jsx)(l,{}),document.getElementById("root"))}},[[144,1,2]]]);
//# sourceMappingURL=main.e169943c.chunk.js.map