import{S as Z,i as z,s as F,a1 as G,Y as J,Z as U,_ as V,q as w,o as j,k as B,l as W,m as L,g as k,n as ut,p as ft,d as r,a5 as X,a6 as x,e as b,t as S,w as K,c as h,a as v,h as C,x as R,b as tt,H as d,y as A,a7 as st,B as D,Q as kt,$ as nt,a0 as at,j as _t}from"../../../chunks/vendor-34a2d25b.js";/* empty css                                                            */import{B as et}from"../../../chunks/Button-b981a692.js";import{K as mt}from"../../../chunks/_knobs-252a7b5e.js";import"../../../chunks/action-63149ef0.js";import"../../../chunks/Col-f6c9b6da.js";const dt=c=>({}),ot=c=>({});function lt(c){let t;const a=c[2].default,s=G(a,c,c[1],null);return{c(){s&&s.c()},l(n){s&&s.l(n)},m(n,o){s&&s.m(n,o),t=!0},p(n,o){s&&s.p&&(!t||o&2)&&J(s,a,n,n[1],t?V(a,n[1],o,null):U(n[1]),null)},i(n){t||(w(s,n),t=!0)},o(n){j(s,n),t=!1},d(n){s&&s.d(n)}}}function $t(c){let t,a,s;const n=c[2].toggler,o=G(n,c,c[1],ot);let l=c[0]&&lt(c);return{c(){o&&o.c(),t=B(),l&&l.c(),a=W()},l(p){o&&o.l(p),t=L(p),l&&l.l(p),a=W()},m(p,i){o&&o.m(p,i),k(p,t,i),l&&l.m(p,i),k(p,a,i),s=!0},p(p,[i]){o&&o.p&&(!s||i&2)&&J(o,n,p,p[1],s?V(n,p[1],i,dt):U(p[1]),ot),p[0]?l?(l.p(p,i),i&1&&w(l,1)):(l=lt(p),l.c(),w(l,1),l.m(a.parentNode,a)):l&&(ut(),j(l,1,1,()=>{l=null}),ft())},i(p){s||(w(o,p),w(l),s=!0)},o(p){j(o,p),j(l),s=!1},d(p){o&&o.d(p),p&&r(t),l&&l.d(p),p&&r(a)}}}function bt(c,t,a){let{$$slots:s={},$$scope:n}=t,{toggle:o=!1}=t;return c.$$set=l=>{"toggle"in l&&a(0,o=l.toggle),"$$scope"in l&&a(1,n=l.$$scope)},[o,n,s]}class ht extends Z{constructor(t){super();z(this,t,bt,$t,F,{toggle:0})}}function vt(c){let t;return{c(){t=S("Hide toggled content")},l(a){t=C(a,"Hide toggled content")},m(a,s){k(a,t,s)},d(a){a&&r(t)}}}function Tt(c){let t,a,s,n,o,l,p,i,_,m;return i=new et({props:{$$slots:{default:[vt]},$$scope:{ctx:c}}}),i.$on("click",c[2]),{c(){t=b("article"),a=b("h3"),s=S("Toggled content"),n=B(),o=b("p"),l=S("This is the toggled content."),p=B(),K(i.$$.fragment)},l(g){t=h(g,"ARTICLE",{});var f=v(t);a=h(f,"H3",{});var $=v(a);s=C($,"Toggled content"),$.forEach(r),n=L(f),o=h(f,"P",{});var T=v(o);l=C(T,"This is the toggled content."),T.forEach(r),p=L(f),R(i.$$.fragment,f),f.forEach(r)},m(g,f){k(g,t,f),d(t,a),d(a,s),d(t,n),d(t,o),d(o,l),d(t,p),A(i,t,null),m=!0},p(g,f){const $={};f&32&&($.$$scope={dirty:f,ctx:g}),i.$set($)},i(g){m||(w(i.$$.fragment,g),kt(()=>{_||(_=nt(t,at,{},!0)),_.run(1)}),m=!0)},o(g){j(i.$$.fragment,g),_||(_=nt(t,at,{},!1)),_.run(0),m=!1},d(g){g&&r(t),D(i),g&&_&&_.end()}}}function Et(c){let t=(c[0].toggle?"Hide content":"Show content")+"",a;return{c(){a=S(t)},l(s){a=C(s,t)},m(s,n){k(s,a,n)},p(s,n){n&1&&t!==(t=(s[0].toggle?"Hide content":"Show content")+"")&&_t(a,t)},d(s){s&&r(a)}}}function wt(c){let t,a,s;return a=new et({props:{variant:"primary",$$slots:{default:[Et]},$$scope:{ctx:c}}}),a.$on("click",c[1]),{c(){t=b("p"),K(a.$$.fragment),this.h()},l(n){t=h(n,"P",{slot:!0});var o=v(t);R(a.$$.fragment,o),o.forEach(r),this.h()},h(){tt(t,"slot","toggler")},m(n,o){k(n,t,o),A(a,t,null),s=!0},p(n,o){const l={};o&33&&(l.$$scope={dirty:o,ctx:n}),a.$set(l)},i(n){s||(w(a.$$.fragment,n),s=!0)},o(n){j(a.$$.fragment,n),s=!1},d(n){n&&r(t),D(a)}}}function Ht(c){let t,a,s,n,o,l,p,i,_,m,g,f,$,T,E,I,M,y,ct=`<code class="language-sv"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> fade <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte/transition'</span>
    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Button<span class="token punctuation">,</span> Toggle <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte-spectre'</span>

    <span class="token keyword">let</span> toggle <span class="token operator">=</span> <span class="token boolean">false</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Toggle</span> <span class="token attr-name"><span class="token namespace">bind:</span>toggle</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>toggler<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> toggle <span class="token operator">=</span> <span class="token operator">!</span>toggle<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>
        <span class="token language-javascript"><span class="token punctuation">&#123;</span>toggle <span class="token operator">?</span> <span class="token string">'Hide'</span> <span class="token operator">:</span> <span class="token string">'Show'</span><span class="token punctuation">&#125;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token attr-name"><span class="token namespace">transition:</span>fade</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>Toggled header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Toggled content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Toggle</span><span class="token punctuation">></span></span></code>`,q;function it(e){c[3](e)}let N={$$slots:{toggler:[wt],default:[Tt]},$$scope:{ctx:c}};c[0].toggle!==void 0&&(N.toggle=c[0].toggle),g=new ht({props:N}),X.push(()=>x(g,"toggle",it));function rt(e){c[4](e)}let O={config:St};return c[0]!==void 0&&(O.state=c[0]),E=new mt({props:O}),X.push(()=>x(E,"state",rt)),{c(){t=b("h1"),a=S(pt),s=B(),n=b("p"),o=S(`Toggle are flexible toggler wraper provides just slots for content & toggle
control & 1 variable `),l=b("code"),p=S("toggle: boolen"),i=S("."),_=B(),m=b("p"),K(g.$$.fragment),$=B(),T=b("p"),K(E.$$.fragment),M=B(),y=b("pre"),this.h()},l(e){t=h(e,"H1",{});var u=v(t);a=C(u,pt),u.forEach(r),s=L(e),n=h(e,"P",{});var H=v(n);o=C(H,`Toggle are flexible toggler wraper provides just slots for content & toggle
control & 1 variable `),l=h(H,"CODE",{});var P=v(l);p=C(P,"toggle: boolen"),P.forEach(r),i=C(H,"."),H.forEach(r),_=L(e),m=h(e,"P",{});var Q=v(m);R(g.$$.fragment,Q),Q.forEach(r),$=L(e),T=h(e,"P",{});var Y=v(T);R(E.$$.fragment,Y),Y.forEach(r),M=L(e),y=h(e,"PRE",{class:!0});var gt=v(y);gt.forEach(r),this.h()},h(){tt(y,"class","language-sv")},m(e,u){k(e,t,u),d(t,a),k(e,s,u),k(e,n,u),d(n,o),d(n,l),d(l,p),d(n,i),k(e,_,u),k(e,m,u),A(g,m,null),k(e,$,u),k(e,T,u),A(E,T,null),k(e,M,u),k(e,y,u),y.innerHTML=ct,q=!0},p(e,[u]){const H={};u&33&&(H.$$scope={dirty:u,ctx:e}),!f&&u&1&&(f=!0,H.toggle=e[0].toggle,st(()=>f=!1)),g.$set(H);const P={};!I&&u&1&&(I=!0,P.state=e[0],st(()=>I=!1)),E.$set(P)},i(e){q||(w(g.$$.fragment,e),w(E.$$.fragment,e),q=!0)},o(e){j(g.$$.fragment,e),j(E.$$.fragment,e),q=!1},d(e){e&&r(t),e&&r(s),e&&r(n),e&&r(_),e&&r(m),D(g),e&&r($),e&&r(T),D(E),e&&r(M),e&&r(y)}}}const jt={file:"toggle.md",title:"Toggle",api:[{title:'<slot name="toggler">: HTMLElement | SvelteComponent',description:"Toggle toggler",variables:"HTMLElement | SvelteComponent"},{title:"<slot>: HTMLElement | SvelteComponent",description:"Toggle content",variables:"HTMLElement | SvelteComponent"},{title:"toggle: boolean = false",description:"Toggle toggle state",variables:"true | false"}],config:{toggle:{type:"checkbox"}}},{file:Kt,title:pt,api:Rt,config:St}=jt;function Ct(c,t,a){let s={toggle:!1};const n=()=>a(0,s.toggle=!s.toggle,s),o=()=>a(0,s.toggle=!1,s);function l(i){c.$$.not_equal(s.toggle,i)&&(s.toggle=i,a(0,s))}function p(i){s=i,a(0,s)}return[s,n,o,l,p]}class At extends Z{constructor(t){super();z(this,t,Ct,Ht,F,{})}}export{At as default,jt as metadata};