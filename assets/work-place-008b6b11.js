import{ad as t,ae as e,i as s,Z as a,at as i,Y as r,R as l,A as o,L as d,a as n,b as m}from"./@arco-design-8dabd30f.js";import c from"./ProjectItem-7efe14c7.js";import p from"./TodoItem-4b4414c6.js";import{u}from"./vue-router-70e2faff.js";import{r as f}from"./lodash-es-1e3e3aa2.js";import{H as g,n as j}from"./index-0ca45986.js";import{d as x,b,r as y,l as v,o as h,c as _,s as k,w as T,f as w,D as A,F as C,R as I,m as N,P as D,e as F,C as L,aX as P,aV as z}from"./@vue-2b41ce19.js";import"./b-tween-5055d79e.js";import"./b-validate-457088db.js";import"./resize-observer-polyfill-ad543aa3.js";import"./scroll-into-view-if-needed-59a60a09.js";import"./compute-scroll-into-view-2962e95c.js";import"./number-precision-d9b928a1.js";import"./dayjs-094145ee.js";import"./@logicflow-85f8458e.js";import"./ids-ef071351.js";import"./preact-5fc9b0bf.js";import"./pinia-b3c1485e.js";import"./axios-6371c10e.js";import"./qs-f981fe00.js";import"./side-channel-01aeb4d9.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./call-bind-fae29077.js";import"./object-inspect-0eda087e.js";import"./path-browserify-8c7c24dd.js";import"./@vueuse-ca9a384d.js";import"./tiny-emitter-35dc7566.js";import"./echarts-24943dbb.js";import"./zrender-2d3b2bba.js";import"./tslib-a4e99503.js";import"./xgplayer-700bd6a3.js";import"./delegate-ef66b241.js";import"./downloadjs-91c0ea73.js";import"./quill-ecb3881d.js";import"./sortablejs-2f5483e3.js";const W=["#67C23A","#E6A23C","#F56C6C","#409EFF"],q=new Date,E=x({name:"WorkPlace",components:{ProjectItem:c,TodoItem:p},setup(){const t=g(),e=b((()=>t.avatar)),s=y([]),a=u();return{tempWaitingItems:s,avatar:e,currentDate:q.getFullYear()+"/"+(q.getMonth()+1)+"/"+q.getDate(),dataItems:[],fastActions:[{title:"首页",icon:"icon-dashboard",path:"/",color:W[f(0,W.length)]},{title:"系统管理",path:"/system/department",icon:"icon-settings",color:W[f(0,W.length)]},{title:"列表",path:"/list/table-custom",icon:"icon-list",color:W[f(0,W.length)]},{title:"表单",path:"/form/base-form-view",icon:"icon-edit",color:W[f(0,W.length)]},{title:"多级菜单",path:"/next/menu2/menu-2-1/menu-2-1-1",icon:"icon-share-alt",color:W[f(0,W.length)]},{title:"更多功能",path:"/other/chart/icons",icon:"icon-apps",color:W[f(0,W.length)]}],dataList:[{key:"1",projectName:"Vue Admin Work A 开发",beginTime:"2021-12-01",endTime:"2021-12-31",progress:100,status:"完成"},{key:"2",projectName:"官网开发",beginTime:"2021-12-01",endTime:"2021-12-31",progress:90,status:"进行中"},{key:"3",projectName:"文档编写",beginTime:"2021-12-01",endTime:"2021-12-31",progress:80,status:"进行中"},{key:"4",projectName:"X 版升级",beginTime:"2021-12-01",endTime:"2025-12-31",progress:50,status:"进行中"},{key:"5",projectName:"Admin Work版升级",beginTime:"2021-12-01",endTime:"2025-12-31",progress:50,status:"进行中"},{key:"6",projectName:"基础版升级",beginTime:"2021-12-01",endTime:"2025-12-31",progress:50,status:"进行中"}],messageList:[{name:"test",content:"test"}],fastActionClick:({path:t="/"})=>{a.push(t)}}}}),S=t=>(P("data-v-eeed7ce5"),t=t(),z(),t),H={class:"main-container"},R={class:"flex justify-center items-center"},V={class:"avatar-wrapper"},X=["src"],Y=S((()=>w("div",{class:"flex flex-col justify-around ml-3.5 flex-1"},[w("div",{class:"text-lg"},"早上好，Andy，青春只有一次，别让自己过得不精彩"),w("div",{class:"text-sm text-gray-500 mt-1"},"今日有小雨，出门别忘记带伞哦~")],-1))),B={class:"flex justify-end items-center h-full w-full mt-4"},J=S((()=>w("div",{class:"flex flex-col justify-around align-end item-action"},[w("div",{class:"text-gray"},"项目数"),w("div",{class:"text-lg mt-2"},"12")],-1))),M=S((()=>w("div",{class:"flex flex-col justify-around align-end item-action"},[w("div",{class:"text-gray"},"待办项"),w("div",{class:"text-lg mt-2"},"3/20")],-1))),U={class:"flex flex-col justify-around align-end item-action"},Z=S((()=>w("div",{class:"text-gray"},"当前日期",-1))),G={class:"text-lg mt-2"},K=S((()=>w("div",{class:"mt-3"},null,-1))),O={class:"mt-8 text-md"},Q=S((()=>w("div",{class:"mt-3"},null,-1))),$={class:"mt-3"};const tt=j(E,[["render",function(c,p,u,f,g,j){const x=t,b=e,y=s,P=a,z=v("ProjectItem"),W=i,q=r,E=l,S=v("IconUser"),tt=o,et=d,st=n,at=m;return h(),_("div",H,[k(y,{title:"工作台",bodyStyle:{padding:"10px"},headStyle:{padding:"0 10px"},bordered:!1,class:"card-border-radius"},{default:T((()=>[k(b,{class:"margin-top",wrap:""},{default:T((()=>[k(x,{xs:24,sm:16,md:16,lg:16,xl:14},{default:T((()=>[w("div",R,[w("div",V,[w("img",{src:c.avatar,alt:"null"},null,8,X)]),Y])])),_:1}),k(x,{xs:24,sm:8,md:8,lg:8,xl:10},{default:T((()=>[w("div",B,[J,M,w("div",U,[Z,w("div",G,A(c.currentDate),1)])])])),_:1})])),_:1})])),_:1}),K,k(b,{gutter:[20,10]},{default:T((()=>[(h(!0),_(C,null,I(c.fastActions,((t,e)=>(h(),N(x,{xs:12,sm:8,md:8,xl:4,xxl:4,key:e},{default:T((()=>[k(y,{onClick:e=>c.fastActionClick(t),class:"flex flex-col items-center justify-center fast-item-wrapper",bordered:!1},{default:T((()=>[k(P,{direction:"vertical",align:"center"},{default:T((()=>[(h(),N(D(t.icon),{style:F({color:t.color,fontSize:"28px"})},null,8,["style"])),w("span",O,A(t.title),1)])),_:2},1024)])),_:2},1032,["onClick"])])),_:2},1024)))),128))])),_:1}),Q,k(b,{gutter:[20,10]},{default:T((()=>[(h(!0),_(C,null,I(c.dataItems,((t,e)=>(h(),N(x,{xs:24,sm:24,md:24,lg:8,xl:8,key:e},{default:T((()=>[k(y,{class:"card-border-radius",bordered:!1},{default:T((()=>[k(z,{class:"flex-1 ml-2",item:t},null,8,["item"])])),_:2},1024)])),_:2},1024)))),128))])),_:1}),w("div",$,[k(b,{gutter:20},{default:T((()=>[k(x,{xs:24,sm:16,md:16,lg:16,xl:16},{default:T((()=>[k(y,{"body-style":{padding:"0px"},bordered:!1,class:"card-border-radius",title:"项目进度"},{default:T((()=>[k(E,{data:c.dataList,pagination:!1,bordered:!1},{columns:T((()=>[k(W,{"data-index":"projectName",title:"项目名"}),k(W,{"data-index":"beginTime",title:"开始时间"}),k(W,{"data-index":"endTime",title:"结束时间"}),k(W,{"data-index":"progress",title:"进度"},{cell:T((({record:t})=>[k(q,null,{default:T((()=>[L(A(t.progress+"%"),1)])),_:2},1024)])),_:1}),k(W,{"data-index":"status",title:"状态"},{cell:T((({record:t})=>[k(q,{color:t.progress<100?"red":"green",loading:t.progress<100},{default:T((()=>[L(A(t.status),1)])),_:2},1032,["color","loading"])])),_:1})])),_:1},8,["data"])])),_:1})])),_:1}),k(x,{xs:24,sm:8,md:8,lg:8,xl:8},{default:T((()=>[k(y,{"body-style":{padding:"0px"},bordered:!1,class:"card-border-radius",title:"消息列表"},{default:T((()=>[k(at,{bordered:!1},{default:T((()=>[k(st,null,{default:T((()=>[(h(!0),_(C,null,I(c.messageList,((t,e)=>(h(),N(et,{key:e,title:t.name,description:t.content},{avatar:T((()=>[k(tt,{size:32,style:{backgroundColor:"#3370ff"}},{default:T((()=>[k(S)])),_:1})])),_:2},1032,["title","description"])))),128))])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])])}],["__scopeId","data-v-eeed7ce5"]]);export{tt as default};
