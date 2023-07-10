import{u as e,b as o,w as t,f as s,h as a,i as r,j as i,k as n,l,m as c,M as d}from"./index-0ca45986.js";import{M as m,n as p,B as u,Y as j}from"./@arco-design-8dabd30f.js";import{a as h,b as f,u as y,d as g,c as v,e as b}from"./columns-1685844f.js";import{a as w,b as C,c as k,d as S,e as _}from"./notice-e0f49f67.js";import{d as x,u as A,h as D,a_ as R,o as T,c as L,f as O,s as z,w as B,N as K,m as E,C as I,a1 as U,Y as V,D as q,F,r as M}from"./@vue-2b41ce19.js";import{a as N}from"./@vueuse-ca9a384d.js";import"./pinia-b3c1485e.js";import"./axios-6371c10e.js";import"./@logicflow-85f8458e.js";import"./ids-ef071351.js";import"./lodash-es-1e3e3aa2.js";import"./preact-5fc9b0bf.js";import"./qs-f981fe00.js";import"./side-channel-01aeb4d9.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./call-bind-fae29077.js";import"./object-inspect-0eda087e.js";import"./dayjs-094145ee.js";import"./path-browserify-8c7c24dd.js";import"./vue-router-70e2faff.js";import"./tiny-emitter-35dc7566.js";import"./echarts-24943dbb.js";import"./zrender-2d3b2bba.js";import"./tslib-a4e99503.js";import"./xgplayer-700bd6a3.js";import"./delegate-ef66b241.js";import"./downloadjs-91c0ea73.js";import"./quill-ecb3881d.js";import"./sortablejs-2f5483e3.js";import"./b-tween-5055d79e.js";import"./b-validate-457088db.js";import"./resize-observer-polyfill-ad543aa3.js";import"./scroll-into-view-if-needed-59a60a09.js";import"./compute-scroll-into-view-2962e95c.js";import"./number-precision-d9b928a1.js";import"./dict-9c237ae6.js";const P={class:"main-container"},Y=x({__name:"notice",setup(x){const{ADD:Y,UPDATE:H}=d,J=e(),$=A(null),G=h(me),Q=f(),{selectedRowKeys:W,onSelectionChange:X,showCheckedAll:Z}=y(),{bordered:ee,striped:oe,handleSuccess:te,tableLoading:se,dataList:ae}=Q,re=b("noticeId"),{onSorterChange:ie,sortOrder:ne}=g(me),{notice:le}=v(),ce=le,de=(e,o)=>{};async function me(){se.value=!0;try{const{code:e,rows:t,msg:s,total:a}=await w({pageNum:G.page,pageSize:G.pageSize,orderByColumn:ne.orderBy,isAsc:ne.isAsc,...o(ce)}),r={code:e,msg:s,data:t};se.value=!1,te(M(r)),G.setTotalSize(a||10)}catch(e){}}function pe(){me()}function ue(){ce.forEach((e=>{e.searchReset?e.searchReset():e.searchValue.value=void 0})),pe()}const je=e=>{const o=e.noticeId||W.value.toString();o?p.confirm({title:"提示",content:`确定要${e?"删除此":"删除所选择的"}数据吗？`,cancelText:"取消",okText:"删除",onOk:async()=>{try{const{msg:e}=await C(o);m.success(e),me()}catch(e){}}}):m.error("请选择要删除的数据")};function he(){var e;J.title=Y,J.itemOption=ce,null==(e=$.value)||e.show()}const fe=async()=>{var e;try{const o=J.itemOption.find((e=>"noticeId"===e.key)),s=t(J.itemOption),{msg:a}=(null==o?void 0:o.value.value)?await k(s):await S(s);m.success(a),null==(e=$.value)||e.close(),me()}catch(o){}},ye=N((async({record:e})=>{try{const{data:o}=await _(e.noticeId);ce.forEach((e=>{e.value.value=o[e.key]}))}catch(o){}}),300);return D(me),(e,o)=>{const t=u,d=s,m=a,p=r,h=j,f=i,y=n,g=l,v=c,b=R("hasPerm");return T(),L(F,null,[O("div",P,[z(g,{ref:"tableBody"},{header:B((()=>[z(p,{"show-filter":!0,title:"",onSearch:pe,onResetSearch:ue},{"more-button-content":B((()=>[K((T(),E(t,{type:"primary",onClick:he},{default:B((()=>[I("添加")])),_:1})),[[b,["system:notice:add"]]]),K((T(),E(t,{status:"danger",onClick:je},{default:B((()=>[I("删除")])),_:1})),[[b,["system:notice:remove"]]])])),"search-content":B((()=>[z(d,{modelValue:U(ce),"onUpdate:modelValue":o[0]||(o[0]=e=>V(ce)?ce.value=e:null)},null,8,["modelValue"])])),"table-config":B((()=>[z(m,{tableColumns:U(ce),"onUpdate:border":o[1]||(o[1]=e=>U(Q).bordered.value=e),"onUpdate:striped":o[2]||(o[2]=e=>U(Q).striped.value=e),onDoRefresh:me},null,8,["tableColumns"])])),_:1})])),default:B((()=>[z(f,{bordered:U(ee),striped:U(oe),tableLoading:U(se),dataList:U(ae),tableColumns:U(ce),rowKey:U(re),onSelectionChange:U(X),selectedRowKeys:U(W),showCheckedAll:U(Z),onSorterChange:U(ie),onFilterChange:de},{optional:B((({record:e})=>[K((T(),E(t,{type:"primary",onClick:o=>(async e=>{var o;J.title=H,J.itemOption=ce,null==(o=$.value)||o.show(),await ye({record:e})})(e)},{default:B((()=>[I("编辑")])),_:2},1032,["onClick"])),[[b,["system:notice:edit"]]]),K((T(),E(t,{status:"danger",onClick:o=>je(e)},{default:B((()=>[I("删除")])),_:2},1032,["onClick"])),[[b,["system:notice:remove"]]])])),status:B((({record:e})=>[z(h,{color:"0"===e.status?"green":"red"},{default:B((()=>[I(q("0"===e.status?"正常":"停用"),1)])),_:2},1032,["color"])])),noticeType:B((({record:e})=>[z(h,{color:"0"===e.noticeType?"green":"red"},{default:B((()=>[I(q("0"===e.noticeType?"通知":"公告"),1)])),_:2},1032,["color"])])),_:1},8,["bordered","striped","tableLoading","dataList","tableColumns","rowKey","onSelectionChange","selectedRowKeys","showCheckedAll","onSorterChange"])])),footer:B((()=>[z(y,{pagination:U(G)},null,8,["pagination"])])),_:1},512)]),z(v,{ref_key:"modalDialog",ref:$,config:U(J),onConfirm:fe},null,8,["config"])],64)}}});export{Y as default};
