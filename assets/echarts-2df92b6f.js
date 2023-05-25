import{v as e,R as t,s}from"./@arco-design-306c64c5.js";import a from"./Chart-d9ec7554.js";import{e as o,j as i,k as l,p,v as r,m as n}from"./@vue-ab7141bd.js";import{_ as d}from"./index-4d88e5a9.js";import"./resize-observer-polyfill-ad543aa3.js";import"./compute-scroll-into-view-2962e95c.js";import"./b-tween-5055d79e.js";import"./dayjs-f47c42f6.js";import"./@logicflow-435513e4.js";import"./ids-ef071351.js";import"./preact-173f4f0b.js";import"./b-validate-42052d35.js";import"./number-precision-d9b928a1.js";import"./scroll-into-view-if-needed-59a60a09.js";import"./useEcharts-7f7f0c42.js";import"./echarts-35075750.js";import"./zrender-861a5f66.js";import"./tslib-a4e99503.js";import"./path-browserify-8c7c24dd.js";import"./vue-router-74931cc0.js";import"./pinia-c1bb2998.js";import"./@vueuse-96027ebb.js";import"./axios-7fb8d0b2.js";import"./qs-536c1183.js";import"./side-channel-52a2f2e5.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./call-bind-d34af9d2.js";import"./object-inspect-a85657d3.js";import"./mockjs-a6500710.js";import"./tiny-emitter-af47831f.js";import"./xgplayer-474fd437.js";import"./quill-daa56216.js";import"./sortablejs-2f5483e3.js";import"./lodash-es-6e445b1b.js";const m=d(o({name:"Echarts",components:{Chart:a},setup:()=>({options1:{xAxis:{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},grid:{x:"10%",y:"5%",x2:"5%",y2:"15%"},series:[{data:[150,230,224,218,135,147,260],type:"line"}]},options2:{grid:{x:"10%",y:"5%",x2:"5%",y2:"15%"},xAxis:{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[820,932,901,934,1290,1330,1320],type:"line",areaStyle:{}}]},options3:{tooltip:{trigger:"axis"},xAxis:{type:"category",boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]},yAxis:{type:"value"},series:[{name:"邮件营销",type:"line",stack:"总量",data:[120,132,101,134,90,230,210]},{name:"联盟广告",type:"line",stack:"总量",data:[220,182,191,234,290,330,310]},{name:"视频广告",type:"line",stack:"总量",data:[150,232,201,154,190,330,410]},{name:"直接访问",type:"line",stack:"总量",data:[320,332,301,334,390,330,320]},{name:"搜索引擎",type:"line",stack:"总量",data:[820,932,901,934,1290,1330,1320]}],grid:{x:"15%",y:"5%",x2:"1%",y2:"15%"}},options4:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[120,200,150,80,70,110,130],type:"bar",showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"}}],grid:{x:"15%",y:"5%",x2:"1%",y2:"15%"}},options5:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[120,{value:200,itemStyle:{color:"#a90000"}},150,80,70,110,130],type:"bar"}],grid:{x:"15%",y:"5%",x2:"1%",y2:"15%"}},options6:{xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:["巴西","印尼","美国","印度","中国"]},series:[{name:"2011年",type:"bar",data:[18203,23489,29034,104970,131744]},{name:"2012年",type:"bar",data:[19325,23438,31e3,121594,134141]}],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{x:"15%",y:"5%",x2:"1%",y2:"15%"}},options7:{series:[{name:"访问来源",type:"pie",radius:"50%",data:[{value:1048,name:"搜索引擎"},{value:735,name:"直接访问"},{value:580,name:"邮件营销"},{value:484,name:"联盟广告"},{value:300,name:"视频广告"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}],grid:{x:"15%",y:"5%",x2:"1%",y2:"15%"}},options8:{series:[{name:"访问来源",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"20",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:1048,name:"搜索引擎"},{value:735,name:"直接访问"},{value:580,name:"邮件营销"},{value:484,name:"联盟广告"},{value:300,name:"视频广告"}]}],grid:{x:"15%",y:"5%",x2:"1%",y2:"15%"}},options9:{series:[{name:"面积模式",type:"pie",radius:[20,60],center:["50%","50%"],roseType:"area",itemStyle:{borderRadius:8},data:[{value:40,name:"rose 1"},{value:38,name:"rose 2"},{value:32,name:"rose 3"},{value:30,name:"rose 4"},{value:28,name:"rose 5"},{value:26,name:"rose 6"},{value:22,name:"rose 7"},{value:18,name:"rose 8"}]}],grid:{x:"15%",y:"5%",x2:"1%",y2:"15%"}}})}),[["render",function(a,o,d,m,y,u){const x=i("Chart"),g=e,h=t,c=s;return l(),p("div",null,[r(c,{title:"折线图","body-style":{padding:"10px"},"header-style":{padding:"10px"}},{default:n((()=>[r(h,null,{default:n((()=>[r(g,{xs:24,sm:12,md:8,lg:8,xl:8,style:{height:"180px"}},{default:n((()=>[r(x,{options:a.options1},null,8,["options"])])),_:1}),r(g,{xs:24,sm:12,md:8,lg:8,xl:8,style:{height:"180px"}},{default:n((()=>[r(x,{options:a.options2},null,8,["options"])])),_:1}),r(g,{xs:24,sm:12,md:8,lg:8,xl:8,style:{height:"180px"}},{default:n((()=>[r(x,{options:a.options3},null,8,["options"])])),_:1})])),_:1})])),_:1}),r(c,{title:"柱状图","body-style":{padding:"10px"},"header-style":{padding:"10px"},class:"mt-2 mb-2"},{default:n((()=>[r(h,{"x-gap":"10","y-gap":"10",cols:"xs:1 s:2 m:3 l:3 xl:3",responsive:"screen"},{default:n((()=>[r(g,{xs:24,sm:12,md:8,lg:8,xl:8,style:{height:"180px"}},{default:n((()=>[r(x,{options:a.options4},null,8,["options"])])),_:1}),r(g,{xs:24,sm:12,md:8,lg:8,xl:8,style:{height:"180px"}},{default:n((()=>[r(x,{options:a.options5},null,8,["options"])])),_:1}),r(g,{xs:24,sm:12,md:8,lg:8,xl:8,style:{height:"180px"}},{default:n((()=>[r(x,{options:a.options6},null,8,["options"])])),_:1})])),_:1})])),_:1}),r(c,{title:"饼状图","content-style":{padding:"10px"},"header-style":{padding:"10px"}},{default:n((()=>[r(h,{"x-gap":"10","y-gap":"10",cols:"xs:1 s:2 m:3 l:3 xl:3",responsive:"screen"},{default:n((()=>[r(g,{xs:24,sm:12,md:8,lg:8,xl:8,style:{height:"180px"}},{default:n((()=>[r(x,{options:a.options7},null,8,["options"])])),_:1}),r(g,{xs:24,sm:12,md:8,lg:8,xl:8,style:{height:"180px"}},{default:n((()=>[r(x,{options:a.options8},null,8,["options"])])),_:1}),r(g,{xs:24,sm:12,md:8,lg:8,xl:8,style:{height:"180px"}},{default:n((()=>[r(x,{options:a.options9},null,8,["options"])])),_:1})])),_:1})])),_:1})])}]]);export{m as default};