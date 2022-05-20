(function(T,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("blockly")):typeof define=="function"&&define.amd?define(["exports","blockly"],e):(T=typeof globalThis<"u"?globalThis:T||self,e(T.block3d={},T.Blockly))})(this,function(T,e){"use strict";var Ca=Object.defineProperty,Ra=Object.defineProperties;var Da=Object.getOwnPropertyDescriptors;var Mi=Object.getOwnPropertySymbols;var La=Object.prototype.hasOwnProperty,wa=Object.prototype.propertyIsEnumerable;var ot=(T,e,f)=>e in T?Ca(T,e,{enumerable:!0,configurable:!0,writable:!0,value:f}):T[e]=f,Ii=(T,e)=>{for(var f in e||(e={}))La.call(e,f)&&ot(T,f,e[f]);if(Mi)for(var f of Mi(e))wa.call(e,f)&&ot(T,f,e[f]);return T},vi=(T,e)=>Ra(T,Da(e));var c=(T,e,f)=>(ot(T,typeof e!="symbol"?e+"":e,f),f);const j=(i=>i&&typeof i=="object"&&"default"in i?i:{default:i})(e);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ce=Symbol(),pt=new Map;class dt{constructor(t,n){if(this._$cssResult$=!0,n!==Ce)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=pt.get(this.cssText);return fe&&t===void 0&&(pt.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const Oi=i=>new dt(typeof i=="string"?i:i+"",Ce),C=(i,...t)=>{const n=i.length===1?i[0]:t.reduce((a,s,r)=>a+(p=>{if(p._$cssResult$===!0)return p.cssText;if(typeof p=="number")return p;throw Error("Value passed to 'css' function must be a 'css' function result: "+p+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[r+1],i[0]);return new dt(n,Ce)},Si=(i,t)=>{fe?i.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):t.forEach(n=>{const a=document.createElement("style"),s=window.litNonce;s!==void 0&&a.setAttribute("nonce",s),a.textContent=n.cssText,i.appendChild(a)})},ct=fe?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let n="";for(const a of t.cssRules)n+=a.cssText;return Oi(n)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Re;const lt=window.trustedTypes,Ai=lt?lt.emptyScript:"",ut=window.reactiveElementPolyfillSupport,De={toAttribute(i,t){switch(t){case Boolean:i=i?Ai:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let n=i;switch(t){case Boolean:n=i!==null;break;case Number:n=i===null?null:Number(i);break;case Object:case Array:try{n=JSON.parse(i)}catch{n=null}}return n}},ht=(i,t)=>t!==i&&(t==t||i==i),Le={attribute:!0,type:String,converter:De,reflect:!1,hasChanged:ht};class k extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var n;(n=this.l)!==null&&n!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((n,a)=>{const s=this._$Eh(a,n);s!==void 0&&(this._$Eu.set(s,a),t.push(s))}),t}static createProperty(t,n=Le){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(t,n),!n.noAccessor&&!this.prototype.hasOwnProperty(t)){const a=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,a,n);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,n,a){return{get(){return this[n]},set(s){const r=this[t];this[n]=s,this.requestUpdate(t,r,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Le}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const n=this.properties,a=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const s of a)this.createProperty(s,n[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const a=new Set(t.flat(1/0).reverse());for(const s of a)n.unshift(ct(s))}else t!==void 0&&n.push(ct(t));return n}static _$Eh(t,n){const a=n.attribute;return a===!1?void 0:typeof a=="string"?a:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(n=>n(this))}addController(t){var n,a;((n=this._$Eg)!==null&&n!==void 0?n:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((a=t.hostConnected)===null||a===void 0||a.call(t))}removeController(t){var n;(n=this._$Eg)===null||n===void 0||n.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,n)=>{this.hasOwnProperty(n)&&(this._$Et.set(n,this[n]),delete this[n])})}createRenderRoot(){var t;const n=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Si(n,this.constructor.elementStyles),n}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(n=>{var a;return(a=n.hostConnected)===null||a===void 0?void 0:a.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(n=>{var a;return(a=n.hostDisconnected)===null||a===void 0?void 0:a.call(n)})}attributeChangedCallback(t,n,a){this._$AK(t,a)}_$ES(t,n,a=Le){var s,r;const p=this.constructor._$Eh(t,a);if(p!==void 0&&a.reflect===!0){const d=((r=(s=a.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&r!==void 0?r:De.toAttribute)(n,a.type);this._$Ei=t,d==null?this.removeAttribute(p):this.setAttribute(p,d),this._$Ei=null}}_$AK(t,n){var a,s,r;const p=this.constructor,d=p._$Eu.get(t);if(d!==void 0&&this._$Ei!==d){const l=p.getPropertyOptions(d),u=l.converter,M=(r=(s=(a=u)===null||a===void 0?void 0:a.fromAttribute)!==null&&s!==void 0?s:typeof u=="function"?u:null)!==null&&r!==void 0?r:De.fromAttribute;this._$Ei=d,this[d]=M(n,l.type),this._$Ei=null}}requestUpdate(t,n,a){let s=!0;t!==void 0&&(((a=a||this.constructor.getPropertyOptions(t)).hasChanged||ht)(this[t],n)?(this._$AL.has(t)||this._$AL.set(t,n),a.reflect===!0&&this._$Ei!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,a))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((s,r)=>this[r]=s),this._$Et=void 0);let n=!1;const a=this._$AL;try{n=this.shouldUpdate(a),n?(this.willUpdate(a),(t=this._$Eg)===null||t===void 0||t.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(a)):this._$EU()}catch(s){throw n=!1,this._$EU(),s}n&&this._$AE(a)}willUpdate(t){}_$AE(t){var n;(n=this._$Eg)===null||n===void 0||n.forEach(a=>{var s;return(s=a.hostUpdated)===null||s===void 0?void 0:s.call(a)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((n,a)=>this._$ES(a,this[a],n)),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}k.finalized=!0,k.elementProperties=new Map,k.elementStyles=[],k.shadowRootOptions={mode:"open"},ut==null||ut({ReactiveElement:k}),((Re=globalThis.reactiveElementVersions)!==null&&Re!==void 0?Re:globalThis.reactiveElementVersions=[]).push("1.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var we;const X=globalThis.trustedTypes,gt=X?X.createPolicy("lit-html",{createHTML:i=>i}):void 0,P=`lit$${(Math.random()+"").slice(9)}$`,mt="?"+P,bi=`<${mt}>`,W=document,te=(i="")=>W.createComment(i),ie=i=>i===null||typeof i!="object"&&typeof i!="function",_t=Array.isArray,fi=i=>{var t;return _t(i)||typeof((t=i)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},ne=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Tt=/-->/g,Et=/>/g,G=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Nt=/'/g,Mt=/"/g,It=/^(?:script|style|textarea|title)$/i,Ci=i=>(t,...n)=>({_$litType$:i,strings:t,values:n}),E=Ci(1),K=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),vt=new WeakMap,Ri=(i,t,n)=>{var a,s;const r=(a=n==null?void 0:n.renderBefore)!==null&&a!==void 0?a:t;let p=r._$litPart$;if(p===void 0){const d=(s=n==null?void 0:n.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=p=new se(t.insertBefore(te(),d),d,void 0,n!=null?n:{})}return p._$AI(i),p},Z=W.createTreeWalker(W,129,null,!1),Di=(i,t)=>{const n=i.length-1,a=[];let s,r=t===2?"<svg>":"",p=ne;for(let l=0;l<n;l++){const u=i[l];let M,g,_=-1,I=0;for(;I<u.length&&(p.lastIndex=I,g=p.exec(u),g!==null);)I=p.lastIndex,p===ne?g[1]==="!--"?p=Tt:g[1]!==void 0?p=Et:g[2]!==void 0?(It.test(g[2])&&(s=RegExp("</"+g[2],"g")),p=G):g[3]!==void 0&&(p=G):p===G?g[0]===">"?(p=s!=null?s:ne,_=-1):g[1]===void 0?_=-2:(_=p.lastIndex-g[2].length,M=g[1],p=g[3]===void 0?G:g[3]==='"'?Mt:Nt):p===Mt||p===Nt?p=G:p===Tt||p===Et?p=ne:(p=G,s=void 0);const Y=p===G&&i[l+1].startsWith("/>")?" ":"";r+=p===ne?u+bi:_>=0?(a.push(M),u.slice(0,_)+"$lit$"+u.slice(_)+P+Y):u+P+(_===-2?(a.push(void 0),l):Y)}const d=r+(i[n]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[gt!==void 0?gt.createHTML(d):d,a]};class ae{constructor({strings:t,_$litType$:n},a){let s;this.parts=[];let r=0,p=0;const d=t.length-1,l=this.parts,[u,M]=Di(t,n);if(this.el=ae.createElement(u,a),Z.currentNode=this.el.content,n===2){const g=this.el.content,_=g.firstChild;_.remove(),g.append(..._.childNodes)}for(;(s=Z.nextNode())!==null&&l.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const g=[];for(const _ of s.getAttributeNames())if(_.endsWith("$lit$")||_.startsWith(P)){const I=M[p++];if(g.push(_),I!==void 0){const Y=s.getAttribute(I.toLowerCase()+"$lit$").split(P),Q=/([.?@])?(.*)/.exec(I);l.push({type:1,index:r,name:Q[2],strings:Y,ctor:Q[1]==="."?wi:Q[1]==="?"?zi:Q[1]==="@"?Fi:ce})}else l.push({type:6,index:r})}for(const _ of g)s.removeAttribute(_)}if(It.test(s.tagName)){const g=s.textContent.split(P),_=g.length-1;if(_>0){s.textContent=X?X.emptyScript:"";for(let I=0;I<_;I++)s.append(g[I],te()),Z.nextNode(),l.push({type:2,index:++r});s.append(g[_],te())}}}else if(s.nodeType===8)if(s.data===mt)l.push({type:2,index:r});else{let g=-1;for(;(g=s.data.indexOf(P,g+1))!==-1;)l.push({type:7,index:r}),g+=P.length-1}r++}}static createElement(t,n){const a=W.createElement("template");return a.innerHTML=t,a}}function q(i,t,n=i,a){var s,r,p,d;if(t===K)return t;let l=a!==void 0?(s=n._$Cl)===null||s===void 0?void 0:s[a]:n._$Cu;const u=ie(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==u&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),u===void 0?l=void 0:(l=new u(i),l._$AT(i,n,a)),a!==void 0?((p=(d=n)._$Cl)!==null&&p!==void 0?p:d._$Cl=[])[a]=l:n._$Cu=l),l!==void 0&&(t=q(i,l._$AS(i,t.values),l,a)),t}class Li{constructor(t,n){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var n;const{el:{content:a},parts:s}=this._$AD,r=((n=t==null?void 0:t.creationScope)!==null&&n!==void 0?n:W).importNode(a,!0);Z.currentNode=r;let p=Z.nextNode(),d=0,l=0,u=s[0];for(;u!==void 0;){if(d===u.index){let M;u.type===2?M=new se(p,p.nextSibling,this,t):u.type===1?M=new u.ctor(p,u.name,u.strings,this,t):u.type===6&&(M=new ji(p,this,t)),this.v.push(M),u=s[++l]}d!==(u==null?void 0:u.index)&&(p=Z.nextNode(),d++)}return r}m(t){let n=0;for(const a of this.v)a!==void 0&&(a.strings!==void 0?(a._$AI(t,a,n),n+=a.strings.length-2):a._$AI(t[n])),n++}}class se{constructor(t,n,a,s){var r;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=a,this.options=s,this._$Cg=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var t,n;return(n=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&n!==void 0?n:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=q(this,t,n),ie(t)?t===N||t==null||t===""?(this._$AH!==N&&this._$AR(),this._$AH=N):t!==this._$AH&&t!==K&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):fi(t)?this.S(t):this.$(t)}A(t,n=this._$AB){return this._$AA.parentNode.insertBefore(t,n)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==N&&ie(this._$AH)?this._$AA.nextSibling.data=t:this.k(W.createTextNode(t)),this._$AH=t}T(t){var n;const{values:a,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=ae.createElement(s.h,this.options)),s);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===r)this._$AH.m(a);else{const p=new Li(r,this),d=p.p(this.options);p.m(a),this.k(d),this._$AH=p}}_$AC(t){let n=vt.get(t.strings);return n===void 0&&vt.set(t.strings,n=new ae(t)),n}S(t){_t(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let a,s=0;for(const r of t)s===n.length?n.push(a=new se(this.A(te()),this.A(te()),this,this.options)):a=n[s],a._$AI(r),s++;s<n.length&&(this._$AR(a&&a._$AB.nextSibling,s),n.length=s)}_$AR(t=this._$AA.nextSibling,n){var a;for((a=this._$AP)===null||a===void 0||a.call(this,!1,!0,n);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var n;this._$AM===void 0&&(this._$Cg=t,(n=this._$AP)===null||n===void 0||n.call(this,t))}}class ce{constructor(t,n,a,s,r){this.type=1,this._$AH=N,this._$AN=void 0,this.element=t,this.name=n,this._$AM=s,this.options=r,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,n=this,a,s){const r=this.strings;let p=!1;if(r===void 0)t=q(this,t,n,0),p=!ie(t)||t!==this._$AH&&t!==K,p&&(this._$AH=t);else{const d=t;let l,u;for(t=r[0],l=0;l<r.length-1;l++)u=q(this,d[a+l],n,l),u===K&&(u=this._$AH[l]),p||(p=!ie(u)||u!==this._$AH[l]),u===N?t=N:t!==N&&(t+=(u!=null?u:"")+r[l+1]),this._$AH[l]=u}p&&!s&&this.C(t)}C(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class wi extends ce{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===N?void 0:t}}const xi=X?X.emptyScript:"";class zi extends ce{constructor(){super(...arguments),this.type=4}C(t){t&&t!==N?this.element.setAttribute(this.name,xi):this.element.removeAttribute(this.name)}}class Fi extends ce{constructor(t,n,a,s,r){super(t,n,a,s,r),this.type=5}_$AI(t,n=this){var a;if((t=(a=q(this,t,n,0))!==null&&a!==void 0?a:N)===K)return;const s=this._$AH,r=t===N&&s!==N||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,p=t!==N&&(s===N||r);r&&this.element.removeEventListener(this.name,this,s),p&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n,a;typeof this._$AH=="function"?this._$AH.call((a=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&a!==void 0?a:this.element,t):this._$AH.handleEvent(t)}}class ji{constructor(t,n,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}}const Ot=window.litHtmlPolyfillSupport;Ot==null||Ot(ae,se),((we=globalThis.litHtmlVersions)!==null&&we!==void 0?we:globalThis.litHtmlVersions=[]).push("2.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xe,ze;class v extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,n;const a=super.createRenderRoot();return(t=(n=this.renderOptions).renderBefore)!==null&&t!==void 0||(n.renderBefore=a.firstChild),a}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Ri(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return K}}v.finalized=!0,v._$litElement$=!0,(xe=globalThis.litElementHydrateSupport)===null||xe===void 0||xe.call(globalThis,{LitElement:v});const St=globalThis.litElementPolyfillSupport;St==null||St({LitElement:v}),((ze=globalThis.litElementVersions)!==null&&ze!==void 0?ze:globalThis.litElementVersions=[]).push("3.2.0");const U=C`
:root {
  --bg: #333333;
  --bg-light: #555;
  --color: #eeeeee;
  --theme-color: #e16531;

  --border: 1px solid #505050;
  --border-hide: 1px solid #00000000;
  --dropdown-width: 260px;
}
::-webkit-scrollbar {
  width: 9px;
  height: 9px;
}
/*外层轨道。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果*/
::-webkit-scrollbar-track {
  background-color: #1e1e1e;
  width: 6px;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
}
/*滚动条的设置*/
::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, .2);
  background-clip: padding-box;
  min-height: 28px;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
  padding: 6px;
}

a {
  text-decoration: none;
}

.input-text,
.dropdown-list {
  height: 36px;
  width: 100%;
  box-sizing: border-box;
  font-size: inherit;
  padding: 5px;
  color: var(--color);
  border: var(--border);
  background-color: #0c0c0c;
  text-overflow: ellipsis;
}

.checkbox {
  cursor: pointer;
  position: relative;
  width: 14px;
  height: 14px;
  font-size: 14px;
}

.checkbox::after {
  position: absolute;
  top: 0;
  width: 14px;
  height: 14px;
  border-radius: 1px;
  color: var(--theme-color);
  background-color: var(--bg);
  display: inline-block;
  visibility: visible;
  padding-left: 0px;
  text-align: center;
  content: " ";
}

.checkbox:checked::after {
  content: "✓";
  font-size: 12px;
  font-weight: bold;
}

.d-flex {
  display: flex;
}

.d-block {
  display: block;
}

.d-none {
  display: none;
}

.hide {
  visibility: hidden;
}

.show {
  visibility: visible;
}

.w-100 {
  width: 100px;
}
.w-50 {
  width: 50px;
}
.w-40 {
  width: 40px;
}

.text-light {
  color: #ffffff;
}

.text-green {
  color: green;
}

.text-red {
  color: red;
}

.dialog-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
}

.dialog {
  color: var(--color);
  background-color: #1e1e1e;
  width: 400px;
  overflow-y: hidden;
  filter: drop-shadow(0px 0px 15px black);
}

.dialog-header {
  width: 100%;
  height: 20px;
  background-color: var(--bg);
  display: flex;
  align-items: center;
}

.dialog-header-text {
  color: var(--color);
  font-size: 12px;
  padding-left: 10px;
  user-select: none;
}

.dialog-header-close {
  background-image: url(../media/close.svg);
  background-repeat: no-repeat;
  width: 16px;
  height: 14px;
  margin-left: auto;
  margin-right: 10px;
  cursor: pointer;
}

.dialog-content {
  padding: 10px;
  border: var(--border);
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-flow: column nowrap;
  user-select: none;
}

.dialog-row {
  display: flex;
  flex-flow: row nowrap;
  margin: 2px 0;
}

.dialog-text-wrap {
  display: flex;
  flex-flow: column nowrap;
  user-select: text;
}

.dialog-text {
  margin: 5px 0;
  vertical-align: middle;
  flex: 0 0 auto;
}

.button {
  border: none;
  color: var(--color);
  background-color: var(--bg);
  height: 32px;
  font-size: inherit;
  display: block;
  min-width: 100px;
  padding: 0px 15px;
  margin: 20px auto 10px auto;
  cursor: pointer;
}

.button:active {
  border: var(--border);
}
`;class Fe extends v{constructor(){super();c(this,"_submite",n=>{n.preventDefault(),this.projectName=this.renderRoot.querySelector("#projectName").value,this.description=this.renderRoot.querySelector("#projectDescription").value,this.isNewWindow=this.renderRoot.querySelector("#openInNewWindow").checked,this.onsubmit&&this.onsubmit()});c(this,"_onclose",n=>{n.key==="Escape"&&this.close()});this.lang="zh",this.projectName="my-project",this.description="",this.isNewWindow=!1}render(){const n=this,a={};return a.header=n.lang==="zh"?"\u65B0\u5EFA\u9879\u76EE":"New Project",a.projectName=n.lang==="zh"?"\u9879\u76EE\u540D\u79F0:":"Project Name:",a.projectNameTitle=n.lang==="zh"?"\u7528\u4E8E\u9879\u76EE\u6587\u4EF6\u5939":"Name used for project directory",a.description=n.lang==="zh"?"\u63CF\u8FF0:":"Description:",a.defaultDesc=n.lang==="zh"?"\u63CF\u8FF0\u6027\u6587\u5B57...":"Comment text...",a.option=n.lang==="zh"?"\u9009\u9879:":"Option:",a.openInNewWindow=n.lang==="zh"?"\u5728\u65B0\u7A97\u53E3\u6253\u5F00":"Open in New Window",E`
    <div class="dialog-bg">
      <div class="dialog">
        <div class="dialog-header">
          <div class="dialog-header-text">${a.header}</div>
          <div class="dialog-header-close" @click="${this.close}"></div>
        </div>
        <div class="dialog-content">
          <form action="">
            <div class="dialog-text">${a.projectName}</div>
            <span title="${a.projectNameTitle}">
              <input type="text" class="input-text" id="projectName" name="project">
            </span>

            <div class="dialog-text">${a.description}</div>
            <textarea id="projectDescription" name="desc" placeholder="${a.defaultDesc}"></textarea>

            <div class="dialog-text">${a.option}</div>
            <div class="dialog-content">
              <label for="openInNewWindow">
                <input type="checkbox" class="checkbox" id="openInNewWindow" name="openInNewWindow">
                <span>${a.openInNewWindow}</span>
              </label>
            </div>
            <input type="submit" value="OK" class="button" @click="${this._submite}">
          </form>
        </div>
      </div>
    </div>`}onclose(){}close(){this.style.display="none",this.onclose()}onopen(){}open(){this.style.display="block",this.onopen()}onsubmit(){}connectedCallback(){super.connectedCallback(),addEventListener("keydown",this._onclose)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._onclose)}}c(Fe,"styles",[U,C`
    :host {
      display: none;
    }
    textarea {
      display: block;
      resize: none;
      width: 100%;
      height: 100px;
      box-sizing: border-box;
      background: #0c0c0c;
      color: var(--color);
      border: var(--border);
    }
    `]),c(Fe,"properties",{lang:{},projectName:{},description:{},isNewWindow:{}}),customElements.define("create-dialog",Fe);function At(i,t,n,a){let s,r=!1,p=0;function d(){s&&clearTimeout(s)}function l(){d(),r=!0}typeof t!="boolean"&&(a=n,n=t,t=void 0);function u(...M){let g=this,_=Date.now()-p;if(r)return;function I(){p=Date.now(),n.apply(g,M)}function Y(){s=void 0}a&&!s&&I(),d(),a===void 0&&_>i?I():t!==!0&&(s=setTimeout(a?Y:I,a===void 0?i-_:i))}return u.cancel=l,u}function bt(i,t,n){return n===void 0?At(i,t,!1):At(i,n,t!==!1)}class je extends v{constructor(){super();c(this,"_getSelected",async n=>{this.projectName=n.target.value;const a=n.target.value,s=this.renderRoot.getElementById("detail"),p=await(await fetch("/api/readme",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({projectName:a})})).text();p?s.innerHTML=p:s.innerHTML=this.lang==="zh"?"\u65E0":"nothing"});c(this,"_serach",n=>{const a=n.target.value.trim();this.projects=this._getSearchResult(a),a||(this.projects=this.orignProjects)});c(this,"_submite",n=>{n.preventDefault(),this.onsubmit()});c(this,"_onclose",n=>{n.key==="Escape"&&this.close()});this.lang="zh",this.projects=[],this.orignProjects=null,this.projectName="defaultProject",this.isNewWindow=!1,this.detail=this.lang==="zh"?"\u65E0":"nothing"}render(){const n=this,a={};return a.header=n.lang==="zh"?"\u6253\u5F00\u9879\u76EE":"Open Project",a.projectName=n.lang==="zh"?"\u6240\u6709\u9879\u76EE:":"Projects:",a.description=n.lang==="zh"?"\u63CF\u8FF0:":"Description:",a.option=n.lang==="zh"?"\u9009\u9879:":"Option:",a.openInNewWindow=n.lang==="zh"?"\u5728\u65B0\u7A97\u53E3\u6253\u5F00":"Open in New Window",E`
    <div class="dialog-bg">
      <div class="dialog">
        <div class="dialog-header">
          <div class="dialog-header-text">${a.header}</div>
          <div class="dialog-header-close" @click="${this.close}"></div>
        </div>
        <div class="dialog-content">
          <form action="">
            <div class="flex-inline">
              <div class="dialog-text">${a.projectName}</div>
              <input id="serachInput" class="serach-input" type="text" placeholder="${this.lang=="zh"?"\u641C\u7D22":"serach"}" @input="${bt(200,!0,n._serach)}">
            </div>
            <span>
              <select name="selectedProjectName" class="dropdown" size=10 @change="${this._getSelected}">
                ${this.projects.map(s=>E`<option value="${s}" @dblclick="${this._submite}">${s}</option>`)}
              </select>
            </span>

            <div id="description" class="dialog-text">${a.description}</div>
            <div id="detail" class="textarea"></div>

            <div class="dialog-text">${a.option}</div>
            <div class="dialog-content">
              <label for="openInNewWindow">
                <input type="checkbox" class="checkbox" ?checked=${this.isNewWindow} name="openInNewWindow" id="openInNewWindow" @click="${()=>this.isNewWindow=!this.isNewWindow}">
                <span>${a.openInNewWindow}</span>
              </label>
            </div>
            <input type="submit" value="${this.lang=="zh"?"\u6253\u5F00":"Open"}" class="button" @click="${this._submite}">
          </form>
        </div>
      </div>
    </div>`}firstUpdated(){this.orignProjects=this.projects}onclose(){}close(){this.style.display="none",this.onclose()}onopen(){}open(){this.style.display="block",this.onopen()}_getSearchResult(n){const a=[];for(let s of this.projects)s.includes(n)&&a.push(s);return a}onsubmit(){}connectedCallback(){super.connectedCallback(),addEventListener("keydown",this._onclose)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._onclose)}}c(je,"styles",[U,C`
    :host {
      display: none;
    }
    .flex-inline {
      width: 100%;
      display: inline-flex;
      justify-content: space-between;
      margin-bottom: 4px;
    }
    .serach-input {
      height: 32px;
      width: 120px;
      box-sizing: border-box;
      font-size: inherit;
      padding: 2px;
      color: var(--color);
      border: var(--border);
      background-color: rgb(12, 12, 12);
      text-overflow: ellipsis;
    }
    .textarea {
      width: 100%;
      height: 200px;
      box-sizing: border-box;
      word-break: break-all;
      overflow-y: auto;
      overflow-x: hidden;
      border: var(--border);
      padding: 6px;
    }

    .dropdown {
      width: 100%;
      box-sizing: border-box;
      font-size: inherit;
      padding: 5px;
      color: var(--color);
      border: var(--border);
      background-color: #0c0c0c;
      text-overflow: ellipsis;
      overflow-y: auto;
    }

    `]),c(je,"properties",{lang:{},projects:{},projectName:{},isNewWindow:{},detail:{}}),customElements.define("projects-dialog",je);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yi=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ui={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ji=i=>(...t)=>({_$litDirective$:i,values:t});class Pi{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,a){this._$Ct=t,this._$AM=n,this._$Ci=a}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re=(i,t)=>{var n,a;const s=i._$AN;if(s===void 0)return!1;for(const r of s)(a=(n=r)._$AO)===null||a===void 0||a.call(n,t,!1),re(r,t);return!0},le=i=>{let t,n;do{if((t=i._$AM)===void 0)break;n=t._$AN,n.delete(i),i=t}while((n==null?void 0:n.size)===0)},ft=i=>{for(let t;t=i._$AM;i=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(i))break;n.add(i),Gi(t)}};function Yi(i){this._$AN!==void 0?(le(this),this._$AM=i,ft(this)):this._$AM=i}function Vi(i,t=!1,n=0){const a=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(a))for(let r=n;r<a.length;r++)re(a[r],!1),le(a[r]);else a!=null&&(re(a,!1),le(a));else re(this,i)}const Gi=i=>{var t,n,a,s;i.type==Ui.CHILD&&((t=(a=i)._$AP)!==null&&t!==void 0||(a._$AP=Vi),(n=(s=i)._$AQ)!==null&&n!==void 0||(s._$AQ=Yi))};class Hi extends Pi{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,a){super._$AT(t,n,a),ft(this),this.isConnected=t._$AU}_$AO(t,n=!0){var a,s;t!==this.isConnected&&(this.isConnected=t,t?(a=this.reconnected)===null||a===void 0||a.call(this):(s=this.disconnected)===null||s===void 0||s.call(this)),n&&(re(this,t),le(this))}setValue(t){if(yi(this._$Ct))this._$Ct._$AI(t,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=()=>new $i;class $i{}const ye=new WeakMap,B=Ji(class extends Hi{render(i){return N}update(i,[t]){var n;const a=t!==this.U;return a&&this.U!==void 0&&this.ot(void 0),(a||this.rt!==this.lt)&&(this.U=t,this.ht=(n=i.options)===null||n===void 0?void 0:n.host,this.ot(this.lt=i.element)),N}ot(i){typeof this.U=="function"?(ye.get(this.U)!==void 0&&this.U.call(this.ht,void 0),ye.set(this.U,i),i!==void 0&&this.U.call(this.ht,i)):this.U.value=i}get rt(){var i;return typeof this.U=="function"?ye.get(this.U):(i=this.U)===null||i===void 0?void 0:i.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});class Ue extends v{constructor(){super();c(this,"langRef",z());c(this,"enableBabylonRef",z());c(this,"enableLoadersRef",z());c(this,"enablePepRef",z());c(this,"enableGUIRef",z());c(this,"enableTweakpaneRef",z());c(this,"titleRef",z());c(this,"iconRef",z());c(this,"descRef",z());c(this,"minifyRef",z());c(this,"_submit",async n=>{n.preventDefault(),this.onsubmit&&this.onsubmit()});c(this,"_onclose",n=>{n.key==="Escape"&&this.close()});this.lang="zh"}render(){const n=this,a={};return a.header=n.lang==="zh"?"\u53D1\u5E03":"Publish",a.modules=n.lang==="zh"?"\u6A21\u5757:":"Modules:",a.moduleBabylonTitle=n.lang==="zh"?"\u6838\u5FC3\u6A21\u5757":"The core module",a.enableGLTF2FielLoaderTitle=n.lang==="zh"?"\u7528\u4E8E\u52A0\u8F7D.glTF/.glb\u6587\u4EF6":"Allows you to load .glTF/.glb type file",a.enableObjFileLoaderTitle=n.lang==="zh"?"\u7528\u4E8E\u52A0\u8F7D.obj\u6587\u4EF6":"Allows you to load .obj type file",a.enableStlFileLoaderTitle=n.lang==="zh"?"\u7528\u4E8E\u52A0\u8F7D.stl\u6587\u4EF6":"Allows you to load .stl type file",a.modulePepTitle=n.lang==="zh"?"\u7528\u4E8E\u517C\u5BB9\u89E6\u5C4F\u8BBE\u5907":"Allows you to use a touch screen",a.moduleGuiTitle=n.lang==="zh"?"\u7528\u4E8E\u521B\u5EFA\u7528\u6237\u754C\u9762":"Used for creating  user interface",a.moduleTweakpaneTitle=n.lang==="zh"?"\u7528\u4E8E\u751F\u6210\u53C2\u6570\u8C03\u8BD5\u9762\u677F":"A compact pane library for fine-tuning parameters and monitoring value changes",a.app=n.lang==="zh"?"\u5E94\u7528:":"App:",a.lang=n.lang==="zh"?"\u8BED\u8A00":"Language",a.appLang=n.lang==="zh"?"zh-CN":"en",a.appTitle=n.lang==="zh"?"\u6807\u9898":"Title",a.appIcon=n.lang==="zh"?"\u56FE\u6807":"Icon",a.appDescription=n.lang==="zh"?"\u63CF\u8FF0":"Description",a.appDescriptionContent=n.lang==="zh"?"Block3D\u662F\u4E00\u6B3E\u514D\u8D39\u7684\u96F6\u4EE3\u7801Web3D\u5F00\u53D1\u5DE5\u5177":"Block3D is a free No-Code Web3D app development tool",a.build=n.lang==="zh"?"\u6784\u5EFA:":"Build:",a.minify=n.lang==="zh"?"\u538B\u7F29JS\u6587\u4EF6":"Minify JS file",E`
<div class="dialog-bg" id="publishDialog">
  <div class="dialog">
    <div class="dialog-header">
      <div class="dialog-header-text">${a.header}</div>
      <div class="dialog-header-close" @click="${this.close}">
      </div>
    </div>
    <div class="dialog-content">
      <form action="">
        <div class="dialog-text">${a.modules}</div>
        <div class="content-box">
          <label for="enableBabylon" title="${a.moduleBabylonTitle}">
            <input type="checkbox" class="checkbox" name="enableBabylon" checked disabled id="enableBabylon">
            <span>Babylon</span>
          </label>
          <label for="enablePep" title="${a.modulePepTitle}">
          <input type="checkbox" class="checkbox" name="enablePep" checked id="enablePep">
          <span>PEP</span>
          </label>
          <label for="enableGLTF2FielLoader" title="${a.enableGLTF2FielLoaderTitle}">
            <input type="checkbox" class="checkbox" name="enableGLTF2FielLoader" id="enableGLTF2FielLoader">
            <span>glTF 2.0 Loader</span>
          </label>
          <label for="enableObjFileLoader" title="${a.enableObjFileLoaderTitle}">
            <input type="checkbox" class="checkbox" name="enableObjFileLoader" id="enableObjFileLoader">
            <span>Obj Loader</span>
          </label>
          <label for="enableStlFileLoader" title="${a.enableStlFileLoaderTitle}">
            <input type="checkbox" class="checkbox" name="enableStlFileLoader" id="enableStlFileLoader">
            <span>Stl Loader</span>
          </label>
          <label for="enableGUI" title="${a.moduleGuiTitle}">
            <input type="checkbox" class="checkbox" name="enableGUI" id="enableGUI">
            <span>GUI</span>
          </label>
          <label for="enableTweakpane" title="${a.moduleTweakpaneTitle}">
            <input type="checkbox" class="checkbox" name="enableTweakpane" id="enableTweakpane">
            <span>TweakPane</span>
          </label>
        </div>

        <div class="dialog-text">${a.app}</div>
        <div class="content-box">
          <div class="dialog-row">
            <label for="indexLang" class="${this.lang==="zh"?"dialog-text w-40":"dialog-text w-100"}">
              ${a.lang}
            </label>
            <input ${B(this.langRef)} type="text" class="input-text" value="${a.appLang}" name="indexLang">
          </div>
          <div class="dialog-row">
            <label for="indexTitle" class="${this.lang==="zh"?"dialog-text w-40":"dialog-text w-100"}">
              ${a.appTitle}
            </label>
            <input ${B(this.titleRef)} type="text" class="input-text" value="Block3D" name="indexTitle" id="indexTitle">
          </div>
          <div class="dialog-row">
            <label for="indexIcon" class="${this.lang==="zh"?"dialog-text w-40":"dialog-text w-100"}">
              ${a.appIcon}
            </label>
            <input ${B(this.iconRef)} type="text" class="input-text" value="./assets/media/logo.svg" name="indexIcon" id="indexIcon">
          </div>
          <div class="dialog-row">
            <label for="indexDescription" class="${this.lang==="zh"?"dialog-text w-40":"dialog-text w-100"}">
              ${a.appDescription}
            </label>
            <input ${B(this.descRef)} type="text" class="input-text" value="${a.appDescriptionContent}"
              name="indexDescription" id="indexDescription">
          </div>
        </div>

        <div class="dialog-text">${a.build}</div>
        <div class="dialog-content">
          <label for="enableMinifyJSFile" title="${a.minify}">
            <input ${B(this.minifyRef)} type="checkbox" class="checkbox" name="enableMinifyJSFile" id="enableMinifyJSFile">
            <span>
              ${a.minify}
            </span>
          </label>
        </div>

        <input type="submit" value="OK" class="button" @click="${this._submit}">
      </form>
    </div>
  </div>
</div>`}onclose(){}close(){this.style.display="none",this.onclose()}onopen(){}open(){this.style.display="block",this.onopen()}getInput(){const n=this.renderRoot.getElementById("enableBabylon").checked,a=this.renderRoot.getElementById("enablePep").checked,s=this.renderRoot.getElementById("enableGLTF2FielLoader").checked,r=this.renderRoot.getElementById("enableObjFileLoader").checked,p=this.renderRoot.getElementById("enableStlFileLoader").checked,d=this.renderRoot.getElementById("enableGUI").checked,l=this.renderRoot.getElementById("enableTweakpane").checked,u=this.langRef.value.value,M=this.titleRef.value.value,g=this.iconRef.value.value,_=this.descRef.value.value,I=this.minifyRef.value.checked;return{lang:u,title:M,icon:g,description:_,modules:[{enabled:n,module:"babylon.js"},{enabled:a,module:"pep.min.js"},{enabled:s,module:"babylon.glTF2FileLoader.min.js"},{enabled:r,module:"babylon.objFileLoader.min.js"},{enabled:p,module:"babylon.stlFileLoader.min.js"},{enabled:d,module:"babylon.gui.min.js"},{enabled:l,module:"tweakpane.min.js"}],enableMinifyJSFile:I}}onsubmit(){}connectedCallback(){super.connectedCallback(),addEventListener("keydown",this._onclose)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._onclose)}}c(Ue,"styles",[U,C`
    :host {
      display: none;
    }
    .content-box {
      padding: 10px;
      border: var(--border);
      overflow-x: hidden;
      overflow-y: auto;
      max-height: 160px;
      display: flex;
      flex-flow: column nowrap;
      user-select: none;
    }
    `]),c(Ue,"properties",{lang:{}}),customElements.define("publish-dialog",Ue);class Je extends v{constructor(){super();c(this,"submitActiveCode",n=>{n.preventDefault(),this.onactive&&this.onactive()});c(this,"submitInactiveCode",n=>{n.preventDefault(),this.oninactive&&this.oninactive()});c(this,"_onclose",n=>{n.key==="Escape"&&this.close()});this.lang="zh",this.status="ACTIVE",this.expires=0,this.leftdays=0}render(){const n=this,a={};a.header=n.lang==="zh"?"\u6FC0\u6D3B\u7801":"Active Key",a.activeTitle=n.lang==="zh"?"\u8F93\u5165\u6FC0\u6D3B\u7801\uFF0C\u53BB\u9664\u5E7F\u544A":"Enter your active key to remove the ads",a.inactiveTitle=n.lang==="zh"?"\u5DF2\u6FC0\u6D3B\uFF01\u6709\u6548\u671F\u622A\u81F3":"Actived! valid until ",a.activeButton=n.lang==="zh"?"\u6FC0\u6D3B":"Active",a.inactiveButton=n.lang==="zh"?"\u53D6\u6D88\u6FC0\u6D3B":"Inactive",a.activeExpiresTitle=n.lang==="zh"?"\u5DF2\u8FC7\u671F\uFF01\u6709\u6548\u671F\u622A\u81F3":"Expired! valid until ";let s,r;return this.lang==="zh"?r=E`
      <div class='tip'>没有激活码？<a href='https://shop.zjbcool.com/product-category/block3d/' target='_blank'>点此</a>获取</div>
      `:r=E`
      <div class='tip'>No active key? Click <a href='https://shop.zjbcool.com/product-category/block3d/' target='_blank'>here</a></div>
      `,this.status!=="ACTIVE"?s=E`
      <div class="dialog-text">${a.activeTitle}</div>
      <input type="text" class="input-text" id="activeCode" name="activeCode" value="XXXX-XXXX-XXXX-XXXX-XXXX-XXXX">
      ${r}
      <input type="submit" value="${a.activeButton}" class="button" @click="${this.submitActiveCode}">
      `:Number(this.leftdays)>0?s=E`
        <div class="dialog-text text-green">${a.inactiveTitle}${this.expires}</div>
        <input type="submit" value="${a.inactiveButton}" class="button" @click="${this.submitInactiveCode}"></input>
        `:s=E`
        <div class="dialog-text text-red">${a.activeExpiresTitle}${this.expires}</div>
        <input type="submit" value="${a.inactiveButton}" class="button" @click="${this.submitInactiveCode}">
        `,E`
  <div class="dialog-bg">
    <div class="dialog">
      <div class="dialog-header">
        <div class="dialog-header-text">${a.header}</div>
        <div class="dialog-header-close" @click="${this.close}">
        </div>
      </div>
      <div class="dialog-content">
        <form action="">${s}</form>
      </div>
    </div>
  </div>`}onclose(){}close(){this.style.display="none",this.onclose()}onopen(){}open(){this.style.display="block",this.onopen()}getActiveKey(){return this.renderRoot.getElementById("activeCode").value}onactive(){}oninactive(){}connectedCallback(){super.connectedCallback(),addEventListener("keydown",this._onclose)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._onclose)}}c(Je,"styles",[U,C`
    :host {
      display: none;
    }
    .tip {
      margin-top: 12px;
      font-size: 14px;
      color: #858585;
    }
    .tip a {
      color: #e16531;
    }
    `]),c(Je,"properties",{lang:{},status:{},expires:{},leftdays:{}}),customElements.define("license-dialog",Je);const Qi="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjQ2NTQ0NDc0MDU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEyNjYiIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guNzc4MTA2OS4wLmk1IiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik04NzIuMTc3ODA4NTkgNzkuNTQ5NjcwNjNIMTUxLjgyMjE5MTQxYTExOC40Nzk1NDIyOSAxMTguNDc5NTQyMjkgMCAwIDAtMTE4LjQ3OTU0MjI5IDExOC40Nzk1NDIyOVY2MzAuNDc5NTQyMjlhMTE4LjQ3OTU0MjI5IDExOC40Nzk1NDIyOSAwIDAgMCAxMTguNDc5NTQyMjkgMTE4LjQ3OTU0MjMyaDIxNi4yMjUxNjQ3MXYtNjguNzE4MTM0NTVoLTIxNi4yMjUxNjQ3MWE0Ny45ODQyMTQ2MiA0Ny45ODQyMTQ2MiAwIDAgMS00Ny45ODQyMTQ2My00Ny45ODQyMTQ2M3YtNDMyLjQ1MDMyOTM5YTQ3Ljk4NDIxNDYyIDQ3Ljk4NDIxNDYyIDAgMCAxIDQ3Ljk4NDIxNDYzLTQ3Ljk4NDIxNDYzaDcyMC4zNTU2MTcxOGE0Ny45ODQyMTQ2MiA0Ny45ODQyMTQ2MiAwIDAgMSA0Ny45ODQyMTQ2MyA0Ny45ODQyMTQ2M1Y2MzAuNDc5NTQyMjlhNDcuOTg0MjE0NjIgNDcuOTg0MjE0NjIgMCAwIDEtNDcuOTg0MjE0NjMgNDcuOTg0MjE0NjNoLTI2LjY1Nzg5NzA0bDE2LjU4NzEzNTk1IDE1Ljk5NDczODE5YTg1Ljg5NzY2ODE3IDg1Ljg5NzY2ODE3IDAgMCAxIDMzLjE3NDI3MTgzIDUzLjkwODE5MTc4IDExOC40Nzk1NDIyOSAxMTguNDc5NTQyMjkgMCAwIDAgOTcuMTUzMjI0NjgtMTE4LjQ3OTU0MjI5di00MzIuNDUwMzI5MzlhMTE4LjQ3OTU0MjI5IDExOC40Nzk1NDIyOSAwIDAgMC0xMjAuMjU2NzM1NDItMTE3Ljg4NzE0NDU4eiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iMTI2NyIgZGF0YS1zcG0tYW5jaG9yLWlkPSJhMzEzeC43NzgxMDY5LjAuaTQiIGNsYXNzPSJzZWxlY3RlZCI+PC9wYXRoPjxwYXRoIGQ9Ik00NzcuNjQwOTMyNzMgMzc4LjcxMDUxNDkyYTM2LjcyODY1ODExIDM2LjcyODY1ODExIDAgMCAwLTM5LjY5MDY0NjY5LTguMjkzNTY3OTQgMzcuMzIxMDU1ODIgMzcuMzIxMDU1ODIgMCAwIDAtMjEuOTE4NzE1MyAzMy43NjY2Njk1M3Y1MDQuMTMwNDUyNDdhMzUuNTQzODYyNjcgMzUuNTQzODYyNjcgMCAwIDAgMjUuNDczMTAxNTcgMzQuMzU5MDY3MjggMzYuMTM2MjYwMzggMzYuMTM2MjYwMzggMCAwIDAgNDAuMjgzMDQ0NDItMTQuMjE3NTQ1MDhsMTE4LjQ3OTU0MjI5LTE3Mi4zODc3MzQwMiAyMDQuMzc3MjEwNDYgNDMuMjQ1MDMyOTFhMzYuMTM2MjYwMzggMzYuMTM2MjYwMzggMCAwIDAgMzMuMTc0MjcxODMtNTkuMjM5NzcxMTZ6IG0xMTMuNzQwMzYwNjIgMzAyLjEyMjgzMjgzYTM1LjU0Mzg2MjY3IDM1LjU0Mzg2MjY3IDAgMCAwLTM2LjcyODY1ODEyIDE0LjgwOTk0MjgybC02Ni45NDA5NDE0IDk2LjU2MDgyNjk2di0zMDEuNTMwNDM1MTJsMjEzLjI2MzE3NjE4IDIxMy4yNjMxNzYxNHoiIGZpbGw9IiNmZmZmZmYiIHAtaWQ9IjEyNjgiIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guNzc4MTA2OS4wLmkzIiBjbGFzcz0ic2VsZWN0ZWQiPjwvcGF0aD48L3N2Zz4=";class Pe extends v{constructor(){super();c(this,"_submitAppSettings",async n=>{n.preventDefault();const a=this,s={APP_HOST:a.renderRoot.getElementById("setHost").value,APP_PORT:a.renderRoot.getElementById("setPort").value,PROJECTS_FOLDER:a.renderRoot.getElementById("setProjectsFolder").value,AUTO_OPEN:a.renderRoot.getElementById("open").checked,AUTO_SAVE:a.renderRoot.getElementById("save").checked,EXTERNAL_SERVER:a.renderRoot.getElementById("enableExternalServerInterface").checked};await(await fetch("/api/settings",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)})).text()==="ok"&&(a.style.display="none")});c(this,"_onclose",n=>{n.key==="Escape"&&this.close()});this.lang="zh",this.host="localhost",this.port="3001",this.projects="./projects",this.autoopen="false",this.save="false",this.external="false"}render(){const n=this,a={};return a.header=n.lang==="zh"?"\u8BBE\u7F6E":"Settings",a.host=n.lang==="zh"?"\u4E3B\u673A":"HOST",a.hostTitle=n.lang==="zh"?"\u8BBE\u7F6E\u4E3B\u673A\u5730\u5740":"Sets the host",a.port=n.lang==="zh"?"\u7AEF\u53E3":"PORT",a.portTitle=n.lang==="zh"?"\u8BBE\u7F6E\u7AEF\u53E3":"Sets the port",a.projectsDir=n.lang==="zh"?"\u9879\u76EE\u8DEF\u5F84":"Projects directory",a.projectsTitle=n.lang==="zh"?"\u8BBE\u7F6E\u9879\u76EE\u6587\u4EF6\u5939\u6240\u5728\u7684\u4F4D\u7F6E":"Sets the location of the projects folder",a.option=n.lang==="zh"?"\u9009\u9879":"Option",a.autoOpen=n.lang==="zh"?"\u81EA\u52A8\u6253\u5F00":"Auto open",a.autoOpenTitle=n.lang==="zh"?"\u8FD0\u884CBlock3D\u65F6\u81EA\u52A8\u6253\u5F00\u6D4F\u89C8\u5668":"Open the browser automatically when Block3D starts",a.autoSave=n.lang==="zh"?"\u81EA\u52A8\u4FDD\u5B58":"Auto save",a.autoSaveTitle=n.lang==="zh"?"\u6BCF\u96945\u5206\u949F\u4FDD\u5B58\u5DE5\u4F5C\u533A":"Save the workspace every 5 minutes",a.externalServerInterface=n.lang==="zh"?"\u5F00\u542F\u5916\u90E8\u670D\u52A1\u5668\u63A5\u53E3":"Enable external server interface",a.externalServerInterfaceTitle=n.lang==="zh"?"\u7528\u4E8E\u5728\u79FB\u52A8\u6D4F\u89C8\u5668\u4E0A\u6D4B\u8BD5\u5E94\u7528":"Used for testing app on Mobile Browsers",a.info=n.lang==="zh"?"\u6CE8\uFF1A\u91CD\u542F\u751F\u6548":"Tips: need restart",E`
<div class="dialog-bg d-flex">
  <div class="dialog">
    <div class="dialog-header">
      <div class="dialog-header-text">${a.header}</div>
      <div class="dialog-header-close" @click="${n.close}">
      </div>
    </div>
    <div class="dialog-content">
      <form action="">
        <div class="dialog-text">${a.host}</div>
        <span title="${a.hostTitle}">
          <input type="text" class="input-text" id="setHost" name="setHost" .value=${this.host}>
        </span>
        <div class="dialog-text">${a.port}</div>
        <span title="${a.portTitle}">
          <input type="text" class="input-text" id="setPort" name="setPort" .value=${this.port}>
        </span>
        <div class="dialog-text">${a.projectsDir}</div>
        <span title="${a.projectsTitle}">
          <input type="text" class="input-text" id="setProjectsFolder" name="setProjectsFolder" .value=${this.projects}>
          <div id="dialog-select-folder" class="dialog-select-folder"></div>
        </span>
        <div class="dialog-text">${a.option}</div>
        <div class="dialog-content">
          <label for="open">
            <input type="checkbox" class="checkbox" ?checked=${this.autoopen=="true"} name="open" id="open">
            <span title="${a.autoOpenTitle}">${a.autoOpen}</span>
          </label>
          <label for="save">
            <input type="checkbox" class="checkbox" ?checked=${this.save=="true"} name="save" id="save">
            <span title="${a.autoSaveTitle}">${a.autoSave}</span>
          </label>
          <label for="enableExternalServerInterface">
            <input type="checkbox" class="checkbox" ?checked=${this.external=="true"} name="enableExternalServerInterface" id="enableExternalServerInterface">
            <span title="${a.externalServerInterfaceTitle}">${a.externalServerInterface}</span>
          </label>
        </div>
        <p class="title-info">${a.info}</p>
        <input type="submit" value="OK" class="button" @click="${this._submitAppSettings}">
      </form>
    </div>
  </div>
</div>`}onclose(){}close(){this.style.display="none",this.onclose()}onopen(){}open(){this.style.display="block",this.onopen()}autoSave(n,a){this.save=="true"&&setInterval(async()=>{await fetch("/api/autosave",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})},a*60*1e3)}connectedCallback(){super.connectedCallback(),addEventListener("keydown",this._onclose)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._onclose)}}c(Pe,"styles",[U,C`
    :host {
      display: none;
    }
    .title-info {
      color: #808080;
    }
    .dialog-select-folder {
      position: absolute;
      right: 18px;
      background: center / contain no-repeat url(/media/folder.svg);
      width: 22px;
      height: 36px;
      display: inline-block;
      cursor: pointer;
      display: none;
    }
    `]),c(Pe,"properties",{lang:{},host:{},port:{},projects:{},autoopen:{},save:{},external:{}}),customElements.define("settings-dialog",Pe);class Ye extends v{constructor(){super();c(this,"_onclose",n=>{n.key==="Escape"&&this.close()});this.lang="zh",this.version="",this.babylon="",this.blockly="",this.releaseDate=""}render(){const n=this,a={header:n.lang==="zh"?"\u5173\u4E8E":"About",version:n.lang==="zh"?`\u7248\u672C\uFF1A${n.version}`:`Version: ${n.version}`,releaseDate:n.lang==="zh"?`\u65E5\u671F\uFF1A${n.releaseDate}`:`Date: ${n.releaseDate}`,author:n.lang==="zh"?"\u4F5C\u8005\uFF1A\u5B85\u5BB6\u5457":"Author: zjbku",website:n.lang==="zh"?"\u7F51\u7AD9: ":"Website: ",email:n.lang==="zh"?"\u90AE\u7BB1: block3d@163.com":"E-mail: block3d@163.com",discussions:n.lang==="zh"?"\u8BA8\u8BBA:":"Discussions:"};return E`
  <div class="dialog-bg d-flex">
    <div class="dialog">
      <div class="dialog-header">
        <div class="dialog-header-text">${a.header}</div>
        <div class="dialog-header-close" @click="${this.close}">
        </div>
      </div>
      <div class="dialog-content">
        <div class="d-flex">
          <div class="w-50"><svg t="1646631541330" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6392" width="40" height="40"><path d="M505.969657 60.977793C256.882602 64.310701 57.666374 268.965801 60.97984 518.071276c3.331885 248.990864 207.968565 448.263373 457.054597 444.950931 249.049193-3.351328 448.298166-208.006428 444.9847-457.092459-3.331885-249.010307-207.981868-448.27463-457.04948-444.951955z m50.00488 150.312424c45.849234 0 59.388599 26.612101 59.388599 57.024761 0 38.015825-30.432103 73.15923-82.33317 73.15923-43.436278 0-64.100924-21.861914-62.893423-57.952899 0-30.422893 25.491581-72.231091 85.837994-72.231092zM438.421214 793.912671c-31.331589 0-54.29458-19.006889-32.366151-102.633518l35.947723-148.310838c6.243191-23.76731 7.297197-33.265638 0-33.265637-9.403161 0-50.081629 16.412808-74.097602 32.575929l-15.666818-25.663496c76.224032-63.650669 163.881464-100.987019 201.456245-100.987019 31.332612 0 36.542264 37.059034 20.894889 94.073562l-41.175794 155.912979c-7.297197 27.559683-4.155646 37.058011 3.121083 37.058011 9.423627 0 40.219004-11.4334 70.478168-35.20071l17.754363 23.76731c-74.136487 74.118068-155.032936 102.673427-186.346106 102.673427z" p-id="6393" fill="#6f6f6f"></path></svg></div>
          <div class="dialog-text-wrap">
            <div class="dialog-title">Block3D</div>
            <div class="dialog-text">${a.version}</div>
            <div class="dialog-text">${a.releaseDate}</div>
            <div class="dialog-text">${a.author}</div>
            <div class="dialog-text">${a.website}<a class="text-light" target="_blank" href="https://www.zjbku.com">https://zjbku.com</a></div>
            <div class="dialog-text">${a.email}</div>
            <div class="dialog-text d-flex">${a.discussions}&nbsp;<a class="text-light" target="_blank" href="https://github.com/zjbcool/block3d/discussions"><svg t="1647767915949" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9384" width="26" height="26"><path d="M511.542857 14.057143C228.914286 13.942857 0 242.742857 0 525.142857 0 748.457143 143.2 938.285714 342.628571 1008c26.857143 6.742857 22.742857-12.342857 22.742858-25.371429v-88.571428c-155.085714 18.171429-161.371429-84.457143-171.771429-101.6C172.571429 756.571429 122.857143 747.428571 137.714286 730.285714c35.314286-18.171429 71.314286 4.571429 113.028571 66.171429 30.171429 44.685714 89.028571 37.142857 118.857143 29.714286 6.514286-26.857143 20.457143-50.857143 39.657143-69.485715-160.685714-28.8-227.657143-126.857143-227.657143-243.428571 0-56.571429 18.628571-108.571429 55.2-150.514286-23.314286-69.142857 2.171429-128.342857 5.6-137.142857 66.4-5.942857 135.428571 47.542857 140.8 51.771429 37.714286-10.171429 80.8-15.542857 129.028571-15.542858 48.457143 0 91.657143 5.6 129.714286 15.885715 12.914286-9.828571 76.914286-55.771429 138.628572-50.171429 3.314286 8.8 28.228571 66.628571 6.285714 134.857143 37.028571 42.057143 55.885714 94.514286 55.885714 151.2 0 116.8-67.428571 214.971429-228.571428 243.314286a145.714286 145.714286 0 0 1 43.542857 104v128.571428c0.914286 10.285714 0 20.457143 17.142857 20.457143 202.4-68.228571 348.114286-259.428571 348.114286-484.685714 0-282.514286-229.028571-511.2-511.428572-511.2z" p-id="9385" fill="#bfbfbf"></path></svg></a></div>
          </div>
        </div>
        <input type="button" value="OK" class="button" @click="${this.close}">  
      </div>
    </div>
  </div>
    `}onclose(){}close(){this.style.display="none",this.onclose()}onopen(){}open(){this.style.display="block",this.onopen()}connectedCallback(){super.connectedCallback(),addEventListener("keydown",this._onclose)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._onclose)}}c(Ye,"styles",[U,C`
    :host {
      display: none;
    }
    .dialog-title {
      color: #e16531;
      font-size: 18px;
      font-weight: 800;
    }`]),c(Ye,"properties",{lang:{},version:{},releaseDate:{},babylon:{},blockly:{}}),customElements.define("about-dialog",Ye);class Ve extends v{constructor(){super(),this.lang="zh",this.version="",this.hero=""}render(){const t=[{shotcut:"Ctrl + O",describe:this.lang==="zh"?"\u6253\u5F00\u9879\u76EE":"Open Project"},{shotcut:"Ctrl + P",describe:this.lang==="zh"?"\u53D1\u5E03\u9879\u76EE":"Publish Project"},{shotcut:"Ctrl + Shift + F",describe:this.lang==="zh"?"\u67E5\u627E\u62FC\u56FE":"Search Block"},{shotcut:"Alt + Shift + R",describe:this.lang==="zh"?"\u6D4F\u89C8\u6587\u4EF6\u5939":"Reveal in File Explorer"}];return E`
    <div class="dialog-bg" @click="${this._close}">
      <div class="dialog">
        <div class="hero-bg" style="background-image: url(${this.hero})">
          <div class="hero">
            <div class="space-between">
              <div class="d-flex-row">
                <svg t="1648274661616" class="icon" viewBox="0 0 1177 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1297" width="32" height="32"><path d="M719.43387232 716.09142666L719.43387232 835.93511336a18.96260896 18.96260896 0 0 1-10.42943493 18.07768662Q599.08451595 917.34791325 489.16459448 981.18869544a19.46827783 19.46827783 0 0 1-21.74379139 0Q356.99521197 917.03186951 246.69603785 853.31750437A17.19276507 17.19276507 0 0 1 236.89869042 836.8832438l0-258.14431269a17.12955617 17.12955617 0 0 1 9.92376525-16.30784352c25.28347834-14.34837375 50.06128701-28.8863742 75.02872161-43.36116497 4.42460848-2.52834758 8.78600889-5.30953003 14.79083449-8.91242589-5.05669599-3.35006103-8.78600889-6.32086938-12.64173876-8.40675702-25.28347834-14.66441751-50.5669567-29.45525199-75.85043503-43.74041682A19.9107394 19.9107394 0 0 1 236.89869042 438.35241831q0.37925185-126.41739093 0-253.2140345a20.47961719 20.47961719 0 0 1 12.00965207-20.10036535Q356.99521197 102.90387128 464.44999392 40.07442767a24.14572196 24.14572196 0 0 1 27.68540893-1e-8q107.45478277 63.20869546 215.66806926 124.90038269a20.35320018 20.35320018 0 0 1 11.63040021 20.28999127c-0.50566968 24.3353479 0 48.67069579 0 73.06925181 0 3.72931289 0.44246076 7.45862576 0.82171261 12.64173876 4.55102632-2.21230465 7.6482525-3.53968695 10.61906087-5.24632111 26.67406958-15.3597131 53.47455614-30.71942619 80.02220871-46.33197412a16.87672133 16.87672133 0 0 1 18.96260895 0q110.36238222 64.093617 220.85118226 127.68156511a19.97394751 19.97394751 0 0 1 11.06152161 19.59469567q-0.50566968 126.41739093 0 253.27724262a20.66924314 20.66924314 0 0 1-11.82002613 20.22678315q-108.46612132 62.26056502-216.5529908 125.21642564a22.31266916 22.31266916 0 0 1-25.97877396 0c-26.04198285-15.80217388-52.6528435-30.71942619-79.13728713-45.95272147-2.08588682-0.82171342-4.67744332-1.51700902-8.84921699-3.35006102zM805.77695038 732.52568723a81.4127999 81.4127999 0 0 0 1.13775639-9.41809558c0-71.10978281 0-142.2195648-0.31604375-213.3293476A16.37105246 16.37105246 0 0 0 799.456081 497.76859199c-61.56526942-36.09216514-123.44658257-71.6786606-185.26468682-107.45478196a82.17130442 82.17130442 0 0 0-8.3435481-3.28685292L605.84784608 492.71189681a15.17008718 15.17008718 0 0 0 9.22846965 15.17008635c30.78263511 17.38239103 61.12280863 35.58649544 91.96865186 52.90567835a21.61737357 21.61737357 0 0 1 12.64173956 21.68058251c-0.6320867 30.15054759 0 60.36430411-0.37925265 90.57806062a15.29650418 15.29650418 0 0 0 8.72279996 15.48613091c23.26079963 12.64173878 46.07913928 26.61086065 69.15031298 39.88468693 2.27551275 1.3905912 4.93027817 2.40193058 8.59638294 4.10856475z m-127.23910437-156.18868668c-4.61423441-2.90760026-7.20579092-4.74065225-9.86055632-6.32086939-22.81833887-13.14740846-45.76309555-25.91556504-68.26539146-39.44222614a15.17008718 15.17008718 0 0 0-17.76164366-1e-8c-30.71942619 18.14089553-61.81810424 35.64970437-92.53752962 53.79059988a20.66924314 20.66924314 0 0 1-23.5136353 0c-31.22509587-18.45693928-63.20869546-36.34499998-94.24416459-54.73873033a12.13606989 12.13606989 0 0 0-14.15874782-0.5688786c-23.95609525 14.28516483-48.228235 28.06466078-72.31074808 42.09699159a68.07576472 68.07576472 0 0 0-6.32086939 5.24632192c2.21230465 1.70663497 3.16043511 2.5915565 4.23498259 3.2236432q94.11774758 54.61231332 188.61474781 108.84537398a15.61254793 15.61254793 0 0 0 12.64173877-0.63208672c44.81496509-25.28347834 89.18746942-51.00941747 133.55997373-76.29289579 19.34186081-11.44077428 38.62051272-22.75513076 59.92184334-35.20724358z m-185.89677348-25.28347835c3.9189388-1.95946981 5.94161753-2.84439135 7.90108654-3.98214771 21.8702084-12.64173878 43.42437388-26.10519098 65.80025276-37.92521712a21.55416546 21.55416546 0 0 0 13.14740845-22.81833887c-0.6320867-38.30446976 0-76.60893876-0.56887859-114.91340852a26.35802582 26.35802582 0 0 1 15.9285917-26.80048738c30.34017353-16.75030432 60.36430411-34.25911314 90.13559985-52.02075603a17.06634807 17.06634807 0 0 0 7.33220876-11.94644397c0.75850452-22.3758781 0.37925185-44.75175617 1e-8-67.19084318a61.56526942 61.56526942 0 0 0-1.45380016-8.53317401c-4.10856555 2.08588681-7.26899984 3.53968695-10.23980899 5.2463219Q590.86738566 262.18978414 500.54215907 314.46337497a15.54933902 15.54933902 0 0 0-8.97563401 15.42292202L491.56652506 540.24483542c0.18962593 2.84439135 0.69529561 5.94161752 1.07454747 10.68226976z" fill="#e16531" p-id="1298"></path></svg>
                <p class="logo-text">Block3D</p>
              </div>
              <p class="text-color">${this.version}</p>
            </div>
          </div>
        </div>
        <div class="content">
          ${t.map(n=>E`
            <div class="content-row d-flex-row">
              <div class="row-left">${n.describe}</div>
              <div class="row-right">${n.shotcut}</div>
            </div>
          `)}
        </div>
      </div>
    </div>
    `}_close(){this.style.display="none"}}c(Ve,"styles",C`
    .dialog-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      user-select: none;
    }
    .dialog {
      width: 600px;
      background-color: #212121;
      border-radius: 4px;
      color: #6f6f6f;
      filter: drop-shadow(0px 0px 6px black);
    }
    .hero-bg {
      width: 100%;
      height: 300px;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      background-color: #eee;
    }

    .hero {
      position:relative;
      width: 100%;
      height: 100%;
      padding: 12px;
      box-sizing: border-box;
    }
    .d-flex-row {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
    }
    .logo-text {
      color: #e16531;
      font-weight: bold;
      font-size: 18px;
    }
    .text-color {
      color: #212121;
    }
    .space-between {
      display: flex;
      justify-content: space-between;
    }
    .content {
      width: 100%;
      padding: 6px;
      box-sizing: border-box;
      font-weight: bold;
    }
    .content-row {
      width: 100%;
      margin: 12px 0;
    }
    .row-left {
      width: 50%;
      text-align: right;
      margin-right: 6px;
    }
    .row-right {
      width: 50%;
      margin-left: 6px;
    }`),c(Ve,"properties",{lang:{},version:{},hero:{}}),customElements.define("welcome-dialog",Ve);class Ge extends v{constructor(){super();c(this,"_handleDropdown",n=>{n.target&&n.target!==this&&(this.dropdownShown=!1),n.key&&n.key==="Escape"&&(this.dropdownShown=!1)});c(this,"_onDropdown",n=>{this.ondropdown(n.target.id)});this.name="Block3D",this.lang="zh",this.dropdownShown=!1,this.leftdays=0}render(){const n={TITLE_NEW:this.lang==="zh"?"\u65B0\u5EFA":"new",TITLE_OPEN:this.lang==="zh"?"\u6253\u5F00 Ctrl+O":"open Ctrl+O",TITLE_SAVE:this.lang==="zh"?"\u4FDD\u5B58 Ctrl+S":"save Ctrl+S",TITLE_MENU:this.lang==="zh"?"\u83DC\u5355":"menu",TITLE_VIEW_HREF:this.lang==="zh"?"?view=scene":"?view=code",TITLE_LANG:this.lang==="zh"?"\u8BED\u8A00":"Language",TITLE_LANG_HREF:this.lang==="zh"?"?lang=en":"?lang=zh",TITLE_LANG_ICON:this.lang==="zh"?"/media/English.svg":"/media/Chinese.svg",TITLE_HELP:this.lang==="zh"?"\u5E2E\u52A9":"help",TITLE_WEBSITE:"https://www.zjbku.com/",TITLE_HELP_HREF:"https://www.zjbku.com/block3d/index.html",DROPDOWN_OPEN_FOLDER:this.lang==="zh"?"\u6253\u5F00\u6587\u4EF6\u5939":"Open folder",DROPDOWN_SAVE_AS_TEXT:this.lang==="zh"?"\u53E6\u5B58\u4E3A...":"Save as...",DROPDOWN_SAVE_AS_TITLE:this.lang==="zh"?"\u5C06\u5F53\u524D\u9879\u76EE\u53E6\u5B58\u4E3A\u65B0\u9879\u76EE":"save current project as a new one",DROPDOWN_PUBLISH_TEXT:this.lang==="zh"?"\u53D1\u5E03...":"Publish...",DROPDOWN_PUBLISH_TITLE:this.lang==="zh"?"\u53D1\u5E03\u5E76\u5728\u65B0\u7A97\u53E3\u8FD0\u884C\u5E94\u7528":"publish and run app in new window",DROPDOWN_RUN_APP_TEXT:this.lang==="zh"?"\u8FD0\u884C...":"Run...",DROPDOWN_RUN_APP_TITLE:this.lang==="zh"?"\u5728\u65B0\u7A97\u53E3\u8FD0\u884C\u5E94\u7528":"run app in new window",DROPDOWN_REMOVE_APP_TEXT:this.lang==="zh"?"\u5220\u9664...":"Remove...",DROPDOWN_REMOVE_APP_TITLE:this.lang==="zh"?"\u5220\u9664\u5F53\u524D\u9879\u76EE":"remove current project",DROPDOWN_TOOLS_TEXT:this.lang==="zh"?"\u5DE5\u5177":"Tools",DROPDOWN_TABS_TEXT:this.lang==="zh"?"\u9009\u9879\u5361":"Tabs",DROPDOWN_SETTING_TEXT:this.lang==="zh"?"\u8BBE\u7F6E...":"Settings...",DROPDOWN_SETTING_TITLE:this.lang==="zh"?"\u8BBE\u7F6E\u7F16\u8F91\u5668":"the settings for the editor",DROPDOWN_RENAME_TAB_TITLE:this.lang==="zh"?"\u91CD\u547D\u540D\u6FC0\u6D3B\u9009\u9879\u5361":"Rename tha active tab",DROPDOWN_HIDE_LEFT_AREA_TEXT:this.lang==="zh"?"\u9690\u85CF/\u663E\u793A\u7F16\u8F91\u5668":"Hide/Hide editor",DROPDOWN_SEARCH_BLOCK_TEXT:this.lang==="zh"?"\u67E5\u627E\u62FC\u56FE...":"Search block...",DROPDOWN_ACTIVE_TEXT:this.lang==="zh"?"\u6FC0\u6D3B\u7801...":"Active key...",DROPDOWN_ACTIVE_TITLE:this.lang==="zh"?"\u53BB\u9664\u5E7F\u544A":"remove ads",DROPDOWN_ABOUT_TEXT:this.lang==="zh"?"\u5173\u4E8E":"About",DROPDOWN_INSPECTOR_TEXT:this.lang==="zh"?"\u573A\u666F\u67E5\u770B\u5668":"Scene Inspector",TOOLS_GUI_DEITOR_TEXT:this.lang==="zh"?"GUI\u7F16\u8F91\u5668":"GUI Editor",TOOLS_NME_TEXT:this.lang==="zh"?"\u8282\u70B9\u6750\u8D28\u7F16\u8F91\u5668":"NodeMaterial Editor",TOOLS_SANDBOX_TEXT:this.lang==="zh"?"\u6C99\u76D2":"Sandbox",DROPDOWN_TABS_ADD_TEXT:this.lang==="zh"?"\u521B\u5EFA\u9009\u9879\u5361...":"Create New Tab...",DROPDOWN_TABS_REMOVE_TEXT:this.lang==="zh"?"\u5220\u9664\u9009\u9879\u5361...":"Remove Tab...",DROPDOWN_TABS_RENAME_TEXT:this.lang==="zh"?"\u91CD\u547D\u540D\u9009\u9879\u5361...":"Rename Tab..."};return E`
  <div class="menu">
    <a class="menu-left" href="${n.TITLE_WEBSITE}" target="_blank">
      <svg t="1648263165405" class="icon" viewBox="0 0 1177 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1147" width="32" height="32"><path d="M655.43387233 716.09142666L655.43387233 835.93511336a18.96260896 18.96260896 0 0 1-10.42943493 18.07768662Q535.08451596 917.34791325 425.16459449 981.18869544a19.46827783 19.46827783 0 0 1-21.74379139 0Q292.99521198 917.03186951 182.69603786 853.31750437A17.19276507 17.19276507 0 0 1 172.89869043 836.8832438l0-258.14431269a17.12955617 17.12955617 0 0 1 9.92376525-16.30784352c25.28347834-14.34837375 50.06128701-28.8863742 75.02872161-43.36116497 4.42460848-2.52834758 8.78600889-5.30953003 14.79083449-8.91242589-5.05669599-3.35006103-8.78600889-6.32086938-12.64173876-8.40675702-25.28347834-14.66441751-50.5669567-29.45525199-75.85043503-43.74041682A19.9107394 19.9107394 0 0 1 172.89869043 438.35241831q0.37925185-126.41739093 0-253.2140345a20.47961719 20.47961719 0 0 1 12.00965207-20.10036535Q292.99521198 102.90387128 400.44999393 40.07442767a24.14572196 24.14572196 0 0 1 27.68540893-1e-8q107.45478277 63.20869546 215.66806926 124.90038269a20.35320018 20.35320018 0 0 1 11.63040021 20.28999127c-0.50566968 24.3353479 0 48.67069579 0 73.06925181 0 3.72931289 0.44246076 7.45862576 0.82171261 12.64173876 4.55102632-2.21230465 7.6482525-3.53968695 10.61906087-5.24632111 26.67406958-15.3597131 53.47455614-30.71942619 80.02220871-46.33197412a16.87672133 16.87672133 0 0 1 18.96260895 0q110.36238222 64.093617 220.85118226 127.68156511a19.97394751 19.97394751 0 0 1 11.06152161 19.59469567q-0.50566968 126.41739093 0 253.27724262a20.66924314 20.66924314 0 0 1-11.82002613 20.22678315q-108.46612132 62.26056502-216.5529908 125.21642564a22.31266916 22.31266916 0 0 1-25.97877396 0c-26.04198285-15.80217388-52.6528435-30.71942619-79.13728713-45.95272147-2.08588682-0.82171342-4.67744332-1.51700902-8.84921699-3.35006102zM741.77695039 732.52568723a81.4127999 81.4127999 0 0 0 1.13775639-9.41809558c0-71.10978281 0-142.2195648-0.31604375-213.3293476A16.37105246 16.37105246 0 0 0 735.45608101 497.76859199c-61.56526942-36.09216514-123.44658257-71.6786606-185.26468682-107.45478196a82.17130442 82.17130442 0 0 0-8.3435481-3.28685292L541.84784609 492.71189681a15.17008718 15.17008718 0 0 0 9.22846965 15.17008635c30.78263511 17.38239103 61.12280863 35.58649544 91.96865186 52.90567835a21.61737357 21.61737357 0 0 1 12.64173956 21.68058251c-0.6320867 30.15054759 0 60.36430411-0.37925265 90.57806062a15.29650418 15.29650418 0 0 0 8.72279996 15.48613091c23.26079963 12.64173878 46.07913928 26.61086065 69.15031298 39.88468693 2.27551275 1.3905912 4.93027817 2.40193058 8.59638294 4.10856475z m-127.23910437-156.18868668c-4.61423441-2.90760026-7.20579092-4.74065225-9.86055632-6.32086939-22.81833887-13.14740846-45.76309555-25.91556504-68.26539146-39.44222614a15.17008718 15.17008718 0 0 0-17.76164366-1e-8c-30.71942619 18.14089553-61.81810424 35.64970437-92.53752962 53.79059988a20.66924314 20.66924314 0 0 1-23.5136353 0c-31.22509587-18.45693928-63.20869546-36.34499998-94.24416459-54.73873033a12.13606989 12.13606989 0 0 0-14.15874782-0.5688786c-23.95609525 14.28516483-48.228235 28.06466078-72.31074808 42.09699159a68.07576472 68.07576472 0 0 0-6.32086939 5.24632192c2.21230465 1.70663497 3.16043511 2.5915565 4.23498259 3.2236432q94.11774758 54.61231332 188.61474781 108.84537398a15.61254793 15.61254793 0 0 0 12.64173877-0.63208672c44.81496509-25.28347834 89.18746942-51.00941747 133.55997373-76.29289579 19.34186081-11.44077428 38.62051272-22.75513076 59.92184334-35.20724358z m-185.89677348-25.28347835c3.9189388-1.95946981 5.94161753-2.84439135 7.90108654-3.98214771 21.8702084-12.64173878 43.42437388-26.10519098 65.80025276-37.92521712a21.55416546 21.55416546 0 0 0 13.14740845-22.81833887c-0.6320867-38.30446976 0-76.60893876-0.56887859-114.91340852a26.35802582 26.35802582 0 0 1 15.9285917-26.80048738c30.34017353-16.75030432 60.36430411-34.25911314 90.13559985-52.02075603a17.06634807 17.06634807 0 0 0 7.33220876-11.94644397c0.75850452-22.3758781 0.37925185-44.75175617 1e-8-67.19084318a61.56526942 61.56526942 0 0 0-1.45380016-8.53317401c-4.10856555 2.08588681-7.26899984 3.53968695-10.23980899 5.2463219Q526.86738567 262.18978414 436.54215908 314.46337497a15.54933902 15.54933902 0 0 0-8.97563401 15.42292202L427.56652507 540.24483542c0.18962593 2.84439135 0.69529561 5.94161752 1.07454747 10.68226976z" fill="#e16531" p-id="1148"></path></svg>
      <p class="logo-text">${this.name}</p>
    </a>
    <div class="menu-center">
      <div class="btn" id="create" title="${n.TITLE_NEW}" @click="${this._oncreate}">
        <div class="btn-icon"><img src="/media/new.svg" alt="new"></div>
      </div>
      <div class="btn" id="open" title="${n.TITLE_OPEN}" @click="${this._onopen}">
        <div class="btn-icon"><img src="/media/open.svg" alt="open"></div>
      </div>
      <div class="btn" id="save" title="${n.TITLE_SAVE}" @click="${this._onsave}">
        <div class="btn-icon"><img src="/media/save.svg" alt="save"></div>
      </div>

      <div class="dropdown-root">
        <div class="${this.dropdownShown?"btn btn-active":"btn"}" id="menu" title="${n.TITLE_MENU}" @click="${()=>this.dropdownShown=!this.dropdownShown}">
          <div class="btn-icon"><img src="/media/menu.svg" alt="menu"></div>
        </div>
        <div class="${this.dropdownShown?"dropdown-content d-block":"d-none"}" id="dropdownContent" @click="${this._onDropdown}">
          <p class="dropdown-label" title="${n.DROPDOWN_OPEN_FOLDER}" id="openFolder">
            ${n.DROPDOWN_OPEN_FOLDER}<span class="dropdown-shortcut">Alt+Shift+R</span>
          </p>
          <p class="dropdown-label" title="${n.DROPDOWN_SAVE_AS_TITLE}" id="saveAs">
            ${n.DROPDOWN_SAVE_AS_TEXT}<span class="dropdown-shortcut">Ctrl+Shift+S</span>
          </p>
          <p class="dropdown-label" title="${n.DROPDOWN_REMOVE_APP_TITLE}" id="removeApp">
            ${n.DROPDOWN_REMOVE_APP_TEXT}
          </p>
          <p class="dropdown-label" title="${n.DROPDOWN_PUBLISH_TITLE}" id="publishApp">
            ${n.DROPDOWN_PUBLISH_TEXT}
            <span class="dropdown-shortcut">Ctrl+P</span>
          </p>
          <p class="dropdown-label" title="${n.DROPDOWN_RUN_APP_TITLE}" id="runApp">
            ${n.DROPDOWN_RUN_APP_TEXT}
          </p>
        
          <div class="dropdown-separator"></div>
        
          <div class="dropdown-root dropdown-submenu-root" id="dropdownTools">
            <p class="dropdown-label">
              ${n.DROPDOWN_TOOLS_TEXT}
              <span class="dropdown-shortcut"><img src="/media/right.svg" alt=""></span>
            </p>
            <div class="dropdown-submenu">
              <p class="dropdown-label" id="inspectorTool">
                ${n.DROPDOWN_INSPECTOR_TEXT}
                <span class="dropdown-shortcut">Ctrl+I Alt+I</span>
              </p>
              <a href="/tools/guiEditor/index.html" target="_blank">
                <p class="dropdown-label">${n.TOOLS_GUI_DEITOR_TEXT}</p>
              </a>
              <a href="/tools/nodeEditor/index.html" target="_blank">
                <p class="dropdown-label">${n.TOOLS_NME_TEXT}</p>
              </a>
            </div>
          </div>

          <div class="dropdown-root dropdown-submenu-root" id="dropdownTabs">
            <p class="dropdown-label">
              ${n.DROPDOWN_TABS_TEXT}
              <span class="dropdown-shortcut"><img src="/media/right.svg" alt=""></span>
            </p>
            <div class="dropdown-submenu">
              <p class="dropdown-label" id="addTab">${n.DROPDOWN_TABS_ADD_TEXT}</p>
              <p class="dropdown-label" id="removeTab">${n.DROPDOWN_TABS_REMOVE_TEXT}</p>
              <p class="dropdown-label" id="renameTab">${n.DROPDOWN_TABS_RENAME_TEXT}</p>
            </div>
          </div>

          <p class="dropdown-label" title="${n.DROPDOWN_HIDE_LEFT_AREA_TEXT}" id="hideEditor">
            ${n.DROPDOWN_HIDE_LEFT_AREA_TEXT}<span class="dropdown-shortcut">Alt+Shift+H</span>
          </p>
          <p class="dropdown-label" title="${n.DROPDOWN_SEARCH_BLOCK_TEXT}" id="searchBlock">
            ${n.DROPDOWN_SEARCH_BLOCK_TEXT}<span class="dropdown-shortcut">Ctrl+Shift+F</span>
          </p>
        
          <div class="dropdown-separator"></div>
        
          <p class="dropdown-label" title="${n.DROPDOWN_ACTIVE_TITLE}" id="licenseKey">
            ${n.DROPDOWN_ACTIVE_TEXT}
          </p>
          <p class="dropdown-label" title="${n.DROPDOWN_SETTING_TITLE}" id="setting">
            ${n.DROPDOWN_SETTING_TEXT}
          </p>
          <p class="dropdown-label" title="${n.DROPDOWN_ABOUT_TEXT}" id="about">
            ${n.DROPDOWN_ABOUT_TEXT}
          </p>
        </div>
      </div>

    </div>
    <div class="menu-right">
      <a class="btn a-block" title="${n.TITLE_LANG}" href="${n.TITLE_LANG_HREF}">
        <div class="btn-icon"><img src="${n.TITLE_LANG_ICON}" alt="language"></div>
      </a>
      <a class="btn a-block" title="${n.TITLE_HELP}" href="${n.TITLE_HELP_HREF}" target="_blank">
        <div class="btn-icon"><img src="/media/help.svg" alt="help"></div>
      </a>
    </div>
  </div>
    `}connectedCallback(){super.connectedCallback(),window.addEventListener("click",this._handleDropdown),addEventListener("keydown",this._handleDropdown)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("click",this._handleDropdown),window.removeEventListener("keydown",this._handleDropdown)}oncreate(){}_oncreate(){this.oncreate()}onopen(){}_onopen(){this.onopen()}onsave(){}_onsave(){this.onsave()}ondropdown(){}}c(Ge,"styles",[U,C`
    * {
      margin: 0;
      padding: 0;
    }
    
    .menu {
      width: 100%;
      height: 55px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--bg);
      border-bottom: var(--border);
    }
    
    .menu-left {
      flex: 0 0 auto;
      margin-right: auto;
      margin-left: 10px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
    }
    
    .menu-center {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1 0 auto;
    }
    
    .menu-right {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: auto;
    }
    
    @media (max-width: 768px) {
      .logo-text {
        display: none;
      }
      .menu-right {
        display: none;
      }
    }
    
    .logo {
      width: 26px;
      height: 26px;
    }
    
    .logo-text {
      color: var(--color);
      margin-left: 6px;
      font-size: 22px;
    }
    
    .a-block {
      display: block;
    }
    
    .btn {
      width: 55px;
      height: 55px;
      cursor: pointer;
    }
    
    .btn:hover {
      background-color: white;
    }
    
    .btn:active {
      transform: scale(0.95);
    }
    
    .btn-icon {
      width: 100%;
      height: 100%;
      display: grid;
      justify-content: center;
      align-items: center;
    }
    
    .btn-icon:hover {
      filter: invert(100%);
    }
    
    .btn-icon img {
      filter: invert(100%);
      user-select: none;
    }
    
    .btn-active {
      transform: scale(0.95);
      background-color: white;
    }
    
    .btn-active .btn-icon:hover {
      filter: invert(0);
    }
    
    .btn-active .btn-icon img {
      filter: invert(0);
    }
    
    .dropdown-root {
      position: relative;
    }
    
    .dropdown-content {
      position: absolute;
      top: 55px;
      width: var(--dropdown-width);
      z-index: 100;
      background-color: var(--bg);
      filter: drop-shadow(0px 0px 5px black);
    }
    
    .dropdown-label {
      position: relative;
      height: 35px;
      line-height: 35px;
      padding: 5px 5px 5px 10px;
      color: var(--color);
      font-size: 16px;
      text-align: start;
      cursor: pointer;
      user-select: none;
    }
    
    .dropdown-label:hover {
      background-color: var(--bg-light);
    }
    
    .dropdown-shortcut {
      position: absolute;
      right: 10px;
      pointer-events: none;
    }
    
    .dropdown-offical-version {
      border-radius: 4px;
      font-size: 0.5rem;
      padding: 0 0.2rem;
      border: 1px solid #aaa;
      pointer-events: none;
    }
    
    .dropdown-submenu-root {
      overflow: hidden;
    }
    
    .dropdown-submenu-root:hover {
      overflow: visible;
    }
    
    .dropdown-submenu {
      position: absolute;
      left: var(--dropdown-width);
      top: 0;
      width: var(--dropdown-width);
      display: block;
      background-color: var(--bg);
      border-left: 1px solid #151515;
    }
    
    .dropdown-separator {
      border-bottom: var(--border);
      height: 0;
      margin: 3px 7px;
    }
  `]),c(Ge,"properties",{name:{},lang:{},dropdownShown:{},leftdays:{}}),customElements.define("editor-menu",Ge);class He extends v{constructor(){super();c(this,"_playback",()=>{this.playback&&this.playback()});this.info="",this.fps="",this.running=!0,this.lang="zh"}getYear(){return new Date().getFullYear()}render(){const n=this.lang==="zh"?`\u7248\u6743\u6240\u6709\xA9 2022-${this.getYear()} \u5B85\u5BB6\u5457`:`Copyright \xA9 2022-${this.getYear()} zjbku`;return E`
  <div class="footer-left">
    <p class="copyright">${n}</p>
  </div>
  <div class="footer-middle">
    <i class="info">${this.info}</i>
  </div>
  <div class="footer-right">
    <div id="clearInfo" class="icon-center" title=${this.lang=="zh"?"\u6E05\u7A7A\u4FE1\u606F":"clear info"}>
      <img @click="${this._clearInfo}" src="/media/clear-info.svg" alt="clear">
    </div>
    <div id="playbackControl" class="icon-center">
      <img @click="${this._playback}" src=${this.running?"/media/pause.svg":"/media/play.svg"} alt="playback">
    </div>
    <p class="w-68">FPS:<span>${this.fps}</span></p>
  </div>
    `}_clearInfo(){this.info=""}playback(){}}c(He,"styles",[U,C`
    * {
      margin: 0;
      padding: 0;
    }
    :host {
      width: 100%;
      height: 22px;
      padding: 0 6px;
      background-color: var(--bg);
      color: var(--color);
      display: inline-flex;
      justify-content: space-between;
      border-top: var(--border);
      z-index: 100;
    }
    .info {
      font-size: 14px;
      color: #eee;
    }
    .footer-left {
      min-width: 100px;
    }
    .footer-middle {
      min-width: 100px;
    }
    .footer-right {
      min-width: 100px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: end;
      gap: 10px;
      user-select: none;
    }
    .copyright {
      color: #858585;
      user-select: none;
    }
    #clearInfo {
      cursor: pointer;
    }
    #playbackControl {
      cursor: pointer;
    }
    .icon-center {
      display: flex;
      align-items: center;
    }
    .w-68 {
      width: 68px;
    }
  `]),c(He,"properties",{info:{},fps:{},running:{},lang:{}}),customElements.define("editor-footer",He);class $e extends v{constructor(){super();c(this,"searchRef",z());c(this,"onKeyDown_",n=>{const a=this.renderRoot.querySelectorAll(".dropdown");switch(n.key==="F"&&n.shiftKey&&n.ctrlKey&&this.onToggle_(),n.key==="Escape"&&this.display(!1),n.key){case"Enter":this.onEnter_();break;case"ArrowDown":this.onArrowDown_(a);break;case"ArrowUp":this.onArrowUp_(a);break}});c(this,"onToggle_",()=>{this.searchRef.value.value="",this.isVisible=!this.isVisible,this.display(this.isVisible)});c(this,"onEnter_",()=>{const n=this.options[this.currIndex];n&&setTimeout(()=>{this.createBlock(e.getMainWorkspace(),n),this.display(!1)},200)});c(this,"onArrowDown_",n=>{!this.options.length||(n.forEach(a=>a.classList.contains("dropdown-select")&&a.classList.remove("dropdown-select")),this.currIndex+=1,this.currIndex===this.options.length&&(this.currIndex=0),n[this.currIndex].classList.add("dropdown-select"))});c(this,"onArrowUp_",n=>{!this.options.length||(n.forEach(a=>a.classList.contains("dropdown-select")&&a.classList.remove("dropdown-select")),this.currIndex-=1,this.currIndex<0&&(this.currIndex=this.options.length-1),n[this.currIndex].classList.add("dropdown-select"))});c(this,"selectItem_",n=>{const a=n.target.innerText;this.createBlock(e.getMainWorkspace(),a),this.display(!1)});c(this,"serach_",n=>{const a=n.target.value.toLowerCase().trim().split(" ");this.options=this.getBlockType(a),!n.target.value&&(this.options.length=0)});this.workspace=null,this.options=[],this.isVisible=!1,this.currIndex=0,this.selectedBlock=null}render(){const n=this;return E`
  <div class="search-container ${this.isVisible?"show":"hide"}">
    <div class="search-bar">
      <input ${B(this.searchRef)} class="input-text" type="text" @input="${bt(200,!0,n.serach_)}" placeholder="search block">
    </div>
    <ul id="serachDropdown" @click="${this.selectItem_}">
      ${n.options.map(a=>E`<li class='dropdown'>${a}</li>`)}
    </ul>
  </div>`}connectedCallback(){super.connectedCallback(),addEventListener("keydown",this.onKeyDown_)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKeyDown_)}display(n){const a=this.searchRef.value;this.isVisible=n,this.options.length=0,this.currIndex=0,e.selected&&(this.selectedBlock=e.selected,e.selected.unselect()),setTimeout(()=>{this.isVisible&&(a.focus(),a.value="")},50)}getBlockType(n){const a=Object.keys(e.Blocks),s=["variables_set","variables_get","field_vector2","field_vector3","field_vector4","field_color2","field_color3","field_color4","empty_object","empty_array","emptyBlock","text_create_join_item","text_create_join_container","text_create_join_item_container","text_prompt","lists_create_width_item","lists_create_empty","lists_create_width","lists_create_width_container","procedures_mutatorcontainer","procedures_mutatorarg"];for(let p of s)a.splice(a.indexOf(p),1);const r=[];for(let p of a){const d=p.replace("_"," ");if(n.every(u=>d.includes(u))&&r.push(p),r.length>=8)break}return r}createBlock(n,a){const s=n.getMetrics(),r=e.utils.xml.createElement("block");r.setAttribute("type",a);const p=e.Xml.domToBlock(r,n);if(this.selectedBlock){const d=this.selectedBlock.getRelativeToSurfaceXY().clone();d.translate(20,this.selectedBlock.getHeightWidth().height+20),p.moveTo(d)}else p.moveTo(new e.utils.Coordinate(s.viewWidth/2+s.viewLeft,s.viewHeight/2+s.viewTop));n.centerOnBlock(p.id),setTimeout(()=>{p.select()},50)}}c($e,"styles",C`
  .search-container {
    position: absolute;
    top: 20px;
    left: 50%;
    left: 50%;
    transform: translateX(-50%);
    width: 260px;
    z-index: 9999;
    background-color: rgb(33, 33, 33);
  }

  .search-bar {
    display: flex;
  }

  ul {
    width: 100%;
    box-sizing: border-box;
    background: #212121;
    color: #9a9a9a;
    border-radius: 4px;
    list-style: none;
    display: flex;
    flex-flow: column nowrap;
    padding: 0;
    margin: 0;
    max-height: 400px;
    overflow: hidden;
  }
  .input-text {
    height: 30px;
    width: 100%;
    font-size: inherit;
    padding: 5px;
    color: #eeeeee;
    border: 1px solid #505050;
    background-color: #0c0c0c;
  }
  .dropdown {
    padding: 6px;
    border-bottom: 1px solid rgb(51, 51, 51);
    cursor: pointer;
    user-select: none;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .dropdown:nth-child(1),
  .dropdown-select,
  .dropdown:hover {
    background-color: #5c5c5c;
    color: #c8c8c8;
  }
  .hide {
    visibility: hidden;
  }
  .show {
    visibility: visible;
  }`),c($e,"properties",{workspace:{},options:{state:!0},isVisible:{},currIndex:{},selectedBlock:{}}),customElements.define("search-block",$e);class Ct extends v{render(){return E`
  <div class="dialog-bg load8">
    <div class="loader"></div>
  </div>
    `}close(){this.style.display="none"}open(){this.style.display="block"}}c(Ct,"styles",[U,C`
    .load8 .loader,
    .load8 .loader:after {
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
    }
    .load8 .loader {
      margin: 60px auto;
      font-size: 10px;
      position: relative;
      text-indent: -9999em;
      border-top: 1.1em solid rgba(255, 255, 255, 0.2);
      border-right: 1.1em solid rgba(255, 255, 255, 0.2);
      border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
      border-left: 1.1em solid #ffffff;
      -webkit-transform: translateZ(0);
      -ms-transform: translateZ(0);
      transform: translateZ(0);
      -webkit-animation: load8 1.1s infinite linear;
      animation: load8 1.1s infinite linear;
    }
    @-webkit-keyframes load8 {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    @keyframes load8 {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  `]),customElements.define("loading-screen",Ct);class Rt extends v{render(){return E`
    <a class="card" href="https://shop.zjbku.com" target="_blank">
      <div class="title">
        <svg t="1652591063211" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15760" width="40" height="40"><path d="M512 512m-490.75 0a490.75 490.75 0 1 0 981.5 0 490.75 490.75 0 1 0-981.5 0Z" fill="#FFFFFF" p-id="15761"></path><path d="M512 1024c-69.11 0-136.16-13.54-199.3-40.24-60.97-25.79-115.72-62.7-162.74-109.72-47.01-47.02-83.93-101.77-109.72-162.74C13.54 648.16 0 581.11 0 512s13.54-136.16 40.24-199.3c25.79-60.97 62.7-115.72 109.72-162.74 47.01-47.01 101.77-83.93 162.74-109.72C375.84 13.54 442.89 0 512 0s136.16 13.54 199.3 40.24c60.97 25.79 115.72 62.7 162.74 109.72 47.01 47.01 83.93 101.77 109.72 162.74 26.7 63.14 40.24 130.19 40.24 199.3s-13.54 136.16-40.24 199.3c-25.79 60.97-62.7 115.72-109.72 162.74-47.01 47.01-101.77 83.93-162.74 109.72-63.14 26.7-130.19 40.24-199.3 40.24z m0-981.5C253.12 42.5 42.5 253.12 42.5 512S253.12 981.5 512 981.5 981.5 770.88 981.5 512 770.88 42.5 512 42.5z" fill="#EB803F" p-id="15762"></path><path d="M512 96.66C283.39 96.66 98.07 282.61 98.07 512S283.39 927.34 512 927.34c228.6 0 413.93-185.95 413.93-415.34S740.61 96.66 512 96.66z" fill="#EB803F" p-id="15763"></path><path d="M750.85 621.19c-4.29-60.03-17.15-111.49-30.02-111.49-47.17-4.29-85.76 12.86-120.07 42.88-55.74-51.46-90.05-51.46-167.23-12.86-4.29-51.46-12.86-102.91-17.15-150.08 0-21.44 0-47.17 12.87-60.03 17.15-17.15 38.59 8.57 55.74 17.15 25.73 17.15 85.76-8.58 90.05-34.3 4.29-34.3-38.59-90.05-72.9-85.76-42.88 4.29-85.76 17.15-124.35 30.02-8.57 0-17.15 8.58-17.15 17.15-21.44 60.03-47.17 120.06-64.32 180.1-12.86 60.03-21.44 124.35-25.73 188.67 0 12.86 8.57 30.02 17.15 38.59 107.2 68.61 222.97 81.47 338.75 25.73 30.02-17.15 42.88-8.57 64.32 8.58 8.57 8.58 25.73 17.15 34.3 25.73 4.29 4.29 17.15-4.29 17.15-8.58 12.87-0.02 12.87-51.47 8.59-111.5z m0 0" fill="#FFFFFF" p-id="15764"></path></svg>
        <h1 class="ml-10">支持Block3D<h1>
      </div>
      <h3>去广告1年</h3>
      <h1 class="text-orange">￥599</h1>
    </a>
      
    <a class="card" href="https://shop.zjbku.com" target="_blank">
      <div class="title">
        <svg t="1652591063211" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15760" width="40" height="40"><path d="M512 512m-490.75 0a490.75 490.75 0 1 0 981.5 0 490.75 490.75 0 1 0-981.5 0Z" fill="#FFFFFF" p-id="15761"></path><path d="M512 1024c-69.11 0-136.16-13.54-199.3-40.24-60.97-25.79-115.72-62.7-162.74-109.72-47.01-47.02-83.93-101.77-109.72-162.74C13.54 648.16 0 581.11 0 512s13.54-136.16 40.24-199.3c25.79-60.97 62.7-115.72 109.72-162.74 47.01-47.01 101.77-83.93 162.74-109.72C375.84 13.54 442.89 0 512 0s136.16 13.54 199.3 40.24c60.97 25.79 115.72 62.7 162.74 109.72 47.01 47.01 83.93 101.77 109.72 162.74 26.7 63.14 40.24 130.19 40.24 199.3s-13.54 136.16-40.24 199.3c-25.79 60.97-62.7 115.72-109.72 162.74-47.01 47.01-101.77 83.93-162.74 109.72-63.14 26.7-130.19 40.24-199.3 40.24z m0-981.5C253.12 42.5 42.5 253.12 42.5 512S253.12 981.5 512 981.5 981.5 770.88 981.5 512 770.88 42.5 512 42.5z" fill="#EB803F" p-id="15762"></path><path d="M512 96.66C283.39 96.66 98.07 282.61 98.07 512S283.39 927.34 512 927.34c228.6 0 413.93-185.95 413.93-415.34S740.61 96.66 512 96.66z" fill="#EB803F" p-id="15763"></path><path d="M750.85 621.19c-4.29-60.03-17.15-111.49-30.02-111.49-47.17-4.29-85.76 12.86-120.07 42.88-55.74-51.46-90.05-51.46-167.23-12.86-4.29-51.46-12.86-102.91-17.15-150.08 0-21.44 0-47.17 12.87-60.03 17.15-17.15 38.59 8.57 55.74 17.15 25.73 17.15 85.76-8.58 90.05-34.3 4.29-34.3-38.59-90.05-72.9-85.76-42.88 4.29-85.76 17.15-124.35 30.02-8.57 0-17.15 8.58-17.15 17.15-21.44 60.03-47.17 120.06-64.32 180.1-12.86 60.03-21.44 124.35-25.73 188.67 0 12.86 8.57 30.02 17.15 38.59 107.2 68.61 222.97 81.47 338.75 25.73 30.02-17.15 42.88-8.57 64.32 8.58 8.57 8.58 25.73 17.15 34.3 25.73 4.29 4.29 17.15-4.29 17.15-8.58 12.87-0.02 12.87-51.47 8.59-111.5z m0 0" fill="#FFFFFF" p-id="15764"></path></svg>
        <h1 class="ml-10">支持Block3D<h1>
      </div>
      <h3>去广告3个月</h3>
      <h1 class="text-orange">￥199</h1>
    </a>
  
    <a class="card" href="https://shop.zjbku.com" target="_blank">
      <div class="title">
        <svg t="1652591063211" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15760" width="40" height="40"><path d="M512 512m-490.75 0a490.75 490.75 0 1 0 981.5 0 490.75 490.75 0 1 0-981.5 0Z" fill="#FFFFFF" p-id="15761"></path><path d="M512 1024c-69.11 0-136.16-13.54-199.3-40.24-60.97-25.79-115.72-62.7-162.74-109.72-47.01-47.02-83.93-101.77-109.72-162.74C13.54 648.16 0 581.11 0 512s13.54-136.16 40.24-199.3c25.79-60.97 62.7-115.72 109.72-162.74 47.01-47.01 101.77-83.93 162.74-109.72C375.84 13.54 442.89 0 512 0s136.16 13.54 199.3 40.24c60.97 25.79 115.72 62.7 162.74 109.72 47.01 47.01 83.93 101.77 109.72 162.74 26.7 63.14 40.24 130.19 40.24 199.3s-13.54 136.16-40.24 199.3c-25.79 60.97-62.7 115.72-109.72 162.74-47.01 47.01-101.77 83.93-162.74 109.72-63.14 26.7-130.19 40.24-199.3 40.24z m0-981.5C253.12 42.5 42.5 253.12 42.5 512S253.12 981.5 512 981.5 981.5 770.88 981.5 512 770.88 42.5 512 42.5z" fill="#EB803F" p-id="15762"></path><path d="M512 96.66C283.39 96.66 98.07 282.61 98.07 512S283.39 927.34 512 927.34c228.6 0 413.93-185.95 413.93-415.34S740.61 96.66 512 96.66z" fill="#EB803F" p-id="15763"></path><path d="M750.85 621.19c-4.29-60.03-17.15-111.49-30.02-111.49-47.17-4.29-85.76 12.86-120.07 42.88-55.74-51.46-90.05-51.46-167.23-12.86-4.29-51.46-12.86-102.91-17.15-150.08 0-21.44 0-47.17 12.87-60.03 17.15-17.15 38.59 8.57 55.74 17.15 25.73 17.15 85.76-8.58 90.05-34.3 4.29-34.3-38.59-90.05-72.9-85.76-42.88 4.29-85.76 17.15-124.35 30.02-8.57 0-17.15 8.58-17.15 17.15-21.44 60.03-47.17 120.06-64.32 180.1-12.86 60.03-21.44 124.35-25.73 188.67 0 12.86 8.57 30.02 17.15 38.59 107.2 68.61 222.97 81.47 338.75 25.73 30.02-17.15 42.88-8.57 64.32 8.58 8.57 8.58 25.73 17.15 34.3 25.73 4.29 4.29 17.15-4.29 17.15-8.58 12.87-0.02 12.87-51.47 8.59-111.5z m0 0" fill="#FFFFFF" p-id="15764"></path></svg>
        <h1 class="ml-10">支持Block3D<h1>
      </div>
      <h3>去广告1个月</h3>
      <h1 class="text-orange">￥99</h1>
    </a>
  `}}c(Rt,"styles",C`
    :host {
      flex: 0 1 auto;
      display: flex;
      flex-flow: column nowrap;
      gap: 12px;
    }
    .card {
      width: 350px;
      height: 280px;
      margin: 0 4px;
      background-color: #0d1522;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      text-decoration: none;
      color: #eee;
    }
    .title {
      display: inline-flex;
      align-items: center;
    }
    .ml-10 {
      margin-left: 10px;
    }
    .text-orange {
      color: #e16531;
    }
  `),customElements.define("editor-aside",Rt);function w(i){return document.createElement(i)}function ki(i,t){i=typeof i=="string"?document.getElementById("root"):i;const{TITLE:n,PROJECT_NAME:a,LANG:s,PROJECTS_LIST:r,LICENSE_STATUS:p,LICENSE_LEFT_DAYS:d,EXPIRES:l,APP_HOST:u,APP_PORT:M,PROJECTS_FOLDER:g,AUTO_OPEN:_,AUTO_SAVE:I,EXTERNAL_SERVER:Y,VERSION:Q,RELEASE_DATE:fa}=t,V=document.body,oe=w("div");oe.className="editor-container",i.appendChild(oe);const pe=w("editor-menu");pe.id="menu",pe.lang=s,pe.name=n,pe.leftdays=d,oe.appendChild(pe);const Ei=w("main");Ei.innerHTML=`
  <div class="editor" id="editor">
    <search-block id="searchBlockDialog"></search-block>
  </div>
  <div class="gutter" id="gutter"></div>
  <div class="output" id="output">
    <div id="sceneView" class="view">
      <canvas id="renderCanvas" class="renderCanvas" touch-action="none"></canvas>
    </div>
  </div>
  `,oe.appendChild(Ei);const at=w("editor-footer");at.id="editorFooter",at.lang=s,oe.appendChild(at);const st=w("create-dialog");st.id="newProjectDialog",st.lang=s,V.appendChild(st);const Ae=w("projects-dialog");Ae.id="projectsDialog",Ae.lang=s,Ae.projects=r,V.appendChild(Ae);const rt=w("publish-dialog");rt.id="publishDialog",rt.lang=s,V.appendChild(rt);const ee=w("license-dialog");ee.id="licenseDialog",ee.lang=s,ee.status=p,ee.expires=l,ee.leftdays=d,V.appendChild(ee);const J=w("settings-dialog");J.id="settingsDialog",J.lang=s,J.host=u,J.port=M,J.projects=g,J.autoopen=_,J.save=I,J.external=Y,V.appendChild(J);const de=w("about-dialog");de.id="aboutDialog",de.lang=s,de.version=Q,de.releaseDate=fa,V.appendChild(de);const be=w("welcome-dialog");be.lang=s,be.version=Q,be.hero="/media/hero.jpg",a==="defaultProject"&&V.appendChild(be);const Ni=w("loading-screen");Ni.id="loadingScreen",V.appendChild(Ni)}const Xi=`:root{--light: #eee;--dark: #333;--border: solid #6f6f6f 1px}.blocklyTreeLabel{color:var(--light)}.blocklyToolboxContents{padding:6px}.blocklyTreeRow{padding:4px;margin:3px 0;border-radius:4px;height:initial;background-color:#212121;border:none!important}.blocklyTreeRowContentContainer{display:flex;flex-direction:row;align-items:center}.blocklyTreeIcon{display:none!important}.blocklyTreeLabel{cursor:default;font:16px sans-serif;padding:0 3px;margin-left:4px;vertical-align:middle}.blocklyTreeSeparator{border-bottom:var(--border)}.blocklyMainBackground{stroke:none}.blocklyWidgetDiv .blocklyMenu{background-color:#212121;overflow:visible}.blocklyDropDownDiv{border:none;background-color:#212121}.blocklyMenuItem{color:#ddd;background-color:#212121}.blocklyMenuItemCheckbox{filter:invert(1)}.sizeSmall{width:25px;height:20px;padding:10px}.labelNone{display:none}.textIcon{background:center / contain no-repeat url(/media/text.svg)}.numberIcon{background:center / contain no-repeat url(/media/number.svg)}.arrayIcon{background:center / contain no-repeat url(/media/array.svg)}.objectIcon{background:center / contain no-repeat url(/media/object.svg)}.logicIcon{background:center / contain no-repeat url(/media/logic.svg)}.loopIcon{background:center / contain no-repeat url(/media/loop.svg)}.variableIcon{background:center / contain no-repeat url(/media/variable.svg)}.functionIcon{background:center / contain no-repeat url(/media/function.svg)}.systemIcon{background:center / contain no-repeat url(/media/system.svg)}.advancedIcon{background:center / contain no-repeat url(/media/advanced.svg)}.sceneIcon{background:center / contain no-repeat url(/media/scene.svg)}.nodeIcon{background:center / contain no-repeat url(/media/node.svg)}.meshIcon{background:center / contain no-repeat url(/media/mesh.svg)}.cameraIcon{background:center / contain no-repeat url(/media/camera.svg)}.lightIcon{background:center / contain no-repeat url(/media/light.svg)}.eventIcon{background:center / contain no-repeat url(/media/event.svg)}.animateIcon{background:center / contain no-repeat url(/media/animate.svg)}.timeIcon{background:center / contain no-repeat url(/media/time.svg)}.materialIcon{background:center / contain no-repeat url(/media/material.svg)}.vectorIcon{background:center / contain no-repeat url(/media/vector.svg)}.toolIcon{background:center / contain no-repeat url(/media/tool.svg)}.guiIcon{background:center / contain no-repeat url(/media/gui.svg)}.inspectorIcon{background:center / contain no-repeat url(/media/inspector.svg)}.tweakpaneIcon{background:center / contain no-repeat url(/media/tweakpane.svg)}
`;function Wi(i,t){const n=(t=t===void 0?{}:t).insertAt;if(i&&typeof document<"u"){const a=document.head||document.getElementsByTagName("head")[0];t=document.createElement("style"),t.type="text/css",n==="top"&&a.firstChild?a.insertBefore(t,a.firstChild):a.appendChild(t),t.styleSheet?t.styleSheet.cssText=i:t.appendChild(document.createTextNode(i))}}Wi(Xi);function Qe(i,t,n){const a={},s={};return i.forEach(r=>{const[p,d,l]=r;a[p]=l,s[p]=d}),{_boolOptValues:a,_boolOptLabels:s,_boolOptColor:t,mutationToDom(){let r,p;p=document.createElement("mutation");for(r in this._boolOptValues)p.setAttribute(r.toLowerCase(),Boolean(this._boolOptValues[r]));return p},domToMutation(r){let p;for(p in this._boolOptValues)this._boolOptValues[p]=r.getAttribute(p.toLowerCase())=="true";n&&n.call(this,null)},decompose(r){let p,d;d=r.newBlock("emptyBlock"),d.setStyle(this._boolOptColor),d.inputList.forEach(l=>d.removeInput(l.name));for(p in this._boolOptValues)d.appendDummyInput().appendField(this._boolOptLabels[p]).appendField(new e.FieldCheckbox(this._boolOptValues[p]?"TRUE":"FALSE"),p).setAlign(e.ALIGN_RIGHT);return d.initSvg(),d},compose(r){let p;for(p in this._boolOptValues)this._boolOptValues[p]=r.getFieldValue(p)=="TRUE";n&&n.call(this,r)}}}function ue(i){return`()=> {${i}}`}function Ki(i){return document.implementation.createDocument("","").createElement(i)}function x(i){if(i.connection&&i.connection.isConnected()){const t=i.connection.targetBlock();t.isShadow()&&t.dispose()}}function o(i,t,n){if(i.connection){let a=Ki("xml");return a.innerHTML=Dt(t,n),i.connection.setShadowDom(a.firstElementChild),a=i.connection.targetBlock(),a===null?i.connection.respawnShadow_():a.isShadow()&&(a.dispose(),i.connection.respawnShadow_()),i}}function Dt(i,t){switch(i){case"NUM":return`<shadow type="math_number">
<field name="NUM">${t}</field>
</shadow>`;case"ANGLE":return`<shadow type="math_angle">
<field name="ANGLE">${t}</field>
</shadow>`;case"TEXT":return`<shadow type="text">
<field name="TEXT">${t}</field>
</shadow>`;case"BOOL":return`<shadow type="logic_boolean">
<field name="BOOL">${t}</field>
</shadow>`;case"NULL":return'<shadow type="logic_null"></shadow>';case"OBJECT":return'<shadow type="empty_object"></shadow>';case"ARRAY":return'<shadow type="empty_array"></shadow>';case"MESH":return`<shadow type="mesh_selector">
<field name="NAME">${t}</field>
</shadow>`;case"CAMERA":return`<shadow type="camera_selector">
<field name="NAME">${t}</field>
</shadow>`;case"LIGHT":return`<shadow type="light_selector">
<field name="NAME">${t}</field>
</shadow>`;case"VECTOR2":return`<shadow type="field_vector2">
<field name="X">${t[0]}</field>
<field name="Y">${t[1]}</field>
</shadow>`;case"VECTOR3":return`<shadow type="field_vector3">
<field name="X">${t[0]}</field>
<field name="Y">${t[1]}</field>
<field name="Z">${t[2]}</field>
</shadow>`;case"VECTOR4":return`<shadow type="field_vector4">
<field name="X">${t[0]}</field>
<field name="Y">${t[1]}</field>
<field name="Z">${t[2]}</field>
<field name="W">${t[3]}</field>
</shadow>`;case"COLOR3":return`<shadow type="field_color3">
<field name="R">${t[0]}</field>
<field name="G">${t[1]}</field>
<field name="B">${t[2]}</field>
</shadow>`;case"COLOR4":return`<shadow type="field_color4">
<field name="R">${t[0]}</field>
<field name="G">${t[1]}</field>
<field name="B">${t[2]}</field>
<field name="A">${t[3]}</field>
</shadow>`;case"NONE":return}}class h{constructor(t){this._list=t,this.shadowToType={NUM:"Number",ANGLE:"Number",TEXT:"String",BOOL:"Boolean",OBJECT:"Object",ARRAY:"Array",MESH:"Mesh",LIGHT:"Light",MATERIAL:"Material",VECTOR2:"Vector2",VECTOR3:"Vector3",VECTOR4:"Vector4",COLOR3:"Color3",COLOR4:"Color4",NONE:null,null:null}}getList(){return this._list.map(t=>t[1])}generatMenu(){return this._list.map(t=>Array(t[0],t[1]))}updateShape(t,n,a){this.updateShadow(n,a),this.updateTooltip(t,a)}updateShadow(t,n){if(!t)return;const a=this._list.findIndex(p=>p[1]==n),s=this._list[a][2],r=this._list[a][3];x(t),t.setCheck(this.shadowToType[s]),o(t,s,r)}updateTooltip(t,n){const a=this._list.findIndex(r=>r[1]==n),s=this._list[a][4];!s||(e.Msg[s]?t.setTooltip(e.Msg[s]):t.setTooltip(s))}}const Zi=e.utils.xml;function R(i){return{getSurround(){let t=this;do{if(t.type==i||i.includes(t.type))return t;t=t.getSurroundParent()}while(t);return null},onchange(t){if(!this.workspace.isDragging||this.workspace.isDragging()||t.type!==e.Events.BLOCK_MOVE)return;const n=this.getSurround(this);if(this.setWarningText(n?null:`This block may only be used within "${i}" block.`),!this.isInFlyout){const a=e.Events.getGroup();e.Events.setGroup(t.group),this.setEnabled(n),e.Events.setGroup(a)}}}}const qi={customContextMenu:function(i){if(!this.isInFlyout){const t=e.utils.xml.createElement("block"),n=this.getFieldValue("TYPE");t.setAttribute("type",`mesh_create_${n.toLowerCase()}_option`);const a={enabled:this.workspace.remainingCapacity()>0,text:`${e.Msg.CREATE_BLOCK} 'option'`,callback:e.ContextMenu.callbackFactory(this,t)};i.push(a)}}};function he(i,t,n,a,s){return{customContextMenu:function(r){if(!this.isInFlyout){const p={enabled:this.workspace.remainingCapacity()>0,text:`${e.Msg.CREATE_BLOCK} ${t}`},d=e.utils.xml.createElement("block");if(d.setAttribute("type",i),i==="variables_get"||i==="variables_set"){n=n||"VAR";const l=this.workspace.getVariableById(this.getFieldValue(n)),u=e.Variables.generateVariableFieldDom(l);d.appendChild(u)}else if(n&&a&&s){const l=e.utils.xml.createElement("value");l.setAttribute("name",n),l.innerHTML=Dt(a,s),d.appendChild(l)}p.callback=e.ContextMenu.callbackFactory(this,d),r.push(p)}}}}function O(i,t){return{customContextMenu:function(n){if(!this.isInFlyout){const a={enabled:this.workspace.remainingCapacity()>0,text:`${e.Msg.CREATE_BLOCK} ${t}`},s=e.utils.xml.createElement("block");if(s.setAttribute("type",i),i==="variables_get"||i==="variables_set"){const r=this.workspace.getVariableById(this.getFieldValue("VAR")),p=e.Variables.generateVariableFieldDom(r);s.appendChild(p)}a.callback=e.ContextMenu.callbackFactory(this,s),n.push(a)}}}}function D(){return{mutationToDom(){const i=Zi.createElement("mutation"),t=!this.outputConnection;i.setAttribute("statement",t);const n=this.getInput("VALUE").type===e.ConnectionType.INPUT_VALUE;return i.setAttribute("valueInput",n),i},domToMutation(i){const t=i.getAttribute("statement")==="true";this.updateShape_(t);const n=i.getAttribute("valueInput")!=="false";this.updateValueInput_(n)},updateShape_(i){const t=!this.outputConnection;i!==t&&(this.unplug(!0),i?(this.setOutput(!1),this.setPreviousStatement(!0),this.setNextStatement(!0)):(this.setPreviousStatement(!1),this.setNextStatement(!1),this.setOutput(!0)))},updateValueInput_(i){this.getInput("VALUE")&&this.removeInput("VALUE"),i?this.appendValueInput("VALUE").appendField("to"):this.appendDummyInput("VALUE")}}}e.Blocks.text_item={init(){this.appendValueInput("ELEMENT").appendField("element").setCheck(null),this.setStyle("text_style"),this.setInputsInline(!1),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip(""),this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/text.html#text"),this.mixin(R("text_join"))}},e.Blocks.text_join={init(){this.appendDummyInput().appendField("join text"),this.appendStatementInput("ITEM").setCheck(null).setAlign(e.ALIGN_RIGHT),this.setInputsInline(!0),this.setStyle("text_style"),this.setOutput(!0,"String"),this.setTooltip(e.Msg.text_join_tooltip),this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/text.html#text-multiline"),this.mixin(O("text_item","element"))}},e.Blocks.math_angle={init:function(){this.appendDummyInput().appendField(new e.FieldAngle("15"),"ANGLE"),this.setStyle("math_style"),this.setInputsInline(!0),this.setOutput(!0,"Number"),this.setTooltip("A number."),this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/math_number.html#math-angle")}},e.Blocks.math_radians_degrees={init:function(){this.appendDummyInput().appendField("to").appendField(new e.FieldDropdown([["radians","radians"],["degrees","degrees"]],t=>{o(i,t==="degrees"?"NUM":"ANGLE","")}),"METHOD");const i=this.appendValueInput("VALUE").setCheck("Number");this.setStyle("math_style"),this.setInputsInline(!0),this.setOutput(!0,"Number"),this.setTooltip(""),this.setHelpUrl(""),o(i,"ANGLE","")}},e.Blocks.math_mix={init:function(){this.appendDummyInput().appendField("mix");const i=this.appendValueInput("A").setCheck("Number"),t=this.appendValueInput("B").setCheck("Number").appendField("and"),n=this.appendValueInput("ALPHA").setCheck("Number").appendField("with");this.setStyle("math_style"),this.setInputsInline(!0),this.setOutput(!0,"Number"),this.setTooltip("Returns interpolates between a and b via alpha"),this.setHelpUrl(""),o(i,"NUM","0"),o(t,"NUM","1"),o(n,"NUM","0.5")}},e.Blocks.math_remap={init(){this.appendDummyInput().appendField("remap");const i=this.appendValueInput("INPUT").appendField("input").setCheck("Number").setAlign(e.ALIGN_RIGHT),t=this.appendValueInput("SOURCE_MIN").appendField("fromMin").setCheck("Number").setAlign(e.ALIGN_RIGHT),n=this.appendValueInput("SOURCE_MAX").appendField("fromMax").setCheck("Number").setAlign(e.ALIGN_RIGHT),a=this.appendValueInput("TARGET_MIN").appendField("toMin").setCheck("Number").setAlign(e.ALIGN_RIGHT),s=this.appendValueInput("TARGET_MAX").appendField("toMax").setCheck("Number").setAlign(e.ALIGN_RIGHT);this.setInputsInline(!0),this.setStyle("math_style"),this.setOutput(!0,"Number"),this.setTooltip("Map a range number to another one."),this.setHelpUrl(""),o(i,"NUM","100"),o(t,"NUM","0"),o(n,"NUM","255"),o(a,"NUM","0"),o(s,"NUM","1")}};const ge=e.utils.xml;e.Blocks.array_create={init(){const i=this;this.appendDummyInput().appendField("create array").appendField("isEmpty").appendField(new e.FieldCheckbox("TRUE",t=>i.updateShape_(t)),"EMPTY"),this.setInputsInline(!0),this.setStyle("list_style"),this.setOutput(!0,"Array"),this.setTooltip("Create a new array"),this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/array.html#array-create"),this.mixin(O("array_create_element","element")),this.updateShape_(!0)},updateShape_(i){this.getInput("ITEM")&&this.removeInput("ITEM"),i==="FALSE"&&this.appendStatementInput("ITEM")}},e.Blocks.empty_array={init(){this.appendDummyInput().appendField("array"),this.setInputsInline(!0),this.setStyle("list_style"),this.setOutput(!0,"Array"),this.setTooltip("Create a empty array"),this.setHelpUrl("")}},e.Blocks.array_create_element={init(){this.appendValueInput("ELEMENT").appendField("element").setCheck(null),this.setStyle("list_style"),this.setInputsInline(!1),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip(""),this.setHelpUrl(""),this.mixin(R("array_create"))}};const H=e.common.createBlockDefinitionsFromJsonArray([{type:"array_repeat",message0:"%{BKY_LISTS_REPEAT_TITLE}",args0:[{type:"input_value",name:"ITEM"},{type:"input_value",name:"NUM",check:"Number"}],output:"Array",style:"list_blocks",tooltip:"%{BKY_LISTS_REPEAT_TOOLTIP}",helpUrl:"https://zjbku.com/block3d/blocks-reference/array.html#array-repeat"},{type:"array_reverse",message0:"%{BKY_LISTS_REVERSE_MESSAGE0}",args0:[{type:"input_value",name:"LIST",check:"Array"}],output:"Array",inputsInline:!0,style:"list_blocks",tooltip:"%{BKY_LISTS_REVERSE_TOOLTIP}",helpUrl:"https://zjbku.com/block3d/blocks-reference/array.html#array-reverse"},{type:"array_is_empty",message0:"%{BKY_LISTS_ISEMPTY_TITLE}",args0:[{type:"input_value",name:"VALUE",check:["String","Array"]}],output:"Boolean",style:"list_blocks",tooltip:"%{BKY_LISTS_ISEMPTY_TOOLTIP}",helpUrl:"https://zjbku.com/block3d/blocks-reference/array.html#array-is-empty"},{type:"array_length",message0:"%{BKY_LISTS_LENGTH_TITLE}",args0:[{type:"input_value",name:"VALUE",check:["String","Array"]}],output:"Number",style:"list_blocks",tooltip:"%{BKY_LISTS_LENGTH_TOOLTIP}",helpUrl:"https://zjbku.com/block3d/blocks-reference/array.html#array-length"}]);H.array_index_of={init:function(){const i=[[e.Msg.LISTS_INDEX_OF_FIRST,"FIRST"],[e.Msg.LISTS_INDEX_OF_LAST,"LAST"]];this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/array.html#array-index-of"),this.setStyle("list_blocks"),this.setOutput(!0,"Number"),this.appendValueInput("VALUE").setCheck("Array").appendField(e.Msg.LISTS_INDEX_OF_INPUT_IN_LIST),this.appendValueInput("FIND").appendField(new e.FieldDropdown(i),"END"),this.setInputsInline(!0);const t=this;this.setTooltip(function(){return e.Msg.LISTS_INDEX_OF_TOOLTIP.replace("%1",t.workspace.options.oneBasedIndex?"0":"-1")})}},H.array_get_index={init:function(){const i=[[e.Msg.LISTS_GET_INDEX_GET,"GET"],[e.Msg.LISTS_GET_INDEX_GET_REMOVE,"GET_REMOVE"],[e.Msg.LISTS_GET_INDEX_REMOVE,"REMOVE"]];this.WHERE_OPTIONS=[[e.Msg.LISTS_GET_INDEX_FROM_START,"FROM_START"],[e.Msg.LISTS_GET_INDEX_FROM_END,"FROM_END"],[e.Msg.LISTS_GET_INDEX_FIRST,"FIRST"],[e.Msg.LISTS_GET_INDEX_LAST,"LAST"],[e.Msg.LISTS_GET_INDEX_RANDOM,"RANDOM"]],this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/array.html#array-get-index"),this.setStyle("list_blocks");const t=new e.FieldDropdown(i,function(a){const s=a==="REMOVE";this.getSourceBlock().updateStatement_(s)});this.appendValueInput("VALUE").setCheck("Array").appendField(e.Msg.LISTS_GET_INDEX_INPUT_IN_LIST),this.appendDummyInput().appendField(t,"MODE").appendField("","SPACE"),this.appendDummyInput("AT"),e.Msg.LISTS_GET_INDEX_TAIL&&this.appendDummyInput("TAIL").appendField(e.Msg.LISTS_GET_INDEX_TAIL),this.setInputsInline(!0),this.setOutput(!0),this.updateAt_(!0);const n=this;this.setTooltip(function(){const a=n.getFieldValue("MODE"),s=n.getFieldValue("WHERE");let r="";switch(a+" "+s){case"GET FROM_START":case"GET FROM_END":r=e.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM;break;case"GET FIRST":r=e.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST;break;case"GET LAST":r=e.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST;break;case"GET RANDOM":r=e.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM;break;case"GET_REMOVE FROM_START":case"GET_REMOVE FROM_END":r=e.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM;break;case"GET_REMOVE FIRST":r=e.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST;break;case"GET_REMOVE LAST":r=e.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST;break;case"GET_REMOVE RANDOM":r=e.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM;break;case"REMOVE FROM_START":case"REMOVE FROM_END":r=e.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM;break;case"REMOVE FIRST":r=e.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST;break;case"REMOVE LAST":r=e.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST;break;case"REMOVE RANDOM":r=e.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM;break}if(s==="FROM_START"||s==="FROM_END"){const p=s==="FROM_START"?e.Msg.LISTS_INDEX_FROM_START_TOOLTIP:e.Msg.LISTS_INDEX_FROM_END_TOOLTIP;r+="  "+p.replace("%1",n.workspace.options.oneBasedIndex?"#1":"#0")}return r})},mutationToDom:function(){const i=ge.createElement("mutation"),t=!this.outputConnection;i.setAttribute("statement",t);const n=this.getInput("AT").type===e.ConnectionType.INPUT_VALUE;return i.setAttribute("at",n),i},domToMutation:function(i){const t=i.getAttribute("statement")==="true";this.updateStatement_(t);const n=i.getAttribute("at")!=="false";this.updateAt_(n)},updateStatement_:function(i){const t=!this.outputConnection;i!==t&&(this.unplug(!0,!0),i?(this.setOutput(!1),this.setPreviousStatement(!0),this.setNextStatement(!0)):(this.setPreviousStatement(!1),this.setNextStatement(!1),this.setOutput(!0)))},updateAt_:function(i){this.removeInput("AT"),this.removeInput("ORDINAL",!0),i?(this.appendValueInput("AT").setCheck("Number"),e.Msg.ORDINAL_NUMBER_SUFFIX&&this.appendDummyInput("ORDINAL").appendField(e.Msg.ORDINAL_NUMBER_SUFFIX)):this.appendDummyInput("AT");const t=new e.FieldDropdown(this.WHERE_OPTIONS,function(n){const a=n==="FROM_START"||n==="FROM_END";if(a!==i){const s=this.getSourceBlock();return s.updateAt_(a),s.setFieldValue(n,"WHERE"),null}});this.getInput("AT").appendField(t,"WHERE"),e.Msg.LISTS_GET_INDEX_TAIL&&this.moveInputBefore("TAIL",null)}},H.array_set_index={init:function(){const i=[[e.Msg.LISTS_SET_INDEX_SET,"SET"],[e.Msg.LISTS_SET_INDEX_INSERT,"INSERT"]];this.WHERE_OPTIONS=[[e.Msg.LISTS_GET_INDEX_FROM_START,"FROM_START"],[e.Msg.LISTS_GET_INDEX_FROM_END,"FROM_END"],[e.Msg.LISTS_GET_INDEX_FIRST,"FIRST"],[e.Msg.LISTS_GET_INDEX_LAST,"LAST"],[e.Msg.LISTS_GET_INDEX_RANDOM,"RANDOM"]],this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/array.html#array-set-index"),this.setStyle("list_blocks"),this.appendValueInput("LIST").setCheck("Array").appendField(e.Msg.LISTS_SET_INDEX_INPUT_IN_LIST),this.appendDummyInput().appendField(new e.FieldDropdown(i),"MODE").appendField("","SPACE"),this.appendDummyInput("AT"),this.appendValueInput("TO").appendField(e.Msg.LISTS_SET_INDEX_INPUT_TO),this.setInputsInline(!0),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip(e.Msg.LISTS_SET_INDEX_TOOLTIP),this.updateAt_(!0);const t=this;this.setTooltip(function(){const n=t.getFieldValue("MODE"),a=t.getFieldValue("WHERE");let s="";switch(n+" "+a){case"SET FROM_START":case"SET FROM_END":s=e.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM;break;case"SET FIRST":s=e.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST;break;case"SET LAST":s=e.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST;break;case"SET RANDOM":s=e.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM;break;case"INSERT FROM_START":case"INSERT FROM_END":s=e.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM;break;case"INSERT FIRST":s=e.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST;break;case"INSERT LAST":s=e.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST;break;case"INSERT RANDOM":s=e.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM;break}return(a==="FROM_START"||a==="FROM_END")&&(s+="  "+e.Msg.LISTS_INDEX_FROM_START_TOOLTIP.replace("%1",t.workspace.options.oneBasedIndex?"#1":"#0")),s})},mutationToDom:function(){const i=ge.createElement("mutation"),t=this.getInput("AT").type===e.ConnectionType.INPUT_VALUE;return i.setAttribute("at",t),i},domToMutation:function(i){const t=i.getAttribute("at")!=="false";this.updateAt_(t)},updateAt_:function(i){this.removeInput("AT"),this.removeInput("ORDINAL",!0),i?(this.appendValueInput("AT").setCheck("Number"),e.Msg.ORDINAL_NUMBER_SUFFIX&&this.appendDummyInput("ORDINAL").appendField(e.Msg.ORDINAL_NUMBER_SUFFIX)):this.appendDummyInput("AT");const t=new e.FieldDropdown(this.WHERE_OPTIONS,function(n){const a=n==="FROM_START"||n==="FROM_END";if(a!==i){const s=this.getSourceBlock();return s.updateAt_(a),s.setFieldValue(n,"WHERE"),null}});this.moveInputBefore("AT","TO"),this.getInput("ORDINAL")&&this.moveInputBefore("ORDINAL","TO"),this.getInput("AT").appendField(t,"WHERE")}},H.array_get_subarray={init:function(){this.WHERE_OPTIONS_1=[[e.Msg.LISTS_GET_SUBLIST_START_FROM_START,"FROM_START"],[e.Msg.LISTS_GET_SUBLIST_START_FROM_END,"FROM_END"],[e.Msg.LISTS_GET_SUBLIST_START_FIRST,"FIRST"]],this.WHERE_OPTIONS_2=[[e.Msg.LISTS_GET_SUBLIST_END_FROM_START,"FROM_START"],[e.Msg.LISTS_GET_SUBLIST_END_FROM_END,"FROM_END"],[e.Msg.LISTS_GET_SUBLIST_END_LAST,"LAST"]],this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/array.html#array-get-sublist"),this.setStyle("list_blocks"),this.appendValueInput("LIST").setCheck("Array").appendField(e.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST),this.appendDummyInput("AT1"),this.appendDummyInput("AT2"),e.Msg.LISTS_GET_SUBLIST_TAIL&&this.appendDummyInput("TAIL").appendField(e.Msg.LISTS_GET_SUBLIST_TAIL),this.setInputsInline(!0),this.setOutput(!0,"Array"),this.updateAt_(1,!0),this.updateAt_(2,!0),this.setTooltip(e.Msg.LISTS_GET_SUBLIST_TOOLTIP)},mutationToDom:function(){const i=ge.createElement("mutation"),t=this.getInput("AT1").type===e.ConnectionType.INPUT_VALUE;i.setAttribute("at1",t);const n=this.getInput("AT2").type===e.ConnectionType.INPUT_VALUE;return i.setAttribute("at2",n),i},domToMutation:function(i){const t=i.getAttribute("at1")==="true",n=i.getAttribute("at2")==="true";this.updateAt_(1,t),this.updateAt_(2,n)},updateAt_:function(i,t){this.removeInput("AT"+i),this.removeInput("ORDINAL"+i,!0),t?(this.appendValueInput("AT"+i).setCheck("Number"),e.Msg.ORDINAL_NUMBER_SUFFIX&&this.appendDummyInput("ORDINAL"+i).appendField(e.Msg.ORDINAL_NUMBER_SUFFIX)):this.appendDummyInput("AT"+i);const n=new e.FieldDropdown(this["WHERE_OPTIONS_"+i],function(a){const s=a==="FROM_START"||a==="FROM_END";if(s!==t){const r=this.getSourceBlock();return r.updateAt_(i,s),r.setFieldValue(a,"WHERE"+i),null}});this.getInput("AT"+i).appendField(n,"WHERE"+i),i===1&&(this.moveInputBefore("AT1","AT2"),this.getInput("ORDINAL1")&&this.moveInputBefore("ORDINAL1","AT2")),e.Msg.LISTS_GET_SUBLIST_TAIL&&this.moveInputBefore("TAIL",null)}},H.array_sort={init:function(){this.jsonInit({message0:e.Msg.LISTS_SORT_TITLE,args0:[{type:"field_dropdown",name:"TYPE",options:[[e.Msg.LISTS_SORT_TYPE_NUMERIC,"NUMERIC"],[e.Msg.LISTS_SORT_TYPE_TEXT,"TEXT"],[e.Msg.LISTS_SORT_TYPE_IGNORECASE,"IGNORE_CASE"]]},{type:"field_dropdown",name:"DIRECTION",options:[[e.Msg.LISTS_SORT_ORDER_ASCENDING,"1"],[e.Msg.LISTS_SORT_ORDER_DESCENDING,"-1"]]},{type:"input_value",name:"LIST",check:"Array"}],output:"Array",style:"list_blocks",tooltip:e.Msg.LISTS_SORT_TOOLTIP,helpUrl:"https://zjbku.com/block3d/blocks-reference/array.html#array-sort"})}},H.array_split={init:function(){const i=this,t=new e.FieldDropdown([[e.Msg.LISTS_SPLIT_LIST_FROM_TEXT,"SPLIT"],[e.Msg.LISTS_SPLIT_TEXT_FROM_LIST,"JOIN"]],function(a){i.updateType_(a)});this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/array.html#array-split"),this.setStyle("list_blocks"),this.appendValueInput("INPUT").setCheck("String").appendField(t,"MODE");const n=this.appendValueInput("DELIM").setCheck("String").appendField(e.Msg.LISTS_SPLIT_WITH_DELIMITER);this.setInputsInline(!0),this.setOutput(!0,"Array"),this.setTooltip(function(){const a=i.getFieldValue("MODE");if(a==="SPLIT")return e.Msg.LISTS_SPLIT_TOOLTIP_SPLIT;if(a==="JOIN")return e.Msg.LISTS_SPLIT_TOOLTIP_JOIN;throw Error("Unknown mode: "+a)}),o(n,"TEXT",",")},updateType_:function(i){if(this.getFieldValue("MODE")!==i){const n=this.getInput("INPUT").connection;n.setShadowDom(null);const a=n.targetBlock();a&&(n.disconnect(),a.isShadow()?a.dispose():this.bumpNeighbours())}i==="SPLIT"?(this.outputConnection.setCheck("Array"),this.getInput("INPUT").setCheck("String")):(this.outputConnection.setCheck("String"),this.getInput("INPUT").setCheck("Array"))},mutationToDom:function(){const i=ge.createElement("mutation");return i.setAttribute("mode",this.getFieldValue("MODE")),i},domToMutation:function(i){this.updateType_(i.getAttribute("mode"))}},e.common.defineBlocks(H),e.Blocks.array_includes={init(){this.appendValueInput("ARRAY").appendField("in array").setCheck("Array"),this.appendValueInput("ITEM").appendField("includes").setCheck(null),this.setStyle("list_style"),this.setInputsInline(!0),this.setOutput(!0,"Boolean"),this.setTooltip("determines whether an array includes a certain value among its entries, returning true or false as appropriate."),this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/array.html#array-includes")}},e.Blocks.array_for_each={init(){this.appendValueInput("LIST").appendField("in array").setCheck("Array"),this.appendDummyInput().appendField("forEach element/index"),this.appendStatementInput("DO_STATEMENT").appendField("do"),this.setStyle("list_style"),this.setInputsInline(!0),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip("forEach"),this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/array.html#array-for-each"),this.mixin(O("array_element_index","element/index"))}},e.Blocks.array_element_index={init(){this.appendDummyInput().appendField(new e.FieldDropdown([["element","element"],["index","index"]]),"ITEM"),this.setStyle("list_style"),this.setInputsInline(!0),this.setOutput(!0,null),this.setTooltip("\u8FD4\u56DE\u5728\u5FAA\u73AF\u5185\u90E8\u6BCF\u6B21\u8FED\u4EE3\u7684\u5143\u7D20\u6216\u7D22\u5F15\uFF0C\u4EC5\u7528\u4E8EforEach\u62FC\u56FE\u5185\u90E8"),this.setHelpUrl(""),this.mixin(R(["array_for_each","array_find"]))}},e.Blocks.array_find={init(){const i=this.appendValueInput("LIST").appendField("in array").setCheck("Array");this.appendValueInput("CONDITION").appendField("find element/index"),this.setStyle("list_style"),this.setInputsInline(!0),this.setOutput(!0,null),this.setTooltip(""),this.setHelpUrl(""),this.mixin(O("array_element_index","element/index")),o(i,"ARRAY","")}},e.Blocks.object_create={init(){const i=this;this.appendDummyInput().appendField("create object").appendField("isEmpty").appendField(new e.FieldCheckbox("TRUE",t=>i.updateShape_(t)),"EMPTY"),this.setInputsInline(!0),this.setStyle("object_style"),this.setOutput(!0,"Object"),this.setTooltip("Creates javascript object."),this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/object.html#object-create"),this.mixin(O("object_key_value","key/value"))},updateShape_(i){this.getInput("ITEM")&&this.removeInput("ITEM"),i==="FALSE"&&this.appendStatementInput("ITEM")}},e.Blocks.empty_object={init(){this.appendDummyInput().appendField("object"),this.setInputsInline(!0),this.setStyle("object_style"),this.setOutput(!0,"Object"),this.setTooltip("Creates javascript object."),this.setHelpUrl("")}},e.Blocks.object_key_value={init(){const i=this.appendValueInput("VALUE").appendField("key").appendField(new e.FieldTextInput("key"),"KEY").appendField("value").setCheck(null);this.setStyle("object_style"),this.setInputsInline(!1),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip("\u521B\u5EFA\u7528\u4E8E\u5BF9\u8C61\u7684\u952E\u503C\u5BF9, \u4EC5\u7528\u4E8Ecreate object\u62FC\u56FE"),this.setHelpUrl(""),this.mixin(R("object_create")),o(i,"TEXT","")}},e.Blocks.object_member={init(){const i=this,t=D(),n=this.appendValueInput("OBJECT").appendField(new e.FieldDropdown([["set","set"],["get","get"]],s=>{const r=s==="set";t.updateShape_.call(i,r),t.updateValueInput_.call(i,r),r&&o(i.getInput("VALUE"),"TEXT","value")}),"METHOD").setCheck("Object"),a=this.appendValueInput("KEY").appendField("key").setCheck(null).setAlign(e.ALIGN_RIGHT);this.setStyle("object_style"),this.setInputsInline(!0),this.setOutput(!1),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip("Sets or gets the member of the object."),this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/object.html#object-member"),this.mixin(t),t.updateValueInput_.call(i,!0),o(n,"OBJECT",""),o(a,"TEXT",""),this.getFieldValue("METHOD")==="set"&&o(this.getInput("VALUE"),"TEXT","")}},e.Blocks.object_keys={init(){const i=this.appendValueInput("OBJECT").setCheck(null).appendField("get keys");this.setStyle("object_style"),this.setInputsInline(!0),this.setOutput(!0,["List","Array"]),this.setTooltip("Returns all keys of the object."),this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/object.html#object-keys"),o(i,"OBJECT","")}},e.Blocks.convert_object_to_json={init(){const i=this.appendValueInput("OBJECT").setCheck(null).appendField("convert");this.appendDummyInput().appendField("to JSON"),this.setStyle("object_style"),this.setInputsInline(!0),this.setOutput(!0),this.setTooltip("\u5C06\u5BF9\u8C61\u5E8F\u5217\u5316"),this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/object.html#convert-object-to-json"),o(i,"OBJECT","")}},e.Blocks.convert_json_to_object={init(){this.appendValueInput("JSON").setCheck(null).setAlign(e.ALIGN_RIGHT).appendField("convert"),this.appendDummyInput().appendField("to object"),this.setStyle("object_style"),this.setInputsInline(!0),this.setOutput(!0,"Object"),this.setTooltip("\u5C06JSON\u89E3\u6790\u4E3A\u5BF9\u8C61"),this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/object.html#convert-json-to-object")}},e.Blocks.console_log={init(){this.appendValueInput("TEXT").appendField(new e.FieldDropdown([["log","log"],["info","info"]]),"METHOD").setCheck(null),this.setStyle("system_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip(""),this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/system.html#console-log")}},e.Blocks.window_alert={init(){this.appendValueInput("TEXT").appendField("alert").setCheck(null),this.setStyle("system_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip(""),this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/system.html#window-alert")}};const Bi={updateType_:function(i){this.outputConnection.setCheck(i==="NUMBER"?"Number":"String")},mutationToDom:function(){const i=e.utils.xml.createElement("mutation");return i.setAttribute("type",this.getFieldValue("TYPE")),i},domToMutation:function(i){this.updateType_(i.getAttribute("type"))}};e.Blocks.text_prompt_ext=vi(Ii({},Bi),{init:function(){const i=[[e.Msg.TEXT_PROMPT_TYPE_TEXT,"TEXT"],[e.Msg.TEXT_PROMPT_TYPE_NUMBER,"NUMBER"]];this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/system.html#text-prompt-ext"),this.setStyle("system_style");const t=this,n=new e.FieldDropdown(i,function(a){t.updateType_(a)});this.appendValueInput("TEXT").appendField(n,"TYPE"),this.setOutput(!0,"String"),this.setTooltip(function(){return t.getFieldValue("TYPE")==="TEXT"?e.Msg.TEXT_PROMPT_TOOLTIP_TEXT:e.Msg.TEXT_PROMPT_TOOLTIP_NUMBER})}}),e.Blocks.execute_tab={init(){const i=this;this.appendDummyInput("TAB_INPUT").appendField("exec tab").appendField(new e.FieldDropdown(i.generateTabsMenu()),"TAB"),this.appendValueInput("TAB_ARG").appendField("arg").setCheck(null),this.setStyle("system_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip("Execute blocks/codes defined in a tab"),this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/system.html#execute-tab")},mutationToDom(){const i=e.utils.xml.createElement("mutation"),t=this.getFieldValue("TAB");return i.setAttribute("tabTitle",t),i},domToMutation(i){const t=i.getAttribute("tabTitle");this.setFieldValue(t,"TAB")},generateTabsMenu(){return block3d.tabManager.customTabs.length?block3d.tabManager.customTabs.map(i=>[i,i]):[["none","none"]]}},e.Blocks.get_tab_arg={init(){this.appendDummyInput().appendField("tab arg"),this.setStyle("system_style"),this.setInputsInline(!1),this.setOutput(!0),this.setTooltip("Get tab arg"),this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/system.html#get-tab-arg")}},e.Blocks.get_function_by_name={init(){const i=this.appendValueInput("NAME").appendField("get function");this.setStyle("system_style"),this.setInputsInline(!1),this.setOutput(!0),this.setTooltip("Get a function defined with block"),this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/system.html#get-function-by-name"),o(i,"TEXT","name")}},e.Blocks.set_get_glob_object={init(){const i=this,t=D();this.appendDummyInput().appendField(new e.FieldDropdown([["set","set"],["get","get"]],n=>{const a=n==="set";t.updateShape_.call(i,a),t.updateValueInput_.call(i,a),a&&o(this.getInput("VALUE"),"TEXT","")}),"METHOD").appendField("glob").appendField(new e.FieldTextInput("name"),"KEY"),this.setStyle("system_style"),this.setInputsInline(!0,null),this.setPreviousStatement(!0,null),this.setNextStatement(!0),this.setTooltip("Sets or gets key of the global object VARS"),this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/system.html#set-get-glob-vars"),this.mixin(t),t.updateValueInput_.call(i,!0),o(this.getInput("VALUE"),"TEXT","")}},e.Blocks.set_get_local_storage_item={init(){const i=this,t=D(),n=this.appendValueInput("KEY").appendField(new e.FieldDropdown([["set","set"],["get","get"]],a=>{const s=a==="set";t.updateShape_.call(i,s),t.updateValueInput_.call(i,s),s&&o(this.getInput("VALUE"),"TEXT","")}),"METHOD").setCheck("String").setAlign(e.ALIGN_RIGHT).appendField("localStorage");this.setStyle("system_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip("Sets/gets local storage item"),this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/system.html#set-get-local-storage-item"),this.mixin(t),t.updateValueInput_.call(i,!0),o(n,"TEXT","key"),o(this.getInput("VALUE"),"TEXT","")}},e.Blocks.local_storage_remove_item={init(){const i=this.appendValueInput("KEY").setCheck("String").setAlign(e.ALIGN_RIGHT).appendField("remove");this.appendDummyInput().appendField("for localStorage"),this.setStyle("system_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip("local storage remove item"),this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/system.html#local-storage-remove-item"),o(i,"TEXT","key")}},e.Blocks.advanced_comment={init(){this.appendDummyInput().appendField("//").appendField(new e.FieldTextInput("some comments here..."),"INPUT"),this.setStyle("system_style"),this.setInputsInline(!1),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip(""),this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/system.html#advanced-comment")}},e.Blocks.advanced_connect={init(){this.appendValueInput("INPUT").setCheck(null),this.setStyle("system_style"),this.setInputsInline(!1),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip(""),this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/system.html#advanced-connect")}};const A={customPreloaderOption:new h([["background","background","TEXT","radial-gradient(#eee, #888)",""],["logoImage","logoImage","TEXT","data:image/gif;base64,R0lGODlhbgBuAPYAAPPz8+zs7AAAABwcHDk5OVVVVXFxcY6OjqqqqsbGxsrKymFhYY+Pj4GBgTU1NaysrNDQ0J+fn5eXl76+vsnJyVdXV3x8fLe3t2tra6KioiUlJZ6enrGxsZKSkl1dXcvLy5ycnA0NDTo6Ora2tpSUlM3NzYCAgGZmZoeHh8jIyLOzs5iYmB4eHrm5ucfHx8TExK6urmxsbD8/P0lJSZaWli4uLnR0dHBwcJGRkXd3d3Jycn19fbu7u7CwsHl5eaurq6SkpJubm1tbW2pqamBgYIqKiqmpqbW1tbi4uIaGhoKCgsDAwIODg62trcPDw9bW1kRERIyMjF9fX9PT02hoaNTU1E1NTYWFhcLCwpmZmUNDQ+Xl5VFRUZqamnNzc9ra2uTk5NnZ2d7e3np6eqenp9vb29XV1dLS0r29vWVlZXZ2dunp6eDg4Ojo6N/f393d3dfX14mJie7u7u3t7W5ubvHx8evr6+rq6uHh4efn5/Ly8u/v7+bm5uPj4+Li4gAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAbgBuAAAH/4AAgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGih1gnBAQnWKOrn1EYp7AEGFGstZdkPrG6BD5ktr+QEhW7uxUSwMiLpsS7J8nPhkwizLsiTNDYL1bUxFYv2M+53MQ+4MkW48QW5sgx6bsx7MAL77oL8r8G9bEGjyoYDmQ9YMcDCJAlkEjsg0WiUQMpAyJKlGLjGQwGQwpoLDCExohGOBaewrHoShqJKCV6aAAsiJSNMAss6MCohYeFHlooEuIgpc8BM1TYMlEhplEUjGgspKHoSs+fPmewXBWkqFGjxxa9eodBGVSoHlbBeHnVKJEJjBZMoybinqIoX/+/VhTFoGzZdYx2QGEGZQejGHGhShmV0a7Rfo1G3Fgg45SMBTc+LnKiITDUgaBcGL5a4QMkDhMmcHhUxDLUrqCAbL56YZQQ0z8JhFK9OqbkUB5g+3QQakltmBVgjIqjOyVqUIV/Ixb1oXLxiEJD0fitUQmrG88HDBY1gsjvBUxX0cg+VRSO3xFsySiephaK1Qx+gRAB28EVWyu8X12QHpgN+oE5IAQwE1hggFUVGKBEeMiAsN5XJ9z3zAcXjCCcOTTc4FxEGsRACz7yfBCHB0IU4QSIKKao4oostujiizDGKOOMlESxQAEhCBACFDocQKMoB1ghwJBEEskFSZSoEAX/CBt0sEITPwqCgwZFVjkkC1ZIwoEJXhjgpZc5SNDajCuwYOWZAgzxWQ5ftumlBUfI6EMNaJ4ZwlyM9GCDm3za4EKMFdSJJgtILfKCgXzyad2LSQhaZ6GKRJBoojpk8CIGjqKpQZyJfLDDpImWt+IGOWZqZQhZJvICqKHqxGIHpqJJUyJAsMpnDvGxuECsZ5ZDq61u4trirrxW6SsiqwL7ZQOurghrsUXOioinynopqoqkQjskqotIqmyll2orwKaGImrroi42qi2kiuhpq5+AQkuoIxywOSmcctIZ652fcRmsmDSWGauakijJpJNQRjmlo1hG2UmQdR7pcCs35rhj/48TZ6zxxhx37PHHIIcs8siWTBBEF2iQfAkHGUjAAAMSZDGmOXqAsUUd2ECwwQE893wAAxFE94wbVVBgdApVgJGMAln47PQBNAgNTBguJGD11QnAgczOTzu9QTJhYC12Ak/88kDXTzMwcy1uVD321Sm4YUsGaD+dBTBVvC02BLaQULfTEqRcix4U6I21Am2w8sHfTjPQhS1gFG641RR8wUoZjPvMQBC2bCH55AqUUYvfmR8gAVq11JHC5FaXYEctdJdu6S95s36GLROUfsBokuCBByVgsJ7CG/Jl/jUkX2DRBAzMY2F5JHBMXgUwZqzwdxZ8PzIBAtx3zz3qkDyxuqvYSCdjBghob6AAJCp47z4CUjviBgQKUKBACWcQD80EGZBOQgaYecQLfvA+7/3gG5JowxfK8Dp5lMEzkjADDAroPhiYQWWMmAIF3zcFDC5iexv0Hvg8eIj2hbB78SMhIXhwwu7xQIWIcEELufcnGBoCAhM8IQyyZ8NCvKCFCOyhIY4QQk4J8RAtoGCzjniICVzgAdx7wAVGyMREvEF/VcyiFrfIxS568YvyCAQAIfkECQoAAAAsAAAAAG4AbgAAB/+AAIKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpYhBESYnJyYRQaawlw9eFQW2txVeD7G8kA0Lt8G3Cw29xooSUsLLBVISx9CFaszMatHXK9TUK9fQDdrMxd29RkLgy0JG47xI58xI67FG7svq8aYT9MIT96YUyvqaUXAkIccYIR58BBkR7YKRAxEidECA5ZGJgAVMNOrgQQSBjyBF7DhgLJWBkygbAHGEoxa9CjgYSYACsibIGdxiJUHJE2URRxb0WWC0QYvNowS05Cy1s6fTn4x43HB3g8ciEDSRHp1BklQEp2AN2FtUZaq2G1UYEdGqdQepCyb/wjptoMDRCgzLMCxVlEEGW6QiGIoyIhfshUc9vtoysKEH0L9aX4k6UNgpk1JXICMdM+prZZ4gSmHQfNRD5888N4gmbVPIqA6oUSphyromZ1EIYp8cKypz7Y85RmFpEFuJVVII/NYW8WwUENQ6SMCi8tt0qSKfu5oiM4M1lA6wsIfVoR1WDqOQtTSHZYR4TyXSjeXozhaK6l4KLigBsUGJkePHkEGFcjXJQERo/USDwBVXYIDBFRZkkOCEFFZo4YUYZqjhhhx26OGHpvywgBYVZAGiKEgcoMUALLJYAxFuWeICCQfcdyIKIrSoo4s+QDAJBRmAwMABOARhhI8e6rDj/5IDsBDDYZBw0MEBVFZ5AA2CbYiCBkwyGdwjCFgp5gEMcLBhHDV0ySQL5SnSwphw8pMhF2p26cASjCjQBZxjInhhBlzWySQdjKjA55g4vIBhAYJ2SQUjHBw6Jp4XWtAokw4w8oOkYu5yIQaXLklAGYtsymmVnloIaqg6jrpIpKdSSamFlrLaYqaLGBproova2uKji+gZq58WAurrAIQy8uapcmJIp613OhLmoWWemWaobEY55ZhYdrhlqF9CAqSQRBqJZIdKCuoklJLMWOOJguCoZg1jnAsvJimuqOOLMd7byQMjlujvwAQXbPDBCCesMIgLDEFACCGI0IAFHywsyf8CDgig8cYa13CZxY1kcALHJG/sAQrGlKAADzwocMYxGcxQ8swCyIAyLE8c8QACPCPwwAhh9DIyzTO7ZgoEPSfN8w9mxLIA0URrREoJTSit9A9Bm5Ix1DNrMGsoLVhtdZajpME10TqMQsHOYif9wMukDHE2zcCG4kTbVtdFCgFzzzzAKBzgrTSAooTQd8kOyCFK4IL3THgohh/OsQNziHJ34zzrPYoIknP8tygvsC34AyWU0kDnG59AChKYH2GKBahrvAApYVQt+BOS3AGBGGJAcIcjH9SAOgtkh/KB7VY3YW8jcpjhQgLQJ+CCGYozcgXqQ5kSBhKi+9xC6ZC0AUG49OQnAEEbjXggOReam/KCExxw4MRAkoxfPvnLI4KCDH07EIOHbrjf/dzQCBQI4Wxc+J+HSiDA8oGvESbQAM1YYIH2bagNH2gg+T6APkcsQQdUGIADHDCAEyygeBwSAwU0GD0KiGEScqicv7agABZCTwFbABkjGGjDB+owEVOwYQKm8MM8sdCCRTwEGDIowA+AIYmMAAMEnhc9F0DgiVBsxBOmkIIUTAF3WQyjGMdIxjKa8YxoLGMgAAAh+QQJCgABACwAAAAAbgBuAAAH/4ABgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SliR9OQEAvH6aumU4ROwa0BjsRTq+6kjAWtb8GFjC7xIwcNsDANhzFzYYwOcnJOT3O1gEm0tIm180qXtrJXirdxFHh0lHluyDoySDruhHuwBHxrx30vx33riv6tVZEWqIqxboyrSI9iKYvxwNHI2gMKUCxwJADw4pNyEDiwAESQH5AkgBQgqMORCqqLCAlyC4zIDzKlLlBgaMLvtxZuNAozsqfFbi5MrNiptEDWSBARBbOxohGEn5KreDSVMyjRjc8SsFERzIdTFw0mpBS6k8pGUdNwIqV2aMMJv8a5MjRwESGRxbMmj1QKgPbo3cjtWDAoEUkA3qlDinV8e9MCWhKfaiQWCqPUWUcG2VQddSFylKBjPqgeSaDLKU+g14pelTj0hImlOpBeXXFJaSAlPaI2hRi2xZL/djNAIkrJcAL0DC1obRWVzQW2CbCs5SCLI5pPH0VwTY/VxCaH2WwYbsuBqDjEOOQQQJhCVmMN4sgXSoRk83QBMki+xoNJQbUVkEw/fVjTQ8XXJCQgQw26OCDEEYo4YQUVmjhhRhmOGELOJBgwAIxWODDCxp6IoEHBKSoIgEzMGHJGS60oMIEUzyRIQYr5kiACCcIJMkLPSAgpJAwkGghETomKQT/GZEcMeSTCPxwRIU7iJBkkmNA0gKUXBYI4QVQXHmlOmNxaeYXEt4g5pUY3GQml1hIuMCaV8bJyANvQtlEhBzIQGeSJzAiRp5Q9oAHhBP8eaWghD7Zgx+IKppkI3g2ikBaDvYp6YqBMnKBpQjYCeGcm6YoqiITgIpmhGqW2qYjWxLq5YNglkqmI06aKSWVViqaZSRAQlnkhUj+ueQkMMpIo40Y4igmj/iViMmJSbYoLSccegiiiEZe6+234IYr7rjklmvuuQEoUIQQHhTRLbqPSHCDBgPUO4AGdBQBbyMgyGDvv/aecEUzdWyxBQDO2CACwAwP4EAFu2xRRQoUVDwF/xvEgLBwwww74KIrcCQg8sgJuLDqK/5y3HAarjxB8ssJnFyKBCqr3EApbKQAM8kuYGzKDTVzTEQpEOz88hSmKEBv0A2TI8oaChhNMgUIk1IE0xzHMMoXUUstMgVblCIE1g07sHXXXoMdyQYdLLBAB88x4gHZDBMwyh0leC1yCnU8ksQQIQgguAAhDJEEI1fT/e+rohStdxWOjFHB4JQPXsGviDixtOID7DnKGzp7HTYjK9RQ+ekC1OAjIjFwPoAUplThNRyN4MAC6qizgEMiiStugysTw5wCs4swoAHuuGvAQCInKO6BLm9AUIIC1EPgMyNWII+8FYlc4QDZM9y8y60dX3yxxiNRaK/9rYZU8H3QMzgd4QLqI7+AIkw0r7IH4ktYQP24KwAjGkAEhknhdxUaAABRNwBHqCAGDiBADDxnoQXibl+CCJwFKRcCDAYAChukHBQ8qIMQDk4HHjyACQXHFw9ywYRc8KAgOnA7C7LgOzLMngW5J8NBAK5+hethIWygQOQNAIFCJAQKUKABDQouBBpYYhIRMQIrdMAHPuiAFcwzxS568YtgbEQgAAAh+QQJCgAAACwAAAAAbgBuAAAH/4AAgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoABQqHD8/HCoUqbOSLV0HuLldLbS9jD+5wbk/vsWGHMLJBxzGzSkdysIdKc3FGdHJGdW9KSDYwiAu27MkDN/BDCTjqefK66gbOO24OBvvqEHzB0H3qEb6RiBhQdAhQgQGRpAYe+GEQw8nCiKVoNGORolHQBoY2MixQYReYZA8QEASwYMWFx+NMIeNwYhHRTjK5Jhk1ocmJXMiaAIBEjJszBzFnEm05qkwOHXqfAJpQrxg9SY8QkC0qoGPppAoVXpEUoIlDx4sSQBJgUarMxsoJPVi5NacD/9SlrqAtmpAUk7eKo1oSkldogxKcdCrk8epLn9nYh3Vg3BOw6Y2JJa5WFRexyT5ljo72YA6UgrcEn5w5hTVzgYQmGqB+eUpNH4nN8BiqkTStw/CpCKhYzIQVBD0PmA660DiIrOeHBFtcoTuXgd6W0Xeq4QCHjwUlDZGIrbMBqr7+UKDoMGGLkwuaBbPvr379/Djy59Pv779+/jz69/viMIEIxeQwZ8nHZggRQEICtGABJlsIUYe+rVgQQUIVlihGgxSMoV1FHxQghv3VXGDhSQiKAUTkoChQAIstphACW3UN2KJJabxACRgfODijhDMMd8KNAbpBSQQ7GhkFfLBgEH/kEF24cgTLhi5owtrxBcBk0FWpsgUUhrZE3w6YEmjCY6k0OWOYsQnJo0nlHmmi2nCt2aJbTbC5ZssfvlemHNWSGYjUOJJpZV9VqilIkW+iWR8ShZagJOO5Hhmjz8WOiSOKxoJo4xz2jjJhgp0+GGIMzJ5oiUOQpifhBTSiOGAmRR4YIILwsqJfwAKaOuuvPbq66/ABiussB/sYAIBIYRAAAZpDPsIEzUIIO200jqwQDEIJJFEDDFcsYM2qaDgAbXkTnsCuP5QIQMB7LYrAxEgnIKCDOXWK8AM6Jaixgzt9tsuFPaUIoS99taprxb+JkyAFhmKYgLBBDdLihH8Kpzw/wyfgbKEBhDb60ApVFhssQei6NAxwdeKgsC6IicsAg2hUHGyvRiMckXLFqsRygAz10uAzTgr7AMoezjQc7khjBJD0AkLAUoA0R5NbdKiLM10vySDwrPU0/7MSAYFWIABBhYUkK8iN1/d7hgxcz3tn4kUwYUGA9RttwZcUKfIDmq3yw8oC7gt7Q6KJFGD3YjbXYNRiWTA8tUiuPbJESy4XcMHiXhBd+Kca3BpIkT0DTcoFriNIiIocK663SgoAgIUV88QmCgUcCF11ocgIcLqq4uwFiIbIIyzFiuUgoHRM8vQOiIH8M77AYtIULHFMxRvCga2dyzE8ohA4fzqUDBCgq4HIrhswuynUGBB5fVqMPohTXzPexON0KCGD0J4MAYIks9yxAJUGEANHDAAKuhgCYxYgPxWl7L7BGAPkPDeAjkXPmcBoAIT5FwFLAiALGQwcVngIAAO90EBihAARCjhABpoQQuQcII1sMAJAeADFkyQBUObIQRiMMEY6OmEI8iBDXnHghz0b4YAOAABVecA6CHREEugwwkcwC4HUIEOCHyiIspQBi168YtgDKMjAgEAIfkECQoAAQAsAAAAAG4AbgAAB/+AAYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqIRiYqmtlhMXDwgIDxcTrriOLbO8vC25wIhHvcQIR8HIgi/FxS/JwGc9zMQ9Z8+4LtPFLteuu9q9v92pKuC9KuOpE+a8t+mnU+yzU++nTzDsME+TH2XXdl/KrJn04ge4H84gPQBC4sABEhHc4XpzpgQFBQogsJE0TNuxRwo2OBw5EsS+VlVSJFjJMgUcSWimoYEEIQvJmweynDxVhaVPli8jfVkCoyiMJV8iicR5EwSqNyp//gRDCQ+eSRwYMMUpkdQZqVLpocqwFWcEU3ZKgP2Zos4pNBL/yt4kYeoLhbU+KfA5FUSrXJL+SJVRgJclhS2nuvj96/BDqTWECyegAOBtXMYPT0GQnKBKKpuYgZxiE3Wti42okCyW+wAVnMJJW0VgvKHVa6kuYrcaQUNuFgWuwExJQaF4FdS4RmxY7ZDBBgjA6vDZUjkZkiwSGDCQkIFDPWRougSZ+b28+fPo06tfz769+/fw42s6oANKCAEDCiwoIp8TDi4CBCiggFYw0B8mVrAw4IIBaoDDew+s0EEEIByAjiRDMKihACyswB4SEuRgwIgjemFCD5DYcN+GDNbgg3pH7EDijCPm4F0jSQzA4oYVpOeCDTQGacONi6CwI4tJoMdE/5BMWuDEIiNocOSGGJyXgQ5MMnmWIlasOOWCIThVnglZMrmDY4l08OWGHZTXQgNlMpkQIj6sqeEC5TEgYpw0ipZInXYuiOd3evLZpyJqBjpgm9+9aeiMcx7SpaIBhmkemY8acKYiUVIqQJXmXZnplooYSWmS5y1pqJOM5Khoj+j9yOeQjqhop4swypiljZBk+GWHH4ZIo4koRpLgkQ5CKCGFFlbyH4sFHjhfffflt5+02Gar7bbcduvtt/05UYQHQhSBJriRRBGDBgO0O4AGN0iQTA8XXHBuK0mc4O6+7soQBC40KGFABQUUUMENFnRVSgUO8OvwACLYINsCBVdcMf8R8prCRMMPOyzCv6cwYPHIFcdhir4dPyzDKRGQ7HIBjIrSQMopZzwKDRS/PDIRI4xCBM0d31CKEjq7TFcoKgDdsQb3gmJA0SQPIUoMSnfMnyg9EAz1yEuEwnHV/AoxygVbk+znJwSA7bAHY5c98tmeUK32vlc3wsEEExDZyAdau10AN6A0Mbe7GkSKyAU3LCADAQTIsMANFzhyg98FSC2KB4MPQAcjO8zA+Oefz7BDIxZQbqAoNmReNyILiAD66wSIMKgiExDhthQwkIK52icsggHswBMAqiISlF0ByKM0MAPYDqCKCA3BB08DI3FAXYEJp6iwPNAOwIpICx5ED7yvB+IgarvLUiBvSgO7d3wCE4t0IH7wMXNKwhAWD8FA7q7Y0L67RGhAI0gwP+AdzRFLAAIQeJCMJsSAAA6IwYUaoYMCwk4H6DLEAiz4utllUBAP5ODnYvBBQlhAhJ+zQAkH4QMUMi4HK1SG50Q4A8N9kAmus6AI4BfDQZyAg73r4SAkIIQCCsFmQgwAGcYgvjGQIYmGiMLvXoeBKEAxEVj4IQFOgIUrevGLYAyjGC8RCAAh+QQJCgAAACwAAAAAbgBuAAAH/4AAgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqdT1MpKVNPq7OPYBAuCbkJLhBgtL+IWwq6xAkKW8DJg8PFxArKyVXNzVXQvyXTxSXWs8LZzsjclHNyk2IU37oUYuKQFwtULA4OA1Q3S49tH+m5H23tjShY0CCgoMGCGho8wsZvG8BFQ7gcnGhQCIpGbvglcPNQ0RAHFEMKkHGREcNsDiNRcAKjxwsnqShIFBlSSKM2ELJB+AcJQosHCIIieIAkzCkLNGkyaSTHTApiKcyU69lEqFUETSiUukAwacgaHxzdKSFGTIk7kqpcXdvE6KgFXv9p7jB1ZO1aJKSoxBVpolQJoHatPoApisXekARKKQi8FouoOSAPTwxRigfjqz1EyYks2SBlUpYvC4UxakDngyIUixZKOJTe0wUxlJoC+PIDraJuwC6YxtSI1S1ILena2cGpMD8uN4FQqgHsBajMJA/M3JSQzidUhRlRe+gRM6hQyDg8I8OsKQp48FCQMvx1ryfMdzTFpIZIB9Dno/qwwwSBECGIgEF++hVo4IEIJqjgggw26OAvXVQgwwIPPAiKBUTUMMCGG0JxwAUWagKBDxpyaOIAIpTk4AYHkOACJRfEwMKJNA7gBYMlGBEEDgcwAEIGKUiSQ401apCEghfQcMD/kkwe0AEHkBwwI5E01hAHgj0w0OSWB/zgCBb0UFkjFwdOwOWZwTFyg5hEaiCffiyeuWUXuClCBZtEFlBgAjzKuaUKjISJ54kWFLiEn1xCqcgXBAxKo2z6PYDoll4u2qijJkI6n6STMlmpIoJiOkCh+h3a6ZKK2ikqh3rqx+epBwC6yJqrumlgnJPSyQiYq5JpoJmdpsmIlJhaiaWWfn7ayJCDGqngCEpy+WQkMU4p5o0L5rhjjz8GKcmIJdaYooUsungJhuFuqMWHIXoS4YQVtivvvPTWa++9+Oar776aZLDDFTHEcMUVCPALCQhEyEDAwgzLQAUZv/BgRAMbdKHE/wXPqAICFAx3zPAMNszSgRIGlGxyAwWjsoIWHrdMgBYhp3KADibXXHIUp5Awg8suzwDxKQfYLLQBOJfiAc88U3FKBzQPbTMQpKwgAtIuy5DyKDyQ7LTNDTgmihpU83xFKUZsPbQRo/gQtstjk9KA2UKTMMrRa3scQykbwG1zBKMIUbfdpXShd818i6L23wy3PYrWgxvAwChBIM7wXI30EIEOBRSgQwSZOXJB4yWjLcoFUyMuw5uKrIBB5qwXgMEKjijw9uAm4DXKDpITwYgZN7TuewE3gMcIAo0XPgoDO9cNBQiL8ND7777fwEMjReh9pCkrr60F84uMAT30YzgShbzZ15+yQvI8zwD7IjhU8P3vFeDgCBCz12yC8agwsEPpHYvggdyMaMD7oKeQLxmBBBGIAAOMYLtZXCAIPhCCB3yghvUxQgEeGODvPJAxgw0CDRqEHho8SAgEhPB3VyMhEk7ouwaSkAzuY2EBKvAzEgpCgDIsoA0FQQMZFoAGOySEGliohiASggZSCKEUgGjEQTAhDQNMw1KaSIgmeCGGrauAF5pAxUOAIAImSEMa7se9LprxjGhMoxrX6IlAAAAh+QQJCgABACwAAAAAbgBuAAAH/4ABgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6aR1YdPj4dVkefqaqEKCgaIQKxAiEarau3nDYssryyLDa4wZZDsL3GIUPCypBWxcbHVsvSigy7z9csDNPbhVzX3wJc3OMH4OAH49s65t866dNQ7NdQ79LO8rwh9cv41/uTTWIQcIBBhaMB/XoN+AfJhocBECMSUcKoQEJeBRg2UvIwokeIJ5goWnBR1gKNi1TM+MhygAMhiaKUjBXl0ZoyZexsU7KyJUsHSRJZKRmtERsICpKWOPNGWkefLE8kOqAhoQZ0jJ6kSMC1a4oqymxAhVoTUQdr7Fh0aASnq9uuYP+DPR37MYaiFTXY1VjRCMzbvyma3mpC16cGJ4p8VABXwYejKn//nsEVo7DPIoxQYLgXAgOKR3q2RnZbQucqApZbenC0gcSCBSQ2RAJDYbRbBWVuOUjNcjWuLbVtc8V9CwPvj5hxAQguXMGaWyqOR9TwQdgU4VwhBCMifcANZWxcCE/BJpiS7hKWhRH+RNmJ4zKmhRH/F84yJrstiwCxjc0UCgB+BcY0QuQ3lgjAjAPAFmDoMc4V70ElA38ocRNFDBp4pMEN6VX4jhNFeOBBEdV5aOKJKKao4oostujiizDGGOMLPuwQwwIGkIBDCzKmcsUMBAQpJAEedNijJhKcIML/kEwSgEGPcEwxgQo8uDCZJGRU0OSWJ8H4AgwIhBlmDy9IMsaWW4qww4tH/CDmmwig8kgRaKIJxQgtTgDnnjw6gkGdaH634hd7FjpBI1gAimaXKmJR6J4XNHKColvKwMGKYD765gONUIrmoSn20YOmcIrBiKdbgoqiqKS+aeoik6IqpKWYthomp4wkKmuQjKboqK2RNvLnroKqSKitqi5Cp6x35tlqn46c6amabLpZqJyPZOlpry1+CSeZkyS5ZJ1PyhjllFVeScmPWxZ5pCc02oijjtC+a++9+Oar77789uvvvwDj+wESF8AQMCUTWHBDBQUUUIEBShiZzgRZBIFG/zoSENHwxhsvEEE6LWQhAQMMSJBBD9ugwPHKG2szjQobMHDAzDQfsIF2ynTA8s4FfLyMCjTULPQBWSggzAgL8MzyAhLjssHQQ/uMCw1K70yRMC3IDLXQPwQzRNUsG6BMFlsPnQEuS4DNcgUG4zKBBGULTQIuQKjNcrC3ZKF13DSXqErddnOM9ypB7M33AbmtwkPgG1dgNC5owH34AXPj8jXjxTqCBMlISJLB5AecjcsBjBdgwSMZNNBADjmoLrojPYCerCowSBE4EbMj4oISOhjg++86KJHCI0/zTWEwQTCsNl+MHGHD79D/bgO2i0BAdtkrtKeMCcor/RkjF1gQ/bz4BlgwuCIKRLA1CNovE4TtOxOxViMSkE9+04v8kAEJM5OQQe7KgMEBLtewIdAAT42AQQ7sN74ctA0SH0jcPlIABCAsIRIrYCD5mHcwQ3RAg+ObXwcLEQEQRk9qIxwECEwIveOlUBBRYOHvyvJCQajACzL0gkFqOAgTyNAEPCREDxYIwhygLIiD4MDzGGiDSyGREBwQH/ks4MQnEsIJEZCi7ywQAcRY8RAfeEEFneC3L5rxjGhMoxrXeIlAAAAh+QQJCgAAACwAAAAAbgBuAAAH/4AAgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6dYWGfo6SIS3RUDgQEDlQxS6WxngcOA7a3tg4HsryXRzksuMIDLDlHvciQEDHDzQMxEMnSiz7BzsIsY9PbhiY11801JtzkAAvgzgvl3LXoww7r013uzl3xyRX0zRX3yFr6w7RAkjOnH6VzAHGpWzRBx5ABDmpRWaCC3AgQYzx4GJODRqMHCXE9WGRCg4CTKE+ysKBA2oEdIlbJJCDCQwdG/0IKTIRCSMqfKLkMQbZixsyjBGZ4VHQg5IBdiFDIAEpVgIOhslZoQYpUCwhFF0QkFHEhkYeqVbm0LHXAKFekUP++8kyIIhETtGgtxNrx9i2RRV40uNPgJZGCGnirsqg4akTMvkhlZFiU5Nu1GkkUWUiMduGnIJDf7mBUhItgYRq4FCHJuSoVUj5Cc83cKEOBHRgw7CgwmRGB1lQHkPIgGymGWCGAA3VQ8BPx4jOPl0quPKUDOaPGQJ9Jm9Tv6iiFj8qxXSaTWEPAo8T6icZj6DJ+xEqj/qSOUs+hv5blQL2GCaV04JZsM5DBywLqjRMLDVuFpoUNyJxQnRC9gAAFZDNAiEwGMwAnQ10VEiFDZFQYKE0GEibmAYjJZLBDErklkYR85CzQH1U1XGHQPWkMQUAIIRBgAks7FmnkkUgmqeT/kkw26eSTUBpExghGoEFBlL2s0IAQBXQpRQM4YEmKBGp0aaaZFVjAg5iE5PHGFpYoIcWZdHZ5gxlsulHCBxQo8MEZk/yQRp2E3oDlGhAkoOiiCSgARiReECqpBFDOkSijjH4ApyNBSCopBj08aQampEbjSASeSrqBk2u4QCqmLjzhiAmpEmqAk5e+yiigjZxQK6FOiqErpik44uuvdAY7LKPFNkIrsmbe2mSuy/LKCKrQdhkBq64uGyun2RYAqqjLJmCqI5FCS+mTlg6rKSSCImtolIi+6qgkctZ6Z5579vlnJWRKmuaabAri5qaXaMmll2AWXMqUVV7p8MQUV2zx/8UYZ6zxxhx37PHHpCiABBNdbNCAEQSD/AgCDRjg8stK3LTOFArwwIMCJZATxcs8u6wDVNuEccEDCBSNwAMj4CnNzj03DXQyT/xg9NRFn8sLEE1nrYPMyIQhNdVTN5EzL1i0nHXTSqTMywVgg91CLwicfbYRyExBdNtTPyBxLCTInXUDyCiAN9hO8BKB302v2gsPg1MNg+GI92zP4o1PHaosB0TOsxKBV2504bLErbnLSCBTwt2NP/ACL0iYHXkDazmSwBI//LBEApKM4HnpvRyuOQKPLLEBDgcUfwAOG8DyyBOVNyEKMklEHsUjHBhvvfEcKNME3k18ME30cq/myKsIDFx/PQMjQFJCC6gfjcTz00Tg+ssNAPFICTSYbz4NYz9CgRMw6IETVlcOJCDgABGIAAkQgAVIGEF/+qObyhARBAiaLwgTPMTwLHg95GWwEByE4AcJQYLyhbB4DCDBCAeRAhCcsHggaNYKAZCBFx6gNzMEAAU6cMIO7C2H1Qth9nJIiANaEHhELAQPumC+LqgtiYOggAo4UDsOqOCHUMyiFrfIxS568YudCAQAOw==",""],["barBackground","barBackground","TEXT","linear-gradient(90deg, #333, #666)",""],["barBorder","barBorder","TEXT","1px solid black",""],["barHeight","barHeight","TEXT","3px",""]]),sceneProps:new h([["ambientColor","ambientColor","COLOR3",[0,0,0],"Defines the color used to simulate the ambient color (Default is (0, 0, 0))"],["animationTimeScale","animationTimeScale","NUM","1","Gets or sets a general scale for animation speed"],["animationsEnabled","animationsEnabled","BOOL","TRUE","Sets a boolean indicating if animations are enabled"],["audioEnabled","audioEnabled","BOOL","TRUE","Sets if audio support is enabled"],["clearColor","clearColor","COLOR4",[100,100,200,1],"Defines the color used to clear the render buffer"],["collisionsEnabled","collisionsEnabled","BOOL","TRUE","Sets a boolean indicating if collisions are enabled on this scene"],["defaultCursor","defaultCursor","TEXT","","Defines the HTML default cursor to use (empty by default)"],["environmentIntensity","environmentIntensity","NUM","1","Intensity of the environment in all pbr material. This dims or reinforces the IBL lighting overall (reflection and diffuse). As in the majority of the scene they are the same (exception for multi room and so on), this is easier to set here than in all the materials."],["environmentTexture","environmentTexture","NONE","","Texture used in all pbr material as the reflection texture. As in the majority of the scene they are the same (exception for multi room and so on), this is easier to set here than in all the materials."],["fogColor","fogColor","COLOR3",[100,100,100],"Sets the fog color to use"],["fogDensity","fogDensity","NUM","0.1","Sets the fog density to use"],["fogEnabled","fogEnabled","BOOL","TRUE","Sets a boolean indicating if fog is enabled on this scene"],["fogEnd","fogEnd","NUM","10","Sets the fog end distance to use"],["fogMode","fogMode","NUM","2",`Sets the fog mode to use
0-none
1-exp
2-exp2
3-linear`],["fogStart","fogStart","NUM","0","Sets the fog start distance to use"],["forceShowBoundingBoxes","forceShowBoundingBoxes","BOOL","TRUE","Sets a boolean indicating if all bounding boxes must be rendered"],["gravity","gravity","VECTOR3",[0,-9.81,0],"Defines the gravity applied to this scene (used only for collisions)"],["hoverCursor","hoverCursor","TEXT","pointer","Defines the HTML cursor to use when hovering over interactive elements"],["lensFlaresEnabled","lensFlaresEnabled","BOOL","TRUE","Sets a boolean indicating if lens flares are enabled on this scene"],["lightsEnabled","lightsEnabled","BOOL","TRUE","Sets a boolean indicating if lights are enabled on this scene"],["particlesEnabled","particlesEnabled","BOOL","TRUE","Sets a boolean indicating if particles are enabled on this scene"],["physicsEnabled","physicsEnabled","BOOL","TRUE","Sets a boolean indicating if physic engines are enabled on this scene"],["postProcessesEnabled","postProcessesEnabled","BOOL","TRUE","Sets a boolean indicating if postprocesses are enabled on this scene"],["probesEnabled","probesEnabled","BOOL","TRUE","Sets a boolean indicating if probes are enabled on this scene"],["shadowsEnabled","shadowsEnabled","BOOL","TRUE","Sets a boolean indicating if shadows are enabled on this scene"],["skeletonsEnabled","skeletonsEnabled","BOOL","TRUE","Sets a boolean indicating if skeletons are enabled on this scene"],["spritesEnabled","spritesEnabled","BOOL","TRUE","Sets a boolean indicating if sprites are enabled on this scene"],["texturesEnabled","texturesEnabled","BOOL","TRUE","Sets a boolean indicating if textures are enabled on this scene"],["useRightHandedSystem","useRightHandedSystem","BOOL","TRUE","Gets or sets a boolean indicating if the scene must use right-handed coordinates system"]]),envOptions:new h([["backgroundYRotation","backgroundYRotation","NUM","0","ENV_KEY_VALUE_BACKGROUND_Y_ROTATION_TOOLTIP"],["cameraContrast","cameraContrast","NUM","1.6","ENV_KEY_VALUE_CAMERA_CONTRAST_TOOLTIP"],["cameraExposure","cameraExposure","NUM","0.6","ENV_KEY_VALUE_CAMERA_EXPOSURE_TOOLTIP"],["createGround","createGround","BOOL","TRUE","ENV_KEY_VALUE_CREATE_GROUND_TOOLTIP"],["createSkybox","createSkybox","BOOL","TRUE","ENV_KEY_VALUE_CREATE_SKYBOX_TOOLTIP"],["enableGroundMirror","enableGroundMirror","BOOL","FALSE","ENV_KEY_VALUE_ENABLE_GROUND_MIRROR_TOOLTIP"],["enableGroundShadow","enableGroundShadow","BOOL","TRUE","ENV_KEY_VALUE_ENABLE_GROUND_SHADOW_TOOLTIP"],["environmentTexture","environmentTexture","NONE","","ENV_KEY_VALUE_ENVIRONMENT_TEXTURE_TOOLTIP"],["groundColor","groundColor","COLOR3",[100,100,255],"ENV_KEY_VALUE_GROUND_COLOR_TOOLTIP"],["groundMirrorAmount","groundMirrorAmount","NUM","1","ENV_KEY_VALUE_GROUND_MIRROR_AMOUNT_TOOLTIP"],["groundMirrorBlurKernel","groundMirrorBlurKernel","NUM","64","ENV_KEY_VALUE_GROUND_MIRROR_BLUR_KERNEL_TOOLTIP"],["groundMirrorFallOffDistance","groundMirrorFallOffDistance","NUM","0","ENV_KEY_VALUE_GROUND_MIRROR_FALL_OFF_DISTANCE_TOOLTIP"],["groundMirrorFresnelWeight","groundMirrorFresnelWeight","NUM","1","ENV_KEY_VALUE_GROUND_MIRROR_FRESNEL_WEIGHT_TOOLTIP"],["groundMirrorSizeRatio","groundMirrorSizeRatio","NUM","0.3","ENV_KEY_VALUE_GROUND_MIRROR_SIZE_RATIO_TOOLTIP"],["groundMirrorTextureType","groundMirrorTextureType","NUM","","ENV_KEY_VALUE_GROUND_MIRROR_TEXTURE_TYPE_TOOLTIP"],["groundOpacity","groundOpacity","NUM","1","ENV_KEY_VALUE_GROUND_OPACITY_TOOLTIP"],["groundShadowLevel","groundShadowLevel","NUM","0.5","ENV_KEY_VALUE_GROUND_SHADOW_LEVEL_TOOLTIP"],["groundSize","groundSize","NUM","15","ENV_KEY_VALUE_GROUND_SIZE_TOOLTIP"],["groundTexture","groundTexture","NONE","","ENV_KEY_VALUE_GROUND_TEXTURE_TOOLTIP"],["groundYBias","groundYBias","NUM","0.01","ENV_KEY_VALUE_GROUND_Y_BIAS_TOOLTIP"],["rootPosition","rootPosition","VECTOR3",[0,0,0],"ENV_KEY_VALUE_GROUND_ROOT_POSITION_TOOLTIP"],["setupImageProcessing","setupImageProcessing","BOOL","TRUE","ENV_KEY_VALUE_SETUP_IMAGE_PROCESSING_TOOLTIP"],["sizeAuto","sizeAuto","BOOL","TRUE","ENV_KEY_VALUE_SIZE_AUTO_TOOLTIP"],["skyboxColor","skyboxColor","COLOR3",[100,100,255],"ENV_KEY_VALUE_SKYBOX_COLOR_TOOLTIP"],["skyboxSize","skyboxSize","NUM","20","ENV_KEY_VALUE_SKYBOX_SIZE_TOOLTIP"],["skyboxTexture","skyboxTexture","NONE","","ENV_KEY_VALUE_SKYBOX_TEXTURE_TOOLTIP"],["toneMappingEnabled","toneMappingEnabled","BOOL","TRUE","ENV_KEY_VALUE_TONE_MAPPING_ENABLED_TOOLTIP"]]),envAccessors:new h([["ground","ground","NONE","","Gets the ground mesh created by the helper."],["groundMaterial","groundMaterial","NONE","","Gets the ground material created by the helper."],["groundMirror","groundMirror","NONE","","Gets the ground mirror created by the helper."],["groundMirrorRenderList","groundMirrorRenderList","NONE","","Gets the ground mirror render list to helps pushing the meshes you wish in the ground reflection."],["groundTexture","groundTexture","NONE","","Gets the ground texture created by the helper."],["rootMesh","rootMesh","NONE","","Gets the root mesh created by the helper."],["skybox","skybox","NONE","","Gets the skybox created by the helper."],["skyboxMaterial","skyboxMaterial","NONE","","Gets the skybox material created by the helper."],["skyboxTexture","skyboxTexture","NONE","","Gets the skybox texture created by the helper."]]),photoDomeOptions:new h([["autoPlay","autoPlay","BOOL","TRUE",""],["clickToPlay","clickToPlay","BOOL","TRUE",""],["crossEyeMode","crossEyeMode","BOOL","TRUE",""],["faceForward","faceForward","BOOL","TRUE",""],["generateMipMaps","generateMipMaps","BOOL","TRUE",""],["halfDomeMode","halfDomeMode","BOOL","TRUE",""],["loop","loop","BOOL","TRUE",""],["mesh","mesh","MESH","",""],["poster","poster","TEXT","./asssets/texture/poster.jpg",""],["resolution","resolution","NUM","32",""],["size","size","NUM","1000",""],["useDirectMapping","useDirectMapping","BOOL","TRUE",""]]),assetsType:new h([["Mesh","addMeshTask","TEXT","assets/scene/cube.babylon"],["TextFile","addTextFileTask","TEXT","assets/scene/cube.babylon"],["BinaryFile","addBinaryFileTask","TEXT","assets/json/gui.json"],["Image","addImageTask","TEXT","assets/media/logo.svg"],["Texture","addTextureTask","TEXT","assets/texture/grass.jpg"],["CubeTexture","addCubeTextureTask","TEXT","assets/texture/backgroundSkybox.dds"],["HDRCubeTexture","addHDRCubeTextureTask","TEXT","assets/texture/environmentSpecular.env"],["EquiRectangularCubeTexture","addEquiRectangularCubeTextureAssetTask","TEXT",""]]),assetsLoaded:new h([["meshes","meshes"],["animationGroups","animationGroups"],["skeletons","skeletons"],["text","text"],["data","binaryData"],["image","image"],["texture","texture"]])};e.Blocks.scene_create_custom_preloader={init(){this.appendDummyInput().appendField("create custom preloader");const i=this.appendValueInput("OPTIONS").setAlign(e.ALIGN_RIGHT).appendField("options").setCheck("Object");this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setStyle("scenes_style"),this.setTooltip("for changing background of the entire preloader screen."),this.setHelpUrl(""),this.mixin(O("scene_create_custom_preloader_option","option")),o(i,"OBJECT","")}},e.Blocks.scene_create_custom_preloader_option={init(){const i=this,t=this.appendValueInput("VALUE").appendField("set").appendField(new e.FieldDropdown(()=>A.customPreloaderOption.generatMenu(),n=>A.customPreloaderOption.updateShape(i,t,n)),"KEY").appendField("to").setCheck(null);this.setStyle("scenes_style"),this.setInputsInline(!1),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip(""),this.setHelpUrl(""),this.mixin(R("object_create")),o(t,"TEXT","radial-gradient(#eee, #888)")}},e.Blocks.scene_update_custom_preloader={init(){const i=this;this.appendDummyInput().appendField(new e.FieldDropdown([["update","update"],["finish","finish"]],t=>{t==="update"&&!i.getInput("PERCENTAGE")&&this.appendValueInput("PERCENTAGE").setCheck("Number"),t==="finish"&&i.getInput("PERCENTAGE")&&i.removeInput("PERCENTAGE")}),"METHOD").appendField("custom preloader"),this.appendValueInput("PERCENTAGE").appendField("percentage").setCheck("Number"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setStyle("scenes_style"),this.setTooltip("Update the preloader progress with percentage"),this.setHelpUrl("")}},e.Blocks.scene_assets_manager={init(){this.appendDummyInput().appendField("assets manager"),this.appendDummyInput().setAlign(e.ALIGN_RIGHT).appendField("useDefaultPreloader").appendField(new e.FieldCheckbox("TRUE"),"USE_DEFAULT_PRELOADER"),this.appendStatementInput("LOAD_ASSETS").setCheck(null).setAlign(e.ALIGN_RIGHT).appendField("load assets"),this.appendStatementInput("ON_PROGRESS").setCheck(null).setAlign(e.ALIGN_RIGHT).appendField("on progress"),this.appendStatementInput("ON_FINISH").setCheck(null).setAlign(e.ALIGN_RIGHT).appendField("on load"),this.appendStatementInput("ON_READY").setCheck(null).setAlign(e.ALIGN_RIGHT).appendField("on ready"),this.setStyle("scenes_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip(e.Msg.APP_ASSETS_MANAGER_TOOLTIP),this.setHelpUrl(e.Msg.APP_ASSETS_MANAGER_HELP_URL),this.mixin(O("scene_preloader_percentage","percentage"))}},e.Blocks.scene_preloader_percentage={init(){this.appendDummyInput().appendField("percentage"),this.setInputsInline(!1),this.setOutput(!0,"Number"),this.setStyle("scenes_style"),this.setTooltip(""),this.setHelpUrl(""),this.mixin(R("scene_assets_manager"))}},e.Blocks.scene_load_asset={init(){const i=this;this.appendDummyInput().appendField("load asset").appendField(new e.FieldDropdown(()=>A.assetsType.generatMenu(),a=>i.updateShape(a)),"TYPE");const t=this.appendValueInput("ASSET_NAME").setCheck("String").setAlign(e.ALIGN_RIGHT).appendField("name"),n=this.appendValueInput("URL").setCheck("String").setAlign(e.ALIGN_RIGHT).appendField("url");this.setStyle("scenes_style"),this.setInputsInline(!0),this.setOutput(!0,null),this.setTooltip(e.Msg.APP_ADD_TASK_TOOLTIP),this.setHelpUrl(e.Msg.APP_ADD_TASK_HELP_URL),this.mixin(R("scene_assets_manager")),o(t,"TEXT","load"),o(n,"TEXT","assets/scene/cube.babylon")},updateShape(i){switch(A.assetsType.updateShape(this,this.getInput("URL"),i),this.getInput("SIZE")&&this.removeInput("SIZE"),i){case"addHDRCubeTextureTask":case"addEquiRectangularCubeTextureAssetTask":!this.getInput("SIZE")&&(this.appendValueInput("SIZE").appendField("size").setAlign(e.ALIGN_RIGHT),o(this.getInput("SIZE"),"NUM","1024"));break}}},e.Blocks.scene_get_loaded_from_asset={init(){this.appendValueInput("ASSET").appendField("get loaded").appendField(new e.FieldDropdown(()=>A.assetsLoaded.generatMenu()),"TYPE").appendField("from").setCheck(null),this.setStyle("scenes_style"),this.setInputsInline(!0),this.setOutput(!0,null),this.setTooltip(""),this.setHelpUrl("")}},e.Blocks.scene_on_finish_load={init(){this.appendValueInput("ASSET").appendField("on finish load").setCheck(null),this.appendStatementInput("DO_CB"),this.setStyle("scenes_style"),this.setInputsInline(!0),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip("Callback called when the task is successful"),this.setHelpUrl("")}},e.Blocks.set_scene_prop={init:function(){const i=this,t=this.appendValueInput("VALUE").appendField("set scene").appendField(new e.FieldDropdown(()=>A.sceneProps.generatMenu(),n=>A.sceneProps.updateShape(i,t,n)),"KEY").appendField("to");this.setStyle("scenes_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setHelpUrl(""),o(t,"COLOR3",[0,0,0])}},e.Blocks.scene_create_default_environment={init(){this.appendValueInput("OPTIONS").appendField("create environment options").setCheck("Object"),this.setStyle("scenes_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip("Creates a new environment"),this.setHelpUrl(""),this.mixin(O("scene_create_default_environment_option","option")),o(this.getInput("OPTIONS"),"OBJECT","")}},e.Blocks.scene_update_default_environment={init(){this.appendValueInput("OPTIONS").appendField("update environment options").setCheck("Object"),this.setStyle("scenes_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip("Updates the background according to the new options"),this.setHelpUrl(""),this.mixin(O("scene_create_default_environment_option","option")),o(this.getInput("OPTIONS"),"OBJECT","")}},e.Blocks.scene_create_default_environment_option={init(){const i=this;this.appendValueInput("VALUE").appendField("set").appendField(new e.FieldDropdown(()=>A.envOptions.generatMenu(),t=>A.envOptions.updateShape(i,i.getInput("VALUE"),t)),"KEY").appendField("to"),this.setStyle("scenes_style"),this.setInputsInline(!1),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setHelpUrl("https://doc.babylonjs.com/typedoc/interfaces/babylon.ienvironmenthelperoptions"),this.mixin(R("object_create")),A.envOptions.updateShape(i,i.getInput("VALUE"),"backgroundYRotation")}},e.Blocks.scene_get_environment_prop={init(){const i=this;this.appendDummyInput().appendField("get environment").appendField(new e.FieldDropdown(()=>A.envAccessors.generatMenu(),t=>A.envAccessors.updateTooltip(i,t)),"PROP"),this.setStyle("scenes_style"),this.setInputsInline(!1),this.setOutput(!0,null),this.setHelpUrl("https://doc.babylonjs.com/typedoc/classes/babylon.environmenthelper")}},e.Blocks.create_photo_dome={init(){this.appendDummyInput().appendField("create 360 photo");const i=this.appendValueInput("NAME").setCheck("String").setAlign(e.ALIGN_RIGHT).appendField("name"),t=this.appendValueInput("URL").setCheck("String").setAlign(e.ALIGN_RIGHT).appendField("url"),n=this.appendValueInput("OPTIONS").setCheck("Object").setAlign(e.ALIGN_RIGHT).appendField("options");this.setStyle("scenes_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip(e.Msg.CREATE_PHOTO_DOME_TOOLTIP),this.setHelpUrl(""),this.mixin(O("create_photo_dome_option","option")),o(i,"TEXT",""),o(t,"TEXT",""),o(n,"OBJECT","")}},e.Blocks.create_photo_dome_option={init(){const i=this,t=this.appendValueInput("VALUE").appendField("set").appendField(new e.FieldDropdown(()=>A.photoDomeOptions.generatMenu(),n=>A.photoDomeOptions.updateShape(i,t,n)),"KEY").appendField("to").setCheck(null);this.setStyle("scenes_style"),this.setInputsInline(!1),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip(""),this.setHelpUrl(""),this.mixin(R("object_create")),A.photoDomeOptions.updateShape(i,t,"autoPlay")}},e.Blocks.app_fullscreen={init(){this.appendDummyInput().appendField("fullscreen");const i=this.appendValueInput("ENABLED").appendField("enabled").setCheck("Boolean").setAlign(e.ALIGN_RIGHT);this.appendDummyInput().appendField("pointerLock").appendField(new e.FieldCheckbox("TRUE"),"POINTER_LOCK"),this.setStyle("scenes_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip("Enters or exits Fullscreen mode"),this.setHelpUrl(""),o(i,"BOOL","TRUE")}},e.Blocks.app_pointer_lock={init(){this.appendDummyInput().appendField("pointer lock");const i=this.appendValueInput("ENABLED").appendField("enabled").setCheck("Boolean").setAlign(e.ALIGN_RIGHT);this.setStyle("scenes_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip("Enters or exits Pointerlock mode"),this.setHelpUrl(""),o(i,"BOOL","TRUE")}};const en="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjQ1MDA3NDE0NDYwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM5MzMiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTg5NS40ODggNjQ0Ljk5MnYtMjY4LjhhODMuNjQ4IDgzLjY0OCAwIDAgMCA2Ni42MjQtODAuMzg0YzAtNDUuOTUyLTM2LjczNi04MC4zODQtODAuMzg0LTgwLjM4NC0yMi45NzYgMC00NS45NTIgMTEuNDU2LTU5LjcxMiAyNy41ODRsLTIyOS43Ni0xMjguNjRjMi4zMDQtNi45NzYgNC42MDgtMTMuODI0IDQuNjA4LTIzLjA0QzU5Ni44NjQgNDUuMzc2IDU2MC4xMjggMTAuOTQ0IDUxNi40OCAxMC45NDRTNDM2LjA5NiA0Ny42OCA0MzYuMDk2IDkxLjMyOGMwIDYuOTEyIDIuMzA0IDEzLjc2IDIuMzA0IDIwLjY3MkwyMDguNjQgMjQyLjk0NGMtMTguNDMyLTE4LjM2OC0zOS4xMDQtMjkuODg4LTYyLjA4LTI5Ljg4OC00NS45NTIgMC04MC4zODQgMzYuNzM2LTgwLjM4NCA4MC4zODQgMCAzOS4wNCAyNy41ODQgNzEuMjMyIDY0LjMyIDgwLjM4NHYyNzEuMTA0Yy0zNi43MzYgOS4yMTYtNjQuMzIgNDEuMzQ0LTY0LjMyIDgwLjM4NCAwIDQ1Ljk1MiAzNi43MzYgODAuMzg0IDgwLjM4NCA4MC4zODQgMjIuOTc2IDAgNDUuOTUyLTExLjQ1NiA1OS43MTItMjcuNTg0bDIzMi4wNjQgMTI4LjY0YTczLjI4IDczLjI4IDAgMCAwLTYuOTEyIDMyLjE5MmMwIDQ1Ljk1MiAzNi43MzYgODAuMzg0IDgwLjM4NCA4MC4zODRzODAuMzg0LTM2LjczNiA4MC4zODQtODAuMzg0YzAtMTEuNDU2LTIuMzA0LTIyLjk3Ni02LjkxMi0zNC40MzJsMjMyLjA2NC0xMjYuMzM2YzE2LjA2NCAxNi4wNjQgMzYuNzM2IDI3LjU4NCA2Mi4wMTYgMjcuNTg0IDQ1Ljk1MiAwIDgwLjM4NC0zNi43MzYgODAuMzg0LTgwLjM4NCAyLjM2OC00MS4zNDQtMjUuMTUyLTczLjQ3Mi02NC4yNTYtODAuMzg0eiBtLTMzMy4xMiAyMjkuNzZhNzUuODQgNzUuODQgMCAwIDAtMjcuNTg0LTEzLjc2di0yMDQuNDhoLTM5LjA0djIwNC40OGMtMTEuNDU2IDIuMzA0LTIyLjk3NiA5LjIxNi0zMi4xOTIgMTYuMDY0bC0yMzYuNjA4LTEzMC45NDRjMi4zMDQtNi45MTIgMi4zMDQtMTMuNzYgMi4zMDQtMjAuNjcyIDAtMzYuNzM2LTI1LjI4LTY4LjkyOC01OS43MTItNzguMTQ0VjM3My44ODhjMTMuNzYtNC42MDggMjUuMjgtOS4yMTYgMzQuNDMyLTIwLjY3MkwzNzYuMjU2IDQ1OC44OGwyMC42NzItMzIuMTkyLTE3Mi4yODgtMTA1LjZjMi4zMDQtOS4yMTYgNC42MDgtMTYuMDY0IDQuNjA4LTI1LjI4IDAtNi45MTItMi4zMDQtMTMuNzYtMi4zMDQtMjAuNjcybDIyOS43Ni0xMzAuOTQ0YzEzLjc2IDE2LjA2NCAzNi43MzYgMjUuMjE2IDU5LjcxMiAyNS4yMTYgMjIuOTc2IDAgNDMuNjQ4LTkuMjE2IDU3LjQwOC0yNS4yOGwyMjkuNzYgMTMwLjk0NGMtMi4zMDQgNi45MTItMi4zMDQgMTMuNzYtMi4zMDQgMjAuNjcyIDAgOS4yMTYgMi4zMDQgMTYuMDY0IDQuNjA4IDI1LjI4TDYzMy42IDQyNi43NTJsMjAuNjcyIDMyLjE5MiAxNjkuOTg0LTEwMy4zNmM5LjIxNiA5LjIxNiAyMC42NzIgMTYuMDY0IDM0LjQzMiAyMC42NzJ2MjczLjQwOGMtMzQuNDMyIDkuMjE2LTU3LjQwOCA0MS4zNDQtNTcuNDA4IDc4LjE0NCAwIDYuOTEyIDAgMTMuNzYgMi4zMDQgMTguMzY4bC0yNDEuMjE2IDEyOC41NzZ6IiBwLWlkPSIzOTM0IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PHBhdGggZD0iTTQzNy43NiA1ODguNzM2YTEwNS42IDEwNS42IDAgMSAwIDE0OS40NC0xNDkuNDRBMTA1LjYgMTA1LjYgMCAxIDAgNDM3Ljc2IDU4OC43MzZ6IiBwLWlkPSIzOTM1IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+",tn="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjQ1MDEzOTQ3OTcxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE4MTI2IiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik02NDQuMjI0IDE2MC40NDhIMTYwYTk2IDk2IDAgMCAwLTk2IDk2djUxMS4xMDRhOTYgOTYgMCAwIDAgOTYgOTZoNDg0LjIyNGE5NiA5NiAwIDAgMCA5Ni05NlYyNTYuNDQ4YTk2IDk2IDAgMCAwLTk2LTk2eiBtLTQ4NC4yMjQgNjRoNDg0LjIyNGEzMiAzMiAwIDAgMSAzMiAzMnY1MTEuMTA0YTMyIDMyIDAgMCAxLTMyIDMySDE2MGEzMiAzMiAwIDAgMS0zMi0zMlYyNTYuNDQ4YTMyIDMyIDAgMCAxIDMyLTMyeiIgcC1pZD0iMTgxMjciIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNODU0Ljg0OCAyMjIuNTkybC0xMDUuMjggOTEuNTg0Yy00MS40NzIgMzYuMTYtNzMuMzQ0IDc3LjQ0LTczLjM0NCAxMDQuOTZWNjA0LjhjMCAyNy41MiAzMS44NzIgNjguOCA3My4zNDQgMTA0Ljk2bDEwNS4yOCA5MS41ODRjNTMuMDU2IDQ2LjIwOCAxMTUuMzkyIDI5LjQ0IDExNS4zOTItNDAuODMyVjI2My40MjRjMC03MC4yNzItNjIuMzM2LTg3LjA0LTExNS4zOTItNDAuODMyeiBtNDkuNjY0IDQwLjc2OGwxLjkyLTIuNjg4LTAuMTkyIDIuNzUydjQ5Ny4xNTJsMC4xOTIgMi42ODgtMC41NzYtMC44OTZhNTEuMDcyIDUxLjA3MiAwIDAgMC01Ljc2LTYuMjcybC0xMDguNDgtOTQuNTkyYy0yNy4zOTItMjMuODA4LTUxLjM5Mi01NC44NDgtNTEuMzkyLTU2LjY0VjQxOS4ybDEuNjY0LTIuNzUyYzUuNzYtOC4zODQgMjYuNTYtMzMuNzI4IDQ5LjcyOC01My44ODhsMTA1LjI4LTkxLjY0OGMzLjUyLTMuMTM2IDUuOTUyLTUuNjMyIDcuNjE2LTcuNDg4eiIgcC1pZD0iMTgxMjgiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=",nn="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjQ1MDE0NzQ2NTA4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM3ODI4IiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik00MTEuNDAyNjY2NjcgMTgyLjIxODY2NjY3YzMuMDYxMzMzMzMgMTEuNDc3MzMzMzMgMTQuODQ4IDE4LjMxNDY2NjY3IDI2LjM1NzMzMzMzIDE1LjI4NTMzMzMzIDExLjUzMDY2NjY3LTMuMDUwNjY2NjcgMTguMzc4NjY2NjctMTQuODA1MzMzMzMgMTUuMzM4NjY2NjctMjYuMjgyNjY2Njd2MC4wMTA2NjY2N2wtMjIuNDg1MzMzMzQtODQuNTk3MzMzMzNjLTMuMDQtMTEuNDc3MzMzMzMtMTQuODY5MzMzMzMtMTguMzA0LTI2LjM3ODY2NjY2LTE1LjI2NC0xMS41MzA2NjY2NyAzLjAwOC0xOC4zNzg2NjY2NyAxNC43NzMzMzMzMy0xNS4zMzg2NjY2NyAyNi4yNjEzMzMzM2wyMi41MDY2NjY2NyA4NC41ODY2NjY2N3pNMjA2LjM2OCAzNzcuOTk0NjY2NjdsLTc1LjUzMDY2NjY3LTQ0Ljc2OGMtMTAuMjE4NjY2NjctNi4wNDgtMjMuNDc3MzMzMzMtMi43Mi0yOS41NTczMzMzMyA3LjQ2NjY2NjY2LTYuMDggMTAuMTk3MzMzMzMtMi43MDkzMzMzMyAyMy4zOTIgNy40OTg2NjY2NyAyOS40NTA2NjY2N2w3NS41MiA0NC43Nzg2NjY2N2MxMC4yNCA2LjA2OTMzMzMzIDIzLjQ3NzMzMzMzIDIuNjk4NjY2NjcgMjkuNTU3MzMzMzMtNy40OTg2NjY2NyA2LjA5MDY2NjY3LTEwLjE2NTMzMzMzIDIuNzItMjMuMzM4NjY2NjctNy40ODgtMjkuNDI5MzMzMzN6IG0zNzkuODI5MzMzMzMtMTgwLjUwMTMzMzM0YzExLjU1MiAzLjAyOTMzMzMzIDIzLjMzODY2NjY3LTMuODA4IDI2LjM1NzMzMzM0LTE1LjI4NTMzMzMzbDIyLjUwNjY2NjY2LTg0LjU5NzMzMzMzYzMuMDE4NjY2NjctMTEuNDg4LTMuODA4LTIzLjI0MjY2NjY3LTE1LjI5Ni0yNi4yNjEzMzMzNC0xMS41NTItMy4wMjkzMzMzMy0yMy4zMzg2NjY2NyAzLjc5NzMzMzMzLTI2LjM3ODY2NjY2IDE1LjI2NGwtMjIuNTA2NjY2NjcgODQuNTk3MzMzMzR2LTAuMDEwNjY2NjdjLTMuMDQgMTEuNDg4IDMuODA4IDIzLjI0MjY2NjY3IDE1LjMxNzMzMzMzIDI2LjI5MzMzMzMzeiBtMjEwLjYxMzMzMzM0LTQ1LjU2OGMtMTAuMTU0NjY2NjctNi4xOTczMzMzMy0yMy40MjQtMy4wNTA2NjY2Ny0yOS42NjQgNy4wNzJsLTQ2LjAwNTMzMzM0IDc0LjU4MTMzMzM0Yy02LjE4NjY2NjY3IDEwLjExMi0zLjA0IDIzLjMyOCA3LjExNDY2NjY3IDI5LjUyNTMzMzMzIDEwLjE3NiA2LjIyOTMzMzMzIDIzLjQyNCAzLjA3MiAyOS42NjQtNy4wMTg2NjY2N2w0Ni4wMDUzMzMzMy03NC42MDI2NjY2NmM2LjIwOC0xMC4xMjI2NjY2NyAzLjA2MTMzMzMzLTIzLjM2LTcuMTE0NjY2NjYtMjkuNTU3MzMzMzR6TTI5NS43MjI2NjY2NyAyNjMuMDkzMzMzMzNjMTAuMTU0NjY2NjctNi4xOTczMzMzMyAxMy4zMjI2NjY2Ny0xOS40MTMzMzMzMyA3LjA4MjY2NjY2LTI5LjUyNTMzMzMzbC00NS45ODQtNzQuNTgxMzMzMzNjLTYuMjI5MzMzMzMtMTAuMTIyNjY2NjctMTkuNTMwNjY2NjctMTMuMjY5MzMzMzMtMjkuNjY0LTcuMDcyLTEwLjE1NDY2NjY3IDYuMjA4LTEzLjMyMjY2NjY3IDE5LjQzNDY2NjY3LTcuMTE0NjY2NjYgMjkuNTQ2NjY2NjZsNDYuMDA1MzMzMzMgNzQuNjAyNjY2NjdjNi4yMjkzMzMzMyAxMC4xMDEzMzMzMyAxOS41MzA2NjY2NyAxMy4yNDggMjkuNjc0NjY2NjcgNy4wMjkzMzMzM3ogbTIxNi4zMDkzMzMzMy0xLjgzNDY2NjY2Yy03MC4wMDUzMzMzMyAwLTEzNS44NTA2NjY2NyAyOC4xODEzMzMzMy0xODUuMzMzMzMzMzMgNzcuNDkzMzMzMzMtNDkuNTA0IDQ5LjMxMi03Ni43NTczMzMzMyAxMTQuODQ4LTc2Ljc1NzMzMzM0IDE4NC41OTczMzMzMyAwIDQ2LjU0OTMzMzMzIDEyLjQ2OTMzMzMzIDkyLjI4OCAzNi4wNTMzMzMzNCAxMzIuMjAyNjY2NjcgMjAuNTg2NjY2NjcgMzQuODkwNjY2NjcgMjcuMjMyIDQ1LjA1NiA2MS4yNDggNjcuMTE0NjY2Njd2MTY0Ljc4OTMzMzMzYzAgMzMuMTczMzMzMzMgNjUuNTM2IDY1LjkyIDk4Ljg1ODY2NjY2IDY1LjkyaDEzMS44NTA2NjY2N2MzMy4zMTIgMC4xMTczMzMzMyA5OC4yMTg2NjY2Ny0zOS42NjkzMzMzMyA5OC44OC02NS45Mi0xLjA5ODY2NjY3LTExLjU0MTMzMzMzIDAtMTY0Ljc4OTMzMzMzIDAtMTY0Ljc4OTMzMzMzIDM0LjAxNi0yMi4wMzczMzMzMyA0MC40MjY2NjY2Ny0zMi4wMTA2NjY2NyA2MS4wOTg2NjY2Ny02Ni45NTQ2NjY2NyAyMy42NDgtMzkuOTU3MzMzMzMgMzYuMTM4NjY2NjctODUuNzI4IDM2LjEzODY2NjY2LTEzMi4zNjI2NjY2NyAwLTY5LjczODY2NjY3LTI3LjI3NDY2NjY3LTEzNS4yODUzMzMzMy03Ni43MzYtMTg0LjU5NzMzMzMzLTQ5LjUzNi00OS4zMjI2NjY2Ny0xMTUuMzE3MzMzMzMtNzcuNDkzMzMzMzMtMTg1LjMwMTMzMzMzLTc3LjQ5MzMzMzMzeiBtOTYuNTQ0IDYwOC4yODhjLTAuMDIxMzMzMzMgNy45MTQ2NjY2Ny02LjUxNzMzMzMzIDE0LjM1NzMzMzMzLTE0LjQ2NCAxNC4zNTczMzMzM0g0MjkuNTY4Yy03Ljk2OCAwLTE0LjQxMDY2NjY3LTYuNDUzMzMzMzMtMTQuNDEwNjY2NjctMTQuMzU3MzMzMzN2LTU0LjAyNjY2NjY3aDE5My40MjkzMzMzNHY1NC4wMjY2NjY2N3ogbTc2LjE5Mi0yNDMuOTA0Yy0xNy41ODkzMzMzMyAyOS42NjQtNDIuNjk4NjY2NjcgNTQuNDc0NjY2NjctNzIuNTg2NjY2NjcgNzEuNzIyNjY2NjZsLTEwLjY1NiA2LjEyMjY2NjY3djQ5LjQyOTMzMzMzbC0xODguMzczMzMzMzMgMi42ODggOS4wMTMzMzMzMy01Mi4yNDUzMzMzMy0xMC42MzQ2NjY2Ni02LjE1NDY2NjY3Yy0yOS44MzQ2NjY2Ny0xNy4yMzczMzMzMy01NC44OTA2NjY2Ny00Mi4wNDgtNzIuMzg0LTcxLjY5MDY2NjY2LTE4LjAwNTMzMzMzLTMwLjUyOC0yNy41NDEzMzMzMy02NS40NTA2NjY2Ny0yNy41NDEzMzMzNC0xMDEuMDU2IDAtNTMuMzIyNjY2NjcgMjAuODQyNjY2NjctMTAzLjQ0NTMzMzMzIDU4LjY4OC0xNDEuMTQxMzMzMzQgMzcuODY2NjY2NjctMzcuNzA2NjY2NjcgODguMTYtNTguNDY0IDE0MS42ODUzMzMzNC01OC40NjRzMTAzLjg2MTMzMzMzIDIwLjc3ODY2NjY3IDE0MS43MjggNTguNDY0YzM3Ljc4MTMzMzMzIDM3LjcwNjY2NjY3IDU4LjY0NTMzMzMzIDg3LjgwOCA1OC42NDUzMzMzMyAxNDEuMTQxMzMzMzQgMC4wMjEzMzMzMyAzNS42NTg2NjY2Ny05LjUxNDY2NjY3IDcwLjYyNC0yNy41ODQgMTAxLjE4NHpNOTIyLjczMDY2NjY3IDM0MC42OTMzMzMzM2MtNi4xMDEzMzMzMy0xMC4xOTczMzMzMy0xOS4zMTczMzMzMy0xMy41MTQ2NjY2Ny0yOS41Nzg2NjY2Ny03LjQ2NjY2NjY2bC03NS40OTg2NjY2NyA0NC43NjhjLTEwLjI0IDYuMDkwNjY2NjctMTMuNjMyIDE5LjI1MzMzMzMzLTcuNTA5MzMzMzMgMjkuNDI5MzMzMzMgNi4wNTg2NjY2NyAxMC4xOTczMzMzMyAxOS4zMTczMzMzMyAxMy41NTczMzMzMyAyOS41MzYgNy40OTg2NjY2N2w3NS41NDEzMzMzMy00NC43Nzg2NjY2N2MxMC4yNC02LjA1ODY2NjY3IDEzLjU2OC0xOS4yNDI2NjY2NyA3LjUwOTMzMzM0LTI5LjQ1MDY2NjY3eiIgcC1pZD0iMzc4MjkiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=";e.Blocks.mesh_selector={init(){this.appendDummyInput().appendField(new e.FieldImage(en,18,18)).appendField(new e.FieldTextInput("<mesh>"),"NAME"),this.setStyle("nodes_style"),this.setInputsInline(!1),this.setOutput(!0,"Mesh"),this.setTooltip("Gets a node (Mesh, Camera, Light) using a given name"),this.setHelpUrl("")}},e.Blocks.camera_selector={init(){this.appendDummyInput().appendField(new e.FieldImage(tn,18,18)).appendField(new e.FieldTextInput("<camera>"),"NAME"),this.setStyle("nodes_style"),this.setInputsInline(!1),this.setOutput(!0,"Camera"),this.setTooltip("Gets a node (Mesh, Camera, Light) using a given name"),this.setHelpUrl("")}},e.Blocks.light_selector={init(){this.appendDummyInput().appendField(new e.FieldImage(nn,18,18)).appendField(new e.FieldTextInput("<light>"),"NAME"),this.setStyle("nodes_style"),this.setInputsInline(!1),this.setOutput(!0,"Light"),this.setTooltip("Gets a node (Mesh, Camera, Light) using a given name"),this.setHelpUrl("")}},e.Blocks.create_transform_node={init(){this.appendDummyInput().appendField("create transform node");const i=this.appendValueInput("NAME").appendField("name").setCheck("String");this.setStyle("nodes_style"),this.setInputsInline(!0),this.setOutput(!0),this.setTooltip("A TransformNode is an object that is not rendered but can be used as a center of transformation. This can decrease memory usage and increase rendering speed compared to using an empty mesh as a parent and is less complicated than using a pivot matrix."),this.setHelpUrl(""),o(i,"TEXT","")}},e.Blocks.node_get_all={init(){this.appendDummyInput().appendField("get all").appendField(new e.FieldDropdown([["meshes","meshes"],["cameras","cameras"],["lights","lights"]]),"TYPE"),this.setStyle("nodes_style"),this.setInputsInline(!1),this.setOutput(!0,"Array"),this.setTooltip("All of the meshes/cameras/lights added to this scene"),this.setHelpUrl("")}},e.Blocks.node_get_children={init:function(){const i=this.appendValueInput("NODE").appendField("get").setCheck(["Mesh","Light","Camera"]);this.appendDummyInput().appendField(new e.FieldDropdown([["childMeshes","childMeshes"],["directChildren","directChildren"],["allChildren","allChildren"]]),"TYPE"),this.setStyle("nodes_style"),this.setInputsInline(!0),this.setOutput(!0,"Array"),this.setTooltip("Get children of this node"),this.setHelpUrl(""),o(i,"MESH","")}},e.Blocks.node_parent={init(){const i=this,t=D(),n=this.appendValueInput("NODE").appendField(new e.FieldDropdown([["set","set"],["get","get"]],a=>{const s=a==="set";t.updateShape_.call(i,s),t.updateValueInput_.call(i,s),s&&o(i.getInput("VALUE"),"NULL","")}),"METHOD").setCheck(null);this.appendDummyInput().appendField("parent"),this.setStyle("nodes_style"),this.setInputsInline(!0),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip("Gets or sets the parent of the node (without keeping the current position in the scene)"),this.setHelpUrl(""),this.mixin(t),t.updateValueInput_.call(i,!0),this.getFieldValue("METHOD")==="set"&&o(i.getInput("VALUE"),"NULL",""),o(n,"MESH","")}},e.Blocks.node_is_child_of={init:function(){const i=this.appendValueInput("CHILD_NODE").appendField("is").setCheck(["Mesh","Light","Camera"]),t=this.appendValueInput("PARENT_NODE").appendField("child of").setCheck(["Mesh","Light","Camera"]);this.setStyle("nodes_style"),this.setInputsInline(!0),this.setOutput(!0,"Boolean"),this.setTooltip("Is this node a descendant of the given node? The function will iterate up the hierarchy until the ancestor was found or no more parents defined"),this.setHelpUrl(""),o(i,"MESH",""),o(t,"MESH","")}},e.Blocks.node_set_enabled={init:function(){const i=this.appendValueInput("NODE").appendField("set").setCheck(["Mesh","Light","Camera"]),t=this.appendValueInput("ENABLED").appendField("enabled").setCheck("Boolean").setAlign(e.ALIGN_RIGHT);this.setStyle("nodes_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip("Set the enabled state of this node"),this.setHelpUrl(""),o(i,"MESH",""),o(t,"BOOL","TRUE")}},j.default.Blocks.emptyBlock={init:function(){this.contextMenu=!1}},j.default.Blocks.invisibleBlock={init:function(){this.translate(-9999,-9999)}};const m={};m.meshType=new h([["Box","Box"],["TiledBox","TiledBox"],["Sphere","Sphere"],["Cylinder","Cylinder"],["Capsule","Capsule"],["Plane","Plane"],["TiledPlane","TiledPlane"],["Disc","Disc"],["Torus","Torus"],["TorusKnot","TorusKnot"],["Ground","Ground"],["GroundFromHeightMap","GroundFromHeightMap"],["TiledGround","TiledGround"],["Lines","Lines"]]),m.Box=new h([["size","size","NUM","1","MESH_BOX_SIZE_TOOLTIP"],["height","height","NUM","1","MESH_BOX_HEIGHT_TOOLTIP"],["width","width","NUM","1","MESH_BOX_WIDTH_TOOLTIP"],["depth","depth","NUM","1","MESH_BOX_DEPTH_TOOLTIP"]]),m.TiledBox=new h([["size","size","NUM","1","MESH_BOX_SIZE_TOOLTIP"],["height","height","NUM","1","MESH_BOX_HEIGHT_TOOLTIP"],["width","width","NUM","1","MESH_BOX_WIDTH_TOOLTIP"],["depth","depth","NUM","1","MESH_BOX_DEPTH_TOOLTIP"],["tileSize","tileSize","NUM","1","MESH_TILED_BOX_TILE_SIZE_TOOLTIP"],["tileHeight","tileHeight","NUM","1","MESH_TILED_BOX_TILE_HEIGHT_TOOLTIP"],["tileWidth","tileWidth","NUM","1","MESH_TILED_BOX_TILE_WIDTH_TOOLTIP"]]),m.Sphere=new h([["segments","segments","NUM","32","MESH_SPHERE_SEGMENTS_TOOLTIP"],["diameter","diameter","NUM","1","(number) diameter of the sphere"],["diameterX","diameterX","NUM","1","(number) diameter on X axis, overwrites diameter option"],["diameterY","diameterY","NUM","1","(number) diameter on Y axis, overwrites diameter option"],["diameterZ","diameterZ","NUM","1","(number) diameter on Z axis, overwrites diameter option"],["arc","arc","NUM","1","(number) ratio of the circumference (latitude) between 0 and 1"],["slice","slice","NUM","1","(number) ratio of the height (longitude) between 0 and 1"],["sideOrientation","sideOrientation","NUM","0","(number) side orientation"]]),m.Cylinder=new h([["height","height","NUM","2","(number) height of the cylinder"],["diameterTop","diameterTop","NUM","1","(number) diameter of the top cap, can be zero to create a cone, overwrites the diameter option"],["diameterBottom","diameterBottom","NUM","1","(number) diameter of the bottom cap, can't be zero, overwrites the diameter option"],["diameter","diameter","NUM","1","(number) diameter of both caps"],["tessellation","tessellation","NUM","24","(number) number of radial sides"],["subdivisions","subdivisions","NUM","1","(number) number of rings"],["faceColors","faceColors","ARRAY","","(Color4[]) array of 3 Color4, 0 : bottom cap, 1 : cylinder tube, 2 : top cap"],["faceUV","faceUV","ARRAY","","(Vector4[]) array of 3 Vector4, 0 : bottom cap, 1 : cylinder tube, 2 : top cap"],["arc","arc","NUM","1","(number) ratio of the circumference between 0 and 1"],["hasRings","hasRings","BOOL","FALSE","(boolean) makes the subdivisions independent from each other, so they become different faces"],["enclose","enclose","BOOL","FALSE","(boolean) adds two extra faces per subdivision to a sliced cylinder to close it around its height axis"],["updatable","updatable","BOOL","FALSE","(boolean) true if the mesh is updatable"],["sideOrientation","sideOrientation","NUM","","(number) side orientation"]]),m.Capsule=new h([["orientation","orientation","VECTOR3",[0,1,0],"(Vector3) Direction of the capsule upon inception."],["subdivisions","subdivisions","NUM","2","(number) Number of sub segments on the tube section of the capsule running parallel to orientation."],["tessellation","tessellation","NUM","16","(number) Number of cylindrical segments on the capsule."],["height","height","NUM","1","(number) Height or length of the capsule."],["radius","radius","NUM","0.25","(number) Radius of the capsule."],["capSubdivisions","capSubdivisions","NUM","6","(number) Number of sub segments on the cap sections of the capsule running parallel to orientation."],["radiusTop","radiusTop","NUM","","(number) Overwrite for the top radius."],["radiusBottom","radiusBottom","NUM","","(number) Overwrite for the bottom radius."],["topCapSubdivisions","topCapSubdivisions","NUM","","(number) Overwrite for the top capSubdivisions."],["bottomCapSubdivisions","bottomCapSubdivisions","NUM","","(number) Overwrite for the bottom capSubdivisions."]]),m.Plane=new h([["size","size","NUM","1","(number) side size of the plane"],["width","width","NUM","1","(number) size of the width"],["height","height","NUM","1","(number) size of the height"],["sideOrientation","sideOrientation","NUM","","(number) side orientation"],["sourcePlane","sourcePlane","NULL","","(Plane) source plane (math) the mesh will be transformed to"]]),m.TiledPlane=new h([["size","size","NUM","1","(number) side size of the plane"],["width","width","NUM","1","(number) size of the width"],["height","height","NUM","1","(number) size of the height"],["tileSize","tileSize","NUM","1","(number) size of each tile side"],["tileHeight","tileHeight","NUM","1","(number) tile height size, overwrites tileSize option"],["tileWidth","tileWidth","NUM","1","(number) tile width size, overwrites tileSize option"],["sideOrientation","sideOrientation","NUM","","(number) side orientation"]]),m.Disc=new h([["radius","radius","NUM","0.5","(number) the radius of the disc or polygon"],["tessellation","tessellation","NUM","64","(number) the number of disc/polygon sides"],["arc","arc","NUM","1","(number) ratio of the circumference between 0 and 1"],["updatable","updatable","BOOL","FALSE","	(boolean) true if the mesh is updatable"],["sideOrientation","sideOrientation","NUM","","(number) side orientation"]]),m.Torus=new h([["size","size","NUM","1","(number) side size of the plane"],["width","width","NUM","1","(number) size of the width"],["height","height","NUM","1","(number) size of the height"],["updatable","updatable","BOOL","FALSE","	(boolean) true if the mesh is updatable"],["sideOrientation","sideOrientation","NUM","","(number) side orientation"],["sourcePlane","sourcePlane","NULL","","(Plane) source plane (math) the mesh will be transformed to"]]),m.TorusKnot=new h([["size","size","NUM","1","(number) side size of the plane"],["width","width","NUM","1","(number) size of the width"],["height","height","NUM","1","(number) size of the height"],["updatable","updatable","BOOL","FALSE","	(boolean) true if the mesh is updatable"],["sideOrientation","sideOrientation","NUM","","(number) side orientation"],["sourcePlane","sourcePlane","NULL","","(Plane) source plane (math) the mesh will be transformed to"]]),m.Ground=new h([["width","width","NUM","1","(number) size of the width"],["height","height","NUM","1","(number) size of the height"],["updatable","updatable","BOOL","FALSE","	(boolean) true if the mesh is updatable"],["subdivisions","subdivisions","NUM","1","(number) number of square subdivisions"]]),m.GroundFromHeightMap=new h([["width","width","NUM","1","(number) size of the width"],["height","height","NUM","1","(number) size of the height"],["updatable","updatable","BOOL","FALSE","	(boolean) true if the mesh is updatable"],["subdivisions","subdivisions","NUM","1","(number) number of square subdivisions"]]),m.TiledGround=new h([["width","width","NUM","1","(number) size of the width"],["height","height","NUM","1","(number) size of the height"],["updatable","updatable","BOOL","FALSE","	(boolean) true if the mesh is updatable"],["subdivisions","subdivisions","NUM","1","(number) number of square subdivisions"]]),m.Lines=new h([["points","points","ARRAY","","(Vector3[]) array of Vector3, the path of the line REQUIRED"],["updatable","updatable","BOOL","FALSE","(boolean) true if the mesh is updatable"],["instance","instance","NULL","","(LineMesh) an instance of a line mesh to be updated"],["colors","colors","COLOR4",[0,0,0,1],"(Color4[]) array of Color4, each point color"],["useVertexAlpha","useVertexAlpha","BOOL","TRUE","(boolean) false if the alpha blending is not required (faster)"]]),m.meshProps=new h([["billboardMode","billboardMode","NUM","",`Gets or sets the billboard mode. Default is 0. 
0	BILLBOARDMODE_NONE	
1	BILLBOARDMODE_X	
2	BILLBOARDMODE_Y	
4	BILLBOARDMODE_Z	
7	BILLBOARDMODE_ALL`],["checkCollisions","checkCollisions","BOOL","TRUE","Gets or sets a boolean indicating that this mesh can be used in the collision engine"],["ellipsoid","ellipsoid","VECTOR3",[.5,1,.5],"Gets or sets the ellipsoid used to impersonate this mesh when using collision engine "],["ellipsoidOffset","ellipsoidOffset","VECTOR3",[0,0,0],"Gets or sets the ellipsoid offset used to impersonate this mesh when using collision engine"],["isPickable","isPickable","BOOL","TRUE","Gets or sets a boolean indicating if the mesh can be picked (by scene.pick for instance or through actions). Default is true"],["isVisible","isVisible","BOOL","TRUE","Gets or sets a boolean indicating if the mesh is visible (renderable). Default is true"],["material","material","NONE","","Gets or sets current material"],["outlineColor","outlineColor","COLOR3",[0,0,0],"Defines color to use when rendering outline"],["outlineWidth","outlineWidth","NUM","1","Define width to use when rendering outline"],["overlayAlpha","overlayAlpha","NUM","0.5","Defines alpha to use when rendering overlay"],["overlayColor","overlayColor","COLOR3",[0,0,0],"Defines color to use when rendering overlay"],["receiveShadows","receiveShadows","BOOL","TRUE","Gets or sets a boolean indicating that this mesh can receive realtime shadows"],["renderOutline","renderOutline","BOOL","TRUE","Gets or sets a boolean indicating if the outline must be rendered as well"],["renderOverlay","renderOverlay","BOOL","TRUE","Gets or sets a boolean indicating if the overlay must be rendered as well"],["showBoundingBox","showBoundingBox","BOOL","FALSE","Gets or sets a boolean indicating if the bounding box must be rendered as well (false by default)"],["visibility","visibility","NUM","1","Gets or sets mesh visibility between 0 and 1 (default is 1)"]]),m.transformProps=new h([["position","position","VECTOR3",[0,0,0],"Gets or sets the node position (default is (0.0, 0.0, 0.0))"],["rotation","rotation","VECTOR3",[0,0,0],"Gets or sets the rotation property : a Vector3 defining the rotation value in radians around each local axis X, Y, Z (default is (0.0, 0.0, 0.0)). If rotation quaternion is set, this Vector3 will be ignored and copy from the quaternion"],["scaling","scaling","VECTOR3",[1,1,1],"Gets or sets a Vector3 depicting the mesh scaling along each local axis X, Y, Z. Default is (1.0, 1.0, 1.0)"]]),m.draggedOpts=new h([["dragAxis","dragAxis","VECTOR3",[0,1,0],"The drag axis or normal of the plane that will be dragged across. If no options are specified the drag plane will always face the ray's origin (eg. camera)"],["dragPlaneNormal","dragPlaneNormal","VECTOR3",[0,1,0],"The drag axis or normal of the plane that will be dragged across. If no options are specified the drag plane will always face the ray's origin (eg. camera)"],["enabled","enabled","BOOL","TRUE","If the drag behavior will react to drag events (Default: true)"],["moveAttached","moveAttached","BOOL","TRUE","If the attached mesh should be moved when dragged"],["updateDragPlane","updateDragPlane","BOOL","TRUE","If the drag plane orientation should be updated during the dragging (Default: true)"],["useObjectOrientationForDragging","useObjectOrientationForDragging","BOOL","TRUE","If set, the drag plane/axis will be rotated based on the attached mesh's world rotation (Default: true)"]]),m.decalOption=new h([["position","position","VECTOR3",[0,0,0],"position of the decal (World coordinates)"],["normal","normal","VECTOR3",[0,1,0],"the normal of the mesh where the decal is applied onto (World coordinates)"],["size","size","VECTOR3",[1,1,1],"the x, y, z sizes of the decal"],["angle","angle","ANGLE","0","the angle to rotate the decal"]]),m.highlightLayerProp=new h([["disableBoundingBoxesFromEffectLayer","disableBoundingBoxesFromEffectLayer","BOOL","TRUE","Specifies if the bounding boxes should be rendered normally or if they should undergo the effect of the layer"],["innerGlow","innerGlow","BOOL","TRUE","Specifies whether or not the inner glow is ACTIVE in the layer."],["isEnabled","isEnabled","BOOL","TRUE","Specifies whether the highlight layer is enabled or not."],["outerGlow","outerGlow","BOOL","TRUE","Specifies whether or not the outer glow is ACTIVE in the layer."],["blurHorizontalSize","blurHorizontalSize","NUM","1","Specifies the horizontal size of the blur."],["blurVerticalSize","blurVerticalSize","NUM","1","Specifies the vertical size of the blur."]]);function an(){const i=m.meshType.getList();for(let t of i)e.Blocks[`mesh_create_${t.toLowerCase()}_option`]={init(){const n=this,a=this.appendValueInput("VALUE").appendField("set").appendField(new e.FieldDropdown(()=>m[t].generatMenu(),s=>m[t].updateShape(n,a,s)),"KEY").appendField("to");this.setStyle("meshes_style"),this.setInputsInline(!1),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setHelpUrl("https://doc.babylonjs.com/divingDeeper/mesh/creation/set/box"),this.mixin(R("object_create")),o(a,"NUM","1")}}}an(),e.Blocks.mesh_create_set_shapes={init:function(){this.appendDummyInput().appendField("create").appendField(new e.FieldDropdown(()=>m.meshType.generatMenu()),"TYPE");const i=this.appendValueInput("NAME").setCheck("String").appendField("name"),t=this.appendValueInput("OPTIONS").setCheck("Object").appendField("options");this.setStyle("meshes_style"),this.setInputsInline(!0),this.setOutput(!0,"Mesh"),this.setTooltip(""),this.setHelpUrl(""),this.mixin(qi),o(i,"TEXT",""),o(t,"OBJECT","")}},e.Blocks.set_get_mesh_prop={init(){const i=this;let t;const n=D();this.appendDummyInput().appendField(new e.FieldDropdown([["set","set"],["get","get"]],s=>{t=s==="set",n.updateShape_.call(i,t),n.updateValueInput_.call(i,t),i.updateKeyField(t)}),"METHOD");const a=this.appendValueInput("MESH").appendField("mesh").setCheck("Mesh");this.appendDummyInput("KEY_INPUT"),this.setStyle("meshes_style"),this.setInputsInline(!0),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setHelpUrl(""),n.updateValueInput_.call(i,!0),this.mixin(n),this.updateKeyField(!0),o(i.getInput("VALUE"),"NUM",""),o(a,"MESH","")},updateKeyField(i){const t=this,n=t.getInput("KEY_INPUT");n.removeField("KEY",!0),n.appendField(new e.FieldDropdown(()=>m.meshProps.generatMenu(),a=>{i&&m.meshProps.updateShape(t,t.getInput("VALUE"),a),!i&&m.meshProps.updateTooltip(t,a)}),"KEY")}},e.Blocks.set_get_mesh_transform={init(){const i=this,t=D();let n;const a=this.appendValueInput("MESH").appendField(new e.FieldDropdown([["set","set"],["get","get"]],s=>{n=s==="set",t.updateShape_.call(i,n),t.updateValueInput_.call(i,n),n&&i.getFieldValue("XYZ")==="xyz"&&o(i.getInput("VALUE"),"VECTOR3",[0,0,0]),n&&i.getFieldValue("XYZ")!=="xyz"&&o(i.getInput("VALUE"),"NUM","")}),"METHOD").appendField("mesh").setCheck("Mesh");this.appendDummyInput().appendField(new e.FieldDropdown(()=>m.transformProps.generatMenu()),"TRANSFORM"),this.appendDummyInput("XYZ_INPUT").appendField(new e.FieldDropdown([["xyz","xyz"],["x","x"],["y","y"],["z","z"]],s=>{const r=i.getInput("VALUE");s==="xyz"&&o(r,"VECTOR3",[0,0,0])||o(r,"NUM","")}),"XYZ"),this.setStyle("meshes_style"),this.setInputsInline(!0),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip("Sets or gets the mesh transform."),this.setHelpUrl(""),t.updateValueInput_.call(i,!0),this.mixin(t),o(i.getInput("VALUE"),"VECTOR3",[0,0,0]),o(a,"MESH","")}},e.Blocks.translate_mesh={init:function(){const i=this.appendValueInput("MESH").appendField("translate mesh").setCheck("Mesh"),t=this.appendValueInput("AXIS").appendField("axis").setCheck("Vector3").setAlign(e.ALIGN_RIGHT),n=this.appendValueInput("DISTANCE").appendField("distance").setCheck("Number").setAlign(e.ALIGN_RIGHT);this.appendDummyInput().appendField("local").appendField(new e.FieldCheckbox("TRUE"),"LOCAL").setAlign(e.ALIGN_RIGHT),this.setStyle("meshes_style"),this.setInputsInline(!0),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip("Translates the mesh along the axis vector for the passed distance in the given space."),this.setHelpUrl(""),o(i,"MESH",""),o(t,"VECTOR3",[0,1,0]),o(n,"NUM","")}},e.Blocks.rotate_mesh={init:function(){const i=this.appendValueInput("MESH").appendField("rotate mesh").setCheck("Mesh"),t=this.appendValueInput("AXIS").appendField("axis").setCheck("Vector3").setAlign(e.ALIGN_RIGHT),n=this.appendValueInput("DEGREE").appendField("degree").setCheck("Number").setAlign(e.ALIGN_RIGHT);this.appendDummyInput().appendField("local").appendField(new e.FieldCheckbox("TRUE"),"LOCAL").setAlign(e.ALIGN_RIGHT),this.setStyle("meshes_style"),this.setInputsInline(!0),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip("Rotates the mesh around the axis vector for the passed angle (amount) expressed in radians, in the given space."),this.setHelpUrl(""),o(i,"MESH",""),o(t,"VECTOR3",[0,1,0]),o(n,"ANGLE","")}},e.Blocks.rotate_mesh_pov={init:function(){const i=this.appendValueInput("MESH").appendField("rotate mesh POV").setCheck("Mesh"),t=this.appendValueInput("PITCH").appendField("pitch").setCheck("Number").setAlign(e.ALIGN_RIGHT),n=this.appendValueInput("YAW").appendField("yaw").setCheck("Number").setAlign(e.ALIGN_RIGHT),a=this.appendValueInput("ROLL").appendField("roll").setCheck("Number").setAlign(e.ALIGN_RIGHT);this.setStyle("meshes_style"),this.setInputsInline(!0),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip("Perform relative rotation change from the point of view of behind the front of the mesh."),this.setHelpUrl(""),o(i,"MESH",""),o(t,"ANGLE",""),o(n,"ANGLE",""),o(a,"ANGLE","")}},e.Blocks.set_mesh_direction={init:function(){const i=this.appendValueInput("MESH").appendField("set mesh").setCheck("Mesh"),t=this.appendValueInput("DIRECTION").appendField("direction to").setCheck("Vector3");this.setStyle("meshes_style"),this.setInputsInline(!0),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip("Sets this transform node rotation to the given local axis."),this.setHelpUrl(""),o(i,"MESH",""),o(t,"VECTOR3",[0,1,0])}},e.Blocks.mesh_look_at={init:function(){const i=this.appendValueInput("MESH").appendField("mesh").setCheck("Mesh"),t=this.appendValueInput("POINT").appendField("look at").setCheck("Vector3");this.setStyle("meshes_style"),this.setInputsInline(!0),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip("Orients a mesh towards a target point. "),this.setHelpUrl(""),o(i,"MESH",""),o(t,"VECTOR3",[0,0,0])}},e.Blocks.remove_mesh={init:function(){const i=this.appendValueInput("MESH").appendField("remove mesh").setCheck("Mesh");this.appendDummyInput().appendField("includeChildren").appendField(new e.FieldCheckbox("FALSE"),"INCLUDE_CHILDREN"),this.setStyle("meshes_style"),this.setInputsInline(!0),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip("Returns a new Mesh object generated from the current mesh properties."),this.setHelpUrl(""),o(i,"MESH","")}},e.Blocks.clone_mesh={init:function(){const i=this.appendValueInput("MESH").appendField("clone mesh").setCheck("Mesh"),t=this.appendValueInput("NAME").setCheck("String").appendField("name");this.setStyle("meshes_style"),this.setInputsInline(!0),this.setOutput(!0,"Mesh"),this.setTooltip("Returns a new Mesh object generated from the current mesh properties."),this.setHelpUrl(""),o(i,"MESH",""),o(t,"TEXT","")}},e.Blocks.mesh_set_parent={init:function(){const i=this.appendValueInput("CHILD_MESH").appendField("parent mesh").setCheck("Mesh"),t=this.appendValueInput("PARENT_MESH").appendField("to").setCheck("Mesh");this.setStyle("meshes_style"),this.setInputsInline(!0),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip("Defines the passed node as the parent of the current node."),this.setHelpUrl(""),o(i,"MESH",""),o(t,"MESH","")}},e.Blocks.mesh_create_instance={init:function(){const i=this.appendValueInput("MESH").appendField("create instance from").setCheck("Mesh"),t=this.appendValueInput("NAME").setCheck("String").appendField("name");this.setStyle("meshes_style"),this.setInputsInline(!0),this.setOutput(!0,"Mesh"),this.setTooltip("Creates a new InstancedMesh object from the mesh model."),this.setHelpUrl(""),o(i,"MESH",""),o(t,"TEXT","")}},e.Blocks.mesh_when_dragged_options={init(){const i=this;this.appendValueInput("VALUE").appendField("set").appendField(new e.FieldDropdown(()=>m.draggedOpts.generatMenu(),t=>m.draggedOpts.updateShape(i,i.getInput("VALUE"),t)),"KEY").appendField("to"),this.setStyle("meshes_style"),this.setInputsInline(!1),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setHelpUrl("https://doc.babylonjs.com/typedoc/classes/babylon.pointerdragbehavior"),this.mixin(R("object_create"))}},e.Blocks.drag_mesh={init(){const i=this,t=this.appendValueInput("MESH").appendField("drag").setCheck("Mesh").setAlign(e.ALIGN_RIGHT),n=this.appendValueInput("OPTIONS").appendField("options").setCheck("Object").setAlign(e.ALIGN_RIGHT);this.setStyle("meshes_style"),this.setInputsInline(!0),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setHelpUrl(""),this.setMutator(new e.Mutator(["invisibleBlock"])),this.mixin(O("mesh_when_dragged_options","option")),this.mixin(Qe([["enableCb","enable callbacks",!1]],"meshes_style",()=>i.updateShape_())),o(t,"MESH",""),o(n,"OBJECT","")},updateShape_(){this.getInput("DRAG_START_DO")&&this.removeInput("DRAG_START_DO"),this.getInput("DRAG_DO")&&this.removeInput("DRAG_DO"),this.getInput("DRAG_END_DO")&&this.removeInput("DRAG_END_DO"),this._boolOptValues.enableCb&&(this.appendStatementInput("DRAG_START_DO").appendField("drag start").setAlign(e.ALIGN_RIGHT),this.appendStatementInput("DRAG_DO").appendField("drag").setAlign(e.ALIGN_RIGHT),this.appendStatementInput("DRAG_END_DO").appendField("drag end").setAlign(e.ALIGN_RIGHT))}},e.Blocks.check_point_behind_mesh={init:function(){const i=this.appendValueInput("POINT").appendField("check point").setCheck("Vector3"),t=this.appendValueInput("MESH").setCheck("Mesh").appendField("behind");this.setStyle("meshes_style"),this.setInputsInline(!0),this.setOutput(!0,"Boolean"),this.setTooltip("Checks if a pointer is behind of a mesh."),this.setHelpUrl(""),o(i,"VECTOR3",[0,0,0]),o(t,"MESH","")}},e.Blocks.check_intersects_mesh={init(){const i=this.appendValueInput("MESH").appendField("check").setCheck("Mesh"),t=this.appendValueInput("TARGET").appendField("intersects mesh").setCheck("Mesh");this.appendDummyInput().appendField("precise").appendField(new e.FieldCheckbox("FALSE"),"PRECISE"),this.appendDummyInput().appendField("includeChildren").appendField(new e.FieldCheckbox("FALSE"),"INCLUDE_CHILDREN"),this.setStyle("meshes_style"),this.setInputsInline(!0),this.setOutput(!0,"Boolean"),this.setTooltip("True if the mesh intersects another mesh or a SolidParticle object"),this.setHelpUrl(""),o(i,"MESH",""),o(t,"MESH","")}},e.Blocks.check_intersects_point={init(){const i=this.appendValueInput("MESH").appendField("check").setCheck("Mesh"),t=this.appendValueInput("POINT").appendField("intersects point").setCheck("Vector3");this.setStyle("meshes_style"),this.setInputsInline(!0),this.setOutput(!0,"Boolean"),this.setTooltip("True if the mesh intersects another mesh or a SolidParticle object"),this.setHelpUrl(""),o(i,"MESH",""),o(t,"VECTOR3",[0,0,0])}},e.Blocks.mesh_create_decal={init(){this.appendDummyInput().appendField("create decal");const i=this.appendValueInput("NAME").appendField("name").setCheck("String").setAlign(e.ALIGN_RIGHT),t=this.appendValueInput("MESH").appendField("sourceMesh").setCheck("Mesh").setAlign(e.ALIGN_RIGHT),n=this.appendValueInput("TEXTURE").appendField("textureUrl").setCheck("String").setAlign(e.ALIGN_RIGHT),a=this.appendValueInput("OPTIONS").appendField("options").setCheck("Object").setAlign(e.ALIGN_RIGHT);this.setStyle("meshes_style"),this.setInputsInline(!0),this.setOutput(!0,"Mesh"),this.setTooltip("Creates a decal mesh. A decal is a mesh usually applied as a model onto the surface of another mesh"),this.setHelpUrl(""),this.mixin(O("mesh_create_decal_option","option")),o(i,"TEXT",""),o(t,"MESH",""),o(n,"TEXT",""),o(a,"OBJECT","")}},e.Blocks.mesh_create_decal_option={init(){const i=this;this.appendDummyInput().appendField("set").appendField(new e.FieldDropdown(()=>m.decalOption.generatMenu(),n=>m.decalOption.updateShape(i,t,n)),"KEY");const t=this.appendValueInput("VALUE").appendField("to");this.setStyle("meshes_style"),this.setInputsInline(!0),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setHelpUrl(""),this.mixin(R("mesh_create_decal")),o(t,"VECTOR3",[0,0,0])}},e.Blocks.mesh_add_lod_level={init(){const i=this.appendValueInput("LOD_MESH").appendField("add LOD level").setCheck(["Mesh",null]),t=this.appendValueInput("DISTANCE").appendField("distance").setCheck("Number"),n=this.appendValueInput("MESH").appendField("to").setCheck("Mesh");this.setStyle("meshes_style"),this.setInputsInline(!0),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip("Add a mesh as LOD level triggered at the given distance."),this.setHelpUrl(""),o(n,"MESH",""),o(t,"NUM","10"),o(i,"MESH","")}};const b={};b.cameraType=new h([["UniversalCamera","UniversalCamera"],["ArcRotateCamera","ArcRotateCamera"],["FollowCamera","FollowCamera"],["AnaglyphUniversalCamera","AnaglyphUniversalCamera"],["AnaglyphArcRotateCamera","AnaglyphArcRotateCamera"],["DeviceOrientationCamera","DeviceOrientationCamera"]]);const sn=["applyGravity","applyGravity","BOOL","TRUE","camera_prop_applyGravity_tooltip"],rn=["angularSensibility","angularSensibility","NUM","2000","camera_prop_angularSensibility_tooltip"],on=["alpha","alpha","NUM","1","camera_prop_alpha_tooltip"],pn=["beta","beta","NUM","1","camera_prop_beta_tooltip"],ke=["cameraDirection","cameraDirection","VECTOR3",[0,0,-1],"camera_prop_cameraDirection_tooltip"],Xe=["cameraRotation","cameraRotation","VECTOR2",[0,0],"camera_prop_cameraRotation_tooltip"],Lt=["checkCollisions","checkCollisions","BOOL","TRUE","camera_prop_checkCollisions_tooltip"],dn=["cameraAcceleration","cameraAcceleration","NUM","0.005","camera_prop_cameraAcceleration_tooltip"],cn=["collisionRadius","collisionRadius","VECTOR3",[0,0,-1],"camera_prop_collisionRadius_tooltip"],ln=["ellipsoid","ellipsoid","VECTOR3",[1,1,1],"camera_prop_ellipsoid_tooltip"],un=["ellipsoidOffset","ellipsoidOffset","VECTOR3",[0,0,0],"camera_prop_ellipsoidOffset_tooltip"],We=["fov","fov","NUM","0.8","camera_prop_fov_tooltip"],Ke=["globalPosition","globalPosition","VECTOR3",[0,0,0],"camera_prop_globalPosition_tooltip"],hn=["heightOffset","heightOffset","NUM","8","camera_prop_heightOffset_tooltip"],gn=["ignoreParentScaling","ignoreParentScaling","BOOL","TRUE","camera_prop_ignoreParentScaling_tooltip"],Ze=["inertia","inertia","NUM","0.9","camera_prop_inertia_tooltip"],wt=["inverseRotationSpeed","inverseRotationSpeed","NUM","1","camera_prop_inverseRotationSpeed_tooltip"],xt=["invertRotation","invertRotation","BOOL","TRUE","camera_prop_invertRotation_tooltip"],mn=["keysDown","keysDown","ARRAY","","camera_prop_keysDown_tooltip"],_n=["keysDownward","keysDownward","ARRAY","","_tooltip"],Tn=["keysLeft","keysLeft","ARRAY","","camera_prop_keysLeft_tooltip"],En=["keysRight","keysRight","ARRAY","","camera_prop_keysRight_tooltip"],Nn=["keysRotateLeft","keysRotateLeft","ARRAY","","camera_prop_keysRotateLeft_tooltip"],Mn=["keysRotateRight","keysRotateRight","ARRAY","","camera_prop_keysRotateRight_tooltip"],In=["keysUp","keysUp","ARRAY","","camera_prop_keysUp_tooltip"],vn=["keysUpward","keysUpward","ARRAY","","camera_prop_keysUpward_tooltip"],qe=["lockedTarget","lockedTarget","NONE","","camera_prop_lockedTarget_tooltip"],On=["lowerAlphaLimit","lowerAlphaLimit","NUM","","camera_prop_lowerAlphaLimit_tooltip"],Sn=["lowerBetaLimit","lowerBetaLimit","NUM","","camera_prop_lowerBetaLimit_tooltip"],An=["lowerHeightOffsetLimit","lowerHeightOffsetLimit","NUM","","camera_prop_lowerHeightOffsetLimit_tooltip"],zt=["lowerRadiusLimit","lowerRadiusLimit","NUM","","camera_prop_lowerRadiusLimit_tooltip"],bn=["lowerRotationOffsetLimit","lowerRotationOffsetLimit","ANGLE","","camera_prop_lowerRotationOffsetLimit_tooltip"],fn=["maxCameraSpeed","maxCameraSpeed","NUM","8","camera_prop_maxCameraSpeed_tooltip"],Cn=["mapPanning","mapPanning","BOOL","TRUE","camera_prop_mapPanning_tooltip"],Ft=["position","position","VECTOR3",[0,0,0],"camera_prop_position_tooltip"],Rn=["panningAxis","panningAxis","VECTOR3",[0,0,0],"camera_prop_panningAxis_tooltip"],Dn=["panningDistanceLimit","panningDistanceLimit","NUM","","camera_prop_panningDistanceLimit_tooltip"],Ln=["panningInertia","panningInertia","NUM","","camera_prop_panningInertia_tooltip"],wn=["panningOriginTarget","panningOriginTarget","NONE","","camera_prop_panningOriginTarget_tooltip"],xn=["pinchToPanMaxDistance","pinchToPanMaxDistance","NUM","","camera_prop_pinchToPanMaxDistance_tooltip"],Be=["maxZ","maxZ","NUM","20","camera_prop_maxZ_tooltip"],et=["minZ","minZ","NUM","0.5","camera_prop_minZ_tooltip"],zn=["noRotationConstraint","noRotationConstraint","BOOL","TRUE","camera_prop_noRotationConstraint_tooltip"],jt=["radius","radius","NUM","20","camera_prop_radius_tooltip"],yt=["rotation","rotation","VECTOR3",[0,0,0],"camera_prop_rotation_tooltip"],Fn=["rotationOffset","rotationOffset","ANGLE","","camera_prop_rotationOffset_tooltip"],tt=["speed","speed","NUM","1","camera_prop_speed_tooltip"],Ut=["target","target","VECTOR3",[0,0,0],"camera_prop_target_tooltip"],jn=["targetHost","targetHost","MESH","","camera_prop_targetHost_tooltip"],yn=["targetScreenOffset","targetScreenOffset","NONE","","camera_prop_targetScreenOffset_tooltip"],Un=["touchAngularSensibility","touchAngularSensibility","NUM","4000","camera_prop_touchAngularSensibility_tooltip"],Jn=["touchMoveSensibility","touchMoveSensibility","NUM","250","camera_prop_touchMoveSensibility_tooltip"],Pn=["upperAlphaLimit","upperAlphaLimit","NUM","","camera_prop_upperAlphaLimit_tooltip"],Yn=["upperBetaLimit","upperBetaLimit","NUM","","camera_prop_upperBetaLimit_tooltip"],Vn=["upperHeightOffsetLimit","upperHeightOffsetLimit","NUM","","camera_prop_upperHeightOffsetLimit_tooltip"],Jt=["upperRadiusLimit","upperRadiusLimit","NUM","","camera_prop_upperRadiusLimit_tooltip"],Gn=["upperRotationOffsetLimit","upperRotationOffsetLimit","ANGLE","","camera_prop_upperRotationOffsetLimit_tooltip"],Hn=["useNaturalPinchZoom","useNaturalPinchZoom","BOOL","TRUE","camera_prop_useNaturalPinchZoom_tooltip"],$n=["wheelDeltaPercentage","wheelDeltaPercentage","NUM","","camera_prop_wheelDeltaPercentage_tooltip"],Qn=["wheelPrecision","wheelPrecision","NUM","3","camera_prop_wheelPrecision_tooltip"];b.UniversalCamera=new h([sn,rn,ke,Xe,Lt,ln,un,We,Ke,gn,Ze,wt,Ft,Ut,xt,mn,_n,Tn,En,Nn,Mn,In,vn,qe,Be,et,zn,yt,tt,Un,Jn]),b.ArcRotateCamera=new h([on,pn,ke,Xe,Lt,cn,We,Ke,Ze,qe,On,Sn,zt,Cn,Be,et,Rn,Dn,Ln,wn,xn,Ft,jt,tt,Ut,jn,yn,Pn,Yn,Jt,Hn,$n,Qn]),b.FollowCamera=new h([dn,ke,Xe,We,Ke,hn,Ze,wt,xt,qe,An,zt,bn,fn,Be,et,jt,yt,Fn,tt,Vn,Jt,Gn]),b.AnaglyphUniversalCamera=b.UniversalCamera,b.AnaglyphArcRotateCamera=b.ArcRotateCamera,b.DeviceOrientationCamera=b.UniversalCamera,e.Blocks.create_camera={init(){const i=this;this.appendDummyInput().appendField("create").appendField(new e.FieldDropdown(()=>b.cameraType.generatMenu(),n=>i.updateShape_(n)),"TYPE");const t=this.appendValueInput("NAME").appendField("name").setAlign(e.ALIGN_RIGHT).setCheck("String");this.setStyle("cameras_style"),this.setInputsInline(!0),this.setOutput(!0,"Camera"),this.setHelpUrl(""),i.updateShape_("UniversalCamera"),o(t,"TEXT","")},updateShape_(i){const t=this;switch(n(),i){case"UniversalCamera":this.appendValueInput("POSITION").appendField("position").setAlign(e.ALIGN_RIGHT).setCheck("Vector3"),this.setTooltip(e.Msg.create_universal_camera_tooltip),o(this.getInput("POSITION"),"VECTOR3",[0,0,0]);break;case"ArcRotateCamera":this.appendValueInput("ALPHA").appendField("alpha").setAlign(e.ALIGN_RIGHT).setCheck("Number"),this.appendValueInput("BETA").appendField("beta").setAlign(e.ALIGN_RIGHT).setCheck("Number"),this.appendValueInput("RADIUS").appendField("radius").setAlign(e.ALIGN_RIGHT).setCheck("Number"),this.appendValueInput("TARGET").appendField("target").setAlign(e.ALIGN_RIGHT).setCheck("Vector3"),this.setTooltip(e.Msg.create_arc_rotate_camera_tooltip),this.setHelpUrl("https://doc.babylonjs.com/typedoc/classes/babylon.arcrotatecamera"),o(this.getInput("ALPHA"),"ANGLE","-90"),o(this.getInput("BETA"),"ANGLE","90"),o(this.getInput("RADIUS"),"NUM","20"),o(this.getInput("TARGET"),"VECTOR3",[0,0,0]);break;case"FollowCamera":this.appendValueInput("POSITION").appendField("position").setAlign(e.ALIGN_RIGHT).setCheck("Vector3"),this.setTooltip(e.Msg.create_follow_camera_tooltip),o(this.getInput("POSITION"),"VECTOR3",[0,0,0]);break;case"AnaglyphUniversalCamera":this.appendValueInput("POSITION").appendField("position").setAlign(e.ALIGN_RIGHT).setCheck("Vector3"),this.appendValueInput("INTERAXIAL_DISTANCE").appendField("interaxialDistance").setAlign(e.ALIGN_RIGHT).setCheck("Number"),this.setTooltip(e.Msg.create_anaglyph_universal_camera_tooltip),o(this.getInput("INTERAXIAL_DISTANCE"),"NUM","0.033"),o(this.getInput("POSITION"),"VECTOR3",[0,0,0]);break;case"AnaglyphArcRotateCamera":this.appendValueInput("ALPHA").appendField("alpha").setAlign(e.ALIGN_RIGHT).setCheck("Number"),this.appendValueInput("BETA").appendField("beta").setAlign(e.ALIGN_RIGHT).setCheck("Number"),this.appendValueInput("RADIUS").appendField("radius").setAlign(e.ALIGN_RIGHT).setCheck("Number"),this.appendValueInput("TARGET").appendField("target").setAlign(e.ALIGN_RIGHT).setCheck("Vector3"),this.appendValueInput("INTERAXIAL_DISTANCE").appendField("interaxialDistance").setAlign(e.ALIGN_RIGHT).setCheck("Number"),this.setTooltip(e.Msg.create_anaglyph_arc_rotate_camera_tooltip),o(this.getInput("ALPHA"),"NUM","-90"),o(this.getInput("BETA"),"NUM","90"),o(this.getInput("RADIUS"),"NUM","20"),o(this.getInput("TARGET"),"VECTOR3",[0,0,0]),o(this.getInput("INTERAXIAL_DISTANCE"),"NUM","0.033");break;case"DeviceOrientationCamera":this.appendValueInput("POSITION").appendField("position").setAlign(e.ALIGN_RIGHT).setCheck("Vector3"),this.setTooltip(e.Msg.create_device_orienation_camera_tooltip),o(this.getInput("POSITION"),"VECTOR3",[0,0,0]);break}function n(){t.getInput("ALPHA")&&(x(t.getInput("ALPHA")),t.removeInput("ALPHA")),t.getInput("BETA")&&(x(t.getInput("BETA")),t.removeInput("BETA")),t.getInput("RADIUS")&&(x(t.getInput("RADIUS")),t.removeInput("RADIUS")),t.getInput("TARGET")&&(x(t.getInput("TARGET")),t.removeInput("TARGET")),t.getInput("POSITION")&&(x(t.getInput("POSITION")),t.removeInput("POSITION")),t.getInput("INTERAXIAL_DISTANCE")&&(x(t.getInput("INTERAXIAL_DISTANCE")),t.removeInput("INTERAXIAL_DISTANCE"))}}},e.Blocks.set_get_camera_prop={init:function(){const i=this,t=D();this.appendDummyInput().appendField(new e.FieldDropdown([["set","set"],["get","get"]],a=>{const s=a==="set";t.updateShape_.call(i,s),t.updateValueInput_.call(i,s)}),"METHOD");const n=this.appendValueInput("CAMERA").appendField(new e.FieldDropdown(()=>b.cameraType.generatMenu(),a=>i.updateKeyField(a)),"TYPE").setCheck("Camera");this.appendDummyInput("KEY_INPUT"),this.setStyle("cameras_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip("Sets the camera's property"),this.setHelpUrl(""),this.mixin(t),this.updateKeyField("UniversalCamera"),t.updateValueInput_.call(i,!0),o(n,"CAMERA",""),o(i.getInput("VALUE"),"BOOL","TRUE")},updateKeyField(i){const t=this,n=t.getInput("KEY_INPUT");n.removeField("KEY",!0),n.appendField(new e.FieldDropdown(()=>b[i].generatMenu(),a=>{t.getFieldValue("METHOD")==="set"&&b[i].updateShape(t,t.getInput("VALUE"),a),t.getFieldValue("METHOD")==="get"&&b[i].updateTooltip(t,a)}),"KEY")}},e.Blocks.set_get_active_camera={init(){const i=this,t=D();this.appendDummyInput().appendField(new e.FieldDropdown([["set","set"],["get","get"]],n=>{const a=n==="set";t.updateShape_.call(i,a),t.updateValueInput_.call(i,a),a&&o(i.getInput("VALUE"),"CAMERA","")}),"METHOD").appendField("active camera"),this.setStyle("cameras_style"),this.setInputsInline(!0),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip(e.Msg.set_get_active_camera_tooltip),this.setHelpUrl(""),this.mixin(t),t.updateValueInput_.call(i,!0),o(i.getInput("VALUE"),"CAMERA","")}},e.Blocks.remove_camera={init(){const i=this.appendValueInput("CAMERA").appendField("remove camera").setCheck("Camera");this.setStyle("cameras_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip(e.Msg.remove_camera_tooltip),this.setHelpUrl(""),o(i,"CAMERA","")}},e.Blocks.autorotate_camera={init(){this.appendDummyInput().appendField("autorotate").appendField("enabled").appendField(new e.FieldCheckbox("TRUE"),"ENABLED");const i=this.appendValueInput("SPEED").appendField("speed").setCheck("Number").setAlign(e.ALIGN_RIGHT),t=this.appendValueInput("WAIT_TIME").appendField("wait time").setCheck("Number").setAlign(e.ALIGN_RIGHT),n=this.appendValueInput("SPINUP_TIME").appendField("spinup time").setCheck("Number").setAlign(e.ALIGN_RIGHT);this.setStyle("cameras_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip(`Create a smooth rotation of an ArcRotateCamera when there is no user interaction.
speed: (number) The speed at which the camera rotates around the model.
wait time (number) The time (seconds) to wait after user interaction before the camera starts rotating
spin up time: (number) The time (seconds) to take to spin up to the full idle rotation speed.`),this.setHelpUrl(""),o(i,"NUM","0.05"),o(t,"NUM","2"),o(n,"NUM","2")}},e.Blocks.bounce_camera={init(){this.appendDummyInput().appendField("bounce");const i=this.appendValueInput("DURATION").appendField("duration").setCheck("Number").setAlign(e.ALIGN_RIGHT),t=this.appendValueInput("MIN_RADIUS").appendField("minDistance").setCheck("Number").setAlign(e.ALIGN_RIGHT),n=this.appendValueInput("MAX_RADIUS").appendField("maxDistance").setCheck("Number").setAlign(e.ALIGN_RIGHT);this.setStyle("cameras_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip(`Add a bouncing effect to an ArcRotateCamera when reaching a specified minimum and maximum radius
duration: (number) The duration of the animation, in seconds
min distance: (number) Minimum allowed distance of the camera to the target (The camera can not get closer).
max distance: (number) Maximum allowed distance of the camera to the target (The camera can not get further).`),this.setHelpUrl(""),o(i,"NUM","0.45"),o(t,"NUM","1"),o(n,"NUM","10")}},e.Blocks.zoom_camera={init(){const i=this.appendValueInput("MESH").appendField("zoom on").setCheck("Mesh"),t=this.appendValueInput("DURATION").appendField("duration").setCheck("Number");this.setStyle("cameras_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip("(Mesh) Targets the given mesh"),this.setHelpUrl(""),this.setMutator(new e.Mutator(["invisibleBlock"])),this.mixin(Qe([["whenFinishedSlot","when finished slot",!1]],"cameras_style",()=>{this.updateShape_()})),o(i,"MESH",""),o(t,"NUM","1.5")},updateShape_(){this.getInput("WHEN_FINISH_DO")&&this.removeInput("WHEN_FINISH_DO"),this._boolOptValues.whenFinishedSlot&&this.appendStatementInput("WHEN_FINISH_DO").appendField("when finish do").setCheck(null).setAlign(e.ALIGN_RIGHT)}},e.Blocks.camera_control_enabled={init(){const i=this.appendValueInput("CAMERA").appendField("camera control").setCheck("Camera"),t=this.appendValueInput("ENABLED").appendField("enabled").setCheck("Boolean").setAlign(e.ALIGN_RIGHT);this.setStyle("cameras_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip("Sets the camera control enabled or not."),this.setHelpUrl(""),o(i,"CAMERA",""),o(t,"BOOL","TRUE")}},e.Blocks.camera_get_forward_ray={init(){this.appendDummyInput().appendField("get camera forward ray");const i=this.appendValueInput("LENGTH").appendField("length").setAlign(e.ALIGN_RIGHT).setCheck("Number");this.setStyle("cameras_style"),this.setInputsInline(!0),this.setOutput(!0,"Ray"),this.setTooltip("Gets a ray in the forward direction from the camera."),this.setHelpUrl(""),o(i,"NUM","100")}};const L={};L.lightType=new h([["PointLight","PointLight"],["DirectionalLight","DirectionalLight"],["SpotLight","SpotLight"],["HemisphericLight","HemisphericLight"]]);const me=["diffuse","diffuse","COLOR3",[0,0,0],"Diffuse gives the basic color to an object."],_e=["intensity","intensity","NUM","1",`Strength of the light.
Note: By default it is define in the framework own unit.
Note: In PBR materials the intensityMode can be use to chose what unit the intensity is defined in.`],Te=["specular","specular","COLOR3",[0,0,0],`Specular produces a highlight color on an object.
Note: This is not affecting PBR materials.`],Ee=["intensityMode","intensityMode","NUM","0",`Sets the photometric scale used to interpret the intensity.
This is only relevant with PBR Materials where the light intensity can be defined in a physical way.`],Ne=["lightmapMode","lightmapMode","NUM","0","Sets the lightmap mode of this light (should be one of the constants defined by Light.LIGHTMAP_x)"],Pt=["position","position","VECTOR3",[0,0,0],"Sets or gets the position the shadow will be casted from. Also use as the light position for both point and spot lights."],Me=["radius","radius","NUM","0","sets the light radius used by PBR Materials to simulate soft area lights."],Ie=["range","range","NUM","0",`Defines how far from the source the light is impacting in scene units.
Note: Unused in PBR material as the distance light falloff is defined following the inverse squared falloff.`],ve=["shadowEnabled","shadowEnabled","BOOL","TRUE","Sets whether or not the shadows are enabled for this light. This can help turning off/on shadow without detaching the current shadow generator."],Yt=["shadowAngle","shadowAngle","NUM","0",`In case of direction provided, the shadow will not use a cube texture but simulate a spot shadow as a fallback
This specifies what angle the shadow will use to be created.
It default to 90 degrees to work nicely with the cube texture generation for point lights shadow maps.`],kn=["shadowMaxZ","shadowMaxZ","NUM","10","Sets or gets the shadow projection clipping maximum z value."],Xn=["shadowMinZ","shadowMinZ","NUM","1","Sets or gets the shadow projection clipping minimum z value."];L.PointLight=new h([me,_e,Te,Ee,Ne,Pt,Me,Ie,ve,Yt]),L.DirectionalLight=new h([me,_e,Te,Ee,Ne,Pt,Me,Ie,ve,["shadowFrustumSize","shadowFrustumSize","NUM","10","Fix frustum size for the shadow generation. This is disabled if the value is 0."],["shadowOrthoScale","shadowOrthoScale","NUM","0.1","Sets or gets the shadow projection scale against the optimal computed one. 0.1 by default which means that the projection window is increase by 10% from the optimal size. This does not impact in fixed frustum size (shadowFrustumSize being set)"]]),L.SpotLight=new h([me,_e,Te,Ee,["innerAngle","innerAngle","NUM","1","Only used in gltf falloff mode, this defines the angle where the directional falloff will start before cutting at angle which could be seen as outer angle."],Ne,Me,Ie,Yt,ve,kn,Xn]),L.HemisphericLight=new h([me,_e,Te,Ee,Ne,Me,Ie,ve]),L.shadow=new h([["bias","bias","NUM","0","Sets the bias: offset applied on the depth preventing acnea (in light direction)."],["blurBoxOffset","blurBoxOffset","NUM","0",`Sets the blur box offset: offset applied during the blur pass.
Only useful if useKernelBlur = false`],["blurKernel","blurKernel","NUM","0",`Sets the blur kernel: kernel size of the blur pass.
Only useful if useKernelBlur = true`],["blurScale","blurScale","NUM","1",`Sets the blur scale: scale of the blurred texture compared to the main shadow map.
2 means half of the size.`],["contactHardeningLightSizeUVRatio","contactHardeningLightSizeUVRatio","NUM","1",`Sets the Light Size (in shadow map uv unit) used in PCSS to determine the blocker search area and the penumbra size.Using a ratio helps keeping shape stability independently of the map size.
It does not account for the light projection as it was having too much instability during the light setup or during light position changes.
Only valid if useContactHardeningShadow is true.`],["darkness","darkness","NUM","0","Gets or sets the actual darkness of a shadow"],["depthScale","depthScale","NUM","1","Sets the depth scale used in ESM mode. This can override the scale stored on the light."],["filter","filter","NUM","0","Sets the current mode of the shadow generator (normal, PCF, ESM...).The returned value is a number equal to one of the available mode defined in ShadowMap.FILTER_x like _FILTER_NONE"],["filteringQuality","filteringQuality","NUM","0","Sets the PCF or PCSS Quality. Only valid if usePercentageCloserFiltering or usePercentageCloserFiltering is true."],["mapSize","mapSize","NUM","512","Gets or sets the size of the texture what stores the shadows"],["normalBias","normalBias","NUM","0","Sets the normalBias: offset applied on the depth preventing acnea (along side the normal direction and proportional to the light/normal angle)."],["transparencyShadow","transparencyShadow","BOOL","FALSE","Gets or sets the ability to have transparent shadow"],["useBlurCloseExponentialShadowMap","useBlurCloseExponentialShadowMap","BOOL","FALSE",'Sets the current filter to filtered "close ESM" (using the inverse of the exponential to prevent steep falloff artifacts).'],["useBlurExponentialShadowMap","useBlurExponentialShadowMap","BOOL","FALSE","Gets if the current filter is set to filtered ESM."],["useCloseExponentialShadowMap","useCloseExponentialShadowMap","BOOL","FALSE",'Sets the current filter to "close ESM" (using the inverse of the exponential to prevent steep falloff artifacts).'],["useContactHardeningShadow","useContactHardeningShadow","BOOL","FALSE",'Sets the current filter to "PCSS" (contact hardening).'],["useExponentialShadowMap","useExponentialShadowMap","BOOL","FALSE","Sets the current filter is to ESM."],["useKernelBlur","useKernelBlur","BOOL","FALSE","Sets whether the blur pass is a kernel blur (if true) or box blur. Only useful in filtered mode (useBlurExponentialShadowMap...)"],["usePercentageCloserFiltering","usePercentageCloserFiltering","BOOL","FALSE",'Sets the current filter to "PCF" (percentage closer filtering).'],["usePoissonSampling","usePoissonSampling","BOOL","FALSE","Sets the current filter to Poisson Sampling."]]),e.Blocks.create_light={init(){const i=this;this.appendDummyInput().appendField("create").appendField(new e.FieldDropdown(()=>L.lightType.generatMenu(),t=>i.updateShap_(t)),"TYPE"),this.appendValueInput("NAME").appendField("name").setCheck(null).setAlign(e.ALIGN_RIGHT),this.setStyle("lights_style"),this.setInputsInline(!0),this.setOutput(!0,"Light"),this.setTooltip("Creats light."),this.updateShap_("PointLight")},updateShap_(i){const t=this;function n(){t.getInput("POSITION")&&(x(t.getInput("POSITION")),t.removeInput("POSITION")),t.getInput("DIRECTION")&&(x(t.getInput("DIRECTION")),t.removeInput("DIRECTION")),t.getInput("ANGLE")&&(x(t.getInput("ANGLE")),t.removeInput("ANGLE")),t.getInput("EXPONENT")&&(x(t.getInput("EXPONENT")),t.removeInput("EXPONENT"))}switch(n(),o(this.getInput("NAME"),"TEXT",i.toLowerCase()),i){case"PointLight":this.appendValueInput("POSITION").appendField("position").setCheck("Vector3").setAlign(e.ALIGN_RIGHT),this.setTooltip(e.Msg.POINT_LIGHT_TOOLTIP),this.setHelpUrl("https://doc.babylonjs.com/typedoc/classes/babylon.pointlight"),o(t.getInput("POSITION"),"VECTOR3",[0,10,-5]);break;case"DirectionalLight":this.appendValueInput("DIRECTION").appendField("direction").setCheck("Vector3").setAlign(e.ALIGN_RIGHT),this.setTooltip(e.Msg.DIRECTIONAL_LIGHT_TOOLTIP),this.setHelpUrl("https://doc.babylonjs.com/typedoc/classes/babylon.directionallight"),o(t.getInput("DIRECTION"),"VECTOR3",[0,-1,0]);break;case"SpotLight":this.appendValueInput("POSITION").appendField("position").setCheck("Vector3").setAlign(e.ALIGN_RIGHT),this.appendValueInput("DIRECTION").appendField("direction").setCheck("Vector3").setAlign(e.ALIGN_RIGHT),this.appendValueInput("ANGLE").appendField("angle").setCheck("Number").setAlign(e.ALIGN_RIGHT),this.appendValueInput("EXPONENT").appendField("exponent").setCheck("Number").setAlign(e.ALIGN_RIGHT),this.setTooltip(e.Msg.SPOT_LIGHT_TOOLTIP),this.setHelpUrl("https://doc.babylonjs.com/typedoc/classes/babylon.spotlight"),o(this.getInput("POSITION"),"VECTOR3",[0,10,-5]),o(t.getInput("DIRECTION"),"VECTOR3",[0,-1,0]),o(this.getInput("ANGLE"),"ANGLE","45"),o(this.getInput("EXPONENT"),"NUM","2");break;case"HemisphericLight":this.appendValueInput("DIRECTION").appendField("direction").setCheck("Vector3").setAlign(e.ALIGN_RIGHT),this.setTooltip(e.Msg.DIRECTIONAL_LIGHT_TOOLTIP),this.setHelpUrl("https://doc.babylonjs.com/typedoc/classes/babylon.directionallight"),o(t.getInput("DIRECTION"),"VECTOR3",[0,-1,0]);break}}},e.Blocks.set_get_light_prop={init:function(){const i=this,t=D();this.appendDummyInput().appendField(new e.FieldDropdown([["set","set"],["get","get"]],a=>{const s=a==="set";t.updateShape_.call(i,s),t.updateValueInput_.call(i,s)}),"METHOD");const n=this.appendValueInput("LIGHT").appendField("light").appendField(new e.FieldDropdown(()=>L.lightType.generatMenu(),a=>i.updateKeyField(a)),"TYPE").setCheck("Light");this.appendDummyInput("KEY_INPUT"),this.setStyle("lights_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip("Sets light property"),this.setHelpUrl(""),this.mixin(t),t.updateValueInput_.call(i,!0),this.updateKeyField("PointLight"),o(n,"LIGHT",""),o(i.getInput("VALUE"),"COLOR3",[0,0,0])},updateKeyField(i){const t=this,n=t.getInput("KEY_INPUT");n.removeField("KEY",!0),n.appendField(new e.FieldDropdown(()=>L[i].generatMenu(),a=>{t.getFieldValue("METHOD")==="set"&&L[i].updateShape(t,t.getInput("VALUE"),a),t.getFieldValue("METHOD")==="get"&&L[i].updateTooltip(t,a)}),"KEY")}},e.Blocks.create_shadow={init(){this.appendDummyInput().appendField("create shadow");const i=this.appendValueInput("LIGHT").appendField("for").setCheck("Light").setAlign(e.ALIGN_RIGHT),t=this.appendValueInput("MAP_SIZE").appendField("size").setCheck("Number").setAlign(e.ALIGN_RIGHT);this.setStyle("lights_style"),this.setInputsInline(!0),this.setOutput(!0,"Shadow"),this.setTooltip("Creates a ShadowGenerator object. A ShadowGenerator is the required tool to use the shadows. Each light casting shadows needs to use its own ShadowGenerator."),o(i,"LIGHT",""),o(t,"NUM","1024")}},e.Blocks.set_shadow_prop={init:function(){const i=this;this.appendValueInput("SHADOW").appendField("set shadow").setCheck("Shadow"),this.appendDummyInput().appendField(new e.FieldDropdown(()=>L.shadow.generatMenu(),t=>i.typeHandle(t)),"KEY").appendField("to"),this.appendValueInput("VALUE"),this.setStyle("lights_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip("Sets the shadow property"),this.setHelpUrl(""),this.typeHandle("bias")},typeHandle(i){const t=this.getInput("VALUE");x(t),L.shadow.updateShape(this,t,i)}},e.Blocks.add_shadow_caster={init(){this.appendValueInput("SHADOW").appendField("in shadow").setCheck("Shadow");const i=this.appendValueInput("MESH").appendField("add shadow caster").setCheck("Mesh").setAlign(e.ALIGN_RIGHT);this.setStyle("lights_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip("Adds a mesh and its descendants to the list of shadow casters."),this.setHelpUrl("https://doc.babylonjs.com/typedoc/classes/babylon.shadowgenerator#addshadowcaster"),o(i,"MESH","")}};const $={};$.PointerEvent=new h([["pointerdoubletap","BABYLON.PointerEventTypes.POINTERDOUBLETAP"],["pointerdown","BABYLON.PointerEventTypes.POINTERDOWN"],["pointermove","BABYLON.PointerEventTypes.POINTERMOVE"],["pointerpick","BABYLON.PointerEventTypes.POINTERPICK"],["pointertap","BABYLON.PointerEventTypes.POINTERTAP"],["pointerup","BABYLON.PointerEventTypes.POINTERUP"],["pointerwheel","BABYLON.PointerEventTypes.POINTERWHEEL"]]),$.Actions=new h([["doNothing","DoNothingAction"],["setValue","SetValueAction"],["switchBoolean","SwitchBooleanAction"],["interpolateValue","InterpolateValueAction"],["incrementValue","IncrementValueAction"],["executeCode","ExecuteCodeAction"],["combine","CombineAction"]]),$.Triggers=new h([["nothing","BABYLON.ActionManager.NothingTrigger"],["onPick","BABYLON.ActionManager.OnPickTrigger"],["onDoublePick","BABYLON.ActionManager.OnDoublePickTrigger"],["onPickDown","BABYLON.ActionManager.OnPickDownTrigger"],["onPickUp","BABYLON.ActionManager.OnPickUpTrigger"],["onPickOut","BABYLON.ActionManager.OnPickOutTrigger"],["onLeftPick","BABYLON.ActionManager.OnLeftPickTrigger"],["onRightPick","BABYLON.ActionManager.OnRightPickTrigger"],["onCenterPick","BABYLON.ActionManager.OnCenterPickTrigger"],["onLongPress","BABYLON.ActionManager.OnLongPressTrigger"],["onPointerOver","BABYLON.ActionManager.OnPointerOverTrigger"],["onPointerOut","BABYLON.ActionManager.OnPointerOutTrigger"],["onIntersectionEnter","BABYLON.ActionManager.OnIntersectionEnterTrigger"],["onIntersectionExit","BABYLON.ActionManager.OnIntersectionExitTrigger"]]),$.virtualJoystickOption=new h([["alwaysVisible","alwaysVisible","BOOL","TRUE","create_virtual_joystick_option_alwaysVisible_tooltip"],["color","color","TEXT","skyblue","create_virtual_joystick_option_color_tooltip"],["containerImage","containerImage","TEXT","","create_virtual_joystick_option_containerImage_tooltip"],["containerSize","containerSize","NUM","100","create_virtual_joystick_option_containerSize_tooltip"],["limitToContainer","limitToContainer","BOOL","TRUE","create_virtual_joystick_option_limitToContainer_tooltip"],["position","position","VECTOR2","","create_virtual_joystick_option_position_tooltip"],["puckImage","puckImage","TEXT","","create_virtual_joystick_option_puckImage_tooltip"],["puckSize","puckSize","NUM","40","create_virtual_joystick_option_puckSize_tooltip"]]),e.Blocks.pointer_event={init:function(){this.appendDummyInput().appendField("on event of").appendField(new e.FieldDropdown(()=>$.PointerEvent.generatMenu()),"EVENT_TYPE"),this.appendDummyInput().setAlign(e.ALIGN_RIGHT).appendField("ignorBackface").appendField(new e.FieldCheckbox("TRUE"),"IGNOR_BACKFACE"),this.appendStatementInput("HIT_CB").setCheck(null).appendField("do").setAlign(e.ALIGN_RIGHT),this.setStyle("events_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip(""),this.setHelpUrl(""),this.mixin(he("picking_info","picked"))}},e.Blocks.picking_info={init(){this.appendDummyInput("DUMMY").appendField("picked").appendField(new e.FieldDropdown([["mesh","MESH"],["point","POINT"],["normal","NORMAL"]],i=>this.updateShape_(i)),"OPTION"),this.setInputsInline(!0),this.setOutput(!0,null),this.setStyle("events_style"),this.setTooltip("Returns the information(mesh/point/normal) where the user has clicked."),this.setHelpUrl("https://zjbcool.com/v3d-plugins/teleport/teleport.html#picked-object2")},updateShape_(i){var t=this.getInput("DUMMY"),n=this.getFieldValue("POINT_OPTION"),a=this.getFieldValue("NORMAL_OPTION");switch(i){case"MESH":n&&t.removeField("POINT_OPTION"),a&&t.removeField("NORMAL_OPTION");break;case"POINT":n||t.appendField(new e.FieldDropdown([["x","X"],["y","Y"],["z","Z"],["xyz","XYZ"]]),"POINT_OPTION"),a&&t.removeField("NORMAL_OPTION");break;case"NORMAL":n&&t.removeField("POINT_OPTION"),a||t.appendField(new e.FieldDropdown([["x","X"],["y","Y"],["z","Z"],["xyz","XYZ"]]),"NORMAL_OPTION");break}}},e.Blocks.keyboard_event={init:function(){this.appendDummyInput().appendField("on event of").appendField(new e.FieldDropdown([["keydown","KEYDOWN"],["keyup","KEYUP"]]),"TYPE").appendField("repeat").appendField(new e.FieldCheckbox("TRUE"),"REPEAT"),this.appendStatementInput("DO_CB").setCheck(null).setAlign(e.ALIGN_RIGHT).appendField("do"),this.setStyle("events_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip("The keyboard event"),this.setHelpUrl(""),this.mixin(he("get_key_input","key input"))}},e.Blocks.get_key_input={init(){this.appendDummyInput().appendField("get").appendField(new e.FieldDropdown([["key","key"],["keyCode","keyCode"]]),"KEY_INPUT"),this.setInputsInline(!0),this.setOutput(!0,null),this.setStyle("events_style"),this.setTooltip("Returns the key/keyCode the user has pressed."),this.setHelpUrl("")}},e.Blocks.event_create_action={init(){const i=this;this.appendDummyInput().appendField("create action").appendField(new e.FieldDropdown(()=>$.Actions.generatMenu(),t=>i.updateShape(t)),"ACTION"),this.appendDummyInput("EVENT").appendField("event").appendField(new e.FieldDropdown(()=>$.Triggers.generatMenu(),t=>i.updateParam(t)),"TRIGGER").setAlign(e.ALIGN_RIGHT),this.setInputsInline(!0),this.setOutput(!0,null),this.setStyle("events_style"),this.setTooltip("Actions are a simple way to add interactions in your scenes. An action is launched when its trigger is fired. "),this.setHelpUrl("")},updateParam(i){switch(this.getInput("INTERSECTS_MESH")&&this.removeInput("INTERSECTS_MESH"),this.getInput("PRECISE_INPUT")&&this.removeInput("PRECISE_INPUT"),i){case"BABYLON.ActionManager.OnIntersectionEnterTrigger":case"BABYLON.ActionManager.OnIntersectionExitTrigger":const t=this.appendValueInput("INTERSECTS_MESH").appendField("intersectsMesh").setCheck("Mesh").setAlign(e.ALIGN_RIGHT);this.appendDummyInput("PRECISE_INPUT").appendField("precise").appendField(new e.FieldCheckbox("TRUE"),"PRECISE").setAlign(e.ALIGN_RIGHT),o(t,"MESH",""),this.getInput("OBJECT")&&(this.moveInputBefore("PRECISE_INPUT","OBJECT"),this.moveInputBefore("INTERSECTS_MESH","PRECISE_INPUT")),this.getInput("CHILDREN")&&(this.moveInputBefore("PRECISE_INPUT","CHILDREN"),this.moveInputBefore("INTERSECTS_MESH","PRECISE_INPUT"));break}},updateShape(i){switch(this.removeDynamicInput(),i){case"SwitchBooleanAction":this.appendObjectKey();break;case"SetValueAction":case"IncrementValueAction":this.appendObjectKey(),this.appendValue();break;case"InterpolateValueAction":this.appendObjectKey(),this.appendValue(),this.appendDuration();break;case"ExecuteCodeAction":this.appendValueInput("FUNC").appendField("func").setCheck(null).setAlign(e.ALIGN_RIGHT);break;case"CombineAction":this.appendCombineActions();break}},appendObjectKey(){const i=this.appendValueInput("OBJECT").appendField("object").setCheck(null).setAlign(e.ALIGN_RIGHT),t=this.appendValueInput("KEY").appendField("key").setCheck(null).setAlign(e.ALIGN_RIGHT);o(i,"OBJECT",""),o(t,"TEXT","")},appendValue(){const i=this.appendValueInput("VALUE").appendField("value").setCheck(null).setAlign(e.ALIGN_RIGHT);o(i,"TEXT","")},appendDuration(){const i=this.appendValueInput("DURATION").appendField("duration").setCheck(null).setAlign(e.ALIGN_RIGHT);o(i,"NUM","1")},appendCombineActions(){const i=this.appendValueInput("CHILDREN").appendField("actions").setCheck("Array").setAlign(e.ALIGN_RIGHT);o(i,"ARRAY","")},removeDynamicInput(){this.getInput("OBJECT")&&this.removeInput("OBJECT"),this.getInput("KEY")&&this.removeInput("KEY"),this.getInput("VALUE")&&this.removeInput("VALUE"),this.getInput("DURATION")&&this.removeInput("DURATION"),this.getInput("FUNC")&&this.removeInput("FUNC"),this.getInput("CHILDREN")&&this.removeInput("CHILDREN")}},e.Blocks.event_add_actions={init(){const i=this.appendValueInput("ACTIONS").appendField("add actions").setCheck("Array"),t=this.appendValueInput("MESH").appendField("to").setAlign(e.ALIGN_RIGHT).setCheck("Mesh");this.setStyle("events_style"),this.setInputsInline(!0),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip("Add actions to a mesh"),this.setHelpUrl(""),o(i,"ARRAY",""),o(t,"MESH","")}},e.Blocks.create_custom_event={init(){this.appendDummyInput().appendField("create custom event"),this.setStyle("events_style"),this.setInputsInline(!0),this.setOutput(!0,null),this.setTooltip(""),this.setHelpUrl("")}},e.Blocks.dispatch_custom_event={init(){this.appendValueInput("EVENT").appendField("dispatch event");const i=this.appendValueInput("CUSTOM_EVENT_DATA").appendField("data").setCheck("Object").setAlign(e.ALIGN_RIGHT);this.setStyle("events_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip(""),this.setHelpUrl(""),o(i,"OBJECT","")}},e.Blocks.add_custom_event_listener={init:function(){this.appendValueInput("EVENT").appendField("add listener for event"),this.appendStatementInput("DO_CB").setCheck(null).setAlign(e.ALIGN_RIGHT).appendField("do"),this.setStyle("events_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip(""),this.setHelpUrl(""),this.mixin(he("custom_event_data","custom event data"))}},e.Blocks.custom_event_data={init:function(){this.appendDummyInput().appendField("custom event data"),this.setStyle("events_style"),this.setInputsInline(!0),this.setOutput(!0),this.setTooltip(""),this.setHelpUrl(""),this.mixin(R("add_custom_event_listener"))}},e.Blocks.create_ray={init:function(){this.appendDummyInput().appendField("create ray");const i=this.appendValueInput("ORIGIN").appendField("origin").setCheck("Vector3").setAlign(e.ALIGN_RIGHT),t=this.appendValueInput("DIRECTION").appendField("direction").setCheck("Vector3").setAlign(e.ALIGN_RIGHT),n=this.appendValueInput("LENGTH").appendField("length").setCheck("Number").setAlign(e.ALIGN_RIGHT);this.setStyle("events_style"),this.setInputsInline(!0),this.setOutput(!0,"Ray"),this.setTooltip("Creates a new ray"),this.setHelpUrl(""),o(i,"VECTOR3",[0,0,0]),o(t,"VECTOR3",[0,0,1]),o(n,"NUM","100")}},e.Blocks.ray_intersects_mesh={init:function(){this.appendValueInput("RAY").appendField("ray").setCheck("Ray");const i=this.appendValueInput("MESH").appendField("intersects mesh(s)").setCheck(["Mesh","Array"]).setAlign(e.ALIGN_RIGHT);this.appendStatementInput("DO_CB").appendField("do").setAlign(e.ALIGN_RIGHT),this.setStyle("events_style"),this.setInputsInline(!0),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip("Checks if ray intersects a mesh or meshes."),this.setHelpUrl(""),o(i,"MESH",""),this.mixin(he("picking_info","picked"))}};const y={};y.propType=new h([["Float","BABYLON.Animation.ANIMATIONTYPE_FLOAT"],["Vector2","BABYLON.Animation.ANIMATIONTYPE_VECTOR2"],["Vector3","BABYLON.Animation.ANIMATIONTYPE_VECTOR3"],["Color3","BABYLON.Animation.ANIMATIONTYPE_COLOR3"]]),y.loopMode=new h([["cycle","BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE"],["constant","BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT"],["relative","BABYLON.Animation.ANIMATIONLOOPMODE_RELATIVE"]]),y.easing=new h([["CircleEase","new BABYLON.CircleEase()"],["BackEase","new BABYLON.BackEase(1)"],["BounceEase","new BABYLON.BounceEase(2, 0.1)"],["CubicEase","new BABYLON.CubicEase()"],["ElasticEase","new BABYLON.ElasticEase(3, 1)"],["ExponentialEase","new BABYLON.ExponentialEase(2)"],["PowerEase","new BABYLON.PowerEase(2)"],["QuadraticEase","new BABYLON.QuadraticEase()"],["QuarticEase","new BABYLON.QuarticEase()"],["QuinticEase","new BABYLON.QuinticEase()"],["SineEase","new BABYLON.SineEase()"],["BezierCurveEase","new BABYLON.BezierCurveEase()"]]),y.animationGroupProps=new h([["animatables","animatables","ARRAY","","returning the list of animatables controlled by this animation group."],["children","children","ARRAY","","Gets the list of target animations"],["from","from","NUM","Gets the first frame"],["isAdditive","isAdditive","BOOL","TRUE","Gets or sets if all animations should be evaluated additively"],["isPlaying","isPlaying","BOOL","TRUE","Gets a value indicating that the current group is playing"],["isStarted","isStarted","BOOL","TRUE","Define if the animations are started"],["loopAnimation","loopAnimation","BOOL","TRUE","Gets or sets if all animations should loop or not"],["speedRatio","speedRatio","NUM","","Gets or sets the speed ratio to use for all animations"],["targetedAnimations","targetedAnimations","ARRAY","","Gets the targeted animations for this animation group"],["to","to","NUM","","Gets the last frame"]]),y.animationGroupMethod=new h([["pause","pause"],["play","play"],["reset","reset"],["restart","restart"],["start","start"],["stop","stop"]]),e.Blocks.get_animation_group_by_name={init(){const i=this.appendValueInput("NAME").appendField("get animation group").setCheck("String");this.setStyle("animation_style"),this.setInputsInline(!0),this.setOutput("AnimationGroup"),this.setHelpUrl(""),o(i,"TEXT","")}},e.Blocks.set_get_animaiton_group_prop={init(){const i=this,t=D();let n;this.appendValueInput("ANIMATION_GROUP").appendField(new e.FieldDropdown([["set","set"],["get","get"]],a=>{n=a==="set",t.updateShape_.call(i,n),t.updateValueInput_.call(i,n)}),"METHOD").appendField("animation group").setCheck("AnimationGroup"),this.appendDummyInput().appendField(new e.FieldDropdown(()=>y.animationGroupProps.generatMenu(),a=>{n&&y.animationGroupProps.updateShape(i,i.getInput("VALUE"),a)}),"PROP"),this.setStyle("animation_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setHelpUrl(""),this.mixin(t),t.updateValueInput_.call(i,!0),o(i.getInput("VALUE"),"ARRAY","")}},e.Blocks.animation_group_playback={init(){const i=this;this.appendValueInput("ANIMATION_GROUP").appendField(new e.FieldDropdown(()=>y.animationGroupMethod.generatMenu(),n=>i._updateShape(n)),"METHOD").appendField("animation group").setCheck(null);const t=this.appendDummyInput("DUMMY").appendField("loop").appendField(new e.FieldCheckbox("TRUE"),"LOOP");this.setStyle("animation_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setHelpUrl(""),t.setVisible(!1)},_updateShape(i){const t=this.getInput("DUMMY");t.setVisible(!1),["start","play"].includes(i)&&t.setVisible(!0)}},e.Blocks.animation_go_to_frame={init(){this.appendValueInput("ANIMATION_GROUP").appendField("animation group").setCheck(null);const i=this.appendValueInput("FRAME").appendField("go to frame").setCheck(null);this.setStyle("animation_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip("Goes to a specific frame in this animation group"),this.setHelpUrl(""),o(i,"NUM","")}},e.Blocks.animation_blending={init(){this.appendValueInput("FROM_ANIMATION_GROUP").appendField("animation blending").appendField("fromAnimGroup").setCheck(null),this.appendValueInput("TO_ANIMATION_GROUP").appendField("toAnimGroup").setCheck(null);const i=this.appendValueInput("BLENDING_SPEED").appendField("blendingSpeed").setCheck(null);this.setStyle("animation_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip(""),this.setHelpUrl(""),o(i,"NUM","1")}},e.Blocks.transition_animation={init(){const i=this;this.appendDummyInput().appendField("transition");const t=this.appendValueInput("OBJECT").appendField("object").setAlign(e.ALIGN_RIGHT).setCheck(["Object","Mesh","Light","Camera"]),n=this.appendValueInput("KEY").appendField("key").setAlign(e.ALIGN_RIGHT).setCheck("String"),a=this.appendValueInput("VALUE").appendField("value").setAlign(e.ALIGN_RIGHT).setCheck(null);this.appendDummyInput().appendField("type").setAlign(e.ALIGN_RIGHT).appendField(new e.FieldDropdown(()=>y.propType.generatMenu()),"TYPE");const s=this.appendValueInput("DURATION").appendField("duration").setAlign(e.ALIGN_RIGHT).setCheck("Number"),r=this.appendValueInput("FPS").appendField("fps").setAlign(e.ALIGN_RIGHT).setCheck("Number");this.appendDummyInput().appendField("easing").setAlign(e.ALIGN_RIGHT).appendField(new e.FieldDropdown(()=>y.easing.generatMenu()),"EASING"),this.setStyle("animation_style"),this.setInputsInline(!0),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip("Transition property of an host to the target Value"),this.setHelpUrl(""),this.setMutator(new e.Mutator(["invisibleBlock"])),this.mixin(Qe([["enableCb","enable finish slot",!1]],"animation_style",()=>i.updateShape_())),o(t,"OBJECT",""),o(n,"TEXT",""),o(a,"NUM","1"),o(s,"NUM","1"),o(r,"NUM","60")},updateShape_(){this.getInput("DO_CB")&&this.removeInput("DO_CB"),this._boolOptValues.enableCb&&this.appendStatementInput("DO_CB").appendField("finish do").setAlign(e.ALIGN_RIGHT)}},e.Blocks.time_after={init(){const i=this.appendValueInput("VALUE").appendField("after").setCheck("Number");this.appendDummyInput().appendField("second(s)"),this.appendStatementInput("DO_CB").setCheck(null).setAlign(e.ALIGN_RIGHT).appendField("do"),this.setStyle("time_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip(""),this.setHelpUrl(""),o(i,"NUM","1")}},e.Blocks.time_every_frame={init:function(){this.appendDummyInput().appendField("every frame"),this.appendStatementInput("DO_CB").setCheck(null).setAlign(e.ALIGN_RIGHT).appendField("do"),this.setStyle("time_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip(""),this.setHelpUrl("")}},e.Blocks.get_delta_time={init:function(){this.appendDummyInput().appendField("get delta time"),this.setStyle("time_style"),this.setInputsInline(!0),this.setOutput(!0,"Number"),this.setTooltip("Gets the time spent between current and previous frame. Returns a number representing the delta time in seconds."),this.setHelpUrl("")}},e.Blocks.create_timer={init:function(){this.appendDummyInput().appendField("create timer");const i=this.appendValueInput("SECONDS").appendField("interval").setCheck("Number");this.appendDummyInput().appendField("second(s)"),this.appendStatementInput("DO_CB").appendField("do"),this.setStyle("time_style"),this.setInputsInline(!0),this.setOutput(!0),this.setTooltip("repeatedly calls a function or executes a code snippet, with a fixed time delay between each call."),this.setHelpUrl("https://developer.mozilla.org/en-US/docs/Web/API/setInterval"),o(i,"NUM","")}},e.Blocks.remove_timer={init:function(){this.appendValueInput("TIMER").appendField("remove timer"),this.setStyle("time_style"),this.setInputsInline(!0),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip("Cancels a timer"),this.setHelpUrl("https://developer.mozilla.org/en-US/docs/Web/API/setInterval")}};const S={};S.materialType=new h([["StandardMaterial","StandardMaterial"],["PBRMaterial","PBRMaterial"],["BackgroundMaterial","BackgroundMaterial"]]);const Vt=["alpha","alpha","NUM","1","Sets or gets the alpha value of the material"],Gt=["alphaMode","alphaMode","NUM","",`0	ALPHA_DISABLE	
 1	ALPHA_ADD	
 2	ALPHA_COMBINE	
 3	ALPHA_SUBTRACT	
 4	ALPHA_MULTIPLY	
 5	ALPHA_MAXIMIZED	
 6	ALPHA_ONEONE	
 7	ALPHA_PREMULTIPLIED	
 8	ALPHA_PREMULTIPLIED_PORTERDUFF	
 9	ALPHA_INTERPOLATE	
 10	ALPHA_SCREENMODE`],Ht=["ambientColor","ambientColor","COLOR3",[0,0,0],"The color of the material lit by the environmental background lighting."],$t=["ambientTexture","ambientTexture","NONE","","AKA Occlusion Texture in other nomenclature, it helps adding baked shadows into your material."],Qt=["transparencyMode","transparencyMode","NUM","0",`0	OPAQUE	
1	ALPHATEST	
2	ALPHABLEND	
3	ALPHATESTANDBLEND`],kt=["zOffset","zOffset","NUM","","Stores the z offset Factor value"];S.StandardMaterial=new h([Vt,Gt,Ht,$t,["backFaceCulling","backFaceCulling","BOOL","FALSE","Sets or gets the culling state (true to enable culling, false to disable)"],["bumpTexture","bumpTexture","NONE","","Bump mapping is a technique to simulate bump and dents on a rendered surface."],["diffuseColor","diffuseColor","COLOR3",[0,0,0],"The basic color of the material as viewed under a light."],["diffuseTexture","diffuseTexture","NONE","","The basic texture of the material as viewed under a light."],["disableLighting","disableLighting","BOOL","FALSE","Does lights from the scene impacts this material. It can be a nice trick for performance to disable lighting on a fully emissive material."],["emissiveColor","emissiveColor","COLOR3",[0,0,0],"Define the color of the material as if self lit. This will be mixed in the final result even in the absence of light."],["emissiveTexture","emissiveTexture","NONE","","Define texture of the material as if self lit. This will be mixed in the final result even in the absence of light."],["indexOfRefraction","indexOfRefraction","NUM","1","In case of refraction, define the value of the index of refraction."],["invertNormalMapX","invertNormalMapX","BOOL","FALSE","If sets to true, x component of normal map value will invert (x = 1.0 - x)."],["invertNormalMapY","invertNormalMapY","BOOL","FALSE","If sets to true, y component of normal map value will invert (y = 1.0 - y)."],["invertRefractionY","invertRefractionY","BOOL","FALSE","Invert the refraction texture alongside the y axis. It can be useful with procedural textures or probe for instance."],["lightmapTexture","lightmapTexture","NONE","","Complex lighting can be computationally expensive to compute at runtime. To save on computation, lightmaps may be used to store calculated lighting in a texture which will be applied to a given mesh."],["linkEmissiveWithDiffuse","linkEmissiveWithDiffuse","BOOL","FALSE","If true, some kind of energy conservation will prevent the end result to be more than 1 by reducing the emissive level when the final color is close to one."],["maxSimultaneousLights","maxSimultaneousLights","NUM","6","Defines the maximum number of lights that can be used in the material"],["opacityTexture","opacityTexture","NONE","","Define the transparency of the material from a texture. The final alpha value can be read either from the red channel (if texture.getAlphaFromRGB is false) or from the luminance or the current texel (if texture.getAlphaFromRGB is true)"],["parallaxScaleBias","parallaxScaleBias","NUM","0.05",'Apply a scaling factor that determine which "depth" the height map should reprensent. A value between 0.05 and 0.1 is reasonnable in Parallax, you can reach 0.2 using Parallax Occlusion.'],["pointSize","pointSize","NUM","1","Stores the size of points"],["reflectionTexture","reflectionTexture","NONE","","Define the texture used to display the reflection."],["refractionTexture","refractionTexture","NONE","","Define the texture used to display the refraction."],["roughness","roughness","Number","NUM","0"],["sideOrientation","sideOrientation","NUM","0","Stores the value for side orientation"],["specularColor","specularColor","COLOR3",[0,0,0],"Define how the color and intensity of the highlight given by the light in the material."],["specularPower","specularPower","NUM","1","Defines how sharp are the highlights in the material. The bigger the value the sharper giving a more glossy feeling to the result. Reversely, the smaller the value the blurrier giving a more rough feeling to the result."],["specularTexture","specularTexture","NONE","","Define how the color and intensity of the highlight given by the light in the material."],Qt,["twoSidedLighting","twoSidedLighting","BOOL","FALSE","If sets to true and backfaceCulling is false, normals will be flipped on the backside."],["useAlphaFromDiffuseTexture","useAlphaFromDiffuseTexture","BOOL","FALSE","Does the transparency come from the diffuse texture alpha channel."],["useEmissiveAsIllumination","useEmissiveAsIllumination","BOOL","FALSE","If true, the emissive value is added into the end result, otherwise it is multiplied in."],["useGlossinessFromSpecularMapAlpha","useGlossinessFromSpecularMapAlpha","BOOL","FALSE","Defines if the glossiness/roughness of the material should be read from the specular map alpha channel"],["useLightmapAsShadowmap","useLightmapAsShadowmap","BOOL","FALSE","In case of light mapping, define whether the map contains light or shadow informations."],["useObjectSpaceNormalMap","useObjectSpaceNormalMap","BOOL","FALSE","Allows using an object space normal map (instead of tangent space)."],["useParallax","useParallax","BOOL","FALSE","Is parallax enabled or not."],["useParallaxOcclusion","useParallaxOcclusion","BOOL","FALSE","Is parallax occlusion enabled or not. If true, the outcome is way more realistic than traditional Parallax but you can expect a performance hit that worthes consideration."],["useReflectionFresnelFromSpecular","useReflectionFresnelFromSpecular","BOOL","FALSE","If true automatically deducts the fresnels values from the material specularity."],["useReflectionOverAlpha","useReflectionOverAlpha","BOOL","FALSE","Specifies that the material will keeps the reflection highlights over a transparent surface (only the most luminous ones). A car glass is a good exemple of that. When the street lights reflects on it you can not see what is behind."],["useSpecularOverAlpha","useSpecularOverAlpha","BOOL","FALSE","Specifies that the material will keep the specular highlights over a transparent surface (only the most luminous ones). A car glass is a good exemple of that. When sun reflects on it you can not see what is behind."],["wireframe","wireframe","BOOL","FALSE","Sets or gets the state of wireframe mode"],kt]),S.PBRMaterial=new h([["albedoColor","albedoColor","COLOR3",[255,255,255],"AKA Diffuse Color in other nomenclature."],["albedoTexture","albedoTexture",null,"","AKA Diffuse Texture in standard nomenclature."],["allowShaderHotSwapping","allowShaderHotSwapping","BOOL","TRUE","Gets or sets a boolean indicating that the material is allowed (if supported) to do shader hot swapping.This means that the material can keep using a previous shader while a new one is being compiled.This is mostly used when shader parallel compilation is supported (true by default)"],Vt,Gt,["alphaCutOff","alphaCutOff","NUM","","Defines the alpha limits in alpha test mode."],Ht,$t,["ambientTextureImpactOnAnalyticalLights","ambientTextureImpactOnAnalyticalLights",null,"",""],["ambientTextureStrength","ambientTextureStrength","NUM","",""],["animations","animations","NONE","","Stores the animations for the material"],["anisotropy","anisotropy",null,"",""],["brdf","brdf",null,"",""],["bumpTexture","bumpTexture",null,"",""],["checkReadyOnEveryCall","checkReadyOnEveryCall",null,"",""],["checkReadyOnlyOnce","checkReadyOnlyOnce",null,"",""],["clearCoat","clearCoat",null,"",""],["customShaderNameResolve","customShaderNameResolve",null,"",""],["depthFunction","depthFunction",null,"",""],["detailMap","detailMap",null,"",""],["directIntensity","directIntensity",null,"",""],["disableBumpMap","disableBumpMap",null,"",""],["disableColorWrite","disableColorWrite",null,"",""],["disableDepthWrite","disableDepthWrite",null,"",""],["disableLighting","disableLighting",null,"",""],["doNotSerialize","doNotSerialize",null,"",""],["emissiveColor","emissiveColor","COLOR3",[0,0,0],""],["emissiveIntensity","emissiveIntensity",null,"",""],["emissiveTexture","emissiveTexture",null,"",""],["enableSpecularAntiAliasing","enableSpecularAntiAliasing",null,"",""],["environmentBRDFTexture","environmentBRDFTexture",null,"",""],["environmentIntensity","environmentIntensity",null,"",""],["forceAlphaTest","forceAlphaTest",null,"",""],["forceDepthWrite","forceDepthWrite",null,"",""],["forceIrradianceInFragment","forceIrradianceInFragment",null,"",""],["forceNormalForward","forceNormalForward",null,"",""],["getRenderTargetTextures","getRenderTargetTextures",null,"",""],["inspectableCustomProperties","inspectableCustomProperties",null,"",""],["invertNormalMapX","invertNormalMapX",null,"",""],["invertNormalMapY","invertNormalMapY",null,"",""],["lightmapTexture","lightmapTexture",null,"",""],["maxSimultaneousLights","maxSimultaneousLights",null,"",""],["metadata","metadata",null,"",""],["metallic","metallic",null,"",""],["metallicF0Factor","metallicF0Factor",null,"",""],["metallicReflectanceColor","metallicReflectanceColor",null,"",""],["metallicReflectanceTexture","metallicReflectanceTexture",null,"",""],["metallicTexture","metallicTexture",null,"",""],["microSurface","microSurface",null,"",""],["microSurfaceTexture","microSurfaceTexture",null,"",""],["opacityTexture","opacityTexture",null,"",""],["parallaxScaleBias","parallaxScaleBias",null,"",""],["pointSize","pointSize",null,"",""],["prePassConfiguration","prePassConfiguration",null,"",""],["reflectanceTexture","reflectanceTexture",null,"",""],["reflectionColor","reflectionColor",null,"",""],["reflectionTexture","reflectionTexture",null,"",""],["reflectivityColor","reflectivityColor",null,"",""],["reflectivityTexture","reflectivityTexture",null,"",""],["reservedDataStore","reservedDataStore",null,"",""],["roughness","roughness","NUM","",""],["separateCullingPass","separateCullingPass",null,"",""],["shadowDepthWrapper","shadowDepthWrapper",null,"",""],["sheen","sheen",null,"",""],["sideOrientation","sideOrientation","NUM","","Stores the value for side orientation"],["specularIntensity","specularIntensity",null,"",""],["state","state",null,"",""],["subSurface","subSurface",null,"",""],["twoSidedLighting","twoSidedLighting",null,"",""],Qt,["unlit","unlit","BOOL","FALSE","If set to true, no lighting calculations will be applied."],["useAlphaFresnel","useAlphaFresnel",null,"",""],["useAlphaFromAlbedoTexture","useAlphaFromAlbedoTexture",null,"",""],["useAmbientInGrayScale","useAmbientInGrayScale",null,"",""],["useAmbientOcclusionFromMetallicTextureRed","useAmbientOcclusionFromMetallicTextureRed",null,"",""],["useAutoMicroSurfaceFromReflectivityMap","useAutoMicroSurfaceFromReflectivityMap",null,"",""],["useHorizonOcclusion","useHorizonOcclusion",null,"",""],["useLightmapAsShadowmap","useLightmapAsShadowmap",null,"",""],["useLinearAlphaFresnel","useLinearAlphaFresnel",null,"",""],["useMetallnessFromMetallicTextureBlue","useMetallnessFromMetallicTextureBlue",null,"",""],["useMicroSurfaceFromReflectivityMapAlpha","useMicroSurfaceFromReflectivityMapAlpha",null,"",""],["useObjectSpaceNormalMap","useObjectSpaceNormalMap",null,"",""],["useOnlyMetallicFromMetallicReflectanceTexture","useOnlyMetallicFromMetallicReflectanceTexture",null,"",""],["useParallax","useParallax",null,"",""],["useParallaxOcclusion","useParallaxOcclusion",null,"",""],["useRadianceOcclusion","useRadianceOcclusion",null,"",""],["useRadianceOverAlpha","useRadianceOverAlpha",null,"",""],["useRoughnessFromMetallicTextureAlpha","useRoughnessFromMetallicTextureAlpha",null,"",""],["useRoughnessFromMetallicTextureGreen","useRoughnessFromMetallicTextureGreen",null,"",""],["useSpecularOverAlpha","useSpecularOverAlpha",null,"",""]]),S.BackgroundMaterial=new h([["allowShaderHotSwapping","allowShaderHotSwapping",null,"",""],["animations","animations",null,"",""],["checkReadyOnEveryCall","checkReadyOnEveryCall",null,"",""],["checkReadyOnlyOnce","checkReadyOnlyOnce",null,"",""],["customShaderNameResolve","customShaderNameResolve",null,"",""],["depthFunction","depthFunction",null,"",""],["diffuseTexture","diffuseTexture",null,"",""],["disableColorWrite","disableColorWrite",null,"",""],["disableDepthWrite","disableDepthWrite",null,"",""],["doNotSerialize","doNotSerialize",null,"",""],["enableNoise","enableNoise",null,"",""],["forceDepthWrite","forceDepthWrite",null,"",""],["getRenderTargetTextures","getRenderTargetTextures",null,"",""],["id","id",null,"",""],["inspectableCustomProperties","inspectableCustomProperties",null,"",""],["maxSimultaneousLights","maxSimultaneousLights",null,"",""],["metadata","metadata",null,"",""],["name","name",null,"",""],["onCompiled","onCompiled",null,"",""],["onDisposeObservable","onDisposeObservable",null,"",""],["onError","onError",null,"",""],["opacityFresnel","opacityFresnel",null,"",""],["pointSize","pointSize",null,"",""],["primaryColor","primaryColor","COLOR3",[255,255,255],""],["reflectionAmount","reflectionAmount",null,"",""],["reflectionBlur","reflectionBlur",null,"",""],["reflectionFalloffDistance","reflectionFalloffDistance",null,"",""],["reflectionFresnel","reflectionFresnel",null,"",""],["reflectionReflectance0","reflectionReflectance0",null,"",""],["reflectionReflectance90","reflectionReflectance90",null,"",""],["reflectionTexture","reflectionTexture",null,"",""],["reservedDataStore","reservedDataStore",null,"",""],["sceneCenter","sceneCenter",null,"",""],["separateCullingPass","separateCullingPass",null,"",""],["shadowDepthWrapper","shadowDepthWrapper",null,"",""],["shadowLevel","shadowLevel",null,"",""],["shadowLights","shadowLights",null,"",""],["shadowOnly","shadowOnly",null,"",""],["sideOrientation","sideOrientation",null,"",""],["state","state",null,"",""],["switchToBGR","switchToBGR",null,"",""],["uniqueId","uniqueId",null,"",""],["useEquirectangularFOV","useEquirectangularFOV",null,"",""],["useRGBColor","useRGBColor",null,"",""],kt,["zOffsetUnits","zOffsetUnits",null,"",""]]),S.textureType=new h([["Texture","Texture"],["CubeTexture","CubeTexture"]]),S.Texture=new h([["anisotropicFilteringLevel","anisotropicFilteringLevel","NUM","4",`With compliant hardware and browser (supporting anisotropic filtering)
this defines the level of anisotropic filtering in the texture.
The higher the better but the slower. This defaults to 4 as it seems to be the best tradeoff.`],["hasAlpha","hasAlpha","BOOL","FALSE","Define if the texture is having a usable alpha value (can be use for transparency or glossiness for instance)."],["invertY","invertY","BOOL","FALSE","Gets a boolean indicating if the texture needs to be inverted on the y axis during loading"],["invertZ","invertZ","BOOL","FALSE","Is Z inverted in the texture (useful in a cube texture)."],["level","level","NUM","1","Intensity or strength of the texture.It is commonly used by materials to fine tune the intensity of the texture"],["uAng","uAng","NUM","0",`Define an offset on the texture to rotate around the u coordinates of the UVs
The angle is defined in radians.`],["uOffset","uOffset","NUM","0","Define an offset on the texture to offset the u coordinates of the UVs"],["uRotationCenter","uRotationCenter","NUM","0","Defines the center of rotation (U)"],["uScale","uScale","NUM","1","Define an offset on the texture to scale the u coordinates of the UVs"],["url","url","TEXT","","Define the url of the texture."],["vAng","vAng","NUM","0",`Define an offset on the texture to rotate around the v coordinates of the UVs
The angle is defined in radians.`],["vOffset","vOffset","NUM","0","Define an offset on the texture to offset the v coordinates of the UVs"],["vRotationCenter","vRotationCenter","NUM","0","Defines the center of rotation (V)"],["vScale","vScale","NUM","1","Define an offset on the texture to scale the v coordinates of the UVs"],["wAng","wAng","NUM","0",`Define an offset on the texture to rotate around the w coordinates of the UVs (in case of 3d texture)
The angle is defined in radians.`],["wRotationCenter","wRotationCenter","NUM","0","Defines the center of rotation (W)"],["wrapR","wrapR","NUM","0",`0-CLAMP_ADDRESSMODE
1-WRAP_ADDRESSMODE
2-MIRROR_ADDRESSMODE`]]),S.CubeTexture=new h([["anisotropicFilteringLevel","anisotropicFilteringLevel","NUM","4",`With compliant hardware and browser (supporting anisotropic filtering)
this defines the level of anisotropic filtering in the texture.
The higher the better but the slower. This defaults to 4 as it seems to be the best tradeoff.`],["coordinatesMode","coordinatesMode","NUM","0",`How a texture is mapped. 
0-EXPLICIT_MODE
1-SPHERICAL_MODE
2-PLANAR_MODE
3-CUBIC_MODE
4-PROJECTION_MODE
5-SKYBOX_MODE
6-INVCUBIC_MODE
7-EQUIRECTANGULAR_MODE
8-FIXED_EQUIRECTANGULAR_MODE
9-FIXED_EQUIRECTANGULAR_MIRRORED_MODE`],["hasAlpha","hasAlpha","BOOL","FALSE","Define if the texture is having a usable alpha value (can be use for transparency or glossiness for instance)."],["invertZ","invertZ","BOOL","FALSE","Is Z inverted in the texture (useful in a cube texture)."],["level","level","NUM","1","Intensity or strength of the texture.It is commonly used by materials to fine tune the intensity of the texture"],["url","url","TEXT","","Define the url of the texture."],["rotationY","rotationY","NUM","","Sets or gets texture matrix rotation angle around Y axis in radians. "],["wrapU","wrapU","NUM","",`0-CLAMP_ADDRESSMODE
1-WRAP_ADDRESSMODE
2-MIRROR_ADDRESSMODE`],["wrapV","wrapV","NUM","",`0-CLAMP_ADDRESSMODE
1-WRAP_ADDRESSMODE
2-MIRROR_ADDRESSMODE`]]),e.Msg.MAT_GET_TEX_TITLE="get texture",e.Msg.MAT_GET_TEX_TOOLTIP="",e.Msg.MAT_GET_TEX_HELP_URL="",e.Blocks.create_material={init(){this.appendDummyInput().appendField("create").appendField(new e.FieldDropdown(()=>S.materialType.generatMenu()),"TYPE");const i=this.appendValueInput("NAME").setCheck("String").appendField("name");this.setStyle("material_style"),this.setInputsInline(!0),this.setOutput(!0,"Material"),this.setTooltip(""),this.setHelpUrl(""),o(i,"TEXT","")}},e.Blocks.create_node_material_from_json={init(){this.appendDummyInput().appendField("create NodeMaterial"),this.appendValueInput("JSON").setCheck("Object").appendField("from JSON");const i=this.appendValueInput("ROOT").setCheck(null).appendField("rootUrl");this.setStyle("material_style"),this.setInputsInline(!0),this.setOutput(!0,"Material"),this.setTooltip(""),this.setHelpUrl(""),o(i,"TEXT","./assets/json")}},e.Blocks.set_get_material_prop={init(){const i=this,t=D();this.appendDummyInput().appendField(new e.FieldDropdown([["set","set"],["get","get"]],n=>{const a=n==="set";t.updateShape_.call(i,a),t.updateValueInput_.call(i,a)}),"METHOD"),this.appendValueInput("MATERIAL").appendField("material").appendField(new e.FieldDropdown(()=>S.materialType.generatMenu(),n=>i.updateKeyField(n)),"TYPE").setCheck("Material"),this.appendDummyInput("KEY_INPUT"),this.setStyle("material_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip("Sets or gets material's properties"),this.setHelpUrl(""),this.mixin(t),t.updateValueInput_.call(i,!0),this.updateKeyField("StandardMaterial"),o(i.getInput("VALUE"),"NUM","1")},updateKeyField(i){const t=this,n=t.getInput("KEY_INPUT");n.removeField("KEY",!0),n.appendField(new e.FieldDropdown(()=>S[i].generatMenu(),a=>{t.getFieldValue("METHOD")==="set"&&S[i].updateShape(t,t.getInput("VALUE"),a),t.getFieldValue("METHOD")==="get"&&S[i].updateTooltip(t,a)}),"KEY")}},e.Blocks.get_material_by_mesh={init:function(){const i=this.appendValueInput("MESH").setCheck("Mesh").appendField("get material");this.setStyle("material_style"),this.setInputsInline(!0),this.setOutput(!0,"Material"),this.setTooltip(""),this.setHelpUrl(""),o(i,"MESH","")}},e.Blocks.remove_material={init(){this.appendValueInput("MATERIAL").appendField("remove material").setCheck("Material"),this.setStyle("material_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setHelpUrl("")}},e.Blocks.create_texture={init:function(){this.appendDummyInput().appendField("create").appendField(new e.FieldDropdown(()=>S.textureType.generatMenu()),"TYPE");const i=this.appendValueInput("URL").setCheck("String").appendField("url");this.setStyle("material_style"),this.setInputsInline(!0),this.setOutput(!0,"Texture"),this.setTooltip("Create a new texture"),this.setHelpUrl(""),o(i,"TEXT","./assets/texture/grass.jpg")}},e.Blocks.set_get_texture_prop={init(){const i=this,t=D();this.appendDummyInput().appendField(new e.FieldDropdown([["set","set"],["get","get"]],n=>{const a=n==="set";t.updateShape_.call(i,a),t.updateValueInput_.call(i,a)}),"METHOD"),this.appendValueInput("TEXTURE").appendField(new e.FieldDropdown(()=>S.textureType.generatMenu(),n=>i.updateKeyField(n)),"TYPE").setCheck("Texture"),this.appendDummyInput("KEY_INPUT"),this.setStyle("material_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setHelpUrl(""),this.mixin(t),t.updateValueInput_.call(i,!0),this.updateKeyField("Texture"),o(i.getInput("VALUE"),"NUM","4")},updateKeyField(i){const t=this,n=t.getInput("KEY_INPUT");n.removeField("KEY",!0),n.appendField(new e.FieldDropdown(()=>S[i].generatMenu(),a=>{t.getFieldValue("METHOD")==="set"&&S[i].updateShape(t,t.getInput("VALUE"),a),t.getFieldValue("METHOD")==="get"&&S[i].updateTooltip(t,a)}),"KEY")}},e.Blocks.remove_texture={init(){this.appendValueInput("TEXTURE").appendField("remove texture").setCheck("Material"),this.setStyle("material_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setHelpUrl("")}},e.Blocks.material_color3={init:function(){const i=this.appendValueInput("R").setCheck("Number").appendField("R"),t=this.appendValueInput("G").setCheck("Number").appendField("G"),n=this.appendValueInput("B").setCheck("Number").appendField("B");this.setStyle("material_style"),this.setInputsInline(!0),this.setOutput(!0,"Color3"),this.setTooltip(e.Msg.MAT_GET_TEX_TOOLTIP),this.setHelpUrl(e.Msg.MAT_GET_TEX_HELP_URL),o(i,"NUM","255"),o(t,"NUM","255"),o(n,"NUM","255")}},e.Blocks.material_color4={init:function(){const i=this.appendValueInput("R").setCheck("Number").appendField("R"),t=this.appendValueInput("G").setCheck("Number").appendField("G"),n=this.appendValueInput("B").setCheck("Number").appendField("B"),a=this.appendValueInput("A").setCheck("Number").appendField("A");this.setStyle("material_style"),this.setInputsInline(!0),this.setOutput(!0,"Color4"),this.setTooltip("Used to hold a RBGA color"),this.setHelpUrl(),o(i,"NUM","255"),o(t,"NUM","255"),o(n,"NUM","255"),o(a,"NUM","255")}},e.Blocks.field_color3={init:function(){this.appendDummyInput().appendField("R").appendField(new e.FieldNumber("255"),"R").appendField("G").appendField(new e.FieldNumber("255"),"G").appendField("B").appendField(new e.FieldNumber("255"),"B"),this.setStyle("material_style"),this.setInputsInline(!0),this.setOutput(!0,"Color3"),this.setTooltip("Used to hold a RGB color"),this.setHelpUrl()}},e.Blocks.field_color4={init:function(){this.appendDummyInput().appendField("R").appendField(new e.FieldNumber("255"),"R").appendField("G").appendField(new e.FieldNumber("255"),"G").appendField("B").appendField(new e.FieldNumber("255"),"B").appendField("A").appendField(new e.FieldNumber("255"),"A"),this.setStyle("material_style"),this.setInputsInline(!0),this.setOutput(!0,"Color4"),this.setTooltip("Used to hold a RBGA color"),this.setHelpUrl()}},e.Blocks.material_color3_from_hex={init:function(){this.appendDummyInput().appendField("Color3");const i=this.appendValueInput("HEX").setCheck("String").appendField("from hex");this.setStyle("material_style"),this.setInputsInline(!0),this.setOutput(!0,"Color3"),this.setTooltip(e.Msg.MAT_GET_TEX_TOOLTIP),this.setHelpUrl(e.Msg.MAT_GET_TEX_HELP_URL),o(i,"TEXT","#ff0000")}},e.Blocks.material_color4_from_hex={init:function(){this.appendDummyInput().appendField("Color4");const i=this.appendValueInput("HEX").setCheck("String").appendField("from hex");this.setStyle("material_style"),this.setInputsInline(!0),this.setOutput(!0,"Color4"),this.setTooltip(e.Msg.MAT_GET_TEX_TOOLTIP),this.setHelpUrl(e.Msg.MAT_GET_TEX_HELP_URL),o(i,"TEXT","#ffffffff")}};const it={},F=[1,1,1];it.vectorArithmetic=new h([["add","add","VECTOR3",F,"Gets a new Vector3, result of the addition the current Vector3 and the given vector"],["center","Center","VECTOR3",F,'Returns a new Vector3 located at the center between "value1" and "value2"'],["cross","Cross","VECTOR3",F,'Returns a new Vector3 as the cross product of the vectors "left" and "right" The cross product is then orthogonal to both "left" and "right"'],["distance","Distance","VECTOR3",F,'Returns the distance between the vectors "value1" and "value2"'],["divide","divide","VECTOR3",F,"Returns a new Vector3 set with the result of the division of the current Vector3 coordinates by the given ones"],["dot","Dot","VECTOR3",F,'Returns the dot product (float) between the vectors "left" and "right"'],["length","length","VECTOR3",F,"Gets the length of the Vector3"],["multiply","multiply","VECTOR3",F,"Returns a new Vector3, result of the multiplication of the current Vector3 by the given vector"],["negate","negate","VECTOR3",F,"Gets a new Vector3 set with the current Vector3 negated coordinates"],["normalize","normalize","VECTOR3",F,"Normalize the current Vector3. Please note that this is an in place operation."],["scale","scale","NUM","1",'Returns a new Vector3 set with the current Vector3 coordinates multiplied by the float "scale"'],["subtract","subtract","VECTOR3",F,"Returns a new Vector3, result of the subtraction of the given vector from the current Vector3"]]),e.Blocks.math_vector2={init:function(){const i=this.appendValueInput("X").setCheck("Number").appendField("X"),t=this.appendValueInput("Y").setCheck("Number").appendField("Y");this.setStyle("math_style"),this.setInputsInline(!0),this.setOutput(!0,"Vector2"),this.setTooltip("A vector containing 2 coordinates"),this.setHelpUrl("https://doc.babylonjs.com/typedoc/classes/babylon.vector2"),o(i,"NUM",""),o(t,"NUM","")}},e.Blocks.math_vector3={init:function(){const i=this.appendValueInput("X").setCheck("Number").appendField("X"),t=this.appendValueInput("Y").setCheck("Number").appendField("Y"),n=this.appendValueInput("Z").setCheck("Number").appendField("Z");this.setStyle("math_style"),this.setInputsInline(!0),this.setOutput(!0,"Vector3"),this.setTooltip("A Vector3 is the main object used in 3D geometry It can represent etiher the coordinates of a point the space, either a direction. Reminder: js uses a left handed forward facing system"),this.setHelpUrl("https://doc.babylonjs.com/typedoc/classes/babylon.vector3"),o(i,"NUM",""),o(t,"NUM",""),o(n,"NUM","")}},e.Blocks.math_vector4={init:function(){const i=this.appendValueInput("X").setCheck("Number").appendField("X"),t=this.appendValueInput("Y").setCheck("Number").appendField("Y"),n=this.appendValueInput("Z").setCheck("Number").appendField("Z");this.appendValueInput("W").setCheck("Number").appendField("W"),this.setStyle("math_style"),this.setInputsInline(!0),this.setOutput(!0,"Vector4"),this.setTooltip("Created for EulerAngle class conversion to Quaternion"),this.setHelpUrl("https://doc.babylonjs.com/typedoc/classes/babylon.vector4"),o(i,"NUM",""),o(t,"NUM",""),o(n,"NUM","")}},e.Blocks.field_vector2={init:function(){this.appendDummyInput().appendField("X").appendField(new e.FieldNumber("0"),"X").appendField("Y").appendField(new e.FieldNumber("0"),"Y"),this.setStyle("math_style"),this.setInputsInline(!0),this.setOutput(!0,"Vector2"),this.setTooltip("A vector containing 2 coordinates"),this.setHelpUrl("https://doc.babylonjs.com/typedoc/classes/babylon.vector2")}},e.Blocks.field_vector3={init:function(){this.appendDummyInput().appendField("X").appendField(new e.FieldNumber("0"),"X").appendField("Y").appendField(new e.FieldNumber("0"),"Y").appendField("Z").appendField(new e.FieldNumber("0"),"Z"),this.setStyle("math_style"),this.setInputsInline(!0),this.setOutput(!0,"Vector3"),this.setTooltip("A Vector3 is the main object used in 3D geometry It can represent etiher the coordinates of a point the space, either a direction. Reminder: js uses a left handed forward facing system"),this.setHelpUrl("https://doc.babylonjs.com/typedoc/classes/babylon.vector3")}},e.Blocks.field_vector4={init:function(){this.appendDummyInput().appendField("X").appendField(new e.FieldNumber("0"),"X").appendField("Y").appendField(new e.FieldNumber("0"),"Y").appendField("Z").appendField(new e.FieldNumber("0"),"Z").appendField("W").appendField(new e.FieldNumber("0"),"W"),this.setStyle("math_style"),this.setInputsInline(!0),this.setOutput(!0,"Vector4"),this.setTooltip("Created for EulerAngle class conversion to Quaternion"),this.setHelpUrl("https://doc.babylonjs.com/typedoc/classes/babylon.vector4")}},e.Blocks.math_clone_vector={init:function(){this.appendValueInput("VECTOR").appendField("clone vector").setCheck(["Vector2","Vector3","Vector4"]),this.setStyle("math_style"),this.setInputsInline(!0),this.setOutput(!0,null),this.setTooltip("Created for EulerAngle class conversion to Quaternion"),this.setHelpUrl("https://doc.babylonjs.com/typedoc/classes/babylon.vector4")}},e.Blocks.math_arithmetic_vector={init(){const i=this,t=this.appendValueInput("VECTOR_A").setCheck("Vector3").setAlign(e.ALIGN_RIGHT);this.appendDummyInput("OPERATEOR").appendField(new e.FieldDropdown(()=>it.vectorArithmetic.generatMenu(),a=>i._updateShadpe(a)),"METHOD");const n=this.appendValueInput("VECTOR_B").setAlign(e.ALIGN_RIGHT);this.setInputsInline(!0),this.setStyle("math_style"),this.setOutput(!0,null),this.setTooltip(""),this.setHelpUrl(""),o(t,"VECTOR3",[1,1,1]),o(n,"VECTOR3",[1,1,1])},_updateShadpe(i){const t=this;if(this.getInput("VECTOR_B")&&this.removeInput("VECTOR_B"),!["length","negate","normalize"].includes(i)){const a=this.appendValueInput("VECTOR_B").setAlign(e.ALIGN_RIGHT);o(a,"VECTOR3",[1,1,1]),it.vectorArithmetic.updateShape(t,t.getInput("VECTOR_B"),i)}}};const nt={};nt.gizmoProps=new h([["attachableMeshes","attachableMeshes","NULL","","Array of meshes which will have the gizmo attached when a pointer selected them. If null, all meshes are attachable. (Default: null)"],["positionGizmoEnabled","positionGizmoEnabled","BOOL","TRUE","If the position gizmo is enabled"],["rotationGizmoEnabled","rotationGizmoEnabled","BOOL","TRUE","If the rotation gizmo is enabled"],["scaleGizmoEnabled","scaleGizmoEnabled","BOOL","TRUE","If the scale gizmo is enabled"],["boundingBoxGizmoEnabled","boundingBoxGizmoEnabled","BOOL","TRUE","If the boundingBox gizmo is enabled"]]),nt.features=new h([["Linux","LINUX"],["Windows","WINDOWS"],["macOS","MACOS"],["IOS","IOS"],["Android","ANDROID"],["Mobile","MOBILE"],["Chrome","CHROME"],["Firefox","FIREFOX"],["Edge","EDGE"],["Safari","SAFARI"],["Touch","TOUCH"],["Retina","RETINA"],["WebAudioApi","WEBAUDIO"],["WebGL2.0","WEBGL2"],["doNotTrack","DO_NOT_TRACK"]]),e.Blocks.display_axes={init(){this.appendDummyInput().appendField("display axes");const i=this.appendValueInput("SIZE").appendField("size").setCheck("Number").setAlign(e.ALIGN_RIGHT);this.appendValueInput("PARENT").appendField("parent").setCheck(null).setAlign(e.ALIGN_RIGHT),this.setStyle("tools_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip("It is often useful to be able to quickly display world and local axes to see position and rotation for example. "),this.setHelpUrl(""),o(i,"NUM","1")}},e.Blocks.feature_available={init(){this.appendDummyInput().appendField("feature available").appendField(new e.FieldDropdown(()=>nt.features.generatMenu()),"FEATURE"),this.setStyle("tools_style"),this.setInputsInline(!0),this.setOutput(!0,"Boolean"),this.setHelpUrl(""),this.setTooltip("Check if a feature is available in the user's browser.")}};const Oe={controlProps:new h([["alpha","alpha","NUM","","Gets or sets alpha value for the control (1 means opaque and 0 means entirely transparent)"],["isEnabled","isEnabled","BOOL","TRUE","Gets or sets if control is Enabled"],["isHitTestVisible","isHitTestVisible","BOOL","TRUE","Gets or sets a boolean indicating if the control can be hit with pointer events"],["isVisible","isVisible","BOOL","TRUE","Gets or sets a boolean indicating if the control is visible"],["isPointerBlocker","isPointerBlocker","BOOL","TRUE","Gets or sets a boolean indicating if the control can block pointer events"],["scaleX","scaleX","NUM","1","Gets or sets a value indicating the scale factor on X axis (1 by default)"],["scaleY","scaleY","NUM","1","Gets or sets a value indicating the scale factor on Y axis (1 by default)"],["transformCenterX","transformCenterX","NUM","","Gets or sets the transformation center on X axis (0 by default)"],["transformCenterY","transformCenterY","NUM","","Gets or sets the transformation center on Y axis (0 by default)"]])};e.Blocks.create_fullscreen_UI={init(){this.appendDummyInput().appendField("create fullscreen UI");const i=this.appendValueInput("NAME").appendField("name").setCheck("String").setAlign(e.ALIGN_RIGHT);this.appendValueInput("JSON").appendField("from JSON").setCheck(null).setAlign(e.ALIGN_RIGHT),this.setStyle("gui_style"),this.setInputsInline(!0),this.setOutput(!0),this.setTooltip("Recreate the content of the GUI from a JSON object"),this.setHelpUrl(""),o(i,"TEXT","")}},e.Blocks.gui_get_control={init(){this.appendDummyInput().appendField("get control");const i=this.appendValueInput("NAME").setCheck("String").setAlign(e.ALIGN_RIGHT);this.appendValueInput("ADT").appendField("from UI").setCheck("String").setAlign(e.ALIGN_RIGHT),this.setStyle("gui_style"),this.setInputsInline(!0),this.setOutput(!0,["Control","Object"]),this.setTooltip(""),this.setHelpUrl(""),o(i,"TEXT","")}},e.Blocks.gui_control_prop={init(){const i=this,t=D();let n;this.appendValueInput("CONTROL").appendField(new e.FieldDropdown([["set","set"],["get","get"]],a=>{n=a==="set",t.updateShape_.call(i,n),t.updateValueInput_.call(i,n),n&&Oe.controlProps.updateShape(i,i.getInput("VALUE"),i.getFieldValue("PROP")),!n&&Oe.controlProps.updateTooltip(i,i.getFieldValue("PROP"))}),"METHOD").appendField("control").setCheck("Control"),this.appendDummyInput().appendField(new e.FieldDropdown(()=>Oe.controlProps.generatMenu(),a=>{n&&Oe.controlProps.updateShape(i,i.getInput("VALUE"),a)}),"PROP").setAlign(e.ALIGN_RIGHT),this.setStyle("gui_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setHelpUrl(""),this.mixin(t),t.updateValueInput_.call(i,!0),o(i.getInput("VALUE"),"NUM","")}},e.Blocks.gui_get_control_value={init(){this.appendValueInput("CONTROL").appendField("get control").setCheck("Control"),this.appendDummyInput().appendField("value").setAlign(e.ALIGN_RIGHT),this.setStyle("gui_style"),this.setInputsInline(!0),this.setOutput(!0,["Number","String","Boolean","Color3"]),this.setTooltip("Returns the value of the control."),this.setHelpUrl("")}},e.Blocks.gui_get_child_controls={init(){this.appendValueInput("CONTROL").appendField("get control").setCheck("Control"),this.appendDummyInput().appendField(new e.FieldDropdown([["directChildren","directChildren"],["allChildren","allChildren"]]),"CHILDREN"),this.appendDummyInput().appendField("type").appendField(new e.FieldDropdown([["none","none"],["TextBlock","TextBlock"],["InputText","InputText"],["InputPassword","InputPassword"],["Button","Button"],["Checkbox","Checkbox"],["RadioButton","RadioButton"],["ColorPicker","ColorPicker"],["Slider","Slider"],["ImageBasedSlider","ImageBasedSlider"]]),"TYPE"),this.setStyle("gui_style"),this.setInputsInline(!0),this.setOutput(!0,"Array"),this.setTooltip("Will return all controls that have this control as ascendant"),this.setHelpUrl("")}},e.Blocks.gui_event={init:function(){this.appendDummyInput().appendField("on event of").appendField(new e.FieldDropdown([["pointerClick","pointerClick"],["pointerDown","pointerDown"],["pointerEnter","pointerEnter"],["pointerMove","pointerMove"],["pointerOut","pointerOut"],["pointerUp","pointerUp"],["textChanged","textChanged"],["valueChanged","valueChanged"],["wheel","wheel"]]),"EVENT_TYPE"),this.appendValueInput("CONTROL").appendField("for control").setAlign(e.ALIGN_RIGHT).setCheck("Control"),this.appendStatementInput("DO_CB").setCheck(null).appendField("do").setAlign(e.ALIGN_RIGHT),this.setStyle("gui_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip(""),this.setHelpUrl("")}},e.Blocks.gui_move_control_to_vector={init(){this.appendValueInput("CONTROL").appendField("move control").setCheck(null);const i=this.appendValueInput("TARGET").appendField("to").setCheck("Vector3").setAlign(e.ALIGN_RIGHT);this.setStyle("gui_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip(""),this.setHelpUrl(""),o(i,"VECTOR3",[0,0,0])}};const Xt={sliderOptions:new h([["min","min","NUM","0","The lowest value in the slider of permitted values."],["max","max","NUM","1","The greatest value in the slider of permitted values."],["step","step","NUM",".1","Constraints step of changes."],["value","value","NUM","0.5","The selected number."]])},Wn="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjQ2NTQ0NjQwMjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijk5OCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMzguNTIyOTQ3MjUgNDE0LjM3NTg2NTQyYTE3Ny42NzU5MjQ5NSAxNzcuNjc1OTI0OTUgMCAwIDEgMTc3LjY3NTkyNDk2LTE3Ny4xODc4MDQyNmg1OTEuNjAyMjU1NThBMTc3LjY3NTkyNDk1IDE3Ny42NzU5MjQ5NSAwIDAgMSA5ODUuNDc3MDUyNzUgNDE0LjM3NTg2NTQydjE5NS4yNDgyNjkxNmExNzcuNjc1OTI0OTUgMTc3LjY3NTkyNDk1IDAgMCAxLTE3Ny42NzU5MjQ5NiAxNzcuMTg3ODA0MjZIMjE2LjE5ODg3MjIxQTE3Ny42NzU5MjQ5NSAxNzcuNjc1OTI0OTUgMCAwIDEgMzguNTIyOTQ3MjUgNjA5LjYyNDEzNDU4eiBtMTc3LjY3NTkyNDk2LTExOC4xMjUyMDI4NUExMTguNjEzMzIzNTEgMTE4LjYxMzMyMzUxIDAgMCAwIDk3LjU4NTU0ODY5IDQxNC4zNzU4NjU0MnYxOTUuMjQ4MjY5MTZhMTE4LjYxMzMyMzUxIDExOC42MTMzMjM1MSAwIDAgMCAxMTguNjEzMzIzNTIgMTE4LjEyNTIwMjg1aDU5MS42MDIyNTU1OEExMTguNjEzMzIzNTEgMTE4LjYxMzMyMzUxIDAgMCAwIDkyNi40MTQ0NTEzMSA2MDkuNjI0MTM0NTh2LTE5NS4yNDgyNjkxNmExMTguNjEzMzIzNTEgMTE4LjYxMzMyMzUxIDAgMCAwLTExOC42MTMzMjM1Mi0xMTguMTI1MjAyODV6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSI5OTkiPjwvcGF0aD48cGF0aCBkPSJNMzE2LjI2MzYxMDE4IDUxMm0tMTI4Ljg2Mzg1NzY3IDBhMTI4Ljg2Mzg1NzY1IDEyOC44NjM4NTc2NSAwIDEgMCAyNTcuNzI3NzE1MyAwIDEyOC44NjM4NTc2NSAxMjguODYzODU3NjUgMCAxIDAtMjU3LjcyNzcxNTMgMFoiIGZpbGw9IiNmZmZmZmYiIHAtaWQ9IjEwMDAiPjwvcGF0aD48L3N2Zz4=",Kn="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjQ2NTI4NjY4MTYyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIwNjY1IiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik04MzIgMTI4YTEyOCAxMjggMCAwIDEgMTI4IDEyOHY1MTJhMTI4IDEyOCAwIDAgMS0xMjggMTI4SDE5MmExMjggMTI4IDAgMCAxLTEyOC0xMjhWMjU2YTEyOCAxMjggMCAwIDEgMTI4LTEyOHogbTAgODUuMzMzMzMzSDE5MmE0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMCAwLTQyLjY2NjY2NyA0Mi42NjY2Njd2NTEyYTQyLjY2NjY2NyA0Mi42NjY2NjcgMCAwIDAgNDIuNjY2NjY3IDQyLjY2NjY2N2g2NDBhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDAgMCA0Mi42NjY2NjctNDIuNjY2NjY3VjI1NmE0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMCAwLTQyLjY2NjY2Ny00Mi42NjY2Njd6IG0tNDU1Ljc2NTMzMyAxOTYuMDk2TDUxMiA1NDUuMTk0NjY3bDEzNS43NjUzMzMtMTM1Ljc2NTMzNGE0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMCAxIDYwLjMzMDY2NyA2MC4zNTJsLTE2NS45MzA2NjcgMTY1LjkzMDY2N2MtNy4wMTg2NjcgNy4wMTg2NjctMTUuODcyIDExLjA5MzMzMy0yNS4wMDI2NjYgMTIuMTgxMzMzbC0zLjQzNDY2NyAwLjI3NzMzNGgtMy40NTZhNDIuNTE3MzMzIDQyLjUxNzMzMyAwIDAgMS0yOC40MzczMzMtMTIuNDU4NjY3bC0xNjUuOTMwNjY3LTE2NS45MzA2NjdhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDAgMSA2MC4zMzA2NjctNjAuMzUyeiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iMjA2NjYiPjwvcGF0aD48L3N2Zz4=",Zn="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjQ2NTI4OTYwMzA1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIzNTk2IiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik04NjMuNTc2Mjg3IDIwOC45MzM1NDMgNDI2LjMxODU3MiA2NzMuNTI5OTA3IDEyOC4wODQxNjcgNDY0Ljc4MDU1OSA2NC4xMzI2NDYgNDk2Ljc0NjU5OCA0NDcuODY1MzA3IDg0OC40OTQ4MDEgOTU5LjUyNTU3IDIwOC45MzM1NDNaIiBwLWlkPSIyMzU5NyIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg==",qn="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjQ2NTQ0Nzc0MzM2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwMjgiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY1NS45NTI2NDM4OCAzNDQuMzUxNDQ3NjZoLTEwNy44MTYzODM1djMzNS4yOTcxMDQ2OEg1NzEuMjM5NzcxMTVhMzYuMTM2MjYwMzggMzYuMTM2MjYwMzggMCAwIDEgMzYuMTM2MjYwNDEgMzYuMTM2MjYwNDIgMzYuMTM2MjYwMzggMzYuMTM2MjYwMzggMCAwIDEtMzYuMTM2MjYwNDEgMzYuMTM2MjYwMzhoLTExOC40Nzk1NDIzYTM2LjEzNjI2MDM4IDM2LjEzNjI2MDM4IDAgMCAxLTM2LjEzNjI2MDQxLTM2LjEzNjI2MDM4IDM2LjEzNjI2MDM4IDM2LjEzNjI2MDM4IDAgMCAxIDM2LjEzNjI2MDQxLTM2LjEzNjI2MDQyaDIzLjY5NTkwODQ4di0zMzUuMjk3MTA0NjhoLTEwOC40MDg3ODEyMXYzNS41NDM4NjI2OGEzNi4xMzYyNjAzOCAzNi4xMzYyNjAzOCAwIDEgMS03MS42ODAxMjMxMSAwdi03MS42ODAxMjMxQTM1LjU0Mzg2MjY3IDM1LjU0Mzg2MjY3IDAgMCAxIDMzNC4yODA2ODY1OCAyNzUuMDQwOTE1MzloMzU1LjQzODYyNjg0YTM1LjU0Mzg2MjY3IDM1LjU0Mzg2MjY3IDAgMCAxIDM1LjU0Mzg2MjcyIDM2LjEzNjI2MDR2NzEuNjgwMTIzMWEzNi4xMzYyNjAzOCAzNi4xMzYyNjAzOCAwIDEgMS03MS42ODAxMjMxMiAweiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iMTAyOSI+PC9wYXRoPjxwYXRoIGQ9Ik0yMTIuMjQ2NzU4MDEgMTI4LjEyNjI4Mjk3YTE3Ny43MTkzMTM0MiAxNzcuNzE5MzEzNDIgMCAwIDAtMTc3LjcxOTMxMzQ2IDE3Ny43MTkzMTM0djQwNy41Njk2MjU1NmExNzcuNzE5MzEzNDIgMTc3LjcxOTMxMzQyIDAgMCAwIDE3Ny43MTkzMTM0NiAxNzcuNzE5MzEzNDJoNTk5LjUwNjQ4Mzk4YTE3Ny43MTkzMTM0MiAxNzcuNzE5MzEzNDIgMCAwIDAgMTc3LjcxOTMxMzQ2LTE3Ny43MTkzMTM0MnYtNDA1LjIwMDAzNDY5YTE3Ny43MTkzMTM0MiAxNzcuNzE5MzEzNDIgMCAwIDAtMTc3LjcxOTMxMzQ2LTE3Ny43MTkzMTM0MnogbS0xMDcuODE2MzgzNTEgMTc3LjcxOTMxMzRhMTA3LjIyMzk4NTc3IDEwNy4yMjM5ODU3NyAwIDAgMSAxMDcuODE2MzgzNTEtMTA3LjgxNjM4MzQ1aDU5OS41MDY0ODM5OGExMDcuMjIzOTg1NzcgMTA3LjIyMzk4NTc3IDAgMCAxIDEwNy44MTYzODM1MSAxMDcuODE2MzgzNDV2NDA3LjU2OTYyNTU2YTEwNy4yMjM5ODU3NyAxMDcuMjIzOTg1NzcgMCAwIDEtMTA3LjgxNjM4MzUxIDEwNy44MTYzODM0NkgyMTIuMjQ2NzU4MDFhMTA3LjIyMzk4NTc3IDEwNy4yMjM5ODU3NyAwIDAgMS0xMDcuODE2MzgzNTEtMTA3LjgxNjM4MzQ2eiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iMTAzMCI+PC9wYXRoPjwvc3ZnPg==",Bn="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjQ1MDE2MDcxNzkxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjYwMzc4IiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0xNjMuNzk3MzMzIDI0OS45NDEzMzNjMTI1LjQ0LTE2Ny4wODI2NjcgMzg1LjI4LTIxNS42OCA1NzAuMTk3MzM0LTEwMC42OTMzMzMgMTgyLjYxMzMzMyAxMTMuNDkzMzMzIDI0OS43NzA2NjcgMzMxLjc3NiAxNzQuOTMzMzMzIDUzNi42MTg2NjctNzAuNjEzMzMzIDE5My4zNjUzMzMtMjU2LjY4MjY2NyAyNjkuOTk0NjY3LTM5MC43ODQgMTcyLjcxNDY2Ni01MC4yMTg2NjctMzYuNDM3MzMzLTY5LjcxNzMzMy04Mi4xMzMzMzMtNzkuMTA0LTE1Ni4zMzA2NjZsLTQuNTIyNjY3LTQyLjE1NDY2Ny0xLjkyLTE2LjkzODY2N2MtNS4yNDgtMzkuODUwNjY3LTEzLjI2OTMzMy01Ny43MjgtMzAuMDgtNjcuMDcyLTIyLjgyNjY2Ny0xMi43MTQ2NjctMzguMDU4NjY3LTEzLjAxMzMzMy02OC4wNTMzMzMtMS40MDhsLTE0Ljk3NiA2LjIyOTMzNC03LjYzNzMzMyAzLjMyOGMtNDMuMjY0IDE4Ljc3MzMzMy03Mi4wMjEzMzMgMjUuMzg2NjY3LTEwOC40MTYgMTcuNzQ5MzMzbC04LjUzMzMzNC0yLjAwNTMzMy02Ljk5NzMzMy0yLjAwNTMzNGMtMTE4Ljk5NzMzMy0zNi44NjQtMTM2LjYxODY2Ny0xOTguMjcyLTI0LjEwNjY2Ny0zNDguMDMyeiBtNDEuOTg0IDI4Ni41NDkzMzRsNS4yNDggMS41MzYgNS43MTczMzQgMS4zMjI2NjZjMTguNzMwNjY3IDMuNzEyIDM0LjczMDY2NyAwLjY0IDYxLjMxMi0xMC4zMjUzMzNsMjUuNjg1MzMzLTEwLjk2NTMzM2M1MS4yODUzMzMtMjEuMDM0NjY3IDg0LjY5MzMzMy0yMy4wODI2NjcgMTI5Ljk2MjY2NyAyLjEzMzMzMyAzOS4xMjUzMzMgMjEuODAyNjY3IDU0LjQgNTUuMzgxMzMzIDYyLjE2NTMzMyAxMTMuNDkzMzMzbDIuMjYxMzMzIDE5LjU4NCAyLjM0NjY2NyAyMi42NTYgMi4wMDUzMzMgMTguMDQ4YzcuMzM4NjY3IDU4LjA2OTMzMyAyMC42OTMzMzMgODkuMTczMzMzIDUzLjI0OCAxMTIuODEwNjY3IDk3LjA2NjY2NyA3MC40IDIzNi4xMTczMzMgMTMuMTQxMzMzIDI5My4xMi0xNDIuODkwNjY3IDY0LjY4MjY2Ny0xNzcuMTUyIDcuNDI0LTM2My4yNjQtMTQ4LjY1MDY2Ni00NjAuMzMwNjY2LTE1Ni44LTk3LjQ1MDY2Ny0zNzkuNjkwNjY3LTU1Ljc2NTMzMy00ODUuMjQ4IDg0Ljc3ODY2Ni04OC41MzMzMzMgMTE3Ljg4OC03Ny42NTMzMzMgMjI1LjI4LTkuMTczMzM0IDI0OC4xNDkzMzR6IG00NzguOTMzMzM0LTg1LjA3NzMzNGE1My4zMzMzMzMgNTMuMzMzMzMzIDAgMSAxIDEwMi45OTczMzMtMjcuNjQ4IDUzLjMzMzMzMyA1My4zMzMzMzMgMCAwIDEtMTAyLjk5NzMzMyAyNy42NDh6IG0yMS4wNzczMzMgMTQ4LjgyMTMzNGE1My4zMzMzMzMgNTMuMzMzMzMzIDAgMSAxIDEwMy4wNC0yNy42MDUzMzQgNTMuMzMzMzMzIDUzLjMzMzMzMyAwIDAgMS0xMDMuMDQgMjcuNjA1MzM0ek02MDAuMzIgMzIzLjI4NTMzM2E1My4zMzMzMzMgNTMuMzMzMzMzIDAgMSAxIDEwMy4wNC0yNy42MDUzMzMgNTMuMzMzMzMzIDUzLjMzMzMzMyAwIDAgMS0xMDMuMDQgMjcuNjA1MzMzeiBtLTEuMTk0NjY3IDM4My45MTQ2NjdhNTMuMzMzMzMzIDUzLjMzMzMzMyAwIDEgMSAxMDIuOTk3MzM0LTI3LjYwNTMzMyA1My4zMzMzMzMgNTMuMzMzMzMzIDAgMCAxLTEwMi45OTczMzQgMjcuNjA1MzMzeiBtLTE0OS4yMDUzMzMtNDI1LjM4NjY2N2E1My4zMzMzMzMgNTMuMzMzMzMzIDAgMSAxIDEwMy4wNC0yNy42MDUzMzMgNTMuMzMzMzMzIDUzLjMzMzMzMyAwIDAgMS0xMDMuMDQgMjcuNjA1MzMzeiIgcC1pZD0iNjAzNzkiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=";e.Msg.GUI_CREATE_TOOLTIP="options\u63A5\u6536\u4E00\u4E2A\u5BF9\u8C61\u53C2\u6570\uFF0C\u5176\u4E2D\u7684container\u5C5E\u6027\u662F\u754C\u9762\u6240\u8981\u6302\u8F7D\u7684DOM\u5143\u7D20\u3002",e.Msg.GUI_CREATE_HELP_URL="https://cocopon.github.io/tweakpane/getting-started.html",e.Blocks.create_tweak_pane={init(){this.appendDummyInput().appendField("create pane");const i=this.appendValueInput("TITLE").appendField("title").setCheck("String");this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setStyle("tweak_pane_style"),this.setTooltip("Create an instance of a pane"),this.setHelpUrl(""),o(i,"TEXT","")}},e.Blocks.pane_add_folder={init(){const i=this.appendValueInput("TITLE").appendField("add folder").appendField("title").setCheck("String");this.setInputsInline(!0),this.setOutput(!0,null),this.setStyle("tweak_pane_style"),this.setTooltip("Add folder to the pane"),this.setHelpUrl(""),o(i,"TEXT","")}},e.Blocks.pane_slider_options={init(){const i=this,t=this.appendValueInput("VALUE").appendField("set").appendField(new e.FieldDropdown(()=>Xt.sliderOptions.generatMenu(),n=>Xt.sliderOptions.updateShape(i,i.getInput("VALUE"),n)),"KEY").appendField("to").setCheck(null);this.setStyle("tweak_pane_style"),this.setInputsInline(!1),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip(""),this.setHelpUrl(""),this.mixin(R("object_create")),o(t,"TEXT","")}},e.Blocks.pane_add_slider={init(){this.appendValueInput("FOLDER").appendField(new e.FieldImage(Wn,18,18)).appendField("add slider").appendField("to").setCheck(null);const i=this.appendValueInput("LABEL").appendField("label").setAlign(e.ALIGN_RIGHT).setCheck("String");this.appendValueInput("OPTIONS").appendField("options").setAlign(e.ALIGN_RIGHT).setCheck("Object"),this.appendStatementInput("DO_CB").setCheck(null).setAlign(e.ALIGN_RIGHT).appendField("on change"),this.setStyle("tweak_pane_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip("Add slider to the pane"),this.setHelpUrl(""),this.mixin(O("pane_slider_options","option")),o(i,"TEXT","")}},e.Blocks.pane_add_list={init(){this.appendValueInput("FOLDER").appendField(new e.FieldImage(Kn,18,18)).appendField("add list").appendField("to").setCheck(null);const i=this.appendValueInput("LABEL").appendField("label").setAlign(e.ALIGN_RIGHT).setCheck("String");this.appendValueInput("OPTIONS").appendField("options").setAlign(e.ALIGN_RIGHT).setCheck("Object"),this.appendStatementInput("DO_CB").setCheck(null).setAlign(e.ALIGN_RIGHT).appendField("on change"),this.setStyle("tweak_pane_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip("Add list to the pane"),this.setHelpUrl(""),this.mixin(O("pane_get_value","get value")),o(i,"TEXT","")}},e.Blocks.pane_add_checkbox={init(){this.appendValueInput("FOLDER").appendField(new e.FieldImage(Zn,18,18)).appendField("add checkbox").appendField("to").setCheck(null);const i=this.appendValueInput("LABEL").appendField("label").setAlign(e.ALIGN_RIGHT).setCheck("String");this.appendDummyInput().appendField("checked").appendField(new e.FieldCheckbox("TRUE"),"CHECKED").setAlign(e.ALIGN_RIGHT),this.appendStatementInput("DO_CB").setCheck(null).setAlign(e.ALIGN_RIGHT).appendField("on change"),this.setStyle("tweak_pane_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip("Add checkbox to the pane"),this.setHelpUrl(""),this.mixin(O("pane_get_value","get value")),o(i,"TEXT","")}},e.Blocks.pane_add_text={init(){this.appendValueInput("FOLDER").appendField(new e.FieldImage(qn,18,18)).appendField("add text").appendField("to").setCheck(null);const i=this.appendValueInput("LABEL").appendField("label").setAlign(e.ALIGN_RIGHT).setCheck("String"),t=this.appendValueInput("TEXT").appendField("text").setAlign(e.ALIGN_RIGHT).setCheck("String");this.appendStatementInput("DO_CB").setCheck(null).setAlign(e.ALIGN_RIGHT).appendField("on change"),this.setStyle("tweak_pane_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip("Add text to the pane"),this.setHelpUrl(""),this.mixin(O("pane_get_value","get value")),o(i,"TEXT",""),o(t,"TEXT","")}},e.Blocks.pane_add_color={init(){this.appendValueInput("FOLDER").appendField(new e.FieldImage(Bn,18,18)).appendField("add color").appendField("to").setCheck(null);const i=this.appendValueInput("LABEL").appendField("label").setAlign(e.ALIGN_RIGHT).setCheck("String"),t=this.appendValueInput("COLOR").appendField("hex").setAlign(e.ALIGN_RIGHT).setCheck("String");this.appendStatementInput("DO_CB").setCheck(null).setAlign(e.ALIGN_RIGHT).appendField("on change"),this.setStyle("tweak_pane_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip("Add color to the pane"),this.setHelpUrl(""),this.mixin(O("pane_get_value","get value")),o(i,"TEXT",""),o(t,"TEXT","#ff0000")}},e.Blocks.pane_add_button={init(){this.appendValueInput("FOLDER").appendField(new e.FieldImage(Qi,18,18)).appendField("add button").appendField("to").setCheck(null);const i=this.appendValueInput("TITLE").appendField("title").setAlign(e.ALIGN_RIGHT).setCheck("String");this.appendStatementInput("DO_CB").setCheck(null).setAlign(e.ALIGN_RIGHT).appendField("on click"),this.setStyle("tweak_pane_style"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setTooltip("Add button to the pane"),this.setHelpUrl(""),o(i,"TEXT","")}},e.Blocks.pane_get_value={init(){this.appendDummyInput().appendField("get value"),this.setInputsInline(!0),this.setOutput(!0),this.setStyle("tweak_pane_style"),this.setTooltip(""),this.setHelpUrl("https://zjbcool.com/v3d-plugins/gui/gui.html#create-gui")}};const ea={kind:"categoryToolbox",contents:[{kind:"category",cssConfig:{icon:"textIcon sizeSmall",label:"labelNone"},categorystyle:"text_style",contents:[{kind:"label",text:"Text:"},{kind:"block",type:"text"},{kind:"block",type:"text_multiline"},{kind:"block",type:"text_join"},{kind:"block",type:"text_append"},{kind:"block",type:"text_length"},{kind:"block",type:"text_isEmpty"},{kind:"block",type:"text_indexOf"},{kind:"block",type:"text_charAt"},{kind:"block",type:"text_getSubstring"},{kind:"block",type:"text_changeCase"},{kind:"block",type:"text_trim"},{kind:"block",type:"text_count"},{kind:"block",type:"text_replace"},{kind:"block",type:"text_reverse"}]},{kind:"category",cssConfig:{icon:"numberIcon sizeSmall",label:"labelNone"},categorystyle:"math_style",contents:[{kind:"label",text:"Math:"},{kind:"block",type:"math_number"},{kind:"block",type:"math_angle"},{kind:"block",type:"math_arithmetic",inputs:{A:{shadow:{type:"math_number",fields:{NUM:"1"}}},B:{shadow:{type:"math_number",fields:{NUM:"1"}}}}},{kind:"block",type:"math_single",inputs:{NUM:{shadow:{type:"math_number",fields:{NUM:"9"}}}}},{kind:"block",type:"math_trig",inputs:{NUM:{shadow:{type:"math_number",fields:{NUM:"45"}}}}},{kind:"block",type:"math_constant"},{kind:"block",type:"math_number_property",inputs:{NUMBER_TO_CHECK:{shadow:{type:"math_number",fields:{NUM:"0"}}}}},{kind:"block",type:"math_round",inputs:{NUM:{shadow:{type:"math_number",fields:{NUM:"3.1"}}}}},{kind:"block",type:"math_on_list"},{kind:"block",type:"math_modulo",inputs:{DIVIDEND:{shadow:{type:"math_number",fields:{NUM:"64"}}},DIVISOR:{shadow:{type:"math_number",fields:{NUM:"10"}}}}},{kind:"block",type:"math_constrain",inputs:{VALUE:{shadow:{type:"math_number",fields:{NUM:"50"}}},LOW:{shadow:{type:"math_number",fields:{NUM:"1"}}},HIGH:{shadow:{type:"math_number",fields:{NUM:"100"}}}}},{kind:"block",type:"math_random_int",inputs:{FROM:{shadow:{type:"math_number",fields:{NUM:"1"}}},TO:{shadow:{type:"math_number",fields:{NUM:"100"}}}}},{kind:"block",type:"math_random_float"},{kind:"block",type:"math_atan2",inputs:{X:{shadow:{type:"math_number",fields:{NUM:"1"}}},Y:{shadow:{type:"math_number",fields:{NUM:"1"}}}}},{kind:"block",type:"math_radians_degrees"},{kind:"block",type:"math_mix"},{kind:"block",type:"math_remap"},{kind:"label",text:"Vector:"},{kind:"block",type:"math_vector2"},{kind:"block",type:"math_vector3"},{kind:"block",type:"math_clone_vector"},{kind:"block",type:"math_arithmetic_vector"}]},{kind:"category",cssConfig:{icon:"arrayIcon sizeSmall",label:"labelNone"},categorystyle:"list_style",contents:[{kind:"label",text:"Array:"},{kind:"block",type:"array_create"},{kind:"block",type:"array_repeat",inputs:{NUM:{shadow:{type:"math_number",fields:{NUM:"5"}}}}},{kind:"block",type:"array_length"},{kind:"block",type:"array_is_empty"},{kind:"block",type:"array_index_of"},{kind:"block",type:"array_includes"},{kind:"block",type:"array_get_index"},{kind:"block",type:"array_set_index"},{kind:"block",type:"array_get_subarray"},{kind:"block",type:"array_split"},{kind:"block",type:"array_sort"},{kind:"block",type:"array_reverse"},{kind:"block",type:"array_for_each"},{kind:"block",type:"array_find"}]},{kind:"category",cssConfig:{icon:"objectIcon sizeSmall",label:"labelNone"},categorystyle:"object_style",contents:[{kind:"label",text:"Object:"},{kind:"block",type:"object_create"},{kind:"block",type:"object_member"},{kind:"block",type:"object_keys"},{kind:"label",text:"JSON:"},{kind:"block",type:"convert_object_to_json"},{kind:"block",type:"convert_json_to_object"}]},{kind:"category",cssConfig:{icon:"logicIcon sizeSmall",label:"labelNone"},categorystyle:"logic_style",contents:[{kind:"label",text:"Logic:"},{kind:"block",type:"controls_if"},{kind:"block",type:"logic_compare"},{kind:"block",type:"logic_operation"},{kind:"block",type:"logic_negate"},{kind:"block",type:"logic_boolean"},{kind:"block",type:"logic_null"},{kind:"block",type:"logic_ternary"}]},{kind:"category",cssConfig:{icon:"loopIcon sizeSmall",label:"labelNone"},categorystyle:"loop_style",contents:[{kind:"label",text:"Loops:"},{kind:"block",type:"controls_repeat_ext",inputs:{TIMES:{shadow:{type:"math_number",fields:{NUM:"10"}}}}},{kind:"block",type:"controls_whileUntil"},{kind:"block",type:"controls_for",inputs:{FROM:{shadow:{type:"math_number",fields:{NUM:"1"}}},TO:{shadow:{type:"math_number",fields:{NUM:"10"}}},BY:{shadow:{type:"math_number",fields:{NUM:"1"}}}}},{kind:"block",type:"controls_forEach"},{kind:"block",type:"controls_flow_statements"}]},{kind:"category",cssConfig:{icon:"variableIcon sizeSmall",label:"labelNone"},categorystyle:"variable_style",custom:"VARIABLE"},{kind:"category",cssConfig:{icon:"functionIcon sizeSmall",label:"labelNone"},categorystyle:"procedure_style",custom:"PROCEDURE"},{kind:"category",cssConfig:{icon:"systemIcon sizeSmall",label:"labelNone"},categorystyle:"system_style",contents:[{kind:"label",text:"System:"},{kind:"block",type:"console_log",inputs:{TEXT:{shadow:{type:"text",fields:{TEXT:""}}}}},{kind:"block",type:"window_alert",inputs:{TEXT:{shadow:{type:"text",fields:{TEXT:""}}}}},{kind:"block",type:"text_prompt_ext",inputs:{TEXT:{shadow:{type:"text",fields:{TEXT:""}}}}},{kind:"block",type:"execute_tab"},{kind:"block",type:"get_tab_arg"},{kind:"block",type:"get_function_by_name"},{kind:"block",type:"set_get_glob_object"},{kind:"block",type:"set_get_local_storage_item"},{kind:"block",type:"local_storage_remove_item"},{kind:"block",type:"advanced_comment"},{kind:"block",type:"advanced_connect"}]},{kind:"sep"},{kind:"Category",cssConfig:{icon:"sceneIcon sizeSmall",label:"labelNone"},categorystyle:"scenes_style",contents:[{kind:"label",text:"Scenes:"},{kind:"block",type:"scene_create_custom_preloader"},{kind:"block",type:"scene_update_custom_preloader"},{kind:"block",type:"scene_assets_manager"},{kind:"block",type:"scene_load_asset"},{kind:"block",type:"scene_get_loaded_from_asset"},{kind:"block",type:"scene_on_finish_load"},{kind:"block",type:"set_scene_prop"},{kind:"block",type:"scene_create_default_environment"},{kind:"block",type:"scene_update_default_environment"},{kind:"block",type:"scene_get_environment_prop"},{kind:"block",type:"app_fullscreen"},{kind:"block",type:"app_pointer_lock"}]},{kind:"Category",cssConfig:{icon:"nodeIcon sizeSmall",label:"labelNone"},categorystyle:"nodes_style",contents:[{kind:"label",text:"Nodes:"},{kind:"block",type:"mesh_selector"},{kind:"block",type:"camera_selector"},{kind:"block",type:"light_selector"},{kind:"block",type:"create_transform_node"},{kind:"block",type:"node_get_all"},{kind:"block",type:"node_get_children"},{kind:"label",text:"Relations:"},{kind:"block",type:"node_parent"},{kind:"block",type:"node_is_child_of"},{kind:"label",text:"Enabled:"},{kind:"block",type:"node_set_enabled"}]},{kind:"Category",cssConfig:{icon:"meshIcon sizeSmall",label:"labelNone"},categorystyle:"meshes_style",contents:[{kind:"label",text:"Meshes:"},{kind:"block",type:"mesh_create_set_shapes"},{kind:"block",type:"mesh_create_decal"},{kind:"block",type:"set_get_mesh_prop"},{kind:"block",type:"set_get_mesh_transform"},{kind:"block",type:"translate_mesh"},{kind:"block",type:"rotate_mesh"},{kind:"block",type:"rotate_mesh_pov"},{kind:"block",type:"set_mesh_direction"},{kind:"block",type:"mesh_look_at"},{kind:"block",type:"remove_mesh"},{kind:"block",type:"mesh_set_parent"},{kind:"block",type:"clone_mesh"},{kind:"block",type:"mesh_create_instance"},{kind:"block",type:"drag_mesh"},{kind:"block",type:"check_point_behind_mesh"},{kind:"block",type:"check_intersects_mesh"},{kind:"block",type:"check_intersects_point"},{kind:"block",type:"mesh_add_lod_level"}]},{kind:"Category",cssConfig:{icon:"cameraIcon sizeSmall",label:"labelNone"},categorystyle:"cameras_style",contents:[{kind:"label",text:"Cameras:"},{kind:"block",type:"create_camera"},{kind:"block",type:"set_get_camera_prop"},{kind:"block",type:"set_get_active_camera"},{kind:"block",type:"remove_camera"},{kind:"block",type:"autorotate_camera"},{kind:"block",type:"bounce_camera"},{kind:"block",type:"zoom_camera"},{kind:"block",type:"camera_control_enabled"},{kind:"block",type:"camera_get_forward_ray"}]},{kind:"Category",cssConfig:{icon:"lightIcon sizeSmall",label:"labelNone"},categorystyle:"lights_style",contents:[{kind:"label",text:"Lights:"},{kind:"block",type:"create_light"},{kind:"block",type:"set_get_light_prop"},{kind:"block",type:"create_shadow"},{kind:"block",type:"set_shadow_prop"},{kind:"block",type:"add_shadow_caster"}]},{kind:"Category",cssConfig:{icon:"materialIcon sizeSmall",label:"labelNone"},categorystyle:"material_style",contents:[{kind:"label",text:"Materials:"},{kind:"block",type:"create_material"},{kind:"block",type:"create_node_material_from_json"},{kind:"block",type:"set_get_material_prop"},{kind:"block",type:"get_material_by_mesh"},{kind:"block",type:"remove_material"},{kind:"label",text:"Textures:"},{kind:"block",type:"create_texture"},{kind:"block",type:"remove_texture"},{kind:"block",type:"set_get_texture_prop"},{kind:"label",text:"Color:"},{kind:"block",type:"material_color3"},{kind:"block",type:"material_color3_from_hex"},{kind:"block",type:"material_color4"},{kind:"block",type:"material_color4_from_hex"}]},{kind:"Category",cssConfig:{icon:"eventIcon sizeSmall",label:"labelNone"},categorystyle:"events_style",contents:[{kind:"label",text:"Events:"},{kind:"block",type:"pointer_event"},{kind:"block",type:"picking_info"},{kind:"block",type:"keyboard_event"},{kind:"block",type:"get_key_input"},{kind:"block",type:"event_create_action"},{kind:"block",type:"event_add_actions"},{kind:"block",type:"create_custom_event"},{kind:"block",type:"dispatch_custom_event"},{kind:"block",type:"add_custom_event_listener"},{kind:"label",text:"Ray:"},{kind:"block",type:"create_ray"},{kind:"block",type:"ray_intersects_mesh"}]},{kind:"Category",cssConfig:{icon:"timeIcon sizeSmall",label:"labelNone"},categorystyle:"time_style",contents:[{kind:"label",text:"Time:"},{kind:"block",type:"time_after"},{kind:"block",type:"time_every_frame"},{kind:"block",type:"get_delta_time"},{kind:"block",type:"create_timer"},{kind:"block",type:"remove_timer"}]},{kind:"Category",cssConfig:{icon:"animateIcon sizeSmall",label:"labelNone"},categorystyle:"animation_style",contents:[{kind:"label",text:"Animation:"},{kind:"block",type:"get_animation_group_by_name"},{kind:"block",type:"set_get_animaiton_group_prop"},{kind:"block",type:"animation_group_playback"},{kind:"block",type:"animation_go_to_frame"},{kind:"block",type:"animation_blending"},{kind:"block",type:"transition_animation"}]},{kind:"category",cssConfig:{icon:"toolIcon sizeSmall",label:"labelNone"},categorystyle:"tools_style",contents:[{kind:"label",text:"Tools:"},{kind:"block",type:"display_axes"},{kind:"block",type:"feature_available"}]},{kind:"sep"},{kind:"Category",cssConfig:{icon:"guiIcon sizeSmall",label:"labelNone"},categorystyle:"gui_style",contents:[{kind:"label",text:"GUI:"},{kind:"block",type:"create_fullscreen_UI"},{kind:"block",type:"gui_get_control"},{kind:"block",type:"gui_control_prop"},{kind:"block",type:"gui_get_control_value"},{kind:"block",type:"gui_get_child_controls"},{kind:"block",type:"gui_event"},{kind:"block",type:"gui_move_control_to_vector"}]},{kind:"category",cssConfig:{icon:"tweakpaneIcon sizeSmall",label:"labelNone"},categorystyle:"tweak_pane_style",contents:[{kind:"label",text:"TweakPane:"},{kind:"button",text:"open document",callbackKey:"guiDocumentBtn"},{kind:"block",type:"create_tweak_pane"},{kind:"block",type:"pane_add_folder"},{kind:"block",type:"pane_add_slider"},{kind:"block",type:"pane_add_list"},{kind:"block",type:"pane_add_checkbox"},{kind:"block",type:"pane_add_text"},{kind:"block",type:"pane_add_color"},{kind:"block",type:"pane_add_button"},{kind:"block",type:"pane_get_value"}]}]};e.JavaScript.text_join=i=>{const t=e.JavaScript.statementToCode(i,"ITEM").trim();return t?[`${t.substring(0,t.length-1)}`,e.JavaScript.ORDER_FUNCTION_CALL]:""},e.JavaScript.text_item=i=>`${e.JavaScript.valueToCode(i,"ELEMENT",e.JavaScript.ORDER_NONE)||"''"} + `,e.JavaScript.math_angle=i=>[`${i.getFieldValue("ANGLE")}`,e.JavaScript.ORDER_FUNCTION_CALL],e.JavaScript.math_radians_degrees=i=>{const t=i.getFieldValue("METHOD"),n=e.JavaScript.valueToCode(i,"VALUE",e.JavaScript.ORDER_NONE)||"0";switch(t){case"radians":return[`BABYLON.Tools.ToRadians(${n})`,e.JavaScript.ORDER_FUNCTION_CALL];case"degrees":return[`BABYLON.Tools.ToDegrees(${n})`,e.JavaScript.ORDER_FUNCTION_CALL]}},e.JavaScript.math_mix=i=>{const t=e.JavaScript.valueToCode(i,"A",e.JavaScript.ORDER_NONE)||"0",n=e.JavaScript.valueToCode(i,"B",e.JavaScript.ORDER_NONE)||"0",a=e.JavaScript.valueToCode(i,"ALPHA",e.JavaScript.ORDER_NONE)||"0";return[`BABYLON.Tools.Mix(${t}, ${n}, ${a})`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.math_remap=i=>{const t=e.JavaScript.valueToCode(i,"INPUT",e.JavaScript.ORDER_NONE)||"''",n=e.JavaScript.valueToCode(i,"SOURCE_MIN",e.JavaScript.ORDER_NONE)||"''",a=e.JavaScript.valueToCode(i,"SOURCE_MAX",e.JavaScript.ORDER_NONE)||"''",s=e.JavaScript.valueToCode(i,"TARGET_MIN",e.JavaScript.ORDER_NONE)||"''",r=e.JavaScript.valueToCode(i,"TARGET_MAX",e.JavaScript.ORDER_NONE)||"''",p=`{
    input:${t},
    sourceMin:${n},
    sourceMax:${a},
    targetMin:${s},
    targetMax:${r},
  }`;return[`${e.JavaScript.provideFunction_("math_remap",[`
  // math_remap block
  function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(opts) { 
    return (opts.input - opts.sourceMin) / ((opts.sourceMax - opts.sourceMin) / (opts.targetMax - opts.targetMin)) + opts.targetMin
  }
     `])}(${p})`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.array_create=i=>{const t=e.JavaScript.statementToCode(i,"ITEM").trim();return[`[${t.substring(0,t.length-1)}]`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.empty_array=i=>["[]",e.JavaScript.ORDER_FUNCTION_CALL],e.JavaScript.array_create_element=i=>`${e.JavaScript.valueToCode(i,"ELEMENT",e.JavaScript.ORDER_NONE)||"''"}, `,e.JavaScript.array_repeat=function(i){const t=e.JavaScript.provideFunction_("listsRepeat",`
function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(value, n) {
  var array = [];
  for (var i = 0; i < n; i++) {
    array[i] = value;
  }
  return array;
}
`),n=e.JavaScript.valueToCode(i,"ITEM",e.JavaScript.ORDER_NONE)||"null",a=e.JavaScript.valueToCode(i,"NUM",e.JavaScript.ORDER_NONE)||"0";return[t+"("+n+", "+a+")",e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.array_length=function(i){return[(e.JavaScript.valueToCode(i,"VALUE",e.JavaScript.ORDER_MEMBER)||"[]")+".length",e.JavaScript.ORDER_MEMBER]},e.JavaScript.array_is_empty=function(i){const t=e.JavaScript.valueToCode(i,"VALUE",e.JavaScript.ORDER_MEMBER)||"[]";return["!"+t+".length",e.JavaScript.ORDER_LOGICAL_NOT]},e.JavaScript.array_index_of=function(i){const t=i.getFieldValue("END")==="FIRST"?"indexOf":"lastIndexOf",n=e.JavaScript.valueToCode(i,"FIND",e.JavaScript.ORDER_NONE)||"''";return[(e.JavaScript.valueToCode(i,"VALUE",e.JavaScript.ORDER_MEMBER)||"[]")+"."+t+"("+n+")",e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.array_get_index=function(i){const t=i.getFieldValue("MODE")||"GET",n=i.getFieldValue("WHERE")||"FROM_START",a=n==="RANDOM"?e.JavaScript.ORDER_NONE:e.JavaScript.ORDER_MEMBER,s=e.JavaScript.valueToCode(i,"VALUE",a)||"[]";switch(n){case"FIRST":if(t==="GET")return[s+"[0]",e.JavaScript.ORDER_MEMBER];if(t==="GET_REMOVE")return[s+".shift()",e.JavaScript.ORDER_MEMBER];if(t==="REMOVE")return s+`.shift();
`;break;case"LAST":if(t==="GET")return[s+".slice(-1)[0]",e.JavaScript.ORDER_MEMBER];if(t==="GET_REMOVE")return[s+".pop()",e.JavaScript.ORDER_MEMBER];if(t==="REMOVE")return s+`.pop();
`;break;case"FROM_START":{const r=e.JavaScript.getAdjusted(i,"AT");if(t==="GET")return[s+"["+r+"]",e.JavaScript.ORDER_MEMBER];if(t==="GET_REMOVE")return[s+".splice("+r+", 1)[0]",e.JavaScript.ORDER_FUNCTION_CALL];if(t==="REMOVE")return s+".splice("+r+`, 1);
`;break}case"FROM_END":{const r=e.JavaScript.getAdjusted(i,"AT",1,!0);if(t==="GET")return[s+".slice("+r+")[0]",e.JavaScript.ORDER_FUNCTION_CALL];if(t==="GET_REMOVE")return[s+".splice("+r+", 1)[0]",e.JavaScript.ORDER_FUNCTION_CALL];if(t==="REMOVE")return s+".splice("+r+", 1);";break}case"RANDOM":{const p=e.JavaScript.provideFunction_("arrayGetRandomItem",`
function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(list, remove) {
  var x = Math.floor(Math.random() * list.length);
  if (remove) {
    return list.splice(x, 1)[0];
  } else {
    return list[x];
  }
}
`)+"("+s+", "+(t!=="GET")+")";if(t==="GET"||t==="GET_REMOVE")return[p,e.JavaScript.ORDER_FUNCTION_CALL];if(t==="REMOVE")return p+`;
`;break}}throw Error("Unhandled combination (array_getIndex).")},e.JavaScript.array_set_index=function(i){let t=e.JavaScript.valueToCode(i,"LIST",e.JavaScript.ORDER_MEMBER)||"[]";const n=i.getFieldValue("MODE")||"GET",a=i.getFieldValue("WHERE")||"FROM_START",s=e.JavaScript.valueToCode(i,"TO",e.JavaScript.ORDER_ASSIGNMENT)||"null";function r(){if(t.match(/^\w+$/))return"";const p=e.JavaScript.nameDB_.getDistinctName("tmpList","VARIABLE"),d="var "+p+" = "+t+`;
`;return t=p,d}switch(a){case"FIRST":if(n==="SET")return t+"[0] = "+s+`;
`;if(n==="INSERT")return t+".unshift("+s+`);
`;break;case"LAST":if(n==="SET"){let p=r();return p+=t+"["+t+".length - 1] = "+s+`;
`,p}else if(n==="INSERT")return t+".push("+s+`);
`;break;case"FROM_START":{const p=e.JavaScript.getAdjusted(i,"AT");if(n==="SET")return t+"["+p+"] = "+s+`;
`;if(n==="INSERT")return t+".splice("+p+", 0, "+s+`);
`;break}case"FROM_END":{const p=e.JavaScript.getAdjusted(i,"AT",1,!1,e.JavaScript.ORDER_SUBTRACTION);let d=r();if(n==="SET")return d+=t+"["+t+".length - "+p+"] = "+s+`;
`,d;if(n==="INSERT")return d+=t+".splice("+t+".length - "+p+", 0, "+s+`);
`,d;break}case"RANDOM":{let p=r();const d=e.JavaScript.nameDB_.getDistinctName("tmpX",NameType.VARIABLE);if(p+="var "+d+" = Math.floor(Math.random() * "+t+`.length);
`,n==="SET")return p+=t+"["+d+"] = "+s+`;
`,p;if(n==="INSERT")return p+=t+".splice("+d+", 0, "+s+`);
`,p;break}}throw Error("Unhandled combination (array_setIndex).")};const Wt=function(i,t,n){return t==="FIRST"?"0":t==="FROM_END"?i+".length - 1 - "+n:t==="LAST"?i+".length - 1":n};e.JavaScript.array_get_subarray=function(i){const t=e.JavaScript.valueToCode(i,"LIST",e.JavaScript.ORDER_MEMBER)||"[]",n=i.getFieldValue("WHERE1"),a=i.getFieldValue("WHERE2");let s;if(n==="FIRST"&&a==="LAST")s=t+".slice(0)";else if(t.match(/^\w+$/)||n!=="FROM_END"&&a==="FROM_START"){let r;switch(n){case"FROM_START":r=e.JavaScript.getAdjusted(i,"AT1");break;case"FROM_END":r=e.JavaScript.getAdjusted(i,"AT1",1,!1,e.JavaScript.ORDER_SUBTRACTION),r=t+".length - "+r;break;case"FIRST":r="0";break;default:throw Error("Unhandled option (array_get_subarray).")}let p;switch(a){case"FROM_START":p=e.JavaScript.getAdjusted(i,"AT2",1);break;case"FROM_END":p=e.JavaScript.getAdjusted(i,"AT2",0,!1,e.JavaScript.ORDER_SUBTRACTION),p=t+".length - "+p;break;case"LAST":p=t+".length";break;default:throw Error("Unhandled option (array_get_subarray).")}s=t+".slice("+r+", "+p+")"}else{const r=e.JavaScript.getAdjusted(i,"AT1"),p=e.JavaScript.getAdjusted(i,"AT2"),d={FIRST:"First",LAST:"Last",FROM_START:"FromStart",FROM_END:"FromEnd"},l=n==="FROM_END"||n==="FROM_START"?", at1":"",u=a==="FROM_END"||a==="FROM_START"?", at2":"";s=e.JavaScript.provideFunction_("subsequence"+d[n]+d[a],`
function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(sequence${l}${u}) {
  var start = ${Wt("sequence",n,"at1")};
  var end = ${Wt("sequence",a,"at2")} + 1;
  return sequence.slice(start, end);
}
`)+"("+t+(n==="FROM_END"||n==="FROM_START"?", "+r:"")+(a==="FROM_END"||a==="FROM_START"?", "+p:"")+")"}return[s,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.array_sort=function(i){const t=e.JavaScript.valueToCode(i,"LIST",e.JavaScript.ORDER_FUNCTION_CALL)||"[]",n=i.getFieldValue("DIRECTION")==="1"?1:-1,a=i.getFieldValue("TYPE"),s=e.JavaScript.provideFunction_("arrayGetSortCompare",`
function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(type, direction) {
  var compareFuncs = {
    'NUMERIC': function(a, b) {
        return Number(a) - Number(b); },
    'TEXT': function(a, b) {
        return a.toString() > b.toString() ? 1 : -1; },
    'IGNORE_CASE': function(a, b) {
        return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },
  };
  var compare = compareFuncs[type];
  return function(a, b) { return compare(a, b) * direction; };
}
      `);return[t+".slice().sort("+s+'("'+a+'", '+n+"))",e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.array_split=function(i){let t=e.JavaScript.valueToCode(i,"INPUT",e.JavaScript.ORDER_MEMBER);const n=e.JavaScript.valueToCode(i,"DELIM",e.JavaScript.ORDER_NONE)||"''",a=i.getFieldValue("MODE");let s;if(a==="SPLIT")t||(t="''"),s="split";else if(a==="JOIN")t||(t="[]"),s="join";else throw Error("Unknown mode: "+a);return[t+"."+s+"("+n+")",e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.array_reverse=function(i){return[(e.JavaScript.valueToCode(i,"LIST",e.JavaScript.ORDER_FUNCTION_CALL)||"[]")+".slice().reverse()",e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.array_includes=i=>{const t=e.JavaScript.valueToCode(i,"ARRAY",e.JavaScript.ORDER_NONE)||"''",n=e.JavaScript.valueToCode(i,"ITEM",e.JavaScript.ORDER_NONE)||"''";return[`${t}.includes(${n})`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.array_for_each=i=>{const t=e.JavaScript.valueToCode(i,"LIST",e.JavaScript.ORDER_ASSIGNMENT)||"[]",n=e.JavaScript.statementToCode(i,"DO_STATEMENT");return`
  ${t}.forEach((element, index) => {
    ${n}
  });`},e.JavaScript.array_find=i=>{const t=e.JavaScript.valueToCode(i,"LIST",e.JavaScript.ORDER_ASSIGNMENT)||"[]",n=e.JavaScript.valueToCode(i,"CONDITION",e.JavaScript.ORDER_ASSIGNMENT)||"true";return[`${t}.find((element, index) => ${n})`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.array_element_index=i=>[i.getFieldValue("ITEM"),e.JavaScript.ORDER_FUNCTION_CALL],e.JavaScript.array_return=i=>`
  return ${e.JavaScript.valueToCode(i,"VALUE",e.JavaScript.ORDER_NONE)};`,e.JavaScript.variables_get=i=>[e.JavaScript.nameDB_.getName(i.getFieldValue("VAR"),"VARIABLE"),e.JavaScript.ORDER_ATOMIC],e.JavaScript.variables_set=i=>{const t=e.JavaScript.valueToCode(i,"VALUE",e.JavaScript.ORDER_ASSIGNMENT)||"0";return`
  ${e.JavaScript.nameDB_.getName(i.getFieldValue("VAR"),"VARIABLE")} = ${t};`},e.JavaScript.object_create=i=>{const t=e.JavaScript.statementToCode(i,"ITEM").replaceAll('"',"").trim();return[`{${t.substring(0,t.length-1)}}`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.empty_object=i=>["{}",e.JavaScript.ORDER_FUNCTION_CALL],e.JavaScript.object_key_value=i=>{const t=i.getFieldValue("KEY"),n=e.JavaScript.valueToCode(i,"VALUE",e.JavaScript.ORDER_NONE)||"''";return`"${t}: ${n}, "`},e.JavaScript.object_member=i=>{const t=i.getFieldValue("METHOD"),n=e.JavaScript.valueToCode(i,"OBJECT",e.JavaScript.ORDER_MEMBER),a=e.JavaScript.valueToCode(i,"KEY",e.JavaScript.ORDER_NONE)||"None",s=e.JavaScript.valueToCode(i,"VALUE",e.JavaScript.ORDER_NONE)||"None";if(!n)return"";if(t==="set")return`
    ${n}[${a}] = ${s};`;if(t==="get")return[`${n}[${a}]`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.object_keys=i=>[`Object.keys(${e.JavaScript.valueToCode(i,"OBJECT",e.JavaScript.ORDER_MEMBER)||"{}"})`,e.JavaScript.ORDER_FUNCTION_CALL],e.JavaScript.convert_json_to_object=i=>{const t=e.JavaScript.valueToCode(i,"JSON",e.JavaScript.ORDER_NONE);return t?[`JSON.parse(${t})`,e.JavaScript.ORDER_FUNCTION_CALL]:""},e.JavaScript.convert_object_to_json=i=>{const t=e.JavaScript.valueToCode(i,"OBJECT",e.JavaScript.ORDER_NONE);return t?[`JSON.stringify(${t}, null, 2);`,e.JavaScript.ORDER_FUNCTION_CALL]:""},e.JavaScript.console_log=i=>{const t=i.getFieldValue("METHOD"),n=e.JavaScript.valueToCode(i,"TEXT",e.JavaScript.ORDER_NONE)||"''";switch(t){case"log":return`
      console.log(${n});`;case"info":return`
      block3d.editorFooter.info = ${n};`}},e.JavaScript.window_alert=i=>`
  window.alert(${e.JavaScript.valueToCode(i,"TEXT",e.JavaScript.ORDER_NONE)||"''"});`,e.JavaScript.execute_tab=i=>{const t=e.JavaScript.valueToCode(i,"TAB_ARG",e.JavaScript.ORDER_NONE),n=i.getFieldValue("TAB");return n==="none"?"":`
    tab_${n}(${t});`},e.JavaScript.get_tab_arg=i=>["tab_arg",e.JavaScript.ORDER_FUNCTION_CALL],e.JavaScript.get_function_by_name=i=>{const t=e.JavaScript.valueToCode(i,"NAME",e.JavaScript.ORDER_NONE);return[e.JavaScript.nameDB_.getName(t,"PROCEDURE").slice(1,-1),e.JavaScript.ORDER_ATOMIC]},e.JavaScript.set_get_glob_object=i=>{const t=i.getFieldValue("METHOD"),n=i.getFieldValue("KEY"),a=e.JavaScript.valueToCode(i,"VALUE",e.JavaScript.ORDER_NONE)||"''";if(t==="set")return`
  appInstance.glob.${n} = ${a};`;if(t==="get")return[`appInstance.glob.${n}`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.set_get_local_storage_item=i=>{const t=i.getFieldValue("METHOD"),n=e.JavaScript.valueToCode(i,"KEY",e.JavaScript.ORDER_NONE)||"''",a=e.JavaScript.valueToCode(i,"VALUE",e.JavaScript.ORDER_NONE)||"''";if(t==="set")return`
  window.localStorage.setItem(${n}, ${a});`;if(t==="get")return[`window.localStorage.getItem(${n})`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.local_storage_remove_item=i=>`
  window.localStorage.removeItem(${e.JavaScript.valueToCode(i,"KEY",e.JavaScript.ORDER_NONE)||"''"});`,e.JavaScript.advanced_comment=i=>`
  // ${i.getFieldValue("INPUT")}
  `,e.JavaScript.advanced_connect=i=>`
  ${e.JavaScript.valueToCode(i,"INPUT",e.JavaScript.ORDER_NONE)};`,e.JavaScript.scene_create_custom_preloader=i=>{const t=e.JavaScript.valueToCode(i,"OPTIONS",e.JavaScript.ORDER_NONE)||"{}";return`
  ${e.JavaScript.provideFunction_("create_custom_preloader",[`
  // create_custom_preloader block
  function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(options) { 
    function $(className) {
      var styles = document.styleSheets;
      for (var i = 0; i < styles.length; i++) {
        /**
        * workaround for "DOMException: Failed to read the 'cssRules' property
        * from 'CSSStyleSheet': Cannot access rules"
        */
        try { var cssRules = styles[i].cssRules; }
        catch (e) { continue; }

        for (var j = 0; j < cssRules.length; j++) {
          var cssRule = cssRules[j];
          if (cssRule.selectorText == className)
            return cssRule.style;
        }
      }
    }
    
    const bgElem = $('.preloader-background'),
      logoElem = $('.preloader-logo'),
      barElem = $('.preloader-bar'),
      borderElem = $('.preloader-bar');

    if(options.hasOwnProperty('background')) bgElem.background = options.background;
    if(options.hasOwnProperty('logoImage')) logoElem.background = "center / contain no-repeat url(" + options.logoImage + ")";
    if(options.hasOwnProperty('barBackground')) barElem.background = options.barBackground;
    if(options.hasOwnProperty('barBorder')) borderElem.border = options.barBorder;
    if(options.hasOwnProperty('barHeight')) borderElem.height = options.barHeight;

    appInstance.preloader = new BABYLON.Preloader(appInstance.canvas);
    appInstance.preloader.start();
  }
     `])}(${t});`},e.JavaScript.scene_create_custom_preloader_option=e.JavaScript.object_key_value,e.JavaScript.scene_update_custom_preloader=i=>{const t=i.getFieldValue("METHOD"),n=e.JavaScript.valueToCode(i,"PERCENTAGE",e.JavaScript.ORDER_NONE)||0;if(t==="update")return`
    appInstance.preloader && appInstance.preloader.update(${n});`;if(t==="finish")return`
    appInstance.preloader && appInstance.preloader.finish();`},e.JavaScript.scene_assets_manager=i=>{const t=i.getFieldValue("USE_DEFAULT_PRELOADER")=="TRUE",n=`${ue(e.JavaScript.statementToCode(i,"LOAD_ASSETS"))}`,a=`${ue(e.JavaScript.statementToCode(i,"ON_PROGRESS"))}`,s=`${ue(e.JavaScript.statementToCode(i,"ON_FINISH"))}`,r=`${ue(e.JavaScript.statementToCode(i,"ON_READY"))}`;return`
  ${e.JavaScript.provideFunction_("scene_assets_manager",[`
  // scene_assets_manager block
  function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(useDefaultPreloader, loadAssetsCb, onProgressCb, onFinishCb, onReadyCb) { 
    appInstance.assetsManager = new BABYLON.AssetsManager(appInstance.scene);
    useDefaultPreloader && (appInstance.assetsManager.useDefaultLoadingScreen = true) || (appInstance.assetsManager.useDefaultLoadingScreen = false);
    loadAssetsCb ();
    appInstance.assetsManager.load();

    appInstance.assetsManager.onProgress = (remainingCount, totalCount) => {
      const percentage = ((totalCount - remainingCount) / totalCount * 100).toFixed();
      appInstance._glob.preloaderPercentage = percentage;
      onProgressCb();
    }

    appInstance.assetsManager.onFinish = (tasks) => {
      onFinishCb();
    }

    appInstance.scene.onReadyObservable.add(() => {
      onReadyCb();
    })
  }`])}(${t}, ${n}, ${a}, ${s}, ${r});`},e.JavaScript.scene_preloader_percentage=i=>["appInstance._glob.preloaderPercentage",e.JavaScript.ORDER_FUNCTION_CALL],e.JavaScript.scene_load_asset=i=>{const t=e.JavaScript.valueToCode(i,"ASSET_NAME",e.JavaScript.ORDER_NONE)||"''",n=i.getFieldValue("TYPE"),a=e.JavaScript.valueToCode(i,"URL",e.JavaScript.ORDER_NONE)||"''",s=e.JavaScript.valueToCode(i,"SIZE",e.JavaScript.ORDER_NONE)||"''";let r;switch(n){case"addMeshTask":r=`appInstance.assetsManager.addMeshTask(${t}, '', ${BABYLON.Tools.GetFolderPath(a)}', '${BABYLON.Tools.GetFilename(a)})`;break;case"addEquiRectangularCubeTextureAssetTask":case"addHDRCubeTextureTask":r=`appInstance.assetsManager.${n}(${t}, ${a}, ${s})`;break;case"addBinaryFileTask":case"addCubeTextureTask":case"addImageTask":case"addTextureTask":case"addTextFileTask":case"addTextureTask":r=`appInstance.assetsManager.${n}(${t}, ${a})`;break}return[r,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.scene_get_loaded_from_asset=i=>{const t=e.JavaScript.valueToCode(i,"ASSET",e.JavaScript.ORDER_NONE),n=i.getFieldValue("TYPE");if(!t)return"";let a;switch(n){case"animationGroups":a=`${t}.loadedAnimationGroups`;break;case"image":a=`${t}.image`;break;case"binaryData":a=`String.fromCharCode.apply(null, new Uint8Array(${t}.data))`;break;case"meshes":a=`${t}.loadedMeshes`;break;case"skeletons":a=`${t}.loadedSkeletons`;break;case"text":a=`${t}.text`;break;case"texture":a=`${t}.texture`;break}return[a,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.scene_on_finish_load=i=>{const t=e.JavaScript.valueToCode(i,"ASSET",e.JavaScript.ORDER_NONE),n=e.JavaScript.statementToCode(i,"DO_CB");return t?`
  ${t}.onSuccess = task => {
    ${n}
  }`:""},e.JavaScript.set_scene_prop=i=>{const t=i.getFieldValue("KEY"),n=e.JavaScript.valueToCode(i,"VALUE",e.JavaScript.ORDER_NONE)||"''";return`
  appInstance.scene.${t} = ${n};`},e.JavaScript.scene_create_default_environment=i=>`
  appInstance.env && appInstance.env.dispose()
  appInstance.env = appInstance.scene.createDefaultEnvironment(${e.JavaScript.valueToCode(i,"OPTIONS",e.JavaScript.ORDER_NONE)||"{}"})`,e.JavaScript.scene_update_default_environment=i=>`
  appInstance.env.updateOptions(${e.JavaScript.valueToCode(i,"OPTIONS",e.JavaScript.ORDER_NONE)||"{}"});`,e.JavaScript.scene_create_default_environment_option=e.JavaScript.object_key_value,e.JavaScript.scene_get_environment_prop=i=>[`appInstance.env.${i.getFieldValue("PROP")}`,e.JavaScript.ORDER_FUNCTION_CALL],e.JavaScript.create_photo_dome=i=>{const t=e.JavaScript.valueToCode(i,"NAME",e.JavaScript.ORDER_NONE)||"''",n=e.JavaScript.valueToCode(i,"URL",e.JavaScript.ORDER_NONE)||"''",a=e.JavaScript.valueToCode(i,"OPTIONS",e.JavaScript.ORDER_NONE)||"{}";return`
  new BABYLON.PhotoDome( ${t}, ${n}, ${a}, appInstance.scene );`},e.JavaScript.create_photo_dome_option=e.JavaScript.object_key_value,e.JavaScript.app_fullscreen=i=>{const t=e.JavaScript.valueToCode(i,"ENABLED",e.JavaScript.ORDER_NONE),n=i.getFieldValue("POINTER_LOCK")==="TRUE";if(t==="true")return`appInstance.engine.enterFullscreen(${n});`;if(t==="false")return"appInstance.engine.exitFullscreen();"},e.JavaScript.app_pointer_lock=i=>{const t=e.JavaScript.valueToCode(i,"ENABLED",e.JavaScript.ORDER_NONE);if(t==="true")return"appInstance.engine.enterPointerlock();";if(t==="false")return"appInstance.engine.exitPointerlock();"},e.JavaScript.mesh_selector=i=>{const t=i.getFieldValue("NAME");return t===""?"":[`appInstance.scene.getNodeByName('${t}')`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.camera_selector=i=>{const t=i.getFieldValue("NAME");return t===""?"":[`appInstance.scene.getNodeByName('${t}')`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.light_selector=i=>{const t=i.getFieldValue("NAME");return t===""?"":[`appInstance.scene.getNodeByName('${t}')`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.create_transform_node=i=>[`new BABYLON.TransformNode(${e.JavaScript.valueToCode(i,"NAME",e.JavaScript.ORDER_MEMBER)}, appInstance.scene)`,e.JavaScript.ORDER_FUNCTION_CALL],e.JavaScript.node_get_all=i=>[`appInstance.scene.${i.getFieldValue("TYPE")}`,e.JavaScript.ORDER_FUNCTION_CALL],e.JavaScript.node_get_children=i=>{const t=e.JavaScript.valueToCode(i,"NODE",e.JavaScript.ORDER_MEMBER),n=i.getFieldValue("TYPE"),a={childMeshes:"getChildMeshes",directChildren:"getChildren",allChildren:"getDescendants"};return t?[`${t}.${a[n]}()`,e.JavaScript.ORDER_FUNCTION_CALL]:""},e.JavaScript.node_parent=i=>{const t=i.getFieldValue("METHOD"),n=e.JavaScript.valueToCode(i,"NODE",e.JavaScript.ORDER_NONE),a=e.JavaScript.valueToCode(i,"VALUE",e.JavaScript.ORDER_NONE)||"''";if(!n)return"";if(t==="set")return`
  ${n}.parent = ${a};`;if(t==="get")return[`${n}.parent`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.node_is_child_of=i=>{const t=e.JavaScript.valueToCode(i,"CHILD_NODE",e.JavaScript.ORDER_MEMBER),n=e.JavaScript.valueToCode(i,"PARENT_NODE",e.JavaScript.ORDER_MEMBER);return!t||!n?"":[`${t}.isDescendantOf(${n})`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.node_set_enabled=i=>{const t=e.JavaScript.valueToCode(i,"NODE",e.JavaScript.ORDER_MEMBER),n=e.JavaScript.valueToCode(i,"ENABLED",e.JavaScript.ORDER_MEMBER);return t?`
  ${t}.setEnabled(${n});`:""},e.JavaScript.mesh_create_set_shapes=i=>{const t=e.JavaScript.valueToCode(i,"NAME",e.JavaScript.ORDER_NONE)||"''",n=`'Create${i.getFieldValue("TYPE")}'`,a=e.JavaScript.valueToCode(i,"OPTIONS",e.JavaScript.ORDER_NONE)||"{}";return[`${e.JavaScript.provideFunction_("mesh_create_set_shapes",[`
  // mesh_create_set_shapes block
  function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(name, type, options) { 
    const mesh = BABYLON.MeshBuilder[type](name, options, appInstance.scene);
    mesh.material = appInstance.defautlMaterial;
    return mesh;
  }`])}(${t}, ${n}, ${a})`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.mesh_create_box_option=e.JavaScript.object_key_value,e.JavaScript.mesh_create_tiledbox_option=e.JavaScript.object_key_value,e.JavaScript.mesh_create_sphere_option=e.JavaScript.object_key_value,e.JavaScript.mesh_create_cylinder_option=e.JavaScript.object_key_value,e.JavaScript.mesh_create_capsule_option=e.JavaScript.object_key_value,e.JavaScript.mesh_create_plane_option=e.JavaScript.object_key_value,e.JavaScript.mesh_create_tiledplane_option=e.JavaScript.object_key_value,e.JavaScript.mesh_create_disc_option=e.JavaScript.object_key_value,e.JavaScript.mesh_create_ground_option=e.JavaScript.object_key_value,e.JavaScript.mesh_create_groundfromheightmap_option=e.JavaScript.object_key_value,e.JavaScript.mesh_create_tiledground_option=e.JavaScript.object_key_value,e.JavaScript.mesh_create_lines_option=e.JavaScript.object_key_value,e.JavaScript.mesh_when_dragged_options=e.JavaScript.object_key_value,e.JavaScript.set_get_mesh_prop=i=>{const t=i.getFieldValue("METHOD"),n=e.JavaScript.valueToCode(i,"MESH",e.JavaScript.ORDER_NONE),a=i.getFieldValue("KEY"),s=e.JavaScript.valueToCode(i,"VALUE",e.JavaScript.ORDER_NONE)||"''";if(!n)return"";if(t==="set")return`
    ${n}.${a} = ${s};`;if(t==="get")return[`${n}.${a}`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.set_get_mesh_transform=i=>{const t=i.getFieldValue("METHOD"),n=e.JavaScript.valueToCode(i,"MESH",e.JavaScript.ORDER_NONE),a=i.getFieldValue("TRANSFORM"),s=i.getFieldValue("XYZ"),r=e.JavaScript.valueToCode(i,"VALUE",e.JavaScript.ORDER_NONE)||"''";if(!n)return"";if(t==="set")return s==="xyz"?`
  ${n}.${a} = ${r};`:`
  ${n}.${a}.${s} = ${r};`;if(t==="get")return s==="xyz"?[`${n}.${a}`,e.JavaScript.ORDER_FUNCTION_CALL]:[`${n}.${a}.${s}`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.translate_mesh=i=>{const t=e.JavaScript.valueToCode(i,"MESH",e.JavaScript.ORDER_NONE),n=e.JavaScript.valueToCode(i,"DISTANCE",e.JavaScript.ORDER_NONE)||0,a=e.JavaScript.valueToCode(i,"AXIS",e.JavaScript.ORDER_NONE);return i.getFieldValue("LOCAL")==="TRUE"?`
  ${t}.translate(${a}, ${n}, BABYLON.Space.LOCAL);`:`
  ${t}.translate(${a}, ${n}, BABYLON.Space.WORLD);`},e.JavaScript.rotate_mesh=i=>{const t=e.JavaScript.valueToCode(i,"MESH",e.JavaScript.ORDER_NONE),n=e.JavaScript.valueToCode(i,"DEGREE",e.JavaScript.ORDER_FUNCTION_CALL),a=e.JavaScript.valueToCode(i,"AXIS",e.JavaScript.ORDER_NONE),s=i.getFieldValue("LOCAL")==="TRUE";return t?s?`
  ${t}.rotate(${a}, (${n}) * Math.PI / 180, BABYLON.Space.LOCAL);`:`
  ${t}.rotate(${a}, (${n}) * Math.PI / 180, BABYLON.Space.WORLD);`:""},e.JavaScript.rotate_mesh_pov=i=>{const t=e.JavaScript.valueToCode(i,"MESH",e.JavaScript.ORDER_NONE),n=e.JavaScript.valueToCode(i,"PITCH",e.JavaScript.ORDER_NONE)||0,a=e.JavaScript.valueToCode(i,"YAW",e.JavaScript.ORDER_NONE)||0,s=e.JavaScript.valueToCode(i,"ROLL",e.JavaScript.ORDER_NONE)||0;return t?`
  ${t}.rotatePOV((${n}) * Math.PI / 180, (${a}) * Math.PI / 180, (${s}) * Math.PI / 180);`:""},e.JavaScript.set_mesh_direction=i=>{const t=e.JavaScript.valueToCode(i,"MESH",e.JavaScript.ORDER_NONE),n=e.JavaScript.valueToCode(i,"DIRECTION",e.JavaScript.ORDER_NONE);return t?`
  ${t}.setDirection(${n});`:""},e.JavaScript.mesh_look_at=i=>{const t=e.JavaScript.valueToCode(i,"MESH",e.JavaScript.ORDER_NONE),n=e.JavaScript.valueToCode(i,"POINT",e.JavaScript.ORDER_NONE);return t?`
  ${t}.lookAt(${n});`:""},e.JavaScript.remove_mesh=i=>{const t=e.JavaScript.valueToCode(i,"MESH",e.JavaScript.ORDER_NONE),n=i.getFieldValue("INCLUDE_CHILDREN")==="TRUE";return t?`
  appInstance.scene.removeMesh(${t}, ${n});`:""},e.JavaScript.mesh_set_parent=i=>{const t=e.JavaScript.valueToCode(i,"CHILD_MESH",e.JavaScript.ORDER_NONE),n=e.JavaScript.valueToCode(i,"PARENT_MESH",e.JavaScript.ORDER_NONE);return!t||!n?"":`
  ${t}.setParent(${n});`},e.JavaScript.clone_mesh=i=>{const t=e.JavaScript.valueToCode(i,"MESH",e.JavaScript.ORDER_NONE)||"''",n=e.JavaScript.valueToCode(i,"NAME",e.JavaScript.ORDER_NONE)||"''";return t?[`${t}.clone(${n})`,e.JavaScript.ORDER_FUNCTION_CALL]:""},e.JavaScript.mesh_create_instance=i=>{const t=e.JavaScript.valueToCode(i,"MESH",e.JavaScript.ORDER_NONE)||"''",n=e.JavaScript.valueToCode(i,"NAME",e.JavaScript.ORDER_NONE)||"''";return t?[`${t}.createInstance(${n})`,e.JavaScript.ORDER_FUNCTION_CALL]:""},e.JavaScript.drag_mesh=i=>{const t=e.JavaScript.valueToCode(i,"MESH",e.JavaScript.ORDER_NONE)||"''",n=e.JavaScript.valueToCode(i,"OPTIONS",e.JavaScript.ORDER_NONE)||"{}",a=`() => {${e.JavaScript.statementToCode(i,"DRAG_START_DO")}}`,s=`() => {${e.JavaScript.statementToCode(i,"DRAG_DO")}}`,r=`() => {${e.JavaScript.statementToCode(i,"DRAG_END_DO")}}`;return`
  ${e.JavaScript.provideFunction_("drag_mesh",[`
  // drag_mesh block
  function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(mesh, options, dragStartDo, dragDo, dragEndDo) { 
    const pointerDragBehavior = new BABYLON.PointerDragBehavior(options);

    options && options.hasOwnProperty('useObjectOrientationForDragging') && (pointerDragBehavior.useObjectOrientationForDragging = options.useObjectOrientationForDragging);
    options && options.hasOwnProperty('updateDragPlane') && (pointerDragBehavior.updateDragPlane = options.updateDragPlane);
    options && options.hasOwnProperty('enabled') && (pointerDragBehavior.enabled = options.enabled);
    options && options.hasOwnProperty('moveAttached') && (pointerDragBehavior.moveAttached = options.moveAttached);

    // Listen to drag events
    pointerDragBehavior.onDragStartObservable.add((event)=>{
      dragStartDo();
    })
    pointerDragBehavior.onDragObservable.add((event)=>{
      dragDo();
    })
    pointerDragBehavior.onDragEndObservable.add((event)=>{
      dragEndDo();
    })

    mesh.addBehavior(pointerDragBehavior);
  }`])}(${t}, ${n}, ${a}, ${s}, ${r});`},e.JavaScript.check_point_behind_mesh=i=>{const t=e.JavaScript.valueToCode(i,"POINT",e.JavaScript.ORDER_NONE),n=e.JavaScript.valueToCode(i,"MESH",e.JavaScript.ORDER_NONE);return[`${e.JavaScript.provideFunction_("check_point_behind_mesh",[`
  // check_point_behind_mesh block
  function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(point, mesh) { 
    if (!point || point.getClassName() !== 'Vector3' || !mesh || mesh.getClassName() !== 'Mesh') return;

    const dir = appInstance.scene.activeCamera.position.subtract(point).normalize();
    const ray = new BABYLON.Ray(point, dir, 10);
    const info = ray.intersectsMesh(mesh);
    if (info.hit) {
      return true
    } else {
      return false
    }
  }`])}(${t}, ${n})`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.check_intersects_mesh=i=>{const t=e.JavaScript.valueToCode(i,"MESH",e.JavaScript.ORDER_NONE),n=e.JavaScript.valueToCode(i,"TARGET",e.JavaScript.ORDER_NONE),a=i.getFieldValue("PRECISE")==="TRUE",s=i.getFieldValue("INCLUDE_CHILDREN")==="TRUE";return t?[`${t}.intersectsMesh(${n}, ${a}, ${s})`,e.JavaScript.ORDER_FUNCTION_CALL]:""},e.JavaScript.check_intersects_point=i=>{const t=e.JavaScript.valueToCode(i,"MESH",e.JavaScript.ORDER_NONE),n=e.JavaScript.valueToCode(i,"POINT",e.JavaScript.ORDER_NONE);return t?[`${t}.intersectsPoint(${n})`,e.JavaScript.ORDER_FUNCTION_CALL]:""},e.JavaScript.mesh_create_decal=i=>{const t=e.JavaScript.valueToCode(i,"NAME",e.JavaScript.ORDER_NONE)||"''",n=e.JavaScript.valueToCode(i,"MESH",e.JavaScript.ORDER_NONE)||"''",a=e.JavaScript.valueToCode(i,"TEXTURE",e.JavaScript.ORDER_NONE)||"''",s=e.JavaScript.valueToCode(i,"OPTIONS",e.JavaScript.ORDER_NONE)||"''";return[`${e.JavaScript.provideFunction_("mesh_create_decal",[`
  function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(name, mesh, texture, options) {
    if(!mesh) return;
    
    const decalMat = new BABYLON.StandardMaterial(name, appInstance.scene);
    decalMat.diffuseTexture = new BABYLON.Texture(texture, appInstance.scene);
    decalMat.diffuseTexture.hasAlpha = true;
    decalMat.zOffset = -2;
    const decalMesh = BABYLON.MeshBuilder.CreateDecal(name, mesh, options);
    decalMesh.material = decalMat;
    return decalMesh;
  }
  `])}(${t}, ${n}, ${a}, ${s})`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.mesh_create_decal_option=i=>{const t=i.getFieldValue("KEY"),n=e.JavaScript.valueToCode(i,"VALUE",e.JavaScript.ORDER_NONE)||"''";return`"${t}: ${n}, "`},e.JavaScript.mesh_add_lod_level=i=>{const t=e.JavaScript.valueToCode(i,"MESH",e.JavaScript.ORDER_NONE),n=e.JavaScript.valueToCode(i,"DISTANCE",e.JavaScript.ORDER_NONE),a=e.JavaScript.valueToCode(i,"LOD_MESH",e.JavaScript.ORDER_NONE);return t?`
  ${t}.addLODLevel(${n}, ${a})`:""},e.JavaScript.create_highlight_layer=i=>{const t=e.JavaScript.valueToCode(i,"NAME",e.JavaScript.ORDER_NONE)||"''";return[`${e.JavaScript.provideFunction_("create_highlight_layer",[`
  function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(name) {
    appInstance.overlaySceneEnabled = true;
    return new BABYLON.HighlightLayer(name, appInstance.scene);
  }
  `])}(${t})`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.add_mesh_to_highlight_layer=i=>{const t=e.JavaScript.valueToCode(i,"LAYER",e.JavaScript.ORDER_NONE),n=e.JavaScript.valueToCode(i,"MESH",e.JavaScript.ORDER_NONE),a=e.JavaScript.valueToCode(i,"COLOR",e.JavaScript.ORDER_NONE);return!n||!t?"":`
  ${t}.addMesh(${n}, ${a});`},e.JavaScript.exclude_mesh_from_highlight_layer=i=>{const t=e.JavaScript.valueToCode(i,"LAYER",e.JavaScript.ORDER_NONE),n=e.JavaScript.valueToCode(i,"MESH",e.JavaScript.ORDER_NONE);return!n||!t?"":`
  ${t}.addExcludedMesh(${n});`},e.JavaScript.set_highlight_layer_prop=i=>{const t=e.JavaScript.valueToCode(i,"LAYER",e.JavaScript.ORDER_NONE),n=i.getFieldValue("KEY"),a=e.JavaScript.valueToCode(i,"VALUE",e.JavaScript.ORDER_NONE);return t?`
  ${t}.${n} = ${a};`:""},e.JavaScript.remove_mesh_from_highlight_layer=i=>{const t=e.JavaScript.valueToCode(i,"LAYER",e.JavaScript.ORDER_NONE),n=e.JavaScript.valueToCode(i,"MESH",e.JavaScript.ORDER_NONE);return!n||!t?"":`
  ${t}.removeMesh(${n});`},e.JavaScript.set_get_active_camera=i=>{const t=i.getFieldValue("METHOD"),n=e.JavaScript.valueToCode(i,"VALUE",e.JavaScript.ORDER_NONE);if(t==="set")return n?`
  appInstance.scene.activeCamera && appInstance.scene.activeCamera.detachControl();
  appInstance.camera = ${n};
  appInstance.scene.activeCamera = ${n};
  ${n}.attachControl(appInstance.canvas, true);`:"";if(t==="get")return["appInstance.scene.activeCamera",e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.create_camera=i=>{const t=i.getFieldValue("TYPE"),n=e.JavaScript.valueToCode(i,"NAME",e.JavaScript.ORDER_NONE)||"''",a=e.JavaScript.valueToCode(i,"POSITION",e.JavaScript.ORDER_NONE)||"''",s=e.JavaScript.valueToCode(i,"ALPHA",e.JavaScript.ORDER_NONE)||"''",r=e.JavaScript.valueToCode(i,"BETA",e.JavaScript.ORDER_NONE)||"''",p=e.JavaScript.valueToCode(i,"RADIUS",e.JavaScript.ORDER_NONE)||"''",d=e.JavaScript.valueToCode(i,"TARGET",e.JavaScript.ORDER_NONE)||"''",l=e.JavaScript.valueToCode(i,"INTERAXIAL_DISTANCE",e.JavaScript.ORDER_NONE)||"''";let u;switch(t){case"UniversalCamera":u=`new BABYLON.UniversalCamera(${n}, ${a}, appInstance.scene)`;break;case"ArcRotateCamera":u=`new BABYLON.ArcRotateCamera(${n}, ${s*Math.PI/180}, ${r*Math.PI/180}, ${p}, ${d}, appInstance.scene)`;break;case"FollowCamera":u=`new BABYLON.FollowCamera(${n}, ${a}, appInstance.scene)`;break;case"AnaglyphUniversalCamera":u=`new BABYLON.AnaglyphUniversalCamera(${n}, ${a}, ${l}, appInstance.scene)`;break;case"AnaglyphArcRotateCamera":u=`new BABYLON.AnaglyphArcRotateCamera(${n}, ${s*Math.PI/180}, ${r*Math.PI/180}, ${p}, ${d}, ${l}, appInstance.scene)`;break;case"DeviceOrientationCamera":u=`new BABYLON.DeviceOrientationCamera(${n}, ${a}, appInstance.scene)`;break}return[u,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.set_get_camera_prop=i=>{const t=i.getFieldValue("METHOD"),n=e.JavaScript.valueToCode(i,"CAMERA",e.JavaScript.ORDER_NONE),a=i.getFieldValue("KEY"),s=e.JavaScript.valueToCode(i,"VALUE",e.JavaScript.ORDER_NONE)||"0";if(!n)return"";if(t==="set")return`
  ${n}.${a} = ${s};`;if(t==="get")return[`${n}.${a}`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.remove_camera=i=>{const t=e.JavaScript.valueToCode(i,"CAMERA",e.JavaScript.ORDER_NONE);return t?`
    appInstance.scene.removeCamera(${t});`:""},e.JavaScript.autorotate_camera=i=>{const t=e.JavaScript.valueToCode(i,"SPEED",e.JavaScript.ORDER_NONE)||"''",n=i.getFieldValue("ENABLED")=="TRUE",a=e.JavaScript.valueToCode(i,"WAIT_TIME",e.JavaScript.ORDER_NONE)||"''",s=e.JavaScript.valueToCode(i,"SPINUP_TIME",e.JavaScript.ORDER_NONE)||"''";return`
  ${e.JavaScript.provideFunction_("autorotate_camera",[`
  // used for autorotate_camera block
  appInstance._glob.autoRotationBehavior = new BABYLON.AutoRotationBehavior();
  
  // autorotate_camera block
  function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(enabled, speed, waitTime, spinupTime) { 
    const camera = appInstance.scene.activeCamera;
    if(camera.getClassName() !== 'ArcRotateCamera') {
      throw new Error('The effect only supports ArcRotateCamera');
    };

    if(enabled) {
      appInstance._glob.autoRotationBehavior.idleRotationSpeed = speed;
      appInstance._glob.autoRotationBehavior.idleRotationWaitTime = waitTime * 1000;
      appInstance._glob.autoRotationBehavior.idleRotationSpinupTime = spinupTime * 1000;
      appInstance._glob.autoRotationBehavior.attach(camera);
    } else {
      appInstance._glob.autoRotationBehavior.detach();
    }

  }`])}(${n}, ${t}, ${a}, ${s});`},e.JavaScript.bounce_camera=i=>{const t=e.JavaScript.valueToCode(i,"DURATION",e.JavaScript.ORDER_NONE)||"''",n=e.JavaScript.valueToCode(i,"MIN_RADIUS",e.JavaScript.ORDER_NONE)||"''",a=e.JavaScript.valueToCode(i,"MAX_RADIUS",e.JavaScript.ORDER_NONE)||"''";return`
  ${e.JavaScript.provideFunction_("bounce_camera",[`
  // bounce_camera block
  function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(duration, minRadius, maxRadius) { 
    const camera = appInstance.scene.activeCamera;
    if(camera.getClassName() !== 'ArcRotateCamera') {
      throw new Error('The effect only supports ArcRotateCamera');
    };
    camera.lowerRadiusLimit = minRadius;
    camera.upperRadiusLimit = maxRadius;
    const bouncingBehavior = new BABYLON.BouncingBehavior();
    bouncingBehavior.transitionDuration = duration * 1000;
    bouncingBehavior.autoTransitionRange = true;
    bouncingBehavior.attach(camera);

  }`])}(${t}, ${n}, ${a});`},e.JavaScript.zoom_camera=i=>{const t=e.JavaScript.valueToCode(i,"MESH",e.JavaScript.ORDER_NONE)||"''",n=e.JavaScript.valueToCode(i,"DURATION",e.JavaScript.ORDER_NONE)||"''",a=`()=> {${e.JavaScript.statementToCode(i,"WHEN_FINISH_DO")}}`;return`
  ${e.JavaScript.provideFunction_("zoom_camera",[`
  // zoom_camera block
  function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(mesh, duration, whenFinishDo) { 
    if(mesh.getClassName() !== 'Mesh') return;

    const camera = appInstance.scene.activeCamera;
    if(camera.getClassName() !== 'ArcRotateCamera') {
      throw new Error('The effect only supports ArcRotateCamera');
    };
    const framingBehavior = new BABYLON.FramingBehavior();
    framingBehavior.mode = 1;
    framingBehavior.framingTime = duration * 1000;
    framingBehavior.zoomStopsAnimation = false;
    framingBehavior.attach(camera);
    framingBehavior.zoomOnMesh(mesh, false, () => {
      whenFinishDo();
    });
  }`])}(${t}, ${n}, ${a});`},e.JavaScript.camera_control_enabled=i=>{const t=e.JavaScript.valueToCode(i,"ENABLED",e.JavaScript.ORDER_NONE),n=e.JavaScript.valueToCode(i,"CAMERA",e.JavaScript.ORDER_NONE);if(!n)return"";if(t==="true")return`
    ${n}.attachControl();`;if(t==="false")return`
    ${n}.detachControl();`},e.JavaScript.camera_get_forward_ray=i=>[`appInstance.scene.activeCamera.getForwardRay(${e.JavaScript.valueToCode(i,"LENGTH",e.JavaScript.ORDER_NONE)})`,e.JavaScript.ORDER_FUNCTION_CALL],e.JavaScript.create_light=i=>{const t=i.getFieldValue("TYPE"),n=e.JavaScript.valueToCode(i,"NAME",e.JavaScript.ORDER_NONE)||"''",a=e.JavaScript.valueToCode(i,"POSITION",e.JavaScript.ORDER_NONE)||"''",s=e.JavaScript.valueToCode(i,"DIRECTION",e.JavaScript.ORDER_NONE)||"''",r=e.JavaScript.valueToCode(i,"ANGLE",e.JavaScript.ORDER_NONE)||"''",p=e.JavaScript.valueToCode(i,"EXPONENT",e.JavaScript.ORDER_NONE)||"''";let d;switch(t){case"PointLight":d=`new BABYLON.PointLight(${n}, ${a}, appInstance.scene)`;break;case"DirectionalLight":d=`new BABYLON.DirectionalLight(${n}, ${s}, appInstance.scene)`;break;case"SpotLight":d=`new BABYLON.SpotLight(${n}, ${a}, ${s}, ${Math.PI/180*r}, ${p}, appInstance.scene)`;break;case"HemisphericLight":d=`new BABYLON.HemisphericLight(${n}, ${s}, appInstance.scene)`;break}return[`${d}`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.set_get_light_prop=i=>{const t=i.getFieldValue("METHOD"),n=e.JavaScript.valueToCode(i,"LIGHT",e.JavaScript.ORDER_NONE),a=i.getFieldValue("KEY"),s=e.JavaScript.valueToCode(i,"VALUE",e.JavaScript.ORDER_NONE)||"0";if(!n)return"";if(t==="set")return`
  ${n}.${a} = ${s};`;if(t==="get")return[`${n}.${a}`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.create_shadow=i=>{const t=e.JavaScript.valueToCode(i,"MAP_SIZE",e.JavaScript.ORDER_NONE)||"''",n=e.JavaScript.valueToCode(i,"LIGHT",e.JavaScript.ORDER_NONE)||"''";return t&&n?[`new BABYLON.ShadowGenerator(${t}, ${n})`,e.JavaScript.ORDER_FUNCTION_CALL]:""},e.JavaScript.set_shadow_prop=i=>{const t=e.JavaScript.valueToCode(i,"SHADOW",e.JavaScript.ORDER_NONE),n=i.getFieldValue("KEY"),a=e.JavaScript.valueToCode(i,"VALUE",e.JavaScript.ORDER_NONE)||"0";return t?`
    ${t}.${n} = ${a};`:""},e.JavaScript.add_shadow_caster=i=>{const t=e.JavaScript.valueToCode(i,"SHADOW",e.JavaScript.ORDER_NONE)||"''",n=e.JavaScript.valueToCode(i,"MESH",e.JavaScript.ORDER_NONE)||"''";return t&&n?`
    ${t}.addShadowCaster(${n});`:""},e.JavaScript.pointer_event=i=>{const t=i.getFieldValue("EVENT_TYPE"),n=`()=> {${e.JavaScript.statementToCode(i,"HIT_CB")}}`,a=i.getFieldValue("IGNOR_BACKFACE")=="TRUE";return`
  ${e.JavaScript.provideFunction_("pointer_event",[`
  // pointer_event block
  function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(eventType, ignorBackface, hitCb) { 
    const { scene } = appInstance;
    const camera = scene.activeCamera;
   
    /* \u5FFD\u7565\u7F51\u683C\u80CC\u9762 */
    function ignorBackfacePredicate(p0, p1, p2, ray) {
      var p0p1 = p0.subtract(p1);
      var p2p1 = p2.subtract(p1);
      var normal = BABYLON.Vector3.Cross(p0p1, p2p1);
      return BABYLON.Vector3.Dot(ray.direction, normal) < 0;
    }

    scene.onPointerObservable.add(()=>{
      const pickingInfo = scene.pick(scene.pointerX, scene.pointerY, undefined, false, camera, ignorBackface ? ignorBackfacePredicate : undefined);
      if (pickingInfo && pickingInfo.hit) {
        appInstance._glob.pickedMesh = pickingInfo.pickedMesh;
        appInstance._glob.pickedPoint = pickingInfo.pickedPoint;
        appInstance._glob.pickedNormal = pickingInfo.getNormal();
        hitCb();
      }
    }, eventType)
  }`])}(${t}, ${a}, ${n});`},e.JavaScript.picking_info=i=>{var t="'"+i.getFieldValue("OPTION")+"'",n="'"+i.getFieldValue("POINT_OPTION")+"'",a="'"+i.getFieldValue("NORMAL_OPTION")+"'",s=e.JavaScript.provideFunction_("picking_info",[`
// picking_info block
function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(option, point_option, normal_option){ 
    if(!appInstance._glob.pickedMesh) return
    switch(option){
        case 'MESH':
            return appInstance._glob.pickedMesh;
        case 'POINT':
          switch(point_option){
            case 'X':
              return appInstance._glob.pickedPoint.x;
            case 'Y':
              return appInstance._glob.pickedPoint.y;
            case 'Z':
              return appInstance._glob.pickedPoint.z;
            case 'XYZ':
              return appInstance._glob.pickedPoint
          }
          break;
        case 'NORMAL':
          switch(normal_option){
            case 'X':
              return appInstance._glob.pickedNormal.x;
            case 'Y':
              return appInstance._glob.pickedNormal.y;
            case 'Z':
              return appInstance._glob.pickedNormal.z;
            case 'XYZ':
              return appInstance._glob.pickedNormal
          }
          break;
    }  
}
     `]);return[`${s}(${t},${n},${a})`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.keyboard_event=i=>{const t=i.getFieldValue("TYPE"),n=i.getFieldValue("REPEAT")==="TRUE";return`
  appInstance.scene.onKeyboardObservable.add((eventData) => {
    if (eventData.type == BABYLON.KeyboardEventTypes.${t} && (${n} ? true : !eventData.event.repeat )) {
      appInstance._glob.keyInput = {key: eventData.event.key, keyCode: eventData.event.keyCode};
      ${e.JavaScript.statementToCode(i,"DO_CB")}
    }
  });`},e.JavaScript.get_key_input=i=>[`appInstance._glob.keyInput.${i.getFieldValue("KEY_INPUT")}`,e.JavaScript.ORDER_FUNCTION_CALL],e.JavaScript.on_before_render_event=i=>`
  appInstance.scene.onBeforeRenderObservable.add(()=>{
    ${e.JavaScript.statementToCode(i,"DO_CB")}
  })`,e.JavaScript.on_delay_event=i=>{const t=e.JavaScript.valueToCode(i,"VALUE",e.JavaScript.ORDER_NONE)||"0",n=`()=> {${e.JavaScript.statementToCode(i,"DO_CB")}}`;return`
  ${e.JavaScript.provideFunction_("on_delay_event",[`
  // on_delay_event block
  async function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(value, doCb) { 
    await BABYLON.Tools.DelayAsync(${Number(t)*1e3});
    doCb();
  }`])}(${t}, ${n});`},e.JavaScript.event_create_action=i=>{const t=`'${i.getFieldValue("ACTION")}'`,n=i.getFieldValue("TRIGGER"),a=e.JavaScript.valueToCode(i,"OBJECT",e.JavaScript.ORDER_NONE)||"{}",s=e.JavaScript.valueToCode(i,"KEY",e.JavaScript.ORDER_NONE)||"''",r=e.JavaScript.valueToCode(i,"VALUE",e.JavaScript.ORDER_NONE)||"0",p=e.JavaScript.valueToCode(i,"DURATION",e.JavaScript.ORDER_NONE)||"0",d=e.JavaScript.valueToCode(i,"FUNC",e.JavaScript.ORDER_NONE)||"''",l=e.JavaScript.valueToCode(i,"CHILDREN",e.JavaScript.ORDER_NONE)||"[]",u=e.JavaScript.valueToCode(i,"INTERSECTS_MESH",e.JavaScript.ORDER_NONE)||"''",M=i.getFieldValue("PRECISE")==="TRUE",g=`{
    action: ${t},
    trigger: ${n},
    obj: ${a},
    key: ${s},
    value: ${r},
    duration: ${p},
    func: ${d},
    children: ${l},
    intersectsMesh: ${u},
    precise: ${M},
  }`;return[`${e.JavaScript.provideFunction_("event_create_action",[`
  // event_create_action block
  function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(options) { 
    const { action, trigger, obj, key, value, duration, func, children, intersectsMesh, precise } = options;

    let param;
    if (intersectsMesh) {
      param = {
        mesh: intersectsMesh,
        usePreciseIntersection: precise
      }
    }

    switch (action) {
      case 'DoNothingAction':
        return new BABYLON[action] (
          {
            trigger: trigger,
            parameter: param
          }
        )
      case 'InterpolateValueAction':
        return new BABYLON[action] (
          {
            trigger: trigger,
            parameter: param
          },
          obj,
          key,
          value,
          duration * 1000
        )
      case 'SwitchBooleanAction':
      case 'SetValueAction':
      case 'IncrementValueAction':
        return new BABYLON[action] (
          {
            trigger: trigger,
            parameter: param
          },
          obj,
          key,
          value,
        )
      case 'SwitchBooleanAction':
        return new BABYLON[action] (
            {
              trigger: trigger,
              parameter: param
            },
            obj,
            key,
          )
      case 'ExecuteCodeAction':
        return new BABYLON[action] (
          {
            trigger: trigger,
            parameter: param
          },
          func,
        )
      case 'CombineAction':
        return new BABYLON[action] (
          {
            trigger: trigger,
            parameter: param
          },
          children,
        )
    }

  }`])}(${g})`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.event_add_actions=i=>{const t=e.JavaScript.valueToCode(i,"ACTIONS",e.JavaScript.ORDER_NONE),n=e.JavaScript.valueToCode(i,"MESH",e.JavaScript.ORDER_NONE);return`
  ${e.JavaScript.provideFunction_("event_add_actions",[`
  // event_add_actions block
  function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(actions, mesh) { 
    if(!mesh || !Array.isArray(actions) || !actions.length) return;
    mesh.actionManager = new BABYLON.ActionManager(appInstance.scene);
    let act = mesh.actionManager.registerAction(actions[0]);
    if(actions.length === 1) return;

    for (let i=1; i<actions.length; i++) {
      act = act.then(actions[i])
    }
  }`])}(${t}, ${n});`},e.JavaScript.create_custom_event=i=>["new BABYLON.Observable()",e.JavaScript.ORDER_FUNCTION_CALL],e.JavaScript.dispatch_custom_event=i=>{const t=e.JavaScript.valueToCode(i,"EVENT",e.JavaScript.ORDER_NONE),n=e.JavaScript.valueToCode(i,"CUSTOM_EVENT_DATA",e.JavaScript.ORDER_NONE)||"{}";return t?`
  ${t}.notifyObservers(${n});`:""},e.JavaScript.add_custom_event_listener=i=>{const t=e.JavaScript.valueToCode(i,"EVENT",e.JavaScript.ORDER_NONE);return t?`
  ${t}.add((custom_event_data) => {${e.JavaScript.statementToCode(i,"DO_CB")}
  });`:""},e.JavaScript.custom_event_data=i=>["custom_event_data",e.JavaScript.ORDER_FUNCTION_CALL],e.JavaScript.create_virtual_joystick=i=>{const t=i.getFieldValue("IS_LEFT")=="LEFT",n=e.JavaScript.valueToCode(i,"OPTIONS",e.JavaScript.ORDER_NONE)||"{}";return[`new BABYLON.VirtualJoystick(${t}, ${n})`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.create_virtual_joystick_option=e.JavaScript.object_key_value,e.JavaScript.virtual_joystick_get_delta_position=i=>{const t=e.JavaScript.valueToCode(i,"JOYSTICK",e.JavaScript.ORDER_NONE);return t?[`${t}.deltaPosition`,e.JavaScript.ORDER_FUNCTION_CALL]:""},e.JavaScript.set_virtual_joystick_visible=i=>i.getFieldValue("IS_VISIBLE")=="SHOW"?`
  BABYLON.VirtualJoystick.Canvas.style.zIndex = "100";`:`
  BABYLON.VirtualJoystick.Canvas.style.zIndex = "-1";`,e.JavaScript.create_ray=i=>{const t=e.JavaScript.valueToCode(i,"ORIGIN",e.JavaScript.ORDER_NONE),n=e.JavaScript.valueToCode(i,"DIRECTION",e.JavaScript.ORDER_NONE),a=e.JavaScript.valueToCode(i,"LENGTH",e.JavaScript.ORDER_NONE);return[`new BABYLON.Ray(${t}, ${n}, ${a})`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.ray_intersects_mesh=i=>{const t=e.JavaScript.valueToCode(i,"RAY",e.JavaScript.ORDER_NONE)||"''",n=e.JavaScript.valueToCode(i,"MESH",e.JavaScript.ORDER_NONE),a=`()=> {${e.JavaScript.statementToCode(i,"DO_CB")}}`;return`
  ${e.JavaScript.provideFunction_("ray_intersects_mesh",[`
  // ray_intersects_mesh block
  function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(ray, mesh, doCb) { 
    if(!ray || !mesh) return;

    let pickingInfo;
    if(Array.isArray(mesh)) {
      pickingInfo = ray.intersectsMeshes(mesh, true)[0];
    } else {
      pickingInfo = ray.intersectsMesh(mesh, true);
    }
    if (pickingInfo && pickingInfo.hit) {
      appInstance._glob.pickedMesh = pickingInfo.pickedMesh;
      appInstance._glob.pickedPoint = pickingInfo.pickedPoint;
      appInstance._glob.pickedNormal = pickingInfo.getNormal();
      doCb();
    }
  }`])}(${t}, ${n}, ${a});`},e.JavaScript.create_animation_for_target=i=>{const t=e.JavaScript.valueToCode(i,"NAME",e.JavaScript.ORDER_NONE)||"''",n=e.JavaScript.valueToCode(i,"TARGET",e.JavaScript.ORDER_NONE),a=e.JavaScript.valueToCode(i,"TARGET_PROP",e.JavaScript.ORDER_NONE)||"''";let s=i.getFieldValue("PROP_TYPE");const r=e.JavaScript.valueToCode(i,"FPS",e.JavaScript.ORDER_NONE)||60;let p=i.getFieldValue("LOOP_MODE");const d=e.JavaScript.valueToCode(i,"FRAMES",e.JavaScript.ORDER_NONE)||"[]";return s=animationTypeMap[s],p=aniamtionLoopModeMap[p],`
  ${e.JavaScript.provideFunction_("create_animation_for_target",[`
  // create_animation_for_target block
  function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(name, target, targetProp, propType, fps, loopMode, frames) { 
    const anim = new BABYLON.Animation(name, targetProp, fps, propType, loopMode );
    anim.setKeys(frames);
    target.animations.push(anim);
  }`])}(${t}, ${n}, ${a}, ${s}, ${r}, ${p}, ${d});`},e.JavaScript.animation_frame_value=i=>{const t=e.JavaScript.valueToCode(i,"FRAME",e.JavaScript.ORDER_NONE)||0,n=e.JavaScript.valueToCode(i,"VALUE",e.JavaScript.ORDER_NONE)||0;return`{frame: ${t}, value: ${n}}, `},e.JavaScript.begin_animation=i=>{const t=e.JavaScript.valueToCode(i,"TARGET",e.JavaScript.ORDER_NONE),n=e.JavaScript.valueToCode(i,"FROM",e.JavaScript.ORDER_NONE)||0,a=e.JavaScript.valueToCode(i,"TO",e.JavaScript.ORDER_NONE)||0,s=e.JavaScript.valueToCode(i,"LOOP",e.JavaScript.ORDER_NONE)||!0;return t?[`appInstance.scene.beginAnimation(${t}, ${n}, ${a}, ${s})`,e.JavaScript.ORDER_FUNCTION_CALL]:""},e.JavaScript.animation_playback=i=>{const t=e.JavaScript.valueToCode(i,"ANIMATABLE",e.JavaScript.ORDER_NONE),n=i.getFieldValue("METHOD");return t?`
  ${t}.${n}();`:""},e.JavaScript.on_animation_end=i=>{const t=e.JavaScript.valueToCode(i,"ANIMATABLE",e.JavaScript.ORDER_NONE),n=e.JavaScript.statementToCode(i,"DO_CB");return t?`
  ${t}.onAnimationEndObservable.add(() => { ${n} });`:""},e.JavaScript.get_animation_group_by_name=i=>{const t=e.JavaScript.valueToCode(i,"NAME",e.JavaScript.ORDER_NONE);return t?[`appInstance.scene.getAnimationGroupByName(${t})`,e.JavaScript.ORDER_FUNCTION_CALL]:""},e.JavaScript.set_get_animaiton_group_prop=i=>{const t=e.JavaScript.valueToCode(i,"ANIMATION_GROUP",e.JavaScript.ORDER_NONE),n=i.getFieldValue("METHOD"),a=i.getFieldValue("PROP"),s=e.JavaScript.valueToCode(i,"VALUE",e.JavaScript.ORDER_NONE);if(!t)return"";if(n==="set")return`
  ${t}.${a} = ${s};`;if(n==="get")return[`${t}.${a}`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.animation_group_playback=i=>{const t=e.JavaScript.valueToCode(i,"ANIMATION_GROUP",e.JavaScript.ORDER_NONE),n=i.getFieldValue("METHOD"),a=i.getFieldValue("LOOP")==="TRUE";if(!t)return"";let s;switch(n){case"pause":case"reset":case"restart":case"stop":s=`
  ${t}.${n}();`;break;case"play":s=`
  ${t}.play(${a});`;break;case"start":s=`
  ${t}.start(${a}, 1, ${t.from}, ${t.to}, true);`;break}return s},e.JavaScript.animation_go_to_frame=i=>{const t=e.JavaScript.valueToCode(i,"ANIMATION_GROUP",e.JavaScript.ORDER_NONE),n=e.JavaScript.valueToCode(i,"FRAME",e.JavaScript.ORDER_NONE);return t?`
  ${t}.goToFrame(${n});`:""},e.JavaScript.animation_blending=i=>{const t=e.JavaScript.valueToCode(i,"FROM_ANIMATION_GROUP",e.JavaScript.ORDER_NONE),n=e.JavaScript.valueToCode(i,"TO_ANIMATION_GROUP",e.JavaScript.ORDER_NONE),a=e.JavaScript.valueToCode(i,"BLENDING_SPEED",e.JavaScript.ORDER_NONE);return`
  ${e.JavaScript.provideFunction_("animation_blending",[`
  // animation_blending block
  function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(fromAnimGroup, toAnimGroup, blendingSpeed) { 
    const animationBlending = function* (fromAnimGroup, toAnimGroup, blendingSpeed) {
      blendingSpeed = blendingSpeed / 100;
      let fromWeight = 1;
      let toWeight = 0;
    
      while (toWeight < 1) {
        fromWeight -= blendingSpeed;
        toWeight += blendingSpeed;

        fromAnimGroup.stop();
        toAnimGroup.play(true);
    
        fromAnimGroup.setWeightForAllAnimatables(fromWeight);
        toAnimGroup.setWeightForAllAnimatables(toWeight);
        yield;
      }
    }
    appInstance.scene.onBeforeRenderObservable.runCoroutineAsync(animationBlending(fromAnimGroup, toAnimGroup, blendingSpeed));
  }`])}(${t}, ${n}, ${a});`},e.JavaScript.transition_animation=i=>{const t=e.JavaScript.valueToCode(i,"OBJECT",e.JavaScript.ORDER_NONE),n=e.JavaScript.valueToCode(i,"KEY",e.JavaScript.ORDER_NONE),a=e.JavaScript.valueToCode(i,"VALUE",e.JavaScript.ORDER_NONE),s=i.getFieldValue("TYPE"),r=e.JavaScript.valueToCode(i,"DURATION",e.JavaScript.ORDER_NONE),p=e.JavaScript.valueToCode(i,"FPS",e.JavaScript.ORDER_NONE),d=i.getFieldValue("EASING"),l=`() => {${e.JavaScript.statementToCode(i,"DO_CB")}}`;return`
  ${e.JavaScript.provideFunction_("transition_animation",[`
  // transition_animation block
  function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(object, key, value, type, duration, fps, easing, doCb) { 
    const animate = BABYLON.Animation.CreateAnimation(key, type, fps, easing);
    BABYLON.Animation.TransitionTo(key, value, object, appInstance.scene, fps, animate, duration * 1000, () => {
      setTimeout(()=>{
        if(object.hasOwnProperty('animations')) {
          const index = object.animations.indexOf(animate);
          index !== -1 && object.animations.splice(index, 1);
        }
      }, duration)
      doCb();
    })
  }`])}(${t}, ${n}, ${a}, ${s}, ${r}, ${p}, ${d}, ${l});`},e.JavaScript.time_after=i=>{const t=e.JavaScript.valueToCode(i,"VALUE",e.JavaScript.ORDER_NONE)||"0",n=`()=> {${e.JavaScript.statementToCode(i,"DO_CB")}}`;return`
  ${e.JavaScript.provideFunction_("time_after",[`
  // time_after block
  async function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(value, doCb) { 
    await BABYLON.Tools.DelayAsync(Number(${t}) * 1000);
    doCb();
  }`])}(${t}, ${n});`},e.JavaScript.time_every_frame=i=>`
  appInstance.scene.onBeforeRenderObservable.add(()=>{
    ${e.JavaScript.statementToCode(i,"DO_CB")}
  })`,e.JavaScript.get_delta_time=i=>["appInstance.engine.getDeltaTime() / 1000",e.JavaScript.ORDER_FUNCTION_CALL],e.JavaScript.create_timer=i=>{const t=e.JavaScript.valueToCode(i,"SECONDS",e.JavaScript.ORDER_NONE);return[`window.setInterval(() => {${e.JavaScript.statementToCode(i,"DO_CB",e.JavaScript.ORDER_NONE)}}, ${t} * 1000)`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.remove_timer=i=>{const t=e.JavaScript.valueToCode(i,"TIMER",e.JavaScript.ORDER_NONE);return t?`
  clearInterval(${t});`:""},e.JavaScript.material_selector=i=>[`appInstance.scene.getMaterialByName(${e.JavaScript.valueToCode(i,"NAME",e.JavaScript.ORDER_NONE)||"''"})`,e.JavaScript.ORDER_FUNCTION_CALL],e.JavaScript.all_materials=i=>["appInstance.scene.materials",e.JavaScript.ORDER_FUNCTION_CALL],e.JavaScript.create_material=i=>{const t=e.JavaScript.valueToCode(i,"NAME",e.JavaScript.ORDER_NONE)||"''",n=i.getFieldValue("TYPE");let a;switch(n){case"StandardMaterial":a=`new BABYLON.StandardMaterial(${t}, appInstance.scene)`;break;case"PBRMaterial":a=`new BABYLON.PBRMaterial(${t}, appInstance.scene)`;break;case"NodeMaterial":a=`new BABYLON.NodeMaterial(${t}, appInstance.scene)`;break;case"BackgroundMaterial":a=`new BABYLON.BackgroundMaterial(${t}, appInstance.scene)`;break}return[a,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.create_node_material_from_json=i=>{const t=e.JavaScript.valueToCode(i,"JSON",e.JavaScript.ORDER_NONE),n=e.JavaScript.valueToCode(i,"ROOT",e.JavaScript.ORDER_NONE);return t?[`BABYLON.NodeMaterial.Parse(JSON.parse(${t}), appInstance.scene, ${n})`,e.JavaScript.ORDER_FUNCTION_CALL]:""},e.JavaScript.set_get_material_prop=i=>{const t=i.getFieldValue("METHOD"),n=e.JavaScript.valueToCode(i,"MATERIAL",e.JavaScript.ORDER_NONE),a=i.getFieldValue("KEY"),s=e.JavaScript.valueToCode(i,"VALUE",e.JavaScript.ORDER_NONE)||"0";if(!n)return"";if(t==="set")return`
    ${n}.${a} = ${s};`;if(t==="get")return[`${n}.${a}`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.remove_material=i=>{const t=e.JavaScript.valueToCode(i,"MATERIAL",e.JavaScript.ORDER_NONE);return t?`
  appInstance.scene.removeMaterial(${t});`:""},e.JavaScript.get_material_by_mesh=i=>{const t=e.JavaScript.valueToCode(i,"MESH",e.JavaScript.ORDER_NONE)||"''";return t?[`${t}.material`,e.JavaScript.ORDER_FUNCTION_CALL]:""},e.JavaScript.create_texture=i=>{const t=i.getFieldValue("TYPE"),n=e.JavaScript.valueToCode(i,"URL",e.JavaScript.ORDER_NONE)||"''";switch(t){case"Texture":return[`new BABYLON.Texture(${n}, appInstance.scene)`,e.JavaScript.ORDER_FUNCTION_CALL];case"CubeTexture":return[`BABYLON.CubeTexture.CreateFromPrefilteredData(${n}, appInstance.scene)`,e.JavaScript.ORDER_FUNCTION_CALL]}},e.JavaScript.set_get_texture_prop=i=>{const t=i.getFieldValue("METHOD"),n=e.JavaScript.valueToCode(i,"TEXTURE",e.JavaScript.ORDER_NONE),a=i.getFieldValue("KEY"),s=e.JavaScript.valueToCode(i,"VALUE",e.JavaScript.ORDER_NONE)||"0";if(!n)return"";if(t==="set")return`
    ${n}.${a} = ${s};`;if(t==="get")return[`${n}.${a}`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.remove_texture=i=>{const t=e.JavaScript.valueToCode(i,"TEXTURE",e.JavaScript.ORDER_NONE);return t?`
  appInstance.scene.removeTexture(${t});`:""},e.JavaScript.material_get_texture=i=>[`appInstance.scene.getTextureByName(${e.JavaScript.valueToCode(i,"NAME",e.JavaScript.ORDER_NONE)||"''"})`,e.JavaScript.ORDER_FUNCTION_CALL],e.JavaScript.material_color3=i=>{const t=e.JavaScript.valueToCode(i,"R",e.JavaScript.ORDER_NONE)||"''",n=e.JavaScript.valueToCode(i,"G",e.JavaScript.ORDER_NONE)||"''",a=e.JavaScript.valueToCode(i,"B",e.JavaScript.ORDER_NONE)||"''";return[`BABYLON.Color3.FromInts(${t}, ${n}, ${a})`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.field_color3=i=>{const t=i.getFieldValue("R"),n=i.getFieldValue("G"),a=i.getFieldValue("B");return[`BABYLON.Color3.FromInts(${t}, ${n}, ${a})`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.material_color4=i=>{const t=e.JavaScript.valueToCode(i,"R",e.JavaScript.ORDER_NONE)||"''",n=e.JavaScript.valueToCode(i,"G",e.JavaScript.ORDER_NONE)||"''",a=e.JavaScript.valueToCode(i,"B",e.JavaScript.ORDER_NONE)||"''",s=e.JavaScript.valueToCode(i,"A",e.JavaScript.ORDER_NONE)||"''";return[`BABYLON.Color4.FromInts(${t}, ${n}, ${a}, ${s})`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.field_color4=i=>{const t=i.getFieldValue("R"),n=i.getFieldValue("G"),a=i.getFieldValue("B"),s=i.getFieldValue("A");return[`BABYLON.Color4.FromInts(${t}, ${n}, ${a}), ${s}`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.material_color3_from_hex=i=>[`BABYLON.Color3.FromHexString(${e.JavaScript.valueToCode(i,"HEX",e.JavaScript.ORDER_NONE)||"'#000000'"})`,e.JavaScript.ORDER_FUNCTION_CALL],e.JavaScript.material_color4_from_hex=i=>[`BABYLON.Color4.FromHexString(${e.JavaScript.valueToCode(i,"HEX",e.JavaScript.ORDER_NONE)||"'#00000000'"})`,e.JavaScript.ORDER_FUNCTION_CALL],e.JavaScript.math_vector2=i=>{const t=e.JavaScript.valueToCode(i,"X",e.JavaScript.ORDER_NONE)||"0",n=e.JavaScript.valueToCode(i,"Y",e.JavaScript.ORDER_NONE)||"0";return[`new BABYLON.Vector3(${t}, ${n})`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.math_vector3=i=>{const t=e.JavaScript.valueToCode(i,"X",e.JavaScript.ORDER_NONE)||"0",n=e.JavaScript.valueToCode(i,"Y",e.JavaScript.ORDER_NONE)||"0",a=e.JavaScript.valueToCode(i,"Z",e.JavaScript.ORDER_NONE)||"0";return[`new BABYLON.Vector3(${t}, ${n}, ${a})`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.field_vector2=i=>{const t=i.getFieldValue("X"),n=i.getFieldValue("Y");return[`new BABYLON.Vector2(${t}, ${n})`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.field_vector3=i=>{const t=i.getFieldValue("X"),n=i.getFieldValue("Y"),a=i.getFieldValue("Z");return[`new BABYLON.Vector3(${t}, ${n}, ${a})`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.field_vector4=i=>{const t=i.getFieldValue("X"),n=i.getFieldValue("Y"),a=i.getFieldValue("Z"),s=i.getFieldValue("W");return[`new BABYLON.Vector4(${t}, ${n}, ${a}, ${s})`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.math_clone_vector=i=>{const t=e.JavaScript.valueToCode(i,"VECTOR",e.JavaScript.ORDER_NONE);return t?[`${t}.clone()`,e.JavaScript.ORDER_FUNCTION_CALL]:""},e.JavaScript.math_arithmetic_vector=i=>{const t=e.JavaScript.valueToCode(i,"VECTOR_A",e.JavaScript.ORDER_NONE),n=e.JavaScript.valueToCode(i,"VECTOR_B",e.JavaScript.ORDER_NONE),a=i.getFieldValue("METHOD");switch(a){case"add":case"subtract":case"multiply":case"divide":case"scale":return[`${t}.${a}(${n})`,e.JavaScript.ORDER_FUNCTION_CALL];case"Cross":case"Dot":case"Distance":case"Center":return[`BABYLON.Vector3.${a}(${t}, ${n})`,e.JavaScript.ORDER_FUNCTION_CALL];case"normalize":case"negate":case"length":return[`${t}.${a}()`,e.JavaScript.ORDER_FUNCTION_CALL]}},e.JavaScript.app_get_fps=i=>["appInstance.engine.getFps()",e.JavaScript.ORDER_FUNCTION_CALL],e.JavaScript.display_axes=i=>{const t=e.JavaScript.valueToCode(i,"SIZE",e.JavaScript.ORDER_NONE)||"''",n=e.JavaScript.valueToCode(i,"PARENT",e.JavaScript.ORDER_NONE)||"''";return`
  ${e.JavaScript.provideFunction_("display_axes",[`
  // display_axes block
  function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(size, parent) { 
    const axes = new BABYLON.AxesViewer(appInstance.scene, size);
    if(parent) {
      axes.xAxis.parent = parent;
      axes.yAxis.parent = parent;
      axes.zAxis.parent = parent;
    }
  }
     `])}(${t}, ${n});`},e.JavaScript.display_vertex_normal=i=>{const t=e.JavaScript.valueToCode(i,"MESH",e.JavaScript.ORDER_NONE)||"''",n=e.JavaScript.valueToCode(i,"SIZE",e.JavaScript.ORDER_NONE)||"''",a=e.JavaScript.valueToCode(i,"COLOR",e.JavaScript.ORDER_NONE)||"''";return`
  ${e.JavaScript.provideFunction_("display_vertex_normal",[`
  // display_vertex_normal block
  function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(mesh, size, color) { 
    if(!mesh) return;
    const normals = mesh.getVerticesData(BABYLON.VertexBuffer.NormalKind);
    const positions = mesh.getVerticesData(BABYLON.VertexBuffer.PositionKind);
    color = color || BABYLON.Color3.White();

    const lines = [];
    for (let i = 0; i < normals.length; i += 3) {
      const v1 = BABYLON.Vector3.FromArray(positions, i);
      const v2 = v1.add(BABYLON.Vector3.FromArray(normals, i).scaleInPlace(size));
      lines.push([v1.add(mesh.position), v2.add(mesh.position)]);
    }
    const normalLines = BABYLON.MeshBuilder.CreateLineSystem("normalLines", { lines: lines }, appInstance.scene);
    normalLines.color = color;
  }
     `])}(${t}, ${n}, ${a});`},e.JavaScript.display_face_normal=i=>{const t=e.JavaScript.valueToCode(i,"MESH",e.JavaScript.ORDER_NONE)||"''",n=e.JavaScript.valueToCode(i,"SIZE",e.JavaScript.ORDER_NONE)||"''",a=e.JavaScript.valueToCode(i,"COLOR",e.JavaScript.ORDER_NONE)||"''";return`
  ${e.JavaScript.provideFunction_("display_face_normal",[`
  // display_face_normal block
  function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(mesh, size, color) { 
    if(!mesh) return;
    mesh.updateFacetData();
    const positions = mesh.getFacetLocalPositions();
    const normals = mesh.getFacetLocalNormals();

    const lines = [];
    for (let i = 0; i < positions.length; i++) {
        const line = [ positions[i], positions[i].add(normals[i]).scale(size) ];
        lines.push(line);
    }
    const lineSystem = BABYLON.MeshBuilder.CreateLineSystem("ls", {lines: lines}, appInstance.scene);
    lineSystem.color = color;
    lineSystem.parent = mesh;
  }
     `])}(${t}, ${n}, ${a});`},e.JavaScript.feature_available=i=>{const t=`'${i.getFieldValue("FEATURE")}'`;return[`${e.JavaScript.provideFunction_("feature_available",[`
  const Detector = {
    checkWebGL: function () {
      try {
        const e = document.createElement("canvas");
        return !(!window.WebGLRenderingContext || !e.getContext("webgl") && !e.getContext("experimental-webgl"))
      } catch (e) {
        return !1
      }
    },
    checkWebGL2: function () {
      try {
        const e = document.createElement("canvas");
        return !(!window.WebGL2RenderingContext || !e.getContext("webgl2"))
      } catch (e) {
        return !1
      }
    },
    checkWorkers: function () {
      return !!window.Worker
    },
    checkFileAPI: function () {
      return window.File && window.FileReader && window.FileList && window.Blob
    },
    genWebGLErrorMessage: function () {
      const e = document.createElement("div");
      return e.innerHTML = window.WebGLRenderingContext ? "\u663E\u5361\u4E0D\u652F\u6301WebGL.<br/>" : "\u6D4F\u89C8\u5668\u4E0D\u652F\u6301WebGL"
    },
    showWebGLErrorMessage: function (e) {
      (e = e || document.body).appendChild(Detector.genWebGLErrorMessage());
      const t = document.getElementById("v3d_preloader_container");
      t && (t.style.visibility = "hidden")
    },
    checkIOS: function () {
      return (/iPad|iPhone|iPod/.test(navigator.platform) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) && !window.MSStream
    },
    checkAndroid: function () {
      return !!navigator.userAgent.match(/Android/i)
    },
    checkSafari: function () {
      return /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)
    },
    checkFloatTex: function (e, t) {
      const n = e.getContext();
      return !(!e.capabilities.isWebGL2 || !n.getExtension("EXT_color_buffer_float") || t && !n.getExtension("OES_texture_float_linear")) || !(e.capabilities.isWebGL2 || !n.getExtension("OES_texture_float") || t && !n.getExtension("OES_texture_float_linear"))
    },
    checkHalfFloatTex: function (e, t) {
      const n = e.getContext();
      return !(!e.capabilities.isWebGL2 || !n.getExtension("EXT_color_buffer_float")) || !(e.capabilities.isWebGL2 || !n.getExtension("OES_texture_half_float") || t && !n.getExtension("OES_texture_half_float_linear"))
    },
    checkHalfFloatReadPixels: function (e) {
      const t = e.getContext(),
        n = e.capabilities;
      return !/Firefox/.test(navigator.userAgent) && !!(t.getExtension("EXT_color_buffer_half_float") || n.isWebGL2 && t.getExtension("EXT_color_buffer_float"))
    },
    checkFloatReadPixels: function (e) {
      const t = e.getContext();
      return !!(e.capabilities.isWebGL2 || t.getExtension("OES_texture_float") || t.getExtension("WEBGL_color_buffer_float"))
    },
    checkDepthTex: function (e) {
      const t = e.getContext();
      return !(!e.capabilities.isWebGL2 && !t.getExtension("WEBGL_depth_texture"))
    },
    getGPUVendor: function (e) {
      const t = e ? e.getContext() : document.createElement("canvas").getContext("webgl") || document.createElement("canvas").getContext("experimental-webgl"),
        n = t.getExtension("WEBGL_debug_renderer_info");
      return null != n ? t.getParameter(n.UNMASKED_VENDOR_WEBGL) : ""
    },
    getGPUModel: function (e) {
      const t = e ? e.getContext() : document.createElement("canvas").getContext("webgl") || document.createElement("canvas").getContext("experimental-webgl"),
        n = t.getExtension("WEBGL_debug_renderer_info");
      return null != n ? t.getParameter(n.UNMASKED_RENDERER_WEBGL) : ""
    },
    checkWebXR: function (e, t, n) {
      "xr" in navigator && navigator.xr.isSessionSupported ? navigator.xr.isSessionSupported(e).then((function (e) {
        e ? t() : n()
      })).catch(n) : n()
    },
    checkNativeWebXR: function () {
      return !1
    },
    checkCardboard: function () {
      return !1
    },
    checkSwiftShader: function (e) {
      return "Google SwiftShader" == this.getGPUModel(e)
    },
    checkWebAudio: function () {
      return void 0 !== (window.AudioContext || window.webkitAudioContext)
    },
    isSafariWithMultisamplingBug: function () {
      if (!this.checkSafari()) return !1;
      const e = navigator.userAgent;
      return e.match("Version/15.4") || e.match("Version/15.5") || e.match(/CPU (OS|iPhone OS) (15_4|15_5) like Mac OS X/)
    }
  }
  // feature_available block
  function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(feature) {
    var userAgent = window.navigator.userAgent;
    var platform = window.navigator.platform;
    switch (feature) {
      case 'LINUX':
          return /Linux/.test(platform);
      case 'WINDOWS':
          return ['Win32', 'Win64', 'Windows', 'WinCE'].indexOf(platform) !== -1;
      case 'MACOS':
          return (['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'].indexOf(platform) !== -1 && !Detector.checkIOS());
      case 'IOS':
          return Detector.checkIOS();
      case 'ANDROID':
          return /Android/i.test(userAgent);
      case 'MOBILE':
          return (/Android|webOS|BlackBerry/i.test(userAgent) || Detector.checkIOS());
  
      case 'CHROME':
          // Chromium based
          return (!!window.chrome && !/Edge/.test(navigator.userAgent));
      case 'FIREFOX':
          return /Firefox/.test(navigator.userAgent);
      case 'IE':
          return /Trident/.test(navigator.userAgent);
      case 'EDGE':
          return /Edge/.test(navigator.userAgent);
      case 'SAFARI':
          return (/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent));
  
      case 'TOUCH':
          return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
      case 'RETINA':
          return window.devicePixelRatio >= 2;
      case 'WEBAUDIO':
          return Detector.checkWebAudio();
      case 'WEBGL2':
          var canvas = document.createElement('canvas');
          var gl = canvas.getContext('webgl2')
          return !!gl;
      case 'DO_NOT_TRACK':
          if (navigator.doNotTrack == '1' || window.doNotTrack == '1')
              return true;
          else
              return false;
      default:
          return false;
      }
  }
  `])}(${t})`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.create_fullscreen_UI=i=>{const t=e.JavaScript.valueToCode(i,"NAME",e.JavaScript.ORDER_NONE),n=e.JavaScript.valueToCode(i,"JSON",e.JavaScript.ORDER_NONE)||"{}";return[`${e.JavaScript.provideFunction_("create_fullscreen_UI",[`
  // create_fullscreen_UI block
  function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(name, json) { 
    let advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI(name, true, appInstance.scene, BABYLON.Texture.NEAREST_NEAREST);
    advancedTexture.parseContent(JSON.parse(json));
    advancedTexture.rootContainer.scaleX = window.devicePixelRatio;
    advancedTexture.rootContainer.scaleY = window.devicePixelRatio;
    return advancedTexture;
  }`])}(${t}, ${n})`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.gui_get_control=i=>{const t=e.JavaScript.valueToCode(i,"NAME",e.JavaScript.ORDER_NONE)||"''",n=e.JavaScript.valueToCode(i,"ADT",e.JavaScript.ORDER_NONE);return n?[`${n}.getControlByName(${t})`,e.JavaScript.ORDER_FUNCTION_CALL]:""},e.JavaScript.gui_control_prop=i=>{const t=i.getFieldValue("METHOD"),n=e.JavaScript.valueToCode(i,"CONTROL",e.JavaScript.ORDER_NONE),a=i.getFieldValue("PROP"),s=e.JavaScript.valueToCode(i,"VALUE",e.JavaScript.ORDER_NONE)||"''";if(!n)return"";if(t==="set")return`
    ${n}.${a} = ${s};`;if(t==="get")return[`${n}.${a}`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.gui_get_control_value=i=>{const t=e.JavaScript.valueToCode(i,"CONTROL",e.JavaScript.ORDER_NONE);return[`${e.JavaScript.provideFunction_("gui_get_control_value",[`
  // gui_get_control_value block
  function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(control) {
    if(!control) return;
    const controlType = control.getClassName();
    switch(controlType) {
      case 'TextBlock':
      case 'InputText':
      case 'InputPassword':
        return control.text
      case 'Checkbox':
      case 'RadioButton':
        return control.isChecked
      case 'ColorPicker':
      case 'Slider':
      case 'ImageBasedSlider':
        return control.value
      case 'Button':
        return control.name
    }
  }`])}(${t})`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.gui_get_child_controls=i=>{const t=e.JavaScript.valueToCode(i,"CONTROL",e.JavaScript.ORDER_NONE),n=i.getFieldValue("CHILDREN"),a=i.getFieldValue("TYPE");return t?a==="none"?[`${t}.getDescendants(${n==="directChildren"})`,e.JavaScript.ORDER_FUNCTION_CALL]:[`${t}.getDescendants(${n==="directChildren"}, control => control.getClassName() === '${a}')`,e.JavaScript.ORDER_FUNCTION_CALL]:""},e.JavaScript.gui_event=i=>{const t=i.getFieldValue("EVENT_TYPE"),n=e.JavaScript.valueToCode(i,"CONTROL",e.JavaScript.ORDER_NONE)||"''",a=e.JavaScript.statementToCode(i,"DO_CB");return`
  ${n}.${{pointerClick:"onPointerClickObservable",pointerDown:"onPointerDownObservable",pointerEnter:"onPointerEnterObservable",pointerMove:"onPointerMoveObservable",pointerOut:"onPointerOutObservable",pointerUp:"onPointerUpObservable",textChanged:"onTextChangedObservable",valueChanged:"onValueChangedObservable",wheel:"onWheelObservable"}[t]}.add(() => {
    ${a}
  });`},e.JavaScript.gui_move_control_to_vector=i=>{const t=e.JavaScript.valueToCode(i,"CONTROL",e.JavaScript.ORDER_NONE)||"''",n=e.JavaScript.valueToCode(i,"TARGET",e.JavaScript.ORDER_NONE)||"''";return t?`
  ${t}.moveToVector3(${n}, appInstance.scene);`:""};const Kt=`
  // common function
  function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]"
  }`;e.JavaScript.create_tweak_pane=i=>{const t=e.JavaScript.valueToCode(i,"TITLE",e.JavaScript.ORDER_NONE)||"''";return`
  ${e.JavaScript.provideFunction_("create_tweak_pane",[`
  // create_tweak_pane
  function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(title) { 
    // \u5220\u9664\u5DF2\u7ECF\u521B\u5EFA\u7684Pane\u5B9E\u4F8B
    if(appInstance._glob.gui) {
      appInstance._glob.gui.dispose();
      const elem = document.getElementById('gui-container');
      elem.parentElement.removeChild(elem);
    }
    const container = document.createElement('div');
    container.className = 'gui-container';
    container.id = 'gui-container';
    document.getElementById('renderCanvas').parentElement.appendChild(container);

    const pane = new Tweakpane.Pane({container: container, title: title});
    appInstance._glob.gui = pane;
  }`])}(${t});`},e.JavaScript.pane_add_folder=i=>{const t=e.JavaScript.valueToCode(i,"TITLE",e.JavaScript.ORDER_NONE)||"''";return[`${e.JavaScript.provideFunction_("pane_add_folder",[`
  // pane_add_folder block
  function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(title) { 
    if(!appInstance._glob.gui) return;
    return appInstance._glob.gui.addFolder({title: title})
  }`])}(${t})`,e.JavaScript.ORDER_FUNCTION_CALL]},e.JavaScript.pane_slider_options=e.JavaScript.object_key_value,e.JavaScript.pane_add_slider=i=>{const t=e.JavaScript.valueToCode(i,"FOLDER",e.JavaScript.ORDER_NONE)||null,n=e.JavaScript.valueToCode(i,"LABEL",e.JavaScript.ORDER_NONE)||"''",a=e.JavaScript.valueToCode(i,"OPTIONS",e.JavaScript.ORDER_NONE)||"{}",s=`() => {${e.JavaScript.statementToCode(i,"DO_CB")}}`;return e.JavaScript.provideFunction_("is_object",[Kt]),`
  ${e.JavaScript.provideFunction_("pane_add_slider",[`
  // pane_add_slider block
  function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(folder, label, options, doCb) { 
    if(!appInstance._glob.gui) return;
    const defaultOptions = {
      min: 0,
      max: 1,
      value: 0.5,
    }
    is_object(options) && Object.assign(defaultOptions, options);
    const labels = {};
    labels[label] = defaultOptions.value
    const sliderInput = folder ? folder.addInput(labels, label, defaultOptions) : appInstance._glob.gui.addInput(labels, label, defaultOptions)
    sliderInput.on('change', event => {
      appInstance._glob.tweakPanValue = event.value;
      doCb();
    })
  }`])}(${t}, ${n}, ${a}, ${s});`},e.JavaScript.pane_add_list=i=>{const t=e.JavaScript.valueToCode(i,"FOLDER",e.JavaScript.ORDER_NONE)||null,n=e.JavaScript.valueToCode(i,"LABEL",e.JavaScript.ORDER_NONE)||"''",a=e.JavaScript.valueToCode(i,"OPTIONS",e.JavaScript.ORDER_NONE)||"{}",s=`() => {${e.JavaScript.statementToCode(i,"DO_CB")}}`;return e.JavaScript.provideFunction_("is_object",[Kt]),`
  ${e.JavaScript.provideFunction_("pane_add_list",[`
  // pane_add_list block
  function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(folder, label, options, doCb) { 
    if(!appInstance._glob.gui) return;
    const defaultOptions = {
      options: {}
    }
    is_object(options) && Object.assign(defaultOptions.options, options);
    const labels = {};
    labels[label] = Object.entries(defaultOptions.options)[0][1];
    const listInput = folder ? folder.addInput(labels, label, defaultOptions) : appInstance._glob.gui.addInput(labels, label, defaultOptions)
    listInput.on('change', event => {
      appInstance._glob.tweakPanValue = event.value;
      doCb();
    })
  }`])}(${t}, ${n}, ${a}, ${s});`},e.JavaScript.pane_add_checkbox=i=>{const t=e.JavaScript.valueToCode(i,"FOLDER",e.JavaScript.ORDER_NONE)||null,n=e.JavaScript.valueToCode(i,"LABEL",e.JavaScript.ORDER_NONE)||"''",a=i.getFieldValue("CHECKED")==="TRUE",s=`() => {${e.JavaScript.statementToCode(i,"DO_CB")}}`;return`
  ${e.JavaScript.provideFunction_("pane_add_checkbox",[`
  // pane_add_checkbox block
  function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(folder, label, checked, doCb) { 
    if(!appInstance._glob.gui) return;
    const defaultOptions = {}
    defaultOptions[label] = checked;
    const checkboxInput = folder ? folder.addInput(defaultOptions, label) : appInstance._glob.gui.addInput(defaultOptions, label)
    checkboxInput.on('change', event => {
      appInstance._glob.tweakPanValue = event.value;
      doCb();
    })
  }`])}(${t}, ${n}, ${a}, ${s});`},e.JavaScript.pane_add_text=i=>{const t=e.JavaScript.valueToCode(i,"FOLDER",e.JavaScript.ORDER_NONE)||null,n=e.JavaScript.valueToCode(i,"LABEL",e.JavaScript.ORDER_NONE)||"''",a=e.JavaScript.valueToCode(i,"TEXT",e.JavaScript.ORDER_NONE)||"''",s=`() => {${e.JavaScript.statementToCode(i,"DO_CB")}}`;return`
  ${e.JavaScript.provideFunction_("pane_add_text",[`
  // pane_add_text block
  function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(folder, label, text, doCb) { 
    if(!appInstance._glob.gui) return;
    const defaultOptions = {}
    defaultOptions[label] = text;
    const textInput = folder ? folder.addInput(defaultOptions, label) : appInstance._glob.gui.addInput(defaultOptions, label)
    textInput.on('change', event => {
      appInstance._glob.tweakPanValue = event.value;
      doCb();
    })
  }`])}(${t}, ${n}, ${a}, ${s});`},e.JavaScript.pane_add_color=i=>{const t=e.JavaScript.valueToCode(i,"FOLDER",e.JavaScript.ORDER_NONE)||null,n=e.JavaScript.valueToCode(i,"LABEL",e.JavaScript.ORDER_NONE)||"''",a=e.JavaScript.valueToCode(i,"COLOR",e.JavaScript.ORDER_NONE)||"''",s=`() => {${e.JavaScript.statementToCode(i,"DO_CB")}}`;return`
  ${e.JavaScript.provideFunction_("pane_add_color",[`
  // pane_add_color block
  function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(folder, label, color, doCb) { 
    if(!appInstance._glob.gui) return;
    const defaultOptions = {}
    color.substring(0,1) === '#' && (defaultOptions[label] = color);
    const options = {view: 'color'}
    const colorInput = folder ? folder.addInput(defaultOptions, label, options) : appInstance._glob.gui.addInput(defaultOptions, label, options)
    colorInput.on('change', event => {
      appInstance._glob.tweakPanValue = event.value;
      doCb();
    })
  }`])}(${t}, ${n}, ${a}, ${s});`},e.JavaScript.pane_add_button=i=>{const t=e.JavaScript.valueToCode(i,"FOLDER",e.JavaScript.ORDER_NONE)||null,n=e.JavaScript.valueToCode(i,"TITLE",e.JavaScript.ORDER_NONE)||"''",a=`() => {${e.JavaScript.statementToCode(i,"DO_CB")}}`;return`
  ${e.JavaScript.provideFunction_("pane_add_button",[`
  // pane_add_button block
  function ${e.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(folder, title, doCb) { 
    if(!appInstance._glob.gui) return;
    const options = { title: title }
    const btn = folder ? folder.addButton(options) : appInstance._glob.gui.addButton(options)
    btn.on('click', () => {
      doCb();
    })

  }`])}(${t}, ${n}, ${a});`},e.JavaScript.pane_get_value=i=>["appInstance._glob.tweakPanValue",e.JavaScript.ORDER_FUNCTION_CALL];const Zt=[{text_style:160},{math_style:230},{list_style:260},{logic_style:210},{loop_style:120},{object_style:230},{procedure_style:290},{variable_style:330},{advanced_style:270},{tools_style:350},{scenes_style:20},{nodes_style:180},{meshes_style:120},{cameras_style:120},{lights_style:120},{events_style:350},{animation_style:320},{time_style:220},{template_style:20},{system_style:30},{material_style:270},{gui_style:200},{inspector_style:200},{tweak_pane_style:200}];function qt(i,t){const n={};return i.forEach(a=>{const s=Object.keys(a)[0],r={colour:a[s]},p={colourPrimary:a[s]},d={};d[s]=t==="category"?r:p,Object.assign(n,d)}),n}const Bt=qt(Zt,"category"),ei=qt(Zt,"block"),ta={workspaceBackgroundColour:"#181818",toolboxBackgroundColour:"#212121",toolboxForegroundColour:"#fff",flyoutBackgroundColour:"#333",flyoutForegroundColour:"#fff",flyoutOpacity:"0.92",scrollbarColour:"#fff",scrollbarOpacity:"0.2"},ia={workspaceBackgroundColour:"#eee",toolboxBackgroundColour:"#ddd",toolboxForegroundColour:"#000",flyoutBackgroundColour:"#fff",flyoutForegroundColour:"#000",flyoutOpacity:"0.92",scrollbarColour:"#aaa"};e.Themes.Dark=e.Theme.defineTheme("Dark",{base:e.Themes.Classic,blockStyles:ei,categoryStyles:Bt,componentStyles:ta}),e.Themes.Light=e.Theme.defineTheme("Light",{base:e.Themes.Classic,blockStyles:ei,categoryStyles:Bt,componentStyles:ia});class na{constructor(t){this.title=t,this.id=e.utils.idGenerator.genUid(),this.tabElem=document.createElement("li"),this.tabElem.className="tab-item",this.tabElem.title=t,this.tabElem.dataset.uid=this.id,this.tabElem.innerText=this.title,this.editor=null,this.editorElem=null,this.type="code"}focus(t){this.editor&&this.editorElem&&(this.editorElem.className=t?"workspace-container show":"workspace-container hide",t?(this.tabElem.classList.add("tab-active"),this.editor.focus()):this.tabElem.className="tab-item")}setValue(t){!this.editor||this.editor.setValue(t)}getValue(){if(!!this.editor)return this.editor.getValue()}save(){const t=this,n=this.editor.getValue();return{title:t.title,id:t.id,type:t.type,data:n,js:n}}resize(){this.editor&&this.editor.layout()}onBeforeDispose(){}dispose(){this.onBeforeDispose&&this.onBeforeDispose(),this.editor&&this.editor.dispose(),this.editor=null,this.tabElem.parentNode&&this.tabElem.parentNode.removeChild(this.tabElem),this.editorElem.parentNode&&this.editorElem.parentNode.removeChild(this.editorElem)}}class aa{constructor(t){this.title=t,this.id=j.default.utils.idGenerator.genUid(),this.tabElem=document.createElement("li"),this.tabElem.className="tab-item",this.tabElem.title=t,this.tabElem.dataset.uid=this.id,this.tabElem.innerText=this.title,this.workspace=null,this.workspaceElem=null,this.type="block"}focus(t){this.workspace&&this.workspaceElem&&(this.workspace.setVisible(t),this.workspace.markFocused(),this.workspace.hideChaff(!0),this.workspaceElem.className=t?"workspace-container show":"workspace-container hide",j.default.selected&&j.default.selected.unselect(),t?this.tabElem.classList.add("tab-active"):this.tabElem.className="tab-item")}load(t){this.workspace&&j.default.serialization.workspaces.load(t,this.workspace)}save(){const t=this,n=j.default.serialization.workspaces.save(this.workspace),a=j.default.JavaScript.workspaceToCode(this.workspace);return{title:t.title,id:t.id,type:t.type,data:n,js:a}}resize(){this.workspace&&j.default.svgResize(this.workspace)}onBeforeDispose(){}dispose(){this.onBeforeDispose&&this.onBeforeDispose(),this.workspace&&this.workspace.dispose(),this.workspace=null,this.tabElem.parentNode&&this.tabElem.parentNode.removeChild(this.tabElem),this.workspaceElem.parentNode&&this.workspaceElem.parentNode.removeChild(this.workspaceElem)}removeUnusedVariables(){if(!this.workspace)return;const t=j.default.Variables.allUsedVarModels(this.workspace),n=this.workspace.getAllVariables();for(let a of n)t.includes(a)||a.workspace.deleteVariableById(a.getId())}}class sa{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const a=this._listeners;return a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const a=this._listeners[t.type];if(a!==void 0){t.target=this;const s=a.slice(0);for(let r=0,p=s.length;r<p;r++)s[r].call(this,t)}}}class ra extends sa{constructor(n,a){super();c(this,"doAddTab",()=>{const n=this;this.tabDialog.display(!0),this.tabDialog.getData=async a=>{const{tabTitle:s,tabType:r}=a;if(!s||!r)return;const p=await n.addTab(s,r);n.setActive(p),n.dispatchEvent({type:"add"}),n.tabDialog.display(!1)}});c(this,"doRemoveTab",()=>{if(this.active===this.mainTab||!window.confirm(`${this.lang=="zh"?"\u5220\u9664\u9009\u9879\u5361\uFF1A":"remove the tab: "}`+this.active.title))return;const a=this.removeTab();this.setActive(this.tabs[a-1]),this.dispatchEvent({type:"remove"})});c(this,"doRenameTab",()=>{const n=window.prompt(this.lang=="zh"?"\u65B0\u540D\u5B57\uFF1A":"new name: ");!n||(this.renameTab(n),this.dispatchEvent({type:"rename"}))});c(this,"doActiveTab",n=>{n.stopPropagation();const a=n.target.dataset.uid,s=this.getTabByUid(a);s&&(this.setActive(s),this.dispatchEvent({type:"active"}))});c(this,"resize",()=>{this.tabs.forEach(n=>n.resize())});this.editorContainer=n instanceof HTMLDivElement?n:document.querySelector(n),this.editorContent=document.createElement("div"),this.editorTab=document.createElement("div"),this.tabContainer=document.createElement("ul"),this.lang=a||"en",this.tabDialog=null,this.btnAdd=null,this.btnRemove=null,this.tabs=[],this.active=null,this.mainTab=null,this.customTabs=null,this.init()}async init(){this.editorContent.className="editor-content",this.editorContent.id="editorContent",this.editorContainer.appendChild(this.editorContent),this.editorTab.className="editor-tab",this.editorTab.id="editorTab",this.editorContainer.appendChild(this.editorTab),this.tabContainer.className="tab-container",this.editorTab.appendChild(this.tabContainer),this.mainTab=await this.addTab("main","block"),this.btnAdd=document.createElement("div"),this.btnAdd.className="tab-btn",this.btnAdd.innerHTML="+",this.btnAdd.title=this.lang==="zh"?"\u65B0\u5EFA\u9009\u9879\u5361":"Create a new tab",this.tabContainer.appendChild(this.btnAdd);const n=document.createElement("tab-dialog");n.lang=this.lang,document.body.appendChild(n),this.tabDialog=n,this.btnAdd.addEventListener("click",this.doAddTab),this.btnRemove=document.createElement("div"),this.btnRemove.className="tab-btn",this.btnRemove.innerHTML="-",this.btnRemove.title=this.lang==="zh"?"\u5220\u9664\u9009\u9879\u5361":"Remove tab",this.tabContainer.appendChild(this.btnRemove),this.btnRemove.addEventListener("click",this.doRemoveTab),this.tabContainer.addEventListener("click",this.doActiveTab),window.addEventListener("resize",this.resize)}async addTab(n,a){let s;return a==="block"?(s=new aa(n),this.active?this.active.tabElem.insertAdjacentElement("afterend",s.tabElem):this.tabContainer.appendChild(s.tabElem),s.workspaceElem=document.createElement("div"),s.workspaceElem.className="workspace-container",this.editorContent.appendChild(s.workspaceElem),s.workspace=e.inject(s.workspaceElem,{toolbox:ea,path:"/",theme:e.Themes.Dark,grid:{spacing:20,length:4,colour:"#ffffff1a",snap:!0},move:{scrollbars:{horizontal:!0,vertical:!0},drag:!0,wheel:!1},zoom:{controls:!0,wheel:!0,startScale:1,maxScale:1,minScale:.5,scaleSpeed:1.2,pinch:!0},trashcan:!1,oneBasedIndex:!1,renderer:"geras"}),s.workspace.registerButtonCallback("guiDocumentBtn",()=>{window.open("https://cocopon.github.io/tweakpane/getting-started.html")})):a==="code"&&(s=new na(n),this.active?this.active.tabElem.insertAdjacentElement("afterend",s.tabElem):this.tabContainer.appendChild(s.tabElem),s.editorElem=document.createElement("div"),s.editorElem.className="workspace-container",this.editorContent.appendChild(s.editorElem),s.editor=await this.createCodeEditor(s.editorElem)),this.active?this.tabs.splice(this.tabs.indexOf(this.active)+1,0,s):this.tabs.push(s),this.setActive(s),s.type=a,s}renameTab(n){const a=this.tabs.find(s=>s.title==n);return this.active.title===n||this.active===this.mainTab||a?!1:(this.active.title=n,this.active.tabElem.title=n,this.active.tabElem.innerText=n,!0)}createCodeEditor(n){const a=this;return new Promise(s=>{require.config({paths:{vs:"/js/monaco-editor/min/vs"},"vs/nls":{availableLanguages:{"*":"zh-cn"}}});const p={value:`  // \u5185\u7F6E\u53D8\u91CF: BABYLON
  const { engine, scene, camera, glob } = BABYLON.apps[0];

  function createBox() {
    const mesh = BABYLON.MeshBuilder.CreateBox('box', scene);
    const mat = new BABYLON.PBRMaterial('pbr', scene);
    mesh.material = mat;
  }

  createBox();
`,language:"javascript",fontSize:18,tabSize:2,readOnly:!1,theme:"vs-dark",scrollbar:{useShadows:!1,vertical:"hidden",horizontal:"visible",verticalScrollbarSize:0,horizontalScrollbarSize:10}};require(["vs/editor/editor.main"],d=>{d.languages.typescript.javascriptDefaults.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!1}),d.languages.typescript.javascriptDefaults.setCompilerOptions({target:d.languages.typescript.ScriptTarget.ES6,allowNonTsExtensions:!0}),a.addExtralLib(d),s(d.editor.create(n,p))})})}addExtralLib(){}removeTab(){if(this.tabs.length===1)return;const n=this.active,a=this.tabs.indexOf(n);return n.dispose(),this.tabs.splice(a,1),a}save(){return this.tabs.map(n=>n.save())}async loadJson(n){const a=Object.keys(n);n.main&&a.shift();for(let s of a){let r,p;switch(n[s].type){case"block":r=await this.addTab(s,"block");break;case"code":p=await this.addTab(s,"code");break}r&&r.load(n[s].data),p&&p.setValue(n[s].data)}this.mainTab.load(n.main.data)}setActive(n){!n||(this.tabs.forEach(a=>{a.focus(!1)}),n.focus(!0),this.active=n)}getTabByUid(n){return this.tabs.find(a=>a.id==n)}getTabByTitle(n){return this.tabs.find(a=>a.title==n)}dispose(){window.removeEventListener("resize",this.resize),this.btnAdd.removeEventListener("click",this.doAddTab),this.btnRemove.removeEventListener("click",this.doRemoveTab),this.tabContainer.removeEventListener("click",this.doActiveTab),this.editorContent.removeChild(this.editorContent),this.editorContent.removeChild(this.editorTab)}}class Se extends v{constructor(){super();c(this,"_onsubmit",n=>{n.preventDefault();const a=this,s=new FormData(n.target);for(const r of s)a.options[r[0]]=r[1];this.getData(a.options)});c(this,"_onclose",n=>{n.key==="Escape"&&this.display(!1)});this.lang="zh",this.isVisible=!1,this.options={}}render(){return E`
<div id="createTabDialog" class=${this.isVisible?"dialog-bg show":"dialog-bg hide"}>
  <div class="dialog">
    <div class="dialog-header">
      <div class="dialog-header-text">
        ${this.lang=="zh"?"\u65B0\u5EFA\u9009\u9879\u5361":"create tab"}
      </div>
      <div class="dialog-header-close" @click=${()=>this.display(!1)}>
      </div>
    </div>
      <form action="" id="createTabForm" class="dialog-content" @submit="${this._onsubmit}">
        <div class="dialog-text">
          ${this.lang=="zh"?"\u6807\u9898\uFF1A":"Title:"}
        </div>
        <span title="${this.lang=="zh"?"\u9009\u9879\u5361\u6807\u9898":"The title of the tab"}">
          <input type="text" class="input-text" id="tabTitle" name="tabTitle" value="title">
        </span>

        <div class="dialog-text">
          ${this.lang=="zh"?"\u7F16\u8F91\u5668\u7C7B\u578B\uFF1A":"Editor Type:"}
        </div>
        <div class="dialog-content" id="tabTypeSelector">
          <div>
            <input type="radio" checked value="block" name="tabType" id="blockType">
            <label for="blockType">
              ${this.lang=="zh"?"\u62FC\u56FE":"Block"}
            </label>
          </div>
          <div>
            <input type="radio" value="code" name="tabType" id="codeType">
            <label for="codeType">
              ${this.lang=="zh"?"\u4EE3\u7801":"Code"}
            </label>
          </div>
        </div>

        <input type="submit" value="OK" class="button" id="submitTab">
      </form>
  </div>
</div>
    `}display(n){this.isVisible=n}getData(){}connectedCallback(){super.connectedCallback(),addEventListener("keydown",this._onclose)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._onclose)}}c(Se,"styles",C`
  .dialog-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .dialog {
    color: var(--color);
    background-color: #1e1e1e;
    min-width: 350px;
    max-width: 800px;
    max-height: 600px;
    overflow: hidden;
    filter: drop-shadow(0px 0px 15px black);
  }
  .dialog-header {
    width: 100%;
    height: 20px;
    background-color: var(--bg);
    display: flex;
    align-items: center;
  }
  .dialog-header-text {
    color: var(--color);
    font-size: 12px;
    padding-left: 10px;
    user-select: none;
  }
  .dialog-header-close {
    background-image: url(../media/close.svg);
    background-repeat: no-repeat;
    width: 16px;
    height: 14px;
    margin-left: auto;
    margin-right: 10px;
    cursor: pointer;
  }
  .dialog-content {
    padding: 10px;
    border: var(--border);
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 560px;
    display: flex;
    flex-flow: column nowrap;
    user-select: none;
  }
  .input-text {
    height: 30px;
    width: 316px;
    font-size: inherit;
    padding: 2px 5px;
    color: var(--color);
    border: var(--border);
    background-color: #0c0c0c;
  }
  .dialog-row {
    display: flex;
    flex-flow: row nowrap;
    margin: 2px 0;
  }
  
  .dialog-text {
    margin: 5px 0;
    vertical-align: middle;
    flex: 0 0 auto;
  }
  .button {
    border: none;
    color: var(--color);
    background-color: var(--bg);
    height: 32px;
    font-size: inherit;
    display: block;
    min-width: 100px;
    padding: 0px 15px;
    margin: 20px auto 10px auto;
    cursor: pointer;
  }

  .w-100 {
    width: 100px;
  }

  .w-40 {
    width: 40px;
  }
  
  .hide {
    visibility: hidden;
  }
  
  .show {
    visibility: visible;
  }
  `),c(Se,"properties",{lang:{},isVisible:{},options:{}}),customElements.define("tab-dialog",Se);class oa{constructor(t,n,a){c(this,"down",t=>{t.preventDefault(),t.stopPropagation(),this.isMove=!1,this.rightElem.style.pointerEvents="none",this.gutterOffsetLeft=this.gutterElem.offsetLeft,this.pointerStartX=t.clientX,this.dragDistanceX=0,document.addEventListener("pointermove",this.move),document.addEventListener("pointerup",this.up)});c(this,"move",t=>{this.isMove=!0,this.dragDistanceX=this.gutterOffsetLeft+t.clientX-this.pointerStartX;let n=this.dragDistanceX/this.fullWidth*100;n<10&&(n=10),n>90&&(n=90),this.gutterElem.style.cursor="col-resize",this.leftElem.style.cursor="col-resize",this.rightElem.style.cursor="col-resize",document.body.style.cursor="col-resize",this.gutterElem.style.left=`${n}%`,this.leftElem.style.width=n+"%",this.rightElem.style.width=`calc(${100-n}% - ${this.gutterWidth}px)`,this.gutterPosition=n,this.onMove&&this.onMove()});c(this,"up",t=>{this.gutterElem.style.cursor="",this.leftElem.style.cursor="",this.rightElem.style.cursor="",document.body.style.cursor="",this.isMove=!1,this.rightElem.style.pointerEvents="auto",this.onStop&&this.onStop(),document.removeEventListener("pointermove",this.move),document.removeEventListener("pointerup",this.up)});c(this,"resize",()=>{this.fullWidth=this.leftElem.offsetWidth+this.gutterWidth+this.rightElem.offsetWidth});this.leftElem=t instanceof HTMLDivElement?t:document.querySelector(t),this.gutterElem=n instanceof HTMLDivElement?n:document.querySelector(n),this.rightElem=a instanceof HTMLDivElement?a:document.querySelector(a),this.gutterWidth=6,this.fullWidth=this.leftElem.offsetWidth+this.gutterWidth+this.rightElem.offsetWidth,this.isMove=!1,this.gutterOffsetLeft=this.gutterElem.offsetLeft,this.dragDistanceX=0,this.pointerStartX=0,this.gutterPosition=50,this.isLeftFullscreen=!1,this.isRightFullscreen=!1,window.addEventListener("resize",this.resize),this.gutterElem.addEventListener("pointerdown",this.down)}onStop(){}onMove(){}getPosition(){return this.gutterPosition.toFixed()}setPosition(t){this.leftElem.style.width=t+"%",this.gutterElem.style.left=`${t}%`,this.rightElem.style.width=`calc(${100-t}% - ${this.gutterWidth}px)`}fullscreen(t){t==="left"?(this.leftElem.style.width="100%",this.gutterElem.style.left=0,this.rightElem.style.width=0,this.isLeftFullscreen=!0,this.isRightFullscreen=!1):t==="right"&&(this.leftElem.style.width=0,this.gutterElem.style.left=`-${this.gutterWidth}px`,this.rightElem.style.width="100%",this.isLeftFullscreen=!1,this.isRightFullscreen=!0)}dispose(){window.removeEventListener("resize",this.resize),this.gutterElem.removeEventListener("pointerdown",this.down)}}class pa{constructor(t){this._container=t.parentElement,this._canvas=t,this._bar=document.createElement("div"),this._logo=document.createElement("div"),this._logoCont=document.createElement("div"),this._background=document.createElement("div");const n=window.getComputedStyle(this._canvas).position;this._bar.setAttribute("class","preloader-bar"),this._logo.setAttribute("class","preloader-logo"),this._logoCont.setAttribute("id","preloader_container"),this._logoCont.setAttribute("class","preloader-container"),this._background.setAttribute("class","preloader-background"),this._background.style.position=n==="fixed"?"fixed":"absolute",this._background.appendChild(this._logoCont),this._logoCont.appendChild(this._logo),this._logoCont.appendChild(this._bar)}start(){this._container.appendChild(this._background)}update(t){this._bar.style.width=t+"%"}finish(){this._background.classList.add("fade"),setTimeout(()=>{this._background&&this._background.parentElement&&this._background.parentElement.removeChild(this._background)},1e3)}}class da{constructor(t){c(this,"resize",()=>this.engine.resize());this.canvas=t?typeof t=="string"?document.getElementById(t):t:null,this.engine=null,this.scene=null,this.overlayScene=null,this.overlaySceneEnabled=!0,this.camera=null,this.env=null,this.defautlMaterial=null,this.assetsManager=null,this.preloader=null,this.fps=null,this.running=!1,this._glob={},this.glob={}}setup(){if(!this.canvas){document.body.style.width="100%",document.body.style.height="100%",document.body.style.margin="0",document.body.style.padding="0";const t=document.createElement("div");t.style.width="100%",t.style.height="100%",document.body.appendChild(t);const n=document.createElement("canvas");n.id="renderCanvas",n.style.width="100%",n.style.height="100%",n.style.display="block",t.appendChild(n),n.width=window.innerWidth,n.height=window.innerHeight,this.canvas=n}return this.engine=new BABYLON.Engine(this.canvas,!0,{stencil:!0}),this.scene=new BABYLON.Scene(this.engine),this.scene.environmentTexture=BABYLON.CubeTexture.CreateFromPrefilteredData("assets/texture/environment.dds",this.scene),this.env=this.scene.createDefaultEnvironment({environmentTexture:"assets/texture/environmentSpecular.env",skyboxTexture:"assets/texture/backgroundSkybox.dds",groundTexture:"assets/texture/backgroundGround.png"}),this.camera=new BABYLON.ArcRotateCamera("defaultCamera",-Math.PI/2,Math.PI/3,10,BABYLON.Vector3.Zero(),this.scene),this.camera.lowerRadiusLimit=1,this.camera.wheelPrecision=24,this.camera.attachControl(this.canvas),this.scene.activeCamera=this.camera,this.defautlMaterial=new BABYLON.PBRMaterial("defaultMaterial",this.scene),this.defautlMaterial.roughness=1,window.addEventListener("resize",this.resize),this}beforeRun(){}run(){this.beforeRun&&this.beforeRun(),this.engine.runRenderLoop(()=>this.scene.render()),this.running=!0}stop(){this.running&&this.engine.stopRenderLoop(),this.running=!1}getFps(){return this.engine.getFps().toFixed()}dispose(){window.removeEventListener("resize",this._resize),this.engine.dispose()}}class ca{constructor(t){this.elapsed=t,this.previousTime=0;const n=this;window.requestAnimationFrame(a);function a(){n.elapsed<Date.now()-n.previousTime&&(n.previousTime=Date.now(),n.onChange&&n.onChange()),window.requestAnimationFrame(a)}}onChange(){}}e.Css.register(`
/* App \u5185\u7F6E\u6837\u5F0F */
.preloader-background {
  background-color: #eee;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  height: 100%;
  width: 100%;
}

.fade {
  opacity: 0;
  transition: opacity 1s ease;
}

.preloader-container {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -90px;
  margin-left: -90px;
  width: 180px;
  height: 180px;
}
.preloader-bar {
  background: linear-gradient(90deg, #ae4115, #e16531);
  width: 0%;
  height: 3px;
  margin: 15px -1px;
  border-radius: 5px;
}
.preloader-logo {
  width: 110px;
  height: 120px;
  margin: 20px auto;
  background: center/contain no-repeat url("./assets/media/logo.svg");
}
.gui-container {
  position: absolute;
  top: 0;
  right: 0;
  width: 260px;
}
`);const ti={name:"createSetVariableBlock",callback:i=>(e.Variables.createVariableButtonHandler(i,t=>{if(!t)return;const n=i.getMetrics(),a=i.getVariable(t),s=e.Variables.generateVariableFieldDom(a),r=e.utils.xml.createElement("block");r.setAttribute("type","variables_set"),r.appendChild(s);const p=e.Xml.domToBlock(r,i);if(e.selected){const d=e.selected.getRelativeToSurfaceXY().clone();d.translate(20,e.selected.getHeightWidth().height+20),p.moveTo(d)}else p.moveTo(new e.utils.Coordinate(n.viewWidth/2+n.viewLeft,n.viewHeight/2+n.viewTop));i.centerOnBlock(p.id),setTimeout(()=>{p.select()},50)}),!0)};e.ShortcutRegistry.registry.register(ti);const la=e.ShortcutRegistry.registry.createSerializedKey(e.utils.KeyCodes.V,[e.utils.KeyCodes.SHIFT]);e.ShortcutRegistry.registry.addKeyMapping(la,ti.name);const ii={name:"createGetVariableBlock",callback:i=>(e.Variables.createVariableButtonHandler(i,t=>{if(!t)return;const n=i.getMetrics(),a=i.getVariable(t),s=e.Variables.generateVariableFieldDom(a),r=e.utils.xml.createElement("block");r.setAttribute("type","variables_get"),r.appendChild(s);const p=e.Xml.domToBlock(r,i);if(e.selected){const d=e.selected.getRelativeToSurfaceXY().clone();d.translate(20,e.selected.getHeightWidth().height+20),p.moveTo(d)}else p.moveTo(new e.utils.Coordinate(n.viewWidth/2+n.viewLeft,n.viewHeight/2+n.viewTop));i.centerOnBlock(p.id),setTimeout(()=>{p.select()},50)}),!0)};e.ShortcutRegistry.registry.register(ii);const ua=e.ShortcutRegistry.registry.createSerializedKey(e.utils.KeyCodes.V,[e.utils.KeyCodes.ALT,e.utils.KeyCodes.SHIFT]);e.ShortcutRegistry.registry.addKeyMapping(ua,ii.name);const ni={name:"createAdvancedCommentBlock",callback:i=>{const t=i.getMetrics(),n=e.utils.xml.createElement("block");n.setAttribute("type","advanced_comment");const a=e.Xml.domToBlock(n,i);if(e.selected){const s=e.selected.getRelativeToSurfaceXY().clone();s.translate(20,e.selected.getHeightWidth().height+20),a.moveTo(s)}else a.moveTo(new e.utils.Coordinate(t.viewWidth/2+t.viewLeft,t.viewHeight/2+t.viewTop));return i.centerOnBlock(a.id),setTimeout(()=>{a.select()},50),!0}};e.ShortcutRegistry.registry.register(ni);const ha=e.ShortcutRegistry.registry.createSerializedKey(e.utils.KeyCodes.C,[e.utils.KeyCodes.SHIFT]);e.ShortcutRegistry.registry.addKeyMapping(ha,ni.name);const ai={name:"createAdvancedConnectBlock",callback:i=>{const t=i.getMetrics(),n=e.utils.xml.createElement("block");n.setAttribute("type","advanced_connect");const a=e.Xml.domToBlock(n,i);if(e.selected){const s=e.selected.getRelativeToSurfaceXY().clone();s.translate(20,e.selected.getHeightWidth().height+20),a.moveTo(s)}else a.moveTo(new e.utils.Coordinate(t.viewWidth/2+t.viewLeft,t.viewHeight/2+t.viewTop));return i.centerOnBlock(a.id),setTimeout(()=>{a.select()},50),!0}};e.ShortcutRegistry.registry.register(ai);const ga=e.ShortcutRegistry.registry.createSerializedKey(e.utils.KeyCodes.C,[e.utils.KeyCodes.SHIFT,e.utils.KeyCodes.ALT]);e.ShortcutRegistry.registry.addKeyMapping(ga,ai.name);const si={name:"createConsoleLogBlock",callback:i=>{const t=i.getMetrics(),n=e.utils.xml.createElement("block");n.setAttribute("type","console_log");const a=e.utils.xml.createElement("value");a.setAttribute("name","TEXT"),n.appendChild(a);const s=e.utils.xml.createElement("shadow");s.setAttribute("type","text"),a.appendChild(s);const r=e.utils.xml.createElement("field");r.setAttribute("name","TEXT"),r.innerHTML="",s.appendChild(r);const p=e.Xml.domToBlock(n,i);if(e.selected){const d=e.selected.getRelativeToSurfaceXY().clone();d.translate(20,e.selected.getHeightWidth().height+20),p.moveTo(d)}else p.moveTo(new e.utils.Coordinate(t.viewWidth/2+t.viewLeft,t.viewHeight/2+t.viewTop));return i.centerOnBlock(p.id),setTimeout(()=>{p.select()},50),!0}};e.ShortcutRegistry.registry.register(si);const ma=e.ShortcutRegistry.registry.createSerializedKey(e.utils.KeyCodes.L,[e.utils.KeyCodes.SHIFT]);e.ShortcutRegistry.registry.addKeyMapping(ma,si.name);const ri={name:"createObjectBlock",callback:i=>{const t=i.getMetrics(),n=e.utils.xml.createElement("block");n.setAttribute("type","object_create");const a=e.Xml.domToBlock(n,i);if(e.selected){const s=e.selected.getRelativeToSurfaceXY().clone();s.translate(20,e.selected.getHeightWidth().height+20),a.moveTo(s)}else a.moveTo(new e.utils.Coordinate(t.viewWidth/2+t.viewLeft,t.viewHeight/2+t.viewTop));return i.centerOnBlock(a.id),setTimeout(()=>{a.select()},50),!0}};e.ShortcutRegistry.registry.register(ri);const _a=e.ShortcutRegistry.registry.createSerializedKey(e.utils.KeyCodes.O,[e.utils.KeyCodes.SHIFT]);e.ShortcutRegistry.registry.addKeyMapping(_a,ri.name);const oi={name:"createObjectKeyValueBlock",callback:i=>{const t=i.getMetrics(),n=e.utils.xml.createElement("block");n.setAttribute("type","object_key_value");const a=e.Xml.domToBlock(n,i);if(e.selected){const s=e.selected.getRelativeToSurfaceXY().clone();s.translate(20,e.selected.getHeightWidth().height+20),a.moveTo(s)}else a.moveTo(new e.utils.Coordinate(t.viewWidth/2+t.viewLeft,t.viewHeight/2+t.viewTop));return i.centerOnBlock(a.id),setTimeout(()=>{a.select()},50),!0}};e.ShortcutRegistry.registry.register(oi);const Ta=e.ShortcutRegistry.registry.createSerializedKey(e.utils.KeyCodes.O,[e.utils.KeyCodes.SHIFT,e.utils.KeyCodes.ALT]);e.ShortcutRegistry.registry.addKeyMapping(Ta,oi.name);const pi={name:"createTextBlock",callback:i=>{const t=i.getMetrics(),n=e.utils.xml.createElement("block");n.setAttribute("type","text");const a=e.Xml.domToBlock(n,i);if(e.selected){const s=e.selected.getRelativeToSurfaceXY().clone();s.translate(20,e.selected.getHeightWidth().height+20),a.moveTo(s)}else a.moveTo(new e.utils.Coordinate(t.viewWidth/2+t.viewLeft,t.viewHeight/2+t.viewTop));return i.centerOnBlock(a.id),setTimeout(()=>{a.select()},50),!0}};e.ShortcutRegistry.registry.register(pi);const Ea=e.ShortcutRegistry.registry.createSerializedKey(e.utils.KeyCodes.T,[e.utils.KeyCodes.SHIFT]);e.ShortcutRegistry.registry.addKeyMapping(Ea,pi.name);const di={name:"createMathNumberBlock",callback:i=>{const t=i.getMetrics(),n=e.utils.xml.createElement("block");n.setAttribute("type","math_number");const a=e.Xml.domToBlock(n,i);if(e.selected){const s=e.selected.getRelativeToSurfaceXY().clone();s.translate(20,e.selected.getHeightWidth().height+20),a.moveTo(s)}else a.moveTo(new e.utils.Coordinate(t.viewWidth/2+t.viewLeft,t.viewHeight/2+t.viewTop));return i.centerOnBlock(a.id),setTimeout(()=>{a.select()},50),!0}};e.ShortcutRegistry.registry.register(di);const Na=e.ShortcutRegistry.registry.createSerializedKey(e.utils.KeyCodes.N,[e.utils.KeyCodes.SHIFT]);e.ShortcutRegistry.registry.addKeyMapping(Na,di.name);const ci={name:"createLogicBooleanBlock",callback:i=>{const t=i.getMetrics(),n=e.utils.xml.createElement("block");n.setAttribute("type","logic_boolean");const a=e.Xml.domToBlock(n,i);if(e.selected){const s=e.selected.getRelativeToSurfaceXY().clone();s.translate(20,e.selected.getHeightWidth().height+20),a.moveTo(s)}else a.moveTo(new e.utils.Coordinate(t.viewWidth/2+t.viewLeft,t.viewHeight/2+t.viewTop));return i.centerOnBlock(a.id),setTimeout(()=>{a.select()},50),!0}};e.ShortcutRegistry.registry.register(ci);const Ma=e.ShortcutRegistry.registry.createSerializedKey(e.utils.KeyCodes.B,[e.utils.KeyCodes.SHIFT]);e.ShortcutRegistry.registry.addKeyMapping(Ma,ci.name);const li={name:"createArrayBlock",callback:i=>{const t=i.getMetrics(),n=e.utils.xml.createElement("block");n.setAttribute("type","array_create");const a=e.Xml.domToBlock(n,i);if(e.selected){const s=e.selected.getRelativeToSurfaceXY().clone();s.translate(20,e.selected.getHeightWidth().height+20),a.moveTo(s)}else a.moveTo(new e.utils.Coordinate(t.viewWidth/2+t.viewLeft,t.viewHeight/2+t.viewTop));return i.centerOnBlock(a.id),setTimeout(()=>{a.select()},50),!0}};e.ShortcutRegistry.registry.register(li);const Ia=e.ShortcutRegistry.registry.createSerializedKey(e.utils.KeyCodes.A,[e.utils.KeyCodes.SHIFT]);e.ShortcutRegistry.registry.addKeyMapping(Ia,li.name);const ui={name:"createArrayElementBlock",callback:i=>{const t=i.getMetrics(),n=e.utils.xml.createElement("block");n.setAttribute("type","array_create_element");const a=e.Xml.domToBlock(n,i);if(e.selected){const s=e.selected.getRelativeToSurfaceXY().clone();s.translate(20,e.selected.getHeightWidth().height+20),a.moveTo(s)}else a.moveTo(new e.utils.Coordinate(t.viewWidth/2+t.viewLeft,t.viewHeight/2+t.viewTop));return i.centerOnBlock(a.id),setTimeout(()=>{a.select()},50),!0}};e.ShortcutRegistry.registry.register(ui);const va=e.ShortcutRegistry.registry.createSerializedKey(e.utils.KeyCodes.A,[e.utils.KeyCodes.SHIFT,e.utils.KeyCodes.ALT]);e.ShortcutRegistry.registry.addKeyMapping(va,ui.name);const hi={name:"createFunctionBlock",callback:i=>{const t=i.getMetrics(),n=e.utils.xml.createElement("block");n.setAttribute("type","procedures_defnoreturn");const a=e.Xml.domToBlock(n,i);if(e.selected){const s=e.selected.getRelativeToSurfaceXY().clone();s.translate(20,e.selected.getHeightWidth().height+20),a.moveTo(s)}else a.moveTo(new e.utils.Coordinate(t.viewWidth/2+t.viewLeft,t.viewHeight/2+t.viewTop));return i.centerOnBlock(a.id),setTimeout(()=>{a.select()},50),!0}};e.ShortcutRegistry.registry.register(hi);const Oa=e.ShortcutRegistry.registry.createSerializedKey(e.utils.KeyCodes.F,[e.utils.KeyCodes.SHIFT]);e.ShortcutRegistry.registry.addKeyMapping(Oa,hi.name);const gi={name:"goToTab",preconditionFn:function(i){return!!(e.selected&&!e.selected.isInFlyout&&e.selected.type==="execute_tab")},callback:function(i){const t=e.selected.getFieldValue("TAB"),n=block3d.tabManager.getTabByTitle(t);return block3d.tabManager.setActive(n),!0}};e.ShortcutRegistry.registry.register(gi),e.ShortcutRegistry.registry.addKeyMapping(e.utils.KeyCodes.TAB,gi.name);const mi={name:"duplicateBlock",preconditionFn:function(i){if(e.selected&&!e.selected.isInFlyout&&e.selected.isDeletable()&&e.selected.isMovable()&&e.selected.isDuplicatable())return!0},callback:function(i){return e.clipboard.duplicate(e.selected),!0}};e.ShortcutRegistry.registry.register(mi);const Sa=e.ShortcutRegistry.registry.createSerializedKey(e.utils.KeyCodes.D,[e.utils.KeyCodes.SHIFT]);e.ShortcutRegistry.registry.addKeyMapping(Sa,mi.name);const _i={name:"enableDisableBlock",preconditionFn:function(i){const t=e.selected;if(t&&!t.isInFlyout&&i.options.disable&&t.isEditable())return!0},callback:function(i){const t=e.selected;return t.setEnabled(!t.isEnabled()),!0}};e.ShortcutRegistry.registry.register(_i);const Aa=e.ShortcutRegistry.registry.createSerializedKey(e.utils.KeyCodes.D,[e.utils.KeyCodes.CTRL]);e.ShortcutRegistry.registry.addKeyMapping(Aa,_i.name);const Ti={name:"cleanUpWorkspace",preconditionFn:function(i){if(i.getTopBlocks(!1).length>1)return!0},callback:function(i){return i.cleanUp(),!0}};e.ShortcutRegistry.registry.register(Ti);const ba=e.ShortcutRegistry.registry.createSerializedKey(e.utils.KeyCodes.F,[e.utils.KeyCodes.ALT,e.utils.KeyCodes.SHIFT]);e.ShortcutRegistry.registry.addKeyMapping(ba,Ti.name),e.ContextMenuItems.blockCopyToStorage=function(){const i={displayText:function(){return e.Msg.COPY_BLOCK},preconditionFn:function(t){return t.block.isInFlyout?"hidden":"enabled"},callback:function(t){const n=e.Xml.blockToDomWithXY(t.block),a=e.Xml.domToText(n);localStorage.setItem("block3dBlocksStash",a)},scopeType:e.ContextMenuRegistry.ScopeType.BLOCK,id:"blockCopyToStorage",weight:0};e.ContextMenuRegistry.registry.register(i)},e.ContextMenuItems.blockCutToStorage=function(){const i={displayText:function(){return e.Msg.CUT_BLOCK},preconditionFn:function(t){const n=e.getMainWorkspace();return!n.options.readOnly&&e.selected&&e.selected.isDeletable()&&e.selected.isMovable()&&!n.isFlyout&&!t.block.isInFlyout?"enabled":"hidden"},callback:function(t){if(!e.selected)return!1;const n=e.Xml.blockToDomWithXY(t.block),a=e.Xml.domToText(n);return localStorage.setItem("block3dBlocksStash",a),e.selected.checkAndDelete(),!0},scopeType:e.ContextMenuRegistry.ScopeType.BLOCK,id:"blockCutToStorage",weight:0};e.ContextMenuRegistry.registry.register(i)},e.ContextMenuItems.blockPasteFromStorage=function(){const i={displayText:function(){return e.Msg.PASTE_BLOCK},preconditionFn:function(t){return localStorage.getItem("block3dBlocksStash")?"enabled":"hidden"},callback:function(t){const n=localStorage.getItem("block3dBlocksStash"),a=e.Xml.textToDom(n);e.Xml.domToBlock(a,e.getMainWorkspace()),localStorage.removeItem("block3dBlocksStash")},scopeType:e.ContextMenuRegistry.ScopeType.WORKSPACE,id:"blockPasteFromStorage",weight:0};e.ContextMenuRegistry.registry.register(i)},e.ContextMenuItems.blockCutToStorage(),e.ContextMenuItems.blockCopyToStorage(),e.ContextMenuItems.blockPasteFromStorage(),e.ContextMenuItems.goToTab=function(){const i={displayText:function(){return`${e.Msg.GO_TO_TAB}`},preconditionFn:function(t){return!t.block.isInFlyout&&t.block.type==="execute_tab"?"enabled":"hidden"},callback:function(t){const n=t.block.getFieldValue("TAB"),a=block3d.tabManager.getTabByTitle(n);block3d.tabManager.setActive(a)},scopeType:e.ContextMenuRegistry.ScopeType.BLOCK,id:"goToTab",weight:100};e.ContextMenuRegistry.registry.register(i)},e.ContextMenuItems.goToTab(),e.ContextMenuItems.printBlockName=function(){const i={displayText:function(){return`${e.Msg.PRINT_BLOCK_NAME}`},preconditionFn:function(t){return"enabled"},callback:function(t){block3d&&block3d.editorFooter&&(block3d.editorFooter.info=t.block.type)},scopeType:e.ContextMenuRegistry.ScopeType.BLOCK,id:"printBlockName",weight:100};e.ContextMenuRegistry.registry.register(i)},e.ContextMenuItems.printBlockName(),T.App=da,T.Fps=ca,T.Gutter=oa,T.Preloader=pa,T.TabDialog=Se,T.TabManager=ra,T.createEditor=ki,Object.defineProperties(T,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
