(self.webpackChunkgoit_js_hw_11_promisification=self.webpackChunkgoit_js_hw_11_promisification||[]).push([[179],{579:(e,t,n)=>{"use strict";n(763),n(79),n(597)},763:()=>{var e=function(e){return new Promise((function(t){setTimeout((function(){t(e)}),e)}))},t=function(e){return console.log("Resolved after ".concat(e,"ms"))};e(2e3).then(t),e(1e3).then(t),e(1500).then(t)},79:()=>{function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function t(t){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?e(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],o=function(e,n){return Promise.resolve(e.map((function(e){return e.name===n?t(t({},e),{},{active:!e.active}):e})))},c=function(e){return console.table(e)};o(r,"Mango").then(c),o(r,"Lux").then(c)},597:()=>{var e=function(e){return new Promise((function(t,n){var r,o,c=(r=200,o=500,Math.floor(Math.random()*(o-r+1)+r));setTimeout((function(){Math.random()>.3&&t({id:e.id,time:c}),n(e.id)}),c)}))},t=function(e){var t=e.id,n=e.time;console.log("Transaction ".concat(t," processed in ").concat(n,"ms"))},n=function(e){console.warn("Error processing transaction ".concat(e,". Please try again later."))};e({id:70,amount:150}).then(t).catch(n),e({id:71,amount:230}).then(t).catch(n),e({id:72,amount:75}).then(t).catch(n),e({id:73,amount:100}).then(t).catch(n)}},0,[[579,666]]]);
//# sourceMappingURL=main.bb4c0ca34fe3c340bb89.js.map