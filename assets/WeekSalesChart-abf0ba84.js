import{u as t}from"./useEcharts-7f7f0c42.js";import{r as s}from"./lodash-es-6e445b1b.js";import{e as o,r as e,o as i,A as r,C as a,k as l,p,n as m}from"./@vue-ab7141bd.js";import{d as n}from"./echarts-35075750.js";import{X as c}from"./zrender-861a5f66.js";import{_ as j}from"./index-4d88e5a9.js";import"./tslib-a4e99503.js";import"./@arco-design-306c64c5.js";import"./resize-observer-polyfill-ad543aa3.js";import"./compute-scroll-into-view-2962e95c.js";import"./b-tween-5055d79e.js";import"./dayjs-f47c42f6.js";import"./@logicflow-435513e4.js";import"./ids-ef071351.js";import"./preact-173f4f0b.js";import"./b-validate-42052d35.js";import"./number-precision-d9b928a1.js";import"./scroll-into-view-if-needed-59a60a09.js";import"./path-browserify-8c7c24dd.js";import"./vue-router-74931cc0.js";import"./pinia-c1bb2998.js";import"./@vueuse-96027ebb.js";import"./axios-7fb8d0b2.js";import"./qs-536c1183.js";import"./side-channel-52a2f2e5.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./call-bind-d34af9d2.js";import"./object-inspect-a85657d3.js";import"./mockjs-a6500710.js";import"./tiny-emitter-af47831f.js";import"./xgplayer-474fd437.js";import"./quill-daa56216.js";import"./sortablejs-2f5483e3.js";function d(){const t=[];for(;t.length<12;)t.push(s(80,250));return t}const u=["周一","周二","周三","周四","周五","周六","周日"],h=o({name:"WeekSalesChart",setup(){const s=e(!0),o=e(null);return i((()=>{const e={color:["rgba(64, 58, 255)"],grid:{top:"10%",left:"2%",right:"2%",bottom:"5%",containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",splitLine:{show:!1},data:u,axisLabel:{textStyle:{fontSize:10}},axisLine:{show:!0,lineStyle:{color:"#98A3B2",width:0,type:"solid"}},axisTick:{show:!1}},yAxis:{type:"value",max:300,splitLine:{show:!1},axisLabel:{textStyle:{fontSize:10}},axisLine:{show:!0,lineStyle:{color:"#98A3B2",width:0,type:"solid"}}},series:[{type:"bar",name:"周销售图",stack:"总量",data:d(),smooth:!0,barMaxWidth:10,barMinWidth:5,itemStyle:{borderWidth:15,color:new c(0,0,0,1,[{offset:0,color:"#5880F8"},{offset:.5,color:"#3ca6ff"},{offset:1,color:"#58B9F8"}])}}]};setTimeout((()=>{s.value=!1,setTimeout((()=>{a((()=>t(o.value).setOption(e)))}),100)}),1e3)})),r((()=>{n(o.value),clearInterval(null)})),{loading:s,weekSalesChart:o,updateChart:()=>{t(o.value).resize()}}}}),f={class:"chart-item-container"},b={ref:"weekSalesChart",class:"chart-item"};const y=j(h,[["render",function(t,s,o,e,i,r){return l(),p("div",f,[m("div",b,null,512)])}],["__scopeId","data-v-e0d9c825"]]);export{y as default};