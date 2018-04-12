!function(){"use strict";const e=document.defaultView,t=1,n=/^area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr$/i,o="http://www.w3.org/2000/svg",r="connected",s="dis"+r,l=/^style|textarea$/i,c="_hyper: "+(Math.random()*new Date|0)+";",i="\x3c!--"+c+"--\x3e";let a=e.Event;try{new a("Event")}catch(e){a=function(e){const t=document.createEvent("Event");return t.initEvent(e,!1,!1),t}}const u=e.Map||function(){const e=[],t=[];return{get:n=>t[e.indexOf(n)],set(n,o){t[e.push(n)-1]=o}}},d=e.WeakMap||function(){return{get:e=>e[c],set(e,t){Object.defineProperty(e,c,{configurable:!0,value:t})}}},h=e.WeakSet||function(){const e=new d;return{add(t){e.set(t,!0)},has:t=>!0===e.get(t)}},f=Array.isArray||(e=>t=>"[object Array]"===e.call(t))({}.toString),p=c.trim||function(){return this.replace(/^\s+|\s+$/g,"")};function m(){return this}const g=(e,t)=>{const n="_"+e+"$";return{get(){return this[n]||(this[e]=t.call(this,e))},set(e){Object.defineProperty(this,n,{configurable:!0,value:e})}}},b={},v=[],N=b.hasOwnProperty;let y=0;var w=(e,t)=>{for(let n=0;n<y;n++){let o=v[n];if(N.call(e,o))return b[o](e[o],t)}};const x=(e,t)=>E(e).createElement(t),E=e=>e.ownerDocument||e,C=e=>E(e).createDocumentFragment(),j=(e,t)=>E(e).createTextNode(t),A=" \\f\\n\\r\\t",S="[ "+A+"]+[^  \\f\\n\\r\\t\\/>\"'=]+",k="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",L="(?:=(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|[^  \\f\\n\\r\\t\\/>\"'=]+))?)",T=new RegExp(k+S+L+"+)([ "+A+"]*/?>)","g"),O=new RegExp(k+S+L+"*)([ "+A+"]*/>)","g"),M=C(document),D="append"in M,$="content"in x(document,"template");M.appendChild(j(M,"g")),M.appendChild(j(M,""));const P=1===M.cloneNode(!0).childNodes.length,B="importNode"in document,R=D?(e,t)=>{e.append.apply(e,t)}:(e,t)=>{const n=t.length;for(let o=0;o<n;o++)e.appendChild(t[o])},_=new RegExp("("+S+"=)(['\"]?)"+i+"\\2","gi"),H=(e,t,n,o)=>"<"+t+n.replace(_,F)+o,F=(e,t,n)=>t+(n||'"')+c+(n||'"'),Z=(e,t)=>("ownerSVGElement"in e?J:W)(e,t.replace(T,H)),z=P?e=>{const t=e.cloneNode(),n=e.childNodes||[],o=n.length;for(let e=0;e<o;e++)t.appendChild(z(n[e]));return t}:e=>e.cloneNode(!0),V=B?(e,t)=>e.importNode(t,!0):(e,t)=>z(t),q=[].slice,G=e=>I(e);let I=t=>{if(t.propertyIsEnumerable("raw")||/Firefox\/(\d+)/.test((e.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){const e={};I=(t=>{const n="_"+t.join(c);return e[n]||(e[n]=t)})}else I=(e=>e);return I(t)};const W=$?(e,t)=>{const n=x(e,"template");return n.innerHTML=t,n.content}:(e,t)=>{const n=x(e,"template"),o=C(e);if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){const e=RegExp.$1;n.innerHTML="<table>"+t+"</table>",R(o,q.call(n.querySelectorAll(e)))}else n.innerHTML=t,R(o,q.call(n.childNodes));return o},J=$?(e,t)=>{const n=C(e),r=E(e).createElementNS(o,"svg");return r.innerHTML=t,R(n,q.call(r.childNodes)),n}:(e,t)=>{const n=C(e),r=x(e,"div");return r.innerHTML='<svg xmlns="'+o+'">'+t+"</svg>",R(n,q.call(r.firstChild.childNodes)),n};function K(e){this.childNodes=e,this.length=e.length,this.first=e[0],this.last=e[this.length-1]}K.prototype.insert=function(){const e=C(this.first);return R(e,this.childNodes),e},K.prototype.remove=function(){const e=this.first,t=this.last;if(2===this.length)t.parentNode.removeChild(t);else{const n=E(e).createRange();n.setStartBefore(this.childNodes[1]),n.setEndAfter(t),n.deleteContents()}return e};const Q=(e,t,n)=>{e.unshift(e.indexOf.call(t.childNodes,n))};var U=(e,n,o)=>({type:e,name:o,node:n,path:(e=>{const n=[];let o;switch(e.nodeType){case t:case 11:o=e;break;case 8:o=e.parentNode,Q(n,o,e);break;default:o=e.ownerElement}for(e=o;o=o.parentNode;e=o)Q(n,o,e);return n})(n)}),X=(e,t)=>{const n=t.length;for(let o=0;o<n;o++)e=e.childNodes[t[o]];return e};const Y=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;const ee=(e,t)=>{let n,o;return r=>{switch(typeof r){case"object":if(r){if("object"===n){if(!t&&o!==r)for(const t in o)t in r||(e[t]="")}else t?e.value="":e.cssText="";const s=t?{}:e;for(const e in r){const t=r[e];s[e]="number"!=typeof t||Y.test(e)?t:t+"px"}n="object",t?e.value=oe(o=s):o=r;break}default:o!=r&&(n="string",o=r,t?e.value=r||"":e.cssText=r||"")}}},te=/([^A-Z])([A-Z]+)/g,ne=(e,t,n)=>t+"-"+n.toLowerCase(),oe=e=>{const t=[];for(const n in e)t.push(n.replace(te,ne),":",e[n],";");return t.join("")},re=e=>e,se=(e,t,n)=>{const o=e.ownerDocument.createRange();o.setStartBefore(t),o.setEndAfter(n),o.deleteContents()},le=(e,t,n,o,r)=>{const s=o||re,l=null==r?null:s(r,0);let c=0,i=0,a=t.length-1,u=t[0],d=t[a],h=n.length-1,f=n[0],p=n[h];for(;c<=a&&i<=h;)if(null==u)u=t[++c];else if(null==d)d=t[--a];else if(null==f)f=n[++i];else if(null==p)p=n[--h];else if(u==f)u=t[++c],f=n[++i];else if(d==p)d=t[--a],p=n[--h];else if(u==p)e.insertBefore(s(u,1),s(d,-0).nextSibling),u=t[++c],p=n[--h];else if(d==f)e.insertBefore(s(d,1),s(u,0)),d=t[--a],f=n[++i];else{let o=t.indexOf(f);if(o<0)e.insertBefore(s(f,1),s(u,0)),f=n[++i];else{let r=o,l=i;for(;r<=a&&l<=h&&t[r]===n[l];)r++,l++;if(1<r-o)--o===c?e.removeChild(s(u,-1)):se(e,s(u,-1),s(t[o],-1)),c=r,i=l,u=t[r],f=n[l];else{const r=t[o];t[o]=null,e.insertBefore(s(r,1),s(u,0)),f=n[++i]}}}if(c<=a||i<=h)if(c>a){const t=n[h+1],o=null==t?l:s(t,0);if(i===h)e.insertBefore(s(n[i],1),o);else{const t=e.ownerDocument.createDocumentFragment();for(;i<=h;)t.appendChild(s(n[i++],1));e.insertBefore(t,o)}}else null==t[c]&&c++,c===a?e.removeChild(s(t[c],-1)):se(e,s(t[c],-1),s(t[a],-1));return n},ce=new h;function ie(){}ie.prototype=Object.create(null);const ae=e=>({html:e}),ue=(e,t)=>"ELEMENT_NODE"in e?e:e.constructor===K?1/t<0?t?e.remove():e.last:t?e.insert():e.first:ue(e.render(),t),de=(e,n,o)=>{const r=e.childNodes,s=r.length;for(let a=0;a<s;a++){let s=r[a];switch(s.nodeType){case t:he(s,n,o),de(s,n,o);break;case 8:s.textContent===c&&(o.shift(),n.push(l.test(e.nodeName)?U("text",e):U("any",s)));break;case 3:l.test(e.nodeName)&&p.call(s.textContent)===i&&(o.shift(),n.push(U("text",e)))}}},he=(e,t,n)=>{const o=new ie,r=e.attributes,s=q.call(r),l=[],i=s.length;for(let e=0;e<i;e++){const i=s[e];if(i.value===c){const e=i.name;if(!(e in o)){const s=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/,"$1");o[e]=r[s]||r[s.toLowerCase()],t.push(U("attr",o[e],s))}l.push(i)}}const a=l.length;for(let t=0;t<a;t++){const n=l[t];/^id$/i.test(n.name)?e.removeAttribute(n.name):e.removeAttributeNode(l[t])}const u=e.nodeName;if(/^script$/i.test(u)){const t=document.createElement(u);for(let e=0;e<r.length;e++)t.setAttributeNode(r[e].cloneNode(!0));t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}},fe=(e,t)=>{t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then(ae).then(t):Promise.resolve(w(e,t)).then(t)},pe=e=>null!=e&&"then"in e,me=(e,t)=>{let n,o=!1;const r=s=>{switch(typeof s){case"string":case"number":case"boolean":o?n!==s&&(n=s,t[0].textContent=s):(o=!0,n=s,t=le(e.parentNode,t,[j(e,s)],ue,e));break;case"object":case"undefined":if(null==s){o=!1,t=le(e.parentNode,t,[],ue,e);break}default:if(o=!1,n=s,f(s))if(0===s.length)t.length&&(t=le(e.parentNode,t,[],ue,e));else switch(typeof s[0]){case"string":case"number":case"boolean":r({html:s});break;case"object":if(f(s[0])&&(s=s.concat.apply([],s)),pe(s[0])){Promise.all(s).then(r);break}default:t=le(e.parentNode,t,s,ue,e)}else(e=>"ELEMENT_NODE"in e||e instanceof K||e instanceof m)(s)?t=le(e.parentNode,t,11===s.nodeType?q.call(s.childNodes):[s],ue,e):pe(s)?s.then(r):"placeholder"in s?fe(s,r):"text"in s?r(String(s.text)):"any"in s?r(s.any):"html"in s?t=le(e.parentNode,t,q.call(Z(e,[].concat(s.html).join("")).childNodes),ue,e):r("length"in s?q.call(s):w(s,r))}};return r},ge=(e,n,o)=>{const l="ownerSVGElement"in e;let c;if("style"===n)return((e,t,n)=>{if(n){const o=t.cloneNode(!0);return o.value="",e.setAttributeNode(o),ee(o,n)}return ee(e.style,n)})(e,o,l);if(/^on/.test(n)){let o=n.slice(2);return o===r||o===s?(Ne&&(Ne=!1,function(){const e=(e,o)=>{const r=new a(o),s=e.length;for(let o=0;o<s;o++){let s=e[o];s.nodeType===t&&n(s,r)}},n=(e,t)=>{ce.has(e)&&e.dispatchEvent(t);const o=e.children,r=o.length;for(let e=0;e<r;e++)n(o[e],t)};try{new MutationObserver(t=>{const n=t.length;for(let o=0;o<n;o++){let n=t[o];e(n.removedNodes,s),e(n.addedNodes,r)}}).observe(document,{subtree:!0,childList:!0})}catch(t){document.addEventListener("DOMNodeRemoved",t=>{e([t.target],s)},!1),document.addEventListener("DOMNodeInserted",t=>{e([t.target],r)},!1)}}()),ce.add(e)):n.toLowerCase()in e&&(o=o.toLowerCase()),t=>{c!==t&&(c&&e.removeEventListener(o,c,!1),c=t,t&&e.addEventListener(o,t,!1))}}if("data"===n||!l&&n in e)return t=>{c!==t&&(c=t,e[n]!==t&&(e[n]=t,null==t&&e.removeAttribute(n)))};{let t=!1;const n=o.cloneNode(!0);return o=>{c!==o&&(c=o,n.value!==o&&(null==o?(t&&(t=!1,e.removeAttributeNode(n)),n.value=o):(n.value=o,t||(t=!0,e.setAttributeNode(n)))))}}},be=e=>{let t;const n=o=>{t!==o&&(t=o,"object"==typeof o&&o?pe(o)?o.then(n):"placeholder"in o?fe(o,n):n("text"in o?String(o.text):"any"in o?o.any:"html"in o?[].concat(o.html).join(""):"length"in o?q.call(o).join(""):w(o,n)):e.textContent=null==o?"":o)};return n};var ve={create:(e,t)=>{const n=[],o=t.length;for(let r=0;r<o;r++){const o=t[r],s=X(e,o.path);switch(o.type){case"any":n.push(me(s,[]));break;case"attr":n.push(ge(s,o.name,o.node));break;case"text":n.push(be(s)),s.textContent=""}}return n},find:de};let Ne=!0;const ye=new d,we=new u;function xe(e){const t=ye.get(this);return t&&t.template===G(e)?Ee.apply(t.updates,arguments):function(e){e=G(e);const t=we.get(e)||function(e){const t=[],n=e.join(i).replace(Ce,je),o=Z(this,n);ve.find(o,t,e.slice());const r={fragment:o,paths:t};return we.set(e,r),r}.call(this,e),n=V(this.ownerDocument,t.fragment),o=ve.create(n,t.paths);ye.set(this,{template:e,updates:o}),Ee.apply(o,arguments),this.textContent="",this.appendChild(n)}.apply(this,arguments),this}function Ee(){const e=arguments.length;for(let t=1;t<e;t++)this[t-1](arguments[t])}const Ce=O,je=(e,t,o)=>n.test(t)?e:"<"+t+o+"></"+t+">",Ae=(new d,e=>{const n=e.childNodes,o=n.length,r=[];for(let e=0;e<o;e++){let o=n[e];o.nodeType!==t&&0===p.call(o.textContent).length||r.push(o)}return 1===r.length?r[0]:new K(r)}),Se=e=>xe.bind(e);!function(e){const t=new d,n=Object.create;Object.defineProperties(m,{for:{configurable:!0,value(e,o){return((e,t,o,r)=>{switch(typeof r){case"object":case"function":const s=t.w||(t.w=new d);return s.get(r)||((e,t,n)=>(e.set(t,n),n))(s,r,new e(o));default:const l=t.p||(t.p=n(null));return l[r]||(l[r]=new e(o))}})(this,t.get(e)||(e=>{const n={w:null,p:null};return t.set(e,n),n})(e),e,null==o?"default":o)}}}),Object.defineProperties(m.prototype,{handleEvent:{value(e){const t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e)}},html:g("html",e),svg:g("svg",e),state:g("state",function(){return this.defaultState}),defaultState:{get:()=>({})},setState:{value(e,t){const n=this.state,o="function"==typeof e?e.call(this,n):e;for(const e in o)n[e]=o[e];return!1!==t&&this.render(),this}}})}(e=>{let t,n,r,s,l;return function(c){c=G(c);let i=s!==c;return i&&(s=c,r=C(document),n="svg"===e?document.createElementNS(o,"svg"):r,l=xe.bind(n)),l.apply(null,arguments),i&&("svg"===e&&R(r,q.call(n.childNodes)),t=Ae(r)),t}}),Se(document.querySelector("main"))`
<h1>hypermorphic 🎉</h1>`}();