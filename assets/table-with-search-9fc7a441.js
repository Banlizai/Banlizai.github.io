import{p as $}from"./http-79937b7b.js";import{F as A,g as E,_ as M}from"./index-09e9d0bf.js";import{u as W,a as D,b as P,c as j,d as q}from"./table-d5bdf2e1.js";import{o as G,M as J}from"./@arco-design-f5decd74.js";import{e as O,r as y,o as X,X as Q,j as n,k as o,p as c,v as p,m as t,F as i,R as f,l as r,s as m,y as d,z as _,G as Y,q as Z}from"./@vue-0366cb61.js";import"./path-browserify-188d1ff8.js";import"./vue-router-5bfb708a.js";import"./axios-0bf28a1e.js";import"./@logicflow-5cdfeb8e.js";import"./ids-46106237.js";import"./preact-b8060ab3.js";import"./qs-b99d1803.js";import"./side-channel-5f245a46.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-9ceb8f5b.js";import"./object-inspect-8530d459.js";import"./pinia-16e4d8ec.js";import"./@vueuse-945dd224.js";import"./mockjs-417a16d8.js";import"./tiny-emitter-6d407e5e.js";import"./xgplayer-cee6bcaa.js";import"./quill-9354d83a.js";import"./sortablejs-be94e56d.js";import"./lodash-es-734afc83.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./compute-scroll-into-view-183f845a.js";import"./b-tween-aacd5abe.js";import"./dayjs-bf5be20d.js";import"./b-validate-48f29bf6.js";import"./number-precision-7e656275.js";import"./scroll-into-view-if-needed-6b992d05.js";const w=[{key:"name",label:"用户姓名",type:"input",placeholder:"请输入用户姓名",value:y(""),reset:function(){this.value.value=""},render:l=>Q(G,{placeholder:"这是render渲染的",modelValue:l.value.value,"onUpdate:modelValue":s=>{l.value.value=s}})},{key:"date",label:"创建日期",type:"date",value:y()},{key:"sex",label:"用户姓别",value:y(),type:"select",placeholder:"请选择用户姓别",optionItems:[{label:"男",value:1},{label:"女",value:2}],reset:function(){this.value.value=void 0}},{key:"time",label:"创建时间",type:"time",value:y("")}],ee=O({name:"TableWithSearch",components:{FormRender:A},setup(){const l=y(),s=W(h),{selectedRowKeys:C,onSelectionChange:I,showCheckedAll:x}=D(),v=P(),b=q("id"),g=j([v.indexColumn,{title:"名称",key:"nickName",dataIndex:"nickName"},{title:"性别",key:"gender",dataIndex:"gender",width:100},{title:"头像",key:"avatar",dataIndex:"avatar"},{title:"地址",key:"address",dataIndex:"address"},{title:"登录时间",key:"lastLoginTime",dataIndex:"lastLoginTime"},{title:"登录IP",key:"lastLoginIp",dataIndex:"lastLoginIp"},{title:"状态",key:"status",dataIndex:"status"}]);function h(){$({url:E,data:()=>({page:s.page,pageSize:s.pageSize})}).then(u=>{v.handleSuccess(u),s.setTotalSize(u.totalSize||10)}).catch(console.log)}function S(){J.success("模拟查询成功，参数为："+JSON.stringify(w.reduce((u,k)=>(u[k.key]=k.value.value,u),{})))}function V(){w.forEach(u=>{u.reset?u.reset():u.value.value=""})}return X(h),{...v,rowKey:b,pagination:s,searchForm:l,tableColumns:g,conditionItems:w,onSearch:S,onResetSearch:V,selectedRowKeys:C,showCheckedAll:x,onSelectionChange:I}}});const ae={class:"main-container"};function oe(l,s,C,I,x,v){const b=n("FormRender"),g=n("a-input"),h=n("a-option"),S=n("a-select"),V=n("a-date-picker"),u=n("a-time-picker"),k=n("a-checkbox"),T=n("a-checkbox-group"),U=n("a-form-item"),F=n("a-form"),K=n("TableHeader"),L=n("a-avatar"),R=n("a-tag"),z=n("a-table-column"),B=n("a-table"),N=n("TableFooter"),H=n("TableBody");return o(),c("div",ae,[p(H,{ref:"tableBody"},{header:t(()=>[p(K,{"show-filter":!0,title:"表格搜索",onSearch:l.onSearch,onResetSearch:l.onResetSearch},{"search-content":t(()=>[p(F,{layout:"inline",model:{}},{default:t(()=>[(o(!0),c(i,null,f(l.conditionItems,e=>(o(),r(U,{key:e.key,label:e.label},{default:t(()=>[e.render?(o(),r(b,{key:0,render:e.render,formItem:e},null,8,["render","formItem"])):(o(),c(i,{key:1},[e.type==="input"?(o(),r(g,{key:0,modelValue:e.value.value,"onUpdate:modelValue":a=>e.value.value=a,placeholder:e.placeholder},null,8,["modelValue","onUpdate:modelValue","placeholder"])):m("",!0),e.type==="select"?(o(),r(S,{key:1,modelValue:e.value.value,"onUpdate:modelValue":a=>e.value.value=a,style:{width:"150px"},placeholder:e.placeholder},{default:t(()=>[(o(!0),c(i,null,f(e.optionItems,a=>(o(),r(h,{key:a.value,value:a.value},{default:t(()=>[d(_(a.label),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder"])):m("",!0),e.type==="date"?(o(),r(V,{key:2,modelValue:e.value.value,"onUpdate:modelValue":a=>e.value.value=a},null,8,["modelValue","onUpdate:modelValue"])):m("",!0),e.type==="time"?(o(),r(u,{key:3,modelValue:e.value.value,"onUpdate:modelValue":a=>e.value.value=a,"value-format":"HH:mm:ss"},null,8,["modelValue","onUpdate:modelValue"])):m("",!0),e.type==="check-group"?(o(),r(T,{key:4,modelValue:e.value.value,"onUpdate:modelValue":a=>e.value.value=a},{default:t(()=>[(o(!0),c(i,null,f(e.optionItems,a=>(o(),r(k,{value:a.value,key:a.value},{default:t(()=>[d(_(e.label),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])):m("",!0)],64))]),_:2},1032,["label"]))),128))]),_:1})]),_:1},8,["onSearch","onResetSearch"])]),default:t(()=>[p(B,{bordered:!1,"row-selection":{selectedRowKeys:l.selectedRowKeys,showCheckedAll:l.showCheckedAll},loading:l.tableLoading,data:l.dataList,columns:l.tableColumns,pagination:!1,rowKey:l.rowKey,onSelectionChange:l.onSelectionChange},{columns:t(()=>[(o(!0),c(i,null,f(l.tableColumns,e=>(o(),r(z,{key:e.key,align:e.align,title:e.title,width:e.width,"data-index":e.key,fixed:e.fixed},Y({_:2},[e.key==="index"?{name:"cell",fn:t(({rowIndex:a})=>[d(_(a+1),1)]),key:"0"}:e.key==="gender"?{name:"cell",fn:t(({record:a})=>[d(_(a.gender===1?"男":"女"),1)]),key:"1"}:e.key==="avatar"?{name:"cell",fn:t(({record:a})=>[p(L,{autocapitalize:30,style:Z({backgroundColor:"var(--color-primary-light-1)"})},{default:t(()=>[d(_(a.nickName.substring(0,1)),1)]),_:2},1032,["style"])]),key:"2"}:e.key==="status"?{name:"cell",fn:t(({record:a})=>[a.status===1?(o(),r(R,{key:0,color:"blue"},{default:t(()=>[d("正常")]),_:1})):(o(),r(R,{key:1,color:"red"},{default:t(()=>[d("禁用")]),_:1}))]),key:"3"}:void 0]),1032,["align","title","width","data-index","fixed"]))),128))]),_:1},8,["row-selection","loading","data","columns","rowKey","onSelectionChange"])]),footer:t(()=>[p(N,{pagination:l.pagination},null,8,["pagination"])]),_:1},512)])}const He=M(ee,[["render",oe],["__scopeId","data-v-194eb719"]]);export{He as default};