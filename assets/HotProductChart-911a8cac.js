import{u as s}from"./useEcharts-ccb861bc.js";import{e as m,r as p,o as n,A as c,C as l,k as u,p as d,n as _}from"./@vue-0366cb61.js";import{d as f}from"./echarts-d9dcfd7b.js";import{_ as h}from"./index-09e9d0bf.js";import"./zrender-6855854d.js";import"./tslib-54e39b60.js";import"./@arco-design-f5decd74.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./compute-scroll-into-view-183f845a.js";import"./b-tween-aacd5abe.js";import"./dayjs-bf5be20d.js";import"./@logicflow-5cdfeb8e.js";import"./ids-46106237.js";import"./preact-b8060ab3.js";import"./b-validate-48f29bf6.js";import"./number-precision-7e656275.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./path-browserify-188d1ff8.js";import"./vue-router-5bfb708a.js";import"./axios-0bf28a1e.js";import"./qs-b99d1803.js";import"./side-channel-5f245a46.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-9ceb8f5b.js";import"./object-inspect-8530d459.js";import"./pinia-16e4d8ec.js";import"./@vueuse-945dd224.js";import"./mockjs-417a16d8.js";import"./tiny-emitter-6d407e5e.js";import"./xgplayer-cee6bcaa.js";import"./quill-9354d83a.js";import"./sortablejs-be94e56d.js";import"./lodash-es-734afc83.js";function v(){return[99,90,80,70,60]}const y=["女装","男装","童装","皮鞋","帽子"],x=m({name:"HotProdChart",setup(){const o=p(!0),t=p(null);let r=null;const e=()=>{const a={grid:{top:"2%",left:"5%",right:"8%",bottom:"2%",containLabel:!0},tooltip:{trigger:"axis"},yAxis:{type:"category",data:y.reverse(),axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{fontSize:10,color:"#98A3B2"}}},xAxis:{show:!1},series:[{type:"pictorialBar",name:"热卖指数",stack:"指数",data:v().reverse(),smooth:!0,symbol:"rect",symbolRepeat:!0,symbolSize:[2,10],symbolMargin:1,label:{show:!0,position:"right",textStyle:{color:"rgb(var(--primary-1))",fontSize:12}},itemStyle:{color:"rgb(var(--primary-1))"}}]};setTimeout(()=>{o.value=!1,setTimeout(()=>{l(()=>s(t.value).setOption(a))},100)},1e3)},i=()=>{s(t.value).resize()};return n(e),c(()=>{f(t.value),clearInterval(r)}),{loading:o,hotProdChart:t,updateChart:i}}});const g={class:"chart-item-container"},b={ref:"hotProdChart",class:"chart-item"};function C(o,t,r,e,i,a){return u(),d("div",g,[_("div",b,null,512)])}const at=h(x,[["render",C],["__scopeId","data-v-acef1716"]]);export{at as default};