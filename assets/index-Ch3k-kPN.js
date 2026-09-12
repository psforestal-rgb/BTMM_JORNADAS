const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Roles-ohIP004z.js","assets/useAtajoBusqueda-Bf8JS1Ne.js","assets/csv-Q8IY2wHv.js","assets/descargas-DA6-RFWE.js","assets/exportaciones-n77kkGyd.js","assets/Funcionarios-De5RaxN0.js","assets/EmptyState-CgqqmnGY.js","assets/useFiltrosDeVista-l1xE0hyq.js","assets/useSessionState-DWUXVwy1.js","assets/respaldo-B50mENag.js","assets/ModalFuncionario-CAn5CIO0.js","assets/useGuardarFuncionario-ppkpxlt-.js","assets/FichaFuncionario-BhM3ih6B.js","assets/Planificacion-mzt3oT-w.js","assets/AdelantoViaticos-80SxNDeR.js","assets/Reposicion-DcYSTzCM.js","assets/Disponibilidad-elgd7zqI.js","assets/Alertas-pXDX_Iih.js","assets/Datos-FJ-FnXa5.js","assets/Configuracion-7sLZUdns.js"])))=>i.map(i=>d[i]);
var Up=Object.defineProperty;var Yp=(r,o,s)=>o in r?Up(r,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[o]=s;var Mi=(r,o,s)=>Yp(r,typeof o!="symbol"?o+"":o,s);(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))u(m);new MutationObserver(m=>{for(const f of m)if(f.type==="childList")for(const v of f.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&u(v)}).observe(document,{childList:!0,subtree:!0});function s(m){const f={};return m.integrity&&(f.integrity=m.integrity),m.referrerPolicy&&(f.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?f.credentials="include":m.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function u(m){if(m.ep)return;m.ep=!0;const f=s(m);fetch(m.href,f)}})();var Gv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _d(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Vs={exports:{}},ar={},As={exports:{}},Le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wu;function Gp(){if(Wu)return Le;Wu=1;var r=Symbol.for("react.element"),o=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),v=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),V=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),M=Symbol.iterator;function x(P){return P===null||typeof P!="object"?null:(P=M&&P[M]||P["@@iterator"],typeof P=="function"?P:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,J={};function R(P,_,re){this.props=P,this.context=_,this.refs=J,this.updater=re||A}R.prototype.isReactComponent={},R.prototype.setState=function(P,_){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,_,"setState")},R.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function w(){}w.prototype=R.prototype;function Y(P,_,re){this.props=P,this.context=_,this.refs=J,this.updater=re||A}var ie=Y.prototype=new w;ie.constructor=Y,j(ie,R.prototype),ie.isPureReactComponent=!0;var Z=Array.isArray,fe=Object.prototype.hasOwnProperty,le={current:null},ae={key:!0,ref:!0,__self:!0,__source:!0};function he(P,_,re){var de,B={},X=null,Pe=null;if(_!=null)for(de in _.ref!==void 0&&(Pe=_.ref),_.key!==void 0&&(X=""+_.key),_)fe.call(_,de)&&!ae.hasOwnProperty(de)&&(B[de]=_[de]);var ve=arguments.length-2;if(ve===1)B.children=re;else if(1<ve){for(var Me=Array(ve),Qe=0;Qe<ve;Qe++)Me[Qe]=arguments[Qe+2];B.children=Me}if(P&&P.defaultProps)for(de in ve=P.defaultProps,ve)B[de]===void 0&&(B[de]=ve[de]);return{$$typeof:r,type:P,key:X,ref:Pe,props:B,_owner:le.current}}function ue(P,_){return{$$typeof:r,type:P.type,key:_,ref:P.ref,props:P.props,_owner:P._owner}}function pe(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function xe(P){var _={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(re){return _[re]})}var ge=/\/+/g;function ye(P,_){return typeof P=="object"&&P!==null&&P.key!=null?xe(""+P.key):_.toString(36)}function Ve(P,_,re,de,B){var X=typeof P;(X==="undefined"||X==="boolean")&&(P=null);var Pe=!1;if(P===null)Pe=!0;else switch(X){case"string":case"number":Pe=!0;break;case"object":switch(P.$$typeof){case r:case o:Pe=!0}}if(Pe)return Pe=P,B=B(Pe),P=de===""?"."+ye(Pe,0):de,Z(B)?(re="",P!=null&&(re=P.replace(ge,"$&/")+"/"),Ve(B,_,re,"",function(Qe){return Qe})):B!=null&&(pe(B)&&(B=ue(B,re+(!B.key||Pe&&Pe.key===B.key?"":(""+B.key).replace(ge,"$&/")+"/")+P)),_.push(B)),1;if(Pe=0,de=de===""?".":de+":",Z(P))for(var ve=0;ve<P.length;ve++){X=P[ve];var Me=de+ye(X,ve);Pe+=Ve(X,_,re,Me,B)}else if(Me=x(P),typeof Me=="function")for(P=Me.call(P),ve=0;!(X=P.next()).done;)X=X.value,Me=de+ye(X,ve++),Pe+=Ve(X,_,re,Me,B);else if(X==="object")throw _=String(P),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.");return Pe}function oe(P,_,re){if(P==null)return P;var de=[],B=0;return Ve(P,de,"","",function(X){return _.call(re,X,B++)}),de}function Te(P){if(P._status===-1){var _=P._result;_=_(),_.then(function(re){(P._status===0||P._status===-1)&&(P._status=1,P._result=re)},function(re){(P._status===0||P._status===-1)&&(P._status=2,P._result=re)}),P._status===-1&&(P._status=0,P._result=_)}if(P._status===1)return P._result.default;throw P._result}var me={current:null},z={transition:null},H={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:z,ReactCurrentOwner:le};function U(){throw Error("act(...) is not supported in production builds of React.")}return Le.Children={map:oe,forEach:function(P,_,re){oe(P,function(){_.apply(this,arguments)},re)},count:function(P){var _=0;return oe(P,function(){_++}),_},toArray:function(P){return oe(P,function(_){return _})||[]},only:function(P){if(!pe(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},Le.Component=R,Le.Fragment=s,Le.Profiler=m,Le.PureComponent=Y,Le.StrictMode=u,Le.Suspense=T,Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,Le.act=U,Le.cloneElement=function(P,_,re){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var de=j({},P.props),B=P.key,X=P.ref,Pe=P._owner;if(_!=null){if(_.ref!==void 0&&(X=_.ref,Pe=le.current),_.key!==void 0&&(B=""+_.key),P.type&&P.type.defaultProps)var ve=P.type.defaultProps;for(Me in _)fe.call(_,Me)&&!ae.hasOwnProperty(Me)&&(de[Me]=_[Me]===void 0&&ve!==void 0?ve[Me]:_[Me])}var Me=arguments.length-2;if(Me===1)de.children=re;else if(1<Me){ve=Array(Me);for(var Qe=0;Qe<Me;Qe++)ve[Qe]=arguments[Qe+2];de.children=ve}return{$$typeof:r,type:P.type,key:B,ref:X,props:de,_owner:Pe}},Le.createContext=function(P){return P={$$typeof:v,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:f,_context:P},P.Consumer=P},Le.createElement=he,Le.createFactory=function(P){var _=he.bind(null,P);return _.type=P,_},Le.createRef=function(){return{current:null}},Le.forwardRef=function(P){return{$$typeof:L,render:P}},Le.isValidElement=pe,Le.lazy=function(P){return{$$typeof:y,_payload:{_status:-1,_result:P},_init:Te}},Le.memo=function(P,_){return{$$typeof:V,type:P,compare:_===void 0?null:_}},Le.startTransition=function(P){var _=z.transition;z.transition={};try{P()}finally{z.transition=_}},Le.unstable_act=U,Le.useCallback=function(P,_){return me.current.useCallback(P,_)},Le.useContext=function(P){return me.current.useContext(P)},Le.useDebugValue=function(){},Le.useDeferredValue=function(P){return me.current.useDeferredValue(P)},Le.useEffect=function(P,_){return me.current.useEffect(P,_)},Le.useId=function(){return me.current.useId()},Le.useImperativeHandle=function(P,_,re){return me.current.useImperativeHandle(P,_,re)},Le.useInsertionEffect=function(P,_){return me.current.useInsertionEffect(P,_)},Le.useLayoutEffect=function(P,_){return me.current.useLayoutEffect(P,_)},Le.useMemo=function(P,_){return me.current.useMemo(P,_)},Le.useReducer=function(P,_,re){return me.current.useReducer(P,_,re)},Le.useRef=function(P){return me.current.useRef(P)},Le.useState=function(P){return me.current.useState(P)},Le.useSyncExternalStore=function(P,_,re){return me.current.useSyncExternalStore(P,_,re)},Le.useTransition=function(){return me.current.useTransition()},Le.version="18.3.1",Le}var Zu;function Zs(){return Zu||(Zu=1,As.exports=Gp()),As.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xu;function Kp(){if(Xu)return ar;Xu=1;var r=Zs(),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,m=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function v(L,T,V){var y,M={},x=null,A=null;V!==void 0&&(x=""+V),T.key!==void 0&&(x=""+T.key),T.ref!==void 0&&(A=T.ref);for(y in T)u.call(T,y)&&!f.hasOwnProperty(y)&&(M[y]=T[y]);if(L&&L.defaultProps)for(y in T=L.defaultProps,T)M[y]===void 0&&(M[y]=T[y]);return{$$typeof:o,type:L,key:x,ref:A,props:M,_owner:m.current}}return ar.Fragment=s,ar.jsx=v,ar.jsxs=v,ar}var ed;function $p(){return ed||(ed=1,Vs.exports=Kp()),Vs.exports}var c=$p(),C=Zs();const qp=_d(C);var Ei={},ws={exports:{}},dn={},js={exports:{}},ks={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nd;function Hp(){return nd||(nd=1,(function(r){function o(z,H){var U=z.length;z.push(H);e:for(;0<U;){var P=U-1>>>1,_=z[P];if(0<m(_,H))z[P]=H,z[U]=_,U=P;else break e}}function s(z){return z.length===0?null:z[0]}function u(z){if(z.length===0)return null;var H=z[0],U=z.pop();if(U!==H){z[0]=U;e:for(var P=0,_=z.length,re=_>>>1;P<re;){var de=2*(P+1)-1,B=z[de],X=de+1,Pe=z[X];if(0>m(B,U))X<_&&0>m(Pe,B)?(z[P]=Pe,z[X]=U,P=X):(z[P]=B,z[de]=U,P=de);else if(X<_&&0>m(Pe,U))z[P]=Pe,z[X]=U,P=X;else break e}}return H}function m(z,H){var U=z.sortIndex-H.sortIndex;return U!==0?U:z.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;r.unstable_now=function(){return f.now()}}else{var v=Date,L=v.now();r.unstable_now=function(){return v.now()-L}}var T=[],V=[],y=1,M=null,x=3,A=!1,j=!1,J=!1,R=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ie(z){for(var H=s(V);H!==null;){if(H.callback===null)u(V);else if(H.startTime<=z)u(V),H.sortIndex=H.expirationTime,o(T,H);else break;H=s(V)}}function Z(z){if(J=!1,ie(z),!j)if(s(T)!==null)j=!0,Te(fe);else{var H=s(V);H!==null&&me(Z,H.startTime-z)}}function fe(z,H){j=!1,J&&(J=!1,w(he),he=-1),A=!0;var U=x;try{for(ie(H),M=s(T);M!==null&&(!(M.expirationTime>H)||z&&!xe());){var P=M.callback;if(typeof P=="function"){M.callback=null,x=M.priorityLevel;var _=P(M.expirationTime<=H);H=r.unstable_now(),typeof _=="function"?M.callback=_:M===s(T)&&u(T),ie(H)}else u(T);M=s(T)}if(M!==null)var re=!0;else{var de=s(V);de!==null&&me(Z,de.startTime-H),re=!1}return re}finally{M=null,x=U,A=!1}}var le=!1,ae=null,he=-1,ue=5,pe=-1;function xe(){return!(r.unstable_now()-pe<ue)}function ge(){if(ae!==null){var z=r.unstable_now();pe=z;var H=!0;try{H=ae(!0,z)}finally{H?ye():(le=!1,ae=null)}}else le=!1}var ye;if(typeof Y=="function")ye=function(){Y(ge)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,oe=Ve.port2;Ve.port1.onmessage=ge,ye=function(){oe.postMessage(null)}}else ye=function(){R(ge,0)};function Te(z){ae=z,le||(le=!0,ye())}function me(z,H){he=R(function(){z(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_continueExecution=function(){j||A||(j=!0,Te(fe))},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ue=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_getFirstCallbackNode=function(){return s(T)},r.unstable_next=function(z){switch(x){case 1:case 2:case 3:var H=3;break;default:H=x}var U=x;x=H;try{return z()}finally{x=U}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(z,H){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var U=x;x=z;try{return H()}finally{x=U}},r.unstable_scheduleCallback=function(z,H,U){var P=r.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?P+U:P):U=P,z){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=U+_,z={id:y++,callback:H,priorityLevel:z,startTime:U,expirationTime:_,sortIndex:-1},U>P?(z.sortIndex=U,o(V,z),s(T)===null&&z===s(V)&&(J?(w(he),he=-1):J=!0,me(Z,U-P))):(z.sortIndex=_,o(T,z),j||A||(j=!0,Te(fe))),z},r.unstable_shouldYield=xe,r.unstable_wrapCallback=function(z){var H=x;return function(){var U=x;x=H;try{return z.apply(this,arguments)}finally{x=U}}}})(ks)),ks}var td;function Wp(){return td||(td=1,js.exports=Hp()),js.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ad;function Zp(){if(ad)return dn;ad=1;var r=Zs(),o=Wp();function s(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,m={};function f(e,n){v(e,n),v(e+"Capture",n)}function v(e,n){for(m[e]=n,e=0;e<n.length;e++)u.add(n[e])}var L=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),T=Object.prototype.hasOwnProperty,V=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},M={};function x(e){return T.call(M,e)?!0:T.call(y,e)?!1:V.test(e)?M[e]=!0:(y[e]=!0,!1)}function A(e,n,t,a){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function j(e,n,t,a){if(n===null||typeof n>"u"||A(e,n,t,a))return!0;if(a)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function J(e,n,t,a,i,l,d){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=d}var R={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){R[e]=new J(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];R[n]=new J(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){R[e]=new J(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){R[e]=new J(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){R[e]=new J(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){R[e]=new J(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){R[e]=new J(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){R[e]=new J(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){R[e]=new J(e,5,!1,e.toLowerCase(),null,!1,!1)});var w=/[\-:]([a-z])/g;function Y(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(w,Y);R[n]=new J(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(w,Y);R[n]=new J(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(w,Y);R[n]=new J(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){R[e]=new J(e,1,!1,e.toLowerCase(),null,!1,!1)}),R.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){R[e]=new J(e,1,!1,e.toLowerCase(),null,!0,!0)});function ie(e,n,t,a){var i=R.hasOwnProperty(n)?R[n]:null;(i!==null?i.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(j(n,t,i,a)&&(t=null),a||i===null?x(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,a=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,a?e.setAttributeNS(a,n,t):e.setAttribute(n,t))))}var Z=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fe=Symbol.for("react.element"),le=Symbol.for("react.portal"),ae=Symbol.for("react.fragment"),he=Symbol.for("react.strict_mode"),ue=Symbol.for("react.profiler"),pe=Symbol.for("react.provider"),xe=Symbol.for("react.context"),ge=Symbol.for("react.forward_ref"),ye=Symbol.for("react.suspense"),Ve=Symbol.for("react.suspense_list"),oe=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),me=Symbol.for("react.offscreen"),z=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,P;function _(e){if(P===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);P=n&&n[1]||""}return`
`+P+e}var re=!1;function de(e,n){if(!e||re)return"";re=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(b){var a=b}Reflect.construct(e,[],n)}else{try{n.call()}catch(b){a=b}e.call(n.prototype)}else{try{throw Error()}catch(b){a=b}e()}}catch(b){if(b&&a&&typeof b.stack=="string"){for(var i=b.stack.split(`
`),l=a.stack.split(`
`),d=i.length-1,p=l.length-1;1<=d&&0<=p&&i[d]!==l[p];)p--;for(;1<=d&&0<=p;d--,p--)if(i[d]!==l[p]){if(d!==1||p!==1)do if(d--,p--,0>p||i[d]!==l[p]){var h=`
`+i[d].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=d&&0<=p);break}}}finally{re=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?_(e):""}function B(e){switch(e.tag){case 5:return _(e.type);case 16:return _("Lazy");case 13:return _("Suspense");case 19:return _("SuspenseList");case 0:case 2:case 15:return e=de(e.type,!1),e;case 11:return e=de(e.type.render,!1),e;case 1:return e=de(e.type,!0),e;default:return""}}function X(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ae:return"Fragment";case le:return"Portal";case ue:return"Profiler";case he:return"StrictMode";case ye:return"Suspense";case Ve:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xe:return(e.displayName||"Context")+".Consumer";case pe:return(e._context.displayName||"Context")+".Provider";case ge:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case oe:return n=e.displayName||null,n!==null?n:X(e.type)||"Memo";case Te:n=e._payload,e=e._init;try{return X(e(n))}catch{}}return null}function Pe(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return X(n);case 8:return n===he?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ve(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Me(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(e){var n=Me(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(d){a=""+d,l.call(this,d)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(d){a=""+d},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function rn(e){e._valueTracker||(e._valueTracker=Qe(e))}function Gn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=Me(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function nn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function k(e,n){var t=n.checked;return U({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ee(e,n){var t=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;t=ve(n.value!=null?n.value:t),e._wrapperState={initialChecked:a,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function we(e,n){n=n.checked,n!=null&&ie(e,"checked",n,!1)}function bn(e,n){we(e,n);var t=ve(n.value),a=n.type;if(t!=null)a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?St(e,n.type,t):n.hasOwnProperty("defaultValue")&&St(e,n.type,ve(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Vn(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function St(e,n,t){(n!=="number"||nn(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var bt=Array.isArray;function at(e,n,t,a){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&a&&(e[t].defaultSelected=!0)}else{for(t=""+ve(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Ut(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(s(91));return U({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fr(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(s(92));if(bt(t)){if(1<t.length)throw Error(s(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:ve(t)}}function pr(e,n){var t=ve(n.value),a=ve(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),a!=null&&(e.defaultValue=""+a)}function Pa(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function S(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function O(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?S(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ee,Se=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,a,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,a,i)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ee=ee||document.createElement("div"),ee.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ee.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function hn(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var gn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rt=["Webkit","ms","Moz","O"];Object.keys(gn).forEach(function(e){rt.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),gn[n]=gn[e]})});function ml(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||gn.hasOwnProperty(e)&&gn[e]?(""+n).trim():n+"px"}function fl(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var a=t.indexOf("--")===0,i=ml(t,n[t],a);t==="float"&&(t="cssFloat"),a?e.setProperty(t,i):e[t]=i}}var $m=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zi(e,n){if(n){if($m[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(s(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(s(61))}if(n.style!=null&&typeof n.style!="object")throw Error(s(62))}}function Qi(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ji=null;function Bi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ui=null,Yt=null,Gt=null;function pl(e){if(e=Ja(e)){if(typeof Ui!="function")throw Error(s(280));var n=e.stateNode;n&&(n=Ir(n),Ui(e.stateNode,e.type,n))}}function Tl(e){Yt?Gt?Gt.push(e):Gt=[e]:Yt=e}function Ll(){if(Yt){var e=Yt,n=Gt;if(Gt=Yt=null,pl(e),n)for(e=0;e<n.length;e++)pl(n[e])}}function vl(e,n){return e(n)}function hl(){}var Yi=!1;function gl(e,n,t){if(Yi)return e(n,t);Yi=!0;try{return vl(e,n,t)}finally{Yi=!1,(Yt!==null||Gt!==null)&&(hl(),Ll())}}function ya(e,n){var t=e.stateNode;if(t===null)return null;var a=Ir(t);if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(s(231,n,typeof t));return t}var Gi=!1;if(L)try{var Ma={};Object.defineProperty(Ma,"passive",{get:function(){Gi=!0}}),window.addEventListener("test",Ma,Ma),window.removeEventListener("test",Ma,Ma)}catch{Gi=!1}function qm(e,n,t,a,i,l,d,p,h){var b=Array.prototype.slice.call(arguments,3);try{n.apply(t,b)}catch(I){this.onError(I)}}var Ea=!1,Tr=null,Lr=!1,Ki=null,Hm={onError:function(e){Ea=!0,Tr=e}};function Wm(e,n,t,a,i,l,d,p,h){Ea=!1,Tr=null,qm.apply(Hm,arguments)}function Zm(e,n,t,a,i,l,d,p,h){if(Wm.apply(this,arguments),Ea){if(Ea){var b=Tr;Ea=!1,Tr=null}else throw Error(s(198));Lr||(Lr=!0,Ki=b)}}function Vt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Pl(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function yl(e){if(Vt(e)!==e)throw Error(s(188))}function Xm(e){var n=e.alternate;if(!n){if(n=Vt(e),n===null)throw Error(s(188));return n!==e?null:e}for(var t=e,a=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(a=i.return,a!==null){t=a;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return yl(i),e;if(l===a)return yl(i),n;l=l.sibling}throw Error(s(188))}if(t.return!==a.return)t=i,a=l;else{for(var d=!1,p=i.child;p;){if(p===t){d=!0,t=i,a=l;break}if(p===a){d=!0,a=i,t=l;break}p=p.sibling}if(!d){for(p=l.child;p;){if(p===t){d=!0,t=l,a=i;break}if(p===a){d=!0,a=l,t=i;break}p=p.sibling}if(!d)throw Error(s(189))}}if(t.alternate!==a)throw Error(s(190))}if(t.tag!==3)throw Error(s(188));return t.stateNode.current===t?e:n}function Ml(e){return e=Xm(e),e!==null?El(e):null}function El(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=El(e);if(n!==null)return n;e=e.sibling}return null}var Nl=o.unstable_scheduleCallback,Cl=o.unstable_cancelCallback,ef=o.unstable_shouldYield,nf=o.unstable_requestPaint,Fe=o.unstable_now,tf=o.unstable_getCurrentPriorityLevel,$i=o.unstable_ImmediatePriority,xl=o.unstable_UserBlockingPriority,vr=o.unstable_NormalPriority,af=o.unstable_LowPriority,Sl=o.unstable_IdlePriority,hr=null,Fn=null;function rf(e){if(Fn&&typeof Fn.onCommitFiberRoot=="function")try{Fn.onCommitFiberRoot(hr,e,void 0,(e.current.flags&128)===128)}catch{}}var An=Math.clz32?Math.clz32:lf,of=Math.log,sf=Math.LN2;function lf(e){return e>>>=0,e===0?32:31-(of(e)/sf|0)|0}var gr=64,Pr=4194304;function Na(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yr(e,n){var t=e.pendingLanes;if(t===0)return 0;var a=0,i=e.suspendedLanes,l=e.pingedLanes,d=t&268435455;if(d!==0){var p=d&~i;p!==0?a=Na(p):(l&=d,l!==0&&(a=Na(l)))}else d=t&~i,d!==0?a=Na(d):l!==0&&(a=Na(l));if(a===0)return 0;if(n!==0&&n!==a&&(n&i)===0&&(i=a&-a,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if((a&4)!==0&&(a|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)t=31-An(n),i=1<<t,a|=e[t],n&=~i;return a}function cf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uf(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var d=31-An(l),p=1<<d,h=i[d];h===-1?((p&t)===0||(p&a)!==0)&&(i[d]=cf(p,n)):h<=n&&(e.expiredLanes|=p),l&=~p}}function qi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bl(){var e=gr;return gr<<=1,(gr&4194240)===0&&(gr=64),e}function Hi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Ca(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-An(n),e[n]=t}function df(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-An(t),l=1<<i;n[i]=0,a[i]=-1,e[i]=-1,t&=~l}}function Wi(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-An(t),i=1<<a;i&n|e[a]&n&&(e[a]|=n),t&=~i}}var be=0;function Vl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Al,Zi,wl,jl,kl,Xi=!1,Mr=[],it=null,ot=null,st=null,xa=new Map,Sa=new Map,lt=[],mf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _l(e,n){switch(e){case"focusin":case"focusout":it=null;break;case"dragenter":case"dragleave":ot=null;break;case"mouseover":case"mouseout":st=null;break;case"pointerover":case"pointerout":xa.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sa.delete(n.pointerId)}}function ba(e,n,t,a,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:l,targetContainers:[i]},n!==null&&(n=Ja(n),n!==null&&Zi(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function ff(e,n,t,a,i){switch(n){case"focusin":return it=ba(it,e,n,t,a,i),!0;case"dragenter":return ot=ba(ot,e,n,t,a,i),!0;case"mouseover":return st=ba(st,e,n,t,a,i),!0;case"pointerover":var l=i.pointerId;return xa.set(l,ba(xa.get(l)||null,e,n,t,a,i)),!0;case"gotpointercapture":return l=i.pointerId,Sa.set(l,ba(Sa.get(l)||null,e,n,t,a,i)),!0}return!1}function Rl(e){var n=At(e.target);if(n!==null){var t=Vt(n);if(t!==null){if(n=t.tag,n===13){if(n=Pl(t),n!==null){e.blockedOn=n,kl(e.priority,function(){wl(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Er(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=no(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);Ji=a,t.target.dispatchEvent(a),Ji=null}else return n=Ja(t),n!==null&&Zi(n),e.blockedOn=t,!1;n.shift()}return!0}function Dl(e,n,t){Er(e)&&t.delete(n)}function pf(){Xi=!1,it!==null&&Er(it)&&(it=null),ot!==null&&Er(ot)&&(ot=null),st!==null&&Er(st)&&(st=null),xa.forEach(Dl),Sa.forEach(Dl)}function Va(e,n){e.blockedOn===n&&(e.blockedOn=null,Xi||(Xi=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,pf)))}function Aa(e){function n(i){return Va(i,e)}if(0<Mr.length){Va(Mr[0],e);for(var t=1;t<Mr.length;t++){var a=Mr[t];a.blockedOn===e&&(a.blockedOn=null)}}for(it!==null&&Va(it,e),ot!==null&&Va(ot,e),st!==null&&Va(st,e),xa.forEach(n),Sa.forEach(n),t=0;t<lt.length;t++)a=lt[t],a.blockedOn===e&&(a.blockedOn=null);for(;0<lt.length&&(t=lt[0],t.blockedOn===null);)Rl(t),t.blockedOn===null&&lt.shift()}var Kt=Z.ReactCurrentBatchConfig,Nr=!0;function Tf(e,n,t,a){var i=be,l=Kt.transition;Kt.transition=null;try{be=1,eo(e,n,t,a)}finally{be=i,Kt.transition=l}}function Lf(e,n,t,a){var i=be,l=Kt.transition;Kt.transition=null;try{be=4,eo(e,n,t,a)}finally{be=i,Kt.transition=l}}function eo(e,n,t,a){if(Nr){var i=no(e,n,t,a);if(i===null)go(e,n,a,Cr,t),_l(e,a);else if(ff(i,e,n,t,a))a.stopPropagation();else if(_l(e,a),n&4&&-1<mf.indexOf(e)){for(;i!==null;){var l=Ja(i);if(l!==null&&Al(l),l=no(e,n,t,a),l===null&&go(e,n,a,Cr,t),l===i)break;i=l}i!==null&&a.stopPropagation()}else go(e,n,a,null,t)}}var Cr=null;function no(e,n,t,a){if(Cr=null,e=Bi(a),e=At(e),e!==null)if(n=Vt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Pl(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Cr=e,null}function Il(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tf()){case $i:return 1;case xl:return 4;case vr:case af:return 16;case Sl:return 536870912;default:return 16}default:return 16}}var ct=null,to=null,xr=null;function Ol(){if(xr)return xr;var e,n=to,t=n.length,a,i="value"in ct?ct.value:ct.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var d=t-e;for(a=1;a<=d&&n[t-a]===i[l-a];a++);return xr=i.slice(e,1<a?1-a:void 0)}function Sr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function br(){return!0}function Fl(){return!1}function mn(e){function n(t,a,i,l,d){this._reactName=t,this._targetInst=i,this.type=a,this.nativeEvent=l,this.target=d,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(t=e[p],this[p]=t?t(l):l[p]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?br:Fl,this.isPropagationStopped=Fl,this}return U(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=br)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=br)},persist:function(){},isPersistent:br}),n}var $t={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ao=mn($t),wa=U({},$t,{view:0,detail:0}),vf=mn(wa),ro,io,ja,Vr=U({},wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:so,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ja&&(ja&&e.type==="mousemove"?(ro=e.screenX-ja.screenX,io=e.screenY-ja.screenY):io=ro=0,ja=e),ro)},movementY:function(e){return"movementY"in e?e.movementY:io}}),zl=mn(Vr),hf=U({},Vr,{dataTransfer:0}),gf=mn(hf),Pf=U({},wa,{relatedTarget:0}),oo=mn(Pf),yf=U({},$t,{animationName:0,elapsedTime:0,pseudoElement:0}),Mf=mn(yf),Ef=U({},$t,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nf=mn(Ef),Cf=U({},$t,{data:0}),Ql=mn(Cf),xf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=bf[e])?!!n[e]:!1}function so(){return Vf}var Af=U({},wa,{key:function(e){if(e.key){var n=xf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Sr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:so,charCode:function(e){return e.type==="keypress"?Sr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wf=mn(Af),jf=U({},Vr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jl=mn(jf),kf=U({},wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:so}),_f=mn(kf),Rf=U({},$t,{propertyName:0,elapsedTime:0,pseudoElement:0}),Df=mn(Rf),If=U({},Vr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Of=mn(If),Ff=[9,13,27,32],lo=L&&"CompositionEvent"in window,ka=null;L&&"documentMode"in document&&(ka=document.documentMode);var zf=L&&"TextEvent"in window&&!ka,Bl=L&&(!lo||ka&&8<ka&&11>=ka),Ul=" ",Yl=!1;function Gl(e,n){switch(e){case"keyup":return Ff.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qt=!1;function Qf(e,n){switch(e){case"compositionend":return Kl(n);case"keypress":return n.which!==32?null:(Yl=!0,Ul);case"textInput":return e=n.data,e===Ul&&Yl?null:e;default:return null}}function Jf(e,n){if(qt)return e==="compositionend"||!lo&&Gl(e,n)?(e=Ol(),xr=to=ct=null,qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Bl&&n.locale!=="ko"?null:n.data;default:return null}}var Bf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $l(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Bf[e.type]:n==="textarea"}function ql(e,n,t,a){Tl(a),n=_r(n,"onChange"),0<n.length&&(t=new ao("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var _a=null,Ra=null;function Uf(e){fc(e,0)}function Ar(e){var n=ea(e);if(Gn(n))return e}function Yf(e,n){if(e==="change")return n}var Hl=!1;if(L){var co;if(L){var uo="oninput"in document;if(!uo){var Wl=document.createElement("div");Wl.setAttribute("oninput","return;"),uo=typeof Wl.oninput=="function"}co=uo}else co=!1;Hl=co&&(!document.documentMode||9<document.documentMode)}function Zl(){_a&&(_a.detachEvent("onpropertychange",Xl),Ra=_a=null)}function Xl(e){if(e.propertyName==="value"&&Ar(Ra)){var n=[];ql(n,Ra,e,Bi(e)),gl(Uf,n)}}function Gf(e,n,t){e==="focusin"?(Zl(),_a=n,Ra=t,_a.attachEvent("onpropertychange",Xl)):e==="focusout"&&Zl()}function Kf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ar(Ra)}function $f(e,n){if(e==="click")return Ar(n)}function qf(e,n){if(e==="input"||e==="change")return Ar(n)}function Hf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var wn=typeof Object.is=="function"?Object.is:Hf;function Da(e,n){if(wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var i=t[a];if(!T.call(n,i)||!wn(e[i],n[i]))return!1}return!0}function ec(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nc(e,n){var t=ec(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ec(t)}}function tc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?tc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ac(){for(var e=window,n=nn();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=nn(e.document)}return n}function mo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Wf(e){var n=ac(),t=e.focusedElem,a=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&tc(t.ownerDocument.documentElement,t)){if(a!==null&&mo(t)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(a.start,i);a=a.end===void 0?l:Math.min(a.end,i),!e.extend&&l>a&&(i=a,a=l,l=i),i=nc(t,l);var d=nc(t,a);i&&d&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>a?(e.addRange(n),e.extend(d.node,d.offset)):(n.setEnd(d.node,d.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Zf=L&&"documentMode"in document&&11>=document.documentMode,Ht=null,fo=null,Ia=null,po=!1;function rc(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;po||Ht==null||Ht!==nn(a)||(a=Ht,"selectionStart"in a&&mo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ia&&Da(Ia,a)||(Ia=a,a=_r(fo,"onSelect"),0<a.length&&(n=new ao("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=Ht)))}function wr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Wt={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},To={},ic={};L&&(ic=document.createElement("div").style,"AnimationEvent"in window||(delete Wt.animationend.animation,delete Wt.animationiteration.animation,delete Wt.animationstart.animation),"TransitionEvent"in window||delete Wt.transitionend.transition);function jr(e){if(To[e])return To[e];if(!Wt[e])return e;var n=Wt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in ic)return To[e]=n[t];return e}var oc=jr("animationend"),sc=jr("animationiteration"),lc=jr("animationstart"),cc=jr("transitionend"),uc=new Map,dc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ut(e,n){uc.set(e,n),f(n,[e])}for(var Lo=0;Lo<dc.length;Lo++){var vo=dc[Lo],Xf=vo.toLowerCase(),ep=vo[0].toUpperCase()+vo.slice(1);ut(Xf,"on"+ep)}ut(oc,"onAnimationEnd"),ut(sc,"onAnimationIteration"),ut(lc,"onAnimationStart"),ut("dblclick","onDoubleClick"),ut("focusin","onFocus"),ut("focusout","onBlur"),ut(cc,"onTransitionEnd"),v("onMouseEnter",["mouseout","mouseover"]),v("onMouseLeave",["mouseout","mouseover"]),v("onPointerEnter",["pointerout","pointerover"]),v("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),np=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oa));function mc(e,n,t){var a=e.type||"unknown-event";e.currentTarget=t,Zm(a,n,void 0,e),e.currentTarget=null}function fc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],i=a.event;a=a.listeners;e:{var l=void 0;if(n)for(var d=a.length-1;0<=d;d--){var p=a[d],h=p.instance,b=p.currentTarget;if(p=p.listener,h!==l&&i.isPropagationStopped())break e;mc(i,p,b),l=h}else for(d=0;d<a.length;d++){if(p=a[d],h=p.instance,b=p.currentTarget,p=p.listener,h!==l&&i.isPropagationStopped())break e;mc(i,p,b),l=h}}}if(Lr)throw e=Ki,Lr=!1,Ki=null,e}function je(e,n){var t=n[Co];t===void 0&&(t=n[Co]=new Set);var a=e+"__bubble";t.has(a)||(pc(n,e,2,!1),t.add(a))}function ho(e,n,t){var a=0;n&&(a|=4),pc(t,e,a,n)}var kr="_reactListening"+Math.random().toString(36).slice(2);function Fa(e){if(!e[kr]){e[kr]=!0,u.forEach(function(t){t!=="selectionchange"&&(np.has(t)||ho(t,!1,e),ho(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[kr]||(n[kr]=!0,ho("selectionchange",!1,n))}}function pc(e,n,t,a){switch(Il(n)){case 1:var i=Tf;break;case 4:i=Lf;break;default:i=eo}t=i.bind(null,n,t,e),i=void 0,!Gi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function go(e,n,t,a,i){var l=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var d=a.tag;if(d===3||d===4){var p=a.stateNode.containerInfo;if(p===i||p.nodeType===8&&p.parentNode===i)break;if(d===4)for(d=a.return;d!==null;){var h=d.tag;if((h===3||h===4)&&(h=d.stateNode.containerInfo,h===i||h.nodeType===8&&h.parentNode===i))return;d=d.return}for(;p!==null;){if(d=At(p),d===null)return;if(h=d.tag,h===5||h===6){a=l=d;continue e}p=p.parentNode}}a=a.return}gl(function(){var b=l,I=Bi(t),F=[];e:{var D=uc.get(e);if(D!==void 0){var G=ao,$=e;switch(e){case"keypress":if(Sr(t)===0)break e;case"keydown":case"keyup":G=wf;break;case"focusin":$="focus",G=oo;break;case"focusout":$="blur",G=oo;break;case"beforeblur":case"afterblur":G=oo;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=zl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=gf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=_f;break;case oc:case sc:case lc:G=Mf;break;case cc:G=Df;break;case"scroll":G=vf;break;case"wheel":G=Of;break;case"copy":case"cut":case"paste":G=Nf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=Jl}var q=(n&4)!==0,ze=!q&&e==="scroll",E=q?D!==null?D+"Capture":null:D;q=[];for(var g=b,N;g!==null;){N=g;var Q=N.stateNode;if(N.tag===5&&Q!==null&&(N=Q,E!==null&&(Q=ya(g,E),Q!=null&&q.push(za(g,Q,N)))),ze)break;g=g.return}0<q.length&&(D=new G(D,$,null,t,I),F.push({event:D,listeners:q}))}}if((n&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",G=e==="mouseout"||e==="pointerout",D&&t!==Ji&&($=t.relatedTarget||t.fromElement)&&(At($)||$[Kn]))break e;if((G||D)&&(D=I.window===I?I:(D=I.ownerDocument)?D.defaultView||D.parentWindow:window,G?($=t.relatedTarget||t.toElement,G=b,$=$?At($):null,$!==null&&(ze=Vt($),$!==ze||$.tag!==5&&$.tag!==6)&&($=null)):(G=null,$=b),G!==$)){if(q=zl,Q="onMouseLeave",E="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(q=Jl,Q="onPointerLeave",E="onPointerEnter",g="pointer"),ze=G==null?D:ea(G),N=$==null?D:ea($),D=new q(Q,g+"leave",G,t,I),D.target=ze,D.relatedTarget=N,Q=null,At(I)===b&&(q=new q(E,g+"enter",$,t,I),q.target=N,q.relatedTarget=ze,Q=q),ze=Q,G&&$)n:{for(q=G,E=$,g=0,N=q;N;N=Zt(N))g++;for(N=0,Q=E;Q;Q=Zt(Q))N++;for(;0<g-N;)q=Zt(q),g--;for(;0<N-g;)E=Zt(E),N--;for(;g--;){if(q===E||E!==null&&q===E.alternate)break n;q=Zt(q),E=Zt(E)}q=null}else q=null;G!==null&&Tc(F,D,G,q,!1),$!==null&&ze!==null&&Tc(F,ze,$,q,!0)}}e:{if(D=b?ea(b):window,G=D.nodeName&&D.nodeName.toLowerCase(),G==="select"||G==="input"&&D.type==="file")var W=Yf;else if($l(D))if(Hl)W=qf;else{W=Kf;var ne=Gf}else(G=D.nodeName)&&G.toLowerCase()==="input"&&(D.type==="checkbox"||D.type==="radio")&&(W=$f);if(W&&(W=W(e,b))){ql(F,W,t,I);break e}ne&&ne(e,D,b),e==="focusout"&&(ne=D._wrapperState)&&ne.controlled&&D.type==="number"&&St(D,"number",D.value)}switch(ne=b?ea(b):window,e){case"focusin":($l(ne)||ne.contentEditable==="true")&&(Ht=ne,fo=b,Ia=null);break;case"focusout":Ia=fo=Ht=null;break;case"mousedown":po=!0;break;case"contextmenu":case"mouseup":case"dragend":po=!1,rc(F,t,I);break;case"selectionchange":if(Zf)break;case"keydown":case"keyup":rc(F,t,I)}var te;if(lo)e:{switch(e){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else qt?Gl(e,t)&&(se="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(se="onCompositionStart");se&&(Bl&&t.locale!=="ko"&&(qt||se!=="onCompositionStart"?se==="onCompositionEnd"&&qt&&(te=Ol()):(ct=I,to="value"in ct?ct.value:ct.textContent,qt=!0)),ne=_r(b,se),0<ne.length&&(se=new Ql(se,e,null,t,I),F.push({event:se,listeners:ne}),te?se.data=te:(te=Kl(t),te!==null&&(se.data=te)))),(te=zf?Qf(e,t):Jf(e,t))&&(b=_r(b,"onBeforeInput"),0<b.length&&(I=new Ql("onBeforeInput","beforeinput",null,t,I),F.push({event:I,listeners:b}),I.data=te))}fc(F,n)})}function za(e,n,t){return{instance:e,listener:n,currentTarget:t}}function _r(e,n){for(var t=n+"Capture",a=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=ya(e,t),l!=null&&a.unshift(za(e,l,i)),l=ya(e,n),l!=null&&a.push(za(e,l,i))),e=e.return}return a}function Zt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Tc(e,n,t,a,i){for(var l=n._reactName,d=[];t!==null&&t!==a;){var p=t,h=p.alternate,b=p.stateNode;if(h!==null&&h===a)break;p.tag===5&&b!==null&&(p=b,i?(h=ya(t,l),h!=null&&d.unshift(za(t,h,p))):i||(h=ya(t,l),h!=null&&d.push(za(t,h,p)))),t=t.return}d.length!==0&&e.push({event:n,listeners:d})}var tp=/\r\n?/g,ap=/\u0000|\uFFFD/g;function Lc(e){return(typeof e=="string"?e:""+e).replace(tp,`
`).replace(ap,"")}function Rr(e,n,t){if(n=Lc(n),Lc(e)!==n&&t)throw Error(s(425))}function Dr(){}var Po=null,yo=null;function Mo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Eo=typeof setTimeout=="function"?setTimeout:void 0,rp=typeof clearTimeout=="function"?clearTimeout:void 0,vc=typeof Promise=="function"?Promise:void 0,ip=typeof queueMicrotask=="function"?queueMicrotask:typeof vc<"u"?function(e){return vc.resolve(null).then(e).catch(op)}:Eo;function op(e){setTimeout(function(){throw e})}function No(e,n){var t=n,a=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(a===0){e.removeChild(i),Aa(n);return}a--}else t!=="$"&&t!=="$?"&&t!=="$!"||a++;t=i}while(t);Aa(n)}function dt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function hc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Xt=Math.random().toString(36).slice(2),zn="__reactFiber$"+Xt,Qa="__reactProps$"+Xt,Kn="__reactContainer$"+Xt,Co="__reactEvents$"+Xt,sp="__reactListeners$"+Xt,lp="__reactHandles$"+Xt;function At(e){var n=e[zn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Kn]||t[zn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=hc(e);e!==null;){if(t=e[zn])return t;e=hc(e)}return n}e=t,t=e.parentNode}return null}function Ja(e){return e=e[zn]||e[Kn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ea(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function Ir(e){return e[Qa]||null}var xo=[],na=-1;function mt(e){return{current:e}}function ke(e){0>na||(e.current=xo[na],xo[na]=null,na--)}function Ae(e,n){na++,xo[na]=e.current,e.current=n}var ft={},We=mt(ft),on=mt(!1),wt=ft;function ta(e,n){var t=e.type.contextTypes;if(!t)return ft;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function sn(e){return e=e.childContextTypes,e!=null}function Or(){ke(on),ke(We)}function gc(e,n,t){if(We.current!==ft)throw Error(s(168));Ae(We,n),Ae(on,t)}function Pc(e,n,t){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return t;a=a.getChildContext();for(var i in a)if(!(i in n))throw Error(s(108,Pe(e)||"Unknown",i));return U({},t,a)}function Fr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ft,wt=We.current,Ae(We,e),Ae(on,on.current),!0}function yc(e,n,t){var a=e.stateNode;if(!a)throw Error(s(169));t?(e=Pc(e,n,wt),a.__reactInternalMemoizedMergedChildContext=e,ke(on),ke(We),Ae(We,e)):ke(on),Ae(on,t)}var $n=null,zr=!1,So=!1;function Mc(e){$n===null?$n=[e]:$n.push(e)}function cp(e){zr=!0,Mc(e)}function pt(){if(!So&&$n!==null){So=!0;var e=0,n=be;try{var t=$n;for(be=1;e<t.length;e++){var a=t[e];do a=a(!0);while(a!==null)}$n=null,zr=!1}catch(i){throw $n!==null&&($n=$n.slice(e+1)),Nl($i,pt),i}finally{be=n,So=!1}}return null}var aa=[],ra=0,Qr=null,Jr=0,Pn=[],yn=0,jt=null,qn=1,Hn="";function kt(e,n){aa[ra++]=Jr,aa[ra++]=Qr,Qr=e,Jr=n}function Ec(e,n,t){Pn[yn++]=qn,Pn[yn++]=Hn,Pn[yn++]=jt,jt=e;var a=qn;e=Hn;var i=32-An(a)-1;a&=~(1<<i),t+=1;var l=32-An(n)+i;if(30<l){var d=i-i%5;l=(a&(1<<d)-1).toString(32),a>>=d,i-=d,qn=1<<32-An(n)+i|t<<i|a,Hn=l+e}else qn=1<<l|t<<i|a,Hn=e}function bo(e){e.return!==null&&(kt(e,1),Ec(e,1,0))}function Vo(e){for(;e===Qr;)Qr=aa[--ra],aa[ra]=null,Jr=aa[--ra],aa[ra]=null;for(;e===jt;)jt=Pn[--yn],Pn[yn]=null,Hn=Pn[--yn],Pn[yn]=null,qn=Pn[--yn],Pn[yn]=null}var fn=null,pn=null,_e=!1,jn=null;function Nc(e,n){var t=Cn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Cc(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,fn=e,pn=dt(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,fn=e,pn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=jt!==null?{id:qn,overflow:Hn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Cn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,fn=e,pn=null,!0):!1;default:return!1}}function Ao(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wo(e){if(_e){var n=pn;if(n){var t=n;if(!Cc(e,n)){if(Ao(e))throw Error(s(418));n=dt(t.nextSibling);var a=fn;n&&Cc(e,n)?Nc(a,t):(e.flags=e.flags&-4097|2,_e=!1,fn=e)}}else{if(Ao(e))throw Error(s(418));e.flags=e.flags&-4097|2,_e=!1,fn=e}}}function xc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;fn=e}function Br(e){if(e!==fn)return!1;if(!_e)return xc(e),_e=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Mo(e.type,e.memoizedProps)),n&&(n=pn)){if(Ao(e))throw Sc(),Error(s(418));for(;n;)Nc(e,n),n=dt(n.nextSibling)}if(xc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){pn=dt(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}pn=null}}else pn=fn?dt(e.stateNode.nextSibling):null;return!0}function Sc(){for(var e=pn;e;)e=dt(e.nextSibling)}function ia(){pn=fn=null,_e=!1}function jo(e){jn===null?jn=[e]:jn.push(e)}var up=Z.ReactCurrentBatchConfig;function Ba(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(s(309));var a=t.stateNode}if(!a)throw Error(s(147,e));var i=a,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(d){var p=i.refs;d===null?delete p[l]:p[l]=d},n._stringRef=l,n)}if(typeof e!="string")throw Error(s(284));if(!t._owner)throw Error(s(290,e))}return e}function Ur(e,n){throw e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function bc(e){var n=e._init;return n(e._payload)}function Vc(e){function n(E,g){if(e){var N=E.deletions;N===null?(E.deletions=[g],E.flags|=16):N.push(g)}}function t(E,g){if(!e)return null;for(;g!==null;)n(E,g),g=g.sibling;return null}function a(E,g){for(E=new Map;g!==null;)g.key!==null?E.set(g.key,g):E.set(g.index,g),g=g.sibling;return E}function i(E,g){return E=Mt(E,g),E.index=0,E.sibling=null,E}function l(E,g,N){return E.index=N,e?(N=E.alternate,N!==null?(N=N.index,N<g?(E.flags|=2,g):N):(E.flags|=2,g)):(E.flags|=1048576,g)}function d(E){return e&&E.alternate===null&&(E.flags|=2),E}function p(E,g,N,Q){return g===null||g.tag!==6?(g=Es(N,E.mode,Q),g.return=E,g):(g=i(g,N),g.return=E,g)}function h(E,g,N,Q){var W=N.type;return W===ae?I(E,g,N.props.children,Q,N.key):g!==null&&(g.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Te&&bc(W)===g.type)?(Q=i(g,N.props),Q.ref=Ba(E,g,N),Q.return=E,Q):(Q=pi(N.type,N.key,N.props,null,E.mode,Q),Q.ref=Ba(E,g,N),Q.return=E,Q)}function b(E,g,N,Q){return g===null||g.tag!==4||g.stateNode.containerInfo!==N.containerInfo||g.stateNode.implementation!==N.implementation?(g=Ns(N,E.mode,Q),g.return=E,g):(g=i(g,N.children||[]),g.return=E,g)}function I(E,g,N,Q,W){return g===null||g.tag!==7?(g=Qt(N,E.mode,Q,W),g.return=E,g):(g=i(g,N),g.return=E,g)}function F(E,g,N){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Es(""+g,E.mode,N),g.return=E,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case fe:return N=pi(g.type,g.key,g.props,null,E.mode,N),N.ref=Ba(E,null,g),N.return=E,N;case le:return g=Ns(g,E.mode,N),g.return=E,g;case Te:var Q=g._init;return F(E,Q(g._payload),N)}if(bt(g)||H(g))return g=Qt(g,E.mode,N,null),g.return=E,g;Ur(E,g)}return null}function D(E,g,N,Q){var W=g!==null?g.key:null;if(typeof N=="string"&&N!==""||typeof N=="number")return W!==null?null:p(E,g,""+N,Q);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case fe:return N.key===W?h(E,g,N,Q):null;case le:return N.key===W?b(E,g,N,Q):null;case Te:return W=N._init,D(E,g,W(N._payload),Q)}if(bt(N)||H(N))return W!==null?null:I(E,g,N,Q,null);Ur(E,N)}return null}function G(E,g,N,Q,W){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return E=E.get(N)||null,p(g,E,""+Q,W);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case fe:return E=E.get(Q.key===null?N:Q.key)||null,h(g,E,Q,W);case le:return E=E.get(Q.key===null?N:Q.key)||null,b(g,E,Q,W);case Te:var ne=Q._init;return G(E,g,N,ne(Q._payload),W)}if(bt(Q)||H(Q))return E=E.get(N)||null,I(g,E,Q,W,null);Ur(g,Q)}return null}function $(E,g,N,Q){for(var W=null,ne=null,te=g,se=g=0,Ke=null;te!==null&&se<N.length;se++){te.index>se?(Ke=te,te=null):Ke=te.sibling;var Ce=D(E,te,N[se],Q);if(Ce===null){te===null&&(te=Ke);break}e&&te&&Ce.alternate===null&&n(E,te),g=l(Ce,g,se),ne===null?W=Ce:ne.sibling=Ce,ne=Ce,te=Ke}if(se===N.length)return t(E,te),_e&&kt(E,se),W;if(te===null){for(;se<N.length;se++)te=F(E,N[se],Q),te!==null&&(g=l(te,g,se),ne===null?W=te:ne.sibling=te,ne=te);return _e&&kt(E,se),W}for(te=a(E,te);se<N.length;se++)Ke=G(te,E,se,N[se],Q),Ke!==null&&(e&&Ke.alternate!==null&&te.delete(Ke.key===null?se:Ke.key),g=l(Ke,g,se),ne===null?W=Ke:ne.sibling=Ke,ne=Ke);return e&&te.forEach(function(Et){return n(E,Et)}),_e&&kt(E,se),W}function q(E,g,N,Q){var W=H(N);if(typeof W!="function")throw Error(s(150));if(N=W.call(N),N==null)throw Error(s(151));for(var ne=W=null,te=g,se=g=0,Ke=null,Ce=N.next();te!==null&&!Ce.done;se++,Ce=N.next()){te.index>se?(Ke=te,te=null):Ke=te.sibling;var Et=D(E,te,Ce.value,Q);if(Et===null){te===null&&(te=Ke);break}e&&te&&Et.alternate===null&&n(E,te),g=l(Et,g,se),ne===null?W=Et:ne.sibling=Et,ne=Et,te=Ke}if(Ce.done)return t(E,te),_e&&kt(E,se),W;if(te===null){for(;!Ce.done;se++,Ce=N.next())Ce=F(E,Ce.value,Q),Ce!==null&&(g=l(Ce,g,se),ne===null?W=Ce:ne.sibling=Ce,ne=Ce);return _e&&kt(E,se),W}for(te=a(E,te);!Ce.done;se++,Ce=N.next())Ce=G(te,E,se,Ce.value,Q),Ce!==null&&(e&&Ce.alternate!==null&&te.delete(Ce.key===null?se:Ce.key),g=l(Ce,g,se),ne===null?W=Ce:ne.sibling=Ce,ne=Ce);return e&&te.forEach(function(Bp){return n(E,Bp)}),_e&&kt(E,se),W}function ze(E,g,N,Q){if(typeof N=="object"&&N!==null&&N.type===ae&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case fe:e:{for(var W=N.key,ne=g;ne!==null;){if(ne.key===W){if(W=N.type,W===ae){if(ne.tag===7){t(E,ne.sibling),g=i(ne,N.props.children),g.return=E,E=g;break e}}else if(ne.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Te&&bc(W)===ne.type){t(E,ne.sibling),g=i(ne,N.props),g.ref=Ba(E,ne,N),g.return=E,E=g;break e}t(E,ne);break}else n(E,ne);ne=ne.sibling}N.type===ae?(g=Qt(N.props.children,E.mode,Q,N.key),g.return=E,E=g):(Q=pi(N.type,N.key,N.props,null,E.mode,Q),Q.ref=Ba(E,g,N),Q.return=E,E=Q)}return d(E);case le:e:{for(ne=N.key;g!==null;){if(g.key===ne)if(g.tag===4&&g.stateNode.containerInfo===N.containerInfo&&g.stateNode.implementation===N.implementation){t(E,g.sibling),g=i(g,N.children||[]),g.return=E,E=g;break e}else{t(E,g);break}else n(E,g);g=g.sibling}g=Ns(N,E.mode,Q),g.return=E,E=g}return d(E);case Te:return ne=N._init,ze(E,g,ne(N._payload),Q)}if(bt(N))return $(E,g,N,Q);if(H(N))return q(E,g,N,Q);Ur(E,N)}return typeof N=="string"&&N!==""||typeof N=="number"?(N=""+N,g!==null&&g.tag===6?(t(E,g.sibling),g=i(g,N),g.return=E,E=g):(t(E,g),g=Es(N,E.mode,Q),g.return=E,E=g),d(E)):t(E,g)}return ze}var oa=Vc(!0),Ac=Vc(!1),Yr=mt(null),Gr=null,sa=null,ko=null;function _o(){ko=sa=Gr=null}function Ro(e){var n=Yr.current;ke(Yr),e._currentValue=n}function Do(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function la(e,n){Gr=e,ko=sa=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(ln=!0),e.firstContext=null)}function Mn(e){var n=e._currentValue;if(ko!==e)if(e={context:e,memoizedValue:n,next:null},sa===null){if(Gr===null)throw Error(s(308));sa=e,Gr.dependencies={lanes:0,firstContext:e}}else sa=sa.next=e;return n}var _t=null;function Io(e){_t===null?_t=[e]:_t.push(e)}function wc(e,n,t,a){var i=n.interleaved;return i===null?(t.next=t,Io(n)):(t.next=i.next,i.next=t),n.interleaved=t,Wn(e,a)}function Wn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Tt=!1;function Oo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Zn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Lt(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ne&2)!==0){var i=a.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n,Wn(e,t)}return i=a.interleaved,i===null?(n.next=n,Io(a)):(n.next=i.next,i.next=n),a.interleaved=n,Wn(e,t)}function Kr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Wi(e,t)}}function kc(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var d={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=d:l=l.next=d,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:a.shared,effects:a.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function $r(e,n,t,a){var i=e.updateQueue;Tt=!1;var l=i.firstBaseUpdate,d=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var h=p,b=h.next;h.next=null,d===null?l=b:d.next=b,d=h;var I=e.alternate;I!==null&&(I=I.updateQueue,p=I.lastBaseUpdate,p!==d&&(p===null?I.firstBaseUpdate=b:p.next=b,I.lastBaseUpdate=h))}if(l!==null){var F=i.baseState;d=0,I=b=h=null,p=l;do{var D=p.lane,G=p.eventTime;if((a&D)===D){I!==null&&(I=I.next={eventTime:G,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var $=e,q=p;switch(D=n,G=t,q.tag){case 1:if($=q.payload,typeof $=="function"){F=$.call(G,F,D);break e}F=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=q.payload,D=typeof $=="function"?$.call(G,F,D):$,D==null)break e;F=U({},F,D);break e;case 2:Tt=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,D=i.effects,D===null?i.effects=[p]:D.push(p))}else G={eventTime:G,lane:D,tag:p.tag,payload:p.payload,callback:p.callback,next:null},I===null?(b=I=G,h=F):I=I.next=G,d|=D;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;D=p,p=D.next,D.next=null,i.lastBaseUpdate=D,i.shared.pending=null}}while(!0);if(I===null&&(h=F),i.baseState=h,i.firstBaseUpdate=b,i.lastBaseUpdate=I,n=i.shared.interleaved,n!==null){i=n;do d|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);It|=d,e.lanes=d,e.memoizedState=F}}function _c(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],i=a.callback;if(i!==null){if(a.callback=null,a=t,typeof i!="function")throw Error(s(191,i));i.call(a)}}}var Ua={},Qn=mt(Ua),Ya=mt(Ua),Ga=mt(Ua);function Rt(e){if(e===Ua)throw Error(s(174));return e}function Fo(e,n){switch(Ae(Ga,n),Ae(Ya,e),Ae(Qn,Ua),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:O(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=O(n,e)}ke(Qn),Ae(Qn,n)}function ca(){ke(Qn),ke(Ya),ke(Ga)}function Rc(e){Rt(Ga.current);var n=Rt(Qn.current),t=O(n,e.type);n!==t&&(Ae(Ya,e),Ae(Qn,t))}function zo(e){Ya.current===e&&(ke(Qn),ke(Ya))}var Re=mt(0);function qr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Qo=[];function Jo(){for(var e=0;e<Qo.length;e++)Qo[e]._workInProgressVersionPrimary=null;Qo.length=0}var Hr=Z.ReactCurrentDispatcher,Bo=Z.ReactCurrentBatchConfig,Dt=0,De=null,Be=null,Ye=null,Wr=!1,Ka=!1,$a=0,dp=0;function Ze(){throw Error(s(321))}function Uo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!wn(e[t],n[t]))return!1;return!0}function Yo(e,n,t,a,i,l){if(Dt=l,De=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Hr.current=e===null||e.memoizedState===null?Tp:Lp,e=t(a,i),Ka){l=0;do{if(Ka=!1,$a=0,25<=l)throw Error(s(301));l+=1,Ye=Be=null,n.updateQueue=null,Hr.current=vp,e=t(a,i)}while(Ka)}if(Hr.current=ei,n=Be!==null&&Be.next!==null,Dt=0,Ye=Be=De=null,Wr=!1,n)throw Error(s(300));return e}function Go(){var e=$a!==0;return $a=0,e}function Jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?De.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function En(){if(Be===null){var e=De.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var n=Ye===null?De.memoizedState:Ye.next;if(n!==null)Ye=n,Be=e;else{if(e===null)throw Error(s(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Ye===null?De.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function qa(e,n){return typeof n=="function"?n(e):n}function Ko(e){var n=En(),t=n.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=e;var a=Be,i=a.baseQueue,l=t.pending;if(l!==null){if(i!==null){var d=i.next;i.next=l.next,l.next=d}a.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,a=a.baseState;var p=d=null,h=null,b=l;do{var I=b.lane;if((Dt&I)===I)h!==null&&(h=h.next={lane:0,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),a=b.hasEagerState?b.eagerState:e(a,b.action);else{var F={lane:I,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null};h===null?(p=h=F,d=a):h=h.next=F,De.lanes|=I,It|=I}b=b.next}while(b!==null&&b!==l);h===null?d=a:h.next=p,wn(a,n.memoizedState)||(ln=!0),n.memoizedState=a,n.baseState=d,n.baseQueue=h,t.lastRenderedState=a}if(e=t.interleaved,e!==null){i=e;do l=i.lane,De.lanes|=l,It|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function $o(e){var n=En(),t=n.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=e;var a=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var d=i=i.next;do l=e(l,d.action),d=d.next;while(d!==i);wn(l,n.memoizedState)||(ln=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,a]}function Dc(){}function Ic(e,n){var t=De,a=En(),i=n(),l=!wn(a.memoizedState,i);if(l&&(a.memoizedState=i,ln=!0),a=a.queue,qo(zc.bind(null,t,a,e),[e]),a.getSnapshot!==n||l||Ye!==null&&Ye.memoizedState.tag&1){if(t.flags|=2048,Ha(9,Fc.bind(null,t,a,i,n),void 0,null),Ge===null)throw Error(s(349));(Dt&30)!==0||Oc(t,n,i)}return i}function Oc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=De.updateQueue,n===null?(n={lastEffect:null,stores:null},De.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Fc(e,n,t,a){n.value=t,n.getSnapshot=a,Qc(n)&&Jc(e)}function zc(e,n,t){return t(function(){Qc(n)&&Jc(e)})}function Qc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!wn(e,t)}catch{return!0}}function Jc(e){var n=Wn(e,1);n!==null&&Dn(n,e,1,-1)}function Bc(e){var n=Jn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:e},n.queue=e,e=e.dispatch=pp.bind(null,De,e),[n.memoizedState,e]}function Ha(e,n,t,a){return e={tag:e,create:n,destroy:t,deps:a,next:null},n=De.updateQueue,n===null?(n={lastEffect:null,stores:null},De.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e)),e}function Uc(){return En().memoizedState}function Zr(e,n,t,a){var i=Jn();De.flags|=e,i.memoizedState=Ha(1|n,t,void 0,a===void 0?null:a)}function Xr(e,n,t,a){var i=En();a=a===void 0?null:a;var l=void 0;if(Be!==null){var d=Be.memoizedState;if(l=d.destroy,a!==null&&Uo(a,d.deps)){i.memoizedState=Ha(n,t,l,a);return}}De.flags|=e,i.memoizedState=Ha(1|n,t,l,a)}function Yc(e,n){return Zr(8390656,8,e,n)}function qo(e,n){return Xr(2048,8,e,n)}function Gc(e,n){return Xr(4,2,e,n)}function Kc(e,n){return Xr(4,4,e,n)}function $c(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function qc(e,n,t){return t=t!=null?t.concat([e]):null,Xr(4,4,$c.bind(null,n,e),t)}function Ho(){}function Hc(e,n){var t=En();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&Uo(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function Wc(e,n){var t=En();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&Uo(n,a[1])?a[0]:(e=e(),t.memoizedState=[e,n],e)}function Zc(e,n,t){return(Dt&21)===0?(e.baseState&&(e.baseState=!1,ln=!0),e.memoizedState=t):(wn(t,n)||(t=bl(),De.lanes|=t,It|=t,e.baseState=!0),n)}function mp(e,n){var t=be;be=t!==0&&4>t?t:4,e(!0);var a=Bo.transition;Bo.transition={};try{e(!1),n()}finally{be=t,Bo.transition=a}}function Xc(){return En().memoizedState}function fp(e,n,t){var a=Pt(e);if(t={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null},eu(e))nu(n,t);else if(t=wc(e,n,t,a),t!==null){var i=an();Dn(t,e,a,i),tu(t,n,a)}}function pp(e,n,t){var a=Pt(e),i={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null};if(eu(e))nu(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var d=n.lastRenderedState,p=l(d,t);if(i.hasEagerState=!0,i.eagerState=p,wn(p,d)){var h=n.interleaved;h===null?(i.next=i,Io(n)):(i.next=h.next,h.next=i),n.interleaved=i;return}}catch{}finally{}t=wc(e,n,i,a),t!==null&&(i=an(),Dn(t,e,a,i),tu(t,n,a))}}function eu(e){var n=e.alternate;return e===De||n!==null&&n===De}function nu(e,n){Ka=Wr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function tu(e,n,t){if((t&4194240)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Wi(e,t)}}var ei={readContext:Mn,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},Tp={readContext:Mn,useCallback:function(e,n){return Jn().memoizedState=[e,n===void 0?null:n],e},useContext:Mn,useEffect:Yc,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Zr(4194308,4,$c.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Zr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Zr(4,2,e,n)},useMemo:function(e,n){var t=Jn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var a=Jn();return n=t!==void 0?t(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=fp.bind(null,De,e),[a.memoizedState,e]},useRef:function(e){var n=Jn();return e={current:e},n.memoizedState=e},useState:Bc,useDebugValue:Ho,useDeferredValue:function(e){return Jn().memoizedState=e},useTransition:function(){var e=Bc(!1),n=e[0];return e=mp.bind(null,e[1]),Jn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var a=De,i=Jn();if(_e){if(t===void 0)throw Error(s(407));t=t()}else{if(t=n(),Ge===null)throw Error(s(349));(Dt&30)!==0||Oc(a,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,Yc(zc.bind(null,a,l,e),[e]),a.flags|=2048,Ha(9,Fc.bind(null,a,l,t,n),void 0,null),t},useId:function(){var e=Jn(),n=Ge.identifierPrefix;if(_e){var t=Hn,a=qn;t=(a&~(1<<32-An(a)-1)).toString(32)+t,n=":"+n+"R"+t,t=$a++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=dp++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Lp={readContext:Mn,useCallback:Hc,useContext:Mn,useEffect:qo,useImperativeHandle:qc,useInsertionEffect:Gc,useLayoutEffect:Kc,useMemo:Wc,useReducer:Ko,useRef:Uc,useState:function(){return Ko(qa)},useDebugValue:Ho,useDeferredValue:function(e){var n=En();return Zc(n,Be.memoizedState,e)},useTransition:function(){var e=Ko(qa)[0],n=En().memoizedState;return[e,n]},useMutableSource:Dc,useSyncExternalStore:Ic,useId:Xc,unstable_isNewReconciler:!1},vp={readContext:Mn,useCallback:Hc,useContext:Mn,useEffect:qo,useImperativeHandle:qc,useInsertionEffect:Gc,useLayoutEffect:Kc,useMemo:Wc,useReducer:$o,useRef:Uc,useState:function(){return $o(qa)},useDebugValue:Ho,useDeferredValue:function(e){var n=En();return Be===null?n.memoizedState=e:Zc(n,Be.memoizedState,e)},useTransition:function(){var e=$o(qa)[0],n=En().memoizedState;return[e,n]},useMutableSource:Dc,useSyncExternalStore:Ic,useId:Xc,unstable_isNewReconciler:!1};function kn(e,n){if(e&&e.defaultProps){n=U({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Wo(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:U({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ni={isMounted:function(e){return(e=e._reactInternals)?Vt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var a=an(),i=Pt(e),l=Zn(a,i);l.payload=n,t!=null&&(l.callback=t),n=Lt(e,l,i),n!==null&&(Dn(n,e,i,a),Kr(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=an(),i=Pt(e),l=Zn(a,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=Lt(e,l,i),n!==null&&(Dn(n,e,i,a),Kr(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=an(),a=Pt(e),i=Zn(t,a);i.tag=2,n!=null&&(i.callback=n),n=Lt(e,i,a),n!==null&&(Dn(n,e,a,t),Kr(n,e,a))}};function au(e,n,t,a,i,l,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,l,d):n.prototype&&n.prototype.isPureReactComponent?!Da(t,a)||!Da(i,l):!0}function ru(e,n,t){var a=!1,i=ft,l=n.contextType;return typeof l=="object"&&l!==null?l=Mn(l):(i=sn(n)?wt:We.current,a=n.contextTypes,l=(a=a!=null)?ta(e,i):ft),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ni,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function iu(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&ni.enqueueReplaceState(n,n.state,null)}function Zo(e,n,t,a){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Oo(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=Mn(l):(l=sn(n)?wt:We.current,i.context=ta(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Wo(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&ni.enqueueReplaceState(i,i.state,null),$r(e,t,i,a),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ua(e,n){try{var t="",a=n;do t+=B(a),a=a.return;while(a);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function Xo(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function es(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var hp=typeof WeakMap=="function"?WeakMap:Map;function ou(e,n,t){t=Zn(-1,t),t.tag=3,t.payload={element:null};var a=n.value;return t.callback=function(){li||(li=!0,Ts=a),es(e,n)},t}function su(e,n,t){t=Zn(-1,t),t.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var i=n.value;t.payload=function(){return a(i)},t.callback=function(){es(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){es(e,n),typeof a!="function"&&(ht===null?ht=new Set([this]):ht.add(this));var d=n.stack;this.componentDidCatch(n.value,{componentStack:d!==null?d:""})}),t}function lu(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new hp;var i=new Set;a.set(n,i)}else i=a.get(n),i===void 0&&(i=new Set,a.set(n,i));i.has(t)||(i.add(t),e=jp.bind(null,e,n,t),n.then(e,e))}function cu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function uu(e,n,t,a,i){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Zn(-1,1),n.tag=2,Lt(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var gp=Z.ReactCurrentOwner,ln=!1;function tn(e,n,t,a){n.child=e===null?Ac(n,null,t,a):oa(n,e.child,t,a)}function du(e,n,t,a,i){t=t.render;var l=n.ref;return la(n,i),a=Yo(e,n,t,a,l,i),t=Go(),e!==null&&!ln?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Xn(e,n,i)):(_e&&t&&bo(n),n.flags|=1,tn(e,n,a,i),n.child)}function mu(e,n,t,a,i){if(e===null){var l=t.type;return typeof l=="function"&&!Ms(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,fu(e,n,l,a,i)):(e=pi(t.type,null,a,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,(e.lanes&i)===0){var d=l.memoizedProps;if(t=t.compare,t=t!==null?t:Da,t(d,a)&&e.ref===n.ref)return Xn(e,n,i)}return n.flags|=1,e=Mt(l,a),e.ref=n.ref,e.return=n,n.child=e}function fu(e,n,t,a,i){if(e!==null){var l=e.memoizedProps;if(Da(l,a)&&e.ref===n.ref)if(ln=!1,n.pendingProps=a=l,(e.lanes&i)!==0)(e.flags&131072)!==0&&(ln=!0);else return n.lanes=e.lanes,Xn(e,n,i)}return ns(e,n,t,a,i)}function pu(e,n,t){var a=n.pendingProps,i=a.children,l=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ae(ma,Tn),Tn|=t;else{if((t&1073741824)===0)return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Ae(ma,Tn),Tn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=l!==null?l.baseLanes:t,Ae(ma,Tn),Tn|=a}else l!==null?(a=l.baseLanes|t,n.memoizedState=null):a=t,Ae(ma,Tn),Tn|=a;return tn(e,n,i,t),n.child}function Tu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ns(e,n,t,a,i){var l=sn(t)?wt:We.current;return l=ta(n,l),la(n,i),t=Yo(e,n,t,a,l,i),a=Go(),e!==null&&!ln?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Xn(e,n,i)):(_e&&a&&bo(n),n.flags|=1,tn(e,n,t,i),n.child)}function Lu(e,n,t,a,i){if(sn(t)){var l=!0;Fr(n)}else l=!1;if(la(n,i),n.stateNode===null)ai(e,n),ru(n,t,a),Zo(n,t,a,i),a=!0;else if(e===null){var d=n.stateNode,p=n.memoizedProps;d.props=p;var h=d.context,b=t.contextType;typeof b=="object"&&b!==null?b=Mn(b):(b=sn(t)?wt:We.current,b=ta(n,b));var I=t.getDerivedStateFromProps,F=typeof I=="function"||typeof d.getSnapshotBeforeUpdate=="function";F||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==a||h!==b)&&iu(n,d,a,b),Tt=!1;var D=n.memoizedState;d.state=D,$r(n,a,d,i),h=n.memoizedState,p!==a||D!==h||on.current||Tt?(typeof I=="function"&&(Wo(n,t,I,a),h=n.memoizedState),(p=Tt||au(n,t,p,a,D,h,b))?(F||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=h),d.props=a,d.state=h,d.context=b,a=p):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{d=n.stateNode,jc(e,n),p=n.memoizedProps,b=n.type===n.elementType?p:kn(n.type,p),d.props=b,F=n.pendingProps,D=d.context,h=t.contextType,typeof h=="object"&&h!==null?h=Mn(h):(h=sn(t)?wt:We.current,h=ta(n,h));var G=t.getDerivedStateFromProps;(I=typeof G=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==F||D!==h)&&iu(n,d,a,h),Tt=!1,D=n.memoizedState,d.state=D,$r(n,a,d,i);var $=n.memoizedState;p!==F||D!==$||on.current||Tt?(typeof G=="function"&&(Wo(n,t,G,a),$=n.memoizedState),(b=Tt||au(n,t,b,a,D,$,h)||!1)?(I||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(a,$,h),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(a,$,h)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&D===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&D===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=$),d.props=a,d.state=$,d.context=h,a=b):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&D===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&D===e.memoizedState||(n.flags|=1024),a=!1)}return ts(e,n,t,a,l,i)}function ts(e,n,t,a,i,l){Tu(e,n);var d=(n.flags&128)!==0;if(!a&&!d)return i&&yc(n,t,!1),Xn(e,n,l);a=n.stateNode,gp.current=n;var p=d&&typeof t.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&d?(n.child=oa(n,e.child,null,l),n.child=oa(n,null,p,l)):tn(e,n,p,l),n.memoizedState=a.state,i&&yc(n,t,!0),n.child}function vu(e){var n=e.stateNode;n.pendingContext?gc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&gc(e,n.context,!1),Fo(e,n.containerInfo)}function hu(e,n,t,a,i){return ia(),jo(i),n.flags|=256,tn(e,n,t,a),n.child}var as={dehydrated:null,treeContext:null,retryLane:0};function rs(e){return{baseLanes:e,cachePool:null,transitions:null}}function gu(e,n,t){var a=n.pendingProps,i=Re.current,l=!1,d=(n.flags&128)!==0,p;if((p=d)||(p=e!==null&&e.memoizedState===null?!1:(i&2)!==0),p?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ae(Re,i&1),e===null)return wo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(d=a.children,e=a.fallback,l?(a=n.mode,l=n.child,d={mode:"hidden",children:d},(a&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=d):l=Ti(d,a,0,null),e=Qt(e,a,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=rs(t),n.memoizedState=as,e):is(n,d));if(i=e.memoizedState,i!==null&&(p=i.dehydrated,p!==null))return Pp(e,n,d,a,p,i,t);if(l){l=a.fallback,d=n.mode,i=e.child,p=i.sibling;var h={mode:"hidden",children:a.children};return(d&1)===0&&n.child!==i?(a=n.child,a.childLanes=0,a.pendingProps=h,n.deletions=null):(a=Mt(i,h),a.subtreeFlags=i.subtreeFlags&14680064),p!==null?l=Mt(p,l):(l=Qt(l,d,t,null),l.flags|=2),l.return=n,a.return=n,a.sibling=l,n.child=a,a=l,l=n.child,d=e.child.memoizedState,d=d===null?rs(t):{baseLanes:d.baseLanes|t,cachePool:null,transitions:d.transitions},l.memoizedState=d,l.childLanes=e.childLanes&~t,n.memoizedState=as,a}return l=e.child,e=l.sibling,a=Mt(l,{mode:"visible",children:a.children}),(n.mode&1)===0&&(a.lanes=t),a.return=n,a.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=a,n.memoizedState=null,a}function is(e,n){return n=Ti({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ti(e,n,t,a){return a!==null&&jo(a),oa(n,e.child,null,t),e=is(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Pp(e,n,t,a,i,l,d){if(t)return n.flags&256?(n.flags&=-257,a=Xo(Error(s(422))),ti(e,n,d,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=a.fallback,i=n.mode,a=Ti({mode:"visible",children:a.children},i,0,null),l=Qt(l,i,d,null),l.flags|=2,a.return=n,l.return=n,a.sibling=l,n.child=a,(n.mode&1)!==0&&oa(n,e.child,null,d),n.child.memoizedState=rs(d),n.memoizedState=as,l);if((n.mode&1)===0)return ti(e,n,d,null);if(i.data==="$!"){if(a=i.nextSibling&&i.nextSibling.dataset,a)var p=a.dgst;return a=p,l=Error(s(419)),a=Xo(l,a,void 0),ti(e,n,d,a)}if(p=(d&e.childLanes)!==0,ln||p){if(a=Ge,a!==null){switch(d&-d){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(a.suspendedLanes|d))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Wn(e,i),Dn(a,e,i,-1))}return ys(),a=Xo(Error(s(421))),ti(e,n,d,a)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=kp.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,pn=dt(i.nextSibling),fn=n,_e=!0,jn=null,e!==null&&(Pn[yn++]=qn,Pn[yn++]=Hn,Pn[yn++]=jt,qn=e.id,Hn=e.overflow,jt=n),n=is(n,a.children),n.flags|=4096,n)}function Pu(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Do(e.return,n,t)}function os(e,n,t,a,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=a,l.tail=t,l.tailMode=i)}function yu(e,n,t){var a=n.pendingProps,i=a.revealOrder,l=a.tail;if(tn(e,n,a.children,t),a=Re.current,(a&2)!==0)a=a&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pu(e,t,n);else if(e.tag===19)Pu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(Ae(Re,a),(n.mode&1)===0)n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&qr(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),os(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&qr(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}os(n,!0,t,null,l);break;case"together":os(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ai(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Xn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),It|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,t=Mt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Mt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function yp(e,n,t){switch(n.tag){case 3:vu(n),ia();break;case 5:Rc(n);break;case 1:sn(n.type)&&Fr(n);break;case 4:Fo(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,i=n.memoizedProps.value;Ae(Yr,a._currentValue),a._currentValue=i;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(Ae(Re,Re.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?gu(e,n,t):(Ae(Re,Re.current&1),e=Xn(e,n,t),e!==null?e.sibling:null);Ae(Re,Re.current&1);break;case 19:if(a=(t&n.childLanes)!==0,(e.flags&128)!==0){if(a)return yu(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ae(Re,Re.current),a)break;return null;case 22:case 23:return n.lanes=0,pu(e,n,t)}return Xn(e,n,t)}var Mu,ss,Eu,Nu;Mu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},ss=function(){},Eu=function(e,n,t,a){var i=e.memoizedProps;if(i!==a){e=n.stateNode,Rt(Qn.current);var l=null;switch(t){case"input":i=k(e,i),a=k(e,a),l=[];break;case"select":i=U({},i,{value:void 0}),a=U({},a,{value:void 0}),l=[];break;case"textarea":i=Ut(e,i),a=Ut(e,a),l=[];break;default:typeof i.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Dr)}zi(t,a);var d;t=null;for(b in i)if(!a.hasOwnProperty(b)&&i.hasOwnProperty(b)&&i[b]!=null)if(b==="style"){var p=i[b];for(d in p)p.hasOwnProperty(d)&&(t||(t={}),t[d]="")}else b!=="dangerouslySetInnerHTML"&&b!=="children"&&b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&b!=="autoFocus"&&(m.hasOwnProperty(b)?l||(l=[]):(l=l||[]).push(b,null));for(b in a){var h=a[b];if(p=i!=null?i[b]:void 0,a.hasOwnProperty(b)&&h!==p&&(h!=null||p!=null))if(b==="style")if(p){for(d in p)!p.hasOwnProperty(d)||h&&h.hasOwnProperty(d)||(t||(t={}),t[d]="");for(d in h)h.hasOwnProperty(d)&&p[d]!==h[d]&&(t||(t={}),t[d]=h[d])}else t||(l||(l=[]),l.push(b,t)),t=h;else b==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,p=p?p.__html:void 0,h!=null&&p!==h&&(l=l||[]).push(b,h)):b==="children"?typeof h!="string"&&typeof h!="number"||(l=l||[]).push(b,""+h):b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&(m.hasOwnProperty(b)?(h!=null&&b==="onScroll"&&je("scroll",e),l||p===h||(l=[])):(l=l||[]).push(b,h))}t&&(l=l||[]).push("style",t);var b=l;(n.updateQueue=b)&&(n.flags|=4)}},Nu=function(e,n,t,a){t!==a&&(n.flags|=4)};function Wa(e,n){if(!_e)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Xe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags&14680064,a|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function Mp(e,n,t){var a=n.pendingProps;switch(Vo(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(n),null;case 1:return sn(n.type)&&Or(),Xe(n),null;case 3:return a=n.stateNode,ca(),ke(on),ke(We),Jo(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Br(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,jn!==null&&(hs(jn),jn=null))),ss(e,n),Xe(n),null;case 5:zo(n);var i=Rt(Ga.current);if(t=n.type,e!==null&&n.stateNode!=null)Eu(e,n,t,a,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(s(166));return Xe(n),null}if(e=Rt(Qn.current),Br(n)){a=n.stateNode,t=n.type;var l=n.memoizedProps;switch(a[zn]=n,a[Qa]=l,e=(n.mode&1)!==0,t){case"dialog":je("cancel",a),je("close",a);break;case"iframe":case"object":case"embed":je("load",a);break;case"video":case"audio":for(i=0;i<Oa.length;i++)je(Oa[i],a);break;case"source":je("error",a);break;case"img":case"image":case"link":je("error",a),je("load",a);break;case"details":je("toggle",a);break;case"input":Ee(a,l),je("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!l.multiple},je("invalid",a);break;case"textarea":fr(a,l),je("invalid",a)}zi(t,l),i=null;for(var d in l)if(l.hasOwnProperty(d)){var p=l[d];d==="children"?typeof p=="string"?a.textContent!==p&&(l.suppressHydrationWarning!==!0&&Rr(a.textContent,p,e),i=["children",p]):typeof p=="number"&&a.textContent!==""+p&&(l.suppressHydrationWarning!==!0&&Rr(a.textContent,p,e),i=["children",""+p]):m.hasOwnProperty(d)&&p!=null&&d==="onScroll"&&je("scroll",a)}switch(t){case"input":rn(a),Vn(a,l,!0);break;case"textarea":rn(a),Pa(a);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(a.onclick=Dr)}a=i,n.updateQueue=a,a!==null&&(n.flags|=4)}else{d=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=S(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=d.createElement(t,{is:a.is}):(e=d.createElement(t),t==="select"&&(d=e,a.multiple?d.multiple=!0:a.size&&(d.size=a.size))):e=d.createElementNS(e,t),e[zn]=n,e[Qa]=a,Mu(e,n,!1,!1),n.stateNode=e;e:{switch(d=Qi(t,a),t){case"dialog":je("cancel",e),je("close",e),i=a;break;case"iframe":case"object":case"embed":je("load",e),i=a;break;case"video":case"audio":for(i=0;i<Oa.length;i++)je(Oa[i],e);i=a;break;case"source":je("error",e),i=a;break;case"img":case"image":case"link":je("error",e),je("load",e),i=a;break;case"details":je("toggle",e),i=a;break;case"input":Ee(e,a),i=k(e,a),je("invalid",e);break;case"option":i=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},i=U({},a,{value:void 0}),je("invalid",e);break;case"textarea":fr(e,a),i=Ut(e,a),je("invalid",e);break;default:i=a}zi(t,i),p=i;for(l in p)if(p.hasOwnProperty(l)){var h=p[l];l==="style"?fl(e,h):l==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&Se(e,h)):l==="children"?typeof h=="string"?(t!=="textarea"||h!=="")&&hn(e,h):typeof h=="number"&&hn(e,""+h):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(m.hasOwnProperty(l)?h!=null&&l==="onScroll"&&je("scroll",e):h!=null&&ie(e,l,h,d))}switch(t){case"input":rn(e),Vn(e,a,!1);break;case"textarea":rn(e),Pa(e);break;case"option":a.value!=null&&e.setAttribute("value",""+ve(a.value));break;case"select":e.multiple=!!a.multiple,l=a.value,l!=null?at(e,!!a.multiple,l,!1):a.defaultValue!=null&&at(e,!!a.multiple,a.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Dr)}switch(t){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Xe(n),null;case 6:if(e&&n.stateNode!=null)Nu(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(s(166));if(t=Rt(Ga.current),Rt(Qn.current),Br(n)){if(a=n.stateNode,t=n.memoizedProps,a[zn]=n,(l=a.nodeValue!==t)&&(e=fn,e!==null))switch(e.tag){case 3:Rr(a.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Rr(a.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else a=(t.nodeType===9?t:t.ownerDocument).createTextNode(a),a[zn]=n,n.stateNode=a}return Xe(n),null;case 13:if(ke(Re),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_e&&pn!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Sc(),ia(),n.flags|=98560,l=!1;else if(l=Br(n),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[zn]=n}else ia(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),l=!1}else jn!==null&&(hs(jn),jn=null),l=!0;if(!l)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(Re.current&1)!==0?Ue===0&&(Ue=3):ys())),n.updateQueue!==null&&(n.flags|=4),Xe(n),null);case 4:return ca(),ss(e,n),e===null&&Fa(n.stateNode.containerInfo),Xe(n),null;case 10:return Ro(n.type._context),Xe(n),null;case 17:return sn(n.type)&&Or(),Xe(n),null;case 19:if(ke(Re),l=n.memoizedState,l===null)return Xe(n),null;if(a=(n.flags&128)!==0,d=l.rendering,d===null)if(a)Wa(l,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=qr(e),d!==null){for(n.flags|=128,Wa(l,!1),a=d.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=t,t=n.child;t!==null;)l=t,e=a,l.flags&=14680066,d=l.alternate,d===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=d.childLanes,l.lanes=d.lanes,l.child=d.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=d.memoizedProps,l.memoizedState=d.memoizedState,l.updateQueue=d.updateQueue,l.type=d.type,e=d.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return Ae(Re,Re.current&1|2),n.child}e=e.sibling}l.tail!==null&&Fe()>fa&&(n.flags|=128,a=!0,Wa(l,!1),n.lanes=4194304)}else{if(!a)if(e=qr(d),e!==null){if(n.flags|=128,a=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Wa(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!_e)return Xe(n),null}else 2*Fe()-l.renderingStartTime>fa&&t!==1073741824&&(n.flags|=128,a=!0,Wa(l,!1),n.lanes=4194304);l.isBackwards?(d.sibling=n.child,n.child=d):(t=l.last,t!==null?t.sibling=d:n.child=d,l.last=d)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Fe(),n.sibling=null,t=Re.current,Ae(Re,a?t&1|2:t&1),n):(Xe(n),null);case 22:case 23:return Ps(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&(n.mode&1)!==0?(Tn&1073741824)!==0&&(Xe(n),n.subtreeFlags&6&&(n.flags|=8192)):Xe(n),null;case 24:return null;case 25:return null}throw Error(s(156,n.tag))}function Ep(e,n){switch(Vo(n),n.tag){case 1:return sn(n.type)&&Or(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ca(),ke(on),ke(We),Jo(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return zo(n),null;case 13:if(ke(Re),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ia()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ke(Re),null;case 4:return ca(),null;case 10:return Ro(n.type._context),null;case 22:case 23:return Ps(),null;case 24:return null;default:return null}}var ri=!1,en=!1,Np=typeof WeakSet=="function"?WeakSet:Set,K=null;function da(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(a){Oe(e,n,a)}else t.current=null}function ls(e,n,t){try{t()}catch(a){Oe(e,n,a)}}var Cu=!1;function Cp(e,n){if(Po=Nr,e=ac(),mo(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var i=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var d=0,p=-1,h=-1,b=0,I=0,F=e,D=null;n:for(;;){for(var G;F!==t||i!==0&&F.nodeType!==3||(p=d+i),F!==l||a!==0&&F.nodeType!==3||(h=d+a),F.nodeType===3&&(d+=F.nodeValue.length),(G=F.firstChild)!==null;)D=F,F=G;for(;;){if(F===e)break n;if(D===t&&++b===i&&(p=d),D===l&&++I===a&&(h=d),(G=F.nextSibling)!==null)break;F=D,D=F.parentNode}F=G}t=p===-1||h===-1?null:{start:p,end:h}}else t=null}t=t||{start:0,end:0}}else t=null;for(yo={focusedElem:e,selectionRange:t},Nr=!1,K=n;K!==null;)if(n=K,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,K=e;else for(;K!==null;){n=K;try{var $=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if($!==null){var q=$.memoizedProps,ze=$.memoizedState,E=n.stateNode,g=E.getSnapshotBeforeUpdate(n.elementType===n.type?q:kn(n.type,q),ze);E.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var N=n.stateNode.containerInfo;N.nodeType===1?N.textContent="":N.nodeType===9&&N.documentElement&&N.removeChild(N.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(Q){Oe(n,n.return,Q)}if(e=n.sibling,e!==null){e.return=n.return,K=e;break}K=n.return}return $=Cu,Cu=!1,$}function Za(e,n,t){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var i=a=a.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&ls(n,t,l)}i=i.next}while(i!==a)}}function ii(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var a=t.create;t.destroy=a()}t=t.next}while(t!==n)}}function cs(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function xu(e){var n=e.alternate;n!==null&&(e.alternate=null,xu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[zn],delete n[Qa],delete n[Co],delete n[sp],delete n[lp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Su(e){return e.tag===5||e.tag===3||e.tag===4}function bu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Su(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function us(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Dr));else if(a!==4&&(e=e.child,e!==null))for(us(e,n,t),e=e.sibling;e!==null;)us(e,n,t),e=e.sibling}function ds(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(ds(e,n,t),e=e.sibling;e!==null;)ds(e,n,t),e=e.sibling}var $e=null,_n=!1;function vt(e,n,t){for(t=t.child;t!==null;)Vu(e,n,t),t=t.sibling}function Vu(e,n,t){if(Fn&&typeof Fn.onCommitFiberUnmount=="function")try{Fn.onCommitFiberUnmount(hr,t)}catch{}switch(t.tag){case 5:en||da(t,n);case 6:var a=$e,i=_n;$e=null,vt(e,n,t),$e=a,_n=i,$e!==null&&(_n?(e=$e,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):$e.removeChild(t.stateNode));break;case 18:$e!==null&&(_n?(e=$e,t=t.stateNode,e.nodeType===8?No(e.parentNode,t):e.nodeType===1&&No(e,t),Aa(e)):No($e,t.stateNode));break;case 4:a=$e,i=_n,$e=t.stateNode.containerInfo,_n=!0,vt(e,n,t),$e=a,_n=i;break;case 0:case 11:case 14:case 15:if(!en&&(a=t.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){i=a=a.next;do{var l=i,d=l.destroy;l=l.tag,d!==void 0&&((l&2)!==0||(l&4)!==0)&&ls(t,n,d),i=i.next}while(i!==a)}vt(e,n,t);break;case 1:if(!en&&(da(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=t.memoizedProps,a.state=t.memoizedState,a.componentWillUnmount()}catch(p){Oe(t,n,p)}vt(e,n,t);break;case 21:vt(e,n,t);break;case 22:t.mode&1?(en=(a=en)||t.memoizedState!==null,vt(e,n,t),en=a):vt(e,n,t);break;default:vt(e,n,t)}}function Au(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Np),n.forEach(function(a){var i=_p.bind(null,e,a);t.has(a)||(t.add(a),a.then(i,i))})}}function Rn(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];try{var l=e,d=n,p=d;e:for(;p!==null;){switch(p.tag){case 5:$e=p.stateNode,_n=!1;break e;case 3:$e=p.stateNode.containerInfo,_n=!0;break e;case 4:$e=p.stateNode.containerInfo,_n=!0;break e}p=p.return}if($e===null)throw Error(s(160));Vu(l,d,i),$e=null,_n=!1;var h=i.alternate;h!==null&&(h.return=null),i.return=null}catch(b){Oe(i,n,b)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)wu(n,e),n=n.sibling}function wu(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Rn(n,e),Bn(e),a&4){try{Za(3,e,e.return),ii(3,e)}catch(q){Oe(e,e.return,q)}try{Za(5,e,e.return)}catch(q){Oe(e,e.return,q)}}break;case 1:Rn(n,e),Bn(e),a&512&&t!==null&&da(t,t.return);break;case 5:if(Rn(n,e),Bn(e),a&512&&t!==null&&da(t,t.return),e.flags&32){var i=e.stateNode;try{hn(i,"")}catch(q){Oe(e,e.return,q)}}if(a&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,d=t!==null?t.memoizedProps:l,p=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{p==="input"&&l.type==="radio"&&l.name!=null&&we(i,l),Qi(p,d);var b=Qi(p,l);for(d=0;d<h.length;d+=2){var I=h[d],F=h[d+1];I==="style"?fl(i,F):I==="dangerouslySetInnerHTML"?Se(i,F):I==="children"?hn(i,F):ie(i,I,F,b)}switch(p){case"input":bn(i,l);break;case"textarea":pr(i,l);break;case"select":var D=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var G=l.value;G!=null?at(i,!!l.multiple,G,!1):D!==!!l.multiple&&(l.defaultValue!=null?at(i,!!l.multiple,l.defaultValue,!0):at(i,!!l.multiple,l.multiple?[]:"",!1))}i[Qa]=l}catch(q){Oe(e,e.return,q)}}break;case 6:if(Rn(n,e),Bn(e),a&4){if(e.stateNode===null)throw Error(s(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(q){Oe(e,e.return,q)}}break;case 3:if(Rn(n,e),Bn(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Aa(n.containerInfo)}catch(q){Oe(e,e.return,q)}break;case 4:Rn(n,e),Bn(e);break;case 13:Rn(n,e),Bn(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(ps=Fe())),a&4&&Au(e);break;case 22:if(I=t!==null&&t.memoizedState!==null,e.mode&1?(en=(b=en)||I,Rn(n,e),en=b):Rn(n,e),Bn(e),a&8192){if(b=e.memoizedState!==null,(e.stateNode.isHidden=b)&&!I&&(e.mode&1)!==0)for(K=e,I=e.child;I!==null;){for(F=K=I;K!==null;){switch(D=K,G=D.child,D.tag){case 0:case 11:case 14:case 15:Za(4,D,D.return);break;case 1:da(D,D.return);var $=D.stateNode;if(typeof $.componentWillUnmount=="function"){a=D,t=D.return;try{n=a,$.props=n.memoizedProps,$.state=n.memoizedState,$.componentWillUnmount()}catch(q){Oe(a,t,q)}}break;case 5:da(D,D.return);break;case 22:if(D.memoizedState!==null){_u(F);continue}}G!==null?(G.return=D,K=G):_u(F)}I=I.sibling}e:for(I=null,F=e;;){if(F.tag===5){if(I===null){I=F;try{i=F.stateNode,b?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(p=F.stateNode,h=F.memoizedProps.style,d=h!=null&&h.hasOwnProperty("display")?h.display:null,p.style.display=ml("display",d))}catch(q){Oe(e,e.return,q)}}}else if(F.tag===6){if(I===null)try{F.stateNode.nodeValue=b?"":F.memoizedProps}catch(q){Oe(e,e.return,q)}}else if((F.tag!==22&&F.tag!==23||F.memoizedState===null||F===e)&&F.child!==null){F.child.return=F,F=F.child;continue}if(F===e)break e;for(;F.sibling===null;){if(F.return===null||F.return===e)break e;I===F&&(I=null),F=F.return}I===F&&(I=null),F.sibling.return=F.return,F=F.sibling}}break;case 19:Rn(n,e),Bn(e),a&4&&Au(e);break;case 21:break;default:Rn(n,e),Bn(e)}}function Bn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Su(t)){var a=t;break e}t=t.return}throw Error(s(160))}switch(a.tag){case 5:var i=a.stateNode;a.flags&32&&(hn(i,""),a.flags&=-33);var l=bu(e);ds(e,l,i);break;case 3:case 4:var d=a.stateNode.containerInfo,p=bu(e);us(e,p,d);break;default:throw Error(s(161))}}catch(h){Oe(e,e.return,h)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function xp(e,n,t){K=e,ju(e)}function ju(e,n,t){for(var a=(e.mode&1)!==0;K!==null;){var i=K,l=i.child;if(i.tag===22&&a){var d=i.memoizedState!==null||ri;if(!d){var p=i.alternate,h=p!==null&&p.memoizedState!==null||en;p=ri;var b=en;if(ri=d,(en=h)&&!b)for(K=i;K!==null;)d=K,h=d.child,d.tag===22&&d.memoizedState!==null?Ru(i):h!==null?(h.return=d,K=h):Ru(i);for(;l!==null;)K=l,ju(l),l=l.sibling;K=i,ri=p,en=b}ku(e)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,K=l):ku(e)}}function ku(e){for(;K!==null;){var n=K;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:en||ii(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!en)if(t===null)a.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:kn(n.type,t.memoizedProps);a.componentDidUpdate(i,t.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&_c(n,l,a);break;case 3:var d=n.updateQueue;if(d!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}_c(n,d,t)}break;case 5:var p=n.stateNode;if(t===null&&n.flags&4){t=p;var h=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&t.focus();break;case"img":h.src&&(t.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var b=n.alternate;if(b!==null){var I=b.memoizedState;if(I!==null){var F=I.dehydrated;F!==null&&Aa(F)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}en||n.flags&512&&cs(n)}catch(D){Oe(n,n.return,D)}}if(n===e){K=null;break}if(t=n.sibling,t!==null){t.return=n.return,K=t;break}K=n.return}}function _u(e){for(;K!==null;){var n=K;if(n===e){K=null;break}var t=n.sibling;if(t!==null){t.return=n.return,K=t;break}K=n.return}}function Ru(e){for(;K!==null;){var n=K;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{ii(4,n)}catch(h){Oe(n,t,h)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var i=n.return;try{a.componentDidMount()}catch(h){Oe(n,i,h)}}var l=n.return;try{cs(n)}catch(h){Oe(n,l,h)}break;case 5:var d=n.return;try{cs(n)}catch(h){Oe(n,d,h)}}}catch(h){Oe(n,n.return,h)}if(n===e){K=null;break}var p=n.sibling;if(p!==null){p.return=n.return,K=p;break}K=n.return}}var Sp=Math.ceil,oi=Z.ReactCurrentDispatcher,ms=Z.ReactCurrentOwner,Nn=Z.ReactCurrentBatchConfig,Ne=0,Ge=null,Je=null,qe=0,Tn=0,ma=mt(0),Ue=0,Xa=null,It=0,si=0,fs=0,er=null,cn=null,ps=0,fa=1/0,et=null,li=!1,Ts=null,ht=null,ci=!1,gt=null,ui=0,nr=0,Ls=null,di=-1,mi=0;function an(){return(Ne&6)!==0?Fe():di!==-1?di:di=Fe()}function Pt(e){return(e.mode&1)===0?1:(Ne&2)!==0&&qe!==0?qe&-qe:up.transition!==null?(mi===0&&(mi=bl()),mi):(e=be,e!==0||(e=window.event,e=e===void 0?16:Il(e.type)),e)}function Dn(e,n,t,a){if(50<nr)throw nr=0,Ls=null,Error(s(185));Ca(e,t,a),((Ne&2)===0||e!==Ge)&&(e===Ge&&((Ne&2)===0&&(si|=t),Ue===4&&yt(e,qe)),un(e,a),t===1&&Ne===0&&(n.mode&1)===0&&(fa=Fe()+500,zr&&pt()))}function un(e,n){var t=e.callbackNode;uf(e,n);var a=yr(e,e===Ge?qe:0);if(a===0)t!==null&&Cl(t),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(t!=null&&Cl(t),n===1)e.tag===0?cp(Iu.bind(null,e)):Mc(Iu.bind(null,e)),ip(function(){(Ne&6)===0&&pt()}),t=null;else{switch(Vl(a)){case 1:t=$i;break;case 4:t=xl;break;case 16:t=vr;break;case 536870912:t=Sl;break;default:t=vr}t=Yu(t,Du.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Du(e,n){if(di=-1,mi=0,(Ne&6)!==0)throw Error(s(327));var t=e.callbackNode;if(pa()&&e.callbackNode!==t)return null;var a=yr(e,e===Ge?qe:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||n)n=fi(e,a);else{n=a;var i=Ne;Ne|=2;var l=Fu();(Ge!==e||qe!==n)&&(et=null,fa=Fe()+500,Ft(e,n));do try{Ap();break}catch(p){Ou(e,p)}while(!0);_o(),oi.current=l,Ne=i,Je!==null?n=0:(Ge=null,qe=0,n=Ue)}if(n!==0){if(n===2&&(i=qi(e),i!==0&&(a=i,n=vs(e,i))),n===1)throw t=Xa,Ft(e,0),yt(e,a),un(e,Fe()),t;if(n===6)yt(e,a);else{if(i=e.current.alternate,(a&30)===0&&!bp(i)&&(n=fi(e,a),n===2&&(l=qi(e),l!==0&&(a=l,n=vs(e,l))),n===1))throw t=Xa,Ft(e,0),yt(e,a),un(e,Fe()),t;switch(e.finishedWork=i,e.finishedLanes=a,n){case 0:case 1:throw Error(s(345));case 2:zt(e,cn,et);break;case 3:if(yt(e,a),(a&130023424)===a&&(n=ps+500-Fe(),10<n)){if(yr(e,0)!==0)break;if(i=e.suspendedLanes,(i&a)!==a){an(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Eo(zt.bind(null,e,cn,et),n);break}zt(e,cn,et);break;case 4:if(yt(e,a),(a&4194240)===a)break;for(n=e.eventTimes,i=-1;0<a;){var d=31-An(a);l=1<<d,d=n[d],d>i&&(i=d),a&=~l}if(a=i,a=Fe()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Sp(a/1960))-a,10<a){e.timeoutHandle=Eo(zt.bind(null,e,cn,et),a);break}zt(e,cn,et);break;case 5:zt(e,cn,et);break;default:throw Error(s(329))}}}return un(e,Fe()),e.callbackNode===t?Du.bind(null,e):null}function vs(e,n){var t=er;return e.current.memoizedState.isDehydrated&&(Ft(e,n).flags|=256),e=fi(e,n),e!==2&&(n=cn,cn=t,n!==null&&hs(n)),e}function hs(e){cn===null?cn=e:cn.push.apply(cn,e)}function bp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var a=0;a<t.length;a++){var i=t[a],l=i.getSnapshot;i=i.value;try{if(!wn(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function yt(e,n){for(n&=~fs,n&=~si,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-An(n),a=1<<t;e[t]=-1,n&=~a}}function Iu(e){if((Ne&6)!==0)throw Error(s(327));pa();var n=yr(e,0);if((n&1)===0)return un(e,Fe()),null;var t=fi(e,n);if(e.tag!==0&&t===2){var a=qi(e);a!==0&&(n=a,t=vs(e,a))}if(t===1)throw t=Xa,Ft(e,0),yt(e,n),un(e,Fe()),t;if(t===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,zt(e,cn,et),un(e,Fe()),null}function gs(e,n){var t=Ne;Ne|=1;try{return e(n)}finally{Ne=t,Ne===0&&(fa=Fe()+500,zr&&pt())}}function Ot(e){gt!==null&&gt.tag===0&&(Ne&6)===0&&pa();var n=Ne;Ne|=1;var t=Nn.transition,a=be;try{if(Nn.transition=null,be=1,e)return e()}finally{be=a,Nn.transition=t,Ne=n,(Ne&6)===0&&pt()}}function Ps(){Tn=ma.current,ke(ma)}function Ft(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,rp(t)),Je!==null)for(t=Je.return;t!==null;){var a=t;switch(Vo(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Or();break;case 3:ca(),ke(on),ke(We),Jo();break;case 5:zo(a);break;case 4:ca();break;case 13:ke(Re);break;case 19:ke(Re);break;case 10:Ro(a.type._context);break;case 22:case 23:Ps()}t=t.return}if(Ge=e,Je=e=Mt(e.current,null),qe=Tn=n,Ue=0,Xa=null,fs=si=It=0,cn=er=null,_t!==null){for(n=0;n<_t.length;n++)if(t=_t[n],a=t.interleaved,a!==null){t.interleaved=null;var i=a.next,l=t.pending;if(l!==null){var d=l.next;l.next=i,a.next=d}t.pending=a}_t=null}return e}function Ou(e,n){do{var t=Je;try{if(_o(),Hr.current=ei,Wr){for(var a=De.memoizedState;a!==null;){var i=a.queue;i!==null&&(i.pending=null),a=a.next}Wr=!1}if(Dt=0,Ye=Be=De=null,Ka=!1,$a=0,ms.current=null,t===null||t.return===null){Ue=1,Xa=n,Je=null;break}e:{var l=e,d=t.return,p=t,h=n;if(n=qe,p.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var b=h,I=p,F=I.tag;if((I.mode&1)===0&&(F===0||F===11||F===15)){var D=I.alternate;D?(I.updateQueue=D.updateQueue,I.memoizedState=D.memoizedState,I.lanes=D.lanes):(I.updateQueue=null,I.memoizedState=null)}var G=cu(d);if(G!==null){G.flags&=-257,uu(G,d,p,l,n),G.mode&1&&lu(l,b,n),n=G,h=b;var $=n.updateQueue;if($===null){var q=new Set;q.add(h),n.updateQueue=q}else $.add(h);break e}else{if((n&1)===0){lu(l,b,n),ys();break e}h=Error(s(426))}}else if(_e&&p.mode&1){var ze=cu(d);if(ze!==null){(ze.flags&65536)===0&&(ze.flags|=256),uu(ze,d,p,l,n),jo(ua(h,p));break e}}l=h=ua(h,p),Ue!==4&&(Ue=2),er===null?er=[l]:er.push(l),l=d;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var E=ou(l,h,n);kc(l,E);break e;case 1:p=h;var g=l.type,N=l.stateNode;if((l.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||N!==null&&typeof N.componentDidCatch=="function"&&(ht===null||!ht.has(N)))){l.flags|=65536,n&=-n,l.lanes|=n;var Q=su(l,p,n);kc(l,Q);break e}}l=l.return}while(l!==null)}Qu(t)}catch(W){n=W,Je===t&&t!==null&&(Je=t=t.return);continue}break}while(!0)}function Fu(){var e=oi.current;return oi.current=ei,e===null?ei:e}function ys(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),Ge===null||(It&268435455)===0&&(si&268435455)===0||yt(Ge,qe)}function fi(e,n){var t=Ne;Ne|=2;var a=Fu();(Ge!==e||qe!==n)&&(et=null,Ft(e,n));do try{Vp();break}catch(i){Ou(e,i)}while(!0);if(_o(),Ne=t,oi.current=a,Je!==null)throw Error(s(261));return Ge=null,qe=0,Ue}function Vp(){for(;Je!==null;)zu(Je)}function Ap(){for(;Je!==null&&!ef();)zu(Je)}function zu(e){var n=Uu(e.alternate,e,Tn);e.memoizedProps=e.pendingProps,n===null?Qu(e):Je=n,ms.current=null}function Qu(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=Mp(t,n,Tn),t!==null){Je=t;return}}else{if(t=Ep(t,n),t!==null){t.flags&=32767,Je=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ue=6,Je=null;return}}if(n=n.sibling,n!==null){Je=n;return}Je=n=e}while(n!==null);Ue===0&&(Ue=5)}function zt(e,n,t){var a=be,i=Nn.transition;try{Nn.transition=null,be=1,wp(e,n,t,a)}finally{Nn.transition=i,be=a}return null}function wp(e,n,t,a){do pa();while(gt!==null);if((Ne&6)!==0)throw Error(s(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(df(e,l),e===Ge&&(Je=Ge=null,qe=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||ci||(ci=!0,Yu(vr,function(){return pa(),null})),l=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||l){l=Nn.transition,Nn.transition=null;var d=be;be=1;var p=Ne;Ne|=4,ms.current=null,Cp(e,t),wu(t,e),Wf(yo),Nr=!!Po,yo=Po=null,e.current=t,xp(t),nf(),Ne=p,be=d,Nn.transition=l}else e.current=t;if(ci&&(ci=!1,gt=e,ui=i),l=e.pendingLanes,l===0&&(ht=null),rf(t.stateNode),un(e,Fe()),n!==null)for(a=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],a(i.value,{componentStack:i.stack,digest:i.digest});if(li)throw li=!1,e=Ts,Ts=null,e;return(ui&1)!==0&&e.tag!==0&&pa(),l=e.pendingLanes,(l&1)!==0?e===Ls?nr++:(nr=0,Ls=e):nr=0,pt(),null}function pa(){if(gt!==null){var e=Vl(ui),n=Nn.transition,t=be;try{if(Nn.transition=null,be=16>e?16:e,gt===null)var a=!1;else{if(e=gt,gt=null,ui=0,(Ne&6)!==0)throw Error(s(331));var i=Ne;for(Ne|=4,K=e.current;K!==null;){var l=K,d=l.child;if((K.flags&16)!==0){var p=l.deletions;if(p!==null){for(var h=0;h<p.length;h++){var b=p[h];for(K=b;K!==null;){var I=K;switch(I.tag){case 0:case 11:case 15:Za(8,I,l)}var F=I.child;if(F!==null)F.return=I,K=F;else for(;K!==null;){I=K;var D=I.sibling,G=I.return;if(xu(I),I===b){K=null;break}if(D!==null){D.return=G,K=D;break}K=G}}}var $=l.alternate;if($!==null){var q=$.child;if(q!==null){$.child=null;do{var ze=q.sibling;q.sibling=null,q=ze}while(q!==null)}}K=l}}if((l.subtreeFlags&2064)!==0&&d!==null)d.return=l,K=d;else e:for(;K!==null;){if(l=K,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Za(9,l,l.return)}var E=l.sibling;if(E!==null){E.return=l.return,K=E;break e}K=l.return}}var g=e.current;for(K=g;K!==null;){d=K;var N=d.child;if((d.subtreeFlags&2064)!==0&&N!==null)N.return=d,K=N;else e:for(d=g;K!==null;){if(p=K,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:ii(9,p)}}catch(W){Oe(p,p.return,W)}if(p===d){K=null;break e}var Q=p.sibling;if(Q!==null){Q.return=p.return,K=Q;break e}K=p.return}}if(Ne=i,pt(),Fn&&typeof Fn.onPostCommitFiberRoot=="function")try{Fn.onPostCommitFiberRoot(hr,e)}catch{}a=!0}return a}finally{be=t,Nn.transition=n}}return!1}function Ju(e,n,t){n=ua(t,n),n=ou(e,n,1),e=Lt(e,n,1),n=an(),e!==null&&(Ca(e,1,n),un(e,n))}function Oe(e,n,t){if(e.tag===3)Ju(e,e,t);else for(;n!==null;){if(n.tag===3){Ju(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ht===null||!ht.has(a))){e=ua(t,e),e=su(n,e,1),n=Lt(n,e,1),e=an(),n!==null&&(Ca(n,1,e),un(n,e));break}}n=n.return}}function jp(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),n=an(),e.pingedLanes|=e.suspendedLanes&t,Ge===e&&(qe&t)===t&&(Ue===4||Ue===3&&(qe&130023424)===qe&&500>Fe()-ps?Ft(e,0):fs|=t),un(e,n)}function Bu(e,n){n===0&&((e.mode&1)===0?n=1:(n=Pr,Pr<<=1,(Pr&130023424)===0&&(Pr=4194304)));var t=an();e=Wn(e,n),e!==null&&(Ca(e,n,t),un(e,t))}function kp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Bu(e,t)}function _p(e,n){var t=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(s(314))}a!==null&&a.delete(n),Bu(e,t)}var Uu;Uu=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||on.current)ln=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return ln=!1,yp(e,n,t);ln=(e.flags&131072)!==0}else ln=!1,_e&&(n.flags&1048576)!==0&&Ec(n,Jr,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;ai(e,n),e=n.pendingProps;var i=ta(n,We.current);la(n,t),i=Yo(null,n,a,e,i,t);var l=Go();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,sn(a)?(l=!0,Fr(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Oo(n),i.updater=ni,n.stateNode=i,i._reactInternals=n,Zo(n,a,e,t),n=ts(null,n,a,!0,l,t)):(n.tag=0,_e&&l&&bo(n),tn(null,n,i,t),n=n.child),n;case 16:a=n.elementType;e:{switch(ai(e,n),e=n.pendingProps,i=a._init,a=i(a._payload),n.type=a,i=n.tag=Dp(a),e=kn(a,e),i){case 0:n=ns(null,n,a,e,t);break e;case 1:n=Lu(null,n,a,e,t);break e;case 11:n=du(null,n,a,e,t);break e;case 14:n=mu(null,n,a,kn(a.type,e),t);break e}throw Error(s(306,a,""))}return n;case 0:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:kn(a,i),ns(e,n,a,i,t);case 1:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:kn(a,i),Lu(e,n,a,i,t);case 3:e:{if(vu(n),e===null)throw Error(s(387));a=n.pendingProps,l=n.memoizedState,i=l.element,jc(e,n),$r(n,a,null,t);var d=n.memoizedState;if(a=d.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=ua(Error(s(423)),n),n=hu(e,n,a,t,i);break e}else if(a!==i){i=ua(Error(s(424)),n),n=hu(e,n,a,t,i);break e}else for(pn=dt(n.stateNode.containerInfo.firstChild),fn=n,_e=!0,jn=null,t=Ac(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ia(),a===i){n=Xn(e,n,t);break e}tn(e,n,a,t)}n=n.child}return n;case 5:return Rc(n),e===null&&wo(n),a=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,d=i.children,Mo(a,i)?d=null:l!==null&&Mo(a,l)&&(n.flags|=32),Tu(e,n),tn(e,n,d,t),n.child;case 6:return e===null&&wo(n),null;case 13:return gu(e,n,t);case 4:return Fo(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=oa(n,null,a,t):tn(e,n,a,t),n.child;case 11:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:kn(a,i),du(e,n,a,i,t);case 7:return tn(e,n,n.pendingProps,t),n.child;case 8:return tn(e,n,n.pendingProps.children,t),n.child;case 12:return tn(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(a=n.type._context,i=n.pendingProps,l=n.memoizedProps,d=i.value,Ae(Yr,a._currentValue),a._currentValue=d,l!==null)if(wn(l.value,d)){if(l.children===i.children&&!on.current){n=Xn(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var p=l.dependencies;if(p!==null){d=l.child;for(var h=p.firstContext;h!==null;){if(h.context===a){if(l.tag===1){h=Zn(-1,t&-t),h.tag=2;var b=l.updateQueue;if(b!==null){b=b.shared;var I=b.pending;I===null?h.next=h:(h.next=I.next,I.next=h),b.pending=h}}l.lanes|=t,h=l.alternate,h!==null&&(h.lanes|=t),Do(l.return,t,n),p.lanes|=t;break}h=h.next}}else if(l.tag===10)d=l.type===n.type?null:l.child;else if(l.tag===18){if(d=l.return,d===null)throw Error(s(341));d.lanes|=t,p=d.alternate,p!==null&&(p.lanes|=t),Do(d,t,n),d=l.sibling}else d=l.child;if(d!==null)d.return=l;else for(d=l;d!==null;){if(d===n){d=null;break}if(l=d.sibling,l!==null){l.return=d.return,d=l;break}d=d.return}l=d}tn(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,a=n.pendingProps.children,la(n,t),i=Mn(i),a=a(i),n.flags|=1,tn(e,n,a,t),n.child;case 14:return a=n.type,i=kn(a,n.pendingProps),i=kn(a.type,i),mu(e,n,a,i,t);case 15:return fu(e,n,n.type,n.pendingProps,t);case 17:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:kn(a,i),ai(e,n),n.tag=1,sn(a)?(e=!0,Fr(n)):e=!1,la(n,t),ru(n,a,i),Zo(n,a,i,t),ts(null,n,a,!0,e,t);case 19:return yu(e,n,t);case 22:return pu(e,n,t)}throw Error(s(156,n.tag))};function Yu(e,n){return Nl(e,n)}function Rp(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(e,n,t,a){return new Rp(e,n,t,a)}function Ms(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Dp(e){if(typeof e=="function")return Ms(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ge)return 11;if(e===oe)return 14}return 2}function Mt(e,n){var t=e.alternate;return t===null?(t=Cn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function pi(e,n,t,a,i,l){var d=2;if(a=e,typeof e=="function")Ms(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case ae:return Qt(t.children,i,l,n);case he:d=8,i|=8;break;case ue:return e=Cn(12,t,n,i|2),e.elementType=ue,e.lanes=l,e;case ye:return e=Cn(13,t,n,i),e.elementType=ye,e.lanes=l,e;case Ve:return e=Cn(19,t,n,i),e.elementType=Ve,e.lanes=l,e;case me:return Ti(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pe:d=10;break e;case xe:d=9;break e;case ge:d=11;break e;case oe:d=14;break e;case Te:d=16,a=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return n=Cn(d,t,n,i),n.elementType=e,n.type=a,n.lanes=l,n}function Qt(e,n,t,a){return e=Cn(7,e,a,n),e.lanes=t,e}function Ti(e,n,t,a){return e=Cn(22,e,a,n),e.elementType=me,e.lanes=t,e.stateNode={isHidden:!1},e}function Es(e,n,t){return e=Cn(6,e,null,n),e.lanes=t,e}function Ns(e,n,t){return n=Cn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Ip(e,n,t,a,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hi(0),this.expirationTimes=Hi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hi(0),this.identifierPrefix=a,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cs(e,n,t,a,i,l,d,p,h){return e=new Ip(e,n,t,p,h),n===1?(n=1,l===!0&&(n|=8)):n=0,l=Cn(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:a,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oo(l),e}function Op(e,n,t){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:le,key:a==null?null:""+a,children:e,containerInfo:n,implementation:t}}function Gu(e){if(!e)return ft;e=e._reactInternals;e:{if(Vt(e)!==e||e.tag!==1)throw Error(s(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(sn(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(s(171))}if(e.tag===1){var t=e.type;if(sn(t))return Pc(e,t,n)}return n}function Ku(e,n,t,a,i,l,d,p,h){return e=Cs(t,a,!0,e,i,l,d,p,h),e.context=Gu(null),t=e.current,a=an(),i=Pt(t),l=Zn(a,i),l.callback=n??null,Lt(t,l,i),e.current.lanes=i,Ca(e,i,a),un(e,a),e}function Li(e,n,t,a){var i=n.current,l=an(),d=Pt(i);return t=Gu(t),n.context===null?n.context=t:n.pendingContext=t,n=Zn(l,d),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=Lt(i,n,d),e!==null&&(Dn(e,i,d,l),Kr(e,i,d)),d}function vi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $u(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function xs(e,n){$u(e,n),(e=e.alternate)&&$u(e,n)}function Fp(){return null}var qu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ss(e){this._internalRoot=e}hi.prototype.render=Ss.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));Li(e,n,null,null)},hi.prototype.unmount=Ss.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Ot(function(){Li(null,e,null,null)}),n[Kn]=null}};function hi(e){this._internalRoot=e}hi.prototype.unstable_scheduleHydration=function(e){if(e){var n=jl();e={blockedOn:null,target:e,priority:n};for(var t=0;t<lt.length&&n!==0&&n<lt[t].priority;t++);lt.splice(t,0,e),t===0&&Rl(e)}};function bs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hu(){}function zp(e,n,t,a,i){if(i){if(typeof a=="function"){var l=a;a=function(){var b=vi(d);l.call(b)}}var d=Ku(n,a,e,0,null,!1,!1,"",Hu);return e._reactRootContainer=d,e[Kn]=d.current,Fa(e.nodeType===8?e.parentNode:e),Ot(),d}for(;i=e.lastChild;)e.removeChild(i);if(typeof a=="function"){var p=a;a=function(){var b=vi(h);p.call(b)}}var h=Cs(e,0,!1,null,null,!1,!1,"",Hu);return e._reactRootContainer=h,e[Kn]=h.current,Fa(e.nodeType===8?e.parentNode:e),Ot(function(){Li(n,h,t,a)}),h}function Pi(e,n,t,a,i){var l=t._reactRootContainer;if(l){var d=l;if(typeof i=="function"){var p=i;i=function(){var h=vi(d);p.call(h)}}Li(n,d,e,i)}else d=zp(t,n,e,i,a);return vi(d)}Al=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Na(n.pendingLanes);t!==0&&(Wi(n,t|1),un(n,Fe()),(Ne&6)===0&&(fa=Fe()+500,pt()))}break;case 13:Ot(function(){var a=Wn(e,1);if(a!==null){var i=an();Dn(a,e,1,i)}}),xs(e,1)}},Zi=function(e){if(e.tag===13){var n=Wn(e,134217728);if(n!==null){var t=an();Dn(n,e,134217728,t)}xs(e,134217728)}},wl=function(e){if(e.tag===13){var n=Pt(e),t=Wn(e,n);if(t!==null){var a=an();Dn(t,e,n,a)}xs(e,n)}},jl=function(){return be},kl=function(e,n){var t=be;try{return be=e,n()}finally{be=t}},Ui=function(e,n,t){switch(n){case"input":if(bn(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var i=Ir(a);if(!i)throw Error(s(90));Gn(a),bn(a,i)}}}break;case"textarea":pr(e,t);break;case"select":n=t.value,n!=null&&at(e,!!t.multiple,n,!1)}},vl=gs,hl=Ot;var Qp={usingClientEntryPoint:!1,Events:[Ja,ea,Ir,Tl,Ll,gs]},tr={findFiberByHostInstance:At,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jp={bundleType:tr.bundleType,version:tr.version,rendererPackageName:tr.rendererPackageName,rendererConfig:tr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Z.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ml(e),e===null?null:e.stateNode},findFiberByHostInstance:tr.findFiberByHostInstance||Fp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yi.isDisabled&&yi.supportsFiber)try{hr=yi.inject(Jp),Fn=yi}catch{}}return dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qp,dn.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bs(n))throw Error(s(200));return Op(e,n,null,t)},dn.createRoot=function(e,n){if(!bs(e))throw Error(s(299));var t=!1,a="",i=qu;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Cs(e,1,!1,null,null,t,!1,a,i),e[Kn]=n.current,Fa(e.nodeType===8?e.parentNode:e),new Ss(n)},dn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=Ml(n),e=e===null?null:e.stateNode,e},dn.flushSync=function(e){return Ot(e)},dn.hydrate=function(e,n,t){if(!gi(n))throw Error(s(200));return Pi(null,e,n,!0,t)},dn.hydrateRoot=function(e,n,t){if(!bs(e))throw Error(s(405));var a=t!=null&&t.hydratedSources||null,i=!1,l="",d=qu;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),n=Ku(n,null,e,1,t??null,i,!1,l,d),e[Kn]=n.current,Fa(e),a)for(e=0;e<a.length;e++)t=a[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new hi(n)},dn.render=function(e,n,t){if(!gi(n))throw Error(s(200));return Pi(null,e,n,!1,t)},dn.unmountComponentAtNode=function(e){if(!gi(e))throw Error(s(40));return e._reactRootContainer?(Ot(function(){Pi(null,null,e,!1,function(){e._reactRootContainer=null,e[Kn]=null})}),!0):!1},dn.unstable_batchedUpdates=gs,dn.unstable_renderSubtreeIntoContainer=function(e,n,t,a){if(!gi(t))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return Pi(e,n,t,!1,a)},dn.version="18.3.1-next-f1338f8080-20240426",dn}var rd;function Rd(){if(rd)return ws.exports;rd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),ws.exports=Zp(),ws.exports}var id;function Xp(){if(id)return Ei;id=1;var r=Rd();return Ei.createRoot=r.createRoot,Ei.hydrateRoot=r.hydrateRoot,Ei}var eT=Xp();const nT=_d(eT),tT="modulepreload",aT=function(r){return"/BTMM_JORNADAS/"+r},od={},Ln=function(o,s,u){let m=Promise.resolve();if(s&&s.length>0){let v=function(V){return Promise.all(V.map(y=>Promise.resolve(y).then(M=>({status:"fulfilled",value:M}),M=>({status:"rejected",reason:M}))))};document.getElementsByTagName("link");const L=document.querySelector("meta[property=csp-nonce]"),T=(L==null?void 0:L.nonce)||(L==null?void 0:L.getAttribute("nonce"));m=v(s.map(V=>{if(V=aT(V),V in od)return;od[V]=!0;const y=V.endsWith(".css"),M=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${V}"]${M}`))return;const x=document.createElement("link");if(x.rel=y?"stylesheet":tT,y||(x.as="script"),x.crossOrigin="",x.href=V,T&&x.setAttribute("nonce",T),document.head.appendChild(x),y)return new Promise((A,j)=>{x.addEventListener("load",A),x.addEventListener("error",()=>j(new Error(`Unable to preload CSS for ${V}`)))})}))}function f(v){const L=new Event("vite:preloadError",{cancelable:!0});if(L.payload=v,window.dispatchEvent(L),!L.defaultPrevented)throw v}return m.then(v=>{for(const L of v||[])L.status==="rejected"&&f(L.reason);return o().catch(f)})},Di=[{nombre:"Puesto Orosi",tag:"OR",color:"bg-orange-100 text-orange-950",funcionarios:["Errol Salazar","Mayra Espinoza","Yeison Cortés","Kenneth Mena","Fabricio Carbonell","Monserrath Navarro"]},{nombre:"Puesto Quetzales",tag:"QZ",color:"bg-orange-700 text-white",funcionarios:["Juan Pablo Granados","Karen Valle","Josué Brenes","Laura Valverde","Diana Tencio","Jetzelly Villalobos","Pablo Sánchez"]},{nombre:"Puesto Esperanza",tag:"LE",color:"bg-sky-100 text-sky-950",funcionarios:["Yolanda Elizondo","Mariano Solís","Guillermo Pérez","Carlos Cordero","Alexander Alvarado"]}],Si=Di.map(r=>r.nombre),Dd=Di.map(({nombre:r,tag:o,color:s})=>({nombre:r,tag:o,color:s})),bi=Di.flatMap((r,o)=>r.funcionarios.map((s,u)=>{const m=o*10+u+1,f=s==="Pablo Sánchez",v=s==="Yolanda Elizondo",L=s==="Carlos Cordero",T=["Yeison Cortés","Jetzelly Villalobos","Guillermo Pérez"].includes(s),V=s==="Fabricio Carbonell"?"De vacaciones":s==="Guillermo Pérez"?"Incapacitado":"Activo";return{id:`f${m}`,nombre:s,cedula:`1-0000-${String(m).padStart(4,"0")}`,email:f?"psforestal@yahoo.com":`${s.toLowerCase().replaceAll(" ",".")}@sinac.go.cr`,puesto:f?"Técnico en Recursos Naturales":v?"Asistente Administrativo":L?"Personal Apoyo ONG-Invest-Volunt":"Guardaparques",condicion:L?"ONG-Invest-Volunt":m%5===0?"Interino":"Propiedad",jornada:f||v?"Ordinaria":"Acumulativa",modalidad:f||v?"Horario administrativo L-V":m%7===0?"16x8":m%4===0?"12x6":"10x5",resolucion:T?"":L?"CONV-ONG-INV-VOL-2026":f||v?"":`RES-ACC-${String(m).padStart(3,"0")}-2026`,disponibilidad:!f&&!v&&!L&&m%3!==0,contrato:!f&&!v&&!L&&m%3!==0?`DISP-2026-${String(m).padStart(3,"0")}`:"",vencimiento:m%5===0?"2026-05-30":m%4===0?"2026-06-30":m%3!==0?"2026-12-31":"",policia:!f&&!v&&!L&&!T,brigada:m%4===2,ong:L,jefe:"Administración PNLQ",estado:V,ingreso:"2026-01-01",puestoOperativo:r.nombre,obs:`${r.nombre}${T?" · Dato pendiente: resolución acumulativa":""}`}})),Id=[],rT=[{id:"rep1",folio:"REP-001",funcionario:"Errol Salazar",fecha:"2026-05-24",tipoDia:"Día libre",motivo:"Incendio forestal",motivoDetalle:"Apoyo en control de conato sector Orosi.",magnitud:"diaEntero",horas:0,cuotas:[{id:"rep1-c1",fecha:"2026-05-31",magnitud:"medioDia",horas:0}],observaciones:"Llamado por la administración fuera de rol."},{id:"rep2",folio:"REP-002",funcionario:"Juan Pablo Granados",fecha:"2026-05-17",tipoDia:"Feriado",motivo:"Atención de denuncia",motivoDetalle:"Inspección por tala reportada en ingreso Quetzales.",magnitud:"horas",horas:4,cuotas:[],observaciones:""},{id:"rep3",folio:"REP-003",funcionario:"Mariano Solís",fecha:"2026-04-19",tipoDia:"Fuera de turno",motivo:"Actividad especial",motivoDetalle:"Atención de gira institucional.",magnitud:"medioDia",horas:0,cuotas:[{id:"rep3-c1",fecha:"2026-05-06",magnitud:"medioDia",horas:0}],observaciones:"Tiempo repuesto en coordinación con la administración."}],iT={1:{"Errol Salazar":"O-F T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6","Mayra Espinoza":"L3 L4 L5 O-FA LA LA LA LA LA LA LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2","Yeison Cortés":"O-F T5 T6 T7 T8 L1 L2 L3 L4 V1 V2 L1 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4","Kenneth Mena":"L3 L4 L5 L6 T1 O-FA T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 L1 L2 IN IN","Fabricio Carbonell":"O-F O-FA T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 L1","Karen Valle":"O-F T4 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1","Josué Brenes":"L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA O-FA","Laura Valverde":"O-F V7 V8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6","Diana Tencio":"O-F T4 L1 L2 T1 T2 T3 T4 T5 L1 L2 LA T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 LA L1 L2 T1 T2 T3 T4 T5 L1","Jetzelly Villalobos":"L1 L2 L3 L4 O-FA O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 T13 T14 L1 L2 L3 L4 L5 L6 L7 V1 V2 L1 LA","Yolanda Elizondo":"O-F V4 V5 V6 V7 V8 V9 V10 V11 V12 V13 V14 V15 V16 L1 L2 L3 L4 L5 L6 L7 L8 O-FA T1 T2 T3 T4 T5 T6 T7 T8","Mariano Solís":"O-F T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA V1 V2 V3 V4 LA LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4","Guillermo Pérez":"L4 L5 L6 O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 T13 T14 L1 L2 L3 L4 L5 L6 L7 T1 T2 T3 T4 T5 T6","Carlos Cordero":"O-F T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1","Alexander Alvarado":"O-F LI LI LI LI LI LI V13 V14 V15 V16 V17 V18 V19 V20 L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 V1 V2 V3 V4 V5 V6"},2:{"Errol Salazar":"LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 LA T1 T2 T3 T4 T5 T6 T7 T8","Mayra Espinoza":"T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11","Yeison Cortés":"T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 V1 V2 V3 V4 L1 L2 IN IN T1 T2 T3 T4 T5 T6 T7 T8 L1","Kenneth Mena":"IN IN IN IN IN IN IN IN IN IN IN IN L3 L4 L5 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 V11 V12 V13","Fabricio Carbonell":"T6 T7 T8 T9 T10 T11 L2 L3 T1 T2 T3 T4 T5 T6 T7 T8 T9 L4 L5 L1 L2 L3 L4 L5 T1 T2 T3 T4","Karen Valle":"L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1","Josué Brenes":"V1 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 L1 L2 V1 V2 V3 V4 L1 L2","Laura Valverde":"T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4","Diana Tencio":"L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 LA V1 V2 V3 L1 L2 T1 T2 T3 T4 T5 L1","Jetzelly Villalobos":"V1 V2 V3 V4 V5 L1 L2 L3 T1 T2 T3 T4 T5 T6 L1 L2 L3 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11","Yolanda Elizondo":"T9 T10 L1 L2 L3 L4 L5 V1 V2 V3 V4 V5 V6 L1 L2 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3","Mariano Solís":"L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 V11 V12 V13 V14 V15","Guillermo Pérez":"T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 L1 L2 L3 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Carlos Cordero":"T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1","Alexander Alvarado":"V7 V8 V9 V10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4"},3:{"Errol Salazar":"T9 T10 L1 L2 L3 L4 L5 LA LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7","Mayra Espinoza":"T12 T13 T14 T15 T16 T17 L1 L2 L3 L4 L5 L6 L7 L8 L9 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1","Yeison Cortés":"L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 T1","Kenneth Mena":"V14 V15 L1 L2 L3 IN IN IN IN IN IN IN V1 V2 V3 V4 L1 L2 IN IN IN IN IN IN IN IN IN IN IN IN IN","Fabricio Carbonell":"T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5","Karen Valle":"L2 T1 T2 T3 T4 T5 L1 L2 IN T2 T3 T4 T5 L1 L2 T1 LA LA T4 T5 L1 L2 T1 T2 T3 V1 T5 L1 L2 T1 T2","Josué Brenes":"LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5","Laura Valverde":"L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11","Diana Tencio":"L2 LA LA LA T4 T5 L1 L2 T1 T2 T3 LA T5 L1 L2 O-G O-G O-G O-G O-G O-G O-G O-G O-G O-G O-G O-G L1 L2 T1 T2","Jetzelly Villalobos":"T12 L1 L2 L3 L4 L5 L6 LA LA V1 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6","Yolanda Elizondo":"· · · · · · · · · · · · · · · · · IN IN IN IN IN IN IN IN IN IN T1 T2 T3 T4","Mariano Solís":"V16 L1 L2 L3 L4 L5 L6 L7 L8 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Guillermo Pérez":"T11 T12 L1 L2 L3 L4 L5 L6 V1 V2 V3 V4 V5 L1 L2 V1 V2 V3 V4 V5 V6 V7 L1 L2 L3 L4 IN IN IN IN IN","Carlos Cordero":"L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 V1 V2 L1 T1 T2 T3 T4 T5 T6 T7 T8","Alexander Alvarado":"T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 · · · · · · · · · · · · · · · · · · · ·"},4:{"Errol Salazar":"T8 T9 T10 L1 L2 L3 L4 L5 LA T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 LA T1 T2 T3 T4 T5 T6 T7 T8 T9","Mayra Espinoza":"T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA O-FA V1 V2 V3 L1 L2 T1 T2 T3 T4 T5 T6 T7 T8 L","Yeison Cortés":"L2 L3 L4 L5 L6 T2 L1 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 IN IN IN T3 T4 T5 T6 T7","Kenneth Mena":"IN V1 V2 V3 L1 IN IN IN IN IN IN IN IN IN IN IN IN IN IN V1 V2 L1 L L L L L L L L","Fabricio Carbonell":"T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 V1 V2 V3 V4 V5 V6 V7 V8","Karen Valle":"T3 O-F O-F L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4","Josué Brenes":"T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 V1 V2 V3 V4 L1 L2 LA T2 T3 T4 T5 T6 T7 T8 T9","Laura Valverde":"T12 T13 T14 L1 L2 L3 L4 L5 L6 L7 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 T1 T2 T3","Diana Tencio":"LA O-F O-F L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4","Jetzelly Villalobos":"T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3","Yolanda Elizondo":"T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2","Mariano Solís":"L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Guillermo Pérez":"IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN","Carlos Cordero":"T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5"},5:{"Errol Salazar":"T10 T11 T12 L1 L2 L3 L4 L5 L6 LA LA O-FA O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3","Mayra Espinoza":"L1 L2 L3 L4 LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8","Yeison Cortés":"O-FA L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 LA T4 T5 T6 T7 T8 L1 L2 L3","Kenneth Mena":"L L L L L L L L L L L L L L L L L L L L L L L V1 V2 V3 V4 V5 V6 L1 L2","Fabricio Carbonell":"V9 V10 V11 V12 V13 V14 V15 V16 V17 V18 V19 V20 L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 O-FA O-FA O-FA O-FA O-FA T1 T2 T3 T4","Juan Pablo Granados":"T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3","Karen Valle":"T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2","Josué Brenes":"T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 LA L1 L2 L3 L4 LA","Laura Valverde":"T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4","Diana Tencio":"T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2","Jetzelly Villalobos":"T4 T5 T6 L1 L2 L3 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 LA LA LA LA LA V1 V2","Pablo Sánchez":"T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 V1 V2 V3 V4 V5 L1 L2 T1 T2 T3 T4 T5 L1 L2","Yolanda Elizondo":"T3 T4 T5 T6 T7 T8 T9 LA L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3","Mariano Solís":"L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1","Guillermo Pérez":"IN IN IN IN IN IN IN IN IN IN IN IN IN IN T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5","Carlos Cordero":"T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 O-FA V1 V2 V3 V4 V5 V6 V7 V8"},6:{"Errol Salazar":"T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5","Mayra Espinoza":"T9 T10 T11 T12 T13 T14 L1 L2 L3 L4 L5 L6 L7 LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1","Yeison Cortés":"L4 LA T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2","Kenneth Mena":"L3 T1 T2 T3 T4 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2","Fabricio Carbonell":"T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 L1 T10 L2 L3 T1 L4 L5 T2 T3 T4 T5 T6 T7","Juan Pablo Granados":"L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3","Karen Valle":"T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 LA T5 L2 T1 T2 T3 T4 LA L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2","Josué Brenes":"LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 L1 L2 L3 T1 T2 L4 L5 L6 L1 · · · · · · · · ·","Laura Valverde":"T5 T6 T7 T8 L1 L2 L3 L4 O-FA O-FA O-FA O-FA LA V1 V2 V3 V4 V5 V6 V7 V8 L1 L2 L3 L4 V1 V2 V3 V4 L1","Diana Tencio":"T1 T2 T3 LA T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2","Jetzelly Villalobos":"V3 V4 L1 L2 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8","Pablo Sánchez":"T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 V1 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2","Yolanda Elizondo":"T4 T5 T6 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1","Mariano Solís":"L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 LA T2 T3 T4 T5 T6 T7 T8 T9 T10 L1","Guillermo Pérez":"T6 L1 L2 L3 LA V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Carlos Cordero":"V9 V10 V11 V12 V13 V14 V15 V16 V17 V18 V19 V20 L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 O-FA V1 V2 V3 V4 V5 V6 V7"},7:{"Errol Salazar":"T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1","Mayra Espinoza":"T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5","Yeison Cortés":"T3 T4 T5 L1 L2 T1 T2 T3 V1 V2 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5","Kenneth Mena":"T3 T4 T5 L1 L2 V1 V2 V3 V4 V5 L1 L2 LA T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5","Fabricio Carbonell":"T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8","Karen Valle":"T3 T4 LA T5 L2 T1 T2 T3 T4 T5 L1 L2 V1 V2 V3 V4 V5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5","Laura Valverde":"L2 LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 T13 L1 L2 L3 L4 L5 L6 L7 T1 T2 T3 T4 T5 T6 T7 T8 T9","Diana Tencio":"T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 V1 V2 V3 V4 V5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5","Jetzelly Villalobos":"T9 T10 L1 L2 L3 L4 L5 LA T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 LA T2 T3 T4 T5 T6","Pablo Sánchez":"T3 T4 T5 L1 L2 V1 V2 V3 V4 V5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5","Yolanda Elizondo":"T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2","Mariano Solís":"L2 L3 L4 L5 LA V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 L1 L2 L3 L4 L5 O-FA T2 T3 T4 T5 T6 T7 T8 T9 T10 T11","Guillermo Pérez":"L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8","Carlos Cordero":"V8 L1 L2 L3 L4 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 V11 V12 V13 V14 L1 L2 L3 L4 L5 L6 L7 T1 T2 T3 T4 T5"},8:{"Errol Salazar":"T2 T3 T4 T5 T6 T7 T8 L1 T9 T10 T11 T12 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 LA T1","Mayra Espinoza":"L6 LA V1 V2 V3 V4 V5 V6 V7 V8 L1 L2 L3 L4 LA LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 T5","Yeison Cortés":"L4 LA T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1","Kenneth Mena":"L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1","Fabricio Carbonell":"T9 T10 L1 L2 L3 L4 L5 O-FA O-FA V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T8","Monserrath Navarro":"· · · · · · · · · · · · · · · · · · · T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12","Karen Valle":"L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 T4 T5 L1 L2 T1","Laura Valverde":"T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Diana Tencio":"L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1","Jetzelly Villalobos":"T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 L1 L2 L3 T1","Pablo Sánchez":"L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1","Yolanda Elizondo":"T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4","Mariano Solís":"T12 L1 L2 L3 L4 L5 L6 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 V11 V12 V13 V14 L1 L2 L3 L4 L5 L6 L7 O-FA T1 T2","Guillermo Pérez":"T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T10","Carlos Cordero":"T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5"},9:{"Errol Salazar":"T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1","Mayra Espinoza":"T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5","Yeison Cortés":"T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3","Kenneth Mena":"T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3","Fabricio Carbonell":"T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7","Monserrath Navarro":"L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9","Karen Valle":"T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3","Laura Valverde":"L1 L2 L3 L4 L5 O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9","Diana Tencio":"T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3","Jetzelly Villalobos":"T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 LA","Pablo Sánchez":"T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3","Yolanda Elizondo":"L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4","Mariano Solís":"T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2","Guillermo Pérez":"T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7","Carlos Cordero":"L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2"},10:{"Errol Salazar":"T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6","Mayra Espinoza":"T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3","Yeison Cortés":"T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1","Fabricio Carbonell":"T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1","Monserrath Navarro":"T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2","Karen Valle":"T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1","Laura Valverde":"T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Diana Tencio":"T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1","Jetzelly Villalobos":"T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4","Pablo Sánchez":"T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1","Yolanda Elizondo":"L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2","Mariano Solís":"T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3","Guillermo Pérez":"T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5","Carlos Cordero":"L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9"},11:{"Errol Salazar":"T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6","Mayra Espinoza":"L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3","Yeison Cortés":"L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1","Kenneth Mena":"L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1","Fabricio Carbonell":"L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4","Monserrath Navarro":"T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5","Karen Valle":"L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1","Laura Valverde":"L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10","Diana Tencio":"L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1","Jetzelly Villalobos":"T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4","Pablo Sánchez":"L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1","Yolanda Elizondo":"L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4","Mariano Solís":"T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6","Guillermo Pérez":"T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8","Carlos Cordero":"T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 L4 T1 T2 T3 T4 T5"},12:{"Errol Salazar":"T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 O-F T5 T6 T7 T8 T9 T10","Mayra Espinoza":"L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 O-F T9 T10 T11 T12 L1 L2","Yeison Cortés":"T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 O-F L1 L2 V1 V2 V3 V4","Kenneth Mena":"T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 O-F L1 L2 T1 T2 T3 T4","Fabricio Carbonell":"L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 V1 V2 V3 V4 V5 V6 L1 L2 L3 O-FA T1 T2","Monserrath Navarro":"T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3","Karen Valle":"T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 O-F L1 L2 T1 T2 T3 T4","Laura Valverde":"T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 O-FA T1 T2 T3 T10","Diana Tencio":"T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 O-F L1 L2 V1 V2 V3 V4","Jetzelly Villalobos":"T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 O-F T12 L1 L2 L3 L4 L5","Pablo Sánchez":"T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 V1 V2 V3 V4 O-F L1 L2 V5 V6 V7 V8","Yolanda Elizondo":"L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 O-F T10 L1 L2 L3 L4 L5","Mariano Solís":"T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 O-F T1 T2 T3 T4 T5 T6","Guillermo Pérez":"T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 O-F T4 T5 T6 T7 T8 L1","Carlos Cordero":"T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 T1 T2 T3 T4"}},oT=[31,28,31,30,31,30,31,31,30,31,30,31],Us="2026-08-13-rol-bloque-anio-completo",Xs=(()=>{var o;const r={};for(let s=1;s<=12;s+=1){const u=iT[s]||{};for(const m of Di)for(const f of m.funcionarios){const v=((o=u[f])==null?void 0:o.split(" "))||[];for(let L=1;L<=oT[s-1];L+=1){const T=v[L-1];r[`2026-${s}-${m.nombre}-${f}-${L}`]=T&&T!=="·"?T:""}}}return r})(),sT=Object.fromEntries(Object.entries(Xs).filter(([r])=>{const o=r.match(/^2026-(\d+)-/),s=Number(o==null?void 0:o[1]);return s>=8&&s<=12}));function lT(r={}){return{...r,...sT}}const Yn=1,sr="current",cT="pnlq:state";let _s=null,rr=null,sd=Promise.resolve();function el(r){const o=sd.then(r,r);return sd=o.catch(()=>{}),o}async function va(){return _s||(typeof indexedDB>"u"?null:rr||(rr=(async()=>{try{const{default:r}=await Ln(async()=>{const{default:s}=await import("./import-wrapper-prod-1DhZh9vP.js");return{default:s}},[]),o=new r("pnlq");return o.version(1).stores({state:"id",auditoria:"++id, fecha, accion",pendientes:"++id, creadoEn, tipo"}),_s=o,o}catch{return null}finally{rr=null}})(),rr))}async function uT(){const r=await va();if(!r)return null;try{const o=await r.state.get(sr);return!o||o.schemaVersion!==Yn?null:{state:o.payload??null,revision:o.revision??0,savedAt:o.savedAt??null}}catch{return null}}async function dT(r,o=0){const s=await va();return s?el(async()=>{try{return await s.state.put({id:sr,schemaVersion:Yn,savedAt:new Date().toISOString(),revision:o,payload:r}),!0}catch{return!1}}):!1}async function mT(){const r=await va();return r?el(async()=>{try{return await r.state.delete(sr),!0}catch{return!1}}):!1}async function fT(){const r=await va();if(!r)return{migrated:!1,source:null};try{if(await r.state.get(sr))return{migrated:!1,source:null};if(typeof window>"u"||!window.localStorage)return{migrated:!1,source:null};const s=window.localStorage.getItem(cT);if(!s)return{migrated:!1,source:null};const u=JSON.parse(s);return u!=null&&u.state?u.schemaVersion!==Yn?{migrated:!1,source:null}:(await r.state.put({id:sr,schemaVersion:Yn,savedAt:u.savedAt||new Date().toISOString(),revision:u.revision??0,payload:u.state,migradoDeLocalStorage:!0}),{migrated:!0,source:"localStorage"}):{migrated:!1,source:null}}catch{return{migrated:!1,source:null}}}async function pT(){const r=await va();return r?el(async()=>{try{return await Promise.all([r.state.clear(),r.pendientes.clear(),r.auditoria.clear()]),!0}catch{return!1}}):!1}const nl=Object.freeze({puestosRequierenVisitantesDiario:["Puesto Orosi","Puesto Quetzales"],diaCorteViaticos:15,mesObjetivoViaticos:"siguiente",permitirConsultaDespuesCierre:!0,aplicarFeriadosEnPrimerDiaLaboral:!0,alertaInactivoConActividad:!0,alertaIncapacitadoConActividad:!0,alertaAcumulativaSinModalidad:!0,alertaReposicionPendiente:!0,horasJornada:8}),ld=["siguiente","actual"];function Vi(r={}){return{...nl,...r}}function Kv(r,o=Si){const s=[],u=Array.isArray(o)&&o.length?o:Si;if(!Array.isArray(r.puestosRequierenVisitantesDiario))s.push("La lista de puestos con Visit. diario debe ser un arreglo.");else{const v=r.puestosRequierenVisitantesDiario.filter(L=>!u.includes(L));v.length&&s.push(`Puesto(s) no reconocido(s) en la lista de Visit. diaria: ${v.join(", ")}`)}const m=Number(r.diaCorteViaticos);(!Number.isInteger(m)||m<1||m>28)&&s.push("Día de corte de viáticos debe ser un entero entre 1 y 28."),ld.includes(r.mesObjetivoViaticos)||s.push(`mesObjetivoViaticos debe ser uno de: ${ld.join(", ")}.`);const f=Number(r.horasJornada);return(!Number.isFinite(f)||f<1||f>24)&&s.push("Horas por jornada debe ser un número entre 1 y 24."),s}const vn=8,Rs=["Día libre","Fuera de turno","Feriado","Vacaciones interrumpidas","Otro"],Ds=["Emergencia","Incendio forestal","Atención de denuncia","Actividad especial","Operativo de control","Otro"],Od=["diaEntero","medioDia","horas"];function ha(r){return Math.round((Number(r)||0)*100)/100}function Fd(r,o,s=vn){return r==="diaEntero"?s:r==="medioDia"?s/2:Number(o)||0}function tl(r){return Array.isArray(r==null?void 0:r.cuotas)?r.cuotas:(r==null?void 0:r.estado)==="Repuesto"?[{id:`i-${r.id||"x"}`,fecha:r.fechaReposicion||r.fecha,magnitud:r.magnitud,horas:r.horas||0}]:[]}function TT(r,o=vn){return ha(Fd(r==null?void 0:r.magnitud,r==null?void 0:r.horas,o))}function zd(r,o=vn){return ha(tl(r).reduce((s,u)=>s+Fd(u.magnitud,u.horas,o),0))}function ur(r,o=vn){return ha(Math.max(0,TT(r,o)-zd(r,o)))}function Qd(r,o=vn){return zd(r,o)<=0?"Pendiente":ur(r,o)<=0?"Repuesto":"Parcial"}function LT(r){const o=String(r||"").match(/(\d+)/);return o?Number(o[1]):null}function vT(r=[]){const o=r.reduce((s,u)=>Math.max(s,LT(u.folio)||0),0);return`REP-${String(o+1).padStart(3,"0")}`}function hT(r=[],o=vn){const s={},u={};for(const m of r)if(m.funcionario&&m.fecha&&(s[`${m.funcionario}|${m.fecha}`]={...m,estadoCalc:Qd(m,o),saldo:ur(m,o)}),m.funcionario)for(const f of tl(m))f.fecha&&(u[`${m.funcionario}|${f.fecha}`]={...m,cuota:f});return{trabajadas:s,reposiciones:u}}function gT(r=[],o=vn){let s=0,u=0,m=0,f=0;for(const v of r){const L=Qd(v,o);f+=ur(v,o),L==="Repuesto"?m+=1:(s+=1,L==="Parcial"&&(u+=1))}return{total:r.length,pendientes:s,parciales:u,repuestos:m,saldoHoras:ha(f)}}function PT(r,o=vn){const s=ha(r);if(s<=0)return"0 h";const u=s/o;return Number.isInteger(u)?u===1?"1 día":`${u} días`:s===o/2?"medio día":`${s} h`}function yT(r=[]){return[...r].sort((o,s)=>String(s.fecha||"").localeCompare(String(o.fecha||"")))}function MT(r=[],o,s=vn){return ha(r.filter(u=>u.funcionario===o).reduce((u,m)=>u+ur(m,s),0))}function ET(r=[],o,s=vn){return r.filter(u=>u.funcionario===o&&ur(u,s)>0).sort((u,m)=>String(u.fecha||"").localeCompare(String(m.fecha||"")))}function NT(r){return r==="L"?"Día libre":r==="V"?"Vacaciones interrumpidas":"Fuera de turno"}function CT({reposiciones:r=[],funcionario:o,fecha:s,categoria:u,motivo:m="Actividad especial",detalle:f=""}){return{id:`rep${Date.now()}`,folio:vT(r),funcionario:o,fecha:s,tipoDia:NT(u),motivo:m,motivoDetalle:f,magnitud:"diaEntero",horas:0,cuotas:[],observaciones:""}}function xT(r=[],o,s,u=vn){const m=ET(r,o,u)[0];return m?r.map(f=>f.id===m.id?{...f,cuotas:[...tl(f),s]}:f):r}function ST(r=[],o=vn){const s=new Map;for(const m of r){const f=m.funcionario||"—";s.has(f)||s.set(f,[]),s.get(f).push(m)}const u=[];for(const[m,f]of s.entries())u.push({funcionario:m,registros:yT(f),...gT(f,o)});return u.sort((m,f)=>f.saldoHoras-m.saldoHoras||f.total-m.total||m.funcionario.localeCompare(f.funcionario)),u}const cd=["Activo","Incapacitado","De vacaciones","Inactivo"],bT=1e3,VT=2e4,AT=2e4,wT=3e5,jT=200,kT=new Map(bi.map(r=>[r.id,r]));function nt(r){return!!r&&typeof r=="object"&&!Array.isArray(r)}function _T(r){return r.replace(/<[^>]*>/g,"")}function On(r,o,s){return typeof r!="string"?s:_T(r).trim().slice(0,o)}function Is(r,o,s,u){if(typeof r!="string")return u;const m=r.trim().slice(0,o);return s.test(m)?m:u}function RT(r,o){return typeof r=="boolean"?r:o}function Jd(r,o,{min:s=0,max:u=1e4}={}){const m=Number(r);return Number.isFinite(m)?Math.min(u,Math.max(s,m)):o}function lr(r,o){if(typeof r!="string")return o;const s=r.trim().match(/^(\d{4})-(\d{2})-(\d{2})$/);if(!s)return o;const u=Number(s[1]);if(u<2e3||u>2100)return o;const m=Number(s[2]),f=Number(s[3]);return m<1||m>12||f<1||f>31?o:s[0]}function DT(r){if(!nt(r))return r;const o=typeof r.id=="string"?kT.get(r.id):void 0,s={...r};"id"in s&&(s.id=Is(s.id,20,/^[A-Za-z0-9-]+$/,"")),"nombre"in s&&(s.nombre=On(s.nombre,120,(o==null?void 0:o.nombre)??"")),"cedula"in s&&(s.cedula=Is(s.cedula,20,/^[0-9-]+$/,(o==null?void 0:o.cedula)??"")),"email"in s&&(s.email=Is(s.email,120,/^[^\s@]+@[^\s@]+\.[^\s@]+$/,(o==null?void 0:o.email)??""));for(const u of["puesto","puestoOperativo","condicion","jornada","modalidad"])u in s&&(s[u]=On(s[u],80,(o==null?void 0:o[u])??""));if("obs"in s&&(s.obs=On(s.obs,500,(o==null?void 0:o.obs)??"")),"estado"in s){const u=o&&cd.includes(o.estado)?o.estado:"Activo";s.estado=cd.includes(s.estado)?s.estado:u}for(const u of["disponibilidad","policia","brigada","ong"])u in s&&(s[u]=RT(s[u],(o==null?void 0:o[u])??!1));return"jefe"in s&&(s.jefe=typeof s.jefe=="string"?s.jefe:(o==null?void 0:o.jefe)??""),s}function IT(r){if(!nt(r))return null;const o={...r};"id"in o&&(o.id=On(o.id,40,""));for(const[u,m]of Object.entries(o))u==="id"||u==="inicio"||u==="fin"||typeof m=="string"&&(o[u]=On(m,200,""));if(typeof o.inicio!="string")return null;const s=lr(o.inicio,"");return s?(o.inicio=s,"fin"in o&&(o.fin=lr(o.fin,s)),o):null}function OT(r){if(!nt(r))return null;const o={...r};return"id"in o&&(o.id=On(o.id,40,"")),"fecha"in o&&(o.fecha=lr(o.fecha,"")),"magnitud"in o&&(o.magnitud=Od.includes(o.magnitud)?o.magnitud:"diaEntero"),"horas"in o&&(o.horas=Jd(o.horas,0,{min:0,max:24})),o}function FT(r){if(!nt(r))return null;const o={...r};if(typeof o.funcionario!="string"||!o.funcionario.trim()||(o.funcionario=On(o.funcionario,120,""),typeof o.fecha!="string"))return null;const s=lr(o.fecha,"");return s?(o.fecha=s,"id"in o&&(o.id=On(o.id,40,"")),"folio"in o&&(o.folio=On(o.folio,20,"")),"tipoDia"in o&&(o.tipoDia=Rs.includes(o.tipoDia)?o.tipoDia:Rs[Rs.length-1]),"motivo"in o&&(o.motivo=Ds.includes(o.motivo)?o.motivo:Ds[Ds.length-1]),"motivoDetalle"in o&&(o.motivoDetalle=On(o.motivoDetalle,300,"")),"observaciones"in o&&(o.observaciones=On(o.observaciones,300,"")),"magnitud"in o&&(o.magnitud=Od.includes(o.magnitud)?o.magnitud:"diaEntero"),"horas"in o&&(o.horas=Jd(o.horas,0,{min:0,max:24})),"fechaReposicion"in o&&(o.fechaReposicion=lr(o.fechaReposicion,"")),Array.isArray(o.cuotas)&&(o.cuotas=o.cuotas.map(OT).filter(Boolean).slice(0,500)),o):null}function zT(r){const o={};let s=0;for(const[u,m]of Object.entries(r)){if(s>=wT)break;typeof u!="string"||u.length===0||u.length>jT||(o[u]=typeof m=="string"&&m.length<=10?m:"",s+=1)}return o}function QT(r){try{if(!nt(r))return r;const o={...r};if(Array.isArray(o.personas)&&(o.personas=o.personas.filter(nt).map(s=>{try{return DT(s)}catch{return s}}).slice(0,bT)),Array.isArray(o.actividadesPlan)&&(o.actividadesPlan=o.actividadesPlan.filter(nt).map(s=>{try{return IT(s)}catch{return s}}).filter(Boolean).slice(0,VT)),Array.isArray(o.reposiciones)&&(o.reposiciones=o.reposiciones.map(s=>{try{return FT(s)}catch{return null}}).filter(Boolean).slice(0,AT)),nt(o.roleData))try{o.roleData=zT(o.roleData)}catch{}if("reglas"in o)try{o.reglas=Vi(nt(o.reglas)?o.reglas:{})}catch{}return o}catch{return r}}const Ii="pnlq:state",al="pnlq:lastSavedAt",JT="pnlq:backup:v";function Bt(){try{if(typeof window>"u"||!window.localStorage)return null;const r="__pnlq_probe__";return window.localStorage.setItem(r,"1"),window.localStorage.removeItem(r),window.localStorage}catch{return null}}let xt=null;function BT(){const r=Bt();if(!r)return 0;try{const o=r.getItem(Ii);if(!o)return 0;const s=JSON.parse(o);return typeof(s==null?void 0:s.revision)=="number"?s.revision:0}catch{return 0}}function rl(){return xt===null&&(xt=BT()),xt}function ud(r){rl(),typeof r=="number"&&r>xt&&(xt=r)}function UT(){return rl(),xt+=1,xt}function Ys(){const r=Bd();return r?r.state:null}function Bd(){const r=Bt();if(!r)return null;const o=r.getItem(Ii);if(!o)return null;try{const s=JSON.parse(o);if(!s||typeof s!="object")return null;if(s.schemaVersion!==Yn){const u=`${JT}${s.schemaVersion??"unknown"}-${Date.now()}`;try{r.setItem(u,o)}catch{}return null}return rl(),{state:s.state??null,revision:typeof s.revision=="number"?s.revision:0,savedAt:s.savedAt??null}}catch{return null}}function YT(r,o){if(!r&&!o)return null;if(!r)return{...o,source:"indexeddb"};if(!o)return{...r,source:"localStorage"};const s=r.revision??0,u=o.revision??0;if(s!==u)return s>u?{...r,source:"localStorage"}:{...o,source:"indexeddb"};const m=r.savedAt?Date.parse(r.savedAt):NaN,f=o.savedAt?Date.parse(o.savedAt):NaN;return!Number.isNaN(m)&&!Number.isNaN(f)&&m!==f?m>f?{...r,source:"localStorage"}:{...o,source:"indexeddb"}:{...r,source:"localStorage"}}async function GT(){const r=await fT(),o=await uT(),s=Bd(),u=YT(s,o);return u?(ud((s==null?void 0:s.revision)??0),ud((o==null?void 0:o.revision)??0),{state:u.state,source:u.source,migrated:r.migrated}):{state:null,source:null,migrated:r.migrated}}async function KT(r){const o=UT(),s=new Date().toISOString(),u=Bt();let m=!1;if(u)try{const v=JSON.stringify({schemaVersion:Yn,savedAt:s,revision:o,state:r});u.setItem(Ii,v),u.setItem(al,s),m=!0}catch{m=!1}const f=await dT(r,o);return{ok:m||f,ls:m,idb:f,revision:o}}async function $T(){const r=Bt();let o=!1;if(r)try{r.removeItem(Ii),r.removeItem(al),o=!0}catch{}const s=await mT().catch(()=>!1),u=await pT().catch(()=>!1),m=s||u;return o&&m&&(xt=null),{ok:o&&m,ls:o,idb:m}}function qT(){const r=Bt();if(!r)return null;try{return r.getItem(al)}catch{return null}}function HT(r){return{schemaVersion:Yn,appName:"PNLQ — Gestión de Jornadas",unidad:"PNLQ-BTMM",areaConservacion:"ACC",exportadoEn:new Date().toISOString(),state:r}}function $v(r){try{const o=JSON.parse(r);return!o||typeof o!="object"?{ok:!1,reason:"JSON inválido"}:o.schemaVersion!==Yn?{ok:!1,reason:`Versión de esquema incompatible: encontrada v${o.schemaVersion??"?"} esperada v${Yn}`}:!o.state||typeof o.state!="object"?{ok:!1,reason:"Snapshot sin estado"}:{ok:!0,state:QT(o.state),exportadoEn:o.exportadoEn}}catch(o){return{ok:!1,reason:`JSON malformado: ${o.message}`}}}async function WT(){const r=!!Bt();let o=!1;if(typeof indexedDB<"u")try{o=!!await va()}catch{o=!1}return o?{kind:"indexeddb",hasIDB:o,hasLS:r}:r?{kind:"localStorage",hasIDB:!1,hasLS:!0}:{kind:"none",hasIDB:!1,hasLS:!1}}function ZT(){const r=typeof indexedDB<"u",o=!!Bt();return r?{kind:"indexeddb",hasIDB:r,hasLS:o,verificado:!1}:o?{kind:"localStorage",hasIDB:!1,hasLS:!0,verificado:!0}:{kind:"none",hasIDB:!1,hasLS:!1,verificado:!0}}function Ud(r,o){return new Date(r,o+1,0).getDate()}function qv(r,o,s){const u=r*12+o+s;return{year:Math.floor(u/12),month:(u%12+12)%12}}function Un(r){return String(r).padStart(2,"0")}function Oi(r=new Date){return`${r.getFullYear()}-${Un(r.getMonth()+1)}-${Un(r.getDate())}`}function XT(r=new Date){return`${Oi(r)}_${Un(r.getHours())}-${Un(r.getMinutes())}-${Un(r.getSeconds())}`}function e1(r,o,s){return`${r}-${Un(o+1)}-${Un(s)}`}function tt(r){if(!r)return"—";const o=r.split("-");return`${o[2]}/${o[1]}/${o[0]}`}function n1(r,o=new Date(2026,4,19)){return r?Math.round((new Date(r+"T00:00:00")-o)/864e5):null}function t1(r,o,s=null){for(let u=1;u<=Ud(r,o);u++){const m=new Date(r,o,u).getDay();if(m>=1&&m<=5){if(!s)return u;const f=e1(r,o,u);if(!s.has(f))return u}}return 1}const dd=200,il=Object.freeze({ALTA:"alta",EDICION:"edicion",BAJA:"baja",RESTAURACION:"restauracion",IMPORTACION:"importacion"}),a1=new Set(Object.values(il)),r1=new Set(["id"]);let md=0;function i1(){return md+=1,`h${Date.now()}-${md}`}function fd(r){return r??""}function o1(r,o){const s=r&&typeof r=="object"?r:{},u=o&&typeof o=="object"?o:{},m=new Set([...Object.keys(s),...Object.keys(u)]),f=[];for(const v of m){if(r1.has(v))continue;const L=fd(s[v]),T=fd(u[v]);L!==T&&f.push({campo:v,antes:L,despues:T})}return f.sort((v,L)=>v.campo.localeCompare(L.campo))}function s1(r){return{nombre:String((r==null?void 0:r.nombre)??"").trim(),cedula:String((r==null?void 0:r.cedula)??"").trim()}}function l1({tipo:r,funcionario:o,cambios:s=[],detalle:u=null,fecha:m}={}){return!a1.has(r)||r===il.EDICION&&s.length===0?null:{id:i1(),fecha:m||new Date().toISOString(),tipo:r,funcionario:s1(o),cambios:s,...u?{detalle:u}:{}}}function Hv(r,o,s){return l1({tipo:il.EDICION,funcionario:o,cambios:o1(r,o),fecha:s})}function c1(r,o,s=dd){const u=Array.isArray(r)?r:[];if(!o)return u;const m=Number.isInteger(s)&&s>0?s:dd;return[o,...u].slice(0,m)}const Yd=C.createContext(null),Gs=new Date,u1=Oi(Gs),Ks="limpiezaEnzoYSetDic2026",$s="actividadesEjemploJul2026",d1="2026-07-14",Ai="rolesFuenteJulAgo2026",Ct={view:"dia",personas:bi,month:Gs.getMonth(),year:Gs.getFullYear(),compact:!1,roleData:Xs,actividadesPlan:Id,reposiciones:rT,diaVista:u1,filtrosVista:{},funcionarioVista:"",historial:[],puestos:Dd,reglas:{...nl},migraciones:{[Ks]:!0,[$s]:!0,[Ai]:Us}};function qs(r){return r==="dashboard"?"dia":r}function Gd(r){const o=(r==null?void 0:r.migraciones)||{},s=!!o[Ks],u=(Array.isArray(r==null?void 0:r.personas)?r.personas:[]).filter(Boolean),m=s?u:u.filter(x=>x.nombre!=="Enzo Martini"),f=new Map(m.map(x=>[x.nombre,x])),v=new Set(bi.map(x=>x.nombre)),L=(r==null?void 0:r.roleData)||{},T=s?L:Object.fromEntries(Object.entries(L).filter(([x])=>!/^2026-(?:9|10|11|12)-/.test(x)&&!x.includes("-Enzo Martini-"))),V=[...bi.map(x=>({...x,...f.get(x.nombre)||{}})),...m.filter(x=>x.nombre&&!v.has(x.nombre))];let y=Array.isArray(r==null?void 0:r.actividadesPlan)?r.actividadesPlan.filter(x=>x&&typeof x=="object"):Ct.actividadesPlan;if(!o[$s]&&Array.isArray(r==null?void 0:r.actividadesPlan)){const x=new Set(y.map(j=>j.id)),A=Id.filter(j=>j.inicio>=d1&&!x.has(j.id));A.length&&(y=[...y,...A])}const M=Array.isArray(r==null?void 0:r.reposiciones)?r.reposiciones.filter(x=>x&&typeof x=="object"&&x.funcionario&&x.fecha):Ct.reposiciones;return{...Ct,...r,view:qs((r==null?void 0:r.view)??Ct.view),personas:V,actividadesPlan:y,reposiciones:M,historial:Array.isArray(r==null?void 0:r.historial)?r.historial:[],filtrosVista:{},puestos:Array.isArray(r==null?void 0:r.puestos)&&r.puestos.length?r.puestos.filter(x=>x&&typeof x=="object"&&x.nombre):Dd,roleData:{...Xs,...T},reglas:Vi(r==null?void 0:r.reglas),migraciones:{...o,[Ks]:!0,[$s]:!0}}}function m1(){const r=Ys();return r?Gd(r):Ct}function xn(r,o){return typeof r=="function"?r(o):r}function f1(r,o){var s,u,m,f;switch(o.type){case"SET_VIEW":return{...r,view:qs(o.payload)};case"SET_MONTH":return{...r,month:xn(o.payload,r.month)};case"SET_YEAR":return{...r,year:xn(o.payload,r.year)};case"SET_PERIODO":return{...r,month:o.month,year:o.year};case"SET_COMPACT":return{...r,compact:xn(o.payload,r.compact)};case"SET_DIA_VISTA":return{...r,diaVista:xn(o.payload,r.diaVista)};case"SET_FILTROS_VISTA":{const v=o.vista;if(!v)return r;const L=(s=r.filtrosVista)==null?void 0:s[v],T=xn(o.payload,L||{}),V={};for(const[y,M]of Object.entries(T||{}))M!=null&&M!==""&&(V[y]=String(M));return{...r,filtrosVista:{...r.filtrosVista||{},[v]:V}}}case"SET_FUNCIONARIO_VISTA":return{...r,funcionarioVista:String(xn(o.payload,r.funcionarioVista)||"")};case"SET_PERSONAS":return{...r,personas:xn(o.payload,r.personas)};case"SET_ACTIVIDADES_PLAN":return{...r,actividadesPlan:xn(o.payload,r.actividadesPlan)};case"SET_REPOSICIONES":return{...r,reposiciones:xn(o.payload,r.reposiciones)};case"SET_ROLE_DATA":return{...r,roleData:xn(o.payload,r.roleData)};case"SET_PUESTOS":return{...r,puestos:xn(o.payload,r.puestos)};case"REGISTRAR_CAMBIO":return{...r,historial:c1(r.historial,o.payload)};case"SYNC_ROLES_FUENTE":return((u=r.migraciones)==null?void 0:u[Ai])===o.version?r:{...r,roleData:lT(r.roleData),migraciones:{...r.migraciones||{},[Ai]:o.version}};case"SET_REGLAS":{const v=xn(o.payload,r.reglas);return{...r,reglas:Vi(v)}}case"REPLACE_STATE":return{...Ct,...o.payload,view:qs(((m=o.payload)==null?void 0:m.view)??Ct.view),reglas:Vi((f=o.payload)==null?void 0:f.reglas)};default:return r}}const p1=new Set(["view","compact","diaVista","funcionarioVista","filtrosVista","month","year"]);function Ni(r){const o={};for(const s of Object.keys(r))p1.has(s)||(o[s]=r[s]);return o}const T1=500;function L1({children:r}){const[o,s]=C.useReducer(f1,void 0,m1),[u,m]=C.useState(()=>qT()),[f,v]=C.useState(0),[L,T]=C.useState(()=>ZT()),[V,y]=C.useState(!1),[M,x]=C.useState(!1),[A,j]=C.useState(null),J=C.useRef(null),R=C.useRef(!0),w=C.useRef(!1),Y=C.useRef(!1),ie=C.useRef(!1);C.useEffect(()=>{let B=!1;return WT().then(X=>{B||T(X)}),()=>{B=!0}},[]);const Z=C.useRef(o);C.useEffect(()=>{Z.current=o});const fe=C.useRef(JSON.stringify(Ni(o)));C.useEffect(()=>{let B=!1;return(async()=>{try{const{state:X,source:Pe,migrated:ve}=await GT();if(B)return;if(ve&&y(!0),X&&Pe==="indexeddb"){const Me=Gd(X),Qe=JSON.stringify(Ni(Me)),rn=fe.current;if(JSON.stringify(Ni(Z.current))!==rn)return;rn!==Qe&&s({type:"REPLACE_STATE",payload:Me})}}catch(X){console.error("No fue posible completar la hidratación local",X)}finally{B||(w.current=!0,x(!0))}})(),()=>{B=!0}},[]),C.useEffect(()=>{var X;!M||((X=Z.current.migraciones)==null?void 0:X[Ai])===Us||s({type:"SYNC_ROLES_FUENTE",version:Us})},[M]);const le=C.useRef(null);le.current=async function(){if(Y.current){ie.current=!0;return}Y.current=!0,ie.current=!1;try{const X=await KT(Ni(Z.current));j(X),X.ls&&m(new Date().toISOString()),X.ok&&v(0)}finally{Y.current=!1,ie.current&&(ie.current=!1,le.current())}},C.useEffect(()=>{if(R.current){R.current=!1;return}return v(B=>B+1),J.current&&window.clearTimeout(J.current),J.current=window.setTimeout(()=>{J.current=null,le.current()},T1),()=>{J.current&&window.clearTimeout(J.current)}},[o]),C.useEffect(()=>{const B=()=>{J.current&&(window.clearTimeout(J.current),J.current=null,le.current())},X=()=>{document.visibilityState==="hidden"&&B()};return window.addEventListener("pagehide",B),document.addEventListener("visibilitychange",X),()=>{window.removeEventListener("pagehide",B),document.removeEventListener("visibilitychange",X)}},[]);const ae=C.useCallback(B=>s({type:"SET_VIEW",payload:B}),[]),he=C.useCallback(B=>s({type:"SET_MONTH",payload:B}),[]),ue=C.useCallback(B=>s({type:"SET_YEAR",payload:B}),[]),pe=C.useCallback(B=>s({type:"SET_COMPACT",payload:B}),[]),xe=C.useCallback(B=>s({type:"SET_DIA_VISTA",payload:B}),[]),ge=C.useCallback(B=>s({type:"SET_FUNCIONARIO_VISTA",payload:B}),[]),ye=C.useCallback((B,X)=>s({type:"SET_FILTROS_VISTA",vista:B,payload:X}),[]),Ve=C.useCallback(B=>s({type:"SET_PERSONAS",payload:B}),[]),oe=C.useCallback(B=>s({type:"SET_ACTIVIDADES_PLAN",payload:B}),[]),Te=C.useCallback(B=>s({type:"SET_REPOSICIONES",payload:B}),[]),me=C.useCallback(B=>s({type:"SET_ROLE_DATA",payload:B}),[]),z=C.useCallback(B=>s({type:"SET_PUESTOS",payload:B}),[]),H=C.useCallback(B=>s({type:"REGISTRAR_CAMBIO",payload:B}),[]),U=C.useCallback(B=>s({type:"SET_REGLAS",payload:B}),[]),P=C.useCallback(B=>{s({type:"REPLACE_STATE",payload:B})},[]),_=C.useCallback(()=>{s({type:"SET_REGLAS",payload:{...nl}})},[]),re=C.useCallback(async()=>{J.current&&(window.clearTimeout(J.current),J.current=null);const B=await $T();return s({type:"REPLACE_STATE",payload:Ct}),m(null),j(null),v(0),B},[]),de=C.useMemo(()=>({...o,setView:ae,setMonth:he,setYear:ue,setCompact:pe,setDiaVista:xe,setFuncionarioVista:ge,setFiltrosVista:ye,setPersonas:Ve,setActividadesPlan:oe,setReposiciones:Te,setRoleData:me,setPuestos:z,registrarCambio:H,setReglas:U,resetReglas:_,replaceState:P,resetToSeed:re,lastSavedAt:u,pendingChanges:f,lastSaveResult:A,durableSaveFailed:A?!A.idb:!1,schemaVersion:Yn,storageBackend:L,migracionLs:V,dispatch:s}),[o,ae,he,ue,pe,xe,ge,ye,Ve,oe,Te,me,z,H,U,_,P,re,u,f,A,L,V]);return c.jsx(Yd.Provider,{value:de,children:r})}function Jt(){const r=C.useContext(Yd);if(!r)throw new Error("useApp must be used within an <AppProvider>");return r}const v1={atajos:{buscarTitulo:"Pulse / para saltar aquí"},app:{name:"PNLQ — Gestión de Jornadas Laborales",short:"PNLQ",estado:"Activo",reglaDura:"Regla dura: el sistema registra y alerta; no genera pago, reposición, suspensión o derecho automático.",sinacCR:"SINAC · Costa Rica",accNombre:"Área de Conservación Central",bloqueLinea1:"Bloque Tapantí",bloqueLinea2:"Macizo de la Muerte",bloqueSub:"Gestión de jornadas laborales",perfilNombre:"P. Sánchez N.",perfilCargo:"Guardaparques · ACC",titulo:"Gestión de jornadas laborales"},sidebar:{grupoPrincipal:"Principal",grupoJornadas:"Jornadas",grupoControl:"Control"},view:{dia:"Día",funcionarios:"Funcionarios",roles:"Roles",planificacion:"Planificación general",planFuncionario:"Planificación/Funcionario",adelantos:"Adelanto de viáticos",reposicion:"Reposición de tiempo",disponibilidad:"Disponibilidad",alertas:"Alertas",datos:"Datos · respaldo",configuracion:"Configuración"},topbar:{periodo:"Periodo",mesAnterior:"Mes anterior",mesSiguiente:"Mes siguiente",mes:"Mes",anio:"Año",vistaCompacta:"Vista compacta",vistaAmplia:"Vista amplia",cargando:"Cargando vista…",hoy:"Hoy",tema:"Tema y contraste",previewMobile:"Abrir simulador temporal de vista móvil",previewMobileCorto:"Vista móvil",previewTitle:"Vista móvil temporal",previewDesc:"Simulación de un teléfono genérico de {ancho} × {alto} px. Puede usar la aplicación dentro del marco.",previewFrameTitle:"Aplicación en tamaño de teléfono móvil",previewOrientation:"Orientación del teléfono simulado",previewVertical:"Vertical",previewHorizontal:"Horizontal"},bottomNav:{inicio:"Inicio",personal:"Personal",plan:"Plan",alertas:"Alertas",dia:"Día",roles:"Roles",planFunc:"Plan/Func.",viaticos:"Viáticos",reposicion:"Reposición",disponib:"Disponib.",datos:"Datos",config:"Config.",mas:"Más",masTitulo:"Más módulos",masSub:"Herramientas y módulos secundarios",masAria:"Más opciones",navAria:"Navegación principal",alertasAria:"{n} alertas pendientes"},theme:{light:"Claro",dark:"Oscuro",hc:"Alto contraste",cambiarOscuro:"Cambiar a oscuro",cambiarHC:"Cambiar a alto contraste",cambiarClaro:"Cambiar a claro"},cobertura:{titulo:"Cobertura programada",programados:"Programados en actividades",enTurnoRol:"En turno según rol",atencionVisit:"Atención rutinaria visitantes",alertaSinAtencion:"ALERTA: debe haber al menos una persona asignada.",asignadosVisit:"Asignados a atención rutinaria de visitantes",enTurnoSegunRol:"Funcionarios en turno según rol",sinTurno:"No hay funcionarios en turno según rol para este puesto operativo y día.",programadosLugar:"Funcionarios programados en actividades con este lugar",sinProgramados:"No hay funcionarios programados en actividades con este puesto operativo como lugar para este día.",sinActividad:"Sin actividad programada para este día.",rolPrefix:"Rol: {rol} · {puesto}",agregarActividad:"Agregar actividad",editarActividad:"Editar actividad"},kpi:{coberturaCritica:"Cobertura crítica",coberturaCriticaSub:"días sin Visit. asignada",sinActividad:"Sin actividad",sinActividadSub:"en turno hoy sin planificar",porVencer:"Por vencer",porVencerSub:"disponibilidades ≤30 días",personalActivo:"Personal activo",personalActivoSub:"/ {total} total",reposicionPendiente:"Tiempo por reponer",reposicionPendienteSub:"funcionarios con tiempo pendiente",enTurno:"En turno",conActividad:"Con actividad",fueraDeTurno:"Fuera de turno",conViatico:"Con viático"},dia:{coberturaCritica:"Cobertura crítica en {n} puesto(s)",coberturaCriticaSinNadie:"{puesto}: nadie asignado a la atención de visitantes.",coberturaCriticaRemoto:"{puesto}: {n} persona(s) asignada(s) a la atención de visitantes, pero ninguna presente en el puesto.",coberturaCriticaAyuda:"Estos puestos deben tener atención de visitantes todos los días. Asigne a alguien que esté en turno presencial, o ajuste la regla en Configuración.",coberturaCriticaAria:"{puesto} en cobertura crítica",anterior:"Anterior",siguiente:"Siguiente",diaAnterior:"Día anterior",diaSiguiente:"Día siguiente",seleccionarFecha:"Seleccionar fecha",pistaSwipe:"Deslice ←/→ para cambiar día",porPuesto:"Por puesto operativo",resumenTitulo:"Resumen del día",resumenEnTurno:"En turno",resumenSinActividad:"Sin actividad",resumenAlertas:"Alertas",resumenPistaSinActividad:"Hay personas en turno sin actividad. Baje a la sección «En turno · sin actividad» para asignar.",ayudaAria:"Cómo usar la vista Día",th:{puesto:"Puesto",fuera:"Fuera",enTurno:"En turno",conActividad:"Con activ.",sinActividad:"Sin activ.",total:"Total"},actividadesTitulo:"Actividades planificadas ({n})",actividadesTituloCorto:"Actividades · {n}",teletrabajoBadge:"Teletrabajo",teletrabajoResumen:"De quienes trabajan hoy, {n} lo hacen en teletrabajo y no pueden atender visitantes.",filtroActividades:{mostrar:"Mostrar actividades",aria:"Filtrar actividades del día",general:"General",trabajo:"Tipo de trabajo",presencial:"Presencial",teletrabajo:"Teletrabajo",funcionario:"Funcionario",puesto:"Puesto",seleccionarFuncionario:"Funcionario",seleccionarPuesto:"Puesto operativo",resultados:"Mostrando {n} de {total} actividades"},nueva:"+ Nueva",nuevaCorta:"Nueva",sinActividades:"Sin actividades planificadas para este día",enTurnoConActTitulo:"En turno · con actividad ({n})",enTurnoConActVacio:"Ningún funcionario en turno tiene actividad programada",enTurnoSinActTitulo:"En turno · sin actividad ({n})",enTurnoSinActVacio:"Todos los funcionarios en turno tienen actividad asignada",asignar:"+ Asignar",fueraDeTurnoTitulo:"Fuera de turno ({n})",fueraDeTurnoVacio:"Todos los funcionarios activos están en turno",conViaticoTitulo:"Con viático este día ({n})",nFuncionarios:"{n} funcionario{plural}",viaticoBadge:"💵 Viático",conflictosBadge:"⚠ {n} conflicto{plural}",sinLugar:"Sin lugar"},help:{dia:{titulo:"Cómo usar la vista Día",lineas:["Arriba elige la fecha con las flechas o el calendario.","Las tres cifras grandes muestran quién está en turno, quién falta actividad y cuántas alertas hay.","Toque «Alertas» en la barra inferior o la cifra de alertas para ver los avisos.","Use «+ Nueva» o el botón redondo para registrar una actividad.","Los cambios se guardan solos en este teléfono (vea el mensaje «Guardado»)."]}},funcionarios:{titulo:"Funcionarios",agregar:"Agregar funcionario",agregarCorto:"Agregar",buscarPlaceholder:"Buscar por nombre, cédula, puesto u observación…",verFiltros:"Filtros y orden",filtroTodos:"Todos",filtroGuardas:"Guardaparques",filtroDisp:"Con disponibilidad",filtroAcum:"Acumulativa",filtroOng:"ONG-Invest-Volunt",filtroSinRes:"Sin resolución",vistaTabla:"Tabla",vistaTarjetas:"Tarjetas",vistaAria:"Vista",sinResultadosTitulo:"Sin resultados",sinResultadosDesc:"Ajuste la búsqueda o los filtros para encontrar funcionarios.",th:{funcionario:"Funcionario",cargo:"Cargo / puesto operativo",jornada:"Jornada",disponibilidad:"Disponibilidad",atributos:"Atributos",estado:"Estado",acciones:"Acciones"},sinPuesto:"Sin puesto operativo",sinResolucion:"🔵 Sin resolución",si:"Sí",no:"No",leyendaPolicia:"🛡️ Autoridad de policía",leyendaBrigada:"🔥 Brigada forestal",leyendaPendiente:"🔵 Dato operativo por completar",eliminado:"Se eliminó a {nombre}",restaurado:"Se restauró a {nombre}",creado:"Se agregó a {nombre}",guardado:"Se guardaron los cambios de {nombre}",ordenar:"Ordenar",filtrosAria:"Filtrar funcionarios",exportar:"Exportar CSV",exportarCorto:"CSV",exportarAria:"Exportar a CSV los funcionarios que se están viendo",exportado:"Se exportaron {n} funcionarios a CSV",exportadoVacio:"No hay funcionarios que exportar con este filtro",exportarError:"El navegador no permitió la descarga",importar:"Importar CSV",importarCorto:"Importar",importarAria:"Importar funcionarios desde un archivo CSV",importa:{titulo:"Revisar antes de importar",sub:"Nada se ha guardado todavía. Así quedaría la lista:",altas:"Se agregan",cambios:"Se actualizan",intactos:"No se tocan",omitidas:"Filas omitidas por no traer nombre ni cédula: {n}",vacias:"Filas en blanco ignoradas: {n}",duplicadas:"Identidades repetidas dentro del archivo: {n}. Manda la última fila de cada una.",faltantes:"Columnas que no venían en el archivo: {cols}. Esos datos se conservan como estaban.",desconocidas:"Columnas del archivo que se ignoran: {cols}",avisosTitulo:"Advertencias sobre los datos importados:",avisosNota:"No impiden importar; quedan registradas igual que al escribirlas a mano.",respaldo:"Antes de aplicar se descargará un respaldo completo. Si algo sale mal, se restaura desde «Datos · respaldo».",confirmar:"Crear respaldo e importar",sinIdentificar:"El archivo no trae ni «Nombre» ni «Cédula», así que no hay forma de saber a quién corresponde cada fila.",sinFilas:"El archivo no tiene ninguna fila de datos.",demasiadoGrande:"El archivo supera los {mb} MB y no se procesó.",errorLectura:"No se pudo leer el archivo.",hecho:"Importados: {altas} nuevos y {cambios} actualizados",respaldoFallo:"No se pudo descargar el respaldo, así que no se importó nada."},col:{nombre:"Nombre",cedula:"Cédula",email:"Correo",puesto:"Cargo institucional",puestoOperativo:"Puesto operativo",condicion:"Condición",jornada:"Jornada",modalidad:"Modalidad",resolucion:"Resolución",contrato:"Contrato de disponibilidad",vencimiento:"Vencimiento",ingreso:"Ingreso",disponibilidad:"Disponibilidad",policia:"Autoridad de policía",brigada:"Brigada forestal",ong:"ONG-Invest-Volunt",estado:"Estado",obs:"Observaciones"},procesando:"Procesando…",procesandoCorto:"…",procesandoAria:"Procesando el archivo, espere un momento",atributoPolicia:"Policía",atributoBrigada:"Brigada",card:{observaciones:"Observaciones",cargo:"Cargo",jornada:"Jornada",disponibilidad:"Disponibilidad",atributos:"Atributos",venceCorto:"Vence {fecha}"},verFicha:"Ver ficha",verFichaDe:"Ver la ficha de {nombre}"},ficha:{titulo:"Ficha de {nombre}",volver:"Volver a Funcionarios",noExiste:"No se encontró a esa persona",noExisteDesc:"El enlace apunta a «{nombre}», que ya no está en la lista de funcionarios. Puede que se eliminara o que el nombre cambiara.",editar:"Editar ficha",verRoles:"Ver en Roles",datos:{titulo:"Datos básicos",cedula:"Cédula",email:"Correo",cargo:"Cargo",puestoOperativo:"Puesto operativo",condicion:"Condición",jornada:"Jornada",modalidad:"Modalidad",resolucion:"Resolución",jefatura:"Jefatura",ingreso:"Ingreso",estado:"Estado",disponibilidad:"Disponibilidad",contrato:"Contrato",vencimiento:"Vence",observaciones:"Observaciones",sinDato:"—"},banco:{titulo:"Banco de tiempo",ayuda:"Tiempo trabajado fuera de rol que la administración debe reponer. El saldo sale del mismo cálculo que la vista de Reposición.",saldo:"Saldo a favor",sinSaldo:"Sin tiempo pendiente de reponer",sinRegistros:"Sin registros de tiempo trabajado fuera de rol",sinRegistrosDesc:"Cuando se registre un llamado a trabajar en día libre, feriado o fuera de turno, aparecerá aquí.",registros:"{n} registro(s)",pendientes:"{n} pendiente(s)",repuestos:"{n} repuesto(s)",verDetalle:"Ver en Reposición",thFolio:"Folio",thFecha:"Fecha",thTipo:"Tipo de día",thMotivo:"Motivo",thTrabajado:"Trabajado",thRepuesto:"Repuesto",thSaldo:"Saldo",thEstado:"Estado",horas:"{n} h"},roles:{titulo:"Rol del mes",ayuda:"Días de {mes}. El código de cada día es el mismo que muestra la cuadrícula de Roles.",sinMarcar:"{n} día(s) sin marcar",activos:"{n} día(s) de trabajo",presenciales:"{n} presencial(es)",dias:"{n} día(s)",hoy:"Hoy: {etiqueta}"},actividades:{titulo:"Actividades programadas",proximas:"Próximas",pasadas:"Pasadas",todas:"Todas",filtro:"Filtrar actividades por fecha",sinResultados:"Sin actividades en este filtro",sinResultadosDesc:"Cambie el filtro para ver el resto del historial de la persona.",sinNinguna:"Sin actividades asignadas",sinNingunaDesc:"Esta persona no aparece en ninguna actividad del plan.",enCurso:"En curso",teletrabajo:"Teletrabajo",teletrabajoParcial:"Teletrabajo {n} de {total} días",rango:"{inicio} a {fin}",verEnDia:"Ver el día {fecha}",acompanantes:"Con {n} persona(s) más"},alertas:{titulo:"Alertas de la persona",sinAlertas:"Sin alertas para esta persona",sinAlertasDesc:"No hay vencimientos, incompatibilidades ni tiempo sin reponer a su nombre.",verTodas:"Ver todas las alertas"}},modalFuncionario:{editar:"Editar funcionario",agregar:"Agregar funcionario",sec:{identificacion:"Identificación",puesto:"Puesto y condición",jornada:"Jornada y modalidad",contratacion:"Contratación y fechas",atributos:"Atributos"},revisar:{titulo:"Antes de guardar, revise:",nota:"Son advertencias, no errores: puede guardar igual y completar el dato después."},pasos:{navAria:"Pasos del formulario",indicador:"Paso {n} de {total}",irA:"Ir al paso {n}: {titulo}",uno:"Quién es",dos:"Dónde y cómo trabaja",tres:"Respaldo y atributos",soloNombre:"Solo el nombre es obligatorio: puede guardar desde cualquier paso y completar el resto después."},ayuda:{puesto:"«Cargo institucional» es el puesto nominal; «Puesto operativo» es el sitio donde trabaja, y de él depende la cobertura diaria de atención de visitantes. La condición ONG-Invest-Volunt es personal de apoyo externo con régimen especial: no requiere resolución de jornada acumulativa y puede tener convenio en lugar de contrato.",jornada:"Ordinaria es horario administrativo de lunes a viernes. Acumulativa trabaja por ciclos y requiere número de resolución, salvo en personal ONG-Invest-Volunt. La modalidad NxM indica N días de trabajo por M días libres: 10x5 son 10 días de turno seguidos de 5 libres. Al editar una fila en Roles, la herramienta renumera los consecutivos T y L respetando esta modalidad.",contratacion:"La resolución es el número que respalda la jornada acumulativa; si falta, el funcionario queda marcado como «Sin resolución» y solo se registra el dato pendiente. El contrato y su vencimiento corresponden a la disponibilidad: la herramienta avisa cuando faltan 60 días o menos, el día del vencimiento y cuando ya venció.",atributos:"Disponibilidad es el contrato administrativo que habilita a llamar al funcionario fuera de su horario regular. Policía indica autoridad de policía y Brigada, pertenencia a la brigada forestal. Recuerde la regla dura: la herramienta registra y alerta, no genera pagos, reposiciones ni derechos automáticos."},nombre:"Nombre",cedula:"Cédula",correo:"Correo",cargo:"Cargo institucional",puesto:"Puesto operativo",condicion:"Condición",estado:"Estado",jornada:"Jornada",modalidad:"Modalidad",resolucion:"Resolución",contrato:"Contrato",vencimiento:"Vencimiento",ingreso:"Ingreso",obs:"Observaciones",attr:{disponibilidad:"Disponibilidad",policia:"Autoridad policía",brigada:"Brigada",ong:"ONG-Invest-Volunt"}},modalActividad:{titulo:"Actividad",editar:"Editar actividad",agregar:"Agregar actividad",sub:"Registre actividad, periodo, lugar, funcionarios participantes y necesidad de adelanto de viático.",fechaInicio:"Fecha inicio",fechaFinal:"Fecha final",unDia:"Actividad de un solo día",requiereViatico:"Requiere tramitar adelanto de viático",lugar:"Lugar",placeholderTitulo:"O escriba otra actividad: patrullaje, inspección, reunión, mantenimiento...",placeholderLugar:"Escriba otro lugar: sector, sendero, oficina, comunidad...",placeholderObs:"Detalle operativo, coordinación, expediente, requerimientos, vehículo, equipo, etc.",otra:"Otra actividad",otro:"Otro",participantes:"Funcionarios participantes",seleccionados:"{n} seleccionados",avisoTraslape:"Funcionario con actividad ya planificada",agregarAunAsi:"Agregar de todos modos",modificarActividad:"Modificar actividad",obs:"Observaciones",guardarActividad:"Guardar actividad",diaLibre:"Día libre/vacaciones",saldoFavor:"Saldo a favor",saldoFavorMonto:"Saldo a favor: {saldo}",soloSaldo:"Solo con saldo a favor",libresAsignados:"Asignados en día libre/vacaciones",resolver:"Resolver"},asignacionLibre:{titulo:"Funcionario fuera de turno",sub:"{funcionario} figura como “{rol}” el {fecha}. ¿Cómo desea proceder?",modificarRol:"Modificar rol",modificarRolDesc:"Marcar ese día como turno (T) en el rol y agregarlo a la actividad.",reposicion:"Registrar reposición pendiente",reposicionDesc:"Deja el rol igual y registra el tiempo trabajado para reponérselo después.",reponer:"Reponer tiempo (saldo a favor: {saldo})",reponerDesc:"Usa este día libre para reponer su saldo pendiente. No se agrega a la actividad.",editarFecha:"Editar la fecha de la actividad",editarFechaDesc:"No lo agrega; vuelve al formulario para cambiar la fecha de la actividad."},roles:{col:{puesto:"Puesto operativo",funcionario:"Funcionario",diasTrabajo:"Días de trabajo",sinMarcar:"Días sin marcar"},exportar:"Exportar CSV",exportarAria:"Exportar a CSV el rol del mes que se está viendo",exportarResumen:"Exportar resumen",exportarResumenAria:"Exportar a CSV el resumen de días por categoría",exportado:"Se exportaron {n} funcionario(s)",exportadoVacio:"No hay funcionarios que exportar con los filtros actuales",exportarError:"No se pudo generar el archivo",verFicha:"Ver ficha",titulo:"Distribución de roles",vistaMensualLineal:"Vista mensual lineal",filtros:"Filtros",verTodos:"Ver todos",limpiarFiltros:"Limpiar",todos:"Todos",filtrarPorPuesto:"Filtrar por puesto",filtrosFuncionario:"Filtrar por funcionario",resumenPuestosTodos:"Puestos y funcionarios: todos ({n})",resumenPuestosParcial:"Puestos y funcionarios: {n} de {total}",buscarFuncionario:"Buscar funcionario…",limpiarBusqueda:"Limpiar búsqueda",solo:"Solo",contraerPuesto:"Contraer lista de funcionarios",expandirPuesto:"Expandir lista de funcionarios",sinResultadosBusqueda:"Sin coincidencias con la búsqueda.",resumenFiltro:"{n} funcionarios visibles",desplazarDias:"Desplazar días",semanaAnterior:"Semana anterior",semanaSiguiente:"Semana siguiente",semana7:"7 días",centrarHoy:"Centrar hoy",irAFecha:"Ir a fecha",irAFechaLabel:"Buscar por fecha",todosLosPuestos:"Todos los puestos",sinFuncionariosFiltro:"No hay funcionarios visibles con el filtro actual.",leyenda:{turno:"T1 Turno",libre:"L1 Libre",vacaciones:"V1 Vacas",incapacidad:"I1 Incapaci",otro:"O1 Otro",teletrabajo:"E1 Teletrab"},cantidadEnTurno:"EN TURNO",resumenGeneral:"Resumen · todos los puestos",resumenCorto:"Resumen",resumenEnTurno:"En turno",resumenLibres:"Libres",resumenVacaciones:"Vacaciones",resumenIncapacidad:"Incapacidad",resumenOtros:"Otros",editarTipoRol:"Tipo de rol desde 1er día laboral",aplicar:"Aplicar",aplicarPatronAbrir:"Aplicar…",titleConflicto:"Clic para resolver: rol vs actividad planificada",titleEditar:"Cambiar marca del día",titleSinEdicion:"Active edición del funcionario para modificar",initRing:"INICIO",multi:{activar:"Selección múltiple",seleccionados:"{n} día(s) seleccionado(s)",confirmarTitulo:"Aplicar código a varios días",confirmarDesc:"Se aplicará {cat} a {n} selección(es) y se renumerarán las filas afectadas.",nota:"Revise la cantidad antes de confirmar. Puede deshacer el último cambio mientras permanezca en esta vista.",deshacer:"Deshacer último cambio"},aplicarPatron:{titulo:"Aplicar patrón de rol",descripcion:"Genera el tipo de día (turno/libre) de {persona} según la modalidad, desde una fecha inicial hasta un último día. El rango puede abarcar varios meses.",modalidad:"Modalidad",desde:"A partir de",hasta:"Último día",hastaAyuda:"Se llenará hasta esta fecha, inclusive.",botonUltimoProgramado:"Desde el último día con rol programado",botonUltimoProgramadoAyuda:"Coloca «A partir de» el día siguiente al último día ya programado, para continuar sin sobrescribir.",sinProgramado:"Aún no hay días con rol programado para esta persona.",fase:"¿Cómo debe empezar la rotación?",faseReiniciar:"Reiniciar en T1",faseReiniciarAyuda:"La fecha «A partir de» se vuelve el nuevo inicio: ese día es T1 y la rotación avanza desde ahí. Sobrescribe lo que haya en el rango.",faseContinuar:"Continuar la rotación anterior",faseContinuarAyuda:"No reinicia: sigue la rotación del día anterior. Si venía en {codigoPrevio}, ese día continúa en {codigoSiguiente}.",faseContinuarSinAncla:"Para continuar, el día anterior a «A partir de» debe tener un turno o libre. Hoy no lo tiene; use «Reiniciar en T1».",faseAdministrativo:"El horario administrativo se llena por día de la semana (L–V en turno, S/D libres); no usa rotación T/L.",resumen:"Se llenarán {dias} día(s), del {desde} al {hasta}.",sobrescribe:"Se sobrescribirán {n} día(s) que ya tenían rol programado en el rango.",errorRango:"«A partir de» debe ser igual o anterior a «Último día».",errorMaxDias:"El rango es muy largo (máx. {max} días). Acórtelo e intente de nuevo.",errorSinFechas:"Elija la fecha inicial y el último día.",confirmar:"Aplicar patrón",cancelar:"Cancelar"}},menuCelda:{titulo:"Editar día {dia} · {persona}",sub:"Seleccione únicamente la categoría. El número consecutivo se recalcula automáticamente en toda la fila.",primerDia:"Primer día laboral del mes.",primerDiaSub:"La modalidad del funcionario define el reinicio de los consecutivos de turno y libre.",cat:{T:"Turno",L:"Libre",V:"Vacaciones",I:"Incapacidad",O:"Otro",E:"Teletrabajo"},sub2:"Se mostrará como {cat}1, {cat}2...",limpiar:"Limpiar celda"},conflicto:{titulo1:"Resolver incoherencia · paso 1 de 2",titulo2:"Confirmar acción · paso 2 de 2",sub1:"Seleccione cuál registro corregir. La herramienta solo actualiza el dato visible: no genera pagos ni decisiones administrativas.",sub2Rol:"Se modificará el rol de este día y se recalcularán los consecutivos T/L/V/I/O de toda la fila respetando la modalidad.",sub2Act:"Se abrirá el listado de {n} actividad{plural} de este día para que pueda quitar al funcionario o ajustar la planificación.",detalle:"{persona} · día {dia}",detalleSub:"Rol {valor} (no en turno) con {n} actividad{plural} planificada{plural}.",cambiarRol:"Modificar rol del día",cambiarRolSub:"Cambiar la categoría de turno para este funcionario.",cambiarActividad:"Modificar actividad{plural}",cambiarActividadSub:"Ver, editar o quitar al funcionario de las actividades del día.",cambiarReposicion:"Registrar reposición pendiente",cambiarReposicionSub:"Deja el rol y la actividad igual; registra el tiempo trabajado para reponérselo después.",reponer:"Reponer tiempo (saldo a favor: {saldo})",reponerSub:"Usa este día para reponer el saldo pendiente del funcionario.",sub2Reposicion:"Se registrará el tiempo trabajado fuera de rol como reposición pendiente; no modifica el rol ni la actividad.",sub2Reponer:"Se aplicará este día al saldo pendiente del funcionario (reposición); no modifica el rol ni la actividad.",despuesReposicion:"queda un registro de reposición pendiente, enlazado por folio al día trabajado.",despuesReponer:"se descuenta del saldo a favor del funcionario.",resumen:"Resumen del impacto",antes:"Antes:",despues:"Después:",antesValor:"rol {valor} · {n} actividad{plural}.",despuesRol:"elegirá una nueva categoría (T/L/V/I/O) y se renumerará toda la fila.",despuesAct:"podrá quitar al funcionario o editar/eliminar la actividad.",notaNoEjecuta:"La herramienta solo registra; no genera pago, reposición ni derecho automático.",volver:"Volver",continuar:"Continuar"},actividadesDia:{titulo:"Actividades · {funcionario}",sub:"{fecha} · {n} actividad{plural} planificada{plural}",vacia:"Ya no hay actividades de {funcionario} en este día.",quitarDe:"Quitar a {nombre}",editar:"Editar actividad",eliminar:"Eliminar"},modificarRol:{titulo:"Modificar rol",sub:"{funcionario} · {fecha} · rol actual: {rol}",cat:{T:"Turno",L:"Libre",V:"Vacaciones",I:"Incapacidad",O:"Otro",E:"Teletrabajo"},catSub:"Recalcula consecutivos de la fila",limpiar:"Limpiar rol del día"},asignarActividad:{titulo:"Asignar actividad",sub:"{funcionario} · {fecha}",crear:"Crear actividad nueva para este funcionario",agregar:"Agregar a actividad existente del mismo día",sinExistentes:"No hay actividades existentes ese día para otros funcionarios."},planificacion:{col:{titulo:"Actividad",categoria:"Categoría",inicio:"Inicio",fin:"Fin",horaInicio:"Hora de inicio",horaFin:"Hora de fin",lugar:"Lugar",funcionarios:"Funcionarios",otros:"Otros participantes",viatico:"Viático",observaciones:"Observaciones"},exportar:"Exportar CSV",exportarAria:"Exportar a CSV las actividades que se están viendo",exportado:"Se exportaron {n} actividad(es)",exportadoVacio:"No hay actividades que exportar con los filtros actuales",exportarError:"No se pudo generar el archivo",titulo:"Planificación general — {mes} {anio}",agregar:"+ Agregar actividad",vistaAgenda:"Agenda",vistaCuadricula:"Cuadrícula",vistaAria:"Modo de vista del calendario",agendaVacia:"Sin actividades",agregarEnDia:"Agregar actividad el día {dia}",verLeyenda:"Ver leyenda de colores",buscarPlaceholder:"Buscar actividad, lugar o persona",buscarAria:"Buscar en planificación",filtros:"Filtros",rangoAria:"Rango de días visible",rangoHoy:"Hoy",rangoProximos7:"Próximos 7 días",rangoActividades:"Con actividades",rangoConflictos:"Con conflictos",rangoSinAsignar:"Sin asignar",rangoMes:"Mes completo",irHoy:"Ir a Hoy",sinCoincidencias:"No hay días que coincidan con estos filtros.",editarActividad:"Editar actividad",filtrosTitulo:"Filtros de planificación",filtrosDesc:"Combina filtros para reducir la agenda.",filtroPersona:"Persona",filtroTodas:"Todas",filtroUbicacion:"Ubicación",filtroViatico:"Viático",viaticoTodos:"Todos",viaticoSi:"Con viático",viaticoNo:"Sin viático",limpiar:"Limpiar",verResultados:"Ver resultados",leyendaProgramada:"Actividad programada",leyendaViatico:"Requiere adelanto de viático",leyendaFinde:"Fin de semana",leyendaTurno:"👥 = en turno",sinFuncionarios:"Sin funcionarios",masFuncionarios:"+{n}",titleDetalleDia:"Ver detalle del día",titleTurno:"{n} funcionarios en turno",titleActs:"{n} actividades",actsBadge:"{n} act.",viaticoTag:"VIÁTICO",rolBadge:"⚠ ROL: {nombres}"},planFuncionario:{titulo:"Planificación/Funcionario — {mes} {anio}",expandir:"Expandir",colapsar:"Colapsar",leyendaTurnoAct:"Turno con actividad",leyendaFaltaAct:"Falta asignar actividad",leyendaConflicto:"Actividad no coincide con rol",diasVisibles:"{n} días visibles",actividades:"{n} actividades",sinAsignar:"{n} sin asignar",conflictos:"{n} conflictos",ocultar:"Ocultar",ver:"Ver",faltaAsignar:"Falta asignar actividad",sinLugar:"Sin lugar",noCoincideRol:"NO COINCIDE CON ROL",modificarActividad:"Modificar actividad",modificarRol:"Modificar rol",asignar:"Asignar",nueva:"Nueva"},viaticos:{titulo:"Adelanto de viáticos — actividades de {nombreMes}",porFuncionario:"Por funcionario",porActividad:"Por actividad",plazoAbierto:"Plazo abierto.",plazoAbiertoSub:"Este listado corresponde al mes siguiente y puede usarse para tramitar adelantos hasta el día {dia} del mes anterior.",plazoCerrado:"Clausurado el tiempo de trámite de adelantos del próximo mes.",plazoCerradoSub:"El listado queda disponible para consulta, pero el plazo ordinario de trámite venció el día {dia} del mes anterior.",pie:"Mes a tramitar: {nombreMes}. Corte administrativo: día {dia} del mes {referencia}.",referenciaAnterior:"anterior",referenciaEnCurso:"en curso",sinActividadesTitulo:"Sin actividades con viático para el próximo mes",sinActividadesDesc:"Aún no hay actividades de {nombreMes} marcadas como “requiere tramitar adelanto de viático”. Vaya a Planificación general o Plan/Funcionario para asignarlas.",ocultoTitulo:"Listado oculto tras el cierre",ocultoDesc:"Según la configuración administrativa, el listado se oculta cuando el plazo (día {dia}) ya venció. Puede reactivar la consulta en Configuración → Viáticos.",nFuncionarios:"{n} funcionarios"},reposicion:{col:{folio:"Folio",funcionario:"Funcionario",fecha:"Fecha trabajada",tipoDia:"Tipo de día",motivo:"Motivo",detalle:"Detalle del motivo",trabajado:"Horas trabajadas",repuesto:"Horas repuestas",saldo:"Saldo (horas)",estado:"Estado",cuotas:"Reposiciones aplicadas",observaciones:"Observaciones"},exportar:"Exportar CSV",exportarAria:"Exportar a CSV los registros de reposición que se están viendo",exportado:"Se exportaron {n} registro(s)",exportadoVacio:"No hay registros que exportar con los filtros actuales",exportarError:"No se pudo generar el archivo",titulo:"Reposición de tiempo trabajado",subtitulo:"Registro de jornadas que la administración requirió trabajar a un funcionario en día libre, fuera de turno, feriado o similar (emergencias, incendios, atención de denuncias, actividades especiales, etc.) para llevar el control y reponerle el tiempo. Puede ser por horas, medio día o día entero.",acercaDe:"Acerca de esta herramienta",controlInterno:"Control interno",agregar:"Registrar tiempo",agregarCorto:"Registrar",filtroTodos:"Todos",filtroPendientes:"Pendientes",filtroRepuestos:"Repuestos",horasN:"{n} h",tabsAria:"Vistas de reposición",tabRegistros:"Registros",tabHistorial:"Historial por funcionario",reponer:"Reponer",saldoCorto:"Saldo pendiente",ultimaReposicion:"Última reposición",masAcciones:"Más acciones del registro",buscar:"Buscar por funcionario, folio, motivo u observación",filtros:"Filtros",filtrosAvanzados:"Filtros de reposición",limpiarFiltros:"Limpiar filtros",todosFuncionarios:"Todos los funcionarios",todosTipos:"Todos los tipos",periodo:"Periodo",soloObservaciones:"Solo registros con observaciones",saldoLabel:"Saldo: {saldo}",estado:{Pendiente:"Pendiente",Parcial:"Parcial",Repuesto:"Repuesto"},resumen:{total:"Registros",pendientes:"Pendientes de reponer",repuestos:"Repuestos",saldo:"Saldo a favor: {saldo}",parciales:"{n} parcial(es)",desglose:"{dias} día(s) · {medios} medio(s) día(s) · {horas} h"},th:{folio:"Folio",funcionario:"Funcionario",fecha:"Fecha trabajada",tipoDia:"Tipo de día",motivo:"Motivo",tiempo:"Tiempo",estado:"Estado",acciones:"Acciones"},magnitudCorta:{diaEntero:"día completo",medioDia:"medio día"},marca:{trabajadaTitulo:"{folio} · Trabajó día {tipoDia} ({magnitud}) · {estado}",reposicionTitulo:"{folio} · Día de reposición del tiempo trabajado el {fecha}",reposicionDe:"reposición del {fecha}"},historial:{vacioTitulo:"Sin historial",vacioDesc:"Aún no hay registros de reposición para mostrar por funcionario.",veces:"{n} registro(s)",pendientesN:"{n} pendiente(s)",repuestosN:"{n} repuesto(s)",saldoFavor:"Saldo a favor: {saldo}",cuota:"Reposición aplicada: {fecha} · {cantidad}"},marcarRepuesto:"Marcar repuesto",reabrir:"Reabrir",repuestoEl:"Repuesto el {fecha}",sinRegistrosTitulo:"Sin registros de reposición",sinRegistrosDesc:"Use “Registrar tiempo” para anotar una jornada trabajada en día libre, feriado o fuera de turno que deba reponerse al funcionario.",sinResultadosTitulo:"Sin resultados",sinResultadosDesc:"Ajuste el filtro para ver los registros de reposición.",nota:"La herramienta solo registra y lleva el control; la reposición efectiva del tiempo la autoriza la administración según la normativa vigente.",eliminado:"Se eliminó el registro {folio}",restaurado:"Se restauró el registro {folio}"},modalReposicion:{editar:"Editar registro de reposición",agregar:"Registrar tiempo a reponer",sub:"Documente la jornada trabajada por requerimiento de la administración para llevar el control y reponer el tiempo.",funcionario:"Funcionario",seleccioneFuncionario:"Seleccione un funcionario…",otrosFuncionarios:"Otros",fecha:"Fecha trabajada",tipoDia:"Tipo de día",motivo:"Motivo",motivoDetalle:"Detalle del motivo",motivoDetallePlaceholder:"Expediente, sector, descripción breve de la situación…",magnitud:"Tiempo trabajado",magnitudDiaEntero:"Día entero",magnitudMedioDia:"Medio día",magnitudHoras:"Por horas",estadoPendiente:"Pendiente",estadoRepuesto:"Repuesto",reposiciones:"Reposiciones registradas",sinCuotas:"Sin reposiciones registradas. Use “Reponer” en la lista para registrar tiempo (total, medio día u horas).",cuotasNota:"Las reposiciones se registran desde la acción “Reponer” de cada registro; aquí solo se consultan o se corrigen.",obs:"Observaciones",obsPlaceholder:"Coordinación con la administración, acuerdos, equipo, vehículo, etc.",guardar:"Guardar registro"},reponer:{titulo:"Reponer tiempo",saldoActual:"Saldo actual",saldoDespues:"Saldo después",cuanto:"¿Cuánto se repone?",fecha:"Fecha de reposición",excede:"La cantidad supera el saldo pendiente; se registrará hasta saldar el tiempo.",registrar:"Registrar reposición"},disponibilidad:{activosTitulo:"Contratos activos — disponibilidad",sinActivosTitulo:"Sin disponibilidad asignada",sinContrato:"Sin contrato",nDias:"{n} días",controlNota:"Control: la herramienta alerta; no ejecuta suspensiones automáticamente."},alertas:{requiereAtencion:"Requiere atención · {n}",sinCriticas:"Sin alertas críticas",sinCriticasSub:"No se observan vencimientos o bloqueos críticos en los datos visibles.",titulo:"Alertas del sistema ({n})",requiereRevision:"Requiere revisión",semaforoTitulo:"Semáforo normativo",semaforo:{verde:"Verificado",amarillo:"Confirmación interna",naranja:"Criterio RH/Jurídico",rojo:"No automatizar",azul:"Dato pendiente"},venceHoy:"Disponibilidad vence HOY — {nombre}",vencida:"Disponibilidad vencida — {nombre}",porVencer:"Disponibilidad por vencer — {nombre}",sinResolucion:"Sin resolución acumulativa — {nombre}",sinModalidad:"Acumulativa sin modalidad definida — {nombre}",incapaConDisp:"Revisar disponibilidad — {nombre}",incapaConActividad:"Incapacitado con actividad planificada — {nombre}",inactivoConActividad:"Inactivo con actividad planificada — {nombre}",reposicionPendiente:"Tiempo por reponer — {nombre}"},datos:{titulo:"Datos · respaldo local",esquema:"Esquema v{n}",estadoOk:"Última copia local guardada el {fecha}",estadoPendiente:"{n} cambio{plural} pendiente{plural} de guardar (debounce 500 ms)",estadoVacio:"Sin copia local todavía: los cambios se guardarán automáticamente al editar.",estadoNota:"La copia vive en el navegador (localStorage). Sirve como respaldo entre sesiones; no sustituye al backend institucional.",funcionarios:"Funcionarios",actividadesPlanificadas:"Actividades planificadas",reposiciones:"Reposiciones de tiempo",celdasOverride:"Celdas de rol con override",exportar:"Exportar JSON",importar:"Importar JSON…",reiniciar:"Reiniciar datos semilla",archivoAria:"Archivo JSON a importar",importadoTitulo:"Snapshot importado",importadoDesc:"Archivo: {archivo}{exportadoEn}",importadoExtra:" · exportado {fecha}",importRechazado:"Importación rechazada",reiniciarTitulo:"Reiniciar a datos semilla",reiniciarSub:"Se descartará la copia local y la app volverá a los datos de ejemplo. Esta acción no se puede deshacer a menos que hayas exportado primero un JSON de respaldo.",reiniciarRec:"Recomendación: pulse Exportar JSON antes de reiniciar.",noDeshacer:"Esta acción no se puede deshacer. Pulse «{accion}» para confirmar.",confirmarReiniciar:"Reiniciar",porQueTitulo:"¿Por qué hay copia local?",porQue:["El navegador guarda automáticamente cada cambio con un retraso de 500 ms para evitar perder información al recargar la página o cerrar el navegador.","La copia permanece en este dispositivo y NO sustituye un backend institucional. Exporte respaldos periódicos para trasladar o proteger la información.","El esquema lleva versión (`v{n}`); si el formato cambia en una nueva versión de la app, se crea un backup automático antes de aplicar la migración.","Exporte un JSON periódicamente como seguro adicional, especialmente antes de cambios mayores o cuando termine la jornada en campo."],backendTitulo:"Almacenamiento durable",backendIDB:"IndexedDB (Dexie) · capacidad amplia, almacenamiento asíncrono",backendLS:"localStorage · respaldo síncrono (~5 MB)",backendNone:"Sin almacenamiento (modo privado estricto)",backendBadgeIDB:"IndexedDB ✓",backendBadgeLS:"localStorage",backendBadgeNone:"Sin durable",migradoLS:"Sus datos previos en localStorage se migraron a IndexedDB automáticamente.",pendientesTitulo:"Estado local",pendientesSub:"No existe sincronización con un servidor remoto.",pendientesCero:"Datos guardados únicamente en este dispositivo.",pendientesN:"{n} cambios locales pendientes de guardar."},configuracion:{aparienciaTitulo:"Apariencia",aparienciaSub:"El tema (claro / oscuro / alto contraste) se aplica a toda la aplicación.",titulo:"Configuración · reglas administrativas",cambiosPendientes:"Cambios pendientes",badgeSucia:"Cambios sin aplicar",badgeOk:"Guardado localmente",reglaDuraIntro:"Regla dura: la herramienta registra y alerta; cambiar una regla no genera pagos, suspensiones ni derechos automáticos. Cualquier ajuste debe estar respaldado por la coordinación administrativa.",coberturaTitulo:"Cobertura · puestos con atención rutinaria diaria",coberturaSub:'Si un día un puesto seleccionado no tiene a nadie asignado a "Atención rutinaria de visitantes", se marca como cobertura crítica (rojo) en la vista Día.',viaticosTitulo:"Viáticos · corte administrativo",diaCorte:"Día de corte (1–28)",mesObjetivo:"Mes objetivo",permitirConsulta:"Permitir consulta tras cierre",permitirConsultaSub:'Si "Permitir consulta tras cierre" está desactivado, después del día de corte la vista de viáticos se oculta. Por defecto se mantiene visible (con banner rojo).',feriadosTitulo:"Feriados · cálculo del primer día laboral",feriadosCheckTitle:"Excluir feriados oficiales al determinar el primer día laboral del mes.",feriadosCheckSub:"Si el 1er día hábil L–V cae en feriado, la rotación T/L se inicia el siguiente día laboral real. Aplica a partir del mes siguiente para no alterar registros ya guardados.",feriadosVer:"Ver feriados cargados ({n} año{plural})",alertasTitulo:"Alertas adicionales (Fase 6)",alertaInactivo:"Persona inactiva con actividad futura",alertaIncapacitado:"Incapacitado con actividad futura",alertaSinModalidad:"Acumulativa sin modalidad",alertaReposicion:"Tiempo trabajado pendiente de reponer",alertasNota:"Cada checkbox controla si se evalúa esa familia de alertas. Si se detectan falsos positivos, puede desactivarse temporalmente sin tocar código.",reposicionTitulo:"Reposición · duración de jornada",horasJornada:"Horas por jornada",horasJornadaSub:"Define cuántas horas equivalen a un día completo (medio día = la mitad). Se usa para calcular el saldo de reposición cuando se repone en partes.",advertenciasTitulo:"Advertencias antes de aplicar:",restaurarPredet:"Restaurar valores predeterminados",restaurarConfirm:"¿Restaurar todas las reglas a sus valores predeterminados? Las alertas y cobertura volverán al estado inicial.",descartar:"Descartar",aplicar:"Aplicar cambios…",confirmarAplicar:"Confirmar y aplicar"},acciones:{aceptar:"Aceptar",cancelar:"Cancelar",cerrar:"Cerrar",guardar:"Guardar",eliminar:"Eliminar",agregar:"Agregar",editar:"Editar",confirmar:"Confirmar",restaurar:"Restaurar",exportar:"Exportar JSON",importar:"Importar JSON…",reiniciar:"Reiniciar datos semilla",aplicarCambios:"Aplicar cambios…",actualizarAhora:"Actualizar ahora",verLuego:"Ver luego",instalar:"Instalar",ahoraNo:"Ahora no",deshacer:"Deshacer",atras:"Atrás",siguiente:"Siguiente"},toast:{regionAria:"Avisos de la aplicación",puedeDeshacer:"Puede deshacerlo mientras este aviso siga visible."},puestos:{titulo:"Puestos operativos",sub:"Los centros operativos del parque. De aquí salen las opciones de las fichas, el agrupado de la vista Roles y la cobertura diaria de visitantes.",agregar:"Agregar puesto",editar:"Editar puesto",nombre:"Nombre del puesto",tag:"Código corto",tagAyuda:"Dos o tres letras. Es lo que se ve en la cuadrícula de Roles.",color:"Color en Roles",colorAria:"Elegir color del puesto",visitDiario:"Requiere atención de visitantes a diario",visitDiarioSub:"Si un día no hay nadie asignado a esa actividad en este puesto, la vista Día lo marca en rojo.",personas:"{n} funcionario(s)",sinPersonas:"Sin funcionarios",eliminar:"Eliminar puesto",eliminarConPersonas:"No se puede eliminar «{nombre}»: tiene {n} funcionario(s) asignado(s). Muévalos a otro puesto primero.",eliminarConfirma:"Se eliminará «{nombre}». No tiene funcionarios asignados, así que ninguna ficha queda huérfana.",eliminado:"Se eliminó el puesto «{nombre}»",restaurado:"Se restauró el puesto «{nombre}»",creado:"Se agregó el puesto «{nombre}»",guardado:"Se guardaron los cambios de «{nombre}»",renombrado:"«{antes}» pasa a llamarse «{despues}». Se actualizaron {n} ficha(s).",ultimoPuesto:"Debe quedar al menos un puesto operativo.",subir:"Subir «{nombre}»",bajar:"Bajar «{nombre}»",ordenSub:"El orden se refleja en la cuadrícula de Roles, en los desplegables de las fichas y en el resumen de la vista Día.",exportar:"Exportar CSV",exportarAria:"Exportar los puestos operativos a CSV",exportado:"Se exportaron {n} puestos a CSV",exportarError:"El navegador no permitió la descarga",importar:"Importar CSV",importarAria:"Importar puestos operativos desde un archivo CSV",col:{nombre:"Nombre del puesto",tag:"Código corto",color:"Color en Roles"},importa:{titulo:"Revisar antes de importar puestos",sub:"Nada se ha guardado todavía. Así quedaría la lista:",altas:"Se agregan",cambios:"Se actualizan",intactos:"No se tocan",noElimina:"La importación nunca elimina un puesto: si uno desapareciera, las fichas que lo usan quedarían apuntando a algo inexistente.",omitidasSinNombre:"Filas sin nombre, omitidas: {n}",omitidasSinCodigo:"Puestos nuevos omitidos por no traer código corto: {cols}. El código es obligatorio, igual que en el formulario.",renombresIgnorados:"Se conserva el nombre actual de estos puestos: {cols}. Cambiar el nombre desde un archivo dejaría las fichas de los funcionarios apuntando a un puesto que ya no existe; hágalo desde el botón de editar, que sí arrastra las fichas y las reglas.",omitidasCodigo:"Filas omitidas porque su código ya lo usa otro puesto: {cols}",vacias:"Filas en blanco ignoradas: {n}",duplicadas:"Nombres repetidos dentro del archivo: {n}. Manda la última fila de cada uno.",faltantes:"Columnas que no venían en el archivo: {cols}. Esos datos se conservan como estaban.",desconocidas:"Columnas del archivo que se ignoran: {cols}",respaldo:"Antes de aplicar se descargará un respaldo completo. Si algo sale mal, se restaura desde «Datos · respaldo».",confirmar:"Crear respaldo e importar",sinNombre:"El archivo no trae la columna «Nombre del puesto», así que no hay forma de saber a qué puesto corresponde cada fila.",sinFilas:"El archivo no tiene ninguna fila de datos.",demasiadoGrande:"El archivo supera los {mb} MB y no se procesó.",errorLectura:"No se pudo leer el archivo.",hecho:"Puestos importados: {altas} nuevos y {cambios} actualizados",respaldoFallo:"No se pudo descargar el respaldo, así que no se importó nada."}},historial:{titulo:"Historial de cambios",sub:"Últimos {n} movimientos sobre las fichas de funcionario. Se conservan los {max} más recientes.",vacio:"Todavía no hay cambios registrados.",filtro:"Filtrar por funcionario",todos:"Todos",sinResultados:"Sin movimientos de esta persona.",verMas:"Ver {n} más",tipo:{alta:"Alta",edicion:"Edición",baja:"Baja",restauracion:"Restauración",importacion:"Importación"},cambio:"{campo}: {antes} → {despues}",vacioCampo:"(vacío)",si:"Sí",no:"No",resumenImportacion:"{archivo} · {altas} altas, {cambios} actualizaciones",nota:"El historial viaja en el respaldo JSON, así que se conserva al exportar y restaurar."},ayuda:{mostrar:"¿Qué significa esto?",ocultar:"Ocultar ayuda"},actividad:{sinTitulo:"actividad sin título",eliminada:"Se eliminó «{titulo}»",restaurada:"Se restauró «{titulo}»",eliminadaDetalle:"Desaparece para todos los funcionarios asignados. Puede deshacerlo mientras este aviso siga visible."},estados:{activo:"Activo",inactivo:"Inactivo",vacaciones:"De vacaciones",incapacitado:"Incapacitado"},sync:{enLinea:"En línea",sinConexion:"Sin conexión",guardando:"Guardando…",guardado:"Guardado localmente {hora}",sinRespaldo:"Pendiente de primer guardado local",guardadoParcial:"Guardado temporal — respaldo durable falló ({hora})"},print:{imprimir:"Imprimir / Guardar PDF",imprimirCorto:"Imprimir",encabezadoMinisterio:"MINISTERIO DE AMBIENTE Y ENERGÍA",encabezadoSinac:"SISTEMA NACIONAL DE ÁREAS DE CONSERVACIÓN — SINAC",encabezadoAcc:"ÁREA DE CONSERVACIÓN CENTRAL · BLOQUE TAPANTÍ–MACIZO DE LA MUERTE",encabezadoUnidad:"Parque Nacional Los Quetzales (PNLQ)",documentoTitulo:"ROL MENSUAL DE TRABAJO",periodo:"Período: {mes} {anio}",puestoLabel:"Puesto operativo: {puesto}",leyendaTitulo:"Leyenda de códigos",leyendaT:"T = Turno",leyendaL:"L = Libre",leyendaV:"V = Vacaciones",leyendaI:"I = Incapacidad",leyendaO:"O = Otro",firma1:"Elaborado por",firma2:"Revisado por",firma3:"Aprobado por",firmaCargo1:"Administrador(a) de ASP",firmaCargo2:"Coordinación administrativa ACC",firmaCargo3:"Jefatura BTMM",lugarFecha:"Lugar y fecha: ____________________________________________",pieDocumento:"Documento generado por la herramienta PNLQ Gestión de Jornadas · v{version}",pieFecha:"Impreso: {fecha}",pieReglaDura:"La herramienta solo registra y alerta; no genera derechos automáticos. Firmas validan el documento."},pwa:{instalarTitulo:"Instalar PNLQ en este dispositivo",instalarSub:"Acceso sin internet · Pantalla completa · Sin navegador",instalarAria:"Instalar aplicación PNLQ",sinConexion:"Sin conexión — mostrando datos en caché",ultimaCarga:"Última carga local: {fecha}",nuevaVersion:"Nueva versión disponible",versionDesactualizada:"Versión desactualizada",versionActual:"Versión actual: v{actual}",versionDisponible:" · disponible: v{remoto}",urgente:" Actualice para evitar inconsistencias.",sugerido:" Actualice para ver los últimos cambios.",bannerAria:"Nueva versión de PNLQ disponible"}};function pd(r,o){return!r||!o||typeof r!="string"?r:r.replace(/\{(\w+)\}/g,(s,u)=>o[u]!==void 0?String(o[u]):s)}function h1(r){const o=String(r||"").split(".");let s=v1;for(const u of o)if(s&&Object.prototype.hasOwnProperty.call(s,u))s=s[u];else return r;return s===void 0?r:s}function Ie(r,o){const s=h1(r);return Array.isArray(s)?s.map(u=>pd(u,o)):pd(s,o)}function Td(r){return r===1?"":"s"}const Kd=C.createContext(null),g1=5e3,P1=1e4,y1=3,M1=["info","exito","aviso","error"];let Ld=0;function E1(){return Ld+=1,`toast-${Ld}`}function N1({children:r}){const[o,s]=C.useState([]),u=C.useRef(new Map),m=C.useRef(!1),f=C.useCallback(R=>{s(w=>w.filter(Y=>Y.id!==R))},[]),v=C.useCallback((R,w)=>{if(!Number.isFinite(w)||w<=0)return;const Y=u.current.get(R);Y!=null&&Y.timeoutId&&clearTimeout(Y.timeoutId);const ie={restanteMs:w,iniciadoEn:Date.now(),timeoutId:null};m.current||(ie.timeoutId=setTimeout(()=>f(R),w)),u.current.set(R,ie)},[f]),L=C.useCallback(R=>{const w=typeof R=="string"?{mensaje:R}:R||{},Y=typeof w.mensaje=="string"?w.mensaje.trim():"";if(!Y)return null;const ie=M1.includes(w.tipo)?w.tipo:"info",Z=w.accion&&typeof w.accion.onAccion=="function"?{etiqueta:w.accion.etiqueta||Ie("acciones.deshacer"),onAccion:w.accion.onAccion,cerrarAlActivar:w.accion.cerrarAlActivar!==!1}:null,fe=w.duracion===void 0?Z?P1:g1:w.duracion,le=E1();return s(ae=>{const he=[...ae,{id:le,mensaje:Y,detalle:w.detalle||"",tipo:ie,accion:Z,duracion:fe}],ue=he.length-y1;return ue>0?he.slice(ue):he}),v(le,fe),le},[v]),T=C.useCallback(()=>{if(m.current)return;m.current=!0;const R=Date.now();for(const w of u.current.values())w.timeoutId&&(clearTimeout(w.timeoutId),w.restanteMs=Math.max(0,w.restanteMs-(R-w.iniciadoEn)),w.timeoutId=null)},[]),V=C.useCallback(()=>{if(!m.current)return;m.current=!1;const R=Date.now();for(const[w,Y]of u.current)Y.timeoutId||(Y.iniciadoEn=R,Y.timeoutId=setTimeout(()=>f(w),Math.max(0,Y.restanteMs)))},[f]),y=C.useCallback(R=>{const w=o.find(Y=>Y.id===R);w!=null&&w.accion&&(w.accion.onAccion(),w.accion.cerrarAlActivar&&f(R))},[o,f]),M=C.useCallback((R,w)=>L({...w,mensaje:R,tipo:"exito"}),[L]),x=C.useCallback((R,w)=>L({...w,mensaje:R,tipo:"error"}),[L]),A=C.useCallback((R,w)=>L({...w,mensaje:R,tipo:"aviso"}),[L]),j=C.useCallback((R,w,Y)=>L({...Y,mensaje:R,tipo:(Y==null?void 0:Y.tipo)||"info",accion:{etiqueta:Ie("acciones.deshacer"),onAccion:w}}),[L]);C.useEffect(()=>{const R=new Set(o.map(w=>w.id));for(const[w,Y]of u.current)R.has(w)||(Y.timeoutId&&clearTimeout(Y.timeoutId),u.current.delete(w))},[o]),C.useEffect(()=>{const R=u.current;return()=>{for(const w of R.values())w.timeoutId&&clearTimeout(w.timeoutId);R.clear()}},[]);const J=C.useMemo(()=>({toasts:o,mostrar:L,cerrar:f,pausar:T,reanudar:V,activarAccion:y,exito:M,error:x,aviso:A,conDeshacer:j}),[o,L,f,T,V,y,M,x,A,j]);return c.jsx(Kd.Provider,{value:J,children:r})}function $d(){const r=C.useContext(Kd);if(!r)throw new Error("useToast() requiere que el árbol esté envuelto en <ToastProvider>.");return r}const C1=new Date(2026,4,19);function x1(r,o={}){const{actividadesPlan:s=[],reposiciones:u=[],hoy:m=C1,flags:f={}}=o,{alertaInactivoConActividad:v=!0,alertaIncapacitadoConActividad:L=!0,alertaAcumulativaSinModalidad:T=!0,alertaReposicionPendiente:V=!0,horasJornada:y=8}=f,M=[],x=S1(m);if(r.forEach(A=>{if(A.disponibilidad){const j=n1(A.vencimiento,m);j!==null&&j<0?M.push({funcionario:A.nombre,t:"danger",icon:"🚨",msg:`Disponibilidad vencida — ${A.nombre}`,sub:`${A.contrato} · venció ${tt(A.vencimiento)} (hace ${Math.abs(j)} día${Math.abs(j)!==1?"s":""}). Requiere revisión administrativa.`}):j!==null&&j===0?M.push({funcionario:A.nombre,t:"danger",icon:"🚨",msg:`Disponibilidad vence HOY — ${A.nombre}`,sub:`${A.contrato} · vencimiento ${tt(A.vencimiento)}. Coordinar renovación o suspensión administrativa.`}):j!==null&&j>0&&j<=60&&M.push({funcionario:A.nombre,t:"warn",icon:"⚠️",msg:`Disponibilidad por vencer — ${A.nombre}`,sub:`${A.contrato} · vence ${tt(A.vencimiento)} (en ${j} día${j!==1?"s":""}). Requiere revisión administrativa.`})}if(A.jornada==="Acumulativa"&&!A.resolucion&&!A.ong&&M.push({funcionario:A.nombre,t:"warn",icon:"📄",msg:`Sin resolución acumulativa — ${A.nombre}`,sub:"Dato pendiente: no automatizar efectos hasta confirmar respaldo interno."}),T&&A.jornada==="Acumulativa"&&!A.modalidad&&M.push({funcionario:A.nombre,t:"warn",icon:"📄",msg:`Acumulativa sin modalidad definida — ${A.nombre}`,sub:"Definir modalidad (10x5, 12x6, 14x7, 16x8, 20x10) para calcular roles correctamente."}),A.estado==="Incapacitado"&&A.disponibilidad&&M.push({funcionario:A.nombre,t:"danger",icon:"🩺",msg:`Revisar disponibilidad — ${A.nombre}`,sub:"Funcionario incapacitado con disponibilidad activa. Verificar criterio RH."}),L&&A.estado==="Incapacitado"){const j=vd(s,A.nombre,x);j.length&&M.push({funcionario:A.nombre,t:"danger",icon:"🩺",msg:`Incapacitado con actividad planificada — ${A.nombre}`,sub:`${j.length} actividad${j.length!==1?"es":""} a partir de ${tt(x)}. Coordinar reasignación.`})}if(v&&A.estado==="Inactivo"){const j=vd(s,A.nombre,x);j.length&&M.push({funcionario:A.nombre,t:"warn",icon:"⚠️",msg:`Inactivo con actividad planificada — ${A.nombre}`,sub:`${j.length} actividad${j.length!==1?"es":""} a partir de ${tt(x)}. Verificar si debe reactivarse o reasignarse.`})}}),V&&u.length)for(const A of ST(u,y))A.pendientes!==0&&M.push({funcionario:A.funcionario,t:"warn",icon:"⟳",msg:`Tiempo por reponer — ${A.funcionario}`,sub:`${A.pendientes} registro${A.pendientes!==1?"s":""} de trabajo fuera de rol sin reponer · saldo a favor ${PT(A.saldoHoras,y)}. Coordinar la reposición del tiempo.`});return M.length?M:[{t:"ok",icon:"✅",msg:"Sin alertas críticas",sub:"No se observan vencimientos o bloqueos críticos en los datos visibles."}]}function Wv(r=[],o){return o?r.filter(s=>(s==null?void 0:s.funcionario)===o):[]}function vd(r,o,s){return(r||[]).filter(u=>!u||!u.inicio||(u.fin||u.inicio)<s?!1:(u.funcionarios||[]).includes(o))}function S1(r){if(typeof r=="string")return r;const o=s=>String(s).padStart(2,"0");return`${r.getFullYear()}-${o(r.getMonth()+1)}-${o(r.getDate())}`}function Sn(){return C.useCallback((r,o)=>Ie(r,o),[])}const cr="1.34.1",wi="2026-09-12T03:28:20.765Z",ji="7d1e689",b1="/BTMM_JORNADAS/version.json";function qd(r=wi){try{const o=new Date(r),s=u=>String(u).padStart(2,"0");return`${s(o.getDate())}/${s(o.getMonth()+1)}/${o.getFullYear()} ${s(o.getHours())}:${s(o.getMinutes())}`}catch{return r}}/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Hd=(...r)=>r.filter((o,s,u)=>!!o&&o.trim()!==""&&u.indexOf(o)===s).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var A1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=C.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:s=2,absoluteStrokeWidth:u,className:m="",children:f,iconNode:v,...L},T)=>C.createElement("svg",{ref:T,...A1,width:o,height:o,stroke:r,strokeWidth:u?Number(s)*24/Number(o):s,className:Hd("lucide",m),...L},[...v.map(([V,y])=>C.createElement(V,y)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=(r,o)=>{const s=C.forwardRef(({className:u,...m},f)=>C.createElement(w1,{ref:f,iconNode:o,className:Hd(`lucide-${V1(r)}`,u),...m}));return s.displayName=`${r}`,s};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=ce("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=ce("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=ce("CalendarClock",[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M17.5 17.5 16 16.3V14",key:"akvzfd"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=ce("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=ce("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=ce("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=ce("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=ce("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=ce("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=ce("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=ce("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=ce("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=ce("Contrast",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z",key:"j4l70d"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=ce("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=ce("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=ce("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=ce("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=ce("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=ce("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=ce("LockOpen",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=ce("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=ce("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=ce("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=ce("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=ce("OctagonAlert",[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=ce("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=ce("Pin",[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=ce("PlugZap",[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m18 3-4 4h6l-4 4",key:"16psg9"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=ce("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=ce("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=ce("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=ce("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=ce("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=ce("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=ce("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=ce("Stethoscope",[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=ce("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=ce("TrafficCone",[["path",{d:"M9.3 6.2a4.55 4.55 0 0 0 5.4 0",key:"flyxqv"}],["path",{d:"M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3",key:"1nlxxg"}],["path",{d:"M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z",key:"vz7x1l"}],["path",{d:"m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8",key:"1xfzlw"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=ce("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=ce("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=ce("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=ce("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=ce("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=ce("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=ce("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),G1={"🏠":um,"👥":Nm,"📅":em,"📊":nm,"🗓️":Xd,"📋":sm,"💵":Wd,"🛡️":Pm,"🔔":Zd,"✕":xm,"⚠️":Hs,"⚠":Hs,"🚨":Tm,"✅":om,"🩺":ym,"📄":lm,"📍":fm,"🔥":cm,"🌲":Em,"⚖️":gm,"⟳":hm,"☰":pm,"▲":im,"▼":tm,"←":am,"→":rm,"+":vm,"🔒":mm,"🔓":dm,"📴":Cm,"📡":Lm,"🚦":Mm},K1={home:um,users:Nm,calendar:em,calendarDays:Xd,calendarClock:j1,clipboard:sm,chart:nm,banknote:Wd,shield:Pm,shieldAlert:Q1,bell:Zd,x:xm,alert:Hs,danger:Tm,check:om,info:D1,stethoscope:ym,file:lm,pin:fm,flame:cm,trees:Em,scale:gm,refresh:hm,menu:pm,chevronUp:im,chevronDown:tm,chevronLeft:am,chevronRight:rm,plus:vm,pencil:O1,trash:U1,lock:mm,unlock:dm,eye:R1,eyeOff:_1,sun:B1,moon:I1,contrast:k1,traffic:Mm,wifi:Y1,wifiOff:Cm,phone:J1,search:z1,pinMap:F1,plugZap:Lm};function He({name:r,size:o=18,label:s,className:u="",strokeWidth:m=2}){const f=typeof r=="string"?G1[r]??K1[r]:null;if(!f)return c.jsx("span",{"aria-hidden":s?void 0:!0,"aria-label":s,className:u,children:r});const v=s?{role:"img","aria-label":s}:{"aria-hidden":!0,focusable:"false"};return c.jsx(f,{width:o,height:o,strokeWidth:m,className:u,...v})}function $1({view:r,setView:o,nAlertas:s}){const u=Sn(),m=[[u("sidebar.grupoPrincipal"),[["dia",u("view.dia"),"calendar"],["roles",u("view.roles"),"chart"],["planificacion",u("view.planificacion"),"calendarDays"],["funcionarios",u("view.funcionarios"),"users"]]],[u("sidebar.grupoJornadas"),[["planFuncionario",u("view.planFuncionario"),"clipboard"],["adelantos",u("view.adelantos"),"banknote"],["reposicion",u("view.reposicion"),"refresh"],["disponibilidad",u("view.disponibilidad"),"shield"]]],[u("sidebar.grupoControl"),[["alertas",u("view.alertas"),"bell"],["datos",u("view.datos"),"shieldAlert"],["configuracion",u("view.configuracion"),"traffic"]]]];return c.jsxs("aside",{className:"pnlq-no-print hidden w-60 shrink-0 flex-col bg-emerald-900 text-white lg:flex",children:[c.jsxs("div",{className:"border-b border-white/10 p-6",children:[c.jsxs("div",{className:"mb-3 flex items-center gap-3",children:[c.jsx("img",{src:"/BTMM_JORNADAS/acc-logo.svg",alt:"ACC",className:"h-12 w-12 shrink-0 rounded-xl bg-white p-1"}),c.jsxs("div",{children:[c.jsx("div",{className:"text-xs font-semibold uppercase tracking-[0.22em] text-white/60",children:u("app.sinacCR")}),c.jsx("div",{className:"mt-0.5 text-xs font-semibold text-white/70",children:u("app.accNombre")})]})]}),c.jsxs("div",{className:"text-base font-semibold leading-snug",children:[u("app.bloqueLinea1"),c.jsx("br",{}),u("app.bloqueLinea2")]}),c.jsx("div",{className:"mt-1.5 text-xs text-white/65",children:u("app.bloqueSub")})]}),c.jsx("nav",{className:"flex-1 p-3",children:m.map(([f,v])=>c.jsxs("div",{children:[c.jsx("div",{className:"px-3 pb-2 pt-4 text-xs font-semibold uppercase tracking-wider text-white/70",children:f}),v.map(([L,T,V])=>c.jsxs("button",{onClick:()=>o(L),"aria-current":r===L?"page":void 0,className:`mb-1 flex min-h-touch w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${r===L?"bg-white/20 text-white ring-1 ring-white/20":"text-white/80 hover:bg-white/10"}`,children:[c.jsx(He,{name:V,size:18}),T,L==="alertas"&&s>0&&c.jsx("span",{"aria-label":u("bottomNav.alertasAria",{n:s}),className:"ml-auto rounded-full bg-red-700 px-2 py-0.5 text-xs text-white",children:s})]},L))]},f))}),c.jsxs("div",{className:"border-t border-white/10 p-4 text-xs",children:[c.jsx("strong",{className:"font-semibold",children:u("app.perfilNombre")}),c.jsx("div",{className:"text-white/60",children:u("app.perfilCargo")}),c.jsxs("div",{className:"mt-3 border-t border-white/10 pt-3 text-[10px] font-mono leading-tight text-white/65",title:`Versión ${cr} · build ${wi} · commit ${ji}`,children:[c.jsxs("div",{children:["v",cr," ",c.jsx("span",{className:"text-white/60",children:"·"})," ",ji]}),c.jsxs("div",{className:"text-white/60",children:["build ",qd(wi)]})]})]})]})}const Sm=["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SETIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"],Zv=["D","L","K","M","J","V","S"],q1=["DOMINGO","LUNES","MARTES","MIÉRCOLES","JUEVES","VIERNES","SÁBADO"];function bm({prominent:r=!1}){const{lastSavedAt:o,pendingChanges:s,durableSaveFailed:u}=Jt(),m=Sn(),[f,v]=C.useState(typeof navigator<"u"?navigator.onLine:!0);C.useEffect(()=>{const M=()=>v(!0),x=()=>v(!1);return window.addEventListener("online",M),window.addEventListener("offline",x),()=>{window.removeEventListener("online",M),window.removeEventListener("offline",x)}},[]);const L=o?new Date(o).toLocaleTimeString("es-CR",{hour:"2-digit",minute:"2-digit"}):null,T=u&&s===0,V=s>0?m("sync.guardando"):T?m("sync.guardadoParcial",{hora:L??""}):L?m("sync.guardado",{hora:L}):m("sync.sinRespaldo"),y=`${m(f?"sync.enLinea":"sync.sinConexion")} · ${V}`;return r?c.jsxs("span",{role:"status","aria-label":y,title:y,className:`inline-flex min-h-touch w-full items-center justify-center gap-2 rounded-xl border px-3 py-2 text-sm font-semibold ${T||!f?"border-warning/40 bg-warning-soft text-warning-fg":"border-line bg-surface text-ink-muted"}`,children:[c.jsx("span",{"aria-hidden":"true",className:`h-2.5 w-2.5 shrink-0 rounded-full ${s>0?"animate-pulse bg-info":T||!f?"bg-warning":"bg-ok"}`}),c.jsx("span",{className:"truncate",children:V}),!f&&c.jsx("span",{className:"shrink-0 text-xs font-bold uppercase tracking-wide",children:m("sync.sinConexion")})]}):c.jsxs("span",{role:"status","aria-label":y,title:y,className:`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium sm:text-sm ${T?"border-warning/40 bg-warning-soft text-warning-fg":f?"border-line bg-surface text-ink-muted":"border-warning/40 bg-warning-soft text-warning-fg"}`,children:[c.jsx("span",{"aria-hidden":"true",className:`h-2 w-2 shrink-0 rounded-full ${s>0?"animate-pulse bg-info":T?"bg-warning":f?"bg-ok":"bg-warning"}`}),c.jsx("span",{className:"hidden sm:inline",children:V}),L&&c.jsx("span",{className:"sm:hidden",children:L})]})}var ol=Rd();const or=[];let hd=!1,ir=0,gd="";function H1(r){if(r.key!=="Escape")return;const o=or[or.length-1];o&&(typeof r.stopImmediatePropagation=="function"&&r.stopImmediatePropagation(),r.stopPropagation(),o())}function W1(){hd||typeof document>"u"||(document.addEventListener("keydown",H1,!0),hd=!0)}function Vm(r){return W1(),or.push(r),()=>{const o=or.lastIndexOf(r);o>=0&&or.splice(o,1)}}function Z1(r){C.useEffect(()=>{if(r)return Vm(()=>r())},[r])}const X1=["a[href]","area[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(", ");function Pd(r){return r?Array.from(r.querySelectorAll(X1)).filter(o=>!o.hasAttribute("aria-hidden")&&o.offsetParent!==null):[]}function Am({open:r=!0,onClose:o,initialFocusRef:s}={}){const u=C.useRef(null),m=C.useRef(null),f=C.useId(),v=C.useId();return C.useEffect(()=>{if(!r)return;m.current=typeof document<"u"?document.activeElement:null;const L=u.current;if(!L)return;typeof document<"u"&&(ir===0&&(gd=document.body.style.overflow,document.body.style.overflow="hidden"),ir+=1);const T=()=>{const x=(s==null?void 0:s.current)??Pd(L)[0]??L;try{x.focus({preventScroll:!0})}catch{}},V=window.setTimeout(T,0),y=x=>{if(x.key!=="Tab")return;const A=Pd(L);if(A.length===0){x.preventDefault();return}const j=A[0],J=A[A.length-1],R=document.activeElement;x.shiftKey?(R===j||!L.contains(R))&&(x.preventDefault(),J.focus()):(R===J||!L.contains(R))&&(x.preventDefault(),j.focus())};L.addEventListener("keydown",y);const M=o?Vm(()=>o()):void 0;return()=>{window.clearTimeout(V),L.removeEventListener("keydown",y),M==null||M(),typeof document<"u"&&(ir=Math.max(0,ir-1),ir===0&&(document.body.style.overflow=gd));const x=m.current;if(x&&typeof x.focus=="function")try{x.focus({preventScroll:!0})}catch{}}},[r,o,s]),{ref:u,titleId:f,descId:v}}const yd={sm:"max-w-sm",md:"max-w-xl",lg:"max-w-2xl",xl:"max-w-3xl","2xl":"max-w-4xl"};function wm({open:r=!0,onClose:o,title:s,description:u,children:m,actions:f,size:v="lg",closeOnBackdrop:L=!0,contentClassName:T=""}){const{ref:V,titleId:y,descId:M}=Am({open:r,onClose:o});if(!r)return null;const x=yd[v]||yd.lg,A=c.jsx("div",{className:"pnlq-modal-backdrop fixed inset-0 z-50 flex items-end justify-center bg-black/55 p-0 backdrop-blur-sm md:items-center md:p-4",onClick:j=>{L&&j.target===j.currentTarget&&(o==null||o())},children:c.jsxs("div",{ref:V,role:"dialog","aria-modal":"true","aria-labelledby":s?y:void 0,"aria-describedby":u?M:void 0,tabIndex:-1,className:`pnlq-modal-panel flex max-h-[94vh] max-h-[94dvh] w-full ${x} flex-col overflow-hidden rounded-t-3xl bg-surface text-ink shadow-2xl outline-none md:rounded-3xl`,style:{maxHeight:"calc(var(--visual-viewport-height, 100dvh) - 1rem)"},children:[c.jsx("div",{"aria-hidden":"true",className:"mx-auto mt-2 h-1.5 w-10 shrink-0 rounded-full bg-line md:hidden"}),(s||u)&&c.jsxs("header",{className:"pnlq-modal-header flex items-start justify-between gap-3 border-b border-line p-5",children:[c.jsxs("div",{className:"min-w-0",children:[s&&c.jsx("h2",{id:y,className:"text-lg font-semibold text-ink",children:s}),u&&c.jsx("p",{id:M,className:"mt-1 text-sm text-ink-muted",children:u})]}),c.jsx("button",{type:"button",onClick:o,"aria-label":Ie("acciones.cerrar"),className:"-mr-1 inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl text-ink-muted hover:bg-surface-alt hover:text-ink",children:c.jsx(He,{name:"x",size:20,label:Ie("acciones.cerrar")})})]}),c.jsx("div",{className:`pnlq-modal-body flex-1 overflow-y-auto p-5 ${T}`,children:m}),f&&c.jsx("footer",{className:"pnlq-modal-footer flex flex-wrap justify-between gap-2 border-t border-line bg-surface-alt p-4 pb-[max(1rem,env(safe-area-inset-bottom))]",children:f})]})});return typeof document<"u"?ol.createPortal(A,document.body):A}const Os=390,Fs=844,jm="mobile-preview";function eL(r=window.location){return new URLSearchParams(r.search).get(jm)==="1"}function nL(r=window.location){const o=new URL(r.href);return o.searchParams.set(jm,"1"),o.toString()}const Md=["planificacion","planFuncionario"];function tL({view:r,setView:o,month:s,setMonth:u,year:m,setYear:f,compact:v,setCompact:L}){const T=Sn(),[V,y]=C.useState(!1),[M,x]=C.useState(!1),A=eL(),j=new Date().getFullYear(),J=Array.from({length:11},(Z,fe)=>j-5+fe),R=Z=>{let fe=s+Z,le=m;fe<0&&(fe=11,le-=1),fe>11&&(fe=0,le+=1),u(fe),f(le)},w=()=>{const Z=new Date;u(Z.getMonth()),f(Z.getFullYear())},Y=Md.includes(r),ie=Y||r==="roles";return c.jsxs("header",{className:`pnlq-topbar pnlq-no-print sticky top-0 border-line bg-surface/95 shadow-sm backdrop-blur lg:block lg:border-b lg:px-6 lg:py-3 ${Y?"block border-b px-4 py-2":ie?"hidden border-b md:block md:px-4 md:py-2":"hidden"} ${V?"z-50":"z-30"}`,children:[c.jsxs("div",{className:"pnlq-topbar-inner flex flex-col gap-2 xl:flex-row xl:items-center xl:justify-between",children:[c.jsx("div",{className:"flex items-center justify-between gap-2",children:c.jsx("div",{className:"min-w-0",children:c.jsx("h1",{className:"hidden text-xl font-semibold tracking-tight text-ink lg:block",children:T("app.titulo")})})}),c.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[Md.includes(r)&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{role:"group","aria-label":T("topbar.periodo"),className:"inline-flex items-stretch overflow-hidden rounded-xl border border-line bg-surface shadow-sm",children:[c.jsx("button",{onClick:()=>R(-1),"aria-label":T("topbar.mesAnterior"),className:"inline-flex min-h-touch min-w-touch items-center justify-center px-2 text-ink-muted hover:bg-surface-alt",children:c.jsx(He,{name:"chevronLeft",size:16})}),c.jsx("select",{"aria-label":T("topbar.mes"),className:"min-h-touch border-x border-line bg-surface px-1.5 text-sm font-medium text-ink outline-none sm:px-2 dark:[color-scheme:dark]",value:s,onChange:Z=>u(Number(Z.target.value)),children:Sm.map((Z,fe)=>c.jsx("option",{value:fe,children:Z},Z))}),c.jsx("select",{"aria-label":T("topbar.anio"),className:"min-h-touch bg-surface px-1.5 text-sm font-medium text-ink outline-none sm:px-2 dark:[color-scheme:dark]",value:m,onChange:Z=>f(Number(Z.target.value)),children:J.map(Z=>c.jsx("option",{children:Z},Z))}),c.jsx("button",{onClick:()=>R(1),"aria-label":T("topbar.mesSiguiente"),className:"inline-flex min-h-touch min-w-touch items-center justify-center border-l border-line px-2 text-ink-muted hover:bg-surface-alt",children:c.jsx(He,{name:"chevronRight",size:16})})]}),c.jsx("button",{type:"button",onClick:w,className:"inline-flex min-h-touch items-center rounded-xl border border-line bg-surface px-3 text-sm font-semibold text-brand hover:bg-brand-soft",children:T("topbar.hoy")})]}),r==="roles"&&c.jsx("button",{onClick:()=>L(!v),className:"hidden min-h-touch items-center rounded-xl border border-line bg-surface px-3 py-2 text-sm font-medium text-ink hover:bg-surface-alt md:inline-flex","aria-pressed":v,children:T(v?"topbar.vistaAmplia":"topbar.vistaCompacta")}),!A&&c.jsxs("button",{type:"button",onClick:()=>y(!0),className:"hidden min-h-touch items-center gap-2 rounded-xl border border-brand bg-brand-soft px-3 text-sm font-semibold text-ink hover:opacity-90 lg:inline-flex","aria-label":T("topbar.previewMobile"),children:[c.jsx(He,{name:"phone",size:18}),T("topbar.previewMobileCorto"),c.jsx("span",{className:"rounded-md bg-surface px-1.5 py-0.5 text-xs text-ink-muted",children:"Temporal"})]}),c.jsx("span",{className:"hidden lg:inline-flex",children:c.jsx(bm,{})})]})]}),c.jsxs(wm,{open:V,onClose:()=>y(!1),title:T("topbar.previewTitle"),description:T("topbar.previewDesc",{ancho:M?Fs:Os,alto:M?Os:Fs}),size:"2xl",contentClassName:"bg-slate-200 p-3",children:[c.jsxs("div",{className:"mb-3 flex justify-center",role:"group","aria-label":T("topbar.previewOrientation"),children:[c.jsx("button",{type:"button",onClick:()=>x(!1),"aria-pressed":!M,className:`min-h-touch rounded-l-xl border px-4 text-sm font-semibold ${M?"border-line bg-surface text-ink":"border-brand bg-brand text-brand-fg"}`,children:T("topbar.previewVertical")}),c.jsx("button",{type:"button",onClick:()=>x(!0),"aria-pressed":M,className:`min-h-touch rounded-r-xl border border-l-0 px-4 text-sm font-semibold ${M?"border-brand bg-brand text-brand-fg":"border-line bg-surface text-ink"}`,children:T("topbar.previewHorizontal")})]}),c.jsx("div",{className:"mx-auto max-w-full overflow-hidden rounded-[2rem] border-[6px] border-slate-900 bg-white shadow-2xl transition-[width]",style:{width:`${(M?Fs:Os)+12}px`},children:c.jsx("iframe",{title:T("topbar.previewFrameTitle"),src:nL(),className:`block w-full bg-white ${M?"h-[min(390px,calc(100dvh-12rem))] min-h-[280px]":"h-[min(844px,calc(100dvh-12rem))] min-h-[480px]"}`})})]})]})}function aL(r){return r>99?"99+":String(r)}function rL({view:r,setView:o,nAlertas:s,hidden:u=!1}){const m=Sn(),[f,v]=C.useState(!1),L=[["dia",m("bottomNav.dia"),"calendar"],["roles",m("bottomNav.roles"),"chart"],["alertas",m("bottomNav.alertas"),"bell"],["funcionarios",m("bottomNav.personal"),"users"]],T=[["planificacion",m("bottomNav.plan"),"calendarDays"],["adelantos",m("bottomNav.viaticos"),"banknote"],["reposicion",m("bottomNav.reposicion"),"refresh"],["disponibilidad",m("bottomNav.disponib"),"shield"],["planFuncionario",m("bottomNav.planFunc"),"clipboard"],["datos",m("bottomNav.datos"),"shieldAlert"],["configuracion",m("bottomNav.config"),"traffic"]],V=T.some(([M])=>M===r),y=M=>{o(M),v(!1)};return u?null:c.jsxs(c.Fragment,{children:[c.jsx("nav",{className:"pnlq-bottom-nav pnlq-no-print fixed bottom-0 left-0 right-0 z-40 border-t border-line bg-surface pb-[env(safe-area-inset-bottom)] lg:hidden","aria-label":m("bottomNav.navAria"),children:c.jsxs("div",{className:"pnlq-bottom-nav-grid grid grid-cols-5",children:[L.map(([M,x,A])=>c.jsxs("button",{type:"button",onClick:()=>y(M),"aria-current":r===M?"page":void 0,className:`pnlq-bottom-nav-item relative flex min-h-touch flex-col items-center justify-center gap-0.5 py-2 text-sm font-semibold ${r===M?"text-brand":"text-ink-muted"}`,children:[c.jsx(He,{name:A,size:24}),x,M==="alertas"&&s>0&&c.jsx("span",{className:"absolute right-[18%] top-1 min-w-5 rounded-full bg-critical px-1 text-center text-xs font-bold leading-5 text-ink-inverse","aria-label":m("bottomNav.alertasAria",{n:s}),children:aL(s)})]},M)),c.jsxs("button",{type:"button",onClick:()=>v(!0),"aria-expanded":f,"aria-current":V?"page":void 0,className:`pnlq-bottom-nav-item relative flex min-h-touch flex-col items-center justify-center gap-0.5 py-2 text-sm font-semibold ${f||V?"text-brand":"text-ink-muted"}`,children:[c.jsx(He,{name:"menu",size:24}),m("bottomNav.mas")]})]})}),c.jsx(wm,{open:f,onClose:()=>v(!1),title:m("bottomNav.masTitulo"),description:m(V?`view.${r}`:"bottomNav.masSub"),size:"sm",contentClassName:"p-3 pb-[max(1rem,env(safe-area-inset-bottom))]",children:c.jsx("div",{className:"grid grid-cols-2 gap-2",children:T.map(([M,x,A])=>c.jsxs("button",{type:"button",onClick:()=>y(M),"aria-current":r===M?"page":void 0,className:`relative flex min-h-[56px] items-center gap-3 rounded-xl px-3 text-left text-sm font-semibold ${r===M?"bg-brand text-brand-fg":"border border-line bg-surface-alt text-ink"}`,children:[c.jsx(He,{name:A,size:22}),c.jsx("span",{children:x})]},M))})})]})}const iL=new Set(["dia","roles","planificacion","funcionarios","alertas","adelantos","reposicion","disponibilidad","planFuncionario","datos","configuracion","funcionario"]),km=new Set(["roles","planificacion","planFuncionario"]),_m=new Set(["funcionario"]);function sl(r){return r==="dashboard"?"dia":iL.has(r)?r:"dia"}function oL(r,o){const s=Number(r),u=Number(o);return Number.isInteger(s)&&s>=2e3&&s<=2200&&Number.isInteger(u)&&u>=1&&u<=12?{year:s,month:u-1}:null}function sL(r){if(!r)return"";try{return decodeURIComponent(r).trim()}catch{return""}}function lL(r){if(!r)return null;try{const o=new URLSearchParams(r),s={};for(const[u,m]of o.entries())m!==""&&(s[u]=m);return Object.keys(s).length?s:null}catch{return null}}function cL(r){if(!r)return"";const o=new URLSearchParams;for(const u of Object.keys(r).sort()){const m=r[u];m==null||m===""||o.set(u,String(m))}const s=o.toString();return s?`?${s}`:""}function uL(r=""){const[o,s]=String(r).split("?"),u=String(o).replace(/^#\/?/,""),[m,f,v]=u.split("/"),L=sl(m||"dia"),T={view:L};if(L==="dia"&&/^\d{4}-\d{2}-\d{2}$/.test(f||"")&&(T.diaVista=f),km.has(L)&&Object.assign(T,oL(f,v)||{}),_m.has(L)){const y=sL(f);y?T.funcionarioVista=y:T.view="funcionarios"}const V=lL(s);return V&&(T.filtros=V),T}function Ed({view:r,year:o,month:s,diaVista:u,funcionarioVista:m,filtros:f}){const v=sl(r),L=cL(f);if(v==="dia")return`#/dia/${u}${L}`;if(km.has(v))return`#/${v}/${o}/${Un(s+1)}${L}`;if(_m.has(v)){const T=String(m||"").trim();return T?`#/funcionario/${encodeURIComponent(T)}${L}`:"#/funcionarios"}return`#/${v}${L}`}function dL({view:r,setView:o,year:s,setYear:u,month:m,setMonth:f,diaVista:v,setDiaVista:L,funcionarioVista:T,setFuncionarioVista:V,filtrosVista:y,setFiltrosVista:M}){const x=y==null?void 0:y[r],A=C.useCallback(()=>{const j=uL(window.location.hash);o(j.view),j.year!=null&&u(j.year),j.month!=null&&f(j.month),j.diaVista&&L(j.diaVista),j.funcionarioVista&&(V==null||V(j.funcionarioVista)),j.filtros&&(M==null||M(j.view,j.filtros))},[L,M,V,f,o,u]);return C.useEffect(()=>(A(),window.addEventListener("popstate",A),window.addEventListener("hashchange",A),()=>{window.removeEventListener("popstate",A),window.removeEventListener("hashchange",A)}),[A]),C.useEffect(()=>{const j=Ed({view:r,year:s,month:m,diaVista:v,funcionarioVista:T,filtros:x});window.location.hash!==j&&window.history.replaceState({},"",j)},[v,x,T,m,r,s]),C.useCallback((j,J={})=>{const R=sl(j),w=J.funcionario!=null?J.funcionario:T;J.funcionario!=null&&(V==null||V(J.funcionario));const Y=Ed({view:R,year:s,month:m,diaVista:v,funcionarioVista:w,filtros:y==null?void 0:y[R]});window.location.hash!==Y&&window.history.pushState({},"",Y),o(R)},[v,y,T,m,V,o,s])}function mL(){const[r,o]=C.useState(!1);return C.useEffect(()=>{const s=window.visualViewport;if(!s)return;const u=()=>{const f=window.innerHeight-s.height>150;o(f),document.documentElement.style.setProperty("--visual-viewport-height",`${s.height}px`)};return u(),s.addEventListener("resize",u),s.addEventListener("scroll",u),()=>{s.removeEventListener("resize",u),s.removeEventListener("scroll",u),document.documentElement.style.removeProperty("--visual-viewport-height")}},[]),r}class fL extends C.Component{constructor(s){super(s);Mi(this,"handleReintentar",()=>{this.setState({hasError:!1,error:null})});Mi(this,"handleRecargar",()=>{window.location.reload()});Mi(this,"handleDescargarRespaldo",()=>{try{const s=Ys();if(!s)return;const u=HT(s),m=new Blob([JSON.stringify(u,null,2)],{type:"application/json"}),f=URL.createObjectURL(m),v=document.createElement("a");v.href=f,v.download=`pnlq-respaldo-de-emergencia-${XT()}.json`,document.body.appendChild(v),v.click(),document.body.removeChild(v),URL.revokeObjectURL(f)}catch{}});this.state={hasError:!1,error:null}}static getDerivedStateFromError(s){return{hasError:!0,error:s}}componentDidCatch(s,u){console.error("Error de aplicación capturado por ErrorBoundary:",s,u==null?void 0:u.componentStack)}render(){var u;if(!this.state.hasError)return this.props.children;const s=(()=>{try{return!!Ys()}catch{return!1}})();return c.jsx("div",{role:"alert",className:"flex min-h-screen items-center justify-center bg-slate-100 p-4 text-slate-950",children:c.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-red-300 bg-white p-6 shadow-lg",children:[c.jsx("p",{className:"text-lg font-bold text-red-900",children:"Ocurrió un error inesperado"}),c.jsx("p",{className:"mt-2 text-sm text-slate-700",children:"La aplicación encontró un problema y no puede continuar mostrando esta pantalla. Tus datos guardados en este dispositivo no se han borrado."}),c.jsxs("div",{className:"mt-5 flex flex-col gap-2",children:[c.jsx("button",{type:"button",onClick:this.handleReintentar,className:"min-h-touch rounded-xl bg-emerald-800 px-4 text-sm font-semibold text-white hover:bg-emerald-700",children:"Reintentar"}),c.jsx("button",{type:"button",onClick:this.handleRecargar,className:"min-h-touch rounded-xl border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-800 hover:bg-slate-50",children:"Recargar la aplicación"}),s&&c.jsx("button",{type:"button",onClick:this.handleDescargarRespaldo,className:"min-h-touch rounded-xl border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-800 hover:bg-slate-50",children:"Descargar mis datos por seguridad"})]}),((u=this.state.error)==null?void 0:u.message)&&c.jsxs("p",{className:"mt-4 break-words rounded-lg bg-slate-50 p-2 text-[11px] text-slate-500",children:["Detalle técnico: ",this.state.error.message]})]})})}}const Nd={exito:{icono:"check",texto:"text-ok",borde:"border-l-ok"},error:{icono:"danger",texto:"text-critical",borde:"border-l-critical"},aviso:{icono:"alert",texto:"text-warning",borde:"border-l-warning"},info:{icono:"info",texto:"text-info",borde:"border-l-info"}};function pL({item:r,onCerrar:o,onAccion:s}){const u=Nd[r.tipo]||Nd.info;return c.jsxs("div",{"data-testid":"toast","data-tipo":r.tipo,className:`pnlq-toast rounded-2xl border border-line border-l-4 ${u.borde} bg-surface p-3 shadow-lg`,children:[c.jsxs("div",{className:"flex items-start gap-2.5",children:[c.jsx("span",{className:`mt-0.5 shrink-0 ${u.texto}`,children:c.jsx(He,{name:u.icono,size:20})}),c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsx("p",{className:"break-words text-sm font-semibold text-ink",children:r.mensaje}),r.detalle&&c.jsx("p",{className:"mt-0.5 break-words text-xs text-ink-muted",children:r.detalle})]}),c.jsx("button",{type:"button",onClick:o,"aria-label":Ie("acciones.cerrar"),className:"-mr-1 -mt-1 inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl text-ink-muted hover:bg-surface-alt hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",children:c.jsx(He,{name:"x",size:18})})]}),r.accion&&c.jsx("div",{className:"mt-1 flex justify-end",children:c.jsx("button",{type:"button",onClick:s,className:"inline-flex min-h-touch items-center rounded-xl bg-brand px-4 text-sm font-bold text-brand-fg hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",children:r.accion.etiqueta})})]})}function TL(){const{toasts:r,cerrar:o,activarAccion:s,pausar:u,reanudar:m}=$d(),f=r.filter(V=>V.tipo==="error"),v=r.filter(V=>V.tipo!=="error"),L=V=>c.jsx(pL,{item:V,onCerrar:()=>o(V.id),onAccion:()=>s(V.id)},V.id),T=c.jsxs("div",{className:"pnlq-toast-viewport pnlq-no-print",onMouseEnter:u,onMouseLeave:m,onFocusCapture:u,onBlurCapture:m,children:[c.jsx("div",{role:"alert","aria-live":"assertive","aria-atomic":"false",className:"pnlq-toast-region",children:f.map(L)}),c.jsx("div",{role:"status","aria-live":"polite","aria-atomic":"false",className:"pnlq-toast-region",children:v.map(L)})]});return typeof document<"u"?ol.createPortal(T,document.body):T}const LL=String.raw`Pestaña 1


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
`,vL=String.raw`	SÁBADO
	

	

	

	

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
`,hL=String.raw`JB capacitación VDA
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
`,gL=String.raw`KV programar actividades de EA tomar en cuenta escuelas del humo de peji y el liceo de peji/atención de turismo
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
`,PL=String.raw`JV informe voluntarios UCR de semana santa en PNLQ/viático combustible/turismo
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
`,yL=String.raw`JB cherpiritos/denuncia sanchez
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
`,ML=String.raw`PNTMM
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
`,EL=String.raw`JV  acompaña a la persona de DA a realizar inspección
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


`,NL=String.raw`

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










 


	

	

	

	

	

	

	





Pestaña 2`,CL=[LL,vL,hL,gL,PL,yL,ML,EL,NL].join(""),zs="2026-07-21-agenda-viaticos";function In({id:r,titulo:o,fecha:s,funcionarios:u,lugar:m="",observaciones:f=""}){return{id:`plan2026-agenda-${r}`,titulo:o,categoria:"Otra actividad",inicio:s,fin:s,unDia:!0,horaInicio:"08:00",horaFin:"16:00",funcionarios:u,otrosParticipantes:[],lugar:m,observaciones:f,viatico:!0}}const xL=[In({id:"2026-08-01-cerro-vueltas",titulo:"PPC (entrada de Cerro Vueltas, tema caballistas)",fecha:"2026-08-01",funcionarios:["Jetzelly Villalobos","Yolanda Elizondo"],lugar:"Entrada de Cerro Vueltas",observaciones:"Tema: caballistas."}),In({id:"2026-08-05-reunion-cne",titulo:"Reunión CNE",fecha:"2026-08-05",funcionarios:["Karen Valle"],lugar:"CNE"}),In({id:"2026-08-06-jaular",titulo:"PPC pica montaña a Jaular",fecha:"2026-08-06",funcionarios:["Yeison Cortés","Errol Salazar","Kenneth Mena"],lugar:"Jaular"}),In({id:"2026-08-08-cerros",titulo:"PPC a Cerros",fecha:"2026-08-08",funcionarios:["Yolanda Elizondo"],lugar:"Cerros"}),...[10,11,12,13,14].map(r=>In({id:`2026-08-${r}-ea-escuelas`,titulo:"EA Escuelas",fecha:`2026-08-${r}`,funcionarios:["Errol Salazar","Diana Tencio"],lugar:"Escuelas"})),In({id:"2026-08-12-ppc-san-gerardo",titulo:"PPC San Gerardo",fecha:"2026-08-12",funcionarios:["Karen Valle","Laura Valverde","Pablo Sánchez"],lugar:"San Gerardo"}),In({id:"2026-08-12-capacitacion-serpientes",titulo:"Capacitación en manipulación y manejo de serpientes",fecha:"2026-08-12",funcionarios:["Yeison Cortés","Laura Valverde"],observaciones:"Las dos descripciones de la fuente se consolidaron en una sola actividad."}),In({id:"2026-08-16-duelas-esperanza",titulo:"PPC Duelas, La Esperanza y otros",fecha:"2026-08-16",funcionarios:["Jetzelly Villalobos"],lugar:"Duelas y La Esperanza"}),In({id:"2026-08-17-vida-silvestre-acc",titulo:"Apoyo operativo Vida Silvestre ACC",fecha:"2026-08-17",funcionarios:["Fabricio Carbonell","Kenneth Mena","Jetzelly Villalobos"],lugar:"ACC",observaciones:"Confirmar detalles con Fabricio."}),In({id:"2026-08-18-reserva-san-gerardo",titulo:"PPC Reserva San Gerardo",fecha:"2026-08-18",funcionarios:["Karen Valle","Yolanda Elizondo","Pablo Sánchez"],lugar:"Reserva San Gerardo"}),In({id:"2026-08-30-rancho-lalo",titulo:"PPC Rancho de Lalo",fecha:"2026-08-30",funcionarios:["Jetzelly Villalobos","Mariano Solís"],lugar:"Rancho de Lalo"})],SL={PNTMM:"Parque Nacional Tapantí Macizo de la Muerte",PNLQ:"Parque Nacional Los Quetzales",PLE:"Puesto La Esperanza",PVM:"Puesto Villa Mills"},Cd={ENERO:1,FEBRERO:2,MARZO:3,ABRIL:4,MAYO:5,JUNIO:6,JULIO:7,AGOSTO:8,SETIEMBRE:9,SEPTIEMBRE:9,OCTUBRE:10,NOVIEMBRE:11,DICIEMBRE:12},xd={ES:"Errol Salazar",ME:"Mayra Espinoza",YC:"Yeison Cortés",KM:"Kenneth Mena",FC:"Fabricio Carbonell",MN:"Monserrath Navarro",JPG:"Juan Pablo Granados",JG:"Juan Pablo Granados",PG:"Juan Pablo Granados",JP:"Juan Pablo Granados",LV:"Laura Valverde",JV:"Jetzelly Villalobos",DT:"Diana Tencio",KV:"Karen Valle",PS:"Pablo Sánchez",YE:"Yolanda Elizondo",MS:"Mariano Solís",MSA:"Mariano Solís",GP:"Guillermo Pérez",CC:"Carlos Cordero",JB:"Josué Brenes",AA:"Alexander Alvarado"},bL={MH:"MH",GG:"GG",MSG:"MSG",DA:"Dirección de Agua",GJ:"GJ",JC:"JC",IV:"IV",YV:"YV",VB:"VB",ASVO:"ASVO",TCU:"TCU",UCR:"UCR",TEC:"TEC",ICE:"ICE",ACLAP:"ACLAP",COVIRENA:"COVIRENA",COVIRENAS:"COVIRENA",PANTHERA:"Panthera",UNED:"UNED",INA:"INA",MOPT:"MOPT",FUNDECOR:"FUNDECOR",CEDARENA:"CEDARENA"},VL=new Set(["DOMINGO","LUNES","MARTES","MIÉRCOLES","JUEVES","VIERNES","SÁBADO"]),Rm=r=>r.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase(),AL=(r,o)=>new RegExp(`(^|[^A-Z])${o}([^A-Z]|$)`).test(r);function wL(r){const o=r.replace(/[^A-Za-z]/g,"").toUpperCase();return o.startsWith("PNTMM")?"PNTMM":["PNLQ","PLE","PVM"].includes(o)?o:""}function jL(r){const o=Rm(r),s=[],u=m=>{s.some(f=>f.nombre===m)||s.push({nombre:m,contacto:""})};for(const[m,f]of Object.entries(bL))AL(o,m)&&u(f);return/\bENZO\b/.test(o)&&u("Enzo"),/\bALEX(?:ANDER)?\b/.test(o)&&u("Alex"),/\bMERYLL(?:\s+ARIAS)?\b/.test(o)&&u("Meryll Arias"),/\bLUIS\s*DAVID\b|\bLUISDA\b/.test(o)&&u("Luis David"),/\bVOLUNTARI(?:O|A|OS|AS)\b/.test(o)&&u("Voluntariado"),/\bINVESTIGADOR(?:A|ES|AS)?\b/.test(o)&&u("Investigadores"),/\bPASANTES?\b/.test(o)&&u("Pasantes"),/\bESTUDIANTES?\b/.test(o)&&u("Estudiantes"),s}function kL(r){const o=Rm(r);return!!(/\bVOLUNTARI[OA]S?\b/.test(o)||/\bCOVIRENAS?\b/.test(o)||/\bINVITAD[OA]S?\b/.test(o)||/\bINVESTIGADOR/.test(o)||/\bPASANTES?\b/.test(o)||/\bESTUDIANTES?\b/.test(o)||/\bPRACTICANTES?\b/.test(o)||/\bENZO\b/.test(o)||/\bMERYLL\b/.test(o)||/^(INGRESAN?|SALEN?|PERNOCTAN?|LLEGAN?|VISITAN?)\b/.test(o))}function _L(r){const o=v=>{const L=v.match(/^([A-Za-z]{2,3})(?![A-Za-z])/);if(!L)return null;const T=L[1].toUpperCase();return xd[T]?{nombre:xd[T],largo:L[1].length}:null};let s=r.replace(/^\s+/,"");const u=o(s);if(!u)return{funcionarios:[],titulo:r.trim()};const m=[u.nombre];for(s=s.slice(u.largo);;){const v=s.match(/^(\s*(?:y|,|\/|-|–|&|;)\s*|\s+)/i);if(!v)break;const L=s.slice(v[0].length),T=o(L);if(!T)break;m.includes(T.nombre)||m.push(T.nombre),s=L.slice(T.largo)}const f=s.replace(/^\s*[:\-–]?\s*/,"").replace(/^(?:y|e|&|,|;)\s+/i,"").trim();return{funcionarios:m,titulo:f}}function RL(r){const o=[];for(const s of r){const u=o[o.length-1];if(u!==void 0&&/^[a-záéíóúñ]/.test(s)){const m=u.split(/\s+/).pop()||"";if(m.length===1&&/^[a-záéíóúñ]$/.test(m)){o[o.length-1]=u+s;continue}}o.push(s)}return o}function DL(r){const o=new Map;let s=0,u=0,m="";for(const v of r.split(/\r?\n/)){const L=v.trim();if(!L||VL.has(L)||/^_+$/.test(L)||L==="De"||/^Pestaña\s+\d+$/i.test(L))continue;const T=L.match(/^([A-ZÁÉÍÓÚÑ]+) 2026$/);if(T&&Cd[T[1]]){s=Cd[T[1]],u=0,m="";continue}if(/^\d{1,2}$/.test(L)){u=Number(L),m="";continue}const V=wL(L);if(V){m=V;continue}if(!s||!u||!m)continue;const y=`${s}-${u}-${m}`;o.has(y)||o.set(y,{mes:s,dia:u,sitio:m,textos:[]}),o.get(y).textos.push(L)}const f=[];for(const v of o.values()){const L=`2026-${String(v.mes).padStart(2,"0")}-${String(v.dia).padStart(2,"0")}`;let T=[],V=0;for(const y of RL(v.textos)){const{funcionarios:M,titulo:x}=_L(y);if(!x)continue;let A;M.length?(A=M,T=M):kL(y)?A=[]:T.length?A=T:A=[],f.push({id:`plan2026-${L}-${v.sitio}-${V++}`,titulo:x,categoria:"Otra actividad",inicio:L,fin:L,unDia:!0,horaInicio:"08:00",horaFin:"16:00",funcionarios:A,otrosParticipantes:jL(y),lugar:SL[v.sitio],observaciones:"",viatico:!1})}}return f}function Sd(r){return typeof(r==null?void 0:r.id)=="string"&&r.id.startsWith("plan2026-")}function IL(r,o,s){const u=(r||[]).filter(f=>!(Sd(f)&&(f.inicio||"")>=s)),m=(o||[]).filter(f=>Sd(f)&&(f.inicio||"")>=s);return[...u,...m]}async function OL(){const r=DL(CL);if(!r.length)throw new Error("La planificación 2026 no produjo actividades válidas.");return[...r,...xL]}const Qs="btmm:planificacion2026:version",FL="btmm:planificacion2026:importada:v3";function zL(){const{setActividadesPlan:r}=Jt();return C.useEffect(()=>{let o=!1,s=null,u=null;try{s=window.localStorage.getItem(Qs),u=window.localStorage.getItem(FL)}catch{}if(s!==zs){if(!s&&u==="1"){try{window.localStorage.setItem(Qs,zs)}catch{}return}return(async()=>{try{const m=await OL();if(o)return;const f=s==null?"":Oi();r(v=>IL(v,m,f));try{window.localStorage.setItem(Qs,zs)}catch{}}catch(m){console.error("No fue posible sincronizar PLANIFICACION BTMM 2026",m)}})(),()=>{o=!0}}},[r]),null}const bd={flat:"bg-surface",inset:"bg-surface-inset",elevated:"border border-line bg-surface shadow-sm",interactive:"border border-line bg-surface transition-colors hover:border-line-strong hover:bg-surface-alt"};function Ta({title:r,icon:o,action:s,children:u,collapsible:m=!1,defaultOpen:f=!1,variant:v="flat",className:L="",ariaLabel:T}){const[V,y]=C.useState(f),M=!m||V;return c.jsxs("div",{className:`pnlq-card rounded-lg p-4 ${bd[v]??bd.flat} ${L}`,children:[c.jsxs("div",{className:`pnlq-card-header flex flex-wrap items-center justify-between gap-3 ${M?"mb-3":""}`,children:[m?c.jsxs("button",{type:"button",onClick:()=>y(x=>!x),"aria-expanded":V,"aria-label":T,className:"flex min-h-touch flex-1 items-center gap-2 text-left text-base font-semibold text-ink hover:text-brand",children:[c.jsx(He,{name:V?"chevronDown":"chevronRight",size:18,className:"shrink-0 text-ink-subtle"}),c.jsx("span",{children:o}),r]}):c.jsxs("div",{className:"flex items-center gap-2 text-base font-semibold text-ink",children:[c.jsx("span",{children:o}),r]}),s]}),M&&u]})}function Nt({children:r,className:o="",bordered:s=!1}){return c.jsx("span",{className:`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${s?"border":""} ${o}`,children:r})}function QL(r){return r.split(" ").slice(0,2).map(o=>o[0]).join("").toUpperCase()}function JL(r){return["bg-emerald-700 text-white","bg-sky-700 text-white","bg-rose-700 text-white","bg-amber-700 text-white","bg-purple-700 text-white"][r.charCodeAt(0)%5]}function Xv(r){return{Activo:"bg-emerald-100 text-emerald-900 border-emerald-200","De vacaciones":"bg-sky-100 text-sky-900 border-sky-200",Incapacitado:"bg-red-100 text-red-900 border-red-200",Inactivo:"bg-slate-100 text-slate-700 border-slate-200"}[r]||"bg-slate-100 text-slate-700 border-slate-200"}function Vd(r,o){const s=String(r||"").toUpperCase();return o&&!s?"bg-slate-600 text-white border-slate-700":s.startsWith("T")?"bg-emerald-700 text-white border-emerald-800":s.startsWith("I")?"bg-rose-700    text-white border-rose-800":s.startsWith("V")?"bg-sky-700     text-white border-sky-800":s.startsWith("L")?"bg-amber-700   text-white border-amber-800":s.startsWith("O")?"bg-violet-700  text-white border-violet-800":s.startsWith("E")?"bg-cyan-700    text-white border-cyan-800":s?o?"bg-slate-600 text-white border-slate-700":"bg-emerald-700 text-white border-emerald-800":o?"bg-slate-600 text-white border-slate-700":"bg-slate-400 text-white border-slate-500"}function Ci({name:r}){return c.jsx("div",{className:`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${JL(r)}`,children:QL(r)})}const Ad={half:"h-[60vh]",full:"max-h-[92vh]"};function ll({open:r,onClose:o,title:s,snapPoint:u="full",children:m}){const f=C.useRef(null),v=C.useRef({startY:0,dragging:!1});C.useEffect(()=>{if(!r)return;const y=M=>{M.key==="Escape"&&o()};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[r,o]),C.useEffect(()=>(r?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[r]);const L=C.useCallback(y=>{v.current={startY:y.touches[0].clientY,dragging:!0}},[]),T=C.useCallback(y=>{if(!v.current.dragging)return;const M=y.touches[0].clientY-v.current.startY;M>0&&f.current&&(f.current.style.transform=`translateY(${M}px)`)},[]),V=C.useCallback(y=>{if(!v.current.dragging)return;const M=y.changedTouches[0].clientY-v.current.startY;v.current.dragging=!1,f.current&&(f.current.style.transform=""),M>80&&o()},[o]);return typeof document>"u"?null:ol.createPortal(c.jsxs(c.Fragment,{children:[c.jsx("div",{"aria-hidden":"true",onClick:o,className:["fixed inset-0 z-40 bg-black/50 transition-opacity duration-300",r?"opacity-100":"pointer-events-none opacity-0"].join(" ")}),c.jsxs("div",{ref:f,role:"dialog","aria-modal":"true","aria-label":s,className:["fixed inset-x-0 bottom-0 z-50 flex flex-col rounded-t-2xl bg-surface text-ink shadow-2xl","transition-transform duration-300 ease-out",Ad[u]??Ad.full,r?"translate-y-0":"translate-y-full"].join(" "),children:[c.jsx("div",{className:"flex cursor-grab touch-none items-center justify-center pb-1 pt-3",onTouchStart:L,onTouchMove:T,onTouchEnd:V,"aria-hidden":"true",children:c.jsx("span",{className:"h-1.5 w-10 rounded-full bg-line"})}),s&&c.jsxs("div",{className:"flex items-center justify-between border-b border-line px-5 pb-3 pt-1",children:[c.jsx("h2",{className:"text-base font-semibold text-ink",children:s}),c.jsx("button",{type:"button",onClick:o,"aria-label":"Cerrar",className:"inline-flex min-h-touch min-w-touch items-center justify-center rounded-full text-ink-muted hover:bg-surface-alt hover:text-ink",children:c.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M18 6 6 18M6 6l12 12"})})})]}),c.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-8 pt-4",children:m})]})]}),document.body)}function Dm(r,o,s,u,m){return`${r}-${o+1}-${s}-${u}-${m}`}function BL(r,o,s,u){return`CFG-${r}-${o+1}-${s}-${u}`}function dr(r){const o=String(r||"10x5").toLowerCase();if(o.includes("administrativo"))return{trabajo:5,libre:2,administrativo:!0};const s=o.split("x");return{trabajo:Number(s[0])||10,libre:Number(s[1])||5,administrativo:!1}}function UL(r,o,s,u,m){const f=dr(r);if(f.administrativo){const T=new Date(u,m,o).getDay();return T>=1&&T<=5?`T${T}`:T===6?"L1":"L2"}const v=f.trabajo+f.libre,L=(o-s)%v;return o<s?"":L<f.trabajo?`T${L+1}`:`L${L-f.trabajo+1}`}function Fi(r){const o=String(r||"").toUpperCase();return o.startsWith("T")||o.startsWith("E")}function YL(r){return String(r||"").toUpperCase().startsWith("T")}function Im(r){return String(r||"").toUpperCase().startsWith("E")}function GL(r){const o=String(r||"").toUpperCase();return o.startsWith("T")?"Turno":o.startsWith("L")?"Libre":o.startsWith("V")?"Vacaciones":o.startsWith("I")?"Incapacidad":o.startsWith("O")?"Otro":o.startsWith("E")?"Teletrabajo":o?"Turno":"Sin marcar"}function ki(r){const o=String(r||"").toUpperCase();return o.startsWith("T")?"T":o.startsWith("L")?"L":o.startsWith("V")?"V":o.startsWith("I")?"I":o.startsWith("O")?"O":o.startsWith("E")?"E":""}function KL(r,o,s){const u=String(r||"").toUpperCase();if(!u)return"";const m=dr(s);return u==="T"?`T${(o-1)%m.trabajo+1}`:u==="L"?`L${(o-1)%m.libre+1}`:`${u}${o}`}function mr(r,o){return r.find(s=>s.nombre===o)}function Om(r,o,s,u,m){const f=mr(r,m);return f&&(o[BL(s,u,f.puestoOperativo||"Puesto Quetzales",m)]||f.modalidad)||"10x5"}function ga(r,o,s,u,m,f,v=null){const L=mr(r,m);if(!L)return"";const T=L.puestoOperativo||"Puesto Quetzales",V=t1(s,u,v);return o[Dm(s,u,T,m,f)]??UL(Om(r,o,s,u,m),f,V,s,u)}function $L({roleData:r,personas:o,year:s,month:u,persona:m,dia:f,categoria:v,feriados:L=null}){const T=mr(o,m),V=(T==null?void 0:T.puestoOperativo)||"Puesto Quetzales",y=Om(o,r,s,u,m),M=Array.from({length:Ud(s,u)},(J,R)=>R+1),x={};for(const J of M)x[J]=ki(ga(o,r,s,u,m,J,L));x[f]=v;const A=HL({days:M,categorias:x,modalidad:y}),j={};for(const J of M)j[Dm(s,u,V,m,J)]=A[J];return j}function eh(r,o){const s=dr(o);if(s.administrativo)return null;const u=String(r||"").toUpperCase(),m=/^T(\d+)$/.exec(u);if(m){const v=Number(m[1]);return v>=1&&v<=s.trabajo?v-1:null}const f=/^L(\d+)$/.exec(u);if(f){const v=Number(f[1]);return v>=1&&v<=s.libre?s.trabajo+v-1:null}return null}function qL(r,o){const s=dr(o),u=s.trabajo+s.libre,m=(r%u+u)%u|0;return m<s.trabajo?`T${m+1}`:`L${m-s.trabajo+1}`}function nh({modalidad:r,desde:o,hasta:s,posInicial:u=0}){const m=dr(r),f=[],v=new Date(s.year,s.month,s.day),L=new Date(o.year,o.month,o.day);let T=0;for(;L<=v;){const V=L.getFullYear(),y=L.getMonth(),M=L.getDate();let x;if(m.administrativo){const A=L.getDay();x=A>=1&&A<=5?`T${A}`:A===6?"L1":"L2"}else x=qL(u+T,r);f.push({year:V,month:y,day:M,valor:x}),L.setDate(L.getDate()+1),T+=1}return f}function wd(r){return String(r).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function th(r,o,s){if(!r)return null;const u=new RegExp(`^(\\d+)-(\\d+)-${wd(o)}-${wd(s)}-(\\d+)$`);let m=null,f=-1;for(const v of Object.keys(r)){const L=r[v];if(L==null||L==="")continue;const T=u.exec(v);if(!T)continue;const V=Number(T[1]),y=Number(T[2])-1,M=Number(T[3]),x=V*1e4+y*100+M;x>f&&(f=x,m={year:V,month:y,day:M})}return m}function HL({days:r,categorias:o,modalidad:s}){const u={};let m=null,f=0;return r.forEach(v=>{const L=o[v]||"";if(!L){m=null,f=0,u[v]="";return}L!==m?(m=L,f=1):f+=1,u[v]=KL(L,f,s)}),u}const ah=["Administrador de ASP","Guardaparques","Asistente Administrativo","Técnico en Recursos Naturales","Personal Apoyo ONG-Invest-Volunt"],rh=["Activo","Inactivo","De vacaciones","Incapacitado"],ih=["Propiedad","Interino","ONG-Invest-Volunt"],oh=["Horario administrativo L-V","10x5","12x6","14x7","16x8","20x10"],WL="Secretaría Ejecutiva/Dirección ACC";function ZL(r=Si){return[...Array.isArray(r)&&r.length?r:Si,WL]}const sh=[{id:"naranja-claro",clases:"bg-orange-100 text-orange-950"},{id:"naranja",clases:"bg-orange-700 text-white"},{id:"cielo",clases:"bg-sky-100 text-sky-950"},{id:"esmeralda",clases:"bg-emerald-100 text-emerald-950"},{id:"violeta",clases:"bg-violet-100 text-violet-950"},{id:"pizarra",clases:"bg-slate-200 text-slate-900"}],_i="Atención rutinaria de visitantes",XL=[_i];function Ri(r,o){return r.filter(s=>o>=s.inicio&&o<=(s.fin||s.inicio))}function cl(r){return String((r==null?void 0:r.titulo)||"").trim().toLowerCase()===_i.toLowerCase()}function ev(r){return(r==null?void 0:r.fin)||(r==null?void 0:r.inicio)||""}function lh(r=[],o){return o?r.filter(s=>(s==null?void 0:s.inicio)&&(s.funcionarios||[]).includes(o)).sort((s,u)=>String(s.inicio).localeCompare(String(u.inicio))):[]}const ch=["proximas","pasadas","todas"];function Fm(r,o){return ev(r)<String(o||"")}function uh(r=[],o,s="proximas"){if(s==="todas")return[...r];const u=s==="pasadas";return r.filter(m=>Fm(m,o)===u)}function dh(r=[],o){let s=0;for(const u of r)Fm(u,o)&&(s+=1);return{proximas:r.length-s,pasadas:s,todas:r.length}}const nv=366;function mh(r=[]){const o=new Map;for(const s of r||[]){if(!(s!=null&&s.inicio))continue;const u=s.funcionarios||[];if(u.length===0)continue;const m=s.fin||s.inicio;if(m<s.inicio)continue;const f=new Date(`${s.inicio}T00:00:00`),v=new Date(`${m}T00:00:00`);if(Number.isNaN(f.getTime())||Number.isNaN(v.getTime()))continue;const L=cl(s);let T=0;for(;f<=v&&T<nv;){const V=Oi(f);for(const y of u){const M=`${y}|${V}`,x=o.get(M);x?x.visit=x.visit||L:o.set(M,{visit:L})}f.setDate(f.getDate()+1),T+=1}}return o}function fh(r,o,s){return!!r&&r.has(`${o}|${s}`)}function ph(r,o,s){var u,m;return!!((m=(u=r==null?void 0:r.get)==null?void 0:u.call(r,`${o}|${s}`))!=null&&m.visit)}const tv=["Puesto Orosi","Puesto Quetzales"];function zm(r,o){return(o||tv).includes(r)}function av(r){return YL(r)}function rv(r,o,s){return Im(r)&&zm(o,s)}function iv({actividadesPlan:r=[],iso:o,personas:s=[],roleData:u={},year:m,month:f,dia:v,feriados:L=null,puestos:T=[],puestosRequieren:V}){var x;const y=Ri(r,o).filter(cl),M=new Map;for(const A of y)for(const j of A.funcionarios||[]){const J=(x=mr(s,j))==null?void 0:x.puestoOperativo;J&&(M.has(J)||M.set(J,new Set),M.get(J).add(j))}return T.map(A=>{const j=[...M.get(A)||[]],J=j.filter(w=>av(ga(s,u,m,f,w,v,L))),R=zm(A,V);return{puesto:A,requiere:R,asignados:j,presentes:J,critico:R&&J.length===0,soloRemoto:R&&j.length>0&&J.length===0}})}function ov({rol:r,tieneActividad:o,tieneVisit:s,puesto:u,puestosRequieren:m=null}){return o?Fi(r)?s?rv(r,u,m):!1:!0:!1}function sv(r,o,s,u,m,f,v=null,L=null){const T=cl(r);return(r.funcionarios||[]).filter(V=>{var M;const y=ga(m,f,s,u,V,o,v);return ov({rol:y,tieneActividad:!0,tieneVisit:T,puesto:(M=mr(m,V))==null?void 0:M.puestoOperativo,puestosRequieren:L})})}function lv({onSwipeLeft:r,onSwipeRight:o,threshold:s=60,restraint:u=80,allowedTime:m=600}={}){const f=C.useRef(null);return C.useEffect(()=>{const v=f.current;if(!v)return;let L=0,T=0,V=0,y=!1;const M=A=>{var R;const j=(R=A.changedTouches)==null?void 0:R[0];if(!j)return;const J=A.target instanceof Element?A.target:null;y=!!(J!=null&&J.closest('button, a, input, select, textarea, [role="button"], [data-swipe-ignore], table, .overflow-x-auto, .overflow-auto'))||j.clientX<24||j.clientX>window.innerWidth-24,L=j.clientX,T=j.clientY,V=Date.now()},x=A=>{var Y;const j=(Y=A.changedTouches)==null?void 0:Y[0];if(!j||y)return;const J=j.clientX-L,R=j.clientY-T;Date.now()-V>m||Math.abs(J)<s||Math.abs(R)>u||Math.abs(J)<=Math.abs(R)*1.2||(J<0?r==null||r():o==null||o())};return v.addEventListener("touchstart",M,{passive:!0}),v.addEventListener("touchend",x,{passive:!0}),()=>{v.removeEventListener("touchstart",M),v.removeEventListener("touchend",x)}},[r,o,s,u,m]),f}const Qm="(max-width: 767px)";function cv(){return typeof window>"u"||typeof window.matchMedia!="function"?!1:window.matchMedia(Qm).matches}function Jm(){const[r,o]=C.useState(cv);return C.useEffect(()=>{if(typeof window>"u"||typeof window.matchMedia!="function")return;const s=window.matchMedia(Qm),u=m=>o(m.matches);return o(s.matches),s.addEventListener?(s.addEventListener("change",u),()=>s.removeEventListener("change",u)):(s.addListener(u),()=>s.removeListener(u))},[]),r}const Bm={2025:[{fecha:"2025-01-01",nombre:"Año Nuevo",obligatorio:!0},{fecha:"2025-04-11",nombre:"Juan Santamaría (trasladado a viernes)",obligatorio:!0},{fecha:"2025-04-17",nombre:"Jueves Santo",obligatorio:!0},{fecha:"2025-04-18",nombre:"Viernes Santo",obligatorio:!0},{fecha:"2025-05-01",nombre:"Día del Trabajo",obligatorio:!0},{fecha:"2025-07-25",nombre:"Anexión del Partido de Nicoya",obligatorio:!1},{fecha:"2025-08-02",nombre:"Virgen de los Ángeles",obligatorio:!0},{fecha:"2025-08-15",nombre:"Día de la Madre",obligatorio:!0},{fecha:"2025-09-15",nombre:"Independencia",obligatorio:!0},{fecha:"2025-12-01",nombre:"Abolición del Ejército",obligatorio:!0},{fecha:"2025-12-25",nombre:"Navidad",obligatorio:!0}],2026:[{fecha:"2026-01-01",nombre:"Año Nuevo",obligatorio:!0},{fecha:"2026-04-02",nombre:"Jueves Santo",obligatorio:!0},{fecha:"2026-04-03",nombre:"Viernes Santo",obligatorio:!0},{fecha:"2026-04-13",nombre:"Juan Santamaría (trasladado a lunes)",obligatorio:!0},{fecha:"2026-05-01",nombre:"Día del Trabajo",obligatorio:!0},{fecha:"2026-07-27",nombre:"Anexión del Partido de Nicoya (trasladado)",obligatorio:!1},{fecha:"2026-08-02",nombre:"Virgen de los Ángeles",obligatorio:!0},{fecha:"2026-08-17",nombre:"Día de la Madre (trasladado a lunes)",obligatorio:!0},{fecha:"2026-09-14",nombre:"Independencia (trasladado a lunes)",obligatorio:!0},{fecha:"2026-11-30",nombre:"Abolición del Ejército (trasladado a lunes)",obligatorio:!0},{fecha:"2026-12-25",nombre:"Navidad",obligatorio:!0}],2027:[{fecha:"2027-01-01",nombre:"Año Nuevo",obligatorio:!0},{fecha:"2027-03-25",nombre:"Jueves Santo",obligatorio:!0},{fecha:"2027-03-26",nombre:"Viernes Santo",obligatorio:!0},{fecha:"2027-04-12",nombre:"Juan Santamaría (trasladado a lunes)",obligatorio:!0},{fecha:"2027-05-01",nombre:"Día del Trabajo",obligatorio:!0},{fecha:"2027-07-26",nombre:"Anexión del Partido de Nicoya (trasladado)",obligatorio:!1},{fecha:"2027-08-02",nombre:"Virgen de los Ángeles",obligatorio:!0},{fecha:"2027-08-16",nombre:"Día de la Madre (trasladado a lunes)",obligatorio:!0},{fecha:"2027-09-13",nombre:"Independencia (trasladado a lunes)",obligatorio:!0},{fecha:"2027-11-29",nombre:"Abolición del Ejército (trasladado a lunes)",obligatorio:!0},{fecha:"2027-12-25",nombre:"Navidad",obligatorio:!0}]};function uv(r,o=!1){const s=Bm[r]||[];return new Set(s.filter(u=>o||u.obligatorio).map(u=>u.fecha))}function Th(r){return Object.prototype.hasOwnProperty.call(Bm,String(r))}function dv(r,o){return o!=null&&o.aplicarFeriadosEnPrimerDiaLaboral?uv(r,!1):null}function ul(r){const{reglas:o}=Jt();return C.useMemo(()=>dv(r,o),[r,o])}function dl(r){const o=Number(r)||0;return Number.isInteger(o)?String(o):String(Math.round(o*100)/100)}function mv(r,o){return(r==null?void 0:r.magnitud)==="horas"?o("reposicion.horasN",{n:dl(r.horas)}):(r==null?void 0:r.magnitud)==="medioDia"?o("modalReposicion.magnitudMedioDia"):o("modalReposicion.magnitudDiaEntero")}function Lh(r,o){return(r==null?void 0:r.magnitud)==="horas"?o("reposicion.horasN",{n:dl(r.horas)}):(r==null?void 0:r.magnitud)==="medioDia"?o("reposicion.magnitudCorta.medioDia"):o("reposicion.magnitudCorta.diaEntero")}function Um(r,o=8){const s=Math.round((Number(r)||0)*100)/100;if(s<=0)return"0 h";const u=s/o;return Number.isInteger(u)?u===1?"1 día":`${u} días`:s===o/2?"½ día":`${dl(s)} h`}function fv({data:r,hj:o,cerrar:s,onModificarRol:u,onReposicion:m,onReponer:f,onEditarFecha:v}){Z1(s);const L=Sn(),{funcionario:T,iso:V,rol:y,saldo:M=0}=r,x=({onClick:A,tono:j,titulo:J,desc:R})=>c.jsxs("button",{type:"button",onClick:A,className:`min-h-touch w-full rounded-2xl border px-4 py-3 text-left shadow-sm hover:brightness-95 ${j}`,children:[c.jsx("span",{className:"block text-sm font-semibold",children:J}),c.jsx("span",{className:"mt-0.5 block text-xs opacity-80",children:R})]});return c.jsx("div",{className:"fixed inset-0 z-[60] flex items-end justify-center bg-black/50 p-0 backdrop-blur-sm md:items-center md:p-4",onClick:A=>{A.target===A.currentTarget&&s()},children:c.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":L("asignacionLibre.titulo"),className:"w-full max-w-lg overflow-hidden rounded-t-3xl bg-white shadow-2xl md:rounded-3xl",children:[c.jsxs("div",{className:"flex items-start justify-between gap-3 border-b border-slate-200 p-5",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"text-lg font-semibold",children:L("asignacionLibre.titulo")}),c.jsx("p",{className:"text-sm text-slate-600",children:L("asignacionLibre.sub",{funcionario:T,fecha:tt(V),rol:GL(y)})})]}),c.jsx("button",{onClick:s,"aria-label":L("acciones.cerrar"),className:"-mr-1 inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl text-lg font-semibold text-slate-500 hover:bg-slate-100 hover:text-slate-700",children:"✕"})]}),c.jsxs("div",{className:"space-y-2 p-5",children:[c.jsx(x,{onClick:u,tono:"border-emerald-300 bg-emerald-50 text-emerald-950",titulo:L("asignacionLibre.modificarRol"),desc:L("asignacionLibre.modificarRolDesc")}),c.jsx(x,{onClick:m,tono:"border-amber-300 bg-amber-50 text-amber-950",titulo:L("asignacionLibre.reposicion"),desc:L("asignacionLibre.reposicionDesc")}),M>0&&c.jsx(x,{onClick:f,tono:"border-sky-300 bg-sky-50 text-sky-950",titulo:L("asignacionLibre.reponer",{saldo:Um(M,o)}),desc:L("asignacionLibre.reponerDesc")}),c.jsx(x,{onClick:v,tono:"border-slate-300 bg-slate-50 text-slate-800",titulo:L("asignacionLibre.editarFecha"),desc:L("asignacionLibre.editarFechaDesc")})]}),c.jsx("div",{className:"flex justify-end border-t border-slate-200 bg-slate-50 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]",children:c.jsx("button",{onClick:s,className:"min-h-touch rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50",children:L("acciones.cancelar")})})]})})}function pv({participantes:r=[],onChange:o,inputClass:s}){const u=(v,L,T)=>{o(r.map((V,y)=>y===v?{...V,[L]:T}:V))},m=()=>o([...r,{nombre:"",contacto:""}]),f=v=>o(r.filter((L,T)=>T!==v));return c.jsxs("section",{className:"mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-3",children:[c.jsxs("div",{className:"flex items-center justify-between gap-3",children:[c.jsxs("div",{children:[c.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-slate-600",children:"Otros participantes"}),c.jsx("p",{className:"mt-1 text-xs text-slate-500",children:"Personas, organizaciones o grupos que no figuran en el rol institucional."})]}),c.jsx("button",{type:"button",onClick:m,className:"inline-flex min-h-touch shrink-0 items-center rounded-xl border border-emerald-700 bg-white px-3 text-xs font-bold text-emerald-800 hover:bg-emerald-50",children:"+ Agregar"})]}),r.length===0?c.jsx("p",{className:"mt-3 text-xs text-slate-500",children:"Sin participantes externos registrados."}):c.jsx("div",{className:"mt-3 space-y-2",children:r.map((v,L)=>c.jsxs("div",{className:"grid gap-2 rounded-xl border border-slate-200 bg-white p-2 md:grid-cols-[1fr_1fr_auto]",children:[c.jsx("input",{className:s,value:v.nombre||"",onChange:T=>u(L,"nombre",T.target.value),placeholder:"Nombre, sigla o grupo","aria-label":`Nombre de otro participante ${L+1}`}),c.jsx("input",{className:s,value:v.contacto||"",onChange:T=>u(L,"contacto",T.target.value),placeholder:"Contacto: teléfono o correo","aria-label":`Contacto de otro participante ${L+1}`}),c.jsx("button",{type:"button",onClick:()=>f(L),className:"inline-flex min-h-touch items-center rounded-xl border border-red-300 px-3 text-xs font-bold text-red-800 hover:bg-red-50",children:"Eliminar"})]},`${L}-${v.nombre}`))})]})}function Ws({valor:r,personas:o,cerrar:s,guardar:u,eliminar:m,actividadesPlan:f=[]}){var rn,Gn,nn;const{puestos:v}=Jt(),L=C.useMemo(()=>v.map(k=>k.nombre),[v]),{ref:T,titleId:V}=Am({onClose:s}),y=Sn(),{roleData:M={},setRoleData:x,reposiciones:A=[],setReposiciones:j,reglas:J}=Jt(),R=(J==null?void 0:J.horasJornada)??vn,[w,Y]=C.useState(()=>({...r,categoria:r.categoria||"Otra actividad",horaInicio:r.horaInicio||"08:00",horaFin:r.horaFin||"16:00",funcionarios:r.funcionarios||[],otrosParticipantes:r.otrosParticipantes||[],observaciones:r.observaciones||""})),[ie,Z]=C.useState(null),[fe,le]=C.useState(!1),ae=(k,Ee)=>Y(we=>({...we,[k]:Ee})),he=Number((rn=w.inicio)==null?void 0:rn.slice(0,4)),ue=Number((Gn=w.inicio)==null?void 0:Gn.slice(5,7))-1,pe=Number((nn=w.inicio)==null?void 0:nn.slice(8,10)),xe=ul(he),ge=k=>w.inicio&&Number.isFinite(he)?ga(o,M,he,ue,k,pe,xe):"",ye=k=>{const Ee=ge(k);return Ee&&!Fi(Ee)},Ve=k=>MT(A,k,R),oe="w-full min-h-touch rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100",Te=L.map(k=>({puesto:k,items:o.filter(Ee=>Ee.puestoOperativo===k)})),me=C.useMemo(()=>ZL(L),[L]),z=me.includes(w.lugar)?w.lugar:"Otro",H=f.some(k=>k.id===w.id),U=w.unDia?w.inicio:w.fin||w.inicio,P=k=>k.id!==w.id&&k.inicio<=U&&(k.fin||k.inicio)>=w.inicio,_=k=>f.filter(Ee=>P(Ee)&&(Ee.funcionarios||[]).includes(k)),re=k=>{w.funcionarios.includes(k)||ae("funcionarios",[...w.funcionarios,k])},de=k=>ae("funcionarios",w.funcionarios.filter(Ee=>Ee!==k)),B=k=>{if(w.funcionarios.includes(k))return de(k);if(ye(k)){Z({funcionario:k,iso:w.inicio,rol:ge(k),categoria:ki(ge(k)),saldo:Ve(k)});return}return re(k)},X=()=>{const{funcionario:k}=ie;x&&x(Ee=>({...Ee,...$L({roleData:Ee,personas:o,year:he,month:ue,persona:k,dia:pe,categoria:"T",feriados:xe})})),re(k),Z(null)},Pe=()=>{const{funcionario:k,categoria:Ee}=ie;j&&j(we=>[CT({reposiciones:we,funcionario:k,fecha:w.inicio,categoria:Ee,detalle:w.titulo||""}),...we]),re(k),Z(null)},ve=()=>{const{funcionario:k}=ie;if(j){const Ee={id:`c${Date.now()}`,fecha:w.inicio,magnitud:"diaEntero",horas:0};j(we=>xT(we,k,Ee,R))}de(k),Z(null)},Me=y(H?"modalActividad.editar":"modalActividad.agregar"),Qe=()=>u({...w,categoria:"Otra actividad",horaInicio:w.horaInicio||"08:00",horaFin:w.horaFin||"16:00",otrosParticipantes:(w.otrosParticipantes||[]).filter(k=>{var Ee;return(Ee=k.nombre)==null?void 0:Ee.trim()}).map(k=>({nombre:k.nombre.trim(),contacto:(k.contacto||"").trim()}))});return c.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-0 backdrop-blur-sm md:items-center md:p-4",onClick:k=>{k.target===k.currentTarget&&s()},children:[c.jsxs("div",{ref:T,role:"dialog","aria-modal":"true","aria-labelledby":V,tabIndex:-1,className:"max-h-[100dvh] w-full max-w-4xl overflow-hidden rounded-none bg-white shadow-2xl outline-none md:max-h-[94dvh] md:rounded-3xl",children:[c.jsxs("div",{className:"flex items-start justify-between gap-3 border-b border-slate-200 p-5",children:[c.jsxs("div",{children:[c.jsx("h3",{id:V,className:"text-lg font-semibold",children:Me}),c.jsx("p",{className:"text-sm text-slate-600",children:y("modalActividad.sub")})]}),c.jsx("button",{onClick:s,"aria-label":y("acciones.cerrar"),className:"-mr-1 inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl text-lg font-semibold text-slate-500 hover:bg-slate-100 hover:text-slate-700",children:"✕"})]}),c.jsxs("div",{className:"max-h-[72vh] overflow-y-auto p-5",children:[w.funcionarios.filter(k=>ye(k)).length>0&&c.jsxs("div",{className:"mb-4 rounded-2xl border border-amber-300 bg-amber-50 p-3",children:[c.jsx("p",{className:"text-xs font-bold uppercase tracking-wider text-amber-800",children:y("modalActividad.libresAsignados")}),c.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:w.funcionarios.filter(k=>ye(k)).map(k=>c.jsxs("button",{type:"button",onClick:()=>Z({funcionario:k,iso:w.inicio,rol:ge(k),categoria:ki(ge(k)),saldo:Ve(k)}),className:"inline-flex min-h-touch items-center gap-1 rounded-xl border border-amber-400 bg-white px-3 text-xs font-bold text-amber-900 hover:bg-amber-100",children:[k," · ",y("modalActividad.resolver")]},k))})]}),c.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[c.jsxs("label",{className:"md:col-span-2",children:[c.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:y("modalActividad.titulo")}),c.jsxs("div",{className:"grid gap-2 md:grid-cols-[260px_1fr]",children:[c.jsxs("select",{className:oe,value:w.titulo===_i?_i:"Otra",onChange:k=>ae("titulo",k.target.value==="Otra"?"":k.target.value),children:[XL.map(k=>c.jsx("option",{value:k,children:k},k)),c.jsx("option",{value:"Otra",children:y("modalActividad.otra")})]}),c.jsx("input",{className:oe,value:w.titulo,onChange:k=>ae("titulo",k.target.value),placeholder:y("modalActividad.placeholderTitulo")})]})]}),c.jsxs("label",{children:[c.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:"Categoría"}),c.jsx("input",{className:oe+" bg-slate-100",value:"Otra actividad",readOnly:!0})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[c.jsxs("label",{children:[c.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:"Hora inicio"}),c.jsx("input",{type:"time",className:oe,value:w.horaInicio,onChange:k=>ae("horaInicio",k.target.value)})]}),c.jsxs("label",{children:[c.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:"Hora final"}),c.jsx("input",{type:"time",className:oe,value:w.horaFin,onChange:k=>ae("horaFin",k.target.value)})]})]}),c.jsxs("label",{children:[c.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:y("modalActividad.fechaInicio")}),c.jsx("input",{type:"date",className:oe+" [color-scheme:light] dark:[color-scheme:dark]",value:w.inicio,onChange:k=>ae("inicio",k.target.value)})]}),c.jsxs("label",{children:[c.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:y("modalActividad.fechaFinal")}),c.jsx("input",{type:"date",className:oe+" [color-scheme:light] dark:[color-scheme:dark]",value:w.unDia?w.inicio:w.fin,disabled:w.unDia,onChange:k=>ae("fin",k.target.value)})]}),c.jsxs("label",{className:"flex items-center gap-2 rounded-xl border border-slate-300 p-3 text-sm font-semibold",children:[c.jsx("input",{type:"checkbox",checked:w.unDia,onChange:k=>Y(Ee=>({...Ee,unDia:k.target.checked,fin:k.target.checked?Ee.inicio:Ee.fin}))}),y("modalActividad.unDia")]}),c.jsxs("label",{className:"flex items-center gap-2 rounded-xl border border-orange-300 bg-orange-50 p-3 text-sm font-semibold text-orange-950",children:[c.jsx("input",{type:"checkbox",checked:w.viatico,onChange:k=>ae("viatico",k.target.checked)}),y("modalActividad.requiereViatico")]}),c.jsxs("label",{className:"md:col-span-2",children:[c.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:y("modalActividad.lugar")}),c.jsxs("div",{className:"grid gap-2",children:[c.jsxs("select",{className:oe,value:z,onChange:k=>ae("lugar",k.target.value==="Otro"?"":k.target.value),children:[me.map(k=>c.jsx("option",{value:k,children:k},k)),c.jsx("option",{value:"Otro",children:y("modalActividad.otro")})]}),z==="Otro"&&c.jsx("input",{className:oe,value:w.lugar,onChange:k=>ae("lugar",k.target.value),placeholder:y("modalActividad.placeholderLugar")})]})]})]}),c.jsxs("div",{className:"mt-5",children:[c.jsxs("div",{className:"mb-2 flex flex-wrap items-center justify-between gap-2",children:[c.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-slate-500",children:y("modalActividad.participantes")}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsxs("label",{className:"flex items-center gap-1.5 rounded-full border border-sky-300 bg-sky-50 px-2.5 py-1 text-[11px] font-bold text-sky-900",children:[c.jsx("input",{type:"checkbox",checked:fe,onChange:k=>le(k.target.checked)}),y("modalActividad.soloSaldo")]}),c.jsx(Nt,{className:"border-emerald-200 bg-emerald-100 text-emerald-900",children:y("modalActividad.seleccionados",{n:w.funcionarios.length})})]})]}),c.jsx("div",{className:"grid gap-3 md:grid-cols-3",children:Te.map(k=>{const Ee=fe?k.items.filter(we=>Ve(we.nombre)>0):k.items;return fe&&Ee.length===0?null:c.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-slate-50 p-3",children:[c.jsx("div",{className:"mb-2 text-xs font-bold uppercase tracking-wider text-slate-500",children:k.puesto}),c.jsx("div",{className:"space-y-1.5",children:Ee.map(we=>{const bn=_(we.nombre),Vn=w.funcionarios.includes(we.nombre);return c.jsxs("div",{className:`rounded-xl border px-2 py-2 text-xs font-bold ${Vn?"border-emerald-300 bg-emerald-100 text-emerald-950":bn.length?"border-yellow-300 bg-yellow-50 text-yellow-950":"border-slate-200 bg-white text-slate-700"}`,children:[c.jsxs("label",{className:"flex items-center gap-2",children:[c.jsx("input",{type:"checkbox",checked:Vn,onChange:()=>B(we.nombre)}),we.nombre]}),(ye(we.nombre)||Ve(we.nombre)>0)&&c.jsxs("div",{className:"mt-1 flex flex-wrap gap-1",children:[!Vn&&ye(we.nombre)&&c.jsx("span",{className:"rounded-full border border-amber-300 bg-amber-100 px-1.5 py-0.5 text-[10px] font-bold text-amber-900",children:y("modalActividad.diaLibre")}),Ve(we.nombre)>0&&c.jsx("span",{className:"rounded-full border border-sky-300 bg-sky-100 px-1.5 py-0.5 text-[10px] font-bold text-sky-900",children:y("modalActividad.saldoFavorMonto",{saldo:Um(Ve(we.nombre),R)})})]}),bn.length>0&&c.jsxs("div",{className:"mt-2 rounded-lg border border-yellow-300 bg-yellow-100 p-2 text-[11px] leading-snug text-yellow-950",children:[c.jsx("div",{className:"font-bold",children:y("modalActividad.avisoTraslape")}),c.jsx("div",{className:"mt-1 font-bold",children:bn.map(St=>St.titulo).join(" · ")}),c.jsx("button",{type:"button",onClick:()=>re(we.nombre),className:"mt-2 inline-flex min-h-touch items-center rounded-lg bg-yellow-700 px-3 text-[10px] font-bold text-white hover:bg-yellow-800",children:y("modalActividad.agregarAunAsi")})]})]},we.id)})})]},k.puesto)})})]}),c.jsx(pv,{participantes:w.otrosParticipantes,onChange:k=>ae("otrosParticipantes",k),inputClass:oe}),c.jsxs("label",{className:"mt-5 block",children:[c.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500",children:y("modalActividad.obs")}),c.jsx("textarea",{className:`${oe} min-h-24`,value:w.observaciones,onChange:k=>ae("observaciones",k.target.value),placeholder:y("modalActividad.placeholderObs")})]})]}),c.jsxs("div",{className:"flex flex-wrap justify-between gap-2 border-t border-slate-200 bg-slate-50 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]",children:[c.jsx("div",{children:H&&c.jsx("button",{onClick:()=>m(w.id),className:"min-h-touch rounded-xl border border-red-300 bg-white px-4 py-2 text-sm font-semibold text-red-800 hover:bg-red-50",children:y("acciones.eliminar")})}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("button",{onClick:s,className:"min-h-touch rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50",children:y("acciones.cancelar")}),c.jsx("button",{onClick:Qe,className:"min-h-touch rounded-xl bg-emerald-800 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700",children:y("modalActividad.guardarActividad")})]})]})]}),ie&&c.jsx(fv,{data:ie,hj:R,cerrar:()=>Z(null),onModificarRol:X,onReposicion:Pe,onReponer:ve,onEditarFecha:()=>Z(null)})]})}function Tv(r,o,s){if(!Array.isArray(r)||!o||o.id==null||r.some(f=>(f==null?void 0:f.id)===o.id))return r;const u=Number.isInteger(s)?s:r.length,m=Math.max(0,Math.min(u,r.length));return[...r.slice(0,m),o,...r.slice(m)]}function Ym(r,o){const s=Sn(),{conDeshacer:u,exito:m}=$d();return C.useCallback(f=>{const v=r||[],L=v.findIndex(y=>y.id===f);if(L<0)return;const T=v[L],V=String(T.titulo||"").trim()||s("actividad.sinTitulo");o(y=>y.filter(M=>M.id!==f)),u(s("actividad.eliminada",{titulo:V}),()=>{o(y=>Tv(y,T,L)),m(s("actividad.restaurada",{titulo:V}))},{detalle:s("actividad.eliminadaDetalle")})},[r,o,u,m,s])}function xi({label:r}){const[o,...s]=String(r).split(" ");return s.length===0?r:c.jsxs(c.Fragment,{children:[o,c.jsx("br",{className:"sm:hidden"}),c.jsx("span",{className:"hidden sm:inline",children:" "}),s.join(" ")]})}function Js({label:r,n:o,children:s,defaultOpen:u=!1}){const[m,f]=C.useState(u);return c.jsxs("div",{children:[c.jsxs("button",{type:"button",onClick:()=>f(v=>!v),"aria-expanded":m,className:"mb-1.5 flex min-h-touch w-full items-center gap-2 text-left active:scale-95",children:[c.jsx(He,{name:m?"chevronDown":"chevronRight",size:14,className:"shrink-0 text-ink-subtle"}),c.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider text-ink-muted",children:r}),c.jsx("span",{className:"rounded-full bg-surface-alt px-2 py-0.5 text-[10px] font-semibold text-ink-muted",children:o}),c.jsx("span",{className:"h-px flex-1 bg-line/50"})]}),m&&s]})}function Bs({trabajada:r,reposicion:o,t:s}){return!r&&!o?null:c.jsxs(c.Fragment,{children:[r&&c.jsxs(Nt,{className:"border-amber-300 bg-amber-100 text-amber-900",children:["⚑ ",r.folio," · ",mv(r,s)," · ",s(`reposicion.estado.${r.estadoCalc||"Pendiente"}`).toLowerCase()]}),o&&c.jsxs(Nt,{className:"border-sky-300 bg-sky-100 text-sky-900",children:["⟲ ",o.folio," · ",s("reposicion.marca.reposicionDe",{fecha:tt(o.fecha)})]})]})}function Lv({diaVista:r,setDiaVista:o,personas:s,actividadesPlan:u,setActividadesPlan:m,roleData:f,reposiciones:v=[],hj:L}){const T=Sn(),V=Jm(),{puestos:y,reglas:M}=Jt(),x=M==null?void 0:M.puestosRequierenVisitantesDiario,A=C.useMemo(()=>y.map(S=>S.nombre),[y]),{trabajadas:j,reposiciones:J}=hT(v,L),R=S=>({trabajada:j[`${S}|${r}`],reposicion:J[`${S}|${r}`]}),[w,Y]=C.useState(null),[ie,Z]=C.useState("general"),[fe,le]=C.useState(""),[ae,he,ue]=r.split("-").map(Number),pe=he-1,xe=ul(ae),ge=s.filter(S=>S.estado!=="Inactivo"),ye=[0,6].includes(new Date(r+"T12:00:00").getDay()),Ve=q1[new Date(r+"T12:00:00").getDay()],oe=ge.map(S=>{const O=ga(s,f,ae,pe,S.nombre,ue,xe),ee=ki(O),Se=Fi(O),hn=Im(O),gn=Ri(u,r).filter(rt=>(rt.funcionarios||[]).includes(S.nombre));return{...S,rol:O,cat:ee,enTurno:Se,enTeletrabajo:hn,acts:gn,tieneActividad:gn.length>0,tieneViatico:gn.some(rt=>rt.viatico)}}),Te=oe.filter(S=>S.enTurno&&S.tieneActividad),me=oe.filter(S=>S.enTurno&&!S.tieneActividad),z=oe.filter(S=>!S.enTurno),H=oe.filter(S=>S.tieneViatico),U=(S,O)=>String(S||"").localeCompare(String(O||""),"es-CR",{sensitivity:"base"}),P=new Map(ge.map(S=>[S.nombre,S])),_=Ri(u,r).map(S=>({...S,funcionarios:[...S.funcionarios||[]].sort(U)})).sort((S,O)=>U(S.funcionarios[0]||"￿",O.funcionarios[0]||"￿")||U(S.titulo,O.titulo)),re=[...new Set(_.flatMap(S=>S.funcionarios))].sort(U),de=[...new Set(re.map(S=>{var O;return(O=P.get(S))==null?void 0:O.puestoOperativo}).filter(Boolean))].sort(U),B=new Set(oe.filter(S=>S.enTeletrabajo).map(S=>S.nombre)),X=ie==="funcionario"?re:ie==="puesto"?de:ie==="trabajo"?[T("dia.filtroActividades.presencial"),T("dia.filtroActividades.teletrabajo")]:[],Pe=X.includes(fe)?fe:X[0]||"",ve=_.filter(S=>{if(ie==="trabajo"){const O=S.funcionarios.some(ee=>B.has(ee));return Pe===T("dia.filtroActividades.teletrabajo")?O:!O}return ie==="funcionario"?S.funcionarios.includes(Pe):ie==="puesto"?S.funcionarios.some(O=>{var ee;return((ee=P.get(O))==null?void 0:ee.puestoOperativo)===Pe}):!0}),Me=C.useMemo(()=>iv({actividadesPlan:u,iso:r,personas:s,roleData:f,year:ae,month:pe,dia:ue,feriados:xe,puestos:A,puestosRequieren:x}),[u,r,s,f,ae,pe,ue,xe,A,x]),Qe=C.useMemo(()=>new Map(Me.map(S=>[S.puesto,S])),[Me]),rn=C.useMemo(()=>Me.filter(S=>S.critico),[Me]),Gn=A.map(S=>{const O=oe.filter(Se=>(Se.puestoOperativo||"")===S),ee=O.filter(Se=>Se.enTurno);return{puesto:S,fuera:O.length-ee.length,turno:ee.length,conActividad:ee.filter(Se=>Se.tieneActividad).length,sinActividad:ee.filter(Se=>!Se.tieneActividad).length,teletrabajo:ee.filter(Se=>Se.enTeletrabajo).length}}),nn=Gn.reduce((S,O)=>({fuera:S.fuera+O.fuera,turno:S.turno+O.turno,conActividad:S.conActividad+O.conActividad,sinActividad:S.sinActividad+O.sinActividad,teletrabajo:S.teletrabajo+O.teletrabajo}),{fuera:0,turno:0,conActividad:0,sinActividad:0,teletrabajo:0}),k={L:"Libre",V:"Vacaciones",I:"Incapacidad",O:"Otro","":"Sin marcar"},Ee={L:"border-amber-700 bg-amber-700 text-white",V:"border-sky-700 bg-sky-700 text-white",I:"border-red-700 bg-red-700 text-white",O:"border-violet-700 bg-violet-700 text-white","":"border-slate-500 bg-slate-500 text-white"},we=z.reduce((S,O)=>{const ee=O.cat||"";return S[ee]||(S[ee]=[]),S[ee].push(O),S},{}),bn=S=>{const O=A.map(Se=>({key:Se,label:Se.replace("Puesto ",""),items:S.filter(hn=>(hn.puestoOperativo||"")===Se)})),ee=S.filter(Se=>!A.includes(Se.puestoOperativo||""));return ee.length&&O.push({key:"__sin__",label:T("funcionarios.sinPuesto"),items:ee}),O.filter(Se=>Se.items.length>0)},Vn=S=>{const O=new Date(r+"T12:00:00");O.setDate(O.getDate()+S),o(`${O.getFullYear()}-${Un(O.getMonth()+1)}-${Un(O.getDate())}`)},St=S=>{if(!S.titulo.trim())return;const O={...S,fin:S.unDia?S.inicio:S.fin||S.inicio};O.fin<O.inicio&&(O.fin=O.inicio),m(ee=>ee.some(Se=>Se.id===O.id)?ee.map(Se=>Se.id===O.id?O:Se):[...ee,O]),Y(null)},bt=Ym(u,m),at=S=>{Y(null),bt(S)},Ut=(S=[],O="")=>({id:`a${Date.now()}`,titulo:"",inicio:r,fin:r,unDia:!0,funcionarios:S,lugar:O,observaciones:"",viatico:!1}),fr=lv({onSwipeLeft:()=>Vn(1),onSwipeRight:()=>Vn(-1)}),pr=w&&u.some(S=>S.id===w.id)?T("dia.editarActividad",{defaultValue:"Editar actividad"}):T("dia.nuevaActividad",{defaultValue:"Nueva actividad"}),Pa=w?c.jsx(Ws,{valor:w,personas:ge,cerrar:()=>Y(null),guardar:St,eliminar:at,actividadesPlan:u}):null;return c.jsxs("section",{ref:fr,className:"space-y-4",children:[c.jsxs("div",{className:"flex items-center gap-2 rounded-lg border border-line bg-surface p-2 sm:gap-3 sm:p-3",children:[c.jsx("button",{onClick:()=>Vn(-1),"aria-label":T("dia.diaAnterior"),className:"inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl border border-line bg-surface text-ink-muted transition-colors hover:bg-surface-alt active:scale-95",children:c.jsx(He,{name:"chevronLeft",size:20})}),c.jsxs("div",{className:"flex min-w-0 flex-1 flex-col items-center gap-0.5",children:[c.jsxs("span",{className:"truncate text-[10px] font-semibold uppercase tracking-wider text-ink-muted sm:text-xs",children:[Ve," · ",Sm[pe]," ",ae]}),c.jsx("input",{type:"date",value:r,onChange:S=>S.target.value&&o(S.target.value),"aria-label":T("dia.seleccionarFecha"),className:"min-h-touch w-full max-w-[13rem] rounded-xl border border-line bg-surface px-2 py-1 text-center text-sm font-semibold text-ink outline-none focus:border-brand [color-scheme:light] dark:[color-scheme:dark]"})]}),c.jsx("button",{onClick:()=>Vn(1),"aria-label":T("dia.diaSiguiente"),className:"inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl border border-line bg-surface text-ink-muted transition-colors hover:bg-surface-alt active:scale-95",children:c.jsx(He,{name:"chevronRight",size:20})})]}),c.jsxs("div",{className:"grid gap-4 md:grid-cols-[minmax(19rem,0.85fr)_minmax(0,1.25fr)] md:items-start xl:grid-cols-[minmax(24rem,0.8fr)_minmax(0,1.4fr)]",children:[c.jsxs(Ta,{title:T("dia.porPuesto"),icon:"📍",children:[rn.length>0&&c.jsxs("div",{role:"alert",className:"mb-3 rounded-xl border border-critical bg-critical-soft p-3",children:[c.jsxs("p",{className:"flex items-center gap-2 text-sm font-bold text-critical-fg",children:[c.jsx(He,{name:"danger",size:16}),T("dia.coberturaCritica",{n:rn.length})]}),c.jsx("ul",{className:"mt-1 space-y-0.5 text-xs font-semibold text-critical-fg",children:rn.map(S=>c.jsx("li",{children:S.soloRemoto?T("dia.coberturaCriticaRemoto",{puesto:S.puesto.replace("Puesto ",""),n:S.asignados.length}):T("dia.coberturaCriticaSinNadie",{puesto:S.puesto.replace("Puesto ","")})},S.puesto))}),c.jsx("p",{className:"mt-1 text-[11px] font-medium text-critical-fg opacity-90",children:T("dia.coberturaCriticaAyuda")})]}),c.jsx("div",{className:"overflow-hidden rounded-lg border border-line",children:c.jsxs("table",{className:"w-full table-fixed border-collapse text-sm",children:[c.jsx("thead",{className:"bg-surface-alt text-[9px] uppercase leading-[1.15] tracking-tight text-ink-muted sm:text-[11px] sm:tracking-wide",children:c.jsxs("tr",{children:[c.jsx("th",{scope:"col",className:"w-[26%] px-1.5 py-2 text-left sm:px-3 sm:py-3",children:T("dia.th.puesto")}),c.jsx("th",{scope:"col",className:"px-0 py-2 text-center sm:px-3 sm:py-3",children:c.jsx(xi,{label:T("dia.th.fuera")})}),c.jsx("th",{scope:"col",className:"px-0 py-2 text-center sm:px-3 sm:py-3",children:c.jsx(xi,{label:T("dia.th.enTurno")})}),c.jsx("th",{scope:"col",className:"px-0 py-2 text-center sm:px-3 sm:py-3",children:c.jsx(xi,{label:T("dia.th.conActividad")})}),c.jsx("th",{scope:"col",className:"px-0 py-2 text-center sm:px-3 sm:py-3",children:c.jsx(xi,{label:T("dia.th.sinActividad")})})]})}),c.jsx("tbody",{className:"divide-y divide-line",children:Gn.map(({puesto:S,fuera:O,turno:ee,conActividad:Se,sinActividad:hn})=>{var gn,rt;return c.jsxs("tr",{className:"hover:bg-surface-alt",children:[c.jsxs("th",{scope:"row",className:`px-1.5 py-2 text-left text-[11px] font-semibold sm:px-3 sm:py-3 sm:text-sm ${(gn=Qe.get(S))!=null&&gn.critico?"border-l-4 border-l-critical bg-critical-soft/40 font-bold text-critical-fg":"text-ink"}`,children:[S.replace("Puesto ",""),((rt=Qe.get(S))==null?void 0:rt.critico)&&c.jsxs("span",{className:"sr-only",children:[" ",T("dia.coberturaCriticaAria",{puesto:S.replace("Puesto ","")})]})]}),c.jsx("td",{className:`px-1 py-2 text-center text-base font-semibold sm:px-3 sm:py-3 sm:text-lg ${O>0?"text-ink-muted":"text-ink-subtle"}`,children:O}),c.jsx("td",{className:"px-1 py-2 text-center text-base font-semibold text-ok sm:px-3 sm:py-3 sm:text-lg",children:ee}),c.jsx("td",{className:"px-1 py-2 text-center text-base font-semibold text-info sm:px-3 sm:py-3 sm:text-lg",children:Se}),c.jsx("td",{className:`px-1 py-2 text-center text-base font-semibold sm:px-3 sm:py-3 sm:text-lg ${hn>0?"text-warning":"text-ink-subtle"}`,children:hn})]},S)})}),c.jsx("tfoot",{children:c.jsxs("tr",{className:"border-t-2 border-line-strong bg-surface-alt",children:[c.jsx("th",{scope:"row",className:"px-1.5 py-2 text-left text-[11px] font-bold text-ink sm:px-3 sm:py-3 sm:text-sm",children:T("dia.th.total")}),c.jsx("td",{className:"px-1 py-2 text-center text-base font-bold text-ink-muted sm:px-3 sm:py-3 sm:text-lg",children:nn.fuera}),c.jsx("td",{className:"px-1 py-2 text-center text-base font-bold text-ok sm:px-3 sm:py-3 sm:text-lg",children:nn.turno}),c.jsx("td",{className:"px-1 py-2 text-center text-base font-bold text-info sm:px-3 sm:py-3 sm:text-lg",children:nn.conActividad}),c.jsx("td",{className:`px-1 py-2 text-center text-base font-bold sm:px-3 sm:py-3 sm:text-lg ${nn.sinActividad>0?"text-warning":"text-ink-subtle"}`,children:nn.sinActividad})]})})]})}),nn.teletrabajo>0&&c.jsx("p",{className:"mt-2 rounded-xl border border-cyan-300 bg-cyan-50 p-2 text-xs font-semibold text-cyan-950",children:T("dia.teletrabajoResumen",{n:nn.teletrabajo})})]}),c.jsxs(Ta,{title:T("dia.actividadesTituloCorto",{n:_.length}),ariaLabel:T("dia.actividadesTitulo",{n:_.length}),icon:"🗓️",collapsible:!0,action:c.jsxs("button",{id:"dia-boton-nueva-actividad",onClick:()=>Y(Ut()),className:"inline-flex min-h-touch items-center gap-1 rounded-xl bg-emerald-800 px-3 py-2 text-xs font-semibold text-white transition-all hover:bg-emerald-700 active:scale-95 active:brightness-90",children:[c.jsx(He,{name:"plus",size:14}),T("dia.nuevaCorta")]}),children:[c.jsxs("div",{className:"mb-4 rounded-xl border border-line bg-surface-inset p-3",children:[c.jsx("div",{className:"mb-2 text-xs font-bold uppercase tracking-wide text-ink-muted",children:T("dia.filtroActividades.mostrar")}),c.jsx("div",{role:"group","aria-label":T("dia.filtroActividades.aria"),className:"grid grid-cols-2 gap-1 rounded-xl bg-surface-alt p-1 sm:grid-cols-4",children:[["general",T("dia.filtroActividades.general")],["trabajo",T("dia.filtroActividades.trabajo")],["funcionario",T("dia.filtroActividades.funcionario")],["puesto",T("dia.filtroActividades.puesto")]].map(([S,O])=>c.jsx("button",{type:"button","aria-pressed":ie===S,onClick:()=>{Z(S),le("")},className:`min-h-touch rounded-lg px-2 py-2 text-xs font-semibold transition-colors sm:text-sm ${ie===S?"bg-surface text-brand shadow-sm":"text-ink-muted hover:bg-surface hover:text-ink"}`,children:O},S))}),ie!=="general"&&c.jsxs("label",{className:"mt-3 block text-xs font-semibold text-ink-muted",children:[T(ie==="funcionario"?"dia.filtroActividades.seleccionarFuncionario":"dia.filtroActividades.seleccionarPuesto"),c.jsx("select",{value:Pe,onChange:S=>le(S.target.value),className:"mt-1 min-h-touch w-full rounded-xl border border-line bg-surface px-3 text-sm font-semibold text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20",children:X.map(S=>c.jsx("option",{value:S,children:ie==="puesto"?S.replace("Puesto ",""):S},S))})]}),c.jsx("div",{"aria-live":"polite",className:"mt-2 text-xs text-ink-muted",children:T("dia.filtroActividades.resultados",{n:ve.length,total:_.length})})]}),ve.length===0?c.jsx("div",{className:"rounded-xl border border-dashed border-line p-6 text-center text-sm text-ink-muted",children:T("dia.sinActividades")}):c.jsx("div",{className:"space-y-3",children:ve.map(S=>{const O=sv(S,ue,ae,pe,s,f,xe,x);return c.jsxs("div",{"data-actividad-id":S.id,className:`rounded-lg p-4 ${O.length?"border-l-4 border-red-600 bg-surface":S.viatico?"border border-viatico/40 bg-viatico-soft":"border border-ok/40 bg-ok-soft"}`,children:[c.jsxs("div",{className:"flex items-start justify-between gap-2",children:[c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsx("div",{className:"break-words font-semibold text-ink",children:S.titulo}),S.lugar&&c.jsxs("div",{className:"mt-0.5 text-xs text-ink-muted",children:["📍 ",S.lugar]}),S.inicio!==(S.fin||S.inicio)&&c.jsxs("div",{className:"mt-0.5 text-xs text-ink-muted",children:[tt(S.inicio)," → ",tt(S.fin)]})]}),c.jsx("button",{onClick:()=>Y({...S}),className:"inline-flex min-h-touch shrink-0 items-center rounded-lg border border-line bg-surface px-3 text-xs font-semibold text-ink transition-all hover:bg-surface-alt active:scale-95",children:T("acciones.editar")})]}),(S.viatico||O.length>0)&&c.jsxs("div",{className:"mt-1.5 flex flex-wrap items-center gap-1.5",children:[S.viatico&&c.jsx(Nt,{className:"border-orange-300 bg-orange-100 text-orange-900",children:T("dia.viaticoBadge")}),O.length>0&&c.jsx(Nt,{className:"border-red-300 bg-red-100 text-red-900",children:T("dia.conflictosBadge",{n:O.length,plural:Td(O.length)})})]}),S.funcionarios.length>0&&c.jsx("div",{className:"mt-2.5 flex flex-wrap gap-1",children:S.funcionarios.map(ee=>c.jsxs("span",{title:B.has(ee)?T("dia.teletrabajoBadge"):void 0,className:`rounded-full border px-2 py-0.5 text-[11px] font-semibold ${O.includes(ee)?"border-red-400 bg-surface text-critical":B.has(ee)?"border-cyan-500 bg-surface text-cyan-800":"border-ok/50 bg-surface text-ok-fg"}`,children:[ee,O.includes(ee)?" ⚠":"",!O.includes(ee)&&B.has(ee)?" ⌂":""]},ee))})]},S.id)})})]})]}),c.jsxs("div",{className:"grid gap-4 xl:grid-cols-2 xl:items-start",children:[c.jsx(Ta,{title:T("dia.enTurnoConActTitulo",{n:Te.length}),icon:"✅",collapsible:!0,defaultOpen:!1,children:Te.length===0?c.jsx("p",{className:"text-sm text-ink-muted",children:T("dia.enTurnoConActVacio")}):c.jsx("div",{className:"space-y-4",children:bn(Te).map(S=>c.jsx(Js,{label:S.label,n:S.items.length,children:c.jsx("div",{className:"divide-y divide-line/50",children:S.items.map(O=>c.jsxs("div",{className:"flex items-start gap-3 py-3",children:[c.jsx(Ci,{name:O.nombre}),c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsxs("div",{className:"flex flex-wrap items-center gap-1.5",children:[c.jsx("span",{className:"break-words text-sm font-semibold text-ink",children:O.nombre}),c.jsx(Nt,{className:Vd(O.rol,ye),children:O.rol}),O.tieneViatico&&c.jsx(Nt,{className:"border-orange-600 bg-orange-600 text-white",children:T("dia.viaticoBadge")}),c.jsx(Bs,{...R(O.nombre),t:T})]}),c.jsx("div",{className:"mt-1.5 flex flex-wrap gap-1",children:O.acts.map(ee=>c.jsx("span",{className:"rounded-full border border-ok/50 bg-surface px-2 py-0.5 text-[11px] text-ok-fg",children:ee.titulo},ee.id))})]})]},O.id))})},S.key))})}),c.jsx(Ta,{title:T("dia.enTurnoSinActTitulo",{n:me.length}),icon:me.length>0?"⚠️":"✅",collapsible:!0,children:me.length===0?c.jsx("p",{className:"text-sm text-ink-muted",children:T("dia.enTurnoSinActVacio")}):c.jsx("div",{className:"space-y-4",children:bn(me).map(S=>c.jsx(Js,{label:S.label,n:S.items.length,children:c.jsx("div",{className:"divide-y divide-line/50",children:S.items.map(O=>c.jsxs("div",{className:"py-3",children:[c.jsxs("div",{className:"flex items-start gap-3",children:[c.jsx(Ci,{name:O.nombre}),c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsxs("div",{className:"flex flex-wrap items-center gap-1.5",children:[c.jsx("span",{className:"break-words text-sm font-semibold text-ink",children:O.nombre}),c.jsx(Nt,{className:Vd(O.rol,ye),children:O.rol}),c.jsx(Bs,{...R(O.nombre),t:T})]}),c.jsx("div",{className:"mt-0.5 text-xs text-ink-muted",children:O.puesto})]})]}),c.jsx("button",{onClick:()=>Y(Ut([O.nombre],O.puestoOperativo||"")),className:"mt-2 inline-flex min-h-touch w-full items-center justify-center rounded-xl bg-warning px-3 py-2 text-sm font-semibold text-ink-inverse transition-all hover:opacity-90 active:scale-95 sm:w-auto",children:T("dia.asignar")})]},O.id))})},S.key))})}),c.jsx(Ta,{title:T("dia.fueraDeTurnoTitulo",{n:z.length}),icon:"📴",collapsible:!0,defaultOpen:!1,children:z.length===0?c.jsx("p",{className:"text-sm text-ink-muted",children:T("dia.fueraDeTurnoVacio")}):c.jsx("div",{className:"space-y-4",children:Object.entries(we).sort(([S],[O])=>(k[S]||"z").localeCompare(k[O]||"z")).map(([S,O])=>c.jsxs("div",{children:[c.jsxs("div",{className:"mb-2 flex items-center gap-2",children:[c.jsx("span",{className:`rounded-full px-2.5 py-0.5 text-xs font-semibold ${Ee[S]}`,children:k[S]||"Sin marcar"}),c.jsx("span",{className:"text-xs text-ink-muted",children:T("dia.nFuncionarios",{n:O.length,plural:Td(O.length)})})]}),c.jsx("div",{className:"flex flex-wrap gap-2",children:O.map(ee=>c.jsxs("div",{className:"flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2",children:[c.jsx(Ci,{name:ee.nombre}),c.jsxs("div",{children:[c.jsx("div",{className:"text-sm font-semibold text-ink",children:ee.nombre}),c.jsx("div",{className:"text-[10px] text-ink-muted",children:(ee.puestoOperativo||"").replace("Puesto ","")}),c.jsx("div",{className:"mt-1 flex flex-wrap gap-1",children:c.jsx(Bs,{...R(ee.nombre),t:T})})]})]},ee.id))})]},S))})}),H.length>0&&c.jsx(Ta,{title:T("dia.conViaticoTitulo",{n:H.length}),icon:"💵",collapsible:!0,defaultOpen:!1,children:c.jsx("div",{className:"space-y-4",children:bn(H).map(S=>c.jsx(Js,{label:S.label,n:S.items.length,children:c.jsx("div",{className:"divide-y divide-line/50",children:S.items.map(O=>c.jsxs("div",{className:"flex items-start gap-3 py-2.5",children:[c.jsx(Ci,{name:O.nombre}),c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsx("div",{className:"font-semibold text-ink",children:O.nombre}),c.jsx("div",{className:"mt-1 flex flex-wrap gap-1",children:O.acts.filter(ee=>ee.viatico).map(ee=>c.jsxs("span",{className:"rounded-full border border-viatico/40 bg-viatico-soft px-2 py-0.5 text-[11px] text-viatico-fg",children:[ee.titulo,ee.lugar?` · ${ee.lugar}`:""]},ee.id))})]})]},O.id))})},S.key))})})]}),w&&(V?c.jsx(ll,{open:!!w,onClose:()=>Y(null),title:pr,children:Pa}):Pa)]})}function vv({enTurno:r,sinActividad:o,nAlertas:s=0,onIrAlertas:u,onAyuda:m}){const f=Sn();return c.jsxs("div",{className:"space-y-3 md:hidden",children:[c.jsxs("div",{className:"flex items-center justify-between gap-2",children:[c.jsx("h2",{className:"text-base font-bold text-ink",children:f("dia.resumenTitulo")}),c.jsx("button",{type:"button",onClick:m,"aria-label":f("dia.ayudaAria"),className:"inline-flex min-h-touch min-w-touch items-center justify-center rounded-xl border border-line bg-surface text-ink-muted hover:bg-surface-alt",children:c.jsx(He,{name:"info",size:22})})]}),c.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[c.jsxs("div",{className:"rounded-xl border border-ok/30 bg-ok-soft px-2 py-3 text-center",children:[c.jsx("div",{className:"text-3xl font-bold tabular-nums text-ok-fg",children:r}),c.jsx("div",{className:"mt-1 text-sm font-semibold leading-tight text-ok-fg",children:f("dia.resumenEnTurno")})]}),c.jsxs("div",{className:`rounded-xl border px-2 py-3 text-center ${o>0?"border-warning/40 bg-warning-soft":"border-line bg-surface"}`,children:[c.jsx("div",{className:`text-3xl font-bold tabular-nums ${o>0?"text-warning-fg":"text-ink-muted"}`,children:o}),c.jsx("div",{className:`mt-1 text-sm font-semibold leading-tight ${o>0?"text-warning-fg":"text-ink-muted"}`,children:f("dia.resumenSinActividad")})]}),c.jsxs("button",{type:"button",onClick:u,className:`min-h-touch rounded-xl border px-2 py-3 text-center active:scale-95 ${s>0?"border-critical/40 bg-critical-soft":"border-line bg-surface"}`,children:[c.jsx("div",{className:`text-3xl font-bold tabular-nums ${s>0?"text-critical-fg":"text-ink-muted"}`,children:s}),c.jsx("div",{className:`mt-1 text-sm font-semibold leading-tight ${s>0?"text-critical-fg":"text-ink-muted"}`,children:f("dia.resumenAlertas")})]})]}),o>0&&c.jsx("p",{className:"text-sm leading-relaxed text-ink-muted",children:f("dia.resumenPistaSinActividad")})]})}function hv({open:r,onClose:o,topic:s="dia"}){const u=Sn(),m=u(`help.${s}.titulo`),f=u(`help.${s}.lineas`),v=Array.isArray(f)?f:[String(f)];return c.jsxs(ll,{open:r,onClose:o,title:m,snapPoint:"half",children:[c.jsx("ol",{className:"list-decimal space-y-3 pl-5 text-base leading-relaxed text-ink",children:v.map((L,T)=>c.jsx("li",{children:L},T))}),c.jsx("button",{type:"button",onClick:o,className:"mt-6 inline-flex min-h-touch w-full items-center justify-center rounded-xl bg-brand px-4 text-base font-semibold text-brand-fg",children:u("acciones.cerrar")})]})}function gv(r){const{diaVista:o,setDiaVista:s,personas:u,actividadesPlan:m,setActividadesPlan:f,roleData:v,reposiciones:L,hj:T,nAlertas:V=0,setView:y}=r,M=Sn(),x=Jm(),[A,j]=C.useState(null),[J,R]=C.useState(!1),[w,Y,ie]=String(o||"").split("-").map(Number),Z=(Y||1)-1,fe=ul(w||new Date().getFullYear()),{enTurno:le,sinActividad:ae}=C.useMemo(()=>{const oe=(u||[]).filter(z=>z.estado!=="Inactivo");let Te=0,me=0;for(const z of oe){const H=ga(u,v,w,Z,z.nombre,ie,fe);if(!Fi(H))continue;Te+=1,Ri(m,o).filter(P=>(P.funcionarios||[]).includes(z.nombre)).length===0&&(me+=1)}return{enTurno:Te,sinActividad:me}},[u,v,w,Z,ie,fe,m,o]),[he,ue]=C.useState(!1);C.useEffect(()=>{const oe=document.getElementById("dia-boton-nueva-actividad");if(!oe||typeof IntersectionObserver>"u")return;const Te=new IntersectionObserver(([me])=>ue(me.isIntersecting),{rootMargin:"-70px 0px -90px 0px"});return Te.observe(oe),()=>Te.disconnect()},[]);const pe=u.filter(oe=>oe.estado!=="Inactivo"),xe=C.useCallback(()=>({id:`a${Date.now()}`,titulo:"",inicio:o,fin:o,unDia:!0,funcionarios:[],lugar:"",observaciones:"",viatico:!1}),[o]),ge=C.useCallback(oe=>{if(!oe.titulo.trim())return;const Te={...oe,fin:oe.unDia?oe.inicio:oe.fin||oe.inicio};Te.fin<Te.inicio&&(Te.fin=Te.inicio),f(me=>me.some(z=>z.id===Te.id)?me.map(z=>z.id===Te.id?Te:z):[...me,Te]),j(null)},[f]),ye=Ym(m,f),Ve=C.useCallback(oe=>{j(null),ye(oe)},[ye]);return c.jsxs("div",{className:"relative mx-auto w-full max-w-md md:max-w-4xl lg:max-w-6xl xl:max-w-7xl",children:[x&&c.jsxs("div",{className:"mb-3 space-y-3 md:hidden",children:[c.jsx(bm,{prominent:!0}),c.jsx(vv,{enTurno:le,sinActividad:ae,nAlertas:V,onIrAlertas:()=>typeof y=="function"&&y("alertas"),onAyuda:()=>R(!0)})]}),c.jsx(Lv,{...r}),c.jsx("button",{type:"button",onClick:()=>j(xe()),"aria-label":M("dia.nueva"),"aria-hidden":he,tabIndex:he?-1:0,className:["fixed z-40 flex h-14 w-14 items-center justify-center","rounded-full bg-emerald-700 text-white shadow-lg","hover:bg-emerald-600 active:scale-95","transition-all duration-200","bottom-[5.5rem] right-4","md:hidden",he?"pointer-events-none scale-50 opacity-0":"scale-100 opacity-100"].join(" "),children:c.jsx("svg",{viewBox:"0 0 24 24",width:"28",height:"28",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:c.jsx("path",{d:"M12 5v14M5 12h14"})})}),A&&(x?c.jsx(ll,{open:!!A,onClose:()=>j(null),title:M("modalActividad.agregar"),snapPoint:"full",children:c.jsx(Ws,{valor:A,personas:pe,cerrar:()=>j(null),guardar:ge,eliminar:Ve,actividadesPlan:m,embebido:!0})}):c.jsx(Ws,{valor:A,personas:pe,cerrar:()=>j(null),guardar:ge,eliminar:Ve,actividadesPlan:m})),c.jsx(hv,{open:J,onClose:()=>R(!1),topic:"dia"})]})}const Pv=C.lazy(()=>Ln(()=>import("./Roles-ohIP004z.js"),__vite__mapDeps([0,1,2,3,4]))),yv=C.lazy(()=>Ln(()=>import("./Funcionarios-De5RaxN0.js"),__vite__mapDeps([5,6,7,8,1,2,3,9,10,11]))),Mv=C.lazy(()=>Ln(()=>import("./FichaFuncionario-BhM3ih6B.js"),__vite__mapDeps([12,6,10,11]))),Ev=C.lazy(()=>Ln(()=>import("./Planificacion-mzt3oT-w.js"),__vite__mapDeps([13,2,3,4,7,8,1]))),Nv=C.lazy(()=>Ln(()=>import("./PlanificacionFuncionario-DG2YzDpi.js"),[])),Cv=C.lazy(()=>Ln(()=>import("./AdelantoViaticos-80SxNDeR.js"),__vite__mapDeps([14,6,8]))),xv=C.lazy(()=>Ln(()=>import("./Reposicion-DcYSTzCM.js"),__vite__mapDeps([15,6,1,2,3,4]))),Sv=C.lazy(()=>Ln(()=>import("./Disponibilidad-elgd7zqI.js"),__vite__mapDeps([16,6,10]))),bv=C.lazy(()=>Ln(()=>import("./Alertas-pXDX_Iih.js"),__vite__mapDeps([17,8]))),Vv=C.lazy(()=>Ln(()=>import("./Datos-FJ-FnXa5.js"),__vite__mapDeps([18,3,9]))),Av=C.lazy(()=>Ln(()=>import("./Configuracion-7sLZUdns.js"),__vite__mapDeps([19,2,3,9])));function wv(){const r=Sn();return c.jsx("div",{role:"status","aria-live":"polite",className:"flex min-h-[200px] items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",children:c.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold text-slate-500",children:[c.jsx("span",{className:"h-2 w-2 animate-pulse rounded-full bg-emerald-500","aria-hidden":"true"}),r("topbar.cargando")]})})}function jv(){const{view:r,setView:o,personas:s,setPersonas:u,month:m,setMonth:f,year:v,setYear:L,compact:T,setCompact:V,roleData:y,setRoleData:M,actividadesPlan:x,setActividadesPlan:A,reposiciones:j,setReposiciones:J,diaVista:R,setDiaVista:w,funcionarioVista:Y,setFuncionarioVista:ie,filtrosVista:Z,setFiltrosVista:fe,reglas:le}=Jt(),ae=C.useMemo(()=>x1(s,{actividadesPlan:x,reposiciones:j,flags:le}),[s,x,j,le]),he=C.useMemo(()=>ae.filter(ye=>ye.t==="danger"||ye.t==="warn").length,[ae]),ue=dL({view:r,setView:o,year:v,setYear:L,month:m,setMonth:f,diaVista:R,setDiaVista:w,funcionarioVista:Y,setFuncionarioVista:ie,filtrosVista:Z,setFiltrosVista:fe}),pe=mL(),xe=r==="funcionario"?"funcionarios":r,ge=r==="funcionario"&&!!Y;return c.jsxs("div",{className:`pnlq-app pnlq-print-root min-h-screen overflow-x-clip bg-surface-alt text-ink ${pe?"pnlq-keyboard-open":""}`,children:[c.jsx(zL,{}),c.jsxs("div",{className:"flex min-h-screen",children:[c.jsx($1,{view:xe,setView:ue,nAlertas:he}),c.jsxs("main",{className:"pnlq-app-main min-w-0 flex-1 overflow-x-clip",children:[c.jsx(tL,{view:xe,setView:ue,month:m,setMonth:f,year:v,setYear:L,compact:T,setCompact:V}),c.jsx("div",{className:"pnlq-app-content space-y-5 p-4 pb-[calc(6rem+env(safe-area-inset-bottom))] lg:p-6 lg:pb-6",children:c.jsxs(C.Suspense,{fallback:c.jsx(wv,{}),children:[r==="dia"&&c.jsx(gv,{diaVista:R,setDiaVista:w,personas:s,actividadesPlan:x,setActividadesPlan:A,roleData:y,reposiciones:j,hj:le==null?void 0:le.horasJornada,nAlertas:he,setView:ue}),xe==="funcionarios"&&!ge&&c.jsx(yv,{personas:s,setPersonas:u,setView:ue}),ge&&c.jsx(Mv,{nombre:Y,personas:s,setPersonas:u,actividadesPlan:x,roleData:y,reposiciones:j,year:v,month:m,alerts:ae,setView:ue,setDiaVista:w}),r==="roles"&&c.jsx(Pv,{year:v,month:m,setYear:L,setMonth:f,compact:T,roleData:y,setRoleData:M,personas:s,actividadesPlan:x,setActividadesPlan:A,reposiciones:j,hj:le==null?void 0:le.horasJornada,setView:ue}),r==="planificacion"&&c.jsx(Ev,{year:v,month:m,personas:s,actividadesPlan:x,setActividadesPlan:A,roleData:y,setView:ue,setDiaVista:w}),r==="planFuncionario"&&c.jsx(Nv,{year:v,month:m,personas:s,actividadesPlan:x,setActividadesPlan:A,roleData:y,setRoleData:M}),r==="adelantos"&&c.jsx(Cv,{actividadesPlan:x,personas:s,setView:ue}),r==="reposicion"&&c.jsx(xv,{personas:s,reposiciones:j,setReposiciones:J}),r==="disponibilidad"&&c.jsx(Sv,{personas:s,setPersonas:u}),r==="alertas"&&c.jsx(bv,{alerts:ae,setView:ue}),r==="datos"&&c.jsx(Vv,{}),r==="configuracion"&&c.jsx(Av,{})]})})]})]}),c.jsx(rL,{view:xe,setView:ue,nAlertas:he,hidden:pe})]})}function kv(){return c.jsx(fL,{children:c.jsx(L1,{children:c.jsxs(N1,{children:[c.jsx(jv,{}),c.jsx(TL,{})]})})})}function _v(r={}){const{immediate:o=!1,onNeedRefresh:s,onOfflineReady:u,onRegistered:m,onRegisteredSW:f,onRegisterError:v}=r;let L,T;const V=async(M=!0)=>{await T};async function y(){if("serviceWorker"in navigator){if(L=await Ln(async()=>{const{Workbox:M}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:M}},[]).then(({Workbox:M})=>new M("/BTMM_JORNADAS/sw.js",{scope:"/BTMM_JORNADAS/",type:"classic"})).catch(M=>{v==null||v(M)}),!L)return;L.addEventListener("activated",M=>{(M.isUpdate||M.isExternal)&&window.location.reload()}),L.addEventListener("installed",M=>{M.isUpdate||u==null||u()}),L.register({immediate:o}).then(M=>{f?f("/BTMM_JORNADAS/sw.js",M):m==null||m(M)}).catch(M=>{v==null||v(M)})}}return T=y(),V}function Rv(r={}){const{immediate:o=!0,onNeedRefresh:s,onOfflineReady:u,onRegistered:m,onRegisteredSW:f,onRegisterError:v}=r,[L,T]=C.useState(!1),[V,y]=C.useState(!1),[M]=C.useState(()=>_v({immediate:o,onOfflineReady(){y(!0),u==null||u()},onNeedRefresh(){T(!0),s==null||s()},onRegistered:m,onRegisteredSW:f,onRegisterError:v}));return{needRefresh:[L,T],offlineReady:[V,y],updateServiceWorker:M}}const Dv=300*1e3;async function Iv(){const r=`${b1}?t=${Date.now()}`,o=await fetch(r,{cache:"no-store",headers:{"Cache-Control":"no-cache"}});if(!o.ok)throw new Error(`HTTP ${o.status}`);return o.json()}function Ov({intervalMs:r=Dv,onOutdated:o}={}){let s=!1,u=null,m=!0;const f=async()=>{if(s)return;const V=m;if(m=!1,!(typeof navigator>"u"||!navigator.onLine))try{const y=await Iv();y!=null&&y.commit&&y.commit!==ji&&(o==null||o({local:cr,remote:y.version,remoteBuildTime:y.buildTime,remoteCommit:y.commit,immediate:V}))}catch{}},v=()=>{s||(u=setTimeout(async()=>{await f(),v()},r))},L=()=>{document.visibilityState==="visible"&&f()},T=()=>f();return document.addEventListener("visibilitychange",L),window.addEventListener("online",T),f(),v(),()=>{s=!0,u&&clearTimeout(u),document.removeEventListener("visibilitychange",L),window.removeEventListener("online",T)}}const jd="pnlq:lastLoadedAt",kd="pnlq:autoUpdateIntento";function Fv({onInstall:r,onDismiss:o}){return c.jsx("div",{className:"pnlq-pwa-banner pnlq-no-print fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-2xl border border-emerald-200 bg-white p-4 shadow-2xl ring-1 ring-emerald-100 lg:bottom-4",role:"alertdialog","aria-label":Ie("pwa.instalarAria"),children:c.jsxs("div",{className:"flex items-start gap-3",children:[c.jsx("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-800 text-2xl shadow-sm",children:"🌲"}),c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsx("p",{className:"text-sm font-semibold text-slate-950",children:Ie("pwa.instalarTitulo")}),c.jsx("p",{className:"mt-0.5 text-xs font-bold text-slate-500",children:Ie("pwa.instalarSub")}),c.jsxs("div",{className:"mt-3 flex gap-2",children:[c.jsx("button",{onClick:r,className:"inline-flex min-h-touch items-center rounded-xl bg-emerald-800 px-4 text-xs font-semibold text-white shadow-sm hover:bg-emerald-700 active:scale-95",children:Ie("acciones.instalar")}),c.jsx("button",{onClick:o,className:"inline-flex min-h-touch items-center rounded-xl border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-700 hover:bg-slate-50 active:scale-95",children:Ie("acciones.ahoraNo")})]})]}),c.jsx("button",{onClick:o,className:"inline-flex min-h-touch min-w-touch items-center justify-center rounded-lg font-semibold text-slate-400 hover:bg-slate-100 hover:text-slate-700","aria-label":Ie("acciones.cerrar"),children:"✕"})]})})}function zv({lastLoadedAt:r}){return c.jsx("div",{className:"pnlq-pwa-banner pnlq-no-print fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] left-1/2 z-50 -translate-x-1/2 rounded-2xl border border-amber-300 bg-amber-50 px-5 py-3 shadow-xl ring-1 ring-amber-200 lg:bottom-4",role:"alert",children:c.jsxs("div",{className:"flex flex-col items-center gap-0.5 text-center",children:[c.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold text-amber-900",children:[c.jsx("span",{className:"text-lg",children:"📡"}),Ie("pwa.sinConexion")]}),r&&c.jsx("div",{className:"text-[11px] font-bold text-amber-800/80",children:Ie("pwa.ultimaCarga",{fecha:r})})]})})}function Qv({onUpdate:r,onDismiss:o,urgent:s=!1,remoteVersion:u}){const m=Ie(s?"pwa.versionDesactualizada":"pwa.nuevaVersion"),f=Ie(s?"pwa.urgente":"pwa.sugerido"),v=`${Ie("pwa.versionActual",{actual:cr})}${u?Ie("pwa.versionDisponible",{remoto:u}):""}.${f}`;return c.jsx("div",{className:`pnlq-pwa-banner pnlq-no-print fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-2xl border p-4 shadow-2xl lg:bottom-4 ${s?"border-red-300 bg-red-50 ring-1 ring-red-200":"border-emerald-300 bg-emerald-50 ring-1 ring-emerald-200"}`,role:"alertdialog","aria-live":"assertive","aria-label":Ie("pwa.bannerAria"),children:c.jsxs("div",{className:"flex items-start gap-3",children:[c.jsx("div",{className:`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl shadow-sm ${s?"bg-red-700 text-white":"bg-emerald-800 text-white"}`,children:"⟳"}),c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsx("p",{className:"text-sm font-semibold text-slate-950",children:m}),c.jsx("p",{className:"mt-0.5 text-xs font-bold text-slate-600",children:v}),c.jsxs("div",{className:"mt-3 flex gap-2",children:[c.jsx("button",{onClick:r,className:`inline-flex min-h-touch items-center rounded-xl px-4 text-xs font-semibold text-white shadow-sm active:scale-95 ${s?"bg-red-700 hover:bg-red-800":"bg-emerald-800 hover:bg-emerald-700"}`,children:Ie("acciones.actualizarAhora")}),c.jsx("button",{onClick:o,className:"inline-flex min-h-touch items-center rounded-xl border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-700 hover:bg-slate-50 active:scale-95",children:Ie("acciones.verLuego")})]})]})]})})}function Jv({children:r}){const[o,s]=C.useState(null),[u,m]=C.useState(!1),[f,v]=C.useState(typeof navigator<"u"?!navigator.onLine:!1),[L,T]=C.useState(!1),[V,y]=C.useState(null),[M,x]=C.useState(!1),[A,j]=C.useState(()=>{try{return localStorage.getItem(jd)}catch{return null}}),{needRefresh:[J,R],updateServiceWorker:w}=Rv({onRegisteredSW(){try{const ue=qd(new Date().toISOString());localStorage.setItem(jd,ue),j(ue)}catch{}}});C.useEffect(()=>{const ue=ye=>{ye.preventDefault(),s(ye)},pe=()=>{T(!0),s(null)},xe=()=>v(!1),ge=()=>v(!0);return window.addEventListener("beforeinstallprompt",ue),window.addEventListener("appinstalled",pe),window.addEventListener("online",xe),window.addEventListener("offline",ge),()=>{window.removeEventListener("beforeinstallprompt",ue),window.removeEventListener("appinstalled",pe),window.removeEventListener("online",xe),window.removeEventListener("offline",ge)}},[]);const Y=C.useRef(w);C.useEffect(()=>{Y.current=w},[w]),C.useEffect(()=>Ov({onOutdated:pe=>{var xe;if(pe!=null&&pe.immediate&&pe.remoteCommit){let ge=null;try{ge=sessionStorage.getItem(kd)}catch{}if(ge!==pe.remoteCommit){try{sessionStorage.setItem(kd,pe.remoteCommit)}catch{}(xe=Y.current)==null||xe.call(Y,!0);return}}y(pe)}}),[]);const ie=async()=>{if(!o)return;o.prompt();const{outcome:ue}=await o.userChoice;ue==="accepted"&&s(null),m(!0)},Z=C.useCallback(()=>{x(!1),y(null),R(!1),w(!0)},[R,w]),fe=()=>x(!0),le=o&&!u&&!L,ae=(J||!!V)&&!M,he=V==null?void 0:V.remote;return c.jsxs(c.Fragment,{children:[r,le&&c.jsx(Fv,{onInstall:ie,onDismiss:()=>m(!0)}),f&&!ae&&c.jsx(zv,{lastLoadedAt:A}),ae&&c.jsx(Qv,{onUpdate:Z,onDismiss:fe,urgent:!!V,remoteVersion:he})]})}const Gm="pnlq:theme",La=["light","dark","hc"],Km=C.createContext(null);function Bv(){if(typeof window>"u")return"light";try{const r=localStorage.getItem(Gm);if(r&&La.includes(r))return r}catch{}return window.matchMedia&&window.matchMedia("(prefers-contrast: more)").matches?"hc":window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Uv({children:r}){const[o,s]=C.useState(Bv);C.useEffect(()=>{if(!(typeof document>"u")){document.documentElement.setAttribute("data-theme",o),document.documentElement.style.colorScheme=o==="dark"?"dark":"light";try{localStorage.setItem(Gm,o)}catch{}}},[o]);const u=C.useCallback(v=>{La.includes(v)&&s(v)},[]),m=C.useCallback(()=>{s(v=>{const L=La.indexOf(v);return La[(L+1)%La.length]})},[]),f=C.useMemo(()=>({theme:o,setTheme:u,cycleTheme:m,themes:La}),[o,u,m]);return c.jsx(Km.Provider,{value:f,children:r})}function vh(){const r=C.useContext(Km);if(!r)throw new Error("useTheme must be used within <ThemeProvider>");return r}typeof console<"u"&&console.info(`PNLQ v${cr} · build ${wi} · commit ${ji}`);typeof window<"u"&&window.addEventListener("unhandledrejection",r=>{console.error("Promesa rechazada sin manejar:",r.reason)});nT.createRoot(document.getElementById("root")).render(c.jsx(qp.StrictMode,{children:c.jsx(Uv,{children:c.jsx(Jv,{children:c.jsx(kv,{})})})}));export{KL as $,cr as A,Nt as B,Ta as C,Hv as D,Fm as E,Bm as F,cl as G,vn as H,He as I,Fi as J,YL as K,Im as L,dd as M,Xv as N,Qd as O,GL as P,HT as Q,nl as R,Yn as S,il as T,n1 as U,ld as V,tt as W,uh as X,ev as Y,LT as Z,qd as _,Ci as a,mr as a0,nh as a1,UL as a2,_d as a3,ST as a4,Fd as a5,zd as a6,TT as a7,mh as a8,hT as a9,Um as aA,vT as aB,Ie as aC,PT as aD,fh as aE,Th as aF,ph as aG,XT as aH,Oi as aI,th as aJ,Jt as aK,Ym as aL,Z1 as aM,ul as aN,Jm as aO,Am as aP,Sn as aQ,vh as aR,$d as aS,Kv as aT,e1 as aa,c as ab,mv as ac,Lh as ad,Sm as ae,Om as af,CT as ag,ih as ah,rh as ai,oh as aj,ah as ak,yT as al,Un as am,dr as an,$v as ao,Td as ap,eh as aq,t1 as ar,C as as,ET as at,Tv as au,gT as av,BL as aw,Dm as ax,MT as ay,ur as az,ch as b,Ds as c,wm as d,Ws as e,Rs as f,lh as g,Ri as h,qv as i,Wv as j,xT as k,dv as l,ki as m,Vd as n,qL as o,ga as p,sh as q,Gv as r,ov as s,sv as t,dh as u,l1 as v,tl as w,Zv as x,q1 as y,Ud as z};
