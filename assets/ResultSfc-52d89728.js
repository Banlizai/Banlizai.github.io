import{t as s,c as e,o as n,k as r}from"./ripple-47ea40fa.js";import{d as t,b as i,e as a,Y as o,Z as l,p as c,n as u,j as d,F as p,c as v,f as m,g,B as L,i as f,t as w}from"./index-21254b6f.js";var C={imageSize:{type:[String,Number]},type:{type:String,default:"success",validator:function(s){return["info","success","warning","error","question","empty"].includes(s)}},title:{type:String},description:{type:String},animation:{type:Boolean,default:!0}},S={xmlns:"http://www.w3.org/2000/svg",viewBox:"2 3.6 20 20"},y=[(s=>(o(""),s=s(),l(),s))((()=>c("path",{d:"M11,9H13V7H11M11,20H13V11H11V20Z"},null,-1)))];var V=t({});V.render=function(s,e){return i(),a("svg",S,y)};const z=V;var b={xmlns:"http://www.w3.org/2000/svg",viewBox:"2 2 20 20"},h=[(s=>(o(""),s=s(),l(),s))((()=>c("path",{d:"M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"},null,-1)))];var M=t({});M.render=function(s,e){return i(),a("svg",b,h)};const x=M;var H={xmlns:"http://www.w3.org/2000/svg",viewBox:"-6 -4 35 35"},A=[(s=>(o(""),s=s(),l(),s))((()=>c("path",{d:"M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"},null,-1)))];var B=t({});B.render=function(s,e){return i(),a("svg",H,A)};const $=B;var{n:k,classes:Z}=e("result");var N=t({props:{animation:{type:Boolean},borderSize:{type:String}},setup:()=>({n:k,classes:Z,toNumber:s})});N.render=function(s,e){return i(),a(p,null,[c("span",{class:u(s.n("success-cover-left"))},null,2),c("span",{class:u(s.classes(s.n("success-line"),s.n("success-line-tip"))),style:d({animationDuration:s.animation?"760ms":"0ms",borderRadius:"calc("+s.borderSize+" * 0.625)"})},null,6),c("span",{class:u(s.classes(s.n("success-line"),s.n("success-line-long"))),style:d({animationDuration:s.animation?"770ms":"0ms",borderRadius:"calc("+s.borderSize+" * 0.625)"})},null,6),c("span",{ref:"circle",class:u(s.n("success-circle")),style:d({left:"-"+s.borderSize,top:"-"+s.borderSize,borderWidth:s.borderSize})},null,6),c("span",{class:u(s.n("success-line-fix"))},null,2),c("span",{class:u(s.n("success-cover-right")),style:d({animationDuration:s.animation?"4250ms":"0ms"})},null,6)],64)};const j=N;var D={xmlns:"http://www.w3.org/2000/svg",viewBox:"-3 -3 30 30"},R=[(s=>(o(""),s=s(),l(),s))((()=>c("path",{d:"M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"},null,-1)))];var W=t({});W.render=function(s,e){return i(),a("svg",D,R)};const E=W;var q={viewBox:"-4 -4 32 32"},F=[(s=>(o(""),s=s(),l(),s))((()=>c("path",{fill:"currentColor",d:"M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"},null,-1)))];var I=t({});I.render=function(s,e){return i(),a("svg",q,F)};const P=I;var{n:Q,classes:U}=e("result");var Y=t({name:"VarResult",components:{Info:z,Success:j,Warning:$,Error:x,Question:E,Empty:P},props:C,setup(e){var t=v((()=>{var{imageSize:s}=e;return"calc("+(s?n(s):"var(--result-image-size)")+" * 0.9)"})),i=v((()=>{var{imageSize:s}=e;return"calc("+(s?n(e.imageSize):"var(--result-image-size)")+" * 0.05)"}));return{n:Q,classes:U,toNumber:s,toPxNum:r,toSizeUnit:n,circleSize:t,borderSize:i}}});Y.render=function(s,e){return i(),a("div",{class:u(s.classes(s.n(),s.n("$--box")))},[m(s.$slots,"image",{},(()=>[s.type?(i(),a("div",{key:0,class:u(s.n("image-container"))},[c("div",{class:u(s.classes(s.n("image"),s.n(s.type))),style:d({width:s.circleSize,height:s.circleSize,borderWidth:s.borderSize})},[(i(),g(L(s.type),{"border-size":s.borderSize,animation:s.animation},null,8,["border-size","animation"]))],6)],2)):f("v-if",!0)])),m(s.$slots,"title",{},(()=>[s.title?(i(),a("div",{key:0,class:u(s.n("title"))},w(s.title),3)):f("v-if",!0)])),m(s.$slots,"description",{},(()=>[s.description?(i(),a("div",{key:0,class:u(s.n("description"))},w(s.description),3)):f("v-if",!0)])),s.$slots.footer?(i(),a("div",{key:0,class:u(s.n("footer"))},[m(s.$slots,"footer")],2)):f("v-if",!0)],2)};const _=Y;_.install=function(s){s.component(_.name,_)};var G=_;export{G as _};
