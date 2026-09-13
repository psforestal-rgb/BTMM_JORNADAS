const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Roles-DE2hcF_X.js","assets/useAtajoBusqueda-J5aTYV6e.js","assets/csv-Q8IY2wHv.js","assets/descargas-DA6-RFWE.js","assets/exportaciones-Cdou2QL_.js","assets/Funcionarios-CzaOzxfB.js","assets/EmptyState-DSpnXS8O.js","assets/useFiltrosDeVista-CZQOZgkk.js","assets/useSessionState-4EW3WUit.js","assets/respaldo-BNXfEDl7.js","assets/ModalFuncionario-CIpd1e0c.js","assets/useGuardarFuncionario-DgOze_f-.js","assets/FichaFuncionario-BMql1RFU.js","assets/Planificacion-Epcj6X-u.js","assets/AdelantoViaticos-0k7u6g_3.js","assets/Reposicion-DsjP67Z2.js","assets/Disponibilidad-CZBu_cRq.js","assets/Alertas-CciXYqbA.js","assets/Datos-DkCgg4Jb.js","assets/Configuracion-DjroCrY7.js"])))=>i.map(i=>d[i]);
var Zf=Object.defineProperty;var Xf=(r,i,s)=>i in r?Zf(r,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[i]=s;var Ci=(r,i,s)=>Xf(r,typeof i!="symbol"?i+"":i,s);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const v of p.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&u(v)}).observe(document,{childList:!0,subtree:!0});function s(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function u(d){if(d.ep)return;d.ep=!0;const p=s(d);fetch(d.href,p)}})();var ph=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Qd(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ks={exports:{}},or={},Rs={exports:{}},ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ad;function eT(){if(ad)return ve;ad=1;var r=Symbol.for("react.element"),i=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),v=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),N=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),P=Symbol.iterator;function C(M){return M===null||typeof M!="object"?null:(M=P&&M[P]||M["@@iterator"],typeof M=="function"?M:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,Q={};function D(M,R,oe){this.props=M,this.context=R,this.refs=Q,this.updater=oe||w}D.prototype.isReactComponent={},D.prototype.setState=function(M,R){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,R,"setState")},D.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function V(){}V.prototype=D.prototype;function Y(M,R,oe){this.props=M,this.context=R,this.refs=Q,this.updater=oe||w}var te=Y.prototype=new V;te.constructor=Y,j(te,D.prototype),te.isPureReactComponent=!0;var Z=Array.isArray,pe=Object.prototype.hasOwnProperty,ie={current:null},ee={key:!0,ref:!0,__self:!0,__source:!0};function Te(M,R,oe){var me,B={},X=null,Pe=null;if(R!=null)for(me in R.ref!==void 0&&(Pe=R.ref),R.key!==void 0&&(X=""+R.key),R)pe.call(R,me)&&!ee.hasOwnProperty(me)&&(B[me]=R[me]);var he=arguments.length-2;if(he===1)B.children=oe;else if(1<he){for(var Me=Array(he),Je=0;Je<he;Je++)Me[Je]=arguments[Je+2];B.children=Me}if(M&&M.defaultProps)for(me in he=M.defaultProps,he)B[me]===void 0&&(B[me]=he[me]);return{$$typeof:r,type:M,key:X,ref:Pe,props:B,_owner:ie.current}}function le(M,R){return{$$typeof:r,type:M.type,key:R,ref:M.ref,props:M.props,_owner:M._owner}}function ue(M){return typeof M=="object"&&M!==null&&M.$$typeof===r}function Ee(M){var R={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(oe){return R[oe]})}var ge=/\/+/g;function ye(M,R){return typeof M=="object"&&M!==null&&M.key!=null?Ee(""+M.key):R.toString(36)}function Ve(M,R,oe,me,B){var X=typeof M;(X==="undefined"||X==="boolean")&&(M=null);var Pe=!1;if(M===null)Pe=!0;else switch(X){case"string":case"number":Pe=!0;break;case"object":switch(M.$$typeof){case r:case i:Pe=!0}}if(Pe)return Pe=M,B=B(Pe),M=me===""?"."+ye(Pe,0):me,Z(B)?(oe="",M!=null&&(oe=M.replace(ge,"$&/")+"/"),Ve(B,R,oe,"",function(Je){return Je})):B!=null&&(ue(B)&&(B=le(B,oe+(!B.key||Pe&&Pe.key===B.key?"":(""+B.key).replace(ge,"$&/")+"/")+M)),R.push(B)),1;if(Pe=0,me=me===""?".":me+":",Z(M))for(var he=0;he<M.length;he++){X=M[he];var Me=me+ye(X,he);Pe+=Ve(X,R,oe,Me,B)}else if(Me=C(M),typeof Me=="function")for(M=Me.call(M),he=0;!(X=M.next()).done;)X=X.value,Me=me+ye(X,he++),Pe+=Ve(X,R,oe,Me,B);else if(X==="object")throw R=String(M),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return Pe}function se(M,R,oe){if(M==null)return M;var me=[],B=0;return Ve(M,me,"","",function(X){return R.call(oe,X,B++)}),me}function Le(M){if(M._status===-1){var R=M._result;R=R(),R.then(function(oe){(M._status===0||M._status===-1)&&(M._status=1,M._result=oe)},function(oe){(M._status===0||M._status===-1)&&(M._status=2,M._result=oe)}),M._status===-1&&(M._status=0,M._result=R)}if(M._status===1)return M._result.default;throw M._result}var fe={current:null},z={transition:null},H={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:z,ReactCurrentOwner:ie};function G(){throw Error("act(...) is not supported in production builds of React.")}return ve.Children={map:se,forEach:function(M,R,oe){se(M,function(){R.apply(this,arguments)},oe)},count:function(M){var R=0;return se(M,function(){R++}),R},toArray:function(M){return se(M,function(R){return R})||[]},only:function(M){if(!ue(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},ve.Component=D,ve.Fragment=s,ve.Profiler=d,ve.PureComponent=Y,ve.StrictMode=u,ve.Suspense=f,ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,ve.act=G,ve.cloneElement=function(M,R,oe){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var me=j({},M.props),B=M.key,X=M.ref,Pe=M._owner;if(R!=null){if(R.ref!==void 0&&(X=R.ref,Pe=ie.current),R.key!==void 0&&(B=""+R.key),M.type&&M.type.defaultProps)var he=M.type.defaultProps;for(Me in R)pe.call(R,Me)&&!ee.hasOwnProperty(Me)&&(me[Me]=R[Me]===void 0&&he!==void 0?he[Me]:R[Me])}var Me=arguments.length-2;if(Me===1)me.children=oe;else if(1<Me){he=Array(Me);for(var Je=0;Je<Me;Je++)he[Je]=arguments[Je+2];me.children=he}return{$$typeof:r,type:M.type,key:B,ref:X,props:me,_owner:Pe}},ve.createContext=function(M){return M={$$typeof:v,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:p,_context:M},M.Consumer=M},ve.createElement=Te,ve.createFactory=function(M){var R=Te.bind(null,M);return R.type=M,R},ve.createRef=function(){return{current:null}},ve.forwardRef=function(M){return{$$typeof:T,render:M}},ve.isValidElement=ue,ve.lazy=function(M){return{$$typeof:y,_payload:{_status:-1,_result:M},_init:Le}},ve.memo=function(M,R){return{$$typeof:N,type:M,compare:R===void 0?null:R}},ve.startTransition=function(M){var R=z.transition;z.transition={};try{M()}finally{z.transition=R}},ve.unstable_act=G,ve.useCallback=function(M,R){return fe.current.useCallback(M,R)},ve.useContext=function(M){return fe.current.useContext(M)},ve.useDebugValue=function(){},ve.useDeferredValue=function(M){return fe.current.useDeferredValue(M)},ve.useEffect=function(M,R){return fe.current.useEffect(M,R)},ve.useId=function(){return fe.current.useId()},ve.useImperativeHandle=function(M,R,oe){return fe.current.useImperativeHandle(M,R,oe)},ve.useInsertionEffect=function(M,R){return fe.current.useInsertionEffect(M,R)},ve.useLayoutEffect=function(M,R){return fe.current.useLayoutEffect(M,R)},ve.useMemo=function(M,R){return fe.current.useMemo(M,R)},ve.useReducer=function(M,R,oe){return fe.current.useReducer(M,R,oe)},ve.useRef=function(M){return fe.current.useRef(M)},ve.useState=function(M){return fe.current.useState(M)},ve.useSyncExternalStore=function(M,R,oe){return fe.current.useSyncExternalStore(M,R,oe)},ve.useTransition=function(){return fe.current.useTransition()},ve.version="18.3.1",ve}var rd;function al(){return rd||(rd=1,Rs.exports=eT()),Rs.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var id;function nT(){if(id)return or;id=1;var r=al(),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function v(T,f,N){var y,P={},C=null,w=null;N!==void 0&&(C=""+N),f.key!==void 0&&(C=""+f.key),f.ref!==void 0&&(w=f.ref);for(y in f)u.call(f,y)&&!p.hasOwnProperty(y)&&(P[y]=f[y]);if(T&&T.defaultProps)for(y in f=T.defaultProps,f)P[y]===void 0&&(P[y]=f[y]);return{$$typeof:i,type:T,key:C,ref:w,props:P,_owner:d.current}}return or.Fragment=s,or.jsx=v,or.jsxs=v,or}var od;function tT(){return od||(od=1,ks.exports=nT()),ks.exports}var c=tT(),x=al();const aT=Qd(x);var Si={},_s={exports:{}},pn={},Is={exports:{}},Os={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sd;function rT(){return sd||(sd=1,(function(r){function i(z,H){var G=z.length;z.push(H);e:for(;0<G;){var M=G-1>>>1,R=z[M];if(0<d(R,H))z[M]=H,z[G]=R,G=M;else break e}}function s(z){return z.length===0?null:z[0]}function u(z){if(z.length===0)return null;var H=z[0],G=z.pop();if(G!==H){z[0]=G;e:for(var M=0,R=z.length,oe=R>>>1;M<oe;){var me=2*(M+1)-1,B=z[me],X=me+1,Pe=z[X];if(0>d(B,G))X<R&&0>d(Pe,B)?(z[M]=Pe,z[X]=G,M=X):(z[M]=B,z[me]=G,M=me);else if(X<R&&0>d(Pe,G))z[M]=Pe,z[X]=G,M=X;else break e}}return H}function d(z,H){var G=z.sortIndex-H.sortIndex;return G!==0?G:z.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;r.unstable_now=function(){return p.now()}}else{var v=Date,T=v.now();r.unstable_now=function(){return v.now()-T}}var f=[],N=[],y=1,P=null,C=3,w=!1,j=!1,Q=!1,D=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function te(z){for(var H=s(N);H!==null;){if(H.callback===null)u(N);else if(H.startTime<=z)u(N),H.sortIndex=H.expirationTime,i(f,H);else break;H=s(N)}}function Z(z){if(Q=!1,te(z),!j)if(s(f)!==null)j=!0,Le(pe);else{var H=s(N);H!==null&&fe(Z,H.startTime-z)}}function pe(z,H){j=!1,Q&&(Q=!1,V(Te),Te=-1),w=!0;var G=C;try{for(te(H),P=s(f);P!==null&&(!(P.expirationTime>H)||z&&!Ee());){var M=P.callback;if(typeof M=="function"){P.callback=null,C=P.priorityLevel;var R=M(P.expirationTime<=H);H=r.unstable_now(),typeof R=="function"?P.callback=R:P===s(f)&&u(f),te(H)}else u(f);P=s(f)}if(P!==null)var oe=!0;else{var me=s(N);me!==null&&fe(Z,me.startTime-H),oe=!1}return oe}finally{P=null,C=G,w=!1}}var ie=!1,ee=null,Te=-1,le=5,ue=-1;function Ee(){return!(r.unstable_now()-ue<le)}function ge(){if(ee!==null){var z=r.unstable_now();ue=z;var H=!0;try{H=ee(!0,z)}finally{H?ye():(ie=!1,ee=null)}}else ie=!1}var ye;if(typeof Y=="function")ye=function(){Y(ge)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,se=Ve.port2;Ve.port1.onmessage=ge,ye=function(){se.postMessage(null)}}else ye=function(){D(ge,0)};function Le(z){ee=z,ie||(ie=!0,ye())}function fe(z,H){Te=D(function(){z(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_continueExecution=function(){j||w||(j=!0,Le(pe))},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):le=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return C},r.unstable_getFirstCallbackNode=function(){return s(f)},r.unstable_next=function(z){switch(C){case 1:case 2:case 3:var H=3;break;default:H=C}var G=C;C=H;try{return z()}finally{C=G}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(z,H){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var G=C;C=z;try{return H()}finally{C=G}},r.unstable_scheduleCallback=function(z,H,G){var M=r.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?M+G:M):G=M,z){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=G+R,z={id:y++,callback:H,priorityLevel:z,startTime:G,expirationTime:R,sortIndex:-1},G>M?(z.sortIndex=G,i(N,z),s(f)===null&&z===s(N)&&(Q?(V(Te),Te=-1):Q=!0,fe(Z,G-M))):(z.sortIndex=R,i(f,z),j||w||(j=!0,Le(pe))),z},r.unstable_shouldYield=Ee,r.unstable_wrapCallback=function(z){var H=C;return function(){var G=C;C=H;try{return z.apply(this,arguments)}finally{C=G}}}})(Os)),Os}var ld;function iT(){return ld||(ld=1,Is.exports=rT()),Is.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cd;function oT(){if(cd)return pn;cd=1;var r=al(),i=iT();function s(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,d={};function p(e,n){v(e,n),v(e+"Capture",n)}function v(e,n){for(d[e]=n,e=0;e<n.length;e++)u.add(n[e])}var T=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,N=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},P={};function C(e){return f.call(P,e)?!0:f.call(y,e)?!1:N.test(e)?P[e]=!0:(y[e]=!0,!1)}function w(e,n,t,a){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function j(e,n,t,a){if(n===null||typeof n>"u"||w(e,n,t,a))return!0;if(a)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Q(e,n,t,a,o,l,m){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=m}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){D[e]=new Q(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];D[n]=new Q(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){D[e]=new Q(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){D[e]=new Q(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){D[e]=new Q(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){D[e]=new Q(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){D[e]=new Q(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){D[e]=new Q(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){D[e]=new Q(e,5,!1,e.toLowerCase(),null,!1,!1)});var V=/[\-:]([a-z])/g;function Y(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(V,Y);D[n]=new Q(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(V,Y);D[n]=new Q(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(V,Y);D[n]=new Q(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){D[e]=new Q(e,1,!1,e.toLowerCase(),null,!1,!1)}),D.xlinkHref=new Q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){D[e]=new Q(e,1,!1,e.toLowerCase(),null,!0,!0)});function te(e,n,t,a){var o=D.hasOwnProperty(n)?D[n]:null;(o!==null?o.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(j(n,t,o,a)&&(t=null),a||o===null?C(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,a=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,a?e.setAttributeNS(a,n,t):e.setAttribute(n,t))))}var Z=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pe=Symbol.for("react.element"),ie=Symbol.for("react.portal"),ee=Symbol.for("react.fragment"),Te=Symbol.for("react.strict_mode"),le=Symbol.for("react.profiler"),ue=Symbol.for("react.provider"),Ee=Symbol.for("react.context"),ge=Symbol.for("react.forward_ref"),ye=Symbol.for("react.suspense"),Ve=Symbol.for("react.suspense_list"),se=Symbol.for("react.memo"),Le=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),z=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,M;function R(e){if(M===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);M=n&&n[1]||""}return`
`+M+e}var oe=!1;function me(e,n){if(!e||oe)return"";oe=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(A){var a=A}Reflect.construct(e,[],n)}else{try{n.call()}catch(A){a=A}e.call(n.prototype)}else{try{throw Error()}catch(A){a=A}e()}}catch(A){if(A&&a&&typeof A.stack=="string"){for(var o=A.stack.split(`
`),l=a.stack.split(`
`),m=o.length-1,L=l.length-1;1<=m&&0<=L&&o[m]!==l[L];)L--;for(;1<=m&&0<=L;m--,L--)if(o[m]!==l[L]){if(m!==1||L!==1)do if(m--,L--,0>L||o[m]!==l[L]){var h=`
`+o[m].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=m&&0<=L);break}}}finally{oe=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?R(e):""}function B(e){switch(e.tag){case 5:return R(e.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return e=me(e.type,!1),e;case 11:return e=me(e.type.render,!1),e;case 1:return e=me(e.type,!0),e;default:return""}}function X(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ee:return"Fragment";case ie:return"Portal";case le:return"Profiler";case Te:return"StrictMode";case ye:return"Suspense";case Ve:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ee:return(e.displayName||"Context")+".Consumer";case ue:return(e._context.displayName||"Context")+".Provider";case ge:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case se:return n=e.displayName||null,n!==null?n:X(e.type)||"Memo";case Le:n=e._payload,e=e._init;try{return X(e(n))}catch{}}return null}function Pe(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return X(n);case 8:return n===Te?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function he(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Me(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e){var n=Me(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(m){a=""+m,l.call(this,m)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function sn(e){e._valueTracker||(e._valueTracker=Je(e))}function qn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=Me(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function an(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function k(e,n){var t=n.checked;return G({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ne(e,n){var t=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;t=he(n.value!=null?n.value:t),e._wrapperState={initialChecked:a,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function we(e,n){n=n.checked,n!=null&&te(e,"checked",n,!1)}function jn(e,n){we(e,n);var t=he(n.value),a=n.type;if(t!=null)a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Vt(e,n.type,t):n.hasOwnProperty("defaultValue")&&Vt(e,n.type,he(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Dn(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Vt(e,n,t){(n!=="number"||an(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var At=Array.isArray;function it(e,n,t,a){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&a&&(e[t].defaultSelected=!0)}else{for(t=""+he(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,a&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function Kt(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(s(91));return G({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Lr(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(s(92));if(At(t)){if(1<t.length)throw Error(s(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:he(t)}}function vr(e,n){var t=he(n.value),a=he(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),a!=null&&(e.defaultValue=""+a)}function Ea(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function b(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function O(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?b(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ne,xe=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,a,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,a,o)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ne=ne||document.createElement("div"),ne.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ne.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function yn(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Mn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ot=["Webkit","ms","Moz","O"];Object.keys(Mn).forEach(function(e){ot.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Mn[n]=Mn[e]})});function hl(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Mn.hasOwnProperty(e)&&Mn[e]?(""+n).trim():n+"px"}function gl(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var a=t.indexOf("--")===0,o=hl(t,n[t],a);t==="float"&&(t="cssFloat"),a?e.setProperty(t,o):e[t]=o}}var tp=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gi(e,n){if(n){if(tp[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(s(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(s(61))}if(n.style!=null&&typeof n.style!="object")throw Error(s(62))}}function Ui(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ki=null;function $i(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qi=null,$t=null,qt=null;function Pl(e){if(e=Ga(e)){if(typeof qi!="function")throw Error(s(280));var n=e.stateNode;n&&(n=zr(n),qi(e.stateNode,e.type,n))}}function yl(e){$t?qt?qt.push(e):qt=[e]:$t=e}function Ml(){if($t){var e=$t,n=qt;if(qt=$t=null,Pl(e),n)for(e=0;e<n.length;e++)Pl(n[e])}}function El(e,n){return e(n)}function Nl(){}var Hi=!1;function Cl(e,n,t){if(Hi)return e(n,t);Hi=!0;try{return El(e,n,t)}finally{Hi=!1,($t!==null||qt!==null)&&(Nl(),Ml())}}function Na(e,n){var t=e.stateNode;if(t===null)return null;var a=zr(t);if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(s(231,n,typeof t));return t}var Wi=!1;if(T)try{var Ca={};Object.defineProperty(Ca,"passive",{get:function(){Wi=!0}}),window.addEventListener("test",Ca,Ca),window.removeEventListener("test",Ca,Ca)}catch{Wi=!1}function ap(e,n,t,a,o,l,m,L,h){var A=Array.prototype.slice.call(arguments,3);try{n.apply(t,A)}catch(I){this.onError(I)}}var Sa=!1,hr=null,gr=!1,Zi=null,rp={onError:function(e){Sa=!0,hr=e}};function ip(e,n,t,a,o,l,m,L,h){Sa=!1,hr=null,ap.apply(rp,arguments)}function op(e,n,t,a,o,l,m,L,h){if(ip.apply(this,arguments),Sa){if(Sa){var A=hr;Sa=!1,hr=null}else throw Error(s(198));gr||(gr=!0,Zi=A)}}function wt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Sl(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function xl(e){if(wt(e)!==e)throw Error(s(188))}function sp(e){var n=e.alternate;if(!n){if(n=wt(e),n===null)throw Error(s(188));return n!==e?null:e}for(var t=e,a=n;;){var o=t.return;if(o===null)break;var l=o.alternate;if(l===null){if(a=o.return,a!==null){t=a;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===t)return xl(o),e;if(l===a)return xl(o),n;l=l.sibling}throw Error(s(188))}if(t.return!==a.return)t=o,a=l;else{for(var m=!1,L=o.child;L;){if(L===t){m=!0,t=o,a=l;break}if(L===a){m=!0,a=o,t=l;break}L=L.sibling}if(!m){for(L=l.child;L;){if(L===t){m=!0,t=l,a=o;break}if(L===a){m=!0,a=l,t=o;break}L=L.sibling}if(!m)throw Error(s(189))}}if(t.alternate!==a)throw Error(s(190))}if(t.tag!==3)throw Error(s(188));return t.stateNode.current===t?e:n}function bl(e){return e=sp(e),e!==null?Vl(e):null}function Vl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Vl(e);if(n!==null)return n;e=e.sibling}return null}var Al=i.unstable_scheduleCallback,wl=i.unstable_cancelCallback,lp=i.unstable_shouldYield,cp=i.unstable_requestPaint,Fe=i.unstable_now,up=i.unstable_getCurrentPriorityLevel,Xi=i.unstable_ImmediatePriority,jl=i.unstable_UserBlockingPriority,Pr=i.unstable_NormalPriority,dp=i.unstable_LowPriority,Dl=i.unstable_IdlePriority,yr=null,Jn=null;function mp(e){if(Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(yr,e,void 0,(e.current.flags&128)===128)}catch{}}var kn=Math.clz32?Math.clz32:Tp,pp=Math.log,fp=Math.LN2;function Tp(e){return e>>>=0,e===0?32:31-(pp(e)/fp|0)|0}var Mr=64,Er=4194304;function xa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Nr(e,n){var t=e.pendingLanes;if(t===0)return 0;var a=0,o=e.suspendedLanes,l=e.pingedLanes,m=t&268435455;if(m!==0){var L=m&~o;L!==0?a=xa(L):(l&=m,l!==0&&(a=xa(l)))}else m=t&~o,m!==0?a=xa(m):l!==0&&(a=xa(l));if(a===0)return 0;if(n!==0&&n!==a&&(n&o)===0&&(o=a&-a,l=n&-n,o>=l||o===16&&(l&4194240)!==0))return n;if((a&4)!==0&&(a|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)t=31-kn(n),o=1<<t,a|=e[t],n&=~o;return a}function Lp(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vp(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var m=31-kn(l),L=1<<m,h=o[m];h===-1?((L&t)===0||(L&a)!==0)&&(o[m]=Lp(L,n)):h<=n&&(e.expiredLanes|=L),l&=~L}}function eo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function kl(){var e=Mr;return Mr<<=1,(Mr&4194240)===0&&(Mr=64),e}function no(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ba(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-kn(n),e[n]=t}function hp(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-kn(t),l=1<<o;n[o]=0,a[o]=-1,e[o]=-1,t&=~l}}function to(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-kn(t),o=1<<a;o&n|e[a]&n&&(e[a]|=n),t&=~o}}var be=0;function Rl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var _l,ao,Il,Ol,Fl,ro=!1,Cr=[],st=null,lt=null,ct=null,Va=new Map,Aa=new Map,ut=[],gp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zl(e,n){switch(e){case"focusin":case"focusout":st=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":Va.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Aa.delete(n.pointerId)}}function wa(e,n,t,a,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:l,targetContainers:[o]},n!==null&&(n=Ga(n),n!==null&&ao(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function Pp(e,n,t,a,o){switch(n){case"focusin":return st=wa(st,e,n,t,a,o),!0;case"dragenter":return lt=wa(lt,e,n,t,a,o),!0;case"mouseover":return ct=wa(ct,e,n,t,a,o),!0;case"pointerover":var l=o.pointerId;return Va.set(l,wa(Va.get(l)||null,e,n,t,a,o)),!0;case"gotpointercapture":return l=o.pointerId,Aa.set(l,wa(Aa.get(l)||null,e,n,t,a,o)),!0}return!1}function Ql(e){var n=jt(e.target);if(n!==null){var t=wt(n);if(t!==null){if(n=t.tag,n===13){if(n=Sl(t),n!==null){e.blockedOn=n,Fl(e.priority,function(){Il(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=oo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);Ki=a,t.target.dispatchEvent(a),Ki=null}else return n=Ga(t),n!==null&&ao(n),e.blockedOn=t,!1;n.shift()}return!0}function Jl(e,n,t){Sr(e)&&t.delete(n)}function yp(){ro=!1,st!==null&&Sr(st)&&(st=null),lt!==null&&Sr(lt)&&(lt=null),ct!==null&&Sr(ct)&&(ct=null),Va.forEach(Jl),Aa.forEach(Jl)}function ja(e,n){e.blockedOn===n&&(e.blockedOn=null,ro||(ro=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,yp)))}function Da(e){function n(o){return ja(o,e)}if(0<Cr.length){ja(Cr[0],e);for(var t=1;t<Cr.length;t++){var a=Cr[t];a.blockedOn===e&&(a.blockedOn=null)}}for(st!==null&&ja(st,e),lt!==null&&ja(lt,e),ct!==null&&ja(ct,e),Va.forEach(n),Aa.forEach(n),t=0;t<ut.length;t++)a=ut[t],a.blockedOn===e&&(a.blockedOn=null);for(;0<ut.length&&(t=ut[0],t.blockedOn===null);)Ql(t),t.blockedOn===null&&ut.shift()}var Ht=Z.ReactCurrentBatchConfig,xr=!0;function Mp(e,n,t,a){var o=be,l=Ht.transition;Ht.transition=null;try{be=1,io(e,n,t,a)}finally{be=o,Ht.transition=l}}function Ep(e,n,t,a){var o=be,l=Ht.transition;Ht.transition=null;try{be=4,io(e,n,t,a)}finally{be=o,Ht.transition=l}}function io(e,n,t,a){if(xr){var o=oo(e,n,t,a);if(o===null)No(e,n,a,br,t),zl(e,a);else if(Pp(o,e,n,t,a))a.stopPropagation();else if(zl(e,a),n&4&&-1<gp.indexOf(e)){for(;o!==null;){var l=Ga(o);if(l!==null&&_l(l),l=oo(e,n,t,a),l===null&&No(e,n,a,br,t),l===o)break;o=l}o!==null&&a.stopPropagation()}else No(e,n,a,null,t)}}var br=null;function oo(e,n,t,a){if(br=null,e=$i(a),e=jt(e),e!==null)if(n=wt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Sl(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return br=e,null}function Bl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(up()){case Xi:return 1;case jl:return 4;case Pr:case dp:return 16;case Dl:return 536870912;default:return 16}default:return 16}}var dt=null,so=null,Vr=null;function Yl(){if(Vr)return Vr;var e,n=so,t=n.length,a,o="value"in dt?dt.value:dt.textContent,l=o.length;for(e=0;e<t&&n[e]===o[e];e++);var m=t-e;for(a=1;a<=m&&n[t-a]===o[l-a];a++);return Vr=o.slice(e,1<a?1-a:void 0)}function Ar(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function wr(){return!0}function Gl(){return!1}function fn(e){function n(t,a,o,l,m){this._reactName=t,this._targetInst=o,this.type=a,this.nativeEvent=l,this.target=m,this.currentTarget=null;for(var L in e)e.hasOwnProperty(L)&&(t=e[L],this[L]=t?t(l):l[L]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?wr:Gl,this.isPropagationStopped=Gl,this}return G(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=wr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=wr)},persist:function(){},isPersistent:wr}),n}var Wt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lo=fn(Wt),ka=G({},Wt,{view:0,detail:0}),Np=fn(ka),co,uo,Ra,jr=G({},ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:po,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ra&&(Ra&&e.type==="mousemove"?(co=e.screenX-Ra.screenX,uo=e.screenY-Ra.screenY):uo=co=0,Ra=e),co)},movementY:function(e){return"movementY"in e?e.movementY:uo}}),Ul=fn(jr),Cp=G({},jr,{dataTransfer:0}),Sp=fn(Cp),xp=G({},ka,{relatedTarget:0}),mo=fn(xp),bp=G({},Wt,{animationName:0,elapsedTime:0,pseudoElement:0}),Vp=fn(bp),Ap=G({},Wt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wp=fn(Ap),jp=G({},Wt,{data:0}),Kl=fn(jp),Dp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _p(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Rp[e])?!!n[e]:!1}function po(){return _p}var Ip=G({},ka,{key:function(e){if(e.key){var n=Dp[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ar(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:po,charCode:function(e){return e.type==="keypress"?Ar(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ar(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Op=fn(Ip),Fp=G({},jr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$l=fn(Fp),zp=G({},ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:po}),Qp=fn(zp),Jp=G({},Wt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bp=fn(Jp),Yp=G({},jr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gp=fn(Yp),Up=[9,13,27,32],fo=T&&"CompositionEvent"in window,_a=null;T&&"documentMode"in document&&(_a=document.documentMode);var Kp=T&&"TextEvent"in window&&!_a,ql=T&&(!fo||_a&&8<_a&&11>=_a),Hl=" ",Wl=!1;function Zl(e,n){switch(e){case"keyup":return Up.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zt=!1;function $p(e,n){switch(e){case"compositionend":return Xl(n);case"keypress":return n.which!==32?null:(Wl=!0,Hl);case"textInput":return e=n.data,e===Hl&&Wl?null:e;default:return null}}function qp(e,n){if(Zt)return e==="compositionend"||!fo&&Zl(e,n)?(e=Yl(),Vr=so=dt=null,Zt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ql&&n.locale!=="ko"?null:n.data;default:return null}}var Hp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ec(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Hp[e.type]:n==="textarea"}function nc(e,n,t,a){yl(a),n=Ir(n,"onChange"),0<n.length&&(t=new lo("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var Ia=null,Oa=null;function Wp(e){gc(e,0)}function Dr(e){var n=aa(e);if(qn(n))return e}function Zp(e,n){if(e==="change")return n}var tc=!1;if(T){var To;if(T){var Lo="oninput"in document;if(!Lo){var ac=document.createElement("div");ac.setAttribute("oninput","return;"),Lo=typeof ac.oninput=="function"}To=Lo}else To=!1;tc=To&&(!document.documentMode||9<document.documentMode)}function rc(){Ia&&(Ia.detachEvent("onpropertychange",ic),Oa=Ia=null)}function ic(e){if(e.propertyName==="value"&&Dr(Oa)){var n=[];nc(n,Oa,e,$i(e)),Cl(Wp,n)}}function Xp(e,n,t){e==="focusin"?(rc(),Ia=n,Oa=t,Ia.attachEvent("onpropertychange",ic)):e==="focusout"&&rc()}function ef(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Dr(Oa)}function nf(e,n){if(e==="click")return Dr(n)}function tf(e,n){if(e==="input"||e==="change")return Dr(n)}function af(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Rn=typeof Object.is=="function"?Object.is:af;function Fa(e,n){if(Rn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var o=t[a];if(!f.call(n,o)||!Rn(e[o],n[o]))return!1}return!0}function oc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sc(e,n){var t=oc(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=oc(t)}}function lc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?lc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function cc(){for(var e=window,n=an();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=an(e.document)}return n}function vo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function rf(e){var n=cc(),t=e.focusedElem,a=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&lc(t.ownerDocument.documentElement,t)){if(a!==null&&vo(t)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,l=Math.min(a.start,o);a=a.end===void 0?l:Math.min(a.end,o),!e.extend&&l>a&&(o=a,a=l,l=o),o=sc(t,l);var m=sc(t,a);o&&m&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==m.node||e.focusOffset!==m.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),l>a?(e.addRange(n),e.extend(m.node,m.offset)):(n.setEnd(m.node,m.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var of=T&&"documentMode"in document&&11>=document.documentMode,Xt=null,ho=null,za=null,go=!1;function uc(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;go||Xt==null||Xt!==an(a)||(a=Xt,"selectionStart"in a&&vo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),za&&Fa(za,a)||(za=a,a=Ir(ho,"onSelect"),0<a.length&&(n=new lo("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=Xt)))}function kr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var ea={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionend:kr("Transition","TransitionEnd")},Po={},dc={};T&&(dc=document.createElement("div").style,"AnimationEvent"in window||(delete ea.animationend.animation,delete ea.animationiteration.animation,delete ea.animationstart.animation),"TransitionEvent"in window||delete ea.transitionend.transition);function Rr(e){if(Po[e])return Po[e];if(!ea[e])return e;var n=ea[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in dc)return Po[e]=n[t];return e}var mc=Rr("animationend"),pc=Rr("animationiteration"),fc=Rr("animationstart"),Tc=Rr("transitionend"),Lc=new Map,vc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mt(e,n){Lc.set(e,n),p(n,[e])}for(var yo=0;yo<vc.length;yo++){var Mo=vc[yo],sf=Mo.toLowerCase(),lf=Mo[0].toUpperCase()+Mo.slice(1);mt(sf,"on"+lf)}mt(mc,"onAnimationEnd"),mt(pc,"onAnimationIteration"),mt(fc,"onAnimationStart"),mt("dblclick","onDoubleClick"),mt("focusin","onFocus"),mt("focusout","onBlur"),mt(Tc,"onTransitionEnd"),v("onMouseEnter",["mouseout","mouseover"]),v("onMouseLeave",["mouseout","mouseover"]),v("onPointerEnter",["pointerout","pointerover"]),v("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qa));function hc(e,n,t){var a=e.type||"unknown-event";e.currentTarget=t,op(a,n,void 0,e),e.currentTarget=null}function gc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],o=a.event;a=a.listeners;e:{var l=void 0;if(n)for(var m=a.length-1;0<=m;m--){var L=a[m],h=L.instance,A=L.currentTarget;if(L=L.listener,h!==l&&o.isPropagationStopped())break e;hc(o,L,A),l=h}else for(m=0;m<a.length;m++){if(L=a[m],h=L.instance,A=L.currentTarget,L=L.listener,h!==l&&o.isPropagationStopped())break e;hc(o,L,A),l=h}}}if(gr)throw e=Zi,gr=!1,Zi=null,e}function je(e,n){var t=n[Ao];t===void 0&&(t=n[Ao]=new Set);var a=e+"__bubble";t.has(a)||(Pc(n,e,2,!1),t.add(a))}function Eo(e,n,t){var a=0;n&&(a|=4),Pc(t,e,a,n)}var _r="_reactListening"+Math.random().toString(36).slice(2);function Ja(e){if(!e[_r]){e[_r]=!0,u.forEach(function(t){t!=="selectionchange"&&(cf.has(t)||Eo(t,!1,e),Eo(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[_r]||(n[_r]=!0,Eo("selectionchange",!1,n))}}function Pc(e,n,t,a){switch(Bl(n)){case 1:var o=Mp;break;case 4:o=Ep;break;default:o=io}t=o.bind(null,n,t,e),o=void 0,!Wi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),a?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function No(e,n,t,a,o){var l=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var m=a.tag;if(m===3||m===4){var L=a.stateNode.containerInfo;if(L===o||L.nodeType===8&&L.parentNode===o)break;if(m===4)for(m=a.return;m!==null;){var h=m.tag;if((h===3||h===4)&&(h=m.stateNode.containerInfo,h===o||h.nodeType===8&&h.parentNode===o))return;m=m.return}for(;L!==null;){if(m=jt(L),m===null)return;if(h=m.tag,h===5||h===6){a=l=m;continue e}L=L.parentNode}}a=a.return}Cl(function(){var A=l,I=$i(t),F=[];e:{var _=Lc.get(e);if(_!==void 0){var U=lo,$=e;switch(e){case"keypress":if(Ar(t)===0)break e;case"keydown":case"keyup":U=Op;break;case"focusin":$="focus",U=mo;break;case"focusout":$="blur",U=mo;break;case"beforeblur":case"afterblur":U=mo;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=Ul;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=Sp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=Qp;break;case mc:case pc:case fc:U=Vp;break;case Tc:U=Bp;break;case"scroll":U=Np;break;case"wheel":U=Gp;break;case"copy":case"cut":case"paste":U=wp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=$l}var q=(n&4)!==0,ze=!q&&e==="scroll",E=q?_!==null?_+"Capture":null:_;q=[];for(var g=A,S;g!==null;){S=g;var J=S.stateNode;if(S.tag===5&&J!==null&&(S=J,E!==null&&(J=Na(g,E),J!=null&&q.push(Ba(g,J,S)))),ze)break;g=g.return}0<q.length&&(_=new U(_,$,null,t,I),F.push({event:_,listeners:q}))}}if((n&7)===0){e:{if(_=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",_&&t!==Ki&&($=t.relatedTarget||t.fromElement)&&(jt($)||$[Hn]))break e;if((U||_)&&(_=I.window===I?I:(_=I.ownerDocument)?_.defaultView||_.parentWindow:window,U?($=t.relatedTarget||t.toElement,U=A,$=$?jt($):null,$!==null&&(ze=wt($),$!==ze||$.tag!==5&&$.tag!==6)&&($=null)):(U=null,$=A),U!==$)){if(q=Ul,J="onMouseLeave",E="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(q=$l,J="onPointerLeave",E="onPointerEnter",g="pointer"),ze=U==null?_:aa(U),S=$==null?_:aa($),_=new q(J,g+"leave",U,t,I),_.target=ze,_.relatedTarget=S,J=null,jt(I)===A&&(q=new q(E,g+"enter",$,t,I),q.target=S,q.relatedTarget=ze,J=q),ze=J,U&&$)n:{for(q=U,E=$,g=0,S=q;S;S=na(S))g++;for(S=0,J=E;J;J=na(J))S++;for(;0<g-S;)q=na(q),g--;for(;0<S-g;)E=na(E),S--;for(;g--;){if(q===E||E!==null&&q===E.alternate)break n;q=na(q),E=na(E)}q=null}else q=null;U!==null&&yc(F,_,U,q,!1),$!==null&&ze!==null&&yc(F,ze,$,q,!0)}}e:{if(_=A?aa(A):window,U=_.nodeName&&_.nodeName.toLowerCase(),U==="select"||U==="input"&&_.type==="file")var W=Zp;else if(ec(_))if(tc)W=tf;else{W=ef;var ae=Xp}else(U=_.nodeName)&&U.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(W=nf);if(W&&(W=W(e,A))){nc(F,W,t,I);break e}ae&&ae(e,_,A),e==="focusout"&&(ae=_._wrapperState)&&ae.controlled&&_.type==="number"&&Vt(_,"number",_.value)}switch(ae=A?aa(A):window,e){case"focusin":(ec(ae)||ae.contentEditable==="true")&&(Xt=ae,ho=A,za=null);break;case"focusout":za=ho=Xt=null;break;case"mousedown":go=!0;break;case"contextmenu":case"mouseup":case"dragend":go=!1,uc(F,t,I);break;case"selectionchange":if(of)break;case"keydown":case"keyup":uc(F,t,I)}var re;if(fo)e:{switch(e){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else Zt?Zl(e,t)&&(ce="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(ce="onCompositionStart");ce&&(ql&&t.locale!=="ko"&&(Zt||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&Zt&&(re=Yl()):(dt=I,so="value"in dt?dt.value:dt.textContent,Zt=!0)),ae=Ir(A,ce),0<ae.length&&(ce=new Kl(ce,e,null,t,I),F.push({event:ce,listeners:ae}),re?ce.data=re:(re=Xl(t),re!==null&&(ce.data=re)))),(re=Kp?$p(e,t):qp(e,t))&&(A=Ir(A,"onBeforeInput"),0<A.length&&(I=new Kl("onBeforeInput","beforeinput",null,t,I),F.push({event:I,listeners:A}),I.data=re))}gc(F,n)})}function Ba(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ir(e,n){for(var t=n+"Capture",a=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Na(e,t),l!=null&&a.unshift(Ba(e,l,o)),l=Na(e,n),l!=null&&a.push(Ba(e,l,o))),e=e.return}return a}function na(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yc(e,n,t,a,o){for(var l=n._reactName,m=[];t!==null&&t!==a;){var L=t,h=L.alternate,A=L.stateNode;if(h!==null&&h===a)break;L.tag===5&&A!==null&&(L=A,o?(h=Na(t,l),h!=null&&m.unshift(Ba(t,h,L))):o||(h=Na(t,l),h!=null&&m.push(Ba(t,h,L)))),t=t.return}m.length!==0&&e.push({event:n,listeners:m})}var uf=/\r\n?/g,df=/\u0000|\uFFFD/g;function Mc(e){return(typeof e=="string"?e:""+e).replace(uf,`
`).replace(df,"")}function Or(e,n,t){if(n=Mc(n),Mc(e)!==n&&t)throw Error(s(425))}function Fr(){}var Co=null,So=null;function xo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var bo=typeof setTimeout=="function"?setTimeout:void 0,mf=typeof clearTimeout=="function"?clearTimeout:void 0,Ec=typeof Promise=="function"?Promise:void 0,pf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ec<"u"?function(e){return Ec.resolve(null).then(e).catch(ff)}:bo;function ff(e){setTimeout(function(){throw e})}function Vo(e,n){var t=n,a=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(a===0){e.removeChild(o),Da(n);return}a--}else t!=="$"&&t!=="$?"&&t!=="$!"||a++;t=o}while(t);Da(n)}function pt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Nc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var ta=Math.random().toString(36).slice(2),Bn="__reactFiber$"+ta,Ya="__reactProps$"+ta,Hn="__reactContainer$"+ta,Ao="__reactEvents$"+ta,Tf="__reactListeners$"+ta,Lf="__reactHandles$"+ta;function jt(e){var n=e[Bn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Hn]||t[Bn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Nc(e);e!==null;){if(t=e[Bn])return t;e=Nc(e)}return n}e=t,t=e.parentNode}return null}function Ga(e){return e=e[Bn]||e[Hn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function aa(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function zr(e){return e[Ya]||null}var wo=[],ra=-1;function ft(e){return{current:e}}function De(e){0>ra||(e.current=wo[ra],wo[ra]=null,ra--)}function Ae(e,n){ra++,wo[ra]=e.current,e.current=n}var Tt={},Ze=ft(Tt),ln=ft(!1),Dt=Tt;function ia(e,n){var t=e.type.contextTypes;if(!t)return Tt;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in t)o[l]=n[l];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function cn(e){return e=e.childContextTypes,e!=null}function Qr(){De(ln),De(Ze)}function Cc(e,n,t){if(Ze.current!==Tt)throw Error(s(168));Ae(Ze,n),Ae(ln,t)}function Sc(e,n,t){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return t;a=a.getChildContext();for(var o in a)if(!(o in n))throw Error(s(108,Pe(e)||"Unknown",o));return G({},t,a)}function Jr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tt,Dt=Ze.current,Ae(Ze,e),Ae(ln,ln.current),!0}function xc(e,n,t){var a=e.stateNode;if(!a)throw Error(s(169));t?(e=Sc(e,n,Dt),a.__reactInternalMemoizedMergedChildContext=e,De(ln),De(Ze),Ae(Ze,e)):De(ln),Ae(ln,t)}var Wn=null,Br=!1,jo=!1;function bc(e){Wn===null?Wn=[e]:Wn.push(e)}function vf(e){Br=!0,bc(e)}function Lt(){if(!jo&&Wn!==null){jo=!0;var e=0,n=be;try{var t=Wn;for(be=1;e<t.length;e++){var a=t[e];do a=a(!0);while(a!==null)}Wn=null,Br=!1}catch(o){throw Wn!==null&&(Wn=Wn.slice(e+1)),Al(Xi,Lt),o}finally{be=n,jo=!1}}return null}var oa=[],sa=0,Yr=null,Gr=0,En=[],Nn=0,kt=null,Zn=1,Xn="";function Rt(e,n){oa[sa++]=Gr,oa[sa++]=Yr,Yr=e,Gr=n}function Vc(e,n,t){En[Nn++]=Zn,En[Nn++]=Xn,En[Nn++]=kt,kt=e;var a=Zn;e=Xn;var o=32-kn(a)-1;a&=~(1<<o),t+=1;var l=32-kn(n)+o;if(30<l){var m=o-o%5;l=(a&(1<<m)-1).toString(32),a>>=m,o-=m,Zn=1<<32-kn(n)+o|t<<o|a,Xn=l+e}else Zn=1<<l|t<<o|a,Xn=e}function Do(e){e.return!==null&&(Rt(e,1),Vc(e,1,0))}function ko(e){for(;e===Yr;)Yr=oa[--sa],oa[sa]=null,Gr=oa[--sa],oa[sa]=null;for(;e===kt;)kt=En[--Nn],En[Nn]=null,Xn=En[--Nn],En[Nn]=null,Zn=En[--Nn],En[Nn]=null}var Tn=null,Ln=null,ke=!1,_n=null;function Ac(e,n){var t=bn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function wc(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Tn=e,Ln=pt(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Tn=e,Ln=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=kt!==null?{id:Zn,overflow:Xn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=bn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Tn=e,Ln=null,!0):!1;default:return!1}}function Ro(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _o(e){if(ke){var n=Ln;if(n){var t=n;if(!wc(e,n)){if(Ro(e))throw Error(s(418));n=pt(t.nextSibling);var a=Tn;n&&wc(e,n)?Ac(a,t):(e.flags=e.flags&-4097|2,ke=!1,Tn=e)}}else{if(Ro(e))throw Error(s(418));e.flags=e.flags&-4097|2,ke=!1,Tn=e}}}function jc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Tn=e}function Ur(e){if(e!==Tn)return!1;if(!ke)return jc(e),ke=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!xo(e.type,e.memoizedProps)),n&&(n=Ln)){if(Ro(e))throw Dc(),Error(s(418));for(;n;)Ac(e,n),n=pt(n.nextSibling)}if(jc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ln=pt(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ln=null}}else Ln=Tn?pt(e.stateNode.nextSibling):null;return!0}function Dc(){for(var e=Ln;e;)e=pt(e.nextSibling)}function la(){Ln=Tn=null,ke=!1}function Io(e){_n===null?_n=[e]:_n.push(e)}var hf=Z.ReactCurrentBatchConfig;function Ua(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(s(309));var a=t.stateNode}if(!a)throw Error(s(147,e));var o=a,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(m){var L=o.refs;m===null?delete L[l]:L[l]=m},n._stringRef=l,n)}if(typeof e!="string")throw Error(s(284));if(!t._owner)throw Error(s(290,e))}return e}function Kr(e,n){throw e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function kc(e){var n=e._init;return n(e._payload)}function Rc(e){function n(E,g){if(e){var S=E.deletions;S===null?(E.deletions=[g],E.flags|=16):S.push(g)}}function t(E,g){if(!e)return null;for(;g!==null;)n(E,g),g=g.sibling;return null}function a(E,g){for(E=new Map;g!==null;)g.key!==null?E.set(g.key,g):E.set(g.index,g),g=g.sibling;return E}function o(E,g){return E=Nt(E,g),E.index=0,E.sibling=null,E}function l(E,g,S){return E.index=S,e?(S=E.alternate,S!==null?(S=S.index,S<g?(E.flags|=2,g):S):(E.flags|=2,g)):(E.flags|=1048576,g)}function m(E){return e&&E.alternate===null&&(E.flags|=2),E}function L(E,g,S,J){return g===null||g.tag!==6?(g=bs(S,E.mode,J),g.return=E,g):(g=o(g,S),g.return=E,g)}function h(E,g,S,J){var W=S.type;return W===ee?I(E,g,S.props.children,J,S.key):g!==null&&(g.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Le&&kc(W)===g.type)?(J=o(g,S.props),J.ref=Ua(E,g,S),J.return=E,J):(J=vi(S.type,S.key,S.props,null,E.mode,J),J.ref=Ua(E,g,S),J.return=E,J)}function A(E,g,S,J){return g===null||g.tag!==4||g.stateNode.containerInfo!==S.containerInfo||g.stateNode.implementation!==S.implementation?(g=Vs(S,E.mode,J),g.return=E,g):(g=o(g,S.children||[]),g.return=E,g)}function I(E,g,S,J,W){return g===null||g.tag!==7?(g=Bt(S,E.mode,J,W),g.return=E,g):(g=o(g,S),g.return=E,g)}function F(E,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return g=bs(""+g,E.mode,S),g.return=E,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case pe:return S=vi(g.type,g.key,g.props,null,E.mode,S),S.ref=Ua(E,null,g),S.return=E,S;case ie:return g=Vs(g,E.mode,S),g.return=E,g;case Le:var J=g._init;return F(E,J(g._payload),S)}if(At(g)||H(g))return g=Bt(g,E.mode,S,null),g.return=E,g;Kr(E,g)}return null}function _(E,g,S,J){var W=g!==null?g.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return W!==null?null:L(E,g,""+S,J);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case pe:return S.key===W?h(E,g,S,J):null;case ie:return S.key===W?A(E,g,S,J):null;case Le:return W=S._init,_(E,g,W(S._payload),J)}if(At(S)||H(S))return W!==null?null:I(E,g,S,J,null);Kr(E,S)}return null}function U(E,g,S,J,W){if(typeof J=="string"&&J!==""||typeof J=="number")return E=E.get(S)||null,L(g,E,""+J,W);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case pe:return E=E.get(J.key===null?S:J.key)||null,h(g,E,J,W);case ie:return E=E.get(J.key===null?S:J.key)||null,A(g,E,J,W);case Le:var ae=J._init;return U(E,g,S,ae(J._payload),W)}if(At(J)||H(J))return E=E.get(S)||null,I(g,E,J,W,null);Kr(g,J)}return null}function $(E,g,S,J){for(var W=null,ae=null,re=g,ce=g=0,$e=null;re!==null&&ce<S.length;ce++){re.index>ce?($e=re,re=null):$e=re.sibling;var Se=_(E,re,S[ce],J);if(Se===null){re===null&&(re=$e);break}e&&re&&Se.alternate===null&&n(E,re),g=l(Se,g,ce),ae===null?W=Se:ae.sibling=Se,ae=Se,re=$e}if(ce===S.length)return t(E,re),ke&&Rt(E,ce),W;if(re===null){for(;ce<S.length;ce++)re=F(E,S[ce],J),re!==null&&(g=l(re,g,ce),ae===null?W=re:ae.sibling=re,ae=re);return ke&&Rt(E,ce),W}for(re=a(E,re);ce<S.length;ce++)$e=U(re,E,ce,S[ce],J),$e!==null&&(e&&$e.alternate!==null&&re.delete($e.key===null?ce:$e.key),g=l($e,g,ce),ae===null?W=$e:ae.sibling=$e,ae=$e);return e&&re.forEach(function(Ct){return n(E,Ct)}),ke&&Rt(E,ce),W}function q(E,g,S,J){var W=H(S);if(typeof W!="function")throw Error(s(150));if(S=W.call(S),S==null)throw Error(s(151));for(var ae=W=null,re=g,ce=g=0,$e=null,Se=S.next();re!==null&&!Se.done;ce++,Se=S.next()){re.index>ce?($e=re,re=null):$e=re.sibling;var Ct=_(E,re,Se.value,J);if(Ct===null){re===null&&(re=$e);break}e&&re&&Ct.alternate===null&&n(E,re),g=l(Ct,g,ce),ae===null?W=Ct:ae.sibling=Ct,ae=Ct,re=$e}if(Se.done)return t(E,re),ke&&Rt(E,ce),W;if(re===null){for(;!Se.done;ce++,Se=S.next())Se=F(E,Se.value,J),Se!==null&&(g=l(Se,g,ce),ae===null?W=Se:ae.sibling=Se,ae=Se);return ke&&Rt(E,ce),W}for(re=a(E,re);!Se.done;ce++,Se=S.next())Se=U(re,E,ce,Se.value,J),Se!==null&&(e&&Se.alternate!==null&&re.delete(Se.key===null?ce:Se.key),g=l(Se,g,ce),ae===null?W=Se:ae.sibling=Se,ae=Se);return e&&re.forEach(function(Wf){return n(E,Wf)}),ke&&Rt(E,ce),W}function ze(E,g,S,J){if(typeof S=="object"&&S!==null&&S.type===ee&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case pe:e:{for(var W=S.key,ae=g;ae!==null;){if(ae.key===W){if(W=S.type,W===ee){if(ae.tag===7){t(E,ae.sibling),g=o(ae,S.props.children),g.return=E,E=g;break e}}else if(ae.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Le&&kc(W)===ae.type){t(E,ae.sibling),g=o(ae,S.props),g.ref=Ua(E,ae,S),g.return=E,E=g;break e}t(E,ae);break}else n(E,ae);ae=ae.sibling}S.type===ee?(g=Bt(S.props.children,E.mode,J,S.key),g.return=E,E=g):(J=vi(S.type,S.key,S.props,null,E.mode,J),J.ref=Ua(E,g,S),J.return=E,E=J)}return m(E);case ie:e:{for(ae=S.key;g!==null;){if(g.key===ae)if(g.tag===4&&g.stateNode.containerInfo===S.containerInfo&&g.stateNode.implementation===S.implementation){t(E,g.sibling),g=o(g,S.children||[]),g.return=E,E=g;break e}else{t(E,g);break}else n(E,g);g=g.sibling}g=Vs(S,E.mode,J),g.return=E,E=g}return m(E);case Le:return ae=S._init,ze(E,g,ae(S._payload),J)}if(At(S))return $(E,g,S,J);if(H(S))return q(E,g,S,J);Kr(E,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,g!==null&&g.tag===6?(t(E,g.sibling),g=o(g,S),g.return=E,E=g):(t(E,g),g=bs(S,E.mode,J),g.return=E,E=g),m(E)):t(E,g)}return ze}var ca=Rc(!0),_c=Rc(!1),$r=ft(null),qr=null,ua=null,Oo=null;function Fo(){Oo=ua=qr=null}function zo(e){var n=$r.current;De($r),e._currentValue=n}function Qo(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function da(e,n){qr=e,Oo=ua=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(un=!0),e.firstContext=null)}function Cn(e){var n=e._currentValue;if(Oo!==e)if(e={context:e,memoizedValue:n,next:null},ua===null){if(qr===null)throw Error(s(308));ua=e,qr.dependencies={lanes:0,firstContext:e}}else ua=ua.next=e;return n}var _t=null;function Jo(e){_t===null?_t=[e]:_t.push(e)}function Ic(e,n,t,a){var o=n.interleaved;return o===null?(t.next=t,Jo(n)):(t.next=o.next,o.next=t),n.interleaved=t,et(e,a)}function et(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var vt=!1;function Bo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Oc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nt(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function ht(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ce&2)!==0){var o=a.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),a.pending=n,et(e,t)}return o=a.interleaved,o===null?(n.next=n,Jo(a)):(n.next=o.next,o.next=n),a.interleaved=n,et(e,t)}function Hr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,to(e,t)}}function Fc(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var o=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var m={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?o=l=m:l=l.next=m,t=t.next}while(t!==null);l===null?o=l=n:l=l.next=n}else o=l=n;t={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:a.shared,effects:a.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Wr(e,n,t,a){var o=e.updateQueue;vt=!1;var l=o.firstBaseUpdate,m=o.lastBaseUpdate,L=o.shared.pending;if(L!==null){o.shared.pending=null;var h=L,A=h.next;h.next=null,m===null?l=A:m.next=A,m=h;var I=e.alternate;I!==null&&(I=I.updateQueue,L=I.lastBaseUpdate,L!==m&&(L===null?I.firstBaseUpdate=A:L.next=A,I.lastBaseUpdate=h))}if(l!==null){var F=o.baseState;m=0,I=A=h=null,L=l;do{var _=L.lane,U=L.eventTime;if((a&_)===_){I!==null&&(I=I.next={eventTime:U,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var $=e,q=L;switch(_=n,U=t,q.tag){case 1:if($=q.payload,typeof $=="function"){F=$.call(U,F,_);break e}F=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=q.payload,_=typeof $=="function"?$.call(U,F,_):$,_==null)break e;F=G({},F,_);break e;case 2:vt=!0}}L.callback!==null&&L.lane!==0&&(e.flags|=64,_=o.effects,_===null?o.effects=[L]:_.push(L))}else U={eventTime:U,lane:_,tag:L.tag,payload:L.payload,callback:L.callback,next:null},I===null?(A=I=U,h=F):I=I.next=U,m|=_;if(L=L.next,L===null){if(L=o.shared.pending,L===null)break;_=L,L=_.next,_.next=null,o.lastBaseUpdate=_,o.shared.pending=null}}while(!0);if(I===null&&(h=F),o.baseState=h,o.firstBaseUpdate=A,o.lastBaseUpdate=I,n=o.shared.interleaved,n!==null){o=n;do m|=o.lane,o=o.next;while(o!==n)}else l===null&&(o.shared.lanes=0);Ft|=m,e.lanes=m,e.memoizedState=F}}function zc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],o=a.callback;if(o!==null){if(a.callback=null,a=t,typeof o!="function")throw Error(s(191,o));o.call(a)}}}var Ka={},Yn=ft(Ka),$a=ft(Ka),qa=ft(Ka);function It(e){if(e===Ka)throw Error(s(174));return e}function Yo(e,n){switch(Ae(qa,n),Ae($a,e),Ae(Yn,Ka),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:O(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=O(n,e)}De(Yn),Ae(Yn,n)}function ma(){De(Yn),De($a),De(qa)}function Qc(e){It(qa.current);var n=It(Yn.current),t=O(n,e.type);n!==t&&(Ae($a,e),Ae(Yn,t))}function Go(e){$a.current===e&&(De(Yn),De($a))}var Re=ft(0);function Zr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Uo=[];function Ko(){for(var e=0;e<Uo.length;e++)Uo[e]._workInProgressVersionPrimary=null;Uo.length=0}var Xr=Z.ReactCurrentDispatcher,$o=Z.ReactCurrentBatchConfig,Ot=0,_e=null,Ye=null,Ue=null,ei=!1,Ha=!1,Wa=0,gf=0;function Xe(){throw Error(s(321))}function qo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Rn(e[t],n[t]))return!1;return!0}function Ho(e,n,t,a,o,l){if(Ot=l,_e=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Xr.current=e===null||e.memoizedState===null?Ef:Nf,e=t(a,o),Ha){l=0;do{if(Ha=!1,Wa=0,25<=l)throw Error(s(301));l+=1,Ue=Ye=null,n.updateQueue=null,Xr.current=Cf,e=t(a,o)}while(Ha)}if(Xr.current=ai,n=Ye!==null&&Ye.next!==null,Ot=0,Ue=Ye=_e=null,ei=!1,n)throw Error(s(300));return e}function Wo(){var e=Wa!==0;return Wa=0,e}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?_e.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function Sn(){if(Ye===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var n=Ue===null?_e.memoizedState:Ue.next;if(n!==null)Ue=n,Ye=e;else{if(e===null)throw Error(s(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},Ue===null?_e.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function Za(e,n){return typeof n=="function"?n(e):n}function Zo(e){var n=Sn(),t=n.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=e;var a=Ye,o=a.baseQueue,l=t.pending;if(l!==null){if(o!==null){var m=o.next;o.next=l.next,l.next=m}a.baseQueue=o=l,t.pending=null}if(o!==null){l=o.next,a=a.baseState;var L=m=null,h=null,A=l;do{var I=A.lane;if((Ot&I)===I)h!==null&&(h=h.next={lane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),a=A.hasEagerState?A.eagerState:e(a,A.action);else{var F={lane:I,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null};h===null?(L=h=F,m=a):h=h.next=F,_e.lanes|=I,Ft|=I}A=A.next}while(A!==null&&A!==l);h===null?m=a:h.next=L,Rn(a,n.memoizedState)||(un=!0),n.memoizedState=a,n.baseState=m,n.baseQueue=h,t.lastRenderedState=a}if(e=t.interleaved,e!==null){o=e;do l=o.lane,_e.lanes|=l,Ft|=l,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Xo(e){var n=Sn(),t=n.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=e;var a=t.dispatch,o=t.pending,l=n.memoizedState;if(o!==null){t.pending=null;var m=o=o.next;do l=e(l,m.action),m=m.next;while(m!==o);Rn(l,n.memoizedState)||(un=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,a]}function Jc(){}function Bc(e,n){var t=_e,a=Sn(),o=n(),l=!Rn(a.memoizedState,o);if(l&&(a.memoizedState=o,un=!0),a=a.queue,es(Uc.bind(null,t,a,e),[e]),a.getSnapshot!==n||l||Ue!==null&&Ue.memoizedState.tag&1){if(t.flags|=2048,Xa(9,Gc.bind(null,t,a,o,n),void 0,null),Ke===null)throw Error(s(349));(Ot&30)!==0||Yc(t,n,o)}return o}function Yc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=_e.updateQueue,n===null?(n={lastEffect:null,stores:null},_e.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Gc(e,n,t,a){n.value=t,n.getSnapshot=a,Kc(n)&&$c(e)}function Uc(e,n,t){return t(function(){Kc(n)&&$c(e)})}function Kc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Rn(e,t)}catch{return!0}}function $c(e){var n=et(e,1);n!==null&&zn(n,e,1,-1)}function qc(e){var n=Gn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:e},n.queue=e,e=e.dispatch=Mf.bind(null,_e,e),[n.memoizedState,e]}function Xa(e,n,t,a){return e={tag:e,create:n,destroy:t,deps:a,next:null},n=_e.updateQueue,n===null?(n={lastEffect:null,stores:null},_e.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e)),e}function Hc(){return Sn().memoizedState}function ni(e,n,t,a){var o=Gn();_e.flags|=e,o.memoizedState=Xa(1|n,t,void 0,a===void 0?null:a)}function ti(e,n,t,a){var o=Sn();a=a===void 0?null:a;var l=void 0;if(Ye!==null){var m=Ye.memoizedState;if(l=m.destroy,a!==null&&qo(a,m.deps)){o.memoizedState=Xa(n,t,l,a);return}}_e.flags|=e,o.memoizedState=Xa(1|n,t,l,a)}function Wc(e,n){return ni(8390656,8,e,n)}function es(e,n){return ti(2048,8,e,n)}function Zc(e,n){return ti(4,2,e,n)}function Xc(e,n){return ti(4,4,e,n)}function eu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function nu(e,n,t){return t=t!=null?t.concat([e]):null,ti(4,4,eu.bind(null,n,e),t)}function ns(){}function tu(e,n){var t=Sn();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&qo(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function au(e,n){var t=Sn();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&qo(n,a[1])?a[0]:(e=e(),t.memoizedState=[e,n],e)}function ru(e,n,t){return(Ot&21)===0?(e.baseState&&(e.baseState=!1,un=!0),e.memoizedState=t):(Rn(t,n)||(t=kl(),_e.lanes|=t,Ft|=t,e.baseState=!0),n)}function Pf(e,n){var t=be;be=t!==0&&4>t?t:4,e(!0);var a=$o.transition;$o.transition={};try{e(!1),n()}finally{be=t,$o.transition=a}}function iu(){return Sn().memoizedState}function yf(e,n,t){var a=Mt(e);if(t={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null},ou(e))su(n,t);else if(t=Ic(e,n,t,a),t!==null){var o=on();zn(t,e,a,o),lu(t,n,a)}}function Mf(e,n,t){var a=Mt(e),o={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null};if(ou(e))su(n,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var m=n.lastRenderedState,L=l(m,t);if(o.hasEagerState=!0,o.eagerState=L,Rn(L,m)){var h=n.interleaved;h===null?(o.next=o,Jo(n)):(o.next=h.next,h.next=o),n.interleaved=o;return}}catch{}finally{}t=Ic(e,n,o,a),t!==null&&(o=on(),zn(t,e,a,o),lu(t,n,a))}}function ou(e){var n=e.alternate;return e===_e||n!==null&&n===_e}function su(e,n){Ha=ei=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function lu(e,n,t){if((t&4194240)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,to(e,t)}}var ai={readContext:Cn,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},Ef={readContext:Cn,useCallback:function(e,n){return Gn().memoizedState=[e,n===void 0?null:n],e},useContext:Cn,useEffect:Wc,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,ni(4194308,4,eu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return ni(4194308,4,e,n)},useInsertionEffect:function(e,n){return ni(4,2,e,n)},useMemo:function(e,n){var t=Gn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var a=Gn();return n=t!==void 0?t(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=yf.bind(null,_e,e),[a.memoizedState,e]},useRef:function(e){var n=Gn();return e={current:e},n.memoizedState=e},useState:qc,useDebugValue:ns,useDeferredValue:function(e){return Gn().memoizedState=e},useTransition:function(){var e=qc(!1),n=e[0];return e=Pf.bind(null,e[1]),Gn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var a=_e,o=Gn();if(ke){if(t===void 0)throw Error(s(407));t=t()}else{if(t=n(),Ke===null)throw Error(s(349));(Ot&30)!==0||Yc(a,n,t)}o.memoizedState=t;var l={value:t,getSnapshot:n};return o.queue=l,Wc(Uc.bind(null,a,l,e),[e]),a.flags|=2048,Xa(9,Gc.bind(null,a,l,t,n),void 0,null),t},useId:function(){var e=Gn(),n=Ke.identifierPrefix;if(ke){var t=Xn,a=Zn;t=(a&~(1<<32-kn(a)-1)).toString(32)+t,n=":"+n+"R"+t,t=Wa++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=gf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Nf={readContext:Cn,useCallback:tu,useContext:Cn,useEffect:es,useImperativeHandle:nu,useInsertionEffect:Zc,useLayoutEffect:Xc,useMemo:au,useReducer:Zo,useRef:Hc,useState:function(){return Zo(Za)},useDebugValue:ns,useDeferredValue:function(e){var n=Sn();return ru(n,Ye.memoizedState,e)},useTransition:function(){var e=Zo(Za)[0],n=Sn().memoizedState;return[e,n]},useMutableSource:Jc,useSyncExternalStore:Bc,useId:iu,unstable_isNewReconciler:!1},Cf={readContext:Cn,useCallback:tu,useContext:Cn,useEffect:es,useImperativeHandle:nu,useInsertionEffect:Zc,useLayoutEffect:Xc,useMemo:au,useReducer:Xo,useRef:Hc,useState:function(){return Xo(Za)},useDebugValue:ns,useDeferredValue:function(e){var n=Sn();return Ye===null?n.memoizedState=e:ru(n,Ye.memoizedState,e)},useTransition:function(){var e=Xo(Za)[0],n=Sn().memoizedState;return[e,n]},useMutableSource:Jc,useSyncExternalStore:Bc,useId:iu,unstable_isNewReconciler:!1};function In(e,n){if(e&&e.defaultProps){n=G({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function ts(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:G({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ri={isMounted:function(e){return(e=e._reactInternals)?wt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var a=on(),o=Mt(e),l=nt(a,o);l.payload=n,t!=null&&(l.callback=t),n=ht(e,l,o),n!==null&&(zn(n,e,o,a),Hr(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=on(),o=Mt(e),l=nt(a,o);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=ht(e,l,o),n!==null&&(zn(n,e,o,a),Hr(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=on(),a=Mt(e),o=nt(t,a);o.tag=2,n!=null&&(o.callback=n),n=ht(e,o,a),n!==null&&(zn(n,e,a,t),Hr(n,e,a))}};function cu(e,n,t,a,o,l,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,l,m):n.prototype&&n.prototype.isPureReactComponent?!Fa(t,a)||!Fa(o,l):!0}function uu(e,n,t){var a=!1,o=Tt,l=n.contextType;return typeof l=="object"&&l!==null?l=Cn(l):(o=cn(n)?Dt:Ze.current,a=n.contextTypes,l=(a=a!=null)?ia(e,o):Tt),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ri,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),n}function du(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&ri.enqueueReplaceState(n,n.state,null)}function as(e,n,t,a){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},Bo(e);var l=n.contextType;typeof l=="object"&&l!==null?o.context=Cn(l):(l=cn(n)?Dt:Ze.current,o.context=ia(e,l)),o.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(ts(e,n,l,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&ri.enqueueReplaceState(o,o.state,null),Wr(e,t,o,a),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function pa(e,n){try{var t="",a=n;do t+=B(a),a=a.return;while(a);var o=t}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:o,digest:null}}function rs(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function is(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Sf=typeof WeakMap=="function"?WeakMap:Map;function mu(e,n,t){t=nt(-1,t),t.tag=3,t.payload={element:null};var a=n.value;return t.callback=function(){di||(di=!0,Ps=a),is(e,n)},t}function pu(e,n,t){t=nt(-1,t),t.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var o=n.value;t.payload=function(){return a(o)},t.callback=function(){is(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){is(e,n),typeof a!="function"&&(Pt===null?Pt=new Set([this]):Pt.add(this));var m=n.stack;this.componentDidCatch(n.value,{componentStack:m!==null?m:""})}),t}function fu(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new Sf;var o=new Set;a.set(n,o)}else o=a.get(n),o===void 0&&(o=new Set,a.set(n,o));o.has(t)||(o.add(t),e=zf.bind(null,e,n,t),n.then(e,e))}function Tu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Lu(e,n,t,a,o){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=nt(-1,1),n.tag=2,ht(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var xf=Z.ReactCurrentOwner,un=!1;function rn(e,n,t,a){n.child=e===null?_c(n,null,t,a):ca(n,e.child,t,a)}function vu(e,n,t,a,o){t=t.render;var l=n.ref;return da(n,o),a=Ho(e,n,t,a,l,o),t=Wo(),e!==null&&!un?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,tt(e,n,o)):(ke&&t&&Do(n),n.flags|=1,rn(e,n,a,o),n.child)}function hu(e,n,t,a,o){if(e===null){var l=t.type;return typeof l=="function"&&!xs(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,gu(e,n,l,a,o)):(e=vi(t.type,null,a,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,(e.lanes&o)===0){var m=l.memoizedProps;if(t=t.compare,t=t!==null?t:Fa,t(m,a)&&e.ref===n.ref)return tt(e,n,o)}return n.flags|=1,e=Nt(l,a),e.ref=n.ref,e.return=n,n.child=e}function gu(e,n,t,a,o){if(e!==null){var l=e.memoizedProps;if(Fa(l,a)&&e.ref===n.ref)if(un=!1,n.pendingProps=a=l,(e.lanes&o)!==0)(e.flags&131072)!==0&&(un=!0);else return n.lanes=e.lanes,tt(e,n,o)}return os(e,n,t,a,o)}function Pu(e,n,t){var a=n.pendingProps,o=a.children,l=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ae(Ta,vn),vn|=t;else{if((t&1073741824)===0)return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Ae(Ta,vn),vn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=l!==null?l.baseLanes:t,Ae(Ta,vn),vn|=a}else l!==null?(a=l.baseLanes|t,n.memoizedState=null):a=t,Ae(Ta,vn),vn|=a;return rn(e,n,o,t),n.child}function yu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function os(e,n,t,a,o){var l=cn(t)?Dt:Ze.current;return l=ia(n,l),da(n,o),t=Ho(e,n,t,a,l,o),a=Wo(),e!==null&&!un?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,tt(e,n,o)):(ke&&a&&Do(n),n.flags|=1,rn(e,n,t,o),n.child)}function Mu(e,n,t,a,o){if(cn(t)){var l=!0;Jr(n)}else l=!1;if(da(n,o),n.stateNode===null)oi(e,n),uu(n,t,a),as(n,t,a,o),a=!0;else if(e===null){var m=n.stateNode,L=n.memoizedProps;m.props=L;var h=m.context,A=t.contextType;typeof A=="object"&&A!==null?A=Cn(A):(A=cn(t)?Dt:Ze.current,A=ia(n,A));var I=t.getDerivedStateFromProps,F=typeof I=="function"||typeof m.getSnapshotBeforeUpdate=="function";F||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(L!==a||h!==A)&&du(n,m,a,A),vt=!1;var _=n.memoizedState;m.state=_,Wr(n,a,m,o),h=n.memoizedState,L!==a||_!==h||ln.current||vt?(typeof I=="function"&&(ts(n,t,I,a),h=n.memoizedState),(L=vt||cu(n,t,L,a,_,h,A))?(F||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(n.flags|=4194308)):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=h),m.props=a,m.state=h,m.context=A,a=L):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{m=n.stateNode,Oc(e,n),L=n.memoizedProps,A=n.type===n.elementType?L:In(n.type,L),m.props=A,F=n.pendingProps,_=m.context,h=t.contextType,typeof h=="object"&&h!==null?h=Cn(h):(h=cn(t)?Dt:Ze.current,h=ia(n,h));var U=t.getDerivedStateFromProps;(I=typeof U=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(L!==F||_!==h)&&du(n,m,a,h),vt=!1,_=n.memoizedState,m.state=_,Wr(n,a,m,o);var $=n.memoizedState;L!==F||_!==$||ln.current||vt?(typeof U=="function"&&(ts(n,t,U,a),$=n.memoizedState),(A=vt||cu(n,t,A,a,_,$,h)||!1)?(I||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(a,$,h),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(a,$,h)),typeof m.componentDidUpdate=="function"&&(n.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof m.componentDidUpdate!="function"||L===e.memoizedProps&&_===e.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||L===e.memoizedProps&&_===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=$),m.props=a,m.state=$,m.context=h,a=A):(typeof m.componentDidUpdate!="function"||L===e.memoizedProps&&_===e.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||L===e.memoizedProps&&_===e.memoizedState||(n.flags|=1024),a=!1)}return ss(e,n,t,a,l,o)}function ss(e,n,t,a,o,l){yu(e,n);var m=(n.flags&128)!==0;if(!a&&!m)return o&&xc(n,t,!1),tt(e,n,l);a=n.stateNode,xf.current=n;var L=m&&typeof t.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&m?(n.child=ca(n,e.child,null,l),n.child=ca(n,null,L,l)):rn(e,n,L,l),n.memoizedState=a.state,o&&xc(n,t,!0),n.child}function Eu(e){var n=e.stateNode;n.pendingContext?Cc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Cc(e,n.context,!1),Yo(e,n.containerInfo)}function Nu(e,n,t,a,o){return la(),Io(o),n.flags|=256,rn(e,n,t,a),n.child}var ls={dehydrated:null,treeContext:null,retryLane:0};function cs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Cu(e,n,t){var a=n.pendingProps,o=Re.current,l=!1,m=(n.flags&128)!==0,L;if((L=m)||(L=e!==null&&e.memoizedState===null?!1:(o&2)!==0),L?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Ae(Re,o&1),e===null)return _o(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(m=a.children,e=a.fallback,l?(a=n.mode,l=n.child,m={mode:"hidden",children:m},(a&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=m):l=hi(m,a,0,null),e=Bt(e,a,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=cs(t),n.memoizedState=ls,e):us(n,m));if(o=e.memoizedState,o!==null&&(L=o.dehydrated,L!==null))return bf(e,n,m,a,L,o,t);if(l){l=a.fallback,m=n.mode,o=e.child,L=o.sibling;var h={mode:"hidden",children:a.children};return(m&1)===0&&n.child!==o?(a=n.child,a.childLanes=0,a.pendingProps=h,n.deletions=null):(a=Nt(o,h),a.subtreeFlags=o.subtreeFlags&14680064),L!==null?l=Nt(L,l):(l=Bt(l,m,t,null),l.flags|=2),l.return=n,a.return=n,a.sibling=l,n.child=a,a=l,l=n.child,m=e.child.memoizedState,m=m===null?cs(t):{baseLanes:m.baseLanes|t,cachePool:null,transitions:m.transitions},l.memoizedState=m,l.childLanes=e.childLanes&~t,n.memoizedState=ls,a}return l=e.child,e=l.sibling,a=Nt(l,{mode:"visible",children:a.children}),(n.mode&1)===0&&(a.lanes=t),a.return=n,a.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=a,n.memoizedState=null,a}function us(e,n){return n=hi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ii(e,n,t,a){return a!==null&&Io(a),ca(n,e.child,null,t),e=us(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function bf(e,n,t,a,o,l,m){if(t)return n.flags&256?(n.flags&=-257,a=rs(Error(s(422))),ii(e,n,m,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=a.fallback,o=n.mode,a=hi({mode:"visible",children:a.children},o,0,null),l=Bt(l,o,m,null),l.flags|=2,a.return=n,l.return=n,a.sibling=l,n.child=a,(n.mode&1)!==0&&ca(n,e.child,null,m),n.child.memoizedState=cs(m),n.memoizedState=ls,l);if((n.mode&1)===0)return ii(e,n,m,null);if(o.data==="$!"){if(a=o.nextSibling&&o.nextSibling.dataset,a)var L=a.dgst;return a=L,l=Error(s(419)),a=rs(l,a,void 0),ii(e,n,m,a)}if(L=(m&e.childLanes)!==0,un||L){if(a=Ke,a!==null){switch(m&-m){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(a.suspendedLanes|m))!==0?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,et(e,o),zn(a,e,o,-1))}return Ss(),a=rs(Error(s(421))),ii(e,n,m,a)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=Qf.bind(null,e),o._reactRetry=n,null):(e=l.treeContext,Ln=pt(o.nextSibling),Tn=n,ke=!0,_n=null,e!==null&&(En[Nn++]=Zn,En[Nn++]=Xn,En[Nn++]=kt,Zn=e.id,Xn=e.overflow,kt=n),n=us(n,a.children),n.flags|=4096,n)}function Su(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Qo(e.return,n,t)}function ds(e,n,t,a,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:o}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=a,l.tail=t,l.tailMode=o)}function xu(e,n,t){var a=n.pendingProps,o=a.revealOrder,l=a.tail;if(rn(e,n,a.children,t),a=Re.current,(a&2)!==0)a=a&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Su(e,t,n);else if(e.tag===19)Su(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(Ae(Re,a),(n.mode&1)===0)n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&Zr(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),ds(n,!1,o,t,l);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&Zr(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}ds(n,!0,t,null,l);break;case"together":ds(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function oi(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function tt(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Ft|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,t=Nt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Nt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Vf(e,n,t){switch(n.tag){case 3:Eu(n),la();break;case 5:Qc(n);break;case 1:cn(n.type)&&Jr(n);break;case 4:Yo(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,o=n.memoizedProps.value;Ae($r,a._currentValue),a._currentValue=o;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(Ae(Re,Re.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?Cu(e,n,t):(Ae(Re,Re.current&1),e=tt(e,n,t),e!==null?e.sibling:null);Ae(Re,Re.current&1);break;case 19:if(a=(t&n.childLanes)!==0,(e.flags&128)!==0){if(a)return xu(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Ae(Re,Re.current),a)break;return null;case 22:case 23:return n.lanes=0,Pu(e,n,t)}return tt(e,n,t)}var bu,ms,Vu,Au;bu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},ms=function(){},Vu=function(e,n,t,a){var o=e.memoizedProps;if(o!==a){e=n.stateNode,It(Yn.current);var l=null;switch(t){case"input":o=k(e,o),a=k(e,a),l=[];break;case"select":o=G({},o,{value:void 0}),a=G({},a,{value:void 0}),l=[];break;case"textarea":o=Kt(e,o),a=Kt(e,a),l=[];break;default:typeof o.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Fr)}Gi(t,a);var m;t=null;for(A in o)if(!a.hasOwnProperty(A)&&o.hasOwnProperty(A)&&o[A]!=null)if(A==="style"){var L=o[A];for(m in L)L.hasOwnProperty(m)&&(t||(t={}),t[m]="")}else A!=="dangerouslySetInnerHTML"&&A!=="children"&&A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&A!=="autoFocus"&&(d.hasOwnProperty(A)?l||(l=[]):(l=l||[]).push(A,null));for(A in a){var h=a[A];if(L=o!=null?o[A]:void 0,a.hasOwnProperty(A)&&h!==L&&(h!=null||L!=null))if(A==="style")if(L){for(m in L)!L.hasOwnProperty(m)||h&&h.hasOwnProperty(m)||(t||(t={}),t[m]="");for(m in h)h.hasOwnProperty(m)&&L[m]!==h[m]&&(t||(t={}),t[m]=h[m])}else t||(l||(l=[]),l.push(A,t)),t=h;else A==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,L=L?L.__html:void 0,h!=null&&L!==h&&(l=l||[]).push(A,h)):A==="children"?typeof h!="string"&&typeof h!="number"||(l=l||[]).push(A,""+h):A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&(d.hasOwnProperty(A)?(h!=null&&A==="onScroll"&&je("scroll",e),l||L===h||(l=[])):(l=l||[]).push(A,h))}t&&(l=l||[]).push("style",t);var A=l;(n.updateQueue=A)&&(n.flags|=4)}},Au=function(e,n,t,a){t!==a&&(n.flags|=4)};function er(e,n){if(!ke)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function en(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,a|=o.subtreeFlags&14680064,a|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,a|=o.subtreeFlags,a|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function Af(e,n,t){var a=n.pendingProps;switch(ko(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return cn(n.type)&&Qr(),en(n),null;case 3:return a=n.stateNode,ma(),De(ln),De(Ze),Ko(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ur(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,_n!==null&&(Es(_n),_n=null))),ms(e,n),en(n),null;case 5:Go(n);var o=It(qa.current);if(t=n.type,e!==null&&n.stateNode!=null)Vu(e,n,t,a,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(s(166));return en(n),null}if(e=It(Yn.current),Ur(n)){a=n.stateNode,t=n.type;var l=n.memoizedProps;switch(a[Bn]=n,a[Ya]=l,e=(n.mode&1)!==0,t){case"dialog":je("cancel",a),je("close",a);break;case"iframe":case"object":case"embed":je("load",a);break;case"video":case"audio":for(o=0;o<Qa.length;o++)je(Qa[o],a);break;case"source":je("error",a);break;case"img":case"image":case"link":je("error",a),je("load",a);break;case"details":je("toggle",a);break;case"input":Ne(a,l),je("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!l.multiple},je("invalid",a);break;case"textarea":Lr(a,l),je("invalid",a)}Gi(t,l),o=null;for(var m in l)if(l.hasOwnProperty(m)){var L=l[m];m==="children"?typeof L=="string"?a.textContent!==L&&(l.suppressHydrationWarning!==!0&&Or(a.textContent,L,e),o=["children",L]):typeof L=="number"&&a.textContent!==""+L&&(l.suppressHydrationWarning!==!0&&Or(a.textContent,L,e),o=["children",""+L]):d.hasOwnProperty(m)&&L!=null&&m==="onScroll"&&je("scroll",a)}switch(t){case"input":sn(a),Dn(a,l,!0);break;case"textarea":sn(a),Ea(a);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(a.onclick=Fr)}a=o,n.updateQueue=a,a!==null&&(n.flags|=4)}else{m=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=b(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=m.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=m.createElement(t,{is:a.is}):(e=m.createElement(t),t==="select"&&(m=e,a.multiple?m.multiple=!0:a.size&&(m.size=a.size))):e=m.createElementNS(e,t),e[Bn]=n,e[Ya]=a,bu(e,n,!1,!1),n.stateNode=e;e:{switch(m=Ui(t,a),t){case"dialog":je("cancel",e),je("close",e),o=a;break;case"iframe":case"object":case"embed":je("load",e),o=a;break;case"video":case"audio":for(o=0;o<Qa.length;o++)je(Qa[o],e);o=a;break;case"source":je("error",e),o=a;break;case"img":case"image":case"link":je("error",e),je("load",e),o=a;break;case"details":je("toggle",e),o=a;break;case"input":Ne(e,a),o=k(e,a),je("invalid",e);break;case"option":o=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},o=G({},a,{value:void 0}),je("invalid",e);break;case"textarea":Lr(e,a),o=Kt(e,a),je("invalid",e);break;default:o=a}Gi(t,o),L=o;for(l in L)if(L.hasOwnProperty(l)){var h=L[l];l==="style"?gl(e,h):l==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&xe(e,h)):l==="children"?typeof h=="string"?(t!=="textarea"||h!=="")&&yn(e,h):typeof h=="number"&&yn(e,""+h):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(d.hasOwnProperty(l)?h!=null&&l==="onScroll"&&je("scroll",e):h!=null&&te(e,l,h,m))}switch(t){case"input":sn(e),Dn(e,a,!1);break;case"textarea":sn(e),Ea(e);break;case"option":a.value!=null&&e.setAttribute("value",""+he(a.value));break;case"select":e.multiple=!!a.multiple,l=a.value,l!=null?it(e,!!a.multiple,l,!1):a.defaultValue!=null&&it(e,!!a.multiple,a.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Fr)}switch(t){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return en(n),null;case 6:if(e&&n.stateNode!=null)Au(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(s(166));if(t=It(qa.current),It(Yn.current),Ur(n)){if(a=n.stateNode,t=n.memoizedProps,a[Bn]=n,(l=a.nodeValue!==t)&&(e=Tn,e!==null))switch(e.tag){case 3:Or(a.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Or(a.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else a=(t.nodeType===9?t:t.ownerDocument).createTextNode(a),a[Bn]=n,n.stateNode=a}return en(n),null;case 13:if(De(Re),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ke&&Ln!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Dc(),la(),n.flags|=98560,l=!1;else if(l=Ur(n),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[Bn]=n}else la(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),l=!1}else _n!==null&&(Es(_n),_n=null),l=!0;if(!l)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(Re.current&1)!==0?Ge===0&&(Ge=3):Ss())),n.updateQueue!==null&&(n.flags|=4),en(n),null);case 4:return ma(),ms(e,n),e===null&&Ja(n.stateNode.containerInfo),en(n),null;case 10:return zo(n.type._context),en(n),null;case 17:return cn(n.type)&&Qr(),en(n),null;case 19:if(De(Re),l=n.memoizedState,l===null)return en(n),null;if(a=(n.flags&128)!==0,m=l.rendering,m===null)if(a)er(l,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(m=Zr(e),m!==null){for(n.flags|=128,er(l,!1),a=m.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=t,t=n.child;t!==null;)l=t,e=a,l.flags&=14680066,m=l.alternate,m===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=m.childLanes,l.lanes=m.lanes,l.child=m.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=m.memoizedProps,l.memoizedState=m.memoizedState,l.updateQueue=m.updateQueue,l.type=m.type,e=m.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return Ae(Re,Re.current&1|2),n.child}e=e.sibling}l.tail!==null&&Fe()>La&&(n.flags|=128,a=!0,er(l,!1),n.lanes=4194304)}else{if(!a)if(e=Zr(m),e!==null){if(n.flags|=128,a=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),er(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!ke)return en(n),null}else 2*Fe()-l.renderingStartTime>La&&t!==1073741824&&(n.flags|=128,a=!0,er(l,!1),n.lanes=4194304);l.isBackwards?(m.sibling=n.child,n.child=m):(t=l.last,t!==null?t.sibling=m:n.child=m,l.last=m)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Fe(),n.sibling=null,t=Re.current,Ae(Re,a?t&1|2:t&1),n):(en(n),null);case 22:case 23:return Cs(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&(n.mode&1)!==0?(vn&1073741824)!==0&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),null;case 24:return null;case 25:return null}throw Error(s(156,n.tag))}function wf(e,n){switch(ko(n),n.tag){case 1:return cn(n.type)&&Qr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ma(),De(ln),De(Ze),Ko(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return Go(n),null;case 13:if(De(Re),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));la()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return De(Re),null;case 4:return ma(),null;case 10:return zo(n.type._context),null;case 22:case 23:return Cs(),null;case 24:return null;default:return null}}var si=!1,nn=!1,jf=typeof WeakSet=="function"?WeakSet:Set,K=null;function fa(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(a){Oe(e,n,a)}else t.current=null}function ps(e,n,t){try{t()}catch(a){Oe(e,n,a)}}var wu=!1;function Df(e,n){if(Co=xr,e=cc(),vo(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var o=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var m=0,L=-1,h=-1,A=0,I=0,F=e,_=null;n:for(;;){for(var U;F!==t||o!==0&&F.nodeType!==3||(L=m+o),F!==l||a!==0&&F.nodeType!==3||(h=m+a),F.nodeType===3&&(m+=F.nodeValue.length),(U=F.firstChild)!==null;)_=F,F=U;for(;;){if(F===e)break n;if(_===t&&++A===o&&(L=m),_===l&&++I===a&&(h=m),(U=F.nextSibling)!==null)break;F=_,_=F.parentNode}F=U}t=L===-1||h===-1?null:{start:L,end:h}}else t=null}t=t||{start:0,end:0}}else t=null;for(So={focusedElem:e,selectionRange:t},xr=!1,K=n;K!==null;)if(n=K,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,K=e;else for(;K!==null;){n=K;try{var $=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if($!==null){var q=$.memoizedProps,ze=$.memoizedState,E=n.stateNode,g=E.getSnapshotBeforeUpdate(n.elementType===n.type?q:In(n.type,q),ze);E.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var S=n.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(J){Oe(n,n.return,J)}if(e=n.sibling,e!==null){e.return=n.return,K=e;break}K=n.return}return $=wu,wu=!1,$}function nr(e,n,t){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var o=a=a.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&ps(n,t,l)}o=o.next}while(o!==a)}}function li(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var a=t.create;t.destroy=a()}t=t.next}while(t!==n)}}function fs(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function ju(e){var n=e.alternate;n!==null&&(e.alternate=null,ju(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Bn],delete n[Ya],delete n[Ao],delete n[Tf],delete n[Lf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Du(e){return e.tag===5||e.tag===3||e.tag===4}function ku(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Du(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ts(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Fr));else if(a!==4&&(e=e.child,e!==null))for(Ts(e,n,t),e=e.sibling;e!==null;)Ts(e,n,t),e=e.sibling}function Ls(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Ls(e,n,t),e=e.sibling;e!==null;)Ls(e,n,t),e=e.sibling}var qe=null,On=!1;function gt(e,n,t){for(t=t.child;t!==null;)Ru(e,n,t),t=t.sibling}function Ru(e,n,t){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(yr,t)}catch{}switch(t.tag){case 5:nn||fa(t,n);case 6:var a=qe,o=On;qe=null,gt(e,n,t),qe=a,On=o,qe!==null&&(On?(e=qe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):qe.removeChild(t.stateNode));break;case 18:qe!==null&&(On?(e=qe,t=t.stateNode,e.nodeType===8?Vo(e.parentNode,t):e.nodeType===1&&Vo(e,t),Da(e)):Vo(qe,t.stateNode));break;case 4:a=qe,o=On,qe=t.stateNode.containerInfo,On=!0,gt(e,n,t),qe=a,On=o;break;case 0:case 11:case 14:case 15:if(!nn&&(a=t.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){o=a=a.next;do{var l=o,m=l.destroy;l=l.tag,m!==void 0&&((l&2)!==0||(l&4)!==0)&&ps(t,n,m),o=o.next}while(o!==a)}gt(e,n,t);break;case 1:if(!nn&&(fa(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=t.memoizedProps,a.state=t.memoizedState,a.componentWillUnmount()}catch(L){Oe(t,n,L)}gt(e,n,t);break;case 21:gt(e,n,t);break;case 22:t.mode&1?(nn=(a=nn)||t.memoizedState!==null,gt(e,n,t),nn=a):gt(e,n,t);break;default:gt(e,n,t)}}function _u(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new jf),n.forEach(function(a){var o=Jf.bind(null,e,a);t.has(a)||(t.add(a),a.then(o,o))})}}function Fn(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];try{var l=e,m=n,L=m;e:for(;L!==null;){switch(L.tag){case 5:qe=L.stateNode,On=!1;break e;case 3:qe=L.stateNode.containerInfo,On=!0;break e;case 4:qe=L.stateNode.containerInfo,On=!0;break e}L=L.return}if(qe===null)throw Error(s(160));Ru(l,m,o),qe=null,On=!1;var h=o.alternate;h!==null&&(h.return=null),o.return=null}catch(A){Oe(o,n,A)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Iu(n,e),n=n.sibling}function Iu(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Fn(n,e),Un(e),a&4){try{nr(3,e,e.return),li(3,e)}catch(q){Oe(e,e.return,q)}try{nr(5,e,e.return)}catch(q){Oe(e,e.return,q)}}break;case 1:Fn(n,e),Un(e),a&512&&t!==null&&fa(t,t.return);break;case 5:if(Fn(n,e),Un(e),a&512&&t!==null&&fa(t,t.return),e.flags&32){var o=e.stateNode;try{yn(o,"")}catch(q){Oe(e,e.return,q)}}if(a&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,m=t!==null?t.memoizedProps:l,L=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{L==="input"&&l.type==="radio"&&l.name!=null&&we(o,l),Ui(L,m);var A=Ui(L,l);for(m=0;m<h.length;m+=2){var I=h[m],F=h[m+1];I==="style"?gl(o,F):I==="dangerouslySetInnerHTML"?xe(o,F):I==="children"?yn(o,F):te(o,I,F,A)}switch(L){case"input":jn(o,l);break;case"textarea":vr(o,l);break;case"select":var _=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var U=l.value;U!=null?it(o,!!l.multiple,U,!1):_!==!!l.multiple&&(l.defaultValue!=null?it(o,!!l.multiple,l.defaultValue,!0):it(o,!!l.multiple,l.multiple?[]:"",!1))}o[Ya]=l}catch(q){Oe(e,e.return,q)}}break;case 6:if(Fn(n,e),Un(e),a&4){if(e.stateNode===null)throw Error(s(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(q){Oe(e,e.return,q)}}break;case 3:if(Fn(n,e),Un(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Da(n.containerInfo)}catch(q){Oe(e,e.return,q)}break;case 4:Fn(n,e),Un(e);break;case 13:Fn(n,e),Un(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(gs=Fe())),a&4&&_u(e);break;case 22:if(I=t!==null&&t.memoizedState!==null,e.mode&1?(nn=(A=nn)||I,Fn(n,e),nn=A):Fn(n,e),Un(e),a&8192){if(A=e.memoizedState!==null,(e.stateNode.isHidden=A)&&!I&&(e.mode&1)!==0)for(K=e,I=e.child;I!==null;){for(F=K=I;K!==null;){switch(_=K,U=_.child,_.tag){case 0:case 11:case 14:case 15:nr(4,_,_.return);break;case 1:fa(_,_.return);var $=_.stateNode;if(typeof $.componentWillUnmount=="function"){a=_,t=_.return;try{n=a,$.props=n.memoizedProps,$.state=n.memoizedState,$.componentWillUnmount()}catch(q){Oe(a,t,q)}}break;case 5:fa(_,_.return);break;case 22:if(_.memoizedState!==null){zu(F);continue}}U!==null?(U.return=_,K=U):zu(F)}I=I.sibling}e:for(I=null,F=e;;){if(F.tag===5){if(I===null){I=F;try{o=F.stateNode,A?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(L=F.stateNode,h=F.memoizedProps.style,m=h!=null&&h.hasOwnProperty("display")?h.display:null,L.style.display=hl("display",m))}catch(q){Oe(e,e.return,q)}}}else if(F.tag===6){if(I===null)try{F.stateNode.nodeValue=A?"":F.memoizedProps}catch(q){Oe(e,e.return,q)}}else if((F.tag!==22&&F.tag!==23||F.memoizedState===null||F===e)&&F.child!==null){F.child.return=F,F=F.child;continue}if(F===e)break e;for(;F.sibling===null;){if(F.return===null||F.return===e)break e;I===F&&(I=null),F=F.return}I===F&&(I=null),F.sibling.return=F.return,F=F.sibling}}break;case 19:Fn(n,e),Un(e),a&4&&_u(e);break;case 21:break;default:Fn(n,e),Un(e)}}function Un(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Du(t)){var a=t;break e}t=t.return}throw Error(s(160))}switch(a.tag){case 5:var o=a.stateNode;a.flags&32&&(yn(o,""),a.flags&=-33);var l=ku(e);Ls(e,l,o);break;case 3:case 4:var m=a.stateNode.containerInfo,L=ku(e);Ts(e,L,m);break;default:throw Error(s(161))}}catch(h){Oe(e,e.return,h)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function kf(e,n,t){K=e,Ou(e)}function Ou(e,n,t){for(var a=(e.mode&1)!==0;K!==null;){var o=K,l=o.child;if(o.tag===22&&a){var m=o.memoizedState!==null||si;if(!m){var L=o.alternate,h=L!==null&&L.memoizedState!==null||nn;L=si;var A=nn;if(si=m,(nn=h)&&!A)for(K=o;K!==null;)m=K,h=m.child,m.tag===22&&m.memoizedState!==null?Qu(o):h!==null?(h.return=m,K=h):Qu(o);for(;l!==null;)K=l,Ou(l),l=l.sibling;K=o,si=L,nn=A}Fu(e)}else(o.subtreeFlags&8772)!==0&&l!==null?(l.return=o,K=l):Fu(e)}}function Fu(e){for(;K!==null;){var n=K;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:nn||li(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!nn)if(t===null)a.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:In(n.type,t.memoizedProps);a.componentDidUpdate(o,t.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&zc(n,l,a);break;case 3:var m=n.updateQueue;if(m!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}zc(n,m,t)}break;case 5:var L=n.stateNode;if(t===null&&n.flags&4){t=L;var h=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&t.focus();break;case"img":h.src&&(t.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var A=n.alternate;if(A!==null){var I=A.memoizedState;if(I!==null){var F=I.dehydrated;F!==null&&Da(F)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}nn||n.flags&512&&fs(n)}catch(_){Oe(n,n.return,_)}}if(n===e){K=null;break}if(t=n.sibling,t!==null){t.return=n.return,K=t;break}K=n.return}}function zu(e){for(;K!==null;){var n=K;if(n===e){K=null;break}var t=n.sibling;if(t!==null){t.return=n.return,K=t;break}K=n.return}}function Qu(e){for(;K!==null;){var n=K;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{li(4,n)}catch(h){Oe(n,t,h)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var o=n.return;try{a.componentDidMount()}catch(h){Oe(n,o,h)}}var l=n.return;try{fs(n)}catch(h){Oe(n,l,h)}break;case 5:var m=n.return;try{fs(n)}catch(h){Oe(n,m,h)}}}catch(h){Oe(n,n.return,h)}if(n===e){K=null;break}var L=n.sibling;if(L!==null){L.return=n.return,K=L;break}K=n.return}}var Rf=Math.ceil,ci=Z.ReactCurrentDispatcher,vs=Z.ReactCurrentOwner,xn=Z.ReactCurrentBatchConfig,Ce=0,Ke=null,Be=null,He=0,vn=0,Ta=ft(0),Ge=0,tr=null,Ft=0,ui=0,hs=0,ar=null,dn=null,gs=0,La=1/0,at=null,di=!1,Ps=null,Pt=null,mi=!1,yt=null,pi=0,rr=0,ys=null,fi=-1,Ti=0;function on(){return(Ce&6)!==0?Fe():fi!==-1?fi:fi=Fe()}function Mt(e){return(e.mode&1)===0?1:(Ce&2)!==0&&He!==0?He&-He:hf.transition!==null?(Ti===0&&(Ti=kl()),Ti):(e=be,e!==0||(e=window.event,e=e===void 0?16:Bl(e.type)),e)}function zn(e,n,t,a){if(50<rr)throw rr=0,ys=null,Error(s(185));ba(e,t,a),((Ce&2)===0||e!==Ke)&&(e===Ke&&((Ce&2)===0&&(ui|=t),Ge===4&&Et(e,He)),mn(e,a),t===1&&Ce===0&&(n.mode&1)===0&&(La=Fe()+500,Br&&Lt()))}function mn(e,n){var t=e.callbackNode;vp(e,n);var a=Nr(e,e===Ke?He:0);if(a===0)t!==null&&wl(t),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(t!=null&&wl(t),n===1)e.tag===0?vf(Bu.bind(null,e)):bc(Bu.bind(null,e)),pf(function(){(Ce&6)===0&&Lt()}),t=null;else{switch(Rl(a)){case 1:t=Xi;break;case 4:t=jl;break;case 16:t=Pr;break;case 536870912:t=Dl;break;default:t=Pr}t=Wu(t,Ju.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Ju(e,n){if(fi=-1,Ti=0,(Ce&6)!==0)throw Error(s(327));var t=e.callbackNode;if(va()&&e.callbackNode!==t)return null;var a=Nr(e,e===Ke?He:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||n)n=Li(e,a);else{n=a;var o=Ce;Ce|=2;var l=Gu();(Ke!==e||He!==n)&&(at=null,La=Fe()+500,Qt(e,n));do try{Of();break}catch(L){Yu(e,L)}while(!0);Fo(),ci.current=l,Ce=o,Be!==null?n=0:(Ke=null,He=0,n=Ge)}if(n!==0){if(n===2&&(o=eo(e),o!==0&&(a=o,n=Ms(e,o))),n===1)throw t=tr,Qt(e,0),Et(e,a),mn(e,Fe()),t;if(n===6)Et(e,a);else{if(o=e.current.alternate,(a&30)===0&&!_f(o)&&(n=Li(e,a),n===2&&(l=eo(e),l!==0&&(a=l,n=Ms(e,l))),n===1))throw t=tr,Qt(e,0),Et(e,a),mn(e,Fe()),t;switch(e.finishedWork=o,e.finishedLanes=a,n){case 0:case 1:throw Error(s(345));case 2:Jt(e,dn,at);break;case 3:if(Et(e,a),(a&130023424)===a&&(n=gs+500-Fe(),10<n)){if(Nr(e,0)!==0)break;if(o=e.suspendedLanes,(o&a)!==a){on(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=bo(Jt.bind(null,e,dn,at),n);break}Jt(e,dn,at);break;case 4:if(Et(e,a),(a&4194240)===a)break;for(n=e.eventTimes,o=-1;0<a;){var m=31-kn(a);l=1<<m,m=n[m],m>o&&(o=m),a&=~l}if(a=o,a=Fe()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Rf(a/1960))-a,10<a){e.timeoutHandle=bo(Jt.bind(null,e,dn,at),a);break}Jt(e,dn,at);break;case 5:Jt(e,dn,at);break;default:throw Error(s(329))}}}return mn(e,Fe()),e.callbackNode===t?Ju.bind(null,e):null}function Ms(e,n){var t=ar;return e.current.memoizedState.isDehydrated&&(Qt(e,n).flags|=256),e=Li(e,n),e!==2&&(n=dn,dn=t,n!==null&&Es(n)),e}function Es(e){dn===null?dn=e:dn.push.apply(dn,e)}function _f(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var a=0;a<t.length;a++){var o=t[a],l=o.getSnapshot;o=o.value;try{if(!Rn(l(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Et(e,n){for(n&=~hs,n&=~ui,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-kn(n),a=1<<t;e[t]=-1,n&=~a}}function Bu(e){if((Ce&6)!==0)throw Error(s(327));va();var n=Nr(e,0);if((n&1)===0)return mn(e,Fe()),null;var t=Li(e,n);if(e.tag!==0&&t===2){var a=eo(e);a!==0&&(n=a,t=Ms(e,a))}if(t===1)throw t=tr,Qt(e,0),Et(e,n),mn(e,Fe()),t;if(t===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Jt(e,dn,at),mn(e,Fe()),null}function Ns(e,n){var t=Ce;Ce|=1;try{return e(n)}finally{Ce=t,Ce===0&&(La=Fe()+500,Br&&Lt())}}function zt(e){yt!==null&&yt.tag===0&&(Ce&6)===0&&va();var n=Ce;Ce|=1;var t=xn.transition,a=be;try{if(xn.transition=null,be=1,e)return e()}finally{be=a,xn.transition=t,Ce=n,(Ce&6)===0&&Lt()}}function Cs(){vn=Ta.current,De(Ta)}function Qt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,mf(t)),Be!==null)for(t=Be.return;t!==null;){var a=t;switch(ko(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Qr();break;case 3:ma(),De(ln),De(Ze),Ko();break;case 5:Go(a);break;case 4:ma();break;case 13:De(Re);break;case 19:De(Re);break;case 10:zo(a.type._context);break;case 22:case 23:Cs()}t=t.return}if(Ke=e,Be=e=Nt(e.current,null),He=vn=n,Ge=0,tr=null,hs=ui=Ft=0,dn=ar=null,_t!==null){for(n=0;n<_t.length;n++)if(t=_t[n],a=t.interleaved,a!==null){t.interleaved=null;var o=a.next,l=t.pending;if(l!==null){var m=l.next;l.next=o,a.next=m}t.pending=a}_t=null}return e}function Yu(e,n){do{var t=Be;try{if(Fo(),Xr.current=ai,ei){for(var a=_e.memoizedState;a!==null;){var o=a.queue;o!==null&&(o.pending=null),a=a.next}ei=!1}if(Ot=0,Ue=Ye=_e=null,Ha=!1,Wa=0,vs.current=null,t===null||t.return===null){Ge=1,tr=n,Be=null;break}e:{var l=e,m=t.return,L=t,h=n;if(n=He,L.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var A=h,I=L,F=I.tag;if((I.mode&1)===0&&(F===0||F===11||F===15)){var _=I.alternate;_?(I.updateQueue=_.updateQueue,I.memoizedState=_.memoizedState,I.lanes=_.lanes):(I.updateQueue=null,I.memoizedState=null)}var U=Tu(m);if(U!==null){U.flags&=-257,Lu(U,m,L,l,n),U.mode&1&&fu(l,A,n),n=U,h=A;var $=n.updateQueue;if($===null){var q=new Set;q.add(h),n.updateQueue=q}else $.add(h);break e}else{if((n&1)===0){fu(l,A,n),Ss();break e}h=Error(s(426))}}else if(ke&&L.mode&1){var ze=Tu(m);if(ze!==null){(ze.flags&65536)===0&&(ze.flags|=256),Lu(ze,m,L,l,n),Io(pa(h,L));break e}}l=h=pa(h,L),Ge!==4&&(Ge=2),ar===null?ar=[l]:ar.push(l),l=m;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var E=mu(l,h,n);Fc(l,E);break e;case 1:L=h;var g=l.type,S=l.stateNode;if((l.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Pt===null||!Pt.has(S)))){l.flags|=65536,n&=-n,l.lanes|=n;var J=pu(l,L,n);Fc(l,J);break e}}l=l.return}while(l!==null)}Ku(t)}catch(W){n=W,Be===t&&t!==null&&(Be=t=t.return);continue}break}while(!0)}function Gu(){var e=ci.current;return ci.current=ai,e===null?ai:e}function Ss(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),Ke===null||(Ft&268435455)===0&&(ui&268435455)===0||Et(Ke,He)}function Li(e,n){var t=Ce;Ce|=2;var a=Gu();(Ke!==e||He!==n)&&(at=null,Qt(e,n));do try{If();break}catch(o){Yu(e,o)}while(!0);if(Fo(),Ce=t,ci.current=a,Be!==null)throw Error(s(261));return Ke=null,He=0,Ge}function If(){for(;Be!==null;)Uu(Be)}function Of(){for(;Be!==null&&!lp();)Uu(Be)}function Uu(e){var n=Hu(e.alternate,e,vn);e.memoizedProps=e.pendingProps,n===null?Ku(e):Be=n,vs.current=null}function Ku(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=Af(t,n,vn),t!==null){Be=t;return}}else{if(t=wf(t,n),t!==null){t.flags&=32767,Be=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ge=6,Be=null;return}}if(n=n.sibling,n!==null){Be=n;return}Be=n=e}while(n!==null);Ge===0&&(Ge=5)}function Jt(e,n,t){var a=be,o=xn.transition;try{xn.transition=null,be=1,Ff(e,n,t,a)}finally{xn.transition=o,be=a}return null}function Ff(e,n,t,a){do va();while(yt!==null);if((Ce&6)!==0)throw Error(s(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(hp(e,l),e===Ke&&(Be=Ke=null,He=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||mi||(mi=!0,Wu(Pr,function(){return va(),null})),l=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||l){l=xn.transition,xn.transition=null;var m=be;be=1;var L=Ce;Ce|=4,vs.current=null,Df(e,t),Iu(t,e),rf(So),xr=!!Co,So=Co=null,e.current=t,kf(t),cp(),Ce=L,be=m,xn.transition=l}else e.current=t;if(mi&&(mi=!1,yt=e,pi=o),l=e.pendingLanes,l===0&&(Pt=null),mp(t.stateNode),mn(e,Fe()),n!==null)for(a=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],a(o.value,{componentStack:o.stack,digest:o.digest});if(di)throw di=!1,e=Ps,Ps=null,e;return(pi&1)!==0&&e.tag!==0&&va(),l=e.pendingLanes,(l&1)!==0?e===ys?rr++:(rr=0,ys=e):rr=0,Lt(),null}function va(){if(yt!==null){var e=Rl(pi),n=xn.transition,t=be;try{if(xn.transition=null,be=16>e?16:e,yt===null)var a=!1;else{if(e=yt,yt=null,pi=0,(Ce&6)!==0)throw Error(s(331));var o=Ce;for(Ce|=4,K=e.current;K!==null;){var l=K,m=l.child;if((K.flags&16)!==0){var L=l.deletions;if(L!==null){for(var h=0;h<L.length;h++){var A=L[h];for(K=A;K!==null;){var I=K;switch(I.tag){case 0:case 11:case 15:nr(8,I,l)}var F=I.child;if(F!==null)F.return=I,K=F;else for(;K!==null;){I=K;var _=I.sibling,U=I.return;if(ju(I),I===A){K=null;break}if(_!==null){_.return=U,K=_;break}K=U}}}var $=l.alternate;if($!==null){var q=$.child;if(q!==null){$.child=null;do{var ze=q.sibling;q.sibling=null,q=ze}while(q!==null)}}K=l}}if((l.subtreeFlags&2064)!==0&&m!==null)m.return=l,K=m;else e:for(;K!==null;){if(l=K,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:nr(9,l,l.return)}var E=l.sibling;if(E!==null){E.return=l.return,K=E;break e}K=l.return}}var g=e.current;for(K=g;K!==null;){m=K;var S=m.child;if((m.subtreeFlags&2064)!==0&&S!==null)S.return=m,K=S;else e:for(m=g;K!==null;){if(L=K,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:li(9,L)}}catch(W){Oe(L,L.return,W)}if(L===m){K=null;break e}var J=L.sibling;if(J!==null){J.return=L.return,K=J;break e}K=L.return}}if(Ce=o,Lt(),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(yr,e)}catch{}a=!0}return a}finally{be=t,xn.transition=n}}return!1}function $u(e,n,t){n=pa(t,n),n=mu(e,n,1),e=ht(e,n,1),n=on(),e!==null&&(ba(e,1,n),mn(e,n))}function Oe(e,n,t){if(e.tag===3)$u(e,e,t);else for(;n!==null;){if(n.tag===3){$u(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Pt===null||!Pt.has(a))){e=pa(t,e),e=pu(n,e,1),n=ht(n,e,1),e=on(),n!==null&&(ba(n,1,e),mn(n,e));break}}n=n.return}}function zf(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),n=on(),e.pingedLanes|=e.suspendedLanes&t,Ke===e&&(He&t)===t&&(Ge===4||Ge===3&&(He&130023424)===He&&500>Fe()-gs?Qt(e,0):hs|=t),mn(e,n)}function qu(e,n){n===0&&((e.mode&1)===0?n=1:(n=Er,Er<<=1,(Er&130023424)===0&&(Er=4194304)));var t=on();e=et(e,n),e!==null&&(ba(e,n,t),mn(e,t))}function Qf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),qu(e,t)}function Jf(e,n){var t=0;switch(e.tag){case 13:var a=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(s(314))}a!==null&&a.delete(n),qu(e,t)}var Hu;Hu=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ln.current)un=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return un=!1,Vf(e,n,t);un=(e.flags&131072)!==0}else un=!1,ke&&(n.flags&1048576)!==0&&Vc(n,Gr,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;oi(e,n),e=n.pendingProps;var o=ia(n,Ze.current);da(n,t),o=Ho(null,n,a,e,o,t);var l=Wo();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,cn(a)?(l=!0,Jr(n)):l=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Bo(n),o.updater=ri,n.stateNode=o,o._reactInternals=n,as(n,a,e,t),n=ss(null,n,a,!0,l,t)):(n.tag=0,ke&&l&&Do(n),rn(null,n,o,t),n=n.child),n;case 16:a=n.elementType;e:{switch(oi(e,n),e=n.pendingProps,o=a._init,a=o(a._payload),n.type=a,o=n.tag=Yf(a),e=In(a,e),o){case 0:n=os(null,n,a,e,t);break e;case 1:n=Mu(null,n,a,e,t);break e;case 11:n=vu(null,n,a,e,t);break e;case 14:n=hu(null,n,a,In(a.type,e),t);break e}throw Error(s(306,a,""))}return n;case 0:return a=n.type,o=n.pendingProps,o=n.elementType===a?o:In(a,o),os(e,n,a,o,t);case 1:return a=n.type,o=n.pendingProps,o=n.elementType===a?o:In(a,o),Mu(e,n,a,o,t);case 3:e:{if(Eu(n),e===null)throw Error(s(387));a=n.pendingProps,l=n.memoizedState,o=l.element,Oc(e,n),Wr(n,a,null,t);var m=n.memoizedState;if(a=m.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){o=pa(Error(s(423)),n),n=Nu(e,n,a,t,o);break e}else if(a!==o){o=pa(Error(s(424)),n),n=Nu(e,n,a,t,o);break e}else for(Ln=pt(n.stateNode.containerInfo.firstChild),Tn=n,ke=!0,_n=null,t=_c(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(la(),a===o){n=tt(e,n,t);break e}rn(e,n,a,t)}n=n.child}return n;case 5:return Qc(n),e===null&&_o(n),a=n.type,o=n.pendingProps,l=e!==null?e.memoizedProps:null,m=o.children,xo(a,o)?m=null:l!==null&&xo(a,l)&&(n.flags|=32),yu(e,n),rn(e,n,m,t),n.child;case 6:return e===null&&_o(n),null;case 13:return Cu(e,n,t);case 4:return Yo(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=ca(n,null,a,t):rn(e,n,a,t),n.child;case 11:return a=n.type,o=n.pendingProps,o=n.elementType===a?o:In(a,o),vu(e,n,a,o,t);case 7:return rn(e,n,n.pendingProps,t),n.child;case 8:return rn(e,n,n.pendingProps.children,t),n.child;case 12:return rn(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(a=n.type._context,o=n.pendingProps,l=n.memoizedProps,m=o.value,Ae($r,a._currentValue),a._currentValue=m,l!==null)if(Rn(l.value,m)){if(l.children===o.children&&!ln.current){n=tt(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var L=l.dependencies;if(L!==null){m=l.child;for(var h=L.firstContext;h!==null;){if(h.context===a){if(l.tag===1){h=nt(-1,t&-t),h.tag=2;var A=l.updateQueue;if(A!==null){A=A.shared;var I=A.pending;I===null?h.next=h:(h.next=I.next,I.next=h),A.pending=h}}l.lanes|=t,h=l.alternate,h!==null&&(h.lanes|=t),Qo(l.return,t,n),L.lanes|=t;break}h=h.next}}else if(l.tag===10)m=l.type===n.type?null:l.child;else if(l.tag===18){if(m=l.return,m===null)throw Error(s(341));m.lanes|=t,L=m.alternate,L!==null&&(L.lanes|=t),Qo(m,t,n),m=l.sibling}else m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===n){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}rn(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,a=n.pendingProps.children,da(n,t),o=Cn(o),a=a(o),n.flags|=1,rn(e,n,a,t),n.child;case 14:return a=n.type,o=In(a,n.pendingProps),o=In(a.type,o),hu(e,n,a,o,t);case 15:return gu(e,n,n.type,n.pendingProps,t);case 17:return a=n.type,o=n.pendingProps,o=n.elementType===a?o:In(a,o),oi(e,n),n.tag=1,cn(a)?(e=!0,Jr(n)):e=!1,da(n,t),uu(n,a,o),as(n,a,o,t),ss(null,n,a,!0,e,t);case 19:return xu(e,n,t);case 22:return Pu(e,n,t)}throw Error(s(156,n.tag))};function Wu(e,n){return Al(e,n)}function Bf(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(e,n,t,a){return new Bf(e,n,t,a)}function xs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yf(e){if(typeof e=="function")return xs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ge)return 11;if(e===se)return 14}return 2}function Nt(e,n){var t=e.alternate;return t===null?(t=bn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function vi(e,n,t,a,o,l){var m=2;if(a=e,typeof e=="function")xs(e)&&(m=1);else if(typeof e=="string")m=5;else e:switch(e){case ee:return Bt(t.children,o,l,n);case Te:m=8,o|=8;break;case le:return e=bn(12,t,n,o|2),e.elementType=le,e.lanes=l,e;case ye:return e=bn(13,t,n,o),e.elementType=ye,e.lanes=l,e;case Ve:return e=bn(19,t,n,o),e.elementType=Ve,e.lanes=l,e;case fe:return hi(t,o,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ue:m=10;break e;case Ee:m=9;break e;case ge:m=11;break e;case se:m=14;break e;case Le:m=16,a=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return n=bn(m,t,n,o),n.elementType=e,n.type=a,n.lanes=l,n}function Bt(e,n,t,a){return e=bn(7,e,a,n),e.lanes=t,e}function hi(e,n,t,a){return e=bn(22,e,a,n),e.elementType=fe,e.lanes=t,e.stateNode={isHidden:!1},e}function bs(e,n,t){return e=bn(6,e,null,n),e.lanes=t,e}function Vs(e,n,t){return n=bn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Gf(e,n,t,a,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=no(0),this.expirationTimes=no(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=no(0),this.identifierPrefix=a,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function As(e,n,t,a,o,l,m,L,h){return e=new Gf(e,n,t,L,h),n===1?(n=1,l===!0&&(n|=8)):n=0,l=bn(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:a,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bo(l),e}function Uf(e,n,t){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ie,key:a==null?null:""+a,children:e,containerInfo:n,implementation:t}}function Zu(e){if(!e)return Tt;e=e._reactInternals;e:{if(wt(e)!==e||e.tag!==1)throw Error(s(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(cn(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(s(171))}if(e.tag===1){var t=e.type;if(cn(t))return Sc(e,t,n)}return n}function Xu(e,n,t,a,o,l,m,L,h){return e=As(t,a,!0,e,o,l,m,L,h),e.context=Zu(null),t=e.current,a=on(),o=Mt(t),l=nt(a,o),l.callback=n??null,ht(t,l,o),e.current.lanes=o,ba(e,o,a),mn(e,a),e}function gi(e,n,t,a){var o=n.current,l=on(),m=Mt(o);return t=Zu(t),n.context===null?n.context=t:n.pendingContext=t,n=nt(l,m),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=ht(o,n,m),e!==null&&(zn(e,o,m,l),Hr(e,o,m)),m}function Pi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ed(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ws(e,n){ed(e,n),(e=e.alternate)&&ed(e,n)}function Kf(){return null}var nd=typeof reportError=="function"?reportError:function(e){console.error(e)};function js(e){this._internalRoot=e}yi.prototype.render=js.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));gi(e,n,null,null)},yi.prototype.unmount=js.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;zt(function(){gi(null,e,null,null)}),n[Hn]=null}};function yi(e){this._internalRoot=e}yi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ol();e={blockedOn:null,target:e,priority:n};for(var t=0;t<ut.length&&n!==0&&n<ut[t].priority;t++);ut.splice(t,0,e),t===0&&Ql(e)}};function Ds(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Mi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function td(){}function $f(e,n,t,a,o){if(o){if(typeof a=="function"){var l=a;a=function(){var A=Pi(m);l.call(A)}}var m=Xu(n,a,e,0,null,!1,!1,"",td);return e._reactRootContainer=m,e[Hn]=m.current,Ja(e.nodeType===8?e.parentNode:e),zt(),m}for(;o=e.lastChild;)e.removeChild(o);if(typeof a=="function"){var L=a;a=function(){var A=Pi(h);L.call(A)}}var h=As(e,0,!1,null,null,!1,!1,"",td);return e._reactRootContainer=h,e[Hn]=h.current,Ja(e.nodeType===8?e.parentNode:e),zt(function(){gi(n,h,t,a)}),h}function Ei(e,n,t,a,o){var l=t._reactRootContainer;if(l){var m=l;if(typeof o=="function"){var L=o;o=function(){var h=Pi(m);L.call(h)}}gi(n,m,e,o)}else m=$f(t,n,e,o,a);return Pi(m)}_l=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=xa(n.pendingLanes);t!==0&&(to(n,t|1),mn(n,Fe()),(Ce&6)===0&&(La=Fe()+500,Lt()))}break;case 13:zt(function(){var a=et(e,1);if(a!==null){var o=on();zn(a,e,1,o)}}),ws(e,1)}},ao=function(e){if(e.tag===13){var n=et(e,134217728);if(n!==null){var t=on();zn(n,e,134217728,t)}ws(e,134217728)}},Il=function(e){if(e.tag===13){var n=Mt(e),t=et(e,n);if(t!==null){var a=on();zn(t,e,n,a)}ws(e,n)}},Ol=function(){return be},Fl=function(e,n){var t=be;try{return be=e,n()}finally{be=t}},qi=function(e,n,t){switch(n){case"input":if(jn(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var o=zr(a);if(!o)throw Error(s(90));qn(a),jn(a,o)}}}break;case"textarea":vr(e,t);break;case"select":n=t.value,n!=null&&it(e,!!t.multiple,n,!1)}},El=Ns,Nl=zt;var qf={usingClientEntryPoint:!1,Events:[Ga,aa,zr,yl,Ml,Ns]},ir={findFiberByHostInstance:jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hf={bundleType:ir.bundleType,version:ir.version,rendererPackageName:ir.rendererPackageName,rendererConfig:ir.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Z.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bl(e),e===null?null:e.stateNode},findFiberByHostInstance:ir.findFiberByHostInstance||Kf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ni=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ni.isDisabled&&Ni.supportsFiber)try{yr=Ni.inject(Hf),Jn=Ni}catch{}}return pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qf,pn.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ds(n))throw Error(s(200));return Uf(e,n,null,t)},pn.createRoot=function(e,n){if(!Ds(e))throw Error(s(299));var t=!1,a="",o=nd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=As(e,1,!1,null,null,t,!1,a,o),e[Hn]=n.current,Ja(e.nodeType===8?e.parentNode:e),new js(n)},pn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=bl(n),e=e===null?null:e.stateNode,e},pn.flushSync=function(e){return zt(e)},pn.hydrate=function(e,n,t){if(!Mi(n))throw Error(s(200));return Ei(null,e,n,!0,t)},pn.hydrateRoot=function(e,n,t){if(!Ds(e))throw Error(s(405));var a=t!=null&&t.hydratedSources||null,o=!1,l="",m=nd;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),n=Xu(n,null,e,1,t??null,o,!1,l,m),e[Hn]=n.current,Ja(e),a)for(e=0;e<a.length;e++)t=a[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new yi(n)},pn.render=function(e,n,t){if(!Mi(n))throw Error(s(200));return Ei(null,e,n,!1,t)},pn.unmountComponentAtNode=function(e){if(!Mi(e))throw Error(s(40));return e._reactRootContainer?(zt(function(){Ei(null,null,e,!1,function(){e._reactRootContainer=null,e[Hn]=null})}),!0):!1},pn.unstable_batchedUpdates=Ns,pn.unstable_renderSubtreeIntoContainer=function(e,n,t,a){if(!Mi(t))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return Ei(e,n,t,!1,a)},pn.version="18.3.1-next-f1338f8080-20240426",pn}var ud;function Jd(){if(ud)return _s.exports;ud=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(i){console.error(i)}}return r(),_s.exports=oT(),_s.exports}var dd;function sT(){if(dd)return Si;dd=1;var r=Jd();return Si.createRoot=r.createRoot,Si.hydrateRoot=r.hydrateRoot,Si}var lT=sT();const cT=Qd(lT),uT="modulepreload",dT=function(r){return"/BTMM_JORNADAS/"+r},md={},gn=function(i,s,u){let d=Promise.resolve();if(s&&s.length>0){let v=function(N){return Promise.all(N.map(y=>Promise.resolve(y).then(P=>({status:"fulfilled",value:P}),P=>({status:"rejected",reason:P}))))};document.getElementsByTagName("link");const T=document.querySelector("meta[property=csp-nonce]"),f=(T==null?void 0:T.nonce)||(T==null?void 0:T.getAttribute("nonce"));d=v(s.map(N=>{if(N=dT(N),N in md)return;md[N]=!0;const y=N.endsWith(".css"),P=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${N}"]${P}`))return;const C=document.createElement("link");if(C.rel=y?"stylesheet":uT,y||(C.as="script"),C.crossOrigin="",C.href=N,f&&C.setAttribute("nonce",f),document.head.appendChild(C),y)return new Promise((w,j)=>{C.addEventListener("load",w),C.addEventListener("error",()=>j(new Error(`Unable to preload CSS for ${N}`)))})}))}function p(v){const T=new Event("vite:preloadError",{cancelable:!0});if(T.payload=v,window.dispatchEvent(T),!T.defaultPrevented)throw v}return d.then(v=>{for(const T of v||[])T.status==="rejected"&&p(T.reason);return i().catch(p)})},zi=[{nombre:"Puesto Orosi",tag:"OR",color:"bg-orange-100 text-orange-950",funcionarios:["Errol Salazar","Mayra Espinoza","Yeison Cortés","Kenneth Mena","Fabricio Carbonell","Monserrath Navarro"]},{nombre:"Puesto Quetzales",tag:"QZ",color:"bg-orange-700 text-white",funcionarios:["Juan Pablo Granados","Karen Valle","Josué Brenes","Laura Valverde","Diana Tencio","Jetzelly Villalobos","Pablo Sánchez"]},{nombre:"Puesto Esperanza",tag:"LE",color:"bg-sky-100 text-sky-950",funcionarios:["Yolanda Elizondo","Mariano Solís","Guillermo Pérez","Carlos Cordero","Alexander Alvarado"]}],Ai=zi.map(r=>r.nombre),Bd=zi.map(({nombre:r,tag:i,color:s})=>({nombre:r,tag:i,color:s})),wi=zi.flatMap((r,i)=>r.funcionarios.map((s,u)=>{const d=i*10+u+1,p=s==="Pablo Sánchez",v=s==="Yolanda Elizondo",T=s==="Carlos Cordero",f=["Yeison Cortés","Jetzelly Villalobos","Guillermo Pérez"].includes(s),N=s==="Fabricio Carbonell"?"De vacaciones":s==="Guillermo Pérez"?"Incapacitado":"Activo";return{id:`f${d}`,nombre:s,cedula:`1-0000-${String(d).padStart(4,"0")}`,email:p?"psforestal@yahoo.com":`${s.toLowerCase().replaceAll(" ",".")}@sinac.go.cr`,puesto:p?"Técnico en Recursos Naturales":v?"Asistente Administrativo":T?"Personal Apoyo ONG-Invest-Volunt":"Guardaparques",condicion:T?"ONG-Invest-Volunt":d%5===0?"Interino":"Propiedad",jornada:p||v?"Ordinaria":"Acumulativa",modalidad:p||v?"Horario administrativo L-V":d%7===0?"16x8":d%4===0?"12x6":"10x5",resolucion:f?"":T?"CONV-ONG-INV-VOL-2026":p||v?"":`RES-ACC-${String(d).padStart(3,"0")}-2026`,disponibilidad:!p&&!v&&!T&&d%3!==0,contrato:!p&&!v&&!T&&d%3!==0?`DISP-2026-${String(d).padStart(3,"0")}`:"",vencimiento:d%5===0?"2026-05-30":d%4===0?"2026-06-30":d%3!==0?"2026-12-31":"",policia:!p&&!v&&!T&&!f,brigada:d%4===2,ong:T,jefe:"Administración PNLQ",estado:N,ingreso:"2026-01-01",puestoOperativo:r.nombre,obs:`${r.nombre}${f?" · Dato pendiente: resolución acumulativa":""}`}})),Yd=[],mT=[{id:"rep1",folio:"REP-001",funcionario:"Errol Salazar",fecha:"2026-05-24",tipoDia:"Día libre",motivo:"Incendio forestal",motivoDetalle:"Apoyo en control de conato sector Orosi.",magnitud:"diaEntero",horas:0,cuotas:[{id:"rep1-c1",fecha:"2026-05-31",magnitud:"medioDia",horas:0}],observaciones:"Llamado por la administración fuera de rol."},{id:"rep2",folio:"REP-002",funcionario:"Juan Pablo Granados",fecha:"2026-05-17",tipoDia:"Feriado",motivo:"Atención de denuncia",motivoDetalle:"Inspección por tala reportada en ingreso Quetzales.",magnitud:"horas",horas:4,cuotas:[],observaciones:""},{id:"rep3",folio:"REP-003",funcionario:"Mariano Solís",fecha:"2026-04-19",tipoDia:"Fuera de turno",motivo:"Actividad especial",motivoDetalle:"Atención de gira institucional.",magnitud:"medioDia",horas:0,cuotas:[{id:"rep3-c1",fecha:"2026-05-06",magnitud:"medioDia",horas:0}],observaciones:"Tiempo repuesto en coordinación con la administración."}],pT={"2025-12":{"Errol Salazar":"O-F T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 O-FA T1 T2 T3","Mayra Espinoza":"V1 V2 LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 O-FA L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 O-F T8 T9 T10 L5 L1 L2","Yeison Cortés":"L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T1 L2 L3 L4 L1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 LA LA T1 T2 T3","Kenneth Mena":"O-F T3 T4 T5 T6 T7 T8 T9 V1 V2 V3 L1 L2 L3 L4 L5 T1 T2 L6 T3 T4 T5 T6 T7 O-F T9 T10 T11 T12 L1 L2","Fabricio Carbonell":"L2 L3 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 LA T4 T5 T6 L1 L2 L3 LA T1 T2 T3","Karen Valle":"O-F T2 T3 T4 LA L1 L2 T1 T2 T3 T4 T5 L1 L2 LA T2 T3 T4 T5 L1 L2 T1 T2 T3 O-F T5 L1 L2 T1 T2 T3","Josué Brenes":"O-F T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 L1 L2 L3 T1 T2 T3 T4 T5 T6 O-F T8 T9 T10 L1 L2 L3","Laura Valverde":"O-F T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 LI LI LI LI LI LI LI L4 L5 O-FA O-FA O-FA O-F V1 V2 V3 V4 V5 V6","Diana Tencio":"O-F T2 T3 T4 T5 L1 L2 T1 T2 LA T4 T5 L1 L2 LA T2 T3 T4 T5 L1 L2 T1 T2 T3 O-F T5 L1 L2 T1 T2 LA","Jetzelly Villalobos":"O-F T10 T11 T12 L1 L2 L3 L4 L5 L6 LA T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 O-F T3 T4 T5 T6 T7 T8","Yolanda Elizondo":"O-F T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 V1 V2 V3","Mariano Solís":"O-F T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 LA LA T1 T2 T3 T4 T5","Guillermo Pérez":"O-F V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 O-F T10 T11 T12 L1 L2 L3","Carlos Cordero":"O-F T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5","Alexander Alvarado":"L3 L4 L5 T1 T2 T3 T4 T5 IN IN IN IN T6 L1 L2 L3 L4 L5 V1 V2 V3 V4 V5 V6 O-F V7 V8 V9 V10 V11 V12"},"2026-1":{"Errol Salazar":"O-F T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6","Mayra Espinoza":"L3 L4 L5 O-FA LA LA LA LA LA LA LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2","Yeison Cortés":"O-F T5 T6 T7 T8 L1 L2 L3 L4 V1 V2 L1 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4","Kenneth Mena":"L3 L4 L5 L6 T1 O-FA T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 L1 L2 IN IN","Fabricio Carbonell":"O-F O-FA T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 L1","Karen Valle":"O-F T4 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1","Josué Brenes":"L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA O-FA","Laura Valverde":"O-F V7 V8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6","Diana Tencio":"O-F T4 L1 L2 T1 T2 T3 T4 T5 L1 L2 LA T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 LA L1 L2 T1 T2 T3 T4 T5 L1","Jetzelly Villalobos":"L1 L2 L3 L4 O-FA O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 T13 T14 L1 L2 L3 L4 L5 L6 L7 V1 V2 L1 LA","Yolanda Elizondo":"O-F V4 V5 V6 V7 V8 V9 V10 V11 V12 V13 V14 V15 V16 L1 L2 L3 L4 L5 L6 L7 L8 O-FA T1 T2 T3 T4 T5 T6 T7 T8","Mariano Solís":"O-F T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA V1 V2 V3 V4 LA LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4","Guillermo Pérez":"L4 L5 L6 O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 T13 T14 L1 L2 L3 L4 L5 L6 L7 T1 T2 T3 T4 T5 T6","Carlos Cordero":"O-F T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1","Alexander Alvarado":"O-F LI LI LI LI LI LI V13 V14 V15 V16 V17 V18 V19 V20 L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 V1 V2 V3 V4 V5 V6"},"2026-2":{"Errol Salazar":"LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 LA T1 T2 T3 T4 T5 T6 T7 T8","Mayra Espinoza":"T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11","Yeison Cortés":"T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 V1 V2 V3 V4 L1 L2 IN IN T1 T2 T3 T4 T5 T6 T7 T8 L1","Kenneth Mena":"IN IN IN IN IN IN IN IN IN IN IN IN L3 L4 L5 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 V11 V12 V13","Fabricio Carbonell":"T6 T7 T8 T9 T10 T11 L2 L3 T1 T2 T3 T4 T5 T6 T7 T8 T9 L4 L5 L1 L2 L3 L4 L5 T1 T2 T3 T4","Karen Valle":"L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1","Josué Brenes":"V1 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 L1 L2 V1 V2 V3 V4 L1 L2","Laura Valverde":"T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4","Diana Tencio":"L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 LA V1 V2 V3 L1 L2 T1 T2 T3 T4 T5 L1","Jetzelly Villalobos":"V1 V2 V3 V4 V5 L1 L2 L3 T1 T2 T3 T4 T5 T6 L1 L2 L3 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11","Yolanda Elizondo":"T9 T10 L1 L2 L3 L4 L5 V1 V2 V3 V4 V5 V6 L1 L2 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3","Mariano Solís":"L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 V11 V12 V13 V14 V15","Guillermo Pérez":"T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 L1 L2 L3 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Carlos Cordero":"T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1","Alexander Alvarado":"V7 V8 V9 V10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4"},"2026-3":{"Errol Salazar":"T9 T10 L1 L2 L3 L4 L5 LA LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7","Mayra Espinoza":"T12 T13 T14 T15 T16 T17 L1 L2 L3 L4 L5 L6 L7 L8 L9 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1","Yeison Cortés":"L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 T1","Kenneth Mena":"V14 V15 L1 L2 L3 IN IN IN IN IN IN IN V1 V2 V3 V4 L1 L2 IN IN IN IN IN IN IN IN IN IN IN IN IN","Fabricio Carbonell":"T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5","Karen Valle":"L2 T1 T2 T3 T4 T5 L1 L2 IN T2 T3 T4 T5 L1 L2 T1 LA LA T4 T5 L1 L2 T1 T2 T3 V1 T5 L1 L2 T1 T2","Josué Brenes":"LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5","Laura Valverde":"L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11","Diana Tencio":"L2 LA LA LA T4 T5 L1 L2 T1 T2 T3 LA T5 L1 L2 O-G O-G O-G O-G O-G O-G O-G O-G O-G O-G O-G O-G L1 L2 T1 T2","Jetzelly Villalobos":"T12 L1 L2 L3 L4 L5 L6 LA LA V1 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6","Yolanda Elizondo":"· · · · · · · · · · · · · · · · · IN IN IN IN IN IN IN IN IN IN T1 T2 T3 T4","Mariano Solís":"V16 L1 L2 L3 L4 L5 L6 L7 L8 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Guillermo Pérez":"T11 T12 L1 L2 L3 L4 L5 L6 V1 V2 V3 V4 V5 L1 L2 V1 V2 V3 V4 V5 V6 V7 L1 L2 L3 L4 IN IN IN IN IN","Carlos Cordero":"L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 V1 V2 L1 T1 T2 T3 T4 T5 T6 T7 T8","Alexander Alvarado":"T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 · · · · · · · · · · · · · · · · · · · ·"},"2026-4":{"Errol Salazar":"T8 T9 T10 L1 L2 L3 L4 L5 LA T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 LA T1 T2 T3 T4 T5 T6 T7 T8 T9","Mayra Espinoza":"T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA O-FA V1 V2 V3 L1 L2 T1 T2 T3 T4 T5 T6 T7 T8 L","Yeison Cortés":"L2 L3 L4 L5 L6 T2 L1 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 IN IN IN T3 T4 T5 T6 T7","Kenneth Mena":"IN V1 V2 V3 L1 IN IN IN IN IN IN IN IN IN IN IN IN IN IN V1 V2 L1 L L L L L L L L","Fabricio Carbonell":"T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 V1 V2 V3 V4 V5 V6 V7 V8","Karen Valle":"T3 O-F O-F L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4","Josué Brenes":"T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 V1 V2 V3 V4 L1 L2 LA T2 T3 T4 T5 T6 T7 T8 T9","Laura Valverde":"T12 T13 T14 L1 L2 L3 L4 L5 L6 L7 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 T1 T2 T3","Diana Tencio":"LA O-F O-F L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4","Jetzelly Villalobos":"T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3","Yolanda Elizondo":"T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2","Mariano Solís":"L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Guillermo Pérez":"IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN","Carlos Cordero":"T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5"},"2026-5":{"Errol Salazar":"T10 T11 T12 L1 L2 L3 L4 L5 L6 LA LA O-FA O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3","Mayra Espinoza":"L1 L2 L3 L4 LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8","Yeison Cortés":"O-FA L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 LA T4 T5 T6 T7 T8 L1 L2 L3","Kenneth Mena":"L L L L L L L L L L L L L L L L L L L L L L L V1 V2 V3 V4 V5 V6 L1 L2","Fabricio Carbonell":"V9 V10 V11 V12 V13 V14 V15 V16 V17 V18 V19 V20 L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 O-FA O-FA O-FA O-FA O-FA T1 T2 T3 T4","Juan Pablo Granados":"T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3","Karen Valle":"T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2","Josué Brenes":"T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 LA L1 L2 L3 L4 LA","Laura Valverde":"T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4","Diana Tencio":"T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2","Jetzelly Villalobos":"T4 T5 T6 L1 L2 L3 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 LA LA LA LA LA V1 V2","Pablo Sánchez":"T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 V1 V2 V3 V4 V5 L1 L2 T1 T2 T3 T4 T5 L1 L2","Yolanda Elizondo":"T3 T4 T5 T6 T7 T8 T9 LA L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3","Mariano Solís":"L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1","Guillermo Pérez":"IN IN IN IN IN IN IN IN IN IN IN IN IN IN T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5","Carlos Cordero":"T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 O-FA V1 V2 V3 V4 V5 V6 V7 V8"},"2026-6":{"Errol Salazar":"T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5","Mayra Espinoza":"T9 T10 T11 T12 T13 T14 L1 L2 L3 L4 L5 L6 L7 LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1","Yeison Cortés":"L4 LA T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2","Kenneth Mena":"L3 T1 T2 T3 T4 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2","Fabricio Carbonell":"T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 L1 T10 L2 L3 T1 L4 L5 T2 T3 T4 T5 T6 T7","Juan Pablo Granados":"L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3","Karen Valle":"T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 LA T5 L2 T1 T2 T3 T4 LA L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2","Josué Brenes":"LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 L1 L2 L3 T1 T2 L4 L5 L6 L1 · · · · · · · · ·","Laura Valverde":"T5 T6 T7 T8 L1 L2 L3 L4 O-FA O-FA O-FA O-FA LA V1 V2 V3 V4 V5 V6 V7 V8 L1 L2 L3 L4 V1 V2 V3 V4 L1","Diana Tencio":"T1 T2 T3 LA T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2","Jetzelly Villalobos":"V3 V4 L1 L2 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8","Pablo Sánchez":"T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 V1 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2","Yolanda Elizondo":"T4 T5 T6 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1","Mariano Solís":"L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 LA T2 T3 T4 T5 T6 T7 T8 T9 T10 L1","Guillermo Pérez":"T6 L1 L2 L3 LA V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Carlos Cordero":"V9 V10 V11 V12 V13 V14 V15 V16 V17 V18 V19 V20 L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 O-FA V1 V2 V3 V4 V5 V6 V7"},"2026-7":{"Errol Salazar":"T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1","Mayra Espinoza":"T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5","Yeison Cortés":"T3 T4 T5 L1 L2 T1 T2 T3 V1 V2 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5","Kenneth Mena":"T3 T4 T5 L1 L2 V1 V2 V3 V4 V5 L1 L2 LA T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5","Fabricio Carbonell":"T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8","Karen Valle":"T3 T4 LA T5 L2 T1 T2 T3 T4 T5 L1 L2 V1 V2 V3 V4 V5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5","Laura Valverde":"L2 LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 T13 L1 L2 L3 L4 L5 L6 L7 T1 T2 T3 T4 T5 T6 T7 T8 T9","Diana Tencio":"T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 V1 V2 V3 V4 V5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5","Jetzelly Villalobos":"T9 T10 L1 L2 L3 L4 L5 LA T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 LA T2 T3 T4 T5 T6","Pablo Sánchez":"T3 T4 T5 L1 L2 V1 V2 V3 V4 V5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5","Yolanda Elizondo":"T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2","Mariano Solís":"L2 L3 L4 L5 LA V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 L1 L2 L3 L4 L5 O-FA T2 T3 T4 T5 T6 T7 T8 T9 T10 T11","Guillermo Pérez":"L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8","Carlos Cordero":"V8 L1 L2 L3 L4 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 V11 V12 V13 V14 L1 L2 L3 L4 L5 L6 L7 T1 T2 T3 T4 T5"},"2026-8":{"Errol Salazar":"T2 T3 T4 T5 T6 T7 T8 L1 T9 T10 T11 T12 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4","Mayra Espinoza":"L6 LA V1 V2 V3 V4 V5 V6 V7 V8 L1 L2 L3 L4 LA LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5","Yeison Cortés":"L4 LA T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 O-F","Kenneth Mena":"L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 L1 L2 L3 L4 L5","Fabricio Carbonell":"T9 T10 L1 L2 L3 L4 L5 O-FA O-FA V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 L1 L2 L3 L4 L5 O-FA T1 T2 T3 T4 T5 T6","Monserrath Navarro":"· · · · · · · · · · · · · · · · · · · T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2","Karen Valle":"L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 T4 T5 L1 L2 O-F","Laura Valverde":"T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Diana Tencio":"L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 O-F","Jetzelly Villalobos":"T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 L1 L2 L3 T1","Pablo Sánchez":"L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 O-F","Yolanda Elizondo":"T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 O-FA L1 L2 L3 L4","Mariano Solís":"T12 L1 L2 L3 L4 L5 L6 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 V11 V12 V13 V14 L1 L2 L3 L4 L5 L6 L7 T1 T2 T3","Guillermo Pérez":"T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 O-FA L1 L2 L3","Carlos Cordero":"T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6"},"2026-9":{"Errol Salazar":"L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4","Mayra Espinoza":"T1 V1 T2 T3 T4 T5 T6 T7 V1 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1","Yeison Cortés":"T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3","Fabricio Carbonell":"T7 T8 T9 T10 L1 L2 L3 T1 T2 T3 T4 L4 L5 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6","Monserrath Navarro":"L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 O-F T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 L1","Karen Valle":"T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3","Laura Valverde":"L1 L2 L3 L4 L5 O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6","Diana Tencio":"T2 T3 T4 T5 L1 L2 T1 T2 V1 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3","Jetzelly Villalobos":"T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3","Pablo Sánchez":"T2 T3 T4 T5 L1 L2 T1 T2 V1 V1 V1 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3","Yolanda Elizondo":"L5 IN IN IN IN IN IN T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8","Mariano Solís":"T4 T5 T6 T7 T8 L1 L2 L3 L4 O-FA O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1","Guillermo Pérez":"T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 O-FA T1 T2 O-CM T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2","Carlos Cordero":"T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 L1 L2 L3 L4 L5"},"2026-10":{"Errol Salazar":"T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L5 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2","Mayra Espinoza":"T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 L5 T1 T2 T3 T4","Yeison Cortés":"T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1","Fabricio Carbonell":"T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Monserrath Navarro":"L2 L3 L4 T1 T2 T3 T4 T5 L1 L2 L3 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 O-FA T1","Karen Valle":"T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1","Laura Valverde":"T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T8 T10","Diana Tencio":"T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1","Jetzelly Villalobos":"L4 L5 O-FA O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2","Pablo Sánchez":"T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1","Yolanda Elizondo":"T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA T1 T2 T3 T4 T5 T6 T7 T8","Mariano Solís":"T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2","Guillermo Pérez":"T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T10 L1 L2 L3 L4 L5 T1 T2 T6 T7","Carlos Cordero":"T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2"},"2026-11":{"Errol Salazar":"T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6","Mayra Espinoza":"L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3","Yeison Cortés":"L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1","Fabricio Carbonell":"L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4","Monserrath Navarro":"T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5","Karen Valle":"L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1","Laura Valverde":"L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Diana Tencio":"L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1","Jetzelly Villalobos":"T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4","Pablo Sánchez":"L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1","Yolanda Elizondo":"L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4","Mariano Solís":"T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6","Guillermo Pérez":"T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8","Carlos Cordero":"T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 L4 T1 T2 T3 T4 T5"},"2026-12":{"Errol Salazar":"T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 O-F T5 T6 T7 T8 T9 T10","Mayra Espinoza":"L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 O-F T9 T10 T11 T12 L1 L2","Yeison Cortés":"T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 O-F L1 L2 V1 V2 V3 V4","Fabricio Carbonell":"L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 V1 V2 V3 V4 V5 V6 L1 L2 L3 O-FA T1 T2","Monserrath Navarro":"T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3","Karen Valle":"T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 O-F L1 L2 T1 T2 T3 T4","Laura Valverde":"T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 O-FA T1 T2 T3 T10","Diana Tencio":"T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 O-F L1 L2 V1 V2 V3 V4","Jetzelly Villalobos":"T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 O-F T12 L1 L2 L3 L4 L5","Pablo Sánchez":"T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 V1 V2 V3 V4 O-F L1 L2 V5 V6 V7 V8","Yolanda Elizondo":"L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 O-F T10 L1 L2 L3 L4 L5","Mariano Solís":"T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 O-F T1 T2 T3 T4 T5 T6","Guillermo Pérez":"T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 O-F T4 T5 T6 T7 T8 L1","Carlos Cordero":"T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 T1 T2 T3 T4"}},fT=[{anio:2025,mes:12,dias:31},{anio:2026,mes:1,dias:31},{anio:2026,mes:2,dias:28},{anio:2026,mes:3,dias:31},{anio:2026,mes:4,dias:30},{anio:2026,mes:5,dias:31},{anio:2026,mes:6,dias:30},{anio:2026,mes:7,dias:31},{anio:2026,mes:8,dias:31},{anio:2026,mes:9,dias:30},{anio:2026,mes:10,dias:31},{anio:2026,mes:11,dias:30},{anio:2026,mes:12,dias:31}],$s="2026-09-11-rol-bloque-dic25-dic26",TT="2026-09",rl=(()=>{var i;const r={};for(const{anio:s,mes:u,dias:d}of fT){const p=pT[`${s}-${u}`]||{};for(const v of zi)for(const T of v.funcionarios){const f=((i=p[T])==null?void 0:i.split(" "))||[];for(let N=1;N<=d;N+=1){const y=f[N-1];r[`${s}-${u}-${v.nombre}-${T}-${N}`]=y&&y!=="·"?y:""}}}return r})(),LT=Object.fromEntries(Object.entries(rl).filter(([r,i])=>{if(!i)return!1;const s=r.match(/^(\d{4})-(\d+)-/);return s?`${s[1]}-${String(s[2]).padStart(2,"0")}`>=TT:!1}));function vT(r={}){return{...r,...LT}}const $n=1,ur="current",hT="pnlq:state",Gd="pnlq:backup:v",pd=5,il=Object.freeze({CAMBIO_DE_ESQUEMA:"cambioDeEsquema",ESQUEMA_INCOMPATIBLE:"esquemaIncompatible",LOCAL_STORAGE:"localStorage"});let Fs=null,sr=null,fd=Promise.resolve();function ol(r){const i=fd.then(r,r);return fd=i.catch(()=>{}),i}async function An(){return Fs||(typeof indexedDB>"u"?null:sr||(sr=(async()=>{try{const{default:r}=await gn(async()=>{const{default:s}=await import("./import-wrapper-prod-DoqtmqRR.js");return{default:s}},[]),i=new r("pnlq");return i.version(1).stores({state:"id",auditoria:"++id, fecha, accion",pendientes:"++id, creadoEn, tipo"}),i.version(2).stores({respaldos:"++id, creadoEn, motivo, huella"}).upgrade(async s=>{try{const u=await s.table("state").toArray(),d=s.table("respaldos");for(const p of u)await sl(d,{motivo:il.CAMBIO_DE_ESQUEMA,origen:"indexeddb",schemaVersion:(p==null?void 0:p.schemaVersion)??null,savedAt:(p==null?void 0:p.savedAt)??null,payload:p==null?void 0:p.payload})}catch{}}),Fs=i,i}catch{return null}finally{sr=null}})(),sr))}async function gT(){const r=await An();if(!r)return null;try{const i=await r.state.get(ur);return i?i.schemaVersion!==$n?(await CT({motivo:il.ESQUEMA_INCOMPATIBLE,origen:"indexeddb",schemaVersion:i.schemaVersion??null,savedAt:i.savedAt??null,payload:i.payload}),null):{state:i.payload??null,revision:i.revision??0,savedAt:i.savedAt??null}:null}catch{return null}}async function PT(r,i=0){const s=await An();return s?ol(async()=>{try{return await s.state.put({id:ur,schemaVersion:$n,savedAt:new Date().toISOString(),revision:i,payload:r}),!0}catch{return!1}}):!1}async function yT(){const r=await An();return r?ol(async()=>{try{return await r.state.delete(ur),!0}catch{return!1}}):!1}async function MT(){const r=await An();if(!r)return{migrated:!1,source:null};try{if(await r.state.get(ur))return{migrated:!1,source:null};if(typeof window>"u"||!window.localStorage)return{migrated:!1,source:null};const s=window.localStorage.getItem(hT);if(!s)return{migrated:!1,source:null};const u=JSON.parse(s);return u!=null&&u.state?u.schemaVersion!==$n?{migrated:!1,source:null}:(await r.state.put({id:ur,schemaVersion:$n,savedAt:u.savedAt||new Date().toISOString(),revision:u.revision??0,payload:u.state,migradoDeLocalStorage:!0}),{migrated:!0,source:"localStorage"}):{migrated:!1,source:null}}catch{return{migrated:!1,source:null}}}async function ET(){const r=await An();return r?ol(async()=>{try{return await Promise.all([r.state.clear(),r.pendientes.clear(),r.auditoria.clear()]),!0}catch{return!1}}):!1}function NT(r){try{return new TextEncoder().encode(r).length}catch{return r.length}}async function sl(r,{motivo:i,origen:s,schemaVersion:u,savedAt:d,payload:p}){if(p==null)return null;let v;try{v=JSON.stringify(p)}catch{return null}if(!v||v==="null")return null;const T=NT(v),f=`${i}:${u??"?"}:${d??"?"}:${T}`;if(await r.where("huella").equals(f).count()>0)return null;const N=await r.add({creadoEn:new Date().toISOString(),motivo:i,origen:s,schemaVersion:u??null,savedAt:d??null,bytes:T,huella:f,payload:p}),y=await r.orderBy("creadoEn").primaryKeys();return y.length>pd&&await r.bulkDelete(y.slice(0,y.length-pd)),N}async function CT(r){const i=await An();if(!i)return null;try{return await sl(i.respaldos,r)}catch{return null}}async function fh(){const r=await An();if(!r)return[];try{return(await r.respaldos.orderBy("creadoEn").reverse().toArray()).map(({payload:s,huella:u,...d})=>d)}catch{return[]}}async function Th(r){const i=await An();if(!i)return null;try{return await i.respaldos.get(r)??null}catch{return null}}async function Lh(r){const i=await An();if(!i||!r||r.id===void 0||r.id===null)return null;try{return await i.respaldos.get(r.id)?r.id:await i.respaldos.add(r)}catch{return null}}async function vh(r){const i=await An();if(!i)return!1;try{return await i.respaldos.delete(r),!0}catch{return!1}}async function ST(){const r={rescatados:0,descartados:0},i=await An();if(!i||typeof window>"u"||!window.localStorage)return r;let s;try{s=Object.keys(window.localStorage).filter(u=>u.startsWith(Gd))}catch{return r}for(const u of s)try{const d=window.localStorage.getItem(u);let p=null;try{p=d?JSON.parse(d):null}catch{p=null}if(!(p!=null&&p.state)){window.localStorage.removeItem(u),r.descartados+=1;continue}await sl(i.respaldos,{motivo:il.LOCAL_STORAGE,origen:"localStorage",schemaVersion:p.schemaVersion??null,savedAt:p.savedAt??null,payload:p.state}),window.localStorage.removeItem(u),r.rescatados+=1}catch{}return r}const ll=Object.freeze({puestosRequierenVisitantesDiario:["Puesto Orosi","Puesto Quetzales"],diaCorteViaticos:15,mesObjetivoViaticos:"siguiente",permitirConsultaDespuesCierre:!0,aplicarFeriadosEnPrimerDiaLaboral:!0,alertaInactivoConActividad:!0,alertaIncapacitadoConActividad:!0,alertaAcumulativaSinModalidad:!0,alertaReposicionPendiente:!0,horasJornada:8}),Td=["siguiente","actual"];function ji(r={}){return{...ll,...r}}function hh(r,i=Ai){const s=[],u=Array.isArray(i)&&i.length?i:Ai;if(!Array.isArray(r.puestosRequierenVisitantesDiario))s.push("La lista de puestos con Visit. diario debe ser un arreglo.");else{const v=r.puestosRequierenVisitantesDiario.filter(T=>!u.includes(T));v.length&&s.push(`Puesto(s) no reconocido(s) en la lista de Visit. diaria: ${v.join(", ")}`)}const d=Number(r.diaCorteViaticos);(!Number.isInteger(d)||d<1||d>28)&&s.push("Día de corte de viáticos debe ser un entero entre 1 y 28."),Td.includes(r.mesObjetivoViaticos)||s.push(`mesObjetivoViaticos debe ser uno de: ${Td.join(", ")}.`);const p=Number(r.horasJornada);return(!Number.isFinite(p)||p<1||p>24)&&s.push("Horas por jornada debe ser un número entre 1 y 24."),s}const Pn=8,zs=["Día libre","Fuera de turno","Feriado","Vacaciones interrumpidas","Otro"],Qs=["Emergencia","Incendio forestal","Atención de denuncia","Actividad especial","Operativo de control","Otro"],Ud=["diaEntero","medioDia","horas"];function ya(r){return Math.round((Number(r)||0)*100)/100}function Kd(r,i,s=Pn){return r==="diaEntero"?s:r==="medioDia"?s/2:Number(i)||0}function cl(r){return Array.isArray(r==null?void 0:r.cuotas)?r.cuotas:(r==null?void 0:r.estado)==="Repuesto"?[{id:`i-${r.id||"x"}`,fecha:r.fechaReposicion||r.fecha,magnitud:r.magnitud,horas:r.horas||0}]:[]}function xT(r,i=Pn){return ya(Kd(r==null?void 0:r.magnitud,r==null?void 0:r.horas,i))}function $d(r,i=Pn){return ya(cl(r).reduce((s,u)=>s+Kd(u.magnitud,u.horas,i),0))}function pr(r,i=Pn){return ya(Math.max(0,xT(r,i)-$d(r,i)))}function qd(r,i=Pn){return $d(r,i)<=0?"Pendiente":pr(r,i)<=0?"Repuesto":"Parcial"}function bT(r){const i=String(r||"").match(/(\d+)/);return i?Number(i[1]):null}function VT(r=[]){const i=r.reduce((s,u)=>Math.max(s,bT(u.folio)||0),0);return`REP-${String(i+1).padStart(3,"0")}`}function AT(r=[],i=Pn){const s={},u={};for(const d of r)if(d.funcionario&&d.fecha&&(s[`${d.funcionario}|${d.fecha}`]={...d,estadoCalc:qd(d,i),saldo:pr(d,i)}),d.funcionario)for(const p of cl(d))p.fecha&&(u[`${d.funcionario}|${p.fecha}`]={...d,cuota:p});return{trabajadas:s,reposiciones:u}}function wT(r=[],i=Pn){let s=0,u=0,d=0,p=0;for(const v of r){const T=qd(v,i);p+=pr(v,i),T==="Repuesto"?d+=1:(s+=1,T==="Parcial"&&(u+=1))}return{total:r.length,pendientes:s,parciales:u,repuestos:d,saldoHoras:ya(p)}}function jT(r,i=Pn){const s=ya(r);if(s<=0)return"0 h";const u=s/i;return Number.isInteger(u)?u===1?"1 día":`${u} días`:s===i/2?"medio día":`${s} h`}function DT(r=[]){return[...r].sort((i,s)=>String(s.fecha||"").localeCompare(String(i.fecha||"")))}function kT(r=[],i,s=Pn){return ya(r.filter(u=>u.funcionario===i).reduce((u,d)=>u+pr(d,s),0))}function RT(r=[],i,s=Pn){return r.filter(u=>u.funcionario===i&&pr(u,s)>0).sort((u,d)=>String(u.fecha||"").localeCompare(String(d.fecha||"")))}function _T(r){return r==="L"?"Día libre":r==="V"?"Vacaciones interrumpidas":"Fuera de turno"}function IT({reposiciones:r=[],funcionario:i,fecha:s,categoria:u,motivo:d="Actividad especial",detalle:p=""}){return{id:`rep${Date.now()}`,folio:VT(r),funcionario:i,fecha:s,tipoDia:_T(u),motivo:d,motivoDetalle:p,magnitud:"diaEntero",horas:0,cuotas:[],observaciones:""}}function OT(r=[],i,s,u=Pn){const d=RT(r,i,u)[0];return d?r.map(p=>p.id===d.id?{...p,cuotas:[...cl(p),s]}:p):r}function FT(r=[],i=Pn){const s=new Map;for(const d of r){const p=d.funcionario||"—";s.has(p)||s.set(p,[]),s.get(p).push(d)}const u=[];for(const[d,p]of s.entries())u.push({funcionario:d,registros:DT(p),...wT(p,i)});return u.sort((d,p)=>p.saldoHoras-d.saldoHoras||p.total-d.total||d.funcionario.localeCompare(p.funcionario)),u}const gh=["Administrador de ASP","Guardaparques","Asistente Administrativo","Técnico en Recursos Naturales","Personal Apoyo ONG-Invest-Volunt"],Ph=["Activo","Inactivo","De vacaciones","Incapacitado"],yh=["Propiedad","Interino","ONG-Invest-Volunt"],Mh=["Horario administrativo L-V","10x5","12x6","14x7","16x8","20x10"],zT="Secretaría Ejecutiva/Dirección ACC";function QT(r=Ai){return[...Array.isArray(r)&&r.length?r:Ai,zT]}const JT=[{id:"naranja-claro",clases:"bg-orange-100 text-orange-950"},{id:"naranja",clases:"bg-orange-700 text-white"},{id:"cielo",clases:"bg-sky-100 text-sky-950"},{id:"esmeralda",clases:"bg-emerald-100 text-emerald-950"},{id:"violeta",clases:"bg-violet-100 text-violet-950"},{id:"pizarra",clases:"bg-slate-200 text-slate-900"}],Di="Atención rutinaria de visitantes",BT=[Di];function Qe(r){return String(r??"").trim().toLowerCase()}function Yt(r){return String(r??"").trim().toUpperCase()}function Eh(r,i,s=null){const u=[],d=String((r==null?void 0:r.nombre)??"").trim(),p=Yt(r==null?void 0:r.tag),v=(Array.isArray(i)?i:[]).filter(T=>Qe(T.nombre)!==Qe(s));return d?v.some(T=>Qe(T.nombre)===Qe(d))&&u.push(`Ya existe un puesto llamado «${d}».`):u.push("El nombre del puesto es obligatorio."),p?v.some(T=>Yt(T.tag)===p)&&u.push(`El código «${p}» ya está en uso.`):u.push("El código corto es obligatorio."),u}function Nh(r,i){return[...Array.isArray(r)?r:[],{...i,nombre:String(i.nombre).trim(),tag:Yt(i.tag)}]}function Ch(r,i,s){return(Array.isArray(r)?r:[]).map(d=>Qe(d.nombre)===Qe(i)?{...d,...s,nombre:String(s.nombre).trim(),tag:Yt(s.tag)}:d)}function Sh(r,i){return(Array.isArray(r)?r:[]).filter(u=>Qe(u.nombre)!==Qe(i))}function xh({puestos:r,personas:i,reglas:s,antes:u,despues:d}){const p=String(d??"").trim(),v=Array.isArray(r)?r:[],T=Array.isArray(i)?i:[],f=P=>Qe(P)===Qe(u);if(!p||Qe(u)===Qe(p))return{puestos:v,personas:T,reglas:s,afectados:0};const N=T.filter(P=>f(P.puestoOperativo)).length,y=Array.isArray(s==null?void 0:s.puestosRequierenVisitantesDiario)?s.puestosRequierenVisitantesDiario:[];return{puestos:v.map(P=>f(P.nombre)?{...P,nombre:p}:P),personas:T.map(P=>f(P.puestoOperativo)?{...P,puestoOperativo:p}:P),reglas:{...s,puestosRequierenVisitantesDiario:y.map(P=>f(P)?p:P)},afectados:N}}function bh(r,i,s){const u=Array.isArray(r)?r:[],d=u.findIndex(f=>Qe(f.nombre)===Qe(i));if(d<0)return u;const p=d+s;if(p<0||p>=u.length)return u;const v=[...u],[T]=v.splice(d,1);return v.splice(p,0,T),v}function Vh(r,i,s=[]){const d=[...Array.isArray(r)?r:[]],p=[],v=[],T=[],f=[],N=[],y=new Map,P=s.map(j=>j.clases??j),C=P[0]??"",w=j=>d.findIndex(Q=>Qe(Q.nombre)===Qe(j));return(Array.isArray(i)?i:[]).forEach((j,Q)=>{const D=Q+2,V=String((j==null?void 0:j.nombre)??"").trim();if(!V){T.push({fila:D,motivo:"sinNombre"});return}y.has(Qe(V))&&f.push({fila:D,anterior:y.get(Qe(V))}),y.set(Qe(V),D);const Y=Yt(j==null?void 0:j.tag),te=w(V);if(Y&&d.some((ue,Ee)=>Ee!==te&&Yt(ue.tag)===Y)){T.push({fila:D,motivo:"codigoOcupado",nombre:V,tag:Y});return}const pe=String((j==null?void 0:j.color)??"").trim(),ie=P.includes(pe)?pe:null;if(te<0){if(!Y){T.push({fila:D,motivo:"sinCodigo",nombre:V});return}const ue={nombre:V,tag:Y,color:ie||C};d.push(ue),p.push({fila:D,registro:ue});return}const ee=d[te];ee.nombre!==V&&N.push({fila:D,actual:ee.nombre,pedido:V});const Te={...ee,...Y?{tag:Y}:{},...ie?{color:ie}:{}},le=Object.keys(Te).filter(ue=>ee[ue]!==Te[ue]);le.length!==0&&(d[te]=Te,v.push({fila:D,registro:Te,previo:ee,cambios:le}))}),{resultado:d,nuevos:p,actualizados:v,omitidos:T,duplicados:f,renombresIgnorados:N}}function Ah(r,i){return(Array.isArray(r)?r:[]).filter(s=>Qe(s.puestoOperativo)===Qe(i))}const qs=200,Qi=Object.freeze({ALTA:"alta",EDICION:"edicion",BAJA:"baja",RESTAURACION:"restauracion",IMPORTACION:"importacion"}),YT=new Set(Object.values(Qi)),GT=new Set(["id"]);let Ld=0;function UT(){return Ld+=1,`h${Date.now()}-${Ld}`}function vd(r){return r??""}function KT(r,i){const s=r&&typeof r=="object"?r:{},u=i&&typeof i=="object"?i:{},d=new Set([...Object.keys(s),...Object.keys(u)]),p=[];for(const v of d){if(GT.has(v))continue;const T=vd(s[v]),f=vd(u[v]);T!==f&&p.push({campo:v,antes:T,despues:f})}return p.sort((v,T)=>v.campo.localeCompare(T.campo))}function $T(r){return{nombre:String((r==null?void 0:r.nombre)??"").trim(),cedula:String((r==null?void 0:r.cedula)??"").trim()}}function qT({tipo:r,funcionario:i,cambios:s=[],detalle:u=null,fecha:d}={}){return!YT.has(r)||r===Qi.EDICION&&s.length===0?null:{id:UT(),fecha:d||new Date().toISOString(),tipo:r,funcionario:$T(i),cambios:s,...u?{detalle:u}:{}}}function wh(r,i,s){return qT({tipo:Qi.EDICION,funcionario:i,cambios:KT(r,i),fecha:s})}function HT(r,i,s=qs){const u=Array.isArray(r)?r:[];if(!i)return u;const d=Number.isInteger(s)&&s>0?s:qs;return[i,...u].slice(0,d)}const hd=["Activo","Incapacitado","De vacaciones","Inactivo"],WT=1e3,ZT=2e4,XT=2e4,eL=3e5,nL=200,tL=200,aL=60,Hd=JT.map(r=>r.clases),rL=Hd[0]??"",iL=new Set(Object.values(Qi)),oL=new Map(wi.map(r=>[r.id,r]));function hn(r){return!!r&&typeof r=="object"&&!Array.isArray(r)}function sL(r){return r.replace(/<[^>]*>/g,"")}function tn(r,i,s){return typeof r!="string"?s:sL(r).trim().slice(0,i)}function Pa(r,i,s,u){if(typeof r!="string")return u;const d=r.trim().slice(0,i);return s.test(d)?d:u}function lL(r,i){return typeof r=="boolean"?r:i}function ki(r,i,{min:s=0,max:u=1e4}={}){const d=Number(r);return Number.isFinite(d)?Math.min(u,Math.max(s,d)):i}function dr(r,i){if(typeof r!="string")return i;const s=r.trim().match(/^(\d{4})-(\d{2})-(\d{2})$/);if(!s)return i;const u=Number(s[1]);if(u<2e3||u>2100)return i;const d=Number(s[2]),p=Number(s[3]);return d<1||d>12||p<1||p>31?i:s[0]}function cL(r){if(!hn(r))return r;const i=typeof r.id=="string"?oL.get(r.id):void 0,s={...r};"id"in s&&(s.id=Pa(s.id,20,/^[A-Za-z0-9-]+$/,"")),"nombre"in s&&(s.nombre=tn(s.nombre,120,(i==null?void 0:i.nombre)??"")),"cedula"in s&&(s.cedula=Pa(s.cedula,20,/^[0-9-]+$/,(i==null?void 0:i.cedula)??"")),"email"in s&&(s.email=Pa(s.email,120,/^[^\s@]+@[^\s@]+\.[^\s@]+$/,(i==null?void 0:i.email)??""));for(const u of["puesto","puestoOperativo","condicion","jornada","modalidad"])u in s&&(s[u]=tn(s[u],80,(i==null?void 0:i[u])??""));if("obs"in s&&(s.obs=tn(s.obs,500,(i==null?void 0:i.obs)??"")),"estado"in s){const u=i&&hd.includes(i.estado)?i.estado:"Activo";s.estado=hd.includes(s.estado)?s.estado:u}for(const u of["disponibilidad","policia","brigada","ong"])u in s&&(s[u]=lL(s[u],(i==null?void 0:i[u])??!1));return"jefe"in s&&(s.jefe=typeof s.jefe=="string"?s.jefe:(i==null?void 0:i.jefe)??""),s}function uL(r){if(!hn(r))return null;const i={...r};"id"in i&&(i.id=tn(i.id,40,""));for(const[u,d]of Object.entries(i))u==="id"||u==="inicio"||u==="fin"||typeof d=="string"&&(i[u]=tn(d,200,""));if(typeof i.inicio!="string")return null;const s=dr(i.inicio,"");return s?(i.inicio=s,"fin"in i&&(i.fin=dr(i.fin,s)),i):null}function dL(r){if(!hn(r))return null;const i={...r};return"id"in i&&(i.id=tn(i.id,40,"")),"fecha"in i&&(i.fecha=dr(i.fecha,"")),"magnitud"in i&&(i.magnitud=Ud.includes(i.magnitud)?i.magnitud:"diaEntero"),"horas"in i&&(i.horas=ki(i.horas,0,{min:0,max:24})),i}function mL(r){if(!hn(r))return null;const i={...r};if(typeof i.funcionario!="string"||!i.funcionario.trim()||(i.funcionario=tn(i.funcionario,120,""),typeof i.fecha!="string"))return null;const s=dr(i.fecha,"");return s?(i.fecha=s,"id"in i&&(i.id=tn(i.id,40,"")),"folio"in i&&(i.folio=tn(i.folio,20,"")),"tipoDia"in i&&(i.tipoDia=zs.includes(i.tipoDia)?i.tipoDia:zs[zs.length-1]),"motivo"in i&&(i.motivo=Qs.includes(i.motivo)?i.motivo:Qs[Qs.length-1]),"motivoDetalle"in i&&(i.motivoDetalle=tn(i.motivoDetalle,300,"")),"observaciones"in i&&(i.observaciones=tn(i.observaciones,300,"")),"magnitud"in i&&(i.magnitud=Ud.includes(i.magnitud)?i.magnitud:"diaEntero"),"horas"in i&&(i.horas=ki(i.horas,0,{min:0,max:24})),"fechaReposicion"in i&&(i.fechaReposicion=dr(i.fechaReposicion,"")),Array.isArray(i.cuotas)&&(i.cuotas=i.cuotas.map(dL).filter(Boolean).slice(0,500)),i):null}function pL(r){if(!hn(r))return null;const i={...r},s=tn(i.nombre,80,"");return s?(i.nombre=s,i.tag=Pa(Yt(i.tag),8,/^[A-Z0-9-]+$/,""),i.color=Hd.includes(i.color)?i.color:rL,i):null}function gd(r){return typeof r=="boolean"?r:typeof r=="number"?Number.isFinite(r)?r:"":tn(r,200,"")}function fL(r){if(!hn(r))return null;const i=Pa(r.campo,40,/^[A-Za-z0-9_]+$/,"");return i?{campo:i,antes:gd(r.antes),despues:gd(r.despues)}:null}function TL(r){var T,f;if(!hn(r)||!iL.has(r.tipo))return null;const i=typeof r.fecha=="string"?r.fecha.trim().slice(0,40):"",s=i&&!Number.isNaN(Date.parse(i))?i:"",u=Array.isArray(r.cambios)?r.cambios.map(fL).filter(Boolean).slice(0,aL):[],d=new Set,p=u.filter(N=>d.has(N.campo)?!1:(d.add(N.campo),!0)),v={id:tn(r.id,40,""),fecha:s,tipo:r.tipo,funcionario:{nombre:tn((T=r.funcionario)==null?void 0:T.nombre,120,""),cedula:Pa((f=r.funcionario)==null?void 0:f.cedula,20,/^[0-9-]+$/,"")},cambios:p};return hn(r.detalle)&&(v.detalle={archivo:tn(r.detalle.archivo,120,""),altas:ki(r.detalle.altas,0,{min:0,max:1e6}),cambios:ki(r.detalle.cambios,0,{min:0,max:1e6})}),v}function LL(r){const i={};let s=0;for(const[u,d]of Object.entries(r)){if(s>=eL)break;typeof u!="string"||u.length===0||u.length>nL||(i[u]=typeof d=="string"&&d.length<=10?d:"",s+=1)}return i}function vL(r){try{if(!hn(r))return r;const i={...r};if(Array.isArray(i.personas)&&(i.personas=i.personas.filter(hn).map(s=>{try{return cL(s)}catch{return s}}).slice(0,WT)),Array.isArray(i.actividadesPlan)&&(i.actividadesPlan=i.actividadesPlan.filter(hn).map(s=>{try{return uL(s)}catch{return s}}).filter(Boolean).slice(0,ZT)),Array.isArray(i.reposiciones)&&(i.reposiciones=i.reposiciones.map(s=>{try{return mL(s)}catch{return null}}).filter(Boolean).slice(0,XT)),Array.isArray(i.puestos)){const s=new Set;i.puestos=i.puestos.map(u=>{try{return pL(u)}catch{return null}}).filter(Boolean).filter(u=>{const d=u.nombre.toLocaleLowerCase("es-CR");return s.has(d)?!1:(s.add(d),!0)}).slice(0,tL)}if(Array.isArray(i.historial)){const s=new Set;i.historial=i.historial.map(u=>{try{return TL(u)}catch{return null}}).filter(Boolean).map((u,d)=>{const p=u.id&&!s.has(u.id)?u.id:`importado-${d}`;return s.add(p),u.id===p?u:{...u,id:p}}).slice(0,qs)}if(hn(i.roleData))try{i.roleData=LL(i.roleData)}catch{}if("reglas"in i)try{i.reglas=ji(hn(i.reglas)?i.reglas:{})}catch{}return i}catch{return r}}const Ji="pnlq:state",ul="pnlq:lastSavedAt",hL=Gd;function Ut(){try{if(typeof window>"u"||!window.localStorage)return null;const r="__pnlq_probe__";return window.localStorage.setItem(r,"1"),window.localStorage.removeItem(r),window.localStorage}catch{return null}}let bt=null;function gL(){const r=Ut();if(!r)return 0;try{const i=r.getItem(Ji);if(!i)return 0;const s=JSON.parse(i);return typeof(s==null?void 0:s.revision)=="number"?s.revision:0}catch{return 0}}function dl(){return bt===null&&(bt=gL()),bt}function Pd(r){dl(),typeof r=="number"&&r>bt&&(bt=r)}function PL(){return dl(),bt+=1,bt}function Hs(){const r=Wd();return r?r.state:null}function Wd(){const r=Ut();if(!r)return null;const i=r.getItem(Ji);if(!i)return null;try{const s=JSON.parse(i);if(!s||typeof s!="object")return null;if(s.schemaVersion!==$n){const u=`${hL}${s.schemaVersion??"unknown"}-${Date.now()}`;try{r.setItem(u,i)}catch{}return null}return dl(),{state:s.state??null,revision:typeof s.revision=="number"?s.revision:0,savedAt:s.savedAt??null}}catch{return null}}function yL(r,i){if(!r&&!i)return null;if(!r)return{...i,source:"indexeddb"};if(!i)return{...r,source:"localStorage"};const s=r.revision??0,u=i.revision??0;if(s!==u)return s>u?{...r,source:"localStorage"}:{...i,source:"indexeddb"};const d=r.savedAt?Date.parse(r.savedAt):NaN,p=i.savedAt?Date.parse(i.savedAt):NaN;return!Number.isNaN(d)&&!Number.isNaN(p)&&d!==p?d>p?{...r,source:"localStorage"}:{...i,source:"indexeddb"}:{...r,source:"localStorage"}}async function ML(){const r=await MT(),i=await gT(),s=Wd();await ST().catch(()=>({rescatados:0,descartados:0}));const u=yL(s,i);return u?(Pd((s==null?void 0:s.revision)??0),Pd((i==null?void 0:i.revision)??0),{state:u.state,source:u.source,migrated:r.migrated}):{state:null,source:null,migrated:r.migrated}}async function EL(r){const i=PL(),s=new Date().toISOString(),u=Ut();let d=!1;if(u)try{const v=JSON.stringify({schemaVersion:$n,savedAt:s,revision:i,state:r});u.setItem(Ji,v),u.setItem(ul,s),d=!0}catch{d=!1}const p=await PT(r,i);return{ok:d||p,ls:d,idb:p,revision:i}}async function NL(){const r=Ut();let i=!1;if(r)try{r.removeItem(Ji),r.removeItem(ul),i=!0}catch{}const s=await yT().catch(()=>!1),u=await ET().catch(()=>!1),d=s||u;return i&&d&&(bt=null),{ok:i&&d,ls:i,idb:d}}function CL(){const r=Ut();if(!r)return null;try{return r.getItem(ul)}catch{return null}}function SL(r){return{schemaVersion:$n,appName:"PNLQ — Gestión de Jornadas",unidad:"PNLQ-BTMM",areaConservacion:"ACC",exportadoEn:new Date().toISOString(),state:r}}function jh(r){try{const i=JSON.parse(r);return!i||typeof i!="object"?{ok:!1,reason:"JSON inválido"}:i.schemaVersion!==$n?{ok:!1,reason:`Versión de esquema incompatible: encontrada v${i.schemaVersion??"?"} esperada v${$n}`}:!i.state||typeof i.state!="object"?{ok:!1,reason:"Snapshot sin estado"}:{ok:!0,state:vL(i.state),exportadoEn:i.exportadoEn}}catch(i){return{ok:!1,reason:`JSON malformado: ${i.message}`}}}async function xL(){const r=!!Ut();let i=!1;if(typeof indexedDB<"u")try{i=!!await An()}catch{i=!1}return i?{kind:"indexeddb",hasIDB:i,hasLS:r}:r?{kind:"localStorage",hasIDB:!1,hasLS:!0}:{kind:"none",hasIDB:!1,hasLS:!1}}function bL(){const r=typeof indexedDB<"u",i=!!Ut();return r?{kind:"indexeddb",hasIDB:r,hasLS:i,verificado:!1}:i?{kind:"localStorage",hasIDB:!1,hasLS:!0,verificado:!0}:{kind:"none",hasIDB:!1,hasLS:!1,verificado:!0}}function Zd(r,i){return new Date(r,i+1,0).getDate()}function Dh(r,i,s){const u=r*12+i+s;return{year:Math.floor(u/12),month:(u%12+12)%12}}function Kn(r){return String(r).padStart(2,"0")}function Bi(r=new Date){return`${r.getFullYear()}-${Kn(r.getMonth()+1)}-${Kn(r.getDate())}`}function VL(r=new Date){return`${Bi(r)}_${Kn(r.getHours())}-${Kn(r.getMinutes())}-${Kn(r.getSeconds())}`}function AL(r,i,s){return`${r}-${Kn(i+1)}-${Kn(s)}`}function rt(r){if(!r)return"—";const i=r.split("-");return`${i[2]}/${i[1]}/${i[0]}`}function wL(r,i=new Date(2026,4,19)){return r?Math.round((new Date(r+"T00:00:00")-i)/864e5):null}function jL(r,i,s=null){for(let u=1;u<=Zd(r,i);u++){const d=new Date(r,i,u).getDay();if(d>=1&&d<=5){if(!s)return u;const p=AL(r,i,u);if(!s.has(p))return u}}return 1}const Xd=x.createContext(null),Ws=new Date,DL=Bi(Ws),Zs="limpiezaEnzoYSetDic2026",Xs="actividadesEjemploJul2026",kL="2026-07-14",Ri="rolesFuenteJulAgo2026",xt={view:"dia",personas:wi,month:Ws.getMonth(),year:Ws.getFullYear(),compact:!1,roleData:rl,actividadesPlan:Yd,reposiciones:mT,diaVista:DL,filtrosVista:{},funcionarioVista:"",historial:[],puestos:Bd,reglas:{...ll},migraciones:{[Zs]:!0,[Xs]:!0,[Ri]:$s}};function el(r){return r==="dashboard"?"dia":r}function em(r){const i=(r==null?void 0:r.migraciones)||{},s=!!i[Zs],u=(Array.isArray(r==null?void 0:r.personas)?r.personas:[]).filter(Boolean),d=s?u:u.filter(C=>C.nombre!=="Enzo Martini"),p=new Map(d.map(C=>[C.nombre,C])),v=new Set(wi.map(C=>C.nombre)),T=(r==null?void 0:r.roleData)||{},f=s?T:Object.fromEntries(Object.entries(T).filter(([C])=>!/^2026-(?:9|10|11|12)-/.test(C)&&!C.includes("-Enzo Martini-"))),N=[...wi.map(C=>({...C,...p.get(C.nombre)||{}})),...d.filter(C=>C.nombre&&!v.has(C.nombre))];let y=Array.isArray(r==null?void 0:r.actividadesPlan)?r.actividadesPlan.filter(C=>C&&typeof C=="object"):xt.actividadesPlan;if(!i[Xs]&&Array.isArray(r==null?void 0:r.actividadesPlan)){const C=new Set(y.map(j=>j.id)),w=Yd.filter(j=>j.inicio>=kL&&!C.has(j.id));w.length&&(y=[...y,...w])}const P=Array.isArray(r==null?void 0:r.reposiciones)?r.reposiciones.filter(C=>C&&typeof C=="object"&&C.funcionario&&C.fecha):xt.reposiciones;return{...xt,...r,view:el((r==null?void 0:r.view)??xt.view),personas:N,actividadesPlan:y,reposiciones:P,historial:Array.isArray(r==null?void 0:r.historial)?r.historial:[],filtrosVista:{},puestos:Array.isArray(r==null?void 0:r.puestos)&&r.puestos.length?r.puestos.filter(C=>C&&typeof C=="object"&&C.nombre):Bd,roleData:{...rl,...f},reglas:ji(r==null?void 0:r.reglas),migraciones:{...i,[Zs]:!0,[Xs]:!0}}}function RL(){const r=Hs();return r?em(r):xt}function Vn(r,i){return typeof r=="function"?r(i):r}function _L(r,i){var s,u,d,p;switch(i.type){case"SET_VIEW":return{...r,view:el(i.payload)};case"SET_MONTH":return{...r,month:Vn(i.payload,r.month)};case"SET_YEAR":return{...r,year:Vn(i.payload,r.year)};case"SET_PERIODO":return{...r,month:i.month,year:i.year};case"SET_COMPACT":return{...r,compact:Vn(i.payload,r.compact)};case"SET_DIA_VISTA":return{...r,diaVista:Vn(i.payload,r.diaVista)};case"SET_FILTROS_VISTA":{const v=i.vista;if(!v)return r;const T=(s=r.filtrosVista)==null?void 0:s[v],f=Vn(i.payload,T||{}),N={};for(const[y,P]of Object.entries(f||{}))P!=null&&P!==""&&(N[y]=String(P));return{...r,filtrosVista:{...r.filtrosVista||{},[v]:N}}}case"SET_FUNCIONARIO_VISTA":return{...r,funcionarioVista:String(Vn(i.payload,r.funcionarioVista)||"")};case"SET_PERSONAS":return{...r,personas:Vn(i.payload,r.personas)};case"SET_ACTIVIDADES_PLAN":return{...r,actividadesPlan:Vn(i.payload,r.actividadesPlan)};case"SET_REPOSICIONES":return{...r,reposiciones:Vn(i.payload,r.reposiciones)};case"SET_ROLE_DATA":return{...r,roleData:Vn(i.payload,r.roleData)};case"SET_PUESTOS":return{...r,puestos:Vn(i.payload,r.puestos)};case"REGISTRAR_CAMBIO":return{...r,historial:HT(r.historial,i.payload)};case"SYNC_ROLES_FUENTE":return((u=r.migraciones)==null?void 0:u[Ri])===i.version?r:{...r,roleData:vT(r.roleData),migraciones:{...r.migraciones||{},[Ri]:i.version}};case"SET_REGLAS":{const v=Vn(i.payload,r.reglas);return{...r,reglas:ji(v)}}case"REPLACE_STATE":return{...xt,...i.payload,view:el(((d=i.payload)==null?void 0:d.view)??xt.view),reglas:ji((p=i.payload)==null?void 0:p.reglas)};default:return r}}const IL=new Set(["view","compact","diaVista","funcionarioVista","filtrosVista","month","year"]);function xi(r){const i={};for(const s of Object.keys(r))IL.has(s)||(i[s]=r[s]);return i}const OL=500;function FL({children:r}){const[i,s]=x.useReducer(_L,void 0,RL),[u,d]=x.useState(()=>CL()),[p,v]=x.useState(0),[T,f]=x.useState(()=>bL()),[N,y]=x.useState(!1),[P,C]=x.useState(!1),[w,j]=x.useState(null),Q=x.useRef(null),D=x.useRef(!0),V=x.useRef(!1),Y=x.useRef(!1),te=x.useRef(!1);x.useEffect(()=>{let B=!1;return xL().then(X=>{B||f(X)}),()=>{B=!0}},[]);const Z=x.useRef(i);x.useEffect(()=>{Z.current=i});const pe=x.useRef(JSON.stringify(xi(i)));x.useEffect(()=>{let B=!1;return(async()=>{try{const{state:X,source:Pe,migrated:he}=await ML();if(B)return;if(he&&y(!0),X&&Pe==="indexeddb"){const Me=em(X),Je=JSON.stringify(xi(Me)),sn=pe.current;if(JSON.stringify(xi(Z.current))!==sn)return;sn!==Je&&s({type:"REPLACE_STATE",payload:Me})}}catch(X){console.error("No fue posible completar la hidratación local",X)}finally{B||(V.current=!0,C(!0))}})(),()=>{B=!0}},[]),x.useEffect(()=>{var X;!P||((X=Z.current.migraciones)==null?void 0:X[Ri])===$s||s({type:"SYNC_ROLES_FUENTE",version:$s})},[P]);const ie=x.useRef(null);ie.current=async function(){if(Y.current){te.current=!0;return}Y.current=!0,te.current=!1;try{const X=await EL(xi(Z.current));j(X),X.ls&&d(new Date().toISOString()),X.ok&&v(0)}finally{Y.current=!1,te.current&&(te.current=!1,ie.current())}},x.useEffect(()=>{if(D.current){D.current=!1;return}return v(B=>B+1),Q.current&&window.clearTimeout(Q.current),Q.current=window.setTimeout(()=>{Q.current=null,ie.current()},OL),()=>{Q.current&&window.clearTimeout(Q.current)}},[i]),x.useEffect(()=>{const B=()=>{Q.current&&(window.clearTimeout(Q.current),Q.current=null,ie.current())},X=()=>{document.visibilityState==="hidden"&&B()};return window.addEventListener("pagehide",B),document.addEventListener("visibilitychange",X),()=>{window.removeEventListener("pagehide",B),document.removeEventListener("visibilitychange",X)}},[]);const ee=x.useCallback(B=>s({type:"SET_VIEW",payload:B}),[]),Te=x.useCallback(B=>s({type:"SET_MONTH",payload:B}),[]),le=x.useCallback(B=>s({type:"SET_YEAR",payload:B}),[]),ue=x.useCallback(B=>s({type:"SET_COMPACT",payload:B}),[]),Ee=x.useCallback(B=>s({type:"SET_DIA_VISTA",payload:B}),[]),ge=x.useCallback(B=>s({type:"SET_FUNCIONARIO_VISTA",payload:B}),[]),ye=x.useCallback((B,X)=>s({type:"SET_FILTROS_VISTA",vista:B,payload:X}),[]),Ve=x.useCallback(B=>s({type:"SET_PERSONAS",payload:B}),[]),se=x.useCallback(B=>s({type:"SET_ACTIVIDADES_PLAN",payload:B}),[]),Le=x.useCallback(B=>s({type:"SET_REPOSICIONES",payload:B}),[]),fe=x.useCallback(B=>s({type:"SET_ROLE_DATA",payload:B}),[]),z=x.useCallback(B=>s({type:"SET_PUESTOS",payload:B}),[]),H=x.useCallback(B=>s({type:"REGISTRAR_CAMBIO",payload:B}),[]),G=x.useCallback(B=>s({type:"SET_REGLAS",payload:B}),[]),M=x.useCallback(B=>{s({type:"REPLACE_STATE",payload:B})},[]),R=x.useCallback(()=>{s({type:"SET_REGLAS",payload:{...ll}})},[]),oe=x.useCallback(async()=>{Q.current&&(window.clearTimeout(Q.current),Q.current=null);const B=await NL();return s({type:"REPLACE_STATE",payload:xt}),d(null),j(null),v(0),B},[]),me=x.useMemo(()=>({...i,setView:ee,setMonth:Te,setYear:le,setCompact:ue,setDiaVista:Ee,setFuncionarioVista:ge,setFiltrosVista:ye,setPersonas:Ve,setActividadesPlan:se,setReposiciones:Le,setRoleData:fe,setPuestos:z,registrarCambio:H,setReglas:G,resetReglas:R,replaceState:M,resetToSeed:oe,lastSavedAt:u,pendingChanges:p,lastSaveResult:w,durableSaveFailed:w?!w.idb:!1,schemaVersion:$n,storageBackend:T,migracionLs:N,dispatch:s}),[i,ee,Te,le,ue,Ee,ge,ye,Ve,se,Le,fe,z,H,G,R,M,oe,u,p,w,T,N]);return c.jsx(Xd.Provider,{value:me,children:r})}function Gt(){const r=x.useContext(Xd);if(!r)throw new Error("useApp must be used within an <AppProvider>");return r}const zL={atajos:{buscarTitulo:"Pulse / para saltar aquí"},app:{name:"PNLQ — Gestión de Jornadas Laborales",short:"PNLQ",estado:"Activo",reglaDura:"Regla dura: el sistema registra y alerta; no genera pago, reposición, suspensión o derecho automático.",sinacCR:"SINAC · Costa Rica",accNombre:"Área de Conservación Central",bloqueLinea1:"Bloque Tapantí",bloqueLinea2:"Macizo de la Muerte",bloqueSub:"Gestión de jornadas laborales",perfilNombre:"P. Sánchez N.",perfilCargo:"Guardaparques · ACC",titulo:"Gestión de jornadas laborales"},sidebar:{grupoPrincipal:"Principal",grupoJornadas:"Jornadas",grupoControl:"Control"},view:{dia:"Día",funcionarios:"Funcionarios",roles:"Roles",planificacion:"Planificación general",planFuncionario:"Planificación/Funcionario",adelantos:"Adelanto de viáticos",reposicion:"Reposición de tiempo",disponibilidad:"Disponibilidad",alertas:"Alertas",datos:"Datos · respaldo",configuracion:"Configuración"},topbar:{periodo:"Periodo",mesAnterior:"Mes anterior",mesSiguiente:"Mes siguiente",mes:"Mes",anio:"Año",vistaCompacta:"Vista compacta",vistaAmplia:"Vista amplia",cargando:"Cargando vista…",hoy:"Hoy",tema:"Tema y contraste",previewMobile:"Abrir simulador temporal de vista móvil",previewMobileCorto:"Vista móvil",previewTitle:"Vista móvil temporal",previewDesc:"Simulación de un teléfono genérico de {ancho} × {alto} px. Puede usar la aplicación dentro del marco.",previewFrameTitle:"Aplicación en tamaño de teléfono móvil",previewOrientation:"Orientación del teléfono simulado",previewVertical:"Vertical",previewHorizontal:"Horizontal"},bottomNav:{inicio:"Inicio",personal:"Personal",plan:"Plan",alertas:"Alertas",dia:"Día",roles:"Roles",planFunc:"Plan/Func.",viaticos:"Viáticos",reposicion:"Reposición",disponib:"Disponib.",datos:"Datos",config:"Config.",mas:"Más",masTitulo:"Más módulos",masSub:"Herramientas y módulos secundarios",masAria:"Más opciones",navAria:"Navegación principal",alertasAria:"{n} alertas pendientes"},theme:{light:"Claro",dark:"Oscuro",hc:"Alto contraste",cambiarOscuro:"Cambiar a oscuro",cambiarHC:"Cambiar a alto contraste",cambiarClaro:"Cambiar a claro"},cobertura:{titulo:"Cobertura programada",programados:"Programados en actividades",enTurnoRol:"En turno según rol",atencionVisit:"Atención rutinaria visitantes",alertaSinAtencion:"ALERTA: debe haber al menos una persona asignada.",asignadosVisit:"Asignados a atención rutinaria de visitantes",enTurnoSegunRol:"Funcionarios en turno según rol",sinTurno:"No hay funcionarios en turno según rol para este puesto operativo y día.",programadosLugar:"Funcionarios programados en actividades con este lugar",sinProgramados:"No hay funcionarios programados en actividades con este puesto operativo como lugar para este día.",sinActividad:"Sin actividad programada para este día.",rolPrefix:"Rol: {rol} · {puesto}",agregarActividad:"Agregar actividad",editarActividad:"Editar actividad"},kpi:{coberturaCritica:"Cobertura crítica",coberturaCriticaSub:"días sin Visit. asignada",sinActividad:"Sin actividad",sinActividadSub:"en turno hoy sin planificar",porVencer:"Por vencer",porVencerSub:"disponibilidades ≤30 días",personalActivo:"Personal activo",personalActivoSub:"/ {total} total",reposicionPendiente:"Tiempo por reponer",reposicionPendienteSub:"funcionarios con tiempo pendiente",enTurno:"En turno",conActividad:"Con actividad",fueraDeTurno:"Fuera de turno",conViatico:"Con viático"},dia:{coberturaCritica:"Cobertura crítica en {n} puesto(s)",coberturaCriticaSinNadie:"{puesto}: nadie asignado a la atención de visitantes.",coberturaCriticaRemoto:"{puesto}: {n} persona(s) asignada(s) a la atención de visitantes, pero ninguna presente en el puesto.",coberturaCriticaAyuda:"Estos puestos deben tener atención de visitantes todos los días. Asigne a alguien que esté en turno presencial, o ajuste la regla en Configuración.",coberturaCriticaAria:"{puesto} en cobertura crítica",anterior:"Anterior",siguiente:"Siguiente",diaAnterior:"Día anterior",diaSiguiente:"Día siguiente",seleccionarFecha:"Seleccionar fecha",pistaSwipe:"Deslice ←/→ para cambiar día",porPuesto:"Por puesto operativo",resumenTitulo:"Resumen del día",resumenEnTurno:"En turno",resumenSinActividad:"Sin actividad",resumenAlertas:"Alertas",resumenPistaSinActividad:"Hay personas en turno sin actividad. Baje a la sección «En turno · sin actividad» para asignar.",ayudaAria:"Cómo usar la vista Día",th:{puesto:"Puesto",fuera:"Fuera",enTurno:"En turno",conActividad:"Con activ.",sinActividad:"Sin activ.",total:"Total"},actividadesTitulo:"Actividades planificadas ({n})",actividadesTituloCorto:"Actividades · {n}",teletrabajoBadge:"Teletrabajo",teletrabajoResumen:"De quienes trabajan hoy, {n} lo hacen en teletrabajo y no pueden atender visitantes.",filtroActividades:{mostrar:"Mostrar actividades",aria:"Filtrar actividades del día",general:"General",trabajo:"Tipo de trabajo",presencial:"Presencial",teletrabajo:"Teletrabajo",funcionario:"Funcionario",puesto:"Puesto",seleccionarFuncionario:"Funcionario",seleccionarPuesto:"Puesto operativo",resultados:"Mostrando {n} de {total} actividades"},nueva:"+ Nueva",nuevaCorta:"Nueva",sinActividades:"Sin actividades planificadas para este día",enTurnoConActTitulo:"En turno · con actividad ({n})",enTurnoConActVacio:"Ningún funcionario en turno tiene actividad programada",enTurnoSinActTitulo:"En turno · sin actividad ({n})",enTurnoSinActVacio:"Todos los funcionarios en turno tienen actividad asignada",asignar:"+ Asignar",fueraDeTurnoTitulo:"Fuera de turno ({n})",fueraDeTurnoVacio:"Todos los funcionarios activos están en turno",conViaticoTitulo:"Con viático este día ({n})",nFuncionarios:"{n} funcionario{plural}",viaticoBadge:"💵 Viático",conflictosBadge:"⚠ {n} conflicto{plural}",sinLugar:"Sin lugar"},help:{dia:{titulo:"Cómo usar la vista Día",lineas:["Arriba elige la fecha con las flechas o el calendario.","Las tres cifras grandes muestran quién está en turno, quién falta actividad y cuántas alertas hay.","Toque «Alertas» en la barra inferior o la cifra de alertas para ver los avisos.","Use «+ Nueva» o el botón redondo para registrar una actividad.","Los cambios se guardan solos en este teléfono (vea el mensaje «Guardado»)."]}},funcionarios:{titulo:"Funcionarios",agregar:"Agregar funcionario",agregarCorto:"Agregar",buscarPlaceholder:"Buscar por nombre, cédula, puesto u observación…",verFiltros:"Filtros y orden",filtroTodos:"Todos",filtroGuardas:"Guardaparques",filtroDisp:"Con disponibilidad",filtroAcum:"Acumulativa",filtroOng:"ONG-Invest-Volunt",filtroSinRes:"Sin resolución",vistaTabla:"Tabla",vistaTarjetas:"Tarjetas",vistaAria:"Vista",sinResultadosTitulo:"Sin resultados",sinResultadosDesc:"Ajuste la búsqueda o los filtros para encontrar funcionarios.",th:{funcionario:"Funcionario",cargo:"Cargo / puesto operativo",jornada:"Jornada",disponibilidad:"Disponibilidad",atributos:"Atributos",estado:"Estado",acciones:"Acciones"},sinPuesto:"Sin puesto operativo",sinResolucion:"🔵 Sin resolución",si:"Sí",no:"No",leyendaPolicia:"🛡️ Autoridad de policía",leyendaBrigada:"🔥 Brigada forestal",leyendaPendiente:"🔵 Dato operativo por completar",eliminado:"Se eliminó a {nombre}",restaurado:"Se restauró a {nombre}",creado:"Se agregó a {nombre}",guardado:"Se guardaron los cambios de {nombre}",ordenar:"Ordenar",filtrosAria:"Filtrar funcionarios",exportar:"Exportar CSV",exportarCorto:"CSV",exportarAria:"Exportar a CSV los funcionarios que se están viendo",exportado:"Se exportaron {n} funcionarios a CSV",exportadoVacio:"No hay funcionarios que exportar con este filtro",exportarError:"El navegador no permitió la descarga",importar:"Importar CSV",importarCorto:"Importar",importarAria:"Importar funcionarios desde un archivo CSV",importa:{titulo:"Revisar antes de importar",sub:"Nada se ha guardado todavía. Así quedaría la lista:",altas:"Se agregan",cambios:"Se actualizan",intactos:"No se tocan",omitidas:"Filas omitidas por no traer nombre ni cédula: {n}",vacias:"Filas en blanco ignoradas: {n}",duplicadas:"Identidades repetidas dentro del archivo: {n}. Manda la última fila de cada una.",faltantes:"Columnas que no venían en el archivo: {cols}. Esos datos se conservan como estaban.",desconocidas:"Columnas del archivo que se ignoran: {cols}",avisosTitulo:"Advertencias sobre los datos importados:",avisosNota:"No impiden importar; quedan registradas igual que al escribirlas a mano.",respaldo:"Antes de aplicar se descargará un respaldo completo. Si algo sale mal, se restaura desde «Datos · respaldo».",confirmar:"Crear respaldo e importar",sinIdentificar:"El archivo no trae ni «Nombre» ni «Cédula», así que no hay forma de saber a quién corresponde cada fila.",sinFilas:"El archivo no tiene ninguna fila de datos.",demasiadoGrande:"El archivo supera los {mb} MB y no se procesó.",errorLectura:"No se pudo leer el archivo.",hecho:"Importados: {altas} nuevos y {cambios} actualizados",respaldoFallo:"No se pudo descargar el respaldo, así que no se importó nada."},col:{nombre:"Nombre",cedula:"Cédula",email:"Correo",puesto:"Cargo institucional",puestoOperativo:"Puesto operativo",condicion:"Condición",jornada:"Jornada",modalidad:"Modalidad",resolucion:"Resolución",contrato:"Contrato de disponibilidad",vencimiento:"Vencimiento",ingreso:"Ingreso",disponibilidad:"Disponibilidad",policia:"Autoridad de policía",brigada:"Brigada forestal",ong:"ONG-Invest-Volunt",estado:"Estado",obs:"Observaciones"},procesando:"Procesando…",procesandoCorto:"…",procesandoAria:"Procesando el archivo, espere un momento",atributoPolicia:"Policía",atributoBrigada:"Brigada",card:{observaciones:"Observaciones",cargo:"Cargo",jornada:"Jornada",disponibilidad:"Disponibilidad",atributos:"Atributos",venceCorto:"Vence {fecha}"},verFicha:"Ver ficha",verFichaDe:"Ver la ficha de {nombre}"},ficha:{titulo:"Ficha de {nombre}",volver:"Volver a Funcionarios",noExiste:"No se encontró a esa persona",noExisteDesc:"El enlace apunta a «{nombre}», que ya no está en la lista de funcionarios. Puede que se eliminara o que el nombre cambiara.",editar:"Editar ficha",verRoles:"Ver en Roles",datos:{titulo:"Datos básicos",cedula:"Cédula",email:"Correo",cargo:"Cargo",puestoOperativo:"Puesto operativo",condicion:"Condición",jornada:"Jornada",modalidad:"Modalidad",resolucion:"Resolución",jefatura:"Jefatura",ingreso:"Ingreso",estado:"Estado",disponibilidad:"Disponibilidad",contrato:"Contrato",vencimiento:"Vence",observaciones:"Observaciones",sinDato:"—"},banco:{titulo:"Banco de tiempo",ayuda:"Tiempo trabajado fuera de rol que la administración debe reponer. El saldo sale del mismo cálculo que la vista de Reposición.",saldo:"Saldo a favor",sinSaldo:"Sin tiempo pendiente de reponer",sinRegistros:"Sin registros de tiempo trabajado fuera de rol",sinRegistrosDesc:"Cuando se registre un llamado a trabajar en día libre, feriado o fuera de turno, aparecerá aquí.",registros:"{n} registro(s)",pendientes:"{n} pendiente(s)",repuestos:"{n} repuesto(s)",verDetalle:"Ver en Reposición",thFolio:"Folio",thFecha:"Fecha",thTipo:"Tipo de día",thMotivo:"Motivo",thTrabajado:"Trabajado",thRepuesto:"Repuesto",thSaldo:"Saldo",thEstado:"Estado",horas:"{n} h"},roles:{titulo:"Rol del mes",ayuda:"Días de {mes}. El código de cada día es el mismo que muestra la cuadrícula de Roles.",sinMarcar:"{n} día(s) sin marcar",activos:"{n} día(s) de trabajo",presenciales:"{n} presencial(es)",dias:"{n} día(s)",hoy:"Hoy: {etiqueta}"},actividades:{titulo:"Actividades programadas",proximas:"Próximas",pasadas:"Pasadas",todas:"Todas",filtro:"Filtrar actividades por fecha",sinResultados:"Sin actividades en este filtro",sinResultadosDesc:"Cambie el filtro para ver el resto del historial de la persona.",sinNinguna:"Sin actividades asignadas",sinNingunaDesc:"Esta persona no aparece en ninguna actividad del plan.",enCurso:"En curso",teletrabajo:"Teletrabajo",teletrabajoParcial:"Teletrabajo {n} de {total} días",rango:"{inicio} a {fin}",verEnDia:"Ver el día {fecha}",acompanantes:"Con {n} persona(s) más"},alertas:{titulo:"Alertas de la persona",sinAlertas:"Sin alertas para esta persona",sinAlertasDesc:"No hay vencimientos, incompatibilidades ni tiempo sin reponer a su nombre.",verTodas:"Ver todas las alertas"}},modalFuncionario:{editar:"Editar funcionario",agregar:"Agregar funcionario",sec:{identificacion:"Identificación",puesto:"Puesto y condición",jornada:"Jornada y modalidad",contratacion:"Contratación y fechas",atributos:"Atributos"},revisar:{titulo:"Antes de guardar, revise:",nota:"Son advertencias, no errores: puede guardar igual y completar el dato después."},pasos:{navAria:"Pasos del formulario",indicador:"Paso {n} de {total}",irA:"Ir al paso {n}: {titulo}",uno:"Quién es",dos:"Dónde y cómo trabaja",tres:"Respaldo y atributos",soloNombre:"Solo el nombre es obligatorio: puede guardar desde cualquier paso y completar el resto después."},ayuda:{puesto:"«Cargo institucional» es el puesto nominal; «Puesto operativo» es el sitio donde trabaja, y de él depende la cobertura diaria de atención de visitantes. La condición ONG-Invest-Volunt es personal de apoyo externo con régimen especial: no requiere resolución de jornada acumulativa y puede tener convenio en lugar de contrato.",jornada:"Ordinaria es horario administrativo de lunes a viernes. Acumulativa trabaja por ciclos y requiere número de resolución, salvo en personal ONG-Invest-Volunt. La modalidad NxM indica N días de trabajo por M días libres: 10x5 son 10 días de turno seguidos de 5 libres. Al editar una fila en Roles, la herramienta renumera los consecutivos T y L respetando esta modalidad.",contratacion:"La resolución es el número que respalda la jornada acumulativa; si falta, el funcionario queda marcado como «Sin resolución» y solo se registra el dato pendiente. El contrato y su vencimiento corresponden a la disponibilidad: la herramienta avisa cuando faltan 60 días o menos, el día del vencimiento y cuando ya venció.",atributos:"Disponibilidad es el contrato administrativo que habilita a llamar al funcionario fuera de su horario regular. Policía indica autoridad de policía y Brigada, pertenencia a la brigada forestal. Recuerde la regla dura: la herramienta registra y alerta, no genera pagos, reposiciones ni derechos automáticos."},nombre:"Nombre",cedula:"Cédula",correo:"Correo",cargo:"Cargo institucional",puesto:"Puesto operativo",condicion:"Condición",estado:"Estado",jornada:"Jornada",modalidad:"Modalidad",resolucion:"Resolución",contrato:"Contrato",vencimiento:"Vencimiento",ingreso:"Ingreso",obs:"Observaciones",attr:{disponibilidad:"Disponibilidad",policia:"Autoridad policía",brigada:"Brigada",ong:"ONG-Invest-Volunt"}},modalActividad:{titulo:"Actividad",editar:"Editar actividad",agregar:"Agregar actividad",sub:"Registre actividad, periodo, lugar, funcionarios participantes y necesidad de adelanto de viático.",fechaInicio:"Fecha inicio",fechaFinal:"Fecha final",unDia:"Actividad de un solo día",requiereViatico:"Requiere tramitar adelanto de viático",lugar:"Lugar",placeholderTitulo:"O escriba otra actividad: patrullaje, inspección, reunión, mantenimiento...",placeholderLugar:"Escriba otro lugar: sector, sendero, oficina, comunidad...",placeholderObs:"Detalle operativo, coordinación, expediente, requerimientos, vehículo, equipo, etc.",otra:"Otra actividad",otro:"Otro",participantes:"Funcionarios participantes",seleccionados:"{n} seleccionados",avisoTraslape:"Funcionario con actividad ya planificada",agregarAunAsi:"Agregar de todos modos",modificarActividad:"Modificar actividad",obs:"Observaciones",guardarActividad:"Guardar actividad",diaLibre:"Día libre/vacaciones",saldoFavor:"Saldo a favor",saldoFavorMonto:"Saldo a favor: {saldo}",soloSaldo:"Solo con saldo a favor",libresAsignados:"Asignados en día libre/vacaciones",resolver:"Resolver"},asignacionLibre:{titulo:"Funcionario fuera de turno",sub:"{funcionario} figura como “{rol}” el {fecha}. ¿Cómo desea proceder?",modificarRol:"Modificar rol",modificarRolDesc:"Marcar ese día como turno (T) en el rol y agregarlo a la actividad.",reposicion:"Registrar reposición pendiente",reposicionDesc:"Deja el rol igual y registra el tiempo trabajado para reponérselo después.",reponer:"Reponer tiempo (saldo a favor: {saldo})",reponerDesc:"Usa este día libre para reponer su saldo pendiente. No se agrega a la actividad.",editarFecha:"Editar la fecha de la actividad",editarFechaDesc:"No lo agrega; vuelve al formulario para cambiar la fecha de la actividad."},roles:{col:{puesto:"Puesto operativo",funcionario:"Funcionario",diasTrabajo:"Días de trabajo",sinMarcar:"Días sin marcar"},exportar:"Exportar CSV",exportarAria:"Exportar a CSV el rol del mes que se está viendo",exportarResumen:"Exportar resumen",exportarResumenAria:"Exportar a CSV el resumen de días por categoría",exportado:"Se exportaron {n} funcionario(s)",exportadoVacio:"No hay funcionarios que exportar con los filtros actuales",exportarError:"No se pudo generar el archivo",verFicha:"Ver ficha",titulo:"Distribución de roles",vistaMensualLineal:"Vista mensual lineal",filtros:"Filtros",verTodos:"Ver todos",limpiarFiltros:"Limpiar",todos:"Todos",filtrarPorPuesto:"Filtrar por puesto",filtrosFuncionario:"Filtrar por funcionario",resumenPuestosTodos:"Puestos y funcionarios: todos ({n})",resumenPuestosParcial:"Puestos y funcionarios: {n} de {total}",buscarFuncionario:"Buscar funcionario…",limpiarBusqueda:"Limpiar búsqueda",solo:"Solo",contraerPuesto:"Contraer lista de funcionarios",expandirPuesto:"Expandir lista de funcionarios",sinResultadosBusqueda:"Sin coincidencias con la búsqueda.",resumenFiltro:"{n} funcionarios visibles",desplazarDias:"Desplazar días",semanaAnterior:"Semana anterior",semanaSiguiente:"Semana siguiente",semana7:"7 días",centrarHoy:"Centrar hoy",irAFecha:"Ir a fecha",irAFechaLabel:"Buscar por fecha",todosLosPuestos:"Todos los puestos",sinFuncionariosFiltro:"No hay funcionarios visibles con el filtro actual.",leyenda:{turno:"T1 Turno",libre:"L1 Libre",vacaciones:"V1 Vacas",incapacidad:"I1 Incapaci",otro:"O1 Otro",teletrabajo:"E1 Teletrab"},cantidadEnTurno:"EN TURNO",resumenGeneral:"Resumen · todos los puestos",resumenCorto:"Resumen",resumenEnTurno:"En turno",resumenLibres:"Libres",resumenVacaciones:"Vacaciones",resumenIncapacidad:"Incapacidad",resumenOtros:"Otros",editarTipoRol:"Tipo de rol desde 1er día laboral",aplicar:"Aplicar",aplicarPatronAbrir:"Aplicar…",titleConflicto:"Clic para resolver: rol vs actividad planificada",conflictoAria:"en conflicto",cuadriculaAria:"Rol por funcionario y día. Use las flechas para moverse entre celdas.",titleEditar:"Cambiar marca del día",titleSinEdicion:"Active edición del funcionario para modificar",initRing:"INICIO",multi:{activar:"Selección múltiple",seleccionados:"{n} día(s) seleccionado(s)",confirmarTitulo:"Aplicar código a varios días",confirmarDesc:"Se aplicará {cat} a {n} selección(es) y se renumerarán las filas afectadas.",nota:"Revise la cantidad antes de confirmar. Puede deshacer el último cambio mientras permanezca en esta vista.",deshacer:"Deshacer último cambio"},aplicarPatron:{titulo:"Aplicar patrón de rol",descripcion:"Genera el tipo de día (turno/libre) de {persona} según la modalidad, desde una fecha inicial hasta un último día. El rango puede abarcar varios meses.",modalidad:"Modalidad",desde:"A partir de",hasta:"Último día",hastaAyuda:"Se llenará hasta esta fecha, inclusive.",botonUltimoProgramado:"Desde el último día con rol programado",botonUltimoProgramadoAyuda:"Coloca «A partir de» el día siguiente al último día ya programado, para continuar sin sobrescribir.",sinProgramado:"Aún no hay días con rol programado para esta persona.",fase:"¿Cómo debe empezar la rotación?",faseReiniciar:"Reiniciar en T1",faseReiniciarAyuda:"La fecha «A partir de» se vuelve el nuevo inicio: ese día es T1 y la rotación avanza desde ahí. Sobrescribe lo que haya en el rango.",faseContinuar:"Continuar la rotación anterior",faseContinuarAyuda:"No reinicia: sigue la rotación del día anterior. Si venía en {codigoPrevio}, ese día continúa en {codigoSiguiente}.",faseContinuarSinAncla:"Para continuar, el día anterior a «A partir de» debe tener un turno o libre. Hoy no lo tiene; use «Reiniciar en T1».",faseAdministrativo:"El horario administrativo se llena por día de la semana (L–V en turno, S/D libres); no usa rotación T/L.",resumen:"Se llenarán {dias} día(s), del {desde} al {hasta}.",sobrescribe:"Se sobrescribirán {n} día(s) que ya tenían rol programado en el rango.",errorRango:"«A partir de» debe ser igual o anterior a «Último día».",errorMaxDias:"El rango es muy largo (máx. {max} días). Acórtelo e intente de nuevo.",errorSinFechas:"Elija la fecha inicial y el último día.",confirmar:"Aplicar patrón",cancelar:"Cancelar"}},menuCelda:{titulo:"Editar día {dia} · {persona}",sub:"Seleccione únicamente la categoría. El número consecutivo se recalcula automáticamente en toda la fila.",primerDia:"Primer día laboral del mes.",primerDiaSub:"La modalidad del funcionario define el reinicio de los consecutivos de turno y libre.",cat:{T:"Turno",L:"Libre",V:"Vacaciones",I:"Incapacidad",O:"Otro",E:"Teletrabajo"},sub2:"Se mostrará como {cat}1, {cat}2...",limpiar:"Limpiar celda"},conflicto:{titulo1:"Resolver incoherencia · paso 1 de 2",titulo2:"Confirmar acción · paso 2 de 2",sub1:"Seleccione cuál registro corregir. La herramienta solo actualiza el dato visible: no genera pagos ni decisiones administrativas.",sub2Rol:"Se modificará el rol de este día y se recalcularán los consecutivos T/L/V/I/O de toda la fila respetando la modalidad.",sub2Act:"Se abrirá el listado de {n} actividad{plural} de este día para que pueda quitar al funcionario o ajustar la planificación.",detalle:"{persona} · día {dia}",detalleSub:"Rol {valor} (no en turno) con {n} actividad{plural} planificada{plural}.",cambiarRol:"Modificar rol del día",cambiarRolSub:"Cambiar la categoría de turno para este funcionario.",cambiarActividad:"Modificar actividad{plural}",cambiarActividadSub:"Ver, editar o quitar al funcionario de las actividades del día.",cambiarReposicion:"Registrar reposición pendiente",cambiarReposicionSub:"Deja el rol y la actividad igual; registra el tiempo trabajado para reponérselo después.",reponer:"Reponer tiempo (saldo a favor: {saldo})",reponerSub:"Usa este día para reponer el saldo pendiente del funcionario.",sub2Reposicion:"Se registrará el tiempo trabajado fuera de rol como reposición pendiente; no modifica el rol ni la actividad.",sub2Reponer:"Se aplicará este día al saldo pendiente del funcionario (reposición); no modifica el rol ni la actividad.",despuesReposicion:"queda un registro de reposición pendiente, enlazado por folio al día trabajado.",despuesReponer:"se descuenta del saldo a favor del funcionario.",resumen:"Resumen del impacto",antes:"Antes:",despues:"Después:",antesValor:"rol {valor} · {n} actividad{plural}.",despuesRol:"elegirá una nueva categoría (T/L/V/I/O) y se renumerará toda la fila.",despuesAct:"podrá quitar al funcionario o editar/eliminar la actividad.",notaNoEjecuta:"La herramienta solo registra; no genera pago, reposición ni derecho automático.",volver:"Volver",continuar:"Continuar"},actividadesDia:{titulo:"Actividades · {funcionario}",sub:"{fecha} · {n} actividad{plural} planificada{plural}",vacia:"Ya no hay actividades de {funcionario} en este día.",quitarDe:"Quitar a {nombre}",editar:"Editar actividad",eliminar:"Eliminar"},modificarRol:{titulo:"Modificar rol",sub:"{funcionario} · {fecha} · rol actual: {rol}",cat:{T:"Turno",L:"Libre",V:"Vacaciones",I:"Incapacidad",O:"Otro",E:"Teletrabajo"},catSub:"Recalcula consecutivos de la fila",limpiar:"Limpiar rol del día"},asignarActividad:{titulo:"Asignar actividad",sub:"{funcionario} · {fecha}",crear:"Crear actividad nueva para este funcionario",agregar:"Agregar a actividad existente del mismo día",sinExistentes:"No hay actividades existentes ese día para otros funcionarios."},planificacion:{col:{titulo:"Actividad",categoria:"Categoría",inicio:"Inicio",fin:"Fin",horaInicio:"Hora de inicio",horaFin:"Hora de fin",lugar:"Lugar",funcionarios:"Funcionarios",otros:"Otros participantes",viatico:"Viático",observaciones:"Observaciones"},exportar:"Exportar CSV",exportarAria:"Exportar a CSV las actividades que se están viendo",exportado:"Se exportaron {n} actividad(es)",exportadoVacio:"No hay actividades que exportar con los filtros actuales",exportarError:"No se pudo generar el archivo",titulo:"Planificación general — {mes} {anio}",agregar:"+ Agregar actividad",vistaAgenda:"Agenda",vistaCuadricula:"Cuadrícula",vistaAria:"Modo de vista del calendario",agendaVacia:"Sin actividades",agregarEnDia:"Agregar actividad el día {dia}",verLeyenda:"Ver leyenda de colores",buscarPlaceholder:"Buscar actividad, lugar o persona",buscarAria:"Buscar en planificación",filtros:"Filtros",rangoAria:"Rango de días visible",rangoHoy:"Hoy",rangoProximos7:"Próximos 7 días",rangoActividades:"Con actividades",rangoConflictos:"Con conflictos",rangoSinAsignar:"Sin asignar",rangoMes:"Mes completo",irHoy:"Ir a Hoy",sinCoincidencias:"No hay días que coincidan con estos filtros.",editarActividad:"Editar actividad",filtrosTitulo:"Filtros de planificación",filtrosDesc:"Combina filtros para reducir la agenda.",filtroPersona:"Persona",filtroTodas:"Todas",filtroUbicacion:"Ubicación",filtroViatico:"Viático",viaticoTodos:"Todos",viaticoSi:"Con viático",viaticoNo:"Sin viático",limpiar:"Limpiar",verResultados:"Ver resultados",leyendaProgramada:"Actividad programada",leyendaViatico:"Requiere adelanto de viático",leyendaFinde:"Fin de semana",leyendaTurno:"👥 = en turno",sinFuncionarios:"Sin funcionarios",masFuncionarios:"+{n}",titleDetalleDia:"Ver detalle del día",titleTurno:"{n} funcionarios en turno",titleActs:"{n} actividades",actsBadge:"{n} act.",viaticoTag:"VIÁTICO",rolBadge:"⚠ ROL: {nombres}"},planFuncionario:{titulo:"Planificación/Funcionario — {mes} {anio}",expandir:"Expandir",colapsar:"Colapsar",leyendaTurnoAct:"Turno con actividad",leyendaFaltaAct:"Falta asignar actividad",leyendaConflicto:"Actividad no coincide con rol",diasVisibles:"{n} días visibles",actividades:"{n} actividades",sinAsignar:"{n} sin asignar",conflictos:"{n} conflictos",ocultar:"Ocultar",ver:"Ver",faltaAsignar:"Falta asignar actividad",sinLugar:"Sin lugar",noCoincideRol:"NO COINCIDE CON ROL",modificarActividad:"Modificar actividad",modificarRol:"Modificar rol",asignar:"Asignar",nueva:"Nueva"},viaticos:{titulo:"Adelanto de viáticos — actividades de {nombreMes}",porFuncionario:"Por funcionario",porActividad:"Por actividad",plazoAbierto:"Plazo abierto.",plazoAbiertoSub:"Este listado corresponde al mes siguiente y puede usarse para tramitar adelantos hasta el día {dia} del mes anterior.",plazoCerrado:"Clausurado el tiempo de trámite de adelantos del próximo mes.",plazoCerradoSub:"El listado queda disponible para consulta, pero el plazo ordinario de trámite venció el día {dia} del mes anterior.",pie:"Mes a tramitar: {nombreMes}. Corte administrativo: día {dia} del mes {referencia}.",referenciaAnterior:"anterior",referenciaEnCurso:"en curso",sinActividadesTitulo:"Sin actividades con viático para el próximo mes",sinActividadesDesc:"Aún no hay actividades de {nombreMes} marcadas como “requiere tramitar adelanto de viático”. Vaya a Planificación general o Plan/Funcionario para asignarlas.",ocultoTitulo:"Listado oculto tras el cierre",ocultoDesc:"Según la configuración administrativa, el listado se oculta cuando el plazo (día {dia}) ya venció. Puede reactivar la consulta en Configuración → Viáticos.",nFuncionarios:"{n} funcionarios"},reposicion:{col:{folio:"Folio",funcionario:"Funcionario",fecha:"Fecha trabajada",tipoDia:"Tipo de día",motivo:"Motivo",detalle:"Detalle del motivo",trabajado:"Horas trabajadas",repuesto:"Horas repuestas",saldo:"Saldo (horas)",estado:"Estado",cuotas:"Reposiciones aplicadas",observaciones:"Observaciones"},exportar:"Exportar CSV",exportarAria:"Exportar a CSV los registros de reposición que se están viendo",exportado:"Se exportaron {n} registro(s)",exportadoVacio:"No hay registros que exportar con los filtros actuales",exportarError:"No se pudo generar el archivo",titulo:"Reposición de tiempo trabajado",subtitulo:"Registro de jornadas que la administración requirió trabajar a un funcionario en día libre, fuera de turno, feriado o similar (emergencias, incendios, atención de denuncias, actividades especiales, etc.) para llevar el control y reponerle el tiempo. Puede ser por horas, medio día o día entero.",acercaDe:"Acerca de esta herramienta",controlInterno:"Control interno",agregar:"Registrar tiempo",agregarCorto:"Registrar",filtroTodos:"Todos",filtroPendientes:"Pendientes",filtroRepuestos:"Repuestos",horasN:"{n} h",tabsAria:"Vistas de reposición",tabRegistros:"Registros",tabHistorial:"Historial por funcionario",reponer:"Reponer",saldoCorto:"Saldo pendiente",ultimaReposicion:"Última reposición",masAcciones:"Más acciones del registro",buscar:"Buscar por funcionario, folio, motivo u observación",filtros:"Filtros",filtrosAvanzados:"Filtros de reposición",limpiarFiltros:"Limpiar filtros",todosFuncionarios:"Todos los funcionarios",todosTipos:"Todos los tipos",periodo:"Periodo",soloObservaciones:"Solo registros con observaciones",saldoLabel:"Saldo: {saldo}",estado:{Pendiente:"Pendiente",Parcial:"Parcial",Repuesto:"Repuesto"},resumen:{total:"Registros",pendientes:"Pendientes de reponer",repuestos:"Repuestos",saldo:"Saldo a favor: {saldo}",parciales:"{n} parcial(es)",desglose:"{dias} día(s) · {medios} medio(s) día(s) · {horas} h"},th:{folio:"Folio",funcionario:"Funcionario",fecha:"Fecha trabajada",tipoDia:"Tipo de día",motivo:"Motivo",tiempo:"Tiempo",estado:"Estado",acciones:"Acciones"},magnitudCorta:{diaEntero:"día completo",medioDia:"medio día"},marca:{trabajadaTitulo:"{folio} · Trabajó día {tipoDia} ({magnitud}) · {estado}",reposicionTitulo:"{folio} · Día de reposición del tiempo trabajado el {fecha}",reposicionDe:"reposición del {fecha}"},historial:{vacioTitulo:"Sin historial",vacioDesc:"Aún no hay registros de reposición para mostrar por funcionario.",veces:"{n} registro(s)",pendientesN:"{n} pendiente(s)",repuestosN:"{n} repuesto(s)",saldoFavor:"Saldo a favor: {saldo}",cuota:"Reposición aplicada: {fecha} · {cantidad}"},marcarRepuesto:"Marcar repuesto",reabrir:"Reabrir",repuestoEl:"Repuesto el {fecha}",sinRegistrosTitulo:"Sin registros de reposición",sinRegistrosDesc:"Use “Registrar tiempo” para anotar una jornada trabajada en día libre, feriado o fuera de turno que deba reponerse al funcionario.",sinResultadosTitulo:"Sin resultados",sinResultadosDesc:"Ajuste el filtro para ver los registros de reposición.",nota:"La herramienta solo registra y lleva el control; la reposición efectiva del tiempo la autoriza la administración según la normativa vigente.",eliminado:"Se eliminó el registro {folio}",restaurado:"Se restauró el registro {folio}"},modalReposicion:{editar:"Editar registro de reposición",agregar:"Registrar tiempo a reponer",sub:"Documente la jornada trabajada por requerimiento de la administración para llevar el control y reponer el tiempo.",funcionario:"Funcionario",seleccioneFuncionario:"Seleccione un funcionario…",otrosFuncionarios:"Otros",fecha:"Fecha trabajada",tipoDia:"Tipo de día",motivo:"Motivo",motivoDetalle:"Detalle del motivo",motivoDetallePlaceholder:"Expediente, sector, descripción breve de la situación…",magnitud:"Tiempo trabajado",magnitudDiaEntero:"Día entero",magnitudMedioDia:"Medio día",magnitudHoras:"Por horas",estadoPendiente:"Pendiente",estadoRepuesto:"Repuesto",reposiciones:"Reposiciones registradas",sinCuotas:"Sin reposiciones registradas. Use “Reponer” en la lista para registrar tiempo (total, medio día u horas).",cuotasNota:"Las reposiciones se registran desde la acción “Reponer” de cada registro; aquí solo se consultan o se corrigen.",obs:"Observaciones",obsPlaceholder:"Coordinación con la administración, acuerdos, equipo, vehículo, etc.",guardar:"Guardar registro"},reponer:{titulo:"Reponer tiempo",saldoActual:"Saldo actual",saldoDespues:"Saldo después",cuanto:"¿Cuánto se repone?",fecha:"Fecha de reposición",excede:"La cantidad supera el saldo pendiente; se registrará hasta saldar el tiempo.",registrar:"Registrar reposición"},disponibilidad:{activosTitulo:"Contratos activos — disponibilidad",sinActivosTitulo:"Sin disponibilidad asignada",sinContrato:"Sin contrato",nDias:"{n} días",controlNota:"Control: la herramienta alerta; no ejecuta suspensiones automáticamente."},alertas:{requiereAtencion:"Requiere atención · {n}",sinCriticas:"Sin alertas críticas",sinCriticasSub:"No se observan vencimientos o bloqueos críticos en los datos visibles.",titulo:"Alertas del sistema ({n})",requiereRevision:"Requiere revisión",semaforoTitulo:"Semáforo normativo",semaforo:{verde:"Verificado",amarillo:"Confirmación interna",naranja:"Criterio RH/Jurídico",rojo:"No automatizar",azul:"Dato pendiente"},venceHoy:"Disponibilidad vence HOY — {nombre}",vencida:"Disponibilidad vencida — {nombre}",porVencer:"Disponibilidad por vencer — {nombre}",sinResolucion:"Sin resolución acumulativa — {nombre}",sinModalidad:"Acumulativa sin modalidad definida — {nombre}",incapaConDisp:"Revisar disponibilidad — {nombre}",incapaConActividad:"Incapacitado con actividad planificada — {nombre}",inactivoConActividad:"Inactivo con actividad planificada — {nombre}",reposicionPendiente:"Tiempo por reponer — {nombre}"},datos:{titulo:"Datos · respaldo local",esquema:"Esquema v{n}",estadoOk:"Última copia local guardada el {fecha}",estadoPendiente:"{n} cambio{plural} pendiente{plural} de guardar (debounce 500 ms)",estadoVacio:"Sin copia local todavía: los cambios se guardarán automáticamente al editar.",estadoNota:"La copia vive en el navegador (localStorage). Sirve como respaldo entre sesiones; no sustituye al backend institucional.",funcionarios:"Funcionarios",actividadesPlanificadas:"Actividades planificadas",reposiciones:"Reposiciones de tiempo",celdasOverride:"Celdas de rol con override",exportar:"Exportar JSON",importar:"Importar JSON…",reiniciar:"Reiniciar datos semilla",archivoAria:"Archivo JSON a importar",importadoTitulo:"Snapshot importado",importadoDesc:"Archivo: {archivo}{exportadoEn}",importadoExtra:" · exportado {fecha}",importRechazado:"Importación rechazada",reiniciarTitulo:"Reiniciar a datos semilla",reiniciarSub:"Se descartará la copia local y la app volverá a los datos de ejemplo. Esta acción no se puede deshacer a menos que hayas exportado primero un JSON de respaldo.",reiniciarRec:"Recomendación: pulse Exportar JSON antes de reiniciar.",noDeshacer:"Esta acción no se puede deshacer. Pulse «{accion}» para confirmar.",confirmarReiniciar:"Reiniciar",porQueTitulo:"¿Por qué hay copia local?",porQue:["El navegador guarda automáticamente cada cambio con un retraso de 500 ms para evitar perder información al recargar la página o cerrar el navegador.","La copia permanece en este dispositivo y NO sustituye un backend institucional. Exporte respaldos periódicos para trasladar o proteger la información.","El esquema lleva versión (`v{n}`); si el formato cambia en una nueva versión de la app, se crea un backup automático antes de aplicar la migración.","Exporte un JSON periódicamente como seguro adicional, especialmente antes de cambios mayores o cuando termine la jornada en campo."],backendTitulo:"Almacenamiento durable",backendIDB:"IndexedDB (Dexie) · capacidad amplia, almacenamiento asíncrono",backendLS:"localStorage · respaldo síncrono (~5 MB)",backendNone:"Sin almacenamiento (modo privado estricto)",backendBadgeIDB:"IndexedDB ✓",backendBadgeLS:"localStorage",backendBadgeNone:"Sin durable",migradoLS:"Sus datos previos en localStorage se migraron a IndexedDB automáticamente.",pendientesTitulo:"Estado local",pendientesSub:"No existe sincronización con un servidor remoto.",pendientesCero:"Datos guardados únicamente en este dispositivo.",pendientesN:"{n} cambios locales pendientes de guardar.",descargaFallo:"El navegador no permitió descargar el archivo. Revise si tiene bloqueadas las descargas de este sitio e inténtelo otra vez.",respaldoDescargado:"Se descargó {archivo}.",respaldoPrevioFallo:"NO se restauró nada: el navegador no permitió descargar la copia preventiva, y restaurar sin ella dejaría los datos actuales sin salvaguarda.",baseDatos:{titulo:"Exportar a base de datos",sub:"El respaldo de arriba guarda el estado tal como lo usa esta herramienta y sirve para volver a cargarlo aquí. Esto es lo otro: el mismo contenido descompuesto en tablas con clave primaria, para que otro sistema pueda consultarlo.",comoUsar:"El archivo SQL se ejecuta tal cual: «sqlite3 jornadas.db < archivo.sql» o «psql -d jornadas -f archivo.sql». El JSON lleva dentro la definición del esquema, así que se puede leer desde cualquier lenguaje sin conocer esta aplicación.",json:"JSON relacional",sqlite:"SQL · SQLite",postgres:"SQL · PostgreSQL",thTabla:"Tabla",thFilas:"Filas",total:"{n} filas en {t} tablas",generando:"Preparando el archivo…",listo:"Se descargó {archivo}.",vacio:"No hay nada que exportar todavía."},respaldosAuto:{titulo:"Respaldos automáticos",sub:"Copias que la aplicación aparta sola, sin pedir nada, cuando cambia el formato con el que guarda los datos. Se conservan las {max} más recientes y NO se borran al reiniciar a los datos de ejemplo.",vacio:"No hay ninguno. Es lo normal: el formato de los datos no ha cambiado en este aparato.",cargando:"Buscando respaldos automáticos…",creado:"Apartado el {fecha}",original:"Contenido del {fecha}",esquema:"esquema v{n}",esquemaDesconocido:"esquema sin identificar",sinFecha:"fecha no registrada",peso:"{kb} KB",descargar:"Descargar",eliminar:"Eliminar",eliminado:"Respaldo automático eliminado.",noDisponible:"No fue posible leer ese respaldo.",motivo:{cambioDeEsquema:"Cambió la base de datos del navegador",esquemaIncompatible:"El formato guardado era de otra versión",localStorage:"Rescatado de una copia suelta del navegador"},aviso:"Un respaldo apartado con OTRO esquema no se puede restaurar en esta versión: al intentarlo se rechazará por incompatible. Descárguelo y guárdelo fuera del aparato."}},configuracion:{aparienciaTitulo:"Apariencia",aparienciaSub:"El tema (claro / oscuro / alto contraste) se aplica a toda la aplicación.",titulo:"Configuración · reglas administrativas",cambiosPendientes:"Cambios pendientes",badgeSucia:"Cambios sin aplicar",badgeOk:"Guardado localmente",reglaDuraIntro:"Regla dura: la herramienta registra y alerta; cambiar una regla no genera pagos, suspensiones ni derechos automáticos. Cualquier ajuste debe estar respaldado por la coordinación administrativa.",coberturaTitulo:"Cobertura · puestos con atención rutinaria diaria",coberturaSub:'Si un día un puesto seleccionado no tiene a nadie asignado a "Atención rutinaria de visitantes", se marca como cobertura crítica (rojo) en la vista Día.',viaticosTitulo:"Viáticos · corte administrativo",diaCorte:"Día de corte (1–28)",mesObjetivo:"Mes objetivo",permitirConsulta:"Permitir consulta tras cierre",permitirConsultaSub:'Si "Permitir consulta tras cierre" está desactivado, después del día de corte la vista de viáticos se oculta. Por defecto se mantiene visible (con banner rojo).',feriadosTitulo:"Feriados · cálculo del primer día laboral",feriadosCheckTitle:"Excluir feriados oficiales al determinar el primer día laboral del mes.",feriadosCheckSub:"Si el 1er día hábil L–V cae en feriado, la rotación T/L se inicia el siguiente día laboral real. Aplica a partir del mes siguiente para no alterar registros ya guardados.",feriadosVer:"Ver feriados cargados ({n} año{plural})",alertasTitulo:"Alertas adicionales (Fase 6)",alertaInactivo:"Persona inactiva con actividad futura",alertaIncapacitado:"Incapacitado con actividad futura",alertaSinModalidad:"Acumulativa sin modalidad",alertaReposicion:"Tiempo trabajado pendiente de reponer",alertasNota:"Cada checkbox controla si se evalúa esa familia de alertas. Si se detectan falsos positivos, puede desactivarse temporalmente sin tocar código.",reposicionTitulo:"Reposición · duración de jornada",horasJornada:"Horas por jornada",horasJornadaSub:"Define cuántas horas equivalen a un día completo (medio día = la mitad). Se usa para calcular el saldo de reposición cuando se repone en partes.",advertenciasTitulo:"Advertencias antes de aplicar:",restaurarPredet:"Restaurar valores predeterminados",restaurarConfirm:"¿Restaurar todas las reglas a sus valores predeterminados? Las alertas y cobertura volverán al estado inicial.",descartar:"Descartar",aplicar:"Aplicar cambios…",confirmarAplicar:"Confirmar y aplicar"},acciones:{aceptar:"Aceptar",cancelar:"Cancelar",cerrar:"Cerrar",guardar:"Guardar",eliminar:"Eliminar",agregar:"Agregar",editar:"Editar",confirmar:"Confirmar",restaurar:"Restaurar",exportar:"Exportar JSON",importar:"Importar JSON…",reiniciar:"Reiniciar datos semilla",aplicarCambios:"Aplicar cambios…",actualizarAhora:"Actualizar ahora",verLuego:"Ver luego",instalar:"Instalar",ahoraNo:"Ahora no",deshacer:"Deshacer",atras:"Atrás",siguiente:"Siguiente"},toast:{regionAria:"Avisos de la aplicación",puedeDeshacer:"Puede deshacerlo mientras este aviso siga visible."},puestos:{titulo:"Puestos operativos",sub:"Los centros operativos del parque. De aquí salen las opciones de las fichas, el agrupado de la vista Roles y la cobertura diaria de visitantes.",agregar:"Agregar puesto",editar:"Editar puesto",nombre:"Nombre del puesto",tag:"Código corto",tagAyuda:"Dos o tres letras. Es lo que se ve en la cuadrícula de Roles.",color:"Color en Roles",colorAria:"Elegir color del puesto",visitDiario:"Requiere atención de visitantes a diario",visitDiarioSub:"Si un día no hay nadie asignado a esa actividad en este puesto, la vista Día lo marca en rojo.",personas:"{n} funcionario(s)",sinPersonas:"Sin funcionarios",eliminar:"Eliminar puesto",eliminarConPersonas:"No se puede eliminar «{nombre}»: tiene {n} funcionario(s) asignado(s). Muévalos a otro puesto primero.",eliminarConfirma:"Se eliminará «{nombre}». No tiene funcionarios asignados, así que ninguna ficha queda huérfana.",eliminado:"Se eliminó el puesto «{nombre}»",restaurado:"Se restauró el puesto «{nombre}»",creado:"Se agregó el puesto «{nombre}»",guardado:"Se guardaron los cambios de «{nombre}»",renombrado:"«{antes}» pasa a llamarse «{despues}». Se actualizaron {n} ficha(s).",ultimoPuesto:"Debe quedar al menos un puesto operativo.",subir:"Subir «{nombre}»",bajar:"Bajar «{nombre}»",ordenSub:"El orden se refleja en la cuadrícula de Roles, en los desplegables de las fichas y en el resumen de la vista Día.",exportar:"Exportar CSV",exportarAria:"Exportar los puestos operativos a CSV",exportado:"Se exportaron {n} puestos a CSV",exportarError:"El navegador no permitió la descarga",importar:"Importar CSV",importarAria:"Importar puestos operativos desde un archivo CSV",col:{nombre:"Nombre del puesto",tag:"Código corto",color:"Color en Roles"},importa:{titulo:"Revisar antes de importar puestos",sub:"Nada se ha guardado todavía. Así quedaría la lista:",altas:"Se agregan",cambios:"Se actualizan",intactos:"No se tocan",noElimina:"La importación nunca elimina un puesto: si uno desapareciera, las fichas que lo usan quedarían apuntando a algo inexistente.",omitidasSinNombre:"Filas sin nombre, omitidas: {n}",omitidasSinCodigo:"Puestos nuevos omitidos por no traer código corto: {cols}. El código es obligatorio, igual que en el formulario.",renombresIgnorados:"Se conserva el nombre actual de estos puestos: {cols}. Cambiar el nombre desde un archivo dejaría las fichas de los funcionarios apuntando a un puesto que ya no existe; hágalo desde el botón de editar, que sí arrastra las fichas y las reglas.",omitidasCodigo:"Filas omitidas porque su código ya lo usa otro puesto: {cols}",vacias:"Filas en blanco ignoradas: {n}",duplicadas:"Nombres repetidos dentro del archivo: {n}. Manda la última fila de cada uno.",faltantes:"Columnas que no venían en el archivo: {cols}. Esos datos se conservan como estaban.",desconocidas:"Columnas del archivo que se ignoran: {cols}",respaldo:"Antes de aplicar se descargará un respaldo completo. Si algo sale mal, se restaura desde «Datos · respaldo».",confirmar:"Crear respaldo e importar",sinNombre:"El archivo no trae la columna «Nombre del puesto», así que no hay forma de saber a qué puesto corresponde cada fila.",sinFilas:"El archivo no tiene ninguna fila de datos.",demasiadoGrande:"El archivo supera los {mb} MB y no se procesó.",errorLectura:"No se pudo leer el archivo.",hecho:"Puestos importados: {altas} nuevos y {cambios} actualizados",respaldoFallo:"No se pudo descargar el respaldo, así que no se importó nada."}},historial:{titulo:"Historial de cambios",sub:"Últimos {n} movimientos sobre las fichas de funcionario. Se conservan los {max} más recientes.",vacio:"Todavía no hay cambios registrados.",filtro:"Filtrar por funcionario",todos:"Todos",sinResultados:"Sin movimientos de esta persona.",verMas:"Ver {n} más",tipo:{alta:"Alta",edicion:"Edición",baja:"Baja",restauracion:"Restauración",importacion:"Importación"},cambio:"{campo}: {antes} → {despues}",vacioCampo:"(vacío)",si:"Sí",no:"No",resumenImportacion:"{archivo} · {altas} altas, {cambios} actualizaciones",nota:"El historial viaja en el respaldo JSON, así que se conserva al exportar y restaurar."},ayuda:{mostrar:"¿Qué significa esto?",ocultar:"Ocultar ayuda"},actividad:{sinTitulo:"actividad sin título",eliminada:"Se eliminó «{titulo}»",restaurada:"Se restauró «{titulo}»",eliminadaDetalle:"Desaparece para todos los funcionarios asignados. Puede deshacerlo mientras este aviso siga visible."},estados:{activo:"Activo",inactivo:"Inactivo",vacaciones:"De vacaciones",incapacitado:"Incapacitado"},sync:{enLinea:"En línea",sinConexion:"Sin conexión",guardando:"Guardando…",guardado:"Guardado localmente {hora}",sinRespaldo:"Pendiente de primer guardado local",guardadoParcial:"Guardado temporal — respaldo durable falló ({hora})"},print:{imprimir:"Imprimir / Guardar PDF",imprimirCorto:"Imprimir",encabezadoMinisterio:"MINISTERIO DE AMBIENTE Y ENERGÍA",encabezadoSinac:"SISTEMA NACIONAL DE ÁREAS DE CONSERVACIÓN — SINAC",encabezadoAcc:"ÁREA DE CONSERVACIÓN CENTRAL · BLOQUE TAPANTÍ–MACIZO DE LA MUERTE",encabezadoUnidad:"Parque Nacional Los Quetzales (PNLQ)",documentoTitulo:"ROL MENSUAL DE TRABAJO",periodo:"Período: {mes} {anio}",puestoLabel:"Puesto operativo: {puesto}",leyendaTitulo:"Leyenda de códigos",leyendaT:"T = Turno",leyendaL:"L = Libre",leyendaV:"V = Vacaciones",leyendaI:"I = Incapacidad",leyendaO:"O = Otro",firma1:"Elaborado por",firma2:"Revisado por",firma3:"Aprobado por",firmaCargo1:"Administrador(a) de ASP",firmaCargo2:"Coordinación administrativa ACC",firmaCargo3:"Jefatura BTMM",lugarFecha:"Lugar y fecha: ____________________________________________",pieDocumento:"Documento generado por la herramienta PNLQ Gestión de Jornadas · v{version}",pieFecha:"Impreso: {fecha}",pieReglaDura:"La herramienta solo registra y alerta; no genera derechos automáticos. Firmas validan el documento."},pwa:{instalarTitulo:"Instalar PNLQ en este dispositivo",instalarSub:"Acceso sin internet · Pantalla completa · Sin navegador",instalarAria:"Instalar aplicación PNLQ",sinConexion:"Sin conexión — mostrando datos en caché",ultimaCarga:"Última carga local: {fecha}",nuevaVersion:"Nueva versión disponible",versionDesactualizada:"Versión desactualizada",versionActual:"Versión actual: v{actual}",versionDisponible:" · disponible: v{remoto}",urgente:" Actualice para evitar inconsistencias.",sugerido:" Actualice para ver los últimos cambios.",bannerAria:"Nueva versión de PNLQ disponible"}};function yd(r,i){return!r||!i||typeof r!="string"?r:r.replace(/\{(\w+)\}/g,(s,u)=>i[u]!==void 0?String(i[u]):s)}function QL(r){const i=String(r||"").split(".");let s=zL;for(const u of i)if(s&&Object.prototype.hasOwnProperty.call(s,u))s=s[u];else return r;return s===void 0?r:s}function Ie(r,i){const s=QL(r);return Array.isArray(s)?s.map(u=>yd(u,i)):yd(s,i)}function Md(r){return r===1?"":"s"}const nm=x.createContext(null),JL=5e3,BL=1e4,YL=3,GL=["info","exito","aviso","error"];let Ed=0;function UL(){return Ed+=1,`toast-${Ed}`}function KL({children:r}){const[i,s]=x.useState([]),u=x.useRef(new Map),d=x.useRef(!1),p=x.useCallback(D=>{s(V=>V.filter(Y=>Y.id!==D))},[]),v=x.useCallback((D,V)=>{if(!Number.isFinite(V)||V<=0)return;const Y=u.current.get(D);Y!=null&&Y.timeoutId&&clearTimeout(Y.timeoutId);const te={restanteMs:V,iniciadoEn:Date.now(),timeoutId:null};d.current||(te.timeoutId=setTimeout(()=>p(D),V)),u.current.set(D,te)},[p]),T=x.useCallback(D=>{const V=typeof D=="string"?{mensaje:D}:D||{},Y=typeof V.mensaje=="string"?V.mensaje.trim():"";if(!Y)return null;const te=GL.includes(V.tipo)?V.tipo:"info",Z=V.accion&&typeof V.accion.onAccion=="function"?{etiqueta:V.accion.etiqueta||Ie("acciones.deshacer"),onAccion:V.accion.onAccion,cerrarAlActivar:V.accion.cerrarAlActivar!==!1}:null,pe=V.duracion===void 0?Z?BL:JL:V.duracion,ie=UL();return s(ee=>{const Te=[...ee,{id:ie,mensaje:Y,detalle:V.detalle||"",tipo:te,accion:Z,duracion:pe}],le=Te.length-YL;return le>0?Te.slice(le):Te}),v(ie,pe),ie},[v]),f=x.useCallback(()=>{if(d.current)return;d.current=!0;const D=Date.now();for(const V of u.current.values())V.timeoutId&&(clearTimeout(V.timeoutId),V.restanteMs=Math.max(0,V.restanteMs-(D-V.iniciadoEn)),V.timeoutId=null)},[]),N=x.useCallback(()=>{if(!d.current)return;d.current=!1;const D=Date.now();for(const[V,Y]of u.current)Y.timeoutId||(Y.iniciadoEn=D,Y.timeoutId=setTimeout(()=>p(V),Math.max(0,Y.restanteMs)))},[p]),y=x.useCallback(D=>{const V=i.find(Y=>Y.id===D);V!=null&&V.accion&&(V.accion.onAccion(),V.accion.cerrarAlActivar&&p(D))},[i,p]),P=x.useCallback((D,V)=>T({...V,mensaje:D,tipo:"exito"}),[T]),C=x.useCallback((D,V)=>T({...V,mensaje:D,tipo:"error"}),[T]),w=x.useCallback((D,V)=>T({...V,mensaje:D,tipo:"aviso"}),[T]),j=x.useCallback((D,V,Y)=>T({...Y,mensaje:D,tipo:(Y==null?void 0:Y.tipo)||"info",accion:{etiqueta:Ie("acciones.deshacer"),onAccion:V}}),[T]);x.useEffect(()=>{const D=new Set(i.map(V=>V.id));for(const[V,Y]of u.current)D.has(V)||(Y.timeoutId&&clearTimeout(Y.timeoutId),u.current.delete(V))},[i]),x.useEffect(()=>{const D=u.current;return()=>{for(const V of D.values())V.timeoutId&&clearTimeout(V.timeoutId);D.clear()}},[]);const Q=x.useMemo(()=>({toasts:i,mostrar:T,cerrar:p,pausar:f,reanudar:N,activarAccion:y,exito:P,error:C,aviso:w,conDeshacer:j}),[i,T,p,f,N,y,P,C,w,j]);return c.jsx(nm.Provider,{value:Q,children:r})}function tm(){const r=x.useContext(nm);if(!r)throw new Error("useToast() requiere que el árbol esté envuelto en <ToastProvider>.");return r}const $L=new Date(2026,4,19);function qL(r,i={}){const{actividadesPlan:s=[],reposiciones:u=[],hoy:d=$L,flags:p={}}=i,{alertaInactivoConActividad:v=!0,alertaIncapacitadoConActividad:T=!0,alertaAcumulativaSinModalidad:f=!0,alertaReposicionPendiente:N=!0,horasJornada:y=8}=p,P=[],C=HL(d);if(r.forEach(w=>{if(w.disponibilidad){const j=wL(w.vencimiento,d);j!==null&&j<0?P.push({funcionario:w.nombre,t:"danger",icon:"🚨",msg:`Disponibilidad vencida — ${w.nombre}`,sub:`${w.contrato} · venció ${rt(w.vencimiento)} (hace ${Math.abs(j)} día${Math.abs(j)!==1?"s":""}). Requiere revisión administrativa.`}):j!==null&&j===0?P.push({funcionario:w.nombre,t:"danger",icon:"🚨",msg:`Disponibilidad vence HOY — ${w.nombre}`,sub:`${w.contrato} · vencimiento ${rt(w.vencimiento)}. Coordinar renovación o suspensión administrativa.`}):j!==null&&j>0&&j<=60&&P.push({funcionario:w.nombre,t:"warn",icon:"⚠️",msg:`Disponibilidad por vencer — ${w.nombre}`,sub:`${w.contrato} · vence ${rt(w.vencimiento)} (en ${j} día${j!==1?"s":""}). Requiere revisión administrativa.`})}if(w.jornada==="Acumulativa"&&!w.resolucion&&!w.ong&&P.push({funcionario:w.nombre,t:"warn",icon:"📄",msg:`Sin resolución acumulativa — ${w.nombre}`,sub:"Dato pendiente: no automatizar efectos hasta confirmar respaldo interno."}),f&&w.jornada==="Acumulativa"&&!w.modalidad&&P.push({funcionario:w.nombre,t:"warn",icon:"📄",msg:`Acumulativa sin modalidad definida — ${w.nombre}`,sub:"Definir modalidad (10x5, 12x6, 14x7, 16x8, 20x10) para calcular roles correctamente."}),w.estado==="Incapacitado"&&w.disponibilidad&&P.push({funcionario:w.nombre,t:"danger",icon:"🩺",msg:`Revisar disponibilidad — ${w.nombre}`,sub:"Funcionario incapacitado con disponibilidad activa. Verificar criterio RH."}),T&&w.estado==="Incapacitado"){const j=Nd(s,w.nombre,C);j.length&&P.push({funcionario:w.nombre,t:"danger",icon:"🩺",msg:`Incapacitado con actividad planificada — ${w.nombre}`,sub:`${j.length} actividad${j.length!==1?"es":""} a partir de ${rt(C)}. Coordinar reasignación.`})}if(v&&w.estado==="Inactivo"){const j=Nd(s,w.nombre,C);j.length&&P.push({funcionario:w.nombre,t:"warn",icon:"⚠️",msg:`Inactivo con actividad planificada — ${w.nombre}`,sub:`${j.length} actividad${j.length!==1?"es":""} a partir de ${rt(C)}. Verificar si debe reactivarse o reasignarse.`})}}),N&&u.length)for(const w of FT(u,y))w.pendientes!==0&&P.push({funcionario:w.funcionario,t:"warn",icon:"⟳",msg:`Tiempo por reponer — ${w.funcionario}`,sub:`${w.pendientes} registro${w.pendientes!==1?"s":""} de trabajo fuera de rol sin reponer · saldo a favor ${jT(w.saldoHoras,y)}. Coordinar la reposición del tiempo.`});return P.length?P:[{t:"ok",icon:"✅",msg:"Sin alertas críticas",sub:"No se observan vencimientos o bloqueos críticos en los datos visibles."}]}function kh(r=[],i){return i?r.filter(s=>(s==null?void 0:s.funcionario)===i):[]}function Nd(r,i,s){return(r||[]).filter(u=>!u||!u.inicio||(u.fin||u.inicio)<s?!1:(u.funcionarios||[]).includes(i))}function HL(r){if(typeof r=="string")return r;const i=s=>String(s).padStart(2,"0");return`${r.getFullYear()}-${i(r.getMonth()+1)}-${i(r.getDate())}`}function wn(){return x.useCallback((r,i)=>Ie(r,i),[])}const mr="1.39.1",_i="2026-09-13T00:49:36.838Z",Ii="a83570e",WL="/BTMM_JORNADAS/version.json";function am(r=_i){try{const i=new Date(r),s=u=>String(u).padStart(2,"0");return`${s(i.getDate())}/${s(i.getMonth()+1)}/${i.getFullYear()} ${s(i.getHours())}:${s(i.getMinutes())}`}catch{return r}}/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZL=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rm=(...r)=>r.filter((i,s,u)=>!!i&&i.trim()!==""&&u.indexOf(i)===s).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var XL={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=x.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:u,className:d="",children:p,iconNode:v,...T},f)=>x.createElement("svg",{ref:f,...XL,width:i,height:i,stroke:r,strokeWidth:u?Number(s)*24/Number(i):s,className:rm("lucide",d),...T},[...v.map(([N,y])=>x.createElement(N,y)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=(r,i)=>{const s=x.forwardRef(({className:u,...d},p)=>x.createElement(e1,{ref:p,iconNode:i,className:rm(`lucide-${ZL(r)}`,u),...d}));return s.displayName=`${r}`,s};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=de("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=de("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=de("CalendarClock",[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M17.5 17.5 16 16.3V14",key:"akvzfd"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=de("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=de("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=de("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=de("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=de("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=de("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=de("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=de("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=de("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=de("Contrast",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z",key:"j4l70d"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=de("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=de("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=de("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=de("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=de("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=de("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=de("LockOpen",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=de("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=de("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=de("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=de("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=de("OctagonAlert",[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=de("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=de("Pin",[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=de("PlugZap",[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m18 3-4 4h6l-4 4",key:"16psg9"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=de("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=de("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=de("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=de("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=de("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=de("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=de("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=de("Stethoscope",[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=de("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=de("TrafficCone",[["path",{d:"M9.3 6.2a4.55 4.55 0 0 0 5.4 0",key:"flyxqv"}],["path",{d:"M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3",key:"1nlxxg"}],["path",{d:"M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z",key:"vz7x1l"}],["path",{d:"m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8",key:"1xfzlw"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=de("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=de("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=de("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=de("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=de("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=de("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=de("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),T1={"🏠":hm,"👥":jm,"📅":lm,"📊":cm,"🗓️":sm,"📋":Tm,"💵":im,"🛡️":bm,"🔔":om,"✕":km,"⚠️":nl,"⚠":nl,"🚨":Em,"✅":fm,"🩺":Vm,"📄":Lm,"📍":ym,"🔥":vm,"🌲":wm,"⚖️":xm,"⟳":Sm,"☰":Mm,"▲":pm,"▼":um,"←":dm,"→":mm,"+":Cm,"🔒":Pm,"🔓":gm,"📴":Dm,"📡":Nm,"🚦":Am},L1={home:hm,users:jm,calendar:lm,calendarDays:sm,calendarClock:n1,clipboard:Tm,chart:cm,banknote:im,shield:bm,shieldAlert:u1,bell:om,x:km,alert:nl,danger:Em,check:fm,info:i1,stethoscope:Vm,file:Lm,pin:ym,flame:vm,trees:wm,scale:xm,refresh:Sm,menu:Mm,chevronUp:pm,chevronDown:um,chevronLeft:dm,chevronRight:mm,plus:Cm,pencil:s1,trash:p1,lock:Pm,unlock:gm,eye:r1,eyeOff:a1,sun:m1,moon:o1,contrast:t1,traffic:Am,wifi:f1,wifiOff:Dm,phone:d1,search:c1,pinMap:l1,plugZap:Nm};function We({name:r,size:i=18,label:s,className:u="",strokeWidth:d=2}){const p=typeof r=="string"?T1[r]??L1[r]:null;if(!p)return c.jsx("span",{"aria-hidden":s?void 0:!0,"aria-label":s,className:u,children:r});const v=s?{role:"img","aria-label":s}:{"aria-hidden":!0,focusable:"false"};return c.jsx(p,{width:i,height:i,strokeWidth:d,className:u,...v})}function v1({view:r,setView:i,nAlertas:s}){const u=wn(),d=[[u("sidebar.grupoPrincipal"),[["dia",u("view.dia"),"calendar"],["roles",u("view.roles"),"chart"],["planificacion",u("view.planificacion"),"calendarDays"],["funcionarios",u("view.funcionarios"),"users"]]],[u("sidebar.grupoJornadas"),[["planFuncionario",u("view.planFuncionario"),"clipboard"],["adelantos",u("view.adelantos"),"banknote"],["reposicion",u("view.reposicion"),"refresh"],["disponibilidad",u("view.disponibilidad"),"shield"]]],[u("sidebar.grupoControl"),[["alertas",u("view.alertas"),"bell"],["datos",u("view.datos"),"shieldAlert"],["configuracion",u("view.configuracion"),"traffic"]]]];return c.jsxs("aside",{className:"pnlq-no-print hidden w-60 shrink-0 flex-col bg-emerald-900 text-white lg:flex",children:[c.jsxs("div",{className:"border-b border-white/10 p-6",children:[c.jsxs("div",{className:"mb-3 flex items-center gap-3",children:[c.jsx("img",{src:"/BTMM_JORNADAS/acc-logo.svg",alt:"ACC",className:"h-12 w-12 shrink-0 rounded-xl bg-white p-1"}),c.jsxs("div",{children:[c.jsx("div",{className:"text-xs font-semibold uppercase tracking-[0.22em] text-white/60",children:u("app.sinacCR")}),c.jsx("div",{className:"mt-0.5 text-xs font-semibold text-white/70",children:u("app.accNombre")})]})]}),c.jsxs("div",{className:"text-base font-semibold leading-snug",children:[u("app.bloqueLinea1"),c.jsx("br",{}),u("app.bloqueLinea2")]}),c.jsx("div",{className:"mt-1.5 text-xs text-white/65",children:u("app.bloqueSub")})]}),c.jsx("nav",{className:"flex-1 p-3",children:d.map(([p,v])=>c.jsxs("div",{children:[c.jsx("div",{className:"px-3 pb-2 pt-4 text-xs font-semibold uppercase tracking-wider text-white/70",children:p}),v.map(([T,f,N])=>c.jsxs("button",{onClick:()=>i(T),"aria-current":r===T?"page":void 0,className:`mb-1 flex min-h-touch w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${r===T?"bg-white/20 text-white ring-1 ring-white/20":"text-white/80 hover:bg-white/10"}`,children:[c.jsx(We,{name:N,size:18}),f,T==="alertas"&&s>0&&c.jsx("span",{"aria-label":u("bottomNav.alertasAria",{n:s}),className:"ml-auto rounded-full bg-red-700 px-2 py-0.5 text-xs text-white",children:s})]},T))]},p))}),c.jsxs("div",{className:"border-t border-white/10 p-4 text-xs",children:[c.jsx("strong",{className:"font-semibold",children:u("app.perfilNombre")}),c.jsx("div",{className:"text-white/60",children:u("app.perfilCargo")}),c.jsxs("div",{className:"mt-3 border-t border-white/10 pt-3 text-[10px] font-mono leading-tight text-white/65",title:`Versión ${mr} · build ${_i} · commit ${Ii}`,children:[c.jsxs("div",{children:["v",mr," ",c.jsx("span",{className:"text-white/60",children:"·"})," ",Ii]}),c.jsxs("div",{className:"text-white/60",children:["build ",am(_i)]})]})]})]})}const Rm=["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SETIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"],Rh=["D","L","K","M","J","V","S"],h1=["DOMINGO","LUNES","MARTES","MIÉRCOLES","JUEVES","VIERNES","SÁBADO"];function _m({prominent:r=!1}){const{lastSavedAt:i,pendingChanges:s,durableSaveFailed:u}=Gt(),d=wn(),[p,v]=x.useState(typeof navigator<"u"?navigator.onLine:!0);x.useEffect(()=>{const P=()=>v(!0),C=()=>v(!1);return window.addEventListener("online",P),window.addEventListener("offline",C),()=>{window.removeEventListener("online",P),window.removeEventListener("offline",C)}},[]);const T=i?new Date(i).toLocaleTimeString("es-CR",{hour:"2-digit",minute:"2-digit"}):null,f=u&&s===0,N=s>0?d("sync.guardando"):f?d("sync.guardadoParcial",{hora:T??""}):T?d("sync.guardado",{hora:T}):d("sync.sinRespaldo"),y=`${d(p?"sync.enLinea":"sync.sinConexion")} · ${N}`;return r?c.jsxs("span",{role:"status","aria-label":y,title:y,className:`inline-flex min-h-touch w-full items-center justify-center gap-2 rounded-xl border px-3 py-2 text-sm font-semibold ${f||!p?"border-warning/40 bg-warning-soft text-warning-fg":"border-line bg-surface text-ink-muted"}`,children:[c.jsx("span",{"aria-hidden":"true",className:`h-2.5 w-2.5 shrink-0 rounded-full ${s>0?"animate-pulse bg-info":f||!p?"bg-warning":"bg-ok"}`}),c.jsx("span",{className:"truncate",children:N}),!p&&c.jsx("span",{className:"shrink-0 text-xs font-bold uppercase tracking-wide",children:d("sync.sinConexion")})]}):c.jsxs("span",{role:"status","aria-label":y,title:y,className:`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium sm:text-sm ${f?"border-warning/40 bg-warning-soft text-warning-fg":p?"border-line bg-surface text-ink-muted":"border-warning/40 bg-warning-soft text-warning-fg"}`,children:[c.jsx("span",{"aria-hidden":"true",className:`h-2 w-2 shrink-0 rounded-full ${s>0?"animate-pulse bg-info":f?"bg-warning":p?"bg-ok":"bg-warning"}`}),c.jsx("span",{className:"hidden sm:inline",children:N}),T&&c.jsx("span",{className:"sm:hidden",children:T})]})}var ml=Jd();const cr=[];let Cd=!1,lr=0,Sd="";function g1(r){if(r.key!=="Escape")return;const i=cr[cr.length-1];i&&(typeof r.stopImmediatePropagation=="function"&&r.stopImmediatePropagation(),r.stopPropagation(),i())}function P1(){Cd||typeof document>"u"||(document.addEventListener("keydown",g1,!0),Cd=!0)}function Im(r){return P1(),cr.push(r),()=>{const i=cr.lastIndexOf(r);i>=0&&cr.splice(i,1)}}function y1(r){x.useEffect(()=>{if(r)return Im(()=>r())},[r])}const M1=["a[href]","area[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(", ");function xd(r){return r?Array.from(r.querySelectorAll(M1)).filter(i=>!i.hasAttribute("aria-hidden")&&i.offsetParent!==null):[]}function Om({open:r=!0,onClose:i,initialFocusRef:s}={}){const u=x.useRef(null),d=x.useRef(null),p=x.useId(),v=x.useId();return x.useEffect(()=>{if(!r)return;d.current=typeof document<"u"?document.activeElement:null;const T=u.current;if(!T)return;typeof document<"u"&&(lr===0&&(Sd=document.body.style.overflow,document.body.style.overflow="hidden"),lr+=1);const f=()=>{const C=(s==null?void 0:s.current)??xd(T)[0]??T;try{C.focus({preventScroll:!0})}catch{}},N=window.setTimeout(f,0),y=C=>{if(C.key!=="Tab")return;const w=xd(T);if(w.length===0){C.preventDefault();return}const j=w[0],Q=w[w.length-1],D=document.activeElement;C.shiftKey?(D===j||!T.contains(D))&&(C.preventDefault(),Q.focus()):(D===Q||!T.contains(D))&&(C.preventDefault(),j.focus())};T.addEventListener("keydown",y);const P=i?Im(()=>i()):void 0;return()=>{window.clearTimeout(N),T.removeEventListener("keydown",y),P==null||P(),typeof document<"u"&&(lr=Math.max(0,lr-1),lr===0&&(document.body.style.overflow=Sd));const C=d.current;if(C&&typeof C.focus=="function")try{C.focus({preventScroll:!0})}catch{}}},[r,i,s]),{ref:u,titleId:p,descId:v}}const bd={sm:"max-w-sm",md:"max-w-xl",lg:"max-w-2xl",xl:"max-w-3xl","2xl":"max-w-4xl"};function Fm({open:r=!0,onClose:i,title:s,description:u,children:d,actions:p,size:v="lg",closeOnBackdrop:T=!0,contentClassName:f=""}){const{ref:N,titleId:y,descId:P}=Om({open:r,onClose:i});if(!r)return null;const C=bd[v]||bd.lg,w=c.jsx("div",{className:"pnlq-modal-backdrop fixed inset-0 z-50 flex items-end justify-center bg-black/55 p-0 backdrop-blur-sm md:items-center md:p-4",onClick:j=>{T&&j.target===j.currentTarget&&(i==null||i())},children:c.jsxs("div",{ref:N,role:"dialog","aria-modal":"true","aria-labelledby":s?y:void 0,"aria-describedby":u?P:void 0,tabIndex:-1,className:`pnlq-modal-panel flex max-h-[94vh] max-h-[94dvh] w-full ${C} flex-col overflow-hidden rounded-t-3xl bg-surface text-ink shadow-2xl outline-none md:rounded-3xl`,style:{maxHeight:"calc(var(--visual-viewport-height, 100dvh) - 1rem)"},children:[c.jsx("div",{"aria-hidden":"true",className:"mx-auto mt-2 h-1.5 w-10 shrink-0 rounded-full bg-line md:hidden"}),(s||u)&&c.jsxs("header",{className:"pnlq-modal-header flex items-start justify-between gap-3 border-b border-line p-5",children:[c.jsxs("div",{className:"min-w-0",children:[s&&c.jsx("h2",{id:y,className:"text-lg font-semibold text-ink",children:s}),u&&c.jsx("p",{id:P,className:"mt-1 text-sm text-ink-muted",children:u})]}),c.jsx("button",{type:"button",onClick:i,"aria-label":Ie("acciones.cerrar"),className:"-mr-1 inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl text-ink-muted hover:bg-surface-alt hover:text-ink",children:c.jsx(We,{name:"x",size:20,label:Ie("acciones.cerrar")})})]}),c.jsx("div",{className:`pnlq-modal-body flex-1 overflow-y-auto p-5 ${f}`,children:d}),p&&c.jsx("footer",{className:"pnlq-modal-footer flex flex-wrap justify-between gap-2 border-t border-line bg-surface-alt p-4 pb-[max(1rem,env(safe-area-inset-bottom))]",children:p})]})});return typeof document<"u"?ml.createPortal(w,document.body):w}const Js=390,Bs=844,zm="mobile-preview";function E1(r=window.location){return new URLSearchParams(r.search).get(zm)==="1"}function N1(r=window.location){const i=new URL(r.href);return i.searchParams.set(zm,"1"),i.toString()}const Vd=["planificacion","planFuncionario"];function C1({view:r,setView:i,month:s,setMonth:u,year:d,setYear:p,compact:v,setCompact:T}){const f=wn(),[N,y]=x.useState(!1),[P,C]=x.useState(!1),w=E1(),j=new Date().getFullYear(),Q=Array.from({length:11},(Z,pe)=>j-5+pe),D=Z=>{let pe=s+Z,ie=d;pe<0&&(pe=11,ie-=1),pe>11&&(pe=0,ie+=1),u(pe),p(ie)},V=()=>{const Z=new Date;u(Z.getMonth()),p(Z.getFullYear())},Y=Vd.includes(r),te=Y||r==="roles";return c.jsxs("header",{className:`pnlq-topbar pnlq-no-print sticky top-0 border-line bg-surface/95 shadow-sm backdrop-blur lg:block lg:border-b lg:px-6 lg:py-3 ${Y?"block border-b px-4 py-2":te?"hidden border-b md:block md:px-4 md:py-2":"hidden"} ${N?"z-50":"z-30"}`,children:[c.jsxs("div",{className:"pnlq-topbar-inner flex flex-col gap-2 xl:flex-row xl:items-center xl:justify-between",children:[c.jsx("div",{className:"flex items-center justify-between gap-2",children:c.jsx("div",{className:"min-w-0",children:c.jsx("h1",{className:"hidden text-xl font-semibold tracking-tight text-ink lg:block",children:f("app.titulo")})})}),c.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[Vd.includes(r)&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{role:"group","aria-label":f("topbar.periodo"),className:"inline-flex items-stretch overflow-hidden rounded-xl border border-line bg-surface shadow-sm",children:[c.jsx("button",{onClick:()=>D(-1),"aria-label":f("topbar.mesAnterior"),className:"inline-flex min-h-touch min-w-touch items-center justify-center px-2 text-ink-muted hover:bg-surface-alt",children:c.jsx(We,{name:"chevronLeft",size:16})}),c.jsx("select",{"aria-label":f("topbar.mes"),className:"min-h-touch border-x border-line bg-surface px-1.5 text-sm font-medium text-ink outline-none sm:px-2 dark:[color-scheme:dark]",value:s,onChange:Z=>u(Number(Z.target.value)),children:Rm.map((Z,pe)=>c.jsx("option",{value:pe,children:Z},Z))}),c.jsx("select",{"aria-label":f("topbar.anio"),className:"min-h-touch bg-surface px-1.5 text-sm font-medium text-ink outline-none sm:px-2 dark:[color-scheme:dark]",value:d,onChange:Z=>p(Number(Z.target.value)),children:Q.map(Z=>c.jsx("option",{children:Z},Z))}),c.jsx("button",{onClick:()=>D(1),"aria-label":f("topbar.mesSiguiente"),className:"inline-flex min-h-touch min-w-touch items-center justify-center border-l border-line px-2 text-ink-muted hover:bg-surface-alt",children:c.jsx(We,{name:"chevronRight",size:16})})]}),c.jsx("button",{type:"button",onClick:V,className:"inline-flex min-h-touch items-center rounded-xl border border-line bg-surface px-3 text-sm font-semibold text-brand hover:bg-brand-soft",children:f("topbar.hoy")})]}),r==="roles"&&c.jsx("button",{onClick:()=>T(!v),className:"hidden min-h-touch items-center rounded-xl border border-line bg-surface px-3 py-2 text-sm font-medium text-ink hover:bg-surface-alt md:inline-flex","aria-pressed":v,children:f(v?"topbar.vistaAmplia":"topbar.vistaCompacta")}),!w&&c.jsxs("button",{type:"button",onClick:()=>y(!0),className:"hidden min-h-touch items-center gap-2 rounded-xl border border-brand bg-brand-soft px-3 text-sm font-semibold text-ink hover:opacity-90 lg:inline-flex","aria-label":f("topbar.previewMobile"),children:[c.jsx(We,{name:"phone",size:18}),f("topbar.previewMobileCorto"),c.jsx("span",{className:"rounded-md bg-surface px-1.5 py-0.5 text-xs text-ink-muted",children:"Temporal"})]}),c.jsx("span",{className:"hidden lg:inline-flex",children:c.jsx(_m,{})})]})]}),c.jsxs(Fm,{open:N,onClose:()=>y(!1),title:f("topbar.previewTitle"),description:f("topbar.previewDesc",{ancho:P?Bs:Js,alto:P?Js:Bs}),size:"2xl",contentClassName:"bg-slate-200 p-3",children:[c.jsxs("div",{className:"mb-3 flex justify-center",role:"group","aria-label":f("topbar.previewOrientation"),children:[c.jsx("button",{type:"button",onClick:()=>C(!1),"aria-pressed":!P,className:`min-h-touch rounded-l-xl border px-4 text-sm font-semibold ${P?"border-line bg-surface text-ink":"border-brand bg-brand text-brand-fg"}`,children:f("topbar.previewVertical")}),c.jsx("button",{type:"button",onClick:()=>C(!0),"aria-pressed":P,className:`min-h-touch rounded-r-xl border border-l-0 px-4 text-sm font-semibold ${P?"border-brand bg-brand text-brand-fg":"border-line bg-surface text-ink"}`,children:f("topbar.previewHorizontal")})]}),c.jsx("div",{className:"mx-auto max-w-full overflow-hidden rounded-[2rem] border-[6px] border-slate-900 bg-white shadow-2xl transition-[width]",style:{width:`${(P?Bs:Js)+12}px`},children:c.jsx("iframe",{title:f("topbar.previewFrameTitle"),src:N1(),className:`block w-full bg-white ${P?"h-[min(390px,calc(100dvh-12rem))] min-h-[280px]":"h-[min(844px,calc(100dvh-12rem))] min-h-[480px]"}`})})]})]})}function S1(r){return r>99?"99+":String(r)}function x1({view:r,setView:i,nAlertas:s,hidden:u=!1}){const d=wn(),[p,v]=x.useState(!1),T=[["dia",d("bottomNav.dia"),"calendar"],["roles",d("bottomNav.roles"),"chart"],["alertas",d("bottomNav.alertas"),"bell"],["funcionarios",d("bottomNav.personal"),"users"]],f=[["planificacion",d("bottomNav.plan"),"calendarDays"],["adelantos",d("bottomNav.viaticos"),"banknote"],["reposicion",d("bottomNav.reposicion"),"refresh"],["disponibilidad",d("bottomNav.disponib"),"shield"],["planFuncionario",d("bottomNav.planFunc"),"clipboard"],["datos",d("bottomNav.datos"),"shieldAlert"],["configuracion",d("bottomNav.config"),"traffic"]],N=f.some(([P])=>P===r),y=P=>{i(P),v(!1)};return u?null:c.jsxs(c.Fragment,{children:[c.jsx("nav",{className:"pnlq-bottom-nav pnlq-no-print fixed bottom-0 left-0 right-0 z-40 border-t border-line bg-surface pb-[env(safe-area-inset-bottom)] lg:hidden","aria-label":d("bottomNav.navAria"),children:c.jsxs("div",{className:"pnlq-bottom-nav-grid grid grid-cols-5",children:[T.map(([P,C,w])=>c.jsxs("button",{type:"button",onClick:()=>y(P),"aria-current":r===P?"page":void 0,className:`pnlq-bottom-nav-item relative flex min-h-touch flex-col items-center justify-center gap-0.5 py-2 text-sm font-semibold ${r===P?"text-brand":"text-ink-muted"}`,children:[c.jsx(We,{name:w,size:24}),C,P==="alertas"&&s>0&&c.jsx("span",{className:"absolute right-[18%] top-1 min-w-5 rounded-full bg-critical px-1 text-center text-xs font-bold leading-5 text-ink-inverse","aria-label":d("bottomNav.alertasAria",{n:s}),children:S1(s)})]},P)),c.jsxs("button",{type:"button",onClick:()=>v(!0),"aria-expanded":p,"aria-current":N?"page":void 0,className:`pnlq-bottom-nav-item relative flex min-h-touch flex-col items-center justify-center gap-0.5 py-2 text-sm font-semibold ${p||N?"text-brand":"text-ink-muted"}`,children:[c.jsx(We,{name:"menu",size:24}),d("bottomNav.mas")]})]})}),c.jsx(Fm,{open:p,onClose:()=>v(!1),title:d("bottomNav.masTitulo"),description:d(N?`view.${r}`:"bottomNav.masSub"),size:"sm",contentClassName:"p-3 pb-[max(1rem,env(safe-area-inset-bottom))]",children:c.jsx("div",{className:"grid grid-cols-2 gap-2",children:f.map(([P,C,w])=>c.jsxs("button",{type:"button",onClick:()=>y(P),"aria-current":r===P?"page":void 0,className:`relative flex min-h-[56px] items-center gap-3 rounded-xl px-3 text-left text-sm font-semibold ${r===P?"bg-brand text-brand-fg":"border border-line bg-surface-alt text-ink"}`,children:[c.jsx(We,{name:w,size:22}),c.jsx("span",{children:C})]},P))})})]})}const b1=new Set(["dia","roles","planificacion","funcionarios","alertas","adelantos","reposicion","disponibilidad","planFuncionario","datos","configuracion","funcionario"]),Qm=new Set(["roles","planificacion","planFuncionario"]),Jm=new Set(["funcionario"]);function pl(r){return r==="dashboard"?"dia":b1.has(r)?r:"dia"}function V1(r,i){const s=Number(r),u=Number(i);return Number.isInteger(s)&&s>=2e3&&s<=2200&&Number.isInteger(u)&&u>=1&&u<=12?{year:s,month:u-1}:null}function A1(r){if(!r)return"";try{return decodeURIComponent(r).trim()}catch{return""}}function w1(r){if(!r)return null;try{const i=new URLSearchParams(r),s={};for(const[u,d]of i.entries())d!==""&&(s[u]=d);return Object.keys(s).length?s:null}catch{return null}}function j1(r){if(!r)return"";const i=new URLSearchParams;for(const u of Object.keys(r).sort()){const d=r[u];d==null||d===""||i.set(u,String(d))}const s=i.toString();return s?`?${s}`:""}function D1(r=""){const[i,s]=String(r).split("?"),u=String(i).replace(/^#\/?/,""),[d,p,v]=u.split("/"),T=pl(d||"dia"),f={view:T};if(T==="dia"&&/^\d{4}-\d{2}-\d{2}$/.test(p||"")&&(f.diaVista=p),Qm.has(T)&&Object.assign(f,V1(p,v)||{}),Jm.has(T)){const y=A1(p);y?f.funcionarioVista=y:f.view="funcionarios"}const N=w1(s);return N&&(f.filtros=N),f}function Ad({view:r,year:i,month:s,diaVista:u,funcionarioVista:d,filtros:p}){const v=pl(r),T=j1(p);if(v==="dia")return`#/dia/${u}${T}`;if(Qm.has(v))return`#/${v}/${i}/${Kn(s+1)}${T}`;if(Jm.has(v)){const f=String(d||"").trim();return f?`#/funcionario/${encodeURIComponent(f)}${T}`:"#/funcionarios"}return`#/${v}${T}`}function k1({view:r,setView:i,year:s,setYear:u,month:d,setMonth:p,diaVista:v,setDiaVista:T,funcionarioVista:f,setFuncionarioVista:N,filtrosVista:y,setFiltrosVista:P}){const C=y==null?void 0:y[r],w=x.useCallback(()=>{const j=D1(window.location.hash);i(j.view),j.year!=null&&u(j.year),j.month!=null&&p(j.month),j.diaVista&&T(j.diaVista),j.funcionarioVista&&(N==null||N(j.funcionarioVista)),j.filtros&&(P==null||P(j.view,j.filtros))},[T,P,N,p,i,u]);return x.useEffect(()=>(w(),window.addEventListener("popstate",w),window.addEventListener("hashchange",w),()=>{window.removeEventListener("popstate",w),window.removeEventListener("hashchange",w)}),[w]),x.useEffect(()=>{const j=Ad({view:r,year:s,month:d,diaVista:v,funcionarioVista:f,filtros:C});window.location.hash!==j&&window.history.replaceState({},"",j)},[v,C,f,d,r,s]),x.useCallback((j,Q={})=>{const D=pl(j),V=Q.funcionario!=null?Q.funcionario:f;Q.funcionario!=null&&(N==null||N(Q.funcionario));const Y=Ad({view:D,year:s,month:d,diaVista:v,funcionarioVista:V,filtros:y==null?void 0:y[D]});window.location.hash!==Y&&window.history.pushState({},"",Y),i(D)},[v,y,f,d,N,i,s])}function R1(){const[r,i]=x.useState(!1);return x.useEffect(()=>{const s=window.visualViewport;if(!s)return;const u=()=>{const p=window.innerHeight-s.height>150;i(p),document.documentElement.style.setProperty("--visual-viewport-height",`${s.height}px`)};return u(),s.addEventListener("resize",u),s.addEventListener("scroll",u),()=>{s.removeEventListener("resize",u),s.removeEventListener("scroll",u),document.documentElement.style.removeProperty("--visual-viewport-height")}},[]),r}class _1 extends x.Component{constructor(s){super(s);Ci(this,"handleReintentar",()=>{this.setState({hasError:!1,error:null})});Ci(this,"handleRecargar",()=>{window.location.reload()});Ci(this,"handleDescargarRespaldo",()=>{try{const s=Hs();if(!s)return;const u=SL(s),d=new Blob([JSON.stringify(u,null,2)],{type:"application/json"}),p=URL.createObjectURL(d),v=document.createElement("a");v.href=p,v.download=`pnlq-respaldo-de-emergencia-${VL()}.json`,document.body.appendChild(v),v.click(),document.body.removeChild(v),URL.revokeObjectURL(p)}catch{}});this.state={hasError:!1,error:null}}static getDerivedStateFromError(s){return{hasError:!0,error:s}}componentDidCatch(s,u){console.error("Error de aplicación capturado por ErrorBoundary:",s,u==null?void 0:u.componentStack)}render(){var u;if(!this.state.hasError)return this.props.children;const s=(()=>{try{return!!Hs()}catch{return!1}})();return c.jsx("div",{role:"alert",className:"flex min-h-screen items-center justify-center bg-slate-100 p-4 text-slate-950",children:c.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-red-300 bg-white p-6 shadow-lg",children:[c.jsx("p",{className:"text-lg font-bold text-red-900",children:"Ocurrió un error inesperado"}),c.jsx("p",{className:"mt-2 text-sm text-slate-700",children:"La aplicación encontró un problema y no puede continuar mostrando esta pantalla. Tus datos guardados en este dispositivo no se han borrado."}),c.jsxs("div",{className:"mt-5 flex flex-col gap-2",children:[c.jsx("button",{type:"button",onClick:this.handleReintentar,className:"min-h-touch rounded-xl bg-emerald-800 px-4 text-sm font-semibold text-white hover:bg-emerald-700",children:"Reintentar"}),c.jsx("button",{type:"button",onClick:this.handleRecargar,className:"min-h-touch rounded-xl border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-800 hover:bg-slate-50",children:"Recargar la aplicación"}),s&&c.jsx("button",{type:"button",onClick:this.handleDescargarRespaldo,className:"min-h-touch rounded-xl border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-800 hover:bg-slate-50",children:"Descargar mis datos por seguridad"})]}),((u=this.state.error)==null?void 0:u.message)&&c.jsxs("p",{className:"mt-4 break-words rounded-lg bg-slate-50 p-2 text-[11px] text-slate-500",children:["Detalle técnico: ",this.state.error.message]})]})})}}const wd={exito:{icono:"check",texto:"text-ok",borde:"border-l-ok"},error:{icono:"danger",texto:"text-critical",borde:"border-l-critical"},aviso:{icono:"alert",texto:"text-warning",borde:"border-l-warning"},info:{icono:"info",texto:"text-info",borde:"border-l-info"}};function I1({item:r,onCerrar:i,onAccion:s}){const u=wd[r.tipo]||wd.info;return c.jsxs("div",{"data-testid":"toast","data-tipo":r.tipo,className:`pnlq-toast rounded-2xl border border-line border-l-4 ${u.borde} bg-surface p-3 shadow-lg`,children:[c.jsxs("div",{className:"flex items-start gap-2.5",children:[c.jsx("span",{className:`mt-0.5 shrink-0 ${u.texto}`,children:c.jsx(We,{name:u.icono,size:20})}),c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsx("p",{className:"break-words text-sm font-semibold text-ink",children:r.mensaje}),r.detalle&&c.jsx("p",{className:"mt-0.5 break-words text-xs text-ink-muted",children:r.detalle})]}),c.jsx("button",{type:"button",onClick:i,"aria-label":Ie("acciones.cerrar"),className:"-mr-1 -mt-1 inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl text-ink-muted hover:bg-surface-alt hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",children:c.jsx(We,{name:"x",size:18})})]}),r.accion&&c.jsx("div",{className:"mt-1 flex justify-end",children:c.jsx("button",{type:"button",onClick:s,className:"inline-flex min-h-touch items-center rounded-xl bg-brand px-4 text-sm font-bold text-brand-fg hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",children:r.accion.etiqueta})})]})}function O1(){const{toasts:r,cerrar:i,activarAccion:s,pausar:u,reanudar:d}=tm(),p=r.filter(N=>N.tipo==="error"),v=r.filter(N=>N.tipo!=="error"),T=N=>c.jsx(I1,{item:N,onCerrar:()=>i(N.id),onAccion:()=>s(N.id)},N.id),f=c.jsxs("div",{className:"pnlq-toast-viewport pnlq-no-print",onMouseEnter:u,onMouseLeave:d,onFocusCapture:u,onBlurCapture:d,children:[c.jsx("div",{role:"alert","aria-live":"assertive","aria-atomic":"false",className:"pnlq-toast-region",children:p.map(T)}),c.jsx("div",{role:"status","aria-live":"polite","aria-atomic":"false",className:"pnlq-toast-region",children:v.map(T)})]});return typeof document<"u"?ml.createPortal(f,document.body):f}const F1=String.raw`Pestaña 1


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
`,z1=String.raw`TCU 3 PAX
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
`,Q1=String.raw`KV atiende turismo
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
`,J1=String.raw`Covirena apoya PNTMM




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






`,B1=String.raw` 
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


`,Y1=String.raw`

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
`,G1=String.raw`PNTMM
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
`,U1=String.raw`





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



`,K1=String.raw`


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










 


	

	

	

	

	

	

	





Pestaña 2`,$1=[F1,z1,Q1,J1,B1,Y1,G1,U1,K1].join(""),Ys="2026-09-11-doc-completo";function Qn({id:r,titulo:i,fecha:s,funcionarios:u,lugar:d="",observaciones:p=""}){return{id:`plan2026-agenda-${r}`,titulo:i,categoria:"Otra actividad",inicio:s,fin:s,unDia:!0,horaInicio:"08:00",horaFin:"16:00",funcionarios:u,otrosParticipantes:[],lugar:d,observaciones:p,viatico:!0}}const q1=[Qn({id:"2026-08-01-cerro-vueltas",titulo:"PPC (entrada de Cerro Vueltas, tema caballistas)",fecha:"2026-08-01",funcionarios:["Jetzelly Villalobos","Yolanda Elizondo"],lugar:"Entrada de Cerro Vueltas",observaciones:"Tema: caballistas."}),Qn({id:"2026-08-05-reunion-cne",titulo:"Reunión CNE",fecha:"2026-08-05",funcionarios:["Karen Valle"],lugar:"CNE"}),Qn({id:"2026-08-06-jaular",titulo:"PPC pica montaña a Jaular",fecha:"2026-08-06",funcionarios:["Yeison Cortés","Errol Salazar","Kenneth Mena"],lugar:"Jaular"}),Qn({id:"2026-08-08-cerros",titulo:"PPC a Cerros",fecha:"2026-08-08",funcionarios:["Yolanda Elizondo"],lugar:"Cerros"}),...[10,11,12,13,14].map(r=>Qn({id:`2026-08-${r}-ea-escuelas`,titulo:"EA Escuelas",fecha:`2026-08-${r}`,funcionarios:["Errol Salazar","Diana Tencio"],lugar:"Escuelas"})),Qn({id:"2026-08-12-ppc-san-gerardo",titulo:"PPC San Gerardo",fecha:"2026-08-12",funcionarios:["Karen Valle","Laura Valverde","Pablo Sánchez"],lugar:"San Gerardo"}),Qn({id:"2026-08-12-capacitacion-serpientes",titulo:"Capacitación en manipulación y manejo de serpientes",fecha:"2026-08-12",funcionarios:["Yeison Cortés","Laura Valverde"],observaciones:"Las dos descripciones de la fuente se consolidaron en una sola actividad."}),Qn({id:"2026-08-16-duelas-esperanza",titulo:"PPC Duelas, La Esperanza y otros",fecha:"2026-08-16",funcionarios:["Jetzelly Villalobos"],lugar:"Duelas y La Esperanza"}),Qn({id:"2026-08-17-vida-silvestre-acc",titulo:"Apoyo operativo Vida Silvestre ACC",fecha:"2026-08-17",funcionarios:["Fabricio Carbonell","Kenneth Mena","Jetzelly Villalobos"],lugar:"ACC",observaciones:"Confirmar detalles con Fabricio."}),Qn({id:"2026-08-18-reserva-san-gerardo",titulo:"PPC Reserva San Gerardo",fecha:"2026-08-18",funcionarios:["Karen Valle","Yolanda Elizondo","Pablo Sánchez"],lugar:"Reserva San Gerardo"}),Qn({id:"2026-08-30-rancho-lalo",titulo:"PPC Rancho de Lalo",fecha:"2026-08-30",funcionarios:["Jetzelly Villalobos","Mariano Solís"],lugar:"Rancho de Lalo"})],H1={PNTMM:"Parque Nacional Tapantí Macizo de la Muerte",PNLQ:"Parque Nacional Los Quetzales",PLE:"Puesto La Esperanza",PVM:"Puesto Villa Mills"},jd={ENERO:1,FEBRERO:2,MARZO:3,ABRIL:4,MAYO:5,JUNIO:6,JULIO:7,AGOSTO:8,SETIEMBRE:9,SEPTIEMBRE:9,OCTUBRE:10,NOVIEMBRE:11,DICIEMBRE:12},Dd={ES:"Errol Salazar",ME:"Mayra Espinoza",YC:"Yeison Cortés",KM:"Kenneth Mena",FC:"Fabricio Carbonell",MN:"Monserrath Navarro",JPG:"Juan Pablo Granados",JG:"Juan Pablo Granados",PG:"Juan Pablo Granados",JP:"Juan Pablo Granados",LV:"Laura Valverde",JV:"Jetzelly Villalobos",DT:"Diana Tencio",KV:"Karen Valle",PS:"Pablo Sánchez",YE:"Yolanda Elizondo",MS:"Mariano Solís",MSA:"Mariano Solís",GP:"Guillermo Pérez",CC:"Carlos Cordero",JB:"Josué Brenes",AA:"Alexander Alvarado"},W1={MH:"MH",GG:"GG",MSG:"MSG",DA:"Dirección de Agua",GJ:"GJ",JC:"JC",IV:"IV",YV:"YV",VB:"VB",ASVO:"ASVO",TCU:"TCU",UCR:"UCR",TEC:"TEC",ICE:"ICE",ACLAP:"ACLAP",COVIRENA:"COVIRENA",COVIRENAS:"COVIRENA",PANTHERA:"Panthera",UNED:"UNED",INA:"INA",MOPT:"MOPT",FUNDECOR:"FUNDECOR",CEDARENA:"CEDARENA"},Z1=new Set(["DOMINGO","LUNES","MARTES","MIÉRCOLES","JUEVES","VIERNES","SÁBADO"]),X1=2026,Bm=r=>r.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase(),ev=(r,i)=>new RegExp(`(^|[^A-Z])${i}([^A-Z]|$)`).test(r);function nv(r){const i=r.replace(/[^A-Za-z]/g,"").toUpperCase();return i.startsWith("PNTMM")?"PNTMM":["PNLQ","PLE","PVM"].includes(i)?i:""}function tv(r){const i=Bm(r),s=[],u=d=>{s.some(p=>p.nombre===d)||s.push({nombre:d,contacto:""})};for(const[d,p]of Object.entries(W1))ev(i,d)&&u(p);return/\bENZO\b/.test(i)&&u("Enzo"),/\bALEX(?:ANDER)?\b/.test(i)&&u("Alex"),/\bMERYLL(?:\s+ARIAS)?\b/.test(i)&&u("Meryll Arias"),/\bLUIS\s*DAVID\b|\bLUISDA\b/.test(i)&&u("Luis David"),/\bVOLUNTARI(?:O|A|OS|AS)\b/.test(i)&&u("Voluntariado"),/\bINVESTIGADOR(?:A|ES|AS)?\b/.test(i)&&u("Investigadores"),/\bPASANTES?\b/.test(i)&&u("Pasantes"),/\bESTUDIANTES?\b/.test(i)&&u("Estudiantes"),s}function av(r){const i=Bm(r);return!!(/\bVOLUNTARI[OA]S?\b/.test(i)||/\bCOVIRENAS?\b/.test(i)||/\bINVITAD[OA]S?\b/.test(i)||/\bINVESTIGADOR/.test(i)||/\bPASANTES?\b/.test(i)||/\bESTUDIANTES?\b/.test(i)||/\bPRACTICANTES?\b/.test(i)||/\bENZO\b/.test(i)||/\bMERYLL\b/.test(i)||/^(INGRESAN?|SALEN?|PERNOCTAN?|LLEGAN?|VISITAN?)\b/.test(i))}function rv(r){const i=v=>{const T=v.match(/^([A-Za-z]{2,3})(?![A-Za-z])/);if(!T)return null;const f=T[1].toUpperCase();return Dd[f]?{nombre:Dd[f],largo:T[1].length}:null};let s=r.replace(/^\s+/,"");const u=i(s);if(!u)return{funcionarios:[],titulo:r.trim()};const d=[u.nombre];for(s=s.slice(u.largo);;){const v=s.match(/^(\s*(?:y|,|\/|-|–|&|;)\s*|\s+)/i);if(!v)break;const T=s.slice(v[0].length),f=i(T);if(!f)break;d.includes(f.nombre)||d.push(f.nombre),s=T.slice(f.largo)}const p=s.replace(/^\s*[:\-–]?\s*/,"").replace(/^(?:y|e|&|,|;)\s+/i,"").trim();return{funcionarios:d,titulo:p}}function iv(r){const i=[];for(const s of r){const u=i[i.length-1];if(u!==void 0&&/^[a-záéíóúñ]/.test(s)){const d=u.split(/\s+/).pop()||"";if(d.length===1&&/^[a-záéíóúñ]$/.test(d)){i[i.length-1]=u+s;continue}}i.push(s)}return i}function ov(r){const i=new Map;let s=0,u=X1,d=0,p="";for(const T of r.split(/\r?\n/)){const f=T.trim();if(!f||Z1.has(f)||/^_+$/.test(f)||f==="De"||/^Pestaña\s+\d+$/i.test(f))continue;const N=f.match(/^([A-ZÁÉÍÓÚÑ]+)\s+(\d{4})$/);if(N&&jd[N[1]]){s=jd[N[1]],u=Number(N[2]),d=0,p="";continue}if(/^\d{1,2}$/.test(f)){d=Number(f),p="";continue}const y=nv(f);if(y){p=y;continue}if(!s||!d||!p)continue;const P=`${u}-${s}-${d}-${p}`;i.has(P)||i.set(P,{anio:u,mes:s,dia:d,sitio:p,textos:[]}),i.get(P).textos.push(f)}const v=[];for(const T of i.values()){const f=`${T.anio}-${String(T.mes).padStart(2,"0")}-${String(T.dia).padStart(2,"0")}`;let N=[],y=0;for(const P of iv(T.textos)){const{funcionarios:C,titulo:w}=rv(P);if(!w)continue;let j;C.length?(j=C,N=C):av(P)?j=[]:N.length?j=N:j=[],v.push({id:`plan2026-${f}-${T.sitio}-${y++}`,titulo:w,categoria:"Otra actividad",inicio:f,fin:f,unDia:!0,horaInicio:"08:00",horaFin:"16:00",funcionarios:j,otrosParticipantes:tv(P),lugar:H1[T.sitio],observaciones:"",viatico:!1})}}return v}function kd(r){return typeof(r==null?void 0:r.id)=="string"&&r.id.startsWith("plan2026-")}function sv(r,i,s){const u=(r||[]).filter(p=>!(kd(p)&&(p.inicio||"")>=s)),d=(i||[]).filter(p=>kd(p)&&(p.inicio||"")>=s);return[...u,...d]}async function lv(){const r=ov($1);if(!r.length)throw new Error("La planificación 2026 no produjo actividades válidas.");return[...r,...q1]}const Gs="btmm:planificacion2026:version",cv="btmm:planificacion2026:importada:v3";function uv(){const{setActividadesPlan:r}=Gt();return x.useEffect(()=>{let i=!1,s=null,u=null;try{s=window.localStorage.getItem(Gs),u=window.localStorage.getItem(cv)}catch{}if(s!==Ys){if(!s&&u==="1"){try{window.localStorage.setItem(Gs,Ys)}catch{}return}return(async()=>{try{const d=await lv();if(i)return;const p=s==null?"":Bi();r(v=>sv(v,d,p));try{window.localStorage.setItem(Gs,Ys)}catch{}}catch(d){console.error("No fue posible sincronizar PLANIFICACION BTMM 2026",d)}})(),()=>{i=!0}}},[r]),null}const Rd={flat:"bg-surface",inset:"bg-surface-inset",elevated:"border border-line bg-surface shadow-sm",interactive:"border border-line bg-surface transition-colors hover:border-line-strong hover:bg-surface-alt"};function ha({title:r,icon:i,action:s,children:u,collapsible:d=!1,defaultOpen:p=!1,variant:v="flat",className:T="",ariaLabel:f}){const[N,y]=x.useState(p),P=!d||N;return c.jsxs("div",{className:`pnlq-card rounded-lg p-4 ${Rd[v]??Rd.flat} ${T}`,children:[c.jsxs("div",{className:`pnlq-card-header flex flex-wrap items-center justify-between gap-3 ${P?"mb-3":""}`,children:[d?c.jsxs("button",{type:"button",onClick:()=>y(C=>!C),"aria-expanded":N,"aria-label":f,className:"flex min-h-touch flex-1 items-center gap-2 text-left text-base font-semibold text-ink hover:text-brand",children:[c.jsx(We,{name:N?"chevronDown":"chevronRight",size:18,className:"shrink-0 text-ink-subtle"}),c.jsx("span",{children:i}),r]}):c.jsxs("div",{className:"flex items-center gap-2 text-base font-semibold text-ink",children:[c.jsx("span",{children:i}),r]}),s]}),P&&u]})}function St({children:r,className:i="",bordered:s=!1}){return c.jsx("span",{className:`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${s?"border":""} ${i}`,children:r})}function dv(r){return r.split(" ").slice(0,2).map(i=>i[0]).join("").toUpperCase()}function mv(r){return["bg-emerald-700 text-white","bg-sky-700 text-white","bg-rose-700 text-white","bg-amber-700 text-white","bg-purple-700 text-white"][r.charCodeAt(0)%5]}function _h(r){return{Activo:"bg-emerald-100 text-emerald-900 border-emerald-200","De vacaciones":"bg-sky-100 text-sky-900 border-sky-200",Incapacitado:"bg-red-100 text-red-900 border-red-200",Inactivo:"bg-slate-100 text-slate-700 border-slate-200"}[r]||"bg-slate-100 text-slate-700 border-slate-200"}function _d(r,i){const s=String(r||"").toUpperCase();return i&&!s?"bg-slate-600 text-white border-slate-700":s.startsWith("T")?"bg-emerald-700 text-white border-emerald-800":s.startsWith("I")?"bg-rose-700    text-white border-rose-800":s.startsWith("V")?"bg-sky-700     text-white border-sky-800":s.startsWith("L")?"bg-amber-700   text-white border-amber-800":s.startsWith("O")?"bg-violet-700  text-white border-violet-800":s.startsWith("E")?"bg-cyan-700    text-white border-cyan-800":s?i?"bg-slate-600 text-white border-slate-700":"bg-emerald-700 text-white border-emerald-800":i?"bg-slate-600 text-white border-slate-700":"bg-slate-400 text-white border-slate-500"}function bi({name:r}){return c.jsx("div",{className:`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${mv(r)}`,children:dv(r)})}const Id={half:"h-[60vh]",full:"max-h-[92vh]"};function fl({open:r,onClose:i,title:s,snapPoint:u="full",children:d}){const p=x.useRef(null),v=x.useRef({startY:0,dragging:!1});x.useEffect(()=>{if(!r)return;const y=P=>{P.key==="Escape"&&i()};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[r,i]),x.useEffect(()=>(r?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[r]);const T=x.useCallback(y=>{v.current={startY:y.touches[0].clientY,dragging:!0}},[]),f=x.useCallback(y=>{if(!v.current.dragging)return;const P=y.touches[0].clientY-v.current.startY;P>0&&p.current&&(p.current.style.transform=`translateY(${P}px)`)},[]),N=x.useCallback(y=>{if(!v.current.dragging)return;const P=y.changedTouches[0].clientY-v.current.startY;v.current.dragging=!1,p.current&&(p.current.style.transform=""),P>80&&i()},[i]);return typeof document>"u"?null:ml.createPortal(c.jsxs(c.Fragment,{children:[c.jsx("div",{"aria-hidden":"true",onClick:i,className:["fixed inset-0 z-40 bg-black/50 transition-opacity duration-300",r?"opacity-100":"pointer-events-none opacity-0"].join(" ")}),c.jsxs("div",{ref:p,role:"dialog","aria-modal":"true","aria-label":s,className:["fixed inset-x-0 bottom-0 z-50 flex flex-col rounded-t-2xl bg-surface text-ink shadow-2xl","transition-transform duration-300 ease-out",Id[u]??Id.full,r?"translate-y-0":"translate-y-full"].join(" "),children:[c.jsx("div",{className:"flex cursor-grab touch-none items-center justify-center pb-1 pt-3",onTouchStart:T,onTouchMove:f,onTouchEnd:N,"aria-hidden":"true",children:c.jsx("span",{className:"h-1.5 w-10 rounded-full bg-line"})}),s&&c.jsxs("div",{className:"flex items-center justify-between border-b border-line px-5 pb-3 pt-1",children:[c.jsx("h2",{className:"text-base font-semibold text-ink",children:s}),c.jsx("button",{type:"button",onClick:i,"aria-label":"Cerrar",className:"inline-flex min-h-touch min-w-touch items-center justify-center rounded-full text-ink-muted hover:bg-surface-alt hover:text-ink",children:c.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M18 6 6 18M6 6l12 12"})})})]}),c.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-8 pt-4",children:d})]})]}),document.body)}function Ym(r,i,s,u,d){return`${r}-${i+1}-${s}-${u}-${d}`}function pv(r,i,s,u){return`CFG-${r}-${i+1}-${s}-${u}`}function fr(r){const i=String(r||"10x5").toLowerCase();if(i.includes("administrativo"))return{trabajo:5,libre:2,administrativo:!0};const s=i.split("x");return{trabajo:Number(s[0])||10,libre:Number(s[1])||5,administrativo:!1}}function fv(r,i,s,u,d){const p=fr(r);if(p.administrativo){const f=new Date(u,d,i).getDay();return f>=1&&f<=5?`T${f}`:f===6?"L1":"L2"}const v=p.trabajo+p.libre,T=(i-s)%v;return i<s?"":T<p.trabajo?`T${T+1}`:`L${T-p.trabajo+1}`}function Yi(r){const i=String(r||"").toUpperCase();return i.startsWith("T")||i.startsWith("E")}function Tv(r){return String(r||"").toUpperCase().startsWith("T")}function Gm(r){return String(r||"").toUpperCase().startsWith("E")}function Lv(r){const i=String(r||"").toUpperCase();return i.startsWith("T")?"Turno":i.startsWith("L")?"Libre":i.startsWith("V")?"Vacaciones":i.startsWith("I")?"Incapacidad":i.startsWith("O")?"Otro":i.startsWith("E")?"Teletrabajo":i?"Turno":"Sin marcar"}function Oi(r){const i=String(r||"").toUpperCase();return i.startsWith("T")?"T":i.startsWith("L")?"L":i.startsWith("V")?"V":i.startsWith("I")?"I":i.startsWith("O")?"O":i.startsWith("E")?"E":""}function vv(r,i,s){const u=String(r||"").toUpperCase();if(!u)return"";const d=fr(s);return u==="T"?`T${(i-1)%d.trabajo+1}`:u==="L"?`L${(i-1)%d.libre+1}`:`${u}${i}`}function Tr(r,i){return r.find(s=>s.nombre===i)}function Um(r,i,s,u,d){const p=Tr(r,d);return p&&(i[pv(s,u,p.puestoOperativo||"Puesto Quetzales",d)]||p.modalidad)||"10x5"}function Ma(r,i,s,u,d,p,v=null){const T=Tr(r,d);if(!T)return"";const f=T.puestoOperativo||"Puesto Quetzales",N=jL(s,u,v);return i[Ym(s,u,f,d,p)]??fv(Um(r,i,s,u,d),p,N,s,u)}function hv({roleData:r,personas:i,year:s,month:u,persona:d,dia:p,categoria:v,feriados:T=null}){const f=Tr(i,d),N=(f==null?void 0:f.puestoOperativo)||"Puesto Quetzales",y=Um(i,r,s,u,d),P=Array.from({length:Zd(s,u)},(Q,D)=>D+1),C={};for(const Q of P)C[Q]=Oi(Ma(i,r,s,u,d,Q,T));C[p]=v;const w=Pv({days:P,categorias:C,modalidad:y}),j={};for(const Q of P)j[Ym(s,u,N,d,Q)]=w[Q];return j}function Ih(r,i){const s=fr(i);if(s.administrativo)return null;const u=String(r||"").toUpperCase(),d=/^T(\d+)$/.exec(u);if(d){const v=Number(d[1]);return v>=1&&v<=s.trabajo?v-1:null}const p=/^L(\d+)$/.exec(u);if(p){const v=Number(p[1]);return v>=1&&v<=s.libre?s.trabajo+v-1:null}return null}function gv(r,i){const s=fr(i),u=s.trabajo+s.libre,d=(r%u+u)%u|0;return d<s.trabajo?`T${d+1}`:`L${d-s.trabajo+1}`}function Oh({modalidad:r,desde:i,hasta:s,posInicial:u=0}){const d=fr(r),p=[],v=new Date(s.year,s.month,s.day),T=new Date(i.year,i.month,i.day);let f=0;for(;T<=v;){const N=T.getFullYear(),y=T.getMonth(),P=T.getDate();let C;if(d.administrativo){const w=T.getDay();C=w>=1&&w<=5?`T${w}`:w===6?"L1":"L2"}else C=gv(u+f,r);p.push({year:N,month:y,day:P,valor:C}),T.setDate(T.getDate()+1),f+=1}return p}function Od(r){return String(r).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Fh(r,i,s){if(!r)return null;const u=new RegExp(`^(\\d+)-(\\d+)-${Od(i)}-${Od(s)}-(\\d+)$`);let d=null,p=-1;for(const v of Object.keys(r)){const T=r[v];if(T==null||T==="")continue;const f=u.exec(v);if(!f)continue;const N=Number(f[1]),y=Number(f[2])-1,P=Number(f[3]),C=N*1e4+y*100+P;C>p&&(p=C,d={year:N,month:y,day:P})}return d}function Pv({days:r,categorias:i,modalidad:s}){const u={};let d=null,p=0;return r.forEach(v=>{const T=i[v]||"";if(!T){d=null,p=0,u[v]="";return}T!==d?(d=T,p=1):p+=1,u[v]=vv(T,p,s)}),u}function Fi(r,i){return r.filter(s=>i>=s.inicio&&i<=(s.fin||s.inicio))}function Tl(r){return String((r==null?void 0:r.titulo)||"").trim().toLowerCase()===Di.toLowerCase()}function yv(r){return(r==null?void 0:r.fin)||(r==null?void 0:r.inicio)||""}function zh(r=[],i){return i?r.filter(s=>(s==null?void 0:s.inicio)&&(s.funcionarios||[]).includes(i)).sort((s,u)=>String(s.inicio).localeCompare(String(u.inicio))):[]}const Qh=["proximas","pasadas","todas"];function Km(r,i){return yv(r)<String(i||"")}function Jh(r=[],i,s="proximas"){if(s==="todas")return[...r];const u=s==="pasadas";return r.filter(d=>Km(d,i)===u)}function Bh(r=[],i){let s=0;for(const u of r)Km(u,i)&&(s+=1);return{proximas:r.length-s,pasadas:s,todas:r.length}}const Mv=366;function Yh(r=[]){const i=new Map;for(const s of r||[]){if(!(s!=null&&s.inicio))continue;const u=s.funcionarios||[];if(u.length===0)continue;const d=s.fin||s.inicio;if(d<s.inicio)continue;const p=new Date(`${s.inicio}T00:00:00`),v=new Date(`${d}T00:00:00`);if(Number.isNaN(p.getTime())||Number.isNaN(v.getTime()))continue;const T=Tl(s);let f=0;for(;p<=v&&f<Mv;){const N=Bi(p);for(const y of u){const P=`${y}|${N}`,C=i.get(P);C?C.visit=C.visit||T:i.set(P,{visit:T})}p.setDate(p.getDate()+1),f+=1}}return i}function Gh(r,i,s){return!!r&&r.has(`${i}|${s}`)}function Uh(r,i,s){var u,d;return!!((d=(u=r==null?void 0:r.get)==null?void 0:u.call(r,`${i}|${s}`))!=null&&d.visit)}const Ev=["Puesto Orosi","Puesto Quetzales"];function $m(r,i){return(i||Ev).includes(r)}function Nv(r){return Tv(r)}function Cv(r,i,s){return Gm(r)&&$m(i,s)}function Sv({actividadesPlan:r=[],iso:i,personas:s=[],roleData:u={},year:d,month:p,dia:v,feriados:T=null,puestos:f=[],puestosRequieren:N}){var C;const y=Fi(r,i).filter(Tl),P=new Map;for(const w of y)for(const j of w.funcionarios||[]){const Q=(C=Tr(s,j))==null?void 0:C.puestoOperativo;Q&&(P.has(Q)||P.set(Q,new Set),P.get(Q).add(j))}return f.map(w=>{const j=[...P.get(w)||[]],Q=j.filter(V=>Nv(Ma(s,u,d,p,V,v,T))),D=$m(w,N);return{puesto:w,requiere:D,asignados:j,presentes:Q,critico:D&&Q.length===0,soloRemoto:D&&j.length>0&&Q.length===0}})}function xv({rol:r,tieneActividad:i,tieneVisit:s,puesto:u,puestosRequieren:d=null}){return i?Yi(r)?s?Cv(r,u,d):!1:!0:!1}function bv(r,i,s,u,d,p,v=null,T=null){const f=Tl(r);return(r.funcionarios||[]).filter(N=>{var P;const y=Ma(d,p,s,u,N,i,v);return xv({rol:y,tieneActividad:!0,tieneVisit:f,puesto:(P=Tr(d,N))==null?void 0:P.puestoOperativo,puestosRequieren:T})})}function Vv({onSwipeLeft:r,onSwipeRight:i,threshold:s=60,restraint:u=80,allowedTime:d=600}={}){const p=x.useRef(null);return x.useEffect(()=>{const v=p.current;if(!v)return;let T=0,f=0,N=0,y=!1;const P=w=>{var D;const j=(D=w.changedTouches)==null?void 0:D[0];if(!j)return;const Q=w.target instanceof Element?w.target:null;y=!!(Q!=null&&Q.closest('button, a, input, select, textarea, [role="button"], [data-swipe-ignore], table, .overflow-x-auto, .overflow-auto'))||j.clientX<24||j.clientX>window.innerWidth-24,T=j.clientX,f=j.clientY,N=Date.now()},C=w=>{var Y;const j=(Y=w.changedTouches)==null?void 0:Y[0];if(!j||y)return;const Q=j.clientX-T,D=j.clientY-f;Date.now()-N>d||Math.abs(Q)<s||Math.abs(D)>u||Math.abs(Q)<=Math.abs(D)*1.2||(Q<0?r==null||r():i==null||i())};return v.addEventListener("touchstart",P,{passive:!0}),v.addEventListener("touchend",C,{passive:!0}),()=>{v.removeEventListener("touchstart",P),v.removeEventListener("touchend",C)}},[r,i,s,u,d]),p}const qm="(max-width: 767px)";function Av(){return typeof window>"u"||typeof window.matchMedia!="function"?!1:window.matchMedia(qm).matches}function Hm(){const[r,i]=x.useState(Av);return x.useEffect(()=>{if(typeof window>"u"||typeof window.matchMedia!="function")return;const s=window.matchMedia(qm),u=d=>i(d.matches);return i(s.matches),s.addEventListener?(s.addEventListener("change",u),()=>s.removeEventListener("change",u)):(s.addListener(u),()=>s.removeListener(u))},[]),r}const Wm={2025:[{fecha:"2025-01-01",nombre:"Año Nuevo",obligatorio:!0},{fecha:"2025-04-11",nombre:"Juan Santamaría (trasladado a viernes)",obligatorio:!0},{fecha:"2025-04-17",nombre:"Jueves Santo",obligatorio:!0},{fecha:"2025-04-18",nombre:"Viernes Santo",obligatorio:!0},{fecha:"2025-05-01",nombre:"Día del Trabajo",obligatorio:!0},{fecha:"2025-07-25",nombre:"Anexión del Partido de Nicoya",obligatorio:!1},{fecha:"2025-08-02",nombre:"Virgen de los Ángeles",obligatorio:!0},{fecha:"2025-08-15",nombre:"Día de la Madre",obligatorio:!0},{fecha:"2025-09-15",nombre:"Independencia",obligatorio:!0},{fecha:"2025-12-01",nombre:"Abolición del Ejército",obligatorio:!0},{fecha:"2025-12-25",nombre:"Navidad",obligatorio:!0}],2026:[{fecha:"2026-01-01",nombre:"Año Nuevo",obligatorio:!0},{fecha:"2026-04-02",nombre:"Jueves Santo",obligatorio:!0},{fecha:"2026-04-03",nombre:"Viernes Santo",obligatorio:!0},{fecha:"2026-04-13",nombre:"Juan Santamaría (trasladado a lunes)",obligatorio:!0},{fecha:"2026-05-01",nombre:"Día del Trabajo",obligatorio:!0},{fecha:"2026-07-27",nombre:"Anexión del Partido de Nicoya (trasladado)",obligatorio:!1},{fecha:"2026-08-02",nombre:"Virgen de los Ángeles",obligatorio:!0},{fecha:"2026-08-17",nombre:"Día de la Madre (trasladado a lunes)",obligatorio:!0},{fecha:"2026-09-14",nombre:"Independencia (trasladado a lunes)",obligatorio:!0},{fecha:"2026-11-30",nombre:"Abolición del Ejército (trasladado a lunes)",obligatorio:!0},{fecha:"2026-12-25",nombre:"Navidad",obligatorio:!0}],2027:[{fecha:"2027-01-01",nombre:"Año Nuevo",obligatorio:!0},{fecha:"2027-03-25",nombre:"Jueves Santo",obligatorio:!0},{fecha:"2027-03-26",nombre:"Viernes Santo",obligatorio:!0},{fecha:"2027-04-12",nombre:"Juan Santamaría (trasladado a lunes)",obligatorio:!0},{fecha:"2027-05-01",nombre:"Día del Trabajo",obligatorio:!0},{fecha:"2027-07-26",nombre:"Anexión del Partido de Nicoya (trasladado)",obligatorio:!1},{fecha:"2027-08-02",nombre:"Virgen de los Ángeles",obligatorio:!0},{fecha:"2027-08-16",nombre:"Día de la Madre (trasladado a lunes)",obligatorio:!0},{fecha:"2027-09-13",nombre:"Independencia (trasladado a lunes)",obligatorio:!0},{fecha:"2027-11-29",nombre:"Abolición del Ejército (trasladado a lunes)",obligatorio:!0},{fecha:"2027-12-25",nombre:"Navidad",obligatorio:!0}]};function wv(r,i=!1){const s=Wm[r]||[];return new Set(s.filter(u=>i||u.obligatorio).map(u=>u.fecha))}function Kh(r){return Object.prototype.hasOwnProperty.call(Wm,String(r))}function jv(r,i){return i!=null&&i.aplicarFeriadosEnPrimerDiaLaboral?wv(r,!1):null}function Ll(r){const{reglas:i}=Gt();return x.useMemo(()=>jv(r,i),[r,i])}function vl(r){const i=Number(r)||0;return Number.isInteger(i)?String(i):String(Math.round(i*100)/100)}function Dv(r,i){return(r==null?void 0:r.magnitud)==="horas"?i("reposicion.horasN",{n:vl(r.horas)}):(r==null?void 0:r.magnitud)==="medioDia"?i("modalReposicion.magnitudMedioDia"):i("modalReposicion.magnitudDiaEntero")}function $h(r,i){return(r==null?void 0:r.magnitud)==="horas"?i("reposicion.horasN",{n:vl(r.horas)}):(r==null?void 0:r.magnitud)==="medioDia"?i("reposicion.magnitudCorta.medioDia"):i("reposicion.magnitudCorta.diaEntero")}function Zm(r,i=8){const s=Math.round((Number(r)||0)*100)/100;if(s<=0)return"0 h";const u=s/i;return Number.isInteger(u)?u===1?"1 día":`${u} días`:s===i/2?"½ día":`${vl(s)} h`}function kv({data:r,hj:i,cerrar:s,onModificarRol:u,onReposicion:d,onReponer:p,onEditarFecha:v}){y1(s);const T=wn(),{funcionario:f,iso:N,rol:y,saldo:P=0}=r,C=({onClick:w,tono:j,titulo:Q,desc:D})=>c.jsxs("button",{type:"button",onClick:w,className:`min-h-touch w-full rounded-2xl border px-4 py-3 text-left shadow-sm hover:brightness-95 ${j}`,children:[c.jsx("span",{className:"block text-sm font-semibold",children:Q}),c.jsx("span",{className:"mt-0.5 block text-xs opacity-80",children:D})]});return c.jsx("div",{className:"fixed inset-0 z-[60] flex items-end justify-center bg-black/50 p-0 backdrop-blur-sm md:items-center md:p-4",onClick:w=>{w.target===w.currentTarget&&s()},children:c.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":T("asignacionLibre.titulo"),className:"w-full max-w-lg overflow-hidden rounded-t-3xl bg-white shadow-2xl md:rounded-3xl",children:[c.jsxs("div",{className:"flex items-start justify-between gap-3 border-b border-slate-200 p-5",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"text-lg font-semibold",children:T("asignacionLibre.titulo")}),c.jsx("p",{className:"text-sm text-slate-600",children:T("asignacionLibre.sub",{funcionario:f,fecha:rt(N),rol:Lv(y)})})]}),c.jsx("button",{onClick:s,"aria-label":T("acciones.cerrar"),className:"-mr-1 inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl text-lg font-semibold text-slate-500 hover:bg-slate-100 hover:text-slate-700",children:"✕"})]}),c.jsxs("div",{className:"space-y-2 p-5",children:[c.jsx(C,{onClick:u,tono:"border-emerald-300 bg-emerald-50 text-emerald-950",titulo:T("asignacionLibre.modificarRol"),desc:T("asignacionLibre.modificarRolDesc")}),c.jsx(C,{onClick:d,tono:"border-amber-300 bg-amber-50 text-amber-950",titulo:T("asignacionLibre.reposicion"),desc:T("asignacionLibre.reposicionDesc")}),P>0&&c.jsx(C,{onClick:p,tono:"border-sky-300 bg-sky-50 text-sky-950",titulo:T("asignacionLibre.reponer",{saldo:Zm(P,i)}),desc:T("asignacionLibre.reponerDesc")}),c.jsx(C,{onClick:v,tono:"border-slate-300 bg-slate-50 text-slate-800",titulo:T("asignacionLibre.editarFecha"),desc:T("asignacionLibre.editarFechaDesc")})]}),c.jsx("div",{className:"flex justify-end border-t border-slate-200 bg-slate-50 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]",children:c.jsx("button",{onClick:s,className:"min-h-touch rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50",children:T("acciones.cancelar")})})]})})}function Rv({participantes:r=[],onChange:i,inputClass:s}){const u=(v,T,f)=>{i(r.map((N,y)=>y===v?{...N,[T]:f}:N))},d=()=>i([...r,{nombre:"",contacto:""}]),p=v=>i(r.filter((T,f)=>f!==v));return c.jsxs("section",{className:"mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-3",children:[c.jsxs("div",{className:"flex items-center justify-between gap-3",children:[c.jsxs("div",{children:[c.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-slate-600",children:"Otros participantes"}),c.jsx("p",{className:"mt-1 text-xs text-slate-500",children:"Personas, organizaciones o grupos que no figuran en el rol institucional."})]}),c.jsx("button",{type:"button",onClick:d,className:"inline-flex min-h-touch shrink-0 items-center rounded-xl border border-emerald-700 bg-white px-3 text-xs font-bold text-emerald-800 hover:bg-emerald-50",children:"+ Agregar"})]}),r.length===0?c.jsx("p",{className:"mt-3 text-xs text-slate-500",children:"Sin participantes externos registrados."}):c.jsx("div",{className:"mt-3 space-y-2",children:r.map((v,T)=>c.jsxs("div",{className:"grid gap-2 rounded-xl border border-slate-200 bg-white p-2 md:grid-cols-[1fr_1fr_auto]",children:[c.jsx("input",{className:s,value:v.nombre||"",onChange:f=>u(T,"nombre",f.target.value),placeholder:"Nombre, sigla o grupo","aria-label":`Nombre de otro participante ${T+1}`}),c.jsx("input",{className:s,value:v.contacto||"",onChange:f=>u(T,"contacto",f.target.value),placeholder:"Contacto: teléfono o correo","aria-label":`Contacto de otro participante ${T+1}`}),c.jsx("button",{type:"button",onClick:()=>p(T),className:"inline-flex min-h-touch items-center rounded-xl border border-red-300 px-3 text-xs font-bold text-red-800 hover:bg-red-50",children:"Eliminar"})]},`${T}-${v.nombre}`))})]})}function tl({valor:r,personas:i,cerrar:s,guardar:u,eliminar:d,actividadesPlan:p=[]}){var sn,qn,an;const{puestos:v}=Gt(),T=x.useMemo(()=>v.map(k=>k.nombre),[v]),{ref:f,titleId:N}=Om({onClose:s}),y=wn(),{roleData:P={},setRoleData:C,reposiciones:w=[],setReposiciones:j,reglas:Q}=Gt(),D=(Q==null?void 0:Q.horasJornada)??Pn,[V,Y]=x.useState(()=>({...r,categoria:r.categoria||"Otra actividad",horaInicio:r.horaInicio||"08:00",horaFin:r.horaFin||"16:00",funcionarios:r.funcionarios||[],otrosParticipantes:r.otrosParticipantes||[],observaciones:r.observaciones||""})),[te,Z]=x.useState(null),[pe,ie]=x.useState(!1),ee=(k,Ne)=>Y(we=>({...we,[k]:Ne})),Te=Number((sn=V.inicio)==null?void 0:sn.slice(0,4)),le=Number((qn=V.inicio)==null?void 0:qn.slice(5,7))-1,ue=Number((an=V.inicio)==null?void 0:an.slice(8,10)),Ee=Ll(Te),ge=k=>V.inicio&&Number.isFinite(Te)?Ma(i,P,Te,le,k,ue,Ee):"",ye=k=>{const Ne=ge(k);return Ne&&!Yi(Ne)},Ve=k=>kT(w,k,D),se="w-full min-h-touch rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100",Le=T.map(k=>({puesto:k,items:i.filter(Ne=>Ne.puestoOperativo===k)})),fe=x.useMemo(()=>QT(T),[T]),z=fe.includes(V.lugar)?V.lugar:"Otro",H=p.some(k=>k.id===V.id),G=V.unDia?V.inicio:V.fin||V.inicio,M=k=>k.id!==V.id&&k.inicio<=G&&(k.fin||k.inicio)>=V.inicio,R=k=>p.filter(Ne=>M(Ne)&&(Ne.funcionarios||[]).includes(k)),oe=k=>{V.funcionarios.includes(k)||ee("funcionarios",[...V.funcionarios,k])},me=k=>ee("funcionarios",V.funcionarios.filter(Ne=>Ne!==k)),B=k=>{if(V.funcionarios.includes(k))return me(k);if(ye(k)){Z({funcionario:k,iso:V.inicio,rol:ge(k),categoria:Oi(ge(k)),saldo:Ve(k)});return}return oe(k)},X=()=>{const{funcionario:k}=te;C&&C(Ne=>({...Ne,...hv({roleData:Ne,personas:i,year:Te,month:le,persona:k,dia:ue,categoria:"T",feriados:Ee})})),oe(k),Z(null)},Pe=()=>{const{funcionario:k,categoria:Ne}=te;j&&j(we=>[IT({reposiciones:we,funcionario:k,fecha:V.inicio,categoria:Ne,detalle:V.titulo||""}),...we]),oe(k),Z(null)},he=()=>{const{funcionario:k}=te;if(j){const Ne={id:`c${Date.now()}`,fecha:V.inicio,magnitud:"diaEntero",horas:0};j(we=>OT(we,k,Ne,D))}me(k),Z(null)},Me=y(H?"modalActividad.editar":"modalActividad.agregar"),Je=()=>u({...V,categoria:"Otra actividad",horaInicio:V.horaInicio||"08:00",horaFin:V.horaFin||"16:00",otrosParticipantes:(V.otrosParticipantes||[]).filter(k=>{var Ne;return(Ne=k.nombre)==null?void 0:Ne.trim()}).map(k=>({nombre:k.nombre.trim(),contacto:(k.contacto||"").trim()}))});return c.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-0 backdrop-blur-sm md:items-center md:p-4",onClick:k=>{k.target===k.currentTarget&&s()},children:[c.jsxs("div",{ref:f,role:"dialog","aria-modal":"true","aria-labelledby":N,tabIndex:-1,className:"max-h-[100dvh] w-full max-w-4xl overflow-hidden rounded-none bg-white shadow-2xl outline-none md:max-h-[94dvh] md:rounded-3xl",children:[c.jsxs("div",{className:"flex items-start justify-between gap-3 border-b border-slate-200 p-5",children:[c.jsxs("div",{children:[c.jsx("h3",{id:N,className:"text-lg font-semibold",children:Me}),c.jsx("p",{className:"text-sm text-slate-600",children:y("modalActividad.sub")})]}),c.jsx("button",{onClick:s,"aria-label":y("acciones.cerrar"),className:"-mr-1 inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl text-lg font-semibold text-slate-500 hover:bg-slate-100 hover:text-slate-700",children:"✕"})]}),c.jsxs("div",{className:"max-h-[72vh] overflow-y-auto p-5",children:[V.funcionarios.filter(k=>ye(k)).length>0&&c.jsxs("div",{className:"mb-4 rounded-2xl border border-amber-300 bg-amber-50 p-3",children:[c.jsx("p",{className:"text-xs font-bold uppercase tracking-wider text-amber-800",children:y("modalActividad.libresAsignados")}),c.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:V.funcionarios.filter(k=>ye(k)).map(k=>c.jsxs("button",{type:"button",onClick:()=>Z({funcionario:k,iso:V.inicio,rol:ge(k),categoria:Oi(ge(k)),saldo:Ve(k)}),className:"inline-flex min-h-touch items-center gap-1 rounded-xl border border-amber-400 bg-white px-3 text-xs font-bold text-amber-900 hover:bg-amber-100",children:[k," · ",y("modalActividad.resolver")]},k))})]}),c.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[c.jsxs("label",{className:"md:col-span-2",children:[c.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:y("modalActividad.titulo")}),c.jsxs("div",{className:"grid gap-2 md:grid-cols-[260px_1fr]",children:[c.jsxs("select",{className:se,value:V.titulo===Di?Di:"Otra",onChange:k=>ee("titulo",k.target.value==="Otra"?"":k.target.value),children:[BT.map(k=>c.jsx("option",{value:k,children:k},k)),c.jsx("option",{value:"Otra",children:y("modalActividad.otra")})]}),c.jsx("input",{className:se,value:V.titulo,onChange:k=>ee("titulo",k.target.value),placeholder:y("modalActividad.placeholderTitulo")})]})]}),c.jsxs("label",{children:[c.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:"Categoría"}),c.jsx("input",{className:se+" bg-slate-100",value:"Otra actividad",readOnly:!0})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[c.jsxs("label",{children:[c.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:"Hora inicio"}),c.jsx("input",{type:"time",className:se,value:V.horaInicio,onChange:k=>ee("horaInicio",k.target.value)})]}),c.jsxs("label",{children:[c.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:"Hora final"}),c.jsx("input",{type:"time",className:se,value:V.horaFin,onChange:k=>ee("horaFin",k.target.value)})]})]}),c.jsxs("label",{children:[c.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:y("modalActividad.fechaInicio")}),c.jsx("input",{type:"date",className:se+" [color-scheme:light] dark:[color-scheme:dark]",value:V.inicio,onChange:k=>ee("inicio",k.target.value)})]}),c.jsxs("label",{children:[c.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:y("modalActividad.fechaFinal")}),c.jsx("input",{type:"date",className:se+" [color-scheme:light] dark:[color-scheme:dark]",value:V.unDia?V.inicio:V.fin,disabled:V.unDia,onChange:k=>ee("fin",k.target.value)})]}),c.jsxs("label",{className:"flex items-center gap-2 rounded-xl border border-slate-300 p-3 text-sm font-semibold",children:[c.jsx("input",{type:"checkbox",checked:V.unDia,onChange:k=>Y(Ne=>({...Ne,unDia:k.target.checked,fin:k.target.checked?Ne.inicio:Ne.fin}))}),y("modalActividad.unDia")]}),c.jsxs("label",{className:"flex items-center gap-2 rounded-xl border border-orange-300 bg-orange-50 p-3 text-sm font-semibold text-orange-950",children:[c.jsx("input",{type:"checkbox",checked:V.viatico,onChange:k=>ee("viatico",k.target.checked)}),y("modalActividad.requiereViatico")]}),c.jsxs("label",{className:"md:col-span-2",children:[c.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:y("modalActividad.lugar")}),c.jsxs("div",{className:"grid gap-2",children:[c.jsxs("select",{className:se,value:z,onChange:k=>ee("lugar",k.target.value==="Otro"?"":k.target.value),children:[fe.map(k=>c.jsx("option",{value:k,children:k},k)),c.jsx("option",{value:"Otro",children:y("modalActividad.otro")})]}),z==="Otro"&&c.jsx("input",{className:se,value:V.lugar,onChange:k=>ee("lugar",k.target.value),placeholder:y("modalActividad.placeholderLugar")})]})]})]}),c.jsxs("div",{className:"mt-5",children:[c.jsxs("div",{className:"mb-2 flex flex-wrap items-center justify-between gap-2",children:[c.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-slate-500",children:y("modalActividad.participantes")}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsxs("label",{className:"flex items-center gap-1.5 rounded-full border border-sky-300 bg-sky-50 px-2.5 py-1 text-[11px] font-bold text-sky-900",children:[c.jsx("input",{type:"checkbox",checked:pe,onChange:k=>ie(k.target.checked)}),y("modalActividad.soloSaldo")]}),c.jsx(St,{className:"border-emerald-200 bg-emerald-100 text-emerald-900",children:y("modalActividad.seleccionados",{n:V.funcionarios.length})})]})]}),c.jsx("div",{className:"grid gap-3 md:grid-cols-3",children:Le.map(k=>{const Ne=pe?k.items.filter(we=>Ve(we.nombre)>0):k.items;return pe&&Ne.length===0?null:c.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-slate-50 p-3",children:[c.jsx("div",{className:"mb-2 text-xs font-bold uppercase tracking-wider text-slate-500",children:k.puesto}),c.jsx("div",{className:"space-y-1.5",children:Ne.map(we=>{const jn=R(we.nombre),Dn=V.funcionarios.includes(we.nombre);return c.jsxs("div",{className:`rounded-xl border px-2 py-2 text-xs font-bold ${Dn?"border-emerald-300 bg-emerald-100 text-emerald-950":jn.length?"border-yellow-300 bg-yellow-50 text-yellow-950":"border-slate-200 bg-white text-slate-700"}`,children:[c.jsxs("label",{className:"flex items-center gap-2",children:[c.jsx("input",{type:"checkbox",checked:Dn,onChange:()=>B(we.nombre)}),we.nombre]}),(ye(we.nombre)||Ve(we.nombre)>0)&&c.jsxs("div",{className:"mt-1 flex flex-wrap gap-1",children:[!Dn&&ye(we.nombre)&&c.jsx("span",{className:"rounded-full border border-amber-300 bg-amber-100 px-1.5 py-0.5 text-[10px] font-bold text-amber-900",children:y("modalActividad.diaLibre")}),Ve(we.nombre)>0&&c.jsx("span",{className:"rounded-full border border-sky-300 bg-sky-100 px-1.5 py-0.5 text-[10px] font-bold text-sky-900",children:y("modalActividad.saldoFavorMonto",{saldo:Zm(Ve(we.nombre),D)})})]}),jn.length>0&&c.jsxs("div",{className:"mt-2 rounded-lg border border-yellow-300 bg-yellow-100 p-2 text-[11px] leading-snug text-yellow-950",children:[c.jsx("div",{className:"font-bold",children:y("modalActividad.avisoTraslape")}),c.jsx("div",{className:"mt-1 font-bold",children:jn.map(Vt=>Vt.titulo).join(" · ")}),c.jsx("button",{type:"button",onClick:()=>oe(we.nombre),className:"mt-2 inline-flex min-h-touch items-center rounded-lg bg-yellow-700 px-3 text-[10px] font-bold text-white hover:bg-yellow-800",children:y("modalActividad.agregarAunAsi")})]})]},we.id)})})]},k.puesto)})})]}),c.jsx(Rv,{participantes:V.otrosParticipantes,onChange:k=>ee("otrosParticipantes",k),inputClass:se}),c.jsxs("label",{className:"mt-5 block",children:[c.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:y("modalActividad.obs")}),c.jsx("textarea",{className:`${se} min-h-24`,value:V.observaciones,onChange:k=>ee("observaciones",k.target.value),placeholder:y("modalActividad.placeholderObs")})]})]}),c.jsxs("div",{className:"flex flex-wrap justify-between gap-2 border-t border-slate-200 bg-slate-50 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]",children:[c.jsx("div",{children:H&&c.jsx("button",{onClick:()=>d(V.id),className:"min-h-touch rounded-xl border border-red-300 bg-white px-4 py-2 text-sm font-semibold text-red-800 hover:bg-red-50",children:y("acciones.eliminar")})}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("button",{onClick:s,className:"min-h-touch rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50",children:y("acciones.cancelar")}),c.jsx("button",{onClick:Je,className:"min-h-touch rounded-xl bg-emerald-800 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700",children:y("modalActividad.guardarActividad")})]})]})]}),te&&c.jsx(kv,{data:te,hj:D,cerrar:()=>Z(null),onModificarRol:X,onReposicion:Pe,onReponer:he,onEditarFecha:()=>Z(null)})]})}function _v(r,i,s){if(!Array.isArray(r)||!i||i.id==null||r.some(p=>(p==null?void 0:p.id)===i.id))return r;const u=Number.isInteger(s)?s:r.length,d=Math.max(0,Math.min(u,r.length));return[...r.slice(0,d),i,...r.slice(d)]}function Xm(r,i){const s=wn(),{conDeshacer:u,exito:d}=tm();return x.useCallback(p=>{const v=r||[],T=v.findIndex(y=>y.id===p);if(T<0)return;const f=v[T],N=String(f.titulo||"").trim()||s("actividad.sinTitulo");i(y=>y.filter(P=>P.id!==p)),u(s("actividad.eliminada",{titulo:N}),()=>{i(y=>_v(y,f,T)),d(s("actividad.restaurada",{titulo:N}))},{detalle:s("actividad.eliminadaDetalle")})},[r,i,u,d,s])}function Vi({label:r}){const[i,...s]=String(r).split(" ");return s.length===0?r:c.jsxs(c.Fragment,{children:[i,c.jsx("br",{className:"sm:hidden"}),c.jsx("span",{className:"hidden sm:inline",children:" "}),s.join(" ")]})}function Us({label:r,n:i,children:s,defaultOpen:u=!1}){const[d,p]=x.useState(u);return c.jsxs("div",{children:[c.jsxs("button",{type:"button",onClick:()=>p(v=>!v),"aria-expanded":d,className:"mb-1.5 flex min-h-touch w-full items-center gap-2 text-left active:scale-95",children:[c.jsx(We,{name:d?"chevronDown":"chevronRight",size:14,className:"shrink-0 text-ink-subtle"}),c.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider text-ink-muted",children:r}),c.jsx("span",{className:"rounded-full bg-surface-alt px-2 py-0.5 text-[10px] font-semibold text-ink-muted",children:i}),c.jsx("span",{className:"h-px flex-1 bg-line/50"})]}),d&&s]})}function Ks({trabajada:r,reposicion:i,t:s}){return!r&&!i?null:c.jsxs(c.Fragment,{children:[r&&c.jsxs(St,{className:"border-amber-300 bg-amber-100 text-amber-900",children:["⚑ ",r.folio," · ",Dv(r,s)," · ",s(`reposicion.estado.${r.estadoCalc||"Pendiente"}`).toLowerCase()]}),i&&c.jsxs(St,{className:"border-sky-300 bg-sky-100 text-sky-900",children:["⟲ ",i.folio," · ",s("reposicion.marca.reposicionDe",{fecha:rt(i.fecha)})]})]})}function Iv({diaVista:r,setDiaVista:i,personas:s,actividadesPlan:u,setActividadesPlan:d,roleData:p,reposiciones:v=[],hj:T}){const f=wn(),N=Hm(),{puestos:y,reglas:P}=Gt(),C=P==null?void 0:P.puestosRequierenVisitantesDiario,w=x.useMemo(()=>y.map(b=>b.nombre),[y]),{trabajadas:j,reposiciones:Q}=AT(v,T),D=b=>({trabajada:j[`${b}|${r}`],reposicion:Q[`${b}|${r}`]}),[V,Y]=x.useState(null),[te,Z]=x.useState("general"),[pe,ie]=x.useState(""),[ee,Te,le]=r.split("-").map(Number),ue=Te-1,Ee=Ll(ee),ge=s.filter(b=>b.estado!=="Inactivo"),ye=[0,6].includes(new Date(r+"T12:00:00").getDay()),Ve=h1[new Date(r+"T12:00:00").getDay()],se=ge.map(b=>{const O=Ma(s,p,ee,ue,b.nombre,le,Ee),ne=Oi(O),xe=Yi(O),yn=Gm(O),Mn=Fi(u,r).filter(ot=>(ot.funcionarios||[]).includes(b.nombre));return{...b,rol:O,cat:ne,enTurno:xe,enTeletrabajo:yn,acts:Mn,tieneActividad:Mn.length>0,tieneViatico:Mn.some(ot=>ot.viatico)}}),Le=se.filter(b=>b.enTurno&&b.tieneActividad),fe=se.filter(b=>b.enTurno&&!b.tieneActividad),z=se.filter(b=>!b.enTurno),H=se.filter(b=>b.tieneViatico),G=(b,O)=>String(b||"").localeCompare(String(O||""),"es-CR",{sensitivity:"base"}),M=new Map(ge.map(b=>[b.nombre,b])),R=Fi(u,r).map(b=>({...b,funcionarios:[...b.funcionarios||[]].sort(G)})).sort((b,O)=>G(b.funcionarios[0]||"￿",O.funcionarios[0]||"￿")||G(b.titulo,O.titulo)),oe=[...new Set(R.flatMap(b=>b.funcionarios))].sort(G),me=[...new Set(oe.map(b=>{var O;return(O=M.get(b))==null?void 0:O.puestoOperativo}).filter(Boolean))].sort(G),B=new Set(se.filter(b=>b.enTeletrabajo).map(b=>b.nombre)),X=te==="funcionario"?oe:te==="puesto"?me:te==="trabajo"?[f("dia.filtroActividades.presencial"),f("dia.filtroActividades.teletrabajo")]:[],Pe=X.includes(pe)?pe:X[0]||"",he=R.filter(b=>{if(te==="trabajo"){const O=b.funcionarios.some(ne=>B.has(ne));return Pe===f("dia.filtroActividades.teletrabajo")?O:!O}return te==="funcionario"?b.funcionarios.includes(Pe):te==="puesto"?b.funcionarios.some(O=>{var ne;return((ne=M.get(O))==null?void 0:ne.puestoOperativo)===Pe}):!0}),Me=x.useMemo(()=>Sv({actividadesPlan:u,iso:r,personas:s,roleData:p,year:ee,month:ue,dia:le,feriados:Ee,puestos:w,puestosRequieren:C}),[u,r,s,p,ee,ue,le,Ee,w,C]),Je=x.useMemo(()=>new Map(Me.map(b=>[b.puesto,b])),[Me]),sn=x.useMemo(()=>Me.filter(b=>b.critico),[Me]),qn=w.map(b=>{const O=se.filter(xe=>(xe.puestoOperativo||"")===b),ne=O.filter(xe=>xe.enTurno);return{puesto:b,fuera:O.length-ne.length,turno:ne.length,conActividad:ne.filter(xe=>xe.tieneActividad).length,sinActividad:ne.filter(xe=>!xe.tieneActividad).length,teletrabajo:ne.filter(xe=>xe.enTeletrabajo).length}}),an=qn.reduce((b,O)=>({fuera:b.fuera+O.fuera,turno:b.turno+O.turno,conActividad:b.conActividad+O.conActividad,sinActividad:b.sinActividad+O.sinActividad,teletrabajo:b.teletrabajo+O.teletrabajo}),{fuera:0,turno:0,conActividad:0,sinActividad:0,teletrabajo:0}),k={L:"Libre",V:"Vacaciones",I:"Incapacidad",O:"Otro","":"Sin marcar"},Ne={L:"border-amber-700 bg-amber-700 text-white",V:"border-sky-700 bg-sky-700 text-white",I:"border-red-700 bg-red-700 text-white",O:"border-violet-700 bg-violet-700 text-white","":"border-slate-500 bg-slate-500 text-white"},we=z.reduce((b,O)=>{const ne=O.cat||"";return b[ne]||(b[ne]=[]),b[ne].push(O),b},{}),jn=b=>{const O=w.map(xe=>({key:xe,label:xe.replace("Puesto ",""),items:b.filter(yn=>(yn.puestoOperativo||"")===xe)})),ne=b.filter(xe=>!w.includes(xe.puestoOperativo||""));return ne.length&&O.push({key:"__sin__",label:f("funcionarios.sinPuesto"),items:ne}),O.filter(xe=>xe.items.length>0)},Dn=b=>{const O=new Date(r+"T12:00:00");O.setDate(O.getDate()+b),i(`${O.getFullYear()}-${Kn(O.getMonth()+1)}-${Kn(O.getDate())}`)},Vt=b=>{if(!b.titulo.trim())return;const O={...b,fin:b.unDia?b.inicio:b.fin||b.inicio};O.fin<O.inicio&&(O.fin=O.inicio),d(ne=>ne.some(xe=>xe.id===O.id)?ne.map(xe=>xe.id===O.id?O:xe):[...ne,O]),Y(null)},At=Xm(u,d),it=b=>{Y(null),At(b)},Kt=(b=[],O="")=>({id:`a${Date.now()}`,titulo:"",inicio:r,fin:r,unDia:!0,funcionarios:b,lugar:O,observaciones:"",viatico:!1}),Lr=Vv({onSwipeLeft:()=>Dn(1),onSwipeRight:()=>Dn(-1)}),vr=V&&u.some(b=>b.id===V.id)?f("dia.editarActividad",{defaultValue:"Editar actividad"}):f("dia.nuevaActividad",{defaultValue:"Nueva actividad"}),Ea=V?c.jsx(tl,{valor:V,personas:ge,cerrar:()=>Y(null),guardar:Vt,eliminar:it,actividadesPlan:u}):null;return c.jsxs("section",{ref:Lr,className:"space-y-4",children:[c.jsxs("div",{className:"flex items-center gap-2 rounded-lg border border-line bg-surface p-2 sm:gap-3 sm:p-3",children:[c.jsx("button",{onClick:()=>Dn(-1),"aria-label":f("dia.diaAnterior"),className:"inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl border border-line bg-surface text-ink-muted transition-colors hover:bg-surface-alt active:scale-95",children:c.jsx(We,{name:"chevronLeft",size:20})}),c.jsxs("div",{className:"flex min-w-0 flex-1 flex-col items-center gap-0.5",children:[c.jsxs("span",{className:"truncate text-[10px] font-semibold uppercase tracking-wider text-ink-muted sm:text-xs",children:[Ve," · ",Rm[ue]," ",ee]}),c.jsx("input",{type:"date",value:r,onChange:b=>b.target.value&&i(b.target.value),"aria-label":f("dia.seleccionarFecha"),className:"min-h-touch w-full max-w-[13rem] rounded-xl border border-line bg-surface px-2 py-1 text-center text-sm font-semibold text-ink outline-none focus:border-brand [color-scheme:light] dark:[color-scheme:dark]"})]}),c.jsx("button",{onClick:()=>Dn(1),"aria-label":f("dia.diaSiguiente"),className:"inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl border border-line bg-surface text-ink-muted transition-colors hover:bg-surface-alt active:scale-95",children:c.jsx(We,{name:"chevronRight",size:20})})]}),c.jsxs("div",{className:"grid gap-4 md:grid-cols-[minmax(19rem,0.85fr)_minmax(0,1.25fr)] md:items-start xl:grid-cols-[minmax(24rem,0.8fr)_minmax(0,1.4fr)]",children:[c.jsxs(ha,{title:f("dia.porPuesto"),icon:"📍",children:[sn.length>0&&c.jsxs("div",{role:"alert",className:"mb-3 rounded-xl border border-critical bg-critical-soft p-3",children:[c.jsxs("p",{className:"flex items-center gap-2 text-sm font-bold text-critical-fg",children:[c.jsx(We,{name:"danger",size:16}),f("dia.coberturaCritica",{n:sn.length})]}),c.jsx("ul",{className:"mt-1 space-y-0.5 text-xs font-semibold text-critical-fg",children:sn.map(b=>c.jsx("li",{children:b.soloRemoto?f("dia.coberturaCriticaRemoto",{puesto:b.puesto.replace("Puesto ",""),n:b.asignados.length}):f("dia.coberturaCriticaSinNadie",{puesto:b.puesto.replace("Puesto ","")})},b.puesto))}),c.jsx("p",{className:"mt-1 text-[11px] font-medium text-critical-fg opacity-90",children:f("dia.coberturaCriticaAyuda")})]}),c.jsx("div",{className:"overflow-hidden rounded-lg border border-line",children:c.jsxs("table",{className:"w-full table-fixed border-collapse text-sm",children:[c.jsx("thead",{className:"bg-surface-alt text-[9px] uppercase leading-[1.15] tracking-tight text-ink-muted sm:text-[11px] sm:tracking-wide",children:c.jsxs("tr",{children:[c.jsx("th",{scope:"col",className:"w-[26%] px-1.5 py-2 text-left sm:px-3 sm:py-3",children:f("dia.th.puesto")}),c.jsx("th",{scope:"col",className:"px-0 py-2 text-center sm:px-3 sm:py-3",children:c.jsx(Vi,{label:f("dia.th.fuera")})}),c.jsx("th",{scope:"col",className:"px-0 py-2 text-center sm:px-3 sm:py-3",children:c.jsx(Vi,{label:f("dia.th.enTurno")})}),c.jsx("th",{scope:"col",className:"px-0 py-2 text-center sm:px-3 sm:py-3",children:c.jsx(Vi,{label:f("dia.th.conActividad")})}),c.jsx("th",{scope:"col",className:"px-0 py-2 text-center sm:px-3 sm:py-3",children:c.jsx(Vi,{label:f("dia.th.sinActividad")})})]})}),c.jsx("tbody",{className:"divide-y divide-line",children:qn.map(({puesto:b,fuera:O,turno:ne,conActividad:xe,sinActividad:yn})=>{var Mn,ot;return c.jsxs("tr",{className:"hover:bg-surface-alt",children:[c.jsxs("th",{scope:"row",className:`px-1.5 py-2 text-left text-[11px] font-semibold sm:px-3 sm:py-3 sm:text-sm ${(Mn=Je.get(b))!=null&&Mn.critico?"border-l-4 border-l-critical bg-critical-soft/40 font-bold text-critical-fg":"text-ink"}`,children:[b.replace("Puesto ",""),((ot=Je.get(b))==null?void 0:ot.critico)&&c.jsxs("span",{className:"sr-only",children:[" ",f("dia.coberturaCriticaAria",{puesto:b.replace("Puesto ","")})]})]}),c.jsx("td",{className:`px-1 py-2 text-center text-base font-semibold sm:px-3 sm:py-3 sm:text-lg ${O>0?"text-ink-muted":"text-ink-subtle"}`,children:O}),c.jsx("td",{className:"px-1 py-2 text-center text-base font-semibold text-ok sm:px-3 sm:py-3 sm:text-lg",children:ne}),c.jsx("td",{className:"px-1 py-2 text-center text-base font-semibold text-info sm:px-3 sm:py-3 sm:text-lg",children:xe}),c.jsx("td",{className:`px-1 py-2 text-center text-base font-semibold sm:px-3 sm:py-3 sm:text-lg ${yn>0?"text-warning":"text-ink-subtle"}`,children:yn})]},b)})}),c.jsx("tfoot",{children:c.jsxs("tr",{className:"border-t-2 border-line-strong bg-surface-alt",children:[c.jsx("th",{scope:"row",className:"px-1.5 py-2 text-left text-[11px] font-bold text-ink sm:px-3 sm:py-3 sm:text-sm",children:f("dia.th.total")}),c.jsx("td",{className:"px-1 py-2 text-center text-base font-bold text-ink-muted sm:px-3 sm:py-3 sm:text-lg",children:an.fuera}),c.jsx("td",{className:"px-1 py-2 text-center text-base font-bold text-ok sm:px-3 sm:py-3 sm:text-lg",children:an.turno}),c.jsx("td",{className:"px-1 py-2 text-center text-base font-bold text-info sm:px-3 sm:py-3 sm:text-lg",children:an.conActividad}),c.jsx("td",{className:`px-1 py-2 text-center text-base font-bold sm:px-3 sm:py-3 sm:text-lg ${an.sinActividad>0?"text-warning":"text-ink-subtle"}`,children:an.sinActividad})]})})]})}),an.teletrabajo>0&&c.jsx("p",{className:"mt-2 rounded-xl border border-cyan-300 bg-cyan-50 p-2 text-xs font-semibold text-cyan-950",children:f("dia.teletrabajoResumen",{n:an.teletrabajo})})]}),c.jsxs(ha,{title:f("dia.actividadesTituloCorto",{n:R.length}),ariaLabel:f("dia.actividadesTitulo",{n:R.length}),icon:"🗓️",collapsible:!0,action:c.jsxs("button",{id:"dia-boton-nueva-actividad",onClick:()=>Y(Kt()),className:"inline-flex min-h-touch items-center gap-1 rounded-xl bg-emerald-800 px-3 py-2 text-xs font-semibold text-white transition-all hover:bg-emerald-700 active:scale-95 active:brightness-90",children:[c.jsx(We,{name:"plus",size:14}),f("dia.nuevaCorta")]}),children:[c.jsxs("div",{className:"mb-4 rounded-xl border border-line bg-surface-inset p-3",children:[c.jsx("div",{className:"mb-2 text-xs font-bold uppercase tracking-wide text-ink-muted",children:f("dia.filtroActividades.mostrar")}),c.jsx("div",{role:"group","aria-label":f("dia.filtroActividades.aria"),className:"grid grid-cols-2 gap-1 rounded-xl bg-surface-alt p-1 sm:grid-cols-4",children:[["general",f("dia.filtroActividades.general")],["trabajo",f("dia.filtroActividades.trabajo")],["funcionario",f("dia.filtroActividades.funcionario")],["puesto",f("dia.filtroActividades.puesto")]].map(([b,O])=>c.jsx("button",{type:"button","aria-pressed":te===b,onClick:()=>{Z(b),ie("")},className:`min-h-touch rounded-lg px-2 py-2 text-xs font-semibold transition-colors sm:text-sm ${te===b?"bg-surface text-brand shadow-sm":"text-ink-muted hover:bg-surface hover:text-ink"}`,children:O},b))}),te!=="general"&&c.jsxs("label",{className:"mt-3 block text-xs font-semibold text-ink-muted",children:[f(te==="funcionario"?"dia.filtroActividades.seleccionarFuncionario":"dia.filtroActividades.seleccionarPuesto"),c.jsx("select",{value:Pe,onChange:b=>ie(b.target.value),className:"mt-1 min-h-touch w-full rounded-xl border border-line bg-surface px-3 text-sm font-semibold text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20",children:X.map(b=>c.jsx("option",{value:b,children:te==="puesto"?b.replace("Puesto ",""):b},b))})]}),c.jsx("div",{"aria-live":"polite",className:"mt-2 text-xs text-ink-muted",children:f("dia.filtroActividades.resultados",{n:he.length,total:R.length})})]}),he.length===0?c.jsx("div",{className:"rounded-xl border border-dashed border-line p-6 text-center text-sm text-ink-muted",children:f("dia.sinActividades")}):c.jsx("div",{className:"space-y-3",children:he.map(b=>{const O=bv(b,le,ee,ue,s,p,Ee,C);return c.jsxs("div",{"data-actividad-id":b.id,className:`rounded-lg p-4 ${O.length?"border-l-4 border-red-600 bg-surface":b.viatico?"border border-viatico/40 bg-viatico-soft":"border border-ok/40 bg-ok-soft"}`,children:[c.jsxs("div",{className:"flex items-start justify-between gap-2",children:[c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsx("div",{className:"break-words font-semibold text-ink",children:b.titulo}),b.lugar&&c.jsxs("div",{className:"mt-0.5 text-xs text-ink-muted",children:["📍 ",b.lugar]}),b.inicio!==(b.fin||b.inicio)&&c.jsxs("div",{className:"mt-0.5 text-xs text-ink-muted",children:[rt(b.inicio)," → ",rt(b.fin)]})]}),c.jsx("button",{onClick:()=>Y({...b}),className:"inline-flex min-h-touch shrink-0 items-center rounded-lg border border-line bg-surface px-3 text-xs font-semibold text-ink transition-all hover:bg-surface-alt active:scale-95",children:f("acciones.editar")})]}),(b.viatico||O.length>0)&&c.jsxs("div",{className:"mt-1.5 flex flex-wrap items-center gap-1.5",children:[b.viatico&&c.jsx(St,{className:"border-orange-300 bg-orange-100 text-orange-900",children:f("dia.viaticoBadge")}),O.length>0&&c.jsx(St,{className:"border-red-300 bg-red-100 text-red-900",children:f("dia.conflictosBadge",{n:O.length,plural:Md(O.length)})})]}),b.funcionarios.length>0&&c.jsx("div",{className:"mt-2.5 flex flex-wrap gap-1",children:b.funcionarios.map(ne=>c.jsxs("span",{title:B.has(ne)?f("dia.teletrabajoBadge"):void 0,className:`rounded-full border px-2 py-0.5 text-[11px] font-semibold ${O.includes(ne)?"border-red-400 bg-surface text-critical":B.has(ne)?"border-cyan-500 bg-surface text-cyan-800":"border-ok/50 bg-surface text-ok-fg"}`,children:[ne,O.includes(ne)?" ⚠":"",!O.includes(ne)&&B.has(ne)?" ⌂":""]},ne))})]},b.id)})})]})]}),c.jsxs("div",{className:"grid gap-4 xl:grid-cols-2 xl:items-start",children:[c.jsx(ha,{title:f("dia.enTurnoConActTitulo",{n:Le.length}),icon:"✅",collapsible:!0,defaultOpen:!1,children:Le.length===0?c.jsx("p",{className:"text-sm text-ink-muted",children:f("dia.enTurnoConActVacio")}):c.jsx("div",{className:"space-y-4",children:jn(Le).map(b=>c.jsx(Us,{label:b.label,n:b.items.length,children:c.jsx("div",{className:"divide-y divide-line/50",children:b.items.map(O=>c.jsxs("div",{className:"flex items-start gap-3 py-3",children:[c.jsx(bi,{name:O.nombre}),c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsxs("div",{className:"flex flex-wrap items-center gap-1.5",children:[c.jsx("span",{className:"break-words text-sm font-semibold text-ink",children:O.nombre}),c.jsx(St,{className:_d(O.rol,ye),children:O.rol}),O.tieneViatico&&c.jsx(St,{className:"border-orange-600 bg-orange-600 text-white",children:f("dia.viaticoBadge")}),c.jsx(Ks,{...D(O.nombre),t:f})]}),c.jsx("div",{className:"mt-1.5 flex flex-wrap gap-1",children:O.acts.map(ne=>c.jsx("span",{className:"rounded-full border border-ok/50 bg-surface px-2 py-0.5 text-[11px] text-ok-fg",children:ne.titulo},ne.id))})]})]},O.id))})},b.key))})}),c.jsx(ha,{title:f("dia.enTurnoSinActTitulo",{n:fe.length}),icon:fe.length>0?"⚠️":"✅",collapsible:!0,children:fe.length===0?c.jsx("p",{className:"text-sm text-ink-muted",children:f("dia.enTurnoSinActVacio")}):c.jsx("div",{className:"space-y-4",children:jn(fe).map(b=>c.jsx(Us,{label:b.label,n:b.items.length,children:c.jsx("div",{className:"divide-y divide-line/50",children:b.items.map(O=>c.jsxs("div",{className:"py-3",children:[c.jsxs("div",{className:"flex items-start gap-3",children:[c.jsx(bi,{name:O.nombre}),c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsxs("div",{className:"flex flex-wrap items-center gap-1.5",children:[c.jsx("span",{className:"break-words text-sm font-semibold text-ink",children:O.nombre}),c.jsx(St,{className:_d(O.rol,ye),children:O.rol}),c.jsx(Ks,{...D(O.nombre),t:f})]}),c.jsx("div",{className:"mt-0.5 text-xs text-ink-muted",children:O.puesto})]})]}),c.jsx("button",{onClick:()=>Y(Kt([O.nombre],O.puestoOperativo||"")),className:"mt-2 inline-flex min-h-touch w-full items-center justify-center rounded-xl bg-warning px-3 py-2 text-sm font-semibold text-ink-inverse transition-all hover:opacity-90 active:scale-95 sm:w-auto",children:f("dia.asignar")})]},O.id))})},b.key))})}),c.jsx(ha,{title:f("dia.fueraDeTurnoTitulo",{n:z.length}),icon:"📴",collapsible:!0,defaultOpen:!1,children:z.length===0?c.jsx("p",{className:"text-sm text-ink-muted",children:f("dia.fueraDeTurnoVacio")}):c.jsx("div",{className:"space-y-4",children:Object.entries(we).sort(([b],[O])=>(k[b]||"z").localeCompare(k[O]||"z")).map(([b,O])=>c.jsxs("div",{children:[c.jsxs("div",{className:"mb-2 flex items-center gap-2",children:[c.jsx("span",{className:`rounded-full px-2.5 py-0.5 text-xs font-semibold ${Ne[b]}`,children:k[b]||"Sin marcar"}),c.jsx("span",{className:"text-xs text-ink-muted",children:f("dia.nFuncionarios",{n:O.length,plural:Md(O.length)})})]}),c.jsx("div",{className:"flex flex-wrap gap-2",children:O.map(ne=>c.jsxs("div",{className:"flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2",children:[c.jsx(bi,{name:ne.nombre}),c.jsxs("div",{children:[c.jsx("div",{className:"text-sm font-semibold text-ink",children:ne.nombre}),c.jsx("div",{className:"text-[10px] text-ink-muted",children:(ne.puestoOperativo||"").replace("Puesto ","")}),c.jsx("div",{className:"mt-1 flex flex-wrap gap-1",children:c.jsx(Ks,{...D(ne.nombre),t:f})})]})]},ne.id))})]},b))})}),H.length>0&&c.jsx(ha,{title:f("dia.conViaticoTitulo",{n:H.length}),icon:"💵",collapsible:!0,defaultOpen:!1,children:c.jsx("div",{className:"space-y-4",children:jn(H).map(b=>c.jsx(Us,{label:b.label,n:b.items.length,children:c.jsx("div",{className:"divide-y divide-line/50",children:b.items.map(O=>c.jsxs("div",{className:"flex items-start gap-3 py-2.5",children:[c.jsx(bi,{name:O.nombre}),c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsx("div",{className:"font-semibold text-ink",children:O.nombre}),c.jsx("div",{className:"mt-1 flex flex-wrap gap-1",children:O.acts.filter(ne=>ne.viatico).map(ne=>c.jsxs("span",{className:"rounded-full border border-viatico/40 bg-viatico-soft px-2 py-0.5 text-[11px] text-viatico-fg",children:[ne.titulo,ne.lugar?` · ${ne.lugar}`:""]},ne.id))})]})]},O.id))})},b.key))})})]}),V&&(N?c.jsx(fl,{open:!!V,onClose:()=>Y(null),title:vr,children:Ea}):Ea)]})}function Ov({enTurno:r,sinActividad:i,nAlertas:s=0,onIrAlertas:u,onAyuda:d}){const p=wn();return c.jsxs("div",{className:"space-y-3 md:hidden",children:[c.jsxs("div",{className:"flex items-center justify-between gap-2",children:[c.jsx("h2",{className:"text-base font-bold text-ink",children:p("dia.resumenTitulo")}),c.jsx("button",{type:"button",onClick:d,"aria-label":p("dia.ayudaAria"),className:"inline-flex min-h-touch min-w-touch items-center justify-center rounded-xl border border-line bg-surface text-ink-muted hover:bg-surface-alt",children:c.jsx(We,{name:"info",size:22})})]}),c.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[c.jsxs("div",{className:"rounded-xl border border-ok/30 bg-ok-soft px-2 py-3 text-center",children:[c.jsx("div",{className:"text-3xl font-bold tabular-nums text-ok-fg",children:r}),c.jsx("div",{className:"mt-1 text-sm font-semibold leading-tight text-ok-fg",children:p("dia.resumenEnTurno")})]}),c.jsxs("div",{className:`rounded-xl border px-2 py-3 text-center ${i>0?"border-warning/40 bg-warning-soft":"border-line bg-surface"}`,children:[c.jsx("div",{className:`text-3xl font-bold tabular-nums ${i>0?"text-warning-fg":"text-ink-muted"}`,children:i}),c.jsx("div",{className:`mt-1 text-sm font-semibold leading-tight ${i>0?"text-warning-fg":"text-ink-muted"}`,children:p("dia.resumenSinActividad")})]}),c.jsxs("button",{type:"button",onClick:u,className:`min-h-touch rounded-xl border px-2 py-3 text-center active:scale-95 ${s>0?"border-critical/40 bg-critical-soft":"border-line bg-surface"}`,children:[c.jsx("div",{className:`text-3xl font-bold tabular-nums ${s>0?"text-critical-fg":"text-ink-muted"}`,children:s}),c.jsx("div",{className:`mt-1 text-sm font-semibold leading-tight ${s>0?"text-critical-fg":"text-ink-muted"}`,children:p("dia.resumenAlertas")})]})]}),i>0&&c.jsx("p",{className:"text-sm leading-relaxed text-ink-muted",children:p("dia.resumenPistaSinActividad")})]})}function Fv({open:r,onClose:i,topic:s="dia"}){const u=wn(),d=u(`help.${s}.titulo`),p=u(`help.${s}.lineas`),v=Array.isArray(p)?p:[String(p)];return c.jsxs(fl,{open:r,onClose:i,title:d,snapPoint:"half",children:[c.jsx("ol",{className:"list-decimal space-y-3 pl-5 text-base leading-relaxed text-ink",children:v.map((T,f)=>c.jsx("li",{children:T},f))}),c.jsx("button",{type:"button",onClick:i,className:"mt-6 inline-flex min-h-touch w-full items-center justify-center rounded-xl bg-brand px-4 text-base font-semibold text-brand-fg",children:u("acciones.cerrar")})]})}function zv(r){const{diaVista:i,setDiaVista:s,personas:u,actividadesPlan:d,setActividadesPlan:p,roleData:v,reposiciones:T,hj:f,nAlertas:N=0,setView:y}=r,P=wn(),C=Hm(),[w,j]=x.useState(null),[Q,D]=x.useState(!1),[V,Y,te]=String(i||"").split("-").map(Number),Z=(Y||1)-1,pe=Ll(V||new Date().getFullYear()),{enTurno:ie,sinActividad:ee}=x.useMemo(()=>{const se=(u||[]).filter(z=>z.estado!=="Inactivo");let Le=0,fe=0;for(const z of se){const H=Ma(u,v,V,Z,z.nombre,te,pe);if(!Yi(H))continue;Le+=1,Fi(d,i).filter(M=>(M.funcionarios||[]).includes(z.nombre)).length===0&&(fe+=1)}return{enTurno:Le,sinActividad:fe}},[u,v,V,Z,te,pe,d,i]),[Te,le]=x.useState(!1);x.useEffect(()=>{const se=document.getElementById("dia-boton-nueva-actividad");if(!se||typeof IntersectionObserver>"u")return;const Le=new IntersectionObserver(([fe])=>le(fe.isIntersecting),{rootMargin:"-70px 0px -90px 0px"});return Le.observe(se),()=>Le.disconnect()},[]);const ue=u.filter(se=>se.estado!=="Inactivo"),Ee=x.useCallback(()=>({id:`a${Date.now()}`,titulo:"",inicio:i,fin:i,unDia:!0,funcionarios:[],lugar:"",observaciones:"",viatico:!1}),[i]),ge=x.useCallback(se=>{if(!se.titulo.trim())return;const Le={...se,fin:se.unDia?se.inicio:se.fin||se.inicio};Le.fin<Le.inicio&&(Le.fin=Le.inicio),p(fe=>fe.some(z=>z.id===Le.id)?fe.map(z=>z.id===Le.id?Le:z):[...fe,Le]),j(null)},[p]),ye=Xm(d,p),Ve=x.useCallback(se=>{j(null),ye(se)},[ye]);return c.jsxs("div",{className:"relative mx-auto w-full max-w-md md:max-w-4xl lg:max-w-6xl xl:max-w-7xl",children:[C&&c.jsxs("div",{className:"mb-3 space-y-3 md:hidden",children:[c.jsx(_m,{prominent:!0}),c.jsx(Ov,{enTurno:ie,sinActividad:ee,nAlertas:N,onIrAlertas:()=>typeof y=="function"&&y("alertas"),onAyuda:()=>D(!0)})]}),c.jsx(Iv,{...r}),c.jsx("button",{type:"button",onClick:()=>j(Ee()),"aria-label":P("dia.nueva"),"aria-hidden":Te,tabIndex:Te?-1:0,className:["fixed z-40 flex h-14 w-14 items-center justify-center","rounded-full bg-emerald-700 text-white shadow-lg","hover:bg-emerald-600 active:scale-95","transition-all duration-200","bottom-[5.5rem] right-4","md:hidden",Te?"pointer-events-none scale-50 opacity-0":"scale-100 opacity-100"].join(" "),children:c.jsx("svg",{viewBox:"0 0 24 24",width:"28",height:"28",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:c.jsx("path",{d:"M12 5v14M5 12h14"})})}),w&&(C?c.jsx(fl,{open:!!w,onClose:()=>j(null),title:P("modalActividad.agregar"),snapPoint:"full",children:c.jsx(tl,{valor:w,personas:ue,cerrar:()=>j(null),guardar:ge,eliminar:Ve,actividadesPlan:d,embebido:!0})}):c.jsx(tl,{valor:w,personas:ue,cerrar:()=>j(null),guardar:ge,eliminar:Ve,actividadesPlan:d})),c.jsx(Fv,{open:Q,onClose:()=>D(!1),topic:"dia"})]})}const Qv=x.lazy(()=>gn(()=>import("./Roles-DE2hcF_X.js"),__vite__mapDeps([0,1,2,3,4]))),Jv=x.lazy(()=>gn(()=>import("./Funcionarios-CzaOzxfB.js"),__vite__mapDeps([5,6,7,8,1,2,3,9,10,11]))),Bv=x.lazy(()=>gn(()=>import("./FichaFuncionario-BMql1RFU.js"),__vite__mapDeps([12,6,10,11]))),Yv=x.lazy(()=>gn(()=>import("./Planificacion-Epcj6X-u.js"),__vite__mapDeps([13,2,3,4,7,8,1]))),Gv=x.lazy(()=>gn(()=>import("./PlanificacionFuncionario-y5tfZSeM.js"),[])),Uv=x.lazy(()=>gn(()=>import("./AdelantoViaticos-0k7u6g_3.js"),__vite__mapDeps([14,6,8]))),Kv=x.lazy(()=>gn(()=>import("./Reposicion-DsjP67Z2.js"),__vite__mapDeps([15,6,1,2,3,4]))),$v=x.lazy(()=>gn(()=>import("./Disponibilidad-CZBu_cRq.js"),__vite__mapDeps([16,6,10]))),qv=x.lazy(()=>gn(()=>import("./Alertas-CciXYqbA.js"),__vite__mapDeps([17,8]))),Hv=x.lazy(()=>gn(()=>import("./Datos-DkCgg4Jb.js"),__vite__mapDeps([18,3,9]))),Wv=x.lazy(()=>gn(()=>import("./Configuracion-DjroCrY7.js"),__vite__mapDeps([19,2,3,9])));function Zv(){const r=wn();return c.jsx("div",{role:"status","aria-live":"polite",className:"flex min-h-[200px] items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",children:c.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold text-slate-500",children:[c.jsx("span",{className:"h-2 w-2 animate-pulse rounded-full bg-emerald-500","aria-hidden":"true"}),r("topbar.cargando")]})})}function Xv(){const{view:r,setView:i,personas:s,setPersonas:u,month:d,setMonth:p,year:v,setYear:T,compact:f,setCompact:N,roleData:y,setRoleData:P,actividadesPlan:C,setActividadesPlan:w,reposiciones:j,setReposiciones:Q,diaVista:D,setDiaVista:V,funcionarioVista:Y,setFuncionarioVista:te,filtrosVista:Z,setFiltrosVista:pe,reglas:ie}=Gt(),ee=x.useMemo(()=>qL(s,{actividadesPlan:C,reposiciones:j,flags:ie}),[s,C,j,ie]),Te=x.useMemo(()=>ee.filter(ye=>ye.t==="danger"||ye.t==="warn").length,[ee]),le=k1({view:r,setView:i,year:v,setYear:T,month:d,setMonth:p,diaVista:D,setDiaVista:V,funcionarioVista:Y,setFuncionarioVista:te,filtrosVista:Z,setFiltrosVista:pe}),ue=R1(),Ee=r==="funcionario"?"funcionarios":r,ge=r==="funcionario"&&!!Y;return c.jsxs("div",{className:`pnlq-app pnlq-print-root min-h-screen overflow-x-clip bg-surface-alt text-ink ${ue?"pnlq-keyboard-open":""}`,children:[c.jsx(uv,{}),c.jsxs("div",{className:"flex min-h-screen",children:[c.jsx(v1,{view:Ee,setView:le,nAlertas:Te}),c.jsxs("main",{className:"pnlq-app-main min-w-0 flex-1 overflow-x-clip",children:[c.jsx(C1,{view:Ee,setView:le,month:d,setMonth:p,year:v,setYear:T,compact:f,setCompact:N}),c.jsx("div",{className:"pnlq-app-content space-y-5 p-4 pb-[calc(6rem+env(safe-area-inset-bottom))] lg:p-6 lg:pb-6",children:c.jsxs(x.Suspense,{fallback:c.jsx(Zv,{}),children:[r==="dia"&&c.jsx(zv,{diaVista:D,setDiaVista:V,personas:s,actividadesPlan:C,setActividadesPlan:w,roleData:y,reposiciones:j,hj:ie==null?void 0:ie.horasJornada,nAlertas:Te,setView:le}),Ee==="funcionarios"&&!ge&&c.jsx(Jv,{personas:s,setPersonas:u,setView:le}),ge&&c.jsx(Bv,{nombre:Y,personas:s,setPersonas:u,actividadesPlan:C,roleData:y,reposiciones:j,year:v,month:d,alerts:ee,setView:le,setDiaVista:V}),r==="roles"&&c.jsx(Qv,{year:v,month:d,setYear:T,setMonth:p,compact:f,roleData:y,setRoleData:P,personas:s,actividadesPlan:C,setActividadesPlan:w,reposiciones:j,hj:ie==null?void 0:ie.horasJornada,setView:le}),r==="planificacion"&&c.jsx(Yv,{year:v,month:d,personas:s,actividadesPlan:C,setActividadesPlan:w,roleData:y,setView:le,setDiaVista:V}),r==="planFuncionario"&&c.jsx(Gv,{year:v,month:d,personas:s,actividadesPlan:C,setActividadesPlan:w,roleData:y,setRoleData:P}),r==="adelantos"&&c.jsx(Uv,{actividadesPlan:C,personas:s,setView:le}),r==="reposicion"&&c.jsx(Kv,{personas:s,reposiciones:j,setReposiciones:Q}),r==="disponibilidad"&&c.jsx($v,{personas:s,setPersonas:u}),r==="alertas"&&c.jsx(qv,{alerts:ee,setView:le}),r==="datos"&&c.jsx(Hv,{}),r==="configuracion"&&c.jsx(Wv,{})]})})]})]}),c.jsx(x1,{view:Ee,setView:le,nAlertas:Te,hidden:ue})]})}function eh(){return c.jsx(_1,{children:c.jsx(FL,{children:c.jsxs(KL,{children:[c.jsx(Xv,{}),c.jsx(O1,{})]})})})}function nh(r={}){const{immediate:i=!1,onNeedRefresh:s,onOfflineReady:u,onRegistered:d,onRegisteredSW:p,onRegisterError:v}=r;let T,f;const N=async(P=!0)=>{await f};async function y(){if("serviceWorker"in navigator){if(T=await gn(async()=>{const{Workbox:P}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:P}},[]).then(({Workbox:P})=>new P("/BTMM_JORNADAS/sw.js",{scope:"/BTMM_JORNADAS/",type:"classic"})).catch(P=>{v==null||v(P)}),!T)return;T.addEventListener("activated",P=>{(P.isUpdate||P.isExternal)&&window.location.reload()}),T.addEventListener("installed",P=>{P.isUpdate||u==null||u()}),T.register({immediate:i}).then(P=>{p?p("/BTMM_JORNADAS/sw.js",P):d==null||d(P)}).catch(P=>{v==null||v(P)})}}return f=y(),N}function th(r={}){const{immediate:i=!0,onNeedRefresh:s,onOfflineReady:u,onRegistered:d,onRegisteredSW:p,onRegisterError:v}=r,[T,f]=x.useState(!1),[N,y]=x.useState(!1),[P]=x.useState(()=>nh({immediate:i,onOfflineReady(){y(!0),u==null||u()},onNeedRefresh(){f(!0),s==null||s()},onRegistered:d,onRegisteredSW:p,onRegisterError:v}));return{needRefresh:[T,f],offlineReady:[N,y],updateServiceWorker:P}}const ah=300*1e3;async function rh(){const r=`${WL}?t=${Date.now()}`,i=await fetch(r,{cache:"no-store",headers:{"Cache-Control":"no-cache"}});if(!i.ok)throw new Error(`HTTP ${i.status}`);return i.json()}function ih({intervalMs:r=ah,onOutdated:i}={}){let s=!1,u=null,d=!0;const p=async()=>{if(s)return;const N=d;if(d=!1,!(typeof navigator>"u"||!navigator.onLine))try{const y=await rh();y!=null&&y.commit&&y.commit!==Ii&&(i==null||i({local:mr,remote:y.version,remoteBuildTime:y.buildTime,remoteCommit:y.commit,immediate:N}))}catch{}},v=()=>{s||(u=setTimeout(async()=>{await p(),v()},r))},T=()=>{document.visibilityState==="visible"&&p()},f=()=>p();return document.addEventListener("visibilitychange",T),window.addEventListener("online",f),p(),v(),()=>{s=!0,u&&clearTimeout(u),document.removeEventListener("visibilitychange",T),window.removeEventListener("online",f)}}const Fd="pnlq:lastLoadedAt",zd="pnlq:autoUpdateIntento";function oh({onInstall:r,onDismiss:i}){return c.jsx("div",{className:"pnlq-pwa-banner pnlq-no-print fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-2xl border border-emerald-200 bg-white p-4 shadow-2xl ring-1 ring-emerald-100 lg:bottom-4",role:"alertdialog","aria-label":Ie("pwa.instalarAria"),children:c.jsxs("div",{className:"flex items-start gap-3",children:[c.jsx("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-800 text-2xl shadow-sm",children:"🌲"}),c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsx("p",{className:"text-sm font-semibold text-slate-950",children:Ie("pwa.instalarTitulo")}),c.jsx("p",{className:"mt-0.5 text-xs font-bold text-slate-500",children:Ie("pwa.instalarSub")}),c.jsxs("div",{className:"mt-3 flex gap-2",children:[c.jsx("button",{onClick:r,className:"inline-flex min-h-touch items-center rounded-xl bg-emerald-800 px-4 text-xs font-semibold text-white shadow-sm hover:bg-emerald-700 active:scale-95",children:Ie("acciones.instalar")}),c.jsx("button",{onClick:i,className:"inline-flex min-h-touch items-center rounded-xl border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-700 hover:bg-slate-50 active:scale-95",children:Ie("acciones.ahoraNo")})]})]}),c.jsx("button",{onClick:i,className:"inline-flex min-h-touch min-w-touch items-center justify-center rounded-lg font-semibold text-slate-400 hover:bg-slate-100 hover:text-slate-700","aria-label":Ie("acciones.cerrar"),children:"✕"})]})})}function sh({lastLoadedAt:r}){return c.jsx("div",{className:"pnlq-pwa-banner pnlq-no-print fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] left-1/2 z-50 -translate-x-1/2 rounded-2xl border border-amber-300 bg-amber-50 px-5 py-3 shadow-xl ring-1 ring-amber-200 lg:bottom-4",role:"alert",children:c.jsxs("div",{className:"flex flex-col items-center gap-0.5 text-center",children:[c.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold text-amber-900",children:[c.jsx("span",{className:"text-lg",children:"📡"}),Ie("pwa.sinConexion")]}),r&&c.jsx("div",{className:"text-[11px] font-bold text-amber-800/80",children:Ie("pwa.ultimaCarga",{fecha:r})})]})})}function lh({onUpdate:r,onDismiss:i,urgent:s=!1,remoteVersion:u}){const d=Ie(s?"pwa.versionDesactualizada":"pwa.nuevaVersion"),p=Ie(s?"pwa.urgente":"pwa.sugerido"),v=`${Ie("pwa.versionActual",{actual:mr})}${u?Ie("pwa.versionDisponible",{remoto:u}):""}.${p}`;return c.jsx("div",{className:`pnlq-pwa-banner pnlq-no-print fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-2xl border p-4 shadow-2xl lg:bottom-4 ${s?"border-red-300 bg-red-50 ring-1 ring-red-200":"border-emerald-300 bg-emerald-50 ring-1 ring-emerald-200"}`,role:"alertdialog","aria-live":"assertive","aria-label":Ie("pwa.bannerAria"),children:c.jsxs("div",{className:"flex items-start gap-3",children:[c.jsx("div",{className:`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl shadow-sm ${s?"bg-red-700 text-white":"bg-emerald-800 text-white"}`,children:"⟳"}),c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsx("p",{className:"text-sm font-semibold text-slate-950",children:d}),c.jsx("p",{className:"mt-0.5 text-xs font-bold text-slate-600",children:v}),c.jsxs("div",{className:"mt-3 flex gap-2",children:[c.jsx("button",{onClick:r,className:`inline-flex min-h-touch items-center rounded-xl px-4 text-xs font-semibold text-white shadow-sm active:scale-95 ${s?"bg-red-700 hover:bg-red-800":"bg-emerald-800 hover:bg-emerald-700"}`,children:Ie("acciones.actualizarAhora")}),c.jsx("button",{onClick:i,className:"inline-flex min-h-touch items-center rounded-xl border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-700 hover:bg-slate-50 active:scale-95",children:Ie("acciones.verLuego")})]})]})]})})}function ch({children:r}){const[i,s]=x.useState(null),[u,d]=x.useState(!1),[p,v]=x.useState(typeof navigator<"u"?!navigator.onLine:!1),[T,f]=x.useState(!1),[N,y]=x.useState(null),[P,C]=x.useState(!1),[w,j]=x.useState(()=>{try{return localStorage.getItem(Fd)}catch{return null}}),{needRefresh:[Q,D],updateServiceWorker:V}=th({onRegisteredSW(){try{const le=am(new Date().toISOString());localStorage.setItem(Fd,le),j(le)}catch{}}});x.useEffect(()=>{const le=ye=>{ye.preventDefault(),s(ye)},ue=()=>{f(!0),s(null)},Ee=()=>v(!1),ge=()=>v(!0);return window.addEventListener("beforeinstallprompt",le),window.addEventListener("appinstalled",ue),window.addEventListener("online",Ee),window.addEventListener("offline",ge),()=>{window.removeEventListener("beforeinstallprompt",le),window.removeEventListener("appinstalled",ue),window.removeEventListener("online",Ee),window.removeEventListener("offline",ge)}},[]);const Y=x.useRef(V);x.useEffect(()=>{Y.current=V},[V]),x.useEffect(()=>ih({onOutdated:ue=>{var Ee;if(ue!=null&&ue.immediate&&ue.remoteCommit){let ge=null;try{ge=sessionStorage.getItem(zd)}catch{}if(ge!==ue.remoteCommit){try{sessionStorage.setItem(zd,ue.remoteCommit)}catch{}(Ee=Y.current)==null||Ee.call(Y,!0);return}}y(ue)}}),[]);const te=async()=>{if(!i)return;i.prompt();const{outcome:le}=await i.userChoice;le==="accepted"&&s(null),d(!0)},Z=x.useCallback(()=>{C(!1),y(null),D(!1),V(!0)},[D,V]),pe=()=>C(!0),ie=i&&!u&&!T,ee=(Q||!!N)&&!P,Te=N==null?void 0:N.remote;return c.jsxs(c.Fragment,{children:[r,ie&&c.jsx(oh,{onInstall:te,onDismiss:()=>d(!0)}),p&&!ee&&c.jsx(sh,{lastLoadedAt:w}),ee&&c.jsx(lh,{onUpdate:Z,onDismiss:pe,urgent:!!N,remoteVersion:Te})]})}const ep="pnlq:theme",ga=["light","dark","hc"],np=x.createContext(null);function uh(){if(typeof window>"u")return"light";try{const r=localStorage.getItem(ep);if(r&&ga.includes(r))return r}catch{}return window.matchMedia&&window.matchMedia("(prefers-contrast: more)").matches?"hc":window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function dh({children:r}){const[i,s]=x.useState(uh);x.useEffect(()=>{if(!(typeof document>"u")){document.documentElement.setAttribute("data-theme",i),document.documentElement.style.colorScheme=i==="dark"?"dark":"light";try{localStorage.setItem(ep,i)}catch{}}},[i]);const u=x.useCallback(v=>{ga.includes(v)&&s(v)},[]),d=x.useCallback(()=>{s(v=>{const T=ga.indexOf(v);return ga[(T+1)%ga.length]})},[]),p=x.useMemo(()=>({theme:i,setTheme:u,cycleTheme:d,themes:ga}),[i,u,d]);return c.jsx(np.Provider,{value:p,children:r})}function qh(){const r=x.useContext(np);if(!r)throw new Error("useTheme must be used within <ThemeProvider>");return r}typeof console<"u"&&console.info(`PNLQ v${mr} · build ${_i} · commit ${Ii}`);typeof window<"u"&&window.addEventListener("unhandledrejection",r=>{console.error("Promesa rechazada sin manejar:",r.reason)});cT.createRoot(document.getElementById("root")).render(c.jsx(aT.StrictMode,{children:c.jsx(dh,{children:c.jsx(ch,{children:c.jsx(eh,{})})})}));export{wL as $,mr as A,St as B,ha as C,Rh as D,h1 as E,Wm as F,Zd as G,Pn as H,We as I,vh as J,wh as K,kd as L,qs as M,Km as N,Tl as O,Ys as P,Yi as Q,ll as R,$n as S,Qi as T,Tv as U,Td as V,Gm as W,_h as X,qd as Y,Lv as Z,SL as _,bi as a,Xm as a$,rt as a0,Jh as a1,yv as a2,bT as a3,am as a4,vv as a5,Tr as a6,Oh as a7,fv as a8,Qd as a9,Vh as aA,Md as aB,Ih as aC,jL as aD,Sh as aE,x as aF,Ch as aG,RT as aH,_v as aI,xh as aJ,Lh as aK,wT as aL,pv as aM,Ym as aN,kT as aO,pr as aP,Zm as aQ,VT as aR,Ie as aS,jT as aT,Gh as aU,Kh as aV,Uh as aW,VL as aX,Bi as aY,Fh as aZ,Gt as a_,FT as aa,Kd as ab,$d as ac,xT as ad,Yh as ae,AT as af,AL as ag,c as ah,fh as ai,Dv as aj,$h as ak,Rm as al,Um as am,bh as an,Yt as ao,IT as ap,Th as aq,yh as ar,Ph as as,Mh as at,gh as au,DT as av,Kn as aw,fr as ax,jh as ay,Ah as az,Qh as b,y1 as b0,Ll as b1,Hm as b2,Om as b3,wn as b4,qh as b5,tm as b6,Eh as b7,hh as b8,Qs as c,Fm as d,tl as e,pd as f,$s as g,zs as h,zh as i,Fi as j,Dh as k,Nh as l,kh as m,OT as n,jv as o,Oi as p,_d as q,gv as r,Ma as s,JT as t,ph as u,xv as v,bv as w,Bh as x,qT as y,cl as z};
