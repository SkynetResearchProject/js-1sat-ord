var e=require("@bsv/sdk"),t=require("fs"),r=require("path"),n=require("os"),o=require("crypto");function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=/*#__PURE__*/s(t),a=/*#__PURE__*/s(r),i=/*#__PURE__*/s(n),u=/*#__PURE__*/s(o);function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function p(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return l(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}const f="16.4.5",d=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/gm;function v(e){console.log(`[dotenv@${f}][DEBUG] ${e}`)}function h(e){return e&&e.DOTENV_KEY&&e.DOTENV_KEY.length>0?e.DOTENV_KEY:process.env.DOTENV_KEY&&process.env.DOTENV_KEY.length>0?process.env.DOTENV_KEY:""}function g(e,t){let r;try{r=new URL(t)}catch(e){if("ERR_INVALID_URL"===e.code){const e=new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");throw e.code="INVALID_DOTENV_KEY",e}throw e}const n=r.password;if(!n){const e=new Error("INVALID_DOTENV_KEY: Missing key part");throw e.code="INVALID_DOTENV_KEY",e}const o=r.searchParams.get("environment");if(!o){const e=new Error("INVALID_DOTENV_KEY: Missing environment part");throw e.code="INVALID_DOTENV_KEY",e}const s=`DOTENV_VAULT_${o.toUpperCase()}`,c=e.parsed[s];if(!c){const e=new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${s} in your .env.vault file.`);throw e.code="NOT_FOUND_DOTENV_ENVIRONMENT",e}return{ciphertext:c,key:n}}function E(e){let t=null;if(e&&e.path&&e.path.length>0)if(Array.isArray(e.path))for(const r of e.path)c.default.existsSync(r)&&(t=r.endsWith(".vault")?r:`${r}.vault`);else t=e.path.endsWith(".vault")?e.path:`${e.path}.vault`;else t=a.default.resolve(process.cwd(),".env.vault");return c.default.existsSync(t)?t:null}function _(e){return"~"===e[0]?a.default.join(i.default.homedir(),e.slice(1)):e}const m={configDotenv:function(e){const t=a.default.resolve(process.cwd(),".env");let r="utf8";const n=Boolean(e&&e.debug);e&&e.encoding?r=e.encoding:n&&v("No encoding is specified. UTF-8 is used by default");let o,s=[t];if(e&&e.path)if(Array.isArray(e.path)){s=[];for(const t of e.path)s.push(_(t))}else s=[_(e.path)];const i={};for(const t of s)try{const n=m.parse(c.default.readFileSync(t,{encoding:r}));m.populate(i,n,e)}catch(e){n&&v(`Failed to load ${t} ${e.message}`),o=e}let u=process.env;return e&&null!=e.processEnv&&(u=e.processEnv),m.populate(u,i,e),o?{parsed:i,error:o}:{parsed:i}},_configVault:function(e){console.log(`[dotenv@${f}][INFO] Loading env from encrypted .env.vault`);const t=m._parseVault(e);let r=process.env;return e&&null!=e.processEnv&&(r=e.processEnv),m.populate(r,t,e),{parsed:t}},_parseVault:function(e){const t=E(e),r=m.configDotenv({path:t});if(!r.parsed){const e=new Error(`MISSING_DATA: Cannot parse ${t} for an unknown reason`);throw e.code="MISSING_DATA",e}const n=h(e).split(","),o=n.length;let s;for(let e=0;e<o;e++)try{const t=g(r,n[e].trim());s=m.decrypt(t.ciphertext,t.key);break}catch(t){if(e+1>=o)throw t}return m.parse(s)},config:function(e){if(0===h(e).length)return m.configDotenv(e);const t=E(e);return t?m._configVault(e):(console.log(`[dotenv@${f}][WARN] You set DOTENV_KEY but you are missing a .env.vault file at ${t}. Did you forget to build it?`),m.configDotenv(e))},decrypt:function(e,t){const r=Buffer.from(t.slice(-64),"hex");let n=Buffer.from(e,"base64");const o=n.subarray(0,12),s=n.subarray(-16);n=n.subarray(12,-16);try{const e=u.default.createDecipheriv("aes-256-gcm",r,o);return e.setAuthTag(s),`${e.update(n)}${e.final()}`}catch(e){const t=e instanceof RangeError,r="Unsupported state or unable to authenticate data"===e.message;if(t||"Invalid key length"===e.message){const e=new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");throw e.code="INVALID_DOTENV_KEY",e}if(r){const e=new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");throw e.code="DECRYPTION_FAILED",e}throw e}},parse:function(e){const t={};let r,n=e.toString();for(n=n.replace(/\r\n?/gm,"\n");null!=(r=d.exec(n));){const e=r[1];let n=r[2]||"";n=n.trim();const o=n[0];n=n.replace(/^(['"`])([\s\S]*)\1$/gm,"$2"),'"'===o&&(n=n.replace(/\\n/g,"\n"),n=n.replace(/\\r/g,"\r")),t[e]=n}return t},populate:function(e,t,r={}){const n=Boolean(r&&r.debug),o=Boolean(r&&r.override);if("object"!=typeof t){const e=new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");throw e.code="OBJECT_REQUIRED",e}for(const r of Object.keys(t))Object.prototype.hasOwnProperty.call(e,r)?(!0===o&&(e[r]=t[r]),n&&v(!0===o?`"${r}" is already defined and WAS overwritten`:`"${r}" is already defined and was NOT overwritten`)):e[r]=t[r]}};var y=m._configVault,T=m._parseVault,I=m.config,D=m.decrypt,N=m.parse,P=m.populate,O=m;O.configDotenv=m.configDotenv,O._configVault=y,O._parseVault=T,O.config=I,O.decrypt=D,O.parse=N,O.populate=P;var w=function(e){for(var t=[],r=0,n=e.length;r<n;r++){var o=Number(e.charCodeAt(r)).toString(16);t.push(o)}return t.join("")};I();var S=function(t,r,n,o){var s="";if(void 0!==r&&void 0!==n){var c=w("ord"),a=Buffer.from(r,"base64").toString("hex").trim();s="OP_0 OP_IF "+c+" OP_1 "+w(n)+" OP_0 "+(a?a+" ":"")+"OP_ENDIF"}var i=(new e.P2PKH).lock(t).toASM()+(s?" "+s:"");if(null!=o&&o.app&&null!=o&&o.type){i=i+" OP_RETURN "+w("1PuQa7K62MiKCtssSLKy1kh56WWU7MtUR5")+" "+w("SET");for(var u=0,l=Object.entries(o);u<l.length;u++){var p=l[u],f=p[0],d=p[1];"cmd"!==f&&(i=i+" "+w(f)+" "+w(d))}}return e.LockingScript.fromASM(i)};exports.P2PKH_FULL_INPUT_SIZE=148,exports.P2PKH_INPUT_SCRIPT_SIZE=107,exports.P2PKH_OUTPUT_SIZE=34,exports.buildInscription=S,exports.buildReinscriptionTemplate=function(t,r,n,o){try{var s={sourceTXID:t.txid,sourceOutputIndex:t.vout,unlockingScript:e.UnlockingScript.fromASM(t.script),sequence:0},c=S(r,null==n?void 0:n.dataB64,null==n?void 0:n.contentType,o);return Promise.resolve(new e.Transaction(1,[s],[{satoshis:1,lockingScript:c}],0))}catch(e){return Promise.reject(e)}},exports.createOrdinal=function(t,r,n,o,s,c,a,i,u){void 0===u&&(u=[]);try{var l=new e.P2PKH,f={sourceTXID:t.txid,sourceOutputIndex:t.vout,unlockingScriptTemplate:l.unlock(n),sequence:4294967295},d=S(r,c.dataB64,c.contentType,a),v=[];v.push({satoshis:1,lockingScript:d});for(var h,g=p(u);!(h=g()).done;){var E=h.value;v.push({satoshis:E.amount,lockingScript:(new e.P2PKH).lock(E.to)})}for(var _=0,m=v;_<m.length;_++);var y=(new e.P2PKH).lock(o);v.push({lockingScript:y,change:!0});var T=new e.Transaction(1,[f],v,0);return Promise.resolve(T.fee()).then(function(){return T.getFee(),Promise.resolve(T.sign()).then(function(){return T})})}catch(e){return Promise.reject(e)}},exports.sendOrdinal=function(t,r,n,o,s,c,a,i,u,l){void 0===l&&(l=[]);try{var f=[],d={sourceTXID:r.txid,sourceOutputIndex:r.vout,unlockingScript:e.UnlockingScript.fromASM(r.script),unlockingScriptTemplate:(new e.P2PKH).unlock(c),sequence:4294967295};f.push(d);var v,h={sourceTXID:t.txid,sourceOutputIndex:t.vout,unlockingScriptTemplate:(new e.P2PKH).unlock(n),sequence:4294967295};f.push(h),v=null!=i&&i.dataB64&&null!=i&&i.contentType?S(a,i.dataB64,i.contentType,u):(new e.P2PKH).lock(a);var g=[];g.push({satoshis:1,lockingScript:v});for(var E,_=p(l);!(E=_()).done;){var m=E.value;g.push({satoshis:m.amount,lockingScript:(new e.P2PKH).lock(m.to)})}var y=(new e.P2PKH).lock(o);g.push({satoshis:t.satoshis-1,lockingScript:y,change:!0});var T=new e.Transaction(1,f,g,0);return Promise.resolve(T.fee()).then(function(){return Promise.resolve(T.sign()).then(function(){return T})})}catch(e){return Promise.reject(e)}},exports.sendUtxos=function(t,r,n,o){try{return Promise.resolve(new e.Transaction(1,[],[],0))}catch(e){return Promise.reject(e)}};
//# sourceMappingURL=index.cjs.map
