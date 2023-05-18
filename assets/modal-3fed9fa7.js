import{b as i}from"./table-d5bdf2e1.js";import{M as t,o as d}from"./@arco-design-f5decd74.js";import{r as e,X as n,a as c}from"./@vue-0366cb61.js";const p=i(),{indexColumn:u}=p,b=[u,{title:"名称",placeholder:"请输入名称",key:"nickName",dataIndex:"nickName",slotName:"nickName",formatter:!1,ellipsis:!0,tooltip:!0,optional:{function:"button",rules:[{required:!0,message:"名称必须填写"},{minLength:5,message:"名字必须大于5个字符"}],validate:"change",disabled:!1,show:!0}},{title:"国际编码",placeholder:"请输入国际编码",key:"gender",dataIndex:"gender",formatter:!0,ellipsis:!0,tooltip:!0,optional:{function:"switch",switchType:"round",disabled:!1,show:!1}},{title:"摄像头编码",placeholder:"请输入摄像头编码",key:"avatar",dataIndex:"avatar",ellipsis:!0,tooltip:!0,formatter:!0},{title:"设备IP",placeholder:"请输入设备IP",key:"address",dataIndex:"address",ellipsis:!0,tooltip:!0,formatter:!1},{title:"组织",placeholder:"请输入组织",key:"lastLoginTime",dataIndex:"lastLoginTime",ellipsis:!0,tooltip:!0,formatter:!1},{title:"设备类型",placeholder:"请输入设备类型",key:"lastLoginIp",dataIndex:"lastLoginIp",ellipsis:!0,tooltip:!0,formatter:!0},{title:"接入类型",placeholder:"请输入接入类型",key:"status",dataIndex:"status",ellipsis:!0,tooltip:!0,formatter:!0},{title:"经纬度",placeholder:"请输入经纬度",key:"status",dataIndex:"status",ellipsis:!0,tooltip:!0,formatter:!0},{title:"操作",key:"optional",dataIndex:"optional",width:80,type:"button"}],k=[u,{title:"名称",placeholder:"请输入名称",key:"nickName",dataIndex:"nickName",slotName:"nickName",formatter:!1,optional:{function:"button",rules:[{required:!0,message:"名称必须填写"},{minLength:5,message:"名字必须大于5个字符"}],validate:"change",disabled:!1,show:!0}},{title:"国际编码",placeholder:"请输入国际编码",key:"gender",dataIndex:"gender",formatter:!0,optional:{function:"switch",switchType:"round",disabled:!1,show:!1}},{title:"摄像头编码",placeholder:"请输入摄像头编码",key:"avatar",dataIndex:"avatar",formatter:!0},{title:"设备IP",placeholder:"请输入设备IP",key:"address",dataIndex:"address",formatter:!1},{title:"组织",placeholder:"请输入组织",key:"lastLoginTime",dataIndex:"lastLoginTime",formatter:!1},{title:"生效时间",placeholder:"请输入设备类型",key:"lastLoginIp",dataIndex:"lastLoginIp",formatter:!0},{title:"失效时间",placeholder:"请输入接入类型",key:"status",dataIndex:"status",formatter:!0},{title:"免检项目",placeholder:"请输入经纬度",key:"status",dataIndex:"status",formatter:!0},{title:"操作",key:"optional",dataIndex:"optional",width:80,type:"button"}],I=[{label:"摄像头名称",key:"name",required:!0,col:12,value:e(""),placeholder:"请输入摄像头名称",type:"input",validator:function(){const{value:l}=this.value??{};return l?!0:(t.error(this.placeholder||""),!1)},reset:function(){this.value.value=""}},{label:"IP地址",key:"ipAddress",required:!1,col:12,type:"input",placeholder:"请输入IP地址",value:e(""),reset:function(){this.value.value=""}},{label:"型号",key:"model",required:!1,value:e(""),col:12,type:"input",disabled:e(!0),placeholder:"请输入型号",reset:function(){this.value.value=""}},{label:"所属组织",key:"organization",required:!1,type:"tree-select",col:12,disabled:e(!1),placeholder:"请选择所属组织",value:e(""),reset:function(){this.value.value=""}},{label:"接入类型",key:"accessType",required:!0,disabled:e(!1),col:12,type:"select",placeholder:"请选择接入类型",value:e(""),reset:function(){this.value.value=""}},{label:"摄像头类型",key:"cameraType",type:"select",required:!1,disabled:e(!1),placeholder:"请选择接入类型",col:12,value:e(""),reset:function(){this.value.value=""}},{label:"点播地址",key:"videoAddress",type:"input",required:!1,disabled:e(!1),placeholder:"请输入点播地址",col:24,value:e(""),reset:function(){this.value.value=""}}],g=[{label:"摄像头名称",key:"name",required:!0,col:12,value:e(""),placeholder:"请输入摄像头名称",type:"input",validator:function(){const{value:l}=this.value??{};return l?!0:(t.error(this.placeholder||""),!1)},reset:function(){this.value.value=""}},{label:"IP地址",key:"ipAddress",required:!1,col:12,type:"input",placeholder:"请输入IP地址",value:e(""),reset:function(){this.value.value=""}},{label:"型号",key:"model",required:!1,value:e(""),col:12,type:"input",disabled:e(!0),placeholder:"请输入型号",reset:function(){this.value.value=""}},{label:"所属组织",key:"organization",required:!1,type:"tree-select",col:12,disabled:e(!1),placeholder:"请选择所属组织",value:e(""),reset:function(){this.value.value=""}},{label:"接入类型",key:"accessType",required:!1,disabled:e(!1),col:12,type:"select",placeholder:"请选择接入类型",value:e(""),reset:function(){this.value.value=""}},{label:"摄像头类型",key:"cameraType",type:"select",required:!1,disabled:e(!1),placeholder:"请选择接入类型",col:12,value:e(""),reset:function(){this.value.value=""}},{label:"点播地址",key:"videoAddress",type:"input",required:!1,disabled:e(!1),placeholder:"请输入点播地址",col:24,value:e(""),reset:function(){this.value.value=""}}],x=[{label:"上传",key:"upload",required:!0,value:e(""),col:24,placeholder:"请上传",type:"upload",validator:function(){const{value:l}=this.value??{};return console.log(this),l?!0:(t.error(this.placeholder||""),!1)},reset:function(){this.value.value=""}}],q=[{key:"deviceType",label:"设备类型",placeholder:"请选择设备类型",type:"select",optionItems:[{label:"类型1",value:1},{label:"类型2",value:2}],value:e(),reset:function(){this.value.value=void 0}},{key:"accessType",label:"接入类型",type:"select",placeholder:"请选择接入类型",optionItems:[{label:"类型1",value:1},{label:"类型2",value:2}],value:e(),reset:function(){this.value.value=void 0}},{key:"status",label:"状态",placeholder:"请选择状态",type:"select",optionItems:[{label:"类型1",value:1},{label:"类型2",value:2}],value:e(),reset:function(){this.value.value=void 0}},{key:"status",label:"状态",placeholder:"请选择状态",type:"select",optionItems:[{label:"类型1",value:1},{label:"类型2",value:2}],value:e(),reset:function(){this.value.value=void 0}},{key:"status",label:"状态",placeholder:"请选择状态",type:"select",optionItems:[{label:"类型1",value:1},{label:"类型2",value:2}],value:e(),reset:function(){this.value.value=void 0}},{key:"status",label:"状态",placeholder:"请选择状态",type:"select",optionItems:[{label:"类型1",value:1},{label:"类型2",value:2}],value:e(),reset:function(){this.value.value=void 0}},{key:"status",label:"状态",placeholder:"请选择状态",type:"select",optionItems:[{label:"类型1",value:1},{label:"类型2",value:2}],value:e(),reset:function(){this.value.value=void 0}}],L=[{key:"name",label:"摄像头名称/IP地址/编码",type:"input",placeholder:"请输入摄像头名称/IP地址/编码",value:e(),reset:function(){this.value.value=""},render:l=>n(d,{placeholder:"请输入摄像头名称/IP地址/编码",modelValue:l.value.value,"onUpdate:modelValue":s=>{l.value.value=s}})},{key:"deviceType",label:"免检项目",placeholder:"请选择免检项目",type:"select",optionItems:[{label:"类型1",value:1},{label:"类型2",value:2}],value:e(),reset:function(){this.value.value=void 0}},{key:"accessType",label:"生效时间",type:"select",placeholder:"请选择生效时间",optionItems:[{label:"类型1",value:1},{label:"类型2",value:2}],value:e(),reset:function(){this.value.value=void 0}}],T=function(){return{...c({title:"",simple:!1,height:"50vh",loading:!1,layout:"vertical",itemOption:[]}),useModalParams:function(r){return r.every(a=>a.validator?a.validator():!0)?r.reduce((a,o)=>(a[o.key]=o.value.value||"",a),{}):void 0}}};export{b as a,x as b,q as c,k as d,g as e,I as i,T as u,L as w};