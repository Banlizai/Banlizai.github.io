import{E as t,n as o}from"./index-0ca45986.js";import{d as s,u as e,h as i,x as r,I as a,o as p,c as l}from"./@vue-2b41ce19.js";import{l as m}from"./echarts-24943dbb.js";import{X as n}from"./zrender-2d3b2bba.js";import"./@arco-design-8dabd30f.js";import"./b-tween-5055d79e.js";import"./b-validate-457088db.js";import"./resize-observer-polyfill-ad543aa3.js";import"./scroll-into-view-if-needed-59a60a09.js";import"./compute-scroll-into-view-2962e95c.js";import"./number-precision-d9b928a1.js";import"./dayjs-094145ee.js";import"./@logicflow-85f8458e.js";import"./ids-ef071351.js";import"./lodash-es-1e3e3aa2.js";import"./preact-5fc9b0bf.js";import"./pinia-b3c1485e.js";import"./axios-6371c10e.js";import"./qs-f981fe00.js";import"./side-channel-01aeb4d9.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./call-bind-fae29077.js";import"./object-inspect-0eda087e.js";import"./path-browserify-8c7c24dd.js";import"./vue-router-70e2faff.js";import"./@vueuse-ca9a384d.js";import"./tiny-emitter-35dc7566.js";import"./xgplayer-700bd6a3.js";import"./delegate-ef66b241.js";import"./downloadjs-91c0ea73.js";import"./quill-ecb3881d.js";import"./sortablejs-2f5483e3.js";import"./tslib-a4e99503.js";const j=s({name:"OrderChart",setup(){const o=e(!0),s=e(null),p=["周一","周二","周三","周四","周五","周六","周日"];return i((()=>{const e={grid:{top:"5%",left:"5%",right:"5%",bottom:"5%",containLabel:!0},xAxis:{type:"category",data:p,boundaryGap:!1,axisLine:{show:!0,lineStyle:{color:"#98A3B2",width:0,type:"solid"}},axisTick:{show:!1},axisLabel:{interval:0,textStyle:{fontSize:10}}},yAxis:[{type:"value",axisLabel:{textStyle:{fontSize:10}},splitLine:{show:!1},axisLine:{show:!0,lineStyle:{color:"#98A3B2",width:0,type:"solid"}}}],series:[{data:[82,93,90,74,82,60,50].reverse(),type:"line",smooth:!1,lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.5,color:new n(0,0,0,1,[{offset:0,color:"rgba(128, 255, 165)"},{offset:1,color:"rgba(1, 191, 236)"}])}}]};setTimeout((()=>{o.value=!1,a((()=>{t(s.value).setOption(e)}))}),100)})),r((()=>{m(s.value)})),{loading:o,orderChartWrapper:s,updateChart:()=>{t(s.value).resize()}}}}),d={ref:"orderChartWrapper",style:{height:"100%"}};const c=o(j,[["render",function(t,o,s,e,i,r){return p(),l("div",d,null,512)}]]);export{c as default};