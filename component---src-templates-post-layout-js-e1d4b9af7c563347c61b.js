(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[468],{2102:function(e,t,r){var n=r(2632);e.exports={MDXRenderer:n}},2632:function(e,t,r){var n=r(861),o=r(3515),u=r(8416),l=r(7071),c=["scope","children"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=r(7294),p=r(4983).mdx,f=r(6948).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,u=l(e,c),s=f(t),d=i.useMemo((function(){if(!r)return null;var e=a({React:i,mdx:p},s),t=Object.keys(e),u=t.map((function(t){return e[t]}));return o(Function,["_fn"].concat(t,[""+r])).apply(void 0,[{}].concat(n(u)))}),[r,t]);return i.createElement(d,a({},u))}},3682:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(7294),o=r(5403),u=r(1597),l=function(e){var t=e.currentIndex,r=void 0===t?0:t,o=e.total,l=void 0===o?1:o,c=e.list,s=void 0===c?[]:c;function a(e,t){t.preventDefault();var n="";n="next"===e?s[r-1]:s[r+1],(0,u.navigate)("../"+n.slug.split("/").pop())}return n.createElement("nav",null,n.createElement("button",{disabled:r+1>=l,onClick:function(e){return a("prev",e)}},"<"),n.createElement("button",{disabled:r-1<0,onClick:function(e){return a("next",e)}},">"))},c=r(2102),s=function(e){var t,r=e.data,s=r.mdx,a=(null===(t=r.allMdx)||void 0===t?void 0:t.nodes)||[],i=s.frontmatter,p=i.title,f=i.description,d=a.length,x=a.findIndex((function(e){return e.id===s.id}));return n.createElement(o.Z,{title:p,description:f},n.createElement("section",{className:"post-layout-module--post-page--zEyph"},n.createElement("header",{className:"post-layout-module--post-header--G9Eui"},n.createElement("h2",null,n.createElement(u.Link,{to:"/blog"}," Blog")," > ",p),n.createElement(l,{currentIndex:x,total:d,list:a})),n.createElement("section",{className:"post-layout-module--content--hKZP-"},n.createElement(c.MDXRenderer,null,s.body)),n.createElement("footer",{className:"post-layout-module--post-footer--mf6Jj"},n.createElement(l,{currentIndex:x,total:d,list:a}))))}},3405:function(e,t,r){var n=r(3897);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3515:function(e,t,r){var n=r(6015),o=r(9617);function u(t,r,l){return o()?(e.exports=u=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=u=function(e,t,r){var o=[null];o.push.apply(o,t);var u=new(Function.bind.apply(e,o));return r&&n(u,r.prototype),u},e.exports.__esModule=!0,e.exports.default=e.exports),u.apply(null,arguments)}e.exports=u,e.exports.__esModule=!0,e.exports.default=e.exports},8416:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},9617:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,r){var n=r(3405),o=r(9498),u=r(6116),l=r(2281);e.exports=function(e){return n(e)||o(e)||u(e)||l()},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-templates-post-layout-js-e1d4b9af7c563347c61b.js.map