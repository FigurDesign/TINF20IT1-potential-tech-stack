(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function y(){}function I(e){return e()}function V(){return Object.create(null)}function A(e){e.forEach(I)}function K(e){return typeof e=="function"}function F(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let S;function X(e,t){return S||(S=document.createElement("a")),S.href=t,e===S.href}function Y(e){return Object.keys(e).length===0}function c(e,t){e.appendChild(t)}function z(e,t,n){e.insertBefore(t,n||null)}function P(e){e.parentNode&&e.parentNode.removeChild(e)}function a(e){return document.createElement(e)}function j(e){return document.createTextNode(e)}function w(){return j(" ")}function Z(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function f(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ee(e){return Array.from(e.childNodes)}function te(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let M;function E(e){M=e}const $=[],B=[];let v=[];const H=[],ne=Promise.resolve();let k=!1;function re(){k||(k=!0,ne.then(D))}function q(e){v.push(e)}const N=new Set;let g=0;function D(){if(g!==0)return;const e=M;do{try{for(;g<$.length;){const t=$[g];g++,E(t),oe(t.$$)}}catch(t){throw $.length=0,g=0,t}for(E(null),$.length=0,g=0;B.length;)B.pop()();for(let t=0;t<v.length;t+=1){const n=v[t];N.has(n)||(N.add(n),n())}v.length=0}while($.length);for(;H.length;)H.pop()();k=!1,N.clear(),E(e)}function oe(e){if(e.fragment!==null){e.update(),A(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(q)}}function se(e){const t=[],n=[];v.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),v=t}const C=new Set;let ie;function G(e,t){e&&e.i&&(C.delete(e),e.i(t))}function le(e,t,n,r){if(e&&e.o){if(C.has(e))return;C.add(e),ie.c.push(()=>{C.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function ce(e){e&&e.c()}function J(e,t,n,r){const{fragment:o,after_update:s}=e.$$;o&&o.m(t,n),r||q(()=>{const i=e.$$.on_mount.map(I).filter(K);e.$$.on_destroy?e.$$.on_destroy.push(...i):A(i),e.$$.on_mount=[]}),s.forEach(q)}function Q(e,t){const n=e.$$;n.fragment!==null&&(se(n.after_update),A(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ue(e,t){e.$$.dirty[0]===-1&&($.push(e),re(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function R(e,t,n,r,o,s,i,h=[-1]){const p=M;E(e);const l=e.$$={fragment:null,ctx:[],props:s,update:y,not_equal:o,bound:V(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(p?p.$$.context:[])),callbacks:V(),dirty:h,skip_bound:!1,root:t.target||p.$$.root};i&&i(l.root);let b=!1;if(l.ctx=n?n(e,t.props||{},(u,d,...x)=>{const _=x.length?x[0]:d;return l.ctx&&o(l.ctx[u],l.ctx[u]=_)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](_),b&&ue(e,u)),d}):[],l.update(),b=!0,A(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const u=ee(t.target);l.fragment&&l.fragment.l(u),u.forEach(P)}else l.fragment&&l.fragment.c();t.intro&&G(e.$$.fragment),J(e,t.target,t.anchor,t.customElement),D()}E(p)}class U{$destroy(){Q(this,1),this.$destroy=y}$on(t,n){if(!K(n))return y;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!Y(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const fe="/assets/svelte-a39f39b7.svg";function ae(e){let t,n,r,o,s;return{c(){t=a("button"),n=j("count is "),r=j(e[0])},m(i,h){z(i,t,h),c(t,n),c(t,r),o||(s=Z(t,"click",e[1]),o=!0)},p(i,[h]){h&1&&te(r,i[0])},i:y,o:y,d(i){i&&P(t),o=!1,s()}}}function de(e,t,n){let r=0;return[r,()=>{n(0,r+=1)}]}class he extends U{constructor(t){super(),R(this,t,de,ae,F,{})}}function pe(e){let t,n,r,o,s,i,h,p,l,b,u,d,x,_,T,L,O;return d=new he({}),{c(){t=a("main"),n=a("div"),r=a("a"),r.innerHTML='<img src="/vite.svg" class="logo svelte-11cv5lq" alt="Vite Logo"/>',o=w(),s=a("a"),i=a("img"),p=w(),l=a("h1"),l.textContent="Vite + Svelte",b=w(),u=a("div"),ce(d.$$.fragment),x=w(),_=a("p"),_.innerHTML='Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!',T=w(),L=a("p"),L.textContent="Click on the Vite and Svelte logos to learn more",f(r,"href","https://vitejs.dev"),f(r,"target","_blank"),f(r,"rel","noreferrer"),X(i.src,h=fe)||f(i,"src",h),f(i,"class","logo svelte svelte-11cv5lq"),f(i,"alt","Svelte Logo"),f(s,"href","https://svelte.dev"),f(s,"target","_blank"),f(s,"rel","noreferrer"),f(u,"class","card"),f(L,"class","read-the-docs svelte-11cv5lq")},m(m,W){z(m,t,W),c(t,n),c(n,r),c(n,o),c(n,s),c(s,i),c(t,p),c(t,l),c(t,b),c(t,u),J(d,u,null),c(t,x),c(t,_),c(t,T),c(t,L),O=!0},p:y,i(m){O||(G(d.$$.fragment,m),O=!0)},o(m){le(d.$$.fragment,m),O=!1},d(m){m&&P(t),Q(d)}}}class me extends U{constructor(t){super(),R(this,t,null,pe,F,{})}}new me({target:document.getElementById("app")});