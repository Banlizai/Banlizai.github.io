import{g as e,a as t,b as o,c as s,d as a,e as i,f as l,h as n,i as r,j as c,k as u,l as m,m as p,M as d}from"./index-4d88e5a9.js";import{M as f,c as j,f as b,D as h,ak as v,a9 as g,al as y}from"./@arco-design-306c64c5.js";import{p as w}from"./http-5a7406c8.js";import{u as k,a as C,b as _,c as S,d as O}from"./table-76ae527c.js";import{u as x,c as D,a as A,i as L,b as z}from"./modal-aad43339.js";import{e as K,r as R,a as N,o as T,j as U,k as q,p as F,n as I,v as M,m as P,y as $,a1 as B,F as E}from"./@vue-ab7141bd.js";import"./path-browserify-8c7c24dd.js";import"./vue-router-74931cc0.js";import"./pinia-c1bb2998.js";import"./@vueuse-96027ebb.js";import"./axios-7fb8d0b2.js";import"./@logicflow-435513e4.js";import"./ids-ef071351.js";import"./preact-173f4f0b.js";import"./qs-536c1183.js";import"./side-channel-52a2f2e5.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./call-bind-d34af9d2.js";import"./object-inspect-a85657d3.js";import"./mockjs-a6500710.js";import"./tiny-emitter-af47831f.js";import"./xgplayer-474fd437.js";import"./quill-daa56216.js";import"./sortablejs-2f5483e3.js";import"./lodash-es-6e445b1b.js";import"./resize-observer-polyfill-ad543aa3.js";import"./compute-scroll-into-view-2962e95c.js";import"./b-tween-5055d79e.js";import"./dayjs-f47c42f6.js";import"./b-validate-42052d35.js";import"./number-precision-d9b928a1.js";import"./scroll-into-view-if-needed-59a60a09.js";const J={class:"main-container"},H={class:"flex justify-between"},G=K({__name:"list",setup(K){const{ADD:G,UPDATE:Q,UPLOAD:V,INFO:W}=d,X=x(),Y=[{color:"green",label:"在线"},{color:"gray",label:"维护"},{color:"red",label:"离线"}],Z=R({}),ee=[{title:"全部设备",key:"0-0"}],te=R(null),oe=k(fe),{selectedRowKeys:se,onSelectionChange:ae,showCheckedAll:ie}=C(),le=_(),{bordered:ne,striped:re,handleSuccess:ce,tableLoading:ue,dataList:me}=le,pe=O("id"),de=N(S(A));async function fe(){ue.value=!0;const t=await w({url:e,data:()=>({page:oe.page,pageSize:oe.pageSize})});ue.value=!1,ce(N(t)),oe.setTotalSize(t.totalSize||10)}function je(){f.success("模拟查询成功，参数为："+JSON.stringify(D.reduce(((e,t)=>(e[t.key]=t.value.value,e)),{})))}function be(){D.forEach((e=>{e.reset?e.reset():e.value.value=""}))}function he(e){e||0!==se.value.length?j.confirm({title:"提示",content:`确定要${e?"删除此":"删除所选择的"}数据吗？`,cancelText:"取消",okText:"删除",onOk:()=>{f.success("删除成功")}}):f.error("请选择要删除的数据")}function ve(){var e;X.title=G,X.itemOption=L,null==(e=te.value)||e.show()}function ge(){var e;X.title=Q,X.itemOption=L,null==(e=te.value)||e.show()}function ye(){var e;const t=X.useModalParams(X.itemOption);null==(e=te.value)||e.close(),f.success(`模拟${X.title}菜单成功，参数为: ${JSON.stringify(t)}`)}async function we({record:e,key:t}){e.id,e[t];if("nickName"===t)X.title=W,X.itemOption=[],null==(o=te.value)||o.show();var o}function ke(){var e;X.title=V,X.itemOption=z,null==(e=te.value)||e.show()}return T(fe),(e,d)=>{const f=b,j=t,w=h,k=v,C=o,_=s,S=g,O=a,x=i,A=y,L=l,z=U("icon-edit"),K=U("icon-delete"),R=n,N=r,T=c,G=u,Q=m,V=p;return q(),F(E,null,[I("div",J,[M(G,{ref:"tableBody"},{header:P((()=>[M(x,{"show-filter":!0,title:"",onSearch:je,onResetSearch:be},{"more-button-content":P((()=>[M(f,{type:"primary"},{default:P((()=>[$("加入维护")])),_:1}),M(j,{onDelete:he}),M(k,{onClick:ve},{content:P((()=>[M(w,null,{default:P((()=>[$("下载模版")])),_:1}),M(w,{onClick:ke},{default:P((()=>[$("上传")])),_:1})])),default:P((()=>[$(" 新增 ")])),_:1})])),"search-content":P((()=>[M(C,{form:Z.value,formItems:B(D)},null,8,["form","formItems"])])),"table-status":P((()=>[M(S,null,{default:P((()=>[M(_,{status:Y})])),_:1})])),"table-config":P((()=>[M(O,{tableColumns:de,"onUpdate:border":d[0]||(d[0]=e=>B(le).bordered.value=e),"onUpdate:striped":d[1]||(d[1]=e=>B(le).striped.value=e),onDoRefresh:fe},null,8,["tableColumns"])])),_:1})])),default:P((()=>[M(N,null,{tree:P((()=>[M(L,null,{default:P((()=>[M(A,{blockNode:"",data:ee})])),_:1})])),table:P((()=>[M(R,{bordered:B(ne),striped:B(re),selectedRowKeys:B(se),showCheckedAll:B(ie),tableLoading:B(ue),dataList:B(me),tableColumns:de,rowKey:B(pe),onSelectionChange:B(ae),onRowKeyChange:we},{optional:P((({record:e})=>[I("div",H,[M(f,{type:"text",onClick:ge},{icon:P((()=>[M(z)])),_:1}),M(f,{type:"text",onClick:t=>he(e)},{icon:P((()=>[M(K)])),_:2},1032,["onClick"])])])),_:1},8,["bordered","striped","selectedRowKeys","showCheckedAll","tableLoading","dataList","tableColumns","rowKey","onSelectionChange"])])),_:1})])),footer:P((()=>[M(T,{pagination:B(oe)},null,8,["pagination"])])),_:1},512)]),M(V,{ref_key:"modalDialog",ref:te,config:B(X),onConfirm:ye},{content:P((()=>[M(Q)])),_:1},8,["config"])],64)}}});export{G as default};