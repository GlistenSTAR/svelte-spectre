var le=Object.defineProperty;var A=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var G=(l,e,t)=>e in l?le(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t,p=(l,e)=>{for(var t in e||(e={}))ne.call(e,t)&&G(l,t,e[t]);if(A)for(var t of A(e))ae.call(e,t)&&G(l,t,e[t]);return l};import{C as ie,S as oe,i as re,s as ce,j as B,m as S,o as C,x as b,u as h,v as V,_ as ue,T as fe,B as F,e as H,k as J,c as M,a as N,n as K,d as L,b as me,D as O,E as Q,f as _e,F as E,ad as de,r as W,w as X,W as be,X as ge,Y as ve,p as he,a8 as pe,J as R,aa as Ie,ah as ye,K as ke,L as De,ai as je}from"./vendor-54f68cb8.js";import{P as qe}from"./Progress-2dbf39be.js";import{I as Ee}from"./Icon-17d8d781.js";import{I as Pe}from"./IconButton-9a350f8a.js";/* empty css                                              */const Te={closable:!0,pos:"top_center"};function Be(){const{subscribe:l,set:e,update:t}=ie([]);let s=0;const r=(f={})=>{f.id=s++,t(d=>[...d,p(p({},Te),f)])};return{subscribe:l,send:r,close:f=>{t(d=>[...d.filter(y=>y.id!==f)])},clear:()=>e([]),default:(f={})=>r(p({msg:"default",icon:"message"},f)),error:(f={})=>r(p({type:"error",icon:"stop"},f)),warning:(f={})=>r(p({type:"warning",icon:"mail"},f)),primary:(f={})=>r(p({type:"primary",icon:"flag"},f)),success:(f={})=>r(p({type:"success",icon:"check"},f))}}const Se=Be();function U(l){let e,t;return e=new Ee({props:{icon:l[1]}}),{c(){B(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,r){C(e,s,r),t=!0},p(s,r){const m={};r&2&&(m.icon=s[1]),e.$set(m)},i(s){t||(b(e.$$.fragment,s),t=!0)},o(s){h(e.$$.fragment,s),t=!1},d(s){V(e,s)}}}function Z(l){let e,t;return e=new Pe({props:{icon:"cross"}}),e.$on("click",l[7]),{c(){B(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,r){C(e,s,r),t=!0},p:fe,i(s){t||(b(e.$$.fragment,s),t=!0)},o(s){h(e.$$.fragment,s),t=!1},d(s){V(e,s)}}}function w(l){let e,t;return e=new qe({props:{value:l[5],invert:l[4]}}),{c(){B(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,r){C(e,s,r),t=!0},p(s,r){const m={};r&32&&(m.value=s[5]),r&16&&(m.invert=s[4]),e.$set(m)},i(s){t||(b(e.$$.fragment,s),t=!0)},o(s){h(e.$$.fragment,s),t=!1},d(s){V(e,s)}}}function Ce(l){let e,t,s,r,m,I,f,d,y,g,o=l[1]&&U(l);const D=l[17].default,_=ue(D,l,l[16],null);let i=l[3]&&Z(l),u=l[2]&&w(l),j=[l[9],{class:I="toast "+(l[0]&&`toast-${l[0]}`)}],v={};for(let n=0;n<j.length;n+=1)v=F(v,j[n]);return{c(){e=H("div"),o&&o.c(),t=J(),s=H("div"),_&&_.c(),r=J(),i&&i.c(),m=J(),u&&u.c(),this.h()},l(n){e=M(n,"DIV",{class:!0});var c=N(e);o&&o.l(c),t=K(c),s=M(c,"DIV",{class:!0});var k=N(s);_&&_.l(k),k.forEach(L),r=K(c),i&&i.l(c),m=K(c),u&&u.l(c),c.forEach(L),this.h()},h(){me(s,"class","toast-content svelte-ixqwwb"),O(e,v),Q(e,"svelte-ixqwwb",!0)},m(n,c){_e(n,e,c),o&&o.m(e,null),E(e,t),E(e,s),_&&_.m(s,null),E(e,r),i&&i.m(e,null),E(e,m),u&&u.m(e,null),d=!0,y||(g=de(f=l[8].call(null,e,l[2]>0)),y=!0)},p(n,[c]){n[1]?o?(o.p(n,c),c&2&&b(o,1)):(o=U(n),o.c(),b(o,1),o.m(e,t)):o&&(W(),h(o,1,1,()=>{o=null}),X()),_&&_.p&&(!d||c&65536)&&be(_,D,n,n[16],d?ve(D,n[16],c,null):ge(n[16]),null),n[3]?i?(i.p(n,c),c&8&&b(i,1)):(i=Z(n),i.c(),b(i,1),i.m(e,m)):i&&(W(),h(i,1,1,()=>{i=null}),X()),n[2]?u?(u.p(n,c),c&4&&b(u,1)):(u=w(n),u.c(),b(u,1),u.m(e,null)):u&&(W(),h(u,1,1,()=>{u=null}),X()),O(e,v=he(j,[c&512&&n[9],(!d||c&1&&I!==(I="toast "+(n[0]&&`toast-${n[0]}`)))&&{class:I}])),f&&pe(f.update)&&c&4&&f.update.call(null,n[2]>0),Q(e,"svelte-ixqwwb",!0)},i(n){d||(b(o),b(_,n),b(i),b(u),d=!0)},o(n){h(o),h(_,n),h(i),h(u),d=!1},d(n){n&&L(e),o&&o.d(),_&&_.d(n),i&&i.d(),u&&u.d(),y=!1,g()}}}function Ve(l,e,t){const s=["toastItem","id","type","icon","timeout","closable","invert","reverse","visible"];let r=R(e,s),m,{$$slots:I={},$$scope:f}=e;var d;const y=Ie();let{toastItem:g={}}=e,{id:o=g.id||0}=e,{type:D=g.type||"initial"}=e,{icon:_=g.icon}=e,{timeout:i=g.timeout||0}=e,{closable:u=(d=g.closable)!==null&&d!==void 0?d:!0}=e,{invert:j=g.invert||!1}=e,{reverse:v=g.reverse||!1}=e,{visible:n=!0}=e,c=v?1:0,k=v?0:1,Y=Date.now(),P=i,q={duration:P};const T=ye(c,p({},{delay:0,duration:0,easing:je}));ke(l,T,a=>t(5,m=a));const x=()=>i&&m%1==0&&z(),z=()=>{y("close",o),Se.close(o),t(10,n=!1)},$=()=>{P-=Date.now()-Y,t(14,k=m),t(15,q={duration:0})},ee=()=>{Y=Date.now(),t(14,k=v?0:1),t(15,q={duration:P})};function te(a,se){return se&&(a.onmouseenter=$,a.onmouseleave=ee),{destroy(){a.onmouseenter=null,a.onmouseleave=null}}}return l.$$set=a=>{e=F(F({},e),De(a)),t(9,r=R(e,s)),"toastItem"in a&&t(11,g=a.toastItem),"id"in a&&t(12,o=a.id),"type"in a&&t(0,D=a.type),"icon"in a&&t(1,_=a.icon),"timeout"in a&&t(2,i=a.timeout),"closable"in a&&t(3,u=a.closable),"invert"in a&&t(4,j=a.invert),"reverse"in a&&t(13,v=a.reverse),"visible"in a&&t(10,n=a.visible),"$$scope"in a&&t(16,f=a.$$scope)},l.$$.update=()=>{l.$$.dirty&49156&&i&&T.set(k,q).then(x)},[D,_,i,u,j,m,T,z,te,r,n,g,o,v,k,q,f,I]}class ze extends oe{constructor(e){super();re(this,e,Ve,Ce,ce,{toastItem:11,id:12,type:0,icon:1,timeout:2,closable:3,invert:4,reverse:13,visible:10})}}export{ze as T,Se as t};