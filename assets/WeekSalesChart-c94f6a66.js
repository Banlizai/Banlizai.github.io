import{u as s}from"./useEcharts-ccb861bc.js";import{r as p}from"./lodash-es-734afc83.js";import{e as l,r as n,o as m,A as c,C as d,k as f,p as u,n as h}from"./@vue-0366cb61.js";import{d as _}from"./echarts-d9dcfd7b.js";import{X as x}from"./zrender-6855854d.js";import{_ as y}from"./index-09e9d0bf.js";import"./tslib-54e39b60.js";import"./@arco-design-f5decd74.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./compute-scroll-into-view-183f845a.js";import"./b-tween-aacd5abe.js";import"./dayjs-bf5be20d.js";import"./@logicflow-5cdfeb8e.js";import"./ids-46106237.js";import"./preact-b8060ab3.js";import"./b-validate-48f29bf6.js";import"./number-precision-7e656275.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./path-browserify-188d1ff8.js";import"./vue-router-5bfb708a.js";import"./axios-0bf28a1e.js";import"./qs-b99d1803.js";import"./side-channel-5f245a46.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-9ceb8f5b.js";import"./object-inspect-8530d459.js";import"./pinia-16e4d8ec.js";import"./@vueuse-945dd224.js";import"./mockjs-417a16d8.js";import"./tiny-emitter-6d407e5e.js";import"./xgplayer-cee6bcaa.js";import"./quill-9354d83a.js";import"./sortablejs-be94e56d.js";function k(){const t=[];for(;t.length<12;)t.push(p(80,250));return t}const v=["周一","周二","周三","周四","周五","周六","周日"],w=l({name:"WeekSalesChart",setup(){const t=n(!0),e=n(null);let o=null;const r=()=>{const a={color:["rgba(64, 58, 255)"],grid:{top:"10%",left:"2%",right:"2%",bottom:"5%",containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",splitLine:{show:!1},data:v,axisLabel:{textStyle:{fontSize:10}},axisLine:{show:!0,lineStyle:{color:"#98A3B2",width:0,type:"solid"}},axisTick:{show:!1}},yAxis:{type:"value",max:300,splitLine:{show:!1},axisLabel:{textStyle:{fontSize:10}},axisLine:{show:!0,lineStyle:{color:"#98A3B2",width:0,type:"solid"}}},series:[{type:"bar",name:"周销售图",stack:"总量",data:k(),smooth:!0,barMaxWidth:10,barMinWidth:5,itemStyle:{borderWidth:15,color:new x(0,0,0,1,[{offset:0,color:"#5880F8"},{offset:.5,color:"#3ca6ff"},{offset:1,color:"#58B9F8"}])}}]};setTimeout(()=>{t.value=!1,setTimeout(()=>{d(()=>s(e.value).setOption(a))},100)},1e3)},i=()=>{s(e.value).resize()};return m(r),c(()=>{_(e.value),clearInterval(o)}),{loading:t,weekSalesChart:e,updateChart:i}}});const S={class:"chart-item-container"},g={ref:"weekSalesChart",class:"chart-item"};function b(t,e,o,r,i,a){return f(),u("div",S,[h("div",g,null,512)])}const nt=y(w,[["render",b],["__scopeId","data-v-e0d9c825"]]);export{nt as default};
