import{e as f,r as m,a as d,o as _,j as o,k as y,l as b,m as n,v as t,n as u,z as h,a1 as j}from"./@vue-0366cb61.js";const x="stvm",w="0.0.4",k={dev:"vite --host",build:"vite build",staging:"vite build --mode staging",tsc:"vue-tsc --noEmit",serve:"vite preview",log:"conventional-changelog -p custom-config -i CHANGELOG.md -s -r 0  -n ./changelog-option.js"},q={"@logicflow/core":"^0.7.13-alpha.1","@logicflow/extension":"^0.7.13-alpha.1","@vueuse/core":"^7.1.2",axios:"^0.24.0",cropperjs:"^1.5.12",echarts:"^5.1.2","lodash-es":"^4.17.21",mockjs:"^1.1.0",nprogress:"^0.2.0","path-browserify":"^1.0.1",pinia:"^2.0.9","print-js":"^1.6.0",qrcode:"^1.5.0",qs:"^6.10.1",quill:"^1.3.7",sortablejs:"^1.15.0","tiny-emitter":"^2.1.0",vue:"^3.2.31","vue-router":"^4.0.14",vuedraggable:"^4.0.3",xgplayer:"^2.31.4",xlsx:"^0.17.4"},D={"@arco-design/web-vue":"^2.44.2","@types/lodash-es":"^4.17.6","@types/nprogress":"^0.2.0","@types/path-browserify":"^1.0.0","@types/qrcode":"^1.4.1","@types/qs":"^6.9.7","@types/quill":"^2.0.9","@types/sortablejs":"^1.15.0","@typescript-eslint/eslint-plugin":"^5.44.0","@typescript-eslint/parser":"^5.54.1","@vitejs/plugin-vue":"^3.1.2","@vitejs/plugin-vue-jsx":"^1.3.10",autoprefixer:"^10.4.0","compare-func":"^2.0.0","conventional-changelog":"^3.1.25","conventional-changelog-cli":"^2.2.2","conventional-changelog-custom-config":"^0.3.1",dotenv:"^12.0.4",eslint:"^7.30.0","eslint-config-prettier":"^8.3.0","eslint-define-config":"^1.0.9","eslint-plugin-prettier":"^3.4.0","eslint-plugin-vue":"^7.13.0",less:"^4.1.2","less-loader":"^10.2.0",postcss:"^8.4.3",prettier:"^2.3.2",tailwindcss:"^2.2.19",typescript:"^4.5.3","unplugin-vue-components":"^0.17.21",vite:"^3.1.8","vite-plugin-svg-icons":"^1.0.5","vue-eslint-parser":"^9.1.0","vue-tsc":"^0.3.0"},O={name:x,version:w,scripts:k,dependencies:q,devDependencies:D};function C(){return O}const V={class:"text-lg"},N=f({__name:"infomation",setup(B){const{version:v,dependencies:i,devDependencies:a}=C();m(!1);const c=d([]),l=d([]);return _(()=>{const p=Object.values(i);Object.keys(i).map((e,s)=>{c.push({label:e,value:p[s]})});const r=Object.values(a);Object.keys(a).map((e,s)=>{l.push({label:e,value:r[s]})})}),(p,r)=>{const e=o("a-card"),s=o("a-descriptions"),g=o("a-space");return y(),b(g,{direction:"vertical",class:"w-full"},{default:n(()=>[t(e,null,{default:n(()=>[u("div",V,[u("span",null," 当前版本号："+h(j(v)),1)])]),_:1}),t(e,{"body-style":{padding:"10px"}},{default:n(()=>[t(s,{bordered:"",column:3,title:"构建依赖",data:c},null,8,["data"])]),_:1}),t(e,{"body-style":{padding:"10px"}},{default:n(()=>[t(s,{bordered:"",column:3,title:"开发依赖",data:l},null,8,["data"])]),_:1})]),_:1})}}});export{N as default};
