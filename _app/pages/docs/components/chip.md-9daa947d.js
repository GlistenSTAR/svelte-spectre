import{S as la,i as pa,s as oa,j as I,m as M,o as z,x as v,u as $,v as G,E as ca,e as E,c as j,a as H,d as r,b,f as k,I as Aa,T as ia,B as x,k as d,n as C,F as ua,G as W,H as O,r as Pa,w as Ea,J as ra,K as fa,L as ma,p as ja,M as ka,Z as Oa,N as Ta,U as wa,V as Ba,t as K,g as N,W as Ia,O as Ma,h as za,ap as aa,l as _a}from"../../../chunks/vendor-6e47c272.js";import{b as sa}from"../../../chunks/paths-28a87002.js";/* empty css                                                            */import{A as Ga}from"../../../chunks/Avatar-84beb51e.js";import{K as Ha}from"../../../chunks/_knobs-2ac1f07e.js";import"../../../chunks/action-63149ef0.js";import"../../../chunks/Col-247d4cad.js";const Ka=l=>({}),ga=l=>({});function ha(l){let a,s;return a=new Ga({props:{size:"sm",name:l[1],status:l[2],$$slots:{default:[Na]},$$scope:{ctx:l}}}),{c(){I(a.$$.fragment)},l(t){M(a.$$.fragment,t)},m(t,n){z(a,t,n),s=!0},p(t,n){const p={};n&2&&(p.name=t[1]),n&4&&(p.status=t[2]),n&512&&(p.$$scope={dirty:n,ctx:t}),a.$set(p)},i(t){s||(v(a.$$.fragment,t),s=!0)},o(t){$(a.$$.fragment,t),s=!1},d(t){G(a,t)}}}function Na(l){let a;const s=l[7].avatar,t=ca(s,l,l[9],ga);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,p){t&&t.m(n,p),a=!0},p(n,p){t&&t.p&&(!a||p&512)&&ra(t,s,n,n[9],a?ma(s,n[9],p,Ka):fa(n[9]),ga)},i(n){a||(v(t,n),a=!0)},o(n){$(t,n),a=!1},d(n){t&&t.d(n)}}}function va(l){let a,s,t;return{c(){a=E("button"),this.h()},l(n){a=j(n,"BUTTON",{href:!0,class:!0,"aria-label":!0,role:!0}),H(a).forEach(r),this.h()},h(){b(a,"href","#"),b(a,"class","btn btn-clear mr--1 svelte-x8ibi7"),b(a,"aria-label","Close"),b(a,"role","button")},m(n,p){k(n,a,p),s||(t=Aa(a,"click",l[8]),s=!0)},p:ia,d(n){n&&r(a),s=!1,t()}}}function Sa(l){let a,s,t,n,p=l[0]&&ha(l);const _=l[7].default,o=ca(_,l,l[9],null);let u=l[4]&&va(l),A=[l[6],{class:"chip"}],g={};for(let c=0;c<A.length;c+=1)g=x(g,A[c]);return{c(){a=E("div"),p&&p.c(),s=d(),o&&o.c(),t=d(),u&&u.c(),this.h()},l(c){a=j(c,"DIV",{class:!0});var f=H(a);p&&p.l(f),s=C(f),o&&o.l(f),t=C(f),u&&u.l(f),f.forEach(r),this.h()},h(){ua(a,g),W(a,"active",l[3]),W(a,"svelte-x8ibi7",!0)},m(c,f){k(c,a,f),p&&p.m(a,null),O(a,s),o&&o.m(a,null),O(a,t),u&&u.m(a,null),n=!0},p(c,[f]){c[0]?p?(p.p(c,f),f&1&&v(p,1)):(p=ha(c),p.c(),v(p,1),p.m(a,s)):p&&(Pa(),$(p,1,1,()=>{p=null}),Ea()),o&&o.p&&(!n||f&512)&&ra(o,_,c,c[9],n?ma(_,c[9],f,null):fa(c[9]),null),c[4]?u?u.p(c,f):(u=va(c),u.c(),u.m(a,null)):u&&(u.d(1),u=null),ua(a,g=ja(A,[f&64&&c[6],{class:"chip"}])),W(a,"active",c[3]),W(a,"svelte-x8ibi7",!0)},i(c){n||(v(p),v(o,c),n=!0)},o(c){$(p),$(o,c),n=!1},d(c){c&&r(a),p&&p.d(),o&&o.d(c),u&&u.d()}}}function qa(l,a,s){const t=["avatar","name","status","active","closable"];let n=ka(a,t),{$$slots:p={},$$scope:_}=a;const o=Oa();let{avatar:u=!1}=a,{name:A=""}=a,{status:g=!1}=a,{active:c=!1}=a,{closable:f=!1}=a;const D=()=>o("close","chip close");return l.$$set=m=>{a=x(x({},a),Ta(m)),s(6,n=ka(a,t)),"avatar"in m&&s(0,u=m.avatar),"name"in m&&s(1,A=m.name),"status"in m&&s(2,g=m.status),"active"in m&&s(3,c=m.active),"closable"in m&&s(4,f=m.closable),"$$scope"in m&&s(9,_=m.$$scope)},[u,A,g,c,f,o,n,p,D,_]}class y extends la{constructor(a){super();pa(this,a,qa,Sa,oa,{avatar:0,name:1,status:2,active:3,closable:4})}}function ya(l){let a=l[0].slot+"",s;return{c(){s=K(a)},l(t){s=N(t,a)},m(t,n){k(t,s,n)},p(t,n){n&1&&a!==(a=t[0].slot+"")&&za(s,a)},d(t){t&&r(s)}}}function $a(l){let a,s;return{c(){a=E("img"),this.h()},l(t){a=j(t,"IMG",{src:!0,alt:!0}),this.h()},h(){aa(a.src,s=""+(sa+"/img/"+l[0].image))||b(a,"src",s),b(a,"alt","Thor Odinson")},m(t,n){k(t,a,n)},p(t,n){n&1&&!aa(a.src,s=""+(sa+"/img/"+t[0].image))&&b(a,"src",s)},d(t){t&&r(a)}}}function Da(l){let a,s=l[0].image&&$a(l);return{c(){s&&s.c(),a=_a()},l(t){s&&s.l(t),a=_a()},m(t,n){s&&s.m(t,n),k(t,a,n)},p(t,n){t[0].image?s?s.p(t,n):(s=$a(t),s.c(),s.m(a.parentNode,a)):s&&(s.d(1),s=null)},d(t){s&&s.d(t),t&&r(a)}}}function La(l){let a;return{c(){a=K("Active")},l(s){a=N(s,"Active")},m(s,t){k(s,a,t)},d(s){s&&r(a)}}}function Ua(l){let a;return{c(){a=K("Avatar")},l(s){a=N(s,"Avatar")},m(s,t){k(s,a,t)},d(s){s&&r(a)}}}function Va(l){let a;return{c(){a=K("Online")},l(s){a=N(s,"Online")},m(s,t){k(s,a,t)},d(s){s&&r(a)}}}function Fa(l){let a;return{c(){a=K("Busy")},l(s){a=N(s,"Busy")},m(s,t){k(s,a,t)},d(s){s&&r(a)}}}function Ja(l){let a;return{c(){a=K("Closable")},l(s){a=N(s,"Closable")},m(s,t){k(s,a,t)},d(s){s&&r(a)}}}function Ra(l){let a,s;return{c(){a=E("img"),this.h()},l(t){a=j(t,"IMG",{slot:!0,src:!0,alt:!0}),this.h()},h(){b(a,"slot","avatar"),aa(a.src,s=""+(sa+"/img/avatar-1.png"))||b(a,"src",s),b(a,"alt","Thor Odinson")},m(t,n){k(t,a,n)},p:ia,d(t){t&&r(a)}}}function Wa(l){let a,s,t,n,p,_,o,u,A,g,c,f,D,m,Z,w,Q,B,X,L,q,T,Y,V,S,da=`<code class="language-sv"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span>Chip<span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte-spectre'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Chip</span><span class="token punctuation">></span></span>Chip<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Chip</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Chip</span> <span class="token attr-name">active</span><span class="token punctuation">></span></span>Active<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Chip</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Chip</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>CP<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Avatar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Chip</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Chip</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>CP<span class="token punctuation">"</span></span> <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>online<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Online<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Chip</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Chip</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>CP<span class="token punctuation">"</span></span> <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>busy<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Busy<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Chip</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Chip</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>CP<span class="token punctuation">"</span></span> <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>busy<span class="token punctuation">"</span></span> <span class="token attr-name">closable</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>avatar<span class="token punctuation">"</span></span> <span class="token attr-name">src="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>base<span class="token punctuation">&#125;</span></span>/<span class="token attr-name">img</span>/<span class="token attr-name">avatar-1.png"</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Thor Odinson<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>Closable
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Chip</span><span class="token punctuation">></span></span></code>`,F;u=new y({props:{active:l[0].active,closable:l[0].closable,avatar:l[0].avatar,name:l[0].name,status:l[0].status,$$slots:{avatar:[Da],default:[ya]},$$scope:{ctx:l}}}),g=new y({props:{active:!0,$$slots:{default:[La]},$$scope:{ctx:l}}}),f=new y({props:{name:"CP",avatar:!0,$$slots:{default:[Ua]},$$scope:{ctx:l}}}),m=new y({props:{name:"CP",status:"online",avatar:!0,$$slots:{default:[Va]},$$scope:{ctx:l}}}),w=new y({props:{name:"CP",status:"busy",avatar:!0,$$slots:{default:[Fa]},$$scope:{ctx:l}}}),B=new y({props:{name:"CP",status:"busy",closable:!0,avatar:!0,$$slots:{avatar:[Ra],default:[Ja]},$$scope:{ctx:l}}});function Ca(e){l[1](e)}let ta={config:Qa};return l[0]!==void 0&&(ta.state=l[0]),T=new Ha({props:ta}),wa.push(()=>Ba(T,"state",Ca)),{c(){a=E("h1"),s=K(ba),t=d(),n=E("p"),p=K(`Chips are complex entities in small blocks. Add a container element with the
chip class. And add child text element, buttons or avatars with the avatar
class.`),_=d(),o=E("p"),I(u.$$.fragment),A=d(),I(g.$$.fragment),c=d(),I(f.$$.fragment),D=d(),I(m.$$.fragment),Z=d(),I(w.$$.fragment),Q=d(),I(B.$$.fragment),X=d(),L=E("p"),q=E("p"),I(T.$$.fragment),V=d(),S=E("pre"),this.h()},l(e){a=j(e,"H1",{});var i=H(a);s=N(i,ba),i.forEach(r),t=C(e),n=j(e,"P",{});var P=H(n);p=N(P,`Chips are complex entities in small blocks. Add a container element with the
chip class. And add child text element, buttons or avatars with the avatar
class.`),P.forEach(r),_=C(e),o=j(e,"P",{});var h=H(o);M(u.$$.fragment,h),A=C(h),M(g.$$.fragment,h),c=C(h),M(f.$$.fragment,h),D=C(h),M(m.$$.fragment,h),Z=C(h),M(w.$$.fragment,h),Q=C(h),M(B.$$.fragment,h),X=C(h),h.forEach(r),L=j(e,"P",{});var J=H(L);J.forEach(r),q=j(e,"P",{});var U=H(q);M(T.$$.fragment,U),U.forEach(r),V=C(e),S=j(e,"PRE",{class:!0});var R=H(S);R.forEach(r),this.h()},h(){b(S,"class","language-sv")},m(e,i){k(e,a,i),O(a,s),k(e,t,i),k(e,n,i),O(n,p),k(e,_,i),k(e,o,i),z(u,o,null),O(o,A),z(g,o,null),O(o,c),z(f,o,null),O(o,D),z(m,o,null),O(o,Z),z(w,o,null),O(o,Q),z(B,o,null),O(o,X),k(e,L,i),k(e,q,i),z(T,q,null),k(e,V,i),k(e,S,i),S.innerHTML=da,F=!0},p(e,[i]){const P={};i&1&&(P.active=e[0].active),i&1&&(P.closable=e[0].closable),i&1&&(P.avatar=e[0].avatar),i&1&&(P.name=e[0].name),i&1&&(P.status=e[0].status),i&9&&(P.$$scope={dirty:i,ctx:e}),u.$set(P);const h={};i&8&&(h.$$scope={dirty:i,ctx:e}),g.$set(h);const J={};i&8&&(J.$$scope={dirty:i,ctx:e}),f.$set(J);const U={};i&8&&(U.$$scope={dirty:i,ctx:e}),m.$set(U);const R={};i&8&&(R.$$scope={dirty:i,ctx:e}),w.$set(R);const na={};i&8&&(na.$$scope={dirty:i,ctx:e}),B.$set(na);const ea={};!Y&&i&1&&(Y=!0,ea.state=e[0],Ia(()=>Y=!1)),T.$set(ea)},i(e){F||(v(u.$$.fragment,e),v(g.$$.fragment,e),v(f.$$.fragment,e),v(m.$$.fragment,e),v(w.$$.fragment,e),v(B.$$.fragment,e),v(T.$$.fragment,e),F=!0)},o(e){$(u.$$.fragment,e),$(g.$$.fragment,e),$(f.$$.fragment,e),$(m.$$.fragment,e),$(w.$$.fragment,e),$(B.$$.fragment,e),$(T.$$.fragment,e),F=!1},d(e){e&&r(a),e&&r(t),e&&r(n),e&&r(_),e&&r(o),G(u),G(g),G(f),G(m),G(w),G(B),e&&r(L),e&&r(q),G(T),e&&r(V),e&&r(S)}}}const Za={file:"chip.md",title:"Chip",api:[{title:"<slot>: string",description:"Chip content",variables:"any string"},{title:"active: boolean",description:"Chip active state",variables:"true | false"},{title:"closable: boolean",description:"Chip closable",variables:"true | false"},{title:"avatar: boolean",description:"Chip avatar",variables:"true | false"},{title:"name: boolean",description:"Chip avatar name",variables:"any string"},{title:"status: boolean",description:"Chip avatar status",variables:"null | online | away | busy | offline"},{title:"image: boolean",description:"Chip avatar image",variables:"any string url"}],config:{slot:{size:10},active:{type:"checkbox"},closable:{type:"checkbox"},avatar:{type:"checkbox"},name:{size:10},status:{options:[null,"online","busy","away","offline"]},image:{options:[null,"avatar-1.png","avatar-2.png","avatar-3.png","avatar-4.png","avatar-5.png"]}}},{file:ls,title:ba,api:ps,config:Qa}=Za;function Xa(l,a,s){let{$$slots:t={},$$scope:n}=a;const p=Ma(t);let _={slot:"Chip",active:!1,closable:!1,avatar:!1,name:"Albert Einstein",status:"online",image:null};function o(u){_=u,s(0,_)}return l.$$.update=()=>{l.$$.dirty&1&&console.log(_.name,p.avatar)},[_,o]}class os extends la{constructor(a){super();pa(this,a,Xa,Wa,oa,{})}}export{os as default,Za as metadata};
