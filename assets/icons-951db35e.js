import{A as C,M as u}from"./@arco-design-f5decd74.js";import{c as v}from"./@vueuse-945dd224.js";import{e as h,r as k,a as g,j as i,k as a,l as _,m as p,v as x,p as F,F as $,R as b,n as m,O as A,z as E,y as D}from"./@vue-0366cb61.js";import{_ as I}from"./index-09e9d0bf.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./compute-scroll-into-view-183f845a.js";import"./b-tween-aacd5abe.js";import"./dayjs-bf5be20d.js";import"./@logicflow-5cdfeb8e.js";import"./ids-46106237.js";import"./preact-b8060ab3.js";import"./b-validate-48f29bf6.js";import"./number-precision-7e656275.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./path-browserify-188d1ff8.js";import"./vue-router-5bfb708a.js";import"./axios-0bf28a1e.js";import"./qs-b99d1803.js";import"./side-channel-5f245a46.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-9ceb8f5b.js";import"./object-inspect-8530d459.js";import"./pinia-16e4d8ec.js";import"./mockjs-417a16d8.js";import"./tiny-emitter-6d407e5e.js";import"./xgplayer-cee6bcaa.js";import"./quill-9354d83a.js";import"./sortablejs-be94e56d.js";import"./lodash-es-734afc83.js";const w=h({name:"Icons",setup(){const s=k(!1),n=Object.keys(C),{copy:d,isSupported:f}=v(),y=o=>{if(!f){u.error("当前浏览器不支持此功能");return}d(c(o)).then(()=>{u.success(`<${o}/> 复制成功`)})};let r=0;const t=50,e=g([]);e.push(...n.slice(r,t));function l(){if(e.length>=n.length){u.success("没有更多了");return}r++,e.push(...n.slice(r*t,r*t+t))}function c(o){return`<${o}/>`}return{loading:s,iconArray:n,tempIcon:e,onCopy:y,onLoadMore:l,getCopyContent:c}}});const B={class:"flex flex-col items-center justify-center icon-wrapper"},M={class:"mt-2 text-xs text-center"},j=["onClick"],z={class:"text-center"};function L(s,n,d,f,y,r){const t=i("a-col"),e=i("a-row"),l=i("a-button"),c=i("a-card");return a(),_(c,{title:"鼠标放上，可以复制"},{default:p(()=>[x(e,{cols:"",class:"icon-parent",responsive:"screen"},{default:p(()=>[(a(!0),F($,null,b(s.tempIcon,o=>(a(),_(t,{xs:6,sm:6,md:4,lg:4,xl:3,key:o},{default:p(()=>[m("div",B,[(a(),_(A(o),{style:{"font-size":"22px"}})),m("div",M,E(o),1),m("div",{class:"text-center copy",onClick:N=>s.onCopy(o)}," 复制 ",8,j)])]),_:2},1024))),128))]),_:1}),m("div",z,[x(l,{type:"text",onClick:s.onLoadMore},{default:p(()=>[D("加载更多")]),_:1},8,["onClick"])])]),_:1})}const yo=I(w,[["render",L],["__scopeId","data-v-3175b2ae"]]);export{yo as default};