import{A as e,g as a,G as s,u as t,a as o,K as i,b as l,w as n,e as r,L as c,f as d,x as m,h as u,i as p,j as y,k as v,l as f,m as g,M as h}from"./index-0ca45986.js";import{M as j,n as b,T as w,c as k,B as C}from"./@arco-design-8dabd30f.js";import{u as _,a as x,b as T,c as B,d as S,e as R}from"./columns-1685844f.js";import{d as A,u as M,b as K,h as L,l as V,a_ as D,o as O,c as U,f as z,s as q,w as E,N as F,m as N,C as G,q as H,a1 as J,D as P,Y,F as $,r as I}from"./@vue-2b41ce19.js";import"./pinia-b3c1485e.js";import"./axios-6371c10e.js";import"./@logicflow-85f8458e.js";import"./ids-ef071351.js";import"./lodash-es-1e3e3aa2.js";import"./preact-5fc9b0bf.js";import"./qs-f981fe00.js";import"./side-channel-01aeb4d9.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./call-bind-fae29077.js";import"./object-inspect-0eda087e.js";import"./dayjs-094145ee.js";import"./path-browserify-8c7c24dd.js";import"./vue-router-70e2faff.js";import"./@vueuse-ca9a384d.js";import"./tiny-emitter-35dc7566.js";import"./echarts-24943dbb.js";import"./zrender-2d3b2bba.js";import"./tslib-a4e99503.js";import"./xgplayer-700bd6a3.js";import"./delegate-ef66b241.js";import"./downloadjs-91c0ea73.js";import"./quill-ecb3881d.js";import"./sortablejs-2f5483e3.js";import"./b-tween-5055d79e.js";import"./b-validate-457088db.js";import"./resize-observer-polyfill-ad543aa3.js";import"./scroll-into-view-if-needed-59a60a09.js";import"./compute-scroll-into-view-2962e95c.js";import"./number-precision-d9b928a1.js";import"./dict-9c237ae6.js";const Q=async a=>await e({url:"/ipmanage/simBaseMac/import",data:a,headers:{"Content-Type":"multipart/form-data"}}),W={class:"main-container"},X=A({__name:"access",setup(A){const X=M("live"),{selectedRowKeys:Z,onSelectionChange:ee,showCheckedAll:ae}=_(),{ADD:se}=h,te=t(),oe=M(null),ie=x(he),le=T(),{bordered:ne,striped:re,handleSuccess:ce,tableLoading:de,dataList:me}=le,ue=R("id"),{ipAddressReal:pe,ipAddressBenchmark:ye}=B(),ve=K((()=>"live"===X.value?pe:ye)),{onSorterChange:fe,sortOrder:ge}=S(he);async function he(){de.value=!0;const e={pageNum:ie.page,pageSize:ie.pageSize,orderByColumn:ge.orderBy,isAsc:ge.isAsc,...l(ve.value)};try{const s="live"===X.value?await(async e=>await a({url:"/ipmanage/simRealTime",data:e}))(e):await(async e=>await a({url:"/ipmanage/simBaseMac",data:e}))(e),{code:t,rows:o,msg:i,total:l}=s,n={code:t,msg:i,data:o};de.value=!1,ce(I(n)),ie.setTotalSize(l||10)}catch(s){}}function je(){ve.value.forEach((e=>{e.searchReset?e.searchReset():e.searchValue=""})),he()}async function be(){var a;try{const{msg:s}=await(async a=>await e({url:"/ipmanage/simBaseMac",data:a}))(n(te.itemOption));j.success(s),null==(a=oe.value)||a.close()}catch(s){}}function we(){const e=Z.value;try{r(c,e,"基准表")}catch(a){}}function ke(){var e;te.title=se,te.itemOption=ve.value,null==(e=oe.value)||e.show()}function Ce(){b.confirm({title:"提示",content:"是否清空所有数据？",cancelText:"取消",okText:"确认",onOk:async()=>{try{const{msg:e}=await(async()=>await s({url:"/ipmanage/simBaseMac/toEmpty"}))();j.success(e),he()}catch(e){}}})}function _e(e=void 0){const a=e||Z.value.toString();if(!a)return j.error("请选择删除项");b.confirm({title:"提示",content:"是否删除选中项？",cancelText:"取消",okText:"确认",onOk:async()=>{try{const{msg:e}=await(async e=>await s({url:`/ipmanage/simBaseMac/${e}`}))(a);j.success(e),he(),Z.value=[]}catch(e){}}})}function xe(){const a=Z.value;if(!a.length)return j.error("请选择加入项");b.confirm({title:"提示",content:"是否加入基准表？",cancelText:"取消",okText:"确认",onOk:async()=>{try{const{msg:s}=await(async a=>await e({url:"/ipmanage/simRealTime/addBaseMac",data:a}))({ids:a});j.success(s),he(),Z.value=[]}catch(s){}}})}return L(he),(e,a)=>{const s=w,t=k,l=d,n=C,r=m,c=u,h=p,j=V("icon-delete"),b=y,_=v,x=f,T=g,B=D("hasPerm");return O(),U($,null,[z("div",W,[q(x,{ref:"tableBody"},{header:E((()=>[q(h,{"show-filter":!0,title:"",onSearch:he,onResetSearch:je},{"card-left":E((()=>[q(t,{type:"rounded","active-key":X.value,"onUpdate:activeKey":a[0]||(a[0]=e=>X.value=e),"default-active-key":"live","hide-content":"",animation:"",onTabClick:he},{default:E((()=>[q(s,{key:"live",title:"实时表"}),q(s,{key:"baseline",title:"基准表"})])),_:1},8,["active-key"])])),"search-content":E((()=>[q(l,{modelValue:ve.value,"onUpdate:modelValue":a[1]||(a[1]=e=>ve.value=e)},null,8,["modelValue"])])),"more-button-content":E((()=>["live"===X.value?F((O(),N(n,{key:0,type:"primary",onClick:xe},{default:E((()=>[G(" 加入基准表 ")])),_:1})),[[B,["ipaddress:access:addBaseline"]]]):H("",!0),"baseline"===X.value?F((O(),N(n,{key:1,type:"primary",onClick:ke},{default:E((()=>[G(" 添加 ")])),_:1})),[[B,["ipaddress:access:add"]]]):H("",!0),"baseline"===X.value?F((O(),N(n,{key:2,type:"primary",loading:J(o),onClick:we},{default:E((()=>[G(P(J(Z).length?"导出":"导出全部"),1)])),_:1},8,["loading"])),[[B,["ipaddress:access:export"]]]):H("",!0),"baseline"===X.value?(O(),N(r,{key:3,modelValue:J(Q),"onUpdate:modelValue":a[2]||(a[2]=e=>Y(Q)?Q.value=e:null),urlTemplate:J(i),name:"基准表模板",onUpdate:he},{default:E((()=>[G(" 导入 ")])),_:1},8,["modelValue","urlTemplate"])):H("",!0),"baseline"===X.value?F((O(),N(n,{key:4,status:"danger",onClick:a[3]||(a[3]=e=>_e())},{default:E((()=>[G(" 删除 ")])),_:1})),[[B,["ipaddress:access:del"]]]):H("",!0),"baseline"===X.value?F((O(),N(n,{key:5,status:"danger",onClick:Ce},{default:E((()=>[G(" 清空 ")])),_:1})),[[B,["ipaddress:access:empty"]]]):H("",!0)])),"table-config":E((()=>[q(c,{tableColumns:ve.value,"onUpdate:border":a[4]||(a[4]=e=>J(le).bordered.value=e),"onUpdate:striped":a[5]||(a[5]=e=>J(le).striped.value=e),onDoRefresh:he},null,8,["tableColumns"])])),_:1})])),default:E((()=>[q(b,{bordered:J(ne),striped:J(re),tableLoading:J(de),dataList:J(me),tableColumns:ve.value,rowKey:J(ue),onSelectionChange:J(ee),onSorterChange:J(fe),selectedRowKeys:J(Z),showCheckedAll:J(ae)},{optional:E((({record:e})=>[q(n,{type:"text",onClick:a=>_e(e.id)},{default:E((()=>[q(j)])),_:2},1032,["onClick"])])),_:1},8,["bordered","striped","tableLoading","dataList","tableColumns","rowKey","onSelectionChange","onSorterChange","selectedRowKeys","showCheckedAll"])])),footer:E((()=>[q(_,{pagination:J(ie)},null,8,["pagination"])])),_:1},512)]),q(T,{ref_key:"modalDialog",ref:oe,config:J(te),onConfirm:be},null,8,["config"])],64)}}});export{X as default};