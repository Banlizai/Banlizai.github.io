import{e as g,r as n,j as o,k as p,p as s,v as t,m as e,n as T,y as d,s as u,z as k}from"./@vue-0366cb61.js";import{_ as V}from"./index-09e9d0bf.js";import"./@arco-design-f5decd74.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./compute-scroll-into-view-183f845a.js";import"./b-tween-aacd5abe.js";import"./dayjs-bf5be20d.js";import"./@logicflow-5cdfeb8e.js";import"./ids-46106237.js";import"./preact-b8060ab3.js";import"./b-validate-48f29bf6.js";import"./number-precision-7e656275.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./path-browserify-188d1ff8.js";import"./vue-router-5bfb708a.js";import"./axios-0bf28a1e.js";import"./qs-b99d1803.js";import"./side-channel-5f245a46.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-9ceb8f5b.js";import"./object-inspect-8530d459.js";import"./pinia-16e4d8ec.js";import"./@vueuse-945dd224.js";import"./mockjs-417a16d8.js";import"./tiny-emitter-6d407e5e.js";import"./xgplayer-cee6bcaa.js";import"./quill-9354d83a.js";import"./sortablejs-be94e56d.js";import"./lodash-es-734afc83.js";const E={class:"main-container"},H={class:"flex"},N=["innerHTML"],w={key:1,class:"p-4 mt-4 priview-content"},b=g({__name:"rich-text",setup(j){const i=n(),m=n(""),r=n(""),a=n("");function v(){r.value=i.value.getHtmlContent()}function f(){a.value=i.value.getJsonContent()}return(B,c)=>{const x=o("a-input"),l=o("a-card"),_=o("a-button"),h=o("a-space"),y=o("RichTextEditor");return p(),s("div",E,[t(l,{title:"文章标题","content-style":{padding:"10px"},"header-style":{padding:"5px"}},{default:e(()=>[t(x,{modelValue:m.value,"onUpdate:modelValue":c[0]||(c[0]=C=>m.value=C),class:"title-input",placeholder:"请输入文章标题"},null,8,["modelValue"])]),_:1}),t(l,{title:"文章内容","body-style":{padding:"10px"},class:"mt-4"},{extra:e(()=>[T("div",H,[t(h,{justify:"end"},{default:e(()=>[t(_,{type:"primary",onClick:v},{default:e(()=>[d("获取HTML")]),_:1}),t(_,{status:"warning",onClick:f},{default:e(()=>[d("获取JSON")]),_:1})]),_:1})])]),default:e(()=>[t(y,{ref_key:"richTextEditor",ref:i,height:400},null,512)]),_:1}),r.value?(p(),s("div",{key:0,class:"p-4 mt-4 priview-content",innerHTML:r.value},null,8,N)):u("",!0),a.value?(p(),s("div",w,k(a.value),1)):u("",!0)])}}});const ct=V(b,[["__scopeId","data-v-00a53d19"]]);export{ct as default};