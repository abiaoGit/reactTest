webpackJsonp([3],{134:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c,r,i,d=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(0),f=o(s),p=(n(14),n(53)),b=n(13),m=n(144),h=o(m);n(145);var v=(c=(0,p.inject)("routing"),r=(0,p.inject)("publicStore"),c(i=r(i=(0,p.observer)(i=function(e){function t(e){u(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.state={data:1},(0,b.autorun)(function(){console.log("autorun"),console.log(h.default.count)});var o=(0,b.computed)(function(){console.log("computed"),h.default.sumCount=h.default.count+h.default.needCount});o.observe();return n}return l(t,e),d(t,[{key:"add",value:function(){h.default.add()}},{key:"less",value:function(){h.default.less()}},{key:"needAdd",value:function(){h.default.needAdd()}},{key:"needLess",value:function(){h.default.needLess()}},{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement("h1",null,"demo1：按需加载"),f.default.createElement("div",{className:"con"},f.default.createElement("span",null,"count：",h.default.count)),f.default.createElement("div",{className:"btnCon"},f.default.createElement("button",{className:"fz14",onClick:this.add},"+"),f.default.createElement("button",{className:"ml10 fz14",onClick:this.less},"-")),f.default.createElement("div",{className:"con"},f.default.createElement("span",null,"needCount：",h.default.needCount)),f.default.createElement("div",{className:"btnCon"},f.default.createElement("button",{className:"fz14",onClick:this.needAdd},"+"),f.default.createElement("button",{className:"ml10 fz14",onClick:this.needLess},"-")),f.default.createElement("div",{className:"con"},f.default.createElement("span",null,"sumCount：",h.default.sumCount)))}}]),t}(s.Component))||i)||i)||i);t.default=v},144:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(13);console.log("computed",o.computed);var u=(0,o.observable)({count:1,needCount:1,add:o.action.bound(function(){this.count++}),less:o.action.bound(function(){this.count--}),needAdd:o.action.bound(function(){this.needCount++}),needLess:o.action.bound(function(){this.needCount--})});t.default=u},145:function(e,t,n){var o=n(146);"string"==typeof o&&(o=[[e.i,o,""]]);var u={};u.transform=void 0;n(55)(o,u);o.locals&&(e.exports=o.locals)},146:function(e,t,n){t=e.exports=n(54)(void 0),t.push([e.i,"body,html{width:100%;height:100%;background:#fff}h1{height:40px;line-height:40px;font-size:20px}.con,h1{text-align:center}.con{line-height:30px;font-size:24px}.btnCon{text-align:center;padding-top:20px}.btnCon button{width:50px;height:50px;line-height:10px;background-color:#ccc;font-size:50px}",""])}});