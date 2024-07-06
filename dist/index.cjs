var t=require("@bsv/sdk"),n=require("sigma-protocol");function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=Array(n);r<n;r++)e[r]=t[r];return e}function e(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(e)return(e=e.call(t)).next.bind(e);if(Array.isArray(t)||(e=function(t,n){if(t){if("string"==typeof t)return r(t,n);var e={}.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var o=0;return function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(){return o=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)({}).hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},o.apply(null,arguments)}function i(t,n){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},i(t,n)}var s=function(t){return Buffer.from(t).toString("hex")},a=/*#__PURE__*/function(n){function r(){return n.apply(this,arguments)||this}var e,o;return o=n,(e=r).prototype=Object.create(o.prototype),e.prototype.constructor=e,i(e,o),r.prototype.lock=function(n,r,e,o){var i="";if(void 0!==r&&void 0!==e){var a=s("ord"),u=Buffer.from(r,"base64").toString("hex").trim();if(!u)throw new Error("Invalid file data");var c=s(e);if(!c)throw new Error("Invalid media type");i="OP_0 OP_IF "+a+" OP_1 "+c+" OP_0 "+u+" OP_ENDIF"}var f=(i?i+" ":"")+(new t.P2PKH).lock(n).toASM();if(o&&(!o.app||!o.type))throw new Error("MAP.app and MAP.type are required fields");if(null!=o&&o.app&&null!=o&&o.type){f=f+" OP_RETURN "+s("1PuQa7K62MiKCtssSLKy1kh56WWU7MtUR5")+" "+s("SET");for(var d=0,l=Object.entries(o);d<l.length;d++){var h=l[d],v=h[0],p=h[1];"cmd"!==v&&(f=f+" "+s(v)+" "+s(p))}}return t.LockingScript.fromASM(f)},r}(t.P2PKH),u=t.Utils.fromBase58Check,c=function(n,r){var e=t.fromUtxo(o({},n,{script:Buffer.from(n.script,"base64").toString("hex")}),r);return e.sourceTXID=n.txid,e},f=function(t,r){try{var e,o=function(t){if(e)return t;throw new Error("Signer must be a LocalSigner or RemoteSigner")},i=null==r?void 0:r.idKey,s=null==r?void 0:r.keyHost;if(i){var a=new n.Sigma(t).sign(i);return Promise.resolve(a.signedTx)}var u=function(){if(s){var o=null==r?void 0:r.authToken,i=new n.Sigma(t);return function(t,n){try{var r=Promise.resolve(i.remoteSign(s,o)).then(function(t){return e=1,t.signedTx})}catch(t){return n(t)}return r&&r.then?r.then(void 0,n):r}(0,function(t){throw console.log(t),new Error("Remote signing to "+s+" failed")})}}();return Promise.resolve(u&&u.then?u.then(o):o(u))}catch(t){return Promise.reject(t)}};const d="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function l(t,n,r){if(!t.s){if(r instanceof h){if(!r.s)return void(r.o=l.bind(null,t,n));1&n&&(n=r.s),r=r.v}if(r&&r.then)return void r.then(l.bind(null,t,n),l.bind(null,t,2));t.s=n,t.v=r;var e=t.o;e&&e(t)}}var h=/*#__PURE__*/function(){function t(){}return t.prototype.then=function(n,r){var e=new t,o=this.s;if(o){var i=1&o?n:r;if(i){try{l(e,1,i(this.v))}catch(t){l(e,2,t)}return e}return this}return this.o=function(t){try{var o=t.v;1&t.s?l(e,1,n?n(o):o):r?l(e,1,r(o)):l(e,2,o)}catch(t){l(e,2,t)}},e},t}();function v(t){return t instanceof h&&1&t.s}var p=function(n){try{var r,o=function(){function r(){return Promise.resolve(u.fee(s)).then(function(){return Promise.resolve(u.sign()).then(function(){return e&&(e.satoshis=u.outputs[u.outputs.length-1].satoshis,e.txid=u.id("hex")),{tx:u,spentOutpoints:p,payChange:e}})})}if(I<K)throw new Error("Not enough ordinals to send");var e;if(I>K+BigInt(A)){var o=(new t.P2PKH).lock(n.changeAddress||n.paymentPk.toAddress().toString()),i={lockingScript:o,change:!0};e={txid:"",vout:u.outputs.length,satoshis:0,script:Buffer.from(o.toHex(),"hex").toString("base64")},u.addOutput(i)}var a=function(){if(n.signer)return Promise.resolve(f(u,n.signer)).then(function(t){u=t})}();return a&&a.then?a.then(r):r()};n.satsPerKb||(n.satsPerKb=10),n.additionalPayments||(n.additionalPayments=[]),void 0===n.enforceUniformSend&&(n.enforceUniformSend=!0);for(var i,s=new t.SatoshisPerKilobyte(n.satsPerKb),u=new t.Transaction,p=[],m=e(n.ordinals);!(i=m()).done;){var g=i.value;if(1!==g.satoshis)throw new Error("1Sat Ordinal utxos must have exactly 1 satoshi");var y=c(g,(new a).unlock(n.ordPk));p.push(g.txid+"_"+g.vout),u.addInput(y)}if(n.enforceUniformSend&&n.destinations.length!==n.ordinals.length)throw new Error("Number of destinations must match number of ordinals being sent");for(var P,b=e(n.destinations);!(P=b()).done;){var w,S,x,k=P.value;x=null!=(w=k.inscription)&&w.dataB64&&null!=(S=k.inscription)&&S.contentType?(new a).lock(k.address,k.inscription.dataB64,k.inscription.contentType,n.metaData):(new t.P2PKH).lock(k.address),u.addOutput({satoshis:1,lockingScript:x})}for(var O,T=e(n.additionalPayments);!(O=T()).done;){var B=O.value;u.addOutput({satoshis:B.amount,lockingScript:(new t.P2PKH).lock(B.to)})}var I=0n,K=u.outputs.reduce(function(t,n){return t+BigInt(n.satoshis||0)},0n),A=0,E=function(t,n,r){if("function"==typeof t[d]){var e,o,i,s=t[d]();if(function t(a){try{for(;!((e=s.next()).done||r&&r());)if((a=n(e.value))&&a.then){if(!v(a))return void a.then(t,i||(i=l.bind(null,o=new h,2)));a=a.v}o?l(o,1,a):o=a}catch(t){l(o||(o=new h),2,t)}}(),s.return){var a=function(t){try{e.done||s.return()}catch(t){}return t};if(o&&o.then)return o.then(a,function(t){throw a(t)});a()}return o}if(!("length"in t))throw new TypeError("Object is not iterable");for(var u=[],c=0;c<t.length;c++)u.push(t[c]);return function(t,n,r){var e,o,i=-1;return function s(a){try{for(;++i<t.length&&(!r||!r());)if((a=n(i))&&a.then){if(!v(a))return void a.then(s,o||(o=l.bind(null,e=new h,2)));a=a.v}e?l(e,1,a):e=a}catch(t){l(e||(e=new h),2,t)}}(),e}(u,function(t){return n(u[t])},r)}(n.paymentUtxos,function(e){var o=c(e,(new t.P2PKH).unlock(n.paymentPk));return p.push(e.txid+"_"+e.vout),u.addInput(o),I+=BigInt(e.satoshis),Promise.resolve(s.computeFee(u)).then(function(t){A=t,I>=K+BigInt(A)&&(r=1)})},function(){return r});return Promise.resolve(E&&E.then?E.then(o):o())}catch(t){return Promise.reject(t)}};const m="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function g(t,n,r){if(!t.s){if(r instanceof P){if(!r.s)return void(r.o=g.bind(null,t,n));1&n&&(n=r.s),r=r.v}if(r&&r.then)return void r.then(g.bind(null,t,n),g.bind(null,t,2));t.s=n,t.v=r;var e=t.o;e&&e(t)}}var y,P=/*#__PURE__*/function(){function t(){}return t.prototype.then=function(n,r){var e=new t,o=this.s;if(o){var i=1&o?n:r;if(i){try{g(e,1,i(this.v))}catch(t){g(e,2,t)}return e}return this}return this.o=function(t){try{var o=t.v;1&t.s?g(e,1,n?n(o):o):r?g(e,1,r(o)):g(e,2,o)}catch(t){g(e,2,t)}},e},t}();function b(t){return t instanceof P&&1&t.s}exports.TokenType=void 0,(y=exports.TokenType||(exports.TokenType={})).BSV20="bsv20",y.BSV21="bsv21",exports.createOrdinals=function(n){try{for(var r,o=n.utxos,i=n.destinations,s=n.paymentPk,u=n.changeAddress,d=n.satsPerKb,l=n.metaData,h=n.signer,v=n.additionalPayments,p=void 0===v?[]:v,m=new t.SatoshisPerKilobyte(void 0===d?10:d),g=new t.Transaction,y=e(o);!(r=y()).done;){var P=c(r.value,(new t.P2PKH).unlock(s));g.addInput(P)}i.length>100&&console.warn("Creating many inscriptions at once can be slow. Consider using multiple transactions instead.");for(var b,w=e(i);!(b=w()).done;){var S=b.value;if(!S.inscription)throw new Error("Inscription is required for all destinations");g.addOutput({satoshis:1,lockingScript:(new a).lock(S.address,S.inscription.dataB64,S.inscription.contentType,l)})}for(var x,k=e(p);!(x=k()).done;){var O=x.value;g.addOutput({satoshis:O.amount,lockingScript:(new t.P2PKH).lock(O.to)})}var T=o.reduce(function(t,n){return t+BigInt(n.satoshis)},0n),B=g.outputs.reduce(function(t,n){return t+BigInt(n.satoshis||0)},0n);return Promise.resolve(m.computeFee(g)).then(function(n){function r(){return Promise.resolve(g.fee(m)).then(function(){return Promise.resolve(g.sign()).then(function(){return e&&(e.satoshis=g.outputs[g.outputs.length-1].satoshis,e.txid=g.id("hex")),{tx:g,spentOutpoints:o.map(function(t){return t.txid+"_"+t.vout}),payChange:e}})})}var e;if(T>B+BigInt(n)){var i=(new t.P2PKH).lock(u||s.toAddress().toString()),a={lockingScript:i,change:!0};e={txid:"",vout:g.outputs.length,satoshis:0,script:Buffer.from(i.toHex(),"hex").toString("base64")},g.addOutput(a)}var c=function(){if(h)return Promise.resolve(f(g,h)).then(function(t){g=t})}();return c&&c.then?c.then(r):r()})}catch(t){return Promise.reject(t)}},exports.fetchPayUtxos=function(n){try{var r="https://ordinals.gorillapool.io/api/txos/address/"+n+"/unspent?bsv20=false";return console.log({payUrl:r}),Promise.resolve(fetch(r)).then(function(r){if(!r.ok)throw new Error("Error fetching pay utxos");return Promise.resolve(r.json()).then(function(r){r=r.filter(function(t){return 1!==t.satoshis});var e=u(n),o=(new t.P2PKH).lock(e.data);return r.map(function(t){return{txid:t.txid,vout:t.vout,satoshis:t.satoshis,script:Buffer.from(o.toBinary()).toString("base64")}})})})}catch(t){return Promise.reject(t)}},exports.sendOrdinals=p,exports.sendUtxos=function(n){try{for(var r,o,i=function(){if(x<k+O)throw new Error("Not enough funds to send. Total sats in: "+x+", Total sats out: "+k+", Fee: "+O);var n;if(x>k+O){var r=(new t.P2PKH).lock(h),e={lockingScript:r,change:!0};n={txid:"",vout:p.outputs.length,satoshis:0,script:Buffer.from(r.toHex(),"hex").toString("base64")},p.addOutput(e)}else x<k+O&&console.log("No change needed");return Promise.resolve(p.fee(v)).then(function(){return Promise.resolve(p.sign()).then(function(){return n&&(n.satoshis=p.outputs[p.outputs.length-1].satoshis,n.txid=p.id("hex")),{tx:p,spentOutpoints:s.map(function(t){return t.txid+"_"+t.vout}),payChange:n}})})},s=n.utxos,a=n.paymentPk,u=n.payments,f=n.satsPerKb,d=void 0===f?10:f,l=n.changeAddress,h=void 0===l?a.toAddress().toString():l,v=new t.SatoshisPerKilobyte(d),p=new t.Transaction,y=e(u);!(o=y()).done;){var w=o.value,S={satoshis:w.amount,lockingScript:(new t.P2PKH).lock(w.to)};p.addOutput(S)}var x=0n,k=p.outputs.reduce(function(t,n){return t+(n.satoshis||0)},0),O=0,T=function(t,n,r){if("function"==typeof t[m]){var e,o,i,s=t[m]();if(function t(a){try{for(;!((e=s.next()).done||r&&r());)if((a=n(e.value))&&a.then){if(!b(a))return void a.then(t,i||(i=g.bind(null,o=new P,2)));a=a.v}o?g(o,1,a):o=a}catch(t){g(o||(o=new P),2,t)}}(),s.return){var a=function(t){try{e.done||s.return()}catch(t){}return t};if(o&&o.then)return o.then(a,function(t){throw a(t)});a()}return o}if(!("length"in t))throw new TypeError("Object is not iterable");for(var u=[],c=0;c<t.length;c++)u.push(t[c]);return function(t,n,r){var e,o,i=-1;return function s(a){try{for(;++i<t.length&&(!r||!r());)if((a=n(i))&&a.then){if(!b(a))return void a.then(s,o||(o=g.bind(null,e=new P,2)));a=a.v}e?g(e,1,a):e=a}catch(t){g(e||(e=new P),2,t)}}(),e}(u,function(t){return n(u[t])},r)}(s,function(n){var e=c(n,(new t.P2PKH).unlock(a));return p.addInput(e),x+=BigInt(n.satoshis),Promise.resolve(v.computeFee(p)).then(function(t){x>=k+(O=t)&&(r=1)})},function(){return r});return Promise.resolve(T&&T.then?T.then(i):i())}catch(t){return Promise.reject(t)}},exports.transferOrdTokens=function(t){try{var n=t.protocol,r=t.tokenID,i=t.utxos,s=t.inputTokens,a=t.distributions,u=t.paymentPk,c=t.ordPk,f=t.changeAddress,d=t.tokenChangeAddress,l=t.satsPerKb,h=void 0===l?10:l,v=t.metaData,m=t.signer,g=t.additionalPayments,y=void 0===g?[]:g,P=0n,b=0n,w=0n;if(!s.every(function(t){return t.id===r}))throw new Error("Input tokens do not match the provided tokenID");for(var S,x=e(s);!(S=x()).done;)b+=BigInt(S.value.amt);for(var k,O=e(a);!(k=O()).done;)w+=BigInt(k.value.amt);if(b<w)throw new Error("Not enough tokens to send");if((P=b-w)>0n){var T={address:d||c.toAddress().toString(),amt:P.toString()};a.push(T)}var B=a.map(function(t){var e,i={p:"bsv-20",op:"transfer",amt:t.amt};if(n===exports.TokenType.BSV20)e=o({},i,{tick:r});else{if(n!==exports.TokenType.BSV21)throw new Error("Invalid protocol");e=o({},i,{id:r})}return{address:t.address,inscription:{dataB64:Buffer.from(JSON.stringify(e)).toString("base64"),contentType:"application/bsv-20"}}}),I={paymentUtxos:i,ordinals:s,paymentPk:u,ordPk:c,destinations:B,changeAddress:f||u.toAddress().toString(),satsPerKb:h,metaData:v,signer:m,additionalPayments:y,enforceUniformSend:!1};return Promise.resolve(p(I)).then(function(t){var n,e=t.tx,o=t.spentOutpoints,i=t.payChange,s=B.findIndex(function(t){return t.address===(d||c.toAddress().toString())});return-1!==s&&(n={id:r,amt:P.toString(),satoshis:1,txid:e.id("hex"),vout:s,script:Buffer.from(e.outputs[s].lockingScript.toHex(),"hex").toString("base64")}),{tx:e,spentOutpoints:o,payChange:i,tokenChange:n}})}catch(t){return Promise.reject(t)}};
//# sourceMappingURL=index.cjs.map
