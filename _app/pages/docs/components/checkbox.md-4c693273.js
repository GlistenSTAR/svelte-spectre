import{S as A,i as D,s as I,a5 as J,a6 as N,e as _,t as q,k as h,w as g,c as v,a as C,h as F,d as p,m as y,x,b as O,g as f,H as L,y as w,a7 as Q,q as j,o as E,B as P}from"../../../chunks/vendor-34a2d25b.js";/* empty css                                                            */import{C as M}from"../../../chunks/Checkbox-bc6dc095.js";import{F as U,G as W}from"../../../chunks/Group-aaf276b1.js";import{K as X}from"../../../chunks/_knobs-252a7b5e.js";import"../../../chunks/uuid-770ab681.js";import"../../../chunks/Col-f6c9b6da.js";function Z(i){let n;return{c(){n=q("Checkbox")},l(t){n=F(t,"Checkbox")},m(t,s){f(t,n,s)},d(t){t&&p(n)}}}function ee(i){let n;return{c(){n=q("Checkbox")},l(t){n=F(t,"Checkbox")},m(t,s){f(t,n,s)},d(t){t&&p(n)}}}function ne(i){let n,t,s,l;return n=new M({props:{indeterminate:i[0].indeterminate,inline:i[0].inline,validity:i[0].validity,$$slots:{default:[Z]},$$scope:{ctx:i}}}),s=new M({props:{indeterminate:i[0].indeterminate,inline:i[0].inline,validity:i[0].validity,$$slots:{default:[ee]},$$scope:{ctx:i}}}),{c(){g(n.$$.fragment),t=h(),g(s.$$.fragment)},l(a){x(n.$$.fragment,a),t=y(a),x(s.$$.fragment,a)},m(a,o){w(n,a,o),f(a,t,o),w(s,a,o),l=!0},p(a,o){const u={};o&1&&(u.indeterminate=a[0].indeterminate),o&1&&(u.inline=a[0].inline),o&1&&(u.validity=a[0].validity),o&4&&(u.$$scope={dirty:o,ctx:a}),n.$set(u);const r={};o&1&&(r.indeterminate=a[0].indeterminate),o&1&&(r.inline=a[0].inline),o&1&&(r.validity=a[0].validity),o&4&&(r.$$scope={dirty:o,ctx:a}),s.$set(r)},i(a){l||(j(n.$$.fragment,a),j(s.$$.fragment,a),l=!0)},o(a){E(n.$$.fragment,a),E(s.$$.fragment,a),l=!1},d(a){P(n,a),a&&p(t),P(s,a)}}}function ae(i){let n,t;return n=new W({props:{$$slots:{default:[ne]},$$scope:{ctx:i}}}),{c(){g(n.$$.fragment)},l(s){x(n.$$.fragment,s)},m(s,l){w(n,s,l),t=!0},p(s,l){const a={};l&5&&(a.$$scope={dirty:l,ctx:s}),n.$set(a)},i(s){t||(j(n.$$.fragment,s),t=!0)},o(s){E(n.$$.fragment,s),t=!1},d(s){P(n,s)}}}function se(i){let n,t,s,l,a,o,u,r,G,$,k,K,H,m,T=`<code class="language-sv"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Checkbox <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte-spectre'</span>

    <span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token boolean">false</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span> <span class="token attr-name"><span class="token namespace">bind:</span>value</span> <span class="token attr-name">indeterminate</span> <span class="token attr-name">inline</span> <span class="token attr-name">validity=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token keyword">null</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>Checkbox<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox</span><span class="token punctuation">></span></span></code>`,S;r=new U({props:{$$slots:{default:[ae]},$$scope:{ctx:i}}});function V(e){i[1](e)}let Y={config:ie};return i[0]!==void 0&&(Y.state=i[0]),k=new X({props:Y}),J.push(()=>N(k,"state",V)),{c(){n=_("h1"),t=q(R),s=h(),l=_("p"),a=q(`You can change checkbox to indeterminate state by setting the indeterminate
property of input checkboxes to true.`),o=h(),u=_("p"),g(r.$$.fragment),G=h(),$=_("p"),g(k.$$.fragment),H=h(),m=_("pre"),this.h()},l(e){n=v(e,"H1",{});var c=C(n);t=F(c,R),c.forEach(p),s=y(e),l=v(e,"P",{});var b=C(l);a=F(b,`You can change checkbox to indeterminate state by setting the indeterminate
property of input checkboxes to true.`),b.forEach(p),o=y(e),u=v(e,"P",{});var d=C(u);x(r.$$.fragment,d),d.forEach(p),G=y(e),$=v(e,"P",{});var B=C($);x(k.$$.fragment,B),B.forEach(p),H=y(e),m=v(e,"PRE",{class:!0});var z=C(m);z.forEach(p),this.h()},h(){O(m,"class","language-sv")},m(e,c){f(e,n,c),L(n,t),f(e,s,c),f(e,l,c),L(l,a),f(e,o,c),f(e,u,c),w(r,u,null),f(e,G,c),f(e,$,c),w(k,$,null),f(e,H,c),f(e,m,c),m.innerHTML=T,S=!0},p(e,[c]){const b={};c&5&&(b.$$scope={dirty:c,ctx:e}),r.$set(b);const d={};!K&&c&1&&(K=!0,d.state=e[0],Q(()=>K=!1)),k.$set(d)},i(e){S||(j(r.$$.fragment,e),j(k.$$.fragment,e),S=!0)},o(e){E(r.$$.fragment,e),E(k.$$.fragment,e),S=!1},d(e){e&&p(n),e&&p(s),e&&p(l),e&&p(o),e&&p(u),P(r),e&&p(G),e&&p($),P(k),e&&p(H),e&&p(m)}}}const te={file:"checkbox.md",title:"Checkbox",api:[{title:"value: boolean = false",description:"Checkbox value",variables:"true | false"},{title:"indeterminate: boolean = false",description:"Checkbox indeterminate",variables:"true | false"},{title:"inline: boolean = false",description:"Checkbox inline",variables:"true | false"},{title:"validity: Validity = null",description:"Checkbox validity",variables:"null | success | error"}],config:{inline:{type:"checkbox"},validity:{options:[null,"success","error"]},indeterminate:{type:"checkbox"}}},{file:me,title:R,api:$e,config:ie}=te;function oe(i,n,t){let s={indeterminate:!1,inline:!1,validity:null};function l(a){s=a,t(0,s)}return[s,l]}class be extends A{constructor(n){super();D(this,n,oe,se,I,{})}}export{be as default,te as metadata};