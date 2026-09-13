const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Roles-CI24rPn0.js","assets/useAtajoBusqueda-CeV0ALWP.js","assets/csv-Q8IY2wHv.js","assets/descargas-DA6-RFWE.js","assets/exportaciones-ZJdtHW2R.js","assets/Funcionarios-DXlaSwIX.js","assets/EmptyState-CUNC69ej.js","assets/useFiltrosDeVista-D7Rw-pXZ.js","assets/useSessionState-tShcWdLZ.js","assets/respaldo-B17NTmjq.js","assets/ModalFuncionario-CNuzzIqP.js","assets/useGuardarFuncionario-DbxSwbYA.js","assets/FichaFuncionario-Dy_cJUje.js","assets/Planificacion-CmI9BLI6.js","assets/AdelantoViaticos-BuQA2m66.js","assets/Reposicion-CvEaptZy.js","assets/Disponibilidad-BVP8WP9o.js","assets/Alertas-CkSEQuZk.js","assets/Datos-tv71kcFV.js","assets/Configuracion-Ca2bzE7T.js"])))=>i.map(i=>d[i]);
var sT=Object.defineProperty;var lT=(r,i,o)=>i in r?sT(r,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[i]=o;var ji=(r,i,o)=>lT(r,typeof i!="symbol"?i+"":i,o);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const L of p.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&c(L)}).observe(document,{childList:!0,subtree:!0});function o(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(d){if(d.ep)return;d.ep=!0;const p=o(d);fetch(d.href,p)}})();var jh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $d(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Fs={exports:{}},dr={},zs={exports:{}},ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ud;function cT(){if(ud)return ve;ud=1;var r=Symbol.for("react.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),L=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),C=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),g=Symbol.iterator;function N(M){return M===null||typeof M!="object"?null:(M=g&&M[g]||M["@@iterator"],typeof M=="function"?M:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,Q={};function D(M,R,oe){this.props=M,this.context=R,this.refs=Q,this.updater=oe||w}D.prototype.isReactComponent={},D.prototype.setState=function(M,R){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,R,"setState")},D.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function V(){}V.prototype=D.prototype;function Y(M,R,oe){this.props=M,this.context=R,this.refs=Q,this.updater=oe||w}var te=Y.prototype=new V;te.constructor=Y,j(te,D.prototype),te.isPureReactComponent=!0;var Z=Array.isArray,pe=Object.prototype.hasOwnProperty,ie={current:null},ee={key:!0,ref:!0,__self:!0,__source:!0};function Te(M,R,oe){var me,B={},X=null,Pe=null;if(R!=null)for(me in R.ref!==void 0&&(Pe=R.ref),R.key!==void 0&&(X=""+R.key),R)pe.call(R,me)&&!ee.hasOwnProperty(me)&&(B[me]=R[me]);var he=arguments.length-2;if(he===1)B.children=oe;else if(1<he){for(var Me=Array(he),Je=0;Je<he;Je++)Me[Je]=arguments[Je+2];B.children=Me}if(M&&M.defaultProps)for(me in he=M.defaultProps,he)B[me]===void 0&&(B[me]=he[me]);return{$$typeof:r,type:M,key:X,ref:Pe,props:B,_owner:ie.current}}function le(M,R){return{$$typeof:r,type:M.type,key:R,ref:M.ref,props:M.props,_owner:M._owner}}function ue(M){return typeof M=="object"&&M!==null&&M.$$typeof===r}function Ee(M){var R={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(oe){return R[oe]})}var ge=/\/+/g;function ye(M,R){return typeof M=="object"&&M!==null&&M.key!=null?Ee(""+M.key):R.toString(36)}function Ve(M,R,oe,me,B){var X=typeof M;(X==="undefined"||X==="boolean")&&(M=null);var Pe=!1;if(M===null)Pe=!0;else switch(X){case"string":case"number":Pe=!0;break;case"object":switch(M.$$typeof){case r:case i:Pe=!0}}if(Pe)return Pe=M,B=B(Pe),M=me===""?"."+ye(Pe,0):me,Z(B)?(oe="",M!=null&&(oe=M.replace(ge,"$&/")+"/"),Ve(B,R,oe,"",function(Je){return Je})):B!=null&&(ue(B)&&(B=le(B,oe+(!B.key||Pe&&Pe.key===B.key?"":(""+B.key).replace(ge,"$&/")+"/")+M)),R.push(B)),1;if(Pe=0,me=me===""?".":me+":",Z(M))for(var he=0;he<M.length;he++){X=M[he];var Me=me+ye(X,he);Pe+=Ve(X,R,oe,Me,B)}else if(Me=N(M),typeof Me=="function")for(M=Me.call(M),he=0;!(X=M.next()).done;)X=X.value,Me=me+ye(X,he++),Pe+=Ve(X,R,oe,Me,B);else if(X==="object")throw R=String(M),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return Pe}function se(M,R,oe){if(M==null)return M;var me=[],B=0;return Ve(M,me,"","",function(X){return R.call(oe,X,B++)}),me}function Le(M){if(M._status===-1){var R=M._result;R=R(),R.then(function(oe){(M._status===0||M._status===-1)&&(M._status=1,M._result=oe)},function(oe){(M._status===0||M._status===-1)&&(M._status=2,M._result=oe)}),M._status===-1&&(M._status=0,M._result=R)}if(M._status===1)return M._result.default;throw M._result}var fe={current:null},z={transition:null},H={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:z,ReactCurrentOwner:ie};function G(){throw Error("act(...) is not supported in production builds of React.")}return ve.Children={map:se,forEach:function(M,R,oe){se(M,function(){R.apply(this,arguments)},oe)},count:function(M){var R=0;return se(M,function(){R++}),R},toArray:function(M){return se(M,function(R){return R})||[]},only:function(M){if(!ue(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},ve.Component=D,ve.Fragment=o,ve.Profiler=d,ve.PureComponent=Y,ve.StrictMode=c,ve.Suspense=f,ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,ve.act=G,ve.cloneElement=function(M,R,oe){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var me=j({},M.props),B=M.key,X=M.ref,Pe=M._owner;if(R!=null){if(R.ref!==void 0&&(X=R.ref,Pe=ie.current),R.key!==void 0&&(B=""+R.key),M.type&&M.type.defaultProps)var he=M.type.defaultProps;for(Me in R)pe.call(R,Me)&&!ee.hasOwnProperty(Me)&&(me[Me]=R[Me]===void 0&&he!==void 0?he[Me]:R[Me])}var Me=arguments.length-2;if(Me===1)me.children=oe;else if(1<Me){he=Array(Me);for(var Je=0;Je<Me;Je++)he[Je]=arguments[Je+2];me.children=he}return{$$typeof:r,type:M.type,key:B,ref:X,props:me,_owner:Pe}},ve.createContext=function(M){return M={$$typeof:L,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:p,_context:M},M.Consumer=M},ve.createElement=Te,ve.createFactory=function(M){var R=Te.bind(null,M);return R.type=M,R},ve.createRef=function(){return{current:null}},ve.forwardRef=function(M){return{$$typeof:T,render:M}},ve.isValidElement=ue,ve.lazy=function(M){return{$$typeof:y,_payload:{_status:-1,_result:M},_init:Le}},ve.memo=function(M,R){return{$$typeof:C,type:M,compare:R===void 0?null:R}},ve.startTransition=function(M){var R=z.transition;z.transition={};try{M()}finally{z.transition=R}},ve.unstable_act=G,ve.useCallback=function(M,R){return fe.current.useCallback(M,R)},ve.useContext=function(M){return fe.current.useContext(M)},ve.useDebugValue=function(){},ve.useDeferredValue=function(M){return fe.current.useDeferredValue(M)},ve.useEffect=function(M,R){return fe.current.useEffect(M,R)},ve.useId=function(){return fe.current.useId()},ve.useImperativeHandle=function(M,R,oe){return fe.current.useImperativeHandle(M,R,oe)},ve.useInsertionEffect=function(M,R){return fe.current.useInsertionEffect(M,R)},ve.useLayoutEffect=function(M,R){return fe.current.useLayoutEffect(M,R)},ve.useMemo=function(M,R){return fe.current.useMemo(M,R)},ve.useReducer=function(M,R,oe){return fe.current.useReducer(M,R,oe)},ve.useRef=function(M){return fe.current.useRef(M)},ve.useState=function(M){return fe.current.useState(M)},ve.useSyncExternalStore=function(M,R,oe){return fe.current.useSyncExternalStore(M,R,oe)},ve.useTransition=function(){return fe.current.useTransition()},ve.version="18.3.1",ve}var dd;function ll(){return dd||(dd=1,zs.exports=cT()),zs.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var md;function uT(){if(md)return dr;md=1;var r=ll(),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function L(T,f,C){var y,g={},N=null,w=null;C!==void 0&&(N=""+C),f.key!==void 0&&(N=""+f.key),f.ref!==void 0&&(w=f.ref);for(y in f)c.call(f,y)&&!p.hasOwnProperty(y)&&(g[y]=f[y]);if(T&&T.defaultProps)for(y in f=T.defaultProps,f)g[y]===void 0&&(g[y]=f[y]);return{$$typeof:i,type:T,key:N,ref:w,props:g,_owner:d.current}}return dr.Fragment=o,dr.jsx=L,dr.jsxs=L,dr}var pd;function dT(){return pd||(pd=1,Fs.exports=uT()),Fs.exports}var u=dT(),x=ll();const mT=$d(x);var Di={},Qs={exports:{}},pn={},Js={exports:{}},Bs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fd;function pT(){return fd||(fd=1,(function(r){function i(z,H){var G=z.length;z.push(H);e:for(;0<G;){var M=G-1>>>1,R=z[M];if(0<d(R,H))z[M]=H,z[G]=R,G=M;else break e}}function o(z){return z.length===0?null:z[0]}function c(z){if(z.length===0)return null;var H=z[0],G=z.pop();if(G!==H){z[0]=G;e:for(var M=0,R=z.length,oe=R>>>1;M<oe;){var me=2*(M+1)-1,B=z[me],X=me+1,Pe=z[X];if(0>d(B,G))X<R&&0>d(Pe,B)?(z[M]=Pe,z[X]=G,M=X):(z[M]=B,z[me]=G,M=me);else if(X<R&&0>d(Pe,G))z[M]=Pe,z[X]=G,M=X;else break e}}return H}function d(z,H){var G=z.sortIndex-H.sortIndex;return G!==0?G:z.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;r.unstable_now=function(){return p.now()}}else{var L=Date,T=L.now();r.unstable_now=function(){return L.now()-T}}var f=[],C=[],y=1,g=null,N=3,w=!1,j=!1,Q=!1,D=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function te(z){for(var H=o(C);H!==null;){if(H.callback===null)c(C);else if(H.startTime<=z)c(C),H.sortIndex=H.expirationTime,i(f,H);else break;H=o(C)}}function Z(z){if(Q=!1,te(z),!j)if(o(f)!==null)j=!0,Le(pe);else{var H=o(C);H!==null&&fe(Z,H.startTime-z)}}function pe(z,H){j=!1,Q&&(Q=!1,V(Te),Te=-1),w=!0;var G=N;try{for(te(H),g=o(f);g!==null&&(!(g.expirationTime>H)||z&&!Ee());){var M=g.callback;if(typeof M=="function"){g.callback=null,N=g.priorityLevel;var R=M(g.expirationTime<=H);H=r.unstable_now(),typeof R=="function"?g.callback=R:g===o(f)&&c(f),te(H)}else c(f);g=o(f)}if(g!==null)var oe=!0;else{var me=o(C);me!==null&&fe(Z,me.startTime-H),oe=!1}return oe}finally{g=null,N=G,w=!1}}var ie=!1,ee=null,Te=-1,le=5,ue=-1;function Ee(){return!(r.unstable_now()-ue<le)}function ge(){if(ee!==null){var z=r.unstable_now();ue=z;var H=!0;try{H=ee(!0,z)}finally{H?ye():(ie=!1,ee=null)}}else ie=!1}var ye;if(typeof Y=="function")ye=function(){Y(ge)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,se=Ve.port2;Ve.port1.onmessage=ge,ye=function(){se.postMessage(null)}}else ye=function(){D(ge,0)};function Le(z){ee=z,ie||(ie=!0,ye())}function fe(z,H){Te=D(function(){z(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_continueExecution=function(){j||w||(j=!0,Le(pe))},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):le=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return N},r.unstable_getFirstCallbackNode=function(){return o(f)},r.unstable_next=function(z){switch(N){case 1:case 2:case 3:var H=3;break;default:H=N}var G=N;N=H;try{return z()}finally{N=G}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(z,H){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var G=N;N=z;try{return H()}finally{N=G}},r.unstable_scheduleCallback=function(z,H,G){var M=r.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?M+G:M):G=M,z){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=G+R,z={id:y++,callback:H,priorityLevel:z,startTime:G,expirationTime:R,sortIndex:-1},G>M?(z.sortIndex=G,i(C,z),o(f)===null&&z===o(C)&&(Q?(V(Te),Te=-1):Q=!0,fe(Z,G-M))):(z.sortIndex=R,i(f,z),j||w||(j=!0,Le(pe))),z},r.unstable_shouldYield=Ee,r.unstable_wrapCallback=function(z){var H=N;return function(){var G=N;N=H;try{return z.apply(this,arguments)}finally{N=G}}}})(Bs)),Bs}var Td;function fT(){return Td||(Td=1,Js.exports=pT()),Js.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ld;function TT(){if(Ld)return pn;Ld=1;var r=ll(),i=fT();function o(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,d={};function p(e,n){L(e,n),L(e+"Capture",n)}function L(e,n){for(d[e]=n,e=0;e<n.length;e++)c.add(n[e])}var T=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,C=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},g={};function N(e){return f.call(g,e)?!0:f.call(y,e)?!1:C.test(e)?g[e]=!0:(y[e]=!0,!1)}function w(e,n,t,a){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function j(e,n,t,a){if(n===null||typeof n>"u"||w(e,n,t,a))return!0;if(a)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Q(e,n,t,a,s,l,m){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=s,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=m}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){D[e]=new Q(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];D[n]=new Q(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){D[e]=new Q(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){D[e]=new Q(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){D[e]=new Q(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){D[e]=new Q(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){D[e]=new Q(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){D[e]=new Q(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){D[e]=new Q(e,5,!1,e.toLowerCase(),null,!1,!1)});var V=/[\-:]([a-z])/g;function Y(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(V,Y);D[n]=new Q(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(V,Y);D[n]=new Q(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(V,Y);D[n]=new Q(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){D[e]=new Q(e,1,!1,e.toLowerCase(),null,!1,!1)}),D.xlinkHref=new Q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){D[e]=new Q(e,1,!1,e.toLowerCase(),null,!0,!0)});function te(e,n,t,a){var s=D.hasOwnProperty(n)?D[n]:null;(s!==null?s.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(j(n,t,s,a)&&(t=null),a||s===null?N(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):s.mustUseProperty?e[s.propertyName]=t===null?s.type===3?!1:"":t:(n=s.attributeName,a=s.attributeNamespace,t===null?e.removeAttribute(n):(s=s.type,t=s===3||s===4&&t===!0?"":""+t,a?e.setAttributeNS(a,n,t):e.setAttribute(n,t))))}var Z=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pe=Symbol.for("react.element"),ie=Symbol.for("react.portal"),ee=Symbol.for("react.fragment"),Te=Symbol.for("react.strict_mode"),le=Symbol.for("react.profiler"),ue=Symbol.for("react.provider"),Ee=Symbol.for("react.context"),ge=Symbol.for("react.forward_ref"),ye=Symbol.for("react.suspense"),Ve=Symbol.for("react.suspense_list"),se=Symbol.for("react.memo"),Le=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),z=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,M;function R(e){if(M===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);M=n&&n[1]||""}return`
`+M+e}var oe=!1;function me(e,n){if(!e||oe)return"";oe=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(A){var a=A}Reflect.construct(e,[],n)}else{try{n.call()}catch(A){a=A}e.call(n.prototype)}else{try{throw Error()}catch(A){a=A}e()}}catch(A){if(A&&a&&typeof A.stack=="string"){for(var s=A.stack.split(`
`),l=a.stack.split(`
`),m=s.length-1,v=l.length-1;1<=m&&0<=v&&s[m]!==l[v];)v--;for(;1<=m&&0<=v;m--,v--)if(s[m]!==l[v]){if(m!==1||v!==1)do if(m--,v--,0>v||s[m]!==l[v]){var h=`
`+s[m].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=m&&0<=v);break}}}finally{oe=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?R(e):""}function B(e){switch(e.tag){case 5:return R(e.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return e=me(e.type,!1),e;case 11:return e=me(e.type.render,!1),e;case 1:return e=me(e.type,!0),e;default:return""}}function X(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ee:return"Fragment";case ie:return"Portal";case le:return"Profiler";case Te:return"StrictMode";case ye:return"Suspense";case Ve:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ee:return(e.displayName||"Context")+".Consumer";case ue:return(e._context.displayName||"Context")+".Provider";case ge:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case se:return n=e.displayName||null,n!==null?n:X(e.type)||"Memo";case Le:n=e._payload,e=e._init;try{return X(e(n))}catch{}}return null}function Pe(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return X(n);case 8:return n===Te?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function he(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Me(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e){var n=Me(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var s=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return s.call(this)},set:function(m){a=""+m,l.call(this,m)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function sn(e){e._valueTracker||(e._valueTracker=Je(e))}function Wn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=Me(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function an(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function k(e,n){var t=n.checked;return G({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ce(e,n){var t=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;t=he(n.value!=null?n.value:t),e._wrapperState={initialChecked:a,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function we(e,n){n=n.checked,n!=null&&te(e,"checked",n,!1)}function Dn(e,n){we(e,n);var t=he(n.value),a=n.type;if(t!=null)a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?jt(e,n.type,t):n.hasOwnProperty("defaultValue")&&jt(e,n.type,he(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function kn(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function jt(e,n,t){(n!=="number"||an(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Dt=Array.isArray;function lt(e,n,t,a){if(e=e.options,n){n={};for(var s=0;s<t.length;s++)n["$"+t[s]]=!0;for(t=0;t<e.length;t++)s=n.hasOwnProperty("$"+e[t].value),e[t].selected!==s&&(e[t].selected=s),s&&a&&(e[t].defaultSelected=!0)}else{for(t=""+he(t),n=null,s=0;s<e.length;s++){if(e[s].value===t){e[s].selected=!0,a&&(e[s].defaultSelected=!0);return}n!==null||e[s].disabled||(n=e[s])}n!==null&&(n.selected=!0)}}function Wt(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(o(91));return G({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Er(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(o(92));if(Dt(t)){if(1<t.length)throw Error(o(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:he(t)}}function Cr(e,n){var t=he(n.value),a=he(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),a!=null&&(e.defaultValue=""+a)}function ba(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function b(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function O(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?b(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ne,xe=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,a,s){MSApp.execUnsafeLocalFunction(function(){return e(n,t,a,s)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ne=ne||document.createElement("div"),ne.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ne.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function yn(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Mn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ct=["Webkit","ms","Moz","O"];Object.keys(Mn).forEach(function(e){ct.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Mn[n]=Mn[e]})});function Nl(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Mn.hasOwnProperty(e)&&Mn[e]?(""+n).trim():n+"px"}function Sl(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var a=t.indexOf("--")===0,s=Nl(t,n[t],a);t==="float"&&(t="cssFloat"),a?e.setProperty(t,s):e[t]=s}}var dp=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hi(e,n){if(n){if(dp[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(o(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(o(61))}if(n.style!=null&&typeof n.style!="object")throw Error(o(62))}}function Wi(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zi=null;function Xi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var eo=null,Zt=null,Xt=null;function xl(e){if(e=Ha(e)){if(typeof eo!="function")throw Error(o(280));var n=e.stateNode;n&&(n=Kr(n),eo(e.stateNode,e.type,n))}}function bl(e){Zt?Xt?Xt.push(e):Xt=[e]:Zt=e}function Vl(){if(Zt){var e=Zt,n=Xt;if(Xt=Zt=null,xl(e),n)for(e=0;e<n.length;e++)xl(n[e])}}function Al(e,n){return e(n)}function wl(){}var no=!1;function jl(e,n,t){if(no)return e(n,t);no=!0;try{return Al(e,n,t)}finally{no=!1,(Zt!==null||Xt!==null)&&(wl(),Vl())}}function Va(e,n){var t=e.stateNode;if(t===null)return null;var a=Kr(t);if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(o(231,n,typeof t));return t}var to=!1;if(T)try{var Aa={};Object.defineProperty(Aa,"passive",{get:function(){to=!0}}),window.addEventListener("test",Aa,Aa),window.removeEventListener("test",Aa,Aa)}catch{to=!1}function mp(e,n,t,a,s,l,m,v,h){var A=Array.prototype.slice.call(arguments,3);try{n.apply(t,A)}catch(I){this.onError(I)}}var wa=!1,Nr=null,Sr=!1,ao=null,pp={onError:function(e){wa=!0,Nr=e}};function fp(e,n,t,a,s,l,m,v,h){wa=!1,Nr=null,mp.apply(pp,arguments)}function Tp(e,n,t,a,s,l,m,v,h){if(fp.apply(this,arguments),wa){if(wa){var A=Nr;wa=!1,Nr=null}else throw Error(o(198));Sr||(Sr=!0,ao=A)}}function kt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Dl(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function kl(e){if(kt(e)!==e)throw Error(o(188))}function Lp(e){var n=e.alternate;if(!n){if(n=kt(e),n===null)throw Error(o(188));return n!==e?null:e}for(var t=e,a=n;;){var s=t.return;if(s===null)break;var l=s.alternate;if(l===null){if(a=s.return,a!==null){t=a;continue}break}if(s.child===l.child){for(l=s.child;l;){if(l===t)return kl(s),e;if(l===a)return kl(s),n;l=l.sibling}throw Error(o(188))}if(t.return!==a.return)t=s,a=l;else{for(var m=!1,v=s.child;v;){if(v===t){m=!0,t=s,a=l;break}if(v===a){m=!0,a=s,t=l;break}v=v.sibling}if(!m){for(v=l.child;v;){if(v===t){m=!0,t=l,a=s;break}if(v===a){m=!0,a=l,t=s;break}v=v.sibling}if(!m)throw Error(o(189))}}if(t.alternate!==a)throw Error(o(190))}if(t.tag!==3)throw Error(o(188));return t.stateNode.current===t?e:n}function Rl(e){return e=Lp(e),e!==null?_l(e):null}function _l(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=_l(e);if(n!==null)return n;e=e.sibling}return null}var Il=i.unstable_scheduleCallback,Ol=i.unstable_cancelCallback,vp=i.unstable_shouldYield,hp=i.unstable_requestPaint,Fe=i.unstable_now,gp=i.unstable_getCurrentPriorityLevel,ro=i.unstable_ImmediatePriority,Fl=i.unstable_UserBlockingPriority,xr=i.unstable_NormalPriority,Pp=i.unstable_LowPriority,zl=i.unstable_IdlePriority,br=null,Yn=null;function yp(e){if(Yn&&typeof Yn.onCommitFiberRoot=="function")try{Yn.onCommitFiberRoot(br,e,void 0,(e.current.flags&128)===128)}catch{}}var Rn=Math.clz32?Math.clz32:Cp,Mp=Math.log,Ep=Math.LN2;function Cp(e){return e>>>=0,e===0?32:31-(Mp(e)/Ep|0)|0}var Vr=64,Ar=4194304;function ja(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function wr(e,n){var t=e.pendingLanes;if(t===0)return 0;var a=0,s=e.suspendedLanes,l=e.pingedLanes,m=t&268435455;if(m!==0){var v=m&~s;v!==0?a=ja(v):(l&=m,l!==0&&(a=ja(l)))}else m=t&~s,m!==0?a=ja(m):l!==0&&(a=ja(l));if(a===0)return 0;if(n!==0&&n!==a&&(n&s)===0&&(s=a&-a,l=n&-n,s>=l||s===16&&(l&4194240)!==0))return n;if((a&4)!==0&&(a|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)t=31-Rn(n),s=1<<t,a|=e[t],n&=~s;return a}function Np(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sp(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,s=e.expirationTimes,l=e.pendingLanes;0<l;){var m=31-Rn(l),v=1<<m,h=s[m];h===-1?((v&t)===0||(v&a)!==0)&&(s[m]=Np(v,n)):h<=n&&(e.expiredLanes|=v),l&=~v}}function io(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ql(){var e=Vr;return Vr<<=1,(Vr&4194240)===0&&(Vr=64),e}function oo(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Da(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Rn(n),e[n]=t}function xp(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<t;){var s=31-Rn(t),l=1<<s;n[s]=0,a[s]=-1,e[s]=-1,t&=~l}}function so(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-Rn(t),s=1<<a;s&n|e[a]&n&&(e[a]|=n),t&=~s}}var be=0;function Jl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Bl,lo,Yl,Gl,Ul,co=!1,jr=[],ut=null,dt=null,mt=null,ka=new Map,Ra=new Map,pt=[],bp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kl(e,n){switch(e){case"focusin":case"focusout":ut=null;break;case"dragenter":case"dragleave":dt=null;break;case"mouseover":case"mouseout":mt=null;break;case"pointerover":case"pointerout":ka.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ra.delete(n.pointerId)}}function _a(e,n,t,a,s,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:l,targetContainers:[s]},n!==null&&(n=Ha(n),n!==null&&lo(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,s!==null&&n.indexOf(s)===-1&&n.push(s),e)}function Vp(e,n,t,a,s){switch(n){case"focusin":return ut=_a(ut,e,n,t,a,s),!0;case"dragenter":return dt=_a(dt,e,n,t,a,s),!0;case"mouseover":return mt=_a(mt,e,n,t,a,s),!0;case"pointerover":var l=s.pointerId;return ka.set(l,_a(ka.get(l)||null,e,n,t,a,s)),!0;case"gotpointercapture":return l=s.pointerId,Ra.set(l,_a(Ra.get(l)||null,e,n,t,a,s)),!0}return!1}function $l(e){var n=Rt(e.target);if(n!==null){var t=kt(n);if(t!==null){if(n=t.tag,n===13){if(n=Dl(t),n!==null){e.blockedOn=n,Ul(e.priority,function(){Yl(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=mo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);Zi=a,t.target.dispatchEvent(a),Zi=null}else return n=Ha(t),n!==null&&lo(n),e.blockedOn=t,!1;n.shift()}return!0}function ql(e,n,t){Dr(e)&&t.delete(n)}function Ap(){co=!1,ut!==null&&Dr(ut)&&(ut=null),dt!==null&&Dr(dt)&&(dt=null),mt!==null&&Dr(mt)&&(mt=null),ka.forEach(ql),Ra.forEach(ql)}function Ia(e,n){e.blockedOn===n&&(e.blockedOn=null,co||(co=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Ap)))}function Oa(e){function n(s){return Ia(s,e)}if(0<jr.length){Ia(jr[0],e);for(var t=1;t<jr.length;t++){var a=jr[t];a.blockedOn===e&&(a.blockedOn=null)}}for(ut!==null&&Ia(ut,e),dt!==null&&Ia(dt,e),mt!==null&&Ia(mt,e),ka.forEach(n),Ra.forEach(n),t=0;t<pt.length;t++)a=pt[t],a.blockedOn===e&&(a.blockedOn=null);for(;0<pt.length&&(t=pt[0],t.blockedOn===null);)$l(t),t.blockedOn===null&&pt.shift()}var ea=Z.ReactCurrentBatchConfig,kr=!0;function wp(e,n,t,a){var s=be,l=ea.transition;ea.transition=null;try{be=1,uo(e,n,t,a)}finally{be=s,ea.transition=l}}function jp(e,n,t,a){var s=be,l=ea.transition;ea.transition=null;try{be=4,uo(e,n,t,a)}finally{be=s,ea.transition=l}}function uo(e,n,t,a){if(kr){var s=mo(e,n,t,a);if(s===null)Vo(e,n,a,Rr,t),Kl(e,a);else if(Vp(s,e,n,t,a))a.stopPropagation();else if(Kl(e,a),n&4&&-1<bp.indexOf(e)){for(;s!==null;){var l=Ha(s);if(l!==null&&Bl(l),l=mo(e,n,t,a),l===null&&Vo(e,n,a,Rr,t),l===s)break;s=l}s!==null&&a.stopPropagation()}else Vo(e,n,a,null,t)}}var Rr=null;function mo(e,n,t,a){if(Rr=null,e=Xi(a),e=Rt(e),e!==null)if(n=kt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Dl(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Rr=e,null}function Hl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gp()){case ro:return 1;case Fl:return 4;case xr:case Pp:return 16;case zl:return 536870912;default:return 16}default:return 16}}var ft=null,po=null,_r=null;function Wl(){if(_r)return _r;var e,n=po,t=n.length,a,s="value"in ft?ft.value:ft.textContent,l=s.length;for(e=0;e<t&&n[e]===s[e];e++);var m=t-e;for(a=1;a<=m&&n[t-a]===s[l-a];a++);return _r=s.slice(e,1<a?1-a:void 0)}function Ir(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Or(){return!0}function Zl(){return!1}function Tn(e){function n(t,a,s,l,m){this._reactName=t,this._targetInst=s,this.type=a,this.nativeEvent=l,this.target=m,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(t=e[v],this[v]=t?t(l):l[v]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Or:Zl,this.isPropagationStopped=Zl,this}return G(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Or)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Or)},persist:function(){},isPersistent:Or}),n}var na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fo=Tn(na),Fa=G({},na,{view:0,detail:0}),Dp=Tn(Fa),To,Lo,za,Fr=G({},Fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ho,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==za&&(za&&e.type==="mousemove"?(To=e.screenX-za.screenX,Lo=e.screenY-za.screenY):Lo=To=0,za=e),To)},movementY:function(e){return"movementY"in e?e.movementY:Lo}}),Xl=Tn(Fr),kp=G({},Fr,{dataTransfer:0}),Rp=Tn(kp),_p=G({},Fa,{relatedTarget:0}),vo=Tn(_p),Ip=G({},na,{animationName:0,elapsedTime:0,pseudoElement:0}),Op=Tn(Ip),Fp=G({},na,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zp=Tn(Fp),Qp=G({},na,{data:0}),ec=Tn(Qp),Jp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gp(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Yp[e])?!!n[e]:!1}function ho(){return Gp}var Up=G({},Fa,{key:function(e){if(e.key){var n=Jp[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ir(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ho,charCode:function(e){return e.type==="keypress"?Ir(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ir(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kp=Tn(Up),$p=G({},Fr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nc=Tn($p),qp=G({},Fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ho}),Hp=Tn(qp),Wp=G({},na,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zp=Tn(Wp),Xp=G({},Fr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ef=Tn(Xp),nf=[9,13,27,32],go=T&&"CompositionEvent"in window,Qa=null;T&&"documentMode"in document&&(Qa=document.documentMode);var tf=T&&"TextEvent"in window&&!Qa,tc=T&&(!go||Qa&&8<Qa&&11>=Qa),ac=" ",rc=!1;function ic(e,n){switch(e){case"keyup":return nf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ta=!1;function af(e,n){switch(e){case"compositionend":return oc(n);case"keypress":return n.which!==32?null:(rc=!0,ac);case"textInput":return e=n.data,e===ac&&rc?null:e;default:return null}}function rf(e,n){if(ta)return e==="compositionend"||!go&&ic(e,n)?(e=Wl(),_r=po=ft=null,ta=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return tc&&n.locale!=="ko"?null:n.data;default:return null}}var of={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!of[e.type]:n==="textarea"}function lc(e,n,t,a){bl(a),n=Yr(n,"onChange"),0<n.length&&(t=new fo("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var Ja=null,Ba=null;function sf(e){Sc(e,0)}function zr(e){var n=sa(e);if(Wn(n))return e}function lf(e,n){if(e==="change")return n}var cc=!1;if(T){var Po;if(T){var yo="oninput"in document;if(!yo){var uc=document.createElement("div");uc.setAttribute("oninput","return;"),yo=typeof uc.oninput=="function"}Po=yo}else Po=!1;cc=Po&&(!document.documentMode||9<document.documentMode)}function dc(){Ja&&(Ja.detachEvent("onpropertychange",mc),Ba=Ja=null)}function mc(e){if(e.propertyName==="value"&&zr(Ba)){var n=[];lc(n,Ba,e,Xi(e)),jl(sf,n)}}function cf(e,n,t){e==="focusin"?(dc(),Ja=n,Ba=t,Ja.attachEvent("onpropertychange",mc)):e==="focusout"&&dc()}function uf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zr(Ba)}function df(e,n){if(e==="click")return zr(n)}function mf(e,n){if(e==="input"||e==="change")return zr(n)}function pf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var _n=typeof Object.is=="function"?Object.is:pf;function Ya(e,n){if(_n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var s=t[a];if(!f.call(n,s)||!_n(e[s],n[s]))return!1}return!0}function pc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fc(e,n){var t=pc(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=pc(t)}}function Tc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Tc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Lc(){for(var e=window,n=an();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=an(e.document)}return n}function Mo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function ff(e){var n=Lc(),t=e.focusedElem,a=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Tc(t.ownerDocument.documentElement,t)){if(a!==null&&Mo(t)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var s=t.textContent.length,l=Math.min(a.start,s);a=a.end===void 0?l:Math.min(a.end,s),!e.extend&&l>a&&(s=a,a=l,l=s),s=fc(t,l);var m=fc(t,a);s&&m&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==m.node||e.focusOffset!==m.offset)&&(n=n.createRange(),n.setStart(s.node,s.offset),e.removeAllRanges(),l>a?(e.addRange(n),e.extend(m.node,m.offset)):(n.setEnd(m.node,m.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tf=T&&"documentMode"in document&&11>=document.documentMode,aa=null,Eo=null,Ga=null,Co=!1;function vc(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Co||aa==null||aa!==an(a)||(a=aa,"selectionStart"in a&&Mo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ga&&Ya(Ga,a)||(Ga=a,a=Yr(Eo,"onSelect"),0<a.length&&(n=new fo("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=aa)))}function Qr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var ra={animationend:Qr("Animation","AnimationEnd"),animationiteration:Qr("Animation","AnimationIteration"),animationstart:Qr("Animation","AnimationStart"),transitionend:Qr("Transition","TransitionEnd")},No={},hc={};T&&(hc=document.createElement("div").style,"AnimationEvent"in window||(delete ra.animationend.animation,delete ra.animationiteration.animation,delete ra.animationstart.animation),"TransitionEvent"in window||delete ra.transitionend.transition);function Jr(e){if(No[e])return No[e];if(!ra[e])return e;var n=ra[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in hc)return No[e]=n[t];return e}var gc=Jr("animationend"),Pc=Jr("animationiteration"),yc=Jr("animationstart"),Mc=Jr("transitionend"),Ec=new Map,Cc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tt(e,n){Ec.set(e,n),p(n,[e])}for(var So=0;So<Cc.length;So++){var xo=Cc[So],Lf=xo.toLowerCase(),vf=xo[0].toUpperCase()+xo.slice(1);Tt(Lf,"on"+vf)}Tt(gc,"onAnimationEnd"),Tt(Pc,"onAnimationIteration"),Tt(yc,"onAnimationStart"),Tt("dblclick","onDoubleClick"),Tt("focusin","onFocus"),Tt("focusout","onBlur"),Tt(Mc,"onTransitionEnd"),L("onMouseEnter",["mouseout","mouseover"]),L("onMouseLeave",["mouseout","mouseover"]),L("onPointerEnter",["pointerout","pointerover"]),L("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ua));function Nc(e,n,t){var a=e.type||"unknown-event";e.currentTarget=t,Tp(a,n,void 0,e),e.currentTarget=null}function Sc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],s=a.event;a=a.listeners;e:{var l=void 0;if(n)for(var m=a.length-1;0<=m;m--){var v=a[m],h=v.instance,A=v.currentTarget;if(v=v.listener,h!==l&&s.isPropagationStopped())break e;Nc(s,v,A),l=h}else for(m=0;m<a.length;m++){if(v=a[m],h=v.instance,A=v.currentTarget,v=v.listener,h!==l&&s.isPropagationStopped())break e;Nc(s,v,A),l=h}}}if(Sr)throw e=ao,Sr=!1,ao=null,e}function je(e,n){var t=n[Ro];t===void 0&&(t=n[Ro]=new Set);var a=e+"__bubble";t.has(a)||(xc(n,e,2,!1),t.add(a))}function bo(e,n,t){var a=0;n&&(a|=4),xc(t,e,a,n)}var Br="_reactListening"+Math.random().toString(36).slice(2);function Ka(e){if(!e[Br]){e[Br]=!0,c.forEach(function(t){t!=="selectionchange"&&(hf.has(t)||bo(t,!1,e),bo(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Br]||(n[Br]=!0,bo("selectionchange",!1,n))}}function xc(e,n,t,a){switch(Hl(n)){case 1:var s=wp;break;case 4:s=jp;break;default:s=uo}t=s.bind(null,n,t,e),s=void 0,!to||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(s=!0),a?s!==void 0?e.addEventListener(n,t,{capture:!0,passive:s}):e.addEventListener(n,t,!0):s!==void 0?e.addEventListener(n,t,{passive:s}):e.addEventListener(n,t,!1)}function Vo(e,n,t,a,s){var l=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var m=a.tag;if(m===3||m===4){var v=a.stateNode.containerInfo;if(v===s||v.nodeType===8&&v.parentNode===s)break;if(m===4)for(m=a.return;m!==null;){var h=m.tag;if((h===3||h===4)&&(h=m.stateNode.containerInfo,h===s||h.nodeType===8&&h.parentNode===s))return;m=m.return}for(;v!==null;){if(m=Rt(v),m===null)return;if(h=m.tag,h===5||h===6){a=l=m;continue e}v=v.parentNode}}a=a.return}jl(function(){var A=l,I=Xi(t),F=[];e:{var _=Ec.get(e);if(_!==void 0){var U=fo,$=e;switch(e){case"keypress":if(Ir(t)===0)break e;case"keydown":case"keyup":U=Kp;break;case"focusin":$="focus",U=vo;break;case"focusout":$="blur",U=vo;break;case"beforeblur":case"afterblur":U=vo;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=Xl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=Rp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=Hp;break;case gc:case Pc:case yc:U=Op;break;case Mc:U=Zp;break;case"scroll":U=Dp;break;case"wheel":U=ef;break;case"copy":case"cut":case"paste":U=zp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=nc}var q=(n&4)!==0,ze=!q&&e==="scroll",E=q?_!==null?_+"Capture":null:_;q=[];for(var P=A,S;P!==null;){S=P;var J=S.stateNode;if(S.tag===5&&J!==null&&(S=J,E!==null&&(J=Va(P,E),J!=null&&q.push($a(P,J,S)))),ze)break;P=P.return}0<q.length&&(_=new U(_,$,null,t,I),F.push({event:_,listeners:q}))}}if((n&7)===0){e:{if(_=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",_&&t!==Zi&&($=t.relatedTarget||t.fromElement)&&(Rt($)||$[Zn]))break e;if((U||_)&&(_=I.window===I?I:(_=I.ownerDocument)?_.defaultView||_.parentWindow:window,U?($=t.relatedTarget||t.toElement,U=A,$=$?Rt($):null,$!==null&&(ze=kt($),$!==ze||$.tag!==5&&$.tag!==6)&&($=null)):(U=null,$=A),U!==$)){if(q=Xl,J="onMouseLeave",E="onMouseEnter",P="mouse",(e==="pointerout"||e==="pointerover")&&(q=nc,J="onPointerLeave",E="onPointerEnter",P="pointer"),ze=U==null?_:sa(U),S=$==null?_:sa($),_=new q(J,P+"leave",U,t,I),_.target=ze,_.relatedTarget=S,J=null,Rt(I)===A&&(q=new q(E,P+"enter",$,t,I),q.target=S,q.relatedTarget=ze,J=q),ze=J,U&&$)n:{for(q=U,E=$,P=0,S=q;S;S=ia(S))P++;for(S=0,J=E;J;J=ia(J))S++;for(;0<P-S;)q=ia(q),P--;for(;0<S-P;)E=ia(E),S--;for(;P--;){if(q===E||E!==null&&q===E.alternate)break n;q=ia(q),E=ia(E)}q=null}else q=null;U!==null&&bc(F,_,U,q,!1),$!==null&&ze!==null&&bc(F,ze,$,q,!0)}}e:{if(_=A?sa(A):window,U=_.nodeName&&_.nodeName.toLowerCase(),U==="select"||U==="input"&&_.type==="file")var W=lf;else if(sc(_))if(cc)W=mf;else{W=uf;var ae=cf}else(U=_.nodeName)&&U.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(W=df);if(W&&(W=W(e,A))){lc(F,W,t,I);break e}ae&&ae(e,_,A),e==="focusout"&&(ae=_._wrapperState)&&ae.controlled&&_.type==="number"&&jt(_,"number",_.value)}switch(ae=A?sa(A):window,e){case"focusin":(sc(ae)||ae.contentEditable==="true")&&(aa=ae,Eo=A,Ga=null);break;case"focusout":Ga=Eo=aa=null;break;case"mousedown":Co=!0;break;case"contextmenu":case"mouseup":case"dragend":Co=!1,vc(F,t,I);break;case"selectionchange":if(Tf)break;case"keydown":case"keyup":vc(F,t,I)}var re;if(go)e:{switch(e){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else ta?ic(e,t)&&(ce="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(ce="onCompositionStart");ce&&(tc&&t.locale!=="ko"&&(ta||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&ta&&(re=Wl()):(ft=I,po="value"in ft?ft.value:ft.textContent,ta=!0)),ae=Yr(A,ce),0<ae.length&&(ce=new ec(ce,e,null,t,I),F.push({event:ce,listeners:ae}),re?ce.data=re:(re=oc(t),re!==null&&(ce.data=re)))),(re=tf?af(e,t):rf(e,t))&&(A=Yr(A,"onBeforeInput"),0<A.length&&(I=new ec("onBeforeInput","beforeinput",null,t,I),F.push({event:I,listeners:A}),I.data=re))}Sc(F,n)})}function $a(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Yr(e,n){for(var t=n+"Capture",a=[];e!==null;){var s=e,l=s.stateNode;s.tag===5&&l!==null&&(s=l,l=Va(e,t),l!=null&&a.unshift($a(e,l,s)),l=Va(e,n),l!=null&&a.push($a(e,l,s))),e=e.return}return a}function ia(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function bc(e,n,t,a,s){for(var l=n._reactName,m=[];t!==null&&t!==a;){var v=t,h=v.alternate,A=v.stateNode;if(h!==null&&h===a)break;v.tag===5&&A!==null&&(v=A,s?(h=Va(t,l),h!=null&&m.unshift($a(t,h,v))):s||(h=Va(t,l),h!=null&&m.push($a(t,h,v)))),t=t.return}m.length!==0&&e.push({event:n,listeners:m})}var gf=/\r\n?/g,Pf=/\u0000|\uFFFD/g;function Vc(e){return(typeof e=="string"?e:""+e).replace(gf,`
`).replace(Pf,"")}function Gr(e,n,t){if(n=Vc(n),Vc(e)!==n&&t)throw Error(o(425))}function Ur(){}var Ao=null,wo=null;function jo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Do=typeof setTimeout=="function"?setTimeout:void 0,yf=typeof clearTimeout=="function"?clearTimeout:void 0,Ac=typeof Promise=="function"?Promise:void 0,Mf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ac<"u"?function(e){return Ac.resolve(null).then(e).catch(Ef)}:Do;function Ef(e){setTimeout(function(){throw e})}function ko(e,n){var t=n,a=0;do{var s=t.nextSibling;if(e.removeChild(t),s&&s.nodeType===8)if(t=s.data,t==="/$"){if(a===0){e.removeChild(s),Oa(n);return}a--}else t!=="$"&&t!=="$?"&&t!=="$!"||a++;t=s}while(t);Oa(n)}function Lt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function wc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var oa=Math.random().toString(36).slice(2),Gn="__reactFiber$"+oa,qa="__reactProps$"+oa,Zn="__reactContainer$"+oa,Ro="__reactEvents$"+oa,Cf="__reactListeners$"+oa,Nf="__reactHandles$"+oa;function Rt(e){var n=e[Gn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Zn]||t[Gn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=wc(e);e!==null;){if(t=e[Gn])return t;e=wc(e)}return n}e=t,t=e.parentNode}return null}function Ha(e){return e=e[Gn]||e[Zn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function sa(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function Kr(e){return e[qa]||null}var _o=[],la=-1;function vt(e){return{current:e}}function De(e){0>la||(e.current=_o[la],_o[la]=null,la--)}function Ae(e,n){la++,_o[la]=e.current,e.current=n}var ht={},Xe=vt(ht),ln=vt(!1),_t=ht;function ca(e,n){var t=e.type.contextTypes;if(!t)return ht;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var s={},l;for(l in t)s[l]=n[l];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=s),s}function cn(e){return e=e.childContextTypes,e!=null}function $r(){De(ln),De(Xe)}function jc(e,n,t){if(Xe.current!==ht)throw Error(o(168));Ae(Xe,n),Ae(ln,t)}function Dc(e,n,t){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return t;a=a.getChildContext();for(var s in a)if(!(s in n))throw Error(o(108,Pe(e)||"Unknown",s));return G({},t,a)}function qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ht,_t=Xe.current,Ae(Xe,e),Ae(ln,ln.current),!0}function kc(e,n,t){var a=e.stateNode;if(!a)throw Error(o(169));t?(e=Dc(e,n,_t),a.__reactInternalMemoizedMergedChildContext=e,De(ln),De(Xe),Ae(Xe,e)):De(ln),Ae(ln,t)}var Xn=null,Hr=!1,Io=!1;function Rc(e){Xn===null?Xn=[e]:Xn.push(e)}function Sf(e){Hr=!0,Rc(e)}function gt(){if(!Io&&Xn!==null){Io=!0;var e=0,n=be;try{var t=Xn;for(be=1;e<t.length;e++){var a=t[e];do a=a(!0);while(a!==null)}Xn=null,Hr=!1}catch(s){throw Xn!==null&&(Xn=Xn.slice(e+1)),Il(ro,gt),s}finally{be=n,Io=!1}}return null}var ua=[],da=0,Wr=null,Zr=0,En=[],Cn=0,It=null,et=1,nt="";function Ot(e,n){ua[da++]=Zr,ua[da++]=Wr,Wr=e,Zr=n}function _c(e,n,t){En[Cn++]=et,En[Cn++]=nt,En[Cn++]=It,It=e;var a=et;e=nt;var s=32-Rn(a)-1;a&=~(1<<s),t+=1;var l=32-Rn(n)+s;if(30<l){var m=s-s%5;l=(a&(1<<m)-1).toString(32),a>>=m,s-=m,et=1<<32-Rn(n)+s|t<<s|a,nt=l+e}else et=1<<l|t<<s|a,nt=e}function Oo(e){e.return!==null&&(Ot(e,1),_c(e,1,0))}function Fo(e){for(;e===Wr;)Wr=ua[--da],ua[da]=null,Zr=ua[--da],ua[da]=null;for(;e===It;)It=En[--Cn],En[Cn]=null,nt=En[--Cn],En[Cn]=null,et=En[--Cn],En[Cn]=null}var Ln=null,vn=null,ke=!1,In=null;function Ic(e,n){var t=bn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Oc(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ln=e,vn=Lt(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ln=e,vn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=It!==null?{id:et,overflow:nt}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=bn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ln=e,vn=null,!0):!1;default:return!1}}function zo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qo(e){if(ke){var n=vn;if(n){var t=n;if(!Oc(e,n)){if(zo(e))throw Error(o(418));n=Lt(t.nextSibling);var a=Ln;n&&Oc(e,n)?Ic(a,t):(e.flags=e.flags&-4097|2,ke=!1,Ln=e)}}else{if(zo(e))throw Error(o(418));e.flags=e.flags&-4097|2,ke=!1,Ln=e}}}function Fc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ln=e}function Xr(e){if(e!==Ln)return!1;if(!ke)return Fc(e),ke=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!jo(e.type,e.memoizedProps)),n&&(n=vn)){if(zo(e))throw zc(),Error(o(418));for(;n;)Ic(e,n),n=Lt(n.nextSibling)}if(Fc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){vn=Lt(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}vn=null}}else vn=Ln?Lt(e.stateNode.nextSibling):null;return!0}function zc(){for(var e=vn;e;)e=Lt(e.nextSibling)}function ma(){vn=Ln=null,ke=!1}function Jo(e){In===null?In=[e]:In.push(e)}var xf=Z.ReactCurrentBatchConfig;function Wa(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(o(309));var a=t.stateNode}if(!a)throw Error(o(147,e));var s=a,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(m){var v=s.refs;m===null?delete v[l]:v[l]=m},n._stringRef=l,n)}if(typeof e!="string")throw Error(o(284));if(!t._owner)throw Error(o(290,e))}return e}function ei(e,n){throw e=Object.prototype.toString.call(n),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Qc(e){var n=e._init;return n(e._payload)}function Jc(e){function n(E,P){if(e){var S=E.deletions;S===null?(E.deletions=[P],E.flags|=16):S.push(P)}}function t(E,P){if(!e)return null;for(;P!==null;)n(E,P),P=P.sibling;return null}function a(E,P){for(E=new Map;P!==null;)P.key!==null?E.set(P.key,P):E.set(P.index,P),P=P.sibling;return E}function s(E,P){return E=xt(E,P),E.index=0,E.sibling=null,E}function l(E,P,S){return E.index=S,e?(S=E.alternate,S!==null?(S=S.index,S<P?(E.flags|=2,P):S):(E.flags|=2,P)):(E.flags|=1048576,P)}function m(E){return e&&E.alternate===null&&(E.flags|=2),E}function v(E,P,S,J){return P===null||P.tag!==6?(P=Ds(S,E.mode,J),P.return=E,P):(P=s(P,S),P.return=E,P)}function h(E,P,S,J){var W=S.type;return W===ee?I(E,P,S.props.children,J,S.key):P!==null&&(P.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Le&&Qc(W)===P.type)?(J=s(P,S.props),J.ref=Wa(E,P,S),J.return=E,J):(J=Ci(S.type,S.key,S.props,null,E.mode,J),J.ref=Wa(E,P,S),J.return=E,J)}function A(E,P,S,J){return P===null||P.tag!==4||P.stateNode.containerInfo!==S.containerInfo||P.stateNode.implementation!==S.implementation?(P=ks(S,E.mode,J),P.return=E,P):(P=s(P,S.children||[]),P.return=E,P)}function I(E,P,S,J,W){return P===null||P.tag!==7?(P=Ut(S,E.mode,J,W),P.return=E,P):(P=s(P,S),P.return=E,P)}function F(E,P,S){if(typeof P=="string"&&P!==""||typeof P=="number")return P=Ds(""+P,E.mode,S),P.return=E,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case pe:return S=Ci(P.type,P.key,P.props,null,E.mode,S),S.ref=Wa(E,null,P),S.return=E,S;case ie:return P=ks(P,E.mode,S),P.return=E,P;case Le:var J=P._init;return F(E,J(P._payload),S)}if(Dt(P)||H(P))return P=Ut(P,E.mode,S,null),P.return=E,P;ei(E,P)}return null}function _(E,P,S,J){var W=P!==null?P.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return W!==null?null:v(E,P,""+S,J);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case pe:return S.key===W?h(E,P,S,J):null;case ie:return S.key===W?A(E,P,S,J):null;case Le:return W=S._init,_(E,P,W(S._payload),J)}if(Dt(S)||H(S))return W!==null?null:I(E,P,S,J,null);ei(E,S)}return null}function U(E,P,S,J,W){if(typeof J=="string"&&J!==""||typeof J=="number")return E=E.get(S)||null,v(P,E,""+J,W);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case pe:return E=E.get(J.key===null?S:J.key)||null,h(P,E,J,W);case ie:return E=E.get(J.key===null?S:J.key)||null,A(P,E,J,W);case Le:var ae=J._init;return U(E,P,S,ae(J._payload),W)}if(Dt(J)||H(J))return E=E.get(S)||null,I(P,E,J,W,null);ei(P,J)}return null}function $(E,P,S,J){for(var W=null,ae=null,re=P,ce=P=0,$e=null;re!==null&&ce<S.length;ce++){re.index>ce?($e=re,re=null):$e=re.sibling;var Se=_(E,re,S[ce],J);if(Se===null){re===null&&(re=$e);break}e&&re&&Se.alternate===null&&n(E,re),P=l(Se,P,ce),ae===null?W=Se:ae.sibling=Se,ae=Se,re=$e}if(ce===S.length)return t(E,re),ke&&Ot(E,ce),W;if(re===null){for(;ce<S.length;ce++)re=F(E,S[ce],J),re!==null&&(P=l(re,P,ce),ae===null?W=re:ae.sibling=re,ae=re);return ke&&Ot(E,ce),W}for(re=a(E,re);ce<S.length;ce++)$e=U(re,E,ce,S[ce],J),$e!==null&&(e&&$e.alternate!==null&&re.delete($e.key===null?ce:$e.key),P=l($e,P,ce),ae===null?W=$e:ae.sibling=$e,ae=$e);return e&&re.forEach(function(bt){return n(E,bt)}),ke&&Ot(E,ce),W}function q(E,P,S,J){var W=H(S);if(typeof W!="function")throw Error(o(150));if(S=W.call(S),S==null)throw Error(o(151));for(var ae=W=null,re=P,ce=P=0,$e=null,Se=S.next();re!==null&&!Se.done;ce++,Se=S.next()){re.index>ce?($e=re,re=null):$e=re.sibling;var bt=_(E,re,Se.value,J);if(bt===null){re===null&&(re=$e);break}e&&re&&bt.alternate===null&&n(E,re),P=l(bt,P,ce),ae===null?W=bt:ae.sibling=bt,ae=bt,re=$e}if(Se.done)return t(E,re),ke&&Ot(E,ce),W;if(re===null){for(;!Se.done;ce++,Se=S.next())Se=F(E,Se.value,J),Se!==null&&(P=l(Se,P,ce),ae===null?W=Se:ae.sibling=Se,ae=Se);return ke&&Ot(E,ce),W}for(re=a(E,re);!Se.done;ce++,Se=S.next())Se=U(re,E,ce,Se.value,J),Se!==null&&(e&&Se.alternate!==null&&re.delete(Se.key===null?ce:Se.key),P=l(Se,P,ce),ae===null?W=Se:ae.sibling=Se,ae=Se);return e&&re.forEach(function(oT){return n(E,oT)}),ke&&Ot(E,ce),W}function ze(E,P,S,J){if(typeof S=="object"&&S!==null&&S.type===ee&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case pe:e:{for(var W=S.key,ae=P;ae!==null;){if(ae.key===W){if(W=S.type,W===ee){if(ae.tag===7){t(E,ae.sibling),P=s(ae,S.props.children),P.return=E,E=P;break e}}else if(ae.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Le&&Qc(W)===ae.type){t(E,ae.sibling),P=s(ae,S.props),P.ref=Wa(E,ae,S),P.return=E,E=P;break e}t(E,ae);break}else n(E,ae);ae=ae.sibling}S.type===ee?(P=Ut(S.props.children,E.mode,J,S.key),P.return=E,E=P):(J=Ci(S.type,S.key,S.props,null,E.mode,J),J.ref=Wa(E,P,S),J.return=E,E=J)}return m(E);case ie:e:{for(ae=S.key;P!==null;){if(P.key===ae)if(P.tag===4&&P.stateNode.containerInfo===S.containerInfo&&P.stateNode.implementation===S.implementation){t(E,P.sibling),P=s(P,S.children||[]),P.return=E,E=P;break e}else{t(E,P);break}else n(E,P);P=P.sibling}P=ks(S,E.mode,J),P.return=E,E=P}return m(E);case Le:return ae=S._init,ze(E,P,ae(S._payload),J)}if(Dt(S))return $(E,P,S,J);if(H(S))return q(E,P,S,J);ei(E,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,P!==null&&P.tag===6?(t(E,P.sibling),P=s(P,S),P.return=E,E=P):(t(E,P),P=Ds(S,E.mode,J),P.return=E,E=P),m(E)):t(E,P)}return ze}var pa=Jc(!0),Bc=Jc(!1),ni=vt(null),ti=null,fa=null,Bo=null;function Yo(){Bo=fa=ti=null}function Go(e){var n=ni.current;De(ni),e._currentValue=n}function Uo(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function Ta(e,n){ti=e,Bo=fa=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(un=!0),e.firstContext=null)}function Nn(e){var n=e._currentValue;if(Bo!==e)if(e={context:e,memoizedValue:n,next:null},fa===null){if(ti===null)throw Error(o(308));fa=e,ti.dependencies={lanes:0,firstContext:e}}else fa=fa.next=e;return n}var Ft=null;function Ko(e){Ft===null?Ft=[e]:Ft.push(e)}function Yc(e,n,t,a){var s=n.interleaved;return s===null?(t.next=t,Ko(n)):(t.next=s.next,s.next=t),n.interleaved=t,tt(e,a)}function tt(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Pt=!1;function $o(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function at(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function yt(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ne&2)!==0){var s=a.pending;return s===null?n.next=n:(n.next=s.next,s.next=n),a.pending=n,tt(e,t)}return s=a.interleaved,s===null?(n.next=n,Ko(a)):(n.next=s.next,s.next=n),a.interleaved=n,tt(e,t)}function ai(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,so(e,t)}}function Uc(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var s=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var m={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?s=l=m:l=l.next=m,t=t.next}while(t!==null);l===null?s=l=n:l=l.next=n}else s=l=n;t={baseState:a.baseState,firstBaseUpdate:s,lastBaseUpdate:l,shared:a.shared,effects:a.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ri(e,n,t,a){var s=e.updateQueue;Pt=!1;var l=s.firstBaseUpdate,m=s.lastBaseUpdate,v=s.shared.pending;if(v!==null){s.shared.pending=null;var h=v,A=h.next;h.next=null,m===null?l=A:m.next=A,m=h;var I=e.alternate;I!==null&&(I=I.updateQueue,v=I.lastBaseUpdate,v!==m&&(v===null?I.firstBaseUpdate=A:v.next=A,I.lastBaseUpdate=h))}if(l!==null){var F=s.baseState;m=0,I=A=h=null,v=l;do{var _=v.lane,U=v.eventTime;if((a&_)===_){I!==null&&(I=I.next={eventTime:U,lane:0,tag:v.tag,payload:v.payload,callback:v.callback,next:null});e:{var $=e,q=v;switch(_=n,U=t,q.tag){case 1:if($=q.payload,typeof $=="function"){F=$.call(U,F,_);break e}F=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=q.payload,_=typeof $=="function"?$.call(U,F,_):$,_==null)break e;F=G({},F,_);break e;case 2:Pt=!0}}v.callback!==null&&v.lane!==0&&(e.flags|=64,_=s.effects,_===null?s.effects=[v]:_.push(v))}else U={eventTime:U,lane:_,tag:v.tag,payload:v.payload,callback:v.callback,next:null},I===null?(A=I=U,h=F):I=I.next=U,m|=_;if(v=v.next,v===null){if(v=s.shared.pending,v===null)break;_=v,v=_.next,_.next=null,s.lastBaseUpdate=_,s.shared.pending=null}}while(!0);if(I===null&&(h=F),s.baseState=h,s.firstBaseUpdate=A,s.lastBaseUpdate=I,n=s.shared.interleaved,n!==null){s=n;do m|=s.lane,s=s.next;while(s!==n)}else l===null&&(s.shared.lanes=0);Jt|=m,e.lanes=m,e.memoizedState=F}}function Kc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],s=a.callback;if(s!==null){if(a.callback=null,a=t,typeof s!="function")throw Error(o(191,s));s.call(a)}}}var Za={},Un=vt(Za),Xa=vt(Za),er=vt(Za);function zt(e){if(e===Za)throw Error(o(174));return e}function qo(e,n){switch(Ae(er,n),Ae(Xa,e),Ae(Un,Za),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:O(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=O(n,e)}De(Un),Ae(Un,n)}function La(){De(Un),De(Xa),De(er)}function $c(e){zt(er.current);var n=zt(Un.current),t=O(n,e.type);n!==t&&(Ae(Xa,e),Ae(Un,t))}function Ho(e){Xa.current===e&&(De(Un),De(Xa))}var Re=vt(0);function ii(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Wo=[];function Zo(){for(var e=0;e<Wo.length;e++)Wo[e]._workInProgressVersionPrimary=null;Wo.length=0}var oi=Z.ReactCurrentDispatcher,Xo=Z.ReactCurrentBatchConfig,Qt=0,_e=null,Ye=null,Ue=null,si=!1,nr=!1,tr=0,bf=0;function en(){throw Error(o(321))}function es(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!_n(e[t],n[t]))return!1;return!0}function ns(e,n,t,a,s,l){if(Qt=l,_e=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,oi.current=e===null||e.memoizedState===null?jf:Df,e=t(a,s),nr){l=0;do{if(nr=!1,tr=0,25<=l)throw Error(o(301));l+=1,Ue=Ye=null,n.updateQueue=null,oi.current=kf,e=t(a,s)}while(nr)}if(oi.current=ui,n=Ye!==null&&Ye.next!==null,Qt=0,Ue=Ye=_e=null,si=!1,n)throw Error(o(300));return e}function ts(){var e=tr!==0;return tr=0,e}function Kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?_e.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function Sn(){if(Ye===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var n=Ue===null?_e.memoizedState:Ue.next;if(n!==null)Ue=n,Ye=e;else{if(e===null)throw Error(o(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},Ue===null?_e.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function ar(e,n){return typeof n=="function"?n(e):n}function as(e){var n=Sn(),t=n.queue;if(t===null)throw Error(o(311));t.lastRenderedReducer=e;var a=Ye,s=a.baseQueue,l=t.pending;if(l!==null){if(s!==null){var m=s.next;s.next=l.next,l.next=m}a.baseQueue=s=l,t.pending=null}if(s!==null){l=s.next,a=a.baseState;var v=m=null,h=null,A=l;do{var I=A.lane;if((Qt&I)===I)h!==null&&(h=h.next={lane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),a=A.hasEagerState?A.eagerState:e(a,A.action);else{var F={lane:I,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null};h===null?(v=h=F,m=a):h=h.next=F,_e.lanes|=I,Jt|=I}A=A.next}while(A!==null&&A!==l);h===null?m=a:h.next=v,_n(a,n.memoizedState)||(un=!0),n.memoizedState=a,n.baseState=m,n.baseQueue=h,t.lastRenderedState=a}if(e=t.interleaved,e!==null){s=e;do l=s.lane,_e.lanes|=l,Jt|=l,s=s.next;while(s!==e)}else s===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function rs(e){var n=Sn(),t=n.queue;if(t===null)throw Error(o(311));t.lastRenderedReducer=e;var a=t.dispatch,s=t.pending,l=n.memoizedState;if(s!==null){t.pending=null;var m=s=s.next;do l=e(l,m.action),m=m.next;while(m!==s);_n(l,n.memoizedState)||(un=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,a]}function qc(){}function Hc(e,n){var t=_e,a=Sn(),s=n(),l=!_n(a.memoizedState,s);if(l&&(a.memoizedState=s,un=!0),a=a.queue,is(Xc.bind(null,t,a,e),[e]),a.getSnapshot!==n||l||Ue!==null&&Ue.memoizedState.tag&1){if(t.flags|=2048,rr(9,Zc.bind(null,t,a,s,n),void 0,null),Ke===null)throw Error(o(349));(Qt&30)!==0||Wc(t,n,s)}return s}function Wc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=_e.updateQueue,n===null?(n={lastEffect:null,stores:null},_e.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Zc(e,n,t,a){n.value=t,n.getSnapshot=a,eu(n)&&nu(e)}function Xc(e,n,t){return t(function(){eu(n)&&nu(e)})}function eu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!_n(e,t)}catch{return!0}}function nu(e){var n=tt(e,1);n!==null&&Qn(n,e,1,-1)}function tu(e){var n=Kn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ar,lastRenderedState:e},n.queue=e,e=e.dispatch=wf.bind(null,_e,e),[n.memoizedState,e]}function rr(e,n,t,a){return e={tag:e,create:n,destroy:t,deps:a,next:null},n=_e.updateQueue,n===null?(n={lastEffect:null,stores:null},_e.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e)),e}function au(){return Sn().memoizedState}function li(e,n,t,a){var s=Kn();_e.flags|=e,s.memoizedState=rr(1|n,t,void 0,a===void 0?null:a)}function ci(e,n,t,a){var s=Sn();a=a===void 0?null:a;var l=void 0;if(Ye!==null){var m=Ye.memoizedState;if(l=m.destroy,a!==null&&es(a,m.deps)){s.memoizedState=rr(n,t,l,a);return}}_e.flags|=e,s.memoizedState=rr(1|n,t,l,a)}function ru(e,n){return li(8390656,8,e,n)}function is(e,n){return ci(2048,8,e,n)}function iu(e,n){return ci(4,2,e,n)}function ou(e,n){return ci(4,4,e,n)}function su(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function lu(e,n,t){return t=t!=null?t.concat([e]):null,ci(4,4,su.bind(null,n,e),t)}function os(){}function cu(e,n){var t=Sn();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&es(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function uu(e,n){var t=Sn();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&es(n,a[1])?a[0]:(e=e(),t.memoizedState=[e,n],e)}function du(e,n,t){return(Qt&21)===0?(e.baseState&&(e.baseState=!1,un=!0),e.memoizedState=t):(_n(t,n)||(t=Ql(),_e.lanes|=t,Jt|=t,e.baseState=!0),n)}function Vf(e,n){var t=be;be=t!==0&&4>t?t:4,e(!0);var a=Xo.transition;Xo.transition={};try{e(!1),n()}finally{be=t,Xo.transition=a}}function mu(){return Sn().memoizedState}function Af(e,n,t){var a=Nt(e);if(t={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null},pu(e))fu(n,t);else if(t=Yc(e,n,t,a),t!==null){var s=on();Qn(t,e,a,s),Tu(t,n,a)}}function wf(e,n,t){var a=Nt(e),s={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null};if(pu(e))fu(n,s);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var m=n.lastRenderedState,v=l(m,t);if(s.hasEagerState=!0,s.eagerState=v,_n(v,m)){var h=n.interleaved;h===null?(s.next=s,Ko(n)):(s.next=h.next,h.next=s),n.interleaved=s;return}}catch{}finally{}t=Yc(e,n,s,a),t!==null&&(s=on(),Qn(t,e,a,s),Tu(t,n,a))}}function pu(e){var n=e.alternate;return e===_e||n!==null&&n===_e}function fu(e,n){nr=si=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Tu(e,n,t){if((t&4194240)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,so(e,t)}}var ui={readContext:Nn,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useInsertionEffect:en,useLayoutEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useMutableSource:en,useSyncExternalStore:en,useId:en,unstable_isNewReconciler:!1},jf={readContext:Nn,useCallback:function(e,n){return Kn().memoizedState=[e,n===void 0?null:n],e},useContext:Nn,useEffect:ru,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,li(4194308,4,su.bind(null,n,e),t)},useLayoutEffect:function(e,n){return li(4194308,4,e,n)},useInsertionEffect:function(e,n){return li(4,2,e,n)},useMemo:function(e,n){var t=Kn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var a=Kn();return n=t!==void 0?t(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=Af.bind(null,_e,e),[a.memoizedState,e]},useRef:function(e){var n=Kn();return e={current:e},n.memoizedState=e},useState:tu,useDebugValue:os,useDeferredValue:function(e){return Kn().memoizedState=e},useTransition:function(){var e=tu(!1),n=e[0];return e=Vf.bind(null,e[1]),Kn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var a=_e,s=Kn();if(ke){if(t===void 0)throw Error(o(407));t=t()}else{if(t=n(),Ke===null)throw Error(o(349));(Qt&30)!==0||Wc(a,n,t)}s.memoizedState=t;var l={value:t,getSnapshot:n};return s.queue=l,ru(Xc.bind(null,a,l,e),[e]),a.flags|=2048,rr(9,Zc.bind(null,a,l,t,n),void 0,null),t},useId:function(){var e=Kn(),n=Ke.identifierPrefix;if(ke){var t=nt,a=et;t=(a&~(1<<32-Rn(a)-1)).toString(32)+t,n=":"+n+"R"+t,t=tr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=bf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Df={readContext:Nn,useCallback:cu,useContext:Nn,useEffect:is,useImperativeHandle:lu,useInsertionEffect:iu,useLayoutEffect:ou,useMemo:uu,useReducer:as,useRef:au,useState:function(){return as(ar)},useDebugValue:os,useDeferredValue:function(e){var n=Sn();return du(n,Ye.memoizedState,e)},useTransition:function(){var e=as(ar)[0],n=Sn().memoizedState;return[e,n]},useMutableSource:qc,useSyncExternalStore:Hc,useId:mu,unstable_isNewReconciler:!1},kf={readContext:Nn,useCallback:cu,useContext:Nn,useEffect:is,useImperativeHandle:lu,useInsertionEffect:iu,useLayoutEffect:ou,useMemo:uu,useReducer:rs,useRef:au,useState:function(){return rs(ar)},useDebugValue:os,useDeferredValue:function(e){var n=Sn();return Ye===null?n.memoizedState=e:du(n,Ye.memoizedState,e)},useTransition:function(){var e=rs(ar)[0],n=Sn().memoizedState;return[e,n]},useMutableSource:qc,useSyncExternalStore:Hc,useId:mu,unstable_isNewReconciler:!1};function On(e,n){if(e&&e.defaultProps){n=G({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function ss(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:G({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var di={isMounted:function(e){return(e=e._reactInternals)?kt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var a=on(),s=Nt(e),l=at(a,s);l.payload=n,t!=null&&(l.callback=t),n=yt(e,l,s),n!==null&&(Qn(n,e,s,a),ai(n,e,s))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=on(),s=Nt(e),l=at(a,s);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=yt(e,l,s),n!==null&&(Qn(n,e,s,a),ai(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=on(),a=Nt(e),s=at(t,a);s.tag=2,n!=null&&(s.callback=n),n=yt(e,s,a),n!==null&&(Qn(n,e,a,t),ai(n,e,a))}};function Lu(e,n,t,a,s,l,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,l,m):n.prototype&&n.prototype.isPureReactComponent?!Ya(t,a)||!Ya(s,l):!0}function vu(e,n,t){var a=!1,s=ht,l=n.contextType;return typeof l=="object"&&l!==null?l=Nn(l):(s=cn(n)?_t:Xe.current,a=n.contextTypes,l=(a=a!=null)?ca(e,s):ht),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=di,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=l),n}function hu(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&di.enqueueReplaceState(n,n.state,null)}function ls(e,n,t,a){var s=e.stateNode;s.props=t,s.state=e.memoizedState,s.refs={},$o(e);var l=n.contextType;typeof l=="object"&&l!==null?s.context=Nn(l):(l=cn(n)?_t:Xe.current,s.context=ca(e,l)),s.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(ss(e,n,l,t),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(n=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),n!==s.state&&di.enqueueReplaceState(s,s.state,null),ri(e,t,s,a),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function va(e,n){try{var t="",a=n;do t+=B(a),a=a.return;while(a);var s=t}catch(l){s=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:s,digest:null}}function cs(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function us(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Rf=typeof WeakMap=="function"?WeakMap:Map;function gu(e,n,t){t=at(-1,t),t.tag=3,t.payload={element:null};var a=n.value;return t.callback=function(){hi||(hi=!0,Ns=a),us(e,n)},t}function Pu(e,n,t){t=at(-1,t),t.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var s=n.value;t.payload=function(){return a(s)},t.callback=function(){us(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){us(e,n),typeof a!="function"&&(Et===null?Et=new Set([this]):Et.add(this));var m=n.stack;this.componentDidCatch(n.value,{componentStack:m!==null?m:""})}),t}function yu(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new Rf;var s=new Set;a.set(n,s)}else s=a.get(n),s===void 0&&(s=new Set,a.set(n,s));s.has(t)||(s.add(t),e=qf.bind(null,e,n,t),n.then(e,e))}function Mu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Eu(e,n,t,a,s){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=at(-1,1),n.tag=2,yt(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=s,e)}var _f=Z.ReactCurrentOwner,un=!1;function rn(e,n,t,a){n.child=e===null?Bc(n,null,t,a):pa(n,e.child,t,a)}function Cu(e,n,t,a,s){t=t.render;var l=n.ref;return Ta(n,s),a=ns(e,n,t,a,l,s),t=ts(),e!==null&&!un?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,rt(e,n,s)):(ke&&t&&Oo(n),n.flags|=1,rn(e,n,a,s),n.child)}function Nu(e,n,t,a,s){if(e===null){var l=t.type;return typeof l=="function"&&!js(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,Su(e,n,l,a,s)):(e=Ci(t.type,null,a,n,n.mode,s),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,(e.lanes&s)===0){var m=l.memoizedProps;if(t=t.compare,t=t!==null?t:Ya,t(m,a)&&e.ref===n.ref)return rt(e,n,s)}return n.flags|=1,e=xt(l,a),e.ref=n.ref,e.return=n,n.child=e}function Su(e,n,t,a,s){if(e!==null){var l=e.memoizedProps;if(Ya(l,a)&&e.ref===n.ref)if(un=!1,n.pendingProps=a=l,(e.lanes&s)!==0)(e.flags&131072)!==0&&(un=!0);else return n.lanes=e.lanes,rt(e,n,s)}return ds(e,n,t,a,s)}function xu(e,n,t){var a=n.pendingProps,s=a.children,l=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ae(ga,hn),hn|=t;else{if((t&1073741824)===0)return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Ae(ga,hn),hn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=l!==null?l.baseLanes:t,Ae(ga,hn),hn|=a}else l!==null?(a=l.baseLanes|t,n.memoizedState=null):a=t,Ae(ga,hn),hn|=a;return rn(e,n,s,t),n.child}function bu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ds(e,n,t,a,s){var l=cn(t)?_t:Xe.current;return l=ca(n,l),Ta(n,s),t=ns(e,n,t,a,l,s),a=ts(),e!==null&&!un?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,rt(e,n,s)):(ke&&a&&Oo(n),n.flags|=1,rn(e,n,t,s),n.child)}function Vu(e,n,t,a,s){if(cn(t)){var l=!0;qr(n)}else l=!1;if(Ta(n,s),n.stateNode===null)pi(e,n),vu(n,t,a),ls(n,t,a,s),a=!0;else if(e===null){var m=n.stateNode,v=n.memoizedProps;m.props=v;var h=m.context,A=t.contextType;typeof A=="object"&&A!==null?A=Nn(A):(A=cn(t)?_t:Xe.current,A=ca(n,A));var I=t.getDerivedStateFromProps,F=typeof I=="function"||typeof m.getSnapshotBeforeUpdate=="function";F||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==a||h!==A)&&hu(n,m,a,A),Pt=!1;var _=n.memoizedState;m.state=_,ri(n,a,m,s),h=n.memoizedState,v!==a||_!==h||ln.current||Pt?(typeof I=="function"&&(ss(n,t,I,a),h=n.memoizedState),(v=Pt||Lu(n,t,v,a,_,h,A))?(F||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(n.flags|=4194308)):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=h),m.props=a,m.state=h,m.context=A,a=v):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{m=n.stateNode,Gc(e,n),v=n.memoizedProps,A=n.type===n.elementType?v:On(n.type,v),m.props=A,F=n.pendingProps,_=m.context,h=t.contextType,typeof h=="object"&&h!==null?h=Nn(h):(h=cn(t)?_t:Xe.current,h=ca(n,h));var U=t.getDerivedStateFromProps;(I=typeof U=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==F||_!==h)&&hu(n,m,a,h),Pt=!1,_=n.memoizedState,m.state=_,ri(n,a,m,s);var $=n.memoizedState;v!==F||_!==$||ln.current||Pt?(typeof U=="function"&&(ss(n,t,U,a),$=n.memoizedState),(A=Pt||Lu(n,t,A,a,_,$,h)||!1)?(I||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(a,$,h),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(a,$,h)),typeof m.componentDidUpdate=="function"&&(n.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&_===e.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&_===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=$),m.props=a,m.state=$,m.context=h,a=A):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&_===e.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&_===e.memoizedState||(n.flags|=1024),a=!1)}return ms(e,n,t,a,l,s)}function ms(e,n,t,a,s,l){bu(e,n);var m=(n.flags&128)!==0;if(!a&&!m)return s&&kc(n,t,!1),rt(e,n,l);a=n.stateNode,_f.current=n;var v=m&&typeof t.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&m?(n.child=pa(n,e.child,null,l),n.child=pa(n,null,v,l)):rn(e,n,v,l),n.memoizedState=a.state,s&&kc(n,t,!0),n.child}function Au(e){var n=e.stateNode;n.pendingContext?jc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&jc(e,n.context,!1),qo(e,n.containerInfo)}function wu(e,n,t,a,s){return ma(),Jo(s),n.flags|=256,rn(e,n,t,a),n.child}var ps={dehydrated:null,treeContext:null,retryLane:0};function fs(e){return{baseLanes:e,cachePool:null,transitions:null}}function ju(e,n,t){var a=n.pendingProps,s=Re.current,l=!1,m=(n.flags&128)!==0,v;if((v=m)||(v=e!==null&&e.memoizedState===null?!1:(s&2)!==0),v?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),Ae(Re,s&1),e===null)return Qo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(m=a.children,e=a.fallback,l?(a=n.mode,l=n.child,m={mode:"hidden",children:m},(a&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=m):l=Ni(m,a,0,null),e=Ut(e,a,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=fs(t),n.memoizedState=ps,e):Ts(n,m));if(s=e.memoizedState,s!==null&&(v=s.dehydrated,v!==null))return If(e,n,m,a,v,s,t);if(l){l=a.fallback,m=n.mode,s=e.child,v=s.sibling;var h={mode:"hidden",children:a.children};return(m&1)===0&&n.child!==s?(a=n.child,a.childLanes=0,a.pendingProps=h,n.deletions=null):(a=xt(s,h),a.subtreeFlags=s.subtreeFlags&14680064),v!==null?l=xt(v,l):(l=Ut(l,m,t,null),l.flags|=2),l.return=n,a.return=n,a.sibling=l,n.child=a,a=l,l=n.child,m=e.child.memoizedState,m=m===null?fs(t):{baseLanes:m.baseLanes|t,cachePool:null,transitions:m.transitions},l.memoizedState=m,l.childLanes=e.childLanes&~t,n.memoizedState=ps,a}return l=e.child,e=l.sibling,a=xt(l,{mode:"visible",children:a.children}),(n.mode&1)===0&&(a.lanes=t),a.return=n,a.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=a,n.memoizedState=null,a}function Ts(e,n){return n=Ni({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function mi(e,n,t,a){return a!==null&&Jo(a),pa(n,e.child,null,t),e=Ts(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function If(e,n,t,a,s,l,m){if(t)return n.flags&256?(n.flags&=-257,a=cs(Error(o(422))),mi(e,n,m,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=a.fallback,s=n.mode,a=Ni({mode:"visible",children:a.children},s,0,null),l=Ut(l,s,m,null),l.flags|=2,a.return=n,l.return=n,a.sibling=l,n.child=a,(n.mode&1)!==0&&pa(n,e.child,null,m),n.child.memoizedState=fs(m),n.memoizedState=ps,l);if((n.mode&1)===0)return mi(e,n,m,null);if(s.data==="$!"){if(a=s.nextSibling&&s.nextSibling.dataset,a)var v=a.dgst;return a=v,l=Error(o(419)),a=cs(l,a,void 0),mi(e,n,m,a)}if(v=(m&e.childLanes)!==0,un||v){if(a=Ke,a!==null){switch(m&-m){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(a.suspendedLanes|m))!==0?0:s,s!==0&&s!==l.retryLane&&(l.retryLane=s,tt(e,s),Qn(a,e,s,-1))}return ws(),a=cs(Error(o(421))),mi(e,n,m,a)}return s.data==="$?"?(n.flags|=128,n.child=e.child,n=Hf.bind(null,e),s._reactRetry=n,null):(e=l.treeContext,vn=Lt(s.nextSibling),Ln=n,ke=!0,In=null,e!==null&&(En[Cn++]=et,En[Cn++]=nt,En[Cn++]=It,et=e.id,nt=e.overflow,It=n),n=Ts(n,a.children),n.flags|=4096,n)}function Du(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Uo(e.return,n,t)}function Ls(e,n,t,a,s){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:s}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=a,l.tail=t,l.tailMode=s)}function ku(e,n,t){var a=n.pendingProps,s=a.revealOrder,l=a.tail;if(rn(e,n,a.children,t),a=Re.current,(a&2)!==0)a=a&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Du(e,t,n);else if(e.tag===19)Du(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(Ae(Re,a),(n.mode&1)===0)n.memoizedState=null;else switch(s){case"forwards":for(t=n.child,s=null;t!==null;)e=t.alternate,e!==null&&ii(e)===null&&(s=t),t=t.sibling;t=s,t===null?(s=n.child,n.child=null):(s=t.sibling,t.sibling=null),Ls(n,!1,s,t,l);break;case"backwards":for(t=null,s=n.child,n.child=null;s!==null;){if(e=s.alternate,e!==null&&ii(e)===null){n.child=s;break}e=s.sibling,s.sibling=t,t=s,s=e}Ls(n,!0,t,null,l);break;case"together":Ls(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function pi(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function rt(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Jt|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(o(153));if(n.child!==null){for(e=n.child,t=xt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=xt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Of(e,n,t){switch(n.tag){case 3:Au(n),ma();break;case 5:$c(n);break;case 1:cn(n.type)&&qr(n);break;case 4:qo(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,s=n.memoizedProps.value;Ae(ni,a._currentValue),a._currentValue=s;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(Ae(Re,Re.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?ju(e,n,t):(Ae(Re,Re.current&1),e=rt(e,n,t),e!==null?e.sibling:null);Ae(Re,Re.current&1);break;case 19:if(a=(t&n.childLanes)!==0,(e.flags&128)!==0){if(a)return ku(e,n,t);n.flags|=128}if(s=n.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ae(Re,Re.current),a)break;return null;case 22:case 23:return n.lanes=0,xu(e,n,t)}return rt(e,n,t)}var Ru,vs,_u,Iu;Ru=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},vs=function(){},_u=function(e,n,t,a){var s=e.memoizedProps;if(s!==a){e=n.stateNode,zt(Un.current);var l=null;switch(t){case"input":s=k(e,s),a=k(e,a),l=[];break;case"select":s=G({},s,{value:void 0}),a=G({},a,{value:void 0}),l=[];break;case"textarea":s=Wt(e,s),a=Wt(e,a),l=[];break;default:typeof s.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Ur)}Hi(t,a);var m;t=null;for(A in s)if(!a.hasOwnProperty(A)&&s.hasOwnProperty(A)&&s[A]!=null)if(A==="style"){var v=s[A];for(m in v)v.hasOwnProperty(m)&&(t||(t={}),t[m]="")}else A!=="dangerouslySetInnerHTML"&&A!=="children"&&A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&A!=="autoFocus"&&(d.hasOwnProperty(A)?l||(l=[]):(l=l||[]).push(A,null));for(A in a){var h=a[A];if(v=s!=null?s[A]:void 0,a.hasOwnProperty(A)&&h!==v&&(h!=null||v!=null))if(A==="style")if(v){for(m in v)!v.hasOwnProperty(m)||h&&h.hasOwnProperty(m)||(t||(t={}),t[m]="");for(m in h)h.hasOwnProperty(m)&&v[m]!==h[m]&&(t||(t={}),t[m]=h[m])}else t||(l||(l=[]),l.push(A,t)),t=h;else A==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,v=v?v.__html:void 0,h!=null&&v!==h&&(l=l||[]).push(A,h)):A==="children"?typeof h!="string"&&typeof h!="number"||(l=l||[]).push(A,""+h):A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&(d.hasOwnProperty(A)?(h!=null&&A==="onScroll"&&je("scroll",e),l||v===h||(l=[])):(l=l||[]).push(A,h))}t&&(l=l||[]).push("style",t);var A=l;(n.updateQueue=A)&&(n.flags|=4)}},Iu=function(e,n,t,a){t!==a&&(n.flags|=4)};function ir(e,n){if(!ke)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function nn(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var s=e.child;s!==null;)t|=s.lanes|s.childLanes,a|=s.subtreeFlags&14680064,a|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)t|=s.lanes|s.childLanes,a|=s.subtreeFlags,a|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function Ff(e,n,t){var a=n.pendingProps;switch(Fo(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(n),null;case 1:return cn(n.type)&&$r(),nn(n),null;case 3:return a=n.stateNode,La(),De(ln),De(Xe),Zo(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Xr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,In!==null&&(bs(In),In=null))),vs(e,n),nn(n),null;case 5:Ho(n);var s=zt(er.current);if(t=n.type,e!==null&&n.stateNode!=null)_u(e,n,t,a,s),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(o(166));return nn(n),null}if(e=zt(Un.current),Xr(n)){a=n.stateNode,t=n.type;var l=n.memoizedProps;switch(a[Gn]=n,a[qa]=l,e=(n.mode&1)!==0,t){case"dialog":je("cancel",a),je("close",a);break;case"iframe":case"object":case"embed":je("load",a);break;case"video":case"audio":for(s=0;s<Ua.length;s++)je(Ua[s],a);break;case"source":je("error",a);break;case"img":case"image":case"link":je("error",a),je("load",a);break;case"details":je("toggle",a);break;case"input":Ce(a,l),je("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!l.multiple},je("invalid",a);break;case"textarea":Er(a,l),je("invalid",a)}Hi(t,l),s=null;for(var m in l)if(l.hasOwnProperty(m)){var v=l[m];m==="children"?typeof v=="string"?a.textContent!==v&&(l.suppressHydrationWarning!==!0&&Gr(a.textContent,v,e),s=["children",v]):typeof v=="number"&&a.textContent!==""+v&&(l.suppressHydrationWarning!==!0&&Gr(a.textContent,v,e),s=["children",""+v]):d.hasOwnProperty(m)&&v!=null&&m==="onScroll"&&je("scroll",a)}switch(t){case"input":sn(a),kn(a,l,!0);break;case"textarea":sn(a),ba(a);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(a.onclick=Ur)}a=s,n.updateQueue=a,a!==null&&(n.flags|=4)}else{m=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=b(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=m.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=m.createElement(t,{is:a.is}):(e=m.createElement(t),t==="select"&&(m=e,a.multiple?m.multiple=!0:a.size&&(m.size=a.size))):e=m.createElementNS(e,t),e[Gn]=n,e[qa]=a,Ru(e,n,!1,!1),n.stateNode=e;e:{switch(m=Wi(t,a),t){case"dialog":je("cancel",e),je("close",e),s=a;break;case"iframe":case"object":case"embed":je("load",e),s=a;break;case"video":case"audio":for(s=0;s<Ua.length;s++)je(Ua[s],e);s=a;break;case"source":je("error",e),s=a;break;case"img":case"image":case"link":je("error",e),je("load",e),s=a;break;case"details":je("toggle",e),s=a;break;case"input":Ce(e,a),s=k(e,a),je("invalid",e);break;case"option":s=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},s=G({},a,{value:void 0}),je("invalid",e);break;case"textarea":Er(e,a),s=Wt(e,a),je("invalid",e);break;default:s=a}Hi(t,s),v=s;for(l in v)if(v.hasOwnProperty(l)){var h=v[l];l==="style"?Sl(e,h):l==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&xe(e,h)):l==="children"?typeof h=="string"?(t!=="textarea"||h!=="")&&yn(e,h):typeof h=="number"&&yn(e,""+h):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(d.hasOwnProperty(l)?h!=null&&l==="onScroll"&&je("scroll",e):h!=null&&te(e,l,h,m))}switch(t){case"input":sn(e),kn(e,a,!1);break;case"textarea":sn(e),ba(e);break;case"option":a.value!=null&&e.setAttribute("value",""+he(a.value));break;case"select":e.multiple=!!a.multiple,l=a.value,l!=null?lt(e,!!a.multiple,l,!1):a.defaultValue!=null&&lt(e,!!a.multiple,a.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Ur)}switch(t){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return nn(n),null;case 6:if(e&&n.stateNode!=null)Iu(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(o(166));if(t=zt(er.current),zt(Un.current),Xr(n)){if(a=n.stateNode,t=n.memoizedProps,a[Gn]=n,(l=a.nodeValue!==t)&&(e=Ln,e!==null))switch(e.tag){case 3:Gr(a.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Gr(a.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else a=(t.nodeType===9?t:t.ownerDocument).createTextNode(a),a[Gn]=n,n.stateNode=a}return nn(n),null;case 13:if(De(Re),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ke&&vn!==null&&(n.mode&1)!==0&&(n.flags&128)===0)zc(),ma(),n.flags|=98560,l=!1;else if(l=Xr(n),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(o(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(o(317));l[Gn]=n}else ma(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;nn(n),l=!1}else In!==null&&(bs(In),In=null),l=!0;if(!l)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(Re.current&1)!==0?Ge===0&&(Ge=3):ws())),n.updateQueue!==null&&(n.flags|=4),nn(n),null);case 4:return La(),vs(e,n),e===null&&Ka(n.stateNode.containerInfo),nn(n),null;case 10:return Go(n.type._context),nn(n),null;case 17:return cn(n.type)&&$r(),nn(n),null;case 19:if(De(Re),l=n.memoizedState,l===null)return nn(n),null;if(a=(n.flags&128)!==0,m=l.rendering,m===null)if(a)ir(l,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(m=ii(e),m!==null){for(n.flags|=128,ir(l,!1),a=m.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=t,t=n.child;t!==null;)l=t,e=a,l.flags&=14680066,m=l.alternate,m===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=m.childLanes,l.lanes=m.lanes,l.child=m.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=m.memoizedProps,l.memoizedState=m.memoizedState,l.updateQueue=m.updateQueue,l.type=m.type,e=m.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return Ae(Re,Re.current&1|2),n.child}e=e.sibling}l.tail!==null&&Fe()>Pa&&(n.flags|=128,a=!0,ir(l,!1),n.lanes=4194304)}else{if(!a)if(e=ii(m),e!==null){if(n.flags|=128,a=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),ir(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!ke)return nn(n),null}else 2*Fe()-l.renderingStartTime>Pa&&t!==1073741824&&(n.flags|=128,a=!0,ir(l,!1),n.lanes=4194304);l.isBackwards?(m.sibling=n.child,n.child=m):(t=l.last,t!==null?t.sibling=m:n.child=m,l.last=m)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Fe(),n.sibling=null,t=Re.current,Ae(Re,a?t&1|2:t&1),n):(nn(n),null);case 22:case 23:return As(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&(n.mode&1)!==0?(hn&1073741824)!==0&&(nn(n),n.subtreeFlags&6&&(n.flags|=8192)):nn(n),null;case 24:return null;case 25:return null}throw Error(o(156,n.tag))}function zf(e,n){switch(Fo(n),n.tag){case 1:return cn(n.type)&&$r(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return La(),De(ln),De(Xe),Zo(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return Ho(n),null;case 13:if(De(Re),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(o(340));ma()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return De(Re),null;case 4:return La(),null;case 10:return Go(n.type._context),null;case 22:case 23:return As(),null;case 24:return null;default:return null}}var fi=!1,tn=!1,Qf=typeof WeakSet=="function"?WeakSet:Set,K=null;function ha(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(a){Oe(e,n,a)}else t.current=null}function hs(e,n,t){try{t()}catch(a){Oe(e,n,a)}}var Ou=!1;function Jf(e,n){if(Ao=kr,e=Lc(),Mo(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var s=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var m=0,v=-1,h=-1,A=0,I=0,F=e,_=null;n:for(;;){for(var U;F!==t||s!==0&&F.nodeType!==3||(v=m+s),F!==l||a!==0&&F.nodeType!==3||(h=m+a),F.nodeType===3&&(m+=F.nodeValue.length),(U=F.firstChild)!==null;)_=F,F=U;for(;;){if(F===e)break n;if(_===t&&++A===s&&(v=m),_===l&&++I===a&&(h=m),(U=F.nextSibling)!==null)break;F=_,_=F.parentNode}F=U}t=v===-1||h===-1?null:{start:v,end:h}}else t=null}t=t||{start:0,end:0}}else t=null;for(wo={focusedElem:e,selectionRange:t},kr=!1,K=n;K!==null;)if(n=K,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,K=e;else for(;K!==null;){n=K;try{var $=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if($!==null){var q=$.memoizedProps,ze=$.memoizedState,E=n.stateNode,P=E.getSnapshotBeforeUpdate(n.elementType===n.type?q:On(n.type,q),ze);E.__reactInternalSnapshotBeforeUpdate=P}break;case 3:var S=n.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(J){Oe(n,n.return,J)}if(e=n.sibling,e!==null){e.return=n.return,K=e;break}K=n.return}return $=Ou,Ou=!1,$}function or(e,n,t){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var s=a=a.next;do{if((s.tag&e)===e){var l=s.destroy;s.destroy=void 0,l!==void 0&&hs(n,t,l)}s=s.next}while(s!==a)}}function Ti(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var a=t.create;t.destroy=a()}t=t.next}while(t!==n)}}function gs(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Fu(e){var n=e.alternate;n!==null&&(e.alternate=null,Fu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Gn],delete n[qa],delete n[Ro],delete n[Cf],delete n[Nf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zu(e){return e.tag===5||e.tag===3||e.tag===4}function Qu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ps(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Ur));else if(a!==4&&(e=e.child,e!==null))for(Ps(e,n,t),e=e.sibling;e!==null;)Ps(e,n,t),e=e.sibling}function ys(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(ys(e,n,t),e=e.sibling;e!==null;)ys(e,n,t),e=e.sibling}var He=null,Fn=!1;function Mt(e,n,t){for(t=t.child;t!==null;)Ju(e,n,t),t=t.sibling}function Ju(e,n,t){if(Yn&&typeof Yn.onCommitFiberUnmount=="function")try{Yn.onCommitFiberUnmount(br,t)}catch{}switch(t.tag){case 5:tn||ha(t,n);case 6:var a=He,s=Fn;He=null,Mt(e,n,t),He=a,Fn=s,He!==null&&(Fn?(e=He,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):He.removeChild(t.stateNode));break;case 18:He!==null&&(Fn?(e=He,t=t.stateNode,e.nodeType===8?ko(e.parentNode,t):e.nodeType===1&&ko(e,t),Oa(e)):ko(He,t.stateNode));break;case 4:a=He,s=Fn,He=t.stateNode.containerInfo,Fn=!0,Mt(e,n,t),He=a,Fn=s;break;case 0:case 11:case 14:case 15:if(!tn&&(a=t.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){s=a=a.next;do{var l=s,m=l.destroy;l=l.tag,m!==void 0&&((l&2)!==0||(l&4)!==0)&&hs(t,n,m),s=s.next}while(s!==a)}Mt(e,n,t);break;case 1:if(!tn&&(ha(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=t.memoizedProps,a.state=t.memoizedState,a.componentWillUnmount()}catch(v){Oe(t,n,v)}Mt(e,n,t);break;case 21:Mt(e,n,t);break;case 22:t.mode&1?(tn=(a=tn)||t.memoizedState!==null,Mt(e,n,t),tn=a):Mt(e,n,t);break;default:Mt(e,n,t)}}function Bu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Qf),n.forEach(function(a){var s=Wf.bind(null,e,a);t.has(a)||(t.add(a),a.then(s,s))})}}function zn(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var s=t[a];try{var l=e,m=n,v=m;e:for(;v!==null;){switch(v.tag){case 5:He=v.stateNode,Fn=!1;break e;case 3:He=v.stateNode.containerInfo,Fn=!0;break e;case 4:He=v.stateNode.containerInfo,Fn=!0;break e}v=v.return}if(He===null)throw Error(o(160));Ju(l,m,s),He=null,Fn=!1;var h=s.alternate;h!==null&&(h.return=null),s.return=null}catch(A){Oe(s,n,A)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Yu(n,e),n=n.sibling}function Yu(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(zn(n,e),$n(e),a&4){try{or(3,e,e.return),Ti(3,e)}catch(q){Oe(e,e.return,q)}try{or(5,e,e.return)}catch(q){Oe(e,e.return,q)}}break;case 1:zn(n,e),$n(e),a&512&&t!==null&&ha(t,t.return);break;case 5:if(zn(n,e),$n(e),a&512&&t!==null&&ha(t,t.return),e.flags&32){var s=e.stateNode;try{yn(s,"")}catch(q){Oe(e,e.return,q)}}if(a&4&&(s=e.stateNode,s!=null)){var l=e.memoizedProps,m=t!==null?t.memoizedProps:l,v=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{v==="input"&&l.type==="radio"&&l.name!=null&&we(s,l),Wi(v,m);var A=Wi(v,l);for(m=0;m<h.length;m+=2){var I=h[m],F=h[m+1];I==="style"?Sl(s,F):I==="dangerouslySetInnerHTML"?xe(s,F):I==="children"?yn(s,F):te(s,I,F,A)}switch(v){case"input":Dn(s,l);break;case"textarea":Cr(s,l);break;case"select":var _=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!l.multiple;var U=l.value;U!=null?lt(s,!!l.multiple,U,!1):_!==!!l.multiple&&(l.defaultValue!=null?lt(s,!!l.multiple,l.defaultValue,!0):lt(s,!!l.multiple,l.multiple?[]:"",!1))}s[qa]=l}catch(q){Oe(e,e.return,q)}}break;case 6:if(zn(n,e),$n(e),a&4){if(e.stateNode===null)throw Error(o(162));s=e.stateNode,l=e.memoizedProps;try{s.nodeValue=l}catch(q){Oe(e,e.return,q)}}break;case 3:if(zn(n,e),$n(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Oa(n.containerInfo)}catch(q){Oe(e,e.return,q)}break;case 4:zn(n,e),$n(e);break;case 13:zn(n,e),$n(e),s=e.child,s.flags&8192&&(l=s.memoizedState!==null,s.stateNode.isHidden=l,!l||s.alternate!==null&&s.alternate.memoizedState!==null||(Cs=Fe())),a&4&&Bu(e);break;case 22:if(I=t!==null&&t.memoizedState!==null,e.mode&1?(tn=(A=tn)||I,zn(n,e),tn=A):zn(n,e),$n(e),a&8192){if(A=e.memoizedState!==null,(e.stateNode.isHidden=A)&&!I&&(e.mode&1)!==0)for(K=e,I=e.child;I!==null;){for(F=K=I;K!==null;){switch(_=K,U=_.child,_.tag){case 0:case 11:case 14:case 15:or(4,_,_.return);break;case 1:ha(_,_.return);var $=_.stateNode;if(typeof $.componentWillUnmount=="function"){a=_,t=_.return;try{n=a,$.props=n.memoizedProps,$.state=n.memoizedState,$.componentWillUnmount()}catch(q){Oe(a,t,q)}}break;case 5:ha(_,_.return);break;case 22:if(_.memoizedState!==null){Ku(F);continue}}U!==null?(U.return=_,K=U):Ku(F)}I=I.sibling}e:for(I=null,F=e;;){if(F.tag===5){if(I===null){I=F;try{s=F.stateNode,A?(l=s.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(v=F.stateNode,h=F.memoizedProps.style,m=h!=null&&h.hasOwnProperty("display")?h.display:null,v.style.display=Nl("display",m))}catch(q){Oe(e,e.return,q)}}}else if(F.tag===6){if(I===null)try{F.stateNode.nodeValue=A?"":F.memoizedProps}catch(q){Oe(e,e.return,q)}}else if((F.tag!==22&&F.tag!==23||F.memoizedState===null||F===e)&&F.child!==null){F.child.return=F,F=F.child;continue}if(F===e)break e;for(;F.sibling===null;){if(F.return===null||F.return===e)break e;I===F&&(I=null),F=F.return}I===F&&(I=null),F.sibling.return=F.return,F=F.sibling}}break;case 19:zn(n,e),$n(e),a&4&&Bu(e);break;case 21:break;default:zn(n,e),$n(e)}}function $n(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(zu(t)){var a=t;break e}t=t.return}throw Error(o(160))}switch(a.tag){case 5:var s=a.stateNode;a.flags&32&&(yn(s,""),a.flags&=-33);var l=Qu(e);ys(e,l,s);break;case 3:case 4:var m=a.stateNode.containerInfo,v=Qu(e);Ps(e,v,m);break;default:throw Error(o(161))}}catch(h){Oe(e,e.return,h)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Bf(e,n,t){K=e,Gu(e)}function Gu(e,n,t){for(var a=(e.mode&1)!==0;K!==null;){var s=K,l=s.child;if(s.tag===22&&a){var m=s.memoizedState!==null||fi;if(!m){var v=s.alternate,h=v!==null&&v.memoizedState!==null||tn;v=fi;var A=tn;if(fi=m,(tn=h)&&!A)for(K=s;K!==null;)m=K,h=m.child,m.tag===22&&m.memoizedState!==null?$u(s):h!==null?(h.return=m,K=h):$u(s);for(;l!==null;)K=l,Gu(l),l=l.sibling;K=s,fi=v,tn=A}Uu(e)}else(s.subtreeFlags&8772)!==0&&l!==null?(l.return=s,K=l):Uu(e)}}function Uu(e){for(;K!==null;){var n=K;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:tn||Ti(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!tn)if(t===null)a.componentDidMount();else{var s=n.elementType===n.type?t.memoizedProps:On(n.type,t.memoizedProps);a.componentDidUpdate(s,t.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&Kc(n,l,a);break;case 3:var m=n.updateQueue;if(m!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Kc(n,m,t)}break;case 5:var v=n.stateNode;if(t===null&&n.flags&4){t=v;var h=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&t.focus();break;case"img":h.src&&(t.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var A=n.alternate;if(A!==null){var I=A.memoizedState;if(I!==null){var F=I.dehydrated;F!==null&&Oa(F)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}tn||n.flags&512&&gs(n)}catch(_){Oe(n,n.return,_)}}if(n===e){K=null;break}if(t=n.sibling,t!==null){t.return=n.return,K=t;break}K=n.return}}function Ku(e){for(;K!==null;){var n=K;if(n===e){K=null;break}var t=n.sibling;if(t!==null){t.return=n.return,K=t;break}K=n.return}}function $u(e){for(;K!==null;){var n=K;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ti(4,n)}catch(h){Oe(n,t,h)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var s=n.return;try{a.componentDidMount()}catch(h){Oe(n,s,h)}}var l=n.return;try{gs(n)}catch(h){Oe(n,l,h)}break;case 5:var m=n.return;try{gs(n)}catch(h){Oe(n,m,h)}}}catch(h){Oe(n,n.return,h)}if(n===e){K=null;break}var v=n.sibling;if(v!==null){v.return=n.return,K=v;break}K=n.return}}var Yf=Math.ceil,Li=Z.ReactCurrentDispatcher,Ms=Z.ReactCurrentOwner,xn=Z.ReactCurrentBatchConfig,Ne=0,Ke=null,Be=null,We=0,hn=0,ga=vt(0),Ge=0,sr=null,Jt=0,vi=0,Es=0,lr=null,dn=null,Cs=0,Pa=1/0,it=null,hi=!1,Ns=null,Et=null,gi=!1,Ct=null,Pi=0,cr=0,Ss=null,yi=-1,Mi=0;function on(){return(Ne&6)!==0?Fe():yi!==-1?yi:yi=Fe()}function Nt(e){return(e.mode&1)===0?1:(Ne&2)!==0&&We!==0?We&-We:xf.transition!==null?(Mi===0&&(Mi=Ql()),Mi):(e=be,e!==0||(e=window.event,e=e===void 0?16:Hl(e.type)),e)}function Qn(e,n,t,a){if(50<cr)throw cr=0,Ss=null,Error(o(185));Da(e,t,a),((Ne&2)===0||e!==Ke)&&(e===Ke&&((Ne&2)===0&&(vi|=t),Ge===4&&St(e,We)),mn(e,a),t===1&&Ne===0&&(n.mode&1)===0&&(Pa=Fe()+500,Hr&&gt()))}function mn(e,n){var t=e.callbackNode;Sp(e,n);var a=wr(e,e===Ke?We:0);if(a===0)t!==null&&Ol(t),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(t!=null&&Ol(t),n===1)e.tag===0?Sf(Hu.bind(null,e)):Rc(Hu.bind(null,e)),Mf(function(){(Ne&6)===0&&gt()}),t=null;else{switch(Jl(a)){case 1:t=ro;break;case 4:t=Fl;break;case 16:t=xr;break;case 536870912:t=zl;break;default:t=xr}t=rd(t,qu.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function qu(e,n){if(yi=-1,Mi=0,(Ne&6)!==0)throw Error(o(327));var t=e.callbackNode;if(ya()&&e.callbackNode!==t)return null;var a=wr(e,e===Ke?We:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||n)n=Ei(e,a);else{n=a;var s=Ne;Ne|=2;var l=Zu();(Ke!==e||We!==n)&&(it=null,Pa=Fe()+500,Yt(e,n));do try{Kf();break}catch(v){Wu(e,v)}while(!0);Yo(),Li.current=l,Ne=s,Be!==null?n=0:(Ke=null,We=0,n=Ge)}if(n!==0){if(n===2&&(s=io(e),s!==0&&(a=s,n=xs(e,s))),n===1)throw t=sr,Yt(e,0),St(e,a),mn(e,Fe()),t;if(n===6)St(e,a);else{if(s=e.current.alternate,(a&30)===0&&!Gf(s)&&(n=Ei(e,a),n===2&&(l=io(e),l!==0&&(a=l,n=xs(e,l))),n===1))throw t=sr,Yt(e,0),St(e,a),mn(e,Fe()),t;switch(e.finishedWork=s,e.finishedLanes=a,n){case 0:case 1:throw Error(o(345));case 2:Gt(e,dn,it);break;case 3:if(St(e,a),(a&130023424)===a&&(n=Cs+500-Fe(),10<n)){if(wr(e,0)!==0)break;if(s=e.suspendedLanes,(s&a)!==a){on(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Do(Gt.bind(null,e,dn,it),n);break}Gt(e,dn,it);break;case 4:if(St(e,a),(a&4194240)===a)break;for(n=e.eventTimes,s=-1;0<a;){var m=31-Rn(a);l=1<<m,m=n[m],m>s&&(s=m),a&=~l}if(a=s,a=Fe()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Yf(a/1960))-a,10<a){e.timeoutHandle=Do(Gt.bind(null,e,dn,it),a);break}Gt(e,dn,it);break;case 5:Gt(e,dn,it);break;default:throw Error(o(329))}}}return mn(e,Fe()),e.callbackNode===t?qu.bind(null,e):null}function xs(e,n){var t=lr;return e.current.memoizedState.isDehydrated&&(Yt(e,n).flags|=256),e=Ei(e,n),e!==2&&(n=dn,dn=t,n!==null&&bs(n)),e}function bs(e){dn===null?dn=e:dn.push.apply(dn,e)}function Gf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var a=0;a<t.length;a++){var s=t[a],l=s.getSnapshot;s=s.value;try{if(!_n(l(),s))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function St(e,n){for(n&=~Es,n&=~vi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Rn(n),a=1<<t;e[t]=-1,n&=~a}}function Hu(e){if((Ne&6)!==0)throw Error(o(327));ya();var n=wr(e,0);if((n&1)===0)return mn(e,Fe()),null;var t=Ei(e,n);if(e.tag!==0&&t===2){var a=io(e);a!==0&&(n=a,t=xs(e,a))}if(t===1)throw t=sr,Yt(e,0),St(e,n),mn(e,Fe()),t;if(t===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Gt(e,dn,it),mn(e,Fe()),null}function Vs(e,n){var t=Ne;Ne|=1;try{return e(n)}finally{Ne=t,Ne===0&&(Pa=Fe()+500,Hr&&gt())}}function Bt(e){Ct!==null&&Ct.tag===0&&(Ne&6)===0&&ya();var n=Ne;Ne|=1;var t=xn.transition,a=be;try{if(xn.transition=null,be=1,e)return e()}finally{be=a,xn.transition=t,Ne=n,(Ne&6)===0&&gt()}}function As(){hn=ga.current,De(ga)}function Yt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,yf(t)),Be!==null)for(t=Be.return;t!==null;){var a=t;switch(Fo(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&$r();break;case 3:La(),De(ln),De(Xe),Zo();break;case 5:Ho(a);break;case 4:La();break;case 13:De(Re);break;case 19:De(Re);break;case 10:Go(a.type._context);break;case 22:case 23:As()}t=t.return}if(Ke=e,Be=e=xt(e.current,null),We=hn=n,Ge=0,sr=null,Es=vi=Jt=0,dn=lr=null,Ft!==null){for(n=0;n<Ft.length;n++)if(t=Ft[n],a=t.interleaved,a!==null){t.interleaved=null;var s=a.next,l=t.pending;if(l!==null){var m=l.next;l.next=s,a.next=m}t.pending=a}Ft=null}return e}function Wu(e,n){do{var t=Be;try{if(Yo(),oi.current=ui,si){for(var a=_e.memoizedState;a!==null;){var s=a.queue;s!==null&&(s.pending=null),a=a.next}si=!1}if(Qt=0,Ue=Ye=_e=null,nr=!1,tr=0,Ms.current=null,t===null||t.return===null){Ge=1,sr=n,Be=null;break}e:{var l=e,m=t.return,v=t,h=n;if(n=We,v.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var A=h,I=v,F=I.tag;if((I.mode&1)===0&&(F===0||F===11||F===15)){var _=I.alternate;_?(I.updateQueue=_.updateQueue,I.memoizedState=_.memoizedState,I.lanes=_.lanes):(I.updateQueue=null,I.memoizedState=null)}var U=Mu(m);if(U!==null){U.flags&=-257,Eu(U,m,v,l,n),U.mode&1&&yu(l,A,n),n=U,h=A;var $=n.updateQueue;if($===null){var q=new Set;q.add(h),n.updateQueue=q}else $.add(h);break e}else{if((n&1)===0){yu(l,A,n),ws();break e}h=Error(o(426))}}else if(ke&&v.mode&1){var ze=Mu(m);if(ze!==null){(ze.flags&65536)===0&&(ze.flags|=256),Eu(ze,m,v,l,n),Jo(va(h,v));break e}}l=h=va(h,v),Ge!==4&&(Ge=2),lr===null?lr=[l]:lr.push(l),l=m;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var E=gu(l,h,n);Uc(l,E);break e;case 1:v=h;var P=l.type,S=l.stateNode;if((l.flags&128)===0&&(typeof P.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Et===null||!Et.has(S)))){l.flags|=65536,n&=-n,l.lanes|=n;var J=Pu(l,v,n);Uc(l,J);break e}}l=l.return}while(l!==null)}ed(t)}catch(W){n=W,Be===t&&t!==null&&(Be=t=t.return);continue}break}while(!0)}function Zu(){var e=Li.current;return Li.current=ui,e===null?ui:e}function ws(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),Ke===null||(Jt&268435455)===0&&(vi&268435455)===0||St(Ke,We)}function Ei(e,n){var t=Ne;Ne|=2;var a=Zu();(Ke!==e||We!==n)&&(it=null,Yt(e,n));do try{Uf();break}catch(s){Wu(e,s)}while(!0);if(Yo(),Ne=t,Li.current=a,Be!==null)throw Error(o(261));return Ke=null,We=0,Ge}function Uf(){for(;Be!==null;)Xu(Be)}function Kf(){for(;Be!==null&&!vp();)Xu(Be)}function Xu(e){var n=ad(e.alternate,e,hn);e.memoizedProps=e.pendingProps,n===null?ed(e):Be=n,Ms.current=null}function ed(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=Ff(t,n,hn),t!==null){Be=t;return}}else{if(t=zf(t,n),t!==null){t.flags&=32767,Be=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ge=6,Be=null;return}}if(n=n.sibling,n!==null){Be=n;return}Be=n=e}while(n!==null);Ge===0&&(Ge=5)}function Gt(e,n,t){var a=be,s=xn.transition;try{xn.transition=null,be=1,$f(e,n,t,a)}finally{xn.transition=s,be=a}return null}function $f(e,n,t,a){do ya();while(Ct!==null);if((Ne&6)!==0)throw Error(o(327));t=e.finishedWork;var s=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(xp(e,l),e===Ke&&(Be=Ke=null,We=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||gi||(gi=!0,rd(xr,function(){return ya(),null})),l=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||l){l=xn.transition,xn.transition=null;var m=be;be=1;var v=Ne;Ne|=4,Ms.current=null,Jf(e,t),Yu(t,e),ff(wo),kr=!!Ao,wo=Ao=null,e.current=t,Bf(t),hp(),Ne=v,be=m,xn.transition=l}else e.current=t;if(gi&&(gi=!1,Ct=e,Pi=s),l=e.pendingLanes,l===0&&(Et=null),yp(t.stateNode),mn(e,Fe()),n!==null)for(a=e.onRecoverableError,t=0;t<n.length;t++)s=n[t],a(s.value,{componentStack:s.stack,digest:s.digest});if(hi)throw hi=!1,e=Ns,Ns=null,e;return(Pi&1)!==0&&e.tag!==0&&ya(),l=e.pendingLanes,(l&1)!==0?e===Ss?cr++:(cr=0,Ss=e):cr=0,gt(),null}function ya(){if(Ct!==null){var e=Jl(Pi),n=xn.transition,t=be;try{if(xn.transition=null,be=16>e?16:e,Ct===null)var a=!1;else{if(e=Ct,Ct=null,Pi=0,(Ne&6)!==0)throw Error(o(331));var s=Ne;for(Ne|=4,K=e.current;K!==null;){var l=K,m=l.child;if((K.flags&16)!==0){var v=l.deletions;if(v!==null){for(var h=0;h<v.length;h++){var A=v[h];for(K=A;K!==null;){var I=K;switch(I.tag){case 0:case 11:case 15:or(8,I,l)}var F=I.child;if(F!==null)F.return=I,K=F;else for(;K!==null;){I=K;var _=I.sibling,U=I.return;if(Fu(I),I===A){K=null;break}if(_!==null){_.return=U,K=_;break}K=U}}}var $=l.alternate;if($!==null){var q=$.child;if(q!==null){$.child=null;do{var ze=q.sibling;q.sibling=null,q=ze}while(q!==null)}}K=l}}if((l.subtreeFlags&2064)!==0&&m!==null)m.return=l,K=m;else e:for(;K!==null;){if(l=K,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:or(9,l,l.return)}var E=l.sibling;if(E!==null){E.return=l.return,K=E;break e}K=l.return}}var P=e.current;for(K=P;K!==null;){m=K;var S=m.child;if((m.subtreeFlags&2064)!==0&&S!==null)S.return=m,K=S;else e:for(m=P;K!==null;){if(v=K,(v.flags&2048)!==0)try{switch(v.tag){case 0:case 11:case 15:Ti(9,v)}}catch(W){Oe(v,v.return,W)}if(v===m){K=null;break e}var J=v.sibling;if(J!==null){J.return=v.return,K=J;break e}K=v.return}}if(Ne=s,gt(),Yn&&typeof Yn.onPostCommitFiberRoot=="function")try{Yn.onPostCommitFiberRoot(br,e)}catch{}a=!0}return a}finally{be=t,xn.transition=n}}return!1}function nd(e,n,t){n=va(t,n),n=gu(e,n,1),e=yt(e,n,1),n=on(),e!==null&&(Da(e,1,n),mn(e,n))}function Oe(e,n,t){if(e.tag===3)nd(e,e,t);else for(;n!==null;){if(n.tag===3){nd(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Et===null||!Et.has(a))){e=va(t,e),e=Pu(n,e,1),n=yt(n,e,1),e=on(),n!==null&&(Da(n,1,e),mn(n,e));break}}n=n.return}}function qf(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),n=on(),e.pingedLanes|=e.suspendedLanes&t,Ke===e&&(We&t)===t&&(Ge===4||Ge===3&&(We&130023424)===We&&500>Fe()-Cs?Yt(e,0):Es|=t),mn(e,n)}function td(e,n){n===0&&((e.mode&1)===0?n=1:(n=Ar,Ar<<=1,(Ar&130023424)===0&&(Ar=4194304)));var t=on();e=tt(e,n),e!==null&&(Da(e,n,t),mn(e,t))}function Hf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),td(e,t)}function Wf(e,n){var t=0;switch(e.tag){case 13:var a=e.stateNode,s=e.memoizedState;s!==null&&(t=s.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(o(314))}a!==null&&a.delete(n),td(e,t)}var ad;ad=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ln.current)un=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return un=!1,Of(e,n,t);un=(e.flags&131072)!==0}else un=!1,ke&&(n.flags&1048576)!==0&&_c(n,Zr,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;pi(e,n),e=n.pendingProps;var s=ca(n,Xe.current);Ta(n,t),s=ns(null,n,a,e,s,t);var l=ts();return n.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,cn(a)?(l=!0,qr(n)):l=!1,n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,$o(n),s.updater=di,n.stateNode=s,s._reactInternals=n,ls(n,a,e,t),n=ms(null,n,a,!0,l,t)):(n.tag=0,ke&&l&&Oo(n),rn(null,n,s,t),n=n.child),n;case 16:a=n.elementType;e:{switch(pi(e,n),e=n.pendingProps,s=a._init,a=s(a._payload),n.type=a,s=n.tag=Xf(a),e=On(a,e),s){case 0:n=ds(null,n,a,e,t);break e;case 1:n=Vu(null,n,a,e,t);break e;case 11:n=Cu(null,n,a,e,t);break e;case 14:n=Nu(null,n,a,On(a.type,e),t);break e}throw Error(o(306,a,""))}return n;case 0:return a=n.type,s=n.pendingProps,s=n.elementType===a?s:On(a,s),ds(e,n,a,s,t);case 1:return a=n.type,s=n.pendingProps,s=n.elementType===a?s:On(a,s),Vu(e,n,a,s,t);case 3:e:{if(Au(n),e===null)throw Error(o(387));a=n.pendingProps,l=n.memoizedState,s=l.element,Gc(e,n),ri(n,a,null,t);var m=n.memoizedState;if(a=m.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){s=va(Error(o(423)),n),n=wu(e,n,a,t,s);break e}else if(a!==s){s=va(Error(o(424)),n),n=wu(e,n,a,t,s);break e}else for(vn=Lt(n.stateNode.containerInfo.firstChild),Ln=n,ke=!0,In=null,t=Bc(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ma(),a===s){n=rt(e,n,t);break e}rn(e,n,a,t)}n=n.child}return n;case 5:return $c(n),e===null&&Qo(n),a=n.type,s=n.pendingProps,l=e!==null?e.memoizedProps:null,m=s.children,jo(a,s)?m=null:l!==null&&jo(a,l)&&(n.flags|=32),bu(e,n),rn(e,n,m,t),n.child;case 6:return e===null&&Qo(n),null;case 13:return ju(e,n,t);case 4:return qo(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=pa(n,null,a,t):rn(e,n,a,t),n.child;case 11:return a=n.type,s=n.pendingProps,s=n.elementType===a?s:On(a,s),Cu(e,n,a,s,t);case 7:return rn(e,n,n.pendingProps,t),n.child;case 8:return rn(e,n,n.pendingProps.children,t),n.child;case 12:return rn(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(a=n.type._context,s=n.pendingProps,l=n.memoizedProps,m=s.value,Ae(ni,a._currentValue),a._currentValue=m,l!==null)if(_n(l.value,m)){if(l.children===s.children&&!ln.current){n=rt(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var v=l.dependencies;if(v!==null){m=l.child;for(var h=v.firstContext;h!==null;){if(h.context===a){if(l.tag===1){h=at(-1,t&-t),h.tag=2;var A=l.updateQueue;if(A!==null){A=A.shared;var I=A.pending;I===null?h.next=h:(h.next=I.next,I.next=h),A.pending=h}}l.lanes|=t,h=l.alternate,h!==null&&(h.lanes|=t),Uo(l.return,t,n),v.lanes|=t;break}h=h.next}}else if(l.tag===10)m=l.type===n.type?null:l.child;else if(l.tag===18){if(m=l.return,m===null)throw Error(o(341));m.lanes|=t,v=m.alternate,v!==null&&(v.lanes|=t),Uo(m,t,n),m=l.sibling}else m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===n){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}rn(e,n,s.children,t),n=n.child}return n;case 9:return s=n.type,a=n.pendingProps.children,Ta(n,t),s=Nn(s),a=a(s),n.flags|=1,rn(e,n,a,t),n.child;case 14:return a=n.type,s=On(a,n.pendingProps),s=On(a.type,s),Nu(e,n,a,s,t);case 15:return Su(e,n,n.type,n.pendingProps,t);case 17:return a=n.type,s=n.pendingProps,s=n.elementType===a?s:On(a,s),pi(e,n),n.tag=1,cn(a)?(e=!0,qr(n)):e=!1,Ta(n,t),vu(n,a,s),ls(n,a,s,t),ms(null,n,a,!0,e,t);case 19:return ku(e,n,t);case 22:return xu(e,n,t)}throw Error(o(156,n.tag))};function rd(e,n){return Il(e,n)}function Zf(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(e,n,t,a){return new Zf(e,n,t,a)}function js(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xf(e){if(typeof e=="function")return js(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ge)return 11;if(e===se)return 14}return 2}function xt(e,n){var t=e.alternate;return t===null?(t=bn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Ci(e,n,t,a,s,l){var m=2;if(a=e,typeof e=="function")js(e)&&(m=1);else if(typeof e=="string")m=5;else e:switch(e){case ee:return Ut(t.children,s,l,n);case Te:m=8,s|=8;break;case le:return e=bn(12,t,n,s|2),e.elementType=le,e.lanes=l,e;case ye:return e=bn(13,t,n,s),e.elementType=ye,e.lanes=l,e;case Ve:return e=bn(19,t,n,s),e.elementType=Ve,e.lanes=l,e;case fe:return Ni(t,s,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ue:m=10;break e;case Ee:m=9;break e;case ge:m=11;break e;case se:m=14;break e;case Le:m=16,a=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return n=bn(m,t,n,s),n.elementType=e,n.type=a,n.lanes=l,n}function Ut(e,n,t,a){return e=bn(7,e,a,n),e.lanes=t,e}function Ni(e,n,t,a){return e=bn(22,e,a,n),e.elementType=fe,e.lanes=t,e.stateNode={isHidden:!1},e}function Ds(e,n,t){return e=bn(6,e,null,n),e.lanes=t,e}function ks(e,n,t){return n=bn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function eT(e,n,t,a,s){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oo(0),this.expirationTimes=oo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oo(0),this.identifierPrefix=a,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Rs(e,n,t,a,s,l,m,v,h){return e=new eT(e,n,t,v,h),n===1?(n=1,l===!0&&(n|=8)):n=0,l=bn(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:a,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},$o(l),e}function nT(e,n,t){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ie,key:a==null?null:""+a,children:e,containerInfo:n,implementation:t}}function id(e){if(!e)return ht;e=e._reactInternals;e:{if(kt(e)!==e||e.tag!==1)throw Error(o(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(cn(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(o(171))}if(e.tag===1){var t=e.type;if(cn(t))return Dc(e,t,n)}return n}function od(e,n,t,a,s,l,m,v,h){return e=Rs(t,a,!0,e,s,l,m,v,h),e.context=id(null),t=e.current,a=on(),s=Nt(t),l=at(a,s),l.callback=n??null,yt(t,l,s),e.current.lanes=s,Da(e,s,a),mn(e,a),e}function Si(e,n,t,a){var s=n.current,l=on(),m=Nt(s);return t=id(t),n.context===null?n.context=t:n.pendingContext=t,n=at(l,m),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=yt(s,n,m),e!==null&&(Qn(e,s,m,l),ai(e,s,m)),m}function xi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sd(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function _s(e,n){sd(e,n),(e=e.alternate)&&sd(e,n)}function tT(){return null}var ld=typeof reportError=="function"?reportError:function(e){console.error(e)};function Is(e){this._internalRoot=e}bi.prototype.render=Is.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(o(409));Si(e,n,null,null)},bi.prototype.unmount=Is.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Bt(function(){Si(null,e,null,null)}),n[Zn]=null}};function bi(e){this._internalRoot=e}bi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Gl();e={blockedOn:null,target:e,priority:n};for(var t=0;t<pt.length&&n!==0&&n<pt[t].priority;t++);pt.splice(t,0,e),t===0&&$l(e)}};function Os(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cd(){}function aT(e,n,t,a,s){if(s){if(typeof a=="function"){var l=a;a=function(){var A=xi(m);l.call(A)}}var m=od(n,a,e,0,null,!1,!1,"",cd);return e._reactRootContainer=m,e[Zn]=m.current,Ka(e.nodeType===8?e.parentNode:e),Bt(),m}for(;s=e.lastChild;)e.removeChild(s);if(typeof a=="function"){var v=a;a=function(){var A=xi(h);v.call(A)}}var h=Rs(e,0,!1,null,null,!1,!1,"",cd);return e._reactRootContainer=h,e[Zn]=h.current,Ka(e.nodeType===8?e.parentNode:e),Bt(function(){Si(n,h,t,a)}),h}function Ai(e,n,t,a,s){var l=t._reactRootContainer;if(l){var m=l;if(typeof s=="function"){var v=s;s=function(){var h=xi(m);v.call(h)}}Si(n,m,e,s)}else m=aT(t,n,e,s,a);return xi(m)}Bl=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=ja(n.pendingLanes);t!==0&&(so(n,t|1),mn(n,Fe()),(Ne&6)===0&&(Pa=Fe()+500,gt()))}break;case 13:Bt(function(){var a=tt(e,1);if(a!==null){var s=on();Qn(a,e,1,s)}}),_s(e,1)}},lo=function(e){if(e.tag===13){var n=tt(e,134217728);if(n!==null){var t=on();Qn(n,e,134217728,t)}_s(e,134217728)}},Yl=function(e){if(e.tag===13){var n=Nt(e),t=tt(e,n);if(t!==null){var a=on();Qn(t,e,n,a)}_s(e,n)}},Gl=function(){return be},Ul=function(e,n){var t=be;try{return be=e,n()}finally{be=t}},eo=function(e,n,t){switch(n){case"input":if(Dn(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var s=Kr(a);if(!s)throw Error(o(90));Wn(a),Dn(a,s)}}}break;case"textarea":Cr(e,t);break;case"select":n=t.value,n!=null&&lt(e,!!t.multiple,n,!1)}},Al=Vs,wl=Bt;var rT={usingClientEntryPoint:!1,Events:[Ha,sa,Kr,bl,Vl,Vs]},ur={findFiberByHostInstance:Rt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iT={bundleType:ur.bundleType,version:ur.version,rendererPackageName:ur.rendererPackageName,rendererConfig:ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Z.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rl(e),e===null?null:e.stateNode},findFiberByHostInstance:ur.findFiberByHostInstance||tT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wi.isDisabled&&wi.supportsFiber)try{br=wi.inject(iT),Yn=wi}catch{}}return pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rT,pn.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Os(n))throw Error(o(200));return nT(e,n,null,t)},pn.createRoot=function(e,n){if(!Os(e))throw Error(o(299));var t=!1,a="",s=ld;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),n=Rs(e,1,!1,null,null,t,!1,a,s),e[Zn]=n.current,Ka(e.nodeType===8?e.parentNode:e),new Is(n)},pn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=Rl(n),e=e===null?null:e.stateNode,e},pn.flushSync=function(e){return Bt(e)},pn.hydrate=function(e,n,t){if(!Vi(n))throw Error(o(200));return Ai(null,e,n,!0,t)},pn.hydrateRoot=function(e,n,t){if(!Os(e))throw Error(o(405));var a=t!=null&&t.hydratedSources||null,s=!1,l="",m=ld;if(t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),n=od(n,null,e,1,t??null,s,!1,l,m),e[Zn]=n.current,Ka(e),a)for(e=0;e<a.length;e++)t=a[e],s=t._getVersion,s=s(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,s]:n.mutableSourceEagerHydrationData.push(t,s);return new bi(n)},pn.render=function(e,n,t){if(!Vi(n))throw Error(o(200));return Ai(null,e,n,!1,t)},pn.unmountComponentAtNode=function(e){if(!Vi(e))throw Error(o(40));return e._reactRootContainer?(Bt(function(){Ai(null,null,e,!1,function(){e._reactRootContainer=null,e[Zn]=null})}),!0):!1},pn.unstable_batchedUpdates=Vs,pn.unstable_renderSubtreeIntoContainer=function(e,n,t,a){if(!Vi(t))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Ai(e,n,t,!1,a)},pn.version="18.3.1-next-f1338f8080-20240426",pn}var vd;function qd(){if(vd)return Qs.exports;vd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(i){console.error(i)}}return r(),Qs.exports=TT(),Qs.exports}var hd;function LT(){if(hd)return Di;hd=1;var r=qd();return Di.createRoot=r.createRoot,Di.hydrateRoot=r.hydrateRoot,Di}var vT=LT();const hT=$d(vT),gT="modulepreload",PT=function(r){return"/BTMM_JORNADAS/"+r},gd={},gn=function(i,o,c){let d=Promise.resolve();if(o&&o.length>0){let L=function(C){return Promise.all(C.map(y=>Promise.resolve(y).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const T=document.querySelector("meta[property=csp-nonce]"),f=(T==null?void 0:T.nonce)||(T==null?void 0:T.getAttribute("nonce"));d=L(o.map(C=>{if(C=PT(C),C in gd)return;gd[C]=!0;const y=C.endsWith(".css"),g=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${C}"]${g}`))return;const N=document.createElement("link");if(N.rel=y?"stylesheet":gT,y||(N.as="script"),N.crossOrigin="",N.href=C,f&&N.setAttribute("nonce",f),document.head.appendChild(N),y)return new Promise((w,j)=>{N.addEventListener("load",w),N.addEventListener("error",()=>j(new Error(`Unable to preload CSS for ${C}`)))})}))}function p(L){const T=new Event("vite:preloadError",{cancelable:!0});if(T.payload=L,window.dispatchEvent(T),!T.defaultPrevented)throw L}return d.then(L=>{for(const T of L||[])T.status==="rejected"&&p(T.reason);return i().catch(p)})},cl=[{nombre:"Puesto Orosi",tag:"OR",color:"bg-orange-100 text-orange-950",funcionarios:["Errol Salazar","Mayra Espinoza","Yeison Cortés","Kenneth Mena","Fabricio Carbonell","Monserrath Navarro"]},{nombre:"Puesto Quetzales",tag:"QZ",color:"bg-orange-700 text-white",funcionarios:["Juan Pablo Granados","Karen Valle","Josué Brenes","Laura Valverde","Diana Tencio","Jetzelly Villalobos","Pablo Sánchez","Diego Salazar"]},{nombre:"Puesto Esperanza",tag:"LE",color:"bg-sky-100 text-sky-950",funcionarios:["Yolanda Elizondo","Mariano Solís","Guillermo Pérez","Carlos Cordero","Alexander Alvarado"]},{nombre:"Puesto Villa Mills",tag:"VM",color:"bg-violet-100 text-violet-950",vigente:!1,funcionarios:[]}],Ii=cl.filter(r=>r.vigente!==!1).map(r=>r.nombre),Hd=cl.map(({nombre:r,tag:i,color:o,vigente:c})=>({nombre:r,tag:i,color:o,vigente:c!==!1})),Vn="Puesto Orosi",Jn="Puesto Quetzales",mr="Puesto Esperanza",yT="Puesto Villa Mills",MT={"Errol Salazar":[{puesto:Vn,desde:"",hasta:null}],"Mayra Espinoza":[{puesto:Vn,desde:"",hasta:null}],"Yeison Cortés":[{puesto:Vn,desde:"",hasta:null}],"Fabricio Carbonell":[{puesto:Vn,desde:"",hasta:null}],"Kenneth Mena":[{puesto:Vn,desde:"",hasta:"2026-08-31",motivo:"Traslado a otra Área de Conservación"}],"Monserrath Navarro":[{puesto:Vn,desde:"2026-08-20",hasta:null}],"Karen Valle":[{puesto:Jn,desde:"",hasta:"2026-01-31"},{puesto:Vn,desde:"2026-02-01",hasta:"2026-06-30"},{puesto:Jn,desde:"2026-07-01",hasta:null}],"Josué Brenes":[{puesto:Jn,desde:"",hasta:"2026-01-31"},{puesto:Vn,desde:"2026-02-01",hasta:"2026-06-21"},{puesto:Jn,desde:"2026-06-22",hasta:null}],"Juan Pablo Granados":[{puesto:Jn,desde:"",hasta:"2026-04-30"},{puesto:Vn,desde:"2026-05-01",hasta:"2026-06-30"},{puesto:Jn,desde:"2026-07-01",hasta:null}],"Laura Valverde":[{puesto:Jn,desde:"",hasta:"2026-06-30"},{puesto:Vn,desde:"2026-07-01",hasta:null}],"Jetzelly Villalobos":[{puesto:Jn,desde:"",hasta:"2026-06-30"},{puesto:Vn,desde:"2026-07-01",hasta:null}],"Diana Tencio":[{puesto:Jn,desde:"",hasta:null}],"Pablo Sánchez":[{puesto:Jn,desde:"2026-05-01",hasta:null}],"Diego Salazar":[{puesto:Jn,desde:"2026-09-01",hasta:null}],"Yolanda Elizondo":[{puesto:Vn,desde:"",hasta:"2026-03-17"},{puesto:mr,desde:"2026-03-18",hasta:null}],"Mariano Solís":[{puesto:mr,desde:"",hasta:null}],"Guillermo Pérez":[{puesto:mr,desde:"",hasta:null}],"Alexander Alvarado":[{puesto:mr,desde:"",hasta:null}],"Carlos Cordero":[{puesto:yT,desde:"",hasta:"2026-03-31"},{puesto:mr,desde:"2026-04-01",hasta:null,motivo:"Villa Mills pasa a otra Área de Conservación"}]};function ET(r){const i=MT[r];return i?i.map(o=>({...o})):null}const vr=cl.flatMap((r,i)=>r.funcionarios.map((o,c)=>{const d=i*10+c+1,p=o==="Pablo Sánchez",L=o==="Yolanda Elizondo",T=o==="Carlos Cordero",f=["Yeison Cortés","Jetzelly Villalobos","Guillermo Pérez"].includes(o),C=o==="Fabricio Carbonell"?"De vacaciones":o==="Guillermo Pérez"?"Incapacitado":o==="Kenneth Mena"?"Inactivo":"Activo",y=ET(o)||[{puesto:r.nombre,desde:"",hasta:null}];return{id:`f${d}`,nombre:o,cedula:`1-0000-${String(d).padStart(4,"0")}`,email:p?"psforestal@yahoo.com":`${o.toLowerCase().replaceAll(" ",".")}@sinac.go.cr`,puesto:p?"Técnico en Recursos Naturales":L?"Asistente Administrativo":T?"Personal Apoyo ONG-Invest-Volunt":"Guardaparques",condicion:T?"ONG-Invest-Volunt":d%5===0?"Interino":"Propiedad",jornada:p||L?"Ordinaria":"Acumulativa",modalidad:p||L?"Horario administrativo L-V":d%7===0?"16x8":d%4===0?"12x6":"10x5",resolucion:f?"":T?"CONV-ONG-INV-VOL-2026":p||L?"":`RES-ACC-${String(d).padStart(3,"0")}-2026`,disponibilidad:!p&&!L&&!T&&d%3!==0,contrato:!p&&!L&&!T&&d%3!==0?`DISP-2026-${String(d).padStart(3,"0")}`:"",vencimiento:d%5===0?"2026-05-30":d%4===0?"2026-06-30":d%3!==0?"2026-12-31":"",policia:!p&&!L&&!T&&!f,brigada:d%4===2,ong:T,jefe:"Administración PNLQ",estado:C,ingreso:y[0].desde||"2026-01-01",puestoOperativo:y[y.length-1].puesto,historialPuestos:y,obs:`${r.nombre}${f?" · Dato pendiente: resolución acumulativa":""}`}})),Wd=[],CT=[{id:"rep1",folio:"REP-001",funcionario:"Errol Salazar",fecha:"2026-05-24",tipoDia:"Día libre",motivo:"Incendio forestal",motivoDetalle:"Apoyo en control de conato sector Orosi.",magnitud:"diaEntero",horas:0,cuotas:[{id:"rep1-c1",fecha:"2026-05-31",magnitud:"medioDia",horas:0}],observaciones:"Llamado por la administración fuera de rol."},{id:"rep2",folio:"REP-002",funcionario:"Juan Pablo Granados",fecha:"2026-05-17",tipoDia:"Feriado",motivo:"Atención de denuncia",motivoDetalle:"Inspección por tala reportada en ingreso Quetzales.",magnitud:"horas",horas:4,cuotas:[],observaciones:""},{id:"rep3",folio:"REP-003",funcionario:"Mariano Solís",fecha:"2026-04-19",tipoDia:"Fuera de turno",motivo:"Actividad especial",motivoDetalle:"Atención de gira institucional.",magnitud:"medioDia",horas:0,cuotas:[{id:"rep3-c1",fecha:"2026-05-06",magnitud:"medioDia",horas:0}],observaciones:"Tiempo repuesto en coordinación con la administración."}];function Zd(r,i){return new Date(r,i+1,0).getDate()}function Dh(r,i,o){const c=r*12+i+o;return{year:Math.floor(c/12),month:(c%12+12)%12}}function qn(r){return String(r).padStart(2,"0")}function Ui(r=new Date){return`${r.getFullYear()}-${qn(r.getMonth()+1)}-${qn(r.getDate())}`}function NT(r=new Date){return`${Ui(r)}_${qn(r.getHours())}-${qn(r.getMinutes())}-${qn(r.getSeconds())}`}function Xd(r,i,o){return`${r}-${qn(i+1)}-${qn(o)}`}function ot(r){if(!r)return"—";const i=r.split("-");return`${i[2]}/${i[1]}/${i[0]}`}function ST(r,i=new Date(2026,4,19)){return r?Math.round((new Date(r+"T00:00:00")-i)/864e5):null}function xT(r,i,o=null){for(let c=1;c<=Zd(r,i);c++){const d=new Date(r,i,c).getDay();if(d>=1&&d<=5){if(!o)return c;const p=Xd(r,i,c);if(!o.has(p))return c}}return 1}function st(r){return typeof r=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(r)}function Tr(r){return typeof r=="string"?r.trim():""}function bT(r,i){return`${r}-${String(i).padStart(2,"0")}-01`}function VT(r,i){const o=new Date(Date.UTC(r,i,0)).getUTCDate();return`${r}-${String(i).padStart(2,"0")}-${String(o).padStart(2,"0")}`}function AT(r,i){if(!r||!st(i))return!1;const o=st(r.desde)?r.desde:"",c=st(r.hasta)?r.hasta:"";return!(o&&i<o||c&&i>c)}function Na(r){const o=((Array.isArray(r==null?void 0:r.historialPuestos)?r.historialPuestos:null)||[]).map(d=>{const p=Tr(d==null?void 0:d.puesto);return p?{puesto:p,desde:st(d==null?void 0:d.desde)?d.desde:"",hasta:st(d==null?void 0:d.hasta)?d.hasta:null,...Tr(d==null?void 0:d.motivo)?{motivo:Tr(d.motivo)}:{}}:null}).filter(Boolean).sort((d,p)=>(d.desde||"").localeCompare(p.desde||""));if(o.length)return o;const c=Tr(r==null?void 0:r.puestoOperativo);return c?[{puesto:c,desde:"",hasta:null}]:[]}function em(r,i){const c=Na(r).find(d=>AT(d,i));return c?c.puesto:""}function wT(r,i,o){const c=bT(i,o),d=VT(i,o),p=Na(r);let L="";for(const T of p){const f=st(T.desde)?T.desde:"",C=st(T.hasta)?T.hasta:"";f&&f>d||C&&C<c||(L=T.puesto)}return L}function jT(r,i){const o=st(i)?i:new Date().toISOString().slice(0,10),c=em(r,o);if(c)return c;const d=Na(r),p=d[d.length-1];return p&&p.hasta===null?p.puesto:""}function kh(r,i=""){const o=[...new Set(Na(r).map(c=>c.puesto))];return o.length?o:i?[i]:[]}function Rh(r,{puesto:i,desde:o,motivo:c=""}={}){const d=Tr(i);if(!d)return r;const p=Na(r),L=p.find(g=>g.hasta===null);if(L&&L.puesto===d)return r;const T=st(o)?o:new Date().toISOString().slice(0,10),f=new Date(`${T}T00:00:00Z`);f.setUTCDate(f.getUTCDate()-1);const C=f.toISOString().slice(0,10),y=p.map(g=>g.hasta===null?{...g,hasta:C}:g);return y.push({puesto:d,desde:T,hasta:null,...c?{motivo:c}:{}}),{...r,historialPuestos:y,puestoOperativo:d}}function DT(r,i){if(!r||typeof r!="object")return r;const o=Na(r);if(!o.length)return r;const c=jT(r,i),d=o[o.length-1].puesto,p=c||d;return r.puestoOperativo===p&&Array.isArray(r.historialPuestos)&&JSON.stringify(r.historialPuestos)===JSON.stringify(o)?r:{...r,historialPuestos:o,puestoOperativo:p}}function nm(r,i,o,c,d){return`${r}-${i+1}-${o}-${c}-${d}`}function kT(r,i,o,c){return`CFG-${r}-${i+1}-${o}-${c}`}function Pr(r){const i=String(r||"10x5").toLowerCase();if(i.includes("administrativo"))return{trabajo:5,libre:2,administrativo:!0};const o=i.split("x");return{trabajo:Number(o[0])||10,libre:Number(o[1])||5,administrativo:!1}}function RT(r,i,o,c,d){const p=Pr(r);if(p.administrativo){const f=new Date(c,d,i).getDay();return f>=1&&f<=5?`T${f}`:f===6?"L1":"L2"}const L=p.trabajo+p.libre,T=(i-o)%L;return i<o?"":T<p.trabajo?`T${T+1}`:`L${T-p.trabajo+1}`}function Ki(r){const i=String(r||"").toUpperCase();return i.startsWith("T")||i.startsWith("E")}function _T(r){return String(r||"").toUpperCase().startsWith("T")}function tm(r){return String(r||"").toUpperCase().startsWith("E")}function IT(r){const i=String(r||"").toUpperCase();return i.startsWith("T")?"Turno":i.startsWith("L")?"Libre":i.startsWith("V")?"Vacaciones":i.startsWith("I")?"Incapacidad":i.startsWith("O")?"Otro":i.startsWith("E")?"Teletrabajo":i?"Turno":"Sin marcar"}function Oi(r){const i=String(r||"").toUpperCase();return i.startsWith("T")?"T":i.startsWith("L")?"L":i.startsWith("V")?"V":i.startsWith("I")?"I":i.startsWith("O")?"O":i.startsWith("E")?"E":""}function OT(r,i,o){const c=String(r||"").toUpperCase();if(!c)return"";const d=Pr(o);return c==="T"?`T${(i-1)%d.trabajo+1}`:c==="L"?`L${(i-1)%d.libre+1}`:`${c}${i}`}function yr(r,i){return r.find(o=>o.nombre===i)}function ul(r,i,o,c=null){return r?(c===null?wT(r,i,o+1):em(r,Xd(i,o,c)))||r.puestoOperativo||"Puesto Quetzales":""}function am(r,i,o,c,d){const p=yr(r,d);return p&&(i[kT(o,c,ul(p,o,c),d)]||p.modalidad)||"10x5"}function Sa(r,i,o,c,d,p,L=null){const T=yr(r,d);if(!T)return"";const f=ul(T,o,c,p),C=xT(o,c,L);return i[nm(o,c,f,d,p)]??RT(am(r,i,o,c,d),p,C,o,c)}function FT({roleData:r,personas:i,year:o,month:c,persona:d,dia:p,categoria:L,feriados:T=null}){const f=yr(i,d),C=(f==null?void 0:f.puestoOperativo)||"Puesto Quetzales",y=am(i,r,o,c,d),g=Array.from({length:Zd(o,c)},(Q,D)=>D+1),N={};for(const Q of g)N[Q]=Oi(Sa(i,r,o,c,d,Q,T));N[p]=L;const w=QT({days:g,categorias:N,modalidad:y}),j={};for(const Q of g)j[nm(o,c,C,d,Q)]=w[Q];return j}function _h(r,i){const o=Pr(i);if(o.administrativo)return null;const c=String(r||"").toUpperCase(),d=/^T(\d+)$/.exec(c);if(d){const L=Number(d[1]);return L>=1&&L<=o.trabajo?L-1:null}const p=/^L(\d+)$/.exec(c);if(p){const L=Number(p[1]);return L>=1&&L<=o.libre?o.trabajo+L-1:null}return null}function zT(r,i){const o=Pr(i),c=o.trabajo+o.libre,d=(r%c+c)%c|0;return d<o.trabajo?`T${d+1}`:`L${d-o.trabajo+1}`}function Ih({modalidad:r,desde:i,hasta:o,posInicial:c=0}){const d=Pr(r),p=[],L=new Date(o.year,o.month,o.day),T=new Date(i.year,i.month,i.day);let f=0;for(;T<=L;){const C=T.getFullYear(),y=T.getMonth(),g=T.getDate();let N;if(d.administrativo){const w=T.getDay();N=w>=1&&w<=5?`T${w}`:w===6?"L1":"L2"}else N=zT(c+f,r);p.push({year:C,month:y,day:g,valor:N}),T.setDate(T.getDate()+1),f+=1}return p}function Pd(r){return String(r).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Oh(r,i,o){if(!r)return null;const c=(Array.isArray(i)?i:[i]).filter(Boolean);if(!c.length)return null;const d=c.map(Pd).join("|"),p=new RegExp(`^(\\d+)-(\\d+)-(?:${d})-${Pd(o)}-(\\d+)$`);let L=null,T=-1;for(const f of Object.keys(r)){const C=r[f];if(C==null||C==="")continue;const y=p.exec(f);if(!y)continue;const g=Number(y[1]),N=Number(y[2])-1,w=Number(y[3]),j=g*1e4+N*100+w;j>T&&(T=j,L={year:g,month:N,day:w})}return L}function QT({days:r,categorias:i,modalidad:o}){const c={};let d=null,p=0;return r.forEach(L=>{const T=i[L]||"";if(!T){d=null,p=0,c[L]="";return}T!==d?(d=T,p=1):p+=1,c[L]=OT(T,p,o)}),c}const JT={"2025-12":{"Errol Salazar":"O-F T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 O-FA T1 T2 T3","Mayra Espinoza":"V1 V2 LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 O-FA L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 O-F T8 T9 T10 L5 L1 L2","Yeison Cortés":"L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T1 L2 L3 L4 L1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 LA LA T1 T2 T3","Kenneth Mena":"O-F T3 T4 T5 T6 T7 T8 T9 V1 V2 V3 L1 L2 L3 L4 L5 T1 T2 L6 T3 T4 T5 T6 T7 O-F T9 T10 T11 T12 L1 L2","Fabricio Carbonell":"L2 L3 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 LA T4 T5 T6 L1 L2 L3 LA T1 T2 T3","Karen Valle":"O-F T2 T3 T4 LA L1 L2 T1 T2 T3 T4 T5 L1 L2 LA T2 T3 T4 T5 L1 L2 T1 T2 T3 O-F T5 L1 L2 T1 T2 T3","Josué Brenes":"O-F T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 L1 L2 L3 T1 T2 T3 T4 T5 T6 O-F T8 T9 T10 L1 L2 L3","Laura Valverde":"O-F T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 LI LI LI LI LI LI LI L4 L5 O-FA O-FA O-FA O-F V1 V2 V3 V4 V5 V6","Diana Tencio":"O-F T2 T3 T4 T5 L1 L2 T1 T2 LA T4 T5 L1 L2 LA T2 T3 T4 T5 L1 L2 T1 T2 T3 O-F T5 L1 L2 T1 T2 LA","Jetzelly Villalobos":"O-F T10 T11 T12 L1 L2 L3 L4 L5 L6 LA T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 O-F T3 T4 T5 T6 T7 T8","Yolanda Elizondo":"O-F T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 V1 V2 V3","Mariano Solís":"O-F T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 LA LA T1 T2 T3 T4 T5","Guillermo Pérez":"O-F V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 O-F T10 T11 T12 L1 L2 L3","Carlos Cordero":"O-F T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5","Alexander Alvarado":"L3 L4 L5 T1 T2 T3 T4 T5 IN IN IN IN T6 L1 L2 L3 L4 L5 V1 V2 V3 V4 V5 V6 O-F V7 V8 V9 V10 V11 V12"},"2026-1":{"Errol Salazar":"O-F T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6","Mayra Espinoza":"L3 L4 L5 O-FA LA LA LA LA LA LA LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2","Yeison Cortés":"O-F T5 T6 T7 T8 L1 L2 L3 L4 V1 V2 L1 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4","Kenneth Mena":"L3 L4 L5 L6 T1 O-FA T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 L1 L2 IN IN","Fabricio Carbonell":"O-F O-FA T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 L1","Karen Valle":"O-F T4 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1","Josué Brenes":"L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA O-FA","Laura Valverde":"O-F V7 V8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6","Diana Tencio":"O-F T4 L1 L2 T1 T2 T3 T4 T5 L1 L2 LA T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 LA L1 L2 T1 T2 T3 T4 T5 L1","Jetzelly Villalobos":"L1 L2 L3 L4 O-FA O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 T13 T14 L1 L2 L3 L4 L5 L6 L7 V1 V2 L1 LA","Yolanda Elizondo":"O-F V4 V5 V6 V7 V8 V9 V10 V11 V12 V13 V14 V15 V16 L1 L2 L3 L4 L5 L6 L7 L8 O-FA T1 T2 T3 T4 T5 T6 T7 T8","Mariano Solís":"O-F T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA V1 V2 V3 V4 LA LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4","Guillermo Pérez":"L4 L5 L6 O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 T13 T14 L1 L2 L3 L4 L5 L6 L7 T1 T2 T3 T4 T5 T6","Carlos Cordero":"O-F T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1","Alexander Alvarado":"O-F LI LI LI LI LI LI V13 V14 V15 V16 V17 V18 V19 V20 L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 V1 V2 V3 V4 V5 V6"},"2026-2":{"Errol Salazar":"LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 LA T1 T2 T3 T4 T5 T6 T7 T8","Mayra Espinoza":"T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11","Yeison Cortés":"T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 V1 V2 V3 V4 L1 L2 IN IN T1 T2 T3 T4 T5 T6 T7 T8 L1","Kenneth Mena":"IN IN IN IN IN IN IN IN IN IN IN IN L3 L4 L5 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 V11 V12 V13","Fabricio Carbonell":"T6 T7 T8 T9 T10 T11 L2 L3 T1 T2 T3 T4 T5 T6 T7 T8 T9 L4 L5 L1 L2 L3 L4 L5 T1 T2 T3 T4","Karen Valle":"L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1","Josué Brenes":"V1 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 L1 L2 V1 V2 V3 V4 L1 L2","Laura Valverde":"T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4","Diana Tencio":"L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 LA V1 V2 V3 L1 L2 T1 T2 T3 T4 T5 L1","Jetzelly Villalobos":"V1 V2 V3 V4 V5 L1 L2 L3 T1 T2 T3 T4 T5 T6 L1 L2 L3 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11","Yolanda Elizondo":"T9 T10 L1 L2 L3 L4 L5 V1 V2 V3 V4 V5 V6 L1 L2 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3","Mariano Solís":"L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 V11 V12 V13 V14 V15","Guillermo Pérez":"T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 L1 L2 L3 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Carlos Cordero":"T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1","Alexander Alvarado":"V7 V8 V9 V10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4"},"2026-3":{"Errol Salazar":"T9 T10 L1 L2 L3 L4 L5 LA LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7","Mayra Espinoza":"T12 T13 T14 T15 T16 T17 L1 L2 L3 L4 L5 L6 L7 L8 L9 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1","Yeison Cortés":"L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 T1","Kenneth Mena":"V14 V15 L1 L2 L3 IN IN IN IN IN IN IN V1 V2 V3 V4 L1 L2 IN IN IN IN IN IN IN IN IN IN IN IN IN","Fabricio Carbonell":"T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5","Karen Valle":"L2 T1 T2 T3 T4 T5 L1 L2 IN T2 T3 T4 T5 L1 L2 T1 LA LA T4 T5 L1 L2 T1 T2 T3 V1 T5 L1 L2 T1 T2","Josué Brenes":"LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5","Laura Valverde":"L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11","Diana Tencio":"L2 LA LA LA T4 T5 L1 L2 T1 T2 T3 LA T5 L1 L2 O-G O-G O-G O-G O-G O-G O-G O-G O-G O-G O-G O-G L1 L2 T1 T2","Jetzelly Villalobos":"T12 L1 L2 L3 L4 L5 L6 LA LA V1 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6","Yolanda Elizondo":"L4 L5 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 L1 L2 L3 L4 L5 IN IN IN IN IN IN IN IN IN IN T1 T2 T3 T4","Mariano Solís":"V16 L1 L2 L3 L4 L5 L6 L7 L8 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Guillermo Pérez":"T11 T12 L1 L2 L3 L4 L5 L6 V1 V2 V3 V4 V5 L1 L2 V1 V2 V3 V4 V5 V6 V7 L1 L2 L3 L4 IN IN IN IN IN","Carlos Cordero":"L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 V1 V2 L1 T1 T2 T3 T4 T5 T6 T7 T8","Alexander Alvarado":"T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 · · · · · · · · · · · · · · · · · · · ·"},"2026-4":{"Errol Salazar":"T8 T9 T10 L1 L2 L3 L4 L5 LA T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 LA T1 T2 T3 T4 T5 T6 T7 T8 T9","Mayra Espinoza":"T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA O-FA V1 V2 V3 L1 L2 T1 T2 T3 T4 T5 T6 T7 T8 L","Yeison Cortés":"L2 L3 L4 L5 L6 T2 L1 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 IN IN IN T3 T4 T5 T6 T7","Kenneth Mena":"IN V1 V2 V3 L1 IN IN IN IN IN IN IN IN IN IN IN IN IN IN V1 V2 L1 L L L L L L L L","Fabricio Carbonell":"T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 V1 V2 V3 V4 V5 V6 V7 V8","Karen Valle":"T3 O-F O-F L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4","Josué Brenes":"T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 V1 V2 V3 V4 L1 L2 LA T2 T3 T4 T5 T6 T7 T8 T9","Laura Valverde":"T12 T13 T14 L1 L2 L3 L4 L5 L6 L7 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 T1 T2 T3","Diana Tencio":"LA O-F O-F L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4","Jetzelly Villalobos":"T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3","Yolanda Elizondo":"T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2","Mariano Solís":"L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Guillermo Pérez":"IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN","Carlos Cordero":"T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5"},"2026-5":{"Errol Salazar":"T10 T11 T12 L1 L2 L3 L4 L5 L6 LA LA O-FA O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3","Mayra Espinoza":"L1 L2 L3 L4 LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8","Yeison Cortés":"O-FA L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 LA T4 T5 T6 T7 T8 L1 L2 L3","Kenneth Mena":"L L L L L L L L L L L L L L L L L L L L L L L V1 V2 V3 V4 V5 V6 L1 L2","Fabricio Carbonell":"V9 V10 V11 V12 V13 V14 V15 V16 V17 V18 V19 V20 L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 O-FA O-FA O-FA O-FA O-FA T1 T2 T3 T4","Juan Pablo Granados":"T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3","Karen Valle":"T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2","Josué Brenes":"T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 LA L1 L2 L3 L4 LA","Laura Valverde":"T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4","Diana Tencio":"T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2","Jetzelly Villalobos":"T4 T5 T6 L1 L2 L3 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 LA LA LA LA LA V1 V2","Pablo Sánchez":"T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 V1 V2 V3 V4 V5 L1 L2 T1 T2 T3 T4 T5 L1 L2","Yolanda Elizondo":"T3 T4 T5 T6 T7 T8 T9 LA L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3","Mariano Solís":"L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1","Guillermo Pérez":"IN IN IN IN IN IN IN IN IN IN IN IN IN IN T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5","Carlos Cordero":"T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 O-FA V1 V2 V3 V4 V5 V6 V7 V8"},"2026-6":{"Errol Salazar":"T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5","Mayra Espinoza":"T9 T10 T11 T12 T13 T14 L1 L2 L3 L4 L5 L6 L7 LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1","Yeison Cortés":"L4 LA T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2","Kenneth Mena":"L3 T1 T2 T3 T4 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2","Fabricio Carbonell":"T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 L1 T10 L2 L3 T1 L4 L5 T2 T3 T4 T5 T6 T7","Juan Pablo Granados":"L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3","Karen Valle":"T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 LA T5 L2 T1 T2 T3 T4 LA L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2","Josué Brenes":"LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 L1 L2 L3 T1 T2 L4 L5 L6 L1 · · · · · · · · ·","Laura Valverde":"T5 T6 T7 T8 L1 L2 L3 L4 O-FA O-FA O-FA O-FA LA V1 V2 V3 V4 V5 V6 V7 V8 L1 L2 L3 L4 V1 V2 V3 V4 L1","Diana Tencio":"T1 T2 T3 LA T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2","Jetzelly Villalobos":"V3 V4 L1 L2 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8","Pablo Sánchez":"T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 V1 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2","Yolanda Elizondo":"T4 T5 T6 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1","Mariano Solís":"L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 LA T2 T3 T4 T5 T6 T7 T8 T9 T10 L1","Guillermo Pérez":"T6 L1 L2 L3 LA V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Carlos Cordero":"V9 V10 V11 V12 V13 V14 V15 V16 V17 V18 V19 V20 L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 O-FA V1 V2 V3 V4 V5 V6 V7"},"2026-7":{"Errol Salazar":"T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1","Mayra Espinoza":"T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5","Yeison Cortés":"T3 T4 T5 L1 L2 T1 T2 T3 V1 V2 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5","Kenneth Mena":"T3 T4 T5 L1 L2 V1 V2 V3 V4 V5 L1 L2 LA T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5","Fabricio Carbonell":"T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8","Karen Valle":"T3 T4 LA T5 L2 T1 T2 T3 T4 T5 L1 L2 V1 V2 V3 V4 V5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5","Laura Valverde":"L2 LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 T13 L1 L2 L3 L4 L5 L6 L7 T1 T2 T3 T4 T5 T6 T7 T8 T9","Diana Tencio":"T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 V1 V2 V3 V4 V5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5","Jetzelly Villalobos":"T9 T10 L1 L2 L3 L4 L5 LA T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 LA T2 T3 T4 T5 T6","Pablo Sánchez":"T3 T4 T5 L1 L2 V1 V2 V3 V4 V5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5","Yolanda Elizondo":"T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2","Mariano Solís":"L2 L3 L4 L5 LA V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 L1 L2 L3 L4 L5 O-FA T2 T3 T4 T5 T6 T7 T8 T9 T10 T11","Guillermo Pérez":"L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8","Carlos Cordero":"V8 L1 L2 L3 L4 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 V11 V12 V13 V14 L1 L2 L3 L4 L5 L6 L7 T1 T2 T3 T4 T5"},"2026-8":{"Errol Salazar":"T2 T3 T4 T5 T6 T7 T8 L1 T9 T10 T11 T12 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4","Mayra Espinoza":"L6 LA V1 V2 V3 V4 V5 V6 V7 V8 L1 L2 L3 L4 LA LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5","Yeison Cortés":"L4 LA T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 O-F","Kenneth Mena":"L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 L1 L2 L3 L4 L5","Fabricio Carbonell":"T9 T10 L1 L2 L3 L4 L5 O-FA O-FA V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 L1 L2 L3 L4 L5 O-FA T1 T2 T3 T4 T5 T6","Monserrath Navarro":"· · · · · · · · · · · · · · · · · · · T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2","Karen Valle":"L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 T4 T5 L1 L2 O-F","Laura Valverde":"T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Diana Tencio":"L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 O-F","Jetzelly Villalobos":"T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 L1 L2 L3 T1","Pablo Sánchez":"L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 O-F","Yolanda Elizondo":"T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 O-FA L1 L2 L3 L4","Mariano Solís":"T12 L1 L2 L3 L4 L5 L6 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 V11 V12 V13 V14 L1 L2 L3 L4 L5 L6 L7 T1 T2 T3","Guillermo Pérez":"T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 O-FA L1 L2 L3","Carlos Cordero":"T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6"},"2026-9":{"Errol Salazar":"L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4","Mayra Espinoza":"T1 V1 T2 T3 T4 T5 T6 T7 V1 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1","Yeison Cortés":"T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3","Fabricio Carbonell":"T7 T8 T9 T10 L1 L2 L3 T1 T2 T3 T4 L4 L5 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6","Monserrath Navarro":"L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 O-F T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 L1","Karen Valle":"T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3","Laura Valverde":"L1 L2 L3 L4 L5 O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6","Diana Tencio":"T2 T3 T4 T5 L1 L2 T1 T2 V1 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3","Jetzelly Villalobos":"T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3","Pablo Sánchez":"T2 T3 T4 T5 L1 L2 T1 T2 V1 V1 V1 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3","Diego Salazar":"T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5","Yolanda Elizondo":"L5 IN IN IN IN IN IN T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8","Mariano Solís":"T4 T5 T6 T7 T8 L1 L2 L3 L4 O-FA O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1","Guillermo Pérez":"T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 O-FA T1 T2 O-CM T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2","Carlos Cordero":"T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 L1 L2 L3 L4 L5"},"2026-10":{"Errol Salazar":"T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L5 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2","Mayra Espinoza":"T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 L5 T1 T2 T3 T4","Yeison Cortés":"T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1","Fabricio Carbonell":"T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Monserrath Navarro":"L2 L3 L4 T1 T2 T3 T4 T5 L1 L2 L3 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 O-FA T1","Karen Valle":"T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1","Laura Valverde":"T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T8 T10","Diana Tencio":"T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1","Jetzelly Villalobos":"L4 L5 O-FA O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2","Pablo Sánchez":"T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1","Diego Salazar":"T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3","Yolanda Elizondo":"T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA T1 T2 T3 T4 T5 T6 T7 T8","Mariano Solís":"T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2","Guillermo Pérez":"T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T10 L1 L2 L3 L4 L5 T1 T2 T6 T7","Carlos Cordero":"T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2"},"2026-11":{"Errol Salazar":"T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6","Mayra Espinoza":"L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3","Yeison Cortés":"L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1","Fabricio Carbonell":"L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4","Monserrath Navarro":"T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5","Karen Valle":"L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1","Laura Valverde":"L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Diana Tencio":"L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1","Jetzelly Villalobos":"T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4","Pablo Sánchez":"L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1","Yolanda Elizondo":"L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4","Mariano Solís":"T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6","Guillermo Pérez":"T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8","Carlos Cordero":"T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 L4 T1 T2 T3 T4 T5"},"2026-12":{"Errol Salazar":"T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 O-F T5 T6 T7 T8 T9 T10","Mayra Espinoza":"L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 O-F T9 T10 T11 T12 L1 L2","Yeison Cortés":"T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 O-F L1 L2 V1 V2 V3 V4","Fabricio Carbonell":"L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 V1 V2 V3 V4 V5 V6 L1 L2 L3 O-FA T1 T2","Monserrath Navarro":"T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3","Karen Valle":"T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 O-F L1 L2 T1 T2 T3 T4","Laura Valverde":"T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 O-FA T1 T2 T3 T10","Diana Tencio":"T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 O-F L1 L2 V1 V2 V3 V4","Jetzelly Villalobos":"T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 O-F T12 L1 L2 L3 L4 L5","Pablo Sánchez":"T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 V1 V2 V3 V4 O-F L1 L2 V5 V6 V7 V8","Yolanda Elizondo":"L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 O-F T10 L1 L2 L3 L4 L5","Mariano Solís":"T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 O-F T1 T2 T3 T4 T5 T6","Guillermo Pérez":"T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 O-F T4 T5 T6 T7 T8 L1","Carlos Cordero":"T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 T1 T2 T3 T4"}},BT=[{anio:2025,mes:12,dias:31},{anio:2026,mes:1,dias:31},{anio:2026,mes:2,dias:28},{anio:2026,mes:3,dias:31},{anio:2026,mes:4,dias:30},{anio:2026,mes:5,dias:31},{anio:2026,mes:6,dias:30},{anio:2026,mes:7,dias:31},{anio:2026,mes:8,dias:31},{anio:2026,mes:9,dias:30},{anio:2026,mes:10,dias:31},{anio:2026,mes:11,dias:30},{anio:2026,mes:12,dias:31}],Xs="2026-09-13-rol-bloque-historial-puestos",YT="2026-09",dl=(()=>{var i;const r={};for(const{anio:o,mes:c,dias:d}of BT){const p=JT[`${o}-${c}`]||{};for(const L of vr){const T=((i=p[L.nombre])==null?void 0:i.split(" "))||[];for(let f=1;f<=d;f+=1){const C=ul(L,o,c-1,f);if(!C)continue;const y=T[f-1];r[`${o}-${c}-${C}-${L.nombre}-${f}`]=y&&y!=="·"?y:""}}}return r})(),GT=Object.fromEntries(Object.entries(dl).filter(([r,i])=>{if(!i)return!1;const o=r.match(/^(\d{4})-(\d+)-/);return o?`${o[1]}-${String(o[2]).padStart(2,"0")}`>=YT:!1}));function UT(r={}){return{...r,...GT}}const Hn=1,hr="current",KT="pnlq:state",rm="pnlq:backup:v",yd=5,ml=Object.freeze({CAMBIO_DE_ESQUEMA:"cambioDeEsquema",ESQUEMA_INCOMPATIBLE:"esquemaIncompatible",LOCAL_STORAGE:"localStorage"});let Ys=null,pr=null,Md=Promise.resolve();function pl(r){const i=Md.then(r,r);return Md=i.catch(()=>{}),i}async function wn(){return Ys||(typeof indexedDB>"u"?null:pr||(pr=(async()=>{try{const{default:r}=await gn(async()=>{const{default:o}=await import("./import-wrapper-prod-BNIOOXfm.js");return{default:o}},[]),i=new r("pnlq");return i.version(1).stores({state:"id",auditoria:"++id, fecha, accion",pendientes:"++id, creadoEn, tipo"}),i.version(2).stores({respaldos:"++id, creadoEn, motivo, huella"}).upgrade(async o=>{try{const c=await o.table("state").toArray(),d=o.table("respaldos");for(const p of c)await fl(d,{motivo:ml.CAMBIO_DE_ESQUEMA,origen:"indexeddb",schemaVersion:(p==null?void 0:p.schemaVersion)??null,savedAt:(p==null?void 0:p.savedAt)??null,payload:p==null?void 0:p.payload})}catch{}}),Ys=i,i}catch{return null}finally{pr=null}})(),pr))}async function $T(){const r=await wn();if(!r)return null;try{const i=await r.state.get(hr);return i?i.schemaVersion!==Hn?(await eL({motivo:ml.ESQUEMA_INCOMPATIBLE,origen:"indexeddb",schemaVersion:i.schemaVersion??null,savedAt:i.savedAt??null,payload:i.payload}),null):{state:i.payload??null,revision:i.revision??0,savedAt:i.savedAt??null}:null}catch{return null}}async function qT(r,i=0){const o=await wn();return o?pl(async()=>{try{return await o.state.put({id:hr,schemaVersion:Hn,savedAt:new Date().toISOString(),revision:i,payload:r}),!0}catch{return!1}}):!1}async function HT(){const r=await wn();return r?pl(async()=>{try{return await r.state.delete(hr),!0}catch{return!1}}):!1}async function WT(){const r=await wn();if(!r)return{migrated:!1,source:null};try{if(await r.state.get(hr))return{migrated:!1,source:null};if(typeof window>"u"||!window.localStorage)return{migrated:!1,source:null};const o=window.localStorage.getItem(KT);if(!o)return{migrated:!1,source:null};const c=JSON.parse(o);return c!=null&&c.state?c.schemaVersion!==Hn?{migrated:!1,source:null}:(await r.state.put({id:hr,schemaVersion:Hn,savedAt:c.savedAt||new Date().toISOString(),revision:c.revision??0,payload:c.state,migradoDeLocalStorage:!0}),{migrated:!0,source:"localStorage"}):{migrated:!1,source:null}}catch{return{migrated:!1,source:null}}}async function ZT(){const r=await wn();return r?pl(async()=>{try{return await Promise.all([r.state.clear(),r.pendientes.clear(),r.auditoria.clear()]),!0}catch{return!1}}):!1}function XT(r){try{return new TextEncoder().encode(r).length}catch{return r.length}}async function fl(r,{motivo:i,origen:o,schemaVersion:c,savedAt:d,payload:p}){if(p==null)return null;let L;try{L=JSON.stringify(p)}catch{return null}if(!L||L==="null")return null;const T=XT(L),f=`${i}:${c??"?"}:${d??"?"}:${T}`;if(await r.where("huella").equals(f).count()>0)return null;const C=await r.add({creadoEn:new Date().toISOString(),motivo:i,origen:o,schemaVersion:c??null,savedAt:d??null,bytes:T,huella:f,payload:p}),y=await r.orderBy("creadoEn").primaryKeys();return y.length>yd&&await r.bulkDelete(y.slice(0,y.length-yd)),C}async function eL(r){const i=await wn();if(!i)return null;try{return await fl(i.respaldos,r)}catch{return null}}async function Fh(){const r=await wn();if(!r)return[];try{return(await r.respaldos.orderBy("creadoEn").reverse().toArray()).map(({payload:o,huella:c,...d})=>d)}catch{return[]}}async function zh(r){const i=await wn();if(!i)return null;try{return await i.respaldos.get(r)??null}catch{return null}}async function Qh(r){const i=await wn();if(!i||!r||r.id===void 0||r.id===null)return null;try{return await i.respaldos.get(r.id)?r.id:await i.respaldos.add(r)}catch{return null}}async function Jh(r){const i=await wn();if(!i)return!1;try{return await i.respaldos.delete(r),!0}catch{return!1}}async function nL(){const r={rescatados:0,descartados:0},i=await wn();if(!i||typeof window>"u"||!window.localStorage)return r;let o;try{o=Object.keys(window.localStorage).filter(c=>c.startsWith(rm))}catch{return r}for(const c of o)try{const d=window.localStorage.getItem(c);let p=null;try{p=d?JSON.parse(d):null}catch{p=null}if(!(p!=null&&p.state)){window.localStorage.removeItem(c),r.descartados+=1;continue}await fl(i.respaldos,{motivo:ml.LOCAL_STORAGE,origen:"localStorage",schemaVersion:p.schemaVersion??null,savedAt:p.savedAt??null,payload:p.state}),window.localStorage.removeItem(c),r.rescatados+=1}catch{}return r}const Tl=Object.freeze({puestosRequierenVisitantesDiario:["Puesto Orosi","Puesto Quetzales"],diaCorteViaticos:15,mesObjetivoViaticos:"siguiente",permitirConsultaDespuesCierre:!0,aplicarFeriadosEnPrimerDiaLaboral:!0,alertaInactivoConActividad:!0,alertaIncapacitadoConActividad:!0,alertaAcumulativaSinModalidad:!0,alertaReposicionPendiente:!0,horasJornada:8}),Ed=["siguiente","actual"];function Fi(r={}){return{...Tl,...r}}function Bh(r,i=Ii){const o=[],c=Array.isArray(i)&&i.length?i:Ii;if(!Array.isArray(r.puestosRequierenVisitantesDiario))o.push("La lista de puestos con Visit. diario debe ser un arreglo.");else{const L=r.puestosRequierenVisitantesDiario.filter(T=>!c.includes(T));L.length&&o.push(`Puesto(s) no reconocido(s) en la lista de Visit. diaria: ${L.join(", ")}`)}const d=Number(r.diaCorteViaticos);(!Number.isInteger(d)||d<1||d>28)&&o.push("Día de corte de viáticos debe ser un entero entre 1 y 28."),Ed.includes(r.mesObjetivoViaticos)||o.push(`mesObjetivoViaticos debe ser uno de: ${Ed.join(", ")}.`);const p=Number(r.horasJornada);return(!Number.isFinite(p)||p<1||p>24)&&o.push("Horas por jornada debe ser un número entre 1 y 24."),o}const Pn=8,Gs=["Día libre","Fuera de turno","Feriado","Vacaciones interrumpidas","Otro"],Us=["Emergencia","Incendio forestal","Atención de denuncia","Actividad especial","Operativo de control","Otro"],im=["diaEntero","medioDia","horas"];function xa(r){return Math.round((Number(r)||0)*100)/100}function om(r,i,o=Pn){return r==="diaEntero"?o:r==="medioDia"?o/2:Number(i)||0}function Ll(r){return Array.isArray(r==null?void 0:r.cuotas)?r.cuotas:(r==null?void 0:r.estado)==="Repuesto"?[{id:`i-${r.id||"x"}`,fecha:r.fechaReposicion||r.fecha,magnitud:r.magnitud,horas:r.horas||0}]:[]}function tL(r,i=Pn){return xa(om(r==null?void 0:r.magnitud,r==null?void 0:r.horas,i))}function sm(r,i=Pn){return xa(Ll(r).reduce((o,c)=>o+om(c.magnitud,c.horas,i),0))}function Mr(r,i=Pn){return xa(Math.max(0,tL(r,i)-sm(r,i)))}function lm(r,i=Pn){return sm(r,i)<=0?"Pendiente":Mr(r,i)<=0?"Repuesto":"Parcial"}function aL(r){const i=String(r||"").match(/(\d+)/);return i?Number(i[1]):null}function rL(r=[]){const i=r.reduce((o,c)=>Math.max(o,aL(c.folio)||0),0);return`REP-${String(i+1).padStart(3,"0")}`}function iL(r=[],i=Pn){const o={},c={};for(const d of r)if(d.funcionario&&d.fecha&&(o[`${d.funcionario}|${d.fecha}`]={...d,estadoCalc:lm(d,i),saldo:Mr(d,i)}),d.funcionario)for(const p of Ll(d))p.fecha&&(c[`${d.funcionario}|${p.fecha}`]={...d,cuota:p});return{trabajadas:o,reposiciones:c}}function oL(r=[],i=Pn){let o=0,c=0,d=0,p=0;for(const L of r){const T=lm(L,i);p+=Mr(L,i),T==="Repuesto"?d+=1:(o+=1,T==="Parcial"&&(c+=1))}return{total:r.length,pendientes:o,parciales:c,repuestos:d,saldoHoras:xa(p)}}function sL(r,i=Pn){const o=xa(r);if(o<=0)return"0 h";const c=o/i;return Number.isInteger(c)?c===1?"1 día":`${c} días`:o===i/2?"medio día":`${o} h`}function lL(r=[]){return[...r].sort((i,o)=>String(o.fecha||"").localeCompare(String(i.fecha||"")))}function cL(r=[],i,o=Pn){return xa(r.filter(c=>c.funcionario===i).reduce((c,d)=>c+Mr(d,o),0))}function uL(r=[],i,o=Pn){return r.filter(c=>c.funcionario===i&&Mr(c,o)>0).sort((c,d)=>String(c.fecha||"").localeCompare(String(d.fecha||"")))}function dL(r){return r==="L"?"Día libre":r==="V"?"Vacaciones interrumpidas":"Fuera de turno"}function mL({reposiciones:r=[],funcionario:i,fecha:o,categoria:c,motivo:d="Actividad especial",detalle:p=""}){return{id:`rep${Date.now()}`,folio:rL(r),funcionario:i,fecha:o,tipoDia:dL(c),motivo:d,motivoDetalle:p,magnitud:"diaEntero",horas:0,cuotas:[],observaciones:""}}function pL(r=[],i,o,c=Pn){const d=uL(r,i,c)[0];return d?r.map(p=>p.id===d.id?{...p,cuotas:[...Ll(p),o]}:p):r}function fL(r=[],i=Pn){const o=new Map;for(const d of r){const p=d.funcionario||"—";o.has(p)||o.set(p,[]),o.get(p).push(d)}const c=[];for(const[d,p]of o.entries())c.push({funcionario:d,registros:lL(p),...oL(p,i)});return c.sort((d,p)=>p.saldoHoras-d.saldoHoras||p.total-d.total||d.funcionario.localeCompare(p.funcionario)),c}const Yh=["Administrador de ASP","Guardaparques","Asistente Administrativo","Técnico en Recursos Naturales","Personal Apoyo ONG-Invest-Volunt"],Gh=["Activo","Inactivo","De vacaciones","Incapacitado"],Uh=["Propiedad","Interino","ONG-Invest-Volunt"],Kh=["Horario administrativo L-V","10x5","12x6","14x7","16x8","20x10"],TL="Secretaría Ejecutiva/Dirección ACC";function LL(r=Ii){return[...Array.isArray(r)&&r.length?r:Ii,TL]}const vL=[{id:"naranja-claro",clases:"bg-orange-100 text-orange-950"},{id:"naranja",clases:"bg-orange-700 text-white"},{id:"cielo",clases:"bg-sky-100 text-sky-950"},{id:"esmeralda",clases:"bg-emerald-100 text-emerald-950"},{id:"violeta",clases:"bg-violet-100 text-violet-950"},{id:"pizarra",clases:"bg-slate-200 text-slate-900"}],zi="Atención rutinaria de visitantes",hL=[zi];function Qe(r){return String(r??"").trim().toLowerCase()}function Kt(r){return String(r??"").trim().toUpperCase()}function $h(r,i,o=null){const c=[],d=String((r==null?void 0:r.nombre)??"").trim(),p=Kt(r==null?void 0:r.tag),L=(Array.isArray(i)?i:[]).filter(T=>Qe(T.nombre)!==Qe(o));return d?L.some(T=>Qe(T.nombre)===Qe(d))&&c.push(`Ya existe un puesto llamado «${d}».`):c.push("El nombre del puesto es obligatorio."),p?L.some(T=>Kt(T.tag)===p)&&c.push(`El código «${p}» ya está en uso.`):c.push("El código corto es obligatorio."),c}function qh(r,i){return[...Array.isArray(r)?r:[],{...i,nombre:String(i.nombre).trim(),tag:Kt(i.tag)}]}function Hh(r,i,o){return(Array.isArray(r)?r:[]).map(d=>Qe(d.nombre)===Qe(i)?{...d,...o,nombre:String(o.nombre).trim(),tag:Kt(o.tag)}:d)}function Wh(r,i){return(Array.isArray(r)?r:[]).filter(c=>Qe(c.nombre)!==Qe(i))}function Zh({puestos:r,personas:i,reglas:o,antes:c,despues:d}){const p=String(d??"").trim(),L=Array.isArray(r)?r:[],T=Array.isArray(i)?i:[],f=g=>Qe(g)===Qe(c);if(!p||Qe(c)===Qe(p))return{puestos:L,personas:T,reglas:o,afectados:0};const C=T.filter(g=>f(g.puestoOperativo)).length,y=Array.isArray(o==null?void 0:o.puestosRequierenVisitantesDiario)?o.puestosRequierenVisitantesDiario:[];return{puestos:L.map(g=>f(g.nombre)?{...g,nombre:p}:g),personas:T.map(g=>f(g.puestoOperativo)?{...g,puestoOperativo:p}:g),reglas:{...o,puestosRequierenVisitantesDiario:y.map(g=>f(g)?p:g)},afectados:C}}function Xh(r,i,o){const c=Array.isArray(r)?r:[],d=c.findIndex(f=>Qe(f.nombre)===Qe(i));if(d<0)return c;const p=d+o;if(p<0||p>=c.length)return c;const L=[...c],[T]=L.splice(d,1);return L.splice(p,0,T),L}function eg(r,i,o=[]){const d=[...Array.isArray(r)?r:[]],p=[],L=[],T=[],f=[],C=[],y=new Map,g=o.map(j=>j.clases??j),N=g[0]??"",w=j=>d.findIndex(Q=>Qe(Q.nombre)===Qe(j));return(Array.isArray(i)?i:[]).forEach((j,Q)=>{const D=Q+2,V=String((j==null?void 0:j.nombre)??"").trim();if(!V){T.push({fila:D,motivo:"sinNombre"});return}y.has(Qe(V))&&f.push({fila:D,anterior:y.get(Qe(V))}),y.set(Qe(V),D);const Y=Kt(j==null?void 0:j.tag),te=w(V);if(Y&&d.some((ue,Ee)=>Ee!==te&&Kt(ue.tag)===Y)){T.push({fila:D,motivo:"codigoOcupado",nombre:V,tag:Y});return}const pe=String((j==null?void 0:j.color)??"").trim(),ie=g.includes(pe)?pe:null;if(te<0){if(!Y){T.push({fila:D,motivo:"sinCodigo",nombre:V});return}const ue={nombre:V,tag:Y,color:ie||N};d.push(ue),p.push({fila:D,registro:ue});return}const ee=d[te];ee.nombre!==V&&C.push({fila:D,actual:ee.nombre,pedido:V});const Te={...ee,...Y?{tag:Y}:{},...ie?{color:ie}:{}},le=Object.keys(Te).filter(ue=>ee[ue]!==Te[ue]);le.length!==0&&(d[te]=Te,L.push({fila:D,registro:Te,previo:ee,cambios:le}))}),{resultado:d,nuevos:p,actualizados:L,omitidos:T,duplicados:f,renombresIgnorados:C}}function ng(r,i){return(Array.isArray(r)?r:[]).filter(o=>Qe(o.puestoOperativo)===Qe(i))}const el=200,$i=Object.freeze({ALTA:"alta",EDICION:"edicion",BAJA:"baja",RESTAURACION:"restauracion",IMPORTACION:"importacion"}),gL=new Set(Object.values($i)),PL=new Set(["id"]);let Cd=0;function yL(){return Cd+=1,`h${Date.now()}-${Cd}`}function Nd(r){return r??""}function ML(r,i){const o=r&&typeof r=="object"?r:{},c=i&&typeof i=="object"?i:{},d=new Set([...Object.keys(o),...Object.keys(c)]),p=[];for(const L of d){if(PL.has(L))continue;const T=Nd(o[L]),f=Nd(c[L]);T!==f&&p.push({campo:L,antes:T,despues:f})}return p.sort((L,T)=>L.campo.localeCompare(T.campo))}function EL(r){return{nombre:String((r==null?void 0:r.nombre)??"").trim(),cedula:String((r==null?void 0:r.cedula)??"").trim()}}function CL({tipo:r,funcionario:i,cambios:o=[],detalle:c=null,fecha:d}={}){return!gL.has(r)||r===$i.EDICION&&o.length===0?null:{id:yL(),fecha:d||new Date().toISOString(),tipo:r,funcionario:EL(i),cambios:o,...c?{detalle:c}:{}}}function tg(r,i,o){return CL({tipo:$i.EDICION,funcionario:i,cambios:ML(r,i),fecha:o})}function NL(r,i,o=el){const c=Array.isArray(r)?r:[];if(!i)return c;const d=Number.isInteger(o)&&o>0?o:el;return[i,...c].slice(0,d)}const Sd=["Activo","Incapacitado","De vacaciones","Inactivo"],SL=1e3,xL=2e4,bL=2e4,VL=3e5,AL=200,wL=200,jL=200,DL=60,cm=vL.map(r=>r.clases),kL=cm[0]??"",RL=new Set(Object.values($i)),_L=new Map(vr.map(r=>[r.id,r]));function fn(r){return!!r&&typeof r=="object"&&!Array.isArray(r)}function IL(r){return r.replace(/<[^>]*>/g,"")}function qe(r,i,o){return typeof r!="string"?o:IL(r).trim().slice(0,i)}function Ca(r,i,o,c){if(typeof r!="string")return c;const d=r.trim().slice(0,i);return o.test(d)?d:c}function OL(r,i){return typeof r=="boolean"?r:i}function Qi(r,i,{min:o=0,max:c=1e4}={}){const d=Number(r);return Number.isFinite(d)?Math.min(c,Math.max(o,d)):i}function $t(r,i){if(typeof r!="string")return i;const o=r.trim().match(/^(\d{4})-(\d{2})-(\d{2})$/);if(!o)return i;const c=Number(o[1]);if(c<2e3||c>2100)return i;const d=Number(o[2]),p=Number(o[3]);return d<1||d>12||p<1||p>31?i:o[0]}function FL(r){if(!fn(r))return r;const i=typeof r.id=="string"?_L.get(r.id):void 0,o={...r};"id"in o&&(o.id=Ca(o.id,20,/^[A-Za-z0-9-]+$/,"")),"nombre"in o&&(o.nombre=qe(o.nombre,120,(i==null?void 0:i.nombre)??"")),"cedula"in o&&(o.cedula=Ca(o.cedula,20,/^[0-9-]+$/,(i==null?void 0:i.cedula)??"")),"email"in o&&(o.email=Ca(o.email,120,/^[^\s@]+@[^\s@]+\.[^\s@]+$/,(i==null?void 0:i.email)??""));for(const c of["puesto","puestoOperativo","condicion","jornada","modalidad"])c in o&&(o[c]=qe(o[c],80,(i==null?void 0:i[c])??""));if("obs"in o&&(o.obs=qe(o.obs,500,(i==null?void 0:i.obs)??"")),"estado"in o){const c=i&&Sd.includes(i.estado)?i.estado:"Activo";o.estado=Sd.includes(o.estado)?o.estado:c}for(const c of["disponibilidad","policia","brigada","ong"])c in o&&(o[c]=OL(o[c],(i==null?void 0:i[c])??!1));return"jefe"in o&&(o.jefe=typeof o.jefe=="string"?o.jefe:(i==null?void 0:i.jefe)??""),"historialPuestos"in o&&(o.historialPuestos=zL(o.historialPuestos)),o}function zL(r){return Array.isArray(r)?r.filter(fn).map(i=>{const o=qe(i.puesto,80,"");if(!o)return null;const c={puesto:o,desde:$t(i.desde,""),hasta:$t(i.hasta,"")||null},d=qe(i.motivo,200,"");return d&&(c.motivo=d),c}).filter(Boolean).slice(0,jL):[]}function QL(r){if(!fn(r))return null;const i={...r};"id"in i&&(i.id=qe(i.id,40,""));for(const[c,d]of Object.entries(i))c==="id"||c==="inicio"||c==="fin"||typeof d=="string"&&(i[c]=qe(d,200,""));if(typeof i.inicio!="string")return null;const o=$t(i.inicio,"");return o?(i.inicio=o,"fin"in i&&(i.fin=$t(i.fin,o)),i):null}function JL(r){if(!fn(r))return null;const i={...r};return"id"in i&&(i.id=qe(i.id,40,"")),"fecha"in i&&(i.fecha=$t(i.fecha,"")),"magnitud"in i&&(i.magnitud=im.includes(i.magnitud)?i.magnitud:"diaEntero"),"horas"in i&&(i.horas=Qi(i.horas,0,{min:0,max:24})),i}function BL(r){if(!fn(r))return null;const i={...r};if(typeof i.funcionario!="string"||!i.funcionario.trim()||(i.funcionario=qe(i.funcionario,120,""),typeof i.fecha!="string"))return null;const o=$t(i.fecha,"");return o?(i.fecha=o,"id"in i&&(i.id=qe(i.id,40,"")),"folio"in i&&(i.folio=qe(i.folio,20,"")),"tipoDia"in i&&(i.tipoDia=Gs.includes(i.tipoDia)?i.tipoDia:Gs[Gs.length-1]),"motivo"in i&&(i.motivo=Us.includes(i.motivo)?i.motivo:Us[Us.length-1]),"motivoDetalle"in i&&(i.motivoDetalle=qe(i.motivoDetalle,300,"")),"observaciones"in i&&(i.observaciones=qe(i.observaciones,300,"")),"magnitud"in i&&(i.magnitud=im.includes(i.magnitud)?i.magnitud:"diaEntero"),"horas"in i&&(i.horas=Qi(i.horas,0,{min:0,max:24})),"fechaReposicion"in i&&(i.fechaReposicion=$t(i.fechaReposicion,"")),Array.isArray(i.cuotas)&&(i.cuotas=i.cuotas.map(JL).filter(Boolean).slice(0,500)),i):null}function YL(r){if(!fn(r))return null;const i={...r},o=qe(i.nombre,80,"");return o?(i.nombre=o,i.tag=Ca(Kt(i.tag),8,/^[A-Z0-9-]+$/,""),i.color=cm.includes(i.color)?i.color:kL,i):null}function xd(r){return typeof r=="boolean"?r:typeof r=="number"?Number.isFinite(r)?r:"":qe(r,200,"")}function GL(r){if(!fn(r))return null;const i=Ca(r.campo,40,/^[A-Za-z0-9_]+$/,"");return i?{campo:i,antes:xd(r.antes),despues:xd(r.despues)}:null}function UL(r){var T,f;if(!fn(r)||!RL.has(r.tipo))return null;const i=typeof r.fecha=="string"?r.fecha.trim().slice(0,40):"",o=i&&!Number.isNaN(Date.parse(i))?i:"",c=Array.isArray(r.cambios)?r.cambios.map(GL).filter(Boolean).slice(0,DL):[],d=new Set,p=c.filter(C=>d.has(C.campo)?!1:(d.add(C.campo),!0)),L={id:qe(r.id,40,""),fecha:o,tipo:r.tipo,funcionario:{nombre:qe((T=r.funcionario)==null?void 0:T.nombre,120,""),cedula:Ca((f=r.funcionario)==null?void 0:f.cedula,20,/^[0-9-]+$/,"")},cambios:p};return fn(r.detalle)&&(L.detalle={archivo:qe(r.detalle.archivo,120,""),altas:Qi(r.detalle.altas,0,{min:0,max:1e6}),cambios:Qi(r.detalle.cambios,0,{min:0,max:1e6})}),L}function KL(r){const i={};let o=0;for(const[c,d]of Object.entries(r)){if(o>=VL)break;typeof c!="string"||c.length===0||c.length>AL||(i[c]=typeof d=="string"&&d.length<=10?d:"",o+=1)}return i}function $L(r){try{if(!fn(r))return r;const i={...r};if(Array.isArray(i.personas)&&(i.personas=i.personas.filter(fn).map(o=>{try{return FL(o)}catch{return o}}).slice(0,SL)),Array.isArray(i.actividadesPlan)&&(i.actividadesPlan=i.actividadesPlan.filter(fn).map(o=>{try{return QL(o)}catch{return o}}).filter(Boolean).slice(0,xL)),Array.isArray(i.reposiciones)&&(i.reposiciones=i.reposiciones.map(o=>{try{return BL(o)}catch{return null}}).filter(Boolean).slice(0,bL)),Array.isArray(i.puestos)){const o=new Set;i.puestos=i.puestos.map(c=>{try{return YL(c)}catch{return null}}).filter(Boolean).filter(c=>{const d=c.nombre.toLocaleLowerCase("es-CR");return o.has(d)?!1:(o.add(d),!0)}).slice(0,wL)}if(Array.isArray(i.historial)){const o=new Set;i.historial=i.historial.map(c=>{try{return UL(c)}catch{return null}}).filter(Boolean).map((c,d)=>{const p=c.id&&!o.has(c.id)?c.id:`importado-${d}`;return o.add(p),c.id===p?c:{...c,id:p}}).slice(0,el)}if(fn(i.roleData))try{i.roleData=KL(i.roleData)}catch{}if("reglas"in i)try{i.reglas=Fi(fn(i.reglas)?i.reglas:{})}catch{}return i}catch{return r}}const qi="pnlq:state",vl="pnlq:lastSavedAt",qL=rm;function Ht(){try{if(typeof window>"u"||!window.localStorage)return null;const r="__pnlq_probe__";return window.localStorage.setItem(r,"1"),window.localStorage.removeItem(r),window.localStorage}catch{return null}}let wt=null;function HL(){const r=Ht();if(!r)return 0;try{const i=r.getItem(qi);if(!i)return 0;const o=JSON.parse(i);return typeof(o==null?void 0:o.revision)=="number"?o.revision:0}catch{return 0}}function hl(){return wt===null&&(wt=HL()),wt}function bd(r){hl(),typeof r=="number"&&r>wt&&(wt=r)}function WL(){return hl(),wt+=1,wt}function nl(){const r=um();return r?r.state:null}function um(){const r=Ht();if(!r)return null;const i=r.getItem(qi);if(!i)return null;try{const o=JSON.parse(i);if(!o||typeof o!="object")return null;if(o.schemaVersion!==Hn){const c=`${qL}${o.schemaVersion??"unknown"}-${Date.now()}`;try{r.setItem(c,i)}catch{}return null}return hl(),{state:o.state??null,revision:typeof o.revision=="number"?o.revision:0,savedAt:o.savedAt??null}}catch{return null}}function ZL(r,i){if(!r&&!i)return null;if(!r)return{...i,source:"indexeddb"};if(!i)return{...r,source:"localStorage"};const o=r.revision??0,c=i.revision??0;if(o!==c)return o>c?{...r,source:"localStorage"}:{...i,source:"indexeddb"};const d=r.savedAt?Date.parse(r.savedAt):NaN,p=i.savedAt?Date.parse(i.savedAt):NaN;return!Number.isNaN(d)&&!Number.isNaN(p)&&d!==p?d>p?{...r,source:"localStorage"}:{...i,source:"indexeddb"}:{...r,source:"localStorage"}}async function XL(){const r=await WT(),i=await $T(),o=um();await nL().catch(()=>({rescatados:0,descartados:0}));const c=ZL(o,i);return c?(bd((o==null?void 0:o.revision)??0),bd((i==null?void 0:i.revision)??0),{state:c.state,source:c.source,migrated:r.migrated}):{state:null,source:null,migrated:r.migrated}}async function e1(r){const i=WL(),o=new Date().toISOString(),c=Ht();let d=!1;if(c)try{const L=JSON.stringify({schemaVersion:Hn,savedAt:o,revision:i,state:r});c.setItem(qi,L),c.setItem(vl,o),d=!0}catch{d=!1}const p=await qT(r,i);return{ok:d||p,ls:d,idb:p,revision:i}}async function n1(){const r=Ht();let i=!1;if(r)try{r.removeItem(qi),r.removeItem(vl),i=!0}catch{}const o=await HT().catch(()=>!1),c=await ZT().catch(()=>!1),d=o||c;return i&&d&&(wt=null),{ok:i&&d,ls:i,idb:d}}function t1(){const r=Ht();if(!r)return null;try{return r.getItem(vl)}catch{return null}}function a1(r){return{schemaVersion:Hn,appName:"PNLQ — Gestión de Jornadas",unidad:"PNLQ-BTMM",areaConservacion:"ACC",exportadoEn:new Date().toISOString(),state:r}}function ag(r){try{const i=JSON.parse(r);return!i||typeof i!="object"?{ok:!1,reason:"JSON inválido"}:i.schemaVersion!==Hn?{ok:!1,reason:`Versión de esquema incompatible: encontrada v${i.schemaVersion??"?"} esperada v${Hn}`}:!i.state||typeof i.state!="object"?{ok:!1,reason:"Snapshot sin estado"}:{ok:!0,state:$L(i.state),exportadoEn:i.exportadoEn}}catch(i){return{ok:!1,reason:`JSON malformado: ${i.message}`}}}async function r1(){const r=!!Ht();let i=!1;if(typeof indexedDB<"u")try{i=!!await wn()}catch{i=!1}return i?{kind:"indexeddb",hasIDB:i,hasLS:r}:r?{kind:"localStorage",hasIDB:!1,hasLS:!0}:{kind:"none",hasIDB:!1,hasLS:!1}}function i1(){const r=typeof indexedDB<"u",i=!!Ht();return r?{kind:"indexeddb",hasIDB:r,hasLS:i,verificado:!1}:i?{kind:"localStorage",hasIDB:!1,hasLS:!0,verificado:!0}:{kind:"none",hasIDB:!1,hasLS:!1,verificado:!0}}const dm=x.createContext(null),tl=new Date,o1=Ui(tl),al="limpiezaEnzoYSetDic2026",rl="actividadesEjemploJul2026",s1="2026-07-14",Ji="rolesFuenteJulAgo2026",At={view:"dia",personas:vr,month:tl.getMonth(),year:tl.getFullYear(),compact:!1,roleData:dl,actividadesPlan:Wd,reposiciones:CT,diaVista:o1,filtrosVista:{},funcionarioVista:"",historial:[],puestos:Hd,reglas:{...Tl},migraciones:{[al]:!0,[rl]:!0,[Ji]:Xs}};function il(r){return r==="dashboard"?"dia":r}function mm(r){const i=(r==null?void 0:r.migraciones)||{},o=!!i[al],c=(Array.isArray(r==null?void 0:r.personas)?r.personas:[]).filter(Boolean),d=o?c:c.filter(N=>N.nombre!=="Enzo Martini"),p=new Map(d.map(N=>[N.nombre,N])),L=new Set(vr.map(N=>N.nombre)),T=(r==null?void 0:r.roleData)||{},f=o?T:Object.fromEntries(Object.entries(T).filter(([N])=>!/^2026-(?:9|10|11|12)-/.test(N)&&!N.includes("-Enzo Martini-"))),C=[...vr.map(N=>{const w=p.get(N.nombre)||{};return{...N,...w,historialPuestos:w.historialPuestos??N.historialPuestos}}),...d.filter(N=>N.nombre&&!L.has(N.nombre))].map(N=>DT(N));let y=Array.isArray(r==null?void 0:r.actividadesPlan)?r.actividadesPlan.filter(N=>N&&typeof N=="object"):At.actividadesPlan;if(!i[rl]&&Array.isArray(r==null?void 0:r.actividadesPlan)){const N=new Set(y.map(j=>j.id)),w=Wd.filter(j=>j.inicio>=s1&&!N.has(j.id));w.length&&(y=[...y,...w])}const g=Array.isArray(r==null?void 0:r.reposiciones)?r.reposiciones.filter(N=>N&&typeof N=="object"&&N.funcionario&&N.fecha):At.reposiciones;return{...At,...r,view:il((r==null?void 0:r.view)??At.view),personas:C,actividadesPlan:y,reposiciones:g,historial:Array.isArray(r==null?void 0:r.historial)?r.historial:[],filtrosVista:{},puestos:Array.isArray(r==null?void 0:r.puestos)&&r.puestos.length?r.puestos.filter(N=>N&&typeof N=="object"&&N.nombre):Hd,roleData:{...dl,...f},reglas:Fi(r==null?void 0:r.reglas),migraciones:{...i,[al]:!0,[rl]:!0}}}function l1(){const r=nl();return r?mm(r):At}function An(r,i){return typeof r=="function"?r(i):r}function c1(r,i){var o,c,d,p;switch(i.type){case"SET_VIEW":return{...r,view:il(i.payload)};case"SET_MONTH":return{...r,month:An(i.payload,r.month)};case"SET_YEAR":return{...r,year:An(i.payload,r.year)};case"SET_PERIODO":return{...r,month:i.month,year:i.year};case"SET_COMPACT":return{...r,compact:An(i.payload,r.compact)};case"SET_DIA_VISTA":return{...r,diaVista:An(i.payload,r.diaVista)};case"SET_FILTROS_VISTA":{const L=i.vista;if(!L)return r;const T=(o=r.filtrosVista)==null?void 0:o[L],f=An(i.payload,T||{}),C={};for(const[y,g]of Object.entries(f||{}))g!=null&&g!==""&&(C[y]=String(g));return{...r,filtrosVista:{...r.filtrosVista||{},[L]:C}}}case"SET_FUNCIONARIO_VISTA":return{...r,funcionarioVista:String(An(i.payload,r.funcionarioVista)||"")};case"SET_PERSONAS":return{...r,personas:An(i.payload,r.personas)};case"SET_ACTIVIDADES_PLAN":return{...r,actividadesPlan:An(i.payload,r.actividadesPlan)};case"SET_REPOSICIONES":return{...r,reposiciones:An(i.payload,r.reposiciones)};case"SET_ROLE_DATA":return{...r,roleData:An(i.payload,r.roleData)};case"SET_PUESTOS":return{...r,puestos:An(i.payload,r.puestos)};case"REGISTRAR_CAMBIO":return{...r,historial:NL(r.historial,i.payload)};case"SYNC_ROLES_FUENTE":return((c=r.migraciones)==null?void 0:c[Ji])===i.version?r:{...r,roleData:UT(r.roleData),migraciones:{...r.migraciones||{},[Ji]:i.version}};case"SET_REGLAS":{const L=An(i.payload,r.reglas);return{...r,reglas:Fi(L)}}case"REPLACE_STATE":return{...At,...i.payload,view:il(((d=i.payload)==null?void 0:d.view)??At.view),reglas:Fi((p=i.payload)==null?void 0:p.reglas)};default:return r}}const u1=new Set(["view","compact","diaVista","funcionarioVista","filtrosVista","month","year"]);function ki(r){const i={};for(const o of Object.keys(r))u1.has(o)||(i[o]=r[o]);return i}const d1=500;function m1({children:r}){const[i,o]=x.useReducer(c1,void 0,l1),[c,d]=x.useState(()=>t1()),[p,L]=x.useState(0),[T,f]=x.useState(()=>i1()),[C,y]=x.useState(!1),[g,N]=x.useState(!1),[w,j]=x.useState(null),Q=x.useRef(null),D=x.useRef(!0),V=x.useRef(!1),Y=x.useRef(!1),te=x.useRef(!1);x.useEffect(()=>{let B=!1;return r1().then(X=>{B||f(X)}),()=>{B=!0}},[]);const Z=x.useRef(i);x.useEffect(()=>{Z.current=i});const pe=x.useRef(JSON.stringify(ki(i)));x.useEffect(()=>{let B=!1;return(async()=>{try{const{state:X,source:Pe,migrated:he}=await XL();if(B)return;if(he&&y(!0),X&&Pe==="indexeddb"){const Me=mm(X),Je=JSON.stringify(ki(Me)),sn=pe.current;if(JSON.stringify(ki(Z.current))!==sn)return;sn!==Je&&o({type:"REPLACE_STATE",payload:Me})}}catch(X){console.error("No fue posible completar la hidratación local",X)}finally{B||(V.current=!0,N(!0))}})(),()=>{B=!0}},[]),x.useEffect(()=>{var X;!g||((X=Z.current.migraciones)==null?void 0:X[Ji])===Xs||o({type:"SYNC_ROLES_FUENTE",version:Xs})},[g]);const ie=x.useRef(null);ie.current=async function(){if(Y.current){te.current=!0;return}Y.current=!0,te.current=!1;try{const X=await e1(ki(Z.current));j(X),X.ls&&d(new Date().toISOString()),X.ok&&L(0)}finally{Y.current=!1,te.current&&(te.current=!1,ie.current())}},x.useEffect(()=>{if(D.current){D.current=!1;return}return L(B=>B+1),Q.current&&window.clearTimeout(Q.current),Q.current=window.setTimeout(()=>{Q.current=null,ie.current()},d1),()=>{Q.current&&window.clearTimeout(Q.current)}},[i]),x.useEffect(()=>{const B=()=>{Q.current&&(window.clearTimeout(Q.current),Q.current=null,ie.current())},X=()=>{document.visibilityState==="hidden"&&B()};return window.addEventListener("pagehide",B),document.addEventListener("visibilitychange",X),()=>{window.removeEventListener("pagehide",B),document.removeEventListener("visibilitychange",X)}},[]);const ee=x.useCallback(B=>o({type:"SET_VIEW",payload:B}),[]),Te=x.useCallback(B=>o({type:"SET_MONTH",payload:B}),[]),le=x.useCallback(B=>o({type:"SET_YEAR",payload:B}),[]),ue=x.useCallback(B=>o({type:"SET_COMPACT",payload:B}),[]),Ee=x.useCallback(B=>o({type:"SET_DIA_VISTA",payload:B}),[]),ge=x.useCallback(B=>o({type:"SET_FUNCIONARIO_VISTA",payload:B}),[]),ye=x.useCallback((B,X)=>o({type:"SET_FILTROS_VISTA",vista:B,payload:X}),[]),Ve=x.useCallback(B=>o({type:"SET_PERSONAS",payload:B}),[]),se=x.useCallback(B=>o({type:"SET_ACTIVIDADES_PLAN",payload:B}),[]),Le=x.useCallback(B=>o({type:"SET_REPOSICIONES",payload:B}),[]),fe=x.useCallback(B=>o({type:"SET_ROLE_DATA",payload:B}),[]),z=x.useCallback(B=>o({type:"SET_PUESTOS",payload:B}),[]),H=x.useCallback(B=>o({type:"REGISTRAR_CAMBIO",payload:B}),[]),G=x.useCallback(B=>o({type:"SET_REGLAS",payload:B}),[]),M=x.useCallback(B=>{o({type:"REPLACE_STATE",payload:B})},[]),R=x.useCallback(()=>{o({type:"SET_REGLAS",payload:{...Tl}})},[]),oe=x.useCallback(async()=>{Q.current&&(window.clearTimeout(Q.current),Q.current=null);const B=await n1();return o({type:"REPLACE_STATE",payload:At}),d(null),j(null),L(0),B},[]),me=x.useMemo(()=>({...i,setView:ee,setMonth:Te,setYear:le,setCompact:ue,setDiaVista:Ee,setFuncionarioVista:ge,setFiltrosVista:ye,setPersonas:Ve,setActividadesPlan:se,setReposiciones:Le,setRoleData:fe,setPuestos:z,registrarCambio:H,setReglas:G,resetReglas:R,replaceState:M,resetToSeed:oe,lastSavedAt:c,pendingChanges:p,lastSaveResult:w,durableSaveFailed:w?!w.idb:!1,schemaVersion:Hn,storageBackend:T,migracionLs:C,dispatch:o}),[i,ee,Te,le,ue,Ee,ge,ye,Ve,se,Le,fe,z,H,G,R,M,oe,c,p,w,T,C]);return u.jsx(dm.Provider,{value:me,children:r})}function qt(){const r=x.useContext(dm);if(!r)throw new Error("useApp must be used within an <AppProvider>");return r}const p1={atajos:{buscarTitulo:"Pulse / para saltar aquí"},app:{name:"PNLQ — Gestión de Jornadas Laborales",short:"PNLQ",estado:"Activo",reglaDura:"Regla dura: el sistema registra y alerta; no genera pago, reposición, suspensión o derecho automático.",sinacCR:"SINAC · Costa Rica",accNombre:"Área de Conservación Central",bloqueLinea1:"Bloque Tapantí",bloqueLinea2:"Macizo de la Muerte",bloqueSub:"Gestión de jornadas laborales",perfilNombre:"P. Sánchez N.",perfilCargo:"Guardaparques · ACC",titulo:"Gestión de jornadas laborales"},sidebar:{grupoPrincipal:"Principal",grupoJornadas:"Jornadas",grupoControl:"Control"},view:{dia:"Día",funcionarios:"Funcionarios",roles:"Roles",planificacion:"Planificación general",planFuncionario:"Planificación/Funcionario",adelantos:"Adelanto de viáticos",reposicion:"Reposición de tiempo",disponibilidad:"Disponibilidad",alertas:"Alertas",datos:"Datos · respaldo",configuracion:"Configuración"},topbar:{periodo:"Periodo",mesAnterior:"Mes anterior",mesSiguiente:"Mes siguiente",mes:"Mes",anio:"Año",vistaCompacta:"Vista compacta",vistaAmplia:"Vista amplia",cargando:"Cargando vista…",hoy:"Hoy",tema:"Tema y contraste",previewMobile:"Abrir simulador temporal de vista móvil",previewMobileCorto:"Vista móvil",previewTitle:"Vista móvil temporal",previewDesc:"Simulación de un teléfono genérico de {ancho} × {alto} px. Puede usar la aplicación dentro del marco.",previewFrameTitle:"Aplicación en tamaño de teléfono móvil",previewOrientation:"Orientación del teléfono simulado",previewVertical:"Vertical",previewHorizontal:"Horizontal"},bottomNav:{inicio:"Inicio",personal:"Personal",plan:"Plan",alertas:"Alertas",dia:"Día",roles:"Roles",planFunc:"Plan/Func.",viaticos:"Viáticos",reposicion:"Reposición",disponib:"Disponib.",datos:"Datos",config:"Config.",mas:"Más",masTitulo:"Más módulos",masSub:"Herramientas y módulos secundarios",masAria:"Más opciones",navAria:"Navegación principal",alertasAria:"{n} alertas pendientes"},theme:{light:"Claro",dark:"Oscuro",hc:"Alto contraste",cambiarOscuro:"Cambiar a oscuro",cambiarHC:"Cambiar a alto contraste",cambiarClaro:"Cambiar a claro"},cobertura:{titulo:"Cobertura programada",programados:"Programados en actividades",enTurnoRol:"En turno según rol",atencionVisit:"Atención rutinaria visitantes",alertaSinAtencion:"ALERTA: debe haber al menos una persona asignada.",asignadosVisit:"Asignados a atención rutinaria de visitantes",enTurnoSegunRol:"Funcionarios en turno según rol",sinTurno:"No hay funcionarios en turno según rol para este puesto operativo y día.",programadosLugar:"Funcionarios programados en actividades con este lugar",sinProgramados:"No hay funcionarios programados en actividades con este puesto operativo como lugar para este día.",sinActividad:"Sin actividad programada para este día.",rolPrefix:"Rol: {rol} · {puesto}",agregarActividad:"Agregar actividad",editarActividad:"Editar actividad"},kpi:{coberturaCritica:"Cobertura crítica",coberturaCriticaSub:"días sin Visit. asignada",sinActividad:"Sin actividad",sinActividadSub:"en turno hoy sin planificar",porVencer:"Por vencer",porVencerSub:"disponibilidades ≤30 días",personalActivo:"Personal activo",personalActivoSub:"/ {total} total",reposicionPendiente:"Tiempo por reponer",reposicionPendienteSub:"funcionarios con tiempo pendiente",enTurno:"En turno",conActividad:"Con actividad",fueraDeTurno:"Fuera de turno",conViatico:"Con viático"},dia:{coberturaCritica:"Cobertura crítica en {n} puesto(s)",coberturaCriticaSinNadie:"{puesto}: nadie asignado a la atención de visitantes.",coberturaCriticaRemoto:"{puesto}: {n} persona(s) asignada(s) a la atención de visitantes, pero ninguna presente en el puesto.",coberturaCriticaAyuda:"Estos puestos deben tener atención de visitantes todos los días. Asigne a alguien que esté en turno presencial, o ajuste la regla en Configuración.",coberturaCriticaAria:"{puesto} en cobertura crítica",anterior:"Anterior",siguiente:"Siguiente",diaAnterior:"Día anterior",diaSiguiente:"Día siguiente",seleccionarFecha:"Seleccionar fecha",pistaSwipe:"Deslice ←/→ para cambiar día",porPuesto:"Por puesto operativo",resumenTitulo:"Resumen del día",resumenEnTurno:"En turno",resumenSinActividad:"Sin actividad",resumenAlertas:"Alertas",resumenPistaSinActividad:"Hay personas en turno sin actividad. Baje a la sección «En turno · sin actividad» para asignar.",ayudaAria:"Cómo usar la vista Día",th:{puesto:"Puesto",fuera:"Fuera",enTurno:"En turno",conActividad:"Con activ.",sinActividad:"Sin activ.",total:"Total"},actividadesTitulo:"Actividades planificadas ({n})",actividadesTituloCorto:"Actividades · {n}",teletrabajoBadge:"Teletrabajo",teletrabajoResumen:"De quienes trabajan hoy, {n} lo hacen en teletrabajo y no pueden atender visitantes.",filtroActividades:{mostrar:"Mostrar actividades",aria:"Filtrar actividades del día",general:"General",trabajo:"Tipo de trabajo",presencial:"Presencial",teletrabajo:"Teletrabajo",funcionario:"Funcionario",puesto:"Puesto",seleccionarFuncionario:"Funcionario",seleccionarPuesto:"Puesto operativo",resultados:"Mostrando {n} de {total} actividades"},nueva:"+ Nueva",nuevaCorta:"Nueva",sinActividades:"Sin actividades planificadas para este día",enTurnoConActTitulo:"En turno · con actividad ({n})",enTurnoConActVacio:"Ningún funcionario en turno tiene actividad programada",enTurnoSinActTitulo:"En turno · sin actividad ({n})",enTurnoSinActVacio:"Todos los funcionarios en turno tienen actividad asignada",asignar:"+ Asignar",fueraDeTurnoTitulo:"Fuera de turno ({n})",fueraDeTurnoVacio:"Todos los funcionarios activos están en turno",conViaticoTitulo:"Con viático este día ({n})",nFuncionarios:"{n} funcionario{plural}",viaticoBadge:"💵 Viático",conflictosBadge:"⚠ {n} conflicto{plural}",sinLugar:"Sin lugar"},help:{dia:{titulo:"Cómo usar la vista Día",lineas:["Arriba elige la fecha con las flechas o el calendario.","Las tres cifras grandes muestran quién está en turno, quién falta actividad y cuántas alertas hay.","Toque «Alertas» en la barra inferior o la cifra de alertas para ver los avisos.","Use «+ Nueva» o el botón redondo para registrar una actividad.","Los cambios se guardan solos en este teléfono (vea el mensaje «Guardado»)."]}},funcionarios:{titulo:"Funcionarios",agregar:"Agregar funcionario",agregarCorto:"Agregar",buscarPlaceholder:"Buscar por nombre, cédula, puesto u observación…",verFiltros:"Filtros y orden",filtroTodos:"Todos",filtroGuardas:"Guardaparques",filtroDisp:"Con disponibilidad",filtroAcum:"Acumulativa",filtroOng:"ONG-Invest-Volunt",filtroSinRes:"Sin resolución",vistaTabla:"Tabla",vistaTarjetas:"Tarjetas",vistaAria:"Vista",sinResultadosTitulo:"Sin resultados",sinResultadosDesc:"Ajuste la búsqueda o los filtros para encontrar funcionarios.",th:{funcionario:"Funcionario",cargo:"Cargo / puesto operativo",jornada:"Jornada",disponibilidad:"Disponibilidad",atributos:"Atributos",estado:"Estado",acciones:"Acciones"},sinPuesto:"Sin puesto operativo",sinResolucion:"🔵 Sin resolución",si:"Sí",no:"No",leyendaPolicia:"🛡️ Autoridad de policía",leyendaBrigada:"🔥 Brigada forestal",leyendaPendiente:"🔵 Dato operativo por completar",eliminado:"Se eliminó a {nombre}",restaurado:"Se restauró a {nombre}",creado:"Se agregó a {nombre}",guardado:"Se guardaron los cambios de {nombre}",ordenar:"Ordenar",filtrosAria:"Filtrar funcionarios",exportar:"Exportar CSV",exportarCorto:"CSV",exportarAria:"Exportar a CSV los funcionarios que se están viendo",exportado:"Se exportaron {n} funcionarios a CSV",exportadoVacio:"No hay funcionarios que exportar con este filtro",exportarError:"El navegador no permitió la descarga",importar:"Importar CSV",importarCorto:"Importar",importarAria:"Importar funcionarios desde un archivo CSV",importa:{titulo:"Revisar antes de importar",sub:"Nada se ha guardado todavía. Así quedaría la lista:",altas:"Se agregan",cambios:"Se actualizan",intactos:"No se tocan",omitidas:"Filas omitidas por no traer nombre ni cédula: {n}",vacias:"Filas en blanco ignoradas: {n}",duplicadas:"Identidades repetidas dentro del archivo: {n}. Manda la última fila de cada una.",faltantes:"Columnas que no venían en el archivo: {cols}. Esos datos se conservan como estaban.",desconocidas:"Columnas del archivo que se ignoran: {cols}",avisosTitulo:"Advertencias sobre los datos importados:",avisosNota:"No impiden importar; quedan registradas igual que al escribirlas a mano.",respaldo:"Antes de aplicar se descargará un respaldo completo. Si algo sale mal, se restaura desde «Datos · respaldo».",confirmar:"Crear respaldo e importar",sinIdentificar:"El archivo no trae ni «Nombre» ni «Cédula», así que no hay forma de saber a quién corresponde cada fila.",sinFilas:"El archivo no tiene ninguna fila de datos.",demasiadoGrande:"El archivo supera los {mb} MB y no se procesó.",errorLectura:"No se pudo leer el archivo.",hecho:"Importados: {altas} nuevos y {cambios} actualizados",respaldoFallo:"No se pudo descargar el respaldo, así que no se importó nada."},col:{nombre:"Nombre",cedula:"Cédula",email:"Correo",puesto:"Cargo institucional",puestoOperativo:"Puesto operativo",condicion:"Condición",jornada:"Jornada",modalidad:"Modalidad",resolucion:"Resolución",contrato:"Contrato de disponibilidad",vencimiento:"Vencimiento",ingreso:"Ingreso",disponibilidad:"Disponibilidad",policia:"Autoridad de policía",brigada:"Brigada forestal",ong:"ONG-Invest-Volunt",estado:"Estado",obs:"Observaciones"},procesando:"Procesando…",procesandoCorto:"…",procesandoAria:"Procesando el archivo, espere un momento",atributoPolicia:"Policía",atributoBrigada:"Brigada",card:{observaciones:"Observaciones",cargo:"Cargo",jornada:"Jornada",disponibilidad:"Disponibilidad",atributos:"Atributos",venceCorto:"Vence {fecha}"},verFicha:"Ver ficha",verFichaDe:"Ver la ficha de {nombre}"},ficha:{titulo:"Ficha de {nombre}",volver:"Volver a Funcionarios",noExiste:"No se encontró a esa persona",noExisteDesc:"El enlace apunta a «{nombre}», que ya no está en la lista de funcionarios. Puede que se eliminara o que el nombre cambiara.",editar:"Editar ficha",verRoles:"Ver en Roles",datos:{titulo:"Datos básicos",cedula:"Cédula",email:"Correo",cargo:"Cargo",puestoOperativo:"Puesto operativo",condicion:"Condición",jornada:"Jornada",modalidad:"Modalidad",resolucion:"Resolución",jefatura:"Jefatura",ingreso:"Ingreso",estado:"Estado",disponibilidad:"Disponibilidad",contrato:"Contrato",vencimiento:"Vence",observaciones:"Observaciones",sinDato:"—"},puestosHistorial:{titulo:"Puestos por los que ha pasado",ayuda:"Sale del rol institucional. El rol de cada mes se archiva bajo el puesto donde la persona estaba ese mes.",actual:"Actual",desdeSiempre:"desde antes de lo registrado",desde:"desde {fecha}",hasta:"hasta {fecha}",sigue:"sigue ahí",uno:"Sin traslados registrados."},banco:{titulo:"Banco de tiempo",ayuda:"Tiempo trabajado fuera de rol que la administración debe reponer. El saldo sale del mismo cálculo que la vista de Reposición.",saldo:"Saldo a favor",sinSaldo:"Sin tiempo pendiente de reponer",sinRegistros:"Sin registros de tiempo trabajado fuera de rol",sinRegistrosDesc:"Cuando se registre un llamado a trabajar en día libre, feriado o fuera de turno, aparecerá aquí.",registros:"{n} registro(s)",pendientes:"{n} pendiente(s)",repuestos:"{n} repuesto(s)",verDetalle:"Ver en Reposición",thFolio:"Folio",thFecha:"Fecha",thTipo:"Tipo de día",thMotivo:"Motivo",thTrabajado:"Trabajado",thRepuesto:"Repuesto",thSaldo:"Saldo",thEstado:"Estado",horas:"{n} h"},roles:{titulo:"Rol del mes",ayuda:"Días de {mes}. El código de cada día es el mismo que muestra la cuadrícula de Roles.",sinMarcar:"{n} día(s) sin marcar",activos:"{n} día(s) de trabajo",presenciales:"{n} presencial(es)",dias:"{n} día(s)",hoy:"Hoy: {etiqueta}"},actividades:{titulo:"Actividades programadas",proximas:"Próximas",pasadas:"Pasadas",todas:"Todas",filtro:"Filtrar actividades por fecha",sinResultados:"Sin actividades en este filtro",sinResultadosDesc:"Cambie el filtro para ver el resto del historial de la persona.",sinNinguna:"Sin actividades asignadas",sinNingunaDesc:"Esta persona no aparece en ninguna actividad del plan.",enCurso:"En curso",teletrabajo:"Teletrabajo",teletrabajoParcial:"Teletrabajo {n} de {total} días",rango:"{inicio} a {fin}",verEnDia:"Ver el día {fecha}",acompanantes:"Con {n} persona(s) más"},alertas:{titulo:"Alertas de la persona",sinAlertas:"Sin alertas para esta persona",sinAlertasDesc:"No hay vencimientos, incompatibilidades ni tiempo sin reponer a su nombre.",verTodas:"Ver todas las alertas"}},modalFuncionario:{editar:"Editar funcionario",agregar:"Agregar funcionario",sec:{identificacion:"Identificación",puesto:"Puesto y condición",jornada:"Jornada y modalidad",contratacion:"Contratación y fechas",atributos:"Atributos"},revisar:{titulo:"Antes de guardar, revise:",nota:"Son advertencias, no errores: puede guardar igual y completar el dato después."},pasos:{navAria:"Pasos del formulario",indicador:"Paso {n} de {total}",irA:"Ir al paso {n}: {titulo}",uno:"Quién es",dos:"Dónde y cómo trabaja",tres:"Respaldo y atributos",soloNombre:"Solo el nombre es obligatorio: puede guardar desde cualquier paso y completar el resto después."},ayuda:{puesto:"«Cargo institucional» es el puesto nominal; «Puesto operativo» es el sitio donde trabaja, y de él depende la cobertura diaria de atención de visitantes. La condición ONG-Invest-Volunt es personal de apoyo externo con régimen especial: no requiere resolución de jornada acumulativa y puede tener convenio en lugar de contrato.",jornada:"Ordinaria es horario administrativo de lunes a viernes. Acumulativa trabaja por ciclos y requiere número de resolución, salvo en personal ONG-Invest-Volunt. La modalidad NxM indica N días de trabajo por M días libres: 10x5 son 10 días de turno seguidos de 5 libres. Al editar una fila en Roles, la herramienta renumera los consecutivos T y L respetando esta modalidad.",contratacion:"La resolución es el número que respalda la jornada acumulativa; si falta, el funcionario queda marcado como «Sin resolución» y solo se registra el dato pendiente. El contrato y su vencimiento corresponden a la disponibilidad: la herramienta avisa cuando faltan 60 días o menos, el día del vencimiento y cuando ya venció.",atributos:"Disponibilidad es el contrato administrativo que habilita a llamar al funcionario fuera de su horario regular. Policía indica autoridad de policía y Brigada, pertenencia a la brigada forestal. Recuerde la regla dura: la herramienta registra y alerta, no genera pagos, reposiciones ni derechos automáticos."},nombre:"Nombre",cedula:"Cédula",correo:"Correo",cargo:"Cargo institucional",puesto:"Puesto operativo",trasladoDesde:"Traslado efectivo desde",trasladoAyuda:"El puesto anterior se guarda en el historial, cerrado la víspera de esta fecha. El rol de esos meses se queda donde está.",condicion:"Condición",estado:"Estado",jornada:"Jornada",modalidad:"Modalidad",resolucion:"Resolución",contrato:"Contrato",vencimiento:"Vencimiento",ingreso:"Ingreso",obs:"Observaciones",attr:{disponibilidad:"Disponibilidad",policia:"Autoridad policía",brigada:"Brigada",ong:"ONG-Invest-Volunt"}},modalActividad:{titulo:"Actividad",editar:"Editar actividad",agregar:"Agregar actividad",sub:"Registre actividad, periodo, lugar, funcionarios participantes y necesidad de adelanto de viático.",fechaInicio:"Fecha inicio",fechaFinal:"Fecha final",unDia:"Actividad de un solo día",requiereViatico:"Requiere tramitar adelanto de viático",lugar:"Lugar",placeholderTitulo:"O escriba otra actividad: patrullaje, inspección, reunión, mantenimiento...",placeholderLugar:"Escriba otro lugar: sector, sendero, oficina, comunidad...",placeholderObs:"Detalle operativo, coordinación, expediente, requerimientos, vehículo, equipo, etc.",otra:"Otra actividad",otro:"Otro",participantes:"Funcionarios participantes",seleccionados:"{n} seleccionados",avisoTraslape:"Funcionario con actividad ya planificada",agregarAunAsi:"Agregar de todos modos",modificarActividad:"Modificar actividad",obs:"Observaciones",guardarActividad:"Guardar actividad",diaLibre:"Día libre/vacaciones",saldoFavor:"Saldo a favor",saldoFavorMonto:"Saldo a favor: {saldo}",soloSaldo:"Solo con saldo a favor",libresAsignados:"Asignados en día libre/vacaciones",resolver:"Resolver"},asignacionLibre:{titulo:"Funcionario fuera de turno",sub:"{funcionario} figura como “{rol}” el {fecha}. ¿Cómo desea proceder?",modificarRol:"Modificar rol",modificarRolDesc:"Marcar ese día como turno (T) en el rol y agregarlo a la actividad.",reposicion:"Registrar reposición pendiente",reposicionDesc:"Deja el rol igual y registra el tiempo trabajado para reponérselo después.",reponer:"Reponer tiempo (saldo a favor: {saldo})",reponerDesc:"Usa este día libre para reponer su saldo pendiente. No se agrega a la actividad.",editarFecha:"Editar la fecha de la actividad",editarFechaDesc:"No lo agrega; vuelve al formulario para cambiar la fecha de la actividad."},roles:{col:{puesto:"Puesto operativo",funcionario:"Funcionario",diasTrabajo:"Días de trabajo",sinMarcar:"Días sin marcar"},exportar:"Exportar CSV",exportarAria:"Exportar a CSV el rol del mes que se está viendo",exportarResumen:"Exportar resumen",exportarResumenAria:"Exportar a CSV el resumen de días por categoría",exportado:"Se exportaron {n} funcionario(s)",exportadoVacio:"No hay funcionarios que exportar con los filtros actuales",exportarError:"No se pudo generar el archivo",verFicha:"Ver ficha",titulo:"Distribución de roles",vistaMensualLineal:"Vista mensual lineal",filtros:"Filtros",verTodos:"Ver todos",limpiarFiltros:"Limpiar",todos:"Todos",filtrarPorPuesto:"Filtrar por puesto",filtrosFuncionario:"Filtrar por funcionario",resumenPuestosTodos:"Puestos y funcionarios: todos ({n})",resumenPuestosParcial:"Puestos y funcionarios: {n} de {total}",buscarFuncionario:"Buscar funcionario…",limpiarBusqueda:"Limpiar búsqueda",solo:"Solo",contraerPuesto:"Contraer lista de funcionarios",expandirPuesto:"Expandir lista de funcionarios",sinResultadosBusqueda:"Sin coincidencias con la búsqueda.",resumenFiltro:"{n} funcionarios visibles",desplazarDias:"Desplazar días",semanaAnterior:"Semana anterior",semanaSiguiente:"Semana siguiente",semana7:"7 días",centrarHoy:"Centrar hoy",irAFecha:"Ir a fecha",irAFechaLabel:"Buscar por fecha",todosLosPuestos:"Todos los puestos",sinFuncionariosFiltro:"No hay funcionarios visibles con el filtro actual.",leyenda:{turno:"T1 Turno",libre:"L1 Libre",vacaciones:"V1 Vacas",incapacidad:"I1 Incapaci",otro:"O1 Otro",teletrabajo:"E1 Teletrab"},cantidadEnTurno:"EN TURNO",resumenGeneral:"Resumen · todos los puestos",resumenCorto:"Resumen",resumenEnTurno:"En turno",resumenLibres:"Libres",resumenVacaciones:"Vacaciones",resumenIncapacidad:"Incapacidad",resumenOtros:"Otros",editarTipoRol:"Tipo de rol desde 1er día laboral",aplicar:"Aplicar",aplicarPatronAbrir:"Aplicar…",dudaFuente:"El rol institucional se contradice aquí: la fila de {puesto} dice «{valor}». Confirme con la administración cuál vale.",dudaFuenteAria:"el rol institucional se contradice: otra fila dice {valor}",titleConflicto:"Clic para resolver: rol vs actividad planificada",conflictoAria:"en conflicto",cuadriculaAria:"Rol por funcionario y día. Use las flechas para moverse entre celdas.",titleEditar:"Cambiar marca del día",titleSinEdicion:"Active edición del funcionario para modificar",initRing:"INICIO",multi:{activar:"Selección múltiple",seleccionados:"{n} día(s) seleccionado(s)",confirmarTitulo:"Aplicar código a varios días",confirmarDesc:"Se aplicará {cat} a {n} selección(es) y se renumerarán las filas afectadas.",nota:"Revise la cantidad antes de confirmar. Puede deshacer el último cambio mientras permanezca en esta vista.",deshacer:"Deshacer último cambio"},aplicarPatron:{titulo:"Aplicar patrón de rol",descripcion:"Genera el tipo de día (turno/libre) de {persona} según la modalidad, desde una fecha inicial hasta un último día. El rango puede abarcar varios meses.",modalidad:"Modalidad",desde:"A partir de",hasta:"Último día",hastaAyuda:"Se llenará hasta esta fecha, inclusive.",botonUltimoProgramado:"Desde el último día con rol programado",botonUltimoProgramadoAyuda:"Coloca «A partir de» el día siguiente al último día ya programado, para continuar sin sobrescribir.",sinProgramado:"Aún no hay días con rol programado para esta persona.",fase:"¿Cómo debe empezar la rotación?",faseReiniciar:"Reiniciar en T1",faseReiniciarAyuda:"La fecha «A partir de» se vuelve el nuevo inicio: ese día es T1 y la rotación avanza desde ahí. Sobrescribe lo que haya en el rango.",faseContinuar:"Continuar la rotación anterior",faseContinuarAyuda:"No reinicia: sigue la rotación del día anterior. Si venía en {codigoPrevio}, ese día continúa en {codigoSiguiente}.",faseContinuarSinAncla:"Para continuar, el día anterior a «A partir de» debe tener un turno o libre. Hoy no lo tiene; use «Reiniciar en T1».",faseAdministrativo:"El horario administrativo se llena por día de la semana (L–V en turno, S/D libres); no usa rotación T/L.",resumen:"Se llenarán {dias} día(s), del {desde} al {hasta}.",sobrescribe:"Se sobrescribirán {n} día(s) que ya tenían rol programado en el rango.",errorRango:"«A partir de» debe ser igual o anterior a «Último día».",errorMaxDias:"El rango es muy largo (máx. {max} días). Acórtelo e intente de nuevo.",errorSinFechas:"Elija la fecha inicial y el último día.",confirmar:"Aplicar patrón",cancelar:"Cancelar"}},menuCelda:{titulo:"Editar día {dia} · {persona}",sub:"Seleccione únicamente la categoría. El número consecutivo se recalcula automáticamente en toda la fila.",primerDia:"Primer día laboral del mes.",primerDiaSub:"La modalidad del funcionario define el reinicio de los consecutivos de turno y libre.",cat:{T:"Turno",L:"Libre",V:"Vacaciones",I:"Incapacidad",O:"Otro",E:"Teletrabajo"},sub2:"Se mostrará como {cat}1, {cat}2...",limpiar:"Limpiar celda"},conflicto:{titulo1:"Resolver incoherencia · paso 1 de 2",titulo2:"Confirmar acción · paso 2 de 2",sub1:"Seleccione cuál registro corregir. La herramienta solo actualiza el dato visible: no genera pagos ni decisiones administrativas.",sub2Rol:"Se modificará el rol de este día y se recalcularán los consecutivos T/L/V/I/O de toda la fila respetando la modalidad.",sub2Act:"Se abrirá el listado de {n} actividad{plural} de este día para que pueda quitar al funcionario o ajustar la planificación.",detalle:"{persona} · día {dia}",detalleSub:"Rol {valor} (no en turno) con {n} actividad{plural} planificada{plural}.",cambiarRol:"Modificar rol del día",cambiarRolSub:"Cambiar la categoría de turno para este funcionario.",cambiarActividad:"Modificar actividad{plural}",cambiarActividadSub:"Ver, editar o quitar al funcionario de las actividades del día.",cambiarReposicion:"Registrar reposición pendiente",cambiarReposicionSub:"Deja el rol y la actividad igual; registra el tiempo trabajado para reponérselo después.",reponer:"Reponer tiempo (saldo a favor: {saldo})",reponerSub:"Usa este día para reponer el saldo pendiente del funcionario.",sub2Reposicion:"Se registrará el tiempo trabajado fuera de rol como reposición pendiente; no modifica el rol ni la actividad.",sub2Reponer:"Se aplicará este día al saldo pendiente del funcionario (reposición); no modifica el rol ni la actividad.",despuesReposicion:"queda un registro de reposición pendiente, enlazado por folio al día trabajado.",despuesReponer:"se descuenta del saldo a favor del funcionario.",resumen:"Resumen del impacto",antes:"Antes:",despues:"Después:",antesValor:"rol {valor} · {n} actividad{plural}.",despuesRol:"elegirá una nueva categoría (T/L/V/I/O) y se renumerará toda la fila.",despuesAct:"podrá quitar al funcionario o editar/eliminar la actividad.",notaNoEjecuta:"La herramienta solo registra; no genera pago, reposición ni derecho automático.",volver:"Volver",continuar:"Continuar"},actividadesDia:{titulo:"Actividades · {funcionario}",sub:"{fecha} · {n} actividad{plural} planificada{plural}",vacia:"Ya no hay actividades de {funcionario} en este día.",quitarDe:"Quitar a {nombre}",editar:"Editar actividad",eliminar:"Eliminar"},modificarRol:{titulo:"Modificar rol",sub:"{funcionario} · {fecha} · rol actual: {rol}",cat:{T:"Turno",L:"Libre",V:"Vacaciones",I:"Incapacidad",O:"Otro",E:"Teletrabajo"},catSub:"Recalcula consecutivos de la fila",limpiar:"Limpiar rol del día"},asignarActividad:{titulo:"Asignar actividad",sub:"{funcionario} · {fecha}",crear:"Crear actividad nueva para este funcionario",agregar:"Agregar a actividad existente del mismo día",sinExistentes:"No hay actividades existentes ese día para otros funcionarios."},planificacion:{col:{titulo:"Actividad",categoria:"Categoría",inicio:"Inicio",fin:"Fin",horaInicio:"Hora de inicio",horaFin:"Hora de fin",lugar:"Lugar",funcionarios:"Funcionarios",otros:"Otros participantes",viatico:"Viático",observaciones:"Observaciones"},exportar:"Exportar CSV",exportarAria:"Exportar a CSV las actividades que se están viendo",exportado:"Se exportaron {n} actividad(es)",exportadoVacio:"No hay actividades que exportar con los filtros actuales",exportarError:"No se pudo generar el archivo",titulo:"Planificación general — {mes} {anio}",agregar:"+ Agregar actividad",vistaAgenda:"Agenda",vistaCuadricula:"Cuadrícula",vistaAria:"Modo de vista del calendario",agendaVacia:"Sin actividades",agregarEnDia:"Agregar actividad el día {dia}",verLeyenda:"Ver leyenda de colores",buscarPlaceholder:"Buscar actividad, lugar o persona",buscarAria:"Buscar en planificación",filtros:"Filtros",rangoAria:"Rango de días visible",rangoHoy:"Hoy",rangoProximos7:"Próximos 7 días",rangoActividades:"Con actividades",rangoConflictos:"Con conflictos",rangoSinAsignar:"Sin asignar",rangoMes:"Mes completo",irHoy:"Ir a Hoy",sinCoincidencias:"No hay días que coincidan con estos filtros.",editarActividad:"Editar actividad",filtrosTitulo:"Filtros de planificación",filtrosDesc:"Combina filtros para reducir la agenda.",filtroPersona:"Persona",filtroTodas:"Todas",filtroUbicacion:"Ubicación",filtroViatico:"Viático",viaticoTodos:"Todos",viaticoSi:"Con viático",viaticoNo:"Sin viático",limpiar:"Limpiar",verResultados:"Ver resultados",leyendaProgramada:"Actividad programada",leyendaViatico:"Requiere adelanto de viático",leyendaFinde:"Fin de semana",leyendaTurno:"👥 = en turno",sinFuncionarios:"Sin funcionarios",masFuncionarios:"+{n}",titleDetalleDia:"Ver detalle del día",titleTurno:"{n} funcionarios en turno",titleActs:"{n} actividades",actsBadge:"{n} act.",viaticoTag:"VIÁTICO",rolBadge:"⚠ ROL: {nombres}"},planFuncionario:{titulo:"Planificación/Funcionario — {mes} {anio}",expandir:"Expandir",colapsar:"Colapsar",leyendaTurnoAct:"Turno con actividad",leyendaFaltaAct:"Falta asignar actividad",leyendaConflicto:"Actividad no coincide con rol",diasVisibles:"{n} días visibles",actividades:"{n} actividades",sinAsignar:"{n} sin asignar",conflictos:"{n} conflictos",ocultar:"Ocultar",ver:"Ver",faltaAsignar:"Falta asignar actividad",sinLugar:"Sin lugar",noCoincideRol:"NO COINCIDE CON ROL",modificarActividad:"Modificar actividad",modificarRol:"Modificar rol",asignar:"Asignar",nueva:"Nueva"},viaticos:{titulo:"Adelanto de viáticos — actividades de {nombreMes}",porFuncionario:"Por funcionario",porActividad:"Por actividad",plazoAbierto:"Plazo abierto.",plazoAbiertoSub:"Este listado corresponde al mes siguiente y puede usarse para tramitar adelantos hasta el día {dia} del mes anterior.",plazoCerrado:"Clausurado el tiempo de trámite de adelantos del próximo mes.",plazoCerradoSub:"El listado queda disponible para consulta, pero el plazo ordinario de trámite venció el día {dia} del mes anterior.",pie:"Mes a tramitar: {nombreMes}. Corte administrativo: día {dia} del mes {referencia}.",referenciaAnterior:"anterior",referenciaEnCurso:"en curso",sinActividadesTitulo:"Sin actividades con viático para el próximo mes",sinActividadesDesc:"Aún no hay actividades de {nombreMes} marcadas como “requiere tramitar adelanto de viático”. Vaya a Planificación general o Plan/Funcionario para asignarlas.",ocultoTitulo:"Listado oculto tras el cierre",ocultoDesc:"Según la configuración administrativa, el listado se oculta cuando el plazo (día {dia}) ya venció. Puede reactivar la consulta en Configuración → Viáticos.",nFuncionarios:"{n} funcionarios"},reposicion:{col:{folio:"Folio",funcionario:"Funcionario",fecha:"Fecha trabajada",tipoDia:"Tipo de día",motivo:"Motivo",detalle:"Detalle del motivo",trabajado:"Horas trabajadas",repuesto:"Horas repuestas",saldo:"Saldo (horas)",estado:"Estado",cuotas:"Reposiciones aplicadas",observaciones:"Observaciones"},exportar:"Exportar CSV",exportarAria:"Exportar a CSV los registros de reposición que se están viendo",exportado:"Se exportaron {n} registro(s)",exportadoVacio:"No hay registros que exportar con los filtros actuales",exportarError:"No se pudo generar el archivo",titulo:"Reposición de tiempo trabajado",subtitulo:"Registro de jornadas que la administración requirió trabajar a un funcionario en día libre, fuera de turno, feriado o similar (emergencias, incendios, atención de denuncias, actividades especiales, etc.) para llevar el control y reponerle el tiempo. Puede ser por horas, medio día o día entero.",acercaDe:"Acerca de esta herramienta",controlInterno:"Control interno",agregar:"Registrar tiempo",agregarCorto:"Registrar",filtroTodos:"Todos",filtroPendientes:"Pendientes",filtroRepuestos:"Repuestos",horasN:"{n} h",tabsAria:"Vistas de reposición",tabRegistros:"Registros",tabHistorial:"Historial por funcionario",reponer:"Reponer",saldoCorto:"Saldo pendiente",ultimaReposicion:"Última reposición",masAcciones:"Más acciones del registro",buscar:"Buscar por funcionario, folio, motivo u observación",filtros:"Filtros",filtrosAvanzados:"Filtros de reposición",limpiarFiltros:"Limpiar filtros",todosFuncionarios:"Todos los funcionarios",todosTipos:"Todos los tipos",periodo:"Periodo",soloObservaciones:"Solo registros con observaciones",saldoLabel:"Saldo: {saldo}",estado:{Pendiente:"Pendiente",Parcial:"Parcial",Repuesto:"Repuesto"},resumen:{total:"Registros",pendientes:"Pendientes de reponer",repuestos:"Repuestos",saldo:"Saldo a favor: {saldo}",parciales:"{n} parcial(es)",desglose:"{dias} día(s) · {medios} medio(s) día(s) · {horas} h"},th:{folio:"Folio",funcionario:"Funcionario",fecha:"Fecha trabajada",tipoDia:"Tipo de día",motivo:"Motivo",tiempo:"Tiempo",estado:"Estado",acciones:"Acciones"},magnitudCorta:{diaEntero:"día completo",medioDia:"medio día"},marca:{trabajadaTitulo:"{folio} · Trabajó día {tipoDia} ({magnitud}) · {estado}",reposicionTitulo:"{folio} · Día de reposición del tiempo trabajado el {fecha}",reposicionDe:"reposición del {fecha}"},historial:{vacioTitulo:"Sin historial",vacioDesc:"Aún no hay registros de reposición para mostrar por funcionario.",veces:"{n} registro(s)",pendientesN:"{n} pendiente(s)",repuestosN:"{n} repuesto(s)",saldoFavor:"Saldo a favor: {saldo}",cuota:"Reposición aplicada: {fecha} · {cantidad}"},marcarRepuesto:"Marcar repuesto",reabrir:"Reabrir",repuestoEl:"Repuesto el {fecha}",sinRegistrosTitulo:"Sin registros de reposición",sinRegistrosDesc:"Use “Registrar tiempo” para anotar una jornada trabajada en día libre, feriado o fuera de turno que deba reponerse al funcionario.",sinResultadosTitulo:"Sin resultados",sinResultadosDesc:"Ajuste el filtro para ver los registros de reposición.",nota:"La herramienta solo registra y lleva el control; la reposición efectiva del tiempo la autoriza la administración según la normativa vigente.",eliminado:"Se eliminó el registro {folio}",restaurado:"Se restauró el registro {folio}"},modalReposicion:{editar:"Editar registro de reposición",agregar:"Registrar tiempo a reponer",sub:"Documente la jornada trabajada por requerimiento de la administración para llevar el control y reponer el tiempo.",funcionario:"Funcionario",seleccioneFuncionario:"Seleccione un funcionario…",otrosFuncionarios:"Otros",fecha:"Fecha trabajada",tipoDia:"Tipo de día",motivo:"Motivo",motivoDetalle:"Detalle del motivo",motivoDetallePlaceholder:"Expediente, sector, descripción breve de la situación…",magnitud:"Tiempo trabajado",magnitudDiaEntero:"Día entero",magnitudMedioDia:"Medio día",magnitudHoras:"Por horas",estadoPendiente:"Pendiente",estadoRepuesto:"Repuesto",reposiciones:"Reposiciones registradas",sinCuotas:"Sin reposiciones registradas. Use “Reponer” en la lista para registrar tiempo (total, medio día u horas).",cuotasNota:"Las reposiciones se registran desde la acción “Reponer” de cada registro; aquí solo se consultan o se corrigen.",obs:"Observaciones",obsPlaceholder:"Coordinación con la administración, acuerdos, equipo, vehículo, etc.",guardar:"Guardar registro"},reponer:{titulo:"Reponer tiempo",saldoActual:"Saldo actual",saldoDespues:"Saldo después",cuanto:"¿Cuánto se repone?",fecha:"Fecha de reposición",excede:"La cantidad supera el saldo pendiente; se registrará hasta saldar el tiempo.",registrar:"Registrar reposición"},disponibilidad:{activosTitulo:"Contratos activos — disponibilidad",sinActivosTitulo:"Sin disponibilidad asignada",sinContrato:"Sin contrato",nDias:"{n} días",controlNota:"Control: la herramienta alerta; no ejecuta suspensiones automáticamente."},alertas:{requiereAtencion:"Requiere atención · {n}",sinCriticas:"Sin alertas críticas",sinCriticasSub:"No se observan vencimientos o bloqueos críticos en los datos visibles.",titulo:"Alertas del sistema ({n})",requiereRevision:"Requiere revisión",semaforoTitulo:"Semáforo normativo",semaforo:{verde:"Verificado",amarillo:"Confirmación interna",naranja:"Criterio RH/Jurídico",rojo:"No automatizar",azul:"Dato pendiente"},venceHoy:"Disponibilidad vence HOY — {nombre}",vencida:"Disponibilidad vencida — {nombre}",porVencer:"Disponibilidad por vencer — {nombre}",sinResolucion:"Sin resolución acumulativa — {nombre}",sinModalidad:"Acumulativa sin modalidad definida — {nombre}",incapaConDisp:"Revisar disponibilidad — {nombre}",incapaConActividad:"Incapacitado con actividad planificada — {nombre}",inactivoConActividad:"Inactivo con actividad planificada — {nombre}",reposicionPendiente:"Tiempo por reponer — {nombre}"},datos:{titulo:"Datos · respaldo local",esquema:"Esquema v{n}",estadoOk:"Última copia local guardada el {fecha}",estadoPendiente:"{n} cambio{plural} pendiente{plural} de guardar (debounce 500 ms)",estadoVacio:"Sin copia local todavía: los cambios se guardarán automáticamente al editar.",estadoNota:"La copia vive en el navegador (localStorage). Sirve como respaldo entre sesiones; no sustituye al backend institucional.",funcionarios:"Funcionarios",actividadesPlanificadas:"Actividades planificadas",reposiciones:"Reposiciones de tiempo",celdasOverride:"Celdas de rol con override",exportar:"Exportar JSON",importar:"Importar JSON…",reiniciar:"Reiniciar datos semilla",archivoAria:"Archivo JSON a importar",importadoTitulo:"Snapshot importado",importadoDesc:"Archivo: {archivo}{exportadoEn}",importadoExtra:" · exportado {fecha}",importRechazado:"Importación rechazada",reiniciarTitulo:"Reiniciar a datos semilla",reiniciarSub:"Se descartará la copia local y la app volverá a los datos de ejemplo. Esta acción no se puede deshacer a menos que hayas exportado primero un JSON de respaldo.",reiniciarRec:"Recomendación: pulse Exportar JSON antes de reiniciar.",noDeshacer:"Esta acción no se puede deshacer. Pulse «{accion}» para confirmar.",confirmarReiniciar:"Reiniciar",porQueTitulo:"¿Por qué hay copia local?",porQue:["El navegador guarda automáticamente cada cambio con un retraso de 500 ms para evitar perder información al recargar la página o cerrar el navegador.","La copia permanece en este dispositivo y NO sustituye un backend institucional. Exporte respaldos periódicos para trasladar o proteger la información.","El esquema lleva versión (`v{n}`); si el formato cambia en una nueva versión de la app, se crea un backup automático antes de aplicar la migración.","Exporte un JSON periódicamente como seguro adicional, especialmente antes de cambios mayores o cuando termine la jornada en campo."],backendTitulo:"Almacenamiento durable",backendIDB:"IndexedDB (Dexie) · capacidad amplia, almacenamiento asíncrono",backendLS:"localStorage · respaldo síncrono (~5 MB)",backendNone:"Sin almacenamiento (modo privado estricto)",backendBadgeIDB:"IndexedDB ✓",backendBadgeLS:"localStorage",backendBadgeNone:"Sin durable",migradoLS:"Sus datos previos en localStorage se migraron a IndexedDB automáticamente.",pendientesTitulo:"Estado local",pendientesSub:"No existe sincronización con un servidor remoto.",pendientesCero:"Datos guardados únicamente en este dispositivo.",pendientesN:"{n} cambios locales pendientes de guardar.",descargaFallo:"El navegador no permitió descargar el archivo. Revise si tiene bloqueadas las descargas de este sitio e inténtelo otra vez.",respaldoDescargado:"Se descargó {archivo}.",respaldoPrevioFallo:"NO se restauró nada: el navegador no permitió descargar la copia preventiva, y restaurar sin ella dejaría los datos actuales sin salvaguarda.",baseDatos:{titulo:"Exportar a base de datos",sub:"El respaldo de arriba guarda el estado tal como lo usa esta herramienta y sirve para volver a cargarlo aquí. Esto es lo otro: el mismo contenido descompuesto en tablas con clave primaria, para que otro sistema pueda consultarlo.",comoUsar:"El archivo SQL se ejecuta tal cual: «sqlite3 jornadas.db < archivo.sql» o «psql -d jornadas -f archivo.sql». El JSON lleva dentro la definición del esquema, así que se puede leer desde cualquier lenguaje sin conocer esta aplicación.",json:"JSON relacional",sqlite:"SQL · SQLite",postgres:"SQL · PostgreSQL",thTabla:"Tabla",thFilas:"Filas",total:"{n} filas en {t} tablas",generando:"Preparando el archivo…",listo:"Se descargó {archivo}.",vacio:"No hay nada que exportar todavía."},respaldosAuto:{titulo:"Respaldos automáticos",sub:"Copias que la aplicación aparta sola, sin pedir nada, cuando cambia el formato con el que guarda los datos. Se conservan las {max} más recientes y NO se borran al reiniciar a los datos de ejemplo.",vacio:"No hay ninguno. Es lo normal: el formato de los datos no ha cambiado en este aparato.",cargando:"Buscando respaldos automáticos…",creado:"Apartado el {fecha}",original:"Contenido del {fecha}",esquema:"esquema v{n}",esquemaDesconocido:"esquema sin identificar",sinFecha:"fecha no registrada",peso:"{kb} KB",descargar:"Descargar",eliminar:"Eliminar",eliminado:"Respaldo automático eliminado.",noDisponible:"No fue posible leer ese respaldo.",motivo:{cambioDeEsquema:"Cambió la base de datos del navegador",esquemaIncompatible:"El formato guardado era de otra versión",localStorage:"Rescatado de una copia suelta del navegador"},aviso:"Un respaldo apartado con OTRO esquema no se puede restaurar en esta versión: al intentarlo se rechazará por incompatible. Descárguelo y guárdelo fuera del aparato."}},configuracion:{aparienciaTitulo:"Apariencia",aparienciaSub:"El tema (claro / oscuro / alto contraste) se aplica a toda la aplicación.",titulo:"Configuración · reglas administrativas",cambiosPendientes:"Cambios pendientes",badgeSucia:"Cambios sin aplicar",badgeOk:"Guardado localmente",reglaDuraIntro:"Regla dura: la herramienta registra y alerta; cambiar una regla no genera pagos, suspensiones ni derechos automáticos. Cualquier ajuste debe estar respaldado por la coordinación administrativa.",coberturaTitulo:"Cobertura · puestos con atención rutinaria diaria",coberturaSub:'Si un día un puesto seleccionado no tiene a nadie asignado a "Atención rutinaria de visitantes", se marca como cobertura crítica (rojo) en la vista Día.',viaticosTitulo:"Viáticos · corte administrativo",diaCorte:"Día de corte (1–28)",mesObjetivo:"Mes objetivo",permitirConsulta:"Permitir consulta tras cierre",permitirConsultaSub:'Si "Permitir consulta tras cierre" está desactivado, después del día de corte la vista de viáticos se oculta. Por defecto se mantiene visible (con banner rojo).',feriadosTitulo:"Feriados · cálculo del primer día laboral",feriadosCheckTitle:"Excluir feriados oficiales al determinar el primer día laboral del mes.",feriadosCheckSub:"Si el 1er día hábil L–V cae en feriado, la rotación T/L se inicia el siguiente día laboral real. Aplica a partir del mes siguiente para no alterar registros ya guardados.",feriadosVer:"Ver feriados cargados ({n} año{plural})",alertasTitulo:"Alertas adicionales (Fase 6)",alertaInactivo:"Persona inactiva con actividad futura",alertaIncapacitado:"Incapacitado con actividad futura",alertaSinModalidad:"Acumulativa sin modalidad",alertaReposicion:"Tiempo trabajado pendiente de reponer",alertasNota:"Cada checkbox controla si se evalúa esa familia de alertas. Si se detectan falsos positivos, puede desactivarse temporalmente sin tocar código.",reposicionTitulo:"Reposición · duración de jornada",horasJornada:"Horas por jornada",horasJornadaSub:"Define cuántas horas equivalen a un día completo (medio día = la mitad). Se usa para calcular el saldo de reposición cuando se repone en partes.",advertenciasTitulo:"Advertencias antes de aplicar:",restaurarPredet:"Restaurar valores predeterminados",restaurarConfirm:"¿Restaurar todas las reglas a sus valores predeterminados? Las alertas y cobertura volverán al estado inicial.",descartar:"Descartar",aplicar:"Aplicar cambios…",confirmarAplicar:"Confirmar y aplicar"},acciones:{aceptar:"Aceptar",cancelar:"Cancelar",cerrar:"Cerrar",guardar:"Guardar",eliminar:"Eliminar",agregar:"Agregar",editar:"Editar",confirmar:"Confirmar",restaurar:"Restaurar",exportar:"Exportar JSON",importar:"Importar JSON…",reiniciar:"Reiniciar datos semilla",aplicarCambios:"Aplicar cambios…",actualizarAhora:"Actualizar ahora",verLuego:"Ver luego",instalar:"Instalar",ahoraNo:"Ahora no",deshacer:"Deshacer",atras:"Atrás",siguiente:"Siguiente"},toast:{regionAria:"Avisos de la aplicación",puedeDeshacer:"Puede deshacerlo mientras este aviso siga visible."},puestos:{titulo:"Puestos operativos",sub:"Los centros operativos del parque. De aquí salen las opciones de las fichas, el agrupado de la vista Roles y la cobertura diaria de visitantes.",agregar:"Agregar puesto",editar:"Editar puesto",nombre:"Nombre del puesto",tag:"Código corto",tagAyuda:"Dos o tres letras. Es lo que se ve en la cuadrícula de Roles.",color:"Color en Roles",colorAria:"Elegir color del puesto",visitDiario:"Requiere atención de visitantes a diario",visitDiarioSub:"Si un día no hay nadie asignado a esa actividad en este puesto, la vista Día lo marca en rojo.",personas:"{n} funcionario(s)",sinPersonas:"Sin funcionarios",eliminar:"Eliminar puesto",eliminarConPersonas:"No se puede eliminar «{nombre}»: tiene {n} funcionario(s) asignado(s). Muévalos a otro puesto primero.",eliminarConfirma:"Se eliminará «{nombre}». No tiene funcionarios asignados, así que ninguna ficha queda huérfana.",eliminado:"Se eliminó el puesto «{nombre}»",restaurado:"Se restauró el puesto «{nombre}»",creado:"Se agregó el puesto «{nombre}»",guardado:"Se guardaron los cambios de «{nombre}»",renombrado:"«{antes}» pasa a llamarse «{despues}». Se actualizaron {n} ficha(s).",ultimoPuesto:"Debe quedar al menos un puesto operativo.",subir:"Subir «{nombre}»",bajar:"Bajar «{nombre}»",ordenSub:"El orden se refleja en la cuadrícula de Roles, en los desplegables de las fichas y en el resumen de la vista Día.",exportar:"Exportar CSV",exportarAria:"Exportar los puestos operativos a CSV",exportado:"Se exportaron {n} puestos a CSV",exportarError:"El navegador no permitió la descarga",importar:"Importar CSV",importarAria:"Importar puestos operativos desde un archivo CSV",col:{nombre:"Nombre del puesto",tag:"Código corto",color:"Color en Roles"},importa:{titulo:"Revisar antes de importar puestos",sub:"Nada se ha guardado todavía. Así quedaría la lista:",altas:"Se agregan",cambios:"Se actualizan",intactos:"No se tocan",noElimina:"La importación nunca elimina un puesto: si uno desapareciera, las fichas que lo usan quedarían apuntando a algo inexistente.",omitidasSinNombre:"Filas sin nombre, omitidas: {n}",omitidasSinCodigo:"Puestos nuevos omitidos por no traer código corto: {cols}. El código es obligatorio, igual que en el formulario.",renombresIgnorados:"Se conserva el nombre actual de estos puestos: {cols}. Cambiar el nombre desde un archivo dejaría las fichas de los funcionarios apuntando a un puesto que ya no existe; hágalo desde el botón de editar, que sí arrastra las fichas y las reglas.",omitidasCodigo:"Filas omitidas porque su código ya lo usa otro puesto: {cols}",vacias:"Filas en blanco ignoradas: {n}",duplicadas:"Nombres repetidos dentro del archivo: {n}. Manda la última fila de cada uno.",faltantes:"Columnas que no venían en el archivo: {cols}. Esos datos se conservan como estaban.",desconocidas:"Columnas del archivo que se ignoran: {cols}",respaldo:"Antes de aplicar se descargará un respaldo completo. Si algo sale mal, se restaura desde «Datos · respaldo».",confirmar:"Crear respaldo e importar",sinNombre:"El archivo no trae la columna «Nombre del puesto», así que no hay forma de saber a qué puesto corresponde cada fila.",sinFilas:"El archivo no tiene ninguna fila de datos.",demasiadoGrande:"El archivo supera los {mb} MB y no se procesó.",errorLectura:"No se pudo leer el archivo.",hecho:"Puestos importados: {altas} nuevos y {cambios} actualizados",respaldoFallo:"No se pudo descargar el respaldo, así que no se importó nada."}},historial:{titulo:"Historial de cambios",sub:"Últimos {n} movimientos sobre las fichas de funcionario. Se conservan los {max} más recientes.",vacio:"Todavía no hay cambios registrados.",filtro:"Filtrar por funcionario",todos:"Todos",sinResultados:"Sin movimientos de esta persona.",verMas:"Ver {n} más",tipo:{alta:"Alta",edicion:"Edición",baja:"Baja",restauracion:"Restauración",importacion:"Importación"},cambio:"{campo}: {antes} → {despues}",vacioCampo:"(vacío)",si:"Sí",no:"No",resumenImportacion:"{archivo} · {altas} altas, {cambios} actualizaciones",nota:"El historial viaja en el respaldo JSON, así que se conserva al exportar y restaurar."},ayuda:{mostrar:"¿Qué significa esto?",ocultar:"Ocultar ayuda"},actividad:{sinTitulo:"actividad sin título",eliminada:"Se eliminó «{titulo}»",restaurada:"Se restauró «{titulo}»",eliminadaDetalle:"Desaparece para todos los funcionarios asignados. Puede deshacerlo mientras este aviso siga visible."},estados:{activo:"Activo",inactivo:"Inactivo",vacaciones:"De vacaciones",incapacitado:"Incapacitado"},sync:{enLinea:"En línea",sinConexion:"Sin conexión",guardando:"Guardando…",guardado:"Guardado localmente {hora}",sinRespaldo:"Pendiente de primer guardado local",guardadoParcial:"Guardado temporal — respaldo durable falló ({hora})"},print:{imprimir:"Imprimir / Guardar PDF",imprimirCorto:"Imprimir",encabezadoMinisterio:"MINISTERIO DE AMBIENTE Y ENERGÍA",encabezadoSinac:"SISTEMA NACIONAL DE ÁREAS DE CONSERVACIÓN — SINAC",encabezadoAcc:"ÁREA DE CONSERVACIÓN CENTRAL · BLOQUE TAPANTÍ–MACIZO DE LA MUERTE",encabezadoUnidad:"Parque Nacional Los Quetzales (PNLQ)",documentoTitulo:"ROL MENSUAL DE TRABAJO",periodo:"Período: {mes} {anio}",puestoLabel:"Puesto operativo: {puesto}",leyendaTitulo:"Leyenda de códigos",leyendaT:"T = Turno",leyendaL:"L = Libre",leyendaV:"V = Vacaciones",leyendaI:"I = Incapacidad",leyendaO:"O = Otro",firma1:"Elaborado por",firma2:"Revisado por",firma3:"Aprobado por",firmaCargo1:"Administrador(a) de ASP",firmaCargo2:"Coordinación administrativa ACC",firmaCargo3:"Jefatura BTMM",lugarFecha:"Lugar y fecha: ____________________________________________",pieDocumento:"Documento generado por la herramienta PNLQ Gestión de Jornadas · v{version}",pieFecha:"Impreso: {fecha}",pieReglaDura:"La herramienta solo registra y alerta; no genera derechos automáticos. Firmas validan el documento."},pwa:{instalarTitulo:"Instalar PNLQ en este dispositivo",instalarSub:"Acceso sin internet · Pantalla completa · Sin navegador",instalarAria:"Instalar aplicación PNLQ",sinConexion:"Sin conexión — mostrando datos en caché",ultimaCarga:"Última carga local: {fecha}",nuevaVersion:"Nueva versión disponible",versionDesactualizada:"Versión desactualizada",versionActual:"Versión actual: v{actual}",versionDisponible:" · disponible: v{remoto}",urgente:" Actualice para evitar inconsistencias.",sugerido:" Actualice para ver los últimos cambios.",bannerAria:"Nueva versión de PNLQ disponible"}};function Vd(r,i){return!r||!i||typeof r!="string"?r:r.replace(/\{(\w+)\}/g,(o,c)=>i[c]!==void 0?String(i[c]):o)}function f1(r){const i=String(r||"").split(".");let o=p1;for(const c of i)if(o&&Object.prototype.hasOwnProperty.call(o,c))o=o[c];else return r;return o===void 0?r:o}function Ie(r,i){const o=f1(r);return Array.isArray(o)?o.map(c=>Vd(c,i)):Vd(o,i)}function Ad(r){return r===1?"":"s"}const pm=x.createContext(null),T1=5e3,L1=1e4,v1=3,h1=["info","exito","aviso","error"];let wd=0;function g1(){return wd+=1,`toast-${wd}`}function P1({children:r}){const[i,o]=x.useState([]),c=x.useRef(new Map),d=x.useRef(!1),p=x.useCallback(D=>{o(V=>V.filter(Y=>Y.id!==D))},[]),L=x.useCallback((D,V)=>{if(!Number.isFinite(V)||V<=0)return;const Y=c.current.get(D);Y!=null&&Y.timeoutId&&clearTimeout(Y.timeoutId);const te={restanteMs:V,iniciadoEn:Date.now(),timeoutId:null};d.current||(te.timeoutId=setTimeout(()=>p(D),V)),c.current.set(D,te)},[p]),T=x.useCallback(D=>{const V=typeof D=="string"?{mensaje:D}:D||{},Y=typeof V.mensaje=="string"?V.mensaje.trim():"";if(!Y)return null;const te=h1.includes(V.tipo)?V.tipo:"info",Z=V.accion&&typeof V.accion.onAccion=="function"?{etiqueta:V.accion.etiqueta||Ie("acciones.deshacer"),onAccion:V.accion.onAccion,cerrarAlActivar:V.accion.cerrarAlActivar!==!1}:null,pe=V.duracion===void 0?Z?L1:T1:V.duracion,ie=g1();return o(ee=>{const Te=[...ee,{id:ie,mensaje:Y,detalle:V.detalle||"",tipo:te,accion:Z,duracion:pe}],le=Te.length-v1;return le>0?Te.slice(le):Te}),L(ie,pe),ie},[L]),f=x.useCallback(()=>{if(d.current)return;d.current=!0;const D=Date.now();for(const V of c.current.values())V.timeoutId&&(clearTimeout(V.timeoutId),V.restanteMs=Math.max(0,V.restanteMs-(D-V.iniciadoEn)),V.timeoutId=null)},[]),C=x.useCallback(()=>{if(!d.current)return;d.current=!1;const D=Date.now();for(const[V,Y]of c.current)Y.timeoutId||(Y.iniciadoEn=D,Y.timeoutId=setTimeout(()=>p(V),Math.max(0,Y.restanteMs)))},[p]),y=x.useCallback(D=>{const V=i.find(Y=>Y.id===D);V!=null&&V.accion&&(V.accion.onAccion(),V.accion.cerrarAlActivar&&p(D))},[i,p]),g=x.useCallback((D,V)=>T({...V,mensaje:D,tipo:"exito"}),[T]),N=x.useCallback((D,V)=>T({...V,mensaje:D,tipo:"error"}),[T]),w=x.useCallback((D,V)=>T({...V,mensaje:D,tipo:"aviso"}),[T]),j=x.useCallback((D,V,Y)=>T({...Y,mensaje:D,tipo:(Y==null?void 0:Y.tipo)||"info",accion:{etiqueta:Ie("acciones.deshacer"),onAccion:V}}),[T]);x.useEffect(()=>{const D=new Set(i.map(V=>V.id));for(const[V,Y]of c.current)D.has(V)||(Y.timeoutId&&clearTimeout(Y.timeoutId),c.current.delete(V))},[i]),x.useEffect(()=>{const D=c.current;return()=>{for(const V of D.values())V.timeoutId&&clearTimeout(V.timeoutId);D.clear()}},[]);const Q=x.useMemo(()=>({toasts:i,mostrar:T,cerrar:p,pausar:f,reanudar:C,activarAccion:y,exito:g,error:N,aviso:w,conDeshacer:j}),[i,T,p,f,C,y,g,N,w,j]);return u.jsx(pm.Provider,{value:Q,children:r})}function fm(){const r=x.useContext(pm);if(!r)throw new Error("useToast() requiere que el árbol esté envuelto en <ToastProvider>.");return r}const y1=new Date(2026,4,19);function M1(r,i={}){const{actividadesPlan:o=[],reposiciones:c=[],hoy:d=y1,flags:p={}}=i,{alertaInactivoConActividad:L=!0,alertaIncapacitadoConActividad:T=!0,alertaAcumulativaSinModalidad:f=!0,alertaReposicionPendiente:C=!0,horasJornada:y=8}=p,g=[],N=E1(d);if(r.forEach(w=>{if(w.disponibilidad){const j=ST(w.vencimiento,d);j!==null&&j<0?g.push({funcionario:w.nombre,t:"danger",icon:"🚨",msg:`Disponibilidad vencida — ${w.nombre}`,sub:`${w.contrato} · venció ${ot(w.vencimiento)} (hace ${Math.abs(j)} día${Math.abs(j)!==1?"s":""}). Requiere revisión administrativa.`}):j!==null&&j===0?g.push({funcionario:w.nombre,t:"danger",icon:"🚨",msg:`Disponibilidad vence HOY — ${w.nombre}`,sub:`${w.contrato} · vencimiento ${ot(w.vencimiento)}. Coordinar renovación o suspensión administrativa.`}):j!==null&&j>0&&j<=60&&g.push({funcionario:w.nombre,t:"warn",icon:"⚠️",msg:`Disponibilidad por vencer — ${w.nombre}`,sub:`${w.contrato} · vence ${ot(w.vencimiento)} (en ${j} día${j!==1?"s":""}). Requiere revisión administrativa.`})}if(w.jornada==="Acumulativa"&&!w.resolucion&&!w.ong&&g.push({funcionario:w.nombre,t:"warn",icon:"📄",msg:`Sin resolución acumulativa — ${w.nombre}`,sub:"Dato pendiente: no automatizar efectos hasta confirmar respaldo interno."}),f&&w.jornada==="Acumulativa"&&!w.modalidad&&g.push({funcionario:w.nombre,t:"warn",icon:"📄",msg:`Acumulativa sin modalidad definida — ${w.nombre}`,sub:"Definir modalidad (10x5, 12x6, 14x7, 16x8, 20x10) para calcular roles correctamente."}),w.estado==="Incapacitado"&&w.disponibilidad&&g.push({funcionario:w.nombre,t:"danger",icon:"🩺",msg:`Revisar disponibilidad — ${w.nombre}`,sub:"Funcionario incapacitado con disponibilidad activa. Verificar criterio RH."}),T&&w.estado==="Incapacitado"){const j=jd(o,w.nombre,N);j.length&&g.push({funcionario:w.nombre,t:"danger",icon:"🩺",msg:`Incapacitado con actividad planificada — ${w.nombre}`,sub:`${j.length} actividad${j.length!==1?"es":""} a partir de ${ot(N)}. Coordinar reasignación.`})}if(L&&w.estado==="Inactivo"){const j=jd(o,w.nombre,N);j.length&&g.push({funcionario:w.nombre,t:"warn",icon:"⚠️",msg:`Inactivo con actividad planificada — ${w.nombre}`,sub:`${j.length} actividad${j.length!==1?"es":""} a partir de ${ot(N)}. Verificar si debe reactivarse o reasignarse.`})}}),C&&c.length)for(const w of fL(c,y))w.pendientes!==0&&g.push({funcionario:w.funcionario,t:"warn",icon:"⟳",msg:`Tiempo por reponer — ${w.funcionario}`,sub:`${w.pendientes} registro${w.pendientes!==1?"s":""} de trabajo fuera de rol sin reponer · saldo a favor ${sL(w.saldoHoras,y)}. Coordinar la reposición del tiempo.`});return g.length?g:[{t:"ok",icon:"✅",msg:"Sin alertas críticas",sub:"No se observan vencimientos o bloqueos críticos en los datos visibles."}]}function rg(r=[],i){return i?r.filter(o=>(o==null?void 0:o.funcionario)===i):[]}function jd(r,i,o){return(r||[]).filter(c=>!c||!c.inicio||(c.fin||c.inicio)<o?!1:(c.funcionarios||[]).includes(i))}function E1(r){if(typeof r=="string")return r;const i=o=>String(o).padStart(2,"0");return`${r.getFullYear()}-${i(r.getMonth()+1)}-${i(r.getDate())}`}function jn(){return x.useCallback((r,i)=>Ie(r,i),[])}const gr="1.43.0",Bi="2026-09-13T02:05:57.453Z",Yi="6686f1b",C1="/BTMM_JORNADAS/version.json";function Tm(r=Bi){try{const i=new Date(r),o=c=>String(c).padStart(2,"0");return`${o(i.getDate())}/${o(i.getMonth()+1)}/${i.getFullYear()} ${o(i.getHours())}:${o(i.getMinutes())}`}catch{return r}}/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Lm=(...r)=>r.filter((i,o,c)=>!!i&&i.trim()!==""&&c.indexOf(i)===o).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var S1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=x.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:c,className:d="",children:p,iconNode:L,...T},f)=>x.createElement("svg",{ref:f,...S1,width:i,height:i,stroke:r,strokeWidth:c?Number(o)*24/Number(i):o,className:Lm("lucide",d),...T},[...L.map(([C,y])=>x.createElement(C,y)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=(r,i)=>{const o=x.forwardRef(({className:c,...d},p)=>x.createElement(x1,{ref:p,iconNode:i,className:Lm(`lucide-${N1(r)}`,c),...d}));return o.displayName=`${r}`,o};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=de("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=de("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=de("CalendarClock",[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M17.5 17.5 16 16.3V14",key:"akvzfd"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=de("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=de("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=de("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=de("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=de("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=de("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=de("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=de("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=de("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=de("Contrast",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z",key:"j4l70d"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=de("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=de("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=de("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=de("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=de("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=de("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=de("LockOpen",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=de("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=de("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=de("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=de("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=de("OctagonAlert",[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=de("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=de("Pin",[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=de("PlugZap",[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m18 3-4 4h6l-4 4",key:"16psg9"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=de("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=de("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=de("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=de("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=de("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=de("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=de("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=de("Stethoscope",[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=de("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=de("TrafficCone",[["path",{d:"M9.3 6.2a4.55 4.55 0 0 0 5.4 0",key:"flyxqv"}],["path",{d:"M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3",key:"1nlxxg"}],["path",{d:"M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z",key:"vz7x1l"}],["path",{d:"m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8",key:"1xfzlw"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=de("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=de("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=de("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=de("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=de("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=de("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=de("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),J1={"🏠":Am,"👥":Ym,"📅":Pm,"📊":ym,"🗓️":gm,"📋":xm,"💵":vm,"🛡️":zm,"🔔":hm,"✕":Um,"⚠️":ol,"⚠":ol,"🚨":Rm,"✅":Sm,"🩺":Qm,"📄":bm,"📍":Dm,"🔥":Vm,"🌲":Bm,"⚖️":Fm,"⟳":Om,"☰":km,"▲":Nm,"▼":Mm,"←":Em,"→":Cm,"+":Im,"🔒":jm,"🔓":wm,"📴":Gm,"📡":_m,"🚦":Jm},B1={home:Am,users:Ym,calendar:Pm,calendarDays:gm,calendarClock:b1,clipboard:xm,chart:ym,banknote:vm,shield:zm,shieldAlert:I1,bell:hm,x:Um,alert:ol,danger:Rm,check:Sm,info:j1,stethoscope:Qm,file:bm,pin:Dm,flame:Vm,trees:Bm,scale:Fm,refresh:Om,menu:km,chevronUp:Nm,chevronDown:Mm,chevronLeft:Em,chevronRight:Cm,plus:Im,pencil:k1,trash:z1,lock:jm,unlock:wm,eye:w1,eyeOff:A1,sun:F1,moon:D1,contrast:V1,traffic:Jm,wifi:Q1,wifiOff:Gm,phone:O1,search:_1,pinMap:R1,plugZap:_m};function Ze({name:r,size:i=18,label:o,className:c="",strokeWidth:d=2}){const p=typeof r=="string"?J1[r]??B1[r]:null;if(!p)return u.jsx("span",{"aria-hidden":o?void 0:!0,"aria-label":o,className:c,children:r});const L=o?{role:"img","aria-label":o}:{"aria-hidden":!0,focusable:"false"};return u.jsx(p,{width:i,height:i,strokeWidth:d,className:c,...L})}function Y1({view:r,setView:i,nAlertas:o}){const c=jn(),d=[[c("sidebar.grupoPrincipal"),[["dia",c("view.dia"),"calendar"],["roles",c("view.roles"),"chart"],["planificacion",c("view.planificacion"),"calendarDays"],["funcionarios",c("view.funcionarios"),"users"]]],[c("sidebar.grupoJornadas"),[["planFuncionario",c("view.planFuncionario"),"clipboard"],["adelantos",c("view.adelantos"),"banknote"],["reposicion",c("view.reposicion"),"refresh"],["disponibilidad",c("view.disponibilidad"),"shield"]]],[c("sidebar.grupoControl"),[["alertas",c("view.alertas"),"bell"],["datos",c("view.datos"),"shieldAlert"],["configuracion",c("view.configuracion"),"traffic"]]]];return u.jsxs("aside",{className:"pnlq-no-print hidden w-60 shrink-0 flex-col bg-emerald-900 text-white lg:flex",children:[u.jsxs("div",{className:"border-b border-white/10 p-6",children:[u.jsxs("div",{className:"mb-3 flex items-center gap-3",children:[u.jsx("img",{src:"/BTMM_JORNADAS/acc-logo.svg",alt:"ACC",className:"h-12 w-12 shrink-0 rounded-xl bg-white p-1"}),u.jsxs("div",{children:[u.jsx("div",{className:"text-xs font-semibold uppercase tracking-[0.22em] text-white/60",children:c("app.sinacCR")}),u.jsx("div",{className:"mt-0.5 text-xs font-semibold text-white/70",children:c("app.accNombre")})]})]}),u.jsxs("div",{className:"text-base font-semibold leading-snug",children:[c("app.bloqueLinea1"),u.jsx("br",{}),c("app.bloqueLinea2")]}),u.jsx("div",{className:"mt-1.5 text-xs text-white/65",children:c("app.bloqueSub")})]}),u.jsx("nav",{className:"flex-1 p-3",children:d.map(([p,L])=>u.jsxs("div",{children:[u.jsx("div",{className:"px-3 pb-2 pt-4 text-xs font-semibold uppercase tracking-wider text-white/70",children:p}),L.map(([T,f,C])=>u.jsxs("button",{onClick:()=>i(T),"aria-current":r===T?"page":void 0,className:`mb-1 flex min-h-touch w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${r===T?"bg-white/20 text-white ring-1 ring-white/20":"text-white/80 hover:bg-white/10"}`,children:[u.jsx(Ze,{name:C,size:18}),f,T==="alertas"&&o>0&&u.jsx("span",{"aria-label":c("bottomNav.alertasAria",{n:o}),className:"ml-auto rounded-full bg-red-700 px-2 py-0.5 text-xs text-white",children:o})]},T))]},p))}),u.jsxs("div",{className:"border-t border-white/10 p-4 text-xs",children:[u.jsx("strong",{className:"font-semibold",children:c("app.perfilNombre")}),u.jsx("div",{className:"text-white/60",children:c("app.perfilCargo")}),u.jsxs("div",{className:"mt-3 border-t border-white/10 pt-3 text-[10px] font-mono leading-tight text-white/65",title:`Versión ${gr} · build ${Bi} · commit ${Yi}`,children:[u.jsxs("div",{children:["v",gr," ",u.jsx("span",{className:"text-white/60",children:"·"})," ",Yi]}),u.jsxs("div",{className:"text-white/60",children:["build ",Tm(Bi)]})]})]})]})}const Km=["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SETIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"],ig=["D","L","K","M","J","V","S"],G1=["DOMINGO","LUNES","MARTES","MIÉRCOLES","JUEVES","VIERNES","SÁBADO"];function $m({prominent:r=!1}){const{lastSavedAt:i,pendingChanges:o,durableSaveFailed:c}=qt(),d=jn(),[p,L]=x.useState(typeof navigator<"u"?navigator.onLine:!0);x.useEffect(()=>{const g=()=>L(!0),N=()=>L(!1);return window.addEventListener("online",g),window.addEventListener("offline",N),()=>{window.removeEventListener("online",g),window.removeEventListener("offline",N)}},[]);const T=i?new Date(i).toLocaleTimeString("es-CR",{hour:"2-digit",minute:"2-digit"}):null,f=c&&o===0,C=o>0?d("sync.guardando"):f?d("sync.guardadoParcial",{hora:T??""}):T?d("sync.guardado",{hora:T}):d("sync.sinRespaldo"),y=`${d(p?"sync.enLinea":"sync.sinConexion")} · ${C}`;return r?u.jsxs("span",{role:"status","aria-label":y,title:y,className:`inline-flex min-h-touch w-full items-center justify-center gap-2 rounded-xl border px-3 py-2 text-sm font-semibold ${f||!p?"border-warning/40 bg-warning-soft text-warning-fg":"border-line bg-surface text-ink-muted"}`,children:[u.jsx("span",{"aria-hidden":"true",className:`h-2.5 w-2.5 shrink-0 rounded-full ${o>0?"animate-pulse bg-info":f||!p?"bg-warning":"bg-ok"}`}),u.jsx("span",{className:"truncate",children:C}),!p&&u.jsx("span",{className:"shrink-0 text-xs font-bold uppercase tracking-wide",children:d("sync.sinConexion")})]}):u.jsxs("span",{role:"status","aria-label":y,title:y,className:`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium sm:text-sm ${f?"border-warning/40 bg-warning-soft text-warning-fg":p?"border-line bg-surface text-ink-muted":"border-warning/40 bg-warning-soft text-warning-fg"}`,children:[u.jsx("span",{"aria-hidden":"true",className:`h-2 w-2 shrink-0 rounded-full ${o>0?"animate-pulse bg-info":f?"bg-warning":p?"bg-ok":"bg-warning"}`}),u.jsx("span",{className:"hidden sm:inline",children:C}),T&&u.jsx("span",{className:"sm:hidden",children:T})]})}var gl=qd();const Lr=[];let Dd=!1,fr=0,kd="";function U1(r){if(r.key!=="Escape")return;const i=Lr[Lr.length-1];i&&(typeof r.stopImmediatePropagation=="function"&&r.stopImmediatePropagation(),r.stopPropagation(),i())}function K1(){Dd||typeof document>"u"||(document.addEventListener("keydown",U1,!0),Dd=!0)}function qm(r){return K1(),Lr.push(r),()=>{const i=Lr.lastIndexOf(r);i>=0&&Lr.splice(i,1)}}function $1(r){x.useEffect(()=>{if(r)return qm(()=>r())},[r])}const q1=["a[href]","area[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(", ");function Rd(r){return r?Array.from(r.querySelectorAll(q1)).filter(i=>!i.hasAttribute("aria-hidden")&&i.offsetParent!==null):[]}function Hm({open:r=!0,onClose:i,initialFocusRef:o}={}){const c=x.useRef(null),d=x.useRef(null),p=x.useId(),L=x.useId();return x.useEffect(()=>{if(!r)return;d.current=typeof document<"u"?document.activeElement:null;const T=c.current;if(!T)return;typeof document<"u"&&(fr===0&&(kd=document.body.style.overflow,document.body.style.overflow="hidden"),fr+=1);const f=()=>{const N=(o==null?void 0:o.current)??Rd(T)[0]??T;try{N.focus({preventScroll:!0})}catch{}},C=window.setTimeout(f,0),y=N=>{if(N.key!=="Tab")return;const w=Rd(T);if(w.length===0){N.preventDefault();return}const j=w[0],Q=w[w.length-1],D=document.activeElement;N.shiftKey?(D===j||!T.contains(D))&&(N.preventDefault(),Q.focus()):(D===Q||!T.contains(D))&&(N.preventDefault(),j.focus())};T.addEventListener("keydown",y);const g=i?qm(()=>i()):void 0;return()=>{window.clearTimeout(C),T.removeEventListener("keydown",y),g==null||g(),typeof document<"u"&&(fr=Math.max(0,fr-1),fr===0&&(document.body.style.overflow=kd));const N=d.current;if(N&&typeof N.focus=="function")try{N.focus({preventScroll:!0})}catch{}}},[r,i,o]),{ref:c,titleId:p,descId:L}}const _d={sm:"max-w-sm",md:"max-w-xl",lg:"max-w-2xl",xl:"max-w-3xl","2xl":"max-w-4xl"};function Wm({open:r=!0,onClose:i,title:o,description:c,children:d,actions:p,size:L="lg",closeOnBackdrop:T=!0,contentClassName:f=""}){const{ref:C,titleId:y,descId:g}=Hm({open:r,onClose:i});if(!r)return null;const N=_d[L]||_d.lg,w=u.jsx("div",{className:"pnlq-modal-backdrop fixed inset-0 z-50 flex items-end justify-center bg-black/55 p-0 backdrop-blur-sm md:items-center md:p-4",onClick:j=>{T&&j.target===j.currentTarget&&(i==null||i())},children:u.jsxs("div",{ref:C,role:"dialog","aria-modal":"true","aria-labelledby":o?y:void 0,"aria-describedby":c?g:void 0,tabIndex:-1,className:`pnlq-modal-panel flex max-h-[94vh] max-h-[94dvh] w-full ${N} flex-col overflow-hidden rounded-t-3xl bg-surface text-ink shadow-2xl outline-none md:rounded-3xl`,style:{maxHeight:"calc(var(--visual-viewport-height, 100dvh) - 1rem)"},children:[u.jsx("div",{"aria-hidden":"true",className:"mx-auto mt-2 h-1.5 w-10 shrink-0 rounded-full bg-line md:hidden"}),(o||c)&&u.jsxs("header",{className:"pnlq-modal-header flex items-start justify-between gap-3 border-b border-line p-5",children:[u.jsxs("div",{className:"min-w-0",children:[o&&u.jsx("h2",{id:y,className:"text-lg font-semibold text-ink",children:o}),c&&u.jsx("p",{id:g,className:"mt-1 text-sm text-ink-muted",children:c})]}),u.jsx("button",{type:"button",onClick:i,"aria-label":Ie("acciones.cerrar"),className:"-mr-1 inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl text-ink-muted hover:bg-surface-alt hover:text-ink",children:u.jsx(Ze,{name:"x",size:20,label:Ie("acciones.cerrar")})})]}),u.jsx("div",{className:`pnlq-modal-body flex-1 overflow-y-auto p-5 ${f}`,children:d}),p&&u.jsx("footer",{className:"pnlq-modal-footer flex flex-wrap justify-between gap-2 border-t border-line bg-surface-alt p-4 pb-[max(1rem,env(safe-area-inset-bottom))]",children:p})]})});return typeof document<"u"?gl.createPortal(w,document.body):w}const Ks=390,$s=844,Zm="mobile-preview";function H1(r=window.location){return new URLSearchParams(r.search).get(Zm)==="1"}function W1(r=window.location){const i=new URL(r.href);return i.searchParams.set(Zm,"1"),i.toString()}const Id=["planificacion","planFuncionario"];function Z1({view:r,setView:i,month:o,setMonth:c,year:d,setYear:p,compact:L,setCompact:T}){const f=jn(),[C,y]=x.useState(!1),[g,N]=x.useState(!1),w=H1(),j=new Date().getFullYear(),Q=Array.from({length:11},(Z,pe)=>j-5+pe),D=Z=>{let pe=o+Z,ie=d;pe<0&&(pe=11,ie-=1),pe>11&&(pe=0,ie+=1),c(pe),p(ie)},V=()=>{const Z=new Date;c(Z.getMonth()),p(Z.getFullYear())},Y=Id.includes(r),te=Y||r==="roles";return u.jsxs("header",{className:`pnlq-topbar pnlq-no-print sticky top-0 border-line bg-surface/95 shadow-sm backdrop-blur lg:block lg:border-b lg:px-6 lg:py-3 ${Y?"block border-b px-4 py-2":te?"hidden border-b md:block md:px-4 md:py-2":"hidden"} ${C?"z-50":"z-30"}`,children:[u.jsxs("div",{className:"pnlq-topbar-inner flex flex-col gap-2 xl:flex-row xl:items-center xl:justify-between",children:[u.jsx("div",{className:"flex items-center justify-between gap-2",children:u.jsx("div",{className:"min-w-0",children:u.jsx("h1",{className:"hidden text-xl font-semibold tracking-tight text-ink lg:block",children:f("app.titulo")})})}),u.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[Id.includes(r)&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{role:"group","aria-label":f("topbar.periodo"),className:"inline-flex items-stretch overflow-hidden rounded-xl border border-line bg-surface shadow-sm",children:[u.jsx("button",{onClick:()=>D(-1),"aria-label":f("topbar.mesAnterior"),className:"inline-flex min-h-touch min-w-touch items-center justify-center px-2 text-ink-muted hover:bg-surface-alt",children:u.jsx(Ze,{name:"chevronLeft",size:16})}),u.jsx("select",{"aria-label":f("topbar.mes"),className:"min-h-touch border-x border-line bg-surface px-1.5 text-sm font-medium text-ink outline-none sm:px-2 dark:[color-scheme:dark]",value:o,onChange:Z=>c(Number(Z.target.value)),children:Km.map((Z,pe)=>u.jsx("option",{value:pe,children:Z},Z))}),u.jsx("select",{"aria-label":f("topbar.anio"),className:"min-h-touch bg-surface px-1.5 text-sm font-medium text-ink outline-none sm:px-2 dark:[color-scheme:dark]",value:d,onChange:Z=>p(Number(Z.target.value)),children:Q.map(Z=>u.jsx("option",{children:Z},Z))}),u.jsx("button",{onClick:()=>D(1),"aria-label":f("topbar.mesSiguiente"),className:"inline-flex min-h-touch min-w-touch items-center justify-center border-l border-line px-2 text-ink-muted hover:bg-surface-alt",children:u.jsx(Ze,{name:"chevronRight",size:16})})]}),u.jsx("button",{type:"button",onClick:V,className:"inline-flex min-h-touch items-center rounded-xl border border-line bg-surface px-3 text-sm font-semibold text-brand hover:bg-brand-soft",children:f("topbar.hoy")})]}),r==="roles"&&u.jsx("button",{onClick:()=>T(!L),className:"hidden min-h-touch items-center rounded-xl border border-line bg-surface px-3 py-2 text-sm font-medium text-ink hover:bg-surface-alt md:inline-flex","aria-pressed":L,children:f(L?"topbar.vistaAmplia":"topbar.vistaCompacta")}),!w&&u.jsxs("button",{type:"button",onClick:()=>y(!0),className:"hidden min-h-touch items-center gap-2 rounded-xl border border-brand bg-brand-soft px-3 text-sm font-semibold text-ink hover:opacity-90 lg:inline-flex","aria-label":f("topbar.previewMobile"),children:[u.jsx(Ze,{name:"phone",size:18}),f("topbar.previewMobileCorto"),u.jsx("span",{className:"rounded-md bg-surface px-1.5 py-0.5 text-xs text-ink-muted",children:"Temporal"})]}),u.jsx("span",{className:"hidden lg:inline-flex",children:u.jsx($m,{})})]})]}),u.jsxs(Wm,{open:C,onClose:()=>y(!1),title:f("topbar.previewTitle"),description:f("topbar.previewDesc",{ancho:g?$s:Ks,alto:g?Ks:$s}),size:"2xl",contentClassName:"bg-slate-200 p-3",children:[u.jsxs("div",{className:"mb-3 flex justify-center",role:"group","aria-label":f("topbar.previewOrientation"),children:[u.jsx("button",{type:"button",onClick:()=>N(!1),"aria-pressed":!g,className:`min-h-touch rounded-l-xl border px-4 text-sm font-semibold ${g?"border-line bg-surface text-ink":"border-brand bg-brand text-brand-fg"}`,children:f("topbar.previewVertical")}),u.jsx("button",{type:"button",onClick:()=>N(!0),"aria-pressed":g,className:`min-h-touch rounded-r-xl border border-l-0 px-4 text-sm font-semibold ${g?"border-brand bg-brand text-brand-fg":"border-line bg-surface text-ink"}`,children:f("topbar.previewHorizontal")})]}),u.jsx("div",{className:"mx-auto max-w-full overflow-hidden rounded-[2rem] border-[6px] border-slate-900 bg-white shadow-2xl transition-[width]",style:{width:`${(g?$s:Ks)+12}px`},children:u.jsx("iframe",{title:f("topbar.previewFrameTitle"),src:W1(),className:`block w-full bg-white ${g?"h-[min(390px,calc(100dvh-12rem))] min-h-[280px]":"h-[min(844px,calc(100dvh-12rem))] min-h-[480px]"}`})})]})]})}function X1(r){return r>99?"99+":String(r)}function ev({view:r,setView:i,nAlertas:o,hidden:c=!1}){const d=jn(),[p,L]=x.useState(!1),T=[["dia",d("bottomNav.dia"),"calendar"],["roles",d("bottomNav.roles"),"chart"],["alertas",d("bottomNav.alertas"),"bell"],["funcionarios",d("bottomNav.personal"),"users"]],f=[["planificacion",d("bottomNav.plan"),"calendarDays"],["adelantos",d("bottomNav.viaticos"),"banknote"],["reposicion",d("bottomNav.reposicion"),"refresh"],["disponibilidad",d("bottomNav.disponib"),"shield"],["planFuncionario",d("bottomNav.planFunc"),"clipboard"],["datos",d("bottomNav.datos"),"shieldAlert"],["configuracion",d("bottomNav.config"),"traffic"]],C=f.some(([g])=>g===r),y=g=>{i(g),L(!1)};return c?null:u.jsxs(u.Fragment,{children:[u.jsx("nav",{className:"pnlq-bottom-nav pnlq-no-print fixed bottom-0 left-0 right-0 z-40 border-t border-line bg-surface pb-[env(safe-area-inset-bottom)] lg:hidden","aria-label":d("bottomNav.navAria"),children:u.jsxs("div",{className:"pnlq-bottom-nav-grid grid grid-cols-5",children:[T.map(([g,N,w])=>u.jsxs("button",{type:"button",onClick:()=>y(g),"aria-current":r===g?"page":void 0,className:`pnlq-bottom-nav-item relative flex min-h-touch flex-col items-center justify-center gap-0.5 py-2 text-sm font-semibold ${r===g?"text-brand":"text-ink-muted"}`,children:[u.jsx(Ze,{name:w,size:24}),N,g==="alertas"&&o>0&&u.jsx("span",{className:"absolute right-[18%] top-1 min-w-5 rounded-full bg-critical px-1 text-center text-xs font-bold leading-5 text-ink-inverse","aria-label":d("bottomNav.alertasAria",{n:o}),children:X1(o)})]},g)),u.jsxs("button",{type:"button",onClick:()=>L(!0),"aria-expanded":p,"aria-current":C?"page":void 0,className:`pnlq-bottom-nav-item relative flex min-h-touch flex-col items-center justify-center gap-0.5 py-2 text-sm font-semibold ${p||C?"text-brand":"text-ink-muted"}`,children:[u.jsx(Ze,{name:"menu",size:24}),d("bottomNav.mas")]})]})}),u.jsx(Wm,{open:p,onClose:()=>L(!1),title:d("bottomNav.masTitulo"),description:d(C?`view.${r}`:"bottomNav.masSub"),size:"sm",contentClassName:"p-3 pb-[max(1rem,env(safe-area-inset-bottom))]",children:u.jsx("div",{className:"grid grid-cols-2 gap-2",children:f.map(([g,N,w])=>u.jsxs("button",{type:"button",onClick:()=>y(g),"aria-current":r===g?"page":void 0,className:`relative flex min-h-[56px] items-center gap-3 rounded-xl px-3 text-left text-sm font-semibold ${r===g?"bg-brand text-brand-fg":"border border-line bg-surface-alt text-ink"}`,children:[u.jsx(Ze,{name:w,size:22}),u.jsx("span",{children:N})]},g))})})]})}const nv=new Set(["dia","roles","planificacion","funcionarios","alertas","adelantos","reposicion","disponibilidad","planFuncionario","datos","configuracion","funcionario"]),Xm=new Set(["roles","planificacion","planFuncionario"]),ep=new Set(["funcionario"]);function Pl(r){return r==="dashboard"?"dia":nv.has(r)?r:"dia"}function tv(r,i){const o=Number(r),c=Number(i);return Number.isInteger(o)&&o>=2e3&&o<=2200&&Number.isInteger(c)&&c>=1&&c<=12?{year:o,month:c-1}:null}function av(r){if(!r)return"";try{return decodeURIComponent(r).trim()}catch{return""}}function rv(r){if(!r)return null;try{const i=new URLSearchParams(r),o={};for(const[c,d]of i.entries())d!==""&&(o[c]=d);return Object.keys(o).length?o:null}catch{return null}}function iv(r){if(!r)return"";const i=new URLSearchParams;for(const c of Object.keys(r).sort()){const d=r[c];d==null||d===""||i.set(c,String(d))}const o=i.toString();return o?`?${o}`:""}function ov(r=""){const[i,o]=String(r).split("?"),c=String(i).replace(/^#\/?/,""),[d,p,L]=c.split("/"),T=Pl(d||"dia"),f={view:T};if(T==="dia"&&/^\d{4}-\d{2}-\d{2}$/.test(p||"")&&(f.diaVista=p),Xm.has(T)&&Object.assign(f,tv(p,L)||{}),ep.has(T)){const y=av(p);y?f.funcionarioVista=y:f.view="funcionarios"}const C=rv(o);return C&&(f.filtros=C),f}function Od({view:r,year:i,month:o,diaVista:c,funcionarioVista:d,filtros:p}){const L=Pl(r),T=iv(p);if(L==="dia")return`#/dia/${c}${T}`;if(Xm.has(L))return`#/${L}/${i}/${qn(o+1)}${T}`;if(ep.has(L)){const f=String(d||"").trim();return f?`#/funcionario/${encodeURIComponent(f)}${T}`:"#/funcionarios"}return`#/${L}${T}`}function sv({view:r,setView:i,year:o,setYear:c,month:d,setMonth:p,diaVista:L,setDiaVista:T,funcionarioVista:f,setFuncionarioVista:C,filtrosVista:y,setFiltrosVista:g}){const N=y==null?void 0:y[r],w=x.useCallback(()=>{const j=ov(window.location.hash);i(j.view),j.year!=null&&c(j.year),j.month!=null&&p(j.month),j.diaVista&&T(j.diaVista),j.funcionarioVista&&(C==null||C(j.funcionarioVista)),j.filtros&&(g==null||g(j.view,j.filtros))},[T,g,C,p,i,c]);return x.useEffect(()=>(w(),window.addEventListener("popstate",w),window.addEventListener("hashchange",w),()=>{window.removeEventListener("popstate",w),window.removeEventListener("hashchange",w)}),[w]),x.useEffect(()=>{const j=Od({view:r,year:o,month:d,diaVista:L,funcionarioVista:f,filtros:N});window.location.hash!==j&&window.history.replaceState({},"",j)},[L,N,f,d,r,o]),x.useCallback((j,Q={})=>{const D=Pl(j),V=Q.funcionario!=null?Q.funcionario:f;Q.funcionario!=null&&(C==null||C(Q.funcionario));const Y=Od({view:D,year:o,month:d,diaVista:L,funcionarioVista:V,filtros:y==null?void 0:y[D]});window.location.hash!==Y&&window.history.pushState({},"",Y),i(D)},[L,y,f,d,C,i,o])}function lv(){const[r,i]=x.useState(!1);return x.useEffect(()=>{const o=window.visualViewport;if(!o)return;const c=()=>{const p=window.innerHeight-o.height>150;i(p),document.documentElement.style.setProperty("--visual-viewport-height",`${o.height}px`)};return c(),o.addEventListener("resize",c),o.addEventListener("scroll",c),()=>{o.removeEventListener("resize",c),o.removeEventListener("scroll",c),document.documentElement.style.removeProperty("--visual-viewport-height")}},[]),r}class cv extends x.Component{constructor(o){super(o);ji(this,"handleReintentar",()=>{this.setState({hasError:!1,error:null})});ji(this,"handleRecargar",()=>{window.location.reload()});ji(this,"handleDescargarRespaldo",()=>{try{const o=nl();if(!o)return;const c=a1(o),d=new Blob([JSON.stringify(c,null,2)],{type:"application/json"}),p=URL.createObjectURL(d),L=document.createElement("a");L.href=p,L.download=`pnlq-respaldo-de-emergencia-${NT()}.json`,document.body.appendChild(L),L.click(),document.body.removeChild(L),URL.revokeObjectURL(p)}catch{}});this.state={hasError:!1,error:null}}static getDerivedStateFromError(o){return{hasError:!0,error:o}}componentDidCatch(o,c){console.error("Error de aplicación capturado por ErrorBoundary:",o,c==null?void 0:c.componentStack)}render(){var c;if(!this.state.hasError)return this.props.children;const o=(()=>{try{return!!nl()}catch{return!1}})();return u.jsx("div",{role:"alert",className:"flex min-h-screen items-center justify-center bg-slate-100 p-4 text-slate-950",children:u.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-red-300 bg-white p-6 shadow-lg",children:[u.jsx("p",{className:"text-lg font-bold text-red-900",children:"Ocurrió un error inesperado"}),u.jsx("p",{className:"mt-2 text-sm text-slate-700",children:"La aplicación encontró un problema y no puede continuar mostrando esta pantalla. Tus datos guardados en este dispositivo no se han borrado."}),u.jsxs("div",{className:"mt-5 flex flex-col gap-2",children:[u.jsx("button",{type:"button",onClick:this.handleReintentar,className:"min-h-touch rounded-xl bg-emerald-800 px-4 text-sm font-semibold text-white hover:bg-emerald-700",children:"Reintentar"}),u.jsx("button",{type:"button",onClick:this.handleRecargar,className:"min-h-touch rounded-xl border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-800 hover:bg-slate-50",children:"Recargar la aplicación"}),o&&u.jsx("button",{type:"button",onClick:this.handleDescargarRespaldo,className:"min-h-touch rounded-xl border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-800 hover:bg-slate-50",children:"Descargar mis datos por seguridad"})]}),((c=this.state.error)==null?void 0:c.message)&&u.jsxs("p",{className:"mt-4 break-words rounded-lg bg-slate-50 p-2 text-[11px] text-slate-500",children:["Detalle técnico: ",this.state.error.message]})]})})}}const Fd={exito:{icono:"check",texto:"text-ok",borde:"border-l-ok"},error:{icono:"danger",texto:"text-critical",borde:"border-l-critical"},aviso:{icono:"alert",texto:"text-warning",borde:"border-l-warning"},info:{icono:"info",texto:"text-info",borde:"border-l-info"}};function uv({item:r,onCerrar:i,onAccion:o}){const c=Fd[r.tipo]||Fd.info;return u.jsxs("div",{"data-testid":"toast","data-tipo":r.tipo,className:`pnlq-toast rounded-2xl border border-line border-l-4 ${c.borde} bg-surface p-3 shadow-lg`,children:[u.jsxs("div",{className:"flex items-start gap-2.5",children:[u.jsx("span",{className:`mt-0.5 shrink-0 ${c.texto}`,children:u.jsx(Ze,{name:c.icono,size:20})}),u.jsxs("div",{className:"min-w-0 flex-1",children:[u.jsx("p",{className:"break-words text-sm font-semibold text-ink",children:r.mensaje}),r.detalle&&u.jsx("p",{className:"mt-0.5 break-words text-xs text-ink-muted",children:r.detalle})]}),u.jsx("button",{type:"button",onClick:i,"aria-label":Ie("acciones.cerrar"),className:"-mr-1 -mt-1 inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl text-ink-muted hover:bg-surface-alt hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",children:u.jsx(Ze,{name:"x",size:18})})]}),r.accion&&u.jsx("div",{className:"mt-1 flex justify-end",children:u.jsx("button",{type:"button",onClick:o,className:"inline-flex min-h-touch items-center rounded-xl bg-brand px-4 text-sm font-bold text-brand-fg hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",children:r.accion.etiqueta})})]})}function dv(){const{toasts:r,cerrar:i,activarAccion:o,pausar:c,reanudar:d}=fm(),p=r.filter(C=>C.tipo==="error"),L=r.filter(C=>C.tipo!=="error"),T=C=>u.jsx(uv,{item:C,onCerrar:()=>i(C.id),onAccion:()=>o(C.id)},C.id),f=u.jsxs("div",{className:"pnlq-toast-viewport pnlq-no-print",onMouseEnter:c,onMouseLeave:d,onFocusCapture:c,onBlurCapture:d,children:[u.jsx("div",{role:"alert","aria-live":"assertive","aria-atomic":"false",className:"pnlq-toast-region",children:p.map(T)}),u.jsx("div",{role:"status","aria-live":"polite","aria-atomic":"false",className:"pnlq-toast-region",children:L.map(T)})]});return typeof document<"u"?gl.createPortal(f,document.body):f}const mv=String.raw`Pestaña 1


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
	SÁBADO
	

	

	

	

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
KV atención turismo
JV, JB sabana indio




PLE
GP mantenimiento




PVM
CC mantenimiento
	17
PNTMM
ASVO 2 pax
`,pv=String.raw`TCU 3 PAX
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
DT atención turismo




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
KV atención turismo
JB inspección con MS y ES




PLE
MS inspección con JB




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
JB capacitación VDA
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
FC sale días libres


PNLQ
3 voluntarios UCR
KV atención turismo
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
ME: Ingresa, atiende un asunto en la Zup Reunión Orosi
YE atencion turismo


PNLQ
3 voluntarios UCR
KV atención turismo
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
KV atención turismo
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
KV atención turismo
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
Yeison informes Voluntariado y valoración de daño ambiental 
Ye atención de turismo 


PNLQ
3 voluntarios UCR
KV y DT Taller turismo comunitario
LV atención turismo


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
`,fv=String.raw`KV atiende turismo
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
KV programar actividades de EA tomar en cuenta escuelas del humo de peji y el liceo de peji/atención de turismo
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
FC reunión con la dirección y administradores asunto reestructuración ACC 


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
JV reunión con CATIE en VM


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
ME capacitación en la ADI Esperanza
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
 
	25 mi
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
JV informe voluntarios UCR de semana santa en PNLQ/viático combustible/turismo
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






 
	14
PNTMM
YC pendientes/turismo
Es recoge 166 en taller 
FC sube a pnlq 




PNLQ
Pernocta Gabriela encargada de aguas de PZ
RTV patineta y zanate
DT y KV actualizan expediente de visado finca Montecristo/turismo
KV cita medica
JV semec PPC quetzales 
LV semec planes a cargo


PLE
RTV patineta y zanate 
MS baja lleva carota rtv coordina con FC 
YE entra mantenimiento toma de agua 
CC mantenimiento toma de agua 


	

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
`,Tv=String.raw`Covirena apoya PNTMM




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
JB cherpiritos/denuncia sanchez
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






`,Lv=String.raw` 
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
PNTMM
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
ME: pendientes , sitadas DEKRA cuadraciclos
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
ME Y KM: Reunion ADI Grano de Oro
KM


PNLQ
JV Taller de investigación en Monteverde




PLE










 
	14
PNTMM
Taller de investigación en Monteverde
Pasante frances Enzo
YC:Juicio contravencional paraiso/PP/SEMEC
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
ME:Ingresa a Rol


PNLQ
JV Taller de investigación en Monteverde
ES trabajo con voluntarios 




PLE


GP atención turismo en PNLQ






 
	16
PNTMM
FC Comite  Tecnico
Pasante frances Enzo
YC: Seguimiento actividades administrativas
KM:Mantenimiento ZUP


PNLQ
DA pernocta gira de sitada
JV  acompaña a la persona de DA a realizar inspección
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
ME actualiza monto viáticos/pendientes, continua inventario de PNLQ y baja a Orosi
KM:Mantenimiento ZUP 


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
KM Patrullaje pejivalle
YC Patrullaje en EPa y colonopejivalle/retiran materiales en EPa y colono
ME pendientes 
Enzo sale 
PNLQ
KV. Participación en Feria CIentífica
PS libre vacaciones
PG mantenimiento senderos con voluntarios/
DT turismo/encuestas/habl con YC sobre protocolos pendientes y sobre tema de herramienta flujo de visitantes 


`,vv=String.raw`

PLE
MS baja 1100 a taller para avaluo de choque, en caballo blanco/sube a YE a PNLQ


YE apoyo mantenimiento con PG 


 
	23
PNTMM
2 voluntarios UCR y 4 TEC
ES curso CI-IF
KM y YC citadas pendientes 
ME turismo/voluntarios 


PNLQ
todos conferencia de 10-12
Tarde 
PS y PG levantan información necesaria pra gira de viernes 
DT y KV planeamiento actividad del viernes 




PLE
MS y YE mantenimiento de toma luego conferencia de 10-12/tarde mantenimiento de equipo 










 
	24
PNTMM
2 voluntarios UCR y 4 TEC
ME:Charla EA Orosi
ES curso CI-IF
YC atiende grupo P&G Reunión con ASVO 


PNLQ
PS y JP inspección 
LV turismo PNLQ y traslado de compañeros coordinar con PS
KV Y DT:Charla EA Orosi




PLE
YE actividad EA con KV y DT/sale
GP apoyo turismo PNLQ y traslado de compañeros coordinar con PS
MS apoyo actividad manejo del fuego en Lornne Ross






	25
PNTMM
2 voluntarios UCR 1 TEC
Me pendientes 
FC 


PNLQ
Jpg patrullaje coordina con MS 
LV turismo 




PLE


MS patrullaje 
Gp patrullaje 




 
	26
PNTMM
FC gestiones varias
2 voluntarios UCR  1 TEC




PNLQ
MS Y PG:Patrullaje La Esperanza, Tapanti.RBCV
LV atiende visitación




PLE
MS Gp y PG: Patrullaje La Esperanza, Tapanti.RBCV






	27
PNTMM
2 voluntarios UCR  1 TEC
FC:Patrullaje gira Tsimari


PNLQ
JV : Patrullaje gira Tsimari




PLE
MS Patrullaje Tsimari






 
	28
PNTMM
2 voluntarios UCR 
Pasante frances Enzo
FC:Patrullaje gira Tsimari
Km SITADAS 
YC informes voluntariado


PNLQ
JV: Patrullaje gira Tsimari
LV y KV reunión QERK en San Gerardo de Dota, y luego van a reciclaje en PZ
DT lleva perros a t zaguastes
PS informes tecnicos/denuncia/turismo 
Voluntarios turismo/encuestas


PLE
MS Patrullaje Tsimari
GP mantenimiento equipo 








 
	29
PNTMM
2 voluntarios UCR 
Pasante frances Enzo
FC:Patrullaje gira Tsimari
KM PPC 
YC retira equipo de vida silvestre 


PNLQ
JV : Patrullaje gira Tsimari
KV: Actividad de EA en escuela de Machogaff
LV y ps inspecciones e informes pendientes 
PLE
MS Patrullaje Tsimari
CC chequeo médico 
GP atención turismo en pnlq 






 
	30
PNTMM
2 voluntarios UCR 
Pasante frances Enzo
FC:Patrullaje gira Tsimari
YC contestar a Redy 
KM mantenimiento 


PNLQ
JV : Patrullaje gira Tsimari
Dt mantenimiento senderos con voluntarios/pendientes con Y. 
LV inspecciones 
KV mantenimiento senderos/ informes 
PS inspecciones con LV 






PLE
MS Patrullaje Tsimari
GP mantenimiento equipo en pnlq 
CC atiende turismo pnlq 






 
	31
PNTMM
2 voluntarios UCR 
Pasante frances Enzo
FC Evaluacion de desempeño 10am
ES apoya PNLQ




PNLQ
KV*Reunión del CBLS
ES apoya PNLQ




PLE
MS cambio de aceite informes
CC apoyo al PNLQ
YE y GP Mantenimiento






	

	



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
ES apoya PNLQ




PNLQ
Feria en Villa Mills
ES apoya PNLQ




PLE
Feria en Villa Mills




PVM
Feria en Villa Mills
 
	2
PNTMM
2 voluntarios UCR 




PNLQ
ES apoya PNLQ y baja a Tapanti




PLE










 
	3
PNTMM
2 voluntarios UCR VB limpieza del BTMM




PNLQ






PLE










 
	4
PNTMM
VB limpieza del BTMM
YC tema brigada y otros 
KM actividades PPC de septiembre incluye actividades de Manejo del fuego 




PNLQ
Reunion Comite turismo con GJ
YE apoya turismo
DT y JV comite turismo coordinar con Gustavo 
PS denuncia e informes pendientes/coordina inspecciones del miércoles






PLE
YE mantenimiento en puesto
CC mantenimiento en puesto 


	5
PNTMM
Reunión CME
KM mantenimiento 
YC varios 




PNLQ
KV- Reunión CME
DT temas pendientes de YC 
YE apoyo con turismo y apoyo a Diana 
PS inspecciones con ES y CC 
ES inspecciones con Ps y CC 


PLE


YE apoyo PNLQ sube con DT en patineta 


CC inspección con Pablo y Errol 
 
	6
PNTMM
km reunión operativo especial 
YC documentación para curso CBF y otros


PNLQ
DT tema turismo y otris pendientes 
KV EA liceo de cañón
PS informes pendientes
CC apoyo pnlq turismo
ES baja a muni guarco a hacer consulta/elabora lista de trabajos para voluntarios y pasa a YC


PLE
CC apoyo pnlq turismo
YE acompaña a ES/ayuda a errol con lista  




 
	7
PNTMM

KM pendientes/ver equippo del voluntariado pra sabado
YC denuncia/FAO y otros 


PNLQ
DT lleva a errol a recoger VIR/baja atender voluntariado del sábado/recoge corcel en taller
ES recoge VIR/informe voluntariado pendiente/viático pendiente/lista de trabajos para voluntarios/salle 
LV entra baja apoyar PNTMM
PS continua informes y denuncia/prioriza informe temas chespis
KV turismo/informes de actividades 


PLE
YE apoya pnlq sube a pernoctar fin de semana
CC mantenimiento en puesto pernocta hasta sábado 






 
	8
PNTMM
DT voluntariado  40 pax
LV turismo 
Apoyo Diego Q


PNLQ


YE turismo 


PLE


GP apoyo a PNLQ hasta cierre 


 
	9
PNTMM
LV turismo recorridos
Apoya Nina y Diego


PNLQ
YE turismo 




PLE
GP apoya turismo a yolanda hasta cierre 
	10
PNTMM
JV, DT, YC reunion de sanes con Gustavo 
KM recoge suministros de limpieza con Dayanna, rótulos con Steven, toño con ana cecilia, tarjeta de ruedo de vir 


PNLQ
KV turismo
PS informes
JV reunión con YC y G
Dt reunión con YC en tapanti


PLE
GP revisión de toma y otros de mantenimiento 
	11
PNTMM

FC reunion Bandera Azul 1.30pm Marriot Belen Heredia
YC capacitación con la FAO en IICA 




PNLQ
DT, LV, JV y KV  MIF en escuelas Trinidad
PS pendientes


PLE
GP apoyo pnlq 
	12
PNTMM
YC capacitación con la FAO en IICA 
Km turismo/simulacro ver documento 


PNLQ
LV  capacitación manipulación de serpientes
DT turismo/herramienta de flujo/simulacro ver documento
KV turismo apoyo herramienta de flujo a DT/simulacro ver documento 
JV capacitación manipulación de serpientes 
PS capacitación manipulación de serpientes 
PLE
GP atiende turismo en PNLQ 8:00 pm/simulacro ven documento  


	13
PNTMM
Km turismo
YC capacitación con la FAO en IICA 


PNLQ
DT y KV, JV MIF en escuela
LV turismo 
PS pendientes 


PLE
GP mantenimiento en puesto








 
	14
PNTMM
Comite Tecnico
KM turismo
DT, JV y KV MIF en escuelas
YC CCT/reunión con PS
PNLQ
PS y YC resolución la georgina 
DT, JV y KV, MIF en escuelas
JV apoyo a PNTMM
LV lleva 347-16 a taller con GP
PS turismo 
PLE
GP baja con LV al taller llevan 1100 y 347-16






 
	15
PNTMM
JV turismo 




PNLQ
LV turismo


PLE


CC apoyo pnlq 
GP apoyo pnlq






 
	16
PNTMM
JV turismo 




PNLQ
LV turismo/sale 




PLE


CC apoyo pnlq 
GP apoyo pnlq pernocta pnlq 




 
	17
PNTMM
KM turismo/ otros 
YC pendientes/conciliación JCP 1:30
JV turismo/sube a pnlq 
ME corte de viáticos 


PNLQ
2 pasantes Ecoturismo del CTP Umberto Melloni 


Dt 
KV recibe estudiante del CTP explica funcionamiento y tema de informe 
DT informe de actividades ES/informe de ventas
PS tema la Georgina 


PLE
CC patrullaje tajo con Gp/mantenimientk 
GP patrullaje tajo con CC/mantenimient 
 
	18
PNTMM
km informe solicitado 
ME pendientes 
YC Georgina/pendientes 




PNLQ
2 pasantes Ecoturismo del CTP Umberto Melloni 
DT EA en la esperanza 
PS pendientes 
YE ea en la esperanza coordina con DT
ES EA en la esperanza coordina con Diana 


PLE


 CC apoyo pnlq turismo 
	19
PNTMM
YC reunión profesora CTP melioni 9 am
ME pendientes/corte de viaticos
Km informe 




PNLQ
2 pasantes Ecoturismo del CTP Umberto Melloni 
ES turismo/mantenimiento 
PS pendeintes
KV vacaciones
DT libre acumulado


PLE
YE mantenimiento 
CC mantenimiento 


	20
PNTMM
YC reunión en la ADI esperanza
KM apoyo inspecciones PNLQ con PS 
ME turismo/otros




PNLQ
2 pasantes Ecoturismo del CTP Umberto Melloni 
KV Dia de Parques Nacionales
PS visados con KM 
DT reunión en la ADI la esperanza 
ES recoge cuadraciclo en cede y lleva a tapanti/baja a KV


PLE
CC cita medica
YE apoyo turismo PNLQ


 
	21
PNTMM
kM pendientes/sale 
ME temas administrativos/organiza tema del sábado en purisil 




PNLQ
2 pasantes Ecoturismo del CTP Umberto Melloni 
KV Dia de Parques Nacionales
ES PATRULLAJE/ visado
MN patrullaje/tarde turismo
PS pendientes y visado en la tarde con ES 


PLE
CC mantenimiento toma con YE 


 
	22
PNTMM

ME apoyo actividad purisil con Covirena 




PNLQ
2 pasantes Ecoturismo del CTP Umberto Melloni 
KV Dia de Parques Nacionales
ES patrullaje cerros y reserva biológica 
MN patrullaje cerros y reserva biológica 
JV entra turismo 


PLE
CC apoya turismo pnlq 
 YE patrullaje con ES y MN 
	23
PNTMM
YC Dia de Parques Nacionales
ME turismo 
Apoyoo Covirena y voluntario 


PNLQ
KV, DT, JV, LV, ESDia de Parques Nacionales
MN turismo 
Apoyo 3 a vacía 
CC apoyo turismo 
2 pasantes Ecoturismo del CTP Umberto Melloni




PLE
YE Dia de Parques Nacionales
CC qpoyo pnlq 
	24
PNTMM
YC Dia de Parques Nacionales




PNLQ
Dia de Parques Nacionales
KV, JV, LV, DT Dia de Parques Nacionales
2 pasantes Ecoturismo del CTP Umberto Melloni


PLE
YE Dia de Parques Nacionales
	25
PNTMM
ME pendientes/visita purisil con YC 
YC pendientes/purisil tema de Santa 
KM informe pendiente 


PNLQ
2 pasantes Ecoturismo del CTP Umberto Melloni 
JV trabaja apoyo en temas de sanes/pide encuestas a mariali 
KV LA
MN EA cañón con ES y DT 
DT apoyo organización y mantenimiento de equipo en ea cañón/informes pendientes  
ES ea cañón/ mantenimiento y rotulación 
PS termina resolución Georgina pasa a YC para envío a a sería J 
LV turismo/comienza documento protocolo atención dantas 




PLE
YE EA cañón coordina con Diana 
GP apoyo pnlq 
CC pendientes/sale 




	26
PNTMM
YC PPC/purisil
ES ppc 
MN informes pendientes/turismo
ME pendientes/sale 
FC ingresa informes
KM informes y sale libres


PNLQ
KV y DT Actividad EA en Jucó
PS pendientes 
JV patrullaje/tema sanes y tema cerca de danta
LV patrullan/informe 
2 pasantes Ecoturismo del CTP Umberto Melloni




PLE
YE ea juco con Diana y KV coordina con DT
GP apoyo turismo pnlq/revisión toma la esperanza 






	27
PNTMM 
FC, ES y YC Reunión de personal BTMM en el PNLQ
MN atención turismo/Planificación de Voluntariado Noviembre 27- Actividad EA y ecorecreativa


PNLQ
DT, PS, LV, JV Reunión de personal BTMM
JV sale 
1 pasante Ecoturismo del CTP Umberto Melloni




PLE
GP Reunión de personal BTMM en el PNLQ, sale libre
FC pernocta en LE


	28
PNTMM
MN atención turismo/Atención al público, seguimiento a informes,planificación de capacitación con OIJ y Camilo, Proyecto RAMSAR




PNLQ
KV-Reunión CBLS y cita por la tarde
LV y FC  inspección INCOPESCA
LV sale a urgencias en San Marcos
PS informes cita por la tarde
1 pasante Ecoturismo del CTP Umberto Melloni




PLE
FC reunión con la miscelánea, sale a apoyar PNLQ, pernocta en LE


	29
PNTMM
MN atención turismo/Atención al público y planificación de actividad de Herpetos, sale de dias libres
FC regresa, atención a usuario que se quedó sin bateria




PNLQ
LV en cita médica PZ regresa por la tarde






PLE
MS ingresa va a apoyar PNLQ




	30
PNTMM
FC atencion turismo, ingresa Enzo




PNLQ
LV atencion turismo




PLE
MS atención atropello de danta




	31
PNTMM
ME: Enviar la solicitud de las tarjetas de ruedo del Bloque.
FC atencion turismo, gestión, ingresa Camille




PNLQ
LV sale libre, ingresa JV atiende turismo




PLE
MS mantenimiento
	

	

	

	

	

	





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
DS reunión con FC y JC
YC pendientes 


PNLQ
KV Coordina con alexis la cantidad de personas y sillas necesarias y demás para reunión CME, coordina curso musgos, limpieza carretera
DS ingresa 
DT informes de ventas y atención del turismo
PS informes pendientes


PLE
MS mantenimiento 




	2
PNTMM
VB limpieza del BTMM
ME: Vacaciones
YC tema covirenas y brigada


PNLQ
KV- atencion de turismo, gestiones varias
DS, PS y MS patrullaje Villa Mills, La Georgina
DT mantenimiento de senderos con JV /luego tema de la herramienta y temas sanes
FC y JV inspeccion postes y patrullaje Mirador Quetzales




PLE
DS, PS y MS patrullaje Villa Mills, La Georgina




	3
PNTMM
FC informes
YC gestion
Reunion Brigada Forestal 6pm




PNLQ
USO DE INSTALACIONES POR PARTE DE LA CME 
20 PAX con la oficina de los santos
JV DS  sabanas de indio
PS visados
DT y ES mantenimiento caminos LE
6pm reunion brigada forestal




PLE
MS y GP patrullaje
CC mantenimiento




	4
PNTMM
YC y MN ES :Patrullaje Pejibaye 
Práctica Incendios Forestale , se cancela
FC gestiones varias
Ingresa covirena


PNLQ
DS, PS y MS inspeccion la georgina
JV camaras trampa
DT informes mantenimiento
KV reunion CB gestion curso musgos


PLE
CC y GP mantenimiento






 
	5
PNTMM
ME y MN:Dia Internacional mujer Indigena Grana de Oro
ES mantenimiento senderos 
Camilla apoya turismo 
Covirena apoya turismo


PNLQ
JV: Monitoreo PNLQ con Enzo 


DS patrullaje con JV y cambio de cámaras trampa 




PLE
CC apoyo turismo pnlq con GP 






 
	6
PNTMM
ME, ES y MN Gira sobre hongos en LE
Covirena atiende turismo




PNLQ
JV, KV, DT, DS Gira sobre hongos en LE
GP y CC apoyo PNLQ




PLE
CC y GP apoyo PNLQ atienden turismo






 
	7
PNTMM
ES mantenimiento m/techos 
MN mantenimiento carro y bodega
YC informe patrullaje Pejiballe y otros 
ME turismo, tramita tarjeta de ruedo especial 


PNLQ
JV: Monitoreo PNLQ Y RBCV/recogen materiales en PZ 
DS monitoreo con JV y recogen materiales en PZ
DT informes  de la semana/ pendientes 
KV informes /pendientes
 




PLE
GP revisan toma de agua/ mantenimiento general del puesto 
CC revisión de toma/mantenimiento de puesto 








 
	8
PNTMM
YC : pendientes 
ME vacación 
MN Mantenimiento bodegas
ES mantenimiento 
FC reunión RLCVS




PNLQ
KV y DT: EA, San Gerardo Dota
PS informes pendientes 
JV informes monitoreo/actualización bases de datos  
LV turismo apoyo a JV 
DS informas pendientes 




PLE


CC mantenimiento 
GP mantenimiento sierras la 






 
	9
PNTMM
Reunión CME
FC reunión RLCVS
YC pendientes
MN informes pendientes/plani actividades de octubre
ES plani actividades de octubre
PNLQ
ME 


DS turismo/pendientes/habla con salud d paraiso 
JV pendientes/baja a Tapanti/reunión covirenas
LV turismo/baja a tapantí para gira de jueves
DT vacacion 
KV LA 
PS vacación por enfermedad


PLE
CC  marcado de herramientas de manejo del fuego según conversado con YC


GP marcado de herramientas de manejo del fuego según conversado con YC








 
	10
`,hv=String.raw`PNTMM
Es mantenimiento puesto 
ME:Gira PGAI- PNLC
YC informes 
JV gira ice 
LV gira ice 
MN informes/pendientes/reuniones UACEFEL y OIJ 
PNLQ
KV reunión en PE
KV Gira PGAI- PNLC
DT baja a KV coordinan/pendientes 
DS pendientes/sale
PS informes pendientes  


PLE
PNLQ
CC pendientes/ssle
YE continúa trabajo con herramienta 






 
	11
PNTMM
FC atiende a CGR
ME:Gira PGAI- PNLC
MN planificación9 charla dantas y capacitaciones OIJ, apoyo atención contraloria
PNLQ
EXONERACIÓN GRUPO ADULTOS MAYORES DOTA
YC atiende a la CGR
KV Gira PGAI- PNLC
LV atienden grupo de ancianos coordinar con YC 
PS  atienden grupo de ancianos coordinar con YC


PLE


YE continua marcaje de equipo de manejo del fuego






 
	12
PNTMM
FC pendientes
MN Visitación/termina informes pendietes/mantenimineto con Errol
ES mantenimiento Bodega




PNLQ
LV turismo/clases






PLE
MS y YE apoyan turismo en PNLQ suben los 3 sacos de cemento a PNLQ








 
	13
PNTMM





PNLQ






PLE
YE MS Patrullaje cerros temprano presunto ingreso de grupo


 
	14
PNTMM





PNLQ






PLE




 
	15
PNTMM





PNLQ


PS atención queja Sierra del Guarco


PLE


MS atención queja Sierra del Guarco
	16
PNTMM
YC: PNLQ Tenencia de la tierra




PNLQ
LV y PS: Patrullaje Providencia




PLE




 
	17
PNTMM
Comite Tecnico




PNLQ
KV: EA, La Damita y Macho Gaff
DS y MS, JV y PS  patrullaje Providencia
DT atiende turismo


PLE
DS y MS,  JV y PS patrullaje Providencia


 
	18
PNTMM
YC y MN: Patrullaje Jaular y Embalse




PNLQ
YV y PS con MS: Patrullaje Reserva Biológica Cerro Vueltas




PLE
MS con YV y PS: Patrullaje Reserva Biológica Cerro Vueltas


 
	19
PNTMM
ES y KM entrenamiento MIF




PNLQ






PLE


MS y YE: Patrullaje Cerros y San Gerardo Dota
 
	20
PNTMM



PNLQ
YV con MS: Patrullaje Jaboncillos, Las Duelas y Ciénagas


PLE
MS con JV:  Patrullaje Jaboncillos, Las Duelas y Ciénagas. 


	21
PNTMM
Charla a comunidad Purisil sobre danta y comunidad en conjunto con Tapir Vet 5:30 pm 




PNLQ
JV : Monitoreo PNTMM




PLE










 
	22
PNTMM
iMN Gra a RFG




PNLQ
JV: Monitoreo PNTMM
DT: Mantenimiento PNTMM
DS gira a RFG


PLE










 
	23
PNTMM





PNLQ
JV: Monitoreo PNTMM
KV, DT y MN : EA, Purisil




PLE




 
	24
PNTMM





PNLQ
LV y PS con YE: Patrullaje Cerros y san Gerardo




PLE
 YE con LV y PS: Patrullaje Cerros y San Gerardo


 
	25
PNTMM
REunion DAF




PNLQ
KV:  Reunión CBL
FC reunion DAF


PLE
FC reunion DAF










 
	26
PNTMM
Apoyo 4 ASVOS




PNLQ
LV y PS: Patrullaje Providencia




PLE








	27
PNTMM





PNLQ
Apoyo 4 ASVOS




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
ES curso de armas


PNLQ
DS curso de armas




PLE




	2
PNTMM
VB limpieza del BTMM
REunion DAF
ES curso de armas




PNLQ
REunion DAF
DS curso de armas


PLE
REunion DAF




	3
PNTMM
ES curso de armas






PNLQ
DS curso de armas




PLE




 
	4
PNTMM
ES curso de armas






PNLQ
DS curso de armas




PLE






 
	5
PNTMM
ES curso de armas






PNLQ
DS curso de armas




PLE




	6
PNTMM
ES curso de armas






PNLQ
KV y PS Charla a grupo de hidrología de Una guanacaste 
DS curso de armas




PLE


	7
PNTMM
FC Curso musgos UNA
YC reunion CRxS y administradores en SJ
ES curso de armas




PNLQ
KV-Reunión CME
LV, JV, PS, Curso musgos MN UNA
DS curso de armas




PLE
MS Curso musgos MN UNA




	8
PNTMM
FC Curso musgos UNA
YC reunion CRxS y administradores en SJ
ES curso de armas




PNLQ
LV, JV, PS, Curso musgos MN UNA
DS curso de armas




PLE
MS Curso musgos MN UNA




	9
PNTMM
FC Curso musgos UNA
YC reunion CRxS y administradores en SJ
ES curso de armas




PNLQ
LV, JV, PS, Curso musgos MN UNA
DS curso de armas




PLE
MS Curso musgos MN UNA




	10
PNTMM
ES curso de armas






PNLQ
DS curso de armas




PLE




	11
PNTMM





PNLQ
DS curso de armas




PLE








 
	12
PNTMM
MN curso de armas




PNLQ






PLE








 
	13
PNTMM
Reunión CME
MN curso de armas




PNLQ






PLE








 
	14
PNTMM
MN curso de armas




PNLQ






PLE










 
	15
PNTMM
Comite Tecnico
MN curso de armas




PNLQ






PLE








 
	16
PNTMM
MN curso de armas




PNLQ






PLE








 
	17
PNTMM
ES y KM entrenamiento MIF
MN curso de armas




PNLQ






PLE








 
	18
PNTMM
MN curso de armas




PNLQ






PLE








 
	19
PNTMM
MN curso de armas




PNLQ






PLE








 
	20
PNTMM
MN curso de armas




PNLQ






PLE








 
	21
PNTMM
MN curso de armas




PNLQ






PLE








 
	22
PNTMM
FC Comite Tecnico
MN curso de armas


PNLQ






PLE








 
	23
PNTMM
FC Comite Tecnico
MN trabajo de oficina


PNLQ
Capacitación UACFel




PLE
Capacitación UACFel
CC apoya PNLQ




 
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
`,gv=String.raw`





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
VB limpieza del BTMM




PNLQ
Reunion Comite turismo con GJ




PLE






PVM


	4
PNTMM





PNLQ
KV-Reunión CME




PLE






PVM


 
	5
PNTMM





PNLQ






PLE






PVM


 
	6
PNTMM
Curso CBF en VM




PNLQ






PLE






PVM


 
	7
PNTMM
Curso CBF en VM




PNLQ






PLE






PVM


 
	8
PNTMM
Curso CBF en VM




PNLQ






PLE






PVM


 
	9
PNTMM
Curso CBF en VM





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
Reunión CME




PNLQ






PLE






PVM


 
	12
PNTMM
Comite Tecnico




PNLQ






PLE






PVM


 
	13
PNTMM
Comite Tecnico




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
PS Conferencia ArcGIS




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
ES y KM entrenamiento MIF




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
YC, DS y ES Patrullaje por definir 




PNLQ






PLE






PVM


 
	27
PNTMM
MNy DS VOLUNTARIADO EMPRESARIAL 20 PAX






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
ME: Enviar la solicitud de las tarjetas de ruedo del Bloque.




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
ME: Enviar la solicitud de las tarjetas de ruedo del Bloque.


PNLQ






PLE






PVM


	2
PNTMM
VB limpieza del BTMM




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






PVM


 
	

	7
PNTMM





PNLQ






PLE






PVM


 
	8
PNTMM





PNLQ
Reunion Comite turismo ACC con GJ




PLE






PVM


 
	9
PNTMM
Reunión CME




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
Reunión SPM




PNLQ






PLE






PVM


 
	12
PNTMM
ES y KM entrenamiento MIF




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
Comite Tecnico




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



`,Pv=String.raw`


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
FC Comite Tecnico




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


 
	

	

	







ENERO 2027
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












 
	2
PNTMM





PNLQ






PLE










 
	3
PNTMM





PNLQ








PLE










 
	4
PNTMM



PNLQ




PLE










 
	5
PNTMM



PNLQ




PLE










 
	6
PNTMM





PNLQ




PLE










 
	7
PNTMM






PNLQ




PLE:












 
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
ES y KM MIF 






PNLQ




PLE












 
	17
PNTMM







PNLQ




PLE








 
	18
PNTMM







PNLQ




PLE








 
	19
PNTMM







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










 


	

	

	

	

	

	

	





Pestaña 2`,yv=[mv,pv,fv,Tv,Lv,vv,hv,gv,Pv].join(""),qs="2026-09-11-doc-completo";function Bn({id:r,titulo:i,fecha:o,funcionarios:c,lugar:d="",observaciones:p=""}){return{id:`plan2026-agenda-${r}`,titulo:i,categoria:"Otra actividad",inicio:o,fin:o,unDia:!0,horaInicio:"08:00",horaFin:"16:00",funcionarios:c,otrosParticipantes:[],lugar:d,observaciones:p,viatico:!0}}const Mv=[Bn({id:"2026-08-01-cerro-vueltas",titulo:"PPC (entrada de Cerro Vueltas, tema caballistas)",fecha:"2026-08-01",funcionarios:["Jetzelly Villalobos","Yolanda Elizondo"],lugar:"Entrada de Cerro Vueltas",observaciones:"Tema: caballistas."}),Bn({id:"2026-08-05-reunion-cne",titulo:"Reunión CNE",fecha:"2026-08-05",funcionarios:["Karen Valle"],lugar:"CNE"}),Bn({id:"2026-08-06-jaular",titulo:"PPC pica montaña a Jaular",fecha:"2026-08-06",funcionarios:["Yeison Cortés","Errol Salazar","Kenneth Mena"],lugar:"Jaular"}),Bn({id:"2026-08-08-cerros",titulo:"PPC a Cerros",fecha:"2026-08-08",funcionarios:["Yolanda Elizondo"],lugar:"Cerros"}),...[10,11,12,13,14].map(r=>Bn({id:`2026-08-${r}-ea-escuelas`,titulo:"EA Escuelas",fecha:`2026-08-${r}`,funcionarios:["Errol Salazar","Diana Tencio"],lugar:"Escuelas"})),Bn({id:"2026-08-12-ppc-san-gerardo",titulo:"PPC San Gerardo",fecha:"2026-08-12",funcionarios:["Karen Valle","Laura Valverde","Pablo Sánchez"],lugar:"San Gerardo"}),Bn({id:"2026-08-12-capacitacion-serpientes",titulo:"Capacitación en manipulación y manejo de serpientes",fecha:"2026-08-12",funcionarios:["Yeison Cortés","Laura Valverde"],observaciones:"Las dos descripciones de la fuente se consolidaron en una sola actividad."}),Bn({id:"2026-08-16-duelas-esperanza",titulo:"PPC Duelas, La Esperanza y otros",fecha:"2026-08-16",funcionarios:["Jetzelly Villalobos"],lugar:"Duelas y La Esperanza"}),Bn({id:"2026-08-17-vida-silvestre-acc",titulo:"Apoyo operativo Vida Silvestre ACC",fecha:"2026-08-17",funcionarios:["Fabricio Carbonell","Kenneth Mena","Jetzelly Villalobos"],lugar:"ACC",observaciones:"Confirmar detalles con Fabricio."}),Bn({id:"2026-08-18-reserva-san-gerardo",titulo:"PPC Reserva San Gerardo",fecha:"2026-08-18",funcionarios:["Karen Valle","Yolanda Elizondo","Pablo Sánchez"],lugar:"Reserva San Gerardo"}),Bn({id:"2026-08-30-rancho-lalo",titulo:"PPC Rancho de Lalo",fecha:"2026-08-30",funcionarios:["Jetzelly Villalobos","Mariano Solís"],lugar:"Rancho de Lalo"})],Ev={PNTMM:"Parque Nacional Tapantí Macizo de la Muerte",PNLQ:"Parque Nacional Los Quetzales",PLE:"Puesto La Esperanza",PVM:"Puesto Villa Mills"},zd={ENERO:1,FEBRERO:2,MARZO:3,ABRIL:4,MAYO:5,JUNIO:6,JULIO:7,AGOSTO:8,SETIEMBRE:9,SEPTIEMBRE:9,OCTUBRE:10,NOVIEMBRE:11,DICIEMBRE:12},Qd={ES:"Errol Salazar",ME:"Mayra Espinoza",YC:"Yeison Cortés",KM:"Kenneth Mena",FC:"Fabricio Carbonell",MN:"Monserrath Navarro",JPG:"Juan Pablo Granados",JG:"Juan Pablo Granados",PG:"Juan Pablo Granados",JP:"Juan Pablo Granados",LV:"Laura Valverde",JV:"Jetzelly Villalobos",DT:"Diana Tencio",KV:"Karen Valle",PS:"Pablo Sánchez",YE:"Yolanda Elizondo",MS:"Mariano Solís",MSA:"Mariano Solís",GP:"Guillermo Pérez",CC:"Carlos Cordero",JB:"Josué Brenes",AA:"Alexander Alvarado"},Cv={MH:"MH",GG:"GG",MSG:"MSG",DA:"Dirección de Agua",GJ:"GJ",JC:"JC",IV:"IV",YV:"YV",VB:"VB",ASVO:"ASVO",TCU:"TCU",UCR:"UCR",TEC:"TEC",ICE:"ICE",ACLAP:"ACLAP",COVIRENA:"COVIRENA",COVIRENAS:"COVIRENA",PANTHERA:"Panthera",UNED:"UNED",INA:"INA",MOPT:"MOPT",FUNDECOR:"FUNDECOR",CEDARENA:"CEDARENA"},Nv=new Set(["DOMINGO","LUNES","MARTES","MIÉRCOLES","JUEVES","VIERNES","SÁBADO"]),Sv=2026,np=r=>r.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase(),xv=(r,i)=>new RegExp(`(^|[^A-Z])${i}([^A-Z]|$)`).test(r);function bv(r){const i=r.replace(/[^A-Za-z]/g,"").toUpperCase();return i.startsWith("PNTMM")?"PNTMM":["PNLQ","PLE","PVM"].includes(i)?i:""}function Vv(r){const i=np(r),o=[],c=d=>{o.some(p=>p.nombre===d)||o.push({nombre:d,contacto:""})};for(const[d,p]of Object.entries(Cv))xv(i,d)&&c(p);return/\bENZO\b/.test(i)&&c("Enzo"),/\bALEX(?:ANDER)?\b/.test(i)&&c("Alex"),/\bMERYLL(?:\s+ARIAS)?\b/.test(i)&&c("Meryll Arias"),/\bLUIS\s*DAVID\b|\bLUISDA\b/.test(i)&&c("Luis David"),/\bVOLUNTARI(?:O|A|OS|AS)\b/.test(i)&&c("Voluntariado"),/\bINVESTIGADOR(?:A|ES|AS)?\b/.test(i)&&c("Investigadores"),/\bPASANTES?\b/.test(i)&&c("Pasantes"),/\bESTUDIANTES?\b/.test(i)&&c("Estudiantes"),o}function Av(r){const i=np(r);return!!(/\bVOLUNTARI[OA]S?\b/.test(i)||/\bCOVIRENAS?\b/.test(i)||/\bINVITAD[OA]S?\b/.test(i)||/\bINVESTIGADOR/.test(i)||/\bPASANTES?\b/.test(i)||/\bESTUDIANTES?\b/.test(i)||/\bPRACTICANTES?\b/.test(i)||/\bENZO\b/.test(i)||/\bMERYLL\b/.test(i)||/^(INGRESAN?|SALEN?|PERNOCTAN?|LLEGAN?|VISITAN?)\b/.test(i))}function wv(r){const i=L=>{const T=L.match(/^([A-Za-z]{2,3})(?![A-Za-z])/);if(!T)return null;const f=T[1].toUpperCase();return Qd[f]?{nombre:Qd[f],largo:T[1].length}:null};let o=r.replace(/^\s+/,"");const c=i(o);if(!c)return{funcionarios:[],titulo:r.trim()};const d=[c.nombre];for(o=o.slice(c.largo);;){const L=o.match(/^(\s*(?:y|,|\/|-|–|&|;)\s*|\s+)/i);if(!L)break;const T=o.slice(L[0].length),f=i(T);if(!f)break;d.includes(f.nombre)||d.push(f.nombre),o=T.slice(f.largo)}const p=o.replace(/^\s*[:\-–]?\s*/,"").replace(/^(?:y|e|&|,|;)\s+/i,"").trim();return{funcionarios:d,titulo:p}}function jv(r){const i=[];for(const o of r){const c=i[i.length-1];if(c!==void 0&&/^[a-záéíóúñ]/.test(o)){const d=c.split(/\s+/).pop()||"";if(d.length===1&&/^[a-záéíóúñ]$/.test(d)){i[i.length-1]=c+o;continue}}i.push(o)}return i}function Dv(r){const i=new Map;let o=0,c=Sv,d=0,p="";for(const T of r.split(/\r?\n/)){const f=T.trim();if(!f||Nv.has(f)||/^_+$/.test(f)||f==="De"||/^Pestaña\s+\d+$/i.test(f))continue;const C=f.match(/^([A-ZÁÉÍÓÚÑ]+)\s+(\d{4})$/);if(C&&zd[C[1]]){o=zd[C[1]],c=Number(C[2]),d=0,p="";continue}if(/^\d{1,2}$/.test(f)){d=Number(f),p="";continue}const y=bv(f);if(y){p=y;continue}if(!o||!d||!p)continue;const g=`${c}-${o}-${d}-${p}`;i.has(g)||i.set(g,{anio:c,mes:o,dia:d,sitio:p,textos:[]}),i.get(g).textos.push(f)}const L=[];for(const T of i.values()){const f=`${T.anio}-${String(T.mes).padStart(2,"0")}-${String(T.dia).padStart(2,"0")}`;let C=[],y=0;for(const g of jv(T.textos)){const{funcionarios:N,titulo:w}=wv(g);if(!w)continue;let j;N.length?(j=N,C=N):Av(g)?j=[]:C.length?j=C:j=[],L.push({id:`plan2026-${f}-${T.sitio}-${y++}`,titulo:w,categoria:"Otra actividad",inicio:f,fin:f,unDia:!0,horaInicio:"08:00",horaFin:"16:00",funcionarios:j,otrosParticipantes:Vv(g),lugar:Ev[T.sitio],observaciones:"",viatico:!1})}}return L}function Jd(r){return typeof(r==null?void 0:r.id)=="string"&&r.id.startsWith("plan2026-")}function kv(r,i,o){const c=(r||[]).filter(p=>!(Jd(p)&&(p.inicio||"")>=o)),d=(i||[]).filter(p=>Jd(p)&&(p.inicio||"")>=o);return[...c,...d]}async function Rv(){const r=Dv(yv);if(!r.length)throw new Error("La planificación 2026 no produjo actividades válidas.");return[...r,...Mv]}const Hs="btmm:planificacion2026:version",_v="btmm:planificacion2026:importada:v3";function Iv(){const{setActividadesPlan:r}=qt();return x.useEffect(()=>{let i=!1,o=null,c=null;try{o=window.localStorage.getItem(Hs),c=window.localStorage.getItem(_v)}catch{}if(o!==qs){if(!o&&c==="1"){try{window.localStorage.setItem(Hs,qs)}catch{}return}return(async()=>{try{const d=await Rv();if(i)return;const p=o==null?"":Ui();r(L=>kv(L,d,p));try{window.localStorage.setItem(Hs,qs)}catch{}}catch(d){console.error("No fue posible sincronizar PLANIFICACION BTMM 2026",d)}})(),()=>{i=!0}}},[r]),null}const Bd={flat:"bg-surface",inset:"bg-surface-inset",elevated:"border border-line bg-surface shadow-sm",interactive:"border border-line bg-surface transition-colors hover:border-line-strong hover:bg-surface-alt"};function Ma({title:r,icon:i,action:o,children:c,collapsible:d=!1,defaultOpen:p=!1,variant:L="flat",className:T="",ariaLabel:f}){const[C,y]=x.useState(p),g=!d||C;return u.jsxs("div",{className:`pnlq-card rounded-lg p-4 ${Bd[L]??Bd.flat} ${T}`,children:[u.jsxs("div",{className:`pnlq-card-header flex flex-wrap items-center justify-between gap-3 ${g?"mb-3":""}`,children:[d?u.jsxs("button",{type:"button",onClick:()=>y(N=>!N),"aria-expanded":C,"aria-label":f,className:"flex min-h-touch flex-1 items-center gap-2 text-left text-base font-semibold text-ink hover:text-brand",children:[u.jsx(Ze,{name:C?"chevronDown":"chevronRight",size:18,className:"shrink-0 text-ink-subtle"}),u.jsx("span",{children:i}),r]}):u.jsxs("div",{className:"flex items-center gap-2 text-base font-semibold text-ink",children:[u.jsx("span",{children:i}),r]}),o]}),g&&c]})}function Vt({children:r,className:i="",bordered:o=!1}){return u.jsx("span",{className:`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${o?"border":""} ${i}`,children:r})}function Ov(r){return r.split(" ").slice(0,2).map(i=>i[0]).join("").toUpperCase()}function Fv(r){return["bg-emerald-700 text-white","bg-sky-700 text-white","bg-rose-700 text-white","bg-amber-700 text-white","bg-purple-700 text-white"][r.charCodeAt(0)%5]}function og(r){return{Activo:"bg-emerald-100 text-emerald-900 border-emerald-200","De vacaciones":"bg-sky-100 text-sky-900 border-sky-200",Incapacitado:"bg-red-100 text-red-900 border-red-200",Inactivo:"bg-slate-100 text-slate-700 border-slate-200"}[r]||"bg-slate-100 text-slate-700 border-slate-200"}function Yd(r,i){const o=String(r||"").toUpperCase();return i&&!o?"bg-slate-600 text-white border-slate-700":o.startsWith("T")?"bg-emerald-700 text-white border-emerald-800":o.startsWith("I")?"bg-rose-700    text-white border-rose-800":o.startsWith("V")?"bg-sky-700     text-white border-sky-800":o.startsWith("L")?"bg-amber-700   text-white border-amber-800":o.startsWith("O")?"bg-violet-700  text-white border-violet-800":o.startsWith("E")?"bg-cyan-700    text-white border-cyan-800":o?i?"bg-slate-600 text-white border-slate-700":"bg-emerald-700 text-white border-emerald-800":i?"bg-slate-600 text-white border-slate-700":"bg-slate-400 text-white border-slate-500"}function Ri({name:r}){return u.jsx("div",{className:`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${Fv(r)}`,children:Ov(r)})}const Gd={half:"h-[60vh]",full:"max-h-[92vh]"};function yl({open:r,onClose:i,title:o,snapPoint:c="full",children:d}){const p=x.useRef(null),L=x.useRef({startY:0,dragging:!1});x.useEffect(()=>{if(!r)return;const y=g=>{g.key==="Escape"&&i()};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[r,i]),x.useEffect(()=>(r?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[r]);const T=x.useCallback(y=>{L.current={startY:y.touches[0].clientY,dragging:!0}},[]),f=x.useCallback(y=>{if(!L.current.dragging)return;const g=y.touches[0].clientY-L.current.startY;g>0&&p.current&&(p.current.style.transform=`translateY(${g}px)`)},[]),C=x.useCallback(y=>{if(!L.current.dragging)return;const g=y.changedTouches[0].clientY-L.current.startY;L.current.dragging=!1,p.current&&(p.current.style.transform=""),g>80&&i()},[i]);return typeof document>"u"?null:gl.createPortal(u.jsxs(u.Fragment,{children:[u.jsx("div",{"aria-hidden":"true",onClick:i,className:["fixed inset-0 z-40 bg-black/50 transition-opacity duration-300",r?"opacity-100":"pointer-events-none opacity-0"].join(" ")}),u.jsxs("div",{ref:p,role:"dialog","aria-modal":"true","aria-label":o,className:["fixed inset-x-0 bottom-0 z-50 flex flex-col rounded-t-2xl bg-surface text-ink shadow-2xl","transition-transform duration-300 ease-out",Gd[c]??Gd.full,r?"translate-y-0":"translate-y-full"].join(" "),children:[u.jsx("div",{className:"flex cursor-grab touch-none items-center justify-center pb-1 pt-3",onTouchStart:T,onTouchMove:f,onTouchEnd:C,"aria-hidden":"true",children:u.jsx("span",{className:"h-1.5 w-10 rounded-full bg-line"})}),o&&u.jsxs("div",{className:"flex items-center justify-between border-b border-line px-5 pb-3 pt-1",children:[u.jsx("h2",{className:"text-base font-semibold text-ink",children:o}),u.jsx("button",{type:"button",onClick:i,"aria-label":"Cerrar",className:"inline-flex min-h-touch min-w-touch items-center justify-center rounded-full text-ink-muted hover:bg-surface-alt hover:text-ink",children:u.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",children:u.jsx("path",{d:"M18 6 6 18M6 6l12 12"})})})]}),u.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-8 pt-4",children:d})]})]}),document.body)}function Gi(r,i){return r.filter(o=>i>=o.inicio&&i<=(o.fin||o.inicio))}function Ml(r){return String((r==null?void 0:r.titulo)||"").trim().toLowerCase()===zi.toLowerCase()}function zv(r){return(r==null?void 0:r.fin)||(r==null?void 0:r.inicio)||""}function sg(r=[],i){return i?r.filter(o=>(o==null?void 0:o.inicio)&&(o.funcionarios||[]).includes(i)).sort((o,c)=>String(o.inicio).localeCompare(String(c.inicio))):[]}const lg=["proximas","pasadas","todas"];function tp(r,i){return zv(r)<String(i||"")}function cg(r=[],i,o="proximas"){if(o==="todas")return[...r];const c=o==="pasadas";return r.filter(d=>tp(d,i)===c)}function ug(r=[],i){let o=0;for(const c of r)tp(c,i)&&(o+=1);return{proximas:r.length-o,pasadas:o,todas:r.length}}const Qv=366;function dg(r=[]){const i=new Map;for(const o of r||[]){if(!(o!=null&&o.inicio))continue;const c=o.funcionarios||[];if(c.length===0)continue;const d=o.fin||o.inicio;if(d<o.inicio)continue;const p=new Date(`${o.inicio}T00:00:00`),L=new Date(`${d}T00:00:00`);if(Number.isNaN(p.getTime())||Number.isNaN(L.getTime()))continue;const T=Ml(o);let f=0;for(;p<=L&&f<Qv;){const C=Ui(p);for(const y of c){const g=`${y}|${C}`,N=i.get(g);N?N.visit=N.visit||T:i.set(g,{visit:T})}p.setDate(p.getDate()+1),f+=1}}return i}function mg(r,i,o){return!!r&&r.has(`${i}|${o}`)}function pg(r,i,o){var c,d;return!!((d=(c=r==null?void 0:r.get)==null?void 0:c.call(r,`${i}|${o}`))!=null&&d.visit)}const Jv=["Puesto Orosi","Puesto Quetzales"];function ap(r,i){return(i||Jv).includes(r)}function Bv(r){return _T(r)}function Yv(r,i,o){return tm(r)&&ap(i,o)}function Gv({actividadesPlan:r=[],iso:i,personas:o=[],roleData:c={},year:d,month:p,dia:L,feriados:T=null,puestos:f=[],puestosRequieren:C}){var N;const y=Gi(r,i).filter(Ml),g=new Map;for(const w of y)for(const j of w.funcionarios||[]){const Q=(N=yr(o,j))==null?void 0:N.puestoOperativo;Q&&(g.has(Q)||g.set(Q,new Set),g.get(Q).add(j))}return f.map(w=>{const j=[...g.get(w)||[]],Q=j.filter(V=>Bv(Sa(o,c,d,p,V,L,T))),D=ap(w,C);return{puesto:w,requiere:D,asignados:j,presentes:Q,critico:D&&Q.length===0,soloRemoto:D&&j.length>0&&Q.length===0}})}function Uv({rol:r,tieneActividad:i,tieneVisit:o,puesto:c,puestosRequieren:d=null}){return i?Ki(r)?o?Yv(r,c,d):!1:!0:!1}function Kv(r,i,o,c,d,p,L=null,T=null){const f=Ml(r);return(r.funcionarios||[]).filter(C=>{var g;const y=Sa(d,p,o,c,C,i,L);return Uv({rol:y,tieneActividad:!0,tieneVisit:f,puesto:(g=yr(d,C))==null?void 0:g.puestoOperativo,puestosRequieren:T})})}function $v({onSwipeLeft:r,onSwipeRight:i,threshold:o=60,restraint:c=80,allowedTime:d=600}={}){const p=x.useRef(null);return x.useEffect(()=>{const L=p.current;if(!L)return;let T=0,f=0,C=0,y=!1;const g=w=>{var D;const j=(D=w.changedTouches)==null?void 0:D[0];if(!j)return;const Q=w.target instanceof Element?w.target:null;y=!!(Q!=null&&Q.closest('button, a, input, select, textarea, [role="button"], [data-swipe-ignore], table, .overflow-x-auto, .overflow-auto'))||j.clientX<24||j.clientX>window.innerWidth-24,T=j.clientX,f=j.clientY,C=Date.now()},N=w=>{var Y;const j=(Y=w.changedTouches)==null?void 0:Y[0];if(!j||y)return;const Q=j.clientX-T,D=j.clientY-f;Date.now()-C>d||Math.abs(Q)<o||Math.abs(D)>c||Math.abs(Q)<=Math.abs(D)*1.2||(Q<0?r==null||r():i==null||i())};return L.addEventListener("touchstart",g,{passive:!0}),L.addEventListener("touchend",N,{passive:!0}),()=>{L.removeEventListener("touchstart",g),L.removeEventListener("touchend",N)}},[r,i,o,c,d]),p}const rp="(max-width: 767px)";function qv(){return typeof window>"u"||typeof window.matchMedia!="function"?!1:window.matchMedia(rp).matches}function ip(){const[r,i]=x.useState(qv);return x.useEffect(()=>{if(typeof window>"u"||typeof window.matchMedia!="function")return;const o=window.matchMedia(rp),c=d=>i(d.matches);return i(o.matches),o.addEventListener?(o.addEventListener("change",c),()=>o.removeEventListener("change",c)):(o.addListener(c),()=>o.removeListener(c))},[]),r}const op={2025:[{fecha:"2025-01-01",nombre:"Año Nuevo",obligatorio:!0},{fecha:"2025-04-11",nombre:"Juan Santamaría (trasladado a viernes)",obligatorio:!0},{fecha:"2025-04-17",nombre:"Jueves Santo",obligatorio:!0},{fecha:"2025-04-18",nombre:"Viernes Santo",obligatorio:!0},{fecha:"2025-05-01",nombre:"Día del Trabajo",obligatorio:!0},{fecha:"2025-07-25",nombre:"Anexión del Partido de Nicoya",obligatorio:!1},{fecha:"2025-08-02",nombre:"Virgen de los Ángeles",obligatorio:!0},{fecha:"2025-08-15",nombre:"Día de la Madre",obligatorio:!0},{fecha:"2025-09-15",nombre:"Independencia",obligatorio:!0},{fecha:"2025-12-01",nombre:"Abolición del Ejército",obligatorio:!0},{fecha:"2025-12-25",nombre:"Navidad",obligatorio:!0}],2026:[{fecha:"2026-01-01",nombre:"Año Nuevo",obligatorio:!0},{fecha:"2026-04-02",nombre:"Jueves Santo",obligatorio:!0},{fecha:"2026-04-03",nombre:"Viernes Santo",obligatorio:!0},{fecha:"2026-04-13",nombre:"Juan Santamaría (trasladado a lunes)",obligatorio:!0},{fecha:"2026-05-01",nombre:"Día del Trabajo",obligatorio:!0},{fecha:"2026-07-27",nombre:"Anexión del Partido de Nicoya (trasladado)",obligatorio:!1},{fecha:"2026-08-02",nombre:"Virgen de los Ángeles",obligatorio:!0},{fecha:"2026-08-17",nombre:"Día de la Madre (trasladado a lunes)",obligatorio:!0},{fecha:"2026-09-14",nombre:"Independencia (trasladado a lunes)",obligatorio:!0},{fecha:"2026-11-30",nombre:"Abolición del Ejército (trasladado a lunes)",obligatorio:!0},{fecha:"2026-12-25",nombre:"Navidad",obligatorio:!0}],2027:[{fecha:"2027-01-01",nombre:"Año Nuevo",obligatorio:!0},{fecha:"2027-03-25",nombre:"Jueves Santo",obligatorio:!0},{fecha:"2027-03-26",nombre:"Viernes Santo",obligatorio:!0},{fecha:"2027-04-12",nombre:"Juan Santamaría (trasladado a lunes)",obligatorio:!0},{fecha:"2027-05-01",nombre:"Día del Trabajo",obligatorio:!0},{fecha:"2027-07-26",nombre:"Anexión del Partido de Nicoya (trasladado)",obligatorio:!1},{fecha:"2027-08-02",nombre:"Virgen de los Ángeles",obligatorio:!0},{fecha:"2027-08-16",nombre:"Día de la Madre (trasladado a lunes)",obligatorio:!0},{fecha:"2027-09-13",nombre:"Independencia (trasladado a lunes)",obligatorio:!0},{fecha:"2027-11-29",nombre:"Abolición del Ejército (trasladado a lunes)",obligatorio:!0},{fecha:"2027-12-25",nombre:"Navidad",obligatorio:!0}]};function Hv(r,i=!1){const o=op[r]||[];return new Set(o.filter(c=>i||c.obligatorio).map(c=>c.fecha))}function fg(r){return Object.prototype.hasOwnProperty.call(op,String(r))}function Wv(r,i){return i!=null&&i.aplicarFeriadosEnPrimerDiaLaboral?Hv(r,!1):null}function El(r){const{reglas:i}=qt();return x.useMemo(()=>Wv(r,i),[r,i])}function Cl(r){const i=Number(r)||0;return Number.isInteger(i)?String(i):String(Math.round(i*100)/100)}function Zv(r,i){return(r==null?void 0:r.magnitud)==="horas"?i("reposicion.horasN",{n:Cl(r.horas)}):(r==null?void 0:r.magnitud)==="medioDia"?i("modalReposicion.magnitudMedioDia"):i("modalReposicion.magnitudDiaEntero")}function Tg(r,i){return(r==null?void 0:r.magnitud)==="horas"?i("reposicion.horasN",{n:Cl(r.horas)}):(r==null?void 0:r.magnitud)==="medioDia"?i("reposicion.magnitudCorta.medioDia"):i("reposicion.magnitudCorta.diaEntero")}function sp(r,i=8){const o=Math.round((Number(r)||0)*100)/100;if(o<=0)return"0 h";const c=o/i;return Number.isInteger(c)?c===1?"1 día":`${c} días`:o===i/2?"½ día":`${Cl(o)} h`}function Xv({data:r,hj:i,cerrar:o,onModificarRol:c,onReposicion:d,onReponer:p,onEditarFecha:L}){$1(o);const T=jn(),{funcionario:f,iso:C,rol:y,saldo:g=0}=r,N=({onClick:w,tono:j,titulo:Q,desc:D})=>u.jsxs("button",{type:"button",onClick:w,className:`min-h-touch w-full rounded-2xl border px-4 py-3 text-left shadow-sm hover:brightness-95 ${j}`,children:[u.jsx("span",{className:"block text-sm font-semibold",children:Q}),u.jsx("span",{className:"mt-0.5 block text-xs opacity-80",children:D})]});return u.jsx("div",{className:"fixed inset-0 z-[60] flex items-end justify-center bg-black/50 p-0 backdrop-blur-sm md:items-center md:p-4",onClick:w=>{w.target===w.currentTarget&&o()},children:u.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":T("asignacionLibre.titulo"),className:"w-full max-w-lg overflow-hidden rounded-t-3xl bg-white shadow-2xl md:rounded-3xl",children:[u.jsxs("div",{className:"flex items-start justify-between gap-3 border-b border-slate-200 p-5",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-semibold",children:T("asignacionLibre.titulo")}),u.jsx("p",{className:"text-sm text-slate-600",children:T("asignacionLibre.sub",{funcionario:f,fecha:ot(C),rol:IT(y)})})]}),u.jsx("button",{onClick:o,"aria-label":T("acciones.cerrar"),className:"-mr-1 inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl text-lg font-semibold text-slate-500 hover:bg-slate-100 hover:text-slate-700",children:"✕"})]}),u.jsxs("div",{className:"space-y-2 p-5",children:[u.jsx(N,{onClick:c,tono:"border-emerald-300 bg-emerald-50 text-emerald-950",titulo:T("asignacionLibre.modificarRol"),desc:T("asignacionLibre.modificarRolDesc")}),u.jsx(N,{onClick:d,tono:"border-amber-300 bg-amber-50 text-amber-950",titulo:T("asignacionLibre.reposicion"),desc:T("asignacionLibre.reposicionDesc")}),g>0&&u.jsx(N,{onClick:p,tono:"border-sky-300 bg-sky-50 text-sky-950",titulo:T("asignacionLibre.reponer",{saldo:sp(g,i)}),desc:T("asignacionLibre.reponerDesc")}),u.jsx(N,{onClick:L,tono:"border-slate-300 bg-slate-50 text-slate-800",titulo:T("asignacionLibre.editarFecha"),desc:T("asignacionLibre.editarFechaDesc")})]}),u.jsx("div",{className:"flex justify-end border-t border-slate-200 bg-slate-50 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]",children:u.jsx("button",{onClick:o,className:"min-h-touch rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50",children:T("acciones.cancelar")})})]})})}function eh({participantes:r=[],onChange:i,inputClass:o}){const c=(L,T,f)=>{i(r.map((C,y)=>y===L?{...C,[T]:f}:C))},d=()=>i([...r,{nombre:"",contacto:""}]),p=L=>i(r.filter((T,f)=>f!==L));return u.jsxs("section",{className:"mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-3",children:[u.jsxs("div",{className:"flex items-center justify-between gap-3",children:[u.jsxs("div",{children:[u.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-slate-600",children:"Otros participantes"}),u.jsx("p",{className:"mt-1 text-xs text-slate-500",children:"Personas, organizaciones o grupos que no figuran en el rol institucional."})]}),u.jsx("button",{type:"button",onClick:d,className:"inline-flex min-h-touch shrink-0 items-center rounded-xl border border-emerald-700 bg-white px-3 text-xs font-bold text-emerald-800 hover:bg-emerald-50",children:"+ Agregar"})]}),r.length===0?u.jsx("p",{className:"mt-3 text-xs text-slate-500",children:"Sin participantes externos registrados."}):u.jsx("div",{className:"mt-3 space-y-2",children:r.map((L,T)=>u.jsxs("div",{className:"grid gap-2 rounded-xl border border-slate-200 bg-white p-2 md:grid-cols-[1fr_1fr_auto]",children:[u.jsx("input",{className:o,value:L.nombre||"",onChange:f=>c(T,"nombre",f.target.value),placeholder:"Nombre, sigla o grupo","aria-label":`Nombre de otro participante ${T+1}`}),u.jsx("input",{className:o,value:L.contacto||"",onChange:f=>c(T,"contacto",f.target.value),placeholder:"Contacto: teléfono o correo","aria-label":`Contacto de otro participante ${T+1}`}),u.jsx("button",{type:"button",onClick:()=>p(T),className:"inline-flex min-h-touch items-center rounded-xl border border-red-300 px-3 text-xs font-bold text-red-800 hover:bg-red-50",children:"Eliminar"})]},`${T}-${L.nombre}`))})]})}function sl({valor:r,personas:i,cerrar:o,guardar:c,eliminar:d,actividadesPlan:p=[]}){var sn,Wn,an;const{puestos:L}=qt(),T=x.useMemo(()=>L.map(k=>k.nombre),[L]),{ref:f,titleId:C}=Hm({onClose:o}),y=jn(),{roleData:g={},setRoleData:N,reposiciones:w=[],setReposiciones:j,reglas:Q}=qt(),D=(Q==null?void 0:Q.horasJornada)??Pn,[V,Y]=x.useState(()=>({...r,categoria:r.categoria||"Otra actividad",horaInicio:r.horaInicio||"08:00",horaFin:r.horaFin||"16:00",funcionarios:r.funcionarios||[],otrosParticipantes:r.otrosParticipantes||[],observaciones:r.observaciones||""})),[te,Z]=x.useState(null),[pe,ie]=x.useState(!1),ee=(k,Ce)=>Y(we=>({...we,[k]:Ce})),Te=Number((sn=V.inicio)==null?void 0:sn.slice(0,4)),le=Number((Wn=V.inicio)==null?void 0:Wn.slice(5,7))-1,ue=Number((an=V.inicio)==null?void 0:an.slice(8,10)),Ee=El(Te),ge=k=>V.inicio&&Number.isFinite(Te)?Sa(i,g,Te,le,k,ue,Ee):"",ye=k=>{const Ce=ge(k);return Ce&&!Ki(Ce)},Ve=k=>cL(w,k,D),se="w-full min-h-touch rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100",Le=T.map(k=>({puesto:k,items:i.filter(Ce=>Ce.puestoOperativo===k)})),fe=x.useMemo(()=>LL(T),[T]),z=fe.includes(V.lugar)?V.lugar:"Otro",H=p.some(k=>k.id===V.id),G=V.unDia?V.inicio:V.fin||V.inicio,M=k=>k.id!==V.id&&k.inicio<=G&&(k.fin||k.inicio)>=V.inicio,R=k=>p.filter(Ce=>M(Ce)&&(Ce.funcionarios||[]).includes(k)),oe=k=>{V.funcionarios.includes(k)||ee("funcionarios",[...V.funcionarios,k])},me=k=>ee("funcionarios",V.funcionarios.filter(Ce=>Ce!==k)),B=k=>{if(V.funcionarios.includes(k))return me(k);if(ye(k)){Z({funcionario:k,iso:V.inicio,rol:ge(k),categoria:Oi(ge(k)),saldo:Ve(k)});return}return oe(k)},X=()=>{const{funcionario:k}=te;N&&N(Ce=>({...Ce,...FT({roleData:Ce,personas:i,year:Te,month:le,persona:k,dia:ue,categoria:"T",feriados:Ee})})),oe(k),Z(null)},Pe=()=>{const{funcionario:k,categoria:Ce}=te;j&&j(we=>[mL({reposiciones:we,funcionario:k,fecha:V.inicio,categoria:Ce,detalle:V.titulo||""}),...we]),oe(k),Z(null)},he=()=>{const{funcionario:k}=te;if(j){const Ce={id:`c${Date.now()}`,fecha:V.inicio,magnitud:"diaEntero",horas:0};j(we=>pL(we,k,Ce,D))}me(k),Z(null)},Me=y(H?"modalActividad.editar":"modalActividad.agregar"),Je=()=>c({...V,categoria:"Otra actividad",horaInicio:V.horaInicio||"08:00",horaFin:V.horaFin||"16:00",otrosParticipantes:(V.otrosParticipantes||[]).filter(k=>{var Ce;return(Ce=k.nombre)==null?void 0:Ce.trim()}).map(k=>({nombre:k.nombre.trim(),contacto:(k.contacto||"").trim()}))});return u.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-0 backdrop-blur-sm md:items-center md:p-4",onClick:k=>{k.target===k.currentTarget&&o()},children:[u.jsxs("div",{ref:f,role:"dialog","aria-modal":"true","aria-labelledby":C,tabIndex:-1,className:"max-h-[100dvh] w-full max-w-4xl overflow-hidden rounded-none bg-white shadow-2xl outline-none md:max-h-[94dvh] md:rounded-3xl",children:[u.jsxs("div",{className:"flex items-start justify-between gap-3 border-b border-slate-200 p-5",children:[u.jsxs("div",{children:[u.jsx("h3",{id:C,className:"text-lg font-semibold",children:Me}),u.jsx("p",{className:"text-sm text-slate-600",children:y("modalActividad.sub")})]}),u.jsx("button",{onClick:o,"aria-label":y("acciones.cerrar"),className:"-mr-1 inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl text-lg font-semibold text-slate-500 hover:bg-slate-100 hover:text-slate-700",children:"✕"})]}),u.jsxs("div",{className:"max-h-[72vh] overflow-y-auto p-5",children:[V.funcionarios.filter(k=>ye(k)).length>0&&u.jsxs("div",{className:"mb-4 rounded-2xl border border-amber-300 bg-amber-50 p-3",children:[u.jsx("p",{className:"text-xs font-bold uppercase tracking-wider text-amber-800",children:y("modalActividad.libresAsignados")}),u.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:V.funcionarios.filter(k=>ye(k)).map(k=>u.jsxs("button",{type:"button",onClick:()=>Z({funcionario:k,iso:V.inicio,rol:ge(k),categoria:Oi(ge(k)),saldo:Ve(k)}),className:"inline-flex min-h-touch items-center gap-1 rounded-xl border border-amber-400 bg-white px-3 text-xs font-bold text-amber-900 hover:bg-amber-100",children:[k," · ",y("modalActividad.resolver")]},k))})]}),u.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[u.jsxs("label",{className:"md:col-span-2",children:[u.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:y("modalActividad.titulo")}),u.jsxs("div",{className:"grid gap-2 md:grid-cols-[260px_1fr]",children:[u.jsxs("select",{className:se,value:V.titulo===zi?zi:"Otra",onChange:k=>ee("titulo",k.target.value==="Otra"?"":k.target.value),children:[hL.map(k=>u.jsx("option",{value:k,children:k},k)),u.jsx("option",{value:"Otra",children:y("modalActividad.otra")})]}),u.jsx("input",{className:se,value:V.titulo,onChange:k=>ee("titulo",k.target.value),placeholder:y("modalActividad.placeholderTitulo")})]})]}),u.jsxs("label",{children:[u.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:"Categoría"}),u.jsx("input",{className:se+" bg-slate-100",value:"Otra actividad",readOnly:!0})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[u.jsxs("label",{children:[u.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:"Hora inicio"}),u.jsx("input",{type:"time",className:se,value:V.horaInicio,onChange:k=>ee("horaInicio",k.target.value)})]}),u.jsxs("label",{children:[u.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:"Hora final"}),u.jsx("input",{type:"time",className:se,value:V.horaFin,onChange:k=>ee("horaFin",k.target.value)})]})]}),u.jsxs("label",{children:[u.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:y("modalActividad.fechaInicio")}),u.jsx("input",{type:"date",className:se+" [color-scheme:light] dark:[color-scheme:dark]",value:V.inicio,onChange:k=>ee("inicio",k.target.value)})]}),u.jsxs("label",{children:[u.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:y("modalActividad.fechaFinal")}),u.jsx("input",{type:"date",className:se+" [color-scheme:light] dark:[color-scheme:dark]",value:V.unDia?V.inicio:V.fin,disabled:V.unDia,onChange:k=>ee("fin",k.target.value)})]}),u.jsxs("label",{className:"flex items-center gap-2 rounded-xl border border-slate-300 p-3 text-sm font-semibold",children:[u.jsx("input",{type:"checkbox",checked:V.unDia,onChange:k=>Y(Ce=>({...Ce,unDia:k.target.checked,fin:k.target.checked?Ce.inicio:Ce.fin}))}),y("modalActividad.unDia")]}),u.jsxs("label",{className:"flex items-center gap-2 rounded-xl border border-orange-300 bg-orange-50 p-3 text-sm font-semibold text-orange-950",children:[u.jsx("input",{type:"checkbox",checked:V.viatico,onChange:k=>ee("viatico",k.target.checked)}),y("modalActividad.requiereViatico")]}),u.jsxs("label",{className:"md:col-span-2",children:[u.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:y("modalActividad.lugar")}),u.jsxs("div",{className:"grid gap-2",children:[u.jsxs("select",{className:se,value:z,onChange:k=>ee("lugar",k.target.value==="Otro"?"":k.target.value),children:[fe.map(k=>u.jsx("option",{value:k,children:k},k)),u.jsx("option",{value:"Otro",children:y("modalActividad.otro")})]}),z==="Otro"&&u.jsx("input",{className:se,value:V.lugar,onChange:k=>ee("lugar",k.target.value),placeholder:y("modalActividad.placeholderLugar")})]})]})]}),u.jsxs("div",{className:"mt-5",children:[u.jsxs("div",{className:"mb-2 flex flex-wrap items-center justify-between gap-2",children:[u.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-slate-500",children:y("modalActividad.participantes")}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsxs("label",{className:"flex items-center gap-1.5 rounded-full border border-sky-300 bg-sky-50 px-2.5 py-1 text-[11px] font-bold text-sky-900",children:[u.jsx("input",{type:"checkbox",checked:pe,onChange:k=>ie(k.target.checked)}),y("modalActividad.soloSaldo")]}),u.jsx(Vt,{className:"border-emerald-200 bg-emerald-100 text-emerald-900",children:y("modalActividad.seleccionados",{n:V.funcionarios.length})})]})]}),u.jsx("div",{className:"grid gap-3 md:grid-cols-3",children:Le.map(k=>{const Ce=pe?k.items.filter(we=>Ve(we.nombre)>0):k.items;return pe&&Ce.length===0?null:u.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-slate-50 p-3",children:[u.jsx("div",{className:"mb-2 text-xs font-bold uppercase tracking-wider text-slate-500",children:k.puesto}),u.jsx("div",{className:"space-y-1.5",children:Ce.map(we=>{const Dn=R(we.nombre),kn=V.funcionarios.includes(we.nombre);return u.jsxs("div",{className:`rounded-xl border px-2 py-2 text-xs font-bold ${kn?"border-emerald-300 bg-emerald-100 text-emerald-950":Dn.length?"border-yellow-300 bg-yellow-50 text-yellow-950":"border-slate-200 bg-white text-slate-700"}`,children:[u.jsxs("label",{className:"flex items-center gap-2",children:[u.jsx("input",{type:"checkbox",checked:kn,onChange:()=>B(we.nombre)}),we.nombre]}),(ye(we.nombre)||Ve(we.nombre)>0)&&u.jsxs("div",{className:"mt-1 flex flex-wrap gap-1",children:[!kn&&ye(we.nombre)&&u.jsx("span",{className:"rounded-full border border-amber-300 bg-amber-100 px-1.5 py-0.5 text-[10px] font-bold text-amber-900",children:y("modalActividad.diaLibre")}),Ve(we.nombre)>0&&u.jsx("span",{className:"rounded-full border border-sky-300 bg-sky-100 px-1.5 py-0.5 text-[10px] font-bold text-sky-900",children:y("modalActividad.saldoFavorMonto",{saldo:sp(Ve(we.nombre),D)})})]}),Dn.length>0&&u.jsxs("div",{className:"mt-2 rounded-lg border border-yellow-300 bg-yellow-100 p-2 text-[11px] leading-snug text-yellow-950",children:[u.jsx("div",{className:"font-bold",children:y("modalActividad.avisoTraslape")}),u.jsx("div",{className:"mt-1 font-bold",children:Dn.map(jt=>jt.titulo).join(" · ")}),u.jsx("button",{type:"button",onClick:()=>oe(we.nombre),className:"mt-2 inline-flex min-h-touch items-center rounded-lg bg-yellow-700 px-3 text-[10px] font-bold text-white hover:bg-yellow-800",children:y("modalActividad.agregarAunAsi")})]})]},we.id)})})]},k.puesto)})})]}),u.jsx(eh,{participantes:V.otrosParticipantes,onChange:k=>ee("otrosParticipantes",k),inputClass:se}),u.jsxs("label",{className:"mt-5 block",children:[u.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:y("modalActividad.obs")}),u.jsx("textarea",{className:`${se} min-h-24`,value:V.observaciones,onChange:k=>ee("observaciones",k.target.value),placeholder:y("modalActividad.placeholderObs")})]})]}),u.jsxs("div",{className:"flex flex-wrap justify-between gap-2 border-t border-slate-200 bg-slate-50 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]",children:[u.jsx("div",{children:H&&u.jsx("button",{onClick:()=>d(V.id),className:"min-h-touch rounded-xl border border-red-300 bg-white px-4 py-2 text-sm font-semibold text-red-800 hover:bg-red-50",children:y("acciones.eliminar")})}),u.jsxs("div",{className:"flex gap-2",children:[u.jsx("button",{onClick:o,className:"min-h-touch rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50",children:y("acciones.cancelar")}),u.jsx("button",{onClick:Je,className:"min-h-touch rounded-xl bg-emerald-800 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700",children:y("modalActividad.guardarActividad")})]})]})]}),te&&u.jsx(Xv,{data:te,hj:D,cerrar:()=>Z(null),onModificarRol:X,onReposicion:Pe,onReponer:he,onEditarFecha:()=>Z(null)})]})}function nh(r,i,o){if(!Array.isArray(r)||!i||i.id==null||r.some(p=>(p==null?void 0:p.id)===i.id))return r;const c=Number.isInteger(o)?o:r.length,d=Math.max(0,Math.min(c,r.length));return[...r.slice(0,d),i,...r.slice(d)]}function lp(r,i){const o=jn(),{conDeshacer:c,exito:d}=fm();return x.useCallback(p=>{const L=r||[],T=L.findIndex(y=>y.id===p);if(T<0)return;const f=L[T],C=String(f.titulo||"").trim()||o("actividad.sinTitulo");i(y=>y.filter(g=>g.id!==p)),c(o("actividad.eliminada",{titulo:C}),()=>{i(y=>nh(y,f,T)),d(o("actividad.restaurada",{titulo:C}))},{detalle:o("actividad.eliminadaDetalle")})},[r,i,c,d,o])}function _i({label:r}){const[i,...o]=String(r).split(" ");return o.length===0?r:u.jsxs(u.Fragment,{children:[i,u.jsx("br",{className:"sm:hidden"}),u.jsx("span",{className:"hidden sm:inline",children:" "}),o.join(" ")]})}function Ws({label:r,n:i,children:o,defaultOpen:c=!1}){const[d,p]=x.useState(c);return u.jsxs("div",{children:[u.jsxs("button",{type:"button",onClick:()=>p(L=>!L),"aria-expanded":d,className:"mb-1.5 flex min-h-touch w-full items-center gap-2 text-left active:scale-95",children:[u.jsx(Ze,{name:d?"chevronDown":"chevronRight",size:14,className:"shrink-0 text-ink-subtle"}),u.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider text-ink-muted",children:r}),u.jsx("span",{className:"rounded-full bg-surface-alt px-2 py-0.5 text-[10px] font-semibold text-ink-muted",children:i}),u.jsx("span",{className:"h-px flex-1 bg-line/50"})]}),d&&o]})}function Zs({trabajada:r,reposicion:i,t:o}){return!r&&!i?null:u.jsxs(u.Fragment,{children:[r&&u.jsxs(Vt,{className:"border-amber-300 bg-amber-100 text-amber-900",children:["⚑ ",r.folio," · ",Zv(r,o)," · ",o(`reposicion.estado.${r.estadoCalc||"Pendiente"}`).toLowerCase()]}),i&&u.jsxs(Vt,{className:"border-sky-300 bg-sky-100 text-sky-900",children:["⟲ ",i.folio," · ",o("reposicion.marca.reposicionDe",{fecha:ot(i.fecha)})]})]})}function th({diaVista:r,setDiaVista:i,personas:o,actividadesPlan:c,setActividadesPlan:d,roleData:p,reposiciones:L=[],hj:T}){const f=jn(),C=ip(),{puestos:y,reglas:g}=qt(),N=g==null?void 0:g.puestosRequierenVisitantesDiario,w=x.useMemo(()=>y.map(b=>b.nombre),[y]),{trabajadas:j,reposiciones:Q}=iL(L,T),D=b=>({trabajada:j[`${b}|${r}`],reposicion:Q[`${b}|${r}`]}),[V,Y]=x.useState(null),[te,Z]=x.useState("general"),[pe,ie]=x.useState(""),[ee,Te,le]=r.split("-").map(Number),ue=Te-1,Ee=El(ee),ge=o.filter(b=>b.estado!=="Inactivo"),ye=[0,6].includes(new Date(r+"T12:00:00").getDay()),Ve=G1[new Date(r+"T12:00:00").getDay()],se=ge.map(b=>{const O=Sa(o,p,ee,ue,b.nombre,le,Ee),ne=Oi(O),xe=Ki(O),yn=tm(O),Mn=Gi(c,r).filter(ct=>(ct.funcionarios||[]).includes(b.nombre));return{...b,rol:O,cat:ne,enTurno:xe,enTeletrabajo:yn,acts:Mn,tieneActividad:Mn.length>0,tieneViatico:Mn.some(ct=>ct.viatico)}}),Le=se.filter(b=>b.enTurno&&b.tieneActividad),fe=se.filter(b=>b.enTurno&&!b.tieneActividad),z=se.filter(b=>!b.enTurno),H=se.filter(b=>b.tieneViatico),G=(b,O)=>String(b||"").localeCompare(String(O||""),"es-CR",{sensitivity:"base"}),M=new Map(ge.map(b=>[b.nombre,b])),R=Gi(c,r).map(b=>({...b,funcionarios:[...b.funcionarios||[]].sort(G)})).sort((b,O)=>G(b.funcionarios[0]||"￿",O.funcionarios[0]||"￿")||G(b.titulo,O.titulo)),oe=[...new Set(R.flatMap(b=>b.funcionarios))].sort(G),me=[...new Set(oe.map(b=>{var O;return(O=M.get(b))==null?void 0:O.puestoOperativo}).filter(Boolean))].sort(G),B=new Set(se.filter(b=>b.enTeletrabajo).map(b=>b.nombre)),X=te==="funcionario"?oe:te==="puesto"?me:te==="trabajo"?[f("dia.filtroActividades.presencial"),f("dia.filtroActividades.teletrabajo")]:[],Pe=X.includes(pe)?pe:X[0]||"",he=R.filter(b=>{if(te==="trabajo"){const O=b.funcionarios.some(ne=>B.has(ne));return Pe===f("dia.filtroActividades.teletrabajo")?O:!O}return te==="funcionario"?b.funcionarios.includes(Pe):te==="puesto"?b.funcionarios.some(O=>{var ne;return((ne=M.get(O))==null?void 0:ne.puestoOperativo)===Pe}):!0}),Me=x.useMemo(()=>Gv({actividadesPlan:c,iso:r,personas:o,roleData:p,year:ee,month:ue,dia:le,feriados:Ee,puestos:w,puestosRequieren:N}),[c,r,o,p,ee,ue,le,Ee,w,N]),Je=x.useMemo(()=>new Map(Me.map(b=>[b.puesto,b])),[Me]),sn=x.useMemo(()=>Me.filter(b=>b.critico),[Me]),Wn=w.map(b=>{const O=se.filter(xe=>(xe.puestoOperativo||"")===b),ne=O.filter(xe=>xe.enTurno);return{puesto:b,fuera:O.length-ne.length,turno:ne.length,conActividad:ne.filter(xe=>xe.tieneActividad).length,sinActividad:ne.filter(xe=>!xe.tieneActividad).length,teletrabajo:ne.filter(xe=>xe.enTeletrabajo).length}}),an=Wn.reduce((b,O)=>({fuera:b.fuera+O.fuera,turno:b.turno+O.turno,conActividad:b.conActividad+O.conActividad,sinActividad:b.sinActividad+O.sinActividad,teletrabajo:b.teletrabajo+O.teletrabajo}),{fuera:0,turno:0,conActividad:0,sinActividad:0,teletrabajo:0}),k={L:"Libre",V:"Vacaciones",I:"Incapacidad",O:"Otro","":"Sin marcar"},Ce={L:"border-amber-700 bg-amber-700 text-white",V:"border-sky-700 bg-sky-700 text-white",I:"border-red-700 bg-red-700 text-white",O:"border-violet-700 bg-violet-700 text-white","":"border-slate-500 bg-slate-500 text-white"},we=z.reduce((b,O)=>{const ne=O.cat||"";return b[ne]||(b[ne]=[]),b[ne].push(O),b},{}),Dn=b=>{const O=w.map(xe=>({key:xe,label:xe.replace("Puesto ",""),items:b.filter(yn=>(yn.puestoOperativo||"")===xe)})),ne=b.filter(xe=>!w.includes(xe.puestoOperativo||""));return ne.length&&O.push({key:"__sin__",label:f("funcionarios.sinPuesto"),items:ne}),O.filter(xe=>xe.items.length>0)},kn=b=>{const O=new Date(r+"T12:00:00");O.setDate(O.getDate()+b),i(`${O.getFullYear()}-${qn(O.getMonth()+1)}-${qn(O.getDate())}`)},jt=b=>{if(!b.titulo.trim())return;const O={...b,fin:b.unDia?b.inicio:b.fin||b.inicio};O.fin<O.inicio&&(O.fin=O.inicio),d(ne=>ne.some(xe=>xe.id===O.id)?ne.map(xe=>xe.id===O.id?O:xe):[...ne,O]),Y(null)},Dt=lp(c,d),lt=b=>{Y(null),Dt(b)},Wt=(b=[],O="")=>({id:`a${Date.now()}`,titulo:"",inicio:r,fin:r,unDia:!0,funcionarios:b,lugar:O,observaciones:"",viatico:!1}),Er=$v({onSwipeLeft:()=>kn(1),onSwipeRight:()=>kn(-1)}),Cr=V&&c.some(b=>b.id===V.id)?f("dia.editarActividad",{defaultValue:"Editar actividad"}):f("dia.nuevaActividad",{defaultValue:"Nueva actividad"}),ba=V?u.jsx(sl,{valor:V,personas:ge,cerrar:()=>Y(null),guardar:jt,eliminar:lt,actividadesPlan:c}):null;return u.jsxs("section",{ref:Er,className:"space-y-4",children:[u.jsxs("div",{className:"flex items-center gap-2 rounded-lg border border-line bg-surface p-2 sm:gap-3 sm:p-3",children:[u.jsx("button",{onClick:()=>kn(-1),"aria-label":f("dia.diaAnterior"),className:"inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl border border-line bg-surface text-ink-muted transition-colors hover:bg-surface-alt active:scale-95",children:u.jsx(Ze,{name:"chevronLeft",size:20})}),u.jsxs("div",{className:"flex min-w-0 flex-1 flex-col items-center gap-0.5",children:[u.jsxs("span",{className:"truncate text-[10px] font-semibold uppercase tracking-wider text-ink-muted sm:text-xs",children:[Ve," · ",Km[ue]," ",ee]}),u.jsx("input",{type:"date",value:r,onChange:b=>b.target.value&&i(b.target.value),"aria-label":f("dia.seleccionarFecha"),className:"min-h-touch w-full max-w-[13rem] rounded-xl border border-line bg-surface px-2 py-1 text-center text-sm font-semibold text-ink outline-none focus:border-brand [color-scheme:light] dark:[color-scheme:dark]"})]}),u.jsx("button",{onClick:()=>kn(1),"aria-label":f("dia.diaSiguiente"),className:"inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl border border-line bg-surface text-ink-muted transition-colors hover:bg-surface-alt active:scale-95",children:u.jsx(Ze,{name:"chevronRight",size:20})})]}),u.jsxs("div",{className:"grid gap-4 md:grid-cols-[minmax(19rem,0.85fr)_minmax(0,1.25fr)] md:items-start xl:grid-cols-[minmax(24rem,0.8fr)_minmax(0,1.4fr)]",children:[u.jsxs(Ma,{title:f("dia.porPuesto"),icon:"📍",children:[sn.length>0&&u.jsxs("div",{role:"alert",className:"mb-3 rounded-xl border border-critical bg-critical-soft p-3",children:[u.jsxs("p",{className:"flex items-center gap-2 text-sm font-bold text-critical-fg",children:[u.jsx(Ze,{name:"danger",size:16}),f("dia.coberturaCritica",{n:sn.length})]}),u.jsx("ul",{className:"mt-1 space-y-0.5 text-xs font-semibold text-critical-fg",children:sn.map(b=>u.jsx("li",{children:b.soloRemoto?f("dia.coberturaCriticaRemoto",{puesto:b.puesto.replace("Puesto ",""),n:b.asignados.length}):f("dia.coberturaCriticaSinNadie",{puesto:b.puesto.replace("Puesto ","")})},b.puesto))}),u.jsx("p",{className:"mt-1 text-[11px] font-medium text-critical-fg opacity-90",children:f("dia.coberturaCriticaAyuda")})]}),u.jsx("div",{className:"overflow-hidden rounded-lg border border-line",children:u.jsxs("table",{className:"w-full table-fixed border-collapse text-sm",children:[u.jsx("thead",{className:"bg-surface-alt text-[9px] uppercase leading-[1.15] tracking-tight text-ink-muted sm:text-[11px] sm:tracking-wide",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"w-[26%] px-1.5 py-2 text-left sm:px-3 sm:py-3",children:f("dia.th.puesto")}),u.jsx("th",{scope:"col",className:"px-0 py-2 text-center sm:px-3 sm:py-3",children:u.jsx(_i,{label:f("dia.th.fuera")})}),u.jsx("th",{scope:"col",className:"px-0 py-2 text-center sm:px-3 sm:py-3",children:u.jsx(_i,{label:f("dia.th.enTurno")})}),u.jsx("th",{scope:"col",className:"px-0 py-2 text-center sm:px-3 sm:py-3",children:u.jsx(_i,{label:f("dia.th.conActividad")})}),u.jsx("th",{scope:"col",className:"px-0 py-2 text-center sm:px-3 sm:py-3",children:u.jsx(_i,{label:f("dia.th.sinActividad")})})]})}),u.jsx("tbody",{className:"divide-y divide-line",children:Wn.map(({puesto:b,fuera:O,turno:ne,conActividad:xe,sinActividad:yn})=>{var Mn,ct;return u.jsxs("tr",{className:"hover:bg-surface-alt",children:[u.jsxs("th",{scope:"row",className:`px-1.5 py-2 text-left text-[11px] font-semibold sm:px-3 sm:py-3 sm:text-sm ${(Mn=Je.get(b))!=null&&Mn.critico?"border-l-4 border-l-critical bg-critical-soft/40 font-bold text-critical-fg":"text-ink"}`,children:[b.replace("Puesto ",""),((ct=Je.get(b))==null?void 0:ct.critico)&&u.jsxs("span",{className:"sr-only",children:[" ",f("dia.coberturaCriticaAria",{puesto:b.replace("Puesto ","")})]})]}),u.jsx("td",{className:`px-1 py-2 text-center text-base font-semibold sm:px-3 sm:py-3 sm:text-lg ${O>0?"text-ink-muted":"text-ink-subtle"}`,children:O}),u.jsx("td",{className:"px-1 py-2 text-center text-base font-semibold text-ok sm:px-3 sm:py-3 sm:text-lg",children:ne}),u.jsx("td",{className:"px-1 py-2 text-center text-base font-semibold text-info sm:px-3 sm:py-3 sm:text-lg",children:xe}),u.jsx("td",{className:`px-1 py-2 text-center text-base font-semibold sm:px-3 sm:py-3 sm:text-lg ${yn>0?"text-warning":"text-ink-subtle"}`,children:yn})]},b)})}),u.jsx("tfoot",{children:u.jsxs("tr",{className:"border-t-2 border-line-strong bg-surface-alt",children:[u.jsx("th",{scope:"row",className:"px-1.5 py-2 text-left text-[11px] font-bold text-ink sm:px-3 sm:py-3 sm:text-sm",children:f("dia.th.total")}),u.jsx("td",{className:"px-1 py-2 text-center text-base font-bold text-ink-muted sm:px-3 sm:py-3 sm:text-lg",children:an.fuera}),u.jsx("td",{className:"px-1 py-2 text-center text-base font-bold text-ok sm:px-3 sm:py-3 sm:text-lg",children:an.turno}),u.jsx("td",{className:"px-1 py-2 text-center text-base font-bold text-info sm:px-3 sm:py-3 sm:text-lg",children:an.conActividad}),u.jsx("td",{className:`px-1 py-2 text-center text-base font-bold sm:px-3 sm:py-3 sm:text-lg ${an.sinActividad>0?"text-warning":"text-ink-subtle"}`,children:an.sinActividad})]})})]})}),an.teletrabajo>0&&u.jsx("p",{className:"mt-2 rounded-xl border border-cyan-300 bg-cyan-50 p-2 text-xs font-semibold text-cyan-950",children:f("dia.teletrabajoResumen",{n:an.teletrabajo})})]}),u.jsxs(Ma,{title:f("dia.actividadesTituloCorto",{n:R.length}),ariaLabel:f("dia.actividadesTitulo",{n:R.length}),icon:"🗓️",collapsible:!0,action:u.jsxs("button",{id:"dia-boton-nueva-actividad",onClick:()=>Y(Wt()),className:"inline-flex min-h-touch items-center gap-1 rounded-xl bg-emerald-800 px-3 py-2 text-xs font-semibold text-white transition-all hover:bg-emerald-700 active:scale-95 active:brightness-90",children:[u.jsx(Ze,{name:"plus",size:14}),f("dia.nuevaCorta")]}),children:[u.jsxs("div",{className:"mb-4 rounded-xl border border-line bg-surface-inset p-3",children:[u.jsx("div",{className:"mb-2 text-xs font-bold uppercase tracking-wide text-ink-muted",children:f("dia.filtroActividades.mostrar")}),u.jsx("div",{role:"group","aria-label":f("dia.filtroActividades.aria"),className:"grid grid-cols-2 gap-1 rounded-xl bg-surface-alt p-1 sm:grid-cols-4",children:[["general",f("dia.filtroActividades.general")],["trabajo",f("dia.filtroActividades.trabajo")],["funcionario",f("dia.filtroActividades.funcionario")],["puesto",f("dia.filtroActividades.puesto")]].map(([b,O])=>u.jsx("button",{type:"button","aria-pressed":te===b,onClick:()=>{Z(b),ie("")},className:`min-h-touch rounded-lg px-2 py-2 text-xs font-semibold transition-colors sm:text-sm ${te===b?"bg-surface text-brand shadow-sm":"text-ink-muted hover:bg-surface hover:text-ink"}`,children:O},b))}),te!=="general"&&u.jsxs("label",{className:"mt-3 block text-xs font-semibold text-ink-muted",children:[f(te==="funcionario"?"dia.filtroActividades.seleccionarFuncionario":"dia.filtroActividades.seleccionarPuesto"),u.jsx("select",{value:Pe,onChange:b=>ie(b.target.value),className:"mt-1 min-h-touch w-full rounded-xl border border-line bg-surface px-3 text-sm font-semibold text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20",children:X.map(b=>u.jsx("option",{value:b,children:te==="puesto"?b.replace("Puesto ",""):b},b))})]}),u.jsx("div",{"aria-live":"polite",className:"mt-2 text-xs text-ink-muted",children:f("dia.filtroActividades.resultados",{n:he.length,total:R.length})})]}),he.length===0?u.jsx("div",{className:"rounded-xl border border-dashed border-line p-6 text-center text-sm text-ink-muted",children:f("dia.sinActividades")}):u.jsx("div",{className:"space-y-3",children:he.map(b=>{const O=Kv(b,le,ee,ue,o,p,Ee,N);return u.jsxs("div",{"data-actividad-id":b.id,className:`rounded-lg p-4 ${O.length?"border-l-4 border-red-600 bg-surface":b.viatico?"border border-viatico/40 bg-viatico-soft":"border border-ok/40 bg-ok-soft"}`,children:[u.jsxs("div",{className:"flex items-start justify-between gap-2",children:[u.jsxs("div",{className:"min-w-0 flex-1",children:[u.jsx("div",{className:"break-words font-semibold text-ink",children:b.titulo}),b.lugar&&u.jsxs("div",{className:"mt-0.5 text-xs text-ink-muted",children:["📍 ",b.lugar]}),b.inicio!==(b.fin||b.inicio)&&u.jsxs("div",{className:"mt-0.5 text-xs text-ink-muted",children:[ot(b.inicio)," → ",ot(b.fin)]})]}),u.jsx("button",{onClick:()=>Y({...b}),className:"inline-flex min-h-touch shrink-0 items-center rounded-lg border border-line bg-surface px-3 text-xs font-semibold text-ink transition-all hover:bg-surface-alt active:scale-95",children:f("acciones.editar")})]}),(b.viatico||O.length>0)&&u.jsxs("div",{className:"mt-1.5 flex flex-wrap items-center gap-1.5",children:[b.viatico&&u.jsx(Vt,{className:"border-orange-300 bg-orange-100 text-orange-900",children:f("dia.viaticoBadge")}),O.length>0&&u.jsx(Vt,{className:"border-red-300 bg-red-100 text-red-900",children:f("dia.conflictosBadge",{n:O.length,plural:Ad(O.length)})})]}),b.funcionarios.length>0&&u.jsx("div",{className:"mt-2.5 flex flex-wrap gap-1",children:b.funcionarios.map(ne=>u.jsxs("span",{title:B.has(ne)?f("dia.teletrabajoBadge"):void 0,className:`rounded-full border px-2 py-0.5 text-[11px] font-semibold ${O.includes(ne)?"border-red-400 bg-surface text-critical":B.has(ne)?"border-cyan-500 bg-surface text-cyan-800":"border-ok/50 bg-surface text-ok-fg"}`,children:[ne,O.includes(ne)?" ⚠":"",!O.includes(ne)&&B.has(ne)?" ⌂":""]},ne))})]},b.id)})})]})]}),u.jsxs("div",{className:"grid gap-4 xl:grid-cols-2 xl:items-start",children:[u.jsx(Ma,{title:f("dia.enTurnoConActTitulo",{n:Le.length}),icon:"✅",collapsible:!0,defaultOpen:!1,children:Le.length===0?u.jsx("p",{className:"text-sm text-ink-muted",children:f("dia.enTurnoConActVacio")}):u.jsx("div",{className:"space-y-4",children:Dn(Le).map(b=>u.jsx(Ws,{label:b.label,n:b.items.length,children:u.jsx("div",{className:"divide-y divide-line/50",children:b.items.map(O=>u.jsxs("div",{className:"flex items-start gap-3 py-3",children:[u.jsx(Ri,{name:O.nombre}),u.jsxs("div",{className:"min-w-0 flex-1",children:[u.jsxs("div",{className:"flex flex-wrap items-center gap-1.5",children:[u.jsx("span",{className:"break-words text-sm font-semibold text-ink",children:O.nombre}),u.jsx(Vt,{className:Yd(O.rol,ye),children:O.rol}),O.tieneViatico&&u.jsx(Vt,{className:"border-orange-600 bg-orange-600 text-white",children:f("dia.viaticoBadge")}),u.jsx(Zs,{...D(O.nombre),t:f})]}),u.jsx("div",{className:"mt-1.5 flex flex-wrap gap-1",children:O.acts.map(ne=>u.jsx("span",{className:"rounded-full border border-ok/50 bg-surface px-2 py-0.5 text-[11px] text-ok-fg",children:ne.titulo},ne.id))})]})]},O.id))})},b.key))})}),u.jsx(Ma,{title:f("dia.enTurnoSinActTitulo",{n:fe.length}),icon:fe.length>0?"⚠️":"✅",collapsible:!0,children:fe.length===0?u.jsx("p",{className:"text-sm text-ink-muted",children:f("dia.enTurnoSinActVacio")}):u.jsx("div",{className:"space-y-4",children:Dn(fe).map(b=>u.jsx(Ws,{label:b.label,n:b.items.length,children:u.jsx("div",{className:"divide-y divide-line/50",children:b.items.map(O=>u.jsxs("div",{className:"py-3",children:[u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(Ri,{name:O.nombre}),u.jsxs("div",{className:"min-w-0 flex-1",children:[u.jsxs("div",{className:"flex flex-wrap items-center gap-1.5",children:[u.jsx("span",{className:"break-words text-sm font-semibold text-ink",children:O.nombre}),u.jsx(Vt,{className:Yd(O.rol,ye),children:O.rol}),u.jsx(Zs,{...D(O.nombre),t:f})]}),u.jsx("div",{className:"mt-0.5 text-xs text-ink-muted",children:O.puesto})]})]}),u.jsx("button",{onClick:()=>Y(Wt([O.nombre],O.puestoOperativo||"")),className:"mt-2 inline-flex min-h-touch w-full items-center justify-center rounded-xl bg-warning px-3 py-2 text-sm font-semibold text-ink-inverse transition-all hover:opacity-90 active:scale-95 sm:w-auto",children:f("dia.asignar")})]},O.id))})},b.key))})}),u.jsx(Ma,{title:f("dia.fueraDeTurnoTitulo",{n:z.length}),icon:"📴",collapsible:!0,defaultOpen:!1,children:z.length===0?u.jsx("p",{className:"text-sm text-ink-muted",children:f("dia.fueraDeTurnoVacio")}):u.jsx("div",{className:"space-y-4",children:Object.entries(we).sort(([b],[O])=>(k[b]||"z").localeCompare(k[O]||"z")).map(([b,O])=>u.jsxs("div",{children:[u.jsxs("div",{className:"mb-2 flex items-center gap-2",children:[u.jsx("span",{className:`rounded-full px-2.5 py-0.5 text-xs font-semibold ${Ce[b]}`,children:k[b]||"Sin marcar"}),u.jsx("span",{className:"text-xs text-ink-muted",children:f("dia.nFuncionarios",{n:O.length,plural:Ad(O.length)})})]}),u.jsx("div",{className:"flex flex-wrap gap-2",children:O.map(ne=>u.jsxs("div",{className:"flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2",children:[u.jsx(Ri,{name:ne.nombre}),u.jsxs("div",{children:[u.jsx("div",{className:"text-sm font-semibold text-ink",children:ne.nombre}),u.jsx("div",{className:"text-[10px] text-ink-muted",children:(ne.puestoOperativo||"").replace("Puesto ","")}),u.jsx("div",{className:"mt-1 flex flex-wrap gap-1",children:u.jsx(Zs,{...D(ne.nombre),t:f})})]})]},ne.id))})]},b))})}),H.length>0&&u.jsx(Ma,{title:f("dia.conViaticoTitulo",{n:H.length}),icon:"💵",collapsible:!0,defaultOpen:!1,children:u.jsx("div",{className:"space-y-4",children:Dn(H).map(b=>u.jsx(Ws,{label:b.label,n:b.items.length,children:u.jsx("div",{className:"divide-y divide-line/50",children:b.items.map(O=>u.jsxs("div",{className:"flex items-start gap-3 py-2.5",children:[u.jsx(Ri,{name:O.nombre}),u.jsxs("div",{className:"min-w-0 flex-1",children:[u.jsx("div",{className:"font-semibold text-ink",children:O.nombre}),u.jsx("div",{className:"mt-1 flex flex-wrap gap-1",children:O.acts.filter(ne=>ne.viatico).map(ne=>u.jsxs("span",{className:"rounded-full border border-viatico/40 bg-viatico-soft px-2 py-0.5 text-[11px] text-viatico-fg",children:[ne.titulo,ne.lugar?` · ${ne.lugar}`:""]},ne.id))})]})]},O.id))})},b.key))})})]}),V&&(C?u.jsx(yl,{open:!!V,onClose:()=>Y(null),title:Cr,children:ba}):ba)]})}function ah({enTurno:r,sinActividad:i,nAlertas:o=0,onIrAlertas:c,onAyuda:d}){const p=jn();return u.jsxs("div",{className:"space-y-3 md:hidden",children:[u.jsxs("div",{className:"flex items-center justify-between gap-2",children:[u.jsx("h2",{className:"text-base font-bold text-ink",children:p("dia.resumenTitulo")}),u.jsx("button",{type:"button",onClick:d,"aria-label":p("dia.ayudaAria"),className:"inline-flex min-h-touch min-w-touch items-center justify-center rounded-xl border border-line bg-surface text-ink-muted hover:bg-surface-alt",children:u.jsx(Ze,{name:"info",size:22})})]}),u.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[u.jsxs("div",{className:"rounded-xl border border-ok/30 bg-ok-soft px-2 py-3 text-center",children:[u.jsx("div",{className:"text-3xl font-bold tabular-nums text-ok-fg",children:r}),u.jsx("div",{className:"mt-1 text-sm font-semibold leading-tight text-ok-fg",children:p("dia.resumenEnTurno")})]}),u.jsxs("div",{className:`rounded-xl border px-2 py-3 text-center ${i>0?"border-warning/40 bg-warning-soft":"border-line bg-surface"}`,children:[u.jsx("div",{className:`text-3xl font-bold tabular-nums ${i>0?"text-warning-fg":"text-ink-muted"}`,children:i}),u.jsx("div",{className:`mt-1 text-sm font-semibold leading-tight ${i>0?"text-warning-fg":"text-ink-muted"}`,children:p("dia.resumenSinActividad")})]}),u.jsxs("button",{type:"button",onClick:c,className:`min-h-touch rounded-xl border px-2 py-3 text-center active:scale-95 ${o>0?"border-critical/40 bg-critical-soft":"border-line bg-surface"}`,children:[u.jsx("div",{className:`text-3xl font-bold tabular-nums ${o>0?"text-critical-fg":"text-ink-muted"}`,children:o}),u.jsx("div",{className:`mt-1 text-sm font-semibold leading-tight ${o>0?"text-critical-fg":"text-ink-muted"}`,children:p("dia.resumenAlertas")})]})]}),i>0&&u.jsx("p",{className:"text-sm leading-relaxed text-ink-muted",children:p("dia.resumenPistaSinActividad")})]})}function rh({open:r,onClose:i,topic:o="dia"}){const c=jn(),d=c(`help.${o}.titulo`),p=c(`help.${o}.lineas`),L=Array.isArray(p)?p:[String(p)];return u.jsxs(yl,{open:r,onClose:i,title:d,snapPoint:"half",children:[u.jsx("ol",{className:"list-decimal space-y-3 pl-5 text-base leading-relaxed text-ink",children:L.map((T,f)=>u.jsx("li",{children:T},f))}),u.jsx("button",{type:"button",onClick:i,className:"mt-6 inline-flex min-h-touch w-full items-center justify-center rounded-xl bg-brand px-4 text-base font-semibold text-brand-fg",children:c("acciones.cerrar")})]})}function ih(r){const{diaVista:i,setDiaVista:o,personas:c,actividadesPlan:d,setActividadesPlan:p,roleData:L,reposiciones:T,hj:f,nAlertas:C=0,setView:y}=r,g=jn(),N=ip(),[w,j]=x.useState(null),[Q,D]=x.useState(!1),[V,Y,te]=String(i||"").split("-").map(Number),Z=(Y||1)-1,pe=El(V||new Date().getFullYear()),{enTurno:ie,sinActividad:ee}=x.useMemo(()=>{const se=(c||[]).filter(z=>z.estado!=="Inactivo");let Le=0,fe=0;for(const z of se){const H=Sa(c,L,V,Z,z.nombre,te,pe);if(!Ki(H))continue;Le+=1,Gi(d,i).filter(M=>(M.funcionarios||[]).includes(z.nombre)).length===0&&(fe+=1)}return{enTurno:Le,sinActividad:fe}},[c,L,V,Z,te,pe,d,i]),[Te,le]=x.useState(!1);x.useEffect(()=>{const se=document.getElementById("dia-boton-nueva-actividad");if(!se||typeof IntersectionObserver>"u")return;const Le=new IntersectionObserver(([fe])=>le(fe.isIntersecting),{rootMargin:"-70px 0px -90px 0px"});return Le.observe(se),()=>Le.disconnect()},[]);const ue=c.filter(se=>se.estado!=="Inactivo"),Ee=x.useCallback(()=>({id:`a${Date.now()}`,titulo:"",inicio:i,fin:i,unDia:!0,funcionarios:[],lugar:"",observaciones:"",viatico:!1}),[i]),ge=x.useCallback(se=>{if(!se.titulo.trim())return;const Le={...se,fin:se.unDia?se.inicio:se.fin||se.inicio};Le.fin<Le.inicio&&(Le.fin=Le.inicio),p(fe=>fe.some(z=>z.id===Le.id)?fe.map(z=>z.id===Le.id?Le:z):[...fe,Le]),j(null)},[p]),ye=lp(d,p),Ve=x.useCallback(se=>{j(null),ye(se)},[ye]);return u.jsxs("div",{className:"relative mx-auto w-full max-w-md md:max-w-4xl lg:max-w-6xl xl:max-w-7xl",children:[N&&u.jsxs("div",{className:"mb-3 space-y-3 md:hidden",children:[u.jsx($m,{prominent:!0}),u.jsx(ah,{enTurno:ie,sinActividad:ee,nAlertas:C,onIrAlertas:()=>typeof y=="function"&&y("alertas"),onAyuda:()=>D(!0)})]}),u.jsx(th,{...r}),u.jsx("button",{type:"button",onClick:()=>j(Ee()),"aria-label":g("dia.nueva"),"aria-hidden":Te,tabIndex:Te?-1:0,className:["fixed z-40 flex h-14 w-14 items-center justify-center","rounded-full bg-emerald-700 text-white shadow-lg","hover:bg-emerald-600 active:scale-95","transition-all duration-200","bottom-[5.5rem] right-4","md:hidden",Te?"pointer-events-none scale-50 opacity-0":"scale-100 opacity-100"].join(" "),children:u.jsx("svg",{viewBox:"0 0 24 24",width:"28",height:"28",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:u.jsx("path",{d:"M12 5v14M5 12h14"})})}),w&&(N?u.jsx(yl,{open:!!w,onClose:()=>j(null),title:g("modalActividad.agregar"),snapPoint:"full",children:u.jsx(sl,{valor:w,personas:ue,cerrar:()=>j(null),guardar:ge,eliminar:Ve,actividadesPlan:d,embebido:!0})}):u.jsx(sl,{valor:w,personas:ue,cerrar:()=>j(null),guardar:ge,eliminar:Ve,actividadesPlan:d})),u.jsx(rh,{open:Q,onClose:()=>D(!1),topic:"dia"})]})}const oh=x.lazy(()=>gn(()=>import("./Roles-CI24rPn0.js"),__vite__mapDeps([0,1,2,3,4]))),sh=x.lazy(()=>gn(()=>import("./Funcionarios-DXlaSwIX.js"),__vite__mapDeps([5,6,7,8,1,2,3,9,10,11]))),lh=x.lazy(()=>gn(()=>import("./FichaFuncionario-Dy_cJUje.js"),__vite__mapDeps([12,6,10,11]))),ch=x.lazy(()=>gn(()=>import("./Planificacion-CmI9BLI6.js"),__vite__mapDeps([13,2,3,4,7,8,1]))),uh=x.lazy(()=>gn(()=>import("./PlanificacionFuncionario-B_MDqvYr.js"),[])),dh=x.lazy(()=>gn(()=>import("./AdelantoViaticos-BuQA2m66.js"),__vite__mapDeps([14,6,8]))),mh=x.lazy(()=>gn(()=>import("./Reposicion-CvEaptZy.js"),__vite__mapDeps([15,6,1,2,3,4]))),ph=x.lazy(()=>gn(()=>import("./Disponibilidad-BVP8WP9o.js"),__vite__mapDeps([16,6,10]))),fh=x.lazy(()=>gn(()=>import("./Alertas-CkSEQuZk.js"),__vite__mapDeps([17,8]))),Th=x.lazy(()=>gn(()=>import("./Datos-tv71kcFV.js"),__vite__mapDeps([18,3,9]))),Lh=x.lazy(()=>gn(()=>import("./Configuracion-Ca2bzE7T.js"),__vite__mapDeps([19,2,3,9])));function vh(){const r=jn();return u.jsx("div",{role:"status","aria-live":"polite",className:"flex min-h-[200px] items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",children:u.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold text-slate-500",children:[u.jsx("span",{className:"h-2 w-2 animate-pulse rounded-full bg-emerald-500","aria-hidden":"true"}),r("topbar.cargando")]})})}function hh(){const{view:r,setView:i,personas:o,setPersonas:c,month:d,setMonth:p,year:L,setYear:T,compact:f,setCompact:C,roleData:y,setRoleData:g,actividadesPlan:N,setActividadesPlan:w,reposiciones:j,setReposiciones:Q,diaVista:D,setDiaVista:V,funcionarioVista:Y,setFuncionarioVista:te,filtrosVista:Z,setFiltrosVista:pe,reglas:ie}=qt(),ee=x.useMemo(()=>M1(o,{actividadesPlan:N,reposiciones:j,flags:ie}),[o,N,j,ie]),Te=x.useMemo(()=>ee.filter(ye=>ye.t==="danger"||ye.t==="warn").length,[ee]),le=sv({view:r,setView:i,year:L,setYear:T,month:d,setMonth:p,diaVista:D,setDiaVista:V,funcionarioVista:Y,setFuncionarioVista:te,filtrosVista:Z,setFiltrosVista:pe}),ue=lv(),Ee=r==="funcionario"?"funcionarios":r,ge=r==="funcionario"&&!!Y;return u.jsxs("div",{className:`pnlq-app pnlq-print-root min-h-screen overflow-x-clip bg-surface-alt text-ink ${ue?"pnlq-keyboard-open":""}`,children:[u.jsx(Iv,{}),u.jsxs("div",{className:"flex min-h-screen",children:[u.jsx(Y1,{view:Ee,setView:le,nAlertas:Te}),u.jsxs("main",{className:"pnlq-app-main min-w-0 flex-1 overflow-x-clip",children:[u.jsx(Z1,{view:Ee,setView:le,month:d,setMonth:p,year:L,setYear:T,compact:f,setCompact:C}),u.jsx("div",{className:"pnlq-app-content space-y-5 p-4 pb-[calc(6rem+env(safe-area-inset-bottom))] lg:p-6 lg:pb-6",children:u.jsxs(x.Suspense,{fallback:u.jsx(vh,{}),children:[r==="dia"&&u.jsx(ih,{diaVista:D,setDiaVista:V,personas:o,actividadesPlan:N,setActividadesPlan:w,roleData:y,reposiciones:j,hj:ie==null?void 0:ie.horasJornada,nAlertas:Te,setView:le}),Ee==="funcionarios"&&!ge&&u.jsx(sh,{personas:o,setPersonas:c,setView:le}),ge&&u.jsx(lh,{nombre:Y,personas:o,setPersonas:c,actividadesPlan:N,roleData:y,reposiciones:j,year:L,month:d,alerts:ee,setView:le,setDiaVista:V}),r==="roles"&&u.jsx(oh,{year:L,month:d,setYear:T,setMonth:p,compact:f,roleData:y,setRoleData:g,personas:o,actividadesPlan:N,setActividadesPlan:w,reposiciones:j,hj:ie==null?void 0:ie.horasJornada,setView:le}),r==="planificacion"&&u.jsx(ch,{year:L,month:d,personas:o,actividadesPlan:N,setActividadesPlan:w,roleData:y,setView:le,setDiaVista:V}),r==="planFuncionario"&&u.jsx(uh,{year:L,month:d,personas:o,actividadesPlan:N,setActividadesPlan:w,roleData:y,setRoleData:g}),r==="adelantos"&&u.jsx(dh,{actividadesPlan:N,personas:o,setView:le}),r==="reposicion"&&u.jsx(mh,{personas:o,reposiciones:j,setReposiciones:Q}),r==="disponibilidad"&&u.jsx(ph,{personas:o,setPersonas:c}),r==="alertas"&&u.jsx(fh,{alerts:ee,setView:le}),r==="datos"&&u.jsx(Th,{}),r==="configuracion"&&u.jsx(Lh,{})]})})]})]}),u.jsx(ev,{view:Ee,setView:le,nAlertas:Te,hidden:ue})]})}function gh(){return u.jsx(cv,{children:u.jsx(m1,{children:u.jsxs(P1,{children:[u.jsx(hh,{}),u.jsx(dv,{})]})})})}function Ph(r={}){const{immediate:i=!1,onNeedRefresh:o,onOfflineReady:c,onRegistered:d,onRegisteredSW:p,onRegisterError:L}=r;let T,f;const C=async(g=!0)=>{await f};async function y(){if("serviceWorker"in navigator){if(T=await gn(async()=>{const{Workbox:g}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:g}},[]).then(({Workbox:g})=>new g("/BTMM_JORNADAS/sw.js",{scope:"/BTMM_JORNADAS/",type:"classic"})).catch(g=>{L==null||L(g)}),!T)return;T.addEventListener("activated",g=>{(g.isUpdate||g.isExternal)&&window.location.reload()}),T.addEventListener("installed",g=>{g.isUpdate||c==null||c()}),T.register({immediate:i}).then(g=>{p?p("/BTMM_JORNADAS/sw.js",g):d==null||d(g)}).catch(g=>{L==null||L(g)})}}return f=y(),C}function yh(r={}){const{immediate:i=!0,onNeedRefresh:o,onOfflineReady:c,onRegistered:d,onRegisteredSW:p,onRegisterError:L}=r,[T,f]=x.useState(!1),[C,y]=x.useState(!1),[g]=x.useState(()=>Ph({immediate:i,onOfflineReady(){y(!0),c==null||c()},onNeedRefresh(){f(!0),o==null||o()},onRegistered:d,onRegisteredSW:p,onRegisterError:L}));return{needRefresh:[T,f],offlineReady:[C,y],updateServiceWorker:g}}const Mh=300*1e3;async function Eh(){const r=`${C1}?t=${Date.now()}`,i=await fetch(r,{cache:"no-store",headers:{"Cache-Control":"no-cache"}});if(!i.ok)throw new Error(`HTTP ${i.status}`);return i.json()}function Ch({intervalMs:r=Mh,onOutdated:i}={}){let o=!1,c=null,d=!0;const p=async()=>{if(o)return;const C=d;if(d=!1,!(typeof navigator>"u"||!navigator.onLine))try{const y=await Eh();y!=null&&y.commit&&y.commit!==Yi&&(i==null||i({local:gr,remote:y.version,remoteBuildTime:y.buildTime,remoteCommit:y.commit,immediate:C}))}catch{}},L=()=>{o||(c=setTimeout(async()=>{await p(),L()},r))},T=()=>{document.visibilityState==="visible"&&p()},f=()=>p();return document.addEventListener("visibilitychange",T),window.addEventListener("online",f),p(),L(),()=>{o=!0,c&&clearTimeout(c),document.removeEventListener("visibilitychange",T),window.removeEventListener("online",f)}}const Ud="pnlq:lastLoadedAt",Kd="pnlq:autoUpdateIntento";function Nh({onInstall:r,onDismiss:i}){return u.jsx("div",{className:"pnlq-pwa-banner pnlq-no-print fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-2xl border border-emerald-200 bg-white p-4 shadow-2xl ring-1 ring-emerald-100 lg:bottom-4",role:"alertdialog","aria-label":Ie("pwa.instalarAria"),children:u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-800 text-2xl shadow-sm",children:"🌲"}),u.jsxs("div",{className:"min-w-0 flex-1",children:[u.jsx("p",{className:"text-sm font-semibold text-slate-950",children:Ie("pwa.instalarTitulo")}),u.jsx("p",{className:"mt-0.5 text-xs font-bold text-slate-500",children:Ie("pwa.instalarSub")}),u.jsxs("div",{className:"mt-3 flex gap-2",children:[u.jsx("button",{onClick:r,className:"inline-flex min-h-touch items-center rounded-xl bg-emerald-800 px-4 text-xs font-semibold text-white shadow-sm hover:bg-emerald-700 active:scale-95",children:Ie("acciones.instalar")}),u.jsx("button",{onClick:i,className:"inline-flex min-h-touch items-center rounded-xl border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-700 hover:bg-slate-50 active:scale-95",children:Ie("acciones.ahoraNo")})]})]}),u.jsx("button",{onClick:i,className:"inline-flex min-h-touch min-w-touch items-center justify-center rounded-lg font-semibold text-slate-400 hover:bg-slate-100 hover:text-slate-700","aria-label":Ie("acciones.cerrar"),children:"✕"})]})})}function Sh({lastLoadedAt:r}){return u.jsx("div",{className:"pnlq-pwa-banner pnlq-no-print fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] left-1/2 z-50 -translate-x-1/2 rounded-2xl border border-amber-300 bg-amber-50 px-5 py-3 shadow-xl ring-1 ring-amber-200 lg:bottom-4",role:"alert",children:u.jsxs("div",{className:"flex flex-col items-center gap-0.5 text-center",children:[u.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold text-amber-900",children:[u.jsx("span",{className:"text-lg",children:"📡"}),Ie("pwa.sinConexion")]}),r&&u.jsx("div",{className:"text-[11px] font-bold text-amber-800/80",children:Ie("pwa.ultimaCarga",{fecha:r})})]})})}function xh({onUpdate:r,onDismiss:i,urgent:o=!1,remoteVersion:c}){const d=Ie(o?"pwa.versionDesactualizada":"pwa.nuevaVersion"),p=Ie(o?"pwa.urgente":"pwa.sugerido"),L=`${Ie("pwa.versionActual",{actual:gr})}${c?Ie("pwa.versionDisponible",{remoto:c}):""}.${p}`;return u.jsx("div",{className:`pnlq-pwa-banner pnlq-no-print fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-2xl border p-4 shadow-2xl lg:bottom-4 ${o?"border-red-300 bg-red-50 ring-1 ring-red-200":"border-emerald-300 bg-emerald-50 ring-1 ring-emerald-200"}`,role:"alertdialog","aria-live":"assertive","aria-label":Ie("pwa.bannerAria"),children:u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx("div",{className:`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl shadow-sm ${o?"bg-red-700 text-white":"bg-emerald-800 text-white"}`,children:"⟳"}),u.jsxs("div",{className:"min-w-0 flex-1",children:[u.jsx("p",{className:"text-sm font-semibold text-slate-950",children:d}),u.jsx("p",{className:"mt-0.5 text-xs font-bold text-slate-600",children:L}),u.jsxs("div",{className:"mt-3 flex gap-2",children:[u.jsx("button",{onClick:r,className:`inline-flex min-h-touch items-center rounded-xl px-4 text-xs font-semibold text-white shadow-sm active:scale-95 ${o?"bg-red-700 hover:bg-red-800":"bg-emerald-800 hover:bg-emerald-700"}`,children:Ie("acciones.actualizarAhora")}),u.jsx("button",{onClick:i,className:"inline-flex min-h-touch items-center rounded-xl border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-700 hover:bg-slate-50 active:scale-95",children:Ie("acciones.verLuego")})]})]})]})})}function bh({children:r}){const[i,o]=x.useState(null),[c,d]=x.useState(!1),[p,L]=x.useState(typeof navigator<"u"?!navigator.onLine:!1),[T,f]=x.useState(!1),[C,y]=x.useState(null),[g,N]=x.useState(!1),[w,j]=x.useState(()=>{try{return localStorage.getItem(Ud)}catch{return null}}),{needRefresh:[Q,D],updateServiceWorker:V}=yh({onRegisteredSW(){try{const le=Tm(new Date().toISOString());localStorage.setItem(Ud,le),j(le)}catch{}}});x.useEffect(()=>{const le=ye=>{ye.preventDefault(),o(ye)},ue=()=>{f(!0),o(null)},Ee=()=>L(!1),ge=()=>L(!0);return window.addEventListener("beforeinstallprompt",le),window.addEventListener("appinstalled",ue),window.addEventListener("online",Ee),window.addEventListener("offline",ge),()=>{window.removeEventListener("beforeinstallprompt",le),window.removeEventListener("appinstalled",ue),window.removeEventListener("online",Ee),window.removeEventListener("offline",ge)}},[]);const Y=x.useRef(V);x.useEffect(()=>{Y.current=V},[V]),x.useEffect(()=>Ch({onOutdated:ue=>{var Ee;if(ue!=null&&ue.immediate&&ue.remoteCommit){let ge=null;try{ge=sessionStorage.getItem(Kd)}catch{}if(ge!==ue.remoteCommit){try{sessionStorage.setItem(Kd,ue.remoteCommit)}catch{}(Ee=Y.current)==null||Ee.call(Y,!0);return}}y(ue)}}),[]);const te=async()=>{if(!i)return;i.prompt();const{outcome:le}=await i.userChoice;le==="accepted"&&o(null),d(!0)},Z=x.useCallback(()=>{N(!1),y(null),D(!1),V(!0)},[D,V]),pe=()=>N(!0),ie=i&&!c&&!T,ee=(Q||!!C)&&!g,Te=C==null?void 0:C.remote;return u.jsxs(u.Fragment,{children:[r,ie&&u.jsx(Nh,{onInstall:te,onDismiss:()=>d(!0)}),p&&!ee&&u.jsx(Sh,{lastLoadedAt:w}),ee&&u.jsx(xh,{onUpdate:Z,onDismiss:pe,urgent:!!C,remoteVersion:Te})]})}const cp="pnlq:theme",Ea=["light","dark","hc"],up=x.createContext(null);function Vh(){if(typeof window>"u")return"light";try{const r=localStorage.getItem(cp);if(r&&Ea.includes(r))return r}catch{}return window.matchMedia&&window.matchMedia("(prefers-contrast: more)").matches?"hc":window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Ah({children:r}){const[i,o]=x.useState(Vh);x.useEffect(()=>{if(!(typeof document>"u")){document.documentElement.setAttribute("data-theme",i),document.documentElement.style.colorScheme=i==="dark"?"dark":"light";try{localStorage.setItem(cp,i)}catch{}}},[i]);const c=x.useCallback(L=>{Ea.includes(L)&&o(L)},[]),d=x.useCallback(()=>{o(L=>{const T=Ea.indexOf(L);return Ea[(T+1)%Ea.length]})},[]),p=x.useMemo(()=>({theme:i,setTheme:c,cycleTheme:d,themes:Ea}),[i,c,d]);return u.jsx(up.Provider,{value:p,children:r})}function Lg(){const r=x.useContext(up);if(!r)throw new Error("useTheme must be used within <ThemeProvider>");return r}typeof console<"u"&&console.info(`PNLQ v${gr} · build ${Bi} · commit ${Yi}`);typeof window<"u"&&window.addEventListener("unhandledrejection",r=>{console.error("Promesa rechazada sin manejar:",r.reason)});hT.createRoot(document.getElementById("root")).render(u.jsx(mT.StrictMode,{children:u.jsx(Ah,{children:u.jsx(bh,{children:u.jsx(gh,{})})})}));export{ST as $,gr as A,Vt as B,Ma as C,ig as D,G1 as E,op as F,Zd as G,Pn as H,Ze as I,Jh as J,tg as K,Jd as L,el as M,tp as N,Ml as O,qs as P,Ki as Q,Tl as R,Hn as S,$i as T,_T as U,Ed as V,tm as W,og as X,lm as Y,IT as Z,a1 as _,Ri as a,pg as a$,ot as a0,cg as a1,zv as a2,aL as a3,Tm as a4,OT as a5,yr as a6,Ih as a7,RT as a8,$d as a9,ag as aA,ng as aB,eg as aC,Ad as aD,_h as aE,xT as aF,ul as aG,wT as aH,kh as aI,Wh as aJ,x as aK,Hh as aL,uL as aM,nh as aN,Zh as aO,Qh as aP,oL as aQ,kT as aR,nm as aS,cL as aT,Mr as aU,sp as aV,rL as aW,Ie as aX,sL as aY,mg as aZ,fg as a_,fL as aa,om as ab,sm as ac,tL as ad,dg as ae,iL as af,Xd as ag,u as ah,Fh as ai,Zv as aj,Tg as ak,Km as al,am,Xh as an,DT as ao,Na as ap,Kt as aq,mL as ar,zh as as,Uh as at,Gh as au,Kh as av,Yh as aw,lL as ax,qn as ay,Pr as az,lg as b,NT as b0,Ui as b1,Rh as b2,Oh as b3,qt as b4,lp as b5,$1 as b6,El as b7,ip as b8,Hm as b9,jn as ba,Lg as bb,fm as bc,$h as bd,Bh as be,Us as c,Wm as d,sl as e,yd as f,Xs as g,Gs as h,sg as i,Gi as j,Dh as k,qh as l,rg as m,pL as n,Wv as o,Oi as p,Yd as q,zT as r,Sa as s,vL as t,jh as u,Uv as v,Kv as w,ug as x,CL as y,Ll as z};
