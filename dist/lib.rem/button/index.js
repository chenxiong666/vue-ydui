/*! vue-ydui v0.2.8 by YDCSS (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}({0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ButtonGroup=t.Button=void 0;var o=n(9),i=r(o),a=n(50),s=r(a);t.Button=i.default,t.ButtonGroup=s.default},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},2:function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=d[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(u(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(u(r.parts[i],t));d[r.id]={id:r.id,refs:1,parts:a}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a=o[1],s=o[2],u=o[3],l={css:a,media:s,sourceMap:u};n[i]?n[i].parts.push(l):t.push(n[i]={id:i,parts:[l]})}return t}function i(e,t){var n=b(),r=h[h.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),h.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=h.indexOf(e);t>=0&&h.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function u(e,t){var n,r,o;if(t.singleton){var i=g++;n=v||(v=s(t)),r=l.bind(null,n,i,!1),o=l.bind(null,n,i,!0)}else n=s(t),r=c.bind(null,n),o=function(){a(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function l(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function c(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var d={},f=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),b=f(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,g=0,h=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=p()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],u=d[s.id];u.refs--,i.push(u)}if(e){var l=o(e);r(l,t)}for(var a=0;a<i.length;a++){var u=i[a];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete d[u.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},3:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(){t||(t=!0,document.addEventListener("touchmove",e))},unlock:function(){t=!1,document.removeEventListener("touchmove",e)}}}(),r=function(e){var t=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,r=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return t.test(e)||n.test(e)||r.test(e)},o=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var n=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===n||"auto"===n)return t;t=t.parentNode}return window},i=function(e,t){return t=t||"",0!=t.replace(/\s/g,"").length&&new RegExp(" "+t+" ").test(" "+e.className+" ")},a=function(e,t){i(e,t)||(e.className=""==e.className?t:e.className+" "+t)},s=function(e,t){if(i(e,t)){for(var n=" "+e.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}};t.pageScroll=n,t.isColor=r,t.getScrollview=o,t.addClass=a,t.removeClass=s},7:function(e,t,n){t=e.exports=n(1)(),t.push([e.id,".m-button{padding:0 .24rem}.btn{height:.7rem;font-size:.26rem;display:inline-block;padding:0 .2rem;box-sizing:content-box}.btn,.btn-block{text-align:center;position:relative;border:none;pointer-events:auto;border-radius:3px}.btn-block{width:100%;display:block;font-size:.36rem;height:1rem;margin-top:.5rem}.btn-primary{background-color:#04be02;color:#fff}.btn-primary:active{background-color:#04ab02}.btn-danger{background-color:#ef4f4f;color:#fff}.btn-danger:active{background-color:#d74747}.btn-warning{background-color:#ffb400;color:#fff}.btn-warning:active{background-color:#e6a200}.btn-disabled{background-color:#ccc;color:#f0f0f0;pointer-events:none}.btn-disabled:active{background-color:#b8b8b8}.btn-hollow{background-color:#fff;color:#454545;border:1px solid #eaeaea}.btn-hollow:active{background-color:#f7f7f7}.hairline .btn-hollow{border:.5px solid #dedede}",""])},8:function(e,t,n){var r=n(7);"string"==typeof r&&(r=[[e.id,r,""]]);n(2)(r,{});r.locals&&(e.exports=r.locals)},9:function(e,t,n){var r,o;n(8),r=n(11);var i=n(10);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,e.exports=r},10:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{class:e.classes,style:{backgroundColor:e.bgcolor,color:e.color},attrs:{disabled:e.disabled}},[e._t("default")],2)},staticRenderFns:[]}},11:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3);t.default={name:"yd-button",props:{disabled:Boolean,type:{type:String,validator:function(e){return["primary","danger","warning","hollow","disabled"].indexOf(e)>-1},default:"primary"},size:{type:String,validator:function(e){return["small","large"].indexOf(e)>-1}},bgcolor:{type:String,validator:function(e){return!e||(0,r.isColor)(e)}},color:{type:String,validator:function(e){return!e||(0,r.isColor)(e)}}},computed:{classes:function(){var e="large"==this.size?"btn-block":"btn",t="btn-"+this.type;return this.disabled&&(t="btn-disabled"),this.bgcolor&&(t=""),e+" "+t}}}},50:function(e,t,n){var r,o;r=n(123);var i=n(103);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,e.exports=r},103:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"m-button"},[e._t("default")],2)},staticRenderFns:[]}},123:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"yd-button-group"}}})});