import{S as as,i as ns,s as ts,a5 as es,a6 as ps,e as E,t as L,k as C,w as m,c as h,a as y,h as S,d as l,m as q,x as k,b as os,g as f,H as K,y as g,a7 as ls,q as v,o as _,B as b,V as A}from"../../../chunks/vendor-b6cdff54.js";/* empty css                                                            */import{P as U}from"../../../chunks/Progress-eed0cb4a.js";import{G as rs,C as R}from"../../../chunks/Col-bdd7a3ba.js";import{K as cs}from"../../../chunks/_knobs-8c8f1b9a.js";import"../../../chunks/_media-dda27efa.js";function us(c){let a,e;return a=new U({props:{value:c[0].value,max:c[0].max,color:c[0].color,invert:c[0].invert}}),{c(){m(a.$$.fragment)},l(s){k(a.$$.fragment,s)},m(s,p){g(a,s,p),e=!0},p(s,p){const r={};p&1&&(r.value=s[0].value),p&1&&(r.max=s[0].max),p&1&&(r.color=s[0].color),p&1&&(r.invert=s[0].invert),a.$set(r)},i(s){e||(v(a.$$.fragment,s),e=!0)},o(s){_(a.$$.fragment,s),e=!1},d(s){b(a,s)}}}function is(c){let a,e;return a=new U({props:{value:"50",max:"100",color:"warning"}}),{c(){m(a.$$.fragment)},l(s){k(a.$$.fragment,s)},m(s,p){g(a,s,p),e=!0},p:A,i(s){e||(v(a.$$.fragment,s),e=!0)},o(s){_(a.$$.fragment,s),e=!1},d(s){b(a,s)}}}function fs(c){let a,e;return a=new U({props:{value:"25",max:"100",color:"success"}}),{c(){m(a.$$.fragment)},l(s){k(a.$$.fragment,s)},m(s,p){g(a,s,p),e=!0},p:A,i(s){e||(v(a.$$.fragment,s),e=!0)},o(s){_(a.$$.fragment,s),e=!1},d(s){b(a,s)}}}function $s(c){let a,e;return a=new U({props:{color:"error"}}),{c(){m(a.$$.fragment)},l(s){k(a.$$.fragment,s)},m(s,p){g(a,s,p),e=!0},p:A,i(s){e||(v(a.$$.fragment,s),e=!0)},o(s){_(a.$$.fragment,s),e=!1},d(s){b(a,s)}}}function ms(c){let a,e,s,p,r,d,i,$;return a=new R({props:{col:"6",xs:"12",$$slots:{default:[us]},$$scope:{ctx:c}}}),s=new R({props:{col:"6",xs:"12",$$slots:{default:[is]},$$scope:{ctx:c}}}),r=new R({props:{col:"6",xs:"12",$$slots:{default:[fs]},$$scope:{ctx:c}}}),i=new R({props:{col:"6",xs:"12",$$slots:{default:[$s]},$$scope:{ctx:c}}}),{c(){m(a.$$.fragment),e=C(),m(s.$$.fragment),p=C(),m(r.$$.fragment),d=C(),m(i.$$.fragment)},l(t){k(a.$$.fragment,t),e=q(t),k(s.$$.fragment,t),p=q(t),k(r.$$.fragment,t),d=q(t),k(i.$$.fragment,t)},m(t,o){g(a,t,o),f(t,e,o),g(s,t,o),f(t,p,o),g(r,t,o),f(t,d,o),g(i,t,o),$=!0},p(t,o){const O={};o&5&&(O.$$scope={dirty:o,ctx:t}),a.$set(O);const z={};o&4&&(z.$$scope={dirty:o,ctx:t}),s.$set(z);const T={};o&4&&(T.$$scope={dirty:o,ctx:t}),r.$set(T);const P={};o&4&&(P.$$scope={dirty:o,ctx:t}),i.$set(P)},i(t){$||(v(a.$$.fragment,t),v(s.$$.fragment,t),v(r.$$.fragment,t),v(i.$$.fragment,t),$=!0)},o(t){_(a.$$.fragment,t),_(s.$$.fragment,t),_(r.$$.fragment,t),_(i.$$.fragment,t),$=!1},d(t){b(a,t),t&&l(e),b(s,t),t&&l(p),b(r,t),t&&l(d),b(i,t)}}}function ks(c){let a,e,s,p,r,d,i,$,t,o,O,z,T,P,x,j,B,w,V,D,H,Y=`<code class="language-sv"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Progress <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte-spectre'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Progress</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>75<span class="token punctuation">"</span></span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Progress</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Progress</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>25<span class="token punctuation">"</span></span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Progress</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code>`,M;x=new rs({props:{stack:!0,$$slots:{default:[ms]},$$scope:{ctx:c}}});function Z(n){c[1](n)}let F={config:vs};return c[0]!==void 0&&(F.state=c[0]),w=new cs({props:F}),es.push(()=>ps(w,"state",Z)),{c(){a=E("h1"),e=L(X),s=C(),p=E("p"),r=L("The Progress indicates the progress completion of a task."),d=C(),i=E("blockquote"),$=E("p"),t=L("If "),o=E("code"),O=L("value === null || undefined"),z=L(" it have indeterminate/loading state"),T=C(),P=E("p"),m(x.$$.fragment),j=C(),B=E("p"),m(w.$$.fragment),D=C(),H=E("pre"),this.h()},l(n){a=h(n,"H1",{});var u=y(a);e=S(u,X),u.forEach(l),s=q(n),p=h(n,"P",{});var G=y(p);r=S(G,"The Progress indicates the progress completion of a task."),G.forEach(l),d=q(n),i=h(n,"BLOCKQUOTE",{});var I=y(i);$=h(I,"P",{});var Q=y($);t=S(Q,"If "),o=h(Q,"CODE",{});var J=y(o);O=S(J,"value === null || undefined"),J.forEach(l),z=S(Q," it have indeterminate/loading state"),Q.forEach(l),I.forEach(l),T=q(n),P=h(n,"P",{});var N=y(P);k(x.$$.fragment,N),N.forEach(l),j=q(n),B=h(n,"P",{});var W=y(B);k(w.$$.fragment,W),W.forEach(l),D=q(n),H=h(n,"PRE",{class:!0});var ss=y(H);ss.forEach(l),this.h()},h(){os(H,"class","language-sv")},m(n,u){f(n,a,u),K(a,e),f(n,s,u),f(n,p,u),K(p,r),f(n,d,u),f(n,i,u),K(i,$),K($,t),K($,o),K(o,O),K($,z),f(n,T,u),f(n,P,u),g(x,P,null),f(n,j,u),f(n,B,u),g(w,B,null),f(n,D,u),f(n,H,u),H.innerHTML=Y,M=!0},p(n,[u]){const G={};u&5&&(G.$$scope={dirty:u,ctx:n}),x.$set(G);const I={};!V&&u&1&&(V=!0,I.state=n[0],ls(()=>V=!1)),w.$set(I)},i(n){M||(v(x.$$.fragment,n),v(w.$$.fragment,n),M=!0)},o(n){_(x.$$.fragment,n),_(w.$$.fragment,n),M=!1},d(n){n&&l(a),n&&l(s),n&&l(p),n&&l(d),n&&l(i),n&&l(T),n&&l(P),b(x),n&&l(j),n&&l(B),b(w),n&&l(D),n&&l(H)}}}const gs={file:"progress.md",title:"Progress",api:[{title:"value: number = undefined",description:"Progress value",variables:"any number"},{title:"max: number = 0",description:"Progress max",variables:"any number"},{title:'color: Colors = "light"',description:"Progress color",variables:"gray | light | primary | secondary | success | error"},{title:"invert: boolean = false",description:"Progress invert",variables:"true | false"}],config:{value:{type:"number",min:0,max:100,size:5},max:{type:"number",min:0,max:100,size:5},color:{options:["gray","light","primary","secondary","success","error"]},invert:{type:"checkbox"}}},{file:hs,title:X,api:ys,config:vs}=gs;function _s(c,a,e){let s={value:75,max:100,color:"primary",invert:!1};function p(r){s=r,e(0,s)}return[s,p]}class Cs extends as{constructor(a){super();ns(this,a,_s,ks,ts,{})}}export{Cs as default,gs as metadata};
