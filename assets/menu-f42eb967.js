import{p as E}from"./http-79937b7b.js";import{o as $,_ as q}from"./index-09e9d0bf.js";import{b as L,c as R,d as z}from"./table-d5bdf2e1.js";import{M as y,h as H}from"./@arco-design-f5decd74.js";import{e as J,r as d,o as K,j as r,k as i,p as N,v as c,m as t,F as B,R as T,l as m,G as P,y as f,z as _,O as j,u as G,s as g}from"./@vue-0366cb61.js";import"./path-browserify-188d1ff8.js";import"./vue-router-5bfb708a.js";import"./axios-0bf28a1e.js";import"./@logicflow-5cdfeb8e.js";import"./ids-46106237.js";import"./preact-b8060ab3.js";import"./qs-b99d1803.js";import"./side-channel-5f245a46.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-9ceb8f5b.js";import"./object-inspect-8530d459.js";import"./pinia-16e4d8ec.js";import"./@vueuse-945dd224.js";import"./mockjs-417a16d8.js";import"./tiny-emitter-6d407e5e.js";import"./xgplayer-cee6bcaa.js";import"./quill-9354d83a.js";import"./sortablejs-be94e56d.js";import"./lodash-es-734afc83.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./compute-scroll-into-view-183f845a.js";import"./b-tween-aacd5abe.js";import"./dayjs-bf5be20d.js";import"./b-validate-48f29bf6.js";import"./number-precision-7e656275.js";import"./scroll-into-view-if-needed-6b992d05.js";const Q=J({name:"Menu",setup(){const n=d("add"),w=L(),C=d([]),v=d(null),V=d(),M=z("menuUrl"),x=R([{title:"菜单名称",key:"menuName",dataIndex:"menuName"},{title:"菜单地址",key:"menuUrl",dataIndex:"menuUrl"},{title:"路由name",key:"routeName",dataIndex:"routeName"},{title:"菜单图标",key:"icon",dataIndex:"icon"},{title:"是否缓存",key:"cacheable",dataIndex:"cacheable"},{title:"是否隐藏",key:"hidden",dataIndex:"hidden"},{title:"是否固定标题栏",key:"affix",dataIndex:"affix"},{title:"操作",key:"actions",dataIndex:"actions"}]),p=[{label:"上级菜单",key:"parentPath",value:d(""),placeholder:"请选择上级菜单",type:"tree-select",reset:function(){this.value.value=""}},{label:"菜单名称",key:"menuName",required:!0,type:"input",placeholder:"请输入菜单名称",value:d(""),validator:function(){return this.value.value?!0:(y.error(this.placeholder||""),!1)},reset:function(){this.value.value=""}},{label:"菜单地址",key:"menuUrl",required:!0,value:d(""),type:"input",disabled:d(!1),placeholder:"请输入菜单地址",validator:function(){return this.value.value?!0:(y.error(this.placeholder||""),!1)},reset:function(){this.value.value=""}},{label:"路由名称",key:"routeName",type:"input",placeholder:"请输入路由名称",value:d(""),reset:function(){this.value.value=""}},{label:"外链地址",key:"redirect",type:"input",placeholder:"请输入外链地址",value:d(""),reset:function(){this.value.value=""}},{label:"菜单图标",key:"icon",type:"icon",value:d(""),reset:function(){this.value.value=""}},{label:"是否缓存",key:"cacheable",type:"switch",value:d(!1),reset:function(){this.value.value=!1}},{label:"是否隐藏",key:"hidden",type:"switch",value:d(!1),reset:function(){this.value.value=!1}},{label:"是否固定",key:"affix",type:"switch",value:d(!1),reset:function(){this.value.value=!1}}];function h(u,s="/"){const l=[];return u.filter(o=>o.hidden!==!0&&o.fullPath!==s).forEach(o=>{const b={key:o.menuUrl,title:o.menuName};o.children&&o.children.length>0&&(b.children=h(o.children,o.fullPath)),l.push(b)}),l}function k(){E({url:$,data:{}}).then(w.handleSuccess).then(u=>{C.value=h(u)}).catch(console.log)}function I(){var u;n.value="add",p.forEach(s=>{s.reset&&s.reset(),s.key==="menuUrl"&&(s.disabled.value=!1)}),(u=v.value)==null||u.show()}function U(u){var s;n.value="edit",p.forEach(l=>{l.value.value=u[l.key]||null,l.key==="menuUrl"&&l.disabled&&(l.disabled.value=!0)}),(s=v.value)==null||s.show()}function D(){var u,s;n.value==="add"?p.every(l=>l.validator?l.validator():!0)&&((u=v.value)==null||u.close(),y.success("模拟创建菜单成功, 参数为:"+JSON.stringify(p.reduce((l,o)=>(l[o.key]=o.value.value||"",l),{})))):p.every(l=>l.validator?l.validator():!0)&&((s=v.value)==null||s.close(),y.success("模拟修改菜单成功, 参数为:"+JSON.stringify(p.reduce((l,o)=>(l[o.key]=o.value.value||"",l),{}))))}function F(u){H.confirm({title:"提示",content:"是否要删除此数据？",okText:"删除",cancelText:"取消",onOk:()=>{y.success("模拟删除成功，参数为："+JSON.stringify(u))}})}return K(k),{rowKey:M,actionModel:n,modalDialog:v,dataForm:V,...w,treeData:C,itemFormOptions:p,tableColumns:x,onAddItem:I,onDeleteItem:F,onUpdateItem:U,onConfirm:D}}});const W={class:"main-container"};function X(n,w,C,v,V,M){const x=r("AddButton"),p=r("TableHeader"),h=r("a-tag"),k=r("a-button"),I=r("a-space"),U=r("a-table-column"),D=r("a-table"),F=r("TableBody"),u=r("a-tree-select"),s=r("a-input"),l=r("IconSelector"),o=r("a-switch"),b=r("a-form-item"),A=r("a-form"),S=r("ModalDialog");return i(),N("div",W,[c(F,null,{header:t(()=>[c(p,{"show-filter":!1},{"table-config":t(()=>[c(x,{onAdd:n.onAddItem},null,8,["onAdd"])]),_:1})]),default:t(()=>[c(D,{bordered:!1,loading:n.tableLoading,data:n.dataList,"row-key":n.rowKey,pagination:!1},{columns:t(()=>[(i(!0),N(B,null,T(n.tableColumns,e=>(i(),m(U,{key:e.key,align:e.align,title:e.title,width:e.width,"data-index":e.key,fixed:e.fixed},P({_:2},[e.key==="index"?{name:"cell",fn:t(({rowIndex:a})=>[f(_(a+1),1)]),key:"0"}:e.key==="routeName"?{name:"cell",fn:t(({record:a})=>[f(_(a.routeName??"系统默认  "),1)]),key:"1"}:e.key==="icon"?{name:"cell",fn:t(({record:a})=>[(i(),m(j(a.icon||"IconMenu"),{style:{"font-size":"18px"}}))]),key:"2"}:e.key==="cacheable"?{name:"cell",fn:t(({record:a})=>[c(h,{color:a.cacheable?"blue":"red"},{default:t(()=>[f(_(a.cacheable?"是":"否"),1)]),_:2},1032,["color"])]),key:"3"}:e.key==="hidden"?{name:"cell",fn:t(({record:a})=>[c(h,{color:a.hidden?"blue":"red"},{default:t(()=>[f(_(a.hidden?"是":"否"),1)]),_:2},1032,["color"])]),key:"4"}:e.key==="affix"?{name:"cell",fn:t(({record:a})=>[c(h,{color:a.affix?"blue":"red"},{default:t(()=>[f(_(a.affix?"是":"否"),1)]),_:2},1032,["color"])]),key:"5"}:e.key==="actions"?{name:"cell",fn:t(({record:a})=>[c(I,null,{default:t(()=>[c(k,{status:"success",onClick:O=>n.onUpdateItem(a)},{default:t(()=>[f(" 编辑 ")]),_:2},1032,["onClick"]),c(k,{status:"danger",onClick:O=>n.onDeleteItem(a)},{default:t(()=>[f("删除")]),_:2},1032,["onClick"])]),_:2},1024)]),key:"6"}:void 0]),1032,["align","title","width","data-index","fixed"]))),128))]),_:1},8,["loading","data","row-key"])]),_:1}),c(S,{ref:"modalDialog",title:n.actionModel==="add"?"添加菜单":"编辑菜单",onConfirm:n.onConfirm,"content-height":"50vh"},{content:t(()=>[c(A,{model:{},wrapperCol:{span:18}},{default:t(()=>[(i(!0),N(B,null,T(n.itemFormOptions,e=>(i(),m(b,{class:G([e.required?"form-item__require":"form-item__no_require"]),label:e.label,key:e.key},{default:t(()=>[e.type==="tree-select"?(i(),m(u,{key:0,modelValue:e.value.value,"onUpdate:modelValue":a=>e.value.value=a,style:{width:"100%"},"dropdown-style":{maxHeight:"400px",overflow:"auto"},placeholder:e.placeholder,"allow-clear":"",data:n.treeData},null,8,["modelValue","onUpdate:modelValue","placeholder","data"])):g("",!0),e.type==="input"?(i(),m(s,{key:1,modelValue:e.value.value,"onUpdate:modelValue":a=>e.value.value=a,placeholder:e.placeholder,disabled:e.disabled?e.disabled.value:!1},null,8,["modelValue","onUpdate:modelValue","placeholder","disabled"])):g("",!0),e.type==="icon"?(i(),m(l,{key:2,value:e.value.value,"onUpdate:value":a=>e.value.value=a},null,8,["value","onUpdate:value"])):g("",!0),e.type==="switch"?(i(),m(o,{key:3,modelValue:e.value.value,"onUpdate:modelValue":a=>e.value.value=a},null,8,["modelValue","onUpdate:modelValue"])):g("",!0)]),_:2},1032,["class","label"]))),128))]),_:1})]),_:1},8,["title","onConfirm"])])}const Be=q(Q,[["render",X],["__scopeId","data-v-7173715a"]]);export{Be as default};
