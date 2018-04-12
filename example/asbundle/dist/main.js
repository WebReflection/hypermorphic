!function(e,t){function n(o){return e[o]||function(o){var r={},s={exports:r};return t[o].call(r,window,n,s,r),e[o]=s.exports}(o)}var o=n(0);o.__esModule&&o.default}([],[function(e,t,n,o){"use strict";const{bind:r}=t(1);r(document.querySelector("main"))`
<h1>hypermorphic 🎉</h1>`},function(e,t,n,o){n.exports="object"==typeof document?t(2):null},function(e,t,n,o){"use strict";
/*! (c) Andrea Giammarchi (ISC) */const r=(e=>e.__esModule?e.default:e)(t(3)),{setup:s}=t(3),l=(e=>e.__esModule?e.default:e)(t(6)),c=(e=>e.__esModule?e.default:e)(t(7)),{content:i,weakly:a}=t(7),u=(e=>e.__esModule?e.default:e)(t(13)),d=(e=>e.__esModule?e.default:e)(t(17)),f=e=>u.bind(e),h=l.define;function p(e){return arguments.length<2?null==e?i("html"):"string"==typeof e?p.wire(null,e):"raw"in e?i("html")(e):"nodeType"in e?p.bind(e):a(e,"html"):("raw"in e?i("html"):p.wire).apply(null,arguments)}p.Component=r,p.bind=f,p.define=h,p.diff=d,p.hyper=p,p.wire=c,s(i),o.Component=r,o.bind=f,o.define=h,o.diff=d,o.hyper=p,o.wire=c,Object.defineProperty(o,"__esModule",{value:!0}).default=p},function(e,t,n,o){"use strict";const{WeakMap:r}=t(4);function s(){return this}Object.defineProperty(o,"__esModule",{value:!0}).default=s,o.setup=function(e){const t=new r,n=Object.create;Object.defineProperties(s,{for:{configurable:!0,value(e,o){return((e,t,o,s)=>{switch(typeof s){case"object":case"function":const l=t.w||(t.w=new r);return l.get(s)||((e,t,n)=>(e.set(t,n),n))(l,s,new e(o));default:const c=t.p||(t.p=n(null));return c[s]||(c[s]=new e(o))}})(this,t.get(e)||(e=>{const n={w:null,p:null};return t.set(e,n),n})(e),e,null==o?"default":o)}}}),Object.defineProperties(s.prototype,{handleEvent:{value(e){const t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e)}},html:l("html",e),svg:l("svg",e),state:l("state",function(){return this.defaultState}),defaultState:{get:()=>({})},setState:{value(e,t){const n=this.state,o="function"==typeof e?e.call(this,n):e;for(const e in o)n[e]=o[e];return!1!==t&&this.render(),this}}})};const l=(e,t)=>{const n="_"+e+"$";return{get(){return this[n]||(this[e]=t.call(this,e))},set(e){Object.defineProperty(this,n,{configurable:!0,value:e})}}}},function(e,t,n,o){"use strict";const{G:r,UID:s}=t(5);let l=r.Event;try{new l("Event")}catch(e){l=function(e){const t=document.createEvent("Event");return t.initEvent(e,!1,!1),t}}o.Event=l;const c=r.Map||function(){const e=[],t=[];return{get:n=>t[e.indexOf(n)],set(n,o){t[e.push(n)-1]=o}}};o.Map=c;const i=r.WeakMap||function(){return{get:e=>e[s],set(e,t){Object.defineProperty(e,s,{configurable:!0,value:t})}}};o.WeakMap=i;const a=r.WeakSet||function(){const e=new i;return{add(t){e.set(t,!0)},has:t=>!0===e.get(t)}};o.WeakSet=a;const u=Array.isArray||(e=>t=>"[object Array]"===e.call(t))({}.toString);o.isArray=u;const d=s.trim||function(){return this.replace(/^\s+|\s+$/g,"")};o.trim=d},function(e,t,n,o){"use strict";const r=document.defaultView;o.G=r;o.ELEMENT_NODE=1;o.ATTRIBUTE_NODE=2;o.TEXT_NODE=3;o.COMMENT_NODE=8;o.DOCUMENT_FRAGMENT_NODE=11;o.VOID_ELEMENTS=/^area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr$/i;o.OWNER_SVG_ELEMENT="ownerSVGElement";o.SVG_NAMESPACE="http://www.w3.org/2000/svg";o.CONNECTED="connected";o.DISCONNECTED="disconnected";o.EXPANDO="_hyper: ";o.SHOULD_USE_TEXT_CONTENT=/^style|textarea$/i;const s="_hyper: "+(Math.random()*new Date|0)+";";o.UID=s;const l="\x3c!--"+s+"--\x3e";o.UIDC=l},function(e,t,n,o){"use strict";const r={},s=[],l=r.hasOwnProperty;let c=0;Object.defineProperty(o,"__esModule",{value:!0}).default={define:(e,t)=>{e in r||(c=s.push(e)),r[e]=t},invoke:(e,t)=>{for(let n=0;n<c;n++){let o=s[n];if(l.call(e,o))return r[o](e[o],t)}}}},function(e,t,n,o){"use strict";const{ELEMENT_NODE:r,SVG_NAMESPACE:s}=t(5),{WeakMap:l,trim:c}=t(4),{fragment:i}=t(8),{append:a,slice:u,unique:d}=t(9),f=(e=>e.__esModule?e.default:e)(t(12)),h=(e=>e.__esModule?e.default:e)(t(13)),p=new l,m=e=>{let t,n,o,r,l;return function(c){c=d(c);let f=r!==c;return f&&(r=c,o=i(document),n="svg"===e?document.createElementNS(s,"svg"):o,l=h.bind(n)),l.apply(null,arguments),f&&("svg"===e&&a(o,u.call(n.childNodes)),t=N(o)),t}},E=(e,t)=>{const n=t.indexOf(":");let o=p.get(e),r=t;return-1<n&&(r=t.slice(n+1),t=t.slice(0,n)||"html"),o||p.set(e,o={}),o[r]||(o[r]=m(t))},N=e=>{const t=e.childNodes,n=t.length,o=[];for(let e=0;e<n;e++){let n=t[e];n.nodeType!==r&&0===c.call(n.textContent).length||o.push(n)}return 1===o.length?o[0]:new f(o)};o.content=m,o.weakly=E,Object.defineProperty(o,"__esModule",{value:!0}).default=((e,t)=>null==e?m(t||"html"):E(e,t||"html"))},function(e,t,n,o){"use strict";o.create=((e,t)=>r(e).createElement(t));const r=e=>e.ownerDocument||e;o.doc=r;o.fragment=(e=>r(e).createDocumentFragment());o.text=((e,t)=>r(e).createTextNode(t))},function(e,t,n,o){"use strict";const{attrName:r,attrSeeker:s}=t(10),{G:l,OWNER_SVG_ELEMENT:c,SVG_NAMESPACE:i,UID:a,UIDC:u}=t(5),{hasAppend:d,hasContent:f,hasDoomedCloneNode:h,hasImportNode:p}=t(11),{create:m,doc:E,fragment:N}=t(8),g=d?(e,t)=>{e.append.apply(e,t)}:(e,t)=>{const n=t.length;for(let o=0;o<n;o++)e.appendChild(t[o])};o.append=g;const _=new RegExp("("+r+"=)(['\"]?)"+u+"\\2","gi"),b=(e,t,n,o)=>"<"+t+n.replace(_,y)+o,y=(e,t,n)=>t+(n||'"')+a+(n||'"');o.createFragment=((e,t)=>(c in e?T:C)(e,t.replace(s,b)));const v=h?e=>{const t=e.cloneNode(),n=e.childNodes||[],o=n.length;for(let e=0;e<o;e++)t.appendChild(v(n[e]));return t}:e=>e.cloneNode(!0),M=p?(e,t)=>e.importNode(t,!0):(e,t)=>v(t);o.importNode=M;const O=[].slice;o.slice=O;o.unique=(e=>w(e));let w=e=>{if(e.propertyIsEnumerable("raw")||/Firefox\/(\d+)/.test((l.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){const e={};w=(t=>{const n="_"+t.join(a);return e[n]||(e[n]=t)})}else w=(e=>e);return w(e)};const C=f?(e,t)=>{const n=m(e,"template");return n.innerHTML=t,n.content}:(e,t)=>{const n=m(e,"template"),o=N(e);if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){const e=RegExp.$1;n.innerHTML="<table>"+t+"</table>",g(o,O.call(n.querySelectorAll(e)))}else n.innerHTML=t,g(o,O.call(n.childNodes));return o},T=f?(e,t)=>{const n=N(e),o=E(e).createElementNS(i,"svg");return o.innerHTML=t,g(n,O.call(o.childNodes)),n}:(e,t)=>{const n=N(e),o=m(e,"div");return o.innerHTML='<svg xmlns="'+i+'">'+t+"</svg>",g(n,O.call(o.firstChild.childNodes)),n}},function(e,t,n,o){"use strict";const r=" \\f\\n\\r\\t",s="[ "+r+"]+[^  \\f\\n\\r\\t\\/>\"'=]+",l="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",c="(?:=(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|[^  \\f\\n\\r\\t\\/>\"'=]+))?)",i=new RegExp(l+s+c+"+)([ "+r+"]*/?>)","g"),a=new RegExp(l+s+c+"*)([ "+r+"]*/>)","g");o.attrName=s,o.attrSeeker=i,o.selfClosing=a},function(e,t,n,o){"use strict";const{create:r,fragment:s,text:l}=t(8),c=s(document),i="append"in c;o.hasAppend=i;const a="content"in r(document,"template");o.hasContent=a,c.appendChild(l(c,"g")),c.appendChild(l(c,""));const u=1===c.cloneNode(!0).childNodes.length;o.hasDoomedCloneNode=u;const d="importNode"in document;o.hasImportNode=d},function(e,t,n,o){"use strict";const{append:r}=t(9),{doc:s,fragment:l}=t(8);function c(e){this.childNodes=e,this.length=e.length,this.first=e[0],this.last=e[this.length-1]}Object.defineProperty(o,"__esModule",{value:!0}).default=c,c.prototype.insert=function(){const e=l(this.first);return r(e,this.childNodes),e},c.prototype.remove=function(){const e=this.first,t=this.last;if(2===this.length)t.parentNode.removeChild(t);else{const n=s(e).createRange();n.setStartBefore(this.childNodes[1]),n.setEndAfter(t),n.deleteContents()}return e}},function(e,t,n,o){"use strict";const{Map:r,WeakMap:s}=t(4),{UIDC:l,VOID_ELEMENTS:c}=t(5),i=(e=>e.__esModule?e.default:e)(t(14)),{createFragment:a,importNode:u,unique:d}=t(9),{selfClosing:f}=t(10),h=new s,p=new r;function m(){const e=arguments.length;for(let t=1;t<e;t++)this[t-1](arguments[t])}const E=f,N=(e,t,n)=>c.test(t)?e:"<"+t+n+"></"+t+">";Object.defineProperty(o,"__esModule",{value:!0}).default=function(e){const t=h.get(this);return t&&t.template===d(e)?m.apply(t.updates,arguments):function(e){e=d(e);const t=p.get(e)||function(e){const t=[],n=e.join(l).replace(E,N),o=a(this,n);i.find(o,t,e.slice());const r={fragment:o,paths:t};return p.set(e,r),r}.call(this,e),n=u(this.ownerDocument,t.fragment),o=i.create(n,t.paths);h.set(this,{template:e,updates:o}),m.apply(o,arguments),this.textContent="",this.appendChild(n)}.apply(this,arguments),this}},function(e,t,n,o){"use strict";const{CONNECTED:r,DISCONNECTED:s,COMMENT_NODE:l,DOCUMENT_FRAGMENT_NODE:c,ELEMENT_NODE:i,TEXT_NODE:a,OWNER_SVG_ELEMENT:u,SHOULD_USE_TEXT_CONTENT:d,UID:f,UIDC:h}=t(5),p=(e=>e.__esModule?e.default:e)(t(3)),m=(e=>e.__esModule?e.default:e)(t(12)),E=(e=>e.__esModule?e.default:e)(t(15)),N=(e=>e.__esModule?e.default:e)(t(16)),g=(e=>e.__esModule?e.default:e)(t(6)),_=(e=>e.__esModule?e.default:e)(t(17)),{text:b}=t(8),{Event:y,WeakSet:v,isArray:M,trim:O}=t(4),{createFragment:w,slice:C}=t(9),T=new v;function D(){}D.prototype=Object.create(null);const x=e=>({html:e}),S=(e,t)=>"ELEMENT_NODE"in e?e:e.constructor===m?1/t<0?t?e.remove():e.last:t?e.insert():e.first:S(e.render(),t),A=(e,t,n)=>{const o=e.childNodes,r=o.length;for(let s=0;s<r;s++){let r=o[s];switch(r.nodeType){case i:j(r,t,n),A(r,t,n);break;case l:r.textContent===f&&(n.shift(),t.push(d.test(e.nodeName)?E.create("text",e):E.create("any",r)));break;case a:d.test(e.nodeName)&&O.call(r.textContent)===h&&(n.shift(),t.push(E.create("text",e)))}}},j=(e,t,n)=>{const o=new D,r=e.attributes,s=C.call(r),l=[],c=s.length;for(let e=0;e<c;e++){const c=s[e];if(c.value===f){const e=c.name;if(!(e in o)){const s=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/,"$1");o[e]=r[s]||r[s.toLowerCase()],t.push(E.create("attr",o[e],s))}l.push(c)}}const i=l.length;for(let t=0;t<i;t++){const n=l[t];/^id$/i.test(n.name)?e.removeAttribute(n.name):e.removeAttributeNode(l[t])}const a=e.nodeName;if(/^script$/i.test(a)){const t=document.createElement(a);for(let e=0;e<r.length;e++)t.setAttributeNode(r[e].cloneNode(!0));t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}},k=(e,t)=>{t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then(x).then(t):Promise.resolve(g.invoke(e,t)).then(t)},L=e=>null!=e&&"then"in e,P=(e,t)=>{let n,o=!1;const r=s=>{switch(typeof s){case"string":case"number":case"boolean":o?n!==s&&(n=s,t[0].textContent=s):(o=!0,n=s,t=_(e.parentNode,t,[b(e,s)],S,e));break;case"object":case"undefined":if(null==s){o=!1,t=_(e.parentNode,t,[],S,e);break}default:if(o=!1,n=s,M(s))if(0===s.length)t.length&&(t=_(e.parentNode,t,[],S,e));else switch(typeof s[0]){case"string":case"number":case"boolean":r({html:s});break;case"object":if(M(s[0])&&(s=s.concat.apply([],s)),L(s[0])){Promise.all(s).then(r);break}default:t=_(e.parentNode,t,s,S,e)}else(e=>"ELEMENT_NODE"in e||e instanceof m||e instanceof p)(s)?t=_(e.parentNode,t,s.nodeType===c?C.call(s.childNodes):[s],S,e):L(s)?s.then(r):"placeholder"in s?k(s,r):"text"in s?r(String(s.text)):"any"in s?r(s.any):"html"in s?t=_(e.parentNode,t,C.call(w(e,[].concat(s.html).join("")).childNodes),S,e):r("length"in s?C.call(s):g.invoke(s,r))}};return r},I=(e,t,n)=>{const o=u in e;let l;if("style"===t)return N(e,n,o);if(/^on/.test(t)){let n=t.slice(2);return n===r||n===s?(R&&(R=!1,function(){const e=(e,n)=>{const o=new y(n),r=e.length;for(let n=0;n<r;n++){let r=e[n];r.nodeType===i&&t(r,o)}},t=(e,n)=>{T.has(e)&&e.dispatchEvent(n);const o=e.children,r=o.length;for(let e=0;e<r;e++)t(o[e],n)};try{new MutationObserver(t=>{const n=t.length;for(let o=0;o<n;o++){let n=t[o];e(n.removedNodes,s),e(n.addedNodes,r)}}).observe(document,{subtree:!0,childList:!0})}catch(t){document.addEventListener("DOMNodeRemoved",t=>{e([t.target],s)},!1),document.addEventListener("DOMNodeInserted",t=>{e([t.target],r)},!1)}}()),T.add(e)):t.toLowerCase()in e&&(n=n.toLowerCase()),t=>{l!==t&&(l&&e.removeEventListener(n,l,!1),l=t,t&&e.addEventListener(n,t,!1))}}if("data"===t||!o&&t in e)return n=>{l!==n&&(l=n,e[t]!==n&&(e[t]=n,null==n&&e.removeAttribute(t)))};{let t=!1;const o=n.cloneNode(!0);return n=>{l!==n&&(l=n,o.value!==n&&(null==n?(t&&(t=!1,e.removeAttributeNode(o)),o.value=n):(o.value=n,t||(t=!0,e.setAttributeNode(o)))))}}},U=e=>{let t;const n=o=>{t!==o&&(t=o,"object"==typeof o&&o?L(o)?o.then(n):"placeholder"in o?k(o,n):n("text"in o?String(o.text):"any"in o?o.any:"html"in o?[].concat(o.html).join(""):"length"in o?C.call(o).join(""):g.invoke(o,n)):e.textContent=null==o?"":o)};return n};Object.defineProperty(o,"__esModule",{value:!0}).default={create:(e,t)=>{const n=[],o=t.length;for(let r=0;r<o;r++){const o=t[r],s=E.find(e,o.path);switch(o.type){case"any":n.push(P(s,[]));break;case"attr":n.push(I(s,o.name,o.node));break;case"text":n.push(U(s)),s.textContent=""}}return n},find:A};let R=!0},function(e,t,n,o){"use strict";const{COMMENT_NODE:r,DOCUMENT_FRAGMENT_NODE:s,ELEMENT_NODE:l}=t(5),c=(e,t,n)=>{e.unshift(e.indexOf.call(t.childNodes,n))};Object.defineProperty(o,"__esModule",{value:!0}).default={create:(e,t,n)=>({type:e,name:n,node:t,path:(e=>{const t=[];let n;switch(e.nodeType){case l:case s:n=e;break;case r:n=e.parentNode,c(t,n,e);break;default:n=e.ownerElement}for(e=n;n=n.parentNode;e=n)c(t,n,e);return t})(t)}),find:(e,t)=>{const n=t.length;for(let o=0;o<n;o++)e=e.childNodes[t[o]];return e}}},function(e,t,n,o){"use strict";const r=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;Object.defineProperty(o,"__esModule",{value:!0}).default=((e,t,n)=>{if(n){const o=t.cloneNode(!0);return o.value="",e.setAttributeNode(o),s(o,n)}return s(e.style,n)});const s=(e,t)=>{let n,o;return s=>{switch(typeof s){case"object":if(s){if("object"===n){if(!t&&o!==s)for(const t in o)t in s||(e[t]="")}else t?e.value="":e.cssText="";const l=t?{}:e;for(const e in s){const t=s[e];l[e]="number"!=typeof t||r.test(e)?t:t+"px"}n="object",t?e.value=i(o=l):o=s;break}default:o!=s&&(n="string",o=s,t?e.value=s||"":e.cssText=s||"")}}},l=/([^A-Z])([A-Z]+)/g,c=(e,t,n)=>t+"-"+n.toLowerCase(),i=e=>{const t=[];for(const n in e)t.push(n.replace(l,c),":",e[n],";");return t.join("")}},function(e,t,n,o){"use strict";
/*! (c) 2017 Andrea Giammarchi (ISC) */const r=e=>e,s=(e,t,n)=>{const o=e.ownerDocument.createRange();o.setStartBefore(t),o.setEndAfter(n),o.deleteContents()};Object.defineProperty(o,"__esModule",{value:!0}).default=((e,t,n,o,l)=>{const c=o||r,i=null==l?null:c(l,0);let a=0,u=0,d=t.length-1,f=t[0],h=t[d],p=n.length-1,m=n[0],E=n[p];for(;a<=d&&u<=p;)if(null==f)f=t[++a];else if(null==h)h=t[--d];else if(null==m)m=n[++u];else if(null==E)E=n[--p];else if(f==m)f=t[++a],m=n[++u];else if(h==E)h=t[--d],E=n[--p];else if(f==E)e.insertBefore(c(f,1),c(h,-0).nextSibling),f=t[++a],E=n[--p];else if(h==m)e.insertBefore(c(h,1),c(f,0)),h=t[--d],m=n[++u];else{let o=t.indexOf(m);if(o<0)e.insertBefore(c(m,1),c(f,0)),m=n[++u];else{let r=o,l=u;for(;r<=d&&l<=p&&t[r]===n[l];)r++,l++;if(1<r-o)--o===a?e.removeChild(c(f,-1)):s(e,c(f,-1),c(t[o],-1)),a=r,u=l,f=t[r],m=n[l];else{const r=t[o];t[o]=null,e.insertBefore(c(r,1),c(f,0)),m=n[++u]}}}if(a<=d||u<=p)if(a>d){const t=n[p+1],o=null==t?i:c(t,0);if(u===p)e.insertBefore(c(n[u],1),o);else{const t=e.ownerDocument.createDocumentFragment();for(;u<=p;)t.appendChild(c(n[u++],1));e.insertBefore(t,o)}}else null==t[a]&&a++,a===d?e.removeChild(c(t[a],-1)):s(e,c(t[a],-1),c(t[d],-1));return n})}]);
