import{S as $s,i as Ms,s as Es,e as d,c as h,a as k,d as i,b as O,g as D,U as Cs,E as ws,_ as N,C as es,k as C,w as U,m as w,x as W,G as fs,H as G,I as p,y as X,W as Z,X as x,Y as ss,z as zs,q as K,o as Q,B as Y,M as ms,a7 as Hs,O as Ps,a2 as ds,a3 as hs,t as L,h as B,a4 as ks}from"../../../chunks/index-84d7811f.js";/* empty css                                                            */import{B as ys}from"../../../chunks/Button-b280386f.js";import{u as Ds}from"../../../chunks/uuid-770ab681.js";import{I as Ls}from"../../../chunks/IconButton-533e93f5.js";import{K as Bs}from"../../../chunks/_knobs-24ac4336.js";import"../../../chunks/action-63149ef0.js";import"../../../chunks/Icon-0e9f49ae.js";import"../../../chunks/Col-268e32e9.js";import"../../../chunks/_media-5db5d977.js";import"../../../chunks/index-c0a56774.js";const Is=o=>({}),_s=o=>({}),Ss=o=>({}),vs=o=>({});function gs(o){let s,a,t;return{c(){s=d("a"),this.h()},l(l){s=h(l,"A",{href:!0,class:!0,"aria-label":!0}),k(s).forEach(i),this.h()},h(){O(s,"href","#_"),O(s,"class","modal-overlay svelte-wnn9kb"),O(s,"aria-label","Close")},m(l,m){D(l,s,m),a||(t=Cs(s,"click",o[4]),a=!0)},p:ws,d(l){l&&i(s),a=!1,t()}}}function Ts(o){let s,a,t,l,m,_,g,f,E,v,P,S,r,u=!o[1]&&gs(o);l=new Ls({props:{id:"close",icon:"cross"}}),l.$on("click",o[4]);const V=o[7].header,b=N(V,o,o[6],vs),z=o[7].default,y=N(z,o,o[6],null),T=o[7].footer,M=N(T,o,o[6],_s);let j=[o[5],{class:P="modal-"+o[2]},{id:S="modal-"+o[3]}],J={};for(let n=0;n<j.length;n+=1)J=es(J,j[n]);return{c(){s=d("div"),u&&u.c(),a=C(),t=d("div"),U(l.$$.fragment),m=C(),_=d("div"),b&&b.c(),g=C(),f=d("div"),y&&y.c(),E=C(),v=d("div"),M&&M.c(),this.h()},l(n){s=h(n,"DIV",{class:!0,id:!0});var e=k(s);u&&u.l(e),a=w(e),t=h(e,"DIV",{class:!0});var c=k(t);W(l.$$.fragment,c),m=w(c),_=h(c,"DIV",{class:!0});var I=k(_);b&&b.l(I),I.forEach(i),g=w(c),f=h(c,"DIV",{class:!0});var H=k(f);y&&y.l(H),H.forEach(i),E=w(c),v=h(c,"DIV",{class:!0});var q=k(v);M&&M.l(q),q.forEach(i),c.forEach(i),e.forEach(i),this.h()},h(){O(_,"class","modal-header svelte-wnn9kb"),O(f,"class","modal-body svelte-wnn9kb"),O(v,"class","modal-footer svelte-wnn9kb"),O(t,"class","modal-container svelte-wnn9kb"),fs(s,J),G(s,"modal",!o[1]),G(s,"active",o[1]||o[0]),G(s,"svelte-wnn9kb",!0)},m(n,e){D(n,s,e),u&&u.m(s,null),p(s,a),p(s,t),X(l,t,null),p(t,m),p(t,_),b&&b.m(_,null),p(t,g),p(t,f),y&&y.m(f,null),p(t,E),p(t,v),M&&M.m(v,null),r=!0},p(n,[e]){n[1]?u&&(u.d(1),u=null):u?u.p(n,e):(u=gs(n),u.c(),u.m(s,a)),b&&b.p&&(!r||e&64)&&Z(b,V,n,n[6],r?ss(V,n[6],e,Ss):x(n[6]),vs),y&&y.p&&(!r||e&64)&&Z(y,z,n,n[6],r?ss(z,n[6],e,null):x(n[6]),null),M&&M.p&&(!r||e&64)&&Z(M,T,n,n[6],r?ss(T,n[6],e,Is):x(n[6]),_s),fs(s,J=zs(j,[e&32&&n[5],(!r||e&4&&P!==(P="modal-"+n[2]))&&{class:P},{id:S}])),G(s,"modal",!n[1]),G(s,"active",n[1]||n[0]),G(s,"svelte-wnn9kb",!0)},i(n){r||(K(l.$$.fragment,n),K(b,n),K(y,n),K(M,n),r=!0)},o(n){Q(l.$$.fragment,n),Q(b,n),Q(y,n),Q(M,n),r=!1},d(n){n&&i(s),u&&u.d(),Y(l),b&&b.d(n),y&&y.d(n),M&&M.d(n)}}}function qs(o,s,a){const t=["custom","open","size"];let l=ms(s,t),{$$slots:m={},$$scope:_}=s,{custom:g=!1}=s,{open:f=!1}=s,{size:E="md"}=s;const v=Ds(),P=Hs(),S=()=>{g||a(0,f=!1),P("close","detail value")};return o.$$set=r=>{s=es(es({},s),Ps(r)),a(5,l=ms(s,t)),"custom"in r&&a(1,g=r.custom),"open"in r&&a(0,f=r.open),"size"in r&&a(2,E=r.size),"$$scope"in r&&a(6,_=r.$$scope)},[f,g,E,v,S,l,_,m]}class Vs extends $s{constructor(s){super(),Ms(this,s,qs,Ts,Es,{custom:1,open:0,size:2})}}function Os(o){let s;return{c(){s=L("Open Modal")},l(a){s=B(a,"Open Modal")},m(a,t){D(a,s,t)},d(a){a&&i(s)}}}function js(o){let s,a,t,l,m,_,g,f,E,v,P,S,r,u,V,b,z,y,T,M,j,J,n,e,c,I,H,q,A,F;return{c(){s=d("div"),a=d("p"),t=L("This is the content inside the modal."),l=C(),m=d("h4"),_=L("Lorem ipsum"),g=C(),f=d("p"),E=L(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo,
            dictum in vehicula sit amet, feugiat tempus tellus. Duis quis sodales risus.
            Etiam euismod ornare consequat.`),v=C(),P=d("p"),S=L(`Climb leg rub face on everything give attitude nap all day for under the
            bed. Chase mice attack feet but rub face on everything hopped up on goofballs.`),r=C(),u=d("h4"),V=L("Cupcake ipsum"),b=C(),z=d("p"),y=L(`Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw
            topping. Chupa chups apple pie carrot cake chocolate cake caramels.`),T=C(),M=d("p"),j=L(`De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor
            fornix dictum mauris. Hi brains mindless mortuis limbic cortex soulless
            creaturas optic nerve.`),J=C(),n=d("h4"),e=L("Candy ipsum"),c=C(),I=d("p"),H=L(`Efficiently unleash cross-media information without cross-media value.
            Quickly maximize timely deliverables for real-time schemas. Dramatically
            maintain clicks-and-mortar.`),q=C(),A=d("p"),F=L(`Caerphilly swiss fromage frais. Brie cheese and wine fromage frais chalk and
            cheese danish fontina smelly cheese who moved my cheese cow.`),this.h()},l(R){s=h(R,"DIV",{class:!0});var $=k(s);a=h($,"P",{});var as=k(a);t=B(as,"This is the content inside the modal."),as.forEach(i),l=w($),m=h($,"H4",{});var ts=k(m);_=B(ts,"Lorem ipsum"),ts.forEach(i),g=w($),f=h($,"P",{});var ns=k(f);E=B(ns,`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo,
            dictum in vehicula sit amet, feugiat tempus tellus. Duis quis sodales risus.
            Etiam euismod ornare consequat.`),ns.forEach(i),v=w($),P=h($,"P",{});var os=k(P);S=B(os,`Climb leg rub face on everything give attitude nap all day for under the
            bed. Chase mice attack feet but rub face on everything hopped up on goofballs.`),os.forEach(i),r=w($),u=h($,"H4",{});var ls=k(u);V=B(ls,"Cupcake ipsum"),ls.forEach(i),b=w($),z=h($,"P",{});var ps=k(z);y=B(ps,`Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw
            topping. Chupa chups apple pie carrot cake chocolate cake caramels.`),ps.forEach(i),T=w($),M=h($,"P",{});var is=k(M);j=B(is,`De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor
            fornix dictum mauris. Hi brains mindless mortuis limbic cortex soulless
            creaturas optic nerve.`),is.forEach(i),J=w($),n=h($,"H4",{});var cs=k(n);e=B(cs,"Candy ipsum"),cs.forEach(i),c=w($),I=h($,"P",{});var rs=k(I);H=B(rs,`Efficiently unleash cross-media information without cross-media value.
            Quickly maximize timely deliverables for real-time schemas. Dramatically
            maintain clicks-and-mortar.`),rs.forEach(i),q=w($),A=h($,"P",{});var us=k(A);F=B(us,`Caerphilly swiss fromage frais. Brie cheese and wine fromage frais chalk and
            cheese danish fontina smelly cheese who moved my cheese cow.`),us.forEach(i),$.forEach(i),this.h()},h(){O(s,"class","content")},m(R,$){D(R,s,$),p(s,a),p(a,t),p(s,l),p(s,m),p(m,_),p(s,g),p(s,f),p(f,E),p(s,v),p(s,P),p(P,S),p(s,r),p(s,u),p(u,V),p(s,b),p(s,z),p(z,y),p(s,T),p(s,M),p(M,j),p(s,J),p(s,n),p(n,e),p(s,c),p(s,I),p(I,H),p(s,q),p(s,A),p(A,F)},d(R){R&&i(s)}}}function Js(o){let s,a;return{c(){s=d("h3"),a=L("Modal header"),this.h()},l(t){s=h(t,"H3",{slot:!0});var l=k(s);a=B(l,"Modal header"),l.forEach(i),this.h()},h(){O(s,"slot","header")},m(t,l){D(t,s,l),p(s,a)},d(t){t&&i(s)}}}function Ks(o){let s;return{c(){s=L("Close Modal")},l(a){s=B(a,"Close Modal")},m(a,t){D(a,s,t)},d(a){a&&i(s)}}}function Qs(o){let s,a,t;return a=new ys({props:{variant:"primary",$$slots:{default:[Ks]},$$scope:{ctx:o}}}),a.$on("click",o[2]),{c(){s=d("p"),U(a.$$.fragment),this.h()},l(l){s=h(l,"P",{slot:!0});var m=k(s);W(a.$$.fragment,m),m.forEach(i),this.h()},h(){O(s,"slot","footer")},m(l,m){D(l,s,m),X(a,s,null),t=!0},p(l,m){const _={};m&64&&(_.$$scope={dirty:m,ctx:l}),a.$set(_)},i(l){t||(K(a.$$.fragment,l),t=!0)},o(l){Q(a.$$.fragment,l),t=!1},d(l){l&&i(s),Y(a)}}}function As(o){let s,a,t,l,m,_,g,f,E,v,P,S,r,u,V,b,z,y=`<code class="language-sv"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span>Button<span class="token punctuation">,</span> Modal<span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte-spectre'</span>

    <span class="token keyword">let</span> open <span class="token operator">=</span> <span class="token boolean">false</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> open <span class="token operator">=</span> <span class="token operator">!</span>open<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>Open Modal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span> <span class="token attr-name"><span class="token namespace">bind:</span>open</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Modal header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Modal content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Modal footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Modal</span><span class="token punctuation">></span></span></code>`,T;f=new ys({props:{variant:"primary",$$slots:{default:[Os]},$$scope:{ctx:o}}}),f.$on("click",o[1]);function M(e){o[3](e)}let j={size:o[0].size,custom:o[0].custom,$$slots:{footer:[Qs],header:[Js],default:[js]},$$scope:{ctx:o}};o[0].open!==void 0&&(j.open=o[0].open),v=new Vs({props:j}),ds.push(()=>hs(v,"open",M)),v.$on("close",o[4]);function J(e){o[5](e)}let n={config:Rs};return o[0]!==void 0&&(n.state=o[0]),u=new Bs({props:n}),ds.push(()=>hs(u,"state",J)),{c(){s=d("h1"),a=L(bs),t=C(),l=d("p"),m=L("Modals are flexible dialog prompts."),_=C(),g=d("p"),U(f.$$.fragment),E=C(),U(v.$$.fragment),S=C(),r=d("p"),U(u.$$.fragment),b=C(),z=d("pre"),this.h()},l(e){s=h(e,"H1",{});var c=k(s);a=B(c,bs),c.forEach(i),t=w(e),l=h(e,"P",{});var I=k(l);m=B(I,"Modals are flexible dialog prompts."),I.forEach(i),_=w(e),g=h(e,"P",{});var H=k(g);W(f.$$.fragment,H),E=w(H),W(v.$$.fragment,H),H.forEach(i),S=w(e),r=h(e,"P",{});var q=k(r);W(u.$$.fragment,q),q.forEach(i),b=w(e),z=h(e,"PRE",{class:!0});var A=k(z);A.forEach(i),this.h()},h(){O(z,"class","language-sv")},m(e,c){D(e,s,c),p(s,a),D(e,t,c),D(e,l,c),p(l,m),D(e,_,c),D(e,g,c),X(f,g,null),p(g,E),X(v,g,null),D(e,S,c),D(e,r,c),X(u,r,null),D(e,b,c),D(e,z,c),z.innerHTML=y,T=!0},p(e,[c]){const I={};c&64&&(I.$$scope={dirty:c,ctx:e}),f.$set(I);const H={};c&1&&(H.size=e[0].size),c&1&&(H.custom=e[0].custom),c&65&&(H.$$scope={dirty:c,ctx:e}),!P&&c&1&&(P=!0,H.open=e[0].open,ks(()=>P=!1)),v.$set(H);const q={};!V&&c&1&&(V=!0,q.state=e[0],ks(()=>V=!1)),u.$set(q)},i(e){T||(K(f.$$.fragment,e),K(v.$$.fragment,e),K(u.$$.fragment,e),T=!0)},o(e){Q(f.$$.fragment,e),Q(v.$$.fragment,e),Q(u.$$.fragment,e),T=!1},d(e){e&&i(s),e&&i(t),e&&i(l),e&&i(_),e&&i(g),Y(f),Y(v),e&&i(S),e&&i(r),Y(u),e&&i(b),e&&i(z)}}}const Gs={file:"modal.md",title:"Modal",api:[{title:"<slot>: HTMLelement | SvelteComponent",description:"Modal body",variables:"HTMLelement | SvelteComponent"},{title:'<slot name="header">: HTMLelement | SvelteComponent',description:"Modal header",variables:"HTMLelement | SvelteComponent"},{title:'<slot name="footer">: HTMLelement | SvelteComponent',description:"Modal footer",variables:"HTMLelement | SvelteComponent"},{title:'size: Size = "md"',description:"Modal size",variables:"sm | md | lg | fs"},{title:"open: boolean = false",description:"Modal open state",variables:"true | false"},{title:"custom: boolean = true",description:"Modal custom",variables:"true | false"},{title:"on:close={() => event}",description:"Modal close event",variables:"true | false"}],config:{size:{options:["sm","md","lg","fs"]},open:{type:"checkbox"},custom:{type:"checkbox"}}},{file:ne,title:bs,api:oe,config:Rs}=Gs;function Us(o,s,a){let t={size:"md",open:!1,custom:!1};const l=()=>a(0,t.open=!t.open,t),m=()=>(a(0,t.custom=!1,t),a(0,t.open=!1,t));function _(E){o.$$.not_equal(t.open,E)&&(t.open=E,a(0,t))}const g=()=>a(0,t.custom=!1,t);function f(E){t=E,a(0,t)}return[t,l,m,_,g,f]}class le extends $s{constructor(s){super(),Ms(this,s,Us,As,Es,{})}}export{le as default,Gs as metadata};