import{v as t,R as e,s,a9 as a,Z as i,ab as r,_ as l,A as o,L as d,d as n,e as m}from"./@arco-design-306c64c5.js";import c from"./ProjectItem-d437fbd7.js";import p from"./TodoItem-0a1b9bae.js";import{u}from"./vue-router-74931cc0.js";import{x as f,_ as g}from"./index-4d88e5a9.js";import{r as j}from"./lodash-es-6e445b1b.js";import{e as x,c as y,a as v,j as b,k as _,p as h,v as k,m as T,n as w,z as A,F as C,R as I,l as N,O as F,q as z,y as D,aX as L,aV as q}from"./@vue-ab7141bd.js";import"./resize-observer-polyfill-ad543aa3.js";import"./compute-scroll-into-view-2962e95c.js";import"./b-tween-5055d79e.js";import"./dayjs-f47c42f6.js";import"./@logicflow-435513e4.js";import"./ids-ef071351.js";import"./preact-173f4f0b.js";import"./b-validate-42052d35.js";import"./number-precision-d9b928a1.js";import"./scroll-into-view-if-needed-59a60a09.js";import"./path-browserify-8c7c24dd.js";import"./pinia-c1bb2998.js";import"./@vueuse-96027ebb.js";import"./axios-7fb8d0b2.js";import"./qs-536c1183.js";import"./side-channel-52a2f2e5.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./call-bind-d34af9d2.js";import"./object-inspect-a85657d3.js";import"./mockjs-a6500710.js";import"./tiny-emitter-af47831f.js";import"./xgplayer-474fd437.js";import"./quill-daa56216.js";import"./sortablejs-2f5483e3.js";const P=["#67C23A","#E6A23C","#F56C6C","#409EFF"],W=new Date,S=x({name:"WorkPlace",components:{ProjectItem:c,TodoItem:p},setup(){const t=f(),e=y((()=>t.avatar)),s=v([]),a=u();return{tempWaitingItems:s,avatar:e,currentDate:W.getFullYear()+"/"+(W.getMonth()+1)+"/"+W.getDate(),dataItems:[],fastActions:[{title:"首页",icon:"icon-dashboard",path:"/",color:P[j(0,P.length)]},{title:"系统管理",path:"/system/department",icon:"icon-settings",color:P[j(0,P.length)]},{title:"列表",path:"/list/table-custom",icon:"icon-list",color:P[j(0,P.length)]},{title:"表单",path:"/form/base-form-view",icon:"icon-edit",color:P[j(0,P.length)]},{title:"多级菜单",path:"/next/menu2/menu-2-1/menu-2-1-1",icon:"icon-share-alt",color:P[j(0,P.length)]},{title:"更多功能",path:"/other/chart/icons",icon:"icon-apps",color:P[j(0,P.length)]}],dataList:[{key:"1",projectName:"Vue Admin Work A 开发",beginTime:"2021-12-01",endTime:"2021-12-31",progress:100,status:"完成"},{key:"2",projectName:"官网开发",beginTime:"2021-12-01",endTime:"2021-12-31",progress:90,status:"进行中"},{key:"3",projectName:"文档编写",beginTime:"2021-12-01",endTime:"2021-12-31",progress:80,status:"进行中"},{key:"4",projectName:"X 版升级",beginTime:"2021-12-01",endTime:"2025-12-31",progress:50,status:"进行中"},{key:"5",projectName:"Admin Work版升级",beginTime:"2021-12-01",endTime:"2025-12-31",progress:50,status:"进行中"},{key:"6",projectName:"基础版升级",beginTime:"2021-12-01",endTime:"2025-12-31",progress:50,status:"进行中"}],messageList:[{name:"test",content:"test"}],fastActionClick:({path:t="/"})=>{a.push(t)}}}}),E=t=>(L("data-v-2f6665e7"),t=t(),q(),t),R={class:"main-container"},V={class:"flex justify-center items-center"},X={class:"avatar-wrapper"},B=["src"],H=E((()=>w("div",{class:"flex flex-col justify-around ml-3.5 flex-1"},[w("div",{class:"text-lg"},"早上好，Andy，青春只有一次，别让自己过得不精彩"),w("div",{class:"text-sm text-gray-500 mt-1"},"今日有小雨，出门别忘记带伞哦~")],-1))),M={class:"flex justify-end items-center h-full w-full mt-4"},O=E((()=>w("div",{class:"flex flex-col justify-around align-end item-action"},[w("div",{class:"text-gray"},"项目数"),w("div",{class:"text-lg mt-2"},"12")],-1))),U=E((()=>w("div",{class:"flex flex-col justify-around align-end item-action"},[w("div",{class:"text-gray"},"待办项"),w("div",{class:"text-lg mt-2"},"3/20")],-1))),Y={class:"flex flex-col justify-around align-end item-action"},Z=E((()=>w("div",{class:"text-gray"},"当前日期",-1))),G={class:"text-lg mt-2"},J=E((()=>w("div",{class:"mt-3"},null,-1))),K={class:"mt-8 text-md"},Q=E((()=>w("div",{class:"mt-3"},null,-1))),$={class:"mt-3"};const tt=g(S,[["render",function(c,p,u,f,g,j){const x=t,y=e,v=s,L=a,q=b("ProjectItem"),P=i,W=r,S=l,E=b("IconUser"),tt=o,et=d,st=n,at=m;return _(),h("div",R,[k(v,{title:"工作台",bodyStyle:{padding:"10px"},headStyle:{padding:"0 10px"},bordered:!1,class:"card-border-radius"},{default:T((()=>[k(y,{class:"margin-top",wrap:""},{default:T((()=>[k(x,{xs:24,sm:16,md:16,lg:16,xl:14},{default:T((()=>[w("div",V,[w("div",X,[w("img",{src:c.avatar},null,8,B)]),H])])),_:1}),k(x,{xs:24,sm:8,md:8,lg:8,xl:10},{default:T((()=>[w("div",M,[O,U,w("div",Y,[Z,w("div",G,A(c.currentDate),1)])])])),_:1})])),_:1})])),_:1}),J,k(y,{gutter:[20,10]},{default:T((()=>[(_(!0),h(C,null,I(c.fastActions,((t,e)=>(_(),N(x,{xs:12,sm:8,md:8,xl:4,xxl:4,key:e},{default:T((()=>[k(v,{onClick:e=>c.fastActionClick(t),class:"flex flex-col items-center justify-center fast-item-wrapper",bordered:!1},{default:T((()=>[k(L,{direction:"vertical",align:"center"},{default:T((()=>[(_(),N(F(t.icon),{style:z({color:t.color,fontSize:"28px"})},null,8,["style"])),w("span",K,A(t.title),1)])),_:2},1024)])),_:2},1032,["onClick"])])),_:2},1024)))),128))])),_:1}),Q,k(y,{gutter:[20,10]},{default:T((()=>[(_(!0),h(C,null,I(c.dataItems,((t,e)=>(_(),N(x,{xs:24,sm:24,md:24,lg:8,xl:8,key:e},{default:T((()=>[k(v,{class:"card-border-radius",bordered:!1},{default:T((()=>[k(q,{class:"flex-1 ml-2",item:t},null,8,["item"])])),_:2},1024)])),_:2},1024)))),128))])),_:1}),w("div",$,[k(y,{gutter:20},{default:T((()=>[k(x,{xs:24,sm:16,md:16,lg:16,xl:16},{default:T((()=>[k(v,{"body-style":{padding:"0px"},bordered:!1,class:"card-border-radius",title:"项目进度"},{default:T((()=>[k(S,{data:c.dataList,pagination:!1,bordered:!1},{columns:T((()=>[k(P,{"data-index":"projectName",title:"项目名"}),k(P,{"data-index":"beginTime",title:"开始时间"}),k(P,{"data-index":"endTime",title:"结束时间"}),k(P,{"data-index":"progress",title:"进度"},{cell:T((({record:t})=>[k(W,null,{default:T((()=>[D(A(t.progress+"%"),1)])),_:2},1024)])),_:1}),k(P,{"data-index":"status",title:"状态"},{cell:T((({record:t})=>[k(W,{color:t.progress<100?"red":"green",loading:t.progress<100},{default:T((()=>[D(A(t.status),1)])),_:2},1032,["color","loading"])])),_:1})])),_:1},8,["data"])])),_:1})])),_:1}),k(x,{xs:24,sm:8,md:8,lg:8,xl:8},{default:T((()=>[k(v,{"body-style":{padding:"0px"},bordered:!1,class:"card-border-radius",title:"消息列表"},{default:T((()=>[k(at,{bordered:!1},{default:T((()=>[k(st,null,{default:T((()=>[(_(!0),h(C,null,I(c.messageList,((t,e)=>(_(),N(et,{key:e,title:t.name,description:t.content},{avatar:T((()=>[k(tt,{size:32,style:{backgroundColor:"#3370ff"}},{default:T((()=>[k(E)])),_:1})])),_:2},1032,["title","description"])))),128))])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])])}],["__scopeId","data-v-2f6665e7"]]);export{tt as default};