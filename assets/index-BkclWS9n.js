const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Funcionarios-DXrxp5Xy.js","assets/EmptyState-CFSRM5p5.js","assets/responsive-1v25m06S.js","assets/useSessionState-CWk6Ye_N.js","assets/respaldo-BGwcEs0Q.js","assets/ModalFuncionario-ntGNWRqC.js","assets/Planificacion-CHYCEcRR.js","assets/AdelantoViaticos-zhCSwgcn.js","assets/Reposicion-BqwmDsYT.js","assets/Disponibilidad-Iap5tJNe.js","assets/Alertas-D7Hms0xe.js","assets/Datos-nJDHy5lx.js"])))=>i.map(i=>d[i]);
var Fp=Object.defineProperty;var zp=(r,o,s)=>o in r?Fp(r,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[o]=s;var vi=(r,o,s)=>zp(r,typeof o!="symbol"?o+"":o,s);(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))u(m);new MutationObserver(m=>{for(const f of m)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&u(h)}).observe(document,{childList:!0,subtree:!0});function s(m){const f={};return m.integrity&&(f.integrity=m.integrity),m.referrerPolicy&&(f.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?f.credentials="include":m.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function u(m){if(m.ep)return;m.ep=!0;const f=s(m);fetch(m.href,f)}})();var Vv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function kd(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ms={exports:{}},Za={},Es={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qu;function Qp(){if(qu)return pe;qu=1;var r=Symbol.for("react.element"),o=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),h=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),A=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),N=Symbol.iterator;function S(P){return P===null||typeof P!="object"?null:(P=N&&P[N]||P["@@iterator"],typeof P=="function"?P:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,B={};function D(P,j,Q){this.props=P,this.context=j,this.refs=B,this.updater=Q||w}D.prototype.isReactComponent={},D.prototype.setState=function(P,j){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,j,"setState")},D.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function b(){}b.prototype=D.prototype;function G(P,j,Q){this.props=P,this.context=j,this.refs=B,this.updater=Q||w}var le=G.prototype=new b;le.constructor=G,z(le,D.prototype),le.isPureReactComponent=!0;var W=Array.isArray,te=Object.prototype.hasOwnProperty,de={current:null},se={key:!0,ref:!0,__self:!0,__source:!0};function ve(P,j,Q){var H,ue={},me=null,Te=null;if(j!=null)for(H in j.ref!==void 0&&(Te=j.ref),j.key!==void 0&&(me=""+j.key),j)te.call(j,H)&&!se.hasOwnProperty(H)&&(ue[H]=j[H]);var Le=arguments.length-2;if(Le===1)ue.children=Q;else if(1<Le){for(var Ne=Array(Le),Ye=0;Ye<Le;Ye++)Ne[Ye]=arguments[Ye+2];ue.children=Ne}if(P&&P.defaultProps)for(H in Le=P.defaultProps,Le)ue[H]===void 0&&(ue[H]=Le[H]);return{$$typeof:r,type:P,key:me,ref:Te,props:ue,_owner:de.current}}function Ee(P,j){return{$$typeof:r,type:P.type,key:j,ref:P.ref,props:P.props,_owner:P._owner}}function ge(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function je(P){var j={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(Q){return j[Q]})}var Ce=/\/+/g;function he(P,j){return typeof P=="object"&&P!==null&&P.key!=null?je(""+P.key):j.toString(36)}function Se(P,j,Q,H,ue){var me=typeof P;(me==="undefined"||me==="boolean")&&(P=null);var Te=!1;if(P===null)Te=!0;else switch(me){case"string":case"number":Te=!0;break;case"object":switch(P.$$typeof){case r:case o:Te=!0}}if(Te)return Te=P,ue=ue(Te),P=H===""?"."+he(Te,0):H,W(ue)?(Q="",P!=null&&(Q=P.replace(Ce,"$&/")+"/"),Se(ue,j,Q,"",function(Ye){return Ye})):ue!=null&&(ge(ue)&&(ue=Ee(ue,Q+(!ue.key||Te&&Te.key===ue.key?"":(""+ue.key).replace(Ce,"$&/")+"/")+P)),j.push(ue)),1;if(Te=0,H=H===""?".":H+":",W(P))for(var Le=0;Le<P.length;Le++){me=P[Le];var Ne=H+he(me,Le);Te+=Se(me,j,Q,Ne,ue)}else if(Ne=S(P),typeof Ne=="function")for(P=Ne.call(P),Le=0;!(me=P.next()).done;)me=me.value,Ne=H+he(me,Le++),Te+=Se(me,j,Q,Ne,ue);else if(me==="object")throw j=String(P),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return Te}function ie(P,j,Q){if(P==null)return P;var H=[],ue=0;return Se(P,H,"","",function(me){return j.call(Q,me,ue++)}),H}function fe(P){if(P._status===-1){var j=P._result;j=j(),j.then(function(Q){(P._status===0||P._status===-1)&&(P._status=1,P._result=Q)},function(Q){(P._status===0||P._status===-1)&&(P._status=2,P._result=Q)}),P._status===-1&&(P._status=0,P._result=j)}if(P._status===1)return P._result.default;throw P._result}var ce={current:null},O={transition:null},Z={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:O,ReactCurrentOwner:de};function Y(){throw Error("act(...) is not supported in production builds of React.")}return pe.Children={map:ie,forEach:function(P,j,Q){ie(P,function(){j.apply(this,arguments)},Q)},count:function(P){var j=0;return ie(P,function(){j++}),j},toArray:function(P){return ie(P,function(j){return j})||[]},only:function(P){if(!ge(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},pe.Component=D,pe.Fragment=s,pe.Profiler=m,pe.PureComponent=G,pe.StrictMode=u,pe.Suspense=L,pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,pe.act=Y,pe.cloneElement=function(P,j,Q){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var H=z({},P.props),ue=P.key,me=P.ref,Te=P._owner;if(j!=null){if(j.ref!==void 0&&(me=j.ref,Te=de.current),j.key!==void 0&&(ue=""+j.key),P.type&&P.type.defaultProps)var Le=P.type.defaultProps;for(Ne in j)te.call(j,Ne)&&!se.hasOwnProperty(Ne)&&(H[Ne]=j[Ne]===void 0&&Le!==void 0?Le[Ne]:j[Ne])}var Ne=arguments.length-2;if(Ne===1)H.children=Q;else if(1<Ne){Le=Array(Ne);for(var Ye=0;Ye<Ne;Ye++)Le[Ye]=arguments[Ye+2];H.children=Le}return{$$typeof:r,type:P.type,key:ue,ref:me,props:H,_owner:Te}},pe.createContext=function(P){return P={$$typeof:h,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:f,_context:P},P.Consumer=P},pe.createElement=ve,pe.createFactory=function(P){var j=ve.bind(null,P);return j.type=P,j},pe.createRef=function(){return{current:null}},pe.forwardRef=function(P){return{$$typeof:T,render:P}},pe.isValidElement=ge,pe.lazy=function(P){return{$$typeof:E,_payload:{_status:-1,_result:P},_init:fe}},pe.memo=function(P,j){return{$$typeof:A,type:P,compare:j===void 0?null:j}},pe.startTransition=function(P){var j=O.transition;O.transition={};try{P()}finally{O.transition=j}},pe.unstable_act=Y,pe.useCallback=function(P,j){return ce.current.useCallback(P,j)},pe.useContext=function(P){return ce.current.useContext(P)},pe.useDebugValue=function(){},pe.useDeferredValue=function(P){return ce.current.useDeferredValue(P)},pe.useEffect=function(P,j){return ce.current.useEffect(P,j)},pe.useId=function(){return ce.current.useId()},pe.useImperativeHandle=function(P,j,Q){return ce.current.useImperativeHandle(P,j,Q)},pe.useInsertionEffect=function(P,j){return ce.current.useInsertionEffect(P,j)},pe.useLayoutEffect=function(P,j){return ce.current.useLayoutEffect(P,j)},pe.useMemo=function(P,j){return ce.current.useMemo(P,j)},pe.useReducer=function(P,j,Q){return ce.current.useReducer(P,j,Q)},pe.useRef=function(P){return ce.current.useRef(P)},pe.useState=function(P){return ce.current.useState(P)},pe.useSyncExternalStore=function(P,j,Q){return ce.current.useSyncExternalStore(P,j,Q)},pe.useTransition=function(){return ce.current.useTransition()},pe.version="18.3.1",pe}var Hu;function Ks(){return Hu||(Hu=1,Es.exports=Qp()),Es.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wu;function Jp(){if(Wu)return Za;Wu=1;var r=Ks(),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,m=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function h(T,L,A){var E,N={},S=null,w=null;A!==void 0&&(S=""+A),L.key!==void 0&&(S=""+L.key),L.ref!==void 0&&(w=L.ref);for(E in L)u.call(L,E)&&!f.hasOwnProperty(E)&&(N[E]=L[E]);if(T&&T.defaultProps)for(E in L=T.defaultProps,L)N[E]===void 0&&(N[E]=L[E]);return{$$typeof:o,type:T,key:S,ref:w,props:N,_owner:m.current}}return Za.Fragment=s,Za.jsx=h,Za.jsxs=h,Za}var Zu;function Bp(){return Zu||(Zu=1,Ms.exports=Jp()),Ms.exports}var c=Bp(),C=Ks();const Yp=kd(C);var hi={},Ns={exports:{}},cn={},Cs={exports:{}},xs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xu;function Up(){return Xu||(Xu=1,(function(r){function o(O,Z){var Y=O.length;O.push(Z);e:for(;0<Y;){var P=Y-1>>>1,j=O[P];if(0<m(j,Z))O[P]=Z,O[Y]=j,Y=P;else break e}}function s(O){return O.length===0?null:O[0]}function u(O){if(O.length===0)return null;var Z=O[0],Y=O.pop();if(Y!==Z){O[0]=Y;e:for(var P=0,j=O.length,Q=j>>>1;P<Q;){var H=2*(P+1)-1,ue=O[H],me=H+1,Te=O[me];if(0>m(ue,Y))me<j&&0>m(Te,ue)?(O[P]=Te,O[me]=Y,P=me):(O[P]=ue,O[H]=Y,P=H);else if(me<j&&0>m(Te,Y))O[P]=Te,O[me]=Y,P=me;else break e}}return Z}function m(O,Z){var Y=O.sortIndex-Z.sortIndex;return Y!==0?Y:O.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;r.unstable_now=function(){return f.now()}}else{var h=Date,T=h.now();r.unstable_now=function(){return h.now()-T}}var L=[],A=[],E=1,N=null,S=3,w=!1,z=!1,B=!1,D=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function le(O){for(var Z=s(A);Z!==null;){if(Z.callback===null)u(A);else if(Z.startTime<=O)u(A),Z.sortIndex=Z.expirationTime,o(L,Z);else break;Z=s(A)}}function W(O){if(B=!1,le(O),!z)if(s(L)!==null)z=!0,fe(te);else{var Z=s(A);Z!==null&&ce(W,Z.startTime-O)}}function te(O,Z){z=!1,B&&(B=!1,b(ve),ve=-1),w=!0;var Y=S;try{for(le(Z),N=s(L);N!==null&&(!(N.expirationTime>Z)||O&&!je());){var P=N.callback;if(typeof P=="function"){N.callback=null,S=N.priorityLevel;var j=P(N.expirationTime<=Z);Z=r.unstable_now(),typeof j=="function"?N.callback=j:N===s(L)&&u(L),le(Z)}else u(L);N=s(L)}if(N!==null)var Q=!0;else{var H=s(A);H!==null&&ce(W,H.startTime-Z),Q=!1}return Q}finally{N=null,S=Y,w=!1}}var de=!1,se=null,ve=-1,Ee=5,ge=-1;function je(){return!(r.unstable_now()-ge<Ee)}function Ce(){if(se!==null){var O=r.unstable_now();ge=O;var Z=!0;try{Z=se(!0,O)}finally{Z?he():(de=!1,se=null)}}else de=!1}var he;if(typeof G=="function")he=function(){G(Ce)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,ie=Se.port2;Se.port1.onmessage=Ce,he=function(){ie.postMessage(null)}}else he=function(){D(Ce,0)};function fe(O){se=O,de||(de=!0,he())}function ce(O,Z){ve=D(function(){O(r.unstable_now())},Z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_continueExecution=function(){z||w||(z=!0,fe(te))},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ee=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_getFirstCallbackNode=function(){return s(L)},r.unstable_next=function(O){switch(S){case 1:case 2:case 3:var Z=3;break;default:Z=S}var Y=S;S=Z;try{return O()}finally{S=Y}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(O,Z){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Y=S;S=O;try{return Z()}finally{S=Y}},r.unstable_scheduleCallback=function(O,Z,Y){var P=r.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?P+Y:P):Y=P,O){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=Y+j,O={id:E++,callback:Z,priorityLevel:O,startTime:Y,expirationTime:j,sortIndex:-1},Y>P?(O.sortIndex=Y,o(A,O),s(L)===null&&O===s(A)&&(B?(b(ve),ve=-1):B=!0,ce(W,Y-P))):(O.sortIndex=j,o(L,O),z||w||(z=!0,fe(te))),O},r.unstable_shouldYield=je,r.unstable_wrapCallback=function(O){var Z=S;return function(){var Y=S;S=Z;try{return O.apply(this,arguments)}finally{S=Y}}}})(xs)),xs}var ed;function Gp(){return ed||(ed=1,Cs.exports=Up()),Cs.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nd;function Kp(){if(nd)return cn;nd=1;var r=Ks(),o=Gp();function s(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,m={};function f(e,n){h(e,n),h(e+"Capture",n)}function h(e,n){for(m[e]=n,e=0;e<n.length;e++)u.add(n[e])}var T=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),L=Object.prototype.hasOwnProperty,A=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},N={};function S(e){return L.call(N,e)?!0:L.call(E,e)?!1:A.test(e)?N[e]=!0:(E[e]=!0,!1)}function w(e,n,t,a){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function z(e,n,t,a){if(n===null||typeof n>"u"||w(e,n,t,a))return!0;if(a)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function B(e,n,t,a,i,l,d){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=d}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){D[e]=new B(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];D[n]=new B(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){D[e]=new B(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){D[e]=new B(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){D[e]=new B(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){D[e]=new B(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){D[e]=new B(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){D[e]=new B(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){D[e]=new B(e,5,!1,e.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function G(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(b,G);D[n]=new B(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(b,G);D[n]=new B(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(b,G);D[n]=new B(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){D[e]=new B(e,1,!1,e.toLowerCase(),null,!1,!1)}),D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){D[e]=new B(e,1,!1,e.toLowerCase(),null,!0,!0)});function le(e,n,t,a){var i=D.hasOwnProperty(n)?D[n]:null;(i!==null?i.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(z(n,t,i,a)&&(t=null),a||i===null?S(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,a=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,a?e.setAttributeNS(a,n,t):e.setAttribute(n,t))))}var W=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,te=Symbol.for("react.element"),de=Symbol.for("react.portal"),se=Symbol.for("react.fragment"),ve=Symbol.for("react.strict_mode"),Ee=Symbol.for("react.profiler"),ge=Symbol.for("react.provider"),je=Symbol.for("react.context"),Ce=Symbol.for("react.forward_ref"),he=Symbol.for("react.suspense"),Se=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),O=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=O&&e[O]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,P;function j(e){if(P===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);P=n&&n[1]||""}return`
`+P+e}var Q=!1;function H(e,n){if(!e||Q)return"";Q=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(x){var a=x}Reflect.construct(e,[],n)}else{try{n.call()}catch(x){a=x}e.call(n.prototype)}else{try{throw Error()}catch(x){a=x}e()}}catch(x){if(x&&a&&typeof x.stack=="string"){for(var i=x.stack.split(`
`),l=a.stack.split(`
`),d=i.length-1,p=l.length-1;1<=d&&0<=p&&i[d]!==l[p];)p--;for(;1<=d&&0<=p;d--,p--)if(i[d]!==l[p]){if(d!==1||p!==1)do if(d--,p--,0>p||i[d]!==l[p]){var v=`
`+i[d].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),v}while(1<=d&&0<=p);break}}}finally{Q=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?j(e):""}function ue(e){switch(e.tag){case 5:return j(e.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return e=H(e.type,!1),e;case 11:return e=H(e.type.render,!1),e;case 1:return e=H(e.type,!0),e;default:return""}}function me(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case se:return"Fragment";case de:return"Portal";case Ee:return"Profiler";case ve:return"StrictMode";case he:return"Suspense";case Se:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case je:return(e.displayName||"Context")+".Consumer";case ge:return(e._context.displayName||"Context")+".Provider";case Ce:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ie:return n=e.displayName||null,n!==null?n:me(e.type)||"Memo";case fe:n=e._payload,e=e._init;try{return me(e(n))}catch{}}return null}function Te(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return me(n);case 8:return n===ve?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Le(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ne(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ye(e){var n=Ne(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(d){a=""+d,l.call(this,d)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(d){a=""+d},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function En(e){e._valueTracker||(e._valueTracker=Ye(e))}function _n(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=Ne(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function Bn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function k(e,n){var t=n.checked;return Y({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Pe(e,n){var t=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;t=Le(n.value!=null?n.value:t),e._wrapperState={initialChecked:a,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ve(e,n){n=n.checked,n!=null&&le(e,"checked",n,!1)}function Yn(e,n){Ve(e,n);var t=Le(n.value),a=n.type;if(t!=null)a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?tt(e,n.type,t):n.hasOwnProperty("defaultValue")&&tt(e,n.type,Le(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function nt(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function tt(e,n,t){(n!=="number"||Bn(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var V=Array.isArray;function F(e,n,t,a){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&a&&(e[t].defaultSelected=!0)}else{for(t=""+Le(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function ae(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(s(91));return Y({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function be(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(s(92));if(V(t)){if(1<t.length)throw Error(s(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Le(t)}}function Nn(e,n){var t=Le(n.value),a=Le(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),a!=null&&(e.defaultValue=""+a)}function zt(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ll(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ki(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ll(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var cr,cl=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,a,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,a,i)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(cr=cr||document.createElement("div"),cr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=cr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function pa(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ta={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jm=["Webkit","ms","Moz","O"];Object.keys(Ta).forEach(function(e){Jm.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ta[n]=Ta[e]})});function ul(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Ta.hasOwnProperty(e)&&Ta[e]?(""+n).trim():n+"px"}function dl(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var a=t.indexOf("--")===0,i=ul(t,n[t],a);t==="float"&&(t="cssFloat"),a?e.setProperty(t,i):e[t]=i}}var Bm=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ji(e,n){if(n){if(Bm[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(s(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(s(61))}if(n.style!=null&&typeof n.style!="object")throw Error(s(62))}}function _i(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ri=null;function Di(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ii=null,Qt=null,Jt=null;function ml(e){if(e=Ia(e)){if(typeof Ii!="function")throw Error(s(280));var n=e.stateNode;n&&(n=kr(n),Ii(e.stateNode,e.type,n))}}function fl(e){Qt?Jt?Jt.push(e):Jt=[e]:Qt=e}function pl(){if(Qt){var e=Qt,n=Jt;if(Jt=Qt=null,ml(e),n)for(e=0;e<n.length;e++)ml(n[e])}}function Tl(e,n){return e(n)}function Ll(){}var Oi=!1;function vl(e,n,t){if(Oi)return e(n,t);Oi=!0;try{return Tl(e,n,t)}finally{Oi=!1,(Qt!==null||Jt!==null)&&(Ll(),pl())}}function La(e,n){var t=e.stateNode;if(t===null)return null;var a=kr(t);if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(s(231,n,typeof t));return t}var Fi=!1;if(T)try{var va={};Object.defineProperty(va,"passive",{get:function(){Fi=!0}}),window.addEventListener("test",va,va),window.removeEventListener("test",va,va)}catch{Fi=!1}function Ym(e,n,t,a,i,l,d,p,v){var x=Array.prototype.slice.call(arguments,3);try{n.apply(t,x)}catch(R){this.onError(R)}}var ha=!1,ur=null,dr=!1,zi=null,Um={onError:function(e){ha=!0,ur=e}};function Gm(e,n,t,a,i,l,d,p,v){ha=!1,ur=null,Ym.apply(Um,arguments)}function Km(e,n,t,a,i,l,d,p,v){if(Gm.apply(this,arguments),ha){if(ha){var x=ur;ha=!1,ur=null}else throw Error(s(198));dr||(dr=!0,zi=x)}}function Ct(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function hl(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function gl(e){if(Ct(e)!==e)throw Error(s(188))}function $m(e){var n=e.alternate;if(!n){if(n=Ct(e),n===null)throw Error(s(188));return n!==e?null:e}for(var t=e,a=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(a=i.return,a!==null){t=a;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return gl(i),e;if(l===a)return gl(i),n;l=l.sibling}throw Error(s(188))}if(t.return!==a.return)t=i,a=l;else{for(var d=!1,p=i.child;p;){if(p===t){d=!0,t=i,a=l;break}if(p===a){d=!0,a=i,t=l;break}p=p.sibling}if(!d){for(p=l.child;p;){if(p===t){d=!0,t=l,a=i;break}if(p===a){d=!0,a=l,t=i;break}p=p.sibling}if(!d)throw Error(s(189))}}if(t.alternate!==a)throw Error(s(190))}if(t.tag!==3)throw Error(s(188));return t.stateNode.current===t?e:n}function Pl(e){return e=$m(e),e!==null?yl(e):null}function yl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=yl(e);if(n!==null)return n;e=e.sibling}return null}var Ml=o.unstable_scheduleCallback,El=o.unstable_cancelCallback,qm=o.unstable_shouldYield,Hm=o.unstable_requestPaint,Fe=o.unstable_now,Wm=o.unstable_getCurrentPriorityLevel,Qi=o.unstable_ImmediatePriority,Nl=o.unstable_UserBlockingPriority,mr=o.unstable_NormalPriority,Zm=o.unstable_LowPriority,Cl=o.unstable_IdlePriority,fr=null,Rn=null;function Xm(e){if(Rn&&typeof Rn.onCommitFiberRoot=="function")try{Rn.onCommitFiberRoot(fr,e,void 0,(e.current.flags&128)===128)}catch{}}var Cn=Math.clz32?Math.clz32:tf,ef=Math.log,nf=Math.LN2;function tf(e){return e>>>=0,e===0?32:31-(ef(e)/nf|0)|0}var pr=64,Tr=4194304;function ga(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Lr(e,n){var t=e.pendingLanes;if(t===0)return 0;var a=0,i=e.suspendedLanes,l=e.pingedLanes,d=t&268435455;if(d!==0){var p=d&~i;p!==0?a=ga(p):(l&=d,l!==0&&(a=ga(l)))}else d=t&~i,d!==0?a=ga(d):l!==0&&(a=ga(l));if(a===0)return 0;if(n!==0&&n!==a&&(n&i)===0&&(i=a&-a,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if((a&4)!==0&&(a|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)t=31-Cn(n),i=1<<t,a|=e[t],n&=~i;return a}function af(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rf(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var d=31-Cn(l),p=1<<d,v=i[d];v===-1?((p&t)===0||(p&a)!==0)&&(i[d]=af(p,n)):v<=n&&(e.expiredLanes|=p),l&=~p}}function Ji(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xl(){var e=pr;return pr<<=1,(pr&4194240)===0&&(pr=64),e}function Bi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Pa(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Cn(n),e[n]=t}function of(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Cn(t),l=1<<i;n[i]=0,a[i]=-1,e[i]=-1,t&=~l}}function Yi(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-Cn(t),i=1<<a;i&n|e[a]&n&&(e[a]|=n),t&=~i}}var xe=0;function Sl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var bl,Ui,Vl,Al,wl,Gi=!1,vr=[],at=null,rt=null,it=null,ya=new Map,Ma=new Map,ot=[],sf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kl(e,n){switch(e){case"focusin":case"focusout":at=null;break;case"dragenter":case"dragleave":rt=null;break;case"mouseover":case"mouseout":it=null;break;case"pointerover":case"pointerout":ya.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ma.delete(n.pointerId)}}function Ea(e,n,t,a,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:l,targetContainers:[i]},n!==null&&(n=Ia(n),n!==null&&Ui(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function lf(e,n,t,a,i){switch(n){case"focusin":return at=Ea(at,e,n,t,a,i),!0;case"dragenter":return rt=Ea(rt,e,n,t,a,i),!0;case"mouseover":return it=Ea(it,e,n,t,a,i),!0;case"pointerover":var l=i.pointerId;return ya.set(l,Ea(ya.get(l)||null,e,n,t,a,i)),!0;case"gotpointercapture":return l=i.pointerId,Ma.set(l,Ea(Ma.get(l)||null,e,n,t,a,i)),!0}return!1}function jl(e){var n=xt(e.target);if(n!==null){var t=Ct(n);if(t!==null){if(n=t.tag,n===13){if(n=hl(t),n!==null){e.blockedOn=n,wl(e.priority,function(){Vl(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=$i(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);Ri=a,t.target.dispatchEvent(a),Ri=null}else return n=Ia(t),n!==null&&Ui(n),e.blockedOn=t,!1;n.shift()}return!0}function _l(e,n,t){hr(e)&&t.delete(n)}function cf(){Gi=!1,at!==null&&hr(at)&&(at=null),rt!==null&&hr(rt)&&(rt=null),it!==null&&hr(it)&&(it=null),ya.forEach(_l),Ma.forEach(_l)}function Na(e,n){e.blockedOn===n&&(e.blockedOn=null,Gi||(Gi=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,cf)))}function Ca(e){function n(i){return Na(i,e)}if(0<vr.length){Na(vr[0],e);for(var t=1;t<vr.length;t++){var a=vr[t];a.blockedOn===e&&(a.blockedOn=null)}}for(at!==null&&Na(at,e),rt!==null&&Na(rt,e),it!==null&&Na(it,e),ya.forEach(n),Ma.forEach(n),t=0;t<ot.length;t++)a=ot[t],a.blockedOn===e&&(a.blockedOn=null);for(;0<ot.length&&(t=ot[0],t.blockedOn===null);)jl(t),t.blockedOn===null&&ot.shift()}var Bt=W.ReactCurrentBatchConfig,gr=!0;function uf(e,n,t,a){var i=xe,l=Bt.transition;Bt.transition=null;try{xe=1,Ki(e,n,t,a)}finally{xe=i,Bt.transition=l}}function df(e,n,t,a){var i=xe,l=Bt.transition;Bt.transition=null;try{xe=4,Ki(e,n,t,a)}finally{xe=i,Bt.transition=l}}function Ki(e,n,t,a){if(gr){var i=$i(e,n,t,a);if(i===null)mo(e,n,a,Pr,t),kl(e,a);else if(lf(i,e,n,t,a))a.stopPropagation();else if(kl(e,a),n&4&&-1<sf.indexOf(e)){for(;i!==null;){var l=Ia(i);if(l!==null&&bl(l),l=$i(e,n,t,a),l===null&&mo(e,n,a,Pr,t),l===i)break;i=l}i!==null&&a.stopPropagation()}else mo(e,n,a,null,t)}}var Pr=null;function $i(e,n,t,a){if(Pr=null,e=Di(a),e=xt(e),e!==null)if(n=Ct(e),n===null)e=null;else if(t=n.tag,t===13){if(e=hl(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Pr=e,null}function Rl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wm()){case Qi:return 1;case Nl:return 4;case mr:case Zm:return 16;case Cl:return 536870912;default:return 16}default:return 16}}var st=null,qi=null,yr=null;function Dl(){if(yr)return yr;var e,n=qi,t=n.length,a,i="value"in st?st.value:st.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var d=t-e;for(a=1;a<=d&&n[t-a]===i[l-a];a++);return yr=i.slice(e,1<a?1-a:void 0)}function Mr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Er(){return!0}function Il(){return!1}function un(e){function n(t,a,i,l,d){this._reactName=t,this._targetInst=i,this.type=a,this.nativeEvent=l,this.target=d,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(t=e[p],this[p]=t?t(l):l[p]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Er:Il,this.isPropagationStopped=Il,this}return Y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Er)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Er)},persist:function(){},isPersistent:Er}),n}var Yt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hi=un(Yt),xa=Y({},Yt,{view:0,detail:0}),mf=un(xa),Wi,Zi,Sa,Nr=Y({},xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sa&&(Sa&&e.type==="mousemove"?(Wi=e.screenX-Sa.screenX,Zi=e.screenY-Sa.screenY):Zi=Wi=0,Sa=e),Wi)},movementY:function(e){return"movementY"in e?e.movementY:Zi}}),Ol=un(Nr),ff=Y({},Nr,{dataTransfer:0}),pf=un(ff),Tf=Y({},xa,{relatedTarget:0}),Xi=un(Tf),Lf=Y({},Yt,{animationName:0,elapsedTime:0,pseudoElement:0}),vf=un(Lf),hf=Y({},Yt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gf=un(hf),Pf=Y({},Yt,{data:0}),Fl=un(Pf),yf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ef={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ef[e])?!!n[e]:!1}function eo(){return Nf}var Cf=Y({},xa,{key:function(e){if(e.key){var n=yf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Mr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eo,charCode:function(e){return e.type==="keypress"?Mr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xf=un(Cf),Sf=Y({},Nr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zl=un(Sf),bf=Y({},xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eo}),Vf=un(bf),Af=Y({},Yt,{propertyName:0,elapsedTime:0,pseudoElement:0}),wf=un(Af),kf=Y({},Nr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jf=un(kf),_f=[9,13,27,32],no=T&&"CompositionEvent"in window,ba=null;T&&"documentMode"in document&&(ba=document.documentMode);var Rf=T&&"TextEvent"in window&&!ba,Ql=T&&(!no||ba&&8<ba&&11>=ba),Jl=" ",Bl=!1;function Yl(e,n){switch(e){case"keyup":return _f.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ul(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ut=!1;function Df(e,n){switch(e){case"compositionend":return Ul(n);case"keypress":return n.which!==32?null:(Bl=!0,Jl);case"textInput":return e=n.data,e===Jl&&Bl?null:e;default:return null}}function If(e,n){if(Ut)return e==="compositionend"||!no&&Yl(e,n)?(e=Dl(),yr=qi=st=null,Ut=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ql&&n.locale!=="ko"?null:n.data;default:return null}}var Of={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Of[e.type]:n==="textarea"}function Kl(e,n,t,a){fl(a),n=Vr(n,"onChange"),0<n.length&&(t=new Hi("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var Va=null,Aa=null;function Ff(e){dc(e,0)}function Cr(e){var n=Ht(e);if(_n(n))return e}function zf(e,n){if(e==="change")return n}var $l=!1;if(T){var to;if(T){var ao="oninput"in document;if(!ao){var ql=document.createElement("div");ql.setAttribute("oninput","return;"),ao=typeof ql.oninput=="function"}to=ao}else to=!1;$l=to&&(!document.documentMode||9<document.documentMode)}function Hl(){Va&&(Va.detachEvent("onpropertychange",Wl),Aa=Va=null)}function Wl(e){if(e.propertyName==="value"&&Cr(Aa)){var n=[];Kl(n,Aa,e,Di(e)),vl(Ff,n)}}function Qf(e,n,t){e==="focusin"?(Hl(),Va=n,Aa=t,Va.attachEvent("onpropertychange",Wl)):e==="focusout"&&Hl()}function Jf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cr(Aa)}function Bf(e,n){if(e==="click")return Cr(n)}function Yf(e,n){if(e==="input"||e==="change")return Cr(n)}function Uf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var xn=typeof Object.is=="function"?Object.is:Uf;function wa(e,n){if(xn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var i=t[a];if(!L.call(n,i)||!xn(e[i],n[i]))return!1}return!0}function Zl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xl(e,n){var t=Zl(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Zl(t)}}function ec(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ec(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function nc(){for(var e=window,n=Bn();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Bn(e.document)}return n}function ro(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Gf(e){var n=nc(),t=e.focusedElem,a=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&ec(t.ownerDocument.documentElement,t)){if(a!==null&&ro(t)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(a.start,i);a=a.end===void 0?l:Math.min(a.end,i),!e.extend&&l>a&&(i=a,a=l,l=i),i=Xl(t,l);var d=Xl(t,a);i&&d&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>a?(e.addRange(n),e.extend(d.node,d.offset)):(n.setEnd(d.node,d.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Kf=T&&"documentMode"in document&&11>=document.documentMode,Gt=null,io=null,ka=null,oo=!1;function tc(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;oo||Gt==null||Gt!==Bn(a)||(a=Gt,"selectionStart"in a&&ro(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ka&&wa(ka,a)||(ka=a,a=Vr(io,"onSelect"),0<a.length&&(n=new Hi("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=Gt)))}function xr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Kt={animationend:xr("Animation","AnimationEnd"),animationiteration:xr("Animation","AnimationIteration"),animationstart:xr("Animation","AnimationStart"),transitionend:xr("Transition","TransitionEnd")},so={},ac={};T&&(ac=document.createElement("div").style,"AnimationEvent"in window||(delete Kt.animationend.animation,delete Kt.animationiteration.animation,delete Kt.animationstart.animation),"TransitionEvent"in window||delete Kt.transitionend.transition);function Sr(e){if(so[e])return so[e];if(!Kt[e])return e;var n=Kt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in ac)return so[e]=n[t];return e}var rc=Sr("animationend"),ic=Sr("animationiteration"),oc=Sr("animationstart"),sc=Sr("transitionend"),lc=new Map,cc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lt(e,n){lc.set(e,n),f(n,[e])}for(var lo=0;lo<cc.length;lo++){var co=cc[lo],$f=co.toLowerCase(),qf=co[0].toUpperCase()+co.slice(1);lt($f,"on"+qf)}lt(rc,"onAnimationEnd"),lt(ic,"onAnimationIteration"),lt(oc,"onAnimationStart"),lt("dblclick","onDoubleClick"),lt("focusin","onFocus"),lt("focusout","onBlur"),lt(sc,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ja="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hf=new Set("cancel close invalid load scroll toggle".split(" ").concat(ja));function uc(e,n,t){var a=e.type||"unknown-event";e.currentTarget=t,Km(a,n,void 0,e),e.currentTarget=null}function dc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],i=a.event;a=a.listeners;e:{var l=void 0;if(n)for(var d=a.length-1;0<=d;d--){var p=a[d],v=p.instance,x=p.currentTarget;if(p=p.listener,v!==l&&i.isPropagationStopped())break e;uc(i,p,x),l=v}else for(d=0;d<a.length;d++){if(p=a[d],v=p.instance,x=p.currentTarget,p=p.listener,v!==l&&i.isPropagationStopped())break e;uc(i,p,x),l=v}}}if(dr)throw e=zi,dr=!1,zi=null,e}function we(e,n){var t=n[ho];t===void 0&&(t=n[ho]=new Set);var a=e+"__bubble";t.has(a)||(mc(n,e,2,!1),t.add(a))}function uo(e,n,t){var a=0;n&&(a|=4),mc(t,e,a,n)}var br="_reactListening"+Math.random().toString(36).slice(2);function _a(e){if(!e[br]){e[br]=!0,u.forEach(function(t){t!=="selectionchange"&&(Hf.has(t)||uo(t,!1,e),uo(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[br]||(n[br]=!0,uo("selectionchange",!1,n))}}function mc(e,n,t,a){switch(Rl(n)){case 1:var i=uf;break;case 4:i=df;break;default:i=Ki}t=i.bind(null,n,t,e),i=void 0,!Fi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function mo(e,n,t,a,i){var l=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var d=a.tag;if(d===3||d===4){var p=a.stateNode.containerInfo;if(p===i||p.nodeType===8&&p.parentNode===i)break;if(d===4)for(d=a.return;d!==null;){var v=d.tag;if((v===3||v===4)&&(v=d.stateNode.containerInfo,v===i||v.nodeType===8&&v.parentNode===i))return;d=d.return}for(;p!==null;){if(d=xt(p),d===null)return;if(v=d.tag,v===5||v===6){a=l=d;continue e}p=p.parentNode}}a=a.return}vl(function(){var x=l,R=Di(t),I=[];e:{var _=lc.get(e);if(_!==void 0){var U=Hi,$=e;switch(e){case"keypress":if(Mr(t)===0)break e;case"keydown":case"keyup":U=xf;break;case"focusin":$="focus",U=Xi;break;case"focusout":$="blur",U=Xi;break;case"beforeblur":case"afterblur":U=Xi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=Ol;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=pf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=Vf;break;case rc:case ic:case oc:U=vf;break;case sc:U=wf;break;case"scroll":U=mf;break;case"wheel":U=jf;break;case"copy":case"cut":case"paste":U=gf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=zl}var q=(n&4)!==0,ze=!q&&e==="scroll",y=q?_!==null?_+"Capture":null:_;q=[];for(var g=x,M;g!==null;){M=g;var J=M.stateNode;if(M.tag===5&&J!==null&&(M=J,y!==null&&(J=La(g,y),J!=null&&q.push(Ra(g,J,M)))),ze)break;g=g.return}0<q.length&&(_=new U(_,$,null,t,R),I.push({event:_,listeners:q}))}}if((n&7)===0){e:{if(_=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",_&&t!==Ri&&($=t.relatedTarget||t.fromElement)&&(xt($)||$[Un]))break e;if((U||_)&&(_=R.window===R?R:(_=R.ownerDocument)?_.defaultView||_.parentWindow:window,U?($=t.relatedTarget||t.toElement,U=x,$=$?xt($):null,$!==null&&(ze=Ct($),$!==ze||$.tag!==5&&$.tag!==6)&&($=null)):(U=null,$=x),U!==$)){if(q=Ol,J="onMouseLeave",y="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(q=zl,J="onPointerLeave",y="onPointerEnter",g="pointer"),ze=U==null?_:Ht(U),M=$==null?_:Ht($),_=new q(J,g+"leave",U,t,R),_.target=ze,_.relatedTarget=M,J=null,xt(R)===x&&(q=new q(y,g+"enter",$,t,R),q.target=M,q.relatedTarget=ze,J=q),ze=J,U&&$)n:{for(q=U,y=$,g=0,M=q;M;M=$t(M))g++;for(M=0,J=y;J;J=$t(J))M++;for(;0<g-M;)q=$t(q),g--;for(;0<M-g;)y=$t(y),M--;for(;g--;){if(q===y||y!==null&&q===y.alternate)break n;q=$t(q),y=$t(y)}q=null}else q=null;U!==null&&fc(I,_,U,q,!1),$!==null&&ze!==null&&fc(I,ze,$,q,!0)}}e:{if(_=x?Ht(x):window,U=_.nodeName&&_.nodeName.toLowerCase(),U==="select"||U==="input"&&_.type==="file")var X=zf;else if(Gl(_))if($l)X=Yf;else{X=Jf;var ee=Qf}else(U=_.nodeName)&&U.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(X=Bf);if(X&&(X=X(e,x))){Kl(I,X,t,R);break e}ee&&ee(e,_,x),e==="focusout"&&(ee=_._wrapperState)&&ee.controlled&&_.type==="number"&&tt(_,"number",_.value)}switch(ee=x?Ht(x):window,e){case"focusin":(Gl(ee)||ee.contentEditable==="true")&&(Gt=ee,io=x,ka=null);break;case"focusout":ka=io=Gt=null;break;case"mousedown":oo=!0;break;case"contextmenu":case"mouseup":case"dragend":oo=!1,tc(I,t,R);break;case"selectionchange":if(Kf)break;case"keydown":case"keyup":tc(I,t,R)}var ne;if(no)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else Ut?Yl(e,t)&&(re="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(re="onCompositionStart");re&&(Ql&&t.locale!=="ko"&&(Ut||re!=="onCompositionStart"?re==="onCompositionEnd"&&Ut&&(ne=Dl()):(st=R,qi="value"in st?st.value:st.textContent,Ut=!0)),ee=Vr(x,re),0<ee.length&&(re=new Fl(re,e,null,t,R),I.push({event:re,listeners:ee}),ne?re.data=ne:(ne=Ul(t),ne!==null&&(re.data=ne)))),(ne=Rf?Df(e,t):If(e,t))&&(x=Vr(x,"onBeforeInput"),0<x.length&&(R=new Fl("onBeforeInput","beforeinput",null,t,R),I.push({event:R,listeners:x}),R.data=ne))}dc(I,n)})}function Ra(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Vr(e,n){for(var t=n+"Capture",a=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=La(e,t),l!=null&&a.unshift(Ra(e,l,i)),l=La(e,n),l!=null&&a.push(Ra(e,l,i))),e=e.return}return a}function $t(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fc(e,n,t,a,i){for(var l=n._reactName,d=[];t!==null&&t!==a;){var p=t,v=p.alternate,x=p.stateNode;if(v!==null&&v===a)break;p.tag===5&&x!==null&&(p=x,i?(v=La(t,l),v!=null&&d.unshift(Ra(t,v,p))):i||(v=La(t,l),v!=null&&d.push(Ra(t,v,p)))),t=t.return}d.length!==0&&e.push({event:n,listeners:d})}var Wf=/\r\n?/g,Zf=/\u0000|\uFFFD/g;function pc(e){return(typeof e=="string"?e:""+e).replace(Wf,`
`).replace(Zf,"")}function Ar(e,n,t){if(n=pc(n),pc(e)!==n&&t)throw Error(s(425))}function wr(){}var fo=null,po=null;function To(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Lo=typeof setTimeout=="function"?setTimeout:void 0,Xf=typeof clearTimeout=="function"?clearTimeout:void 0,Tc=typeof Promise=="function"?Promise:void 0,ep=typeof queueMicrotask=="function"?queueMicrotask:typeof Tc<"u"?function(e){return Tc.resolve(null).then(e).catch(np)}:Lo;function np(e){setTimeout(function(){throw e})}function vo(e,n){var t=n,a=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(a===0){e.removeChild(i),Ca(n);return}a--}else t!=="$"&&t!=="$?"&&t!=="$!"||a++;t=i}while(t);Ca(n)}function ct(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Lc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var qt=Math.random().toString(36).slice(2),Dn="__reactFiber$"+qt,Da="__reactProps$"+qt,Un="__reactContainer$"+qt,ho="__reactEvents$"+qt,tp="__reactListeners$"+qt,ap="__reactHandles$"+qt;function xt(e){var n=e[Dn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Un]||t[Dn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Lc(e);e!==null;){if(t=e[Dn])return t;e=Lc(e)}return n}e=t,t=e.parentNode}return null}function Ia(e){return e=e[Dn]||e[Un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ht(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function kr(e){return e[Da]||null}var go=[],Wt=-1;function ut(e){return{current:e}}function ke(e){0>Wt||(e.current=go[Wt],go[Wt]=null,Wt--)}function Ae(e,n){Wt++,go[Wt]=e.current,e.current=n}var dt={},He=ut(dt),an=ut(!1),St=dt;function Zt(e,n){var t=e.type.contextTypes;if(!t)return dt;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function rn(e){return e=e.childContextTypes,e!=null}function jr(){ke(an),ke(He)}function vc(e,n,t){if(He.current!==dt)throw Error(s(168));Ae(He,n),Ae(an,t)}function hc(e,n,t){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return t;a=a.getChildContext();for(var i in a)if(!(i in n))throw Error(s(108,Te(e)||"Unknown",i));return Y({},t,a)}function _r(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dt,St=He.current,Ae(He,e),Ae(an,an.current),!0}function gc(e,n,t){var a=e.stateNode;if(!a)throw Error(s(169));t?(e=hc(e,n,St),a.__reactInternalMemoizedMergedChildContext=e,ke(an),ke(He),Ae(He,e)):ke(an),Ae(an,t)}var Gn=null,Rr=!1,Po=!1;function Pc(e){Gn===null?Gn=[e]:Gn.push(e)}function rp(e){Rr=!0,Pc(e)}function mt(){if(!Po&&Gn!==null){Po=!0;var e=0,n=xe;try{var t=Gn;for(xe=1;e<t.length;e++){var a=t[e];do a=a(!0);while(a!==null)}Gn=null,Rr=!1}catch(i){throw Gn!==null&&(Gn=Gn.slice(e+1)),Ml(Qi,mt),i}finally{xe=n,Po=!1}}return null}var Xt=[],ea=0,Dr=null,Ir=0,pn=[],Tn=0,bt=null,Kn=1,$n="";function Vt(e,n){Xt[ea++]=Ir,Xt[ea++]=Dr,Dr=e,Ir=n}function yc(e,n,t){pn[Tn++]=Kn,pn[Tn++]=$n,pn[Tn++]=bt,bt=e;var a=Kn;e=$n;var i=32-Cn(a)-1;a&=~(1<<i),t+=1;var l=32-Cn(n)+i;if(30<l){var d=i-i%5;l=(a&(1<<d)-1).toString(32),a>>=d,i-=d,Kn=1<<32-Cn(n)+i|t<<i|a,$n=l+e}else Kn=1<<l|t<<i|a,$n=e}function yo(e){e.return!==null&&(Vt(e,1),yc(e,1,0))}function Mo(e){for(;e===Dr;)Dr=Xt[--ea],Xt[ea]=null,Ir=Xt[--ea],Xt[ea]=null;for(;e===bt;)bt=pn[--Tn],pn[Tn]=null,$n=pn[--Tn],pn[Tn]=null,Kn=pn[--Tn],pn[Tn]=null}var dn=null,mn=null,_e=!1,Sn=null;function Mc(e,n){var t=gn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ec(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,dn=e,mn=ct(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,dn=e,mn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=bt!==null?{id:Kn,overflow:$n}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=gn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,dn=e,mn=null,!0):!1;default:return!1}}function Eo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function No(e){if(_e){var n=mn;if(n){var t=n;if(!Ec(e,n)){if(Eo(e))throw Error(s(418));n=ct(t.nextSibling);var a=dn;n&&Ec(e,n)?Mc(a,t):(e.flags=e.flags&-4097|2,_e=!1,dn=e)}}else{if(Eo(e))throw Error(s(418));e.flags=e.flags&-4097|2,_e=!1,dn=e}}}function Nc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dn=e}function Or(e){if(e!==dn)return!1;if(!_e)return Nc(e),_e=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!To(e.type,e.memoizedProps)),n&&(n=mn)){if(Eo(e))throw Cc(),Error(s(418));for(;n;)Mc(e,n),n=ct(n.nextSibling)}if(Nc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){mn=ct(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}mn=null}}else mn=dn?ct(e.stateNode.nextSibling):null;return!0}function Cc(){for(var e=mn;e;)e=ct(e.nextSibling)}function na(){mn=dn=null,_e=!1}function Co(e){Sn===null?Sn=[e]:Sn.push(e)}var ip=W.ReactCurrentBatchConfig;function Oa(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(s(309));var a=t.stateNode}if(!a)throw Error(s(147,e));var i=a,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(d){var p=i.refs;d===null?delete p[l]:p[l]=d},n._stringRef=l,n)}if(typeof e!="string")throw Error(s(284));if(!t._owner)throw Error(s(290,e))}return e}function Fr(e,n){throw e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function xc(e){var n=e._init;return n(e._payload)}function Sc(e){function n(y,g){if(e){var M=y.deletions;M===null?(y.deletions=[g],y.flags|=16):M.push(g)}}function t(y,g){if(!e)return null;for(;g!==null;)n(y,g),g=g.sibling;return null}function a(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function i(y,g){return y=Pt(y,g),y.index=0,y.sibling=null,y}function l(y,g,M){return y.index=M,e?(M=y.alternate,M!==null?(M=M.index,M<g?(y.flags|=2,g):M):(y.flags|=2,g)):(y.flags|=1048576,g)}function d(y){return e&&y.alternate===null&&(y.flags|=2),y}function p(y,g,M,J){return g===null||g.tag!==6?(g=Ls(M,y.mode,J),g.return=y,g):(g=i(g,M),g.return=y,g)}function v(y,g,M,J){var X=M.type;return X===se?R(y,g,M.props.children,J,M.key):g!==null&&(g.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===fe&&xc(X)===g.type)?(J=i(g,M.props),J.ref=Oa(y,g,M),J.return=y,J):(J=ci(M.type,M.key,M.props,null,y.mode,J),J.ref=Oa(y,g,M),J.return=y,J)}function x(y,g,M,J){return g===null||g.tag!==4||g.stateNode.containerInfo!==M.containerInfo||g.stateNode.implementation!==M.implementation?(g=vs(M,y.mode,J),g.return=y,g):(g=i(g,M.children||[]),g.return=y,g)}function R(y,g,M,J,X){return g===null||g.tag!==7?(g=It(M,y.mode,J,X),g.return=y,g):(g=i(g,M),g.return=y,g)}function I(y,g,M){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Ls(""+g,y.mode,M),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case te:return M=ci(g.type,g.key,g.props,null,y.mode,M),M.ref=Oa(y,null,g),M.return=y,M;case de:return g=vs(g,y.mode,M),g.return=y,g;case fe:var J=g._init;return I(y,J(g._payload),M)}if(V(g)||Z(g))return g=It(g,y.mode,M,null),g.return=y,g;Fr(y,g)}return null}function _(y,g,M,J){var X=g!==null?g.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return X!==null?null:p(y,g,""+M,J);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case te:return M.key===X?v(y,g,M,J):null;case de:return M.key===X?x(y,g,M,J):null;case fe:return X=M._init,_(y,g,X(M._payload),J)}if(V(M)||Z(M))return X!==null?null:R(y,g,M,J,null);Fr(y,M)}return null}function U(y,g,M,J,X){if(typeof J=="string"&&J!==""||typeof J=="number")return y=y.get(M)||null,p(g,y,""+J,X);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case te:return y=y.get(J.key===null?M:J.key)||null,v(g,y,J,X);case de:return y=y.get(J.key===null?M:J.key)||null,x(g,y,J,X);case fe:var ee=J._init;return U(y,g,M,ee(J._payload),X)}if(V(J)||Z(J))return y=y.get(M)||null,R(g,y,J,X,null);Fr(g,J)}return null}function $(y,g,M,J){for(var X=null,ee=null,ne=g,re=g=0,Ke=null;ne!==null&&re<M.length;re++){ne.index>re?(Ke=ne,ne=null):Ke=ne.sibling;var Me=_(y,ne,M[re],J);if(Me===null){ne===null&&(ne=Ke);break}e&&ne&&Me.alternate===null&&n(y,ne),g=l(Me,g,re),ee===null?X=Me:ee.sibling=Me,ee=Me,ne=Ke}if(re===M.length)return t(y,ne),_e&&Vt(y,re),X;if(ne===null){for(;re<M.length;re++)ne=I(y,M[re],J),ne!==null&&(g=l(ne,g,re),ee===null?X=ne:ee.sibling=ne,ee=ne);return _e&&Vt(y,re),X}for(ne=a(y,ne);re<M.length;re++)Ke=U(ne,y,re,M[re],J),Ke!==null&&(e&&Ke.alternate!==null&&ne.delete(Ke.key===null?re:Ke.key),g=l(Ke,g,re),ee===null?X=Ke:ee.sibling=Ke,ee=Ke);return e&&ne.forEach(function(yt){return n(y,yt)}),_e&&Vt(y,re),X}function q(y,g,M,J){var X=Z(M);if(typeof X!="function")throw Error(s(150));if(M=X.call(M),M==null)throw Error(s(151));for(var ee=X=null,ne=g,re=g=0,Ke=null,Me=M.next();ne!==null&&!Me.done;re++,Me=M.next()){ne.index>re?(Ke=ne,ne=null):Ke=ne.sibling;var yt=_(y,ne,Me.value,J);if(yt===null){ne===null&&(ne=Ke);break}e&&ne&&yt.alternate===null&&n(y,ne),g=l(yt,g,re),ee===null?X=yt:ee.sibling=yt,ee=yt,ne=Ke}if(Me.done)return t(y,ne),_e&&Vt(y,re),X;if(ne===null){for(;!Me.done;re++,Me=M.next())Me=I(y,Me.value,J),Me!==null&&(g=l(Me,g,re),ee===null?X=Me:ee.sibling=Me,ee=Me);return _e&&Vt(y,re),X}for(ne=a(y,ne);!Me.done;re++,Me=M.next())Me=U(ne,y,re,Me.value,J),Me!==null&&(e&&Me.alternate!==null&&ne.delete(Me.key===null?re:Me.key),g=l(Me,g,re),ee===null?X=Me:ee.sibling=Me,ee=Me);return e&&ne.forEach(function(Op){return n(y,Op)}),_e&&Vt(y,re),X}function ze(y,g,M,J){if(typeof M=="object"&&M!==null&&M.type===se&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case te:e:{for(var X=M.key,ee=g;ee!==null;){if(ee.key===X){if(X=M.type,X===se){if(ee.tag===7){t(y,ee.sibling),g=i(ee,M.props.children),g.return=y,y=g;break e}}else if(ee.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===fe&&xc(X)===ee.type){t(y,ee.sibling),g=i(ee,M.props),g.ref=Oa(y,ee,M),g.return=y,y=g;break e}t(y,ee);break}else n(y,ee);ee=ee.sibling}M.type===se?(g=It(M.props.children,y.mode,J,M.key),g.return=y,y=g):(J=ci(M.type,M.key,M.props,null,y.mode,J),J.ref=Oa(y,g,M),J.return=y,y=J)}return d(y);case de:e:{for(ee=M.key;g!==null;){if(g.key===ee)if(g.tag===4&&g.stateNode.containerInfo===M.containerInfo&&g.stateNode.implementation===M.implementation){t(y,g.sibling),g=i(g,M.children||[]),g.return=y,y=g;break e}else{t(y,g);break}else n(y,g);g=g.sibling}g=vs(M,y.mode,J),g.return=y,y=g}return d(y);case fe:return ee=M._init,ze(y,g,ee(M._payload),J)}if(V(M))return $(y,g,M,J);if(Z(M))return q(y,g,M,J);Fr(y,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,g!==null&&g.tag===6?(t(y,g.sibling),g=i(g,M),g.return=y,y=g):(t(y,g),g=Ls(M,y.mode,J),g.return=y,y=g),d(y)):t(y,g)}return ze}var ta=Sc(!0),bc=Sc(!1),zr=ut(null),Qr=null,aa=null,xo=null;function So(){xo=aa=Qr=null}function bo(e){var n=zr.current;ke(zr),e._currentValue=n}function Vo(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function ra(e,n){Qr=e,xo=aa=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(on=!0),e.firstContext=null)}function Ln(e){var n=e._currentValue;if(xo!==e)if(e={context:e,memoizedValue:n,next:null},aa===null){if(Qr===null)throw Error(s(308));aa=e,Qr.dependencies={lanes:0,firstContext:e}}else aa=aa.next=e;return n}var At=null;function Ao(e){At===null?At=[e]:At.push(e)}function Vc(e,n,t,a){var i=n.interleaved;return i===null?(t.next=t,Ao(n)):(t.next=i.next,i.next=t),n.interleaved=t,qn(e,a)}function qn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var ft=!1;function wo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ac(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Hn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function pt(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ye&2)!==0){var i=a.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n,qn(e,t)}return i=a.interleaved,i===null?(n.next=n,Ao(a)):(n.next=i.next,i.next=n),a.interleaved=n,qn(e,t)}function Jr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Yi(e,t)}}function wc(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var d={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=d:l=l.next=d,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:a.shared,effects:a.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Br(e,n,t,a){var i=e.updateQueue;ft=!1;var l=i.firstBaseUpdate,d=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var v=p,x=v.next;v.next=null,d===null?l=x:d.next=x,d=v;var R=e.alternate;R!==null&&(R=R.updateQueue,p=R.lastBaseUpdate,p!==d&&(p===null?R.firstBaseUpdate=x:p.next=x,R.lastBaseUpdate=v))}if(l!==null){var I=i.baseState;d=0,R=x=v=null,p=l;do{var _=p.lane,U=p.eventTime;if((a&_)===_){R!==null&&(R=R.next={eventTime:U,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var $=e,q=p;switch(_=n,U=t,q.tag){case 1:if($=q.payload,typeof $=="function"){I=$.call(U,I,_);break e}I=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=q.payload,_=typeof $=="function"?$.call(U,I,_):$,_==null)break e;I=Y({},I,_);break e;case 2:ft=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,_=i.effects,_===null?i.effects=[p]:_.push(p))}else U={eventTime:U,lane:_,tag:p.tag,payload:p.payload,callback:p.callback,next:null},R===null?(x=R=U,v=I):R=R.next=U,d|=_;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;_=p,p=_.next,_.next=null,i.lastBaseUpdate=_,i.shared.pending=null}}while(!0);if(R===null&&(v=I),i.baseState=v,i.firstBaseUpdate=x,i.lastBaseUpdate=R,n=i.shared.interleaved,n!==null){i=n;do d|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);jt|=d,e.lanes=d,e.memoizedState=I}}function kc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],i=a.callback;if(i!==null){if(a.callback=null,a=t,typeof i!="function")throw Error(s(191,i));i.call(a)}}}var Fa={},In=ut(Fa),za=ut(Fa),Qa=ut(Fa);function wt(e){if(e===Fa)throw Error(s(174));return e}function ko(e,n){switch(Ae(Qa,n),Ae(za,e),Ae(In,Fa),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ki(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ki(n,e)}ke(In),Ae(In,n)}function ia(){ke(In),ke(za),ke(Qa)}function jc(e){wt(Qa.current);var n=wt(In.current),t=ki(n,e.type);n!==t&&(Ae(za,e),Ae(In,t))}function jo(e){za.current===e&&(ke(In),ke(za))}var Re=ut(0);function Yr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var _o=[];function Ro(){for(var e=0;e<_o.length;e++)_o[e]._workInProgressVersionPrimary=null;_o.length=0}var Ur=W.ReactCurrentDispatcher,Do=W.ReactCurrentBatchConfig,kt=0,De=null,Je=null,Ue=null,Gr=!1,Ja=!1,Ba=0,op=0;function We(){throw Error(s(321))}function Io(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!xn(e[t],n[t]))return!1;return!0}function Oo(e,n,t,a,i,l){if(kt=l,De=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ur.current=e===null||e.memoizedState===null?up:dp,e=t(a,i),Ja){l=0;do{if(Ja=!1,Ba=0,25<=l)throw Error(s(301));l+=1,Ue=Je=null,n.updateQueue=null,Ur.current=mp,e=t(a,i)}while(Ja)}if(Ur.current=qr,n=Je!==null&&Je.next!==null,kt=0,Ue=Je=De=null,Gr=!1,n)throw Error(s(300));return e}function Fo(){var e=Ba!==0;return Ba=0,e}function On(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?De.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function vn(){if(Je===null){var e=De.alternate;e=e!==null?e.memoizedState:null}else e=Je.next;var n=Ue===null?De.memoizedState:Ue.next;if(n!==null)Ue=n,Je=e;else{if(e===null)throw Error(s(310));Je=e,e={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},Ue===null?De.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function Ya(e,n){return typeof n=="function"?n(e):n}function zo(e){var n=vn(),t=n.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=e;var a=Je,i=a.baseQueue,l=t.pending;if(l!==null){if(i!==null){var d=i.next;i.next=l.next,l.next=d}a.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,a=a.baseState;var p=d=null,v=null,x=l;do{var R=x.lane;if((kt&R)===R)v!==null&&(v=v.next={lane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),a=x.hasEagerState?x.eagerState:e(a,x.action);else{var I={lane:R,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null};v===null?(p=v=I,d=a):v=v.next=I,De.lanes|=R,jt|=R}x=x.next}while(x!==null&&x!==l);v===null?d=a:v.next=p,xn(a,n.memoizedState)||(on=!0),n.memoizedState=a,n.baseState=d,n.baseQueue=v,t.lastRenderedState=a}if(e=t.interleaved,e!==null){i=e;do l=i.lane,De.lanes|=l,jt|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Qo(e){var n=vn(),t=n.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=e;var a=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var d=i=i.next;do l=e(l,d.action),d=d.next;while(d!==i);xn(l,n.memoizedState)||(on=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,a]}function _c(){}function Rc(e,n){var t=De,a=vn(),i=n(),l=!xn(a.memoizedState,i);if(l&&(a.memoizedState=i,on=!0),a=a.queue,Jo(Oc.bind(null,t,a,e),[e]),a.getSnapshot!==n||l||Ue!==null&&Ue.memoizedState.tag&1){if(t.flags|=2048,Ua(9,Ic.bind(null,t,a,i,n),void 0,null),Ge===null)throw Error(s(349));(kt&30)!==0||Dc(t,n,i)}return i}function Dc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=De.updateQueue,n===null?(n={lastEffect:null,stores:null},De.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Ic(e,n,t,a){n.value=t,n.getSnapshot=a,Fc(n)&&zc(e)}function Oc(e,n,t){return t(function(){Fc(n)&&zc(e)})}function Fc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!xn(e,t)}catch{return!0}}function zc(e){var n=qn(e,1);n!==null&&wn(n,e,1,-1)}function Qc(e){var n=On();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ya,lastRenderedState:e},n.queue=e,e=e.dispatch=cp.bind(null,De,e),[n.memoizedState,e]}function Ua(e,n,t,a){return e={tag:e,create:n,destroy:t,deps:a,next:null},n=De.updateQueue,n===null?(n={lastEffect:null,stores:null},De.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e)),e}function Jc(){return vn().memoizedState}function Kr(e,n,t,a){var i=On();De.flags|=e,i.memoizedState=Ua(1|n,t,void 0,a===void 0?null:a)}function $r(e,n,t,a){var i=vn();a=a===void 0?null:a;var l=void 0;if(Je!==null){var d=Je.memoizedState;if(l=d.destroy,a!==null&&Io(a,d.deps)){i.memoizedState=Ua(n,t,l,a);return}}De.flags|=e,i.memoizedState=Ua(1|n,t,l,a)}function Bc(e,n){return Kr(8390656,8,e,n)}function Jo(e,n){return $r(2048,8,e,n)}function Yc(e,n){return $r(4,2,e,n)}function Uc(e,n){return $r(4,4,e,n)}function Gc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Kc(e,n,t){return t=t!=null?t.concat([e]):null,$r(4,4,Gc.bind(null,n,e),t)}function Bo(){}function $c(e,n){var t=vn();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&Io(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function qc(e,n){var t=vn();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&Io(n,a[1])?a[0]:(e=e(),t.memoizedState=[e,n],e)}function Hc(e,n,t){return(kt&21)===0?(e.baseState&&(e.baseState=!1,on=!0),e.memoizedState=t):(xn(t,n)||(t=xl(),De.lanes|=t,jt|=t,e.baseState=!0),n)}function sp(e,n){var t=xe;xe=t!==0&&4>t?t:4,e(!0);var a=Do.transition;Do.transition={};try{e(!1),n()}finally{xe=t,Do.transition=a}}function Wc(){return vn().memoizedState}function lp(e,n,t){var a=ht(e);if(t={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null},Zc(e))Xc(n,t);else if(t=Vc(e,n,t,a),t!==null){var i=tn();wn(t,e,a,i),eu(t,n,a)}}function cp(e,n,t){var a=ht(e),i={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null};if(Zc(e))Xc(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var d=n.lastRenderedState,p=l(d,t);if(i.hasEagerState=!0,i.eagerState=p,xn(p,d)){var v=n.interleaved;v===null?(i.next=i,Ao(n)):(i.next=v.next,v.next=i),n.interleaved=i;return}}catch{}finally{}t=Vc(e,n,i,a),t!==null&&(i=tn(),wn(t,e,a,i),eu(t,n,a))}}function Zc(e){var n=e.alternate;return e===De||n!==null&&n===De}function Xc(e,n){Ja=Gr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function eu(e,n,t){if((t&4194240)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Yi(e,t)}}var qr={readContext:Ln,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},up={readContext:Ln,useCallback:function(e,n){return On().memoizedState=[e,n===void 0?null:n],e},useContext:Ln,useEffect:Bc,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Kr(4194308,4,Gc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Kr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Kr(4,2,e,n)},useMemo:function(e,n){var t=On();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var a=On();return n=t!==void 0?t(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=lp.bind(null,De,e),[a.memoizedState,e]},useRef:function(e){var n=On();return e={current:e},n.memoizedState=e},useState:Qc,useDebugValue:Bo,useDeferredValue:function(e){return On().memoizedState=e},useTransition:function(){var e=Qc(!1),n=e[0];return e=sp.bind(null,e[1]),On().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var a=De,i=On();if(_e){if(t===void 0)throw Error(s(407));t=t()}else{if(t=n(),Ge===null)throw Error(s(349));(kt&30)!==0||Dc(a,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,Bc(Oc.bind(null,a,l,e),[e]),a.flags|=2048,Ua(9,Ic.bind(null,a,l,t,n),void 0,null),t},useId:function(){var e=On(),n=Ge.identifierPrefix;if(_e){var t=$n,a=Kn;t=(a&~(1<<32-Cn(a)-1)).toString(32)+t,n=":"+n+"R"+t,t=Ba++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=op++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},dp={readContext:Ln,useCallback:$c,useContext:Ln,useEffect:Jo,useImperativeHandle:Kc,useInsertionEffect:Yc,useLayoutEffect:Uc,useMemo:qc,useReducer:zo,useRef:Jc,useState:function(){return zo(Ya)},useDebugValue:Bo,useDeferredValue:function(e){var n=vn();return Hc(n,Je.memoizedState,e)},useTransition:function(){var e=zo(Ya)[0],n=vn().memoizedState;return[e,n]},useMutableSource:_c,useSyncExternalStore:Rc,useId:Wc,unstable_isNewReconciler:!1},mp={readContext:Ln,useCallback:$c,useContext:Ln,useEffect:Jo,useImperativeHandle:Kc,useInsertionEffect:Yc,useLayoutEffect:Uc,useMemo:qc,useReducer:Qo,useRef:Jc,useState:function(){return Qo(Ya)},useDebugValue:Bo,useDeferredValue:function(e){var n=vn();return Je===null?n.memoizedState=e:Hc(n,Je.memoizedState,e)},useTransition:function(){var e=Qo(Ya)[0],n=vn().memoizedState;return[e,n]},useMutableSource:_c,useSyncExternalStore:Rc,useId:Wc,unstable_isNewReconciler:!1};function bn(e,n){if(e&&e.defaultProps){n=Y({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Yo(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:Y({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Hr={isMounted:function(e){return(e=e._reactInternals)?Ct(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var a=tn(),i=ht(e),l=Hn(a,i);l.payload=n,t!=null&&(l.callback=t),n=pt(e,l,i),n!==null&&(wn(n,e,i,a),Jr(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=tn(),i=ht(e),l=Hn(a,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=pt(e,l,i),n!==null&&(wn(n,e,i,a),Jr(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=tn(),a=ht(e),i=Hn(t,a);i.tag=2,n!=null&&(i.callback=n),n=pt(e,i,a),n!==null&&(wn(n,e,a,t),Jr(n,e,a))}};function nu(e,n,t,a,i,l,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,l,d):n.prototype&&n.prototype.isPureReactComponent?!wa(t,a)||!wa(i,l):!0}function tu(e,n,t){var a=!1,i=dt,l=n.contextType;return typeof l=="object"&&l!==null?l=Ln(l):(i=rn(n)?St:He.current,a=n.contextTypes,l=(a=a!=null)?Zt(e,i):dt),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Hr,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function au(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&Hr.enqueueReplaceState(n,n.state,null)}function Uo(e,n,t,a){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},wo(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=Ln(l):(l=rn(n)?St:He.current,i.context=Zt(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Yo(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Hr.enqueueReplaceState(i,i.state,null),Br(e,t,i,a),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function oa(e,n){try{var t="",a=n;do t+=ue(a),a=a.return;while(a);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function Go(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ko(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var fp=typeof WeakMap=="function"?WeakMap:Map;function ru(e,n,t){t=Hn(-1,t),t.tag=3,t.payload={element:null};var a=n.value;return t.callback=function(){ai||(ai=!0,ls=a),Ko(e,n)},t}function iu(e,n,t){t=Hn(-1,t),t.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var i=n.value;t.payload=function(){return a(i)},t.callback=function(){Ko(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){Ko(e,n),typeof a!="function"&&(Lt===null?Lt=new Set([this]):Lt.add(this));var d=n.stack;this.componentDidCatch(n.value,{componentStack:d!==null?d:""})}),t}function ou(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new fp;var i=new Set;a.set(n,i)}else i=a.get(n),i===void 0&&(i=new Set,a.set(n,i));i.has(t)||(i.add(t),e=Sp.bind(null,e,n,t),n.then(e,e))}function su(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function lu(e,n,t,a,i){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Hn(-1,1),n.tag=2,pt(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var pp=W.ReactCurrentOwner,on=!1;function nn(e,n,t,a){n.child=e===null?bc(n,null,t,a):ta(n,e.child,t,a)}function cu(e,n,t,a,i){t=t.render;var l=n.ref;return ra(n,i),a=Oo(e,n,t,a,l,i),t=Fo(),e!==null&&!on?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Wn(e,n,i)):(_e&&t&&yo(n),n.flags|=1,nn(e,n,a,i),n.child)}function uu(e,n,t,a,i){if(e===null){var l=t.type;return typeof l=="function"&&!Ts(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,du(e,n,l,a,i)):(e=ci(t.type,null,a,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,(e.lanes&i)===0){var d=l.memoizedProps;if(t=t.compare,t=t!==null?t:wa,t(d,a)&&e.ref===n.ref)return Wn(e,n,i)}return n.flags|=1,e=Pt(l,a),e.ref=n.ref,e.return=n,n.child=e}function du(e,n,t,a,i){if(e!==null){var l=e.memoizedProps;if(wa(l,a)&&e.ref===n.ref)if(on=!1,n.pendingProps=a=l,(e.lanes&i)!==0)(e.flags&131072)!==0&&(on=!0);else return n.lanes=e.lanes,Wn(e,n,i)}return $o(e,n,t,a,i)}function mu(e,n,t){var a=n.pendingProps,i=a.children,l=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ae(la,fn),fn|=t;else{if((t&1073741824)===0)return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Ae(la,fn),fn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=l!==null?l.baseLanes:t,Ae(la,fn),fn|=a}else l!==null?(a=l.baseLanes|t,n.memoizedState=null):a=t,Ae(la,fn),fn|=a;return nn(e,n,i,t),n.child}function fu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function $o(e,n,t,a,i){var l=rn(t)?St:He.current;return l=Zt(n,l),ra(n,i),t=Oo(e,n,t,a,l,i),a=Fo(),e!==null&&!on?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Wn(e,n,i)):(_e&&a&&yo(n),n.flags|=1,nn(e,n,t,i),n.child)}function pu(e,n,t,a,i){if(rn(t)){var l=!0;_r(n)}else l=!1;if(ra(n,i),n.stateNode===null)Zr(e,n),tu(n,t,a),Uo(n,t,a,i),a=!0;else if(e===null){var d=n.stateNode,p=n.memoizedProps;d.props=p;var v=d.context,x=t.contextType;typeof x=="object"&&x!==null?x=Ln(x):(x=rn(t)?St:He.current,x=Zt(n,x));var R=t.getDerivedStateFromProps,I=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function";I||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==a||v!==x)&&au(n,d,a,x),ft=!1;var _=n.memoizedState;d.state=_,Br(n,a,d,i),v=n.memoizedState,p!==a||_!==v||an.current||ft?(typeof R=="function"&&(Yo(n,t,R,a),v=n.memoizedState),(p=ft||nu(n,t,p,a,_,v,x))?(I||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=v),d.props=a,d.state=v,d.context=x,a=p):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{d=n.stateNode,Ac(e,n),p=n.memoizedProps,x=n.type===n.elementType?p:bn(n.type,p),d.props=x,I=n.pendingProps,_=d.context,v=t.contextType,typeof v=="object"&&v!==null?v=Ln(v):(v=rn(t)?St:He.current,v=Zt(n,v));var U=t.getDerivedStateFromProps;(R=typeof U=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==I||_!==v)&&au(n,d,a,v),ft=!1,_=n.memoizedState,d.state=_,Br(n,a,d,i);var $=n.memoizedState;p!==I||_!==$||an.current||ft?(typeof U=="function"&&(Yo(n,t,U,a),$=n.memoizedState),(x=ft||nu(n,t,x,a,_,$,v)||!1)?(R||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(a,$,v),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(a,$,v)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&_===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&_===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=$),d.props=a,d.state=$,d.context=v,a=x):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&_===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&_===e.memoizedState||(n.flags|=1024),a=!1)}return qo(e,n,t,a,l,i)}function qo(e,n,t,a,i,l){fu(e,n);var d=(n.flags&128)!==0;if(!a&&!d)return i&&gc(n,t,!1),Wn(e,n,l);a=n.stateNode,pp.current=n;var p=d&&typeof t.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&d?(n.child=ta(n,e.child,null,l),n.child=ta(n,null,p,l)):nn(e,n,p,l),n.memoizedState=a.state,i&&gc(n,t,!0),n.child}function Tu(e){var n=e.stateNode;n.pendingContext?vc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&vc(e,n.context,!1),ko(e,n.containerInfo)}function Lu(e,n,t,a,i){return na(),Co(i),n.flags|=256,nn(e,n,t,a),n.child}var Ho={dehydrated:null,treeContext:null,retryLane:0};function Wo(e){return{baseLanes:e,cachePool:null,transitions:null}}function vu(e,n,t){var a=n.pendingProps,i=Re.current,l=!1,d=(n.flags&128)!==0,p;if((p=d)||(p=e!==null&&e.memoizedState===null?!1:(i&2)!==0),p?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ae(Re,i&1),e===null)return No(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(d=a.children,e=a.fallback,l?(a=n.mode,l=n.child,d={mode:"hidden",children:d},(a&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=d):l=ui(d,a,0,null),e=It(e,a,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=Wo(t),n.memoizedState=Ho,e):Zo(n,d));if(i=e.memoizedState,i!==null&&(p=i.dehydrated,p!==null))return Tp(e,n,d,a,p,i,t);if(l){l=a.fallback,d=n.mode,i=e.child,p=i.sibling;var v={mode:"hidden",children:a.children};return(d&1)===0&&n.child!==i?(a=n.child,a.childLanes=0,a.pendingProps=v,n.deletions=null):(a=Pt(i,v),a.subtreeFlags=i.subtreeFlags&14680064),p!==null?l=Pt(p,l):(l=It(l,d,t,null),l.flags|=2),l.return=n,a.return=n,a.sibling=l,n.child=a,a=l,l=n.child,d=e.child.memoizedState,d=d===null?Wo(t):{baseLanes:d.baseLanes|t,cachePool:null,transitions:d.transitions},l.memoizedState=d,l.childLanes=e.childLanes&~t,n.memoizedState=Ho,a}return l=e.child,e=l.sibling,a=Pt(l,{mode:"visible",children:a.children}),(n.mode&1)===0&&(a.lanes=t),a.return=n,a.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=a,n.memoizedState=null,a}function Zo(e,n){return n=ui({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Wr(e,n,t,a){return a!==null&&Co(a),ta(n,e.child,null,t),e=Zo(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Tp(e,n,t,a,i,l,d){if(t)return n.flags&256?(n.flags&=-257,a=Go(Error(s(422))),Wr(e,n,d,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=a.fallback,i=n.mode,a=ui({mode:"visible",children:a.children},i,0,null),l=It(l,i,d,null),l.flags|=2,a.return=n,l.return=n,a.sibling=l,n.child=a,(n.mode&1)!==0&&ta(n,e.child,null,d),n.child.memoizedState=Wo(d),n.memoizedState=Ho,l);if((n.mode&1)===0)return Wr(e,n,d,null);if(i.data==="$!"){if(a=i.nextSibling&&i.nextSibling.dataset,a)var p=a.dgst;return a=p,l=Error(s(419)),a=Go(l,a,void 0),Wr(e,n,d,a)}if(p=(d&e.childLanes)!==0,on||p){if(a=Ge,a!==null){switch(d&-d){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(a.suspendedLanes|d))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,qn(e,i),wn(a,e,i,-1))}return ps(),a=Go(Error(s(421))),Wr(e,n,d,a)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=bp.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,mn=ct(i.nextSibling),dn=n,_e=!0,Sn=null,e!==null&&(pn[Tn++]=Kn,pn[Tn++]=$n,pn[Tn++]=bt,Kn=e.id,$n=e.overflow,bt=n),n=Zo(n,a.children),n.flags|=4096,n)}function hu(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Vo(e.return,n,t)}function Xo(e,n,t,a,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=a,l.tail=t,l.tailMode=i)}function gu(e,n,t){var a=n.pendingProps,i=a.revealOrder,l=a.tail;if(nn(e,n,a.children,t),a=Re.current,(a&2)!==0)a=a&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hu(e,t,n);else if(e.tag===19)hu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(Ae(Re,a),(n.mode&1)===0)n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&Yr(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Xo(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Yr(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Xo(n,!0,t,null,l);break;case"together":Xo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Zr(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Wn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),jt|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,t=Pt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Pt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Lp(e,n,t){switch(n.tag){case 3:Tu(n),na();break;case 5:jc(n);break;case 1:rn(n.type)&&_r(n);break;case 4:ko(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,i=n.memoizedProps.value;Ae(zr,a._currentValue),a._currentValue=i;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(Ae(Re,Re.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?vu(e,n,t):(Ae(Re,Re.current&1),e=Wn(e,n,t),e!==null?e.sibling:null);Ae(Re,Re.current&1);break;case 19:if(a=(t&n.childLanes)!==0,(e.flags&128)!==0){if(a)return gu(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ae(Re,Re.current),a)break;return null;case 22:case 23:return n.lanes=0,mu(e,n,t)}return Wn(e,n,t)}var Pu,es,yu,Mu;Pu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},es=function(){},yu=function(e,n,t,a){var i=e.memoizedProps;if(i!==a){e=n.stateNode,wt(In.current);var l=null;switch(t){case"input":i=k(e,i),a=k(e,a),l=[];break;case"select":i=Y({},i,{value:void 0}),a=Y({},a,{value:void 0}),l=[];break;case"textarea":i=ae(e,i),a=ae(e,a),l=[];break;default:typeof i.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=wr)}ji(t,a);var d;t=null;for(x in i)if(!a.hasOwnProperty(x)&&i.hasOwnProperty(x)&&i[x]!=null)if(x==="style"){var p=i[x];for(d in p)p.hasOwnProperty(d)&&(t||(t={}),t[d]="")}else x!=="dangerouslySetInnerHTML"&&x!=="children"&&x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(m.hasOwnProperty(x)?l||(l=[]):(l=l||[]).push(x,null));for(x in a){var v=a[x];if(p=i!=null?i[x]:void 0,a.hasOwnProperty(x)&&v!==p&&(v!=null||p!=null))if(x==="style")if(p){for(d in p)!p.hasOwnProperty(d)||v&&v.hasOwnProperty(d)||(t||(t={}),t[d]="");for(d in v)v.hasOwnProperty(d)&&p[d]!==v[d]&&(t||(t={}),t[d]=v[d])}else t||(l||(l=[]),l.push(x,t)),t=v;else x==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,p=p?p.__html:void 0,v!=null&&p!==v&&(l=l||[]).push(x,v)):x==="children"?typeof v!="string"&&typeof v!="number"||(l=l||[]).push(x,""+v):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&(m.hasOwnProperty(x)?(v!=null&&x==="onScroll"&&we("scroll",e),l||p===v||(l=[])):(l=l||[]).push(x,v))}t&&(l=l||[]).push("style",t);var x=l;(n.updateQueue=x)&&(n.flags|=4)}},Mu=function(e,n,t,a){t!==a&&(n.flags|=4)};function Ga(e,n){if(!_e)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags&14680064,a|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function vp(e,n,t){var a=n.pendingProps;switch(Mo(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return rn(n.type)&&jr(),Ze(n),null;case 3:return a=n.stateNode,ia(),ke(an),ke(He),Ro(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Or(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Sn!==null&&(ds(Sn),Sn=null))),es(e,n),Ze(n),null;case 5:jo(n);var i=wt(Qa.current);if(t=n.type,e!==null&&n.stateNode!=null)yu(e,n,t,a,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}if(e=wt(In.current),Or(n)){a=n.stateNode,t=n.type;var l=n.memoizedProps;switch(a[Dn]=n,a[Da]=l,e=(n.mode&1)!==0,t){case"dialog":we("cancel",a),we("close",a);break;case"iframe":case"object":case"embed":we("load",a);break;case"video":case"audio":for(i=0;i<ja.length;i++)we(ja[i],a);break;case"source":we("error",a);break;case"img":case"image":case"link":we("error",a),we("load",a);break;case"details":we("toggle",a);break;case"input":Pe(a,l),we("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!l.multiple},we("invalid",a);break;case"textarea":be(a,l),we("invalid",a)}ji(t,l),i=null;for(var d in l)if(l.hasOwnProperty(d)){var p=l[d];d==="children"?typeof p=="string"?a.textContent!==p&&(l.suppressHydrationWarning!==!0&&Ar(a.textContent,p,e),i=["children",p]):typeof p=="number"&&a.textContent!==""+p&&(l.suppressHydrationWarning!==!0&&Ar(a.textContent,p,e),i=["children",""+p]):m.hasOwnProperty(d)&&p!=null&&d==="onScroll"&&we("scroll",a)}switch(t){case"input":En(a),nt(a,l,!0);break;case"textarea":En(a),zt(a);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(a.onclick=wr)}a=i,n.updateQueue=a,a!==null&&(n.flags|=4)}else{d=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ll(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=d.createElement(t,{is:a.is}):(e=d.createElement(t),t==="select"&&(d=e,a.multiple?d.multiple=!0:a.size&&(d.size=a.size))):e=d.createElementNS(e,t),e[Dn]=n,e[Da]=a,Pu(e,n,!1,!1),n.stateNode=e;e:{switch(d=_i(t,a),t){case"dialog":we("cancel",e),we("close",e),i=a;break;case"iframe":case"object":case"embed":we("load",e),i=a;break;case"video":case"audio":for(i=0;i<ja.length;i++)we(ja[i],e);i=a;break;case"source":we("error",e),i=a;break;case"img":case"image":case"link":we("error",e),we("load",e),i=a;break;case"details":we("toggle",e),i=a;break;case"input":Pe(e,a),i=k(e,a),we("invalid",e);break;case"option":i=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},i=Y({},a,{value:void 0}),we("invalid",e);break;case"textarea":be(e,a),i=ae(e,a),we("invalid",e);break;default:i=a}ji(t,i),p=i;for(l in p)if(p.hasOwnProperty(l)){var v=p[l];l==="style"?dl(e,v):l==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,v!=null&&cl(e,v)):l==="children"?typeof v=="string"?(t!=="textarea"||v!=="")&&pa(e,v):typeof v=="number"&&pa(e,""+v):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(m.hasOwnProperty(l)?v!=null&&l==="onScroll"&&we("scroll",e):v!=null&&le(e,l,v,d))}switch(t){case"input":En(e),nt(e,a,!1);break;case"textarea":En(e),zt(e);break;case"option":a.value!=null&&e.setAttribute("value",""+Le(a.value));break;case"select":e.multiple=!!a.multiple,l=a.value,l!=null?F(e,!!a.multiple,l,!1):a.defaultValue!=null&&F(e,!!a.multiple,a.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=wr)}switch(t){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ze(n),null;case 6:if(e&&n.stateNode!=null)Mu(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(s(166));if(t=wt(Qa.current),wt(In.current),Or(n)){if(a=n.stateNode,t=n.memoizedProps,a[Dn]=n,(l=a.nodeValue!==t)&&(e=dn,e!==null))switch(e.tag){case 3:Ar(a.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ar(a.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else a=(t.nodeType===9?t:t.ownerDocument).createTextNode(a),a[Dn]=n,n.stateNode=a}return Ze(n),null;case 13:if(ke(Re),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_e&&mn!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Cc(),na(),n.flags|=98560,l=!1;else if(l=Or(n),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[Dn]=n}else na(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),l=!1}else Sn!==null&&(ds(Sn),Sn=null),l=!0;if(!l)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(Re.current&1)!==0?Be===0&&(Be=3):ps())),n.updateQueue!==null&&(n.flags|=4),Ze(n),null);case 4:return ia(),es(e,n),e===null&&_a(n.stateNode.containerInfo),Ze(n),null;case 10:return bo(n.type._context),Ze(n),null;case 17:return rn(n.type)&&jr(),Ze(n),null;case 19:if(ke(Re),l=n.memoizedState,l===null)return Ze(n),null;if(a=(n.flags&128)!==0,d=l.rendering,d===null)if(a)Ga(l,!1);else{if(Be!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Yr(e),d!==null){for(n.flags|=128,Ga(l,!1),a=d.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=t,t=n.child;t!==null;)l=t,e=a,l.flags&=14680066,d=l.alternate,d===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=d.childLanes,l.lanes=d.lanes,l.child=d.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=d.memoizedProps,l.memoizedState=d.memoizedState,l.updateQueue=d.updateQueue,l.type=d.type,e=d.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return Ae(Re,Re.current&1|2),n.child}e=e.sibling}l.tail!==null&&Fe()>ca&&(n.flags|=128,a=!0,Ga(l,!1),n.lanes=4194304)}else{if(!a)if(e=Yr(d),e!==null){if(n.flags|=128,a=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ga(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!_e)return Ze(n),null}else 2*Fe()-l.renderingStartTime>ca&&t!==1073741824&&(n.flags|=128,a=!0,Ga(l,!1),n.lanes=4194304);l.isBackwards?(d.sibling=n.child,n.child=d):(t=l.last,t!==null?t.sibling=d:n.child=d,l.last=d)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Fe(),n.sibling=null,t=Re.current,Ae(Re,a?t&1|2:t&1),n):(Ze(n),null);case 22:case 23:return fs(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&(n.mode&1)!==0?(fn&1073741824)!==0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),null;case 24:return null;case 25:return null}throw Error(s(156,n.tag))}function hp(e,n){switch(Mo(n),n.tag){case 1:return rn(n.type)&&jr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ia(),ke(an),ke(He),Ro(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return jo(n),null;case 13:if(ke(Re),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));na()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ke(Re),null;case 4:return ia(),null;case 10:return bo(n.type._context),null;case 22:case 23:return fs(),null;case 24:return null;default:return null}}var Xr=!1,Xe=!1,gp=typeof WeakSet=="function"?WeakSet:Set,K=null;function sa(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(a){Oe(e,n,a)}else t.current=null}function ns(e,n,t){try{t()}catch(a){Oe(e,n,a)}}var Eu=!1;function Pp(e,n){if(fo=gr,e=nc(),ro(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var i=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var d=0,p=-1,v=-1,x=0,R=0,I=e,_=null;n:for(;;){for(var U;I!==t||i!==0&&I.nodeType!==3||(p=d+i),I!==l||a!==0&&I.nodeType!==3||(v=d+a),I.nodeType===3&&(d+=I.nodeValue.length),(U=I.firstChild)!==null;)_=I,I=U;for(;;){if(I===e)break n;if(_===t&&++x===i&&(p=d),_===l&&++R===a&&(v=d),(U=I.nextSibling)!==null)break;I=_,_=I.parentNode}I=U}t=p===-1||v===-1?null:{start:p,end:v}}else t=null}t=t||{start:0,end:0}}else t=null;for(po={focusedElem:e,selectionRange:t},gr=!1,K=n;K!==null;)if(n=K,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,K=e;else for(;K!==null;){n=K;try{var $=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if($!==null){var q=$.memoizedProps,ze=$.memoizedState,y=n.stateNode,g=y.getSnapshotBeforeUpdate(n.elementType===n.type?q:bn(n.type,q),ze);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var M=n.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(J){Oe(n,n.return,J)}if(e=n.sibling,e!==null){e.return=n.return,K=e;break}K=n.return}return $=Eu,Eu=!1,$}function Ka(e,n,t){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var i=a=a.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&ns(n,t,l)}i=i.next}while(i!==a)}}function ei(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var a=t.create;t.destroy=a()}t=t.next}while(t!==n)}}function ts(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Nu(e){var n=e.alternate;n!==null&&(e.alternate=null,Nu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Dn],delete n[Da],delete n[ho],delete n[tp],delete n[ap])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cu(e){return e.tag===5||e.tag===3||e.tag===4}function xu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function as(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=wr));else if(a!==4&&(e=e.child,e!==null))for(as(e,n,t),e=e.sibling;e!==null;)as(e,n,t),e=e.sibling}function rs(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(rs(e,n,t),e=e.sibling;e!==null;)rs(e,n,t),e=e.sibling}var $e=null,Vn=!1;function Tt(e,n,t){for(t=t.child;t!==null;)Su(e,n,t),t=t.sibling}function Su(e,n,t){if(Rn&&typeof Rn.onCommitFiberUnmount=="function")try{Rn.onCommitFiberUnmount(fr,t)}catch{}switch(t.tag){case 5:Xe||sa(t,n);case 6:var a=$e,i=Vn;$e=null,Tt(e,n,t),$e=a,Vn=i,$e!==null&&(Vn?(e=$e,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):$e.removeChild(t.stateNode));break;case 18:$e!==null&&(Vn?(e=$e,t=t.stateNode,e.nodeType===8?vo(e.parentNode,t):e.nodeType===1&&vo(e,t),Ca(e)):vo($e,t.stateNode));break;case 4:a=$e,i=Vn,$e=t.stateNode.containerInfo,Vn=!0,Tt(e,n,t),$e=a,Vn=i;break;case 0:case 11:case 14:case 15:if(!Xe&&(a=t.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){i=a=a.next;do{var l=i,d=l.destroy;l=l.tag,d!==void 0&&((l&2)!==0||(l&4)!==0)&&ns(t,n,d),i=i.next}while(i!==a)}Tt(e,n,t);break;case 1:if(!Xe&&(sa(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=t.memoizedProps,a.state=t.memoizedState,a.componentWillUnmount()}catch(p){Oe(t,n,p)}Tt(e,n,t);break;case 21:Tt(e,n,t);break;case 22:t.mode&1?(Xe=(a=Xe)||t.memoizedState!==null,Tt(e,n,t),Xe=a):Tt(e,n,t);break;default:Tt(e,n,t)}}function bu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new gp),n.forEach(function(a){var i=Vp.bind(null,e,a);t.has(a)||(t.add(a),a.then(i,i))})}}function An(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];try{var l=e,d=n,p=d;e:for(;p!==null;){switch(p.tag){case 5:$e=p.stateNode,Vn=!1;break e;case 3:$e=p.stateNode.containerInfo,Vn=!0;break e;case 4:$e=p.stateNode.containerInfo,Vn=!0;break e}p=p.return}if($e===null)throw Error(s(160));Su(l,d,i),$e=null,Vn=!1;var v=i.alternate;v!==null&&(v.return=null),i.return=null}catch(x){Oe(i,n,x)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Vu(n,e),n=n.sibling}function Vu(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(An(n,e),Fn(e),a&4){try{Ka(3,e,e.return),ei(3,e)}catch(q){Oe(e,e.return,q)}try{Ka(5,e,e.return)}catch(q){Oe(e,e.return,q)}}break;case 1:An(n,e),Fn(e),a&512&&t!==null&&sa(t,t.return);break;case 5:if(An(n,e),Fn(e),a&512&&t!==null&&sa(t,t.return),e.flags&32){var i=e.stateNode;try{pa(i,"")}catch(q){Oe(e,e.return,q)}}if(a&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,d=t!==null?t.memoizedProps:l,p=e.type,v=e.updateQueue;if(e.updateQueue=null,v!==null)try{p==="input"&&l.type==="radio"&&l.name!=null&&Ve(i,l),_i(p,d);var x=_i(p,l);for(d=0;d<v.length;d+=2){var R=v[d],I=v[d+1];R==="style"?dl(i,I):R==="dangerouslySetInnerHTML"?cl(i,I):R==="children"?pa(i,I):le(i,R,I,x)}switch(p){case"input":Yn(i,l);break;case"textarea":Nn(i,l);break;case"select":var _=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var U=l.value;U!=null?F(i,!!l.multiple,U,!1):_!==!!l.multiple&&(l.defaultValue!=null?F(i,!!l.multiple,l.defaultValue,!0):F(i,!!l.multiple,l.multiple?[]:"",!1))}i[Da]=l}catch(q){Oe(e,e.return,q)}}break;case 6:if(An(n,e),Fn(e),a&4){if(e.stateNode===null)throw Error(s(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(q){Oe(e,e.return,q)}}break;case 3:if(An(n,e),Fn(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Ca(n.containerInfo)}catch(q){Oe(e,e.return,q)}break;case 4:An(n,e),Fn(e);break;case 13:An(n,e),Fn(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(ss=Fe())),a&4&&bu(e);break;case 22:if(R=t!==null&&t.memoizedState!==null,e.mode&1?(Xe=(x=Xe)||R,An(n,e),Xe=x):An(n,e),Fn(e),a&8192){if(x=e.memoizedState!==null,(e.stateNode.isHidden=x)&&!R&&(e.mode&1)!==0)for(K=e,R=e.child;R!==null;){for(I=K=R;K!==null;){switch(_=K,U=_.child,_.tag){case 0:case 11:case 14:case 15:Ka(4,_,_.return);break;case 1:sa(_,_.return);var $=_.stateNode;if(typeof $.componentWillUnmount=="function"){a=_,t=_.return;try{n=a,$.props=n.memoizedProps,$.state=n.memoizedState,$.componentWillUnmount()}catch(q){Oe(a,t,q)}}break;case 5:sa(_,_.return);break;case 22:if(_.memoizedState!==null){ku(I);continue}}U!==null?(U.return=_,K=U):ku(I)}R=R.sibling}e:for(R=null,I=e;;){if(I.tag===5){if(R===null){R=I;try{i=I.stateNode,x?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(p=I.stateNode,v=I.memoizedProps.style,d=v!=null&&v.hasOwnProperty("display")?v.display:null,p.style.display=ul("display",d))}catch(q){Oe(e,e.return,q)}}}else if(I.tag===6){if(R===null)try{I.stateNode.nodeValue=x?"":I.memoizedProps}catch(q){Oe(e,e.return,q)}}else if((I.tag!==22&&I.tag!==23||I.memoizedState===null||I===e)&&I.child!==null){I.child.return=I,I=I.child;continue}if(I===e)break e;for(;I.sibling===null;){if(I.return===null||I.return===e)break e;R===I&&(R=null),I=I.return}R===I&&(R=null),I.sibling.return=I.return,I=I.sibling}}break;case 19:An(n,e),Fn(e),a&4&&bu(e);break;case 21:break;default:An(n,e),Fn(e)}}function Fn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Cu(t)){var a=t;break e}t=t.return}throw Error(s(160))}switch(a.tag){case 5:var i=a.stateNode;a.flags&32&&(pa(i,""),a.flags&=-33);var l=xu(e);rs(e,l,i);break;case 3:case 4:var d=a.stateNode.containerInfo,p=xu(e);as(e,p,d);break;default:throw Error(s(161))}}catch(v){Oe(e,e.return,v)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function yp(e,n,t){K=e,Au(e)}function Au(e,n,t){for(var a=(e.mode&1)!==0;K!==null;){var i=K,l=i.child;if(i.tag===22&&a){var d=i.memoizedState!==null||Xr;if(!d){var p=i.alternate,v=p!==null&&p.memoizedState!==null||Xe;p=Xr;var x=Xe;if(Xr=d,(Xe=v)&&!x)for(K=i;K!==null;)d=K,v=d.child,d.tag===22&&d.memoizedState!==null?ju(i):v!==null?(v.return=d,K=v):ju(i);for(;l!==null;)K=l,Au(l),l=l.sibling;K=i,Xr=p,Xe=x}wu(e)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,K=l):wu(e)}}function wu(e){for(;K!==null;){var n=K;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Xe||ei(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!Xe)if(t===null)a.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:bn(n.type,t.memoizedProps);a.componentDidUpdate(i,t.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&kc(n,l,a);break;case 3:var d=n.updateQueue;if(d!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}kc(n,d,t)}break;case 5:var p=n.stateNode;if(t===null&&n.flags&4){t=p;var v=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":v.autoFocus&&t.focus();break;case"img":v.src&&(t.src=v.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var x=n.alternate;if(x!==null){var R=x.memoizedState;if(R!==null){var I=R.dehydrated;I!==null&&Ca(I)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}Xe||n.flags&512&&ts(n)}catch(_){Oe(n,n.return,_)}}if(n===e){K=null;break}if(t=n.sibling,t!==null){t.return=n.return,K=t;break}K=n.return}}function ku(e){for(;K!==null;){var n=K;if(n===e){K=null;break}var t=n.sibling;if(t!==null){t.return=n.return,K=t;break}K=n.return}}function ju(e){for(;K!==null;){var n=K;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{ei(4,n)}catch(v){Oe(n,t,v)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var i=n.return;try{a.componentDidMount()}catch(v){Oe(n,i,v)}}var l=n.return;try{ts(n)}catch(v){Oe(n,l,v)}break;case 5:var d=n.return;try{ts(n)}catch(v){Oe(n,d,v)}}}catch(v){Oe(n,n.return,v)}if(n===e){K=null;break}var p=n.sibling;if(p!==null){p.return=n.return,K=p;break}K=n.return}}var Mp=Math.ceil,ni=W.ReactCurrentDispatcher,is=W.ReactCurrentOwner,hn=W.ReactCurrentBatchConfig,ye=0,Ge=null,Qe=null,qe=0,fn=0,la=ut(0),Be=0,$a=null,jt=0,ti=0,os=0,qa=null,sn=null,ss=0,ca=1/0,Zn=null,ai=!1,ls=null,Lt=null,ri=!1,vt=null,ii=0,Ha=0,cs=null,oi=-1,si=0;function tn(){return(ye&6)!==0?Fe():oi!==-1?oi:oi=Fe()}function ht(e){return(e.mode&1)===0?1:(ye&2)!==0&&qe!==0?qe&-qe:ip.transition!==null?(si===0&&(si=xl()),si):(e=xe,e!==0||(e=window.event,e=e===void 0?16:Rl(e.type)),e)}function wn(e,n,t,a){if(50<Ha)throw Ha=0,cs=null,Error(s(185));Pa(e,t,a),((ye&2)===0||e!==Ge)&&(e===Ge&&((ye&2)===0&&(ti|=t),Be===4&&gt(e,qe)),ln(e,a),t===1&&ye===0&&(n.mode&1)===0&&(ca=Fe()+500,Rr&&mt()))}function ln(e,n){var t=e.callbackNode;rf(e,n);var a=Lr(e,e===Ge?qe:0);if(a===0)t!==null&&El(t),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(t!=null&&El(t),n===1)e.tag===0?rp(Ru.bind(null,e)):Pc(Ru.bind(null,e)),ep(function(){(ye&6)===0&&mt()}),t=null;else{switch(Sl(a)){case 1:t=Qi;break;case 4:t=Nl;break;case 16:t=mr;break;case 536870912:t=Cl;break;default:t=mr}t=Bu(t,_u.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function _u(e,n){if(oi=-1,si=0,(ye&6)!==0)throw Error(s(327));var t=e.callbackNode;if(ua()&&e.callbackNode!==t)return null;var a=Lr(e,e===Ge?qe:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||n)n=li(e,a);else{n=a;var i=ye;ye|=2;var l=Iu();(Ge!==e||qe!==n)&&(Zn=null,ca=Fe()+500,Rt(e,n));do try{Cp();break}catch(p){Du(e,p)}while(!0);So(),ni.current=l,ye=i,Qe!==null?n=0:(Ge=null,qe=0,n=Be)}if(n!==0){if(n===2&&(i=Ji(e),i!==0&&(a=i,n=us(e,i))),n===1)throw t=$a,Rt(e,0),gt(e,a),ln(e,Fe()),t;if(n===6)gt(e,a);else{if(i=e.current.alternate,(a&30)===0&&!Ep(i)&&(n=li(e,a),n===2&&(l=Ji(e),l!==0&&(a=l,n=us(e,l))),n===1))throw t=$a,Rt(e,0),gt(e,a),ln(e,Fe()),t;switch(e.finishedWork=i,e.finishedLanes=a,n){case 0:case 1:throw Error(s(345));case 2:Dt(e,sn,Zn);break;case 3:if(gt(e,a),(a&130023424)===a&&(n=ss+500-Fe(),10<n)){if(Lr(e,0)!==0)break;if(i=e.suspendedLanes,(i&a)!==a){tn(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Lo(Dt.bind(null,e,sn,Zn),n);break}Dt(e,sn,Zn);break;case 4:if(gt(e,a),(a&4194240)===a)break;for(n=e.eventTimes,i=-1;0<a;){var d=31-Cn(a);l=1<<d,d=n[d],d>i&&(i=d),a&=~l}if(a=i,a=Fe()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Mp(a/1960))-a,10<a){e.timeoutHandle=Lo(Dt.bind(null,e,sn,Zn),a);break}Dt(e,sn,Zn);break;case 5:Dt(e,sn,Zn);break;default:throw Error(s(329))}}}return ln(e,Fe()),e.callbackNode===t?_u.bind(null,e):null}function us(e,n){var t=qa;return e.current.memoizedState.isDehydrated&&(Rt(e,n).flags|=256),e=li(e,n),e!==2&&(n=sn,sn=t,n!==null&&ds(n)),e}function ds(e){sn===null?sn=e:sn.push.apply(sn,e)}function Ep(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var a=0;a<t.length;a++){var i=t[a],l=i.getSnapshot;i=i.value;try{if(!xn(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function gt(e,n){for(n&=~os,n&=~ti,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Cn(n),a=1<<t;e[t]=-1,n&=~a}}function Ru(e){if((ye&6)!==0)throw Error(s(327));ua();var n=Lr(e,0);if((n&1)===0)return ln(e,Fe()),null;var t=li(e,n);if(e.tag!==0&&t===2){var a=Ji(e);a!==0&&(n=a,t=us(e,a))}if(t===1)throw t=$a,Rt(e,0),gt(e,n),ln(e,Fe()),t;if(t===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Dt(e,sn,Zn),ln(e,Fe()),null}function ms(e,n){var t=ye;ye|=1;try{return e(n)}finally{ye=t,ye===0&&(ca=Fe()+500,Rr&&mt())}}function _t(e){vt!==null&&vt.tag===0&&(ye&6)===0&&ua();var n=ye;ye|=1;var t=hn.transition,a=xe;try{if(hn.transition=null,xe=1,e)return e()}finally{xe=a,hn.transition=t,ye=n,(ye&6)===0&&mt()}}function fs(){fn=la.current,ke(la)}function Rt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Xf(t)),Qe!==null)for(t=Qe.return;t!==null;){var a=t;switch(Mo(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&jr();break;case 3:ia(),ke(an),ke(He),Ro();break;case 5:jo(a);break;case 4:ia();break;case 13:ke(Re);break;case 19:ke(Re);break;case 10:bo(a.type._context);break;case 22:case 23:fs()}t=t.return}if(Ge=e,Qe=e=Pt(e.current,null),qe=fn=n,Be=0,$a=null,os=ti=jt=0,sn=qa=null,At!==null){for(n=0;n<At.length;n++)if(t=At[n],a=t.interleaved,a!==null){t.interleaved=null;var i=a.next,l=t.pending;if(l!==null){var d=l.next;l.next=i,a.next=d}t.pending=a}At=null}return e}function Du(e,n){do{var t=Qe;try{if(So(),Ur.current=qr,Gr){for(var a=De.memoizedState;a!==null;){var i=a.queue;i!==null&&(i.pending=null),a=a.next}Gr=!1}if(kt=0,Ue=Je=De=null,Ja=!1,Ba=0,is.current=null,t===null||t.return===null){Be=1,$a=n,Qe=null;break}e:{var l=e,d=t.return,p=t,v=n;if(n=qe,p.flags|=32768,v!==null&&typeof v=="object"&&typeof v.then=="function"){var x=v,R=p,I=R.tag;if((R.mode&1)===0&&(I===0||I===11||I===15)){var _=R.alternate;_?(R.updateQueue=_.updateQueue,R.memoizedState=_.memoizedState,R.lanes=_.lanes):(R.updateQueue=null,R.memoizedState=null)}var U=su(d);if(U!==null){U.flags&=-257,lu(U,d,p,l,n),U.mode&1&&ou(l,x,n),n=U,v=x;var $=n.updateQueue;if($===null){var q=new Set;q.add(v),n.updateQueue=q}else $.add(v);break e}else{if((n&1)===0){ou(l,x,n),ps();break e}v=Error(s(426))}}else if(_e&&p.mode&1){var ze=su(d);if(ze!==null){(ze.flags&65536)===0&&(ze.flags|=256),lu(ze,d,p,l,n),Co(oa(v,p));break e}}l=v=oa(v,p),Be!==4&&(Be=2),qa===null?qa=[l]:qa.push(l),l=d;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var y=ru(l,v,n);wc(l,y);break e;case 1:p=v;var g=l.type,M=l.stateNode;if((l.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(Lt===null||!Lt.has(M)))){l.flags|=65536,n&=-n,l.lanes|=n;var J=iu(l,p,n);wc(l,J);break e}}l=l.return}while(l!==null)}Fu(t)}catch(X){n=X,Qe===t&&t!==null&&(Qe=t=t.return);continue}break}while(!0)}function Iu(){var e=ni.current;return ni.current=qr,e===null?qr:e}function ps(){(Be===0||Be===3||Be===2)&&(Be=4),Ge===null||(jt&268435455)===0&&(ti&268435455)===0||gt(Ge,qe)}function li(e,n){var t=ye;ye|=2;var a=Iu();(Ge!==e||qe!==n)&&(Zn=null,Rt(e,n));do try{Np();break}catch(i){Du(e,i)}while(!0);if(So(),ye=t,ni.current=a,Qe!==null)throw Error(s(261));return Ge=null,qe=0,Be}function Np(){for(;Qe!==null;)Ou(Qe)}function Cp(){for(;Qe!==null&&!qm();)Ou(Qe)}function Ou(e){var n=Ju(e.alternate,e,fn);e.memoizedProps=e.pendingProps,n===null?Fu(e):Qe=n,is.current=null}function Fu(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=vp(t,n,fn),t!==null){Qe=t;return}}else{if(t=hp(t,n),t!==null){t.flags&=32767,Qe=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Be=6,Qe=null;return}}if(n=n.sibling,n!==null){Qe=n;return}Qe=n=e}while(n!==null);Be===0&&(Be=5)}function Dt(e,n,t){var a=xe,i=hn.transition;try{hn.transition=null,xe=1,xp(e,n,t,a)}finally{hn.transition=i,xe=a}return null}function xp(e,n,t,a){do ua();while(vt!==null);if((ye&6)!==0)throw Error(s(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(of(e,l),e===Ge&&(Qe=Ge=null,qe=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||ri||(ri=!0,Bu(mr,function(){return ua(),null})),l=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||l){l=hn.transition,hn.transition=null;var d=xe;xe=1;var p=ye;ye|=4,is.current=null,Pp(e,t),Vu(t,e),Gf(po),gr=!!fo,po=fo=null,e.current=t,yp(t),Hm(),ye=p,xe=d,hn.transition=l}else e.current=t;if(ri&&(ri=!1,vt=e,ii=i),l=e.pendingLanes,l===0&&(Lt=null),Xm(t.stateNode),ln(e,Fe()),n!==null)for(a=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],a(i.value,{componentStack:i.stack,digest:i.digest});if(ai)throw ai=!1,e=ls,ls=null,e;return(ii&1)!==0&&e.tag!==0&&ua(),l=e.pendingLanes,(l&1)!==0?e===cs?Ha++:(Ha=0,cs=e):Ha=0,mt(),null}function ua(){if(vt!==null){var e=Sl(ii),n=hn.transition,t=xe;try{if(hn.transition=null,xe=16>e?16:e,vt===null)var a=!1;else{if(e=vt,vt=null,ii=0,(ye&6)!==0)throw Error(s(331));var i=ye;for(ye|=4,K=e.current;K!==null;){var l=K,d=l.child;if((K.flags&16)!==0){var p=l.deletions;if(p!==null){for(var v=0;v<p.length;v++){var x=p[v];for(K=x;K!==null;){var R=K;switch(R.tag){case 0:case 11:case 15:Ka(8,R,l)}var I=R.child;if(I!==null)I.return=R,K=I;else for(;K!==null;){R=K;var _=R.sibling,U=R.return;if(Nu(R),R===x){K=null;break}if(_!==null){_.return=U,K=_;break}K=U}}}var $=l.alternate;if($!==null){var q=$.child;if(q!==null){$.child=null;do{var ze=q.sibling;q.sibling=null,q=ze}while(q!==null)}}K=l}}if((l.subtreeFlags&2064)!==0&&d!==null)d.return=l,K=d;else e:for(;K!==null;){if(l=K,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Ka(9,l,l.return)}var y=l.sibling;if(y!==null){y.return=l.return,K=y;break e}K=l.return}}var g=e.current;for(K=g;K!==null;){d=K;var M=d.child;if((d.subtreeFlags&2064)!==0&&M!==null)M.return=d,K=M;else e:for(d=g;K!==null;){if(p=K,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:ei(9,p)}}catch(X){Oe(p,p.return,X)}if(p===d){K=null;break e}var J=p.sibling;if(J!==null){J.return=p.return,K=J;break e}K=p.return}}if(ye=i,mt(),Rn&&typeof Rn.onPostCommitFiberRoot=="function")try{Rn.onPostCommitFiberRoot(fr,e)}catch{}a=!0}return a}finally{xe=t,hn.transition=n}}return!1}function zu(e,n,t){n=oa(t,n),n=ru(e,n,1),e=pt(e,n,1),n=tn(),e!==null&&(Pa(e,1,n),ln(e,n))}function Oe(e,n,t){if(e.tag===3)zu(e,e,t);else for(;n!==null;){if(n.tag===3){zu(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Lt===null||!Lt.has(a))){e=oa(t,e),e=iu(n,e,1),n=pt(n,e,1),e=tn(),n!==null&&(Pa(n,1,e),ln(n,e));break}}n=n.return}}function Sp(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),n=tn(),e.pingedLanes|=e.suspendedLanes&t,Ge===e&&(qe&t)===t&&(Be===4||Be===3&&(qe&130023424)===qe&&500>Fe()-ss?Rt(e,0):os|=t),ln(e,n)}function Qu(e,n){n===0&&((e.mode&1)===0?n=1:(n=Tr,Tr<<=1,(Tr&130023424)===0&&(Tr=4194304)));var t=tn();e=qn(e,n),e!==null&&(Pa(e,n,t),ln(e,t))}function bp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Qu(e,t)}function Vp(e,n){var t=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(s(314))}a!==null&&a.delete(n),Qu(e,t)}var Ju;Ju=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||an.current)on=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return on=!1,Lp(e,n,t);on=(e.flags&131072)!==0}else on=!1,_e&&(n.flags&1048576)!==0&&yc(n,Ir,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;Zr(e,n),e=n.pendingProps;var i=Zt(n,He.current);ra(n,t),i=Oo(null,n,a,e,i,t);var l=Fo();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,rn(a)?(l=!0,_r(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wo(n),i.updater=Hr,n.stateNode=i,i._reactInternals=n,Uo(n,a,e,t),n=qo(null,n,a,!0,l,t)):(n.tag=0,_e&&l&&yo(n),nn(null,n,i,t),n=n.child),n;case 16:a=n.elementType;e:{switch(Zr(e,n),e=n.pendingProps,i=a._init,a=i(a._payload),n.type=a,i=n.tag=wp(a),e=bn(a,e),i){case 0:n=$o(null,n,a,e,t);break e;case 1:n=pu(null,n,a,e,t);break e;case 11:n=cu(null,n,a,e,t);break e;case 14:n=uu(null,n,a,bn(a.type,e),t);break e}throw Error(s(306,a,""))}return n;case 0:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:bn(a,i),$o(e,n,a,i,t);case 1:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:bn(a,i),pu(e,n,a,i,t);case 3:e:{if(Tu(n),e===null)throw Error(s(387));a=n.pendingProps,l=n.memoizedState,i=l.element,Ac(e,n),Br(n,a,null,t);var d=n.memoizedState;if(a=d.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=oa(Error(s(423)),n),n=Lu(e,n,a,t,i);break e}else if(a!==i){i=oa(Error(s(424)),n),n=Lu(e,n,a,t,i);break e}else for(mn=ct(n.stateNode.containerInfo.firstChild),dn=n,_e=!0,Sn=null,t=bc(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(na(),a===i){n=Wn(e,n,t);break e}nn(e,n,a,t)}n=n.child}return n;case 5:return jc(n),e===null&&No(n),a=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,d=i.children,To(a,i)?d=null:l!==null&&To(a,l)&&(n.flags|=32),fu(e,n),nn(e,n,d,t),n.child;case 6:return e===null&&No(n),null;case 13:return vu(e,n,t);case 4:return ko(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=ta(n,null,a,t):nn(e,n,a,t),n.child;case 11:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:bn(a,i),cu(e,n,a,i,t);case 7:return nn(e,n,n.pendingProps,t),n.child;case 8:return nn(e,n,n.pendingProps.children,t),n.child;case 12:return nn(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(a=n.type._context,i=n.pendingProps,l=n.memoizedProps,d=i.value,Ae(zr,a._currentValue),a._currentValue=d,l!==null)if(xn(l.value,d)){if(l.children===i.children&&!an.current){n=Wn(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var p=l.dependencies;if(p!==null){d=l.child;for(var v=p.firstContext;v!==null;){if(v.context===a){if(l.tag===1){v=Hn(-1,t&-t),v.tag=2;var x=l.updateQueue;if(x!==null){x=x.shared;var R=x.pending;R===null?v.next=v:(v.next=R.next,R.next=v),x.pending=v}}l.lanes|=t,v=l.alternate,v!==null&&(v.lanes|=t),Vo(l.return,t,n),p.lanes|=t;break}v=v.next}}else if(l.tag===10)d=l.type===n.type?null:l.child;else if(l.tag===18){if(d=l.return,d===null)throw Error(s(341));d.lanes|=t,p=d.alternate,p!==null&&(p.lanes|=t),Vo(d,t,n),d=l.sibling}else d=l.child;if(d!==null)d.return=l;else for(d=l;d!==null;){if(d===n){d=null;break}if(l=d.sibling,l!==null){l.return=d.return,d=l;break}d=d.return}l=d}nn(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,a=n.pendingProps.children,ra(n,t),i=Ln(i),a=a(i),n.flags|=1,nn(e,n,a,t),n.child;case 14:return a=n.type,i=bn(a,n.pendingProps),i=bn(a.type,i),uu(e,n,a,i,t);case 15:return du(e,n,n.type,n.pendingProps,t);case 17:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:bn(a,i),Zr(e,n),n.tag=1,rn(a)?(e=!0,_r(n)):e=!1,ra(n,t),tu(n,a,i),Uo(n,a,i,t),qo(null,n,a,!0,e,t);case 19:return gu(e,n,t);case 22:return mu(e,n,t)}throw Error(s(156,n.tag))};function Bu(e,n){return Ml(e,n)}function Ap(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gn(e,n,t,a){return new Ap(e,n,t,a)}function Ts(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wp(e){if(typeof e=="function")return Ts(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ce)return 11;if(e===ie)return 14}return 2}function Pt(e,n){var t=e.alternate;return t===null?(t=gn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ci(e,n,t,a,i,l){var d=2;if(a=e,typeof e=="function")Ts(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case se:return It(t.children,i,l,n);case ve:d=8,i|=8;break;case Ee:return e=gn(12,t,n,i|2),e.elementType=Ee,e.lanes=l,e;case he:return e=gn(13,t,n,i),e.elementType=he,e.lanes=l,e;case Se:return e=gn(19,t,n,i),e.elementType=Se,e.lanes=l,e;case ce:return ui(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ge:d=10;break e;case je:d=9;break e;case Ce:d=11;break e;case ie:d=14;break e;case fe:d=16,a=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return n=gn(d,t,n,i),n.elementType=e,n.type=a,n.lanes=l,n}function It(e,n,t,a){return e=gn(7,e,a,n),e.lanes=t,e}function ui(e,n,t,a){return e=gn(22,e,a,n),e.elementType=ce,e.lanes=t,e.stateNode={isHidden:!1},e}function Ls(e,n,t){return e=gn(6,e,null,n),e.lanes=t,e}function vs(e,n,t){return n=gn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function kp(e,n,t,a,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bi(0),this.expirationTimes=Bi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bi(0),this.identifierPrefix=a,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function hs(e,n,t,a,i,l,d,p,v){return e=new kp(e,n,t,p,v),n===1?(n=1,l===!0&&(n|=8)):n=0,l=gn(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:a,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},wo(l),e}function jp(e,n,t){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:de,key:a==null?null:""+a,children:e,containerInfo:n,implementation:t}}function Yu(e){if(!e)return dt;e=e._reactInternals;e:{if(Ct(e)!==e||e.tag!==1)throw Error(s(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(rn(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(s(171))}if(e.tag===1){var t=e.type;if(rn(t))return hc(e,t,n)}return n}function Uu(e,n,t,a,i,l,d,p,v){return e=hs(t,a,!0,e,i,l,d,p,v),e.context=Yu(null),t=e.current,a=tn(),i=ht(t),l=Hn(a,i),l.callback=n??null,pt(t,l,i),e.current.lanes=i,Pa(e,i,a),ln(e,a),e}function di(e,n,t,a){var i=n.current,l=tn(),d=ht(i);return t=Yu(t),n.context===null?n.context=t:n.pendingContext=t,n=Hn(l,d),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=pt(i,n,d),e!==null&&(wn(e,i,d,l),Jr(e,i,d)),d}function mi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function gs(e,n){Gu(e,n),(e=e.alternate)&&Gu(e,n)}function _p(){return null}var Ku=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ps(e){this._internalRoot=e}fi.prototype.render=Ps.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));di(e,n,null,null)},fi.prototype.unmount=Ps.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;_t(function(){di(null,e,null,null)}),n[Un]=null}};function fi(e){this._internalRoot=e}fi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Al();e={blockedOn:null,target:e,priority:n};for(var t=0;t<ot.length&&n!==0&&n<ot[t].priority;t++);ot.splice(t,0,e),t===0&&jl(e)}};function ys(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $u(){}function Rp(e,n,t,a,i){if(i){if(typeof a=="function"){var l=a;a=function(){var x=mi(d);l.call(x)}}var d=Uu(n,a,e,0,null,!1,!1,"",$u);return e._reactRootContainer=d,e[Un]=d.current,_a(e.nodeType===8?e.parentNode:e),_t(),d}for(;i=e.lastChild;)e.removeChild(i);if(typeof a=="function"){var p=a;a=function(){var x=mi(v);p.call(x)}}var v=hs(e,0,!1,null,null,!1,!1,"",$u);return e._reactRootContainer=v,e[Un]=v.current,_a(e.nodeType===8?e.parentNode:e),_t(function(){di(n,v,t,a)}),v}function Ti(e,n,t,a,i){var l=t._reactRootContainer;if(l){var d=l;if(typeof i=="function"){var p=i;i=function(){var v=mi(d);p.call(v)}}di(n,d,e,i)}else d=Rp(t,n,e,i,a);return mi(d)}bl=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=ga(n.pendingLanes);t!==0&&(Yi(n,t|1),ln(n,Fe()),(ye&6)===0&&(ca=Fe()+500,mt()))}break;case 13:_t(function(){var a=qn(e,1);if(a!==null){var i=tn();wn(a,e,1,i)}}),gs(e,1)}},Ui=function(e){if(e.tag===13){var n=qn(e,134217728);if(n!==null){var t=tn();wn(n,e,134217728,t)}gs(e,134217728)}},Vl=function(e){if(e.tag===13){var n=ht(e),t=qn(e,n);if(t!==null){var a=tn();wn(t,e,n,a)}gs(e,n)}},Al=function(){return xe},wl=function(e,n){var t=xe;try{return xe=e,n()}finally{xe=t}},Ii=function(e,n,t){switch(n){case"input":if(Yn(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var i=kr(a);if(!i)throw Error(s(90));_n(a),Yn(a,i)}}}break;case"textarea":Nn(e,t);break;case"select":n=t.value,n!=null&&F(e,!!t.multiple,n,!1)}},Tl=ms,Ll=_t;var Dp={usingClientEntryPoint:!1,Events:[Ia,Ht,kr,fl,pl,ms]},Wa={findFiberByHostInstance:xt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ip={bundleType:Wa.bundleType,version:Wa.version,rendererPackageName:Wa.rendererPackageName,rendererConfig:Wa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:W.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Pl(e),e===null?null:e.stateNode},findFiberByHostInstance:Wa.findFiberByHostInstance||_p,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Li.isDisabled&&Li.supportsFiber)try{fr=Li.inject(Ip),Rn=Li}catch{}}return cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dp,cn.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ys(n))throw Error(s(200));return jp(e,n,null,t)},cn.createRoot=function(e,n){if(!ys(e))throw Error(s(299));var t=!1,a="",i=Ku;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=hs(e,1,!1,null,null,t,!1,a,i),e[Un]=n.current,_a(e.nodeType===8?e.parentNode:e),new Ps(n)},cn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=Pl(n),e=e===null?null:e.stateNode,e},cn.flushSync=function(e){return _t(e)},cn.hydrate=function(e,n,t){if(!pi(n))throw Error(s(200));return Ti(null,e,n,!0,t)},cn.hydrateRoot=function(e,n,t){if(!ys(e))throw Error(s(405));var a=t!=null&&t.hydratedSources||null,i=!1,l="",d=Ku;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),n=Uu(n,null,e,1,t??null,i,!1,l,d),e[Un]=n.current,_a(e),a)for(e=0;e<a.length;e++)t=a[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new fi(n)},cn.render=function(e,n,t){if(!pi(n))throw Error(s(200));return Ti(null,e,n,!1,t)},cn.unmountComponentAtNode=function(e){if(!pi(e))throw Error(s(40));return e._reactRootContainer?(_t(function(){Ti(null,null,e,!1,function(){e._reactRootContainer=null,e[Un]=null})}),!0):!1},cn.unstable_batchedUpdates=ms,cn.unstable_renderSubtreeIntoContainer=function(e,n,t,a){if(!pi(t))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return Ti(e,n,t,!1,a)},cn.version="18.3.1-next-f1338f8080-20240426",cn}var td;function jd(){if(td)return Ns.exports;td=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),Ns.exports=Kp(),Ns.exports}var ad;function $p(){if(ad)return hi;ad=1;var r=jd();return hi.createRoot=r.createRoot,hi.hydrateRoot=r.hydrateRoot,hi}var qp=$p();const Hp=kd(qp),Wp="modulepreload",Zp=function(r){return"/BTMM_JORNADAS/"+r},rd={},Pn=function(o,s,u){let m=Promise.resolve();if(s&&s.length>0){let h=function(A){return Promise.all(A.map(E=>Promise.resolve(E).then(N=>({status:"fulfilled",value:N}),N=>({status:"rejected",reason:N}))))};document.getElementsByTagName("link");const T=document.querySelector("meta[property=csp-nonce]"),L=(T==null?void 0:T.nonce)||(T==null?void 0:T.getAttribute("nonce"));m=h(s.map(A=>{if(A=Zp(A),A in rd)return;rd[A]=!0;const E=A.endsWith(".css"),N=E?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${A}"]${N}`))return;const S=document.createElement("link");if(S.rel=E?"stylesheet":Wp,E||(S.as="script"),S.crossOrigin="",S.href=A,L&&S.setAttribute("nonce",L),document.head.appendChild(S),E)return new Promise((w,z)=>{S.addEventListener("load",w),S.addEventListener("error",()=>z(new Error(`Unable to preload CSS for ${A}`)))})}))}function f(h){const T=new Event("vite:preloadError",{cancelable:!0});if(T.payload=h,window.dispatchEvent(T),!T.defaultPrevented)throw h}return m.then(h=>{for(const T of h||[])T.status==="rejected"&&f(T.reason);return o().catch(f)})},Vi=[{nombre:"Puesto Orosi",tag:"OR",color:"bg-orange-100 text-orange-950",funcionarios:["Errol Salazar","Mayra Espinoza","Yeison Cortés","Kenneth Mena","Fabricio Carbonell","Monserrath Navarro"]},{nombre:"Puesto Quetzales",tag:"QZ",color:"bg-orange-700 text-white",funcionarios:["Juan Pablo Granados","Karen Valle","Josué Brenes","Laura Valverde","Diana Tencio","Jetzelly Villalobos","Pablo Sánchez"]},{nombre:"Puesto Esperanza",tag:"LE",color:"bg-sky-100 text-sky-950",funcionarios:["Yolanda Elizondo","Mariano Solís","Guillermo Pérez","Carlos Cordero","Alexander Alvarado"]}],Mi=Vi.map(r=>r.nombre),_d=Vi.map(({nombre:r,tag:o,color:s})=>({nombre:r,tag:o,color:s})),Ei=Vi.flatMap((r,o)=>r.funcionarios.map((s,u)=>{const m=o*10+u+1,f=s==="Pablo Sánchez",h=s==="Yolanda Elizondo",T=s==="Carlos Cordero",L=["Yeison Cortés","Jetzelly Villalobos","Guillermo Pérez"].includes(s),A=s==="Fabricio Carbonell"?"De vacaciones":s==="Guillermo Pérez"?"Incapacitado":"Activo";return{id:`f${m}`,nombre:s,cedula:`1-0000-${String(m).padStart(4,"0")}`,email:f?"psforestal@yahoo.com":`${s.toLowerCase().replaceAll(" ",".")}@sinac.go.cr`,puesto:f?"Técnico en Recursos Naturales":h?"Asistente Administrativo":T?"Personal Apoyo ONG-Invest-Volunt":"Guardaparques",condicion:T?"ONG-Invest-Volunt":m%5===0?"Interino":"Propiedad",jornada:f||h?"Ordinaria":"Acumulativa",modalidad:f||h?"Horario administrativo L-V":m%7===0?"16x8":m%4===0?"12x6":"10x5",resolucion:L?"":T?"CONV-ONG-INV-VOL-2026":f||h?"":`RES-ACC-${String(m).padStart(3,"0")}-2026`,disponibilidad:!f&&!h&&!T&&m%3!==0,contrato:!f&&!h&&!T&&m%3!==0?`DISP-2026-${String(m).padStart(3,"0")}`:"",vencimiento:m%5===0?"2026-05-30":m%4===0?"2026-06-30":m%3!==0?"2026-12-31":"",policia:!f&&!h&&!T&&!L,brigada:m%4===2,ong:T,jefe:"Administración PNLQ",estado:A,ingreso:"2026-01-01",puestoOperativo:r.nombre,obs:`${r.nombre}${L?" · Dato pendiente: resolución acumulativa":""}`}})),Rd=[],Xp=[{id:"rep1",folio:"REP-001",funcionario:"Errol Salazar",fecha:"2026-05-24",tipoDia:"Día libre",motivo:"Incendio forestal",motivoDetalle:"Apoyo en control de conato sector Orosi.",magnitud:"diaEntero",horas:0,cuotas:[{id:"rep1-c1",fecha:"2026-05-31",magnitud:"medioDia",horas:0}],observaciones:"Llamado por la administración fuera de rol."},{id:"rep2",folio:"REP-002",funcionario:"Juan Pablo Granados",fecha:"2026-05-17",tipoDia:"Feriado",motivo:"Atención de denuncia",motivoDetalle:"Inspección por tala reportada en ingreso Quetzales.",magnitud:"horas",horas:4,cuotas:[],observaciones:""},{id:"rep3",folio:"REP-003",funcionario:"Mariano Solís",fecha:"2026-04-19",tipoDia:"Fuera de turno",motivo:"Actividad especial",motivoDetalle:"Atención de gira institucional.",magnitud:"medioDia",horas:0,cuotas:[{id:"rep3-c1",fecha:"2026-05-06",magnitud:"medioDia",horas:0}],observaciones:"Tiempo repuesto en coordinación con la administración."}],eT={1:{"Errol Salazar":"O-F T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6","Mayra Espinoza":"L3 L4 L5 O-FA LA LA LA LA LA LA LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2","Yeison Cortés":"O-F T5 T6 T7 T8 L1 L2 L3 L4 V1 V2 L1 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4","Kenneth Mena":"L3 L4 L5 L6 T1 O-FA T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 L1 L2 IN IN","Fabricio Carbonell":"O-F O-FA T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 L1","Karen Valle":"O-F T4 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1","Josué Brenes":"L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA O-FA","Laura Valverde":"O-F V7 V8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6","Diana Tencio":"O-F T4 L1 L2 T1 T2 T3 T4 T5 L1 L2 LA T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 LA L1 L2 T1 T2 T3 T4 T5 L1","Jetzelly Villalobos":"L1 L2 L3 L4 O-FA O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 T13 T14 L1 L2 L3 L4 L5 L6 L7 V1 V2 L1 LA","Yolanda Elizondo":"O-F V4 V5 V6 V7 V8 V9 V10 V11 V12 V13 V14 V15 V16 L1 L2 L3 L4 L5 L6 L7 L8 O-FA T1 T2 T3 T4 T5 T6 T7 T8","Mariano Solís":"O-F T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA V1 V2 V3 V4 LA LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4","Guillermo Pérez":"L4 L5 L6 O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 T13 T14 L1 L2 L3 L4 L5 L6 L7 T1 T2 T3 T4 T5 T6","Carlos Cordero":"O-F T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1","Alexander Alvarado":"O-F LI LI LI LI LI LI V13 V14 V15 V16 V17 V18 V19 V20 L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 V1 V2 V3 V4 V5 V6"},2:{"Errol Salazar":"LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 LA T1 T2 T3 T4 T5 T6 T7 T8","Mayra Espinoza":"T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11","Yeison Cortés":"T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 V1 V2 V3 V4 L1 L2 IN IN T1 T2 T3 T4 T5 T6 T7 T8 L1","Kenneth Mena":"IN IN IN IN IN IN IN IN IN IN IN IN L3 L4 L5 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 V11 V12 V13","Fabricio Carbonell":"T6 T7 T8 T9 T10 T11 L2 L3 T1 T2 T3 T4 T5 T6 T7 T8 T9 L4 L5 L1 L2 L3 L4 L5 T1 T2 T3 T4","Karen Valle":"L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1","Josué Brenes":"V1 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 L1 L2 V1 V2 V3 V4 L1 L2","Laura Valverde":"T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4","Diana Tencio":"L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 LA V1 V2 V3 L1 L2 T1 T2 T3 T4 T5 L1","Jetzelly Villalobos":"V1 V2 V3 V4 V5 L1 L2 L3 T1 T2 T3 T4 T5 T6 L1 L2 L3 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11","Yolanda Elizondo":"T9 T10 L1 L2 L3 L4 L5 V1 V2 V3 V4 V5 V6 L1 L2 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3","Mariano Solís":"L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 V11 V12 V13 V14 V15","Guillermo Pérez":"T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 L1 L2 L3 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Carlos Cordero":"T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1","Alexander Alvarado":"V7 V8 V9 V10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4"},3:{"Errol Salazar":"T9 T10 L1 L2 L3 L4 L5 LA LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7","Mayra Espinoza":"T12 T13 T14 T15 T16 T17 L1 L2 L3 L4 L5 L6 L7 L8 L9 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1","Yeison Cortés":"L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 T1","Kenneth Mena":"V14 V15 L1 L2 L3 IN IN IN IN IN IN IN V1 V2 V3 V4 L1 L2 IN IN IN IN IN IN IN IN IN IN IN IN IN","Fabricio Carbonell":"T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5","Karen Valle":"L2 T1 T2 T3 T4 T5 L1 L2 IN T2 T3 T4 T5 L1 L2 T1 LA LA T4 T5 L1 L2 T1 T2 T3 V1 T5 L1 L2 T1 T2","Josué Brenes":"LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5","Laura Valverde":"L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11","Diana Tencio":"L2 LA LA LA T4 T5 L1 L2 T1 T2 T3 LA T5 L1 L2 O-G O-G O-G O-G O-G O-G O-G O-G O-G O-G O-G O-G L1 L2 T1 T2","Jetzelly Villalobos":"T12 L1 L2 L3 L4 L5 L6 LA LA V1 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6","Yolanda Elizondo":"· · · · · · · · · · · · · · · · · IN IN IN IN IN IN IN IN IN IN T1 T2 T3 T4","Mariano Solís":"V16 L1 L2 L3 L4 L5 L6 L7 L8 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Guillermo Pérez":"T11 T12 L1 L2 L3 L4 L5 L6 V1 V2 V3 V4 V5 L1 L2 V1 V2 V3 V4 V5 V6 V7 L1 L2 L3 L4 IN IN IN IN IN","Carlos Cordero":"L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 V1 V2 L1 T1 T2 T3 T4 T5 T6 T7 T8","Alexander Alvarado":"T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 · · · · · · · · · · · · · · · · · · · ·"},4:{"Errol Salazar":"T8 T9 T10 L1 L2 L3 L4 L5 LA T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 LA T1 T2 T3 T4 T5 T6 T7 T8 T9","Mayra Espinoza":"T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA O-FA V1 V2 V3 L1 L2 T1 T2 T3 T4 T5 T6 T7 T8 L","Yeison Cortés":"L2 L3 L4 L5 L6 T2 L1 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 IN IN IN T3 T4 T5 T6 T7","Kenneth Mena":"IN V1 V2 V3 L1 IN IN IN IN IN IN IN IN IN IN IN IN IN IN V1 V2 L1 L L L L L L L L","Fabricio Carbonell":"T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 V1 V2 V3 V4 V5 V6 V7 V8","Karen Valle":"T3 O-F O-F L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4","Josué Brenes":"T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 V1 V2 V3 V4 L1 L2 LA T2 T3 T4 T5 T6 T7 T8 T9","Laura Valverde":"T12 T13 T14 L1 L2 L3 L4 L5 L6 L7 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 T1 T2 T3","Diana Tencio":"LA O-F O-F L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4","Jetzelly Villalobos":"T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3","Yolanda Elizondo":"T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2","Mariano Solís":"L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Guillermo Pérez":"IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN","Carlos Cordero":"T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5"},5:{"Errol Salazar":"T10 T11 T12 L1 L2 L3 L4 L5 L6 LA LA O-FA O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3","Mayra Espinoza":"L1 L2 L3 L4 LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8","Yeison Cortés":"O-FA L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 LA T4 T5 T6 T7 T8 L1 L2 L3","Kenneth Mena":"L L L L L L L L L L L L L L L L L L L L L L L V1 V2 V3 V4 V5 V6 L1 L2","Fabricio Carbonell":"V9 V10 V11 V12 V13 V14 V15 V16 V17 V18 V19 V20 L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 O-FA O-FA O-FA O-FA O-FA T1 T2 T3 T4","Juan Pablo Granados":"T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3","Karen Valle":"T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2","Josué Brenes":"T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 LA L1 L2 L3 L4 LA","Laura Valverde":"T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4","Diana Tencio":"T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2","Jetzelly Villalobos":"T4 T5 T6 L1 L2 L3 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 LA LA LA LA LA V1 V2","Pablo Sánchez":"T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 V1 V2 V3 V4 V5 L1 L2 T1 T2 T3 T4 T5 L1 L2","Yolanda Elizondo":"T3 T4 T5 T6 T7 T8 T9 LA L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3","Mariano Solís":"L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1","Guillermo Pérez":"IN IN IN IN IN IN IN IN IN IN IN IN IN IN T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5","Carlos Cordero":"T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 O-FA V1 V2 V3 V4 V5 V6 V7 V8"},6:{"Errol Salazar":"T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5","Mayra Espinoza":"T9 T10 T11 T12 T13 T14 L1 L2 L3 L4 L5 L6 L7 LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1","Yeison Cortés":"L4 LA T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2","Kenneth Mena":"L3 T1 T2 T3 T4 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2","Fabricio Carbonell":"T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 L1 T10 L2 L3 T1 L4 L5 T2 T3 T4 T5 T6 T7","Juan Pablo Granados":"L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3","Karen Valle":"T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 LA T5 L2 T1 T2 T3 T4 LA L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2","Josué Brenes":"LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 L1 L2 L3 T1 T2 L4 L5 L6 L1 · · · · · · · · ·","Laura Valverde":"T5 T6 T7 T8 L1 L2 L3 L4 O-FA O-FA O-FA O-FA LA V1 V2 V3 V4 V5 V6 V7 V8 L1 L2 L3 L4 V1 V2 V3 V4 L1","Diana Tencio":"T1 T2 T3 LA T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2","Jetzelly Villalobos":"V3 V4 L1 L2 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8","Pablo Sánchez":"T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 V1 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2","Yolanda Elizondo":"T4 T5 T6 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1","Mariano Solís":"L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 LA T2 T3 T4 T5 T6 T7 T8 T9 T10 L1","Guillermo Pérez":"T6 L1 L2 L3 LA V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Carlos Cordero":"V9 V10 V11 V12 V13 V14 V15 V16 V17 V18 V19 V20 L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 O-FA V1 V2 V3 V4 V5 V6 V7"},7:{"Errol Salazar":"T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1","Mayra Espinoza":"T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5","Yeison Cortés":"T3 T4 T5 L1 L2 T1 T2 T3 V1 V2 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5","Kenneth Mena":"T3 T4 T5 L1 L2 V1 V2 V3 V4 V5 L1 L2 LA T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5","Fabricio Carbonell":"T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8","Karen Valle":"T3 T4 LA T5 L2 T1 T2 T3 T4 T5 L1 L2 V1 V2 V3 V4 V5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5","Laura Valverde":"L2 LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 T13 L1 L2 L3 L4 L5 L6 L7 T1 T2 T3 T4 T5 T6 T7 T8 T9","Diana Tencio":"T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 V1 V2 V3 V4 V5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5","Jetzelly Villalobos":"T9 T10 L1 L2 L3 L4 L5 LA T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 LA T2 T3 T4 T5 T6","Pablo Sánchez":"T3 T4 T5 L1 L2 V1 V2 V3 V4 V5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5","Yolanda Elizondo":"T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2","Mariano Solís":"L2 L3 L4 L5 LA V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 L1 L2 L3 L4 L5 O-FA T2 T3 T4 T5 T6 T7 T8 T9 T10 T11","Guillermo Pérez":"L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8","Carlos Cordero":"V8 L1 L2 L3 L4 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 V11 V12 V13 V14 L1 L2 L3 L4 L5 L6 L7 T1 T2 T3 T4 T5"},8:{"Errol Salazar":"T2 T3 T4 T5 T6 T7 T8 L1 T9 T10 T11 T12 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 LA T1","Mayra Espinoza":"L6 LA V1 V2 V3 V4 V5 V6 V7 V8 L1 L2 L3 L4 LA LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 T5","Yeison Cortés":"L4 LA T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1","Kenneth Mena":"L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1","Fabricio Carbonell":"T9 T10 L1 L2 L3 L4 L5 O-FA O-FA V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T8","Monserrath Navarro":"· · · · · · · · · · · · · · · · · · · T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12","Karen Valle":"L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 T4 T5 L1 L2 T1","Laura Valverde":"T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Diana Tencio":"L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1","Jetzelly Villalobos":"T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 L1 L2 L3 T1","Pablo Sánchez":"L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1","Yolanda Elizondo":"T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4","Mariano Solís":"T12 L1 L2 L3 L4 L5 L6 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 V11 V12 V13 V14 L1 L2 L3 L4 L5 L6 L7 O-FA T1 T2","Guillermo Pérez":"T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T10","Carlos Cordero":"T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5"},9:{"Errol Salazar":"T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1","Mayra Espinoza":"T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5","Yeison Cortés":"T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3","Kenneth Mena":"T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3","Fabricio Carbonell":"T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7","Monserrath Navarro":"L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9","Karen Valle":"T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3","Laura Valverde":"L1 L2 L3 L4 L5 O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9","Diana Tencio":"T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3","Jetzelly Villalobos":"T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 LA","Pablo Sánchez":"T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3","Yolanda Elizondo":"L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4","Mariano Solís":"T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2","Guillermo Pérez":"T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7","Carlos Cordero":"L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2"},10:{"Errol Salazar":"T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6","Mayra Espinoza":"T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3","Yeison Cortés":"T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1","Fabricio Carbonell":"T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1","Monserrath Navarro":"T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2","Karen Valle":"T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1","Laura Valverde":"T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Diana Tencio":"T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1","Jetzelly Villalobos":"T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4","Pablo Sánchez":"T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1","Yolanda Elizondo":"L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2","Mariano Solís":"T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3","Guillermo Pérez":"T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5","Carlos Cordero":"L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9"},11:{"Errol Salazar":"T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6","Mayra Espinoza":"L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3","Yeison Cortés":"L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1","Kenneth Mena":"L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1","Fabricio Carbonell":"L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4","Monserrath Navarro":"T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5","Karen Valle":"L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1","Laura Valverde":"L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Diana Tencio":"L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1","Jetzelly Villalobos":"T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4","Pablo Sánchez":"L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1","Yolanda Elizondo":"L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4","Mariano Solís":"T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6","Guillermo Pérez":"T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8","Carlos Cordero":"T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 L4 T1 T2 T3 T4 T5"},12:{"Errol Salazar":"T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 O-F T5 T6 T7 T8 T9 T10","Mayra Espinoza":"L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 O-F T9 T10 T11 T12 L1 L2","Yeison Cortés":"T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 O-F L1 L2 V1 V2 V3 V4","Kenneth Mena":"T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 O-F L1 L2 T1 T2 T3 T4","Fabricio Carbonell":"L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 V1 V2 V3 V4 V5 V6 L1 L2 L3 O-FA T1 T2","Monserrath Navarro":"T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3","Karen Valle":"T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 O-F L1 L2 T1 T2 T3 T4","Laura Valverde":"T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 O-FA T1 T2 T3 T10","Diana Tencio":"T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 O-F L1 L2 V1 V2 V3 V4","Jetzelly Villalobos":"T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 O-F T12 L1 L2 L3 L4 L5","Pablo Sánchez":"T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 V1 V2 V3 V4 O-F L1 L2 V5 V6 V7 V8","Yolanda Elizondo":"L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 O-F T10 L1 L2 L3 L4 L5","Mariano Solís":"T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 O-F T1 T2 T3 T4 T5 T6","Guillermo Pérez":"T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 O-F T4 T5 T6 T7 T8 L1","Carlos Cordero":"T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 T1 T2 T3 T4"}},nT=[31,28,31,30,31,30,31,31,30,31,30,31],Is="2026-08-13-rol-bloque-anio-completo",$s=(()=>{var o;const r={};for(let s=1;s<=12;s+=1){const u=eT[s]||{};for(const m of Vi)for(const f of m.funcionarios){const h=((o=u[f])==null?void 0:o.split(" "))||[];for(let T=1;T<=nT[s-1];T+=1){const L=h[T-1];r[`2026-${s}-${m.nombre}-${f}-${T}`]=L&&L!=="·"?L:""}}}return r})(),tT=Object.fromEntries(Object.entries($s).filter(([r])=>{const o=r.match(/^2026-(\d+)-/),s=Number(o==null?void 0:o[1]);return s>=8&&s<=12}));function aT(r={}){return{...r,...tT}}const Jn=1,tr="current",rT="pnlq:state";let Ss=null,Xa=null,id=Promise.resolve();function qs(r){const o=id.then(r,r);return id=o.catch(()=>{}),o}async function fa(){return Ss||(typeof indexedDB>"u"?null:Xa||(Xa=(async()=>{try{const{default:r}=await Pn(async()=>{const{default:s}=await import("./import-wrapper-prod-A-7IBkLl.js");return{default:s}},[]),o=new r("pnlq");return o.version(1).stores({state:"id",auditoria:"++id, fecha, accion",pendientes:"++id, creadoEn, tipo"}),Ss=o,o}catch{return null}finally{Xa=null}})(),Xa))}async function iT(){const r=await fa();if(!r)return null;try{const o=await r.state.get(tr);return!o||o.schemaVersion!==Jn?null:{state:o.payload??null,revision:o.revision??0,savedAt:o.savedAt??null}}catch{return null}}async function oT(r,o=0){const s=await fa();return s?qs(async()=>{try{return await s.state.put({id:tr,schemaVersion:Jn,savedAt:new Date().toISOString(),revision:o,payload:r}),!0}catch{return!1}}):!1}async function sT(){const r=await fa();return r?qs(async()=>{try{return await r.state.delete(tr),!0}catch{return!1}}):!1}async function lT(){const r=await fa();if(!r)return{migrated:!1,source:null};try{if(await r.state.get(tr))return{migrated:!1,source:null};if(typeof window>"u"||!window.localStorage)return{migrated:!1,source:null};const s=window.localStorage.getItem(rT);if(!s)return{migrated:!1,source:null};const u=JSON.parse(s);return u!=null&&u.state?u.schemaVersion!==Jn?{migrated:!1,source:null}:(await r.state.put({id:tr,schemaVersion:Jn,savedAt:u.savedAt||new Date().toISOString(),revision:u.revision??0,payload:u.state,migradoDeLocalStorage:!0}),{migrated:!0,source:"localStorage"}):{migrated:!1,source:null}}catch{return{migrated:!1,source:null}}}async function cT(){const r=await fa();return r?qs(async()=>{try{return await Promise.all([r.state.clear(),r.pendientes.clear(),r.auditoria.clear()]),!0}catch{return!1}}):!1}const Hs=Object.freeze({puestosRequierenVisitantesDiario:["Puesto Orosi","Puesto Quetzales"],diaCorteViaticos:15,mesObjetivoViaticos:"siguiente",permitirConsultaDespuesCierre:!0,aplicarFeriadosEnPrimerDiaLaboral:!0,alertaInactivoConActividad:!0,alertaIncapacitadoConActividad:!0,alertaAcumulativaSinModalidad:!0,alertaReposicionPendiente:!0,horasJornada:8}),od=["siguiente","actual"];function Ni(r={}){return{...Hs,...r}}function Av(r,o=Mi){const s=[],u=Array.isArray(o)&&o.length?o:Mi;if(!Array.isArray(r.puestosRequierenVisitantesDiario))s.push("La lista de puestos con Visit. diario debe ser un arreglo.");else{const h=r.puestosRequierenVisitantesDiario.filter(T=>!u.includes(T));h.length&&s.push(`Puesto(s) no reconocido(s) en la lista de Visit. diaria: ${h.join(", ")}`)}const m=Number(r.diaCorteViaticos);(!Number.isInteger(m)||m<1||m>28)&&s.push("Día de corte de viáticos debe ser un entero entre 1 y 28."),od.includes(r.mesObjetivoViaticos)||s.push(`mesObjetivoViaticos debe ser uno de: ${od.join(", ")}.`);const f=Number(r.horasJornada);return(!Number.isFinite(f)||f<1||f>24)&&s.push("Horas por jornada debe ser un número entre 1 y 24."),s}const yn=8,bs=["Día libre","Fuera de turno","Feriado","Vacaciones interrumpidas","Otro"],Vs=["Emergencia","Incendio forestal","Atención de denuncia","Actividad especial","Operativo de control","Otro"],Dd=["diaEntero","medioDia","horas"];function ir(r){return Math.round((Number(r)||0)*100)/100}function Id(r,o,s=yn){return r==="diaEntero"?s:r==="medioDia"?s/2:Number(o)||0}function Ws(r){return Array.isArray(r==null?void 0:r.cuotas)?r.cuotas:(r==null?void 0:r.estado)==="Repuesto"?[{id:`i-${r.id||"x"}`,fecha:r.fechaReposicion||r.fecha,magnitud:r.magnitud,horas:r.horas||0}]:[]}function uT(r,o=yn){return ir(Id(r==null?void 0:r.magnitud,r==null?void 0:r.horas,o))}function Od(r,o=yn){return ir(Ws(r).reduce((s,u)=>s+Id(u.magnitud,u.horas,o),0))}function or(r,o=yn){return ir(Math.max(0,uT(r,o)-Od(r,o)))}function Fd(r,o=yn){return Od(r,o)<=0?"Pendiente":or(r,o)<=0?"Repuesto":"Parcial"}function dT(r){const o=String(r||"").match(/(\d+)/);return o?Number(o[1]):null}function mT(r=[]){const o=r.reduce((s,u)=>Math.max(s,dT(u.folio)||0),0);return`REP-${String(o+1).padStart(3,"0")}`}function fT(r=[],o=yn){const s={},u={};for(const m of r)if(m.funcionario&&m.fecha&&(s[`${m.funcionario}|${m.fecha}`]={...m,estadoCalc:Fd(m,o),saldo:or(m,o)}),m.funcionario)for(const f of Ws(m))f.fecha&&(u[`${m.funcionario}|${f.fecha}`]={...m,cuota:f});return{trabajadas:s,reposiciones:u}}function pT(r=[],o=yn){let s=0,u=0,m=0,f=0;for(const h of r){const T=Fd(h,o);f+=or(h,o),T==="Repuesto"?m+=1:(s+=1,T==="Parcial"&&(u+=1))}return{total:r.length,pendientes:s,parciales:u,repuestos:m,saldoHoras:ir(f)}}function TT(r=[]){return[...r].sort((o,s)=>String(s.fecha||"").localeCompare(String(o.fecha||"")))}function LT(r=[],o,s=yn){return ir(r.filter(u=>u.funcionario===o).reduce((u,m)=>u+or(m,s),0))}function vT(r=[],o,s=yn){return r.filter(u=>u.funcionario===o&&or(u,s)>0).sort((u,m)=>String(u.fecha||"").localeCompare(String(m.fecha||"")))}function hT(r){return r==="L"?"Día libre":r==="V"?"Vacaciones interrumpidas":"Fuera de turno"}function gT({reposiciones:r=[],funcionario:o,fecha:s,categoria:u,motivo:m="Actividad especial",detalle:f=""}){return{id:`rep${Date.now()}`,folio:mT(r),funcionario:o,fecha:s,tipoDia:hT(u),motivo:m,motivoDetalle:f,magnitud:"diaEntero",horas:0,cuotas:[],observaciones:""}}function PT(r=[],o,s,u=yn){const m=vT(r,o,u)[0];return m?r.map(f=>f.id===m.id?{...f,cuotas:[...Ws(f),s]}:f):r}function yT(r=[],o=yn){const s=new Map;for(const m of r){const f=m.funcionario||"—";s.has(f)||s.set(f,[]),s.get(f).push(m)}const u=[];for(const[m,f]of s.entries())u.push({funcionario:m,registros:TT(f),...pT(f,o)});return u.sort((m,f)=>f.saldoHoras-m.saldoHoras||f.total-m.total||m.funcionario.localeCompare(f.funcionario)),u}const sd=["Activo","Incapacitado","De vacaciones","Inactivo"],MT=1e3,ET=2e4,NT=2e4,CT=3e5,xT=200,ST=new Map(Ei.map(r=>[r.id,r]));function Xn(r){return!!r&&typeof r=="object"&&!Array.isArray(r)}function bT(r){return r.replace(/<[^>]*>/g,"")}function jn(r,o,s){return typeof r!="string"?s:bT(r).trim().slice(0,o)}function As(r,o,s,u){if(typeof r!="string")return u;const m=r.trim().slice(0,o);return s.test(m)?m:u}function VT(r,o){return typeof r=="boolean"?r:o}function zd(r,o,{min:s=0,max:u=1e4}={}){const m=Number(r);return Number.isFinite(m)?Math.min(u,Math.max(s,m)):o}function ar(r,o){if(typeof r!="string")return o;const s=r.trim().match(/^(\d{4})-(\d{2})-(\d{2})$/);if(!s)return o;const u=Number(s[1]);if(u<2e3||u>2100)return o;const m=Number(s[2]),f=Number(s[3]);return m<1||m>12||f<1||f>31?o:s[0]}function AT(r){if(!Xn(r))return r;const o=typeof r.id=="string"?ST.get(r.id):void 0,s={...r};"id"in s&&(s.id=As(s.id,20,/^[A-Za-z0-9-]+$/,"")),"nombre"in s&&(s.nombre=jn(s.nombre,120,(o==null?void 0:o.nombre)??"")),"cedula"in s&&(s.cedula=As(s.cedula,20,/^[0-9-]+$/,(o==null?void 0:o.cedula)??"")),"email"in s&&(s.email=As(s.email,120,/^[^\s@]+@[^\s@]+\.[^\s@]+$/,(o==null?void 0:o.email)??""));for(const u of["puesto","puestoOperativo","condicion","jornada","modalidad"])u in s&&(s[u]=jn(s[u],80,(o==null?void 0:o[u])??""));if("obs"in s&&(s.obs=jn(s.obs,500,(o==null?void 0:o.obs)??"")),"estado"in s){const u=o&&sd.includes(o.estado)?o.estado:"Activo";s.estado=sd.includes(s.estado)?s.estado:u}for(const u of["disponibilidad","policia","brigada","ong"])u in s&&(s[u]=VT(s[u],(o==null?void 0:o[u])??!1));return"jefe"in s&&(s.jefe=typeof s.jefe=="string"?s.jefe:(o==null?void 0:o.jefe)??""),s}function wT(r){if(!Xn(r))return null;const o={...r};"id"in o&&(o.id=jn(o.id,40,""));for(const[u,m]of Object.entries(o))u==="id"||u==="inicio"||u==="fin"||typeof m=="string"&&(o[u]=jn(m,200,""));if(typeof o.inicio!="string")return null;const s=ar(o.inicio,"");return s?(o.inicio=s,"fin"in o&&(o.fin=ar(o.fin,s)),o):null}function kT(r){if(!Xn(r))return null;const o={...r};return"id"in o&&(o.id=jn(o.id,40,"")),"fecha"in o&&(o.fecha=ar(o.fecha,"")),"magnitud"in o&&(o.magnitud=Dd.includes(o.magnitud)?o.magnitud:"diaEntero"),"horas"in o&&(o.horas=zd(o.horas,0,{min:0,max:24})),o}function jT(r){if(!Xn(r))return null;const o={...r};if(typeof o.funcionario!="string"||!o.funcionario.trim()||(o.funcionario=jn(o.funcionario,120,""),typeof o.fecha!="string"))return null;const s=ar(o.fecha,"");return s?(o.fecha=s,"id"in o&&(o.id=jn(o.id,40,"")),"folio"in o&&(o.folio=jn(o.folio,20,"")),"tipoDia"in o&&(o.tipoDia=bs.includes(o.tipoDia)?o.tipoDia:bs[bs.length-1]),"motivo"in o&&(o.motivo=Vs.includes(o.motivo)?o.motivo:Vs[Vs.length-1]),"motivoDetalle"in o&&(o.motivoDetalle=jn(o.motivoDetalle,300,"")),"observaciones"in o&&(o.observaciones=jn(o.observaciones,300,"")),"magnitud"in o&&(o.magnitud=Dd.includes(o.magnitud)?o.magnitud:"diaEntero"),"horas"in o&&(o.horas=zd(o.horas,0,{min:0,max:24})),"fechaReposicion"in o&&(o.fechaReposicion=ar(o.fechaReposicion,"")),Array.isArray(o.cuotas)&&(o.cuotas=o.cuotas.map(kT).filter(Boolean).slice(0,500)),o):null}function _T(r){const o={};let s=0;for(const[u,m]of Object.entries(r)){if(s>=CT)break;typeof u!="string"||u.length===0||u.length>xT||(o[u]=typeof m=="string"&&m.length<=10?m:"",s+=1)}return o}function RT(r){try{if(!Xn(r))return r;const o={...r};if(Array.isArray(o.personas)&&(o.personas=o.personas.filter(Xn).map(s=>{try{return AT(s)}catch{return s}}).slice(0,MT)),Array.isArray(o.actividadesPlan)&&(o.actividadesPlan=o.actividadesPlan.filter(Xn).map(s=>{try{return wT(s)}catch{return s}}).filter(Boolean).slice(0,ET)),Array.isArray(o.reposiciones)&&(o.reposiciones=o.reposiciones.map(s=>{try{return jT(s)}catch{return null}}).filter(Boolean).slice(0,NT)),Xn(o.roleData))try{o.roleData=_T(o.roleData)}catch{}if("reglas"in o)try{o.reglas=Ni(Xn(o.reglas)?o.reglas:{})}catch{}return o}catch{return r}}const Ai="pnlq:state",Zs="pnlq:lastSavedAt",DT="pnlq:backup:v";function Ft(){try{if(typeof window>"u"||!window.localStorage)return null;const r="__pnlq_probe__";return window.localStorage.setItem(r,"1"),window.localStorage.removeItem(r),window.localStorage}catch{return null}}let Nt=null;function IT(){const r=Ft();if(!r)return 0;try{const o=r.getItem(Ai);if(!o)return 0;const s=JSON.parse(o);return typeof(s==null?void 0:s.revision)=="number"?s.revision:0}catch{return 0}}function Xs(){return Nt===null&&(Nt=IT()),Nt}function ld(r){Xs(),typeof r=="number"&&r>Nt&&(Nt=r)}function OT(){return Xs(),Nt+=1,Nt}function Os(){const r=Qd();return r?r.state:null}function Qd(){const r=Ft();if(!r)return null;const o=r.getItem(Ai);if(!o)return null;try{const s=JSON.parse(o);if(!s||typeof s!="object")return null;if(s.schemaVersion!==Jn){const u=`${DT}${s.schemaVersion??"unknown"}-${Date.now()}`;try{r.setItem(u,o)}catch{}return null}return Xs(),{state:s.state??null,revision:typeof s.revision=="number"?s.revision:0,savedAt:s.savedAt??null}}catch{return null}}function FT(r,o){if(!r&&!o)return null;if(!r)return{...o,source:"indexeddb"};if(!o)return{...r,source:"localStorage"};const s=r.revision??0,u=o.revision??0;if(s!==u)return s>u?{...r,source:"localStorage"}:{...o,source:"indexeddb"};const m=r.savedAt?Date.parse(r.savedAt):NaN,f=o.savedAt?Date.parse(o.savedAt):NaN;return!Number.isNaN(m)&&!Number.isNaN(f)&&m!==f?m>f?{...r,source:"localStorage"}:{...o,source:"indexeddb"}:{...r,source:"localStorage"}}async function zT(){const r=await lT(),o=await iT(),s=Qd(),u=FT(s,o);return u?(ld((s==null?void 0:s.revision)??0),ld((o==null?void 0:o.revision)??0),{state:u.state,source:u.source,migrated:r.migrated}):{state:null,source:null,migrated:r.migrated}}async function QT(r){const o=OT(),s=new Date().toISOString(),u=Ft();let m=!1;if(u)try{const h=JSON.stringify({schemaVersion:Jn,savedAt:s,revision:o,state:r});u.setItem(Ai,h),u.setItem(Zs,s),m=!0}catch{m=!1}const f=await oT(r,o);return{ok:m||f,ls:m,idb:f,revision:o}}async function JT(){const r=Ft();let o=!1;if(r)try{r.removeItem(Ai),r.removeItem(Zs),o=!0}catch{}const s=await sT().catch(()=>!1),u=await cT().catch(()=>!1),m=s||u;return o&&m&&(Nt=null),{ok:o&&m,ls:o,idb:m}}function BT(){const r=Ft();if(!r)return null;try{return r.getItem(Zs)}catch{return null}}function YT(r){return{schemaVersion:Jn,appName:"PNLQ — Gestión de Jornadas",unidad:"PNLQ-BTMM",areaConservacion:"ACC",exportadoEn:new Date().toISOString(),state:r}}function wv(r){try{const o=JSON.parse(r);return!o||typeof o!="object"?{ok:!1,reason:"JSON inválido"}:o.schemaVersion!==Jn?{ok:!1,reason:`Versión de esquema incompatible: encontrada v${o.schemaVersion??"?"} esperada v${Jn}`}:!o.state||typeof o.state!="object"?{ok:!1,reason:"Snapshot sin estado"}:{ok:!0,state:RT(o.state),exportadoEn:o.exportadoEn}}catch(o){return{ok:!1,reason:`JSON malformado: ${o.message}`}}}async function UT(){const r=!!Ft();let o=!1;if(typeof indexedDB<"u")try{o=!!await fa()}catch{o=!1}return o?{kind:"indexeddb",hasIDB:o,hasLS:r}:r?{kind:"localStorage",hasIDB:!1,hasLS:!0}:{kind:"none",hasIDB:!1,hasLS:!1}}function GT(){const r=typeof indexedDB<"u",o=!!Ft();return r?{kind:"indexeddb",hasIDB:r,hasLS:o,verificado:!1}:o?{kind:"localStorage",hasIDB:!1,hasLS:!0,verificado:!0}:{kind:"none",hasIDB:!1,hasLS:!1,verificado:!0}}function Jd(r,o){return new Date(r,o+1,0).getDate()}function kv(r,o,s){const u=r*12+o+s;return{year:Math.floor(u/12),month:(u%12+12)%12}}function Qn(r){return String(r).padStart(2,"0")}function el(r=new Date){return`${r.getFullYear()}-${Qn(r.getMonth()+1)}-${Qn(r.getDate())}`}function KT(r=new Date){return`${el(r)}_${Qn(r.getHours())}-${Qn(r.getMinutes())}-${Qn(r.getSeconds())}`}function $T(r,o,s){return`${r}-${Qn(o+1)}-${Qn(s)}`}function et(r){if(!r)return"—";const o=r.split("-");return`${o[2]}/${o[1]}/${o[0]}`}function qT(r,o=new Date(2026,4,19)){return r?Math.round((new Date(r+"T00:00:00")-o)/864e5):null}function HT(r,o,s=null){for(let u=1;u<=Jd(r,o);u++){const m=new Date(r,o,u).getDay();if(m>=1&&m<=5){if(!s)return u;const f=$T(r,o,u);if(!s.has(f))return u}}return 1}const cd=200,nl=Object.freeze({ALTA:"alta",EDICION:"edicion",BAJA:"baja",RESTAURACION:"restauracion",IMPORTACION:"importacion"}),WT=new Set(Object.values(nl)),ZT=new Set(["id"]);let ud=0;function XT(){return ud+=1,`h${Date.now()}-${ud}`}function dd(r){return r??""}function e1(r,o){const s=r&&typeof r=="object"?r:{},u=o&&typeof o=="object"?o:{},m=new Set([...Object.keys(s),...Object.keys(u)]),f=[];for(const h of m){if(ZT.has(h))continue;const T=dd(s[h]),L=dd(u[h]);T!==L&&f.push({campo:h,antes:T,despues:L})}return f.sort((h,T)=>h.campo.localeCompare(T.campo))}function n1(r){return{nombre:String((r==null?void 0:r.nombre)??"").trim(),cedula:String((r==null?void 0:r.cedula)??"").trim()}}function t1({tipo:r,funcionario:o,cambios:s=[],detalle:u=null,fecha:m}={}){return!WT.has(r)||r===nl.EDICION&&s.length===0?null:{id:XT(),fecha:m||new Date().toISOString(),tipo:r,funcionario:n1(o),cambios:s,...u?{detalle:u}:{}}}function jv(r,o,s){return t1({tipo:nl.EDICION,funcionario:o,cambios:e1(r,o),fecha:s})}function a1(r,o,s=cd){const u=Array.isArray(r)?r:[];if(!o)return u;const m=Number.isInteger(s)&&s>0?s:cd;return[o,...u].slice(0,m)}const Bd=C.createContext(null),Fs=new Date,r1=el(Fs),zs="limpiezaEnzoYSetDic2026",Qs="actividadesEjemploJul2026",i1="2026-07-14",Ci="rolesFuenteJulAgo2026",Et={view:"dia",personas:Ei,month:Fs.getMonth(),year:Fs.getFullYear(),compact:!1,roleData:$s,actividadesPlan:Rd,reposiciones:Xp,diaVista:r1,historial:[],puestos:_d,reglas:{...Hs},migraciones:{[zs]:!0,[Qs]:!0,[Ci]:Is}};function Js(r){return r==="dashboard"?"dia":r}function Yd(r){const o=(r==null?void 0:r.migraciones)||{},s=!!o[zs],u=(Array.isArray(r==null?void 0:r.personas)?r.personas:[]).filter(Boolean),m=s?u:u.filter(S=>S.nombre!=="Enzo Martini"),f=new Map(m.map(S=>[S.nombre,S])),h=new Set(Ei.map(S=>S.nombre)),T=(r==null?void 0:r.roleData)||{},L=s?T:Object.fromEntries(Object.entries(T).filter(([S])=>!/^2026-(?:9|10|11|12)-/.test(S)&&!S.includes("-Enzo Martini-"))),A=[...Ei.map(S=>({...S,...f.get(S.nombre)||{}})),...m.filter(S=>S.nombre&&!h.has(S.nombre))];let E=Array.isArray(r==null?void 0:r.actividadesPlan)?r.actividadesPlan.filter(S=>S&&typeof S=="object"):Et.actividadesPlan;if(!o[Qs]&&Array.isArray(r==null?void 0:r.actividadesPlan)){const S=new Set(E.map(z=>z.id)),w=Rd.filter(z=>z.inicio>=i1&&!S.has(z.id));w.length&&(E=[...E,...w])}const N=Array.isArray(r==null?void 0:r.reposiciones)?r.reposiciones.filter(S=>S&&typeof S=="object"&&S.funcionario&&S.fecha):Et.reposiciones;return{...Et,...r,view:Js((r==null?void 0:r.view)??Et.view),personas:A,actividadesPlan:E,reposiciones:N,historial:Array.isArray(r==null?void 0:r.historial)?r.historial:[],puestos:Array.isArray(r==null?void 0:r.puestos)&&r.puestos.length?r.puestos.filter(S=>S&&typeof S=="object"&&S.nombre):_d,roleData:{...$s,...L},reglas:Ni(r==null?void 0:r.reglas),migraciones:{...o,[zs]:!0,[Qs]:!0}}}function o1(){const r=Os();return r?Yd(r):Et}function zn(r,o){return typeof r=="function"?r(o):r}function s1(r,o){var s,u,m;switch(o.type){case"SET_VIEW":return{...r,view:Js(o.payload)};case"SET_MONTH":return{...r,month:zn(o.payload,r.month)};case"SET_YEAR":return{...r,year:zn(o.payload,r.year)};case"SET_PERIODO":return{...r,month:o.month,year:o.year};case"SET_COMPACT":return{...r,compact:zn(o.payload,r.compact)};case"SET_DIA_VISTA":return{...r,diaVista:zn(o.payload,r.diaVista)};case"SET_PERSONAS":return{...r,personas:zn(o.payload,r.personas)};case"SET_ACTIVIDADES_PLAN":return{...r,actividadesPlan:zn(o.payload,r.actividadesPlan)};case"SET_REPOSICIONES":return{...r,reposiciones:zn(o.payload,r.reposiciones)};case"SET_ROLE_DATA":return{...r,roleData:zn(o.payload,r.roleData)};case"SET_PUESTOS":return{...r,puestos:zn(o.payload,r.puestos)};case"REGISTRAR_CAMBIO":return{...r,historial:a1(r.historial,o.payload)};case"SYNC_ROLES_FUENTE":return((s=r.migraciones)==null?void 0:s[Ci])===o.version?r:{...r,roleData:aT(r.roleData),migraciones:{...r.migraciones||{},[Ci]:o.version}};case"SET_REGLAS":{const f=zn(o.payload,r.reglas);return{...r,reglas:Ni(f)}}case"REPLACE_STATE":return{...Et,...o.payload,view:Js(((u=o.payload)==null?void 0:u.view)??Et.view),reglas:Ni((m=o.payload)==null?void 0:m.reglas)};default:return r}}const l1=new Set(["view","compact","diaVista","month","year"]);function gi(r){const o={};for(const s of Object.keys(r))l1.has(s)||(o[s]=r[s]);return o}const c1=500;function u1({children:r}){const[o,s]=C.useReducer(s1,void 0,o1),[u,m]=C.useState(()=>BT()),[f,h]=C.useState(0),[T,L]=C.useState(()=>GT()),[A,E]=C.useState(!1),[N,S]=C.useState(!1),[w,z]=C.useState(null),B=C.useRef(null),D=C.useRef(!0),b=C.useRef(!1),G=C.useRef(!1),le=C.useRef(!1);C.useEffect(()=>{let Q=!1;return UT().then(H=>{Q||L(H)}),()=>{Q=!0}},[]);const W=C.useRef(o);C.useEffect(()=>{W.current=o});const te=C.useRef(JSON.stringify(gi(o)));C.useEffect(()=>{let Q=!1;return(async()=>{try{const{state:H,source:ue,migrated:me}=await zT();if(Q)return;if(me&&E(!0),H&&ue==="indexeddb"){const Te=Yd(H),Le=JSON.stringify(gi(Te)),Ne=te.current;if(JSON.stringify(gi(W.current))!==Ne)return;Ne!==Le&&s({type:"REPLACE_STATE",payload:Te})}}catch(H){console.error("No fue posible completar la hidratación local",H)}finally{Q||(b.current=!0,S(!0))}})(),()=>{Q=!0}},[]),C.useEffect(()=>{var H;!N||((H=W.current.migraciones)==null?void 0:H[Ci])===Is||s({type:"SYNC_ROLES_FUENTE",version:Is})},[N]);const de=C.useRef(null);de.current=async function(){if(G.current){le.current=!0;return}G.current=!0,le.current=!1;try{const H=await QT(gi(W.current));z(H),H.ls&&m(new Date().toISOString()),H.ok&&h(0)}finally{G.current=!1,le.current&&(le.current=!1,de.current())}},C.useEffect(()=>{if(D.current){D.current=!1;return}return h(Q=>Q+1),B.current&&window.clearTimeout(B.current),B.current=window.setTimeout(()=>{B.current=null,de.current()},c1),()=>{B.current&&window.clearTimeout(B.current)}},[o]),C.useEffect(()=>{const Q=()=>{B.current&&(window.clearTimeout(B.current),B.current=null,de.current())},H=()=>{document.visibilityState==="hidden"&&Q()};return window.addEventListener("pagehide",Q),document.addEventListener("visibilitychange",H),()=>{window.removeEventListener("pagehide",Q),document.removeEventListener("visibilitychange",H)}},[]);const se=C.useCallback(Q=>s({type:"SET_VIEW",payload:Q}),[]),ve=C.useCallback(Q=>s({type:"SET_MONTH",payload:Q}),[]),Ee=C.useCallback(Q=>s({type:"SET_YEAR",payload:Q}),[]),ge=C.useCallback(Q=>s({type:"SET_COMPACT",payload:Q}),[]),je=C.useCallback(Q=>s({type:"SET_DIA_VISTA",payload:Q}),[]),Ce=C.useCallback(Q=>s({type:"SET_PERSONAS",payload:Q}),[]),he=C.useCallback(Q=>s({type:"SET_ACTIVIDADES_PLAN",payload:Q}),[]),Se=C.useCallback(Q=>s({type:"SET_REPOSICIONES",payload:Q}),[]),ie=C.useCallback(Q=>s({type:"SET_ROLE_DATA",payload:Q}),[]),fe=C.useCallback(Q=>s({type:"SET_PUESTOS",payload:Q}),[]),ce=C.useCallback(Q=>s({type:"REGISTRAR_CAMBIO",payload:Q}),[]),O=C.useCallback(Q=>s({type:"SET_REGLAS",payload:Q}),[]),Z=C.useCallback(Q=>{s({type:"REPLACE_STATE",payload:Q})},[]),Y=C.useCallback(()=>{s({type:"SET_REGLAS",payload:{...Hs}})},[]),P=C.useCallback(async()=>{B.current&&(window.clearTimeout(B.current),B.current=null);const Q=await JT();return s({type:"REPLACE_STATE",payload:Et}),m(null),z(null),h(0),Q},[]),j=C.useMemo(()=>({...o,setView:se,setMonth:ve,setYear:Ee,setCompact:ge,setDiaVista:je,setPersonas:Ce,setActividadesPlan:he,setReposiciones:Se,setRoleData:ie,setPuestos:fe,registrarCambio:ce,setReglas:O,resetReglas:Y,replaceState:Z,resetToSeed:P,lastSavedAt:u,pendingChanges:f,lastSaveResult:w,durableSaveFailed:w?!w.idb:!1,schemaVersion:Jn,storageBackend:T,migracionLs:A,dispatch:s}),[o,se,ve,Ee,ge,je,Ce,he,Se,ie,fe,ce,O,Y,Z,P,u,f,w,T,A]);return c.jsx(Bd.Provider,{value:j,children:r})}function Ot(){const r=C.useContext(Bd);if(!r)throw new Error("useApp must be used within an <AppProvider>");return r}const d1={app:{name:"PNLQ — Gestión de Jornadas Laborales",short:"PNLQ",estado:"Activo",reglaDura:"Regla dura: el sistema registra y alerta; no genera pago, reposición, suspensión o derecho automático.",sinacCR:"SINAC · Costa Rica",accNombre:"Área de Conservación Central",bloqueLinea1:"Bloque Tapantí",bloqueLinea2:"Macizo de la Muerte",bloqueSub:"Gestión de jornadas laborales",perfilNombre:"P. Sánchez N.",perfilCargo:"Guardaparques · ACC",titulo:"Gestión de jornadas laborales"},sidebar:{grupoPrincipal:"Principal",grupoJornadas:"Jornadas",grupoControl:"Control"},view:{dia:"Día",funcionarios:"Funcionarios",roles:"Roles",planificacion:"Planificación general",planFuncionario:"Planificación/Funcionario",adelantos:"Adelanto de viáticos",reposicion:"Reposición de tiempo",disponibilidad:"Disponibilidad",alertas:"Alertas",datos:"Datos · respaldo",configuracion:"Configuración"},topbar:{periodo:"Periodo",mesAnterior:"Mes anterior",mesSiguiente:"Mes siguiente",mes:"Mes",anio:"Año",vistaCompacta:"Vista compacta",vistaAmplia:"Vista amplia",cargando:"Cargando vista…",hoy:"Hoy",tema:"Tema y contraste",previewMobile:"Abrir simulador temporal de vista móvil",previewMobileCorto:"Vista móvil",previewTitle:"Vista móvil temporal",previewDesc:"Simulación de un teléfono genérico de {ancho} × {alto} px. Puede usar la aplicación dentro del marco.",previewFrameTitle:"Aplicación en tamaño de teléfono móvil",previewOrientation:"Orientación del teléfono simulado",previewVertical:"Vertical",previewHorizontal:"Horizontal"},bottomNav:{inicio:"Inicio",personal:"Personal",plan:"Plan",alertas:"Alertas",dia:"Día",roles:"Roles",planFunc:"Plan/Func.",viaticos:"Viáticos",reposicion:"Reposición",disponib:"Disponib.",datos:"Datos",config:"Config.",mas:"Más",masTitulo:"Más módulos",masSub:"Herramientas y módulos secundarios",masAria:"Más opciones",navAria:"Navegación principal",alertasAria:"{n} alertas pendientes"},theme:{light:"Claro",dark:"Oscuro",hc:"Alto contraste",cambiarOscuro:"Cambiar a oscuro",cambiarHC:"Cambiar a alto contraste",cambiarClaro:"Cambiar a claro"},cobertura:{titulo:"Cobertura programada",programados:"Programados en actividades",enTurnoRol:"En turno según rol",atencionVisit:"Atención rutinaria visitantes",alertaSinAtencion:"ALERTA: debe haber al menos una persona asignada.",asignadosVisit:"Asignados a atención rutinaria de visitantes",enTurnoSegunRol:"Funcionarios en turno según rol",sinTurno:"No hay funcionarios en turno según rol para este puesto operativo y día.",programadosLugar:"Funcionarios programados en actividades con este lugar",sinProgramados:"No hay funcionarios programados en actividades con este puesto operativo como lugar para este día.",sinActividad:"Sin actividad programada para este día.",rolPrefix:"Rol: {rol} · {puesto}",agregarActividad:"Agregar actividad",editarActividad:"Editar actividad"},kpi:{coberturaCritica:"Cobertura crítica",coberturaCriticaSub:"días sin Visit. asignada",sinActividad:"Sin actividad",sinActividadSub:"en turno hoy sin planificar",porVencer:"Por vencer",porVencerSub:"disponibilidades ≤30 días",personalActivo:"Personal activo",personalActivoSub:"/ {total} total",reposicionPendiente:"Tiempo por reponer",reposicionPendienteSub:"funcionarios con tiempo pendiente",enTurno:"En turno",conActividad:"Con actividad",fueraDeTurno:"Fuera de turno",conViatico:"Con viático"},dia:{anterior:"Anterior",siguiente:"Siguiente",diaAnterior:"Día anterior",diaSiguiente:"Día siguiente",seleccionarFecha:"Seleccionar fecha",pistaSwipe:"Deslice ←/→ para cambiar día",porPuesto:"Por puesto operativo",resumenTitulo:"Resumen del día",resumenEnTurno:"En turno",resumenSinActividad:"Sin actividad",resumenAlertas:"Alertas",resumenPistaSinActividad:"Hay personas en turno sin actividad. Baje a la sección «En turno · sin actividad» para asignar.",ayudaAria:"Cómo usar la vista Día",th:{puesto:"Puesto",fuera:"Fuera",enTurno:"En turno",conActividad:"Con activ.",sinActividad:"Sin activ.",total:"Total"},actividadesTitulo:"Actividades planificadas ({n})",actividadesTituloCorto:"Actividades · {n}",filtroActividades:{mostrar:"Mostrar actividades",aria:"Filtrar actividades del día",general:"General",funcionario:"Funcionario",puesto:"Puesto",seleccionarFuncionario:"Funcionario",seleccionarPuesto:"Puesto operativo",resultados:"Mostrando {n} de {total} actividades"},nueva:"+ Nueva",nuevaCorta:"Nueva",sinActividades:"Sin actividades planificadas para este día",enTurnoConActTitulo:"En turno · con actividad ({n})",enTurnoConActVacio:"Ningún funcionario en turno tiene actividad programada",enTurnoSinActTitulo:"En turno · sin actividad ({n})",enTurnoSinActVacio:"Todos los funcionarios en turno tienen actividad asignada",asignar:"+ Asignar",fueraDeTurnoTitulo:"Fuera de turno ({n})",fueraDeTurnoVacio:"Todos los funcionarios activos están en turno",conViaticoTitulo:"Con viático este día ({n})",nFuncionarios:"{n} funcionario{plural}",viaticoBadge:"💵 Viático",conflictosBadge:"⚠ {n} conflicto{plural}",sinLugar:"Sin lugar"},help:{dia:{titulo:"Cómo usar la vista Día",lineas:["Arriba elige la fecha con las flechas o el calendario.","Las tres cifras grandes muestran quién está en turno, quién falta actividad y cuántas alertas hay.","Toque «Alertas» en la barra inferior o la cifra de alertas para ver los avisos.","Use «+ Nueva» o el botón redondo para registrar una actividad.","Los cambios se guardan solos en este teléfono (vea el mensaje «Guardado»)."]}},funcionarios:{titulo:"Funcionarios",agregar:"Agregar funcionario",agregarCorto:"Agregar",buscarPlaceholder:"Buscar por nombre, cédula, puesto u observación…",verFiltros:"Filtros y orden",filtroTodos:"Todos",filtroGuardas:"Guardaparques",filtroDisp:"Con disponibilidad",filtroAcum:"Acumulativa",filtroOng:"ONG-Invest-Volunt",filtroSinRes:"Sin resolución",vistaTabla:"Tabla",vistaTarjetas:"Tarjetas",vistaAria:"Vista",sinResultadosTitulo:"Sin resultados",sinResultadosDesc:"Ajuste la búsqueda o los filtros para encontrar funcionarios.",th:{funcionario:"Funcionario",cargo:"Cargo / puesto operativo",jornada:"Jornada",disponibilidad:"Disponibilidad",atributos:"Atributos",estado:"Estado",acciones:"Acciones"},sinPuesto:"Sin puesto operativo",sinResolucion:"🔵 Sin resolución",si:"Sí",no:"No",leyendaPolicia:"🛡️ Autoridad de policía",leyendaBrigada:"🔥 Brigada forestal",leyendaPendiente:"🔵 Dato operativo por completar",eliminado:"Se eliminó a {nombre}",restaurado:"Se restauró a {nombre}",creado:"Se agregó a {nombre}",guardado:"Se guardaron los cambios de {nombre}",ordenar:"Ordenar",filtrosAria:"Filtrar funcionarios",exportar:"Exportar CSV",exportarCorto:"CSV",exportarAria:"Exportar a CSV los funcionarios que se están viendo",exportado:"Se exportaron {n} funcionarios a CSV",exportadoVacio:"No hay funcionarios que exportar con este filtro",exportarError:"El navegador no permitió la descarga",importar:"Importar CSV",importarCorto:"Importar",importarAria:"Importar funcionarios desde un archivo CSV",importa:{titulo:"Revisar antes de importar",sub:"Nada se ha guardado todavía. Así quedaría la lista:",altas:"Se agregan",cambios:"Se actualizan",intactos:"No se tocan",omitidas:"Filas omitidas por no traer nombre ni cédula: {n}",vacias:"Filas en blanco ignoradas: {n}",duplicadas:"Identidades repetidas dentro del archivo: {n}. Manda la última fila de cada una.",faltantes:"Columnas que no venían en el archivo: {cols}. Esos datos se conservan como estaban.",desconocidas:"Columnas del archivo que se ignoran: {cols}",avisosTitulo:"Advertencias sobre los datos importados:",avisosNota:"No impiden importar; quedan registradas igual que al escribirlas a mano.",respaldo:"Antes de aplicar se descargará un respaldo completo. Si algo sale mal, se restaura desde «Datos · respaldo».",confirmar:"Crear respaldo e importar",sinIdentificar:"El archivo no trae ni «Nombre» ni «Cédula», así que no hay forma de saber a quién corresponde cada fila.",sinFilas:"El archivo no tiene ninguna fila de datos.",demasiadoGrande:"El archivo supera los {mb} MB y no se procesó.",errorLectura:"No se pudo leer el archivo.",hecho:"Importados: {altas} nuevos y {cambios} actualizados",respaldoFallo:"No se pudo descargar el respaldo, así que no se importó nada."},col:{nombre:"Nombre",cedula:"Cédula",email:"Correo",puesto:"Cargo institucional",puestoOperativo:"Puesto operativo",condicion:"Condición",jornada:"Jornada",modalidad:"Modalidad",resolucion:"Resolución",contrato:"Contrato de disponibilidad",vencimiento:"Vencimiento",ingreso:"Ingreso",disponibilidad:"Disponibilidad",policia:"Autoridad de policía",brigada:"Brigada forestal",ong:"ONG-Invest-Volunt",estado:"Estado",obs:"Observaciones"},atributoPolicia:"Policía",atributoBrigada:"Brigada",card:{observaciones:"Observaciones",cargo:"Cargo",jornada:"Jornada",disponibilidad:"Disponibilidad",atributos:"Atributos",venceCorto:"Vence {fecha}"}},modalFuncionario:{editar:"Editar funcionario",agregar:"Agregar funcionario",sec:{identificacion:"Identificación",puesto:"Puesto y condición",jornada:"Jornada y modalidad",contratacion:"Contratación y fechas",atributos:"Atributos"},revisar:{titulo:"Antes de guardar, revise:",nota:"Son advertencias, no errores: puede guardar igual y completar el dato después."},pasos:{navAria:"Pasos del formulario",indicador:"Paso {n} de {total}",irA:"Ir al paso {n}: {titulo}",uno:"Quién es",dos:"Dónde y cómo trabaja",tres:"Respaldo y atributos",soloNombre:"Solo el nombre es obligatorio: puede guardar desde cualquier paso y completar el resto después."},ayuda:{puesto:"«Cargo institucional» es el puesto nominal; «Puesto operativo» es el sitio donde trabaja, y de él depende la cobertura diaria de atención de visitantes. La condición ONG-Invest-Volunt es personal de apoyo externo con régimen especial: no requiere resolución de jornada acumulativa y puede tener convenio en lugar de contrato.",jornada:"Ordinaria es horario administrativo de lunes a viernes. Acumulativa trabaja por ciclos y requiere número de resolución, salvo en personal ONG-Invest-Volunt. La modalidad NxM indica N días de trabajo por M días libres: 10x5 son 10 días de turno seguidos de 5 libres. Al editar una fila en Roles, la herramienta renumera los consecutivos T y L respetando esta modalidad.",contratacion:"La resolución es el número que respalda la jornada acumulativa; si falta, el funcionario queda marcado como «Sin resolución» y solo se registra el dato pendiente. El contrato y su vencimiento corresponden a la disponibilidad: la herramienta avisa cuando faltan 60 días o menos, el día del vencimiento y cuando ya venció.",atributos:"Disponibilidad es el contrato administrativo que habilita a llamar al funcionario fuera de su horario regular. Policía indica autoridad de policía y Brigada, pertenencia a la brigada forestal. Recuerde la regla dura: la herramienta registra y alerta, no genera pagos, reposiciones ni derechos automáticos."},nombre:"Nombre",cedula:"Cédula",correo:"Correo",cargo:"Cargo institucional",puesto:"Puesto operativo",condicion:"Condición",estado:"Estado",jornada:"Jornada",modalidad:"Modalidad",resolucion:"Resolución",contrato:"Contrato",vencimiento:"Vencimiento",ingreso:"Ingreso",obs:"Observaciones",attr:{disponibilidad:"Disponibilidad",policia:"Autoridad policía",brigada:"Brigada",ong:"ONG-Invest-Volunt"}},modalActividad:{titulo:"Actividad",editar:"Editar actividad",agregar:"Agregar actividad",sub:"Registre actividad, periodo, lugar, funcionarios participantes y necesidad de adelanto de viático.",fechaInicio:"Fecha inicio",fechaFinal:"Fecha final",unDia:"Actividad de un solo día",requiereViatico:"Requiere tramitar adelanto de viático",lugar:"Lugar",placeholderTitulo:"O escriba otra actividad: patrullaje, inspección, reunión, mantenimiento...",placeholderLugar:"Escriba otro lugar: sector, sendero, oficina, comunidad...",placeholderObs:"Detalle operativo, coordinación, expediente, requerimientos, vehículo, equipo, etc.",otra:"Otra actividad",otro:"Otro",participantes:"Funcionarios participantes",seleccionados:"{n} seleccionados",avisoTraslape:"Funcionario con actividad ya planificada",agregarAunAsi:"Agregar de todos modos",modificarActividad:"Modificar actividad",obs:"Observaciones",guardarActividad:"Guardar actividad",diaLibre:"Día libre/vacaciones",saldoFavor:"Saldo a favor",saldoFavorMonto:"Saldo a favor: {saldo}",soloSaldo:"Solo con saldo a favor",libresAsignados:"Asignados en día libre/vacaciones",resolver:"Resolver"},asignacionLibre:{titulo:"Funcionario fuera de turno",sub:"{funcionario} figura como “{rol}” el {fecha}. ¿Cómo desea proceder?",modificarRol:"Modificar rol",modificarRolDesc:"Marcar ese día como turno (T) en el rol y agregarlo a la actividad.",reposicion:"Registrar reposición pendiente",reposicionDesc:"Deja el rol igual y registra el tiempo trabajado para reponérselo después.",reponer:"Reponer tiempo (saldo a favor: {saldo})",reponerDesc:"Usa este día libre para reponer su saldo pendiente. No se agrega a la actividad.",editarFecha:"Editar la fecha de la actividad",editarFechaDesc:"No lo agrega; vuelve al formulario para cambiar la fecha de la actividad."},roles:{titulo:"Distribución de roles",vistaMensualLineal:"Vista mensual lineal",filtros:"Filtros",verTodos:"Ver todos",limpiarFiltros:"Limpiar",todos:"Todos",filtrarPorPuesto:"Filtrar por puesto",filtrosFuncionario:"Filtrar por funcionario",resumenPuestosTodos:"Puestos y funcionarios: todos ({n})",resumenPuestosParcial:"Puestos y funcionarios: {n} de {total}",buscarFuncionario:"Buscar funcionario…",limpiarBusqueda:"Limpiar búsqueda",solo:"Solo",contraerPuesto:"Contraer lista de funcionarios",expandirPuesto:"Expandir lista de funcionarios",sinResultadosBusqueda:"Sin coincidencias con la búsqueda.",resumenFiltro:"{n} funcionarios visibles",desplazarDias:"Desplazar días",semanaAnterior:"Semana anterior",semanaSiguiente:"Semana siguiente",semana7:"7 días",centrarHoy:"Centrar hoy",irAFecha:"Ir a fecha",irAFechaLabel:"Buscar por fecha",todosLosPuestos:"Todos los puestos",sinFuncionariosFiltro:"No hay funcionarios visibles con el filtro actual.",leyenda:{turno:"T1 Turno",libre:"L1 Libre",vacaciones:"V1 Vacas",incapacidad:"I1 Incapaci",otro:"O1 Otro"},cantidadEnTurno:"EN TURNO",resumenGeneral:"Resumen · todos los puestos",resumenCorto:"Resumen",resumenEnTurno:"En turno",resumenLibres:"Libres",resumenVacaciones:"Vacaciones",resumenIncapacidad:"Incapacidad",resumenOtros:"Otros",editarTipoRol:"Tipo de rol desde 1er día laboral",aplicar:"Aplicar",aplicarPatronAbrir:"Aplicar…",titleConflicto:"Clic para resolver: rol vs actividad planificada",titleEditar:"Cambiar marca del día",titleSinEdicion:"Active edición del funcionario para modificar",initRing:"INICIO",multi:{activar:"Selección múltiple",seleccionados:"{n} día(s) seleccionado(s)",confirmarTitulo:"Aplicar código a varios días",confirmarDesc:"Se aplicará {cat} a {n} selección(es) y se renumerarán las filas afectadas.",nota:"Revise la cantidad antes de confirmar. Puede deshacer el último cambio mientras permanezca en esta vista.",deshacer:"Deshacer último cambio"},aplicarPatron:{titulo:"Aplicar patrón de rol",descripcion:"Genera el tipo de día (turno/libre) de {persona} según la modalidad, desde una fecha inicial hasta un último día. El rango puede abarcar varios meses.",modalidad:"Modalidad",desde:"A partir de",hasta:"Último día",hastaAyuda:"Se llenará hasta esta fecha, inclusive.",botonUltimoProgramado:"Desde el último día con rol programado",botonUltimoProgramadoAyuda:"Coloca «A partir de» el día siguiente al último día ya programado, para continuar sin sobrescribir.",sinProgramado:"Aún no hay días con rol programado para esta persona.",fase:"¿Cómo debe empezar la rotación?",faseReiniciar:"Reiniciar en T1",faseReiniciarAyuda:"La fecha «A partir de» se vuelve el nuevo inicio: ese día es T1 y la rotación avanza desde ahí. Sobrescribe lo que haya en el rango.",faseContinuar:"Continuar la rotación anterior",faseContinuarAyuda:"No reinicia: sigue la rotación del día anterior. Si venía en {codigoPrevio}, ese día continúa en {codigoSiguiente}.",faseContinuarSinAncla:"Para continuar, el día anterior a «A partir de» debe tener un turno o libre. Hoy no lo tiene; use «Reiniciar en T1».",faseAdministrativo:"El horario administrativo se llena por día de la semana (L–V en turno, S/D libres); no usa rotación T/L.",resumen:"Se llenarán {dias} día(s), del {desde} al {hasta}.",sobrescribe:"Se sobrescribirán {n} día(s) que ya tenían rol programado en el rango.",errorRango:"«A partir de» debe ser igual o anterior a «Último día».",errorMaxDias:"El rango es muy largo (máx. {max} días). Acórtelo e intente de nuevo.",errorSinFechas:"Elija la fecha inicial y el último día.",confirmar:"Aplicar patrón",cancelar:"Cancelar"}},menuCelda:{titulo:"Editar día {dia} · {persona}",sub:"Seleccione únicamente la categoría. El número consecutivo se recalcula automáticamente en toda la fila.",primerDia:"Primer día laboral del mes.",primerDiaSub:"La modalidad del funcionario define el reinicio de los consecutivos de turno y libre.",cat:{T:"Turno",L:"Libre",V:"Vacaciones",I:"Incapacidad",O:"Otro"},sub2:"Se mostrará como {cat}1, {cat}2...",limpiar:"Limpiar celda"},conflicto:{titulo1:"Resolver incoherencia · paso 1 de 2",titulo2:"Confirmar acción · paso 2 de 2",sub1:"Seleccione cuál registro corregir. La herramienta solo actualiza el dato visible: no genera pagos ni decisiones administrativas.",sub2Rol:"Se modificará el rol de este día y se recalcularán los consecutivos T/L/V/I/O de toda la fila respetando la modalidad.",sub2Act:"Se abrirá el listado de {n} actividad{plural} de este día para que pueda quitar al funcionario o ajustar la planificación.",detalle:"{persona} · día {dia}",detalleSub:"Rol {valor} (no en turno) con {n} actividad{plural} planificada{plural}.",cambiarRol:"Modificar rol del día",cambiarRolSub:"Cambiar la categoría de turno para este funcionario.",cambiarActividad:"Modificar actividad{plural}",cambiarActividadSub:"Ver, editar o quitar al funcionario de las actividades del día.",cambiarReposicion:"Registrar reposición pendiente",cambiarReposicionSub:"Deja el rol y la actividad igual; registra el tiempo trabajado para reponérselo después.",reponer:"Reponer tiempo (saldo a favor: {saldo})",reponerSub:"Usa este día para reponer el saldo pendiente del funcionario.",sub2Reposicion:"Se registrará el tiempo trabajado fuera de rol como reposición pendiente; no modifica el rol ni la actividad.",sub2Reponer:"Se aplicará este día al saldo pendiente del funcionario (reposición); no modifica el rol ni la actividad.",despuesReposicion:"queda un registro de reposición pendiente, enlazado por folio al día trabajado.",despuesReponer:"se descuenta del saldo a favor del funcionario.",resumen:"Resumen del impacto",antes:"Antes:",despues:"Después:",antesValor:"rol {valor} · {n} actividad{plural}.",despuesRol:"elegirá una nueva categoría (T/L/V/I/O) y se renumerará toda la fila.",despuesAct:"podrá quitar al funcionario o editar/eliminar la actividad.",notaNoEjecuta:"La herramienta solo registra; no genera pago, reposición ni derecho automático.",volver:"Volver",continuar:"Continuar"},actividadesDia:{titulo:"Actividades · {funcionario}",sub:"{fecha} · {n} actividad{plural} planificada{plural}",vacia:"Ya no hay actividades de {funcionario} en este día.",quitarDe:"Quitar a {nombre}",editar:"Editar actividad",eliminar:"Eliminar"},modificarRol:{titulo:"Modificar rol",sub:"{funcionario} · {fecha} · rol actual: {rol}",cat:{T:"Turno",L:"Libre",V:"Vacaciones",I:"Incapacidad",O:"Otro"},catSub:"Recalcula consecutivos de la fila",limpiar:"Limpiar rol del día"},asignarActividad:{titulo:"Asignar actividad",sub:"{funcionario} · {fecha}",crear:"Crear actividad nueva para este funcionario",agregar:"Agregar a actividad existente del mismo día",sinExistentes:"No hay actividades existentes ese día para otros funcionarios."},planificacion:{titulo:"Planificación general — {mes} {anio}",agregar:"+ Agregar actividad",vistaAgenda:"Agenda",vistaCuadricula:"Cuadrícula",vistaAria:"Modo de vista del calendario",agendaVacia:"Sin actividades",agregarEnDia:"Agregar actividad el día {dia}",verLeyenda:"Ver leyenda de colores",buscarPlaceholder:"Buscar actividad, lugar o persona",buscarAria:"Buscar en planificación",filtros:"Filtros",rangoAria:"Rango de días visible",rangoHoy:"Hoy",rangoProximos7:"Próximos 7 días",rangoActividades:"Con actividades",rangoConflictos:"Con conflictos",rangoSinAsignar:"Sin asignar",rangoMes:"Mes completo",irHoy:"Ir a Hoy",sinCoincidencias:"No hay días que coincidan con estos filtros.",editarActividad:"Editar actividad",filtrosTitulo:"Filtros de planificación",filtrosDesc:"Combina filtros para reducir la agenda.",filtroPersona:"Persona",filtroTodas:"Todas",filtroUbicacion:"Ubicación",filtroViatico:"Viático",viaticoTodos:"Todos",viaticoSi:"Con viático",viaticoNo:"Sin viático",limpiar:"Limpiar",verResultados:"Ver resultados",leyendaProgramada:"Actividad programada",leyendaViatico:"Requiere adelanto de viático",leyendaFinde:"Fin de semana",leyendaTurno:"👥 = en turno",sinFuncionarios:"Sin funcionarios",masFuncionarios:"+{n}",titleDetalleDia:"Ver detalle del día",titleTurno:"{n} funcionarios en turno",titleActs:"{n} actividades",actsBadge:"{n} act.",viaticoTag:"VIÁTICO",rolBadge:"⚠ ROL: {nombres}"},planFuncionario:{titulo:"Planificación/Funcionario — {mes} {anio}",expandir:"Expandir",colapsar:"Colapsar",leyendaTurnoAct:"Turno con actividad",leyendaFaltaAct:"Falta asignar actividad",leyendaConflicto:"Actividad no coincide con rol",diasVisibles:"{n} días visibles",actividades:"{n} actividades",sinAsignar:"{n} sin asignar",conflictos:"{n} conflictos",ocultar:"Ocultar",ver:"Ver",faltaAsignar:"Falta asignar actividad",sinLugar:"Sin lugar",noCoincideRol:"NO COINCIDE CON ROL",modificarActividad:"Modificar actividad",modificarRol:"Modificar rol",asignar:"Asignar",nueva:"Nueva"},viaticos:{titulo:"Adelanto de viáticos — actividades de {nombreMes}",porFuncionario:"Por funcionario",porActividad:"Por actividad",plazoAbierto:"Plazo abierto.",plazoAbiertoSub:"Este listado corresponde al mes siguiente y puede usarse para tramitar adelantos hasta el día {dia} del mes anterior.",plazoCerrado:"Clausurado el tiempo de trámite de adelantos del próximo mes.",plazoCerradoSub:"El listado queda disponible para consulta, pero el plazo ordinario de trámite venció el día {dia} del mes anterior.",pie:"Mes a tramitar: {nombreMes}. Corte administrativo: día {dia} del mes {referencia}.",referenciaAnterior:"anterior",referenciaEnCurso:"en curso",sinActividadesTitulo:"Sin actividades con viático para el próximo mes",sinActividadesDesc:"Aún no hay actividades de {nombreMes} marcadas como “requiere tramitar adelanto de viático”. Vaya a Planificación general o Plan/Funcionario para asignarlas.",ocultoTitulo:"Listado oculto tras el cierre",ocultoDesc:"Según la configuración administrativa, el listado se oculta cuando el plazo (día {dia}) ya venció. Puede reactivar la consulta en Configuración → Viáticos.",nFuncionarios:"{n} funcionarios"},reposicion:{titulo:"Reposición de tiempo trabajado",subtitulo:"Registro de jornadas que la administración requirió trabajar a un funcionario en día libre, fuera de turno, feriado o similar (emergencias, incendios, atención de denuncias, actividades especiales, etc.) para llevar el control y reponerle el tiempo. Puede ser por horas, medio día o día entero.",acercaDe:"Acerca de esta herramienta",controlInterno:"Control interno",agregar:"Registrar tiempo",agregarCorto:"Registrar",filtroTodos:"Todos",filtroPendientes:"Pendientes",filtroRepuestos:"Repuestos",horasN:"{n} h",tabsAria:"Vistas de reposición",tabRegistros:"Registros",tabHistorial:"Historial por funcionario",reponer:"Reponer",saldoCorto:"Saldo pendiente",ultimaReposicion:"Última reposición",masAcciones:"Más acciones del registro",buscar:"Buscar por funcionario, folio, motivo u observación",filtros:"Filtros",filtrosAvanzados:"Filtros de reposición",limpiarFiltros:"Limpiar filtros",todosFuncionarios:"Todos los funcionarios",todosTipos:"Todos los tipos",periodo:"Periodo",soloObservaciones:"Solo registros con observaciones",saldoLabel:"Saldo: {saldo}",estado:{Pendiente:"Pendiente",Parcial:"Parcial",Repuesto:"Repuesto"},resumen:{total:"Registros",pendientes:"Pendientes de reponer",repuestos:"Repuestos",saldo:"Saldo a favor: {saldo}",parciales:"{n} parcial(es)",desglose:"{dias} día(s) · {medios} medio(s) día(s) · {horas} h"},th:{folio:"Folio",funcionario:"Funcionario",fecha:"Fecha trabajada",tipoDia:"Tipo de día",motivo:"Motivo",tiempo:"Tiempo",estado:"Estado",acciones:"Acciones"},magnitudCorta:{diaEntero:"día completo",medioDia:"medio día"},marca:{trabajadaTitulo:"{folio} · Trabajó día {tipoDia} ({magnitud}) · {estado}",reposicionTitulo:"{folio} · Día de reposición del tiempo trabajado el {fecha}",reposicionDe:"reposición del {fecha}"},historial:{vacioTitulo:"Sin historial",vacioDesc:"Aún no hay registros de reposición para mostrar por funcionario.",veces:"{n} registro(s)",pendientesN:"{n} pendiente(s)",repuestosN:"{n} repuesto(s)",saldoFavor:"Saldo a favor: {saldo}",cuota:"Reposición aplicada: {fecha} · {cantidad}"},marcarRepuesto:"Marcar repuesto",reabrir:"Reabrir",repuestoEl:"Repuesto el {fecha}",sinRegistrosTitulo:"Sin registros de reposición",sinRegistrosDesc:"Use “Registrar tiempo” para anotar una jornada trabajada en día libre, feriado o fuera de turno que deba reponerse al funcionario.",sinResultadosTitulo:"Sin resultados",sinResultadosDesc:"Ajuste el filtro para ver los registros de reposición.",nota:"La herramienta solo registra y lleva el control; la reposición efectiva del tiempo la autoriza la administración según la normativa vigente.",eliminado:"Se eliminó el registro {folio}",restaurado:"Se restauró el registro {folio}"},modalReposicion:{editar:"Editar registro de reposición",agregar:"Registrar tiempo a reponer",sub:"Documente la jornada trabajada por requerimiento de la administración para llevar el control y reponer el tiempo.",funcionario:"Funcionario",seleccioneFuncionario:"Seleccione un funcionario…",otrosFuncionarios:"Otros",fecha:"Fecha trabajada",tipoDia:"Tipo de día",motivo:"Motivo",motivoDetalle:"Detalle del motivo",motivoDetallePlaceholder:"Expediente, sector, descripción breve de la situación…",magnitud:"Tiempo trabajado",magnitudDiaEntero:"Día entero",magnitudMedioDia:"Medio día",magnitudHoras:"Por horas",estadoPendiente:"Pendiente",estadoRepuesto:"Repuesto",reposiciones:"Reposiciones registradas",sinCuotas:"Sin reposiciones registradas. Use “Reponer” en la lista para registrar tiempo (total, medio día u horas).",cuotasNota:"Las reposiciones se registran desde la acción “Reponer” de cada registro; aquí solo se consultan o se corrigen.",obs:"Observaciones",obsPlaceholder:"Coordinación con la administración, acuerdos, equipo, vehículo, etc.",guardar:"Guardar registro"},reponer:{titulo:"Reponer tiempo",saldoActual:"Saldo actual",saldoDespues:"Saldo después",cuanto:"¿Cuánto se repone?",fecha:"Fecha de reposición",excede:"La cantidad supera el saldo pendiente; se registrará hasta saldar el tiempo.",registrar:"Registrar reposición"},disponibilidad:{activosTitulo:"Contratos activos — disponibilidad",sinActivosTitulo:"Sin disponibilidad asignada",sinContrato:"Sin contrato",nDias:"{n} días",controlNota:"Control: la herramienta alerta; no ejecuta suspensiones automáticamente."},alertas:{requiereAtencion:"Requiere atención · {n}",sinCriticas:"Sin alertas críticas",sinCriticasSub:"No se observan vencimientos o bloqueos críticos en los datos visibles.",titulo:"Alertas del sistema ({n})",requiereRevision:"Requiere revisión",semaforoTitulo:"Semáforo normativo",semaforo:{verde:"Verificado",amarillo:"Confirmación interna",naranja:"Criterio RH/Jurídico",rojo:"No automatizar",azul:"Dato pendiente"},venceHoy:"Disponibilidad vence HOY — {nombre}",vencida:"Disponibilidad vencida — {nombre}",porVencer:"Disponibilidad por vencer — {nombre}",sinResolucion:"Sin resolución acumulativa — {nombre}",sinModalidad:"Acumulativa sin modalidad definida — {nombre}",incapaConDisp:"Revisar disponibilidad — {nombre}",incapaConActividad:"Incapacitado con actividad planificada — {nombre}",inactivoConActividad:"Inactivo con actividad planificada — {nombre}",reposicionPendiente:"Tiempo por reponer — {nombre}"},datos:{titulo:"Datos · respaldo local",esquema:"Esquema v{n}",estadoOk:"Última copia local guardada el {fecha}",estadoPendiente:"{n} cambio{plural} pendiente{plural} de guardar (debounce 500 ms)",estadoVacio:"Sin copia local todavía: los cambios se guardarán automáticamente al editar.",estadoNota:"La copia vive en el navegador (localStorage). Sirve como respaldo entre sesiones; no sustituye al backend institucional.",funcionarios:"Funcionarios",actividadesPlanificadas:"Actividades planificadas",reposiciones:"Reposiciones de tiempo",celdasOverride:"Celdas de rol con override",exportar:"Exportar JSON",importar:"Importar JSON…",reiniciar:"Reiniciar datos semilla",archivoAria:"Archivo JSON a importar",importadoTitulo:"Snapshot importado",importadoDesc:"Archivo: {archivo}{exportadoEn}",importadoExtra:" · exportado {fecha}",importRechazado:"Importación rechazada",reiniciarTitulo:"Reiniciar a datos semilla",reiniciarSub:"Se descartará la copia local y la app volverá a los datos de ejemplo. Esta acción no se puede deshacer a menos que hayas exportado primero un JSON de respaldo.",reiniciarRec:"Recomendación: pulse Exportar JSON antes de reiniciar.",noDeshacer:"Esta acción no se puede deshacer. Pulse «{accion}» para confirmar.",confirmarReiniciar:"Reiniciar",porQueTitulo:"¿Por qué hay copia local?",porQue:["El navegador guarda automáticamente cada cambio con un retraso de 500 ms para evitar perder información al recargar la página o cerrar el navegador.","La copia permanece en este dispositivo y NO sustituye un backend institucional. Exporte respaldos periódicos para trasladar o proteger la información.","El esquema lleva versión (`v{n}`); si el formato cambia en una nueva versión de la app, se crea un backup automático antes de aplicar la migración.","Exporte un JSON periódicamente como seguro adicional, especialmente antes de cambios mayores o cuando termine la jornada en campo."],backendTitulo:"Almacenamiento durable",backendIDB:"IndexedDB (Dexie) · capacidad amplia, almacenamiento asíncrono",backendLS:"localStorage · respaldo síncrono (~5 MB)",backendNone:"Sin almacenamiento (modo privado estricto)",backendBadgeIDB:"IndexedDB ✓",backendBadgeLS:"localStorage",backendBadgeNone:"Sin durable",migradoLS:"Sus datos previos en localStorage se migraron a IndexedDB automáticamente.",pendientesTitulo:"Estado local",pendientesSub:"No existe sincronización con un servidor remoto.",pendientesCero:"Datos guardados únicamente en este dispositivo.",pendientesN:"{n} cambios locales pendientes de guardar."},configuracion:{aparienciaTitulo:"Apariencia",aparienciaSub:"El tema (claro / oscuro / alto contraste) se aplica a toda la aplicación.",titulo:"Configuración · reglas administrativas",cambiosPendientes:"Cambios pendientes",badgeSucia:"Cambios sin aplicar",badgeOk:"Guardado localmente",reglaDuraIntro:"Regla dura: la herramienta registra y alerta; cambiar una regla no genera pagos, suspensiones ni derechos automáticos. Cualquier ajuste debe estar respaldado por la coordinación administrativa.",coberturaTitulo:"Cobertura · puestos con atención rutinaria diaria",coberturaSub:'Si un día un puesto seleccionado no tiene a nadie asignado a "Atención rutinaria de visitantes", se marca como cobertura crítica (rojo) en la vista Día.',viaticosTitulo:"Viáticos · corte administrativo",diaCorte:"Día de corte (1–28)",mesObjetivo:"Mes objetivo",permitirConsulta:"Permitir consulta tras cierre",permitirConsultaSub:'Si "Permitir consulta tras cierre" está desactivado, después del día de corte la vista de viáticos se oculta. Por defecto se mantiene visible (con banner rojo).',feriadosTitulo:"Feriados · cálculo del primer día laboral",feriadosCheckTitle:"Excluir feriados oficiales al determinar el primer día laboral del mes.",feriadosCheckSub:"Si el 1er día hábil L–V cae en feriado, la rotación T/L se inicia el siguiente día laboral real. Aplica a partir del mes siguiente para no alterar registros ya guardados.",feriadosVer:"Ver feriados cargados ({n} año{plural})",alertasTitulo:"Alertas adicionales (Fase 6)",alertaInactivo:"Persona inactiva con actividad futura",alertaIncapacitado:"Incapacitado con actividad futura",alertaSinModalidad:"Acumulativa sin modalidad",alertaReposicion:"Tiempo trabajado pendiente de reponer",alertasNota:"Cada checkbox controla si se evalúa esa familia de alertas. Si se detectan falsos positivos, puede desactivarse temporalmente sin tocar código.",reposicionTitulo:"Reposición · duración de jornada",horasJornada:"Horas por jornada",horasJornadaSub:"Define cuántas horas equivalen a un día completo (medio día = la mitad). Se usa para calcular el saldo de reposición cuando se repone en partes.",advertenciasTitulo:"Advertencias antes de aplicar:",restaurarPredet:"Restaurar valores predeterminados",restaurarConfirm:"¿Restaurar todas las reglas a sus valores predeterminados? Las alertas y cobertura volverán al estado inicial.",descartar:"Descartar",aplicar:"Aplicar cambios…",confirmarAplicar:"Confirmar y aplicar"},acciones:{aceptar:"Aceptar",cancelar:"Cancelar",cerrar:"Cerrar",guardar:"Guardar",eliminar:"Eliminar",agregar:"Agregar",editar:"Editar",confirmar:"Confirmar",restaurar:"Restaurar",exportar:"Exportar JSON",importar:"Importar JSON…",reiniciar:"Reiniciar datos semilla",aplicarCambios:"Aplicar cambios…",actualizarAhora:"Actualizar ahora",verLuego:"Ver luego",instalar:"Instalar",ahoraNo:"Ahora no",deshacer:"Deshacer",atras:"Atrás",siguiente:"Siguiente"},toast:{regionAria:"Avisos de la aplicación",puedeDeshacer:"Puede deshacerlo mientras este aviso siga visible."},puestos:{titulo:"Puestos operativos",sub:"Los centros operativos del parque. De aquí salen las opciones de las fichas, el agrupado de la vista Roles y la cobertura diaria de visitantes.",agregar:"Agregar puesto",editar:"Editar puesto",nombre:"Nombre del puesto",tag:"Código corto",tagAyuda:"Dos o tres letras. Es lo que se ve en la cuadrícula de Roles.",color:"Color en Roles",colorAria:"Elegir color del puesto",visitDiario:"Requiere atención de visitantes a diario",visitDiarioSub:"Si un día no hay nadie asignado a esa actividad en este puesto, la vista Día lo marca en rojo.",personas:"{n} funcionario(s)",sinPersonas:"Sin funcionarios",eliminar:"Eliminar puesto",eliminarConPersonas:"No se puede eliminar «{nombre}»: tiene {n} funcionario(s) asignado(s). Muévalos a otro puesto primero.",eliminarConfirma:"Se eliminará «{nombre}». No tiene funcionarios asignados, así que ninguna ficha queda huérfana.",eliminado:"Se eliminó el puesto «{nombre}»",restaurado:"Se restauró el puesto «{nombre}»",creado:"Se agregó el puesto «{nombre}»",guardado:"Se guardaron los cambios de «{nombre}»",renombrado:"«{antes}» pasa a llamarse «{despues}». Se actualizaron {n} ficha(s).",ultimoPuesto:"Debe quedar al menos un puesto operativo.",subir:"Subir «{nombre}»",bajar:"Bajar «{nombre}»",ordenSub:"El orden se refleja en la cuadrícula de Roles, en los desplegables de las fichas y en el resumen de la vista Día."},historial:{titulo:"Historial de cambios",sub:"Últimos {n} movimientos sobre las fichas de funcionario. Se conservan los {max} más recientes.",vacio:"Todavía no hay cambios registrados.",filtro:"Filtrar por funcionario",todos:"Todos",sinResultados:"Sin movimientos de esta persona.",verMas:"Ver {n} más",tipo:{alta:"Alta",edicion:"Edición",baja:"Baja",restauracion:"Restauración",importacion:"Importación"},cambio:"{campo}: {antes} → {despues}",vacioCampo:"(vacío)",si:"Sí",no:"No",resumenImportacion:"{archivo} · {altas} altas, {cambios} actualizaciones",nota:"El historial viaja en el respaldo JSON, así que se conserva al exportar y restaurar."},ayuda:{mostrar:"¿Qué significa esto?",ocultar:"Ocultar ayuda"},actividad:{sinTitulo:"actividad sin título",eliminada:"Se eliminó «{titulo}»",restaurada:"Se restauró «{titulo}»",eliminadaDetalle:"Desaparece para todos los funcionarios asignados. Puede deshacerlo mientras este aviso siga visible."},estados:{activo:"Activo",inactivo:"Inactivo",vacaciones:"De vacaciones",incapacitado:"Incapacitado"},sync:{enLinea:"En línea",sinConexion:"Sin conexión",guardando:"Guardando…",guardado:"Guardado localmente {hora}",sinRespaldo:"Pendiente de primer guardado local",guardadoParcial:"Guardado temporal — respaldo durable falló ({hora})"},print:{imprimir:"Imprimir / Guardar PDF",imprimirCorto:"Imprimir",encabezadoMinisterio:"MINISTERIO DE AMBIENTE Y ENERGÍA",encabezadoSinac:"SISTEMA NACIONAL DE ÁREAS DE CONSERVACIÓN — SINAC",encabezadoAcc:"ÁREA DE CONSERVACIÓN CENTRAL · BLOQUE TAPANTÍ–MACIZO DE LA MUERTE",encabezadoUnidad:"Parque Nacional Los Quetzales (PNLQ)",documentoTitulo:"ROL MENSUAL DE TRABAJO",periodo:"Período: {mes} {anio}",puestoLabel:"Puesto operativo: {puesto}",leyendaTitulo:"Leyenda de códigos",leyendaT:"T = Turno",leyendaL:"L = Libre",leyendaV:"V = Vacaciones",leyendaI:"I = Incapacidad",leyendaO:"O = Otro",firma1:"Elaborado por",firma2:"Revisado por",firma3:"Aprobado por",firmaCargo1:"Administrador(a) de ASP",firmaCargo2:"Coordinación administrativa ACC",firmaCargo3:"Jefatura BTMM",lugarFecha:"Lugar y fecha: ____________________________________________",pieDocumento:"Documento generado por la herramienta PNLQ Gestión de Jornadas · v{version}",pieFecha:"Impreso: {fecha}",pieReglaDura:"La herramienta solo registra y alerta; no genera derechos automáticos. Firmas validan el documento."},pwa:{instalarTitulo:"Instalar PNLQ en este dispositivo",instalarSub:"Acceso sin internet · Pantalla completa · Sin navegador",instalarAria:"Instalar aplicación PNLQ",sinConexion:"Sin conexión — mostrando datos en caché",ultimaCarga:"Última carga local: {fecha}",nuevaVersion:"Nueva versión disponible",versionDesactualizada:"Versión desactualizada",versionActual:"Versión actual: v{actual}",versionDisponible:" · disponible: v{remoto}",urgente:" Actualice para evitar inconsistencias.",sugerido:" Actualice para ver los últimos cambios.",bannerAria:"Nueva versión de PNLQ disponible"}};function md(r,o){return!r||!o||typeof r!="string"?r:r.replace(/\{(\w+)\}/g,(s,u)=>o[u]!==void 0?String(o[u]):s)}function m1(r){const o=String(r||"").split(".");let s=d1;for(const u of o)if(s&&Object.prototype.hasOwnProperty.call(s,u))s=s[u];else return r;return s===void 0?r:s}function Ie(r,o){const s=m1(r);return Array.isArray(s)?s.map(u=>md(u,o)):md(s,o)}function fd(r){return r===1?"":"s"}const Ud=C.createContext(null),f1=5e3,p1=1e4,T1=3,L1=["info","exito","aviso","error"];let pd=0;function v1(){return pd+=1,`toast-${pd}`}function h1({children:r}){const[o,s]=C.useState([]),u=C.useRef(new Map),m=C.useRef(!1),f=C.useCallback(D=>{s(b=>b.filter(G=>G.id!==D))},[]),h=C.useCallback((D,b)=>{if(!Number.isFinite(b)||b<=0)return;const G=u.current.get(D);G!=null&&G.timeoutId&&clearTimeout(G.timeoutId);const le={restanteMs:b,iniciadoEn:Date.now(),timeoutId:null};m.current||(le.timeoutId=setTimeout(()=>f(D),b)),u.current.set(D,le)},[f]),T=C.useCallback(D=>{const b=typeof D=="string"?{mensaje:D}:D||{},G=typeof b.mensaje=="string"?b.mensaje.trim():"";if(!G)return null;const le=L1.includes(b.tipo)?b.tipo:"info",W=b.accion&&typeof b.accion.onAccion=="function"?{etiqueta:b.accion.etiqueta||Ie("acciones.deshacer"),onAccion:b.accion.onAccion,cerrarAlActivar:b.accion.cerrarAlActivar!==!1}:null,te=b.duracion===void 0?W?p1:f1:b.duracion,de=v1();return s(se=>{const ve=[...se,{id:de,mensaje:G,detalle:b.detalle||"",tipo:le,accion:W,duracion:te}],Ee=ve.length-T1;return Ee>0?ve.slice(Ee):ve}),h(de,te),de},[h]),L=C.useCallback(()=>{if(m.current)return;m.current=!0;const D=Date.now();for(const b of u.current.values())b.timeoutId&&(clearTimeout(b.timeoutId),b.restanteMs=Math.max(0,b.restanteMs-(D-b.iniciadoEn)),b.timeoutId=null)},[]),A=C.useCallback(()=>{if(!m.current)return;m.current=!1;const D=Date.now();for(const[b,G]of u.current)G.timeoutId||(G.iniciadoEn=D,G.timeoutId=setTimeout(()=>f(b),Math.max(0,G.restanteMs)))},[f]),E=C.useCallback(D=>{const b=o.find(G=>G.id===D);b!=null&&b.accion&&(b.accion.onAccion(),b.accion.cerrarAlActivar&&f(D))},[o,f]),N=C.useCallback((D,b)=>T({...b,mensaje:D,tipo:"exito"}),[T]),S=C.useCallback((D,b)=>T({...b,mensaje:D,tipo:"error"}),[T]),w=C.useCallback((D,b)=>T({...b,mensaje:D,tipo:"aviso"}),[T]),z=C.useCallback((D,b,G)=>T({...G,mensaje:D,tipo:(G==null?void 0:G.tipo)||"info",accion:{etiqueta:Ie("acciones.deshacer"),onAccion:b}}),[T]);C.useEffect(()=>{const D=new Set(o.map(b=>b.id));for(const[b,G]of u.current)D.has(b)||(G.timeoutId&&clearTimeout(G.timeoutId),u.current.delete(b))},[o]),C.useEffect(()=>{const D=u.current;return()=>{for(const b of D.values())b.timeoutId&&clearTimeout(b.timeoutId);D.clear()}},[]);const B=C.useMemo(()=>({toasts:o,mostrar:T,cerrar:f,pausar:L,reanudar:A,activarAccion:E,exito:N,error:S,aviso:w,conDeshacer:z}),[o,T,f,L,A,E,N,S,w,z]);return c.jsx(Ud.Provider,{value:B,children:r})}function Gd(){const r=C.useContext(Ud);if(!r)throw new Error("useToast() requiere que el árbol esté envuelto en <ToastProvider>.");return r}const g1=new Date(2026,4,19);function P1(r,o){const s=Math.round((Number(r)||0)*100)/100;if(s<=0)return"0 h";const u=s/o;return Number.isInteger(u)?u===1?"1 día":`${u} días`:s===o/2?"medio día":`${s} h`}function y1(r,o={}){const{actividadesPlan:s=[],reposiciones:u=[],hoy:m=g1,flags:f={}}=o,{alertaInactivoConActividad:h=!0,alertaIncapacitadoConActividad:T=!0,alertaAcumulativaSinModalidad:L=!0,alertaReposicionPendiente:A=!0,horasJornada:E=8}=f,N=[],S=M1(m);if(r.forEach(w=>{if(w.disponibilidad){const z=qT(w.vencimiento,m);z!==null&&z<0?N.push({t:"danger",icon:"🚨",msg:`Disponibilidad vencida — ${w.nombre}`,sub:`${w.contrato} · venció ${et(w.vencimiento)} (hace ${Math.abs(z)} día${Math.abs(z)!==1?"s":""}). Requiere revisión administrativa.`}):z!==null&&z===0?N.push({t:"danger",icon:"🚨",msg:`Disponibilidad vence HOY — ${w.nombre}`,sub:`${w.contrato} · vencimiento ${et(w.vencimiento)}. Coordinar renovación o suspensión administrativa.`}):z!==null&&z>0&&z<=60&&N.push({t:"warn",icon:"⚠️",msg:`Disponibilidad por vencer — ${w.nombre}`,sub:`${w.contrato} · vence ${et(w.vencimiento)} (en ${z} día${z!==1?"s":""}). Requiere revisión administrativa.`})}if(w.jornada==="Acumulativa"&&!w.resolucion&&!w.ong&&N.push({t:"warn",icon:"📄",msg:`Sin resolución acumulativa — ${w.nombre}`,sub:"Dato pendiente: no automatizar efectos hasta confirmar respaldo interno."}),L&&w.jornada==="Acumulativa"&&!w.modalidad&&N.push({t:"warn",icon:"📄",msg:`Acumulativa sin modalidad definida — ${w.nombre}`,sub:"Definir modalidad (10x5, 12x6, 14x7, 16x8, 20x10) para calcular roles correctamente."}),w.estado==="Incapacitado"&&w.disponibilidad&&N.push({t:"danger",icon:"🩺",msg:`Revisar disponibilidad — ${w.nombre}`,sub:"Funcionario incapacitado con disponibilidad activa. Verificar criterio RH."}),T&&w.estado==="Incapacitado"){const z=Td(s,w.nombre,S);z.length&&N.push({t:"danger",icon:"🩺",msg:`Incapacitado con actividad planificada — ${w.nombre}`,sub:`${z.length} actividad${z.length!==1?"es":""} a partir de ${et(S)}. Coordinar reasignación.`})}if(h&&w.estado==="Inactivo"){const z=Td(s,w.nombre,S);z.length&&N.push({t:"warn",icon:"⚠️",msg:`Inactivo con actividad planificada — ${w.nombre}`,sub:`${z.length} actividad${z.length!==1?"es":""} a partir de ${et(S)}. Verificar si debe reactivarse o reasignarse.`})}}),A&&u.length)for(const w of yT(u,E))w.pendientes!==0&&N.push({t:"warn",icon:"⟳",msg:`Tiempo por reponer — ${w.funcionario}`,sub:`${w.pendientes} registro${w.pendientes!==1?"s":""} de trabajo fuera de rol sin reponer · saldo a favor ${P1(w.saldoHoras,E)}. Coordinar la reposición del tiempo.`});return N.length?N:[{t:"ok",icon:"✅",msg:"Sin alertas críticas",sub:"No se observan vencimientos o bloqueos críticos en los datos visibles."}]}function Td(r,o,s){return(r||[]).filter(u=>!u||!u.inicio||(u.fin||u.inicio)<s?!1:(u.funcionarios||[]).includes(o))}function M1(r){if(typeof r=="string")return r;const o=s=>String(s).padStart(2,"0");return`${r.getFullYear()}-${o(r.getMonth()+1)}-${o(r.getDate())}`}function Mn(){return C.useCallback((r,o)=>Ie(r,o),[])}const rr="1.25.0",xi="2026-09-11T23:46:15.962Z",Si="eef5ab1",E1="/BTMM_JORNADAS/version.json";function Kd(r=xi){try{const o=new Date(r),s=u=>String(u).padStart(2,"0");return`${s(o.getDate())}/${s(o.getMonth()+1)}/${o.getFullYear()} ${s(o.getHours())}:${s(o.getMinutes())}`}catch{return r}}/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$d=(...r)=>r.filter((o,s,u)=>!!o&&o.trim()!==""&&u.indexOf(o)===s).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var C1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=C.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:s=2,absoluteStrokeWidth:u,className:m="",children:f,iconNode:h,...T},L)=>C.createElement("svg",{ref:L,...C1,width:o,height:o,stroke:r,strokeWidth:u?Number(s)*24/Number(o):s,className:$d("lucide",m),...T},[...h.map(([A,E])=>C.createElement(A,E)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=(r,o)=>{const s=C.forwardRef(({className:u,...m},f)=>C.createElement(x1,{ref:f,iconNode:o,className:$d(`lucide-${N1(r)}`,u),...m}));return s.displayName=`${r}`,s};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=oe("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=oe("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=oe("CalendarClock",[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M17.5 17.5 16 16.3V14",key:"akvzfd"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=oe("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=oe("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=oe("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=oe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=oe("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=oe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=oe("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=oe("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=oe("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=oe("Contrast",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z",key:"j4l70d"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=oe("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=oe("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=oe("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=oe("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=oe("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=oe("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=oe("LockOpen",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=oe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=oe("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=oe("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=oe("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=oe("OctagonAlert",[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=oe("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=oe("Pin",[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=oe("PlugZap",[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m18 3-4 4h6l-4 4",key:"16psg9"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=oe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=oe("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=oe("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=oe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=oe("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=oe("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=oe("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=oe("Stethoscope",[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=oe("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=oe("TrafficCone",[["path",{d:"M9.3 6.2a4.55 4.55 0 0 0 5.4 0",key:"flyxqv"}],["path",{d:"M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3",key:"1nlxxg"}],["path",{d:"M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z",key:"vz7x1l"}],["path",{d:"m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8",key:"1xfzlw"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=oe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=oe("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=oe("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=oe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=oe("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=oe("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=oe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Q1={"🏠":lm,"👥":Mm,"📅":Zd,"📊":Xd,"🗓️":Wd,"📋":im,"💵":qd,"🛡️":hm,"🔔":Hd,"✕":Nm,"⚠️":Bs,"⚠":Bs,"🚨":fm,"✅":rm,"🩺":gm,"📄":om,"📍":dm,"🔥":sm,"🌲":ym,"⚖️":vm,"⟳":Lm,"☰":mm,"▲":am,"▼":em,"←":nm,"→":tm,"+":Tm,"🔒":um,"🔓":cm,"📴":Em,"📡":pm,"🚦":Pm},J1={home:lm,users:Mm,calendar:Zd,calendarDays:Wd,calendarClock:S1,clipboard:im,chart:Xd,banknote:qd,shield:hm,shieldAlert:D1,bell:Hd,x:Nm,alert:Bs,danger:fm,check:rm,info:w1,stethoscope:gm,file:om,pin:dm,flame:sm,trees:ym,scale:vm,refresh:Lm,menu:mm,chevronUp:am,chevronDown:em,chevronLeft:nm,chevronRight:tm,plus:Tm,pencil:j1,trash:F1,lock:um,unlock:cm,eye:A1,eyeOff:V1,sun:O1,moon:k1,contrast:b1,traffic:Pm,wifi:z1,wifiOff:Em,phone:I1,search:R1,pinMap:_1,plugZap:pm};function en({name:r,size:o=18,label:s,className:u="",strokeWidth:m=2}){const f=typeof r=="string"?Q1[r]??J1[r]:null;if(!f)return c.jsx("span",{"aria-hidden":s?void 0:!0,"aria-label":s,className:u,children:r});const h=s?{role:"img","aria-label":s}:{"aria-hidden":!0,focusable:"false"};return c.jsx(f,{width:o,height:o,strokeWidth:m,className:u,...h})}function B1({view:r,setView:o,nAlertas:s}){const u=Mn(),m=[[u("sidebar.grupoPrincipal"),[["dia",u("view.dia"),"calendar"],["roles",u("view.roles"),"chart"],["planificacion",u("view.planificacion"),"calendarDays"],["funcionarios",u("view.funcionarios"),"users"]]],[u("sidebar.grupoJornadas"),[["planFuncionario",u("view.planFuncionario"),"clipboard"],["adelantos",u("view.adelantos"),"banknote"],["reposicion",u("view.reposicion"),"refresh"],["disponibilidad",u("view.disponibilidad"),"shield"]]],[u("sidebar.grupoControl"),[["alertas",u("view.alertas"),"bell"],["datos",u("view.datos"),"shieldAlert"],["configuracion",u("view.configuracion"),"traffic"]]]];return c.jsxs("aside",{className:"pnlq-no-print hidden w-60 shrink-0 flex-col bg-emerald-900 text-white lg:flex",children:[c.jsxs("div",{className:"border-b border-white/10 p-6",children:[c.jsxs("div",{className:"mb-3 flex items-center gap-3",children:[c.jsx("img",{src:"/BTMM_JORNADAS/acc-logo.svg",alt:"ACC",className:"h-12 w-12 shrink-0 rounded-xl bg-white p-1"}),c.jsxs("div",{children:[c.jsx("div",{className:"text-xs font-semibold uppercase tracking-[0.22em] text-white/60",children:u("app.sinacCR")}),c.jsx("div",{className:"mt-0.5 text-xs font-semibold text-white/70",children:u("app.accNombre")})]})]}),c.jsxs("div",{className:"text-base font-semibold leading-snug",children:[u("app.bloqueLinea1"),c.jsx("br",{}),u("app.bloqueLinea2")]}),c.jsx("div",{className:"mt-1.5 text-xs text-white/65",children:u("app.bloqueSub")})]}),c.jsx("nav",{className:"flex-1 p-3",children:m.map(([f,h])=>c.jsxs("div",{children:[c.jsx("div",{className:"px-3 pb-2 pt-4 text-xs font-semibold uppercase tracking-wider text-white/70",children:f}),h.map(([T,L,A])=>c.jsxs("button",{onClick:()=>o(T),"aria-current":r===T?"page":void 0,className:`mb-1 flex min-h-touch w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${r===T?"bg-white/20 text-white ring-1 ring-white/20":"text-white/80 hover:bg-white/10"}`,children:[c.jsx(en,{name:A,size:18}),L,T==="alertas"&&s>0&&c.jsx("span",{"aria-label":u("bottomNav.alertasAria",{n:s}),className:"ml-auto rounded-full bg-red-700 px-2 py-0.5 text-xs text-white",children:s})]},T))]},f))}),c.jsxs("div",{className:"border-t border-white/10 p-4 text-xs",children:[c.jsx("strong",{className:"font-semibold",children:u("app.perfilNombre")}),c.jsx("div",{className:"text-white/60",children:u("app.perfilCargo")}),c.jsxs("div",{className:"mt-3 border-t border-white/10 pt-3 text-[10px] font-mono leading-tight text-white/65",title:`Versión ${rr} · build ${xi} · commit ${Si}`,children:[c.jsxs("div",{children:["v",rr," ",c.jsx("span",{className:"text-white/60",children:"·"})," ",Si]}),c.jsxs("div",{className:"text-white/60",children:["build ",Kd(xi)]})]})]})]})}const Cm=["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SETIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"],_v=["D","L","K","M","J","V","S"],Y1=["DOMINGO","LUNES","MARTES","MIÉRCOLES","JUEVES","VIERNES","SÁBADO"];function xm({prominent:r=!1}){const{lastSavedAt:o,pendingChanges:s,durableSaveFailed:u}=Ot(),m=Mn(),[f,h]=C.useState(typeof navigator<"u"?navigator.onLine:!0);C.useEffect(()=>{const N=()=>h(!0),S=()=>h(!1);return window.addEventListener("online",N),window.addEventListener("offline",S),()=>{window.removeEventListener("online",N),window.removeEventListener("offline",S)}},[]);const T=o?new Date(o).toLocaleTimeString("es-CR",{hour:"2-digit",minute:"2-digit"}):null,L=u&&s===0,A=s>0?m("sync.guardando"):L?m("sync.guardadoParcial",{hora:T??""}):T?m("sync.guardado",{hora:T}):m("sync.sinRespaldo"),E=`${m(f?"sync.enLinea":"sync.sinConexion")} · ${A}`;return r?c.jsxs("span",{role:"status","aria-label":E,title:E,className:`inline-flex min-h-touch w-full items-center justify-center gap-2 rounded-xl border px-3 py-2 text-sm font-semibold ${L||!f?"border-warning/40 bg-warning-soft text-warning-fg":"border-line bg-surface text-ink-muted"}`,children:[c.jsx("span",{"aria-hidden":"true",className:`h-2.5 w-2.5 shrink-0 rounded-full ${s>0?"animate-pulse bg-info":L||!f?"bg-warning":"bg-ok"}`}),c.jsx("span",{className:"truncate",children:A}),!f&&c.jsx("span",{className:"shrink-0 text-xs font-bold uppercase tracking-wide",children:m("sync.sinConexion")})]}):c.jsxs("span",{role:"status","aria-label":E,title:E,className:`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium sm:text-sm ${L?"border-warning/40 bg-warning-soft text-warning-fg":f?"border-line bg-surface text-ink-muted":"border-warning/40 bg-warning-soft text-warning-fg"}`,children:[c.jsx("span",{"aria-hidden":"true",className:`h-2 w-2 shrink-0 rounded-full ${s>0?"animate-pulse bg-info":L?"bg-warning":f?"bg-ok":"bg-warning"}`}),c.jsx("span",{className:"hidden sm:inline",children:A}),T&&c.jsx("span",{className:"sm:hidden",children:T})]})}var tl=jd();const nr=[];let Ld=!1,er=0,vd="";function U1(r){if(r.key!=="Escape")return;const o=nr[nr.length-1];o&&(typeof r.stopImmediatePropagation=="function"&&r.stopImmediatePropagation(),r.stopPropagation(),o())}function G1(){Ld||typeof document>"u"||(document.addEventListener("keydown",U1,!0),Ld=!0)}function Sm(r){return G1(),nr.push(r),()=>{const o=nr.lastIndexOf(r);o>=0&&nr.splice(o,1)}}function K1(r){C.useEffect(()=>{if(r)return Sm(()=>r())},[r])}const $1=["a[href]","area[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(", ");function hd(r){return r?Array.from(r.querySelectorAll($1)).filter(o=>!o.hasAttribute("aria-hidden")&&o.offsetParent!==null):[]}function bm({open:r=!0,onClose:o,initialFocusRef:s}={}){const u=C.useRef(null),m=C.useRef(null),f=C.useId(),h=C.useId();return C.useEffect(()=>{if(!r)return;m.current=typeof document<"u"?document.activeElement:null;const T=u.current;if(!T)return;typeof document<"u"&&(er===0&&(vd=document.body.style.overflow,document.body.style.overflow="hidden"),er+=1);const L=()=>{const S=(s==null?void 0:s.current)??hd(T)[0]??T;try{S.focus({preventScroll:!0})}catch{}},A=window.setTimeout(L,0),E=S=>{if(S.key!=="Tab")return;const w=hd(T);if(w.length===0){S.preventDefault();return}const z=w[0],B=w[w.length-1],D=document.activeElement;S.shiftKey?(D===z||!T.contains(D))&&(S.preventDefault(),B.focus()):(D===B||!T.contains(D))&&(S.preventDefault(),z.focus())};T.addEventListener("keydown",E);const N=o?Sm(()=>o()):void 0;return()=>{window.clearTimeout(A),T.removeEventListener("keydown",E),N==null||N(),typeof document<"u"&&(er=Math.max(0,er-1),er===0&&(document.body.style.overflow=vd));const S=m.current;if(S&&typeof S.focus=="function")try{S.focus({preventScroll:!0})}catch{}}},[r,o,s]),{ref:u,titleId:f,descId:h}}const gd={sm:"max-w-sm",md:"max-w-xl",lg:"max-w-2xl",xl:"max-w-3xl","2xl":"max-w-4xl"};function Vm({open:r=!0,onClose:o,title:s,description:u,children:m,actions:f,size:h="lg",closeOnBackdrop:T=!0,contentClassName:L=""}){const{ref:A,titleId:E,descId:N}=bm({open:r,onClose:o});if(!r)return null;const S=gd[h]||gd.lg,w=c.jsx("div",{className:"pnlq-modal-backdrop fixed inset-0 z-50 flex items-end justify-center bg-black/55 p-0 backdrop-blur-sm md:items-center md:p-4",onClick:z=>{T&&z.target===z.currentTarget&&(o==null||o())},children:c.jsxs("div",{ref:A,role:"dialog","aria-modal":"true","aria-labelledby":s?E:void 0,"aria-describedby":u?N:void 0,tabIndex:-1,className:`pnlq-modal-panel flex max-h-[94vh] max-h-[94dvh] w-full ${S} flex-col overflow-hidden rounded-t-3xl bg-surface text-ink shadow-2xl outline-none md:rounded-3xl`,style:{maxHeight:"calc(var(--visual-viewport-height, 100dvh) - 1rem)"},children:[c.jsx("div",{"aria-hidden":"true",className:"mx-auto mt-2 h-1.5 w-10 shrink-0 rounded-full bg-line md:hidden"}),(s||u)&&c.jsxs("header",{className:"pnlq-modal-header flex items-start justify-between gap-3 border-b border-line p-5",children:[c.jsxs("div",{className:"min-w-0",children:[s&&c.jsx("h2",{id:E,className:"text-lg font-semibold text-ink",children:s}),u&&c.jsx("p",{id:N,className:"mt-1 text-sm text-ink-muted",children:u})]}),c.jsx("button",{type:"button",onClick:o,"aria-label":Ie("acciones.cerrar"),className:"-mr-1 inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl text-ink-muted hover:bg-surface-alt hover:text-ink",children:c.jsx(en,{name:"x",size:20,label:Ie("acciones.cerrar")})})]}),c.jsx("div",{className:`pnlq-modal-body flex-1 overflow-y-auto p-5 ${L}`,children:m}),f&&c.jsx("footer",{className:"pnlq-modal-footer flex flex-wrap justify-between gap-2 border-t border-line bg-surface-alt p-4 pb-[max(1rem,env(safe-area-inset-bottom))]",children:f})]})});return typeof document<"u"?tl.createPortal(w,document.body):w}const ws=390,ks=844,Am="mobile-preview";function q1(r=window.location){return new URLSearchParams(r.search).get(Am)==="1"}function H1(r=window.location){const o=new URL(r.href);return o.searchParams.set(Am,"1"),o.toString()}const Pd=["planificacion","planFuncionario"];function W1({view:r,setView:o,month:s,setMonth:u,year:m,setYear:f,compact:h,setCompact:T}){const L=Mn(),[A,E]=C.useState(!1),[N,S]=C.useState(!1),w=q1(),z=new Date().getFullYear(),B=Array.from({length:11},(W,te)=>z-5+te),D=W=>{let te=s+W,de=m;te<0&&(te=11,de-=1),te>11&&(te=0,de+=1),u(te),f(de)},b=()=>{const W=new Date;u(W.getMonth()),f(W.getFullYear())},G=Pd.includes(r),le=G||r==="roles";return c.jsxs("header",{className:`pnlq-topbar pnlq-no-print sticky top-0 border-line bg-surface/95 shadow-sm backdrop-blur lg:block lg:border-b lg:px-6 lg:py-3 ${G?"block border-b px-4 py-2":le?"hidden border-b md:block md:px-4 md:py-2":"hidden"} ${A?"z-50":"z-30"}`,children:[c.jsxs("div",{className:"pnlq-topbar-inner flex flex-col gap-2 xl:flex-row xl:items-center xl:justify-between",children:[c.jsx("div",{className:"flex items-center justify-between gap-2",children:c.jsx("div",{className:"min-w-0",children:c.jsx("h1",{className:"hidden text-xl font-semibold tracking-tight text-ink lg:block",children:L("app.titulo")})})}),c.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[Pd.includes(r)&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{role:"group","aria-label":L("topbar.periodo"),className:"inline-flex items-stretch overflow-hidden rounded-xl border border-line bg-surface shadow-sm",children:[c.jsx("button",{onClick:()=>D(-1),"aria-label":L("topbar.mesAnterior"),className:"inline-flex min-h-touch min-w-touch items-center justify-center px-2 text-ink-muted hover:bg-surface-alt",children:c.jsx(en,{name:"chevronLeft",size:16})}),c.jsx("select",{"aria-label":L("topbar.mes"),className:"min-h-touch border-x border-line bg-surface px-1.5 text-sm font-medium text-ink outline-none sm:px-2 dark:[color-scheme:dark]",value:s,onChange:W=>u(Number(W.target.value)),children:Cm.map((W,te)=>c.jsx("option",{value:te,children:W},W))}),c.jsx("select",{"aria-label":L("topbar.anio"),className:"min-h-touch bg-surface px-1.5 text-sm font-medium text-ink outline-none sm:px-2 dark:[color-scheme:dark]",value:m,onChange:W=>f(Number(W.target.value)),children:B.map(W=>c.jsx("option",{children:W},W))}),c.jsx("button",{onClick:()=>D(1),"aria-label":L("topbar.mesSiguiente"),className:"inline-flex min-h-touch min-w-touch items-center justify-center border-l border-line px-2 text-ink-muted hover:bg-surface-alt",children:c.jsx(en,{name:"chevronRight",size:16})})]}),c.jsx("button",{type:"button",onClick:b,className:"inline-flex min-h-touch items-center rounded-xl border border-line bg-surface px-3 text-sm font-semibold text-brand hover:bg-brand-soft",children:L("topbar.hoy")})]}),r==="roles"&&c.jsx("button",{onClick:()=>T(!h),className:"hidden min-h-touch items-center rounded-xl border border-line bg-surface px-3 py-2 text-sm font-medium text-ink hover:bg-surface-alt md:inline-flex","aria-pressed":h,children:L(h?"topbar.vistaAmplia":"topbar.vistaCompacta")}),!w&&c.jsxs("button",{type:"button",onClick:()=>E(!0),className:"hidden min-h-touch items-center gap-2 rounded-xl border border-brand bg-brand-soft px-3 text-sm font-semibold text-ink hover:opacity-90 lg:inline-flex","aria-label":L("topbar.previewMobile"),children:[c.jsx(en,{name:"phone",size:18}),L("topbar.previewMobileCorto"),c.jsx("span",{className:"rounded-md bg-surface px-1.5 py-0.5 text-xs text-ink-muted",children:"Temporal"})]}),c.jsx("span",{className:"hidden lg:inline-flex",children:c.jsx(xm,{})})]})]}),c.jsxs(Vm,{open:A,onClose:()=>E(!1),title:L("topbar.previewTitle"),description:L("topbar.previewDesc",{ancho:N?ks:ws,alto:N?ws:ks}),size:"2xl",contentClassName:"bg-slate-200 p-3",children:[c.jsxs("div",{className:"mb-3 flex justify-center",role:"group","aria-label":L("topbar.previewOrientation"),children:[c.jsx("button",{type:"button",onClick:()=>S(!1),"aria-pressed":!N,className:`min-h-touch rounded-l-xl border px-4 text-sm font-semibold ${N?"border-line bg-surface text-ink":"border-brand bg-brand text-brand-fg"}`,children:L("topbar.previewVertical")}),c.jsx("button",{type:"button",onClick:()=>S(!0),"aria-pressed":N,className:`min-h-touch rounded-r-xl border border-l-0 px-4 text-sm font-semibold ${N?"border-brand bg-brand text-brand-fg":"border-line bg-surface text-ink"}`,children:L("topbar.previewHorizontal")})]}),c.jsx("div",{className:"mx-auto max-w-full overflow-hidden rounded-[2rem] border-[6px] border-slate-900 bg-white shadow-2xl transition-[width]",style:{width:`${(N?ks:ws)+12}px`},children:c.jsx("iframe",{title:L("topbar.previewFrameTitle"),src:H1(),className:`block w-full bg-white ${N?"h-[min(390px,calc(100dvh-12rem))] min-h-[280px]":"h-[min(844px,calc(100dvh-12rem))] min-h-[480px]"}`})})]})]})}function Z1(r){return r>99?"99+":String(r)}function X1({view:r,setView:o,nAlertas:s,hidden:u=!1}){const m=Mn(),[f,h]=C.useState(!1),T=[["dia",m("bottomNav.dia"),"calendar"],["roles",m("bottomNav.roles"),"chart"],["alertas",m("bottomNav.alertas"),"bell"],["funcionarios",m("bottomNav.personal"),"users"]],L=[["planificacion",m("bottomNav.plan"),"calendarDays"],["adelantos",m("bottomNav.viaticos"),"banknote"],["reposicion",m("bottomNav.reposicion"),"refresh"],["disponibilidad",m("bottomNav.disponib"),"shield"],["planFuncionario",m("bottomNav.planFunc"),"clipboard"],["datos",m("bottomNav.datos"),"shieldAlert"],["configuracion",m("bottomNav.config"),"traffic"]],A=L.some(([N])=>N===r),E=N=>{o(N),h(!1)};return u?null:c.jsxs(c.Fragment,{children:[c.jsx("nav",{className:"pnlq-bottom-nav pnlq-no-print fixed bottom-0 left-0 right-0 z-40 border-t border-line bg-surface pb-[env(safe-area-inset-bottom)] lg:hidden","aria-label":m("bottomNav.navAria"),children:c.jsxs("div",{className:"pnlq-bottom-nav-grid grid grid-cols-5",children:[T.map(([N,S,w])=>c.jsxs("button",{type:"button",onClick:()=>E(N),"aria-current":r===N?"page":void 0,className:`pnlq-bottom-nav-item relative flex min-h-touch flex-col items-center justify-center gap-0.5 py-2 text-sm font-semibold ${r===N?"text-brand":"text-ink-muted"}`,children:[c.jsx(en,{name:w,size:24}),S,N==="alertas"&&s>0&&c.jsx("span",{className:"absolute right-[18%] top-1 min-w-5 rounded-full bg-critical px-1 text-center text-xs font-bold leading-5 text-ink-inverse","aria-label":m("bottomNav.alertasAria",{n:s}),children:Z1(s)})]},N)),c.jsxs("button",{type:"button",onClick:()=>h(!0),"aria-expanded":f,"aria-current":A?"page":void 0,className:`pnlq-bottom-nav-item relative flex min-h-touch flex-col items-center justify-center gap-0.5 py-2 text-sm font-semibold ${f||A?"text-brand":"text-ink-muted"}`,children:[c.jsx(en,{name:"menu",size:24}),m("bottomNav.mas")]})]})}),c.jsx(Vm,{open:f,onClose:()=>h(!1),title:m("bottomNav.masTitulo"),description:m(A?`view.${r}`:"bottomNav.masSub"),size:"sm",contentClassName:"p-3 pb-[max(1rem,env(safe-area-inset-bottom))]",children:c.jsx("div",{className:"grid grid-cols-2 gap-2",children:L.map(([N,S,w])=>c.jsxs("button",{type:"button",onClick:()=>E(N),"aria-current":r===N?"page":void 0,className:`relative flex min-h-[56px] items-center gap-3 rounded-xl px-3 text-left text-sm font-semibold ${r===N?"bg-brand text-brand-fg":"border border-line bg-surface-alt text-ink"}`,children:[c.jsx(en,{name:w,size:22}),c.jsx("span",{children:S})]},N))})})]})}const eL=new Set(["dia","roles","planificacion","funcionarios","alertas","adelantos","reposicion","disponibilidad","planFuncionario","datos","configuracion"]),wm=new Set(["roles","planificacion","planFuncionario"]);function al(r){return r==="dashboard"?"dia":eL.has(r)?r:"dia"}function nL(r,o){const s=Number(r),u=Number(o);return Number.isInteger(s)&&s>=2e3&&s<=2200&&Number.isInteger(u)&&u>=1&&u<=12?{year:s,month:u-1}:null}function tL(r=""){const o=String(r).replace(/^#\/?/,""),[s,u,m]=o.split("/"),f=al(s||"dia"),h={view:f};return f==="dia"&&/^\d{4}-\d{2}-\d{2}$/.test(u||"")&&(h.diaVista=u),wm.has(f)&&Object.assign(h,nL(u,m)||{}),h}function yd({view:r,year:o,month:s,diaVista:u}){const m=al(r);return m==="dia"?`#/dia/${u}`:wm.has(m)?`#/${m}/${o}/${Qn(s+1)}`:`#/${m}`}function aL({view:r,setView:o,year:s,setYear:u,month:m,setMonth:f,diaVista:h,setDiaVista:T}){const L=C.useCallback(()=>{const A=tL(window.location.hash);o(A.view),A.year!=null&&u(A.year),A.month!=null&&f(A.month),A.diaVista&&T(A.diaVista)},[T,f,o,u]);return C.useEffect(()=>(L(),window.addEventListener("popstate",L),window.addEventListener("hashchange",L),()=>{window.removeEventListener("popstate",L),window.removeEventListener("hashchange",L)}),[L]),C.useEffect(()=>{const A=yd({view:r,year:s,month:m,diaVista:h});window.location.hash!==A&&window.history.replaceState({},"",A)},[h,m,r,s]),C.useCallback(A=>{const E=al(A),N=yd({view:E,year:s,month:m,diaVista:h});window.location.hash!==N&&window.history.pushState({},"",N),o(E)},[h,m,o,s])}function rL(){const[r,o]=C.useState(!1);return C.useEffect(()=>{const s=window.visualViewport;if(!s)return;const u=()=>{const f=window.innerHeight-s.height>150;o(f),document.documentElement.style.setProperty("--visual-viewport-height",`${s.height}px`)};return u(),s.addEventListener("resize",u),s.addEventListener("scroll",u),()=>{s.removeEventListener("resize",u),s.removeEventListener("scroll",u),document.documentElement.style.removeProperty("--visual-viewport-height")}},[]),r}class iL extends C.Component{constructor(s){super(s);vi(this,"handleReintentar",()=>{this.setState({hasError:!1,error:null})});vi(this,"handleRecargar",()=>{window.location.reload()});vi(this,"handleDescargarRespaldo",()=>{try{const s=Os();if(!s)return;const u=YT(s),m=new Blob([JSON.stringify(u,null,2)],{type:"application/json"}),f=URL.createObjectURL(m),h=document.createElement("a");h.href=f,h.download=`pnlq-respaldo-de-emergencia-${KT()}.json`,document.body.appendChild(h),h.click(),document.body.removeChild(h),URL.revokeObjectURL(f)}catch{}});this.state={hasError:!1,error:null}}static getDerivedStateFromError(s){return{hasError:!0,error:s}}componentDidCatch(s,u){console.error("Error de aplicación capturado por ErrorBoundary:",s,u==null?void 0:u.componentStack)}render(){var u;if(!this.state.hasError)return this.props.children;const s=(()=>{try{return!!Os()}catch{return!1}})();return c.jsx("div",{role:"alert",className:"flex min-h-screen items-center justify-center bg-slate-100 p-4 text-slate-950",children:c.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-red-300 bg-white p-6 shadow-lg",children:[c.jsx("p",{className:"text-lg font-bold text-red-900",children:"Ocurrió un error inesperado"}),c.jsx("p",{className:"mt-2 text-sm text-slate-700",children:"La aplicación encontró un problema y no puede continuar mostrando esta pantalla. Tus datos guardados en este dispositivo no se han borrado."}),c.jsxs("div",{className:"mt-5 flex flex-col gap-2",children:[c.jsx("button",{type:"button",onClick:this.handleReintentar,className:"min-h-touch rounded-xl bg-emerald-800 px-4 text-sm font-semibold text-white hover:bg-emerald-700",children:"Reintentar"}),c.jsx("button",{type:"button",onClick:this.handleRecargar,className:"min-h-touch rounded-xl border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-800 hover:bg-slate-50",children:"Recargar la aplicación"}),s&&c.jsx("button",{type:"button",onClick:this.handleDescargarRespaldo,className:"min-h-touch rounded-xl border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-800 hover:bg-slate-50",children:"Descargar mis datos por seguridad"})]}),((u=this.state.error)==null?void 0:u.message)&&c.jsxs("p",{className:"mt-4 break-words rounded-lg bg-slate-50 p-2 text-[11px] text-slate-500",children:["Detalle técnico: ",this.state.error.message]})]})})}}const Md={exito:{icono:"check",texto:"text-ok",borde:"border-l-ok"},error:{icono:"danger",texto:"text-critical",borde:"border-l-critical"},aviso:{icono:"alert",texto:"text-warning",borde:"border-l-warning"},info:{icono:"info",texto:"text-info",borde:"border-l-info"}};function oL({item:r,onCerrar:o,onAccion:s}){const u=Md[r.tipo]||Md.info;return c.jsxs("div",{"data-testid":"toast","data-tipo":r.tipo,className:`pnlq-toast rounded-2xl border border-line border-l-4 ${u.borde} bg-surface p-3 shadow-lg`,children:[c.jsxs("div",{className:"flex items-start gap-2.5",children:[c.jsx("span",{className:`mt-0.5 shrink-0 ${u.texto}`,children:c.jsx(en,{name:u.icono,size:20})}),c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsx("p",{className:"break-words text-sm font-semibold text-ink",children:r.mensaje}),r.detalle&&c.jsx("p",{className:"mt-0.5 break-words text-xs text-ink-muted",children:r.detalle})]}),c.jsx("button",{type:"button",onClick:o,"aria-label":Ie("acciones.cerrar"),className:"-mr-1 -mt-1 inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl text-ink-muted hover:bg-surface-alt hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",children:c.jsx(en,{name:"x",size:18})})]}),r.accion&&c.jsx("div",{className:"mt-1 flex justify-end",children:c.jsx("button",{type:"button",onClick:s,className:"inline-flex min-h-touch items-center rounded-xl bg-brand px-4 text-sm font-bold text-brand-fg hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",children:r.accion.etiqueta})})]})}function sL(){const{toasts:r,cerrar:o,activarAccion:s,pausar:u,reanudar:m}=Gd(),f=r.filter(A=>A.tipo==="error"),h=r.filter(A=>A.tipo!=="error"),T=A=>c.jsx(oL,{item:A,onCerrar:()=>o(A.id),onAccion:()=>s(A.id)},A.id),L=c.jsxs("div",{className:"pnlq-toast-viewport pnlq-no-print",onMouseEnter:u,onMouseLeave:m,onFocusCapture:u,onBlurCapture:m,children:[c.jsx("div",{role:"alert","aria-live":"assertive","aria-atomic":"false",className:"pnlq-toast-region",children:f.map(T)}),c.jsx("div",{role:"status","aria-live":"polite","aria-atomic":"false",className:"pnlq-toast-region",children:h.map(T)})]});return typeof document<"u"?tl.createPortal(L,document.body):L}const lL=String.raw`Pestaña 1


DICIEMBRE 2025
	DOMINGO
	LUNES
	MARTES
	MIÉRCOLES
	JUEVES
	VIERNES
	SÁBADO
	

	1
PNTMM 
nforme de limpieza 
Ingresan investigadores ALex
KM atiende turismo
YE mantenimiento


 
PNLQ
LV atiende turismo
JV mantenimiento
JB gestiones e informes, bajan JB y LV y MS con tres vehiculos para dejarlos en Tapanti
ES ingresa mantenimiento


PLE
MS mantenimiento, va a Tapanti llevando los 2 vehiculos


PVM
Mantenimiento
	 2
PNTMM 
KM atiende turismo
YE mantenimiento
FC reunión virtual comisión RLCVS
 

PNLQ
KV en gestiones varias atiende turismo
DT, ES, LV y JV mantenimiento
JB gestiones varias




PLE
MS mantenimiento informes


PVM
CC mantenimiento


	3
PNTMM 
KM atencion de turismo
YE mantenimiento
YC sube a PNLQ
 

PNLQ
FC, YC, JB, Reunión en incopesca 10am
Visita Meryll
DT atencion de turismo
ES mantenimiento
KV gestiones
Visitan ACLAP, Ronal, Roy, entre otros
LV va al taller con el 1100 y regresa por la tarde noche




PLE
MS mantenimiento, sale
FC pernocta LE




PVM
CC y MS mantenimiento gestiones varias
Reunión de la OSR Perez Zeledón ACLAP 


	4
PNTMM 
FC, KM, YC, YE, ME en Asamblea ACC 
AA apoya atendiendo turismo, luego sale a LE

PNLQ
ES, JB, GG, JV, LV, KV, DT en Asamblea ACC. Sale Meryll con Josue a la asamblea.
MH apoya atiende visitación




PLE
Asamblea ACC 
FC va hacia PNLQ y luego regresa en la noche 




PVM
CC y MS Asamblea ACC
MH apoya PNLQ 
	5
PNTMM 
KM atiende turismo, planificación viáticos para operativo de fin de año
AA y YE ingresan por la tarde trayendo postes de LE, YE sale libre
AA va a Palomo para transporte de obsequios a indígenas en VM
GG, ME, FC, ES, ingresan provenientes de PNLQ, YC se queda en Cartago
GG sale de regreso


PNLQ
GG, ES mantenimiento
YE ordena bodega.
KV atiende turismo por la mañana
YC y ME gestiones varias
MH, CC, MS, FC, YC, ME  en reunión en PNLQ por la tarde sobre el proceso de traspaso de VM


PLE
FC reunión virtual nuevo RLCVS
AA mantenimiento y carga postes en el vehículo, trae regalos para niños y se los entrega a MH




PVM
MH, CC, MS, salen a hacer vueltas, luego en reunión en PNLQ por la tarde sobre el proceso de traspaso de VM. MH luego coordina para entrega regalos a niños en VM

	6
PNTMM 
FC y ME gestiones varias
ES mantenimiento, revisión del 660, motosierras.
YC atiende turismo
KM gestiones varias



PNLQ
LV atiende turismo
GG y AA patrulla RBCV




PLE
AA apoya PNLQ




PVM
MH mantenimiento
CC sale

	7
PNTMM 
ME atencion visitantes
FC gestiones varias
ES, KM, YC, mantenimiento de senderos con motosierras
 

PNLQ
GG atiende visitantes
LV gestiones informes




PLE
AA mantenimiento, sale  por incidente
DT pernocta




PVM
MH mantenimiento sale
GG pernocta
	8
PNTMM 
FC y YC Reunión administradores 
ME atencion visitantes
GG ingresa a Tapanti a revisar cámaras con ES



PNLQ
KV-Cita médica y elaboración de informes
LV atiende turismo
GG va a Tapanti a revisar cámaras


PLE
AA  sale por incidente
DT pernocta


PVM


	9
PNTMM 
FC y YC Reunión administradores
ME atencion visitantes
GG y ES sale a la sede a llevar parlante,




PNLQ
JV reunión turismo
GG sale a la sede a llevar parlantes
KV atiende turismo
ES al cuidado del puesto




PLE
DT pernocta
sale a llevar parlante al Guarco


PVM
Covirena Alejandro pernocta
	10
PNTMM 
ME Reunión comisión de emergencias en Bomberos paraíso
FC reunión virtual todo el día CRLVS 
YC Reunión administradores
JB gira RT

PNLQ
ES mantenimiento y sale
GG va a la sede a recoger uniformes
JB ingresa informes gira RT


PLE
MS ingresa atención de visado


PVM
ES pernocta


	11
PNTMM 
ME cambio aceite vehículo, mantenimiento de senderos con YE
YE ingresa
YC atiende turismo
FC reunión virtual todo el día CRLVS 
 

PNLQ
JB gira RT
KV y DT atienden turismo


PLE
MS mantenimiento




PVM
ES pernocta


	12
PNTMM 
FC reunión virtual todo el día CRLVS 
ME gestión, atiende turismo
YE mantenimiento
GG y JV conteo de murciélagos, con grupo

PNLQ
KV Reunión de EA y CB presencial
JB gira RT
DT atiende turismo
JV ingresa mantenimiento
GG apoya PNLQ y PNTMM conteo murciélagos


PLE
MS mantenimiento, informes


PVM
CC ingresa mantenimiento
	13
PNTMM 
ME Atencion Turismo y seguimiento a actividades administrativas
YE mantenimiento va a LE
GG sale con JV y YE

PNLQ
JB atiende turismo




PLE
MS mantenimiento




PVM
CC mantenimiento


	14
PNTMM 
ME atiende turismo, sale
YE llega con MS hace labores de mantenimiento
 

PNLQ
JB atiende turismo


PLE
MS mantenimiento


PVM 
4 investigadores con el funcionario Carlos Viquez
CC mantenimiento


	15
PNTMM 
FC reunión CT
YE atiende turismo 
YC informes 

PNLQ
JV atiende turismo mantenimiento
ES ingresa en la noche




PLE
MS visado, mantenimiento




PVM 
4 investigadores con el funcionario Carlos Viquez
CC mantenimiento
MSG SANES, inventarios
 
	16
PNTMM 
YE atencion turismo 
YC informes voluntariado pendientes
FC reunión RLCVS
 



PNLQ
JV y ES, DT  II campamento de RFG
KV atiende turismo
FC pernocta




PLE
MS inventario con MSG




PVM 
4 investigadores con el funcionario Carlos Viquez
CC traslada a MSG a LE

	17
PNTMM 
Pernocta pantera y gente de murcielagos 
YE mantenimiento 
YC atencion turismo/reunion con RALEight/SANES 
KM mantenimiento 



PNLQ
JV y ES , DT  II  campamento de RFG
KV atiende turismo
Pernocta GP 


PLE
MS traslado a la sede para entregar visado y recoger marchamos
GP mantenimiento 


PVM 
MH organización curso 
CC sale a cita médica

	18
PNTMM 
Practica ICE 10 pax
YC atención turismo 
YE practica con el ICE
KM SEMEC PNTMM
FC reunion RLCVS, INCOPESCA 11am, covirenas 18.15pm


PNLQ
JV y ES, DT  II campamento de RFG, regresan al puesto por la tarde
KV atiende turismo/inicia SEMEC 


PLE
MS SEMEC LA
CC Recoge a GP en PNLQ y patrullan cerros/inicia SEMEC VM
GP patrulla cerros con CC


PVM 
MH revisión de equipo para capacitación
CC en LE 
	19
PNTMM 
YE, YC, ME FC reunion PNLQ
Covirenas
 

PNLQ
JV sale
ES, DT, KV,   reunion
JB apoyo a OSLS
Ciclistica


PLE
MS sale
CC reunion PNLQ
GP al cuidado del puesto




PVM 
MH CUEFA, brigada Cerro de la Muerte
MS y CC reunion en PNLQ
CC en LE



	20
PNTMM 
YE, YC,  Diego COVIRENA, Alto tractor Pejivalle
YC realiza informe del patrullaje  
ME recoge a YE y YC 
KM Atencion visitantes




PNLQ
ES y CC Providencia, RBCV
JB  atencion turismo 
ES: Realiza el informe
ingresa Alex investigador de anfibios con 4p




PLE
CC patrullaje Providencia con ES, GP


PVM 
MH CUEFA, brigada Cerro de la Muerte
	21
PNTMM 
ME atencion visitantes
YE y YC y KM mantenimiento patrullaje
 

PNLQ
JB atencion turismo




PLE
YC, JB, YE y, ES La Esperanza
ME: Recoge
JB Realiza el informe
CC sale




PVM 
MH CUEFA, brigada Cerro de la Muerte 



	22
PNTMM 
FC gestión
YC informes
KM informes
ME atencion de turismo
YE mantenimiento sale 

PNLQ
JB y GP  Ciénagas, Los Calvo, Damita
GP realiza el informe 
DT informes
KV atiende turismo




PLE
GP patrullaje





PVM 
MH mantenimiento
 
	23
PNTMM 
FC gestión apoya PNLQ
ME atencion turismo
KM mantenimiento
 

PNLQ
FC apoya PNLQ
DT informes 
JB y KV: Los Cerros y Reserva Biológica
KV. Realiza el informe
ES mantenimiento


PLE
GP mantenimiento





PVM 
 GP y MH La Damita, Las Duelas, Guayabillos, Macho Gaff
MH realiza informe

	24
PNTMM 
ME atencion turismo
KM mantenimiento
 

PNLQ
FC gestión y sale
JB, MH y GP Retén en Carretera 
MH realiza informe 
DT atencion turismo
KV informes
JV ingresa por la noche




PLE
GP mantenimiento





PVM 
MH realiza informe

	25
PNTMM 
ME atencion turismo
KM mantenimiento
 

PNLQ
JB, MH y GP RBCV
GP realiza informe 
JV atiende turismo




PLE
GP RBCV





PVM 
MH RBCV



	26
PNTMM 
ME Atencion Turismo A Administrativas
KM, Mantenimiento
3 estudiantes TCU 
 

PNLQ
 JV, JB, GP  Los 3000
JV realiza informe 
DT mantenimiento
KV atiende turismo


PLE
GP patrullaje los 3000





PVM 
MH mantenimiento

	27
PNTMM 
ME atencion turismo
KM mantenimiento
3 estudiantes TCU
 

PNLQ
JV, GP, l Retén 
Jv realiza el informe
JB atencion turismo


PLE
MS y GP Reten





PVM 
MH Retén
CC ingresa manteminiento
	28
PNTMM 
ME atencion turismo y sale
KM mantenimiento
3 estudiantes TCU
 

PNLQ
MS y JV Cerros y RBCV
MS realiza el informe 
JB atencion turismo




PLE
MS Cerros y RBCV
GP sale




PVM 
CC Cerros y RBCV
MH sale


	29
PNTMM 
YC mantenimiento atencion de visitantes
FC gestiones varias
3 estudiantes TCU
 

PNLQ
 JV, MS y CC y ES Guayabillos Macho Gaff
CC realiza el informe 
DT mantenimiento
KV atencion rurismo




PLE
MS Guayabillos Macho Gaff




PVM 
CC patrullaje
 
	30
PNTMM 
YC mantenimiento atencion de visitantes
FC gestiones varias
3 estudiantes TCU
 

PNLQ
MS, JV ; ES, CC Providencia
MS realiza el informe 
CC apoya PNLQ
DT mantenimiento
KV atencion rurism


PLE
MS Providencia




PVM 
CC apoya PNLQ

	31
PNTMM 
YC y covirena Alto tractor, embalse el llano
YC realiza el informe
FC gestiones varias atención de visitantes  

PNLQ
MS, ES CC RBCV
MS realiza el informe 
DT mantenimiento
KV atencion rurism


PLE
MS RBCV




PVM 
CC en RBCV

	

	

	




ENERO 2026
	DOMINGO
	LUNES
	MARTES
	MIÉRCOLES
	JUEVES
	VIERNES
`,cL=String.raw`	SÁBADO
	

	

	

	

	1
PNTMM
YC mantenimiento atencion de visitantes
FC gestiones varias




PNLQ
MS y CC Cerros
CC realiza el informe 
ES atiende turismo




PLE
MS y CC Cerros




PVM
MS y CC Cerros
	2
PNTMM
Exoneración 30 pax guías scouts
YC patrullaje en PANU santa ana con Mahyar se posterg{o
FC mantenimiento atencion de visitantes




PNLQ
MS, ES  y CC Reten
MS realiza informe 
KV atiende turismo
DT mantenimiento


PLE
MS, ES y CC Reten




PVM
CC va a cambio de aceite


	3
PNTMM
YC covirena Embalse el llano, guabata
YC realiza el informe
FC mantenimiento atencion de visitantes


PNLQ
MS y CC Providencia
CC realiza el informe 
JB atención turismo/informes pendientes PPC operativo especial 
MS, ES, KV y DT comisión para el caso de AA


PLE
MS informes pendientes
comisión para el caso de AA


PVM
CC comisión para el caso de AA
	4
PNTMM
YC mantenimiento atencion de visitantes
FC gestiones varias




PNLQ
JB, MS y ES RBCV
JB realiza atiende turismo




PLE
MS y ES
RBCV




PVM
CC informes 
	5
PNTMM
YC  informe operativo especial con JB
FC mantenimiento atencion de visitantes
Reunión RLCVS
KM informe PPC




PNLQ
JB informe operativo especial con YC 
ES mantenimiento
DT informes y mantenimiento
KV atencion de turismo


PLE
GP mantenimiento
MS mantenimiento informes sale


PVM
MH ingresa mantenimiento
CC informes sale 


	 6
PNTMM
FC mantenimiento atencion de visitantes
Reunión RLCVS




PNLQ
JB informe especial con YC 
ES mantenimiento
KV y ES informes y mantenimiento separación de residuos
DT atencion de turismo




PLE
GP mantenimiento




PVM
MH mantenimiento e informes



	7
PNTMM
FC mantenimiento atencion de visitantes
Reunión RLCVS
KM ingresa mantenimiento




PNLQ
KV, DT y ES van a PZ con reciclaje
JV ingresa
JB atencion de turismo y va a Tapanti




PLE
GP mantenimiento




PVM
MH mantenimiento e informes 
	8
PNTMM
FC Reunión RLCVS
KM atencion de visitantes
JB gestiones con KM}
3 estudiantes TCU


PNLQ
DT mantenimiento y atencion al turismo
KV informes y viaticos y luego cita medica
JV mantenimiento
LV ingresa




PLE
GP mantenimiento




PVM
MH mantenimiento e informes
	9
PNTMM
FC Reunión RLCVS
KM atencion de visitantes
JB apoya Tapanti
3 estudiantes TCU


PNLQ
KV, JV y GP patrullaje Cerros
LV atiende turismo
DT mantenimiento 




PLE
KV, JV y GP patrullaje Cerros 




PVM
MH mantenimiento e informes



	10
PNTMM
KM atencion de visitantes
3 estudiantes TCU




PNLQ
JB atiende turismo sale
LV, JV, DT entrenamiento MIF en PANU Laren Ross
GP atiende turismo
JB informes atiende turismo


PLE
GP apoya PNLQ atiende turismo




PVM
MH mantenimiento y sale
JV pernocta
	11
PNTMM
KM atencion de visitantes




PNLQ
JV y LV atiende turismo






PLE
GP mantenimiento apoyo PNLQ




PVM
LV pernocta 
	12
PNTMM
FC Reunión RLCVS
KM atencion visitantes
ME reunion feria biocultural




PNLQ
LV atención de visitantes
KV y JV informe denuncia
SEMEC


PLE
GP mantenimiento atencion investigadores




PVM
SEMEC
JV pernocta



	13
PNTMM
FC Reunión RLCVS
YC sanes/pendientes/SEMEC/turismo
ME pendientes 
KM turismo/sale 


PNLQ
DT informes en LE
JV y LV mantenimiento
KV atencion turismo




PLE
DT informes
GP mantenimiento




PVM
CC ingresa mantenimiento
	14
PNTMM
FC Reunión RLCVS
YC reunión con Mariali tema SANES/turismo 
ME reunión comisión de emergencias paraíso/administrativos/turismo


PNLQ
JV y DT reciclaje PZ
JB atencion turismo
LV informes


PLE
GP mantenimiento




PVM
CC mantenimiento
	15
PNTMM
TCU 2 PAX
YC SANES/PP 
voluntariado/reunión personal 
ME reunión tema puente en municipalidad  
FC ingresa va a PNLQ, reunion RLCVS


PNLQ
Reunión personal 
KV planifica actividades EA de fechas efemérides y próximos 3 meses para todo el bloque, incluir escuelas del humo y pejivalle y colegio ambientalista buscar contactos 
DT apoyo a Mariali con SANES/medidas de parqueo 
JV apoyo a Mariali con SANES/medidas de parqueo 
LV atención turismo
ES va a Tapanti con ME


PLE
GP Reunión personal 


PVM
CC mantenimiento 
	16
PNTMM 
TCU 2 PAX
FC , reunión RLCV
ME ES y YC mantenimiento de senderos



PNLQ
LV atiende turismo
3 PAX UCR voluntarios
DT mantenimiento
KV atencion turismo
JV, JB sabana indio




PLE
GP mantenimiento




PVM
CC mantenimiento
	17
PNTMM
ASVO 2 pax
TCU 3 PAX
YC trabajos en baranda
ES trabajos en baranda 
ME trabajos en baranda


PNLQ
LV atiende turismo
3 PAX UCR voluntarios
JV y JB apoyan Tapanti


PLE
GP y CC patrullaje 




PVM
GP y CC patrullaje
	18
PNTMM
ASVO 4 PAX
TCU 3 PAX
YC, JB y JV apoyan mantenimiento Mirador
FC informes




PNLQ
LV atiende turismo
3 PAX UCR voluntarios




PLE
GP  lleva vehículo a VM y sale con apoyo de CC




PVM
CC mantenimiento
	19
PNTMM
ASVO 1 PAX
TCU 3 PAX
YC y ES mantenimiento en sendero MIrador
ME atencion turismo


PNLQ
JB informes
KV informes
JV atención turismo
FC pernocta


PLE
MS ingresa recoge vehículo y compu en PNLQ
DT en LE
FC informes


PVM 
CC mantenimiento lleva compu a PNLQ
	20
PNTMM
TCU 3 PAX
YC JB ES patrullaje Calle Sanchez 
ME atencion turismo 
FC reunion con investigadora
informes


PNLQ
JB apoya Tapanti
DT en LE
KV atención turismo
MS informes 


PLE
MS y CC patrullaje Providencia




PVM
MS y CC patrullaje Providencia
MS apoya PNLQ
	21
PNTMM
FC informes
YCy ES  mantenimiento sendero Mirador
ES va con MS a PNLQ
ME atencion turismo y FBT




PNLQ
KV y JB reciclaje PZ
DT atencion turismo




PLE
MS en ACC recoge suministros de armas y parlante y pasa por Tapanti por Errol




PVM
CC reunion en Tapanti
	22
PNTMM
YC informes, sale
ME atencion turismo y FBT




PNLQ
DT mantenimiento senderos
KV atencion turismo
JB inspeccion con MS y ES




PLE
MS inspeccion con JB




PVM
CC mantenimiento áreas verdes 
	23
PNTMM
ME atencion turismo sale
pernocta covirena




PNLQ
KV gira EA en Cartago
ES mantenimiento con 2 TCU UCR
2 voluntarios UCR
JB y MS patrullaje






PLE
MS y JB patrullaje




PVM
CC mantenimiento áreas verdes 
Ingresan 8 voluntarios UCR
	24
PNTMM
Diego Quiros atención turismo 
YE ingresa revisa senderos 
TCU atencion de turismo y tema rótulos 




PNLQ
MS y DT , ES MIF en Santa Ana
JB atención turismo
2 TCU UCR
10 voluntarios UCR




PLE
MS y DT , ES MIF en Santa Ana




PVM
CC sale
Pernocta voluntario 
8 voluntarios UCR
	25
PNTMM
YE atención de turismo/toma fotos a voluntarios 
1 voluntario apoya atencion de turismo 
2 voluntarios trabajan en rótulos 


PNLQ
ES atiende turismo
2 TCU UCR
10 voluntarios UCR




PLE
MS mantenimiento




PVM
8 voluntarios UCR salen
Pernocta Alex brigadista
 


	26
PNTMM
FC gestiones varias
1 voluntario atencion turismo 
YE recorrido oropendola con voluntarios y atiende turismo
 


PNLQ
2 voluntarios UCR
DT atiende turismo, informes y mantenimiento
KV informes y atiende incidente de la danta 
LV ingresa atiende turismo


PLE
MS atiende incidente con la danta con KV




PVM 
Pernocta Alejandro
 
	27
PNTMM
FC gestiones varias




PNLQ
2 voluntarios UCR
LV mantenimiento
KV atiende turismo informa dantas y PBAE




PLE
DT informes sale a Tapanti 
MS mantenimiento sale
GP mantenimiento






PVM
Pernocta Errol
	28
PNTMM
FC, YC, DT y YE gestiones en Liberia
Covirena apoya Tapanti




PNLQ
2 voluntarios UCR
KV atiende turismo, informe danta y PBAE
LV mantenimiento 
DT gira




PLE
GP mantenimiento




PVM
Ingresan investigadores dantas 4p

	29
PNTMM
FC 




PNLQ
2 voluntarios UCRR
KV informe danta y PBAE, atiende turismo
LV y DT gira
GP atiende turismo PNLQ




PLE
GP atiende turismo PNLQ









PVM
nvestigadores dantas 4p

	30
PNTMM
FC 




PNLQ
2 voluntarios UCR
KV Reunión CBLS


PLE











PVM
nvestigadores dantas 4p
Alex pernocta




	31
PNTMM
M3E: 




PNLQ






PLE






PVM 
ES  pernocta

	
















FEBRERO 2026
	DOMINGO
	LUNES
	MARTES
	MIÉRCOLES
	JUEVES
	VIERNES
	SÁBADO
	1
PNTMM
Elecciones
FC, YC, ME, YE




PNLQ
LV Elecciones
ES pernocta




PLE
GP Elecciones apoya PNLQ




PVM
CC ingresa
 
 
	2
PNTMM
FC YC JB capacitación VDA
ME turismo y feria
ME turismo 




PNLQ
capacitación VDA
3 voluntarios UCR
ES bajan carro a cambio de aceite


DT bajan carro a cambio de aceite


LV atencion turismo/informes ventas 
KV atencion turismo/informews ventas 




PLE
MS lleva carro a taller PZ
GP mantenimiento/acomodo bodega




PVM
CC entra 
 
	3
PNTMM
FC YC JB capacitación VDA
ME capacitación MyOffice




PNLQ
capacitación VDA
3 voluntarios UCR
DT LV KV ES capacitación MyOffice




PLE
MS GP capacitación MyOffice




PVM
MH Proyecto lideres
CC capacitación MyOffice 
 
	4
PNTMM
FC YC JB capacitación VDA
KM: Juicio Juzgado Contravencional Paraíso 13:30
ME turismo y feria




PNLQ
Jb capacitación VDA
3 voluntarios UCR
KV CME Dota
LV audiencia Paraiso
MS y DT van a la sede


PLE
MS y DT van a la sede a traer suministros




PVM
CC mantenimiento
 
	5
PNTMM
FC YC JB capacitación VDA
ME turismo y feria






PNLQ
JB capacitación VDA
3 voluntarios 
ES mantenimiento ronda VM 
KV reunion PGAI
LV atiende turismo




PLE
MS y GP, DT mantenimiento ronda VM




PVM
CC mantenimiento ronda
 
	6
PNTMM
FC YC JB capacitación VDA
ME turismo y feria




PNLQ
`,uL=String.raw`JB capacitación VDA
3 voluntarios UCR
ES mantenimiento ronda VM
KV atiende turismo
DT traslado a tapanti y cartago


PLE
MS y GP  mantenimiento ronda VM




PVM
CC Mantenimiento ronda 
 
	7
PNTMM
ME turismo y feria




PNLQ
JB atiende turismo






PLE
KV y DT Taller turismo comunitario
MS mantenimiento


PVM
CC mantenimiento
 
	8
PNTMM
ME atencion turismo




PNLQ
JB apoyo a Panthera en RBCV
ES atiende turismo
Carrera Providencia




PLE
MS apoyo a PNLQ




PVM
CC mantenimiento
 
	9
PNTMM
ME atencion turismo
JV mantenimiento
FC ingresa va a PNLQ


PNLQ
3 voluntarios UCR
JB gestion informes
KV informe bandera azul
DT atiende turismo
JV ingresa va a Tapanti


PLE
pernocta FC
MS informes y sale


PVM
CC mantenimiento
 
	10
PNTMM
FC reunion ADI trinidad 3pm Feria Danta
JV gestion con voluntarios


PNLQ
3 voluntarios UCR
reunion ADI trinidad 3pm Feria Danta
KV atiende turismo
ES mantenimiento traslado de equipo en VM y apoyo a Panthera
JB informes sale
LV mantenimiento atiende turismo


PLE
AA y GP y FC traslado de equipo de VM
DT informes


PVM
pernocta FC
AA y GP y FC traslado de equipo de VM
 
	11
PNTMM
Reunión CME
ME: Juicio Juzgado Contravencional Paraíso 13:00
JV atencion turismo
salen voluntarios


PNLQ
3 voluntarios UCR
KV atiende turismo bandera azul


PLE
AA y GP y FC ES traslado de equipo de VM




PVM
pernocta voluntario
AA y GP FC ES traslado de equipo de VM
 
	12
PNTMM
FC Comite tecnico
JV atencion turismo




PNLQ
3 voluntarios UCR
LV atiende turismo
DT y ES mantenimiento
KV gestión




PLE
AA y GP traslado a Tapanti




PVM
pernocta GP
 
	13
PNTMM
FC Comite tecnico
JV atencion turismo




PNLQ
3 voluntarios UCR
DT atiende Camilo y al turismo
KV atiende delegación REDD+
ES mantenimiento traslado de equipo de VM




PLE
AA y GP traslado de equipo de VM




PVM
AA y GP traslado de equipo de VM
pernocta voluntario
 
	14
PNTMM
FC atencion turismo
JV traslado a PNLQ y sale




PNLQ
3 voluntarios UCR
LV atiende turismo


PLE
AA y GP mantenimiento




PVM
pernocta AA
 
	15
PNTMM
FC gestión y atención de visitantes
ingresan 3p TCu UCR




PNLQ
3 voluntarios UCR
LV atiende turismo




PLE
GP y AA patrullaje Ceros
Traslado a Tapanti GP sale


PVM
Pernocta voluntario
 
	16
PNTMM
3p TCu UCR
FC gestión, reunion ADI Trinidad
YE ingresa mantenimiento


PNLQ
3 voluntarios UCR
DT informes visitación y mantenimiento de senderos y puesto
LV mantenimiento de senderos y puesto
KV gestión y atención visitantes, KV y LV reunión ADI Trinidad


PLE
AA mantenimiento


PVM
CC mantenimiento
MS gestion para mantenimiento de la ronda con voluntarios
 
	17
PNTMM
3p TCu UCR
YE atencion turismo
FC sale dias libres


PNLQ
3 voluntarios UCR
KV atencion turismo
LV mantenimiento
JB informes


PLE
DT gestión
AA mantenimiento


PVM
CC mantenimiento 
 
	18
PNTMM
3p TCu UCR
ME: Ingresa, atiende un asunto en la Zup Reunion Orosi
YE atencion turismo


PNLQ
3 voluntarios UCR
KV atencion turismo
LV mantenimiento
JB informes


PLE
AA mantenimiento


PVM
CC mantenimiento 
 
	19
PNTMM
3p TCu UCR
ME:Reunión con  ICE,Camilo,Profe Cristian CATIE.Feria
YE atencion turismo


PNLQ
3 voluntarios UCR
KV atencion turismo
LV mantenimiento
JB informes


PLE
AA mantenimiento


PVM
CC mantenimiento 
 
	20
PNTMM
3p TCu UCR
ME:feria/administrativos 
YC pendientes
PNLQ
YE atencion turismo
3 voluntarios UCR




PNLQ
3 voluntarios UCR
KV atencion turismo
LV mantenimiento
JB informes


PLE
GP mantenimiento


PVM
CC mantenimiento 
 
	21
PNTMM
3p TCu UCR
ME:voluntariado con TCU en mirador 
Yeison informes Voluntariado y valoracion de daño ambiental 
Ye atención de turismo 


PNLQ
3 voluntarios UCR
KV y DT Taller turismo comunitario
LV atencion turismo


PLE
GP mantenimiento


PVM
CC mantenimiento 
 
	22
PNTMM
ME:revision agua/otros
YC valoracion de daño 
YE atencion de turismo 




PNLQ
3 voluntarios UCR
LV atencion turismo




PLE






PVM
CC mantenimiento 
 
	23
PNTMM
ME: temas feria con TCU
YE: atencion de turismo
YC valoracion/mantenimineto agua y sendero con ES
JV acompaña a franklin tema murcielagos 




PNLQ
3 voluntarios UCR
KV 




PLE






PVM
CC mantenimiento 
 
	24
PNTMM
ME:Reunion Orosi Detalles Feria, subsanar permiso sanitario dejar documento MISA
JV:Atención Turismo
YC;Informe valoracion de daño
YE: mantenimiento




PNLQ
3 voluntarios UCR
DT informes 
KV coordinación manejo de la efectividad
LV sale


PLE
GP mantenimiento


PVM
CC mantenimiento 
	25
PNTMM
FC ingresa Reunion INA 9am
ME:Actividades Feria B. Reunion Final Feria
YC:Continua Informe,otros
JV:Voluntariado UCR
FC:Asuntos varios Administrativos
YE: mantenimiento


PNLQ
3 voluntarios UCR
DT, KV y JV  capacitacion expedientes SE


PLE
AA mantenimiento
GP mantenimiento 




PVM
MS capacitación expedientes SE
CC mantenimiento 
 
	26
PNTMM
YC voluntariado/valoracion 
JV voluntariado 
FC varios administrativos
ME feria y otros




PNLQ
3 voluntarios UCR
ES bajan reciclaje a perez y recogen cosas de la feria 
DT bajan reciclaje a perez y recogen cosas de la feria
KV atiende turismo/presentacion manejo de la efectividad


PLE
AA tema carreta y recoge inflables con vitor julio 
GP tema carreta recoge inflables con Victor julio


PVM
CC ayuda a AA tema carreta 
	27
PNTMM
ES transporte de materiales para la Feria
FC firma periodo de prueba y va a recoger el VIR 
ME:Recibe menaje UCR,ICE,CCDR, asuntos varios
Ingresa Meryll Arias




PNLQ
3 voluntarios UCR
KV atencion turismo informe




PLE
AA mantenimiento


PVM
Ingreso 2 investigadoras UNED
Alex de la Brigada pernocta
CC sale dias libres
 
	28
PNTMM
ME, YV, ES, FC :Feria Biocultural 
Meryll Arias presente 




PNLQ
3 voluntarios UCR
GP apoyo PNLQ 
Pernoctan investigadores Panthera
DT, KV y AA apoyan Feria Biocultural Tapanti


PLE
GP apoyo PNLQ 
AA apoyan Feria Biocultural Tapant




PVM
2 investigadoras UNED
Roy de la Brigada pernocta 
 
	
























MARZO 2026
	DOMINGO
	LUNES
	MARTES
	MIÉRCOLES
	JUEVES
	VIERNES
	SÁBADO
	1
PNTMM
ME, YV, ES, FC :Feria Biocultural 


PNLQ
3 voluntarios UCR
GP apoyo PNLQ 
Pernoctan investigadores Panthera
DT, KV y AA apoyan Feria Biocultural Tapanti


PLE
GP apoyo PNLQ 
AA apoyan Feria Biocultural Tapanti


PVM
2 investigadoras UNED
Pernocta Alex de la Brigada
 
	2
PNTMM
ME:Entrega de menaje UCR,CCDR, Sara,Nina Otros
FC atiende turismo
ES y JV salen en el VIR al PNLQ


PNLQ
3 voluntarios UCR
Visita de influencer italiana
JB atiende turismo
ES y JV salen dias libres
AA entrega materiales y equipo
Pernoctan investigadores Panthera




PLE
AA y GP  entrega materiales y equipo al PNLQ
AA va a cambio de aceite a PZ 2pm




PVM
Pernocta Alex de la Brigada
 
	3
PNTMM
FC Reunión CxS proyectos
ME:Reunion INA paraiso
Reunion muni,ICE
FC sale a PNLQ


PNLQ
3 voluntarios UCR
JB y AA llevan al VIR a OSLS
KV atiende turismo
LV mantenimiento




PLE
JB y AA llevan al VIR a OSLS




PVM
FC pernocta
 
	4
PNTMM
ME:Archivar documentos , asuntos administrativos




PNLQ
3 voluntarios UCR
JB, LV, AA y FC apoyo liquidacion incendio en Abejonal




PLE
AA  apoyo liquidacion incendio en Abejonal




PVM
FC pernocta
 
	5
PNTMM
ME YC, FC :Evaluación efectividad Tapanti en ADI Orosi
AA apoya atencion visitantes
Ingresa covirena 




PNLQ
3 voluntarios UCR
MS apoya atencion visitantes
KV, DT, JB y AA van a Tapanti, efectividad de manejo


PLE
AA apoya PNTMM atencion turismo




PVM
FC pernocta
 
	6
PNTMM
ME, YC, FC:Evaluación efectividad en Asada Cañon
Apoya covirena atencion visitantes


PNLQ
DT, KV, JB, ES, Evaluación efectividad Quetzales en Asada
3 voluntarios UCR salen
CC apoya atencion turismo


PLE
DT pernocta
AA sale libre


PVM
CC apoya atencion visitantes en PNTMM
 
	7
PNTMM
PRESENTACIÓN ALEX ADELANTO DE PROYECTO HERPETOFAUNA TAPANTI 4:00 PM
YC valoración de daño 
JB turismo/limites


PNLQ
LV turismo 


PLE
DT pernocta




PVM
CC mantenimiento 
 
	8
PNTMM
JB casos valoración de daño con YC/turismo




PNLQ
LV baja apoyar tapanti 


PLE






PVM
CC apoya turismo pnlq 
	9
PNTMM
YC valoración 
LV informe para funcorco de actividade manejo de la efectividad




PNLQ
JB pendientes
KV informe funcorco sobre manejo de la efectividad PNLQ


DT recoge 904 en PZ con CC
PLE




PVM
CC recoge 904 en PZ con DT
 
	10
PNTMM
LV atención turismo


PNLQ


JB,KV, DT yES mantenimiento barajas 


PLE






PVM
CC apoyo pnlq 
MS apoyo pnlq
MH capacitación ACLAP
 
	11
PNTMM
Reunión CME


LV atención turismo/sacar basura a purisil 6:30 
YC pendientes 


PNLQ


JB apoyo PNE/sale 
ES Va secretaria con MS y a oficina de SJ a recoger refri 
DT atención de turismo/informes de ventas
KV van a dejar a toño a ACLAP coordina con CC/informes de ventas con DT




PLE
MS va a secretaria tema de computadora y monitor/van a recoger refri a oficina de SJ 




PVM
MH capacitación ACLAP
CC van a dejar toño a ACLAP coordina con KV
Mariali apoyo en valoración de daño a YC 
	12
PNTMM
Reunión Convenio Incopesca 10am
YC pendientes/turismo 
LV patrullaje con ES/MS y suben  PNLQ
PNLQ
DT Libre acumulado
`,dL=String.raw`KV programar actividades de EA tomar en cuenta escuelas del humo de peji y el liceo de peji/atención de turismo
ES patrullaje orosi/recoge a LV
JV apoyar a diana tema excel de prevenciones administrativas/turismo




PLE
MS trabaja en excel de prevenciones administrativas 




PVM
MH capacitación ACLAP
CC mantenimiento 
Mariali pendientes con YC
	13
PNTMM
Asominae
YC pendientes 
FC entra


PNLQ
Asominae
DT asominae
LV asominae
KV asominae
ES mantenimiento barajas
JV atención turismo/excell temas prevenciones


PLE
Asominae
MS asominae


PVM
Asominae
CC patrullaje con MH
MH patrullaje con CC 
Patrullar lugares potenciales donde sacan palmito/Macho gaff/la Damita/guayabiyos/la Esperanza/empalme 
	14
PNTMM
Visita TEC 34 estudiantes charla
FC


PNLQ
MH turismo
ES patrulljae con MS a sabanas del indio/supervisión labores del ice/ demas problematicas del sitio
JV patrullar con CC reserva CV (laguna y esferas)/cerro asunción por la tarde
JV asiste a reunión con montañistas 4 pm ADI la esperanza


PLE
MS patrulljae con ES a sabanas del indio/supervisión labores del ice/ demas problematicas del sitio 




PVM
MH apoya turismo PNLQ 8:00 am
PPC
CC patrullar con JV reserva CV (laguna y esferas)/cerro asunción posteriormente


	15
PNTMM
FC turismo otros




PNLQ
CC atiende turismo 
JV patrulla con MH al sendero Villa Mills y al sitio VM




PLE
MS patrullaje en orosio Jaular con ES






PVM
CC apoya turismo PNLQ 8:00 am
MH patrullaje con JV 
Pernocta Alejandro 
	16
PNTMM
FC Reunión con ACLAP caso VM 8am en San José
ME PGAI 9 a 3pm Parque Ecológico
ES atiende turismo




PNLQ
KV PGAI 9 a 3pm Parque Ecológico
DT gira diplomado
JV atiende turismo


PLE
MS mantenimiento informes




PVM
Reunión ACLAP
MH capacitación ACOPAC
Pernocta Alex
 
	17
PNTMM
ME atiende turismo
ES mantenimiento
FC reunion con la dirección y administradores asunto reestructuración ACC 


PNLQ
DT gira diplomado
JB atención turismo
JV atiende periodistas
JB pernocta en LE
MS apoya PNLQ


PLE
Pernocta JB
MS apoya PNLQ




PVM
MH capacitación ACOPAC
Pernocta Alex


	18
PNTMM
FC presentación RLCVS en la UNA 2pm
FC atención de turismo
ME y ES van a la parte alta




PNLQ
DT gira diplomado
JB gira IRT
JV atención turismo,




PLE
Pernocta ES




PVM
MH capacitación ACOPAC
Pernocta ME
 
	19
PNTMM
YC atención de turismo
FC gestiones varias





PNLQ
KV Conversatorio virtual y atención de turismo
DT gira diplomado
JB gira IRT
JV reunion con CATIE en VM


PLE






PVM
Visita ICADS charla sobre relación con la comunidad
MH capacitación ACOPAC
Dayanna revisa inventarios con Mariali 
ME atiende inventarios con la DAF
JV reunion con ICADS CATIE
Pernocta ME
 
	20
PNTMM
FC atención de turismo, ingresa Gustavo Jimenez con profesores de la UCR para ver el tema de capacidad de carga
Ingresa LuisDa covirena por la noche
YC informes y sale para el PNLQ




PNLQ
KV Proyecto NBSAP y atiende a investigador 
DT gira diplomado
JB gira IRT
MSa atiende turismo
YC pernocta en PNLQ 
JB retiran computadora en secretaria llevar compu vieja 
JV retira computadora en secretaria llevar compu viej


PLE
2 personas de cedarena pasan la noche




PVM
Reunión ACLAP
Pernocta ME
 
	21
PNTMM
FC atención de turismo,
LuisDa covirena apoyo PNTMM




PNLQ
Voluntariado ASVO/davivienda 40 pax 
JB atiende con YC 
MSa atiende turismo


PLE
ME capacitacion en la ADI Esperanza
Pernocta JB




PVM
Pernocta ES


 
	22
PNTMM
YC turismo/ varios 
ME mantenimiento vehículos/turismo
Apoyo Covirena Luis David 




PNLQ
JB pendientes PpC 
LV turismo 


PLE


MS ingresa apoya tema PpC hablado BC in YC 


PVM


 Pernocta ES
	23
PNTMM
Presentación puente MOPT salon comunal Palomo 5pm
FC retira compu llevar compu vieja 1pm
JB
YC




PNLQ
DT gira diplomado
LV retira compu secretaria llevar compu vieja 
KV retira compu secretaria llevar compu vieja 8am
JB atiende turismo






PLE


MS traslada a compañeras a secretaria/retira computadora


PVM


 Pernocta ES
	24
PNTMM
ES retira compu de secretaria llevar compu vieja 8am/se traslada en 904 a pnlq y posterior en el 16
YC 1:00 pm retira compu secretaria 
ME Actividad del día del Agua
JB turismo/saca excel con lo de PPC solicitado por YC


PNLQ
KV- Actividad del día del Agua
DT gira diplomado
LV informe de ventas PNLQ/informe de zahíno 




PLE
MS retirar compu en secretaria llevar compu vieja




PVM
CC entra 
 
	25
PNTMM
Capacitación clima organizacional
JB y YC visados y PNE
Kryonics
Investigadoras de la UNED
ME atiende Kryonics y turismo/pendientes 


PNLQ
KV-Capacitación clima organizacional
DT gira diplomado
LV patraullaje con Mariano coordinan
CC valida entradas 


PLE


MS patrullaje con LV 


PVM
CC valida entradas 
 
	26
PNTMM
FC Comite Tecnico
YC varios y turismo/acompaña a Aguas a inspección  
ES baja/revisa agua


PNLQ
DT gira diplomado
JB gira apoyo OSLS
LV turismo 
JV entra ve temas de programas de investigación y monitoreo 
KV vacaciones




PLE
MS pendientes/mantenimiento




PVM
CC mantenimiento/mediciones de armario para traslado
 
	27
PNTMM
YC turismo/ varios 
ES mantenimiento/ otros 




PNLQ
KV Reunión CBLS
DT gira diplomado
Kryonics
LV asiste con KV 
JV PPC con MS 


PLE
Kryonics


MS PPC con JV 
PVM


 CC apoya pnlq 8:00 am 
	28
PNTMM
OESS
YC patrullaje humo
ES patrullaje humo 
COVIRENA Luis Da
Apoyo 4 ASVOS atención turismo y demás en senderos 


________________

PNLQ
OESS
JV patrullaje con MS coordinan
LV clases/atención turismo
apoyo atención turismo chicos TCU
________________


PLE
OESS
MS patrullaje Rancho lalo
ASVOS apoyan
________________


PVM
OESS
CC atención de turismo PNLQ/consult a MS si necesita traslado para patrullaje 
	29
PNTMM
OESS
YC patrullaje Jaular
ES patrullaje Jaular
COVIRENA
Apoyo 4 ASVOS
________________


PNLQ
OESS
LV Operativo Cerros
JV Cerros/operativo con FP 
________________
PLE
OESS
MS Cerros/operativo 
GP atención turismo pnlq


________________


PVM
OESS
 CC atención turismo pnlq
	30
PNTMM
OESS
YC patrullaje Calle Sanchez
ES patrullaje Calle Sanchez


________________


PNLQ
OESS
KV atención turimo
JV patrullaje con GP y MS 
LV patrullaje con GP y MS 
DT baja a PNTMM 
________________


PLE
OESS
MS Patrullaje Providencia
GP Patrullaje Providencia


________________


PVM
OESS
CC mantenimiento 
	31
PNTMM
OESS
YC patrullaje Alto Araya/Jaular
ES patrullaje Alto Araya/Jaular
ME VM 
FC VM 
________________


PNLQ
OESS
LV patrullaje RB-Providencia
KV patrullaje RB-Providencia
JV VM 
DT atiende turismo 
________________


PLE
OESS
MS patrullaje RB-Providencia
AApatrullaje RB-Providencia
________________


PVM
OESS
MH entrega de armas y el puesto de VM
CC traslado a LE
	

	

	

	

	







ABRIL 2026
	DOMINGO
	LUNES
	MARTES
	

	MIÉRCOLES
	JUEVES
	VIERNES
	SÁBADO
	

	

	

	

	1
PNTMM
OESS
YC patrullaje El sitio
JV patrullaje El sitio
KV patrullaje El sitio
JB patrullaje El sitio
________________


PNLQ
OESS
ES patrullaje Estaqueros
Covirenas patrullaje Estaqueros
________________


PLE
OESS
MS patrullaje Estaqueros
________________


PVM
OESS


 
	2
PNTMM
OESS
________________


PNLQ
OESS
JB Patrullaje Cerros
JV Patrullaje Cerros
YE Patrullaje Cerros
ES informes/visticos/turismo
 
LV informes/viáticos/turismo


________________


PLE
OESS
YE Patrullaje Cerros
CC inform pendiente/visticos 


________________


PVM
OESS


	3
PNTMM
OESS
________________


PNLQ
OESS
ES Patrullaje Reserva Forestal
JB Patrullaje Reserva Forestal  
YE patrullaje reserva forestal i
JV informes/viaticos/  turismo 
________________


PLE
OESS
________________


PVM
OESS


	4
PNTMM
OESS
________________


PNLQ
OESS
YE patrullaje copeybreserva 
JB Patrullaje Copey- Reserva
________________


PLE
OESS
________________


PVM
OESS




	5
PNTMM
OESS
JB Patrullaje Represa Cachí
Policia Turistica Patrullaje Represa Cachí
Covirenas Patrullaje Represa Cachí
________________


PNLQ
OESS
________________


PLE
OESS
________________


PVM
OESS




 
	6
PNTMM
ME pendientes/informes voluntariado pendientes de mes pasado/turismo/sale a cita
COVIRENAS apoyan




PNLQ
JB denuncia calle sanchez 
KV atención turismo 
DT revisa trabajos para barajas/sube informes que envía YC al drive de PNLQ


PLE
MS pendientes/viaticos/informes
 
	7
PNTMM

ME pendientes 


PNLQ
KV reunión con UCR
DT informes/turismo




PLE
MS mantenimiento 







 
	

	8
PNTMM
Reunión CME
ME turismo/corte de viáticos al 8 de abril 
YC pendientes 


PNLQ
Dt turismo 
Sube informes a drive/inicia semec visitación de ambos parques 
KV turismo/ inicia semec 
JB apoyo ACC 


PLE
MS semec de PPC de LA/apoya PNLQ de 11 en adelante.


 
	9
PNTMM
ME: Reunion Bienes, de 1 a 3 pm
YC inspección con JB
JB baja inspección con YC bajan en un solo carro
FC varios 


PNLQ
DT atención de turismo/actualización del drive de PNLQ/SEMEC visitación de ambos parques 
KV SEMEC correspondiente 




PLE
CC apoyo información de vehículos ver correo de Fabricio/ reunión bienes de 1 a 3 coordinar con Mayra


MS Baja con josué a inspección 
 
	10
PNTMM
Curso Primeros auxilios CUC
YC Lorne Ross y cede
FC turismo y otros 


PNLQ
`,mL=String.raw`JV informe voluntarios UCR de semana santa en PNLQ/viático combustible/turismo
DT Mantenimiento barajas
KV mantenimiento barajas
JB informe armas/informe visado y otros/machote transporte de computadora
ES practica armas con MS y CC en La esperanza/informes pendientes de PPC 


PLE
MS Practica armas con ES en la esperanza


CC cita/información de vehículos 






 
	11
PNTMM
FC varios  
YC atención voluntarios ASVO/respuesta reserva forestal 




PNLQ
LV recorridos de senderos y apoyo a CC  
ES patrullaje con MS y JV
JV patrullaje con MS y Es 


PLE
MS patrullaje con ES y JV (elabora informe)
CC atiende turismo


 
	12
PNTMM
Feria de la danta
ASVOS 
YC apoyo feria 
FC apoyo feria 


PNLQ
Feria de la danta 
CC apoya PNLQ
JV apoyo feria
ES apoyo feria
LV apoyo feria




PLE
Feria de la danta 
CC apoya PNLQ
MS apoyo feria






 
	13
PNTMM
FC, YC, KV, ME reunion Procter and Gamble 2.30 a 3.30pm




PNLQ
FC, YC, KV, ME reunion Procter and Gamble 2.30 a 3.30pm
Es lleva cuadra con MS y baja apoyar Tapanti 
LV turismo 
JV reunión con YC y dt 9am
Dt reunión con YC 9 
KV pendientes 




PLE


CC mantenimiento 
MS lleva cuadra a taller 






	15
PNTMM
FC Reunion INCOPESCA  10am
ES atencion turismo
YC festival de voluntariado 




PNLQ
LV apoya a gabriela gira Direccion de aguas en Quetzales
JV festival de voluntariado 
DT festival de voluntariado 




PLE
CC y YE apoyo al PNLQ y luego patrullaje








 
	16
PNTMM
FC atiende turismo, varios
ES mantenimiento de servicios y reparacion de llanta, sale dias libres




PNLQ
KV reunion CBLS vacaciones
JV getion para el dia del PNLQ
LV informes
DT atencion de turismo




PLE
CC y YE patrullaje, YE sale para la cita al dia siguiente








 
	17
PNTMM
FC atencion de turismo




PNLQ
JV y DT y LV  mantenimiento de senderos
KV atencion de turismo




PLE
CC mantenimiento 
YE cita médica








 
	18
PNTMM
Covirena apoya PNTMM




PNLQ
Voluntariado para barajas, atiende ES/JV/YC/DT
LV estudios
JV atiende turismo


PLE
CC y YE patrullaje RBCV, La Damita, Cerros








 
	19
PNTMM
Covirena y JV atienden turismo 




PNLQ
LV atiende turismo
ES voluntariado en Barajas






PLE
CC y YE patrullaje Cerros, salen
 








 
	20
PNTMM
JV atiende turismo




PNLQ
DT Mantenimiento e informes
ES voluntariado en Barajas
LV atiende turismo




PLE
YE mantenimiento








 
	21
PNTMM
ME:Reunión PGAI Villa Mills
JV turismo 
YC listas conciliaciones y otros 
Ver tema de p&g con JV 




PNLQ
Pernocta el chofer Willy del ACC
KV reunión de EA en VM
LV turismo/inspección/barajas 
DT informe voluntariado/adelanto de viáticos/informe ventas/ pegar flechas en barajas/turismo




PLE
YE mantenimiento barajas sube con MS 
MS barajas/inspección/ informe 


	22
PNTMM
Conferencia Gestión del tiempo 10 a 12
ME: apoyó incendios guanacaste 
YC listas conciliaciones/respuesta a terceros/apoya Gira de EA a Tapanti escuela La Esperanza




PNLQ
DT Gira de EA a Tapanti  escuela La Esperanza
Pernocta el chofer Willy del ACC
KV reunión de EA en VM
LV turismo
ES entra/turismo/rótulos


PLE
YE mantenimiento toma 
MS informes pendientes 
	23
PNTMM
YC envía rol de mayo a Redy
Varios administrativos


PNLQ
KV turismo por la mañana/charla restauración CBLS 2 a 4pm
DT pegar rotulos/informes pendientes/ventas
JB ingresa/presentacion del sabado 
ES pegar rótulos con DT en barajas/baja apoyo tapanti 




PLE
YE mantenimiento sale 
MS mantenimiento 








 
	24
PNTMM
FC Comite Tecnico
YC envia rol de mayo a Redy
YC comite tecnico


PNLQ
JB Audiencia con MS/denuncia calle sánchez/cuechazo/otros
DT  atención de turismo/organizan toldos y demás pra sabado


KV atención de turismo/organizan toldos y demás pra sabado


PLE
MS audiencia 








 
	25
PNTMM
Inauguración sendero Barajas y aniversario PNLQ
Todos en organización 




PNLQ
JV, KV Inauguración sendero Barajas y aniversario PNLQ
Todos en organizacón


PLE
Inauguración sendero Barajas y aniversario PNLQ
Todos en organización 








 
	26
PNTMM

Es atención turismo 


PNLQ
JB y MS atención turismo y pendientes 


PLE








 
	27
PNTMM
ES turismo/chapea/otros
Luis Da rótulos/turismo
YC cita/ reunión 1:30
Reunión con Juan Abarca, Edward Astua del ICE sobre obras de mantenimiento y anfibios 1,30pm
ME informes ventas/pntmm/pnlq 




PNLQ


JB turismo/ pendientes/desarma toldo 
DT libre 
KV turismo/ informe EA del 25 de abril/ desarmar toldo
JV reunión 1:30 


PLE


MS sube a quitar toldo de mini y traslada a muni coordina con KV 






 
	28
PNTMM
ME dia de la secretaria
YC pendientes 
ES mantenimiento 
PNLQ
DT dia de la secretaria baja en el 1100 a recoger a Mayra coordinan hora 
JB turismo/pendientes 
LV entra/turismo 


PLE


MS mantenimiento/inspección con JB coordina 


CC retira computadora en SINAC 


 
	

	29
PNTMM
YC lista 
ME pendientes 
ES cede varios 


PNLQ
KV reunión CBLS virtual 9 a 12m.
JV atención turismo/pendientes
DT tema firma pz 
LV lleva armas a cede con Errol 




PLE
MS y CC iIngreso de montañistas al mirador








 
	30
PNTMM
ES:Llevar vehículo 347-166 al taller san jose
LV lleva 904 a taller en sj 
YC pendientes/chespis 
PNLQ
KVbarajas/ tema p&g
LV: Llevar vehículo 347-166 al taller San José
dt: barajas y tema p&g
JV turismo/informe aniversario 
PLE
CC: Traer Compañeros de san José, Taller
YE mantenimiento 








 
	

	

	






MAYO 2026
	DOMINGO
	LUNES
	MARTES
	MIÉRCOLES
	JUEVES
	VIERNES
	SÁBADO
	

	

	

	

	

	1
PNTMM
YC VB limpieza del BTMM
Es turismo/rotulos 


PNLQ
LV turismo
JV trabajo de rotulacion con YE y CC/turismo
KV feriado
DT feriado


PLE
CC rótulos con JV en PNLQ/apoyo en senderos y parqueos/atencion turismo
YE rótulos con JV en PNLQ/apoyo en senderos y parqueos/atencion turismo










 
	2
PNTMM

ES turismo/rotulos 


PNLQ


JV turismo/inducción a JPG 
LV turismo 
JG turismo/svomodo 


PLE


CC y YE 
Atención denuncia PPC 





 
	3
PNTMM

ES turismo sale 
LV turismo 


PNLQ


LV baja temprano a Tapanti a apoyar hasta martes, baja en carro gris 


JG turismo 




PLE


CC y YE apoyan turismo en pnlq hasta cierre 


PVM


 
	4
PNTMM
YC VB limpieza del BTMM
LV turismo 


PNLQ
visita investigadores y estudiantes RBCV y Paramos PNTMM
JG recorrido de senderos/cerros con CC y YE 
KV turismo/explica dinámica del parque a compañeros nuevos y acompaña a recorrer senderos 
PS recorrido de senderos/sicorre con KV/cerros con CC y YE


PLE
CC tarjeta yola/ llevan a compañeros nuevos a los cerros explica problemática 
YE retira  tarjeta/ acompaña a CC a llevar a compañeros a cerros a conocer problemática 








 
	5
PNTMM
PRESENTACION PASANTE PACAYAS 10 am 
LV turismo/atención pasante pacayas 


PNLQ
visita investigadores y estudiantes RBCV y Paramos PNTMM
Presentación pasante pacayas 10 AM 
KV turismo/resive pasante de pacayas y profesor 


Dt mantenimiento barajas con JG y PS 


PLE




CC informes de mantenimiento 
YE /lavado de 1100 




 
	6
PNTMM
ME: Entra,pendientes y turismo
LV turismo
YC pendientes admisnistrativos




PNLQ
JB gira IRT
KV-Reunión CME
JG rotulación/turismo
PS rotulación/turismo
DTturismo/rotulaciin con PS y JG 


PLE


YE CC la suba a pnlq apoyar rotulación con compañeros 





 
	7
PNTMM
FUNDECOR con 78 estudiantes tarifa estudiante 
ME: Cita médica/recoge 166 retiran materiales de funcorco
YC turismo/pendientes 




PNLQ
FUNDECOR con 78 estudiantes tarifa estudiante 
CTP pacayas estudiantes con exoneración
DT:Cita firma digital moravia
JV entra/cita diana/recogen zanate/recogen materiales funcorco/cede a dejar microfonos y recoger uniformes con Dayana
LV pendientes sale
JG turismo/rotulación
PS temas de tenencia con JB/turismo/rotulos
JB pendientes con YC
KV: reciclaje a PZ con MS


PLE:
MS: reciclaje con KV en PZ
YE pendientes sale 









 
	8
PNTMM
ME:turismo/Reunion FB
YC temas con JB 






PNLQ
JB baja a pntmm ver temas d este encía con YC 
JV atención queja con MS 
JG turismo/rotulos




PLE
MS baja 1100 a taller se lleva a Josué a tapanti se devuelve en 904 se lleva rótulos de tapanti/atención queja con JV coordina 







 
	9
PNTMM
YC trabajos con JB
JB inspección calle sanchez y otros 
JG inspección calle sanchez/recorrido senderos/


ME turismo 


PNLQ


JV  turismo


KV actividad CEDARENA en VM


PLE


MS atiende ASADA





 
	10
PNTMM

Me turismo
YC turismo/senderos




PNLQ
JV control asunción/rotulo 
JB control asuncion/pegan rótulo
JP control asunción 




PLE


MS control asunción/pegar rótulo/coordina con JV 


PVM


 
	11
PNTMM
ME turismo/otros
YC chespiritos 


PNLQ
JV terminar rotulo y poner en entrada sabanas del indio/informe voluntario ASVO 
`,fL=String.raw`JB cherpiritos/denuncia sanchez
JG terminar rótulo y poner en entrada sabanas del indio
PS mantenimiento senderos con DT
DT informes de ventas e informes pendientes psa a YC a las 4:00 pm 
KV Turismo/ coordina actividades de junio pasa correo a Yeison 




PLE


MS recoge Materiales en Colono la Chinchilla con PS






 
	12
PNTMM
ME:Atencion turismo/otros

YC recoge materiales en EPA




PNLQ






PLE









 
	MS
	14
PNTMM
FC Reunión Vias amigables con el MOPT 9am
YC pendientes  
ME temas bienes
ES entra/mantenimiento 


PNLQ
JB valoracion envía para firma/viaticos/turismo/sale
DT rotulos barajas/mantenimiento/en la tarde comienzan protocolos
KV rótulos barajas/mantenimiento/en la tarde comienzan protocolos
JV baja a PNTMM/informe pendiente 
PS rótulos barajas/monta perfil de sendero para rotulo/mantenimiento/en la tarde comienzan protocolos
JV baja a PNTMM/informe pendiente 
LV rótulos barajas/mantenimiento/en la tarde comienzan protocolos




PLE
MS 
CC inventario de bienes


	15
PNTMM
YC Comite Tecnico
ME varios pendientes 
JV temas conteo 
ES temas conteo 


PNLQ
DT protocolos
KV protocolos 
PS protocolos 
LV protocolos 




PLE
MS pendientes sale
YE viáticos pendientes 
CC inventario bienes 







 
	16
PNTMM
Práctica Bombero Forestal
2 estudiantes horas comunal 
ME:Monitoreo de aves 


PNLQ
LV permiso de estudio clases y turismo 




PLE


CC apoyo turismo en pnlq
YE apoyo turismo y senderos en pnlq





 
	17
PNTMM
2 estudiantes horas comunal 
ME pendientes/sale 
JV turismo/base de datos de aves 
ES mantenimiento 


PNLQ
LV turismo 




PLE
CC apoyo turismo en la mañana LV 
YE apoyo turismo/senderos 
GP apoyo pnlq 


 
	18
PNTMM
2 estudiantes horas comunal 
Es mantenimiento 
JV sube a pnlq 
PNLQ
LV turismo 
Dt informes ventas 




PLE


YE mantenimiento 




 
	19
PNTMM
KV actividad PGAI
ES mantenimiento/turismo




PNLQ
KV actividad PGAI
LV turismo 
JG mantenimiento 
PLE
YE mantenimiento
GP mantenimiento 







 De 
	20
PNTMM
ES  mantenimiento/turismo




PNLQ
KV trabajan en protocolos 
DT trabajan en protocolos 
JG PPC con YE y LV 
LV PPC con YE y JG cerros/revisan si están los rótulos


PLE


GP traslada a YE a PNLQ y se queda apoyando turismo
YE PPC con JG y LV




 
	21
PNTMM

ES materiales/lleva hidro a epa y demás, sube parte alta 
YC:Atención Turismo,Denuncias, coordinar voluntariado
PNLQ
KV presentación con DT/turismo
DT presentación con KV/turismo
IV informe PPC el 19/turismo
JG informe PPC de ayer/turismo
JB termina VDA pasa a YC 




PLE
YE mantenimiento 
GP mantenimiento 







 
	22
PNTMM
FC Comite Tecnico
YC pendientes,
ES mantenimiento ZUP


PNLQ
VOluntariado UCR 20 personas/profesores 
JPG atiende voluntariado 
LV atiende voluntariado hasta medio día
KV actividad EA en lankester
Dt actividad EA Lankester
JB denuncia sanchez, VDA y turismo


PLE
MS PPC por la mañana/villa mills tema de dantas, consulta a YE/en la tarde mantenimiento ronda
GP PPC con MS/mantenimiento Ronda 
YE PPC con Mariano/en la tarde realiza el informe correspondiente 


	23
PNTMM
4 ASVOS
ES mantenimiento ZUP 
Luis David actividad de EA
YC:Actividad EA. Pendientes
PNLQ
3 ASVOS
JB PPC
JPG PPC


PLE
MS PPC
YE pendientes sale 







 
	24
PNTMM
ME: Entra,Seguimiento actividades administrativas varias
YC:,Seguimiento actividades administrativas varias e informe valoración de daño






PNLQ
JB: Boletería informe Valoración de daño
PG:Mantenimiento Asvo Voluntariado


PLE


	25
PNTMM
ME: Atencion Turismo,Seguimiento actividades administrativas varias
YC envía rol de junio a Redy


PNLQ
PG.Informes voluntariado UCR-ASVO S/D
JB:Liquidacion Viaticos, Sale
KV protocolos con PS
Dt baja con MS a recorre 16 
PLE
MS reciben 16 en Guadalupe/llevan corcel a tapanti 


	26
PNTMM
YC envía rol de junio a Redy/revisa SANES
ME pendientes con YC


PNLQ
KV Mantenimiento con DT y PG/protocolos/turismo
DT Mantenimiento Zeledonia con PG 
PG terminan mantenimiento de Zeledonia 
PS visado si ingresa/protocolos/turismo


PLE


MS visado si llega coordinar con PS/mantenimiento en puesto/informes fin de semana 
	27
PNTMM
YC sanes/informes
ME pendientes m/turismo




PNLQ
JB gira IRT
KV turismo informes pendientes/viáticos
Dt mantenimiento zeledonia 
PS mantenimiento zeledonia 
JG mantenimiento zeledonia 


PLE


MS mantenimiento zeledonia/compra 10 mil de gasolina y lleva a pnlq 


	28
PNTMM
FC:Entra va a PNLQ
ME:Cita médica
YC turismo/otros


PNLQ
JB gira IRT
DT mantenimiento zeledonia 
PS mantenimiento/recogen equipo zeledonia/turismo/recogen equipo
KV mantenimiento zeledonia/recogen equipo 
LV turismo/recogen equipo


PLE
MS y GP apoyan mantenimiento de zeledonia y recoger equipos
	29
PNTMM
4 VOLUNTARIOS
LV inspección INCOPESCA con FC
ME atencion turismo
FC reunión en Purisil


PNLQ
JB gira IRT
KV cita/exámenes hospital 
DT turismo/protocolos
LV turismo/protocolos inspección INCOPESCA con FC
PS curso primeros auxilios




PLE
MS: curso primeros auxilios
YE:Entra
GP mantenimiento
	30
PNTMM
4 VOLUNTARIOS
ME y FC:Atencion Grupo CEDARENA
ES mantenimiento con voluntarios




PNLQ
DT y KV reunión con Cedarena
LV: Turismo


PLE
YE y GP: Apoyo PNLQ, patrullaje Cerros por ingresos ilegales




	31
PNTMM
ME;atencion turismo
FC gestion administrativa y ES mantenimiento con 
4 VOLUNTARIOS


PNLQ
LV: atencion de Turismo


PLE
YE y GP: Apoyo PNLQ, patrullaje Cerros por ingresos ilegales




	

	

	

	

	

	

	




JUNIO 2026
	DOMINGO
	LUNES
	MARTES
	MIÉRCOLES
	JUEVES
	VIERNES
	SÁBADO
	

	1
PNTMM
 FC VB limpieza del BTMM
2 PASANTES CTP PACAYAS
ME y ES apoyo PNPL incendio




PNLQ
1 PASANTES CTP PACAYAS




PLE
YE mantenimiento




 
	2
PNTMM
VB limpieza del BTMM
KM : Audiencia Juzgado Contravencional Paraíso
realiza expediente caso de Efrain/organiza donde instalar rótulos de límites que quedan
ME y ES apoyo PNPL incendio.
FC labores administrativas


PNLQ
KV:Charla EA, Humo
LV:Charla EA, Humo


PLE
YE mantenimiento




	3
PNTMM
ME y ES apoyo PNPL incendio
KM:FC, DT  JB y JC reunión con Redy y Nancy
FC y DT se regresan la PNLQ, JB permanece en el puesto


PNLQ
KV- Taller CBLS con Agathos
PS y JS 






PLE
YE mantenimiento




 
	4
PNTMM
ME y ES apoyo PNPL incendio, regresan por la noche con GG
115 estudiantes exonerados Lic San Nicolás Tolentino
YC gestiones administrativa
KM mantenimiento y gesiones PPC.
practicantes del liceo colaboran con el mantenimiento
Ingresa el covirena Luis David




PNLQ
KV:Charla EA,Dota
PS:Charla EA,Dota
PG:Charla EA,Dota
YE mantenimiento y apoya PNLQ




PLE
YE mantenimiento y apoya PNLQ






 
	5
PNTMM
51 ESTUDIANTES CON TARIFA DE ESTUDIANTE(COLEGIO CANADIENSE)
ME turismo/pendientes
ES patrullaje con KM
YC valoración de daño con JB


PNLQ
JV:Int E,Monitoreo M Orosi
PG:Int E,MonitoreoM Orosi/apoyo a DT con tema de papelería/turismo 
JB valoración de daño de paco, informe sobre la georgina para enviar a DJ Minae
DT 
KV es en providencia coordina con Mariano 
PS patrullaje con MS y turismo y cierre después de las 12 
PLE
YE patrullaje con MS y PS 
 MS patrullaje con YE y PS coordina con KV para traslado a escuela 
	6
PNTMM
JV, PG, ES monitoreo de murciélagos
YC informe giorgina con JB
ME pendientes/sale
ES mantenimiento pintura de baños con voluntarios y Luis da  


PNLQ
JV, PG monitoreo de murciélagos
JB turismo/informe de la Georgina 


PLE
MS y YE cerros por la mañana y  patrullaje sector de la esperanza y alrededores por la tarde 







 
	7
PNTMM
ES: mantenimiento 
JV: monitoreo 
JPG: monitoreo 
YC ES y JPG patrullaje




PNLQ
JV:Int E,Revion C Trampa Orosi, monitoreo murciélagos
PG:Int E,Revion C Trampa  Orosi
JB PPC cerros al amanecer con MS y YE/turismo




PLE
MS:Patrullaje, cerros Reserva B/Reserva fo
YE:Patrullaje, cerros Reserva B/Reserva Fo


	8
PNTMM
ES:Patrullaje 3 de junio
KM coordina patrullajes y operativos con fuerza pública parte alta y baja y actividades de PPc de julio pasa lista a YC
YC zooave
ES 3 de junio patrullaje 


PNLQ
JV:Int E,Revion C Trampa 3 de junio
PG:Int E,Revion C Trampa 3 de junio 
JB visados con MS y PS 
KV turismo/informes 
DT turismo/ventas/expedientes 


PLE
MS visados con JB y PS 




	9
PNTMM
YC capacitación visados
FC capacitacion visados
KM capacitación visados 


PNLQ
JB capacitación visados
PS capacitación visados/informes visados 
JV sistematiza datos de cámaras y monitoreo de Murcis con JPG 
KV turismo/expedientes con 
DT expedientes con pasante 




PLE
MS capacitación visados







	10
PNTMM
ME:Reunión CME
YC reunión con RH 10 am
FC reunión con RH 10 am
KM y YC gira al PNLQ y PZ


PNLQ
JV:Int E,Monitoreo M 3 Junio
PG:Int E,Monitoreo M 3 junio




PLE








 
	11
PNTMM
FC varios atención de turismo
YC termina tema de adelantos 
KM programación PPC julio 
YC y KM regresan del PNLQ


PNLQ
KV- reunión Gregorio Dauphin-Virtual/adelanto de viaticos
DT turismo/otros/adelanto de viáticos 
PS adelantos viáticos/recoge tarjeta e inventario parque dota 
JV ponen cámaras q faltan/adelantos viáticos 
PS cámaras/adelantos viáticos 


PLE
MS apoyo traslado IRT/ adelanto de viáticos 
	12
`,pL=String.raw`PNTMM
FC apoyo PNLQ
KM atencion de turismo




PNLQ
FC apoyo PNLQ
JPG y JV patrullaje Los Calvo
DT atencion visitantes






PLE
MS va a Tapanti a recoger cuadraciclo
ingresa investigadores UNED






 
	13
PNTMM
ES y KM entrenamiento MIF
FC atencion turismo  Conteo de anfibios




PNLQ
KV-Actividad Reforestación CBLS-en la UNED
JV:atención de turismo
JV Conteo de anfibios 


PLE
MS mantenimiento informes ingresa investigadores UNED 







 
	14
PNTMM
JV Conteo de anfibios 




PNLQ






PLE









 
	15
PNTMM
ME: Entra seguimiento a sus labores




PNLQ
KV-PS-Actividad del día del árbol-Municipalidad de Dota




PLE









 
	16
PNTMM
reunión proyecto refugios climáticos en PNLQ  10am




PNLQ
DT:Herramienta de flujo de visitantes
reunión proyecto refugios climáticos en PNLQ 10am




PLE
reunión proyecto refugios climáticos en PNLQ 10am



	17
PNTMM
Lavado de vehiculo 347-166




PNLQ
DT:Herramienta de flujo de visitantes




PLE









	18
PNTMM
KM mantenimiento 
Me pendientes
YC denuncia/respuesta a usuaria


PNLQ
DT:Herramienta de flujo de visitantes
MS audiencia
ES turismo/viaticos primera quincena
JPG viáticos I quincena
KV mantenimiento barajas
PS mantenimiento barajas




PLE


YE mantenimiento


 
	19
PNTMM
FC Comite Tecnico
Patrullaje YC con Es y km 
ME varios administrativos 


PNLQ
DT:Herramienta de flujo de visitantes
JPG  y YE: Reten Macho Gaff con Fuerza Pública
PS turismo
Jpg mantenimiento barajas con Iván .


PLE
YE: Reten Macho Gaff con Fuerza Pública.


	20
PNTMM
ME turismo/voluntwriado 
Voluntariado 3 pax 
Es pruebas camada en BA 


PNLQ


PG turismo 


PLE


YE y MS patrullaje durante la mañana, esperanza, duelas, etc/tarde informes viáticos etc 


	21
PNTMM
ME turismo 




PNLQ
JPG turismo 
ES apoyo a JPG/recorrido senderos 


PLE
MS:Patrullaje, La Esperanza
YE::Patrullaje, La Esperanza







	22
PNTMM
Reunión teams 
FC YC capacitación órdenes administrativas
DEKRA 166
ME rtv con el 166
KM capacitación 


PNLQ
KV-Actividad de Educación Ambiental con Amaa
Reunión teams 
DEKRA 16
PS y PG Capacitación órdenes administrativas y my office 


PLE
MS rtv con Errol bajan en 16 
YE reunión teams virtual 
Reunión teams 
GP entra 


 
	23
PNTMM
YC tema zonificacion rio macho 
ME 347-166 a taller de ajuste de freno de mano.
KM mantenimiento/decomiso
ES mantenimiento/decomiso. 


PNLQ
JPG baja 347-16 a taller coordina con Mayra
PS Inicia valoración de daño con YC, pedir info a josué y Mariano 
KV informes actividades EA
DT turismo/reunión con YC sobre herramienta de cahuita




PLE


MS baja 1100 a recoger a PG a taller
YE mantenimiento de puesto
GP capacitación my office 


	24
PNTMM
FC Gira PNLQ ASADA
YC operativo decomiso
ES operativo decomiso
KM operativo decomiso
ME turismo/capacitacion my office/informe voluntarios de finde (cogui)


PNLQ
KV- Taller CBLS con Agathos
PG capacitacion my office/lleva 347-16 a taller con MS 
PS capacitacion my office/mantenimiento senderos 
Dt capacitación my office/herramienta con JV  
JV capacitacion my office/turismo/herramienta con DT
Investigador ENRIQUE pernocta en el puesto 


PLE
GP capacitacion my office/mantenimiento barajas con PS 


MS capacitacion My office/recoge a JPG en taller 
YE capacitacion my office/sale


 
	25
PNTMM
ME:Taller Servicio al cliente PVI
YC:Taller Servicio al cliente PVI
FC gestion
KM informes atencion turismo



PNLQ
Investigador ENRIQUE pernocta en el puesto no llegó
JG taller SC en PNVI
KV atención turismo
PS informes
JPG taller vehiculo 16
DT y ES proyecto MIF en escuelas




PLE
MS:Taller Servicio al cliente en PVI
GP y YE  mantenimiento




	26
PNTMM
Investigador ENRIQUE pernocta en el puesto no llegó
YC: reunion sobre los SANES con JV y DT y MS
FC gestiones varias
KM mantenimiento informes
llegan voluntarios




PNLQ
KV- Reunión del CBLQ
DT Charla UCR sobre trabajo comunitario 1pm
JV reunión y cita médica
PS cita médica, visados 
JV y JP: Reten Ruta 2, Macho Gaff con Fuerza Pública (cancelado)
JP mantenimiento




PLE
MS y GP audiencia en tribunales:


	27
PNTMM
Investigador ENRIQUE pernocta en el puesto no llegó
FC gestiones varias
1 covirena y2 voluntarios
TCU UCR




PNLQ
JV y MS:Patrullaje, Reserva B,Sn Gerardo
GP apoya PNLQ atención visitantes
JPG mantenimiento de senderos sale libre




PLE
MS y JV :Patrullaje, Reserva B,Sn Gerardo
GP apoya PNLQ atención visitantes
Ingreso del proyecto tigrillo






 
	28
PNTMM:
Pasante frances Enzo
2 voluntarias 
Pasante frances Enzo
FC gestiones varias




PNLQ
JV y MS: Patrullaje cacería 
GP apoya PNLQ atención visitante
TCU UCR




PLE: 
JV y MS: Patrullaje Laguna Berma
GP apoya PNLQ atención visitante
Ingreso del proyecto tigrillo


 
	29
PNTMM
Pasante frances Enzo
2 voluntarias 






PNLQ
KV-Actividad de Educación Ambiental con Amaia
DT gira diplomado


PLE






 
	30
PNTMM
Pasante frances Enzo
2 voluntarias 
Reunion con Camilo 


PNLQ
DT gira diplomado




PLE







 
	




 
	

	

	

	

	







JULIO 2026
	DOMINGO
	LUNES
	MARTES
	MIÉRCOLES
	JUEVES
	VIERNES
	SÁBADO
	3e
	

	

	1
PNTMM


VB limpieza del BTMM
Pasante frances Enzo
Errol:Patrullaje alto araya-Guabata
KM:Patrullaje alto araya-Guabata
ME:Retirar las tarjetas institucionales en la sede y pasar al taller a retirar el vehículo 347-16




PNLQ
DT gira diplomado




PLE
YE mantenimiento






 
	2
PNTMM
VB limpieza del BTMM
Pasante frances Enzo
ES coordinación y traslado de materiales de colono la chinchilla a la esperanza con Enoc de tortuguero
ME: Actividades Administrativas.


PNLQ
DT gira diplomado
pernocta enoc de tortuguero
KV atencion turismo
PS informes varios
JV mantenimiento sale
ES pernocta en el puesto
Pasante Enzo colabora


PLE
YE mantenimiento







 
	3
PNTMM
Pasante franc
ME: Actividades Administrativas
YC: Seguimiento a las actividades administrativas
KM:Realizar denuncias,viaticos,otros
ES:Mantenimiento ZUP
PNLQ
DT gira diplomado
Enzo apoya PNLQ
JPG: Traslado a Tapanti




PLE
YE mantenimiento







 
	4
PNTMM
Pasante frances Enzo
ME y ES:Celebracion Dia del Felino,Trinidad de Dota, pernocta en OLE
JPG: Atencion de turismo


PNLQ
KV:Celebracion Dia del Felino,Trinidad de Dota 
LV atencion turismo




PLE
YE:Celebracion Dia del Felino,Trinidad de Dota 






 
	5
PNTMM
Pasante frances Enzo
ME:Pernocta en OLE. En la tarde baja a Orosi
PG:Atencion turismo y Cuida Puesto


PNLQ






PLE









 
	6
PNTMM
Pasante frances Enzo trabaja con Errol
ME: Reunion PGAI
ES: Mantenimiento ZUP, Baterías sanitaria y acueducto.
YE: Semec y otros actividades Administrativas


PNLQ
KV-Reunión PGAI
DT gira diplomado
PG: Apoyo SEMEC sube a quetzales


PLE






 
	7
PNTMM
Pasante frances Enzo
YC y FC reunión con P&G 
ME: pendientes , sitas DEKRA cuadraciclos
ES: mantenimiento 


PNLQ
DT gira diplomado
KV:Patrullaje Jaboncillos,Ciénegas Las Duelas
LV:Patrullaje Jaboncillos,Ciénegas Las Duelas
JPG atencion turismo/termina semec 


PLE
GP y YE Patrullaje Jaboncillos,Ciénegas Las Duelas




 
	8
PNTMM
Pasante frances Enzo
Enzo pinta porton 
ME:Reunión CME, Informe de ventas
ES mantenimiento 
YC PP/Expediente la Georgina/capacitacion My office/inforrmes de ventas PNTMM


PNLQ
KV-Reunión CME
DT gira diplomado
LV mantenimiento barajas
JPG mantenimiento barajas


PLE
YE mantenimiento barajas
GP atención turismo







 
	9
PNTMM
ME pendientes/sale
FC entra
ME: Reunion INA


PNLQ
DT gira diplomado
JV:Instalación Cámaras Trampa RB/plan de trabajo de voluntariado PNTMM y PNLQ
JPG instalación de cámaras trampa en RCV/actualiza semec con lo de memo y Mariano
LV atención turismo 
KV instalación cámaras trampa con JV y JPG




PLE
GP:Revisar internet y electricidad/turismo en PNLQ


YE sube con guillermo apoyo PNLQ/sale 



 
	10
PNTMM
3 tesistas del TEC
FC


PNLQ
DT gira diplomado
LV:Reten Ruta 2
JV:Patrullaje SAn gerardo/providencia por la mañana y retén en la tarde 
PG:baja cuadraciclo a Dekra con ES
KV atencion de turismo
Dekra 29-862


PLE
GP:Patrullaje san gerardo/providencia por la mañana y Reten Ruta 2






 
	11
PNTMM
3 tesistas del TEC


PNLQ
PG:Patrullaje Reserva Biológica




PLE
GP:Patrullaje Reserva Biológica






 
	12
PNTMM
Pasante frances Enzo




PNLQ






PLE
Ingresa investigadora de gases de la UNA Luisa Castillo









 
	13
PNTMM
Taller de investigación en Monteverde
Pasante frances Enzo
YC informes voluntariado




PNLQ
JV Taller de investigación en Monteverde




PLE









 
	14
PNTMM
Taller de investigación en Monteverde
Pasante frances Enzo
YC:Juicio contravensional paraiso/PP/SEMEC
am/Patrullaje,Humo,pejibaye,Cartago
KM:Patrullaje,Humo,pejibaye,Cartago
ES:Patrullaje,Humo,pejibaye,Cartago
PNLQ
JV Taller de investigación en Monteverde




PLE
mantenimiento GP



	15
PNTMM
Taller de investigación en Monteverde
Pasante frances Enzo
YC PP/SEMEC/DENUNCIA/voluntariado 
KM PP/SEMEC




PNLQ
JV Taller de investigación en Monteverde
ES trabajo con voluntarios 




PLE


GP atención turismo en PNLQ





 
	16
PNTMM
FC Comite  Tecnico
Pasante frances Enzo




PNLQ
DA pernocta gira de sitada
`,TL=String.raw`JV  acompaña a la persona de DA a realizar inspección
ES atiende visitación 
PS cita médica




PLE









 
	17
PNTMM
Pasante frances Enzo
ES: 
ME, FC, MN resultados proyecto CEDARENA 9 a 3,30
KM:Patrullaje,Embalse,Tanque oscilación, alto Don Mariano,Orosi,Paraíso,cartago
YC conciliación juzgado C paraíso 1 pm 


PNLQ
LV:Reten Ruta 2
DT y KV resultados proyecto CEDARENA 9 a 3,30
DA pernocta gira de sitada




PLE
YE :Reten Ruta 2


 
	18
PNTMM
Pasante frances Enzo
ES y ME: Entrenamiento MIF Lorne Ross Santa Ana


PNLQ
JV Y DT: Entrenamiento MIF Lorne Ross Santa Ana






PLE
YE: Entrenamiento MIF Lorne Ross Santa Ana







 
	19
PNTMM
Pasante frances Enzo
ES curso CI-IF
ME:Actividades Administrativas Varias


PNLQ






PLE






PVM


 
	20
PNTMM


ingresan 2 voluntarios UCR y 4 TEC
Pasante frances Enzo
ES curso CI-IF
ME: reunion con Paola UNED 10am/inventarios/apoyo PNLQ
Actividades Administrativas.
YC liquidaciones viaticos y combustible, coordinacion voluntariado de la semana/planificacion de actividades//informe labores del 6-8 de julio 


PNLQ
KV reunion con Paola UNED 10am
PS incapacitado 
DT informes de venta/aplicación de encuestas




PLE
YE informe de labores del 6-10 de julio/liquidaciones pendientes




	21
PNTMM
2 voluntarios UCR y 4 TEC
Pasante frances Enzo
ES curso CI-IF
YC charla voluntariado/coordinar voluntariado 
ME actualiza monto viáticos/pendientes 


PNLQ


DT:Mantenimiento senderos PNTMM- Orosi
Charla voluntariado
PS coordina con YC a
ctividades de la semana
KV reunión 




PLE


YE charla voluntariado 
 
	22
PNTMMt
2 voluntarios UCR y 4 TEC
Pasante frances Enzo
ES curso CI-IF


PNLQ
KV. Participación en Feria CIentífica




PLE






PVM


 
	23
PNTMM
2 voluntarios UCR y 4 TEC
Conferencia: “Masculinidades positivas para la construcción de la Igualdad de género en espacios de trabajo y en el servicio público de las 10 a las 12 virtual
Pasante frances Enzo
ES curso CI-IF




PNLQ






PLE






PVM


 
	24
PNTMM
2 voluntarios UCR y 4 TEC
Pasante frances Enzo
ME:Charla EA Orosi
ES curso CI-IF
YC atiende grupo P&G


PNLQ
KV Y DT:Charla EA Orosi




PLE






PVM


 
	25
PNTMM
2 voluntarios UCR
Pasante frances Enzo




PNLQ






PLE






PVM


 
	26
PNTMM
Pasante frances Enzo
2 voluntarios UCR 




PNLQ
JV Y PG:Patrullaje La Esperanza, Tapanti.




PLE
MS: Patrullaje La Esperanza, Tapanti.




PVM


 
	27
PNTMM
Pasante frances Enzo
gira Tsimari
2 voluntarios UCR 
KM,ES,FC:Patrullaje gira Tsimari


PNLQ
JV Y PG: Patrullaje gira Tsimari




PLE






PVM


 
	28
PNTMM
2 voluntarios UCR 
Pasante frances Enzo
KM,ES,FC:Patrullaje gira Tsimari


PNLQ
JV Y PG: Patrullaje gira Tsimari


PLE






PVM


 
	29
PNTMM
2 voluntarios UCR 
Pasante frances Enzo
KM,ES,FC:Patrullaje gira Tsimari


PNLQ
JV Y PG: Patrullaje gira Tsimari
KV: Actividad de EA en escuela de Machogaff


PLE






PVM


 
	30
PNTMM
2 voluntarios UCR 
Pasante frances Enzo
KM,ES,FC:Patrullaje gira Tsimari


PNLQ
JV Y PG: Patrullaje gira Tsimari




PLE






PVM


 
	31
PNTMM
2 voluntarios UCR 
Pasante frances Enzo




PNLQ
KV*Reunión del CBLS




PLE






PVM
	

	



AGOSTO 2026
	DOMINGO
	LUNES
	MARTES
	MIÉRCOLES
	JUEVES
	VIERNES
	SÁBADO
	

	

	

	

	

	

 
	1
PNTMM
2 voluntarios UCR 
Feria en Villa Mills




PNLQ
Feria en Villa Mills




PLE
Feria en Villa Mills




PVM
Feria en Villa Mills
 
	2
PNTMM
2 voluntarios UCR 




PNLQ






PLE






PVM


 
	3
PNTMM
2 voluntarios UCR VB limpieza del BTMM




PNLQ






PLE






PVM


 
	4
PNTMM
VB limpieza del BTMM




PNLQ
Reunion Comite turismo con GJ




PLE






PVM


 
	5
PNTMM
Reunión CME




PNLQ
KV- Reunión CME




PLE






PVM


 
	6
PNTMM





PNLQ






PLE






PVM


 
	7
PNTMM





PNLQ






PLE






PVM


 
	8
PNTMM
MN y YC Voluntariado 40 pax




PNLQ






PLE






PVM


 
	9
PNTMM





PNLQ






PLE







 
	10
PNTMM
DT y ES MIF en escuelas




PNLQ
DT y ES MIF en escuelas




PLE







 
	11
PNTMM
DT y ES MIF en escuelas




PNLQ
DT y ES MIF en escuelas




PLE








 
	12
PNTMM
YC capacitacion manipulacion de serpientes
DT y ES MIF en escuelas




PNLQ
LV  capacitación manipulación de serpientes
DT y ES MIF en escuelas




PLE
MS capacitacion manipulacion de serpientes







 
	13
PNTMM
DT y ES MIF en escuelas




PNLQ
DT y ES MIF en escuelas




PLE








 
	14
PNTMM
Comite Tecnico
DT y ES MIF en escuelas


PNLQ
DT y ES MIF en escuelas




PLE








 
	15
PNTMM





PNLQ




PLE







 
	16
PNTMM





PNLQ






PLE






PVM


 
	17
PNTMM
FC y KM Apoyo operativo Vida Silvestre del ACC




PNLQ
2 pasantes Ecoturismo del CTP Umberto Melloni 
JV Apoyo operativo Vida Silvestre del ACC




PLE






PVM


 
	18
PNTMM





PNLQ
2 pasantes Ecoturismo del CTP Umberto Melloni 





PLE






PVM


 
	19
PNTMM





PNLQ
2 pasantes Ecoturismo del CTP Umberto Melloni 





PLE






PVM


 
	20
PNTMM





PNLQ
2 pasantes Ecoturismo del CTP Umberto Melloni 
KV Dia de Parques Nacionales


PLE






PVM


 
	21
PNTMM





PNLQ
2 pasantes Ecoturismo del CTP Umberto Melloni 
KV Dia de Parques Nacionales


PLE






PVM


 
	22
PNTMM
ES y KM entrenamiento MIF




PNLQ
2 pasantes Ecoturismo del CTP Umberto Melloni 
KV Dia de Parques Nacionales


PLE






PVM


 
	23
PNTMM
2 pasantes Ecoturismo del CTP Umberto Melloni 
YC Dia de Parques Nacionales


PNLQ
KV, DT, JV, LV Dia de Parques Nacionales




PLE
YE Dia de Parques Nacionales




PVM


 
	24
PNTMM
2 pasantes Ecoturismo del CTP Umberto Melloni 
YC Dia de Parques Nacionales




PNLQ
Dia de Parques Nacionales
KV, JV, LV, DT Dia de Parques Nacionales


PLE
YE Dia de Parques Nacionales




PVM


 
	25
PNTMM
2 pasantes Ecoturismo del CTP Umberto Melloni 




PNLQ






PLE








 
	26
PNTMM
2 pasantes Ecoturismo del CTP Umberto Melloni 




PNLQ






PLE






PVM


 
	27
PNTMM
2 pasantes Ecoturismo del CTP Umberto Melloni 




PNLQ






PLE






PVM


 
	28
PNTMM
2 pasantes Ecoturismo del CTP Umberto Melloni 




PNLQ
KV-Reunión CBLS




PLE






PVM


 
	29
PNTMM





PNLQ






PLE






PVM


 


	30
PNTMM





PNLQ






PLE






PVM


 


	31
PNTMM
ME: Enviar la solicitud de las tarjetas de ruedo del Bloque.




PNLQ






PLE






PVM


	

	

	

	

	





SETIEMBRE 2026
	DOMINGO
	LUNES
	MARTES
	MIÉRCOLES
	JUEVES
	VIERNES
	SÁBADO
	

	

	1
PNTMM
VB limpieza del BTMM
ME: Enviar la solicitud de las tarjetas de ruedo del Bloque.


PNLQ






PLE






PVM
	2
PNTMM
VB limpieza del BTMM




PNLQ
KV- Reunión CME


PLE






PVM
	3
PNTMM





PNLQ






PLE






PVM
	4
PNTMM





PNLQ






PLE






PVM


 
	5
PNTMM





PNLQ






PLE






PVM


 
	6
PNTMM





PNLQ






PLE






PVM


 
	7
PNTMM





PNLQ






PLE








 
	8
PNTMM





PNLQ






PLE








 
	9
PNTMM
Reunión CME




PNLQ






PLE








 
	10
PNTMM
eunion con RRHH en PNLQ




PNLQ
Reunion con RRHH




PLE
eunion con RRHH en PNLQ







 
	11
PNTMM





PNLQ






PLE








 
	12
PNTMM





PNLQ






PLE








 
	13
PNTMM





PNLQ






PLE






PVM


 
	14
PNTMM





PNLQ






PLE






PVM


 
	15
PNTMM





PNLQ






PLE






PVM


 
	16
PNTMM





PNLQ






PLE






PVM


 
	17
PNTMM
Comite Tecnico




PNLQ






PLE






PVM


 
	18
PNTMM





PNLQ






PLE






PVM


 
	19
PNTMM
ES y KM entrenamiento MIF




PNLQ






PLE






PVM


 
	20
PNTMM





PNLQ






PLE






PVM


 
	21
PNTMM





PNLQ






PLE






PVM


 
	22
PNTMM




PNLQ






PLE






PVM


 
	23
PNTMM





PNLQ






PLE






PVM


 
	24
PNTMM





PNLQ






PLE






PVM


 
	25
PNTMM





PNLQ






PLE






PVM


 
	26
PNTMM





PNLQ






PLE






PVM


 
	27
PNTMM





PNLQ






PLE






PVM


 
	28
PNTMM





PNLQ






PLE






PVM


 
	29
PNTMM





PNLQ






PLE






PVM


 


	30
PNTMM





PNLQ






PLE






PVM


 
	




 
	

	

	



OCTUBRE 2026
	DOMINGO
	LUNES
	MARTES
	MIÉRCOLES
	JUEVES
	VIERNES
	SÁBADO
	

	

	

	

	1
PNTMM
VB limpieza del BTMM




PNLQ






PLE






PVM
	2
PNTMM
VB limpieza del BTMM




PNLQ






PLE






PVM


 
	3
PNTMM





PNLQ






PLE






PVM


 
	4
PNTMM





PNLQ






PLE






PVM


 
	5
PNTMM





PNLQ






PLE






PVM


 
	6
PNTMM





PNLQ






PLE






PVM


 
	7
PNTMM





PNLQ
KV-Reunión CME




PLE






PVM


 
	8
PNTMM





PNLQ






PLE






PVM


 
	9
PNTMM





PNLQ






PLE






PVM


 
	10
PNTMM





PNLQ






PLE






PVM


 
	11
PNTMM





PNLQ






PLE






PVM


 
	12
PNTMM





PNLQ






PLE






PVM


 
	13
PNTMM
Reunión CME




PNLQ






PLE






PVM


 
	14
PNTMM





PNLQ






PLE






PVM


 
	15
PNTMM
Comite Tecnico




PNLQ






PLE






PVM


 
	16
PNTMM





PNLQ






PLE






PVM


 
	17
PNTMM
ES y KM entrenamiento MIF




PNLQ






PLE






PVM


 
	18
PNTMM





PNLQ






PLE






PVM


 
	19
PNTMM





PNLQ






PLE






PVM


 
	20
PNTMM





PNLQ






PLE






PVM


 
	21
PNTMM





PNLQ






PLE






PVM


 
	22
PNTMM
FC Comite Tecnico




PNLQ






PLE






PVM


 
	23
PNTMM
FC Comite Tecnico


`,LL=String.raw`

PNLQ






PLE






PVM


 
	24
PNTMM





PNLQ






PLE






PVM


 
	25
PNTMM





PNLQ






PLE






PVM


 
	26
PNTMM





PNLQ






PLE






PVM


 
	27
PNTMM





PNLQ






PLE






PVM


 
	28
PNTMM





PNLQ






PLE






PVM


 
	29
PNTMM





PNLQ






PLE






PVM


 


	30
PNTMM





PNLQ






PLE






PVM


 


	31
PNTMM





PNLQ






PLE






PVM


 


	



NOVIEMBRE 2026
	DOMINGO
	LUNES
	MARTES
	MIÉRCOLES
	JUEVES
	VIERNES
	SÁBADO
	1
PNTMM





PNLQ






PLE






PVM


 
	2
PNTMM





PNLQ






PLE






PVM


 
	3
PNTMM





PNLQ






PLE






PVM


 
	4
PNTMM





PNLQ






PLE






PVM


 
	5
PNTMM





PNLQ






PLE






PVM


 
	6
PNTMM





PNLQ






PLE






PVM


 
	7
PNTMM





PNLQ






PLE






PVM


 
	8
PNTMM





PNLQ






PLE






PVM


 
	9
PNTMM





PNLQ






PLE






PVM


 
	10
PNTMM





PNLQ






PLE






PVM


 
	11
PNTMM





PNLQ






PLE






PVM


 
	12
PNTMM





PNLQ






PLE






PVM


 
	13
PNTMM





PNLQ






PLE






PVM


 
	14
PNTMM





PNLQ






PLE






PVM


 
	15
PNTMM





PNLQ






PLE






PVM


 
	16
PNTMM





PNLQ






PLE






PVM


 
	17
PNTMM





PNLQ






PLE






PVM


 
	18
PNTMM





PNLQ






PLE






PVM


 
	19
PNTMM





PNLQ






PLE






PVM


 
	20
PNTMM





PNLQ






PLE






PVM


 
	21
PNTMM





PNLQ






PLE






PVM


 
	22
PNTMM





PNLQ






PLE






PVM


 
	23
PNTMM





PNLQ






PLE






PVM


 
	24
PNTMM





PNLQ






PLE






PVM


 
	25
PNTMM





PNLQ






PLE






PVM


 
	26
PNTMM





PNLQ






PLE






PVM


 
	27
PNTMM





PNLQ






PLE






PVM


 
	28
PNTMM





PNLQ






PLE






PVM


 
	29
PNTMM





PNLQ






PLE






PVM


 
	30
PNTMM





PNLQ






PLE






PVM


 
	

	

	

	

	







DICIEMBRE 2026
	DOMINGO
	LUNES
	MARTES
	MIÉRCOLES
	JUEVES
	VIERNES
	SÁBADO
	

	

	1
PNTMM
VB limpieza del BTMM




PNLQ






PLE






PVM


 
	2
PNTMM
VB limpieza del BTMM
Reunión CME




PNLQ
KV-Reunión CME




PLE






PVM


 
	3
PNTMM





PNLQ






PLE






PVM


 
	4
PNTMM





PNLQ






PLE






PVM


 
	5
PNTMM





PNLQ






PLE






PVM


 
	6
PNTMM










PNLQ




PLE










 
	7
PNTMM










PNLQ




PLE




 
	8
PNTMM










PNLQ




PLE




 
	9
PNTMM










PNLQ




PLE




 
	10
PNTMM










PNLQ




PLE




 
	11
PNTMM










PNLQ




PLE





 
	12
PNTMM










PNLQ




PLE




 
	13
PNTMM










PNLQ




PLE




 
	14
PNTMM










PNLQ




PLE




 
	15
PNTMM










PNLQ




PLE




 
	16
PNTMM










PNLQ




PLE




 
	17
PNTMM
Comite Tecnico









PNLQ




PLE




 
	18
PNTMM










PNLQ




PLE




 
	19
PNTMM
ES y KM entrenamiento MIF









PNLQ




PLE




 
	20
PNTMM










PNLQ




PLE




 
	21
PNTMM










PNLQ




PLE




 
	22
PNTMM







PNLQ




PLE










	23
PNTMM







PNLQ




PLE














 
	24
PNTMM







PNLQ




PLE






 
	25
PNTMM







PNLQ




PLE














 
	26
PNTMM







PNLQ




PLE












 
	27
PNTMM







PNLQ




PLE






	28
PNTMM







PNLQ




PLE






	29
PNTMM







PNLQ




PLE










 


	30
PNTMM







PNLQ




PLE








 


	31
PNTMM







PNLQ




PLE










 


	

	

	

	

	

	

	





Pestaña 2`,vL=[lL,cL,uL,dL,mL,fL,pL,TL,LL].join(""),js="2026-07-21-agenda-viaticos";function kn({id:r,titulo:o,fecha:s,funcionarios:u,lugar:m="",observaciones:f=""}){return{id:`plan2026-agenda-${r}`,titulo:o,categoria:"Otra actividad",inicio:s,fin:s,unDia:!0,horaInicio:"08:00",horaFin:"16:00",funcionarios:u,otrosParticipantes:[],lugar:m,observaciones:f,viatico:!0}}const hL=[kn({id:"2026-08-01-cerro-vueltas",titulo:"PPC (entrada de Cerro Vueltas, tema caballistas)",fecha:"2026-08-01",funcionarios:["Jetzelly Villalobos","Yolanda Elizondo"],lugar:"Entrada de Cerro Vueltas",observaciones:"Tema: caballistas."}),kn({id:"2026-08-05-reunion-cne",titulo:"Reunión CNE",fecha:"2026-08-05",funcionarios:["Karen Valle"],lugar:"CNE"}),kn({id:"2026-08-06-jaular",titulo:"PPC pica montaña a Jaular",fecha:"2026-08-06",funcionarios:["Yeison Cortés","Errol Salazar","Kenneth Mena"],lugar:"Jaular"}),kn({id:"2026-08-08-cerros",titulo:"PPC a Cerros",fecha:"2026-08-08",funcionarios:["Yolanda Elizondo"],lugar:"Cerros"}),...[10,11,12,13,14].map(r=>kn({id:`2026-08-${r}-ea-escuelas`,titulo:"EA Escuelas",fecha:`2026-08-${r}`,funcionarios:["Errol Salazar","Diana Tencio"],lugar:"Escuelas"})),kn({id:"2026-08-12-ppc-san-gerardo",titulo:"PPC San Gerardo",fecha:"2026-08-12",funcionarios:["Karen Valle","Laura Valverde","Pablo Sánchez"],lugar:"San Gerardo"}),kn({id:"2026-08-12-capacitacion-serpientes",titulo:"Capacitación en manipulación y manejo de serpientes",fecha:"2026-08-12",funcionarios:["Yeison Cortés","Laura Valverde"],observaciones:"Las dos descripciones de la fuente se consolidaron en una sola actividad."}),kn({id:"2026-08-16-duelas-esperanza",titulo:"PPC Duelas, La Esperanza y otros",fecha:"2026-08-16",funcionarios:["Jetzelly Villalobos"],lugar:"Duelas y La Esperanza"}),kn({id:"2026-08-17-vida-silvestre-acc",titulo:"Apoyo operativo Vida Silvestre ACC",fecha:"2026-08-17",funcionarios:["Fabricio Carbonell","Kenneth Mena","Jetzelly Villalobos"],lugar:"ACC",observaciones:"Confirmar detalles con Fabricio."}),kn({id:"2026-08-18-reserva-san-gerardo",titulo:"PPC Reserva San Gerardo",fecha:"2026-08-18",funcionarios:["Karen Valle","Yolanda Elizondo","Pablo Sánchez"],lugar:"Reserva San Gerardo"}),kn({id:"2026-08-30-rancho-lalo",titulo:"PPC Rancho de Lalo",fecha:"2026-08-30",funcionarios:["Jetzelly Villalobos","Mariano Solís"],lugar:"Rancho de Lalo"})],gL={PNTMM:"Parque Nacional Tapantí Macizo de la Muerte",PNLQ:"Parque Nacional Los Quetzales",PLE:"Puesto La Esperanza",PVM:"Puesto Villa Mills"},Ed={ENERO:1,FEBRERO:2,MARZO:3,ABRIL:4,MAYO:5,JUNIO:6,JULIO:7,AGOSTO:8,SETIEMBRE:9,SEPTIEMBRE:9,OCTUBRE:10,NOVIEMBRE:11,DICIEMBRE:12},Nd={ES:"Errol Salazar",ME:"Mayra Espinoza",YC:"Yeison Cortés",KM:"Kenneth Mena",FC:"Fabricio Carbonell",MN:"Monserrath Navarro",JPG:"Juan Pablo Granados",JG:"Juan Pablo Granados",PG:"Juan Pablo Granados",JP:"Juan Pablo Granados",LV:"Laura Valverde",JV:"Jetzelly Villalobos",DT:"Diana Tencio",KV:"Karen Valle",PS:"Pablo Sánchez",YE:"Yolanda Elizondo",MS:"Mariano Solís",MSA:"Mariano Solís",GP:"Guillermo Pérez",CC:"Carlos Cordero",JB:"Josué Brenes",AA:"Alexander Alvarado"},PL={MH:"MH",GG:"GG",MSG:"MSG",DA:"Dirección de Agua",GJ:"GJ",JC:"JC",IV:"IV",YV:"YV",VB:"VB",ASVO:"ASVO",TCU:"TCU",UCR:"UCR",TEC:"TEC",ICE:"ICE",ACLAP:"ACLAP",COVIRENA:"COVIRENA",COVIRENAS:"COVIRENA",PANTHERA:"Panthera",UNED:"UNED",INA:"INA",MOPT:"MOPT",FUNDECOR:"FUNDECOR",CEDARENA:"CEDARENA"},yL=new Set(["DOMINGO","LUNES","MARTES","MIÉRCOLES","JUEVES","VIERNES","SÁBADO"]),km=r=>r.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase(),ML=(r,o)=>new RegExp(`(^|[^A-Z])${o}([^A-Z]|$)`).test(r);function EL(r){const o=r.replace(/[^A-Za-z]/g,"").toUpperCase();return o.startsWith("PNTMM")?"PNTMM":["PNLQ","PLE","PVM"].includes(o)?o:""}function NL(r){const o=km(r),s=[],u=m=>{s.some(f=>f.nombre===m)||s.push({nombre:m,contacto:""})};for(const[m,f]of Object.entries(PL))ML(o,m)&&u(f);return/\bENZO\b/.test(o)&&u("Enzo"),/\bALEX(?:ANDER)?\b/.test(o)&&u("Alex"),/\bMERYLL(?:\s+ARIAS)?\b/.test(o)&&u("Meryll Arias"),/\bLUIS\s*DAVID\b|\bLUISDA\b/.test(o)&&u("Luis David"),/\bVOLUNTARI(?:O|A|OS|AS)\b/.test(o)&&u("Voluntariado"),/\bINVESTIGADOR(?:A|ES|AS)?\b/.test(o)&&u("Investigadores"),/\bPASANTES?\b/.test(o)&&u("Pasantes"),/\bESTUDIANTES?\b/.test(o)&&u("Estudiantes"),s}function CL(r){const o=km(r);return!!(/\bVOLUNTARI[OA]S?\b/.test(o)||/\bCOVIRENAS?\b/.test(o)||/\bINVITAD[OA]S?\b/.test(o)||/\bINVESTIGADOR/.test(o)||/\bPASANTES?\b/.test(o)||/\bESTUDIANTES?\b/.test(o)||/\bPRACTICANTES?\b/.test(o)||/\bENZO\b/.test(o)||/\bMERYLL\b/.test(o)||/^(INGRESAN?|SALEN?|PERNOCTAN?|LLEGAN?|VISITAN?)\b/.test(o))}function xL(r){const o=h=>{const T=h.match(/^([A-Za-z]{2,3})(?![A-Za-z])/);if(!T)return null;const L=T[1].toUpperCase();return Nd[L]?{nombre:Nd[L],largo:T[1].length}:null};let s=r.replace(/^\s+/,"");const u=o(s);if(!u)return{funcionarios:[],titulo:r.trim()};const m=[u.nombre];for(s=s.slice(u.largo);;){const h=s.match(/^(\s*(?:y|,|\/|-|–|&|;)\s*|\s+)/i);if(!h)break;const T=s.slice(h[0].length),L=o(T);if(!L)break;m.includes(L.nombre)||m.push(L.nombre),s=T.slice(L.largo)}const f=s.replace(/^\s*[:\-–]?\s*/,"").replace(/^(?:y|e|&|,|;)\s+/i,"").trim();return{funcionarios:m,titulo:f}}function SL(r){const o=[];for(const s of r){const u=o[o.length-1];if(u!==void 0&&/^[a-záéíóúñ]/.test(s)){const m=u.split(/\s+/).pop()||"";if(m.length===1&&/^[a-záéíóúñ]$/.test(m)){o[o.length-1]=u+s;continue}}o.push(s)}return o}function bL(r){const o=new Map;let s=0,u=0,m="";for(const h of r.split(/\r?\n/)){const T=h.trim();if(!T||yL.has(T)||/^_+$/.test(T)||T==="De"||/^Pestaña\s+\d+$/i.test(T))continue;const L=T.match(/^([A-ZÁÉÍÓÚÑ]+) 2026$/);if(L&&Ed[L[1]]){s=Ed[L[1]],u=0,m="";continue}if(/^\d{1,2}$/.test(T)){u=Number(T),m="";continue}const A=EL(T);if(A){m=A;continue}if(!s||!u||!m)continue;const E=`${s}-${u}-${m}`;o.has(E)||o.set(E,{mes:s,dia:u,sitio:m,textos:[]}),o.get(E).textos.push(T)}const f=[];for(const h of o.values()){const T=`2026-${String(h.mes).padStart(2,"0")}-${String(h.dia).padStart(2,"0")}`;let L=[],A=0;for(const E of SL(h.textos)){const{funcionarios:N,titulo:S}=xL(E);if(!S)continue;let w;N.length?(w=N,L=N):CL(E)?w=[]:L.length?w=L:w=[],f.push({id:`plan2026-${T}-${h.sitio}-${A++}`,titulo:S,categoria:"Otra actividad",inicio:T,fin:T,unDia:!0,horaInicio:"08:00",horaFin:"16:00",funcionarios:w,otrosParticipantes:NL(E),lugar:gL[h.sitio],observaciones:"",viatico:!1})}}return f}function Cd(r){return typeof(r==null?void 0:r.id)=="string"&&r.id.startsWith("plan2026-")}function VL(r,o,s){const u=(r||[]).filter(f=>!(Cd(f)&&(f.inicio||"")>=s)),m=(o||[]).filter(f=>Cd(f)&&(f.inicio||"")>=s);return[...u,...m]}async function AL(){const r=bL(vL);if(!r.length)throw new Error("La planificación 2026 no produjo actividades válidas.");return[...r,...hL]}const _s="btmm:planificacion2026:version",wL="btmm:planificacion2026:importada:v3";function kL(){const{setActividadesPlan:r}=Ot();return C.useEffect(()=>{let o=!1,s=null,u=null;try{s=window.localStorage.getItem(_s),u=window.localStorage.getItem(wL)}catch{}if(s!==js){if(!s&&u==="1"){try{window.localStorage.setItem(_s,js)}catch{}return}return(async()=>{try{const m=await AL();if(o)return;const f=s==null?"":el();r(h=>VL(h,m,f));try{window.localStorage.setItem(_s,js)}catch{}}catch(m){console.error("No fue posible sincronizar PLANIFICACION BTMM 2026",m)}})(),()=>{o=!0}}},[r]),null}const xd={flat:"bg-surface",inset:"bg-surface-inset",elevated:"border border-line bg-surface shadow-sm",interactive:"border border-line bg-surface transition-colors hover:border-line-strong hover:bg-surface-alt"};function da({title:r,icon:o,action:s,children:u,collapsible:m=!1,defaultOpen:f=!1,variant:h="flat",className:T="",ariaLabel:L}){const[A,E]=C.useState(f),N=!m||A;return c.jsxs("div",{className:`pnlq-card rounded-lg p-4 ${xd[h]??xd.flat} ${T}`,children:[c.jsxs("div",{className:`pnlq-card-header flex flex-wrap items-center justify-between gap-3 ${N?"mb-3":""}`,children:[m?c.jsxs("button",{type:"button",onClick:()=>E(S=>!S),"aria-expanded":A,"aria-label":L,className:"flex min-h-touch flex-1 items-center gap-2 text-left text-base font-semibold text-ink hover:text-brand",children:[c.jsx(en,{name:A?"chevronDown":"chevronRight",size:18,className:"shrink-0 text-ink-subtle"}),c.jsx("span",{children:o}),r]}):c.jsxs("div",{className:"flex items-center gap-2 text-base font-semibold text-ink",children:[c.jsx("span",{children:o}),r]}),s]}),N&&u]})}function Mt({children:r,className:o="",bordered:s=!1}){return c.jsx("span",{className:`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${s?"border":""} ${o}`,children:r})}function jL(r){return r.split(" ").slice(0,2).map(o=>o[0]).join("").toUpperCase()}function _L(r){return["bg-emerald-700 text-white","bg-sky-700 text-white","bg-rose-700 text-white","bg-amber-700 text-white","bg-purple-700 text-white"][r.charCodeAt(0)%5]}function Rv(r){return{Activo:"bg-emerald-100 text-emerald-900 border-emerald-200","De vacaciones":"bg-sky-100 text-sky-900 border-sky-200",Incapacitado:"bg-red-100 text-red-900 border-red-200",Inactivo:"bg-slate-100 text-slate-700 border-slate-200"}[r]||"bg-slate-100 text-slate-700 border-slate-200"}function Sd(r,o){const s=String(r||"").toUpperCase();return o&&!s?"bg-slate-600 text-white border-slate-700":s.startsWith("T")?"bg-emerald-700 text-white border-emerald-800":s.startsWith("I")?"bg-rose-700    text-white border-rose-800":s.startsWith("V")?"bg-sky-700     text-white border-sky-800":s.startsWith("L")?"bg-amber-700   text-white border-amber-800":s.startsWith("O")?"bg-violet-700  text-white border-violet-800":s?o?"bg-slate-600 text-white border-slate-700":"bg-emerald-700 text-white border-emerald-800":o?"bg-slate-600 text-white border-slate-700":"bg-slate-400 text-white border-slate-500"}function Pi({name:r}){return c.jsx("div",{className:`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${_L(r)}`,children:jL(r)})}const bd={half:"h-[60vh]",full:"max-h-[92vh]"};function rl({open:r,onClose:o,title:s,snapPoint:u="full",children:m}){const f=C.useRef(null),h=C.useRef({startY:0,dragging:!1});C.useEffect(()=>{if(!r)return;const E=N=>{N.key==="Escape"&&o()};return document.addEventListener("keydown",E),()=>document.removeEventListener("keydown",E)},[r,o]),C.useEffect(()=>(r?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[r]);const T=C.useCallback(E=>{h.current={startY:E.touches[0].clientY,dragging:!0}},[]),L=C.useCallback(E=>{if(!h.current.dragging)return;const N=E.touches[0].clientY-h.current.startY;N>0&&f.current&&(f.current.style.transform=`translateY(${N}px)`)},[]),A=C.useCallback(E=>{if(!h.current.dragging)return;const N=E.changedTouches[0].clientY-h.current.startY;h.current.dragging=!1,f.current&&(f.current.style.transform=""),N>80&&o()},[o]);return typeof document>"u"?null:tl.createPortal(c.jsxs(c.Fragment,{children:[c.jsx("div",{"aria-hidden":"true",onClick:o,className:["fixed inset-0 z-40 bg-black/50 transition-opacity duration-300",r?"opacity-100":"pointer-events-none opacity-0"].join(" ")}),c.jsxs("div",{ref:f,role:"dialog","aria-modal":"true","aria-label":s,className:["fixed inset-x-0 bottom-0 z-50 flex flex-col rounded-t-2xl bg-surface text-ink shadow-2xl","transition-transform duration-300 ease-out",bd[u]??bd.full,r?"translate-y-0":"translate-y-full"].join(" "),children:[c.jsx("div",{className:"flex cursor-grab touch-none items-center justify-center pb-1 pt-3",onTouchStart:T,onTouchMove:L,onTouchEnd:A,"aria-hidden":"true",children:c.jsx("span",{className:"h-1.5 w-10 rounded-full bg-line"})}),s&&c.jsxs("div",{className:"flex items-center justify-between border-b border-line px-5 pb-3 pt-1",children:[c.jsx("h2",{className:"text-base font-semibold text-ink",children:s}),c.jsx("button",{type:"button",onClick:o,"aria-label":"Cerrar",className:"inline-flex min-h-touch min-w-touch items-center justify-center rounded-full text-ink-muted hover:bg-surface-alt hover:text-ink",children:c.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M18 6 6 18M6 6l12 12"})})})]}),c.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-8 pt-4",children:m})]})]}),document.body)}function jm(r,o,s,u,m){return`${r}-${o+1}-${s}-${u}-${m}`}function RL(r,o,s,u){return`CFG-${r}-${o+1}-${s}-${u}`}function sr(r){const o=String(r||"10x5").toLowerCase();if(o.includes("administrativo"))return{trabajo:5,libre:2,administrativo:!0};const s=o.split("x");return{trabajo:Number(s[0])||10,libre:Number(s[1])||5,administrativo:!1}}function DL(r,o,s,u,m){const f=sr(r);if(f.administrativo){const L=new Date(u,m,o).getDay();return L>=1&&L<=5?`T${L}`:L===6?"L1":"L2"}const h=f.trabajo+f.libre,T=(o-s)%h;return o<s?"":T<f.trabajo?`T${T+1}`:`L${T-f.trabajo+1}`}function wi(r){return String(r||"").toUpperCase().startsWith("T")}function IL(r){const o=String(r||"").toUpperCase();return o.startsWith("T")?"Turno":o.startsWith("L")?"Libre":o.startsWith("V")?"Vacaciones":o.startsWith("I")?"Incapacidad":o.startsWith("O")?"Otro":o?"Turno":"Sin marcar"}function bi(r){const o=String(r||"").toUpperCase();return o.startsWith("T")?"T":o.startsWith("L")?"L":o.startsWith("V")?"V":o.startsWith("I")?"I":o.startsWith("O")?"O":""}function OL(r,o,s){const u=String(r||"").toUpperCase();if(!u)return"";const m=sr(s);return u==="T"?`T${(o-1)%m.trabajo+1}`:u==="L"?`L${(o-1)%m.libre+1}`:`${u}${o}`}function il(r,o){return r.find(s=>s.nombre===o)}function _m(r,o,s,u,m){const f=il(r,m);return f&&(o[RL(s,u,f.puestoOperativo||"Puesto Quetzales",m)]||f.modalidad)||"10x5"}function lr(r,o,s,u,m,f,h=null){const T=il(r,m);if(!T)return"";const L=T.puestoOperativo||"Puesto Quetzales",A=HT(s,u,h);return o[jm(s,u,L,m,f)]??DL(_m(r,o,s,u,m),f,A,s,u)}function FL({roleData:r,personas:o,year:s,month:u,persona:m,dia:f,categoria:h,feriados:T=null}){const L=il(o,m),A=(L==null?void 0:L.puestoOperativo)||"Puesto Quetzales",E=_m(o,r,s,u,m),N=Array.from({length:Jd(s,u)},(B,D)=>D+1),S={};for(const B of N)S[B]=bi(lr(o,r,s,u,m,B,T));S[f]=h;const w=QL({days:N,categorias:S,modalidad:E}),z={};for(const B of N)z[jm(s,u,A,m,B)]=w[B];return z}function Dv(r,o){const s=sr(o);if(s.administrativo)return null;const u=String(r||"").toUpperCase(),m=/^T(\d+)$/.exec(u);if(m){const h=Number(m[1]);return h>=1&&h<=s.trabajo?h-1:null}const f=/^L(\d+)$/.exec(u);if(f){const h=Number(f[1]);return h>=1&&h<=s.libre?s.trabajo+h-1:null}return null}function zL(r,o){const s=sr(o),u=s.trabajo+s.libre,m=(r%u+u)%u|0;return m<s.trabajo?`T${m+1}`:`L${m-s.trabajo+1}`}function Iv({modalidad:r,desde:o,hasta:s,posInicial:u=0}){const m=sr(r),f=[],h=new Date(s.year,s.month,s.day),T=new Date(o.year,o.month,o.day);let L=0;for(;T<=h;){const A=T.getFullYear(),E=T.getMonth(),N=T.getDate();let S;if(m.administrativo){const w=T.getDay();S=w>=1&&w<=5?`T${w}`:w===6?"L1":"L2"}else S=zL(u+L,r);f.push({year:A,month:E,day:N,valor:S}),T.setDate(T.getDate()+1),L+=1}return f}function Vd(r){return String(r).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Ov(r,o,s){if(!r)return null;const u=new RegExp(`^(\\d+)-(\\d+)-${Vd(o)}-${Vd(s)}-(\\d+)$`);let m=null,f=-1;for(const h of Object.keys(r)){const T=r[h];if(T==null||T==="")continue;const L=u.exec(h);if(!L)continue;const A=Number(L[1]),E=Number(L[2])-1,N=Number(L[3]),S=A*1e4+E*100+N;S>f&&(f=S,m={year:A,month:E,day:N})}return m}function QL({days:r,categorias:o,modalidad:s}){const u={};let m=null,f=0;return r.forEach(h=>{const T=o[h]||"";if(!T){m=null,f=0,u[h]="";return}T!==m?(m=T,f=1):f+=1,u[h]=OL(T,f,s)}),u}const Fv=["Administrador de ASP","Guardaparques","Asistente Administrativo","Técnico en Recursos Naturales","Personal Apoyo ONG-Invest-Volunt"],zv=["Activo","Inactivo","De vacaciones","Incapacitado"],Qv=["Propiedad","Interino","ONG-Invest-Volunt"],Jv=["Horario administrativo L-V","10x5","12x6","14x7","16x8","20x10"],JL="Secretaría Ejecutiva/Dirección ACC";function BL(r=Mi){return[...Array.isArray(r)&&r.length?r:Mi,JL]}const Ys="Atención rutinaria de visitantes",YL=[Ys];function Us(r,o){return r.filter(s=>o>=s.inicio&&o<=(s.fin||s.inicio))}function UL(r,o,s,u,m,f,h=null){return(r.funcionarios||[]).filter(T=>!wi(lr(m,f,s,u,T,o,h)))}function GL({onSwipeLeft:r,onSwipeRight:o,threshold:s=60,restraint:u=80,allowedTime:m=600}={}){const f=C.useRef(null);return C.useEffect(()=>{const h=f.current;if(!h)return;let T=0,L=0,A=0,E=!1;const N=w=>{var D;const z=(D=w.changedTouches)==null?void 0:D[0];if(!z)return;const B=w.target instanceof Element?w.target:null;E=!!(B!=null&&B.closest('button, a, input, select, textarea, [role="button"], [data-swipe-ignore], table, .overflow-x-auto, .overflow-auto'))||z.clientX<24||z.clientX>window.innerWidth-24,T=z.clientX,L=z.clientY,A=Date.now()},S=w=>{var G;const z=(G=w.changedTouches)==null?void 0:G[0];if(!z||E)return;const B=z.clientX-T,D=z.clientY-L;Date.now()-A>m||Math.abs(B)<s||Math.abs(D)>u||Math.abs(B)<=Math.abs(D)*1.2||(B<0?r==null||r():o==null||o())};return h.addEventListener("touchstart",N,{passive:!0}),h.addEventListener("touchend",S,{passive:!0}),()=>{h.removeEventListener("touchstart",N),h.removeEventListener("touchend",S)}},[r,o,s,u,m]),f}const Rm="(max-width: 767px)";function KL(){return typeof window>"u"||typeof window.matchMedia!="function"?!1:window.matchMedia(Rm).matches}function Dm(){const[r,o]=C.useState(KL);return C.useEffect(()=>{if(typeof window>"u"||typeof window.matchMedia!="function")return;const s=window.matchMedia(Rm),u=m=>o(m.matches);return o(s.matches),s.addEventListener?(s.addEventListener("change",u),()=>s.removeEventListener("change",u)):(s.addListener(u),()=>s.removeListener(u))},[]),r}const Im={2025:[{fecha:"2025-01-01",nombre:"Año Nuevo",obligatorio:!0},{fecha:"2025-04-11",nombre:"Juan Santamaría (trasladado a viernes)",obligatorio:!0},{fecha:"2025-04-17",nombre:"Jueves Santo",obligatorio:!0},{fecha:"2025-04-18",nombre:"Viernes Santo",obligatorio:!0},{fecha:"2025-05-01",nombre:"Día del Trabajo",obligatorio:!0},{fecha:"2025-07-25",nombre:"Anexión del Partido de Nicoya",obligatorio:!1},{fecha:"2025-08-02",nombre:"Virgen de los Ángeles",obligatorio:!0},{fecha:"2025-08-15",nombre:"Día de la Madre",obligatorio:!0},{fecha:"2025-09-15",nombre:"Independencia",obligatorio:!0},{fecha:"2025-12-01",nombre:"Abolición del Ejército",obligatorio:!0},{fecha:"2025-12-25",nombre:"Navidad",obligatorio:!0}],2026:[{fecha:"2026-01-01",nombre:"Año Nuevo",obligatorio:!0},{fecha:"2026-04-02",nombre:"Jueves Santo",obligatorio:!0},{fecha:"2026-04-03",nombre:"Viernes Santo",obligatorio:!0},{fecha:"2026-04-13",nombre:"Juan Santamaría (trasladado a lunes)",obligatorio:!0},{fecha:"2026-05-01",nombre:"Día del Trabajo",obligatorio:!0},{fecha:"2026-07-27",nombre:"Anexión del Partido de Nicoya (trasladado)",obligatorio:!1},{fecha:"2026-08-02",nombre:"Virgen de los Ángeles",obligatorio:!0},{fecha:"2026-08-17",nombre:"Día de la Madre (trasladado a lunes)",obligatorio:!0},{fecha:"2026-09-14",nombre:"Independencia (trasladado a lunes)",obligatorio:!0},{fecha:"2026-11-30",nombre:"Abolición del Ejército (trasladado a lunes)",obligatorio:!0},{fecha:"2026-12-25",nombre:"Navidad",obligatorio:!0}],2027:[{fecha:"2027-01-01",nombre:"Año Nuevo",obligatorio:!0},{fecha:"2027-03-25",nombre:"Jueves Santo",obligatorio:!0},{fecha:"2027-03-26",nombre:"Viernes Santo",obligatorio:!0},{fecha:"2027-04-12",nombre:"Juan Santamaría (trasladado a lunes)",obligatorio:!0},{fecha:"2027-05-01",nombre:"Día del Trabajo",obligatorio:!0},{fecha:"2027-07-26",nombre:"Anexión del Partido de Nicoya (trasladado)",obligatorio:!1},{fecha:"2027-08-02",nombre:"Virgen de los Ángeles",obligatorio:!0},{fecha:"2027-08-16",nombre:"Día de la Madre (trasladado a lunes)",obligatorio:!0},{fecha:"2027-09-13",nombre:"Independencia (trasladado a lunes)",obligatorio:!0},{fecha:"2027-11-29",nombre:"Abolición del Ejército (trasladado a lunes)",obligatorio:!0},{fecha:"2027-12-25",nombre:"Navidad",obligatorio:!0}]};function $L(r,o=!1){const s=Im[r]||[];return new Set(s.filter(u=>o||u.obligatorio).map(u=>u.fecha))}function Bv(r){return Object.prototype.hasOwnProperty.call(Im,String(r))}function qL(r,o){return o!=null&&o.aplicarFeriadosEnPrimerDiaLaboral?$L(r,!1):null}function ol(r){const{reglas:o}=Ot();return C.useMemo(()=>qL(r,o),[r,o])}function sl(r){const o=Number(r)||0;return Number.isInteger(o)?String(o):String(Math.round(o*100)/100)}function HL(r,o){return(r==null?void 0:r.magnitud)==="horas"?o("reposicion.horasN",{n:sl(r.horas)}):(r==null?void 0:r.magnitud)==="medioDia"?o("modalReposicion.magnitudMedioDia"):o("modalReposicion.magnitudDiaEntero")}function Yv(r,o){return(r==null?void 0:r.magnitud)==="horas"?o("reposicion.horasN",{n:sl(r.horas)}):(r==null?void 0:r.magnitud)==="medioDia"?o("reposicion.magnitudCorta.medioDia"):o("reposicion.magnitudCorta.diaEntero")}function Om(r,o=8){const s=Math.round((Number(r)||0)*100)/100;if(s<=0)return"0 h";const u=s/o;return Number.isInteger(u)?u===1?"1 día":`${u} días`:s===o/2?"½ día":`${sl(s)} h`}function WL({data:r,hj:o,cerrar:s,onModificarRol:u,onReposicion:m,onReponer:f,onEditarFecha:h}){K1(s);const T=Mn(),{funcionario:L,iso:A,rol:E,saldo:N=0}=r,S=({onClick:w,tono:z,titulo:B,desc:D})=>c.jsxs("button",{type:"button",onClick:w,className:`min-h-touch w-full rounded-2xl border px-4 py-3 text-left shadow-sm hover:brightness-95 ${z}`,children:[c.jsx("span",{className:"block text-sm font-semibold",children:B}),c.jsx("span",{className:"mt-0.5 block text-xs opacity-80",children:D})]});return c.jsx("div",{className:"fixed inset-0 z-[60] flex items-end justify-center bg-black/50 p-0 backdrop-blur-sm md:items-center md:p-4",onClick:w=>{w.target===w.currentTarget&&s()},children:c.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":T("asignacionLibre.titulo"),className:"w-full max-w-lg overflow-hidden rounded-t-3xl bg-white shadow-2xl md:rounded-3xl",children:[c.jsxs("div",{className:"flex items-start justify-between gap-3 border-b border-slate-200 p-5",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"text-lg font-semibold",children:T("asignacionLibre.titulo")}),c.jsx("p",{className:"text-sm text-slate-600",children:T("asignacionLibre.sub",{funcionario:L,fecha:et(A),rol:IL(E)})})]}),c.jsx("button",{onClick:s,"aria-label":T("acciones.cerrar"),className:"-mr-1 inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl text-lg font-semibold text-slate-500 hover:bg-slate-100 hover:text-slate-700",children:"✕"})]}),c.jsxs("div",{className:"space-y-2 p-5",children:[c.jsx(S,{onClick:u,tono:"border-emerald-300 bg-emerald-50 text-emerald-950",titulo:T("asignacionLibre.modificarRol"),desc:T("asignacionLibre.modificarRolDesc")}),c.jsx(S,{onClick:m,tono:"border-amber-300 bg-amber-50 text-amber-950",titulo:T("asignacionLibre.reposicion"),desc:T("asignacionLibre.reposicionDesc")}),N>0&&c.jsx(S,{onClick:f,tono:"border-sky-300 bg-sky-50 text-sky-950",titulo:T("asignacionLibre.reponer",{saldo:Om(N,o)}),desc:T("asignacionLibre.reponerDesc")}),c.jsx(S,{onClick:h,tono:"border-slate-300 bg-slate-50 text-slate-800",titulo:T("asignacionLibre.editarFecha"),desc:T("asignacionLibre.editarFechaDesc")})]}),c.jsx("div",{className:"flex justify-end border-t border-slate-200 bg-slate-50 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]",children:c.jsx("button",{onClick:s,className:"min-h-touch rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50",children:T("acciones.cancelar")})})]})})}function ZL({participantes:r=[],onChange:o,inputClass:s}){const u=(h,T,L)=>{o(r.map((A,E)=>E===h?{...A,[T]:L}:A))},m=()=>o([...r,{nombre:"",contacto:""}]),f=h=>o(r.filter((T,L)=>L!==h));return c.jsxs("section",{className:"mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-3",children:[c.jsxs("div",{className:"flex items-center justify-between gap-3",children:[c.jsxs("div",{children:[c.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-slate-600",children:"Otros participantes"}),c.jsx("p",{className:"mt-1 text-xs text-slate-500",children:"Personas, organizaciones o grupos que no figuran en el rol institucional."})]}),c.jsx("button",{type:"button",onClick:m,className:"inline-flex min-h-touch shrink-0 items-center rounded-xl border border-emerald-700 bg-white px-3 text-xs font-bold text-emerald-800 hover:bg-emerald-50",children:"+ Agregar"})]}),r.length===0?c.jsx("p",{className:"mt-3 text-xs text-slate-500",children:"Sin participantes externos registrados."}):c.jsx("div",{className:"mt-3 space-y-2",children:r.map((h,T)=>c.jsxs("div",{className:"grid gap-2 rounded-xl border border-slate-200 bg-white p-2 md:grid-cols-[1fr_1fr_auto]",children:[c.jsx("input",{className:s,value:h.nombre||"",onChange:L=>u(T,"nombre",L.target.value),placeholder:"Nombre, sigla o grupo","aria-label":`Nombre de otro participante ${T+1}`}),c.jsx("input",{className:s,value:h.contacto||"",onChange:L=>u(T,"contacto",L.target.value),placeholder:"Contacto: teléfono o correo","aria-label":`Contacto de otro participante ${T+1}`}),c.jsx("button",{type:"button",onClick:()=>f(T),className:"inline-flex min-h-touch items-center rounded-xl border border-red-300 px-3 text-xs font-bold text-red-800 hover:bg-red-50",children:"Eliminar"})]},`${T}-${h.nombre}`))})]})}function Gs({valor:r,personas:o,cerrar:s,guardar:u,eliminar:m,actividadesPlan:f=[]}){var En,_n,Bn;const{puestos:h}=Ot(),T=C.useMemo(()=>h.map(k=>k.nombre),[h]),{ref:L,titleId:A}=bm({onClose:s}),E=Mn(),{roleData:N={},setRoleData:S,reposiciones:w=[],setReposiciones:z,reglas:B}=Ot(),D=(B==null?void 0:B.horasJornada)??yn,[b,G]=C.useState(()=>({...r,categoria:r.categoria||"Otra actividad",horaInicio:r.horaInicio||"08:00",horaFin:r.horaFin||"16:00",funcionarios:r.funcionarios||[],otrosParticipantes:r.otrosParticipantes||[],observaciones:r.observaciones||""})),[le,W]=C.useState(null),[te,de]=C.useState(!1),se=(k,Pe)=>G(Ve=>({...Ve,[k]:Pe})),ve=Number((En=b.inicio)==null?void 0:En.slice(0,4)),Ee=Number((_n=b.inicio)==null?void 0:_n.slice(5,7))-1,ge=Number((Bn=b.inicio)==null?void 0:Bn.slice(8,10)),je=ol(ve),Ce=k=>b.inicio&&Number.isFinite(ve)?lr(o,N,ve,Ee,k,ge,je):"",he=k=>{const Pe=Ce(k);return Pe&&!wi(Pe)},Se=k=>LT(w,k,D),ie="w-full min-h-touch rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100",fe=T.map(k=>({puesto:k,items:o.filter(Pe=>Pe.puestoOperativo===k)})),ce=C.useMemo(()=>BL(T),[T]),O=ce.includes(b.lugar)?b.lugar:"Otro",Z=f.some(k=>k.id===b.id),Y=b.unDia?b.inicio:b.fin||b.inicio,P=k=>k.id!==b.id&&k.inicio<=Y&&(k.fin||k.inicio)>=b.inicio,j=k=>f.filter(Pe=>P(Pe)&&(Pe.funcionarios||[]).includes(k)),Q=k=>{b.funcionarios.includes(k)||se("funcionarios",[...b.funcionarios,k])},H=k=>se("funcionarios",b.funcionarios.filter(Pe=>Pe!==k)),ue=k=>{if(b.funcionarios.includes(k))return H(k);if(he(k)){W({funcionario:k,iso:b.inicio,rol:Ce(k),categoria:bi(Ce(k)),saldo:Se(k)});return}return Q(k)},me=()=>{const{funcionario:k}=le;S&&S(Pe=>({...Pe,...FL({roleData:Pe,personas:o,year:ve,month:Ee,persona:k,dia:ge,categoria:"T",feriados:je})})),Q(k),W(null)},Te=()=>{const{funcionario:k,categoria:Pe}=le;z&&z(Ve=>[gT({reposiciones:Ve,funcionario:k,fecha:b.inicio,categoria:Pe,detalle:b.titulo||""}),...Ve]),Q(k),W(null)},Le=()=>{const{funcionario:k}=le;if(z){const Pe={id:`c${Date.now()}`,fecha:b.inicio,magnitud:"diaEntero",horas:0};z(Ve=>PT(Ve,k,Pe,D))}H(k),W(null)},Ne=E(Z?"modalActividad.editar":"modalActividad.agregar"),Ye=()=>u({...b,categoria:"Otra actividad",horaInicio:b.horaInicio||"08:00",horaFin:b.horaFin||"16:00",otrosParticipantes:(b.otrosParticipantes||[]).filter(k=>{var Pe;return(Pe=k.nombre)==null?void 0:Pe.trim()}).map(k=>({nombre:k.nombre.trim(),contacto:(k.contacto||"").trim()}))});return c.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-0 backdrop-blur-sm md:items-center md:p-4",onClick:k=>{k.target===k.currentTarget&&s()},children:[c.jsxs("div",{ref:L,role:"dialog","aria-modal":"true","aria-labelledby":A,tabIndex:-1,className:"max-h-[100dvh] w-full max-w-4xl overflow-hidden rounded-none bg-white shadow-2xl outline-none md:max-h-[94dvh] md:rounded-3xl",children:[c.jsxs("div",{className:"flex items-start justify-between gap-3 border-b border-slate-200 p-5",children:[c.jsxs("div",{children:[c.jsx("h3",{id:A,className:"text-lg font-semibold",children:Ne}),c.jsx("p",{className:"text-sm text-slate-600",children:E("modalActividad.sub")})]}),c.jsx("button",{onClick:s,"aria-label":E("acciones.cerrar"),className:"-mr-1 inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl text-lg font-semibold text-slate-500 hover:bg-slate-100 hover:text-slate-700",children:"✕"})]}),c.jsxs("div",{className:"max-h-[72vh] overflow-y-auto p-5",children:[b.funcionarios.filter(k=>he(k)).length>0&&c.jsxs("div",{className:"mb-4 rounded-2xl border border-amber-300 bg-amber-50 p-3",children:[c.jsx("p",{className:"text-xs font-bold uppercase tracking-wider text-amber-800",children:E("modalActividad.libresAsignados")}),c.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:b.funcionarios.filter(k=>he(k)).map(k=>c.jsxs("button",{type:"button",onClick:()=>W({funcionario:k,iso:b.inicio,rol:Ce(k),categoria:bi(Ce(k)),saldo:Se(k)}),className:"inline-flex min-h-touch items-center gap-1 rounded-xl border border-amber-400 bg-white px-3 text-xs font-bold text-amber-900 hover:bg-amber-100",children:[k," · ",E("modalActividad.resolver")]},k))})]}),c.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[c.jsxs("label",{className:"md:col-span-2",children:[c.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:E("modalActividad.titulo")}),c.jsxs("div",{className:"grid gap-2 md:grid-cols-[260px_1fr]",children:[c.jsxs("select",{className:ie,value:b.titulo===Ys?Ys:"Otra",onChange:k=>se("titulo",k.target.value==="Otra"?"":k.target.value),children:[YL.map(k=>c.jsx("option",{value:k,children:k},k)),c.jsx("option",{value:"Otra",children:E("modalActividad.otra")})]}),c.jsx("input",{className:ie,value:b.titulo,onChange:k=>se("titulo",k.target.value),placeholder:E("modalActividad.placeholderTitulo")})]})]}),c.jsxs("label",{children:[c.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:"Categoría"}),c.jsx("input",{className:ie+" bg-slate-100",value:"Otra actividad",readOnly:!0})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[c.jsxs("label",{children:[c.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:"Hora inicio"}),c.jsx("input",{type:"time",className:ie,value:b.horaInicio,onChange:k=>se("horaInicio",k.target.value)})]}),c.jsxs("label",{children:[c.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:"Hora final"}),c.jsx("input",{type:"time",className:ie,value:b.horaFin,onChange:k=>se("horaFin",k.target.value)})]})]}),c.jsxs("label",{children:[c.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:E("modalActividad.fechaInicio")}),c.jsx("input",{type:"date",className:ie+" [color-scheme:light] dark:[color-scheme:dark]",value:b.inicio,onChange:k=>se("inicio",k.target.value)})]}),c.jsxs("label",{children:[c.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:E("modalActividad.fechaFinal")}),c.jsx("input",{type:"date",className:ie+" [color-scheme:light] dark:[color-scheme:dark]",value:b.unDia?b.inicio:b.fin,disabled:b.unDia,onChange:k=>se("fin",k.target.value)})]}),c.jsxs("label",{className:"flex items-center gap-2 rounded-xl border border-slate-300 p-3 text-sm font-semibold",children:[c.jsx("input",{type:"checkbox",checked:b.unDia,onChange:k=>G(Pe=>({...Pe,unDia:k.target.checked,fin:k.target.checked?Pe.inicio:Pe.fin}))}),E("modalActividad.unDia")]}),c.jsxs("label",{className:"flex items-center gap-2 rounded-xl border border-orange-300 bg-orange-50 p-3 text-sm font-semibold text-orange-950",children:[c.jsx("input",{type:"checkbox",checked:b.viatico,onChange:k=>se("viatico",k.target.checked)}),E("modalActividad.requiereViatico")]}),c.jsxs("label",{className:"md:col-span-2",children:[c.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:E("modalActividad.lugar")}),c.jsxs("div",{className:"grid gap-2",children:[c.jsxs("select",{className:ie,value:O,onChange:k=>se("lugar",k.target.value==="Otro"?"":k.target.value),children:[ce.map(k=>c.jsx("option",{value:k,children:k},k)),c.jsx("option",{value:"Otro",children:E("modalActividad.otro")})]}),O==="Otro"&&c.jsx("input",{className:ie,value:b.lugar,onChange:k=>se("lugar",k.target.value),placeholder:E("modalActividad.placeholderLugar")})]})]})]}),c.jsxs("div",{className:"mt-5",children:[c.jsxs("div",{className:"mb-2 flex flex-wrap items-center justify-between gap-2",children:[c.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-slate-500",children:E("modalActividad.participantes")}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsxs("label",{className:"flex items-center gap-1.5 rounded-full border border-sky-300 bg-sky-50 px-2.5 py-1 text-[11px] font-bold text-sky-900",children:[c.jsx("input",{type:"checkbox",checked:te,onChange:k=>de(k.target.checked)}),E("modalActividad.soloSaldo")]}),c.jsx(Mt,{className:"border-emerald-200 bg-emerald-100 text-emerald-900",children:E("modalActividad.seleccionados",{n:b.funcionarios.length})})]})]}),c.jsx("div",{className:"grid gap-3 md:grid-cols-3",children:fe.map(k=>{const Pe=te?k.items.filter(Ve=>Se(Ve.nombre)>0):k.items;return te&&Pe.length===0?null:c.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-slate-50 p-3",children:[c.jsx("div",{className:"mb-2 text-xs font-bold uppercase tracking-wider text-slate-500",children:k.puesto}),c.jsx("div",{className:"space-y-1.5",children:Pe.map(Ve=>{const Yn=j(Ve.nombre),nt=b.funcionarios.includes(Ve.nombre);return c.jsxs("div",{className:`rounded-xl border px-2 py-2 text-xs font-bold ${nt?"border-emerald-300 bg-emerald-100 text-emerald-950":Yn.length?"border-yellow-300 bg-yellow-50 text-yellow-950":"border-slate-200 bg-white text-slate-700"}`,children:[c.jsxs("label",{className:"flex items-center gap-2",children:[c.jsx("input",{type:"checkbox",checked:nt,onChange:()=>ue(Ve.nombre)}),Ve.nombre]}),(he(Ve.nombre)||Se(Ve.nombre)>0)&&c.jsxs("div",{className:"mt-1 flex flex-wrap gap-1",children:[!nt&&he(Ve.nombre)&&c.jsx("span",{className:"rounded-full border border-amber-300 bg-amber-100 px-1.5 py-0.5 text-[10px] font-bold text-amber-900",children:E("modalActividad.diaLibre")}),Se(Ve.nombre)>0&&c.jsx("span",{className:"rounded-full border border-sky-300 bg-sky-100 px-1.5 py-0.5 text-[10px] font-bold text-sky-900",children:E("modalActividad.saldoFavorMonto",{saldo:Om(Se(Ve.nombre),D)})})]}),Yn.length>0&&c.jsxs("div",{className:"mt-2 rounded-lg border border-yellow-300 bg-yellow-100 p-2 text-[11px] leading-snug text-yellow-950",children:[c.jsx("div",{className:"font-bold",children:E("modalActividad.avisoTraslape")}),c.jsx("div",{className:"mt-1 font-bold",children:Yn.map(tt=>tt.titulo).join(" · ")}),c.jsx("button",{type:"button",onClick:()=>Q(Ve.nombre),className:"mt-2 inline-flex min-h-touch items-center rounded-lg bg-yellow-700 px-3 text-[10px] font-bold text-white hover:bg-yellow-800",children:E("modalActividad.agregarAunAsi")})]})]},Ve.id)})})]},k.puesto)})})]}),c.jsx(ZL,{participantes:b.otrosParticipantes,onChange:k=>se("otrosParticipantes",k),inputClass:ie}),c.jsxs("label",{className:"mt-5 block",children:[c.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:E("modalActividad.obs")}),c.jsx("textarea",{className:`${ie} min-h-24`,value:b.observaciones,onChange:k=>se("observaciones",k.target.value),placeholder:E("modalActividad.placeholderObs")})]})]}),c.jsxs("div",{className:"flex flex-wrap justify-between gap-2 border-t border-slate-200 bg-slate-50 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]",children:[c.jsx("div",{children:Z&&c.jsx("button",{onClick:()=>m(b.id),className:"min-h-touch rounded-xl border border-red-300 bg-white px-4 py-2 text-sm font-semibold text-red-800 hover:bg-red-50",children:E("acciones.eliminar")})}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("button",{onClick:s,className:"min-h-touch rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50",children:E("acciones.cancelar")}),c.jsx("button",{onClick:Ye,className:"min-h-touch rounded-xl bg-emerald-800 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700",children:E("modalActividad.guardarActividad")})]})]})]}),le&&c.jsx(WL,{data:le,hj:D,cerrar:()=>W(null),onModificarRol:me,onReposicion:Te,onReponer:Le,onEditarFecha:()=>W(null)})]})}function XL(r,o,s){if(!Array.isArray(r)||!o||o.id==null||r.some(f=>(f==null?void 0:f.id)===o.id))return r;const u=Number.isInteger(s)?s:r.length,m=Math.max(0,Math.min(u,r.length));return[...r.slice(0,m),o,...r.slice(m)]}function Fm(r,o){const s=Mn(),{conDeshacer:u,exito:m}=Gd();return C.useCallback(f=>{const h=r||[],T=h.findIndex(E=>E.id===f);if(T<0)return;const L=h[T],A=String(L.titulo||"").trim()||s("actividad.sinTitulo");o(E=>E.filter(N=>N.id!==f)),u(s("actividad.eliminada",{titulo:A}),()=>{o(E=>XL(E,L,T)),m(s("actividad.restaurada",{titulo:A}))},{detalle:s("actividad.eliminadaDetalle")})},[r,o,u,m,s])}function yi({label:r}){const[o,...s]=String(r).split(" ");return s.length===0?r:c.jsxs(c.Fragment,{children:[o,c.jsx("br",{className:"sm:hidden"}),c.jsx("span",{className:"hidden sm:inline",children:" "}),s.join(" ")]})}function Rs({label:r,n:o,children:s,defaultOpen:u=!1}){const[m,f]=C.useState(u);return c.jsxs("div",{children:[c.jsxs("button",{type:"button",onClick:()=>f(h=>!h),"aria-expanded":m,className:"mb-1.5 flex min-h-touch w-full items-center gap-2 text-left active:scale-95",children:[c.jsx(en,{name:m?"chevronDown":"chevronRight",size:14,className:"shrink-0 text-ink-subtle"}),c.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider text-ink-muted",children:r}),c.jsx("span",{className:"rounded-full bg-surface-alt px-2 py-0.5 text-[10px] font-semibold text-ink-muted",children:o}),c.jsx("span",{className:"h-px flex-1 bg-line/50"})]}),m&&s]})}function Ds({trabajada:r,reposicion:o,t:s}){return!r&&!o?null:c.jsxs(c.Fragment,{children:[r&&c.jsxs(Mt,{className:"border-amber-300 bg-amber-100 text-amber-900",children:["⚑ ",r.folio," · ",HL(r,s)," · ",s(`reposicion.estado.${r.estadoCalc||"Pendiente"}`).toLowerCase()]}),o&&c.jsxs(Mt,{className:"border-sky-300 bg-sky-100 text-sky-900",children:["⟲ ",o.folio," · ",s("reposicion.marca.reposicionDe",{fecha:et(o.fecha)})]})]})}function ev({diaVista:r,setDiaVista:o,personas:s,actividadesPlan:u,setActividadesPlan:m,roleData:f,reposiciones:h=[],hj:T}){const L=Mn(),A=Dm(),{puestos:E}=Ot(),N=C.useMemo(()=>E.map(V=>V.nombre),[E]),{trabajadas:S,reposiciones:w}=fT(h,T),z=V=>({trabajada:S[`${V}|${r}`],reposicion:w[`${V}|${r}`]}),[B,D]=C.useState(null),[b,G]=C.useState("general"),[le,W]=C.useState(""),[te,de,se]=r.split("-").map(Number),ve=de-1,Ee=ol(te),ge=s.filter(V=>V.estado!=="Inactivo"),je=[0,6].includes(new Date(r+"T12:00:00").getDay()),Ce=Y1[new Date(r+"T12:00:00").getDay()],he=ge.map(V=>{const F=lr(s,f,te,ve,V.nombre,se,Ee),ae=bi(F),be=wi(F),Nn=Us(u,r).filter(zt=>(zt.funcionarios||[]).includes(V.nombre));return{...V,rol:F,cat:ae,enTurno:be,acts:Nn,tieneActividad:Nn.length>0,tieneViatico:Nn.some(zt=>zt.viatico)}}),Se=he.filter(V=>V.enTurno&&V.tieneActividad),ie=he.filter(V=>V.enTurno&&!V.tieneActividad),fe=he.filter(V=>!V.enTurno),ce=he.filter(V=>V.tieneViatico),O=(V,F)=>String(V||"").localeCompare(String(F||""),"es-CR",{sensitivity:"base"}),Z=new Map(ge.map(V=>[V.nombre,V])),Y=Us(u,r).map(V=>({...V,funcionarios:[...V.funcionarios||[]].sort(O)})).sort((V,F)=>O(V.funcionarios[0]||"￿",F.funcionarios[0]||"￿")||O(V.titulo,F.titulo)),P=[...new Set(Y.flatMap(V=>V.funcionarios))].sort(O),j=[...new Set(P.map(V=>{var F;return(F=Z.get(V))==null?void 0:F.puestoOperativo}).filter(Boolean))].sort(O),Q=b==="funcionario"?P:b==="puesto"?j:[],H=Q.includes(le)?le:Q[0]||"",ue=Y.filter(V=>b==="funcionario"?V.funcionarios.includes(H):b==="puesto"?V.funcionarios.some(F=>{var ae;return((ae=Z.get(F))==null?void 0:ae.puestoOperativo)===H}):!0),me=N.map(V=>{const F=he.filter(be=>(be.puestoOperativo||"")===V),ae=F.filter(be=>be.enTurno);return{puesto:V,fuera:F.length-ae.length,turno:ae.length,conActividad:ae.filter(be=>be.tieneActividad).length,sinActividad:ae.filter(be=>!be.tieneActividad).length}}),Te=me.reduce((V,F)=>({fuera:V.fuera+F.fuera,turno:V.turno+F.turno,conActividad:V.conActividad+F.conActividad,sinActividad:V.sinActividad+F.sinActividad}),{fuera:0,turno:0,conActividad:0,sinActividad:0}),Le={L:"Libre",V:"Vacaciones",I:"Incapacidad",O:"Otro","":"Sin marcar"},Ne={L:"border-amber-700 bg-amber-700 text-white",V:"border-sky-700 bg-sky-700 text-white",I:"border-red-700 bg-red-700 text-white",O:"border-violet-700 bg-violet-700 text-white","":"border-slate-500 bg-slate-500 text-white"},Ye=fe.reduce((V,F)=>{const ae=F.cat||"";return V[ae]||(V[ae]=[]),V[ae].push(F),V},{}),En=V=>{const F=N.map(be=>({key:be,label:be.replace("Puesto ",""),items:V.filter(Nn=>(Nn.puestoOperativo||"")===be)})),ae=V.filter(be=>!N.includes(be.puestoOperativo||""));return ae.length&&F.push({key:"__sin__",label:L("funcionarios.sinPuesto"),items:ae}),F.filter(be=>be.items.length>0)},_n=V=>{const F=new Date(r+"T12:00:00");F.setDate(F.getDate()+V),o(`${F.getFullYear()}-${Qn(F.getMonth()+1)}-${Qn(F.getDate())}`)},Bn=V=>{if(!V.titulo.trim())return;const F={...V,fin:V.unDia?V.inicio:V.fin||V.inicio};F.fin<F.inicio&&(F.fin=F.inicio),m(ae=>ae.some(be=>be.id===F.id)?ae.map(be=>be.id===F.id?F:be):[...ae,F]),D(null)},k=Fm(u,m),Pe=V=>{D(null),k(V)},Ve=(V=[],F="")=>({id:`a${Date.now()}`,titulo:"",inicio:r,fin:r,unDia:!0,funcionarios:V,lugar:F,observaciones:"",viatico:!1}),Yn=GL({onSwipeLeft:()=>_n(1),onSwipeRight:()=>_n(-1)}),nt=B&&u.some(V=>V.id===B.id)?L("dia.editarActividad",{defaultValue:"Editar actividad"}):L("dia.nuevaActividad",{defaultValue:"Nueva actividad"}),tt=B?c.jsx(Gs,{valor:B,personas:ge,cerrar:()=>D(null),guardar:Bn,eliminar:Pe,actividadesPlan:u}):null;return c.jsxs("section",{ref:Yn,className:"space-y-4",children:[c.jsxs("div",{className:"flex items-center gap-2 rounded-lg border border-line bg-surface p-2 sm:gap-3 sm:p-3",children:[c.jsx("button",{onClick:()=>_n(-1),"aria-label":L("dia.diaAnterior"),className:"inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl border border-line bg-surface text-ink-muted transition-colors hover:bg-surface-alt active:scale-95",children:c.jsx(en,{name:"chevronLeft",size:20})}),c.jsxs("div",{className:"flex min-w-0 flex-1 flex-col items-center gap-0.5",children:[c.jsxs("span",{className:"truncate text-[10px] font-semibold uppercase tracking-wider text-ink-muted sm:text-xs",children:[Ce," · ",Cm[ve]," ",te]}),c.jsx("input",{type:"date",value:r,onChange:V=>V.target.value&&o(V.target.value),"aria-label":L("dia.seleccionarFecha"),className:"min-h-touch w-full max-w-[13rem] rounded-xl border border-line bg-surface px-2 py-1 text-center text-sm font-semibold text-ink outline-none focus:border-brand [color-scheme:light] dark:[color-scheme:dark]"})]}),c.jsx("button",{onClick:()=>_n(1),"aria-label":L("dia.diaSiguiente"),className:"inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl border border-line bg-surface text-ink-muted transition-colors hover:bg-surface-alt active:scale-95",children:c.jsx(en,{name:"chevronRight",size:20})})]}),c.jsxs("div",{className:"grid gap-4 md:grid-cols-[minmax(19rem,0.85fr)_minmax(0,1.25fr)] md:items-start xl:grid-cols-[minmax(24rem,0.8fr)_minmax(0,1.4fr)]",children:[c.jsx(da,{title:L("dia.porPuesto"),icon:"📍",children:c.jsx("div",{className:"overflow-hidden rounded-lg border border-line",children:c.jsxs("table",{className:"w-full table-fixed border-collapse text-sm",children:[c.jsx("thead",{className:"bg-surface-alt text-[9px] uppercase leading-[1.15] tracking-tight text-ink-muted sm:text-[11px] sm:tracking-wide",children:c.jsxs("tr",{children:[c.jsx("th",{scope:"col",className:"w-[26%] px-1.5 py-2 text-left sm:px-3 sm:py-3",children:L("dia.th.puesto")}),c.jsx("th",{scope:"col",className:"px-0 py-2 text-center sm:px-3 sm:py-3",children:c.jsx(yi,{label:L("dia.th.fuera")})}),c.jsx("th",{scope:"col",className:"px-0 py-2 text-center sm:px-3 sm:py-3",children:c.jsx(yi,{label:L("dia.th.enTurno")})}),c.jsx("th",{scope:"col",className:"px-0 py-2 text-center sm:px-3 sm:py-3",children:c.jsx(yi,{label:L("dia.th.conActividad")})}),c.jsx("th",{scope:"col",className:"px-0 py-2 text-center sm:px-3 sm:py-3",children:c.jsx(yi,{label:L("dia.th.sinActividad")})})]})}),c.jsx("tbody",{className:"divide-y divide-line",children:me.map(({puesto:V,fuera:F,turno:ae,conActividad:be,sinActividad:Nn})=>c.jsxs("tr",{className:"hover:bg-surface-alt",children:[c.jsx("th",{scope:"row",className:"px-1.5 py-2 text-left text-[11px] font-semibold text-ink sm:px-3 sm:py-3 sm:text-sm",children:V.replace("Puesto ","")}),c.jsx("td",{className:`px-1 py-2 text-center text-base font-semibold sm:px-3 sm:py-3 sm:text-lg ${F>0?"text-ink-muted":"text-ink-subtle"}`,children:F}),c.jsx("td",{className:"px-1 py-2 text-center text-base font-semibold text-ok sm:px-3 sm:py-3 sm:text-lg",children:ae}),c.jsx("td",{className:"px-1 py-2 text-center text-base font-semibold text-info sm:px-3 sm:py-3 sm:text-lg",children:be}),c.jsx("td",{className:`px-1 py-2 text-center text-base font-semibold sm:px-3 sm:py-3 sm:text-lg ${Nn>0?"text-warning":"text-ink-subtle"}`,children:Nn})]},V))}),c.jsx("tfoot",{children:c.jsxs("tr",{className:"border-t-2 border-line-strong bg-surface-alt",children:[c.jsx("th",{scope:"row",className:"px-1.5 py-2 text-left text-[11px] font-bold text-ink sm:px-3 sm:py-3 sm:text-sm",children:L("dia.th.total")}),c.jsx("td",{className:"px-1 py-2 text-center text-base font-bold text-ink-muted sm:px-3 sm:py-3 sm:text-lg",children:Te.fuera}),c.jsx("td",{className:"px-1 py-2 text-center text-base font-bold text-ok sm:px-3 sm:py-3 sm:text-lg",children:Te.turno}),c.jsx("td",{className:"px-1 py-2 text-center text-base font-bold text-info sm:px-3 sm:py-3 sm:text-lg",children:Te.conActividad}),c.jsx("td",{className:`px-1 py-2 text-center text-base font-bold sm:px-3 sm:py-3 sm:text-lg ${Te.sinActividad>0?"text-warning":"text-ink-subtle"}`,children:Te.sinActividad})]})})]})})}),c.jsxs(da,{title:L("dia.actividadesTituloCorto",{n:Y.length}),ariaLabel:L("dia.actividadesTitulo",{n:Y.length}),icon:"🗓️",collapsible:!0,action:c.jsxs("button",{id:"dia-boton-nueva-actividad",onClick:()=>D(Ve()),className:"inline-flex min-h-touch items-center gap-1 rounded-xl bg-emerald-800 px-3 py-2 text-xs font-semibold text-white transition-all hover:bg-emerald-700 active:scale-95 active:brightness-90",children:[c.jsx(en,{name:"plus",size:14}),L("dia.nuevaCorta")]}),children:[c.jsxs("div",{className:"mb-4 rounded-xl border border-line bg-surface-inset p-3",children:[c.jsx("div",{className:"mb-2 text-xs font-bold uppercase tracking-wide text-ink-muted",children:L("dia.filtroActividades.mostrar")}),c.jsx("div",{role:"group","aria-label":L("dia.filtroActividades.aria"),className:"grid grid-cols-3 gap-1 rounded-xl bg-surface-alt p-1",children:[["general",L("dia.filtroActividades.general")],["funcionario",L("dia.filtroActividades.funcionario")],["puesto",L("dia.filtroActividades.puesto")]].map(([V,F])=>c.jsx("button",{type:"button","aria-pressed":b===V,onClick:()=>{G(V),W("")},className:`min-h-touch rounded-lg px-2 py-2 text-xs font-semibold transition-colors sm:text-sm ${b===V?"bg-surface text-brand shadow-sm":"text-ink-muted hover:bg-surface hover:text-ink"}`,children:F},V))}),b!=="general"&&c.jsxs("label",{className:"mt-3 block text-xs font-semibold text-ink-muted",children:[L(b==="funcionario"?"dia.filtroActividades.seleccionarFuncionario":"dia.filtroActividades.seleccionarPuesto"),c.jsx("select",{value:H,onChange:V=>W(V.target.value),className:"mt-1 min-h-touch w-full rounded-xl border border-line bg-surface px-3 text-sm font-semibold text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20",children:Q.map(V=>c.jsx("option",{value:V,children:b==="puesto"?V.replace("Puesto ",""):V},V))})]}),c.jsx("div",{"aria-live":"polite",className:"mt-2 text-xs text-ink-muted",children:L("dia.filtroActividades.resultados",{n:ue.length,total:Y.length})})]}),ue.length===0?c.jsx("div",{className:"rounded-xl border border-dashed border-line p-6 text-center text-sm text-ink-muted",children:L("dia.sinActividades")}):c.jsx("div",{className:"space-y-3",children:ue.map(V=>{const F=UL(V,se,te,ve,s,f,Ee);return c.jsxs("div",{"data-actividad-id":V.id,className:`rounded-lg p-4 ${F.length?"border-l-4 border-red-600 bg-surface":V.viatico?"border border-viatico/40 bg-viatico-soft":"border border-ok/40 bg-ok-soft"}`,children:[c.jsxs("div",{className:"flex items-start justify-between gap-2",children:[c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsx("div",{className:"break-words font-semibold text-ink",children:V.titulo}),V.lugar&&c.jsxs("div",{className:"mt-0.5 text-xs text-ink-muted",children:["📍 ",V.lugar]}),V.inicio!==(V.fin||V.inicio)&&c.jsxs("div",{className:"mt-0.5 text-xs text-ink-muted",children:[et(V.inicio)," → ",et(V.fin)]})]}),c.jsx("button",{onClick:()=>D({...V}),className:"inline-flex min-h-touch shrink-0 items-center rounded-lg border border-line bg-surface px-3 text-xs font-semibold text-ink transition-all hover:bg-surface-alt active:scale-95",children:L("acciones.editar")})]}),(V.viatico||F.length>0)&&c.jsxs("div",{className:"mt-1.5 flex flex-wrap items-center gap-1.5",children:[V.viatico&&c.jsx(Mt,{className:"border-orange-300 bg-orange-100 text-orange-900",children:L("dia.viaticoBadge")}),F.length>0&&c.jsx(Mt,{className:"border-red-300 bg-red-100 text-red-900",children:L("dia.conflictosBadge",{n:F.length,plural:fd(F.length)})})]}),V.funcionarios.length>0&&c.jsx("div",{className:"mt-2.5 flex flex-wrap gap-1",children:V.funcionarios.map(ae=>c.jsxs("span",{className:`rounded-full border px-2 py-0.5 text-[11px] font-semibold ${F.includes(ae)?"border-red-400 bg-surface text-critical":"border-ok/50 bg-surface text-ok-fg"}`,children:[ae,F.includes(ae)?" ⚠":""]},ae))})]},V.id)})})]})]}),c.jsxs("div",{className:"grid gap-4 xl:grid-cols-2 xl:items-start",children:[c.jsx(da,{title:L("dia.enTurnoConActTitulo",{n:Se.length}),icon:"✅",collapsible:!0,defaultOpen:!1,children:Se.length===0?c.jsx("p",{className:"text-sm text-ink-muted",children:L("dia.enTurnoConActVacio")}):c.jsx("div",{className:"space-y-4",children:En(Se).map(V=>c.jsx(Rs,{label:V.label,n:V.items.length,children:c.jsx("div",{className:"divide-y divide-line/50",children:V.items.map(F=>c.jsxs("div",{className:"flex items-start gap-3 py-3",children:[c.jsx(Pi,{name:F.nombre}),c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsxs("div",{className:"flex flex-wrap items-center gap-1.5",children:[c.jsx("span",{className:"break-words text-sm font-semibold text-ink",children:F.nombre}),c.jsx(Mt,{className:Sd(F.rol,je),children:F.rol}),F.tieneViatico&&c.jsx(Mt,{className:"border-orange-600 bg-orange-600 text-white",children:L("dia.viaticoBadge")}),c.jsx(Ds,{...z(F.nombre),t:L})]}),c.jsx("div",{className:"mt-1.5 flex flex-wrap gap-1",children:F.acts.map(ae=>c.jsx("span",{className:"rounded-full border border-ok/50 bg-surface px-2 py-0.5 text-[11px] text-ok-fg",children:ae.titulo},ae.id))})]})]},F.id))})},V.key))})}),c.jsx(da,{title:L("dia.enTurnoSinActTitulo",{n:ie.length}),icon:ie.length>0?"⚠️":"✅",collapsible:!0,children:ie.length===0?c.jsx("p",{className:"text-sm text-ink-muted",children:L("dia.enTurnoSinActVacio")}):c.jsx("div",{className:"space-y-4",children:En(ie).map(V=>c.jsx(Rs,{label:V.label,n:V.items.length,children:c.jsx("div",{className:"divide-y divide-line/50",children:V.items.map(F=>c.jsxs("div",{className:"py-3",children:[c.jsxs("div",{className:"flex items-start gap-3",children:[c.jsx(Pi,{name:F.nombre}),c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsxs("div",{className:"flex flex-wrap items-center gap-1.5",children:[c.jsx("span",{className:"break-words text-sm font-semibold text-ink",children:F.nombre}),c.jsx(Mt,{className:Sd(F.rol,je),children:F.rol}),c.jsx(Ds,{...z(F.nombre),t:L})]}),c.jsx("div",{className:"mt-0.5 text-xs text-ink-muted",children:F.puesto})]})]}),c.jsx("button",{onClick:()=>D(Ve([F.nombre],F.puestoOperativo||"")),className:"mt-2 inline-flex min-h-touch w-full items-center justify-center rounded-xl bg-warning px-3 py-2 text-sm font-semibold text-ink-inverse transition-all hover:opacity-90 active:scale-95 sm:w-auto",children:L("dia.asignar")})]},F.id))})},V.key))})}),c.jsx(da,{title:L("dia.fueraDeTurnoTitulo",{n:fe.length}),icon:"📴",collapsible:!0,defaultOpen:!1,children:fe.length===0?c.jsx("p",{className:"text-sm text-ink-muted",children:L("dia.fueraDeTurnoVacio")}):c.jsx("div",{className:"space-y-4",children:Object.entries(Ye).sort(([V],[F])=>(Le[V]||"z").localeCompare(Le[F]||"z")).map(([V,F])=>c.jsxs("div",{children:[c.jsxs("div",{className:"mb-2 flex items-center gap-2",children:[c.jsx("span",{className:`rounded-full px-2.5 py-0.5 text-xs font-semibold ${Ne[V]}`,children:Le[V]||"Sin marcar"}),c.jsx("span",{className:"text-xs text-ink-muted",children:L("dia.nFuncionarios",{n:F.length,plural:fd(F.length)})})]}),c.jsx("div",{className:"flex flex-wrap gap-2",children:F.map(ae=>c.jsxs("div",{className:"flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2",children:[c.jsx(Pi,{name:ae.nombre}),c.jsxs("div",{children:[c.jsx("div",{className:"text-sm font-semibold text-ink",children:ae.nombre}),c.jsx("div",{className:"text-[10px] text-ink-muted",children:(ae.puestoOperativo||"").replace("Puesto ","")}),c.jsx("div",{className:"mt-1 flex flex-wrap gap-1",children:c.jsx(Ds,{...z(ae.nombre),t:L})})]})]},ae.id))})]},V))})}),ce.length>0&&c.jsx(da,{title:L("dia.conViaticoTitulo",{n:ce.length}),icon:"💵",collapsible:!0,defaultOpen:!1,children:c.jsx("div",{className:"space-y-4",children:En(ce).map(V=>c.jsx(Rs,{label:V.label,n:V.items.length,children:c.jsx("div",{className:"divide-y divide-line/50",children:V.items.map(F=>c.jsxs("div",{className:"flex items-start gap-3 py-2.5",children:[c.jsx(Pi,{name:F.nombre}),c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsx("div",{className:"font-semibold text-ink",children:F.nombre}),c.jsx("div",{className:"mt-1 flex flex-wrap gap-1",children:F.acts.filter(ae=>ae.viatico).map(ae=>c.jsxs("span",{className:"rounded-full border border-viatico/40 bg-viatico-soft px-2 py-0.5 text-[11px] text-viatico-fg",children:[ae.titulo,ae.lugar?` · ${ae.lugar}`:""]},ae.id))})]})]},F.id))})},V.key))})})]}),B&&(A?c.jsx(rl,{open:!!B,onClose:()=>D(null),title:nt,children:tt}):tt)]})}function nv({enTurno:r,sinActividad:o,nAlertas:s=0,onIrAlertas:u,onAyuda:m}){const f=Mn();return c.jsxs("div",{className:"space-y-3 md:hidden",children:[c.jsxs("div",{className:"flex items-center justify-between gap-2",children:[c.jsx("h2",{className:"text-base font-bold text-ink",children:f("dia.resumenTitulo")}),c.jsx("button",{type:"button",onClick:m,"aria-label":f("dia.ayudaAria"),className:"inline-flex min-h-touch min-w-touch items-center justify-center rounded-xl border border-line bg-surface text-ink-muted hover:bg-surface-alt",children:c.jsx(en,{name:"info",size:22})})]}),c.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[c.jsxs("div",{className:"rounded-xl border border-ok/30 bg-ok-soft px-2 py-3 text-center",children:[c.jsx("div",{className:"text-3xl font-bold tabular-nums text-ok-fg",children:r}),c.jsx("div",{className:"mt-1 text-sm font-semibold leading-tight text-ok-fg",children:f("dia.resumenEnTurno")})]}),c.jsxs("div",{className:`rounded-xl border px-2 py-3 text-center ${o>0?"border-warning/40 bg-warning-soft":"border-line bg-surface"}`,children:[c.jsx("div",{className:`text-3xl font-bold tabular-nums ${o>0?"text-warning-fg":"text-ink-muted"}`,children:o}),c.jsx("div",{className:`mt-1 text-sm font-semibold leading-tight ${o>0?"text-warning-fg":"text-ink-muted"}`,children:f("dia.resumenSinActividad")})]}),c.jsxs("button",{type:"button",onClick:u,className:`min-h-touch rounded-xl border px-2 py-3 text-center active:scale-95 ${s>0?"border-critical/40 bg-critical-soft":"border-line bg-surface"}`,children:[c.jsx("div",{className:`text-3xl font-bold tabular-nums ${s>0?"text-critical-fg":"text-ink-muted"}`,children:s}),c.jsx("div",{className:`mt-1 text-sm font-semibold leading-tight ${s>0?"text-critical-fg":"text-ink-muted"}`,children:f("dia.resumenAlertas")})]})]}),o>0&&c.jsx("p",{className:"text-sm leading-relaxed text-ink-muted",children:f("dia.resumenPistaSinActividad")})]})}function tv({open:r,onClose:o,topic:s="dia"}){const u=Mn(),m=u(`help.${s}.titulo`),f=u(`help.${s}.lineas`),h=Array.isArray(f)?f:[String(f)];return c.jsxs(rl,{open:r,onClose:o,title:m,snapPoint:"half",children:[c.jsx("ol",{className:"list-decimal space-y-3 pl-5 text-base leading-relaxed text-ink",children:h.map((T,L)=>c.jsx("li",{children:T},L))}),c.jsx("button",{type:"button",onClick:o,className:"mt-6 inline-flex min-h-touch w-full items-center justify-center rounded-xl bg-brand px-4 text-base font-semibold text-brand-fg",children:u("acciones.cerrar")})]})}function av(r){const{diaVista:o,setDiaVista:s,personas:u,actividadesPlan:m,setActividadesPlan:f,roleData:h,reposiciones:T,hj:L,nAlertas:A=0,setView:E}=r,N=Mn(),S=Dm(),[w,z]=C.useState(null),[B,D]=C.useState(!1),[b,G,le]=String(o||"").split("-").map(Number),W=(G||1)-1,te=ol(b||new Date().getFullYear()),{enTurno:de,sinActividad:se}=C.useMemo(()=>{const ie=(u||[]).filter(O=>O.estado!=="Inactivo");let fe=0,ce=0;for(const O of ie){const Z=lr(u,h,b,W,O.nombre,le,te);if(!wi(Z))continue;fe+=1,Us(m,o).filter(P=>(P.funcionarios||[]).includes(O.nombre)).length===0&&(ce+=1)}return{enTurno:fe,sinActividad:ce}},[u,h,b,W,le,te,m,o]),[ve,Ee]=C.useState(!1);C.useEffect(()=>{const ie=document.getElementById("dia-boton-nueva-actividad");if(!ie||typeof IntersectionObserver>"u")return;const fe=new IntersectionObserver(([ce])=>Ee(ce.isIntersecting),{rootMargin:"-70px 0px -90px 0px"});return fe.observe(ie),()=>fe.disconnect()},[]);const ge=u.filter(ie=>ie.estado!=="Inactivo"),je=C.useCallback(()=>({id:`a${Date.now()}`,titulo:"",inicio:o,fin:o,unDia:!0,funcionarios:[],lugar:"",observaciones:"",viatico:!1}),[o]),Ce=C.useCallback(ie=>{if(!ie.titulo.trim())return;const fe={...ie,fin:ie.unDia?ie.inicio:ie.fin||ie.inicio};fe.fin<fe.inicio&&(fe.fin=fe.inicio),f(ce=>ce.some(O=>O.id===fe.id)?ce.map(O=>O.id===fe.id?fe:O):[...ce,fe]),z(null)},[f]),he=Fm(m,f),Se=C.useCallback(ie=>{z(null),he(ie)},[he]);return c.jsxs("div",{className:"relative mx-auto w-full max-w-md md:max-w-4xl lg:max-w-6xl xl:max-w-7xl",children:[S&&c.jsxs("div",{className:"mb-3 space-y-3 md:hidden",children:[c.jsx(xm,{prominent:!0}),c.jsx(nv,{enTurno:de,sinActividad:se,nAlertas:A,onIrAlertas:()=>typeof E=="function"&&E("alertas"),onAyuda:()=>D(!0)})]}),c.jsx(ev,{...r}),c.jsx("button",{type:"button",onClick:()=>z(je()),"aria-label":N("dia.nueva"),"aria-hidden":ve,tabIndex:ve?-1:0,className:["fixed z-40 flex h-14 w-14 items-center justify-center","rounded-full bg-emerald-700 text-white shadow-lg","hover:bg-emerald-600 active:scale-95","transition-all duration-200","bottom-[5.5rem] right-4","md:hidden",ve?"pointer-events-none scale-50 opacity-0":"scale-100 opacity-100"].join(" "),children:c.jsx("svg",{viewBox:"0 0 24 24",width:"28",height:"28",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:c.jsx("path",{d:"M12 5v14M5 12h14"})})}),w&&(S?c.jsx(rl,{open:!!w,onClose:()=>z(null),title:N("modalActividad.agregar"),snapPoint:"full",children:c.jsx(Gs,{valor:w,personas:ge,cerrar:()=>z(null),guardar:Ce,eliminar:Se,actividadesPlan:m,embebido:!0})}):c.jsx(Gs,{valor:w,personas:ge,cerrar:()=>z(null),guardar:Ce,eliminar:Se,actividadesPlan:m})),c.jsx(tv,{open:B,onClose:()=>D(!1),topic:"dia"})]})}const rv=C.lazy(()=>Pn(()=>import("./Roles-Cnc9CvYU.js"),[])),iv=C.lazy(()=>Pn(()=>import("./Funcionarios-DXrxp5Xy.js"),__vite__mapDeps([0,1,2,3,4,5]))),ov=C.lazy(()=>Pn(()=>import("./Planificacion-CHYCEcRR.js"),__vite__mapDeps([6,2,3]))),sv=C.lazy(()=>Pn(()=>import("./PlanificacionFuncionario-CHgrwbRQ.js"),[])),lv=C.lazy(()=>Pn(()=>import("./AdelantoViaticos-zhCSwgcn.js"),__vite__mapDeps([7,1,3]))),cv=C.lazy(()=>Pn(()=>import("./Reposicion-BqwmDsYT.js"),__vite__mapDeps([8,1]))),uv=C.lazy(()=>Pn(()=>import("./Disponibilidad-Iap5tJNe.js"),__vite__mapDeps([9,1,5]))),dv=C.lazy(()=>Pn(()=>import("./Alertas-D7Hms0xe.js"),__vite__mapDeps([10,3]))),mv=C.lazy(()=>Pn(()=>import("./Datos-nJDHy5lx.js"),__vite__mapDeps([11,4]))),fv=C.lazy(()=>Pn(()=>import("./Configuracion-C7jQNso7.js"),[]));function pv(){const r=Mn();return c.jsx("div",{role:"status","aria-live":"polite",className:"flex min-h-[200px] items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",children:c.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold text-slate-500",children:[c.jsx("span",{className:"h-2 w-2 animate-pulse rounded-full bg-emerald-500","aria-hidden":"true"}),r("topbar.cargando")]})})}function Tv(){const{view:r,setView:o,personas:s,setPersonas:u,month:m,setMonth:f,year:h,setYear:T,compact:L,setCompact:A,roleData:E,setRoleData:N,actividadesPlan:S,setActividadesPlan:w,reposiciones:z,setReposiciones:B,diaVista:D,setDiaVista:b,reglas:G}=Ot(),le=C.useMemo(()=>y1(s,{actividadesPlan:S,reposiciones:z,flags:G}),[s,S,z,G]),W=C.useMemo(()=>le.filter(se=>se.t==="danger"||se.t==="warn").length,[le]),te=aL({view:r,setView:o,year:h,setYear:T,month:m,setMonth:f,diaVista:D,setDiaVista:b}),de=rL();return c.jsxs("div",{className:`pnlq-app pnlq-print-root min-h-screen overflow-x-clip bg-surface-alt text-ink ${de?"pnlq-keyboard-open":""}`,children:[c.jsx(kL,{}),c.jsxs("div",{className:"flex min-h-screen",children:[c.jsx(B1,{view:r,setView:te,nAlertas:W}),c.jsxs("main",{className:"pnlq-app-main min-w-0 flex-1 overflow-x-clip",children:[c.jsx(W1,{view:r,setView:te,month:m,setMonth:f,year:h,setYear:T,compact:L,setCompact:A}),c.jsx("div",{className:"pnlq-app-content space-y-5 p-4 pb-[calc(6rem+env(safe-area-inset-bottom))] lg:p-6 lg:pb-6",children:c.jsxs(C.Suspense,{fallback:c.jsx(pv,{}),children:[r==="dia"&&c.jsx(av,{diaVista:D,setDiaVista:b,personas:s,actividadesPlan:S,setActividadesPlan:w,roleData:E,reposiciones:z,hj:G==null?void 0:G.horasJornada,nAlertas:W,setView:te}),r==="funcionarios"&&c.jsx(iv,{personas:s,setPersonas:u}),r==="roles"&&c.jsx(rv,{year:h,month:m,setYear:T,setMonth:f,compact:L,roleData:E,setRoleData:N,personas:s,actividadesPlan:S,setActividadesPlan:w,reposiciones:z,hj:G==null?void 0:G.horasJornada}),r==="planificacion"&&c.jsx(ov,{year:h,month:m,personas:s,actividadesPlan:S,setActividadesPlan:w,roleData:E,setView:te,setDiaVista:b}),r==="planFuncionario"&&c.jsx(sv,{year:h,month:m,personas:s,actividadesPlan:S,setActividadesPlan:w,roleData:E,setRoleData:N}),r==="adelantos"&&c.jsx(lv,{actividadesPlan:S,personas:s,setView:te}),r==="reposicion"&&c.jsx(cv,{personas:s,reposiciones:z,setReposiciones:B}),r==="disponibilidad"&&c.jsx(uv,{personas:s,setPersonas:u}),r==="alertas"&&c.jsx(dv,{alerts:le,setView:te}),r==="datos"&&c.jsx(mv,{}),r==="configuracion"&&c.jsx(fv,{})]})})]})]}),c.jsx(X1,{view:r,setView:te,nAlertas:W,hidden:de})]})}function Lv(){return c.jsx(iL,{children:c.jsx(u1,{children:c.jsxs(h1,{children:[c.jsx(Tv,{}),c.jsx(sL,{})]})})})}function vv(r={}){const{immediate:o=!1,onNeedRefresh:s,onOfflineReady:u,onRegistered:m,onRegisteredSW:f,onRegisterError:h}=r;let T,L;const A=async(N=!0)=>{await L};async function E(){if("serviceWorker"in navigator){if(T=await Pn(async()=>{const{Workbox:N}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:N}},[]).then(({Workbox:N})=>new N("/BTMM_JORNADAS/sw.js",{scope:"/BTMM_JORNADAS/",type:"classic"})).catch(N=>{h==null||h(N)}),!T)return;T.addEventListener("activated",N=>{(N.isUpdate||N.isExternal)&&window.location.reload()}),T.addEventListener("installed",N=>{N.isUpdate||u==null||u()}),T.register({immediate:o}).then(N=>{f?f("/BTMM_JORNADAS/sw.js",N):m==null||m(N)}).catch(N=>{h==null||h(N)})}}return L=E(),A}function hv(r={}){const{immediate:o=!0,onNeedRefresh:s,onOfflineReady:u,onRegistered:m,onRegisteredSW:f,onRegisterError:h}=r,[T,L]=C.useState(!1),[A,E]=C.useState(!1),[N]=C.useState(()=>vv({immediate:o,onOfflineReady(){E(!0),u==null||u()},onNeedRefresh(){L(!0),s==null||s()},onRegistered:m,onRegisteredSW:f,onRegisterError:h}));return{needRefresh:[T,L],offlineReady:[A,E],updateServiceWorker:N}}const gv=300*1e3;async function Pv(){const r=`${E1}?t=${Date.now()}`,o=await fetch(r,{cache:"no-store",headers:{"Cache-Control":"no-cache"}});if(!o.ok)throw new Error(`HTTP ${o.status}`);return o.json()}function yv({intervalMs:r=gv,onOutdated:o}={}){let s=!1,u=null,m=!0;const f=async()=>{if(s)return;const A=m;if(m=!1,!(typeof navigator>"u"||!navigator.onLine))try{const E=await Pv();E!=null&&E.commit&&E.commit!==Si&&(o==null||o({local:rr,remote:E.version,remoteBuildTime:E.buildTime,remoteCommit:E.commit,immediate:A}))}catch{}},h=()=>{s||(u=setTimeout(async()=>{await f(),h()},r))},T=()=>{document.visibilityState==="visible"&&f()},L=()=>f();return document.addEventListener("visibilitychange",T),window.addEventListener("online",L),f(),h(),()=>{s=!0,u&&clearTimeout(u),document.removeEventListener("visibilitychange",T),window.removeEventListener("online",L)}}const Ad="pnlq:lastLoadedAt",wd="pnlq:autoUpdateIntento";function Mv({onInstall:r,onDismiss:o}){return c.jsx("div",{className:"pnlq-pwa-banner pnlq-no-print fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-2xl border border-emerald-200 bg-white p-4 shadow-2xl ring-1 ring-emerald-100 lg:bottom-4",role:"alertdialog","aria-label":Ie("pwa.instalarAria"),children:c.jsxs("div",{className:"flex items-start gap-3",children:[c.jsx("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-800 text-2xl shadow-sm",children:"🌲"}),c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsx("p",{className:"text-sm font-semibold text-slate-950",children:Ie("pwa.instalarTitulo")}),c.jsx("p",{className:"mt-0.5 text-xs font-bold text-slate-500",children:Ie("pwa.instalarSub")}),c.jsxs("div",{className:"mt-3 flex gap-2",children:[c.jsx("button",{onClick:r,className:"inline-flex min-h-touch items-center rounded-xl bg-emerald-800 px-4 text-xs font-semibold text-white shadow-sm hover:bg-emerald-700 active:scale-95",children:Ie("acciones.instalar")}),c.jsx("button",{onClick:o,className:"inline-flex min-h-touch items-center rounded-xl border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-700 hover:bg-slate-50 active:scale-95",children:Ie("acciones.ahoraNo")})]})]}),c.jsx("button",{onClick:o,className:"inline-flex min-h-touch min-w-touch items-center justify-center rounded-lg font-semibold text-slate-400 hover:bg-slate-100 hover:text-slate-700","aria-label":Ie("acciones.cerrar"),children:"✕"})]})})}function Ev({lastLoadedAt:r}){return c.jsx("div",{className:"pnlq-pwa-banner pnlq-no-print fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] left-1/2 z-50 -translate-x-1/2 rounded-2xl border border-amber-300 bg-amber-50 px-5 py-3 shadow-xl ring-1 ring-amber-200 lg:bottom-4",role:"alert",children:c.jsxs("div",{className:"flex flex-col items-center gap-0.5 text-center",children:[c.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold text-amber-900",children:[c.jsx("span",{className:"text-lg",children:"📡"}),Ie("pwa.sinConexion")]}),r&&c.jsx("div",{className:"text-[11px] font-bold text-amber-800/80",children:Ie("pwa.ultimaCarga",{fecha:r})})]})})}function Nv({onUpdate:r,onDismiss:o,urgent:s=!1,remoteVersion:u}){const m=Ie(s?"pwa.versionDesactualizada":"pwa.nuevaVersion"),f=Ie(s?"pwa.urgente":"pwa.sugerido"),h=`${Ie("pwa.versionActual",{actual:rr})}${u?Ie("pwa.versionDisponible",{remoto:u}):""}.${f}`;return c.jsx("div",{className:`pnlq-pwa-banner pnlq-no-print fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-2xl border p-4 shadow-2xl lg:bottom-4 ${s?"border-red-300 bg-red-50 ring-1 ring-red-200":"border-emerald-300 bg-emerald-50 ring-1 ring-emerald-200"}`,role:"alertdialog","aria-live":"assertive","aria-label":Ie("pwa.bannerAria"),children:c.jsxs("div",{className:"flex items-start gap-3",children:[c.jsx("div",{className:`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl shadow-sm ${s?"bg-red-700 text-white":"bg-emerald-800 text-white"}`,children:"⟳"}),c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsx("p",{className:"text-sm font-semibold text-slate-950",children:m}),c.jsx("p",{className:"mt-0.5 text-xs font-bold text-slate-600",children:h}),c.jsxs("div",{className:"mt-3 flex gap-2",children:[c.jsx("button",{onClick:r,className:`inline-flex min-h-touch items-center rounded-xl px-4 text-xs font-semibold text-white shadow-sm active:scale-95 ${s?"bg-red-700 hover:bg-red-800":"bg-emerald-800 hover:bg-emerald-700"}`,children:Ie("acciones.actualizarAhora")}),c.jsx("button",{onClick:o,className:"inline-flex min-h-touch items-center rounded-xl border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-700 hover:bg-slate-50 active:scale-95",children:Ie("acciones.verLuego")})]})]})]})})}function Cv({children:r}){const[o,s]=C.useState(null),[u,m]=C.useState(!1),[f,h]=C.useState(typeof navigator<"u"?!navigator.onLine:!1),[T,L]=C.useState(!1),[A,E]=C.useState(null),[N,S]=C.useState(!1),[w,z]=C.useState(()=>{try{return localStorage.getItem(Ad)}catch{return null}}),{needRefresh:[B,D],updateServiceWorker:b}=hv({onRegisteredSW(){try{const Ee=Kd(new Date().toISOString());localStorage.setItem(Ad,Ee),z(Ee)}catch{}}});C.useEffect(()=>{const Ee=he=>{he.preventDefault(),s(he)},ge=()=>{L(!0),s(null)},je=()=>h(!1),Ce=()=>h(!0);return window.addEventListener("beforeinstallprompt",Ee),window.addEventListener("appinstalled",ge),window.addEventListener("online",je),window.addEventListener("offline",Ce),()=>{window.removeEventListener("beforeinstallprompt",Ee),window.removeEventListener("appinstalled",ge),window.removeEventListener("online",je),window.removeEventListener("offline",Ce)}},[]);const G=C.useRef(b);C.useEffect(()=>{G.current=b},[b]),C.useEffect(()=>yv({onOutdated:ge=>{var je;if(ge!=null&&ge.immediate&&ge.remoteCommit){let Ce=null;try{Ce=sessionStorage.getItem(wd)}catch{}if(Ce!==ge.remoteCommit){try{sessionStorage.setItem(wd,ge.remoteCommit)}catch{}(je=G.current)==null||je.call(G,!0);return}}E(ge)}}),[]);const le=async()=>{if(!o)return;o.prompt();const{outcome:Ee}=await o.userChoice;Ee==="accepted"&&s(null),m(!0)},W=C.useCallback(()=>{S(!1),E(null),D(!1),b(!0)},[D,b]),te=()=>S(!0),de=o&&!u&&!T,se=(B||!!A)&&!N,ve=A==null?void 0:A.remote;return c.jsxs(c.Fragment,{children:[r,de&&c.jsx(Mv,{onInstall:le,onDismiss:()=>m(!0)}),f&&!se&&c.jsx(Ev,{lastLoadedAt:w}),se&&c.jsx(Nv,{onUpdate:W,onDismiss:te,urgent:!!A,remoteVersion:ve})]})}const zm="pnlq:theme",ma=["light","dark","hc"],Qm=C.createContext(null);function xv(){if(typeof window>"u")return"light";try{const r=localStorage.getItem(zm);if(r&&ma.includes(r))return r}catch{}return window.matchMedia&&window.matchMedia("(prefers-contrast: more)").matches?"hc":window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Sv({children:r}){const[o,s]=C.useState(xv);C.useEffect(()=>{if(!(typeof document>"u")){document.documentElement.setAttribute("data-theme",o),document.documentElement.style.colorScheme=o==="dark"?"dark":"light";try{localStorage.setItem(zm,o)}catch{}}},[o]);const u=C.useCallback(h=>{ma.includes(h)&&s(h)},[]),m=C.useCallback(()=>{s(h=>{const T=ma.indexOf(h);return ma[(T+1)%ma.length]})},[]),f=C.useMemo(()=>({theme:o,setTheme:u,cycleTheme:m,themes:ma}),[o,u,m]);return c.jsx(Qm.Provider,{value:f,children:r})}function Uv(){const r=C.useContext(Qm);if(!r)throw new Error("useTheme must be used within <ThemeProvider>");return r}typeof console<"u"&&console.info(`PNLQ v${rr} · build ${xi} · commit ${Si}`);typeof window<"u"&&window.addEventListener("unhandledrejection",r=>{console.error("Promesa rechazada sin manejar:",r.reason)});Hp.createRoot(document.getElementById("root")).render(c.jsx(Yp.StrictMode,{children:c.jsx(Sv,{children:c.jsx(Cv,{children:c.jsx(Lv,{})})})}));export{_m as $,rr as A,Mt as B,da as C,et as D,dT as E,Im as F,Kd as G,yn as H,en as I,OL as J,il as K,Iv as L,cd as M,DL as N,kd as O,yT as P,Id as Q,Hs as R,Jn as S,nl as T,fT as U,od as V,$T as W,c as X,HL as Y,Yv as Z,Cm as _,Pi as a,gT as a0,Qv as a1,zv as a2,Jv as a3,Fv as a4,TT as a5,Qn as a6,sr as a7,wv as a8,fd as a9,Dv as aa,HT as ab,C as ac,XL as ad,pT as ae,RL as af,jm as ag,LT as ah,or as ai,Om as aj,mT as ak,Ie as al,Bv as am,KT as an,el as ao,Ov as ap,Ot as aq,Fm as ar,K1 as as,ol as at,Dm as au,bm as av,Mn as aw,Uv as ax,Gd as ay,Av as az,Vs as b,Vm as c,Gs as d,bs as e,Us as f,kv as g,PT as h,qL as i,bi as j,Sd as k,zL as l,lr as m,Vv as n,UL as o,t1 as p,Ws as q,_v as r,Y1 as s,Jd as t,jv as u,wi as v,Rv as w,Fd as x,YT as y,qT as z};
