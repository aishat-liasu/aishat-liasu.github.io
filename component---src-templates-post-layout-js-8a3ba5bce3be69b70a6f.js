(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[468],{1955:function(e,t,r){const o=r(7927);e.exports={MDXRenderer:o}},7927:function(e,t,r){var o=r(861),n=r(3515),l=r(8416),u=r(215);const s=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const p=r(7294),{mdx:i}=r(4983),{useMDXScope:f}=r(2174);e.exports=function(e){let{scope:t,children:r}=e,l=u(e,s);const c=f(t),d=p.useMemo((()=>{if(!r)return null;const e=a({React:p,mdx:i},c),t=Object.keys(e),l=t.map((t=>e[t]));return n(Function,["_fn"].concat(t,[""+r])).apply(void 0,[{}].concat(o(l)))}),[r,t]);return p.createElement(d,a({},l))}},3844:function(e,t,r){"use strict";var o=r(7294),n=r(2352);t.Z=e=>{let{currentIndex:t=0,total:r=1,list:l=[]}=e;function u(e,r){r.preventDefault();let o="";o="next"===e?l[t-1]:l[t+1],(0,n.navigate)("../"+o.slug.split("/").pop())}return o.createElement("nav",null,o.createElement("button",{disabled:t+1>=r,onClick:e=>u("prev",e)},"<"),o.createElement("button",{disabled:t-1<0,onClick:e=>u("next",e)},">"))}},4009:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var o=r(7294),n=r(5230),l=r(3844),u=r(2352),s=r(1955);var c=e=>{var t;let{data:r}=e;const c=r.mdx,a=(null===(t=r.allMdx)||void 0===t?void 0:t.nodes)||[],{title:p,description:i}=c.frontmatter,f=a.length,d=a.findIndex((e=>e.id===c.id));return o.createElement(n.Z,{title:p,description:i},o.createElement("section",{className:"post-layout-module--post-page--cc4ca"},o.createElement("header",{className:"post-layout-module--post-header--1bd12"},o.createElement("h2",null,o.createElement(u.Link,{to:"/blog"}," Blog")," > ",p),o.createElement(l.Z,{currentIndex:d,total:f,list:a})),o.createElement("section",{className:"post-layout-module--content--84a64"},o.createElement(s.MDXRenderer,null,c.body)),o.createElement("footer",{className:"post-layout-module--post-footer--99fe8"},o.createElement(l.Z,{currentIndex:d,total:f,list:a}))))}},3897:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.__esModule=!0,e.exports.default=e.exports},3405:function(e,t,r){var o=r(3897);e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3515:function(e,t,r){var o=r(6015),n=r(9617);function l(t,r,u){return n()?(e.exports=l=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=l=function(e,t,r){var n=[null];n.push.apply(n,t);var l=new(Function.bind.apply(e,n));return r&&o(l,r.prototype),l},e.exports.__esModule=!0,e.exports.default=e.exports),l.apply(null,arguments)}e.exports=l,e.exports.__esModule=!0,e.exports.default=e.exports},8416:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},9617:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},215:function(e,t,r){var o=r(7071);e.exports=function(e,t){if(null==e)return{};var r,n,l=o(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l},e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,r){var o=r(3405),n=r(9498),l=r(6116),u=r(2281);e.exports=function(e){return o(e)||n(e)||l(e)||u()},e.exports.__esModule=!0,e.exports.default=e.exports},6116:function(e,t,r){var o=r(3897);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-templates-post-layout-js-8a3ba5bce3be69b70a6f.js.map