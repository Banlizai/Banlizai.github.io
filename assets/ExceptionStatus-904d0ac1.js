import{_ as i}from"./index-09e9d0bf.js";import{e as o,j as r,k as a,p,n as t,z as m,v as n,m as c,y as _}from"./@vue-0366cb61.js";import"./@arco-design-f5decd74.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./compute-scroll-into-view-183f845a.js";import"./b-tween-aacd5abe.js";import"./dayjs-bf5be20d.js";import"./@logicflow-5cdfeb8e.js";import"./ids-46106237.js";import"./preact-b8060ab3.js";import"./b-validate-48f29bf6.js";import"./number-precision-7e656275.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./path-browserify-188d1ff8.js";import"./vue-router-5bfb708a.js";import"./axios-0bf28a1e.js";import"./qs-b99d1803.js";import"./side-channel-5f245a46.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-9ceb8f5b.js";import"./object-inspect-8530d459.js";import"./pinia-16e4d8ec.js";import"./@vueuse-945dd224.js";import"./mockjs-417a16d8.js";import"./tiny-emitter-6d407e5e.js";import"./xgplayer-cee6bcaa.js";import"./quill-9354d83a.js";import"./sortablejs-be94e56d.js";import"./lodash-es-734afc83.js";const u="/assets/img_404-d01ff55d.png",d="/assets/img_403-47e55c9c.png",g="/assets/img_500-8ffbd5ad.png";const l=o({name:"ExceptionStatus",props:{status:{type:[Number,String],default:"404"}},data(){return{image404:u,image403:d,image500:g}},computed:{statusImage(){return this.status.toString()==="404"?this.image404:this.status.toString()==="403"?this.image403:this.image500},statusTip(){return this.status.toString()==="404"?"您访问的页面不存在":this.status.toString()==="403"?"您没有权限访问该页面":"您访问的页面出错啦"}},methods:{backHome(){this.$router.replace({path:"/"})}}}),f={class:"exception-container"},h={class:"img-wrapper"},v=["src"],S={class:"title"},b={class:"margin-top-lg"};function k(e,x,y,C,$,E){const s=r("a-button");return a(),p("div",f,[t("div",h,[t("img",{src:e.statusImage},null,8,v)]),t("div",S,[t("div",null,m(e.statusTip),1),t("div",b,[n(s,{type:"primary",onClick:e.backHome},{default:c(()=>[_(" 返回首页 ")]),_:1},8,["onClick"])])])])}const rt=i(l,[["render",k],["__scopeId","data-v-91b35dc1"]]);export{rt as default};
