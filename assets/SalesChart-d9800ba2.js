import{u as n}from"./useEcharts-ccb861bc.js";import{e as _,r as p,o as f,A as h,C as y,j as o,k as a,l,m,n as b,v as g,p as v}from"./@vue-0366cb61.js";import{d as k}from"./echarts-d9dcfd7b.js";import{X as x}from"./zrender-6855854d.js";import{_ as C}from"./index-09e9d0bf.js";import"./tslib-54e39b60.js";import"./@arco-design-f5decd74.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./compute-scroll-into-view-183f845a.js";import"./b-tween-aacd5abe.js";import"./dayjs-bf5be20d.js";import"./@logicflow-5cdfeb8e.js";import"./ids-46106237.js";import"./preact-b8060ab3.js";import"./b-validate-48f29bf6.js";import"./number-precision-7e656275.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./path-browserify-188d1ff8.js";import"./vue-router-5bfb708a.js";import"./axios-0bf28a1e.js";import"./qs-b99d1803.js";import"./side-channel-5f245a46.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-9ceb8f5b.js";import"./object-inspect-8530d459.js";import"./pinia-16e4d8ec.js";import"./@vueuse-945dd224.js";import"./mockjs-417a16d8.js";import"./tiny-emitter-6d407e5e.js";import"./xgplayer-cee6bcaa.js";import"./quill-9354d83a.js";import"./sortablejs-be94e56d.js";import"./lodash-es-734afc83.js";const w=_({name:"SalesChart",setup(){const e=p(!0),t=p(null),r=()=>{const i={grid:{left:"2%",right:"5%",top:"5%",bottom:"3%",containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:["周一","周二","周三","周四","周五","周六","周天"],boundaryGap:!1,splitLine:{show:!1}},yAxis:{type:"value",boundaryGap:!1,splitLine:{show:!1}},series:[{data:[150,180,224,218,200,180,150],type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:0},areaStyle:{opacity:.5,color:new x(0,0,0,1,[{offset:0,color:"rgba(100, 162, 255)"},{offset:1,color:"rgba(19, 21, 219)"}])}}]};setTimeout(()=>{e.value=!1,y(()=>{n(t.value).setOption(i)})},1e3)},s=()=>{n(t.value).resize()};return f(r),h(()=>{k(t.value)}),{loading:e,salesChart:t,updateChart:s}}});const F={class:"chart-item-container"},S={key:1,ref:"salesChart",class:"chart-item"};function B(e,t,r,s,i,E){const c=o("a-skeleton-line"),d=o("a-skeleton"),u=o("a-card");return a(),l(u,{"body-style":{padding:"10px"},"head-style":{padding:"0 10px"},title:"一周销售额（单位：万）",bordered:!1,class:"card-border-radius"},{default:m(()=>[b("div",F,[e.loading?(a(),l(d,{key:0,animation:""},{default:m(()=>[g(c,{rows:4})]),_:1})):(a(),v("div",S,null,512))])]),_:1})}const ct=C(w,[["render",B],["__scopeId","data-v-abe62e0f"]]);export{ct as default};