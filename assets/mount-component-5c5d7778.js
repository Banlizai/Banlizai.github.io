import{E as e,L as o,w as t,r as s,d as n,v as a,T as l,l as r,y as c,c as i,u,s as d,I as p,N as m,a8 as v,F as f,m as h,a9 as y,H as w}from"./index-1f6600ba.js";import{K as I,R as b,n as x,t as k,F as g,o as O,S as C,p as S,c as z,f as B,l as j,g as A,B as P,b as L,d as E}from"./with-install-1b1d642c.js";import{u as R}from"./use-expose-45de9c8f.js";import{u as H}from"./use-touch-fa73f6af.js";import{P as T}from"./on-popup-reopen-0311b108.js";import{u as D,I as F}from"./index-9ee83766.js";import{H as N}from"./constant-1f96826c.js";function $(e,{args:o=[],done:t,canceled:s}){if(e){const n=e.apply(null,o);I(n)?n.then((e=>{e?t():s&&s()})).catch(b):n?t():s&&s()}else t()}const K={show:Boolean,zIndex:x,overlay:k,duration:x,teleport:[String,Object],lockScroll:k,lazyRender:k,beforeClose:Function,overlayStyle:Object,overlayClass:g,transitionAppear:Boolean,closeOnClickOverlay:k};let V=0;const Y="van-overflow-hidden";function q(e){const o=s(!1);return t(e,(e=>{e&&(o.value=e)}),{immediate:!0}),e=>()=>o.value?e():null}const[G,J]=z("overlay");const M=L(n({name:G,props:{show:Boolean,zIndex:x,duration:x,className:g,lockScroll:k,lazyRender:k,customStyle:Object},setup(e,{slots:o}){const t=s(),n=q((()=>e.show||!e.lazyRender))((()=>{var s;const n=j(A(e.zIndex),e.customStyle);return P(e.duration)&&(n.animationDuration=`${e.duration}s`),r(a("div",{ref:t,style:n,class:[J(),e.className]},[null==(s=o.default)?void 0:s.call(o)]),[[c,e.show]])}));return B("touchmove",(o=>{e.lockScroll&&S(o,!0)}),{target:t}),()=>a(l,{name:"van-fade",appear:!0},{default:n})}})),Q=j({},K,{round:Boolean,position:E("center"),closeIcon:E("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:E("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[U,W]=z("popup");const X=L(n({name:U,inheritAttrs:!1,props:Q,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(n,{emit:y,attrs:w,slots:I}){let b,x;const k=s(),g=s(),z=q((()=>n.show||!n.lazyRender)),j=i((()=>{const e={zIndex:k.value};if(P(n.duration)){e["center"===n.position?"animationDuration":"transitionDuration"]=`${n.duration}s`}return e})),A=()=>{b||(b=!0,k.value=void 0!==n.zIndex?+n.zIndex:D(),y("open"))},L=()=>{b&&$(n.beforeClose,{done(){b=!1,y("close"),y("update:show",!1)}})},E=e=>{y("clickOverlay",e),n.closeOnClickOverlay&&L()},K=()=>{if(n.overlay)return a(M,{show:n.show,class:n.overlayClass,zIndex:k.value,duration:n.duration,customStyle:n.overlayStyle,role:n.closeOnClickOverlay?"button":void 0,tabindex:n.closeOnClickOverlay?0:void 0,onClick:E},{default:I["overlay-content"]})},G=e=>{y("clickCloseIcon",e),L()},J=()=>{if(n.closeable)return a(F,{role:"button",tabindex:0,name:n.closeIcon,class:[W("close-icon",n.closeIconPosition),N],classPrefix:n.iconPrefix,onClick:G},null)},Q=()=>y("opened"),U=()=>y("closed"),X=e=>y("keydown",e),Z=z((()=>{var e;const{round:o,position:t,safeAreaInsetTop:s,safeAreaInsetBottom:l}=n;return r(a("div",h({ref:g,style:j.value,role:"dialog",tabindex:0,class:[W({round:o,[t]:t}),{"van-safe-area-top":s,"van-safe-area-bottom":l}],onKeydown:X},w),[null==(e=I.default)?void 0:e.call(I),J()]),[[c,n.show]])})),_=()=>{const{position:e,transition:o,transitionAppear:t}=n;return a(l,{name:o||("center"===e?"van-fade":`van-popup-slide-${e}`),appear:t,onAfterEnter:Q,onAfterLeave:U},{default:Z})};return t((()=>n.show),(e=>{e&&!b&&(A(),0===w.tabindex&&u((()=>{var e;null==(e=g.value)||e.focus()}))),!e&&b&&(b=!1,y("close"))})),R({popupRef:g}),function(s,n){const a=H(),l=e=>{a.move(e);const o=a.deltaY.value>0?"10":"01",t=C(e.target,s.value),{scrollHeight:n,offsetHeight:l,scrollTop:r}=t;let c="11";0===r?c=l>=n?"00":"01":r+l>=n&&(c="10"),"11"===c||!a.isVertical()||parseInt(c,2)&parseInt(o,2)||S(e,!0)},r=()=>{document.addEventListener("touchstart",a.start),document.addEventListener("touchmove",l,{passive:!1}),V||document.body.classList.add(Y),V++},c=()=>{V&&(document.removeEventListener("touchstart",a.start),document.removeEventListener("touchmove",l),V--,V||document.body.classList.remove(Y))},i=()=>n()&&c();O((()=>n()&&r())),e(i),o(i),t(n,(e=>{e?r():c()}))}(g,(()=>n.show&&n.lockScroll)),B("popstate",(()=>{n.closeOnPopstate&&(L(),x=!1)})),d((()=>{n.show&&A()})),p((()=>{x&&(y("update:show",!0),x=!1)})),e((()=>{n.show&&n.teleport&&(L(),x=!0)})),m(T,(()=>n.show)),()=>n.teleport?a(v,{to:n.teleport},{default:()=>[K(),_()]}):a(f,null,[K(),_()])}}));function Z(){const e=w({show:!1}),o=o=>{e.show=o},t=t=>{j(e,t,{transitionAppear:!0}),o(!0)},s=()=>o(!1);return R({open:t,close:s,toggle:o}),{open:t,close:s,state:e,toggle:o}}function _(e){const o=y(e),t=document.createElement("div");return document.body.appendChild(t),{instance:o.mount(t),unmount(){o.unmount(),document.body.removeChild(t)}}}export{X as P,$ as c,_ as m,K as p,Z as u};
