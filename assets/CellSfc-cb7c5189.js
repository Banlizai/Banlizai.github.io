import{I as s}from"./base-3d7462b4.js";import{d as e,R as t,o as r,c as i,a}from"./ripple-47ea40fa.js";import{d as l,c as n,a as o,k as c,l as d,b as p,e as f,f as v,n as y,v as b,i as C,p as m,t as u,j as k}from"./index-21254b6f.js";var S={title:{type:[Number,String]},icon:{type:String},description:{type:String},border:{type:Boolean,default:!1},borderOffset:{type:[Number,String]},iconClass:{type:String},titleClass:{type:String},descriptionClass:{type:String},extraClass:{type:String},ripple:{type:Boolean,default:!1},onClick:e()},{n:g,classes:x}=i("cell");var O=l({name:"VarCell",components:{VarIcon:s},directives:{Ripple:t},props:S,setup(s){var e=n((()=>null==s.borderOffset?{}:{"--cell-border-left":r(s.borderOffset),"--cell-border-right":r(s.borderOffset)}));return{n:g,classes:x,toSizeUnit:r,borderOffsetStyles:e,handleClick:e=>{a(s.onClick,e)}}}});O.render=function(s,e){var t=o("var-icon"),r=c("ripple");return d((p(),f("div",{class:y(s.classes(s.n(),[s.border,s.n("--border")],[s.onClick,s.n("--cursor")])),style:k(s.borderOffsetStyles),onClick:e[0]||(e[0]=function(){return s.handleClick&&s.handleClick(...arguments)})},[v(s.$slots,"icon",{},(()=>[s.icon?(p(),f("div",{key:0,class:y(s.classes(s.n("icon"),s.iconClass))},[b(t,{name:s.icon},null,8,["name"])],2)):C("v-if",!0)])),m("div",{class:y(s.n("content"))},[v(s.$slots,"default",{},(()=>[s.title?(p(),f("div",{key:0,class:y(s.classes(s.n("title"),s.titleClass))},u(s.title),3)):C("v-if",!0)])),v(s.$slots,"description",{},(()=>[s.description?(p(),f("div",{key:0,class:y(s.classes(s.n("description"),s.descriptionClass))},u(s.description),3)):C("v-if",!0)]))],2),s.$slots.extra?(p(),f("div",{key:0,class:y(s.classes(s.n("extra"),s.extraClass))},[v(s.$slots,"extra")],2)):C("v-if",!0)],6)),[[r,{disabled:!s.ripple}]])};const h=O;h.install=function(s){s.component(h.name,h)};var $=h;export{$ as _};
