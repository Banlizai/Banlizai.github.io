import{M as e,V as a,a8 as l,$ as s,a0 as t,X as u,u as o,aC as d,a5 as r,Y as i,Z as n,B as m,aa as c}from"./@arco-design-8dabd30f.js";import{a as p}from"./plan-d5704754.js";import{u as f}from"./dict-9c237ae6.js";import{a as v,b as y}from"./scan-bab6470e.js";import{d as j,u as k,G as b,v as h,r as V,h as _,l as g,o as w,m as x,w as T,s as U,C,J as q,f as $,q as A,a1 as I,c as H,F as O,R as S,D as B}from"./@vue-2b41ce19.js";import{n as F}from"./index-0ca45986.js";import"./b-tween-5055d79e.js";import"./b-validate-457088db.js";import"./resize-observer-polyfill-ad543aa3.js";import"./scroll-into-view-if-needed-59a60a09.js";import"./compute-scroll-into-view-2962e95c.js";import"./number-precision-d9b928a1.js";import"./dayjs-094145ee.js";import"./@logicflow-85f8458e.js";import"./ids-ef071351.js";import"./lodash-es-1e3e3aa2.js";import"./preact-5fc9b0bf.js";import"./pinia-b3c1485e.js";import"./axios-6371c10e.js";import"./qs-f981fe00.js";import"./side-channel-01aeb4d9.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./call-bind-fae29077.js";import"./object-inspect-0eda087e.js";import"./path-browserify-8c7c24dd.js";import"./vue-router-70e2faff.js";import"./@vueuse-ca9a384d.js";import"./tiny-emitter-35dc7566.js";import"./echarts-24943dbb.js";import"./zrender-2d3b2bba.js";import"./tslib-a4e99503.js";import"./xgplayer-700bd6a3.js";import"./delegate-ef66b241.js";import"./downloadjs-91c0ea73.js";import"./quill-ecb3881d.js";import"./sortablejs-2f5483e3.js";const M={class:"w-full h-full flex justify-center items-center"},N={class:"w-full h-full flex justify-center items-center"},z={class:"h-full pl-28 min-h-[180px]"},D={class:"flex flex-wrap justify-start"},E={class:"flex justify-center w-full absolute bottom-0 pt-2 footer"},J=F(j({__name:"ScanControl",props:{modelValue:{type:Object,require:!0,default:()=>{}}},emits:["update"],setup(j,{emit:F}){const J=j,{execution:P}=f(),R=k(!1),W=k(!1),G=b(J,"modelValue"),L=k([]);h((()=>G.value.id),(e=>{const{dayOfWeeks:a,dayOfMonths:l,jobType:s,hour:t,minute:u,second:o}=G.value;switch(s){case 1:ae.value=`${t}:${u}:${o}`;break;case 3:ae.value=`${t}:${u}:${o}`;for(let e=0;e<ee.length;e++){const l=ee.find((l=>l.key===a[e]));l&&(l.value=!0)}break;case 2:ae.value=`${t}:${u}:${o}`,Q.forEach((e=>{(null==l?void 0:l.includes(e.key))&&(e.value=!0)}))}}));const X=k();async function Y(){const e=G.value.taskType;try{W.value=!0;const{rows:a}=e?await Promise.resolve({rows:[{id:1,subnetAddress:"192.168.0.1"}]}):await p();L.value=a.map((e=>({value:e.subnetAddress,label:e.subnetAddress})))}catch(a){}finally{W.value=!1}}function Z(){X.value.resetFields()}function K(){const e=Q.filter((e=>e.value));G.value.dayOfMonths=0===e.length?[]:e.map((e=>e.key))}const Q=V(Array.from({length:31},((e,a)=>({key:a+1,value:!1})))),ee=V([{label:"周一",key:1,value:!1},{label:"周二",key:2,value:!1},{label:"周三",key:3,value:!1},{label:"周四",key:4,value:!1},{label:"周五",key:5,value:!1},{label:"周六",key:6,value:!1},{label:"周日",key:7,value:!1}]);const ae=k("");function le(e){if("string"==typeof e){const[a,l,s]=e.split(":");G.value.hour=parseInt(a,10),G.value.minute=parseInt(l,10),G.value.second=parseInt(s,10)}}async function se({values:a,errors:l}){if(!l)try{R.value=!0;const{msg:l}=G.value.id?await v(a):await y(a);e.success(l),Z(),F("update")}catch(s){}finally{R.value=!1}}return _((()=>{Y()})),(e,p)=>{const f=a,v=l,y=s,j=t,k=u,b=o,h=g("icon-loading"),V=d,_=r,F=i,J=n,te=m,ue=c;return w(),x(ue,{ref_key:"formRef",ref:X,class:"w-[500px] px-4",layout:"vertical",model:G.value,onSubmit:se},{default:T((()=>[U(v,{field:"taskName",label:"任务名称",rules:[{required:!0,message:"任务名称不能为空"},{minLength:3,message:"必须大于3个字符"}],"validate-trigger":["change","input"]},{default:T((()=>[U(f,{modelValue:G.value.taskName,"onUpdate:modelValue":p[0]||(p[0]=e=>G.value.taskName=e),placeholder:"请输入任务名称..."},null,8,["modelValue"])])),_:1}),U(v,{field:"taskType",label:"任务类型",rules:[{required:!0,message:"请选择任务类型"}]},{default:T((()=>[U(j,{modelValue:G.value.taskType,"onUpdate:modelValue":p[1]||(p[1]=e=>G.value.taskType=e),onChange:Y},{default:T((()=>[U(y,{value:0},{default:T((()=>[C("IPV4任务 ")])),_:1}),U(y,{value:1},{default:T((()=>[C("准入扫描")])),_:1})])),_:1},8,["modelValue"])])),_:1}),U(v,{field:"type",label:"类型",rules:[{required:!0,message:"请选择类型"}]},{default:T((()=>[U(b,{modelValue:G.value.type,"onUpdate:modelValue":p[2]||(p[2]=e=>G.value.type=e),placeholder:"请选择类型...","allow-clear":""},{default:T((()=>[U(k,{value:0},{default:T((()=>[C("指定任务")])),_:1}),U(k,{value:1},{default:T((()=>[C("全局任务")])),_:1})])),_:1},8,["modelValue"])])),_:1}),0===G.value.type?(w(),x(v,{key:0,field:"subnetIpAddress",label:""},{default:T((()=>[U(V,{title:[G.value.taskType?"可选择交换机":"已规划的子网地址",G.value.taskType?"选择的交换机":"已选中的子网地址"],data:L.value,modelValue:G.value.subnetIpAddress,"onUpdate:modelValue":p[3]||(p[3]=e=>G.value.subnetIpAddress=e)},q({_:2},[W.value?{name:"source",fn:T((()=>[$("div",M,[U(h)])])),key:"0"}:void 0,W.value?{name:"target",fn:T((()=>[$("div",N,[U(h)])])),key:"1"}:void 0]),1032,["title","data","modelValue"])])),_:1})):A("",!0),U(v,{field:"taskStatus",label:"任务类型",rules:[{required:!0,message:"请选择任务类型"}]},{default:T((()=>[U(j,{modelValue:G.value.taskStatus,"onUpdate:modelValue":p[4]||(p[4]=e=>G.value.taskStatus=e)},{default:T((()=>[U(y,{value:!1},{default:T((()=>[C("启用 ")])),_:1}),U(y,{value:!0},{default:T((()=>[C("禁用")])),_:1})])),_:1},8,["modelValue"])])),_:1}),U(v,{field:"jobType",label:"执行时间",required:!0},{default:T((()=>[U(b,{modelValue:G.value.jobType,"onUpdate:modelValue":p[5]||(p[5]=e=>G.value.jobType=e),options:I(P),placeholder:"请选择执行时间"},null,8,["modelValue","options"])])),_:1}),$("div",z,[1===G.value.jobType?(w(),x(_,{key:0,modelValue:ae.value,"onUpdate:modelValue":p[6]||(p[6]=e=>ae.value=e),class:"w-full",format:"HH:mm:ss",onChange:le},null,8,["modelValue"])):A("",!0),3===G.value.jobType?(w(),x(J,{key:1,direction:"vertical"},{default:T((()=>[U(J,null,{default:T((()=>[(w(!0),H(O,null,S(ee,(e=>(w(),x(F,{checked:e.value,"onUpdate:checked":a=>e.value=a,key:e.key,checkable:"",color:"arcoblue","default-checked":!0,onCheck:a=>(e.key,void(G.value.dayOfWeeks=ee.filter((e=>e.value)).map((e=>e.key))))},{default:T((()=>[C(B(e.label),1)])),_:2},1032,["checked","onUpdate:checked","onCheck"])))),128))])),_:1}),U(_,{modelValue:ae.value,"onUpdate:modelValue":p[7]||(p[7]=e=>ae.value=e),class:"w-full",format:"HH:mm:ss",onChange:le},null,8,["modelValue"])])),_:1})):A("",!0),2===G.value.jobType?(w(),x(J,{key:2,direction:"vertical"},{default:T((()=>[$("div",D,[(w(!0),H(O,null,S(Q,(e=>(w(),H("div",{class:"w-1/7 p-1",key:e.key},[U(F,{class:"flex justify-center w-8",checked:e.value,"onUpdate:checked":a=>e.value=a,checkable:"",color:"arcoblue","default-checked":!0,onCheck:K},{default:T((()=>[C(B(e.key),1)])),_:2},1032,["checked","onUpdate:checked"])])))),128))]),U(_,{modelValue:ae.value,"onUpdate:modelValue":p[8]||(p[8]=e=>ae.value=e),class:"w-full",format:"HH:mm:ss",onChange:le},null,8,["modelValue"])])),_:1})):A("",!0)]),$("div",E,[U(J,null,{default:T((()=>[U(te,{type:"primary",loading:R.value,"html-type":"submit"},{default:T((()=>[C("保存")])),_:1},8,["loading"]),U(te,{onClick:Z},{default:T((()=>[C("重置")])),_:1})])),_:1})])])),_:1},8,["model"])}}}),[["__scopeId","data-v-84b48097"]]);export{J as default};
