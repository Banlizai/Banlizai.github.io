import{s as e,ad as s,a9 as t}from"./@arco-design-306c64c5.js";import{e as i,r as o,a as n,o as l,k as a,l as r,m as p,v as c,n as u,z as d,a1 as v}from"./@vue-ab7141bd.js";import"./resize-observer-polyfill-ad543aa3.js";import"./compute-scroll-into-view-2962e95c.js";import"./b-tween-5055d79e.js";import"./dayjs-f47c42f6.js";import"./@logicflow-435513e4.js";import"./ids-ef071351.js";import"./preact-173f4f0b.js";import"./b-validate-42052d35.js";import"./number-precision-d9b928a1.js";import"./scroll-into-view-if-needed-59a60a09.js";const g={name:"stvm",version:"0.0.4",scripts:{dev:"vite --host",build:"vite build",staging:"vite build --mode staging",tsc:"vue-tsc --noEmit",serve:"vite preview",log:"conventional-changelog -p custom-config -i CHANGELOG.md -s -r 0  -n ./changelog-option.js"},dependencies:{"@logicflow/core":"^0.7.13-alpha.1","@logicflow/extension":"^0.7.13-alpha.1","@vueuse/core":"^7.1.2",axios:"^0.24.0",cropperjs:"^1.5.12",echarts:"^5.1.2","lodash-es":"^4.17.21",mockjs:"^1.1.0",nprogress:"^0.2.0","path-browserify":"^1.0.1",pinia:"^2.0.9","print-js":"^1.6.0",qrcode:"^1.5.0",qs:"^6.10.1",quill:"^1.3.7",sortablejs:"^1.15.0","tiny-emitter":"^2.1.0","unplugin-auto-import":"^0.16.2",vue:"^3.2.31","vue-router":"^4.0.14",vuedraggable:"^4.0.3",xgplayer:"^2.31.4",xlsx:"^0.17.4"},devDependencies:{"@arco-design/web-vue":"^2.11.0","@types/lodash-es":"^4.17.6","@types/nprogress":"^0.2.0","@types/path-browserify":"^1.0.0","@types/qrcode":"^1.4.1","@types/qs":"^6.9.7","@types/quill":"^2.0.9","@types/sortablejs":"^1.15.0","@typescript-eslint/eslint-plugin":"^5.44.0","@typescript-eslint/parser":"^5.54.1","@vitejs/plugin-vue":"^3.1.2","@vitejs/plugin-vue-jsx":"^1.3.10",autoprefixer:"^10.4.0","compare-func":"^2.0.0","conventional-changelog":"^3.1.25","conventional-changelog-cli":"^2.2.2","conventional-changelog-custom-config":"^0.3.1",dotenv:"^12.0.4",eslint:"^7.30.0","eslint-config-prettier":"^8.3.0","eslint-define-config":"^1.0.9","eslint-plugin-prettier":"^3.4.0","eslint-plugin-vue":"^7.13.0",less:"^4.1.2","less-loader":"^10.2.0",postcss:"^8.4.3",prettier:"^2.3.2",tailwindcss:"^2.2.19",typescript:"^4.5.3","unplugin-vue-components":"^0.24.1",vite:"^3.1.8","vite-plugin-compression":"^0.5.1","vite-plugin-svg-icons":"^1.0.5","vue-eslint-parser":"^9.1.0","vue-tsc":"^0.3.0"}};const m={class:"text-lg"},j=i({__name:"infomation",setup(i){const{version:j,dependencies:b,devDependencies:f}=g;o(!1);const y=n([]),h=n([]);return l((()=>{const e=Object.values(b);Object.keys(b).map(((s,t)=>{y.push({label:s,value:e[t]})}));const s=Object.values(f);Object.keys(f).map(((e,t)=>{h.push({label:e,value:s[t]})}))})),(i,o)=>{const n=e,l=s,g=t;return a(),r(g,{direction:"vertical",class:"w-full"},{default:p((()=>[c(n,null,{default:p((()=>[u("div",m,[u("span",null," 当前版本号："+d(v(j)),1)])])),_:1}),c(n,{"body-style":{padding:"10px"}},{default:p((()=>[c(l,{bordered:"",column:3,title:"构建依赖",data:y},null,8,["data"])])),_:1}),c(n,{"body-style":{padding:"10px"}},{default:p((()=>[c(l,{bordered:"",column:3,title:"开发依赖",data:h},null,8,["data"])])),_:1})])),_:1})}}});export{j as default};
