import{u as e,b as o,w as t,f as s,h as a,i as r,j as i,k as n,l,m as c,M as d}from"./index-0ca45986.js";import{M as m,n as p,B as u}from"./@arco-design-8dabd30f.js";import{d as j,a as h,b as f,u as g,c as b,e as y}from"./columns-1685844f.js";import{a as w,b as v,c as C,d as k,e as S}from"./notice-e0f49f67.js";import{d as _,u as x,h as A,o as R,c as D,f as L,s as O,w as z,C as B,a1 as K,Y as E,F as I,r as T}from"./@vue-2b41ce19.js";import{a as U}from"./@vueuse-ca9a384d.js";import"./pinia-b3c1485e.js";import"./axios-6371c10e.js";import"./@logicflow-85f8458e.js";import"./ids-ef071351.js";import"./lodash-es-1e3e3aa2.js";import"./preact-5fc9b0bf.js";import"./qs-f981fe00.js";import"./side-channel-01aeb4d9.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./call-bind-fae29077.js";import"./object-inspect-0eda087e.js";import"./dayjs-094145ee.js";import"./path-browserify-8c7c24dd.js";import"./vue-router-70e2faff.js";import"./tiny-emitter-35dc7566.js";import"./echarts-24943dbb.js";import"./zrender-2d3b2bba.js";import"./tslib-a4e99503.js";import"./xgplayer-700bd6a3.js";import"./delegate-ef66b241.js";import"./downloadjs-91c0ea73.js";import"./quill-ecb3881d.js";import"./sortablejs-2f5483e3.js";import"./b-tween-5055d79e.js";import"./b-validate-457088db.js";import"./resize-observer-polyfill-ad543aa3.js";import"./scroll-into-view-if-needed-59a60a09.js";import"./compute-scroll-into-view-2962e95c.js";import"./number-precision-d9b928a1.js";import"./dict-9c237ae6.js";const V={class:"main-container"},q=_({__name:"job",setup(_){const{ADD:q,UPDATE:F}=d,{onSorterChange:M,sortOrder:H}=j(re),J=e(),N=x(null),P=h(re),Y=f(),{selectedRowKeys:$,onSelectionChange:G,showCheckedAll:Q}=g(),{bordered:W,striped:X,handleSuccess:Z,tableLoading:ee,dataList:oe}=Y,te=y("noticeId"),{notice:se}=b(),ae=se;async function re(){ee.value=!0;try{const{code:e,rows:t,msg:s,total:a}=await w({pageNum:P.page,pageSize:P.pageSize,orderByColumn:H.orderBy,isAsc:H.isAsc,...o(ae)}),r={code:e,msg:s,data:t};ee.value=!1,Z(T(r)),P.setTotalSize(a||10)}catch(e){}}function ie(){ae.forEach((e=>{e.searchReset?e.searchReset():e.searchValue=void 0})),re()}const ne=e=>{const o=e.noticeId||$.value.toString();o?p.confirm({title:"提示",content:`确定要${e?"删除此":"删除所选择的"}数据吗？`,cancelText:"取消",okText:"删除",onOk:async()=>{try{const{msg:e}=await v(o);m.success(e),re()}catch(e){}}}):m.error("请选择要删除的数据")};function le(){var e;J.title=q,J.itemOption=ae,null==(e=N.value)||e.show()}const ce=async()=>{var e;try{const o=J.itemOption.find((e=>"noticeId"===e.key)),s=t(J.itemOption),{msg:a}=(null==o?void 0:o.value)?await C(s):await k(s);m.success(a),null==(e=N.value)||e.close(),re()}catch(o){}},de=U((async({record:e})=>{try{const{data:o}=await S(e.noticeId);ae.forEach((e=>{e.value=o[e.key]}))}catch(o){}}),300);return A(re),(e,o)=>{const t=u,d=s,m=a,p=r,j=i,h=n,f=l,g=c;return R(),D(I,null,[L("div",V,[O(f,{ref:"tableBody"},{header:z((()=>[O(p,{"show-filter":!0,title:"",onSearch:re,onResetSearch:ie},{"more-button-content":z((()=>[O(t,{type:"primary",onClick:le},{default:z((()=>[B(" 添加 ")])),_:1}),O(t,{status:"danger",onClick:ne},{default:z((()=>[B("删除")])),_:1})])),"search-content":z((()=>[O(d,{modelValue:K(ae),"onUpdate:modelValue":o[0]||(o[0]=e=>E(ae)?ae.value=e:null)},null,8,["modelValue"])])),"table-config":z((()=>[O(m,{tableColumns:K(ae),"onUpdate:border":o[1]||(o[1]=e=>K(Y).bordered.value=e),"onUpdate:striped":o[2]||(o[2]=e=>K(Y).striped.value=e),onDoRefresh:re},null,8,["tableColumns"])])),_:1})])),default:z((()=>[O(j,{bordered:K(W),striped:K(X),tableLoading:K(ee),dataList:K(oe),tableColumns:K(ae),rowKey:K(te),onSelectionChange:K(G),selectedRowKeys:K($),showCheckedAll:K(Q),onSorterChange:K(M)},{optional:z((({record:e})=>[O(t,{type:"primary",onClick:o=>(async e=>{var o;J.title=F,J.itemOption=ae,null==(o=N.value)||o.show(),await de({record:e})})(e)},{default:z((()=>[B("编辑")])),_:2},1032,["onClick"]),O(t,{status:"danger",onClick:o=>ne(e)},{default:z((()=>[B("删除")])),_:2},1032,["onClick"])])),_:1},8,["bordered","striped","tableLoading","dataList","tableColumns","rowKey","onSelectionChange","selectedRowKeys","showCheckedAll","onSorterChange"])])),footer:z((()=>[O(h,{pagination:K(P)},null,8,["pagination"])])),_:1},512)]),O(g,{ref_key:"modalDialog",ref:N,config:K(J),onConfirm:ce},null,8,["config"])],64)}}});export{q as default};