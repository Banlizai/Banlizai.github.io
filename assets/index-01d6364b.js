import{M as s,Y as e,Q as a,ar as r,f as i}from"./@arco-design-306c64c5.js";import{u as o,b as t}from"./vue-router-74931cc0.js";import{p as l}from"./http-5a7406c8.js";import{x as m,D as p,_ as d}from"./index-4d88e5a9.js";import{e as n,r as c,a as u,o as j,j as v,k as f,p as w,n as b,v as y,m as g,y as h,aX as x,aV as _}from"./@vue-ab7141bd.js";import"./resize-observer-polyfill-ad543aa3.js";import"./compute-scroll-into-view-2962e95c.js";import"./b-tween-5055d79e.js";import"./dayjs-f47c42f6.js";import"./@logicflow-435513e4.js";import"./ids-ef071351.js";import"./preact-173f4f0b.js";import"./b-validate-42052d35.js";import"./number-precision-d9b928a1.js";import"./scroll-into-view-if-needed-59a60a09.js";import"./path-browserify-8c7c24dd.js";import"./pinia-c1bb2998.js";import"./@vueuse-96027ebb.js";import"./axios-7fb8d0b2.js";import"./qs-536c1183.js";import"./side-channel-52a2f2e5.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./call-bind-d34af9d2.js";import"./object-inspect-a85657d3.js";import"./mockjs-a6500710.js";import"./tiny-emitter-af47831f.js";import"./xgplayer-474fd437.js";import"./quill-daa56216.js";import"./sortablejs-2f5483e3.js";import"./lodash-es-6e445b1b.js";const V=s=>(x("data-v-37a98b00"),s=s(),_(),s),k={class:"login-container"},z={class:"center"},q={class:"form-wrapper"},I=V((()=>b("div",{class:"title"},"账号登录",-1))),U={class:"item-wrapper mt-2"},C={class:"item-wrapper mt-4"},D=V((()=>b("div",{class:"flex-1"},null,-1))),N={class:"mt-6"},A=V((()=>b("div",{class:"my-width flex-1 mt-4 mb-8"},[b("div",{class:"flex justify-between"})],-1))),B=d(n({__name:"index",setup(d){const n=c(!1),x=o(),_=t(),V=m(),B=u({username:"admin",password:"admin123"}),E=async()=>{try{n.value=!0;const{token:e}=await l({url:p,data:{username:B.username,password:B.password}}),a={username:B.username,token:123,userId:1,roleId:1,roles:[{roleCode:"ROLE_admin",roleId:1,roleName:"超级管理员"}],nickName:"超级管理员",avatar:""};await V.saveUser(a),await x.replace({path:_.query.redirect?_.query.redirect:"/"}),s.success("登录成功，欢迎："+B.username)}catch(e){s.error(e.message)}finally{n.value=!1}};return j((()=>{E()})),(s,o)=>{const t=v("icon-mobile"),l=a,m=v("icon-lock"),p=r,d=i,c=e;return f(),w("div",k,[b("div",z,[b("div",q,[y(c,{model:B,onSubmit:E,size:"large"},{default:g((()=>[I,b("div",U,[y(l,{modelValue:B.username,"onUpdate:modelValue":o[0]||(o[0]=s=>B.username=s),placeholder:"请输入用户名/手机号","allow-clear":"",size:"large"},{prefix:g((()=>[y(t)])),_:1},8,["modelValue"])]),b("div",C,[y(p,{modelValue:B.password,"onUpdate:modelValue":o[1]||(o[1]=s=>B.password=s),placeholder:"请输入密码","allow-clear":"",size:"large"},{prefix:g((()=>[y(m)])),_:1},8,["modelValue"])]),D,b("div",N,[y(d,{type:"primary",class:"login",loading:n.value,"html-type":"submit",size:"large"},{default:g((()=>[h(" 登录 ")])),_:1},8,["loading"])]),A])),_:1},8,["model"])])])])}}}),[["__scopeId","data-v-37a98b00"]]);export{B as default};
