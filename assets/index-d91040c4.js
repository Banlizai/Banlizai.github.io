import{x as e,y as t}from"./ripple-43a9ce2b.js";import{u as s}from"./useMounted-d09bbcd9.js";import{P as r,w as o,L as n,E as a,z as i,d as c,v as l,c as u,m as d}from"./index-1f6600ba.js";import{c as p,t as g,n as m,m as f,q as v,A as b,b as x,l as j,E as q}from"./with-install-1b1d642c.js";import{b as P,c as S}from"./constant-1f96826c.js";import{a as h,u as B}from"./use-route-2ce59ff4.js";import{B as k,I as y}from"./index-9ee83766.js";function z(c,l,u,d={}){if(!e())return;const{passive:p=!1,capture:g=!1}=d;let m=!1,f=!1;const v=e=>t(e)?e():i(e),b=e=>{if(m||f)return;const t=v(e);t&&(t.addEventListener(l,u,{passive:p,capture:g}),m=!0)},x=e=>{if(!m||f)return;const t=v(e);t&&(t.removeEventListener(l,u,{capture:g}),m=!1)};let j;r(c)&&(j=o((()=>c.value),((e,t)=>{x(t),b(e)})));return s((()=>{b(c)})),n((()=>{x(c)})),a((()=>{x(c)})),()=>{null==j||j(),x(c),f=!0}}const[C,E]=p("grid"),L={square:Boolean,center:g,border:g,gutter:m,reverse:Boolean,iconSize:m,direction:String,clickable:Boolean,columnNum:f(4)},w=Symbol(C);const N=x(c({name:C,props:L,setup(e,{slots:t}){const{linkChildren:s}=v(w);return s({props:e}),()=>{var s;return l("div",{style:{paddingLeft:b(e.gutter)},class:[E(),{[P]:e.border&&!e.gutter}]},[null==(s=t.default)?void 0:s.call(t)])}}})),[T,A]=p("grid-item");const G=x(c({name:T,props:j({},h,{dot:Boolean,text:String,icon:String,badge:m,iconColor:String,iconPrefix:String,badgeProps:Object}),setup(e,{slots:t}){const{parent:s,index:r}=q(w),o=B();if(!s)return;const n=u((()=>{const{square:e,gutter:t,columnNum:o}=s.props,n=100/+o+"%",a={flexBasis:n};if(e)a.paddingTop=n;else if(t){const e=b(t);a.paddingRight=e,r.value>=+o&&(a.marginTop=e)}return a})),a=u((()=>{const{square:e,gutter:t}=s.props;if(e&&t){const e=b(t);return{right:e,bottom:e,height:"auto"}}}));return()=>{const{center:r,border:i,square:c,gutter:u,reverse:p,direction:g,clickable:m}=s.props,f=[A("content",[g,{center:r,square:c,reverse:p,clickable:m,surround:i&&u}]),{[S]:i}];return l("div",{class:[A({square:c})],style:n.value},[l("div",{role:m?"button":void 0,class:f,style:a.value,tabindex:m?0:void 0,onClick:o},[t.default?t.default():[t.icon?l(k,d({dot:e.dot,content:e.badge},e.badgeProps),{default:t.icon}):e.icon?l(y,{dot:e.dot,name:e.icon,size:s.props.iconSize,badge:e.badge,class:A("icon"),color:e.iconColor,badgeProps:e.badgeProps,classPrefix:e.iconPrefix},null):void 0,t.text?t.text():e.text?l("span",{class:A("text")},[e.text]):void 0]])])}}}));export{G,N as a,z as u};