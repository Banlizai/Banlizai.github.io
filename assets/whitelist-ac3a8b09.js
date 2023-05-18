import{p as b}from"./http-79937b7b.js";import{a as ot,b as nt,g as at,c as it,d as st,u as lt,M as rt}from"./index-09e9d0bf.js";import{u as ct,a as mt,b as pt,c as dt,d as ut}from"./table-d5bdf2e1.js";import{u as ft,w,d as _t,e as L,b as gt}from"./modal-3fed9fa7.js";import{M as d,h as ht}from"./@arco-design-f5decd74.js";import{e as bt,r as wt,a as C,o as Ct,j as s,k as yt,p as Dt,n as k,v as n,m as a,y,a1 as i,F as vt}from"./@vue-0366cb61.js";import"./path-browserify-188d1ff8.js";import"./vue-router-5bfb708a.js";import"./axios-0bf28a1e.js";import"./@logicflow-5cdfeb8e.js";import"./ids-46106237.js";import"./preact-b8060ab3.js";import"./qs-b99d1803.js";import"./side-channel-5f245a46.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-9ceb8f5b.js";import"./object-inspect-8530d459.js";import"./pinia-16e4d8ec.js";import"./@vueuse-945dd224.js";import"./mockjs-417a16d8.js";import"./tiny-emitter-6d407e5e.js";import"./xgplayer-cee6bcaa.js";import"./quill-9354d83a.js";import"./sortablejs-be94e56d.js";import"./lodash-es-734afc83.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./compute-scroll-into-view-183f845a.js";import"./b-tween-aacd5abe.js";import"./dayjs-bf5be20d.js";import"./b-validate-48f29bf6.js";import"./number-precision-7e656275.js";import"./scroll-into-view-if-needed-6b992d05.js";const St={class:"main-container"},Tt={class:"flex justify-between"},ce=bt({__name:"whitelist",setup(Lt){const{ADD:B,UPDATE:D,UPLOAD:M,INFO:x}=rt,o=ft(),r=wt(null),p=ct(_),{selectedRowKeys:v,onSelectionChange:A,showCheckedAll:O}=mt(),u=pt(),{bordered:R,striped:K,handleSuccess:F,tableLoading:f,dataList:I}=u,U=ut("id"),S=C(dt(_t));async function _(){f.value=!0;const t=await b({url:at,data:()=>({page:p.page,pageSize:p.pageSize})});f.value=!1,F(C(t)),p.setTotalSize(t.totalSize||10)}function $(){console.log(it(w))}function N(){w.forEach(t=>{t.reset?t.reset():t.value.value=""})}function T(t){if(!t&&v.value.length===0){d.error("请选择要删除的数据");return}ht.confirm({title:"提示",content:`确定要${t?"删除此":"删除所选择的"}数据吗？`,cancelText:"取消",okText:"删除",onOk:()=>{d.success("删除成功")}})}function P(){var e;const t=o.useModalParams(o.itemOption);(e=r.value)==null||e.close(),d.success(`模拟${o.title}菜单成功，参数为: ${JSON.stringify(t)}`)}function z({record:t,key:e}){switch(e){case"nickName":return W(t,e);case"gender":return j(t,e)}}function E(){var t;o.title=B,o.itemOption=[...L],(t=r.value)==null||t.show()}function V(){var t;o.title=D,o.itemOption=[...L],(t=r.value)==null||t.show()}const g=C({list:[],title:""});async function W(t,e){var l;o.title=x,o.itemOption=[],(l=r.value)==null||l.show();const c={title:t[e]};o.params={record:t,key:e};try{const{data:h}=await b({url:st,data:c});g.list=h.list,g.title=t[e],o.loading=!1}catch{o.loading=!1}}async function j(t,e){const c={title:t[e]};try{const{msg:l}=await b({url:lt,data:c});d.success(l||`${D}成功`)}catch{o.loading=!1,t[e]=!1}}function H(){var t;o.title=M,o.itemOption=[...gt],console.log(o),(t=r.value)==null||t.show()}function J(){}return Ct(_),(t,e)=>{const c=s("AddButton"),l=s("a-button"),h=s("DeleteButton"),q=s("FormSearch"),G=s("TableHeader"),Q=s("icon-edit"),X=s("icon-delete"),Y=s("TableFooter"),Z=s("TableBody"),tt=s("Direction"),et=s("ModalDialog");return yt(),Dt(vt,null,[k("div",St,[n(Z,{ref:"tableBody"},{header:a(()=>[n(G,{"show-filter":!0,title:"",onSearch:$,onResetSearch:N},{"more-button-content":a(()=>[n(c,{onAdd:E},{name:a(()=>[y("添加设备")]),_:1}),n(l,{type:"primary",onClick:H},{default:a(()=>[y(" 导入 ")]),_:1}),n(l,{type:"primary",onClick:J},{default:a(()=>[y(" 导出 ")]),_:1}),n(h,{onDelete:T})]),"search-content":a(()=>[n(q,{formItems:i(w)},null,8,["formItems"])]),"table-config":a(()=>[n(ot,{tableColumns:S,"onUpdate:border":e[0]||(e[0]=m=>i(u).bordered.value=m),"onUpdate:striped":e[1]||(e[1]=m=>i(u).striped.value=m),onDoRefresh:_},null,8,["tableColumns"])]),_:1})]),default:a(()=>[n(nt,{bordered:i(R),striped:i(K),selectedRowKeys:i(v),showCheckedAll:i(O),tableLoading:i(f),dataList:i(I),tableColumns:S,rowKey:i(U),onSelectionChange:i(A),onRowKeyChange:z},{optional:a(({record:m})=>[k("div",Tt,[n(l,{type:"text",onClick:V},{icon:a(()=>[n(Q)]),_:1}),n(l,{type:"text",onClick:kt=>T(m)},{icon:a(()=>[n(X)]),_:2},1032,["onClick"])])]),_:1},8,["bordered","striped","selectedRowKeys","showCheckedAll","tableLoading","dataList","tableColumns","rowKey","onSelectionChange"])]),footer:a(()=>[n(Y,{pagination:i(p)},null,8,["pagination"])]),_:1},512)]),n(et,{ref_key:"modalDialog",ref:r,config:i(o),onConfirm:P},{content:a(()=>[n(tt,{data:g},null,8,["data"])]),_:1},8,["config"])],64)}}});export{ce as default};