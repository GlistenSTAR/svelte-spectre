import{S as gn,i as _n,s as dn,e as j,c as z,a as S,d as f,b as N,f as g,W as sn,X as tn,Y as an,x as k,u as m,B as en,k as w,n as I,D as bn,E as vn,F as B,r as D,w as K,p as qn,J as hn,$ as An,L as Mn,_ as pn,a1 as on,a3 as ln,t as E,j as _,g as H,m as d,o as b,a4 as un,v,l as wn,h as U,T as Z}from"../../../chunks/vendor-2d38661a.js";/* empty css                                                            */import{B as In}from"../../../chunks/Button-f1248b09.js";import{I as Nn}from"../../../chunks/IconButton-4c9532c9.js";import{C as jn}from"../../../chunks/Checkbox-8b563de8.js";import{I as cn}from"../../../chunks/Icon-6aed7656.js";import{I as W}from"../../../chunks/Input-a6b235d5.js";import{S as Dn}from"../../../chunks/Switch-aadf4b7d.js";import{S as Kn}from"../../../chunks/Select-497e9476.js";import{F as zn,G as q}from"../../../chunks/Group-ba995fea.js";import{K as Vn}from"../../../chunks/_knobs-3556d2fe.js";import"../../../chunks/action-63149ef0.js";import"../../../chunks/uuid-770ab681.js";import"../../../chunks/Col-13724cd8.js";const Jn=o=>({button:o&1}),Sn=o=>({button:o[0]}),Xn=o=>({}),En=o=>({});function Hn(o){let s,a,n;const e=o[5].addon,t=pn(e,o,o[4],En);return{c(){s=j("span"),t&&t.c(),this.h()},l(l){s=z(l,"SPAN",{class:!0});var p=S(s);t&&t.l(p),p.forEach(f),this.h()},h(){N(s,"class",a="input-group-addon addon-"+o[1]+" svelte-1jjgtfw")},m(l,p){g(l,s,p),t&&t.m(s,null),n=!0},p(l,p){t&&t.p&&(!n||p&16)&&sn(t,e,l,l[4],n?an(e,l[4],p,Xn):tn(l[4]),En),(!n||p&2&&a!==(a="input-group-addon addon-"+l[1]+" svelte-1jjgtfw"))&&N(s,"class",a)},i(l){n||(k(t,l),n=!0)},o(l){m(t,l),n=!1},d(l){l&&f(s),t&&t.d(l)}}}function Fn(o){let s;const a=o[5].default,n=pn(a,o,o[4],null);return{c(){n&&n.c()},l(e){n&&n.l(e)},m(e,t){n&&n.m(e,t),s=!0},p(e,t){n&&n.p&&(!s||t&16)&&sn(n,a,e,e[4],s?an(a,e[4],t,null):tn(e[4]),null)},i(e){s||(k(n,e),s=!0)},o(e){m(n,e),s=!1},d(e){n&&n.d(e)}}}function Gn(o){let s;const a=o[5].button,n=pn(a,o,o[4],Sn);return{c(){n&&n.c()},l(e){n&&n.l(e)},m(e,t){n&&n.m(e,t),s=!0},p(e,t){n&&n.p&&(!s||t&17)&&sn(n,a,e,e[4],s?an(a,e[4],t,Jn):tn(e[4]),Sn)},i(e){s||(k(n,e),s=!0)},o(e){m(n,e),s=!1},d(e){n&&n.d(e)}}}function Yn(o){let s,a,n,e,t=o[3].addon&&Hn(o),l=o[3].default&&Fn(o),p=o[3].button&&Gn(o),c=[o[2],{class:"input-group"}],r={};for(let u=0;u<c.length;u+=1)r=en(r,c[u]);return{c(){s=j("div"),t&&t.c(),a=w(),l&&l.c(),n=w(),p&&p.c(),this.h()},l(u){s=z(u,"DIV",{class:!0});var $=S(s);t&&t.l($),a=I($),l&&l.l($),n=I($),p&&p.l($),$.forEach(f),this.h()},h(){bn(s,r),vn(s,"svelte-1jjgtfw",!0)},m(u,$){g(u,s,$),t&&t.m(s,null),B(s,a),l&&l.m(s,null),B(s,n),p&&p.m(s,null),e=!0},p(u,[$]){u[3].addon?t?(t.p(u,$),$&8&&k(t,1)):(t=Hn(u),t.c(),k(t,1),t.m(s,a)):t&&(D(),m(t,1,1,()=>{t=null}),K()),u[3].default?l?(l.p(u,$),$&8&&k(l,1)):(l=Fn(u),l.c(),k(l,1),l.m(s,n)):l&&(D(),m(l,1,1,()=>{l=null}),K()),u[3].button?p?(p.p(u,$),$&8&&k(p,1)):(p=Gn(u),p.c(),k(p,1),p.m(s,null)):p&&(D(),m(p,1,1,()=>{p=null}),K()),bn(s,r=qn(c,[$&4&&u[2],{class:"input-group"}])),vn(s,"svelte-1jjgtfw",!0)},i(u){e||(k(t),k(l),k(p),e=!0)},o(u){m(t),m(l),m(p),e=!1},d(u){u&&f(s),t&&t.d(),l&&l.d(),p&&p.d()}}}function On(o,s,a){const n=["button","size"];let e=hn(s,n),{$$slots:t={},$$scope:l}=s;const p=An(t);let{button:c="input-group-btn"}=s,{size:r="md"}=s;return o.$$set=u=>{s=en(en({},s),Mn(u)),a(2,e=hn(s,n)),"button"in u&&a(0,c=u.button),"size"in u&&a(1,r=u.size),"$$scope"in u&&a(4,l=u.$$scope)},[c,r,e,p,l,t]}class rn extends gn{constructor(s){super();_n(this,s,On,Yn,dn,{button:0,size:1})}}function Rn(o){let s,a;return s=new cn({props:{slot:"iconLeft",icon:"emoji"}}),{c(){_(s.$$.fragment)},l(n){d(s.$$.fragment,n)},m(n,e){b(s,n,e),a=!0},i(n){a||(k(s.$$.fragment,n),a=!0)},o(n){m(s.$$.fragment,n),a=!1},d(n){v(s,n)}}}function Bn(o){let s,a;return s=new cn({props:{slot:"iconRight",icon:"emoji"}}),{c(){_(s.$$.fragment)},l(n){d(s.$$.fragment,n)},m(n,e){b(s,n,e),a=!0},i(n){a||(k(s.$$.fragment,n),a=!0)},o(n){m(s.$$.fragment,n),a=!1},d(n){v(s,n)}}}function Qn(o){let s,a=(o[0].rows>1?"Textarea":o[0].label)+"",n,e,t,l,p=o[0].icon==="left"&&Rn(),c=o[0].icon==="right"&&Bn();return{c(){p&&p.c(),s=w(),n=E(a),e=w(),c&&c.c(),t=wn()},l(r){p&&p.l(r),s=I(r),n=H(r,a),e=I(r),c&&c.l(r),t=wn()},m(r,u){p&&p.m(r,u),g(r,s,u),g(r,n,u),g(r,e,u),c&&c.m(r,u),g(r,t,u),l=!0},p(r,u){r[0].icon==="left"?p?u&1&&k(p,1):(p=Rn(),p.c(),k(p,1),p.m(s.parentNode,s)):p&&(D(),m(p,1,1,()=>{p=null}),K()),(!l||u&1)&&a!==(a=(r[0].rows>1?"Textarea":r[0].label)+"")&&U(n,a),r[0].icon==="right"?c?u&1&&k(c,1):(c=Bn(),c.c(),k(c,1),c.m(t.parentNode,t)):c&&(D(),m(c,1,1,()=>{c=null}),K())},i(r){l||(k(p),k(c),l=!0)},o(r){m(p),m(c),l=!1},d(r){p&&p.d(r),r&&f(s),r&&f(n),r&&f(e),c&&c.d(r),r&&f(t)}}}function Un(o){let s,a=o[0].hint+"",n;return{c(){s=j("span"),n=E(a),this.h()},l(e){s=z(e,"SPAN",{slot:!0});var t=S(s);n=H(t,a),t.forEach(f),this.h()},h(){N(s,"slot","hint")},m(e,t){g(e,s,t),B(s,n)},p(e,t){t&1&&a!==(a=e[0].hint+"")&&U(n,a)},d(e){e&&f(s)}}}function Zn(o){let s,a,n;function e(l){o[4](l)}let t={rows:o[0].rows,size:o[0].size,width:o[0].FormHorizontal?8:o[0].width,options:o[3],placeholder:"try type options",validity:o[0].validity,expand:o[0].expand,$$slots:{hint:[Un],default:[Qn]},$$scope:{ctx:o}};return o[0].value!==void 0&&(t.value=o[0].value),s=new W({props:t}),on.push(()=>ln(s,"value",e)),{c(){_(s.$$.fragment)},l(l){d(s.$$.fragment,l)},m(l,p){b(s,l,p),n=!0},p(l,p){const c={};p&1&&(c.rows=l[0].rows),p&1&&(c.size=l[0].size),p&1&&(c.width=l[0].FormHorizontal?8:l[0].width),p&1&&(c.validity=l[0].validity),p&1&&(c.expand=l[0].expand),p&257&&(c.$$scope={dirty:p,ctx:l}),!a&&p&1&&(a=!0,c.value=l[0].value,un(()=>a=!1)),s.$set(c)},i(l){n||(k(s.$$.fragment,l),n=!0)},o(l){m(s.$$.fragment,l),n=!1},d(l){v(s,l)}}}function xn(o){let s;return{c(){s=E("Success")},l(a){s=H(a,"Success")},m(a,n){g(a,s,n)},d(a){a&&f(s)}}}function ns(o){let s,a;return s=new cn({props:{slot:"iconRight",icon:"emoji"}}),{c(){_(s.$$.fragment)},l(n){d(s.$$.fragment,n)},m(n,e){b(s,n,e),a=!0},p:Z,i(n){a||(k(s.$$.fragment,n),a=!0)},o(n){m(s.$$.fragment,n),a=!1},d(n){v(s,n)}}}function ss(o){let s,a;return s=new W({props:{validity:"success",width:o[0].FormHorizontal?8:o[0].width,$$slots:{iconRight:[ns],default:[xn]},$$scope:{ctx:o}}}),{c(){_(s.$$.fragment)},l(n){d(s.$$.fragment,n)},m(n,e){b(s,n,e),a=!0},p(n,e){const t={};e&1&&(t.width=n[0].FormHorizontal?8:n[0].width),e&256&&(t.$$scope={dirty:e,ctx:n}),s.$set(t)},i(n){a||(k(s.$$.fragment,n),a=!0)},o(n){m(s.$$.fragment,n),a=!1},d(n){v(s,n)}}}function ts(o){let s;return{c(){s=E("Error")},l(a){s=H(a,"Error")},m(a,n){g(a,s,n)},d(a){a&&f(s)}}}function as(o){let s,a;return s=new Nn({props:{slot:"iconRight",icon:"emoji"}}),{c(){_(s.$$.fragment)},l(n){d(s.$$.fragment,n)},m(n,e){b(s,n,e),a=!0},p:Z,i(n){a||(k(s.$$.fragment,n),a=!0)},o(n){m(s.$$.fragment,n),a=!1},d(n){v(s,n)}}}function es(o){let s,a;return s=new W({props:{validity:"error",width:o[0].FormHorizontal?8:o[0].width,$$slots:{iconRight:[as],default:[ts]},$$scope:{ctx:o}}}),{c(){_(s.$$.fragment)},l(n){d(s.$$.fragment,n)},m(n,e){b(s,n,e),a=!0},p(n,e){const t={};e&1&&(t.width=n[0].FormHorizontal?8:n[0].width),e&256&&(t.$$scope={dirty:e,ctx:n}),s.$set(t)},i(n){a||(k(s.$$.fragment,n),a=!0)},o(n){m(s.$$.fragment,n),a=!1},d(n){v(s,n)}}}function ps(o){let s,a,n,e,t,l;return s=new q({props:{$$slots:{default:[Zn]},$$scope:{ctx:o}}}),n=new q({props:{$$slots:{default:[ss]},$$scope:{ctx:o}}}),t=new q({props:{$$slots:{default:[es]},$$scope:{ctx:o}}}),{c(){_(s.$$.fragment),a=w(),_(n.$$.fragment),e=w(),_(t.$$.fragment)},l(p){d(s.$$.fragment,p),a=I(p),d(n.$$.fragment,p),e=I(p),d(t.$$.fragment,p)},m(p,c){b(s,p,c),g(p,a,c),b(n,p,c),g(p,e,c),b(t,p,c),l=!0},p(p,c){const r={};c&257&&(r.$$scope={dirty:c,ctx:p}),s.$set(r);const u={};c&257&&(u.$$scope={dirty:c,ctx:p}),n.$set(u);const $={};c&257&&($.$$scope={dirty:c,ctx:p}),t.$set($)},i(p){l||(k(s.$$.fragment,p),k(n.$$.fragment,p),k(t.$$.fragment,p),l=!0)},o(p){m(s.$$.fragment,p),m(n.$$.fragment,p),m(t.$$.fragment,p),l=!1},d(p){v(s,p),p&&f(a),v(n,p),p&&f(e),v(t,p)}}}function os(o){let s,a,n,e;return s=new Dn({}),n=new W({props:{expand:!0}}),{c(){_(s.$$.fragment),a=w(),_(n.$$.fragment)},l(t){d(s.$$.fragment,t),a=I(t),d(n.$$.fragment,t)},m(t,l){b(s,t,l),g(t,a,l),b(n,t,l),e=!0},p:Z,i(t){e||(k(s.$$.fragment,t),k(n.$$.fragment,t),e=!0)},o(t){m(s.$$.fragment,t),m(n.$$.fragment,t),e=!1},d(t){v(s,t),t&&f(a),v(n,t)}}}function ls(o){let s=o[7]+"",a;return{c(){a=E(s)},l(n){a=H(n,s)},m(n,e){g(n,a,e)},p(n,e){e&128&&s!==(s=n[7]+"")&&U(a,s)},d(n){n&&f(a)}}}function us(o){let s,a;return s=new In({props:{slot:"button",variant:"primary",input:!0,class:o[7],$$slots:{default:[ls]},$$scope:{ctx:o}}}),{c(){_(s.$$.fragment)},l(n){d(s.$$.fragment,n)},m(n,e){b(s,n,e),a=!0},p(n,e){const t={};e&128&&(t.class=n[7]),e&384&&(t.$$scope={dirty:e,ctx:n}),s.$set(t)},i(n){a||(k(s.$$.fragment,n),a=!0)},o(n){m(s.$$.fragment,n),a=!1},d(n){v(s,n)}}}function cs(o){let s,a;return s=new rn({props:{$$slots:{button:[us,({button:n})=>({7:n}),({button:n})=>n?128:0],default:[os,({button:n})=>({7:n}),({button:n})=>n?128:0]},$$scope:{ctx:o}}}),{c(){_(s.$$.fragment)},l(n){d(s.$$.fragment,n)},m(n,e){b(s,n,e),a=!0},p(n,e){const t={};e&384&&(t.$$scope={dirty:e,ctx:n}),s.$set(t)},i(n){a||(k(s.$$.fragment,n),a=!0)},o(n){m(s.$$.fragment,n),a=!1},d(n){v(s,n)}}}function is(o){let s,a,n,e;return s=new jn({}),n=new W({props:{expand:!0}}),{c(){_(s.$$.fragment),a=w(),_(n.$$.fragment)},l(t){d(s.$$.fragment,t),a=I(t),d(n.$$.fragment,t)},m(t,l){b(s,t,l),g(t,a,l),b(n,t,l),e=!0},p:Z,i(t){e||(k(s.$$.fragment,t),k(n.$$.fragment,t),e=!0)},o(t){m(s.$$.fragment,t),m(n.$$.fragment,t),e=!1},d(t){v(s,t),t&&f(a),v(n,t)}}}function rs(o){let s=o[7]+"",a;return{c(){a=E(s)},l(n){a=H(n,s)},m(n,e){g(n,a,e)},p(n,e){e&128&&s!==(s=n[7]+"")&&U(a,s)},d(n){n&&f(a)}}}function fs(o){let s,a;return s=new In({props:{slot:"button",variant:"primary",input:!0,class:o[7],$$slots:{default:[rs]},$$scope:{ctx:o}}}),{c(){_(s.$$.fragment)},l(n){d(s.$$.fragment,n)},m(n,e){b(s,n,e),a=!0},p(n,e){const t={};e&128&&(t.class=n[7]),e&384&&(t.$$scope={dirty:e,ctx:n}),s.$set(t)},i(n){a||(k(s.$$.fragment,n),a=!0)},o(n){m(s.$$.fragment,n),a=!1},d(n){v(s,n)}}}function ks(o){let s,a;return s=new rn({props:{$$slots:{button:[fs,({button:n})=>({7:n}),({button:n})=>n?128:0],default:[is,({button:n})=>({7:n}),({button:n})=>n?128:0]},$$scope:{ctx:o}}}),{c(){_(s.$$.fragment)},l(n){d(s.$$.fragment,n)},m(n,e){b(s,n,e),a=!0},p(n,e){const t={};e&384&&(t.$$scope={dirty:e,ctx:n}),s.$set(t)},i(n){a||(k(s.$$.fragment,n),a=!0)},o(n){m(s.$$.fragment,n),a=!1},d(n){v(s,n)}}}function ms(o){let s,a,n,e,t,l,p;s=new jn({}),n=new W({props:{expand:!0}});function c(u){o[6](u)}let r={options:o[2]};return o[1]!==void 0&&(r.value=o[1]),t=new Kn({props:r}),on.push(()=>ln(t,"value",c)),{c(){_(s.$$.fragment),a=w(),_(n.$$.fragment),e=w(),_(t.$$.fragment)},l(u){d(s.$$.fragment,u),a=I(u),d(n.$$.fragment,u),e=I(u),d(t.$$.fragment,u)},m(u,$){b(s,u,$),g(u,a,$),b(n,u,$),g(u,e,$),b(t,u,$),p=!0},p(u,$){const y={};!l&&$&2&&(l=!0,y.value=u[1],un(()=>l=!1)),t.$set(y)},i(u){p||(k(s.$$.fragment,u),k(n.$$.fragment,u),k(t.$$.fragment,u),p=!0)},o(u){m(s.$$.fragment,u),m(n.$$.fragment,u),m(t.$$.fragment,u),p=!1},d(u){v(s,u),u&&f(a),v(n,u),u&&f(e),v(t,u)}}}function $s(o){let s,a;return s=new rn({props:{$$slots:{default:[ms,({button:n})=>({7:n}),({button:n})=>n?128:0]},$$scope:{ctx:o}}}),{c(){_(s.$$.fragment)},l(n){d(s.$$.fragment,n)},m(n,e){b(s,n,e),a=!0},p(n,e){const t={};e&258&&(t.$$scope={dirty:e,ctx:n}),s.$set(t)},i(n){a||(k(s.$$.fragment,n),a=!0)},o(n){m(s.$$.fragment,n),a=!1},d(n){v(s,n)}}}function gs(o){let s,a,n,e,t,l;return s=new q({props:{$$slots:{default:[cs]},$$scope:{ctx:o}}}),n=new q({props:{$$slots:{default:[ks]},$$scope:{ctx:o}}}),t=new q({props:{$$slots:{default:[$s]},$$scope:{ctx:o}}}),{c(){_(s.$$.fragment),a=w(),_(n.$$.fragment),e=w(),_(t.$$.fragment)},l(p){d(s.$$.fragment,p),a=I(p),d(n.$$.fragment,p),e=I(p),d(t.$$.fragment,p)},m(p,c){b(s,p,c),g(p,a,c),b(n,p,c),g(p,e,c),b(t,p,c),l=!0},p(p,c){const r={};c&256&&(r.$$scope={dirty:c,ctx:p}),s.$set(r);const u={};c&256&&(u.$$scope={dirty:c,ctx:p}),n.$set(u);const $={};c&258&&($.$$scope={dirty:c,ctx:p}),t.$set($)},i(p){l||(k(s.$$.fragment,p),k(n.$$.fragment,p),k(t.$$.fragment,p),l=!0)},o(p){m(s.$$.fragment,p),m(n.$$.fragment,p),m(t.$$.fragment,p),l=!1},d(p){v(s,p),p&&f(a),v(n,p),p&&f(e),v(t,p)}}}function _s(o){let s,a,n,e,t,l,p,c,r,u,$,y,V,G,Ln=`<code class="language-sv"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Icon<span class="token punctuation">,</span> Input <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte-spectre'</span>

    <span class="token keyword">let</span> value
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span>
    <span class="token attr-name"><span class="token namespace">bind:</span>value</span>
    <span class="token attr-name">rows=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">1</span><span class="token punctuation">&#125;</span></span>
    <span class="token attr-name">size=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'md'</span><span class="token punctuation">&#125;</span></span>
    <span class="token attr-name">width=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">0</span><span class="token punctuation">&#125;</span></span>
    <span class="token attr-name">options=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>options<span class="token punctuation">&#125;</span></span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>placeholder<span class="token punctuation">"</span></span>
    <span class="token attr-name">validity=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token keyword">null</span><span class="token punctuation">&#125;</span></span>
    <span class="token attr-name">expand=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>iconLeft<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>emoji<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        Label
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>iconRight<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>emoji<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hint<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>hint<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Input</span><span class="token punctuation">></span></span></code>`,J,L,x,X,P,nn,Y,C,F,O,R,Pn=`<code class="language-sv"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Button<span class="token punctuation">,</span> Checkbox<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> InputGroup<span class="token punctuation">,</span> Select<span class="token punctuation">,</span> Switch <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte-spectre'</span>

    <span class="token keyword">let</span> value<span class="token punctuation">,</span> 
        selected<span class="token punctuation">,</span>
        questions <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token punctuation">&#123;</span> value<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Where did you go to school?</span><span class="token template-punctuation string">&#96;</span></span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#123;</span> value<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">What is your mother's name?</span><span class="token template-punctuation string">&#96;</span></span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#123;</span>
                value<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                label<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">What is another personal fact that an attacker could easily find with Google?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputGroup</span> <span class="token attr-name"><span class="token namespace">let:</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token attr-name">expand</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">let:</span>button</span> <span class="token attr-name">input</span> <span class="token attr-name">class=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>button<span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">&#123;</span>button<span class="token punctuation">&#125;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span>
    <span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>InputGroup</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputGroup</span> <span class="token attr-name"><span class="token namespace">let:</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token attr-name">expand</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">let:</span>button</span> <span class="token attr-name">input</span> <span class="token attr-name">class=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>button<span class="token punctuation">&#125;</span></span>
        <span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">&#123;</span>button<span class="token punctuation">&#125;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span>
    <span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>InputGroup</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputGroup</span> <span class="token attr-name"><span class="token namespace">let:</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token attr-name">expand</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Select</span> <span class="token attr-name">options=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>questions<span class="token punctuation">&#125;</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>value=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>selected<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>InputGroup</span><span class="token punctuation">></span></span></code>`,Q;c=new zn({props:{horizontal:o[0].FormHorizontal,$$slots:{default:[ps]},$$scope:{ctx:o}}});function Cn(i){o[5](i)}let fn={config:bs};return o[0]!==void 0&&(fn.state=o[0]),$=new Vn({props:fn}),on.push(()=>ln($,"state",Cn)),F=new zn({props:{$$slots:{default:[gs]},$$scope:{ctx:o}}}),{c(){s=j("h1"),a=E(yn),n=w(),e=j("p"),t=E(`Forms provide the most common control styles used in forms, including input,
textarea, select, checkbox, radio and switch.`),l=w(),p=j("p"),_(c.$$.fragment),r=w(),u=j("p"),_($.$$.fragment),V=w(),G=j("pre"),J=w(),L=j("h2"),x=E("Input Group"),X=w(),P=j("p"),nn=E(`If you want to attach text and button along with an input, add the input-group
class to the input container. And add the input-group-addon class to the text
element and input-group-btn to the button element.`),Y=w(),C=j("p"),_(F.$$.fragment),O=w(),R=j("pre"),this.h()},l(i){s=z(i,"H1",{});var h=S(s);a=H(h,yn),h.forEach(f),n=I(i),e=z(i,"P",{});var T=S(e);t=H(T,`Forms provide the most common control styles used in forms, including input,
textarea, select, checkbox, radio and switch.`),T.forEach(f),l=I(i),p=z(i,"P",{});var A=S(p);d(c.$$.fragment,A),A.forEach(f),r=I(i),u=z(i,"P",{});var M=S(u);d($.$$.fragment,M),M.forEach(f),V=I(i),G=z(i,"PRE",{class:!0});var Tn=S(G);Tn.forEach(f),J=I(i),L=z(i,"H2",{});var kn=S(L);x=H(kn,"Input Group"),kn.forEach(f),X=I(i),P=z(i,"P",{});var mn=S(P);nn=H(mn,`If you want to attach text and button along with an input, add the input-group
class to the input container. And add the input-group-addon class to the text
element and input-group-btn to the button element.`),mn.forEach(f),Y=I(i),C=z(i,"P",{});var $n=S(C);d(F.$$.fragment,$n),$n.forEach(f),O=I(i),R=z(i,"PRE",{class:!0});var Wn=S(R);Wn.forEach(f),this.h()},h(){N(G,"class","language-sv"),N(R,"class","language-sv")},m(i,h){g(i,s,h),B(s,a),g(i,n,h),g(i,e,h),B(e,t),g(i,l,h),g(i,p,h),b(c,p,null),g(i,r,h),g(i,u,h),b($,u,null),g(i,V,h),g(i,G,h),G.innerHTML=Ln,g(i,J,h),g(i,L,h),B(L,x),g(i,X,h),g(i,P,h),B(P,nn),g(i,Y,h),g(i,C,h),b(F,C,null),g(i,O,h),g(i,R,h),R.innerHTML=Pn,Q=!0},p(i,[h]){const T={};h&1&&(T.horizontal=i[0].FormHorizontal),h&257&&(T.$$scope={dirty:h,ctx:i}),c.$set(T);const A={};!y&&h&1&&(y=!0,A.state=i[0],un(()=>y=!1)),$.$set(A);const M={};h&258&&(M.$$scope={dirty:h,ctx:i}),F.$set(M)},i(i){Q||(k(c.$$.fragment,i),k($.$$.fragment,i),k(F.$$.fragment,i),Q=!0)},o(i){m(c.$$.fragment,i),m($.$$.fragment,i),m(F.$$.fragment,i),Q=!1},d(i){i&&f(s),i&&f(n),i&&f(e),i&&f(l),i&&f(p),v(c),i&&f(r),i&&f(u),v($),i&&f(V),i&&f(G),i&&f(J),i&&f(L),i&&f(X),i&&f(P),i&&f(Y),i&&f(C),v(F),i&&f(O),i&&f(R)}}}const ds={file:"input.md",title:"Input",api:[{title:"<slot>: string",description:"Input label",variables:"any string"},{title:'<slot name="iconLeft">: HTMLelement',description:"Input iconLeft",variables:"any icon"},{title:'<slot name="iconRight">: HTMLelement',description:"Input iconRight",variables:"any icon"},{title:'<slot name="hint">: string',description:"Input hint",variables:"any icon"},{title:'value: string = ""',description:"Input value",variables:"any string"},{title:"rows: number = 1",description:"Input rows > 1 === <textarea rows>",variables:"any number"},{title:'size: Size = "md"',description:"Input size",variables:"xs | md | lg"},{title:"width: number = 0",description:"Input col width",variables:"1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12"},{title:'expand: Size = "xs"',description:"Input expanded media query size",variables:"xs | sm | md | lg | xl | xxl"},{title:"validity: Validity = null",description:"Checkbox validity",variables:"null | success | error"},{title:"options: string[] = []",description:"Input options <datalist>",variables:"any Array of strings"}],config:{label:{size:"auto"},value:{size:"auto"},hint:{size:"auto"},icon:{options:[null,"left","right"]},rows:{type:"number",min:1,max:10,size:5},size:{options:["sm","md","lg"]},width:{type:"number",min:0,max:12,size:5},expand:{options:["xs","sm","md","lg","xl","xxl"]},validity:{options:[null,"success","error"]},FormHorizontal:{type:"checkbox"}}},{file:Ps,title:yn,api:Cs,config:bs}=ds;function vs(o,s,a){let n={label:"Input",value:"",hint:"hint",icon:null,rows:1,size:"md",width:0,expand:"xs",validity:null,FormHorizontal:!1},e=[{value:1,label:"Where did you go to school?"},{value:2,label:"What is your mother's name?"},{value:3,label:"What is another personal fact that an attacker could easily find with Google?"}],t=3,l=["option1","option2","option3"];function p(u){o.$$.not_equal(n.value,u)&&(n.value=u,a(0,n))}function c(u){n=u,a(0,n)}function r(u){t=u,a(1,t)}return[n,t,e,l,p,c,r]}class Ts extends gn{constructor(s){super();_n(this,s,vs,_s,dn,{})}}export{Ts as default,ds as metadata};
