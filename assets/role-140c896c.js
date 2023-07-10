import{u as e,a,b as t,Z as s,r as o,w as r,e as i,a4 as n,f as l,h as c,i as d,j as m,k as u,l as p,m as y,M as h,a5 as f}from"./index-0ca45986.js";import{M as j,n as g,B as b,ao as v,v as k,Y as w}from"./@arco-design-8dabd30f.js";import{a as C,b as S,u as _,c as I,d as x,e as R}from"./columns-1685844f.js";import{b as V,c as A,d as O,e as D,f as K,g as L,h as U}from"./role-1d4bb45a.js";import{d as z,u as B,h as E,a_ as T,o as q,c as M,f as N,s as P,w as F,N as Y,m as H,a1 as J,C as Z,Y as $,F as G,r as Q}from"./@vue-2b41ce19.js";import{a as W}from"./@vueuse-ca9a384d.js";import"./pinia-b3c1485e.js";import"./axios-6371c10e.js";import"./@logicflow-85f8458e.js";import"./ids-ef071351.js";import"./lodash-es-1e3e3aa2.js";import"./preact-5fc9b0bf.js";import"./qs-f981fe00.js";import"./side-channel-01aeb4d9.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./call-bind-fae29077.js";import"./object-inspect-0eda087e.js";import"./dayjs-094145ee.js";import"./path-browserify-8c7c24dd.js";import"./vue-router-70e2faff.js";import"./tiny-emitter-35dc7566.js";import"./echarts-24943dbb.js";import"./zrender-2d3b2bba.js";import"./tslib-a4e99503.js";import"./xgplayer-700bd6a3.js";import"./delegate-ef66b241.js";import"./downloadjs-91c0ea73.js";import"./quill-ecb3881d.js";import"./sortablejs-2f5483e3.js";import"./b-tween-5055d79e.js";import"./b-validate-457088db.js";import"./resize-observer-polyfill-ad543aa3.js";import"./scroll-into-view-if-needed-59a60a09.js";import"./compute-scroll-into-view-2962e95c.js";import"./number-precision-d9b928a1.js";import"./dict-9c237ae6.js";const X={class:"main-container"},ee=z({__name:"role",setup(z){const{ADD:ee,UPDATE:ae,PERMISSIONS:te}=h,se=e(),oe=B(null),re=C(ve),ie=S(),{selectedRowKeys:ne,onSelectionChange:le,showCheckedAll:ce}=_(),{bordered:de,striped:me,handleSuccess:ue,tableLoading:pe,dataList:ye}=ie,he=R("roleId"),{role:fe}=I(),je=fe,{onSorterChange:ge,sortOrder:be}=x(ve);async function ve(){pe.value=!0;try{const{code:e,rows:a,msg:s,total:o}=await V({pageNum:re.page,pageSize:re.pageSize,orderByColumn:be.orderBy,isAsc:be.isAsc,...t(je)}),r={code:e,msg:s,data:a};pe.value=!1,ue(Q(r)),re.setTotalSize(o||10)}catch(e){}}function ke(){je.forEach((e=>{e.searchReset?e.searchReset():e.searchValue=void 0})),ve()}const we=e=>{const a=e.roleId||ne.value.toString();a?g.confirm({title:"提示",content:`确定要${e?"删除此":"删除所选择的"}数据吗？`,cancelText:"取消",okText:"删除",onOk:async()=>{try{const{msg:e}=await A(a);j.success(e),ve()}catch(e){}}}):j.error("请选择要删除的数据")};function Ce(){var e;se.title=ee,se.itemOption=je,null==(e=oe.value)||e.show()}const Se=async e=>{var a;1!==e.roleId?(!async function(e){try{const{depts:a}=await U(e);je.find((e=>{"deptIds"!==e.key||(e.optionItems=o(a,"id","label"))}))}catch(a){}}(e.roleId),se.title=ae,se.itemOption=je,null==(a=oe.value)||a.show(),xe({record:e})):j.error("超级管理员角色不允许修改")},_e=async()=>{var e;try{const a=se.itemOption.find((e=>"roleId"===e.key)),t=r(se.itemOption),{msg:s}=(null==a?void 0:a.value)?await O(t):await D(t);j.success(s),null==(e=oe.value)||e.close(),ve()}catch(a){}},Ie=async()=>{try{i(n,t(je),"角色管理")}catch(e){}},xe=W((async({record:e})=>{try{const{data:a}=await L(e.roleId);je.forEach((e=>{e.value=a[e.key],"menuCheckStrictly"!==e.key&&"deptCheckStrictly"!==e.key||(e.value=!1)})),async function(e){try{const{checkedKeys:a}=await f(e);je.find((e=>{"menuIds"===e.key&&(e.value=a)}))}catch(a){}}(e.roleId)}catch(a){}}),300);return E((()=>{!async function(){try{const{data:e}=await s(t(je));je.find((a=>{"menuIds"!==a.key||(a.optionItems=o(e,"id","label"))}))}catch(e){}}(),ve()})),(e,t)=>{const s=b,o=l,r=c,i=d,n=v,h=k,f=w,g=m,C=u,S=p,_=y,I=T("hasPerm");return q(),M(G,null,[N("div",X,[P(S,{ref:"tableBody"},{header:F((()=>[P(i,{"show-filter":!0,title:"",onSearch:ve,onResetSearch:ke},{"more-button-content":F((()=>[Y((q(),H(s,{type:"primary",loading:J(a),onClick:Ie},{default:F((()=>[Z(" 导出角色 ")])),_:1},8,["loading"])),[[I,["system:role:export"]]]),Y((q(),H(s,{type:"primary",onClick:Ce},{default:F((()=>[Z(" 添加 ")])),_:1})),[[I,["system:role:add"]]]),Y((q(),H(s,{status:"danger",onClick:we},{default:F((()=>[Z("删除")])),_:1})),[[I,["system:role:remove"]]])])),"search-content":F((()=>[P(o,{modelValue:J(je),"onUpdate:modelValue":t[0]||(t[0]=e=>$(je)?je.value=e:null)},null,8,["modelValue"])])),"table-config":F((()=>[P(r,{tableColumns:J(je),"onUpdate:border":t[1]||(t[1]=e=>J(ie).bordered.value=e),"onUpdate:striped":t[2]||(t[2]=e=>J(ie).striped.value=e),onDoRefresh:ve},null,8,["tableColumns"])])),_:1})])),default:F((()=>[P(g,{bordered:J(de),striped:J(me),tableLoading:J(pe),dataList:J(ye),tableColumns:J(je),rowKey:J(he),onSorterChange:J(ge),onSelectionChange:J(le),selectedRowKeys:J(ne),showCheckedAll:J(ce)},{optional:F((({record:e})=>[P(n,{type:"primary"},{default:F((()=>[Y((q(),H(s,{onClick:a=>Se(e)},{default:F((()=>[Z(" 编辑 ")])),_:2},1032,["onClick"])),[[I,["system:role:edit"]]]),Y((q(),H(s,{onClick:a=>we(e)},{default:F((()=>[Z(" 删除 ")])),_:2},1032,["onClick"])),[[I,["system:role:remove"]]])])),_:2},1024)])),status:F((({record:e})=>[P(h,{type:"round",modelValue:e.status,"onUpdate:modelValue":a=>e.status=a,"checked-value":"0","unchecked-value":"1",beforeChange:a=>(async(e,a)=>{try{const t=await K({...a,status:e});return j.success(t.msg),!0}catch(t){return!1}})(a,e)},{checked:F((()=>[Z(" 启用 ")])),unchecked:F((()=>[Z(" 停用 ")])),_:2},1032,["modelValue","onUpdate:modelValue","beforeChange"])])),admin:F((({record:e})=>[e.admin?(q(),H(f,{key:1,color:"blue"},{default:F((()=>[Z("是")])),_:1})):(q(),H(f,{key:0},{default:F((()=>[Z("否")])),_:1}))])),_:1},8,["bordered","striped","tableLoading","dataList","tableColumns","rowKey","onSorterChange","onSelectionChange","selectedRowKeys","showCheckedAll"])])),footer:F((()=>[P(C,{pagination:J(re)},null,8,["pagination"])])),_:1},512)]),P(_,{ref_key:"modalDialog",ref:oe,config:J(se),onConfirm:_e},null,8,["config"])],64)}}});export{ee as default};