const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Funcionarios-6VXa05aq.js","assets/EmptyState-B_rXl_PT.js","assets/responsive-AvW_67QT.js","assets/useSessionState-DGoEOpRb.js","assets/ModalFuncionario-rVC3OMN7.js","assets/Planificacion-CrAO_RXX.js","assets/AdelantoViaticos-CZNkABiI.js","assets/Reposicion-DBIADjpN.js","assets/Disponibilidad-ygVbF10y.js","assets/Alertas-CZqZRm49.js"])))=>i.map(i=>d[i]);
var Ap=Object.defineProperty;var wp=(i,o,l)=>o in i?Ap(i,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[o]=l;var Ti=(i,o,l)=>wp(i,typeof o!="symbol"?o+"":o,l);(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))d(m);new MutationObserver(m=>{for(const p of m)if(p.type==="childList")for(const P of p.addedNodes)P.tagName==="LINK"&&P.rel==="modulepreload"&&d(P)}).observe(document,{childList:!0,subtree:!0});function l(m){const p={};return m.integrity&&(p.integrity=m.integrity),m.referrerPolicy&&(p.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?p.credentials="include":m.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function d(m){if(m.ep)return;m.ep=!0;const p=l(m);fetch(m.href,p)}})();var nh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Sd(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ls={exports:{}},Ha={},gs={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kc;function kp(){if(Kc)return ce;Kc=1;var i=Symbol.for("react.element"),o=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),P=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),k=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),N=Symbol.iterator;function C(v){return v===null||typeof v!="object"?null:(v=N&&v[N]||v["@@iterator"],typeof v=="function"?v:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,b={};function U(v,V,ne){this.props=v,this.context=V,this.refs=b,this.updater=ne||w}U.prototype.isReactComponent={},U.prototype.setState=function(v,V){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,V,"setState")},U.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function de(){}de.prototype=U.prototype;function ee(v,V,ne){this.props=v,this.context=V,this.refs=b,this.updater=ne||w}var pe=ee.prototype=new de;pe.constructor=ee,I(pe,U.prototype),pe.isPureReactComponent=!0;var Z=Array.isArray,H=Object.prototype.hasOwnProperty,oe={current:null},Ee={key:!0,ref:!0,__self:!0,__source:!0};function Ve(v,V,ne){var re,ie={},le=null,ge=null;if(V!=null)for(re in V.ref!==void 0&&(ge=V.ref),V.key!==void 0&&(le=""+V.key),V)H.call(V,re)&&!Ee.hasOwnProperty(re)&&(ie[re]=V[re]);var ve=arguments.length-2;if(ve===1)ie.children=ne;else if(1<ve){for(var Ne=Array(ve),Oe=0;Oe<ve;Oe++)Ne[Oe]=arguments[Oe+2];ie.children=Ne}if(v&&v.defaultProps)for(re in ve=v.defaultProps,ve)ie[re]===void 0&&(ie[re]=ve[re]);return{$$typeof:i,type:v,key:le,ref:ge,props:ie,_owner:oe.current}}function be(v,V){return{$$typeof:i,type:v.type,key:V,ref:v.ref,props:v.props,_owner:v._owner}}function he(v){return typeof v=="object"&&v!==null&&v.$$typeof===i}function Ce(v){var V={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(ne){return V[ne]})}var Le=/\/+/g;function ue(v,V){return typeof v=="object"&&v!==null&&v.key!=null?Ce(""+v.key):V.toString(36)}function Te(v,V,ne,re,ie){var le=typeof v;(le==="undefined"||le==="boolean")&&(v=null);var ge=!1;if(v===null)ge=!0;else switch(le){case"string":case"number":ge=!0;break;case"object":switch(v.$$typeof){case i:case o:ge=!0}}if(ge)return ge=v,ie=ie(ge),v=re===""?"."+ue(ge,0):re,Z(ie)?(ne="",v!=null&&(ne=v.replace(Le,"$&/")+"/"),Te(ie,V,ne,"",function(Oe){return Oe})):ie!=null&&(he(ie)&&(ie=be(ie,ne+(!ie.key||ge&&ge.key===ie.key?"":(""+ie.key).replace(Le,"$&/")+"/")+v)),V.push(ie)),1;if(ge=0,re=re===""?".":re+":",Z(v))for(var ve=0;ve<v.length;ve++){le=v[ve];var Ne=re+ue(le,ve);ge+=Te(le,V,ne,Ne,ie)}else if(Ne=C(v),typeof Ne=="function")for(v=Ne.call(v),ve=0;!(le=v.next()).done;)le=le.value,Ne=re+ue(le,ve++),ge+=Te(le,V,ne,Ne,ie);else if(le==="object")throw V=String(v),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.");return ge}function me(v,V,ne){if(v==null)return v;var re=[],ie=0;return Te(v,re,"","",function(le){return V.call(ne,le,ie++)}),re}function fe(v){if(v._status===-1){var V=v._result;V=V(),V.then(function(ne){(v._status===0||v._status===-1)&&(v._status=1,v._result=ne)},function(ne){(v._status===0||v._status===-1)&&(v._status=2,v._result=ne)}),v._status===-1&&(v._status=0,v._result=V)}if(v._status===1)return v._result.default;throw v._result}var se={current:null},z={transition:null},$={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:z,ReactCurrentOwner:oe};function Q(){throw Error("act(...) is not supported in production builds of React.")}return ce.Children={map:me,forEach:function(v,V,ne){me(v,function(){V.apply(this,arguments)},ne)},count:function(v){var V=0;return me(v,function(){V++}),V},toArray:function(v){return me(v,function(V){return V})||[]},only:function(v){if(!he(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},ce.Component=U,ce.Fragment=l,ce.Profiler=m,ce.PureComponent=ee,ce.StrictMode=d,ce.Suspense=T,ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,ce.act=Q,ce.cloneElement=function(v,V,ne){if(v==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+v+".");var re=I({},v.props),ie=v.key,le=v.ref,ge=v._owner;if(V!=null){if(V.ref!==void 0&&(le=V.ref,ge=oe.current),V.key!==void 0&&(ie=""+V.key),v.type&&v.type.defaultProps)var ve=v.type.defaultProps;for(Ne in V)H.call(V,Ne)&&!Ee.hasOwnProperty(Ne)&&(re[Ne]=V[Ne]===void 0&&ve!==void 0?ve[Ne]:V[Ne])}var Ne=arguments.length-2;if(Ne===1)re.children=ne;else if(1<Ne){ve=Array(Ne);for(var Oe=0;Oe<Ne;Oe++)ve[Oe]=arguments[Oe+2];re.children=ve}return{$$typeof:i,type:v.type,key:ie,ref:le,props:re,_owner:ge}},ce.createContext=function(v){return v={$$typeof:P,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},v.Provider={$$typeof:p,_context:v},v.Consumer=v},ce.createElement=Ve,ce.createFactory=function(v){var V=Ve.bind(null,v);return V.type=v,V},ce.createRef=function(){return{current:null}},ce.forwardRef=function(v){return{$$typeof:L,render:v}},ce.isValidElement=he,ce.lazy=function(v){return{$$typeof:A,_payload:{_status:-1,_result:v},_init:fe}},ce.memo=function(v,V){return{$$typeof:k,type:v,compare:V===void 0?null:V}},ce.startTransition=function(v){var V=z.transition;z.transition={};try{v()}finally{z.transition=V}},ce.unstable_act=Q,ce.useCallback=function(v,V){return se.current.useCallback(v,V)},ce.useContext=function(v){return se.current.useContext(v)},ce.useDebugValue=function(){},ce.useDeferredValue=function(v){return se.current.useDeferredValue(v)},ce.useEffect=function(v,V){return se.current.useEffect(v,V)},ce.useId=function(){return se.current.useId()},ce.useImperativeHandle=function(v,V,ne){return se.current.useImperativeHandle(v,V,ne)},ce.useInsertionEffect=function(v,V){return se.current.useInsertionEffect(v,V)},ce.useLayoutEffect=function(v,V){return se.current.useLayoutEffect(v,V)},ce.useMemo=function(v,V){return se.current.useMemo(v,V)},ce.useReducer=function(v,V,ne){return se.current.useReducer(v,V,ne)},ce.useRef=function(v){return se.current.useRef(v)},ce.useState=function(v){return se.current.useState(v)},ce.useSyncExternalStore=function(v,V,ne){return se.current.useSyncExternalStore(v,V,ne)},ce.useTransition=function(){return se.current.useTransition()},ce.version="18.3.1",ce}var $c;function Bs(){return $c||($c=1,gs.exports=kp()),gs.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hc;function jp(){if(Hc)return Ha;Hc=1;var i=Bs(),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,m=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function P(L,T,k){var A,N={},C=null,w=null;k!==void 0&&(C=""+k),T.key!==void 0&&(C=""+T.key),T.ref!==void 0&&(w=T.ref);for(A in T)d.call(T,A)&&!p.hasOwnProperty(A)&&(N[A]=T[A]);if(L&&L.defaultProps)for(A in T=L.defaultProps,T)N[A]===void 0&&(N[A]=T[A]);return{$$typeof:o,type:L,key:C,ref:w,props:N,_owner:m.current}}return Ha.Fragment=l,Ha.jsx=P,Ha.jsxs=P,Ha}var qc;function _p(){return qc||(qc=1,Ls.exports=jp()),Ls.exports}var u=_p(),S=Bs();const Rp=Sd(S);var vi={},Ps={exports:{}},un={},ys={exports:{}},Ms={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wc;function Dp(){return Wc||(Wc=1,(function(i){function o(z,$){var Q=z.length;z.push($);e:for(;0<Q;){var v=Q-1>>>1,V=z[v];if(0<m(V,$))z[v]=$,z[Q]=V,Q=v;else break e}}function l(z){return z.length===0?null:z[0]}function d(z){if(z.length===0)return null;var $=z[0],Q=z.pop();if(Q!==$){z[0]=Q;e:for(var v=0,V=z.length,ne=V>>>1;v<ne;){var re=2*(v+1)-1,ie=z[re],le=re+1,ge=z[le];if(0>m(ie,Q))le<V&&0>m(ge,ie)?(z[v]=ge,z[le]=Q,v=le):(z[v]=ie,z[re]=Q,v=re);else if(le<V&&0>m(ge,Q))z[v]=ge,z[le]=Q,v=le;else break e}}return $}function m(z,$){var Q=z.sortIndex-$.sortIndex;return Q!==0?Q:z.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;i.unstable_now=function(){return p.now()}}else{var P=Date,L=P.now();i.unstable_now=function(){return P.now()-L}}var T=[],k=[],A=1,N=null,C=3,w=!1,I=!1,b=!1,U=typeof setTimeout=="function"?setTimeout:null,de=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function pe(z){for(var $=l(k);$!==null;){if($.callback===null)d(k);else if($.startTime<=z)d(k),$.sortIndex=$.expirationTime,o(T,$);else break;$=l(k)}}function Z(z){if(b=!1,pe(z),!I)if(l(T)!==null)I=!0,fe(H);else{var $=l(k);$!==null&&se(Z,$.startTime-z)}}function H(z,$){I=!1,b&&(b=!1,de(Ve),Ve=-1),w=!0;var Q=C;try{for(pe($),N=l(T);N!==null&&(!(N.expirationTime>$)||z&&!Ce());){var v=N.callback;if(typeof v=="function"){N.callback=null,C=N.priorityLevel;var V=v(N.expirationTime<=$);$=i.unstable_now(),typeof V=="function"?N.callback=V:N===l(T)&&d(T),pe($)}else d(T);N=l(T)}if(N!==null)var ne=!0;else{var re=l(k);re!==null&&se(Z,re.startTime-$),ne=!1}return ne}finally{N=null,C=Q,w=!1}}var oe=!1,Ee=null,Ve=-1,be=5,he=-1;function Ce(){return!(i.unstable_now()-he<be)}function Le(){if(Ee!==null){var z=i.unstable_now();he=z;var $=!0;try{$=Ee(!0,z)}finally{$?ue():(oe=!1,Ee=null)}}else oe=!1}var ue;if(typeof ee=="function")ue=function(){ee(Le)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,me=Te.port2;Te.port1.onmessage=Le,ue=function(){me.postMessage(null)}}else ue=function(){U(Le,0)};function fe(z){Ee=z,oe||(oe=!0,ue())}function se(z,$){Ve=U(function(){z(i.unstable_now())},$)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(z){z.callback=null},i.unstable_continueExecution=function(){I||w||(I=!0,fe(H))},i.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):be=0<z?Math.floor(1e3/z):5},i.unstable_getCurrentPriorityLevel=function(){return C},i.unstable_getFirstCallbackNode=function(){return l(T)},i.unstable_next=function(z){switch(C){case 1:case 2:case 3:var $=3;break;default:$=C}var Q=C;C=$;try{return z()}finally{C=Q}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(z,$){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Q=C;C=z;try{return $()}finally{C=Q}},i.unstable_scheduleCallback=function(z,$,Q){var v=i.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?v+Q:v):Q=v,z){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=Q+V,z={id:A++,callback:$,priorityLevel:z,startTime:Q,expirationTime:V,sortIndex:-1},Q>v?(z.sortIndex=Q,o(k,z),l(T)===null&&z===l(k)&&(b?(de(Ve),Ve=-1):b=!0,se(Z,Q-v))):(z.sortIndex=V,o(T,z),I||w||(I=!0,fe(H))),z},i.unstable_shouldYield=Ce,i.unstable_wrapCallback=function(z){var $=C;return function(){var Q=C;C=$;try{return z.apply(this,arguments)}finally{C=Q}}}})(Ms)),Ms}var Zc;function Ip(){return Zc||(Zc=1,ys.exports=Dp()),ys.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xc;function Op(){if(Xc)return un;Xc=1;var i=Bs(),o=Ip();function l(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,m={};function p(e,n){P(e,n),P(e+"Capture",n)}function P(e,n){for(m[e]=n,e=0;e<n.length;e++)d.add(n[e])}var L=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),T=Object.prototype.hasOwnProperty,k=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,A={},N={};function C(e){return T.call(N,e)?!0:T.call(A,e)?!1:k.test(e)?N[e]=!0:(A[e]=!0,!1)}function w(e,n,t,a){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function I(e,n,t,a){if(n===null||typeof n>"u"||w(e,n,t,a))return!0;if(a)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function b(e,n,t,a,r,s,c){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=s,this.removeEmptyString=c}var U={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){U[e]=new b(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];U[n]=new b(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){U[e]=new b(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){U[e]=new b(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){U[e]=new b(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){U[e]=new b(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){U[e]=new b(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){U[e]=new b(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){U[e]=new b(e,5,!1,e.toLowerCase(),null,!1,!1)});var de=/[\-:]([a-z])/g;function ee(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(de,ee);U[n]=new b(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(de,ee);U[n]=new b(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(de,ee);U[n]=new b(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){U[e]=new b(e,1,!1,e.toLowerCase(),null,!1,!1)}),U.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){U[e]=new b(e,1,!1,e.toLowerCase(),null,!0,!0)});function pe(e,n,t,a){var r=U.hasOwnProperty(n)?U[n]:null;(r!==null?r.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(I(n,t,r,a)&&(t=null),a||r===null?C(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,a=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,a?e.setAttributeNS(a,n,t):e.setAttribute(n,t))))}var Z=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),oe=Symbol.for("react.portal"),Ee=Symbol.for("react.fragment"),Ve=Symbol.for("react.strict_mode"),be=Symbol.for("react.profiler"),he=Symbol.for("react.provider"),Ce=Symbol.for("react.context"),Le=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),Te=Symbol.for("react.suspense_list"),me=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),se=Symbol.for("react.offscreen"),z=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,v;function V(e){if(v===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);v=n&&n[1]||""}return`
`+v+e}var ne=!1;function re(e,n){if(!e||ne)return"";ne=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(E){var a=E}Reflect.construct(e,[],n)}else{try{n.call()}catch(E){a=E}e.call(n.prototype)}else{try{throw Error()}catch(E){a=E}e()}}catch(E){if(E&&a&&typeof E.stack=="string"){for(var r=E.stack.split(`
`),s=a.stack.split(`
`),c=r.length-1,f=s.length-1;1<=c&&0<=f&&r[c]!==s[f];)f--;for(;1<=c&&0<=f;c--,f--)if(r[c]!==s[f]){if(c!==1||f!==1)do if(c--,f--,0>f||r[c]!==s[f]){var h=`
`+r[c].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=c&&0<=f);break}}}finally{ne=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?V(e):""}function ie(e){switch(e.tag){case 5:return V(e.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return e=re(e.type,!1),e;case 11:return e=re(e.type.render,!1),e;case 1:return e=re(e.type,!0),e;default:return""}}function le(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ee:return"Fragment";case oe:return"Portal";case be:return"Profiler";case Ve:return"StrictMode";case ue:return"Suspense";case Te:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ce:return(e.displayName||"Context")+".Consumer";case he:return(e._context.displayName||"Context")+".Provider";case Le:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case me:return n=e.displayName||null,n!==null?n:le(e.type)||"Memo";case fe:n=e._payload,e=e._init;try{return le(e(n))}catch{}}return null}function ge(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(n);case 8:return n===Ve?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ve(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ne(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Oe(e){var n=Ne(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(c){a=""+c,s.call(this,c)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function j(e){e._valueTracker||(e._valueTracker=Oe(e))}function Pe(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=Ne(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function Ae(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function zn(e,n){var t=n.checked;return Q({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Zn(e,n){var t=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;t=ve(n.value!=null?n.value:t),e._wrapperState={initialChecked:a,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function yt(e,n){n=n.checked,n!=null&&pe(e,"checked",n,!1)}function x(e,n){yt(e,n);var t=ve(n.value),a=n.type;if(t!=null)a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?X(e,n.type,t):n.hasOwnProperty("defaultValue")&&X(e,n.type,ve(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function O(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function X(e,n,t){(n!=="number"||Ae(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var xe=Array.isArray;function en(e,n,t,a){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&a&&(e[t].defaultSelected=!0)}else{for(t=""+ve(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function Mt(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(l(91));return Q({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function al(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(l(92));if(xe(t)){if(1<t.length)throw Error(l(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:ve(t)}}function rl(e,n){var t=ve(n.value),a=ve(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),a!=null&&(e.defaultValue=""+a)}function il(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ol(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vi(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ol(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var sr,sl=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,a,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,a,r)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(sr=sr||document.createElement("div"),sr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function da(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var ma={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jm=["Webkit","ms","Moz","O"];Object.keys(ma).forEach(function(e){jm.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),ma[n]=ma[e]})});function ll(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||ma.hasOwnProperty(e)&&ma[e]?(""+n).trim():n+"px"}function ul(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var a=t.indexOf("--")===0,r=ll(t,n[t],a);t==="float"&&(t="cssFloat"),a?e.setProperty(t,r):e[t]=r}}var _m=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bi(e,n){if(n){if(_m[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(l(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(l(61))}if(n.style!=null&&typeof n.style!="object")throw Error(l(62))}}function Ai(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wi=null;function ki(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ji=null,It=null,Ot=null;function cl(e){if(e=_a(e)){if(typeof ji!="function")throw Error(l(280));var n=e.stateNode;n&&(n=Ar(n),ji(e.stateNode,e.type,n))}}function dl(e){It?Ot?Ot.push(e):Ot=[e]:It=e}function ml(){if(It){var e=It,n=Ot;if(Ot=It=null,cl(e),n)for(e=0;e<n.length;e++)cl(n[e])}}function fl(e,n){return e(n)}function pl(){}var _i=!1;function Tl(e,n,t){if(_i)return e(n,t);_i=!0;try{return fl(e,n,t)}finally{_i=!1,(It!==null||Ot!==null)&&(pl(),ml())}}function fa(e,n){var t=e.stateNode;if(t===null)return null;var a=Ar(t);if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(l(231,n,typeof t));return t}var Ri=!1;if(L)try{var pa={};Object.defineProperty(pa,"passive",{get:function(){Ri=!0}}),window.addEventListener("test",pa,pa),window.removeEventListener("test",pa,pa)}catch{Ri=!1}function Rm(e,n,t,a,r,s,c,f,h){var E=Array.prototype.slice.call(arguments,3);try{n.apply(t,E)}catch(R){this.onError(R)}}var Ta=!1,lr=null,ur=!1,Di=null,Dm={onError:function(e){Ta=!0,lr=e}};function Im(e,n,t,a,r,s,c,f,h){Ta=!1,lr=null,Rm.apply(Dm,arguments)}function Om(e,n,t,a,r,s,c,f,h){if(Im.apply(this,arguments),Ta){if(Ta){var E=lr;Ta=!1,lr=null}else throw Error(l(198));ur||(ur=!0,Di=E)}}function Et(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function vl(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function hl(e){if(Et(e)!==e)throw Error(l(188))}function Fm(e){var n=e.alternate;if(!n){if(n=Et(e),n===null)throw Error(l(188));return n!==e?null:e}for(var t=e,a=n;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(a=r.return,a!==null){t=a;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return hl(r),e;if(s===a)return hl(r),n;s=s.sibling}throw Error(l(188))}if(t.return!==a.return)t=r,a=s;else{for(var c=!1,f=r.child;f;){if(f===t){c=!0,t=r,a=s;break}if(f===a){c=!0,a=r,t=s;break}f=f.sibling}if(!c){for(f=s.child;f;){if(f===t){c=!0,t=s,a=r;break}if(f===a){c=!0,a=s,t=r;break}f=f.sibling}if(!c)throw Error(l(189))}}if(t.alternate!==a)throw Error(l(190))}if(t.tag!==3)throw Error(l(188));return t.stateNode.current===t?e:n}function Ll(e){return e=Fm(e),e!==null?gl(e):null}function gl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=gl(e);if(n!==null)return n;e=e.sibling}return null}var Pl=o.unstable_scheduleCallback,yl=o.unstable_cancelCallback,zm=o.unstable_shouldYield,Qm=o.unstable_requestPaint,Fe=o.unstable_now,Jm=o.unstable_getCurrentPriorityLevel,Ii=o.unstable_ImmediatePriority,Ml=o.unstable_UserBlockingPriority,cr=o.unstable_NormalPriority,Bm=o.unstable_LowPriority,El=o.unstable_IdlePriority,dr=null,jn=null;function Ym(e){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(dr,e,void 0,(e.current.flags&128)===128)}catch{}}var En=Math.clz32?Math.clz32:Km,Um=Math.log,Gm=Math.LN2;function Km(e){return e>>>=0,e===0?32:31-(Um(e)/Gm|0)|0}var mr=64,fr=4194304;function va(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pr(e,n){var t=e.pendingLanes;if(t===0)return 0;var a=0,r=e.suspendedLanes,s=e.pingedLanes,c=t&268435455;if(c!==0){var f=c&~r;f!==0?a=va(f):(s&=c,s!==0&&(a=va(s)))}else c=t&~r,c!==0?a=va(c):s!==0&&(a=va(s));if(a===0)return 0;if(n!==0&&n!==a&&(n&r)===0&&(r=a&-a,s=n&-n,r>=s||r===16&&(s&4194240)!==0))return n;if((a&4)!==0&&(a|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)t=31-En(n),r=1<<t,a|=e[t],n&=~r;return a}function $m(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hm(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes;0<s;){var c=31-En(s),f=1<<c,h=r[c];h===-1?((f&t)===0||(f&a)!==0)&&(r[c]=$m(f,n)):h<=n&&(e.expiredLanes|=f),s&=~f}}function Oi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Nl(){var e=mr;return mr<<=1,(mr&4194240)===0&&(mr=64),e}function Fi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ha(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-En(n),e[n]=t}function qm(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-En(t),s=1<<r;n[r]=0,a[r]=-1,e[r]=-1,t&=~s}}function zi(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-En(t),r=1<<a;r&n|e[a]&n&&(e[a]|=n),t&=~r}}var Se=0;function Cl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var xl,Qi,Sl,Vl,bl,Ji=!1,Tr=[],Xn=null,et=null,nt=null,La=new Map,ga=new Map,tt=[],Wm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Al(e,n){switch(e){case"focusin":case"focusout":Xn=null;break;case"dragenter":case"dragleave":et=null;break;case"mouseover":case"mouseout":nt=null;break;case"pointerover":case"pointerout":La.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ga.delete(n.pointerId)}}function Pa(e,n,t,a,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:s,targetContainers:[r]},n!==null&&(n=_a(n),n!==null&&Qi(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function Zm(e,n,t,a,r){switch(n){case"focusin":return Xn=Pa(Xn,e,n,t,a,r),!0;case"dragenter":return et=Pa(et,e,n,t,a,r),!0;case"mouseover":return nt=Pa(nt,e,n,t,a,r),!0;case"pointerover":var s=r.pointerId;return La.set(s,Pa(La.get(s)||null,e,n,t,a,r)),!0;case"gotpointercapture":return s=r.pointerId,ga.set(s,Pa(ga.get(s)||null,e,n,t,a,r)),!0}return!1}function wl(e){var n=Nt(e.target);if(n!==null){var t=Et(n);if(t!==null){if(n=t.tag,n===13){if(n=vl(t),n!==null){e.blockedOn=n,bl(e.priority,function(){Sl(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Yi(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);wi=a,t.target.dispatchEvent(a),wi=null}else return n=_a(t),n!==null&&Qi(n),e.blockedOn=t,!1;n.shift()}return!0}function kl(e,n,t){vr(e)&&t.delete(n)}function Xm(){Ji=!1,Xn!==null&&vr(Xn)&&(Xn=null),et!==null&&vr(et)&&(et=null),nt!==null&&vr(nt)&&(nt=null),La.forEach(kl),ga.forEach(kl)}function ya(e,n){e.blockedOn===n&&(e.blockedOn=null,Ji||(Ji=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Xm)))}function Ma(e){function n(r){return ya(r,e)}if(0<Tr.length){ya(Tr[0],e);for(var t=1;t<Tr.length;t++){var a=Tr[t];a.blockedOn===e&&(a.blockedOn=null)}}for(Xn!==null&&ya(Xn,e),et!==null&&ya(et,e),nt!==null&&ya(nt,e),La.forEach(n),ga.forEach(n),t=0;t<tt.length;t++)a=tt[t],a.blockedOn===e&&(a.blockedOn=null);for(;0<tt.length&&(t=tt[0],t.blockedOn===null);)wl(t),t.blockedOn===null&&tt.shift()}var Ft=Z.ReactCurrentBatchConfig,hr=!0;function ef(e,n,t,a){var r=Se,s=Ft.transition;Ft.transition=null;try{Se=1,Bi(e,n,t,a)}finally{Se=r,Ft.transition=s}}function nf(e,n,t,a){var r=Se,s=Ft.transition;Ft.transition=null;try{Se=4,Bi(e,n,t,a)}finally{Se=r,Ft.transition=s}}function Bi(e,n,t,a){if(hr){var r=Yi(e,n,t,a);if(r===null)so(e,n,a,Lr,t),Al(e,a);else if(Zm(r,e,n,t,a))a.stopPropagation();else if(Al(e,a),n&4&&-1<Wm.indexOf(e)){for(;r!==null;){var s=_a(r);if(s!==null&&xl(s),s=Yi(e,n,t,a),s===null&&so(e,n,a,Lr,t),s===r)break;r=s}r!==null&&a.stopPropagation()}else so(e,n,a,null,t)}}var Lr=null;function Yi(e,n,t,a){if(Lr=null,e=ki(a),e=Nt(e),e!==null)if(n=Et(e),n===null)e=null;else if(t=n.tag,t===13){if(e=vl(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Lr=e,null}function jl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jm()){case Ii:return 1;case Ml:return 4;case cr:case Bm:return 16;case El:return 536870912;default:return 16}default:return 16}}var at=null,Ui=null,gr=null;function _l(){if(gr)return gr;var e,n=Ui,t=n.length,a,r="value"in at?at.value:at.textContent,s=r.length;for(e=0;e<t&&n[e]===r[e];e++);var c=t-e;for(a=1;a<=c&&n[t-a]===r[s-a];a++);return gr=r.slice(e,1<a?1-a:void 0)}function Pr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function yr(){return!0}function Rl(){return!1}function dn(e){function n(t,a,r,s,c){this._reactName=t,this._targetInst=r,this.type=a,this.nativeEvent=s,this.target=c,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(t=e[f],this[f]=t?t(s):s[f]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?yr:Rl,this.isPropagationStopped=Rl,this}return Q(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=yr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=yr)},persist:function(){},isPersistent:yr}),n}var zt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gi=dn(zt),Ea=Q({},zt,{view:0,detail:0}),tf=dn(Ea),Ki,$i,Na,Mr=Q({},Ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Na&&(Na&&e.type==="mousemove"?(Ki=e.screenX-Na.screenX,$i=e.screenY-Na.screenY):$i=Ki=0,Na=e),Ki)},movementY:function(e){return"movementY"in e?e.movementY:$i}}),Dl=dn(Mr),af=Q({},Mr,{dataTransfer:0}),rf=dn(af),of=Q({},Ea,{relatedTarget:0}),Hi=dn(of),sf=Q({},zt,{animationName:0,elapsedTime:0,pseudoElement:0}),lf=dn(sf),uf=Q({},zt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cf=dn(uf),df=Q({},zt,{data:0}),Il=dn(df),mf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ff={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=pf[e])?!!n[e]:!1}function qi(){return Tf}var vf=Q({},Ea,{key:function(e){if(e.key){var n=mf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Pr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ff[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qi,charCode:function(e){return e.type==="keypress"?Pr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hf=dn(vf),Lf=Q({},Mr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ol=dn(Lf),gf=Q({},Ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qi}),Pf=dn(gf),yf=Q({},zt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mf=dn(yf),Ef=Q({},Mr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nf=dn(Ef),Cf=[9,13,27,32],Wi=L&&"CompositionEvent"in window,Ca=null;L&&"documentMode"in document&&(Ca=document.documentMode);var xf=L&&"TextEvent"in window&&!Ca,Fl=L&&(!Wi||Ca&&8<Ca&&11>=Ca),zl=" ",Ql=!1;function Jl(e,n){switch(e){case"keyup":return Cf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qt=!1;function Sf(e,n){switch(e){case"compositionend":return Bl(n);case"keypress":return n.which!==32?null:(Ql=!0,zl);case"textInput":return e=n.data,e===zl&&Ql?null:e;default:return null}}function Vf(e,n){if(Qt)return e==="compositionend"||!Wi&&Jl(e,n)?(e=_l(),gr=Ui=at=null,Qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Fl&&n.locale!=="ko"?null:n.data;default:return null}}var bf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!bf[e.type]:n==="textarea"}function Ul(e,n,t,a){dl(a),n=Sr(n,"onChange"),0<n.length&&(t=new Gi("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var xa=null,Sa=null;function Af(e){uu(e,0)}function Er(e){var n=Gt(e);if(Pe(n))return e}function wf(e,n){if(e==="change")return n}var Gl=!1;if(L){var Zi;if(L){var Xi="oninput"in document;if(!Xi){var Kl=document.createElement("div");Kl.setAttribute("oninput","return;"),Xi=typeof Kl.oninput=="function"}Zi=Xi}else Zi=!1;Gl=Zi&&(!document.documentMode||9<document.documentMode)}function $l(){xa&&(xa.detachEvent("onpropertychange",Hl),Sa=xa=null)}function Hl(e){if(e.propertyName==="value"&&Er(Sa)){var n=[];Ul(n,Sa,e,ki(e)),Tl(Af,n)}}function kf(e,n,t){e==="focusin"?($l(),xa=n,Sa=t,xa.attachEvent("onpropertychange",Hl)):e==="focusout"&&$l()}function jf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Er(Sa)}function _f(e,n){if(e==="click")return Er(n)}function Rf(e,n){if(e==="input"||e==="change")return Er(n)}function Df(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Nn=typeof Object.is=="function"?Object.is:Df;function Va(e,n){if(Nn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var r=t[a];if(!T.call(n,r)||!Nn(e[r],n[r]))return!1}return!0}function ql(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wl(e,n){var t=ql(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ql(t)}}function Zl(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Zl(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Xl(){for(var e=window,n=Ae();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ae(e.document)}return n}function eo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function If(e){var n=Xl(),t=e.focusedElem,a=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Zl(t.ownerDocument.documentElement,t)){if(a!==null&&eo(t)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,s=Math.min(a.start,r);a=a.end===void 0?s:Math.min(a.end,r),!e.extend&&s>a&&(r=a,a=s,s=r),r=Wl(t,s);var c=Wl(t,a);r&&c&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),s>a?(e.addRange(n),e.extend(c.node,c.offset)):(n.setEnd(c.node,c.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Of=L&&"documentMode"in document&&11>=document.documentMode,Jt=null,no=null,ba=null,to=!1;function eu(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;to||Jt==null||Jt!==Ae(a)||(a=Jt,"selectionStart"in a&&eo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ba&&Va(ba,a)||(ba=a,a=Sr(no,"onSelect"),0<a.length&&(n=new Gi("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=Jt)))}function Nr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Bt={animationend:Nr("Animation","AnimationEnd"),animationiteration:Nr("Animation","AnimationIteration"),animationstart:Nr("Animation","AnimationStart"),transitionend:Nr("Transition","TransitionEnd")},ao={},nu={};L&&(nu=document.createElement("div").style,"AnimationEvent"in window||(delete Bt.animationend.animation,delete Bt.animationiteration.animation,delete Bt.animationstart.animation),"TransitionEvent"in window||delete Bt.transitionend.transition);function Cr(e){if(ao[e])return ao[e];if(!Bt[e])return e;var n=Bt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in nu)return ao[e]=n[t];return e}var tu=Cr("animationend"),au=Cr("animationiteration"),ru=Cr("animationstart"),iu=Cr("transitionend"),ou=new Map,su="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rt(e,n){ou.set(e,n),p(n,[e])}for(var ro=0;ro<su.length;ro++){var io=su[ro],Ff=io.toLowerCase(),zf=io[0].toUpperCase()+io.slice(1);rt(Ff,"on"+zf)}rt(tu,"onAnimationEnd"),rt(au,"onAnimationIteration"),rt(ru,"onAnimationStart"),rt("dblclick","onDoubleClick"),rt("focusin","onFocus"),rt("focusout","onBlur"),rt(iu,"onTransitionEnd"),P("onMouseEnter",["mouseout","mouseover"]),P("onMouseLeave",["mouseout","mouseover"]),P("onPointerEnter",["pointerout","pointerover"]),P("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Aa));function lu(e,n,t){var a=e.type||"unknown-event";e.currentTarget=t,Om(a,n,void 0,e),e.currentTarget=null}function uu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],r=a.event;a=a.listeners;e:{var s=void 0;if(n)for(var c=a.length-1;0<=c;c--){var f=a[c],h=f.instance,E=f.currentTarget;if(f=f.listener,h!==s&&r.isPropagationStopped())break e;lu(r,f,E),s=h}else for(c=0;c<a.length;c++){if(f=a[c],h=f.instance,E=f.currentTarget,f=f.listener,h!==s&&r.isPropagationStopped())break e;lu(r,f,E),s=h}}}if(ur)throw e=Di,ur=!1,Di=null,e}function ke(e,n){var t=n[po];t===void 0&&(t=n[po]=new Set);var a=e+"__bubble";t.has(a)||(cu(n,e,2,!1),t.add(a))}function oo(e,n,t){var a=0;n&&(a|=4),cu(t,e,a,n)}var xr="_reactListening"+Math.random().toString(36).slice(2);function wa(e){if(!e[xr]){e[xr]=!0,d.forEach(function(t){t!=="selectionchange"&&(Qf.has(t)||oo(t,!1,e),oo(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[xr]||(n[xr]=!0,oo("selectionchange",!1,n))}}function cu(e,n,t,a){switch(jl(n)){case 1:var r=ef;break;case 4:r=nf;break;default:r=Bi}t=r.bind(null,n,t,e),r=void 0,!Ri||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function so(e,n,t,a,r){var s=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var f=a.stateNode.containerInfo;if(f===r||f.nodeType===8&&f.parentNode===r)break;if(c===4)for(c=a.return;c!==null;){var h=c.tag;if((h===3||h===4)&&(h=c.stateNode.containerInfo,h===r||h.nodeType===8&&h.parentNode===r))return;c=c.return}for(;f!==null;){if(c=Nt(f),c===null)return;if(h=c.tag,h===5||h===6){a=s=c;continue e}f=f.parentNode}}a=a.return}Tl(function(){var E=s,R=ki(t),D=[];e:{var _=ou.get(e);if(_!==void 0){var J=Gi,Y=e;switch(e){case"keypress":if(Pr(t)===0)break e;case"keydown":case"keyup":J=hf;break;case"focusin":Y="focus",J=Hi;break;case"focusout":Y="blur",J=Hi;break;case"beforeblur":case"afterblur":J=Hi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=Dl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=rf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=Pf;break;case tu:case au:case ru:J=lf;break;case iu:J=Mf;break;case"scroll":J=tf;break;case"wheel":J=Nf;break;case"copy":case"cut":case"paste":J=cf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=Ol}var G=(n&4)!==0,ze=!G&&e==="scroll",y=G?_!==null?_+"Capture":null:_;G=[];for(var g=E,M;g!==null;){M=g;var F=M.stateNode;if(M.tag===5&&F!==null&&(M=F,y!==null&&(F=fa(g,y),F!=null&&G.push(ka(g,F,M)))),ze)break;g=g.return}0<G.length&&(_=new J(_,Y,null,t,R),D.push({event:_,listeners:G}))}}if((n&7)===0){e:{if(_=e==="mouseover"||e==="pointerover",J=e==="mouseout"||e==="pointerout",_&&t!==wi&&(Y=t.relatedTarget||t.fromElement)&&(Nt(Y)||Y[Qn]))break e;if((J||_)&&(_=R.window===R?R:(_=R.ownerDocument)?_.defaultView||_.parentWindow:window,J?(Y=t.relatedTarget||t.toElement,J=E,Y=Y?Nt(Y):null,Y!==null&&(ze=Et(Y),Y!==ze||Y.tag!==5&&Y.tag!==6)&&(Y=null)):(J=null,Y=E),J!==Y)){if(G=Dl,F="onMouseLeave",y="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(G=Ol,F="onPointerLeave",y="onPointerEnter",g="pointer"),ze=J==null?_:Gt(J),M=Y==null?_:Gt(Y),_=new G(F,g+"leave",J,t,R),_.target=ze,_.relatedTarget=M,F=null,Nt(R)===E&&(G=new G(y,g+"enter",Y,t,R),G.target=M,G.relatedTarget=ze,F=G),ze=F,J&&Y)n:{for(G=J,y=Y,g=0,M=G;M;M=Yt(M))g++;for(M=0,F=y;F;F=Yt(F))M++;for(;0<g-M;)G=Yt(G),g--;for(;0<M-g;)y=Yt(y),M--;for(;g--;){if(G===y||y!==null&&G===y.alternate)break n;G=Yt(G),y=Yt(y)}G=null}else G=null;J!==null&&du(D,_,J,G,!1),Y!==null&&ze!==null&&du(D,ze,Y,G,!0)}}e:{if(_=E?Gt(E):window,J=_.nodeName&&_.nodeName.toLowerCase(),J==="select"||J==="input"&&_.type==="file")var K=wf;else if(Yl(_))if(Gl)K=Rf;else{K=jf;var q=kf}else(J=_.nodeName)&&J.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(K=_f);if(K&&(K=K(e,E))){Ul(D,K,t,R);break e}q&&q(e,_,E),e==="focusout"&&(q=_._wrapperState)&&q.controlled&&_.type==="number"&&X(_,"number",_.value)}switch(q=E?Gt(E):window,e){case"focusin":(Yl(q)||q.contentEditable==="true")&&(Jt=q,no=E,ba=null);break;case"focusout":ba=no=Jt=null;break;case"mousedown":to=!0;break;case"contextmenu":case"mouseup":case"dragend":to=!1,eu(D,t,R);break;case"selectionchange":if(Of)break;case"keydown":case"keyup":eu(D,t,R)}var W;if(Wi)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else Qt?Jl(e,t)&&(te="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(te="onCompositionStart");te&&(Fl&&t.locale!=="ko"&&(Qt||te!=="onCompositionStart"?te==="onCompositionEnd"&&Qt&&(W=_l()):(at=R,Ui="value"in at?at.value:at.textContent,Qt=!0)),q=Sr(E,te),0<q.length&&(te=new Il(te,e,null,t,R),D.push({event:te,listeners:q}),W?te.data=W:(W=Bl(t),W!==null&&(te.data=W)))),(W=xf?Sf(e,t):Vf(e,t))&&(E=Sr(E,"onBeforeInput"),0<E.length&&(R=new Il("onBeforeInput","beforeinput",null,t,R),D.push({event:R,listeners:E}),R.data=W))}uu(D,n)})}function ka(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Sr(e,n){for(var t=n+"Capture",a=[];e!==null;){var r=e,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=fa(e,t),s!=null&&a.unshift(ka(e,s,r)),s=fa(e,n),s!=null&&a.push(ka(e,s,r))),e=e.return}return a}function Yt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function du(e,n,t,a,r){for(var s=n._reactName,c=[];t!==null&&t!==a;){var f=t,h=f.alternate,E=f.stateNode;if(h!==null&&h===a)break;f.tag===5&&E!==null&&(f=E,r?(h=fa(t,s),h!=null&&c.unshift(ka(t,h,f))):r||(h=fa(t,s),h!=null&&c.push(ka(t,h,f)))),t=t.return}c.length!==0&&e.push({event:n,listeners:c})}var Jf=/\r\n?/g,Bf=/\u0000|\uFFFD/g;function mu(e){return(typeof e=="string"?e:""+e).replace(Jf,`
`).replace(Bf,"")}function Vr(e,n,t){if(n=mu(n),mu(e)!==n&&t)throw Error(l(425))}function br(){}var lo=null,uo=null;function co(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var mo=typeof setTimeout=="function"?setTimeout:void 0,Yf=typeof clearTimeout=="function"?clearTimeout:void 0,fu=typeof Promise=="function"?Promise:void 0,Uf=typeof queueMicrotask=="function"?queueMicrotask:typeof fu<"u"?function(e){return fu.resolve(null).then(e).catch(Gf)}:mo;function Gf(e){setTimeout(function(){throw e})}function fo(e,n){var t=n,a=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(a===0){e.removeChild(r),Ma(n);return}a--}else t!=="$"&&t!=="$?"&&t!=="$!"||a++;t=r}while(t);Ma(n)}function it(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function pu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Ut=Math.random().toString(36).slice(2),_n="__reactFiber$"+Ut,ja="__reactProps$"+Ut,Qn="__reactContainer$"+Ut,po="__reactEvents$"+Ut,Kf="__reactListeners$"+Ut,$f="__reactHandles$"+Ut;function Nt(e){var n=e[_n];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Qn]||t[_n]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=pu(e);e!==null;){if(t=e[_n])return t;e=pu(e)}return n}e=t,t=e.parentNode}return null}function _a(e){return e=e[_n]||e[Qn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function Ar(e){return e[ja]||null}var To=[],Kt=-1;function ot(e){return{current:e}}function je(e){0>Kt||(e.current=To[Kt],To[Kt]=null,Kt--)}function we(e,n){Kt++,To[Kt]=e.current,e.current=n}var st={},qe=ot(st),an=ot(!1),Ct=st;function $t(e,n){var t=e.type.contextTypes;if(!t)return st;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=n[s];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function rn(e){return e=e.childContextTypes,e!=null}function wr(){je(an),je(qe)}function Tu(e,n,t){if(qe.current!==st)throw Error(l(168));we(qe,n),we(an,t)}function vu(e,n,t){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return t;a=a.getChildContext();for(var r in a)if(!(r in n))throw Error(l(108,ge(e)||"Unknown",r));return Q({},t,a)}function kr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||st,Ct=qe.current,we(qe,e),we(an,an.current),!0}function hu(e,n,t){var a=e.stateNode;if(!a)throw Error(l(169));t?(e=vu(e,n,Ct),a.__reactInternalMemoizedMergedChildContext=e,je(an),je(qe),we(qe,e)):je(an),we(an,t)}var Jn=null,jr=!1,vo=!1;function Lu(e){Jn===null?Jn=[e]:Jn.push(e)}function Hf(e){jr=!0,Lu(e)}function lt(){if(!vo&&Jn!==null){vo=!0;var e=0,n=Se;try{var t=Jn;for(Se=1;e<t.length;e++){var a=t[e];do a=a(!0);while(a!==null)}Jn=null,jr=!1}catch(r){throw Jn!==null&&(Jn=Jn.slice(e+1)),Pl(Ii,lt),r}finally{Se=n,vo=!1}}return null}var Ht=[],qt=0,_r=null,Rr=0,Tn=[],vn=0,xt=null,Bn=1,Yn="";function St(e,n){Ht[qt++]=Rr,Ht[qt++]=_r,_r=e,Rr=n}function gu(e,n,t){Tn[vn++]=Bn,Tn[vn++]=Yn,Tn[vn++]=xt,xt=e;var a=Bn;e=Yn;var r=32-En(a)-1;a&=~(1<<r),t+=1;var s=32-En(n)+r;if(30<s){var c=r-r%5;s=(a&(1<<c)-1).toString(32),a>>=c,r-=c,Bn=1<<32-En(n)+r|t<<r|a,Yn=s+e}else Bn=1<<s|t<<r|a,Yn=e}function ho(e){e.return!==null&&(St(e,1),gu(e,1,0))}function Lo(e){for(;e===_r;)_r=Ht[--qt],Ht[qt]=null,Rr=Ht[--qt],Ht[qt]=null;for(;e===xt;)xt=Tn[--vn],Tn[vn]=null,Yn=Tn[--vn],Tn[vn]=null,Bn=Tn[--vn],Tn[vn]=null}var mn=null,fn=null,_e=!1,Cn=null;function Pu(e,n){var t=Pn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function yu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,mn=e,fn=it(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,mn=e,fn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=xt!==null?{id:Bn,overflow:Yn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Pn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,mn=e,fn=null,!0):!1;default:return!1}}function go(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Po(e){if(_e){var n=fn;if(n){var t=n;if(!yu(e,n)){if(go(e))throw Error(l(418));n=it(t.nextSibling);var a=mn;n&&yu(e,n)?Pu(a,t):(e.flags=e.flags&-4097|2,_e=!1,mn=e)}}else{if(go(e))throw Error(l(418));e.flags=e.flags&-4097|2,_e=!1,mn=e}}}function Mu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;mn=e}function Dr(e){if(e!==mn)return!1;if(!_e)return Mu(e),_e=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!co(e.type,e.memoizedProps)),n&&(n=fn)){if(go(e))throw Eu(),Error(l(418));for(;n;)Pu(e,n),n=it(n.nextSibling)}if(Mu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){fn=it(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}fn=null}}else fn=mn?it(e.stateNode.nextSibling):null;return!0}function Eu(){for(var e=fn;e;)e=it(e.nextSibling)}function Wt(){fn=mn=null,_e=!1}function yo(e){Cn===null?Cn=[e]:Cn.push(e)}var qf=Z.ReactCurrentBatchConfig;function Ra(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(l(309));var a=t.stateNode}if(!a)throw Error(l(147,e));var r=a,s=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===s?n.ref:(n=function(c){var f=r.refs;c===null?delete f[s]:f[s]=c},n._stringRef=s,n)}if(typeof e!="string")throw Error(l(284));if(!t._owner)throw Error(l(290,e))}return e}function Ir(e,n){throw e=Object.prototype.toString.call(n),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Nu(e){var n=e._init;return n(e._payload)}function Cu(e){function n(y,g){if(e){var M=y.deletions;M===null?(y.deletions=[g],y.flags|=16):M.push(g)}}function t(y,g){if(!e)return null;for(;g!==null;)n(y,g),g=g.sibling;return null}function a(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function r(y,g){return y=vt(y,g),y.index=0,y.sibling=null,y}function s(y,g,M){return y.index=M,e?(M=y.alternate,M!==null?(M=M.index,M<g?(y.flags|=2,g):M):(y.flags|=2,g)):(y.flags|=1048576,g)}function c(y){return e&&y.alternate===null&&(y.flags|=2),y}function f(y,g,M,F){return g===null||g.tag!==6?(g=ms(M,y.mode,F),g.return=y,g):(g=r(g,M),g.return=y,g)}function h(y,g,M,F){var K=M.type;return K===Ee?R(y,g,M.props.children,F,M.key):g!==null&&(g.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===fe&&Nu(K)===g.type)?(F=r(g,M.props),F.ref=Ra(y,g,M),F.return=y,F):(F=si(M.type,M.key,M.props,null,y.mode,F),F.ref=Ra(y,g,M),F.return=y,F)}function E(y,g,M,F){return g===null||g.tag!==4||g.stateNode.containerInfo!==M.containerInfo||g.stateNode.implementation!==M.implementation?(g=fs(M,y.mode,F),g.return=y,g):(g=r(g,M.children||[]),g.return=y,g)}function R(y,g,M,F,K){return g===null||g.tag!==7?(g=Rt(M,y.mode,F,K),g.return=y,g):(g=r(g,M),g.return=y,g)}function D(y,g,M){if(typeof g=="string"&&g!==""||typeof g=="number")return g=ms(""+g,y.mode,M),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case H:return M=si(g.type,g.key,g.props,null,y.mode,M),M.ref=Ra(y,null,g),M.return=y,M;case oe:return g=fs(g,y.mode,M),g.return=y,g;case fe:var F=g._init;return D(y,F(g._payload),M)}if(xe(g)||$(g))return g=Rt(g,y.mode,M,null),g.return=y,g;Ir(y,g)}return null}function _(y,g,M,F){var K=g!==null?g.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return K!==null?null:f(y,g,""+M,F);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case H:return M.key===K?h(y,g,M,F):null;case oe:return M.key===K?E(y,g,M,F):null;case fe:return K=M._init,_(y,g,K(M._payload),F)}if(xe(M)||$(M))return K!==null?null:R(y,g,M,F,null);Ir(y,M)}return null}function J(y,g,M,F,K){if(typeof F=="string"&&F!==""||typeof F=="number")return y=y.get(M)||null,f(g,y,""+F,K);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case H:return y=y.get(F.key===null?M:F.key)||null,h(g,y,F,K);case oe:return y=y.get(F.key===null?M:F.key)||null,E(g,y,F,K);case fe:var q=F._init;return J(y,g,M,q(F._payload),K)}if(xe(F)||$(F))return y=y.get(M)||null,R(g,y,F,K,null);Ir(g,F)}return null}function Y(y,g,M,F){for(var K=null,q=null,W=g,te=g=0,Ke=null;W!==null&&te<M.length;te++){W.index>te?(Ke=W,W=null):Ke=W.sibling;var Me=_(y,W,M[te],F);if(Me===null){W===null&&(W=Ke);break}e&&W&&Me.alternate===null&&n(y,W),g=s(Me,g,te),q===null?K=Me:q.sibling=Me,q=Me,W=Ke}if(te===M.length)return t(y,W),_e&&St(y,te),K;if(W===null){for(;te<M.length;te++)W=D(y,M[te],F),W!==null&&(g=s(W,g,te),q===null?K=W:q.sibling=W,q=W);return _e&&St(y,te),K}for(W=a(y,W);te<M.length;te++)Ke=J(W,y,te,M[te],F),Ke!==null&&(e&&Ke.alternate!==null&&W.delete(Ke.key===null?te:Ke.key),g=s(Ke,g,te),q===null?K=Ke:q.sibling=Ke,q=Ke);return e&&W.forEach(function(ht){return n(y,ht)}),_e&&St(y,te),K}function G(y,g,M,F){var K=$(M);if(typeof K!="function")throw Error(l(150));if(M=K.call(M),M==null)throw Error(l(151));for(var q=K=null,W=g,te=g=0,Ke=null,Me=M.next();W!==null&&!Me.done;te++,Me=M.next()){W.index>te?(Ke=W,W=null):Ke=W.sibling;var ht=_(y,W,Me.value,F);if(ht===null){W===null&&(W=Ke);break}e&&W&&ht.alternate===null&&n(y,W),g=s(ht,g,te),q===null?K=ht:q.sibling=ht,q=ht,W=Ke}if(Me.done)return t(y,W),_e&&St(y,te),K;if(W===null){for(;!Me.done;te++,Me=M.next())Me=D(y,Me.value,F),Me!==null&&(g=s(Me,g,te),q===null?K=Me:q.sibling=Me,q=Me);return _e&&St(y,te),K}for(W=a(y,W);!Me.done;te++,Me=M.next())Me=J(W,y,te,Me.value,F),Me!==null&&(e&&Me.alternate!==null&&W.delete(Me.key===null?te:Me.key),g=s(Me,g,te),q===null?K=Me:q.sibling=Me,q=Me);return e&&W.forEach(function(bp){return n(y,bp)}),_e&&St(y,te),K}function ze(y,g,M,F){if(typeof M=="object"&&M!==null&&M.type===Ee&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case H:e:{for(var K=M.key,q=g;q!==null;){if(q.key===K){if(K=M.type,K===Ee){if(q.tag===7){t(y,q.sibling),g=r(q,M.props.children),g.return=y,y=g;break e}}else if(q.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===fe&&Nu(K)===q.type){t(y,q.sibling),g=r(q,M.props),g.ref=Ra(y,q,M),g.return=y,y=g;break e}t(y,q);break}else n(y,q);q=q.sibling}M.type===Ee?(g=Rt(M.props.children,y.mode,F,M.key),g.return=y,y=g):(F=si(M.type,M.key,M.props,null,y.mode,F),F.ref=Ra(y,g,M),F.return=y,y=F)}return c(y);case oe:e:{for(q=M.key;g!==null;){if(g.key===q)if(g.tag===4&&g.stateNode.containerInfo===M.containerInfo&&g.stateNode.implementation===M.implementation){t(y,g.sibling),g=r(g,M.children||[]),g.return=y,y=g;break e}else{t(y,g);break}else n(y,g);g=g.sibling}g=fs(M,y.mode,F),g.return=y,y=g}return c(y);case fe:return q=M._init,ze(y,g,q(M._payload),F)}if(xe(M))return Y(y,g,M,F);if($(M))return G(y,g,M,F);Ir(y,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,g!==null&&g.tag===6?(t(y,g.sibling),g=r(g,M),g.return=y,y=g):(t(y,g),g=ms(M,y.mode,F),g.return=y,y=g),c(y)):t(y,g)}return ze}var Zt=Cu(!0),xu=Cu(!1),Or=ot(null),Fr=null,Xt=null,Mo=null;function Eo(){Mo=Xt=Fr=null}function No(e){var n=Or.current;je(Or),e._currentValue=n}function Co(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function ea(e,n){Fr=e,Mo=Xt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(on=!0),e.firstContext=null)}function hn(e){var n=e._currentValue;if(Mo!==e)if(e={context:e,memoizedValue:n,next:null},Xt===null){if(Fr===null)throw Error(l(308));Xt=e,Fr.dependencies={lanes:0,firstContext:e}}else Xt=Xt.next=e;return n}var Vt=null;function xo(e){Vt===null?Vt=[e]:Vt.push(e)}function Su(e,n,t,a){var r=n.interleaved;return r===null?(t.next=t,xo(n)):(t.next=r.next,r.next=t),n.interleaved=t,Un(e,a)}function Un(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var ut=!1;function So(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function ct(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ye&2)!==0){var r=a.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),a.pending=n,Un(e,t)}return r=a.interleaved,r===null?(n.next=n,xo(a)):(n.next=r.next,r.next=n),a.interleaved=n,Un(e,t)}function zr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,zi(e,t)}}function bu(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var c={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=c:s=s.next=c,t=t.next}while(t!==null);s===null?r=s=n:s=s.next=n}else r=s=n;t={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:a.shared,effects:a.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Qr(e,n,t,a){var r=e.updateQueue;ut=!1;var s=r.firstBaseUpdate,c=r.lastBaseUpdate,f=r.shared.pending;if(f!==null){r.shared.pending=null;var h=f,E=h.next;h.next=null,c===null?s=E:c.next=E,c=h;var R=e.alternate;R!==null&&(R=R.updateQueue,f=R.lastBaseUpdate,f!==c&&(f===null?R.firstBaseUpdate=E:f.next=E,R.lastBaseUpdate=h))}if(s!==null){var D=r.baseState;c=0,R=E=h=null,f=s;do{var _=f.lane,J=f.eventTime;if((a&_)===_){R!==null&&(R=R.next={eventTime:J,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var Y=e,G=f;switch(_=n,J=t,G.tag){case 1:if(Y=G.payload,typeof Y=="function"){D=Y.call(J,D,_);break e}D=Y;break e;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=G.payload,_=typeof Y=="function"?Y.call(J,D,_):Y,_==null)break e;D=Q({},D,_);break e;case 2:ut=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,_=r.effects,_===null?r.effects=[f]:_.push(f))}else J={eventTime:J,lane:_,tag:f.tag,payload:f.payload,callback:f.callback,next:null},R===null?(E=R=J,h=D):R=R.next=J,c|=_;if(f=f.next,f===null){if(f=r.shared.pending,f===null)break;_=f,f=_.next,_.next=null,r.lastBaseUpdate=_,r.shared.pending=null}}while(!0);if(R===null&&(h=D),r.baseState=h,r.firstBaseUpdate=E,r.lastBaseUpdate=R,n=r.shared.interleaved,n!==null){r=n;do c|=r.lane,r=r.next;while(r!==n)}else s===null&&(r.shared.lanes=0);wt|=c,e.lanes=c,e.memoizedState=D}}function Au(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],r=a.callback;if(r!==null){if(a.callback=null,a=t,typeof r!="function")throw Error(l(191,r));r.call(a)}}}var Da={},Rn=ot(Da),Ia=ot(Da),Oa=ot(Da);function bt(e){if(e===Da)throw Error(l(174));return e}function Vo(e,n){switch(we(Oa,n),we(Ia,e),we(Rn,Da),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Vi(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Vi(n,e)}je(Rn),we(Rn,n)}function na(){je(Rn),je(Ia),je(Oa)}function wu(e){bt(Oa.current);var n=bt(Rn.current),t=Vi(n,e.type);n!==t&&(we(Ia,e),we(Rn,t))}function bo(e){Ia.current===e&&(je(Rn),je(Ia))}var Re=ot(0);function Jr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ao=[];function wo(){for(var e=0;e<Ao.length;e++)Ao[e]._workInProgressVersionPrimary=null;Ao.length=0}var Br=Z.ReactCurrentDispatcher,ko=Z.ReactCurrentBatchConfig,At=0,De=null,Be=null,Ue=null,Yr=!1,Fa=!1,za=0,Wf=0;function We(){throw Error(l(321))}function jo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Nn(e[t],n[t]))return!1;return!0}function _o(e,n,t,a,r,s){if(At=s,De=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Br.current=e===null||e.memoizedState===null?np:tp,e=t(a,r),Fa){s=0;do{if(Fa=!1,za=0,25<=s)throw Error(l(301));s+=1,Ue=Be=null,n.updateQueue=null,Br.current=ap,e=t(a,r)}while(Fa)}if(Br.current=Kr,n=Be!==null&&Be.next!==null,At=0,Ue=Be=De=null,Yr=!1,n)throw Error(l(300));return e}function Ro(){var e=za!==0;return za=0,e}function Dn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?De.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function Ln(){if(Be===null){var e=De.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var n=Ue===null?De.memoizedState:Ue.next;if(n!==null)Ue=n,Be=e;else{if(e===null)throw Error(l(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Ue===null?De.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function Qa(e,n){return typeof n=="function"?n(e):n}function Do(e){var n=Ln(),t=n.queue;if(t===null)throw Error(l(311));t.lastRenderedReducer=e;var a=Be,r=a.baseQueue,s=t.pending;if(s!==null){if(r!==null){var c=r.next;r.next=s.next,s.next=c}a.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,a=a.baseState;var f=c=null,h=null,E=s;do{var R=E.lane;if((At&R)===R)h!==null&&(h=h.next={lane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),a=E.hasEagerState?E.eagerState:e(a,E.action);else{var D={lane:R,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null};h===null?(f=h=D,c=a):h=h.next=D,De.lanes|=R,wt|=R}E=E.next}while(E!==null&&E!==s);h===null?c=a:h.next=f,Nn(a,n.memoizedState)||(on=!0),n.memoizedState=a,n.baseState=c,n.baseQueue=h,t.lastRenderedState=a}if(e=t.interleaved,e!==null){r=e;do s=r.lane,De.lanes|=s,wt|=s,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Io(e){var n=Ln(),t=n.queue;if(t===null)throw Error(l(311));t.lastRenderedReducer=e;var a=t.dispatch,r=t.pending,s=n.memoizedState;if(r!==null){t.pending=null;var c=r=r.next;do s=e(s,c.action),c=c.next;while(c!==r);Nn(s,n.memoizedState)||(on=!0),n.memoizedState=s,n.baseQueue===null&&(n.baseState=s),t.lastRenderedState=s}return[s,a]}function ku(){}function ju(e,n){var t=De,a=Ln(),r=n(),s=!Nn(a.memoizedState,r);if(s&&(a.memoizedState=r,on=!0),a=a.queue,Oo(Du.bind(null,t,a,e),[e]),a.getSnapshot!==n||s||Ue!==null&&Ue.memoizedState.tag&1){if(t.flags|=2048,Ja(9,Ru.bind(null,t,a,r,n),void 0,null),Ge===null)throw Error(l(349));(At&30)!==0||_u(t,n,r)}return r}function _u(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=De.updateQueue,n===null?(n={lastEffect:null,stores:null},De.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Ru(e,n,t,a){n.value=t,n.getSnapshot=a,Iu(n)&&Ou(e)}function Du(e,n,t){return t(function(){Iu(n)&&Ou(e)})}function Iu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Nn(e,t)}catch{return!0}}function Ou(e){var n=Un(e,1);n!==null&&bn(n,e,1,-1)}function Fu(e){var n=Dn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:e},n.queue=e,e=e.dispatch=ep.bind(null,De,e),[n.memoizedState,e]}function Ja(e,n,t,a){return e={tag:e,create:n,destroy:t,deps:a,next:null},n=De.updateQueue,n===null?(n={lastEffect:null,stores:null},De.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e)),e}function zu(){return Ln().memoizedState}function Ur(e,n,t,a){var r=Dn();De.flags|=e,r.memoizedState=Ja(1|n,t,void 0,a===void 0?null:a)}function Gr(e,n,t,a){var r=Ln();a=a===void 0?null:a;var s=void 0;if(Be!==null){var c=Be.memoizedState;if(s=c.destroy,a!==null&&jo(a,c.deps)){r.memoizedState=Ja(n,t,s,a);return}}De.flags|=e,r.memoizedState=Ja(1|n,t,s,a)}function Qu(e,n){return Ur(8390656,8,e,n)}function Oo(e,n){return Gr(2048,8,e,n)}function Ju(e,n){return Gr(4,2,e,n)}function Bu(e,n){return Gr(4,4,e,n)}function Yu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Uu(e,n,t){return t=t!=null?t.concat([e]):null,Gr(4,4,Yu.bind(null,n,e),t)}function Fo(){}function Gu(e,n){var t=Ln();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&jo(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function Ku(e,n){var t=Ln();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&jo(n,a[1])?a[0]:(e=e(),t.memoizedState=[e,n],e)}function $u(e,n,t){return(At&21)===0?(e.baseState&&(e.baseState=!1,on=!0),e.memoizedState=t):(Nn(t,n)||(t=Nl(),De.lanes|=t,wt|=t,e.baseState=!0),n)}function Zf(e,n){var t=Se;Se=t!==0&&4>t?t:4,e(!0);var a=ko.transition;ko.transition={};try{e(!1),n()}finally{Se=t,ko.transition=a}}function Hu(){return Ln().memoizedState}function Xf(e,n,t){var a=pt(e);if(t={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null},qu(e))Wu(n,t);else if(t=Su(e,n,t,a),t!==null){var r=tn();bn(t,e,a,r),Zu(t,n,a)}}function ep(e,n,t){var a=pt(e),r={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null};if(qu(e))Wu(n,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=n.lastRenderedReducer,s!==null))try{var c=n.lastRenderedState,f=s(c,t);if(r.hasEagerState=!0,r.eagerState=f,Nn(f,c)){var h=n.interleaved;h===null?(r.next=r,xo(n)):(r.next=h.next,h.next=r),n.interleaved=r;return}}catch{}finally{}t=Su(e,n,r,a),t!==null&&(r=tn(),bn(t,e,a,r),Zu(t,n,a))}}function qu(e){var n=e.alternate;return e===De||n!==null&&n===De}function Wu(e,n){Fa=Yr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Zu(e,n,t){if((t&4194240)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,zi(e,t)}}var Kr={readContext:hn,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},np={readContext:hn,useCallback:function(e,n){return Dn().memoizedState=[e,n===void 0?null:n],e},useContext:hn,useEffect:Qu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ur(4194308,4,Yu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ur(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ur(4,2,e,n)},useMemo:function(e,n){var t=Dn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var a=Dn();return n=t!==void 0?t(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=Xf.bind(null,De,e),[a.memoizedState,e]},useRef:function(e){var n=Dn();return e={current:e},n.memoizedState=e},useState:Fu,useDebugValue:Fo,useDeferredValue:function(e){return Dn().memoizedState=e},useTransition:function(){var e=Fu(!1),n=e[0];return e=Zf.bind(null,e[1]),Dn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var a=De,r=Dn();if(_e){if(t===void 0)throw Error(l(407));t=t()}else{if(t=n(),Ge===null)throw Error(l(349));(At&30)!==0||_u(a,n,t)}r.memoizedState=t;var s={value:t,getSnapshot:n};return r.queue=s,Qu(Du.bind(null,a,s,e),[e]),a.flags|=2048,Ja(9,Ru.bind(null,a,s,t,n),void 0,null),t},useId:function(){var e=Dn(),n=Ge.identifierPrefix;if(_e){var t=Yn,a=Bn;t=(a&~(1<<32-En(a)-1)).toString(32)+t,n=":"+n+"R"+t,t=za++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Wf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},tp={readContext:hn,useCallback:Gu,useContext:hn,useEffect:Oo,useImperativeHandle:Uu,useInsertionEffect:Ju,useLayoutEffect:Bu,useMemo:Ku,useReducer:Do,useRef:zu,useState:function(){return Do(Qa)},useDebugValue:Fo,useDeferredValue:function(e){var n=Ln();return $u(n,Be.memoizedState,e)},useTransition:function(){var e=Do(Qa)[0],n=Ln().memoizedState;return[e,n]},useMutableSource:ku,useSyncExternalStore:ju,useId:Hu,unstable_isNewReconciler:!1},ap={readContext:hn,useCallback:Gu,useContext:hn,useEffect:Oo,useImperativeHandle:Uu,useInsertionEffect:Ju,useLayoutEffect:Bu,useMemo:Ku,useReducer:Io,useRef:zu,useState:function(){return Io(Qa)},useDebugValue:Fo,useDeferredValue:function(e){var n=Ln();return Be===null?n.memoizedState=e:$u(n,Be.memoizedState,e)},useTransition:function(){var e=Io(Qa)[0],n=Ln().memoizedState;return[e,n]},useMutableSource:ku,useSyncExternalStore:ju,useId:Hu,unstable_isNewReconciler:!1};function xn(e,n){if(e&&e.defaultProps){n=Q({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function zo(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:Q({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var $r={isMounted:function(e){return(e=e._reactInternals)?Et(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var a=tn(),r=pt(e),s=Gn(a,r);s.payload=n,t!=null&&(s.callback=t),n=ct(e,s,r),n!==null&&(bn(n,e,r,a),zr(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=tn(),r=pt(e),s=Gn(a,r);s.tag=1,s.payload=n,t!=null&&(s.callback=t),n=ct(e,s,r),n!==null&&(bn(n,e,r,a),zr(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=tn(),a=pt(e),r=Gn(t,a);r.tag=2,n!=null&&(r.callback=n),n=ct(e,r,a),n!==null&&(bn(n,e,a,t),zr(n,e,a))}};function Xu(e,n,t,a,r,s,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,c):n.prototype&&n.prototype.isPureReactComponent?!Va(t,a)||!Va(r,s):!0}function ec(e,n,t){var a=!1,r=st,s=n.contextType;return typeof s=="object"&&s!==null?s=hn(s):(r=rn(n)?Ct:qe.current,a=n.contextTypes,s=(a=a!=null)?$t(e,r):st),n=new n(t,s),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=$r,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=s),n}function nc(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&$r.enqueueReplaceState(n,n.state,null)}function Qo(e,n,t,a){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},So(e);var s=n.contextType;typeof s=="object"&&s!==null?r.context=hn(s):(s=rn(n)?Ct:qe.current,r.context=$t(e,s)),r.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(zo(e,n,s,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&$r.enqueueReplaceState(r,r.state,null),Qr(e,t,r,a),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function ta(e,n){try{var t="",a=n;do t+=ie(a),a=a.return;while(a);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:n,stack:r,digest:null}}function Jo(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Bo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var rp=typeof WeakMap=="function"?WeakMap:Map;function tc(e,n,t){t=Gn(-1,t),t.tag=3,t.payload={element:null};var a=n.value;return t.callback=function(){ni||(ni=!0,rs=a),Bo(e,n)},t}function ac(e,n,t){t=Gn(-1,t),t.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var r=n.value;t.payload=function(){return a(r)},t.callback=function(){Bo(e,n)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Bo(e,n),typeof a!="function"&&(mt===null?mt=new Set([this]):mt.add(this));var c=n.stack;this.componentDidCatch(n.value,{componentStack:c!==null?c:""})}),t}function rc(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new rp;var r=new Set;a.set(n,r)}else r=a.get(n),r===void 0&&(r=new Set,a.set(n,r));r.has(t)||(r.add(t),e=Lp.bind(null,e,n,t),n.then(e,e))}function ic(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function oc(e,n,t,a,r){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Gn(-1,1),n.tag=2,ct(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=r,e)}var ip=Z.ReactCurrentOwner,on=!1;function nn(e,n,t,a){n.child=e===null?xu(n,null,t,a):Zt(n,e.child,t,a)}function sc(e,n,t,a,r){t=t.render;var s=n.ref;return ea(n,r),a=_o(e,n,t,a,s,r),t=Ro(),e!==null&&!on?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,Kn(e,n,r)):(_e&&t&&ho(n),n.flags|=1,nn(e,n,a,r),n.child)}function lc(e,n,t,a,r){if(e===null){var s=t.type;return typeof s=="function"&&!ds(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=s,uc(e,n,s,a,r)):(e=si(t.type,null,a,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(s=e.child,(e.lanes&r)===0){var c=s.memoizedProps;if(t=t.compare,t=t!==null?t:Va,t(c,a)&&e.ref===n.ref)return Kn(e,n,r)}return n.flags|=1,e=vt(s,a),e.ref=n.ref,e.return=n,n.child=e}function uc(e,n,t,a,r){if(e!==null){var s=e.memoizedProps;if(Va(s,a)&&e.ref===n.ref)if(on=!1,n.pendingProps=a=s,(e.lanes&r)!==0)(e.flags&131072)!==0&&(on=!0);else return n.lanes=e.lanes,Kn(e,n,r)}return Yo(e,n,t,a,r)}function cc(e,n,t){var a=n.pendingProps,r=a.children,s=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(ra,pn),pn|=t;else{if((t&1073741824)===0)return e=s!==null?s.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,we(ra,pn),pn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=s!==null?s.baseLanes:t,we(ra,pn),pn|=a}else s!==null?(a=s.baseLanes|t,n.memoizedState=null):a=t,we(ra,pn),pn|=a;return nn(e,n,r,t),n.child}function dc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Yo(e,n,t,a,r){var s=rn(t)?Ct:qe.current;return s=$t(n,s),ea(n,r),t=_o(e,n,t,a,s,r),a=Ro(),e!==null&&!on?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,Kn(e,n,r)):(_e&&a&&ho(n),n.flags|=1,nn(e,n,t,r),n.child)}function mc(e,n,t,a,r){if(rn(t)){var s=!0;kr(n)}else s=!1;if(ea(n,r),n.stateNode===null)qr(e,n),ec(n,t,a),Qo(n,t,a,r),a=!0;else if(e===null){var c=n.stateNode,f=n.memoizedProps;c.props=f;var h=c.context,E=t.contextType;typeof E=="object"&&E!==null?E=hn(E):(E=rn(t)?Ct:qe.current,E=$t(n,E));var R=t.getDerivedStateFromProps,D=typeof R=="function"||typeof c.getSnapshotBeforeUpdate=="function";D||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(f!==a||h!==E)&&nc(n,c,a,E),ut=!1;var _=n.memoizedState;c.state=_,Qr(n,a,c,r),h=n.memoizedState,f!==a||_!==h||an.current||ut?(typeof R=="function"&&(zo(n,t,R,a),h=n.memoizedState),(f=ut||Xu(n,t,f,a,_,h,E))?(D||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=h),c.props=a,c.state=h,c.context=E,a=f):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{c=n.stateNode,Vu(e,n),f=n.memoizedProps,E=n.type===n.elementType?f:xn(n.type,f),c.props=E,D=n.pendingProps,_=c.context,h=t.contextType,typeof h=="object"&&h!==null?h=hn(h):(h=rn(t)?Ct:qe.current,h=$t(n,h));var J=t.getDerivedStateFromProps;(R=typeof J=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(f!==D||_!==h)&&nc(n,c,a,h),ut=!1,_=n.memoizedState,c.state=_,Qr(n,a,c,r);var Y=n.memoizedState;f!==D||_!==Y||an.current||ut?(typeof J=="function"&&(zo(n,t,J,a),Y=n.memoizedState),(E=ut||Xu(n,t,E,a,_,Y,h)||!1)?(R||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(a,Y,h),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(a,Y,h)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||f===e.memoizedProps&&_===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&_===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=Y),c.props=a,c.state=Y,c.context=h,a=E):(typeof c.componentDidUpdate!="function"||f===e.memoizedProps&&_===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&_===e.memoizedState||(n.flags|=1024),a=!1)}return Uo(e,n,t,a,s,r)}function Uo(e,n,t,a,r,s){dc(e,n);var c=(n.flags&128)!==0;if(!a&&!c)return r&&hu(n,t,!1),Kn(e,n,s);a=n.stateNode,ip.current=n;var f=c&&typeof t.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&c?(n.child=Zt(n,e.child,null,s),n.child=Zt(n,null,f,s)):nn(e,n,f,s),n.memoizedState=a.state,r&&hu(n,t,!0),n.child}function fc(e){var n=e.stateNode;n.pendingContext?Tu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Tu(e,n.context,!1),Vo(e,n.containerInfo)}function pc(e,n,t,a,r){return Wt(),yo(r),n.flags|=256,nn(e,n,t,a),n.child}var Go={dehydrated:null,treeContext:null,retryLane:0};function Ko(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tc(e,n,t){var a=n.pendingProps,r=Re.current,s=!1,c=(n.flags&128)!==0,f;if((f=c)||(f=e!==null&&e.memoizedState===null?!1:(r&2)!==0),f?(s=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),we(Re,r&1),e===null)return Po(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(c=a.children,e=a.fallback,s?(a=n.mode,s=n.child,c={mode:"hidden",children:c},(a&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=c):s=li(c,a,0,null),e=Rt(e,a,t,null),s.return=n,e.return=n,s.sibling=e,n.child=s,n.child.memoizedState=Ko(t),n.memoizedState=Go,e):$o(n,c));if(r=e.memoizedState,r!==null&&(f=r.dehydrated,f!==null))return op(e,n,c,a,f,r,t);if(s){s=a.fallback,c=n.mode,r=e.child,f=r.sibling;var h={mode:"hidden",children:a.children};return(c&1)===0&&n.child!==r?(a=n.child,a.childLanes=0,a.pendingProps=h,n.deletions=null):(a=vt(r,h),a.subtreeFlags=r.subtreeFlags&14680064),f!==null?s=vt(f,s):(s=Rt(s,c,t,null),s.flags|=2),s.return=n,a.return=n,a.sibling=s,n.child=a,a=s,s=n.child,c=e.child.memoizedState,c=c===null?Ko(t):{baseLanes:c.baseLanes|t,cachePool:null,transitions:c.transitions},s.memoizedState=c,s.childLanes=e.childLanes&~t,n.memoizedState=Go,a}return s=e.child,e=s.sibling,a=vt(s,{mode:"visible",children:a.children}),(n.mode&1)===0&&(a.lanes=t),a.return=n,a.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=a,n.memoizedState=null,a}function $o(e,n){return n=li({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Hr(e,n,t,a){return a!==null&&yo(a),Zt(n,e.child,null,t),e=$o(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function op(e,n,t,a,r,s,c){if(t)return n.flags&256?(n.flags&=-257,a=Jo(Error(l(422))),Hr(e,n,c,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(s=a.fallback,r=n.mode,a=li({mode:"visible",children:a.children},r,0,null),s=Rt(s,r,c,null),s.flags|=2,a.return=n,s.return=n,a.sibling=s,n.child=a,(n.mode&1)!==0&&Zt(n,e.child,null,c),n.child.memoizedState=Ko(c),n.memoizedState=Go,s);if((n.mode&1)===0)return Hr(e,n,c,null);if(r.data==="$!"){if(a=r.nextSibling&&r.nextSibling.dataset,a)var f=a.dgst;return a=f,s=Error(l(419)),a=Jo(s,a,void 0),Hr(e,n,c,a)}if(f=(c&e.childLanes)!==0,on||f){if(a=Ge,a!==null){switch(c&-c){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(a.suspendedLanes|c))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Un(e,r),bn(a,e,r,-1))}return cs(),a=Jo(Error(l(421))),Hr(e,n,c,a)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=gp.bind(null,e),r._reactRetry=n,null):(e=s.treeContext,fn=it(r.nextSibling),mn=n,_e=!0,Cn=null,e!==null&&(Tn[vn++]=Bn,Tn[vn++]=Yn,Tn[vn++]=xt,Bn=e.id,Yn=e.overflow,xt=n),n=$o(n,a.children),n.flags|=4096,n)}function vc(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Co(e.return,n,t)}function Ho(e,n,t,a,r){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:r}:(s.isBackwards=n,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=t,s.tailMode=r)}function hc(e,n,t){var a=n.pendingProps,r=a.revealOrder,s=a.tail;if(nn(e,n,a.children,t),a=Re.current,(a&2)!==0)a=a&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vc(e,t,n);else if(e.tag===19)vc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(we(Re,a),(n.mode&1)===0)n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&Jr(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),Ho(n,!1,r,t,s);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&Jr(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}Ho(n,!0,t,null,s);break;case"together":Ho(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function qr(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Kn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),wt|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(l(153));if(n.child!==null){for(e=n.child,t=vt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=vt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function sp(e,n,t){switch(n.tag){case 3:fc(n),Wt();break;case 5:wu(n);break;case 1:rn(n.type)&&kr(n);break;case 4:Vo(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,r=n.memoizedProps.value;we(Or,a._currentValue),a._currentValue=r;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(we(Re,Re.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?Tc(e,n,t):(we(Re,Re.current&1),e=Kn(e,n,t),e!==null?e.sibling:null);we(Re,Re.current&1);break;case 19:if(a=(t&n.childLanes)!==0,(e.flags&128)!==0){if(a)return hc(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),we(Re,Re.current),a)break;return null;case 22:case 23:return n.lanes=0,cc(e,n,t)}return Kn(e,n,t)}var Lc,qo,gc,Pc;Lc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},qo=function(){},gc=function(e,n,t,a){var r=e.memoizedProps;if(r!==a){e=n.stateNode,bt(Rn.current);var s=null;switch(t){case"input":r=zn(e,r),a=zn(e,a),s=[];break;case"select":r=Q({},r,{value:void 0}),a=Q({},a,{value:void 0}),s=[];break;case"textarea":r=Mt(e,r),a=Mt(e,a),s=[];break;default:typeof r.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=br)}bi(t,a);var c;t=null;for(E in r)if(!a.hasOwnProperty(E)&&r.hasOwnProperty(E)&&r[E]!=null)if(E==="style"){var f=r[E];for(c in f)f.hasOwnProperty(c)&&(t||(t={}),t[c]="")}else E!=="dangerouslySetInnerHTML"&&E!=="children"&&E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&E!=="autoFocus"&&(m.hasOwnProperty(E)?s||(s=[]):(s=s||[]).push(E,null));for(E in a){var h=a[E];if(f=r!=null?r[E]:void 0,a.hasOwnProperty(E)&&h!==f&&(h!=null||f!=null))if(E==="style")if(f){for(c in f)!f.hasOwnProperty(c)||h&&h.hasOwnProperty(c)||(t||(t={}),t[c]="");for(c in h)h.hasOwnProperty(c)&&f[c]!==h[c]&&(t||(t={}),t[c]=h[c])}else t||(s||(s=[]),s.push(E,t)),t=h;else E==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,f=f?f.__html:void 0,h!=null&&f!==h&&(s=s||[]).push(E,h)):E==="children"?typeof h!="string"&&typeof h!="number"||(s=s||[]).push(E,""+h):E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&(m.hasOwnProperty(E)?(h!=null&&E==="onScroll"&&ke("scroll",e),s||f===h||(s=[])):(s=s||[]).push(E,h))}t&&(s=s||[]).push("style",t);var E=s;(n.updateQueue=E)&&(n.flags|=4)}},Pc=function(e,n,t,a){t!==a&&(n.flags|=4)};function Ba(e,n){if(!_e)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags&14680064,a|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function lp(e,n,t){var a=n.pendingProps;switch(Lo(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return rn(n.type)&&wr(),Ze(n),null;case 3:return a=n.stateNode,na(),je(an),je(qe),wo(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Dr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Cn!==null&&(ss(Cn),Cn=null))),qo(e,n),Ze(n),null;case 5:bo(n);var r=bt(Oa.current);if(t=n.type,e!==null&&n.stateNode!=null)gc(e,n,t,a,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(l(166));return Ze(n),null}if(e=bt(Rn.current),Dr(n)){a=n.stateNode,t=n.type;var s=n.memoizedProps;switch(a[_n]=n,a[ja]=s,e=(n.mode&1)!==0,t){case"dialog":ke("cancel",a),ke("close",a);break;case"iframe":case"object":case"embed":ke("load",a);break;case"video":case"audio":for(r=0;r<Aa.length;r++)ke(Aa[r],a);break;case"source":ke("error",a);break;case"img":case"image":case"link":ke("error",a),ke("load",a);break;case"details":ke("toggle",a);break;case"input":Zn(a,s),ke("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!s.multiple},ke("invalid",a);break;case"textarea":al(a,s),ke("invalid",a)}bi(t,s),r=null;for(var c in s)if(s.hasOwnProperty(c)){var f=s[c];c==="children"?typeof f=="string"?a.textContent!==f&&(s.suppressHydrationWarning!==!0&&Vr(a.textContent,f,e),r=["children",f]):typeof f=="number"&&a.textContent!==""+f&&(s.suppressHydrationWarning!==!0&&Vr(a.textContent,f,e),r=["children",""+f]):m.hasOwnProperty(c)&&f!=null&&c==="onScroll"&&ke("scroll",a)}switch(t){case"input":j(a),O(a,s,!0);break;case"textarea":j(a),il(a);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(a.onclick=br)}a=r,n.updateQueue=a,a!==null&&(n.flags|=4)}else{c=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ol(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=c.createElement(t,{is:a.is}):(e=c.createElement(t),t==="select"&&(c=e,a.multiple?c.multiple=!0:a.size&&(c.size=a.size))):e=c.createElementNS(e,t),e[_n]=n,e[ja]=a,Lc(e,n,!1,!1),n.stateNode=e;e:{switch(c=Ai(t,a),t){case"dialog":ke("cancel",e),ke("close",e),r=a;break;case"iframe":case"object":case"embed":ke("load",e),r=a;break;case"video":case"audio":for(r=0;r<Aa.length;r++)ke(Aa[r],e);r=a;break;case"source":ke("error",e),r=a;break;case"img":case"image":case"link":ke("error",e),ke("load",e),r=a;break;case"details":ke("toggle",e),r=a;break;case"input":Zn(e,a),r=zn(e,a),ke("invalid",e);break;case"option":r=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},r=Q({},a,{value:void 0}),ke("invalid",e);break;case"textarea":al(e,a),r=Mt(e,a),ke("invalid",e);break;default:r=a}bi(t,r),f=r;for(s in f)if(f.hasOwnProperty(s)){var h=f[s];s==="style"?ul(e,h):s==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&sl(e,h)):s==="children"?typeof h=="string"?(t!=="textarea"||h!=="")&&da(e,h):typeof h=="number"&&da(e,""+h):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(m.hasOwnProperty(s)?h!=null&&s==="onScroll"&&ke("scroll",e):h!=null&&pe(e,s,h,c))}switch(t){case"input":j(e),O(e,a,!1);break;case"textarea":j(e),il(e);break;case"option":a.value!=null&&e.setAttribute("value",""+ve(a.value));break;case"select":e.multiple=!!a.multiple,s=a.value,s!=null?en(e,!!a.multiple,s,!1):a.defaultValue!=null&&en(e,!!a.multiple,a.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=br)}switch(t){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ze(n),null;case 6:if(e&&n.stateNode!=null)Pc(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(l(166));if(t=bt(Oa.current),bt(Rn.current),Dr(n)){if(a=n.stateNode,t=n.memoizedProps,a[_n]=n,(s=a.nodeValue!==t)&&(e=mn,e!==null))switch(e.tag){case 3:Vr(a.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Vr(a.nodeValue,t,(e.mode&1)!==0)}s&&(n.flags|=4)}else a=(t.nodeType===9?t:t.ownerDocument).createTextNode(a),a[_n]=n,n.stateNode=a}return Ze(n),null;case 13:if(je(Re),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_e&&fn!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Eu(),Wt(),n.flags|=98560,s=!1;else if(s=Dr(n),a!==null&&a.dehydrated!==null){if(e===null){if(!s)throw Error(l(318));if(s=n.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(l(317));s[_n]=n}else Wt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),s=!1}else Cn!==null&&(ss(Cn),Cn=null),s=!0;if(!s)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(Re.current&1)!==0?Ye===0&&(Ye=3):cs())),n.updateQueue!==null&&(n.flags|=4),Ze(n),null);case 4:return na(),qo(e,n),e===null&&wa(n.stateNode.containerInfo),Ze(n),null;case 10:return No(n.type._context),Ze(n),null;case 17:return rn(n.type)&&wr(),Ze(n),null;case 19:if(je(Re),s=n.memoizedState,s===null)return Ze(n),null;if(a=(n.flags&128)!==0,c=s.rendering,c===null)if(a)Ba(s,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(c=Jr(e),c!==null){for(n.flags|=128,Ba(s,!1),a=c.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=t,t=n.child;t!==null;)s=t,e=a,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return we(Re,Re.current&1|2),n.child}e=e.sibling}s.tail!==null&&Fe()>ia&&(n.flags|=128,a=!0,Ba(s,!1),n.lanes=4194304)}else{if(!a)if(e=Jr(c),e!==null){if(n.flags|=128,a=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ba(s,!0),s.tail===null&&s.tailMode==="hidden"&&!c.alternate&&!_e)return Ze(n),null}else 2*Fe()-s.renderingStartTime>ia&&t!==1073741824&&(n.flags|=128,a=!0,Ba(s,!1),n.lanes=4194304);s.isBackwards?(c.sibling=n.child,n.child=c):(t=s.last,t!==null?t.sibling=c:n.child=c,s.last=c)}return s.tail!==null?(n=s.tail,s.rendering=n,s.tail=n.sibling,s.renderingStartTime=Fe(),n.sibling=null,t=Re.current,we(Re,a?t&1|2:t&1),n):(Ze(n),null);case 22:case 23:return us(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&(n.mode&1)!==0?(pn&1073741824)!==0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),null;case 24:return null;case 25:return null}throw Error(l(156,n.tag))}function up(e,n){switch(Lo(n),n.tag){case 1:return rn(n.type)&&wr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return na(),je(an),je(qe),wo(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return bo(n),null;case 13:if(je(Re),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(l(340));Wt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return je(Re),null;case 4:return na(),null;case 10:return No(n.type._context),null;case 22:case 23:return us(),null;case 24:return null;default:return null}}var Wr=!1,Xe=!1,cp=typeof WeakSet=="function"?WeakSet:Set,B=null;function aa(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(a){Ie(e,n,a)}else t.current=null}function Wo(e,n,t){try{t()}catch(a){Ie(e,n,a)}}var yc=!1;function dp(e,n){if(lo=hr,e=Xl(),eo(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var r=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var c=0,f=-1,h=-1,E=0,R=0,D=e,_=null;n:for(;;){for(var J;D!==t||r!==0&&D.nodeType!==3||(f=c+r),D!==s||a!==0&&D.nodeType!==3||(h=c+a),D.nodeType===3&&(c+=D.nodeValue.length),(J=D.firstChild)!==null;)_=D,D=J;for(;;){if(D===e)break n;if(_===t&&++E===r&&(f=c),_===s&&++R===a&&(h=c),(J=D.nextSibling)!==null)break;D=_,_=D.parentNode}D=J}t=f===-1||h===-1?null:{start:f,end:h}}else t=null}t=t||{start:0,end:0}}else t=null;for(uo={focusedElem:e,selectionRange:t},hr=!1,B=n;B!==null;)if(n=B,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,B=e;else for(;B!==null;){n=B;try{var Y=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(Y!==null){var G=Y.memoizedProps,ze=Y.memoizedState,y=n.stateNode,g=y.getSnapshotBeforeUpdate(n.elementType===n.type?G:xn(n.type,G),ze);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var M=n.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(F){Ie(n,n.return,F)}if(e=n.sibling,e!==null){e.return=n.return,B=e;break}B=n.return}return Y=yc,yc=!1,Y}function Ya(e,n,t){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var r=a=a.next;do{if((r.tag&e)===e){var s=r.destroy;r.destroy=void 0,s!==void 0&&Wo(n,t,s)}r=r.next}while(r!==a)}}function Zr(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var a=t.create;t.destroy=a()}t=t.next}while(t!==n)}}function Zo(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Mc(e){var n=e.alternate;n!==null&&(e.alternate=null,Mc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[_n],delete n[ja],delete n[po],delete n[Kf],delete n[$f])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ec(e){return e.tag===5||e.tag===3||e.tag===4}function Nc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ec(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xo(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=br));else if(a!==4&&(e=e.child,e!==null))for(Xo(e,n,t),e=e.sibling;e!==null;)Xo(e,n,t),e=e.sibling}function es(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(es(e,n,t),e=e.sibling;e!==null;)es(e,n,t),e=e.sibling}var $e=null,Sn=!1;function dt(e,n,t){for(t=t.child;t!==null;)Cc(e,n,t),t=t.sibling}function Cc(e,n,t){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(dr,t)}catch{}switch(t.tag){case 5:Xe||aa(t,n);case 6:var a=$e,r=Sn;$e=null,dt(e,n,t),$e=a,Sn=r,$e!==null&&(Sn?(e=$e,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):$e.removeChild(t.stateNode));break;case 18:$e!==null&&(Sn?(e=$e,t=t.stateNode,e.nodeType===8?fo(e.parentNode,t):e.nodeType===1&&fo(e,t),Ma(e)):fo($e,t.stateNode));break;case 4:a=$e,r=Sn,$e=t.stateNode.containerInfo,Sn=!0,dt(e,n,t),$e=a,Sn=r;break;case 0:case 11:case 14:case 15:if(!Xe&&(a=t.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){r=a=a.next;do{var s=r,c=s.destroy;s=s.tag,c!==void 0&&((s&2)!==0||(s&4)!==0)&&Wo(t,n,c),r=r.next}while(r!==a)}dt(e,n,t);break;case 1:if(!Xe&&(aa(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=t.memoizedProps,a.state=t.memoizedState,a.componentWillUnmount()}catch(f){Ie(t,n,f)}dt(e,n,t);break;case 21:dt(e,n,t);break;case 22:t.mode&1?(Xe=(a=Xe)||t.memoizedState!==null,dt(e,n,t),Xe=a):dt(e,n,t);break;default:dt(e,n,t)}}function xc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new cp),n.forEach(function(a){var r=Pp.bind(null,e,a);t.has(a)||(t.add(a),a.then(r,r))})}}function Vn(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var r=t[a];try{var s=e,c=n,f=c;e:for(;f!==null;){switch(f.tag){case 5:$e=f.stateNode,Sn=!1;break e;case 3:$e=f.stateNode.containerInfo,Sn=!0;break e;case 4:$e=f.stateNode.containerInfo,Sn=!0;break e}f=f.return}if($e===null)throw Error(l(160));Cc(s,c,r),$e=null,Sn=!1;var h=r.alternate;h!==null&&(h.return=null),r.return=null}catch(E){Ie(r,n,E)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Sc(n,e),n=n.sibling}function Sc(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Vn(n,e),In(e),a&4){try{Ya(3,e,e.return),Zr(3,e)}catch(G){Ie(e,e.return,G)}try{Ya(5,e,e.return)}catch(G){Ie(e,e.return,G)}}break;case 1:Vn(n,e),In(e),a&512&&t!==null&&aa(t,t.return);break;case 5:if(Vn(n,e),In(e),a&512&&t!==null&&aa(t,t.return),e.flags&32){var r=e.stateNode;try{da(r,"")}catch(G){Ie(e,e.return,G)}}if(a&4&&(r=e.stateNode,r!=null)){var s=e.memoizedProps,c=t!==null?t.memoizedProps:s,f=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{f==="input"&&s.type==="radio"&&s.name!=null&&yt(r,s),Ai(f,c);var E=Ai(f,s);for(c=0;c<h.length;c+=2){var R=h[c],D=h[c+1];R==="style"?ul(r,D):R==="dangerouslySetInnerHTML"?sl(r,D):R==="children"?da(r,D):pe(r,R,D,E)}switch(f){case"input":x(r,s);break;case"textarea":rl(r,s);break;case"select":var _=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var J=s.value;J!=null?en(r,!!s.multiple,J,!1):_!==!!s.multiple&&(s.defaultValue!=null?en(r,!!s.multiple,s.defaultValue,!0):en(r,!!s.multiple,s.multiple?[]:"",!1))}r[ja]=s}catch(G){Ie(e,e.return,G)}}break;case 6:if(Vn(n,e),In(e),a&4){if(e.stateNode===null)throw Error(l(162));r=e.stateNode,s=e.memoizedProps;try{r.nodeValue=s}catch(G){Ie(e,e.return,G)}}break;case 3:if(Vn(n,e),In(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Ma(n.containerInfo)}catch(G){Ie(e,e.return,G)}break;case 4:Vn(n,e),In(e);break;case 13:Vn(n,e),In(e),r=e.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(as=Fe())),a&4&&xc(e);break;case 22:if(R=t!==null&&t.memoizedState!==null,e.mode&1?(Xe=(E=Xe)||R,Vn(n,e),Xe=E):Vn(n,e),In(e),a&8192){if(E=e.memoizedState!==null,(e.stateNode.isHidden=E)&&!R&&(e.mode&1)!==0)for(B=e,R=e.child;R!==null;){for(D=B=R;B!==null;){switch(_=B,J=_.child,_.tag){case 0:case 11:case 14:case 15:Ya(4,_,_.return);break;case 1:aa(_,_.return);var Y=_.stateNode;if(typeof Y.componentWillUnmount=="function"){a=_,t=_.return;try{n=a,Y.props=n.memoizedProps,Y.state=n.memoizedState,Y.componentWillUnmount()}catch(G){Ie(a,t,G)}}break;case 5:aa(_,_.return);break;case 22:if(_.memoizedState!==null){Ac(D);continue}}J!==null?(J.return=_,B=J):Ac(D)}R=R.sibling}e:for(R=null,D=e;;){if(D.tag===5){if(R===null){R=D;try{r=D.stateNode,E?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(f=D.stateNode,h=D.memoizedProps.style,c=h!=null&&h.hasOwnProperty("display")?h.display:null,f.style.display=ll("display",c))}catch(G){Ie(e,e.return,G)}}}else if(D.tag===6){if(R===null)try{D.stateNode.nodeValue=E?"":D.memoizedProps}catch(G){Ie(e,e.return,G)}}else if((D.tag!==22&&D.tag!==23||D.memoizedState===null||D===e)&&D.child!==null){D.child.return=D,D=D.child;continue}if(D===e)break e;for(;D.sibling===null;){if(D.return===null||D.return===e)break e;R===D&&(R=null),D=D.return}R===D&&(R=null),D.sibling.return=D.return,D=D.sibling}}break;case 19:Vn(n,e),In(e),a&4&&xc(e);break;case 21:break;default:Vn(n,e),In(e)}}function In(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Ec(t)){var a=t;break e}t=t.return}throw Error(l(160))}switch(a.tag){case 5:var r=a.stateNode;a.flags&32&&(da(r,""),a.flags&=-33);var s=Nc(e);es(e,s,r);break;case 3:case 4:var c=a.stateNode.containerInfo,f=Nc(e);Xo(e,f,c);break;default:throw Error(l(161))}}catch(h){Ie(e,e.return,h)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function mp(e,n,t){B=e,Vc(e)}function Vc(e,n,t){for(var a=(e.mode&1)!==0;B!==null;){var r=B,s=r.child;if(r.tag===22&&a){var c=r.memoizedState!==null||Wr;if(!c){var f=r.alternate,h=f!==null&&f.memoizedState!==null||Xe;f=Wr;var E=Xe;if(Wr=c,(Xe=h)&&!E)for(B=r;B!==null;)c=B,h=c.child,c.tag===22&&c.memoizedState!==null?wc(r):h!==null?(h.return=c,B=h):wc(r);for(;s!==null;)B=s,Vc(s),s=s.sibling;B=r,Wr=f,Xe=E}bc(e)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,B=s):bc(e)}}function bc(e){for(;B!==null;){var n=B;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Xe||Zr(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!Xe)if(t===null)a.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:xn(n.type,t.memoizedProps);a.componentDidUpdate(r,t.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var s=n.updateQueue;s!==null&&Au(n,s,a);break;case 3:var c=n.updateQueue;if(c!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Au(n,c,t)}break;case 5:var f=n.stateNode;if(t===null&&n.flags&4){t=f;var h=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&t.focus();break;case"img":h.src&&(t.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var E=n.alternate;if(E!==null){var R=E.memoizedState;if(R!==null){var D=R.dehydrated;D!==null&&Ma(D)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Xe||n.flags&512&&Zo(n)}catch(_){Ie(n,n.return,_)}}if(n===e){B=null;break}if(t=n.sibling,t!==null){t.return=n.return,B=t;break}B=n.return}}function Ac(e){for(;B!==null;){var n=B;if(n===e){B=null;break}var t=n.sibling;if(t!==null){t.return=n.return,B=t;break}B=n.return}}function wc(e){for(;B!==null;){var n=B;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Zr(4,n)}catch(h){Ie(n,t,h)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var r=n.return;try{a.componentDidMount()}catch(h){Ie(n,r,h)}}var s=n.return;try{Zo(n)}catch(h){Ie(n,s,h)}break;case 5:var c=n.return;try{Zo(n)}catch(h){Ie(n,c,h)}}}catch(h){Ie(n,n.return,h)}if(n===e){B=null;break}var f=n.sibling;if(f!==null){f.return=n.return,B=f;break}B=n.return}}var fp=Math.ceil,Xr=Z.ReactCurrentDispatcher,ns=Z.ReactCurrentOwner,gn=Z.ReactCurrentBatchConfig,ye=0,Ge=null,Qe=null,He=0,pn=0,ra=ot(0),Ye=0,Ua=null,wt=0,ei=0,ts=0,Ga=null,sn=null,as=0,ia=1/0,$n=null,ni=!1,rs=null,mt=null,ti=!1,ft=null,ai=0,Ka=0,is=null,ri=-1,ii=0;function tn(){return(ye&6)!==0?Fe():ri!==-1?ri:ri=Fe()}function pt(e){return(e.mode&1)===0?1:(ye&2)!==0&&He!==0?He&-He:qf.transition!==null?(ii===0&&(ii=Nl()),ii):(e=Se,e!==0||(e=window.event,e=e===void 0?16:jl(e.type)),e)}function bn(e,n,t,a){if(50<Ka)throw Ka=0,is=null,Error(l(185));ha(e,t,a),((ye&2)===0||e!==Ge)&&(e===Ge&&((ye&2)===0&&(ei|=t),Ye===4&&Tt(e,He)),ln(e,a),t===1&&ye===0&&(n.mode&1)===0&&(ia=Fe()+500,jr&&lt()))}function ln(e,n){var t=e.callbackNode;Hm(e,n);var a=pr(e,e===Ge?He:0);if(a===0)t!==null&&yl(t),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(t!=null&&yl(t),n===1)e.tag===0?Hf(jc.bind(null,e)):Lu(jc.bind(null,e)),Uf(function(){(ye&6)===0&&lt()}),t=null;else{switch(Cl(a)){case 1:t=Ii;break;case 4:t=Ml;break;case 16:t=cr;break;case 536870912:t=El;break;default:t=cr}t=Qc(t,kc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function kc(e,n){if(ri=-1,ii=0,(ye&6)!==0)throw Error(l(327));var t=e.callbackNode;if(oa()&&e.callbackNode!==t)return null;var a=pr(e,e===Ge?He:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||n)n=oi(e,a);else{n=a;var r=ye;ye|=2;var s=Rc();(Ge!==e||He!==n)&&($n=null,ia=Fe()+500,jt(e,n));do try{vp();break}catch(f){_c(e,f)}while(!0);Eo(),Xr.current=s,ye=r,Qe!==null?n=0:(Ge=null,He=0,n=Ye)}if(n!==0){if(n===2&&(r=Oi(e),r!==0&&(a=r,n=os(e,r))),n===1)throw t=Ua,jt(e,0),Tt(e,a),ln(e,Fe()),t;if(n===6)Tt(e,a);else{if(r=e.current.alternate,(a&30)===0&&!pp(r)&&(n=oi(e,a),n===2&&(s=Oi(e),s!==0&&(a=s,n=os(e,s))),n===1))throw t=Ua,jt(e,0),Tt(e,a),ln(e,Fe()),t;switch(e.finishedWork=r,e.finishedLanes=a,n){case 0:case 1:throw Error(l(345));case 2:_t(e,sn,$n);break;case 3:if(Tt(e,a),(a&130023424)===a&&(n=as+500-Fe(),10<n)){if(pr(e,0)!==0)break;if(r=e.suspendedLanes,(r&a)!==a){tn(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=mo(_t.bind(null,e,sn,$n),n);break}_t(e,sn,$n);break;case 4:if(Tt(e,a),(a&4194240)===a)break;for(n=e.eventTimes,r=-1;0<a;){var c=31-En(a);s=1<<c,c=n[c],c>r&&(r=c),a&=~s}if(a=r,a=Fe()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*fp(a/1960))-a,10<a){e.timeoutHandle=mo(_t.bind(null,e,sn,$n),a);break}_t(e,sn,$n);break;case 5:_t(e,sn,$n);break;default:throw Error(l(329))}}}return ln(e,Fe()),e.callbackNode===t?kc.bind(null,e):null}function os(e,n){var t=Ga;return e.current.memoizedState.isDehydrated&&(jt(e,n).flags|=256),e=oi(e,n),e!==2&&(n=sn,sn=t,n!==null&&ss(n)),e}function ss(e){sn===null?sn=e:sn.push.apply(sn,e)}function pp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var a=0;a<t.length;a++){var r=t[a],s=r.getSnapshot;r=r.value;try{if(!Nn(s(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Tt(e,n){for(n&=~ts,n&=~ei,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-En(n),a=1<<t;e[t]=-1,n&=~a}}function jc(e){if((ye&6)!==0)throw Error(l(327));oa();var n=pr(e,0);if((n&1)===0)return ln(e,Fe()),null;var t=oi(e,n);if(e.tag!==0&&t===2){var a=Oi(e);a!==0&&(n=a,t=os(e,a))}if(t===1)throw t=Ua,jt(e,0),Tt(e,n),ln(e,Fe()),t;if(t===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,_t(e,sn,$n),ln(e,Fe()),null}function ls(e,n){var t=ye;ye|=1;try{return e(n)}finally{ye=t,ye===0&&(ia=Fe()+500,jr&&lt())}}function kt(e){ft!==null&&ft.tag===0&&(ye&6)===0&&oa();var n=ye;ye|=1;var t=gn.transition,a=Se;try{if(gn.transition=null,Se=1,e)return e()}finally{Se=a,gn.transition=t,ye=n,(ye&6)===0&&lt()}}function us(){pn=ra.current,je(ra)}function jt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Yf(t)),Qe!==null)for(t=Qe.return;t!==null;){var a=t;switch(Lo(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&wr();break;case 3:na(),je(an),je(qe),wo();break;case 5:bo(a);break;case 4:na();break;case 13:je(Re);break;case 19:je(Re);break;case 10:No(a.type._context);break;case 22:case 23:us()}t=t.return}if(Ge=e,Qe=e=vt(e.current,null),He=pn=n,Ye=0,Ua=null,ts=ei=wt=0,sn=Ga=null,Vt!==null){for(n=0;n<Vt.length;n++)if(t=Vt[n],a=t.interleaved,a!==null){t.interleaved=null;var r=a.next,s=t.pending;if(s!==null){var c=s.next;s.next=r,a.next=c}t.pending=a}Vt=null}return e}function _c(e,n){do{var t=Qe;try{if(Eo(),Br.current=Kr,Yr){for(var a=De.memoizedState;a!==null;){var r=a.queue;r!==null&&(r.pending=null),a=a.next}Yr=!1}if(At=0,Ue=Be=De=null,Fa=!1,za=0,ns.current=null,t===null||t.return===null){Ye=1,Ua=n,Qe=null;break}e:{var s=e,c=t.return,f=t,h=n;if(n=He,f.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var E=h,R=f,D=R.tag;if((R.mode&1)===0&&(D===0||D===11||D===15)){var _=R.alternate;_?(R.updateQueue=_.updateQueue,R.memoizedState=_.memoizedState,R.lanes=_.lanes):(R.updateQueue=null,R.memoizedState=null)}var J=ic(c);if(J!==null){J.flags&=-257,oc(J,c,f,s,n),J.mode&1&&rc(s,E,n),n=J,h=E;var Y=n.updateQueue;if(Y===null){var G=new Set;G.add(h),n.updateQueue=G}else Y.add(h);break e}else{if((n&1)===0){rc(s,E,n),cs();break e}h=Error(l(426))}}else if(_e&&f.mode&1){var ze=ic(c);if(ze!==null){(ze.flags&65536)===0&&(ze.flags|=256),oc(ze,c,f,s,n),yo(ta(h,f));break e}}s=h=ta(h,f),Ye!==4&&(Ye=2),Ga===null?Ga=[s]:Ga.push(s),s=c;do{switch(s.tag){case 3:s.flags|=65536,n&=-n,s.lanes|=n;var y=tc(s,h,n);bu(s,y);break e;case 1:f=h;var g=s.type,M=s.stateNode;if((s.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(mt===null||!mt.has(M)))){s.flags|=65536,n&=-n,s.lanes|=n;var F=ac(s,f,n);bu(s,F);break e}}s=s.return}while(s!==null)}Ic(t)}catch(K){n=K,Qe===t&&t!==null&&(Qe=t=t.return);continue}break}while(!0)}function Rc(){var e=Xr.current;return Xr.current=Kr,e===null?Kr:e}function cs(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),Ge===null||(wt&268435455)===0&&(ei&268435455)===0||Tt(Ge,He)}function oi(e,n){var t=ye;ye|=2;var a=Rc();(Ge!==e||He!==n)&&($n=null,jt(e,n));do try{Tp();break}catch(r){_c(e,r)}while(!0);if(Eo(),ye=t,Xr.current=a,Qe!==null)throw Error(l(261));return Ge=null,He=0,Ye}function Tp(){for(;Qe!==null;)Dc(Qe)}function vp(){for(;Qe!==null&&!zm();)Dc(Qe)}function Dc(e){var n=zc(e.alternate,e,pn);e.memoizedProps=e.pendingProps,n===null?Ic(e):Qe=n,ns.current=null}function Ic(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=lp(t,n,pn),t!==null){Qe=t;return}}else{if(t=up(t,n),t!==null){t.flags&=32767,Qe=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ye=6,Qe=null;return}}if(n=n.sibling,n!==null){Qe=n;return}Qe=n=e}while(n!==null);Ye===0&&(Ye=5)}function _t(e,n,t){var a=Se,r=gn.transition;try{gn.transition=null,Se=1,hp(e,n,t,a)}finally{gn.transition=r,Se=a}return null}function hp(e,n,t,a){do oa();while(ft!==null);if((ye&6)!==0)throw Error(l(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var s=t.lanes|t.childLanes;if(qm(e,s),e===Ge&&(Qe=Ge=null,He=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||ti||(ti=!0,Qc(cr,function(){return oa(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=gn.transition,gn.transition=null;var c=Se;Se=1;var f=ye;ye|=4,ns.current=null,dp(e,t),Sc(t,e),If(uo),hr=!!lo,uo=lo=null,e.current=t,mp(t),Qm(),ye=f,Se=c,gn.transition=s}else e.current=t;if(ti&&(ti=!1,ft=e,ai=r),s=e.pendingLanes,s===0&&(mt=null),Ym(t.stateNode),ln(e,Fe()),n!==null)for(a=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],a(r.value,{componentStack:r.stack,digest:r.digest});if(ni)throw ni=!1,e=rs,rs=null,e;return(ai&1)!==0&&e.tag!==0&&oa(),s=e.pendingLanes,(s&1)!==0?e===is?Ka++:(Ka=0,is=e):Ka=0,lt(),null}function oa(){if(ft!==null){var e=Cl(ai),n=gn.transition,t=Se;try{if(gn.transition=null,Se=16>e?16:e,ft===null)var a=!1;else{if(e=ft,ft=null,ai=0,(ye&6)!==0)throw Error(l(331));var r=ye;for(ye|=4,B=e.current;B!==null;){var s=B,c=s.child;if((B.flags&16)!==0){var f=s.deletions;if(f!==null){for(var h=0;h<f.length;h++){var E=f[h];for(B=E;B!==null;){var R=B;switch(R.tag){case 0:case 11:case 15:Ya(8,R,s)}var D=R.child;if(D!==null)D.return=R,B=D;else for(;B!==null;){R=B;var _=R.sibling,J=R.return;if(Mc(R),R===E){B=null;break}if(_!==null){_.return=J,B=_;break}B=J}}}var Y=s.alternate;if(Y!==null){var G=Y.child;if(G!==null){Y.child=null;do{var ze=G.sibling;G.sibling=null,G=ze}while(G!==null)}}B=s}}if((s.subtreeFlags&2064)!==0&&c!==null)c.return=s,B=c;else e:for(;B!==null;){if(s=B,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Ya(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,B=y;break e}B=s.return}}var g=e.current;for(B=g;B!==null;){c=B;var M=c.child;if((c.subtreeFlags&2064)!==0&&M!==null)M.return=c,B=M;else e:for(c=g;B!==null;){if(f=B,(f.flags&2048)!==0)try{switch(f.tag){case 0:case 11:case 15:Zr(9,f)}}catch(K){Ie(f,f.return,K)}if(f===c){B=null;break e}var F=f.sibling;if(F!==null){F.return=f.return,B=F;break e}B=f.return}}if(ye=r,lt(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(dr,e)}catch{}a=!0}return a}finally{Se=t,gn.transition=n}}return!1}function Oc(e,n,t){n=ta(t,n),n=tc(e,n,1),e=ct(e,n,1),n=tn(),e!==null&&(ha(e,1,n),ln(e,n))}function Ie(e,n,t){if(e.tag===3)Oc(e,e,t);else for(;n!==null;){if(n.tag===3){Oc(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(mt===null||!mt.has(a))){e=ta(t,e),e=ac(n,e,1),n=ct(n,e,1),e=tn(),n!==null&&(ha(n,1,e),ln(n,e));break}}n=n.return}}function Lp(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),n=tn(),e.pingedLanes|=e.suspendedLanes&t,Ge===e&&(He&t)===t&&(Ye===4||Ye===3&&(He&130023424)===He&&500>Fe()-as?jt(e,0):ts|=t),ln(e,n)}function Fc(e,n){n===0&&((e.mode&1)===0?n=1:(n=fr,fr<<=1,(fr&130023424)===0&&(fr=4194304)));var t=tn();e=Un(e,n),e!==null&&(ha(e,n,t),ln(e,t))}function gp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Fc(e,t)}function Pp(e,n){var t=0;switch(e.tag){case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(l(314))}a!==null&&a.delete(n),Fc(e,t)}var zc;zc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||an.current)on=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return on=!1,sp(e,n,t);on=(e.flags&131072)!==0}else on=!1,_e&&(n.flags&1048576)!==0&&gu(n,Rr,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;qr(e,n),e=n.pendingProps;var r=$t(n,qe.current);ea(n,t),r=_o(null,n,a,e,r,t);var s=Ro();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,rn(a)?(s=!0,kr(n)):s=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,So(n),r.updater=$r,n.stateNode=r,r._reactInternals=n,Qo(n,a,e,t),n=Uo(null,n,a,!0,s,t)):(n.tag=0,_e&&s&&ho(n),nn(null,n,r,t),n=n.child),n;case 16:a=n.elementType;e:{switch(qr(e,n),e=n.pendingProps,r=a._init,a=r(a._payload),n.type=a,r=n.tag=Mp(a),e=xn(a,e),r){case 0:n=Yo(null,n,a,e,t);break e;case 1:n=mc(null,n,a,e,t);break e;case 11:n=sc(null,n,a,e,t);break e;case 14:n=lc(null,n,a,xn(a.type,e),t);break e}throw Error(l(306,a,""))}return n;case 0:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:xn(a,r),Yo(e,n,a,r,t);case 1:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:xn(a,r),mc(e,n,a,r,t);case 3:e:{if(fc(n),e===null)throw Error(l(387));a=n.pendingProps,s=n.memoizedState,r=s.element,Vu(e,n),Qr(n,a,null,t);var c=n.memoizedState;if(a=c.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},n.updateQueue.baseState=s,n.memoizedState=s,n.flags&256){r=ta(Error(l(423)),n),n=pc(e,n,a,t,r);break e}else if(a!==r){r=ta(Error(l(424)),n),n=pc(e,n,a,t,r);break e}else for(fn=it(n.stateNode.containerInfo.firstChild),mn=n,_e=!0,Cn=null,t=xu(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Wt(),a===r){n=Kn(e,n,t);break e}nn(e,n,a,t)}n=n.child}return n;case 5:return wu(n),e===null&&Po(n),a=n.type,r=n.pendingProps,s=e!==null?e.memoizedProps:null,c=r.children,co(a,r)?c=null:s!==null&&co(a,s)&&(n.flags|=32),dc(e,n),nn(e,n,c,t),n.child;case 6:return e===null&&Po(n),null;case 13:return Tc(e,n,t);case 4:return Vo(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=Zt(n,null,a,t):nn(e,n,a,t),n.child;case 11:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:xn(a,r),sc(e,n,a,r,t);case 7:return nn(e,n,n.pendingProps,t),n.child;case 8:return nn(e,n,n.pendingProps.children,t),n.child;case 12:return nn(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(a=n.type._context,r=n.pendingProps,s=n.memoizedProps,c=r.value,we(Or,a._currentValue),a._currentValue=c,s!==null)if(Nn(s.value,c)){if(s.children===r.children&&!an.current){n=Kn(e,n,t);break e}}else for(s=n.child,s!==null&&(s.return=n);s!==null;){var f=s.dependencies;if(f!==null){c=s.child;for(var h=f.firstContext;h!==null;){if(h.context===a){if(s.tag===1){h=Gn(-1,t&-t),h.tag=2;var E=s.updateQueue;if(E!==null){E=E.shared;var R=E.pending;R===null?h.next=h:(h.next=R.next,R.next=h),E.pending=h}}s.lanes|=t,h=s.alternate,h!==null&&(h.lanes|=t),Co(s.return,t,n),f.lanes|=t;break}h=h.next}}else if(s.tag===10)c=s.type===n.type?null:s.child;else if(s.tag===18){if(c=s.return,c===null)throw Error(l(341));c.lanes|=t,f=c.alternate,f!==null&&(f.lanes|=t),Co(c,t,n),c=s.sibling}else c=s.child;if(c!==null)c.return=s;else for(c=s;c!==null;){if(c===n){c=null;break}if(s=c.sibling,s!==null){s.return=c.return,c=s;break}c=c.return}s=c}nn(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,a=n.pendingProps.children,ea(n,t),r=hn(r),a=a(r),n.flags|=1,nn(e,n,a,t),n.child;case 14:return a=n.type,r=xn(a,n.pendingProps),r=xn(a.type,r),lc(e,n,a,r,t);case 15:return uc(e,n,n.type,n.pendingProps,t);case 17:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:xn(a,r),qr(e,n),n.tag=1,rn(a)?(e=!0,kr(n)):e=!1,ea(n,t),ec(n,a,r),Qo(n,a,r,t),Uo(null,n,a,!0,e,t);case 19:return hc(e,n,t);case 22:return cc(e,n,t)}throw Error(l(156,n.tag))};function Qc(e,n){return Pl(e,n)}function yp(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(e,n,t,a){return new yp(e,n,t,a)}function ds(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mp(e){if(typeof e=="function")return ds(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Le)return 11;if(e===me)return 14}return 2}function vt(e,n){var t=e.alternate;return t===null?(t=Pn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function si(e,n,t,a,r,s){var c=2;if(a=e,typeof e=="function")ds(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case Ee:return Rt(t.children,r,s,n);case Ve:c=8,r|=8;break;case be:return e=Pn(12,t,n,r|2),e.elementType=be,e.lanes=s,e;case ue:return e=Pn(13,t,n,r),e.elementType=ue,e.lanes=s,e;case Te:return e=Pn(19,t,n,r),e.elementType=Te,e.lanes=s,e;case se:return li(t,r,s,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case he:c=10;break e;case Ce:c=9;break e;case Le:c=11;break e;case me:c=14;break e;case fe:c=16,a=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return n=Pn(c,t,n,r),n.elementType=e,n.type=a,n.lanes=s,n}function Rt(e,n,t,a){return e=Pn(7,e,a,n),e.lanes=t,e}function li(e,n,t,a){return e=Pn(22,e,a,n),e.elementType=se,e.lanes=t,e.stateNode={isHidden:!1},e}function ms(e,n,t){return e=Pn(6,e,null,n),e.lanes=t,e}function fs(e,n,t){return n=Pn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Ep(e,n,t,a,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fi(0),this.expirationTimes=Fi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fi(0),this.identifierPrefix=a,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ps(e,n,t,a,r,s,c,f,h){return e=new Ep(e,n,t,f,h),n===1?(n=1,s===!0&&(n|=8)):n=0,s=Pn(3,null,null,n),e.current=s,s.stateNode=e,s.memoizedState={element:a,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},So(s),e}function Np(e,n,t){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oe,key:a==null?null:""+a,children:e,containerInfo:n,implementation:t}}function Jc(e){if(!e)return st;e=e._reactInternals;e:{if(Et(e)!==e||e.tag!==1)throw Error(l(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(rn(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(l(171))}if(e.tag===1){var t=e.type;if(rn(t))return vu(e,t,n)}return n}function Bc(e,n,t,a,r,s,c,f,h){return e=ps(t,a,!0,e,r,s,c,f,h),e.context=Jc(null),t=e.current,a=tn(),r=pt(t),s=Gn(a,r),s.callback=n??null,ct(t,s,r),e.current.lanes=r,ha(e,r,a),ln(e,a),e}function ui(e,n,t,a){var r=n.current,s=tn(),c=pt(r);return t=Jc(t),n.context===null?n.context=t:n.pendingContext=t,n=Gn(s,c),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=ct(r,n,c),e!==null&&(bn(e,r,c,s),zr(e,r,c)),c}function ci(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Yc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ts(e,n){Yc(e,n),(e=e.alternate)&&Yc(e,n)}function Cp(){return null}var Uc=typeof reportError=="function"?reportError:function(e){console.error(e)};function vs(e){this._internalRoot=e}di.prototype.render=vs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(l(409));ui(e,n,null,null)},di.prototype.unmount=vs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;kt(function(){ui(null,e,null,null)}),n[Qn]=null}};function di(e){this._internalRoot=e}di.prototype.unstable_scheduleHydration=function(e){if(e){var n=Vl();e={blockedOn:null,target:e,priority:n};for(var t=0;t<tt.length&&n!==0&&n<tt[t].priority;t++);tt.splice(t,0,e),t===0&&wl(e)}};function hs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function mi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gc(){}function xp(e,n,t,a,r){if(r){if(typeof a=="function"){var s=a;a=function(){var E=ci(c);s.call(E)}}var c=Bc(n,a,e,0,null,!1,!1,"",Gc);return e._reactRootContainer=c,e[Qn]=c.current,wa(e.nodeType===8?e.parentNode:e),kt(),c}for(;r=e.lastChild;)e.removeChild(r);if(typeof a=="function"){var f=a;a=function(){var E=ci(h);f.call(E)}}var h=ps(e,0,!1,null,null,!1,!1,"",Gc);return e._reactRootContainer=h,e[Qn]=h.current,wa(e.nodeType===8?e.parentNode:e),kt(function(){ui(n,h,t,a)}),h}function fi(e,n,t,a,r){var s=t._reactRootContainer;if(s){var c=s;if(typeof r=="function"){var f=r;r=function(){var h=ci(c);f.call(h)}}ui(n,c,e,r)}else c=xp(t,n,e,r,a);return ci(c)}xl=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=va(n.pendingLanes);t!==0&&(zi(n,t|1),ln(n,Fe()),(ye&6)===0&&(ia=Fe()+500,lt()))}break;case 13:kt(function(){var a=Un(e,1);if(a!==null){var r=tn();bn(a,e,1,r)}}),Ts(e,1)}},Qi=function(e){if(e.tag===13){var n=Un(e,134217728);if(n!==null){var t=tn();bn(n,e,134217728,t)}Ts(e,134217728)}},Sl=function(e){if(e.tag===13){var n=pt(e),t=Un(e,n);if(t!==null){var a=tn();bn(t,e,n,a)}Ts(e,n)}},Vl=function(){return Se},bl=function(e,n){var t=Se;try{return Se=e,n()}finally{Se=t}},ji=function(e,n,t){switch(n){case"input":if(x(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var r=Ar(a);if(!r)throw Error(l(90));Pe(a),x(a,r)}}}break;case"textarea":rl(e,t);break;case"select":n=t.value,n!=null&&en(e,!!t.multiple,n,!1)}},fl=ls,pl=kt;var Sp={usingClientEntryPoint:!1,Events:[_a,Gt,Ar,dl,ml,ls]},$a={findFiberByHostInstance:Nt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vp={bundleType:$a.bundleType,version:$a.version,rendererPackageName:$a.rendererPackageName,rendererConfig:$a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Z.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ll(e),e===null?null:e.stateNode},findFiberByHostInstance:$a.findFiberByHostInstance||Cp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pi.isDisabled&&pi.supportsFiber)try{dr=pi.inject(Vp),jn=pi}catch{}}return un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sp,un.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hs(n))throw Error(l(200));return Np(e,n,null,t)},un.createRoot=function(e,n){if(!hs(e))throw Error(l(299));var t=!1,a="",r=Uc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=ps(e,1,!1,null,null,t,!1,a,r),e[Qn]=n.current,wa(e.nodeType===8?e.parentNode:e),new vs(n)},un.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=Ll(n),e=e===null?null:e.stateNode,e},un.flushSync=function(e){return kt(e)},un.hydrate=function(e,n,t){if(!mi(n))throw Error(l(200));return fi(null,e,n,!0,t)},un.hydrateRoot=function(e,n,t){if(!hs(e))throw Error(l(405));var a=t!=null&&t.hydratedSources||null,r=!1,s="",c=Uc;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),n=Bc(n,null,e,1,t??null,r,!1,s,c),e[Qn]=n.current,wa(e),a)for(e=0;e<a.length;e++)t=a[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new di(n)},un.render=function(e,n,t){if(!mi(n))throw Error(l(200));return fi(null,e,n,!1,t)},un.unmountComponentAtNode=function(e){if(!mi(e))throw Error(l(40));return e._reactRootContainer?(kt(function(){fi(null,null,e,!1,function(){e._reactRootContainer=null,e[Qn]=null})}),!0):!1},un.unstable_batchedUpdates=ls,un.unstable_renderSubtreeIntoContainer=function(e,n,t,a){if(!mi(t))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return fi(e,n,t,!1,a)},un.version="18.3.1-next-f1338f8080-20240426",un}var ed;function Vd(){if(ed)return Ps.exports;ed=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(o){console.error(o)}}return i(),Ps.exports=Op(),Ps.exports}var nd;function Fp(){if(nd)return vi;nd=1;var i=Vd();return vi.createRoot=i.createRoot,vi.hydrateRoot=i.hydrateRoot,vi}var zp=Fp();const Qp=Sd(zp),Jp="modulepreload",Bp=function(i){return"/BTMM_JORNADAS/"+i},td={},yn=function(o,l,d){let m=Promise.resolve();if(l&&l.length>0){let P=function(k){return Promise.all(k.map(A=>Promise.resolve(A).then(N=>({status:"fulfilled",value:N}),N=>({status:"rejected",reason:N}))))};document.getElementsByTagName("link");const L=document.querySelector("meta[property=csp-nonce]"),T=(L==null?void 0:L.nonce)||(L==null?void 0:L.getAttribute("nonce"));m=P(l.map(k=>{if(k=Bp(k),k in td)return;td[k]=!0;const A=k.endsWith(".css"),N=A?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${k}"]${N}`))return;const C=document.createElement("link");if(C.rel=A?"stylesheet":Jp,A||(C.as="script"),C.crossOrigin="",C.href=k,T&&C.setAttribute("nonce",T),document.head.appendChild(C),A)return new Promise((w,I)=>{C.addEventListener("load",w),C.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${k}`)))})}))}function p(P){const L=new Event("vite:preloadError",{cancelable:!0});if(L.payload=P,window.dispatchEvent(L),!L.defaultPrevented)throw P}return m.then(P=>{for(const L of P||[])L.status==="rejected"&&p(L.reason);return o().catch(p)})},Ys=[{nombre:"Puesto Orosi",tag:"OR",color:"bg-orange-100 text-orange-950",funcionarios:["Errol Salazar","Mayra Espinoza","Yeison Cortés","Kenneth Mena","Fabricio Carbonell","Monserrath Navarro"]},{nombre:"Puesto Quetzales",tag:"QZ",color:"bg-orange-700 text-white",funcionarios:["Juan Pablo Granados","Karen Valle","Josué Brenes","Laura Valverde","Diana Tencio","Jetzelly Villalobos","Pablo Sánchez"]},{nombre:"Puesto Esperanza",tag:"LE",color:"bg-sky-100 text-sky-950",funcionarios:["Yolanda Elizondo","Mariano Solís","Guillermo Pérez","Carlos Cordero","Alexander Alvarado"]}],ua=Ys.map(i=>i.nombre),Pi=Ys.flatMap((i,o)=>i.funcionarios.map((l,d)=>{const m=o*10+d+1,p=l==="Pablo Sánchez",P=l==="Yolanda Elizondo",L=l==="Carlos Cordero",T=["Yeison Cortés","Jetzelly Villalobos","Guillermo Pérez"].includes(l),k=l==="Fabricio Carbonell"?"De vacaciones":l==="Guillermo Pérez"?"Incapacitado":"Activo";return{id:`f${m}`,nombre:l,cedula:`1-0000-${String(m).padStart(4,"0")}`,email:p?"psforestal@yahoo.com":`${l.toLowerCase().replaceAll(" ",".")}@sinac.go.cr`,puesto:p?"Técnico en Recursos Naturales":P?"Asistente Administrativo":L?"Personal Apoyo ONG-Invest-Volunt":"Guardaparques",condicion:L?"ONG-Invest-Volunt":m%5===0?"Interino":"Propiedad",jornada:p||P?"Ordinaria":"Acumulativa",modalidad:p||P?"Horario administrativo L-V":m%7===0?"16x8":m%4===0?"12x6":"10x5",resolucion:T?"":L?"CONV-ONG-INV-VOL-2026":p||P?"":`RES-ACC-${String(m).padStart(3,"0")}-2026`,disponibilidad:!p&&!P&&!L&&m%3!==0,contrato:!p&&!P&&!L&&m%3!==0?`DISP-2026-${String(m).padStart(3,"0")}`:"",vencimiento:m%5===0?"2026-05-30":m%4===0?"2026-06-30":m%3!==0?"2026-12-31":"",policia:!p&&!P&&!L&&!T,brigada:m%4===2,ong:L,jefe:"Administración PNLQ",estado:k,ingreso:"2026-01-01",puestoOperativo:i.nombre,obs:`${i.nombre}${T?" · Dato pendiente: resolución acumulativa":""}`}})),bd=[],Yp=[{id:"rep1",folio:"REP-001",funcionario:"Errol Salazar",fecha:"2026-05-24",tipoDia:"Día libre",motivo:"Incendio forestal",motivoDetalle:"Apoyo en control de conato sector Orosi.",magnitud:"diaEntero",horas:0,cuotas:[{id:"rep1-c1",fecha:"2026-05-31",magnitud:"medioDia",horas:0}],observaciones:"Llamado por la administración fuera de rol."},{id:"rep2",folio:"REP-002",funcionario:"Juan Pablo Granados",fecha:"2026-05-17",tipoDia:"Feriado",motivo:"Atención de denuncia",motivoDetalle:"Inspección por tala reportada en ingreso Quetzales.",magnitud:"horas",horas:4,cuotas:[],observaciones:""},{id:"rep3",folio:"REP-003",funcionario:"Mariano Solís",fecha:"2026-04-19",tipoDia:"Fuera de turno",motivo:"Actividad especial",motivoDetalle:"Atención de gira institucional.",magnitud:"medioDia",horas:0,cuotas:[{id:"rep3-c1",fecha:"2026-05-06",magnitud:"medioDia",horas:0}],observaciones:"Tiempo repuesto en coordinación con la administración."}],Up={1:{"Alexander Alvarado":"O-F LI LI LI LI LI LI V13 V14 V15 V16 V17 V18 V19 V20 L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 V1 V2 V3 V4 V5 V6","Carlos Cordero":"O-F T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1","Diana Tencio":"O-F T4 L1 L2 T1 T2 T3 T4 T5 L1 L2 LA T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 LA L1 L2 T1 T2 T3 T4 T5 L1","Errol Salazar":"O-F T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6","Fabricio Carbonell":"O-F O-FA T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 L1","Guillermo Pérez":"L4 L5 L6 O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 T13 T14 L1 L2 L3 L4 L5 L6 L7 T1 T2 T3 T4 T5 T6","Jetzelly Villalobos":"L1 L2 L3 L4 O-FA O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 T13 T14 L1 L2 L3 L4 L5 L6 L7 V1 V2 L1 LA","Josué Brenes":"L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA O-FA","Karen Valle":"O-F T4 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1","Kenneth Mena":"L3 L4 L5 L6 T1 O-FA T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 L1 L2 IN IN","Laura Valverde":"O-F V7 V8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6","Mariano Solís":"O-F T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA V1 V2 V3 V4 LA LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4","Mayra Espinoza":"L3 L4 L5 O-FA LA LA LA LA LA LA LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2","Yeison Cortés":"O-F T5 T6 T7 T8 L1 L2 L3 L4 V1 V2 L1 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4","Yolanda Elizondo":"O-F V4 V5 V6 V7 V8 V9 V10 V11 V12 V13 V14 V15 V16 L1 L2 L3 L4 L5 L6 L7 L8 O-FA T1 T2 T3 T4 T5 T6 T7 T8"},2:{"Alexander Alvarado":"V7 V8 V9 V10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4","Carlos Cordero":"T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1","Diana Tencio":"L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 LA V1 V2 V3 L1 L2 T1 T2 T3 T4 T5 L1","Errol Salazar":"LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 LA T1 T2 T3 T4 T5 T6 T7 T8","Fabricio Carbonell":"T6 T7 T8 T9 T10 T11 L2 L3 T1 T2 T3 T4 T5 T6 T7 T8 T9 L4 L5 L1 L2 L3 L4 L5 T1 T2 T3 T4","Guillermo Pérez":"T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 L1 L2 L3 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Jetzelly Villalobos":"V1 V2 V3 V4 V5 L1 L2 L3 T1 T2 T3 T4 T5 T6 L1 L2 L3 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11","Josué Brenes":"V1 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 L1 L2 V1 V2 V3 V4 L1 L2","Karen Valle":"L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1","Kenneth Mena":"IN IN IN IN IN IN IN IN IN IN IN IN L3 L4 L5 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 V11 V12 V13","Laura Valverde":"T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4","Mariano Solís":"L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 V11 V12 V13 V14 V15","Mayra Espinoza":"T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11","Yeison Cortés":"T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 V1 V2 V3 V4 L1 L2 IN IN T1 T2 T3 T4 T5 T6 T7 T8 L1","Yolanda Elizondo":"T9 T10 L1 L2 L3 L4 L5 V1 V2 V3 V4 V5 V6 L1 L2 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3"},3:{"Alexander Alvarado":"T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 · · · · · · · · · · · · · · · · · · · ·","Carlos Cordero":"L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 V1 V2 L1 T1 T2 T3 T4 T5 T6 T7 T8","Diana Tencio":"L2 LA LA LA T4 T5 L1 L2 T1 T2 T3 LA T5 L1 L2 O-G O-G O-G O-G O-G O-G O-G O-G O-G O-G O-G O-G L1 L2 T1 T2","Errol Salazar":"T9 T10 L1 L2 L3 L4 L5 LA LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 LA T2 T3 T4 T5 T6 T7","Fabricio Carbonell":"T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5","Guillermo Pérez":"T11 T12 L1 L2 L3 L4 L5 L6 V1 V2 V3 V4 V5 L1 L2 V1 V2 V3 V4 V5 V6 V7 L1 L2 L3 L4 IN IN IN IN IN","Jetzelly Villalobos":"T12 L1 L2 L3 L4 L5 L6 LA LA V1 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6","Josué Brenes":"LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5","Karen Valle":"L2 T1 T2 T3 T4 T5 L1 L2 IN T2 T3 T4 T5 L1 L2 T1 LA LA T4 T5 L1 L2 T1 T2 T3 V1 T5 L1 L2 T1 T2","Kenneth Mena":"V14 V15 L1 L2 L3 IN IN IN IN IN IN IN V1 V2 V3 V4 L1 L2 IN IN IN IN IN IN IN IN IN IN IN IN IN","Laura Valverde":"L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11","Mariano Solís":"V16 L1 L2 L3 L4 L5 L6 L7 L8 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Mayra Espinoza":"T12 T13 T14 T15 T16 T17 L1 L2 L3 L4 L5 L6 L7 L8 L9 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1","Yeison Cortés":"L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 T1","Yolanda Elizondo":"L4 L5 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 L1 L2 L3 L4 L5 IN IN IN IN IN IN IN IN IN IN T1 T2 T3 T4"},4:{"Carlos Cordero":"T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5","Diana Tencio":"LA O-F O-F L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4","Errol Salazar":"T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 LA T1 T2 T3 T4 T5 T6 T7 T8 T9","Fabricio Carbonell":"T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 V1 V2 V3 V4 V5 V6 V7 V8","Guillermo Pérez":"IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN T1 T2 T3 T4","Jetzelly Villalobos":"T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3","Josué Brenes":"T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 V1 V2 V3 V4 L1 L2 LA T2 T3 T4 T5 T6 T7 T8 T9","Karen Valle":"T3 O-F O-F L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4","Kenneth Mena":"IN V1 V2 V3 L1 IN IN IN IN IN IN IN IN IN IN IN IN IN IN V1 V2 L1 L L L L L L L L","Laura Valverde":"T12 T13 T14 L1 L2 L3 L4 L5 L6 L7 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 T1 T2 T3","Mariano Solís":"L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Mayra Espinoza":"T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA O-FA V1 V2 V3 L1 L2 T1 T2 T3 T4 T5 T6 T7 T8 L","Yeison Cortés":"L2 L3 L4 L5 L6 T2 L1 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 IN IN IN T3 T4 T5 T6 T7","Yolanda Elizondo":"T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2"},5:{"Carlos Cordero":"T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 O-FA V1 V2 V3 V4 V5 V6 V7 V8","Diana Tencio":"T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2","Errol Salazar":"T10 T11 T12 L1 L2 L3 L4 L5 L6 LA LA O-FA O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3","Fabricio Carbonell":"V9 V10 V11 V12 V13 V14 V15 V16 V17 V18 V19 V20 L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 O-FA O-FA O-FA O-FA O-FA T1 T2 T3 T4","Guillermo Pérez":"IN IN IN IN IN IN IN IN IN IN IN IN IN IN T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5","Jetzelly Villalobos":"T4 T5 T6 L1 L2 L3 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 LA LA LA LA LA V1 V2","Josué Brenes":"T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 LA L1 L2 L3 L4 LA","Juan Pablo Granados":"T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3","Karen Valle":"T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2","Kenneth Mena":"L L L L L L L L L L L L L L L L L L L L L L L V1 V2 V3 V4 V5 V6 L1 L2","Laura Valverde":"T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4","Mariano Solís":"L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1","Mayra Espinoza":"L1 L2 L3 L4 LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8","Pablo Sánchez":"T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 V1 V2 V3 V4 V5 L1 L2 T1 T2 T3 T4 T5 L1 L2","Yeison Cortés":"O-FA L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 LA T4 T5 T6 T7 T8 L1 L2 L3","Yolanda Elizondo":"T3 T4 T5 T6 T7 T8 T9 LA L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3"},6:{"Carlos Cordero":"V9 V10 V11 V12 V13 V14 V15 V16 V17 V18 V19 V20 L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 O-FA V1 V2 V3 V4 V5 V6 V7","Diana Tencio":"T1 T2 T3 LA T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2","Errol Salazar":"T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5","Fabricio Carbonell":"T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 L1 T10 L2 L3 T1 L4 L5 T2 T3 T4 T5 T6 T7","Guillermo Pérez":"T6 L1 L2 L3 LA V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Jetzelly Villalobos":"V3 V4 L1 L2 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8","Josué Brenes":"LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 L1 L2 L3 T1 T2 L4 L5 L6 L1 · · · · · · · · ·","Juan Pablo Granados":"L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3","Karen Valle":"T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 LA T5 L2 T1 T2 T3 T4 LA L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2","Kenneth Mena":"L3 T1 T2 T3 T4 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2","Laura Valverde":"T5 T6 T7 T8 L1 L2 L3 L4 O-FA O-FA O-FA O-FA LA V1 V2 V3 V4 V5 V6 V7 V8 L1 L2 L3 L4 V1 V2 V3 V4 L1","Mariano Solís":"L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 LA T2 T3 T4 T5 T6 T7 T8 T9 T10 L1","Mayra Espinoza":"T9 T10 T11 T12 T13 T14 L1 L2 L3 L4 L5 L6 L7 LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1","Pablo Sánchez":"T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 V1 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2","Yeison Cortés":"L4 LA T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2","Yolanda Elizondo":"T4 T5 T6 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1"},7:{"Carlos Cordero":"V8 L1 L2 L3 L4 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 V11 V12 V13 V14 L1 L2 L3 L4 L5 L6 L7 T1 T2 T3 T4 T5","Diana Tencio":"T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 V1 V2 V3 V4 V5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5","Errol Salazar":"T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1","Fabricio Carbonell":"T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8","Guillermo Pérez":"L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8","Jetzelly Villalobos":"T9 T10 L1 L2 L3 L4 L5 LA T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6","Juan Pablo Granados":"L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 L1 L2 L3 LA LA","Karen Valle":"T3 T4 LA T5 L2 T1 T2 T3 T4 T5 L1 L2 V1 V2 V3 V4 V5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5","Kenneth Mena":"T3 T4 T5 L1 L2 V1 V2 V3 V4 V5 L1 L2 LA T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5","Laura Valverde":"L2 LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 T13 L1 L2 L3 L4 L5 L6 L7 T1 T2 T3 T4 T5 T6 T7 T8 L1","Mariano Solís":"L2 L3 L4 L5 LA V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11","Mayra Espinoza":"T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5","Pablo Sánchez":"T3 T4 T5 L1 L2 V1 V2 V3 V4 V5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5","Yeison Cortés":"T3 T4 T5 L1 L2 T1 T2 T3 V1 V2 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5","Yolanda Elizondo":"T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2"},8:{"Carlos Cordero":"T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T5","Diana Tencio":"L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1","Errol Salazar":"T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5","Fabricio Carbonell":"L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2","Guillermo Pérez":"T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T10","Jetzelly Villalobos":"T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7","Karen Valle":"L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1","Kenneth Mena":"L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1","Laura Valverde":"L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3","Mariano Solís":"T12 L1 L2 L3 L4 L5 L6 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 V11 V12 V13 V14 L1 L2 L3 L4 L5 L6 L7 T1 T2 T3","Mayra Espinoza":"L6 LA V1 V2 V3 V4 V5 V6 V7 V8 L1 L2 L3 L4 LA LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5","Monserrath Navarro":"T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3","Pablo Sánchez":"L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1","Yeison Cortés":"L4 LA T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1","Yolanda Elizondo":"T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5"}},Gp=[31,28,31,30,31,30,31,31,30,31,30,31],js="2026-07-21T20:19:49.675Z",Us=(()=>{var o;const i={};for(let l=1;l<=12;l+=1){const d=Up[l]||{};for(const m of Ys)for(const p of m.funcionarios){const P=((o=d[p])==null?void 0:o.split(" "))||[];for(let L=1;L<=Gp[l-1];L+=1){const T=P[L-1];i[`2026-${l}-${m.nombre}-${p}-${L}`]=T&&T!=="·"?T:""}}}return i})(),Kp=Object.fromEntries(Object.entries(Us).filter(([i])=>{const o=i.match(/^2026-(\d+)-/),l=Number(o==null?void 0:o[1]);return l>=7&&l<=8}));function $p(i={}){return{...i,...Kp}}const Fn=1,Xa="current",Hp="pnlq:state";let Es=null,qa=null,ad=Promise.resolve();function Gs(i){const o=ad.then(i,i);return ad=o.catch(()=>{}),o}async function ca(){return Es||(typeof indexedDB>"u"?null:qa||(qa=(async()=>{try{const{default:i}=await yn(async()=>{const{default:l}=await import("./import-wrapper-prod-mwVXNbil.js");return{default:l}},[]),o=new i("pnlq");return o.version(1).stores({state:"id",auditoria:"++id, fecha, accion",pendientes:"++id, creadoEn, tipo"}),Es=o,o}catch{return null}finally{qa=null}})(),qa))}async function qp(){const i=await ca();if(!i)return null;try{const o=await i.state.get(Xa);return!o||o.schemaVersion!==Fn?null:{state:o.payload??null,revision:o.revision??0,savedAt:o.savedAt??null}}catch{return null}}async function Wp(i,o=0){const l=await ca();return l?Gs(async()=>{try{return await l.state.put({id:Xa,schemaVersion:Fn,savedAt:new Date().toISOString(),revision:o,payload:i}),!0}catch{return!1}}):!1}async function Zp(){const i=await ca();return i?Gs(async()=>{try{return await i.state.delete(Xa),!0}catch{return!1}}):!1}async function Xp(){const i=await ca();if(!i)return{migrated:!1,source:null};try{if(await i.state.get(Xa))return{migrated:!1,source:null};if(typeof window>"u"||!window.localStorage)return{migrated:!1,source:null};const l=window.localStorage.getItem(Hp);if(!l)return{migrated:!1,source:null};const d=JSON.parse(l);return d!=null&&d.state?d.schemaVersion!==Fn?{migrated:!1,source:null}:(await i.state.put({id:Xa,schemaVersion:Fn,savedAt:d.savedAt||new Date().toISOString(),revision:d.revision??0,payload:d.state,migradoDeLocalStorage:!0}),{migrated:!0,source:"localStorage"}):{migrated:!1,source:null}}catch{return{migrated:!1,source:null}}}async function eT(){const i=await ca();return i?Gs(async()=>{try{return await Promise.all([i.state.clear(),i.pendientes.clear(),i.auditoria.clear()]),!0}catch{return!1}}):!1}const Ks=Object.freeze({puestosRequierenVisitantesDiario:["Puesto Orosi","Puesto Quetzales"],diaCorteViaticos:15,mesObjetivoViaticos:"siguiente",permitirConsultaDespuesCierre:!0,aplicarFeriadosEnPrimerDiaLaboral:!0,alertaInactivoConActividad:!0,alertaIncapacitadoConActividad:!0,alertaAcumulativaSinModalidad:!0,alertaReposicionPendiente:!0,horasJornada:8}),rd=["siguiente","actual"];function yi(i={}){return{...Ks,...i}}function th(i){const o=[];if(!Array.isArray(i.puestosRequierenVisitantesDiario))o.push("La lista de puestos con Visit. diario debe ser un arreglo.");else{const m=i.puestosRequierenVisitantesDiario.filter(p=>!ua.includes(p));m.length&&o.push(`Puesto(s) no reconocido(s) en la lista de Visit. diaria: ${m.join(", ")}`)}const l=Number(i.diaCorteViaticos);(!Number.isInteger(l)||l<1||l>28)&&o.push("Día de corte de viáticos debe ser un entero entre 1 y 28."),rd.includes(i.mesObjetivoViaticos)||o.push(`mesObjetivoViaticos debe ser uno de: ${rd.join(", ")}.`);const d=Number(i.horasJornada);return(!Number.isFinite(d)||d<1||d>24)&&o.push("Horas por jornada debe ser un número entre 1 y 24."),o}const Mn=8,Ns=["Día libre","Fuera de turno","Feriado","Vacaciones interrumpidas","Otro"],Cs=["Emergencia","Incendio forestal","Atención de denuncia","Actividad especial","Operativo de control","Otro"],Ad=["diaEntero","medioDia","horas"];function tr(i){return Math.round((Number(i)||0)*100)/100}function wd(i,o,l=Mn){return i==="diaEntero"?l:i==="medioDia"?l/2:Number(o)||0}function $s(i){return Array.isArray(i==null?void 0:i.cuotas)?i.cuotas:(i==null?void 0:i.estado)==="Repuesto"?[{id:`i-${i.id||"x"}`,fecha:i.fechaReposicion||i.fecha,magnitud:i.magnitud,horas:i.horas||0}]:[]}function nT(i,o=Mn){return tr(wd(i==null?void 0:i.magnitud,i==null?void 0:i.horas,o))}function kd(i,o=Mn){return tr($s(i).reduce((l,d)=>l+wd(d.magnitud,d.horas,o),0))}function ar(i,o=Mn){return tr(Math.max(0,nT(i,o)-kd(i,o)))}function jd(i,o=Mn){return kd(i,o)<=0?"Pendiente":ar(i,o)<=0?"Repuesto":"Parcial"}function tT(i){const o=String(i||"").match(/(\d+)/);return o?Number(o[1]):null}function aT(i=[]){const o=i.reduce((l,d)=>Math.max(l,tT(d.folio)||0),0);return`REP-${String(o+1).padStart(3,"0")}`}function rT(i=[],o=Mn){const l={},d={};for(const m of i)if(m.funcionario&&m.fecha&&(l[`${m.funcionario}|${m.fecha}`]={...m,estadoCalc:jd(m,o),saldo:ar(m,o)}),m.funcionario)for(const p of $s(m))p.fecha&&(d[`${m.funcionario}|${p.fecha}`]={...m,cuota:p});return{trabajadas:l,reposiciones:d}}function iT(i=[],o=Mn){let l=0,d=0,m=0,p=0;for(const P of i){const L=jd(P,o);p+=ar(P,o),L==="Repuesto"?m+=1:(l+=1,L==="Parcial"&&(d+=1))}return{total:i.length,pendientes:l,parciales:d,repuestos:m,saldoHoras:tr(p)}}function oT(i=[]){return[...i].sort((o,l)=>String(l.fecha||"").localeCompare(String(o.fecha||"")))}function sT(i=[],o,l=Mn){return tr(i.filter(d=>d.funcionario===o).reduce((d,m)=>d+ar(m,l),0))}function lT(i=[],o,l=Mn){return i.filter(d=>d.funcionario===o&&ar(d,l)>0).sort((d,m)=>String(d.fecha||"").localeCompare(String(m.fecha||"")))}function uT(i){return i==="L"?"Día libre":i==="V"?"Vacaciones interrumpidas":"Fuera de turno"}function cT({reposiciones:i=[],funcionario:o,fecha:l,categoria:d,motivo:m="Actividad especial",detalle:p=""}){return{id:`rep${Date.now()}`,folio:aT(i),funcionario:o,fecha:l,tipoDia:uT(d),motivo:m,motivoDetalle:p,magnitud:"diaEntero",horas:0,cuotas:[],observaciones:""}}function dT(i=[],o,l,d=Mn){const m=lT(i,o,d)[0];return m?i.map(p=>p.id===m.id?{...p,cuotas:[...$s(p),l]}:p):i}function mT(i=[],o=Mn){const l=new Map;for(const m of i){const p=m.funcionario||"—";l.has(p)||l.set(p,[]),l.get(p).push(m)}const d=[];for(const[m,p]of l.entries())d.push({funcionario:m,registros:oT(p),...iT(p,o)});return d.sort((m,p)=>p.saldoHoras-m.saldoHoras||p.total-m.total||m.funcionario.localeCompare(p.funcionario)),d}const id=["Activo","Incapacitado","De vacaciones","Inactivo"],fT=1e3,pT=2e4,TT=2e4,vT=3e5,hT=200,LT=new Map(Pi.map(i=>[i.id,i]));function qn(i){return!!i&&typeof i=="object"&&!Array.isArray(i)}function gT(i){return i.replace(/<[^>]*>/g,"")}function wn(i,o,l){return typeof i!="string"?l:gT(i).trim().slice(0,o)}function xs(i,o,l,d){if(typeof i!="string")return d;const m=i.trim().slice(0,o);return l.test(m)?m:d}function PT(i,o){return typeof i=="boolean"?i:o}function _d(i,o,{min:l=0,max:d=1e4}={}){const m=Number(i);return Number.isFinite(m)?Math.min(d,Math.max(l,m)):o}function er(i,o){if(typeof i!="string")return o;const l=i.trim().match(/^(\d{4})-(\d{2})-(\d{2})$/);if(!l)return o;const d=Number(l[1]);if(d<2e3||d>2100)return o;const m=Number(l[2]),p=Number(l[3]);return m<1||m>12||p<1||p>31?o:l[0]}function yT(i){if(!qn(i))return i;const o=typeof i.id=="string"?LT.get(i.id):void 0,l={...i};"id"in l&&(l.id=xs(l.id,20,/^[A-Za-z0-9-]+$/,"")),"nombre"in l&&(l.nombre=wn(l.nombre,120,(o==null?void 0:o.nombre)??"")),"cedula"in l&&(l.cedula=xs(l.cedula,20,/^[0-9-]+$/,(o==null?void 0:o.cedula)??"")),"email"in l&&(l.email=xs(l.email,120,/^[^\s@]+@[^\s@]+\.[^\s@]+$/,(o==null?void 0:o.email)??""));for(const d of["puesto","puestoOperativo","condicion","jornada","modalidad"])d in l&&(l[d]=wn(l[d],80,(o==null?void 0:o[d])??""));if("obs"in l&&(l.obs=wn(l.obs,500,(o==null?void 0:o.obs)??"")),"estado"in l){const d=o&&id.includes(o.estado)?o.estado:"Activo";l.estado=id.includes(l.estado)?l.estado:d}for(const d of["disponibilidad","policia","brigada","ong"])d in l&&(l[d]=PT(l[d],(o==null?void 0:o[d])??!1));return"jefe"in l&&(l.jefe=typeof l.jefe=="string"?l.jefe:(o==null?void 0:o.jefe)??""),l}function MT(i){if(!qn(i))return null;const o={...i};"id"in o&&(o.id=wn(o.id,40,""));for(const[d,m]of Object.entries(o))d==="id"||d==="inicio"||d==="fin"||typeof m=="string"&&(o[d]=wn(m,200,""));if(typeof o.inicio!="string")return null;const l=er(o.inicio,"");return l?(o.inicio=l,"fin"in o&&(o.fin=er(o.fin,l)),o):null}function ET(i){if(!qn(i))return null;const o={...i};return"id"in o&&(o.id=wn(o.id,40,"")),"fecha"in o&&(o.fecha=er(o.fecha,"")),"magnitud"in o&&(o.magnitud=Ad.includes(o.magnitud)?o.magnitud:"diaEntero"),"horas"in o&&(o.horas=_d(o.horas,0,{min:0,max:24})),o}function NT(i){if(!qn(i))return null;const o={...i};if(typeof o.funcionario!="string"||!o.funcionario.trim()||(o.funcionario=wn(o.funcionario,120,""),typeof o.fecha!="string"))return null;const l=er(o.fecha,"");return l?(o.fecha=l,"id"in o&&(o.id=wn(o.id,40,"")),"folio"in o&&(o.folio=wn(o.folio,20,"")),"tipoDia"in o&&(o.tipoDia=Ns.includes(o.tipoDia)?o.tipoDia:Ns[Ns.length-1]),"motivo"in o&&(o.motivo=Cs.includes(o.motivo)?o.motivo:Cs[Cs.length-1]),"motivoDetalle"in o&&(o.motivoDetalle=wn(o.motivoDetalle,300,"")),"observaciones"in o&&(o.observaciones=wn(o.observaciones,300,"")),"magnitud"in o&&(o.magnitud=Ad.includes(o.magnitud)?o.magnitud:"diaEntero"),"horas"in o&&(o.horas=_d(o.horas,0,{min:0,max:24})),"fechaReposicion"in o&&(o.fechaReposicion=er(o.fechaReposicion,"")),Array.isArray(o.cuotas)&&(o.cuotas=o.cuotas.map(ET).filter(Boolean).slice(0,500)),o):null}function CT(i){const o={};let l=0;for(const[d,m]of Object.entries(i)){if(l>=vT)break;typeof d!="string"||d.length===0||d.length>hT||(o[d]=typeof m=="string"&&m.length<=10?m:"",l+=1)}return o}function xT(i){try{if(!qn(i))return i;const o={...i};if(Array.isArray(o.personas)&&(o.personas=o.personas.filter(qn).map(l=>{try{return yT(l)}catch{return l}}).slice(0,fT)),Array.isArray(o.actividadesPlan)&&(o.actividadesPlan=o.actividadesPlan.filter(qn).map(l=>{try{return MT(l)}catch{return l}}).filter(Boolean).slice(0,pT)),Array.isArray(o.reposiciones)&&(o.reposiciones=o.reposiciones.map(l=>{try{return NT(l)}catch{return null}}).filter(Boolean).slice(0,TT)),qn(o.roleData))try{o.roleData=CT(o.roleData)}catch{}if("reglas"in o)try{o.reglas=yi(qn(o.reglas)?o.reglas:{})}catch{}return o}catch{return i}}const xi="pnlq:state",Hs="pnlq:lastSavedAt",ST="pnlq:backup:v";function Dt(){try{if(typeof window>"u"||!window.localStorage)return null;const i="__pnlq_probe__";return window.localStorage.setItem(i,"1"),window.localStorage.removeItem(i),window.localStorage}catch{return null}}let Pt=null;function VT(){const i=Dt();if(!i)return 0;try{const o=i.getItem(xi);if(!o)return 0;const l=JSON.parse(o);return typeof(l==null?void 0:l.revision)=="number"?l.revision:0}catch{return 0}}function qs(){return Pt===null&&(Pt=VT()),Pt}function od(i){qs(),typeof i=="number"&&i>Pt&&(Pt=i)}function bT(){return qs(),Pt+=1,Pt}function _s(){const i=Rd();return i?i.state:null}function Rd(){const i=Dt();if(!i)return null;const o=i.getItem(xi);if(!o)return null;try{const l=JSON.parse(o);if(!l||typeof l!="object")return null;if(l.schemaVersion!==Fn){const d=`${ST}${l.schemaVersion??"unknown"}-${Date.now()}`;try{i.setItem(d,o)}catch{}return null}return qs(),{state:l.state??null,revision:typeof l.revision=="number"?l.revision:0,savedAt:l.savedAt??null}}catch{return null}}function AT(i,o){if(!i&&!o)return null;if(!i)return{...o,source:"indexeddb"};if(!o)return{...i,source:"localStorage"};const l=i.revision??0,d=o.revision??0;if(l!==d)return l>d?{...i,source:"localStorage"}:{...o,source:"indexeddb"};const m=i.savedAt?Date.parse(i.savedAt):NaN,p=o.savedAt?Date.parse(o.savedAt):NaN;return!Number.isNaN(m)&&!Number.isNaN(p)&&m!==p?m>p?{...i,source:"localStorage"}:{...o,source:"indexeddb"}:{...i,source:"localStorage"}}async function wT(){const i=await Xp(),o=await qp(),l=Rd(),d=AT(l,o);return d?(od((l==null?void 0:l.revision)??0),od((o==null?void 0:o.revision)??0),{state:d.state,source:d.source,migrated:i.migrated}):{state:null,source:null,migrated:i.migrated}}async function kT(i){const o=bT(),l=new Date().toISOString(),d=Dt();let m=!1;if(d)try{const P=JSON.stringify({schemaVersion:Fn,savedAt:l,revision:o,state:i});d.setItem(xi,P),d.setItem(Hs,l),m=!0}catch{m=!1}const p=await Wp(i,o);return{ok:m||p,ls:m,idb:p,revision:o}}async function jT(){const i=Dt();let o=!1;if(i)try{i.removeItem(xi),i.removeItem(Hs),o=!0}catch{}const l=await Zp().catch(()=>!1),d=await eT().catch(()=>!1),m=l||d;return o&&m&&(Pt=null),{ok:o&&m,ls:o,idb:m}}function _T(){const i=Dt();if(!i)return null;try{return i.getItem(Hs)}catch{return null}}function RT(i){return{schemaVersion:Fn,appName:"PNLQ — Gestión de Jornadas",unidad:"PNLQ-BTMM",areaConservacion:"ACC",exportadoEn:new Date().toISOString(),state:i}}function ah(i){try{const o=JSON.parse(i);return!o||typeof o!="object"?{ok:!1,reason:"JSON inválido"}:o.schemaVersion!==Fn?{ok:!1,reason:`Versión de esquema incompatible: encontrada v${o.schemaVersion??"?"} esperada v${Fn}`}:!o.state||typeof o.state!="object"?{ok:!1,reason:"Snapshot sin estado"}:{ok:!0,state:xT(o.state),exportadoEn:o.exportadoEn}}catch(o){return{ok:!1,reason:`JSON malformado: ${o.message}`}}}async function DT(){const i=!!Dt();let o=!1;if(typeof indexedDB<"u")try{o=!!await ca()}catch{o=!1}return o?{kind:"indexeddb",hasIDB:o,hasLS:i}:i?{kind:"localStorage",hasIDB:!1,hasLS:!0}:{kind:"none",hasIDB:!1,hasLS:!1}}function IT(){const i=typeof indexedDB<"u",o=!!Dt();return i?{kind:"indexeddb",hasIDB:i,hasLS:o,verificado:!1}:o?{kind:"localStorage",hasIDB:!1,hasLS:!0,verificado:!0}:{kind:"none",hasIDB:!1,hasLS:!1,verificado:!0}}function Dd(i,o){return new Date(i,o+1,0).getDate()}function rh(i,o,l){const d=i*12+o+l;return{year:Math.floor(d/12),month:(d%12+12)%12}}function On(i){return String(i).padStart(2,"0")}function Ws(i=new Date){return`${i.getFullYear()}-${On(i.getMonth()+1)}-${On(i.getDate())}`}function OT(i=new Date){return`${Ws(i)}_${On(i.getHours())}-${On(i.getMinutes())}-${On(i.getSeconds())}`}function FT(i,o,l){return`${i}-${On(o+1)}-${On(l)}`}function Wn(i){if(!i)return"—";const o=i.split("-");return`${o[2]}/${o[1]}/${o[0]}`}function zT(i,o=new Date(2026,4,19)){return i?Math.round((new Date(i+"T00:00:00")-o)/864e5):null}function QT(i,o,l=null){for(let d=1;d<=Dd(i,o);d++){const m=new Date(i,o,d).getDay();if(m>=1&&m<=5){if(!l)return d;const p=FT(i,o,d);if(!l.has(p))return d}}return 1}const Id=S.createContext(null),Rs=new Date,JT=Ws(Rs),Ds="limpiezaEnzoYSetDic2026",Is="actividadesEjemploJul2026",BT="2026-07-14",Mi="rolesFuenteJulAgo2026",gt={view:"dia",personas:Pi,month:Rs.getMonth(),year:Rs.getFullYear(),compact:!1,roleData:Us,actividadesPlan:bd,reposiciones:Yp,diaVista:JT,reglas:{...Ks},migraciones:{[Ds]:!0,[Is]:!0,[Mi]:js}};function Os(i){return i==="dashboard"?"dia":i}function Od(i){const o=(i==null?void 0:i.migraciones)||{},l=!!o[Ds],d=(Array.isArray(i==null?void 0:i.personas)?i.personas:[]).filter(Boolean),m=l?d:d.filter(C=>C.nombre!=="Enzo Martini"),p=new Map(m.map(C=>[C.nombre,C])),P=new Set(Pi.map(C=>C.nombre)),L=(i==null?void 0:i.roleData)||{},T=l?L:Object.fromEntries(Object.entries(L).filter(([C])=>!/^2026-(?:9|10|11|12)-/.test(C)&&!C.includes("-Enzo Martini-"))),k=[...Pi.map(C=>({...C,...p.get(C.nombre)||{}})),...m.filter(C=>C.nombre&&!P.has(C.nombre))];let A=Array.isArray(i==null?void 0:i.actividadesPlan)?i.actividadesPlan.filter(C=>C&&typeof C=="object"):gt.actividadesPlan;if(!o[Is]&&Array.isArray(i==null?void 0:i.actividadesPlan)){const C=new Set(A.map(I=>I.id)),w=bd.filter(I=>I.inicio>=BT&&!C.has(I.id));w.length&&(A=[...A,...w])}const N=Array.isArray(i==null?void 0:i.reposiciones)?i.reposiciones.filter(C=>C&&typeof C=="object"&&C.funcionario&&C.fecha):gt.reposiciones;return{...gt,...i,view:Os((i==null?void 0:i.view)??gt.view),personas:k,actividadesPlan:A,reposiciones:N,roleData:{...Us,...T},reglas:yi(i==null?void 0:i.reglas),migraciones:{...o,[Ds]:!0,[Is]:!0}}}function YT(){const i=_s();return i?Od(i):gt}function Hn(i,o){return typeof i=="function"?i(o):i}function UT(i,o){var l,d,m;switch(o.type){case"SET_VIEW":return{...i,view:Os(o.payload)};case"SET_MONTH":return{...i,month:Hn(o.payload,i.month)};case"SET_YEAR":return{...i,year:Hn(o.payload,i.year)};case"SET_PERIODO":return{...i,month:o.month,year:o.year};case"SET_COMPACT":return{...i,compact:Hn(o.payload,i.compact)};case"SET_DIA_VISTA":return{...i,diaVista:Hn(o.payload,i.diaVista)};case"SET_PERSONAS":return{...i,personas:Hn(o.payload,i.personas)};case"SET_ACTIVIDADES_PLAN":return{...i,actividadesPlan:Hn(o.payload,i.actividadesPlan)};case"SET_REPOSICIONES":return{...i,reposiciones:Hn(o.payload,i.reposiciones)};case"SET_ROLE_DATA":return{...i,roleData:Hn(o.payload,i.roleData)};case"SYNC_ROLES_FUENTE":return((l=i.migraciones)==null?void 0:l[Mi])===o.version?i:{...i,roleData:$p(i.roleData),migraciones:{...i.migraciones||{},[Mi]:o.version}};case"SET_REGLAS":{const p=Hn(o.payload,i.reglas);return{...i,reglas:yi(p)}}case"REPLACE_STATE":return{...gt,...o.payload,view:Os(((d=o.payload)==null?void 0:d.view)??gt.view),reglas:yi((m=o.payload)==null?void 0:m.reglas)};default:return i}}const GT=new Set(["view","compact","diaVista","month","year"]);function hi(i){const o={};for(const l of Object.keys(i))GT.has(l)||(o[l]=i[l]);return o}const KT=500;function $T({children:i}){const[o,l]=S.useReducer(UT,void 0,YT),[d,m]=S.useState(()=>_T()),[p,P]=S.useState(0),[L,T]=S.useState(()=>IT()),[k,A]=S.useState(!1),[N,C]=S.useState(!1),[w,I]=S.useState(null),b=S.useRef(null),U=S.useRef(!0),de=S.useRef(!1),ee=S.useRef(!1),pe=S.useRef(!1);S.useEffect(()=>{let v=!1;return DT().then(V=>{v||T(V)}),()=>{v=!0}},[]);const Z=S.useRef(o);S.useEffect(()=>{Z.current=o});const H=S.useRef(JSON.stringify(hi(o)));S.useEffect(()=>{let v=!1;return(async()=>{try{const{state:V,source:ne,migrated:re}=await wT();if(v)return;if(re&&A(!0),V&&ne==="indexeddb"){const ie=Od(V),le=JSON.stringify(hi(ie)),ge=H.current;if(JSON.stringify(hi(Z.current))!==ge)return;ge!==le&&l({type:"REPLACE_STATE",payload:ie})}}catch(V){console.error("No fue posible completar la hidratación local",V)}finally{v||(de.current=!0,C(!0))}})(),()=>{v=!0}},[]),S.useEffect(()=>{var V;!N||((V=Z.current.migraciones)==null?void 0:V[Mi])===js||l({type:"SYNC_ROLES_FUENTE",version:js})},[N]);const oe=S.useRef(null);oe.current=async function(){if(ee.current){pe.current=!0;return}ee.current=!0,pe.current=!1;try{const V=await kT(hi(Z.current));I(V),V.ls&&m(new Date().toISOString()),V.ok&&P(0)}finally{ee.current=!1,pe.current&&(pe.current=!1,oe.current())}},S.useEffect(()=>{if(U.current){U.current=!1;return}return P(v=>v+1),b.current&&window.clearTimeout(b.current),b.current=window.setTimeout(()=>{b.current=null,oe.current()},KT),()=>{b.current&&window.clearTimeout(b.current)}},[o]),S.useEffect(()=>{const v=()=>{b.current&&(window.clearTimeout(b.current),b.current=null,oe.current())},V=()=>{document.visibilityState==="hidden"&&v()};return window.addEventListener("pagehide",v),document.addEventListener("visibilitychange",V),()=>{window.removeEventListener("pagehide",v),document.removeEventListener("visibilitychange",V)}},[]);const Ee=S.useCallback(v=>l({type:"SET_VIEW",payload:v}),[]),Ve=S.useCallback(v=>l({type:"SET_MONTH",payload:v}),[]),be=S.useCallback(v=>l({type:"SET_YEAR",payload:v}),[]),he=S.useCallback(v=>l({type:"SET_COMPACT",payload:v}),[]),Ce=S.useCallback(v=>l({type:"SET_DIA_VISTA",payload:v}),[]),Le=S.useCallback(v=>l({type:"SET_PERSONAS",payload:v}),[]),ue=S.useCallback(v=>l({type:"SET_ACTIVIDADES_PLAN",payload:v}),[]),Te=S.useCallback(v=>l({type:"SET_REPOSICIONES",payload:v}),[]),me=S.useCallback(v=>l({type:"SET_ROLE_DATA",payload:v}),[]),fe=S.useCallback(v=>l({type:"SET_REGLAS",payload:v}),[]),se=S.useCallback(v=>{l({type:"REPLACE_STATE",payload:v})},[]),z=S.useCallback(()=>{l({type:"SET_REGLAS",payload:{...Ks}})},[]),$=S.useCallback(async()=>{b.current&&(window.clearTimeout(b.current),b.current=null);const v=await jT();return l({type:"REPLACE_STATE",payload:gt}),m(null),I(null),P(0),v},[]),Q=S.useMemo(()=>({...o,setView:Ee,setMonth:Ve,setYear:be,setCompact:he,setDiaVista:Ce,setPersonas:Le,setActividadesPlan:ue,setReposiciones:Te,setRoleData:me,setReglas:fe,resetReglas:z,replaceState:se,resetToSeed:$,lastSavedAt:d,pendingChanges:p,lastSaveResult:w,durableSaveFailed:w?!w.idb:!1,schemaVersion:Fn,storageBackend:L,migracionLs:k,dispatch:l}),[o,Ee,Ve,be,he,Ce,Le,ue,Te,me,fe,z,se,$,d,p,w,L,k]);return u.jsx(Id.Provider,{value:Q,children:i})}function rr(){const i=S.useContext(Id);if(!i)throw new Error("useApp must be used within an <AppProvider>");return i}const HT=new Date(2026,4,19);function qT(i,o){const l=Math.round((Number(i)||0)*100)/100;if(l<=0)return"0 h";const d=l/o;return Number.isInteger(d)?d===1?"1 día":`${d} días`:l===o/2?"medio día":`${l} h`}function WT(i,o={}){const{actividadesPlan:l=[],reposiciones:d=[],hoy:m=HT,flags:p={}}=o,{alertaInactivoConActividad:P=!0,alertaIncapacitadoConActividad:L=!0,alertaAcumulativaSinModalidad:T=!0,alertaReposicionPendiente:k=!0,horasJornada:A=8}=p,N=[],C=ZT(m);if(i.forEach(w=>{if(w.disponibilidad){const I=zT(w.vencimiento,m);I!==null&&I<0?N.push({t:"danger",icon:"🚨",msg:`Disponibilidad vencida — ${w.nombre}`,sub:`${w.contrato} · venció ${Wn(w.vencimiento)} (hace ${Math.abs(I)} día${Math.abs(I)!==1?"s":""}). Requiere revisión administrativa.`}):I!==null&&I===0?N.push({t:"danger",icon:"🚨",msg:`Disponibilidad vence HOY — ${w.nombre}`,sub:`${w.contrato} · vencimiento ${Wn(w.vencimiento)}. Coordinar renovación o suspensión administrativa.`}):I!==null&&I>0&&I<=60&&N.push({t:"warn",icon:"⚠️",msg:`Disponibilidad por vencer — ${w.nombre}`,sub:`${w.contrato} · vence ${Wn(w.vencimiento)} (en ${I} día${I!==1?"s":""}). Requiere revisión administrativa.`})}if(w.jornada==="Acumulativa"&&!w.resolucion&&!w.ong&&N.push({t:"warn",icon:"📄",msg:`Sin resolución acumulativa — ${w.nombre}`,sub:"Dato pendiente: no automatizar efectos hasta confirmar respaldo interno."}),T&&w.jornada==="Acumulativa"&&!w.modalidad&&N.push({t:"warn",icon:"📄",msg:`Acumulativa sin modalidad definida — ${w.nombre}`,sub:"Definir modalidad (10x5, 12x6, 14x7, 16x8, 20x10) para calcular roles correctamente."}),w.estado==="Incapacitado"&&w.disponibilidad&&N.push({t:"danger",icon:"🩺",msg:`Revisar disponibilidad — ${w.nombre}`,sub:"Funcionario incapacitado con disponibilidad activa. Verificar criterio RH."}),L&&w.estado==="Incapacitado"){const I=sd(l,w.nombre,C);I.length&&N.push({t:"danger",icon:"🩺",msg:`Incapacitado con actividad planificada — ${w.nombre}`,sub:`${I.length} actividad${I.length!==1?"es":""} a partir de ${Wn(C)}. Coordinar reasignación.`})}if(P&&w.estado==="Inactivo"){const I=sd(l,w.nombre,C);I.length&&N.push({t:"warn",icon:"⚠️",msg:`Inactivo con actividad planificada — ${w.nombre}`,sub:`${I.length} actividad${I.length!==1?"es":""} a partir de ${Wn(C)}. Verificar si debe reactivarse o reasignarse.`})}}),k&&d.length)for(const w of mT(d,A))w.pendientes!==0&&N.push({t:"warn",icon:"⟳",msg:`Tiempo por reponer — ${w.funcionario}`,sub:`${w.pendientes} registro${w.pendientes!==1?"s":""} de trabajo fuera de rol sin reponer · saldo a favor ${qT(w.saldoHoras,A)}. Coordinar la reposición del tiempo.`});return N.length?N:[{t:"ok",icon:"✅",msg:"Sin alertas críticas",sub:"No se observan vencimientos o bloqueos críticos en los datos visibles."}]}function sd(i,o,l){return(i||[]).filter(d=>!d||!d.inicio||(d.fin||d.inicio)<l?!1:(d.funcionarios||[]).includes(o))}function ZT(i){if(typeof i=="string")return i;const o=l=>String(l).padStart(2,"0");return`${i.getFullYear()}-${o(i.getMonth()+1)}-${o(i.getDate())}`}const XT={app:{name:"PNLQ — Gestión de Jornadas Laborales",short:"PNLQ",estado:"Activo",reglaDura:"Regla dura: el sistema registra y alerta; no genera pago, reposición, suspensión o derecho automático.",sinacCR:"SINAC · Costa Rica",accNombre:"Área de Conservación Central",bloqueLinea1:"Bloque Tapantí",bloqueLinea2:"Macizo de la Muerte",bloqueSub:"Gestión de jornadas laborales",perfilNombre:"P. Sánchez N.",perfilCargo:"Guardaparques · ACC",titulo:"Gestión de jornadas laborales"},sidebar:{grupoPrincipal:"Principal",grupoJornadas:"Jornadas",grupoControl:"Control"},view:{dia:"Día",funcionarios:"Funcionarios",roles:"Roles",planificacion:"Planificación general",planFuncionario:"Planificación/Funcionario",adelantos:"Adelanto de viáticos",reposicion:"Reposición de tiempo",disponibilidad:"Disponibilidad",alertas:"Alertas",datos:"Datos · respaldo",configuracion:"Configuración"},topbar:{periodo:"Periodo",mesAnterior:"Mes anterior",mesSiguiente:"Mes siguiente",mes:"Mes",anio:"Año",vistaCompacta:"Vista compacta",vistaAmplia:"Vista amplia",cargando:"Cargando vista…",hoy:"Hoy",tema:"Tema y contraste",previewMobile:"Abrir simulador temporal de vista móvil",previewMobileCorto:"Vista móvil",previewTitle:"Vista móvil temporal",previewDesc:"Simulación de un teléfono genérico de {ancho} × {alto} px. Puede usar la aplicación dentro del marco.",previewFrameTitle:"Aplicación en tamaño de teléfono móvil",previewOrientation:"Orientación del teléfono simulado",previewVertical:"Vertical",previewHorizontal:"Horizontal"},bottomNav:{inicio:"Inicio",personal:"Personal",plan:"Plan",alertas:"Alertas",dia:"Día",roles:"Roles",planFunc:"Plan/Func.",viaticos:"Viáticos",reposicion:"Reposición",disponib:"Disponib.",datos:"Datos",config:"Config.",mas:"Más",masTitulo:"Más módulos",masSub:"Herramientas y módulos secundarios",masAria:"Más opciones",navAria:"Navegación principal",alertasAria:"{n} alertas pendientes"},theme:{light:"Claro",dark:"Oscuro",hc:"Alto contraste",cambiarOscuro:"Cambiar a oscuro",cambiarHC:"Cambiar a alto contraste",cambiarClaro:"Cambiar a claro"},cobertura:{titulo:"Cobertura programada",programados:"Programados en actividades",enTurnoRol:"En turno según rol",atencionVisit:"Atención rutinaria visitantes",alertaSinAtencion:"ALERTA: debe haber al menos una persona asignada.",asignadosVisit:"Asignados a atención rutinaria de visitantes",enTurnoSegunRol:"Funcionarios en turno según rol",sinTurno:"No hay funcionarios en turno según rol para este puesto operativo y día.",programadosLugar:"Funcionarios programados en actividades con este lugar",sinProgramados:"No hay funcionarios programados en actividades con este puesto operativo como lugar para este día.",sinActividad:"Sin actividad programada para este día.",rolPrefix:"Rol: {rol} · {puesto}",agregarActividad:"Agregar actividad",editarActividad:"Editar actividad"},kpi:{coberturaCritica:"Cobertura crítica",coberturaCriticaSub:"días sin Visit. asignada",sinActividad:"Sin actividad",sinActividadSub:"en turno hoy sin planificar",porVencer:"Por vencer",porVencerSub:"disponibilidades ≤30 días",personalActivo:"Personal activo",personalActivoSub:"/ {total} total",reposicionPendiente:"Tiempo por reponer",reposicionPendienteSub:"funcionarios con tiempo pendiente",enTurno:"En turno",conActividad:"Con actividad",fueraDeTurno:"Fuera de turno",conViatico:"Con viático"},dia:{anterior:"Anterior",siguiente:"Siguiente",diaAnterior:"Día anterior",diaSiguiente:"Día siguiente",seleccionarFecha:"Seleccionar fecha",pistaSwipe:"Deslice ←/→ para cambiar día",porPuesto:"Por puesto operativo",resumenTitulo:"Resumen del día",resumenEnTurno:"En turno",resumenSinActividad:"Sin actividad",resumenAlertas:"Alertas",resumenPistaSinActividad:"Hay personas en turno sin actividad. Baje a la sección «En turno · sin actividad» para asignar.",ayudaAria:"Cómo usar la vista Día",th:{puesto:"Puesto",fuera:"Fuera",enTurno:"En turno",conActividad:"Con activ.",sinActividad:"Sin activ.",total:"Total"},actividadesTitulo:"Actividades planificadas ({n})",actividadesTituloCorto:"Actividades · {n}",filtroActividades:{mostrar:"Mostrar actividades",aria:"Filtrar actividades del día",general:"General",funcionario:"Funcionario",puesto:"Puesto",seleccionarFuncionario:"Funcionario",seleccionarPuesto:"Puesto operativo",resultados:"Mostrando {n} de {total} actividades"},nueva:"+ Nueva",nuevaCorta:"Nueva",sinActividades:"Sin actividades planificadas para este día",enTurnoConActTitulo:"En turno · con actividad ({n})",enTurnoConActVacio:"Ningún funcionario en turno tiene actividad programada",enTurnoSinActTitulo:"En turno · sin actividad ({n})",enTurnoSinActVacio:"Todos los funcionarios en turno tienen actividad asignada",asignar:"+ Asignar",fueraDeTurnoTitulo:"Fuera de turno ({n})",fueraDeTurnoVacio:"Todos los funcionarios activos están en turno",conViaticoTitulo:"Con viático este día ({n})",nFuncionarios:"{n} funcionario{plural}",viaticoBadge:"💵 Viático",conflictosBadge:"⚠ {n} conflicto{plural}",sinLugar:"Sin lugar"},help:{dia:{titulo:"Cómo usar la vista Día",lineas:["Arriba elige la fecha con las flechas o el calendario.","Las tres cifras grandes muestran quién está en turno, quién falta actividad y cuántas alertas hay.","Toque «Alertas» en la barra inferior o la cifra de alertas para ver los avisos.","Use «+ Nueva» o el botón redondo para registrar una actividad.","Los cambios se guardan solos en este teléfono (vea el mensaje «Guardado»)."]}},funcionarios:{titulo:"Funcionarios",agregar:"Agregar funcionario",agregarCorto:"Agregar",buscarPlaceholder:"Buscar por nombre, cédula, puesto u observación…",verFiltros:"Filtros y orden",filtroTodos:"Todos",filtroGuardas:"Guardaparques",filtroDisp:"Con disponibilidad",filtroAcum:"Acumulativa",filtroOng:"ONG-Invest-Volunt",filtroSinRes:"Sin resolución",vistaTabla:"Tabla",vistaTarjetas:"Tarjetas",vistaAria:"Vista",sinResultadosTitulo:"Sin resultados",sinResultadosDesc:"Ajuste la búsqueda o los filtros para encontrar funcionarios.",th:{funcionario:"Funcionario",cargo:"Cargo / puesto operativo",jornada:"Jornada",disponibilidad:"Disponibilidad",atributos:"Atributos",estado:"Estado",acciones:"Acciones"},sinPuesto:"Sin puesto operativo",sinResolucion:"🔵 Sin resolución",si:"Sí",no:"No",leyendaPolicia:"🛡️ Autoridad de policía",leyendaBrigada:"🔥 Brigada forestal",leyendaPendiente:"🔵 Dato operativo por completar",eliminarTitulo:"Eliminar funcionario",eliminarConfirma:"Se eliminará el registro de {nombre} en esta propuesta visual.",ordenar:"Ordenar",atributoPolicia:"Policía",atributoBrigada:"Brigada",card:{observaciones:"Observaciones",cargo:"Cargo",jornada:"Jornada",disponibilidad:"Disponibilidad",atributos:"Atributos",venceCorto:"Vence {fecha}"}},modalFuncionario:{editar:"Editar funcionario",agregar:"Agregar funcionario",sec:{identificacion:"Identificación",puesto:"Puesto y condición",jornada:"Jornada y modalidad",contratacion:"Contratación y fechas",atributos:"Atributos"},nombre:"Nombre",cedula:"Cédula",correo:"Correo",cargo:"Cargo institucional",puesto:"Puesto operativo",condicion:"Condición",estado:"Estado",jornada:"Jornada",modalidad:"Modalidad",resolucion:"Resolución",contrato:"Contrato",vencimiento:"Vencimiento",ingreso:"Ingreso",obs:"Observaciones",attr:{disponibilidad:"Disponibilidad",policia:"Autoridad policía",brigada:"Brigada",ong:"ONG-Invest-Volunt"}},modalActividad:{titulo:"Actividad",editar:"Editar actividad",agregar:"Agregar actividad",sub:"Registre actividad, periodo, lugar, funcionarios participantes y necesidad de adelanto de viático.",fechaInicio:"Fecha inicio",fechaFinal:"Fecha final",unDia:"Actividad de un solo día",requiereViatico:"Requiere tramitar adelanto de viático",lugar:"Lugar",placeholderTitulo:"O escriba otra actividad: patrullaje, inspección, reunión, mantenimiento...",placeholderLugar:"Escriba otro lugar: sector, sendero, oficina, comunidad...",placeholderObs:"Detalle operativo, coordinación, expediente, requerimientos, vehículo, equipo, etc.",otra:"Otra actividad",otro:"Otro",participantes:"Funcionarios participantes",seleccionados:"{n} seleccionados",avisoTraslape:"Funcionario con actividad ya planificada",agregarAunAsi:"Agregar de todos modos",modificarActividad:"Modificar actividad",obs:"Observaciones",guardarActividad:"Guardar actividad",diaLibre:"Día libre/vacaciones",saldoFavor:"Saldo a favor",saldoFavorMonto:"Saldo a favor: {saldo}",soloSaldo:"Solo con saldo a favor",libresAsignados:"Asignados en día libre/vacaciones",resolver:"Resolver"},asignacionLibre:{titulo:"Funcionario fuera de turno",sub:"{funcionario} figura como “{rol}” el {fecha}. ¿Cómo desea proceder?",modificarRol:"Modificar rol",modificarRolDesc:"Marcar ese día como turno (T) en el rol y agregarlo a la actividad.",reposicion:"Registrar reposición pendiente",reposicionDesc:"Deja el rol igual y registra el tiempo trabajado para reponérselo después.",reponer:"Reponer tiempo (saldo a favor: {saldo})",reponerDesc:"Usa este día libre para reponer su saldo pendiente. No se agrega a la actividad.",editarFecha:"Editar la fecha de la actividad",editarFechaDesc:"No lo agrega; vuelve al formulario para cambiar la fecha de la actividad."},roles:{titulo:"Distribución de roles",vistaMensualLineal:"Vista mensual lineal",filtros:"Filtros",verTodos:"Ver todos",limpiarFiltros:"Limpiar",todos:"Todos",filtrarPorPuesto:"Filtrar por puesto",filtrosFuncionario:"Filtrar por funcionario",resumenPuestosTodos:"Puestos y funcionarios: todos ({n})",resumenPuestosParcial:"Puestos y funcionarios: {n} de {total}",buscarFuncionario:"Buscar funcionario…",limpiarBusqueda:"Limpiar búsqueda",solo:"Solo",contraerPuesto:"Contraer lista de funcionarios",expandirPuesto:"Expandir lista de funcionarios",sinResultadosBusqueda:"Sin coincidencias con la búsqueda.",resumenFiltro:"{n} funcionarios visibles",desplazarDias:"Desplazar días",semanaAnterior:"Semana anterior",semanaSiguiente:"Semana siguiente",semana7:"7 días",centrarHoy:"Centrar hoy",irAFecha:"Ir a fecha",irAFechaLabel:"Buscar por fecha",todosLosPuestos:"Todos los puestos",sinFuncionariosFiltro:"No hay funcionarios visibles con el filtro actual.",leyenda:{turno:"T1 Turno",libre:"L1 Libre",vacaciones:"V1 Vacas",incapacidad:"I1 Incapaci",otro:"O1 Otro"},cantidadEnTurno:"EN TURNO",resumenGeneral:"Resumen · todos los puestos",resumenCorto:"Resumen",resumenEnTurno:"En turno",resumenLibres:"Libres",resumenVacaciones:"Vacaciones",resumenIncapacidad:"Incapacidad",resumenOtros:"Otros",editarTipoRol:"Tipo de rol desde 1er día laboral",aplicar:"Aplicar",aplicarPatronAbrir:"Aplicar…",titleConflicto:"Clic para resolver: rol vs actividad planificada",titleEditar:"Cambiar marca del día",titleSinEdicion:"Active edición del funcionario para modificar",initRing:"INICIO",multi:{activar:"Selección múltiple",seleccionados:"{n} día(s) seleccionado(s)",confirmarTitulo:"Aplicar código a varios días",confirmarDesc:"Se aplicará {cat} a {n} selección(es) y se renumerarán las filas afectadas.",nota:"Revise la cantidad antes de confirmar. Puede deshacer el último cambio mientras permanezca en esta vista.",deshacer:"Deshacer último cambio"},aplicarPatron:{titulo:"Aplicar patrón de rol",descripcion:"Genera el tipo de día (turno/libre) de {persona} según la modalidad, desde una fecha inicial hasta un último día. El rango puede abarcar varios meses.",modalidad:"Modalidad",desde:"A partir de",hasta:"Último día",hastaAyuda:"Se llenará hasta esta fecha, inclusive.",botonUltimoProgramado:"Desde el último día con rol programado",botonUltimoProgramadoAyuda:"Coloca «A partir de» el día siguiente al último día ya programado, para continuar sin sobrescribir.",sinProgramado:"Aún no hay días con rol programado para esta persona.",fase:"¿Cómo debe empezar la rotación?",faseReiniciar:"Reiniciar en T1",faseReiniciarAyuda:"La fecha «A partir de» se vuelve el nuevo inicio: ese día es T1 y la rotación avanza desde ahí. Sobrescribe lo que haya en el rango.",faseContinuar:"Continuar la rotación anterior",faseContinuarAyuda:"No reinicia: sigue la rotación del día anterior. Si venía en {codigoPrevio}, ese día continúa en {codigoSiguiente}.",faseContinuarSinAncla:"Para continuar, el día anterior a «A partir de» debe tener un turno o libre. Hoy no lo tiene; use «Reiniciar en T1».",faseAdministrativo:"El horario administrativo se llena por día de la semana (L–V en turno, S/D libres); no usa rotación T/L.",resumen:"Se llenarán {dias} día(s), del {desde} al {hasta}.",sobrescribe:"Se sobrescribirán {n} día(s) que ya tenían rol programado en el rango.",errorRango:"«A partir de» debe ser igual o anterior a «Último día».",errorMaxDias:"El rango es muy largo (máx. {max} días). Acórtelo e intente de nuevo.",errorSinFechas:"Elija la fecha inicial y el último día.",confirmar:"Aplicar patrón",cancelar:"Cancelar"}},menuCelda:{titulo:"Editar día {dia} · {persona}",sub:"Seleccione únicamente la categoría. El número consecutivo se recalcula automáticamente en toda la fila.",primerDia:"Primer día laboral del mes.",primerDiaSub:"La modalidad del funcionario define el reinicio de los consecutivos de turno y libre.",cat:{T:"Turno",L:"Libre",V:"Vacaciones",I:"Incapacidad",O:"Otro"},sub2:"Se mostrará como {cat}1, {cat}2...",limpiar:"Limpiar celda"},conflicto:{titulo1:"Resolver incoherencia · paso 1 de 2",titulo2:"Confirmar acción · paso 2 de 2",sub1:"Seleccione cuál registro corregir. La herramienta solo actualiza el dato visible: no genera pagos ni decisiones administrativas.",sub2Rol:"Se modificará el rol de este día y se recalcularán los consecutivos T/L/V/I/O de toda la fila respetando la modalidad.",sub2Act:"Se abrirá el listado de {n} actividad{plural} de este día para que pueda quitar al funcionario o ajustar la planificación.",detalle:"{persona} · día {dia}",detalleSub:"Rol {valor} (no en turno) con {n} actividad{plural} planificada{plural}.",cambiarRol:"Modificar rol del día",cambiarRolSub:"Cambiar la categoría de turno para este funcionario.",cambiarActividad:"Modificar actividad{plural}",cambiarActividadSub:"Ver, editar o quitar al funcionario de las actividades del día.",cambiarReposicion:"Registrar reposición pendiente",cambiarReposicionSub:"Deja el rol y la actividad igual; registra el tiempo trabajado para reponérselo después.",reponer:"Reponer tiempo (saldo a favor: {saldo})",reponerSub:"Usa este día para reponer el saldo pendiente del funcionario.",sub2Reposicion:"Se registrará el tiempo trabajado fuera de rol como reposición pendiente; no modifica el rol ni la actividad.",sub2Reponer:"Se aplicará este día al saldo pendiente del funcionario (reposición); no modifica el rol ni la actividad.",despuesReposicion:"queda un registro de reposición pendiente, enlazado por folio al día trabajado.",despuesReponer:"se descuenta del saldo a favor del funcionario.",resumen:"Resumen del impacto",antes:"Antes:",despues:"Después:",antesValor:"rol {valor} · {n} actividad{plural}.",despuesRol:"elegirá una nueva categoría (T/L/V/I/O) y se renumerará toda la fila.",despuesAct:"podrá quitar al funcionario o editar/eliminar la actividad.",notaNoEjecuta:"La herramienta solo registra; no genera pago, reposición ni derecho automático.",volver:"Volver",continuar:"Continuar"},actividadesDia:{titulo:"Actividades · {funcionario}",sub:"{fecha} · {n} actividad{plural} planificada{plural}",vacia:"Ya no hay actividades de {funcionario} en este día.",quitarDe:"Quitar a {nombre}",editar:"Editar actividad",eliminar:"Eliminar",eliminarConfirma:"¿Eliminar esta actividad?",eliminarSub:"Desaparece para todos los funcionarios asignados.",confirmar:"Confirmar"},modificarRol:{titulo:"Modificar rol",sub:"{funcionario} · {fecha} · rol actual: {rol}",cat:{T:"Turno",L:"Libre",V:"Vacaciones",I:"Incapacidad",O:"Otro"},catSub:"Recalcula consecutivos de la fila",limpiar:"Limpiar rol del día"},asignarActividad:{titulo:"Asignar actividad",sub:"{funcionario} · {fecha}",crear:"Crear actividad nueva para este funcionario",agregar:"Agregar a actividad existente del mismo día",sinExistentes:"No hay actividades existentes ese día para otros funcionarios."},planificacion:{titulo:"Planificación general — {mes} {anio}",agregar:"+ Agregar actividad",vistaAgenda:"Agenda",vistaCuadricula:"Cuadrícula",vistaAria:"Modo de vista del calendario",agendaVacia:"Sin actividades",agregarEnDia:"Agregar actividad el día {dia}",verLeyenda:"Ver leyenda de colores",buscarPlaceholder:"Buscar actividad, lugar o persona",buscarAria:"Buscar en planificación",filtros:"Filtros",rangoAria:"Rango de días visible",rangoHoy:"Hoy",rangoProximos7:"Próximos 7 días",rangoActividades:"Con actividades",rangoConflictos:"Con conflictos",rangoSinAsignar:"Sin asignar",rangoMes:"Mes completo",irHoy:"Ir a Hoy",sinCoincidencias:"No hay días que coincidan con estos filtros.",editarActividad:"Editar actividad",filtrosTitulo:"Filtros de planificación",filtrosDesc:"Combina filtros para reducir la agenda.",filtroPersona:"Persona",filtroTodas:"Todas",filtroUbicacion:"Ubicación",filtroViatico:"Viático",viaticoTodos:"Todos",viaticoSi:"Con viático",viaticoNo:"Sin viático",limpiar:"Limpiar",verResultados:"Ver resultados",leyendaProgramada:"Actividad programada",leyendaViatico:"Requiere adelanto de viático",leyendaFinde:"Fin de semana",leyendaTurno:"👥 = en turno",sinFuncionarios:"Sin funcionarios",masFuncionarios:"+{n}",titleDetalleDia:"Ver detalle del día",titleTurno:"{n} funcionarios en turno",titleActs:"{n} actividades",actsBadge:"{n} act.",viaticoTag:"VIÁTICO",rolBadge:"⚠ ROL: {nombres}"},planFuncionario:{titulo:"Planificación/Funcionario — {mes} {anio}",expandir:"Expandir",colapsar:"Colapsar",leyendaTurnoAct:"Turno con actividad",leyendaFaltaAct:"Falta asignar actividad",leyendaConflicto:"Actividad no coincide con rol",diasVisibles:"{n} días visibles",actividades:"{n} actividades",sinAsignar:"{n} sin asignar",conflictos:"{n} conflictos",ocultar:"Ocultar",ver:"Ver",faltaAsignar:"Falta asignar actividad",sinLugar:"Sin lugar",noCoincideRol:"NO COINCIDE CON ROL",modificarActividad:"Modificar actividad",modificarRol:"Modificar rol",asignar:"Asignar",nueva:"Nueva"},viaticos:{titulo:"Adelanto de viáticos — actividades de {nombreMes}",porFuncionario:"Por funcionario",porActividad:"Por actividad",plazoAbierto:"Plazo abierto.",plazoAbiertoSub:"Este listado corresponde al mes siguiente y puede usarse para tramitar adelantos hasta el día {dia} del mes anterior.",plazoCerrado:"Clausurado el tiempo de trámite de adelantos del próximo mes.",plazoCerradoSub:"El listado queda disponible para consulta, pero el plazo ordinario de trámite venció el día {dia} del mes anterior.",pie:"Mes a tramitar: {nombreMes}. Corte administrativo: día {dia} del mes {referencia}.",referenciaAnterior:"anterior",referenciaEnCurso:"en curso",sinActividadesTitulo:"Sin actividades con viático para el próximo mes",sinActividadesDesc:"Aún no hay actividades de {nombreMes} marcadas como “requiere tramitar adelanto de viático”. Vaya a Planificación general o Plan/Funcionario para asignarlas.",ocultoTitulo:"Listado oculto tras el cierre",ocultoDesc:"Según la configuración administrativa, el listado se oculta cuando el plazo (día {dia}) ya venció. Puede reactivar la consulta en Configuración → Viáticos.",nFuncionarios:"{n} funcionarios"},reposicion:{titulo:"Reposición de tiempo trabajado",subtitulo:"Registro de jornadas que la administración requirió trabajar a un funcionario en día libre, fuera de turno, feriado o similar (emergencias, incendios, atención de denuncias, actividades especiales, etc.) para llevar el control y reponerle el tiempo. Puede ser por horas, medio día o día entero.",acercaDe:"Acerca de esta herramienta",controlInterno:"Control interno",agregar:"Registrar tiempo",agregarCorto:"Registrar",filtroTodos:"Todos",filtroPendientes:"Pendientes",filtroRepuestos:"Repuestos",horasN:"{n} h",tabsAria:"Vistas de reposición",tabRegistros:"Registros",tabHistorial:"Historial por funcionario",reponer:"Reponer",saldoCorto:"Saldo pendiente",ultimaReposicion:"Última reposición",masAcciones:"Más acciones del registro",buscar:"Buscar por funcionario, folio, motivo u observación",filtros:"Filtros",filtrosAvanzados:"Filtros de reposición",limpiarFiltros:"Limpiar filtros",todosFuncionarios:"Todos los funcionarios",todosTipos:"Todos los tipos",periodo:"Periodo",soloObservaciones:"Solo registros con observaciones",saldoLabel:"Saldo: {saldo}",estado:{Pendiente:"Pendiente",Parcial:"Parcial",Repuesto:"Repuesto"},resumen:{total:"Registros",pendientes:"Pendientes de reponer",repuestos:"Repuestos",saldo:"Saldo a favor: {saldo}",parciales:"{n} parcial(es)",desglose:"{dias} día(s) · {medios} medio(s) día(s) · {horas} h"},th:{folio:"Folio",funcionario:"Funcionario",fecha:"Fecha trabajada",tipoDia:"Tipo de día",motivo:"Motivo",tiempo:"Tiempo",estado:"Estado",acciones:"Acciones"},magnitudCorta:{diaEntero:"día completo",medioDia:"medio día"},marca:{trabajadaTitulo:"{folio} · Trabajó día {tipoDia} ({magnitud}) · {estado}",reposicionTitulo:"{folio} · Día de reposición del tiempo trabajado el {fecha}",reposicionDe:"reposición del {fecha}"},historial:{vacioTitulo:"Sin historial",vacioDesc:"Aún no hay registros de reposición para mostrar por funcionario.",veces:"{n} registro(s)",pendientesN:"{n} pendiente(s)",repuestosN:"{n} repuesto(s)",saldoFavor:"Saldo a favor: {saldo}",cuota:"Reposición aplicada: {fecha} · {cantidad}"},marcarRepuesto:"Marcar repuesto",reabrir:"Reabrir",repuestoEl:"Repuesto el {fecha}",sinRegistrosTitulo:"Sin registros de reposición",sinRegistrosDesc:"Use “Registrar tiempo” para anotar una jornada trabajada en día libre, feriado o fuera de turno que deba reponerse al funcionario.",sinResultadosTitulo:"Sin resultados",sinResultadosDesc:"Ajuste el filtro para ver los registros de reposición.",nota:"La herramienta solo registra y lleva el control; la reposición efectiva del tiempo la autoriza la administración según la normativa vigente.",eliminarTitulo:"Eliminar registro",eliminarConfirma:"Se eliminará este registro de reposición de tiempo. Esta acción no se puede deshacer."},modalReposicion:{editar:"Editar registro de reposición",agregar:"Registrar tiempo a reponer",sub:"Documente la jornada trabajada por requerimiento de la administración para llevar el control y reponer el tiempo.",funcionario:"Funcionario",seleccioneFuncionario:"Seleccione un funcionario…",otrosFuncionarios:"Otros",fecha:"Fecha trabajada",tipoDia:"Tipo de día",motivo:"Motivo",motivoDetalle:"Detalle del motivo",motivoDetallePlaceholder:"Expediente, sector, descripción breve de la situación…",magnitud:"Tiempo trabajado",magnitudDiaEntero:"Día entero",magnitudMedioDia:"Medio día",magnitudHoras:"Por horas",estadoPendiente:"Pendiente",estadoRepuesto:"Repuesto",reposiciones:"Reposiciones registradas",sinCuotas:"Sin reposiciones registradas. Use “Reponer” en la lista para registrar tiempo (total, medio día u horas).",cuotasNota:"Las reposiciones se registran desde la acción “Reponer” de cada registro; aquí solo se consultan o se corrigen.",obs:"Observaciones",obsPlaceholder:"Coordinación con la administración, acuerdos, equipo, vehículo, etc.",guardar:"Guardar registro"},reponer:{titulo:"Reponer tiempo",saldoActual:"Saldo actual",saldoDespues:"Saldo después",cuanto:"¿Cuánto se repone?",fecha:"Fecha de reposición",excede:"La cantidad supera el saldo pendiente; se registrará hasta saldar el tiempo.",registrar:"Registrar reposición"},disponibilidad:{activosTitulo:"Contratos activos — disponibilidad",sinActivosTitulo:"Sin disponibilidad asignada",sinContrato:"Sin contrato",nDias:"{n} días",controlNota:"Control: la herramienta alerta; no ejecuta suspensiones automáticamente."},alertas:{requiereAtencion:"Requiere atención · {n}",sinCriticas:"Sin alertas críticas",sinCriticasSub:"No se observan vencimientos o bloqueos críticos en los datos visibles.",titulo:"Alertas del sistema ({n})",requiereRevision:"Requiere revisión",semaforoTitulo:"Semáforo normativo",semaforo:{verde:"Verificado",amarillo:"Confirmación interna",naranja:"Criterio RH/Jurídico",rojo:"No automatizar",azul:"Dato pendiente"},venceHoy:"Disponibilidad vence HOY — {nombre}",vencida:"Disponibilidad vencida — {nombre}",porVencer:"Disponibilidad por vencer — {nombre}",sinResolucion:"Sin resolución acumulativa — {nombre}",sinModalidad:"Acumulativa sin modalidad definida — {nombre}",incapaConDisp:"Revisar disponibilidad — {nombre}",incapaConActividad:"Incapacitado con actividad planificada — {nombre}",inactivoConActividad:"Inactivo con actividad planificada — {nombre}",reposicionPendiente:"Tiempo por reponer — {nombre}"},datos:{titulo:"Datos · respaldo local",esquema:"Esquema v{n}",estadoOk:"Última copia local guardada el {fecha}",estadoPendiente:"{n} cambio{plural} pendiente{plural} de guardar (debounce 500 ms)",estadoVacio:"Sin copia local todavía: los cambios se guardarán automáticamente al editar.",estadoNota:"La copia vive en el navegador (localStorage). Sirve como respaldo entre sesiones; no sustituye al backend institucional.",funcionarios:"Funcionarios",actividadesPlanificadas:"Actividades planificadas",reposiciones:"Reposiciones de tiempo",celdasOverride:"Celdas de rol con override",exportar:"Exportar JSON",importar:"Importar JSON…",reiniciar:"Reiniciar datos semilla",archivoAria:"Archivo JSON a importar",importadoTitulo:"Snapshot importado",importadoDesc:"Archivo: {archivo}{exportadoEn}",importadoExtra:" · exportado {fecha}",importRechazado:"Importación rechazada",reiniciarTitulo:"Reiniciar a datos semilla",reiniciarSub:"Se descartará la copia local y la app volverá a los datos de ejemplo. Esta acción no se puede deshacer a menos que hayas exportado primero un JSON de respaldo.",reiniciarRec:"Recomendación: pulse Exportar JSON antes de reiniciar.",noDeshacer:"Esta acción no se puede deshacer. Pulse «{accion}» para confirmar.",confirmarReiniciar:"Reiniciar",porQueTitulo:"¿Por qué hay copia local?",porQue:["El navegador guarda automáticamente cada cambio con un retraso de 500 ms para evitar perder información al recargar la página o cerrar el navegador.","La copia permanece en este dispositivo y NO sustituye un backend institucional. Exporte respaldos periódicos para trasladar o proteger la información.","El esquema lleva versión (`v{n}`); si el formato cambia en una nueva versión de la app, se crea un backup automático antes de aplicar la migración.","Exporte un JSON periódicamente como seguro adicional, especialmente antes de cambios mayores o cuando termine la jornada en campo."],backendTitulo:"Almacenamiento durable",backendIDB:"IndexedDB (Dexie) · capacidad amplia, almacenamiento asíncrono",backendLS:"localStorage · respaldo síncrono (~5 MB)",backendNone:"Sin almacenamiento (modo privado estricto)",backendBadgeIDB:"IndexedDB ✓",backendBadgeLS:"localStorage",backendBadgeNone:"Sin durable",migradoLS:"Sus datos previos en localStorage se migraron a IndexedDB automáticamente.",pendientesTitulo:"Estado local",pendientesSub:"No existe sincronización con un servidor remoto.",pendientesCero:"Datos guardados únicamente en este dispositivo.",pendientesN:"{n} cambios locales pendientes de guardar."},configuracion:{aparienciaTitulo:"Apariencia",aparienciaSub:"El tema (claro / oscuro / alto contraste) se aplica a toda la aplicación.",titulo:"Configuración · reglas administrativas",cambiosPendientes:"Cambios pendientes",badgeSucia:"Cambios sin aplicar",badgeOk:"Guardado localmente",reglaDuraIntro:"Regla dura: la herramienta registra y alerta; cambiar una regla no genera pagos, suspensiones ni derechos automáticos. Cualquier ajuste debe estar respaldado por la coordinación administrativa.",coberturaTitulo:"Cobertura · puestos con atención rutinaria diaria",coberturaSub:'Si un día un puesto seleccionado no tiene a nadie asignado a "Atención rutinaria de visitantes", se marca como cobertura crítica (rojo) en la vista Día.',viaticosTitulo:"Viáticos · corte administrativo",diaCorte:"Día de corte (1–28)",mesObjetivo:"Mes objetivo",permitirConsulta:"Permitir consulta tras cierre",permitirConsultaSub:'Si "Permitir consulta tras cierre" está desactivado, después del día de corte la vista de viáticos se oculta. Por defecto se mantiene visible (con banner rojo).',feriadosTitulo:"Feriados · cálculo del primer día laboral",feriadosCheckTitle:"Excluir feriados oficiales al determinar el primer día laboral del mes.",feriadosCheckSub:"Si el 1er día hábil L–V cae en feriado, la rotación T/L se inicia el siguiente día laboral real. Aplica a partir del mes siguiente para no alterar registros ya guardados.",feriadosVer:"Ver feriados cargados ({n} año{plural})",alertasTitulo:"Alertas adicionales (Fase 6)",alertaInactivo:"Persona inactiva con actividad futura",alertaIncapacitado:"Incapacitado con actividad futura",alertaSinModalidad:"Acumulativa sin modalidad",alertaReposicion:"Tiempo trabajado pendiente de reponer",alertasNota:"Cada checkbox controla si se evalúa esa familia de alertas. Si se detectan falsos positivos, puede desactivarse temporalmente sin tocar código.",reposicionTitulo:"Reposición · duración de jornada",horasJornada:"Horas por jornada",horasJornadaSub:"Define cuántas horas equivalen a un día completo (medio día = la mitad). Se usa para calcular el saldo de reposición cuando se repone en partes.",advertenciasTitulo:"Advertencias antes de aplicar:",restaurarPredet:"Restaurar valores predeterminados",restaurarConfirm:"¿Restaurar todas las reglas a sus valores predeterminados? Las alertas y cobertura volverán al estado inicial.",descartar:"Descartar",aplicar:"Aplicar cambios…",confirmarAplicar:"Confirmar y aplicar"},acciones:{aceptar:"Aceptar",cancelar:"Cancelar",cerrar:"Cerrar",guardar:"Guardar",eliminar:"Eliminar",agregar:"Agregar",editar:"Editar",confirmar:"Confirmar",restaurar:"Restaurar",exportar:"Exportar JSON",importar:"Importar JSON…",reiniciar:"Reiniciar datos semilla",aplicarCambios:"Aplicar cambios…",actualizarAhora:"Actualizar ahora",verLuego:"Ver luego",instalar:"Instalar",ahoraNo:"Ahora no"},estados:{activo:"Activo",inactivo:"Inactivo",vacaciones:"De vacaciones",incapacitado:"Incapacitado"},sync:{enLinea:"En línea",sinConexion:"Sin conexión",guardando:"Guardando…",guardado:"Guardado localmente {hora}",sinRespaldo:"Pendiente de primer guardado local",guardadoParcial:"Guardado temporal — respaldo durable falló ({hora})"},print:{imprimir:"Imprimir / Guardar PDF",imprimirCorto:"Imprimir",encabezadoMinisterio:"MINISTERIO DE AMBIENTE Y ENERGÍA",encabezadoSinac:"SISTEMA NACIONAL DE ÁREAS DE CONSERVACIÓN — SINAC",encabezadoAcc:"ÁREA DE CONSERVACIÓN CENTRAL · BLOQUE TAPANTÍ–MACIZO DE LA MUERTE",encabezadoUnidad:"Parque Nacional Los Quetzales (PNLQ)",documentoTitulo:"ROL MENSUAL DE TRABAJO",periodo:"Período: {mes} {anio}",puestoLabel:"Puesto operativo: {puesto}",leyendaTitulo:"Leyenda de códigos",leyendaT:"T = Turno",leyendaL:"L = Libre",leyendaV:"V = Vacaciones",leyendaI:"I = Incapacidad",leyendaO:"O = Otro",firma1:"Elaborado por",firma2:"Revisado por",firma3:"Aprobado por",firmaCargo1:"Administrador(a) de ASP",firmaCargo2:"Coordinación administrativa ACC",firmaCargo3:"Jefatura BTMM",lugarFecha:"Lugar y fecha: ____________________________________________",pieDocumento:"Documento generado por la herramienta PNLQ Gestión de Jornadas · v{version}",pieFecha:"Impreso: {fecha}",pieReglaDura:"La herramienta solo registra y alerta; no genera derechos automáticos. Firmas validan el documento."},pwa:{instalarTitulo:"Instalar PNLQ en este dispositivo",instalarSub:"Acceso sin internet · Pantalla completa · Sin navegador",instalarAria:"Instalar aplicación PNLQ",sinConexion:"Sin conexión — mostrando datos en caché",ultimaCarga:"Última carga local: {fecha}",nuevaVersion:"Nueva versión disponible",versionDesactualizada:"Versión desactualizada",versionActual:"Versión actual: v{actual}",versionDisponible:" · disponible: v{remoto}",urgente:" Actualice para evitar inconsistencias.",sugerido:" Actualice para ver los últimos cambios.",bannerAria:"Nueva versión de PNLQ disponible"}};function ld(i,o){return!i||!o||typeof i!="string"?i:i.replace(/\{(\w+)\}/g,(l,d)=>o[d]!==void 0?String(o[d]):l)}function e1(i){const o=String(i||"").split(".");let l=XT;for(const d of o)if(l&&Object.prototype.hasOwnProperty.call(l,d))l=l[d];else return i;return l===void 0?i:l}function Je(i,o){const l=e1(i);return Array.isArray(l)?l.map(d=>ld(d,o)):ld(l,o)}function ud(i){return i===1?"":"s"}function kn(){return S.useCallback((i,o)=>Je(i,o),[])}const nr="1.14.17",Ei="2026-08-13T19:15:13.227Z",Ni="529a5d4",n1="/BTMM_JORNADAS/version.json";function Fd(i=Ei){try{const o=new Date(i),l=d=>String(d).padStart(2,"0");return`${l(o.getDate())}/${l(o.getMonth()+1)}/${o.getFullYear()} ${l(o.getHours())}:${l(o.getMinutes())}`}catch{return i}}/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),zd=(...i)=>i.filter((o,l,d)=>!!o&&o.trim()!==""&&d.indexOf(o)===l).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var a1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=S.forwardRef(({color:i="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:d,className:m="",children:p,iconNode:P,...L},T)=>S.createElement("svg",{ref:T,...a1,width:o,height:o,stroke:i,strokeWidth:d?Number(l)*24/Number(o):l,className:zd("lucide",m),...L},[...P.map(([k,A])=>S.createElement(k,A)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=(i,o)=>{const l=S.forwardRef(({className:d,...m},p)=>S.createElement(r1,{ref:p,iconNode:o,className:zd(`lucide-${t1(i)}`,d),...m}));return l.displayName=`${i}`,l};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=ae("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=ae("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=ae("CalendarClock",[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M17.5 17.5 16 16.3V14",key:"akvzfd"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=ae("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=ae("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=ae("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=ae("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=ae("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=ae("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=ae("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=ae("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=ae("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=ae("Contrast",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z",key:"j4l70d"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=ae("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=ae("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=ae("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=ae("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=ae("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=ae("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=ae("LockOpen",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=ae("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=ae("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=ae("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=ae("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=ae("OctagonAlert",[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=ae("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=ae("Pin",[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=ae("PlugZap",[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m18 3-4 4h6l-4 4",key:"16psg9"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=ae("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=ae("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=ae("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=ae("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=ae("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=ae("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=ae("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=ae("Stethoscope",[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=ae("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=ae("TrafficCone",[["path",{d:"M9.3 6.2a4.55 4.55 0 0 0 5.4 0",key:"flyxqv"}],["path",{d:"M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3",key:"1nlxxg"}],["path",{d:"M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z",key:"vz7x1l"}],["path",{d:"m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8",key:"1xfzlw"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=ae("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=ae("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fs=ae("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=ae("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=ae("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=ae("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=ae("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),g1={"🏠":em,"👥":pm,"📅":Yd,"📊":Ud,"🗓️":Bd,"📋":Wd,"💵":Qd,"🛡️":cm,"🔔":Jd,"✕":vm,"⚠️":Fs,"⚠":Fs,"🚨":im,"✅":qd,"🩺":dm,"📄":Zd,"📍":am,"🔥":Xd,"🌲":fm,"⚖️":um,"⟳":lm,"☰":rm,"▲":Hd,"▼":Gd,"←":Kd,"→":$d,"+":sm,"🔒":tm,"🔓":nm,"📴":Tm,"📡":om,"🚦":mm},P1={home:em,users:pm,calendar:Yd,calendarDays:Bd,calendarClock:i1,clipboard:Wd,chart:Ud,banknote:Qd,shield:cm,shieldAlert:p1,bell:Jd,x:vm,alert:Fs,danger:im,check:qd,info:u1,stethoscope:dm,file:Zd,pin:am,flame:Xd,trees:fm,scale:um,refresh:lm,menu:rm,chevronUp:Hd,chevronDown:Gd,chevronLeft:Kd,chevronRight:$d,plus:sm,pencil:d1,trash:h1,lock:tm,unlock:nm,eye:l1,eyeOff:s1,sun:v1,moon:c1,contrast:o1,traffic:mm,wifi:L1,wifiOff:Tm,phone:T1,search:f1,pinMap:m1,plugZap:om};function cn({name:i,size:o=18,label:l,className:d="",strokeWidth:m=2}){const p=typeof i=="string"?g1[i]??P1[i]:null;if(!p)return u.jsx("span",{"aria-hidden":l?void 0:!0,"aria-label":l,className:d,children:i});const P=l?{role:"img","aria-label":l}:{"aria-hidden":!0,focusable:"false"};return u.jsx(p,{width:o,height:o,strokeWidth:m,className:d,...P})}function y1({view:i,setView:o,nAlertas:l}){const d=kn(),m=[[d("sidebar.grupoPrincipal"),[["dia",d("view.dia"),"calendar"],["roles",d("view.roles"),"chart"],["planificacion",d("view.planificacion"),"calendarDays"],["funcionarios",d("view.funcionarios"),"users"]]],[d("sidebar.grupoJornadas"),[["planFuncionario",d("view.planFuncionario"),"clipboard"],["adelantos",d("view.adelantos"),"banknote"],["reposicion",d("view.reposicion"),"refresh"],["disponibilidad",d("view.disponibilidad"),"shield"]]],[d("sidebar.grupoControl"),[["alertas",d("view.alertas"),"bell"],["datos",d("view.datos"),"shieldAlert"],["configuracion",d("view.configuracion"),"traffic"]]]];return u.jsxs("aside",{className:"pnlq-no-print hidden w-60 shrink-0 flex-col bg-emerald-900 text-white lg:flex",children:[u.jsxs("div",{className:"border-b border-white/10 p-6",children:[u.jsxs("div",{className:"mb-3 flex items-center gap-3",children:[u.jsx("img",{src:"/BTMM_JORNADAS/acc-logo.svg",alt:"ACC",className:"h-12 w-12 shrink-0 rounded-xl bg-white p-1"}),u.jsxs("div",{children:[u.jsx("div",{className:"text-xs font-semibold uppercase tracking-[0.22em] text-white/60",children:d("app.sinacCR")}),u.jsx("div",{className:"mt-0.5 text-xs font-semibold text-white/70",children:d("app.accNombre")})]})]}),u.jsxs("div",{className:"text-base font-semibold leading-snug",children:[d("app.bloqueLinea1"),u.jsx("br",{}),d("app.bloqueLinea2")]}),u.jsx("div",{className:"mt-1.5 text-xs text-white/65",children:d("app.bloqueSub")})]}),u.jsx("nav",{className:"flex-1 p-3",children:m.map(([p,P])=>u.jsxs("div",{children:[u.jsx("div",{className:"px-3 pb-2 pt-4 text-xs font-semibold uppercase tracking-wider text-white/70",children:p}),P.map(([L,T,k])=>u.jsxs("button",{onClick:()=>o(L),"aria-current":i===L?"page":void 0,className:`mb-1 flex min-h-touch w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${i===L?"bg-white/20 text-white ring-1 ring-white/20":"text-white/80 hover:bg-white/10"}`,children:[u.jsx(cn,{name:k,size:18}),T,L==="alertas"&&l>0&&u.jsx("span",{"aria-label":d("bottomNav.alertasAria",{n:l}),className:"ml-auto rounded-full bg-red-700 px-2 py-0.5 text-xs text-white",children:l})]},L))]},p))}),u.jsxs("div",{className:"border-t border-white/10 p-4 text-xs",children:[u.jsx("strong",{className:"font-semibold",children:d("app.perfilNombre")}),u.jsx("div",{className:"text-white/60",children:d("app.perfilCargo")}),u.jsxs("div",{className:"mt-3 border-t border-white/10 pt-3 text-[10px] font-mono leading-tight text-white/65",title:`Versión ${nr} · build ${Ei} · commit ${Ni}`,children:[u.jsxs("div",{children:["v",nr," ",u.jsx("span",{className:"text-white/60",children:"·"})," ",Ni]}),u.jsxs("div",{className:"text-white/60",children:["build ",Fd(Ei)]})]})]})]})}const hm=["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SETIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"],ih=["D","L","K","M","J","V","S"],M1=["DOMINGO","LUNES","MARTES","MIÉRCOLES","JUEVES","VIERNES","SÁBADO"];function Lm({prominent:i=!1}){const{lastSavedAt:o,pendingChanges:l,durableSaveFailed:d}=rr(),m=kn(),[p,P]=S.useState(typeof navigator<"u"?navigator.onLine:!0);S.useEffect(()=>{const N=()=>P(!0),C=()=>P(!1);return window.addEventListener("online",N),window.addEventListener("offline",C),()=>{window.removeEventListener("online",N),window.removeEventListener("offline",C)}},[]);const L=o?new Date(o).toLocaleTimeString("es-CR",{hour:"2-digit",minute:"2-digit"}):null,T=d&&l===0,k=l>0?m("sync.guardando"):T?m("sync.guardadoParcial",{hora:L??""}):L?m("sync.guardado",{hora:L}):m("sync.sinRespaldo"),A=`${m(p?"sync.enLinea":"sync.sinConexion")} · ${k}`;return i?u.jsxs("span",{role:"status","aria-label":A,title:A,className:`inline-flex min-h-touch w-full items-center justify-center gap-2 rounded-xl border px-3 py-2 text-sm font-semibold ${T||!p?"border-warning/40 bg-warning-soft text-warning-fg":"border-line bg-surface text-ink-muted"}`,children:[u.jsx("span",{"aria-hidden":"true",className:`h-2.5 w-2.5 shrink-0 rounded-full ${l>0?"animate-pulse bg-info":T||!p?"bg-warning":"bg-ok"}`}),u.jsx("span",{className:"truncate",children:k}),!p&&u.jsx("span",{className:"shrink-0 text-xs font-bold uppercase tracking-wide",children:m("sync.sinConexion")})]}):u.jsxs("span",{role:"status","aria-label":A,title:A,className:`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium sm:text-sm ${T?"border-warning/40 bg-warning-soft text-warning-fg":p?"border-line bg-surface text-ink-muted":"border-warning/40 bg-warning-soft text-warning-fg"}`,children:[u.jsx("span",{"aria-hidden":"true",className:`h-2 w-2 shrink-0 rounded-full ${l>0?"animate-pulse bg-info":T?"bg-warning":p?"bg-ok":"bg-warning"}`}),u.jsx("span",{className:"hidden sm:inline",children:k}),L&&u.jsx("span",{className:"sm:hidden",children:L})]})}var gm=Vd();const Za=[];let cd=!1,Wa=0,dd="";function E1(i){if(i.key!=="Escape")return;const o=Za[Za.length-1];o&&(typeof i.stopImmediatePropagation=="function"&&i.stopImmediatePropagation(),i.stopPropagation(),o())}function N1(){cd||typeof document>"u"||(document.addEventListener("keydown",E1,!0),cd=!0)}function Pm(i){return N1(),Za.push(i),()=>{const o=Za.lastIndexOf(i);o>=0&&Za.splice(o,1)}}function C1(i){S.useEffect(()=>{if(i)return Pm(()=>i())},[i])}const x1=["a[href]","area[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(", ");function md(i){return i?Array.from(i.querySelectorAll(x1)).filter(o=>!o.hasAttribute("aria-hidden")&&o.offsetParent!==null):[]}function ym({open:i=!0,onClose:o,initialFocusRef:l}={}){const d=S.useRef(null),m=S.useRef(null),p=S.useId(),P=S.useId();return S.useEffect(()=>{if(!i)return;m.current=typeof document<"u"?document.activeElement:null;const L=d.current;if(!L)return;typeof document<"u"&&(Wa===0&&(dd=document.body.style.overflow,document.body.style.overflow="hidden"),Wa+=1);const T=()=>{const C=(l==null?void 0:l.current)??md(L)[0]??L;try{C.focus({preventScroll:!0})}catch{}},k=window.setTimeout(T,0),A=C=>{if(C.key!=="Tab")return;const w=md(L);if(w.length===0){C.preventDefault();return}const I=w[0],b=w[w.length-1],U=document.activeElement;C.shiftKey?(U===I||!L.contains(U))&&(C.preventDefault(),b.focus()):(U===b||!L.contains(U))&&(C.preventDefault(),I.focus())};L.addEventListener("keydown",A);const N=o?Pm(()=>o()):void 0;return()=>{window.clearTimeout(k),L.removeEventListener("keydown",A),N==null||N(),typeof document<"u"&&(Wa=Math.max(0,Wa-1),Wa===0&&(document.body.style.overflow=dd));const C=m.current;if(C&&typeof C.focus=="function")try{C.focus({preventScroll:!0})}catch{}}},[i,o,l]),{ref:d,titleId:p,descId:P}}const fd={sm:"max-w-sm",md:"max-w-xl",lg:"max-w-2xl",xl:"max-w-3xl","2xl":"max-w-4xl"};function Mm({open:i=!0,onClose:o,title:l,description:d,children:m,actions:p,size:P="lg",closeOnBackdrop:L=!0,contentClassName:T=""}){const{ref:k,titleId:A,descId:N}=ym({open:i,onClose:o});if(!i)return null;const C=fd[P]||fd.lg,w=u.jsx("div",{className:"pnlq-modal-backdrop fixed inset-0 z-50 flex items-end justify-center bg-black/55 p-0 backdrop-blur-sm md:items-center md:p-4",onClick:I=>{L&&I.target===I.currentTarget&&(o==null||o())},children:u.jsxs("div",{ref:k,role:"dialog","aria-modal":"true","aria-labelledby":l?A:void 0,"aria-describedby":d?N:void 0,tabIndex:-1,className:`pnlq-modal-panel flex max-h-[94vh] max-h-[94dvh] w-full ${C} flex-col overflow-hidden rounded-t-3xl bg-surface text-ink shadow-2xl outline-none md:rounded-3xl`,style:{maxHeight:"calc(var(--visual-viewport-height, 100dvh) - 1rem)"},children:[u.jsx("div",{"aria-hidden":"true",className:"mx-auto mt-2 h-1.5 w-10 shrink-0 rounded-full bg-line md:hidden"}),(l||d)&&u.jsxs("header",{className:"pnlq-modal-header flex items-start justify-between gap-3 border-b border-line p-5",children:[u.jsxs("div",{className:"min-w-0",children:[l&&u.jsx("h2",{id:A,className:"text-lg font-semibold text-ink",children:l}),d&&u.jsx("p",{id:N,className:"mt-1 text-sm text-ink-muted",children:d})]}),u.jsx("button",{type:"button",onClick:o,"aria-label":Je("acciones.cerrar"),className:"-mr-1 inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl text-ink-muted hover:bg-surface-alt hover:text-ink",children:u.jsx(cn,{name:"x",size:20,label:Je("acciones.cerrar")})})]}),u.jsx("div",{className:`pnlq-modal-body flex-1 overflow-y-auto p-5 ${T}`,children:m}),p&&u.jsx("footer",{className:"pnlq-modal-footer flex flex-wrap justify-between gap-2 border-t border-line bg-surface-alt p-4 pb-[max(1rem,env(safe-area-inset-bottom))]",children:p})]})});return typeof document<"u"?gm.createPortal(w,document.body):w}const Ss=390,Vs=844,Em="mobile-preview";function S1(i=window.location){return new URLSearchParams(i.search).get(Em)==="1"}function V1(i=window.location){const o=new URL(i.href);return o.searchParams.set(Em,"1"),o.toString()}const pd=["planificacion","planFuncionario"];function b1({view:i,setView:o,month:l,setMonth:d,year:m,setYear:p,compact:P,setCompact:L}){const T=kn(),[k,A]=S.useState(!1),[N,C]=S.useState(!1),w=S1(),I=new Date().getFullYear(),b=Array.from({length:11},(Z,H)=>I-5+H),U=Z=>{let H=l+Z,oe=m;H<0&&(H=11,oe-=1),H>11&&(H=0,oe+=1),d(H),p(oe)},de=()=>{const Z=new Date;d(Z.getMonth()),p(Z.getFullYear())},ee=pd.includes(i),pe=ee||i==="roles";return u.jsxs("header",{className:`pnlq-topbar pnlq-no-print sticky top-0 border-line bg-surface/95 shadow-sm backdrop-blur lg:block lg:border-b lg:px-6 lg:py-3 ${ee?"block border-b px-4 py-2":pe?"hidden border-b md:block md:px-4 md:py-2":"hidden"} ${k?"z-50":"z-30"}`,children:[u.jsxs("div",{className:"pnlq-topbar-inner flex flex-col gap-2 xl:flex-row xl:items-center xl:justify-between",children:[u.jsx("div",{className:"flex items-center justify-between gap-2",children:u.jsx("div",{className:"min-w-0",children:u.jsx("h1",{className:"hidden text-xl font-semibold tracking-tight text-ink lg:block",children:T("app.titulo")})})}),u.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[pd.includes(i)&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{role:"group","aria-label":T("topbar.periodo"),className:"inline-flex items-stretch overflow-hidden rounded-xl border border-line bg-surface shadow-sm",children:[u.jsx("button",{onClick:()=>U(-1),"aria-label":T("topbar.mesAnterior"),className:"inline-flex min-h-touch min-w-touch items-center justify-center px-2 text-ink-muted hover:bg-surface-alt",children:u.jsx(cn,{name:"chevronLeft",size:16})}),u.jsx("select",{"aria-label":T("topbar.mes"),className:"min-h-touch border-x border-line bg-surface px-1.5 text-sm font-medium text-ink outline-none sm:px-2 dark:[color-scheme:dark]",value:l,onChange:Z=>d(Number(Z.target.value)),children:hm.map((Z,H)=>u.jsx("option",{value:H,children:Z},Z))}),u.jsx("select",{"aria-label":T("topbar.anio"),className:"min-h-touch bg-surface px-1.5 text-sm font-medium text-ink outline-none sm:px-2 dark:[color-scheme:dark]",value:m,onChange:Z=>p(Number(Z.target.value)),children:b.map(Z=>u.jsx("option",{children:Z},Z))}),u.jsx("button",{onClick:()=>U(1),"aria-label":T("topbar.mesSiguiente"),className:"inline-flex min-h-touch min-w-touch items-center justify-center border-l border-line px-2 text-ink-muted hover:bg-surface-alt",children:u.jsx(cn,{name:"chevronRight",size:16})})]}),u.jsx("button",{type:"button",onClick:de,className:"inline-flex min-h-touch items-center rounded-xl border border-line bg-surface px-3 text-sm font-semibold text-brand hover:bg-brand-soft",children:T("topbar.hoy")})]}),i==="roles"&&u.jsx("button",{onClick:()=>L(!P),className:"hidden min-h-touch items-center rounded-xl border border-line bg-surface px-3 py-2 text-sm font-medium text-ink hover:bg-surface-alt md:inline-flex","aria-pressed":P,children:T(P?"topbar.vistaAmplia":"topbar.vistaCompacta")}),!w&&u.jsxs("button",{type:"button",onClick:()=>A(!0),className:"hidden min-h-touch items-center gap-2 rounded-xl border border-brand bg-brand-soft px-3 text-sm font-semibold text-ink hover:opacity-90 lg:inline-flex","aria-label":T("topbar.previewMobile"),children:[u.jsx(cn,{name:"phone",size:18}),T("topbar.previewMobileCorto"),u.jsx("span",{className:"rounded-md bg-surface px-1.5 py-0.5 text-xs text-ink-muted",children:"Temporal"})]}),u.jsx("span",{className:"hidden lg:inline-flex",children:u.jsx(Lm,{})})]})]}),u.jsxs(Mm,{open:k,onClose:()=>A(!1),title:T("topbar.previewTitle"),description:T("topbar.previewDesc",{ancho:N?Vs:Ss,alto:N?Ss:Vs}),size:"2xl",contentClassName:"bg-slate-200 p-3",children:[u.jsxs("div",{className:"mb-3 flex justify-center",role:"group","aria-label":T("topbar.previewOrientation"),children:[u.jsx("button",{type:"button",onClick:()=>C(!1),"aria-pressed":!N,className:`min-h-touch rounded-l-xl border px-4 text-sm font-semibold ${N?"border-line bg-surface text-ink":"border-brand bg-brand text-brand-fg"}`,children:T("topbar.previewVertical")}),u.jsx("button",{type:"button",onClick:()=>C(!0),"aria-pressed":N,className:`min-h-touch rounded-r-xl border border-l-0 px-4 text-sm font-semibold ${N?"border-brand bg-brand text-brand-fg":"border-line bg-surface text-ink"}`,children:T("topbar.previewHorizontal")})]}),u.jsx("div",{className:"mx-auto max-w-full overflow-hidden rounded-[2rem] border-[6px] border-slate-900 bg-white shadow-2xl transition-[width]",style:{width:`${(N?Vs:Ss)+12}px`},children:u.jsx("iframe",{title:T("topbar.previewFrameTitle"),src:V1(),className:`block w-full bg-white ${N?"h-[min(390px,calc(100dvh-12rem))] min-h-[280px]":"h-[min(844px,calc(100dvh-12rem))] min-h-[480px]"}`})})]})]})}function A1(i){return i>99?"99+":String(i)}function w1({view:i,setView:o,nAlertas:l,hidden:d=!1}){const m=kn(),[p,P]=S.useState(!1),L=[["dia",m("bottomNav.dia"),"calendar"],["roles",m("bottomNav.roles"),"chart"],["alertas",m("bottomNav.alertas"),"bell"],["funcionarios",m("bottomNav.personal"),"users"]],T=[["planificacion",m("bottomNav.plan"),"calendarDays"],["adelantos",m("bottomNav.viaticos"),"banknote"],["reposicion",m("bottomNav.reposicion"),"refresh"],["disponibilidad",m("bottomNav.disponib"),"shield"],["planFuncionario",m("bottomNav.planFunc"),"clipboard"],["datos",m("bottomNav.datos"),"shieldAlert"],["configuracion",m("bottomNav.config"),"traffic"]],k=T.some(([N])=>N===i),A=N=>{o(N),P(!1)};return d?null:u.jsxs(u.Fragment,{children:[u.jsx("nav",{className:"pnlq-bottom-nav pnlq-no-print fixed bottom-0 left-0 right-0 z-40 border-t border-line bg-surface pb-[env(safe-area-inset-bottom)] lg:hidden","aria-label":m("bottomNav.navAria"),children:u.jsxs("div",{className:"pnlq-bottom-nav-grid grid grid-cols-5",children:[L.map(([N,C,w])=>u.jsxs("button",{type:"button",onClick:()=>A(N),"aria-current":i===N?"page":void 0,className:`pnlq-bottom-nav-item relative flex min-h-touch flex-col items-center justify-center gap-0.5 py-2 text-sm font-semibold ${i===N?"text-brand":"text-ink-muted"}`,children:[u.jsx(cn,{name:w,size:24}),C,N==="alertas"&&l>0&&u.jsx("span",{className:"absolute right-[18%] top-1 min-w-5 rounded-full bg-critical px-1 text-center text-xs font-bold leading-5 text-ink-inverse","aria-label":m("bottomNav.alertasAria",{n:l}),children:A1(l)})]},N)),u.jsxs("button",{type:"button",onClick:()=>P(!0),"aria-expanded":p,"aria-current":k?"page":void 0,className:`pnlq-bottom-nav-item relative flex min-h-touch flex-col items-center justify-center gap-0.5 py-2 text-sm font-semibold ${p||k?"text-brand":"text-ink-muted"}`,children:[u.jsx(cn,{name:"menu",size:24}),m("bottomNav.mas")]})]})}),u.jsx(Mm,{open:p,onClose:()=>P(!1),title:m("bottomNav.masTitulo"),description:m(k?`view.${i}`:"bottomNav.masSub"),size:"sm",contentClassName:"p-3 pb-[max(1rem,env(safe-area-inset-bottom))]",children:u.jsx("div",{className:"grid grid-cols-2 gap-2",children:T.map(([N,C,w])=>u.jsxs("button",{type:"button",onClick:()=>A(N),"aria-current":i===N?"page":void 0,className:`relative flex min-h-[56px] items-center gap-3 rounded-xl px-3 text-left text-sm font-semibold ${i===N?"bg-brand text-brand-fg":"border border-line bg-surface-alt text-ink"}`,children:[u.jsx(cn,{name:w,size:22}),u.jsx("span",{children:C})]},N))})})]})}const k1=new Set(["dia","roles","planificacion","funcionarios","alertas","adelantos","reposicion","disponibilidad","planFuncionario","datos","configuracion"]),Nm=new Set(["roles","planificacion","planFuncionario"]);function Zs(i){return i==="dashboard"?"dia":k1.has(i)?i:"dia"}function j1(i,o){const l=Number(i),d=Number(o);return Number.isInteger(l)&&l>=2e3&&l<=2200&&Number.isInteger(d)&&d>=1&&d<=12?{year:l,month:d-1}:null}function _1(i=""){const o=String(i).replace(/^#\/?/,""),[l,d,m]=o.split("/"),p=Zs(l||"dia"),P={view:p};return p==="dia"&&/^\d{4}-\d{2}-\d{2}$/.test(d||"")&&(P.diaVista=d),Nm.has(p)&&Object.assign(P,j1(d,m)||{}),P}function Td({view:i,year:o,month:l,diaVista:d}){const m=Zs(i);return m==="dia"?`#/dia/${d}`:Nm.has(m)?`#/${m}/${o}/${On(l+1)}`:`#/${m}`}function R1({view:i,setView:o,year:l,setYear:d,month:m,setMonth:p,diaVista:P,setDiaVista:L}){const T=S.useCallback(()=>{const k=_1(window.location.hash);o(k.view),k.year!=null&&d(k.year),k.month!=null&&p(k.month),k.diaVista&&L(k.diaVista)},[L,p,o,d]);return S.useEffect(()=>(T(),window.addEventListener("popstate",T),window.addEventListener("hashchange",T),()=>{window.removeEventListener("popstate",T),window.removeEventListener("hashchange",T)}),[T]),S.useEffect(()=>{const k=Td({view:i,year:l,month:m,diaVista:P});window.location.hash!==k&&window.history.replaceState({},"",k)},[P,m,i,l]),S.useCallback(k=>{const A=Zs(k),N=Td({view:A,year:l,month:m,diaVista:P});window.location.hash!==N&&window.history.pushState({},"",N),o(A)},[P,m,o,l])}function D1(){const[i,o]=S.useState(!1);return S.useEffect(()=>{const l=window.visualViewport;if(!l)return;const d=()=>{const p=window.innerHeight-l.height>150;o(p),document.documentElement.style.setProperty("--visual-viewport-height",`${l.height}px`)};return d(),l.addEventListener("resize",d),l.addEventListener("scroll",d),()=>{l.removeEventListener("resize",d),l.removeEventListener("scroll",d),document.documentElement.style.removeProperty("--visual-viewport-height")}},[]),i}class I1 extends S.Component{constructor(l){super(l);Ti(this,"handleReintentar",()=>{this.setState({hasError:!1,error:null})});Ti(this,"handleRecargar",()=>{window.location.reload()});Ti(this,"handleDescargarRespaldo",()=>{try{const l=_s();if(!l)return;const d=RT(l),m=new Blob([JSON.stringify(d,null,2)],{type:"application/json"}),p=URL.createObjectURL(m),P=document.createElement("a");P.href=p,P.download=`pnlq-respaldo-de-emergencia-${OT()}.json`,document.body.appendChild(P),P.click(),document.body.removeChild(P),URL.revokeObjectURL(p)}catch{}});this.state={hasError:!1,error:null}}static getDerivedStateFromError(l){return{hasError:!0,error:l}}componentDidCatch(l,d){console.error("Error de aplicación capturado por ErrorBoundary:",l,d==null?void 0:d.componentStack)}render(){var d;if(!this.state.hasError)return this.props.children;const l=(()=>{try{return!!_s()}catch{return!1}})();return u.jsx("div",{role:"alert",className:"flex min-h-screen items-center justify-center bg-slate-100 p-4 text-slate-950",children:u.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-red-300 bg-white p-6 shadow-lg",children:[u.jsx("p",{className:"text-lg font-bold text-red-900",children:"Ocurrió un error inesperado"}),u.jsx("p",{className:"mt-2 text-sm text-slate-700",children:"La aplicación encontró un problema y no puede continuar mostrando esta pantalla. Tus datos guardados en este dispositivo no se han borrado."}),u.jsxs("div",{className:"mt-5 flex flex-col gap-2",children:[u.jsx("button",{type:"button",onClick:this.handleReintentar,className:"min-h-touch rounded-xl bg-emerald-800 px-4 text-sm font-semibold text-white hover:bg-emerald-700",children:"Reintentar"}),u.jsx("button",{type:"button",onClick:this.handleRecargar,className:"min-h-touch rounded-xl border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-800 hover:bg-slate-50",children:"Recargar la aplicación"}),l&&u.jsx("button",{type:"button",onClick:this.handleDescargarRespaldo,className:"min-h-touch rounded-xl border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-800 hover:bg-slate-50",children:"Descargar mis datos por seguridad"})]}),((d=this.state.error)==null?void 0:d.message)&&u.jsxs("p",{className:"mt-4 break-words rounded-lg bg-slate-50 p-2 text-[11px] text-slate-500",children:["Detalle técnico: ",this.state.error.message]})]})})}}const O1=String.raw`Pestaña 1


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
`,F1=String.raw`	SÁBADO
	

	

	

	

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
`,z1=String.raw`JB capacitación VDA
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
`,Q1=String.raw`KV programar actividades de EA tomar en cuenta escuelas del humo de peji y el liceo de peji/atención de turismo
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
`,J1=String.raw`JV informe voluntarios UCR de semana santa en PNLQ/viático combustible/turismo
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
`,B1=String.raw`JB cherpiritos/denuncia sanchez
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
`,Y1=String.raw`PNTMM
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
`,U1=String.raw`JV  acompaña a la persona de DA a realizar inspección
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


`,G1=String.raw`

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










 


	

	

	

	

	

	

	





Pestaña 2`,K1=[O1,F1,z1,Q1,J1,B1,Y1,U1,G1].join(""),bs="2026-07-21-agenda-viaticos";function An({id:i,titulo:o,fecha:l,funcionarios:d,lugar:m="",observaciones:p=""}){return{id:`plan2026-agenda-${i}`,titulo:o,categoria:"Otra actividad",inicio:l,fin:l,unDia:!0,horaInicio:"08:00",horaFin:"16:00",funcionarios:d,otrosParticipantes:[],lugar:m,observaciones:p,viatico:!0}}const $1=[An({id:"2026-08-01-cerro-vueltas",titulo:"PPC (entrada de Cerro Vueltas, tema caballistas)",fecha:"2026-08-01",funcionarios:["Jetzelly Villalobos","Yolanda Elizondo"],lugar:"Entrada de Cerro Vueltas",observaciones:"Tema: caballistas."}),An({id:"2026-08-05-reunion-cne",titulo:"Reunión CNE",fecha:"2026-08-05",funcionarios:["Karen Valle"],lugar:"CNE"}),An({id:"2026-08-06-jaular",titulo:"PPC pica montaña a Jaular",fecha:"2026-08-06",funcionarios:["Yeison Cortés","Errol Salazar","Kenneth Mena"],lugar:"Jaular"}),An({id:"2026-08-08-cerros",titulo:"PPC a Cerros",fecha:"2026-08-08",funcionarios:["Yolanda Elizondo"],lugar:"Cerros"}),...[10,11,12,13,14].map(i=>An({id:`2026-08-${i}-ea-escuelas`,titulo:"EA Escuelas",fecha:`2026-08-${i}`,funcionarios:["Errol Salazar","Diana Tencio"],lugar:"Escuelas"})),An({id:"2026-08-12-ppc-san-gerardo",titulo:"PPC San Gerardo",fecha:"2026-08-12",funcionarios:["Karen Valle","Laura Valverde","Pablo Sánchez"],lugar:"San Gerardo"}),An({id:"2026-08-12-capacitacion-serpientes",titulo:"Capacitación en manipulación y manejo de serpientes",fecha:"2026-08-12",funcionarios:["Yeison Cortés","Laura Valverde"],observaciones:"Las dos descripciones de la fuente se consolidaron en una sola actividad."}),An({id:"2026-08-16-duelas-esperanza",titulo:"PPC Duelas, La Esperanza y otros",fecha:"2026-08-16",funcionarios:["Jetzelly Villalobos"],lugar:"Duelas y La Esperanza"}),An({id:"2026-08-17-vida-silvestre-acc",titulo:"Apoyo operativo Vida Silvestre ACC",fecha:"2026-08-17",funcionarios:["Fabricio Carbonell","Kenneth Mena","Jetzelly Villalobos"],lugar:"ACC",observaciones:"Confirmar detalles con Fabricio."}),An({id:"2026-08-18-reserva-san-gerardo",titulo:"PPC Reserva San Gerardo",fecha:"2026-08-18",funcionarios:["Karen Valle","Yolanda Elizondo","Pablo Sánchez"],lugar:"Reserva San Gerardo"}),An({id:"2026-08-30-rancho-lalo",titulo:"PPC Rancho de Lalo",fecha:"2026-08-30",funcionarios:["Jetzelly Villalobos","Mariano Solís"],lugar:"Rancho de Lalo"})],H1={PNTMM:"Parque Nacional Tapantí Macizo de la Muerte",PNLQ:"Parque Nacional Los Quetzales",PLE:"Puesto La Esperanza",PVM:"Puesto Villa Mills"},vd={ENERO:1,FEBRERO:2,MARZO:3,ABRIL:4,MAYO:5,JUNIO:6,JULIO:7,AGOSTO:8,SETIEMBRE:9,SEPTIEMBRE:9,OCTUBRE:10,NOVIEMBRE:11,DICIEMBRE:12},hd={ES:"Errol Salazar",ME:"Mayra Espinoza",YC:"Yeison Cortés",KM:"Kenneth Mena",FC:"Fabricio Carbonell",MN:"Monserrath Navarro",JPG:"Juan Pablo Granados",JG:"Juan Pablo Granados",PG:"Juan Pablo Granados",JP:"Juan Pablo Granados",LV:"Laura Valverde",JV:"Jetzelly Villalobos",DT:"Diana Tencio",KV:"Karen Valle",PS:"Pablo Sánchez",YE:"Yolanda Elizondo",MS:"Mariano Solís",MSA:"Mariano Solís",GP:"Guillermo Pérez",CC:"Carlos Cordero",JB:"Josué Brenes",AA:"Alexander Alvarado"},q1={MH:"MH",GG:"GG",MSG:"MSG",DA:"Dirección de Agua",GJ:"GJ",JC:"JC",IV:"IV",YV:"YV",VB:"VB",ASVO:"ASVO",TCU:"TCU",UCR:"UCR",TEC:"TEC",ICE:"ICE",ACLAP:"ACLAP",COVIRENA:"COVIRENA",COVIRENAS:"COVIRENA",PANTHERA:"Panthera",UNED:"UNED",INA:"INA",MOPT:"MOPT",FUNDECOR:"FUNDECOR",CEDARENA:"CEDARENA"},W1=new Set(["DOMINGO","LUNES","MARTES","MIÉRCOLES","JUEVES","VIERNES","SÁBADO"]),Cm=i=>i.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase(),Z1=(i,o)=>new RegExp(`(^|[^A-Z])${o}([^A-Z]|$)`).test(i);function X1(i){const o=i.replace(/[^A-Za-z]/g,"").toUpperCase();return o.startsWith("PNTMM")?"PNTMM":["PNLQ","PLE","PVM"].includes(o)?o:""}function ev(i){const o=Cm(i),l=[],d=m=>{l.some(p=>p.nombre===m)||l.push({nombre:m,contacto:""})};for(const[m,p]of Object.entries(q1))Z1(o,m)&&d(p);return/\bENZO\b/.test(o)&&d("Enzo"),/\bALEX(?:ANDER)?\b/.test(o)&&d("Alex"),/\bMERYLL(?:\s+ARIAS)?\b/.test(o)&&d("Meryll Arias"),/\bLUIS\s*DAVID\b|\bLUISDA\b/.test(o)&&d("Luis David"),/\bVOLUNTARI(?:O|A|OS|AS)\b/.test(o)&&d("Voluntariado"),/\bINVESTIGADOR(?:A|ES|AS)?\b/.test(o)&&d("Investigadores"),/\bPASANTES?\b/.test(o)&&d("Pasantes"),/\bESTUDIANTES?\b/.test(o)&&d("Estudiantes"),l}function nv(i){const o=Cm(i);return!!(/\bVOLUNTARI[OA]S?\b/.test(o)||/\bCOVIRENAS?\b/.test(o)||/\bINVITAD[OA]S?\b/.test(o)||/\bINVESTIGADOR/.test(o)||/\bPASANTES?\b/.test(o)||/\bESTUDIANTES?\b/.test(o)||/\bPRACTICANTES?\b/.test(o)||/\bENZO\b/.test(o)||/\bMERYLL\b/.test(o)||/^(INGRESAN?|SALEN?|PERNOCTAN?|LLEGAN?|VISITAN?)\b/.test(o))}function tv(i){const o=P=>{const L=P.match(/^([A-Za-z]{2,3})(?![A-Za-z])/);if(!L)return null;const T=L[1].toUpperCase();return hd[T]?{nombre:hd[T],largo:L[1].length}:null};let l=i.replace(/^\s+/,"");const d=o(l);if(!d)return{funcionarios:[],titulo:i.trim()};const m=[d.nombre];for(l=l.slice(d.largo);;){const P=l.match(/^(\s*(?:y|,|\/|-|–|&|;)\s*|\s+)/i);if(!P)break;const L=l.slice(P[0].length),T=o(L);if(!T)break;m.includes(T.nombre)||m.push(T.nombre),l=L.slice(T.largo)}const p=l.replace(/^\s*[:\-–]?\s*/,"").replace(/^(?:y|e|&|,|;)\s+/i,"").trim();return{funcionarios:m,titulo:p}}function av(i){const o=[];for(const l of i){const d=o[o.length-1];if(d!==void 0&&/^[a-záéíóúñ]/.test(l)){const m=d.split(/\s+/).pop()||"";if(m.length===1&&/^[a-záéíóúñ]$/.test(m)){o[o.length-1]=d+l;continue}}o.push(l)}return o}function rv(i){const o=new Map;let l=0,d=0,m="";for(const P of i.split(/\r?\n/)){const L=P.trim();if(!L||W1.has(L)||/^_+$/.test(L)||L==="De"||/^Pestaña\s+\d+$/i.test(L))continue;const T=L.match(/^([A-ZÁÉÍÓÚÑ]+) 2026$/);if(T&&vd[T[1]]){l=vd[T[1]],d=0,m="";continue}if(/^\d{1,2}$/.test(L)){d=Number(L),m="";continue}const k=X1(L);if(k){m=k;continue}if(!l||!d||!m)continue;const A=`${l}-${d}-${m}`;o.has(A)||o.set(A,{mes:l,dia:d,sitio:m,textos:[]}),o.get(A).textos.push(L)}const p=[];for(const P of o.values()){const L=`2026-${String(P.mes).padStart(2,"0")}-${String(P.dia).padStart(2,"0")}`;let T=[],k=0;for(const A of av(P.textos)){const{funcionarios:N,titulo:C}=tv(A);if(!C)continue;let w;N.length?(w=N,T=N):nv(A)?w=[]:T.length?w=T:w=[],p.push({id:`plan2026-${L}-${P.sitio}-${k++}`,titulo:C,categoria:"Otra actividad",inicio:L,fin:L,unDia:!0,horaInicio:"08:00",horaFin:"16:00",funcionarios:w,otrosParticipantes:ev(A),lugar:H1[P.sitio],observaciones:"",viatico:!1})}}return p}function Ld(i){return typeof(i==null?void 0:i.id)=="string"&&i.id.startsWith("plan2026-")}function iv(i,o,l){const d=(i||[]).filter(p=>!(Ld(p)&&(p.inicio||"")>=l)),m=(o||[]).filter(p=>Ld(p)&&(p.inicio||"")>=l);return[...d,...m]}async function ov(){const i=rv(K1);if(!i.length)throw new Error("La planificación 2026 no produjo actividades válidas.");return[...i,...$1]}const As="btmm:planificacion2026:version",sv="btmm:planificacion2026:importada:v3";function lv(){const{setActividadesPlan:i}=rr();return S.useEffect(()=>{let o=!1,l=null,d=null;try{l=window.localStorage.getItem(As),d=window.localStorage.getItem(sv)}catch{}if(l!==bs){if(!l&&d==="1"){try{window.localStorage.setItem(As,bs)}catch{}return}return(async()=>{try{const m=await ov();if(o)return;const p=l==null?"":Ws();i(P=>iv(P,m,p));try{window.localStorage.setItem(As,bs)}catch{}}catch(m){console.error("No fue posible sincronizar PLANIFICACION BTMM 2026",m)}})(),()=>{o=!0}}},[i]),null}const gd={flat:"bg-surface",inset:"bg-surface-inset",elevated:"border border-line bg-surface shadow-sm",interactive:"border border-line bg-surface transition-colors hover:border-line-strong hover:bg-surface-alt"};function sa({title:i,icon:o,action:l,children:d,collapsible:m=!1,defaultOpen:p=!1,variant:P="flat",className:L="",ariaLabel:T}){const[k,A]=S.useState(p),N=!m||k;return u.jsxs("div",{className:`pnlq-card rounded-lg p-4 ${gd[P]??gd.flat} ${L}`,children:[u.jsxs("div",{className:`pnlq-card-header flex flex-wrap items-center justify-between gap-3 ${N?"mb-3":""}`,children:[m?u.jsxs("button",{type:"button",onClick:()=>A(C=>!C),"aria-expanded":k,"aria-label":T,className:"flex min-h-touch flex-1 items-center gap-2 text-left text-base font-semibold text-ink hover:text-brand",children:[u.jsx(cn,{name:k?"chevronDown":"chevronRight",size:18,className:"shrink-0 text-ink-subtle"}),u.jsx("span",{children:o}),i]}):u.jsxs("div",{className:"flex items-center gap-2 text-base font-semibold text-ink",children:[u.jsx("span",{children:o}),i]}),l]}),N&&d]})}function Lt({children:i,className:o="",bordered:l=!1}){return u.jsx("span",{className:`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${l?"border":""} ${o}`,children:i})}function uv(i){return i.split(" ").slice(0,2).map(o=>o[0]).join("").toUpperCase()}function cv(i){return["bg-emerald-700 text-white","bg-sky-700 text-white","bg-rose-700 text-white","bg-amber-700 text-white","bg-purple-700 text-white"][i.charCodeAt(0)%5]}function oh(i){return{Activo:"bg-emerald-100 text-emerald-900 border-emerald-200","De vacaciones":"bg-sky-100 text-sky-900 border-sky-200",Incapacitado:"bg-red-100 text-red-900 border-red-200",Inactivo:"bg-slate-100 text-slate-700 border-slate-200"}[i]||"bg-slate-100 text-slate-700 border-slate-200"}function Pd(i,o){const l=String(i||"").toUpperCase();return o&&!l?"bg-slate-600 text-white border-slate-700":l.startsWith("T")?"bg-emerald-700 text-white border-emerald-800":l.startsWith("I")?"bg-rose-700    text-white border-rose-800":l.startsWith("V")?"bg-sky-700     text-white border-sky-800":l.startsWith("L")?"bg-amber-700   text-white border-amber-800":l.startsWith("O")?"bg-violet-700  text-white border-violet-800":l?o?"bg-slate-600 text-white border-slate-700":"bg-emerald-700 text-white border-emerald-800":o?"bg-slate-600 text-white border-slate-700":"bg-slate-400 text-white border-slate-500"}function Li({name:i}){return u.jsx("div",{className:`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${cv(i)}`,children:uv(i)})}const yd={half:"h-[60vh]",full:"max-h-[92vh]"};function Xs({open:i,onClose:o,title:l,snapPoint:d="full",children:m}){const p=S.useRef(null),P=S.useRef({startY:0,dragging:!1});S.useEffect(()=>{if(!i)return;const A=N=>{N.key==="Escape"&&o()};return document.addEventListener("keydown",A),()=>document.removeEventListener("keydown",A)},[i,o]),S.useEffect(()=>(i?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[i]);const L=S.useCallback(A=>{P.current={startY:A.touches[0].clientY,dragging:!0}},[]),T=S.useCallback(A=>{if(!P.current.dragging)return;const N=A.touches[0].clientY-P.current.startY;N>0&&p.current&&(p.current.style.transform=`translateY(${N}px)`)},[]),k=S.useCallback(A=>{if(!P.current.dragging)return;const N=A.changedTouches[0].clientY-P.current.startY;P.current.dragging=!1,p.current&&(p.current.style.transform=""),N>80&&o()},[o]);return typeof document>"u"?null:gm.createPortal(u.jsxs(u.Fragment,{children:[u.jsx("div",{"aria-hidden":"true",onClick:o,className:["fixed inset-0 z-40 bg-black/50 transition-opacity duration-300",i?"opacity-100":"pointer-events-none opacity-0"].join(" ")}),u.jsxs("div",{ref:p,role:"dialog","aria-modal":"true","aria-label":l,className:["fixed inset-x-0 bottom-0 z-50 flex flex-col rounded-t-2xl bg-surface text-ink shadow-2xl","transition-transform duration-300 ease-out",yd[d]??yd.full,i?"translate-y-0":"translate-y-full"].join(" "),children:[u.jsx("div",{className:"flex cursor-grab touch-none items-center justify-center pb-1 pt-3",onTouchStart:L,onTouchMove:T,onTouchEnd:k,"aria-hidden":"true",children:u.jsx("span",{className:"h-1.5 w-10 rounded-full bg-line"})}),l&&u.jsxs("div",{className:"flex items-center justify-between border-b border-line px-5 pb-3 pt-1",children:[u.jsx("h2",{className:"text-base font-semibold text-ink",children:l}),u.jsx("button",{type:"button",onClick:o,"aria-label":"Cerrar",className:"inline-flex min-h-touch min-w-touch items-center justify-center rounded-full text-ink-muted hover:bg-surface-alt hover:text-ink",children:u.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",children:u.jsx("path",{d:"M18 6 6 18M6 6l12 12"})})})]}),u.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-8 pt-4",children:m})]})]}),document.body)}function xm(i,o,l,d,m){return`${i}-${o+1}-${l}-${d}-${m}`}function dv(i,o,l,d){return`CFG-${i}-${o+1}-${l}-${d}`}function ir(i){const o=String(i||"10x5").toLowerCase();if(o.includes("administrativo"))return{trabajo:5,libre:2,administrativo:!0};const l=o.split("x");return{trabajo:Number(l[0])||10,libre:Number(l[1])||5,administrativo:!1}}function mv(i,o,l,d,m){const p=ir(i);if(p.administrativo){const T=new Date(d,m,o).getDay();return T>=1&&T<=5?`T${T}`:T===6?"L1":"L2"}const P=p.trabajo+p.libre,L=(o-l)%P;return o<l?"":L<p.trabajo?`T${L+1}`:`L${L-p.trabajo+1}`}function Si(i){return String(i||"").toUpperCase().startsWith("T")}function fv(i){const o=String(i||"").toUpperCase();return o.startsWith("T")?"Turno":o.startsWith("L")?"Libre":o.startsWith("V")?"Vacaciones":o.startsWith("I")?"Incapacidad":o.startsWith("O")?"Otro":o?"Turno":"Sin marcar"}function Ci(i){const o=String(i||"").toUpperCase();return o.startsWith("T")?"T":o.startsWith("L")?"L":o.startsWith("V")?"V":o.startsWith("I")?"I":o.startsWith("O")?"O":""}function pv(i,o,l){const d=String(i||"").toUpperCase();if(!d)return"";const m=ir(l);return d==="T"?`T${(o-1)%m.trabajo+1}`:d==="L"?`L${(o-1)%m.libre+1}`:`${d}${o}`}function el(i,o){return i.find(l=>l.nombre===o)}function Sm(i,o,l,d,m){const p=el(i,m);return p&&(o[dv(l,d,p.puestoOperativo||"Puesto Quetzales",m)]||p.modalidad)||"10x5"}function or(i,o,l,d,m,p,P=null){const L=el(i,m);if(!L)return"";const T=L.puestoOperativo||"Puesto Quetzales",k=QT(l,d,P);return o[xm(l,d,T,m,p)]??mv(Sm(i,o,l,d,m),p,k,l,d)}function Tv({roleData:i,personas:o,year:l,month:d,persona:m,dia:p,categoria:P,feriados:L=null}){const T=el(o,m),k=(T==null?void 0:T.puestoOperativo)||"Puesto Quetzales",A=Sm(o,i,l,d,m),N=Array.from({length:Dd(l,d)},(b,U)=>U+1),C={};for(const b of N)C[b]=Ci(or(o,i,l,d,m,b,L));C[p]=P;const w=hv({days:N,categorias:C,modalidad:A}),I={};for(const b of N)I[xm(l,d,k,m,b)]=w[b];return I}function sh(i,o){const l=ir(o);if(l.administrativo)return null;const d=String(i||"").toUpperCase(),m=/^T(\d+)$/.exec(d);if(m){const P=Number(m[1]);return P>=1&&P<=l.trabajo?P-1:null}const p=/^L(\d+)$/.exec(d);if(p){const P=Number(p[1]);return P>=1&&P<=l.libre?l.trabajo+P-1:null}return null}function vv(i,o){const l=ir(o),d=l.trabajo+l.libre,m=(i%d+d)%d|0;return m<l.trabajo?`T${m+1}`:`L${m-l.trabajo+1}`}function lh({modalidad:i,desde:o,hasta:l,posInicial:d=0}){const m=ir(i),p=[],P=new Date(l.year,l.month,l.day),L=new Date(o.year,o.month,o.day);let T=0;for(;L<=P;){const k=L.getFullYear(),A=L.getMonth(),N=L.getDate();let C;if(m.administrativo){const w=L.getDay();C=w>=1&&w<=5?`T${w}`:w===6?"L1":"L2"}else C=vv(d+T,i);p.push({year:k,month:A,day:N,valor:C}),L.setDate(L.getDate()+1),T+=1}return p}function Md(i){return String(i).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function uh(i,o,l){if(!i)return null;const d=new RegExp(`^(\\d+)-(\\d+)-${Md(o)}-${Md(l)}-(\\d+)$`);let m=null,p=-1;for(const P of Object.keys(i)){const L=i[P];if(L==null||L==="")continue;const T=d.exec(P);if(!T)continue;const k=Number(T[1]),A=Number(T[2])-1,N=Number(T[3]),C=k*1e4+A*100+N;C>p&&(p=C,m={year:k,month:A,day:N})}return m}function hv({days:i,categorias:o,modalidad:l}){const d={};let m=null,p=0;return i.forEach(P=>{const L=o[P]||"";if(!L){m=null,p=0,d[P]="";return}L!==m?(m=L,p=1):p+=1,d[P]=pv(L,p,l)}),d}const ch=["Administrador de ASP","Guardaparques","Asistente Administrativo","Técnico en Recursos Naturales","Personal Apoyo ONG-Invest-Volunt"],dh=["Activo","Inactivo","De vacaciones","Incapacitado"],mh=["Propiedad","Interino","ONG-Invest-Volunt"],fh=["Horario administrativo L-V","10x5","12x6","14x7","16x8","20x10"],Ed=[...ua,"Secretaría Ejecutiva/Dirección ACC"],zs="Atención rutinaria de visitantes",Lv=[zs];function Qs(i,o){return i.filter(l=>o>=l.inicio&&o<=(l.fin||l.inicio))}function gv(i,o,l,d,m,p,P=null){return(i.funcionarios||[]).filter(L=>!Si(or(m,p,l,d,L,o,P)))}function Pv({onSwipeLeft:i,onSwipeRight:o,threshold:l=60,restraint:d=80,allowedTime:m=600}={}){const p=S.useRef(null);return S.useEffect(()=>{const P=p.current;if(!P)return;let L=0,T=0,k=0,A=!1;const N=w=>{var U;const I=(U=w.changedTouches)==null?void 0:U[0];if(!I)return;const b=w.target instanceof Element?w.target:null;A=!!(b!=null&&b.closest('button, a, input, select, textarea, [role="button"], [data-swipe-ignore], table, .overflow-x-auto, .overflow-auto'))||I.clientX<24||I.clientX>window.innerWidth-24,L=I.clientX,T=I.clientY,k=Date.now()},C=w=>{var ee;const I=(ee=w.changedTouches)==null?void 0:ee[0];if(!I||A)return;const b=I.clientX-L,U=I.clientY-T;Date.now()-k>m||Math.abs(b)<l||Math.abs(U)>d||Math.abs(b)<=Math.abs(U)*1.2||(b<0?i==null||i():o==null||o())};return P.addEventListener("touchstart",N,{passive:!0}),P.addEventListener("touchend",C,{passive:!0}),()=>{P.removeEventListener("touchstart",N),P.removeEventListener("touchend",C)}},[i,o,l,d,m]),p}const Nd="(max-width: 767px)";function Vm(){const[i,o]=S.useState(()=>typeof window<"u"?window.matchMedia(Nd).matches:!1);return S.useEffect(()=>{const l=window.matchMedia(Nd),d=m=>o(m.matches);return l.addEventListener("change",d),()=>l.removeEventListener("change",d)},[]),i}const bm={2025:[{fecha:"2025-01-01",nombre:"Año Nuevo",obligatorio:!0},{fecha:"2025-04-11",nombre:"Juan Santamaría (trasladado a viernes)",obligatorio:!0},{fecha:"2025-04-17",nombre:"Jueves Santo",obligatorio:!0},{fecha:"2025-04-18",nombre:"Viernes Santo",obligatorio:!0},{fecha:"2025-05-01",nombre:"Día del Trabajo",obligatorio:!0},{fecha:"2025-07-25",nombre:"Anexión del Partido de Nicoya",obligatorio:!1},{fecha:"2025-08-02",nombre:"Virgen de los Ángeles",obligatorio:!0},{fecha:"2025-08-15",nombre:"Día de la Madre",obligatorio:!0},{fecha:"2025-09-15",nombre:"Independencia",obligatorio:!0},{fecha:"2025-12-01",nombre:"Abolición del Ejército",obligatorio:!0},{fecha:"2025-12-25",nombre:"Navidad",obligatorio:!0}],2026:[{fecha:"2026-01-01",nombre:"Año Nuevo",obligatorio:!0},{fecha:"2026-04-02",nombre:"Jueves Santo",obligatorio:!0},{fecha:"2026-04-03",nombre:"Viernes Santo",obligatorio:!0},{fecha:"2026-04-13",nombre:"Juan Santamaría (trasladado a lunes)",obligatorio:!0},{fecha:"2026-05-01",nombre:"Día del Trabajo",obligatorio:!0},{fecha:"2026-07-27",nombre:"Anexión del Partido de Nicoya (trasladado)",obligatorio:!1},{fecha:"2026-08-02",nombre:"Virgen de los Ángeles",obligatorio:!0},{fecha:"2026-08-17",nombre:"Día de la Madre (trasladado a lunes)",obligatorio:!0},{fecha:"2026-09-14",nombre:"Independencia (trasladado a lunes)",obligatorio:!0},{fecha:"2026-11-30",nombre:"Abolición del Ejército (trasladado a lunes)",obligatorio:!0},{fecha:"2026-12-25",nombre:"Navidad",obligatorio:!0}],2027:[{fecha:"2027-01-01",nombre:"Año Nuevo",obligatorio:!0},{fecha:"2027-03-25",nombre:"Jueves Santo",obligatorio:!0},{fecha:"2027-03-26",nombre:"Viernes Santo",obligatorio:!0},{fecha:"2027-04-12",nombre:"Juan Santamaría (trasladado a lunes)",obligatorio:!0},{fecha:"2027-05-01",nombre:"Día del Trabajo",obligatorio:!0},{fecha:"2027-07-26",nombre:"Anexión del Partido de Nicoya (trasladado)",obligatorio:!1},{fecha:"2027-08-02",nombre:"Virgen de los Ángeles",obligatorio:!0},{fecha:"2027-08-16",nombre:"Día de la Madre (trasladado a lunes)",obligatorio:!0},{fecha:"2027-09-13",nombre:"Independencia (trasladado a lunes)",obligatorio:!0},{fecha:"2027-11-29",nombre:"Abolición del Ejército (trasladado a lunes)",obligatorio:!0},{fecha:"2027-12-25",nombre:"Navidad",obligatorio:!0}]};function yv(i,o=!1){const l=bm[i]||[];return new Set(l.filter(d=>o||d.obligatorio).map(d=>d.fecha))}function ph(i){return Object.prototype.hasOwnProperty.call(bm,String(i))}function Mv(i,o){return o!=null&&o.aplicarFeriadosEnPrimerDiaLaboral?yv(i,!1):null}function nl(i){const{reglas:o}=rr();return S.useMemo(()=>Mv(i,o),[i,o])}function tl(i){const o=Number(i)||0;return Number.isInteger(o)?String(o):String(Math.round(o*100)/100)}function Ev(i,o){return(i==null?void 0:i.magnitud)==="horas"?o("reposicion.horasN",{n:tl(i.horas)}):(i==null?void 0:i.magnitud)==="medioDia"?o("modalReposicion.magnitudMedioDia"):o("modalReposicion.magnitudDiaEntero")}function Th(i,o){return(i==null?void 0:i.magnitud)==="horas"?o("reposicion.horasN",{n:tl(i.horas)}):(i==null?void 0:i.magnitud)==="medioDia"?o("reposicion.magnitudCorta.medioDia"):o("reposicion.magnitudCorta.diaEntero")}function Am(i,o=8){const l=Math.round((Number(i)||0)*100)/100;if(l<=0)return"0 h";const d=l/o;return Number.isInteger(d)?d===1?"1 día":`${d} días`:l===o/2?"½ día":`${tl(l)} h`}function Nv({data:i,hj:o,cerrar:l,onModificarRol:d,onReposicion:m,onReponer:p,onEditarFecha:P}){C1(l);const L=kn(),{funcionario:T,iso:k,rol:A,saldo:N=0}=i,C=({onClick:w,tono:I,titulo:b,desc:U})=>u.jsxs("button",{type:"button",onClick:w,className:`w-full rounded-2xl border px-4 py-3 text-left shadow-sm hover:brightness-95 ${I}`,children:[u.jsx("span",{className:"block text-sm font-semibold",children:b}),u.jsx("span",{className:"mt-0.5 block text-xs opacity-80",children:U})]});return u.jsx("div",{className:"fixed inset-0 z-[60] flex items-end justify-center bg-black/50 p-0 backdrop-blur-sm md:items-center md:p-4",onClick:w=>{w.target===w.currentTarget&&l()},children:u.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":L("asignacionLibre.titulo"),className:"w-full max-w-lg overflow-hidden rounded-t-3xl bg-white shadow-2xl md:rounded-3xl",children:[u.jsxs("div",{className:"flex items-start justify-between gap-3 border-b border-slate-200 p-5",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-semibold",children:L("asignacionLibre.titulo")}),u.jsx("p",{className:"text-sm text-slate-600",children:L("asignacionLibre.sub",{funcionario:T,fecha:Wn(k),rol:fv(A)})})]}),u.jsx("button",{onClick:l,"aria-label":L("acciones.cerrar"),className:"-mr-1 inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl text-lg font-semibold text-slate-500 hover:bg-slate-100 hover:text-slate-700",children:"✕"})]}),u.jsxs("div",{className:"space-y-2 p-5",children:[u.jsx(C,{onClick:d,tono:"border-emerald-300 bg-emerald-50 text-emerald-950",titulo:L("asignacionLibre.modificarRol"),desc:L("asignacionLibre.modificarRolDesc")}),u.jsx(C,{onClick:m,tono:"border-amber-300 bg-amber-50 text-amber-950",titulo:L("asignacionLibre.reposicion"),desc:L("asignacionLibre.reposicionDesc")}),N>0&&u.jsx(C,{onClick:p,tono:"border-sky-300 bg-sky-50 text-sky-950",titulo:L("asignacionLibre.reponer",{saldo:Am(N,o)}),desc:L("asignacionLibre.reponerDesc")}),u.jsx(C,{onClick:P,tono:"border-slate-300 bg-slate-50 text-slate-800",titulo:L("asignacionLibre.editarFecha"),desc:L("asignacionLibre.editarFechaDesc")})]}),u.jsx("div",{className:"flex justify-end border-t border-slate-200 bg-slate-50 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]",children:u.jsx("button",{onClick:l,className:"rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50",children:L("acciones.cancelar")})})]})})}function Cv({participantes:i=[],onChange:o,inputClass:l}){const d=(P,L,T)=>{o(i.map((k,A)=>A===P?{...k,[L]:T}:k))},m=()=>o([...i,{nombre:"",contacto:""}]),p=P=>o(i.filter((L,T)=>T!==P));return u.jsxs("section",{className:"mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-3",children:[u.jsxs("div",{className:"flex items-center justify-between gap-3",children:[u.jsxs("div",{children:[u.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-slate-600",children:"Otros participantes"}),u.jsx("p",{className:"mt-1 text-xs text-slate-500",children:"Personas, organizaciones o grupos que no figuran en el rol institucional."})]}),u.jsx("button",{type:"button",onClick:m,className:"shrink-0 rounded-xl border border-emerald-700 bg-white px-3 py-2 text-xs font-bold text-emerald-800 hover:bg-emerald-50",children:"+ Agregar"})]}),i.length===0?u.jsx("p",{className:"mt-3 text-xs text-slate-500",children:"Sin participantes externos registrados."}):u.jsx("div",{className:"mt-3 space-y-2",children:i.map((P,L)=>u.jsxs("div",{className:"grid gap-2 rounded-xl border border-slate-200 bg-white p-2 md:grid-cols-[1fr_1fr_auto]",children:[u.jsx("input",{className:l,value:P.nombre||"",onChange:T=>d(L,"nombre",T.target.value),placeholder:"Nombre, sigla o grupo","aria-label":`Nombre de otro participante ${L+1}`}),u.jsx("input",{className:l,value:P.contacto||"",onChange:T=>d(L,"contacto",T.target.value),placeholder:"Contacto: teléfono o correo","aria-label":`Contacto de otro participante ${L+1}`}),u.jsx("button",{type:"button",onClick:()=>p(L),className:"rounded-xl border border-red-300 px-3 py-2 text-xs font-bold text-red-800 hover:bg-red-50",children:"Eliminar"})]},`${L}-${P.nombre}`))})]})}function Js({valor:i,personas:o,cerrar:l,guardar:d,eliminar:m,actividadesPlan:p=[]}){var ve,Ne,Oe;const{ref:P,titleId:L}=ym({onClose:l}),T=kn(),{roleData:k={},setRoleData:A,reposiciones:N=[],setReposiciones:C,reglas:w}=rr(),I=(w==null?void 0:w.horasJornada)??Mn,[b,U]=S.useState(()=>({...i,categoria:i.categoria||"Otra actividad",horaInicio:i.horaInicio||"08:00",horaFin:i.horaFin||"16:00",funcionarios:i.funcionarios||[],otrosParticipantes:i.otrosParticipantes||[],observaciones:i.observaciones||""})),[de,ee]=S.useState(null),[pe,Z]=S.useState(!1),H=(j,Pe)=>U(Ae=>({...Ae,[j]:Pe})),oe=Number((ve=b.inicio)==null?void 0:ve.slice(0,4)),Ee=Number((Ne=b.inicio)==null?void 0:Ne.slice(5,7))-1,Ve=Number((Oe=b.inicio)==null?void 0:Oe.slice(8,10)),be=nl(oe),he=j=>b.inicio&&Number.isFinite(oe)?or(o,k,oe,Ee,j,Ve,be):"",Ce=j=>{const Pe=he(j);return Pe&&!Si(Pe)},Le=j=>sT(N,j,I),ue="w-full min-h-touch rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100",Te=ua.map(j=>({puesto:j,items:o.filter(Pe=>Pe.puestoOperativo===j)})),me=Ed.includes(b.lugar)?b.lugar:"Otro",fe=p.some(j=>j.id===b.id),se=b.unDia?b.inicio:b.fin||b.inicio,z=j=>j.id!==b.id&&j.inicio<=se&&(j.fin||j.inicio)>=b.inicio,$=j=>p.filter(Pe=>z(Pe)&&(Pe.funcionarios||[]).includes(j)),Q=j=>{b.funcionarios.includes(j)||H("funcionarios",[...b.funcionarios,j])},v=j=>H("funcionarios",b.funcionarios.filter(Pe=>Pe!==j)),V=j=>{if(b.funcionarios.includes(j))return v(j);if(Ce(j)){ee({funcionario:j,iso:b.inicio,rol:he(j),categoria:Ci(he(j)),saldo:Le(j)});return}return Q(j)},ne=()=>{const{funcionario:j}=de;A&&A(Pe=>({...Pe,...Tv({roleData:Pe,personas:o,year:oe,month:Ee,persona:j,dia:Ve,categoria:"T",feriados:be})})),Q(j),ee(null)},re=()=>{const{funcionario:j,categoria:Pe}=de;C&&C(Ae=>[cT({reposiciones:Ae,funcionario:j,fecha:b.inicio,categoria:Pe,detalle:b.titulo||""}),...Ae]),Q(j),ee(null)},ie=()=>{const{funcionario:j}=de;if(C){const Pe={id:`c${Date.now()}`,fecha:b.inicio,magnitud:"diaEntero",horas:0};C(Ae=>dT(Ae,j,Pe,I))}v(j),ee(null)},le=T(fe?"modalActividad.editar":"modalActividad.agregar"),ge=()=>d({...b,categoria:"Otra actividad",horaInicio:b.horaInicio||"08:00",horaFin:b.horaFin||"16:00",otrosParticipantes:(b.otrosParticipantes||[]).filter(j=>{var Pe;return(Pe=j.nombre)==null?void 0:Pe.trim()}).map(j=>({nombre:j.nombre.trim(),contacto:(j.contacto||"").trim()}))});return u.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-0 backdrop-blur-sm md:items-center md:p-4",onClick:j=>{j.target===j.currentTarget&&l()},children:[u.jsxs("div",{ref:P,role:"dialog","aria-modal":"true","aria-labelledby":L,tabIndex:-1,className:"max-h-[100dvh] w-full max-w-4xl overflow-hidden rounded-none bg-white shadow-2xl outline-none md:max-h-[94dvh] md:rounded-3xl",children:[u.jsxs("div",{className:"flex items-start justify-between gap-3 border-b border-slate-200 p-5",children:[u.jsxs("div",{children:[u.jsx("h3",{id:L,className:"text-lg font-semibold",children:le}),u.jsx("p",{className:"text-sm text-slate-600",children:T("modalActividad.sub")})]}),u.jsx("button",{onClick:l,"aria-label":T("acciones.cerrar"),className:"-mr-1 inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl text-lg font-semibold text-slate-500 hover:bg-slate-100 hover:text-slate-700",children:"✕"})]}),u.jsxs("div",{className:"max-h-[72vh] overflow-y-auto p-5",children:[b.funcionarios.filter(j=>Ce(j)).length>0&&u.jsxs("div",{className:"mb-4 rounded-2xl border border-amber-300 bg-amber-50 p-3",children:[u.jsx("p",{className:"text-xs font-bold uppercase tracking-wider text-amber-800",children:T("modalActividad.libresAsignados")}),u.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:b.funcionarios.filter(j=>Ce(j)).map(j=>u.jsxs("button",{type:"button",onClick:()=>ee({funcionario:j,iso:b.inicio,rol:he(j),categoria:Ci(he(j)),saldo:Le(j)}),className:"inline-flex items-center gap-1 rounded-xl border border-amber-400 bg-white px-3 py-1.5 text-xs font-bold text-amber-900 hover:bg-amber-100",children:[j," · ",T("modalActividad.resolver")]},j))})]}),u.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[u.jsxs("label",{className:"md:col-span-2",children:[u.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:T("modalActividad.titulo")}),u.jsxs("div",{className:"grid gap-2 md:grid-cols-[260px_1fr]",children:[u.jsxs("select",{className:ue,value:b.titulo===zs?zs:"Otra",onChange:j=>H("titulo",j.target.value==="Otra"?"":j.target.value),children:[Lv.map(j=>u.jsx("option",{value:j,children:j},j)),u.jsx("option",{value:"Otra",children:T("modalActividad.otra")})]}),u.jsx("input",{className:ue,value:b.titulo,onChange:j=>H("titulo",j.target.value),placeholder:T("modalActividad.placeholderTitulo")})]})]}),u.jsxs("label",{children:[u.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:"Categoría"}),u.jsx("input",{className:ue+" bg-slate-100",value:"Otra actividad",readOnly:!0})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[u.jsxs("label",{children:[u.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:"Hora inicio"}),u.jsx("input",{type:"time",className:ue,value:b.horaInicio,onChange:j=>H("horaInicio",j.target.value)})]}),u.jsxs("label",{children:[u.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:"Hora final"}),u.jsx("input",{type:"time",className:ue,value:b.horaFin,onChange:j=>H("horaFin",j.target.value)})]})]}),u.jsxs("label",{children:[u.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:T("modalActividad.fechaInicio")}),u.jsx("input",{type:"date",className:ue+" [color-scheme:light] dark:[color-scheme:dark]",value:b.inicio,onChange:j=>H("inicio",j.target.value)})]}),u.jsxs("label",{children:[u.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:T("modalActividad.fechaFinal")}),u.jsx("input",{type:"date",className:ue+" [color-scheme:light] dark:[color-scheme:dark]",value:b.unDia?b.inicio:b.fin,disabled:b.unDia,onChange:j=>H("fin",j.target.value)})]}),u.jsxs("label",{className:"flex items-center gap-2 rounded-xl border border-slate-300 p-3 text-sm font-semibold",children:[u.jsx("input",{type:"checkbox",checked:b.unDia,onChange:j=>U(Pe=>({...Pe,unDia:j.target.checked,fin:j.target.checked?Pe.inicio:Pe.fin}))}),T("modalActividad.unDia")]}),u.jsxs("label",{className:"flex items-center gap-2 rounded-xl border border-orange-300 bg-orange-50 p-3 text-sm font-semibold text-orange-950",children:[u.jsx("input",{type:"checkbox",checked:b.viatico,onChange:j=>H("viatico",j.target.checked)}),T("modalActividad.requiereViatico")]}),u.jsxs("label",{className:"md:col-span-2",children:[u.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:T("modalActividad.lugar")}),u.jsxs("div",{className:"grid gap-2",children:[u.jsxs("select",{className:ue,value:me,onChange:j=>H("lugar",j.target.value==="Otro"?"":j.target.value),children:[Ed.map(j=>u.jsx("option",{value:j,children:j},j)),u.jsx("option",{value:"Otro",children:T("modalActividad.otro")})]}),me==="Otro"&&u.jsx("input",{className:ue,value:b.lugar,onChange:j=>H("lugar",j.target.value),placeholder:T("modalActividad.placeholderLugar")})]})]})]}),u.jsxs("div",{className:"mt-5",children:[u.jsxs("div",{className:"mb-2 flex flex-wrap items-center justify-between gap-2",children:[u.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-slate-500",children:T("modalActividad.participantes")}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsxs("label",{className:"flex items-center gap-1.5 rounded-full border border-sky-300 bg-sky-50 px-2.5 py-1 text-[11px] font-bold text-sky-900",children:[u.jsx("input",{type:"checkbox",checked:pe,onChange:j=>Z(j.target.checked)}),T("modalActividad.soloSaldo")]}),u.jsx(Lt,{className:"border-emerald-200 bg-emerald-100 text-emerald-900",children:T("modalActividad.seleccionados",{n:b.funcionarios.length})})]})]}),u.jsx("div",{className:"grid gap-3 md:grid-cols-3",children:Te.map(j=>{const Pe=pe?j.items.filter(Ae=>Le(Ae.nombre)>0):j.items;return pe&&Pe.length===0?null:u.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-slate-50 p-3",children:[u.jsx("div",{className:"mb-2 text-xs font-bold uppercase tracking-wider text-slate-500",children:j.puesto}),u.jsx("div",{className:"space-y-1.5",children:Pe.map(Ae=>{const zn=$(Ae.nombre),Zn=b.funcionarios.includes(Ae.nombre);return u.jsxs("div",{className:`rounded-xl border px-2 py-2 text-xs font-bold ${Zn?"border-emerald-300 bg-emerald-100 text-emerald-950":zn.length?"border-yellow-300 bg-yellow-50 text-yellow-950":"border-slate-200 bg-white text-slate-700"}`,children:[u.jsxs("label",{className:"flex items-center gap-2",children:[u.jsx("input",{type:"checkbox",checked:Zn,onChange:()=>V(Ae.nombre)}),Ae.nombre]}),(Ce(Ae.nombre)||Le(Ae.nombre)>0)&&u.jsxs("div",{className:"mt-1 flex flex-wrap gap-1",children:[!Zn&&Ce(Ae.nombre)&&u.jsx("span",{className:"rounded-full border border-amber-300 bg-amber-100 px-1.5 py-0.5 text-[10px] font-bold text-amber-900",children:T("modalActividad.diaLibre")}),Le(Ae.nombre)>0&&u.jsx("span",{className:"rounded-full border border-sky-300 bg-sky-100 px-1.5 py-0.5 text-[10px] font-bold text-sky-900",children:T("modalActividad.saldoFavorMonto",{saldo:Am(Le(Ae.nombre),I)})})]}),zn.length>0&&u.jsxs("div",{className:"mt-2 rounded-lg border border-yellow-300 bg-yellow-100 p-2 text-[11px] leading-snug text-yellow-950",children:[u.jsx("div",{className:"font-bold",children:T("modalActividad.avisoTraslape")}),u.jsx("div",{className:"mt-1 font-bold",children:zn.map(yt=>yt.titulo).join(" · ")}),u.jsx("button",{type:"button",onClick:()=>Q(Ae.nombre),className:"mt-2 rounded-lg bg-yellow-700 px-2 py-1 text-[10px] font-bold text-white hover:bg-yellow-800",children:T("modalActividad.agregarAunAsi")})]})]},Ae.id)})})]},j.puesto)})})]}),u.jsx(Cv,{participantes:b.otrosParticipantes,onChange:j=>H("otrosParticipantes",j),inputClass:ue}),u.jsxs("label",{className:"mt-5 block",children:[u.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:T("modalActividad.obs")}),u.jsx("textarea",{className:`${ue} min-h-24`,value:b.observaciones,onChange:j=>H("observaciones",j.target.value),placeholder:T("modalActividad.placeholderObs")})]})]}),u.jsxs("div",{className:"flex flex-wrap justify-between gap-2 border-t border-slate-200 bg-slate-50 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]",children:[u.jsx("div",{children:fe&&u.jsx("button",{onClick:()=>m(b.id),className:"rounded-xl border border-red-300 bg-white px-4 py-2 text-sm font-semibold text-red-800 hover:bg-red-50",children:T("acciones.eliminar")})}),u.jsxs("div",{className:"flex gap-2",children:[u.jsx("button",{onClick:l,className:"rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50",children:T("acciones.cancelar")}),u.jsx("button",{onClick:ge,className:"rounded-xl bg-emerald-800 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700",children:T("modalActividad.guardarActividad")})]})]})]}),de&&u.jsx(Nv,{data:de,hj:I,cerrar:()=>ee(null),onModificarRol:ne,onReposicion:re,onReponer:ie,onEditarFecha:()=>ee(null)})]})}function gi({label:i}){const[o,...l]=String(i).split(" ");return l.length===0?i:u.jsxs(u.Fragment,{children:[o,u.jsx("br",{className:"sm:hidden"}),u.jsx("span",{className:"hidden sm:inline",children:" "}),l.join(" ")]})}function ws({label:i,n:o,children:l,defaultOpen:d=!1}){const[m,p]=S.useState(d);return u.jsxs("div",{children:[u.jsxs("button",{type:"button",onClick:()=>p(P=>!P),"aria-expanded":m,className:"mb-1.5 flex w-full items-center gap-2 text-left active:scale-95",children:[u.jsx(cn,{name:m?"chevronDown":"chevronRight",size:14,className:"shrink-0 text-ink-subtle"}),u.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider text-ink-muted",children:i}),u.jsx("span",{className:"rounded-full bg-surface-alt px-2 py-0.5 text-[10px] font-semibold text-ink-muted",children:o}),u.jsx("span",{className:"h-px flex-1 bg-line/50"})]}),m&&l]})}function ks({trabajada:i,reposicion:o,t:l}){return!i&&!o?null:u.jsxs(u.Fragment,{children:[i&&u.jsxs(Lt,{className:"border-amber-300 bg-amber-100 text-amber-900",children:["⚑ ",i.folio," · ",Ev(i,l)," · ",l(`reposicion.estado.${i.estadoCalc||"Pendiente"}`).toLowerCase()]}),o&&u.jsxs(Lt,{className:"border-sky-300 bg-sky-100 text-sky-900",children:["⟲ ",o.folio," · ",l("reposicion.marca.reposicionDe",{fecha:Wn(o.fecha)})]})]})}function xv({diaVista:i,setDiaVista:o,personas:l,actividadesPlan:d,setActividadesPlan:m,roleData:p,reposiciones:P=[],hj:L}){const T=kn(),k=Vm(),{trabajadas:A,reposiciones:N}=rT(P,L),C=x=>({trabajada:A[`${x}|${i}`],reposicion:N[`${x}|${i}`]}),[w,I]=S.useState(null),[b,U]=S.useState("general"),[de,ee]=S.useState(""),[pe,Z,H]=i.split("-").map(Number),oe=Z-1,Ee=nl(pe),Ve=l.filter(x=>x.estado!=="Inactivo"),be=[0,6].includes(new Date(i+"T12:00:00").getDay()),he=M1[new Date(i+"T12:00:00").getDay()],Ce=Ve.map(x=>{const O=or(l,p,pe,oe,x.nombre,H,Ee),X=Ci(O),xe=Si(O),en=Qs(d,i).filter(Mt=>(Mt.funcionarios||[]).includes(x.nombre));return{...x,rol:O,cat:X,enTurno:xe,acts:en,tieneActividad:en.length>0,tieneViatico:en.some(Mt=>Mt.viatico)}}),Le=Ce.filter(x=>x.enTurno&&x.tieneActividad),ue=Ce.filter(x=>x.enTurno&&!x.tieneActividad),Te=Ce.filter(x=>!x.enTurno),me=Ce.filter(x=>x.tieneViatico),fe=(x,O)=>String(x||"").localeCompare(String(O||""),"es-CR",{sensitivity:"base"}),se=new Map(Ve.map(x=>[x.nombre,x])),z=Qs(d,i).map(x=>({...x,funcionarios:[...x.funcionarios||[]].sort(fe)})).sort((x,O)=>fe(x.funcionarios[0]||"￿",O.funcionarios[0]||"￿")||fe(x.titulo,O.titulo)),$=[...new Set(z.flatMap(x=>x.funcionarios))].sort(fe),Q=[...new Set($.map(x=>{var O;return(O=se.get(x))==null?void 0:O.puestoOperativo}).filter(Boolean))].sort(fe),v=b==="funcionario"?$:b==="puesto"?Q:[],V=v.includes(de)?de:v[0]||"",ne=z.filter(x=>b==="funcionario"?x.funcionarios.includes(V):b==="puesto"?x.funcionarios.some(O=>{var X;return((X=se.get(O))==null?void 0:X.puestoOperativo)===V}):!0),re=ua.map(x=>{const O=Ce.filter(xe=>(xe.puestoOperativo||"")===x),X=O.filter(xe=>xe.enTurno);return{puesto:x,fuera:O.length-X.length,turno:X.length,conActividad:X.filter(xe=>xe.tieneActividad).length,sinActividad:X.filter(xe=>!xe.tieneActividad).length}}),ie=re.reduce((x,O)=>({fuera:x.fuera+O.fuera,turno:x.turno+O.turno,conActividad:x.conActividad+O.conActividad,sinActividad:x.sinActividad+O.sinActividad}),{fuera:0,turno:0,conActividad:0,sinActividad:0}),le={L:"Libre",V:"Vacaciones",I:"Incapacidad",O:"Otro","":"Sin marcar"},ge={L:"border-amber-700 bg-amber-700 text-white",V:"border-sky-700 bg-sky-700 text-white",I:"border-red-700 bg-red-700 text-white",O:"border-violet-700 bg-violet-700 text-white","":"border-slate-500 bg-slate-500 text-white"},ve=Te.reduce((x,O)=>{const X=O.cat||"";return x[X]||(x[X]=[]),x[X].push(O),x},{}),Ne=x=>{const O=ua.map(xe=>({key:xe,label:xe.replace("Puesto ",""),items:x.filter(en=>(en.puestoOperativo||"")===xe)})),X=x.filter(xe=>!ua.includes(xe.puestoOperativo||""));return X.length&&O.push({key:"__sin__",label:T("funcionarios.sinPuesto"),items:X}),O.filter(xe=>xe.items.length>0)},Oe=x=>{const O=new Date(i+"T12:00:00");O.setDate(O.getDate()+x),o(`${O.getFullYear()}-${On(O.getMonth()+1)}-${On(O.getDate())}`)},j=x=>{if(!x.titulo.trim())return;const O={...x,fin:x.unDia?x.inicio:x.fin||x.inicio};O.fin<O.inicio&&(O.fin=O.inicio),m(X=>X.some(xe=>xe.id===O.id)?X.map(xe=>xe.id===O.id?O:xe):[...X,O]),I(null)},Pe=x=>{m(O=>O.filter(X=>X.id!==x)),I(null)},Ae=(x=[],O="")=>({id:`a${Date.now()}`,titulo:"",inicio:i,fin:i,unDia:!0,funcionarios:x,lugar:O,observaciones:"",viatico:!1}),zn=Pv({onSwipeLeft:()=>Oe(1),onSwipeRight:()=>Oe(-1)}),Zn=w&&d.some(x=>x.id===w.id)?T("dia.editarActividad",{defaultValue:"Editar actividad"}):T("dia.nuevaActividad",{defaultValue:"Nueva actividad"}),yt=w?u.jsx(Js,{valor:w,personas:Ve,cerrar:()=>I(null),guardar:j,eliminar:Pe,actividadesPlan:d}):null;return u.jsxs("section",{ref:zn,className:"space-y-4",children:[u.jsxs("div",{className:"flex items-center gap-2 rounded-lg border border-line bg-surface p-2 sm:gap-3 sm:p-3",children:[u.jsx("button",{onClick:()=>Oe(-1),"aria-label":T("dia.diaAnterior"),className:"inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl border border-line bg-surface text-ink-muted transition-colors hover:bg-surface-alt active:scale-95",children:u.jsx(cn,{name:"chevronLeft",size:20})}),u.jsxs("div",{className:"flex min-w-0 flex-1 flex-col items-center gap-0.5",children:[u.jsxs("span",{className:"truncate text-[10px] font-semibold uppercase tracking-wider text-ink-muted sm:text-xs",children:[he," · ",hm[oe]," ",pe]}),u.jsx("input",{type:"date",value:i,onChange:x=>x.target.value&&o(x.target.value),"aria-label":T("dia.seleccionarFecha"),className:"min-h-touch w-full max-w-[13rem] rounded-xl border border-line bg-surface px-2 py-1 text-center text-sm font-semibold text-ink outline-none focus:border-brand [color-scheme:light] dark:[color-scheme:dark]"})]}),u.jsx("button",{onClick:()=>Oe(1),"aria-label":T("dia.diaSiguiente"),className:"inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl border border-line bg-surface text-ink-muted transition-colors hover:bg-surface-alt active:scale-95",children:u.jsx(cn,{name:"chevronRight",size:20})})]}),u.jsxs("div",{className:"grid gap-4 md:grid-cols-[minmax(19rem,0.85fr)_minmax(0,1.25fr)] md:items-start xl:grid-cols-[minmax(24rem,0.8fr)_minmax(0,1.4fr)]",children:[u.jsx(sa,{title:T("dia.porPuesto"),icon:"📍",children:u.jsx("div",{className:"overflow-hidden rounded-lg border border-line",children:u.jsxs("table",{className:"w-full table-fixed border-collapse text-sm",children:[u.jsx("thead",{className:"bg-surface-alt text-[9px] uppercase leading-[1.15] tracking-tight text-ink-muted sm:text-[11px] sm:tracking-wide",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"w-[26%] px-1.5 py-2 text-left sm:px-3 sm:py-3",children:T("dia.th.puesto")}),u.jsx("th",{scope:"col",className:"px-0 py-2 text-center sm:px-3 sm:py-3",children:u.jsx(gi,{label:T("dia.th.fuera")})}),u.jsx("th",{scope:"col",className:"px-0 py-2 text-center sm:px-3 sm:py-3",children:u.jsx(gi,{label:T("dia.th.enTurno")})}),u.jsx("th",{scope:"col",className:"px-0 py-2 text-center sm:px-3 sm:py-3",children:u.jsx(gi,{label:T("dia.th.conActividad")})}),u.jsx("th",{scope:"col",className:"px-0 py-2 text-center sm:px-3 sm:py-3",children:u.jsx(gi,{label:T("dia.th.sinActividad")})})]})}),u.jsx("tbody",{className:"divide-y divide-line",children:re.map(({puesto:x,fuera:O,turno:X,conActividad:xe,sinActividad:en})=>u.jsxs("tr",{className:"hover:bg-surface-alt",children:[u.jsx("th",{scope:"row",className:"px-1.5 py-2 text-left text-[11px] font-semibold text-ink sm:px-3 sm:py-3 sm:text-sm",children:x.replace("Puesto ","")}),u.jsx("td",{className:`px-1 py-2 text-center text-base font-semibold sm:px-3 sm:py-3 sm:text-lg ${O>0?"text-ink-muted":"text-ink-subtle"}`,children:O}),u.jsx("td",{className:"px-1 py-2 text-center text-base font-semibold text-ok sm:px-3 sm:py-3 sm:text-lg",children:X}),u.jsx("td",{className:"px-1 py-2 text-center text-base font-semibold text-info sm:px-3 sm:py-3 sm:text-lg",children:xe}),u.jsx("td",{className:`px-1 py-2 text-center text-base font-semibold sm:px-3 sm:py-3 sm:text-lg ${en>0?"text-warning":"text-ink-subtle"}`,children:en})]},x))}),u.jsx("tfoot",{children:u.jsxs("tr",{className:"border-t-2 border-line-strong bg-surface-alt",children:[u.jsx("th",{scope:"row",className:"px-1.5 py-2 text-left text-[11px] font-bold text-ink sm:px-3 sm:py-3 sm:text-sm",children:T("dia.th.total")}),u.jsx("td",{className:"px-1 py-2 text-center text-base font-bold text-ink-muted sm:px-3 sm:py-3 sm:text-lg",children:ie.fuera}),u.jsx("td",{className:"px-1 py-2 text-center text-base font-bold text-ok sm:px-3 sm:py-3 sm:text-lg",children:ie.turno}),u.jsx("td",{className:"px-1 py-2 text-center text-base font-bold text-info sm:px-3 sm:py-3 sm:text-lg",children:ie.conActividad}),u.jsx("td",{className:`px-1 py-2 text-center text-base font-bold sm:px-3 sm:py-3 sm:text-lg ${ie.sinActividad>0?"text-warning":"text-ink-subtle"}`,children:ie.sinActividad})]})})]})})}),u.jsxs(sa,{title:T("dia.actividadesTituloCorto",{n:z.length}),ariaLabel:T("dia.actividadesTitulo",{n:z.length}),icon:"🗓️",collapsible:!0,action:u.jsxs("button",{id:"dia-boton-nueva-actividad",onClick:()=>I(Ae()),className:"inline-flex min-h-touch items-center gap-1 rounded-xl bg-emerald-800 px-3 py-2 text-xs font-semibold text-white transition-all hover:bg-emerald-700 active:scale-95 active:brightness-90",children:[u.jsx(cn,{name:"plus",size:14}),T("dia.nuevaCorta")]}),children:[u.jsxs("div",{className:"mb-4 rounded-xl border border-line bg-surface-inset p-3",children:[u.jsx("div",{className:"mb-2 text-xs font-bold uppercase tracking-wide text-ink-muted",children:T("dia.filtroActividades.mostrar")}),u.jsx("div",{role:"group","aria-label":T("dia.filtroActividades.aria"),className:"grid grid-cols-3 gap-1 rounded-xl bg-surface-alt p-1",children:[["general",T("dia.filtroActividades.general")],["funcionario",T("dia.filtroActividades.funcionario")],["puesto",T("dia.filtroActividades.puesto")]].map(([x,O])=>u.jsx("button",{type:"button","aria-pressed":b===x,onClick:()=>{U(x),ee("")},className:`min-h-touch rounded-lg px-2 py-2 text-xs font-semibold transition-colors sm:text-sm ${b===x?"bg-surface text-brand shadow-sm":"text-ink-muted hover:bg-surface hover:text-ink"}`,children:O},x))}),b!=="general"&&u.jsxs("label",{className:"mt-3 block text-xs font-semibold text-ink-muted",children:[T(b==="funcionario"?"dia.filtroActividades.seleccionarFuncionario":"dia.filtroActividades.seleccionarPuesto"),u.jsx("select",{value:V,onChange:x=>ee(x.target.value),className:"mt-1 min-h-touch w-full rounded-xl border border-line bg-surface px-3 text-sm font-semibold text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20",children:v.map(x=>u.jsx("option",{value:x,children:b==="puesto"?x.replace("Puesto ",""):x},x))})]}),u.jsx("div",{"aria-live":"polite",className:"mt-2 text-xs text-ink-muted",children:T("dia.filtroActividades.resultados",{n:ne.length,total:z.length})})]}),ne.length===0?u.jsx("div",{className:"rounded-xl border border-dashed border-line p-6 text-center text-sm text-ink-muted",children:T("dia.sinActividades")}):u.jsx("div",{className:"space-y-3",children:ne.map(x=>{const O=gv(x,H,pe,oe,l,p,Ee);return u.jsxs("div",{"data-actividad-id":x.id,className:`rounded-lg p-4 ${O.length?"border-l-4 border-red-600 bg-surface":x.viatico?"border border-viatico/40 bg-viatico-soft":"border border-ok/40 bg-ok-soft"}`,children:[u.jsxs("div",{className:"flex items-start justify-between gap-2",children:[u.jsxs("div",{className:"min-w-0 flex-1",children:[u.jsx("div",{className:"break-words font-semibold text-ink",children:x.titulo}),x.lugar&&u.jsxs("div",{className:"mt-0.5 text-xs text-ink-muted",children:["📍 ",x.lugar]}),x.inicio!==(x.fin||x.inicio)&&u.jsxs("div",{className:"mt-0.5 text-xs text-ink-muted",children:[Wn(x.inicio)," → ",Wn(x.fin)]})]}),u.jsx("button",{onClick:()=>I({...x}),className:"shrink-0 rounded-lg border border-line bg-surface px-2 py-1 text-xs font-semibold text-ink transition-all hover:bg-surface-alt active:scale-95",children:T("acciones.editar")})]}),(x.viatico||O.length>0)&&u.jsxs("div",{className:"mt-1.5 flex flex-wrap items-center gap-1.5",children:[x.viatico&&u.jsx(Lt,{className:"border-orange-300 bg-orange-100 text-orange-900",children:T("dia.viaticoBadge")}),O.length>0&&u.jsx(Lt,{className:"border-red-300 bg-red-100 text-red-900",children:T("dia.conflictosBadge",{n:O.length,plural:ud(O.length)})})]}),x.funcionarios.length>0&&u.jsx("div",{className:"mt-2.5 flex flex-wrap gap-1",children:x.funcionarios.map(X=>u.jsxs("span",{className:`rounded-full border px-2 py-0.5 text-[11px] font-semibold ${O.includes(X)?"border-red-400 bg-surface text-critical":"border-ok/50 bg-surface text-ok-fg"}`,children:[X,O.includes(X)?" ⚠":""]},X))})]},x.id)})})]})]}),u.jsxs("div",{className:"grid gap-4 xl:grid-cols-2 xl:items-start",children:[u.jsx(sa,{title:T("dia.enTurnoConActTitulo",{n:Le.length}),icon:"✅",collapsible:!0,defaultOpen:!1,children:Le.length===0?u.jsx("p",{className:"text-sm text-ink-muted",children:T("dia.enTurnoConActVacio")}):u.jsx("div",{className:"space-y-4",children:Ne(Le).map(x=>u.jsx(ws,{label:x.label,n:x.items.length,children:u.jsx("div",{className:"divide-y divide-line/50",children:x.items.map(O=>u.jsxs("div",{className:"flex items-start gap-3 py-3",children:[u.jsx(Li,{name:O.nombre}),u.jsxs("div",{className:"min-w-0 flex-1",children:[u.jsxs("div",{className:"flex flex-wrap items-center gap-1.5",children:[u.jsx("span",{className:"break-words text-sm font-semibold text-ink",children:O.nombre}),u.jsx(Lt,{className:Pd(O.rol,be),children:O.rol}),O.tieneViatico&&u.jsx(Lt,{className:"border-orange-600 bg-orange-600 text-white",children:T("dia.viaticoBadge")}),u.jsx(ks,{...C(O.nombre),t:T})]}),u.jsx("div",{className:"mt-1.5 flex flex-wrap gap-1",children:O.acts.map(X=>u.jsx("span",{className:"rounded-full border border-ok/50 bg-surface px-2 py-0.5 text-[11px] text-ok-fg",children:X.titulo},X.id))})]})]},O.id))})},x.key))})}),u.jsx(sa,{title:T("dia.enTurnoSinActTitulo",{n:ue.length}),icon:ue.length>0?"⚠️":"✅",collapsible:!0,children:ue.length===0?u.jsx("p",{className:"text-sm text-ink-muted",children:T("dia.enTurnoSinActVacio")}):u.jsx("div",{className:"space-y-4",children:Ne(ue).map(x=>u.jsx(ws,{label:x.label,n:x.items.length,children:u.jsx("div",{className:"divide-y divide-line/50",children:x.items.map(O=>u.jsxs("div",{className:"py-3",children:[u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(Li,{name:O.nombre}),u.jsxs("div",{className:"min-w-0 flex-1",children:[u.jsxs("div",{className:"flex flex-wrap items-center gap-1.5",children:[u.jsx("span",{className:"break-words text-sm font-semibold text-ink",children:O.nombre}),u.jsx(Lt,{className:Pd(O.rol,be),children:O.rol}),u.jsx(ks,{...C(O.nombre),t:T})]}),u.jsx("div",{className:"mt-0.5 text-xs text-ink-muted",children:O.puesto})]})]}),u.jsx("button",{onClick:()=>I(Ae([O.nombre],O.puestoOperativo||"")),className:"mt-2 inline-flex min-h-touch w-full items-center justify-center rounded-xl bg-warning px-3 py-2 text-sm font-semibold text-ink-inverse transition-all hover:opacity-90 active:scale-95 sm:w-auto",children:T("dia.asignar")})]},O.id))})},x.key))})}),u.jsx(sa,{title:T("dia.fueraDeTurnoTitulo",{n:Te.length}),icon:"📴",collapsible:!0,defaultOpen:!1,children:Te.length===0?u.jsx("p",{className:"text-sm text-ink-muted",children:T("dia.fueraDeTurnoVacio")}):u.jsx("div",{className:"space-y-4",children:Object.entries(ve).sort(([x],[O])=>(le[x]||"z").localeCompare(le[O]||"z")).map(([x,O])=>u.jsxs("div",{children:[u.jsxs("div",{className:"mb-2 flex items-center gap-2",children:[u.jsx("span",{className:`rounded-full px-2.5 py-0.5 text-xs font-semibold ${ge[x]}`,children:le[x]||"Sin marcar"}),u.jsx("span",{className:"text-xs text-ink-muted",children:T("dia.nFuncionarios",{n:O.length,plural:ud(O.length)})})]}),u.jsx("div",{className:"flex flex-wrap gap-2",children:O.map(X=>u.jsxs("div",{className:"flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2",children:[u.jsx(Li,{name:X.nombre}),u.jsxs("div",{children:[u.jsx("div",{className:"text-sm font-semibold text-ink",children:X.nombre}),u.jsx("div",{className:"text-[10px] text-ink-muted",children:(X.puestoOperativo||"").replace("Puesto ","")}),u.jsx("div",{className:"mt-1 flex flex-wrap gap-1",children:u.jsx(ks,{...C(X.nombre),t:T})})]})]},X.id))})]},x))})}),me.length>0&&u.jsx(sa,{title:T("dia.conViaticoTitulo",{n:me.length}),icon:"💵",collapsible:!0,defaultOpen:!1,children:u.jsx("div",{className:"space-y-4",children:Ne(me).map(x=>u.jsx(ws,{label:x.label,n:x.items.length,children:u.jsx("div",{className:"divide-y divide-line/50",children:x.items.map(O=>u.jsxs("div",{className:"flex items-start gap-3 py-2.5",children:[u.jsx(Li,{name:O.nombre}),u.jsxs("div",{className:"min-w-0 flex-1",children:[u.jsx("div",{className:"font-semibold text-ink",children:O.nombre}),u.jsx("div",{className:"mt-1 flex flex-wrap gap-1",children:O.acts.filter(X=>X.viatico).map(X=>u.jsxs("span",{className:"rounded-full border border-viatico/40 bg-viatico-soft px-2 py-0.5 text-[11px] text-viatico-fg",children:[X.titulo,X.lugar?` · ${X.lugar}`:""]},X.id))})]})]},O.id))})},x.key))})})]}),w&&(k?u.jsx(Xs,{open:!!w,onClose:()=>I(null),title:Zn,children:yt}):yt)]})}function Sv({enTurno:i,sinActividad:o,nAlertas:l=0,onIrAlertas:d,onAyuda:m}){const p=kn();return u.jsxs("div",{className:"space-y-3 md:hidden",children:[u.jsxs("div",{className:"flex items-center justify-between gap-2",children:[u.jsx("h2",{className:"text-base font-bold text-ink",children:p("dia.resumenTitulo")}),u.jsx("button",{type:"button",onClick:m,"aria-label":p("dia.ayudaAria"),className:"inline-flex min-h-touch min-w-touch items-center justify-center rounded-xl border border-line bg-surface text-ink-muted hover:bg-surface-alt",children:u.jsx(cn,{name:"info",size:22})})]}),u.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[u.jsxs("div",{className:"rounded-xl border border-ok/30 bg-ok-soft px-2 py-3 text-center",children:[u.jsx("div",{className:"text-3xl font-bold tabular-nums text-ok-fg",children:i}),u.jsx("div",{className:"mt-1 text-sm font-semibold leading-tight text-ok-fg",children:p("dia.resumenEnTurno")})]}),u.jsxs("div",{className:`rounded-xl border px-2 py-3 text-center ${o>0?"border-warning/40 bg-warning-soft":"border-line bg-surface"}`,children:[u.jsx("div",{className:`text-3xl font-bold tabular-nums ${o>0?"text-warning-fg":"text-ink-muted"}`,children:o}),u.jsx("div",{className:`mt-1 text-sm font-semibold leading-tight ${o>0?"text-warning-fg":"text-ink-muted"}`,children:p("dia.resumenSinActividad")})]}),u.jsxs("button",{type:"button",onClick:d,className:`rounded-xl border px-2 py-3 text-center active:scale-95 ${l>0?"border-critical/40 bg-critical-soft":"border-line bg-surface"}`,children:[u.jsx("div",{className:`text-3xl font-bold tabular-nums ${l>0?"text-critical-fg":"text-ink-muted"}`,children:l}),u.jsx("div",{className:`mt-1 text-sm font-semibold leading-tight ${l>0?"text-critical-fg":"text-ink-muted"}`,children:p("dia.resumenAlertas")})]})]}),o>0&&u.jsx("p",{className:"text-sm leading-relaxed text-ink-muted",children:p("dia.resumenPistaSinActividad")})]})}function Vv({open:i,onClose:o,topic:l="dia"}){const d=kn(),m=d(`help.${l}.titulo`),p=d(`help.${l}.lineas`),P=Array.isArray(p)?p:[String(p)];return u.jsxs(Xs,{open:i,onClose:o,title:m,snapPoint:"half",children:[u.jsx("ol",{className:"list-decimal space-y-3 pl-5 text-base leading-relaxed text-ink",children:P.map((L,T)=>u.jsx("li",{children:L},T))}),u.jsx("button",{type:"button",onClick:o,className:"mt-6 inline-flex min-h-touch w-full items-center justify-center rounded-xl bg-brand px-4 text-base font-semibold text-brand-fg",children:d("acciones.cerrar")})]})}function bv(i){const{diaVista:o,setDiaVista:l,personas:d,actividadesPlan:m,setActividadesPlan:p,roleData:P,reposiciones:L,hj:T,nAlertas:k=0,setView:A}=i,N=kn(),C=Vm(),[w,I]=S.useState(null),[b,U]=S.useState(!1),[de,ee,pe]=String(o||"").split("-").map(Number),Z=(ee||1)-1,H=nl(de||new Date().getFullYear()),{enTurno:oe,sinActividad:Ee}=S.useMemo(()=>{const Te=(d||[]).filter(se=>se.estado!=="Inactivo");let me=0,fe=0;for(const se of Te){const z=or(d,P,de,Z,se.nombre,pe,H);if(!Si(z))continue;me+=1,Qs(m,o).filter(Q=>(Q.funcionarios||[]).includes(se.nombre)).length===0&&(fe+=1)}return{enTurno:me,sinActividad:fe}},[d,P,de,Z,pe,H,m,o]),[Ve,be]=S.useState(!1);S.useEffect(()=>{const Te=document.getElementById("dia-boton-nueva-actividad");if(!Te||typeof IntersectionObserver>"u")return;const me=new IntersectionObserver(([fe])=>be(fe.isIntersecting),{rootMargin:"-70px 0px -90px 0px"});return me.observe(Te),()=>me.disconnect()},[]);const he=d.filter(Te=>Te.estado!=="Inactivo"),Ce=S.useCallback(()=>({id:`a${Date.now()}`,titulo:"",inicio:o,fin:o,unDia:!0,funcionarios:[],lugar:"",observaciones:"",viatico:!1}),[o]),Le=S.useCallback(Te=>{if(!Te.titulo.trim())return;const me={...Te,fin:Te.unDia?Te.inicio:Te.fin||Te.inicio};me.fin<me.inicio&&(me.fin=me.inicio),p(fe=>fe.some(se=>se.id===me.id)?fe.map(se=>se.id===me.id?me:se):[...fe,me]),I(null)},[p]),ue=S.useCallback(Te=>{p(me=>me.filter(fe=>fe.id!==Te)),I(null)},[p]);return u.jsxs("div",{className:"relative mx-auto w-full max-w-md md:max-w-4xl lg:max-w-6xl xl:max-w-7xl",children:[C&&u.jsxs("div",{className:"mb-3 space-y-3 md:hidden",children:[u.jsx(Lm,{prominent:!0}),u.jsx(Sv,{enTurno:oe,sinActividad:Ee,nAlertas:k,onIrAlertas:()=>typeof A=="function"&&A("alertas"),onAyuda:()=>U(!0)})]}),u.jsx(xv,{...i}),u.jsx("button",{type:"button",onClick:()=>I(Ce()),"aria-label":N("dia.nueva"),"aria-hidden":Ve,tabIndex:Ve?-1:0,className:["fixed z-40 flex h-14 w-14 items-center justify-center","rounded-full bg-emerald-700 text-white shadow-lg","hover:bg-emerald-600 active:scale-95","transition-all duration-200","bottom-[5.5rem] right-4","md:hidden",Ve?"pointer-events-none scale-50 opacity-0":"scale-100 opacity-100"].join(" "),children:u.jsx("svg",{viewBox:"0 0 24 24",width:"28",height:"28",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:u.jsx("path",{d:"M12 5v14M5 12h14"})})}),w&&(C?u.jsx(Xs,{open:!!w,onClose:()=>I(null),title:N("modalActividad.agregar"),snapPoint:"full",children:u.jsx(Js,{valor:w,personas:he,cerrar:()=>I(null),guardar:Le,eliminar:ue,actividadesPlan:m,embebido:!0})}):u.jsx(Js,{valor:w,personas:he,cerrar:()=>I(null),guardar:Le,eliminar:ue,actividadesPlan:m})),u.jsx(Vv,{open:b,onClose:()=>U(!1),topic:"dia"})]})}const Av=S.lazy(()=>yn(()=>import("./Roles-C63j0k4H.js"),[])),wv=S.lazy(()=>yn(()=>import("./Funcionarios-6VXa05aq.js"),__vite__mapDeps([0,1,2,3,4]))),kv=S.lazy(()=>yn(()=>import("./Planificacion-CrAO_RXX.js"),__vite__mapDeps([5,2,3]))),jv=S.lazy(()=>yn(()=>import("./PlanificacionFuncionario-DYWBwPD8.js"),[])),_v=S.lazy(()=>yn(()=>import("./AdelantoViaticos-CZNkABiI.js"),__vite__mapDeps([6,1,3]))),Rv=S.lazy(()=>yn(()=>import("./Reposicion-DBIADjpN.js"),__vite__mapDeps([7,1]))),Dv=S.lazy(()=>yn(()=>import("./Disponibilidad-ygVbF10y.js"),__vite__mapDeps([8,1,4]))),Iv=S.lazy(()=>yn(()=>import("./Alertas-CZqZRm49.js"),__vite__mapDeps([9,3]))),Ov=S.lazy(()=>yn(()=>import("./Datos-BBQztBoZ.js"),[])),Fv=S.lazy(()=>yn(()=>import("./Configuracion-CR-PhGPI.js"),[]));function zv(){const i=kn();return u.jsx("div",{role:"status","aria-live":"polite",className:"flex min-h-[200px] items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",children:u.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold text-slate-500",children:[u.jsx("span",{className:"h-2 w-2 animate-pulse rounded-full bg-emerald-500","aria-hidden":"true"}),i("topbar.cargando")]})})}function Qv(){const{view:i,setView:o,personas:l,setPersonas:d,month:m,setMonth:p,year:P,setYear:L,compact:T,setCompact:k,roleData:A,setRoleData:N,actividadesPlan:C,setActividadesPlan:w,reposiciones:I,setReposiciones:b,diaVista:U,setDiaVista:de,reglas:ee}=rr(),pe=S.useMemo(()=>WT(l,{actividadesPlan:C,reposiciones:I,flags:ee}),[l,C,I,ee]),Z=S.useMemo(()=>pe.filter(Ee=>Ee.t==="danger"||Ee.t==="warn").length,[pe]),H=R1({view:i,setView:o,year:P,setYear:L,month:m,setMonth:p,diaVista:U,setDiaVista:de}),oe=D1();return u.jsxs("div",{className:`pnlq-app pnlq-print-root min-h-screen overflow-x-clip bg-surface-alt text-ink ${oe?"pnlq-keyboard-open":""}`,children:[u.jsx(lv,{}),u.jsxs("div",{className:"flex min-h-screen",children:[u.jsx(y1,{view:i,setView:H,nAlertas:Z}),u.jsxs("main",{className:"pnlq-app-main min-w-0 flex-1 overflow-x-clip",children:[u.jsx(b1,{view:i,setView:H,month:m,setMonth:p,year:P,setYear:L,compact:T,setCompact:k}),u.jsx("div",{className:"pnlq-app-content space-y-5 p-4 pb-[calc(6rem+env(safe-area-inset-bottom))] lg:p-6 lg:pb-6",children:u.jsxs(S.Suspense,{fallback:u.jsx(zv,{}),children:[i==="dia"&&u.jsx(bv,{diaVista:U,setDiaVista:de,personas:l,actividadesPlan:C,setActividadesPlan:w,roleData:A,reposiciones:I,hj:ee==null?void 0:ee.horasJornada,nAlertas:Z,setView:H}),i==="funcionarios"&&u.jsx(wv,{personas:l,setPersonas:d}),i==="roles"&&u.jsx(Av,{year:P,month:m,setYear:L,setMonth:p,compact:T,roleData:A,setRoleData:N,personas:l,actividadesPlan:C,setActividadesPlan:w,reposiciones:I,hj:ee==null?void 0:ee.horasJornada}),i==="planificacion"&&u.jsx(kv,{year:P,month:m,personas:l,actividadesPlan:C,setActividadesPlan:w,roleData:A,setView:H,setDiaVista:de}),i==="planFuncionario"&&u.jsx(jv,{year:P,month:m,personas:l,actividadesPlan:C,setActividadesPlan:w,roleData:A,setRoleData:N}),i==="adelantos"&&u.jsx(_v,{actividadesPlan:C,personas:l,setView:H}),i==="reposicion"&&u.jsx(Rv,{personas:l,reposiciones:I,setReposiciones:b}),i==="disponibilidad"&&u.jsx(Dv,{personas:l,setPersonas:d}),i==="alertas"&&u.jsx(Iv,{alerts:pe,setView:H}),i==="datos"&&u.jsx(Ov,{}),i==="configuracion"&&u.jsx(Fv,{})]})})]})]}),u.jsx(w1,{view:i,setView:H,nAlertas:Z,hidden:oe})]})}function Jv(){return u.jsx(I1,{children:u.jsx($T,{children:u.jsx(Qv,{})})})}function Bv(i={}){const{immediate:o=!1,onNeedRefresh:l,onOfflineReady:d,onRegistered:m,onRegisteredSW:p,onRegisterError:P}=i;let L,T;const k=async(N=!0)=>{await T};async function A(){if("serviceWorker"in navigator){if(L=await yn(async()=>{const{Workbox:N}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:N}},[]).then(({Workbox:N})=>new N("/BTMM_JORNADAS/sw.js",{scope:"/BTMM_JORNADAS/",type:"classic"})).catch(N=>{P==null||P(N)}),!L)return;L.addEventListener("activated",N=>{(N.isUpdate||N.isExternal)&&window.location.reload()}),L.addEventListener("installed",N=>{N.isUpdate||d==null||d()}),L.register({immediate:o}).then(N=>{p?p("/BTMM_JORNADAS/sw.js",N):m==null||m(N)}).catch(N=>{P==null||P(N)})}}return T=A(),k}function Yv(i={}){const{immediate:o=!0,onNeedRefresh:l,onOfflineReady:d,onRegistered:m,onRegisteredSW:p,onRegisterError:P}=i,[L,T]=S.useState(!1),[k,A]=S.useState(!1),[N]=S.useState(()=>Bv({immediate:o,onOfflineReady(){A(!0),d==null||d()},onNeedRefresh(){T(!0),l==null||l()},onRegistered:m,onRegisteredSW:p,onRegisterError:P}));return{needRefresh:[L,T],offlineReady:[k,A],updateServiceWorker:N}}const Uv=300*1e3;async function Gv(){const i=`${n1}?t=${Date.now()}`,o=await fetch(i,{cache:"no-store",headers:{"Cache-Control":"no-cache"}});if(!o.ok)throw new Error(`HTTP ${o.status}`);return o.json()}function Kv({intervalMs:i=Uv,onOutdated:o}={}){let l=!1,d=null,m=!0;const p=async()=>{if(l)return;const k=m;if(m=!1,!(typeof navigator>"u"||!navigator.onLine))try{const A=await Gv();A!=null&&A.commit&&A.commit!==Ni&&(o==null||o({local:nr,remote:A.version,remoteBuildTime:A.buildTime,remoteCommit:A.commit,immediate:k}))}catch{}},P=()=>{l||(d=setTimeout(async()=>{await p(),P()},i))},L=()=>{document.visibilityState==="visible"&&p()},T=()=>p();return document.addEventListener("visibilitychange",L),window.addEventListener("online",T),p(),P(),()=>{l=!0,d&&clearTimeout(d),document.removeEventListener("visibilitychange",L),window.removeEventListener("online",T)}}const Cd="pnlq:lastLoadedAt",xd="pnlq:autoUpdateIntento";function $v({onInstall:i,onDismiss:o}){return u.jsx("div",{className:"pnlq-pwa-banner pnlq-no-print fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-2xl border border-emerald-200 bg-white p-4 shadow-2xl ring-1 ring-emerald-100 lg:bottom-4",role:"alertdialog","aria-label":Je("pwa.instalarAria"),children:u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-800 text-2xl shadow-sm",children:"🌲"}),u.jsxs("div",{className:"min-w-0 flex-1",children:[u.jsx("p",{className:"text-sm font-semibold text-slate-950",children:Je("pwa.instalarTitulo")}),u.jsx("p",{className:"mt-0.5 text-xs font-bold text-slate-500",children:Je("pwa.instalarSub")}),u.jsxs("div",{className:"mt-3 flex gap-2",children:[u.jsx("button",{onClick:i,className:"rounded-xl bg-emerald-800 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-emerald-700 active:scale-95",children:Je("acciones.instalar")}),u.jsx("button",{onClick:o,className:"rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 active:scale-95",children:Je("acciones.ahoraNo")})]})]}),u.jsx("button",{onClick:o,className:"rounded-lg p-1 font-semibold text-slate-400 hover:bg-slate-100 hover:text-slate-700","aria-label":Je("acciones.cerrar"),children:"✕"})]})})}function Hv({lastLoadedAt:i}){return u.jsx("div",{className:"pnlq-pwa-banner pnlq-no-print fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] left-1/2 z-50 -translate-x-1/2 rounded-2xl border border-amber-300 bg-amber-50 px-5 py-3 shadow-xl ring-1 ring-amber-200 lg:bottom-4",role:"alert",children:u.jsxs("div",{className:"flex flex-col items-center gap-0.5 text-center",children:[u.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold text-amber-900",children:[u.jsx("span",{className:"text-lg",children:"📡"}),Je("pwa.sinConexion")]}),i&&u.jsx("div",{className:"text-[11px] font-bold text-amber-800/80",children:Je("pwa.ultimaCarga",{fecha:i})})]})})}function qv({onUpdate:i,onDismiss:o,urgent:l=!1,remoteVersion:d}){const m=Je(l?"pwa.versionDesactualizada":"pwa.nuevaVersion"),p=Je(l?"pwa.urgente":"pwa.sugerido"),P=`${Je("pwa.versionActual",{actual:nr})}${d?Je("pwa.versionDisponible",{remoto:d}):""}.${p}`;return u.jsx("div",{className:`pnlq-pwa-banner pnlq-no-print fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-2xl border p-4 shadow-2xl lg:bottom-4 ${l?"border-red-300 bg-red-50 ring-1 ring-red-200":"border-emerald-300 bg-emerald-50 ring-1 ring-emerald-200"}`,role:"alertdialog","aria-live":"assertive","aria-label":Je("pwa.bannerAria"),children:u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx("div",{className:`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl shadow-sm ${l?"bg-red-700 text-white":"bg-emerald-800 text-white"}`,children:"⟳"}),u.jsxs("div",{className:"min-w-0 flex-1",children:[u.jsx("p",{className:"text-sm font-semibold text-slate-950",children:m}),u.jsx("p",{className:"mt-0.5 text-xs font-bold text-slate-600",children:P}),u.jsxs("div",{className:"mt-3 flex gap-2",children:[u.jsx("button",{onClick:i,className:`rounded-xl px-4 py-2 text-xs font-semibold text-white shadow-sm active:scale-95 ${l?"bg-red-700 hover:bg-red-800":"bg-emerald-800 hover:bg-emerald-700"}`,children:Je("acciones.actualizarAhora")}),u.jsx("button",{onClick:o,className:"rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 active:scale-95",children:Je("acciones.verLuego")})]})]})]})})}function Wv({children:i}){const[o,l]=S.useState(null),[d,m]=S.useState(!1),[p,P]=S.useState(typeof navigator<"u"?!navigator.onLine:!1),[L,T]=S.useState(!1),[k,A]=S.useState(null),[N,C]=S.useState(!1),[w,I]=S.useState(()=>{try{return localStorage.getItem(Cd)}catch{return null}}),{needRefresh:[b,U],updateServiceWorker:de}=Yv({onRegisteredSW(){try{const be=Fd(new Date().toISOString());localStorage.setItem(Cd,be),I(be)}catch{}}});S.useEffect(()=>{const be=ue=>{ue.preventDefault(),l(ue)},he=()=>{T(!0),l(null)},Ce=()=>P(!1),Le=()=>P(!0);return window.addEventListener("beforeinstallprompt",be),window.addEventListener("appinstalled",he),window.addEventListener("online",Ce),window.addEventListener("offline",Le),()=>{window.removeEventListener("beforeinstallprompt",be),window.removeEventListener("appinstalled",he),window.removeEventListener("online",Ce),window.removeEventListener("offline",Le)}},[]);const ee=S.useRef(de);S.useEffect(()=>{ee.current=de},[de]),S.useEffect(()=>Kv({onOutdated:he=>{var Ce;if(he!=null&&he.immediate&&he.remoteCommit){let Le=null;try{Le=sessionStorage.getItem(xd)}catch{}if(Le!==he.remoteCommit){try{sessionStorage.setItem(xd,he.remoteCommit)}catch{}(Ce=ee.current)==null||Ce.call(ee,!0);return}}A(he)}}),[]);const pe=async()=>{if(!o)return;o.prompt();const{outcome:be}=await o.userChoice;be==="accepted"&&l(null),m(!0)},Z=S.useCallback(()=>{C(!1),A(null),U(!1),de(!0)},[U,de]),H=()=>C(!0),oe=o&&!d&&!L,Ee=(b||!!k)&&!N,Ve=k==null?void 0:k.remote;return u.jsxs(u.Fragment,{children:[i,oe&&u.jsx($v,{onInstall:pe,onDismiss:()=>m(!0)}),p&&!Ee&&u.jsx(Hv,{lastLoadedAt:w}),Ee&&u.jsx(qv,{onUpdate:Z,onDismiss:H,urgent:!!k,remoteVersion:Ve})]})}const wm="pnlq:theme",la=["light","dark","hc"],km=S.createContext(null);function Zv(){if(typeof window>"u")return"light";try{const i=localStorage.getItem(wm);if(i&&la.includes(i))return i}catch{}return window.matchMedia&&window.matchMedia("(prefers-contrast: more)").matches?"hc":window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Xv({children:i}){const[o,l]=S.useState(Zv);S.useEffect(()=>{if(!(typeof document>"u")){document.documentElement.setAttribute("data-theme",o),document.documentElement.style.colorScheme=o==="dark"?"dark":"light";try{localStorage.setItem(wm,o)}catch{}}},[o]);const d=S.useCallback(P=>{la.includes(P)&&l(P)},[]),m=S.useCallback(()=>{l(P=>{const L=la.indexOf(P);return la[(L+1)%la.length]})},[]),p=S.useMemo(()=>({theme:o,setTheme:d,cycleTheme:m,themes:la}),[o,d,m]);return u.jsx(km.Provider,{value:p,children:i})}function vh(){const i=S.useContext(km);if(!i)throw new Error("useTheme must be used within <ThemeProvider>");return i}typeof console<"u"&&console.info(`PNLQ v${nr} · build ${Ei} · commit ${Ni}`);typeof window<"u"&&window.addEventListener("unhandledrejection",i=>{console.error("Promesa rechazada sin manejar:",i.reason)});Qp.createRoot(document.getElementById("root")).render(u.jsx(Rp.StrictMode,{children:u.jsx(Xv,{children:u.jsx(Wv,{children:u.jsx(Jv,{})})})}));export{fh as $,nr as A,Lt as B,sa as C,el as D,lh as E,bm as F,mv as G,Mn as H,cn as I,Sd as J,mT as K,wd as L,Cs as M,rT as N,FT as O,u as P,Ev as Q,Ks as R,Fn as S,Ns as T,Th as U,rd as V,hm as W,Sm as X,cT as Y,mh as Z,dh as _,Li as a,ch as a0,ua as a1,oT as a2,On as a3,ir as a4,ah as a5,ud as a6,sh as a7,QT as a8,Ys as a9,S as aa,iT as ab,dv as ac,xm as ad,sT as ae,ar as af,Am as ag,aT as ah,Je as ai,ph as aj,OT as ak,Ws as al,uh as am,rr as an,C1 as ao,nl as ap,ym as aq,kn as ar,vh as as,th as at,Mm as b,Js as c,Qs as d,rh as e,dT as f,Mv as g,Ci as h,Pd as i,vv as j,or as k,nh as l,gv as m,$s as n,ih as o,M1 as p,Dd as q,Si as r,oh as s,jd as t,RT as u,zT as v,Wn as w,tT as x,Fd as y,pv as z};
