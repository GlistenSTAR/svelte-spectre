function k(){}const I=t=>t;function ut(t,e){for(const n in e)t[n]=e[n];return t}function Mt(t){return t()}function mt(){return Object.create(null)}function N(t){t.forEach(Mt)}function D(t){return typeof t=="function"}function Wt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let z;function $e(t,e){return z||(z=document.createElement("a")),z.href=e,t===z.href}function Lt(t){return Object.keys(t).length===0}function Gt(t,...e){if(t==null)return k;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ae(t,e,n){t.$$.on_destroy.push(Gt(e,n))}function Re(t,e,n,r){if(t){const i=St(t,e,n,r);return t[0](i)}}function St(t,e,n,r){return t[1]&&r?ut(n.ctx.slice(),t[1](r(e))):n.ctx}function Ee(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const a=[],s=Math.max(e.dirty.length,i.length);for(let o=0;o<s;o+=1)a[o]=e.dirty[o]|i[o];return a}return e.dirty|i}return e.dirty}function He(t,e,n,r,i,a){if(i){const s=St(e,n,r,a);t.p(s,i)}}function Te(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Fe(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Ne(t,e){const n={};e=new Set(e);for(const r in t)!e.has(r)&&r[0]!=="$"&&(n[r]=t[r]);return n}function je(t){const e={};for(const n in t)e[n]=!0;return e}function Ce(t){return t&&D(t.destroy)?t.destroy:k}const $t=typeof window!="undefined";let et=$t?()=>window.performance.now():()=>Date.now(),pt=$t?t=>requestAnimationFrame(t):k;const F=new Set;function At(t){F.forEach(e=>{e.c(t)||(F.delete(e),e.f())}),F.size!==0&&pt(At)}function nt(t){let e;return F.size===0&&pt(At),{promise:new Promise(n=>{F.add(e={c:t,f:n})}),abort(){F.delete(e)}}}let rt=!1;function zt(){rt=!0}function Ut(){rt=!1}function Vt(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function Zt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const f=[];for(let u=0;u<e.length;u++){const d=e[u];d.claim_order!==void 0&&f.push(d)}e=f}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let f=0;f<e.length;f++){const u=e[f].claim_order,d=(i>0&&e[n[i]].claim_order<=u?i+1:Vt(1,i,l=>e[n[l]].claim_order,u))-1;r[f]=n[d]+1;const c=d+1;n[c]=f,i=Math.max(c,i)}const a=[],s=[];let o=e.length-1;for(let f=n[i]+1;f!=0;f=r[f-1]){for(a.push(e[f-1]);o>=f;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);a.reverse(),s.sort((f,u)=>f.claim_order-u.claim_order);for(let f=0,u=0;f<s.length;f++){for(;u<a.length&&s[f].claim_order>=a[u].claim_order;)u++;const d=u<a.length?a[u]:null;t.insertBefore(s[f],d)}}function Jt(t,e){t.appendChild(e)}function Rt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Kt(t){const e=Et("style");return Qt(Rt(t),e),e.sheet}function Qt(t,e){Jt(t.head||t,e)}function Xt(t,e){if(rt){for(Zt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Be(t,e,n){rt&&!n?Xt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Yt(t){t.parentNode.removeChild(t)}function Oe(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Et(t){return document.createElement(t)}function te(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function gt(t){return document.createTextNode(t)}function qe(){return gt(" ")}function Pe(){return gt("")}function Ie(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function De(t){return function(e){return e.preventDefault(),t.call(this,e)}}function We(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function Ht(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Le(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)e[r]==null?t.removeAttribute(r):r==="style"?t.style.cssText=e[r]:r==="__value"?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:Ht(t,r,e[r])}function Ge(t,e){for(const n in e)Ht(t,n,e[n])}function ze(t){return t===""?null:+t}function ee(t){return Array.from(t.childNodes)}function ne(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Tt(t,e,n,r,i=!1){ne(t);const a=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const f=n(o);return f===void 0?t.splice(s,1):t[s]=f,i||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const f=n(o);return f===void 0?t.splice(s,1):t[s]=f,i?f===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return r()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function Ft(t,e,n,r){return Tt(t,i=>i.nodeName===e,i=>{const a=[];for(let s=0;s<i.attributes.length;s++){const o=i.attributes[s];n[o.name]||a.push(o.name)}a.forEach(s=>i.removeAttribute(s))},()=>r(e))}function Ue(t,e,n){return Ft(t,e,n,Et)}function Ve(t,e,n){return Ft(t,e,n,te)}function re(t,e){return Tt(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>gt(e),!0)}function Ze(t){return re(t," ")}function Je(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ke(t,e){t.value=e==null?"":e}function Qe(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Xe(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e){r.selected=!0;return}}t.selectedIndex=-1}function Ye(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];r.selected=~e.indexOf(r.__value)}}function tn(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function en(t){return[].map.call(t.querySelectorAll(":checked"),e=>e.__value)}function nn(t,e,n){t.classList[n?"add":"remove"](e)}function Nt(t,e,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,!1,e),r}function rn(t,e=document.body){return Array.from(e.querySelectorAll(t))}const Q=new Map;let X=0;function ie(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function ae(t,e){const n={stylesheet:Kt(e),rules:{}};return Q.set(t,n),n}function Y(t,e,n,r,i,a,s,o=0){const f=16.666/r;let u=`{
`;for(let g=0;g<=1;g+=f){const b=e+(n-e)*a(g);u+=g*100+`%{${s(b,1-b)}}
`}const d=u+`100% {${s(n,1-n)}}
}`,c=`__svelte_${ie(d)}_${o}`,l=Rt(t),{stylesheet:h,rules:p}=Q.get(l)||ae(l,t);p[c]||(p[c]=!0,h.insertRule(`@keyframes ${c} ${d}`,h.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${c} ${r}ms linear ${i}ms 1 both`,X+=1,c}function tt(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?a=>a.indexOf(e)<0:a=>a.indexOf("__svelte")===-1),i=n.length-r.length;i&&(t.style.animation=r.join(", "),X-=i,X||se())}function se(){pt(()=>{X||(Q.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),Q.clear())})}function an(t,e,n,r){if(!e)return k;const i=t.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return k;const{delay:a=0,duration:s=300,easing:o=I,start:f=et()+a,end:u=f+s,tick:d=k,css:c}=n(t,{from:e,to:i},r);let l=!0,h=!1,p;function m(){c&&(p=Y(t,0,1,s,a,o,c)),a||(h=!0)}function g(){c&&tt(t,p),l=!1}return nt(b=>{if(!h&&b>=f&&(h=!0),h&&b>=u&&(d(1,0),g()),!l)return!1;if(h){const v=b-f,x=0+1*o(v/s);d(x,1-x)}return!0}),m(),d(0,1),g}function sn(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:r}=e,i=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=r,oe(t,i)}}function oe(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const r=getComputedStyle(t),i=r.transform==="none"?"":r.transform;t.style.transform=`${i} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let q;function B(t){q=t}function W(){if(!q)throw new Error("Function called outside component initialization");return q}function on(t){W().$$.on_mount.push(t)}function fn(t){W().$$.after_update.push(t)}function un(){const t=W();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const i=Nt(e,n);r.slice().forEach(a=>{a.call(t,i)})}}}function cn(t,e){W().$$.context.set(t,e)}function ln(t){return W().$$.context.get(t)}function hn(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const C=[],_t=[],J=[],ct=[],jt=Promise.resolve();let lt=!1;function Ct(){lt||(lt=!0,jt.then(Bt))}function dn(){return Ct(),jt}function P(t){J.push(t)}function pn(t){ct.push(t)}const at=new Set;let U=0;function Bt(){const t=q;do{for(;U<C.length;){const e=C[U];U++,B(e),fe(e.$$)}for(B(null),C.length=0,U=0;_t.length;)_t.pop()();for(let e=0;e<J.length;e+=1){const n=J[e];at.has(n)||(at.add(n),n())}J.length=0}while(C.length);for(;ct.length;)ct.pop()();lt=!1,at.clear(),B(t)}function fe(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}let j;function Ot(){return j||(j=Promise.resolve(),j.then(()=>{j=null})),j}function O(t,e,n){t.dispatchEvent(Nt(`${e?"intro":"outro"}${n}`))}const K=new Set;let R;function gn(){R={r:0,c:[],p:R}}function bn(){R.r||N(R.c),R=R.p}function qt(t,e){t&&t.i&&(K.delete(t),t.i(e))}function ue(t,e,n,r){if(t&&t.o){if(K.has(t))return;K.add(t),R.c.push(()=>{K.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const Pt={duration:0};function mn(t,e,n){let r=e(t,n),i=!1,a,s,o=0;function f(){a&&tt(t,a)}function u(){const{delay:c=0,duration:l=300,easing:h=I,tick:p=k,css:m}=r||Pt;m&&(a=Y(t,0,1,l,c,h,m,o++)),p(0,1);const g=et()+c,b=g+l;s&&s.abort(),i=!0,P(()=>O(t,!0,"start")),s=nt(v=>{if(i){if(v>=b)return p(1,0),O(t,!0,"end"),f(),i=!1;if(v>=g){const x=h((v-g)/l);p(x,1-x)}}return i})}let d=!1;return{start(){d||(d=!0,tt(t),D(r)?(r=r(),Ot().then(u)):u())},invalidate(){d=!1},end(){i&&(f(),i=!1)}}}function _n(t,e,n,r){let i=e(t,n),a=r?0:1,s=null,o=null,f=null;function u(){f&&tt(t,f)}function d(l,h){const p=l.b-a;return h*=Math.abs(p),{a,b:l.b,d:p,duration:h,start:l.start,end:l.start+h,group:l.group}}function c(l){const{delay:h=0,duration:p=300,easing:m=I,tick:g=k,css:b}=i||Pt,v={start:et()+h,b:l};l||(v.group=R,R.r+=1),s||o?o=v:(b&&(u(),f=Y(t,a,l,p,h,m,b)),l&&g(0,1),s=d(v,p),P(()=>O(t,l,"start")),nt(x=>{if(o&&x>o.start&&(s=d(o,p),o=null,O(t,s.b,"start"),b&&(u(),f=Y(t,a,s.b,s.duration,0,m,i.css))),s){if(x>=s.end)g(a=s.b,1-a),O(t,s.b,"end"),o||(s.b?u():--s.group.r||N(s.group.c)),s=null;else if(x>=s.start){const L=x-s.start;a=s.a+s.d*m(L/s.duration),g(a,1-a)}}return!!(s||o)}))}return{run(l){D(i)?Ot().then(()=>{i=i(),c(l)}):c(l)},end(){u(),s=o=null}}}const yn=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function ce(t,e){ue(t,1,1,()=>{e.delete(t.key)})}function vn(t,e){t.f(),ce(t,e)}function xn(t,e,n,r,i,a,s,o,f,u,d,c){let l=t.length,h=a.length,p=l;const m={};for(;p--;)m[t[p].key]=p;const g=[],b=new Map,v=new Map;for(p=h;p--;){const _=c(i,a,p),S=n(_);let $=s.get(S);$?r&&$.p(_,e):($=u(S,_),$.c()),b.set(S,g[p]=$),S in m&&v.set(S,Math.abs(p-m[S]))}const x=new Set,L=new Set;function it(_){qt(_,1),_.m(o,d),s.set(_.key,_),d=_.first,h--}for(;l&&h;){const _=g[h-1],S=t[l-1],$=_.key,G=S.key;_===S?(d=_.first,l--,h--):b.has(G)?!s.has($)||x.has($)?it(_):L.has(G)?l--:v.get($)>v.get(G)?(L.add($),it(_)):(x.add(G),l--):(f(S,s),l--)}for(;l--;){const _=t[l];b.has(_.key)||f(_,s)}for(;h;)it(g[h-1]);return g}function wn(t,e){const n={},r={},i={$$scope:1};let a=t.length;for(;a--;){const s=t[a],o=e[a];if(o){for(const f in s)f in o||(r[f]=1);for(const f in o)i[f]||(n[f]=o[f],i[f]=1);t[a]=o}else for(const f in s)i[f]=1}for(const s in r)s in n||(n[s]=void 0);return n}function kn(t){return typeof t=="object"&&t!==null?t:{}}function Mn(t,e,n){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function Sn(t){t&&t.c()}function $n(t,e){t&&t.l(e)}function le(t,e,n,r){const{fragment:i,on_mount:a,on_destroy:s,after_update:o}=t.$$;i&&i.m(e,n),r||P(()=>{const f=a.map(Mt).filter(D);s?s.push(...f):N(f),t.$$.on_mount=[]}),o.forEach(P)}function he(t,e){const n=t.$$;n.fragment!==null&&(N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function de(t,e){t.$$.dirty[0]===-1&&(C.push(t),Ct(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function An(t,e,n,r,i,a,s,o=[-1]){const f=q;B(t);const u=t.$$={fragment:null,ctx:null,props:a,update:k,not_equal:i,bound:mt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:mt(),dirty:o,skip_bound:!1,root:e.target||f.$$.root};s&&s(u.root);let d=!1;if(u.ctx=n?n(t,e.props||{},(c,l,...h)=>{const p=h.length?h[0]:l;return u.ctx&&i(u.ctx[c],u.ctx[c]=p)&&(!u.skip_bound&&u.bound[c]&&u.bound[c](p),d&&de(t,c)),l}):[],u.update(),d=!0,N(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){zt();const c=ee(e.target);u.fragment&&u.fragment.l(c),c.forEach(Yt)}else u.fragment&&u.fragment.c();e.intro&&qt(t.$$.fragment),le(t,e.target,e.anchor,e.customElement),Ut(),Bt()}B(f)}class Rn{$destroy(){he(this,1),this.$destroy=k}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!Lt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const T=[];function It(t,e=k){let n;const r=new Set;function i(o){if(Wt(t,o)&&(t=o,n)){const f=!T.length;for(const u of r)u[1](),T.push(u,t);if(f){for(let u=0;u<T.length;u+=2)T[u][0](T[u+1]);T.length=0}}}function a(o){i(o(t))}function s(o,f=k){const u=[o,f];return r.add(u),r.size===1&&(n=e(i)||k),o(t),()=>{r.delete(u),r.size===0&&(n(),n=null)}}return{set:i,update:a,subscribe:s}}function bt(t){const e=t-1;return e*e*e+1}function En(t,{delay:e=0,duration:n=400,easing:r=I}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:a=>`opacity: ${a*i}`}}function Hn(t,{delay:e=0,duration:n=400,easing:r=bt,x:i=0,y:a=0,opacity:s=0}={}){const o=getComputedStyle(t),f=+o.opacity,u=o.transform==="none"?"":o.transform,d=f*(1-s);return{delay:e,duration:n,easing:r,css:(c,l)=>`
			transform: ${u} translate(${(1-c)*i}px, ${(1-c)*a}px);
			opacity: ${f-d*l}`}}function Tn(t,{delay:e=0,duration:n=400,easing:r=bt}={}){const i=getComputedStyle(t),a=+i.opacity,s=parseFloat(i.height),o=parseFloat(i.paddingTop),f=parseFloat(i.paddingBottom),u=parseFloat(i.marginTop),d=parseFloat(i.marginBottom),c=parseFloat(i.borderTopWidth),l=parseFloat(i.borderBottomWidth);return{delay:e,duration:n,easing:r,css:h=>`overflow: hidden;opacity: ${Math.min(h*20,1)*a};height: ${h*s}px;padding-top: ${h*o}px;padding-bottom: ${h*f}px;margin-top: ${h*u}px;margin-bottom: ${h*d}px;border-top-width: ${h*c}px;border-bottom-width: ${h*l}px;`}}function y(t,e){pe(t)&&(t="100%");var n=ge(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),n&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function V(t){return Math.min(1,Math.max(0,t))}function pe(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function ge(t){return typeof t=="string"&&t.indexOf("%")!==-1}function Dt(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function Z(t){return t<=1?Number(t)*100+"%":t}function H(t){return t.length===1?"0"+t:String(t)}function be(t,e,n){return{r:y(t,255)*255,g:y(e,255)*255,b:y(n,255)*255}}function yt(t,e,n){t=y(t,255),e=y(e,255),n=y(n,255);var r=Math.max(t,e,n),i=Math.min(t,e,n),a=0,s=0,o=(r+i)/2;if(r===i)s=0,a=0;else{var f=r-i;switch(s=o>.5?f/(2-r-i):f/(r+i),r){case t:a=(e-n)/f+(e<n?6:0);break;case e:a=(n-t)/f+2;break;case n:a=(t-e)/f+4;break}a/=6}return{h:a,s,l:o}}function st(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*(6*n):n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function me(t,e,n){var r,i,a;if(t=y(t,360),e=y(e,100),n=y(n,100),e===0)i=n,a=n,r=n;else{var s=n<.5?n*(1+e):n+e-n*e,o=2*n-s;r=st(o,s,t+1/3),i=st(o,s,t),a=st(o,s,t-1/3)}return{r:r*255,g:i*255,b:a*255}}function vt(t,e,n){t=y(t,255),e=y(e,255),n=y(n,255);var r=Math.max(t,e,n),i=Math.min(t,e,n),a=0,s=r,o=r-i,f=r===0?0:o/r;if(r===i)a=0;else{switch(r){case t:a=(e-n)/o+(e<n?6:0);break;case e:a=(n-t)/o+2;break;case n:a=(t-e)/o+4;break}a/=6}return{h:a,s:f,v:s}}function _e(t,e,n){t=y(t,360)*6,e=y(e,100),n=y(n,100);var r=Math.floor(t),i=t-r,a=n*(1-e),s=n*(1-i*e),o=n*(1-(1-i)*e),f=r%6,u=[n,s,a,a,o,n][f],d=[o,n,n,s,a,a][f],c=[a,a,o,n,n,s][f];return{r:u*255,g:d*255,b:c*255}}function xt(t,e,n,r){var i=[H(Math.round(t).toString(16)),H(Math.round(e).toString(16)),H(Math.round(n).toString(16))];return r&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function ye(t,e,n,r,i){var a=[H(Math.round(t).toString(16)),H(Math.round(e).toString(16)),H(Math.round(n).toString(16)),H(ve(r))];return i&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))&&a[3].startsWith(a[3].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}function ve(t){return Math.round(parseFloat(t)*255).toString(16)}function wt(t){return w(t)/255}function w(t){return parseInt(t,16)}function xe(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}var ht={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function we(t){var e={r:0,g:0,b:0},n=1,r=null,i=null,a=null,s=!1,o=!1;return typeof t=="string"&&(t=Se(t)),typeof t=="object"&&(A(t.r)&&A(t.g)&&A(t.b)?(e=be(t.r,t.g,t.b),s=!0,o=String(t.r).substr(-1)==="%"?"prgb":"rgb"):A(t.h)&&A(t.s)&&A(t.v)?(r=Z(t.s),i=Z(t.v),e=_e(t.h,r,i),s=!0,o="hsv"):A(t.h)&&A(t.s)&&A(t.l)&&(r=Z(t.s),a=Z(t.l),e=me(t.h,r,a),s=!0,o="hsl"),Object.prototype.hasOwnProperty.call(t,"a")&&(n=t.a)),n=Dt(n),{ok:s,format:t.format||o,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:n}}var ke="[-\\+]?\\d+%?",Me="[-\\+]?\\d*\\.\\d+%?",E="(?:"+Me+")|(?:"+ke+")",ot="[\\s|\\(]+("+E+")[,|\\s]+("+E+")[,|\\s]+("+E+")\\s*\\)?",ft="[\\s|\\(]+("+E+")[,|\\s]+("+E+")[,|\\s]+("+E+")[,|\\s]+("+E+")\\s*\\)?",M={CSS_UNIT:new RegExp(E),rgb:new RegExp("rgb"+ot),rgba:new RegExp("rgba"+ft),hsl:new RegExp("hsl"+ot),hsla:new RegExp("hsla"+ft),hsv:new RegExp("hsv"+ot),hsva:new RegExp("hsva"+ft),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Se(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;var e=!1;if(ht[t])t=ht[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var n=M.rgb.exec(t);return n?{r:n[1],g:n[2],b:n[3]}:(n=M.rgba.exec(t),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=M.hsl.exec(t),n?{h:n[1],s:n[2],l:n[3]}:(n=M.hsla.exec(t),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=M.hsv.exec(t),n?{h:n[1],s:n[2],v:n[3]}:(n=M.hsva.exec(t),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=M.hex8.exec(t),n?{r:w(n[1]),g:w(n[2]),b:w(n[3]),a:wt(n[4]),format:e?"name":"hex8"}:(n=M.hex6.exec(t),n?{r:w(n[1]),g:w(n[2]),b:w(n[3]),format:e?"name":"hex"}:(n=M.hex4.exec(t),n?{r:w(n[1]+n[1]),g:w(n[2]+n[2]),b:w(n[3]+n[3]),a:wt(n[4]+n[4]),format:e?"name":"hex8"}:(n=M.hex3.exec(t),n?{r:w(n[1]+n[1]),g:w(n[2]+n[2]),b:w(n[3]+n[3]),format:e?"name":"hex"}:!1)))))))))}function A(t){return Boolean(M.CSS_UNIT.exec(String(t)))}var Fn=function(){function t(e,n){e===void 0&&(e=""),n===void 0&&(n={});var r;if(e instanceof t)return e;typeof e=="number"&&(e=xe(e)),this.originalInput=e;var i=we(e);this.originalInput=e,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=(r=n.format)!==null&&r!==void 0?r:i.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},t.prototype.getBrightness=function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},t.prototype.getLuminance=function(){var e=this.toRgb(),n,r,i,a=e.r/255,s=e.g/255,o=e.b/255;return a<=.03928?n=a/12.92:n=Math.pow((a+.055)/1.055,2.4),s<=.03928?r=s/12.92:r=Math.pow((s+.055)/1.055,2.4),o<=.03928?i=o/12.92:i=Math.pow((o+.055)/1.055,2.4),.2126*n+.7152*r+.0722*i},t.prototype.getAlpha=function(){return this.a},t.prototype.setAlpha=function(e){return this.a=Dt(e),this.roundA=Math.round(100*this.a)/100,this},t.prototype.toHsv=function(){var e=vt(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}},t.prototype.toHsvString=function(){var e=vt(this.r,this.g,this.b),n=Math.round(e.h*360),r=Math.round(e.s*100),i=Math.round(e.v*100);return this.a===1?"hsv("+n+", "+r+"%, "+i+"%)":"hsva("+n+", "+r+"%, "+i+"%, "+this.roundA+")"},t.prototype.toHsl=function(){var e=yt(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}},t.prototype.toHslString=function(){var e=yt(this.r,this.g,this.b),n=Math.round(e.h*360),r=Math.round(e.s*100),i=Math.round(e.l*100);return this.a===1?"hsl("+n+", "+r+"%, "+i+"%)":"hsla("+n+", "+r+"%, "+i+"%, "+this.roundA+")"},t.prototype.toHex=function(e){return e===void 0&&(e=!1),xt(this.r,this.g,this.b,e)},t.prototype.toHexString=function(e){return e===void 0&&(e=!1),"#"+this.toHex(e)},t.prototype.toHex8=function(e){return e===void 0&&(e=!1),ye(this.r,this.g,this.b,this.a,e)},t.prototype.toHex8String=function(e){return e===void 0&&(e=!1),"#"+this.toHex8(e)},t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},t.prototype.toRgbString=function(){var e=Math.round(this.r),n=Math.round(this.g),r=Math.round(this.b);return this.a===1?"rgb("+e+", "+n+", "+r+")":"rgba("+e+", "+n+", "+r+", "+this.roundA+")"},t.prototype.toPercentageRgb=function(){var e=function(n){return Math.round(y(n,255)*100)+"%"};return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}},t.prototype.toPercentageRgbString=function(){var e=function(n){return Math.round(y(n,255)*100)};return this.a===1?"rgb("+e(this.r)+"%, "+e(this.g)+"%, "+e(this.b)+"%)":"rgba("+e(this.r)+"%, "+e(this.g)+"%, "+e(this.b)+"%, "+this.roundA+")"},t.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var e="#"+xt(this.r,this.g,this.b,!1),n=0,r=Object.entries(ht);n<r.length;n++){var i=r[n],a=i[0],s=i[1];if(e===s)return a}return!1},t.prototype.toString=function(e){var n=Boolean(e);e=e!=null?e:this.format;var r=!1,i=this.a<1&&this.a>=0,a=!n&&i&&(e.startsWith("hex")||e==="name");return a?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(r=this.toRgbString()),e==="prgb"&&(r=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(r=this.toHexString()),e==="hex3"&&(r=this.toHexString(!0)),e==="hex4"&&(r=this.toHex8String(!0)),e==="hex8"&&(r=this.toHex8String()),e==="name"&&(r=this.toName()),e==="hsl"&&(r=this.toHslString()),e==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},t.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},t.prototype.clone=function(){return new t(this.toString())},t.prototype.lighten=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.l+=e/100,n.l=V(n.l),new t(n)},t.prototype.brighten=function(e){e===void 0&&(e=10);var n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(e/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(e/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(e/100)))),new t(n)},t.prototype.darken=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.l-=e/100,n.l=V(n.l),new t(n)},t.prototype.tint=function(e){return e===void 0&&(e=10),this.mix("white",e)},t.prototype.shade=function(e){return e===void 0&&(e=10),this.mix("black",e)},t.prototype.desaturate=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.s-=e/100,n.s=V(n.s),new t(n)},t.prototype.saturate=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.s+=e/100,n.s=V(n.s),new t(n)},t.prototype.greyscale=function(){return this.desaturate(100)},t.prototype.spin=function(e){var n=this.toHsl(),r=(n.h+e)%360;return n.h=r<0?360+r:r,new t(n)},t.prototype.mix=function(e,n){n===void 0&&(n=50);var r=this.toRgb(),i=new t(e).toRgb(),a=n/100,s={r:(i.r-r.r)*a+r.r,g:(i.g-r.g)*a+r.g,b:(i.b-r.b)*a+r.b,a:(i.a-r.a)*a+r.a};return new t(s)},t.prototype.analogous=function(e,n){e===void 0&&(e=6),n===void 0&&(n=30);var r=this.toHsl(),i=360/n,a=[this];for(r.h=(r.h-(i*e>>1)+720)%360;--e;)r.h=(r.h+i)%360,a.push(new t(r));return a},t.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new t(e)},t.prototype.monochromatic=function(e){e===void 0&&(e=6);for(var n=this.toHsv(),r=n.h,i=n.s,a=n.v,s=[],o=1/e;e--;)s.push(new t({h:r,s:i,v:a})),a=(a+o)%1;return s},t.prototype.splitcomplement=function(){var e=this.toHsl(),n=e.h;return[this,new t({h:(n+72)%360,s:e.s,l:e.l}),new t({h:(n+216)%360,s:e.s,l:e.l})]},t.prototype.onBackground=function(e){var n=this.toRgb(),r=new t(e).toRgb();return new t({r:r.r+(n.r-r.r)*n.a,g:r.g+(n.g-r.g)*n.a,b:r.b+(n.b-r.b)*n.a})},t.prototype.triad=function(){return this.polyad(3)},t.prototype.tetrad=function(){return this.polyad(4)},t.prototype.polyad=function(e){for(var n=this.toHsl(),r=n.h,i=[this],a=360/e,s=1;s<e;s++)i.push(new t({h:(r+s*a)%360,s:n.s,l:n.l}));return i},t.prototype.equals=function(e){return this.toRgbString()===new t(e).toRgbString()},t}();function kt(t){return Object.prototype.toString.call(t)==="[object Date]"}function dt(t,e){if(t===e||t!==t)return()=>t;const n=typeof t;if(n!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const r=e.map((i,a)=>dt(t[a],i));return i=>r.map(a=>a(i))}if(n==="object"){if(!t||!e)throw new Error("Object cannot be null");if(kt(t)&&kt(e)){t=t.getTime(),e=e.getTime();const a=e-t;return s=>new Date(t+s*a)}const r=Object.keys(e),i={};return r.forEach(a=>{i[a]=dt(t[a],e[a])}),a=>{const s={};return r.forEach(o=>{s[o]=i[o](a)}),s}}if(n==="number"){const r=e-t;return i=>t+i*r}throw new Error(`Cannot interpolate ${n} values`)}function Nn(t,e={}){const n=It(t);let r,i=t;function a(s,o){if(t==null)return n.set(t=s),Promise.resolve();i=s;let f=r,u=!1,{delay:d=0,duration:c=400,easing:l=I,interpolate:h=dt}=ut(ut({},e),o);if(c===0)return f&&(f.abort(),f=null),n.set(t=i),Promise.resolve();const p=et()+d;let m;return r=nt(g=>{if(g<p)return!0;u||(m=h(t,s),typeof c=="function"&&(c=c(t,s)),u=!0),f&&(f.abort(),f=null);const b=g-p;return b>c?(n.set(t=s),!1):(n.set(t=m(l(b/c))),!0)}),r.promise}return{set:a,update:(s,o)=>a(s(i,t),o),subscribe:n.subscribe}}function jn(t,{from:e,to:n},r={}){const i=getComputedStyle(t),a=i.transform==="none"?"":i.transform,[s,o]=i.transformOrigin.split(" ").map(parseFloat),f=e.left+e.width*s/n.width-(n.left+s),u=e.top+e.height*o/n.height-(n.top+o),{delay:d=0,duration:c=h=>Math.sqrt(h)*120,easing:l=bt}=r;return{delay:d,duration:D(c)?c(Math.sqrt(f*f+u*u)):c,easing:l,css:(h,p)=>{const m=p*f,g=p*u,b=h+p*e.width/n.width,v=h+p*e.height/n.height;return`transform: ${a} translate(${m}px, ${g}px) scale(${b}, ${v});`}}}function Cn(t){return It({classNames:""},e=>{if(typeof window=="undefined")return;let n={},r=()=>e(function(i){let a={classNames:""},s=[];for(let o in i)a[o]=i[o].matches,a[o]&&s.push("media-"+o);return a.classNames=s.join(" "),a}(n));for(let i in t){let a=window.matchMedia(t[i]);n[i]=a,n[i].addListener(r)}return r(),()=>{for(let i in n)n[i].removeListener(r)}})}export{_n as $,kn as A,he as B,ut as C,It as D,dn as E,Le as F,nn as G,Xt as H,xn as I,vn as J,Oe as K,Ne as L,Ae as M,Fe as N,sn as O,an as P,P as Q,mn as R,Rn as S,Hn as T,jn as U,k as V,Ie as W,De as X,He as Y,Te as Z,Ee as _,ee as a,En as a0,Re as a1,je as a2,rn as a3,yn as a4,_t as a5,Mn as a6,pn as a7,ln as a8,D as a9,N as aa,un as ab,Tn as ac,hn as ad,Ce as ae,te as af,Ve as ag,Ge as ah,Cn as ai,Nn as aj,I as ak,Ke as al,We as am,tn as an,ze as ao,Xe as ap,Fn as aq,ce as ar,en as as,Ye as at,$e as au,Ht as b,Ue as c,Yt as d,Et as e,Qe as f,Be as g,re as h,An as i,Je as j,qe as k,Pe as l,Ze as m,gn as n,ue as o,bn as p,qt as q,cn as r,Wt as s,gt as t,fn as u,on as v,Sn as w,$n as x,le as y,wn as z};
