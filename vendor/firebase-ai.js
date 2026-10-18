(()=>{var Ce=()=>{};var Re=function(t){let e=[],n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ht=function(t){let e=[],n=0,s=0;for(;n<t.length;){let i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){let r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){let r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{let r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ae={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){let r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,d=c?t[i+2]:0,f=r>>2,p=(r&3)<<4|a>>4,E=(a&15)<<2|d>>6,g=d&63;c||(g=64,o||(E=64)),s.push(n[f],n[p],n[E],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Re(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ht(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();let n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){let r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;let d=i<t.length?n[t.charAt(i)]:64;++i;let p=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||d==null||p==null)throw new J;let E=r<<2|a>>4;if(s.push(E),d!==64){let g=a<<4&240|d>>2;if(s.push(g),p!==64){let b=d<<6&192|p;s.push(b)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},J=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},pt=function(t){let e=Re(t);return Ae.encodeByteArray(e,!0)},K=function(t){return pt(t).replace(/\./g,"")},Ie=function(t){try{return Ae.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function gt(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}var mt=()=>gt().__FIREBASE_DEFAULTS__,Et=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;let t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bt=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=t&&Ie(t[1]);return e&&JSON.parse(e)},yt=()=>{try{return Ce()||mt()||Et()||bt()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}};var q=()=>{var t;return(t=yt())==null?void 0:t.config};var M=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}};function Te(){try{return typeof indexedDB=="object"}catch{return!1}}function ve(){return new Promise((t,e)=>{try{let n=!0,s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(n){e(n)}})}var _t="FirebaseError",_=class t extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=_t,Object.setPrototypeOf(this,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,P.prototype.create)}},P=class{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){let s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?wt(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new _(i,a,s)}};function wt(t,e){return t.replace(St,(n,s)=>{let i=e[s];return i!=null?String(i):`<${s}?>`})}var St=/\{\$([^}]+)}/g;function F(t,e){if(t===e)return!0;let n=Object.keys(t),s=Object.keys(e);for(let i of n){if(!s.includes(i))return!1;let r=t[i],o=e[i];if(Oe(r)&&Oe(o)){if(!F(r,o))return!1}else if(r!==o)return!1}for(let i of s)if(!n.includes(i))return!1;return!0}function Oe(t){return t!==null&&typeof t=="object"}var ls=14400*1e3;function De(t){return t&&t._delegate?t._delegate:t}var w=class{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var I="[DEFAULT]";var X=class{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){let s=new M;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var i;let n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(i=e==null?void 0:e.optional)!=null?i:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ot(e))try{this.getOrInitializeService({instanceIdentifier:I})}catch{}for(let[n,s]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(n);try{let r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=I){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=I){return this.instances.has(e)}getOptions(e=I){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(let[r,o]of this.instancesDeferred.entries()){let a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var o;let s=this.normalizeInstanceIdentifier(n),i=(o=this.onInitCallbacks.get(s))!=null?o:new Set;i.add(e),this.onInitCallbacks.set(s,i);let r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){let s=this.onInitCallbacks.get(n);if(s)for(let i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ct(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=I){return this.component?this.component.multipleInstances?e:I:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function Ct(t){return t===I?void 0:t}function Ot(t){return t.instantiationMode==="EAGER"}var $=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let n=new X(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}};var Rt=[],h;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(h||(h={}));var At={debug:h.DEBUG,verbose:h.VERBOSE,info:h.INFO,warn:h.WARN,error:h.ERROR,silent:h.SILENT},It=h.INFO,Tt={[h.DEBUG]:"log",[h.VERBOSE]:"log",[h.INFO]:"info",[h.WARN]:"warn",[h.ERROR]:"error"},vt=(t,e,...n)=>{if(e<t.logLevel)return;let s=new Date().toISOString(),i=Tt[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},N=class{constructor(e){this.name=e,this._logLevel=It,this._logHandler=vt,this._userLogHandler=null,Rt.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in h))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?At[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,h.DEBUG,...e),this._logHandler(this,h.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,h.VERBOSE,...e),this._logHandler(this,h.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,h.INFO,...e),this._logHandler(this,h.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,h.WARN,...e),this._logHandler(this,h.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,h.ERROR,...e),this._logHandler(this,h.ERROR,...e)}};var Dt=(t,e)=>e.some(n=>t instanceof n),Ne,Le;function Nt(){return Ne||(Ne=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Lt(){return Le||(Le=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var ke=new WeakMap,Z=new WeakMap,Me=new WeakMap,Q=new WeakMap,te=new WeakMap;function kt(t){let e=new Promise((n,s)=>{let i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(y(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ke.set(n,t)}).catch(()=>{}),te.set(e,t),e}function Mt(t){if(Z.has(t))return;let e=new Promise((n,s)=>{let i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Z.set(t,e)}var ee={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Z.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Me.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return y(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Pe(t){ee=t(ee)}function Pt(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){let s=t.call(H(this),e,...n);return Me.set(s,e.sort?e.sort():[e]),y(s)}:Lt().includes(t)?function(...e){return t.apply(H(this),e),y(ke.get(this))}:function(...e){return y(t.apply(H(this),e))}}function xt(t){return typeof t=="function"?Pt(t):(t instanceof IDBTransaction&&Mt(t),Dt(t,Nt())?new Proxy(t,ee):t)}function y(t){if(t instanceof IDBRequest)return kt(t);if(Q.has(t))return Q.get(t);let e=xt(t);return e!==t&&(Q.set(t,e),te.set(e,t)),e}var H=t=>te.get(t);function Be(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){let o=indexedDB.open(t,e),a=y(o);return s&&o.addEventListener("upgradeneeded",c=>{s(y(o.result),c.oldVersion,c.newVersion,y(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}var Bt=["get","getKey","getAll","getAllKeys","count"],Ut=["put","add","delete","clear"],ne=new Map;function xe(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ne.get(e))return ne.get(e);let n=e.replace(/FromIndex$/,""),s=e!==n,i=Ut.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Bt.includes(n)))return;let r=async function(o,...a){let c=this.transaction(o,i?"readwrite":"readonly"),d=c.store;return s&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),i&&c.done]))[0]};return ne.set(e,r),r}Pe(t=>({...t,get:(e,n,s)=>xe(e,n)||t.get(e,n,s),has:(e,n)=>!!xe(e,n)||t.has(e,n)}));var ie=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ft(n)){let s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}};function Ft(t){let e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}var re="@firebase/app",Ue="0.14.4";var S=new N("@firebase/app"),$t="@firebase/app-compat",Ht="@firebase/analytics-compat",Vt="@firebase/analytics",Gt="@firebase/app-check-compat",jt="@firebase/app-check",Wt="@firebase/auth",zt="@firebase/auth-compat",Yt="@firebase/database",Jt="@firebase/data-connect",Kt="@firebase/database-compat",qt="@firebase/functions",Xt="@firebase/functions-compat",Qt="@firebase/installations",Zt="@firebase/installations-compat",en="@firebase/messaging",tn="@firebase/messaging-compat",nn="@firebase/performance",sn="@firebase/performance-compat",rn="@firebase/remote-config",on="@firebase/remote-config-compat",an="@firebase/storage",cn="@firebase/storage-compat",ln="@firebase/firestore",dn="@firebase/ai",un="@firebase/firestore-compat",fn="firebase";var oe="[DEFAULT]",hn={[re]:"fire-core",[$t]:"fire-core-compat",[Vt]:"fire-analytics",[Ht]:"fire-analytics-compat",[jt]:"fire-app-check",[Gt]:"fire-app-check-compat",[Wt]:"fire-auth",[zt]:"fire-auth-compat",[Yt]:"fire-rtdb",[Jt]:"fire-data-connect",[Kt]:"fire-rtdb-compat",[qt]:"fire-fn",[Xt]:"fire-fn-compat",[Qt]:"fire-iid",[Zt]:"fire-iid-compat",[en]:"fire-fcm",[tn]:"fire-fcm-compat",[nn]:"fire-perf",[sn]:"fire-perf-compat",[rn]:"fire-rc",[on]:"fire-rc-compat",[an]:"fire-gcs",[cn]:"fire-gcs-compat",[ln]:"fire-fst",[un]:"fire-fst-compat",[dn]:"fire-vertex","fire-js":"fire-js",[fn]:"fire-js-all"};var V=new Map,pn=new Map,ae=new Map;function Fe(t,e){try{t.container.addComponent(e)}catch(n){S.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function x(t){let e=t.name;if(ae.has(e))return S.debug(`There were multiple attempts to register component ${e}.`),!1;ae.set(e,t);for(let n of V.values())Fe(n,t);for(let n of pn.values())Fe(n,t);return!0}function Ge(t,e){let n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function je(t){return t==null?!1:t.settings!==void 0}var gn={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},O=new P("app","Firebase",gn);var ce=class{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new w("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw O.create("app-deleted",{appName:this._name})}};function ue(t,e={}){let n=t;typeof e!="object"&&(e={name:e});let s={name:oe,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw O.create("bad-app-name",{appName:String(i)});if(n||(n=q()),!n)throw O.create("no-options");let r=V.get(i);if(r){if(F(n,r.options)&&F(s,r.config))return r;throw O.create("duplicate-app",{appName:i})}let o=new $(i);for(let c of ae.values())o.addComponent(c);let a=new ce(n,s,o);return V.set(i,a),a}function We(t=oe){let e=V.get(t);if(!e&&t===oe&&q())return ue();if(!e)throw O.create("no-app",{appName:t});return e}function R(t,e,n){var o;let s=(o=hn[t])!=null?o:t;n&&(s+=`-${n}`);let i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){let a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&a.push("and"),r&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),S.warn(a.join(" "));return}x(new w(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}var mn="firebase-heartbeat-database",En=1,B="firebase-heartbeat-store",se=null;function ze(){return se||(se=Be(mn,En,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(B)}catch(n){console.warn(n)}}}}).catch(t=>{throw O.create("idb-open",{originalErrorMessage:t.message})})),se}async function bn(t){try{let n=(await ze()).transaction(B),s=await n.objectStore(B).get(Ye(t));return await n.done,s}catch(e){if(e instanceof _)S.warn(e.message);else{let n=O.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});S.warn(n.message)}}}async function $e(t,e){try{let s=(await ze()).transaction(B,"readwrite");await s.objectStore(B).put(e,Ye(t)),await s.done}catch(n){if(n instanceof _)S.warn(n.message);else{let s=O.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});S.warn(s.message)}}}function Ye(t){return`${t.name}!${t.options.appId}`}var yn=1024,_n=30,le=class{constructor(e){this.container=e,this._heartbeatsCache=null;let n=this.container.getProvider("app").getImmediate();this._storage=new de(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{let i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=He();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>_n){let o=Sn(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){S.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let n=He(),{heartbeatsToSend:s,unsentEntries:i}=wn(this._heartbeatsCache.heartbeats),r=K(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return S.warn(n),""}}};function He(){return new Date().toISOString().substring(0,10)}function wn(t,e=yn){let n=[],s=t.slice();for(let i of t){let r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ve(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ve(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}var de=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Te()?ve().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let n=await bn(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var s;if(await this._canUseIndexedDBPromise){let i=await this.read();return $e(this.app,{lastSentHeartbeatDate:(s=e.lastSentHeartbeatDate)!=null?s:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var s;if(await this._canUseIndexedDBPromise){let i=await this.read();return $e(this.app,{lastSentHeartbeatDate:(s=e.lastSentHeartbeatDate)!=null?s:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function Ve(t){return K(JSON.stringify({version:2,heartbeats:t})).length}function Sn(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}function Cn(t){x(new w("platform-logger",e=>new ie(e),"PRIVATE")),x(new w("heartbeat",e=>new le(e),"PRIVATE")),R(re,Ue,t),R(re,Ue,"esm2020"),R("fire-js","")}Cn("");var On="firebase",Rn="12.4.0";R(On,Rn,"app");var Je="@firebase/ai",he="2.4.0";var L="AI",Ke="us-central1",An="firebasevertexai.googleapis.com",In="v1beta",qe=he,Tn="gl-js",vn=180*1e3,Dn="gemini-2.0-flash-lite";var u=class t extends _{constructor(e,n,s){let i=L,r=`${i}/${e}`,o=`${i}: ${n} (${r})`;super(e,o),this.code=e,this.customErrorData=s,Error.captureStackTrace&&Error.captureStackTrace(this,t),Object.setPrototypeOf(this,t.prototype),this.toString=()=>o}};var Xe=["user","model","function","system"];var it={HARM_SEVERITY_NEGLIGIBLE:"HARM_SEVERITY_NEGLIGIBLE",HARM_SEVERITY_LOW:"HARM_SEVERITY_LOW",HARM_SEVERITY_MEDIUM:"HARM_SEVERITY_MEDIUM",HARM_SEVERITY_HIGH:"HARM_SEVERITY_HIGH",HARM_SEVERITY_UNSUPPORTED:"HARM_SEVERITY_UNSUPPORTED"};var Qe={STOP:"STOP",MAX_TOKENS:"MAX_TOKENS",SAFETY:"SAFETY",RECITATION:"RECITATION",OTHER:"OTHER",BLOCKLIST:"BLOCKLIST",PROHIBITED_CONTENT:"PROHIBITED_CONTENT",SPII:"SPII",MALFORMED_FUNCTION_CALL:"MALFORMED_FUNCTION_CALL"};var v={PREFER_ON_DEVICE:"prefer_on_device",ONLY_ON_DEVICE:"only_on_device",ONLY_IN_CLOUD:"only_in_cloud",PREFER_IN_CLOUD:"prefer_in_cloud"};var l={ERROR:"error",REQUEST_ERROR:"request-error",RESPONSE_ERROR:"response-error",FETCH_ERROR:"fetch-error",SESSION_CLOSED:"session-closed",INVALID_CONTENT:"invalid-content",API_NOT_ENABLED:"api-not-enabled",INVALID_SCHEMA:"invalid-schema",NO_API_KEY:"no-api-key",NO_APP_ID:"no-app-id",NO_MODEL:"no-model",NO_PROJECT_ID:"no-project-id",PARSE_FAILED:"parse-failed",UNSUPPORTED:"unsupported"};var C={VERTEX_AI:"VERTEX_AI",GOOGLE_AI:"GOOGLE_AI"};var j=class{constructor(e){this.backendType=e}},A=class extends j{constructor(){super(C.GOOGLE_AI)}},k=class extends j{constructor(e=Ke){super(C.VERTEX_AI),e?this.location=e:this.location=Ke}};function Nn(t){if(t instanceof A)return`${L}/googleai`;if(t instanceof k)return`${L}/vertexai/${t.location}`;throw new u(l.ERROR,`Invalid backend: ${JSON.stringify(t.backendType)}`)}function Ln(t){let e=t.split("/");if(e[0]!==L)throw new u(l.ERROR,`Invalid instance identifier, unknown prefix '${e[0]}'`);switch(e[1]){case"vertexai":let s=e[2];if(!s)throw new u(l.ERROR,`Invalid instance identifier, unknown location '${t}'`);return new k(s);case"googleai":return new A;default:throw new u(l.ERROR,`Invalid instance identifier string: '${t}'`)}}var m=new N("@firebase/vertexai"),T;(function(t){t.UNAVAILABLE="unavailable",t.DOWNLOADABLE="downloadable",t.DOWNLOADING="downloading",t.AVAILABLE="available"})(T||(T={}));var W=class t{constructor(e,n,s={createOptions:{expectedInputs:[{type:"image"}]}}){this.languageModelProvider=e,this.mode=n,this.onDeviceParams=s,this.isDownloading=!1}async isAvailable(e){if(!this.mode)return m.debug("On-device inference unavailable because mode is undefined."),!1;if(this.mode===v.ONLY_IN_CLOUD)return m.debug('On-device inference unavailable because mode is "only_in_cloud".'),!1;let n=await this.downloadIfAvailable();if(this.mode===v.ONLY_ON_DEVICE){if(n===T.UNAVAILABLE)throw new u(l.API_NOT_ENABLED,"Local LanguageModel API not available in this environment.");return(n===T.DOWNLOADABLE||n===T.DOWNLOADING)&&(m.debug("Waiting for download of LanguageModel to complete."),await this.downloadPromise),!0}return n!==T.AVAILABLE?(m.debug(`On-device inference unavailable because availability is "${n}".`),!1):t.isOnDeviceRequest(e)?!0:(m.debug("On-device inference unavailable because request is incompatible."),!1)}async generateContent(e){let n=await this.createSession(),s=await Promise.all(e.contents.map(t.toLanguageModelMessage)),i=await n.prompt(s,this.onDeviceParams.promptOptions);return t.toResponse(i)}async generateContentStream(e){let n=await this.createSession(),s=await Promise.all(e.contents.map(t.toLanguageModelMessage)),i=n.promptStreaming(s,this.onDeviceParams.promptOptions);return t.toStreamResponse(i)}async countTokens(e){throw new u(l.REQUEST_ERROR,"Count Tokens is not yet available for on-device model.")}static isOnDeviceRequest(e){if(e.contents.length===0)return m.debug("Empty prompt rejected for on-device inference."),!1;for(let n of e.contents){if(n.role==="function")return m.debug('"Function" role rejected for on-device inference.'),!1;for(let s of n.parts)if(s.inlineData&&t.SUPPORTED_MIME_TYPES.indexOf(s.inlineData.mimeType)===-1)return m.debug(`Unsupported mime type "${s.inlineData.mimeType}" rejected for on-device inference.`),!1}return!0}async downloadIfAvailable(){var n;let e=await((n=this.languageModelProvider)==null?void 0:n.availability(this.onDeviceParams.createOptions));return e===T.DOWNLOADABLE&&this.download(),e}download(){var e;this.isDownloading||(this.isDownloading=!0,this.downloadPromise=(e=this.languageModelProvider)==null?void 0:e.create(this.onDeviceParams.createOptions).finally(()=>{this.isDownloading=!1}))}static async toLanguageModelMessage(e){let n=await Promise.all(e.parts.map(t.toLanguageModelMessageContent));return{role:t.toLanguageModelMessageRole(e.role),content:n}}static async toLanguageModelMessageContent(e){if(e.text)return{type:"text",value:e.text};if(e.inlineData){let s=await(await fetch(`data:${e.inlineData.mimeType};base64,${e.inlineData.data}`)).blob();return{type:"image",value:await createImageBitmap(s)}}throw new u(l.REQUEST_ERROR,"Processing of this Part type is not currently supported.")}static toLanguageModelMessageRole(e){return e==="model"?"assistant":"user"}async createSession(){if(!this.languageModelProvider)throw new u(l.UNSUPPORTED,"Chrome AI requested for unsupported browser version.");let e=await this.languageModelProvider.create(this.onDeviceParams.createOptions);return this.oldSession&&this.oldSession.destroy(),this.oldSession=e,e}static toResponse(e){return{json:async()=>({candidates:[{content:{parts:[{text:e}]}}]})}}static toStreamResponse(e){let n=new TextEncoder;return{body:e.pipeThrough(new TransformStream({transform(s,i){let r=JSON.stringify({candidates:[{content:{role:"model",parts:[{text:s}]}}]});i.enqueue(n.encode(`data: ${r}

`))}}))}}};W.SUPPORTED_MIME_TYPES=["image/jpeg","image/png"];function kn(t,e,n){if(typeof e!="undefined"&&t)return new W(e.LanguageModel,t,n)}var pe=class{constructor(e,n,s,i,r){this.app=e,this.backend=n,this.chromeAdapterFactory=r;let o=i==null?void 0:i.getImmediate({optional:!0}),a=s==null?void 0:s.getImmediate({optional:!0});this.auth=a||null,this.appCheck=o||null,n instanceof k?this.location=n.location:this.location=""}_delete(){return Promise.resolve()}set options(e){this._options=e}get options(){return this._options}};function Mn(t,{instanceIdentifier:e}){if(!e)throw new u(l.ERROR,"AIService instance identifier is undefined.");let n=Ln(e),s=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new pe(s,n,i,r,kn)}var ge=class t{constructor(e,n){var s,i,r,o,a,c,d;if((i=(s=e.app)==null?void 0:s.options)!=null&&i.apiKey)if((o=(r=e.app)==null?void 0:r.options)!=null&&o.projectId)if((c=(a=e.app)==null?void 0:a.options)!=null&&c.appId){if(this._apiSettings={apiKey:e.app.options.apiKey,project:e.app.options.projectId,appId:e.app.options.appId,automaticDataCollectionEnabled:e.app.automaticDataCollectionEnabled,location:e.location,backend:e.backend},je(e.app)&&e.app.settings.appCheckToken){let f=e.app.settings.appCheckToken;this._apiSettings.getAppCheckToken=()=>Promise.resolve({token:f})}else e.appCheck&&((d=e.options)!=null&&d.useLimitedUseAppCheckTokens?this._apiSettings.getAppCheckToken=()=>e.appCheck.getLimitedUseToken():this._apiSettings.getAppCheckToken=()=>e.appCheck.getToken());e.auth&&(this._apiSettings.getAuthToken=()=>e.auth.getToken()),this.model=t.normalizeModelName(n,this._apiSettings.backend.backendType)}else throw new u(l.NO_APP_ID,'The "appId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid app ID.');else throw new u(l.NO_PROJECT_ID,'The "projectId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid project ID.');else throw new u(l.NO_API_KEY,'The "apiKey" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid API key.')}static normalizeModelName(e,n){return n===C.GOOGLE_AI?t.normalizeGoogleAIModelName(e):t.normalizeVertexAIModelName(e)}static normalizeGoogleAIModelName(e){return`models/${e}`}static normalizeVertexAIModelName(e){let n;return e.includes("/")?e.startsWith("models/")?n=`publishers/google/${e}`:n=e:n=`publishers/google/models/${e}`,n}};var U;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.PREDICT="predict"})(U||(U={}));var z=class{constructor(e,n,s,i,r){this.model=e,this.task=n,this.apiSettings=s,this.stream=i,this.requestOptions=r}toString(){let e=new URL(this.baseUrl);return e.pathname=`/${this.apiVersion}/${this.modelPath}:${this.task}`,e.search=this.queryParams.toString(),e.toString()}get baseUrl(){var e;return((e=this.requestOptions)==null?void 0:e.baseUrl)||`https://${An}`}get apiVersion(){return In}get modelPath(){if(this.apiSettings.backend instanceof A)return`projects/${this.apiSettings.project}/${this.model}`;if(this.apiSettings.backend instanceof k)return`projects/${this.apiSettings.project}/locations/${this.apiSettings.backend.location}/${this.model}`;throw new u(l.ERROR,`Invalid backend: ${JSON.stringify(this.apiSettings.backend)}`)}get queryParams(){let e=new URLSearchParams;return this.stream&&e.set("alt","sse"),e}};function Pn(){let t=[];return t.push(`${Tn}/${qe}`),t.push(`fire/${qe}`),t.join(" ")}async function xn(t){let e=new Headers;if(e.append("Content-Type","application/json"),e.append("x-goog-api-client",Pn()),e.append("x-goog-api-key",t.apiSettings.apiKey),t.apiSettings.automaticDataCollectionEnabled&&e.append("X-Firebase-Appid",t.apiSettings.appId),t.apiSettings.getAppCheckToken){let n=await t.apiSettings.getAppCheckToken();n&&(e.append("X-Firebase-AppCheck",n.token),n.error&&m.warn(`Unable to obtain a valid App Check token: ${n.error.message}`))}if(t.apiSettings.getAuthToken){let n=await t.apiSettings.getAuthToken();n&&e.append("Authorization",`Firebase ${n.accessToken}`)}return e}async function Bn(t,e,n,s,i,r){let o=new z(t,e,n,s,r);return{url:o.toString(),fetchOptions:{method:"POST",headers:await xn(o),body:i}}}async function ye(t,e,n,s,i,r){let o=new z(t,e,n,s,r),a,c;try{let d=await Bn(t,e,n,s,i,r),f=(r==null?void 0:r.timeout)!=null&&r.timeout>=0?r.timeout:vn,p=new AbortController;if(c=setTimeout(()=>p.abort(),f),d.fetchOptions.signal=p.signal,a=await fetch(d.url,d.fetchOptions),!a.ok){let E="",g;try{let b=await a.json();E=b.error.message,b.error.details&&(E+=` ${JSON.stringify(b.error.details)}`,g=b.error.details)}catch{}throw a.status===403&&g&&g.some(b=>b.reason==="SERVICE_DISABLED")&&g.some(b=>{var we,Se;return(Se=(we=b.links)==null?void 0:we[0])==null?void 0:Se.description.includes("Google developers console API activation")})?new u(l.API_NOT_ENABLED,`The Firebase AI SDK requires the Firebase AI API ('firebasevertexai.googleapis.com') to be enabled in your Firebase project. Enable this API by visiting the Firebase Console at https://console.firebase.google.com/project/${o.apiSettings.project}/genai/ and clicking "Get started". If you enabled this API recently, wait a few minutes for the action to propagate to our systems and then retry.`,{status:a.status,statusText:a.statusText,errorDetails:g}):new u(l.FETCH_ERROR,`Error fetching from ${o}: [${a.status} ${a.statusText}] ${E}`,{status:a.status,statusText:a.statusText,errorDetails:g})}}catch(d){let f=d;throw d.code!==l.FETCH_ERROR&&d.code!==l.API_NOT_ENABLED&&d instanceof Error&&(f=new u(l.ERROR,`Error fetching from ${o.toString()}: ${d.message}`),f.stack=d.stack),f}finally{c&&clearTimeout(c)}return a}function G(t){if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&m.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),rt(t.candidates[0]))throw new u(l.RESPONSE_ERROR,`Response error: ${D(t)}. Response body stored in error.response`,{response:t});return!0}else return!1}function Y(t){return t.candidates&&!t.candidates[0].hasOwnProperty("index")&&(t.candidates[0].index=0),Un(t)}function Un(t){return t.text=()=>{if(G(t))return Ze(t,e=>!e.thought);if(t.promptFeedback)throw new u(l.RESPONSE_ERROR,`Text not available. ${D(t)}`,{response:t});return""},t.thoughtSummary=()=>{if(G(t)){let e=Ze(t,n=>!!n.thought);return e===""?void 0:e}else if(t.promptFeedback)throw new u(l.RESPONSE_ERROR,`Thought summary not available. ${D(t)}`,{response:t})},t.inlineDataParts=()=>{if(G(t))return $n(t);if(t.promptFeedback)throw new u(l.RESPONSE_ERROR,`Data not available. ${D(t)}`,{response:t})},t.functionCalls=()=>{if(G(t))return Fn(t);if(t.promptFeedback)throw new u(l.RESPONSE_ERROR,`Function call not available. ${D(t)}`,{response:t})},t}function Ze(t,e){var s,i,r,o;let n=[];if((i=(s=t.candidates)==null?void 0:s[0].content)!=null&&i.parts)for(let a of(o=(r=t.candidates)==null?void 0:r[0].content)==null?void 0:o.parts)a.text&&e(a)&&n.push(a.text);return n.length>0?n.join(""):""}function Fn(t){var n,s,i,r;let e=[];if((s=(n=t.candidates)==null?void 0:n[0].content)!=null&&s.parts)for(let o of(r=(i=t.candidates)==null?void 0:i[0].content)==null?void 0:r.parts)o.functionCall&&e.push(o.functionCall);if(e.length>0)return e}function $n(t){var n,s,i,r;let e=[];if((s=(n=t.candidates)==null?void 0:n[0].content)!=null&&s.parts)for(let o of(r=(i=t.candidates)==null?void 0:i[0].content)==null?void 0:r.parts)o.inlineData&&e.push(o);if(e.length>0)return e}var Hn=[Qe.RECITATION,Qe.SAFETY];function rt(t){return!!t.finishReason&&Hn.some(e=>e===t.finishReason)}function D(t){var n,s,i;let e="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)e+="Response was blocked",(n=t.promptFeedback)!=null&&n.blockReason&&(e+=` due to ${t.promptFeedback.blockReason}`),(s=t.promptFeedback)!=null&&s.blockReasonMessage&&(e+=`: ${t.promptFeedback.blockReasonMessage}`);else if((i=t.candidates)!=null&&i[0]){let r=t.candidates[0];rt(r)&&(e+=`Candidate was blocked due to ${r.finishReason}`,r.finishMessage&&(e+=`: ${r.finishMessage}`))}return e}function ot(t){var e,n;if((e=t.safetySettings)==null||e.forEach(s=>{if(s.method)throw new u(l.UNSUPPORTED,"SafetySetting.method is not supported in the the Gemini Developer API. Please remove this property.")}),(n=t.generationConfig)!=null&&n.topK){let s=Math.round(t.generationConfig.topK);s!==t.generationConfig.topK&&(m.warn("topK in GenerationConfig has been rounded to the nearest integer to match the format for requests to the Gemini Developer API."),t.generationConfig.topK=s)}return t}function _e(t){return{candidates:t.candidates?Gn(t.candidates):void 0,prompt:t.promptFeedback?jn(t.promptFeedback):void 0,usageMetadata:t.usageMetadata}}function Vn(t,e){return{generateContentRequest:{model:e,...t}}}function Gn(t){let e=[],n;return e&&t.forEach(s=>{var o,a;let i;if(s.citationMetadata&&(i={citations:s.citationMetadata.citationSources}),s.safetyRatings&&(n=s.safetyRatings.map(c=>{var d,f,p;return{...c,severity:(d=c.severity)!=null?d:it.HARM_SEVERITY_UNSUPPORTED,probabilityScore:(f=c.probabilityScore)!=null?f:0,severityScore:(p=c.severityScore)!=null?p:0}})),(a=(o=s.content)==null?void 0:o.parts)!=null&&a.some(c=>c==null?void 0:c.videoMetadata))throw new u(l.UNSUPPORTED,"Part.videoMetadata is not supported in the Gemini Developer API. Please remove this property.");let r={index:s.index,content:s.content,finishReason:s.finishReason,finishMessage:s.finishMessage,safetyRatings:n,citationMetadata:i,groundingMetadata:s.groundingMetadata,urlContextMetadata:s.urlContextMetadata};e.push(r)}),e}function jn(t){let e=[];return t.safetyRatings.forEach(s=>{var i,r,o;e.push({category:s.category,probability:s.probability,severity:(i=s.severity)!=null?i:it.HARM_SEVERITY_UNSUPPORTED,probabilityScore:(r=s.probabilityScore)!=null?r:0,severityScore:(o=s.severityScore)!=null?o:0,blocked:s.blocked})}),{blockReason:t.blockReason,safetyRatings:e,blockReasonMessage:t.blockReasonMessage}}var et=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function Wn(t,e){let n=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),s=Jn(n),[i,r]=s.tee();return{stream:Yn(i,e),response:zn(r,e)}}async function zn(t,e){let n=[],s=t.getReader();for(;;){let{done:i,value:r}=await s.read();if(i){let o=Kn(n);return e.backend.backendType===C.GOOGLE_AI&&(o=_e(o)),Y(o)}n.push(r)}}async function*Yn(t,e){var s,i;let n=t.getReader();for(;;){let{value:r,done:o}=await n.read();if(o)break;let a;e.backend.backendType===C.GOOGLE_AI?a=Y(_e(r)):a=Y(r);let c=(s=a.candidates)==null?void 0:s[0];!((i=c==null?void 0:c.content)!=null&&i.parts)&&!(c!=null&&c.finishReason)&&!(c!=null&&c.citationMetadata)&&!(c!=null&&c.urlContextMetadata)||(yield a)}}function Jn(t){let e=t.getReader();return new ReadableStream({start(s){let i="";return r();function r(){return e.read().then(({value:o,done:a})=>{if(a){if(i.trim()){s.error(new u(l.PARSE_FAILED,"Failed to parse stream"));return}s.close();return}i+=o;let c=i.match(et),d;for(;c;){try{d=JSON.parse(c[1])}catch{s.error(new u(l.PARSE_FAILED,`Error parsing JSON response: "${c[1]}`));return}s.enqueue(d),i=i.substring(c[0].length),c=i.match(et)}return r()})}}})}function Kn(t){let e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(let s of t)if(s.candidates)for(let i of s.candidates){let r=i.index||0;n.candidates||(n.candidates=[]),n.candidates[r]||(n.candidates[r]={index:i.index}),n.candidates[r].citationMetadata=i.citationMetadata,n.candidates[r].finishReason=i.finishReason,n.candidates[r].finishMessage=i.finishMessage,n.candidates[r].safetyRatings=i.safetyRatings,n.candidates[r].groundingMetadata=i.groundingMetadata;let o=i.urlContextMetadata;if(typeof o=="object"&&o!==null&&Object.keys(o).length>0&&(n.candidates[r].urlContextMetadata=o),i.content){if(!i.content.parts)continue;n.candidates[r].content||(n.candidates[r].content={role:i.content.role||"user",parts:[]});for(let a of i.content.parts){let c={...a};a.text!==""&&Object.keys(c).length>0&&n.candidates[r].content.parts.push(c)}}}return n}var qn=[l.FETCH_ERROR,l.ERROR,l.API_NOT_ENABLED];async function at(t,e,n,s){if(!e)return s();switch(e.mode){case v.ONLY_ON_DEVICE:if(await e.isAvailable(t))return n();throw new u(l.UNSUPPORTED,"Inference mode is ONLY_ON_DEVICE, but an on-device model is not available.");case v.ONLY_IN_CLOUD:return s();case v.PREFER_IN_CLOUD:try{return await s()}catch(i){if(i instanceof u&&qn.includes(i.code))return n();throw i}case v.PREFER_ON_DEVICE:return await e.isAvailable(t)?n():s();default:throw new u(l.ERROR,`Unexpected infererence mode: ${e.mode}`)}}async function Xn(t,e,n,s){return t.backend.backendType===C.GOOGLE_AI&&(n=ot(n)),ye(e,U.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),s)}async function ct(t,e,n,s,i){let r=await at(n,s,()=>s.generateContentStream(n),()=>Xn(t,e,n,i));return Wn(r,t)}async function Qn(t,e,n,s){return t.backend.backendType===C.GOOGLE_AI&&(n=ot(n)),ye(e,U.GENERATE_CONTENT,t,!1,JSON.stringify(n),s)}async function lt(t,e,n,s,i){let r=await at(n,s,()=>s.generateContent(n),()=>Qn(t,e,n,i)),o=await Zn(r,t);return{response:Y(o)}}async function Zn(t,e){let n=await t.json();return e.backend.backendType===C.GOOGLE_AI?_e(n):n}function dt(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function me(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(let n of t)typeof n=="string"?e.push({text:n}):e.push(n);return es(e)}function es(t){let e={role:"user",parts:[]},n={role:"function",parts:[]},s=!1,i=!1;for(let r of t)"functionResponse"in r?(n.parts.push(r),i=!0):(e.parts.push(r),s=!0);if(s&&i)throw new u(l.INVALID_CONTENT,"Within a single message, FunctionResponse cannot be mixed with other type of Part in the request for sending chat message.");if(!s&&!i)throw new u(l.INVALID_CONTENT,"No Content is provided for sending chat message.");return s?e:n}function fe(t){let e;return t.contents?e=t:e={contents:[me(t)]},t.systemInstruction&&(e.systemInstruction=dt(t.systemInstruction)),e}var tt=["text","inlineData","functionCall","functionResponse","thought","thoughtSignature"],ts={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","thought","thoughtSignature"],system:["text"]},nt={user:["model"],function:["model"],model:["user","function"],system:[]};function ns(t){let e=null;for(let n of t){let{role:s,parts:i}=n;if(!e&&s!=="user")throw new u(l.INVALID_CONTENT,`First Content should be with role 'user', got ${s}`);if(!Xe.includes(s))throw new u(l.INVALID_CONTENT,`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(Xe)}`);if(!Array.isArray(i))throw new u(l.INVALID_CONTENT,"Content should have 'parts' property with an array of Parts");if(i.length===0)throw new u(l.INVALID_CONTENT,"Each Content should have at least one part");let r={text:0,inlineData:0,functionCall:0,functionResponse:0,thought:0,thoughtSignature:0,executableCode:0,codeExecutionResult:0};for(let a of i)for(let c of tt)c in a&&(r[c]+=1);let o=ts[s];for(let a of tt)if(!o.includes(a)&&r[a]>0)throw new u(l.INVALID_CONTENT,`Content with role '${s}' can't contain '${a}' part`);if(e&&!nt[s].includes(e.role))throw new u(l.INVALID_CONTENT,`Content with role '${s}' can't follow '${e.role}'. Valid previous roles: ${JSON.stringify(nt)}`);e=n}}var st="SILENT_ERROR",Ee=class{constructor(e,n,s,i,r){this.model=n,this.chromeAdapter=s,this.params=i,this.requestOptions=r,this._history=[],this._sendPromise=Promise.resolve(),this._apiSettings=e,i!=null&&i.history&&(ns(i.history),this._history=i.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e){var r,o,a,c,d;await this._sendPromise;let n=me(e),s={safetySettings:(r=this.params)==null?void 0:r.safetySettings,generationConfig:(o=this.params)==null?void 0:o.generationConfig,tools:(a=this.params)==null?void 0:a.tools,toolConfig:(c=this.params)==null?void 0:c.toolConfig,systemInstruction:(d=this.params)==null?void 0:d.systemInstruction,contents:[...this._history,n]},i={};return this._sendPromise=this._sendPromise.then(()=>lt(this._apiSettings,this.model,s,this.chromeAdapter,this.requestOptions)).then(f=>{var p,E;if(f.response.candidates&&f.response.candidates.length>0){this._history.push(n);let g={parts:((p=f.response.candidates)==null?void 0:p[0].content.parts)||[],role:((E=f.response.candidates)==null?void 0:E[0].content.role)||"model"};this._history.push(g)}else{let g=D(f.response);g&&m.warn(`sendMessage() was unsuccessful. ${g}. Inspect response object for details.`)}i=f}),await this._sendPromise,i}async sendMessageStream(e){var r,o,a,c,d;await this._sendPromise;let n=me(e),s={safetySettings:(r=this.params)==null?void 0:r.safetySettings,generationConfig:(o=this.params)==null?void 0:o.generationConfig,tools:(a=this.params)==null?void 0:a.tools,toolConfig:(c=this.params)==null?void 0:c.toolConfig,systemInstruction:(d=this.params)==null?void 0:d.systemInstruction,contents:[...this._history,n]},i=ct(this._apiSettings,this.model,s,this.chromeAdapter,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>i).catch(f=>{throw new Error(st)}).then(f=>f.response).then(f=>{if(f.candidates&&f.candidates.length>0){this._history.push(n);let p={...f.candidates[0].content};p.role||(p.role="model"),this._history.push(p)}else{let p=D(f);p&&m.warn(`sendMessageStream() was unsuccessful. ${p}. Inspect response object for details.`)}}).catch(f=>{f.message!==st&&m.error(f)}),i}};async function ss(t,e,n,s){let i="";if(t.backend.backendType===C.GOOGLE_AI){let o=Vn(n,e);i=JSON.stringify(o)}else i=JSON.stringify(n);return(await ye(e,U.COUNT_TOKENS,t,!1,i,s)).json()}async function is(t,e,n,s,i){if((s==null?void 0:s.mode)===v.ONLY_ON_DEVICE)throw new u(l.UNSUPPORTED,"countTokens() is not supported for on-device models.");return ss(t,e,n,i)}var be=class extends ge{constructor(e,n,s,i){super(e,n.model),this.chromeAdapter=i,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=dt(n.systemInstruction),this.requestOptions=s||{}}async generateContent(e){let n=fe(e);return lt(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...n},this.chromeAdapter,this.requestOptions)}async generateContentStream(e){let n=fe(e);return ct(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...n},this.chromeAdapter,this.requestOptions)}startChat(e){return new Ee(this._apiSettings,this.model,this.chromeAdapter,{tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,generationConfig:this.generationConfig,safetySettings:this.safetySettings,...e},this.requestOptions)}async countTokens(e){let n=fe(e);return is(this._apiSettings,this.model,n,this.chromeAdapter)}};var rs="audio-processor",Ps=`
  class AudioProcessor extends AudioWorkletProcessor {
    constructor(options) {
      super();
      this.targetSampleRate = options.processorOptions.targetSampleRate;
      // 'sampleRate' is a global variable available inside the AudioWorkletGlobalScope,
      // representing the native sample rate of the AudioContext.
      this.inputSampleRate = sampleRate;
    }

    /**
     * This method is called by the browser's audio engine for each block of audio data.
     * Input is a single input, with a single channel (input[0][0]).
     */
    process(inputs) {
      const input = inputs[0];
      if (input && input.length > 0 && input[0].length > 0) {
        const pcmData = input[0]; // Float32Array of raw audio samples.
        
        // Simple linear interpolation for resampling.
        const resampled = new Float32Array(Math.round(pcmData.length * this.targetSampleRate / this.inputSampleRate));
        const ratio = pcmData.length / resampled.length;
        for (let i = 0; i < resampled.length; i++) {
          resampled[i] = pcmData[Math.floor(i * ratio)];
        }

        // Convert Float32 (-1, 1) samples to Int16 (-32768, 32767)
        const resampledInt16 = new Int16Array(resampled.length);
        for (let i = 0; i < resampled.length; i++) {
          const sample = Math.max(-1, Math.min(1, resampled[i]));
          if (sample < 0) {
            resampledInt16[i] = sample * 32768;
          } else {
            resampledInt16[i] = sample * 32767;
          }
        }
        
        this.port.postMessage(resampledInt16);
      }
      // Return true to keep the processor alive and processing the next audio block.
      return true;
    }
  }

  // Register the processor with a name that can be used to instantiate it from the main thread.
  registerProcessor('${rs}', AudioProcessor);
`;function ut(t=We(),e){var a,c;t=De(t);let n=Ge(t,L),s=(a=e==null?void 0:e.backend)!=null?a:new A,i={useLimitedUseAppCheckTokens:(c=e==null?void 0:e.useLimitedUseAppCheckTokens)!=null?c:!1},r=Nn(s),o=n.getImmediate({identifier:r});return o.options=i,o}function ft(t,e,n){var o;let s=e,i;if(s.mode?i=s.inCloudParams||{model:Dn}:i=e,!i.model)throw new u(l.NO_MODEL,"Must provide a model name. Example: getGenerativeModel({ model: 'my-model-name' })");let r=(o=t.chromeAdapterFactory)==null?void 0:o.call(t,s.mode,typeof window=="undefined"?void 0:window,s.onDeviceParams);return new be(t,i,n,r)}function os(){x(new w(L,Mn,"PUBLIC").setMultipleInstances(!0)),R(Je,he),R(Je,he,"esm2020")}os();window.FridgeAI={model(t,e){let n=ue(t,"fridge-ai"),s=ut(n,{backend:new A});return ft(s,{model:e,generationConfig:{responseMimeType:"application/json",temperature:.2}})}};})();
/*! Bundled license information:

@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/logger/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
@firebase/component/dist/esm/index.esm.js:
@firebase/app/dist/esm/index.esm.js:
@firebase/app/dist/esm/index.esm.js:
@firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/ai/dist/esm/index.esm.js:
@firebase/ai/dist/esm/index.esm.js:
@firebase/ai/dist/esm/index.esm.js:
@firebase/ai/dist/esm/index.esm.js:
@firebase/ai/dist/esm/index.esm.js:
@firebase/ai/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/ai/dist/esm/index.esm.js:
@firebase/ai/dist/esm/index.esm.js:
@firebase/ai/dist/esm/index.esm.js:
@firebase/ai/dist/esm/index.esm.js:
@firebase/ai/dist/esm/index.esm.js:
@firebase/ai/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/ai/dist/esm/index.esm.js:
@firebase/ai/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/ai/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
