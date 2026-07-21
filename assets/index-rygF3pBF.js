const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Funcionarios-D_BDJ_VA.js","assets/EmptyState-B_kCJ9ku.js","assets/responsive-BsEOANM-.js","assets/useSessionState-CWxGU6mh.js","assets/ModalFuncionario-B4Hm6UK9.js","assets/Planificacion-BnJ9Gakv.js","assets/AdelantoViaticos-DCl6LUoV.js","assets/Reposicion-BfmspyBy.js","assets/Disponibilidad-DmcQ8jek.js","assets/Alertas-iNX3Tx3v.js"])))=>i.map(i=>d[i]);
var Mp=Object.defineProperty;var Ep=(i,s,l)=>s in i?Mp(i,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[s]=l;var li=(i,s,l)=>Ep(i,typeof s!="symbol"?s+"":s,l);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))d(m);new MutationObserver(m=>{for(const p of m)if(p.type==="childList")for(const h of p.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&d(h)}).observe(document,{childList:!0,subtree:!0});function l(m){const p={};return m.integrity&&(p.integrity=m.integrity),m.referrerPolicy&&(p.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?p.credentials="include":m.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function d(m){if(m.ep)return;m.ep=!0;const p=l(m);fetch(m.href,p)}})();var Iv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function vd(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var fs={exports:{}},Ba={},ps={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dc;function Np(){if(Dc)return ue;Dc=1;var i=Symbol.for("react.element"),s=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),h=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),A=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),N=Symbol.iterator;function x(P){return P===null||typeof P!="object"?null:(P=N&&P[N]||P["@@iterator"],typeof P=="function"?P:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,_={};function K(P,w,ae){this.props=P,this.context=w,this.refs=_,this.updater=ae||V}K.prototype.isReactComponent={},K.prototype.setState=function(P,w){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,w,"setState")},K.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function ce(){}ce.prototype=K.prototype;function te(P,w,ae){this.props=P,this.context=w,this.refs=_,this.updater=ae||V}var oe=te.prototype=new ce;oe.constructor=te,F(oe,K.prototype),oe.isPureReactComponent=!0;var H=Array.isArray,W=Object.prototype.hasOwnProperty,se={current:null},fe={key:!0,ref:!0,__self:!0,__source:!0};function pe(P,w,ae){var ie,le={},C=null,k=null;if(w!=null)for(ie in w.ref!==void 0&&(k=w.ref),w.key!==void 0&&(C=""+w.key),w)W.call(w,ie)&&!fe.hasOwnProperty(ie)&&(le[ie]=w[ie]);var B=arguments.length-2;if(B===1)le.children=ae;else if(1<B){for(var Z=Array(B),Me=0;Me<B;Me++)Z[Me]=arguments[Me+2];le.children=Z}if(P&&P.defaultProps)for(ie in B=P.defaultProps,B)le[ie]===void 0&&(le[ie]=B[ie]);return{$$typeof:i,type:P,key:C,ref:k,props:le,_owner:se.current}}function xe(P,w){return{$$typeof:i,type:P.type,key:w,ref:P.ref,props:P.props,_owner:P._owner}}function ye(P){return typeof P=="object"&&P!==null&&P.$$typeof===i}function Ve(P){var w={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(ae){return w[ae]})}var Pe=/\/+/g;function Te(P,w){return typeof P=="object"&&P!==null&&P.key!=null?Ve(""+P.key):w.toString(36)}function we(P,w,ae,ie,le){var C=typeof P;(C==="undefined"||C==="boolean")&&(P=null);var k=!1;if(P===null)k=!0;else switch(C){case"string":case"number":k=!0;break;case"object":switch(P.$$typeof){case i:case s:k=!0}}if(k)return k=P,le=le(k),P=ie===""?"."+Te(k,0):ie,H(le)?(ae="",P!=null&&(ae=P.replace(Pe,"$&/")+"/"),we(le,w,ae,"",function(Me){return Me})):le!=null&&(ye(le)&&(le=xe(le,ae+(!le.key||k&&k.key===le.key?"":(""+le.key).replace(Pe,"$&/")+"/")+P)),w.push(le)),1;if(k=0,ie=ie===""?".":ie+":",H(P))for(var B=0;B<P.length;B++){C=P[B];var Z=ie+Te(C,B);k+=we(C,w,ae,Z,le)}else if(Z=x(P),typeof Z=="function")for(P=Z.call(P),B=0;!(C=P.next()).done;)C=C.value,Z=ie+Te(C,B++),k+=we(C,w,ae,Z,le);else if(C==="object")throw w=String(P),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.");return k}function De(P,w,ae){if(P==null)return P;var ie=[],le=0;return we(P,ie,"","",function(C){return w.call(ae,C,le++)}),ie}function ke(P){if(P._status===-1){var w=P._result;w=w(),w.then(function(ae){(P._status===0||P._status===-1)&&(P._status=1,P._result=ae)},function(ae){(P._status===0||P._status===-1)&&(P._status=2,P._result=ae)}),P._status===-1&&(P._status=0,P._result=w)}if(P._status===1)return P._result.default;throw P._result}var Le={current:null},J={transition:null},O={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:J,ReactCurrentOwner:se};function Q(){throw Error("act(...) is not supported in production builds of React.")}return ue.Children={map:De,forEach:function(P,w,ae){De(P,function(){w.apply(this,arguments)},ae)},count:function(P){var w=0;return De(P,function(){w++}),w},toArray:function(P){return De(P,function(w){return w})||[]},only:function(P){if(!ye(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},ue.Component=K,ue.Fragment=l,ue.Profiler=m,ue.PureComponent=te,ue.StrictMode=d,ue.Suspense=v,ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,ue.act=Q,ue.cloneElement=function(P,w,ae){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var ie=F({},P.props),le=P.key,C=P.ref,k=P._owner;if(w!=null){if(w.ref!==void 0&&(C=w.ref,k=se.current),w.key!==void 0&&(le=""+w.key),P.type&&P.type.defaultProps)var B=P.type.defaultProps;for(Z in w)W.call(w,Z)&&!fe.hasOwnProperty(Z)&&(ie[Z]=w[Z]===void 0&&B!==void 0?B[Z]:w[Z])}var Z=arguments.length-2;if(Z===1)ie.children=ae;else if(1<Z){B=Array(Z);for(var Me=0;Me<Z;Me++)B[Me]=arguments[Me+2];ie.children=B}return{$$typeof:i,type:P.type,key:le,ref:C,props:ie,_owner:k}},ue.createContext=function(P){return P={$$typeof:h,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:p,_context:P},P.Consumer=P},ue.createElement=pe,ue.createFactory=function(P){var w=pe.bind(null,P);return w.type=P,w},ue.createRef=function(){return{current:null}},ue.forwardRef=function(P){return{$$typeof:g,render:P}},ue.isValidElement=ye,ue.lazy=function(P){return{$$typeof:D,_payload:{_status:-1,_result:P},_init:ke}},ue.memo=function(P,w){return{$$typeof:A,type:P,compare:w===void 0?null:w}},ue.startTransition=function(P){var w=J.transition;J.transition={};try{P()}finally{J.transition=w}},ue.unstable_act=Q,ue.useCallback=function(P,w){return Le.current.useCallback(P,w)},ue.useContext=function(P){return Le.current.useContext(P)},ue.useDebugValue=function(){},ue.useDeferredValue=function(P){return Le.current.useDeferredValue(P)},ue.useEffect=function(P,w){return Le.current.useEffect(P,w)},ue.useId=function(){return Le.current.useId()},ue.useImperativeHandle=function(P,w,ae){return Le.current.useImperativeHandle(P,w,ae)},ue.useInsertionEffect=function(P,w){return Le.current.useInsertionEffect(P,w)},ue.useLayoutEffect=function(P,w){return Le.current.useLayoutEffect(P,w)},ue.useMemo=function(P,w){return Le.current.useMemo(P,w)},ue.useReducer=function(P,w,ae){return Le.current.useReducer(P,w,ae)},ue.useRef=function(P){return Le.current.useRef(P)},ue.useState=function(P){return Le.current.useState(P)},ue.useSyncExternalStore=function(P,w,ae){return Le.current.useSyncExternalStore(P,w,ae)},ue.useTransition=function(){return Le.current.useTransition()},ue.version="18.3.1",ue}var Ic;function js(){return Ic||(Ic=1,ps.exports=Np()),ps.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oc;function Cp(){if(Oc)return Ba;Oc=1;var i=js(),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,m=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function h(g,v,A){var D,N={},x=null,V=null;A!==void 0&&(x=""+A),v.key!==void 0&&(x=""+v.key),v.ref!==void 0&&(V=v.ref);for(D in v)d.call(v,D)&&!p.hasOwnProperty(D)&&(N[D]=v[D]);if(g&&g.defaultProps)for(D in v=g.defaultProps,v)N[D]===void 0&&(N[D]=v[D]);return{$$typeof:s,type:g,key:x,ref:V,props:N,_owner:m.current}}return Ba.Fragment=l,Ba.jsx=h,Ba.jsxs=h,Ba}var zc;function xp(){return zc||(zc=1,fs.exports=Cp()),fs.exports}var u=xp(),S=js();const Sp=vd(S);var ui={},Ts={exports:{}},an={},vs={exports:{}},Ls={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fc;function Vp(){return Fc||(Fc=1,(function(i){function s(J,O){var Q=J.length;J.push(O);e:for(;0<Q;){var P=Q-1>>>1,w=J[P];if(0<m(w,O))J[P]=O,J[Q]=w,Q=P;else break e}}function l(J){return J.length===0?null:J[0]}function d(J){if(J.length===0)return null;var O=J[0],Q=J.pop();if(Q!==O){J[0]=Q;e:for(var P=0,w=J.length,ae=w>>>1;P<ae;){var ie=2*(P+1)-1,le=J[ie],C=ie+1,k=J[C];if(0>m(le,Q))C<w&&0>m(k,le)?(J[P]=k,J[C]=Q,P=C):(J[P]=le,J[ie]=Q,P=ie);else if(C<w&&0>m(k,Q))J[P]=k,J[C]=Q,P=C;else break e}}return O}function m(J,O){var Q=J.sortIndex-O.sortIndex;return Q!==0?Q:J.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;i.unstable_now=function(){return p.now()}}else{var h=Date,g=h.now();i.unstable_now=function(){return h.now()-g}}var v=[],A=[],D=1,N=null,x=3,V=!1,F=!1,_=!1,K=typeof setTimeout=="function"?setTimeout:null,ce=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function oe(J){for(var O=l(A);O!==null;){if(O.callback===null)d(A);else if(O.startTime<=J)d(A),O.sortIndex=O.expirationTime,s(v,O);else break;O=l(A)}}function H(J){if(_=!1,oe(J),!F)if(l(v)!==null)F=!0,ke(W);else{var O=l(A);O!==null&&Le(H,O.startTime-J)}}function W(J,O){F=!1,_&&(_=!1,ce(pe),pe=-1),V=!0;var Q=x;try{for(oe(O),N=l(v);N!==null&&(!(N.expirationTime>O)||J&&!Ve());){var P=N.callback;if(typeof P=="function"){N.callback=null,x=N.priorityLevel;var w=P(N.expirationTime<=O);O=i.unstable_now(),typeof w=="function"?N.callback=w:N===l(v)&&d(v),oe(O)}else d(v);N=l(v)}if(N!==null)var ae=!0;else{var ie=l(A);ie!==null&&Le(H,ie.startTime-O),ae=!1}return ae}finally{N=null,x=Q,V=!1}}var se=!1,fe=null,pe=-1,xe=5,ye=-1;function Ve(){return!(i.unstable_now()-ye<xe)}function Pe(){if(fe!==null){var J=i.unstable_now();ye=J;var O=!0;try{O=fe(!0,J)}finally{O?Te():(se=!1,fe=null)}}else se=!1}var Te;if(typeof te=="function")Te=function(){te(Pe)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,De=we.port2;we.port1.onmessage=Pe,Te=function(){De.postMessage(null)}}else Te=function(){K(Pe,0)};function ke(J){fe=J,se||(se=!0,Te())}function Le(J,O){pe=K(function(){J(i.unstable_now())},O)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(J){J.callback=null},i.unstable_continueExecution=function(){F||V||(F=!0,ke(W))},i.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):xe=0<J?Math.floor(1e3/J):5},i.unstable_getCurrentPriorityLevel=function(){return x},i.unstable_getFirstCallbackNode=function(){return l(v)},i.unstable_next=function(J){switch(x){case 1:case 2:case 3:var O=3;break;default:O=x}var Q=x;x=O;try{return J()}finally{x=Q}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(J,O){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var Q=x;x=J;try{return O()}finally{x=Q}},i.unstable_scheduleCallback=function(J,O,Q){var P=i.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?P+Q:P):Q=P,J){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=Q+w,J={id:D++,callback:O,priorityLevel:J,startTime:Q,expirationTime:w,sortIndex:-1},Q>P?(J.sortIndex=Q,s(A,J),l(v)===null&&J===l(A)&&(_?(ce(pe),pe=-1):_=!0,Le(H,Q-P))):(J.sortIndex=w,s(v,J),F||V||(F=!0,ke(W))),J},i.unstable_shouldYield=Ve,i.unstable_wrapCallback=function(J){var O=x;return function(){var Q=x;x=O;try{return J.apply(this,arguments)}finally{x=Q}}}})(Ls)),Ls}var Qc;function bp(){return Qc||(Qc=1,vs.exports=Vp()),vs.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jc;function Ap(){if(Jc)return an;Jc=1;var i=js(),s=bp();function l(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,m={};function p(e,n){h(e,n),h(e+"Capture",n)}function h(e,n){for(m[e]=n,e=0;e<n.length;e++)d.add(n[e])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),v=Object.prototype.hasOwnProperty,A=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,D={},N={};function x(e){return v.call(N,e)?!0:v.call(D,e)?!1:A.test(e)?N[e]=!0:(D[e]=!0,!1)}function V(e,n,t,a){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function F(e,n,t,a){if(n===null||typeof n>"u"||V(e,n,t,a))return!0;if(a)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function _(e,n,t,a,r,o,c){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=c}var K={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){K[e]=new _(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];K[n]=new _(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){K[e]=new _(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){K[e]=new _(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){K[e]=new _(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){K[e]=new _(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){K[e]=new _(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){K[e]=new _(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){K[e]=new _(e,5,!1,e.toLowerCase(),null,!1,!1)});var ce=/[\-:]([a-z])/g;function te(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(ce,te);K[n]=new _(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(ce,te);K[n]=new _(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(ce,te);K[n]=new _(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){K[e]=new _(e,1,!1,e.toLowerCase(),null,!1,!1)}),K.xlinkHref=new _("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){K[e]=new _(e,1,!1,e.toLowerCase(),null,!0,!0)});function oe(e,n,t,a){var r=K.hasOwnProperty(n)?K[n]:null;(r!==null?r.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(F(n,t,r,a)&&(t=null),a||r===null?x(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,a=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,a?e.setAttributeNS(a,n,t):e.setAttribute(n,t))))}var H=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),se=Symbol.for("react.portal"),fe=Symbol.for("react.fragment"),pe=Symbol.for("react.strict_mode"),xe=Symbol.for("react.profiler"),ye=Symbol.for("react.provider"),Ve=Symbol.for("react.context"),Pe=Symbol.for("react.forward_ref"),Te=Symbol.for("react.suspense"),we=Symbol.for("react.suspense_list"),De=Symbol.for("react.memo"),ke=Symbol.for("react.lazy"),Le=Symbol.for("react.offscreen"),J=Symbol.iterator;function O(e){return e===null||typeof e!="object"?null:(e=J&&e[J]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,P;function w(e){if(P===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);P=n&&n[1]||""}return`
`+P+e}var ae=!1;function ie(e,n){if(!e||ae)return"";ae=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(E){var a=E}Reflect.construct(e,[],n)}else{try{n.call()}catch(E){a=E}e.call(n.prototype)}else{try{throw Error()}catch(E){a=E}e()}}catch(E){if(E&&a&&typeof E.stack=="string"){for(var r=E.stack.split(`
`),o=a.stack.split(`
`),c=r.length-1,f=o.length-1;1<=c&&0<=f&&r[c]!==o[f];)f--;for(;1<=c&&0<=f;c--,f--)if(r[c]!==o[f]){if(c!==1||f!==1)do if(c--,f--,0>f||r[c]!==o[f]){var T=`
`+r[c].replace(" at new "," at ");return e.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",e.displayName)),T}while(1<=c&&0<=f);break}}}finally{ae=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?w(e):""}function le(e){switch(e.tag){case 5:return w(e.type);case 16:return w("Lazy");case 13:return w("Suspense");case 19:return w("SuspenseList");case 0:case 2:case 15:return e=ie(e.type,!1),e;case 11:return e=ie(e.type.render,!1),e;case 1:return e=ie(e.type,!0),e;default:return""}}function C(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fe:return"Fragment";case se:return"Portal";case xe:return"Profiler";case pe:return"StrictMode";case Te:return"Suspense";case we:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ve:return(e.displayName||"Context")+".Consumer";case ye:return(e._context.displayName||"Context")+".Provider";case Pe:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case De:return n=e.displayName||null,n!==null?n:C(e.type)||"Memo";case ke:n=e._payload,e=e._init;try{return C(e(n))}catch{}}return null}function k(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return C(n);case 8:return n===pe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function B(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Z(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Me(e){var n=Z(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(c){a=""+c,o.call(this,c)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function b(e){e._valueTracker||(e._valueTracker=Me(e))}function ve(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=Z(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function Ee(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ft(e,n){var t=n.checked;return Q({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Vt(e,n){var t=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;t=B(n.value!=null?n.value:t),e._wrapperState={initialChecked:a,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Xa(e,n){n=n.checked,n!=null&&oe(e,"checked",n,!1)}function gi(e,n){Xa(e,n);var t=B(n.value),a=n.type;if(t!=null)a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?yi(e,n.type,t):n.hasOwnProperty("defaultValue")&&yi(e,n.type,B(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Us(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function yi(e,n,t){(n!=="number"||Ee(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var ra=Array.isArray;function bt(e,n,t,a){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&a&&(e[t].defaultSelected=!0)}else{for(t=""+B(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function Mi(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(l(91));return Q({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Gs(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(l(92));if(ra(t)){if(1<t.length)throw Error(l(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:B(t)}}function Ks(e,n){var t=B(n.value),a=B(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),a!=null&&(e.defaultValue=""+a)}function $s(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Hs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ei(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Hs(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var er,qs=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,a,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,a,r)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(er=er||document.createElement("div"),er.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=er.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ia(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var oa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cm=["Webkit","ms","Moz","O"];Object.keys(oa).forEach(function(e){Cm.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),oa[n]=oa[e]})});function Ws(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||oa.hasOwnProperty(e)&&oa[e]?(""+n).trim():n+"px"}function Zs(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var a=t.indexOf("--")===0,r=Ws(t,n[t],a);t==="float"&&(t="cssFloat"),a?e.setProperty(t,r):e[t]=r}}var xm=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ni(e,n){if(n){if(xm[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(l(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(l(61))}if(n.style!=null&&typeof n.style!="object")throw Error(l(62))}}function Ci(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xi=null;function Si(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vi=null,At=null,wt=null;function Xs(e){if(e=Va(e)){if(typeof Vi!="function")throw Error(l(280));var n=e.stateNode;n&&(n=Er(n),Vi(e.stateNode,e.type,n))}}function el(e){At?wt?wt.push(e):wt=[e]:At=e}function nl(){if(At){var e=At,n=wt;if(wt=At=null,Xs(e),n)for(e=0;e<n.length;e++)Xs(n[e])}}function tl(e,n){return e(n)}function al(){}var bi=!1;function rl(e,n,t){if(bi)return e(n,t);bi=!0;try{return tl(e,n,t)}finally{bi=!1,(At!==null||wt!==null)&&(al(),nl())}}function sa(e,n){var t=e.stateNode;if(t===null)return null;var a=Er(t);if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(l(231,n,typeof t));return t}var Ai=!1;if(g)try{var la={};Object.defineProperty(la,"passive",{get:function(){Ai=!0}}),window.addEventListener("test",la,la),window.removeEventListener("test",la,la)}catch{Ai=!1}function Sm(e,n,t,a,r,o,c,f,T){var E=Array.prototype.slice.call(arguments,3);try{n.apply(t,E)}catch(R){this.onError(R)}}var ua=!1,nr=null,tr=!1,wi=null,Vm={onError:function(e){ua=!0,nr=e}};function bm(e,n,t,a,r,o,c,f,T){ua=!1,nr=null,Sm.apply(Vm,arguments)}function Am(e,n,t,a,r,o,c,f,T){if(bm.apply(this,arguments),ua){if(ua){var E=nr;ua=!1,nr=null}else throw Error(l(198));tr||(tr=!0,wi=E)}}function pt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function il(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ol(e){if(pt(e)!==e)throw Error(l(188))}function wm(e){var n=e.alternate;if(!n){if(n=pt(e),n===null)throw Error(l(188));return n!==e?null:e}for(var t=e,a=n;;){var r=t.return;if(r===null)break;var o=r.alternate;if(o===null){if(a=r.return,a!==null){t=a;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===t)return ol(r),e;if(o===a)return ol(r),n;o=o.sibling}throw Error(l(188))}if(t.return!==a.return)t=r,a=o;else{for(var c=!1,f=r.child;f;){if(f===t){c=!0,t=r,a=o;break}if(f===a){c=!0,a=r,t=o;break}f=f.sibling}if(!c){for(f=o.child;f;){if(f===t){c=!0,t=o,a=r;break}if(f===a){c=!0,a=o,t=r;break}f=f.sibling}if(!c)throw Error(l(189))}}if(t.alternate!==a)throw Error(l(190))}if(t.tag!==3)throw Error(l(188));return t.stateNode.current===t?e:n}function sl(e){return e=wm(e),e!==null?ll(e):null}function ll(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ll(e);if(n!==null)return n;e=e.sibling}return null}var ul=s.unstable_scheduleCallback,cl=s.unstable_cancelCallback,km=s.unstable_shouldYield,_m=s.unstable_requestPaint,je=s.unstable_now,jm=s.unstable_getCurrentPriorityLevel,ki=s.unstable_ImmediatePriority,dl=s.unstable_UserBlockingPriority,ar=s.unstable_NormalPriority,Rm=s.unstable_LowPriority,ml=s.unstable_IdlePriority,rr=null,xn=null;function Dm(e){if(xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(rr,e,void 0,(e.current.flags&128)===128)}catch{}}var hn=Math.clz32?Math.clz32:zm,Im=Math.log,Om=Math.LN2;function zm(e){return e>>>=0,e===0?32:31-(Im(e)/Om|0)|0}var ir=64,or=4194304;function ca(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function sr(e,n){var t=e.pendingLanes;if(t===0)return 0;var a=0,r=e.suspendedLanes,o=e.pingedLanes,c=t&268435455;if(c!==0){var f=c&~r;f!==0?a=ca(f):(o&=c,o!==0&&(a=ca(o)))}else c=t&~r,c!==0?a=ca(c):o!==0&&(a=ca(o));if(a===0)return 0;if(n!==0&&n!==a&&(n&r)===0&&(r=a&-a,o=n&-n,r>=o||r===16&&(o&4194240)!==0))return n;if((a&4)!==0&&(a|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)t=31-hn(n),r=1<<t,a|=e[t],n&=~r;return a}function Fm(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qm(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,o=e.pendingLanes;0<o;){var c=31-hn(o),f=1<<c,T=r[c];T===-1?((f&t)===0||(f&a)!==0)&&(r[c]=Fm(f,n)):T<=n&&(e.expiredLanes|=f),o&=~f}}function _i(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fl(){var e=ir;return ir<<=1,(ir&4194240)===0&&(ir=64),e}function ji(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function da(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-hn(n),e[n]=t}function Jm(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-hn(t),o=1<<r;n[r]=0,a[r]=-1,e[r]=-1,t&=~o}}function Ri(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-hn(t),r=1<<a;r&n|e[a]&n&&(e[a]|=n),t&=~r}}var he=0;function pl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Tl,Di,vl,Ll,hl,Ii=!1,lr=[],Un=null,Gn=null,Kn=null,ma=new Map,fa=new Map,$n=[],Bm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pl(e,n){switch(e){case"focusin":case"focusout":Un=null;break;case"dragenter":case"dragleave":Gn=null;break;case"mouseover":case"mouseout":Kn=null;break;case"pointerover":case"pointerout":ma.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":fa.delete(n.pointerId)}}function pa(e,n,t,a,r,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:o,targetContainers:[r]},n!==null&&(n=Va(n),n!==null&&Di(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function Ym(e,n,t,a,r){switch(n){case"focusin":return Un=pa(Un,e,n,t,a,r),!0;case"dragenter":return Gn=pa(Gn,e,n,t,a,r),!0;case"mouseover":return Kn=pa(Kn,e,n,t,a,r),!0;case"pointerover":var o=r.pointerId;return ma.set(o,pa(ma.get(o)||null,e,n,t,a,r)),!0;case"gotpointercapture":return o=r.pointerId,fa.set(o,pa(fa.get(o)||null,e,n,t,a,r)),!0}return!1}function gl(e){var n=Tt(e.target);if(n!==null){var t=pt(n);if(t!==null){if(n=t.tag,n===13){if(n=il(t),n!==null){e.blockedOn=n,hl(e.priority,function(){vl(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ur(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=zi(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);xi=a,t.target.dispatchEvent(a),xi=null}else return n=Va(t),n!==null&&Di(n),e.blockedOn=t,!1;n.shift()}return!0}function yl(e,n,t){ur(e)&&t.delete(n)}function Um(){Ii=!1,Un!==null&&ur(Un)&&(Un=null),Gn!==null&&ur(Gn)&&(Gn=null),Kn!==null&&ur(Kn)&&(Kn=null),ma.forEach(yl),fa.forEach(yl)}function Ta(e,n){e.blockedOn===n&&(e.blockedOn=null,Ii||(Ii=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Um)))}function va(e){function n(r){return Ta(r,e)}if(0<lr.length){Ta(lr[0],e);for(var t=1;t<lr.length;t++){var a=lr[t];a.blockedOn===e&&(a.blockedOn=null)}}for(Un!==null&&Ta(Un,e),Gn!==null&&Ta(Gn,e),Kn!==null&&Ta(Kn,e),ma.forEach(n),fa.forEach(n),t=0;t<$n.length;t++)a=$n[t],a.blockedOn===e&&(a.blockedOn=null);for(;0<$n.length&&(t=$n[0],t.blockedOn===null);)gl(t),t.blockedOn===null&&$n.shift()}var kt=H.ReactCurrentBatchConfig,cr=!0;function Gm(e,n,t,a){var r=he,o=kt.transition;kt.transition=null;try{he=1,Oi(e,n,t,a)}finally{he=r,kt.transition=o}}function Km(e,n,t,a){var r=he,o=kt.transition;kt.transition=null;try{he=4,Oi(e,n,t,a)}finally{he=r,kt.transition=o}}function Oi(e,n,t,a){if(cr){var r=zi(e,n,t,a);if(r===null)to(e,n,a,dr,t),Pl(e,a);else if(Ym(r,e,n,t,a))a.stopPropagation();else if(Pl(e,a),n&4&&-1<Bm.indexOf(e)){for(;r!==null;){var o=Va(r);if(o!==null&&Tl(o),o=zi(e,n,t,a),o===null&&to(e,n,a,dr,t),o===r)break;r=o}r!==null&&a.stopPropagation()}else to(e,n,a,null,t)}}var dr=null;function zi(e,n,t,a){if(dr=null,e=Si(a),e=Tt(e),e!==null)if(n=pt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=il(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return dr=e,null}function Ml(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jm()){case ki:return 1;case dl:return 4;case ar:case Rm:return 16;case ml:return 536870912;default:return 16}default:return 16}}var Hn=null,Fi=null,mr=null;function El(){if(mr)return mr;var e,n=Fi,t=n.length,a,r="value"in Hn?Hn.value:Hn.textContent,o=r.length;for(e=0;e<t&&n[e]===r[e];e++);var c=t-e;for(a=1;a<=c&&n[t-a]===r[o-a];a++);return mr=r.slice(e,1<a?1-a:void 0)}function fr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function pr(){return!0}function Nl(){return!1}function rn(e){function n(t,a,r,o,c){this._reactName=t,this._targetInst=r,this.type=a,this.nativeEvent=o,this.target=c,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(t=e[f],this[f]=t?t(o):o[f]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?pr:Nl,this.isPropagationStopped=Nl,this}return Q(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=pr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=pr)},persist:function(){},isPersistent:pr}),n}var _t={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qi=rn(_t),La=Q({},_t,{view:0,detail:0}),$m=rn(La),Ji,Bi,ha,Tr=Q({},La,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ui,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ha&&(ha&&e.type==="mousemove"?(Ji=e.screenX-ha.screenX,Bi=e.screenY-ha.screenY):Bi=Ji=0,ha=e),Ji)},movementY:function(e){return"movementY"in e?e.movementY:Bi}}),Cl=rn(Tr),Hm=Q({},Tr,{dataTransfer:0}),qm=rn(Hm),Wm=Q({},La,{relatedTarget:0}),Yi=rn(Wm),Zm=Q({},_t,{animationName:0,elapsedTime:0,pseudoElement:0}),Xm=rn(Zm),ef=Q({},_t,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nf=rn(ef),tf=Q({},_t,{data:0}),xl=rn(tf),af={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},of={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=of[e])?!!n[e]:!1}function Ui(){return sf}var lf=Q({},La,{key:function(e){if(e.key){var n=af[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=fr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ui,charCode:function(e){return e.type==="keypress"?fr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),uf=rn(lf),cf=Q({},Tr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sl=rn(cf),df=Q({},La,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ui}),mf=rn(df),ff=Q({},_t,{propertyName:0,elapsedTime:0,pseudoElement:0}),pf=rn(ff),Tf=Q({},Tr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vf=rn(Tf),Lf=[9,13,27,32],Gi=g&&"CompositionEvent"in window,Pa=null;g&&"documentMode"in document&&(Pa=document.documentMode);var hf=g&&"TextEvent"in window&&!Pa,Vl=g&&(!Gi||Pa&&8<Pa&&11>=Pa),bl=" ",Al=!1;function wl(e,n){switch(e){case"keyup":return Lf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jt=!1;function Pf(e,n){switch(e){case"compositionend":return kl(n);case"keypress":return n.which!==32?null:(Al=!0,bl);case"textInput":return e=n.data,e===bl&&Al?null:e;default:return null}}function gf(e,n){if(jt)return e==="compositionend"||!Gi&&wl(e,n)?(e=El(),mr=Fi=Hn=null,jt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Vl&&n.locale!=="ko"?null:n.data;default:return null}}var yf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _l(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!yf[e.type]:n==="textarea"}function jl(e,n,t,a){el(a),n=gr(n,"onChange"),0<n.length&&(t=new Qi("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var ga=null,ya=null;function Mf(e){Zl(e,0)}function vr(e){var n=zt(e);if(ve(n))return e}function Ef(e,n){if(e==="change")return n}var Rl=!1;if(g){var Ki;if(g){var $i="oninput"in document;if(!$i){var Dl=document.createElement("div");Dl.setAttribute("oninput","return;"),$i=typeof Dl.oninput=="function"}Ki=$i}else Ki=!1;Rl=Ki&&(!document.documentMode||9<document.documentMode)}function Il(){ga&&(ga.detachEvent("onpropertychange",Ol),ya=ga=null)}function Ol(e){if(e.propertyName==="value"&&vr(ya)){var n=[];jl(n,ya,e,Si(e)),rl(Mf,n)}}function Nf(e,n,t){e==="focusin"?(Il(),ga=n,ya=t,ga.attachEvent("onpropertychange",Ol)):e==="focusout"&&Il()}function Cf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vr(ya)}function xf(e,n){if(e==="click")return vr(n)}function Sf(e,n){if(e==="input"||e==="change")return vr(n)}function Vf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Pn=typeof Object.is=="function"?Object.is:Vf;function Ma(e,n){if(Pn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var r=t[a];if(!v.call(n,r)||!Pn(e[r],n[r]))return!1}return!0}function zl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fl(e,n){var t=zl(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=zl(t)}}function Ql(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ql(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Jl(){for(var e=window,n=Ee();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ee(e.document)}return n}function Hi(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function bf(e){var n=Jl(),t=e.focusedElem,a=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ql(t.ownerDocument.documentElement,t)){if(a!==null&&Hi(t)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,o=Math.min(a.start,r);a=a.end===void 0?o:Math.min(a.end,r),!e.extend&&o>a&&(r=a,a=o,o=r),r=Fl(t,o);var c=Fl(t,a);r&&c&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),o>a?(e.addRange(n),e.extend(c.node,c.offset)):(n.setEnd(c.node,c.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Af=g&&"documentMode"in document&&11>=document.documentMode,Rt=null,qi=null,Ea=null,Wi=!1;function Bl(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Wi||Rt==null||Rt!==Ee(a)||(a=Rt,"selectionStart"in a&&Hi(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ea&&Ma(Ea,a)||(Ea=a,a=gr(qi,"onSelect"),0<a.length&&(n=new Qi("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=Rt)))}function Lr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Dt={animationend:Lr("Animation","AnimationEnd"),animationiteration:Lr("Animation","AnimationIteration"),animationstart:Lr("Animation","AnimationStart"),transitionend:Lr("Transition","TransitionEnd")},Zi={},Yl={};g&&(Yl=document.createElement("div").style,"AnimationEvent"in window||(delete Dt.animationend.animation,delete Dt.animationiteration.animation,delete Dt.animationstart.animation),"TransitionEvent"in window||delete Dt.transitionend.transition);function hr(e){if(Zi[e])return Zi[e];if(!Dt[e])return e;var n=Dt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Yl)return Zi[e]=n[t];return e}var Ul=hr("animationend"),Gl=hr("animationiteration"),Kl=hr("animationstart"),$l=hr("transitionend"),Hl=new Map,ql="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qn(e,n){Hl.set(e,n),p(n,[e])}for(var Xi=0;Xi<ql.length;Xi++){var eo=ql[Xi],wf=eo.toLowerCase(),kf=eo[0].toUpperCase()+eo.slice(1);qn(wf,"on"+kf)}qn(Ul,"onAnimationEnd"),qn(Gl,"onAnimationIteration"),qn(Kl,"onAnimationStart"),qn("dblclick","onDoubleClick"),qn("focusin","onFocus"),qn("focusout","onBlur"),qn($l,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_f=new Set("cancel close invalid load scroll toggle".split(" ").concat(Na));function Wl(e,n,t){var a=e.type||"unknown-event";e.currentTarget=t,Am(a,n,void 0,e),e.currentTarget=null}function Zl(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],r=a.event;a=a.listeners;e:{var o=void 0;if(n)for(var c=a.length-1;0<=c;c--){var f=a[c],T=f.instance,E=f.currentTarget;if(f=f.listener,T!==o&&r.isPropagationStopped())break e;Wl(r,f,E),o=T}else for(c=0;c<a.length;c++){if(f=a[c],T=f.instance,E=f.currentTarget,f=f.listener,T!==o&&r.isPropagationStopped())break e;Wl(r,f,E),o=T}}}if(tr)throw e=wi,tr=!1,wi=null,e}function Ne(e,n){var t=n[lo];t===void 0&&(t=n[lo]=new Set);var a=e+"__bubble";t.has(a)||(Xl(n,e,2,!1),t.add(a))}function no(e,n,t){var a=0;n&&(a|=4),Xl(t,e,a,n)}var Pr="_reactListening"+Math.random().toString(36).slice(2);function Ca(e){if(!e[Pr]){e[Pr]=!0,d.forEach(function(t){t!=="selectionchange"&&(_f.has(t)||no(t,!1,e),no(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Pr]||(n[Pr]=!0,no("selectionchange",!1,n))}}function Xl(e,n,t,a){switch(Ml(n)){case 1:var r=Gm;break;case 4:r=Km;break;default:r=Oi}t=r.bind(null,n,t,e),r=void 0,!Ai||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function to(e,n,t,a,r){var o=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var f=a.stateNode.containerInfo;if(f===r||f.nodeType===8&&f.parentNode===r)break;if(c===4)for(c=a.return;c!==null;){var T=c.tag;if((T===3||T===4)&&(T=c.stateNode.containerInfo,T===r||T.nodeType===8&&T.parentNode===r))return;c=c.return}for(;f!==null;){if(c=Tt(f),c===null)return;if(T=c.tag,T===5||T===6){a=o=c;continue e}f=f.parentNode}}a=a.return}rl(function(){var E=o,R=Si(t),I=[];e:{var j=Hl.get(e);if(j!==void 0){var Y=Qi,G=e;switch(e){case"keypress":if(fr(t)===0)break e;case"keydown":case"keyup":Y=uf;break;case"focusin":G="focus",Y=Yi;break;case"focusout":G="blur",Y=Yi;break;case"beforeblur":case"afterblur":Y=Yi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=Cl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=qm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=mf;break;case Ul:case Gl:case Kl:Y=Xm;break;case $l:Y=pf;break;case"scroll":Y=$m;break;case"wheel":Y=vf;break;case"copy":case"cut":case"paste":Y=nf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=Sl}var $=(n&4)!==0,Re=!$&&e==="scroll",y=$?j!==null?j+"Capture":null:j;$=[];for(var L=E,M;L!==null;){M=L;var z=M.stateNode;if(M.tag===5&&z!==null&&(M=z,y!==null&&(z=sa(L,y),z!=null&&$.push(xa(L,z,M)))),Re)break;L=L.return}0<$.length&&(j=new Y(j,G,null,t,R),I.push({event:j,listeners:$}))}}if((n&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",j&&t!==xi&&(G=t.relatedTarget||t.fromElement)&&(Tt(G)||G[_n]))break e;if((Y||j)&&(j=R.window===R?R:(j=R.ownerDocument)?j.defaultView||j.parentWindow:window,Y?(G=t.relatedTarget||t.toElement,Y=E,G=G?Tt(G):null,G!==null&&(Re=pt(G),G!==Re||G.tag!==5&&G.tag!==6)&&(G=null)):(Y=null,G=E),Y!==G)){if($=Cl,z="onMouseLeave",y="onMouseEnter",L="mouse",(e==="pointerout"||e==="pointerover")&&($=Sl,z="onPointerLeave",y="onPointerEnter",L="pointer"),Re=Y==null?j:zt(Y),M=G==null?j:zt(G),j=new $(z,L+"leave",Y,t,R),j.target=Re,j.relatedTarget=M,z=null,Tt(R)===E&&($=new $(y,L+"enter",G,t,R),$.target=M,$.relatedTarget=Re,z=$),Re=z,Y&&G)n:{for($=Y,y=G,L=0,M=$;M;M=It(M))L++;for(M=0,z=y;z;z=It(z))M++;for(;0<L-M;)$=It($),L--;for(;0<M-L;)y=It(y),M--;for(;L--;){if($===y||y!==null&&$===y.alternate)break n;$=It($),y=It(y)}$=null}else $=null;Y!==null&&eu(I,j,Y,$,!1),G!==null&&Re!==null&&eu(I,Re,G,$,!0)}}e:{if(j=E?zt(E):window,Y=j.nodeName&&j.nodeName.toLowerCase(),Y==="select"||Y==="input"&&j.type==="file")var q=Ef;else if(_l(j))if(Rl)q=Sf;else{q=Cf;var X=Nf}else(Y=j.nodeName)&&Y.toLowerCase()==="input"&&(j.type==="checkbox"||j.type==="radio")&&(q=xf);if(q&&(q=q(e,E))){jl(I,q,t,R);break e}X&&X(e,j,E),e==="focusout"&&(X=j._wrapperState)&&X.controlled&&j.type==="number"&&yi(j,"number",j.value)}switch(X=E?zt(E):window,e){case"focusin":(_l(X)||X.contentEditable==="true")&&(Rt=X,qi=E,Ea=null);break;case"focusout":Ea=qi=Rt=null;break;case"mousedown":Wi=!0;break;case"contextmenu":case"mouseup":case"dragend":Wi=!1,Bl(I,t,R);break;case"selectionchange":if(Af)break;case"keydown":case"keyup":Bl(I,t,R)}var ee;if(Gi)e:{switch(e){case"compositionstart":var ne="onCompositionStart";break e;case"compositionend":ne="onCompositionEnd";break e;case"compositionupdate":ne="onCompositionUpdate";break e}ne=void 0}else jt?wl(e,t)&&(ne="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(ne="onCompositionStart");ne&&(Vl&&t.locale!=="ko"&&(jt||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&jt&&(ee=El()):(Hn=R,Fi="value"in Hn?Hn.value:Hn.textContent,jt=!0)),X=gr(E,ne),0<X.length&&(ne=new xl(ne,e,null,t,R),I.push({event:ne,listeners:X}),ee?ne.data=ee:(ee=kl(t),ee!==null&&(ne.data=ee)))),(ee=hf?Pf(e,t):gf(e,t))&&(E=gr(E,"onBeforeInput"),0<E.length&&(R=new xl("onBeforeInput","beforeinput",null,t,R),I.push({event:R,listeners:E}),R.data=ee))}Zl(I,n)})}function xa(e,n,t){return{instance:e,listener:n,currentTarget:t}}function gr(e,n){for(var t=n+"Capture",a=[];e!==null;){var r=e,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=sa(e,t),o!=null&&a.unshift(xa(e,o,r)),o=sa(e,n),o!=null&&a.push(xa(e,o,r))),e=e.return}return a}function It(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function eu(e,n,t,a,r){for(var o=n._reactName,c=[];t!==null&&t!==a;){var f=t,T=f.alternate,E=f.stateNode;if(T!==null&&T===a)break;f.tag===5&&E!==null&&(f=E,r?(T=sa(t,o),T!=null&&c.unshift(xa(t,T,f))):r||(T=sa(t,o),T!=null&&c.push(xa(t,T,f)))),t=t.return}c.length!==0&&e.push({event:n,listeners:c})}var jf=/\r\n?/g,Rf=/\u0000|\uFFFD/g;function nu(e){return(typeof e=="string"?e:""+e).replace(jf,`
`).replace(Rf,"")}function yr(e,n,t){if(n=nu(n),nu(e)!==n&&t)throw Error(l(425))}function Mr(){}var ao=null,ro=null;function io(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var oo=typeof setTimeout=="function"?setTimeout:void 0,Df=typeof clearTimeout=="function"?clearTimeout:void 0,tu=typeof Promise=="function"?Promise:void 0,If=typeof queueMicrotask=="function"?queueMicrotask:typeof tu<"u"?function(e){return tu.resolve(null).then(e).catch(Of)}:oo;function Of(e){setTimeout(function(){throw e})}function so(e,n){var t=n,a=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(a===0){e.removeChild(r),va(n);return}a--}else t!=="$"&&t!=="$?"&&t!=="$!"||a++;t=r}while(t);va(n)}function Wn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function au(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Ot=Math.random().toString(36).slice(2),Sn="__reactFiber$"+Ot,Sa="__reactProps$"+Ot,_n="__reactContainer$"+Ot,lo="__reactEvents$"+Ot,zf="__reactListeners$"+Ot,Ff="__reactHandles$"+Ot;function Tt(e){var n=e[Sn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[_n]||t[Sn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=au(e);e!==null;){if(t=e[Sn])return t;e=au(e)}return n}e=t,t=e.parentNode}return null}function Va(e){return e=e[Sn]||e[_n],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function Er(e){return e[Sa]||null}var uo=[],Ft=-1;function Zn(e){return{current:e}}function Ce(e){0>Ft||(e.current=uo[Ft],uo[Ft]=null,Ft--)}function ge(e,n){Ft++,uo[Ft]=e.current,e.current=n}var Xn={},Ge=Zn(Xn),Ze=Zn(!1),vt=Xn;function Qt(e,n){var t=e.type.contextTypes;if(!t)return Xn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in t)r[o]=n[o];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function Xe(e){return e=e.childContextTypes,e!=null}function Nr(){Ce(Ze),Ce(Ge)}function ru(e,n,t){if(Ge.current!==Xn)throw Error(l(168));ge(Ge,n),ge(Ze,t)}function iu(e,n,t){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return t;a=a.getChildContext();for(var r in a)if(!(r in n))throw Error(l(108,k(e)||"Unknown",r));return Q({},t,a)}function Cr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xn,vt=Ge.current,ge(Ge,e),ge(Ze,Ze.current),!0}function ou(e,n,t){var a=e.stateNode;if(!a)throw Error(l(169));t?(e=iu(e,n,vt),a.__reactInternalMemoizedMergedChildContext=e,Ce(Ze),Ce(Ge),ge(Ge,e)):Ce(Ze),ge(Ze,t)}var jn=null,xr=!1,co=!1;function su(e){jn===null?jn=[e]:jn.push(e)}function Qf(e){xr=!0,su(e)}function et(){if(!co&&jn!==null){co=!0;var e=0,n=he;try{var t=jn;for(he=1;e<t.length;e++){var a=t[e];do a=a(!0);while(a!==null)}jn=null,xr=!1}catch(r){throw jn!==null&&(jn=jn.slice(e+1)),ul(ki,et),r}finally{he=n,co=!1}}return null}var Jt=[],Bt=0,Sr=null,Vr=0,cn=[],dn=0,Lt=null,Rn=1,Dn="";function ht(e,n){Jt[Bt++]=Vr,Jt[Bt++]=Sr,Sr=e,Vr=n}function lu(e,n,t){cn[dn++]=Rn,cn[dn++]=Dn,cn[dn++]=Lt,Lt=e;var a=Rn;e=Dn;var r=32-hn(a)-1;a&=~(1<<r),t+=1;var o=32-hn(n)+r;if(30<o){var c=r-r%5;o=(a&(1<<c)-1).toString(32),a>>=c,r-=c,Rn=1<<32-hn(n)+r|t<<r|a,Dn=o+e}else Rn=1<<o|t<<r|a,Dn=e}function mo(e){e.return!==null&&(ht(e,1),lu(e,1,0))}function fo(e){for(;e===Sr;)Sr=Jt[--Bt],Jt[Bt]=null,Vr=Jt[--Bt],Jt[Bt]=null;for(;e===Lt;)Lt=cn[--dn],cn[dn]=null,Dn=cn[--dn],cn[dn]=null,Rn=cn[--dn],cn[dn]=null}var on=null,sn=null,Se=!1,gn=null;function uu(e,n){var t=Tn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function cu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,on=e,sn=Wn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,on=e,sn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Lt!==null?{id:Rn,overflow:Dn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Tn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,on=e,sn=null,!0):!1;default:return!1}}function po(e){return(e.mode&1)!==0&&(e.flags&128)===0}function To(e){if(Se){var n=sn;if(n){var t=n;if(!cu(e,n)){if(po(e))throw Error(l(418));n=Wn(t.nextSibling);var a=on;n&&cu(e,n)?uu(a,t):(e.flags=e.flags&-4097|2,Se=!1,on=e)}}else{if(po(e))throw Error(l(418));e.flags=e.flags&-4097|2,Se=!1,on=e}}}function du(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;on=e}function br(e){if(e!==on)return!1;if(!Se)return du(e),Se=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!io(e.type,e.memoizedProps)),n&&(n=sn)){if(po(e))throw mu(),Error(l(418));for(;n;)uu(e,n),n=Wn(n.nextSibling)}if(du(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){sn=Wn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}sn=null}}else sn=on?Wn(e.stateNode.nextSibling):null;return!0}function mu(){for(var e=sn;e;)e=Wn(e.nextSibling)}function Yt(){sn=on=null,Se=!1}function vo(e){gn===null?gn=[e]:gn.push(e)}var Jf=H.ReactCurrentBatchConfig;function ba(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(l(309));var a=t.stateNode}if(!a)throw Error(l(147,e));var r=a,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(c){var f=r.refs;c===null?delete f[o]:f[o]=c},n._stringRef=o,n)}if(typeof e!="string")throw Error(l(284));if(!t._owner)throw Error(l(290,e))}return e}function Ar(e,n){throw e=Object.prototype.toString.call(n),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function fu(e){var n=e._init;return n(e._payload)}function pu(e){function n(y,L){if(e){var M=y.deletions;M===null?(y.deletions=[L],y.flags|=16):M.push(L)}}function t(y,L){if(!e)return null;for(;L!==null;)n(y,L),L=L.sibling;return null}function a(y,L){for(y=new Map;L!==null;)L.key!==null?y.set(L.key,L):y.set(L.index,L),L=L.sibling;return y}function r(y,L){return y=lt(y,L),y.index=0,y.sibling=null,y}function o(y,L,M){return y.index=M,e?(M=y.alternate,M!==null?(M=M.index,M<L?(y.flags|=2,L):M):(y.flags|=2,L)):(y.flags|=1048576,L)}function c(y){return e&&y.alternate===null&&(y.flags|=2),y}function f(y,L,M,z){return L===null||L.tag!==6?(L=ss(M,y.mode,z),L.return=y,L):(L=r(L,M),L.return=y,L)}function T(y,L,M,z){var q=M.type;return q===fe?R(y,L,M.props.children,z,M.key):L!==null&&(L.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===ke&&fu(q)===L.type)?(z=r(L,M.props),z.ref=ba(y,L,M),z.return=y,z):(z=ei(M.type,M.key,M.props,null,y.mode,z),z.ref=ba(y,L,M),z.return=y,z)}function E(y,L,M,z){return L===null||L.tag!==4||L.stateNode.containerInfo!==M.containerInfo||L.stateNode.implementation!==M.implementation?(L=ls(M,y.mode,z),L.return=y,L):(L=r(L,M.children||[]),L.return=y,L)}function R(y,L,M,z,q){return L===null||L.tag!==7?(L=xt(M,y.mode,z,q),L.return=y,L):(L=r(L,M),L.return=y,L)}function I(y,L,M){if(typeof L=="string"&&L!==""||typeof L=="number")return L=ss(""+L,y.mode,M),L.return=y,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case W:return M=ei(L.type,L.key,L.props,null,y.mode,M),M.ref=ba(y,null,L),M.return=y,M;case se:return L=ls(L,y.mode,M),L.return=y,L;case ke:var z=L._init;return I(y,z(L._payload),M)}if(ra(L)||O(L))return L=xt(L,y.mode,M,null),L.return=y,L;Ar(y,L)}return null}function j(y,L,M,z){var q=L!==null?L.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return q!==null?null:f(y,L,""+M,z);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case W:return M.key===q?T(y,L,M,z):null;case se:return M.key===q?E(y,L,M,z):null;case ke:return q=M._init,j(y,L,q(M._payload),z)}if(ra(M)||O(M))return q!==null?null:R(y,L,M,z,null);Ar(y,M)}return null}function Y(y,L,M,z,q){if(typeof z=="string"&&z!==""||typeof z=="number")return y=y.get(M)||null,f(L,y,""+z,q);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case W:return y=y.get(z.key===null?M:z.key)||null,T(L,y,z,q);case se:return y=y.get(z.key===null?M:z.key)||null,E(L,y,z,q);case ke:var X=z._init;return Y(y,L,M,X(z._payload),q)}if(ra(z)||O(z))return y=y.get(M)||null,R(L,y,z,q,null);Ar(L,z)}return null}function G(y,L,M,z){for(var q=null,X=null,ee=L,ne=L=0,Be=null;ee!==null&&ne<M.length;ne++){ee.index>ne?(Be=ee,ee=null):Be=ee.sibling;var me=j(y,ee,M[ne],z);if(me===null){ee===null&&(ee=Be);break}e&&ee&&me.alternate===null&&n(y,ee),L=o(me,L,ne),X===null?q=me:X.sibling=me,X=me,ee=Be}if(ne===M.length)return t(y,ee),Se&&ht(y,ne),q;if(ee===null){for(;ne<M.length;ne++)ee=I(y,M[ne],z),ee!==null&&(L=o(ee,L,ne),X===null?q=ee:X.sibling=ee,X=ee);return Se&&ht(y,ne),q}for(ee=a(y,ee);ne<M.length;ne++)Be=Y(ee,y,ne,M[ne],z),Be!==null&&(e&&Be.alternate!==null&&ee.delete(Be.key===null?ne:Be.key),L=o(Be,L,ne),X===null?q=Be:X.sibling=Be,X=Be);return e&&ee.forEach(function(ut){return n(y,ut)}),Se&&ht(y,ne),q}function $(y,L,M,z){var q=O(M);if(typeof q!="function")throw Error(l(150));if(M=q.call(M),M==null)throw Error(l(151));for(var X=q=null,ee=L,ne=L=0,Be=null,me=M.next();ee!==null&&!me.done;ne++,me=M.next()){ee.index>ne?(Be=ee,ee=null):Be=ee.sibling;var ut=j(y,ee,me.value,z);if(ut===null){ee===null&&(ee=Be);break}e&&ee&&ut.alternate===null&&n(y,ee),L=o(ut,L,ne),X===null?q=ut:X.sibling=ut,X=ut,ee=Be}if(me.done)return t(y,ee),Se&&ht(y,ne),q;if(ee===null){for(;!me.done;ne++,me=M.next())me=I(y,me.value,z),me!==null&&(L=o(me,L,ne),X===null?q=me:X.sibling=me,X=me);return Se&&ht(y,ne),q}for(ee=a(y,ee);!me.done;ne++,me=M.next())me=Y(ee,y,ne,me.value,z),me!==null&&(e&&me.alternate!==null&&ee.delete(me.key===null?ne:me.key),L=o(me,L,ne),X===null?q=me:X.sibling=me,X=me);return e&&ee.forEach(function(yp){return n(y,yp)}),Se&&ht(y,ne),q}function Re(y,L,M,z){if(typeof M=="object"&&M!==null&&M.type===fe&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case W:e:{for(var q=M.key,X=L;X!==null;){if(X.key===q){if(q=M.type,q===fe){if(X.tag===7){t(y,X.sibling),L=r(X,M.props.children),L.return=y,y=L;break e}}else if(X.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===ke&&fu(q)===X.type){t(y,X.sibling),L=r(X,M.props),L.ref=ba(y,X,M),L.return=y,y=L;break e}t(y,X);break}else n(y,X);X=X.sibling}M.type===fe?(L=xt(M.props.children,y.mode,z,M.key),L.return=y,y=L):(z=ei(M.type,M.key,M.props,null,y.mode,z),z.ref=ba(y,L,M),z.return=y,y=z)}return c(y);case se:e:{for(X=M.key;L!==null;){if(L.key===X)if(L.tag===4&&L.stateNode.containerInfo===M.containerInfo&&L.stateNode.implementation===M.implementation){t(y,L.sibling),L=r(L,M.children||[]),L.return=y,y=L;break e}else{t(y,L);break}else n(y,L);L=L.sibling}L=ls(M,y.mode,z),L.return=y,y=L}return c(y);case ke:return X=M._init,Re(y,L,X(M._payload),z)}if(ra(M))return G(y,L,M,z);if(O(M))return $(y,L,M,z);Ar(y,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,L!==null&&L.tag===6?(t(y,L.sibling),L=r(L,M),L.return=y,y=L):(t(y,L),L=ss(M,y.mode,z),L.return=y,y=L),c(y)):t(y,L)}return Re}var Ut=pu(!0),Tu=pu(!1),wr=Zn(null),kr=null,Gt=null,Lo=null;function ho(){Lo=Gt=kr=null}function Po(e){var n=wr.current;Ce(wr),e._currentValue=n}function go(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function Kt(e,n){kr=e,Lo=Gt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(en=!0),e.firstContext=null)}function mn(e){var n=e._currentValue;if(Lo!==e)if(e={context:e,memoizedValue:n,next:null},Gt===null){if(kr===null)throw Error(l(308));Gt=e,kr.dependencies={lanes:0,firstContext:e}}else Gt=Gt.next=e;return n}var Pt=null;function yo(e){Pt===null?Pt=[e]:Pt.push(e)}function vu(e,n,t,a){var r=n.interleaved;return r===null?(t.next=t,yo(n)):(t.next=r.next,r.next=t),n.interleaved=t,In(e,a)}function In(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var nt=!1;function Mo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function On(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function tt(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(de&2)!==0){var r=a.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),a.pending=n,In(e,t)}return r=a.interleaved,r===null?(n.next=n,yo(a)):(n.next=r.next,r.next=n),a.interleaved=n,In(e,t)}function _r(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Ri(e,t)}}function hu(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var r=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var c={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?r=o=c:o=o.next=c,t=t.next}while(t!==null);o===null?r=o=n:o=o.next=n}else r=o=n;t={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:a.shared,effects:a.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function jr(e,n,t,a){var r=e.updateQueue;nt=!1;var o=r.firstBaseUpdate,c=r.lastBaseUpdate,f=r.shared.pending;if(f!==null){r.shared.pending=null;var T=f,E=T.next;T.next=null,c===null?o=E:c.next=E,c=T;var R=e.alternate;R!==null&&(R=R.updateQueue,f=R.lastBaseUpdate,f!==c&&(f===null?R.firstBaseUpdate=E:f.next=E,R.lastBaseUpdate=T))}if(o!==null){var I=r.baseState;c=0,R=E=T=null,f=o;do{var j=f.lane,Y=f.eventTime;if((a&j)===j){R!==null&&(R=R.next={eventTime:Y,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var G=e,$=f;switch(j=n,Y=t,$.tag){case 1:if(G=$.payload,typeof G=="function"){I=G.call(Y,I,j);break e}I=G;break e;case 3:G.flags=G.flags&-65537|128;case 0:if(G=$.payload,j=typeof G=="function"?G.call(Y,I,j):G,j==null)break e;I=Q({},I,j);break e;case 2:nt=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,j=r.effects,j===null?r.effects=[f]:j.push(f))}else Y={eventTime:Y,lane:j,tag:f.tag,payload:f.payload,callback:f.callback,next:null},R===null?(E=R=Y,T=I):R=R.next=Y,c|=j;if(f=f.next,f===null){if(f=r.shared.pending,f===null)break;j=f,f=j.next,j.next=null,r.lastBaseUpdate=j,r.shared.pending=null}}while(!0);if(R===null&&(T=I),r.baseState=T,r.firstBaseUpdate=E,r.lastBaseUpdate=R,n=r.shared.interleaved,n!==null){r=n;do c|=r.lane,r=r.next;while(r!==n)}else o===null&&(r.shared.lanes=0);Mt|=c,e.lanes=c,e.memoizedState=I}}function Pu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],r=a.callback;if(r!==null){if(a.callback=null,a=t,typeof r!="function")throw Error(l(191,r));r.call(a)}}}var Aa={},Vn=Zn(Aa),wa=Zn(Aa),ka=Zn(Aa);function gt(e){if(e===Aa)throw Error(l(174));return e}function Eo(e,n){switch(ge(ka,n),ge(wa,e),ge(Vn,Aa),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ei(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ei(n,e)}Ce(Vn),ge(Vn,n)}function $t(){Ce(Vn),Ce(wa),Ce(ka)}function gu(e){gt(ka.current);var n=gt(Vn.current),t=Ei(n,e.type);n!==t&&(ge(wa,e),ge(Vn,t))}function No(e){wa.current===e&&(Ce(Vn),Ce(wa))}var be=Zn(0);function Rr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Co=[];function xo(){for(var e=0;e<Co.length;e++)Co[e]._workInProgressVersionPrimary=null;Co.length=0}var Dr=H.ReactCurrentDispatcher,So=H.ReactCurrentBatchConfig,yt=0,Ae=null,ze=null,Qe=null,Ir=!1,_a=!1,ja=0,Bf=0;function Ke(){throw Error(l(321))}function Vo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Pn(e[t],n[t]))return!1;return!0}function bo(e,n,t,a,r,o){if(yt=o,Ae=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Dr.current=e===null||e.memoizedState===null?Kf:$f,e=t(a,r),_a){o=0;do{if(_a=!1,ja=0,25<=o)throw Error(l(301));o+=1,Qe=ze=null,n.updateQueue=null,Dr.current=Hf,e=t(a,r)}while(_a)}if(Dr.current=Fr,n=ze!==null&&ze.next!==null,yt=0,Qe=ze=Ae=null,Ir=!1,n)throw Error(l(300));return e}function Ao(){var e=ja!==0;return ja=0,e}function bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?Ae.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function fn(){if(ze===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var n=Qe===null?Ae.memoizedState:Qe.next;if(n!==null)Qe=n,ze=e;else{if(e===null)throw Error(l(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Qe===null?Ae.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function Ra(e,n){return typeof n=="function"?n(e):n}function wo(e){var n=fn(),t=n.queue;if(t===null)throw Error(l(311));t.lastRenderedReducer=e;var a=ze,r=a.baseQueue,o=t.pending;if(o!==null){if(r!==null){var c=r.next;r.next=o.next,o.next=c}a.baseQueue=r=o,t.pending=null}if(r!==null){o=r.next,a=a.baseState;var f=c=null,T=null,E=o;do{var R=E.lane;if((yt&R)===R)T!==null&&(T=T.next={lane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),a=E.hasEagerState?E.eagerState:e(a,E.action);else{var I={lane:R,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null};T===null?(f=T=I,c=a):T=T.next=I,Ae.lanes|=R,Mt|=R}E=E.next}while(E!==null&&E!==o);T===null?c=a:T.next=f,Pn(a,n.memoizedState)||(en=!0),n.memoizedState=a,n.baseState=c,n.baseQueue=T,t.lastRenderedState=a}if(e=t.interleaved,e!==null){r=e;do o=r.lane,Ae.lanes|=o,Mt|=o,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function ko(e){var n=fn(),t=n.queue;if(t===null)throw Error(l(311));t.lastRenderedReducer=e;var a=t.dispatch,r=t.pending,o=n.memoizedState;if(r!==null){t.pending=null;var c=r=r.next;do o=e(o,c.action),c=c.next;while(c!==r);Pn(o,n.memoizedState)||(en=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,a]}function yu(){}function Mu(e,n){var t=Ae,a=fn(),r=n(),o=!Pn(a.memoizedState,r);if(o&&(a.memoizedState=r,en=!0),a=a.queue,_o(Cu.bind(null,t,a,e),[e]),a.getSnapshot!==n||o||Qe!==null&&Qe.memoizedState.tag&1){if(t.flags|=2048,Da(9,Nu.bind(null,t,a,r,n),void 0,null),Je===null)throw Error(l(349));(yt&30)!==0||Eu(t,n,r)}return r}function Eu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Ae.updateQueue,n===null?(n={lastEffect:null,stores:null},Ae.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Nu(e,n,t,a){n.value=t,n.getSnapshot=a,xu(n)&&Su(e)}function Cu(e,n,t){return t(function(){xu(n)&&Su(e)})}function xu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Pn(e,t)}catch{return!0}}function Su(e){var n=In(e,1);n!==null&&Nn(n,e,1,-1)}function Vu(e){var n=bn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:e},n.queue=e,e=e.dispatch=Gf.bind(null,Ae,e),[n.memoizedState,e]}function Da(e,n,t,a){return e={tag:e,create:n,destroy:t,deps:a,next:null},n=Ae.updateQueue,n===null?(n={lastEffect:null,stores:null},Ae.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e)),e}function bu(){return fn().memoizedState}function Or(e,n,t,a){var r=bn();Ae.flags|=e,r.memoizedState=Da(1|n,t,void 0,a===void 0?null:a)}function zr(e,n,t,a){var r=fn();a=a===void 0?null:a;var o=void 0;if(ze!==null){var c=ze.memoizedState;if(o=c.destroy,a!==null&&Vo(a,c.deps)){r.memoizedState=Da(n,t,o,a);return}}Ae.flags|=e,r.memoizedState=Da(1|n,t,o,a)}function Au(e,n){return Or(8390656,8,e,n)}function _o(e,n){return zr(2048,8,e,n)}function wu(e,n){return zr(4,2,e,n)}function ku(e,n){return zr(4,4,e,n)}function _u(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ju(e,n,t){return t=t!=null?t.concat([e]):null,zr(4,4,_u.bind(null,n,e),t)}function jo(){}function Ru(e,n){var t=fn();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&Vo(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function Du(e,n){var t=fn();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&Vo(n,a[1])?a[0]:(e=e(),t.memoizedState=[e,n],e)}function Iu(e,n,t){return(yt&21)===0?(e.baseState&&(e.baseState=!1,en=!0),e.memoizedState=t):(Pn(t,n)||(t=fl(),Ae.lanes|=t,Mt|=t,e.baseState=!0),n)}function Yf(e,n){var t=he;he=t!==0&&4>t?t:4,e(!0);var a=So.transition;So.transition={};try{e(!1),n()}finally{he=t,So.transition=a}}function Ou(){return fn().memoizedState}function Uf(e,n,t){var a=ot(e);if(t={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null},zu(e))Fu(n,t);else if(t=vu(e,n,t,a),t!==null){var r=We();Nn(t,e,a,r),Qu(t,n,a)}}function Gf(e,n,t){var a=ot(e),r={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null};if(zu(e))Fu(n,r);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var c=n.lastRenderedState,f=o(c,t);if(r.hasEagerState=!0,r.eagerState=f,Pn(f,c)){var T=n.interleaved;T===null?(r.next=r,yo(n)):(r.next=T.next,T.next=r),n.interleaved=r;return}}catch{}finally{}t=vu(e,n,r,a),t!==null&&(r=We(),Nn(t,e,a,r),Qu(t,n,a))}}function zu(e){var n=e.alternate;return e===Ae||n!==null&&n===Ae}function Fu(e,n){_a=Ir=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Qu(e,n,t){if((t&4194240)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Ri(e,t)}}var Fr={readContext:mn,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},Kf={readContext:mn,useCallback:function(e,n){return bn().memoizedState=[e,n===void 0?null:n],e},useContext:mn,useEffect:Au,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Or(4194308,4,_u.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Or(4194308,4,e,n)},useInsertionEffect:function(e,n){return Or(4,2,e,n)},useMemo:function(e,n){var t=bn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var a=bn();return n=t!==void 0?t(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=Uf.bind(null,Ae,e),[a.memoizedState,e]},useRef:function(e){var n=bn();return e={current:e},n.memoizedState=e},useState:Vu,useDebugValue:jo,useDeferredValue:function(e){return bn().memoizedState=e},useTransition:function(){var e=Vu(!1),n=e[0];return e=Yf.bind(null,e[1]),bn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var a=Ae,r=bn();if(Se){if(t===void 0)throw Error(l(407));t=t()}else{if(t=n(),Je===null)throw Error(l(349));(yt&30)!==0||Eu(a,n,t)}r.memoizedState=t;var o={value:t,getSnapshot:n};return r.queue=o,Au(Cu.bind(null,a,o,e),[e]),a.flags|=2048,Da(9,Nu.bind(null,a,o,t,n),void 0,null),t},useId:function(){var e=bn(),n=Je.identifierPrefix;if(Se){var t=Dn,a=Rn;t=(a&~(1<<32-hn(a)-1)).toString(32)+t,n=":"+n+"R"+t,t=ja++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Bf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},$f={readContext:mn,useCallback:Ru,useContext:mn,useEffect:_o,useImperativeHandle:ju,useInsertionEffect:wu,useLayoutEffect:ku,useMemo:Du,useReducer:wo,useRef:bu,useState:function(){return wo(Ra)},useDebugValue:jo,useDeferredValue:function(e){var n=fn();return Iu(n,ze.memoizedState,e)},useTransition:function(){var e=wo(Ra)[0],n=fn().memoizedState;return[e,n]},useMutableSource:yu,useSyncExternalStore:Mu,useId:Ou,unstable_isNewReconciler:!1},Hf={readContext:mn,useCallback:Ru,useContext:mn,useEffect:_o,useImperativeHandle:ju,useInsertionEffect:wu,useLayoutEffect:ku,useMemo:Du,useReducer:ko,useRef:bu,useState:function(){return ko(Ra)},useDebugValue:jo,useDeferredValue:function(e){var n=fn();return ze===null?n.memoizedState=e:Iu(n,ze.memoizedState,e)},useTransition:function(){var e=ko(Ra)[0],n=fn().memoizedState;return[e,n]},useMutableSource:yu,useSyncExternalStore:Mu,useId:Ou,unstable_isNewReconciler:!1};function yn(e,n){if(e&&e.defaultProps){n=Q({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ro(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:Q({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Qr={isMounted:function(e){return(e=e._reactInternals)?pt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var a=We(),r=ot(e),o=On(a,r);o.payload=n,t!=null&&(o.callback=t),n=tt(e,o,r),n!==null&&(Nn(n,e,r,a),_r(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=We(),r=ot(e),o=On(a,r);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=tt(e,o,r),n!==null&&(Nn(n,e,r,a),_r(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=We(),a=ot(e),r=On(t,a);r.tag=2,n!=null&&(r.callback=n),n=tt(e,r,a),n!==null&&(Nn(n,e,a,t),_r(n,e,a))}};function Ju(e,n,t,a,r,o,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,o,c):n.prototype&&n.prototype.isPureReactComponent?!Ma(t,a)||!Ma(r,o):!0}function Bu(e,n,t){var a=!1,r=Xn,o=n.contextType;return typeof o=="object"&&o!==null?o=mn(o):(r=Xe(n)?vt:Ge.current,a=n.contextTypes,o=(a=a!=null)?Qt(e,r):Xn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Qr,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=o),n}function Yu(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&Qr.enqueueReplaceState(n,n.state,null)}function Do(e,n,t,a){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},Mo(e);var o=n.contextType;typeof o=="object"&&o!==null?r.context=mn(o):(o=Xe(n)?vt:Ge.current,r.context=Qt(e,o)),r.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Ro(e,n,o,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&Qr.enqueueReplaceState(r,r.state,null),jr(e,t,r,a),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Ht(e,n){try{var t="",a=n;do t+=le(a),a=a.return;while(a);var r=t}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:r,digest:null}}function Io(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Oo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var qf=typeof WeakMap=="function"?WeakMap:Map;function Uu(e,n,t){t=On(-1,t),t.tag=3,t.payload={element:null};var a=n.value;return t.callback=function(){$r||($r=!0,Xo=a),Oo(e,n)},t}function Gu(e,n,t){t=On(-1,t),t.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var r=n.value;t.payload=function(){return a(r)},t.callback=function(){Oo(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Oo(e,n),typeof a!="function"&&(rt===null?rt=new Set([this]):rt.add(this));var c=n.stack;this.componentDidCatch(n.value,{componentStack:c!==null?c:""})}),t}function Ku(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new qf;var r=new Set;a.set(n,r)}else r=a.get(n),r===void 0&&(r=new Set,a.set(n,r));r.has(t)||(r.add(t),e=cp.bind(null,e,n,t),n.then(e,e))}function $u(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Hu(e,n,t,a,r){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=On(-1,1),n.tag=2,tt(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=r,e)}var Wf=H.ReactCurrentOwner,en=!1;function qe(e,n,t,a){n.child=e===null?Tu(n,null,t,a):Ut(n,e.child,t,a)}function qu(e,n,t,a,r){t=t.render;var o=n.ref;return Kt(n,r),a=bo(e,n,t,a,o,r),t=Ao(),e!==null&&!en?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,zn(e,n,r)):(Se&&t&&mo(n),n.flags|=1,qe(e,n,a,r),n.child)}function Wu(e,n,t,a,r){if(e===null){var o=t.type;return typeof o=="function"&&!os(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Zu(e,n,o,a,r)):(e=ei(t.type,null,a,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,(e.lanes&r)===0){var c=o.memoizedProps;if(t=t.compare,t=t!==null?t:Ma,t(c,a)&&e.ref===n.ref)return zn(e,n,r)}return n.flags|=1,e=lt(o,a),e.ref=n.ref,e.return=n,n.child=e}function Zu(e,n,t,a,r){if(e!==null){var o=e.memoizedProps;if(Ma(o,a)&&e.ref===n.ref)if(en=!1,n.pendingProps=a=o,(e.lanes&r)!==0)(e.flags&131072)!==0&&(en=!0);else return n.lanes=e.lanes,zn(e,n,r)}return zo(e,n,t,a,r)}function Xu(e,n,t){var a=n.pendingProps,r=a.children,o=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Wt,ln),ln|=t;else{if((t&1073741824)===0)return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ge(Wt,ln),ln|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=o!==null?o.baseLanes:t,ge(Wt,ln),ln|=a}else o!==null?(a=o.baseLanes|t,n.memoizedState=null):a=t,ge(Wt,ln),ln|=a;return qe(e,n,r,t),n.child}function ec(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function zo(e,n,t,a,r){var o=Xe(t)?vt:Ge.current;return o=Qt(n,o),Kt(n,r),t=bo(e,n,t,a,o,r),a=Ao(),e!==null&&!en?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,zn(e,n,r)):(Se&&a&&mo(n),n.flags|=1,qe(e,n,t,r),n.child)}function nc(e,n,t,a,r){if(Xe(t)){var o=!0;Cr(n)}else o=!1;if(Kt(n,r),n.stateNode===null)Br(e,n),Bu(n,t,a),Do(n,t,a,r),a=!0;else if(e===null){var c=n.stateNode,f=n.memoizedProps;c.props=f;var T=c.context,E=t.contextType;typeof E=="object"&&E!==null?E=mn(E):(E=Xe(t)?vt:Ge.current,E=Qt(n,E));var R=t.getDerivedStateFromProps,I=typeof R=="function"||typeof c.getSnapshotBeforeUpdate=="function";I||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(f!==a||T!==E)&&Yu(n,c,a,E),nt=!1;var j=n.memoizedState;c.state=j,jr(n,a,c,r),T=n.memoizedState,f!==a||j!==T||Ze.current||nt?(typeof R=="function"&&(Ro(n,t,R,a),T=n.memoizedState),(f=nt||Ju(n,t,f,a,j,T,E))?(I||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=T),c.props=a,c.state=T,c.context=E,a=f):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{c=n.stateNode,Lu(e,n),f=n.memoizedProps,E=n.type===n.elementType?f:yn(n.type,f),c.props=E,I=n.pendingProps,j=c.context,T=t.contextType,typeof T=="object"&&T!==null?T=mn(T):(T=Xe(t)?vt:Ge.current,T=Qt(n,T));var Y=t.getDerivedStateFromProps;(R=typeof Y=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(f!==I||j!==T)&&Yu(n,c,a,T),nt=!1,j=n.memoizedState,c.state=j,jr(n,a,c,r);var G=n.memoizedState;f!==I||j!==G||Ze.current||nt?(typeof Y=="function"&&(Ro(n,t,Y,a),G=n.memoizedState),(E=nt||Ju(n,t,E,a,j,G,T)||!1)?(R||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(a,G,T),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(a,G,T)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=G),c.props=a,c.state=G,c.context=T,a=E):(typeof c.componentDidUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(n.flags|=1024),a=!1)}return Fo(e,n,t,a,o,r)}function Fo(e,n,t,a,r,o){ec(e,n);var c=(n.flags&128)!==0;if(!a&&!c)return r&&ou(n,t,!1),zn(e,n,o);a=n.stateNode,Wf.current=n;var f=c&&typeof t.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&c?(n.child=Ut(n,e.child,null,o),n.child=Ut(n,null,f,o)):qe(e,n,f,o),n.memoizedState=a.state,r&&ou(n,t,!0),n.child}function tc(e){var n=e.stateNode;n.pendingContext?ru(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ru(e,n.context,!1),Eo(e,n.containerInfo)}function ac(e,n,t,a,r){return Yt(),vo(r),n.flags|=256,qe(e,n,t,a),n.child}var Qo={dehydrated:null,treeContext:null,retryLane:0};function Jo(e){return{baseLanes:e,cachePool:null,transitions:null}}function rc(e,n,t){var a=n.pendingProps,r=be.current,o=!1,c=(n.flags&128)!==0,f;if((f=c)||(f=e!==null&&e.memoizedState===null?!1:(r&2)!==0),f?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),ge(be,r&1),e===null)return To(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(c=a.children,e=a.fallback,o?(a=n.mode,o=n.child,c={mode:"hidden",children:c},(a&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=c):o=ni(c,a,0,null),e=xt(e,a,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Jo(t),n.memoizedState=Qo,e):Bo(n,c));if(r=e.memoizedState,r!==null&&(f=r.dehydrated,f!==null))return Zf(e,n,c,a,f,r,t);if(o){o=a.fallback,c=n.mode,r=e.child,f=r.sibling;var T={mode:"hidden",children:a.children};return(c&1)===0&&n.child!==r?(a=n.child,a.childLanes=0,a.pendingProps=T,n.deletions=null):(a=lt(r,T),a.subtreeFlags=r.subtreeFlags&14680064),f!==null?o=lt(f,o):(o=xt(o,c,t,null),o.flags|=2),o.return=n,a.return=n,a.sibling=o,n.child=a,a=o,o=n.child,c=e.child.memoizedState,c=c===null?Jo(t):{baseLanes:c.baseLanes|t,cachePool:null,transitions:c.transitions},o.memoizedState=c,o.childLanes=e.childLanes&~t,n.memoizedState=Qo,a}return o=e.child,e=o.sibling,a=lt(o,{mode:"visible",children:a.children}),(n.mode&1)===0&&(a.lanes=t),a.return=n,a.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=a,n.memoizedState=null,a}function Bo(e,n){return n=ni({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Jr(e,n,t,a){return a!==null&&vo(a),Ut(n,e.child,null,t),e=Bo(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Zf(e,n,t,a,r,o,c){if(t)return n.flags&256?(n.flags&=-257,a=Io(Error(l(422))),Jr(e,n,c,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=a.fallback,r=n.mode,a=ni({mode:"visible",children:a.children},r,0,null),o=xt(o,r,c,null),o.flags|=2,a.return=n,o.return=n,a.sibling=o,n.child=a,(n.mode&1)!==0&&Ut(n,e.child,null,c),n.child.memoizedState=Jo(c),n.memoizedState=Qo,o);if((n.mode&1)===0)return Jr(e,n,c,null);if(r.data==="$!"){if(a=r.nextSibling&&r.nextSibling.dataset,a)var f=a.dgst;return a=f,o=Error(l(419)),a=Io(o,a,void 0),Jr(e,n,c,a)}if(f=(c&e.childLanes)!==0,en||f){if(a=Je,a!==null){switch(c&-c){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(a.suspendedLanes|c))!==0?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,In(e,r),Nn(a,e,r,-1))}return is(),a=Io(Error(l(421))),Jr(e,n,c,a)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=dp.bind(null,e),r._reactRetry=n,null):(e=o.treeContext,sn=Wn(r.nextSibling),on=n,Se=!0,gn=null,e!==null&&(cn[dn++]=Rn,cn[dn++]=Dn,cn[dn++]=Lt,Rn=e.id,Dn=e.overflow,Lt=n),n=Bo(n,a.children),n.flags|=4096,n)}function ic(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),go(e.return,n,t)}function Yo(e,n,t,a,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:r}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=t,o.tailMode=r)}function oc(e,n,t){var a=n.pendingProps,r=a.revealOrder,o=a.tail;if(qe(e,n,a.children,t),a=be.current,(a&2)!==0)a=a&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ic(e,t,n);else if(e.tag===19)ic(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(ge(be,a),(n.mode&1)===0)n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&Rr(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),Yo(n,!1,r,t,o);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&Rr(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}Yo(n,!0,t,null,o);break;case"together":Yo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Br(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function zn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Mt|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(l(153));if(n.child!==null){for(e=n.child,t=lt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=lt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Xf(e,n,t){switch(n.tag){case 3:tc(n),Yt();break;case 5:gu(n);break;case 1:Xe(n.type)&&Cr(n);break;case 4:Eo(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,r=n.memoizedProps.value;ge(wr,a._currentValue),a._currentValue=r;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(ge(be,be.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?rc(e,n,t):(ge(be,be.current&1),e=zn(e,n,t),e!==null?e.sibling:null);ge(be,be.current&1);break;case 19:if(a=(t&n.childLanes)!==0,(e.flags&128)!==0){if(a)return oc(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ge(be,be.current),a)break;return null;case 22:case 23:return n.lanes=0,Xu(e,n,t)}return zn(e,n,t)}var sc,Uo,lc,uc;sc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},Uo=function(){},lc=function(e,n,t,a){var r=e.memoizedProps;if(r!==a){e=n.stateNode,gt(Vn.current);var o=null;switch(t){case"input":r=ft(e,r),a=ft(e,a),o=[];break;case"select":r=Q({},r,{value:void 0}),a=Q({},a,{value:void 0}),o=[];break;case"textarea":r=Mi(e,r),a=Mi(e,a),o=[];break;default:typeof r.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Mr)}Ni(t,a);var c;t=null;for(E in r)if(!a.hasOwnProperty(E)&&r.hasOwnProperty(E)&&r[E]!=null)if(E==="style"){var f=r[E];for(c in f)f.hasOwnProperty(c)&&(t||(t={}),t[c]="")}else E!=="dangerouslySetInnerHTML"&&E!=="children"&&E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&E!=="autoFocus"&&(m.hasOwnProperty(E)?o||(o=[]):(o=o||[]).push(E,null));for(E in a){var T=a[E];if(f=r!=null?r[E]:void 0,a.hasOwnProperty(E)&&T!==f&&(T!=null||f!=null))if(E==="style")if(f){for(c in f)!f.hasOwnProperty(c)||T&&T.hasOwnProperty(c)||(t||(t={}),t[c]="");for(c in T)T.hasOwnProperty(c)&&f[c]!==T[c]&&(t||(t={}),t[c]=T[c])}else t||(o||(o=[]),o.push(E,t)),t=T;else E==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,f=f?f.__html:void 0,T!=null&&f!==T&&(o=o||[]).push(E,T)):E==="children"?typeof T!="string"&&typeof T!="number"||(o=o||[]).push(E,""+T):E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&(m.hasOwnProperty(E)?(T!=null&&E==="onScroll"&&Ne("scroll",e),o||f===T||(o=[])):(o=o||[]).push(E,T))}t&&(o=o||[]).push("style",t);var E=o;(n.updateQueue=E)&&(n.flags|=4)}},uc=function(e,n,t,a){t!==a&&(n.flags|=4)};function Ia(e,n){if(!Se)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function $e(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags&14680064,a|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function ep(e,n,t){var a=n.pendingProps;switch(fo(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(n),null;case 1:return Xe(n.type)&&Nr(),$e(n),null;case 3:return a=n.stateNode,$t(),Ce(Ze),Ce(Ge),xo(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(br(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,gn!==null&&(ts(gn),gn=null))),Uo(e,n),$e(n),null;case 5:No(n);var r=gt(ka.current);if(t=n.type,e!==null&&n.stateNode!=null)lc(e,n,t,a,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(l(166));return $e(n),null}if(e=gt(Vn.current),br(n)){a=n.stateNode,t=n.type;var o=n.memoizedProps;switch(a[Sn]=n,a[Sa]=o,e=(n.mode&1)!==0,t){case"dialog":Ne("cancel",a),Ne("close",a);break;case"iframe":case"object":case"embed":Ne("load",a);break;case"video":case"audio":for(r=0;r<Na.length;r++)Ne(Na[r],a);break;case"source":Ne("error",a);break;case"img":case"image":case"link":Ne("error",a),Ne("load",a);break;case"details":Ne("toggle",a);break;case"input":Vt(a,o),Ne("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!o.multiple},Ne("invalid",a);break;case"textarea":Gs(a,o),Ne("invalid",a)}Ni(t,o),r=null;for(var c in o)if(o.hasOwnProperty(c)){var f=o[c];c==="children"?typeof f=="string"?a.textContent!==f&&(o.suppressHydrationWarning!==!0&&yr(a.textContent,f,e),r=["children",f]):typeof f=="number"&&a.textContent!==""+f&&(o.suppressHydrationWarning!==!0&&yr(a.textContent,f,e),r=["children",""+f]):m.hasOwnProperty(c)&&f!=null&&c==="onScroll"&&Ne("scroll",a)}switch(t){case"input":b(a),Us(a,o,!0);break;case"textarea":b(a),$s(a);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(a.onclick=Mr)}a=r,n.updateQueue=a,a!==null&&(n.flags|=4)}else{c=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hs(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=c.createElement(t,{is:a.is}):(e=c.createElement(t),t==="select"&&(c=e,a.multiple?c.multiple=!0:a.size&&(c.size=a.size))):e=c.createElementNS(e,t),e[Sn]=n,e[Sa]=a,sc(e,n,!1,!1),n.stateNode=e;e:{switch(c=Ci(t,a),t){case"dialog":Ne("cancel",e),Ne("close",e),r=a;break;case"iframe":case"object":case"embed":Ne("load",e),r=a;break;case"video":case"audio":for(r=0;r<Na.length;r++)Ne(Na[r],e);r=a;break;case"source":Ne("error",e),r=a;break;case"img":case"image":case"link":Ne("error",e),Ne("load",e),r=a;break;case"details":Ne("toggle",e),r=a;break;case"input":Vt(e,a),r=ft(e,a),Ne("invalid",e);break;case"option":r=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},r=Q({},a,{value:void 0}),Ne("invalid",e);break;case"textarea":Gs(e,a),r=Mi(e,a),Ne("invalid",e);break;default:r=a}Ni(t,r),f=r;for(o in f)if(f.hasOwnProperty(o)){var T=f[o];o==="style"?Zs(e,T):o==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,T!=null&&qs(e,T)):o==="children"?typeof T=="string"?(t!=="textarea"||T!=="")&&ia(e,T):typeof T=="number"&&ia(e,""+T):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(m.hasOwnProperty(o)?T!=null&&o==="onScroll"&&Ne("scroll",e):T!=null&&oe(e,o,T,c))}switch(t){case"input":b(e),Us(e,a,!1);break;case"textarea":b(e),$s(e);break;case"option":a.value!=null&&e.setAttribute("value",""+B(a.value));break;case"select":e.multiple=!!a.multiple,o=a.value,o!=null?bt(e,!!a.multiple,o,!1):a.defaultValue!=null&&bt(e,!!a.multiple,a.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Mr)}switch(t){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return $e(n),null;case 6:if(e&&n.stateNode!=null)uc(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(l(166));if(t=gt(ka.current),gt(Vn.current),br(n)){if(a=n.stateNode,t=n.memoizedProps,a[Sn]=n,(o=a.nodeValue!==t)&&(e=on,e!==null))switch(e.tag){case 3:yr(a.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&yr(a.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else a=(t.nodeType===9?t:t.ownerDocument).createTextNode(a),a[Sn]=n,n.stateNode=a}return $e(n),null;case 13:if(Ce(be),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&sn!==null&&(n.mode&1)!==0&&(n.flags&128)===0)mu(),Yt(),n.flags|=98560,o=!1;else if(o=br(n),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(l(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(l(317));o[Sn]=n}else Yt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),o=!1}else gn!==null&&(ts(gn),gn=null),o=!0;if(!o)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(be.current&1)!==0?Fe===0&&(Fe=3):is())),n.updateQueue!==null&&(n.flags|=4),$e(n),null);case 4:return $t(),Uo(e,n),e===null&&Ca(n.stateNode.containerInfo),$e(n),null;case 10:return Po(n.type._context),$e(n),null;case 17:return Xe(n.type)&&Nr(),$e(n),null;case 19:if(Ce(be),o=n.memoizedState,o===null)return $e(n),null;if(a=(n.flags&128)!==0,c=o.rendering,c===null)if(a)Ia(o,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(c=Rr(e),c!==null){for(n.flags|=128,Ia(o,!1),a=c.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=t,t=n.child;t!==null;)o=t,e=a,o.flags&=14680066,c=o.alternate,c===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=c.childLanes,o.lanes=c.lanes,o.child=c.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=c.memoizedProps,o.memoizedState=c.memoizedState,o.updateQueue=c.updateQueue,o.type=c.type,e=c.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ge(be,be.current&1|2),n.child}e=e.sibling}o.tail!==null&&je()>Zt&&(n.flags|=128,a=!0,Ia(o,!1),n.lanes=4194304)}else{if(!a)if(e=Rr(c),e!==null){if(n.flags|=128,a=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ia(o,!0),o.tail===null&&o.tailMode==="hidden"&&!c.alternate&&!Se)return $e(n),null}else 2*je()-o.renderingStartTime>Zt&&t!==1073741824&&(n.flags|=128,a=!0,Ia(o,!1),n.lanes=4194304);o.isBackwards?(c.sibling=n.child,n.child=c):(t=o.last,t!==null?t.sibling=c:n.child=c,o.last=c)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=je(),n.sibling=null,t=be.current,ge(be,a?t&1|2:t&1),n):($e(n),null);case 22:case 23:return rs(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&(n.mode&1)!==0?(ln&1073741824)!==0&&($e(n),n.subtreeFlags&6&&(n.flags|=8192)):$e(n),null;case 24:return null;case 25:return null}throw Error(l(156,n.tag))}function np(e,n){switch(fo(n),n.tag){case 1:return Xe(n.type)&&Nr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return $t(),Ce(Ze),Ce(Ge),xo(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return No(n),null;case 13:if(Ce(be),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(l(340));Yt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Ce(be),null;case 4:return $t(),null;case 10:return Po(n.type._context),null;case 22:case 23:return rs(),null;case 24:return null;default:return null}}var Yr=!1,He=!1,tp=typeof WeakSet=="function"?WeakSet:Set,U=null;function qt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(a){_e(e,n,a)}else t.current=null}function Go(e,n,t){try{t()}catch(a){_e(e,n,a)}}var cc=!1;function ap(e,n){if(ao=cr,e=Jl(),Hi(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var r=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var c=0,f=-1,T=-1,E=0,R=0,I=e,j=null;n:for(;;){for(var Y;I!==t||r!==0&&I.nodeType!==3||(f=c+r),I!==o||a!==0&&I.nodeType!==3||(T=c+a),I.nodeType===3&&(c+=I.nodeValue.length),(Y=I.firstChild)!==null;)j=I,I=Y;for(;;){if(I===e)break n;if(j===t&&++E===r&&(f=c),j===o&&++R===a&&(T=c),(Y=I.nextSibling)!==null)break;I=j,j=I.parentNode}I=Y}t=f===-1||T===-1?null:{start:f,end:T}}else t=null}t=t||{start:0,end:0}}else t=null;for(ro={focusedElem:e,selectionRange:t},cr=!1,U=n;U!==null;)if(n=U,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,U=e;else for(;U!==null;){n=U;try{var G=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(G!==null){var $=G.memoizedProps,Re=G.memoizedState,y=n.stateNode,L=y.getSnapshotBeforeUpdate(n.elementType===n.type?$:yn(n.type,$),Re);y.__reactInternalSnapshotBeforeUpdate=L}break;case 3:var M=n.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(z){_e(n,n.return,z)}if(e=n.sibling,e!==null){e.return=n.return,U=e;break}U=n.return}return G=cc,cc=!1,G}function Oa(e,n,t){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var r=a=a.next;do{if((r.tag&e)===e){var o=r.destroy;r.destroy=void 0,o!==void 0&&Go(n,t,o)}r=r.next}while(r!==a)}}function Ur(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var a=t.create;t.destroy=a()}t=t.next}while(t!==n)}}function Ko(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function dc(e){var n=e.alternate;n!==null&&(e.alternate=null,dc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Sn],delete n[Sa],delete n[lo],delete n[zf],delete n[Ff])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mc(e){return e.tag===5||e.tag===3||e.tag===4}function fc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $o(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Mr));else if(a!==4&&(e=e.child,e!==null))for($o(e,n,t),e=e.sibling;e!==null;)$o(e,n,t),e=e.sibling}function Ho(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Ho(e,n,t),e=e.sibling;e!==null;)Ho(e,n,t),e=e.sibling}var Ye=null,Mn=!1;function at(e,n,t){for(t=t.child;t!==null;)pc(e,n,t),t=t.sibling}function pc(e,n,t){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(rr,t)}catch{}switch(t.tag){case 5:He||qt(t,n);case 6:var a=Ye,r=Mn;Ye=null,at(e,n,t),Ye=a,Mn=r,Ye!==null&&(Mn?(e=Ye,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Ye.removeChild(t.stateNode));break;case 18:Ye!==null&&(Mn?(e=Ye,t=t.stateNode,e.nodeType===8?so(e.parentNode,t):e.nodeType===1&&so(e,t),va(e)):so(Ye,t.stateNode));break;case 4:a=Ye,r=Mn,Ye=t.stateNode.containerInfo,Mn=!0,at(e,n,t),Ye=a,Mn=r;break;case 0:case 11:case 14:case 15:if(!He&&(a=t.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){r=a=a.next;do{var o=r,c=o.destroy;o=o.tag,c!==void 0&&((o&2)!==0||(o&4)!==0)&&Go(t,n,c),r=r.next}while(r!==a)}at(e,n,t);break;case 1:if(!He&&(qt(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=t.memoizedProps,a.state=t.memoizedState,a.componentWillUnmount()}catch(f){_e(t,n,f)}at(e,n,t);break;case 21:at(e,n,t);break;case 22:t.mode&1?(He=(a=He)||t.memoizedState!==null,at(e,n,t),He=a):at(e,n,t);break;default:at(e,n,t)}}function Tc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new tp),n.forEach(function(a){var r=mp.bind(null,e,a);t.has(a)||(t.add(a),a.then(r,r))})}}function En(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var r=t[a];try{var o=e,c=n,f=c;e:for(;f!==null;){switch(f.tag){case 5:Ye=f.stateNode,Mn=!1;break e;case 3:Ye=f.stateNode.containerInfo,Mn=!0;break e;case 4:Ye=f.stateNode.containerInfo,Mn=!0;break e}f=f.return}if(Ye===null)throw Error(l(160));pc(o,c,r),Ye=null,Mn=!1;var T=r.alternate;T!==null&&(T.return=null),r.return=null}catch(E){_e(r,n,E)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)vc(n,e),n=n.sibling}function vc(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(En(n,e),An(e),a&4){try{Oa(3,e,e.return),Ur(3,e)}catch($){_e(e,e.return,$)}try{Oa(5,e,e.return)}catch($){_e(e,e.return,$)}}break;case 1:En(n,e),An(e),a&512&&t!==null&&qt(t,t.return);break;case 5:if(En(n,e),An(e),a&512&&t!==null&&qt(t,t.return),e.flags&32){var r=e.stateNode;try{ia(r,"")}catch($){_e(e,e.return,$)}}if(a&4&&(r=e.stateNode,r!=null)){var o=e.memoizedProps,c=t!==null?t.memoizedProps:o,f=e.type,T=e.updateQueue;if(e.updateQueue=null,T!==null)try{f==="input"&&o.type==="radio"&&o.name!=null&&Xa(r,o),Ci(f,c);var E=Ci(f,o);for(c=0;c<T.length;c+=2){var R=T[c],I=T[c+1];R==="style"?Zs(r,I):R==="dangerouslySetInnerHTML"?qs(r,I):R==="children"?ia(r,I):oe(r,R,I,E)}switch(f){case"input":gi(r,o);break;case"textarea":Ks(r,o);break;case"select":var j=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var Y=o.value;Y!=null?bt(r,!!o.multiple,Y,!1):j!==!!o.multiple&&(o.defaultValue!=null?bt(r,!!o.multiple,o.defaultValue,!0):bt(r,!!o.multiple,o.multiple?[]:"",!1))}r[Sa]=o}catch($){_e(e,e.return,$)}}break;case 6:if(En(n,e),An(e),a&4){if(e.stateNode===null)throw Error(l(162));r=e.stateNode,o=e.memoizedProps;try{r.nodeValue=o}catch($){_e(e,e.return,$)}}break;case 3:if(En(n,e),An(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{va(n.containerInfo)}catch($){_e(e,e.return,$)}break;case 4:En(n,e),An(e);break;case 13:En(n,e),An(e),r=e.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Zo=je())),a&4&&Tc(e);break;case 22:if(R=t!==null&&t.memoizedState!==null,e.mode&1?(He=(E=He)||R,En(n,e),He=E):En(n,e),An(e),a&8192){if(E=e.memoizedState!==null,(e.stateNode.isHidden=E)&&!R&&(e.mode&1)!==0)for(U=e,R=e.child;R!==null;){for(I=U=R;U!==null;){switch(j=U,Y=j.child,j.tag){case 0:case 11:case 14:case 15:Oa(4,j,j.return);break;case 1:qt(j,j.return);var G=j.stateNode;if(typeof G.componentWillUnmount=="function"){a=j,t=j.return;try{n=a,G.props=n.memoizedProps,G.state=n.memoizedState,G.componentWillUnmount()}catch($){_e(a,t,$)}}break;case 5:qt(j,j.return);break;case 22:if(j.memoizedState!==null){Pc(I);continue}}Y!==null?(Y.return=j,U=Y):Pc(I)}R=R.sibling}e:for(R=null,I=e;;){if(I.tag===5){if(R===null){R=I;try{r=I.stateNode,E?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(f=I.stateNode,T=I.memoizedProps.style,c=T!=null&&T.hasOwnProperty("display")?T.display:null,f.style.display=Ws("display",c))}catch($){_e(e,e.return,$)}}}else if(I.tag===6){if(R===null)try{I.stateNode.nodeValue=E?"":I.memoizedProps}catch($){_e(e,e.return,$)}}else if((I.tag!==22&&I.tag!==23||I.memoizedState===null||I===e)&&I.child!==null){I.child.return=I,I=I.child;continue}if(I===e)break e;for(;I.sibling===null;){if(I.return===null||I.return===e)break e;R===I&&(R=null),I=I.return}R===I&&(R=null),I.sibling.return=I.return,I=I.sibling}}break;case 19:En(n,e),An(e),a&4&&Tc(e);break;case 21:break;default:En(n,e),An(e)}}function An(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(mc(t)){var a=t;break e}t=t.return}throw Error(l(160))}switch(a.tag){case 5:var r=a.stateNode;a.flags&32&&(ia(r,""),a.flags&=-33);var o=fc(e);Ho(e,o,r);break;case 3:case 4:var c=a.stateNode.containerInfo,f=fc(e);$o(e,f,c);break;default:throw Error(l(161))}}catch(T){_e(e,e.return,T)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function rp(e,n,t){U=e,Lc(e)}function Lc(e,n,t){for(var a=(e.mode&1)!==0;U!==null;){var r=U,o=r.child;if(r.tag===22&&a){var c=r.memoizedState!==null||Yr;if(!c){var f=r.alternate,T=f!==null&&f.memoizedState!==null||He;f=Yr;var E=He;if(Yr=c,(He=T)&&!E)for(U=r;U!==null;)c=U,T=c.child,c.tag===22&&c.memoizedState!==null?gc(r):T!==null?(T.return=c,U=T):gc(r);for(;o!==null;)U=o,Lc(o),o=o.sibling;U=r,Yr=f,He=E}hc(e)}else(r.subtreeFlags&8772)!==0&&o!==null?(o.return=r,U=o):hc(e)}}function hc(e){for(;U!==null;){var n=U;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:He||Ur(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!He)if(t===null)a.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:yn(n.type,t.memoizedProps);a.componentDidUpdate(r,t.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Pu(n,o,a);break;case 3:var c=n.updateQueue;if(c!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Pu(n,c,t)}break;case 5:var f=n.stateNode;if(t===null&&n.flags&4){t=f;var T=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":T.autoFocus&&t.focus();break;case"img":T.src&&(t.src=T.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var E=n.alternate;if(E!==null){var R=E.memoizedState;if(R!==null){var I=R.dehydrated;I!==null&&va(I)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}He||n.flags&512&&Ko(n)}catch(j){_e(n,n.return,j)}}if(n===e){U=null;break}if(t=n.sibling,t!==null){t.return=n.return,U=t;break}U=n.return}}function Pc(e){for(;U!==null;){var n=U;if(n===e){U=null;break}var t=n.sibling;if(t!==null){t.return=n.return,U=t;break}U=n.return}}function gc(e){for(;U!==null;){var n=U;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ur(4,n)}catch(T){_e(n,t,T)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var r=n.return;try{a.componentDidMount()}catch(T){_e(n,r,T)}}var o=n.return;try{Ko(n)}catch(T){_e(n,o,T)}break;case 5:var c=n.return;try{Ko(n)}catch(T){_e(n,c,T)}}}catch(T){_e(n,n.return,T)}if(n===e){U=null;break}var f=n.sibling;if(f!==null){f.return=n.return,U=f;break}U=n.return}}var ip=Math.ceil,Gr=H.ReactCurrentDispatcher,qo=H.ReactCurrentOwner,pn=H.ReactCurrentBatchConfig,de=0,Je=null,Ie=null,Ue=0,ln=0,Wt=Zn(0),Fe=0,za=null,Mt=0,Kr=0,Wo=0,Fa=null,nn=null,Zo=0,Zt=1/0,Fn=null,$r=!1,Xo=null,rt=null,Hr=!1,it=null,qr=0,Qa=0,es=null,Wr=-1,Zr=0;function We(){return(de&6)!==0?je():Wr!==-1?Wr:Wr=je()}function ot(e){return(e.mode&1)===0?1:(de&2)!==0&&Ue!==0?Ue&-Ue:Jf.transition!==null?(Zr===0&&(Zr=fl()),Zr):(e=he,e!==0||(e=window.event,e=e===void 0?16:Ml(e.type)),e)}function Nn(e,n,t,a){if(50<Qa)throw Qa=0,es=null,Error(l(185));da(e,t,a),((de&2)===0||e!==Je)&&(e===Je&&((de&2)===0&&(Kr|=t),Fe===4&&st(e,Ue)),tn(e,a),t===1&&de===0&&(n.mode&1)===0&&(Zt=je()+500,xr&&et()))}function tn(e,n){var t=e.callbackNode;Qm(e,n);var a=sr(e,e===Je?Ue:0);if(a===0)t!==null&&cl(t),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(t!=null&&cl(t),n===1)e.tag===0?Qf(Mc.bind(null,e)):su(Mc.bind(null,e)),If(function(){(de&6)===0&&et()}),t=null;else{switch(pl(a)){case 1:t=ki;break;case 4:t=dl;break;case 16:t=ar;break;case 536870912:t=ml;break;default:t=ar}t=Ac(t,yc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function yc(e,n){if(Wr=-1,Zr=0,(de&6)!==0)throw Error(l(327));var t=e.callbackNode;if(Xt()&&e.callbackNode!==t)return null;var a=sr(e,e===Je?Ue:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||n)n=Xr(e,a);else{n=a;var r=de;de|=2;var o=Nc();(Je!==e||Ue!==n)&&(Fn=null,Zt=je()+500,Nt(e,n));do try{lp();break}catch(f){Ec(e,f)}while(!0);ho(),Gr.current=o,de=r,Ie!==null?n=0:(Je=null,Ue=0,n=Fe)}if(n!==0){if(n===2&&(r=_i(e),r!==0&&(a=r,n=ns(e,r))),n===1)throw t=za,Nt(e,0),st(e,a),tn(e,je()),t;if(n===6)st(e,a);else{if(r=e.current.alternate,(a&30)===0&&!op(r)&&(n=Xr(e,a),n===2&&(o=_i(e),o!==0&&(a=o,n=ns(e,o))),n===1))throw t=za,Nt(e,0),st(e,a),tn(e,je()),t;switch(e.finishedWork=r,e.finishedLanes=a,n){case 0:case 1:throw Error(l(345));case 2:Ct(e,nn,Fn);break;case 3:if(st(e,a),(a&130023424)===a&&(n=Zo+500-je(),10<n)){if(sr(e,0)!==0)break;if(r=e.suspendedLanes,(r&a)!==a){We(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=oo(Ct.bind(null,e,nn,Fn),n);break}Ct(e,nn,Fn);break;case 4:if(st(e,a),(a&4194240)===a)break;for(n=e.eventTimes,r=-1;0<a;){var c=31-hn(a);o=1<<c,c=n[c],c>r&&(r=c),a&=~o}if(a=r,a=je()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*ip(a/1960))-a,10<a){e.timeoutHandle=oo(Ct.bind(null,e,nn,Fn),a);break}Ct(e,nn,Fn);break;case 5:Ct(e,nn,Fn);break;default:throw Error(l(329))}}}return tn(e,je()),e.callbackNode===t?yc.bind(null,e):null}function ns(e,n){var t=Fa;return e.current.memoizedState.isDehydrated&&(Nt(e,n).flags|=256),e=Xr(e,n),e!==2&&(n=nn,nn=t,n!==null&&ts(n)),e}function ts(e){nn===null?nn=e:nn.push.apply(nn,e)}function op(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var a=0;a<t.length;a++){var r=t[a],o=r.getSnapshot;r=r.value;try{if(!Pn(o(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function st(e,n){for(n&=~Wo,n&=~Kr,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-hn(n),a=1<<t;e[t]=-1,n&=~a}}function Mc(e){if((de&6)!==0)throw Error(l(327));Xt();var n=sr(e,0);if((n&1)===0)return tn(e,je()),null;var t=Xr(e,n);if(e.tag!==0&&t===2){var a=_i(e);a!==0&&(n=a,t=ns(e,a))}if(t===1)throw t=za,Nt(e,0),st(e,n),tn(e,je()),t;if(t===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Ct(e,nn,Fn),tn(e,je()),null}function as(e,n){var t=de;de|=1;try{return e(n)}finally{de=t,de===0&&(Zt=je()+500,xr&&et())}}function Et(e){it!==null&&it.tag===0&&(de&6)===0&&Xt();var n=de;de|=1;var t=pn.transition,a=he;try{if(pn.transition=null,he=1,e)return e()}finally{he=a,pn.transition=t,de=n,(de&6)===0&&et()}}function rs(){ln=Wt.current,Ce(Wt)}function Nt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Df(t)),Ie!==null)for(t=Ie.return;t!==null;){var a=t;switch(fo(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Nr();break;case 3:$t(),Ce(Ze),Ce(Ge),xo();break;case 5:No(a);break;case 4:$t();break;case 13:Ce(be);break;case 19:Ce(be);break;case 10:Po(a.type._context);break;case 22:case 23:rs()}t=t.return}if(Je=e,Ie=e=lt(e.current,null),Ue=ln=n,Fe=0,za=null,Wo=Kr=Mt=0,nn=Fa=null,Pt!==null){for(n=0;n<Pt.length;n++)if(t=Pt[n],a=t.interleaved,a!==null){t.interleaved=null;var r=a.next,o=t.pending;if(o!==null){var c=o.next;o.next=r,a.next=c}t.pending=a}Pt=null}return e}function Ec(e,n){do{var t=Ie;try{if(ho(),Dr.current=Fr,Ir){for(var a=Ae.memoizedState;a!==null;){var r=a.queue;r!==null&&(r.pending=null),a=a.next}Ir=!1}if(yt=0,Qe=ze=Ae=null,_a=!1,ja=0,qo.current=null,t===null||t.return===null){Fe=1,za=n,Ie=null;break}e:{var o=e,c=t.return,f=t,T=n;if(n=Ue,f.flags|=32768,T!==null&&typeof T=="object"&&typeof T.then=="function"){var E=T,R=f,I=R.tag;if((R.mode&1)===0&&(I===0||I===11||I===15)){var j=R.alternate;j?(R.updateQueue=j.updateQueue,R.memoizedState=j.memoizedState,R.lanes=j.lanes):(R.updateQueue=null,R.memoizedState=null)}var Y=$u(c);if(Y!==null){Y.flags&=-257,Hu(Y,c,f,o,n),Y.mode&1&&Ku(o,E,n),n=Y,T=E;var G=n.updateQueue;if(G===null){var $=new Set;$.add(T),n.updateQueue=$}else G.add(T);break e}else{if((n&1)===0){Ku(o,E,n),is();break e}T=Error(l(426))}}else if(Se&&f.mode&1){var Re=$u(c);if(Re!==null){(Re.flags&65536)===0&&(Re.flags|=256),Hu(Re,c,f,o,n),vo(Ht(T,f));break e}}o=T=Ht(T,f),Fe!==4&&(Fe=2),Fa===null?Fa=[o]:Fa.push(o),o=c;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var y=Uu(o,T,n);hu(o,y);break e;case 1:f=T;var L=o.type,M=o.stateNode;if((o.flags&128)===0&&(typeof L.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(rt===null||!rt.has(M)))){o.flags|=65536,n&=-n,o.lanes|=n;var z=Gu(o,f,n);hu(o,z);break e}}o=o.return}while(o!==null)}xc(t)}catch(q){n=q,Ie===t&&t!==null&&(Ie=t=t.return);continue}break}while(!0)}function Nc(){var e=Gr.current;return Gr.current=Fr,e===null?Fr:e}function is(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),Je===null||(Mt&268435455)===0&&(Kr&268435455)===0||st(Je,Ue)}function Xr(e,n){var t=de;de|=2;var a=Nc();(Je!==e||Ue!==n)&&(Fn=null,Nt(e,n));do try{sp();break}catch(r){Ec(e,r)}while(!0);if(ho(),de=t,Gr.current=a,Ie!==null)throw Error(l(261));return Je=null,Ue=0,Fe}function sp(){for(;Ie!==null;)Cc(Ie)}function lp(){for(;Ie!==null&&!km();)Cc(Ie)}function Cc(e){var n=bc(e.alternate,e,ln);e.memoizedProps=e.pendingProps,n===null?xc(e):Ie=n,qo.current=null}function xc(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=ep(t,n,ln),t!==null){Ie=t;return}}else{if(t=np(t,n),t!==null){t.flags&=32767,Ie=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Fe=6,Ie=null;return}}if(n=n.sibling,n!==null){Ie=n;return}Ie=n=e}while(n!==null);Fe===0&&(Fe=5)}function Ct(e,n,t){var a=he,r=pn.transition;try{pn.transition=null,he=1,up(e,n,t,a)}finally{pn.transition=r,he=a}return null}function up(e,n,t,a){do Xt();while(it!==null);if((de&6)!==0)throw Error(l(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Jm(e,o),e===Je&&(Ie=Je=null,Ue=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||Hr||(Hr=!0,Ac(ar,function(){return Xt(),null})),o=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||o){o=pn.transition,pn.transition=null;var c=he;he=1;var f=de;de|=4,qo.current=null,ap(e,t),vc(t,e),bf(ro),cr=!!ao,ro=ao=null,e.current=t,rp(t),_m(),de=f,he=c,pn.transition=o}else e.current=t;if(Hr&&(Hr=!1,it=e,qr=r),o=e.pendingLanes,o===0&&(rt=null),Dm(t.stateNode),tn(e,je()),n!==null)for(a=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],a(r.value,{componentStack:r.stack,digest:r.digest});if($r)throw $r=!1,e=Xo,Xo=null,e;return(qr&1)!==0&&e.tag!==0&&Xt(),o=e.pendingLanes,(o&1)!==0?e===es?Qa++:(Qa=0,es=e):Qa=0,et(),null}function Xt(){if(it!==null){var e=pl(qr),n=pn.transition,t=he;try{if(pn.transition=null,he=16>e?16:e,it===null)var a=!1;else{if(e=it,it=null,qr=0,(de&6)!==0)throw Error(l(331));var r=de;for(de|=4,U=e.current;U!==null;){var o=U,c=o.child;if((U.flags&16)!==0){var f=o.deletions;if(f!==null){for(var T=0;T<f.length;T++){var E=f[T];for(U=E;U!==null;){var R=U;switch(R.tag){case 0:case 11:case 15:Oa(8,R,o)}var I=R.child;if(I!==null)I.return=R,U=I;else for(;U!==null;){R=U;var j=R.sibling,Y=R.return;if(dc(R),R===E){U=null;break}if(j!==null){j.return=Y,U=j;break}U=Y}}}var G=o.alternate;if(G!==null){var $=G.child;if($!==null){G.child=null;do{var Re=$.sibling;$.sibling=null,$=Re}while($!==null)}}U=o}}if((o.subtreeFlags&2064)!==0&&c!==null)c.return=o,U=c;else e:for(;U!==null;){if(o=U,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Oa(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,U=y;break e}U=o.return}}var L=e.current;for(U=L;U!==null;){c=U;var M=c.child;if((c.subtreeFlags&2064)!==0&&M!==null)M.return=c,U=M;else e:for(c=L;U!==null;){if(f=U,(f.flags&2048)!==0)try{switch(f.tag){case 0:case 11:case 15:Ur(9,f)}}catch(q){_e(f,f.return,q)}if(f===c){U=null;break e}var z=f.sibling;if(z!==null){z.return=f.return,U=z;break e}U=f.return}}if(de=r,et(),xn&&typeof xn.onPostCommitFiberRoot=="function")try{xn.onPostCommitFiberRoot(rr,e)}catch{}a=!0}return a}finally{he=t,pn.transition=n}}return!1}function Sc(e,n,t){n=Ht(t,n),n=Uu(e,n,1),e=tt(e,n,1),n=We(),e!==null&&(da(e,1,n),tn(e,n))}function _e(e,n,t){if(e.tag===3)Sc(e,e,t);else for(;n!==null;){if(n.tag===3){Sc(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(rt===null||!rt.has(a))){e=Ht(t,e),e=Gu(n,e,1),n=tt(n,e,1),e=We(),n!==null&&(da(n,1,e),tn(n,e));break}}n=n.return}}function cp(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),n=We(),e.pingedLanes|=e.suspendedLanes&t,Je===e&&(Ue&t)===t&&(Fe===4||Fe===3&&(Ue&130023424)===Ue&&500>je()-Zo?Nt(e,0):Wo|=t),tn(e,n)}function Vc(e,n){n===0&&((e.mode&1)===0?n=1:(n=or,or<<=1,(or&130023424)===0&&(or=4194304)));var t=We();e=In(e,n),e!==null&&(da(e,n,t),tn(e,t))}function dp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Vc(e,t)}function mp(e,n){var t=0;switch(e.tag){case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(l(314))}a!==null&&a.delete(n),Vc(e,t)}var bc;bc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ze.current)en=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return en=!1,Xf(e,n,t);en=(e.flags&131072)!==0}else en=!1,Se&&(n.flags&1048576)!==0&&lu(n,Vr,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;Br(e,n),e=n.pendingProps;var r=Qt(n,Ge.current);Kt(n,t),r=bo(null,n,a,e,r,t);var o=Ao();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Xe(a)?(o=!0,Cr(n)):o=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Mo(n),r.updater=Qr,n.stateNode=r,r._reactInternals=n,Do(n,a,e,t),n=Fo(null,n,a,!0,o,t)):(n.tag=0,Se&&o&&mo(n),qe(null,n,r,t),n=n.child),n;case 16:a=n.elementType;e:{switch(Br(e,n),e=n.pendingProps,r=a._init,a=r(a._payload),n.type=a,r=n.tag=pp(a),e=yn(a,e),r){case 0:n=zo(null,n,a,e,t);break e;case 1:n=nc(null,n,a,e,t);break e;case 11:n=qu(null,n,a,e,t);break e;case 14:n=Wu(null,n,a,yn(a.type,e),t);break e}throw Error(l(306,a,""))}return n;case 0:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:yn(a,r),zo(e,n,a,r,t);case 1:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:yn(a,r),nc(e,n,a,r,t);case 3:e:{if(tc(n),e===null)throw Error(l(387));a=n.pendingProps,o=n.memoizedState,r=o.element,Lu(e,n),jr(n,a,null,t);var c=n.memoizedState;if(a=c.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){r=Ht(Error(l(423)),n),n=ac(e,n,a,t,r);break e}else if(a!==r){r=Ht(Error(l(424)),n),n=ac(e,n,a,t,r);break e}else for(sn=Wn(n.stateNode.containerInfo.firstChild),on=n,Se=!0,gn=null,t=Tu(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Yt(),a===r){n=zn(e,n,t);break e}qe(e,n,a,t)}n=n.child}return n;case 5:return gu(n),e===null&&To(n),a=n.type,r=n.pendingProps,o=e!==null?e.memoizedProps:null,c=r.children,io(a,r)?c=null:o!==null&&io(a,o)&&(n.flags|=32),ec(e,n),qe(e,n,c,t),n.child;case 6:return e===null&&To(n),null;case 13:return rc(e,n,t);case 4:return Eo(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=Ut(n,null,a,t):qe(e,n,a,t),n.child;case 11:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:yn(a,r),qu(e,n,a,r,t);case 7:return qe(e,n,n.pendingProps,t),n.child;case 8:return qe(e,n,n.pendingProps.children,t),n.child;case 12:return qe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(a=n.type._context,r=n.pendingProps,o=n.memoizedProps,c=r.value,ge(wr,a._currentValue),a._currentValue=c,o!==null)if(Pn(o.value,c)){if(o.children===r.children&&!Ze.current){n=zn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var f=o.dependencies;if(f!==null){c=o.child;for(var T=f.firstContext;T!==null;){if(T.context===a){if(o.tag===1){T=On(-1,t&-t),T.tag=2;var E=o.updateQueue;if(E!==null){E=E.shared;var R=E.pending;R===null?T.next=T:(T.next=R.next,R.next=T),E.pending=T}}o.lanes|=t,T=o.alternate,T!==null&&(T.lanes|=t),go(o.return,t,n),f.lanes|=t;break}T=T.next}}else if(o.tag===10)c=o.type===n.type?null:o.child;else if(o.tag===18){if(c=o.return,c===null)throw Error(l(341));c.lanes|=t,f=c.alternate,f!==null&&(f.lanes|=t),go(c,t,n),c=o.sibling}else c=o.child;if(c!==null)c.return=o;else for(c=o;c!==null;){if(c===n){c=null;break}if(o=c.sibling,o!==null){o.return=c.return,c=o;break}c=c.return}o=c}qe(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,a=n.pendingProps.children,Kt(n,t),r=mn(r),a=a(r),n.flags|=1,qe(e,n,a,t),n.child;case 14:return a=n.type,r=yn(a,n.pendingProps),r=yn(a.type,r),Wu(e,n,a,r,t);case 15:return Zu(e,n,n.type,n.pendingProps,t);case 17:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:yn(a,r),Br(e,n),n.tag=1,Xe(a)?(e=!0,Cr(n)):e=!1,Kt(n,t),Bu(n,a,r),Do(n,a,r,t),Fo(null,n,a,!0,e,t);case 19:return oc(e,n,t);case 22:return Xu(e,n,t)}throw Error(l(156,n.tag))};function Ac(e,n){return ul(e,n)}function fp(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(e,n,t,a){return new fp(e,n,t,a)}function os(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pp(e){if(typeof e=="function")return os(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pe)return 11;if(e===De)return 14}return 2}function lt(e,n){var t=e.alternate;return t===null?(t=Tn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ei(e,n,t,a,r,o){var c=2;if(a=e,typeof e=="function")os(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case fe:return xt(t.children,r,o,n);case pe:c=8,r|=8;break;case xe:return e=Tn(12,t,n,r|2),e.elementType=xe,e.lanes=o,e;case Te:return e=Tn(13,t,n,r),e.elementType=Te,e.lanes=o,e;case we:return e=Tn(19,t,n,r),e.elementType=we,e.lanes=o,e;case Le:return ni(t,r,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ye:c=10;break e;case Ve:c=9;break e;case Pe:c=11;break e;case De:c=14;break e;case ke:c=16,a=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return n=Tn(c,t,n,r),n.elementType=e,n.type=a,n.lanes=o,n}function xt(e,n,t,a){return e=Tn(7,e,a,n),e.lanes=t,e}function ni(e,n,t,a){return e=Tn(22,e,a,n),e.elementType=Le,e.lanes=t,e.stateNode={isHidden:!1},e}function ss(e,n,t){return e=Tn(6,e,null,n),e.lanes=t,e}function ls(e,n,t){return n=Tn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Tp(e,n,t,a,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ji(0),this.expirationTimes=ji(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ji(0),this.identifierPrefix=a,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function us(e,n,t,a,r,o,c,f,T){return e=new Tp(e,n,t,f,T),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Tn(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:a,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mo(o),e}function vp(e,n,t){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:se,key:a==null?null:""+a,children:e,containerInfo:n,implementation:t}}function wc(e){if(!e)return Xn;e=e._reactInternals;e:{if(pt(e)!==e||e.tag!==1)throw Error(l(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Xe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(l(171))}if(e.tag===1){var t=e.type;if(Xe(t))return iu(e,t,n)}return n}function kc(e,n,t,a,r,o,c,f,T){return e=us(t,a,!0,e,r,o,c,f,T),e.context=wc(null),t=e.current,a=We(),r=ot(t),o=On(a,r),o.callback=n??null,tt(t,o,r),e.current.lanes=r,da(e,r,a),tn(e,a),e}function ti(e,n,t,a){var r=n.current,o=We(),c=ot(r);return t=wc(t),n.context===null?n.context=t:n.pendingContext=t,n=On(o,c),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=tt(r,n,c),e!==null&&(Nn(e,r,c,o),_r(e,r,c)),c}function ai(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _c(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function cs(e,n){_c(e,n),(e=e.alternate)&&_c(e,n)}function Lp(){return null}var jc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ds(e){this._internalRoot=e}ri.prototype.render=ds.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(l(409));ti(e,n,null,null)},ri.prototype.unmount=ds.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Et(function(){ti(null,e,null,null)}),n[_n]=null}};function ri(e){this._internalRoot=e}ri.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ll();e={blockedOn:null,target:e,priority:n};for(var t=0;t<$n.length&&n!==0&&n<$n[t].priority;t++);$n.splice(t,0,e),t===0&&gl(e)}};function ms(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ii(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Rc(){}function hp(e,n,t,a,r){if(r){if(typeof a=="function"){var o=a;a=function(){var E=ai(c);o.call(E)}}var c=kc(n,a,e,0,null,!1,!1,"",Rc);return e._reactRootContainer=c,e[_n]=c.current,Ca(e.nodeType===8?e.parentNode:e),Et(),c}for(;r=e.lastChild;)e.removeChild(r);if(typeof a=="function"){var f=a;a=function(){var E=ai(T);f.call(E)}}var T=us(e,0,!1,null,null,!1,!1,"",Rc);return e._reactRootContainer=T,e[_n]=T.current,Ca(e.nodeType===8?e.parentNode:e),Et(function(){ti(n,T,t,a)}),T}function oi(e,n,t,a,r){var o=t._reactRootContainer;if(o){var c=o;if(typeof r=="function"){var f=r;r=function(){var T=ai(c);f.call(T)}}ti(n,c,e,r)}else c=hp(t,n,e,r,a);return ai(c)}Tl=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=ca(n.pendingLanes);t!==0&&(Ri(n,t|1),tn(n,je()),(de&6)===0&&(Zt=je()+500,et()))}break;case 13:Et(function(){var a=In(e,1);if(a!==null){var r=We();Nn(a,e,1,r)}}),cs(e,1)}},Di=function(e){if(e.tag===13){var n=In(e,134217728);if(n!==null){var t=We();Nn(n,e,134217728,t)}cs(e,134217728)}},vl=function(e){if(e.tag===13){var n=ot(e),t=In(e,n);if(t!==null){var a=We();Nn(t,e,n,a)}cs(e,n)}},Ll=function(){return he},hl=function(e,n){var t=he;try{return he=e,n()}finally{he=t}},Vi=function(e,n,t){switch(n){case"input":if(gi(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var r=Er(a);if(!r)throw Error(l(90));ve(a),gi(a,r)}}}break;case"textarea":Ks(e,t);break;case"select":n=t.value,n!=null&&bt(e,!!t.multiple,n,!1)}},tl=as,al=Et;var Pp={usingClientEntryPoint:!1,Events:[Va,zt,Er,el,nl,as]},Ja={findFiberByHostInstance:Tt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gp={bundleType:Ja.bundleType,version:Ja.version,rendererPackageName:Ja.rendererPackageName,rendererConfig:Ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:H.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=sl(e),e===null?null:e.stateNode},findFiberByHostInstance:Ja.findFiberByHostInstance||Lp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var si=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!si.isDisabled&&si.supportsFiber)try{rr=si.inject(gp),xn=si}catch{}}return an.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pp,an.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ms(n))throw Error(l(200));return vp(e,n,null,t)},an.createRoot=function(e,n){if(!ms(e))throw Error(l(299));var t=!1,a="",r=jc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=us(e,1,!1,null,null,t,!1,a,r),e[_n]=n.current,Ca(e.nodeType===8?e.parentNode:e),new ds(n)},an.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=sl(n),e=e===null?null:e.stateNode,e},an.flushSync=function(e){return Et(e)},an.hydrate=function(e,n,t){if(!ii(n))throw Error(l(200));return oi(null,e,n,!0,t)},an.hydrateRoot=function(e,n,t){if(!ms(e))throw Error(l(405));var a=t!=null&&t.hydratedSources||null,r=!1,o="",c=jc;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),n=kc(n,null,e,1,t??null,r,!1,o,c),e[_n]=n.current,Ca(e),a)for(e=0;e<a.length;e++)t=a[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new ri(n)},an.render=function(e,n,t){if(!ii(n))throw Error(l(200));return oi(null,e,n,!1,t)},an.unmountComponentAtNode=function(e){if(!ii(e))throw Error(l(40));return e._reactRootContainer?(Et(function(){oi(null,null,e,!1,function(){e._reactRootContainer=null,e[_n]=null})}),!0):!1},an.unstable_batchedUpdates=as,an.unstable_renderSubtreeIntoContainer=function(e,n,t,a){if(!ii(t))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return oi(e,n,t,!1,a)},an.version="18.3.1-next-f1338f8080-20240426",an}var Bc;function Ld(){if(Bc)return Ts.exports;Bc=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(s){console.error(s)}}return i(),Ts.exports=Ap(),Ts.exports}var Yc;function wp(){if(Yc)return ui;Yc=1;var i=Ld();return ui.createRoot=i.createRoot,ui.hydrateRoot=i.hydrateRoot,ui}var kp=wp();const _p=vd(kp),jp="modulepreload",Rp=function(i){return"/BTMM_JORNADAS/"+i},Uc={},vn=function(s,l,d){let m=Promise.resolve();if(l&&l.length>0){let h=function(A){return Promise.all(A.map(D=>Promise.resolve(D).then(N=>({status:"fulfilled",value:N}),N=>({status:"rejected",reason:N}))))};document.getElementsByTagName("link");const g=document.querySelector("meta[property=csp-nonce]"),v=(g==null?void 0:g.nonce)||(g==null?void 0:g.getAttribute("nonce"));m=h(l.map(A=>{if(A=Rp(A),A in Uc)return;Uc[A]=!0;const D=A.endsWith(".css"),N=D?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${A}"]${N}`))return;const x=document.createElement("link");if(x.rel=D?"stylesheet":jp,D||(x.as="script"),x.crossOrigin="",x.href=A,v&&x.setAttribute("nonce",v),document.head.appendChild(x),D)return new Promise((V,F)=>{x.addEventListener("load",V),x.addEventListener("error",()=>F(new Error(`Unable to preload CSS for ${A}`)))})}))}function p(h){const g=new Event("vite:preloadError",{cancelable:!0});if(g.payload=h,window.dispatchEvent(g),!g.defaultPrevented)throw h}return m.then(h=>{for(const g of h||[])g.status==="rejected"&&p(g.reason);return s().catch(p)})},Rs=[{nombre:"Puesto Orosi",tag:"OR",color:"bg-orange-100 text-orange-950",funcionarios:["Errol Salazar","Mayra Espinoza","Yeison Cortés","Kenneth Mena","Fabricio Carbonell","Monserrath Navarro"]},{nombre:"Puesto Quetzales",tag:"QZ",color:"bg-orange-700 text-white",funcionarios:["Juan Pablo Granados","Karen Valle","Josué Brenes","Laura Valverde","Diana Tencio","Jetzelly Villalobos","Pablo Sánchez"]},{nombre:"Puesto Esperanza",tag:"LE",color:"bg-sky-100 text-sky-950",funcionarios:["Yolanda Elizondo","Mariano Solís","Guillermo Pérez","Carlos Cordero","Alexander Alvarado"]}],ta=Rs.map(i=>i.nombre),fi=Rs.flatMap((i,s)=>i.funcionarios.map((l,d)=>{const m=s*10+d+1,p=l==="Pablo Sánchez",h=l==="Yolanda Elizondo",g=l==="Carlos Cordero",v=["Yeison Cortés","Jetzelly Villalobos","Guillermo Pérez"].includes(l),A=l==="Fabricio Carbonell"?"De vacaciones":l==="Guillermo Pérez"?"Incapacitado":"Activo";return{id:`f${m}`,nombre:l,cedula:`1-0000-${String(m).padStart(4,"0")}`,email:p?"psforestal@yahoo.com":`${l.toLowerCase().replaceAll(" ",".")}@sinac.go.cr`,puesto:p?"Técnico en Recursos Naturales":h?"Asistente Administrativo":g?"Personal Apoyo ONG-Invest-Volunt":"Guardaparques",condicion:g?"ONG-Invest-Volunt":m%5===0?"Interino":"Propiedad",jornada:p||h?"Ordinaria":"Acumulativa",modalidad:p||h?"Horario administrativo L-V":m%7===0?"16x8":m%4===0?"12x6":"10x5",resolucion:v?"":g?"CONV-ONG-INV-VOL-2026":p||h?"":`RES-ACC-${String(m).padStart(3,"0")}-2026`,disponibilidad:!p&&!h&&!g&&m%3!==0,contrato:!p&&!h&&!g&&m%3!==0?`DISP-2026-${String(m).padStart(3,"0")}`:"",vencimiento:m%5===0?"2026-05-30":m%4===0?"2026-06-30":m%3!==0?"2026-12-31":"",policia:!p&&!h&&!g&&!v,brigada:m%4===2,ong:g,jefe:"Administración PNLQ",estado:A,ingreso:"2026-01-01",puestoOperativo:i.nombre,obs:`${i.nombre}${v?" · Dato pendiente: resolución acumulativa":""}`}})),hd=[],Dp=[{id:"rep1",folio:"REP-001",funcionario:"Errol Salazar",fecha:"2026-05-24",tipoDia:"Día libre",motivo:"Incendio forestal",motivoDetalle:"Apoyo en control de conato sector Orosi.",magnitud:"diaEntero",horas:0,cuotas:[{id:"rep1-c1",fecha:"2026-05-31",magnitud:"medioDia",horas:0}],observaciones:"Llamado por la administración fuera de rol."},{id:"rep2",folio:"REP-002",funcionario:"Juan Pablo Granados",fecha:"2026-05-17",tipoDia:"Feriado",motivo:"Atención de denuncia",motivoDetalle:"Inspección por tala reportada en ingreso Quetzales.",magnitud:"horas",horas:4,cuotas:[],observaciones:""},{id:"rep3",folio:"REP-003",funcionario:"Mariano Solís",fecha:"2026-04-19",tipoDia:"Fuera de turno",motivo:"Actividad especial",motivoDetalle:"Atención de gira institucional.",magnitud:"medioDia",horas:0,cuotas:[{id:"rep3-c1",fecha:"2026-05-06",magnitud:"medioDia",horas:0}],observaciones:"Tiempo repuesto en coordinación con la administración."}],Ip={1:{"Alexander Alvarado":"O-F LI LI LI LI LI LI V13 V14 V15 V16 V17 V18 V19 V20 L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 V1 V2 V3 V4 V5 V6","Carlos Cordero":"O-F T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1","Diana Tencio":"O-F T4 L1 L2 T1 T2 T3 T4 T5 L1 L2 LA T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 LA L1 L2 T1 T2 T3 T4 T5 L1","Errol Salazar":"O-F T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6","Fabricio Carbonell":"O-F O-FA T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 L1","Guillermo Pérez":"L4 L5 L6 O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 T13 T14 L1 L2 L3 L4 L5 L6 L7 T1 T2 T3 T4 T5 T6","Jetzelly Villalobos":"L1 L2 L3 L4 O-FA O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 T13 T14 L1 L2 L3 L4 L5 L6 L7 V1 V2 L1 LA","Josué Brenes":"L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA O-FA","Karen Valle":"O-F T4 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1","Kenneth Mena":"L3 L4 L5 L6 T1 O-FA T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 L1 L2 IN IN","Laura Valverde":"O-F V7 V8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6","Mariano Solís":"O-F T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA V1 V2 V3 V4 LA LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4","Mayra Espinoza":"L3 L4 L5 O-FA LA LA LA LA LA LA LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2","Yeison Cortés":"O-F T5 T6 T7 T8 L1 L2 L3 L4 V1 V2 L1 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4","Yolanda Elizondo":"O-F V4 V5 V6 V7 V8 V9 V10 V11 V12 V13 V14 V15 V16 L1 L2 L3 L4 L5 L6 L7 L8 O-FA T1 T2 T3 T4 T5 T6 T7 T8"},2:{"Alexander Alvarado":"V7 V8 V9 V10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4","Carlos Cordero":"T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1","Diana Tencio":"L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 LA V1 V2 V3 L1 L2 T1 T2 T3 T4 T5 L1","Errol Salazar":"LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 LA T1 T2 T3 T4 T5 T6 T7 T8","Fabricio Carbonell":"T6 T7 T8 T9 T10 T11 L2 L3 T1 T2 T3 T4 T5 T6 T7 T8 T9 L4 L5 L1 L2 L3 L4 L5 T1 T2 T3 T4","Guillermo Pérez":"T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 L1 L2 L3 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Jetzelly Villalobos":"V1 V2 V3 V4 V5 L1 L2 L3 T1 T2 T3 T4 T5 T6 L1 L2 L3 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11","Josué Brenes":"V1 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 L1 L2 V1 V2 V3 V4 L1 L2","Karen Valle":"L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1","Kenneth Mena":"IN IN IN IN IN IN IN IN IN IN IN IN L3 L4 L5 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 V11 V12 V13","Laura Valverde":"T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4","Mariano Solís":"L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 V11 V12 V13 V14 V15","Mayra Espinoza":"T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11","Yeison Cortés":"T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 V1 V2 V3 V4 L1 L2 IN IN T1 T2 T3 T4 T5 T6 T7 T8 L1","Yolanda Elizondo":"T9 T10 L1 L2 L3 L4 L5 V1 V2 V3 V4 V5 V6 L1 L2 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3"},3:{"Alexander Alvarado":"T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 · · · · · · · · · · · · · · · · · · · ·","Carlos Cordero":"L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 V1 V2 L1 T1 T2 T3 T4 T5 T6 T7 T8","Diana Tencio":"L2 LA LA LA T4 T5 L1 L2 T1 T2 T3 LA T5 L1 L2 O-G O-G O-G O-G O-G O-G O-G O-G O-G O-G O-G O-G L1 L2 T1 T2","Errol Salazar":"T9 T10 L1 L2 L3 L4 L5 LA LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 LA T2 T3 T4 T5 T6 T7","Fabricio Carbonell":"T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5","Guillermo Pérez":"T11 T12 L1 L2 L3 L4 L5 L6 V1 V2 V3 V4 V5 L1 L2 V1 V2 V3 V4 V5 V6 V7 L1 L2 L3 L4 IN IN IN IN IN","Jetzelly Villalobos":"T12 L1 L2 L3 L4 L5 L6 LA LA V1 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6","Josué Brenes":"LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5","Karen Valle":"L2 T1 T2 T3 T4 T5 L1 L2 IN T2 T3 T4 T5 L1 L2 T1 LA LA T4 T5 L1 L2 T1 T2 T3 V1 T5 L1 L2 T1 T2","Kenneth Mena":"V14 V15 L1 L2 L3 IN IN IN IN IN IN IN V1 V2 V3 V4 L1 L2 IN IN IN IN IN IN IN IN IN IN IN IN IN","Laura Valverde":"L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11","Mariano Solís":"V16 L1 L2 L3 L4 L5 L6 L7 L8 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Mayra Espinoza":"T12 T13 T14 T15 T16 T17 L1 L2 L3 L4 L5 L6 L7 L8 L9 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1","Yeison Cortés":"L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 T1","Yolanda Elizondo":"L4 L5 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 L1 L2 L3 L4 L5 IN IN IN IN IN IN IN IN IN IN T1 T2 T3 T4"},4:{"Carlos Cordero":"T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5","Diana Tencio":"LA O-F O-F L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4","Errol Salazar":"T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 LA T1 T2 T3 T4 T5 T6 T7 T8 T9","Fabricio Carbonell":"T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 V1 V2 V3 V4 V5 V6 V7 V8","Guillermo Pérez":"IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN T1 T2 T3 T4","Jetzelly Villalobos":"T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3","Josué Brenes":"T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 V1 V2 V3 V4 L1 L2 LA T2 T3 T4 T5 T6 T7 T8 T9","Karen Valle":"T3 O-F O-F L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4","Kenneth Mena":"IN V1 V2 V3 L1 IN IN IN IN IN IN IN IN IN IN IN IN IN IN V1 V2 L1 L L L L L L L L","Laura Valverde":"T12 T13 T14 L1 L2 L3 L4 L5 L6 L7 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 T1 T2 T3","Mariano Solís":"L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Mayra Espinoza":"T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA O-FA V1 V2 V3 L1 L2 T1 T2 T3 T4 T5 T6 T7 T8 L","Yeison Cortés":"L2 L3 L4 L5 L6 T2 L1 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 IN IN IN T3 T4 T5 T6 T7","Yolanda Elizondo":"T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2"},5:{"Carlos Cordero":"T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 O-FA V1 V2 V3 V4 V5 V6 V7 V8","Diana Tencio":"T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2","Errol Salazar":"T10 T11 T12 L1 L2 L3 L4 L5 L6 LA LA O-FA O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3","Fabricio Carbonell":"V9 V10 V11 V12 V13 V14 V15 V16 V17 V18 V19 V20 L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 O-FA O-FA O-FA O-FA O-FA T1 T2 T3 T4","Guillermo Pérez":"IN IN IN IN IN IN IN IN IN IN IN IN IN IN T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5","Jetzelly Villalobos":"T4 T5 T6 L1 L2 L3 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 LA LA LA LA LA V1 V2","Josué Brenes":"T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 LA L1 L2 L3 L4 LA","Juan Pablo Granados":"T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3","Karen Valle":"T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2","Kenneth Mena":"L L L L L L L L L L L L L L L L L L L L L L L V1 V2 V3 V4 V5 V6 L1 L2","Laura Valverde":"T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4","Mariano Solís":"L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1","Mayra Espinoza":"L1 L2 L3 L4 LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8","Pablo Sánchez":"T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 V1 V2 V3 V4 V5 L1 L2 T1 T2 T3 T4 T5 L1 L2","Yeison Cortés":"O-FA L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 LA T4 T5 T6 T7 T8 L1 L2 L3","Yolanda Elizondo":"T3 T4 T5 T6 T7 T8 T9 LA L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3"},6:{"Carlos Cordero":"V9 V10 V11 V12 V13 V14 V15 V16 V17 V18 V19 V20 L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 O-FA V1 V2 V3 V4 V5 V6 V7","Diana Tencio":"T1 T2 T3 LA T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2","Errol Salazar":"T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5","Fabricio Carbonell":"T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 L1 T10 L2 L3 T1 L4 L5 T2 T3 T4 T5 T6 T7","Guillermo Pérez":"T6 L1 L2 L3 LA V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Jetzelly Villalobos":"V3 V4 L1 L2 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8","Josué Brenes":"LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 L1 L2 L3 T1 T2 L4 L5 L6 L1 · · · · · · · · ·","Juan Pablo Granados":"L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3","Karen Valle":"T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 LA T5 L2 T1 T2 T3 T4 LA L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2","Kenneth Mena":"L3 T1 T2 T3 T4 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2","Laura Valverde":"T5 T6 T7 T8 L1 L2 L3 L4 O-FA O-FA O-FA O-FA LA V1 V2 V3 V4 V5 V6 V7 V8 L1 L2 L3 L4 V1 V2 V3 V4 L1","Mariano Solís":"L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 LA T2 T3 T4 T5 T6 T7 T8 T9 T10 L1","Mayra Espinoza":"T9 T10 T11 T12 T13 T14 L1 L2 L3 L4 L5 L6 L7 LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1","Pablo Sánchez":"T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 V1 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2","Yeison Cortés":"L4 LA T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2","Yolanda Elizondo":"T4 T5 T6 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1"},7:{"Carlos Cordero":"V8 L1 L2 L3 L4 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 V11 V12 V13 V14 L1 L2 L3 L4 L5 L6 L7 T1 T2 T3 T4 T5","Diana Tencio":"T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5","Errol Salazar":"T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1","Fabricio Carbonell":"T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8","Guillermo Pérez":"L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8","Jetzelly Villalobos":"T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6","Juan Pablo Granados":"L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 L1 L2 L3 L4 · · · · · · · · · · · · · · · ·","Karen Valle":"T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5","Kenneth Mena":"T3 T4 LA L1 L2 V1 V2 V3 V4 V5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5","Laura Valverde":"L2 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 T13 T14 L1 L2 L3 L4 L5 L6 L7 T1 T2 T3 T4 T5 T6 T7 T8 L1","Mariano Solís":"L2 L3 L4 L5 LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1","Mayra Espinoza":"T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5","Monserrath Navarro":"· · · · · · · · · · · · · · T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5","Pablo Sánchez":"T3 T4 T5 L1 L2 V1 V2 V3 V4 V5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5","Yeison Cortés":"T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5","Yolanda Elizondo":"T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2"},8:{"Carlos Cordero":"T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T5","Diana Tencio":"L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1","Errol Salazar":"T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5","Fabricio Carbonell":"L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2","Guillermo Pérez":"T6 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T10","Jetzelly Villalobos":"T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7","Karen Valle":"L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1","Laura Valverde":"L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3","Mariano Solís":"L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2","Mayra Espinoza":"L6 LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4","Monserrath Navarro":"T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6","Pablo Sánchez":"L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1","Yeison Cortés":"L4 LA T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1","Yolanda Elizondo":"T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5"}},Op=[31,28,31,30,31,30,31,31,30,31,30,31],Pd=(()=>{var s;const i={};for(let l=1;l<=12;l+=1){const d=Ip[l]||{};for(const m of Rs)for(const p of m.funcionarios){const h=((s=d[p])==null?void 0:s.split(" "))||[];for(let g=1;g<=Op[l-1];g+=1){const v=h[g-1];i[`2026-${l}-${m.nombre}-${p}-${g}`]=v&&v!=="·"?v:""}}}return i})(),kn=1,Ka="current",zp="pnlq:state";let hs=null,Ya=null,Gc=Promise.resolve();function Ds(i){const s=Gc.then(i,i);return Gc=s.catch(()=>{}),s}async function aa(){return hs||(typeof indexedDB>"u"?null:Ya||(Ya=(async()=>{try{const{default:i}=await vn(async()=>{const{default:l}=await import("./import-wrapper-prod-Dlk28cab.js");return{default:l}},[]),s=new i("pnlq");return s.version(1).stores({state:"id",auditoria:"++id, fecha, accion",pendientes:"++id, creadoEn, tipo"}),hs=s,s}catch{return null}finally{Ya=null}})(),Ya))}async function Fp(){const i=await aa();if(!i)return null;try{const s=await i.state.get(Ka);return!s||s.schemaVersion!==kn?null:{state:s.payload??null,revision:s.revision??0,savedAt:s.savedAt??null}}catch{return null}}async function Qp(i,s=0){const l=await aa();return l?Ds(async()=>{try{return await l.state.put({id:Ka,schemaVersion:kn,savedAt:new Date().toISOString(),revision:s,payload:i}),!0}catch{return!1}}):!1}async function Jp(){const i=await aa();return i?Ds(async()=>{try{return await i.state.delete(Ka),!0}catch{return!1}}):!1}async function Bp(){const i=await aa();if(!i)return{migrated:!1,source:null};try{if(await i.state.get(Ka))return{migrated:!1,source:null};if(typeof window>"u"||!window.localStorage)return{migrated:!1,source:null};const l=window.localStorage.getItem(zp);if(!l)return{migrated:!1,source:null};const d=JSON.parse(l);return d!=null&&d.state?d.schemaVersion!==kn?{migrated:!1,source:null}:(await i.state.put({id:Ka,schemaVersion:kn,savedAt:d.savedAt||new Date().toISOString(),revision:d.revision??0,payload:d.state,migradoDeLocalStorage:!0}),{migrated:!0,source:"localStorage"}):{migrated:!1,source:null}}catch{return{migrated:!1,source:null}}}async function Yp(){const i=await aa();return i?Ds(async()=>{try{return await Promise.all([i.state.clear(),i.pendientes.clear(),i.auditoria.clear()]),!0}catch{return!1}}):!1}const Is=Object.freeze({puestosRequierenVisitantesDiario:["Puesto Orosi","Puesto Quetzales"],diaCorteViaticos:15,mesObjetivoViaticos:"siguiente",permitirConsultaDespuesCierre:!0,aplicarFeriadosEnPrimerDiaLaboral:!0,alertaInactivoConActividad:!0,alertaIncapacitadoConActividad:!0,alertaAcumulativaSinModalidad:!0,alertaReposicionPendiente:!0,horasJornada:8}),Kc=["siguiente","actual"];function pi(i={}){return{...Is,...i}}function Ov(i){const s=[];if(!Array.isArray(i.puestosRequierenVisitantesDiario))s.push("La lista de puestos con Visit. diario debe ser un arreglo.");else{const m=i.puestosRequierenVisitantesDiario.filter(p=>!ta.includes(p));m.length&&s.push(`Puesto(s) no reconocido(s) en la lista de Visit. diaria: ${m.join(", ")}`)}const l=Number(i.diaCorteViaticos);(!Number.isInteger(l)||l<1||l>28)&&s.push("Día de corte de viáticos debe ser un entero entre 1 y 28."),Kc.includes(i.mesObjetivoViaticos)||s.push(`mesObjetivoViaticos debe ser uno de: ${Kc.join(", ")}.`);const d=Number(i.horasJornada);return(!Number.isFinite(d)||d<1||d>24)&&s.push("Horas por jornada debe ser un número entre 1 y 24."),s}const Ln=8,Ps=["Día libre","Fuera de turno","Feriado","Vacaciones interrumpidas","Otro"],gs=["Emergencia","Incendio forestal","Atención de denuncia","Actividad especial","Operativo de control","Otro"],gd=["diaEntero","medioDia","horas"];function qa(i){return Math.round((Number(i)||0)*100)/100}function yd(i,s,l=Ln){return i==="diaEntero"?l:i==="medioDia"?l/2:Number(s)||0}function Os(i){return Array.isArray(i==null?void 0:i.cuotas)?i.cuotas:(i==null?void 0:i.estado)==="Repuesto"?[{id:`i-${i.id||"x"}`,fecha:i.fechaReposicion||i.fecha,magnitud:i.magnitud,horas:i.horas||0}]:[]}function Up(i,s=Ln){return qa(yd(i==null?void 0:i.magnitud,i==null?void 0:i.horas,s))}function Md(i,s=Ln){return qa(Os(i).reduce((l,d)=>l+yd(d.magnitud,d.horas,s),0))}function Wa(i,s=Ln){return qa(Math.max(0,Up(i,s)-Md(i,s)))}function Ed(i,s=Ln){return Md(i,s)<=0?"Pendiente":Wa(i,s)<=0?"Repuesto":"Parcial"}function Gp(i){const s=String(i||"").match(/(\d+)/);return s?Number(s[1]):null}function Kp(i=[]){const s=i.reduce((l,d)=>Math.max(l,Gp(d.folio)||0),0);return`REP-${String(s+1).padStart(3,"0")}`}function $p(i=[],s=Ln){const l={},d={};for(const m of i)if(m.funcionario&&m.fecha&&(l[`${m.funcionario}|${m.fecha}`]={...m,estadoCalc:Ed(m,s),saldo:Wa(m,s)}),m.funcionario)for(const p of Os(m))p.fecha&&(d[`${m.funcionario}|${p.fecha}`]={...m,cuota:p});return{trabajadas:l,reposiciones:d}}function Hp(i=[],s=Ln){let l=0,d=0,m=0,p=0;for(const h of i){const g=Ed(h,s);p+=Wa(h,s),g==="Repuesto"?m+=1:(l+=1,g==="Parcial"&&(d+=1))}return{total:i.length,pendientes:l,parciales:d,repuestos:m,saldoHoras:qa(p)}}function qp(i=[]){return[...i].sort((s,l)=>String(l.fecha||"").localeCompare(String(s.fecha||"")))}function Wp(i=[],s,l=Ln){return qa(i.filter(d=>d.funcionario===s).reduce((d,m)=>d+Wa(m,l),0))}function Zp(i=[],s,l=Ln){return i.filter(d=>d.funcionario===s&&Wa(d,l)>0).sort((d,m)=>String(d.fecha||"").localeCompare(String(m.fecha||"")))}function Xp(i){return i==="L"?"Día libre":i==="V"?"Vacaciones interrumpidas":"Fuera de turno"}function eT({reposiciones:i=[],funcionario:s,fecha:l,categoria:d,motivo:m="Actividad especial",detalle:p=""}){return{id:`rep${Date.now()}`,folio:Kp(i),funcionario:s,fecha:l,tipoDia:Xp(d),motivo:m,motivoDetalle:p,magnitud:"diaEntero",horas:0,cuotas:[],observaciones:""}}function nT(i=[],s,l,d=Ln){const m=Zp(i,s,d)[0];return m?i.map(p=>p.id===m.id?{...p,cuotas:[...Os(p),l]}:p):i}function tT(i=[],s=Ln){const l=new Map;for(const m of i){const p=m.funcionario||"—";l.has(p)||l.set(p,[]),l.get(p).push(m)}const d=[];for(const[m,p]of l.entries())d.push({funcionario:m,registros:qp(p),...Hp(p,s)});return d.sort((m,p)=>p.saldoHoras-m.saldoHoras||p.total-m.total||m.funcionario.localeCompare(p.funcionario)),d}const $c=["Activo","Incapacitado","De vacaciones","Inactivo"],aT=1e3,rT=2e4,iT=2e4,oT=3e5,sT=200,lT=new Map(fi.map(i=>[i.id,i]));function Jn(i){return!!i&&typeof i=="object"&&!Array.isArray(i)}function uT(i){return i.replace(/<[^>]*>/g,"")}function Cn(i,s,l){return typeof i!="string"?l:uT(i).trim().slice(0,s)}function ys(i,s,l,d){if(typeof i!="string")return d;const m=i.trim().slice(0,s);return l.test(m)?m:d}function cT(i,s){return typeof i=="boolean"?i:s}function Nd(i,s,{min:l=0,max:d=1e4}={}){const m=Number(i);return Number.isFinite(m)?Math.min(d,Math.max(l,m)):s}function $a(i,s){if(typeof i!="string")return s;const l=i.trim().match(/^(\d{4})-(\d{2})-(\d{2})$/);if(!l)return s;const d=Number(l[1]);if(d<2e3||d>2100)return s;const m=Number(l[2]),p=Number(l[3]);return m<1||m>12||p<1||p>31?s:l[0]}function dT(i){if(!Jn(i))return i;const s=typeof i.id=="string"?lT.get(i.id):void 0,l={...i};"id"in l&&(l.id=ys(l.id,20,/^[A-Za-z0-9-]+$/,"")),"nombre"in l&&(l.nombre=Cn(l.nombre,120,(s==null?void 0:s.nombre)??"")),"cedula"in l&&(l.cedula=ys(l.cedula,20,/^[0-9-]+$/,(s==null?void 0:s.cedula)??"")),"email"in l&&(l.email=ys(l.email,120,/^[^\s@]+@[^\s@]+\.[^\s@]+$/,(s==null?void 0:s.email)??""));for(const d of["puesto","puestoOperativo","condicion","jornada","modalidad"])d in l&&(l[d]=Cn(l[d],80,(s==null?void 0:s[d])??""));if("obs"in l&&(l.obs=Cn(l.obs,500,(s==null?void 0:s.obs)??"")),"estado"in l){const d=s&&$c.includes(s.estado)?s.estado:"Activo";l.estado=$c.includes(l.estado)?l.estado:d}for(const d of["disponibilidad","policia","brigada","ong"])d in l&&(l[d]=cT(l[d],(s==null?void 0:s[d])??!1));return"jefe"in l&&(l.jefe=typeof l.jefe=="string"?l.jefe:(s==null?void 0:s.jefe)??""),l}function mT(i){if(!Jn(i))return null;const s={...i};"id"in s&&(s.id=Cn(s.id,40,""));for(const[d,m]of Object.entries(s))d==="id"||d==="inicio"||d==="fin"||typeof m=="string"&&(s[d]=Cn(m,200,""));if(typeof s.inicio!="string")return null;const l=$a(s.inicio,"");return l?(s.inicio=l,"fin"in s&&(s.fin=$a(s.fin,l)),s):null}function fT(i){if(!Jn(i))return null;const s={...i};return"id"in s&&(s.id=Cn(s.id,40,"")),"fecha"in s&&(s.fecha=$a(s.fecha,"")),"magnitud"in s&&(s.magnitud=gd.includes(s.magnitud)?s.magnitud:"diaEntero"),"horas"in s&&(s.horas=Nd(s.horas,0,{min:0,max:24})),s}function pT(i){if(!Jn(i))return null;const s={...i};if(typeof s.funcionario!="string"||!s.funcionario.trim()||(s.funcionario=Cn(s.funcionario,120,""),typeof s.fecha!="string"))return null;const l=$a(s.fecha,"");return l?(s.fecha=l,"id"in s&&(s.id=Cn(s.id,40,"")),"folio"in s&&(s.folio=Cn(s.folio,20,"")),"tipoDia"in s&&(s.tipoDia=Ps.includes(s.tipoDia)?s.tipoDia:Ps[Ps.length-1]),"motivo"in s&&(s.motivo=gs.includes(s.motivo)?s.motivo:gs[gs.length-1]),"motivoDetalle"in s&&(s.motivoDetalle=Cn(s.motivoDetalle,300,"")),"observaciones"in s&&(s.observaciones=Cn(s.observaciones,300,"")),"magnitud"in s&&(s.magnitud=gd.includes(s.magnitud)?s.magnitud:"diaEntero"),"horas"in s&&(s.horas=Nd(s.horas,0,{min:0,max:24})),"fechaReposicion"in s&&(s.fechaReposicion=$a(s.fechaReposicion,"")),Array.isArray(s.cuotas)&&(s.cuotas=s.cuotas.map(fT).filter(Boolean).slice(0,500)),s):null}function TT(i){const s={};let l=0;for(const[d,m]of Object.entries(i)){if(l>=oT)break;typeof d!="string"||d.length===0||d.length>sT||(s[d]=typeof m=="string"&&m.length<=10?m:"",l+=1)}return s}function vT(i){try{if(!Jn(i))return i;const s={...i};if(Array.isArray(s.personas)&&(s.personas=s.personas.filter(Jn).map(l=>{try{return dT(l)}catch{return l}}).slice(0,aT)),Array.isArray(s.actividadesPlan)&&(s.actividadesPlan=s.actividadesPlan.filter(Jn).map(l=>{try{return mT(l)}catch{return l}}).filter(Boolean).slice(0,rT)),Array.isArray(s.reposiciones)&&(s.reposiciones=s.reposiciones.map(l=>{try{return pT(l)}catch{return null}}).filter(Boolean).slice(0,iT)),Jn(s.roleData))try{s.roleData=TT(s.roleData)}catch{}if("reglas"in s)try{s.reglas=pi(Jn(s.reglas)?s.reglas:{})}catch{}return s}catch{return i}}const hi="pnlq:state",zs="pnlq:lastSavedAt",LT="pnlq:backup:v";function St(){try{if(typeof window>"u"||!window.localStorage)return null;const i="__pnlq_probe__";return window.localStorage.setItem(i,"1"),window.localStorage.removeItem(i),window.localStorage}catch{return null}}let mt=null;function hT(){const i=St();if(!i)return 0;try{const s=i.getItem(hi);if(!s)return 0;const l=JSON.parse(s);return typeof(l==null?void 0:l.revision)=="number"?l.revision:0}catch{return 0}}function Fs(){return mt===null&&(mt=hT()),mt}function Hc(i){Fs(),typeof i=="number"&&i>mt&&(mt=i)}function PT(){return Fs(),mt+=1,mt}function xs(){const i=Cd();return i?i.state:null}function Cd(){const i=St();if(!i)return null;const s=i.getItem(hi);if(!s)return null;try{const l=JSON.parse(s);if(!l||typeof l!="object")return null;if(l.schemaVersion!==kn){const d=`${LT}${l.schemaVersion??"unknown"}-${Date.now()}`;try{i.setItem(d,s)}catch{}return null}return Fs(),{state:l.state??null,revision:typeof l.revision=="number"?l.revision:0,savedAt:l.savedAt??null}}catch{return null}}function gT(i,s){if(!i&&!s)return null;if(!i)return{...s,source:"indexeddb"};if(!s)return{...i,source:"localStorage"};const l=i.revision??0,d=s.revision??0;if(l!==d)return l>d?{...i,source:"localStorage"}:{...s,source:"indexeddb"};const m=i.savedAt?Date.parse(i.savedAt):NaN,p=s.savedAt?Date.parse(s.savedAt):NaN;return!Number.isNaN(m)&&!Number.isNaN(p)&&m!==p?m>p?{...i,source:"localStorage"}:{...s,source:"indexeddb"}:{...i,source:"localStorage"}}async function yT(){const i=await Bp(),s=await Fp(),l=Cd(),d=gT(l,s);return d?(Hc((l==null?void 0:l.revision)??0),Hc((s==null?void 0:s.revision)??0),{state:d.state,source:d.source,migrated:i.migrated}):{state:null,source:null,migrated:i.migrated}}async function MT(i){const s=PT(),l=new Date().toISOString(),d=St();let m=!1;if(d)try{const h=JSON.stringify({schemaVersion:kn,savedAt:l,revision:s,state:i});d.setItem(hi,h),d.setItem(zs,l),m=!0}catch{m=!1}const p=await Qp(i,s);return{ok:m||p,ls:m,idb:p,revision:s}}async function ET(){const i=St();let s=!1;if(i)try{i.removeItem(hi),i.removeItem(zs),s=!0}catch{}const l=await Jp().catch(()=>!1),d=await Yp().catch(()=>!1),m=l||d;return s&&m&&(mt=null),{ok:s&&m,ls:s,idb:m}}function NT(){const i=St();if(!i)return null;try{return i.getItem(zs)}catch{return null}}function CT(i){return{schemaVersion:kn,appName:"PNLQ — Gestión de Jornadas",unidad:"PNLQ-BTMM",areaConservacion:"ACC",exportadoEn:new Date().toISOString(),state:i}}function zv(i){try{const s=JSON.parse(i);return!s||typeof s!="object"?{ok:!1,reason:"JSON inválido"}:s.schemaVersion!==kn?{ok:!1,reason:`Versión de esquema incompatible: encontrada v${s.schemaVersion??"?"} esperada v${kn}`}:!s.state||typeof s.state!="object"?{ok:!1,reason:"Snapshot sin estado"}:{ok:!0,state:vT(s.state),exportadoEn:s.exportadoEn}}catch(s){return{ok:!1,reason:`JSON malformado: ${s.message}`}}}async function xT(){const i=!!St();let s=!1;if(typeof indexedDB<"u")try{s=!!await aa()}catch{s=!1}return s?{kind:"indexeddb",hasIDB:s,hasLS:i}:i?{kind:"localStorage",hasIDB:!1,hasLS:!0}:{kind:"none",hasIDB:!1,hasLS:!1}}function ST(){const i=typeof indexedDB<"u",s=!!St();return i?{kind:"indexeddb",hasIDB:i,hasLS:s,verificado:!1}:s?{kind:"localStorage",hasIDB:!1,hasLS:!0,verificado:!0}:{kind:"none",hasIDB:!1,hasLS:!1,verificado:!0}}function xd(i,s){return new Date(i,s+1,0).getDate()}function Fv(i,s,l){const d=i*12+s+l;return{year:Math.floor(d/12),month:(d%12+12)%12}}function wn(i){return String(i).padStart(2,"0")}function Sd(i=new Date){return`${i.getFullYear()}-${wn(i.getMonth()+1)}-${wn(i.getDate())}`}function VT(i=new Date){return`${Sd(i)}_${wn(i.getHours())}-${wn(i.getMinutes())}-${wn(i.getSeconds())}`}function bT(i,s,l){return`${i}-${wn(s+1)}-${wn(l)}`}function Bn(i){if(!i)return"—";const s=i.split("-");return`${s[2]}/${s[1]}/${s[0]}`}function AT(i,s=new Date(2026,4,19)){return i?Math.round((new Date(i+"T00:00:00")-s)/864e5):null}function wT(i,s,l=null){for(let d=1;d<=xd(i,s);d++){const m=new Date(i,s,d).getDay();if(m>=1&&m<=5){if(!l)return d;const p=bT(i,s,d);if(!l.has(p))return d}}return 1}const Vd=S.createContext(null),Ss=new Date,kT=Sd(Ss),Vs="limpiezaEnzoYSetDic2026",bs="actividadesEjemploJul2026",_T="2026-07-14",dt={view:"dia",personas:fi,month:Ss.getMonth(),year:Ss.getFullYear(),compact:!1,roleData:Pd,actividadesPlan:hd,reposiciones:Dp,diaVista:kT,reglas:{...Is},migraciones:{[Vs]:!0,[bs]:!0}};function As(i){return i==="dashboard"?"dia":i}function bd(i){const s=(i==null?void 0:i.migraciones)||{},l=!!s[Vs],d=(Array.isArray(i==null?void 0:i.personas)?i.personas:[]).filter(Boolean),m=l?d:d.filter(x=>x.nombre!=="Enzo Martini"),p=new Map(m.map(x=>[x.nombre,x])),h=new Set(fi.map(x=>x.nombre)),g=(i==null?void 0:i.roleData)||{},v=l?g:Object.fromEntries(Object.entries(g).filter(([x])=>!/^2026-(?:9|10|11|12)-/.test(x)&&!x.includes("-Enzo Martini-"))),A=[...fi.map(x=>({...x,...p.get(x.nombre)||{}})),...m.filter(x=>x.nombre&&!h.has(x.nombre))];let D=Array.isArray(i==null?void 0:i.actividadesPlan)?i.actividadesPlan.filter(x=>x&&typeof x=="object"):dt.actividadesPlan;if(!s[bs]&&Array.isArray(i==null?void 0:i.actividadesPlan)){const x=new Set(D.map(F=>F.id)),V=hd.filter(F=>F.inicio>=_T&&!x.has(F.id));V.length&&(D=[...D,...V])}const N=Array.isArray(i==null?void 0:i.reposiciones)?i.reposiciones.filter(x=>x&&typeof x=="object"&&x.funcionario&&x.fecha):dt.reposiciones;return{...dt,...i,view:As((i==null?void 0:i.view)??dt.view),personas:A,actividadesPlan:D,reposiciones:N,roleData:{...Pd,...v},reglas:pi(i==null?void 0:i.reglas),migraciones:{...s,[Vs]:!0,[bs]:!0}}}function jT(){const i=xs();return i?bd(i):dt}function Qn(i,s){return typeof i=="function"?i(s):i}function RT(i,s){var l,d;switch(s.type){case"SET_VIEW":return{...i,view:As(s.payload)};case"SET_MONTH":return{...i,month:Qn(s.payload,i.month)};case"SET_YEAR":return{...i,year:Qn(s.payload,i.year)};case"SET_PERIODO":return{...i,month:s.month,year:s.year};case"SET_COMPACT":return{...i,compact:Qn(s.payload,i.compact)};case"SET_DIA_VISTA":return{...i,diaVista:Qn(s.payload,i.diaVista)};case"SET_PERSONAS":return{...i,personas:Qn(s.payload,i.personas)};case"SET_ACTIVIDADES_PLAN":return{...i,actividadesPlan:Qn(s.payload,i.actividadesPlan)};case"SET_REPOSICIONES":return{...i,reposiciones:Qn(s.payload,i.reposiciones)};case"SET_ROLE_DATA":return{...i,roleData:Qn(s.payload,i.roleData)};case"SET_REGLAS":{const m=Qn(s.payload,i.reglas);return{...i,reglas:pi(m)}}case"REPLACE_STATE":return{...dt,...s.payload,view:As(((l=s.payload)==null?void 0:l.view)??dt.view),reglas:pi((d=s.payload)==null?void 0:d.reglas)};default:return i}}const DT=new Set(["view","compact","diaVista","month","year"]);function ci(i){const s={};for(const l of Object.keys(i))DT.has(l)||(s[l]=i[l]);return s}const IT=500;function OT({children:i}){const[s,l]=S.useReducer(RT,void 0,jT),[d,m]=S.useState(()=>NT()),[p,h]=S.useState(0),[g,v]=S.useState(()=>ST()),[A,D]=S.useState(!1),[N,x]=S.useState(null),V=S.useRef(null),F=S.useRef(!0),_=S.useRef(!1),K=S.useRef(!1),ce=S.useRef(!1);S.useEffect(()=>{let O=!1;return xT().then(Q=>{O||v(Q)}),()=>{O=!0}},[]);const te=S.useRef(s);S.useEffect(()=>{te.current=s});const oe=S.useRef(JSON.stringify(ci(s)));S.useEffect(()=>{let O=!1;return(async()=>{const{state:Q,source:P,migrated:w}=await yT();if(!O){if(w&&D(!0),Q&&P==="indexeddb"){const ae=bd(Q),ie=JSON.stringify(ci(ae)),le=oe.current;if(JSON.stringify(ci(te.current))!==le){_.current=!0;return}le!==ie&&l({type:"REPLACE_STATE",payload:ae})}_.current=!0}})(),()=>{O=!0}},[]);const H=S.useRef(null);H.current=async function(){if(K.current){ce.current=!0;return}K.current=!0,ce.current=!1;try{const Q=await MT(ci(te.current));x(Q),Q.ls&&m(new Date().toISOString()),Q.ok&&h(0)}finally{K.current=!1,ce.current&&(ce.current=!1,H.current())}},S.useEffect(()=>{if(F.current){F.current=!1;return}return h(O=>O+1),V.current&&window.clearTimeout(V.current),V.current=window.setTimeout(()=>{V.current=null,H.current()},IT),()=>{V.current&&window.clearTimeout(V.current)}},[s]),S.useEffect(()=>{const O=()=>{V.current&&(window.clearTimeout(V.current),V.current=null,H.current())},Q=()=>{document.visibilityState==="hidden"&&O()};return window.addEventListener("pagehide",O),document.addEventListener("visibilitychange",Q),()=>{window.removeEventListener("pagehide",O),document.removeEventListener("visibilitychange",Q)}},[]);const W=S.useCallback(O=>l({type:"SET_VIEW",payload:O}),[]),se=S.useCallback(O=>l({type:"SET_MONTH",payload:O}),[]),fe=S.useCallback(O=>l({type:"SET_YEAR",payload:O}),[]),pe=S.useCallback(O=>l({type:"SET_COMPACT",payload:O}),[]),xe=S.useCallback(O=>l({type:"SET_DIA_VISTA",payload:O}),[]),ye=S.useCallback(O=>l({type:"SET_PERSONAS",payload:O}),[]),Ve=S.useCallback(O=>l({type:"SET_ACTIVIDADES_PLAN",payload:O}),[]),Pe=S.useCallback(O=>l({type:"SET_REPOSICIONES",payload:O}),[]),Te=S.useCallback(O=>l({type:"SET_ROLE_DATA",payload:O}),[]),we=S.useCallback(O=>l({type:"SET_REGLAS",payload:O}),[]),De=S.useCallback(O=>{l({type:"REPLACE_STATE",payload:O})},[]),ke=S.useCallback(()=>{l({type:"SET_REGLAS",payload:{...Is}})},[]),Le=S.useCallback(async()=>{V.current&&(window.clearTimeout(V.current),V.current=null);const O=await ET();return l({type:"REPLACE_STATE",payload:dt}),m(null),x(null),h(0),O},[]),J=S.useMemo(()=>({...s,setView:W,setMonth:se,setYear:fe,setCompact:pe,setDiaVista:xe,setPersonas:ye,setActividadesPlan:Ve,setReposiciones:Pe,setRoleData:Te,setReglas:we,resetReglas:ke,replaceState:De,resetToSeed:Le,lastSavedAt:d,pendingChanges:p,lastSaveResult:N,durableSaveFailed:N?!N.idb:!1,schemaVersion:kn,storageBackend:g,migracionLs:A,dispatch:l}),[s,W,se,fe,pe,xe,ye,Ve,Pe,Te,we,ke,De,Le,d,p,N,g,A]);return u.jsx(Vd.Provider,{value:J,children:i})}function Za(){const i=S.useContext(Vd);if(!i)throw new Error("useApp must be used within an <AppProvider>");return i}const zT=new Date(2026,4,19);function FT(i,s){const l=Math.round((Number(i)||0)*100)/100;if(l<=0)return"0 h";const d=l/s;return Number.isInteger(d)?d===1?"1 día":`${d} días`:l===s/2?"medio día":`${l} h`}function QT(i,s={}){const{actividadesPlan:l=[],reposiciones:d=[],hoy:m=zT,flags:p={}}=s,{alertaInactivoConActividad:h=!0,alertaIncapacitadoConActividad:g=!0,alertaAcumulativaSinModalidad:v=!0,alertaReposicionPendiente:A=!0,horasJornada:D=8}=p,N=[],x=JT(m);if(i.forEach(V=>{if(V.disponibilidad){const F=AT(V.vencimiento,m);F!==null&&F<0?N.push({t:"danger",icon:"🚨",msg:`Disponibilidad vencida — ${V.nombre}`,sub:`${V.contrato} · venció ${Bn(V.vencimiento)} (hace ${Math.abs(F)} día${Math.abs(F)!==1?"s":""}). Requiere revisión administrativa.`}):F!==null&&F===0?N.push({t:"danger",icon:"🚨",msg:`Disponibilidad vence HOY — ${V.nombre}`,sub:`${V.contrato} · vencimiento ${Bn(V.vencimiento)}. Coordinar renovación o suspensión administrativa.`}):F!==null&&F>0&&F<=60&&N.push({t:"warn",icon:"⚠️",msg:`Disponibilidad por vencer — ${V.nombre}`,sub:`${V.contrato} · vence ${Bn(V.vencimiento)} (en ${F} día${F!==1?"s":""}). Requiere revisión administrativa.`})}if(V.jornada==="Acumulativa"&&!V.resolucion&&!V.ong&&N.push({t:"warn",icon:"📄",msg:`Sin resolución acumulativa — ${V.nombre}`,sub:"Dato pendiente: no automatizar efectos hasta confirmar respaldo interno."}),v&&V.jornada==="Acumulativa"&&!V.modalidad&&N.push({t:"warn",icon:"📄",msg:`Acumulativa sin modalidad definida — ${V.nombre}`,sub:"Definir modalidad (10x5, 12x6, 14x7, 16x8, 20x10) para calcular roles correctamente."}),V.estado==="Incapacitado"&&V.disponibilidad&&N.push({t:"danger",icon:"🩺",msg:`Revisar disponibilidad — ${V.nombre}`,sub:"Funcionario incapacitado con disponibilidad activa. Verificar criterio RH."}),g&&V.estado==="Incapacitado"){const F=qc(l,V.nombre,x);F.length&&N.push({t:"danger",icon:"🩺",msg:`Incapacitado con actividad planificada — ${V.nombre}`,sub:`${F.length} actividad${F.length!==1?"es":""} a partir de ${Bn(x)}. Coordinar reasignación.`})}if(h&&V.estado==="Inactivo"){const F=qc(l,V.nombre,x);F.length&&N.push({t:"warn",icon:"⚠️",msg:`Inactivo con actividad planificada — ${V.nombre}`,sub:`${F.length} actividad${F.length!==1?"es":""} a partir de ${Bn(x)}. Verificar si debe reactivarse o reasignarse.`})}}),A&&d.length)for(const V of tT(d,D))V.pendientes!==0&&N.push({t:"warn",icon:"⟳",msg:`Tiempo por reponer — ${V.funcionario}`,sub:`${V.pendientes} registro${V.pendientes!==1?"s":""} de trabajo fuera de rol sin reponer · saldo a favor ${FT(V.saldoHoras,D)}. Coordinar la reposición del tiempo.`});return N.length?N:[{t:"ok",icon:"✅",msg:"Sin alertas críticas",sub:"No se observan vencimientos o bloqueos críticos en los datos visibles."}]}function qc(i,s,l){return(i||[]).filter(d=>!d||!d.inicio||(d.fin||d.inicio)<l?!1:(d.funcionarios||[]).includes(s))}function JT(i){if(typeof i=="string")return i;const s=l=>String(l).padStart(2,"0");return`${i.getFullYear()}-${s(i.getMonth()+1)}-${s(i.getDate())}`}const BT={app:{name:"PNLQ — Gestión de Jornadas Laborales",short:"PNLQ",estado:"Activo",reglaDura:"Regla dura: el sistema registra y alerta; no genera pago, reposición, suspensión o derecho automático.",sinacCR:"SINAC · Costa Rica",accNombre:"Área de Conservación Central",bloqueLinea1:"Bloque Tapantí",bloqueLinea2:"Macizo de la Muerte",bloqueSub:"Gestión de jornadas laborales",perfilNombre:"P. Sánchez N.",perfilCargo:"Guardaparques · ACC",titulo:"Gestión de jornadas laborales"},sidebar:{grupoPrincipal:"Principal",grupoJornadas:"Jornadas",grupoControl:"Control"},view:{dia:"Día",funcionarios:"Funcionarios",roles:"Roles",planificacion:"Planificación general",planFuncionario:"Planificación/Funcionario",adelantos:"Adelanto de viáticos",reposicion:"Reposición de tiempo",disponibilidad:"Disponibilidad",alertas:"Alertas",datos:"Datos · respaldo",configuracion:"Configuración"},topbar:{periodo:"Periodo",mesAnterior:"Mes anterior",mesSiguiente:"Mes siguiente",mes:"Mes",anio:"Año",vistaCompacta:"Vista compacta",vistaAmplia:"Vista amplia",cargando:"Cargando vista…",hoy:"Hoy",tema:"Tema y contraste",previewMobile:"Abrir simulador temporal de vista móvil",previewMobileCorto:"Vista móvil",previewTitle:"Vista móvil temporal",previewDesc:"Simulación de un teléfono genérico de {ancho} × {alto} px. Puede usar la aplicación dentro del marco.",previewFrameTitle:"Aplicación en tamaño de teléfono móvil",previewOrientation:"Orientación del teléfono simulado",previewVertical:"Vertical",previewHorizontal:"Horizontal"},bottomNav:{inicio:"Inicio",personal:"Personal",plan:"Plan",alertas:"Alertas",dia:"Día",roles:"Roles",planFunc:"Plan/Func.",viaticos:"Viáticos",reposicion:"Reposición",disponib:"Disponib.",datos:"Datos",config:"Config.",mas:"Más",masTitulo:"Más módulos",masSub:"Herramientas y módulos secundarios",masAria:"Más opciones",navAria:"Navegación principal",alertasAria:"{n} alertas pendientes"},theme:{light:"Claro",dark:"Oscuro",hc:"Alto contraste",cambiarOscuro:"Cambiar a oscuro",cambiarHC:"Cambiar a alto contraste",cambiarClaro:"Cambiar a claro"},cobertura:{titulo:"Cobertura programada",programados:"Programados en actividades",enTurnoRol:"En turno según rol",atencionVisit:"Atención rutinaria visitantes",alertaSinAtencion:"ALERTA: debe haber al menos una persona asignada.",asignadosVisit:"Asignados a atención rutinaria de visitantes",enTurnoSegunRol:"Funcionarios en turno según rol",sinTurno:"No hay funcionarios en turno según rol para este puesto operativo y día.",programadosLugar:"Funcionarios programados en actividades con este lugar",sinProgramados:"No hay funcionarios programados en actividades con este puesto operativo como lugar para este día.",sinActividad:"Sin actividad programada para este día.",rolPrefix:"Rol: {rol} · {puesto}",agregarActividad:"Agregar actividad",editarActividad:"Editar actividad"},kpi:{coberturaCritica:"Cobertura crítica",coberturaCriticaSub:"días sin Visit. asignada",sinActividad:"Sin actividad",sinActividadSub:"en turno hoy sin planificar",porVencer:"Por vencer",porVencerSub:"disponibilidades ≤30 días",personalActivo:"Personal activo",personalActivoSub:"/ {total} total",reposicionPendiente:"Tiempo por reponer",reposicionPendienteSub:"funcionarios con tiempo pendiente",enTurno:"En turno",conActividad:"Con actividad",fueraDeTurno:"Fuera de turno",conViatico:"Con viático"},dia:{anterior:"Anterior",siguiente:"Siguiente",diaAnterior:"Día anterior",diaSiguiente:"Día siguiente",seleccionarFecha:"Seleccionar fecha",pistaSwipe:"Deslice ←/→ para cambiar día",porPuesto:"Por puesto operativo",th:{puesto:"Puesto",fuera:"Fuera",enTurno:"En turno",conActividad:"Con activ.",sinActividad:"Sin activ.",total:"Total"},actividadesTitulo:"Actividades planificadas ({n})",actividadesTituloCorto:"Actividades · {n}",nueva:"+ Nueva",nuevaCorta:"Nueva",sinActividades:"Sin actividades planificadas para este día",enTurnoConActTitulo:"En turno · con actividad ({n})",enTurnoConActVacio:"Ningún funcionario en turno tiene actividad programada",enTurnoSinActTitulo:"En turno · sin actividad ({n})",enTurnoSinActVacio:"Todos los funcionarios en turno tienen actividad asignada",asignar:"+ Asignar",fueraDeTurnoTitulo:"Fuera de turno ({n})",fueraDeTurnoVacio:"Todos los funcionarios activos están en turno",conViaticoTitulo:"Con viático este día ({n})",nFuncionarios:"{n} funcionario{plural}",viaticoBadge:"💵 Viático",conflictosBadge:"⚠ {n} conflicto{plural}",sinLugar:"Sin lugar"},funcionarios:{titulo:"Funcionarios",agregar:"Agregar funcionario",agregarCorto:"Agregar",buscarPlaceholder:"Buscar por nombre, cédula, puesto u observación…",verFiltros:"Filtros y orden",filtroTodos:"Todos",filtroGuardas:"Guardaparques",filtroDisp:"Con disponibilidad",filtroAcum:"Acumulativa",filtroOng:"ONG-Invest-Volunt",filtroSinRes:"Sin resolución",vistaTabla:"Tabla",vistaTarjetas:"Tarjetas",vistaAria:"Vista",sinResultadosTitulo:"Sin resultados",sinResultadosDesc:"Ajuste la búsqueda o los filtros para encontrar funcionarios.",th:{funcionario:"Funcionario",cargo:"Cargo / puesto operativo",jornada:"Jornada",disponibilidad:"Disponibilidad",atributos:"Atributos",estado:"Estado",acciones:"Acciones"},sinPuesto:"Sin puesto operativo",sinResolucion:"🔵 Sin resolución",si:"Sí",no:"No",leyendaPolicia:"🛡️ Autoridad de policía",leyendaBrigada:"🔥 Brigada forestal",leyendaPendiente:"🔵 Dato operativo por completar",eliminarTitulo:"Eliminar funcionario",eliminarConfirma:"Se eliminará el registro de {nombre} en esta propuesta visual.",ordenar:"Ordenar",atributoPolicia:"Policía",atributoBrigada:"Brigada",card:{observaciones:"Observaciones",cargo:"Cargo",jornada:"Jornada",disponibilidad:"Disponibilidad",atributos:"Atributos",venceCorto:"Vence {fecha}"}},modalFuncionario:{editar:"Editar funcionario",agregar:"Agregar funcionario",sec:{identificacion:"Identificación",puesto:"Puesto y condición",jornada:"Jornada y modalidad",contratacion:"Contratación y fechas",atributos:"Atributos"},nombre:"Nombre",cedula:"Cédula",correo:"Correo",cargo:"Cargo institucional",puesto:"Puesto operativo",condicion:"Condición",estado:"Estado",jornada:"Jornada",modalidad:"Modalidad",resolucion:"Resolución",contrato:"Contrato",vencimiento:"Vencimiento",ingreso:"Ingreso",obs:"Observaciones",attr:{disponibilidad:"Disponibilidad",policia:"Autoridad policía",brigada:"Brigada",ong:"ONG-Invest-Volunt"}},modalActividad:{titulo:"Actividad",editar:"Editar actividad",agregar:"Agregar actividad",sub:"Registre actividad, periodo, lugar, funcionarios participantes y necesidad de adelanto de viático.",fechaInicio:"Fecha inicio",fechaFinal:"Fecha final",unDia:"Actividad de un solo día",requiereViatico:"Requiere tramitar adelanto de viático",lugar:"Lugar",placeholderTitulo:"O escriba otra actividad: patrullaje, inspección, reunión, mantenimiento...",placeholderLugar:"Escriba otro lugar: sector, sendero, oficina, comunidad...",placeholderObs:"Detalle operativo, coordinación, expediente, requerimientos, vehículo, equipo, etc.",otra:"Otra actividad",otro:"Otro",participantes:"Funcionarios participantes",seleccionados:"{n} seleccionados",avisoTraslape:"Funcionario con actividad ya planificada",agregarAunAsi:"Agregar de todos modos",modificarActividad:"Modificar actividad",obs:"Observaciones",guardarActividad:"Guardar actividad",diaLibre:"Día libre/vacaciones",saldoFavor:"Saldo a favor",saldoFavorMonto:"Saldo a favor: {saldo}",soloSaldo:"Solo con saldo a favor",libresAsignados:"Asignados en día libre/vacaciones",resolver:"Resolver"},asignacionLibre:{titulo:"Funcionario fuera de turno",sub:"{funcionario} figura como “{rol}” el {fecha}. ¿Cómo desea proceder?",modificarRol:"Modificar rol",modificarRolDesc:"Marcar ese día como turno (T) en el rol y agregarlo a la actividad.",reposicion:"Registrar reposición pendiente",reposicionDesc:"Deja el rol igual y registra el tiempo trabajado para reponérselo después.",reponer:"Reponer tiempo (saldo a favor: {saldo})",reponerDesc:"Usa este día libre para reponer su saldo pendiente. No se agrega a la actividad.",editarFecha:"Editar la fecha de la actividad",editarFechaDesc:"No lo agrega; vuelve al formulario para cambiar la fecha de la actividad."},roles:{titulo:"Distribución de roles",vistaMensualLineal:"Vista mensual lineal",filtros:"Filtros",verTodos:"Ver todos",limpiarFiltros:"Limpiar",todos:"Todos",filtrarPorPuesto:"Filtrar por puesto",filtrosFuncionario:"Filtrar por funcionario",resumenPuestosTodos:"Puestos y funcionarios: todos ({n})",resumenPuestosParcial:"Puestos y funcionarios: {n} de {total}",buscarFuncionario:"Buscar funcionario…",limpiarBusqueda:"Limpiar búsqueda",solo:"Solo",contraerPuesto:"Contraer lista de funcionarios",expandirPuesto:"Expandir lista de funcionarios",sinResultadosBusqueda:"Sin coincidencias con la búsqueda.",resumenFiltro:"{n} funcionarios visibles",desplazarDias:"Desplazar días",semanaAnterior:"Semana anterior",semanaSiguiente:"Semana siguiente",semana7:"7 días",centrarHoy:"Centrar hoy",irAFecha:"Ir a fecha",irAFechaLabel:"Buscar por fecha",todosLosPuestos:"Todos los puestos",sinFuncionariosFiltro:"No hay funcionarios visibles con el filtro actual.",leyenda:{turno:"T1 Turno",libre:"L1 Libre",vacaciones:"V1 Vacas",incapacidad:"I1 Incapaci",otro:"O1 Otro"},cantidadEnTurno:"EN TURNO",resumenGeneral:"Resumen · todos los puestos",resumenCorto:"Resumen",resumenEnTurno:"En turno",resumenLibres:"Libres",resumenVacaciones:"Vacaciones",resumenIncapacidad:"Incapacidad",resumenOtros:"Otros",editarTipoRol:"Tipo de rol desde 1er día laboral",aplicar:"Aplicar",titleConflicto:"Clic para resolver: rol vs actividad planificada",titleEditar:"Cambiar marca del día",titleSinEdicion:"Active edición del funcionario para modificar",initRing:"INICIO",multi:{activar:"Selección múltiple",seleccionados:"{n} día(s) seleccionado(s)",confirmarTitulo:"Aplicar código a varios días",confirmarDesc:"Se aplicará {cat} a {n} selección(es) y se renumerarán las filas afectadas.",nota:"Revise la cantidad antes de confirmar. Puede deshacer el último cambio mientras permanezca en esta vista.",deshacer:"Deshacer último cambio"}},menuCelda:{titulo:"Editar día {dia} · {persona}",sub:"Seleccione únicamente la categoría. El número consecutivo se recalcula automáticamente en toda la fila.",primerDia:"Primer día laboral del mes.",primerDiaSub:"La modalidad del funcionario define el reinicio de los consecutivos de turno y libre.",cat:{T:"Turno",L:"Libre",V:"Vacaciones",I:"Incapacidad",O:"Otro"},sub2:"Se mostrará como {cat}1, {cat}2...",limpiar:"Limpiar celda"},conflicto:{titulo1:"Resolver incoherencia · paso 1 de 2",titulo2:"Confirmar acción · paso 2 de 2",sub1:"Seleccione cuál registro corregir. La herramienta solo actualiza el dato visible: no genera pagos ni decisiones administrativas.",sub2Rol:"Se modificará el rol de este día y se recalcularán los consecutivos T/L/V/I/O de toda la fila respetando la modalidad.",sub2Act:"Se abrirá el listado de {n} actividad{plural} de este día para que pueda quitar al funcionario o ajustar la planificación.",detalle:"{persona} · día {dia}",detalleSub:"Rol {valor} (no en turno) con {n} actividad{plural} planificada{plural}.",cambiarRol:"Modificar rol del día",cambiarRolSub:"Cambiar la categoría de turno para este funcionario.",cambiarActividad:"Modificar actividad{plural}",cambiarActividadSub:"Ver, editar o quitar al funcionario de las actividades del día.",cambiarReposicion:"Registrar reposición pendiente",cambiarReposicionSub:"Deja el rol y la actividad igual; registra el tiempo trabajado para reponérselo después.",reponer:"Reponer tiempo (saldo a favor: {saldo})",reponerSub:"Usa este día para reponer el saldo pendiente del funcionario.",sub2Reposicion:"Se registrará el tiempo trabajado fuera de rol como reposición pendiente; no modifica el rol ni la actividad.",sub2Reponer:"Se aplicará este día al saldo pendiente del funcionario (reposición); no modifica el rol ni la actividad.",despuesReposicion:"queda un registro de reposición pendiente, enlazado por folio al día trabajado.",despuesReponer:"se descuenta del saldo a favor del funcionario.",resumen:"Resumen del impacto",antes:"Antes:",despues:"Después:",antesValor:"rol {valor} · {n} actividad{plural}.",despuesRol:"elegirá una nueva categoría (T/L/V/I/O) y se renumerará toda la fila.",despuesAct:"podrá quitar al funcionario o editar/eliminar la actividad.",notaNoEjecuta:"La herramienta solo registra; no genera pago, reposición ni derecho automático.",volver:"Volver",continuar:"Continuar"},actividadesDia:{titulo:"Actividades · {funcionario}",sub:"{fecha} · {n} actividad{plural} planificada{plural}",vacia:"Ya no hay actividades de {funcionario} en este día.",quitarDe:"Quitar a {nombre}",editar:"Editar actividad",eliminar:"Eliminar",eliminarConfirma:"¿Eliminar esta actividad?",eliminarSub:"Desaparece para todos los funcionarios asignados.",confirmar:"Confirmar"},modificarRol:{titulo:"Modificar rol",sub:"{funcionario} · {fecha} · rol actual: {rol}",cat:{T:"Turno",L:"Libre",V:"Vacaciones",I:"Incapacidad",O:"Otro"},catSub:"Recalcula consecutivos de la fila",limpiar:"Limpiar rol del día"},asignarActividad:{titulo:"Asignar actividad",sub:"{funcionario} · {fecha}",crear:"Crear actividad nueva para este funcionario",agregar:"Agregar a actividad existente del mismo día",sinExistentes:"No hay actividades existentes ese día para otros funcionarios."},planificacion:{titulo:"Planificación general — {mes} {anio}",agregar:"+ Agregar actividad",vistaAgenda:"Agenda",vistaCuadricula:"Cuadrícula",vistaAria:"Modo de vista del calendario",agendaVacia:"Sin actividades",agregarEnDia:"Agregar actividad el día {dia}",verLeyenda:"Ver leyenda de colores",buscarPlaceholder:"Buscar actividad, lugar o persona",buscarAria:"Buscar en planificación",filtros:"Filtros",rangoAria:"Rango de días visible",rangoHoy:"Hoy",rangoProximos7:"Próximos 7 días",rangoActividades:"Con actividades",rangoConflictos:"Con conflictos",rangoSinAsignar:"Sin asignar",rangoMes:"Mes completo",irHoy:"Ir a Hoy",sinCoincidencias:"No hay días que coincidan con estos filtros.",editarActividad:"Editar actividad",filtrosTitulo:"Filtros de planificación",filtrosDesc:"Combina filtros para reducir la agenda.",filtroPersona:"Persona",filtroTodas:"Todas",filtroUbicacion:"Ubicación",filtroViatico:"Viático",viaticoTodos:"Todos",viaticoSi:"Con viático",viaticoNo:"Sin viático",limpiar:"Limpiar",verResultados:"Ver resultados",leyendaProgramada:"Actividad programada",leyendaViatico:"Requiere adelanto de viático",leyendaFinde:"Fin de semana",leyendaTurno:"👥 = en turno",sinFuncionarios:"Sin funcionarios",masFuncionarios:"+{n}",titleDetalleDia:"Ver detalle del día",titleTurno:"{n} funcionarios en turno",titleActs:"{n} actividades",actsBadge:"{n} act.",viaticoTag:"VIÁTICO",rolBadge:"⚠ ROL: {nombres}"},planFuncionario:{titulo:"Planificación/Funcionario — {mes} {anio}",expandir:"Expandir",colapsar:"Colapsar",leyendaTurnoAct:"Turno con actividad",leyendaFaltaAct:"Falta asignar actividad",leyendaConflicto:"Actividad no coincide con rol",diasVisibles:"{n} días visibles",actividades:"{n} actividades",sinAsignar:"{n} sin asignar",conflictos:"{n} conflictos",ocultar:"Ocultar",ver:"Ver",faltaAsignar:"Falta asignar actividad",sinLugar:"Sin lugar",noCoincideRol:"NO COINCIDE CON ROL",modificarActividad:"Modificar actividad",modificarRol:"Modificar rol",asignar:"Asignar",nueva:"Nueva"},viaticos:{titulo:"Adelanto de viáticos — actividades de {nombreMes}",porFuncionario:"Por funcionario",porActividad:"Por actividad",plazoAbierto:"Plazo abierto.",plazoAbiertoSub:"Este listado corresponde al mes siguiente y puede usarse para tramitar adelantos hasta el día {dia} del mes anterior.",plazoCerrado:"Clausurado el tiempo de trámite de adelantos del próximo mes.",plazoCerradoSub:"El listado queda disponible para consulta, pero el plazo ordinario de trámite venció el día {dia} del mes anterior.",pie:"Mes a tramitar: {nombreMes}. Corte administrativo: día {dia} del mes {referencia}.",referenciaAnterior:"anterior",referenciaEnCurso:"en curso",sinActividadesTitulo:"Sin actividades con viático para el próximo mes",sinActividadesDesc:"Aún no hay actividades de {nombreMes} marcadas como “requiere tramitar adelanto de viático”. Vaya a Planificación general o Plan/Funcionario para asignarlas.",ocultoTitulo:"Listado oculto tras el cierre",ocultoDesc:"Según la configuración administrativa, el listado se oculta cuando el plazo (día {dia}) ya venció. Puede reactivar la consulta en Configuración → Viáticos.",nFuncionarios:"{n} funcionarios"},reposicion:{titulo:"Reposición de tiempo trabajado",subtitulo:"Registro de jornadas que la administración requirió trabajar a un funcionario en día libre, fuera de turno, feriado o similar (emergencias, incendios, atención de denuncias, actividades especiales, etc.) para llevar el control y reponerle el tiempo. Puede ser por horas, medio día o día entero.",acercaDe:"Acerca de esta herramienta",controlInterno:"Control interno",agregar:"Registrar tiempo",agregarCorto:"Registrar",filtroTodos:"Todos",filtroPendientes:"Pendientes",filtroRepuestos:"Repuestos",horasN:"{n} h",tabsAria:"Vistas de reposición",tabRegistros:"Registros",tabHistorial:"Historial por funcionario",reponer:"Reponer",saldoCorto:"Saldo pendiente",ultimaReposicion:"Última reposición",masAcciones:"Más acciones del registro",buscar:"Buscar por funcionario, folio, motivo u observación",filtros:"Filtros",filtrosAvanzados:"Filtros de reposición",limpiarFiltros:"Limpiar filtros",todosFuncionarios:"Todos los funcionarios",todosTipos:"Todos los tipos",periodo:"Periodo",soloObservaciones:"Solo registros con observaciones",saldoLabel:"Saldo: {saldo}",estado:{Pendiente:"Pendiente",Parcial:"Parcial",Repuesto:"Repuesto"},resumen:{total:"Registros",pendientes:"Pendientes de reponer",repuestos:"Repuestos",saldo:"Saldo a favor: {saldo}",parciales:"{n} parcial(es)",desglose:"{dias} día(s) · {medios} medio(s) día(s) · {horas} h"},th:{folio:"Folio",funcionario:"Funcionario",fecha:"Fecha trabajada",tipoDia:"Tipo de día",motivo:"Motivo",tiempo:"Tiempo",estado:"Estado",acciones:"Acciones"},magnitudCorta:{diaEntero:"día completo",medioDia:"medio día"},marca:{trabajadaTitulo:"{folio} · Trabajó día {tipoDia} ({magnitud}) · {estado}",reposicionTitulo:"{folio} · Día de reposición del tiempo trabajado el {fecha}",reposicionDe:"reposición del {fecha}"},historial:{vacioTitulo:"Sin historial",vacioDesc:"Aún no hay registros de reposición para mostrar por funcionario.",veces:"{n} registro(s)",pendientesN:"{n} pendiente(s)",repuestosN:"{n} repuesto(s)",saldoFavor:"Saldo a favor: {saldo}",cuota:"Reposición aplicada: {fecha} · {cantidad}"},marcarRepuesto:"Marcar repuesto",reabrir:"Reabrir",repuestoEl:"Repuesto el {fecha}",sinRegistrosTitulo:"Sin registros de reposición",sinRegistrosDesc:"Use “Registrar tiempo” para anotar una jornada trabajada en día libre, feriado o fuera de turno que deba reponerse al funcionario.",sinResultadosTitulo:"Sin resultados",sinResultadosDesc:"Ajuste el filtro para ver los registros de reposición.",nota:"La herramienta solo registra y lleva el control; la reposición efectiva del tiempo la autoriza la administración según la normativa vigente.",eliminarTitulo:"Eliminar registro",eliminarConfirma:"Se eliminará este registro de reposición de tiempo. Esta acción no se puede deshacer."},modalReposicion:{editar:"Editar registro de reposición",agregar:"Registrar tiempo a reponer",sub:"Documente la jornada trabajada por requerimiento de la administración para llevar el control y reponer el tiempo.",funcionario:"Funcionario",seleccioneFuncionario:"Seleccione un funcionario…",otrosFuncionarios:"Otros",fecha:"Fecha trabajada",tipoDia:"Tipo de día",motivo:"Motivo",motivoDetalle:"Detalle del motivo",motivoDetallePlaceholder:"Expediente, sector, descripción breve de la situación…",magnitud:"Tiempo trabajado",magnitudDiaEntero:"Día entero",magnitudMedioDia:"Medio día",magnitudHoras:"Por horas",horas:"Cantidad de horas",estadoPendiente:"Pendiente",estadoRepuesto:"Repuesto",reposiciones:"Reposiciones registradas",sinCuotas:"Sin reposiciones registradas. Use “Reponer” en la lista para registrar tiempo (total, medio día u horas).",cuotasNota:"Las reposiciones se registran desde la acción “Reponer” de cada registro; aquí solo se consultan o se corrigen.",obs:"Observaciones",obsPlaceholder:"Coordinación con la administración, acuerdos, equipo, vehículo, etc.",guardar:"Guardar registro"},reponer:{titulo:"Reponer tiempo",saldoActual:"Saldo actual",saldoDespues:"Saldo después",cuanto:"¿Cuánto se repone?",fecha:"Fecha de reposición",excede:"La cantidad supera el saldo pendiente; se registrará hasta saldar el tiempo.",registrar:"Registrar reposición"},disponibilidad:{activosTitulo:"Contratos activos — disponibilidad",sinActivosTitulo:"Sin disponibilidad asignada",sinContrato:"Sin contrato",nDias:"{n} días",controlNota:"Control: la herramienta alerta; no ejecuta suspensiones automáticamente."},alertas:{requiereAtencion:"Requiere atención · {n}",sinCriticas:"Sin alertas críticas",sinCriticasSub:"No se observan vencimientos o bloqueos críticos en los datos visibles.",titulo:"Alertas del sistema ({n})",requiereRevision:"Requiere revisión",semaforoTitulo:"Semáforo normativo",semaforo:{verde:"Verificado",amarillo:"Confirmación interna",naranja:"Criterio RH/Jurídico",rojo:"No automatizar",azul:"Dato pendiente"},venceHoy:"Disponibilidad vence HOY — {nombre}",vencida:"Disponibilidad vencida — {nombre}",porVencer:"Disponibilidad por vencer — {nombre}",sinResolucion:"Sin resolución acumulativa — {nombre}",sinModalidad:"Acumulativa sin modalidad definida — {nombre}",incapaConDisp:"Revisar disponibilidad — {nombre}",incapaConActividad:"Incapacitado con actividad planificada — {nombre}",inactivoConActividad:"Inactivo con actividad planificada — {nombre}",reposicionPendiente:"Tiempo por reponer — {nombre}"},datos:{titulo:"Datos · respaldo local",esquema:"Esquema v{n}",estadoOk:"Última copia local guardada el {fecha}",estadoPendiente:"{n} cambio{plural} pendiente{plural} de guardar (debounce 500 ms)",estadoVacio:"Sin copia local todavía: los cambios se guardarán automáticamente al editar.",estadoNota:"La copia vive en el navegador (localStorage). Sirve como respaldo entre sesiones; no sustituye al backend institucional.",funcionarios:"Funcionarios",actividadesPlanificadas:"Actividades planificadas",reposiciones:"Reposiciones de tiempo",celdasOverride:"Celdas de rol con override",exportar:"Exportar JSON",importar:"Importar JSON…",reiniciar:"Reiniciar datos semilla",archivoAria:"Archivo JSON a importar",importadoTitulo:"Snapshot importado",importadoDesc:"Archivo: {archivo}{exportadoEn}",importadoExtra:" · exportado {fecha}",importRechazado:"Importación rechazada",reiniciarTitulo:"Reiniciar a datos semilla",reiniciarSub:"Se descartará la copia local y la app volverá a los datos de ejemplo. Esta acción no se puede deshacer a menos que hayas exportado primero un JSON de respaldo.",reiniciarRec:"Recomendación: pulse Exportar JSON antes de reiniciar.",noDeshacer:"Esta acción no se puede deshacer. Pulse «{accion}» para confirmar.",confirmarReiniciar:"Reiniciar",porQueTitulo:"¿Por qué hay copia local?",porQue:["El navegador guarda automáticamente cada cambio con un retraso de 500 ms para evitar perder información al recargar la página o cerrar el navegador.","La copia permanece en este dispositivo y NO sustituye un backend institucional. Exporte respaldos periódicos para trasladar o proteger la información.","El esquema lleva versión (`v{n}`); si el formato cambia en una nueva versión de la app, se crea un backup automático antes de aplicar la migración.","Exporte un JSON periódicamente como seguro adicional, especialmente antes de cambios mayores o cuando termine la jornada en campo."],backendTitulo:"Almacenamiento durable",backendIDB:"IndexedDB (Dexie) · capacidad amplia, almacenamiento asíncrono",backendLS:"localStorage · respaldo síncrono (~5 MB)",backendNone:"Sin almacenamiento (modo privado estricto)",backendBadgeIDB:"IndexedDB ✓",backendBadgeLS:"localStorage",backendBadgeNone:"Sin durable",migradoLS:"Sus datos previos en localStorage se migraron a IndexedDB automáticamente.",pendientesTitulo:"Estado local",pendientesSub:"No existe sincronización con un servidor remoto.",pendientesCero:"Datos guardados únicamente en este dispositivo.",pendientesN:"{n} cambios locales pendientes de guardar."},configuracion:{aparienciaTitulo:"Apariencia",aparienciaSub:"El tema (claro / oscuro / alto contraste) se aplica a toda la aplicación.",titulo:"Configuración · reglas administrativas",cambiosPendientes:"Cambios pendientes",badgeSucia:"Cambios sin aplicar",badgeOk:"Guardado localmente",reglaDuraIntro:"Regla dura: la herramienta registra y alerta; cambiar una regla no genera pagos, suspensiones ni derechos automáticos. Cualquier ajuste debe estar respaldado por la coordinación administrativa.",coberturaTitulo:"Cobertura · puestos con atención rutinaria diaria",coberturaSub:'Si un día un puesto seleccionado no tiene a nadie asignado a "Atención rutinaria de visitantes", se marca como cobertura crítica (rojo) en la vista Día.',viaticosTitulo:"Viáticos · corte administrativo",diaCorte:"Día de corte (1–28)",mesObjetivo:"Mes objetivo",permitirConsulta:"Permitir consulta tras cierre",permitirConsultaSub:'Si "Permitir consulta tras cierre" está desactivado, después del día de corte la vista de viáticos se oculta. Por defecto se mantiene visible (con banner rojo).',feriadosTitulo:"Feriados · cálculo del primer día laboral",feriadosCheckTitle:"Excluir feriados oficiales al determinar el primer día laboral del mes.",feriadosCheckSub:"Si el 1er día hábil L–V cae en feriado, la rotación T/L se inicia el siguiente día laboral real. Aplica a partir del mes siguiente para no alterar registros ya guardados.",feriadosVer:"Ver feriados cargados ({n} año{plural})",alertasTitulo:"Alertas adicionales (Fase 6)",alertaInactivo:"Persona inactiva con actividad futura",alertaIncapacitado:"Incapacitado con actividad futura",alertaSinModalidad:"Acumulativa sin modalidad",alertaReposicion:"Tiempo trabajado pendiente de reponer",alertasNota:"Cada checkbox controla si se evalúa esa familia de alertas. Si se detectan falsos positivos, puede desactivarse temporalmente sin tocar código.",reposicionTitulo:"Reposición · duración de jornada",horasJornada:"Horas por jornada",horasJornadaSub:"Define cuántas horas equivalen a un día completo (medio día = la mitad). Se usa para calcular el saldo de reposición cuando se repone en partes.",advertenciasTitulo:"Advertencias antes de aplicar:",restaurarPredet:"Restaurar valores predeterminados",restaurarConfirm:"¿Restaurar todas las reglas a sus valores predeterminados? Las alertas y cobertura volverán al estado inicial.",descartar:"Descartar",aplicar:"Aplicar cambios…",confirmarAplicar:"Confirmar y aplicar"},acciones:{aceptar:"Aceptar",cancelar:"Cancelar",cerrar:"Cerrar",guardar:"Guardar",eliminar:"Eliminar",agregar:"Agregar",editar:"Editar",confirmar:"Confirmar",restaurar:"Restaurar",exportar:"Exportar JSON",importar:"Importar JSON…",reiniciar:"Reiniciar datos semilla",aplicarCambios:"Aplicar cambios…",actualizarAhora:"Actualizar ahora",verLuego:"Ver luego",instalar:"Instalar",ahoraNo:"Ahora no"},estados:{activo:"Activo",inactivo:"Inactivo",vacaciones:"De vacaciones",incapacitado:"Incapacitado"},sync:{enLinea:"En línea",sinConexion:"Sin conexión",guardando:"Guardando…",guardado:"Guardado localmente {hora}",sinRespaldo:"Pendiente de primer guardado local",guardadoParcial:"Guardado temporal — respaldo durable falló ({hora})"},print:{imprimir:"Imprimir / Guardar PDF",imprimirCorto:"Imprimir",encabezadoMinisterio:"MINISTERIO DE AMBIENTE Y ENERGÍA",encabezadoSinac:"SISTEMA NACIONAL DE ÁREAS DE CONSERVACIÓN — SINAC",encabezadoAcc:"ÁREA DE CONSERVACIÓN CENTRAL · BLOQUE TAPANTÍ–MACIZO DE LA MUERTE",encabezadoUnidad:"Parque Nacional Los Quetzales (PNLQ)",documentoTitulo:"ROL MENSUAL DE TRABAJO",periodo:"Período: {mes} {anio}",puestoLabel:"Puesto operativo: {puesto}",leyendaTitulo:"Leyenda de códigos",leyendaT:"T = Turno",leyendaL:"L = Libre",leyendaV:"V = Vacaciones",leyendaI:"I = Incapacidad",leyendaO:"O = Otro",firma1:"Elaborado por",firma2:"Revisado por",firma3:"Aprobado por",firmaCargo1:"Administrador(a) de ASP",firmaCargo2:"Coordinación administrativa ACC",firmaCargo3:"Jefatura BTMM",lugarFecha:"Lugar y fecha: ____________________________________________",pieDocumento:"Documento generado por la herramienta PNLQ Gestión de Jornadas · v{version}",pieFecha:"Impreso: {fecha}",pieReglaDura:"La herramienta solo registra y alerta; no genera derechos automáticos. Firmas validan el documento."},pwa:{instalarTitulo:"Instalar PNLQ en este dispositivo",instalarSub:"Acceso sin internet · Pantalla completa · Sin navegador",instalarAria:"Instalar aplicación PNLQ",sinConexion:"Sin conexión — mostrando datos en caché",ultimaCarga:"Última carga local: {fecha}",nuevaVersion:"Nueva versión disponible",versionDesactualizada:"Versión desactualizada",versionActual:"Versión actual: v{actual}",versionDisponible:" · disponible: v{remoto}",urgente:" Actualice para evitar inconsistencias.",sugerido:" Actualice para ver los últimos cambios.",bannerAria:"Nueva versión de PNLQ disponible"}};function Wc(i,s){return!i||!s||typeof i!="string"?i:i.replace(/\{(\w+)\}/g,(l,d)=>s[d]!==void 0?String(s[d]):l)}function YT(i){const s=String(i||"").split(".");let l=BT;for(const d of s)if(l&&Object.prototype.hasOwnProperty.call(l,d))l=l[d];else return i;return l===void 0?i:l}function Oe(i,s){const l=YT(i);return Array.isArray(l)?l.map(d=>Wc(d,s)):Wc(l,s)}function Zc(i){return i===1?"":"s"}function Yn(){return S.useCallback((i,s)=>Oe(i,s),[])}const Ha="1.14.17",Ti="2026-07-21T01:35:18.379Z",vi="de74b84",UT="/BTMM_JORNADAS/version.json";function Ad(i=Ti){try{const s=new Date(i),l=d=>String(d).padStart(2,"0");return`${l(s.getDate())}/${l(s.getMonth()+1)}/${s.getFullYear()} ${l(s.getHours())}:${l(s.getMinutes())}`}catch{return i}}/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),wd=(...i)=>i.filter((s,l,d)=>!!s&&s.trim()!==""&&d.indexOf(s)===l).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var KT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=S.forwardRef(({color:i="currentColor",size:s=24,strokeWidth:l=2,absoluteStrokeWidth:d,className:m="",children:p,iconNode:h,...g},v)=>S.createElement("svg",{ref:v,...KT,width:s,height:s,stroke:i,strokeWidth:d?Number(l)*24/Number(s):l,className:wd("lucide",m),...g},[...h.map(([A,D])=>S.createElement(A,D)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=(i,s)=>{const l=S.forwardRef(({className:d,...m},p)=>S.createElement($T,{ref:p,iconNode:s,className:wd(`lucide-${GT(i)}`,d),...m}));return l.displayName=`${i}`,l};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=re("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=re("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=re("CalendarClock",[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M17.5 17.5 16 16.3V14",key:"akvzfd"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=re("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=re("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=re("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=re("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=re("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=re("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=re("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=re("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=re("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=re("Contrast",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z",key:"j4l70d"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=re("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=re("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=re("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=re("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=re("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=re("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=re("LockOpen",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=re("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=re("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=re("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=re("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=re("OctagonAlert",[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=re("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=re("Pin",[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=re("PlugZap",[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m18 3-4 4h6l-4 4",key:"16psg9"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=re("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=re("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=re("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=re("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=re("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=re("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=re("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=re("Stethoscope",[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=re("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=re("TrafficCone",[["path",{d:"M9.3 6.2a4.55 4.55 0 0 0 5.4 0",key:"flyxqv"}],["path",{d:"M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3",key:"1nlxxg"}],["path",{d:"M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z",key:"vz7x1l"}],["path",{d:"m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8",key:"1xfzlw"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=re("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=re("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=re("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=re("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=re("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=re("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=re("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),u1={"🏠":Ud,"👥":im,"📅":Rd,"📊":Dd,"🗓️":jd,"📋":Jd,"💵":kd,"🛡️":nm,"🔔":_d,"✕":sm,"⚠️":ws,"⚠":ws,"🚨":qd,"✅":Qd,"🩺":tm,"📄":Bd,"📍":$d,"🔥":Yd,"🌲":rm,"⚖️":em,"⟳":Xd,"☰":Hd,"▲":Fd,"▼":Id,"←":Od,"→":zd,"+":Zd,"🔒":Kd,"🔓":Gd,"📴":om,"📡":Wd,"🚦":am},c1={home:Ud,users:im,calendar:Rd,calendarDays:jd,calendarClock:HT,clipboard:Jd,chart:Dd,banknote:kd,shield:nm,shieldAlert:r1,bell:_d,x:sm,alert:ws,danger:qd,check:Qd,info:XT,stethoscope:tm,file:Bd,pin:$d,flame:Yd,trees:rm,scale:em,refresh:Xd,menu:Hd,chevronUp:Fd,chevronDown:Id,chevronLeft:Od,chevronRight:zd,plus:Zd,pencil:n1,trash:s1,lock:Kd,unlock:Gd,eye:ZT,eyeOff:WT,sun:o1,moon:e1,contrast:qT,traffic:am,wifi:l1,wifiOff:om,phone:i1,search:a1,pinMap:t1,plugZap:Wd};function un({name:i,size:s=18,label:l,className:d="",strokeWidth:m=2}){const p=typeof i=="string"?u1[i]??c1[i]:null;if(!p)return u.jsx("span",{"aria-hidden":l?void 0:!0,"aria-label":l,className:d,children:i});const h=l?{role:"img","aria-label":l}:{"aria-hidden":!0,focusable:"false"};return u.jsx(p,{width:s,height:s,strokeWidth:m,className:d,...h})}function d1({view:i,setView:s,nAlertas:l}){const d=Yn(),m=[[d("sidebar.grupoPrincipal"),[["dia",d("view.dia"),"calendar"],["roles",d("view.roles"),"chart"],["planificacion",d("view.planificacion"),"calendarDays"],["funcionarios",d("view.funcionarios"),"users"]]],[d("sidebar.grupoJornadas"),[["planFuncionario",d("view.planFuncionario"),"clipboard"],["adelantos",d("view.adelantos"),"banknote"],["reposicion",d("view.reposicion"),"refresh"],["disponibilidad",d("view.disponibilidad"),"shield"]]],[d("sidebar.grupoControl"),[["alertas",d("view.alertas"),"bell"],["datos",d("view.datos"),"shieldAlert"],["configuracion",d("view.configuracion"),"traffic"]]]];return u.jsxs("aside",{className:"pnlq-no-print hidden w-60 shrink-0 flex-col bg-emerald-900 text-white lg:flex",children:[u.jsxs("div",{className:"border-b border-white/10 p-6",children:[u.jsxs("div",{className:"mb-3 flex items-center gap-3",children:[u.jsx("img",{src:"/BTMM_JORNADAS/acc-logo.svg",alt:"ACC",className:"h-12 w-12 shrink-0 rounded-xl bg-white p-1"}),u.jsxs("div",{children:[u.jsx("div",{className:"text-xs font-semibold uppercase tracking-[0.22em] text-white/60",children:d("app.sinacCR")}),u.jsx("div",{className:"mt-0.5 text-xs font-semibold text-white/70",children:d("app.accNombre")})]})]}),u.jsxs("div",{className:"text-base font-semibold leading-snug",children:[d("app.bloqueLinea1"),u.jsx("br",{}),d("app.bloqueLinea2")]}),u.jsx("div",{className:"mt-1.5 text-xs text-white/65",children:d("app.bloqueSub")})]}),u.jsx("nav",{className:"flex-1 p-3",children:m.map(([p,h])=>u.jsxs("div",{children:[u.jsx("div",{className:"px-3 pb-2 pt-4 text-xs font-semibold uppercase tracking-wider text-white/70",children:p}),h.map(([g,v,A])=>u.jsxs("button",{onClick:()=>s(g),"aria-current":i===g?"page":void 0,className:`mb-1 flex min-h-touch w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${i===g?"bg-white/20 text-white ring-1 ring-white/20":"text-white/80 hover:bg-white/10"}`,children:[u.jsx(un,{name:A,size:18}),v,g==="alertas"&&l>0&&u.jsx("span",{"aria-label":d("bottomNav.alertasAria",{n:l}),className:"ml-auto rounded-full bg-red-700 px-2 py-0.5 text-xs text-white",children:l})]},g))]},p))}),u.jsxs("div",{className:"border-t border-white/10 p-4 text-xs",children:[u.jsx("strong",{className:"font-semibold",children:d("app.perfilNombre")}),u.jsx("div",{className:"text-white/60",children:d("app.perfilCargo")}),u.jsxs("div",{className:"mt-3 border-t border-white/10 pt-3 text-[10px] font-mono leading-tight text-white/65",title:`Versión ${Ha} · build ${Ti} · commit ${vi}`,children:[u.jsxs("div",{children:["v",Ha," ",u.jsx("span",{className:"text-white/60",children:"·"})," ",vi]}),u.jsxs("div",{className:"text-white/60",children:["build ",Ad(Ti)]})]})]})]})}const lm=["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SETIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"],Qv=["D","L","K","M","J","V","S"],m1=["DOMINGO","LUNES","MARTES","MIÉRCOLES","JUEVES","VIERNES","SÁBADO"];function f1(){const{lastSavedAt:i,pendingChanges:s,durableSaveFailed:l}=Za(),d=Yn(),[m,p]=S.useState(typeof navigator<"u"?navigator.onLine:!0);S.useEffect(()=>{const D=()=>p(!0),N=()=>p(!1);return window.addEventListener("online",D),window.addEventListener("offline",N),()=>{window.removeEventListener("online",D),window.removeEventListener("offline",N)}},[]);const h=i?new Date(i).toLocaleTimeString("es-CR",{hour:"2-digit",minute:"2-digit"}):null,g=l&&s===0,v=s>0?d("sync.guardando"):g?d("sync.guardadoParcial",{hora:h??""}):h?d("sync.guardado",{hora:h}):d("sync.sinRespaldo"),A=`${d(m?"sync.enLinea":"sync.sinConexion")} · ${v}`;return u.jsxs("span",{role:"status","aria-label":A,title:A,className:`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium ${g?"border-amber-300 bg-amber-50 text-amber-800":m?"border-slate-200 bg-white text-slate-500":"border-amber-300 bg-amber-50 text-amber-800"}`,children:[u.jsx("span",{"aria-hidden":"true",className:`h-2 w-2 shrink-0 rounded-full ${s>0?"animate-pulse bg-sky-500":g?"bg-amber-500":m?"bg-emerald-500":"bg-amber-500"}`}),u.jsx("span",{className:"hidden sm:inline",children:v}),h&&u.jsx("span",{className:"sm:hidden",children:h})]})}var um=Ld();const Ga=[];let Xc=!1,Ua=0,ed="";function p1(i){if(i.key!=="Escape")return;const s=Ga[Ga.length-1];s&&(typeof i.stopImmediatePropagation=="function"&&i.stopImmediatePropagation(),i.stopPropagation(),s())}function T1(){Xc||typeof document>"u"||(document.addEventListener("keydown",p1,!0),Xc=!0)}function cm(i){return T1(),Ga.push(i),()=>{const s=Ga.lastIndexOf(i);s>=0&&Ga.splice(s,1)}}function v1(i){S.useEffect(()=>{if(i)return cm(()=>i())},[i])}const L1=["a[href]","area[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(", ");function nd(i){return i?Array.from(i.querySelectorAll(L1)).filter(s=>!s.hasAttribute("aria-hidden")&&s.offsetParent!==null):[]}function dm({open:i=!0,onClose:s,initialFocusRef:l}={}){const d=S.useRef(null),m=S.useRef(null),p=S.useId(),h=S.useId();return S.useEffect(()=>{if(!i)return;m.current=typeof document<"u"?document.activeElement:null;const g=d.current;if(!g)return;typeof document<"u"&&(Ua===0&&(ed=document.body.style.overflow,document.body.style.overflow="hidden"),Ua+=1);const v=()=>{const x=(l==null?void 0:l.current)??nd(g)[0]??g;try{x.focus({preventScroll:!0})}catch{}},A=window.setTimeout(v,0),D=x=>{if(x.key!=="Tab")return;const V=nd(g);if(V.length===0){x.preventDefault();return}const F=V[0],_=V[V.length-1],K=document.activeElement;x.shiftKey?(K===F||!g.contains(K))&&(x.preventDefault(),_.focus()):(K===_||!g.contains(K))&&(x.preventDefault(),F.focus())};g.addEventListener("keydown",D);const N=s?cm(()=>s()):void 0;return()=>{window.clearTimeout(A),g.removeEventListener("keydown",D),N==null||N(),typeof document<"u"&&(Ua=Math.max(0,Ua-1),Ua===0&&(document.body.style.overflow=ed));const x=m.current;if(x&&typeof x.focus=="function")try{x.focus({preventScroll:!0})}catch{}}},[i,s,l]),{ref:d,titleId:p,descId:h}}const td={sm:"max-w-sm",md:"max-w-xl",lg:"max-w-2xl",xl:"max-w-3xl","2xl":"max-w-4xl"};function mm({open:i=!0,onClose:s,title:l,description:d,children:m,actions:p,size:h="lg",closeOnBackdrop:g=!0,contentClassName:v=""}){const{ref:A,titleId:D,descId:N}=dm({open:i,onClose:s});if(!i)return null;const x=td[h]||td.lg,V=u.jsx("div",{className:"pnlq-modal-backdrop fixed inset-0 z-50 flex items-end justify-center bg-black/55 p-0 backdrop-blur-sm md:items-center md:p-4",onClick:F=>{g&&F.target===F.currentTarget&&(s==null||s())},children:u.jsxs("div",{ref:A,role:"dialog","aria-modal":"true","aria-labelledby":l?D:void 0,"aria-describedby":d?N:void 0,tabIndex:-1,className:`pnlq-modal-panel flex max-h-[94vh] max-h-[94dvh] w-full ${x} flex-col overflow-hidden rounded-t-3xl bg-surface text-ink shadow-2xl outline-none md:rounded-3xl`,style:{maxHeight:"calc(var(--visual-viewport-height, 100dvh) - 1rem)"},children:[u.jsx("div",{"aria-hidden":"true",className:"mx-auto mt-2 h-1.5 w-10 shrink-0 rounded-full bg-line md:hidden"}),(l||d)&&u.jsxs("header",{className:"pnlq-modal-header flex items-start justify-between gap-3 border-b border-line p-5",children:[u.jsxs("div",{className:"min-w-0",children:[l&&u.jsx("h2",{id:D,className:"text-lg font-semibold text-ink",children:l}),d&&u.jsx("p",{id:N,className:"mt-1 text-sm text-ink-muted",children:d})]}),u.jsx("button",{type:"button",onClick:s,"aria-label":Oe("acciones.cerrar"),className:"-mr-1 inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl text-ink-muted hover:bg-surface-alt hover:text-ink",children:u.jsx(un,{name:"x",size:20,label:Oe("acciones.cerrar")})})]}),u.jsx("div",{className:`pnlq-modal-body flex-1 overflow-y-auto p-5 ${v}`,children:m}),p&&u.jsx("footer",{className:"pnlq-modal-footer flex flex-wrap justify-between gap-2 border-t border-line bg-surface-alt p-4 pb-[max(1rem,env(safe-area-inset-bottom))]",children:p})]})});return typeof document<"u"?um.createPortal(V,document.body):V}const Ms=390,Es=844,fm="mobile-preview";function h1(i=window.location){return new URLSearchParams(i.search).get(fm)==="1"}function P1(i=window.location){const s=new URL(i.href);return s.searchParams.set(fm,"1"),s.toString()}const ad=["planificacion","planFuncionario"];function g1({view:i,setView:s,month:l,setMonth:d,year:m,setYear:p,compact:h,setCompact:g}){const v=Yn(),[A,D]=S.useState(!1),[N,x]=S.useState(!1),V=h1(),F=new Date().getFullYear(),_=Array.from({length:11},(H,W)=>F-5+W),K=H=>{let W=l+H,se=m;W<0&&(W=11,se-=1),W>11&&(W=0,se+=1),d(W),p(se)},ce=()=>{const H=new Date;d(H.getMonth()),p(H.getFullYear())},te=ad.includes(i),oe=te||i==="roles";return u.jsxs("header",{className:`pnlq-topbar pnlq-no-print sticky top-0 border-line bg-surface/95 shadow-sm backdrop-blur lg:block lg:border-b lg:px-6 lg:py-3 ${te?"block border-b px-4 py-2":oe?"hidden border-b md:block md:px-4 md:py-2":"hidden"} ${A?"z-50":"z-30"}`,children:[u.jsxs("div",{className:"pnlq-topbar-inner flex flex-col gap-2 xl:flex-row xl:items-center xl:justify-between",children:[u.jsx("div",{className:"flex items-center justify-between gap-2",children:u.jsx("div",{className:"min-w-0",children:u.jsx("h1",{className:"hidden text-xl font-semibold tracking-tight text-ink lg:block",children:v("app.titulo")})})}),u.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[ad.includes(i)&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{role:"group","aria-label":v("topbar.periodo"),className:"inline-flex items-stretch overflow-hidden rounded-xl border border-line bg-surface shadow-sm",children:[u.jsx("button",{onClick:()=>K(-1),"aria-label":v("topbar.mesAnterior"),className:"inline-flex min-h-touch min-w-touch items-center justify-center px-2 text-ink-muted hover:bg-surface-alt",children:u.jsx(un,{name:"chevronLeft",size:16})}),u.jsx("select",{"aria-label":v("topbar.mes"),className:"min-h-touch border-x border-line bg-surface px-1.5 text-sm font-medium text-ink outline-none sm:px-2 dark:[color-scheme:dark]",value:l,onChange:H=>d(Number(H.target.value)),children:lm.map((H,W)=>u.jsx("option",{value:W,children:H},H))}),u.jsx("select",{"aria-label":v("topbar.anio"),className:"min-h-touch bg-surface px-1.5 text-sm font-medium text-ink outline-none sm:px-2 dark:[color-scheme:dark]",value:m,onChange:H=>p(Number(H.target.value)),children:_.map(H=>u.jsx("option",{children:H},H))}),u.jsx("button",{onClick:()=>K(1),"aria-label":v("topbar.mesSiguiente"),className:"inline-flex min-h-touch min-w-touch items-center justify-center border-l border-line px-2 text-ink-muted hover:bg-surface-alt",children:u.jsx(un,{name:"chevronRight",size:16})})]}),u.jsx("button",{type:"button",onClick:ce,className:"inline-flex min-h-touch items-center rounded-xl border border-line bg-surface px-3 text-sm font-semibold text-brand hover:bg-brand-soft",children:v("topbar.hoy")})]}),i==="roles"&&u.jsx("button",{onClick:()=>g(!h),className:"hidden min-h-touch items-center rounded-xl border border-line bg-surface px-3 py-2 text-sm font-medium text-ink hover:bg-surface-alt md:inline-flex","aria-pressed":h,children:v(h?"topbar.vistaAmplia":"topbar.vistaCompacta")}),!V&&u.jsxs("button",{type:"button",onClick:()=>D(!0),className:"hidden min-h-touch items-center gap-2 rounded-xl border border-brand bg-brand-soft px-3 text-sm font-semibold text-ink hover:opacity-90 lg:inline-flex","aria-label":v("topbar.previewMobile"),children:[u.jsx(un,{name:"phone",size:18}),v("topbar.previewMobileCorto"),u.jsx("span",{className:"rounded-md bg-surface px-1.5 py-0.5 text-xs text-ink-muted",children:"Temporal"})]}),u.jsx("span",{className:"hidden lg:inline-flex",children:u.jsx(f1,{})})]})]}),u.jsxs(mm,{open:A,onClose:()=>D(!1),title:v("topbar.previewTitle"),description:v("topbar.previewDesc",{ancho:N?Es:Ms,alto:N?Ms:Es}),size:"2xl",contentClassName:"bg-slate-200 p-3",children:[u.jsxs("div",{className:"mb-3 flex justify-center",role:"group","aria-label":v("topbar.previewOrientation"),children:[u.jsx("button",{type:"button",onClick:()=>x(!1),"aria-pressed":!N,className:`min-h-touch rounded-l-xl border px-4 text-sm font-semibold ${N?"border-line bg-surface text-ink":"border-brand bg-brand text-brand-fg"}`,children:v("topbar.previewVertical")}),u.jsx("button",{type:"button",onClick:()=>x(!0),"aria-pressed":N,className:`min-h-touch rounded-r-xl border border-l-0 px-4 text-sm font-semibold ${N?"border-brand bg-brand text-brand-fg":"border-line bg-surface text-ink"}`,children:v("topbar.previewHorizontal")})]}),u.jsx("div",{className:"mx-auto max-w-full overflow-hidden rounded-[2rem] border-[6px] border-slate-900 bg-white shadow-2xl transition-[width]",style:{width:`${(N?Es:Ms)+12}px`},children:u.jsx("iframe",{title:v("topbar.previewFrameTitle"),src:P1(),className:`block w-full bg-white ${N?"h-[min(390px,calc(100dvh-12rem))] min-h-[280px]":"h-[min(844px,calc(100dvh-12rem))] min-h-[480px]"}`})})]})]})}function rd(i){return i>99?"99+":String(i)}function y1({view:i,setView:s,nAlertas:l,hidden:d=!1}){const m=Yn(),[p,h]=S.useState(!1),g=[["dia",m("bottomNav.dia"),"calendar"],["roles",m("bottomNav.roles"),"chart"],["planificacion",m("bottomNav.plan"),"calendarDays"],["funcionarios",m("bottomNav.personal"),"users"]],v=[["alertas",m("bottomNav.alertas"),"bell"],["adelantos",m("bottomNav.viaticos"),"banknote"],["reposicion",m("bottomNav.reposicion"),"refresh"],["disponibilidad",m("bottomNav.disponib"),"shield"],["planFuncionario",m("bottomNav.planFunc"),"clipboard"],["datos",m("bottomNav.datos"),"shieldAlert"],["configuracion",m("bottomNav.config"),"traffic"]],A=v.some(([N])=>N===i),D=N=>{s(N),h(!1)};return d?null:u.jsxs(u.Fragment,{children:[u.jsx("nav",{className:"pnlq-bottom-nav pnlq-no-print fixed bottom-0 left-0 right-0 z-40 border-t border-line bg-surface pb-[env(safe-area-inset-bottom)] lg:hidden","aria-label":m("bottomNav.navAria"),children:u.jsxs("div",{className:"pnlq-bottom-nav-grid grid grid-cols-5",children:[g.map(([N,x,V])=>u.jsxs("button",{type:"button",onClick:()=>D(N),"aria-current":i===N?"page":void 0,className:`pnlq-bottom-nav-item relative flex min-h-touch flex-col items-center justify-center gap-1 py-2 text-xs font-semibold ${i===N?"text-brand":"text-ink-muted"}`,children:[u.jsx(un,{name:V,size:22}),x]},N)),u.jsxs("button",{type:"button",onClick:()=>h(!0),"aria-expanded":p,"aria-current":A?"page":void 0,className:`pnlq-bottom-nav-item relative flex min-h-touch flex-col items-center justify-center gap-1 py-2 text-xs font-semibold ${p||A?"text-brand":"text-ink-muted"}`,children:[u.jsx(un,{name:"menu",size:22}),m("bottomNav.mas"),l>0&&u.jsx("span",{className:"absolute right-[22%] top-1 min-w-5 rounded-full bg-critical px-1 text-center text-[11px] font-bold leading-5 text-ink-inverse","aria-label":m("bottomNav.alertasAria",{n:l}),children:rd(l)})]})]})}),u.jsx(mm,{open:p,onClose:()=>h(!1),title:m("bottomNav.masTitulo"),description:m(A?`view.${i}`:"bottomNav.masSub"),size:"sm",contentClassName:"p-3 pb-[max(1rem,env(safe-area-inset-bottom))]",children:u.jsx("div",{className:"grid grid-cols-2 gap-2",children:v.map(([N,x,V])=>u.jsxs("button",{type:"button",onClick:()=>D(N),"aria-current":i===N?"page":void 0,className:`relative flex min-h-[56px] items-center gap-3 rounded-xl px-3 text-left text-sm font-semibold ${i===N?"bg-brand text-brand-fg":"border border-line bg-surface-alt text-ink"}`,children:[u.jsx(un,{name:V,size:20}),u.jsx("span",{children:x}),N==="alertas"&&l>0&&u.jsx("span",{className:"ml-auto rounded-full bg-critical px-2 py-0.5 text-xs font-bold text-ink-inverse",children:rd(l)})]},N))})})]})}const M1=new Set(["dia","roles","planificacion","funcionarios","alertas","adelantos","reposicion","disponibilidad","planFuncionario","datos","configuracion"]),pm=new Set(["roles","planificacion","planFuncionario"]);function Qs(i){return i==="dashboard"?"dia":M1.has(i)?i:"dia"}function E1(i,s){const l=Number(i),d=Number(s);return Number.isInteger(l)&&l>=2e3&&l<=2200&&Number.isInteger(d)&&d>=1&&d<=12?{year:l,month:d-1}:null}function N1(i=""){const s=String(i).replace(/^#\/?/,""),[l,d,m]=s.split("/"),p=Qs(l||"dia"),h={view:p};return p==="dia"&&/^\d{4}-\d{2}-\d{2}$/.test(d||"")&&(h.diaVista=d),pm.has(p)&&Object.assign(h,E1(d,m)||{}),h}function id({view:i,year:s,month:l,diaVista:d}){const m=Qs(i);return m==="dia"?`#/dia/${d}`:pm.has(m)?`#/${m}/${s}/${wn(l+1)}`:`#/${m}`}function C1({view:i,setView:s,year:l,setYear:d,month:m,setMonth:p,diaVista:h,setDiaVista:g}){const v=S.useCallback(()=>{const A=N1(window.location.hash);s(A.view),A.year!=null&&d(A.year),A.month!=null&&p(A.month),A.diaVista&&g(A.diaVista)},[g,p,s,d]);return S.useEffect(()=>(v(),window.addEventListener("popstate",v),window.addEventListener("hashchange",v),()=>{window.removeEventListener("popstate",v),window.removeEventListener("hashchange",v)}),[v]),S.useEffect(()=>{const A=id({view:i,year:l,month:m,diaVista:h});window.location.hash!==A&&window.history.replaceState({},"",A)},[h,m,i,l]),S.useCallback(A=>{const D=Qs(A),N=id({view:D,year:l,month:m,diaVista:h});window.location.hash!==N&&window.history.pushState({},"",N),s(D)},[h,m,s,l])}function x1(){const[i,s]=S.useState(!1);return S.useEffect(()=>{const l=window.visualViewport;if(!l)return;const d=()=>{const p=window.innerHeight-l.height>150;s(p),document.documentElement.style.setProperty("--visual-viewport-height",`${l.height}px`)};return d(),l.addEventListener("resize",d),l.addEventListener("scroll",d),()=>{l.removeEventListener("resize",d),l.removeEventListener("scroll",d),document.documentElement.style.removeProperty("--visual-viewport-height")}},[]),i}class S1 extends S.Component{constructor(l){super(l);li(this,"handleReintentar",()=>{this.setState({hasError:!1,error:null})});li(this,"handleRecargar",()=>{window.location.reload()});li(this,"handleDescargarRespaldo",()=>{try{const l=xs();if(!l)return;const d=CT(l),m=new Blob([JSON.stringify(d,null,2)],{type:"application/json"}),p=URL.createObjectURL(m),h=document.createElement("a");h.href=p,h.download=`pnlq-respaldo-de-emergencia-${VT()}.json`,document.body.appendChild(h),h.click(),document.body.removeChild(h),URL.revokeObjectURL(p)}catch{}});this.state={hasError:!1,error:null}}static getDerivedStateFromError(l){return{hasError:!0,error:l}}componentDidCatch(l,d){console.error("Error de aplicación capturado por ErrorBoundary:",l,d==null?void 0:d.componentStack)}render(){var d;if(!this.state.hasError)return this.props.children;const l=(()=>{try{return!!xs()}catch{return!1}})();return u.jsx("div",{role:"alert",className:"flex min-h-screen items-center justify-center bg-slate-100 p-4 text-slate-950",children:u.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-red-300 bg-white p-6 shadow-lg",children:[u.jsx("p",{className:"text-lg font-bold text-red-900",children:"Ocurrió un error inesperado"}),u.jsx("p",{className:"mt-2 text-sm text-slate-700",children:"La aplicación encontró un problema y no puede continuar mostrando esta pantalla. Tus datos guardados en este dispositivo no se han borrado."}),u.jsxs("div",{className:"mt-5 flex flex-col gap-2",children:[u.jsx("button",{type:"button",onClick:this.handleReintentar,className:"min-h-touch rounded-xl bg-emerald-800 px-4 text-sm font-semibold text-white hover:bg-emerald-700",children:"Reintentar"}),u.jsx("button",{type:"button",onClick:this.handleRecargar,className:"min-h-touch rounded-xl border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-800 hover:bg-slate-50",children:"Recargar la aplicación"}),l&&u.jsx("button",{type:"button",onClick:this.handleDescargarRespaldo,className:"min-h-touch rounded-xl border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-800 hover:bg-slate-50",children:"Descargar mis datos por seguridad"})]}),((d=this.state.error)==null?void 0:d.message)&&u.jsxs("p",{className:"mt-4 break-words rounded-lg bg-slate-50 p-2 text-[11px] text-slate-500",children:["Detalle técnico: ",this.state.error.message]})]})})}}const V1=String.raw`Pestaña 1


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
`,b1=String.raw`	SÁBADO
	

	

	

	

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
`,A1=String.raw`JB capacitación VDA
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
`,w1=String.raw`KV programar actividades de EA tomar en cuenta escuelas del humo de peji y el liceo de peji/atención de turismo
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
`,k1=String.raw`JV informe voluntarios UCR de semana santa en PNLQ/viático combustible/turismo
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
`,_1=String.raw`JB cherpiritos/denuncia sanchez
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
`,j1=String.raw`PNTMM
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
`,R1=String.raw`JV  acompaña a la persona de DA a realizar inspección
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


`,D1=String.raw`

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










 


	

	

	

	

	

	

	





Pestaña 2`,I1=[V1,b1,A1,w1,k1,_1,j1,R1,D1].join(""),O1={PNTMM:"Parque Nacional Tapantí Macizo de la Muerte",PNLQ:"Parque Nacional Los Quetzales",PLE:"Puesto La Esperanza",PVM:"Puesto Villa Mills"},od={ENERO:1,FEBRERO:2,MARZO:3,ABRIL:4,MAYO:5,JUNIO:6,JULIO:7,AGOSTO:8,SETIEMBRE:9,SEPTIEMBRE:9,OCTUBRE:10,NOVIEMBRE:11,DICIEMBRE:12},z1={ES:"Errol Salazar",ME:"Mayra Espinoza",YC:"Yeison Cortés",KM:"Kenneth Mena",FC:"Fabricio Carbonell",MN:"Monserrath Navarro",JPG:"Juan Pablo Granados",JG:"Juan Pablo Granados",PG:"Juan Pablo Granados",JP:"Juan Pablo Granados",LV:"Laura Valverde",JV:"Jetzelly Villalobos",DT:"Diana Tencio",KV:"Karen Valle",PS:"Pablo Sánchez",YE:"Yolanda Elizondo",MS:"Mariano Solís",MSA:"Mariano Solís",GP:"Guillermo Pérez",CC:"Carlos Cordero",JB:"Josué Brenes",AA:"Alexander Alvarado"},F1={MH:"MH",GG:"GG",MSG:"MSG",DA:"Dirección de Agua",GJ:"GJ",JC:"JC",IV:"IV",YV:"YV",VB:"VB",ASVO:"ASVO",TCU:"TCU",UCR:"UCR",TEC:"TEC",ICE:"ICE",ACLAP:"ACLAP",COVIRENA:"COVIRENA",COVIRENAS:"COVIRENA",PANTHERA:"Panthera",UNED:"UNED",INA:"INA",MOPT:"MOPT",FUNDECOR:"FUNDECOR",CEDARENA:"CEDARENA"},Q1=new Set(["DOMINGO","LUNES","MARTES","MIÉRCOLES","JUEVES","VIERNES","SÁBADO"]),J1=i=>i.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase(),sd=(i,s)=>new RegExp(`(^|[^A-Z])${s}([^A-Z]|$)`).test(i);function B1(i){const s=i.replace(/[^A-Za-z]/g,"").toUpperCase();return s.startsWith("PNTMM")?"PNTMM":["PNLQ","PLE","PVM"].includes(s)?s:""}function Y1(i){const s=[],l=[],d=p=>{s.includes(p)||s.push(p)},m=p=>{l.some(h=>h.nombre===p)||l.push({nombre:p,contacto:""})};for(const p of i){const h=J1(p);for(const[g,v]of Object.entries(z1).sort((A,D)=>D[0].length-A[0].length))sd(h,g)&&d(v);for(const[g,v]of Object.entries(F1))sd(h,g)&&m(v);/\bENZO\b/.test(h)&&m("Enzo"),/\bALEX(?:ANDER)?\b/.test(h)&&m("Alex"),/\bMERYLL(?:\s+ARIAS)?\b/.test(h)&&m("Meryll Arias"),/\bLUIS\s*DAVID\b|\bLUISDA\b/.test(h)&&m("Luis David"),/\bVOLUNTARI(?:O|A|OS|AS)\b/.test(h)&&m("Voluntariado"),/\bINVESTIGADOR(?:A|ES|AS)?\b/.test(h)&&m("Investigadores"),/\bPASANTES?\b/.test(h)&&m("Pasantes"),/\bESTUDIANTES?\b/.test(h)&&m("Estudiantes")}return{funcionarios:s,otrosParticipantes:l}}function U1(i){const s=new Map;let l=0,d=0,m="";for(const p of i.split(/\r?\n/)){const h=p.trim();if(!h||Q1.has(h)||/^_+$/.test(h)||h==="De"||/^Pestaña\s+\d+$/i.test(h))continue;const g=h.match(/^([A-ZÁÉÍÓÚÑ]+) 2026$/);if(g&&od[g[1]]){l=od[g[1]],d=0,m="";continue}if(/^\d{1,2}$/.test(h)){d=Number(h),m="";continue}const v=B1(h);if(v){m=v;continue}if(!l||!d||!m)continue;const A=`${l}-${d}-${m}`;s.has(A)||s.set(A,{mes:l,dia:d,sitio:m,textos:[]}),s.get(A).textos.push(h)}return[...s.values()].map((p,h)=>{const g=`2026-${String(p.mes).padStart(2,"0")}-${String(p.dia).padStart(2,"0")}`,{funcionarios:v,otrosParticipantes:A}=Y1(p.textos);return{id:`plan2026-${String(h+1).padStart(4,"0")}`,titulo:`Programación institucional — ${p.sitio}`,categoria:"Otra actividad",inicio:g,fin:g,unDia:!0,horaInicio:"08:00",horaFin:"16:00",funcionarios:v,otrosParticipantes:A,lugar:O1[p.sitio],observaciones:p.textos.map(D=>`• ${D}`).join(`
`),viatico:!1}})}async function G1(){const i=U1(I1);if(!i.length)throw new Error("La planificación 2026 no produjo actividades válidas.");return i}const ld="btmm:planificacion2026:importada:v2";function K1(){const{setActividadesPlan:i}=Za();return S.useEffect(()=>{if(window.localStorage.getItem(ld)==="1")return;let s=!1;return(async()=>{try{const l=await G1();if(s)return;i(l),window.localStorage.setItem(ld,"1")}catch(l){console.error("No fue posible importar PLANIFICACION BTMM 2026",l)}})(),()=>{s=!0}},[i]),null}const ud={flat:"bg-surface",inset:"bg-surface-inset",elevated:"border border-line bg-surface shadow-sm",interactive:"border border-line bg-surface transition-colors hover:border-line-strong hover:bg-surface-alt"};function ea({title:i,icon:s,action:l,children:d,collapsible:m=!1,defaultOpen:p=!0,variant:h="flat",className:g="",ariaLabel:v}){const[A,D]=S.useState(p),N=!m||A;return u.jsxs("div",{className:`pnlq-card rounded-lg p-4 ${ud[h]??ud.flat} ${g}`,children:[u.jsxs("div",{className:`pnlq-card-header flex flex-wrap items-center justify-between gap-3 ${N?"mb-3":""}`,children:[m?u.jsxs("button",{type:"button",onClick:()=>D(x=>!x),"aria-expanded":A,"aria-label":v,className:"flex min-h-touch flex-1 items-center gap-2 text-left text-base font-semibold text-ink hover:text-brand",children:[u.jsx(un,{name:A?"chevronDown":"chevronRight",size:18,className:"shrink-0 text-ink-subtle"}),u.jsx("span",{children:s}),i]}):u.jsxs("div",{className:"flex items-center gap-2 text-base font-semibold text-ink",children:[u.jsx("span",{children:s}),i]}),l]}),N&&d]})}function ct({children:i,className:s="",bordered:l=!1}){return u.jsx("span",{className:`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${l?"border":""} ${s}`,children:i})}function $1(i){return i.split(" ").slice(0,2).map(s=>s[0]).join("").toUpperCase()}function H1(i){return["bg-emerald-700 text-white","bg-sky-700 text-white","bg-rose-700 text-white","bg-amber-700 text-white","bg-purple-700 text-white"][i.charCodeAt(0)%5]}function Jv(i){return{Activo:"bg-emerald-100 text-emerald-900 border-emerald-200","De vacaciones":"bg-sky-100 text-sky-900 border-sky-200",Incapacitado:"bg-red-100 text-red-900 border-red-200",Inactivo:"bg-slate-100 text-slate-700 border-slate-200"}[i]||"bg-slate-100 text-slate-700 border-slate-200"}function cd(i,s){const l=String(i||"").toUpperCase();return s&&!l?"bg-slate-600 text-white border-slate-700":l.startsWith("T")?"bg-emerald-700 text-white border-emerald-800":l.startsWith("I")?"bg-rose-700    text-white border-rose-800":l.startsWith("V")?"bg-sky-700     text-white border-sky-800":l.startsWith("L")?"bg-amber-700   text-white border-amber-800":l.startsWith("O")?"bg-violet-700  text-white border-violet-800":l?s?"bg-slate-600 text-white border-slate-700":"bg-emerald-700 text-white border-emerald-800":s?"bg-slate-600 text-white border-slate-700":"bg-slate-400 text-white border-slate-500"}function di({name:i}){return u.jsx("div",{className:`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${H1(i)}`,children:$1(i)})}const dd={half:"h-[60vh]",full:"max-h-[92vh]"};function Tm({open:i,onClose:s,title:l,snapPoint:d="full",children:m}){const p=S.useRef(null),h=S.useRef({startY:0,dragging:!1});S.useEffect(()=>{if(!i)return;const D=N=>{N.key==="Escape"&&s()};return document.addEventListener("keydown",D),()=>document.removeEventListener("keydown",D)},[i,s]),S.useEffect(()=>(i?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[i]);const g=S.useCallback(D=>{h.current={startY:D.touches[0].clientY,dragging:!0}},[]),v=S.useCallback(D=>{if(!h.current.dragging)return;const N=D.touches[0].clientY-h.current.startY;N>0&&p.current&&(p.current.style.transform=`translateY(${N}px)`)},[]),A=S.useCallback(D=>{if(!h.current.dragging)return;const N=D.changedTouches[0].clientY-h.current.startY;h.current.dragging=!1,p.current&&(p.current.style.transform=""),N>80&&s()},[s]);return typeof document>"u"?null:um.createPortal(u.jsxs(u.Fragment,{children:[u.jsx("div",{"aria-hidden":"true",onClick:s,className:["fixed inset-0 z-40 bg-black/50 transition-opacity duration-300",i?"opacity-100":"pointer-events-none opacity-0"].join(" ")}),u.jsxs("div",{ref:p,role:"dialog","aria-modal":"true","aria-label":l,className:["fixed inset-x-0 bottom-0 z-50 flex flex-col rounded-t-2xl bg-white shadow-2xl","transition-transform duration-300 ease-out",dd[d]??dd.full,i?"translate-y-0":"translate-y-full"].join(" "),children:[u.jsx("div",{className:"flex cursor-grab touch-none items-center justify-center pb-1 pt-3",onTouchStart:g,onTouchMove:v,onTouchEnd:A,"aria-hidden":"true",children:u.jsx("span",{className:"h-1 w-10 rounded-full bg-slate-300"})}),l&&u.jsxs("div",{className:"flex items-center justify-between border-b border-slate-100 px-5 pb-3 pt-1",children:[u.jsx("h2",{className:"text-base font-semibold text-slate-900",children:l}),u.jsx("button",{onClick:s,"aria-label":"Cerrar",className:"inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700",children:u.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",children:u.jsx("path",{d:"M18 6 6 18M6 6l12 12"})})})]}),u.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-8 pt-4",children:m})]})]}),document.body)}function vm(i,s,l,d,m){return`${i}-${s+1}-${l}-${d}-${m}`}function q1(i,s,l,d){return`CFG-${i}-${s+1}-${l}-${d}`}function Lm(i){const s=String(i||"10x5").toLowerCase();if(s.includes("administrativo"))return{trabajo:5,libre:2,administrativo:!0};const l=s.split("x");return{trabajo:Number(l[0])||10,libre:Number(l[1])||5,administrativo:!1}}function W1(i,s,l,d,m){const p=Lm(i);if(p.administrativo){const v=new Date(d,m,s).getDay();return v>=1&&v<=5?`T${v}`:v===6?"L1":"L2"}const h=p.trabajo+p.libre,g=(s-l)%h;return s<l?"":g<p.trabajo?`T${g+1}`:`L${g-p.trabajo+1}`}function Js(i){return String(i||"").toUpperCase().startsWith("T")}function Z1(i){const s=String(i||"").toUpperCase();return s.startsWith("T")?"Turno":s.startsWith("L")?"Libre":s.startsWith("V")?"Vacaciones":s.startsWith("I")?"Incapacidad":s.startsWith("O")?"Otro":s?"Turno":"Sin marcar"}function Li(i){const s=String(i||"").toUpperCase();return s.startsWith("T")?"T":s.startsWith("L")?"L":s.startsWith("V")?"V":s.startsWith("I")?"I":s.startsWith("O")?"O":""}function X1(i,s,l){const d=String(i||"").toUpperCase();if(!d)return"";const m=Lm(l);return d==="T"?`T${(s-1)%m.trabajo+1}`:d==="L"?`L${(s-1)%m.libre+1}`:`${d}${s}`}function Bs(i,s){return i.find(l=>l.nombre===s)}function hm(i,s,l,d,m){const p=Bs(i,m);return p&&(s[q1(l,d,p.puestoOperativo||"Puesto Quetzales",m)]||p.modalidad)||"10x5"}function Pi(i,s,l,d,m,p,h=null){const g=Bs(i,m);if(!g)return"";const v=g.puestoOperativo||"Puesto Quetzales",A=wT(l,d,h);return s[vm(l,d,v,m,p)]??W1(hm(i,s,l,d,m),p,A,l,d)}function ev({roleData:i,personas:s,year:l,month:d,persona:m,dia:p,categoria:h,feriados:g=null}){const v=Bs(s,m),A=(v==null?void 0:v.puestoOperativo)||"Puesto Quetzales",D=hm(s,i,l,d,m),N=Array.from({length:xd(l,d)},(_,K)=>K+1),x={};for(const _ of N)x[_]=Li(Pi(s,i,l,d,m,_,g));x[p]=h;const V=nv({days:N,categorias:x,modalidad:D}),F={};for(const _ of N)F[vm(l,d,A,m,_)]=V[_];return F}function nv({days:i,categorias:s,modalidad:l}){const d={};let m=null,p=0;return i.forEach(h=>{const g=s[h]||"";if(!g){m=null,p=0,d[h]="";return}g!==m?(m=g,p=1):p+=1,d[h]=X1(g,p,l)}),d}const Bv=["Administrador de ASP","Guardaparques","Asistente Administrativo","Técnico en Recursos Naturales","Personal Apoyo ONG-Invest-Volunt"],Yv=["Activo","Inactivo","De vacaciones","Incapacitado"],Uv=["Propiedad","Interino","ONG-Invest-Volunt"],Gv=["Horario administrativo L-V","10x5","12x6","14x7","16x8","20x10"],md=[...ta,"Secretaría Ejecutiva/Dirección ACC"],ks="Atención rutinaria de visitantes",tv=[ks];function fd(i,s){return i.filter(l=>s>=l.inicio&&s<=(l.fin||l.inicio))}function av(i,s,l,d,m,p,h=null){return(i.funcionarios||[]).filter(g=>!Js(Pi(m,p,l,d,g,s,h)))}function rv({onSwipeLeft:i,onSwipeRight:s,threshold:l=60,restraint:d=80,allowedTime:m=600}={}){const p=S.useRef(null);return S.useEffect(()=>{const h=p.current;if(!h)return;let g=0,v=0,A=0,D=!1;const N=V=>{var K;const F=(K=V.changedTouches)==null?void 0:K[0];if(!F)return;const _=V.target instanceof Element?V.target:null;D=!!(_!=null&&_.closest('button, a, input, select, textarea, [role="button"], [data-swipe-ignore], table, .overflow-x-auto, .overflow-auto'))||F.clientX<24||F.clientX>window.innerWidth-24,g=F.clientX,v=F.clientY,A=Date.now()},x=V=>{var te;const F=(te=V.changedTouches)==null?void 0:te[0];if(!F||D)return;const _=F.clientX-g,K=F.clientY-v;Date.now()-A>m||Math.abs(_)<l||Math.abs(K)>d||Math.abs(_)<=Math.abs(K)*1.2||(_<0?i==null||i():s==null||s())};return h.addEventListener("touchstart",N,{passive:!0}),h.addEventListener("touchend",x,{passive:!0}),()=>{h.removeEventListener("touchstart",N),h.removeEventListener("touchend",x)}},[i,s,l,d,m]),p}const pd="(max-width: 767px)";function Pm(){const[i,s]=S.useState(()=>typeof window<"u"?window.matchMedia(pd).matches:!1);return S.useEffect(()=>{const l=window.matchMedia(pd),d=m=>s(m.matches);return l.addEventListener("change",d),()=>l.removeEventListener("change",d)},[]),i}const gm={2025:[{fecha:"2025-01-01",nombre:"Año Nuevo",obligatorio:!0},{fecha:"2025-04-11",nombre:"Juan Santamaría (trasladado a viernes)",obligatorio:!0},{fecha:"2025-04-17",nombre:"Jueves Santo",obligatorio:!0},{fecha:"2025-04-18",nombre:"Viernes Santo",obligatorio:!0},{fecha:"2025-05-01",nombre:"Día del Trabajo",obligatorio:!0},{fecha:"2025-07-25",nombre:"Anexión del Partido de Nicoya",obligatorio:!1},{fecha:"2025-08-02",nombre:"Virgen de los Ángeles",obligatorio:!0},{fecha:"2025-08-15",nombre:"Día de la Madre",obligatorio:!0},{fecha:"2025-09-15",nombre:"Independencia",obligatorio:!0},{fecha:"2025-12-01",nombre:"Abolición del Ejército",obligatorio:!0},{fecha:"2025-12-25",nombre:"Navidad",obligatorio:!0}],2026:[{fecha:"2026-01-01",nombre:"Año Nuevo",obligatorio:!0},{fecha:"2026-04-02",nombre:"Jueves Santo",obligatorio:!0},{fecha:"2026-04-03",nombre:"Viernes Santo",obligatorio:!0},{fecha:"2026-04-13",nombre:"Juan Santamaría (trasladado a lunes)",obligatorio:!0},{fecha:"2026-05-01",nombre:"Día del Trabajo",obligatorio:!0},{fecha:"2026-07-27",nombre:"Anexión del Partido de Nicoya (trasladado)",obligatorio:!1},{fecha:"2026-08-02",nombre:"Virgen de los Ángeles",obligatorio:!0},{fecha:"2026-08-17",nombre:"Día de la Madre (trasladado a lunes)",obligatorio:!0},{fecha:"2026-09-14",nombre:"Independencia (trasladado a lunes)",obligatorio:!0},{fecha:"2026-11-30",nombre:"Abolición del Ejército (trasladado a lunes)",obligatorio:!0},{fecha:"2026-12-25",nombre:"Navidad",obligatorio:!0}],2027:[{fecha:"2027-01-01",nombre:"Año Nuevo",obligatorio:!0},{fecha:"2027-03-25",nombre:"Jueves Santo",obligatorio:!0},{fecha:"2027-03-26",nombre:"Viernes Santo",obligatorio:!0},{fecha:"2027-04-12",nombre:"Juan Santamaría (trasladado a lunes)",obligatorio:!0},{fecha:"2027-05-01",nombre:"Día del Trabajo",obligatorio:!0},{fecha:"2027-07-26",nombre:"Anexión del Partido de Nicoya (trasladado)",obligatorio:!1},{fecha:"2027-08-02",nombre:"Virgen de los Ángeles",obligatorio:!0},{fecha:"2027-08-16",nombre:"Día de la Madre (trasladado a lunes)",obligatorio:!0},{fecha:"2027-09-13",nombre:"Independencia (trasladado a lunes)",obligatorio:!0},{fecha:"2027-11-29",nombre:"Abolición del Ejército (trasladado a lunes)",obligatorio:!0},{fecha:"2027-12-25",nombre:"Navidad",obligatorio:!0}]};function iv(i,s=!1){const l=gm[i]||[];return new Set(l.filter(d=>s||d.obligatorio).map(d=>d.fecha))}function Kv(i){return Object.prototype.hasOwnProperty.call(gm,String(i))}function ov(i,s){return s!=null&&s.aplicarFeriadosEnPrimerDiaLaboral?iv(i,!1):null}function ym(i){const{reglas:s}=Za();return S.useMemo(()=>ov(i,s),[i,s])}function Ys(i){const s=Number(i)||0;return Number.isInteger(s)?String(s):String(Math.round(s*100)/100)}function sv(i,s){return(i==null?void 0:i.magnitud)==="horas"?s("reposicion.horasN",{n:Ys(i.horas)}):(i==null?void 0:i.magnitud)==="medioDia"?s("modalReposicion.magnitudMedioDia"):s("modalReposicion.magnitudDiaEntero")}function $v(i,s){return(i==null?void 0:i.magnitud)==="horas"?s("reposicion.horasN",{n:Ys(i.horas)}):(i==null?void 0:i.magnitud)==="medioDia"?s("reposicion.magnitudCorta.medioDia"):s("reposicion.magnitudCorta.diaEntero")}function Mm(i,s=8){const l=Math.round((Number(i)||0)*100)/100;if(l<=0)return"0 h";const d=l/s;return Number.isInteger(d)?d===1?"1 día":`${d} días`:l===s/2?"½ día":`${Ys(l)} h`}function lv({data:i,hj:s,cerrar:l,onModificarRol:d,onReposicion:m,onReponer:p,onEditarFecha:h}){v1(l);const g=Yn(),{funcionario:v,iso:A,rol:D,saldo:N=0}=i,x=({onClick:V,tono:F,titulo:_,desc:K})=>u.jsxs("button",{type:"button",onClick:V,className:`w-full rounded-2xl border px-4 py-3 text-left shadow-sm hover:brightness-95 ${F}`,children:[u.jsx("span",{className:"block text-sm font-semibold",children:_}),u.jsx("span",{className:"mt-0.5 block text-xs opacity-80",children:K})]});return u.jsx("div",{className:"fixed inset-0 z-[60] flex items-end justify-center bg-black/50 p-0 backdrop-blur-sm md:items-center md:p-4",onClick:V=>{V.target===V.currentTarget&&l()},children:u.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":g("asignacionLibre.titulo"),className:"w-full max-w-lg overflow-hidden rounded-t-3xl bg-white shadow-2xl md:rounded-3xl",children:[u.jsxs("div",{className:"flex items-start justify-between gap-3 border-b border-slate-200 p-5",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-semibold",children:g("asignacionLibre.titulo")}),u.jsx("p",{className:"text-sm text-slate-600",children:g("asignacionLibre.sub",{funcionario:v,fecha:Bn(A),rol:Z1(D)})})]}),u.jsx("button",{onClick:l,"aria-label":g("acciones.cerrar"),className:"-mr-1 inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl text-lg font-semibold text-slate-500 hover:bg-slate-100 hover:text-slate-700",children:"✕"})]}),u.jsxs("div",{className:"space-y-2 p-5",children:[u.jsx(x,{onClick:d,tono:"border-emerald-300 bg-emerald-50 text-emerald-950",titulo:g("asignacionLibre.modificarRol"),desc:g("asignacionLibre.modificarRolDesc")}),u.jsx(x,{onClick:m,tono:"border-amber-300 bg-amber-50 text-amber-950",titulo:g("asignacionLibre.reposicion"),desc:g("asignacionLibre.reposicionDesc")}),N>0&&u.jsx(x,{onClick:p,tono:"border-sky-300 bg-sky-50 text-sky-950",titulo:g("asignacionLibre.reponer",{saldo:Mm(N,s)}),desc:g("asignacionLibre.reponerDesc")}),u.jsx(x,{onClick:h,tono:"border-slate-300 bg-slate-50 text-slate-800",titulo:g("asignacionLibre.editarFecha"),desc:g("asignacionLibre.editarFechaDesc")})]}),u.jsx("div",{className:"flex justify-end border-t border-slate-200 bg-slate-50 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]",children:u.jsx("button",{onClick:l,className:"rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50",children:g("acciones.cancelar")})})]})})}function uv({participantes:i=[],onChange:s,inputClass:l}){const d=(h,g,v)=>{s(i.map((A,D)=>D===h?{...A,[g]:v}:A))},m=()=>s([...i,{nombre:"",contacto:""}]),p=h=>s(i.filter((g,v)=>v!==h));return u.jsxs("section",{className:"mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-3",children:[u.jsxs("div",{className:"flex items-center justify-between gap-3",children:[u.jsxs("div",{children:[u.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-slate-600",children:"Otros participantes"}),u.jsx("p",{className:"mt-1 text-xs text-slate-500",children:"Personas, organizaciones o grupos que no figuran en el rol institucional."})]}),u.jsx("button",{type:"button",onClick:m,className:"shrink-0 rounded-xl border border-emerald-700 bg-white px-3 py-2 text-xs font-bold text-emerald-800 hover:bg-emerald-50",children:"+ Agregar"})]}),i.length===0?u.jsx("p",{className:"mt-3 text-xs text-slate-500",children:"Sin participantes externos registrados."}):u.jsx("div",{className:"mt-3 space-y-2",children:i.map((h,g)=>u.jsxs("div",{className:"grid gap-2 rounded-xl border border-slate-200 bg-white p-2 md:grid-cols-[1fr_1fr_auto]",children:[u.jsx("input",{className:l,value:h.nombre||"",onChange:v=>d(g,"nombre",v.target.value),placeholder:"Nombre, sigla o grupo","aria-label":`Nombre de otro participante ${g+1}`}),u.jsx("input",{className:l,value:h.contacto||"",onChange:v=>d(g,"contacto",v.target.value),placeholder:"Contacto: teléfono o correo","aria-label":`Contacto de otro participante ${g+1}`}),u.jsx("button",{type:"button",onClick:()=>p(g),className:"rounded-xl border border-red-300 px-3 py-2 text-xs font-bold text-red-800 hover:bg-red-50",children:"Eliminar"})]},`${g}-${h.nombre}`))})]})}function _s({valor:i,personas:s,cerrar:l,guardar:d,eliminar:m,actividadesPlan:p=[]}){var B,Z,Me;const{ref:h,titleId:g}=dm({onClose:l}),v=Yn(),{roleData:A={},setRoleData:D,reposiciones:N=[],setReposiciones:x,reglas:V}=Za(),F=(V==null?void 0:V.horasJornada)??Ln,[_,K]=S.useState(()=>({...i,categoria:i.categoria||"Otra actividad",horaInicio:i.horaInicio||"08:00",horaFin:i.horaFin||"16:00",funcionarios:i.funcionarios||[],otrosParticipantes:i.otrosParticipantes||[],observaciones:i.observaciones||""})),[ce,te]=S.useState(null),[oe,H]=S.useState(!1),W=(b,ve)=>K(Ee=>({...Ee,[b]:ve})),se=Number((B=_.inicio)==null?void 0:B.slice(0,4)),fe=Number((Z=_.inicio)==null?void 0:Z.slice(5,7))-1,pe=Number((Me=_.inicio)==null?void 0:Me.slice(8,10)),xe=ym(se),ye=b=>_.inicio&&Number.isFinite(se)?Pi(s,A,se,fe,b,pe,xe):"",Ve=b=>{const ve=ye(b);return ve&&!Js(ve)},Pe=b=>Wp(N,b,F),Te="w-full min-h-touch rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100",we=ta.map(b=>({puesto:b,items:s.filter(ve=>ve.puestoOperativo===b)})),De=md.includes(_.lugar)?_.lugar:"Otro",ke=p.some(b=>b.id===_.id),Le=_.unDia?_.inicio:_.fin||_.inicio,J=b=>b.id!==_.id&&b.inicio<=Le&&(b.fin||b.inicio)>=_.inicio,O=b=>p.filter(ve=>J(ve)&&(ve.funcionarios||[]).includes(b)),Q=b=>{_.funcionarios.includes(b)||W("funcionarios",[..._.funcionarios,b])},P=b=>W("funcionarios",_.funcionarios.filter(ve=>ve!==b)),w=b=>{if(_.funcionarios.includes(b))return P(b);if(Ve(b)){te({funcionario:b,iso:_.inicio,rol:ye(b),categoria:Li(ye(b)),saldo:Pe(b)});return}return Q(b)},ae=()=>{const{funcionario:b}=ce;D&&D(ve=>({...ve,...ev({roleData:ve,personas:s,year:se,month:fe,persona:b,dia:pe,categoria:"T",feriados:xe})})),Q(b),te(null)},ie=()=>{const{funcionario:b,categoria:ve}=ce;x&&x(Ee=>[eT({reposiciones:Ee,funcionario:b,fecha:_.inicio,categoria:ve,detalle:_.titulo||""}),...Ee]),Q(b),te(null)},le=()=>{const{funcionario:b}=ce;if(x){const ve={id:`c${Date.now()}`,fecha:_.inicio,magnitud:"diaEntero",horas:0};x(Ee=>nT(Ee,b,ve,F))}P(b),te(null)},C=v(ke?"modalActividad.editar":"modalActividad.agregar"),k=()=>d({..._,categoria:"Otra actividad",horaInicio:_.horaInicio||"08:00",horaFin:_.horaFin||"16:00",otrosParticipantes:(_.otrosParticipantes||[]).filter(b=>{var ve;return(ve=b.nombre)==null?void 0:ve.trim()}).map(b=>({nombre:b.nombre.trim(),contacto:(b.contacto||"").trim()}))});return u.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-0 backdrop-blur-sm md:items-center md:p-4",onClick:b=>{b.target===b.currentTarget&&l()},children:[u.jsxs("div",{ref:h,role:"dialog","aria-modal":"true","aria-labelledby":g,tabIndex:-1,className:"max-h-[100dvh] w-full max-w-4xl overflow-hidden rounded-none bg-white shadow-2xl outline-none md:max-h-[94dvh] md:rounded-3xl",children:[u.jsxs("div",{className:"flex items-start justify-between gap-3 border-b border-slate-200 p-5",children:[u.jsxs("div",{children:[u.jsx("h3",{id:g,className:"text-lg font-semibold",children:C}),u.jsx("p",{className:"text-sm text-slate-600",children:v("modalActividad.sub")})]}),u.jsx("button",{onClick:l,"aria-label":v("acciones.cerrar"),className:"-mr-1 inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl text-lg font-semibold text-slate-500 hover:bg-slate-100 hover:text-slate-700",children:"✕"})]}),u.jsxs("div",{className:"max-h-[72vh] overflow-y-auto p-5",children:[_.funcionarios.filter(b=>Ve(b)).length>0&&u.jsxs("div",{className:"mb-4 rounded-2xl border border-amber-300 bg-amber-50 p-3",children:[u.jsx("p",{className:"text-xs font-bold uppercase tracking-wider text-amber-800",children:v("modalActividad.libresAsignados")}),u.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:_.funcionarios.filter(b=>Ve(b)).map(b=>u.jsxs("button",{type:"button",onClick:()=>te({funcionario:b,iso:_.inicio,rol:ye(b),categoria:Li(ye(b)),saldo:Pe(b)}),className:"inline-flex items-center gap-1 rounded-xl border border-amber-400 bg-white px-3 py-1.5 text-xs font-bold text-amber-900 hover:bg-amber-100",children:[b," · ",v("modalActividad.resolver")]},b))})]}),u.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[u.jsxs("label",{className:"md:col-span-2",children:[u.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:v("modalActividad.titulo")}),u.jsxs("div",{className:"grid gap-2 md:grid-cols-[260px_1fr]",children:[u.jsxs("select",{className:Te,value:_.titulo===ks?ks:"Otra",onChange:b=>W("titulo",b.target.value==="Otra"?"":b.target.value),children:[tv.map(b=>u.jsx("option",{value:b,children:b},b)),u.jsx("option",{value:"Otra",children:v("modalActividad.otra")})]}),u.jsx("input",{className:Te,value:_.titulo,onChange:b=>W("titulo",b.target.value),placeholder:v("modalActividad.placeholderTitulo")})]})]}),u.jsxs("label",{children:[u.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:"Categoría"}),u.jsx("input",{className:Te+" bg-slate-100",value:"Otra actividad",readOnly:!0})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[u.jsxs("label",{children:[u.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:"Hora inicio"}),u.jsx("input",{type:"time",className:Te,value:_.horaInicio,onChange:b=>W("horaInicio",b.target.value)})]}),u.jsxs("label",{children:[u.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:"Hora final"}),u.jsx("input",{type:"time",className:Te,value:_.horaFin,onChange:b=>W("horaFin",b.target.value)})]})]}),u.jsxs("label",{children:[u.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:v("modalActividad.fechaInicio")}),u.jsx("input",{type:"date",className:Te+" [color-scheme:light] dark:[color-scheme:dark]",value:_.inicio,onChange:b=>W("inicio",b.target.value)})]}),u.jsxs("label",{children:[u.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:v("modalActividad.fechaFinal")}),u.jsx("input",{type:"date",className:Te+" [color-scheme:light] dark:[color-scheme:dark]",value:_.unDia?_.inicio:_.fin,disabled:_.unDia,onChange:b=>W("fin",b.target.value)})]}),u.jsxs("label",{className:"flex items-center gap-2 rounded-xl border border-slate-300 p-3 text-sm font-semibold",children:[u.jsx("input",{type:"checkbox",checked:_.unDia,onChange:b=>K(ve=>({...ve,unDia:b.target.checked,fin:b.target.checked?ve.inicio:ve.fin}))}),v("modalActividad.unDia")]}),u.jsxs("label",{className:"flex items-center gap-2 rounded-xl border border-orange-300 bg-orange-50 p-3 text-sm font-semibold text-orange-950",children:[u.jsx("input",{type:"checkbox",checked:_.viatico,onChange:b=>W("viatico",b.target.checked)}),v("modalActividad.requiereViatico")]}),u.jsxs("label",{className:"md:col-span-2",children:[u.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:v("modalActividad.lugar")}),u.jsxs("div",{className:"grid gap-2",children:[u.jsxs("select",{className:Te,value:De,onChange:b=>W("lugar",b.target.value==="Otro"?"":b.target.value),children:[md.map(b=>u.jsx("option",{value:b,children:b},b)),u.jsx("option",{value:"Otro",children:v("modalActividad.otro")})]}),De==="Otro"&&u.jsx("input",{className:Te,value:_.lugar,onChange:b=>W("lugar",b.target.value),placeholder:v("modalActividad.placeholderLugar")})]})]})]}),u.jsxs("div",{className:"mt-5",children:[u.jsxs("div",{className:"mb-2 flex flex-wrap items-center justify-between gap-2",children:[u.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-slate-500",children:v("modalActividad.participantes")}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsxs("label",{className:"flex items-center gap-1.5 rounded-full border border-sky-300 bg-sky-50 px-2.5 py-1 text-[11px] font-bold text-sky-900",children:[u.jsx("input",{type:"checkbox",checked:oe,onChange:b=>H(b.target.checked)}),v("modalActividad.soloSaldo")]}),u.jsx(ct,{className:"border-emerald-200 bg-emerald-100 text-emerald-900",children:v("modalActividad.seleccionados",{n:_.funcionarios.length})})]})]}),u.jsx("div",{className:"grid gap-3 md:grid-cols-3",children:we.map(b=>{const ve=oe?b.items.filter(Ee=>Pe(Ee.nombre)>0):b.items;return oe&&ve.length===0?null:u.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-slate-50 p-3",children:[u.jsx("div",{className:"mb-2 text-xs font-bold uppercase tracking-wider text-slate-500",children:b.puesto}),u.jsx("div",{className:"space-y-1.5",children:ve.map(Ee=>{const ft=O(Ee.nombre),Vt=_.funcionarios.includes(Ee.nombre);return u.jsxs("div",{className:`rounded-xl border px-2 py-2 text-xs font-bold ${Vt?"border-emerald-300 bg-emerald-100 text-emerald-950":ft.length?"border-yellow-300 bg-yellow-50 text-yellow-950":"border-slate-200 bg-white text-slate-700"}`,children:[u.jsxs("label",{className:"flex items-center gap-2",children:[u.jsx("input",{type:"checkbox",checked:Vt,onChange:()=>w(Ee.nombre)}),Ee.nombre]}),(Ve(Ee.nombre)||Pe(Ee.nombre)>0)&&u.jsxs("div",{className:"mt-1 flex flex-wrap gap-1",children:[!Vt&&Ve(Ee.nombre)&&u.jsx("span",{className:"rounded-full border border-amber-300 bg-amber-100 px-1.5 py-0.5 text-[10px] font-bold text-amber-900",children:v("modalActividad.diaLibre")}),Pe(Ee.nombre)>0&&u.jsx("span",{className:"rounded-full border border-sky-300 bg-sky-100 px-1.5 py-0.5 text-[10px] font-bold text-sky-900",children:v("modalActividad.saldoFavorMonto",{saldo:Mm(Pe(Ee.nombre),F)})})]}),ft.length>0&&u.jsxs("div",{className:"mt-2 rounded-lg border border-yellow-300 bg-yellow-100 p-2 text-[11px] leading-snug text-yellow-950",children:[u.jsx("div",{className:"font-bold",children:v("modalActividad.avisoTraslape")}),u.jsx("div",{className:"mt-1 font-bold",children:ft.map(Xa=>Xa.titulo).join(" · ")}),u.jsx("button",{type:"button",onClick:()=>Q(Ee.nombre),className:"mt-2 rounded-lg bg-yellow-700 px-2 py-1 text-[10px] font-bold text-white hover:bg-yellow-800",children:v("modalActividad.agregarAunAsi")})]})]},Ee.id)})})]},b.puesto)})})]}),u.jsx(uv,{participantes:_.otrosParticipantes,onChange:b=>W("otrosParticipantes",b),inputClass:Te}),u.jsxs("label",{className:"mt-5 block",children:[u.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:v("modalActividad.obs")}),u.jsx("textarea",{className:`${Te} min-h-24`,value:_.observaciones,onChange:b=>W("observaciones",b.target.value),placeholder:v("modalActividad.placeholderObs")})]})]}),u.jsxs("div",{className:"flex flex-wrap justify-between gap-2 border-t border-slate-200 bg-slate-50 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]",children:[u.jsx("div",{children:ke&&u.jsx("button",{onClick:()=>m(_.id),className:"rounded-xl border border-red-300 bg-white px-4 py-2 text-sm font-semibold text-red-800 hover:bg-red-50",children:v("acciones.eliminar")})}),u.jsxs("div",{className:"flex gap-2",children:[u.jsx("button",{onClick:l,className:"rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50",children:v("acciones.cancelar")}),u.jsx("button",{onClick:k,className:"rounded-xl bg-emerald-800 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700",children:v("modalActividad.guardarActividad")})]})]})]}),ce&&u.jsx(lv,{data:ce,hj:F,cerrar:()=>te(null),onModificarRol:ae,onReposicion:ie,onReponer:le,onEditarFecha:()=>te(null)})]})}function mi({label:i}){const[s,...l]=String(i).split(" ");return l.length===0?i:u.jsxs(u.Fragment,{children:[s,u.jsx("br",{className:"sm:hidden"}),u.jsx("span",{className:"hidden sm:inline",children:" "}),l.join(" ")]})}function Ns({label:i,n:s,children:l,defaultOpen:d=!0}){const[m,p]=S.useState(d);return u.jsxs("div",{children:[u.jsxs("button",{type:"button",onClick:()=>p(h=>!h),"aria-expanded":m,className:"mb-1.5 flex w-full items-center gap-2 text-left active:scale-95",children:[u.jsx(un,{name:m?"chevronDown":"chevronRight",size:14,className:"shrink-0 text-ink-subtle"}),u.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider text-ink-muted",children:i}),u.jsx("span",{className:"rounded-full bg-surface-alt px-2 py-0.5 text-[10px] font-semibold text-ink-muted",children:s}),u.jsx("span",{className:"h-px flex-1 bg-line/50"})]}),m&&l]})}function Cs({trabajada:i,reposicion:s,t:l}){return!i&&!s?null:u.jsxs(u.Fragment,{children:[i&&u.jsxs(ct,{className:"border-amber-300 bg-amber-100 text-amber-900",children:["⚑ ",i.folio," · ",sv(i,l)," · ",l(`reposicion.estado.${i.estadoCalc||"Pendiente"}`).toLowerCase()]}),s&&u.jsxs(ct,{className:"border-sky-300 bg-sky-100 text-sky-900",children:["⟲ ",s.folio," · ",l("reposicion.marca.reposicionDe",{fecha:Bn(s.fecha)})]})]})}function cv({diaVista:i,setDiaVista:s,personas:l,actividadesPlan:d,setActividadesPlan:m,roleData:p,reposiciones:h=[],hj:g}){const v=Yn(),A=Pm(),{trabajadas:D,reposiciones:N}=$p(h,g),x=C=>({trabajada:D[`${C}|${i}`],reposicion:N[`${C}|${i}`]}),[V,F]=S.useState(null),[_,K,ce]=i.split("-").map(Number),te=K-1,oe=ym(_),H=l.filter(C=>C.estado!=="Inactivo"),W=[0,6].includes(new Date(i+"T12:00:00").getDay()),se=m1[new Date(i+"T12:00:00").getDay()],fe=H.map(C=>{const k=Pi(l,p,_,te,C.nombre,ce,oe),B=Li(k),Z=Js(k),Me=fd(d,i).filter(b=>(b.funcionarios||[]).includes(C.nombre));return{...C,rol:k,cat:B,enTurno:Z,acts:Me,tieneActividad:Me.length>0,tieneViatico:Me.some(b=>b.viatico)}}),pe=fe.filter(C=>C.enTurno&&C.tieneActividad),xe=fe.filter(C=>C.enTurno&&!C.tieneActividad),ye=fe.filter(C=>!C.enTurno),Ve=fe.filter(C=>C.tieneViatico),Pe=fd(d,i).sort((C,k)=>C.titulo.localeCompare(k.titulo)),Te=ta.map(C=>{const k=fe.filter(Z=>(Z.puestoOperativo||"")===C),B=k.filter(Z=>Z.enTurno);return{puesto:C,fuera:k.length-B.length,turno:B.length,conActividad:B.filter(Z=>Z.tieneActividad).length,sinActividad:B.filter(Z=>!Z.tieneActividad).length}}),we=Te.reduce((C,k)=>({fuera:C.fuera+k.fuera,turno:C.turno+k.turno,conActividad:C.conActividad+k.conActividad,sinActividad:C.sinActividad+k.sinActividad}),{fuera:0,turno:0,conActividad:0,sinActividad:0}),De={L:"Libre",V:"Vacaciones",I:"Incapacidad",O:"Otro","":"Sin marcar"},ke={L:"border-amber-700 bg-amber-700 text-white",V:"border-sky-700 bg-sky-700 text-white",I:"border-red-700 bg-red-700 text-white",O:"border-violet-700 bg-violet-700 text-white","":"border-slate-500 bg-slate-500 text-white"},Le=ye.reduce((C,k)=>{const B=k.cat||"";return C[B]||(C[B]=[]),C[B].push(k),C},{}),J=C=>{const k=ta.map(Z=>({key:Z,label:Z.replace("Puesto ",""),items:C.filter(Me=>(Me.puestoOperativo||"")===Z)})),B=C.filter(Z=>!ta.includes(Z.puestoOperativo||""));return B.length&&k.push({key:"__sin__",label:v("funcionarios.sinPuesto"),items:B}),k.filter(Z=>Z.items.length>0)},O=C=>{const k=new Date(i+"T12:00:00");k.setDate(k.getDate()+C),s(`${k.getFullYear()}-${wn(k.getMonth()+1)}-${wn(k.getDate())}`)},Q=C=>{if(!C.titulo.trim())return;const k={...C,fin:C.unDia?C.inicio:C.fin||C.inicio};k.fin<k.inicio&&(k.fin=k.inicio),m(B=>B.some(Z=>Z.id===k.id)?B.map(Z=>Z.id===k.id?k:Z):[...B,k]),F(null)},P=C=>{m(k=>k.filter(B=>B.id!==C)),F(null)},w=(C=[],k="")=>({id:`a${Date.now()}`,titulo:"",inicio:i,fin:i,unDia:!0,funcionarios:C,lugar:k,observaciones:"",viatico:!1}),ae=rv({onSwipeLeft:()=>O(1),onSwipeRight:()=>O(-1)}),ie=V&&d.some(C=>C.id===V.id)?v("dia.editarActividad",{defaultValue:"Editar actividad"}):v("dia.nuevaActividad",{defaultValue:"Nueva actividad"}),le=V?u.jsx(_s,{valor:V,personas:H,cerrar:()=>F(null),guardar:Q,eliminar:P,actividadesPlan:d}):null;return u.jsxs("section",{ref:ae,className:"space-y-4",children:[u.jsxs("div",{className:"flex items-center gap-2 rounded-lg border border-line bg-surface p-2 sm:gap-3 sm:p-3",children:[u.jsx("button",{onClick:()=>O(-1),"aria-label":v("dia.diaAnterior"),className:"inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl border border-line bg-surface text-ink-muted transition-colors hover:bg-surface-alt active:scale-95",children:u.jsx(un,{name:"chevronLeft",size:20})}),u.jsxs("div",{className:"flex min-w-0 flex-1 flex-col items-center gap-0.5",children:[u.jsxs("span",{className:"truncate text-[10px] font-semibold uppercase tracking-wider text-ink-muted sm:text-xs",children:[se," · ",lm[te]," ",_]}),u.jsx("input",{type:"date",value:i,onChange:C=>C.target.value&&s(C.target.value),"aria-label":v("dia.seleccionarFecha"),className:"min-h-touch w-full max-w-[13rem] rounded-xl border border-line bg-surface px-2 py-1 text-center text-sm font-semibold text-ink outline-none focus:border-brand [color-scheme:light] dark:[color-scheme:dark]"})]}),u.jsx("button",{onClick:()=>O(1),"aria-label":v("dia.diaSiguiente"),className:"inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl border border-line bg-surface text-ink-muted transition-colors hover:bg-surface-alt active:scale-95",children:u.jsx(un,{name:"chevronRight",size:20})})]}),u.jsxs("div",{className:"grid gap-4 md:grid-cols-2 md:items-start",children:[u.jsx(ea,{title:v("dia.porPuesto"),icon:"📍",children:u.jsx("div",{className:"overflow-hidden rounded-lg border border-line",children:u.jsxs("table",{className:"w-full table-fixed border-collapse text-sm",children:[u.jsx("thead",{className:"bg-surface-alt text-[9px] uppercase leading-[1.15] tracking-tight text-ink-muted sm:text-[11px] sm:tracking-wide",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"w-[26%] px-1.5 py-2 text-left sm:px-3 sm:py-3",children:v("dia.th.puesto")}),u.jsx("th",{scope:"col",className:"px-0 py-2 text-center sm:px-3 sm:py-3",children:u.jsx(mi,{label:v("dia.th.fuera")})}),u.jsx("th",{scope:"col",className:"px-0 py-2 text-center sm:px-3 sm:py-3",children:u.jsx(mi,{label:v("dia.th.enTurno")})}),u.jsx("th",{scope:"col",className:"px-0 py-2 text-center sm:px-3 sm:py-3",children:u.jsx(mi,{label:v("dia.th.conActividad")})}),u.jsx("th",{scope:"col",className:"px-0 py-2 text-center sm:px-3 sm:py-3",children:u.jsx(mi,{label:v("dia.th.sinActividad")})})]})}),u.jsx("tbody",{className:"divide-y divide-line",children:Te.map(({puesto:C,fuera:k,turno:B,conActividad:Z,sinActividad:Me})=>u.jsxs("tr",{className:"hover:bg-surface-alt",children:[u.jsx("th",{scope:"row",className:"px-1.5 py-2 text-left text-[11px] font-semibold text-ink sm:px-3 sm:py-3 sm:text-sm",children:C.replace("Puesto ","")}),u.jsx("td",{className:`px-1 py-2 text-center text-base font-semibold sm:px-3 sm:py-3 sm:text-lg ${k>0?"text-ink-muted":"text-ink-subtle"}`,children:k}),u.jsx("td",{className:"px-1 py-2 text-center text-base font-semibold text-ok sm:px-3 sm:py-3 sm:text-lg",children:B}),u.jsx("td",{className:"px-1 py-2 text-center text-base font-semibold text-info sm:px-3 sm:py-3 sm:text-lg",children:Z}),u.jsx("td",{className:`px-1 py-2 text-center text-base font-semibold sm:px-3 sm:py-3 sm:text-lg ${Me>0?"text-warning":"text-ink-subtle"}`,children:Me})]},C))}),u.jsx("tfoot",{children:u.jsxs("tr",{className:"border-t-2 border-line-strong bg-surface-alt",children:[u.jsx("th",{scope:"row",className:"px-1.5 py-2 text-left text-[11px] font-bold text-ink sm:px-3 sm:py-3 sm:text-sm",children:v("dia.th.total")}),u.jsx("td",{className:"px-1 py-2 text-center text-base font-bold text-ink-muted sm:px-3 sm:py-3 sm:text-lg",children:we.fuera}),u.jsx("td",{className:"px-1 py-2 text-center text-base font-bold text-ok sm:px-3 sm:py-3 sm:text-lg",children:we.turno}),u.jsx("td",{className:"px-1 py-2 text-center text-base font-bold text-info sm:px-3 sm:py-3 sm:text-lg",children:we.conActividad}),u.jsx("td",{className:`px-1 py-2 text-center text-base font-bold sm:px-3 sm:py-3 sm:text-lg ${we.sinActividad>0?"text-warning":"text-ink-subtle"}`,children:we.sinActividad})]})})]})})}),u.jsx(ea,{title:v("dia.actividadesTituloCorto",{n:Pe.length}),ariaLabel:v("dia.actividadesTitulo",{n:Pe.length}),icon:"🗓️",collapsible:!0,defaultOpen:!0,action:u.jsxs("button",{id:"dia-boton-nueva-actividad",onClick:()=>F(w()),className:"inline-flex min-h-touch items-center gap-1 rounded-xl bg-emerald-800 px-3 py-2 text-xs font-semibold text-white transition-all hover:bg-emerald-700 active:scale-95 active:brightness-90",children:[u.jsx(un,{name:"plus",size:14}),v("dia.nuevaCorta")]}),children:Pe.length===0?u.jsx("div",{className:"rounded-xl border border-dashed border-line p-6 text-center text-sm text-ink-muted",children:v("dia.sinActividades")}):u.jsx("div",{className:"space-y-3",children:Pe.map(C=>{const k=av(C,ce,_,te,l,p,oe);return u.jsxs("div",{className:`rounded-lg p-4 ${k.length?"border-l-4 border-red-600 bg-surface":C.viatico?"border border-viatico/40 bg-viatico-soft":"border border-ok/40 bg-ok-soft"}`,children:[u.jsxs("div",{className:"flex items-start justify-between gap-2",children:[u.jsxs("div",{className:"min-w-0 flex-1",children:[u.jsx("div",{className:"break-words font-semibold text-ink",children:C.titulo}),C.lugar&&u.jsxs("div",{className:"mt-0.5 text-xs text-ink-muted",children:["📍 ",C.lugar]}),C.inicio!==(C.fin||C.inicio)&&u.jsxs("div",{className:"mt-0.5 text-xs text-ink-muted",children:[Bn(C.inicio)," → ",Bn(C.fin)]})]}),u.jsx("button",{onClick:()=>F({...C}),className:"shrink-0 rounded-lg border border-line bg-surface px-2 py-1 text-xs font-semibold text-ink transition-all hover:bg-surface-alt active:scale-95",children:v("acciones.editar")})]}),(C.viatico||k.length>0)&&u.jsxs("div",{className:"mt-1.5 flex flex-wrap items-center gap-1.5",children:[C.viatico&&u.jsx(ct,{className:"border-orange-300 bg-orange-100 text-orange-900",children:v("dia.viaticoBadge")}),k.length>0&&u.jsx(ct,{className:"border-red-300 bg-red-100 text-red-900",children:v("dia.conflictosBadge",{n:k.length,plural:Zc(k.length)})})]}),C.funcionarios.length>0&&u.jsx("div",{className:"mt-2.5 flex flex-wrap gap-1",children:C.funcionarios.map(B=>u.jsxs("span",{className:`rounded-full border px-2 py-0.5 text-[11px] font-semibold ${k.includes(B)?"border-red-400 bg-surface text-critical":"border-ok/50 bg-surface text-ok-fg"}`,children:[B,k.includes(B)?" ⚠":""]},B))})]},C.id)})})})]}),u.jsxs("div",{className:"grid gap-4 xl:grid-cols-2 xl:items-start",children:[u.jsx(ea,{title:v("dia.enTurnoConActTitulo",{n:pe.length}),icon:"✅",collapsible:!0,defaultOpen:!1,children:pe.length===0?u.jsx("p",{className:"text-sm text-ink-muted",children:v("dia.enTurnoConActVacio")}):u.jsx("div",{className:"space-y-4",children:J(pe).map(C=>u.jsx(Ns,{label:C.label,n:C.items.length,children:u.jsx("div",{className:"divide-y divide-line/50",children:C.items.map(k=>u.jsxs("div",{className:"flex items-start gap-3 py-3",children:[u.jsx(di,{name:k.nombre}),u.jsxs("div",{className:"min-w-0 flex-1",children:[u.jsxs("div",{className:"flex flex-wrap items-center gap-1.5",children:[u.jsx("span",{className:"break-words text-sm font-semibold text-ink",children:k.nombre}),u.jsx(ct,{className:cd(k.rol,W),children:k.rol}),k.tieneViatico&&u.jsx(ct,{className:"border-orange-600 bg-orange-600 text-white",children:v("dia.viaticoBadge")}),u.jsx(Cs,{...x(k.nombre),t:v})]}),u.jsx("div",{className:"mt-1.5 flex flex-wrap gap-1",children:k.acts.map(B=>u.jsx("span",{className:"rounded-full border border-ok/50 bg-surface px-2 py-0.5 text-[11px] text-ok-fg",children:B.titulo},B.id))})]})]},k.id))})},C.key))})}),u.jsx(ea,{title:v("dia.enTurnoSinActTitulo",{n:xe.length}),icon:xe.length>0?"⚠️":"✅",collapsible:!0,defaultOpen:!0,children:xe.length===0?u.jsx("p",{className:"text-sm text-ink-muted",children:v("dia.enTurnoSinActVacio")}):u.jsx("div",{className:"space-y-4",children:J(xe).map(C=>u.jsx(Ns,{label:C.label,n:C.items.length,children:u.jsx("div",{className:"divide-y divide-line/50",children:C.items.map(k=>u.jsxs("div",{className:"py-3",children:[u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(di,{name:k.nombre}),u.jsxs("div",{className:"min-w-0 flex-1",children:[u.jsxs("div",{className:"flex flex-wrap items-center gap-1.5",children:[u.jsx("span",{className:"break-words text-sm font-semibold text-ink",children:k.nombre}),u.jsx(ct,{className:cd(k.rol,W),children:k.rol}),u.jsx(Cs,{...x(k.nombre),t:v})]}),u.jsx("div",{className:"mt-0.5 text-xs text-ink-muted",children:k.puesto})]})]}),u.jsx("button",{onClick:()=>F(w([k.nombre],k.puestoOperativo||"")),className:"mt-2 inline-flex min-h-touch w-full items-center justify-center rounded-xl bg-warning px-3 py-2 text-sm font-semibold text-ink-inverse transition-all hover:opacity-90 active:scale-95 sm:w-auto",children:v("dia.asignar")})]},k.id))})},C.key))})}),u.jsx(ea,{title:v("dia.fueraDeTurnoTitulo",{n:ye.length}),icon:"📴",collapsible:!0,defaultOpen:!1,children:ye.length===0?u.jsx("p",{className:"text-sm text-ink-muted",children:v("dia.fueraDeTurnoVacio")}):u.jsx("div",{className:"space-y-4",children:Object.entries(Le).sort(([C],[k])=>(De[C]||"z").localeCompare(De[k]||"z")).map(([C,k])=>u.jsxs("div",{children:[u.jsxs("div",{className:"mb-2 flex items-center gap-2",children:[u.jsx("span",{className:`rounded-full px-2.5 py-0.5 text-xs font-semibold ${ke[C]}`,children:De[C]||"Sin marcar"}),u.jsx("span",{className:"text-xs text-ink-muted",children:v("dia.nFuncionarios",{n:k.length,plural:Zc(k.length)})})]}),u.jsx("div",{className:"flex flex-wrap gap-2",children:k.map(B=>u.jsxs("div",{className:"flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2",children:[u.jsx(di,{name:B.nombre}),u.jsxs("div",{children:[u.jsx("div",{className:"text-sm font-semibold text-ink",children:B.nombre}),u.jsx("div",{className:"text-[10px] text-ink-muted",children:(B.puestoOperativo||"").replace("Puesto ","")}),u.jsx("div",{className:"mt-1 flex flex-wrap gap-1",children:u.jsx(Cs,{...x(B.nombre),t:v})})]})]},B.id))})]},C))})}),Ve.length>0&&u.jsx(ea,{title:v("dia.conViaticoTitulo",{n:Ve.length}),icon:"💵",collapsible:!0,defaultOpen:!1,children:u.jsx("div",{className:"space-y-4",children:J(Ve).map(C=>u.jsx(Ns,{label:C.label,n:C.items.length,children:u.jsx("div",{className:"divide-y divide-line/50",children:C.items.map(k=>u.jsxs("div",{className:"flex items-start gap-3 py-2.5",children:[u.jsx(di,{name:k.nombre}),u.jsxs("div",{className:"min-w-0 flex-1",children:[u.jsx("div",{className:"font-semibold text-ink",children:k.nombre}),u.jsx("div",{className:"mt-1 flex flex-wrap gap-1",children:k.acts.filter(B=>B.viatico).map(B=>u.jsxs("span",{className:"rounded-full border border-viatico/40 bg-viatico-soft px-2 py-0.5 text-[11px] text-viatico-fg",children:[B.titulo,B.lugar?` · ${B.lugar}`:""]},B.id))})]})]},k.id))})},C.key))})})]}),V&&(A?u.jsx(Tm,{open:!!V,onClose:()=>F(null),title:ie,children:le}):le)]})}function dv(i){const{diaVista:s,setDiaVista:l,personas:d,actividadesPlan:m,setActividadesPlan:p,roleData:h,reposiciones:g,hj:v}=i,A=Yn(),D=Pm(),[N,x]=S.useState(null),[V,F]=S.useState(!1);S.useEffect(()=>{const oe=document.getElementById("dia-boton-nueva-actividad");if(!oe||typeof IntersectionObserver>"u")return;const H=new IntersectionObserver(([W])=>F(W.isIntersecting),{rootMargin:"-70px 0px -90px 0px"});return H.observe(oe),()=>H.disconnect()},[]);const _=d.filter(oe=>oe.estado!=="Inactivo"),K=S.useCallback(()=>({id:`a${Date.now()}`,titulo:"",inicio:s,fin:s,unDia:!0,funcionarios:[],lugar:"",observaciones:"",viatico:!1}),[s]),ce=S.useCallback(oe=>{if(!oe.titulo.trim())return;const H={...oe,fin:oe.unDia?oe.inicio:oe.fin||oe.inicio};H.fin<H.inicio&&(H.fin=H.inicio),p(W=>W.some(se=>se.id===H.id)?W.map(se=>se.id===H.id?H:se):[...W,H]),x(null)},[p]),te=S.useCallback(oe=>{p(H=>H.filter(W=>W.id!==oe)),x(null)},[p]);return u.jsxs("div",{className:"relative mx-auto w-full max-w-md md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl",children:[u.jsx(cv,{...i}),u.jsx("button",{type:"button",onClick:()=>x(K()),"aria-label":A("dia.nueva"),"aria-hidden":V,tabIndex:V?-1:0,className:["fixed z-40 flex h-14 w-14 items-center justify-center","rounded-full bg-emerald-700 text-white shadow-lg","hover:bg-emerald-600 active:scale-95","transition-all duration-200","bottom-[5.5rem] right-4","md:hidden",V?"pointer-events-none scale-50 opacity-0":"scale-100 opacity-100"].join(" "),children:u.jsx("svg",{viewBox:"0 0 24 24",width:"28",height:"28",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:u.jsx("path",{d:"M12 5v14M5 12h14"})})}),N&&(D?u.jsx(Tm,{open:!!N,onClose:()=>x(null),title:A("modalActividad.agregar"),snapPoint:"full",children:u.jsx(_s,{valor:N,personas:_,cerrar:()=>x(null),guardar:ce,eliminar:te,actividadesPlan:m,embebido:!0})}):u.jsx(_s,{valor:N,personas:_,cerrar:()=>x(null),guardar:ce,eliminar:te,actividadesPlan:m}))]})}const mv=S.lazy(()=>vn(()=>import("./Roles-CPakt-66.js"),[])),fv=S.lazy(()=>vn(()=>import("./Funcionarios-D_BDJ_VA.js"),__vite__mapDeps([0,1,2,3,4]))),pv=S.lazy(()=>vn(()=>import("./Planificacion-BnJ9Gakv.js"),__vite__mapDeps([5,2,3]))),Tv=S.lazy(()=>vn(()=>import("./PlanificacionFuncionario-C6OS8b43.js"),[])),vv=S.lazy(()=>vn(()=>import("./AdelantoViaticos-DCl6LUoV.js"),__vite__mapDeps([6,1,3]))),Lv=S.lazy(()=>vn(()=>import("./Reposicion-BfmspyBy.js"),__vite__mapDeps([7,1]))),hv=S.lazy(()=>vn(()=>import("./Disponibilidad-DmcQ8jek.js"),__vite__mapDeps([8,1,4]))),Pv=S.lazy(()=>vn(()=>import("./Alertas-iNX3Tx3v.js"),__vite__mapDeps([9,3]))),gv=S.lazy(()=>vn(()=>import("./Datos-IsoV5hyF.js"),[])),yv=S.lazy(()=>vn(()=>import("./Configuracion-CF0JRSHl.js"),[]));function Mv(){const i=Yn();return u.jsx("div",{role:"status","aria-live":"polite",className:"flex min-h-[200px] items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",children:u.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold text-slate-500",children:[u.jsx("span",{className:"h-2 w-2 animate-pulse rounded-full bg-emerald-500","aria-hidden":"true"}),i("topbar.cargando")]})})}function Ev(){const{view:i,setView:s,personas:l,setPersonas:d,month:m,setMonth:p,year:h,setYear:g,compact:v,setCompact:A,roleData:D,setRoleData:N,actividadesPlan:x,setActividadesPlan:V,reposiciones:F,setReposiciones:_,diaVista:K,setDiaVista:ce,reglas:te}=Za(),oe=S.useMemo(()=>QT(l,{actividadesPlan:x,reposiciones:F,flags:te}),[l,x,F,te]),H=S.useMemo(()=>oe.filter(fe=>fe.t==="danger"||fe.t==="warn").length,[oe]),W=C1({view:i,setView:s,year:h,setYear:g,month:m,setMonth:p,diaVista:K,setDiaVista:ce}),se=x1();return u.jsxs("div",{className:`pnlq-app pnlq-print-root min-h-screen overflow-x-clip bg-surface-alt text-ink ${se?"pnlq-keyboard-open":""}`,children:[u.jsx(K1,{}),u.jsxs("div",{className:"flex min-h-screen",children:[u.jsx(d1,{view:i,setView:W,nAlertas:H}),u.jsxs("main",{className:"pnlq-app-main min-w-0 flex-1 overflow-x-clip",children:[u.jsx(g1,{view:i,setView:W,month:m,setMonth:p,year:h,setYear:g,compact:v,setCompact:A}),u.jsx("div",{className:"pnlq-app-content space-y-5 p-4 pb-[calc(6rem+env(safe-area-inset-bottom))] lg:p-6 lg:pb-6",children:u.jsxs(S.Suspense,{fallback:u.jsx(Mv,{}),children:[i==="dia"&&u.jsx(dv,{diaVista:K,setDiaVista:ce,personas:l,actividadesPlan:x,setActividadesPlan:V,roleData:D,reposiciones:F,hj:te==null?void 0:te.horasJornada}),i==="funcionarios"&&u.jsx(fv,{personas:l,setPersonas:d}),i==="roles"&&u.jsx(mv,{year:h,month:m,setYear:g,setMonth:p,compact:v,roleData:D,setRoleData:N,personas:l,actividadesPlan:x,setActividadesPlan:V,reposiciones:F,hj:te==null?void 0:te.horasJornada}),i==="planificacion"&&u.jsx(pv,{year:h,month:m,personas:l,actividadesPlan:x,setActividadesPlan:V,roleData:D,setView:W,setDiaVista:ce}),i==="planFuncionario"&&u.jsx(Tv,{year:h,month:m,personas:l,actividadesPlan:x,setActividadesPlan:V,roleData:D,setRoleData:N}),i==="adelantos"&&u.jsx(vv,{actividadesPlan:x,personas:l,setView:W}),i==="reposicion"&&u.jsx(Lv,{personas:l,reposiciones:F,setReposiciones:_}),i==="disponibilidad"&&u.jsx(hv,{personas:l,setPersonas:d}),i==="alertas"&&u.jsx(Pv,{alerts:oe,setView:W}),i==="datos"&&u.jsx(gv,{}),i==="configuracion"&&u.jsx(yv,{})]})})]})]}),u.jsx(y1,{view:i,setView:W,nAlertas:H,hidden:se})]})}function Nv(){return u.jsx(S1,{children:u.jsx(OT,{children:u.jsx(Ev,{})})})}function Cv(i={}){const{immediate:s=!1,onNeedRefresh:l,onOfflineReady:d,onRegistered:m,onRegisteredSW:p,onRegisterError:h}=i;let g,v;const A=async(N=!0)=>{await v};async function D(){if("serviceWorker"in navigator){if(g=await vn(async()=>{const{Workbox:N}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:N}},[]).then(({Workbox:N})=>new N("/BTMM_JORNADAS/sw.js",{scope:"/BTMM_JORNADAS/",type:"classic"})).catch(N=>{h==null||h(N)}),!g)return;g.addEventListener("activated",N=>{(N.isUpdate||N.isExternal)&&window.location.reload()}),g.addEventListener("installed",N=>{N.isUpdate||d==null||d()}),g.register({immediate:s}).then(N=>{p?p("/BTMM_JORNADAS/sw.js",N):m==null||m(N)}).catch(N=>{h==null||h(N)})}}return v=D(),A}function xv(i={}){const{immediate:s=!0,onNeedRefresh:l,onOfflineReady:d,onRegistered:m,onRegisteredSW:p,onRegisterError:h}=i,[g,v]=S.useState(!1),[A,D]=S.useState(!1),[N]=S.useState(()=>Cv({immediate:s,onOfflineReady(){D(!0),d==null||d()},onNeedRefresh(){v(!0),l==null||l()},onRegistered:m,onRegisteredSW:p,onRegisterError:h}));return{needRefresh:[g,v],offlineReady:[A,D],updateServiceWorker:N}}const Sv=300*1e3;async function Vv(){const i=`${UT}?t=${Date.now()}`,s=await fetch(i,{cache:"no-store",headers:{"Cache-Control":"no-cache"}});if(!s.ok)throw new Error(`HTTP ${s.status}`);return s.json()}function bv({intervalMs:i=Sv,onOutdated:s}={}){let l=!1,d=null;const m=async()=>{if(!(l||typeof navigator>"u"||!navigator.onLine))try{const v=await Vv();v!=null&&v.commit&&v.commit!==vi&&(s==null||s({local:Ha,remote:v.version,remoteBuildTime:v.buildTime,remoteCommit:v.commit}))}catch{}},p=()=>{l||(d=setTimeout(async()=>{await m(),p()},i))},h=()=>{document.visibilityState==="visible"&&m()},g=()=>m();return document.addEventListener("visibilitychange",h),window.addEventListener("online",g),m(),p(),()=>{l=!0,d&&clearTimeout(d),document.removeEventListener("visibilitychange",h),window.removeEventListener("online",g)}}const Td="pnlq:lastLoadedAt";function Av({onInstall:i,onDismiss:s}){return u.jsx("div",{className:"pnlq-pwa-banner pnlq-no-print fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-2xl border border-emerald-200 bg-white p-4 shadow-2xl ring-1 ring-emerald-100 lg:bottom-4",role:"alertdialog","aria-label":Oe("pwa.instalarAria"),children:u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-800 text-2xl shadow-sm",children:"🌲"}),u.jsxs("div",{className:"min-w-0 flex-1",children:[u.jsx("p",{className:"text-sm font-semibold text-slate-950",children:Oe("pwa.instalarTitulo")}),u.jsx("p",{className:"mt-0.5 text-xs font-bold text-slate-500",children:Oe("pwa.instalarSub")}),u.jsxs("div",{className:"mt-3 flex gap-2",children:[u.jsx("button",{onClick:i,className:"rounded-xl bg-emerald-800 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-emerald-700 active:scale-95",children:Oe("acciones.instalar")}),u.jsx("button",{onClick:s,className:"rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 active:scale-95",children:Oe("acciones.ahoraNo")})]})]}),u.jsx("button",{onClick:s,className:"rounded-lg p-1 font-semibold text-slate-400 hover:bg-slate-100 hover:text-slate-700","aria-label":Oe("acciones.cerrar"),children:"✕"})]})})}function wv({lastLoadedAt:i}){return u.jsx("div",{className:"pnlq-pwa-banner pnlq-no-print fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] left-1/2 z-50 -translate-x-1/2 rounded-2xl border border-amber-300 bg-amber-50 px-5 py-3 shadow-xl ring-1 ring-amber-200 lg:bottom-4",role:"alert",children:u.jsxs("div",{className:"flex flex-col items-center gap-0.5 text-center",children:[u.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold text-amber-900",children:[u.jsx("span",{className:"text-lg",children:"📡"}),Oe("pwa.sinConexion")]}),i&&u.jsx("div",{className:"text-[11px] font-bold text-amber-800/80",children:Oe("pwa.ultimaCarga",{fecha:i})})]})})}function kv({onUpdate:i,onDismiss:s,urgent:l=!1,remoteVersion:d}){const m=Oe(l?"pwa.versionDesactualizada":"pwa.nuevaVersion"),p=Oe(l?"pwa.urgente":"pwa.sugerido"),h=`${Oe("pwa.versionActual",{actual:Ha})}${d?Oe("pwa.versionDisponible",{remoto:d}):""}.${p}`;return u.jsx("div",{className:`pnlq-pwa-banner pnlq-no-print fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-2xl border p-4 shadow-2xl lg:bottom-4 ${l?"border-red-300 bg-red-50 ring-1 ring-red-200":"border-emerald-300 bg-emerald-50 ring-1 ring-emerald-200"}`,role:"alertdialog","aria-live":"assertive","aria-label":Oe("pwa.bannerAria"),children:u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx("div",{className:`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl shadow-sm ${l?"bg-red-700 text-white":"bg-emerald-800 text-white"}`,children:"⟳"}),u.jsxs("div",{className:"min-w-0 flex-1",children:[u.jsx("p",{className:"text-sm font-semibold text-slate-950",children:m}),u.jsx("p",{className:"mt-0.5 text-xs font-bold text-slate-600",children:h}),u.jsxs("div",{className:"mt-3 flex gap-2",children:[u.jsx("button",{onClick:i,className:`rounded-xl px-4 py-2 text-xs font-semibold text-white shadow-sm active:scale-95 ${l?"bg-red-700 hover:bg-red-800":"bg-emerald-800 hover:bg-emerald-700"}`,children:Oe("acciones.actualizarAhora")}),u.jsx("button",{onClick:s,className:"rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 active:scale-95",children:Oe("acciones.verLuego")})]})]})]})})}function _v({children:i}){const[s,l]=S.useState(null),[d,m]=S.useState(!1),[p,h]=S.useState(typeof navigator<"u"?!navigator.onLine:!1),[g,v]=S.useState(!1),[A,D]=S.useState(null),[N,x]=S.useState(!1),[V,F]=S.useState(()=>{try{return localStorage.getItem(Td)}catch{return null}}),{needRefresh:[_,K],updateServiceWorker:ce}=xv({onRegisteredSW(){try{const pe=Ad(new Date().toISOString());localStorage.setItem(Td,pe),F(pe)}catch{}}});S.useEffect(()=>{const pe=Pe=>{Pe.preventDefault(),l(Pe)},xe=()=>{v(!0),l(null)},ye=()=>h(!1),Ve=()=>h(!0);return window.addEventListener("beforeinstallprompt",pe),window.addEventListener("appinstalled",xe),window.addEventListener("online",ye),window.addEventListener("offline",Ve),()=>{window.removeEventListener("beforeinstallprompt",pe),window.removeEventListener("appinstalled",xe),window.removeEventListener("online",ye),window.removeEventListener("offline",Ve)}},[]),S.useEffect(()=>bv({onOutdated:xe=>D(xe)}),[]);const te=async()=>{if(!s)return;s.prompt();const{outcome:pe}=await s.userChoice;pe==="accepted"&&l(null),m(!0)},oe=S.useCallback(()=>{x(!1),D(null),K(!1),ce(!0)},[K,ce]),H=()=>x(!0),W=s&&!d&&!g,se=(_||!!A)&&!N,fe=A==null?void 0:A.remote;return u.jsxs(u.Fragment,{children:[i,W&&u.jsx(Av,{onInstall:te,onDismiss:()=>m(!0)}),p&&!se&&u.jsx(wv,{lastLoadedAt:V}),se&&u.jsx(kv,{onUpdate:oe,onDismiss:H,urgent:!!A,remoteVersion:fe})]})}const Em="pnlq:theme",na=["light","dark","hc"],Nm=S.createContext(null);function jv(){if(typeof window>"u")return"light";try{const i=localStorage.getItem(Em);if(i&&na.includes(i))return i}catch{}return window.matchMedia&&window.matchMedia("(prefers-contrast: more)").matches?"hc":window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Rv({children:i}){const[s,l]=S.useState(jv);S.useEffect(()=>{if(!(typeof document>"u")){document.documentElement.setAttribute("data-theme",s),document.documentElement.style.colorScheme=s==="dark"?"dark":"light";try{localStorage.setItem(Em,s)}catch{}}},[s]);const d=S.useCallback(h=>{na.includes(h)&&l(h)},[]),m=S.useCallback(()=>{l(h=>{const g=na.indexOf(h);return na[(g+1)%na.length]})},[]),p=S.useMemo(()=>({theme:s,setTheme:d,cycleTheme:m,themes:na}),[s,d,m]);return u.jsx(Nm.Provider,{value:p,children:i})}function Hv(){const i=S.useContext(Nm);if(!i)throw new Error("useTheme must be used within <ThemeProvider>");return i}typeof console<"u"&&console.info(`PNLQ v${Ha} · build ${Ti} · commit ${vi}`);typeof window<"u"&&window.addEventListener("unhandledrejection",i=>{console.error("Promesa rechazada sin manejar:",i.reason)});_p.createRoot(document.getElementById("root")).render(u.jsx(Sp.StrictMode,{children:u.jsx(Rv,{children:u.jsx(_v,{children:u.jsx(Nv,{})})})}));export{ta as $,Ha as A,ct as B,ea as C,W1 as D,vd as E,gm as F,tT as G,Ln as H,un as I,yd as J,$p as K,bT as L,gs as M,u as N,sv as O,$v as P,lm as Q,Is as R,kn as S,Ps as T,hm as U,Kc as V,eT as W,Uv as X,Yv as Y,Gv as Z,Bv as _,di as a,qp as a0,wn as a1,zv as a2,Zc as a3,wT as a4,Rs as a5,S as a6,Hp as a7,q1 as a8,vm as a9,Wp as aa,Wa as ab,Mm as ac,Kp as ad,Oe as ae,Kv as af,VT as ag,Sd as ah,Za as ai,v1 as aj,ym as ak,dm as al,Yn as am,Hv as an,Ov as ao,mm as b,_s as c,fd as d,Fv as e,nT as f,ov as g,Li as h,cd as i,Pi as j,Iv as k,av as l,Os as m,Qv as n,m1 as o,xd as p,Js as q,Jv as r,Ed as s,CT as t,AT as u,Bn as v,Gp as w,Ad as x,X1 as y,Bs as z};
