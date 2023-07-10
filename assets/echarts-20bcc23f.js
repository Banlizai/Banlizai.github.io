import{ad as e,ae as t,i as a}from"./@arco-design-8dabd30f.js";import{_ as s}from"./Chart.vue_vue_type_script_setup_true_name_LineChart_lang-d2134eda.js";import{d as i,o as r,c as o,s as l,w as p}from"./@vue-2b41ce19.js";import"./b-tween-5055d79e.js";import"./b-validate-457088db.js";import"./resize-observer-polyfill-ad543aa3.js";import"./scroll-into-view-if-needed-59a60a09.js";import"./compute-scroll-into-view-2962e95c.js";import"./number-precision-d9b928a1.js";import"./dayjs-094145ee.js";import"./@logicflow-85f8458e.js";import"./ids-ef071351.js";import"./lodash-es-1e3e3aa2.js";import"./preact-5fc9b0bf.js";import"./index-0ca45986.js";import"./pinia-b3c1485e.js";import"./axios-6371c10e.js";import"./qs-f981fe00.js";import"./side-channel-01aeb4d9.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./call-bind-fae29077.js";import"./object-inspect-0eda087e.js";import"./path-browserify-8c7c24dd.js";import"./vue-router-70e2faff.js";import"./@vueuse-ca9a384d.js";import"./tiny-emitter-35dc7566.js";import"./echarts-24943dbb.js";import"./zrender-2d3b2bba.js";import"./tslib-a4e99503.js";import"./xgplayer-700bd6a3.js";import"./delegate-ef66b241.js";import"./downloadjs-91c0ea73.js";import"./quill-ecb3881d.js";import"./sortablejs-2f5483e3.js";const d=i({__name:"echarts",setup(i){const d={xAxis:{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},grid:{x:"10%",y:"5%",x2:"5%",y2:"15%"},series:[{data:[150,230,224,218,135,147,260],type:"line"}]},n={grid:{x:"10%",y:"5%",x2:"5%",y2:"15%"},xAxis:{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[820,932,901,934,1290,1330,1320],type:"line",areaStyle:{}}]},m={tooltip:{trigger:"axis"},xAxis:{type:"category",boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]},yAxis:{type:"value"},series:[{name:"邮件营销",type:"line",stack:"总量",data:[120,132,101,134,90,230,210]},{name:"联盟广告",type:"line",stack:"总量",data:[220,182,191,234,290,330,310]},{name:"视频广告",type:"line",stack:"总量",data:[150,232,201,154,190,330,410]},{name:"直接访问",type:"line",stack:"总量",data:[320,332,301,334,390,330,320]},{name:"搜索引擎",type:"line",stack:"总量",data:[820,932,901,934,1290,1330,1320]}],grid:{x:"15%",y:"5%",x2:"1%",y2:"15%"}},y={xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[120,200,150,80,70,110,130],type:"bar",showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"}}],grid:{x:"15%",y:"5%",x2:"1%",y2:"15%"}},u={xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[120,{value:200,itemStyle:{color:"#a90000"}},150,80,70,110,130],type:"bar"}],grid:{x:"15%",y:"5%",x2:"1%",y2:"15%"}},x={xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:["巴西","印尼","美国","印度","中国"]},series:[{name:"2011年",type:"bar",data:[18203,23489,29034,104970,131744]},{name:"2012年",type:"bar",data:[19325,23438,31e3,121594,134141]}],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{x:"15%",y:"5%",x2:"1%",y2:"15%"}},g={series:[{name:"访问来源",type:"pie",radius:"50%",data:[{value:1048,name:"搜索引擎"},{value:735,name:"直接访问"},{value:580,name:"邮件营销"},{value:484,name:"联盟广告"},{value:300,name:"视频广告"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}],grid:{x:"15%",y:"5%",x2:"1%",y2:"15%"}},h={series:[{name:"访问来源",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"20",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:1048,name:"搜索引擎"},{value:735,name:"直接访问"},{value:580,name:"邮件营销"},{value:484,name:"联盟广告"},{value:300,name:"视频广告"}]}],grid:{x:"15%",y:"5%",x2:"1%",y2:"15%"}},c={series:[{name:"面积模式",type:"pie",radius:[20,60],center:["50%","50%"],roseType:"area",itemStyle:{borderRadius:8},data:[{value:40,name:"rose 1"},{value:38,name:"rose 2"},{value:32,name:"rose 3"},{value:30,name:"rose 4"},{value:28,name:"rose 5"},{value:26,name:"rose 6"},{value:22,name:"rose 7"},{value:18,name:"rose 8"}]}],grid:{x:"15%",y:"5%",x2:"1%",y2:"15%"}};return(i,j)=>{const v=e,b=t,f=a;return r(),o("div",null,[l(f,{title:"折线图","body-style":{padding:"10px"},"header-style":{padding:"10px"}},{default:p((()=>[l(b,null,{default:p((()=>[l(v,{xs:24,sm:12,md:8,lg:8,xl:8,style:{height:"180px"}},{default:p((()=>[l(s,{options:d})])),_:1}),l(v,{xs:24,sm:12,md:8,lg:8,xl:8,style:{height:"180px"}},{default:p((()=>[l(s,{options:n})])),_:1}),l(v,{xs:24,sm:12,md:8,lg:8,xl:8,style:{height:"180px"}},{default:p((()=>[l(s,{options:m})])),_:1})])),_:1})])),_:1}),l(f,{title:"柱状图","body-style":{padding:"10px"},"header-style":{padding:"10px"},class:"mt-2 mb-2"},{default:p((()=>[l(b,{"x-gap":"10","y-gap":"10",cols:"xs:1 s:2 m:3 l:3 xl:3",responsive:"screen"},{default:p((()=>[l(v,{xs:24,sm:12,md:8,lg:8,xl:8,style:{height:"180px"}},{default:p((()=>[l(s,{options:y})])),_:1}),l(v,{xs:24,sm:12,md:8,lg:8,xl:8,style:{height:"180px"}},{default:p((()=>[l(s,{options:u})])),_:1}),l(v,{xs:24,sm:12,md:8,lg:8,xl:8,style:{height:"180px"}},{default:p((()=>[l(s,{options:x})])),_:1})])),_:1})])),_:1}),l(f,{title:"饼状图","content-style":{padding:"10px"},"header-style":{padding:"10px"}},{default:p((()=>[l(b,{"x-gap":"10","y-gap":"10",cols:"xs:1 s:2 m:3 l:3 xl:3",responsive:"screen"},{default:p((()=>[l(v,{xs:24,sm:12,md:8,lg:8,xl:8,style:{height:"180px"}},{default:p((()=>[l(s,{options:g})])),_:1}),l(v,{xs:24,sm:12,md:8,lg:8,xl:8,style:{height:"180px"}},{default:p((()=>[l(s,{options:h})])),_:1}),l(v,{xs:24,sm:12,md:8,lg:8,xl:8,style:{height:"180px"}},{default:p((()=>[l(s,{options:c})])),_:1})])),_:1})])),_:1})])}}});export{d as default};
