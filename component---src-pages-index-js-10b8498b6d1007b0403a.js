"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[678],{6296:function(e,t,a){a.d(t,{G:function(){return O},L:function(){return g},M:function(){return E},P:function(){return v},S:function(){return R},_:function(){return o},a:function(){return s},b:function(){return c},g:function(){return d},h:function(){return l}});var r=a(7294),n=(a(2369),a(5697)),i=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,i,o,l){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const u=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=o(e,u);return r.createElement(r.Fragment,null,r.createElement(p,s({},a)),t,null)},m=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:a,loading:n,alt:i="",shouldLoad:l}=e,c=o(e,m);return r.createElement("img",s({},c,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:i}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,i=o(e,h);const l=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(f,s({},i,t,{sizes:l,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return r.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:l})})),c):c};var w;f.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const b=["fallback"],v=function(e){let{fallback:t}=e,a=o(e,b);return t?r.createElement(y,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};v.displayName="Placeholder",v.propTypes={fallback:n.string,sources:null==(w=y.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const E=function(e){return r.createElement(r.Fragment,null,r.createElement(y,s({},e)),r.createElement("noscript",null,r.createElement(y,s({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=y.propTypes;const L=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:i().object.isRequired,alt:L},x=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],k=["style","className"],S=new Set;let _,T;const I=function(e){let{as:t="div",image:n,style:i,backgroundColor:c,className:d,class:u,onStartLoad:p,onLoad:g,onError:m}=e,h=o(e,x);const{width:f,height:y,layout:w}=n,b=function(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(f,y,w),{style:v,className:E}=b,L=o(b,k),C=(0,r.useRef)(),I=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);u&&(d=u);const O=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,f,y);return(0,r.useEffect)((()=>{_||(_=Promise.all([a.e(774),a.e(344)]).then(a.bind(a,9344)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return T=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function t(){document.removeEventListener("load",t),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)})),void S.add(I);if(T&&S.has(I))return;let t,r;return _.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;C.current&&(C.current.innerHTML=a(s({isLoading:!0,isLoaded:S.has(I),image:n},h)),S.has(I)||(t=requestAnimationFrame((()=>{C.current&&(r=o(C.current,I,S,i,p,g,m))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{S.has(I)&&T&&(C.current.innerHTML=T(s({isLoading:S.has(I),isLoaded:S.has(I),image:n},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,s({},L,{style:s({},v,i,{backgroundColor:c}),className:E+(d?" "+d:""),ref:C,dangerouslySetInnerHTML:{__html:O},suppressHydrationWarning:!0}))},O=(0,r.memo)((function(e){return e.image?(0,r.createElement)(I,e):null}));O.propTypes=C,O.displayName="GatsbyImage";const A=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],N=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},q=new Set(["fixed","fullWidth","constrained"]),z={src:i().string.isRequired,alt:L,width:N,height:N,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!q.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},R=(j=O,function(e){let{src:t,__imageData:a,__error:n}=e,i=o(e,A);return n&&console.warn(n),a?r.createElement(j,s({image:a},i)):(console.warn("Image not loaded",t),null)});var j;R.displayName="StaticImage",R.propTypes=z},2369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,r=!1;for(let n=0;n<e.length;n++){const i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},3925:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var r=a(7294),n=a(2352),i=a(6296),s=a(5230);var o=()=>r.createElement(s.Z,null,r.createElement("div",{className:"index-module--hero--7f78c"},r.createElement("section",{className:"index-module--hero-text-section--52d91"},r.createElement("h1",null,r.createElement("span",null,"My name is"),r.createElement("span",null,"Aishat Liasu")),r.createElement("h2",null,"I'm a Full Stack Web Developer and Software Engineer"),r.createElement(n.Link,{to:"/about"},"About Me")),r.createElement(i.S,{src:"../images/aishat_liasu.png",alt:"A masked selfie of Aishat somewhere in a Mosque at Ikeja, Lagos",as:"section",className:"index-module--hero-img-section--dfa13",style:{overflow:"visible"},__imageData:a(4578)})))},4578:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8e8","images":{"fallback":{"src":"/static/29353cd29c5c966180918772d708b790/3fd60/aishat_liasu.png","srcSet":"/static/29353cd29c5c966180918772d708b790/4aa0c/aishat_liasu.png 168w,\\n/static/29353cd29c5c966180918772d708b790/f41cc/aishat_liasu.png 337w,\\n/static/29353cd29c5c966180918772d708b790/3fd60/aishat_liasu.png 673w","sizes":"(min-width: 673px) 673px, 100vw"},"sources":[{"srcSet":"/static/29353cd29c5c966180918772d708b790/b4076/aishat_liasu.webp 168w,\\n/static/29353cd29c5c966180918772d708b790/c37ae/aishat_liasu.webp 337w,\\n/static/29353cd29c5c966180918772d708b790/de50d/aishat_liasu.webp 673w","type":"image/webp","sizes":"(min-width: 673px) 673px, 100vw"}]},"width":673,"height":730}')}}]);
//# sourceMappingURL=component---src-pages-index-js-10b8498b6d1007b0403a.js.map