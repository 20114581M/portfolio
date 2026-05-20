(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const O of document.querySelectorAll('link[rel="modulepreload"]'))u(O);new MutationObserver(O=>{for(const q of O)if(q.type==="childList")for(const ae of q.addedNodes)ae.tagName==="LINK"&&ae.rel==="modulepreload"&&u(ae)}).observe(document,{childList:!0,subtree:!0});function H(O){const q={};return O.integrity&&(q.integrity=O.integrity),O.referrerPolicy&&(q.referrerPolicy=O.referrerPolicy),O.crossOrigin==="use-credentials"?q.credentials="include":O.crossOrigin==="anonymous"?q.credentials="omit":q.credentials="same-origin",q}function u(O){if(O.ep)return;O.ep=!0;const q=H(O);fetch(O.href,q)}})();var ro={exports:{}},zn={};var xf;function r2(){if(xf)return zn;xf=1;var M=Symbol.for("react.transitional.element"),A=Symbol.for("react.fragment");function H(u,O,q){var ae=null;if(q!==void 0&&(ae=""+q),O.key!==void 0&&(ae=""+O.key),"key"in O){q={};for(var I in O)I!=="key"&&(q[I]=O[I])}else q=O;return O=q.ref,{$$typeof:M,type:u,key:ae,ref:O!==void 0?O:null,props:q}}return zn.Fragment=A,zn.jsx=H,zn.jsxs=H,zn}var yf;function o2(){return yf||(yf=1,ro.exports=r2()),ro.exports}var r=o2(),oo={exports:{}},Y={};var Sf;function s2(){if(Sf)return Y;Sf=1;var M=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),q=Symbol.for("react.consumer"),ae=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),j=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),B=Symbol.for("react.activity"),ue=Symbol.iterator;function R(d){return d===null||typeof d!="object"?null:(d=ue&&d[ue]||d["@@iterator"],typeof d=="function"?d:null)}var me={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Be=Object.assign,Dt={};function We(d,z,w){this.props=d,this.context=z,this.refs=Dt,this.updater=w||me}We.prototype.isReactComponent={},We.prototype.setState=function(d,z){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,z,"setState")},We.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function Wt(){}Wt.prototype=We.prototype;function He(d,z,w){this.props=d,this.context=z,this.refs=Dt,this.updater=w||me}var rt=He.prototype=new Wt;rt.constructor=He,Be(rt,We.prototype),rt.isPureReactComponent=!0;var zt=Array.isArray;function qe(){}var F={H:null,A:null,T:null,S:null},Ye=Object.prototype.hasOwnProperty;function jt(d,z,w){var D=w.ref;return{$$typeof:M,type:d,key:z,ref:D!==void 0?D:null,props:w}}function Xa(d,z){return jt(d.type,z,d.props)}function Mt(d){return typeof d=="object"&&d!==null&&d.$$typeof===M}function Le(d){var z={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(w){return z[w]})}var za=/\/+/g;function Tt(d,z){return typeof d=="object"&&d!==null&&d.key!=null?Le(""+d.key):z.toString(36)}function vt(d){switch(d.status){case"fulfilled":return d.value;case"rejected":throw d.reason;default:switch(typeof d.status=="string"?d.then(qe,qe):(d.status="pending",d.then(function(z){d.status==="pending"&&(d.status="fulfilled",d.value=z)},function(z){d.status==="pending"&&(d.status="rejected",d.reason=z)})),d.status){case"fulfilled":return d.value;case"rejected":throw d.reason}}throw d}function x(d,z,w,D,L){var V=typeof d;(V==="undefined"||V==="boolean")&&(d=null);var le=!1;if(d===null)le=!0;else switch(V){case"bigint":case"string":case"number":le=!0;break;case"object":switch(d.$$typeof){case M:case A:le=!0;break;case W:return le=d._init,x(le(d._payload),z,w,D,L)}}if(le)return L=L(d),le=D===""?"."+Tt(d,0):D,zt(L)?(w="",le!=null&&(w=le.replace(za,"$&/")+"/"),x(L,z,w,"",function(El){return El})):L!=null&&(Mt(L)&&(L=Xa(L,w+(L.key==null||d&&d.key===L.key?"":(""+L.key).replace(za,"$&/")+"/")+le)),z.push(L)),1;le=0;var Re=D===""?".":D+":";if(zt(d))for(var xe=0;xe<d.length;xe++)D=d[xe],V=Re+Tt(D,xe),le+=x(D,z,w,V,L);else if(xe=R(d),typeof xe=="function")for(d=xe.call(d),xe=0;!(D=d.next()).done;)D=D.value,V=Re+Tt(D,xe++),le+=x(D,z,w,V,L);else if(V==="object"){if(typeof d.then=="function")return x(vt(d),z,w,D,L);throw z=String(d),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return le}function N(d,z,w){if(d==null)return d;var D=[],L=0;return x(d,D,"","",function(V){return z.call(w,V,L++)}),D}function k(d){if(d._status===-1){var z=d._result;z=z(),z.then(function(w){(d._status===0||d._status===-1)&&(d._status=1,d._result=w)},function(w){(d._status===0||d._status===-1)&&(d._status=2,d._result=w)}),d._status===-1&&(d._status=0,d._result=z)}if(d._status===1)return d._result.default;throw d._result}var ce=typeof reportError=="function"?reportError:function(d){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof d=="object"&&d!==null&&typeof d.message=="string"?String(d.message):String(d),error:d});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",d);return}console.error(d)},fe={map:N,forEach:function(d,z,w){N(d,function(){z.apply(this,arguments)},w)},count:function(d){var z=0;return N(d,function(){z++}),z},toArray:function(d){return N(d,function(z){return z})||[]},only:function(d){if(!Mt(d))throw Error("React.Children.only expected to receive a single React element child.");return d}};return Y.Activity=B,Y.Children=fe,Y.Component=We,Y.Fragment=H,Y.Profiler=O,Y.PureComponent=He,Y.StrictMode=u,Y.Suspense=T,Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,Y.__COMPILER_RUNTIME={__proto__:null,c:function(d){return F.H.useMemoCache(d)}},Y.cache=function(d){return function(){return d.apply(null,arguments)}},Y.cacheSignal=function(){return null},Y.cloneElement=function(d,z,w){if(d==null)throw Error("The argument must be a React element, but you passed "+d+".");var D=Be({},d.props),L=d.key;if(z!=null)for(V in z.key!==void 0&&(L=""+z.key),z)!Ye.call(z,V)||V==="key"||V==="__self"||V==="__source"||V==="ref"&&z.ref===void 0||(D[V]=z[V]);var V=arguments.length-2;if(V===1)D.children=w;else if(1<V){for(var le=Array(V),Re=0;Re<V;Re++)le[Re]=arguments[Re+2];D.children=le}return jt(d.type,L,D)},Y.createContext=function(d){return d={$$typeof:ae,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null},d.Provider=d,d.Consumer={$$typeof:q,_context:d},d},Y.createElement=function(d,z,w){var D,L={},V=null;if(z!=null)for(D in z.key!==void 0&&(V=""+z.key),z)Ye.call(z,D)&&D!=="key"&&D!=="__self"&&D!=="__source"&&(L[D]=z[D]);var le=arguments.length-2;if(le===1)L.children=w;else if(1<le){for(var Re=Array(le),xe=0;xe<le;xe++)Re[xe]=arguments[xe+2];L.children=Re}if(d&&d.defaultProps)for(D in le=d.defaultProps,le)L[D]===void 0&&(L[D]=le[D]);return jt(d,V,L)},Y.createRef=function(){return{current:null}},Y.forwardRef=function(d){return{$$typeof:I,render:d}},Y.isValidElement=Mt,Y.lazy=function(d){return{$$typeof:W,_payload:{_status:-1,_result:d},_init:k}},Y.memo=function(d,z){return{$$typeof:j,type:d,compare:z===void 0?null:z}},Y.startTransition=function(d){var z=F.T,w={};F.T=w;try{var D=d(),L=F.S;L!==null&&L(w,D),typeof D=="object"&&D!==null&&typeof D.then=="function"&&D.then(qe,ce)}catch(V){ce(V)}finally{z!==null&&w.types!==null&&(z.types=w.types),F.T=z}},Y.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},Y.use=function(d){return F.H.use(d)},Y.useActionState=function(d,z,w){return F.H.useActionState(d,z,w)},Y.useCallback=function(d,z){return F.H.useCallback(d,z)},Y.useContext=function(d){return F.H.useContext(d)},Y.useDebugValue=function(){},Y.useDeferredValue=function(d,z){return F.H.useDeferredValue(d,z)},Y.useEffect=function(d,z){return F.H.useEffect(d,z)},Y.useEffectEvent=function(d){return F.H.useEffectEvent(d)},Y.useId=function(){return F.H.useId()},Y.useImperativeHandle=function(d,z,w){return F.H.useImperativeHandle(d,z,w)},Y.useInsertionEffect=function(d,z){return F.H.useInsertionEffect(d,z)},Y.useLayoutEffect=function(d,z){return F.H.useLayoutEffect(d,z)},Y.useMemo=function(d,z){return F.H.useMemo(d,z)},Y.useOptimistic=function(d,z){return F.H.useOptimistic(d,z)},Y.useReducer=function(d,z,w){return F.H.useReducer(d,z,w)},Y.useRef=function(d){return F.H.useRef(d)},Y.useState=function(d){return F.H.useState(d)},Y.useSyncExternalStore=function(d,z,w){return F.H.useSyncExternalStore(d,z,w)},Y.useTransition=function(){return F.H.useTransition()},Y.version="19.2.4",Y}var zf;function ho(){return zf||(zf=1,oo.exports=s2()),oo.exports}var ct=ho(),so={exports:{}},jn={},uo={exports:{}},fo={};var jf;function u2(){return jf||(jf=1,(function(M){function A(x,N){var k=x.length;x.push(N);e:for(;0<k;){var ce=k-1>>>1,fe=x[ce];if(0<O(fe,N))x[ce]=N,x[k]=fe,k=ce;else break e}}function H(x){return x.length===0?null:x[0]}function u(x){if(x.length===0)return null;var N=x[0],k=x.pop();if(k!==N){x[0]=k;e:for(var ce=0,fe=x.length,d=fe>>>1;ce<d;){var z=2*(ce+1)-1,w=x[z],D=z+1,L=x[D];if(0>O(w,k))D<fe&&0>O(L,w)?(x[ce]=L,x[D]=k,ce=D):(x[ce]=w,x[z]=k,ce=z);else if(D<fe&&0>O(L,k))x[ce]=L,x[D]=k,ce=D;else break e}}return N}function O(x,N){var k=x.sortIndex-N.sortIndex;return k!==0?k:x.id-N.id}if(M.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var q=performance;M.unstable_now=function(){return q.now()}}else{var ae=Date,I=ae.now();M.unstable_now=function(){return ae.now()-I}}var T=[],j=[],W=1,B=null,ue=3,R=!1,me=!1,Be=!1,Dt=!1,We=typeof setTimeout=="function"?setTimeout:null,Wt=typeof clearTimeout=="function"?clearTimeout:null,He=typeof setImmediate<"u"?setImmediate:null;function rt(x){for(var N=H(j);N!==null;){if(N.callback===null)u(j);else if(N.startTime<=x)u(j),N.sortIndex=N.expirationTime,A(T,N);else break;N=H(j)}}function zt(x){if(Be=!1,rt(x),!me)if(H(T)!==null)me=!0,qe||(qe=!0,Le());else{var N=H(j);N!==null&&vt(zt,N.startTime-x)}}var qe=!1,F=-1,Ye=5,jt=-1;function Xa(){return Dt?!0:!(M.unstable_now()-jt<Ye)}function Mt(){if(Dt=!1,qe){var x=M.unstable_now();jt=x;var N=!0;try{e:{me=!1,Be&&(Be=!1,Wt(F),F=-1),R=!0;var k=ue;try{t:{for(rt(x),B=H(T);B!==null&&!(B.expirationTime>x&&Xa());){var ce=B.callback;if(typeof ce=="function"){B.callback=null,ue=B.priorityLevel;var fe=ce(B.expirationTime<=x);if(x=M.unstable_now(),typeof fe=="function"){B.callback=fe,rt(x),N=!0;break t}B===H(T)&&u(T),rt(x)}else u(T);B=H(T)}if(B!==null)N=!0;else{var d=H(j);d!==null&&vt(zt,d.startTime-x),N=!1}}break e}finally{B=null,ue=k,R=!1}N=void 0}}finally{N?Le():qe=!1}}}var Le;if(typeof He=="function")Le=function(){He(Mt)};else if(typeof MessageChannel<"u"){var za=new MessageChannel,Tt=za.port2;za.port1.onmessage=Mt,Le=function(){Tt.postMessage(null)}}else Le=function(){We(Mt,0)};function vt(x,N){F=We(function(){x(M.unstable_now())},N)}M.unstable_IdlePriority=5,M.unstable_ImmediatePriority=1,M.unstable_LowPriority=4,M.unstable_NormalPriority=3,M.unstable_Profiling=null,M.unstable_UserBlockingPriority=2,M.unstable_cancelCallback=function(x){x.callback=null},M.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ye=0<x?Math.floor(1e3/x):5},M.unstable_getCurrentPriorityLevel=function(){return ue},M.unstable_next=function(x){switch(ue){case 1:case 2:case 3:var N=3;break;default:N=ue}var k=ue;ue=N;try{return x()}finally{ue=k}},M.unstable_requestPaint=function(){Dt=!0},M.unstable_runWithPriority=function(x,N){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var k=ue;ue=x;try{return N()}finally{ue=k}},M.unstable_scheduleCallback=function(x,N,k){var ce=M.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?ce+k:ce):k=ce,x){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=k+fe,x={id:W++,callback:N,priorityLevel:x,startTime:k,expirationTime:fe,sortIndex:-1},k>ce?(x.sortIndex=k,A(j,x),H(T)===null&&x===H(j)&&(Be?(Wt(F),F=-1):Be=!0,vt(zt,k-ce))):(x.sortIndex=fe,A(T,x),me||R||(me=!0,qe||(qe=!0,Le()))),x},M.unstable_shouldYield=Xa,M.unstable_wrapCallback=function(x){var N=ue;return function(){var k=ue;ue=N;try{return x.apply(this,arguments)}finally{ue=k}}}})(fo)),fo}var Mf;function f2(){return Mf||(Mf=1,uo.exports=u2()),uo.exports}var mo={exports:{}},Ue={};var Af;function d2(){if(Af)return Ue;Af=1;var M=ho();function A(T){var j="https://react.dev/errors/"+T;if(1<arguments.length){j+="?args[]="+encodeURIComponent(arguments[1]);for(var W=2;W<arguments.length;W++)j+="&args[]="+encodeURIComponent(arguments[W])}return"Minified React error #"+T+"; visit "+j+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function H(){}var u={d:{f:H,r:function(){throw Error(A(522))},D:H,C:H,L:H,m:H,X:H,S:H,M:H},p:0,findDOMNode:null},O=Symbol.for("react.portal");function q(T,j,W){var B=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:B==null?null:""+B,children:T,containerInfo:j,implementation:W}}var ae=M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function I(T,j){if(T==="font")return"";if(typeof j=="string")return j==="use-credentials"?j:""}return Ue.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Ue.createPortal=function(T,j){var W=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!j||j.nodeType!==1&&j.nodeType!==9&&j.nodeType!==11)throw Error(A(299));return q(T,j,null,W)},Ue.flushSync=function(T){var j=ae.T,W=u.p;try{if(ae.T=null,u.p=2,T)return T()}finally{ae.T=j,u.p=W,u.d.f()}},Ue.preconnect=function(T,j){typeof T=="string"&&(j?(j=j.crossOrigin,j=typeof j=="string"?j==="use-credentials"?j:"":void 0):j=null,u.d.C(T,j))},Ue.prefetchDNS=function(T){typeof T=="string"&&u.d.D(T)},Ue.preinit=function(T,j){if(typeof T=="string"&&j&&typeof j.as=="string"){var W=j.as,B=I(W,j.crossOrigin),ue=typeof j.integrity=="string"?j.integrity:void 0,R=typeof j.fetchPriority=="string"?j.fetchPriority:void 0;W==="style"?u.d.S(T,typeof j.precedence=="string"?j.precedence:void 0,{crossOrigin:B,integrity:ue,fetchPriority:R}):W==="script"&&u.d.X(T,{crossOrigin:B,integrity:ue,fetchPriority:R,nonce:typeof j.nonce=="string"?j.nonce:void 0})}},Ue.preinitModule=function(T,j){if(typeof T=="string")if(typeof j=="object"&&j!==null){if(j.as==null||j.as==="script"){var W=I(j.as,j.crossOrigin);u.d.M(T,{crossOrigin:W,integrity:typeof j.integrity=="string"?j.integrity:void 0,nonce:typeof j.nonce=="string"?j.nonce:void 0})}}else j==null&&u.d.M(T)},Ue.preload=function(T,j){if(typeof T=="string"&&typeof j=="object"&&j!==null&&typeof j.as=="string"){var W=j.as,B=I(W,j.crossOrigin);u.d.L(T,W,{crossOrigin:B,integrity:typeof j.integrity=="string"?j.integrity:void 0,nonce:typeof j.nonce=="string"?j.nonce:void 0,type:typeof j.type=="string"?j.type:void 0,fetchPriority:typeof j.fetchPriority=="string"?j.fetchPriority:void 0,referrerPolicy:typeof j.referrerPolicy=="string"?j.referrerPolicy:void 0,imageSrcSet:typeof j.imageSrcSet=="string"?j.imageSrcSet:void 0,imageSizes:typeof j.imageSizes=="string"?j.imageSizes:void 0,media:typeof j.media=="string"?j.media:void 0})}},Ue.preloadModule=function(T,j){if(typeof T=="string")if(j){var W=I(j.as,j.crossOrigin);u.d.m(T,{as:typeof j.as=="string"&&j.as!=="script"?j.as:void 0,crossOrigin:W,integrity:typeof j.integrity=="string"?j.integrity:void 0})}else u.d.m(T)},Ue.requestFormReset=function(T){u.d.r(T)},Ue.unstable_batchedUpdates=function(T,j){return T(j)},Ue.useFormState=function(T,j,W){return ae.H.useFormState(T,j,W)},Ue.useFormStatus=function(){return ae.H.useHostTransitionStatus()},Ue.version="19.2.4",Ue}var Nf;function m2(){if(Nf)return mo.exports;Nf=1;function M(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M)}catch(A){console.error(A)}}return M(),mo.exports=d2(),mo.exports}var wf;function g2(){if(wf)return jn;wf=1;var M=f2(),A=ho(),H=m2();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function O(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function q(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function ae(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function I(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function T(e){if(q(e)!==e)throw Error(u(188))}function j(e){var t=e.alternate;if(!t){if(t=q(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return T(n),e;if(i===l)return T(n),t;i=i.sibling}throw Error(u(188))}if(a.return!==l.return)a=n,l=i;else{for(var c=!1,o=n.child;o;){if(o===a){c=!0,a=n,l=i;break}if(o===l){c=!0,l=n,a=i;break}o=o.sibling}if(!c){for(o=i.child;o;){if(o===a){c=!0,a=i,l=n;break}if(o===l){c=!0,l=i,a=n;break}o=o.sibling}if(!c)throw Error(u(189))}}if(a.alternate!==l)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function W(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=W(e),t!==null)return t;e=e.sibling}return null}var B=Object.assign,ue=Symbol.for("react.element"),R=Symbol.for("react.transitional.element"),me=Symbol.for("react.portal"),Be=Symbol.for("react.fragment"),Dt=Symbol.for("react.strict_mode"),We=Symbol.for("react.profiler"),Wt=Symbol.for("react.consumer"),He=Symbol.for("react.context"),rt=Symbol.for("react.forward_ref"),zt=Symbol.for("react.suspense"),qe=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),jt=Symbol.for("react.activity"),Xa=Symbol.for("react.memo_cache_sentinel"),Mt=Symbol.iterator;function Le(e){return e===null||typeof e!="object"?null:(e=Mt&&e[Mt]||e["@@iterator"],typeof e=="function"?e:null)}var za=Symbol.for("react.client.reference");function Tt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===za?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Be:return"Fragment";case We:return"Profiler";case Dt:return"StrictMode";case zt:return"Suspense";case qe:return"SuspenseList";case jt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case me:return"Portal";case He:return e.displayName||"Context";case Wt:return(e._context.displayName||"Context")+".Consumer";case rt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:Tt(e.type)||"Memo";case Ye:t=e._payload,e=e._init;try{return Tt(e(t))}catch{}}return null}var vt=Array.isArray,x=A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=H.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},ce=[],fe=-1;function d(e){return{current:e}}function z(e){0>fe||(e.current=ce[fe],ce[fe]=null,fe--)}function w(e,t){fe++,ce[fe]=e.current,e.current=t}var D=d(null),L=d(null),V=d(null),le=d(null);function Re(e,t){switch(w(V,t),w(L,e),w(D,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?L0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=L0(t),e=G0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}z(D),w(D,e)}function xe(){z(D),z(L),z(V)}function El(e){e.memoizedState!==null&&w(le,e);var t=D.current,a=G0(t,e.type);t!==a&&(w(L,e),w(D,a))}function Mn(e){L.current===e&&(z(D),z(L)),le.current===e&&(z(le),vn._currentValue=k)}var Xi,bo;function ja(e){if(Xi===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Xi=t&&t[1]||"",bo=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xi+e+bo}var Vi=!1;function Qi(e,t){if(!e||Vi)return"";Vi=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(b){var h=b}Reflect.construct(e,[],S)}else{try{S.call()}catch(b){h=b}e.call(S.prototype)}}else{try{throw Error()}catch(b){h=b}(S=e())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(b){if(b&&h&&typeof b.stack=="string")return[b.stack,h.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),c=i[0],o=i[1];if(c&&o){var s=c.split(`
`),p=o.split(`
`);for(n=l=0;l<s.length&&!s[l].includes("DetermineComponentFrameRoot");)l++;for(;n<p.length&&!p[n].includes("DetermineComponentFrameRoot");)n++;if(l===s.length||n===p.length)for(l=s.length-1,n=p.length-1;1<=l&&0<=n&&s[l]!==p[n];)n--;for(;1<=l&&0<=n;l--,n--)if(s[l]!==p[n]){if(l!==1||n!==1)do if(l--,n--,0>n||s[l]!==p[n]){var v=`
`+s[l].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),v}while(1<=l&&0<=n);break}}}finally{Vi=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ja(a):""}function kf(e,t){switch(e.tag){case 26:case 27:case 5:return ja(e.type);case 16:return ja("Lazy");case 13:return e.child!==t&&t!==null?ja("Suspense Fallback"):ja("Suspense");case 19:return ja("SuspenseList");case 0:case 15:return Qi(e.type,!1);case 11:return Qi(e.type.render,!1);case 1:return Qi(e.type,!0);case 31:return ja("Activity");default:return""}}function vo(e){try{var t="",a=null;do t+=kf(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Zi=Object.prototype.hasOwnProperty,Ki=M.unstable_scheduleCallback,Ji=M.unstable_cancelCallback,qf=M.unstable_shouldYield,Yf=M.unstable_requestPaint,Fe=M.unstable_now,Lf=M.unstable_getCurrentPriorityLevel,xo=M.unstable_ImmediatePriority,yo=M.unstable_UserBlockingPriority,An=M.unstable_NormalPriority,Gf=M.unstable_LowPriority,So=M.unstable_IdlePriority,Xf=M.log,Vf=M.unstable_setDisableYieldValue,Dl=null,$e=null;function Ft(e){if(typeof Xf=="function"&&Vf(e),$e&&typeof $e.setStrictMode=="function")try{$e.setStrictMode(Dl,e)}catch{}}var Ie=Math.clz32?Math.clz32:Kf,Qf=Math.log,Zf=Math.LN2;function Kf(e){return e>>>=0,e===0?32:31-(Qf(e)/Zf|0)|0}var Nn=256,wn=262144,En=4194304;function Ma(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var o=l&134217727;return o!==0?(l=o&~i,l!==0?n=Ma(l):(c&=o,c!==0?n=Ma(c):a||(a=o&~e,a!==0&&(n=Ma(a))))):(o=l&~i,o!==0?n=Ma(o):c!==0?n=Ma(c):a||(a=l&~e,a!==0&&(n=Ma(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Tl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Jf(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zo(){var e=En;return En<<=1,(En&62914560)===0&&(En=4194304),e}function Wi(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function _l(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Wf(e,t,a,l,n,i){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var o=e.entanglements,s=e.expirationTimes,p=e.hiddenUpdates;for(a=c&~a;0<a;){var v=31-Ie(a),S=1<<v;o[v]=0,s[v]=-1;var h=p[v];if(h!==null)for(p[v]=null,v=0;v<h.length;v++){var b=h[v];b!==null&&(b.lane&=-536870913)}a&=~S}l!==0&&jo(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(c&~t))}function jo(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Ie(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Mo(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-Ie(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function Ao(e,t){var a=t&-t;return a=(a&42)!==0?1:Fi(a),(a&(e.suspendedLanes|t))!==0?0:a}function Fi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $i(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function No(){var e=N.p;return e!==0?e:(e=window.event,e===void 0?32:df(e.type))}function wo(e,t){var a=N.p;try{return N.p=e,t()}finally{N.p=a}}var $t=Math.random().toString(36).slice(2),De="__reactFiber$"+$t,Ge="__reactProps$"+$t,Va="__reactContainer$"+$t,Ii="__reactEvents$"+$t,Ff="__reactListeners$"+$t,$f="__reactHandles$"+$t,Eo="__reactResources$"+$t,Ol="__reactMarker$"+$t;function Pi(e){delete e[De],delete e[Ge],delete e[Ii],delete e[Ff],delete e[$f]}function Qa(e){var t=e[De];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Va]||a[De]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=W0(e);e!==null;){if(a=e[De])return a;e=W0(e)}return t}e=a,a=e.parentNode}return null}function Za(e){if(e=e[De]||e[Va]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Cl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Ka(e){var t=e[Eo];return t||(t=e[Eo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function we(e){e[Ol]=!0}var Do=new Set,To={};function Aa(e,t){Ja(e,t),Ja(e+"Capture",t)}function Ja(e,t){for(To[e]=t,e=0;e<t.length;e++)Do.add(t[e])}var If=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_o={},Oo={};function Pf(e){return Zi.call(Oo,e)?!0:Zi.call(_o,e)?!1:If.test(e)?Oo[e]=!0:(_o[e]=!0,!1)}function Tn(e,t,a){if(Pf(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function _n(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function _t(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function ot(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Co(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ed(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(c){a=""+c,i.call(this,c)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ec(e){if(!e._valueTracker){var t=Co(e)?"checked":"value";e._valueTracker=ed(e,t,""+e[t])}}function Ho(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Co(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function On(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var td=/[\n"\\]/g;function st(e){return e.replace(td,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function tc(e,t,a,l,n,i,c,o){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ot(t)):e.value!==""+ot(t)&&(e.value=""+ot(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?ac(e,c,ot(t)):a!=null?ac(e,c,ot(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ot(o):e.removeAttribute("name")}function Uo(e,t,a,l,n,i,c,o){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){ec(e);return}a=a!=null?""+ot(a):"",t=t!=null?""+ot(t):a,o||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=o?e.checked:!!l,e.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),ec(e)}function ac(e,t,a){t==="number"&&On(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Wa(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+ot(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Bo(e,t,a){if(t!=null&&(t=""+ot(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+ot(a):""}function Ro(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(u(92));if(vt(l)){if(1<l.length)throw Error(u(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=ot(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),ec(e)}function Fa(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var ad=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ko(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||ad.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function qo(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&ko(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&ko(e,i,t[i])}function lc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ld=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),nd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cn(e){return nd.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ot(){}var nc=null;function ic(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $a=null,Ia=null;function Yo(e){var t=Za(e);if(t&&(e=t.stateNode)){var a=e[Ge]||null;e:switch(e=t.stateNode,t.type){case"input":if(tc(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+st(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Ge]||null;if(!n)throw Error(u(90));tc(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Ho(l)}break e;case"textarea":Bo(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Wa(e,!!a.multiple,t,!1)}}}var cc=!1;function Lo(e,t,a){if(cc)return e(t,a);cc=!0;try{var l=e(t);return l}finally{if(cc=!1,($a!==null||Ia!==null)&&(yi(),$a&&(t=$a,e=Ia,Ia=$a=null,Yo(t),e)))for(t=0;t<e.length;t++)Yo(e[t])}}function Hl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Ge]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var Ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rc=!1;if(Ct)try{var Ul={};Object.defineProperty(Ul,"passive",{get:function(){rc=!0}}),window.addEventListener("test",Ul,Ul),window.removeEventListener("test",Ul,Ul)}catch{rc=!1}var It=null,oc=null,Hn=null;function Go(){if(Hn)return Hn;var e,t=oc,a=t.length,l,n="value"in It?It.value:It.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var c=a-e;for(l=1;l<=c&&t[a-l]===n[i-l];l++);return Hn=n.slice(e,1<l?1-l:void 0)}function Un(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bn(){return!0}function Xo(){return!1}function Xe(e){function t(a,l,n,i,c){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(a=e[o],this[o]=a?a(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Bn:Xo,this.isPropagationStopped=Xo,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){},isPersistent:Bn}),t}var Na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rn=Xe(Na),Bl=B({},Na,{view:0,detail:0}),id=Xe(Bl),sc,uc,Rl,kn=B({},Bl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rl&&(Rl&&e.type==="mousemove"?(sc=e.screenX-Rl.screenX,uc=e.screenY-Rl.screenY):uc=sc=0,Rl=e),sc)},movementY:function(e){return"movementY"in e?e.movementY:uc}}),Vo=Xe(kn),cd=B({},kn,{dataTransfer:0}),rd=Xe(cd),od=B({},Bl,{relatedTarget:0}),fc=Xe(od),sd=B({},Na,{animationName:0,elapsedTime:0,pseudoElement:0}),ud=Xe(sd),fd=B({},Na,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dd=Xe(fd),md=B({},Na,{data:0}),Qo=Xe(md),gd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hd[e])?!!t[e]:!1}function dc(){return bd}var vd=B({},Bl,{key:function(e){if(e.key){var t=gd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Un(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dc,charCode:function(e){return e.type==="keypress"?Un(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Un(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xd=Xe(vd),yd=B({},kn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zo=Xe(yd),Sd=B({},Bl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dc}),zd=Xe(Sd),jd=B({},Na,{propertyName:0,elapsedTime:0,pseudoElement:0}),Md=Xe(jd),Ad=B({},kn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nd=Xe(Ad),wd=B({},Na,{newState:0,oldState:0}),Ed=Xe(wd),Dd=[9,13,27,32],mc=Ct&&"CompositionEvent"in window,kl=null;Ct&&"documentMode"in document&&(kl=document.documentMode);var Td=Ct&&"TextEvent"in window&&!kl,Ko=Ct&&(!mc||kl&&8<kl&&11>=kl),Jo=" ",Wo=!1;function Fo(e,t){switch(e){case"keyup":return Dd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $o(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pa=!1;function _d(e,t){switch(e){case"compositionend":return $o(t);case"keypress":return t.which!==32?null:(Wo=!0,Jo);case"textInput":return e=t.data,e===Jo&&Wo?null:e;default:return null}}function Od(e,t){if(Pa)return e==="compositionend"||!mc&&Fo(e,t)?(e=Go(),Hn=oc=It=null,Pa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ko&&t.locale!=="ko"?null:t.data;default:return null}}var Cd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Io(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cd[e.type]:t==="textarea"}function Po(e,t,a,l){$a?Ia?Ia.push(l):Ia=[l]:$a=l,t=wi(t,"onChange"),0<t.length&&(a=new Rn("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var ql=null,Yl=null;function Hd(e){U0(e,0)}function qn(e){var t=Cl(e);if(Ho(t))return e}function es(e,t){if(e==="change")return t}var ts=!1;if(Ct){var gc;if(Ct){var pc="oninput"in document;if(!pc){var as=document.createElement("div");as.setAttribute("oninput","return;"),pc=typeof as.oninput=="function"}gc=pc}else gc=!1;ts=gc&&(!document.documentMode||9<document.documentMode)}function ls(){ql&&(ql.detachEvent("onpropertychange",ns),Yl=ql=null)}function ns(e){if(e.propertyName==="value"&&qn(Yl)){var t=[];Po(t,Yl,e,ic(e)),Lo(Hd,t)}}function Ud(e,t,a){e==="focusin"?(ls(),ql=t,Yl=a,ql.attachEvent("onpropertychange",ns)):e==="focusout"&&ls()}function Bd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qn(Yl)}function Rd(e,t){if(e==="click")return qn(t)}function kd(e,t){if(e==="input"||e==="change")return qn(t)}function qd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pe=typeof Object.is=="function"?Object.is:qd;function Ll(e,t){if(Pe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Zi.call(t,n)||!Pe(e[n],t[n]))return!1}return!0}function is(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cs(e,t){var a=is(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=is(a)}}function rs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?rs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function os(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=On(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=On(e.document)}return t}function hc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Yd=Ct&&"documentMode"in document&&11>=document.documentMode,el=null,bc=null,Gl=null,vc=!1;function ss(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;vc||el==null||el!==On(l)||(l=el,"selectionStart"in l&&hc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Gl&&Ll(Gl,l)||(Gl=l,l=wi(bc,"onSelect"),0<l.length&&(t=new Rn("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=el)))}function wa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var tl={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionrun:wa("Transition","TransitionRun"),transitionstart:wa("Transition","TransitionStart"),transitioncancel:wa("Transition","TransitionCancel"),transitionend:wa("Transition","TransitionEnd")},xc={},us={};Ct&&(us=document.createElement("div").style,"AnimationEvent"in window||(delete tl.animationend.animation,delete tl.animationiteration.animation,delete tl.animationstart.animation),"TransitionEvent"in window||delete tl.transitionend.transition);function Ea(e){if(xc[e])return xc[e];if(!tl[e])return e;var t=tl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in us)return xc[e]=t[a];return e}var fs=Ea("animationend"),ds=Ea("animationiteration"),ms=Ea("animationstart"),Ld=Ea("transitionrun"),Gd=Ea("transitionstart"),Xd=Ea("transitioncancel"),gs=Ea("transitionend"),ps=new Map,yc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yc.push("scrollEnd");function xt(e,t){ps.set(e,t),Aa(t,[e])}var Yn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ut=[],al=0,Sc=0;function Ln(){for(var e=al,t=Sc=al=0;t<e;){var a=ut[t];ut[t++]=null;var l=ut[t];ut[t++]=null;var n=ut[t];ut[t++]=null;var i=ut[t];if(ut[t++]=null,l!==null&&n!==null){var c=l.pending;c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n}i!==0&&hs(a,n,i)}}function Gn(e,t,a,l){ut[al++]=e,ut[al++]=t,ut[al++]=a,ut[al++]=l,Sc|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function zc(e,t,a,l){return Gn(e,t,a,l),Xn(e)}function Da(e,t){return Gn(e,null,null,t),Xn(e)}function hs(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-Ie(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function Xn(e){if(50<fn)throw fn=0,_r=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ll={};function Vd(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,a,l){return new Vd(e,t,a,l)}function jc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ht(e,t){var a=e.alternate;return a===null?(a=et(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function bs(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Vn(e,t,a,l,n,i){var c=0;if(l=e,typeof e=="function")jc(e)&&(c=1);else if(typeof e=="string")c=W1(e,a,D.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case jt:return e=et(31,a,t,n),e.elementType=jt,e.lanes=i,e;case Be:return Ta(a.children,n,i,t);case Dt:c=8,n|=24;break;case We:return e=et(12,a,t,n|2),e.elementType=We,e.lanes=i,e;case zt:return e=et(13,a,t,n),e.elementType=zt,e.lanes=i,e;case qe:return e=et(19,a,t,n),e.elementType=qe,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case He:c=10;break e;case Wt:c=9;break e;case rt:c=11;break e;case F:c=14;break e;case Ye:c=16,l=null;break e}c=29,a=Error(u(130,e===null?"null":typeof e,"")),l=null}return t=et(c,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Ta(e,t,a,l){return e=et(7,e,l,t),e.lanes=a,e}function Mc(e,t,a){return e=et(6,e,null,t),e.lanes=a,e}function vs(e){var t=et(18,null,null,0);return t.stateNode=e,t}function Ac(e,t,a){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var xs=new WeakMap;function ft(e,t){if(typeof e=="object"&&e!==null){var a=xs.get(e);return a!==void 0?a:(t={value:e,source:t,stack:vo(t)},xs.set(e,t),t)}return{value:e,source:t,stack:vo(t)}}var nl=[],il=0,Qn=null,Xl=0,dt=[],mt=0,Pt=null,At=1,Nt="";function Ut(e,t){nl[il++]=Xl,nl[il++]=Qn,Qn=e,Xl=t}function ys(e,t,a){dt[mt++]=At,dt[mt++]=Nt,dt[mt++]=Pt,Pt=e;var l=At;e=Nt;var n=32-Ie(l)-1;l&=~(1<<n),a+=1;var i=32-Ie(t)+n;if(30<i){var c=n-n%5;i=(l&(1<<c)-1).toString(32),l>>=c,n-=c,At=1<<32-Ie(t)+n|a<<n|l,Nt=i+e}else At=1<<i|a<<n|l,Nt=e}function Nc(e){e.return!==null&&(Ut(e,1),ys(e,1,0))}function wc(e){for(;e===Qn;)Qn=nl[--il],nl[il]=null,Xl=nl[--il],nl[il]=null;for(;e===Pt;)Pt=dt[--mt],dt[mt]=null,Nt=dt[--mt],dt[mt]=null,At=dt[--mt],dt[mt]=null}function Ss(e,t){dt[mt++]=At,dt[mt++]=Nt,dt[mt++]=Pt,At=t.id,Nt=t.overflow,Pt=e}var Te=null,ge=null,$=!1,ea=null,gt=!1,Ec=Error(u(519));function ta(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Vl(ft(t,e)),Ec}function zs(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[De]=e,t[Ge]=l,a){case"dialog":Z("cancel",t),Z("close",t);break;case"iframe":case"object":case"embed":Z("load",t);break;case"video":case"audio":for(a=0;a<mn.length;a++)Z(mn[a],t);break;case"source":Z("error",t);break;case"img":case"image":case"link":Z("error",t),Z("load",t);break;case"details":Z("toggle",t);break;case"input":Z("invalid",t),Uo(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Z("invalid",t);break;case"textarea":Z("invalid",t),Ro(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||q0(t.textContent,a)?(l.popover!=null&&(Z("beforetoggle",t),Z("toggle",t)),l.onScroll!=null&&Z("scroll",t),l.onScrollEnd!=null&&Z("scrollend",t),l.onClick!=null&&(t.onclick=Ot),t=!0):t=!1,t||ta(e,!0)}function js(e){for(Te=e.return;Te;)switch(Te.tag){case 5:case 31:case 13:gt=!1;return;case 27:case 3:gt=!0;return;default:Te=Te.return}}function cl(e){if(e!==Te)return!1;if(!$)return js(e),$=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Zr(e.type,e.memoizedProps)),a=!a),a&&ge&&ta(e),js(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));ge=J0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));ge=J0(e)}else t===27?(t=ge,pa(e.type)?(e=$r,$r=null,ge=e):ge=t):ge=Te?ht(e.stateNode.nextSibling):null;return!0}function _a(){ge=Te=null,$=!1}function Dc(){var e=ea;return e!==null&&(Ke===null?Ke=e:Ke.push.apply(Ke,e),ea=null),e}function Vl(e){ea===null?ea=[e]:ea.push(e)}var Tc=d(null),Oa=null,Bt=null;function aa(e,t,a){w(Tc,t._currentValue),t._currentValue=a}function Rt(e){e._currentValue=Tc.current,z(Tc)}function _c(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Oc(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var c=n.child;i=i.firstContext;e:for(;i!==null;){var o=i;i=n;for(var s=0;s<t.length;s++)if(o.context===t[s]){i.lanes|=a,o=i.alternate,o!==null&&(o.lanes|=a),_c(i.return,a,e),l||(c=null);break e}i=o.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(u(341));c.lanes|=a,i=c.alternate,i!==null&&(i.lanes|=a),_c(c,a,e),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===e){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function rl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(u(387));if(c=c.memoizedProps,c!==null){var o=n.type;Pe(n.pendingProps.value,c.value)||(e!==null?e.push(o):e=[o])}}else if(n===le.current){if(c=n.alternate,c===null)throw Error(u(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(vn):e=[vn])}n=n.return}e!==null&&Oc(t,e,a,l),t.flags|=262144}function Zn(e){for(e=e.firstContext;e!==null;){if(!Pe(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ca(e){Oa=e,Bt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function _e(e){return Ms(Oa,e)}function Kn(e,t){return Oa===null&&Ca(e),Ms(e,t)}function Ms(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Bt===null){if(e===null)throw Error(u(308));Bt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Bt=Bt.next=t;return a}var Qd=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Zd=M.unstable_scheduleCallback,Kd=M.unstable_NormalPriority,ze={$$typeof:He,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cc(){return{controller:new Qd,data:new Map,refCount:0}}function Ql(e){e.refCount--,e.refCount===0&&Zd(Kd,function(){e.controller.abort()})}var Zl=null,Hc=0,ol=0,sl=null;function Jd(e,t){if(Zl===null){var a=Zl=[];Hc=0,ol=Rr(),sl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Hc++,t.then(As,As),t}function As(){if(--Hc===0&&Zl!==null){sl!==null&&(sl.status="fulfilled");var e=Zl;Zl=null,ol=0,sl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Wd(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Ns=x.S;x.S=function(e,t){s0=Fe(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Jd(e,t),Ns!==null&&Ns(e,t)};var Ha=d(null);function Uc(){var e=Ha.current;return e!==null?e:de.pooledCache}function Jn(e,t){t===null?w(Ha,Ha.current):w(Ha,t.pool)}function ws(){var e=Uc();return e===null?null:{parent:ze._currentValue,pool:e}}var ul=Error(u(460)),Bc=Error(u(474)),Wn=Error(u(542)),Fn={then:function(){}};function Es(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ds(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Ot,Ot),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_s(e),e;default:if(typeof t.status=="string")t.then(Ot,Ot);else{if(e=de,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_s(e),e}throw Ba=t,ul}}function Ua(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ba=a,ul):a}}var Ba=null;function Ts(){if(Ba===null)throw Error(u(459));var e=Ba;return Ba=null,e}function _s(e){if(e===ul||e===Wn)throw Error(u(483))}var fl=null,Kl=0;function $n(e){var t=Kl;return Kl+=1,fl===null&&(fl=[]),Ds(fl,e,t)}function Jl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function In(e,t){throw t.$$typeof===ue?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Os(e){function t(m,f){if(e){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function a(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function l(m){for(var f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function n(m,f){return m=Ht(m,f),m.index=0,m.sibling=null,m}function i(m,f,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=67108866,f):g):(m.flags|=67108866,f)):(m.flags|=1048576,f)}function c(m){return e&&m.alternate===null&&(m.flags|=67108866),m}function o(m,f,g,y){return f===null||f.tag!==6?(f=Mc(g,m.mode,y),f.return=m,f):(f=n(f,g),f.return=m,f)}function s(m,f,g,y){var C=g.type;return C===Be?v(m,f,g.props.children,y,g.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ye&&Ua(C)===f.type)?(f=n(f,g.props),Jl(f,g),f.return=m,f):(f=Vn(g.type,g.key,g.props,null,m.mode,y),Jl(f,g),f.return=m,f)}function p(m,f,g,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Ac(g,m.mode,y),f.return=m,f):(f=n(f,g.children||[]),f.return=m,f)}function v(m,f,g,y,C){return f===null||f.tag!==7?(f=Ta(g,m.mode,y,C),f.return=m,f):(f=n(f,g),f.return=m,f)}function S(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=Mc(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case R:return g=Vn(f.type,f.key,f.props,null,m.mode,g),Jl(g,f),g.return=m,g;case me:return f=Ac(f,m.mode,g),f.return=m,f;case Ye:return f=Ua(f),S(m,f,g)}if(vt(f)||Le(f))return f=Ta(f,m.mode,g,null),f.return=m,f;if(typeof f.then=="function")return S(m,$n(f),g);if(f.$$typeof===He)return S(m,Kn(m,f),g);In(m,f)}return null}function h(m,f,g,y){var C=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return C!==null?null:o(m,f,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case R:return g.key===C?s(m,f,g,y):null;case me:return g.key===C?p(m,f,g,y):null;case Ye:return g=Ua(g),h(m,f,g,y)}if(vt(g)||Le(g))return C!==null?null:v(m,f,g,y,null);if(typeof g.then=="function")return h(m,f,$n(g),y);if(g.$$typeof===He)return h(m,f,Kn(m,g),y);In(m,g)}return null}function b(m,f,g,y,C){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return m=m.get(g)||null,o(f,m,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case R:return m=m.get(y.key===null?g:y.key)||null,s(f,m,y,C);case me:return m=m.get(y.key===null?g:y.key)||null,p(f,m,y,C);case Ye:return y=Ua(y),b(m,f,g,y,C)}if(vt(y)||Le(y))return m=m.get(g)||null,v(f,m,y,C,null);if(typeof y.then=="function")return b(m,f,g,$n(y),C);if(y.$$typeof===He)return b(m,f,g,Kn(f,y),C);In(f,y)}return null}function E(m,f,g,y){for(var C=null,P=null,_=f,X=f=0,J=null;_!==null&&X<g.length;X++){_.index>X?(J=_,_=null):J=_.sibling;var ee=h(m,_,g[X],y);if(ee===null){_===null&&(_=J);break}e&&_&&ee.alternate===null&&t(m,_),f=i(ee,f,X),P===null?C=ee:P.sibling=ee,P=ee,_=J}if(X===g.length)return a(m,_),$&&Ut(m,X),C;if(_===null){for(;X<g.length;X++)_=S(m,g[X],y),_!==null&&(f=i(_,f,X),P===null?C=_:P.sibling=_,P=_);return $&&Ut(m,X),C}for(_=l(_);X<g.length;X++)J=b(_,m,X,g[X],y),J!==null&&(e&&J.alternate!==null&&_.delete(J.key===null?X:J.key),f=i(J,f,X),P===null?C=J:P.sibling=J,P=J);return e&&_.forEach(function(ya){return t(m,ya)}),$&&Ut(m,X),C}function U(m,f,g,y){if(g==null)throw Error(u(151));for(var C=null,P=null,_=f,X=f=0,J=null,ee=g.next();_!==null&&!ee.done;X++,ee=g.next()){_.index>X?(J=_,_=null):J=_.sibling;var ya=h(m,_,ee.value,y);if(ya===null){_===null&&(_=J);break}e&&_&&ya.alternate===null&&t(m,_),f=i(ya,f,X),P===null?C=ya:P.sibling=ya,P=ya,_=J}if(ee.done)return a(m,_),$&&Ut(m,X),C;if(_===null){for(;!ee.done;X++,ee=g.next())ee=S(m,ee.value,y),ee!==null&&(f=i(ee,f,X),P===null?C=ee:P.sibling=ee,P=ee);return $&&Ut(m,X),C}for(_=l(_);!ee.done;X++,ee=g.next())ee=b(_,m,X,ee.value,y),ee!==null&&(e&&ee.alternate!==null&&_.delete(ee.key===null?X:ee.key),f=i(ee,f,X),P===null?C=ee:P.sibling=ee,P=ee);return e&&_.forEach(function(c2){return t(m,c2)}),$&&Ut(m,X),C}function se(m,f,g,y){if(typeof g=="object"&&g!==null&&g.type===Be&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case R:e:{for(var C=g.key;f!==null;){if(f.key===C){if(C=g.type,C===Be){if(f.tag===7){a(m,f.sibling),y=n(f,g.props.children),y.return=m,m=y;break e}}else if(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ye&&Ua(C)===f.type){a(m,f.sibling),y=n(f,g.props),Jl(y,g),y.return=m,m=y;break e}a(m,f);break}else t(m,f);f=f.sibling}g.type===Be?(y=Ta(g.props.children,m.mode,y,g.key),y.return=m,m=y):(y=Vn(g.type,g.key,g.props,null,m.mode,y),Jl(y,g),y.return=m,m=y)}return c(m);case me:e:{for(C=g.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){a(m,f.sibling),y=n(f,g.children||[]),y.return=m,m=y;break e}else{a(m,f);break}else t(m,f);f=f.sibling}y=Ac(g,m.mode,y),y.return=m,m=y}return c(m);case Ye:return g=Ua(g),se(m,f,g,y)}if(vt(g))return E(m,f,g,y);if(Le(g)){if(C=Le(g),typeof C!="function")throw Error(u(150));return g=C.call(g),U(m,f,g,y)}if(typeof g.then=="function")return se(m,f,$n(g),y);if(g.$$typeof===He)return se(m,f,Kn(m,g),y);In(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,f!==null&&f.tag===6?(a(m,f.sibling),y=n(f,g),y.return=m,m=y):(a(m,f),y=Mc(g,m.mode,y),y.return=m,m=y),c(m)):a(m,f)}return function(m,f,g,y){try{Kl=0;var C=se(m,f,g,y);return fl=null,C}catch(_){if(_===ul||_===Wn)throw _;var P=et(29,_,null,m.mode);return P.lanes=y,P.return=m,P}}}var Ra=Os(!0),Cs=Os(!1),la=!1;function Rc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function kc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ia(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(te&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=Xn(e),hs(e,null,a),t}return Gn(e,l,t,a),Xn(e)}function Wl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Mo(e,a)}}function qc(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=c:i=i.next=c,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Yc=!1;function Fl(){if(Yc){var e=sl;if(e!==null)throw e}}function $l(e,t,a,l){Yc=!1;var n=e.updateQueue;la=!1;var i=n.firstBaseUpdate,c=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var s=o,p=s.next;s.next=null,c===null?i=p:c.next=p,c=s;var v=e.alternate;v!==null&&(v=v.updateQueue,o=v.lastBaseUpdate,o!==c&&(o===null?v.firstBaseUpdate=p:o.next=p,v.lastBaseUpdate=s))}if(i!==null){var S=n.baseState;c=0,v=p=s=null,o=i;do{var h=o.lane&-536870913,b=h!==o.lane;if(b?(K&h)===h:(l&h)===h){h!==0&&h===ol&&(Yc=!0),v!==null&&(v=v.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var E=e,U=o;h=t;var se=a;switch(U.tag){case 1:if(E=U.payload,typeof E=="function"){S=E.call(se,S,h);break e}S=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=U.payload,h=typeof E=="function"?E.call(se,S,h):E,h==null)break e;S=B({},S,h);break e;case 2:la=!0}}h=o.callback,h!==null&&(e.flags|=64,b&&(e.flags|=8192),b=n.callbacks,b===null?n.callbacks=[h]:b.push(h))}else b={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},v===null?(p=v=b,s=S):v=v.next=b,c|=h;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;b=o,o=b.next,b.next=null,n.lastBaseUpdate=b,n.shared.pending=null}}while(!0);v===null&&(s=S),n.baseState=s,n.firstBaseUpdate=p,n.lastBaseUpdate=v,i===null&&(n.shared.lanes=0),ua|=c,e.lanes=c,e.memoizedState=S}}function Hs(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Us(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Hs(a[e],t)}var dl=d(null),Pn=d(0);function Bs(e,t){e=Zt,w(Pn,e),w(dl,t),Zt=e|t.baseLanes}function Lc(){w(Pn,Zt),w(dl,dl.current)}function Gc(){Zt=Pn.current,z(dl),z(Pn)}var tt=d(null),pt=null;function ca(e){var t=e.alternate;w(ye,ye.current&1),w(tt,e),pt===null&&(t===null||dl.current!==null||t.memoizedState!==null)&&(pt=e)}function Xc(e){w(ye,ye.current),w(tt,e),pt===null&&(pt=e)}function Rs(e){e.tag===22?(w(ye,ye.current),w(tt,e),pt===null&&(pt=e)):ra()}function ra(){w(ye,ye.current),w(tt,tt.current)}function at(e){z(tt),pt===e&&(pt=null),z(ye)}var ye=d(0);function ei(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Wr(a)||Fr(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var kt=0,G=null,re=null,je=null,ti=!1,ml=!1,ka=!1,ai=0,Il=0,gl=null,Fd=0;function be(){throw Error(u(321))}function Vc(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Pe(e[a],t[a]))return!1;return!0}function Qc(e,t,a,l,n,i){return kt=i,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,x.H=e===null||e.memoizedState===null?yu:cr,ka=!1,i=a(l,n),ka=!1,ml&&(i=qs(t,a,l,n)),ks(e),i}function ks(e){x.H=tn;var t=re!==null&&re.next!==null;if(kt=0,je=re=G=null,ti=!1,Il=0,gl=null,t)throw Error(u(300));e===null||Me||(e=e.dependencies,e!==null&&Zn(e)&&(Me=!0))}function qs(e,t,a,l){G=e;var n=0;do{if(ml&&(gl=null),Il=0,ml=!1,25<=n)throw Error(u(301));if(n+=1,je=re=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}x.H=Su,i=t(a,l)}while(ml);return i}function $d(){var e=x.H,t=e.useState()[0];return t=typeof t.then=="function"?Pl(t):t,e=e.useState()[0],(re!==null?re.memoizedState:null)!==e&&(G.flags|=1024),t}function Zc(){var e=ai!==0;return ai=0,e}function Kc(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Jc(e){if(ti){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ti=!1}kt=0,je=re=G=null,ml=!1,Il=ai=0,gl=null}function ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?G.memoizedState=je=e:je=je.next=e,je}function Se(){if(re===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=je===null?G.memoizedState:je.next;if(t!==null)je=t,re=e;else{if(e===null)throw G.alternate===null?Error(u(467)):Error(u(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},je===null?G.memoizedState=je=e:je=je.next=e}return je}function li(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pl(e){var t=Il;return Il+=1,gl===null&&(gl=[]),e=Ds(gl,e,t),t=G,(je===null?t.memoizedState:je.next)===null&&(t=t.alternate,x.H=t===null||t.memoizedState===null?yu:cr),e}function ni(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Pl(e);if(e.$$typeof===He)return _e(e)}throw Error(u(438,String(e)))}function Wc(e){var t=null,a=G.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=G.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=li(),G.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Xa;return t.index++,a}function qt(e,t){return typeof t=="function"?t(e):t}function ii(e){var t=Se();return Fc(t,re,e)}function Fc(e,t,a){var l=e.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var c=n.next;n.next=i.next,i.next=c}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var o=c=null,s=null,p=t,v=!1;do{var S=p.lane&-536870913;if(S!==p.lane?(K&S)===S:(kt&S)===S){var h=p.revertLane;if(h===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),S===ol&&(v=!0);else if((kt&h)===h){p=p.next,h===ol&&(v=!0);continue}else S={lane:0,revertLane:p.revertLane,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},s===null?(o=s=S,c=i):s=s.next=S,G.lanes|=h,ua|=h;S=p.action,ka&&a(i,S),i=p.hasEagerState?p.eagerState:a(i,S)}else h={lane:S,revertLane:p.revertLane,gesture:p.gesture,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},s===null?(o=s=h,c=i):s=s.next=h,G.lanes|=S,ua|=S;p=p.next}while(p!==null&&p!==t);if(s===null?c=i:s.next=o,!Pe(i,e.memoizedState)&&(Me=!0,v&&(a=sl,a!==null)))throw a;e.memoizedState=i,e.baseState=c,e.baseQueue=s,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function $c(e){var t=Se(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var c=n=n.next;do i=e(i,c.action),c=c.next;while(c!==n);Pe(i,t.memoizedState)||(Me=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Ys(e,t,a){var l=G,n=Se(),i=$;if(i){if(a===void 0)throw Error(u(407));a=a()}else a=t();var c=!Pe((re||n).memoizedState,a);if(c&&(n.memoizedState=a,Me=!0),n=n.queue,er(Xs.bind(null,l,n,e),[e]),n.getSnapshot!==t||c||je!==null&&je.memoizedState.tag&1){if(l.flags|=2048,pl(9,{destroy:void 0},Gs.bind(null,l,n,a,t),null),de===null)throw Error(u(349));i||(kt&127)!==0||Ls(l,t,a)}return a}function Ls(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=G.updateQueue,t===null?(t=li(),G.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Gs(e,t,a,l){t.value=a,t.getSnapshot=l,Vs(t)&&Qs(e)}function Xs(e,t,a){return a(function(){Vs(t)&&Qs(e)})}function Vs(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Pe(e,a)}catch{return!0}}function Qs(e){var t=Da(e,2);t!==null&&Je(t,e,2)}function Ic(e){var t=ke();if(typeof e=="function"){var a=e;if(e=a(),ka){Ft(!0);try{a()}finally{Ft(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:e},t}function Zs(e,t,a,l){return e.baseState=a,Fc(e,re,typeof l=="function"?l:qt)}function Id(e,t,a,l,n){if(oi(e))throw Error(u(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};x.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Ks(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Ks(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=x.T,c={};x.T=c;try{var o=a(n,l),s=x.S;s!==null&&s(c,o),Js(e,t,o)}catch(p){Pc(e,t,p)}finally{i!==null&&c.types!==null&&(i.types=c.types),x.T=i}}else try{i=a(n,l),Js(e,t,i)}catch(p){Pc(e,t,p)}}function Js(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Ws(e,t,l)},function(l){return Pc(e,t,l)}):Ws(e,t,a)}function Ws(e,t,a){t.status="fulfilled",t.value=a,Fs(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Ks(e,a)))}function Pc(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Fs(t),t=t.next;while(t!==l)}e.action=null}function Fs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function $s(e,t){return t}function Is(e,t){if($){var a=de.formState;if(a!==null){e:{var l=G;if($){if(ge){t:{for(var n=ge,i=gt;n.nodeType!==8;){if(!i){n=null;break t}if(n=ht(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){ge=ht(n.nextSibling),l=n.data==="F!";break e}}ta(l)}l=!1}l&&(t=a[0])}}return a=ke(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$s,lastRenderedState:t},a.queue=l,a=bu.bind(null,G,l),l.dispatch=a,l=Ic(!1),i=ir.bind(null,G,!1,l.queue),l=ke(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Id.bind(null,G,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Ps(e){var t=Se();return eu(t,re,e)}function eu(e,t,a){if(t=Fc(e,t,$s)[0],e=ii(qt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Pl(t)}catch(c){throw c===ul?Wn:c}else l=t;t=Se();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(G.flags|=2048,pl(9,{destroy:void 0},Pd.bind(null,n,a),null)),[l,i,e]}function Pd(e,t){e.action=t}function tu(e){var t=Se(),a=re;if(a!==null)return eu(t,a,e);Se(),t=t.memoizedState,a=Se();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function pl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=G.updateQueue,t===null&&(t=li(),G.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function au(){return Se().memoizedState}function ci(e,t,a,l){var n=ke();G.flags|=e,n.memoizedState=pl(1|t,{destroy:void 0},a,l===void 0?null:l)}function ri(e,t,a,l){var n=Se();l=l===void 0?null:l;var i=n.memoizedState.inst;re!==null&&l!==null&&Vc(l,re.memoizedState.deps)?n.memoizedState=pl(t,i,a,l):(G.flags|=e,n.memoizedState=pl(1|t,i,a,l))}function lu(e,t){ci(8390656,8,e,t)}function er(e,t){ri(2048,8,e,t)}function e1(e){G.flags|=4;var t=G.updateQueue;if(t===null)t=li(),G.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function nu(e){var t=Se().memoizedState;return e1({ref:t,nextImpl:e}),function(){if((te&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function iu(e,t){return ri(4,2,e,t)}function cu(e,t){return ri(4,4,e,t)}function ru(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ou(e,t,a){a=a!=null?a.concat([e]):null,ri(4,4,ru.bind(null,t,e),a)}function tr(){}function su(e,t){var a=Se();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Vc(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function uu(e,t){var a=Se();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Vc(t,l[1]))return l[0];if(l=e(),ka){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[l,t],l}function ar(e,t,a){return a===void 0||(kt&1073741824)!==0&&(K&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=f0(),G.lanes|=e,ua|=e,a)}function fu(e,t,a,l){return Pe(a,t)?a:dl.current!==null?(e=ar(e,a,l),Pe(e,t)||(Me=!0),e):(kt&42)===0||(kt&1073741824)!==0&&(K&261930)===0?(Me=!0,e.memoizedState=a):(e=f0(),G.lanes|=e,ua|=e,t)}function du(e,t,a,l,n){var i=N.p;N.p=i!==0&&8>i?i:8;var c=x.T,o={};x.T=o,ir(e,!1,t,a);try{var s=n(),p=x.S;if(p!==null&&p(o,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var v=Wd(s,l);en(e,t,v,it(e))}else en(e,t,l,it(e))}catch(S){en(e,t,{then:function(){},status:"rejected",reason:S},it())}finally{N.p=i,c!==null&&o.types!==null&&(c.types=o.types),x.T=c}}function t1(){}function lr(e,t,a,l){if(e.tag!==5)throw Error(u(476));var n=mu(e).queue;du(e,n,t,k,a===null?t1:function(){return gu(e),a(l)})}function mu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:k},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function gu(e){var t=mu(e);t.next===null&&(t=e.alternate.memoizedState),en(e,t.next.queue,{},it())}function nr(){return _e(vn)}function pu(){return Se().memoizedState}function hu(){return Se().memoizedState}function a1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=it();e=na(a);var l=ia(t,e,a);l!==null&&(Je(l,t,a),Wl(l,t,a)),t={cache:Cc()},e.payload=t;return}t=t.return}}function l1(e,t,a){var l=it();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},oi(e)?vu(t,a):(a=zc(e,t,a,l),a!==null&&(Je(a,e,l),xu(a,t,l)))}function bu(e,t,a){var l=it();en(e,t,a,l)}function en(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(oi(e))vu(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var c=t.lastRenderedState,o=i(c,a);if(n.hasEagerState=!0,n.eagerState=o,Pe(o,c))return Gn(e,t,n,0),de===null&&Ln(),!1}catch{}if(a=zc(e,t,n,l),a!==null)return Je(a,e,l),xu(a,t,l),!0}return!1}function ir(e,t,a,l){if(l={lane:2,revertLane:Rr(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},oi(e)){if(t)throw Error(u(479))}else t=zc(e,a,l,2),t!==null&&Je(t,e,2)}function oi(e){var t=e.alternate;return e===G||t!==null&&t===G}function vu(e,t){ml=ti=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function xu(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Mo(e,a)}}var tn={readContext:_e,use:ni,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useLayoutEffect:be,useInsertionEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useSyncExternalStore:be,useId:be,useHostTransitionStatus:be,useFormState:be,useActionState:be,useOptimistic:be,useMemoCache:be,useCacheRefresh:be};tn.useEffectEvent=be;var yu={readContext:_e,use:ni,useCallback:function(e,t){return ke().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:lu,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,ci(4194308,4,ru.bind(null,t,e),a)},useLayoutEffect:function(e,t){return ci(4194308,4,e,t)},useInsertionEffect:function(e,t){ci(4,2,e,t)},useMemo:function(e,t){var a=ke();t=t===void 0?null:t;var l=e();if(ka){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=ke();if(a!==void 0){var n=a(t);if(ka){Ft(!0);try{a(t)}finally{Ft(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=l1.bind(null,G,e),[l.memoizedState,e]},useRef:function(e){var t=ke();return e={current:e},t.memoizedState=e},useState:function(e){e=Ic(e);var t=e.queue,a=bu.bind(null,G,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:tr,useDeferredValue:function(e,t){var a=ke();return ar(a,e,t)},useTransition:function(){var e=Ic(!1);return e=du.bind(null,G,e.queue,!0,!1),ke().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=G,n=ke();if($){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),de===null)throw Error(u(349));(K&127)!==0||Ls(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,lu(Xs.bind(null,l,i,e),[e]),l.flags|=2048,pl(9,{destroy:void 0},Gs.bind(null,l,i,a,t),null),a},useId:function(){var e=ke(),t=de.identifierPrefix;if($){var a=Nt,l=At;a=(l&~(1<<32-Ie(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=ai++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Fd++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:nr,useFormState:Is,useActionState:Is,useOptimistic:function(e){var t=ke();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=ir.bind(null,G,!0,a),a.dispatch=t,[e,t]},useMemoCache:Wc,useCacheRefresh:function(){return ke().memoizedState=a1.bind(null,G)},useEffectEvent:function(e){var t=ke(),a={impl:e};return t.memoizedState=a,function(){if((te&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},cr={readContext:_e,use:ni,useCallback:su,useContext:_e,useEffect:er,useImperativeHandle:ou,useInsertionEffect:iu,useLayoutEffect:cu,useMemo:uu,useReducer:ii,useRef:au,useState:function(){return ii(qt)},useDebugValue:tr,useDeferredValue:function(e,t){var a=Se();return fu(a,re.memoizedState,e,t)},useTransition:function(){var e=ii(qt)[0],t=Se().memoizedState;return[typeof e=="boolean"?e:Pl(e),t]},useSyncExternalStore:Ys,useId:pu,useHostTransitionStatus:nr,useFormState:Ps,useActionState:Ps,useOptimistic:function(e,t){var a=Se();return Zs(a,re,e,t)},useMemoCache:Wc,useCacheRefresh:hu};cr.useEffectEvent=nu;var Su={readContext:_e,use:ni,useCallback:su,useContext:_e,useEffect:er,useImperativeHandle:ou,useInsertionEffect:iu,useLayoutEffect:cu,useMemo:uu,useReducer:$c,useRef:au,useState:function(){return $c(qt)},useDebugValue:tr,useDeferredValue:function(e,t){var a=Se();return re===null?ar(a,e,t):fu(a,re.memoizedState,e,t)},useTransition:function(){var e=$c(qt)[0],t=Se().memoizedState;return[typeof e=="boolean"?e:Pl(e),t]},useSyncExternalStore:Ys,useId:pu,useHostTransitionStatus:nr,useFormState:tu,useActionState:tu,useOptimistic:function(e,t){var a=Se();return re!==null?Zs(a,re,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Wc,useCacheRefresh:hu};Su.useEffectEvent=nu;function rr(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:B({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var or={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=it(),n=na(l);n.payload=t,a!=null&&(n.callback=a),t=ia(e,n,l),t!==null&&(Je(t,e,l),Wl(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=it(),n=na(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ia(e,n,l),t!==null&&(Je(t,e,l),Wl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=it(),l=na(a);l.tag=2,t!=null&&(l.callback=t),t=ia(e,l,a),t!==null&&(Je(t,e,a),Wl(t,e,a))}};function zu(e,t,a,l,n,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,c):t.prototype&&t.prototype.isPureReactComponent?!Ll(a,l)||!Ll(n,i):!0}function ju(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&or.enqueueReplaceState(t,t.state,null)}function qa(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=B({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function Mu(e){Yn(e)}function Au(e){console.error(e)}function Nu(e){Yn(e)}function si(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function wu(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function sr(e,t,a){return a=na(a),a.tag=3,a.payload={element:null},a.callback=function(){si(e,t)},a}function Eu(e){return e=na(e),e.tag=3,e}function Du(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){wu(t,a,l)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){wu(t,a,l),typeof n!="function"&&(fa===null?fa=new Set([this]):fa.add(this));var o=l.stack;this.componentDidCatch(l.value,{componentStack:o!==null?o:""})})}function n1(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&rl(t,a,n,!0),a=tt.current,a!==null){switch(a.tag){case 31:case 13:return pt===null?Si():a.alternate===null&&ve===0&&(ve=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Fn?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Hr(e,l,n)),!1;case 22:return a.flags|=65536,l===Fn?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Hr(e,l,n)),!1}throw Error(u(435,a.tag))}return Hr(e,l,n),Si(),!1}if($)return t=tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Ec&&(e=Error(u(422),{cause:l}),Vl(ft(e,a)))):(l!==Ec&&(t=Error(u(423),{cause:l}),Vl(ft(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=ft(l,a),n=sr(e.stateNode,l,n),qc(e,n),ve!==4&&(ve=2)),!1;var i=Error(u(520),{cause:l});if(i=ft(i,a),un===null?un=[i]:un.push(i),ve!==4&&(ve=2),t===null)return!0;l=ft(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=sr(a.stateNode,l,e),qc(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(fa===null||!fa.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Eu(n),Du(n,e,a,l),qc(a,n),!1}a=a.return}while(a!==null);return!1}var ur=Error(u(461)),Me=!1;function Oe(e,t,a,l){t.child=e===null?Cs(t,null,a,l):Ra(t,e.child,a,l)}function Tu(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var c={};for(var o in l)o!=="ref"&&(c[o]=l[o])}else c=l;return Ca(t),l=Qc(e,t,a,c,i,n),o=Zc(),e!==null&&!Me?(Kc(e,t,n),Yt(e,t,n)):($&&o&&Nc(t),t.flags|=1,Oe(e,t,l,n),t.child)}function _u(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!jc(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Ou(e,t,i,l,n)):(e=Vn(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!vr(e,n)){var c=i.memoizedProps;if(a=a.compare,a=a!==null?a:Ll,a(c,l)&&e.ref===t.ref)return Yt(e,t,n)}return t.flags|=1,e=Ht(i,l),e.ref=t.ref,e.return=t,t.child=e}function Ou(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Ll(i,l)&&e.ref===t.ref)if(Me=!1,t.pendingProps=l=i,vr(e,n))(e.flags&131072)!==0&&(Me=!0);else return t.lanes=e.lanes,Yt(e,t,n)}return fr(e,t,a,l,n)}function Cu(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return Hu(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Jn(t,i!==null?i.cachePool:null),i!==null?Bs(t,i):Lc(),Rs(t);else return l=t.lanes=536870912,Hu(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(Jn(t,i.cachePool),Bs(t,i),ra(),t.memoizedState=null):(e!==null&&Jn(t,null),Lc(),ra());return Oe(e,t,n,a),t.child}function an(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Hu(e,t,a,l,n){var i=Uc();return i=i===null?null:{parent:ze._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Jn(t,null),Lc(),Rs(t),e!==null&&rl(e,t,l,!0),t.childLanes=n,null}function ui(e,t){return t=di({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Uu(e,t,a){return Ra(t,e.child,null,a),e=ui(t,t.pendingProps),e.flags|=2,at(t),t.memoizedState=null,e}function i1(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if($){if(l.mode==="hidden")return e=ui(t,l),t.lanes=536870912,an(null,e);if(Xc(t),(e=ge)?(e=K0(e,gt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pt!==null?{id:At,overflow:Nt}:null,retryLane:536870912,hydrationErrors:null},a=vs(e),a.return=t,t.child=a,Te=t,ge=null)):e=null,e===null)throw ta(t);return t.lanes=536870912,null}return ui(t,l)}var i=e.memoizedState;if(i!==null){var c=i.dehydrated;if(Xc(t),n)if(t.flags&256)t.flags&=-257,t=Uu(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(Me||rl(e,t,a,!1),n=(a&e.childLanes)!==0,Me||n){if(l=de,l!==null&&(c=Ao(l,a),c!==0&&c!==i.retryLane))throw i.retryLane=c,Da(e,c),Je(l,e,c),ur;Si(),t=Uu(e,t,a)}else e=i.treeContext,ge=ht(c.nextSibling),Te=t,$=!0,ea=null,gt=!1,e!==null&&Ss(t,e),t=ui(t,l),t.flags|=4096;return t}return e=Ht(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function fi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function fr(e,t,a,l,n){return Ca(t),a=Qc(e,t,a,l,void 0,n),l=Zc(),e!==null&&!Me?(Kc(e,t,n),Yt(e,t,n)):($&&l&&Nc(t),t.flags|=1,Oe(e,t,a,n),t.child)}function Bu(e,t,a,l,n,i){return Ca(t),t.updateQueue=null,a=qs(t,l,a,n),ks(e),l=Zc(),e!==null&&!Me?(Kc(e,t,i),Yt(e,t,i)):($&&l&&Nc(t),t.flags|=1,Oe(e,t,a,i),t.child)}function Ru(e,t,a,l,n){if(Ca(t),t.stateNode===null){var i=ll,c=a.contextType;typeof c=="object"&&c!==null&&(i=_e(c)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=or,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},Rc(t),c=a.contextType,i.context=typeof c=="object"&&c!==null?_e(c):ll,i.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(rr(t,a,c,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&or.enqueueReplaceState(i,i.state,null),$l(t,l,i,n),Fl(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var o=t.memoizedProps,s=qa(a,o);i.props=s;var p=i.context,v=a.contextType;c=ll,typeof v=="object"&&v!==null&&(c=_e(v));var S=a.getDerivedStateFromProps;v=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,v||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o||p!==c)&&ju(t,i,l,c),la=!1;var h=t.memoizedState;i.state=h,$l(t,l,i,n),Fl(),p=t.memoizedState,o||h!==p||la?(typeof S=="function"&&(rr(t,a,S,l),p=t.memoizedState),(s=la||zu(t,a,s,l,h,p,c))?(v||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=p),i.props=l,i.state=p,i.context=c,l=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,kc(e,t),c=t.memoizedProps,v=qa(a,c),i.props=v,S=t.pendingProps,h=i.context,p=a.contextType,s=ll,typeof p=="object"&&p!==null&&(s=_e(p)),o=a.getDerivedStateFromProps,(p=typeof o=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==S||h!==s)&&ju(t,i,l,s),la=!1,h=t.memoizedState,i.state=h,$l(t,l,i,n),Fl();var b=t.memoizedState;c!==S||h!==b||la||e!==null&&e.dependencies!==null&&Zn(e.dependencies)?(typeof o=="function"&&(rr(t,a,o,l),b=t.memoizedState),(v=la||zu(t,a,v,l,h,b,s)||e!==null&&e.dependencies!==null&&Zn(e.dependencies))?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,b,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,b,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=b),i.props=l,i.state=b,i.context=s,l=v):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,fi(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Ra(t,e.child,null,n),t.child=Ra(t,null,a,n)):Oe(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Yt(e,t,n),e}function ku(e,t,a,l){return _a(),t.flags|=256,Oe(e,t,a,l),t.child}var dr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mr(e){return{baseLanes:e,cachePool:ws()}}function gr(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=nt),e}function qu(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(ye.current&2)!==0),c&&(n=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if($){if(n?ca(t):ra(),(e=ge)?(e=K0(e,gt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pt!==null?{id:At,overflow:Nt}:null,retryLane:536870912,hydrationErrors:null},a=vs(e),a.return=t,t.child=a,Te=t,ge=null)):e=null,e===null)throw ta(t);return Fr(e)?t.lanes=32:t.lanes=536870912,null}var o=l.children;return l=l.fallback,n?(ra(),n=t.mode,o=di({mode:"hidden",children:o},n),l=Ta(l,n,a,null),o.return=t,l.return=t,o.sibling=l,t.child=o,l=t.child,l.memoizedState=mr(a),l.childLanes=gr(e,c,a),t.memoizedState=dr,an(null,l)):(ca(t),pr(t,o))}var s=e.memoizedState;if(s!==null&&(o=s.dehydrated,o!==null)){if(i)t.flags&256?(ca(t),t.flags&=-257,t=hr(e,t,a)):t.memoizedState!==null?(ra(),t.child=e.child,t.flags|=128,t=null):(ra(),o=l.fallback,n=t.mode,l=di({mode:"visible",children:l.children},n),o=Ta(o,n,a,null),o.flags|=2,l.return=t,o.return=t,l.sibling=o,t.child=l,Ra(t,e.child,null,a),l=t.child,l.memoizedState=mr(a),l.childLanes=gr(e,c,a),t.memoizedState=dr,t=an(null,l));else if(ca(t),Fr(o)){if(c=o.nextSibling&&o.nextSibling.dataset,c)var p=c.dgst;c=p,l=Error(u(419)),l.stack="",l.digest=c,Vl({value:l,source:null,stack:null}),t=hr(e,t,a)}else if(Me||rl(e,t,a,!1),c=(a&e.childLanes)!==0,Me||c){if(c=de,c!==null&&(l=Ao(c,a),l!==0&&l!==s.retryLane))throw s.retryLane=l,Da(e,l),Je(c,e,l),ur;Wr(o)||Si(),t=hr(e,t,a)}else Wr(o)?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,ge=ht(o.nextSibling),Te=t,$=!0,ea=null,gt=!1,e!==null&&Ss(t,e),t=pr(t,l.children),t.flags|=4096);return t}return n?(ra(),o=l.fallback,n=t.mode,s=e.child,p=s.sibling,l=Ht(s,{mode:"hidden",children:l.children}),l.subtreeFlags=s.subtreeFlags&65011712,p!==null?o=Ht(p,o):(o=Ta(o,n,a,null),o.flags|=2),o.return=t,l.return=t,l.sibling=o,t.child=l,an(null,l),l=t.child,o=e.child.memoizedState,o===null?o=mr(a):(n=o.cachePool,n!==null?(s=ze._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=ws(),o={baseLanes:o.baseLanes|a,cachePool:n}),l.memoizedState=o,l.childLanes=gr(e,c,a),t.memoizedState=dr,an(e.child,l)):(ca(t),a=e.child,e=a.sibling,a=Ht(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function pr(e,t){return t=di({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function di(e,t){return e=et(22,e,null,t),e.lanes=0,e}function hr(e,t,a){return Ra(t,e.child,null,a),e=pr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yu(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),_c(e.return,t,a)}function br(e,t,a,l,n,i){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=a,c.tailMode=n,c.treeForkCount=i)}function Lu(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var c=ye.current,o=(c&2)!==0;if(o?(c=c&1|2,t.flags|=128):c&=1,w(ye,c),Oe(e,t,l,a),l=$?Xl:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yu(e,a,t);else if(e.tag===19)Yu(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&ei(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),br(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&ei(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}br(t,!0,a,null,i,l);break;case"together":br(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Yt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ua|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(rl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=Ht(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ht(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function vr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Zn(e)))}function c1(e,t,a){switch(t.tag){case 3:Re(t,t.stateNode.containerInfo),aa(t,ze,e.memoizedState.cache),_a();break;case 27:case 5:El(t);break;case 4:Re(t,t.stateNode.containerInfo);break;case 10:aa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Xc(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ca(t),t.flags|=128,null):(a&t.child.childLanes)!==0?qu(e,t,a):(ca(t),e=Yt(e,t,a),e!==null?e.sibling:null);ca(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(rl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Lu(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),w(ye,ye.current),l)break;return null;case 22:return t.lanes=0,Cu(e,t,a,t.pendingProps);case 24:aa(t,ze,e.memoizedState.cache)}return Yt(e,t,a)}function Gu(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Me=!0;else{if(!vr(e,a)&&(t.flags&128)===0)return Me=!1,c1(e,t,a);Me=(e.flags&131072)!==0}else Me=!1,$&&(t.flags&1048576)!==0&&ys(t,Xl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ua(t.elementType),t.type=e,typeof e=="function")jc(e)?(l=qa(e,l),t.tag=1,t=Ru(null,t,e,l,a)):(t.tag=0,t=fr(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===rt){t.tag=11,t=Tu(null,t,e,l,a);break e}else if(n===F){t.tag=14,t=_u(null,t,e,l,a);break e}}throw t=Tt(e)||e,Error(u(306,t,""))}}return t;case 0:return fr(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=qa(l,t.pendingProps),Ru(e,t,l,n,a);case 3:e:{if(Re(t,t.stateNode.containerInfo),e===null)throw Error(u(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,kc(e,t),$l(t,l,null,a);var c=t.memoizedState;if(l=c.cache,aa(t,ze,l),l!==i.cache&&Oc(t,[ze],a,!0),Fl(),l=c.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=ku(e,t,l,a);break e}else if(l!==n){n=ft(Error(u(424)),t),Vl(n),t=ku(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ge=ht(e.firstChild),Te=t,$=!0,ea=null,gt=!0,a=Cs(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(_a(),l===n){t=Yt(e,t,a);break e}Oe(e,t,l,a)}t=t.child}return t;case 26:return fi(e,t),e===null?(a=P0(t.type,null,t.pendingProps,null))?t.memoizedState=a:$||(a=t.type,e=t.pendingProps,l=Ei(V.current).createElement(a),l[De]=t,l[Ge]=e,Ce(l,a,e),we(l),t.stateNode=l):t.memoizedState=P0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return El(t),e===null&&$&&(l=t.stateNode=F0(t.type,t.pendingProps,V.current),Te=t,gt=!0,n=ge,pa(t.type)?($r=n,ge=ht(l.firstChild)):ge=n),Oe(e,t,t.pendingProps.children,a),fi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&$&&((n=l=ge)&&(l=B1(l,t.type,t.pendingProps,gt),l!==null?(t.stateNode=l,Te=t,ge=ht(l.firstChild),gt=!1,n=!0):n=!1),n||ta(t)),El(t),n=t.type,i=t.pendingProps,c=e!==null?e.memoizedProps:null,l=i.children,Zr(n,i)?l=null:c!==null&&Zr(n,c)&&(t.flags|=32),t.memoizedState!==null&&(n=Qc(e,t,$d,null,null,a),vn._currentValue=n),fi(e,t),Oe(e,t,l,a),t.child;case 6:return e===null&&$&&((e=a=ge)&&(a=R1(a,t.pendingProps,gt),a!==null?(t.stateNode=a,Te=t,ge=null,e=!0):e=!1),e||ta(t)),null;case 13:return qu(e,t,a);case 4:return Re(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ra(t,null,l,a):Oe(e,t,l,a),t.child;case 11:return Tu(e,t,t.type,t.pendingProps,a);case 7:return Oe(e,t,t.pendingProps,a),t.child;case 8:return Oe(e,t,t.pendingProps.children,a),t.child;case 12:return Oe(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,aa(t,t.type,l.value),Oe(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Ca(t),n=_e(n),l=l(n),t.flags|=1,Oe(e,t,l,a),t.child;case 14:return _u(e,t,t.type,t.pendingProps,a);case 15:return Ou(e,t,t.type,t.pendingProps,a);case 19:return Lu(e,t,a);case 31:return i1(e,t,a);case 22:return Cu(e,t,a,t.pendingProps);case 24:return Ca(t),l=_e(ze),e===null?(n=Uc(),n===null&&(n=de,i=Cc(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},Rc(t),aa(t,ze,n)):((e.lanes&a)!==0&&(kc(e,t),$l(t,null,null,a),Fl()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),aa(t,ze,l)):(l=i.cache,aa(t,ze,l),l!==n.cache&&Oc(t,[ze],a,!0))),Oe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Lt(e){e.flags|=4}function xr(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(p0())e.flags|=8192;else throw Ba=Fn,Bc}else e.flags&=-16777217}function Xu(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!nf(t))if(p0())e.flags|=8192;else throw Ba=Fn,Bc}function mi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?zo():536870912,e.lanes|=t,xl|=t)}function ln(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function r1(e,t,a){var l=t.pendingProps;switch(wc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return pe(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Rt(ze),xe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(cl(t)?Lt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Dc())),pe(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Lt(t),i!==null?(pe(t),Xu(t,i)):(pe(t),xr(t,n,null,l,a))):i?i!==e.memoizedState?(Lt(t),pe(t),Xu(t,i)):(pe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Lt(t),pe(t),xr(t,n,e,l,a)),null;case 27:if(Mn(t),a=V.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Lt(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return pe(t),null}e=D.current,cl(t)?zs(t):(e=F0(n,l,a),t.stateNode=e,Lt(t))}return pe(t),null;case 5:if(Mn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Lt(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return pe(t),null}if(i=D.current,cl(t))zs(t);else{var c=Ei(V.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?c.createElement(n,{is:l.is}):c.createElement(n)}}i[De]=t,i[Ge]=l;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=i;e:switch(Ce(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Lt(t)}}return pe(t),xr(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Lt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(u(166));if(e=V.current,cl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Te,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[De]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||q0(e.nodeValue,a)),e||ta(t,!0)}else e=Ei(e).createTextNode(l),e[De]=t,t.stateNode=e}return pe(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=cl(t),a!==null){if(e===null){if(!l)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[De]=t}else _a(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;pe(t),e=!1}else a=Dc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(at(t),t):(at(t),null);if((t.flags&128)!==0)throw Error(u(558))}return pe(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=cl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(u(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));n[De]=t}else _a(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;pe(t),n=!1}else n=Dc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(at(t),t):(at(t),null)}return at(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),mi(t,t.updateQueue),pe(t),null);case 4:return xe(),e===null&&Lr(t.stateNode.containerInfo),pe(t),null;case 10:return Rt(t.type),pe(t),null;case 19:if(z(ye),l=t.memoizedState,l===null)return pe(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)ln(l,!1);else{if(ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ei(e),i!==null){for(t.flags|=128,ln(l,!1),e=i.updateQueue,t.updateQueue=e,mi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)bs(a,e),a=a.sibling;return w(ye,ye.current&1|2),$&&Ut(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Fe()>vi&&(t.flags|=128,n=!0,ln(l,!1),t.lanes=4194304)}else{if(!n)if(e=ei(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,mi(t,e),ln(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!$)return pe(t),null}else 2*Fe()-l.renderingStartTime>vi&&a!==536870912&&(t.flags|=128,n=!0,ln(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Fe(),e.sibling=null,a=ye.current,w(ye,n?a&1|2:a&1),$&&Ut(t,l.treeForkCount),e):(pe(t),null);case 22:case 23:return at(t),Gc(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),a=t.updateQueue,a!==null&&mi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&z(Ha),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Rt(ze),pe(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function o1(e,t){switch(wc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rt(ze),xe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Mn(t),null;case 31:if(t.memoizedState!==null){if(at(t),t.alternate===null)throw Error(u(340));_a()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(at(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));_a()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return z(ye),null;case 4:return xe(),null;case 10:return Rt(t.type),null;case 22:case 23:return at(t),Gc(),e!==null&&z(Ha),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Rt(ze),null;case 25:return null;default:return null}}function Vu(e,t){switch(wc(t),t.tag){case 3:Rt(ze),xe();break;case 26:case 27:case 5:Mn(t);break;case 4:xe();break;case 31:t.memoizedState!==null&&at(t);break;case 13:at(t);break;case 19:z(ye);break;case 10:Rt(t.type);break;case 22:case 23:at(t),Gc(),e!==null&&z(Ha);break;case 24:Rt(ze)}}function nn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,c=a.inst;l=i(),c.destroy=l}a=a.next}while(a!==n)}}catch(o){ie(t,t.return,o)}}function oa(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var c=l.inst,o=c.destroy;if(o!==void 0){c.destroy=void 0,n=t;var s=a,p=o;try{p()}catch(v){ie(n,s,v)}}}l=l.next}while(l!==i)}}catch(v){ie(t,t.return,v)}}function Qu(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Us(t,a)}catch(l){ie(e,e.return,l)}}}function Zu(e,t,a){a.props=qa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ie(e,t,l)}}function cn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ie(e,t,n)}}function wt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ie(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ie(e,t,n)}else a.current=null}function Ku(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ie(e,e.return,n)}}function yr(e,t,a){try{var l=e.stateNode;T1(l,e.type,a,t),l[Ge]=t}catch(n){ie(e,e.return,n)}}function Ju(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&pa(e.type)||e.tag===4}function Sr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ju(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&pa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zr(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Ot));else if(l!==4&&(l===27&&pa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(zr(e,t,a),e=e.sibling;e!==null;)zr(e,t,a),e=e.sibling}function gi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&pa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(gi(e,t,a),e=e.sibling;e!==null;)gi(e,t,a),e=e.sibling}function Wu(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ce(t,l,a),t[De]=e,t[Ge]=a}catch(i){ie(e,e.return,i)}}var Gt=!1,Ae=!1,jr=!1,Fu=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function s1(e,t){if(e=e.containerInfo,Vr=Ui,e=os(e),hc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var c=0,o=-1,s=-1,p=0,v=0,S=e,h=null;t:for(;;){for(var b;S!==a||n!==0&&S.nodeType!==3||(o=c+n),S!==i||l!==0&&S.nodeType!==3||(s=c+l),S.nodeType===3&&(c+=S.nodeValue.length),(b=S.firstChild)!==null;)h=S,S=b;for(;;){if(S===e)break t;if(h===a&&++p===n&&(o=c),h===i&&++v===l&&(s=c),(b=S.nextSibling)!==null)break;S=h,h=S.parentNode}S=b}a=o===-1||s===-1?null:{start:o,end:s}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qr={focusedElem:e,selectionRange:a},Ui=!1,Ee=t;Ee!==null;)if(t=Ee,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ee=e;else for(;Ee!==null;){switch(t=Ee,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var E=qa(a.type,n);e=l.getSnapshotBeforeUpdate(E,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(U){ie(a,a.return,U)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Jr(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Jr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Ee=e;break}Ee=t.return}}function $u(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Vt(e,a),l&4&&nn(5,a);break;case 1:if(Vt(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){ie(a,a.return,c)}else{var n=qa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){ie(a,a.return,c)}}l&64&&Qu(a),l&512&&cn(a,a.return);break;case 3:if(Vt(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Us(e,t)}catch(c){ie(a,a.return,c)}}break;case 27:t===null&&l&4&&Wu(a);case 26:case 5:Vt(e,a),t===null&&l&4&&Ku(a),l&512&&cn(a,a.return);break;case 12:Vt(e,a);break;case 31:Vt(e,a),l&4&&e0(e,a);break;case 13:Vt(e,a),l&4&&t0(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=v1.bind(null,a),k1(e,a))));break;case 22:if(l=a.memoizedState!==null||Gt,!l){t=t!==null&&t.memoizedState!==null||Ae,n=Gt;var i=Ae;Gt=l,(Ae=t)&&!i?Qt(e,a,(a.subtreeFlags&8772)!==0):Vt(e,a),Gt=n,Ae=i}break;case 30:break;default:Vt(e,a)}}function Iu(e){var t=e.alternate;t!==null&&(e.alternate=null,Iu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Pi(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var he=null,Ve=!1;function Xt(e,t,a){for(a=a.child;a!==null;)Pu(e,t,a),a=a.sibling}function Pu(e,t,a){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(Dl,a)}catch{}switch(a.tag){case 26:Ae||wt(a,t),Xt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ae||wt(a,t);var l=he,n=Ve;pa(a.type)&&(he=a.stateNode,Ve=!1),Xt(e,t,a),pn(a.stateNode),he=l,Ve=n;break;case 5:Ae||wt(a,t);case 6:if(l=he,n=Ve,he=null,Xt(e,t,a),he=l,Ve=n,he!==null)if(Ve)try{(he.nodeType===9?he.body:he.nodeName==="HTML"?he.ownerDocument.body:he).removeChild(a.stateNode)}catch(i){ie(a,t,i)}else try{he.removeChild(a.stateNode)}catch(i){ie(a,t,i)}break;case 18:he!==null&&(Ve?(e=he,Q0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),wl(e)):Q0(he,a.stateNode));break;case 4:l=he,n=Ve,he=a.stateNode.containerInfo,Ve=!0,Xt(e,t,a),he=l,Ve=n;break;case 0:case 11:case 14:case 15:oa(2,a,t),Ae||oa(4,a,t),Xt(e,t,a);break;case 1:Ae||(wt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Zu(a,t,l)),Xt(e,t,a);break;case 21:Xt(e,t,a);break;case 22:Ae=(l=Ae)||a.memoizedState!==null,Xt(e,t,a),Ae=l;break;default:Xt(e,t,a)}}function e0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{wl(e)}catch(a){ie(t,t.return,a)}}}function t0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{wl(e)}catch(a){ie(t,t.return,a)}}function u1(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Fu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Fu),t;default:throw Error(u(435,e.tag))}}function pi(e,t){var a=u1(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=x1.bind(null,e,l);l.then(n,n)}})}function Qe(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,c=t,o=c;e:for(;o!==null;){switch(o.tag){case 27:if(pa(o.type)){he=o.stateNode,Ve=!1;break e}break;case 5:he=o.stateNode,Ve=!1;break e;case 3:case 4:he=o.stateNode.containerInfo,Ve=!0;break e}o=o.return}if(he===null)throw Error(u(160));Pu(i,c,n),he=null,Ve=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)a0(t,e),t=t.sibling}var yt=null;function a0(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Qe(t,e),Ze(e),l&4&&(oa(3,e,e.return),nn(3,e),oa(5,e,e.return));break;case 1:Qe(t,e),Ze(e),l&512&&(Ae||a===null||wt(a,a.return)),l&64&&Gt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=yt;if(Qe(t,e),Ze(e),l&512&&(Ae||a===null||wt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Ol]||i[De]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Ce(i,l,a),i[De]=e,we(i),l=i;break e;case"link":var c=af("link","href",n).get(l+(a.href||""));if(c){for(var o=0;o<c.length;o++)if(i=c[o],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(o,1);break t}}i=n.createElement(l),Ce(i,l,a),n.head.appendChild(i);break;case"meta":if(c=af("meta","content",n).get(l+(a.content||""))){for(o=0;o<c.length;o++)if(i=c[o],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(o,1);break t}}i=n.createElement(l),Ce(i,l,a),n.head.appendChild(i);break;default:throw Error(u(468,l))}i[De]=e,we(i),l=i}e.stateNode=l}else lf(n,e.type,e.stateNode);else e.stateNode=tf(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?lf(n,e.type,e.stateNode):tf(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&yr(e,e.memoizedProps,a.memoizedProps)}break;case 27:Qe(t,e),Ze(e),l&512&&(Ae||a===null||wt(a,a.return)),a!==null&&l&4&&yr(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Qe(t,e),Ze(e),l&512&&(Ae||a===null||wt(a,a.return)),e.flags&32){n=e.stateNode;try{Fa(n,"")}catch(E){ie(e,e.return,E)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,yr(e,n,a!==null?a.memoizedProps:n)),l&1024&&(jr=!0);break;case 6:if(Qe(t,e),Ze(e),l&4){if(e.stateNode===null)throw Error(u(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(E){ie(e,e.return,E)}}break;case 3:if(_i=null,n=yt,yt=Di(t.containerInfo),Qe(t,e),yt=n,Ze(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{wl(t.containerInfo)}catch(E){ie(e,e.return,E)}jr&&(jr=!1,l0(e));break;case 4:l=yt,yt=Di(e.stateNode.containerInfo),Qe(t,e),Ze(e),yt=l;break;case 12:Qe(t,e),Ze(e);break;case 31:Qe(t,e),Ze(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,pi(e,l)));break;case 13:Qe(t,e),Ze(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(bi=Fe()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,pi(e,l)));break;case 22:n=e.memoizedState!==null;var s=a!==null&&a.memoizedState!==null,p=Gt,v=Ae;if(Gt=p||n,Ae=v||s,Qe(t,e),Ae=v,Gt=p,Ze(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||s||Gt||Ae||Ya(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){s=a=t;try{if(i=s.stateNode,n)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{o=s.stateNode;var S=s.memoizedProps.style,h=S!=null&&S.hasOwnProperty("display")?S.display:null;o.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(E){ie(s,s.return,E)}}}else if(t.tag===6){if(a===null){s=t;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(E){ie(s,s.return,E)}}}else if(t.tag===18){if(a===null){s=t;try{var b=s.stateNode;n?Z0(b,!0):Z0(s.stateNode,!1)}catch(E){ie(s,s.return,E)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,pi(e,a))));break;case 19:Qe(t,e),Ze(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,pi(e,l)));break;case 30:break;case 21:break;default:Qe(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Ju(l)){a=l;break}l=l.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var n=a.stateNode,i=Sr(e);gi(e,i,n);break;case 5:var c=a.stateNode;a.flags&32&&(Fa(c,""),a.flags&=-33);var o=Sr(e);gi(e,o,c);break;case 3:case 4:var s=a.stateNode.containerInfo,p=Sr(e);zr(e,p,s);break;default:throw Error(u(161))}}catch(v){ie(e,e.return,v)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function l0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;l0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Vt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)$u(e,t.alternate,t),t=t.sibling}function Ya(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:oa(4,t,t.return),Ya(t);break;case 1:wt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Zu(t,t.return,a),Ya(t);break;case 27:pn(t.stateNode);case 26:case 5:wt(t,t.return),Ya(t);break;case 22:t.memoizedState===null&&Ya(t);break;case 30:Ya(t);break;default:Ya(t)}e=e.sibling}}function Qt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,c=i.flags;switch(i.tag){case 0:case 11:case 15:Qt(n,i,a),nn(4,i);break;case 1:if(Qt(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(p){ie(l,l.return,p)}if(l=i,n=l.updateQueue,n!==null){var o=l.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)Hs(s[n],o)}catch(p){ie(l,l.return,p)}}a&&c&64&&Qu(i),cn(i,i.return);break;case 27:Wu(i);case 26:case 5:Qt(n,i,a),a&&l===null&&c&4&&Ku(i),cn(i,i.return);break;case 12:Qt(n,i,a);break;case 31:Qt(n,i,a),a&&c&4&&e0(n,i);break;case 13:Qt(n,i,a),a&&c&4&&t0(n,i);break;case 22:i.memoizedState===null&&Qt(n,i,a),cn(i,i.return);break;case 30:break;default:Qt(n,i,a)}t=t.sibling}}function Mr(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ql(a))}function Ar(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ql(e))}function St(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)n0(e,t,a,l),t=t.sibling}function n0(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:St(e,t,a,l),n&2048&&nn(9,t);break;case 1:St(e,t,a,l);break;case 3:St(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ql(e)));break;case 12:if(n&2048){St(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,c=i.id,o=i.onPostCommit;typeof o=="function"&&o(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){ie(t,t.return,s)}}else St(e,t,a,l);break;case 31:St(e,t,a,l);break;case 13:St(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,c=t.alternate,t.memoizedState!==null?i._visibility&2?St(e,t,a,l):rn(e,t):i._visibility&2?St(e,t,a,l):(i._visibility|=2,hl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Mr(c,t);break;case 24:St(e,t,a,l),n&2048&&Ar(t.alternate,t);break;default:St(e,t,a,l)}}function hl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,c=t,o=a,s=l,p=c.flags;switch(c.tag){case 0:case 11:case 15:hl(i,c,o,s,n),nn(8,c);break;case 23:break;case 22:var v=c.stateNode;c.memoizedState!==null?v._visibility&2?hl(i,c,o,s,n):rn(i,c):(v._visibility|=2,hl(i,c,o,s,n)),n&&p&2048&&Mr(c.alternate,c);break;case 24:hl(i,c,o,s,n),n&&p&2048&&Ar(c.alternate,c);break;default:hl(i,c,o,s,n)}t=t.sibling}}function rn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:rn(a,l),n&2048&&Mr(l.alternate,l);break;case 24:rn(a,l),n&2048&&Ar(l.alternate,l);break;default:rn(a,l)}t=t.sibling}}var on=8192;function bl(e,t,a){if(e.subtreeFlags&on)for(e=e.child;e!==null;)i0(e,t,a),e=e.sibling}function i0(e,t,a){switch(e.tag){case 26:bl(e,t,a),e.flags&on&&e.memoizedState!==null&&F1(a,yt,e.memoizedState,e.memoizedProps);break;case 5:bl(e,t,a);break;case 3:case 4:var l=yt;yt=Di(e.stateNode.containerInfo),bl(e,t,a),yt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=on,on=16777216,bl(e,t,a),on=l):bl(e,t,a));break;default:bl(e,t,a)}}function c0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function sn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ee=l,o0(l,e)}c0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)r0(e),e=e.sibling}function r0(e){switch(e.tag){case 0:case 11:case 15:sn(e),e.flags&2048&&oa(9,e,e.return);break;case 3:sn(e);break;case 12:sn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,hi(e)):sn(e);break;default:sn(e)}}function hi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ee=l,o0(l,e)}c0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:oa(8,t,t.return),hi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,hi(t));break;default:hi(t)}e=e.sibling}}function o0(e,t){for(;Ee!==null;){var a=Ee;switch(a.tag){case 0:case 11:case 15:oa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ql(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ee=l;else e:for(a=e;Ee!==null;){l=Ee;var n=l.sibling,i=l.return;if(Iu(l),l===a){Ee=null;break e}if(n!==null){n.return=i,Ee=n;break e}Ee=i}}}var f1={getCacheForType:function(e){var t=_e(ze),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return _e(ze).controller.signal}},d1=typeof WeakMap=="function"?WeakMap:Map,te=0,de=null,Q=null,K=0,ne=0,lt=null,sa=!1,vl=!1,Nr=!1,Zt=0,ve=0,ua=0,La=0,wr=0,nt=0,xl=0,un=null,Ke=null,Er=!1,bi=0,s0=0,vi=1/0,xi=null,fa=null,Ne=0,da=null,yl=null,Kt=0,Dr=0,Tr=null,u0=null,fn=0,_r=null;function it(){return(te&2)!==0&&K!==0?K&-K:x.T!==null?Rr():No()}function f0(){if(nt===0)if((K&536870912)===0||$){var e=wn;wn<<=1,(wn&3932160)===0&&(wn=262144),nt=e}else nt=536870912;return e=tt.current,e!==null&&(e.flags|=32),nt}function Je(e,t,a){(e===de&&(ne===2||ne===9)||e.cancelPendingCommit!==null)&&(Sl(e,0),ma(e,K,nt,!1)),_l(e,a),((te&2)===0||e!==de)&&(e===de&&((te&2)===0&&(La|=a),ve===4&&ma(e,K,nt,!1)),Et(e))}function d0(e,t,a){if((te&6)!==0)throw Error(u(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Tl(e,t),n=l?p1(e,t):Cr(e,t,!0),i=l;do{if(n===0){vl&&!l&&ma(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!m1(a)){n=Cr(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var o=e;n=un;var s=o.current.memoizedState.isDehydrated;if(s&&(Sl(o,c).flags|=256),c=Cr(o,c,!1),c!==2){if(Nr&&!s){o.errorRecoveryDisabledLanes|=i,La|=i,n=4;break e}i=Ke,Ke=n,i!==null&&(Ke===null?Ke=i:Ke.push.apply(Ke,i))}n=c}if(i=!1,n!==2)continue}}if(n===1){Sl(e,0),ma(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:ma(l,t,nt,!sa);break e;case 2:Ke=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(n=bi+300-Fe(),10<n)){if(ma(l,t,nt,!sa),Dn(l,0,!0)!==0)break e;Kt=t,l.timeoutHandle=X0(m0.bind(null,l,a,Ke,xi,Er,t,nt,La,xl,sa,i,"Throttled",-0,0),n);break e}m0(l,a,Ke,xi,Er,t,nt,La,xl,sa,i,null,-0,0)}}break}while(!0);Et(e)}function m0(e,t,a,l,n,i,c,o,s,p,v,S,h,b){if(e.timeoutHandle=-1,S=t.subtreeFlags,S&8192||(S&16785408)===16785408){S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ot},i0(t,i,S);var E=(i&62914560)===i?bi-Fe():(i&4194048)===i?s0-Fe():0;if(E=$1(S,E),E!==null){Kt=i,e.cancelPendingCommit=E(S0.bind(null,e,t,i,a,l,n,c,o,s,v,S,null,h,b)),ma(e,i,c,!p);return}}S0(e,t,i,a,l,n,c,o,s)}function m1(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!Pe(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ma(e,t,a,l){t&=~wr,t&=~La,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-Ie(n),c=1<<i;l[i]=-1,n&=~c}a!==0&&jo(e,a,t)}function yi(){return(te&6)===0?(dn(0),!1):!0}function Or(){if(Q!==null){if(ne===0)var e=Q.return;else e=Q,Bt=Oa=null,Jc(e),fl=null,Kl=0,e=Q;for(;e!==null;)Vu(e.alternate,e),e=e.return;Q=null}}function Sl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,C1(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Kt=0,Or(),de=e,Q=a=Ht(e.current,null),K=t,ne=0,lt=null,sa=!1,vl=Tl(e,t),Nr=!1,xl=nt=wr=La=ua=ve=0,Ke=un=null,Er=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-Ie(l),i=1<<n;t|=e[n],l&=~i}return Zt=t,Ln(),a}function g0(e,t){G=null,x.H=tn,t===ul||t===Wn?(t=Ts(),ne=3):t===Bc?(t=Ts(),ne=4):ne=t===ur?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,lt=t,Q===null&&(ve=1,si(e,ft(t,e.current)))}function p0(){var e=tt.current;return e===null?!0:(K&4194048)===K?pt===null:(K&62914560)===K||(K&536870912)!==0?e===pt:!1}function h0(){var e=x.H;return x.H=tn,e===null?tn:e}function b0(){var e=x.A;return x.A=f1,e}function Si(){ve=4,sa||(K&4194048)!==K&&tt.current!==null||(vl=!0),(ua&134217727)===0&&(La&134217727)===0||de===null||ma(de,K,nt,!1)}function Cr(e,t,a){var l=te;te|=2;var n=h0(),i=b0();(de!==e||K!==t)&&(xi=null,Sl(e,t)),t=!1;var c=ve;e:do try{if(ne!==0&&Q!==null){var o=Q,s=lt;switch(ne){case 8:Or(),c=6;break e;case 3:case 2:case 9:case 6:tt.current===null&&(t=!0);var p=ne;if(ne=0,lt=null,zl(e,o,s,p),a&&vl){c=0;break e}break;default:p=ne,ne=0,lt=null,zl(e,o,s,p)}}g1(),c=ve;break}catch(v){g0(e,v)}while(!0);return t&&e.shellSuspendCounter++,Bt=Oa=null,te=l,x.H=n,x.A=i,Q===null&&(de=null,K=0,Ln()),c}function g1(){for(;Q!==null;)v0(Q)}function p1(e,t){var a=te;te|=2;var l=h0(),n=b0();de!==e||K!==t?(xi=null,vi=Fe()+500,Sl(e,t)):vl=Tl(e,t);e:do try{if(ne!==0&&Q!==null){t=Q;var i=lt;t:switch(ne){case 1:ne=0,lt=null,zl(e,t,i,1);break;case 2:case 9:if(Es(i)){ne=0,lt=null,x0(t);break}t=function(){ne!==2&&ne!==9||de!==e||(ne=7),Et(e)},i.then(t,t);break e;case 3:ne=7;break e;case 4:ne=5;break e;case 7:Es(i)?(ne=0,lt=null,x0(t)):(ne=0,lt=null,zl(e,t,i,7));break;case 5:var c=null;switch(Q.tag){case 26:c=Q.memoizedState;case 5:case 27:var o=Q;if(c?nf(c):o.stateNode.complete){ne=0,lt=null;var s=o.sibling;if(s!==null)Q=s;else{var p=o.return;p!==null?(Q=p,zi(p)):Q=null}break t}}ne=0,lt=null,zl(e,t,i,5);break;case 6:ne=0,lt=null,zl(e,t,i,6);break;case 8:Or(),ve=6;break e;default:throw Error(u(462))}}h1();break}catch(v){g0(e,v)}while(!0);return Bt=Oa=null,x.H=l,x.A=n,te=a,Q!==null?0:(de=null,K=0,Ln(),ve)}function h1(){for(;Q!==null&&!qf();)v0(Q)}function v0(e){var t=Gu(e.alternate,e,Zt);e.memoizedProps=e.pendingProps,t===null?zi(e):Q=t}function x0(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Bu(a,t,t.pendingProps,t.type,void 0,K);break;case 11:t=Bu(a,t,t.pendingProps,t.type.render,t.ref,K);break;case 5:Jc(t);default:Vu(a,t),t=Q=bs(t,Zt),t=Gu(a,t,Zt)}e.memoizedProps=e.pendingProps,t===null?zi(e):Q=t}function zl(e,t,a,l){Bt=Oa=null,Jc(t),fl=null,Kl=0;var n=t.return;try{if(n1(e,n,t,a,K)){ve=1,si(e,ft(a,e.current)),Q=null;return}}catch(i){if(n!==null)throw Q=n,i;ve=1,si(e,ft(a,e.current)),Q=null;return}t.flags&32768?($||l===1?e=!0:vl||(K&536870912)!==0?e=!1:(sa=e=!0,(l===2||l===9||l===3||l===6)&&(l=tt.current,l!==null&&l.tag===13&&(l.flags|=16384))),y0(t,e)):zi(t)}function zi(e){var t=e;do{if((t.flags&32768)!==0){y0(t,sa);return}e=t.return;var a=r1(t.alternate,t,Zt);if(a!==null){Q=a;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);ve===0&&(ve=5)}function y0(e,t){do{var a=o1(e.alternate,e);if(a!==null){a.flags&=32767,Q=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Q=e;return}Q=e=a}while(e!==null);ve=6,Q=null}function S0(e,t,a,l,n,i,c,o,s){e.cancelPendingCommit=null;do ji();while(Ne!==0);if((te&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(i=t.lanes|t.childLanes,i|=Sc,Wf(e,a,i,c,o,s),e===de&&(Q=de=null,K=0),yl=t,da=e,Kt=a,Dr=i,Tr=n,u0=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,y1(An,function(){return N0(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=x.T,x.T=null,n=N.p,N.p=2,c=te,te|=4;try{s1(e,t,a)}finally{te=c,N.p=n,x.T=l}}Ne=1,z0(),j0(),M0()}}function z0(){if(Ne===1){Ne=0;var e=da,t=yl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=x.T,x.T=null;var l=N.p;N.p=2;var n=te;te|=4;try{a0(t,e);var i=Qr,c=os(e.containerInfo),o=i.focusedElem,s=i.selectionRange;if(c!==o&&o&&o.ownerDocument&&rs(o.ownerDocument.documentElement,o)){if(s!==null&&hc(o)){var p=s.start,v=s.end;if(v===void 0&&(v=p),"selectionStart"in o)o.selectionStart=p,o.selectionEnd=Math.min(v,o.value.length);else{var S=o.ownerDocument||document,h=S&&S.defaultView||window;if(h.getSelection){var b=h.getSelection(),E=o.textContent.length,U=Math.min(s.start,E),se=s.end===void 0?U:Math.min(s.end,E);!b.extend&&U>se&&(c=se,se=U,U=c);var m=cs(o,U),f=cs(o,se);if(m&&f&&(b.rangeCount!==1||b.anchorNode!==m.node||b.anchorOffset!==m.offset||b.focusNode!==f.node||b.focusOffset!==f.offset)){var g=S.createRange();g.setStart(m.node,m.offset),b.removeAllRanges(),U>se?(b.addRange(g),b.extend(f.node,f.offset)):(g.setEnd(f.node,f.offset),b.addRange(g))}}}}for(S=[],b=o;b=b.parentNode;)b.nodeType===1&&S.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<S.length;o++){var y=S[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}Ui=!!Vr,Qr=Vr=null}finally{te=n,N.p=l,x.T=a}}e.current=t,Ne=2}}function j0(){if(Ne===2){Ne=0;var e=da,t=yl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=x.T,x.T=null;var l=N.p;N.p=2;var n=te;te|=4;try{$u(e,t.alternate,t)}finally{te=n,N.p=l,x.T=a}}Ne=3}}function M0(){if(Ne===4||Ne===3){Ne=0,Yf();var e=da,t=yl,a=Kt,l=u0;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ne=5:(Ne=0,yl=da=null,A0(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(fa=null),$i(a),t=t.stateNode,$e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(Dl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=x.T,n=N.p,N.p=2,x.T=null;try{for(var i=e.onRecoverableError,c=0;c<l.length;c++){var o=l[c];i(o.value,{componentStack:o.stack})}}finally{x.T=t,N.p=n}}(Kt&3)!==0&&ji(),Et(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===_r?fn++:(fn=0,_r=e):fn=0,dn(0)}}function A0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ql(t)))}function ji(){return z0(),j0(),M0(),N0()}function N0(){if(Ne!==5)return!1;var e=da,t=Dr;Dr=0;var a=$i(Kt),l=x.T,n=N.p;try{N.p=32>a?32:a,x.T=null,a=Tr,Tr=null;var i=da,c=Kt;if(Ne=0,yl=da=null,Kt=0,(te&6)!==0)throw Error(u(331));var o=te;if(te|=4,r0(i.current),n0(i,i.current,c,a),te=o,dn(0,!1),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(Dl,i)}catch{}return!0}finally{N.p=n,x.T=l,A0(e,t)}}function w0(e,t,a){t=ft(a,t),t=sr(e.stateNode,t,2),e=ia(e,t,2),e!==null&&(_l(e,2),Et(e))}function ie(e,t,a){if(e.tag===3)w0(e,e,a);else for(;t!==null;){if(t.tag===3){w0(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(fa===null||!fa.has(l))){e=ft(a,e),a=Eu(2),l=ia(t,a,2),l!==null&&(Du(a,l,t,e),_l(l,2),Et(l));break}}t=t.return}}function Hr(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new d1;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Nr=!0,n.add(a),e=b1.bind(null,e,t,a),t.then(e,e))}function b1(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,de===e&&(K&a)===a&&(ve===4||ve===3&&(K&62914560)===K&&300>Fe()-bi?(te&2)===0&&Sl(e,0):wr|=a,xl===K&&(xl=0)),Et(e)}function E0(e,t){t===0&&(t=zo()),e=Da(e,t),e!==null&&(_l(e,t),Et(e))}function v1(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),E0(e,a)}function x1(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(t),E0(e,a)}function y1(e,t){return Ki(e,t)}var Mi=null,jl=null,Ur=!1,Ai=!1,Br=!1,ga=0;function Et(e){e!==jl&&e.next===null&&(jl===null?Mi=jl=e:jl=jl.next=e),Ai=!0,Ur||(Ur=!0,z1())}function dn(e,t){if(!Br&&Ai){Br=!0;do for(var a=!1,l=Mi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var c=l.suspendedLanes,o=l.pingedLanes;i=(1<<31-Ie(42|e)+1)-1,i&=n&~(c&~o),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,O0(l,i))}else i=K,i=Dn(l,l===de?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Tl(l,i)||(a=!0,O0(l,i));l=l.next}while(a);Br=!1}}function S1(){D0()}function D0(){Ai=Ur=!1;var e=0;ga!==0&&O1()&&(e=ga);for(var t=Fe(),a=null,l=Mi;l!==null;){var n=l.next,i=T0(l,t);i===0?(l.next=null,a===null?Mi=n:a.next=n,n===null&&(jl=a)):(a=l,(e!==0||(i&3)!==0)&&(Ai=!0)),l=n}Ne!==0&&Ne!==5||dn(e),ga!==0&&(ga=0)}function T0(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var c=31-Ie(i),o=1<<c,s=n[c];s===-1?((o&a)===0||(o&l)!==0)&&(n[c]=Jf(o,t)):s<=t&&(e.expiredLanes|=o),i&=~o}if(t=de,a=K,a=Dn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(ne===2||ne===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Ji(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Tl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Ji(l),$i(a)){case 2:case 8:a=yo;break;case 32:a=An;break;case 268435456:a=So;break;default:a=An}return l=_0.bind(null,e),a=Ki(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Ji(l),e.callbackPriority=2,e.callbackNode=null,2}function _0(e,t){if(Ne!==0&&Ne!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ji()&&e.callbackNode!==a)return null;var l=K;return l=Dn(e,e===de?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(d0(e,l,t),T0(e,Fe()),e.callbackNode!=null&&e.callbackNode===a?_0.bind(null,e):null)}function O0(e,t){if(ji())return null;d0(e,t,!0)}function z1(){H1(function(){(te&6)!==0?Ki(xo,S1):D0()})}function Rr(){if(ga===0){var e=ol;e===0&&(e=Nn,Nn<<=1,(Nn&261888)===0&&(Nn=256)),ga=e}return ga}function C0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Cn(""+e)}function H0(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function j1(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=C0((n[Ge]||null).action),c=l.submitter;c&&(t=(t=c[Ge]||null)?C0(t.formAction):c.getAttribute("formAction"),t!==null&&(i=t,c=null));var o=new Rn("action","action",null,l,n);e.push({event:o,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ga!==0){var s=c?H0(n,c):new FormData(n);lr(a,{pending:!0,data:s,method:n.method,action:i},null,s)}}else typeof i=="function"&&(o.preventDefault(),s=c?H0(n,c):new FormData(n),lr(a,{pending:!0,data:s,method:n.method,action:i},i,s))},currentTarget:n}]})}}for(var kr=0;kr<yc.length;kr++){var qr=yc[kr],M1=qr.toLowerCase(),A1=qr[0].toUpperCase()+qr.slice(1);xt(M1,"on"+A1)}xt(fs,"onAnimationEnd"),xt(ds,"onAnimationIteration"),xt(ms,"onAnimationStart"),xt("dblclick","onDoubleClick"),xt("focusin","onFocus"),xt("focusout","onBlur"),xt(Ld,"onTransitionRun"),xt(Gd,"onTransitionStart"),xt(Xd,"onTransitionCancel"),xt(gs,"onTransitionEnd"),Ja("onMouseEnter",["mouseout","mouseover"]),Ja("onMouseLeave",["mouseout","mouseover"]),Ja("onPointerEnter",["pointerout","pointerover"]),Ja("onPointerLeave",["pointerout","pointerover"]),Aa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Aa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Aa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Aa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),N1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mn));function U0(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var c=l.length-1;0<=c;c--){var o=l[c],s=o.instance,p=o.currentTarget;if(o=o.listener,s!==i&&n.isPropagationStopped())break e;i=o,n.currentTarget=p;try{i(n)}catch(v){Yn(v)}n.currentTarget=null,i=s}else for(c=0;c<l.length;c++){if(o=l[c],s=o.instance,p=o.currentTarget,o=o.listener,s!==i&&n.isPropagationStopped())break e;i=o,n.currentTarget=p;try{i(n)}catch(v){Yn(v)}n.currentTarget=null,i=s}}}}function Z(e,t){var a=t[Ii];a===void 0&&(a=t[Ii]=new Set);var l=e+"__bubble";a.has(l)||(B0(t,e,2,!1),a.add(l))}function Yr(e,t,a){var l=0;t&&(l|=4),B0(a,e,l,t)}var Ni="_reactListening"+Math.random().toString(36).slice(2);function Lr(e){if(!e[Ni]){e[Ni]=!0,Do.forEach(function(a){a!=="selectionchange"&&(N1.has(a)||Yr(a,!1,e),Yr(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ni]||(t[Ni]=!0,Yr("selectionchange",!1,t))}}function B0(e,t,a,l){switch(df(t)){case 2:var n=e2;break;case 8:n=t2;break;default:n=ao}a=n.bind(null,t,a,e),n=void 0,!rc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Gr(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var o=l.stateNode.containerInfo;if(o===n)break;if(c===4)for(c=l.return;c!==null;){var s=c.tag;if((s===3||s===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;o!==null;){if(c=Qa(o),c===null)return;if(s=c.tag,s===5||s===6||s===26||s===27){l=i=c;continue e}o=o.parentNode}}l=l.return}Lo(function(){var p=i,v=ic(a),S=[];e:{var h=ps.get(e);if(h!==void 0){var b=Rn,E=e;switch(e){case"keypress":if(Un(a)===0)break e;case"keydown":case"keyup":b=xd;break;case"focusin":E="focus",b=fc;break;case"focusout":E="blur",b=fc;break;case"beforeblur":case"afterblur":b=fc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Vo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=rd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=zd;break;case fs:case ds:case ms:b=ud;break;case gs:b=Md;break;case"scroll":case"scrollend":b=id;break;case"wheel":b=Nd;break;case"copy":case"cut":case"paste":b=dd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Zo;break;case"toggle":case"beforetoggle":b=Ed}var U=(t&4)!==0,se=!U&&(e==="scroll"||e==="scrollend"),m=U?h!==null?h+"Capture":null:h;U=[];for(var f=p,g;f!==null;){var y=f;if(g=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||g===null||m===null||(y=Hl(f,m),y!=null&&U.push(gn(f,y,g))),se)break;f=f.return}0<U.length&&(h=new b(h,E,null,a,v),S.push({event:h,listeners:U}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",h&&a!==nc&&(E=a.relatedTarget||a.fromElement)&&(Qa(E)||E[Va]))break e;if((b||h)&&(h=v.window===v?v:(h=v.ownerDocument)?h.defaultView||h.parentWindow:window,b?(E=a.relatedTarget||a.toElement,b=p,E=E?Qa(E):null,E!==null&&(se=q(E),U=E.tag,E!==se||U!==5&&U!==27&&U!==6)&&(E=null)):(b=null,E=p),b!==E)){if(U=Vo,y="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(U=Zo,y="onPointerLeave",m="onPointerEnter",f="pointer"),se=b==null?h:Cl(b),g=E==null?h:Cl(E),h=new U(y,f+"leave",b,a,v),h.target=se,h.relatedTarget=g,y=null,Qa(v)===p&&(U=new U(m,f+"enter",E,a,v),U.target=g,U.relatedTarget=se,y=U),se=y,b&&E)t:{for(U=w1,m=b,f=E,g=0,y=m;y;y=U(y))g++;y=0;for(var C=f;C;C=U(C))y++;for(;0<g-y;)m=U(m),g--;for(;0<y-g;)f=U(f),y--;for(;g--;){if(m===f||f!==null&&m===f.alternate){U=m;break t}m=U(m),f=U(f)}U=null}else U=null;b!==null&&R0(S,h,b,U,!1),E!==null&&se!==null&&R0(S,se,E,U,!0)}}e:{if(h=p?Cl(p):window,b=h.nodeName&&h.nodeName.toLowerCase(),b==="select"||b==="input"&&h.type==="file")var P=es;else if(Io(h))if(ts)P=kd;else{P=Bd;var _=Ud}else b=h.nodeName,!b||b.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?p&&lc(p.elementType)&&(P=es):P=Rd;if(P&&(P=P(e,p))){Po(S,P,a,v);break e}_&&_(e,h,p),e==="focusout"&&p&&h.type==="number"&&p.memoizedProps.value!=null&&ac(h,"number",h.value)}switch(_=p?Cl(p):window,e){case"focusin":(Io(_)||_.contentEditable==="true")&&(el=_,bc=p,Gl=null);break;case"focusout":Gl=bc=el=null;break;case"mousedown":vc=!0;break;case"contextmenu":case"mouseup":case"dragend":vc=!1,ss(S,a,v);break;case"selectionchange":if(Yd)break;case"keydown":case"keyup":ss(S,a,v)}var X;if(mc)e:{switch(e){case"compositionstart":var J="onCompositionStart";break e;case"compositionend":J="onCompositionEnd";break e;case"compositionupdate":J="onCompositionUpdate";break e}J=void 0}else Pa?Fo(e,a)&&(J="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(J="onCompositionStart");J&&(Ko&&a.locale!=="ko"&&(Pa||J!=="onCompositionStart"?J==="onCompositionEnd"&&Pa&&(X=Go()):(It=v,oc="value"in It?It.value:It.textContent,Pa=!0)),_=wi(p,J),0<_.length&&(J=new Qo(J,e,null,a,v),S.push({event:J,listeners:_}),X?J.data=X:(X=$o(a),X!==null&&(J.data=X)))),(X=Td?_d(e,a):Od(e,a))&&(J=wi(p,"onBeforeInput"),0<J.length&&(_=new Qo("onBeforeInput","beforeinput",null,a,v),S.push({event:_,listeners:J}),_.data=X)),j1(S,e,p,a,v)}U0(S,t)})}function gn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function wi(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Hl(e,a),n!=null&&l.unshift(gn(e,n,i)),n=Hl(e,t),n!=null&&l.push(gn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function w1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function R0(e,t,a,l,n){for(var i=t._reactName,c=[];a!==null&&a!==l;){var o=a,s=o.alternate,p=o.stateNode;if(o=o.tag,s!==null&&s===l)break;o!==5&&o!==26&&o!==27||p===null||(s=p,n?(p=Hl(a,i),p!=null&&c.unshift(gn(a,p,s))):n||(p=Hl(a,i),p!=null&&c.push(gn(a,p,s)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var E1=/\r\n?/g,D1=/\u0000|\uFFFD/g;function k0(e){return(typeof e=="string"?e:""+e).replace(E1,`
`).replace(D1,"")}function q0(e,t){return t=k0(t),k0(e)===t}function oe(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Fa(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Fa(e,""+l);break;case"className":_n(e,"class",l);break;case"tabIndex":_n(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":_n(e,a,l);break;case"style":qo(e,l,i);break;case"data":if(t!=="object"){_n(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Cn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&oe(e,t,"name",n.name,n,null),oe(e,t,"formEncType",n.formEncType,n,null),oe(e,t,"formMethod",n.formMethod,n,null),oe(e,t,"formTarget",n.formTarget,n,null)):(oe(e,t,"encType",n.encType,n,null),oe(e,t,"method",n.method,n,null),oe(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Cn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Ot);break;case"onScroll":l!=null&&Z("scroll",e);break;case"onScrollEnd":l!=null&&Z("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Cn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Z("beforetoggle",e),Z("toggle",e),Tn(e,"popover",l);break;case"xlinkActuate":_t(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":_t(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":_t(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":_t(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":_t(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":_t(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":_t(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":_t(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":_t(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Tn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ld.get(a)||a,Tn(e,a,l))}}function Xr(e,t,a,l,n,i){switch(a){case"style":qo(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Fa(e,l):(typeof l=="number"||typeof l=="bigint")&&Fa(e,""+l);break;case"onScroll":l!=null&&Z("scroll",e);break;case"onScrollEnd":l!=null&&Z("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Ot);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!To.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[Ge]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Tn(e,a,l)}}}function Ce(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Z("error",e),Z("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];if(c!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:oe(e,t,i,c,a,null)}}n&&oe(e,t,"srcSet",a.srcSet,a,null),l&&oe(e,t,"src",a.src,a,null);return;case"input":Z("invalid",e);var o=i=c=n=null,s=null,p=null;for(l in a)if(a.hasOwnProperty(l)){var v=a[l];if(v!=null)switch(l){case"name":n=v;break;case"type":c=v;break;case"checked":s=v;break;case"defaultChecked":p=v;break;case"value":i=v;break;case"defaultValue":o=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(u(137,t));break;default:oe(e,t,l,v,a,null)}}Uo(e,i,o,s,p,c,n,!1);return;case"select":Z("invalid",e),l=c=i=null;for(n in a)if(a.hasOwnProperty(n)&&(o=a[n],o!=null))switch(n){case"value":i=o;break;case"defaultValue":c=o;break;case"multiple":l=o;default:oe(e,t,n,o,a,null)}t=i,a=c,e.multiple=!!l,t!=null?Wa(e,!!l,t,!1):a!=null&&Wa(e,!!l,a,!0);return;case"textarea":Z("invalid",e),i=n=l=null;for(c in a)if(a.hasOwnProperty(c)&&(o=a[c],o!=null))switch(c){case"value":l=o;break;case"defaultValue":n=o;break;case"children":i=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(u(91));break;default:oe(e,t,c,o,a,null)}Ro(e,l,n,i);return;case"option":for(s in a)a.hasOwnProperty(s)&&(l=a[s],l!=null)&&(s==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":oe(e,t,s,l,a,null));return;case"dialog":Z("beforetoggle",e),Z("toggle",e),Z("cancel",e),Z("close",e);break;case"iframe":case"object":Z("load",e);break;case"video":case"audio":for(l=0;l<mn.length;l++)Z(mn[l],e);break;case"image":Z("error",e),Z("load",e);break;case"details":Z("toggle",e);break;case"embed":case"source":case"link":Z("error",e),Z("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in a)if(a.hasOwnProperty(p)&&(l=a[p],l!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:oe(e,t,p,l,a,null)}return;default:if(lc(t)){for(v in a)a.hasOwnProperty(v)&&(l=a[v],l!==void 0&&Xr(e,t,v,l,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(l=a[o],l!=null&&oe(e,t,o,l,a,null))}function T1(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,c=null,o=null,s=null,p=null,v=null;for(b in a){var S=a[b];if(a.hasOwnProperty(b)&&S!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":s=S;default:l.hasOwnProperty(b)||oe(e,t,b,null,l,S)}}for(var h in l){var b=l[h];if(S=a[h],l.hasOwnProperty(h)&&(b!=null||S!=null))switch(h){case"type":i=b;break;case"name":n=b;break;case"checked":p=b;break;case"defaultChecked":v=b;break;case"value":c=b;break;case"defaultValue":o=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(u(137,t));break;default:b!==S&&oe(e,t,h,b,l,S)}}tc(e,c,o,s,p,v,i,n);return;case"select":b=c=o=h=null;for(i in a)if(s=a[i],a.hasOwnProperty(i)&&s!=null)switch(i){case"value":break;case"multiple":b=s;default:l.hasOwnProperty(i)||oe(e,t,i,null,l,s)}for(n in l)if(i=l[n],s=a[n],l.hasOwnProperty(n)&&(i!=null||s!=null))switch(n){case"value":h=i;break;case"defaultValue":o=i;break;case"multiple":c=i;default:i!==s&&oe(e,t,n,i,l,s)}t=o,a=c,l=b,h!=null?Wa(e,!!a,h,!1):!!l!=!!a&&(t!=null?Wa(e,!!a,t,!0):Wa(e,!!a,a?[]:"",!1));return;case"textarea":b=h=null;for(o in a)if(n=a[o],a.hasOwnProperty(o)&&n!=null&&!l.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:oe(e,t,o,null,l,n)}for(c in l)if(n=l[c],i=a[c],l.hasOwnProperty(c)&&(n!=null||i!=null))switch(c){case"value":h=n;break;case"defaultValue":b=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(u(91));break;default:n!==i&&oe(e,t,c,n,l,i)}Bo(e,h,b);return;case"option":for(var E in a)h=a[E],a.hasOwnProperty(E)&&h!=null&&!l.hasOwnProperty(E)&&(E==="selected"?e.selected=!1:oe(e,t,E,null,l,h));for(s in l)h=l[s],b=a[s],l.hasOwnProperty(s)&&h!==b&&(h!=null||b!=null)&&(s==="selected"?e.selected=h&&typeof h!="function"&&typeof h!="symbol":oe(e,t,s,h,l,b));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var U in a)h=a[U],a.hasOwnProperty(U)&&h!=null&&!l.hasOwnProperty(U)&&oe(e,t,U,null,l,h);for(p in l)if(h=l[p],b=a[p],l.hasOwnProperty(p)&&h!==b&&(h!=null||b!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(u(137,t));break;default:oe(e,t,p,h,l,b)}return;default:if(lc(t)){for(var se in a)h=a[se],a.hasOwnProperty(se)&&h!==void 0&&!l.hasOwnProperty(se)&&Xr(e,t,se,void 0,l,h);for(v in l)h=l[v],b=a[v],!l.hasOwnProperty(v)||h===b||h===void 0&&b===void 0||Xr(e,t,v,h,l,b);return}}for(var m in a)h=a[m],a.hasOwnProperty(m)&&h!=null&&!l.hasOwnProperty(m)&&oe(e,t,m,null,l,h);for(S in l)h=l[S],b=a[S],!l.hasOwnProperty(S)||h===b||h==null&&b==null||oe(e,t,S,h,l,b)}function Y0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function _1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,c=n.initiatorType,o=n.duration;if(i&&o&&Y0(c)){for(c=0,o=n.responseEnd,l+=1;l<a.length;l++){var s=a[l],p=s.startTime;if(p>o)break;var v=s.transferSize,S=s.initiatorType;v&&Y0(S)&&(s=s.responseEnd,c+=v*(s<o?1:(o-p)/(s-p)))}if(--l,t+=8*(i+c)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Vr=null,Qr=null;function Ei(e){return e.nodeType===9?e:e.ownerDocument}function L0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function G0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Zr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kr=null;function O1(){var e=window.event;return e&&e.type==="popstate"?e===Kr?!1:(Kr=e,!0):(Kr=null,!1)}var X0=typeof setTimeout=="function"?setTimeout:void 0,C1=typeof clearTimeout=="function"?clearTimeout:void 0,V0=typeof Promise=="function"?Promise:void 0,H1=typeof queueMicrotask=="function"?queueMicrotask:typeof V0<"u"?function(e){return V0.resolve(null).then(e).catch(U1)}:X0;function U1(e){setTimeout(function(){throw e})}function pa(e){return e==="head"}function Q0(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),wl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")pn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,pn(a);for(var i=a.firstChild;i;){var c=i.nextSibling,o=i.nodeName;i[Ol]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=c}}else a==="body"&&pn(e.ownerDocument.body);a=n}while(a);wl(t)}function Z0(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Jr(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Jr(a),Pi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function B1(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ol])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=ht(e.nextSibling),e===null)break}return null}function R1(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ht(e.nextSibling),e===null))return null;return e}function K0(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ht(e.nextSibling),e===null))return null;return e}function Wr(e){return e.data==="$?"||e.data==="$~"}function Fr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function k1(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var $r=null;function J0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return ht(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function W0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function F0(e,t,a){switch(t=Ei(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function pn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Pi(e)}var bt=new Map,$0=new Set;function Di(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Jt=N.d;N.d={f:q1,r:Y1,D:L1,C:G1,L:X1,m:V1,X:Z1,S:Q1,M:K1};function q1(){var e=Jt.f(),t=yi();return e||t}function Y1(e){var t=Za(e);t!==null&&t.tag===5&&t.type==="form"?gu(t):Jt.r(e)}var Ml=typeof document>"u"?null:document;function I0(e,t,a){var l=Ml;if(l&&typeof t=="string"&&t){var n=st(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),$0.has(n)||($0.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Ce(t,"link",e),we(t),l.head.appendChild(t)))}}function L1(e){Jt.D(e),I0("dns-prefetch",e,null)}function G1(e,t){Jt.C(e,t),I0("preconnect",e,t)}function X1(e,t,a){Jt.L(e,t,a);var l=Ml;if(l&&e&&t){var n='link[rel="preload"][as="'+st(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+st(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+st(a.imageSizes)+'"]')):n+='[href="'+st(e)+'"]';var i=n;switch(t){case"style":i=Al(e);break;case"script":i=Nl(e)}bt.has(i)||(e=B({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),bt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(hn(i))||t==="script"&&l.querySelector(bn(i))||(t=l.createElement("link"),Ce(t,"link",e),we(t),l.head.appendChild(t)))}}function V1(e,t){Jt.m(e,t);var a=Ml;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+st(l)+'"][href="'+st(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Nl(e)}if(!bt.has(i)&&(e=B({rel:"modulepreload",href:e},t),bt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bn(i)))return}l=a.createElement("link"),Ce(l,"link",e),we(l),a.head.appendChild(l)}}}function Q1(e,t,a){Jt.S(e,t,a);var l=Ml;if(l&&e){var n=Ka(l).hoistableStyles,i=Al(e);t=t||"default";var c=n.get(i);if(!c){var o={loading:0,preload:null};if(c=l.querySelector(hn(i)))o.loading=5;else{e=B({rel:"stylesheet",href:e,"data-precedence":t},a),(a=bt.get(i))&&Ir(e,a);var s=c=l.createElement("link");we(s),Ce(s,"link",e),s._p=new Promise(function(p,v){s.onload=p,s.onerror=v}),s.addEventListener("load",function(){o.loading|=1}),s.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Ti(c,t,l)}c={type:"stylesheet",instance:c,count:1,state:o},n.set(i,c)}}}function Z1(e,t){Jt.X(e,t);var a=Ml;if(a&&e){var l=Ka(a).hoistableScripts,n=Nl(e),i=l.get(n);i||(i=a.querySelector(bn(n)),i||(e=B({src:e,async:!0},t),(t=bt.get(n))&&Pr(e,t),i=a.createElement("script"),we(i),Ce(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function K1(e,t){Jt.M(e,t);var a=Ml;if(a&&e){var l=Ka(a).hoistableScripts,n=Nl(e),i=l.get(n);i||(i=a.querySelector(bn(n)),i||(e=B({src:e,async:!0,type:"module"},t),(t=bt.get(n))&&Pr(e,t),i=a.createElement("script"),we(i),Ce(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function P0(e,t,a,l){var n=(n=V.current)?Di(n):null;if(!n)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Al(a.href),a=Ka(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Al(a.href);var i=Ka(n).hoistableStyles,c=i.get(e);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,c),(i=n.querySelector(hn(e)))&&!i._p&&(c.instance=i,c.state.loading=5),bt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},bt.set(e,a),i||J1(n,e,a,c.state))),t&&l===null)throw Error(u(528,""));return c}if(t&&l!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Nl(a),a=Ka(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Al(e){return'href="'+st(e)+'"'}function hn(e){return'link[rel="stylesheet"]['+e+"]"}function ef(e){return B({},e,{"data-precedence":e.precedence,precedence:null})}function J1(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Ce(t,"link",a),we(t),e.head.appendChild(t))}function Nl(e){return'[src="'+st(e)+'"]'}function bn(e){return"script[async]"+e}function tf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+st(a.href)+'"]');if(l)return t.instance=l,we(l),l;var n=B({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),we(l),Ce(l,"style",n),Ti(l,a.precedence,e),t.instance=l;case"stylesheet":n=Al(a.href);var i=e.querySelector(hn(n));if(i)return t.state.loading|=4,t.instance=i,we(i),i;l=ef(a),(n=bt.get(n))&&Ir(l,n),i=(e.ownerDocument||e).createElement("link"),we(i);var c=i;return c._p=new Promise(function(o,s){c.onload=o,c.onerror=s}),Ce(i,"link",l),t.state.loading|=4,Ti(i,a.precedence,e),t.instance=i;case"script":return i=Nl(a.src),(n=e.querySelector(bn(i)))?(t.instance=n,we(n),n):(l=a,(n=bt.get(i))&&(l=B({},a),Pr(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),we(n),Ce(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Ti(l,a.precedence,e));return t.instance}function Ti(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,c=0;c<l.length;c++){var o=l[c];if(o.dataset.precedence===t)i=o;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Ir(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Pr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var _i=null;function af(e,t,a){if(_i===null){var l=new Map,n=_i=new Map;n.set(a,l)}else n=_i,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Ol]||i[De]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(t)||"";c=e+c;var o=l.get(c);o?o.push(i):l.set(c,[i])}}return l}function lf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function W1(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function nf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function F1(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Al(l.href),i=t.querySelector(hn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Oi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,we(i);return}i=t.ownerDocument||t,l=ef(l),(n=bt.get(n))&&Ir(l,n),i=i.createElement("link"),we(i);var c=i;c._p=new Promise(function(o,s){c.onload=o,c.onerror=s}),Ce(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Oi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var eo=0;function $1(e,t){return e.stylesheets&&e.count===0&&Hi(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Hi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&eo===0&&(eo=62500*_1());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Hi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>eo?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Oi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ci=null;function Hi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ci=new Map,t.forEach(I1,e),Ci=null,Oi.call(e))}function I1(e,t){if(!(t.state.loading&4)){var a=Ci.get(e);if(a)var l=a.get(null);else{a=new Map,Ci.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var c=n[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),l=c)}l&&a.set(null,l)}n=t.instance,c=n.getAttribute("data-precedence"),i=a.get(c)||l,i===l&&a.set(null,n),a.set(c,n),this.count++,l=Oi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var vn={$$typeof:He,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function P1(e,t,a,l,n,i,c,o,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wi(0),this.hiddenUpdates=Wi(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function cf(e,t,a,l,n,i,c,o,s,p,v,S){return e=new P1(e,t,a,c,s,p,v,S,o),t=1,i===!0&&(t|=24),i=et(3,null,null,t),e.current=i,i.stateNode=e,t=Cc(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},Rc(i),e}function rf(e){return e?(e=ll,e):ll}function of(e,t,a,l,n,i){n=rf(n),l.context===null?l.context=n:l.pendingContext=n,l=na(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ia(e,l,t),a!==null&&(Je(a,e,t),Wl(a,e,t))}function sf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function to(e,t){sf(e,t),(e=e.alternate)&&sf(e,t)}function uf(e){if(e.tag===13||e.tag===31){var t=Da(e,67108864);t!==null&&Je(t,e,67108864),to(e,67108864)}}function ff(e){if(e.tag===13||e.tag===31){var t=it();t=Fi(t);var a=Da(e,t);a!==null&&Je(a,e,t),to(e,t)}}var Ui=!0;function e2(e,t,a,l){var n=x.T;x.T=null;var i=N.p;try{N.p=2,ao(e,t,a,l)}finally{N.p=i,x.T=n}}function t2(e,t,a,l){var n=x.T;x.T=null;var i=N.p;try{N.p=8,ao(e,t,a,l)}finally{N.p=i,x.T=n}}function ao(e,t,a,l){if(Ui){var n=lo(l);if(n===null)Gr(e,t,l,Bi,a),mf(e,l);else if(l2(n,e,t,a,l))l.stopPropagation();else if(mf(e,l),t&4&&-1<a2.indexOf(e)){for(;n!==null;){var i=Za(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=Ma(i.pendingLanes);if(c!==0){var o=i;for(o.pendingLanes|=2,o.entangledLanes|=2;c;){var s=1<<31-Ie(c);o.entanglements[1]|=s,c&=~s}Et(i),(te&6)===0&&(vi=Fe()+500,dn(0))}}break;case 31:case 13:o=Da(i,2),o!==null&&Je(o,i,2),yi(),to(i,2)}if(i=lo(l),i===null&&Gr(e,t,l,Bi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else Gr(e,t,l,null,a)}}function lo(e){return e=ic(e),no(e)}var Bi=null;function no(e){if(Bi=null,e=Qa(e),e!==null){var t=q(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=ae(t),e!==null)return e;e=null}else if(a===31){if(e=I(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Bi=e,null}function df(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Lf()){case xo:return 2;case yo:return 8;case An:case Gf:return 32;case So:return 268435456;default:return 32}default:return 32}}var io=!1,ha=null,ba=null,va=null,xn=new Map,yn=new Map,xa=[],a2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function mf(e,t){switch(e){case"focusin":case"focusout":ha=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":va=null;break;case"pointerover":case"pointerout":xn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yn.delete(t.pointerId)}}function Sn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Za(t),t!==null&&uf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function l2(e,t,a,l,n){switch(t){case"focusin":return ha=Sn(ha,e,t,a,l,n),!0;case"dragenter":return ba=Sn(ba,e,t,a,l,n),!0;case"mouseover":return va=Sn(va,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return xn.set(i,Sn(xn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,yn.set(i,Sn(yn.get(i)||null,e,t,a,l,n)),!0}return!1}function gf(e){var t=Qa(e.target);if(t!==null){var a=q(t);if(a!==null){if(t=a.tag,t===13){if(t=ae(a),t!==null){e.blockedOn=t,wo(e.priority,function(){ff(a)});return}}else if(t===31){if(t=I(a),t!==null){e.blockedOn=t,wo(e.priority,function(){ff(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ri(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=lo(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);nc=l,a.target.dispatchEvent(l),nc=null}else return t=Za(a),t!==null&&uf(t),e.blockedOn=a,!1;t.shift()}return!0}function pf(e,t,a){Ri(e)&&a.delete(t)}function n2(){io=!1,ha!==null&&Ri(ha)&&(ha=null),ba!==null&&Ri(ba)&&(ba=null),va!==null&&Ri(va)&&(va=null),xn.forEach(pf),yn.forEach(pf)}function ki(e,t){e.blockedOn===t&&(e.blockedOn=null,io||(io=!0,M.unstable_scheduleCallback(M.unstable_NormalPriority,n2)))}var qi=null;function hf(e){qi!==e&&(qi=e,M.unstable_scheduleCallback(M.unstable_NormalPriority,function(){qi===e&&(qi=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(no(l||a)===null)continue;break}var i=Za(a);i!==null&&(e.splice(t,3),t-=3,lr(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function wl(e){function t(s){return ki(s,e)}ha!==null&&ki(ha,e),ba!==null&&ki(ba,e),va!==null&&ki(va,e),xn.forEach(t),yn.forEach(t);for(var a=0;a<xa.length;a++){var l=xa[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<xa.length&&(a=xa[0],a.blockedOn===null);)gf(a),a.blockedOn===null&&xa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],c=n[Ge]||null;if(typeof i=="function")c||hf(a);else if(c){var o=null;if(i&&i.hasAttribute("formAction")){if(n=i,c=i[Ge]||null)o=c.formAction;else if(no(n)!==null)continue}else o=c.action;typeof o=="function"?a[l+1]=o:(a.splice(l,3),l-=3),hf(a)}}}function bf(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return n=c})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function co(e){this._internalRoot=e}Yi.prototype.render=co.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,l=it();of(a,l,e,t,null,null)},Yi.prototype.unmount=co.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;of(e.current,2,null,e,null,null),yi(),t[Va]=null}};function Yi(e){this._internalRoot=e}Yi.prototype.unstable_scheduleHydration=function(e){if(e){var t=No();e={blockedOn:null,target:e,priority:t};for(var a=0;a<xa.length&&t!==0&&t<xa[a].priority;a++);xa.splice(a,0,e),a===0&&gf(e)}};var vf=A.version;if(vf!=="19.2.4")throw Error(u(527,vf,"19.2.4"));N.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=j(t),e=e!==null?W(e):null,e=e===null?null:e.stateNode,e};var i2={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:x,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Li.isDisabled&&Li.supportsFiber)try{Dl=Li.inject(i2),$e=Li}catch{}}return jn.createRoot=function(e,t){if(!O(e))throw Error(u(299));var a=!1,l="",n=Mu,i=Au,c=Nu;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=cf(e,1,!1,null,null,a,l,null,n,i,c,bf),e[Va]=t.current,Lr(e),new co(t)},jn.hydrateRoot=function(e,t,a){if(!O(e))throw Error(u(299));var l=!1,n="",i=Mu,c=Au,o=Nu,s=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.formState!==void 0&&(s=a.formState)),t=cf(e,1,!0,t,a??null,l,n,s,i,c,o,bf),t.context=rf(null),a=t.current,l=it(),l=Fi(l),n=na(l),n.callback=null,ia(a,n,l),a=l,t.current.lanes=a,_l(t,a),Et(t),e[Va]=t.current,Lr(e),new Yi(t)},jn.version="19.2.4",jn}var Ef;function p2(){if(Ef)return so.exports;Ef=1;function M(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M)}catch(A){console.error(A)}}return M(),so.exports=g2(),so.exports}var h2=p2();const po="/portfolio/assets/Gemini_Generated_Image_n8fs5qn8fs5qn8fs-Photoroom-C3DaP8dh.png",go=[{label:"Home",target:"home"},{label:"About",target:"about"},{label:"Graphics",target:"graphics"},{label:"Dev",target:"dev"},{label:"Experience",target:"experience"},{label:"Tools",target:"tools"},{label:"Contact",target:"contact"}];function b2(){const[M,A]=ct.useState(!1),[H,u]=ct.useState(!1),[O,q]=ct.useState("home");ct.useEffect(()=>{const I=()=>{u(window.scrollY>20);for(const T of[...go].reverse()){const j=document.getElementById(T.target);if(j&&window.scrollY>=j.offsetTop-120){q(T.target);break}}};return window.addEventListener("scroll",I),()=>window.removeEventListener("scroll",I)},[]),ct.useEffect(()=>(document.body.style.overflow=M?"hidden":"",()=>{document.body.style.overflow=""}),[M]);const ae=I=>{const T=document.getElementById(I);T&&(T.scrollIntoView({behavior:"smooth"}),q(I)),A(!1)};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap');

        .header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          transition: all 0.4s ease;
          padding: 0 1.5rem;
          font-family: 'DM Sans', sans-serif;
        }

        .header.scrolled {
          background: rgba(8, 8, 12, 0.94);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 200, 80, 0.12);
          box-shadow: 0 4px 40px rgba(0,0,0,0.6);
        }

        .header-inner {
          max-width: 1300px;
          margin: 0 auto;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        /* ── Logo ── */
        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: none;
          border: none;
          cursor: pointer;
          flex-shrink: 0;
          padding: 0;
        }

        .avatar-ring {
          width: 42px; height: 42px;
          border-radius: 50%;
          padding: 2px;
          background: linear-gradient(135deg, #ffc850, #ff8c00);
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .logo:hover .avatar-ring { transform: scale(1.08); }

        .avatar-inner {
          width: 100%; height: 100%;
          border-radius: 50%;
          overflow: hidden;
          background: #1a1a22;
        }

        .avatar-inner img {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: top center;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
          text-align: left;
        }

        .logo-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.35rem;
          letter-spacing: 0.08em;
          color: #fff;
          transition: color 0.2s;
        }

        .logo:hover .logo-name { color: #ffc850; }

        .logo-tagline {
          font-size: 0.58rem;
          font-weight: 300;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #ffc850;
          margin-top: 3px;
        }

        /* ── Desktop Nav ── */
        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 0;
        }

        .nav-btn {
          position: relative;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.45rem 0.7rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          transition: color 0.2s;
          white-space: nowrap;
        }

        .nav-btn::after {
          content: '';
          position: absolute;
          bottom: 0; left: 50%;
          transform: translateX(-50%);
          width: 0; height: 2px;
          background: #ffc850;
          transition: width 0.3s ease;
          border-radius: 2px;
        }

        .nav-btn:hover { color: #fff; }
        .nav-btn:hover::after { width: 60%; }
        .nav-btn.active { color: #ffc850; }
        .nav-btn.active::after { width: 60%; }

        .cta-btn {
          margin-left: 0.75rem;
          padding: 0.5rem 1.1rem;
          background: #ffc850;
          color: #08080c;
          border: none;
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.2s;
          flex-shrink: 0;
          white-space: nowrap;
        }

        .cta-btn:hover {
          background: #fff;
          transform: translateY(-1px);
        }

        /* ── Hamburger ── */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          z-index: 1100;
          flex-shrink: 0;
        }

        .hamburger span {
          display: block;
          width: 26px; height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .hamburger.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
          background: #ffc850;
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0; transform: scaleX(0);
        }
        .hamburger.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
          background: #ffc850;
        }

        /* ── Mobile full-screen menu ── */
        .mobile-menu {
          position: fixed;
          inset: 0;
          background: #08080c;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.15rem;
          z-index: 1050;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.35s ease;
          overflow: hidden;
          padding: 2rem 1.5rem;
        }

        .mobile-menu.open {
          opacity: 1;
          pointer-events: all;
        }

        .mobile-avatar {
          width: 60px; height: 60px;
          border-radius: 50%;
          padding: 3px;
          background: linear-gradient(135deg, #ffc850, #ff8c00);
          margin-bottom: 1.25rem;
          flex-shrink: 0;
        }

        .mobile-avatar-inner {
          width: 100%; height: 100%;
          border-radius: 50%;
          overflow: hidden;
          background: #1a1a22;
        }

        .mobile-avatar-inner img {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: top center;
        }

        .mobile-nav-btn {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.8rem, 7vw, 2.6rem);
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.18);
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.2s, transform 0.2s;
          line-height: 1.25;
          padding: 0;
          width: 100%;
          text-align: center;
        }

        .mobile-nav-btn:hover,
        .mobile-nav-btn.active {
          color: #ffc850;
          transform: translateX(8px);
        }

        .mobile-divider {
          width: 60px; height: 1px;
          background: rgba(255,200,80,0.3);
          margin: 0.85rem 0;
          flex-shrink: 0;
        }

        .mobile-tagline {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
        }

        /* ── Hire me button in mobile menu ── */
        .mobile-cta {
          margin-top: 0.5rem;
          padding: 0.65rem 2rem;
          background: #ffc850;
          color: #08080c;
          border: none;
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s;
          flex-shrink: 0;
        }

        .mobile-cta:hover { background: #fff; }

        /* ── Breakpoints ── */
        @media (max-width: 1060px) {
          .nav-btn { padding: 0.45rem 0.5rem; font-size: 0.65rem; }
        }

        @media (max-width: 860px) {
          .nav-desktop { display: none; }
          .hamburger { display: flex; }
        }
      `}),r.jsx("header",{className:`header${H?" scrolled":""}`,children:r.jsxs("div",{className:"header-inner",children:[r.jsxs("button",{className:"logo",onClick:()=>ae("home"),children:[r.jsx("div",{className:"avatar-ring",children:r.jsx("div",{className:"avatar-inner",children:r.jsx("img",{src:po,alt:"Marlon Ampoon"})})}),r.jsxs("div",{className:"logo-text",children:[r.jsx("span",{className:"logo-name",children:"Marlon Ampoon"}),r.jsx("span",{className:"logo-tagline",children:"Web Dev · Graphic Artist"})]})]}),r.jsxs("nav",{className:"nav-desktop",children:[go.map(I=>r.jsx("button",{className:`nav-btn${O===I.target?" active":""}`,onClick:()=>ae(I.target),children:I.label},I.target)),r.jsx("button",{className:"cta-btn",onClick:()=>ae("contact"),children:"Hire Me"})]}),r.jsxs("button",{className:`hamburger${M?" open":""}`,onClick:()=>A(!M),"aria-label":"Toggle menu",children:[r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{})]})]})}),r.jsxs("div",{className:`mobile-menu${M?" open":""}`,children:[r.jsx("div",{className:"mobile-avatar",children:r.jsx("div",{className:"mobile-avatar-inner",children:r.jsx("img",{src:po,alt:"Marlon Ampoon"})})}),go.map(I=>r.jsx("button",{className:`mobile-nav-btn${O===I.target?" active":""}`,onClick:()=>ae(I.target),children:I.label},I.target)),r.jsx("div",{className:"mobile-divider"}),r.jsx("button",{className:"mobile-cta",onClick:()=>ae("contact"),children:"Hire Me"}),r.jsx("div",{className:"mobile-divider",style:{marginTop:"0.85rem"}}),r.jsx("span",{className:"mobile-tagline",children:"Web Dev · Graphic Artist"})]})]})}function v2(){const M=[{num:"5+",label:"Years Experience"},{num:"5",label:"Projects Completed"},{num:"8+",label:"Happy Clients"},{num:"5",label:"Fields of Mastery"}];return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        /* ══════════════════════════════════════════════════════════════
           ABOUT — BASE (Desktop first, then scale down)
        ══════════════════════════════════════════════════════════════ */
        .about-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .about-wrapper::before {
          content: '';
          position: absolute;
          bottom: -15%; right: -8%;
          width: 650px; height: 650px;
          background: radial-gradient(circle, rgba(255,200,80,0.05) 0%, transparent 68%);
          pointer-events: none;
        }

        .about-wrapper::after {
          content: '';
          position: absolute;
          top: -10%; left: -10%;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(255,200,80,0.03) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── Layout container ── */
        .about-inner {
          max-width: 1300px;
          width: 100%;
          margin: 0 auto;
          padding: 7rem 3rem;
          display: flex;
          gap: clamp(3rem, 8vw, 7rem);
          align-items: flex-start;
          position: relative;
          z-index: 1;
        }

        /* ══════════════════════════════════════
           LEFT COLUMN
        ══════════════════════════════════════ */
        .about-left {
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          position: sticky;
          top: 6rem;
        }

        .about-section-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #ffc850;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          white-space: nowrap;
        }

        .about-section-tag::before {
          content: '';
          display: inline-block;
          width: 28px; height: 1px;
          background: #ffc850;
          flex-shrink: 0;
        }

        .about-section-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 5vw, 5rem);
          letter-spacing: 0.04em;
          line-height: 0.92;
          color: #fff;
          margin: 0;
        }

        .about-section-heading span { color: #ffc850; }

        /* ══════════════════════════════════════
           RIGHT COLUMN
        ══════════════════════════════════════ */
        .about-right {
          flex: 1 1 0;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        /* ── Pills ── */
        .about-intro-line {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          flex-wrap: wrap;
        }

        .about-intro-pill {
          padding: 0.3rem 0.9rem;
          background: rgba(255,200,80,0.08);
          border: 1px solid rgba(255,200,80,0.25);
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.62rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #ffc850;
        }

        /* ── Bio ── */
        .about-bio-block {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .about-bio {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.9rem, 1.5vw, 1.02rem);
          color: rgba(255,255,255,0.52);
          line-height: 1.9;
          font-weight: 300;
        }

        .about-bio strong { color: #fff; font-weight: 500; }
        .about-bio em     { color: #ffc850; font-style: normal; }

        /* ── VA callout ── */
        .about-secondary {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          padding: 1.2rem 1.4rem;
          border: 1px solid rgba(255,255,255,0.07);
          border-left: 2px solid rgba(255,200,80,0.45);
          border-radius: 2px;
          background: rgba(255,200,80,0.03);
          transition: background 0.25s, border-left-color 0.25s;
        }

        .about-secondary:hover {
          background: rgba(255,200,80,0.05);
          border-left-color: rgba(255,200,80,0.7);
        }

        .about-secondary-icon {
          font-size: 1.1rem;
          flex-shrink: 0;
          margin-top: 1px;
          opacity: 0.75;
        }

        .about-secondary p {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.83rem;
          color: rgba(255,255,255,0.38);
          line-height: 1.75;
          font-weight: 300;
          margin: 0;
        }

        .about-secondary p strong {
          color: rgba(255,255,255,0.62);
          font-weight: 500;
        }

        /* ── Divider ── */
        .about-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, rgba(255,200,80,0.2), transparent);
        }

        /* ── Stats ── */
        .about-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 4px;
          overflow: hidden;
        }

        .about-stat {
          padding: 1.2rem 1rem;
          background: rgba(8,8,12,0.95);
          display: flex;
          flex-direction: column;
          gap: 5px;
          transition: background 0.2s;
          cursor: default;
          position: relative;
          overflow: hidden;
        }

        .about-stat::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: #ffc850;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .about-stat:hover { background: rgba(255,200,80,0.05); }
        .about-stat:hover::before { transform: scaleX(1); }

        .about-stat-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          letter-spacing: 0.04em;
          color: #ffc850;
          line-height: 1;
        }

        .about-stat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.56rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }

        /* ── CTA ── */
        .about-cta {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .about-cta-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.83rem;
          color: rgba(255,255,255,0.38);
          font-weight: 300;
        }

        .about-cta-btn {
          padding: 0.7rem 1.6rem;
          background: transparent;
          color: #ffc850;
          border: 1px solid rgba(255,200,80,0.35);
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: color 0.25s, border-color 0.25s;
        }

        .about-cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #ffc850;
          transform: translateX(-101%);
          transition: transform 0.25s ease;
          z-index: 0;
        }

        .about-cta-btn span {
          position: relative;
          z-index: 1;
        }

        .about-cta-btn:hover::before { transform: translateX(0); }
        .about-cta-btn:hover { color: #08080c; border-color: #ffc850; }


        /* ══════════════════════════════════════════════════════════════
           TABLET  ≤ 900px
           — unstick left, keep side-by-side but tighten gap
        ══════════════════════════════════════════════════════════════ */
        @media (max-width: 900px) {
          .about-inner {
            padding: 5rem 2.5rem;
            gap: 3rem;
          }

          .about-left {
            position: static;
          }
        }

        /* ══════════════════════════════════════════════════════════════
           MOBILE  ≤ 680px
           — stack into single column
        ══════════════════════════════════════════════════════════════ */
        @media (max-width: 680px) {
          .about-inner {
            padding: 4.5rem 1.5rem 5rem;
            flex-direction: column;
            gap: 0;
          }

          /* Left block becomes a compact header */
          .about-left {
            margin-bottom: 2rem;
          }

          .about-section-heading {
            font-size: clamp(3.2rem, 16vw, 4.5rem);
            line-height: 0.88;
          }

          /* Slightly tighter content spacing on mobile */
          .about-right {
            gap: 1.5rem;
          }

          .about-bio {
            font-size: 0.95rem;
          }

          /* Stats: 2-column on mobile */
          .about-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .about-stat {
            padding: 1.1rem 1rem;
          }

          /* CTA stacks cleanly */
          .about-cta {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.85rem;
          }

          .about-cta-btn {
            width: 100%;
            text-align: center;
            padding: 0.85rem 1rem;
          }
        }

        /* ══════════════════════════════════════════════════════════════
           SMALL MOBILE  ≤ 400px
        ══════════════════════════════════════════════════════════════ */
        @media (max-width: 400px) {
          .about-inner {
            padding: 4rem 1.25rem 4.5rem;
          }

          .about-section-heading {
            font-size: 3rem;
          }

          .about-intro-pill {
            font-size: 0.56rem;
            padding: 0.25rem 0.65rem;
          }

          .about-stat-num {
            font-size: 1.75rem;
          }

          .about-stat-label {
            font-size: 0.5rem;
          }

          .about-secondary {
            padding: 1rem 1rem;
          }

          .about-secondary p {
            font-size: 0.78rem;
          }
        }
      `}),r.jsx("section",{className:"about-wrapper",id:"about",children:r.jsxs("div",{className:"about-inner",children:[r.jsxs("div",{className:"about-left",children:[r.jsx("span",{className:"about-section-tag",children:"Who I Am"}),r.jsxs("h2",{className:"about-section-heading",children:["About",r.jsx("br",{}),r.jsx("span",{children:"Me"})]})]}),r.jsxs("div",{className:"about-right",children:[r.jsxs("div",{className:"about-intro-line",children:[r.jsx("span",{className:"about-intro-pill",children:"Web Developer"}),r.jsx("span",{className:"about-intro-pill",children:"Graphic Artist"})]}),r.jsxs("div",{className:"about-bio-block",children:[r.jsxs("p",{className:"about-bio",children:["I'm ",r.jsx("strong",{children:"Marlon Ampoon"})," — a ",r.jsx("em",{children:"Web Developer"})," and ",r.jsx("em",{children:"Graphic Artist"})," passionate about helping people and businesses succeed online. I build websites that don't just look great — they work smoothly, load fast, and make a real impact for the people behind them."]}),r.jsxs("p",{className:"about-bio",children:["I find genuine fulfillment in taking ",r.jsx("strong",{children:"technical challenges"})," and transforming them into clean, functional solutions. Whether it's crafting a responsive frontend from scratch, designing a cohesive brand identity, or producing bold digital graphics — I bring both the"," ",r.jsx("strong",{children:"engineering precision"})," and the ",r.jsx("strong",{children:"visual sensibility"}),"."]}),r.jsxs("p",{className:"about-bio",children:["Every project I take on gets my full commitment — not just to meet the brief, but to"," ",r.jsx("em",{children:"exceed it"}),". I believe great work comes from clear communication, attention to detail, and a genuine willingness to go the extra mile. If there's a way I can help you achieve your goals, I'd be honored to be a part of that journey."]})]}),r.jsxs("div",{className:"about-secondary",children:[r.jsx("span",{className:"about-secondary-icon",children:"💼"}),r.jsxs("p",{children:["I also offer ",r.jsx("strong",{children:"Virtual Assistant support"})," as a secondary service — drawing on my background in organization, clear communication, and adaptability to help clients with day-to-day operational tasks when needed."]})]}),r.jsx("div",{className:"about-divider"}),r.jsx("div",{className:"about-stats",children:M.map(A=>r.jsxs("div",{className:"about-stat",children:[r.jsx("span",{className:"about-stat-num",children:A.num}),r.jsx("span",{className:"about-stat-label",children:A.label})]},A.label))}),r.jsxs("div",{className:"about-cta",children:[r.jsx("span",{className:"about-cta-text",children:"Interested in working together?"}),r.jsx("button",{className:"about-cta-btn",onClick:()=>document.getElementById("contact")?.scrollIntoView({behavior:"smooth"}),children:r.jsx("span",{children:"Let's Talk →"})})]})]})]})})]})}const Of="/portfolio/assets/657520324_122128339581079271_413717394934998652_n-CgPtK1AR.jpg",Cf="/portfolio/assets/657523475_122128339845079271_5936915331887691005_n-BxS4bllb.jpg",Hf="/portfolio/assets/657525265_122128339719079271_5688376841275939431_n-D_hD4lUJ.jpg",Uf="/portfolio/assets/657675461_122128340217079271_103663688234942863_n-D9D7admp.jpg",Bf="/portfolio/assets/658154758_122128340319079271_8594505295325550939_n-DlOIgt0c.jpg",Rf="/portfolio/assets/658221870_122128339755079271_3023340636135234144_n-_Veqr_GL.jpg",x2="/portfolio/assets/659130268_122128339677079271_3786608590482122565_n-BlTcnOON.jpg",y2="/portfolio/assets/659172919_122128339545079271_8074764372666652035_n-oFM9etvk.jpg",S2="/portfolio/assets/659566311_122128339803079271_3539499664342588014_n-BzB5FVQi.jpg",z2="/portfolio/assets/659642222_122128340115079271_7906012138457610164_n-DA5GPuqE.jpg",j2="/portfolio/assets/659700554_122128339635079271_4434395129980663555_n-DtlqQhKe.jpg",M2="/portfolio/assets/659876406_122128339965079271_2556805708608569485_n-CDR4_RZz.jpg",A2="/portfolio/assets/660295965_122128339503079271_8104245686776742900_n-PSFGTrf9.jpg",N2="/portfolio/assets/660403233_122128340061079271_7486745113921762045_n-DHINQK07.jpg",w2="/portfolio/assets/660537003_122128340265079271_6786351733289619190_n-BzKxGs3c.jpg",E2="/portfolio/assets/660616485_122128340163079271_6893266438101061807_n-Dbv4ZCpS.jpg",D2="/portfolio/assets/660995204_122128339911079271_5549167849317527942_n-jocLfbn6.jpg",T2="/portfolio/assets/661803070_122128340013079271_7204857263889233147_n-CyOdlzxs.jpg",_2="/portfolio/assets/933cd4_1aafcabfda344c27bef126f787c6b836~mv2-C_-aS_qq.avif",O2="/portfolio/assets/933cd4_2869364afdcf4eb5b9e299e8bda32877~mv2-CuDmyAXB.avif",C2="/portfolio/assets/933cd4_5944f00d1bba47d9b716947b730ddbb6~mv2-een8vvRJ.avif",H2="/portfolio/assets/933cd4_7bbffb687d614ddaac513b5a4e311fca~mv2-M9SgtDLT.avif",U2="/portfolio/assets/933cd4_926983c740894abb8ac182274902944d~mv2-DfIpsNzm.avif",B2="/portfolio/assets/933cd4_dbf9407c2a644000b8d166788f5912b4~mv2-20830coT.avif",R2="/portfolio/assets/933cd4_f316234cf9234290b7ed386311f25f51~mv2-BAU8Ye_R.avif",k2="/portfolio/assets/933cd4_3ac0114869eb44d0855219d595bfecad~mv2-DO6FPEcl.avif",q2="/portfolio/assets/933cd4_3b3dd834628c4f339ffa0cf74dd08ff1~mv2-PwzQdHPs.avif",Y2="/portfolio/assets/933cd4_7b18d81fa7554b939b9015ab1e022d59~mv2-BS6j50fD.avif",L2="/portfolio/assets/933cd4_7b18d81fa7554b939b9015ab1e022d59~mv2-BS6j50fD.avif",G2="/portfolio/assets/933cd4_8438c1598fe245c39abd32a4f94cf9d8~mv2-BiJANzbf.avif",Df="/portfolio/assets/933cd4_933ecddb115642eeb4de5ce728ce4158~mv2-DrlBuFEo.avif",X2="/portfolio/assets/933cd4_9d4f19587062449ebb358c1ef4385016~mv2-BGBD0Qql.avif",V2="/portfolio/assets/933cd4_a743d93c251e4706a8cc00391c99df64~mv2-Cx0-4rjh.avif",Q2="/portfolio/assets/933cd4_a992971364804dff87196a63b69c4f95~mv2-DfqSCJJe.avif",Z2="/portfolio/assets/933cd4_c067371c694c4909b2b85af0a079a9da~mv2-DAQj04yC.avif",K2="/portfolio/assets/933cd4_e456be50e7c04c3583dcc3ccc1020392~mv2-ZCu8JcxC.avif",J2="/portfolio/assets/933cd4_e94abbd068ae4805bf54fa0955ab17bf~mv2-DEIP6fUt.avif",W2="/portfolio/assets/933cd4_21c532d84e3d4e70b75d90b228d3fcec~mv2-DLVeynxV.avif",F2="/portfolio/assets/933cd4_237a1548a9d84782b4b3fb357eee1351~mv2-D_vb4LkL.avif",$2="/portfolio/assets/933cd4_23b5a8291d49458895bdc6351beb3d71~mv2-Dt6AEH1U.avif",I2="/portfolio/assets/933cd4_465dfcaeb0034e2abcba48e9e5acc899~mv2-uPMi1wso.avif",P2="/portfolio/assets/933cd4_64d72ab1b3ba4e82adf270f22f4be246~mv2-DmGqF8EJ.avif",e5="/portfolio/assets/933cd4_92b20642a46240b2934aeea1d0554c76~mv2-BjxJ8z-3.avif",t5="/portfolio/assets/933cd4_dc21b0c2a23f48288a3c11f39cae1e6e~mv2-B5iT4xTb.avif",a5="/portfolio/assets/933cd4_eaffa2e625054aeb813084cfeccf5b86~mv2-BEfmqeHp.avif",l5="/portfolio/assets/933cd4_f8cb313e7c3d4ce0a4090950e859c161~mv2-25ZNlKZ5.avif",Tf=[Of,Cf,Hf,Uf,Bf,Rf],Sa=[{id:1,src:_2,category:"webdesign",label:"Website Design",tag:"UI / Web"},{id:2,src:O2,category:"webdesign",label:"Website Design",tag:"UI / Web"},{id:3,src:C2,category:"webdesign",label:"Website Design",tag:"UI / Web"},{id:4,src:H2,category:"webdesign",label:"Website Design",tag:"UI / Web"},{id:5,src:U2,category:"webdesign",label:"Website Design",tag:"UI / Web"},{id:6,src:B2,category:"webdesign",label:"Website Design",tag:"UI / Web"},{id:7,src:R2,category:"webdesign",label:"Website Design",tag:"UI / Web"},{id:8,src:k2,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:9,src:q2,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:10,src:Y2,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:11,src:L2,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:12,src:G2,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:13,src:Df,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:14,src:Df,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:15,src:X2,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:16,src:V2,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:17,src:Q2,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:18,src:Z2,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:19,src:K2,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:20,src:J2,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:21,src:W2,category:"shirtdesign",label:"Shirt Design",tag:"Apparel"},{id:22,src:F2,category:"shirtdesign",label:"Shirt Design",tag:"Apparel"},{id:23,src:$2,category:"shirtdesign",label:"Shirt Design",tag:"Apparel"},{id:24,src:I2,category:"shirtdesign",label:"Shirt Design",tag:"Apparel"},{id:25,src:P2,category:"shirtdesign",label:"Shirt Design",tag:"Apparel"},{id:26,src:e5,category:"shirtdesign",label:"Shirt Design",tag:"Apparel"},{id:27,src:t5,category:"shirtdesign",label:"Shirt Design",tag:"Apparel"},{id:28,src:a5,category:"shirtdesign",label:"Shirt Design",tag:"Apparel"},{id:29,src:l5,category:"shirtdesign",label:"Shirt Design",tag:"Apparel"},{id:30,src:Of,category:"mobileapp",label:"Mobile App",tag:"iOS / Android"},{id:31,src:Cf,category:"mobileapp",label:"Mobile App",tag:"iOS / Android"},{id:32,src:Hf,category:"mobileapp",label:"Mobile App",tag:"iOS / Android"},{id:33,src:Uf,category:"mobileapp",label:"Mobile App",tag:"iOS / Android"},{id:34,src:Bf,category:"mobileapp",label:"Mobile App",tag:"iOS / Android"},{id:35,src:Rf,category:"mobileapp",label:"Mobile App",tag:"iOS / Android"},{id:36,src:x2,category:"mobileapp",label:"Mobile App",tag:"iOS / Android"},{id:37,src:y2,category:"mobileapp",label:"Mobile App",tag:"iOS / Android"},{id:38,src:S2,category:"mobileapp",label:"Mobile App",tag:"iOS / Android"},{id:39,src:z2,category:"mobileapp",label:"Mobile App",tag:"iOS / Android"},{id:40,src:j2,category:"mobileapp",label:"Mobile App",tag:"iOS / Android"},{id:41,src:M2,category:"mobileapp",label:"Mobile App",tag:"iOS / Android"},{id:42,src:A2,category:"mobileapp",label:"Mobile App",tag:"iOS / Android"},{id:43,src:N2,category:"mobileapp",label:"Mobile App",tag:"iOS / Android"},{id:44,src:w2,category:"mobileapp",label:"Mobile App",tag:"iOS / Android"},{id:45,src:E2,category:"mobileapp",label:"Mobile App",tag:"iOS / Android"},{id:46,src:D2,category:"mobileapp",label:"Mobile App",tag:"iOS / Android"},{id:47,src:T2,category:"mobileapp",label:"Mobile App",tag:"iOS / Android"}],n5=[{value:"all",label:"All Work",count:Sa.length},{value:"webdesign",label:"Web Design",count:Sa.filter(M=>M.category==="webdesign").length},{value:"marketing",label:"Marketing",count:Sa.filter(M=>M.category==="marketing").length},{value:"shirtdesign",label:"Apparel",count:Sa.filter(M=>M.category==="shirtdesign").length},{value:"mobileapp",label:"Mobile App",count:Sa.filter(M=>M.category==="mobileapp").length}];function i5(){const[M,A]=ct.useState("webdesign"),[H,u]=ct.useState(null),[O,q]=ct.useState(!1),ae=ct.useRef(null),I="https://drive.google.com/file/d/1jQZBy2oId9BuqMHeB9NTXVmEgBCt2WLx/view?usp=drivesdk",T=()=>{window.open(I,"_blank","noopener,noreferrer"),q(!1)},j=M==="all"?Sa:Sa.filter(R=>R.category===M),W=R=>{if(!H)return;const me=(H.idx+R+j.length)%j.length;u({src:j[me].src,idx:me})},B=R=>{R.key==="ArrowRight"&&W(1),R.key==="ArrowLeft"&&W(-1),R.key==="Escape"&&u(null)},ue=R=>{ae.current?.scrollBy({left:R*300,behavior:"smooth"})};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Root overflow lock ── */
        .gfx-wrap {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden; /* this must stay */
}

        .gfx-inner {
          max-width: 1300px;
          width: 100%;
          margin: 0 auto;
          padding: 5rem 2rem;
          display: flex;
          gap: 5rem;
          align-items: flex-start;
          overflow-x: hidden;
        }

        /* ── Left sticky label ── */
        .gfx-left {
          flex: 0 0 160px;
          width: 160px;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          position: sticky;
          top: 5rem;
        }
        .gfx-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #ffc850;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .gfx-eyebrow::before {
          content: '';
          width: 24px; height: 1px;
          background: #ffc850;
          flex-shrink: 0;
          display: inline-block;
        }
        .gfx-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.8rem, 4vw, 4.5rem);
          letter-spacing: 0.04em;
          line-height: 0.92;
          color: #fff;
          margin: 0;
        }
        .gfx-heading span { color: #ffc850; }
        .gfx-count {
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .gfx-count-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.8rem;
          color: #ffc850;
          line-height: 1;
        }
        .gfx-count-lbl {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.55rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }

        /* ── Right content ── */
        .gfx-right {
  flex: 1 1 0;
  min-width: 0;
  max-width: 100%;
  /* DELETE: overflow-x: hidden; */
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

        /* Pills */
        .gfx-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .gfx-pill {
          padding: 0.28rem 0.8rem;
          background: rgba(255,200,80,0.08);
          border: 1px solid rgba(255,200,80,0.25);
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #ffc850;
        }

        /* Bio */
        .gfx-bio {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.88rem, 1.5vw, 1rem);
          color: rgba(255,255,255,0.5);
          line-height: 1.85;
          font-weight: 300;
          margin: 0;
          word-break: break-word;
          overflow-wrap: break-word;
          max-width: 100%;
        }
        .gfx-bio strong { color: #fff; font-weight: 500; }
        .gfx-bio em     { color: #ffc850; font-style: normal; }

        .gfx-divider {
          height: 1px;
          background: linear-gradient(90deg, rgba(255,200,80,0.2), transparent);
        }

        /* ── Filter tabs ── */
        .gfx-filters {
          display: flex;
          gap: 0.4rem;
          overflow-x: auto;
          padding-bottom: 4px;
          scrollbar-width: none;
          -ms-overflow-style: none;
          -webkit-overflow-scrolling: touch;
          max-width: 100%;
        }
        .gfx-filters::-webkit-scrollbar { display: none; }
        .gfx-filter-btn {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.55rem 1rem;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
          white-space: nowrap;
          min-height: 40px;
        }
        .gfx-filter-btn:hover {
          border-color: rgba(255,200,80,0.35);
          color: rgba(255,200,80,0.8);
        }
        .gfx-filter-btn.active {
          background: rgba(255,200,80,0.1);
          border-color: rgba(255,200,80,0.45);
          color: #ffc850;
        }
        .gfx-chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 16px;
          height: 14px;
          padding: 0 4px;
          background: rgba(255,255,255,0.07);
          border-radius: 2px;
          font-size: 0.52rem;
          color: rgba(255,255,255,0.35);
        }
        .gfx-filter-btn.active .gfx-chip {
          background: rgba(255,200,80,0.2);
          color: #ffc850;
        }

        /* ── App Highlights ── */
        .ma-hl {
          border: 1px solid rgba(255,200,80,0.15);
          border-radius: 8px;
          background: rgba(255,200,80,0.02);
          overflow: hidden;
          width: 100%;
          max-width: 100%;
        }

        .ma-hl-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.25rem 1rem;
          gap: 0.75rem;
        }
        .ma-hl-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.52rem;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #ffc850;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .ma-hl-eyebrow::before {
          content: '';
          width: 14px; height: 1px;
          background: #ffc850;
          display: inline-block;
        }
        .ma-hl-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.35rem;
          letter-spacing: 0.06em;
          color: #fff;
          line-height: 1;
        }
        .ma-hl-nav {
          display: flex;
          gap: 0.35rem;
          flex-shrink: 0;
        }
        .ma-nav-btn {
          width: 36px; height: 36px;
          background: rgba(8,8,12,0.8);
          border: 1px solid rgba(255,200,80,0.25);
          border-radius: 2px;
          color: #ffc850;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
          line-height: 1;
        }
        .ma-nav-btn:hover { background: rgba(255,200,80,0.1); }

        /* Scroll strip */
        .ma-strip-wrap {
  position: relative;
  width: 100%;
  max-width: 100%;
  /* DELETE: overflow: hidden; */
}
        .ma-strip-wrap::before,
        .ma-strip-wrap::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 40px;
          z-index: 2;
          pointer-events: none;
        }
        .ma-strip-wrap::before { left:0;  background: linear-gradient(90deg,  rgba(4,4,8,0.7), transparent); }
        .ma-strip-wrap::after  { right:0; background: linear-gradient(-90deg, rgba(4,4,8,0.7), transparent); }

        .ma-strip {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding: 0 1.25rem 0.75rem;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          -ms-overflow-style: none;
          -webkit-overflow-scrolling: touch;
        }
        .ma-strip::-webkit-scrollbar { display: none; }

        .ma-card {
          flex: 0 0 auto;
          width: 140px;
          scroll-snap-align: start;
          cursor: pointer;
        }
        .ma-frame {
          width: 140px;
          height: 246px;
          border-radius: 18px;
          overflow: hidden;
          border: 2px solid rgba(255,200,80,0.2);
          box-shadow: 0 16px 40px rgba(0,0,0,0.5);
          position: relative;
          transition: transform 0.3s, border-color 0.3s;
        }
        .ma-card:hover .ma-frame {
          transform: translateY(-5px) scale(1.02);
          border-color: rgba(255,200,80,0.5);
        }
        .ma-frame img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          filter: brightness(0.88);
          transition: filter 0.3s;
        }
        .ma-card:hover .ma-frame img { filter: brightness(1); }
        .ma-notch {
          position: absolute;
          top: 8px; left: 50%;
          transform: translateX(-50%);
          width: 36px; height: 4px;
          background: rgba(0,0,0,0.5);
          border-radius: 10px;
          z-index: 3;
        }
        .ma-card-num {
          margin-top: 0.45rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.5rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.22);
          text-align: center;
        }

        /* See all row */
        .ma-footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 0.5rem 1.25rem 0.75rem;
        }
        .ma-see-all {
          background: transparent;
          border: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.58rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,200,80,0.55);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 0;
          transition: color 0.2s;
          min-height: 40px;
        }
        .ma-see-all:hover { color: #ffc850; }
        .ma-see-all::after { content: '→'; font-size: 0.7rem; }

        /* ── Download Banner ── */
        .ma-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 0.9rem 1.25rem;
          margin: 0 1.25rem 1.25rem;
          background: linear-gradient(135deg, rgba(255,200,80,0.07), rgba(255,200,80,0.02));
          border: 1px solid rgba(255,200,80,0.28);
          border-radius: 6px;
          position: relative;
          overflow: hidden;
        }
        .ma-banner::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: #ffc850;
        }
        .ma-banner-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          min-width: 0;
          flex: 1;
        }
        .ma-banner-icon {
          width: 38px; height: 38px;
          background: rgba(255,200,80,0.1);
          border: 1px solid rgba(255,200,80,0.25);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ma-banner-icon svg { width: 18px; height: 18px; fill: #ffc850; }
        .ma-banner-text { display: flex; flex-direction: column; gap: 0.15rem; min-width: 0; }
        .ma-banner-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem;
          letter-spacing: 0.06em;
          color: #fff;
          line-height: 1;
        }
        .ma-banner-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.55rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.32);
          white-space: nowrap;
        }
        .ma-dl-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.55rem 1.1rem;
          background: #ffc850;
          border: none;
          border-radius: 4px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #0a0a0f;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
          transition: background 0.2s, transform 0.15s;
          box-shadow: 0 4px 14px rgba(255,200,80,0.3);
          min-height: 40px;
        }
        .ma-dl-btn:hover { background: #ffd370; transform: translateY(-1px); }
        .ma-dl-btn svg { width: 12px; height: 12px; fill: #0a0a0f; }

        /* ── Grid ── */
        .gfx-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 4px;
          overflow: hidden;
          width: 100%;
        }
        .gfx-grid.app-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        .gfx-card {
          position: relative;
          aspect-ratio: 4/3;
          overflow: hidden;
          background: rgba(8,8,12,0.95);
          cursor: pointer;
        }
        .gfx-grid.app-grid .gfx-card { aspect-ratio: 9/16; }
        .gfx-card img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          filter: brightness(0.82) saturate(0.85);
          transition: transform 0.5s, filter 0.4s;
        }
        .gfx-card:hover img { transform: scale(1.07); filter: brightness(1) saturate(1.1); }
        .gfx-card-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(4,4,8,0.88) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0.75rem;
          gap: 2px;
          z-index: 2;
        }
        .gfx-card:hover .gfx-card-overlay { opacity: 1; }
        .gfx-card-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.5rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #ffc850;
        }
        .gfx-card-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem;
          letter-spacing: 0.06em;
          color: #fff;
          line-height: 1;
        }
        .gfx-card-num {
          position: absolute;
          bottom: 0.6rem; right: 0.6rem;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          color: rgba(255,200,80,0.5);
          z-index: 3;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .gfx-card:hover .gfx-card-num { opacity: 1; }

        /* ── Lightbox ── */
        .gfx-lb {
          position: fixed; inset: 0;
          background: rgba(2,2,6,0.94);
          backdrop-filter: blur(14px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn  { from { opacity:0 } to { opacity:1 } }
        @keyframes slideUp { from { transform:translateY(20px); opacity:0 } to { transform:translateY(0); opacity:1 } }

        .gfx-lb-img { animation: slideUp 0.3s ease; }
        .gfx-lb-img img {
          max-width: 88vw;
          max-height: 82vh;
          object-fit: contain;
          border-radius: 3px;
          box-shadow: 0 40px 120px rgba(0,0,0,0.8);
          display: block;
        }
        .gfx-lb-close {
          position: fixed; top: 1rem; right: 1rem;
          width: 40px; height: 40px;
          background: rgba(8,8,12,0.8);
          border: 1px solid rgba(255,200,80,0.35);
          border-radius: 2px;
          color: #ffc850; font-size: 0.9rem;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          z-index: 10;
          transition: background 0.2s;
        }
        .gfx-lb-close:hover { background: rgba(255,200,80,0.12); }
        .gfx-lb-nav {
          position: fixed; top: 50%;
          transform: translateY(-50%);
          width: 44px; height: 44px;
          background: rgba(8,8,12,0.8);
          border: 1px solid rgba(255,200,80,0.25);
          border-radius: 2px;
          color: #ffc850; font-size: 1.3rem;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          z-index: 10;
          transition: background 0.2s;
        }
        .gfx-lb-nav:hover { background: rgba(255,200,80,0.1); }
        .gfx-lb-prev { left: 0.75rem; }
        .gfx-lb-next { right: 0.75rem; }
        .gfx-lb-counter {
          position: fixed; bottom: 1.25rem; left: 50%;
          transform: translateX(-50%);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem; letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }
        .gfx-lb-counter span { color: #ffc850; }

        /* ── Install Modal ── */
        .inst-overlay {
          position: fixed; inset: 0;
          background: rgba(2,2,6,0.9);
          backdrop-filter: blur(14px);
          z-index: 2000;
          display: flex; align-items: center; justify-content: center;
          padding: 1rem;
          animation: fadeIn 0.2s ease;
        }
        .inst-modal {
          background: #0d0d14;
          border: 1px solid rgba(255,200,80,0.2);
          border-radius: 10px;
          max-width: 460px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          animation: slideUp 0.3s ease;
          box-shadow: 0 40px 100px rgba(0,0,0,0.7);
        }
        .inst-header {
          padding: 1.4rem 1.4rem 0;
          display: flex; align-items: flex-start; gap: 0.9rem;
        }
        .inst-icon {
          width: 44px; height: 44px;
          background: rgba(255,200,80,0.08);
          border: 1px solid rgba(255,200,80,0.2);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .inst-icon svg { width: 24px; height: 24px; fill: #ffc850; }
        .inst-title-block { display: flex; flex-direction: column; gap: 0.15rem; padding-top: 0.1rem; }
        .inst-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.4rem; letter-spacing: 0.06em; color: #fff; line-height: 1;
        }
        .inst-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.58rem; letter-spacing: 0.18em;
          text-transform: uppercase; color: rgba(255,200,80,0.6);
        }
        .inst-body {
          padding: 1.1rem 1.4rem;
          display: flex; flex-direction: column; gap: 0.8rem;
        }
        .inst-warn {
          display: flex; gap: 0.65rem;
          padding: 0.9rem;
          background: rgba(255,160,40,0.06);
          border: 1px solid rgba(255,160,40,0.2);
          border-radius: 6px;
          align-items: flex-start;
        }
        .inst-warn-icon { font-size: 1rem; flex-shrink: 0; margin-top: 1px; }
        .inst-warn-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem; color: rgba(255,255,255,0.58); line-height: 1.6;
        }
        .inst-warn-text strong { color: #ffc850; font-weight: 500; }
        .inst-steps { display: flex; flex-direction: column; gap: 0.5rem; }
        .inst-step { display: flex; align-items: flex-start; gap: 0.65rem; }
        .inst-step-num {
          width: 18px; height: 18px;
          background: rgba(255,200,80,0.1);
          border: 1px solid rgba(255,200,80,0.25);
          border-radius: 50%;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.65rem; color: #ffc850;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-top: 2px;
        }
        .inst-step-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.76rem; color: rgba(255,255,255,0.48); line-height: 1.5;
        }
        .inst-step-text strong { color: rgba(255,255,255,0.82); font-weight: 500; }
        .inst-step-text code {
          background: rgba(255,200,80,0.08);
          border: 1px solid rgba(255,200,80,0.15);
          border-radius: 3px; padding: 1px 5px;
          font-size: 0.7rem; color: #ffc850;
        }
        .inst-footer {
          padding: 0.9rem 1.4rem 1.4rem;
          display: flex; gap: 0.65rem;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .inst-cancel {
          flex: 1; padding: 0.65rem;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 4px;
          font-family: 'DM Sans', sans-serif; font-size: 0.6rem;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(255,255,255,0.32); cursor: pointer;
          transition: border-color 0.2s, color 0.2s;
          min-height: 44px;
        }
        .inst-cancel:hover { border-color: rgba(255,255,255,0.25); color: rgba(255,255,255,0.55); }
        .inst-confirm {
          flex: 2; padding: 0.65rem;
          background: #ffc850; border: none; border-radius: 4px;
          font-family: 'DM Sans', sans-serif; font-size: 0.6rem;
          font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase;
          color: #0a0a0f; cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 0.4rem;
          transition: background 0.2s, transform 0.15s;
          box-shadow: 0 4px 16px rgba(255,200,80,0.28);
          min-height: 44px;
        }
        .inst-confirm:hover { background: #ffd370; transform: translateY(-1px); }
        .inst-confirm svg { width: 12px; height: 12px; fill: #0a0a0f; }

        /* ─────────── TABLET (≤ 860px) ─────────── */
        @media (max-width: 860px) {
          .gfx-inner {
            flex-direction: column;
            gap: 2rem;
            padding: 3.5rem 1.5rem;
          }
          .gfx-left {
            position: static;
            flex-direction: row;
            align-items: flex-end;
            flex-wrap: wrap;
            gap: 1.5rem;
            flex: unset;
            width: 100%;
          }
          .gfx-count { margin-top: 0; }
          .gfx-grid { grid-template-columns: repeat(2, 1fr); }
          .gfx-grid.app-grid { grid-template-columns: repeat(3, 1fr); }
        }

        /* ─────────── MOBILE (≤ 600px) ─────────── */
        @media (max-width: 600px) {
          .gfx-inner {
            padding: 2rem 1rem;
            gap: 1.25rem;
          }

          /* Header: full width, stacked */
          .gfx-left {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.35rem;
            width: 100%;
            flex: unset;
          }
          .gfx-heading { font-size: clamp(2.4rem, 10vw, 3rem); }

          /* Bio: contained, wrapping */
          .gfx-bio {
            font-size: 0.85rem;
            line-height: 1.75;
          }

          /* Pills wrap */
          .gfx-pills { gap: 0.35rem; }
          .gfx-pill  { font-size: 0.52rem; padding: 0.22rem 0.6rem; }

          /* Grid: always 2 cols on mobile */
          .gfx-grid          { grid-template-columns: repeat(2, 1fr); }
          .gfx-grid.app-grid { grid-template-columns: repeat(2, 1fr); }

          /* App highlight section */
          .ma-hl { border-radius: 6px; }
          .ma-hl-header { padding: 0.9rem 0.9rem 0.65rem; }
          .ma-hl-title  { font-size: 1.1rem; }

          /* Phone strip cards — fit inside screen */
          .ma-strip { padding: 0 0.9rem 0.6rem; gap: 8px; }
          .ma-card  { width: 105px; }
          .ma-frame { width: 105px; height: 186px; border-radius: 14px; }
          .ma-notch { width: 26px; top: 5px; height: 3px; }
          .ma-card-num { font-size: 0.45rem; margin-top: 0.35rem; }

          .ma-footer { padding: 0.35rem 0.9rem 0.55rem; }

          /* Download banner — vertical stack */
          .ma-banner {
            flex-direction: column;
            align-items: stretch;
            margin: 0 0.9rem 0.9rem;
            padding: 0.85rem 1rem;
            gap: 0.75rem;
          }
          .ma-banner-left { width: 100%; }
          .ma-dl-btn {
            width: 100%;
            justify-content: center;
            padding: 0.75rem;
            font-size: 0.62rem;
            min-height: 44px;
          }

          /* Lightbox */
          .gfx-lb { padding: 0.75rem 0.4rem; }
          .gfx-lb-img img { max-width: 96vw; max-height: 72vh; }
          .gfx-lb-prev { left: 0.2rem; }
          .gfx-lb-next { right: 0.2rem; }
          .gfx-lb-close { top: 0.5rem; right: 0.5rem; width: 36px; height: 36px; font-size: 0.8rem; }
          .gfx-lb-nav   { width: 36px; height: 36px; font-size: 1.1rem; }

          /* Install modal — bottom sheet */
          .inst-overlay { align-items: flex-end; padding: 0; }
          .inst-modal   { border-radius: 16px 16px 0 0; max-height: 88vh; }
          .inst-header  { padding: 1.25rem 1.25rem 0; }
          .inst-body    { padding: 1rem 1.25rem; }
          .inst-footer  {
            flex-direction: column;
            padding: 0.75rem 1.25rem 2rem;
            gap: 0.5rem;
          }
          .inst-cancel,
          .inst-confirm { flex: unset; width: 100%; padding: 0.85rem; min-height: 48px; }
        }
          

        /* ─────────── SMALL PHONES (≤ 390px) ─────────── */
        @media (max-width: 390px) {
          .gfx-inner { padding: 1.75rem 0.75rem; }
          .gfx-heading { font-size: clamp(2rem, 12vw, 2.6rem); }
          .gfx-grid          { grid-template-columns: 1fr; }
          .gfx-grid.app-grid { grid-template-columns: repeat(2, 1fr); }
          .ma-card  { width: 90px; }
          .ma-frame { width: 90px; height: 160px; border-radius: 12px; }
        }
          @media (max-width: 600px) {
  .gfx-filters {
   
        width: -webkit-fill-available;
        display: flex;
        flex-direction: column;
  }
}
      `}),O&&r.jsx("div",{className:"inst-overlay",onClick:()=>q(!1),children:r.jsxs("div",{className:"inst-modal",onClick:R=>R.stopPropagation(),children:[r.jsxs("div",{className:"inst-header",children:[r.jsx("div",{className:"inst-icon",children:r.jsx("svg",{viewBox:"0 0 24 24",children:r.jsx("path",{d:"M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zm-2.5-1C2.67 17 2 17.67 2 18.5v-9C2 8.67 2.67 8 3.5 8S5 8.67 5 9.5v9c0 .83-.67 1.5-1.5 1.5zm17 0c-.83 0-1.5-.67-1.5-1.5v-9c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5zM15.53 2.16l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0 0 12 1c-.95 0-1.84.23-2.64.63L7.88.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.3 1.3C7.14 3.07 6 4.76 6 6.7V7h12v-.3c0-1.94-1.14-3.63-2.47-4.54zM10 5H9V4h1v1zm5 0h-1V4h1v1z"})})}),r.jsxs("div",{className:"inst-title-block",children:[r.jsx("span",{className:"inst-title",children:"Download for Android"}),r.jsx("span",{className:"inst-subtitle",children:"APK — Sideload Install Required"})]})]}),r.jsxs("div",{className:"inst-body",children:[r.jsxs("div",{className:"inst-warn",children:[r.jsx("span",{className:"inst-warn-icon",children:"⚠️"}),r.jsxs("p",{className:"inst-warn-text",children:["This app is distributed as an ",r.jsx("strong",{children:"APK outside the Google Play Store"}),". Android blocks these by default. You'll need to temporarily enable"," ",r.jsx("strong",{children:'"Install Unknown Apps"'})," — safe to turn off again after."]})]}),r.jsxs("div",{className:"inst-steps",children:[r.jsxs("div",{className:"inst-step",children:[r.jsx("span",{className:"inst-step-num",children:"1"}),r.jsxs("p",{className:"inst-step-text",children:["Download the ",r.jsx("strong",{children:".apk"})," file from Google Drive to your Android device."]})]}),r.jsxs("div",{className:"inst-step",children:[r.jsx("span",{className:"inst-step-num",children:"2"}),r.jsxs("p",{className:"inst-step-text",children:["Go to ",r.jsx("strong",{children:"Settings → Apps → Special App Access → Install Unknown Apps"})," and allow your browser or file manager."]})]}),r.jsxs("div",{className:"inst-step",children:[r.jsx("span",{className:"inst-step-num",children:"3"}),r.jsxs("p",{className:"inst-step-text",children:["Open the downloaded ",r.jsx("code",{children:".apk"})," and tap ",r.jsx("strong",{children:"Install"}),"."]})]}),r.jsxs("div",{className:"inst-step",children:[r.jsx("span",{className:"inst-step-num",children:"4"}),r.jsxs("p",{className:"inst-step-text",children:["After installing, ",r.jsx("strong",{children:"re-disable"}),' "Install Unknown Apps" for security.']})]})]})]}),r.jsxs("div",{className:"inst-footer",children:[r.jsx("button",{className:"inst-cancel",onClick:()=>q(!1),children:"Cancel"}),r.jsxs("button",{className:"inst-confirm",onClick:T,children:[r.jsx("svg",{viewBox:"0 0 24 24",children:r.jsx("path",{d:"M12 16l-5-5h3V4h4v7h3l-5 5zm-7 2h14v2H5v-2z"})}),"I Understand — Download"]})]})]})}),H&&r.jsxs("div",{className:"gfx-lb",onClick:()=>u(null),onKeyDown:B,tabIndex:0,children:[r.jsx("button",{className:"gfx-lb-close",onClick:()=>u(null),children:"✕"}),r.jsx("button",{className:"gfx-lb-nav gfx-lb-prev",onClick:R=>{R.stopPropagation(),W(-1)},children:"‹"}),r.jsx("div",{className:"gfx-lb-img",onClick:R=>R.stopPropagation(),children:r.jsx("img",{src:H.src,alt:"Preview"})}),r.jsx("button",{className:"gfx-lb-nav gfx-lb-next",onClick:R=>{R.stopPropagation(),W(1)},children:"›"}),r.jsxs("div",{className:"gfx-lb-counter",children:[r.jsx("span",{children:H.idx+1})," / ",j.length]})]}),r.jsx("section",{className:"gfx-wrap",id:"graphics",children:r.jsxs("div",{className:"gfx-inner",children:[r.jsxs("div",{className:"gfx-left",children:[r.jsx("span",{className:"gfx-eyebrow",children:"My Work"}),r.jsxs("h2",{className:"gfx-heading",children:["Graphic",r.jsx("br",{}),r.jsx("span",{children:"Work"})]}),r.jsxs("div",{className:"gfx-count",children:[r.jsx("span",{className:"gfx-count-num",children:j.length}),r.jsx("span",{className:"gfx-count-lbl",children:M==="all"?"Total Pieces":"In Category"})]})]}),r.jsxs("div",{className:"gfx-right",children:[r.jsxs("div",{className:"gfx-pills",children:[r.jsx("span",{className:"gfx-pill",children:"Web Design"}),r.jsx("span",{className:"gfx-pill",children:"Marketing"}),r.jsx("span",{className:"gfx-pill",children:"Apparel"}),r.jsx("span",{className:"gfx-pill",children:"Mobile App"})]}),r.jsxs("p",{className:"gfx-bio",children:["A selection of ",r.jsx("em",{children:"visual work"})," spanning ",r.jsx("strong",{children:"website UI design"}),", print & digital ",r.jsx("strong",{children:"marketing materials"}),", custom"," ",r.jsx("strong",{children:"shirt / apparel graphics"}),", and ",r.jsx("strong",{children:"mobile app"})," design. Every piece is crafted with intention — designed to communicate clearly and leave a lasting impression."]}),r.jsx("div",{className:"gfx-divider"}),r.jsxs("div",{className:"ma-hl",children:[r.jsxs("div",{className:"ma-hl-header",children:[r.jsxs("div",{children:[r.jsx("div",{className:"ma-hl-eyebrow",children:"Featured"}),r.jsx("div",{className:"ma-hl-title",children:"App Highlights"})]}),r.jsxs("div",{className:"ma-hl-nav",children:[r.jsx("button",{className:"ma-nav-btn",onClick:()=>ue(-1),children:"‹"}),r.jsx("button",{className:"ma-nav-btn",onClick:()=>ue(1),children:"›"})]})]}),r.jsx("div",{className:"ma-strip-wrap",children:r.jsx("div",{className:"ma-strip",ref:ae,children:Tf.map((R,me)=>r.jsxs("div",{className:"ma-card",onClick:()=>{A("mobileapp"),u({src:R,idx:me})},children:[r.jsxs("div",{className:"ma-frame",children:[r.jsx("div",{className:"ma-notch"}),r.jsx("img",{src:R,alt:`App screenshot ${me+1}`,loading:"lazy"})]}),r.jsxs("div",{className:"ma-card-num",children:[String(me+1).padStart(2,"0")," / ",String(Tf.length).padStart(2,"0")]})]},me))})}),r.jsx("div",{className:"ma-footer",children:r.jsxs("button",{className:"ma-see-all",onClick:()=>A("mobileapp"),children:["See all ",Sa.filter(R=>R.category==="mobileapp").length," shots"]})}),r.jsxs("div",{className:"ma-banner",children:[r.jsxs("div",{className:"ma-banner-left",children:[r.jsx("div",{className:"ma-banner-icon",children:r.jsx("svg",{viewBox:"0 0 24 24",children:r.jsx("path",{d:"M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zm-2.5-1C2.67 17 2 17.67 2 18.5v-9C2 8.67 2.67 8 3.5 8S5 8.67 5 9.5v9c0 .83-.67 1.5-1.5 1.5zm17 0c-.83 0-1.5-.67-1.5-1.5v-9c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5zM15.53 2.16l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0 0 12 1c-.95 0-1.84.23-2.64.63L7.88.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.3 1.3C7.14 3.07 6 4.76 6 6.7V7h12v-.3c0-1.94-1.14-3.63-2.47-4.54zM10 5H9V4h1v1zm5 0h-1V4h1v1z"})})}),r.jsxs("div",{className:"ma-banner-text",children:[r.jsx("span",{className:"ma-banner-title",children:"Try the App"}),r.jsx("span",{className:"ma-banner-sub",children:"Android APK · Free Download"})]})]}),r.jsxs("button",{className:"ma-dl-btn",onClick:()=>q(!0),children:[r.jsx("svg",{viewBox:"0 0 24 24",children:r.jsx("path",{d:"M12 16l-5-5h3V4h4v7h3l-5 5zm-7 2h14v2H5v-2z"})}),"Download APK"]})]})]}),r.jsx("div",{className:"gfx-filters",children:n5.map(R=>r.jsxs("button",{className:`gfx-filter-btn${M===R.value?" active":""}`,onClick:()=>A(R.value),children:[R.label,r.jsx("span",{className:"gfx-chip",children:R.count})]},R.value))}),r.jsx("div",{className:`gfx-grid${M==="mobileapp"?" app-grid":""}`,children:j.map((R,me)=>r.jsxs("div",{className:"gfx-card",onClick:()=>u({src:R.src,idx:me}),children:[r.jsx("img",{src:R.src,alt:R.label,loading:"lazy"}),r.jsxs("div",{className:"gfx-card-overlay",children:[r.jsx("span",{className:"gfx-card-tag",children:R.tag}),r.jsx("span",{className:"gfx-card-label",children:R.label})]}),r.jsx("span",{className:"gfx-card-num",children:String(me+1).padStart(2,"0")})]},R.id))})]})]})})]})}const c5="/portfolio/assets/Screenshot%202026-02-28%20022631-BSz9lo5z.png",r5="/portfolio/assets/Screenshot%202026-02-28%20023155-CYkn5XM7.png",o5="/portfolio/assets/Screenshot%202026-02-28%20023643-X0tgNWxq.png",Ga=[{id:1,src:c5,title:"Steinposner Century 21",subtitle:"All-in-One Agent Marketing Hub",description:"A centralized marketing platform built exclusively for Century 21 Steinposner agents. Consolidates vendor hiring, flyer creation, postcard delivery, email marketing, and social media boosting — all under one roof. Eliminates the need for agents to juggle multiple platforms to fulfill their listing and marketing needs.",tags:["Web App","E-Commerce","Real Estate","Multi-Platform"],type:"Marketing Platform",year:"2025"},{id:2,src:r5,title:"Women's Health & Cosmetics",subtitle:"Health & Beauty Storefront",description:"An e-commerce store dedicated to women's health and well-being. Features a curated catalog of cosmetic and healthcare products with a clean, confidence-inspiring shopping experience designed to resonate with its target audience.",tags:["E-Commerce","Health & Beauty","Storefront","UI Design"],type:"E-Commerce Store",year:"2025"},{id:3,src:o5,title:"Salon Beauty Supply",subtitle:"Professional Beauty E-Commerce",description:"A professional e-commerce store for salon-grade beauty supplies. Built for both retail customers and salon professionals, offering a streamlined product browsing and purchasing experience for hair, skin, and beauty essentials.",tags:["E-Commerce","Beauty Supply","Retail","Storefront"],type:"E-Commerce Store",year:"2024"}];function s5(){const[M,A]=ct.useState(null),H=u=>{if(!M)return;const O=(M.idx+u+Ga.length)%Ga.length;A({src:Ga[O].src,idx:O})};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        /* ═══════════════════════════════════════════════════════════════
           DEV SECTION — Showcase Layout
        ═══════════════════════════════════════════════════════════════ */
        .dev-wrapper {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 6rem 0 8rem;
        }

        /* noise texture overlay */
        .dev-wrapper::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.4;
          z-index: 0;
        }

        /* ── Section header ── */
        .dev-header {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 2rem 4rem;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          position: relative;
          z-index: 2;
        }

        .dev-header-left {}

        .dev-section-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #ffc850;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.8rem;
        }

        .dev-section-tag::before {
          content: '';
          display: inline-block;
          width: 28px; height: 1px;
          background: #ffc850;
        }

        .dev-section-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3.5rem, 7vw, 6.5rem);
          letter-spacing: 0.03em;
          line-height: 0.88;
          color: #fff;
          margin: 0;
        }

        .dev-section-heading span { color: #ffc850; }

        .dev-header-right {
          max-width: 340px;
        }

        .dev-header-bio {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.88rem;
          color: rgba(255,255,255,0.42);
          line-height: 1.85;
          font-weight: 300;
        }

        .dev-header-bio strong { color: rgba(255,255,255,0.7); font-weight: 500; }
        .dev-header-bio em     { color: #ffc850; font-style: normal; }

        /* ── Horizontal rule ── */
        .dev-rule {
          max-width: 1300px;
          margin: 0 auto 0;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        .dev-rule-inner {
          height: 1px;
          background: linear-gradient(90deg, rgba(255,200,80,0.25), rgba(255,200,80,0.05) 60%, transparent);
        }

        /* ═══════════════════════════════════════
           SHOWCASE ROWS
        ═══════════════════════════════════════ */
        .dev-showcase {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        /* each project row */
        .dev-row {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          position: relative;
          cursor: pointer;
          transition: background 0.3s;
        }

        .dev-row:first-child {
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .dev-row:hover {
          background: rgba(255,200,80,0.02);
        }

        /* ── Row number column ── */
        .dev-row-num-col {
          display: flex;
          align-items: flex-start;
          padding-top: 2.8rem;
          padding-right: 1rem;
          border-right: 1px solid rgba(255,255,255,0.05);
        }

        .dev-row-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          color: rgba(255,200,80,0.35);
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
          transition: color 0.3s;
        }

        .dev-row:hover .dev-row-num {
          color: #ffc850;
        }

        /* ── Row main content ── */
        .dev-row-main {
          padding: 2.5rem 0 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* top bar: title + type */
        .dev-row-topbar {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 1.8rem;
        }

        .dev-row-title-group {
          display: flex;
          align-items: baseline;
          gap: 1.2rem;
          flex-wrap: wrap;
        }

        .dev-row-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.8rem, 4vw, 3rem);
          letter-spacing: 0.04em;
          color: #fff;
          line-height: 1;
          transition: color 0.25s;
          margin: 0;
        }

        .dev-row:hover .dev-row-title { color: #ffc850; }

        .dev-row-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
          transition: color 0.25s;
        }

        .dev-row:hover .dev-row-subtitle { color: rgba(255,200,80,0.5); }

        .dev-row-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-shrink: 0;
        }

        .dev-row-type {
          padding: 0.28rem 0.8rem;
          background: rgba(255,200,80,0.07);
          border: 1px solid rgba(255,200,80,0.18);
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.55rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,200,80,0.65);
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }

        .dev-row:hover .dev-row-type {
          background: rgba(255,200,80,0.12);
          border-color: rgba(255,200,80,0.35);
          color: #ffc850;
        }

        .dev-row-year {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.62rem;
          letter-spacing: 0.15em;
          color: rgba(255,255,255,0.2);
        }

        /* ── Screenshot area: wide browser mockup ── */
        .dev-row-preview {
          position: relative;
          width: 100%;
          border-radius: 6px 6px 0 0;
          overflow: hidden;
          background: rgba(20,20,28,0.9);
          border: 1px solid rgba(255,255,255,0.07);
          border-bottom: none;
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
          transition: box-shadow 0.4s, border-color 0.3s;
        }

        .dev-row:hover .dev-row-preview {
          border-color: rgba(255,200,80,0.15);
          box-shadow: 0 30px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,200,80,0.08);
        }

        /* fake browser chrome */
        .dev-browser-bar {
          height: 32px;
          background: rgba(255,255,255,0.04);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          padding: 0 12px;
          gap: 6px;
          flex-shrink: 0;
        }

        .dev-browser-dot {
          width: 9px; height: 9px;
          border-radius: 50%;
        }

        .dev-browser-dot:nth-child(1) { background: rgba(255,95,86,0.5); }
        .dev-browser-dot:nth-child(2) { background: rgba(255,189,46,0.5); }
        .dev-browser-dot:nth-child(3) { background: rgba(39,201,63,0.5); }

        .dev-browser-url {
          margin-left: 8px;
          flex: 1;
          height: 18px;
          background: rgba(255,255,255,0.04);
          border-radius: 3px;
          max-width: 320px;
        }

        .dev-row-screenshot {
          width: 100%;
          display: block;
          height: 340px;
          object-fit: cover;
          object-position: top;
          transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94),
                      filter 0.4s ease,
                      height 0.5s cubic-bezier(0.25,0.46,0.45,0.94);
          filter: brightness(0.8) saturate(0.75);
          cursor: zoom-in;
        }

        .dev-row:hover .dev-row-screenshot {
          height: 420px;
          filter: brightness(1) saturate(1.05);
          transform: scale(1.01);
        }

        /* zoom overlay on screenshot */
        .dev-screenshot-zoom {
          position: absolute;
          inset: 32px 0 0 0;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }

        .dev-row:hover .dev-screenshot-zoom { opacity: 1; }

        .dev-screenshot-zoom-btn {
          width: 48px; height: 48px;
          background: rgba(4,4,8,0.75);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255,200,80,0.4);
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: all;
          cursor: zoom-in;
          transform: scale(0.8);
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), background 0.2s;
        }

        .dev-row:hover .dev-screenshot-zoom-btn { transform: scale(1); }
        .dev-screenshot-zoom-btn:hover { background: rgba(255,200,80,0.15); }

        .dev-screenshot-zoom-btn svg {
          width: 18px; height: 18px;
          stroke: #ffc850; fill: none;
          stroke-width: 2; stroke-linecap: round; stroke-linejoin: round;
        }

        /* ── Bottom info strip ── */
        .dev-row-bottom {
          display: flex;
          align-items: flex-start;
          gap: 2rem;
          margin-top: 1.5rem;
          flex-wrap: wrap;
        }

        .dev-row-desc {
          flex: 1 1 260px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.83rem;
          color: rgba(255,255,255,0.42);
          line-height: 1.85;
          font-weight: 300;
          max-width: 560px;
        }

        .dev-row-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          align-items: flex-start;
          padding-top: 0.1rem;
        }

        .dev-row-tag {
          padding: 0.25rem 0.65rem;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.54rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }

        .dev-row:hover .dev-row-tag {
          background: rgba(255,200,80,0.07);
          border-color: rgba(255,200,80,0.2);
          color: rgba(255,200,80,0.7);
        }

        /* arrow indicator */
        .dev-row-arrow {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%) translateX(8px);
          opacity: 0;
          transition: opacity 0.25s, transform 0.3s;
          font-size: 1.2rem;
          color: #ffc850;
        }

        .dev-row:hover .dev-row-arrow {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }

        /* ── Footer stat bar ── */
        .dev-footer {
          max-width: 1300px;
          margin: 3rem auto 0;
          padding: 0 2rem;
          display: flex;
          gap: 1px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 4px;
          overflow: hidden;
          position: relative;
          z-index: 2;
        }

        .dev-footer-stat {
          flex: 1;
          padding: 1.2rem 1.5rem;
          background: rgba(8,8,12,0.95);
          display: flex;
          flex-direction: column;
          gap: 4px;
          transition: background 0.2s;
        }

        .dev-footer-stat:hover { background: rgba(255,200,80,0.04); }

        .dev-footer-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.8rem;
          color: #ffc850;
          letter-spacing: 0.04em;
          line-height: 1;
        }

        .dev-footer-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.56rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
        }

        /* ── Lightbox ── */
        .dev-lightbox {
          position: fixed;
          inset: 0;
          background: rgba(2,2,6,0.96);
          backdrop-filter: blur(18px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          animation: devLbIn 0.2s ease;
        }

        @keyframes devLbIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .dev-lightbox-wrap {
          animation: devLbUp 0.3s cubic-bezier(0.25,0.46,0.45,0.94);
        }

        @keyframes devLbUp {
          from { transform: translateY(20px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }

        .dev-lightbox-wrap img {
          max-width: 90vw;
          max-height: 84vh;
          object-fit: contain;
          border-radius: 4px;
          box-shadow: 0 60px 160px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,200,80,0.1);
          display: block;
        }

        .dev-lb-close {
          position: fixed;
          top: 1.25rem; right: 1.25rem;
          width: 38px; height: 38px;
          background: rgba(8,8,12,0.85);
          border: 1px solid rgba(255,200,80,0.35);
          border-radius: 2px;
          color: #ffc850;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
          z-index: 10;
        }

        .dev-lb-close:hover { background: rgba(255,200,80,0.12); }

        .dev-lb-nav {
          position: fixed;
          top: 50%; transform: translateY(-50%);
          width: 44px; height: 44px;
          background: rgba(8,8,12,0.85);
          border: 1px solid rgba(255,200,80,0.2);
          border-radius: 2px;
          color: #ffc850;
          font-size: 1.4rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, border-color 0.2s;
          z-index: 10;
        }

        .dev-lb-nav:hover {
          background: rgba(255,200,80,0.1);
          border-color: rgba(255,200,80,0.5);
        }

        .dev-lb-prev { left: 1.25rem; }
        .dev-lb-next { right: 1.25rem; }

        .dev-lb-label {
          position: fixed;
          bottom: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
        }

        .dev-lb-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.1rem;
          letter-spacing: 0.1em;
          color: #fff;
        }

        .dev-lb-counter {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.58rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }

        .dev-lb-counter span { color: #ffc850; }

        /* ── Responsive ── */
        @media (max-width: 860px) {
          .dev-header { flex-direction: column; align-items: flex-start; }
          .dev-header-right { max-width: 100%; }
          .dev-row { grid-template-columns: 48px 1fr; }
          .dev-lb-prev { left: 0.5rem; }
          .dev-lb-next { right: 0.5rem; }
        }

        @media (max-width: 600px) {
          .dev-row { grid-template-columns: 1fr; }
          .dev-row-num-col { display: none; }
          .dev-row-main { padding: 1.5rem 0; }
          .dev-row-screenshot { height: 220px; }
          .dev-row:hover .dev-row-screenshot { height: 280px; }
          .dev-footer { flex-direction: column; }
        }
      `}),M&&r.jsxs("div",{className:"dev-lightbox",onClick:()=>A(null),onKeyDown:u=>{u.key==="ArrowRight"&&H(1),u.key==="ArrowLeft"&&H(-1),u.key==="Escape"&&A(null)},tabIndex:0,children:[r.jsx("button",{className:"dev-lb-close",onClick:()=>A(null),children:"✕"}),r.jsx("button",{className:"dev-lb-nav dev-lb-prev",onClick:u=>{u.stopPropagation(),H(-1)},children:"‹"}),r.jsx("div",{className:"dev-lightbox-wrap",onClick:u=>u.stopPropagation(),children:r.jsx("img",{src:M.src,alt:"Project preview"})}),r.jsx("button",{className:"dev-lb-nav dev-lb-next",onClick:u=>{u.stopPropagation(),H(1)},children:"›"}),r.jsxs("div",{className:"dev-lb-label",children:[r.jsx("span",{className:"dev-lb-title",children:Ga[M.idx].title}),r.jsxs("span",{className:"dev-lb-counter",children:[r.jsx("span",{children:M.idx+1})," of ",Ga.length]})]})]}),r.jsxs("section",{className:"dev-wrapper",id:"dev",children:[r.jsxs("div",{className:"dev-header",children:[r.jsxs("div",{className:"dev-header-left",children:[r.jsx("span",{className:"dev-section-tag",children:"My Builds"}),r.jsxs("h2",{className:"dev-section-heading",children:["Dev",r.jsx("br",{}),r.jsx("span",{children:"Projects"})]})]}),r.jsx("div",{className:"dev-header-right",children:r.jsxs("p",{className:"dev-header-bio",children:["Where ",r.jsx("em",{children:"design meets functionality"}),". From ",r.jsx("strong",{children:"multi-feature business platforms"})," to polished ",r.jsx("strong",{children:"e-commerce storefronts"})," — each build is engineered to solve real problems and deliver a seamless experience."]})})]}),r.jsx("div",{className:"dev-rule",children:r.jsx("div",{className:"dev-rule-inner"})}),r.jsx("div",{className:"dev-showcase",children:Ga.map((u,O)=>r.jsxs("div",{className:"dev-row",children:[r.jsx("div",{className:"dev-row-num-col",children:r.jsx("span",{className:"dev-row-num",children:String(O+1).padStart(2,"0")})}),r.jsxs("div",{className:"dev-row-main",children:[r.jsxs("div",{className:"dev-row-topbar",children:[r.jsxs("div",{className:"dev-row-title-group",children:[r.jsx("h3",{className:"dev-row-title",children:u.title}),r.jsx("span",{className:"dev-row-subtitle",children:u.subtitle})]}),r.jsxs("div",{className:"dev-row-meta",children:[r.jsx("span",{className:"dev-row-type",children:u.type}),r.jsx("span",{className:"dev-row-year",children:u.year})]})]}),r.jsxs("div",{className:"dev-row-preview",children:[r.jsxs("div",{className:"dev-browser-bar",children:[r.jsx("div",{className:"dev-browser-dot"}),r.jsx("div",{className:"dev-browser-dot"}),r.jsx("div",{className:"dev-browser-dot"}),r.jsx("div",{className:"dev-browser-url"})]}),r.jsx("img",{src:u.src,alt:u.title,className:"dev-row-screenshot",loading:"lazy"}),r.jsx("div",{className:"dev-screenshot-zoom",children:r.jsx("button",{className:"dev-screenshot-zoom-btn",onClick:q=>{q.stopPropagation(),A({src:u.src,idx:O})},children:r.jsxs("svg",{viewBox:"0 0 24 24",children:[r.jsx("polyline",{points:"15 3 21 3 21 9"}),r.jsx("polyline",{points:"9 21 3 21 3 15"}),r.jsx("line",{x1:"21",y1:"3",x2:"14",y2:"10"}),r.jsx("line",{x1:"3",y1:"21",x2:"10",y2:"14"})]})})})]}),r.jsxs("div",{className:"dev-row-bottom",children:[r.jsx("p",{className:"dev-row-desc",children:u.description}),r.jsx("div",{className:"dev-row-tags",children:u.tags.map(q=>r.jsx("span",{className:"dev-row-tag",children:q},q))})]})]}),r.jsx("span",{className:"dev-row-arrow",children:"→"})]},u.id))}),r.jsx("div",{className:"dev-footer",children:[{num:Ga.length.toString(),label:"Projects Built"},{num:"3+",label:"Industries Served"},{num:"E-Commerce",label:"Primary Platform"},{num:"100%",label:"Client Focused"}].map(u=>r.jsxs("div",{className:"dev-footer-stat",children:[r.jsx("span",{className:"dev-footer-num",children:u.num}),r.jsx("span",{className:"dev-footer-label",children:u.label})]},u.label))})]})]})}function u5(){const M=[{id:1,company:"Century 21 Steinposner",role:"IT / Project Manager",department:"TheMedSpa HB",period:"February 2024 – June 2025",bullets:["Website Management: Oversaw website updates, content management, and UX improvements, ensuring alignment with branding guidelines.","Marketing Flier Creation: Designed and produced marketing materials that boosted client acquisition and retention.","Project Launch Support: Managed new project initiatives, collaborating cross-functionally to meet timelines and budget objectives."],tags:["Web Management","UX","Project Management","Marketing"]},{id:2,company:"Transform Salon Luxe",role:"Marketing Specialist / Web Dev",department:null,period:"January 2023 – December 2023",bullets:["Website Updates and Maintenance: Regularly updated the salon's website with new content, promotional offers, and service updates.","Creation of Marketing Materials: Designed and developed a variety of marketing materials, including brochures, flyers, and digital graphics tailored to attract new clients and retain existing ones by highlighting the salon's unique services and promotions."],tags:["Web Development","Marketing","Graphic Design","Branding"]},{id:3,company:"MyDesk Virtual Office",role:"Executive Assistant",department:null,period:"November 2021 – January 2023",bullets:["Monitored onboarding processes for new Virtual Assistants and clients.","Led a team of Virtual Assistants, providing support and mentorship.","Handled tasks including transaction coordination, social media marketing, cold calling, skip tracing, email marketing, product research, web maintenance, web development, flyer creation, and video creation.","Analyzed team strengths to maximize staff abilities, assigned work to ideal project partners, and streamlined the scheduling experience."],tags:["Team Leadership","Social Media","Email Marketing","Web Dev","VA"]},{id:4,company:"VideoPower.com",role:"SEO Content Writer",department:null,period:"July 2020 – October 2021",bullets:["Content and Article Creation: Developed high-quality content and articles tailored for the company's website, creating engaging and informative pieces that resonated with the target audience.","SEO Optimization: Integrated SEO standards and keyword strategies into all content to improve search engine ranking. Conducted thorough keyword research to identify relevant and high-traffic keywords, ensuring maximum visibility."],tags:["SEO","Content Writing","Keyword Research","Article Creation"]}];return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        /* ══════════════════════════════════════════════════════════════
           EXPERIENCE SECTION
        ══════════════════════════════════════════════════════════════ */
        .exp-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .exp-wrapper::before {
          content: '';
          position: absolute;
          top: -10%; left: -5%;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(255,200,80,0.04) 0%, transparent 70%);
          pointer-events: none;
        }

        .exp-wrapper::after {
          content: '';
          position: absolute;
          bottom: -10%; right: -5%;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(255,200,80,0.03) 0%, transparent 70%);
          pointer-events: none;
        }

        .exp-inner {
          max-width: 1300px;
          width: 100%;
          margin: 0 auto;
          padding: 7rem 3rem;
          display: flex;
          gap: clamp(3rem, 8vw, 7rem);
          align-items: flex-start;
          position: relative;
          z-index: 1;
        }

        /* ══════════════════════════════════════
           LEFT — sticky label
        ══════════════════════════════════════ */
        .exp-left {
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          position: sticky;
          top: 6rem;
        }

        .exp-section-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #ffc850;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          white-space: nowrap;
        }

        .exp-section-tag::before {
          content: '';
          display: inline-block;
          width: 28px; height: 1px;
          background: #ffc850;
          flex-shrink: 0;
        }

        .exp-section-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 5vw, 5rem);
          letter-spacing: 0.04em;
          line-height: 0.92;
          color: #fff;
          margin: 0;
        }

        .exp-section-heading span { color: #ffc850; }

        /* total count */
        .exp-count-badge {
          margin-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .exp-count-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          color: #ffc850;
          line-height: 1;
          letter-spacing: 0.04em;
        }

        .exp-count-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.56rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
        }

        /* ══════════════════════════════════════
           RIGHT — timeline
        ══════════════════════════════════════ */
        .exp-right {
          flex: 1 1 0;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* ── Timeline track ── */
        .exp-timeline {
          position: relative;
          display: flex;
          flex-direction: column;
        }

        /* vertical gold line */
        .exp-timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          bottom: 8px;
          width: 1px;
          background: linear-gradient(
            to bottom,
            rgba(255,200,80,0.5),
            rgba(255,200,80,0.15) 80%,
            transparent
          );
        }

        /* ── Each entry ── */
        .exp-entry {
          position: relative;
          padding: 0 0 3rem 2.5rem;
        }

        .exp-entry:last-child {
          padding-bottom: 0;
        }

        /* dot on timeline */
        .exp-entry::before {
          content: '';
          position: absolute;
          left: -4px;
          top: 8px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: rgba(8,8,12,1);
          border: 1px solid rgba(255,200,80,0.5);
          transition: background 0.25s, border-color 0.25s, box-shadow 0.25s;
          z-index: 2;
        }

        .exp-entry:hover::before {
          background: #ffc850;
          border-color: #ffc850;
          box-shadow: 0 0 10px rgba(255,200,80,0.4);
        }

        /* ── Card ── */
        .exp-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 3px;
          padding: 1.75rem 1.75rem 1.5rem;
          position: relative;
          overflow: hidden;
          transition: background 0.25s, border-color 0.25s;
        }

        .exp-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, rgba(255,200,80,0.6), transparent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }

        .exp-entry:hover .exp-card {
          background: rgba(255,200,80,0.03);
          border-color: rgba(255,200,80,0.15);
        }

        .exp-entry:hover .exp-card::before {
          transform: scaleX(1);
        }

        /* card header */
        .exp-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 1.25rem;
        }

        .exp-card-title-group {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .exp-company {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.4rem, 3vw, 1.9rem);
          letter-spacing: 0.05em;
          color: #fff;
          line-height: 1;
          transition: color 0.25s;
        }

        .exp-entry:hover .exp-company { color: #ffc850; }

        .exp-role-line {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .exp-role {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          color: rgba(255,255,255,0.55);
          letter-spacing: 0.04em;
        }

        .exp-dept-sep {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: rgba(255,200,80,0.4);
          flex-shrink: 0;
        }

        .exp-dept {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 300;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.04em;
        }

        /* period badge */
        .exp-period {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.3rem 0.85rem;
          background: rgba(255,200,80,0.07);
          border: 1px solid rgba(255,200,80,0.18);
          border-radius: 2px;
          white-space: nowrap;
          flex-shrink: 0;
          align-self: flex-start;
        }

        .exp-period-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #ffc850;
          opacity: 0.6;
          flex-shrink: 0;
        }

        .exp-period span {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.58rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,200,80,0.75);
        }

        /* divider inside card */
        .exp-card-divider {
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.05);
          margin-bottom: 1.25rem;
        }

        /* bullet points */
        .exp-bullets {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-bottom: 1.25rem;
          list-style: none;
          padding: 0;
          margin-top: 0;
        }

        .exp-bullet {
          display: flex;
          gap: 0.7rem;
          align-items: flex-start;
        }

        .exp-bullet-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(255,200,80,0.45);
          flex-shrink: 0;
          margin-top: 0.45rem;
          transition: background 0.2s;
        }

        .exp-entry:hover .exp-bullet-dot {
          background: #ffc850;
        }

        .exp-bullet-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.45);
          line-height: 1.8;
          font-weight: 300;
        }

        .exp-bullet-text strong {
          color: rgba(255,255,255,0.65);
          font-weight: 500;
        }

        /* tags */
        .exp-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .exp-tag {
          padding: 0.22rem 0.65rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.52rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }

        .exp-entry:hover .exp-tag {
          background: rgba(255,200,80,0.06);
          border-color: rgba(255,200,80,0.2);
          color: rgba(255,200,80,0.65);
        }

        /* ══════════════════════════════════════════════════════════════
           TABLET  ≤ 900px
        ══════════════════════════════════════════════════════════════ */
        @media (max-width: 900px) {
          .exp-inner {
            padding: 5rem 2.5rem;
            gap: 3rem;
          }

          .exp-left {
            position: static;
          }
        }

        /* ══════════════════════════════════════════════════════════════
           MOBILE  ≤ 680px
        ══════════════════════════════════════════════════════════════ */
        @media (max-width: 680px) {
          .exp-inner {
            padding: 4.5rem 1.5rem 5rem;
            flex-direction: column;
            gap: 0;
          }

          .exp-left {
            margin-bottom: 2.5rem;
          }

          .exp-section-heading {
            font-size: clamp(3.2rem, 16vw, 4.5rem);
          }

          .exp-count-badge {
            display: none;
          }

          .exp-entry {
            padding-left: 2rem;
            padding-bottom: 2.5rem;
          }

          .exp-card {
            padding: 1.4rem 1.25rem 1.25rem;
          }

          .exp-card-header {
            flex-direction: column;
            gap: 0.75rem;
          }

          .exp-period {
            align-self: flex-start;
          }

          .exp-company {
            font-size: 1.4rem;
          }

          .exp-bullet-text {
            font-size: 0.82rem;
          }
        }

        /* ══════════════════════════════════════════════════════════════
           SMALL MOBILE  ≤ 400px
        ══════════════════════════════════════════════════════════════ */
        @media (max-width: 400px) {
          .exp-inner {
            padding: 4rem 1.25rem 4.5rem;
          }

          .exp-card {
            padding: 1.2rem 1rem 1rem;
          }

          .exp-timeline::before {
            left: -1px;
          }

          .exp-entry {
            padding-left: 1.5rem;
          }

          .exp-bullet-text {
            font-size: 0.8rem;
          }

          .exp-tag {
            font-size: 0.48rem;
          }
        }
      `}),r.jsx("section",{className:"exp-wrapper",id:"experience",children:r.jsxs("div",{className:"exp-inner",children:[r.jsxs("div",{className:"exp-left",children:[r.jsx("span",{className:"exp-section-tag",children:"My Journey"}),r.jsxs("h2",{className:"exp-section-heading",children:["Work",r.jsx("br",{}),r.jsx("span",{children:"Experience"})]}),r.jsxs("div",{className:"exp-count-badge",children:[r.jsx("span",{className:"exp-count-num",children:M.length}),r.jsx("span",{className:"exp-count-label",children:"Roles Held"})]})]}),r.jsx("div",{className:"exp-right",children:r.jsx("div",{className:"exp-timeline",children:M.map(A=>r.jsx("div",{className:"exp-entry",children:r.jsxs("div",{className:"exp-card",children:[r.jsxs("div",{className:"exp-card-header",children:[r.jsxs("div",{className:"exp-card-title-group",children:[r.jsx("span",{className:"exp-company",children:A.company}),r.jsxs("div",{className:"exp-role-line",children:[r.jsx("span",{className:"exp-role",children:A.role}),A.department&&r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"exp-dept-sep"}),r.jsx("span",{className:"exp-dept",children:A.department})]})]})]}),r.jsxs("div",{className:"exp-period",children:[r.jsx("span",{className:"exp-period-dot"}),r.jsx("span",{children:A.period})]})]}),r.jsx("div",{className:"exp-card-divider"}),r.jsx("ul",{className:"exp-bullets",children:A.bullets.map((H,u)=>{const O=H.indexOf(":"),q=O>-1&&O<40;return r.jsxs("li",{className:"exp-bullet",children:[r.jsx("span",{className:"exp-bullet-dot"}),r.jsx("span",{className:"exp-bullet-text",children:q?r.jsxs(r.Fragment,{children:[r.jsx("strong",{children:H.slice(0,O+1)}),H.slice(O+1)]}):H})]},u)})}),r.jsx("div",{className:"exp-tags",children:A.tags.map(H=>r.jsx("span",{className:"exp-tag",children:H},H))})]})},A.id))})})]})})]})}const f5={gmail:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z",microsoftoutlook:"M21.184 0H7.616A2.817 2.817 0 0 0 4.8 2.816v1.017L12.8 6.4l8-2.567V2.816A2.817 2.817 0 0 0 21.184 0zM4.8 6.756V21.3l8-2.057 8 2.057V6.756L12.8 9.323 4.8 6.756zM0 5.333v13.334l3.2.821V4.512L0 5.333zm24 0l-3.2-.821v14.976l3.2-.821V5.333z",slack:"M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z",microsoftteams:"M19.547 7.518c1.304 0 2.36-1.057 2.36-2.36S20.851 2.8 19.547 2.8a2.36 2.36 0 0 0 0 4.718zm1.722 1.07h-3.444a.86.86 0 0 0-.86.86v5.155c0 3.048 3.552 3.55 4.315 3.55h.01c.58 0 .71-.346.71-.608V9.448a.86.86 0 0 0-.731-.86zM12 12.364a3.15 3.15 0 1 0 0-6.3 3.15 3.15 0 0 0 0 6.3zm2.116 1.133H9.884a1.75 1.75 0 0 0-1.75 1.75v5.733c0 .192.156.347.348.347h7.036a.348.348 0 0 0 .348-.347V15.247a1.75 1.75 0 0 0-1.75-1.75z",zoom:"M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm6.048 15.612c0 .504-.6.78-1.02.468l-2.976-2.172v1.704c0 .828-.672 1.5-1.5 1.5H5.928a1.5 1.5 0 0 1-1.5-1.5V8.4c0-.828.672-1.5 1.5-1.5h6.624c.828 0 1.5.672 1.5 1.5v1.704l2.976-2.172c.42-.312 1.02-.036 1.02.468v6.72z",googlemeet:"M17.525 11.025 21 7.55v8.9l-3.475-3.475-3.15 2.775V9.25l3.15 1.775zM3 8a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8z",skype:"M10.588 1.225A10.48 10.48 0 0 0 .002 12a10.45 10.45 0 0 0 1.37 5.223A6.18 6.18 0 0 0 5.64 23.75a10.48 10.48 0 0 0 6.278.248A10.48 10.48 0 0 0 24 12a10.45 10.45 0 0 0-1.38-5.24 6.18 6.18 0 0 0-4.286-6.524 10.48 10.48 0 0 0-7.746.989zm1.09 17.274c-3.018 0-4.393-1.484-4.393-2.599 0-.61.453-1.042 1.082-1.042 1.416 0 1.052 2.026 3.311 2.026 1.209 0 1.88-.659 1.88-1.327 0-.404-.202-.853-.988-1.05l-2.614-.655c-2.103-.527-2.486-1.656-2.486-2.716 0-2.202 2.072-3.024 4.023-3.024 1.8 0 3.929.991 3.929 2.31 0 .633-.55 1.0-1.147 1.0-1.234 0-1.021-1.7-2.94-1.7-1.082 0-1.677.49-1.677 1.196 0 .706.861.932 1.61 1.105l1.929.45c2.124.494 2.61 1.677 2.61 2.824 0 1.782-1.368 3.202-4.13 3.202z",discord:"M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z",whatsapp:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.003 2.003a9.998 9.998 0 0 0-8.674 14.953L2.004 22l5.176-1.316A9.998 9.998 0 1 0 12.003 2.003z",trello:"M21 0H3C1.343 0 0 1.343 0 3v18c0 1.657 1.343 3 3 3h18c1.657 0 3-1.343 3-3V3c0-1.657-1.343-3-3-3zM10.44 18.18c0 .795-.645 1.44-1.44 1.44H4.56c-.795 0-1.44-.645-1.44-1.44V4.56c0-.795.645-1.44 1.44-1.44H9c.795 0 1.44.645 1.44 1.44v13.62zm10.44-6c0 .795-.645 1.44-1.44 1.44H15c-.795 0-1.44-.645-1.44-1.44V4.56c0-.795.645-1.44 1.44-1.44h4.44c.795 0 1.44.645 1.44 1.44v7.62z",asana:"M11.987 14.138l-3.132 3.97a2.5 2.5 0 0 1-4.7-1.011 2.5 2.5 0 0 1 .81-2.7 2.5 2.5 0 0 1 3.516.38l3.508-4.45a2.5 2.5 0 0 1 3.516-.38 2.5 2.5 0 0 1 .81 2.7 2.5 2.5 0 0 1-4.7 1.011zM12 0C5.374 0 0 5.374 0 11s4.925 11 11 11c3.38 0 6.48-1.35 8.59-3.6L17.5 16.3c-1.6 1.75-3.9 2.7-6.5 2.7-4.97 0-9-4.03-9-9s4.03-9 9-9c2.6 0 4.9.95 6.5 2.7l2.09-2.1C17.48 1.35 14.38 0 11 0z",googledrive:"M6.28 0L0 10.93l3.14 5.44L9.42 5.44 6.28 0zm1.62 16.37H1.35L0 19h14.11L8.2 8.73l-1.46 2.67 3.63 5.97H7.9zm10.54-5.44L12.56 0H6.28l6.28 10.93 5.86-2.57-.06.57zM14.11 16.1L12 12.54l-4.49 7.77H24L14.11 16.1z",dropbox:"M12 1.5L6 5.25l6 3.75 6-3.75L12 1.5zM6 12.75L12 16.5l6-3.75-6-3.75-6 3.75zM0 5.25L6 9l6-3.75L6 1.5 0 5.25zm18 3.75l6-3.75L18 1.5l-6 3.75 6 3.75zm-6 1.5L6 14.25l6 3.75 6-3.75L12 10.5zm-12 3.75L6 18l6-3.75-6-3.75-6 3.75zm18 0L12 18l6 3.75 6-3.75-6-3.75z",microsoftonedrive:"M14.558 8.417A5.576 5.576 0 0 0 9.375 4.8a5.57 5.57 0 0 0-4.917 2.95A4.187 4.187 0 0 0 0 11.992 4.19 4.19 0 0 0 4.192 16.2h10.366a3.6 3.6 0 0 0 .787-7.12zm3.245.942a4.793 4.793 0 0 1 .597 9.541H3.208a5.593 5.593 0 0 0 .975.3h14.17a5.993 5.993 0 0 0 5.647-6c0-2.88-2.025-5.28-4.8-5.795a4.8 4.8 0 0 0-1.397-.046z",visualstudiocode:"M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z",react:"M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.12.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.468zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.468a23.357 23.357 0 0 0-1.364-3.578l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046z",tailwindcss:"M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z",bootstrap:"M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.956v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.325-1.663zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-8.037 0c0-1.588-1.09-2.501-2.988-2.501H8.577v9.906h3.207c2.07 0 3.241-.953 3.241-2.555 0-1.133-.61-2.024-1.726-2.33.962-.322 1.638-1.085 1.638-2.52z",nodedotjs:"M11.998 24c-.321 0-.641-.084-.924-.247l-2.937-1.737c-.438-.245-.224-.332-.08-.382.585-.203.703-.249 1.327-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.134-.141.134-.238V7.926c0-.099-.052-.19-.137-.24l-8.791-5.072a.271.271 0 0 0-.274 0L3.065 7.686c-.087.05-.141.144-.141.24v10.15c0 .097.054.189.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.891V8.999c0-.143.111-.253.254-.253h1.109c.139 0 .254.11.254.253v10.813c0 1.748-.951 2.749-2.608 2.749-.508 0-.909 0-2.026-.551L2.28 20.508A1.851 1.851 0 0 1 1.332 19v-10.2c0-.66.353-1.278.924-1.609l8.795-5.076a1.927 1.927 0 0 1 1.85 0l8.794 5.077c.57.33.924.949.924 1.608v10.2a1.85 1.85 0 0 1-.924 1.609l-8.794 5.075A1.87 1.87 0 0 1 11.998 24z",php:"M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0 0 5.373 0 12zm13.69-4.62c.924 0 1.67.19 2.22.57.55.38.9.98.9 1.77 0 .59-.14 1.08-.43 1.47-.28.4-.67.71-1.18.93l2.01 3.75h-1.75l-1.73-3.43H12.2v3.43H10.6V7.38h3.09zm-.2 3.62c.5 0 .88-.11 1.14-.34.26-.22.39-.57.39-1.02 0-.44-.13-.75-.4-.96-.27-.2-.65-.3-1.14-.3H12.2v2.62h1.29zm-7.69 1.02c0-.93.19-1.72.57-2.34a3.7 3.7 0 0 1 1.56-1.44c.65-.33 1.37-.49 2.16-.49h.74v1.54h-.74c-.6 0-1.12.13-1.55.39-.43.26-.76.64-.99 1.13-.22.49-.34 1.07-.34 1.71 0 .63.11 1.2.34 1.69.22.49.56.87.99 1.14.43.26.96.39 1.56.39H10.1V17h-.74c-.78 0-1.49-.16-2.14-.49-.65-.32-1.17-.81-1.56-1.44-.38-.63-.57-1.41-.57-2.33z",mysql:"M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.19.214.49.062.064.072.28.072.28v5.765c-.145-.036-.27-.116-.389-.259-.022-.029-.049-.084-.072-.084-.021 0-.052.022-.052.022-.07.12-.115.198-.138.386-.023.189-.031.378.011.483.042.105.076.231.118.335.042.104.087.219.161.336.074.117.156.226.223.316.068.091.12.153.194.216.075.063.134.103.198.136.064.034.109.055.183.077.073.022.14.038.208.038.072 0 .146-.016.21-.038.066-.022.125-.049.183-.077a1.5 1.5 0 0 0 .354-.239c.088-.088.16-.19.215-.305.064-.12.11-.25.14-.385.03-.136.045-.275.045-.418V7.474c.052-.065.104-.138.146-.213.04-.076.067-.153.079-.232a.526.526 0 0 0-.009-.258.56.56 0 0 0-.153-.22.69.69 0 0 0-.27-.14 1.3 1.3 0 0 0-.402-.063z",postgresql:"M17.128 0a10.134 10.134 0 0 0-2.755.403C12.602.057 10.855 0 10.8 0 8.168 0 6.5 1.067 6.5 1.067 4.203 1.215.344 2.67.02 7.018c-.077 1.029.023 2.063.298 3.062.6 2.204 2.477 4.58 5.119 4.089a4.478 4.478 0 0 0 1.531-.538l.032.19c-.167.082-.299.202-.38.362l-.005.012c-.302.652-.124 1.258.35 1.662.08.072.17.136.265.19.05.03.1.055.153.077v.013c-.078.152-.12.32-.12.492 0 .637.515 1.154 1.149 1.154a1.15 1.15 0 0 0 1.15-1.154 1.13 1.13 0 0 0-.048-.32l.003.011c.23-.003.459-.036.679-.097l-.022.005a1.15 1.15 0 0 0 1.119 1.396 1.15 1.15 0 0 0 1.149-1.154 1.14 1.14 0 0 0-.247-.708l.002.003c.37-.356.521-.874.401-1.375l-.002-.007-.152-.575a5.268 5.268 0 0 0 2.748-.965l-.028.019c-.104 1.06.112 1.93.548 2.524a2.5 2.5 0 0 0 2.024 1.045c1.943 0 3.514-2.26 3.809-5.398C23.571 5.026 20.978 0 17.128 0zM8.5 14.22a.72.72 0 1 1 0-1.44.72.72 0 0 1 0 1.44zm3.208 2.01a.72.72 0 1 1 0-1.44.72.72 0 0 1 0 1.44z",supabase:"M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C.99 12.558 1.5 13 2 13h7.836a1 1 0 0 0 1-.999V1.036zM12.1 22.964c.015.986 1.26 1.41 1.875.637l9.26-11.65A1.58 1.58 0 0 0 22 11H14.1a1 1 0 0 0-1 .999v10.965z",github:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",gitlab:"M23.955 13.587l-1.342-4.135-2.664-8.189a.455.455 0 0 0-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 0 0-.867 0L1.386 9.45.044 13.587a.924.924 0 0 0 .331 1.023L12 23.054l11.625-8.443a.92.92 0 0 0 .33-1.024",wordpress:"M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12zm1.44 0c0 5.8 4.76 10.56 10.56 10.56 5.8 0 10.56-4.76 10.56-10.56C22.56 6.2 17.8 1.44 12 1.44 6.2 1.44 1.44 6.2 1.44 12zm2.19 0C3.63 7.1 7.39 3.43 12 3.43c1.55 0 3.01.43 4.25 1.18L5.04 15.7A8.5 8.5 0 0 1 3.63 12zm8.37 8.57c-1.59 0-3.07-.46-4.31-1.24l11.27-11.04A8.505 8.505 0 0 1 20.57 12c0 4.72-3.84 8.57-8.57 8.57z",figma:"M5.998 24c1.657 0 3-1.343 3-3v-3h-3a3 3 0 0 0 0 6zm3-12H5.998a3 3 0 0 0 0 6h3v-6zm0-6H5.998a3 3 0 0 0 0 6h3V6zm6 0h-3v6h3a3 3 0 0 0 0-6zm0 6h-3v6h3a3 3 0 0 0 0-6z",canva:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.748 17.01a4.94 4.94 0 0 1-4.938-4.938A4.94 4.94 0 0 1 11.252 7.134a4.94 4.94 0 0 1 4.937 4.938 4.94 4.94 0 0 1-4.937 4.938zm5.623-1.02a6.323 6.323 0 0 0 .95-3.918 6.323 6.323 0 0 0-6.573-6.054 6.323 6.323 0 0 0-5.786 6.573 6.323 6.323 0 0 0 6.573 5.786 6.323 6.323 0 0 0 4.836-2.387z",openai:"M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0L4.001 14.21a4.501 4.501 0 0 1-1.66-6.314zm16.597 3.855l-5.843-3.369 2.02-1.168a.076.076 0 0 1 .071 0l4.816 2.788a4.499 4.499 0 0 1-.676 8.119v-5.678a.79.79 0 0 0-.388-.692zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.814-2.784a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z",zapier:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.57 14.27h-3.67l2.34 3.9H9.77l2.34-3.9H8.44l-1.5-2.27h3.67L8.27 8.1h6.46l-2.34 3.9h3.67l1.5 2.27z",grammarly:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.195 4.797c3.035 0 5.494 1.46 6.977 3.773l-2.002 1.39a5.684 5.684 0 0 0-4.975-2.835c-3.168 0-5.746 2.57-5.746 5.737 0 3.168 2.578 5.738 5.746 5.738 2.66 0 4.9-1.809 5.567-4.253H12.5V11.78h7.406c.08.444.13.9.13 1.363C20.036 17.465 16.511 21 12.195 21 7.665 21 4 17.334 4 12.804S7.665 4.797 12.195 4.797z",bitwarden:"M12 1L3 5v8c0 4.97 3.84 9.64 9 10.93C17.16 22.64 21 17.97 21 13V5l-9-4zm0 4.5l6 2.67V13c0 3.47-2.69 6.72-6 7.93-3.31-1.21-6-4.46-6-7.93V8.17L12 5.5z",calendly:"M19.59 3.6C17.48 1.35 14.38 0 11 0 4.925 0 0 4.925 0 11s4.925 11 11 11c3.38 0 6.48-1.35 8.59-3.6L17.5 16.3c-1.6 1.75-3.9 2.7-6.5 2.7-4.97 0-9-4.03-9-9s4.03-9 9-9c2.6 0 4.9.95 6.5 2.7L19.59 3.6zM13 6v5.586l3.707 3.707-1.414 1.414L11 13V6h2z",googlecalendar:"M18 0H6L0 6v12l6 6h12l6-6V6l-6-6zm-1 17H7v-2h10v2zm0-4H7v-2h10v2zm0-4H7V7h10v2z",mondaydotcom:"M4.032 14.976c-.936 0-1.696-.76-1.696-1.696S3.096 11.584 4.032 11.584c.463 0 .882.188 1.186.492l4.166-7.22A3.752 3.752 0 0 1 8 2.752C8 .752 9.752 0 12 0s4 .752 4 2.752a3.752 3.752 0 0 1-.384 2.104l4.166 7.22c.304-.304.723-.492 1.186-.492.936 0 1.696.76 1.696 1.696s-.76 1.696-1.696 1.696c-.463 0-.882-.188-1.186-.492l-4.166 7.22c.24.42.384.904.384 1.424C16 23.248 14.248 24 12 24s-4-.752-4-2.752c0-.52.144-1.004.384-1.424l-4.166-7.22c-.304.304-.723.492-1.186.492z",adobephotoshop:"M0 0v24h24V0H0zm10.014 6.508c1.16 0 1.975.187 2.664.564a3.67 3.67 0 0 1 1.64 1.64c.376.69.563 1.503.563 2.438 0 .937-.187 1.749-.563 2.438-.375.69-.922 1.22-1.64 1.64-.69.376-1.503.564-2.664.564H7.639V17.5H6.01V6.508h4.004zm0 7.848c.939 0 1.668-.236 2.14-.706.47-.47.705-1.126.705-1.97 0-.844-.235-1.5-.705-1.97-.472-.47-1.201-.707-2.14-.707H7.639v5.353h2.375zm6.794-1.347c.057.58.354 1.024.891 1.332.537.31 1.136.463 1.797.463.426 0 .8-.055 1.122-.165a1.96 1.96 0 0 0 .77-.47c.199-.205.298-.452.298-.745 0-.359-.135-.641-.405-.846-.27-.205-.657-.384-1.162-.538l-1.352-.385c-.674-.19-1.18-.455-1.518-.795-.338-.34-.507-.775-.507-1.306 0-.531.15-.99.449-1.377.3-.386.71-.683 1.231-.892.521-.209 1.112-.313 1.773-.313.71 0 1.322.13 1.835.389.514.26.91.617 1.188 1.073.28.455.427.97.442 1.544h-1.56c-.057-.523-.268-.933-.632-1.229-.364-.295-.835-.443-1.412-.443-.514 0-.93.108-1.248.323a.975.975 0 0 0-.477.847c0 .297.107.534.321.71.215.177.552.336 1.012.476l1.393.397c.73.212 1.278.494 1.645.845.367.351.55.808.55 1.37 0 .583-.157 1.08-.47 1.49-.313.41-.751.723-1.315.938-.563.216-1.212.323-1.945.323-.773 0-1.455-.13-2.043-.39a3.258 3.258 0 0 1-1.372-1.093 2.97 2.97 0 0 1-.503-1.622h1.581z",adobepremierepro:"M0 0v24h24V0H0zm9.7 6.506c1.015 0 1.726.186 2.2.56.474.373.71.908.71 1.605 0 .52-.125.956-.376 1.31a2.33 2.33 0 0 1-1.05.822l1.782 4.69H11.16l-1.54-4.22H8.506v4.22H7.2V6.506H9.7zm6.785 1.88c.43 0 .82.086 1.17.26.35.17.655.422.914.75v-.89h1.2v8.988h-1.2v-.888a2.568 2.568 0 0 1-.914.748c-.35.174-.74.26-1.17.26-.545 0-1.028-.134-1.45-.4a2.73 2.73 0 0 1-.978-1.108c-.233-.474-.35-1.012-.35-1.615v-.58c0-.603.117-1.14.35-1.615a2.73 2.73 0 0 1 .978-1.108c.422-.266.905-.4 1.45-.4zM9.456 8.032H8.506v3.02h.95c.7 0 1.195-.15 1.488-.452.294-.3.44-.7.44-1.2 0-.472-.143-.834-.43-1.084-.285-.25-.73-.376-1.5-.376zm7.037.75c-.548 0-.986.2-1.316.6-.33.4-.494.928-.494 1.585v.58c0 .655.165 1.182.494 1.582.33.4.768.6 1.316.6.322 0 .61-.075.866-.225a1.7 1.7 0 0 0 .622-.638v-3.82a1.7 1.7 0 0 0-.622-.64 1.736 1.736 0 0 0-.866-.224z",loom:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15zm0 3a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"},Gi=[{id:"communication",label:"Communication",emoji:"💬",tools:[{name:"Gmail",icon:"gmail"},{name:"Outlook",icon:"microsoftoutlook"},{name:"Slack",icon:"slack"},{name:"Microsoft Teams",icon:"microsoftteams"},{name:"Zoom",icon:"zoom"},{name:"Google Meet",icon:"googlemeet"},{name:"Skype",icon:"skype"},{name:"Discord",icon:"discord"},{name:"WhatsApp",icon:"whatsapp"}]},{id:"scheduling",label:"Scheduling",emoji:"📅",tools:[{name:"Calendly",icon:"calendly"},{name:"Google Calendar",icon:"googlecalendar"}]},{id:"projectmgmt",label:"Project Management",emoji:"📋",tools:[{name:"Trello",icon:"trello"},{name:"Asana",icon:"asana"},{name:"Monday.com",icon:"mondaydotcom"}]},{id:"cloud",label:"Cloud Storage",emoji:"☁️",tools:[{name:"Google Drive",icon:"googledrive"},{name:"Dropbox",icon:"dropbox"},{name:"OneDrive",icon:"microsoftonedrive"}]},{id:"webdev",label:"Web Development",emoji:"💻",tools:[{name:"VS Code",icon:"visualstudiocode"},{name:"React",icon:"react"},{name:"Tailwind CSS",icon:"tailwindcss"},{name:"Bootstrap",icon:"bootstrap"},{name:"Node.js",icon:"nodedotjs"},{name:"PHP",icon:"php"},{name:"MySQL",icon:"mysql"},{name:"PostgreSQL",icon:"postgresql"},{name:"Supabase",icon:"supabase"},{name:"GitHub",icon:"github"},{name:"GitLab",icon:"gitlab"},{name:"WordPress",icon:"wordpress"}]},{id:"design",label:"Graphic Design & Creative",emoji:"🎨",tools:[{name:"Photoshop",icon:"adobephotoshop"},{name:"Figma",icon:"figma"},{name:"Canva",icon:"canva"},{name:"Premiere Pro",icon:"adobepremierepro"}]},{id:"ai",label:"Automation & AI",emoji:"🤖",tools:[{name:"ChatGPT",icon:"openai"},{name:"Zapier",icon:"zapier"},{name:"Grammarly",icon:"grammarly"},{name:"Loom",icon:"loom"}]},{id:"security",label:"Security",emoji:"🔐",tools:[{name:"Bitwarden",icon:"bitwarden"}]}],_f=Gi.reduce((M,A)=>M+A.tools.length,0);function d5({icon:M}){const A=f5[M];return A?r.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",style:{width:14,height:14},children:r.jsx("path",{d:A})}):r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",style:{width:14,height:14},children:r.jsx("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"})})}function m5(){const[M,A]=ct.useState("all"),H=M==="all"?Gi:Gi.filter(u=>u.id===M);return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        .tools-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: flex-start;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .tools-wrapper::before {
          content: '';
          position: absolute;
          top: -10%; right: -5%;
          width: 650px; height: 650px;
          background: radial-gradient(circle, rgba(255,200,80,0.05) 0%, transparent 68%);
          pointer-events: none;
        }
        .tools-wrapper::after {
          content: '';
          position: absolute;
          bottom: -10%; left: -5%;
          width: 450px; height: 450px;
          background: radial-gradient(circle, rgba(255,200,80,0.03) 0%, transparent 70%);
          pointer-events: none;
        }
        .tools-inner {
          max-width: 1300px;
          width: 100%;
          margin: 0 auto;
          padding: 7rem 3rem;
          display: flex;
          gap: clamp(3rem, 8vw, 7rem);
          align-items: flex-start;
          position: relative;
          z-index: 1;
        }
        .tools-left {
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          position: sticky;
          top: 6rem;
        }
        .tools-section-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #ffc850;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          white-space: nowrap;
        }
        .tools-section-tag::before {
          content: '';
          display: inline-block;
          width: 28px; height: 1px;
          background: #ffc850;
          flex-shrink: 0;
        }
        .tools-section-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 5vw, 5rem);
          letter-spacing: 0.04em;
          line-height: 0.92;
          color: #fff;
          margin: 0;
        }
        .tools-section-heading span { color: #ffc850; }
        .tools-count-badge {
          margin-top: 1.4rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .tools-count-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          color: #ffc850;
          line-height: 1;
          letter-spacing: 0.04em;
        }
        .tools-count-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.56rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
        }
        .tools-right {
          flex: 1 1 0;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .tools-intro-line {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          flex-wrap: wrap;
        }
        .tools-intro-pill {
          padding: 0.3rem 0.9rem;
          background: rgba(255,200,80,0.08);
          border: 1px solid rgba(255,200,80,0.25);
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.62rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #ffc850;
        }
        .tools-bio {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.9rem, 1.5vw, 1.02rem);
          color: rgba(255,255,255,0.5);
          line-height: 1.9;
          font-weight: 300;
        }
        .tools-bio em { color: #ffc850; font-style: normal; }
        .tools-bio strong { color: #fff; font-weight: 500; }
        .tools-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, rgba(255,200,80,0.2), transparent);
        }
        .tools-filters {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
        }
        .tools-filter-btn {
          padding: 0.4rem 1rem;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }
        .tools-filter-btn:hover {
          border-color: rgba(255,200,80,0.3);
          color: rgba(255,200,80,0.75);
        }
        .tools-filter-btn.active {
          background: rgba(255,200,80,0.1);
          border-color: rgba(255,200,80,0.4);
          color: #ffc850;
        }
        .tools-categories {
          display: flex;
          flex-direction: column;
          gap: 1.5px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 4px;
          overflow: hidden;
        }
        .tools-category-block {
          background: rgba(8,8,12,0.96);
          transition: background 0.2s;
        }
        .tools-category-block:hover { background: rgba(12,12,18,0.99); }
        .tools-cat-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.4rem 0.85rem;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .tools-cat-emoji { font-size: 0.95rem; line-height: 1; opacity: 0.8; }
        .tools-cat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.62rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          transition: color 0.2s;
        }
        .tools-category-block:hover .tools-cat-label { color: rgba(255,200,80,0.7); }
        .tools-cat-count {
          margin-left: auto;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          color: rgba(255,200,80,0.3);
          transition: color 0.2s;
        }
        .tools-category-block:hover .tools-cat-count { color: rgba(255,200,80,0.6); }
        .tools-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding: 1rem 1.4rem 1.25rem;
        }
        .tools-chip {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.38rem 0.8rem 0.38rem 0.65rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 3px;
          cursor: default;
          transition: background 0.2s, border-color 0.2s, transform 0.18s;
        }
        .tools-chip:hover {
          background: rgba(255,200,80,0.06);
          border-color: rgba(255,200,80,0.25);
          transform: translateY(-1px);
        }
        .tools-chip-icon {
          width: 16px;
          height: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: rgba(255,255,255,0.4);
          transition: color 0.2s;
        }
        .tools-chip:hover .tools-chip-icon { color: #ffc850; }
        .tools-chip-name {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.76rem;
          font-weight: 400;
          color: rgba(255,255,255,0.55);
          white-space: nowrap;
          transition: color 0.2s;
          letter-spacing: 0.01em;
        }
        .tools-chip:hover .tools-chip-name { color: rgba(255,255,255,0.85); }

        @media (max-width: 900px) {
          .tools-inner { padding: 5rem 2.5rem; gap: 3rem; }
          .tools-left { position: static; }
        }
        @media (max-width: 680px) {
          .tools-inner { padding: 4.5rem 1.5rem 5rem; flex-direction: column; gap: 0; }
          .tools-left { margin-bottom: 2rem; }
          .tools-section-heading { font-size: clamp(3.2rem, 16vw, 4.5rem); }
          .tools-count-badge { display: none; }
          .tools-cat-header { padding: 0.85rem 1rem 0.75rem; }
          .tools-grid { padding: 0.85rem 1rem 1rem; gap: 6px; }
          .tools-chip { padding: 0.3rem 0.65rem 0.3rem 0.5rem; }
          .tools-chip-name { font-size: 0.72rem; }
        }
        @media (max-width: 400px) {
          .tools-inner { padding: 4rem 1.25rem 4.5rem; }
          .tools-section-heading { font-size: 3rem; }
          .tools-chip-name { font-size: 0.68rem; }
        }
      `}),r.jsx("section",{className:"tools-wrapper",id:"tools",children:r.jsxs("div",{className:"tools-inner",children:[r.jsxs("div",{className:"tools-left",children:[r.jsx("span",{className:"tools-section-tag",children:"My Stack"}),r.jsxs("h2",{className:"tools-section-heading",children:["Tools &",r.jsx("br",{}),r.jsx("span",{children:"Skills"})]}),r.jsxs("div",{className:"tools-count-badge",children:[r.jsxs("span",{className:"tools-count-num",children:[_f,"+"]}),r.jsx("span",{className:"tools-count-label",children:"Tools Known"})]})]}),r.jsxs("div",{className:"tools-right",children:[r.jsxs("div",{className:"tools-intro-line",children:[r.jsx("span",{className:"tools-intro-pill",children:"💬 Communication"}),r.jsx("span",{className:"tools-intro-pill",children:"💻 Web Dev"}),r.jsx("span",{className:"tools-intro-pill",children:"🎨 Design"}),r.jsx("span",{className:"tools-intro-pill",children:"🤖 AI & Automation"}),r.jsx("span",{className:"tools-intro-pill",children:"🔐 Security"})]}),r.jsxs("p",{className:"tools-bio",children:["A versatile toolkit spanning ",r.jsx("em",{children:"communication"}),", ",r.jsx("em",{children:"web development"}),","," ",r.jsx("em",{children:"design"}),", and ",r.jsx("em",{children:"automation"}),". These are the platforms and technologies I rely on daily to ",r.jsx("strong",{children:"deliver quality work"})," across every project."]}),r.jsx("div",{className:"tools-divider"}),r.jsxs("div",{className:"tools-filters",children:[r.jsxs("button",{className:`tools-filter-btn${M==="all"?" active":""}`,onClick:()=>A("all"),children:["All (",_f,")"]}),Gi.map(u=>r.jsxs("button",{className:`tools-filter-btn${M===u.id?" active":""}`,onClick:()=>A(u.id),children:[u.emoji," ",u.label]},u.id))]}),r.jsx("div",{className:"tools-categories",children:H.map(u=>r.jsxs("div",{className:"tools-category-block",children:[r.jsxs("div",{className:"tools-cat-header",children:[r.jsx("span",{className:"tools-cat-emoji",children:u.emoji}),r.jsx("span",{className:"tools-cat-label",children:u.label}),r.jsx("span",{className:"tools-cat-count",children:u.tools.length})]}),r.jsx("div",{className:"tools-grid",children:u.tools.map(O=>r.jsxs("div",{className:"tools-chip",children:[r.jsx("span",{className:"tools-chip-icon",children:r.jsx(d5,{icon:O.icon})}),r.jsx("span",{className:"tools-chip-name",children:O.name})]},O.name))})]},u.id))})]})]})})]})}const g5=[{label:"Facebook",handle:"Marlon Ampoon",href:"https://www.facebook.com/profile.php?id=61582378152401",icon:r.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})})},{label:"Instagram",handle:"@dsaleiri",href:"https://www.instagram.com/dsaleiri/",icon:r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),r.jsx("circle",{cx:"12",cy:"12",r:"4"}),r.jsx("circle",{cx:"17.5",cy:"6.5",r:"1",fill:"currentColor",stroke:"none"})]})}];function p5(){const[M,A]=ct.useState(!1),H=()=>{navigator.clipboard.writeText("servicesjmseptember@gmail.com"),A(!0),setTimeout(()=>A(!1),2e3)};return r.jsxs("section",{id:"contact",style:{position:"relative",overflow:"hidden"},children:[r.jsx("style",{children:`
        @keyframes pulse-ring {
          0%   { transform: scale(0.95); opacity: 0.6; }
          70%  { transform: scale(1.08); opacity: 0; }
          100% { transform: scale(0.95); opacity: 0; }
        }
        @keyframes float-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .contact-section {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          max-width: 997px;
          margin: 0 auto;
          padding: 6rem 33px;
          gap: 5rem;
          align-items: center;
          animation: float-up 0.8s ease both;
        }

        @media (max-width: 740px) {
          .contact-section {
            grid-template-columns: 1fr;
            gap: 3.5rem;
            padding: 4rem 24px;
          }
          .contact-right {
            border-left: none !important;
            padding-left: 0 !important;
            border-top: 1px solid rgba(255,200,80,0.1);
            padding-top: 3rem !important;
          }
        }

        .contact-left {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .contact-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.42em;
          text-transform: uppercase;
          color: #ffc850;
          margin-bottom: 1.1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .contact-eyebrow::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: #ffc850;
          flex-shrink: 0;
        }

        .contact-headline {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3.8rem, 9vw, 6.5rem);
          line-height: 0.92;
          color: #fff;
          letter-spacing: 0.03em;
          margin: 0 0 1.75rem;
        }

        .contact-headline span {
          color: #ffc850;
          display: block;
        }

        .contact-subtext {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          color: rgba(255,255,255,0.4);
          line-height: 1.8;
          font-weight: 300;
          max-width: 360px;
          margin-bottom: 2.5rem;
        }

        .email-cta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 2.5rem;
        }

        .email-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
        }

        .email-value {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.78rem, 1.8vw, 0.95rem);
          color: rgba(255,255,255,0.75);
          font-weight: 400;
          word-break: break-all;
        }

        .copy-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.75rem;
          padding: 0.6rem 1.25rem;
          background: transparent;
          border: 1px solid rgba(255,200,80,0.3);
          border-radius: 2px;
          color: #ffc850;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.22s ease;
          width: fit-content;
        }

        .copy-btn:hover {
          background: rgba(255,200,80,0.08);
          border-color: #ffc850;
        }

        .copy-btn.copied {
          background: rgba(255,200,80,0.12);
          color: #fff;
          border-color: #ffc850;
        }

        .social-row {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.6rem 1.1rem;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 2px;
          text-decoration: none;
          color: rgba(255,255,255,0.5);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: all 0.22s ease;
          background: rgba(255,255,255,0.02);
        }

        .social-link:hover {
          color: #ffc850;
          border-color: rgba(255,200,80,0.4);
          background: rgba(255,200,80,0.05);
          transform: translateY(-2px);
        }

        .contact-right {
          border-left: 1px solid rgba(255,200,80,0.1);
          padding-left: 4rem;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .availability {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.7rem 1.1rem;
          border: 1px solid rgba(80,255,140,0.2);
          border-radius: 2px;
          background: rgba(80,255,140,0.04);
          width: fit-content;
        }

        .avail-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #50ff8c;
          position: relative;
          flex-shrink: 0;
        }

        .avail-dot::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 1px solid rgba(80,255,140,0.4);
          animation: pulse-ring 2s ease-out infinite;
        }

        .avail-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #50ff8c;
        }

        .info-stack {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .info-row {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          padding: 1.25rem 0;
          padding-left: 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          position: relative;
          transition: padding-left 0.25s ease;
        }

        .info-row::before {
          content: '';
          position: absolute;
          left: 0; top: 0;
          width: 2px;
          height: 0;
          background: #ffc850;
          transition: height 0.3s ease;
        }

        .info-row:hover { padding-left: 1rem; }
        .info-row:hover::before { height: 100%; }

        .info-key {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.58rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.22);
        }

        .info-val {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.92rem;
          color: rgba(255,255,255,0.7);
          font-weight: 300;
        }

        .deco-ring {
          position: absolute;
          top: 8%;
          right: -8%;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          border: 1px solid rgba(255,200,80,0.04);
          pointer-events: none;
          animation: spin-slow 30s linear infinite;
        }

        .deco-ring::before {
          content: '';
          position: absolute;
          top: 10%; left: -2px;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #ffc850;
          opacity: 0.5;
        }

        .deco-ring-2 {
          position: absolute;
          bottom: 10%;
          left: -6%;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          border: 1px solid rgba(255,200,80,0.03);
          pointer-events: none;
          animation: spin-slow 20s linear infinite reverse;
        }

        .phone-cta {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
          padding: 1.1rem 1.5rem;
          border: 1px solid rgba(255,200,80,0.15);
          border-radius: 2px;
          background: linear-gradient(135deg, rgba(255,200,80,0.06) 0%, transparent 100%);
          transition: all 0.25s ease;
          position: relative;
          overflow: hidden;
        }

        .phone-cta::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,200,80,0.1) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .phone-cta:hover {
          border-color: rgba(255,200,80,0.4);
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.4);
        }

        .phone-cta:hover::after { opacity: 1; }

        .phone-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(255,200,80,0.1);
          border: 1px solid rgba(255,200,80,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffc850;
          flex-shrink: 0;
          z-index: 1;
        }

        .phone-text {
          display: flex;
          flex-direction: column;
          z-index: 1;
        }

        .phone-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.58rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          margin-bottom: 0.2rem;
        }

        .phone-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.35rem;
          letter-spacing: 0.1em;
          color: #fff;
        }

        .contact-footer {
          max-width: 997px;
          margin: 0 auto;
          padding: 1.5rem 33px 3rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255,255,255,0.05);
          gap: 1rem;
          flex-wrap: wrap;
        }

        .footer-copy {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.18);
        }

        .footer-dots {
          display: flex;
          gap: 0.4rem;
        }

        .footer-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(255,200,80,0.3);
        }

        .footer-dot:first-child { background: #ffc850; }
      `}),r.jsx("div",{className:"deco-ring"}),r.jsx("div",{className:"deco-ring-2"}),r.jsx("div",{style:{position:"absolute",top:"30%",left:"40%",width:"500px",height:"300px",background:"radial-gradient(ellipse, rgba(255,200,80,0.055) 0%, transparent 65%)",pointerEvents:"none",transform:"translateX(-50%)"}}),r.jsxs("div",{className:"contact-section",children:[r.jsxs("div",{className:"contact-left",children:[r.jsx("p",{className:"contact-eyebrow",children:"Contact"}),r.jsxs("h2",{className:"contact-headline",children:["Say",r.jsx("br",{}),"Hello",r.jsx("br",{}),r.jsx("span",{children:"To Me."})]}),r.jsx("p",{className:"contact-subtext",children:"Open for freelance projects, collaborations, and creative work. Let's build something worth remembering."}),r.jsxs("div",{className:"email-cta",children:[r.jsx("span",{className:"email-label",children:"Email Address"}),r.jsx("span",{className:"email-value",children:"servicesjmseptember@gmail.com"}),r.jsx("button",{className:`copy-btn${M?" copied":""}`,onClick:H,children:M?r.jsxs(r.Fragment,{children:[r.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("polyline",{points:"20 6 9 17 4 12"})}),"Copied!"]}):r.jsxs(r.Fragment,{children:[r.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),r.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),"Copy Email"]})})]}),r.jsx("div",{className:"social-row",children:g5.map(u=>r.jsxs("a",{href:u.href,target:"_blank",rel:"noopener noreferrer",className:"social-link",children:[u.icon,u.handle]},u.label))})]}),r.jsxs("div",{className:"contact-right",children:[r.jsxs("div",{className:"availability",children:[r.jsx("div",{className:"avail-dot"}),r.jsx("span",{className:"avail-text",children:"Available for Work"})]}),r.jsx("div",{className:"info-stack",children:[{key:"Based in",val:"Philippines"},{key:"Timezone",val:"PHT · UTC +8"},{key:"Response",val:"Within 24 hours"},{key:"Specialties",val:"Web Dev · UI Design · Graphic Art"}].map(u=>r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-key",children:u.key}),r.jsx("span",{className:"info-val",children:u.val})]},u.key))}),r.jsxs("a",{href:"tel:+639352541057",className:"phone-cta",children:[r.jsx("div",{className:"phone-icon-wrap",children:r.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.3 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"})})}),r.jsxs("div",{className:"phone-text",children:[r.jsx("span",{className:"phone-sub",children:"Call me directly"}),r.jsx("span",{className:"phone-num",children:"+63 935 254 1057"})]}),r.jsx("svg",{style:{marginLeft:"auto",color:"rgba(255,200,80,0.4)",zIndex:1},width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})]}),r.jsxs("div",{className:"contact-footer",children:[r.jsxs("span",{className:"footer-copy",children:["© ",new Date().getFullYear()," Marlon Ampoon · All Rights Reserved"]}),r.jsxs("div",{className:"footer-dots",children:[r.jsx("div",{className:"footer-dot"}),r.jsx("div",{className:"footer-dot"}),r.jsx("div",{className:"footer-dot"})]})]})]})}function h5(){return r.jsxs(r.Fragment,{children:[r.jsx(v2,{}),r.jsx(i5,{}),r.jsx(s5,{}),r.jsx(u5,{}),r.jsx(m5,{}),r.jsx(p5,{})]})}const b5=[{label:"Home",target:"home"},{label:"About",target:"about"},{label:"Graphics",target:"graphics"},{label:"Dev",target:"dev"},{label:"Experience",target:"experience"},{label:"Tools",target:"tools"},{label:"Contact",target:"contact"}],v5=[{label:"Facebook",href:"https://www.facebook.com/profile.php?id=61582378152401",icon:r.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})})},{label:"Instagram",href:"https://www.instagram.com/dsaleiri/",icon:r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),r.jsx("circle",{cx:"12",cy:"12",r:"4"}),r.jsx("circle",{cx:"17.5",cy:"6.5",r:"1",fill:"currentColor",stroke:"none"})]})},{label:"Email",href:"mailto:servicesjmseptember@gmail.com",icon:r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),r.jsx("path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"})]})},{label:"Phone",href:"tel:+639352541057",icon:r.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.3 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"})})}];function x5(){const M=A=>document.getElementById(A)?.scrollIntoView({behavior:"smooth"});return r.jsxs("footer",{style:{position:"relative",overflow:"hidden"},children:[r.jsx("style",{children:`
        /* ── Top glow line ── */
        .footer-glow-line {
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255,200,80,0.35) 30%,
            rgba(255,200,80,0.6) 50%,
            rgba(255,200,80,0.35) 70%,
            transparent 100%
          );
        }

        /* ── Main footer body ── */
        .footer-body {
          max-width: 1300px;
          margin: 0 auto;
          padding: 3.5rem 33px 2rem;
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        @media (max-width: 760px) {
          .footer-body {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
          .footer-brand { grid-column: 1 / -1; }
        }

        @media (max-width: 480px) {
          .footer-body {
            grid-template-columns: 1fr;
          }
        }

        /* ── Brand column ── */
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-logo-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.2rem;
          letter-spacing: 0.08em;
          color: #fff;
          line-height: 1;
        }

        .footer-logo-name span {
          color: #ffc850;
        }

        .footer-tagline {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
        }

        .footer-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.35);
          line-height: 1.8;
          font-weight: 300;
          max-width: 260px;
          margin-top: 0.25rem;
        }

        /* Social icons row */
        .footer-socials {
          display: flex;
          gap: 0.6rem;
          margin-top: 0.5rem;
          flex-wrap: wrap;
        }

        .footer-social-btn {
          width: 36px;
          height: 36px;
          border-radius: 2px;
          border: 1px solid rgba(255,200,80,0.15);
          background: rgba(255,255,255,0.02);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.35);
          text-decoration: none;
          transition: all 0.22s ease;
          flex-shrink: 0;
        }

        .footer-social-btn:hover {
          border-color: #ffc850;
          color: #ffc850;
          background: rgba(255,200,80,0.07);
          transform: translateY(-2px);
        }

        /* ── Nav column ── */
        .footer-col-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: #ffc850;
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .footer-col-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255,200,80,0.15);
        }

        .footer-nav-list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-nav-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 300;
          color: rgba(255,255,255,0.4);
          text-align: left;
          padding: 0;
          letter-spacing: 0.05em;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .footer-nav-btn::before {
          content: '';
          display: block;
          width: 0;
          height: 1px;
          background: #ffc850;
          transition: width 0.2s ease;
          flex-shrink: 0;
        }

        .footer-nav-btn:hover {
          color: #ffc850;
          transform: translateX(4px);
        }

        .footer-nav-btn:hover::before {
          width: 12px;
        }

        /* ── Contact column ── */
        .footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-contact-item {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .footer-contact-key {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.55rem;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
        }

        .footer-contact-val {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.5);
          font-weight: 300;
          text-decoration: none;
          transition: color 0.2s;
          word-break: break-all;
        }

        a.footer-contact-val:hover {
          color: #ffc850;
        }

        /* ── Bottom bar ── */
        .footer-bottom {
          max-width: 997px;
          margin: 0 auto;
          padding: 1.25rem 33px 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255,255,255,0.05);
          gap: 1rem;
          flex-wrap: wrap;
        }

        .footer-copy {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.15);
        }

        .footer-made {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.12);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .footer-made span {
          color: #ffc850;
          font-size: 0.75rem;
        }

        /* ── Decorative bg glow ── */
        .footer-bg-glow {
          position: absolute;
          bottom: 0; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 200px;
          background: radial-gradient(ellipse at bottom, rgba(255,200,80,0.045) 0%, transparent 70%);
          pointer-events: none;
        }
      `}),r.jsx("div",{className:"footer-bg-glow"}),r.jsx("div",{className:"footer-glow-line"}),r.jsxs("div",{className:"footer-body",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"footer-logo-name",children:["Marlon ",r.jsx("span",{children:"Ampoon"})]}),r.jsx("div",{className:"footer-tagline",children:"Web Dev · Graphic Artist · UI Designer"})]}),r.jsx("p",{className:"footer-desc",children:"Crafting digital experiences where clean code meets striking visual design."}),r.jsx("div",{className:"footer-socials",children:v5.map(A=>r.jsx("a",{href:A.href,target:A.href.startsWith("http")?"_blank":void 0,rel:A.href.startsWith("http")?"noopener noreferrer":void 0,className:"footer-social-btn","aria-label":A.label,title:A.label,children:A.icon},A.label))})]}),r.jsxs("div",{children:[r.jsx("p",{className:"footer-col-title",children:"Navigation"}),r.jsx("ul",{className:"footer-nav-list",children:b5.map(A=>r.jsx("li",{children:r.jsx("button",{className:"footer-nav-btn",onClick:()=>M(A.target),children:A.label})},A.target))})]}),r.jsxs("div",{children:[r.jsx("p",{className:"footer-col-title",children:"Contact"}),r.jsxs("ul",{className:"footer-contact-list",children:[r.jsxs("li",{className:"footer-contact-item",children:[r.jsx("span",{className:"footer-contact-key",children:"Email"}),r.jsx("a",{href:"mailto:servicesjmseptember@gmail.com",className:"footer-contact-val",children:"servicesjmseptember@gmail.com"})]}),r.jsxs("li",{className:"footer-contact-item",children:[r.jsx("span",{className:"footer-contact-key",children:"Phone"}),r.jsx("a",{href:"tel:+639352541057",className:"footer-contact-val",children:"+63 935 254 1057"})]}),r.jsxs("li",{className:"footer-contact-item",children:[r.jsx("span",{className:"footer-contact-key",children:"Facebook"}),r.jsx("a",{href:"https://www.facebook.com/profile.php?id=61582378152401",target:"_blank",rel:"noopener noreferrer",className:"footer-contact-val",children:"Marlon Ampoon"})]}),r.jsxs("li",{className:"footer-contact-item",children:[r.jsx("span",{className:"footer-contact-key",children:"Instagram"}),r.jsx("a",{href:"https://www.instagram.com/dsaleiri/",target:"_blank",rel:"noopener noreferrer",className:"footer-contact-val",children:"@dsaleiri"})]})]})]})]}),r.jsxs("div",{className:"footer-bottom",children:[r.jsxs("span",{className:"footer-copy",children:["© ",new Date().getFullYear()," Marlon Ampoon · All Rights Reserved"]}),r.jsxs("span",{className:"footer-made",children:["Made with ",r.jsx("span",{children:"♥"})," in the Philippines"]})]})]})}function y5(){const M=A=>document.getElementById(A)?.scrollIntoView({behavior:"smooth"});return r.jsxs("section",{id:"home",style:{minHeight:"86vh",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",maxWidth:"997px",margin:"0 auto",width:"100%",position:"relative",padding:"33px 24px"},children:[r.jsx("div",{style:{position:"absolute",top:"20%",left:"-10%",width:"500px",height:"500px",background:"radial-gradient(circle, rgba(255,200,80,0.07) 0%, transparent 70%)",pointerEvents:"none"}}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"clamp(2rem, 6vw, 5rem)",flexWrap:"wrap",width:"100%"},children:[r.jsxs("div",{style:{flex:"1 1 280px",zIndex:1,minWidth:0},children:[r.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"0.72rem",letterSpacing:"0.4em",textTransform:"uppercase",color:"#ffc850",marginBottom:"1rem"},children:"Hello, I'm"}),r.jsxs("h1",{style:{fontFamily:"'Bebas Neue', sans-serif",fontSize:"clamp(3rem, 10vw, 8.5rem)",letterSpacing:"0.04em",lineHeight:.93,color:"#fff",margin:"0 0 1.25rem"},children:["Marlon",r.jsx("br",{}),r.jsx("span",{style:{color:"#ffc850"},children:"Ampoon"})]}),r.jsx("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap",marginBottom:"1.5rem"},children:["Web Developer","Graphic Artist","UI Designer"].map(A=>r.jsx("span",{style:{padding:"0.3rem 0.85rem",border:"1px solid rgba(255,200,80,0.3)",borderRadius:"2px",fontFamily:"'DM Sans', sans-serif",fontSize:"0.65rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"#ffc850"},children:A},A))}),r.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"clamp(0.85rem, 2vw, 1.1rem)",color:"rgba(255,255,255,0.5)",maxWidth:"440px",lineHeight:1.75,marginBottom:"2.5rem",fontWeight:300},children:"Crafting digital experiences where clean, purposeful code meets striking visual design. From pixel-perfect UIs to bold graphic work — I build things that look great and work even better."}),r.jsxs("div",{style:{display:"flex",gap:"0.85rem",flexWrap:"wrap"},children:[r.jsx("button",{onClick:()=>M("graphics"),style:{padding:"0.75rem 2rem",background:"#ffc850",color:"#08080c",border:"none",borderRadius:"2px",fontFamily:"'DM Sans', sans-serif",fontWeight:700,fontSize:"0.75rem",letterSpacing:"0.15em",textTransform:"uppercase",cursor:"pointer",transition:"all 0.2s"},onMouseEnter:A=>A.currentTarget.style.background="#fff",onMouseLeave:A=>A.currentTarget.style.background="#ffc850",children:"View My Work"}),r.jsx("button",{onClick:()=>M("contact"),style:{padding:"0.75rem 2rem",background:"transparent",color:"#fff",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"2px",fontFamily:"'DM Sans', sans-serif",fontWeight:400,fontSize:"0.75rem",letterSpacing:"0.15em",textTransform:"uppercase",cursor:"pointer",transition:"border-color 0.2s"},onMouseEnter:A=>A.currentTarget.style.borderColor="#ffc850",onMouseLeave:A=>A.currentTarget.style.borderColor="rgba(255,255,255,0.2)",children:"Get In Touch"})]})]}),r.jsx("div",{style:{flex:"0 0 auto",zIndex:1,display:"flex",alignItems:"center",justifyContent:"center",width:"100%",maxWidth:"clamp(140px, 26vw, 320px)"},children:r.jsx("div",{style:{width:"clamp(140px, 26vw, 320px)",height:"clamp(140px, 26vw, 320px)",borderRadius:"50%",padding:"4px",background:"linear-gradient(135deg, #ffc850 0%, #ff8c00 50%, #08080c 100%)",boxShadow:"0 0 80px rgba(255,200,80,0.18)"},children:r.jsx("div",{style:{width:"100%",height:"100%",borderRadius:"50%",overflow:"hidden",background:"#1a1a22"},children:r.jsx("img",{src:po,alt:"Marlon Ampoon",style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top center"}})})})})]}),r.jsxs("div",{style:{position:"absolute",bottom:"2.5rem",left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"0.4rem",opacity:.4},children:[r.jsx("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"0.6rem",letterSpacing:"0.3em",textTransform:"uppercase",color:"#fff"},children:"Scroll"}),r.jsx("div",{style:{width:"1px",height:"40px",background:"linear-gradient(to bottom, #ffc850, transparent)"}})]})]})}function S5(){return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        body {
          background: #08080c;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          overflow-x: hidden;
        }

        body::before {
          content: '';
          position: fixed; inset: 0;
          background-image:
            linear-gradient(rgba(255,200,80,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,200,80,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 0;
        }



        main {
  padding-top: 72px;
  width: 100vw;          /* ← change from 100vw to 100% */
  overflow-x: hidden;   /* ← add this as a safety net */
}

        /* ── Mobile hero layout fix ── */
        @media (max-width: 600px) {
          #home > div:first-of-type {
            flex-direction: column-reverse !important;
            align-items: center !important;
          }
          #home > div:first-of-type > div:last-child {
            max-width: 160px !important;
            width: 160px !important;
          }
          #home > div:first-of-type > div:first-child {
            flex: 1 1 100% !important;
            width: 100%;
          }
        }
      `}),r.jsx(b2,{}),r.jsxs("main",{children:[r.jsx(y5,{}),r.jsx(h5,{})]}),r.jsx(x5,{})]})}h2.createRoot(document.getElementById("root")).render(r.jsx(ct.StrictMode,{children:r.jsx(S5,{})}));
