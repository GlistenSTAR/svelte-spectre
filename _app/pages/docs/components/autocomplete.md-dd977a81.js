import{S as ke,i as be,s as ve,j as te,m as ne,o as se,x as T,u as H,v as le,e as S,c as D,a as B,d as m,b as E,f as y,r as X,w as Y,B as he,k as U,n as V,E as F,D as Ee,F as M,aj as je,U as J,ak as Ue,p as Ve,I as _e,a9 as ge,J as Ae,L as Ke,a6 as me,V as ae,l as Ie,T as oe,ac as Ne,t as Q,g as W,h as ye,a3 as Z,a4 as x,a5 as $}from"../../../chunks/vendor-54f68cb8.js";/* empty css                                                            */import{I as Re}from"../../../chunks/IconButton-9a350f8a.js";import{C as ze}from"../../../chunks/Chip-e63f472a.js";import{K as qe}from"../../../chunks/_knobs-05af183c.js";import"../../../chunks/Icon-17d8d781.js";import"../../../chunks/Button-331cc723.js";import"../../../chunks/action-63149ef0.js";import"../../../chunks/Avatar-5ccdf1ca.js";import"../../../chunks/Col-44884439.js";function Le(n,t,e){const s=n.slice();return s[31]=t[e],s[33]=e,s}function Se(n,t,e){const s=n.slice();return s[34]=t[e],s[36]=e,s}function De(n,t,e){const s=n.slice();return s[37]=t[e],s[33]=e,s}function Fe(n){let t=n[37]+"",e;return{c(){e=Q(t)},l(s){e=W(s,t)},m(s,a){y(s,e,a)},p(s,a){a[0]&4&&t!==(t=s[37]+"")&&ye(e,t)},d(s){s&&m(e)}}}function Be(n){let t,e;function s(){return n[19](n[33])}return t=new ze({props:{closable:!0,$$slots:{default:[Fe]},$$scope:{ctx:n}}}),t.$on("close",s),{c(){te(t.$$.fragment)},l(a){ne(t.$$.fragment,a)},m(a,l){se(t,a,l),e=!0},p(a,l){n=a;const _={};l[0]&4|l[1]&256&&(_.$$scope={dirty:l,ctx:n}),t.$set(_)},i(a){e||(T(t.$$.fragment,a),e=!0)},o(a){H(t.$$.fragment,a),e=!1},d(a){le(t,a)}}}function Je(n){let t,e,s;return{c(){t=S("button"),this.h()},l(a){t=D(a,"BUTTON",{href:!0,class:!0,"aria-label":!0,role:!0}),B(t).forEach(m),this.h()},h(){E(t,"href","#"),E(t,"class","btn btn-clear mr--1 svelte-vg6dbe"),E(t,"aria-label","Close"),E(t,"role","button")},m(a,l){y(a,t,l),e||(s=J(t,"click",n[22]),e=!0)},p:oe,d(a){a&&m(t),e=!1,s()}}}function Oe(n){let t;return{c(){t=S("i"),this.h()},l(e){t=D(e,"I",{class:!0}),B(t).forEach(m),this.h()},h(){E(t,"class","form-icon loading svelte-vg6dbe")},m(e,s){y(e,t,s)},p:oe,d(e){e&&m(t)}}}function Te(n){let t,e,s,a;const l=[Qe,Ge],_=[];function i(c,o){return c[6]&&!c[1].length?0:c[1].length?1:-1}return~(e=i(n))&&(s=_[e]=l[e](n)),{c(){t=S("ul"),s&&s.c(),this.h()},l(c){t=D(c,"UL",{class:!0,tabindex:!0});var o=B(t);s&&s.l(o),o.forEach(m),this.h()},h(){E(t,"class","menu svelte-vg6dbe"),E(t,"tabindex","1")},m(c,o){y(c,t,o),~e&&_[e].m(t,null),a=!0},p(c,o){let p=e;e=i(c),e===p?~e&&_[e].p(c,o):(s&&(X(),H(_[p],1,1,()=>{_[p]=null}),Y()),~e?(s=_[e],s?s.p(c,o):(s=_[e]=l[e](c),s.c()),T(s,1),s.m(t,null)):s=null)},i(c){a||(T(s),a=!0)},o(c){H(s),a=!1},d(c){c&&m(t),~e&&_[e].d()}}}function Ge(n){let t,e,s,a=n[3],l=[];for(let o=0;o<a.length;o+=1)l[o]=Ce(Se(n,a,o));let _=n[1],i=[];for(let o=0;o<_.length;o+=1)i[o]=Pe(Le(n,_,o));const c=o=>H(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<l.length;o+=1)l[o].c();t=U();for(let o=0;o<i.length;o+=1)i[o].c();e=Ie()},l(o){for(let p=0;p<l.length;p+=1)l[p].l(o);t=V(o);for(let p=0;p<i.length;p+=1)i[p].l(o);e=Ie()},m(o,p){for(let d=0;d<l.length;d+=1)l[d].m(o,p);y(o,t,p);for(let d=0;d<i.length;d+=1)i[d].m(o,p);y(o,e,p),s=!0},p(o,p){if(p[0]&2056){a=o[3];let d;for(d=0;d<a.length;d+=1){const g=Se(o,a,d);l[d]?l[d].p(g,p):(l[d]=Ce(g),l[d].c(),l[d].m(t.parentNode,t))}for(;d<l.length;d+=1)l[d].d(1);l.length=a.length}if(p[0]&21011){_=o[1];let d;for(d=0;d<_.length;d+=1){const g=Le(o,_,d);i[d]?(i[d].p(g,p),T(i[d],1)):(i[d]=Pe(g),i[d].c(),T(i[d],1),i[d].m(e.parentNode,e))}for(X(),d=_.length;d<i.length;d+=1)c(d);Y()}},i(o){if(!s){for(let p=0;p<_.length;p+=1)T(i[p]);s=!0}},o(o){i=i.filter(Boolean);for(let p=0;p<i.length;p+=1)H(i[p]);s=!1},d(o){_e(l,o),o&&m(t),_e(i,o),o&&m(e)}}}function Qe(n){let t,e,s,a,l=re(n[0],n[0])+"",_,i;return{c(){t=S("li"),e=U(),s=S("li"),a=S("a"),this.h()},l(c){t=D(c,"LI",{class:!0,"data-content":!0}),B(t).forEach(m),e=V(c),s=D(c,"LI",{class:!0});var o=B(s);a=D(o,"A",{href:!0,class:!0});var p=B(a);p.forEach(m),o.forEach(m),this.h()},h(){E(t,"class","divider"),E(t,"data-content","Add:"),E(a,"href","#"),E(a,"class","svelte-vg6dbe"),F(a,"active",n[0].length),E(s,"class","menu-item svelte-vg6dbe")},m(c,o){y(c,t,o),y(c,e,o),y(c,s,o),M(s,a),a.innerHTML=l,_||(i=[J(a,"click",ae(n[23])),J(a,"mouseover",ae(n[24]))],_=!0)},p(c,o){o[0]&1&&l!==(l=re(c[0],c[0])+"")&&(a.innerHTML=l),o[0]&1&&F(a,"active",c[0].length)},i:oe,o:oe,d(c){c&&m(t),c&&m(e),c&&m(s),_=!1,ge(i)}}}function Ce(n){let t,e;return{c(){t=S("li"),this.h()},l(s){t=D(s,"LI",{style:!0,class:!0,"data-content":!0}),B(t).forEach(m),this.h()},h(){me(t,"order",n[11](n[34],n[36])),E(t,"class","divider"),E(t,"data-content",e=n[34])},m(s,a){y(s,t,a)},p(s,a){a[0]&8&&me(t,"order",s[11](s[34],s[36])),a[0]&8&&e!==(e=s[34])&&E(t,"data-content",e)},d(s){s&&m(t)}}}function Me(n){let t,e,s;function a(){return n[27](n[31])}return e=new Re({props:{icon:"delete",size:"sm"}}),e.$on("click",a),{c(){t=S("div"),te(e.$$.fragment),this.h()},l(l){t=D(l,"DIV",{class:!0});var _=B(t);ne(e.$$.fragment,_),_.forEach(m),this.h()},h(){E(t,"class","menu-badge svelte-vg6dbe")},m(l,_){y(l,t,_),se(e,t,null),s=!0},p(l,_){n=l},i(l){s||(T(e.$$.fragment,l),s=!0)},o(l){H(e.$$.fragment,l),s=!1},d(l){l&&m(t),le(e)}}}function Pe(n){let t,e,s=re(n[31],n[0])+"",a,l=n[4].includes(n[31]),_,i,c,o;function p(){return n[25](n[31])}function d(){return n[26](n[33])}let g=l&&Me(n);return{c(){t=S("li"),e=S("a"),a=U(),g&&g.c(),_=U(),this.h()},l(v){t=D(v,"LI",{style:!0,class:!0,tabindex:!0});var h=B(t);e=D(h,"A",{href:!0,class:!0});var I=B(e);I.forEach(m),a=V(h),g&&g.l(h),_=V(h),h.forEach(m),this.h()},h(){E(e,"href","#"),E(e,"class","svelte-vg6dbe"),F(e,"active",n[9]===n[33]),me(t,"order",n[33]),E(t,"class","menu-item svelte-vg6dbe"),E(t,"tabindex","1")},m(v,h){y(v,t,h),M(t,e),e.innerHTML=s,M(t,a),g&&g.m(t,null),M(t,_),i=!0,c||(o=[J(e,"click",ae(p)),J(e,"mouseover",ae(d))],c=!0)},p(v,h){n=v,(!i||h[0]&3)&&s!==(s=re(n[31],n[0])+"")&&(e.innerHTML=s),h[0]&512&&F(e,"active",n[9]===n[33]),h[0]&18&&(l=n[4].includes(n[31])),l?g?(g.p(n,h),h[0]&18&&T(g,1)):(g=Me(n),g.c(),T(g,1),g.m(t,_)):g&&(X(),H(g,1,1,()=>{g=null}),Y())},i(v){i||(T(g),i=!0)},o(v){H(g),i=!1},d(v){v&&m(t),g&&g.d(),c=!1,ge(o)}}}function We(n){let t,e,s,a,l,_,i,c,o,p,d,g,v=n[2],h=[];for(let u=0;u<v.length;u+=1)h[u]=Be(De(n,v,u));const I=u=>H(h[u],1,1,()=>{h[u]=null});function R(u,k){if(u[0].length)return Oe;if(u[2].length)return Je}let C=R(n),L=C&&C(n),A=n[8]&&(!n[7]||n[0].length)&&Te(n),K=[n[16],{class:"form-autocomplete"}],P={};for(let u=0;u<K.length;u+=1)P=he(P,K[u]);return{c(){t=S("div"),e=S("div");for(let u=0;u<h.length;u+=1)h[u].c();s=U(),a=S("div"),l=S("input"),_=U(),L&&L.c(),c=U(),A&&A.c(),o=U(),this.h()},l(u){t=D(u,"DIV",{class:!0});var k=B(t);e=D(k,"DIV",{class:!0});var b=B(e);for(let q=0;q<h.length;q+=1)h[q].l(b);s=V(b),a=D(b,"DIV",{class:!0,"data-active":!0});var z=B(a);l=D(z,"INPUT",{class:!0,type:!0,tabindex:!0,placeholder:!0}),_=V(z),L&&L.l(z),z.forEach(m),b.forEach(m),c=V(k),A&&A.l(k),k.forEach(m),o=V(u),this.h()},h(){E(l,"class","form-input svelte-vg6dbe"),E(l,"type","text"),E(l,"tabindex","0"),E(l,"placeholder",n[5]),E(a,"class","form-input-icon-wrap svelte-vg6dbe"),E(a,"data-active",i=n[0].length?n[10]:""),F(a,"has-icon-right",n[0].length||n[2].length),E(e,"class","form-autocomplete-input form-input svelte-vg6dbe"),F(e,"is-focused",n[8]),Ee(t,P),F(t,"svelte-vg6dbe",!0)},m(u,k){y(u,t,k),M(t,e);for(let b=0;b<h.length;b+=1)h[b].m(e,null);M(e,s),M(e,a),M(a,l),je(l,n[0]),M(a,_),L&&L.m(a,null),M(t,c),A&&A.m(t,null),y(u,o,k),p=!0,d||(g=[J(l,"input",n[20]),J(l,"focus",n[21]),J(l,"keydown",n[13]),J(l,"click",Ue(n[18])),J(document.body,"click",n[28])],d=!0)},p(u,k){if(k[0]&32772){v=u[2];let b;for(b=0;b<v.length;b+=1){const z=De(u,v,b);h[b]?(h[b].p(z,k),T(h[b],1)):(h[b]=Be(z),h[b].c(),T(h[b],1),h[b].m(e,s))}for(X(),b=v.length;b<h.length;b+=1)I(b);Y()}(!p||k[0]&32)&&E(l,"placeholder",u[5]),k[0]&1&&l.value!==u[0]&&je(l,u[0]),C===(C=R(u))&&L?L.p(u,k):(L&&L.d(1),L=C&&C(u),L&&(L.c(),L.m(a,null))),(!p||k[0]&1025&&i!==(i=u[0].length?u[10]:""))&&E(a,"data-active",i),k[0]&5&&F(a,"has-icon-right",u[0].length||u[2].length),k[0]&256&&F(e,"is-focused",u[8]),u[8]&&(!u[7]||u[0].length)?A?(A.p(u,k),k[0]&385&&T(A,1)):(A=Te(u),A.c(),T(A,1),A.m(t,null)):A&&(X(),H(A,1,1,()=>{A=null}),Y()),Ee(t,P=Ve(K,[k[0]&65536&&u[16],{class:"form-autocomplete"}])),F(t,"svelte-vg6dbe",!0)},i(u){if(!p){for(let k=0;k<v.length;k+=1)T(h[k]);T(A),p=!0}},o(u){h=h.filter(Boolean);for(let k=0;k<h.length;k+=1)H(h[k]);H(A),p=!1},d(u){u&&m(t),_e(h,u),L&&L.d(),A&&A.d(),u&&m(o),d=!1,ge(g)}}}function Xe(n,t,e){return He(n[e],t)===0?n[e]:""}function He(n,t){const e=new RegExp(t,"i");return n==null?void 0:n.search(e)}function Ye(n,t){const e=new RegExp(t,"i");return n==null?void 0:n.match(e).join("")}function re(n,t){const e=Ye(n,t);return n.replace(e,`<mark>${e}</mark>`)}function Ze(n,t,e){const s=["value","placeholder","predefined","suggested","selected","created","creatable","predictable","groups"];let a=Ae(t,s),{value:l=""}=t,{placeholder:_="typing here"}=t,{predefined:i=[]}=t,{suggested:c=[]}=t,{selected:o=[]}=t,{created:p=[]}=t,{creatable:d=!1}=t,{predictable:g=!1}=t,{groups:v=[]}=t,h=!1,I=0,R="",C=[0];function L(r,j){if(C.length<=v.length){const w=c.filter(O=>O.includes(r)).length;C.push(w)}return C.map((w=>O=>w+=O)(0))[j]}function A(r){e(17,i=i.filter(j=>j!==r)),e(1,c=c.filter(j=>j!==r)),e(4,p=p.filter(j=>j!==r))}function K(r,j,N){return C=[0],r.filter(w=>He(w,N)>=0&&!j.some(O=>O===w)).sort((w,O)=>v.some(de=>w.includes(de))?-1:1)}function P(r){switch(r.key){case"Backspace":l||(r.metaKey||r.ctrlKey?e(2,o=[]):k(o.length-1));break;case"Tab":case"Enter":r.preventDefault(),(c.length||l)&&u(c[I]||l);break;case"ArrowRight":r.preventDefault(),c.length&&u(c[I]);break;case"ArrowDown":r.preventDefault(),I<c.length-1?e(9,I++,I):e(9,I=0);break;case"ArrowUp":r.preventDefault(),I>0?e(9,I--,I):e(9,I=c.length-1);break;case"Escape":r.preventDefault(),e(0,l=""),e(9,I=0),e(8,h=!1),r.target.blur();break}}function u(r){e(2,o=[...o,r]),e(4,p=!p.includes(r)&&!c.includes(r)?[...p,r]:p),e(17,i=p.some(j=>!i.includes(j))?[...i,r]:i),e(1,c=[]),C=[0],e(0,l=""),e(9,I=0)}function k(r){e(2,o=o.filter((j,N)=>N!==r))}function b(r){Ne.call(this,n,r)}const z=r=>k(r);function q(){l=this.value,e(0,l)}const ce=()=>e(8,h=!0),ie=()=>e(2,o=[]),ue=()=>u(l),pe=()=>e(9,I=0),G=r=>u(r),fe=r=>e(9,I=r),ee=r=>A(r),f=()=>e(8,h=!1);return n.$$set=r=>{t=he(he({},t),Ke(r)),e(16,a=Ae(t,s)),"value"in r&&e(0,l=r.value),"placeholder"in r&&e(5,_=r.placeholder),"predefined"in r&&e(17,i=r.predefined),"suggested"in r&&e(1,c=r.suggested),"selected"in r&&e(2,o=r.selected),"created"in r&&e(4,p=r.created),"creatable"in r&&e(6,d=r.creatable),"predictable"in r&&e(7,g=r.predictable),"groups"in r&&e(3,v=r.groups)},n.$$.update=()=>{n.$$.dirty[0]&131855&&h&&(e(1,c=K(i,o,l)),e(10,R=Xe(c,l,I)),e(3,v=c.every(r=>v.some(j=>r.includes(j)))?v.filter(r=>c.some(j=>j.includes(r))):[...v,"other"]),console.log(c.concat(v).sort((r,j)=>r>j?1:-1).reverse()))},[l,c,o,v,p,_,d,g,h,I,R,L,A,P,u,k,a,i,b,z,q,ce,ie,ue,pe,G,fe,ee,f]}class xe extends ke{constructor(t){super();be(this,t,Ze,We,ve,{value:0,placeholder:5,predefined:17,suggested:1,selected:2,created:4,creatable:6,predictable:7,groups:3},null,[-1,-1])}}function $e(n){let t,e,s,a,l,_,i,c,o,p,d,g,v,h,I,R=n[2].join(", ")+"",C,L,A,K,P,u,k,b,z=`<code class="language-sv"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Autocomplete <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte-spectre'</span>

    <span class="token keyword">let</span> predefined <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token string">'top_left'</span><span class="token punctuation">,</span>
            <span class="token string">'top_center'</span><span class="token punctuation">,</span>
            <span class="token string">'top_right'</span><span class="token punctuation">,</span>
            <span class="token string">'center_left'</span><span class="token punctuation">,</span>
            <span class="token string">'center_center'</span><span class="token punctuation">,</span>
            <span class="token string">'center_right'</span><span class="token punctuation">,</span>
            <span class="token string">'bottom_left'</span><span class="token punctuation">,</span>
            <span class="token string">'bottom_center'</span><span class="token punctuation">,</span>
            <span class="token string">'bottom_right'</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Autocomplete</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>predefined<span class="token punctuation">&#125;</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>selected</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span><span class="token punctuation">></span></span>Selected: [ <span class="token language-javascript"><span class="token punctuation">&#123;</span>selected<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">", "</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span> ]<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">></span></span></code>`,q;function ce(f){n[4](f)}function ie(f){n[5](f)}function ue(f){n[6](f)}function pe(f){n[7](f)}let G={creatable:n[0].creatable,predictable:n[0].predictable};n[1]!==void 0&&(G.predefined=n[1]),n[2]!==void 0&&(G.selected=n[2]),n[0].placeholder!==void 0&&(G.placeholder=n[0].placeholder),n[3]!==void 0&&(G.groups=n[3]),c=new xe({props:G}),Z.push(()=>x(c,"predefined",ce)),Z.push(()=>x(c,"selected",ie)),Z.push(()=>x(c,"placeholder",ue)),Z.push(()=>x(c,"groups",pe));function fe(f){n[8](f)}let ee={config:tt};return n[0]!==void 0&&(ee.state=n[0]),P=new qe({props:ee}),Z.push(()=>x(P,"state",fe)),{c(){t=S("h1"),e=Q(we),s=U(),a=S("p"),l=Q(`Autocomplete form component provides suggestions while you type. It is often
used for tags and contacts input.`),_=U(),i=S("p"),te(c.$$.fragment),v=U(),h=S("small"),I=Q("Selected: [ "),C=Q(R),L=Q(" ]"),A=U(),K=S("p"),te(P.$$.fragment),k=U(),b=S("pre"),this.h()},l(f){t=D(f,"H1",{});var r=B(t);e=W(r,we),r.forEach(m),s=V(f),a=D(f,"P",{});var j=B(a);l=W(j,`Autocomplete form component provides suggestions while you type. It is often
used for tags and contacts input.`),j.forEach(m),_=V(f),i=D(f,"P",{});var N=B(i);ne(c.$$.fragment,N),v=V(N),h=D(N,"SMALL",{});var w=B(h);I=W(w,"Selected: [ "),C=W(w,R),L=W(w," ]"),w.forEach(m),N.forEach(m),A=V(f),K=D(f,"P",{});var O=B(K);ne(P.$$.fragment,O),O.forEach(m),k=V(f),b=D(f,"PRE",{class:!0});var de=B(b);de.forEach(m),this.h()},h(){E(b,"class","language-sv")},m(f,r){y(f,t,r),M(t,e),y(f,s,r),y(f,a,r),M(a,l),y(f,_,r),y(f,i,r),se(c,i,null),M(i,v),M(i,h),M(h,I),M(h,C),M(h,L),y(f,A,r),y(f,K,r),se(P,K,null),y(f,k,r),y(f,b,r),b.innerHTML=z,q=!0},p(f,[r]){const j={};r&1&&(j.creatable=f[0].creatable),r&1&&(j.predictable=f[0].predictable),!o&&r&2&&(o=!0,j.predefined=f[1],$(()=>o=!1)),!p&&r&4&&(p=!0,j.selected=f[2],$(()=>p=!1)),!d&&r&1&&(d=!0,j.placeholder=f[0].placeholder,$(()=>d=!1)),!g&&r&8&&(g=!0,j.groups=f[3],$(()=>g=!1)),c.$set(j),(!q||r&4)&&R!==(R=f[2].join(", ")+"")&&ye(C,R);const N={};!u&&r&1&&(u=!0,N.state=f[0],$(()=>u=!1)),P.$set(N)},i(f){q||(T(c.$$.fragment,f),T(P.$$.fragment,f),q=!0)},o(f){H(c.$$.fragment,f),H(P.$$.fragment,f),q=!1},d(f){f&&m(t),f&&m(s),f&&m(a),f&&m(_),f&&m(i),le(c),f&&m(A),f&&m(K),le(P),f&&m(k),f&&m(b)}}}const et={file:"autocomplete.md",title:"Autocomplete",api:[{title:'placeholder: string = "type here"',description:"Autocomplete placeholder",variables:"any string"},{title:"selected: string[] = []",description:"Autocomplete selected",variables:"[]"},{title:"predictable: boolean = false",description:"Autocomplete predictable",variables:"true | false"}],config:{placeholder:{size:12},predictable:{type:"checkbox"},creatable:{type:"checkbox"},groups:{size:"auto"}}},{file:dt,title:we,api:ht,config:tt}=et;function nt(n,t,e){let s,a=["top_left","top_center","top_right","center_left","center_center","center_right","bottom_left","bottom_center","bottom_right"],l={placeholder:"type here",predictable:!1,creatable:!1,groups:"top_, center_, bottom_"},_=[];function i(g){a=g,e(1,a)}function c(g){_=g,e(2,_)}function o(g){n.$$.not_equal(l.placeholder,g)&&(l.placeholder=g,e(0,l))}function p(g){s=g,e(3,s),e(0,l)}function d(g){l=g,e(0,l)}return n.$$.update=()=>{n.$$.dirty&1&&e(3,s=l.groups?l.groups.split(", "):[])},[l,a,_,s,i,c,o,p,d]}class _t extends ke{constructor(t){super();be(this,t,nt,$e,ve,{})}}export{_t as default,et as metadata};
