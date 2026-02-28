(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const w of document.querySelectorAll('link[rel="modulepreload"]'))s(w);new MutationObserver(w=>{for(const Y of w)if(Y.type==="childList")for(const ae of Y.addedNodes)ae.tagName==="LINK"&&ae.rel==="modulepreload"&&s(ae)}).observe(document,{childList:!0,subtree:!0});function H(w){const Y={};return w.integrity&&(Y.integrity=w.integrity),w.referrerPolicy&&(Y.referrerPolicy=w.referrerPolicy),w.crossOrigin==="use-credentials"?Y.credentials="include":w.crossOrigin==="anonymous"?Y.credentials="omit":Y.credentials="same-origin",Y}function s(w){if(w.ep)return;w.ep=!0;const Y=H(w);fetch(w.href,Y)}})();var ur={exports:{}},zn={};var yf;function ed(){if(yf)return zn;yf=1;var j=Symbol.for("react.transitional.element"),A=Symbol.for("react.fragment");function H(s,w,Y){var ae=null;if(Y!==void 0&&(ae=""+Y),w.key!==void 0&&(ae=""+w.key),"key"in w){Y={};for(var C in w)C!=="key"&&(Y[C]=w[C])}else Y=w;return w=Y.ref,{$$typeof:j,type:s,key:ae,ref:w!==void 0?w:null,props:Y}}return zn.Fragment=A,zn.jsx=H,zn.jsxs=H,zn}var xf;function td(){return xf||(xf=1,ur.exports=ed()),ur.exports}var u=td(),rr={exports:{}},L={};var Sf;function ad(){if(Sf)return L;Sf=1;var j=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),Y=Symbol.for("react.consumer"),ae=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),M=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),me=Symbol.iterator;function Je(d){return d===null||typeof d!="object"?null:(d=me&&d[me]||d["@@iterator"],typeof d=="function"?d:null)}var Re={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ue=Object.assign,Dt={};function We(d,z,E){this.props=d,this.context=z,this.refs=Dt,this.updater=E||Re}We.prototype.isReactComponent={},We.prototype.setState=function(d,z){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,z,"setState")},We.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function Wt(){}Wt.prototype=We.prototype;function Oe(d,z,E){this.props=d,this.context=z,this.refs=Dt,this.updater=E||Re}var ct=Oe.prototype=new Wt;ct.constructor=Oe,Ue(ct,We.prototype),ct.isPureReactComponent=!0;var zt=Array.isArray;function qe(){}var W={H:null,A:null,T:null,S:null},Ye=Object.prototype.hasOwnProperty;function jt(d,z,E){var _=E.ref;return{$$typeof:j,type:d,key:z,ref:_!==void 0?_:null,props:E}}function Ga(d,z){return jt(d.type,z,d.props)}function Mt(d){return typeof d=="object"&&d!==null&&d.$$typeof===j}function Le(d){var z={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(E){return z[E]})}var Sa=/\/+/g;function wt(d,z){return typeof d=="object"&&d!==null&&d.key!=null?Le(""+d.key):z.toString(36)}function bt(d){switch(d.status){case"fulfilled":return d.value;case"rejected":throw d.reason;default:switch(typeof d.status=="string"?d.then(qe,qe):(d.status="pending",d.then(function(z){d.status==="pending"&&(d.status="fulfilled",d.value=z)},function(z){d.status==="pending"&&(d.status="rejected",d.reason=z)})),d.status){case"fulfilled":return d.value;case"rejected":throw d.reason}}throw d}function y(d,z,E,_,k){var Q=typeof d;(Q==="undefined"||Q==="boolean")&&(d=null);var te=!1;if(d===null)te=!0;else switch(Q){case"bigint":case"string":case"number":te=!0;break;case"object":switch(d.$$typeof){case j:case A:te=!0;break;case ee:return te=d._init,y(te(d._payload),z,E,_,k)}}if(te)return k=k(d),te=_===""?"."+wt(d,0):_,zt(k)?(E="",te!=null&&(E=te.replace(Sa,"$&/")+"/"),y(k,z,E,"",function(Tl){return Tl})):k!=null&&(Mt(k)&&(k=Ga(k,E+(k.key==null||d&&d.key===k.key?"":(""+k.key).replace(Sa,"$&/")+"/")+te)),z.push(k)),1;te=0;var He=_===""?".":_+":";if(zt(d))for(var be=0;be<d.length;be++)_=d[be],Q=He+wt(_,be),te+=y(_,z,E,Q,k);else if(be=Je(d),typeof be=="function")for(d=be.call(d),be=0;!(_=d.next()).done;)_=_.value,Q=He+wt(_,be++),te+=y(_,z,E,Q,k);else if(Q==="object"){if(typeof d.then=="function")return y(bt(d),z,E,_,k);throw z=String(d),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return te}function N(d,z,E){if(d==null)return d;var _=[],k=0;return y(d,_,"","",function(Q){return z.call(E,Q,k++)}),_}function q(d){if(d._status===-1){var z=d._result;z=z(),z.then(function(E){(d._status===0||d._status===-1)&&(d._status=1,d._result=E)},function(E){(d._status===0||d._status===-1)&&(d._status=2,d._result=E)}),d._status===-1&&(d._status=0,d._result=z)}if(d._status===1)return d._result.default;throw d._result}var ie=typeof reportError=="function"?reportError:function(d){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof d=="object"&&d!==null&&typeof d.message=="string"?String(d.message):String(d),error:d});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",d);return}console.error(d)},oe={map:N,forEach:function(d,z,E){N(d,function(){z.apply(this,arguments)},E)},count:function(d){var z=0;return N(d,function(){z++}),z},toArray:function(d){return N(d,function(z){return z})||[]},only:function(d){if(!Mt(d))throw Error("React.Children.only expected to receive a single React element child.");return d}};return L.Activity=R,L.Children=oe,L.Component=We,L.Fragment=H,L.Profiler=w,L.PureComponent=Oe,L.StrictMode=s,L.Suspense=T,L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,L.__COMPILER_RUNTIME={__proto__:null,c:function(d){return W.H.useMemoCache(d)}},L.cache=function(d){return function(){return d.apply(null,arguments)}},L.cacheSignal=function(){return null},L.cloneElement=function(d,z,E){if(d==null)throw Error("The argument must be a React element, but you passed "+d+".");var _=Ue({},d.props),k=d.key;if(z!=null)for(Q in z.key!==void 0&&(k=""+z.key),z)!Ye.call(z,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&z.ref===void 0||(_[Q]=z[Q]);var Q=arguments.length-2;if(Q===1)_.children=E;else if(1<Q){for(var te=Array(Q),He=0;He<Q;He++)te[He]=arguments[He+2];_.children=te}return jt(d.type,k,_)},L.createContext=function(d){return d={$$typeof:ae,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null},d.Provider=d,d.Consumer={$$typeof:Y,_context:d},d},L.createElement=function(d,z,E){var _,k={},Q=null;if(z!=null)for(_ in z.key!==void 0&&(Q=""+z.key),z)Ye.call(z,_)&&_!=="key"&&_!=="__self"&&_!=="__source"&&(k[_]=z[_]);var te=arguments.length-2;if(te===1)k.children=E;else if(1<te){for(var He=Array(te),be=0;be<te;be++)He[be]=arguments[be+2];k.children=He}if(d&&d.defaultProps)for(_ in te=d.defaultProps,te)k[_]===void 0&&(k[_]=te[_]);return jt(d,Q,k)},L.createRef=function(){return{current:null}},L.forwardRef=function(d){return{$$typeof:C,render:d}},L.isValidElement=Mt,L.lazy=function(d){return{$$typeof:ee,_payload:{_status:-1,_result:d},_init:q}},L.memo=function(d,z){return{$$typeof:M,type:d,compare:z===void 0?null:z}},L.startTransition=function(d){var z=W.T,E={};W.T=E;try{var _=d(),k=W.S;k!==null&&k(E,_),typeof _=="object"&&_!==null&&typeof _.then=="function"&&_.then(qe,ie)}catch(Q){ie(Q)}finally{z!==null&&E.types!==null&&(z.types=E.types),W.T=z}},L.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},L.use=function(d){return W.H.use(d)},L.useActionState=function(d,z,E){return W.H.useActionState(d,z,E)},L.useCallback=function(d,z){return W.H.useCallback(d,z)},L.useContext=function(d){return W.H.useContext(d)},L.useDebugValue=function(){},L.useDeferredValue=function(d,z){return W.H.useDeferredValue(d,z)},L.useEffect=function(d,z){return W.H.useEffect(d,z)},L.useEffectEvent=function(d){return W.H.useEffectEvent(d)},L.useId=function(){return W.H.useId()},L.useImperativeHandle=function(d,z,E){return W.H.useImperativeHandle(d,z,E)},L.useInsertionEffect=function(d,z){return W.H.useInsertionEffect(d,z)},L.useLayoutEffect=function(d,z){return W.H.useLayoutEffect(d,z)},L.useMemo=function(d,z){return W.H.useMemo(d,z)},L.useOptimistic=function(d,z){return W.H.useOptimistic(d,z)},L.useReducer=function(d,z,E){return W.H.useReducer(d,z,E)},L.useRef=function(d){return W.H.useRef(d)},L.useState=function(d){return W.H.useState(d)},L.useSyncExternalStore=function(d,z,E){return W.H.useSyncExternalStore(d,z,E)},L.useTransition=function(){return W.H.useTransition()},L.version="19.2.4",L}var zf;function pr(){return zf||(zf=1,rr.exports=ad()),rr.exports}var St=pr(),or={exports:{}},jn={},sr={exports:{}},fr={};var jf;function ld(){return jf||(jf=1,(function(j){function A(y,N){var q=y.length;y.push(N);e:for(;0<q;){var ie=q-1>>>1,oe=y[ie];if(0<w(oe,N))y[ie]=N,y[q]=oe,q=ie;else break e}}function H(y){return y.length===0?null:y[0]}function s(y){if(y.length===0)return null;var N=y[0],q=y.pop();if(q!==N){y[0]=q;e:for(var ie=0,oe=y.length,d=oe>>>1;ie<d;){var z=2*(ie+1)-1,E=y[z],_=z+1,k=y[_];if(0>w(E,q))_<oe&&0>w(k,E)?(y[ie]=k,y[_]=q,ie=_):(y[ie]=E,y[z]=q,ie=z);else if(_<oe&&0>w(k,q))y[ie]=k,y[_]=q,ie=_;else break e}}return N}function w(y,N){var q=y.sortIndex-N.sortIndex;return q!==0?q:y.id-N.id}if(j.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var Y=performance;j.unstable_now=function(){return Y.now()}}else{var ae=Date,C=ae.now();j.unstable_now=function(){return ae.now()-C}}var T=[],M=[],ee=1,R=null,me=3,Je=!1,Re=!1,Ue=!1,Dt=!1,We=typeof setTimeout=="function"?setTimeout:null,Wt=typeof clearTimeout=="function"?clearTimeout:null,Oe=typeof setImmediate<"u"?setImmediate:null;function ct(y){for(var N=H(M);N!==null;){if(N.callback===null)s(M);else if(N.startTime<=y)s(M),N.sortIndex=N.expirationTime,A(T,N);else break;N=H(M)}}function zt(y){if(Ue=!1,ct(y),!Re)if(H(T)!==null)Re=!0,qe||(qe=!0,Le());else{var N=H(M);N!==null&&bt(zt,N.startTime-y)}}var qe=!1,W=-1,Ye=5,jt=-1;function Ga(){return Dt?!0:!(j.unstable_now()-jt<Ye)}function Mt(){if(Dt=!1,qe){var y=j.unstable_now();jt=y;var N=!0;try{e:{Re=!1,Ue&&(Ue=!1,Wt(W),W=-1),Je=!0;var q=me;try{t:{for(ct(y),R=H(T);R!==null&&!(R.expirationTime>y&&Ga());){var ie=R.callback;if(typeof ie=="function"){R.callback=null,me=R.priorityLevel;var oe=ie(R.expirationTime<=y);if(y=j.unstable_now(),typeof oe=="function"){R.callback=oe,ct(y),N=!0;break t}R===H(T)&&s(T),ct(y)}else s(T);R=H(T)}if(R!==null)N=!0;else{var d=H(M);d!==null&&bt(zt,d.startTime-y),N=!1}}break e}finally{R=null,me=q,Je=!1}N=void 0}}finally{N?Le():qe=!1}}}var Le;if(typeof Oe=="function")Le=function(){Oe(Mt)};else if(typeof MessageChannel<"u"){var Sa=new MessageChannel,wt=Sa.port2;Sa.port1.onmessage=Mt,Le=function(){wt.postMessage(null)}}else Le=function(){We(Mt,0)};function bt(y,N){W=We(function(){y(j.unstable_now())},N)}j.unstable_IdlePriority=5,j.unstable_ImmediatePriority=1,j.unstable_LowPriority=4,j.unstable_NormalPriority=3,j.unstable_Profiling=null,j.unstable_UserBlockingPriority=2,j.unstable_cancelCallback=function(y){y.callback=null},j.unstable_forceFrameRate=function(y){0>y||125<y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ye=0<y?Math.floor(1e3/y):5},j.unstable_getCurrentPriorityLevel=function(){return me},j.unstable_next=function(y){switch(me){case 1:case 2:case 3:var N=3;break;default:N=me}var q=me;me=N;try{return y()}finally{me=q}},j.unstable_requestPaint=function(){Dt=!0},j.unstable_runWithPriority=function(y,N){switch(y){case 1:case 2:case 3:case 4:case 5:break;default:y=3}var q=me;me=y;try{return N()}finally{me=q}},j.unstable_scheduleCallback=function(y,N,q){var ie=j.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ie+q:ie):q=ie,y){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=q+oe,y={id:ee++,callback:N,priorityLevel:y,startTime:q,expirationTime:oe,sortIndex:-1},q>ie?(y.sortIndex=q,A(M,y),H(T)===null&&y===H(M)&&(Ue?(Wt(W),W=-1):Ue=!0,bt(zt,q-ie))):(y.sortIndex=oe,A(T,y),Re||Je||(Re=!0,qe||(qe=!0,Le()))),y},j.unstable_shouldYield=Ga,j.unstable_wrapCallback=function(y){var N=me;return function(){var q=me;me=N;try{return y.apply(this,arguments)}finally{me=q}}}})(fr)),fr}var Mf;function nd(){return Mf||(Mf=1,sr.exports=ld()),sr.exports}var dr={exports:{}},Ce={};var Af;function id(){if(Af)return Ce;Af=1;var j=pr();function A(T){var M="https://react.dev/errors/"+T;if(1<arguments.length){M+="?args[]="+encodeURIComponent(arguments[1]);for(var ee=2;ee<arguments.length;ee++)M+="&args[]="+encodeURIComponent(arguments[ee])}return"Minified React error #"+T+"; visit "+M+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function H(){}var s={d:{f:H,r:function(){throw Error(A(522))},D:H,C:H,L:H,m:H,X:H,S:H,M:H},p:0,findDOMNode:null},w=Symbol.for("react.portal");function Y(T,M,ee){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:w,key:R==null?null:""+R,children:T,containerInfo:M,implementation:ee}}var ae=j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function C(T,M){if(T==="font")return"";if(typeof M=="string")return M==="use-credentials"?M:""}return Ce.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ce.createPortal=function(T,M){var ee=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!M||M.nodeType!==1&&M.nodeType!==9&&M.nodeType!==11)throw Error(A(299));return Y(T,M,null,ee)},Ce.flushSync=function(T){var M=ae.T,ee=s.p;try{if(ae.T=null,s.p=2,T)return T()}finally{ae.T=M,s.p=ee,s.d.f()}},Ce.preconnect=function(T,M){typeof T=="string"&&(M?(M=M.crossOrigin,M=typeof M=="string"?M==="use-credentials"?M:"":void 0):M=null,s.d.C(T,M))},Ce.prefetchDNS=function(T){typeof T=="string"&&s.d.D(T)},Ce.preinit=function(T,M){if(typeof T=="string"&&M&&typeof M.as=="string"){var ee=M.as,R=C(ee,M.crossOrigin),me=typeof M.integrity=="string"?M.integrity:void 0,Je=typeof M.fetchPriority=="string"?M.fetchPriority:void 0;ee==="style"?s.d.S(T,typeof M.precedence=="string"?M.precedence:void 0,{crossOrigin:R,integrity:me,fetchPriority:Je}):ee==="script"&&s.d.X(T,{crossOrigin:R,integrity:me,fetchPriority:Je,nonce:typeof M.nonce=="string"?M.nonce:void 0})}},Ce.preinitModule=function(T,M){if(typeof T=="string")if(typeof M=="object"&&M!==null){if(M.as==null||M.as==="script"){var ee=C(M.as,M.crossOrigin);s.d.M(T,{crossOrigin:ee,integrity:typeof M.integrity=="string"?M.integrity:void 0,nonce:typeof M.nonce=="string"?M.nonce:void 0})}}else M==null&&s.d.M(T)},Ce.preload=function(T,M){if(typeof T=="string"&&typeof M=="object"&&M!==null&&typeof M.as=="string"){var ee=M.as,R=C(ee,M.crossOrigin);s.d.L(T,ee,{crossOrigin:R,integrity:typeof M.integrity=="string"?M.integrity:void 0,nonce:typeof M.nonce=="string"?M.nonce:void 0,type:typeof M.type=="string"?M.type:void 0,fetchPriority:typeof M.fetchPriority=="string"?M.fetchPriority:void 0,referrerPolicy:typeof M.referrerPolicy=="string"?M.referrerPolicy:void 0,imageSrcSet:typeof M.imageSrcSet=="string"?M.imageSrcSet:void 0,imageSizes:typeof M.imageSizes=="string"?M.imageSizes:void 0,media:typeof M.media=="string"?M.media:void 0})}},Ce.preloadModule=function(T,M){if(typeof T=="string")if(M){var ee=C(M.as,M.crossOrigin);s.d.m(T,{as:typeof M.as=="string"&&M.as!=="script"?M.as:void 0,crossOrigin:ee,integrity:typeof M.integrity=="string"?M.integrity:void 0})}else s.d.m(T)},Ce.requestFormReset=function(T){s.d.r(T)},Ce.unstable_batchedUpdates=function(T,M){return T(M)},Ce.useFormState=function(T,M,ee){return ae.H.useFormState(T,M,ee)},Ce.useFormStatus=function(){return ae.H.useHostTransitionStatus()},Ce.version="19.2.4",Ce}var Nf;function cd(){if(Nf)return dr.exports;Nf=1;function j(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j)}catch(A){console.error(A)}}return j(),dr.exports=id(),dr.exports}var Ef;function ud(){if(Ef)return jn;Ef=1;var j=nd(),A=pr(),H=cd();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function w(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Y(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function ae(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function C(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function T(e){if(Y(e)!==e)throw Error(s(188))}function M(e){var t=e.alternate;if(!t){if(t=Y(e),t===null)throw Error(s(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return T(n),e;if(i===l)return T(n),t;i=i.sibling}throw Error(s(188))}if(a.return!==l.return)a=n,l=i;else{for(var c=!1,r=n.child;r;){if(r===a){c=!0,a=n,l=i;break}if(r===l){c=!0,l=n,a=i;break}r=r.sibling}if(!c){for(r=i.child;r;){if(r===a){c=!0,a=i,l=n;break}if(r===l){c=!0,l=i,a=n;break}r=r.sibling}if(!c)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:t}function ee(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=ee(e),t!==null)return t;e=e.sibling}return null}var R=Object.assign,me=Symbol.for("react.element"),Je=Symbol.for("react.transitional.element"),Re=Symbol.for("react.portal"),Ue=Symbol.for("react.fragment"),Dt=Symbol.for("react.strict_mode"),We=Symbol.for("react.profiler"),Wt=Symbol.for("react.consumer"),Oe=Symbol.for("react.context"),ct=Symbol.for("react.forward_ref"),zt=Symbol.for("react.suspense"),qe=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),jt=Symbol.for("react.activity"),Ga=Symbol.for("react.memo_cache_sentinel"),Mt=Symbol.iterator;function Le(e){return e===null||typeof e!="object"?null:(e=Mt&&e[Mt]||e["@@iterator"],typeof e=="function"?e:null)}var Sa=Symbol.for("react.client.reference");function wt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Sa?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ue:return"Fragment";case We:return"Profiler";case Dt:return"StrictMode";case zt:return"Suspense";case qe:return"SuspenseList";case jt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Re:return"Portal";case Oe:return e.displayName||"Context";case Wt:return(e._context.displayName||"Context")+".Consumer";case ct:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:wt(e.type)||"Memo";case Ye:t=e._payload,e=e._init;try{return wt(e(t))}catch{}}return null}var bt=Array.isArray,y=A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=H.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},ie=[],oe=-1;function d(e){return{current:e}}function z(e){0>oe||(e.current=ie[oe],ie[oe]=null,oe--)}function E(e,t){oe++,ie[oe]=e.current,e.current=t}var _=d(null),k=d(null),Q=d(null),te=d(null);function He(e,t){switch(E(Q,t),E(k,e),E(_,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?k0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=k0(t),e=G0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}z(_),E(_,e)}function be(){z(_),z(k),z(Q)}function Tl(e){e.memoizedState!==null&&E(te,e);var t=_.current,a=G0(t,e.type);t!==a&&(E(k,e),E(_,a))}function Mn(e){k.current===e&&(z(_),z(k)),te.current===e&&(z(te),vn._currentValue=q)}var Xi,hr;function za(e){if(Xi===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Xi=t&&t[1]||"",hr=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xi+e+hr}var Qi=!1;function Vi(e,t){if(!e||Qi)return"";Qi=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(b){var h=b}Reflect.construct(e,[],S)}else{try{S.call()}catch(b){h=b}e.call(S.prototype)}}else{try{throw Error()}catch(b){h=b}(S=e())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(b){if(b&&h&&typeof b.stack=="string")return[b.stack,h.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),c=i[0],r=i[1];if(c&&r){var o=c.split(`
`),p=r.split(`
`);for(n=l=0;l<o.length&&!o[l].includes("DetermineComponentFrameRoot");)l++;for(;n<p.length&&!p[n].includes("DetermineComponentFrameRoot");)n++;if(l===o.length||n===p.length)for(l=o.length-1,n=p.length-1;1<=l&&0<=n&&o[l]!==p[n];)n--;for(;1<=l&&0<=n;l--,n--)if(o[l]!==p[n]){if(l!==1||n!==1)do if(l--,n--,0>n||o[l]!==p[n]){var v=`
`+o[l].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),v}while(1<=l&&0<=n);break}}}finally{Qi=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?za(a):""}function _f(e,t){switch(e.tag){case 26:case 27:case 5:return za(e.type);case 16:return za("Lazy");case 13:return e.child!==t&&t!==null?za("Suspense Fallback"):za("Suspense");case 19:return za("SuspenseList");case 0:case 15:return Vi(e.type,!1);case 11:return Vi(e.type.render,!1);case 1:return Vi(e.type,!0);case 31:return za("Activity");default:return""}}function br(e){try{var t="",a=null;do t+=_f(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Zi=Object.prototype.hasOwnProperty,Ki=j.unstable_scheduleCallback,Ji=j.unstable_cancelCallback,Of=j.unstable_shouldYield,Cf=j.unstable_requestPaint,Fe=j.unstable_now,Uf=j.unstable_getCurrentPriorityLevel,vr=j.unstable_ImmediatePriority,yr=j.unstable_UserBlockingPriority,An=j.unstable_NormalPriority,Hf=j.unstable_LowPriority,xr=j.unstable_IdlePriority,Bf=j.log,Rf=j.unstable_setDisableYieldValue,Dl=null,$e=null;function Ft(e){if(typeof Bf=="function"&&Rf(e),$e&&typeof $e.setStrictMode=="function")try{$e.setStrictMode(Dl,e)}catch{}}var Ie=Math.clz32?Math.clz32:Lf,qf=Math.log,Yf=Math.LN2;function Lf(e){return e>>>=0,e===0?32:31-(qf(e)/Yf|0)|0}var Nn=256,En=262144,Tn=4194304;function ja(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var r=l&134217727;return r!==0?(l=r&~i,l!==0?n=ja(l):(c&=r,c!==0?n=ja(c):a||(a=r&~e,a!==0&&(n=ja(a))))):(r=l&~i,r!==0?n=ja(r):c!==0?n=ja(c):a||(a=l&~e,a!==0&&(n=ja(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function wl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function kf(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sr(){var e=Tn;return Tn<<=1,(Tn&62914560)===0&&(Tn=4194304),e}function Wi(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function _l(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Gf(e,t,a,l,n,i){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var r=e.entanglements,o=e.expirationTimes,p=e.hiddenUpdates;for(a=c&~a;0<a;){var v=31-Ie(a),S=1<<v;r[v]=0,o[v]=-1;var h=p[v];if(h!==null)for(p[v]=null,v=0;v<h.length;v++){var b=h[v];b!==null&&(b.lane&=-536870913)}a&=~S}l!==0&&zr(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(c&~t))}function zr(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Ie(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function jr(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-Ie(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function Mr(e,t){var a=t&-t;return a=(a&42)!==0?1:Fi(a),(a&(e.suspendedLanes|t))!==0?0:a}function Fi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $i(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ar(){var e=N.p;return e!==0?e:(e=window.event,e===void 0?32:df(e.type))}function Nr(e,t){var a=N.p;try{return N.p=e,t()}finally{N.p=a}}var $t=Math.random().toString(36).slice(2),Ee="__reactFiber$"+$t,ke="__reactProps$"+$t,Xa="__reactContainer$"+$t,Ii="__reactEvents$"+$t,Xf="__reactListeners$"+$t,Qf="__reactHandles$"+$t,Er="__reactResources$"+$t,Ol="__reactMarker$"+$t;function Pi(e){delete e[Ee],delete e[ke],delete e[Ii],delete e[Xf],delete e[Qf]}function Qa(e){var t=e[Ee];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Xa]||a[Ee]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=W0(e);e!==null;){if(a=e[Ee])return a;e=W0(e)}return t}e=a,a=e.parentNode}return null}function Va(e){if(e=e[Ee]||e[Xa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Cl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Za(e){var t=e[Er];return t||(t=e[Er]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ae(e){e[Ol]=!0}var Tr=new Set,Dr={};function Ma(e,t){Ka(e,t),Ka(e+"Capture",t)}function Ka(e,t){for(Dr[e]=t,e=0;e<t.length;e++)Tr.add(t[e])}var Vf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),wr={},_r={};function Zf(e){return Zi.call(_r,e)?!0:Zi.call(wr,e)?!1:Vf.test(e)?_r[e]=!0:(wr[e]=!0,!1)}function wn(e,t,a){if(Zf(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function _n(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function _t(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Or(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Kf(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(c){a=""+c,i.call(this,c)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ec(e){if(!e._valueTracker){var t=Or(e)?"checked":"value";e._valueTracker=Kf(e,t,""+e[t])}}function Cr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Or(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function On(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Jf=/[\n"\\]/g;function rt(e){return e.replace(Jf,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function tc(e,t,a,l,n,i,c,r){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ut(t)):e.value!==""+ut(t)&&(e.value=""+ut(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?ac(e,c,ut(t)):a!=null?ac(e,c,ut(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.name=""+ut(r):e.removeAttribute("name")}function Ur(e,t,a,l,n,i,c,r){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){ec(e);return}a=a!=null?""+ut(a):"",t=t!=null?""+ut(t):a,r||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=r?e.checked:!!l,e.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),ec(e)}function ac(e,t,a){t==="number"&&On(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ja(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+ut(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Hr(e,t,a){if(t!=null&&(t=""+ut(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+ut(a):""}function Br(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(s(92));if(bt(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=ut(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),ec(e)}function Wa(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Wf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rr(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Wf.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function qr(e,t,a){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Rr(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&Rr(e,i,t[i])}function lc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ff=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$f=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cn(e){return $f.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ot(){}var nc=null;function ic(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fa=null,$a=null;function Yr(e){var t=Va(e);if(t&&(e=t.stateNode)){var a=e[ke]||null;e:switch(e=t.stateNode,t.type){case"input":if(tc(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+rt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[ke]||null;if(!n)throw Error(s(90));tc(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Cr(l)}break e;case"textarea":Hr(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Ja(e,!!a.multiple,t,!1)}}}var cc=!1;function Lr(e,t,a){if(cc)return e(t,a);cc=!0;try{var l=e(t);return l}finally{if(cc=!1,(Fa!==null||$a!==null)&&(xi(),Fa&&(t=Fa,e=$a,$a=Fa=null,Yr(t),e)))for(t=0;t<e.length;t++)Yr(e[t])}}function Ul(e,t){var a=e.stateNode;if(a===null)return null;var l=a[ke]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,t,typeof a));return a}var Ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uc=!1;if(Ct)try{var Hl={};Object.defineProperty(Hl,"passive",{get:function(){uc=!0}}),window.addEventListener("test",Hl,Hl),window.removeEventListener("test",Hl,Hl)}catch{uc=!1}var It=null,rc=null,Un=null;function kr(){if(Un)return Un;var e,t=rc,a=t.length,l,n="value"in It?It.value:It.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var c=a-e;for(l=1;l<=c&&t[a-l]===n[i-l];l++);return Un=n.slice(e,1<l?1-l:void 0)}function Hn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bn(){return!0}function Gr(){return!1}function Ge(e){function t(a,l,n,i,c){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(a=e[r],this[r]=a?a(i):i[r]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Bn:Gr,this.isPropagationStopped=Gr,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){},isPersistent:Bn}),t}var Aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rn=Ge(Aa),Bl=R({},Aa,{view:0,detail:0}),If=Ge(Bl),oc,sc,Rl,qn=R({},Bl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rl&&(Rl&&e.type==="mousemove"?(oc=e.screenX-Rl.screenX,sc=e.screenY-Rl.screenY):sc=oc=0,Rl=e),oc)},movementY:function(e){return"movementY"in e?e.movementY:sc}}),Xr=Ge(qn),Pf=R({},qn,{dataTransfer:0}),e1=Ge(Pf),t1=R({},Bl,{relatedTarget:0}),fc=Ge(t1),a1=R({},Aa,{animationName:0,elapsedTime:0,pseudoElement:0}),l1=Ge(a1),n1=R({},Aa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),i1=Ge(n1),c1=R({},Aa,{data:0}),Qr=Ge(c1),u1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},r1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},o1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function s1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=o1[e])?!!t[e]:!1}function dc(){return s1}var f1=R({},Bl,{key:function(e){if(e.key){var t=u1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?r1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dc,charCode:function(e){return e.type==="keypress"?Hn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),d1=Ge(f1),m1=R({},qn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vr=Ge(m1),g1=R({},Bl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dc}),p1=Ge(g1),h1=R({},Aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),b1=Ge(h1),v1=R({},qn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),y1=Ge(v1),x1=R({},Aa,{newState:0,oldState:0}),S1=Ge(x1),z1=[9,13,27,32],mc=Ct&&"CompositionEvent"in window,ql=null;Ct&&"documentMode"in document&&(ql=document.documentMode);var j1=Ct&&"TextEvent"in window&&!ql,Zr=Ct&&(!mc||ql&&8<ql&&11>=ql),Kr=" ",Jr=!1;function Wr(e,t){switch(e){case"keyup":return z1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ia=!1;function M1(e,t){switch(e){case"compositionend":return Fr(t);case"keypress":return t.which!==32?null:(Jr=!0,Kr);case"textInput":return e=t.data,e===Kr&&Jr?null:e;default:return null}}function A1(e,t){if(Ia)return e==="compositionend"||!mc&&Wr(e,t)?(e=kr(),Un=rc=It=null,Ia=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zr&&t.locale!=="ko"?null:t.data;default:return null}}var N1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $r(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!N1[e.type]:t==="textarea"}function Ir(e,t,a,l){Fa?$a?$a.push(l):$a=[l]:Fa=l,t=Ei(t,"onChange"),0<t.length&&(a=new Rn("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Yl=null,Ll=null;function E1(e){H0(e,0)}function Yn(e){var t=Cl(e);if(Cr(t))return e}function Pr(e,t){if(e==="change")return t}var eo=!1;if(Ct){var gc;if(Ct){var pc="oninput"in document;if(!pc){var to=document.createElement("div");to.setAttribute("oninput","return;"),pc=typeof to.oninput=="function"}gc=pc}else gc=!1;eo=gc&&(!document.documentMode||9<document.documentMode)}function ao(){Yl&&(Yl.detachEvent("onpropertychange",lo),Ll=Yl=null)}function lo(e){if(e.propertyName==="value"&&Yn(Ll)){var t=[];Ir(t,Ll,e,ic(e)),Lr(E1,t)}}function T1(e,t,a){e==="focusin"?(ao(),Yl=t,Ll=a,Yl.attachEvent("onpropertychange",lo)):e==="focusout"&&ao()}function D1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yn(Ll)}function w1(e,t){if(e==="click")return Yn(t)}function _1(e,t){if(e==="input"||e==="change")return Yn(t)}function O1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pe=typeof Object.is=="function"?Object.is:O1;function kl(e,t){if(Pe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Zi.call(t,n)||!Pe(e[n],t[n]))return!1}return!0}function no(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function io(e,t){var a=no(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=no(a)}}function co(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?co(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function uo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=On(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=On(e.document)}return t}function hc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var C1=Ct&&"documentMode"in document&&11>=document.documentMode,Pa=null,bc=null,Gl=null,vc=!1;function ro(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;vc||Pa==null||Pa!==On(l)||(l=Pa,"selectionStart"in l&&hc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Gl&&kl(Gl,l)||(Gl=l,l=Ei(bc,"onSelect"),0<l.length&&(t=new Rn("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=Pa)))}function Na(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var el={animationend:Na("Animation","AnimationEnd"),animationiteration:Na("Animation","AnimationIteration"),animationstart:Na("Animation","AnimationStart"),transitionrun:Na("Transition","TransitionRun"),transitionstart:Na("Transition","TransitionStart"),transitioncancel:Na("Transition","TransitionCancel"),transitionend:Na("Transition","TransitionEnd")},yc={},oo={};Ct&&(oo=document.createElement("div").style,"AnimationEvent"in window||(delete el.animationend.animation,delete el.animationiteration.animation,delete el.animationstart.animation),"TransitionEvent"in window||delete el.transitionend.transition);function Ea(e){if(yc[e])return yc[e];if(!el[e])return e;var t=el[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in oo)return yc[e]=t[a];return e}var so=Ea("animationend"),fo=Ea("animationiteration"),mo=Ea("animationstart"),U1=Ea("transitionrun"),H1=Ea("transitionstart"),B1=Ea("transitioncancel"),go=Ea("transitionend"),po=new Map,xc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xc.push("scrollEnd");function vt(e,t){po.set(e,t),Ma(t,[e])}var Ln=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ot=[],tl=0,Sc=0;function kn(){for(var e=tl,t=Sc=tl=0;t<e;){var a=ot[t];ot[t++]=null;var l=ot[t];ot[t++]=null;var n=ot[t];ot[t++]=null;var i=ot[t];if(ot[t++]=null,l!==null&&n!==null){var c=l.pending;c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n}i!==0&&ho(a,n,i)}}function Gn(e,t,a,l){ot[tl++]=e,ot[tl++]=t,ot[tl++]=a,ot[tl++]=l,Sc|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function zc(e,t,a,l){return Gn(e,t,a,l),Xn(e)}function Ta(e,t){return Gn(e,null,null,t),Xn(e)}function ho(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-Ie(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function Xn(e){if(50<fn)throw fn=0,_u=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var al={};function R1(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,a,l){return new R1(e,t,a,l)}function jc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ut(e,t){var a=e.alternate;return a===null?(a=et(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function bo(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Qn(e,t,a,l,n,i){var c=0;if(l=e,typeof e=="function")jc(e)&&(c=1);else if(typeof e=="string")c=G2(e,a,_.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case jt:return e=et(31,a,t,n),e.elementType=jt,e.lanes=i,e;case Ue:return Da(a.children,n,i,t);case Dt:c=8,n|=24;break;case We:return e=et(12,a,t,n|2),e.elementType=We,e.lanes=i,e;case zt:return e=et(13,a,t,n),e.elementType=zt,e.lanes=i,e;case qe:return e=et(19,a,t,n),e.elementType=qe,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Oe:c=10;break e;case Wt:c=9;break e;case ct:c=11;break e;case W:c=14;break e;case Ye:c=16,l=null;break e}c=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return t=et(c,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Da(e,t,a,l){return e=et(7,e,l,t),e.lanes=a,e}function Mc(e,t,a){return e=et(6,e,null,t),e.lanes=a,e}function vo(e){var t=et(18,null,null,0);return t.stateNode=e,t}function Ac(e,t,a){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var yo=new WeakMap;function st(e,t){if(typeof e=="object"&&e!==null){var a=yo.get(e);return a!==void 0?a:(t={value:e,source:t,stack:br(t)},yo.set(e,t),t)}return{value:e,source:t,stack:br(t)}}var ll=[],nl=0,Vn=null,Xl=0,ft=[],dt=0,Pt=null,At=1,Nt="";function Ht(e,t){ll[nl++]=Xl,ll[nl++]=Vn,Vn=e,Xl=t}function xo(e,t,a){ft[dt++]=At,ft[dt++]=Nt,ft[dt++]=Pt,Pt=e;var l=At;e=Nt;var n=32-Ie(l)-1;l&=~(1<<n),a+=1;var i=32-Ie(t)+n;if(30<i){var c=n-n%5;i=(l&(1<<c)-1).toString(32),l>>=c,n-=c,At=1<<32-Ie(t)+n|a<<n|l,Nt=i+e}else At=1<<i|a<<n|l,Nt=e}function Nc(e){e.return!==null&&(Ht(e,1),xo(e,1,0))}function Ec(e){for(;e===Vn;)Vn=ll[--nl],ll[nl]=null,Xl=ll[--nl],ll[nl]=null;for(;e===Pt;)Pt=ft[--dt],ft[dt]=null,Nt=ft[--dt],ft[dt]=null,At=ft[--dt],ft[dt]=null}function So(e,t){ft[dt++]=At,ft[dt++]=Nt,ft[dt++]=Pt,At=t.id,Nt=t.overflow,Pt=e}var Te=null,fe=null,F=!1,ea=null,mt=!1,Tc=Error(s(519));function ta(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ql(st(t,e)),Tc}function zo(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ee]=e,t[ke]=l,a){case"dialog":Z("cancel",t),Z("close",t);break;case"iframe":case"object":case"embed":Z("load",t);break;case"video":case"audio":for(a=0;a<mn.length;a++)Z(mn[a],t);break;case"source":Z("error",t);break;case"img":case"image":case"link":Z("error",t),Z("load",t);break;case"details":Z("toggle",t);break;case"input":Z("invalid",t),Ur(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Z("invalid",t);break;case"textarea":Z("invalid",t),Br(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Y0(t.textContent,a)?(l.popover!=null&&(Z("beforetoggle",t),Z("toggle",t)),l.onScroll!=null&&Z("scroll",t),l.onScrollEnd!=null&&Z("scrollend",t),l.onClick!=null&&(t.onclick=Ot),t=!0):t=!1,t||ta(e,!0)}function jo(e){for(Te=e.return;Te;)switch(Te.tag){case 5:case 31:case 13:mt=!1;return;case 27:case 3:mt=!0;return;default:Te=Te.return}}function il(e){if(e!==Te)return!1;if(!F)return jo(e),F=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Zu(e.type,e.memoizedProps)),a=!a),a&&fe&&ta(e),jo(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));fe=J0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));fe=J0(e)}else t===27?(t=fe,pa(e.type)?(e=$u,$u=null,fe=e):fe=t):fe=Te?pt(e.stateNode.nextSibling):null;return!0}function wa(){fe=Te=null,F=!1}function Dc(){var e=ea;return e!==null&&(Ze===null?Ze=e:Ze.push.apply(Ze,e),ea=null),e}function Ql(e){ea===null?ea=[e]:ea.push(e)}var wc=d(null),_a=null,Bt=null;function aa(e,t,a){E(wc,t._currentValue),t._currentValue=a}function Rt(e){e._currentValue=wc.current,z(wc)}function _c(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Oc(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var c=n.child;i=i.firstContext;e:for(;i!==null;){var r=i;i=n;for(var o=0;o<t.length;o++)if(r.context===t[o]){i.lanes|=a,r=i.alternate,r!==null&&(r.lanes|=a),_c(i.return,a,e),l||(c=null);break e}i=r.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(s(341));c.lanes|=a,i=c.alternate,i!==null&&(i.lanes|=a),_c(c,a,e),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===e){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function cl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(s(387));if(c=c.memoizedProps,c!==null){var r=n.type;Pe(n.pendingProps.value,c.value)||(e!==null?e.push(r):e=[r])}}else if(n===te.current){if(c=n.alternate,c===null)throw Error(s(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(vn):e=[vn])}n=n.return}e!==null&&Oc(t,e,a,l),t.flags|=262144}function Zn(e){for(e=e.firstContext;e!==null;){if(!Pe(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Oa(e){_a=e,Bt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function De(e){return Mo(_a,e)}function Kn(e,t){return _a===null&&Oa(e),Mo(e,t)}function Mo(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Bt===null){if(e===null)throw Error(s(308));Bt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Bt=Bt.next=t;return a}var q1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Y1=j.unstable_scheduleCallback,L1=j.unstable_NormalPriority,xe={$$typeof:Oe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cc(){return{controller:new q1,data:new Map,refCount:0}}function Vl(e){e.refCount--,e.refCount===0&&Y1(L1,function(){e.controller.abort()})}var Zl=null,Uc=0,ul=0,rl=null;function k1(e,t){if(Zl===null){var a=Zl=[];Uc=0,ul=Ru(),rl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Uc++,t.then(Ao,Ao),t}function Ao(){if(--Uc===0&&Zl!==null){rl!==null&&(rl.status="fulfilled");var e=Zl;Zl=null,ul=0,rl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function G1(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var No=y.S;y.S=function(e,t){o0=Fe(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&k1(e,t),No!==null&&No(e,t)};var Ca=d(null);function Hc(){var e=Ca.current;return e!==null?e:se.pooledCache}function Jn(e,t){t===null?E(Ca,Ca.current):E(Ca,t.pool)}function Eo(){var e=Hc();return e===null?null:{parent:xe._currentValue,pool:e}}var ol=Error(s(460)),Bc=Error(s(474)),Wn=Error(s(542)),Fn={then:function(){}};function To(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Do(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Ot,Ot),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_o(e),e;default:if(typeof t.status=="string")t.then(Ot,Ot);else{if(e=se,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_o(e),e}throw Ha=t,ol}}function Ua(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ha=a,ol):a}}var Ha=null;function wo(){if(Ha===null)throw Error(s(459));var e=Ha;return Ha=null,e}function _o(e){if(e===ol||e===Wn)throw Error(s(483))}var sl=null,Kl=0;function $n(e){var t=Kl;return Kl+=1,sl===null&&(sl=[]),Do(sl,e,t)}function Jl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function In(e,t){throw t.$$typeof===me?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Oo(e){function t(m,f){if(e){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function a(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function l(m){for(var f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function n(m,f){return m=Ut(m,f),m.index=0,m.sibling=null,m}function i(m,f,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=67108866,f):g):(m.flags|=67108866,f)):(m.flags|=1048576,f)}function c(m){return e&&m.alternate===null&&(m.flags|=67108866),m}function r(m,f,g,x){return f===null||f.tag!==6?(f=Mc(g,m.mode,x),f.return=m,f):(f=n(f,g),f.return=m,f)}function o(m,f,g,x){var U=g.type;return U===Ue?v(m,f,g.props.children,x,g.key):f!==null&&(f.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Ye&&Ua(U)===f.type)?(f=n(f,g.props),Jl(f,g),f.return=m,f):(f=Qn(g.type,g.key,g.props,null,m.mode,x),Jl(f,g),f.return=m,f)}function p(m,f,g,x){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Ac(g,m.mode,x),f.return=m,f):(f=n(f,g.children||[]),f.return=m,f)}function v(m,f,g,x,U){return f===null||f.tag!==7?(f=Da(g,m.mode,x,U),f.return=m,f):(f=n(f,g),f.return=m,f)}function S(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=Mc(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Je:return g=Qn(f.type,f.key,f.props,null,m.mode,g),Jl(g,f),g.return=m,g;case Re:return f=Ac(f,m.mode,g),f.return=m,f;case Ye:return f=Ua(f),S(m,f,g)}if(bt(f)||Le(f))return f=Da(f,m.mode,g,null),f.return=m,f;if(typeof f.then=="function")return S(m,$n(f),g);if(f.$$typeof===Oe)return S(m,Kn(m,f),g);In(m,f)}return null}function h(m,f,g,x){var U=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return U!==null?null:r(m,f,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Je:return g.key===U?o(m,f,g,x):null;case Re:return g.key===U?p(m,f,g,x):null;case Ye:return g=Ua(g),h(m,f,g,x)}if(bt(g)||Le(g))return U!==null?null:v(m,f,g,x,null);if(typeof g.then=="function")return h(m,f,$n(g),x);if(g.$$typeof===Oe)return h(m,f,Kn(m,g),x);In(m,g)}return null}function b(m,f,g,x,U){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return m=m.get(g)||null,r(f,m,""+x,U);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Je:return m=m.get(x.key===null?g:x.key)||null,o(f,m,x,U);case Re:return m=m.get(x.key===null?g:x.key)||null,p(f,m,x,U);case Ye:return x=Ua(x),b(m,f,g,x,U)}if(bt(x)||Le(x))return m=m.get(g)||null,v(f,m,x,U,null);if(typeof x.then=="function")return b(m,f,g,$n(x),U);if(x.$$typeof===Oe)return b(m,f,g,Kn(f,x),U);In(f,x)}return null}function D(m,f,g,x){for(var U=null,$=null,O=f,X=f=0,J=null;O!==null&&X<g.length;X++){O.index>X?(J=O,O=null):J=O.sibling;var I=h(m,O,g[X],x);if(I===null){O===null&&(O=J);break}e&&O&&I.alternate===null&&t(m,O),f=i(I,f,X),$===null?U=I:$.sibling=I,$=I,O=J}if(X===g.length)return a(m,O),F&&Ht(m,X),U;if(O===null){for(;X<g.length;X++)O=S(m,g[X],x),O!==null&&(f=i(O,f,X),$===null?U=O:$.sibling=O,$=O);return F&&Ht(m,X),U}for(O=l(O);X<g.length;X++)J=b(O,m,X,g[X],x),J!==null&&(e&&J.alternate!==null&&O.delete(J.key===null?X:J.key),f=i(J,f,X),$===null?U=J:$.sibling=J,$=J);return e&&O.forEach(function(xa){return t(m,xa)}),F&&Ht(m,X),U}function B(m,f,g,x){if(g==null)throw Error(s(151));for(var U=null,$=null,O=f,X=f=0,J=null,I=g.next();O!==null&&!I.done;X++,I=g.next()){O.index>X?(J=O,O=null):J=O.sibling;var xa=h(m,O,I.value,x);if(xa===null){O===null&&(O=J);break}e&&O&&xa.alternate===null&&t(m,O),f=i(xa,f,X),$===null?U=xa:$.sibling=xa,$=xa,O=J}if(I.done)return a(m,O),F&&Ht(m,X),U;if(O===null){for(;!I.done;X++,I=g.next())I=S(m,I.value,x),I!==null&&(f=i(I,f,X),$===null?U=I:$.sibling=I,$=I);return F&&Ht(m,X),U}for(O=l(O);!I.done;X++,I=g.next())I=b(O,m,X,I.value,x),I!==null&&(e&&I.alternate!==null&&O.delete(I.key===null?X:I.key),f=i(I,f,X),$===null?U=I:$.sibling=I,$=I);return e&&O.forEach(function(P2){return t(m,P2)}),F&&Ht(m,X),U}function re(m,f,g,x){if(typeof g=="object"&&g!==null&&g.type===Ue&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Je:e:{for(var U=g.key;f!==null;){if(f.key===U){if(U=g.type,U===Ue){if(f.tag===7){a(m,f.sibling),x=n(f,g.props.children),x.return=m,m=x;break e}}else if(f.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Ye&&Ua(U)===f.type){a(m,f.sibling),x=n(f,g.props),Jl(x,g),x.return=m,m=x;break e}a(m,f);break}else t(m,f);f=f.sibling}g.type===Ue?(x=Da(g.props.children,m.mode,x,g.key),x.return=m,m=x):(x=Qn(g.type,g.key,g.props,null,m.mode,x),Jl(x,g),x.return=m,m=x)}return c(m);case Re:e:{for(U=g.key;f!==null;){if(f.key===U)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){a(m,f.sibling),x=n(f,g.children||[]),x.return=m,m=x;break e}else{a(m,f);break}else t(m,f);f=f.sibling}x=Ac(g,m.mode,x),x.return=m,m=x}return c(m);case Ye:return g=Ua(g),re(m,f,g,x)}if(bt(g))return D(m,f,g,x);if(Le(g)){if(U=Le(g),typeof U!="function")throw Error(s(150));return g=U.call(g),B(m,f,g,x)}if(typeof g.then=="function")return re(m,f,$n(g),x);if(g.$$typeof===Oe)return re(m,f,Kn(m,g),x);In(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,f!==null&&f.tag===6?(a(m,f.sibling),x=n(f,g),x.return=m,m=x):(a(m,f),x=Mc(g,m.mode,x),x.return=m,m=x),c(m)):a(m,f)}return function(m,f,g,x){try{Kl=0;var U=re(m,f,g,x);return sl=null,U}catch(O){if(O===ol||O===Wn)throw O;var $=et(29,O,null,m.mode);return $.lanes=x,$.return=m,$}}}var Ba=Oo(!0),Co=Oo(!1),la=!1;function Rc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ia(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(P&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=Xn(e),ho(e,null,a),t}return Gn(e,l,t,a),Xn(e)}function Wl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,jr(e,a)}}function Yc(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=c:i=i.next=c,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Lc=!1;function Fl(){if(Lc){var e=rl;if(e!==null)throw e}}function $l(e,t,a,l){Lc=!1;var n=e.updateQueue;la=!1;var i=n.firstBaseUpdate,c=n.lastBaseUpdate,r=n.shared.pending;if(r!==null){n.shared.pending=null;var o=r,p=o.next;o.next=null,c===null?i=p:c.next=p,c=o;var v=e.alternate;v!==null&&(v=v.updateQueue,r=v.lastBaseUpdate,r!==c&&(r===null?v.firstBaseUpdate=p:r.next=p,v.lastBaseUpdate=o))}if(i!==null){var S=n.baseState;c=0,v=p=o=null,r=i;do{var h=r.lane&-536870913,b=h!==r.lane;if(b?(K&h)===h:(l&h)===h){h!==0&&h===ul&&(Lc=!0),v!==null&&(v=v.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});e:{var D=e,B=r;h=t;var re=a;switch(B.tag){case 1:if(D=B.payload,typeof D=="function"){S=D.call(re,S,h);break e}S=D;break e;case 3:D.flags=D.flags&-65537|128;case 0:if(D=B.payload,h=typeof D=="function"?D.call(re,S,h):D,h==null)break e;S=R({},S,h);break e;case 2:la=!0}}h=r.callback,h!==null&&(e.flags|=64,b&&(e.flags|=8192),b=n.callbacks,b===null?n.callbacks=[h]:b.push(h))}else b={lane:h,tag:r.tag,payload:r.payload,callback:r.callback,next:null},v===null?(p=v=b,o=S):v=v.next=b,c|=h;if(r=r.next,r===null){if(r=n.shared.pending,r===null)break;b=r,r=b.next,b.next=null,n.lastBaseUpdate=b,n.shared.pending=null}}while(!0);v===null&&(o=S),n.baseState=o,n.firstBaseUpdate=p,n.lastBaseUpdate=v,i===null&&(n.shared.lanes=0),sa|=c,e.lanes=c,e.memoizedState=S}}function Uo(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Ho(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Uo(a[e],t)}var fl=d(null),Pn=d(0);function Bo(e,t){e=Zt,E(Pn,e),E(fl,t),Zt=e|t.baseLanes}function kc(){E(Pn,Zt),E(fl,fl.current)}function Gc(){Zt=Pn.current,z(fl),z(Pn)}var tt=d(null),gt=null;function ca(e){var t=e.alternate;E(ve,ve.current&1),E(tt,e),gt===null&&(t===null||fl.current!==null||t.memoizedState!==null)&&(gt=e)}function Xc(e){E(ve,ve.current),E(tt,e),gt===null&&(gt=e)}function Ro(e){e.tag===22?(E(ve,ve.current),E(tt,e),gt===null&&(gt=e)):ua()}function ua(){E(ve,ve.current),E(tt,tt.current)}function at(e){z(tt),gt===e&&(gt=null),z(ve)}var ve=d(0);function ei(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Wu(a)||Fu(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qt=0,G=null,ce=null,Se=null,ti=!1,dl=!1,Ra=!1,ai=0,Il=0,ml=null,X1=0;function pe(){throw Error(s(321))}function Qc(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Pe(e[a],t[a]))return!1;return!0}function Vc(e,t,a,l,n,i){return qt=i,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,y.H=e===null||e.memoizedState===null?xs:cu,Ra=!1,i=a(l,n),Ra=!1,dl&&(i=Yo(t,a,l,n)),qo(e),i}function qo(e){y.H=tn;var t=ce!==null&&ce.next!==null;if(qt=0,Se=ce=G=null,ti=!1,Il=0,ml=null,t)throw Error(s(300));e===null||ze||(e=e.dependencies,e!==null&&Zn(e)&&(ze=!0))}function Yo(e,t,a,l){G=e;var n=0;do{if(dl&&(ml=null),Il=0,dl=!1,25<=n)throw Error(s(301));if(n+=1,Se=ce=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}y.H=Ss,i=t(a,l)}while(dl);return i}function Q1(){var e=y.H,t=e.useState()[0];return t=typeof t.then=="function"?Pl(t):t,e=e.useState()[0],(ce!==null?ce.memoizedState:null)!==e&&(G.flags|=1024),t}function Zc(){var e=ai!==0;return ai=0,e}function Kc(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Jc(e){if(ti){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ti=!1}qt=0,Se=ce=G=null,dl=!1,Il=ai=0,ml=null}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?G.memoizedState=Se=e:Se=Se.next=e,Se}function ye(){if(ce===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=Se===null?G.memoizedState:Se.next;if(t!==null)Se=t,ce=e;else{if(e===null)throw G.alternate===null?Error(s(467)):Error(s(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},Se===null?G.memoizedState=Se=e:Se=Se.next=e}return Se}function li(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pl(e){var t=Il;return Il+=1,ml===null&&(ml=[]),e=Do(ml,e,t),t=G,(Se===null?t.memoizedState:Se.next)===null&&(t=t.alternate,y.H=t===null||t.memoizedState===null?xs:cu),e}function ni(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Pl(e);if(e.$$typeof===Oe)return De(e)}throw Error(s(438,String(e)))}function Wc(e){var t=null,a=G.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=G.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=li(),G.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Ga;return t.index++,a}function Yt(e,t){return typeof t=="function"?t(e):t}function ii(e){var t=ye();return Fc(t,ce,e)}function Fc(e,t,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var c=n.next;n.next=i.next,i.next=c}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var r=c=null,o=null,p=t,v=!1;do{var S=p.lane&-536870913;if(S!==p.lane?(K&S)===S:(qt&S)===S){var h=p.revertLane;if(h===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),S===ul&&(v=!0);else if((qt&h)===h){p=p.next,h===ul&&(v=!0);continue}else S={lane:0,revertLane:p.revertLane,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},o===null?(r=o=S,c=i):o=o.next=S,G.lanes|=h,sa|=h;S=p.action,Ra&&a(i,S),i=p.hasEagerState?p.eagerState:a(i,S)}else h={lane:S,revertLane:p.revertLane,gesture:p.gesture,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},o===null?(r=o=h,c=i):o=o.next=h,G.lanes|=S,sa|=S;p=p.next}while(p!==null&&p!==t);if(o===null?c=i:o.next=r,!Pe(i,e.memoizedState)&&(ze=!0,v&&(a=rl,a!==null)))throw a;e.memoizedState=i,e.baseState=c,e.baseQueue=o,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function $c(e){var t=ye(),a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var c=n=n.next;do i=e(i,c.action),c=c.next;while(c!==n);Pe(i,t.memoizedState)||(ze=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Lo(e,t,a){var l=G,n=ye(),i=F;if(i){if(a===void 0)throw Error(s(407));a=a()}else a=t();var c=!Pe((ce||n).memoizedState,a);if(c&&(n.memoizedState=a,ze=!0),n=n.queue,eu(Xo.bind(null,l,n,e),[e]),n.getSnapshot!==t||c||Se!==null&&Se.memoizedState.tag&1){if(l.flags|=2048,gl(9,{destroy:void 0},Go.bind(null,l,n,a,t),null),se===null)throw Error(s(349));i||(qt&127)!==0||ko(l,t,a)}return a}function ko(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=G.updateQueue,t===null?(t=li(),G.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Go(e,t,a,l){t.value=a,t.getSnapshot=l,Qo(t)&&Vo(e)}function Xo(e,t,a){return a(function(){Qo(t)&&Vo(e)})}function Qo(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Pe(e,a)}catch{return!0}}function Vo(e){var t=Ta(e,2);t!==null&&Ke(t,e,2)}function Ic(e){var t=Be();if(typeof e=="function"){var a=e;if(e=a(),Ra){Ft(!0);try{a()}finally{Ft(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:e},t}function Zo(e,t,a,l){return e.baseState=a,Fc(e,ce,typeof l=="function"?l:Yt)}function V1(e,t,a,l,n){if(ri(e))throw Error(s(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};y.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Ko(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Ko(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=y.T,c={};y.T=c;try{var r=a(n,l),o=y.S;o!==null&&o(c,r),Jo(e,t,r)}catch(p){Pc(e,t,p)}finally{i!==null&&c.types!==null&&(i.types=c.types),y.T=i}}else try{i=a(n,l),Jo(e,t,i)}catch(p){Pc(e,t,p)}}function Jo(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Wo(e,t,l)},function(l){return Pc(e,t,l)}):Wo(e,t,a)}function Wo(e,t,a){t.status="fulfilled",t.value=a,Fo(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Ko(e,a)))}function Pc(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Fo(t),t=t.next;while(t!==l)}e.action=null}function Fo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function $o(e,t){return t}function Io(e,t){if(F){var a=se.formState;if(a!==null){e:{var l=G;if(F){if(fe){t:{for(var n=fe,i=mt;n.nodeType!==8;){if(!i){n=null;break t}if(n=pt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){fe=pt(n.nextSibling),l=n.data==="F!";break e}}ta(l)}l=!1}l&&(t=a[0])}}return a=Be(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$o,lastRenderedState:t},a.queue=l,a=bs.bind(null,G,l),l.dispatch=a,l=Ic(!1),i=iu.bind(null,G,!1,l.queue),l=Be(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=V1.bind(null,G,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Po(e){var t=ye();return es(t,ce,e)}function es(e,t,a){if(t=Fc(e,t,$o)[0],e=ii(Yt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Pl(t)}catch(c){throw c===ol?Wn:c}else l=t;t=ye();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(G.flags|=2048,gl(9,{destroy:void 0},Z1.bind(null,n,a),null)),[l,i,e]}function Z1(e,t){e.action=t}function ts(e){var t=ye(),a=ce;if(a!==null)return es(t,a,e);ye(),t=t.memoizedState,a=ye();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function gl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=G.updateQueue,t===null&&(t=li(),G.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function as(){return ye().memoizedState}function ci(e,t,a,l){var n=Be();G.flags|=e,n.memoizedState=gl(1|t,{destroy:void 0},a,l===void 0?null:l)}function ui(e,t,a,l){var n=ye();l=l===void 0?null:l;var i=n.memoizedState.inst;ce!==null&&l!==null&&Qc(l,ce.memoizedState.deps)?n.memoizedState=gl(t,i,a,l):(G.flags|=e,n.memoizedState=gl(1|t,i,a,l))}function ls(e,t){ci(8390656,8,e,t)}function eu(e,t){ui(2048,8,e,t)}function K1(e){G.flags|=4;var t=G.updateQueue;if(t===null)t=li(),G.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function ns(e){var t=ye().memoizedState;return K1({ref:t,nextImpl:e}),function(){if((P&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function is(e,t){return ui(4,2,e,t)}function cs(e,t){return ui(4,4,e,t)}function us(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rs(e,t,a){a=a!=null?a.concat([e]):null,ui(4,4,us.bind(null,t,e),a)}function tu(){}function os(e,t){var a=ye();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Qc(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function ss(e,t){var a=ye();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Qc(t,l[1]))return l[0];if(l=e(),Ra){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[l,t],l}function au(e,t,a){return a===void 0||(qt&1073741824)!==0&&(K&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=f0(),G.lanes|=e,sa|=e,a)}function fs(e,t,a,l){return Pe(a,t)?a:fl.current!==null?(e=au(e,a,l),Pe(e,t)||(ze=!0),e):(qt&42)===0||(qt&1073741824)!==0&&(K&261930)===0?(ze=!0,e.memoizedState=a):(e=f0(),G.lanes|=e,sa|=e,t)}function ds(e,t,a,l,n){var i=N.p;N.p=i!==0&&8>i?i:8;var c=y.T,r={};y.T=r,iu(e,!1,t,a);try{var o=n(),p=y.S;if(p!==null&&p(r,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var v=G1(o,l);en(e,t,v,it(e))}else en(e,t,l,it(e))}catch(S){en(e,t,{then:function(){},status:"rejected",reason:S},it())}finally{N.p=i,c!==null&&r.types!==null&&(c.types=r.types),y.T=c}}function J1(){}function lu(e,t,a,l){if(e.tag!==5)throw Error(s(476));var n=ms(e).queue;ds(e,n,t,q,a===null?J1:function(){return gs(e),a(l)})}function ms(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:q},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function gs(e){var t=ms(e);t.next===null&&(t=e.alternate.memoizedState),en(e,t.next.queue,{},it())}function nu(){return De(vn)}function ps(){return ye().memoizedState}function hs(){return ye().memoizedState}function W1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=it();e=na(a);var l=ia(t,e,a);l!==null&&(Ke(l,t,a),Wl(l,t,a)),t={cache:Cc()},e.payload=t;return}t=t.return}}function F1(e,t,a){var l=it();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ri(e)?vs(t,a):(a=zc(e,t,a,l),a!==null&&(Ke(a,e,l),ys(a,t,l)))}function bs(e,t,a){var l=it();en(e,t,a,l)}function en(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ri(e))vs(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var c=t.lastRenderedState,r=i(c,a);if(n.hasEagerState=!0,n.eagerState=r,Pe(r,c))return Gn(e,t,n,0),se===null&&kn(),!1}catch{}if(a=zc(e,t,n,l),a!==null)return Ke(a,e,l),ys(a,t,l),!0}return!1}function iu(e,t,a,l){if(l={lane:2,revertLane:Ru(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ri(e)){if(t)throw Error(s(479))}else t=zc(e,a,l,2),t!==null&&Ke(t,e,2)}function ri(e){var t=e.alternate;return e===G||t!==null&&t===G}function vs(e,t){dl=ti=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function ys(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,jr(e,a)}}var tn={readContext:De,use:ni,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useLayoutEffect:pe,useInsertionEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useSyncExternalStore:pe,useId:pe,useHostTransitionStatus:pe,useFormState:pe,useActionState:pe,useOptimistic:pe,useMemoCache:pe,useCacheRefresh:pe};tn.useEffectEvent=pe;var xs={readContext:De,use:ni,useCallback:function(e,t){return Be().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:ls,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,ci(4194308,4,us.bind(null,t,e),a)},useLayoutEffect:function(e,t){return ci(4194308,4,e,t)},useInsertionEffect:function(e,t){ci(4,2,e,t)},useMemo:function(e,t){var a=Be();t=t===void 0?null:t;var l=e();if(Ra){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Be();if(a!==void 0){var n=a(t);if(Ra){Ft(!0);try{a(t)}finally{Ft(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=F1.bind(null,G,e),[l.memoizedState,e]},useRef:function(e){var t=Be();return e={current:e},t.memoizedState=e},useState:function(e){e=Ic(e);var t=e.queue,a=bs.bind(null,G,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:tu,useDeferredValue:function(e,t){var a=Be();return au(a,e,t)},useTransition:function(){var e=Ic(!1);return e=ds.bind(null,G,e.queue,!0,!1),Be().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=G,n=Be();if(F){if(a===void 0)throw Error(s(407));a=a()}else{if(a=t(),se===null)throw Error(s(349));(K&127)!==0||ko(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,ls(Xo.bind(null,l,i,e),[e]),l.flags|=2048,gl(9,{destroy:void 0},Go.bind(null,l,i,a,t),null),a},useId:function(){var e=Be(),t=se.identifierPrefix;if(F){var a=Nt,l=At;a=(l&~(1<<32-Ie(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=ai++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=X1++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:nu,useFormState:Io,useActionState:Io,useOptimistic:function(e){var t=Be();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=iu.bind(null,G,!0,a),a.dispatch=t,[e,t]},useMemoCache:Wc,useCacheRefresh:function(){return Be().memoizedState=W1.bind(null,G)},useEffectEvent:function(e){var t=Be(),a={impl:e};return t.memoizedState=a,function(){if((P&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},cu={readContext:De,use:ni,useCallback:os,useContext:De,useEffect:eu,useImperativeHandle:rs,useInsertionEffect:is,useLayoutEffect:cs,useMemo:ss,useReducer:ii,useRef:as,useState:function(){return ii(Yt)},useDebugValue:tu,useDeferredValue:function(e,t){var a=ye();return fs(a,ce.memoizedState,e,t)},useTransition:function(){var e=ii(Yt)[0],t=ye().memoizedState;return[typeof e=="boolean"?e:Pl(e),t]},useSyncExternalStore:Lo,useId:ps,useHostTransitionStatus:nu,useFormState:Po,useActionState:Po,useOptimistic:function(e,t){var a=ye();return Zo(a,ce,e,t)},useMemoCache:Wc,useCacheRefresh:hs};cu.useEffectEvent=ns;var Ss={readContext:De,use:ni,useCallback:os,useContext:De,useEffect:eu,useImperativeHandle:rs,useInsertionEffect:is,useLayoutEffect:cs,useMemo:ss,useReducer:$c,useRef:as,useState:function(){return $c(Yt)},useDebugValue:tu,useDeferredValue:function(e,t){var a=ye();return ce===null?au(a,e,t):fs(a,ce.memoizedState,e,t)},useTransition:function(){var e=$c(Yt)[0],t=ye().memoizedState;return[typeof e=="boolean"?e:Pl(e),t]},useSyncExternalStore:Lo,useId:ps,useHostTransitionStatus:nu,useFormState:ts,useActionState:ts,useOptimistic:function(e,t){var a=ye();return ce!==null?Zo(a,ce,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Wc,useCacheRefresh:hs};Ss.useEffectEvent=ns;function uu(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:R({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ru={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=it(),n=na(l);n.payload=t,a!=null&&(n.callback=a),t=ia(e,n,l),t!==null&&(Ke(t,e,l),Wl(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=it(),n=na(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ia(e,n,l),t!==null&&(Ke(t,e,l),Wl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=it(),l=na(a);l.tag=2,t!=null&&(l.callback=t),t=ia(e,l,a),t!==null&&(Ke(t,e,a),Wl(t,e,a))}};function zs(e,t,a,l,n,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,c):t.prototype&&t.prototype.isPureReactComponent?!kl(a,l)||!kl(n,i):!0}function js(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&ru.enqueueReplaceState(t,t.state,null)}function qa(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=R({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function Ms(e){Ln(e)}function As(e){console.error(e)}function Ns(e){Ln(e)}function oi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Es(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function ou(e,t,a){return a=na(a),a.tag=3,a.payload={element:null},a.callback=function(){oi(e,t)},a}function Ts(e){return e=na(e),e.tag=3,e}function Ds(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){Es(t,a,l)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){Es(t,a,l),typeof n!="function"&&(fa===null?fa=new Set([this]):fa.add(this));var r=l.stack;this.componentDidCatch(l.value,{componentStack:r!==null?r:""})})}function $1(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&cl(t,a,n,!0),a=tt.current,a!==null){switch(a.tag){case 31:case 13:return gt===null?Si():a.alternate===null&&he===0&&(he=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Fn?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Uu(e,l,n)),!1;case 22:return a.flags|=65536,l===Fn?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Uu(e,l,n)),!1}throw Error(s(435,a.tag))}return Uu(e,l,n),Si(),!1}if(F)return t=tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Tc&&(e=Error(s(422),{cause:l}),Ql(st(e,a)))):(l!==Tc&&(t=Error(s(423),{cause:l}),Ql(st(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=st(l,a),n=ou(e.stateNode,l,n),Yc(e,n),he!==4&&(he=2)),!1;var i=Error(s(520),{cause:l});if(i=st(i,a),sn===null?sn=[i]:sn.push(i),he!==4&&(he=2),t===null)return!0;l=st(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=ou(a.stateNode,l,e),Yc(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(fa===null||!fa.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Ts(n),Ds(n,e,a,l),Yc(a,n),!1}a=a.return}while(a!==null);return!1}var su=Error(s(461)),ze=!1;function we(e,t,a,l){t.child=e===null?Co(t,null,a,l):Ba(t,e.child,a,l)}function ws(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var c={};for(var r in l)r!=="ref"&&(c[r]=l[r])}else c=l;return Oa(t),l=Vc(e,t,a,c,i,n),r=Zc(),e!==null&&!ze?(Kc(e,t,n),Lt(e,t,n)):(F&&r&&Nc(t),t.flags|=1,we(e,t,l,n),t.child)}function _s(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!jc(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Os(e,t,i,l,n)):(e=Qn(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!vu(e,n)){var c=i.memoizedProps;if(a=a.compare,a=a!==null?a:kl,a(c,l)&&e.ref===t.ref)return Lt(e,t,n)}return t.flags|=1,e=Ut(i,l),e.ref=t.ref,e.return=t,t.child=e}function Os(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(kl(i,l)&&e.ref===t.ref)if(ze=!1,t.pendingProps=l=i,vu(e,n))(e.flags&131072)!==0&&(ze=!0);else return t.lanes=e.lanes,Lt(e,t,n)}return fu(e,t,a,l,n)}function Cs(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return Us(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Jn(t,i!==null?i.cachePool:null),i!==null?Bo(t,i):kc(),Ro(t);else return l=t.lanes=536870912,Us(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(Jn(t,i.cachePool),Bo(t,i),ua(),t.memoizedState=null):(e!==null&&Jn(t,null),kc(),ua());return we(e,t,n,a),t.child}function an(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Us(e,t,a,l,n){var i=Hc();return i=i===null?null:{parent:xe._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Jn(t,null),kc(),Ro(t),e!==null&&cl(e,t,l,!0),t.childLanes=n,null}function si(e,t){return t=di({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Hs(e,t,a){return Ba(t,e.child,null,a),e=si(t,t.pendingProps),e.flags|=2,at(t),t.memoizedState=null,e}function I1(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(F){if(l.mode==="hidden")return e=si(t,l),t.lanes=536870912,an(null,e);if(Xc(t),(e=fe)?(e=K0(e,mt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pt!==null?{id:At,overflow:Nt}:null,retryLane:536870912,hydrationErrors:null},a=vo(e),a.return=t,t.child=a,Te=t,fe=null)):e=null,e===null)throw ta(t);return t.lanes=536870912,null}return si(t,l)}var i=e.memoizedState;if(i!==null){var c=i.dehydrated;if(Xc(t),n)if(t.flags&256)t.flags&=-257,t=Hs(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(ze||cl(e,t,a,!1),n=(a&e.childLanes)!==0,ze||n){if(l=se,l!==null&&(c=Mr(l,a),c!==0&&c!==i.retryLane))throw i.retryLane=c,Ta(e,c),Ke(l,e,c),su;Si(),t=Hs(e,t,a)}else e=i.treeContext,fe=pt(c.nextSibling),Te=t,F=!0,ea=null,mt=!1,e!==null&&So(t,e),t=si(t,l),t.flags|=4096;return t}return e=Ut(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function fi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function fu(e,t,a,l,n){return Oa(t),a=Vc(e,t,a,l,void 0,n),l=Zc(),e!==null&&!ze?(Kc(e,t,n),Lt(e,t,n)):(F&&l&&Nc(t),t.flags|=1,we(e,t,a,n),t.child)}function Bs(e,t,a,l,n,i){return Oa(t),t.updateQueue=null,a=Yo(t,l,a,n),qo(e),l=Zc(),e!==null&&!ze?(Kc(e,t,i),Lt(e,t,i)):(F&&l&&Nc(t),t.flags|=1,we(e,t,a,i),t.child)}function Rs(e,t,a,l,n){if(Oa(t),t.stateNode===null){var i=al,c=a.contextType;typeof c=="object"&&c!==null&&(i=De(c)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ru,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},Rc(t),c=a.contextType,i.context=typeof c=="object"&&c!==null?De(c):al,i.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(uu(t,a,c,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&ru.enqueueReplaceState(i,i.state,null),$l(t,l,i,n),Fl(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var r=t.memoizedProps,o=qa(a,r);i.props=o;var p=i.context,v=a.contextType;c=al,typeof v=="object"&&v!==null&&(c=De(v));var S=a.getDerivedStateFromProps;v=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function",r=t.pendingProps!==r,v||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r||p!==c)&&js(t,i,l,c),la=!1;var h=t.memoizedState;i.state=h,$l(t,l,i,n),Fl(),p=t.memoizedState,r||h!==p||la?(typeof S=="function"&&(uu(t,a,S,l),p=t.memoizedState),(o=la||zs(t,a,o,l,h,p,c))?(v||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=p),i.props=l,i.state=p,i.context=c,l=o):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,qc(e,t),c=t.memoizedProps,v=qa(a,c),i.props=v,S=t.pendingProps,h=i.context,p=a.contextType,o=al,typeof p=="object"&&p!==null&&(o=De(p)),r=a.getDerivedStateFromProps,(p=typeof r=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==S||h!==o)&&js(t,i,l,o),la=!1,h=t.memoizedState,i.state=h,$l(t,l,i,n),Fl();var b=t.memoizedState;c!==S||h!==b||la||e!==null&&e.dependencies!==null&&Zn(e.dependencies)?(typeof r=="function"&&(uu(t,a,r,l),b=t.memoizedState),(v=la||zs(t,a,v,l,h,b,o)||e!==null&&e.dependencies!==null&&Zn(e.dependencies))?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,b,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,b,o)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=b),i.props=l,i.state=b,i.context=o,l=v):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,fi(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Ba(t,e.child,null,n),t.child=Ba(t,null,a,n)):we(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Lt(e,t,n),e}function qs(e,t,a,l){return wa(),t.flags|=256,we(e,t,a,l),t.child}var du={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mu(e){return{baseLanes:e,cachePool:Eo()}}function gu(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=nt),e}function Ys(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(ve.current&2)!==0),c&&(n=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(F){if(n?ca(t):ua(),(e=fe)?(e=K0(e,mt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pt!==null?{id:At,overflow:Nt}:null,retryLane:536870912,hydrationErrors:null},a=vo(e),a.return=t,t.child=a,Te=t,fe=null)):e=null,e===null)throw ta(t);return Fu(e)?t.lanes=32:t.lanes=536870912,null}var r=l.children;return l=l.fallback,n?(ua(),n=t.mode,r=di({mode:"hidden",children:r},n),l=Da(l,n,a,null),r.return=t,l.return=t,r.sibling=l,t.child=r,l=t.child,l.memoizedState=mu(a),l.childLanes=gu(e,c,a),t.memoizedState=du,an(null,l)):(ca(t),pu(t,r))}var o=e.memoizedState;if(o!==null&&(r=o.dehydrated,r!==null)){if(i)t.flags&256?(ca(t),t.flags&=-257,t=hu(e,t,a)):t.memoizedState!==null?(ua(),t.child=e.child,t.flags|=128,t=null):(ua(),r=l.fallback,n=t.mode,l=di({mode:"visible",children:l.children},n),r=Da(r,n,a,null),r.flags|=2,l.return=t,r.return=t,l.sibling=r,t.child=l,Ba(t,e.child,null,a),l=t.child,l.memoizedState=mu(a),l.childLanes=gu(e,c,a),t.memoizedState=du,t=an(null,l));else if(ca(t),Fu(r)){if(c=r.nextSibling&&r.nextSibling.dataset,c)var p=c.dgst;c=p,l=Error(s(419)),l.stack="",l.digest=c,Ql({value:l,source:null,stack:null}),t=hu(e,t,a)}else if(ze||cl(e,t,a,!1),c=(a&e.childLanes)!==0,ze||c){if(c=se,c!==null&&(l=Mr(c,a),l!==0&&l!==o.retryLane))throw o.retryLane=l,Ta(e,l),Ke(c,e,l),su;Wu(r)||Si(),t=hu(e,t,a)}else Wu(r)?(t.flags|=192,t.child=e.child,t=null):(e=o.treeContext,fe=pt(r.nextSibling),Te=t,F=!0,ea=null,mt=!1,e!==null&&So(t,e),t=pu(t,l.children),t.flags|=4096);return t}return n?(ua(),r=l.fallback,n=t.mode,o=e.child,p=o.sibling,l=Ut(o,{mode:"hidden",children:l.children}),l.subtreeFlags=o.subtreeFlags&65011712,p!==null?r=Ut(p,r):(r=Da(r,n,a,null),r.flags|=2),r.return=t,l.return=t,l.sibling=r,t.child=l,an(null,l),l=t.child,r=e.child.memoizedState,r===null?r=mu(a):(n=r.cachePool,n!==null?(o=xe._currentValue,n=n.parent!==o?{parent:o,pool:o}:n):n=Eo(),r={baseLanes:r.baseLanes|a,cachePool:n}),l.memoizedState=r,l.childLanes=gu(e,c,a),t.memoizedState=du,an(e.child,l)):(ca(t),a=e.child,e=a.sibling,a=Ut(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function pu(e,t){return t=di({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function di(e,t){return e=et(22,e,null,t),e.lanes=0,e}function hu(e,t,a){return Ba(t,e.child,null,a),e=pu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ls(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),_c(e.return,t,a)}function bu(e,t,a,l,n,i){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=a,c.tailMode=n,c.treeForkCount=i)}function ks(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var c=ve.current,r=(c&2)!==0;if(r?(c=c&1|2,t.flags|=128):c&=1,E(ve,c),we(e,t,l,a),l=F?Xl:0,!r&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ls(e,a,t);else if(e.tag===19)Ls(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&ei(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),bu(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&ei(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}bu(t,!0,a,null,i,l);break;case"together":bu(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Lt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),sa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(cl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,a=Ut(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ut(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function vu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Zn(e)))}function P1(e,t,a){switch(t.tag){case 3:He(t,t.stateNode.containerInfo),aa(t,xe,e.memoizedState.cache),wa();break;case 27:case 5:Tl(t);break;case 4:He(t,t.stateNode.containerInfo);break;case 10:aa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Xc(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ca(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Ys(e,t,a):(ca(t),e=Lt(e,t,a),e!==null?e.sibling:null);ca(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(cl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return ks(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),E(ve,ve.current),l)break;return null;case 22:return t.lanes=0,Cs(e,t,a,t.pendingProps);case 24:aa(t,xe,e.memoizedState.cache)}return Lt(e,t,a)}function Gs(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)ze=!0;else{if(!vu(e,a)&&(t.flags&128)===0)return ze=!1,P1(e,t,a);ze=(e.flags&131072)!==0}else ze=!1,F&&(t.flags&1048576)!==0&&xo(t,Xl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ua(t.elementType),t.type=e,typeof e=="function")jc(e)?(l=qa(e,l),t.tag=1,t=Rs(null,t,e,l,a)):(t.tag=0,t=fu(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===ct){t.tag=11,t=ws(null,t,e,l,a);break e}else if(n===W){t.tag=14,t=_s(null,t,e,l,a);break e}}throw t=wt(e)||e,Error(s(306,t,""))}}return t;case 0:return fu(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=qa(l,t.pendingProps),Rs(e,t,l,n,a);case 3:e:{if(He(t,t.stateNode.containerInfo),e===null)throw Error(s(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,qc(e,t),$l(t,l,null,a);var c=t.memoizedState;if(l=c.cache,aa(t,xe,l),l!==i.cache&&Oc(t,[xe],a,!0),Fl(),l=c.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=qs(e,t,l,a);break e}else if(l!==n){n=st(Error(s(424)),t),Ql(n),t=qs(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,fe=pt(e.firstChild),Te=t,F=!0,ea=null,mt=!0,a=Co(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(wa(),l===n){t=Lt(e,t,a);break e}we(e,t,l,a)}t=t.child}return t;case 26:return fi(e,t),e===null?(a=P0(t.type,null,t.pendingProps,null))?t.memoizedState=a:F||(a=t.type,e=t.pendingProps,l=Ti(Q.current).createElement(a),l[Ee]=t,l[ke]=e,_e(l,a,e),Ae(l),t.stateNode=l):t.memoizedState=P0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Tl(t),e===null&&F&&(l=t.stateNode=F0(t.type,t.pendingProps,Q.current),Te=t,mt=!0,n=fe,pa(t.type)?($u=n,fe=pt(l.firstChild)):fe=n),we(e,t,t.pendingProps.children,a),fi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&F&&((n=l=fe)&&(l=D2(l,t.type,t.pendingProps,mt),l!==null?(t.stateNode=l,Te=t,fe=pt(l.firstChild),mt=!1,n=!0):n=!1),n||ta(t)),Tl(t),n=t.type,i=t.pendingProps,c=e!==null?e.memoizedProps:null,l=i.children,Zu(n,i)?l=null:c!==null&&Zu(n,c)&&(t.flags|=32),t.memoizedState!==null&&(n=Vc(e,t,Q1,null,null,a),vn._currentValue=n),fi(e,t),we(e,t,l,a),t.child;case 6:return e===null&&F&&((e=a=fe)&&(a=w2(a,t.pendingProps,mt),a!==null?(t.stateNode=a,Te=t,fe=null,e=!0):e=!1),e||ta(t)),null;case 13:return Ys(e,t,a);case 4:return He(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ba(t,null,l,a):we(e,t,l,a),t.child;case 11:return ws(e,t,t.type,t.pendingProps,a);case 7:return we(e,t,t.pendingProps,a),t.child;case 8:return we(e,t,t.pendingProps.children,a),t.child;case 12:return we(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,aa(t,t.type,l.value),we(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Oa(t),n=De(n),l=l(n),t.flags|=1,we(e,t,l,a),t.child;case 14:return _s(e,t,t.type,t.pendingProps,a);case 15:return Os(e,t,t.type,t.pendingProps,a);case 19:return ks(e,t,a);case 31:return I1(e,t,a);case 22:return Cs(e,t,a,t.pendingProps);case 24:return Oa(t),l=De(xe),e===null?(n=Hc(),n===null&&(n=se,i=Cc(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},Rc(t),aa(t,xe,n)):((e.lanes&a)!==0&&(qc(e,t),$l(t,null,null,a),Fl()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),aa(t,xe,l)):(l=i.cache,aa(t,xe,l),l!==n.cache&&Oc(t,[xe],a,!0))),we(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function kt(e){e.flags|=4}function yu(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(p0())e.flags|=8192;else throw Ha=Fn,Bc}else e.flags&=-16777217}function Xs(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!nf(t))if(p0())e.flags|=8192;else throw Ha=Fn,Bc}function mi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Sr():536870912,e.lanes|=t,vl|=t)}function ln(e,t){if(!F)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function e2(e,t,a){var l=t.pendingProps;switch(Ec(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return de(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Rt(xe),be(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(il(t)?kt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Dc())),de(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(kt(t),i!==null?(de(t),Xs(t,i)):(de(t),yu(t,n,null,l,a))):i?i!==e.memoizedState?(kt(t),de(t),Xs(t,i)):(de(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&kt(t),de(t),yu(t,n,e,l,a)),null;case 27:if(Mn(t),a=Q.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&kt(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return de(t),null}e=_.current,il(t)?zo(t):(e=F0(n,l,a),t.stateNode=e,kt(t))}return de(t),null;case 5:if(Mn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&kt(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return de(t),null}if(i=_.current,il(t))zo(t);else{var c=Ti(Q.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?c.createElement(n,{is:l.is}):c.createElement(n)}}i[Ee]=t,i[ke]=l;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=i;e:switch(_e(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&kt(t)}}return de(t),yu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&kt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(s(166));if(e=Q.current,il(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Te,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Ee]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Y0(e.nodeValue,a)),e||ta(t,!0)}else e=Ti(e).createTextNode(l),e[Ee]=t,t.stateNode=e}return de(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=il(t),a!==null){if(e===null){if(!l)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Ee]=t}else wa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;de(t),e=!1}else a=Dc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(at(t),t):(at(t),null);if((t.flags&128)!==0)throw Error(s(558))}return de(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=il(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(s(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));n[Ee]=t}else wa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;de(t),n=!1}else n=Dc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(at(t),t):(at(t),null)}return at(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),mi(t,t.updateQueue),de(t),null);case 4:return be(),e===null&&ku(t.stateNode.containerInfo),de(t),null;case 10:return Rt(t.type),de(t),null;case 19:if(z(ve),l=t.memoizedState,l===null)return de(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)ln(l,!1);else{if(he!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ei(e),i!==null){for(t.flags|=128,ln(l,!1),e=i.updateQueue,t.updateQueue=e,mi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)bo(a,e),a=a.sibling;return E(ve,ve.current&1|2),F&&Ht(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Fe()>vi&&(t.flags|=128,n=!0,ln(l,!1),t.lanes=4194304)}else{if(!n)if(e=ei(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,mi(t,e),ln(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!F)return de(t),null}else 2*Fe()-l.renderingStartTime>vi&&a!==536870912&&(t.flags|=128,n=!0,ln(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Fe(),e.sibling=null,a=ve.current,E(ve,n?a&1|2:a&1),F&&Ht(t,l.treeForkCount),e):(de(t),null);case 22:case 23:return at(t),Gc(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),a=t.updateQueue,a!==null&&mi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&z(Ca),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Rt(xe),de(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function t2(e,t){switch(Ec(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rt(xe),be(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Mn(t),null;case 31:if(t.memoizedState!==null){if(at(t),t.alternate===null)throw Error(s(340));wa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(at(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));wa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return z(ve),null;case 4:return be(),null;case 10:return Rt(t.type),null;case 22:case 23:return at(t),Gc(),e!==null&&z(Ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Rt(xe),null;case 25:return null;default:return null}}function Qs(e,t){switch(Ec(t),t.tag){case 3:Rt(xe),be();break;case 26:case 27:case 5:Mn(t);break;case 4:be();break;case 31:t.memoizedState!==null&&at(t);break;case 13:at(t);break;case 19:z(ve);break;case 10:Rt(t.type);break;case 22:case 23:at(t),Gc(),e!==null&&z(Ca);break;case 24:Rt(xe)}}function nn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,c=a.inst;l=i(),c.destroy=l}a=a.next}while(a!==n)}}catch(r){ne(t,t.return,r)}}function ra(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var c=l.inst,r=c.destroy;if(r!==void 0){c.destroy=void 0,n=t;var o=a,p=r;try{p()}catch(v){ne(n,o,v)}}}l=l.next}while(l!==i)}}catch(v){ne(t,t.return,v)}}function Vs(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Ho(t,a)}catch(l){ne(e,e.return,l)}}}function Zs(e,t,a){a.props=qa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ne(e,t,l)}}function cn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ne(e,t,n)}}function Et(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ne(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ne(e,t,n)}else a.current=null}function Ks(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ne(e,e.return,n)}}function xu(e,t,a){try{var l=e.stateNode;j2(l,e.type,a,t),l[ke]=t}catch(n){ne(e,e.return,n)}}function Js(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&pa(e.type)||e.tag===4}function Su(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Js(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&pa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zu(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Ot));else if(l!==4&&(l===27&&pa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(zu(e,t,a),e=e.sibling;e!==null;)zu(e,t,a),e=e.sibling}function gi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&pa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(gi(e,t,a),e=e.sibling;e!==null;)gi(e,t,a),e=e.sibling}function Ws(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);_e(t,l,a),t[Ee]=e,t[ke]=a}catch(i){ne(e,e.return,i)}}var Gt=!1,je=!1,ju=!1,Fs=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function a2(e,t){if(e=e.containerInfo,Qu=Hi,e=uo(e),hc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var c=0,r=-1,o=-1,p=0,v=0,S=e,h=null;t:for(;;){for(var b;S!==a||n!==0&&S.nodeType!==3||(r=c+n),S!==i||l!==0&&S.nodeType!==3||(o=c+l),S.nodeType===3&&(c+=S.nodeValue.length),(b=S.firstChild)!==null;)h=S,S=b;for(;;){if(S===e)break t;if(h===a&&++p===n&&(r=c),h===i&&++v===l&&(o=c),(b=S.nextSibling)!==null)break;S=h,h=S.parentNode}S=b}a=r===-1||o===-1?null:{start:r,end:o}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vu={focusedElem:e,selectionRange:a},Hi=!1,Ne=t;Ne!==null;)if(t=Ne,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ne=e;else for(;Ne!==null;){switch(t=Ne,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var D=qa(a.type,n);e=l.getSnapshotBeforeUpdate(D,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(B){ne(a,a.return,B)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Ju(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ju(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Ne=e;break}Ne=t.return}}function $s(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Qt(e,a),l&4&&nn(5,a);break;case 1:if(Qt(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){ne(a,a.return,c)}else{var n=qa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){ne(a,a.return,c)}}l&64&&Vs(a),l&512&&cn(a,a.return);break;case 3:if(Qt(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Ho(e,t)}catch(c){ne(a,a.return,c)}}break;case 27:t===null&&l&4&&Ws(a);case 26:case 5:Qt(e,a),t===null&&l&4&&Ks(a),l&512&&cn(a,a.return);break;case 12:Qt(e,a);break;case 31:Qt(e,a),l&4&&e0(e,a);break;case 13:Qt(e,a),l&4&&t0(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=f2.bind(null,a),_2(e,a))));break;case 22:if(l=a.memoizedState!==null||Gt,!l){t=t!==null&&t.memoizedState!==null||je,n=Gt;var i=je;Gt=l,(je=t)&&!i?Vt(e,a,(a.subtreeFlags&8772)!==0):Qt(e,a),Gt=n,je=i}break;case 30:break;default:Qt(e,a)}}function Is(e){var t=e.alternate;t!==null&&(e.alternate=null,Is(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Pi(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ge=null,Xe=!1;function Xt(e,t,a){for(a=a.child;a!==null;)Ps(e,t,a),a=a.sibling}function Ps(e,t,a){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(Dl,a)}catch{}switch(a.tag){case 26:je||Et(a,t),Xt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:je||Et(a,t);var l=ge,n=Xe;pa(a.type)&&(ge=a.stateNode,Xe=!1),Xt(e,t,a),pn(a.stateNode),ge=l,Xe=n;break;case 5:je||Et(a,t);case 6:if(l=ge,n=Xe,ge=null,Xt(e,t,a),ge=l,Xe=n,ge!==null)if(Xe)try{(ge.nodeType===9?ge.body:ge.nodeName==="HTML"?ge.ownerDocument.body:ge).removeChild(a.stateNode)}catch(i){ne(a,t,i)}else try{ge.removeChild(a.stateNode)}catch(i){ne(a,t,i)}break;case 18:ge!==null&&(Xe?(e=ge,V0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Nl(e)):V0(ge,a.stateNode));break;case 4:l=ge,n=Xe,ge=a.stateNode.containerInfo,Xe=!0,Xt(e,t,a),ge=l,Xe=n;break;case 0:case 11:case 14:case 15:ra(2,a,t),je||ra(4,a,t),Xt(e,t,a);break;case 1:je||(Et(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Zs(a,t,l)),Xt(e,t,a);break;case 21:Xt(e,t,a);break;case 22:je=(l=je)||a.memoizedState!==null,Xt(e,t,a),je=l;break;default:Xt(e,t,a)}}function e0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Nl(e)}catch(a){ne(t,t.return,a)}}}function t0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Nl(e)}catch(a){ne(t,t.return,a)}}function l2(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Fs),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Fs),t;default:throw Error(s(435,e.tag))}}function pi(e,t){var a=l2(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=d2.bind(null,e,l);l.then(n,n)}})}function Qe(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,c=t,r=c;e:for(;r!==null;){switch(r.tag){case 27:if(pa(r.type)){ge=r.stateNode,Xe=!1;break e}break;case 5:ge=r.stateNode,Xe=!1;break e;case 3:case 4:ge=r.stateNode.containerInfo,Xe=!0;break e}r=r.return}if(ge===null)throw Error(s(160));Ps(i,c,n),ge=null,Xe=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)a0(t,e),t=t.sibling}var yt=null;function a0(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Qe(t,e),Ve(e),l&4&&(ra(3,e,e.return),nn(3,e),ra(5,e,e.return));break;case 1:Qe(t,e),Ve(e),l&512&&(je||a===null||Et(a,a.return)),l&64&&Gt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=yt;if(Qe(t,e),Ve(e),l&512&&(je||a===null||Et(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Ol]||i[Ee]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),_e(i,l,a),i[Ee]=e,Ae(i),l=i;break e;case"link":var c=af("link","href",n).get(l+(a.href||""));if(c){for(var r=0;r<c.length;r++)if(i=c[r],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(r,1);break t}}i=n.createElement(l),_e(i,l,a),n.head.appendChild(i);break;case"meta":if(c=af("meta","content",n).get(l+(a.content||""))){for(r=0;r<c.length;r++)if(i=c[r],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(r,1);break t}}i=n.createElement(l),_e(i,l,a),n.head.appendChild(i);break;default:throw Error(s(468,l))}i[Ee]=e,Ae(i),l=i}e.stateNode=l}else lf(n,e.type,e.stateNode);else e.stateNode=tf(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?lf(n,e.type,e.stateNode):tf(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&xu(e,e.memoizedProps,a.memoizedProps)}break;case 27:Qe(t,e),Ve(e),l&512&&(je||a===null||Et(a,a.return)),a!==null&&l&4&&xu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Qe(t,e),Ve(e),l&512&&(je||a===null||Et(a,a.return)),e.flags&32){n=e.stateNode;try{Wa(n,"")}catch(D){ne(e,e.return,D)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,xu(e,n,a!==null?a.memoizedProps:n)),l&1024&&(ju=!0);break;case 6:if(Qe(t,e),Ve(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(D){ne(e,e.return,D)}}break;case 3:if(_i=null,n=yt,yt=Di(t.containerInfo),Qe(t,e),yt=n,Ve(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Nl(t.containerInfo)}catch(D){ne(e,e.return,D)}ju&&(ju=!1,l0(e));break;case 4:l=yt,yt=Di(e.stateNode.containerInfo),Qe(t,e),Ve(e),yt=l;break;case 12:Qe(t,e),Ve(e);break;case 31:Qe(t,e),Ve(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,pi(e,l)));break;case 13:Qe(t,e),Ve(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(bi=Fe()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,pi(e,l)));break;case 22:n=e.memoizedState!==null;var o=a!==null&&a.memoizedState!==null,p=Gt,v=je;if(Gt=p||n,je=v||o,Qe(t,e),je=v,Gt=p,Ve(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||o||Gt||je||Ya(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){o=a=t;try{if(i=o.stateNode,n)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{r=o.stateNode;var S=o.memoizedProps.style,h=S!=null&&S.hasOwnProperty("display")?S.display:null;r.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(D){ne(o,o.return,D)}}}else if(t.tag===6){if(a===null){o=t;try{o.stateNode.nodeValue=n?"":o.memoizedProps}catch(D){ne(o,o.return,D)}}}else if(t.tag===18){if(a===null){o=t;try{var b=o.stateNode;n?Z0(b,!0):Z0(o.stateNode,!1)}catch(D){ne(o,o.return,D)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,pi(e,a))));break;case 19:Qe(t,e),Ve(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,pi(e,l)));break;case 30:break;case 21:break;default:Qe(t,e),Ve(e)}}function Ve(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Js(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var n=a.stateNode,i=Su(e);gi(e,i,n);break;case 5:var c=a.stateNode;a.flags&32&&(Wa(c,""),a.flags&=-33);var r=Su(e);gi(e,r,c);break;case 3:case 4:var o=a.stateNode.containerInfo,p=Su(e);zu(e,p,o);break;default:throw Error(s(161))}}catch(v){ne(e,e.return,v)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function l0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;l0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Qt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)$s(e,t.alternate,t),t=t.sibling}function Ya(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ra(4,t,t.return),Ya(t);break;case 1:Et(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Zs(t,t.return,a),Ya(t);break;case 27:pn(t.stateNode);case 26:case 5:Et(t,t.return),Ya(t);break;case 22:t.memoizedState===null&&Ya(t);break;case 30:Ya(t);break;default:Ya(t)}e=e.sibling}}function Vt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,c=i.flags;switch(i.tag){case 0:case 11:case 15:Vt(n,i,a),nn(4,i);break;case 1:if(Vt(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(p){ne(l,l.return,p)}if(l=i,n=l.updateQueue,n!==null){var r=l.stateNode;try{var o=n.shared.hiddenCallbacks;if(o!==null)for(n.shared.hiddenCallbacks=null,n=0;n<o.length;n++)Uo(o[n],r)}catch(p){ne(l,l.return,p)}}a&&c&64&&Vs(i),cn(i,i.return);break;case 27:Ws(i);case 26:case 5:Vt(n,i,a),a&&l===null&&c&4&&Ks(i),cn(i,i.return);break;case 12:Vt(n,i,a);break;case 31:Vt(n,i,a),a&&c&4&&e0(n,i);break;case 13:Vt(n,i,a),a&&c&4&&t0(n,i);break;case 22:i.memoizedState===null&&Vt(n,i,a),cn(i,i.return);break;case 30:break;default:Vt(n,i,a)}t=t.sibling}}function Mu(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Vl(a))}function Au(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Vl(e))}function xt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)n0(e,t,a,l),t=t.sibling}function n0(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:xt(e,t,a,l),n&2048&&nn(9,t);break;case 1:xt(e,t,a,l);break;case 3:xt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Vl(e)));break;case 12:if(n&2048){xt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,c=i.id,r=i.onPostCommit;typeof r=="function"&&r(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(o){ne(t,t.return,o)}}else xt(e,t,a,l);break;case 31:xt(e,t,a,l);break;case 13:xt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,c=t.alternate,t.memoizedState!==null?i._visibility&2?xt(e,t,a,l):un(e,t):i._visibility&2?xt(e,t,a,l):(i._visibility|=2,pl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Mu(c,t);break;case 24:xt(e,t,a,l),n&2048&&Au(t.alternate,t);break;default:xt(e,t,a,l)}}function pl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,c=t,r=a,o=l,p=c.flags;switch(c.tag){case 0:case 11:case 15:pl(i,c,r,o,n),nn(8,c);break;case 23:break;case 22:var v=c.stateNode;c.memoizedState!==null?v._visibility&2?pl(i,c,r,o,n):un(i,c):(v._visibility|=2,pl(i,c,r,o,n)),n&&p&2048&&Mu(c.alternate,c);break;case 24:pl(i,c,r,o,n),n&&p&2048&&Au(c.alternate,c);break;default:pl(i,c,r,o,n)}t=t.sibling}}function un(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:un(a,l),n&2048&&Mu(l.alternate,l);break;case 24:un(a,l),n&2048&&Au(l.alternate,l);break;default:un(a,l)}t=t.sibling}}var rn=8192;function hl(e,t,a){if(e.subtreeFlags&rn)for(e=e.child;e!==null;)i0(e,t,a),e=e.sibling}function i0(e,t,a){switch(e.tag){case 26:hl(e,t,a),e.flags&rn&&e.memoizedState!==null&&X2(a,yt,e.memoizedState,e.memoizedProps);break;case 5:hl(e,t,a);break;case 3:case 4:var l=yt;yt=Di(e.stateNode.containerInfo),hl(e,t,a),yt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=rn,rn=16777216,hl(e,t,a),rn=l):hl(e,t,a));break;default:hl(e,t,a)}}function c0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function on(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ne=l,r0(l,e)}c0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)u0(e),e=e.sibling}function u0(e){switch(e.tag){case 0:case 11:case 15:on(e),e.flags&2048&&ra(9,e,e.return);break;case 3:on(e);break;case 12:on(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,hi(e)):on(e);break;default:on(e)}}function hi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ne=l,r0(l,e)}c0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ra(8,t,t.return),hi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,hi(t));break;default:hi(t)}e=e.sibling}}function r0(e,t){for(;Ne!==null;){var a=Ne;switch(a.tag){case 0:case 11:case 15:ra(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Vl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ne=l;else e:for(a=e;Ne!==null;){l=Ne;var n=l.sibling,i=l.return;if(Is(l),l===a){Ne=null;break e}if(n!==null){n.return=i,Ne=n;break e}Ne=i}}}var n2={getCacheForType:function(e){var t=De(xe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return De(xe).controller.signal}},i2=typeof WeakMap=="function"?WeakMap:Map,P=0,se=null,V=null,K=0,le=0,lt=null,oa=!1,bl=!1,Nu=!1,Zt=0,he=0,sa=0,La=0,Eu=0,nt=0,vl=0,sn=null,Ze=null,Tu=!1,bi=0,o0=0,vi=1/0,yi=null,fa=null,Me=0,da=null,yl=null,Kt=0,Du=0,wu=null,s0=null,fn=0,_u=null;function it(){return(P&2)!==0&&K!==0?K&-K:y.T!==null?Ru():Ar()}function f0(){if(nt===0)if((K&536870912)===0||F){var e=En;En<<=1,(En&3932160)===0&&(En=262144),nt=e}else nt=536870912;return e=tt.current,e!==null&&(e.flags|=32),nt}function Ke(e,t,a){(e===se&&(le===2||le===9)||e.cancelPendingCommit!==null)&&(xl(e,0),ma(e,K,nt,!1)),_l(e,a),((P&2)===0||e!==se)&&(e===se&&((P&2)===0&&(La|=a),he===4&&ma(e,K,nt,!1)),Tt(e))}function d0(e,t,a){if((P&6)!==0)throw Error(s(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||wl(e,t),n=l?r2(e,t):Cu(e,t,!0),i=l;do{if(n===0){bl&&!l&&ma(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!c2(a)){n=Cu(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var r=e;n=sn;var o=r.current.memoizedState.isDehydrated;if(o&&(xl(r,c).flags|=256),c=Cu(r,c,!1),c!==2){if(Nu&&!o){r.errorRecoveryDisabledLanes|=i,La|=i,n=4;break e}i=Ze,Ze=n,i!==null&&(Ze===null?Ze=i:Ze.push.apply(Ze,i))}n=c}if(i=!1,n!==2)continue}}if(n===1){xl(e,0),ma(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:ma(l,t,nt,!oa);break e;case 2:Ze=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(n=bi+300-Fe(),10<n)){if(ma(l,t,nt,!oa),Dn(l,0,!0)!==0)break e;Kt=t,l.timeoutHandle=X0(m0.bind(null,l,a,Ze,yi,Tu,t,nt,La,vl,oa,i,"Throttled",-0,0),n);break e}m0(l,a,Ze,yi,Tu,t,nt,La,vl,oa,i,null,-0,0)}}break}while(!0);Tt(e)}function m0(e,t,a,l,n,i,c,r,o,p,v,S,h,b){if(e.timeoutHandle=-1,S=t.subtreeFlags,S&8192||(S&16785408)===16785408){S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ot},i0(t,i,S);var D=(i&62914560)===i?bi-Fe():(i&4194048)===i?o0-Fe():0;if(D=Q2(S,D),D!==null){Kt=i,e.cancelPendingCommit=D(S0.bind(null,e,t,i,a,l,n,c,r,o,v,S,null,h,b)),ma(e,i,c,!p);return}}S0(e,t,i,a,l,n,c,r,o)}function c2(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!Pe(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ma(e,t,a,l){t&=~Eu,t&=~La,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-Ie(n),c=1<<i;l[i]=-1,n&=~c}a!==0&&zr(e,a,t)}function xi(){return(P&6)===0?(dn(0),!1):!0}function Ou(){if(V!==null){if(le===0)var e=V.return;else e=V,Bt=_a=null,Jc(e),sl=null,Kl=0,e=V;for(;e!==null;)Qs(e.alternate,e),e=e.return;V=null}}function xl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,N2(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Kt=0,Ou(),se=e,V=a=Ut(e.current,null),K=t,le=0,lt=null,oa=!1,bl=wl(e,t),Nu=!1,vl=nt=Eu=La=sa=he=0,Ze=sn=null,Tu=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-Ie(l),i=1<<n;t|=e[n],l&=~i}return Zt=t,kn(),a}function g0(e,t){G=null,y.H=tn,t===ol||t===Wn?(t=wo(),le=3):t===Bc?(t=wo(),le=4):le=t===su?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,lt=t,V===null&&(he=1,oi(e,st(t,e.current)))}function p0(){var e=tt.current;return e===null?!0:(K&4194048)===K?gt===null:(K&62914560)===K||(K&536870912)!==0?e===gt:!1}function h0(){var e=y.H;return y.H=tn,e===null?tn:e}function b0(){var e=y.A;return y.A=n2,e}function Si(){he=4,oa||(K&4194048)!==K&&tt.current!==null||(bl=!0),(sa&134217727)===0&&(La&134217727)===0||se===null||ma(se,K,nt,!1)}function Cu(e,t,a){var l=P;P|=2;var n=h0(),i=b0();(se!==e||K!==t)&&(yi=null,xl(e,t)),t=!1;var c=he;e:do try{if(le!==0&&V!==null){var r=V,o=lt;switch(le){case 8:Ou(),c=6;break e;case 3:case 2:case 9:case 6:tt.current===null&&(t=!0);var p=le;if(le=0,lt=null,Sl(e,r,o,p),a&&bl){c=0;break e}break;default:p=le,le=0,lt=null,Sl(e,r,o,p)}}u2(),c=he;break}catch(v){g0(e,v)}while(!0);return t&&e.shellSuspendCounter++,Bt=_a=null,P=l,y.H=n,y.A=i,V===null&&(se=null,K=0,kn()),c}function u2(){for(;V!==null;)v0(V)}function r2(e,t){var a=P;P|=2;var l=h0(),n=b0();se!==e||K!==t?(yi=null,vi=Fe()+500,xl(e,t)):bl=wl(e,t);e:do try{if(le!==0&&V!==null){t=V;var i=lt;t:switch(le){case 1:le=0,lt=null,Sl(e,t,i,1);break;case 2:case 9:if(To(i)){le=0,lt=null,y0(t);break}t=function(){le!==2&&le!==9||se!==e||(le=7),Tt(e)},i.then(t,t);break e;case 3:le=7;break e;case 4:le=5;break e;case 7:To(i)?(le=0,lt=null,y0(t)):(le=0,lt=null,Sl(e,t,i,7));break;case 5:var c=null;switch(V.tag){case 26:c=V.memoizedState;case 5:case 27:var r=V;if(c?nf(c):r.stateNode.complete){le=0,lt=null;var o=r.sibling;if(o!==null)V=o;else{var p=r.return;p!==null?(V=p,zi(p)):V=null}break t}}le=0,lt=null,Sl(e,t,i,5);break;case 6:le=0,lt=null,Sl(e,t,i,6);break;case 8:Ou(),he=6;break e;default:throw Error(s(462))}}o2();break}catch(v){g0(e,v)}while(!0);return Bt=_a=null,y.H=l,y.A=n,P=a,V!==null?0:(se=null,K=0,kn(),he)}function o2(){for(;V!==null&&!Of();)v0(V)}function v0(e){var t=Gs(e.alternate,e,Zt);e.memoizedProps=e.pendingProps,t===null?zi(e):V=t}function y0(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Bs(a,t,t.pendingProps,t.type,void 0,K);break;case 11:t=Bs(a,t,t.pendingProps,t.type.render,t.ref,K);break;case 5:Jc(t);default:Qs(a,t),t=V=bo(t,Zt),t=Gs(a,t,Zt)}e.memoizedProps=e.pendingProps,t===null?zi(e):V=t}function Sl(e,t,a,l){Bt=_a=null,Jc(t),sl=null,Kl=0;var n=t.return;try{if($1(e,n,t,a,K)){he=1,oi(e,st(a,e.current)),V=null;return}}catch(i){if(n!==null)throw V=n,i;he=1,oi(e,st(a,e.current)),V=null;return}t.flags&32768?(F||l===1?e=!0:bl||(K&536870912)!==0?e=!1:(oa=e=!0,(l===2||l===9||l===3||l===6)&&(l=tt.current,l!==null&&l.tag===13&&(l.flags|=16384))),x0(t,e)):zi(t)}function zi(e){var t=e;do{if((t.flags&32768)!==0){x0(t,oa);return}e=t.return;var a=e2(t.alternate,t,Zt);if(a!==null){V=a;return}if(t=t.sibling,t!==null){V=t;return}V=t=e}while(t!==null);he===0&&(he=5)}function x0(e,t){do{var a=t2(e.alternate,e);if(a!==null){a.flags&=32767,V=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){V=e;return}V=e=a}while(e!==null);he=6,V=null}function S0(e,t,a,l,n,i,c,r,o){e.cancelPendingCommit=null;do ji();while(Me!==0);if((P&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(i=t.lanes|t.childLanes,i|=Sc,Gf(e,a,i,c,r,o),e===se&&(V=se=null,K=0),yl=t,da=e,Kt=a,Du=i,wu=n,s0=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,m2(An,function(){return N0(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=y.T,y.T=null,n=N.p,N.p=2,c=P,P|=4;try{a2(e,t,a)}finally{P=c,N.p=n,y.T=l}}Me=1,z0(),j0(),M0()}}function z0(){if(Me===1){Me=0;var e=da,t=yl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=y.T,y.T=null;var l=N.p;N.p=2;var n=P;P|=4;try{a0(t,e);var i=Vu,c=uo(e.containerInfo),r=i.focusedElem,o=i.selectionRange;if(c!==r&&r&&r.ownerDocument&&co(r.ownerDocument.documentElement,r)){if(o!==null&&hc(r)){var p=o.start,v=o.end;if(v===void 0&&(v=p),"selectionStart"in r)r.selectionStart=p,r.selectionEnd=Math.min(v,r.value.length);else{var S=r.ownerDocument||document,h=S&&S.defaultView||window;if(h.getSelection){var b=h.getSelection(),D=r.textContent.length,B=Math.min(o.start,D),re=o.end===void 0?B:Math.min(o.end,D);!b.extend&&B>re&&(c=re,re=B,B=c);var m=io(r,B),f=io(r,re);if(m&&f&&(b.rangeCount!==1||b.anchorNode!==m.node||b.anchorOffset!==m.offset||b.focusNode!==f.node||b.focusOffset!==f.offset)){var g=S.createRange();g.setStart(m.node,m.offset),b.removeAllRanges(),B>re?(b.addRange(g),b.extend(f.node,f.offset)):(g.setEnd(f.node,f.offset),b.addRange(g))}}}}for(S=[],b=r;b=b.parentNode;)b.nodeType===1&&S.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<S.length;r++){var x=S[r];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}Hi=!!Qu,Vu=Qu=null}finally{P=n,N.p=l,y.T=a}}e.current=t,Me=2}}function j0(){if(Me===2){Me=0;var e=da,t=yl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=y.T,y.T=null;var l=N.p;N.p=2;var n=P;P|=4;try{$s(e,t.alternate,t)}finally{P=n,N.p=l,y.T=a}}Me=3}}function M0(){if(Me===4||Me===3){Me=0,Cf();var e=da,t=yl,a=Kt,l=s0;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Me=5:(Me=0,yl=da=null,A0(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(fa=null),$i(a),t=t.stateNode,$e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(Dl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=y.T,n=N.p,N.p=2,y.T=null;try{for(var i=e.onRecoverableError,c=0;c<l.length;c++){var r=l[c];i(r.value,{componentStack:r.stack})}}finally{y.T=t,N.p=n}}(Kt&3)!==0&&ji(),Tt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===_u?fn++:(fn=0,_u=e):fn=0,dn(0)}}function A0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Vl(t)))}function ji(){return z0(),j0(),M0(),N0()}function N0(){if(Me!==5)return!1;var e=da,t=Du;Du=0;var a=$i(Kt),l=y.T,n=N.p;try{N.p=32>a?32:a,y.T=null,a=wu,wu=null;var i=da,c=Kt;if(Me=0,yl=da=null,Kt=0,(P&6)!==0)throw Error(s(331));var r=P;if(P|=4,u0(i.current),n0(i,i.current,c,a),P=r,dn(0,!1),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(Dl,i)}catch{}return!0}finally{N.p=n,y.T=l,A0(e,t)}}function E0(e,t,a){t=st(a,t),t=ou(e.stateNode,t,2),e=ia(e,t,2),e!==null&&(_l(e,2),Tt(e))}function ne(e,t,a){if(e.tag===3)E0(e,e,a);else for(;t!==null;){if(t.tag===3){E0(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(fa===null||!fa.has(l))){e=st(a,e),a=Ts(2),l=ia(t,a,2),l!==null&&(Ds(a,l,t,e),_l(l,2),Tt(l));break}}t=t.return}}function Uu(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new i2;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Nu=!0,n.add(a),e=s2.bind(null,e,t,a),t.then(e,e))}function s2(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,se===e&&(K&a)===a&&(he===4||he===3&&(K&62914560)===K&&300>Fe()-bi?(P&2)===0&&xl(e,0):Eu|=a,vl===K&&(vl=0)),Tt(e)}function T0(e,t){t===0&&(t=Sr()),e=Ta(e,t),e!==null&&(_l(e,t),Tt(e))}function f2(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),T0(e,a)}function d2(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(t),T0(e,a)}function m2(e,t){return Ki(e,t)}var Mi=null,zl=null,Hu=!1,Ai=!1,Bu=!1,ga=0;function Tt(e){e!==zl&&e.next===null&&(zl===null?Mi=zl=e:zl=zl.next=e),Ai=!0,Hu||(Hu=!0,p2())}function dn(e,t){if(!Bu&&Ai){Bu=!0;do for(var a=!1,l=Mi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var c=l.suspendedLanes,r=l.pingedLanes;i=(1<<31-Ie(42|e)+1)-1,i&=n&~(c&~r),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,O0(l,i))}else i=K,i=Dn(l,l===se?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||wl(l,i)||(a=!0,O0(l,i));l=l.next}while(a);Bu=!1}}function g2(){D0()}function D0(){Ai=Hu=!1;var e=0;ga!==0&&A2()&&(e=ga);for(var t=Fe(),a=null,l=Mi;l!==null;){var n=l.next,i=w0(l,t);i===0?(l.next=null,a===null?Mi=n:a.next=n,n===null&&(zl=a)):(a=l,(e!==0||(i&3)!==0)&&(Ai=!0)),l=n}Me!==0&&Me!==5||dn(e),ga!==0&&(ga=0)}function w0(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var c=31-Ie(i),r=1<<c,o=n[c];o===-1?((r&a)===0||(r&l)!==0)&&(n[c]=kf(r,t)):o<=t&&(e.expiredLanes|=r),i&=~r}if(t=se,a=K,a=Dn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(le===2||le===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Ji(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||wl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Ji(l),$i(a)){case 2:case 8:a=yr;break;case 32:a=An;break;case 268435456:a=xr;break;default:a=An}return l=_0.bind(null,e),a=Ki(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Ji(l),e.callbackPriority=2,e.callbackNode=null,2}function _0(e,t){if(Me!==0&&Me!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ji()&&e.callbackNode!==a)return null;var l=K;return l=Dn(e,e===se?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(d0(e,l,t),w0(e,Fe()),e.callbackNode!=null&&e.callbackNode===a?_0.bind(null,e):null)}function O0(e,t){if(ji())return null;d0(e,t,!0)}function p2(){E2(function(){(P&6)!==0?Ki(vr,g2):D0()})}function Ru(){if(ga===0){var e=ul;e===0&&(e=Nn,Nn<<=1,(Nn&261888)===0&&(Nn=256)),ga=e}return ga}function C0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Cn(""+e)}function U0(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function h2(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=C0((n[ke]||null).action),c=l.submitter;c&&(t=(t=c[ke]||null)?C0(t.formAction):c.getAttribute("formAction"),t!==null&&(i=t,c=null));var r=new Rn("action","action",null,l,n);e.push({event:r,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ga!==0){var o=c?U0(n,c):new FormData(n);lu(a,{pending:!0,data:o,method:n.method,action:i},null,o)}}else typeof i=="function"&&(r.preventDefault(),o=c?U0(n,c):new FormData(n),lu(a,{pending:!0,data:o,method:n.method,action:i},i,o))},currentTarget:n}]})}}for(var qu=0;qu<xc.length;qu++){var Yu=xc[qu],b2=Yu.toLowerCase(),v2=Yu[0].toUpperCase()+Yu.slice(1);vt(b2,"on"+v2)}vt(so,"onAnimationEnd"),vt(fo,"onAnimationIteration"),vt(mo,"onAnimationStart"),vt("dblclick","onDoubleClick"),vt("focusin","onFocus"),vt("focusout","onBlur"),vt(U1,"onTransitionRun"),vt(H1,"onTransitionStart"),vt(B1,"onTransitionCancel"),vt(go,"onTransitionEnd"),Ka("onMouseEnter",["mouseout","mouseover"]),Ka("onMouseLeave",["mouseout","mouseover"]),Ka("onPointerEnter",["pointerout","pointerover"]),Ka("onPointerLeave",["pointerout","pointerover"]),Ma("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ma("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ma("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ma("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ma("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ma("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mn));function H0(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var c=l.length-1;0<=c;c--){var r=l[c],o=r.instance,p=r.currentTarget;if(r=r.listener,o!==i&&n.isPropagationStopped())break e;i=r,n.currentTarget=p;try{i(n)}catch(v){Ln(v)}n.currentTarget=null,i=o}else for(c=0;c<l.length;c++){if(r=l[c],o=r.instance,p=r.currentTarget,r=r.listener,o!==i&&n.isPropagationStopped())break e;i=r,n.currentTarget=p;try{i(n)}catch(v){Ln(v)}n.currentTarget=null,i=o}}}}function Z(e,t){var a=t[Ii];a===void 0&&(a=t[Ii]=new Set);var l=e+"__bubble";a.has(l)||(B0(t,e,2,!1),a.add(l))}function Lu(e,t,a){var l=0;t&&(l|=4),B0(a,e,l,t)}var Ni="_reactListening"+Math.random().toString(36).slice(2);function ku(e){if(!e[Ni]){e[Ni]=!0,Tr.forEach(function(a){a!=="selectionchange"&&(y2.has(a)||Lu(a,!1,e),Lu(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ni]||(t[Ni]=!0,Lu("selectionchange",!1,t))}}function B0(e,t,a,l){switch(df(t)){case 2:var n=K2;break;case 8:n=J2;break;default:n=ar}a=n.bind(null,t,a,e),n=void 0,!uc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Gu(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var r=l.stateNode.containerInfo;if(r===n)break;if(c===4)for(c=l.return;c!==null;){var o=c.tag;if((o===3||o===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;r!==null;){if(c=Qa(r),c===null)return;if(o=c.tag,o===5||o===6||o===26||o===27){l=i=c;continue e}r=r.parentNode}}l=l.return}Lr(function(){var p=i,v=ic(a),S=[];e:{var h=po.get(e);if(h!==void 0){var b=Rn,D=e;switch(e){case"keypress":if(Hn(a)===0)break e;case"keydown":case"keyup":b=d1;break;case"focusin":D="focus",b=fc;break;case"focusout":D="blur",b=fc;break;case"beforeblur":case"afterblur":b=fc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Xr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=e1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=p1;break;case so:case fo:case mo:b=l1;break;case go:b=b1;break;case"scroll":case"scrollend":b=If;break;case"wheel":b=y1;break;case"copy":case"cut":case"paste":b=i1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Vr;break;case"toggle":case"beforetoggle":b=S1}var B=(t&4)!==0,re=!B&&(e==="scroll"||e==="scrollend"),m=B?h!==null?h+"Capture":null:h;B=[];for(var f=p,g;f!==null;){var x=f;if(g=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||g===null||m===null||(x=Ul(f,m),x!=null&&B.push(gn(f,x,g))),re)break;f=f.return}0<B.length&&(h=new b(h,D,null,a,v),S.push({event:h,listeners:B}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",h&&a!==nc&&(D=a.relatedTarget||a.fromElement)&&(Qa(D)||D[Xa]))break e;if((b||h)&&(h=v.window===v?v:(h=v.ownerDocument)?h.defaultView||h.parentWindow:window,b?(D=a.relatedTarget||a.toElement,b=p,D=D?Qa(D):null,D!==null&&(re=Y(D),B=D.tag,D!==re||B!==5&&B!==27&&B!==6)&&(D=null)):(b=null,D=p),b!==D)){if(B=Xr,x="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(B=Vr,x="onPointerLeave",m="onPointerEnter",f="pointer"),re=b==null?h:Cl(b),g=D==null?h:Cl(D),h=new B(x,f+"leave",b,a,v),h.target=re,h.relatedTarget=g,x=null,Qa(v)===p&&(B=new B(m,f+"enter",D,a,v),B.target=g,B.relatedTarget=re,x=B),re=x,b&&D)t:{for(B=x2,m=b,f=D,g=0,x=m;x;x=B(x))g++;x=0;for(var U=f;U;U=B(U))x++;for(;0<g-x;)m=B(m),g--;for(;0<x-g;)f=B(f),x--;for(;g--;){if(m===f||f!==null&&m===f.alternate){B=m;break t}m=B(m),f=B(f)}B=null}else B=null;b!==null&&R0(S,h,b,B,!1),D!==null&&re!==null&&R0(S,re,D,B,!0)}}e:{if(h=p?Cl(p):window,b=h.nodeName&&h.nodeName.toLowerCase(),b==="select"||b==="input"&&h.type==="file")var $=Pr;else if($r(h))if(eo)$=_1;else{$=D1;var O=T1}else b=h.nodeName,!b||b.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?p&&lc(p.elementType)&&($=Pr):$=w1;if($&&($=$(e,p))){Ir(S,$,a,v);break e}O&&O(e,h,p),e==="focusout"&&p&&h.type==="number"&&p.memoizedProps.value!=null&&ac(h,"number",h.value)}switch(O=p?Cl(p):window,e){case"focusin":($r(O)||O.contentEditable==="true")&&(Pa=O,bc=p,Gl=null);break;case"focusout":Gl=bc=Pa=null;break;case"mousedown":vc=!0;break;case"contextmenu":case"mouseup":case"dragend":vc=!1,ro(S,a,v);break;case"selectionchange":if(C1)break;case"keydown":case"keyup":ro(S,a,v)}var X;if(mc)e:{switch(e){case"compositionstart":var J="onCompositionStart";break e;case"compositionend":J="onCompositionEnd";break e;case"compositionupdate":J="onCompositionUpdate";break e}J=void 0}else Ia?Wr(e,a)&&(J="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(J="onCompositionStart");J&&(Zr&&a.locale!=="ko"&&(Ia||J!=="onCompositionStart"?J==="onCompositionEnd"&&Ia&&(X=kr()):(It=v,rc="value"in It?It.value:It.textContent,Ia=!0)),O=Ei(p,J),0<O.length&&(J=new Qr(J,e,null,a,v),S.push({event:J,listeners:O}),X?J.data=X:(X=Fr(a),X!==null&&(J.data=X)))),(X=j1?M1(e,a):A1(e,a))&&(J=Ei(p,"onBeforeInput"),0<J.length&&(O=new Qr("onBeforeInput","beforeinput",null,a,v),S.push({event:O,listeners:J}),O.data=X)),h2(S,e,p,a,v)}H0(S,t)})}function gn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ei(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ul(e,a),n!=null&&l.unshift(gn(e,n,i)),n=Ul(e,t),n!=null&&l.push(gn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function x2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function R0(e,t,a,l,n){for(var i=t._reactName,c=[];a!==null&&a!==l;){var r=a,o=r.alternate,p=r.stateNode;if(r=r.tag,o!==null&&o===l)break;r!==5&&r!==26&&r!==27||p===null||(o=p,n?(p=Ul(a,i),p!=null&&c.unshift(gn(a,p,o))):n||(p=Ul(a,i),p!=null&&c.push(gn(a,p,o)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var S2=/\r\n?/g,z2=/\u0000|\uFFFD/g;function q0(e){return(typeof e=="string"?e:""+e).replace(S2,`
`).replace(z2,"")}function Y0(e,t){return t=q0(t),q0(e)===t}function ue(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Wa(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Wa(e,""+l);break;case"className":_n(e,"class",l);break;case"tabIndex":_n(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":_n(e,a,l);break;case"style":qr(e,l,i);break;case"data":if(t!=="object"){_n(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Cn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&ue(e,t,"name",n.name,n,null),ue(e,t,"formEncType",n.formEncType,n,null),ue(e,t,"formMethod",n.formMethod,n,null),ue(e,t,"formTarget",n.formTarget,n,null)):(ue(e,t,"encType",n.encType,n,null),ue(e,t,"method",n.method,n,null),ue(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Cn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Ot);break;case"onScroll":l!=null&&Z("scroll",e);break;case"onScrollEnd":l!=null&&Z("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Cn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Z("beforetoggle",e),Z("toggle",e),wn(e,"popover",l);break;case"xlinkActuate":_t(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":_t(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":_t(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":_t(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":_t(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":_t(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":_t(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":_t(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":_t(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":wn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ff.get(a)||a,wn(e,a,l))}}function Xu(e,t,a,l,n,i){switch(a){case"style":qr(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Wa(e,l):(typeof l=="number"||typeof l=="bigint")&&Wa(e,""+l);break;case"onScroll":l!=null&&Z("scroll",e);break;case"onScrollEnd":l!=null&&Z("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Ot);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Dr.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[ke]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):wn(e,a,l)}}}function _e(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Z("error",e),Z("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];if(c!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:ue(e,t,i,c,a,null)}}n&&ue(e,t,"srcSet",a.srcSet,a,null),l&&ue(e,t,"src",a.src,a,null);return;case"input":Z("invalid",e);var r=i=c=n=null,o=null,p=null;for(l in a)if(a.hasOwnProperty(l)){var v=a[l];if(v!=null)switch(l){case"name":n=v;break;case"type":c=v;break;case"checked":o=v;break;case"defaultChecked":p=v;break;case"value":i=v;break;case"defaultValue":r=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(s(137,t));break;default:ue(e,t,l,v,a,null)}}Ur(e,i,r,o,p,c,n,!1);return;case"select":Z("invalid",e),l=c=i=null;for(n in a)if(a.hasOwnProperty(n)&&(r=a[n],r!=null))switch(n){case"value":i=r;break;case"defaultValue":c=r;break;case"multiple":l=r;default:ue(e,t,n,r,a,null)}t=i,a=c,e.multiple=!!l,t!=null?Ja(e,!!l,t,!1):a!=null&&Ja(e,!!l,a,!0);return;case"textarea":Z("invalid",e),i=n=l=null;for(c in a)if(a.hasOwnProperty(c)&&(r=a[c],r!=null))switch(c){case"value":l=r;break;case"defaultValue":n=r;break;case"children":i=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(s(91));break;default:ue(e,t,c,r,a,null)}Br(e,l,n,i);return;case"option":for(o in a)a.hasOwnProperty(o)&&(l=a[o],l!=null)&&(o==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":ue(e,t,o,l,a,null));return;case"dialog":Z("beforetoggle",e),Z("toggle",e),Z("cancel",e),Z("close",e);break;case"iframe":case"object":Z("load",e);break;case"video":case"audio":for(l=0;l<mn.length;l++)Z(mn[l],e);break;case"image":Z("error",e),Z("load",e);break;case"details":Z("toggle",e);break;case"embed":case"source":case"link":Z("error",e),Z("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in a)if(a.hasOwnProperty(p)&&(l=a[p],l!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:ue(e,t,p,l,a,null)}return;default:if(lc(t)){for(v in a)a.hasOwnProperty(v)&&(l=a[v],l!==void 0&&Xu(e,t,v,l,a,void 0));return}}for(r in a)a.hasOwnProperty(r)&&(l=a[r],l!=null&&ue(e,t,r,l,a,null))}function j2(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,c=null,r=null,o=null,p=null,v=null;for(b in a){var S=a[b];if(a.hasOwnProperty(b)&&S!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":o=S;default:l.hasOwnProperty(b)||ue(e,t,b,null,l,S)}}for(var h in l){var b=l[h];if(S=a[h],l.hasOwnProperty(h)&&(b!=null||S!=null))switch(h){case"type":i=b;break;case"name":n=b;break;case"checked":p=b;break;case"defaultChecked":v=b;break;case"value":c=b;break;case"defaultValue":r=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(137,t));break;default:b!==S&&ue(e,t,h,b,l,S)}}tc(e,c,r,o,p,v,i,n);return;case"select":b=c=r=h=null;for(i in a)if(o=a[i],a.hasOwnProperty(i)&&o!=null)switch(i){case"value":break;case"multiple":b=o;default:l.hasOwnProperty(i)||ue(e,t,i,null,l,o)}for(n in l)if(i=l[n],o=a[n],l.hasOwnProperty(n)&&(i!=null||o!=null))switch(n){case"value":h=i;break;case"defaultValue":r=i;break;case"multiple":c=i;default:i!==o&&ue(e,t,n,i,l,o)}t=r,a=c,l=b,h!=null?Ja(e,!!a,h,!1):!!l!=!!a&&(t!=null?Ja(e,!!a,t,!0):Ja(e,!!a,a?[]:"",!1));return;case"textarea":b=h=null;for(r in a)if(n=a[r],a.hasOwnProperty(r)&&n!=null&&!l.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:ue(e,t,r,null,l,n)}for(c in l)if(n=l[c],i=a[c],l.hasOwnProperty(c)&&(n!=null||i!=null))switch(c){case"value":h=n;break;case"defaultValue":b=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(s(91));break;default:n!==i&&ue(e,t,c,n,l,i)}Hr(e,h,b);return;case"option":for(var D in a)h=a[D],a.hasOwnProperty(D)&&h!=null&&!l.hasOwnProperty(D)&&(D==="selected"?e.selected=!1:ue(e,t,D,null,l,h));for(o in l)h=l[o],b=a[o],l.hasOwnProperty(o)&&h!==b&&(h!=null||b!=null)&&(o==="selected"?e.selected=h&&typeof h!="function"&&typeof h!="symbol":ue(e,t,o,h,l,b));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var B in a)h=a[B],a.hasOwnProperty(B)&&h!=null&&!l.hasOwnProperty(B)&&ue(e,t,B,null,l,h);for(p in l)if(h=l[p],b=a[p],l.hasOwnProperty(p)&&h!==b&&(h!=null||b!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(137,t));break;default:ue(e,t,p,h,l,b)}return;default:if(lc(t)){for(var re in a)h=a[re],a.hasOwnProperty(re)&&h!==void 0&&!l.hasOwnProperty(re)&&Xu(e,t,re,void 0,l,h);for(v in l)h=l[v],b=a[v],!l.hasOwnProperty(v)||h===b||h===void 0&&b===void 0||Xu(e,t,v,h,l,b);return}}for(var m in a)h=a[m],a.hasOwnProperty(m)&&h!=null&&!l.hasOwnProperty(m)&&ue(e,t,m,null,l,h);for(S in l)h=l[S],b=a[S],!l.hasOwnProperty(S)||h===b||h==null&&b==null||ue(e,t,S,h,l,b)}function L0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function M2(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,c=n.initiatorType,r=n.duration;if(i&&r&&L0(c)){for(c=0,r=n.responseEnd,l+=1;l<a.length;l++){var o=a[l],p=o.startTime;if(p>r)break;var v=o.transferSize,S=o.initiatorType;v&&L0(S)&&(o=o.responseEnd,c+=v*(o<r?1:(r-p)/(o-p)))}if(--l,t+=8*(i+c)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Qu=null,Vu=null;function Ti(e){return e.nodeType===9?e:e.ownerDocument}function k0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function G0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Zu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ku=null;function A2(){var e=window.event;return e&&e.type==="popstate"?e===Ku?!1:(Ku=e,!0):(Ku=null,!1)}var X0=typeof setTimeout=="function"?setTimeout:void 0,N2=typeof clearTimeout=="function"?clearTimeout:void 0,Q0=typeof Promise=="function"?Promise:void 0,E2=typeof queueMicrotask=="function"?queueMicrotask:typeof Q0<"u"?function(e){return Q0.resolve(null).then(e).catch(T2)}:X0;function T2(e){setTimeout(function(){throw e})}function pa(e){return e==="head"}function V0(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Nl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")pn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,pn(a);for(var i=a.firstChild;i;){var c=i.nextSibling,r=i.nodeName;i[Ol]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=c}}else a==="body"&&pn(e.ownerDocument.body);a=n}while(a);Nl(t)}function Z0(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Ju(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ju(a),Pi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function D2(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ol])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=pt(e.nextSibling),e===null)break}return null}function w2(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=pt(e.nextSibling),e===null))return null;return e}function K0(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=pt(e.nextSibling),e===null))return null;return e}function Wu(e){return e.data==="$?"||e.data==="$~"}function Fu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function _2(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var $u=null;function J0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return pt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function W0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function F0(e,t,a){switch(t=Ti(a),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function pn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Pi(e)}var ht=new Map,$0=new Set;function Di(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Jt=N.d;N.d={f:O2,r:C2,D:U2,C:H2,L:B2,m:R2,X:Y2,S:q2,M:L2};function O2(){var e=Jt.f(),t=xi();return e||t}function C2(e){var t=Va(e);t!==null&&t.tag===5&&t.type==="form"?gs(t):Jt.r(e)}var jl=typeof document>"u"?null:document;function I0(e,t,a){var l=jl;if(l&&typeof t=="string"&&t){var n=rt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),$0.has(n)||($0.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),_e(t,"link",e),Ae(t),l.head.appendChild(t)))}}function U2(e){Jt.D(e),I0("dns-prefetch",e,null)}function H2(e,t){Jt.C(e,t),I0("preconnect",e,t)}function B2(e,t,a){Jt.L(e,t,a);var l=jl;if(l&&e&&t){var n='link[rel="preload"][as="'+rt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+rt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+rt(a.imageSizes)+'"]')):n+='[href="'+rt(e)+'"]';var i=n;switch(t){case"style":i=Ml(e);break;case"script":i=Al(e)}ht.has(i)||(e=R({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),ht.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(hn(i))||t==="script"&&l.querySelector(bn(i))||(t=l.createElement("link"),_e(t,"link",e),Ae(t),l.head.appendChild(t)))}}function R2(e,t){Jt.m(e,t);var a=jl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+rt(l)+'"][href="'+rt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Al(e)}if(!ht.has(i)&&(e=R({rel:"modulepreload",href:e},t),ht.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bn(i)))return}l=a.createElement("link"),_e(l,"link",e),Ae(l),a.head.appendChild(l)}}}function q2(e,t,a){Jt.S(e,t,a);var l=jl;if(l&&e){var n=Za(l).hoistableStyles,i=Ml(e);t=t||"default";var c=n.get(i);if(!c){var r={loading:0,preload:null};if(c=l.querySelector(hn(i)))r.loading=5;else{e=R({rel:"stylesheet",href:e,"data-precedence":t},a),(a=ht.get(i))&&Iu(e,a);var o=c=l.createElement("link");Ae(o),_e(o,"link",e),o._p=new Promise(function(p,v){o.onload=p,o.onerror=v}),o.addEventListener("load",function(){r.loading|=1}),o.addEventListener("error",function(){r.loading|=2}),r.loading|=4,wi(c,t,l)}c={type:"stylesheet",instance:c,count:1,state:r},n.set(i,c)}}}function Y2(e,t){Jt.X(e,t);var a=jl;if(a&&e){var l=Za(a).hoistableScripts,n=Al(e),i=l.get(n);i||(i=a.querySelector(bn(n)),i||(e=R({src:e,async:!0},t),(t=ht.get(n))&&Pu(e,t),i=a.createElement("script"),Ae(i),_e(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function L2(e,t){Jt.M(e,t);var a=jl;if(a&&e){var l=Za(a).hoistableScripts,n=Al(e),i=l.get(n);i||(i=a.querySelector(bn(n)),i||(e=R({src:e,async:!0,type:"module"},t),(t=ht.get(n))&&Pu(e,t),i=a.createElement("script"),Ae(i),_e(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function P0(e,t,a,l){var n=(n=Q.current)?Di(n):null;if(!n)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ml(a.href),a=Za(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ml(a.href);var i=Za(n).hoistableStyles,c=i.get(e);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,c),(i=n.querySelector(hn(e)))&&!i._p&&(c.instance=i,c.state.loading=5),ht.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ht.set(e,a),i||k2(n,e,a,c.state))),t&&l===null)throw Error(s(528,""));return c}if(t&&l!==null)throw Error(s(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Al(a),a=Za(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ml(e){return'href="'+rt(e)+'"'}function hn(e){return'link[rel="stylesheet"]['+e+"]"}function ef(e){return R({},e,{"data-precedence":e.precedence,precedence:null})}function k2(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),_e(t,"link",a),Ae(t),e.head.appendChild(t))}function Al(e){return'[src="'+rt(e)+'"]'}function bn(e){return"script[async]"+e}function tf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+rt(a.href)+'"]');if(l)return t.instance=l,Ae(l),l;var n=R({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ae(l),_e(l,"style",n),wi(l,a.precedence,e),t.instance=l;case"stylesheet":n=Ml(a.href);var i=e.querySelector(hn(n));if(i)return t.state.loading|=4,t.instance=i,Ae(i),i;l=ef(a),(n=ht.get(n))&&Iu(l,n),i=(e.ownerDocument||e).createElement("link"),Ae(i);var c=i;return c._p=new Promise(function(r,o){c.onload=r,c.onerror=o}),_e(i,"link",l),t.state.loading|=4,wi(i,a.precedence,e),t.instance=i;case"script":return i=Al(a.src),(n=e.querySelector(bn(i)))?(t.instance=n,Ae(n),n):(l=a,(n=ht.get(i))&&(l=R({},a),Pu(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ae(n),_e(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,wi(l,a.precedence,e));return t.instance}function wi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,c=0;c<l.length;c++){var r=l[c];if(r.dataset.precedence===t)i=r;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Iu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Pu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var _i=null;function af(e,t,a){if(_i===null){var l=new Map,n=_i=new Map;n.set(a,l)}else n=_i,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Ol]||i[Ee]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(t)||"";c=e+c;var r=l.get(c);r?r.push(i):l.set(c,[i])}}return l}function lf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function G2(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function nf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function X2(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Ml(l.href),i=t.querySelector(hn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Oi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Ae(i);return}i=t.ownerDocument||t,l=ef(l),(n=ht.get(n))&&Iu(l,n),i=i.createElement("link"),Ae(i);var c=i;c._p=new Promise(function(r,o){c.onload=r,c.onerror=o}),_e(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Oi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var er=0;function Q2(e,t){return e.stylesheets&&e.count===0&&Ui(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Ui(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&er===0&&(er=62500*M2());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ui(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>er?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Oi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ui(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ci=null;function Ui(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ci=new Map,t.forEach(V2,e),Ci=null,Oi.call(e))}function V2(e,t){if(!(t.state.loading&4)){var a=Ci.get(e);if(a)var l=a.get(null);else{a=new Map,Ci.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var c=n[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),l=c)}l&&a.set(null,l)}n=t.instance,c=n.getAttribute("data-precedence"),i=a.get(c)||l,i===l&&a.set(null,n),a.set(c,n),this.count++,l=Oi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var vn={$$typeof:Oe,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function Z2(e,t,a,l,n,i,c,r,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wi(0),this.hiddenUpdates=Wi(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function cf(e,t,a,l,n,i,c,r,o,p,v,S){return e=new Z2(e,t,a,c,o,p,v,S,r),t=1,i===!0&&(t|=24),i=et(3,null,null,t),e.current=i,i.stateNode=e,t=Cc(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},Rc(i),e}function uf(e){return e?(e=al,e):al}function rf(e,t,a,l,n,i){n=uf(n),l.context===null?l.context=n:l.pendingContext=n,l=na(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ia(e,l,t),a!==null&&(Ke(a,e,t),Wl(a,e,t))}function of(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function tr(e,t){of(e,t),(e=e.alternate)&&of(e,t)}function sf(e){if(e.tag===13||e.tag===31){var t=Ta(e,67108864);t!==null&&Ke(t,e,67108864),tr(e,67108864)}}function ff(e){if(e.tag===13||e.tag===31){var t=it();t=Fi(t);var a=Ta(e,t);a!==null&&Ke(a,e,t),tr(e,t)}}var Hi=!0;function K2(e,t,a,l){var n=y.T;y.T=null;var i=N.p;try{N.p=2,ar(e,t,a,l)}finally{N.p=i,y.T=n}}function J2(e,t,a,l){var n=y.T;y.T=null;var i=N.p;try{N.p=8,ar(e,t,a,l)}finally{N.p=i,y.T=n}}function ar(e,t,a,l){if(Hi){var n=lr(l);if(n===null)Gu(e,t,l,Bi,a),mf(e,l);else if(F2(n,e,t,a,l))l.stopPropagation();else if(mf(e,l),t&4&&-1<W2.indexOf(e)){for(;n!==null;){var i=Va(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=ja(i.pendingLanes);if(c!==0){var r=i;for(r.pendingLanes|=2,r.entangledLanes|=2;c;){var o=1<<31-Ie(c);r.entanglements[1]|=o,c&=~o}Tt(i),(P&6)===0&&(vi=Fe()+500,dn(0))}}break;case 31:case 13:r=Ta(i,2),r!==null&&Ke(r,i,2),xi(),tr(i,2)}if(i=lr(l),i===null&&Gu(e,t,l,Bi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else Gu(e,t,l,null,a)}}function lr(e){return e=ic(e),nr(e)}var Bi=null;function nr(e){if(Bi=null,e=Qa(e),e!==null){var t=Y(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=ae(t),e!==null)return e;e=null}else if(a===31){if(e=C(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Bi=e,null}function df(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Uf()){case vr:return 2;case yr:return 8;case An:case Hf:return 32;case xr:return 268435456;default:return 32}default:return 32}}var ir=!1,ha=null,ba=null,va=null,yn=new Map,xn=new Map,ya=[],W2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function mf(e,t){switch(e){case"focusin":case"focusout":ha=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":va=null;break;case"pointerover":case"pointerout":yn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xn.delete(t.pointerId)}}function Sn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Va(t),t!==null&&sf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function F2(e,t,a,l,n){switch(t){case"focusin":return ha=Sn(ha,e,t,a,l,n),!0;case"dragenter":return ba=Sn(ba,e,t,a,l,n),!0;case"mouseover":return va=Sn(va,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return yn.set(i,Sn(yn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,xn.set(i,Sn(xn.get(i)||null,e,t,a,l,n)),!0}return!1}function gf(e){var t=Qa(e.target);if(t!==null){var a=Y(t);if(a!==null){if(t=a.tag,t===13){if(t=ae(a),t!==null){e.blockedOn=t,Nr(e.priority,function(){ff(a)});return}}else if(t===31){if(t=C(a),t!==null){e.blockedOn=t,Nr(e.priority,function(){ff(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ri(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=lr(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);nc=l,a.target.dispatchEvent(l),nc=null}else return t=Va(a),t!==null&&sf(t),e.blockedOn=a,!1;t.shift()}return!0}function pf(e,t,a){Ri(e)&&a.delete(t)}function $2(){ir=!1,ha!==null&&Ri(ha)&&(ha=null),ba!==null&&Ri(ba)&&(ba=null),va!==null&&Ri(va)&&(va=null),yn.forEach(pf),xn.forEach(pf)}function qi(e,t){e.blockedOn===t&&(e.blockedOn=null,ir||(ir=!0,j.unstable_scheduleCallback(j.unstable_NormalPriority,$2)))}var Yi=null;function hf(e){Yi!==e&&(Yi=e,j.unstable_scheduleCallback(j.unstable_NormalPriority,function(){Yi===e&&(Yi=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(nr(l||a)===null)continue;break}var i=Va(a);i!==null&&(e.splice(t,3),t-=3,lu(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Nl(e){function t(o){return qi(o,e)}ha!==null&&qi(ha,e),ba!==null&&qi(ba,e),va!==null&&qi(va,e),yn.forEach(t),xn.forEach(t);for(var a=0;a<ya.length;a++){var l=ya[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ya.length&&(a=ya[0],a.blockedOn===null);)gf(a),a.blockedOn===null&&ya.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],c=n[ke]||null;if(typeof i=="function")c||hf(a);else if(c){var r=null;if(i&&i.hasAttribute("formAction")){if(n=i,c=i[ke]||null)r=c.formAction;else if(nr(n)!==null)continue}else r=c.action;typeof r=="function"?a[l+1]=r:(a.splice(l,3),l-=3),hf(a)}}}function bf(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return n=c})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function cr(e){this._internalRoot=e}Li.prototype.render=cr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var a=t.current,l=it();rf(a,l,e,t,null,null)},Li.prototype.unmount=cr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rf(e.current,2,null,e,null,null),xi(),t[Xa]=null}};function Li(e){this._internalRoot=e}Li.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ar();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ya.length&&t!==0&&t<ya[a].priority;a++);ya.splice(a,0,e),a===0&&gf(e)}};var vf=A.version;if(vf!=="19.2.4")throw Error(s(527,vf,"19.2.4"));N.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=M(t),e=e!==null?ee(e):null,e=e===null?null:e.stateNode,e};var I2={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:y,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ki=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ki.isDisabled&&ki.supportsFiber)try{Dl=ki.inject(I2),$e=ki}catch{}}return jn.createRoot=function(e,t){if(!w(e))throw Error(s(299));var a=!1,l="",n=Ms,i=As,c=Ns;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=cf(e,1,!1,null,null,a,l,null,n,i,c,bf),e[Xa]=t.current,ku(e),new cr(t)},jn.hydrateRoot=function(e,t,a){if(!w(e))throw Error(s(299));var l=!1,n="",i=Ms,c=As,r=Ns,o=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(r=a.onRecoverableError),a.formState!==void 0&&(o=a.formState)),t=cf(e,1,!0,t,a??null,l,n,o,i,c,r,bf),t.context=uf(null),a=t.current,l=it(),l=Fi(l),n=na(l),n.callback=null,ia(a,n,l),a=l,t.current.lanes=a,_l(t,a),Tt(t),e[Xa]=t.current,ku(e),new Li(t)},jn.version="19.2.4",jn}var Tf;function rd(){if(Tf)return or.exports;Tf=1;function j(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j)}catch(A){console.error(A)}}return j(),or.exports=ud(),or.exports}var od=rd();const gr="/portfolio/assets/Gemini_Generated_Image_n8fs5qn8fs5qn8fs-Photoroom-C3DaP8dh.png",mr=[{label:"Home",target:"home"},{label:"About",target:"about"},{label:"Graphics",target:"graphics"},{label:"Dev",target:"dev"},{label:"Experience",target:"experience"},{label:"Tools",target:"tools"},{label:"Contact",target:"contact"}];function sd(){const[j,A]=St.useState(!1),[H,s]=St.useState(!1),[w,Y]=St.useState("home");St.useEffect(()=>{const C=()=>{s(window.scrollY>20);for(const T of[...mr].reverse()){const M=document.getElementById(T.target);if(M&&window.scrollY>=M.offsetTop-120){Y(T.target);break}}};return window.addEventListener("scroll",C),()=>window.removeEventListener("scroll",C)},[]),St.useEffect(()=>(document.body.style.overflow=j?"hidden":"",()=>{document.body.style.overflow=""}),[j]);const ae=C=>{const T=document.getElementById(C);T&&(T.scrollIntoView({behavior:"smooth"}),Y(C)),A(!1)};return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
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
      `}),u.jsx("header",{className:`header${H?" scrolled":""}`,children:u.jsxs("div",{className:"header-inner",children:[u.jsxs("button",{className:"logo",onClick:()=>ae("home"),children:[u.jsx("div",{className:"avatar-ring",children:u.jsx("div",{className:"avatar-inner",children:u.jsx("img",{src:gr,alt:"Marlon Ampoon"})})}),u.jsxs("div",{className:"logo-text",children:[u.jsx("span",{className:"logo-name",children:"Marlon Ampoon"}),u.jsx("span",{className:"logo-tagline",children:"Web Dev · Graphic Artist"})]})]}),u.jsxs("nav",{className:"nav-desktop",children:[mr.map(C=>u.jsx("button",{className:`nav-btn${w===C.target?" active":""}`,onClick:()=>ae(C.target),children:C.label},C.target)),u.jsx("button",{className:"cta-btn",onClick:()=>ae("contact"),children:"Hire Me"})]}),u.jsxs("button",{className:`hamburger${j?" open":""}`,onClick:()=>A(!j),"aria-label":"Toggle menu",children:[u.jsx("span",{}),u.jsx("span",{}),u.jsx("span",{})]})]})}),u.jsxs("div",{className:`mobile-menu${j?" open":""}`,children:[u.jsx("div",{className:"mobile-avatar",children:u.jsx("div",{className:"mobile-avatar-inner",children:u.jsx("img",{src:gr,alt:"Marlon Ampoon"})})}),mr.map(C=>u.jsx("button",{className:`mobile-nav-btn${w===C.target?" active":""}`,onClick:()=>ae(C.target),children:C.label},C.target)),u.jsx("div",{className:"mobile-divider"}),u.jsx("button",{className:"mobile-cta",onClick:()=>ae("contact"),children:"Hire Me"}),u.jsx("div",{className:"mobile-divider",style:{marginTop:"0.85rem"}}),u.jsx("span",{className:"mobile-tagline",children:"Web Dev · Graphic Artist"})]})]})}function fd(){const j=[{num:"5+",label:"Years Experience"},{num:"5",label:"Projects Completed"},{num:"8+",label:"Happy Clients"},{num:"5",label:"Fields of Mastery"}];return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
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
      `}),u.jsx("section",{className:"about-wrapper",id:"about",children:u.jsxs("div",{className:"about-inner",children:[u.jsxs("div",{className:"about-left",children:[u.jsx("span",{className:"about-section-tag",children:"Who I Am"}),u.jsxs("h2",{className:"about-section-heading",children:["About",u.jsx("br",{}),u.jsx("span",{children:"Me"})]})]}),u.jsxs("div",{className:"about-right",children:[u.jsxs("div",{className:"about-intro-line",children:[u.jsx("span",{className:"about-intro-pill",children:"Web Developer"}),u.jsx("span",{className:"about-intro-pill",children:"Graphic Artist"})]}),u.jsxs("div",{className:"about-bio-block",children:[u.jsxs("p",{className:"about-bio",children:["I'm ",u.jsx("strong",{children:"Marlon Ampoon"})," — a ",u.jsx("em",{children:"Web Developer"})," and ",u.jsx("em",{children:"Graphic Artist"})," passionate about helping people and businesses succeed online. I build websites that don't just look great — they work smoothly, load fast, and make a real impact for the people behind them."]}),u.jsxs("p",{className:"about-bio",children:["I find genuine fulfillment in taking ",u.jsx("strong",{children:"technical challenges"})," and transforming them into clean, functional solutions. Whether it's crafting a responsive frontend from scratch, designing a cohesive brand identity, or producing bold digital graphics — I bring both the"," ",u.jsx("strong",{children:"engineering precision"})," and the ",u.jsx("strong",{children:"visual sensibility"}),"."]}),u.jsxs("p",{className:"about-bio",children:["Every project I take on gets my full commitment — not just to meet the brief, but to"," ",u.jsx("em",{children:"exceed it"}),". I believe great work comes from clear communication, attention to detail, and a genuine willingness to go the extra mile. If there's a way I can help you achieve your goals, I'd be honored to be a part of that journey."]})]}),u.jsxs("div",{className:"about-secondary",children:[u.jsx("span",{className:"about-secondary-icon",children:"💼"}),u.jsxs("p",{children:["I also offer ",u.jsx("strong",{children:"Virtual Assistant support"})," as a secondary service — drawing on my background in organization, clear communication, and adaptability to help clients with day-to-day operational tasks when needed."]})]}),u.jsx("div",{className:"about-divider"}),u.jsx("div",{className:"about-stats",children:j.map(A=>u.jsxs("div",{className:"about-stat",children:[u.jsx("span",{className:"about-stat-num",children:A.num}),u.jsx("span",{className:"about-stat-label",children:A.label})]},A.label))}),u.jsxs("div",{className:"about-cta",children:[u.jsx("span",{className:"about-cta-text",children:"Interested in working together?"}),u.jsx("button",{className:"about-cta-btn",onClick:()=>document.getElementById("contact")?.scrollIntoView({behavior:"smooth"}),children:u.jsx("span",{children:"Let's Talk →"})})]})]})]})})]})}const dd="/portfolio/assets/933cd4_1aafcabfda344c27bef126f787c6b836~mv2-C_-aS_qq.avif",md="/portfolio/assets/933cd4_2869364afdcf4eb5b9e299e8bda32877~mv2-CuDmyAXB.avif",gd="/portfolio/assets/933cd4_5944f00d1bba47d9b716947b730ddbb6~mv2-een8vvRJ.avif",pd="/portfolio/assets/933cd4_7bbffb687d614ddaac513b5a4e311fca~mv2-M9SgtDLT.avif",hd="/portfolio/assets/933cd4_926983c740894abb8ac182274902944d~mv2-DfIpsNzm.avif",bd="/portfolio/assets/933cd4_dbf9407c2a644000b8d166788f5912b4~mv2-20830coT.avif",vd="/portfolio/assets/933cd4_f316234cf9234290b7ed386311f25f51~mv2-BAU8Ye_R.avif",yd="/portfolio/assets/933cd4_3ac0114869eb44d0855219d595bfecad~mv2-DO6FPEcl.avif",xd="/portfolio/assets/933cd4_3b3dd834628c4f339ffa0cf74dd08ff1~mv2-PwzQdHPs.avif",Sd="/portfolio/assets/933cd4_7b18d81fa7554b939b9015ab1e022d59~mv2-BS6j50fD.avif",zd="/portfolio/assets/933cd4_7b18d81fa7554b939b9015ab1e022d59~mv2-BS6j50fD.avif",jd="/portfolio/assets/933cd4_8438c1598fe245c39abd32a4f94cf9d8~mv2-BiJANzbf.avif",Df="/portfolio/assets/933cd4_933ecddb115642eeb4de5ce728ce4158~mv2-DrlBuFEo.avif",Md="/portfolio/assets/933cd4_9d4f19587062449ebb358c1ef4385016~mv2-BGBD0Qql.avif",Ad="/portfolio/assets/933cd4_a743d93c251e4706a8cc00391c99df64~mv2-Cx0-4rjh.avif",Nd="/portfolio/assets/933cd4_a992971364804dff87196a63b69c4f95~mv2-DfqSCJJe.avif",Ed="/portfolio/assets/933cd4_c067371c694c4909b2b85af0a079a9da~mv2-DAQj04yC.avif",Td="/portfolio/assets/933cd4_e456be50e7c04c3583dcc3ccc1020392~mv2-ZCu8JcxC.avif",Dd="/portfolio/assets/933cd4_e94abbd068ae4805bf54fa0955ab17bf~mv2-DEIP6fUt.avif",wd="/portfolio/assets/933cd4_21c532d84e3d4e70b75d90b228d3fcec~mv2-DLVeynxV.avif",_d="/portfolio/assets/933cd4_237a1548a9d84782b4b3fb357eee1351~mv2-D_vb4LkL.avif",Od="/portfolio/assets/933cd4_23b5a8291d49458895bdc6351beb3d71~mv2-Dt6AEH1U.avif",Cd="/portfolio/assets/933cd4_465dfcaeb0034e2abcba48e9e5acc899~mv2-uPMi1wso.avif",Ud="/portfolio/assets/933cd4_64d72ab1b3ba4e82adf270f22f4be246~mv2-DmGqF8EJ.avif",Hd="/portfolio/assets/933cd4_92b20642a46240b2934aeea1d0554c76~mv2-BjxJ8z-3.avif",Bd="/portfolio/assets/933cd4_dc21b0c2a23f48288a3c11f39cae1e6e~mv2-B5iT4xTb.avif",Rd="/portfolio/assets/933cd4_eaffa2e625054aeb813084cfeccf5b86~mv2-BEfmqeHp.avif",qd="/portfolio/assets/933cd4_f8cb313e7c3d4ce0a4090950e859c161~mv2-25ZNlKZ5.avif",El=[{id:1,src:dd,category:"webdesign",label:"Website Design",tag:"UI / Web"},{id:2,src:md,category:"webdesign",label:"Website Design",tag:"UI / Web"},{id:3,src:gd,category:"webdesign",label:"Website Design",tag:"UI / Web"},{id:4,src:pd,category:"webdesign",label:"Website Design",tag:"UI / Web"},{id:5,src:hd,category:"webdesign",label:"Website Design",tag:"UI / Web"},{id:6,src:bd,category:"webdesign",label:"Website Design",tag:"UI / Web"},{id:7,src:vd,category:"webdesign",label:"Website Design",tag:"UI / Web"},{id:8,src:yd,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:9,src:xd,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:10,src:Sd,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:11,src:zd,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:12,src:jd,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:13,src:Df,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:13,src:Df,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:14,src:Md,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:15,src:Ad,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:16,src:Nd,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:17,src:Ed,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:18,src:Td,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:19,src:Dd,category:"marketing",label:"Marketing File",tag:"Print / Digital"},{id:20,src:wd,category:"shirtdesign",label:"Shirt Design",tag:"Apparel"},{id:21,src:_d,category:"shirtdesign",label:"Shirt Design",tag:"Apparel"},{id:22,src:Od,category:"shirtdesign",label:"Shirt Design",tag:"Apparel"},{id:23,src:Cd,category:"shirtdesign",label:"Shirt Design",tag:"Apparel"},{id:24,src:Ud,category:"shirtdesign",label:"Shirt Design",tag:"Apparel"},{id:25,src:Hd,category:"shirtdesign",label:"Shirt Design",tag:"Apparel"},{id:26,src:Bd,category:"shirtdesign",label:"Shirt Design",tag:"Apparel"},{id:27,src:Rd,category:"shirtdesign",label:"Shirt Design",tag:"Apparel"},{id:28,src:qd,category:"shirtdesign",label:"Shirt Design",tag:"Apparel"}],Yd=[{value:"all",label:"All Work",count:El.length},{value:"webdesign",label:"Web Design",count:El.filter(j=>j.category==="webdesign").length},{value:"marketing",label:"Marketing",count:El.filter(j=>j.category==="marketing").length},{value:"shirtdesign",label:"Apparel",count:El.filter(j=>j.category==="shirtdesign").length}];function Ld(){const[j,A]=St.useState("webdesign"),[H,s]=St.useState(null),w=j==="all"?El:El.filter(C=>C.category===j),Y=C=>{if(!H)return;const T=(H.idx+C+w.length)%w.length;s({src:w[T].src,idx:T})},ae=C=>{C.key==="ArrowRight"&&Y(1),C.key==="ArrowLeft"&&Y(-1),C.key==="Escape"&&s(null)};return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
        /* ── Graphics Section ─────────────────────────────────────────── */
        .graphics-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .graphics-wrapper::before {
          content: '';
          position: absolute;
          top: -10%; left: -5%;
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(255,200,80,0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .graphics-wrapper::after {
          content: '';
          position: absolute;
          bottom: -10%; right: -5%;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(255,200,80,0.03) 0%, transparent 70%);
          pointer-events: none;
        }

        .graphics-inner {
          max-width: 1300px;
          width: 100%;
          margin: 0 auto;
          padding: 6rem 2rem;
          display: flex;
          gap: clamp(3rem, 8vw, 7rem);
          align-items: flex-start;
          flex-wrap: wrap;
        }

        /* ── Left: sticky label ── */
        .graphics-left {
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          position: sticky;
          top: 6rem;
        }

        .graphics-section-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #ffc850;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .graphics-section-tag::before {
          content: '';
          display: inline-block;
          width: 28px; height: 1px;
          background: #ffc850;
        }

        .graphics-section-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 5vw, 5rem);
          letter-spacing: 0.04em;
          line-height: 0.92;
          color: #fff;
        }

        .graphics-section-heading span { color: #ffc850; }

        .graphics-count-badge {
          margin-top: 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .graphics-count-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          color: #ffc850;
          line-height: 1;
          letter-spacing: 0.04em;
        }

        .graphics-count-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.58rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }

        /* ── Right: content ── */
        .graphics-right {
          flex: 1 1 320px;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .graphics-intro-line {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: -0.5rem;
        }

        .graphics-intro-pill {
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

        .graphics-bio {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.92rem, 1.7vw, 1.05rem);
          color: rgba(255,255,255,0.52);
          line-height: 1.9;
          font-weight: 300;
        }

        .graphics-bio strong { color: #fff; font-weight: 500; }
        .graphics-bio em     { color: #ffc850; font-style: normal; }

        .graphics-divider {
          width: 100%;
          max-width: 580px;
          height: 1px;
          background: linear-gradient(90deg, rgba(255,200,80,0.2), transparent);
        }

        /* ── Filter tabs ── */
        .graphics-filters {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
        }

        .graphics-filter-btn {
          padding: 0.5rem 1.1rem;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.62rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .graphics-filter-btn:hover {
          border-color: rgba(255,200,80,0.35);
          color: rgba(255,200,80,0.8);
        }

        .graphics-filter-btn.active {
          background: rgba(255,200,80,0.1);
          border-color: rgba(255,200,80,0.45);
          color: #ffc850;
        }

        .graphics-filter-chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 18px;
          height: 16px;
          padding: 0 5px;
          background: rgba(255,255,255,0.07);
          border-radius: 2px;
          font-size: 0.55rem;
          letter-spacing: 0;
          color: rgba(255,255,255,0.35);
          transition: background 0.2s, color 0.2s;
        }

        .graphics-filter-btn.active .graphics-filter-chip {
          background: rgba(255,200,80,0.2);
          color: #ffc850;
        }

        /* ── Grid ── */
        .graphics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 4px;
          overflow: hidden;
        }

        .graphics-card {
          position: relative;
          aspect-ratio: 4/3;
          overflow: hidden;
          background: rgba(8,8,12,0.95);
          cursor: pointer;
        }

        .graphics-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.4s ease;
          filter: brightness(0.82) saturate(0.85);
        }

        .graphics-card:hover img {
          transform: scale(1.07);
          filter: brightness(1) saturate(1.1);
        }

        .graphics-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,200,80,0.08) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.3s;
          z-index: 1;
          pointer-events: none;
        }

        .graphics-card:hover::before { opacity: 1; }

        .graphics-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(4,4,8,0.88) 0%,
            rgba(4,4,8,0.15) 55%,
            transparent 100%
          );
          opacity: 0;
          transition: opacity 0.35s ease;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1rem 1rem 1.1rem;
          gap: 3px;
          z-index: 2;
        }

        .graphics-card:hover .graphics-card-overlay { opacity: 1; }

        .graphics-card-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.52rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #ffc850;
        }

        .graphics-card-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.15rem;
          letter-spacing: 0.06em;
          color: #fff;
          line-height: 1;
        }

        .graphics-card-zoom {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          width: 30px;
          height: 30px;
          border: 1px solid rgba(255,200,80,0.45);
          border-radius: 2px;
          background: rgba(4,4,8,0.75);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: scale(0.75) rotate(-5deg);
          transition: opacity 0.25s, transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
          z-index: 3;
        }

        .graphics-card:hover .graphics-card-zoom {
          opacity: 1;
          transform: scale(1) rotate(0deg);
        }

        .graphics-card-zoom svg {
          width: 13px;
          height: 13px;
          stroke: #ffc850;
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .graphics-card-index {
          position: absolute;
          bottom: 0.75rem;
          right: 0.75rem;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          color: rgba(255,200,80,0.5);
          z-index: 3;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .graphics-card:hover .graphics-card-index { opacity: 1; }

        /* ── Lightbox ── */
        .graphics-lightbox {
          position: fixed;
          inset: 0;
          background: rgba(2,2,6,0.94);
          backdrop-filter: blur(14px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          animation: lbFadeIn 0.2s ease;
        }

        @keyframes lbFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .graphics-lightbox-img-wrap {
          animation: lbSlideUp 0.3s cubic-bezier(0.25,0.46,0.45,0.94);
        }

        @keyframes lbSlideUp {
          from { transform: translateY(24px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }

        .graphics-lightbox-img-wrap img {
          max-width: 88vw;
          max-height: 82vh;
          object-fit: contain;
          border-radius: 3px;
          box-shadow: 0 50px 140px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,200,80,0.08);
          display: block;
        }

        .graphics-lb-close {
          position: fixed;
          top: 1.25rem;
          right: 1.25rem;
          width: 38px;
          height: 38px;
          background: rgba(8,8,12,0.8);
          border: 1px solid rgba(255,200,80,0.35);
          border-radius: 2px;
          color: #ffc850;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, border-color 0.2s;
          z-index: 10;
        }

        .graphics-lb-close:hover {
          background: rgba(255,200,80,0.12);
          border-color: rgba(255,200,80,0.6);
        }

        .graphics-lb-nav {
          position: fixed;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          background: rgba(8,8,12,0.8);
          border: 1px solid rgba(255,200,80,0.25);
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

        .graphics-lb-nav:hover {
          background: rgba(255,200,80,0.1);
          border-color: rgba(255,200,80,0.5);
        }

        .graphics-lb-prev { left: 1.25rem; }
        .graphics-lb-next { right: 1.25rem; }

        .graphics-lb-counter {
          position: fixed;
          bottom: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.62rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }

        .graphics-lb-counter span { color: #ffc850; }

        /* ── Responsive ── */
        @media (max-width: 860px) {
          .graphics-left { position: static; }
          .graphics-grid { grid-template-columns: repeat(2, 1fr); }
          .graphics-lb-prev { left: 0.5rem; }
          .graphics-lb-next { right: 0.5rem; }
        }

        @media (max-width: 480px) {
          .graphics-grid  { grid-template-columns: 1fr; }
          .graphics-inner { flex-direction: column; gap: 2.5rem; }
        }
      `}),H&&u.jsxs("div",{className:"graphics-lightbox",onClick:()=>s(null),onKeyDown:ae,tabIndex:0,children:[u.jsx("button",{className:"graphics-lb-close",onClick:()=>s(null),children:"✕"}),u.jsx("button",{className:"graphics-lb-nav graphics-lb-prev",onClick:C=>{C.stopPropagation(),Y(-1)},children:"‹"}),u.jsx("div",{className:"graphics-lightbox-img-wrap",onClick:C=>C.stopPropagation(),children:u.jsx("img",{src:H.src,alt:"Preview"})}),u.jsx("button",{className:"graphics-lb-nav graphics-lb-next",onClick:C=>{C.stopPropagation(),Y(1)},children:"›"}),u.jsxs("div",{className:"graphics-lb-counter",children:[u.jsx("span",{children:H.idx+1})," / ",w.length]})]}),u.jsx("section",{className:"graphics-wrapper",id:"graphics",children:u.jsxs("div",{className:"graphics-inner",children:[u.jsxs("div",{className:"graphics-left",children:[u.jsx("span",{className:"graphics-section-tag",children:"My Work"}),u.jsxs("h2",{className:"graphics-section-heading",children:["Graphic",u.jsx("br",{}),u.jsx("span",{children:"Work"})]}),u.jsxs("div",{className:"graphics-count-badge",children:[u.jsx("span",{className:"graphics-count-num",children:w.length}),u.jsx("span",{className:"graphics-count-label",children:j==="all"?"Total Pieces":"In Category"})]})]}),u.jsxs("div",{className:"graphics-right",children:[u.jsxs("div",{className:"graphics-intro-line",children:[u.jsx("span",{className:"graphics-intro-pill",children:"Web Design"}),u.jsx("span",{className:"graphics-intro-pill",children:"Marketing"}),u.jsx("span",{className:"graphics-intro-pill",children:"Apparel"})]}),u.jsxs("p",{className:"graphics-bio",children:["A selection of ",u.jsx("em",{children:"visual work"})," spanning ",u.jsx("strong",{children:"website UI design"}),", print & digital ",u.jsx("strong",{children:"marketing materials"}),", and custom"," ",u.jsx("strong",{children:"shirt / apparel graphics"}),". Every piece is crafted with intention — designed to communicate clearly and leave a lasting impression."]}),u.jsx("div",{className:"graphics-divider"}),u.jsx("div",{className:"graphics-filters",children:Yd.map(C=>u.jsxs("button",{className:`graphics-filter-btn${j===C.value?" active":""}`,onClick:()=>A(C.value),children:[C.label,u.jsx("span",{className:"graphics-filter-chip",children:C.count})]},C.value))}),u.jsx("div",{className:"graphics-grid",children:w.map((C,T)=>u.jsxs("div",{className:"graphics-card",onClick:()=>s({src:C.src,idx:T}),children:[u.jsx("img",{src:C.src,alt:C.label,loading:"lazy"}),u.jsxs("div",{className:"graphics-card-overlay",children:[u.jsx("span",{className:"graphics-card-tag",children:C.tag}),u.jsx("span",{className:"graphics-card-label",children:C.label})]}),u.jsx("div",{className:"graphics-card-zoom",children:u.jsxs("svg",{viewBox:"0 0 24 24",children:[u.jsx("circle",{cx:"11",cy:"11",r:"8"}),u.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),u.jsx("line",{x1:"11",y1:"8",x2:"11",y2:"14"}),u.jsx("line",{x1:"8",y1:"11",x2:"14",y2:"11"})]})}),u.jsx("span",{className:"graphics-card-index",children:String(T+1).padStart(2,"0")})]},C.id))})]})]})})]})}const kd="/portfolio/assets/Screenshot%202026-02-28%20022631-BSz9lo5z.png",Gd="/portfolio/assets/Screenshot%202026-02-28%20023155-CYkn5XM7.png",Xd="/portfolio/assets/Screenshot%202026-02-28%20023643-X0tgNWxq.png",ka=[{id:1,src:kd,title:"Steinposner Century 21",subtitle:"All-in-One Agent Marketing Hub",description:"A centralized marketing platform built exclusively for Century 21 Steinposner agents. Consolidates vendor hiring, flyer creation, postcard delivery, email marketing, and social media boosting — all under one roof. Eliminates the need for agents to juggle multiple platforms to fulfill their listing and marketing needs.",tags:["Web App","E-Commerce","Real Estate","Multi-Platform"],type:"Marketing Platform",year:"2025"},{id:2,src:Gd,title:"Women's Health & Cosmetics",subtitle:"Health & Beauty Storefront",description:"An e-commerce store dedicated to women's health and well-being. Features a curated catalog of cosmetic and healthcare products with a clean, confidence-inspiring shopping experience designed to resonate with its target audience.",tags:["E-Commerce","Health & Beauty","Storefront","UI Design"],type:"E-Commerce Store",year:"2025"},{id:3,src:Xd,title:"Salon Beauty Supply",subtitle:"Professional Beauty E-Commerce",description:"A professional e-commerce store for salon-grade beauty supplies. Built for both retail customers and salon professionals, offering a streamlined product browsing and purchasing experience for hair, skin, and beauty essentials.",tags:["E-Commerce","Beauty Supply","Retail","Storefront"],type:"E-Commerce Store",year:"2024"}];function Qd(){const[j,A]=St.useState(null),H=s=>{if(!j)return;const w=(j.idx+s+ka.length)%ka.length;A({src:ka[w].src,idx:w})};return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
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
      `}),j&&u.jsxs("div",{className:"dev-lightbox",onClick:()=>A(null),onKeyDown:s=>{s.key==="ArrowRight"&&H(1),s.key==="ArrowLeft"&&H(-1),s.key==="Escape"&&A(null)},tabIndex:0,children:[u.jsx("button",{className:"dev-lb-close",onClick:()=>A(null),children:"✕"}),u.jsx("button",{className:"dev-lb-nav dev-lb-prev",onClick:s=>{s.stopPropagation(),H(-1)},children:"‹"}),u.jsx("div",{className:"dev-lightbox-wrap",onClick:s=>s.stopPropagation(),children:u.jsx("img",{src:j.src,alt:"Project preview"})}),u.jsx("button",{className:"dev-lb-nav dev-lb-next",onClick:s=>{s.stopPropagation(),H(1)},children:"›"}),u.jsxs("div",{className:"dev-lb-label",children:[u.jsx("span",{className:"dev-lb-title",children:ka[j.idx].title}),u.jsxs("span",{className:"dev-lb-counter",children:[u.jsx("span",{children:j.idx+1})," of ",ka.length]})]})]}),u.jsxs("section",{className:"dev-wrapper",id:"dev",children:[u.jsxs("div",{className:"dev-header",children:[u.jsxs("div",{className:"dev-header-left",children:[u.jsx("span",{className:"dev-section-tag",children:"My Builds"}),u.jsxs("h2",{className:"dev-section-heading",children:["Dev",u.jsx("br",{}),u.jsx("span",{children:"Projects"})]})]}),u.jsx("div",{className:"dev-header-right",children:u.jsxs("p",{className:"dev-header-bio",children:["Where ",u.jsx("em",{children:"design meets functionality"}),". From ",u.jsx("strong",{children:"multi-feature business platforms"})," to polished ",u.jsx("strong",{children:"e-commerce storefronts"})," — each build is engineered to solve real problems and deliver a seamless experience."]})})]}),u.jsx("div",{className:"dev-rule",children:u.jsx("div",{className:"dev-rule-inner"})}),u.jsx("div",{className:"dev-showcase",children:ka.map((s,w)=>u.jsxs("div",{className:"dev-row",children:[u.jsx("div",{className:"dev-row-num-col",children:u.jsx("span",{className:"dev-row-num",children:String(w+1).padStart(2,"0")})}),u.jsxs("div",{className:"dev-row-main",children:[u.jsxs("div",{className:"dev-row-topbar",children:[u.jsxs("div",{className:"dev-row-title-group",children:[u.jsx("h3",{className:"dev-row-title",children:s.title}),u.jsx("span",{className:"dev-row-subtitle",children:s.subtitle})]}),u.jsxs("div",{className:"dev-row-meta",children:[u.jsx("span",{className:"dev-row-type",children:s.type}),u.jsx("span",{className:"dev-row-year",children:s.year})]})]}),u.jsxs("div",{className:"dev-row-preview",children:[u.jsxs("div",{className:"dev-browser-bar",children:[u.jsx("div",{className:"dev-browser-dot"}),u.jsx("div",{className:"dev-browser-dot"}),u.jsx("div",{className:"dev-browser-dot"}),u.jsx("div",{className:"dev-browser-url"})]}),u.jsx("img",{src:s.src,alt:s.title,className:"dev-row-screenshot",loading:"lazy"}),u.jsx("div",{className:"dev-screenshot-zoom",children:u.jsx("button",{className:"dev-screenshot-zoom-btn",onClick:Y=>{Y.stopPropagation(),A({src:s.src,idx:w})},children:u.jsxs("svg",{viewBox:"0 0 24 24",children:[u.jsx("polyline",{points:"15 3 21 3 21 9"}),u.jsx("polyline",{points:"9 21 3 21 3 15"}),u.jsx("line",{x1:"21",y1:"3",x2:"14",y2:"10"}),u.jsx("line",{x1:"3",y1:"21",x2:"10",y2:"14"})]})})})]}),u.jsxs("div",{className:"dev-row-bottom",children:[u.jsx("p",{className:"dev-row-desc",children:s.description}),u.jsx("div",{className:"dev-row-tags",children:s.tags.map(Y=>u.jsx("span",{className:"dev-row-tag",children:Y},Y))})]})]}),u.jsx("span",{className:"dev-row-arrow",children:"→"})]},s.id))}),u.jsx("div",{className:"dev-footer",children:[{num:ka.length.toString(),label:"Projects Built"},{num:"3+",label:"Industries Served"},{num:"E-Commerce",label:"Primary Platform"},{num:"100%",label:"Client Focused"}].map(s=>u.jsxs("div",{className:"dev-footer-stat",children:[u.jsx("span",{className:"dev-footer-num",children:s.num}),u.jsx("span",{className:"dev-footer-label",children:s.label})]},s.label))})]})]})}function Vd(){const j=[{id:1,company:"Century 21 Steinposner",role:"IT / Project Manager",department:"TheMedSpa HB",period:"February 2024 – June 2024",bullets:["Website Management: Oversaw website updates, content management, and UX improvements, ensuring alignment with branding guidelines.","Marketing Flier Creation: Designed and produced marketing materials that boosted client acquisition and retention.","Project Launch Support: Managed new project initiatives, collaborating cross-functionally to meet timelines and budget objectives."],tags:["Web Management","UX","Project Management","Marketing"]},{id:2,company:"Transform Salon Luxe",role:"Marketing Specialist / Web Dev",department:null,period:"January 2023 – December 2023",bullets:["Website Updates and Maintenance: Regularly updated the salon's website with new content, promotional offers, and service updates.","Creation of Marketing Materials: Designed and developed a variety of marketing materials, including brochures, flyers, and digital graphics tailored to attract new clients and retain existing ones by highlighting the salon's unique services and promotions."],tags:["Web Development","Marketing","Graphic Design","Branding"]},{id:3,company:"MyDesk Virtual Office",role:"Executive Assistant",department:null,period:"November 2021 – January 2023",bullets:["Monitored onboarding processes for new Virtual Assistants and clients.","Led a team of Virtual Assistants, providing support and mentorship.","Handled tasks including transaction coordination, social media marketing, cold calling, skip tracing, email marketing, product research, web maintenance, web development, flyer creation, and video creation.","Analyzed team strengths to maximize staff abilities, assigned work to ideal project partners, and streamlined the scheduling experience."],tags:["Team Leadership","Social Media","Email Marketing","Web Dev","VA"]},{id:4,company:"VideoPower.com",role:"SEO Content Writer",department:null,period:"July 2020 – October 2021",bullets:["Content and Article Creation: Developed high-quality content and articles tailored for the company's website, creating engaging and informative pieces that resonated with the target audience.","SEO Optimization: Integrated SEO standards and keyword strategies into all content to improve search engine ranking. Conducted thorough keyword research to identify relevant and high-traffic keywords, ensuring maximum visibility."],tags:["SEO","Content Writing","Keyword Research","Article Creation"]}];return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
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
      `}),u.jsx("section",{className:"exp-wrapper",id:"experience",children:u.jsxs("div",{className:"exp-inner",children:[u.jsxs("div",{className:"exp-left",children:[u.jsx("span",{className:"exp-section-tag",children:"My Journey"}),u.jsxs("h2",{className:"exp-section-heading",children:["Work",u.jsx("br",{}),u.jsx("span",{children:"Experience"})]}),u.jsxs("div",{className:"exp-count-badge",children:[u.jsx("span",{className:"exp-count-num",children:j.length}),u.jsx("span",{className:"exp-count-label",children:"Roles Held"})]})]}),u.jsx("div",{className:"exp-right",children:u.jsx("div",{className:"exp-timeline",children:j.map(A=>u.jsx("div",{className:"exp-entry",children:u.jsxs("div",{className:"exp-card",children:[u.jsxs("div",{className:"exp-card-header",children:[u.jsxs("div",{className:"exp-card-title-group",children:[u.jsx("span",{className:"exp-company",children:A.company}),u.jsxs("div",{className:"exp-role-line",children:[u.jsx("span",{className:"exp-role",children:A.role}),A.department&&u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"exp-dept-sep"}),u.jsx("span",{className:"exp-dept",children:A.department})]})]})]}),u.jsxs("div",{className:"exp-period",children:[u.jsx("span",{className:"exp-period-dot"}),u.jsx("span",{children:A.period})]})]}),u.jsx("div",{className:"exp-card-divider"}),u.jsx("ul",{className:"exp-bullets",children:A.bullets.map((H,s)=>{const w=H.indexOf(":"),Y=w>-1&&w<40;return u.jsxs("li",{className:"exp-bullet",children:[u.jsx("span",{className:"exp-bullet-dot"}),u.jsx("span",{className:"exp-bullet-text",children:Y?u.jsxs(u.Fragment,{children:[u.jsx("strong",{children:H.slice(0,w+1)}),H.slice(w+1)]}):H})]},s)})}),u.jsx("div",{className:"exp-tags",children:A.tags.map(H=>u.jsx("span",{className:"exp-tag",children:H},H))})]})},A.id))})})]})})]})}const Zd={gmail:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z",microsoftoutlook:"M21.184 0H7.616A2.817 2.817 0 0 0 4.8 2.816v1.017L12.8 6.4l8-2.567V2.816A2.817 2.817 0 0 0 21.184 0zM4.8 6.756V21.3l8-2.057 8 2.057V6.756L12.8 9.323 4.8 6.756zM0 5.333v13.334l3.2.821V4.512L0 5.333zm24 0l-3.2-.821v14.976l3.2-.821V5.333z",slack:"M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z",microsoftteams:"M19.547 7.518c1.304 0 2.36-1.057 2.36-2.36S20.851 2.8 19.547 2.8a2.36 2.36 0 0 0 0 4.718zm1.722 1.07h-3.444a.86.86 0 0 0-.86.86v5.155c0 3.048 3.552 3.55 4.315 3.55h.01c.58 0 .71-.346.71-.608V9.448a.86.86 0 0 0-.731-.86zM12 12.364a3.15 3.15 0 1 0 0-6.3 3.15 3.15 0 0 0 0 6.3zm2.116 1.133H9.884a1.75 1.75 0 0 0-1.75 1.75v5.733c0 .192.156.347.348.347h7.036a.348.348 0 0 0 .348-.347V15.247a1.75 1.75 0 0 0-1.75-1.75z",zoom:"M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm6.048 15.612c0 .504-.6.78-1.02.468l-2.976-2.172v1.704c0 .828-.672 1.5-1.5 1.5H5.928a1.5 1.5 0 0 1-1.5-1.5V8.4c0-.828.672-1.5 1.5-1.5h6.624c.828 0 1.5.672 1.5 1.5v1.704l2.976-2.172c.42-.312 1.02-.036 1.02.468v6.72z",googlemeet:"M17.525 11.025 21 7.55v8.9l-3.475-3.475-3.15 2.775V9.25l3.15 1.775zM3 8a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8z",skype:"M10.588 1.225A10.48 10.48 0 0 0 .002 12a10.45 10.45 0 0 0 1.37 5.223A6.18 6.18 0 0 0 5.64 23.75a10.48 10.48 0 0 0 6.278.248A10.48 10.48 0 0 0 24 12a10.45 10.45 0 0 0-1.38-5.24 6.18 6.18 0 0 0-4.286-6.524 10.48 10.48 0 0 0-7.746.989zm1.09 17.274c-3.018 0-4.393-1.484-4.393-2.599 0-.61.453-1.042 1.082-1.042 1.416 0 1.052 2.026 3.311 2.026 1.209 0 1.88-.659 1.88-1.327 0-.404-.202-.853-.988-1.05l-2.614-.655c-2.103-.527-2.486-1.656-2.486-2.716 0-2.202 2.072-3.024 4.023-3.024 1.8 0 3.929.991 3.929 2.31 0 .633-.55 1.0-1.147 1.0-1.234 0-1.021-1.7-2.94-1.7-1.082 0-1.677.49-1.677 1.196 0 .706.861.932 1.61 1.105l1.929.45c2.124.494 2.61 1.677 2.61 2.824 0 1.782-1.368 3.202-4.13 3.202z",discord:"M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z",whatsapp:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.003 2.003a9.998 9.998 0 0 0-8.674 14.953L2.004 22l5.176-1.316A9.998 9.998 0 1 0 12.003 2.003z",trello:"M21 0H3C1.343 0 0 1.343 0 3v18c0 1.657 1.343 3 3 3h18c1.657 0 3-1.343 3-3V3c0-1.657-1.343-3-3-3zM10.44 18.18c0 .795-.645 1.44-1.44 1.44H4.56c-.795 0-1.44-.645-1.44-1.44V4.56c0-.795.645-1.44 1.44-1.44H9c.795 0 1.44.645 1.44 1.44v13.62zm10.44-6c0 .795-.645 1.44-1.44 1.44H15c-.795 0-1.44-.645-1.44-1.44V4.56c0-.795.645-1.44 1.44-1.44h4.44c.795 0 1.44.645 1.44 1.44v7.62z",asana:"M11.987 14.138l-3.132 3.97a2.5 2.5 0 0 1-4.7-1.011 2.5 2.5 0 0 1 .81-2.7 2.5 2.5 0 0 1 3.516.38l3.508-4.45a2.5 2.5 0 0 1 3.516-.38 2.5 2.5 0 0 1 .81 2.7 2.5 2.5 0 0 1-4.7 1.011zM12 0C5.374 0 0 5.374 0 11s4.925 11 11 11c3.38 0 6.48-1.35 8.59-3.6L17.5 16.3c-1.6 1.75-3.9 2.7-6.5 2.7-4.97 0-9-4.03-9-9s4.03-9 9-9c2.6 0 4.9.95 6.5 2.7l2.09-2.1C17.48 1.35 14.38 0 11 0z",googledrive:"M6.28 0L0 10.93l3.14 5.44L9.42 5.44 6.28 0zm1.62 16.37H1.35L0 19h14.11L8.2 8.73l-1.46 2.67 3.63 5.97H7.9zm10.54-5.44L12.56 0H6.28l6.28 10.93 5.86-2.57-.06.57zM14.11 16.1L12 12.54l-4.49 7.77H24L14.11 16.1z",dropbox:"M12 1.5L6 5.25l6 3.75 6-3.75L12 1.5zM6 12.75L12 16.5l6-3.75-6-3.75-6 3.75zM0 5.25L6 9l6-3.75L6 1.5 0 5.25zm18 3.75l6-3.75L18 1.5l-6 3.75 6 3.75zm-6 1.5L6 14.25l6 3.75 6-3.75L12 10.5zm-12 3.75L6 18l6-3.75-6-3.75-6 3.75zm18 0L12 18l6 3.75 6-3.75-6-3.75z",microsoftonedrive:"M14.558 8.417A5.576 5.576 0 0 0 9.375 4.8a5.57 5.57 0 0 0-4.917 2.95A4.187 4.187 0 0 0 0 11.992 4.19 4.19 0 0 0 4.192 16.2h10.366a3.6 3.6 0 0 0 .787-7.12zm3.245.942a4.793 4.793 0 0 1 .597 9.541H3.208a5.593 5.593 0 0 0 .975.3h14.17a5.993 5.993 0 0 0 5.647-6c0-2.88-2.025-5.28-4.8-5.795a4.8 4.8 0 0 0-1.397-.046z",visualstudiocode:"M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z",react:"M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.12.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.468zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.468a23.357 23.357 0 0 0-1.364-3.578l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046z",tailwindcss:"M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z",bootstrap:"M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.956v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.325-1.663zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-8.037 0c0-1.588-1.09-2.501-2.988-2.501H8.577v9.906h3.207c2.07 0 3.241-.953 3.241-2.555 0-1.133-.61-2.024-1.726-2.33.962-.322 1.638-1.085 1.638-2.52z",nodedotjs:"M11.998 24c-.321 0-.641-.084-.924-.247l-2.937-1.737c-.438-.245-.224-.332-.08-.382.585-.203.703-.249 1.327-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.134-.141.134-.238V7.926c0-.099-.052-.19-.137-.24l-8.791-5.072a.271.271 0 0 0-.274 0L3.065 7.686c-.087.05-.141.144-.141.24v10.15c0 .097.054.189.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.891V8.999c0-.143.111-.253.254-.253h1.109c.139 0 .254.11.254.253v10.813c0 1.748-.951 2.749-2.608 2.749-.508 0-.909 0-2.026-.551L2.28 20.508A1.851 1.851 0 0 1 1.332 19v-10.2c0-.66.353-1.278.924-1.609l8.795-5.076a1.927 1.927 0 0 1 1.85 0l8.794 5.077c.57.33.924.949.924 1.608v10.2a1.85 1.85 0 0 1-.924 1.609l-8.794 5.075A1.87 1.87 0 0 1 11.998 24z",php:"M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0 0 5.373 0 12zm13.69-4.62c.924 0 1.67.19 2.22.57.55.38.9.98.9 1.77 0 .59-.14 1.08-.43 1.47-.28.4-.67.71-1.18.93l2.01 3.75h-1.75l-1.73-3.43H12.2v3.43H10.6V7.38h3.09zm-.2 3.62c.5 0 .88-.11 1.14-.34.26-.22.39-.57.39-1.02 0-.44-.13-.75-.4-.96-.27-.2-.65-.3-1.14-.3H12.2v2.62h1.29zm-7.69 1.02c0-.93.19-1.72.57-2.34a3.7 3.7 0 0 1 1.56-1.44c.65-.33 1.37-.49 2.16-.49h.74v1.54h-.74c-.6 0-1.12.13-1.55.39-.43.26-.76.64-.99 1.13-.22.49-.34 1.07-.34 1.71 0 .63.11 1.2.34 1.69.22.49.56.87.99 1.14.43.26.96.39 1.56.39H10.1V17h-.74c-.78 0-1.49-.16-2.14-.49-.65-.32-1.17-.81-1.56-1.44-.38-.63-.57-1.41-.57-2.33z",mysql:"M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.19.214.49.062.064.072.28.072.28v5.765c-.145-.036-.27-.116-.389-.259-.022-.029-.049-.084-.072-.084-.021 0-.052.022-.052.022-.07.12-.115.198-.138.386-.023.189-.031.378.011.483.042.105.076.231.118.335.042.104.087.219.161.336.074.117.156.226.223.316.068.091.12.153.194.216.075.063.134.103.198.136.064.034.109.055.183.077.073.022.14.038.208.038.072 0 .146-.016.21-.038.066-.022.125-.049.183-.077a1.5 1.5 0 0 0 .354-.239c.088-.088.16-.19.215-.305.064-.12.11-.25.14-.385.03-.136.045-.275.045-.418V7.474c.052-.065.104-.138.146-.213.04-.076.067-.153.079-.232a.526.526 0 0 0-.009-.258.56.56 0 0 0-.153-.22.69.69 0 0 0-.27-.14 1.3 1.3 0 0 0-.402-.063z",postgresql:"M17.128 0a10.134 10.134 0 0 0-2.755.403C12.602.057 10.855 0 10.8 0 8.168 0 6.5 1.067 6.5 1.067 4.203 1.215.344 2.67.02 7.018c-.077 1.029.023 2.063.298 3.062.6 2.204 2.477 4.58 5.119 4.089a4.478 4.478 0 0 0 1.531-.538l.032.19c-.167.082-.299.202-.38.362l-.005.012c-.302.652-.124 1.258.35 1.662.08.072.17.136.265.19.05.03.1.055.153.077v.013c-.078.152-.12.32-.12.492 0 .637.515 1.154 1.149 1.154a1.15 1.15 0 0 0 1.15-1.154 1.13 1.13 0 0 0-.048-.32l.003.011c.23-.003.459-.036.679-.097l-.022.005a1.15 1.15 0 0 0 1.119 1.396 1.15 1.15 0 0 0 1.149-1.154 1.14 1.14 0 0 0-.247-.708l.002.003c.37-.356.521-.874.401-1.375l-.002-.007-.152-.575a5.268 5.268 0 0 0 2.748-.965l-.028.019c-.104 1.06.112 1.93.548 2.524a2.5 2.5 0 0 0 2.024 1.045c1.943 0 3.514-2.26 3.809-5.398C23.571 5.026 20.978 0 17.128 0zM8.5 14.22a.72.72 0 1 1 0-1.44.72.72 0 0 1 0 1.44zm3.208 2.01a.72.72 0 1 1 0-1.44.72.72 0 0 1 0 1.44z",supabase:"M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C.99 12.558 1.5 13 2 13h7.836a1 1 0 0 0 1-.999V1.036zM12.1 22.964c.015.986 1.26 1.41 1.875.637l9.26-11.65A1.58 1.58 0 0 0 22 11H14.1a1 1 0 0 0-1 .999v10.965z",github:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",gitlab:"M23.955 13.587l-1.342-4.135-2.664-8.189a.455.455 0 0 0-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 0 0-.867 0L1.386 9.45.044 13.587a.924.924 0 0 0 .331 1.023L12 23.054l11.625-8.443a.92.92 0 0 0 .33-1.024",wordpress:"M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12zm1.44 0c0 5.8 4.76 10.56 10.56 10.56 5.8 0 10.56-4.76 10.56-10.56C22.56 6.2 17.8 1.44 12 1.44 6.2 1.44 1.44 6.2 1.44 12zm2.19 0C3.63 7.1 7.39 3.43 12 3.43c1.55 0 3.01.43 4.25 1.18L5.04 15.7A8.5 8.5 0 0 1 3.63 12zm8.37 8.57c-1.59 0-3.07-.46-4.31-1.24l11.27-11.04A8.505 8.505 0 0 1 20.57 12c0 4.72-3.84 8.57-8.57 8.57z",figma:"M5.998 24c1.657 0 3-1.343 3-3v-3h-3a3 3 0 0 0 0 6zm3-12H5.998a3 3 0 0 0 0 6h3v-6zm0-6H5.998a3 3 0 0 0 0 6h3V6zm6 0h-3v6h3a3 3 0 0 0 0-6zm0 6h-3v6h3a3 3 0 0 0 0-6z",canva:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.748 17.01a4.94 4.94 0 0 1-4.938-4.938A4.94 4.94 0 0 1 11.252 7.134a4.94 4.94 0 0 1 4.937 4.938 4.94 4.94 0 0 1-4.937 4.938zm5.623-1.02a6.323 6.323 0 0 0 .95-3.918 6.323 6.323 0 0 0-6.573-6.054 6.323 6.323 0 0 0-5.786 6.573 6.323 6.323 0 0 0 6.573 5.786 6.323 6.323 0 0 0 4.836-2.387z",openai:"M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0L4.001 14.21a4.501 4.501 0 0 1-1.66-6.314zm16.597 3.855l-5.843-3.369 2.02-1.168a.076.076 0 0 1 .071 0l4.816 2.788a4.499 4.499 0 0 1-.676 8.119v-5.678a.79.79 0 0 0-.388-.692zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.814-2.784a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z",zapier:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.57 14.27h-3.67l2.34 3.9H9.77l2.34-3.9H8.44l-1.5-2.27h3.67L8.27 8.1h6.46l-2.34 3.9h3.67l1.5 2.27z",grammarly:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.195 4.797c3.035 0 5.494 1.46 6.977 3.773l-2.002 1.39a5.684 5.684 0 0 0-4.975-2.835c-3.168 0-5.746 2.57-5.746 5.737 0 3.168 2.578 5.738 5.746 5.738 2.66 0 4.9-1.809 5.567-4.253H12.5V11.78h7.406c.08.444.13.9.13 1.363C20.036 17.465 16.511 21 12.195 21 7.665 21 4 17.334 4 12.804S7.665 4.797 12.195 4.797z",bitwarden:"M12 1L3 5v8c0 4.97 3.84 9.64 9 10.93C17.16 22.64 21 17.97 21 13V5l-9-4zm0 4.5l6 2.67V13c0 3.47-2.69 6.72-6 7.93-3.31-1.21-6-4.46-6-7.93V8.17L12 5.5z",calendly:"M19.59 3.6C17.48 1.35 14.38 0 11 0 4.925 0 0 4.925 0 11s4.925 11 11 11c3.38 0 6.48-1.35 8.59-3.6L17.5 16.3c-1.6 1.75-3.9 2.7-6.5 2.7-4.97 0-9-4.03-9-9s4.03-9 9-9c2.6 0 4.9.95 6.5 2.7L19.59 3.6zM13 6v5.586l3.707 3.707-1.414 1.414L11 13V6h2z",googlecalendar:"M18 0H6L0 6v12l6 6h12l6-6V6l-6-6zm-1 17H7v-2h10v2zm0-4H7v-2h10v2zm0-4H7V7h10v2z",mondaydotcom:"M4.032 14.976c-.936 0-1.696-.76-1.696-1.696S3.096 11.584 4.032 11.584c.463 0 .882.188 1.186.492l4.166-7.22A3.752 3.752 0 0 1 8 2.752C8 .752 9.752 0 12 0s4 .752 4 2.752a3.752 3.752 0 0 1-.384 2.104l4.166 7.22c.304-.304.723-.492 1.186-.492.936 0 1.696.76 1.696 1.696s-.76 1.696-1.696 1.696c-.463 0-.882-.188-1.186-.492l-4.166 7.22c.24.42.384.904.384 1.424C16 23.248 14.248 24 12 24s-4-.752-4-2.752c0-.52.144-1.004.384-1.424l-4.166-7.22c-.304.304-.723.492-1.186.492z",adobephotoshop:"M0 0v24h24V0H0zm10.014 6.508c1.16 0 1.975.187 2.664.564a3.67 3.67 0 0 1 1.64 1.64c.376.69.563 1.503.563 2.438 0 .937-.187 1.749-.563 2.438-.375.69-.922 1.22-1.64 1.64-.69.376-1.503.564-2.664.564H7.639V17.5H6.01V6.508h4.004zm0 7.848c.939 0 1.668-.236 2.14-.706.47-.47.705-1.126.705-1.97 0-.844-.235-1.5-.705-1.97-.472-.47-1.201-.707-2.14-.707H7.639v5.353h2.375zm6.794-1.347c.057.58.354 1.024.891 1.332.537.31 1.136.463 1.797.463.426 0 .8-.055 1.122-.165a1.96 1.96 0 0 0 .77-.47c.199-.205.298-.452.298-.745 0-.359-.135-.641-.405-.846-.27-.205-.657-.384-1.162-.538l-1.352-.385c-.674-.19-1.18-.455-1.518-.795-.338-.34-.507-.775-.507-1.306 0-.531.15-.99.449-1.377.3-.386.71-.683 1.231-.892.521-.209 1.112-.313 1.773-.313.71 0 1.322.13 1.835.389.514.26.91.617 1.188 1.073.28.455.427.97.442 1.544h-1.56c-.057-.523-.268-.933-.632-1.229-.364-.295-.835-.443-1.412-.443-.514 0-.93.108-1.248.323a.975.975 0 0 0-.477.847c0 .297.107.534.321.71.215.177.552.336 1.012.476l1.393.397c.73.212 1.278.494 1.645.845.367.351.55.808.55 1.37 0 .583-.157 1.08-.47 1.49-.313.41-.751.723-1.315.938-.563.216-1.212.323-1.945.323-.773 0-1.455-.13-2.043-.39a3.258 3.258 0 0 1-1.372-1.093 2.97 2.97 0 0 1-.503-1.622h1.581z",adobepremierepro:"M0 0v24h24V0H0zm9.7 6.506c1.015 0 1.726.186 2.2.56.474.373.71.908.71 1.605 0 .52-.125.956-.376 1.31a2.33 2.33 0 0 1-1.05.822l1.782 4.69H11.16l-1.54-4.22H8.506v4.22H7.2V6.506H9.7zm6.785 1.88c.43 0 .82.086 1.17.26.35.17.655.422.914.75v-.89h1.2v8.988h-1.2v-.888a2.568 2.568 0 0 1-.914.748c-.35.174-.74.26-1.17.26-.545 0-1.028-.134-1.45-.4a2.73 2.73 0 0 1-.978-1.108c-.233-.474-.35-1.012-.35-1.615v-.58c0-.603.117-1.14.35-1.615a2.73 2.73 0 0 1 .978-1.108c.422-.266.905-.4 1.45-.4zM9.456 8.032H8.506v3.02h.95c.7 0 1.195-.15 1.488-.452.294-.3.44-.7.44-1.2 0-.472-.143-.834-.43-1.084-.285-.25-.73-.376-1.5-.376zm7.037.75c-.548 0-.986.2-1.316.6-.33.4-.494.928-.494 1.585v.58c0 .655.165 1.182.494 1.582.33.4.768.6 1.316.6.322 0 .61-.075.866-.225a1.7 1.7 0 0 0 .622-.638v-3.82a1.7 1.7 0 0 0-.622-.64 1.736 1.736 0 0 0-.866-.224z",loom:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15zm0 3a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"},Gi=[{id:"communication",label:"Communication",emoji:"💬",tools:[{name:"Gmail",icon:"gmail"},{name:"Outlook",icon:"microsoftoutlook"},{name:"Slack",icon:"slack"},{name:"Microsoft Teams",icon:"microsoftteams"},{name:"Zoom",icon:"zoom"},{name:"Google Meet",icon:"googlemeet"},{name:"Skype",icon:"skype"},{name:"Discord",icon:"discord"},{name:"WhatsApp",icon:"whatsapp"}]},{id:"scheduling",label:"Scheduling",emoji:"📅",tools:[{name:"Calendly",icon:"calendly"},{name:"Google Calendar",icon:"googlecalendar"}]},{id:"projectmgmt",label:"Project Management",emoji:"📋",tools:[{name:"Trello",icon:"trello"},{name:"Asana",icon:"asana"},{name:"Monday.com",icon:"mondaydotcom"}]},{id:"cloud",label:"Cloud Storage",emoji:"☁️",tools:[{name:"Google Drive",icon:"googledrive"},{name:"Dropbox",icon:"dropbox"},{name:"OneDrive",icon:"microsoftonedrive"}]},{id:"webdev",label:"Web Development",emoji:"💻",tools:[{name:"VS Code",icon:"visualstudiocode"},{name:"React",icon:"react"},{name:"Tailwind CSS",icon:"tailwindcss"},{name:"Bootstrap",icon:"bootstrap"},{name:"Node.js",icon:"nodedotjs"},{name:"PHP",icon:"php"},{name:"MySQL",icon:"mysql"},{name:"PostgreSQL",icon:"postgresql"},{name:"Supabase",icon:"supabase"},{name:"GitHub",icon:"github"},{name:"GitLab",icon:"gitlab"},{name:"WordPress",icon:"wordpress"}]},{id:"design",label:"Graphic Design & Creative",emoji:"🎨",tools:[{name:"Photoshop",icon:"adobephotoshop"},{name:"Figma",icon:"figma"},{name:"Canva",icon:"canva"},{name:"Premiere Pro",icon:"adobepremierepro"}]},{id:"ai",label:"Automation & AI",emoji:"🤖",tools:[{name:"ChatGPT",icon:"openai"},{name:"Zapier",icon:"zapier"},{name:"Grammarly",icon:"grammarly"},{name:"Loom",icon:"loom"}]},{id:"security",label:"Security",emoji:"🔐",tools:[{name:"Bitwarden",icon:"bitwarden"}]}],wf=Gi.reduce((j,A)=>j+A.tools.length,0);function Kd({icon:j}){const A=Zd[j];return A?u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",style:{width:14,height:14},children:u.jsx("path",{d:A})}):u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",style:{width:14,height:14},children:u.jsx("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"})})}function Jd(){const[j,A]=St.useState("all"),H=j==="all"?Gi:Gi.filter(s=>s.id===j);return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
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
      `}),u.jsx("section",{className:"tools-wrapper",id:"tools",children:u.jsxs("div",{className:"tools-inner",children:[u.jsxs("div",{className:"tools-left",children:[u.jsx("span",{className:"tools-section-tag",children:"My Stack"}),u.jsxs("h2",{className:"tools-section-heading",children:["Tools &",u.jsx("br",{}),u.jsx("span",{children:"Skills"})]}),u.jsxs("div",{className:"tools-count-badge",children:[u.jsxs("span",{className:"tools-count-num",children:[wf,"+"]}),u.jsx("span",{className:"tools-count-label",children:"Tools Known"})]})]}),u.jsxs("div",{className:"tools-right",children:[u.jsxs("div",{className:"tools-intro-line",children:[u.jsx("span",{className:"tools-intro-pill",children:"💬 Communication"}),u.jsx("span",{className:"tools-intro-pill",children:"💻 Web Dev"}),u.jsx("span",{className:"tools-intro-pill",children:"🎨 Design"}),u.jsx("span",{className:"tools-intro-pill",children:"🤖 AI & Automation"}),u.jsx("span",{className:"tools-intro-pill",children:"🔐 Security"})]}),u.jsxs("p",{className:"tools-bio",children:["A versatile toolkit spanning ",u.jsx("em",{children:"communication"}),", ",u.jsx("em",{children:"web development"}),","," ",u.jsx("em",{children:"design"}),", and ",u.jsx("em",{children:"automation"}),". These are the platforms and technologies I rely on daily to ",u.jsx("strong",{children:"deliver quality work"})," across every project."]}),u.jsx("div",{className:"tools-divider"}),u.jsxs("div",{className:"tools-filters",children:[u.jsxs("button",{className:`tools-filter-btn${j==="all"?" active":""}`,onClick:()=>A("all"),children:["All (",wf,")"]}),Gi.map(s=>u.jsxs("button",{className:`tools-filter-btn${j===s.id?" active":""}`,onClick:()=>A(s.id),children:[s.emoji," ",s.label]},s.id))]}),u.jsx("div",{className:"tools-categories",children:H.map(s=>u.jsxs("div",{className:"tools-category-block",children:[u.jsxs("div",{className:"tools-cat-header",children:[u.jsx("span",{className:"tools-cat-emoji",children:s.emoji}),u.jsx("span",{className:"tools-cat-label",children:s.label}),u.jsx("span",{className:"tools-cat-count",children:s.tools.length})]}),u.jsx("div",{className:"tools-grid",children:s.tools.map(w=>u.jsxs("div",{className:"tools-chip",children:[u.jsx("span",{className:"tools-chip-icon",children:u.jsx(Kd,{icon:w.icon})}),u.jsx("span",{className:"tools-chip-name",children:w.name})]},w.name))})]},s.id))})]})]})})]})}const Wd=[{label:"Facebook",handle:"Marlon Ampoon",href:"https://www.facebook.com/profile.php?id=61582378152401",icon:u.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})})},{label:"Instagram",handle:"@dsaleiri",href:"https://www.instagram.com/dsaleiri/",icon:u.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),u.jsx("circle",{cx:"12",cy:"12",r:"4"}),u.jsx("circle",{cx:"17.5",cy:"6.5",r:"1",fill:"currentColor",stroke:"none"})]})}];function Fd(){const[j,A]=St.useState(!1),H=()=>{navigator.clipboard.writeText("servicesjmseptember@gmail.com"),A(!0),setTimeout(()=>A(!1),2e3)};return u.jsxs("section",{id:"contact",style:{position:"relative",overflow:"hidden"},children:[u.jsx("style",{children:`
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
      `}),u.jsx("div",{className:"deco-ring"}),u.jsx("div",{className:"deco-ring-2"}),u.jsx("div",{style:{position:"absolute",top:"30%",left:"40%",width:"500px",height:"300px",background:"radial-gradient(ellipse, rgba(255,200,80,0.055) 0%, transparent 65%)",pointerEvents:"none",transform:"translateX(-50%)"}}),u.jsxs("div",{className:"contact-section",children:[u.jsxs("div",{className:"contact-left",children:[u.jsx("p",{className:"contact-eyebrow",children:"Contact"}),u.jsxs("h2",{className:"contact-headline",children:["Say",u.jsx("br",{}),"Hello",u.jsx("br",{}),u.jsx("span",{children:"To Me."})]}),u.jsx("p",{className:"contact-subtext",children:"Open for freelance projects, collaborations, and creative work. Let's build something worth remembering."}),u.jsxs("div",{className:"email-cta",children:[u.jsx("span",{className:"email-label",children:"Email Address"}),u.jsx("span",{className:"email-value",children:"servicesjmseptember@gmail.com"}),u.jsx("button",{className:`copy-btn${j?" copied":""}`,onClick:H,children:j?u.jsxs(u.Fragment,{children:[u.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("polyline",{points:"20 6 9 17 4 12"})}),"Copied!"]}):u.jsxs(u.Fragment,{children:[u.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),u.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),"Copy Email"]})})]}),u.jsx("div",{className:"social-row",children:Wd.map(s=>u.jsxs("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:"social-link",children:[s.icon,s.handle]},s.label))})]}),u.jsxs("div",{className:"contact-right",children:[u.jsxs("div",{className:"availability",children:[u.jsx("div",{className:"avail-dot"}),u.jsx("span",{className:"avail-text",children:"Available for Work"})]}),u.jsx("div",{className:"info-stack",children:[{key:"Based in",val:"Philippines"},{key:"Timezone",val:"PHT · UTC +8"},{key:"Response",val:"Within 24 hours"},{key:"Specialties",val:"Web Dev · UI Design · Graphic Art"}].map(s=>u.jsxs("div",{className:"info-row",children:[u.jsx("span",{className:"info-key",children:s.key}),u.jsx("span",{className:"info-val",children:s.val})]},s.key))}),u.jsxs("a",{href:"tel:+639352541057",className:"phone-cta",children:[u.jsx("div",{className:"phone-icon-wrap",children:u.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.3 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"})})}),u.jsxs("div",{className:"phone-text",children:[u.jsx("span",{className:"phone-sub",children:"Call me directly"}),u.jsx("span",{className:"phone-num",children:"+63 935 254 1057"})]}),u.jsx("svg",{style:{marginLeft:"auto",color:"rgba(255,200,80,0.4)",zIndex:1},width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})]}),u.jsxs("div",{className:"contact-footer",children:[u.jsxs("span",{className:"footer-copy",children:["© ",new Date().getFullYear()," Marlon Ampoon · All Rights Reserved"]}),u.jsxs("div",{className:"footer-dots",children:[u.jsx("div",{className:"footer-dot"}),u.jsx("div",{className:"footer-dot"}),u.jsx("div",{className:"footer-dot"})]})]})]})}function $d(){return u.jsxs(u.Fragment,{children:[u.jsx(fd,{}),u.jsx(Ld,{}),u.jsx(Qd,{}),u.jsx(Vd,{}),u.jsx(Jd,{}),u.jsx(Fd,{})]})}const Id=[{label:"Home",target:"home"},{label:"About",target:"about"},{label:"Graphics",target:"graphics"},{label:"Dev",target:"dev"},{label:"Experience",target:"experience"},{label:"Tools",target:"tools"},{label:"Contact",target:"contact"}],Pd=[{label:"Facebook",href:"https://www.facebook.com/profile.php?id=61582378152401",icon:u.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})})},{label:"Instagram",href:"https://www.instagram.com/dsaleiri/",icon:u.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),u.jsx("circle",{cx:"12",cy:"12",r:"4"}),u.jsx("circle",{cx:"17.5",cy:"6.5",r:"1",fill:"currentColor",stroke:"none"})]})},{label:"Email",href:"mailto:servicesjmseptember@gmail.com",icon:u.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),u.jsx("path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"})]})},{label:"Phone",href:"tel:+639352541057",icon:u.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.3 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"})})}];function e5(){const j=A=>document.getElementById(A)?.scrollIntoView({behavior:"smooth"});return u.jsxs("footer",{style:{position:"relative",overflow:"hidden"},children:[u.jsx("style",{children:`
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
      `}),u.jsx("div",{className:"footer-bg-glow"}),u.jsx("div",{className:"footer-glow-line"}),u.jsxs("div",{className:"footer-body",children:[u.jsxs("div",{className:"footer-brand",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"footer-logo-name",children:["Marlon ",u.jsx("span",{children:"Ampoon"})]}),u.jsx("div",{className:"footer-tagline",children:"Web Dev · Graphic Artist · UI Designer"})]}),u.jsx("p",{className:"footer-desc",children:"Crafting digital experiences where clean code meets striking visual design."}),u.jsx("div",{className:"footer-socials",children:Pd.map(A=>u.jsx("a",{href:A.href,target:A.href.startsWith("http")?"_blank":void 0,rel:A.href.startsWith("http")?"noopener noreferrer":void 0,className:"footer-social-btn","aria-label":A.label,title:A.label,children:A.icon},A.label))})]}),u.jsxs("div",{children:[u.jsx("p",{className:"footer-col-title",children:"Navigation"}),u.jsx("ul",{className:"footer-nav-list",children:Id.map(A=>u.jsx("li",{children:u.jsx("button",{className:"footer-nav-btn",onClick:()=>j(A.target),children:A.label})},A.target))})]}),u.jsxs("div",{children:[u.jsx("p",{className:"footer-col-title",children:"Contact"}),u.jsxs("ul",{className:"footer-contact-list",children:[u.jsxs("li",{className:"footer-contact-item",children:[u.jsx("span",{className:"footer-contact-key",children:"Email"}),u.jsx("a",{href:"mailto:servicesjmseptember@gmail.com",className:"footer-contact-val",children:"servicesjmseptember@gmail.com"})]}),u.jsxs("li",{className:"footer-contact-item",children:[u.jsx("span",{className:"footer-contact-key",children:"Phone"}),u.jsx("a",{href:"tel:+639352541057",className:"footer-contact-val",children:"+63 935 254 1057"})]}),u.jsxs("li",{className:"footer-contact-item",children:[u.jsx("span",{className:"footer-contact-key",children:"Facebook"}),u.jsx("a",{href:"https://www.facebook.com/profile.php?id=61582378152401",target:"_blank",rel:"noopener noreferrer",className:"footer-contact-val",children:"Marlon Ampoon"})]}),u.jsxs("li",{className:"footer-contact-item",children:[u.jsx("span",{className:"footer-contact-key",children:"Instagram"}),u.jsx("a",{href:"https://www.instagram.com/dsaleiri/",target:"_blank",rel:"noopener noreferrer",className:"footer-contact-val",children:"@dsaleiri"})]})]})]})]}),u.jsxs("div",{className:"footer-bottom",children:[u.jsxs("span",{className:"footer-copy",children:["© ",new Date().getFullYear()," Marlon Ampoon · All Rights Reserved"]}),u.jsxs("span",{className:"footer-made",children:["Made with ",u.jsx("span",{children:"♥"})," in the Philippines"]})]})]})}function t5(){const j=A=>document.getElementById(A)?.scrollIntoView({behavior:"smooth"});return u.jsxs("section",{id:"home",style:{minHeight:"86vh",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",maxWidth:"997px",margin:"0 auto",width:"100%",position:"relative",padding:"33px 24px"},children:[u.jsx("div",{style:{position:"absolute",top:"20%",left:"-10%",width:"500px",height:"500px",background:"radial-gradient(circle, rgba(255,200,80,0.07) 0%, transparent 70%)",pointerEvents:"none"}}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"clamp(2rem, 6vw, 5rem)",flexWrap:"wrap",width:"100%"},children:[u.jsxs("div",{style:{flex:"1 1 280px",zIndex:1,minWidth:0},children:[u.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"0.72rem",letterSpacing:"0.4em",textTransform:"uppercase",color:"#ffc850",marginBottom:"1rem"},children:"Hello, I'm"}),u.jsxs("h1",{style:{fontFamily:"'Bebas Neue', sans-serif",fontSize:"clamp(3rem, 10vw, 8.5rem)",letterSpacing:"0.04em",lineHeight:.93,color:"#fff",margin:"0 0 1.25rem"},children:["Marlon",u.jsx("br",{}),u.jsx("span",{style:{color:"#ffc850"},children:"Ampoon"})]}),u.jsx("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap",marginBottom:"1.5rem"},children:["Web Developer","Graphic Artist","UI Designer"].map(A=>u.jsx("span",{style:{padding:"0.3rem 0.85rem",border:"1px solid rgba(255,200,80,0.3)",borderRadius:"2px",fontFamily:"'DM Sans', sans-serif",fontSize:"0.65rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"#ffc850"},children:A},A))}),u.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"clamp(0.85rem, 2vw, 1.1rem)",color:"rgba(255,255,255,0.5)",maxWidth:"440px",lineHeight:1.75,marginBottom:"2.5rem",fontWeight:300},children:"Crafting digital experiences where clean, purposeful code meets striking visual design. From pixel-perfect UIs to bold graphic work — I build things that look great and work even better."}),u.jsxs("div",{style:{display:"flex",gap:"0.85rem",flexWrap:"wrap"},children:[u.jsx("button",{onClick:()=>j("graphics"),style:{padding:"0.75rem 2rem",background:"#ffc850",color:"#08080c",border:"none",borderRadius:"2px",fontFamily:"'DM Sans', sans-serif",fontWeight:700,fontSize:"0.75rem",letterSpacing:"0.15em",textTransform:"uppercase",cursor:"pointer",transition:"all 0.2s"},onMouseEnter:A=>A.currentTarget.style.background="#fff",onMouseLeave:A=>A.currentTarget.style.background="#ffc850",children:"View My Work"}),u.jsx("button",{onClick:()=>j("contact"),style:{padding:"0.75rem 2rem",background:"transparent",color:"#fff",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"2px",fontFamily:"'DM Sans', sans-serif",fontWeight:400,fontSize:"0.75rem",letterSpacing:"0.15em",textTransform:"uppercase",cursor:"pointer",transition:"border-color 0.2s"},onMouseEnter:A=>A.currentTarget.style.borderColor="#ffc850",onMouseLeave:A=>A.currentTarget.style.borderColor="rgba(255,255,255,0.2)",children:"Get In Touch"})]})]}),u.jsx("div",{style:{flex:"0 0 auto",zIndex:1,display:"flex",alignItems:"center",justifyContent:"center",width:"100%",maxWidth:"clamp(140px, 26vw, 320px)"},children:u.jsx("div",{style:{width:"clamp(140px, 26vw, 320px)",height:"clamp(140px, 26vw, 320px)",borderRadius:"50%",padding:"4px",background:"linear-gradient(135deg, #ffc850 0%, #ff8c00 50%, #08080c 100%)",boxShadow:"0 0 80px rgba(255,200,80,0.18)"},children:u.jsx("div",{style:{width:"100%",height:"100%",borderRadius:"50%",overflow:"hidden",background:"#1a1a22"},children:u.jsx("img",{src:gr,alt:"Marlon Ampoon",style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top center"}})})})})]}),u.jsxs("div",{style:{position:"absolute",bottom:"2.5rem",left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"0.4rem",opacity:.4},children:[u.jsx("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"0.6rem",letterSpacing:"0.3em",textTransform:"uppercase",color:"#fff"},children:"Scroll"}),u.jsx("div",{style:{width:"1px",height:"40px",background:"linear-gradient(to bottom, #ffc850, transparent)"}})]})]})}function a5(){return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
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

        #root { position: relative; z-index: 1; }

        main {
          padding-top: 72px;
          width: 100%;
          max-width: 100%;
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
      `}),u.jsx(sd,{}),u.jsxs("main",{children:[u.jsx(t5,{}),u.jsx($d,{})]}),u.jsx(e5,{})]})}od.createRoot(document.getElementById("root")).render(u.jsx(St.StrictMode,{children:u.jsx(a5,{})}));
