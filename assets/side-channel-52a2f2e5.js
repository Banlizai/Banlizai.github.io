import{g as e}from"./get-intrinsic-bac01933.js";import{c as t}from"./call-bind-d34af9d2.js";import{o as n}from"./object-inspect-a85657d3.js";var o=e,r=t,f=n,i=o("%TypeError%"),a=o("%WeakMap%",!0),p=o("%Map%",!0),u=r("WeakMap.prototype.get",!0),s=r("WeakMap.prototype.set",!0),c=r("WeakMap.prototype.has",!0),y=r("Map.prototype.get",!0),l=r("Map.prototype.set",!0),x=r("Map.prototype.has",!0),v=function(e,t){for(var n,o=e;null!==(n=o.next);o=n)if(n.key===t)return o.next=n.next,n.next=e.next,e.next=n,n},M=function(){var e,t,n,o={assert:function(e){if(!o.has(e))throw new i("Side channel does not contain "+f(e))},get:function(o){if(a&&o&&("object"==typeof o||"function"==typeof o)){if(e)return u(e,o)}else if(p){if(t)return y(t,o)}else if(n)return function(e,t){var n=v(e,t);return n&&n.value}(n,o)},has:function(o){if(a&&o&&("object"==typeof o||"function"==typeof o)){if(e)return c(e,o)}else if(p){if(t)return x(t,o)}else if(n)return function(e,t){return!!v(e,t)}(n,o);return!1},set:function(o,r){a&&o&&("object"==typeof o||"function"==typeof o)?(e||(e=new a),s(e,o,r)):p?(t||(t=new p),l(t,o,r)):(n||(n={key:{},next:null}),function(e,t,n){var o=v(e,t);o?o.value=n:e.next={key:t,next:e.next,value:n}}(n,o,r))}};return o};export{M as s};
