import{a4 as s,M as t,v as o,R as e,f as i,s as r}from"./@arco-design-306c64c5.js";import{c as n}from"./@vueuse-96027ebb.js";import{e as p,r as a,a as c,k as l,l as m,m as j,v as d,p as u,F as f,R as y,n as v,O as x,z as b,y as h}from"./@vue-ab7141bd.js";import{_ as g}from"./index-4d88e5a9.js";import"./resize-observer-polyfill-ad543aa3.js";import"./compute-scroll-into-view-2962e95c.js";import"./b-tween-5055d79e.js";import"./dayjs-f47c42f6.js";import"./@logicflow-435513e4.js";import"./ids-ef071351.js";import"./preact-173f4f0b.js";import"./b-validate-42052d35.js";import"./number-precision-d9b928a1.js";import"./scroll-into-view-if-needed-59a60a09.js";import"./path-browserify-8c7c24dd.js";import"./vue-router-74931cc0.js";import"./pinia-c1bb2998.js";import"./axios-7fb8d0b2.js";import"./qs-536c1183.js";import"./side-channel-52a2f2e5.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./call-bind-d34af9d2.js";import"./object-inspect-a85657d3.js";import"./mockjs-a6500710.js";import"./tiny-emitter-af47831f.js";import"./xgplayer-474fd437.js";import"./quill-daa56216.js";import"./sortablejs-2f5483e3.js";import"./lodash-es-6e445b1b.js";const C=p({name:"Icons",setup(){const o=a(!1),e=Object.keys(s),{copy:i,isSupported:r}=n();let p=0;const l=c([]);function m(s){return`<${s}/>`}return l.push(...e.slice(p,50)),{loading:o,iconArray:e,tempIcon:l,onCopy:s=>{r?i(m(s)).then((()=>{t.success(`<${s}/> 复制成功`)})):t.error("当前浏览器不支持此功能")},onLoadMore:function(){l.length>=e.length?t.success("没有更多了"):(p++,l.push(...e.slice(50*p,50*p+50)))},getCopyContent:m}}}),k={class:"flex flex-col items-center justify-center icon-wrapper"},w={class:"mt-2 text-xs text-center"},_=["onClick"],z={class:"text-center"};const I=g(C,[["render",function(s,t,n,p,a,c){const g=o,C=e,I=i,q=r;return l(),m(q,{title:"鼠标放上，可以复制"},{default:j((()=>[d(C,{cols:"",class:"icon-parent",responsive:"screen"},{default:j((()=>[(l(!0),u(f,null,y(s.tempIcon,(t=>(l(),m(g,{xs:6,sm:6,md:4,lg:4,xl:3,key:t},{default:j((()=>[v("div",k,[(l(),m(x(t),{style:{"font-size":"22px"}})),v("div",w,b(t),1),v("div",{class:"text-center copy",onClick:o=>s.onCopy(t)}," 复制 ",8,_)])])),_:2},1024)))),128))])),_:1}),v("div",z,[d(I,{type:"text",onClick:s.onLoadMore},{default:j((()=>[h("加载更多")])),_:1},8,["onClick"])])])),_:1})}],["__scopeId","data-v-3175b2ae"]]);export{I as default};
