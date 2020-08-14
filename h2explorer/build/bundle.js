var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function f(){return u(" ")}function d(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let p;function g(t){p=t}function h(t){(function(){if(!p)throw new Error("Function called outside component initialization");return p})().$$.on_mount.push(t)}const x=[],v=[],$=[],y=[],w=Promise.resolve();let b=!1;function _(t){$.push(t)}let E=!1;const H=new Set;function k(){if(!E){E=!0;do{for(let t=0;t<x.length;t+=1){const e=x[t];g(e),A(e.$$)}for(x.length=0;v.length;)v.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];H.has(e)||(H.add(e),e())}$.length=0}while(x.length);for(;y.length;)y.pop()();b=!1,E=!1,H.clear()}}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const C=new Set;function T(t,e){t&&t.i&&(C.delete(t),t.i(e))}function M(t,e,n,o){if(t&&t.o){if(C.has(t))return;C.add(t),(void 0).c.push(()=>{C.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function j(t){t&&t.c()}function z(t,n,c){const{fragment:s,on_mount:a,on_destroy:i,after_update:l}=t.$$;s&&s.m(n,c),_(()=>{const n=a.map(e).filter(r);i?i.push(...n):o(n),t.$$.on_mount=[]}),l.forEach(_)}function L(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function N(t,e){-1===t.$$.dirty[0]&&(x.push(t),b||(b=!0,w.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function S(e,r,c,s,a,l,u=[-1]){const f=p;g(e);const d=r.props||{},m=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:u};let h=!1;if(m.ctx=c?c(e,d,(t,n,...o)=>{const r=o.length?o[0]:n;return m.ctx&&a(m.ctx[t],m.ctx[t]=r)&&(m.bound[t]&&m.bound[t](r),h&&N(e,t)),n}):[],m.update(),h=!0,o(m.before_update),m.fragment=!!s&&s(m.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);m.fragment&&m.fragment.l(t),t.forEach(i)}else m.fragment&&m.fragment.c();r.intro&&T(e.$$.fragment),z(e,r.target,r.anchor),k()}g(f)}class O{$destroy(){L(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function P(e){let n,o,r,c,u,d,p,g,h,x,v;return{c(){n=l("header"),o=l("div"),r=l("div"),c=l("div"),u=l("img"),g=f(),h=l("div"),h.textContent="H2 Explorer",x=f(),v=l("div"),v.innerHTML='<a class="item svelte-m8xfcx" href="#overview">overview</a> \n      <a class="item svelte-m8xfcx" href="#download">download</a> \n      <a class="item svelte-m8xfcx" href="https://github.com/hz2/h2-explorer" target="_blank">\n        github\n      </a>',u.src!==(d=q)&&m(u,"src",d),m(u,"alt",p=B+" logo"),m(u,"class","svelte-m8xfcx"),m(c,"class","logo svelte-m8xfcx"),m(h,"class","title svelte-m8xfcx"),m(r,"class","left svelte-m8xfcx"),m(v,"class","list svelte-m8xfcx"),m(o,"class","main-header svelte-m8xfcx"),m(n,"class","svelte-m8xfcx")},m(t,e){a(t,n,e),s(n,o),s(o,r),s(r,c),s(c,u),s(r,g),s(r,h),s(o,x),s(o,v)},p:t,i:t,o:t,d(t){t&&i(n)}}}let q="./images/logo-v1.svg",B="h2 explorer";class D extends O{constructor(t){super(),S(this,t,null,P,c,{})}}function F(e){let n,o,r;return{c(){n=l("div"),o=l("div"),o.textContent="Download ( coming soon )",m(o,"class","win-version svelte-18cotaa"),m(n,"id","download"),m(n,"class","svelte-18cotaa")},m(t,c,i){a(t,n,c),s(n,o),i&&r(),r=d(o,"click",e[0])},p:t,i:t,o:t,d(t){t&&i(n),r()}}}function V(t){return[()=>{alert("coming soon")}]}class W extends O{constructor(t){super(),S(this,t,V,F,c,{})}}function G(t){let e,n,o,r,c,p,g,h,x,v,$,y,w,b,_;const E=new D({}),H=new W({});return{c(){j(E.$$.fragment),e=f(),n=l("main"),o=l("h1"),r=u(t[0]),c=f(),p=l("div"),g=l("img"),x=f(),v=l("p"),v.textContent="A modern resource manager based on Electron and Web technology ,",$=f(),y=l("p"),y.textContent="dedicated to giving you an excellent user experience.",w=f(),j(H.$$.fragment),m(o,"class","svelte-acn3x6"),g.src!==(h=I)&&m(g,"src",h),m(g,"alt","screenshot preview"),m(g,"class","svelte-acn3x6"),m(p,"class","preview svelte-acn3x6"),m(n,"class","svelte-acn3x6")},m(i,l,u){z(E,i,l),a(i,e,l),a(i,n,l),s(n,o),s(o,r),s(n,c),s(n,p),s(p,g),s(n,x),s(n,v),s(n,$),s(n,y),s(n,w),z(H,n,null),b=!0,u&&_(),_=d(o,"click",t[1])},p(t,[e]){(!b||1&e)&&function(t,e){e=""+e,t.data!==e&&(t.data=e)}(r,t[0])},i(t){b||(T(E.$$.fragment,t),T(H.$$.fragment,t),b=!0)},o(t){M(E.$$.fragment,t),M(H.$$.fragment,t),b=!1},d(t){L(E,t),t&&i(e),t&&i(n),L(H),_()}}}let I="./images/preview_0.0.1.jpg";function J(t,e,n){let o="";const r=()=>{let t=["Happy To Explore","Hydrogen gas","Two Hydrogen Atoms","Heading Size 2","Hypertext Transfer Protocol Version 2","half second","Histamine 2","Home History","Histamine 2"];n(0,o=t[Math.floor(Math.random()*t.length)])};h(()=>{r()});let{name:c}=e;return t.$set=t=>{"name"in t&&n(2,c=t.name)},[o,r,c]}return new class extends O{constructor(t){super(),S(this,t,J,G,c,{name:2})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map