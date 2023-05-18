import{g as Ge}from"./@logicflow-5cdfeb8e.js";var te={},Ye={get exports(){return te},set exports(e){te=e}},T={},Qe={get exports(){return T},set exports(e){T=e}},De=function(r,a){return function(){for(var t=new Array(arguments.length),i=0;i<t.length;i++)t[i]=arguments[i];return r.apply(a,t)}},Ze=De,R=Object.prototype.toString;function ie(e){return R.call(e)==="[object Array]"}function ne(e){return typeof e>"u"}function er(e){return e!==null&&!ne(e)&&e.constructor!==null&&!ne(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}function rr(e){return R.call(e)==="[object ArrayBuffer]"}function tr(e){return typeof FormData<"u"&&e instanceof FormData}function nr(e){var r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(e):r=e&&e.buffer&&e.buffer instanceof ArrayBuffer,r}function ar(e){return typeof e=="string"}function ir(e){return typeof e=="number"}function je(e){return e!==null&&typeof e=="object"}function U(e){if(R.call(e)!=="[object Object]")return!1;var r=Object.getPrototypeOf(e);return r===null||r===Object.prototype}function sr(e){return R.call(e)==="[object Date]"}function or(e){return R.call(e)==="[object File]"}function ur(e){return R.call(e)==="[object Blob]"}function $e(e){return R.call(e)==="[object Function]"}function fr(e){return je(e)&&$e(e.pipe)}function lr(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}function cr(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function dr(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function se(e,r){if(!(e===null||typeof e>"u"))if(typeof e!="object"&&(e=[e]),ie(e))for(var a=0,n=e.length;a<n;a++)r.call(null,e[a],a,e);else for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.call(null,e[t],t,e)}function ae(){var e={};function r(t,i){U(e[i])&&U(t)?e[i]=ae(e[i],t):U(t)?e[i]=ae({},t):ie(t)?e[i]=t.slice():e[i]=t}for(var a=0,n=arguments.length;a<n;a++)se(arguments[a],r);return e}function hr(e,r,a){return se(r,function(t,i){a&&typeof t=="function"?e[i]=Ze(t,a):e[i]=t}),e}function pr(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}var m={isArray:ie,isArrayBuffer:rr,isBuffer:er,isFormData:tr,isArrayBufferView:nr,isString:ar,isNumber:ir,isObject:je,isPlainObject:U,isUndefined:ne,isDate:sr,isFile:or,isBlob:ur,isFunction:$e,isStream:fr,isURLSearchParams:lr,isStandardBrowserEnv:dr,forEach:se,merge:ae,extend:hr,trim:cr,stripBOM:pr},x=m;function de(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var _e=function(r,a,n){if(!a)return r;var t;if(n)t=n(a);else if(x.isURLSearchParams(a))t=a.toString();else{var i=[];x.forEach(a,function(l,f){l===null||typeof l>"u"||(x.isArray(l)?f=f+"[]":l=[l],x.forEach(l,function(s){x.isDate(s)?s=s.toISOString():x.isObject(s)&&(s=JSON.stringify(s)),i.push(de(f)+"="+de(s))}))}),t=i.join("&")}if(t){var u=r.indexOf("#");u!==-1&&(r=r.slice(0,u)),r+=(r.indexOf("?")===-1?"?":"&")+t}return r},mr=m;function L(){this.handlers=[]}L.prototype.use=function(r,a,n){return this.handlers.push({fulfilled:r,rejected:a,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1};L.prototype.eject=function(r){this.handlers[r]&&(this.handlers[r]=null)};L.prototype.forEach=function(r){mr.forEach(this.handlers,function(n){n!==null&&r(n)})};var vr=L,yr=m,br=function(r,a){yr.forEach(r,function(t,i){i!==a&&i.toUpperCase()===a.toUpperCase()&&(r[a]=t,delete r[i])})},Ie=function(r,a,n,t,i){return r.config=a,n&&(r.code=n),r.request=t,r.response=i,r.isAxiosError=!0,r.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},r},_,he;function ke(){if(he)return _;he=1;var e=Ie;return _=function(a,n,t,i,u){var o=new Error(a);return e(o,n,t,i,u)},_}var I,pe;function Er(){if(pe)return I;pe=1;var e=ke();return I=function(a,n,t){var i=t.config.validateStatus;!t.status||!i||i(t.status)?a(t):n(e("Request failed with status code "+t.status,t.config,null,t.request,t))},I}var k,me;function wr(){if(me)return k;me=1;var e=m;return k=e.isStandardBrowserEnv()?function(){return{write:function(n,t,i,u,o,l){var f=[];f.push(n+"="+encodeURIComponent(t)),e.isNumber(i)&&f.push("expires="+new Date(i).toGMTString()),e.isString(u)&&f.push("path="+u),e.isString(o)&&f.push("domain="+o),l===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(n){var t=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),k}var F,ve;function Rr(){return ve||(ve=1,F=function(r){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(r)}),F}var H,ye;function Cr(){return ye||(ye=1,H=function(r,a){return a?r.replace(/\/+$/,"")+"/"+a.replace(/^\/+/,""):r}),H}var M,be;function Sr(){if(be)return M;be=1;var e=Rr(),r=Cr();return M=function(n,t){return n&&!e(t)?r(n,t):t},M}var J,Ee;function xr(){if(Ee)return J;Ee=1;var e=m,r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return J=function(n){var t={},i,u,o;return n&&e.forEach(n.split(`
`),function(f){if(o=f.indexOf(":"),i=e.trim(f.substr(0,o)).toLowerCase(),u=e.trim(f.substr(o+1)),i){if(t[i]&&r.indexOf(i)>=0)return;i==="set-cookie"?t[i]=(t[i]?t[i]:[]).concat([u]):t[i]=t[i]?t[i]+", "+u:u}}),t},J}var z,we;function Or(){if(we)return z;we=1;var e=m;return z=e.isStandardBrowserEnv()?function(){var a=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a"),t;function i(u){var o=u;return a&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return t=i(window.location.href),function(o){var l=e.isString(o)?i(o):o;return l.protocol===t.protocol&&l.host===t.host}}():function(){return function(){return!0}}(),z}var V,Re;function B(){if(Re)return V;Re=1;function e(r){this.message=r}return e.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},e.prototype.__CANCEL__=!0,V=e,V}var X,Ce;function Se(){if(Ce)return X;Ce=1;var e=m,r=Er(),a=wr(),n=_e,t=Sr(),i=xr(),u=Or(),o=ke(),l=D(),f=B();return X=function(s){return new Promise(function(E,b){var q=s.data,A=s.headers,g=s.responseType,C;function ue(){s.cancelToken&&s.cancelToken.unsubscribe(C),s.signal&&s.signal.removeEventListener("abort",C)}e.isFormData(q)&&delete A["Content-Type"];var d=new XMLHttpRequest;if(s.auth){var Xe=s.auth.username||"",We=s.auth.password?unescape(encodeURIComponent(s.auth.password)):"";A.Authorization="Basic "+btoa(Xe+":"+We)}var fe=t(s.baseURL,s.url);d.open(s.method.toUpperCase(),n(fe,s.params,s.paramsSerializer),!0),d.timeout=s.timeout;function le(){if(d){var v="getAllResponseHeaders"in d?i(d.getAllResponseHeaders()):null,S=!g||g==="text"||g==="json"?d.responseText:d.response,w={data:S,status:d.status,statusText:d.statusText,headers:v,config:s,request:d};r(function($){E($),ue()},function($){b($),ue()},w),d=null}}if("onloadend"in d?d.onloadend=le:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(le)},d.onabort=function(){d&&(b(o("Request aborted",s,"ECONNABORTED",d)),d=null)},d.onerror=function(){b(o("Network Error",s,null,d)),d=null},d.ontimeout=function(){var S=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded",w=s.transitional||l.transitional;s.timeoutErrorMessage&&(S=s.timeoutErrorMessage),b(o(S,s,w.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",d)),d=null},e.isStandardBrowserEnv()){var ce=(s.withCredentials||u(fe))&&s.xsrfCookieName?a.read(s.xsrfCookieName):void 0;ce&&(A[s.xsrfHeaderName]=ce)}"setRequestHeader"in d&&e.forEach(A,function(S,w){typeof q>"u"&&w.toLowerCase()==="content-type"?delete A[w]:d.setRequestHeader(w,S)}),e.isUndefined(s.withCredentials)||(d.withCredentials=!!s.withCredentials),g&&g!=="json"&&(d.responseType=s.responseType),typeof s.onDownloadProgress=="function"&&d.addEventListener("progress",s.onDownloadProgress),typeof s.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",s.onUploadProgress),(s.cancelToken||s.signal)&&(C=function(v){d&&(b(!v||v&&v.type?new f("canceled"):v),d.abort(),d=null)},s.cancelToken&&s.cancelToken.subscribe(C),s.signal&&(s.signal.aborted?C():s.signal.addEventListener("abort",C))),q||(q=null),d.send(q)})},X}var W,xe;function D(){if(xe)return W;xe=1;var e=m,r=br,a=Ie,n={"Content-Type":"application/x-www-form-urlencoded"};function t(l,f){!e.isUndefined(l)&&e.isUndefined(l["Content-Type"])&&(l["Content-Type"]=f)}function i(){var l;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(l=Se()),l}function u(l,f,c){if(e.isString(l))try{return(f||JSON.parse)(l),e.trim(l)}catch(s){if(s.name!=="SyntaxError")throw s}return(c||JSON.stringify)(l)}var o={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:i(),transformRequest:[function(f,c){return r(c,"Accept"),r(c,"Content-Type"),e.isFormData(f)||e.isArrayBuffer(f)||e.isBuffer(f)||e.isStream(f)||e.isFile(f)||e.isBlob(f)?f:e.isArrayBufferView(f)?f.buffer:e.isURLSearchParams(f)?(t(c,"application/x-www-form-urlencoded;charset=utf-8"),f.toString()):e.isObject(f)||c&&c["Content-Type"]==="application/json"?(t(c,"application/json"),u(f)):f}],transformResponse:[function(f){var c=this.transitional||o.transitional,s=c&&c.silentJSONParsing,h=c&&c.forcedJSONParsing,E=!s&&this.responseType==="json";if(E||h&&e.isString(f)&&f.length)try{return JSON.parse(f)}catch(b){if(E)throw b.name==="SyntaxError"?a(b,this,"E_JSON_PARSE"):b}return f}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(f){return f>=200&&f<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};return e.forEach(["delete","get","head"],function(f){o.headers[f]={}}),e.forEach(["post","put","patch"],function(f){o.headers[f]=e.merge(n)}),W=o,W}var qr=m,Ar=D(),gr=function(r,a,n){var t=this||Ar;return qr.forEach(n,function(u){r=u.call(t,r,a)}),r},K,Oe;function Fe(){return Oe||(Oe=1,K=function(r){return!!(r&&r.__CANCEL__)}),K}var qe=m,G=gr,Nr=Fe(),Ur=D(),Pr=B();function Y(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Pr("canceled")}var Tr=function(r){Y(r),r.headers=r.headers||{},r.data=G.call(r,r.data,r.headers,r.transformRequest),r.headers=qe.merge(r.headers.common||{},r.headers[r.method]||{},r.headers),qe.forEach(["delete","get","head","post","put","patch","common"],function(t){delete r.headers[t]});var a=r.adapter||Ur.adapter;return a(r).then(function(t){return Y(r),t.data=G.call(r,t.data,t.headers,r.transformResponse),t},function(t){return Nr(t)||(Y(r),t&&t.response&&(t.response.data=G.call(r,t.response.data,t.response.headers,r.transformResponse))),Promise.reject(t)})},p=m,He=function(r,a){a=a||{};var n={};function t(c,s){return p.isPlainObject(c)&&p.isPlainObject(s)?p.merge(c,s):p.isPlainObject(s)?p.merge({},s):p.isArray(s)?s.slice():s}function i(c){if(p.isUndefined(a[c])){if(!p.isUndefined(r[c]))return t(void 0,r[c])}else return t(r[c],a[c])}function u(c){if(!p.isUndefined(a[c]))return t(void 0,a[c])}function o(c){if(p.isUndefined(a[c])){if(!p.isUndefined(r[c]))return t(void 0,r[c])}else return t(void 0,a[c])}function l(c){if(c in a)return t(r[c],a[c]);if(c in r)return t(void 0,r[c])}var f={url:u,method:u,data:u,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l};return p.forEach(Object.keys(r).concat(Object.keys(a)),function(s){var h=f[s]||i,E=h(s);p.isUndefined(E)&&h!==l||(n[s]=E)}),n},Q,Ae;function Me(){return Ae||(Ae=1,Q={version:"0.24.0"}),Q}var Lr=Me().version,oe={};["object","boolean","number","function","string","symbol"].forEach(function(e,r){oe[e]=function(n){return typeof n===e||"a"+(r<1?"n ":" ")+e}});var ge={};oe.transitional=function(r,a,n){function t(i,u){return"[Axios v"+Lr+"] Transitional option '"+i+"'"+u+(n?". "+n:"")}return function(i,u,o){if(r===!1)throw new Error(t(u," has been removed"+(a?" in "+a:"")));return a&&!ge[u]&&(ge[u]=!0,console.warn(t(u," has been deprecated since v"+a+" and will be removed in the near future"))),r?r(i,u,o):!0}};function Br(e,r,a){if(typeof e!="object")throw new TypeError("options must be an object");for(var n=Object.keys(e),t=n.length;t-- >0;){var i=n[t],u=r[i];if(u){var o=e[i],l=o===void 0||u(o,i,e);if(l!==!0)throw new TypeError("option "+i+" must be "+l);continue}if(a!==!0)throw Error("Unknown option "+i)}}var Dr={assertOptions:Br,validators:oe},Je=m,jr=_e,Ne=vr,Ue=Tr,j=He,ze=Dr,O=ze.validators;function N(e){this.defaults=e,this.interceptors={request:new Ne,response:new Ne}}N.prototype.request=function(r){typeof r=="string"?(r=arguments[1]||{},r.url=arguments[0]):r=r||{},r=j(this.defaults,r),r.method?r.method=r.method.toLowerCase():this.defaults.method?r.method=this.defaults.method.toLowerCase():r.method="get";var a=r.transitional;a!==void 0&&ze.assertOptions(a,{silentJSONParsing:O.transitional(O.boolean),forcedJSONParsing:O.transitional(O.boolean),clarifyTimeoutError:O.transitional(O.boolean)},!1);var n=[],t=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(r)===!1||(t=t&&h.synchronous,n.unshift(h.fulfilled,h.rejected))});var i=[];this.interceptors.response.forEach(function(h){i.push(h.fulfilled,h.rejected)});var u;if(!t){var o=[Ue,void 0];for(Array.prototype.unshift.apply(o,n),o=o.concat(i),u=Promise.resolve(r);o.length;)u=u.then(o.shift(),o.shift());return u}for(var l=r;n.length;){var f=n.shift(),c=n.shift();try{l=f(l)}catch(s){c(s);break}}try{u=Ue(l)}catch(s){return Promise.reject(s)}for(;i.length;)u=u.then(i.shift(),i.shift());return u};N.prototype.getUri=function(r){return r=j(this.defaults,r),jr(r.url,r.params,r.paramsSerializer).replace(/^\?/,"")};Je.forEach(["delete","get","head","options"],function(r){N.prototype[r]=function(a,n){return this.request(j(n||{},{method:r,url:a,data:(n||{}).data}))}});Je.forEach(["post","put","patch"],function(r){N.prototype[r]=function(a,n,t){return this.request(j(t||{},{method:r,url:a,data:n}))}});var $r=N,Z,Pe;function _r(){if(Pe)return Z;Pe=1;var e=B();function r(a){if(typeof a!="function")throw new TypeError("executor must be a function.");var n;this.promise=new Promise(function(u){n=u});var t=this;this.promise.then(function(i){if(t._listeners){var u,o=t._listeners.length;for(u=0;u<o;u++)t._listeners[u](i);t._listeners=null}}),this.promise.then=function(i){var u,o=new Promise(function(l){t.subscribe(l),u=l}).then(i);return o.cancel=function(){t.unsubscribe(u)},o},a(function(u){t.reason||(t.reason=new e(u),n(t.reason))})}return r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.prototype.subscribe=function(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]},r.prototype.unsubscribe=function(n){if(this._listeners){var t=this._listeners.indexOf(n);t!==-1&&this._listeners.splice(t,1)}},r.source=function(){var n,t=new r(function(u){n=u});return{token:t,cancel:n}},Z=r,Z}var ee,Te;function Ir(){return Te||(Te=1,ee=function(r){return function(n){return r.apply(null,n)}}),ee}var re,Le;function kr(){return Le||(Le=1,re=function(r){return typeof r=="object"&&r.isAxiosError===!0}),re}var Be=m,Fr=De,P=$r,Hr=He,Mr=D();function Ve(e){var r=new P(e),a=Fr(P.prototype.request,r);return Be.extend(a,P.prototype,r),Be.extend(a,r),a.create=function(t){return Ve(Hr(e,t))},a}var y=Ve(Mr);y.Axios=P;y.Cancel=B();y.CancelToken=_r();y.isCancel=Fe();y.VERSION=Me().version;y.all=function(r){return Promise.all(r)};y.spread=Ir();y.isAxiosError=kr();Qe.exports=y;T.default=y;(function(e){e.exports=T})(Ye);const zr=Ge(te);export{zr as A};