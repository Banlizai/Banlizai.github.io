import"./base-3d7462b4.js";import{P as e}from"./index-178cae74.js";import"./ripple-47ea40fa.js";import{_ as a}from"./button-93237179.js";import{_ as t,a as o}from"./MstOrderList-fa81d579.js";/* empty css                  *//* empty css                  */import{r as l,b as r,g as s,h as u,v as i,q as n}from"./index-21254b6f.js";import"./with-install-460172ae.js";import"./use-touch-cfd7c7a6.js";import"./index-369c902b.js";import"./useMounted-89096fae.js";import"./space-b7154b39.js";const m={__name:"dailyInspection",setup(m){const d=l(!1),p=l(!1),v=l([]),f=l(!1),h=function(){setTimeout((()=>{if(20===v.value.length)return p.value=!0,void(d.value=!1);for(let e=0;e<2;e++)v.value.push({id:Math.random(),list:[{label:"工单编号",value:Math.floor(1e14*Math.random())},{label:"工单来源",value:Math.floor(1e14*Math.random())},{label:"指定处理人",value:Math.floor(1e14*Math.random())},{label:"台区名称",value:Math.floor(1e14*Math.random())},{label:"截止时间",value:Math.floor((new Date).getTime()/1e3)}]});d.value=!1}),1e3)},j=function(){setTimeout((()=>{h(),f.value=!1}),1e3)};return(l,m)=>{const M=a,c=t,b=o,_=e;return r(),s(_,{modelValue:f.value,"onUpdate:modelValue":m[2]||(m[2]=e=>f.value=e),onRefresh:j},{default:u((()=>[i(b,{error:p.value,"onUpdate:error":m[0]||(m[0]=e=>p.value=e),loading:d.value,"onUpdate:loading":m[1]||(m[1]=e=>d.value=e),onLoad:h,class:"p-4"},{default:u((()=>[i(c,{list:v.value},{button:u((()=>[i(M,{type:"primary"},{default:u((()=>[n("立即处理")])),_:1})])),_:1},8,["list"])])),_:1},8,["error","loading"])])),_:1},8,["modelValue"])}}};export{m as default};
