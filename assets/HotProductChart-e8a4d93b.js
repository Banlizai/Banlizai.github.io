import{u as t}from"./useEcharts-7f7f0c42.js";import{e as s,r,o,A as i,C as e,k as a,p as m,n as p}from"./@vue-ab7141bd.js";import{d as l}from"./echarts-35075750.js";import{_ as n}from"./index-4d88e5a9.js";import"./zrender-861a5f66.js";import"./tslib-a4e99503.js";import"./@arco-design-306c64c5.js";import"./resize-observer-polyfill-ad543aa3.js";import"./compute-scroll-into-view-2962e95c.js";import"./b-tween-5055d79e.js";import"./dayjs-f47c42f6.js";import"./@logicflow-435513e4.js";import"./ids-ef071351.js";import"./preact-173f4f0b.js";import"./b-validate-42052d35.js";import"./number-precision-d9b928a1.js";import"./scroll-into-view-if-needed-59a60a09.js";import"./path-browserify-8c7c24dd.js";import"./vue-router-74931cc0.js";import"./pinia-c1bb2998.js";import"./@vueuse-96027ebb.js";import"./axios-7fb8d0b2.js";import"./qs-536c1183.js";import"./side-channel-52a2f2e5.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./call-bind-d34af9d2.js";import"./object-inspect-a85657d3.js";import"./mockjs-a6500710.js";import"./tiny-emitter-af47831f.js";import"./xgplayer-474fd437.js";import"./quill-daa56216.js";import"./sortablejs-2f5483e3.js";import"./lodash-es-6e445b1b.js";const j=["女装","男装","童装","皮鞋","帽子"],c=s({name:"HotProdChart",setup(){const s=r(!0),a=r(null);return o((()=>{const r={grid:{top:"2%",left:"5%",right:"8%",bottom:"2%",containLabel:!0},tooltip:{trigger:"axis"},yAxis:{type:"category",data:j.reverse(),axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{fontSize:10,color:"#98A3B2"}}},xAxis:{show:!1},series:[{type:"pictorialBar",name:"热卖指数",stack:"指数",data:[99,90,80,70,60].reverse(),smooth:!0,symbol:"rect",symbolRepeat:!0,symbolSize:[2,10],symbolMargin:1,label:{show:!0,position:"right",textStyle:{color:"rgb(var(--primary-1))",fontSize:12}},itemStyle:{color:"rgb(var(--primary-1))"}}]};setTimeout((()=>{s.value=!1,setTimeout((()=>{e((()=>t(a.value).setOption(r)))}),100)}),1e3)})),i((()=>{l(a.value),clearInterval(null)})),{loading:s,hotProdChart:a,updateChart:()=>{t(a.value).resize()}}}}),d={class:"chart-item-container"},u={ref:"hotProdChart",class:"chart-item"};const h=n(c,[["render",function(t,s,r,o,i,e){return a(),m("div",d,[p("div",u,null,512)])}],["__scopeId","data-v-acef1716"]]);export{h as default};