/*!
 * Font Awesome Free 5.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
!function(){"use strict";function t(t){var e=et.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function e(t){return""===t||"false"!==t&&("true"===t||t)}function n(t){return~xt.indexOf(t)}function r(t){try{t()}catch(e){if(!bt)throw e}}function i(t){if(t&&at){var e=et.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=et.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return et.head.insertBefore(e,r),t}}function a(){return++Ft}function o(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function s(t){return t.classList?o(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(t){return t})}function f(t,e){var r=e.split("-"),i=r[0],a=r.slice(1).join("-");return i!==t||""===a||n(a)?null:a}function l(t){return(""+t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function u(t){return Object.keys(t||{}).reduce(function(e,n){return e+(n+'="')+l(t[n])+'" '},"").trim()}function c(t){return Object.keys(t||{}).reduce(function(e,n){return e+(n+": ")+t[n]+";"},"")}function d(t){return t.size!==It.size||t.x!==It.x||t.y!==It.y||t.rotate!==It.rotate||t.flipX||t.flipY}function m(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth;return{outer:{transform:"translate("+n/2+" 256)"},inner:{transform:"translate("+32*e.x+", "+32*e.y+") "+" "+("scale("+e.size/16*(e.flipX?-1:1)+", "+e.size/16*(e.flipY?-1:1)+") ")+" "+("rotate("+e.rotate+" 0 0)")},path:{transform:"translate("+r/2*-1+" -256)"}}}function g(t){var e=t.transform,n=t.width,r=n===undefined?ft:n,i=t.height,a=i===undefined?ft:i,o=t.startCentered,s=o!==undefined&&o,f="";return f+=s&&ot?"translate("+(e.x/Ht-r/2)+"em, "+(e.y/Ht-a/2)+"em) ":s?"translate(calc(-50% + "+e.x/Ht+"em), calc(-50% + "+e.y/Ht+"em)) ":"translate("+e.x/Ht+"em, "+e.y/Ht+"em) ",f+="scale("+e.size/Ht*(e.flipX?-1:1)+", "+e.size/Ht*(e.flipY?-1:1)+") ",f+="rotate("+e.rotate+"deg) "}function h(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,o=t.iconName,s=t.transform,f=t.symbol,l=t.title,u=t.extra,c=t.watchable,d=c!==undefined&&c,m=r.found?r:n,g=m.width,h=m.height,p="fa-w-"+Math.ceil(g/h*16),b=[Lt.replacementClass,o?Lt.familyPrefix+"-"+o:"",p].filter(function(t){return-1===u.classes.indexOf(t)}).concat(u.classes).join(" "),v={children:[],attributes:At({},u.attributes,{"data-prefix":i,"data-icon":o,"class":b,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+g+" "+h})};d&&(v.attributes[ct]=""),l&&v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-"+a()},children:[l]});var y=At({},v,{prefix:i,iconName:o,main:n,mask:r,transform:s,symbol:f,styles:u.styles}),w=r.found&&n.found?Yt(y):Bt(y),x=w.children,k=w.attributes;return y.children=x,y.attributes=k,f?Wt(y):Dt(y)}function p(t){var e=t.content,n=t.width,r=t.height,i=t.transform,a=t.title,o=t.extra,s=t.watchable,f=s!==undefined&&s,l=At({},o.attributes,a?{title:a}:{},{"class":o.classes.join(" ")});f&&(l[ct]="");var u=At({},o.styles);d(i)&&(u.transform=g({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=c(u);m.length>0&&(l.style=m);var h=[];return h.push({tag:"span",attributes:l,children:[e]}),a&&h.push({tag:"span",attributes:{"class":"sr-only"},children:[a]}),h}function b(t){var e=t.content,n=t.title,r=t.extra,i=At({},r.attributes,n?{title:n}:{},{"class":r.classes.join(" ")}),a=c(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{"class":"sr-only"},children:[n]}),o}function v(t,e){return te[t][e]}function y(t,e){return ee[t][e]}function w(t){return ne[t]||{prefix:null,iconName:null}}function x(t){return t.reduce(function(t,e){var n=f(Lt.familyPrefix,e);if(ie[e])t.prefix=e;else if(n){var r="fa"===t.prefix?w(n):{};t.iconName=r.iconName||n,t.prefix=r.prefix||t.prefix}else e!==Lt.replacementClass&&0!==e.indexOf("fa-w-")&&t.rest.push(e);return t},ae())}function k(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}function C(t){var e=t.tag,n=t.attributes,r=n===undefined?{}:n,i=t.children,a=i===undefined?[]:i;return"string"==typeof t?l(t):"<"+e+" "+u(r)+">"+a.map(C).join("")+"</"+e+">"}function A(t){return"string"==typeof(t.getAttribute?t.getAttribute(ct):null)}function N(){return!0===Lt.autoReplaceSvg?se.replace:se[Lt.autoReplaceSvg]||se.replace}function z(t,e){var n="function"==typeof e?e:oe;0===t.length?n():(tt.requestAnimationFrame||function(t){return t()})(function(){var e=N(),r=Gt.begin("mutate");t.map(e),r(),n()})}function M(t){fe=!0,t(),fe=!1}function S(t){if(nt&&Lt.observeMutations){var e=t.treeCallback,n=t.nodeCallback,r=t.pseudoElementsCallback,i=t.observeMutationsRoot,a=i===undefined?et.body:i;le=new nt(function(t){fe||o(t).forEach(function(t){if("childList"===t.type&&t.addedNodes.length>0&&!A(t.addedNodes[0])&&(Lt.searchPseudoElements&&r(t.target),e(t.target)),"attributes"===t.type&&t.target.parentNode&&Lt.searchPseudoElements&&r(t.target.parentNode),"attributes"===t.type&&A(t.target)&&~wt.indexOf(t.attributeName))if("class"===t.attributeName){var i=x(s(t.target)),a=i.prefix,o=i.iconName;a&&t.target.setAttribute("data-prefix",a),o&&t.target.setAttribute("data-icon",o)}else n(t.target)})}),at&&le.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function L(){le&&le.disconnect()}function E(t){for(var e="",n=0;n<t.length;n++){e+=("000"+t.charCodeAt(n).toString(16)).slice(-4)}return e}function O(t){var e=ce(t),n=e.iconName,r=e.prefix,i=e.rest,a=ue(t),o=me(t),s=ge(t),f=he(t),l=pe(t);return{iconName:n,title:t.getAttribute("title"),prefix:r,transform:o,symbol:s,mask:l,extra:{classes:i,styles:a,attributes:f}}}function P(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=(new Error).stack}function j(t,e){var n={found:!1,width:512,height:512,icon:ke};if(t&&e&&Ce[e]&&Ce[e][t]){var r=Ce[e][t];n={found:!0,width:r[0],height:r[1],icon:{tag:"path",attributes:{fill:"currentColor",d:r.slice(4)[0]}}}}else if(t&&e&&!Lt.showMissingIcons)throw new P("Icon is missing for prefix "+e+" with icon name "+t);return n}function R(t,e){var n=e.iconName,r=e.title,i=e.prefix,a=e.transform,o=e.symbol,s=e.mask,f=e.extra;return[t,h({icons:{main:j(n,i),mask:j(s.iconName,s.prefix)},prefix:i,iconName:n,transform:a,symbol:o,mask:s,title:r,extra:f,watchable:!0})]}function T(t,e){var n=e.title,r=e.transform,i=e.extra,a=null,o=null;if(ot){var s=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();a=f.width/s,o=f.height/s}return Lt.autoA11y&&!n&&(i.attributes["aria-hidden"]="true"),[t,p({content:t.innerHTML,width:a,height:o,transform:r,title:n,extra:i,watchable:!0})]}function H(t){var e=O(t);return~e.extra.classes.indexOf(Ae)?T(t,e):R(t,e)}function I(t){if(at){var e=Gt.begin("searchPseudoElements");M(function(){o(t.querySelectorAll("*")).filter(function(t){return!(t.parentNode===document.head||~pt.indexOf(t.tagName.toUpperCase())||t.getAttribute(dt)||t.parentNode&&"svg"===t.parentNode.tagName)}).forEach(function(t){[":before",":after"].forEach(function(e){var n=o(t.children).filter(function(t){return t.getAttribute(dt)===e})[0],r=tt.getComputedStyle(t,e),i=r.getPropertyValue("font-family").match(Ne),a=r.getPropertyValue("font-weight");if(n&&!i)t.removeChild(n);else if(i){var s=r.getPropertyValue("content"),f=~["Light","Regular","Solid","Brands"].indexOf(i[1])?ze[i[1]]:Me[a],l=v(f,E(3===s.length?s.substr(1,1):s));if(!n||n.getAttribute(mt)!==f||n.getAttribute(gt)!==l){n&&t.removeChild(n);var u=be.extra;u.attributes[dt]=e;var c=h(At({},be,{icons:{main:j(l,f),mask:ae()},prefix:f,iconName:l,extra:u,watchable:!0})),d=et.createElement("svg");":before"===e?t.insertBefore(d,t.firstChild):t.appendChild(d),d.outerHTML=c.map(function(t){return C(t)}).join("\n")}}})})}),e()}}function F(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;if(at){var n=et.documentElement.classList,r=function(t){return n.add(ht+"-"+t)},i=function(t){return n.remove(ht+"-"+t)},a=Object.keys(Ce),s=["."+Ae+":not(["+ct+"])"].concat(a.map(function(t){return"."+t+":not(["+ct+"])"})).join(", ");if(0!==s.length){var f=o(t.querySelectorAll(s));if(f.length>0){r("pending"),i("complete");var l=Gt.begin("onTree"),u=f.reduce(function(t,e){try{var n=H(e);n&&t.push(n)}catch(r){bt||r instanceof P&&console.error(r)}return t},[]);l(),z(u,function(){r("active"),r("complete"),i("pending"),"function"==typeof e&&e()})}}}}function _(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null,n=H(t);n&&z([n],e)}function Y(t,e){var n=Object.keys(e).reduce(function(t,n){var r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{});"function"==typeof Ot.hooks.addPack?Ot.hooks.addPack(t,n):Ot.styles[t]=At({},Ot.styles[t]||{},n),"fas"===t&&Y("fa",e)}function B(t){return{found:!0,width:t[0],height:t[1],icon:{tag:"path",attributes:{fill:"currentColor",d:t.slice(4)[0]}}}}function D(){Lt.autoAddCss&&!Pe&&(i(Le()),Pe=!0)}function W(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(t){return C(t)})}}),Object.defineProperty(t,"node",{get:function(){if(at){var e=et.createElement("div");return e.innerHTML=t.html,e.children}}}),t}function X(t){var e=t.prefix,n=e===undefined?"fa":e,r=t.iconName;if(r)return k(Ee.definitions,n,r)||k(Ot.styles,n,r)}function q(t){return function(e){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},r=(e||{}).icon?e:X(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:X(i||{})),t(r,At({},n,{mask:i}))}}function U(){it&&(tt.FontAwesome||(tt.FontAwesome=He),Tt(function(){Ie(),S({treeCallback:F,nodeCallback:_,pseudoElementsCallback:I})})),Ot.hooks=At({},Ot.hooks,{addPack:function(t,e){Ot.styles[t]=At({},Ot.styles[t]||{},e),re(),Ie()},addShims:function(t){var e;(e=Ot.shims).push.apply(e,zt(t)),re(),Ie()}})}var V=function(){},K={},G={},J=null,Q={mark:V,measure:V};try{"undefined"!=typeof window&&(K=window),"undefined"!=typeof document&&(G=document),"undefined"!=typeof MutationObserver&&(J=MutationObserver),"undefined"!=typeof performance&&(Q=performance)}catch(Fe){}var Z=(K.navigator||{}).userAgent,$=Z===undefined?"":Z,tt=K,et=G,nt=J,rt=Q,it=!!tt.document,at=!!et.documentElement&&!!et.head&&"function"==typeof et.addEventListener&&"function"==typeof et.createElement,ot=~$.indexOf("MSIE")||~$.indexOf("Trident/"),st="___FONT_AWESOME___",ft=16,lt="fa",ut="svg-inline--fa",ct="data-fa-i2svg",dt="data-fa-pseudo-element",mt="data-prefix",gt="data-icon",ht="fontawesome-i2svg",pt=["HTML","HEAD","STYLE","SCRIPT"],bt=function(){try{return!0}catch(Fe){return!1}}(),vt=[1,2,3,4,5,6,7,8,9,10],yt=vt.concat([11,12,13,14,15,16,17,18,19,20]),wt=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],xt=["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter"].concat(vt.map(function(t){return t+"x"})).concat(yt.map(function(t){return"w-"+t})),kt=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Ct=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),At=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Nt=function(){function t(t,e){var n=[],r=!0,i=!1,a=undefined;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(f){i=!0,a=f}finally{try{!r&&s["return"]&&s["return"]()}finally{if(i)throw a}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),zt=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)},Mt=tt.FontAwesomeConfig||{};et&&"function"==typeof et.querySelector&&[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(function(n){var r=Nt(n,2),i=r[0],a=r[1],o=e(t(i));o!==undefined&&null!==o&&(Mt[a]=o)});var St=At({familyPrefix:lt,replacementClass:ut,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Mt);St.autoReplaceSvg||(St.observeMutations=!1);var Lt=At({},St);tt.FontAwesomeConfig=Lt;var Et=tt||{};Et[st]||(Et[st]={}),Et[st].styles||(Et[st].styles={}),Et[st].hooks||(Et[st].hooks={}),Et[st].shims||(Et[st].shims=[]);var Ot=Et[st],Pt=[],jt=function _e(){et.removeEventListener("DOMContentLoaded",_e),Rt=1,Pt.map(function(t){return t()})},Rt=!1;at&&((Rt=(et.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(et.readyState))||et.addEventListener("DOMContentLoaded",jt));var Tt=function(t){at&&(Rt?setTimeout(t,0):Pt.push(t))},Ht=ft,It={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1},Ft=0,_t={x:0,y:0,width:"100%",height:"100%"},Yt=function(t){var e=t.children,n=t.attributes,r=t.main,i=t.mask,o=t.transform,s=r.width,f=r.icon,l=i.width,u=i.icon,c=m({transform:o,containerWidth:l,iconWidth:s}),d={tag:"rect",attributes:At({},_t,{fill:"white"})},g={tag:"g",attributes:At({},c.inner),children:[{tag:"path",attributes:At({},f.attributes,c.path,{fill:"black"})}]},h={tag:"g",attributes:At({},c.outer),children:[g]},p="mask-"+a(),b="clip-"+a(),v={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:[u]},{tag:"mask",attributes:At({},_t,{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[d,h]}]};return e.push(v,{tag:"rect",attributes:At({fill:"currentColor","clip-path":"url(#"+b+")",mask:"url(#"+p+")"},_t)}),{children:e,attributes:n}},Bt=function(t){var e=t.children,n=t.attributes,r=t.main,i=t.transform,a=c(t.styles);if(a.length>0&&(n.style=a),d(i)){var o=m({transform:i,containerWidth:r.width,iconWidth:r.width});e.push({tag:"g",attributes:At({},o.outer),children:[{tag:"g",attributes:At({},o.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:At({},r.icon.attributes,o.path)}]}]})}else e.push(r.icon);return{children:e,attributes:n}},Dt=function(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,a=t.styles,o=t.transform;if(d(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=c(At({},a,{"transform-origin":s.x+o.x/16+"em "+(s.y+o.y/16)+"em"}))}return[{tag:"svg",attributes:i,children:e}]},Wt=function(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,a=t.symbol,o=!0===a?e+"-"+Lt.familyPrefix+"-"+n:a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:At({},i,{id:o}),children:r}]}]},Xt=function(){},qt=Lt.measurePerformance&&rt&&rt.mark&&rt.measure?rt:{mark:Xt,measure:Xt},Ut='FA "5.1.1"',Vt=function(t){return qt.mark(Ut+" "+t+" begins"),function(){return Kt(t)}},Kt=function(t){qt.mark(Ut+" "+t+" ends"),qt.measure(Ut+" "+t,Ut+" "+t+" begins",Ut+" "+t+" ends")},Gt={begin:Vt,end:Kt},Jt=function(t,e){return function(n,r,i,a){return t.call(e,n,r,i,a)}},Qt=function(t,e,n,r){var i,a,o,s=Object.keys(t),f=s.length,l=r!==undefined?Jt(e,r):e;for(n===undefined?(i=1,o=t[s[0]]):(i=0,o=n);i<f;i++)o=l(o,t[a=s[i]],a,t);return o},Zt=Ot.styles,$t=Ot.shims,te={},ee={},ne={},re=function(){var t=function(t){return Qt(Zt,function(e,n,r){return e[r]=Qt(n,t,{}),e},{})};te=t(function(t,e,n){return t[e[3]]=n,t}),ee=t(function(t,e,n){var r=e[2];return t[n]=n,r.forEach(function(e){t[e]=n}),t});var e="far"in Zt;ne=Qt($t,function(t,n){var r=n[0],i=n[1],a=n[2];return"far"!==i||e||(i="fas"),t[r]={prefix:i,iconName:a},t},{})};re();var ie=Ot.styles,ae=function(){return{prefix:null,iconName:null,rest:[]}},oe=function(){},se={replace:function(t){var e=t[0],n=t[1].map(function(t){return C(t)}).join("\n");if(e.parentNode&&e.outerHTML)e.outerHTML=n+(Lt.keepOriginalSource&&"svg"!==e.tagName.toLowerCase()?"<!-- "+e.outerHTML+" -->":"");else if(e.parentNode){var r=document.createElement("span");e.parentNode.replaceChild(r,e),r.outerHTML=n}},nest:function(t){var e=t[0],n=t[1];if(~s(e).indexOf(Lt.replacementClass))return se.replace(t);var r=new RegExp(Lt.familyPrefix+"-.*");delete n[0].attributes.style;var i=n[0].attributes["class"].split(" ").reduce(function(t,e){return e===Lt.replacementClass||e.match(r)?t.toSvg.push(e):t.toNode.push(e),t},{toNode:[],toSvg:[]});n[0].attributes["class"]=i.toSvg.join(" ");var a=n.map(function(t){return C(t)}).join("\n");e.setAttribute("class",i.toNode.join(" ")),e.setAttribute(ct,""),e.innerHTML=a}},fe=!1,le=null,ue=function(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(t,e){var n=e.split(":"),r=n[0],i=n.slice(1);return r&&i.length>0&&(t[r]=i.join(":").trim()),t},{})),n},ce=function(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==undefined?t.innerText.trim():"",i=x(s(t));return e&&n&&(i.prefix=e,i.iconName=n),i.prefix&&r.length>1?i.iconName=y(i.prefix,t.innerText):i.prefix&&1===r.length&&(i.iconName=v(i.prefix,E(t.innerText))),i},de=function(t){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce(function(t,e){var n=e.toLowerCase().split("-"),r=n[0],i=n.slice(1).join("-");if(r&&"h"===i)return t.flipX=!0,t;if(r&&"v"===i)return t.flipY=!0,t;if(i=parseFloat(i),isNaN(i))return t;switch(r){case"grow":t.size=t.size+i;break;case"shrink":t.size=t.size-i;break;case"left":t.x=t.x-i;break;case"right":t.x=t.x+i;break;case"up":t.y=t.y-i;break;case"down":t.y=t.y+i;break;case"rotate":t.rotate=t.rotate+i}return t},e):e},me=function(t){return de(t.getAttribute("data-fa-transform"))},ge=function(t){var e=t.getAttribute("data-fa-symbol");return null!==e&&(""===e||e)},he=function(t){var e=o(t.attributes).reduce(function(t,e){return"class"!==t.name&&"style"!==t.name&&(t[e.name]=e.value),t},{}),n=t.getAttribute("title");return Lt.autoA11y&&(n?e["aria-labelledby"]=Lt.replacementClass+"-title-"+a():e["aria-hidden"]="true"),e},pe=function(t){var e=t.getAttribute("data-fa-mask");return e?x(e.split(" ").map(function(t){return t.trim()})):ae()},be={iconName:null,title:null,prefix:null,transform:It,symbol:!1,mask:null,extra:{classes:[],styles:{},attributes:{}}};P.prototype=Object.create(Error.prototype),P.prototype.constructor=P;var ve={fill:"currentColor"},ye={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},we={tag:"path",attributes:At({},ve,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},xe=At({},ye,{attributeName:"opacity"}),ke={tag:"g",children:[we,{tag:"circle",attributes:At({},ve,{cx:"256",cy:"364",r:"28"}),children:[{tag:"animate",attributes:At({},ye,{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:At({},xe,{values:"1;0;1;1;0;1;"})}]},{tag:"path",attributes:At({},ve,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:[{tag:"animate",attributes:At({},xe,{values:"1;0;0;0;0;1;"})}]},{tag:"path",attributes:At({},ve,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:At({},xe,{values:"0;0;1;1;0;0;"})}]}]},Ce=Ot.styles,Ae="fa-layers-text",Ne=/Font Awesome 5 (Solid|Regular|Light|Brands|Free|Pro)/,ze={Solid:"fas",Regular:"far",Light:"fal",Brands:"fab"},Me={900:"fas",400:"far",300:"fal"},Se="svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1em}.svg-inline--fa.fa-stack-2x{height:2em;width:2em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}",Le=function(){var t=lt,e=ut,n=Lt.familyPrefix,r=Lt.replacementClass,i=Se;if(n!==t||r!==e){var a=new RegExp("\\."+t+"\\-","g"),o=new RegExp("\\."+e,"g");i=i.replace(a,"."+n+"-").replace(o,"."+r)}return i},Ee=new(function(){function t(){kt(this,t),this.definitions={}}return Ct(t,[{key:"add",value:function(){for(var t=this,e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(e){t.definitions[e]=At({},t.definitions[e]||{},i[e]),Y(e,i[e]),re()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,e){var n=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(n).map(function(e){var r=n[e],i=r.prefix,a=r.iconName,o=r.icon;t[i]||(t[i]={}),t[i][a]=o}),t}}]),t}()),Oe=function(){Lt.autoReplaceSvg=!1,Lt.observeMutations=!1,L()},Pe=!1,je={i2svg:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};if(at){D();var e=t.node,n=e===undefined?et:e,r=t.callback,i=r===undefined?function(){}:r;Lt.searchPseudoElements&&I(n),F(n,i)}},css:Le,insertCss:function(){Pe||(i(Le()),Pe=!0)},watch:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},e=t.autoReplaceSvgRoot,n=t.observeMutationsRoot;!1===Lt.autoReplaceSvg&&(Lt.autoReplaceSvg=!0),Lt.observeMutations=!0,Tt(function(){Ie({autoReplaceSvgRoot:e}),S({treeCallback:F,nodeCallback:_,pseudoElementsCallback:I,observeMutationsRoot:n})})}},Re={transform:function(t){return de(t)}},Te=q(function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},n=e.transform,r=n===undefined?It:n,i=e.symbol,o=i!==undefined&&i,s=e.mask,f=s===undefined?null:s,l=e.title,u=l===undefined?null:l,c=e.classes,d=c===undefined?[]:c,m=e.attributes,g=m===undefined?{}:m,p=e.styles,b=p===undefined?{}:p;if(t){var v=t.prefix,y=t.iconName,w=t.icon;return W(At({type:"icon"},t),function(){return D(),Lt.autoA11y&&(u?g["aria-labelledby"]=Lt.replacementClass+"-title-"+a():g["aria-hidden"]="true"),h({icons:{main:B(w),mask:f?B(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:v,iconName:y,transform:At({},It,r),symbol:o,title:u,extra:{attributes:g,styles:b,classes:d}})})}}),He={noAuto:Oe,config:Lt,dom:je,library:Ee,parse:Re,findIconDefinition:X,icon:Te,text:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},n=e.transform,r=n===undefined?It:n,i=e.title,a=i===undefined?null:i,o=e.classes,s=o===undefined?[]:o,f=e.attributes,l=f===undefined?{}:f,u=e.styles,c=u===undefined?{}:u;return W({type:"text",content:t},function(){return D(),p({content:t,transform:At({},It,r),title:a,extra:{attributes:l,styles:c,classes:[Lt.familyPrefix+"-layers-text"].concat(zt(s))}})})},counter:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},n=e.title,r=n===undefined?null:n,i=e.classes,a=i===undefined?[]:i,o=e.attributes,s=o===undefined?{}:o,f=e.styles,l=f===undefined?{}:f;return W({type:"counter",content:t},function(){return D(),b({content:t.toString(),title:r,extra:{attributes:s,styles:l,classes:[Lt.familyPrefix+"-layers-counter"].concat(zt(a))}})})},layer:function(t){return W({type:"layer"},function(){D();var e=[];return t(function(t){Array.isArray(t)?t.map(function(t){e=e.concat(t.abstract)}):e=e.concat(t.abstract)}),[{tag:"span",attributes:{"class":Lt.familyPrefix+"-layers"},children:e}]})},toHtml:C},Ie=function(){var t=(arguments.length>0&&arguments[0]!==undefined?arguments[0]:{}).autoReplaceSvgRoot,e=t===undefined?et:t;Object.keys(Ot.styles).length>0&&at&&Lt.autoReplaceSvg&&He.dom.i2svg({node:e})};r(U)}();