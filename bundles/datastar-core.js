// Datastar v1.0.0-beta.2
var U=/🖕JS_DS🚀/.source,D=U.slice(0,5),j=U.slice(4),k="datastar";var z="1.0.0-beta.2";var me={Morph:"morph",Inner:"inner",Outer:"outer",Prepend:"prepend",Append:"append",Before:"before",After:"after",UpsertAttributes:"upsertAttributes"},Ee=me.Morph;var y=(s=>(s[s.Attribute=1]="Attribute",s[s.Watcher=2]="Watcher",s[s.Action=3]="Action",s))(y||{});var ye="computed",Y={type:1,name:ye,keyReq:1,valReq:1,onLoad:({key:n,signals:e,genRX:t})=>{let s=t();e.setComputed(n,s)}};var X=n=>n.replace(/[A-Z]+(?![a-z])|[A-Z]/g,(e,t)=>(t?"-":"")+e.toLowerCase()),Z=n=>n.replace(/(?:^\w|[A-Z]|\b\w)/g,(e,t)=>t===0?e.toLowerCase():e.toUpperCase()).replace(/\s+/g,""),Q=n=>new Function(`return Object.assign({}, ${n})`)();var ee={type:1,name:"signals",removeOnLoad:!0,onLoad:n=>{let{key:e,value:t,genRX:s,signals:i,mods:o}=n,r=o.has("ifmissing");if(e!==""&&!r){let l=t===""?t:s()();i.setValue(e,l)}else{let l=Q(n.value);n.value=JSON.stringify(l);let f=s()();i.merge(f,r)}}};var te={type:1,name:"star",keyReq:2,valReq:2,onLoad:()=>{alert("YOU ARE PROBABLY OVERCOMPLICATING IT")}};var R=class{#e=0;#t;constructor(e=k){this.#t=e}with(e){if(typeof e=="string")for(let t of e.split(""))this.with(t.charCodeAt(0));else this.#e=(this.#e<<5)-this.#e+e;return this}reset(){return this.#e=0,this}get value(){return this.#t+Math.abs(this.#e).toString(36)}};function ne(n){if(n.id)return n.id;let e=new R,t=n;for(;t.parentNode;){if(t.id){e.with(t.id);break}if(t===t.ownerDocument.documentElement)e.with(t.tagName);else{for(let s=1,i=n;i.previousElementSibling;i=i.previousElementSibling,s++)e.with(s);t=t.parentNode}t=t.parentNode}return e.value}var ve=`${window.location.origin}/errors`;function B(n,e,t={}){let s=new Error;e=e[0].toUpperCase()+e.slice(1),s.name=`${k} ${n} error`;let i=X(e).replaceAll("-","_"),o=new URLSearchParams({metadata:JSON.stringify(t)}).toString(),r=JSON.stringify(t,null,2);return s.message=`${e}
More info: ${ve}/${n}/${i}?${o}
Context: ${r}`,s}function h(n,e,t={}){return B("internal",e,Object.assign({from:n},t))}function se(n,e,t={}){let s={plugin:{name:e.plugin.name,type:y[e.plugin.type]}};return B("init",n,Object.assign(s,t))}function m(n,e,t={}){let s={plugin:{name:e.plugin.name,type:y[e.plugin.type]},element:{id:e.el.id,tag:e.el.tagName},expression:{rawKey:e.rawKey,key:e.key,value:e.value,validSignals:e.signals.paths(),fnContent:e.fnContent}};return B("runtime",n,Object.assign(s,t))}var v="preact-signals",Se=Symbol.for("preact-signals"),_=1,T=2,C=4,N=8,P=16,w=32;function q(){M++}function K(){if(M>1){M--;return}let n,e=!1;for(;A!==void 0;){let t=A;for(A=void 0,G++;t!==void 0;){let s=t._nextBatchedEffect;if(t._nextBatchedEffect=void 0,t._flags&=~T,!(t._flags&N)&&re(t))try{t._callback()}catch(i){e||(n=i,e=!0)}t=s}}if(G=0,M--,e)throw h(v,"BatchError, error",{error:n})}var a;var A,M=0,G=0,V=0;function ie(n){if(a===void 0)return;let e=n._node;if(e===void 0||e._target!==a)return e={_version:0,_source:n,_prevSource:a._sources,_nextSource:void 0,_target:a,_prevTarget:void 0,_nextTarget:void 0,_rollbackNode:e},a._sources!==void 0&&(a._sources._nextSource=e),a._sources=e,n._node=e,a._flags&w&&n._subscribe(e),e;if(e._version===-1)return e._version=0,e._nextSource!==void 0&&(e._nextSource._prevSource=e._prevSource,e._prevSource!==void 0&&(e._prevSource._nextSource=e._nextSource),e._prevSource=a._sources,e._nextSource=void 0,a._sources._nextSource=e,a._sources=e),e}function u(n){this._value=n,this._version=0,this._node=void 0,this._targets=void 0}u.prototype.brand=Se;u.prototype._refresh=()=>!0;u.prototype._subscribe=function(n){this._targets!==n&&n._prevTarget===void 0&&(n._nextTarget=this._targets,this._targets!==void 0&&(this._targets._prevTarget=n),this._targets=n)};u.prototype._unsubscribe=function(n){if(this._targets!==void 0){let e=n._prevTarget,t=n._nextTarget;e!==void 0&&(e._nextTarget=t,n._prevTarget=void 0),t!==void 0&&(t._prevTarget=e,n._nextTarget=void 0),n===this._targets&&(this._targets=t)}};u.prototype.subscribe=function(n){return I(()=>{let e=this.value,t=a;a=void 0;try{n(e)}finally{a=t}})};u.prototype.valueOf=function(){return this.value};u.prototype.toString=function(){return`${this.value}`};u.prototype.toJSON=function(){return this.value};u.prototype.peek=function(){let n=a;a=void 0;try{return this.value}finally{a=n}};Object.defineProperty(u.prototype,"value",{get(){let n=ie(this);return n!==void 0&&(n._version=this._version),this._value},set(n){if(n!==this._value){if(G>100)throw h(v,"SignalCycleDetected");this._value=n,this._version++,V++,q();try{for(let e=this._targets;e!==void 0;e=e._nextTarget)e._target._notify()}finally{K()}}}});function re(n){for(let e=n._sources;e!==void 0;e=e._nextSource)if(e._source._version!==e._version||!e._source._refresh()||e._source._version!==e._version)return!0;return!1}function oe(n){for(let e=n._sources;e!==void 0;e=e._nextSource){let t=e._source._node;if(t!==void 0&&(e._rollbackNode=t),e._source._node=e,e._version=-1,e._nextSource===void 0){n._sources=e;break}}}function ae(n){let e=n._sources,t;for(;e!==void 0;){let s=e._prevSource;e._version===-1?(e._source._unsubscribe(e),s!==void 0&&(s._nextSource=e._nextSource),e._nextSource!==void 0&&(e._nextSource._prevSource=s)):t=e,e._source._node=e._rollbackNode,e._rollbackNode!==void 0&&(e._rollbackNode=void 0),e=s}n._sources=t}function S(n){u.call(this,void 0),this._fn=n,this._sources=void 0,this._globalVersion=V-1,this._flags=C}S.prototype=new u;S.prototype._refresh=function(){if(this._flags&=~T,this._flags&_)return!1;if((this._flags&(C|w))===w||(this._flags&=~C,this._globalVersion===V))return!0;if(this._globalVersion=V,this._flags|=_,this._version>0&&!re(this))return this._flags&=~_,!0;let n=a;try{oe(this),a=this;let e=this._fn();(this._flags&P||this._value!==e||this._version===0)&&(this._value=e,this._flags&=~P,this._version++)}catch(e){this._value=e,this._flags|=P,this._version++}return a=n,ae(this),this._flags&=~_,!0};S.prototype._subscribe=function(n){if(this._targets===void 0){this._flags|=C|w;for(let e=this._sources;e!==void 0;e=e._nextSource)e._source._subscribe(e)}u.prototype._subscribe.call(this,n)};S.prototype._unsubscribe=function(n){if(this._targets!==void 0&&(u.prototype._unsubscribe.call(this,n),this._targets===void 0)){this._flags&=~w;for(let e=this._sources;e!==void 0;e=e._nextSource)e._source._unsubscribe(e)}};S.prototype._notify=function(){if(!(this._flags&T)){this._flags|=C|T;for(let n=this._targets;n!==void 0;n=n._nextTarget)n._target._notify()}};Object.defineProperty(S.prototype,"value",{get(){if(this._flags&_)throw h(v,"SignalCycleDetected");let n=ie(this);if(this._refresh(),n!==void 0&&(n._version=this._version),this._flags&P)throw h(v,"GetComputedError",{value:this._value});return this._value}});function le(n){return new S(n)}function ue(n){let e=n._cleanup;if(n._cleanup=void 0,typeof e=="function"){q();let t=a;a=void 0;try{e()}catch(s){throw n._flags&=~_,n._flags|=N,W(n),h(v,"CleanupEffectError",{error:s})}finally{a=t,K()}}}function W(n){for(let e=n._sources;e!==void 0;e=e._nextSource)e._source._unsubscribe(e);n._fn=void 0,n._sources=void 0,ue(n)}function be(n){if(a!==this)throw h(v,"EndEffectError");ae(this),a=n,this._flags&=~_,this._flags&N&&W(this),K()}function O(n){this._fn=n,this._cleanup=void 0,this._sources=void 0,this._nextBatchedEffect=void 0,this._flags=w}O.prototype._callback=function(){let n=this._start();try{if(this._flags&N||this._fn===void 0)return;let e=this._fn();typeof e=="function"&&(this._cleanup=e)}finally{n()}};O.prototype._start=function(){if(this._flags&_)throw h(v,"SignalCycleDetected");this._flags|=_,this._flags&=~N,ue(this),oe(this),q();let n=a;return a=this,be.bind(this,n)};O.prototype._notify=function(){this._flags&T||(this._flags|=T,this._nextBatchedEffect=A,A=this)};O.prototype._dispose=function(){this._flags|=N,this._flags&_||W(this)};function I(n){let e=new O(n);try{e._callback()}catch(t){throw e._dispose(),t}return e._dispose.bind(e)}var ce="namespacedSignals";function fe(n,e=!1){let t={};for(let s in n)if(Object.hasOwn(n,s)){if(e&&s.startsWith("_"))continue;let i=n[s];i instanceof u?t[s]=i.value:t[s]=fe(i)}return t}function de(n,e,t=!1){for(let s in e)if(Object.hasOwn(e,s)){if(s.match(/\_\_+/))throw h(ce,"InvalidSignalKey",{key:s});let i=e[s];if(i instanceof Object&&!Array.isArray(i))n[s]||(n[s]={}),de(n[s],i,t);else{if(Object.hasOwn(n,s)){if(t)continue;let r=n[s];if(r instanceof u){r.value=i;continue}}n[s]=new u(i)}}}function pe(n,e){for(let t in n)if(Object.hasOwn(n,t)){let s=n[t];s instanceof u?e(t,s):pe(s,(i,o)=>{e(`${t}.${i}`,o)})}}function xe(n,...e){let t={};for(let s of e){let i=s.split("."),o=n,r=t;for(let p=0;p<i.length-1;p++){let f=i[p];if(!o[f])return{};r[f]||(r[f]={}),o=o[f],r=r[f]}let l=i[i.length-1];r[l]=o[l]}return t}var $=class{#e={};exists(e){return!!this.signal(e)}signal(e){let t=e.split("."),s=this.#e;for(let r=0;r<t.length-1;r++){let l=t[r];if(!s[l])return null;s=s[l]}let i=t[t.length-1],o=s[i];if(!o)throw h(ce,"SignalNotFound",{path:e});return o}setSignal(e,t){let s=e.split("."),i=this.#e;for(let r=0;r<s.length-1;r++){let l=s[r];i[l]||(i[l]={}),i=i[l]}let o=s[s.length-1];i[o]=t}setComputed(e,t){let s=le(()=>t());this.setSignal(e,s)}value(e){return this.signal(e)?.value}setValue(e,t){let s=this.upsertIfMissing(e,t);s.value=t}upsertIfMissing(e,t){let s=e.split("."),i=this.#e;for(let p=0;p<s.length-1;p++){let f=s[p];i[f]||(i[f]={}),i=i[f]}let o=s[s.length-1],r=i[o];if(r instanceof u)return r;let l=new u(t);return i[o]=l,l}remove(...e){for(let t of e){let s=t.split("."),i=this.#e;for(let r=0;r<s.length-1;r++){let l=s[r];if(!i[l])return;i=i[l]}let o=s[s.length-1];delete i[o]}}merge(e,t=!1){de(this.#e,e,t)}subset(...e){return xe(this.values(),...e)}walk(e){pe(this.#e,e)}paths(){let e=new Array;return this.walk(t=>e.push(t)),e}values(e=!1){return fe(this.#e,e)}JSON(e=!0,t=!1){let s=this.values(t);return e?JSON.stringify(s,null,2):JSON.stringify(s)}toString(){return this.JSON()}};var F=class{#e=new $;#t=[];#s={};#o=[];#n=new Map;get signals(){return this.#e}get version(){return z}load(...e){for(let t of e){let s=this,i={get signals(){return s.#e},effect:r=>I(r),actions:this.#s,apply:this.apply.bind(this),cleanup:this.#i.bind(this),plugin:t},o;switch(t.type){case 2:{let r=t;this.#o.push(r),o=r.onGlobalInit;break}case 3:{this.#s[t.name]=t;break}case 1:{let r=t;this.#t.push(r),o=r.onGlobalInit;break}default:throw se("InvalidPluginType",i)}o&&o(i)}this.#t.sort((t,s)=>{let i=s.name.length-t.name.length;return i!==0?i:t.name.localeCompare(s.name)})}apply(e){this.#r(e,t=>{this.#i(t);for(let s of Object.keys(t.dataset)){let i=this.#t.find(c=>s.startsWith(c.name));if(!i)continue;t.id.length||(t.id=ne(t));let[o,...r]=s.slice(i.name.length).split(/\_\_+/),l=o.length>0;if(l){let c=o.slice(1);o=o.startsWith("-")?c:o[0].toLowerCase()+c}let p=`${t.dataset[s]}`||"",f=p.length>0,L=this,g={get signals(){return L.#e},effect:c=>I(c),apply:this.apply.bind(this),cleanup:this.#i.bind(this),actions:this.#s,genRX:()=>this.#a(g,...i.argNames||[]),plugin:i,el:t,rawKey:s,key:o,value:p,mods:new Map},b=i.keyReq||0;if(l){if(b===2)throw m(`${i.name}KeyNotAllowed`,g)}else if(b===1)throw m(`${i.name}KeyRequired`,g);let x=i.valReq||0;if(f){if(x===2)throw m(`${i.name}ValueNotAllowed`,g)}else if(x===1)throw m(`${i.name}ValueRequired`,g);if(b===3||x===3){if(l&&f)throw m(`${i.name}KeyAndValueProvided`,g);if(!l&&!f)throw m(`${i.name}KeyOrValueRequired`,g)}for(let c of r){let[E,...he]=c.split(".");g.mods.set(Z(E),new Set(he.map(_e=>_e.toLowerCase())))}let d=i.onLoad(g);d&&(this.#n.has(t)||this.#n.set(t,{id:t.id,fns:[]}),this.#n.get(t)?.fns.push(d)),i?.removeOnLoad&&delete t.dataset[s]}})}#a(e,...t){let s="",i=/(\/(\\\/|[^\/])*\/|"(\\"|[^\"])*"|'(\\'|[^'])*'|`(\\`|[^`])*`|[^;])+/gm,o=e.value.trim().match(i);if(o){let d=o.length-1,c=o[d].trim();c.startsWith("return")||(o[d]=`return (${c});`),s=o.join(`;
`)}let r=new Map,l=new RegExp(`(?:${D})(.*?)(?:${j})`,"gm");for(let d of s.matchAll(l)){let c=d[1],E=new R("dsEscaped").with(c).value;r.set(E,c),s=s.replace(D+c+j,E)}let p=/@(\w*)\(/gm,f=s.matchAll(p),L=new Set;for(let d of f)L.add(d[1]);let g=new RegExp(`@(${Object.keys(this.#s).join("|")})\\(`,"gm");s=s.replaceAll(g,"ctx.actions.$1.fn(ctx,");let b=e.signals.paths();if(b.length){let d=new RegExp(`\\$(${b.join("|")})(\\W|$)`,"gm");s=s.replaceAll(d,"ctx.signals.signal('$1').value$2")}for(let[d,c]of r)s=s.replace(d,c);let x=`return (()=> {
${s}
})()`;e.fnContent=x;try{let d=new Function("ctx",...t,x);return(...c)=>{try{return d(e,...c)}catch(E){throw m("ExecuteExpression",e,{error:E.message})}}}catch(d){throw m("GenerateExpression",e,{error:d.message})}}#r(e,t){if(!e||!(e instanceof HTMLElement||e instanceof SVGElement))return null;let s=e.dataset;if("starIgnore"in s)return null;"starIgnore__self"in s||t(e);let i=e.firstElementChild;for(;i;)this.#r(i,t),i=i.nextElementSibling}#i(e){let t=this.#n.get(e);if(t){for(let s of t.fns)s();this.#n.delete(e)}}};var ge=new F;ge.load(te,ee,Y);var J=ge;J.apply(document.body);var ot=J;export{ot as Datastar};
//# sourceMappingURL=datastar-core.js.map
