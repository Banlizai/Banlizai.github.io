import{M as t,i as o,ad as s,ae as r}from"./@arco-design-8dabd30f.js";import{b as i}from"./qrcode-fb057d44.js";import{l as e}from"./logo-eeef9459.js";import{d as a,u as l,r as m,h as n,o as p,m as d,w as j,s as c,c as f,F as u,R as g,f as h,aX as v,aV as C}from"./@vue-2b41ce19.js";import{n as b}from"./index-0ca45986.js";import"./b-tween-5055d79e.js";import"./b-validate-457088db.js";import"./resize-observer-polyfill-ad543aa3.js";import"./scroll-into-view-if-needed-59a60a09.js";import"./compute-scroll-into-view-2962e95c.js";import"./number-precision-d9b928a1.js";import"./dayjs-094145ee.js";import"./@logicflow-85f8458e.js";import"./ids-ef071351.js";import"./lodash-es-1e3e3aa2.js";import"./preact-5fc9b0bf.js";import"./encode-utf8-2ec93547.js";import"./dijkstrajs-38d0b2a1.js";import"./pinia-b3c1485e.js";import"./axios-6371c10e.js";import"./qs-f981fe00.js";import"./side-channel-01aeb4d9.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./call-bind-fae29077.js";import"./object-inspect-0eda087e.js";import"./path-browserify-8c7c24dd.js";import"./vue-router-70e2faff.js";import"./@vueuse-ca9a384d.js";import"./tiny-emitter-35dc7566.js";import"./echarts-24943dbb.js";import"./zrender-2d3b2bba.js";import"./tslib-a4e99503.js";import"./xgplayer-700bd6a3.js";import"./delegate-ef66b241.js";import"./downloadjs-91c0ea73.js";import"./quill-ecb3881d.js";import"./sortablejs-2f5483e3.js";const w=(t=>(v("data-v-9ce486a9"),t=t(),C(),t))((()=>h("div",{class:"text-center flex justify-center"},[h("canvas",{id:"logoCanvas",width:"250",height:"250"})],-1))),y={class:"text-center"},x=["src"],_=b(a({__name:"qrcode",setup(a){const v=l("");l("");const C=m([]),b=o=>{v.value?i.toDataURL(v.value,{width:250,margin:o.margin,color:{dark:o.darkColor,light:o.lightColor}}).then((t=>{C.push({title:o.title,url:t})})):t.error("请输入二维码文本内容")};return n((()=>{v.value="SIM",[{title:"普通样式",lightColor:"",darkColor:""},{title:"前景色样式",lightColor:"",darkColor:"#ff0000"},{title:"背景色样式",lightColor:"#ffff00",darkColor:""},{title:"混合样式",lightColor:"#ffff00",darkColor:"#ff0000"},{title:"小间距",margin:10,lightColor:"#409eff",darkColor:""}].forEach(b),(()=>{const t=document.getElementById("logoCanvas");i.toCanvas(t,v.value,{width:250}).then((()=>{const o=t.getContext("2d"),s=new Image,r=(t.getBoundingClientRect().width-50)/2;s.src=e,s.onload=()=>{null==o||o.drawImage(s,r,r,50,50)}}))})()})),(t,i)=>{const e=o,a=s,l=r;return p(),d(e,{title:"生成二维码"},{default:j((()=>[c(l,{gutter:[10,10],class:"mt-4"},{default:j((()=>[c(a,{span:8},{default:j((()=>[c(e,{title:"带logo","header-style":{padding:"5px"},"body-style":{padding:0}},{default:j((()=>[w])),_:1})])),_:1}),(p(!0),f(u,null,g(C,((t,o)=>(p(),d(a,{span:8,key:o},{default:j((()=>[c(e,{title:t.title},{default:j((()=>[h("div",y,[h("img",{src:t.url,class:"canvas",style:{margin:"0 auto"}},null,8,x)])])),_:2},1032,["title"])])),_:2},1024)))),128))])),_:1})])),_:1})}}}),[["__scopeId","data-v-9ce486a9"]]);export{_ as default};