import{g as t}from"./get-intrinsic-bac01933.js";import{f as r}from"./function-bind-72d06d3b.js";var e={};!function(e){var n=r,o=t,p=o("%Function.prototype.apply%"),a=o("%Function.prototype.call%"),i=o("%Reflect.apply%",!0)||n.call(a,p),c=o("%Object.getOwnPropertyDescriptor%",!0),l=o("%Object.defineProperty%",!0),u=o("%Math.max%");if(l)try{l({},"a",{value:1})}catch(s){l=null}e.exports=function(t){var r=i(n,a,arguments);c&&l&&(c(r,"length").configurable&&l(r,"length",{value:1+u(0,t.length-(arguments.length-1))}));return r};var f=function(){return i(n,p,arguments)};l?l(e.exports,"apply",{value:f}):e.exports.apply=f}({get exports(){return e},set exports(t){e=t}});var n=t,o=e,p=o(n("String.prototype.indexOf")),a=function(t,r){var e=n(t,!!r);return"function"==typeof e&&p(t,".prototype.")>-1?o(e):e};export{a as c};