import{_ as e,u as a,o as t,a as s,q as o,b as l,t as r,r as n,s as i,e as d,v as c,w as u,x as m,f as p,y,h as f,i as h,z as v,j,k as g,l as k,m as b,M as w}from"./index-0ca45986.js";import{M as C,n as _,B as I,U as x,ao as V,v as S,Y as U,A as O}from"./@arco-design-8dabd30f.js";import{a as A,b as T,u as R,c as D,d as E,e as L}from"./columns-1685844f.js";import{a as z,b as K,c as B,d as N,e as q,f as P,g as F,h as M,i as Y}from"./user-38648499.js";import{a as H}from"./post-ad3b8162.js";import{a as J}from"./role-1d4bb45a.js";import{d as $,u as G,ar as Q,h as W,l as X,a_ as Z,o as ee,c as ae,f as te,s as se,w as oe,N as le,a1 as re,Y as ne,C as ie,m as de,F as ce,r as ue}from"./@vue-2b41ce19.js";import{a as me}from"./@vueuse-ca9a384d.js";import"./pinia-b3c1485e.js";import"./axios-6371c10e.js";import"./@logicflow-85f8458e.js";import"./ids-ef071351.js";import"./lodash-es-1e3e3aa2.js";import"./preact-5fc9b0bf.js";import"./qs-f981fe00.js";import"./side-channel-01aeb4d9.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./call-bind-fae29077.js";import"./object-inspect-0eda087e.js";import"./dayjs-094145ee.js";import"./path-browserify-8c7c24dd.js";import"./vue-router-70e2faff.js";import"./tiny-emitter-35dc7566.js";import"./echarts-24943dbb.js";import"./zrender-2d3b2bba.js";import"./tslib-a4e99503.js";import"./xgplayer-700bd6a3.js";import"./delegate-ef66b241.js";import"./downloadjs-91c0ea73.js";import"./quill-ecb3881d.js";import"./sortablejs-2f5483e3.js";import"./b-tween-5055d79e.js";import"./b-validate-457088db.js";import"./resize-observer-polyfill-ad543aa3.js";import"./scroll-into-view-if-needed-59a60a09.js";import"./compute-scroll-into-view-2962e95c.js";import"./number-precision-d9b928a1.js";import"./dict-9c237ae6.js";const pe={class:"main-container"},ye={class:"overflow-hidden whitespace-nowrap"},fe=$({__name:"index",setup($){const fe=G([]),he=G(),ve=Q((()=>e((()=>import("./index-0ca45986.js").then((e=>e.a7))),["assets/index-0ca45986.js","assets/@vue-2b41ce19.js","assets/@arco-design-8dabd30f.js","assets/b-tween-5055d79e.js","assets/b-validate-457088db.js","assets/resize-observer-polyfill-ad543aa3.js","assets/scroll-into-view-if-needed-59a60a09.js","assets/compute-scroll-into-view-2962e95c.js","assets/number-precision-d9b928a1.js","assets/dayjs-094145ee.js","assets/@logicflow-85f8458e.js","assets/ids-ef071351.js","assets/lodash-es-1e3e3aa2.js","assets/preact-5fc9b0bf.js","assets/@logicflow-4fbf093d.css","assets/@arco-design-766c8d5e.css","assets/pinia-b3c1485e.js","assets/axios-6371c10e.js","assets/qs-f981fe00.js","assets/side-channel-01aeb4d9.js","assets/get-intrinsic-bac01933.js","assets/has-symbols-456daba2.js","assets/has-proto-4a87f140.js","assets/function-bind-72d06d3b.js","assets/has-885c3436.js","assets/call-bind-fae29077.js","assets/object-inspect-0eda087e.js","assets/path-browserify-8c7c24dd.js","assets/vue-router-70e2faff.js","assets/@vueuse-ca9a384d.js","assets/tiny-emitter-35dc7566.js","assets/echarts-24943dbb.js","assets/zrender-2d3b2bba.js","assets/tslib-a4e99503.js","assets/xgplayer-700bd6a3.js","assets/delegate-ef66b241.js","assets/downloadjs-91c0ea73.js","assets/quill-ecb3881d.js","assets/quill-8e59e50e.css","assets/sortablejs-2f5483e3.js","assets/index-29e4a384.css"]))),{ADD:je,UPDATE:ge}=w,ke=a(),be=G(null),we=A(Ke),Ce=T(),{selectedRowKeys:_e,onSelectionChange:Ie,showCheckedAll:xe}=R(),{bordered:Ve,striped:Se,handleSuccess:Ue,tableLoading:Oe,dataList:Ae}=Ce,Te=L("userId"),{assets:Re}=D(),De=Re,{onSorterChange:Ee,sortOrder:Le}=E(Ke),ze=G();async function Ke(){Oe.value=!0;try{const{code:e,rows:a,msg:t,total:s}=await K({pageNum:we.page,pageSize:we.pageSize,orderByColumn:Le.orderBy,isAsc:Le.isAsc,...l(De)}),o={code:e,msg:t,data:a};Oe.value=!1,Ue(ue(o)),we.setTotalSize(s||10)}catch(e){}}async function Be(e,a){De.forEach((a=>{"deptId"===a.key&&(a.searchValue=e[0])})),Ke()}function Ne(){De.forEach((e=>{e.searchReset?e.searchReset():e.searchValue=void 0})),Ke()}const qe=e=>{const a=e.userId||_e.value.toString();a?_.confirm({title:"提示",content:`确定要${e?"删除此":"删除所选择的"}数据吗？`,cancelText:"取消",okText:"删除",onOk:async()=>{try{const{msg:e}=await B(a);C.success(e),Ke()}catch(e){}}}):C.error("请选择要删除的数据")};function Pe(){var e;ke.title=je,ke.itemOption=De,null==(e=be.value)||e.show()}const Fe=async()=>{try{d(c,l(De),"用户管理")}catch(e){}},Me=async()=>{var e,a,t;try{const s=ke.itemOption.find((e=>"userId"===e.key)),o=null==(e=ke.itemOption.find((e=>"roleIds"===e.key)))?void 0:e.optionItems,l=(null==(a=ke.itemOption.find((e=>"deptId"===e.key)))?void 0:a.optionItems)||[],r=i(l,[]),n=u(ke.itemOption);n.roleIds&&(n.roles=null==o?void 0:o.filter((e=>null==n?void 0:n.roleIds.includes(e.roleId)))),n.deptId&&(n.dept=null==r?void 0:r.find((e=>e.deptId===n.deptId)));const{msg:d}=(null==s?void 0:s.value)?await F(n):await M(n);C.success(d),null==(t=be.value)||t.close(),Ke()}catch(s){}},Ye=me((async({record:e})=>{try{const{data:a,roleIds:t,postIds:s}=await Y(e.userId);De.forEach((e=>{e.value=a[e.key],"roleIds"===e.key&&(e.value=t),"postIds"===e.key&&(e.value=s)}))}catch(a){}}),300);function He(){fe.value=(null==fe?void 0:fe.value.length)?[]:he.value}return W((()=>{!async function(){try{const{data:e}=await J();De.find((a=>{"roleIds"!==a.key||(a.optionItems=r(e,"roleId","roleName"))}))}catch(e){}}(),async function(){try{const{data:e}=await q(l(De));De.find((a=>{"deptId"!==a.key||(a.optionItems=n(e,"id","label"))})),ze.value=n(e,"id","label"),he.value=i(e,[]).map((e=>e.id))}catch(e){}}(),async function(){try{const{data:e}=await H();De.find((a=>{"postIds"!==a.key||(a.optionItems=r(e,"postId","postName"))}))}catch(e){}}(),Ke()})),(e,a)=>{const l=m,r=I,n=p,i=y,d=f,c=h,u=X("icon-up"),w=X("icon-down"),A=x,T=v,R=V,D=S,E=U,L=O,K=j,B=g,q=k,F=b,M=Z("hasPerm");return ee(),ae(ce,null,[te("div",pe,[se(q,{ref:"tableBody"},{header:oe((()=>[se(c,{"show-filter":!0,title:"",onSearch:Ke,onResetSearch:Ne},{"more-button-content":oe((()=>[le((ee(),ae("div",null,[se(l,{modelValue:re(z),"onUpdate:modelValue":a[0]||(a[0]=e=>ne(z)?z.value=e:null),urlTemplate:re(t),onUpdate:Ke},{default:oe((()=>[ie(" 导入 ")])),_:1},8,["modelValue","urlTemplate"])])),[[M,["system:user:import"]]]),le((ee(),de(r,{type:"primary",loading:re(s),onClick:Fe},{default:oe((()=>[ie(" 导出用户 ")])),_:1},8,["loading"])),[[M,["system:user:export"]]]),le((ee(),de(r,{type:"primary",onClick:Pe},{default:oe((()=>[ie(" 添加 ")])),_:1})),[[M,["system:user:add"]]]),le((ee(),de(r,{status:"danger",onClick:qe},{default:oe((()=>[ie("删除")])),_:1})),[[M,["system:user:remove"]]])])),"search-content":oe((()=>[se(n,{modelValue:re(De),"onUpdate:modelValue":a[1]||(a[1]=e=>ne(De)?De.value=e:null)},null,8,["modelValue"])])),"table-status":oe((()=>[se(i,{modelValue:re(De),"onUpdate:modelValue":a[2]||(a[2]=e=>ne(De)?De.value=e:null)},null,8,["modelValue"])])),"table-config":oe((()=>[se(d,{tableColumns:re(De),"onUpdate:border":a[3]||(a[3]=e=>re(Ce).bordered.value=e),"onUpdate:striped":a[4]||(a[4]=e=>re(Ce).striped.value=e),onDoRefresh:Ke},null,8,["tableColumns"])])),_:1})])),default:oe((()=>[se(re(ve),null,{tree:oe((()=>[te("div",ye,[se(T,null,{default:oe((()=>[se(r,{type:"text",long:"",onClick:He},{default:oe((()=>[fe.value.length?(ee(),de(u,{key:0})):(ee(),de(w,{key:1}))])),_:1}),se(A,{blockNode:"",data:ze.value,"expanded-keys":fe.value,"onUpdate:expandedKeys":a[5]||(a[5]=e=>fe.value=e),onSelect:Be},null,8,["data","expanded-keys"])])),_:1})])])),table:oe((()=>[se(K,{bordered:re(Ve),striped:re(Se),tableLoading:re(Oe),dataList:re(Ae),tableColumns:re(De),rowKey:re(Te),onSorterChange:re(Ee),onSelectionChange:re(Ie),selectedRowKeys:re(_e),showCheckedAll:re(xe)},{optional:oe((({record:e})=>[se(R,{type:"primary"},{default:oe((()=>[le((ee(),de(r,{onClick:a=>(async e=>{var a;ke.title=ge,ke.itemOption=De,null==(a=be.value)||a.show(),await Ye({record:e})})(e)},{default:oe((()=>[ie(" 编辑 ")])),_:2},1032,["onClick"])),[[M,["system:user:edit"]]]),le((ee(),de(r,{onClick:a=>qe(e)},{default:oe((()=>[ie(" 删除 ")])),_:2},1032,["onClick"])),[[M,["system:user:remove"]]]),le((ee(),de(r,{onClick:a=>(async e=>{_.confirm({title:"提示",content:"确定要重置密码吗？",cancelText:"取消",okText:"重置",onOk:async()=>{try{const{msg:a}=await P(e);C.success(a),Ke()}catch(a){}}})})(e)},{default:oe((()=>[ie(" 重置密码 ")])),_:2},1032,["onClick"])),[[M,["system:user:resetPwd"]]])])),_:2},1024)])),status:oe((({record:e})=>[se(D,{type:"round",modelValue:e.status,"onUpdate:modelValue":a=>e.status=a,"checked-value":"0","unchecked-value":"1",beforeChange:a=>(async(e,a)=>{try{const t=await N({...a,status:e});return C.success(t.msg),!0}catch(t){return!1}})(a,e)},{checked:oe((()=>[ie(" 启用 ")])),unchecked:oe((()=>[ie(" 停用 ")])),_:2},1032,["modelValue","onUpdate:modelValue","beforeChange"])])),sex:oe((({record:e})=>["1"===e.sex?(ee(),de(E,{key:0,color:"blue"},{default:oe((()=>[ie(" 男 ")])),_:1})):(ee(),de(E,{key:1,color:"pink"},{default:oe((()=>[ie("女")])),_:1}))])),admin:oe((({record:e})=>[e.admin?(ee(),de(E,{key:0,color:"green"},{default:oe((()=>[ie(" 是 ")])),_:1})):(ee(),de(E,{key:1,color:"red"},{default:oe((()=>[ie("否")])),_:1}))])),avatar:oe((({record:e})=>[se(L,{"image-url":re(o)(e.avatar)},null,8,["image-url"])])),_:1},8,["bordered","striped","tableLoading","dataList","tableColumns","rowKey","onSorterChange","onSelectionChange","selectedRowKeys","showCheckedAll"])])),_:1})])),footer:oe((()=>[se(B,{pagination:re(we)},null,8,["pagination"])])),_:1},512)]),se(F,{ref_key:"modalDialog",ref:be,config:re(ke),onConfirm:Me},null,8,["config"])],64)}}});export{fe as default};