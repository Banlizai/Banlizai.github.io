import{g as e,_ as t,e as s,k as a}from"./index-4d88e5a9.js";import{f as i,ab as o,Z as r,_ as l}from"./@arco-design-306c64c5.js";import{p as n}from"./http-5a7406c8.js";import{b as p,c as m}from"./table-76ae527c.js";import{X as d}from"./xlsx-44ece581.js";import{e as c,r as j,o as u,k as f,p as k,v as y,m as x,y as b,F as g,R as h,l as _,G as v,z as I}from"./@vue-ab7141bd.js";import"./path-browserify-8c7c24dd.js";import"./vue-router-74931cc0.js";import"./pinia-c1bb2998.js";import"./@vueuse-96027ebb.js";import"./axios-7fb8d0b2.js";import"./@logicflow-435513e4.js";import"./ids-ef071351.js";import"./preact-173f4f0b.js";import"./qs-536c1183.js";import"./side-channel-52a2f2e5.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./call-bind-d34af9d2.js";import"./object-inspect-a85657d3.js";import"./mockjs-a6500710.js";import"./tiny-emitter-af47831f.js";import"./xgplayer-474fd437.js";import"./quill-daa56216.js";import"./sortablejs-2f5483e3.js";import"./lodash-es-6e445b1b.js";import"./resize-observer-polyfill-ad543aa3.js";import"./compute-scroll-into-view-2962e95c.js";import"./b-tween-5055d79e.js";import"./dayjs-f47c42f6.js";import"./b-validate-42052d35.js";import"./number-precision-d9b928a1.js";import"./scroll-into-view-if-needed-59a60a09.js";const w=c({name:"ExportExcel",setup(){const t=j(null),s=p(),a=m([s.indexColumn,{title:"名称",key:"nickName",dataIndex:"nickName"},{title:"性别",key:"gender",dataIndex:"gender"},{title:"地址",key:"address",dataIndex:"address"},{title:"登录时间",key:"lastLoginTime",dataIndex:"lastLoginTime"},{title:"登录IP",key:"lastLoginIp",dataIndex:"lastLoginIp"},{title:"状态",key:"status",dataIndex:"status"}]);return u((function(){n({url:e,data:{page:1,pageSize:20}}).then(s.handleSuccess).catch(console.log)})),{tableRef:t,tableColumns:a,...s,exportExcel:function(){const e=d.utils.table_to_sheet(t.value.$el),s=d.utils.book_new();d.utils.book_append_sheet(s,e,"数据报表"),d.writeFile(s,"tale-list.xlsx")}}}}),C={class:"main-container"};const E=t(w,[["render",function(e,t,n,p,m,d){const c=i,j=s,u=o,w=r,E=l,L=a;return f(),k("div",C,[y(j,{"show-filter":!1},{"table-config":x((()=>[y(c,{type:"primary",onClick:e.exportExcel},{default:x((()=>[b("导出Excel ")])),_:1},8,["onClick"])])),_:1}),y(L,{ref:"tableBody"},{default:x((()=>[y(E,{ref:"tableRef",data:e.dataList,pagination:!1},{columns:x((()=>[(f(!0),k(g,null,h(e.tableColumns,(e=>(f(),_(w,{key:e.key,align:"center",title:e.title,"data-index":e.key},v({_:2},["index"===e.key?{name:"cell",fn:x((({rowIndex:e})=>[b(I(e+1),1)])),key:"0"}:"gender"===e.key?{name:"cell",fn:x((({record:e})=>[b(I(1===e.gender?"男":"女"),1)])),key:"1"}:"status"===e.key?{name:"cell",fn:x((({record:e})=>[1===e.status?(f(),_(u,{key:0,color:"blue"},{default:x((()=>[b("正常")])),_:1})):(f(),_(u,{key:1,color:"red"},{default:x((()=>[b("禁用")])),_:1}))])),key:"2"}:void 0]),1032,["title","data-index"])))),128))])),_:1},8,["data"])])),_:1},512)])}]]);export{E as default};
