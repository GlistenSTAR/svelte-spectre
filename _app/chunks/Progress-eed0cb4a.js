import{S as _,i as P,s as S,C as u,e as d,c as x,a as j,d as c,F as v,G as n,g as C,z as E,V as f,L as h,N as G}from"./vendor-b6cdff54.js";/* empty css                                              */function R(a){let e,t,i=[a[4],{class:t="progress "+(a[0]&&`text-${a[0]}`)},{value:a[2]},{max:a[3]}],o={};for(let s=0;s<i.length;s+=1)o=u(o,i[s]);return{c(){e=d("progress"),this.h()},l(s){e=x(s,"PROGRESS",{class:!0,max:!0}),j(e).forEach(c),this.h()},h(){v(e,o),n(e,"progress-invert",a[1]),n(e,"svelte-1j88agg",!0)},m(s,r){C(s,e,r)},p(s,[r]){v(e,o=E(i,[r&16&&s[4],r&1&&t!==(t="progress "+(s[0]&&`text-${s[0]}`))&&{class:t},r&4&&{value:s[2]},r&8&&{max:s[3]}])),n(e,"progress-invert",s[1]),n(e,"svelte-1j88agg",!0)},i:f,o:f,d(s){s&&c(e)}}}function b(a,e,t){const i=["color","invert","value","max"];let o=h(e,i),{color:s="light"}=e,{invert:r=!1}=e,{value:g}=e,{max:m=0}=e;return a.$$set=l=>{e=u(u({},e),G(l)),t(4,o=h(e,i)),"color"in l&&t(0,s=l.color),"invert"in l&&t(1,r=l.invert),"value"in l&&t(2,g=l.value),"max"in l&&t(3,m=l.max)},[s,r,g,m,o]}class F extends _{constructor(e){super();P(this,e,b,R,S,{color:0,invert:1,value:2,max:3})}}export{F as P};