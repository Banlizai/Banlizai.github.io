import{p as m}from"./print-js-6a2a07cb.js";import{m as s,_ as c}from"./index-09e9d0bf.js";import{e as _,j as o,k as u,p as g,v as a,m as e,y as d,n as r}from"./@vue-0366cb61.js";import"./@logicflow-5cdfeb8e.js";import"./ids-46106237.js";import"./preact-b8060ab3.js";import"./@arco-design-f5decd74.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./compute-scroll-into-view-183f845a.js";import"./b-tween-aacd5abe.js";import"./dayjs-bf5be20d.js";import"./b-validate-48f29bf6.js";import"./number-precision-7e656275.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./path-browserify-188d1ff8.js";import"./vue-router-5bfb708a.js";import"./axios-0bf28a1e.js";import"./qs-b99d1803.js";import"./side-channel-5f245a46.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-9ceb8f5b.js";import"./object-inspect-8530d459.js";import"./pinia-16e4d8ec.js";import"./@vueuse-945dd224.js";import"./mockjs-417a16d8.js";import"./tiny-emitter-6d407e5e.js";import"./xgplayer-cee6bcaa.js";import"./quill-9354d83a.js";import"./sortablejs-be94e56d.js";import"./lodash-es-734afc83.js";const f=_({name:"Print",setup(){function t(){m({printable:s,type:"image",showModal:!1})}function i(){m({printable:"htmlWrapper",type:"html",targetStyles:["*"]})}return{printImage:t,printHtml:i,imagePath:s,dataList:[{name:"张三",age:10,gender:"男"},{name:"李四",age:40,gender:"男"},{name:"王五",age:30,gender:"女"}],columns:[{title:"姓名",dataIndex:"name"},{title:"年龄",dataIndex:"age"},{title:"姓别",dataIndex:"gender"}]}}});const h={class:"main-container"},y={class:"image-wrapper"},x=["src"],v={id:"htmlWrapper"};function k(t,i,C,b,I,$){const n=o("a-button"),p=o("a-card"),l=o("a-table");return u(),g("div",h,[a(p,{title:"打印图片","header-style":{padding:"5px"},"content-style":{padding:"0px"}},{extra:e(()=>[a(n,{type:"primary",onClick:t.printImage},{default:e(()=>[d("打印")]),_:1},8,["onClick"])]),default:e(()=>[r("div",y,[r("img",{src:t.imagePath},null,8,x)])]),_:1}),a(p,{title:"打印HTML","header-style":{padding:"5px"},"content-style":{padding:"0px"},class:"mt-4"},{extra:e(()=>[a(n,{type:"primary",onClick:t.printHtml},{default:e(()=>[d("打印")]),_:1},8,["onClick"])]),default:e(()=>[r("div",v,[a(l,{data:t.dataList,columns:t.columns,pagination:!1},null,8,["data","columns"])])]),_:1})])}const it=c(f,[["render",k],["__scopeId","data-v-4769de64"]]);export{it as default};
