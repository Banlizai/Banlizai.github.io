import{I as e,Q as t,N as n,c as r,s as i,u as o,M as a,$ as s,F as l}from"./index-21254b6f.js";var u={locks:{},zIndex:2e3,enableRipple:!0};e(u);const c=e(u),p=e=>"string"==typeof e,d=e=>"boolean"==typeof e,v=e=>"number"==typeof e,f=e=>"[object Object]"===Object.prototype.toString.call(e),h=e=>"function"==typeof e,m=e=>Array.isArray(e),w=e=>!!e&&/^(http)|(\.*\/)/.test(e),y=e=>null==e?0:p(e)?(e=parseFloat(e),e=Number.isNaN(e)?0:e):d(e)?Number(e):e,b=(e,t)=>{if(e.length){const n=e.indexOf(t);if(n>-1)return e.splice(n,1)}},g=(e,t=200)=>{let n,r=0;return function i(...o){const a=Date.now(),s=a-r;r||(r=a),n&&window.clearTimeout(n),s>=t?(e.apply(this,o),r=a):n=window.setTimeout((()=>{i.apply(this,o)}),t-s)}},x=()=>"undefined"!=typeof window,O=e=>e.replace(/-(\w)/g,((e,t)=>t.toUpperCase())),E=e=>m(e)?e:[e];var _=e=>{var t=[];return{cache:t,has(e){return this.cache.includes(e)},add(n){this.has(n)||(this.cache.length===e&&t.shift(),this.cache.push(n))},remove(e){this.has(e)&&b(this.cache,e)},clear(){this.cache.length=0}}},T=e=>e,j=(e,t)=>null==e?t:e,L=()=>"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:self;function R(e,t){throw Error("Varlet ["+e+"]: "+t)}function W(e,t,n,r,i,o,a){try{var s=e[o](a),l=s.value}catch(u){return void n(u)}s.done?t(l):Promise.resolve(l).then(r,i)}function k(e){var t="scrollTop"in e?e.scrollTop:e.pageYOffset;return Math.max(t,0)}function A(e){return P.apply(this,arguments)}function P(){var e;return e=function*(e){yield G();var{top:t,bottom:n,left:r,right:i}=e.getBoundingClientRect(),{innerWidth:o,innerHeight:a}=window;return r<=o&&i>=0&&t<=a&&n>=0},P=function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){W(o,r,i,a,s,"next",e)}function s(e){W(o,r,i,a,s,"throw",e)}a(void 0)}))},P.apply(this,arguments)}function M(e){for(var t=e;t&&t.parentNode&&(t=t.parentNode)!==document.body&&t!==document.documentElement;){var n=/(scroll|auto)/,{overflowY:r,overflow:i}=window.getComputedStyle(t);if(n.test(r)||n.test(i))return t}return window}function C(e){for(var t=[],n=e;n!==window;)n=M(n),t.push(n);return t}function S(e,t){if(p(e)){var n=document.querySelector(e);return n||R(t,"target element cannot found"),n}if("object"==typeof(r=e)&&null!==r)return e;var r;R(t,'type of prop "target" should be a selector or an element object')}function N(){var{innerWidth:e,innerHeight:t}=window;return e>t?{vMin:t,vMax:e}:{vMin:e,vMax:t}}var F=e=>p(e)&&e.endsWith("rem"),I=e=>p(e)&&e.endsWith("vw"),z=e=>p(e)&&e.endsWith("vh"),q=e=>p(e)&&e.endsWith("vmin"),Y=e=>p(e)&&e.endsWith("vmax"),H=e=>{if(v(e))return e;if((e=>p(e)&&e.endsWith("px")||v(e))(e))return+e.replace("px","");if(I(e))return+e.replace("vw","")*window.innerWidth/100;if(z(e))return+e.replace("vh","")*window.innerHeight/100;if(F(e)){var t=+e.replace("rem",""),n=window.getComputedStyle(document.documentElement).fontSize;return t*parseFloat(n)}return q(e)?N().vMin:Y(e)?N().vMax:p(e)?y(e):0},X=e=>{if(null!=e)return(e=>p(e)&&e.endsWith("%"))(e)||I(e)||z(e)||F(e)||(e=>p(e)&&e.startsWith("calc("))(e)||(e=>p(e)&&e.startsWith("var("))(e)||q(e)||Y(e)?e:H(e)+"px"},D=function(e,t){if(void 0===t&&(t=1),null!=e){var n=X(e),r=n.match(/(vh|%|rem|px|vw)$/)[0];return""+parseFloat(n)*t+r}};function $(e){var t=L();return t.requestAnimationFrame?t.requestAnimationFrame(e):t.setTimeout(e,16)}function B(e){$((()=>{$(e)}))}function G(){return new Promise((e=>{$((()=>{$(e)}))}))}function J(){return new Promise((e=>{$(e)}))}function K(e,t){var{top:n=0,left:r=0,duration:i=300,animation:o}=t,a=Date.now(),s=k(e),l=function(e){var t="scrollLeft"in e?e.scrollLeft:e.pageXOffset;return Math.max(t,0)}(e);return new Promise((t=>{var u=()=>{var c=(Date.now()-a)/i;if(c<1){var p=s+(n-s)*o(c),d=l+(r-l)*o(c);e.scrollTo(d,p),$(u)}else e.scrollTo(r,n),t()};$(u)}))}function Q(e){return"start"===e||"end"===e?"flex-"+e:e}var U=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};function V(e){if(!function(e){return e in n().provides}(e))return{index:null,parentProvider:null,bindParent:null};const s=t(e),{childInstances:l,collect:u,clear:c}=s,p=U(s,["childInstances","collect","clear"]),d=n();return{index:r((()=>l.indexOf(d))),parentProvider:p,bindParent:e=>{i((()=>{o().then((()=>{u(d,e)}))})),a((()=>{o().then((()=>{c(d,e)}))}))}}}function Z(e,t){return Array.isArray(t)?t.reduce(((t,n)=>(t[n]=e[n],t)),{}):e[t]}function ee(e){var t=[];return e.forEach((e=>{e.type!==s&&(e.type===l&&m(e.children)?e.children.forEach((e=>{t.push(e)})):t.push(e))})),t}function te(e){var t="var-"+e;return{n:e=>e?"$"===e[0]?e.replace("$","var"):e.startsWith("--")?""+t+e:t+"__"+e:t,classes:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.map((e=>{if(m(e)){var[t,n,r=null]=e;return t?n:r}return e}))}}}function ne(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return m(e)?e.map((e=>e(...n))):e?e(...n):void 0}function re(e){return{type:[Function,Array],default:e}}function ie(e,t){return!1===e?null:(!0===e&&t&&(e=t),"var-elevation--"+e)}function oe(){return oe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oe.apply(this,arguments)}var{n:ae}=te("ripple"),se=250;function le(e){var t=this._ripple;if(t.removeRipple(),!t.disabled&&!t.tasker&&c.enableRipple){t.tasker=window.setTimeout((()=>{t.tasker=null;var{x:n,y:r,centerX:i,centerY:o,size:a}=function(e,t){var{top:n,left:r}=e.getBoundingClientRect(),{clientWidth:i,clientHeight:o}=e,a=Math.sqrt(Math.pow(i,2)+Math.pow(o,2))/2,s=2*a;return{x:t.touches[0].clientX-r-a,y:t.touches[0].clientY-n-a,centerX:(i-2*a)/2,centerY:(o-2*a)/2,size:s}}(this,e),s=document.createElement("div");s.classList.add(ae()),s.style.opacity="0",s.style.transform="translate("+n+"px, "+r+"px) scale3d(.3, .3, .3)",s.style.width=a+"px",s.style.height=a+"px",t.color&&(s.style.backgroundColor=t.color),s.dataset.createdAt=String(performance.now()),function(e){var{zIndex:t,position:n}=window.getComputedStyle(e);e.style.overflow="hidden",e.style.overflowX="hidden",e.style.overflowY="hidden","static"===n&&(e.style.position="relative"),"auto"===t&&(e.style.zIndex="1")}(this),this.appendChild(s),window.setTimeout((()=>{s.style.transform="translate("+i+"px, "+o+"px) scale3d(1, 1, 1)",s.style.opacity=".25"}),20)}),30)}}function ue(){var e=()=>{var e=this.querySelectorAll("."+ae());if(e.length){var t=e[e.length-1],n=se-performance.now()+Number(t.dataset.createdAt);window.setTimeout((()=>{t.style.opacity="0",window.setTimeout((()=>{var e;return null==(e=t.parentNode)?void 0:e.removeChild(t)}),se)}),n)}};this._ripple.tasker?window.setTimeout(e,30):e()}function ce(){if("undefined"!=typeof window&&"ontouchstart"in window&&c.enableRipple){var e=this._ripple;e.tasker&&window.clearTimeout(e.tasker),e.tasker=null}}var pe={mounted:function(e,t){var n;e._ripple=oe({tasker:null},null!=(n=t.value)?n:{},{removeRipple:ue.bind(e)}),e.addEventListener("touchstart",le,{passive:!0}),e.addEventListener("touchmove",ce,{passive:!0}),e.addEventListener("dragstart",ue,{passive:!0}),document.addEventListener("touchend",e._ripple.removeRipple,{passive:!0}),document.addEventListener("touchcancel",e._ripple.removeRipple,{passive:!0})},unmounted:function(e){e.removeEventListener("touchstart",le),e.removeEventListener("touchmove",ce),e.removeEventListener("dragstart",ue),document.removeEventListener("touchend",e._ripple.removeRipple),document.removeEventListener("touchcancel",e._ripple.removeRipple)},updated:function(e,t){var n,r,i,o,a,s,l={color:null==(n=t.value)?void 0:n.color,disabled:null==(r=t.value)?void 0:r.disabled};l.color===(null==(i=e._ripple)?void 0:i.color)&&l.disabled===(null==(o=e._ripple)?void 0:o.disabled)||(e._ripple=oe({tasker:l.disabled?null:null==(a=e._ripple)?void 0:a.tasker,removeRipple:null==(s=e._ripple)?void 0:s.removeRipple},l))},install(e){e.directive("ripple",this)}},de=pe;const ve=pe;export{A,C as B,_ as C,Q as D,f as E,d as F,c as G,m as H,ee as I,w as J,D as K,O as L,ve as R,de as _,ne as a,p as b,te as c,re as d,R as e,k as f,M as g,S as h,v as i,j,H as k,G as l,B as m,E as n,X as o,Z as p,ie as q,J as r,K as s,y as t,V as u,T as v,x as w,h as x,b as y,g as z};