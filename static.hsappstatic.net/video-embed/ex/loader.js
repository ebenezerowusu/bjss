!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};e[n].call(r.exports,r,r.exports,o);r.l=!0;return r.exports}o.m=e;o.c=t;o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})};o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});Object.defineProperty(e,"__esModule",{value:!0})};o.t=function(e,t){1&t&&(e=o(e));if(8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);o.r(n);Object.defineProperty(n,"default",{enumerable:!0,value:e});if(2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n};o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};o.d(t,"a",t);return t};o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};o.p="//static.hsappstatic.net/video-embed/static-1.7526/";o(o.s=15)}({15:function(e,t,o){"use strict";o.r(t);const n="hs-script-loader",r="/hs/scriptloader/",i=/video-embed\/ex\/loader(-qa)?.js/,s="div.hs-video-widget[data-hsv-embed-id]",a=s+":not([data-hsv-status])";function l(e){return[].slice.call(document.querySelectorAll(e))}function d(e,t){return[].slice.call(e.querySelectorAll(t))}function c(){return l("script[src]").find(e=>i.test(e.src)||e.src.endsWith("/video-embed/static/bundles/loader.js"))}function u(){const e=document.getElementById(n);if(e&&e.src&&e.src.includes(r)){const t=document.createElement("a");t.href=e.src;const o=t.pathname.replace(r,"").replace(".js",""),n=Number(o);if(n>0)return n}return null}function h(){const e=c();return e?e.src:null}function p(e,t=!1){return t?document.querySelector(`[data-hsv-embed-id="${e}"]:not([data-hsv-status])`):document.querySelector(`[data-hsv-embed-id="${e}"]`)}function f(){return"interactive"===document.readyState||"complete"===document.readyState}const m=1e4;function g(e){const t=document.createElement("script");return new Promise((o,n)=>{let r=!1;t.onload=()=>{r=!0;o()};t.onerror=()=>n("loadScript failed");t.src=e;document.getElementsByTagName("head")[0].appendChild(t);setTimeout(()=>{if(!r){console.log(`Loading script ${e} timed out`);n("loadScript timed out")}},m)})}function y(e,t={}){e instanceof HTMLElement&&Object.assign(e.style,t)}function E(e,t){t.startsWith(".")||(t="."+t);for(;e&&e.parentElement;){if(e.parentElement.matches&&e.parentElement.matches(t))return!0;e=e.parentElement}return!1}function b(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function v(e){const{backgroundColor:t}=getComputedStyle(e);return"transparent"===t||"rgba(0, 0, 0, 0)"===t}function w(e){const t=parseInt(e.substring(1),16);return.2126*(t>>16&255)+.7152*(t>>8&255)+.0722*(t>>0&255)}const P=9/16;let I;!function(e){e.SET_UTK="SET_UTK";e.SET_PAGE_META="SET_PAGE_META";e.SET_CURRENT_TIME="SET_CURRENT_TIME";e.UPDATE_DISPLAY_OPTIONS="UPDATE_DISPLAY_OPTIONS";e.SET_PLAYER_STATUS="SET_PLAYER_STATUS";e.CONFIRM_VISIBLE="CONFIRM_VISIBLE";e.CTA_SKIPPED="CTA_SKIPPED";e.CTA_CLICKED="CTA_CLICKED";e.FORM_SKIPPED="FORM_SKIPPED";e.FORM_SUBMITTED="FORM_SUBMITTED";e.VIDEO_LOADED="VIDEO_LOADED";e.PLAYER_LOADED="PLAYER_LOADED";e.PLAYER_READY="PLAYER_READY";e.PLAYER_PLAY="PLAYER_PLAY";e.PLAYER_PAUSE="PLAYER_PAUSE";e.PLAYER_ENDED="PLAYER_ENDED";e.PLAYER_SHOW_OVERLAY="PLAYER_SHOW_OVERLAY";e.PLAYER_ORPHANED="PLAYER_ORPHANED";e.TRACKED_PLAY="TRACKED_PLAY";e.PLAYER_ANALYTICS_EVENTS="PLAYER_ANALYTICS_EVENTS"}(I||(I={}));const _=["region","posterUrl","playButtonColor","play_button_color","playButtonShape","play_button_shape","preview","richTextPreview","playerType","autoplay","loop","muted","hiddenControls","hidden_controls","hostApp","renderContext","parentUrl","maxHeight"],A=1e3,T="/share/hubspotvideo/",R="outpost",S="na1";function L(e=""){return e&&e!==S?"-"+e:""}const O=(e="")=>"forms"+L(e),C=(e="")=>"exceptions"+L(e),M=(e=!1)=>e?"hubspotqa.com":"hubspot.com",$=(e=!1)=>e?"hs-embed-reportingqa.com":"hs-embed-reporting.com",D=({hublet:e="",isQa:t=!1}={})=>`https://${O(e)}.${M(t)}/${R}`,x=({hublet:e="",isQa:t=!1}={})=>`https://${C(e)}.${$(t)}/${R}`;function k(e,...t){let o,n=0;e=e||{};for(;n<t.length;)if(t[n]){for(o in t[n])t[n].hasOwnProperty(o)&&(e[o]=t[n][o]);n++}else n++;return e}function N(e,t){if(!t)return!1;for(let o=0;o<e.length;o++)if(t.indexOf(e[o])>-1)return!0;return!1}function F(e){let t="";for(const o in e)e.hasOwnProperty(o)&&(t+=`${o}=${e[o]};`);return t}const U=({isEmbedApp:e=!1,env:t="PROD",hublet:o=""})=>{const n="PROD"!==t;return e?x({isQa:n,hublet:o}):D({isQa:n,hublet:o})};class Y{constructor(e,t){t=t||{};e||console.warn("The projectName parameter is required");this.projectName=e;this.env=(t.env||"PROD").toUpperCase();this.hublet=t.hublet||"";this.isEmbedApp=t.isEmbedApp||!1;this.level=(t.level||"ERROR").toUpperCase();this.disabled=t.disabled||!1;this.baseUrl=t.baseUrl||U({isEmbedApp:this.isEmbedApp,env:this.env,hublet:this.hublet});this.tags=t.tags||{};this.cookies=t.cookies||{};this.user=t.user||{}}bindToWindow(e=[],t=[]){e.length<1?console.warn("You need to specify allowlisted domains when binding to window errors or you will catch all page errors"):window.onerror=(o,n,r,i,s)=>{n&&N(e,n)&&!N(t,s.message)&&"script error"!==o.toLowerCase()&&this.sendReport("error",o,n,s)}}report(e,t,o={}){if(e){o.silent&&console.error(e);this.sendReport("error",e.message,e.fileName,e,t)}}reportMessage(e,t,o={}){if(e){o.silent&&console.error(e);this.sendReport("info",e,window.location.href,void 0,t)}}debug(e,t){if(e&&"DEBUG"===this.level){console.debug(e);this.sendReport("debug",e.message,e.fileName,e,t)}}addTags(e){k(this.tags,e)}addCookies(e){k(this.cookies,e)}addUserContext(e){k(this.user,e)}sendReport(e,t,o,n,r){if(this.disabled){console.warn("Not reporting error to Outpost because logging is disabled");return}o=o||(window.document.currentScript?window.document.currentScript.src:null)||window.location.href;const i=this.buildReport(e,t,o,n,r),s=new Image,a=encodeURIComponent(JSON.stringify(i));s.src=`${this.baseUrl}/${this.projectName}/error.gif?report=${a}`;s.onload=()=>{console.log("Completed reporting error to "+this.projectName)}}buildReport(e,t,o,n,r={}){const i=n?n.name:"Message";let s;s=n&&n.message?n.message.substring(0,999):t.substring(0,999);return{culprit:i,message:s,level:e,exception:[{type:i,value:n&&n.stack&&n.stack.substring(0,999)||s,url:o}],request:{url:`${window.location.protocol}//${window.location.host+window.location.pathname}`,queryString:window.location.search.replace(/(^\?)/,""),cookies:F(this.cookies)},environment:this.env,tags:k(this.tags),user:this.user,extra:r}}}var q=Y;const j=5;let V,H=0;function W(){V||(V=new q("video-embed",{env:z()?"qa":null,debug:Pe(),tags:{domain:window.location.origin,portalId:J()||void 0,hublet:X()||void 0}}));return V}function B(){return!(ye()||be()||H>=j)}function K(e,t={}){Ie("Reporting message to outpost",e);if(B()){W().reportMessage(e,t);H++}}function G(e,t={}){Ie("Reporting error to outpost",e);if(B()){W().report(e,t);H++}}function Q(){return window.hsVars?window.hsVars:null}function J(){const e=c();return e&&e.dataset.hsPortalId?Number(e.dataset.hsPortalId):Q()?Q().portal_id:u()}function z(){const e=c();if(e&&e.dataset.hsEnv)return"qa"===e.dataset.hsEnv;const t=Q();return!(!t||!t.app_hs_base_url)&&t.app_hs_base_url.includes("hubspotqa.com")}function X(){const e=c();if(Ee()){const e=window.location.hostname.split(".")[0];if(e.includes("-"))return e.split("-")[1]}if(e&&e.dataset.hsRegion)return e.dataset.hsRegion;const t=Q();if(t&&t.app_hs_base_url){const e=t.app_hs_base_url.split("//")[1].split(".")[0];return e.includes("-")?e.split("-")[1]:null}return null}function Z(){const e=c();return e&&e.dataset.hsPageId?Number(e.dataset.hsPageId):Q()?Q().page_id:null}function ee(){return Q()?Q().language:null}function te(){return Boolean(window.hsInEditor)}function oe(){return window.location.pathname.startsWith(T)}const ne="hs-content-id-";function re(){let e=null;document.body.classList.forEach(t=>{t.includes(ne)&&(e=parseInt(t.replace(ne,""),10))});return e||null}function ie(){return window.hsVideoOptions||{}}function se(){const e={pageUrl:window.location.href,pageTitle:document.title,pageId:Z()};oe()&&(e.pageId=0);if("number"==typeof e.pageId)return e;if(!Ee())if(re()){e.pageId=re();K("Missing expected hsVars context, parsed pageId from body classname")}else K("Missing expected hsVars context");return e}const ae="VIDEO_PLAYER_ENV",le="-qa.js",de=[".hubspotqa.com",".hubspotvideoqa.com",".hsappstatic.net"],ce=/http(s?):\/\/(app|local)(-\w+)?.hubspot(qa)?.com/;let ue=!1;function he(e,t=!0){if(!t&&ue)return null;try{return localStorage.getItem(e)}catch(e){ue=!0;return null}}const pe=()=>window[ae];function fe(){return pe()?"local"===pe():"local"===he(ae)||!!window.location.search.includes("_hsVideoEnv=local")}function me(){if(z()||"qa"===he(ae))return!0;if(pe())return"qa"===pe();const e=h();return de.some(e=>window.location.hostname.endsWith(e))||e&&e.endsWith(le)}function ge(e){const t=X(),o=t?"-"+t:"";if(e&&"prod"===e.env)return`https://${fe()?"local":"play"}.hubspotvideo.com`;if(Ee())return!me()||fe()||X()?window.location.origin:"https://app.hubspotqa.com";if(fe())return me()?"https://local.hubspotvideoqa.com":"https://local.hubspotvideo.com";return`https://play${o}.${me()?"hubspotvideoqa.com":"hubspotvideo.com"}`}function ye(){return"jasmineRequire"in window}function Ee(e){return!(ye()&&!e)&&Boolean((e||window.location).origin.match(ce))}function be(){return Boolean(he("selenium.disable.alarms"))}const ve=()=>window.location.search.includes("_hsvObserve=true"),we="hs_video_debug";function Pe(){return!!(fe()||window.hsVideoDebug||window.location.search.includes("debug=true"))||"true"===he(we)}function Ie(...e){if(Pe()){const t=e.shift();console.log.apply(console,["[hs-video] "+t,...e])}}const _e={INITIAL:"INITIAL",LOADING:"LOADING",READY:"READY",PLAYING:"PLAYING",PAUSED:"PAUSED",ENDED:"ENDED",CONVERSION_ASSET_OVERLAY:"CONVERSION_ASSET_OVERLAY",ERROR:"ERROR"};let Ae,Te;!function(e){e.FORM="FORM";e.CTA="CTA"}(Ae||(Ae={}));!function(e){e.PRE="PRE";e.POST="POST";e.CUSTOM="CUSTOM"}(Te||(Te={}));const Re={DEFAULT:"hsvideo-mux",VIDEOJS_RAW_URL:"videojs-raw-url",HTML5:"html5",IN_APP_PREVIEW:"inAppPreview",EDITOR_PREVIEW:"editorPreview",RICH_TEXT_PREVIEW:"richTextPreview",ACADEMY_IN_APP:"academy"};function Se(e,t=[]){return Object.keys(e).filter(e=>t.includes(e)).reduce((t,o)=>Object.assign({},t,{[o]:e[o]}),{})}function Le(e){return Object.values?Object.values(e):Object.keys(e).map(t=>e[t])}function Oe(e=window.location.search){const t={};"?"===e[0]&&(e=e.substring(1));e.split("&").forEach(e=>{const[o,n]=e.split("=");if(o&&n)try{t[o]=decodeURIComponent(n)}catch(r){Ie("Could not decode query param: "+e);t[o]=n}});return t}function Ce(e){const t={};Object.keys(e).forEach(o=>{(e[o]||"number"==typeof e[o])&&(t[o]=e[o])});return Object.keys(t).map(e=>`${e}=${encodeURIComponent(t[e])}`).join("&")}function Me(e){return"object"==typeof e&&Object.keys(e).length?"?"+Ce(e):""}const $e=["type","id","position","overlayDelaySeconds","preventSkip"];function De(e){return $e.map(t=>e[t]?String(e[t]):"").join("_")}function xe(e){const t=Q(),o=t&&"number"==typeof t.page_id?t.page_id:re(),n=window.location.origin||`${window.location.protocol}//${window.location.hostname}`,r=Object.assign({},Se(e,_),{parentOrigin:n,pageId:o,locale:ee()});r.parentOrigin||K("window.location is missing - "+document.documentURI);Pe()&&(r.debug=!0);te()&&(r.playerType=Re.EDITOR_PREVIEW);const i=Oe();ie().hidePosterImage&&(r.hidePosterImage=!0);i._hsVideoForm?e.conversionAsset={type:Ae.FORM,position:Te.PRE,id:i._hsVideoForm}:i._hsVideoCta&&(e.conversionAsset={type:Ae.CTA,position:Te.PRE,id:i._hsVideoCta});"object"==typeof e.conversionAsset&&e.conversionAsset.type&&e.conversionAsset.id&&(r.ca=De(e.conversionAsset));if(r.playButtonColor){r.playButtonColor=r.playButtonColor.replace("#","");"ffffff"===r.playButtonColor&&delete r.playButtonColor}"100%"===e.height&&("100%"===e.width||e.full_width)&&(r.objectFit="cover");return r}function ke(e,t,o={},n,r){let i="video";if(e&&t){const o=r&&r.playerType===Re.ACADEMY_IN_APP;i=Ee()&&!o?`video/${e}/id/${t}`:`v/${e}/id/${t}`}fe()&&!Ee()&&X()&&(o.region=X());const s=n?`#hsvid=${n}&t=${Date.now()}`:"";return`${ge(r)}/${i}${Me(o)}${s}`}const Ne='\n  <div class="hsv-overlay-close" aria-label="Close" role="button" data-action="close" \n       style="position: absolute; display: block; top: 15px; right: 15px; width: 16px; height: 16px; background: transparent; cursor: pointer">\n    <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" style="position: absolute; top: 0; stroke: white; stroke-width: 2px">\n      <path d="M14.5,1.5l-13,13m0-13,13,13" transform="translate(-1 -1)"></path>\n    </svg>\n    <span style="position: absolute; padding: 20px; border-radius: 100%; top: -12px; left: -12px; background: rgba(255, 255, 255, 0.1)" />\n    <style>\n      .hsv-overlay-close > span { display: none; }\n      .hsv-overlay-close:hover > span { display: block; }\n    </style>\n  </div>\n';function Fe(e,t){return`\n    <div class="hsv-cta-wrapper hsv-overlay" style="position: absolute; display: flex; width: 100%; height: 100%;\n                                        align-items: center; justify-content: center;">\n        <span class="hs-cta-node hs-cta-${t.id}" id="hs-cta-${t.id}">\n          <a target="_blank" rel="noopener noreferrer">\n            <img\n              class="hs-cta-img"\n              id="hs-cta-img-${t.id}"\n              alt="Video CTA"\n              src="${Ue(t.id,e)}"\n            />\n          </a>\n        </span>\n        ${t.preventSkip?"":Ne}\n      </div>\n    `}function Ue(e,t){let o="//no-cache."+(me()?"hubspotqa.com":"hubspot.com");"eu1"===X()&&(o=me()?"//hubspot-no-cache-eu1-qa.s3.amazonaws.com":"//hubspot-no-cache-eu1-prod.s3.amazonaws.com");return`${o}/cta/default/${t}/${e}.png`}function Ye(e,t){const{id:o}=t,n=document.createElement("div");n.innerHTML=Fe(e.portalId,t);const r=n.firstElementChild;e.el.querySelector(".hs-video-wrapper").append(r);const i=()=>{e.postMessageToPlayer(I.CTA_SKIPPED);r.style.display="none"},s=()=>{e.postMessageToPlayer(I.CTA_CLICKED);r.style.display="none"},a=r.querySelector(".hsv-overlay-close");a&&a.addEventListener("click",i);const l=()=>{if(!window.hbspt||!window.hbspt.cta){K("Could not load CTA JS");i();return}window.hbspt.cta._relativeUrls=!0;window.hbspt.cta.canonicalURL=window.location.href;const t={region:X()||"na1",useNewLoader:!0,enforceTargetIsBlank:!0};me()&&(t.env="qa");e.el.querySelector(".hs-cta-node").addEventListener("click",s);window.hbspt.cta.load(e.portalId,o,t);window.hbspt.cta.loadQueue()};if(window.hbspt&&window.hbspt.cta)l();else{let e=window.location.origin+"/hs/cta/cta/current.js";Ee()&&(e=me()?"https://js.hubspotqa.com/cta/current.js":"https://js.hscta.net/cta/current.js");g(e).then(l).catch(e=>{console.error("Failed to display CTA",e);K("Failed to display CTA",{errorMessage:String(e)});i()})}}let qe;function je(){if(!qe)try{qe=window.scrollTo;window.scrollTo=(...e)=>{Ie("Prevented scrollTo with args:",...e)}}catch(e){Ie("Failed to patch window.scrollTo to prevent forms auto-scroll",e)}}function Ve(){if(qe){try{window.scrollTo=qe}catch(e){Ie("Failed to un-patch window.scrollTo to restore auto-scroll ability",e)}qe=void 0}}const He="hsv-form-wrapper",We=".hs-submit .hs-button",Be=155,Ke=9,Ge="Thanks for your response!";function Qe(e){return`\n      <div class="hsv-overlay hsv-form-modal" style="position: absolute; top: 0; bottom: 0; left: 0; right: 0;">\n        <div class="${He}" style="height: 100%; overflow-y: auto; padding: 20px 40px; text-align: left">\n          <div class="hsv-form" />\n        </div>\n        ${e.preventSkip?"":Ne}\n      </div>\n  `}const Je=(e,t)=>{const o=e.querySelector("form");if(!o){Ie("Form el not found in onFormReady callback");return}const n=o.querySelector("div.actions");n&&y(n,{margin:0,padding:0});if(!t||"#ffffff"===t)return;"#"!==t[0]&&(t="#"+t);const r=w(t)>Be;try{const o=e.querySelector("form "+We);if(!o){Ie("Could not find form submit button to apply color to");return}y(o,{backgroundColor:t,borderColor:t});r&&y(o,{color:"black"})}catch(e){console.error("Failed to update form submit button color",e)}};function ze(e,t){let o,n=!1,r=!1;const{id:i}=t,s=document.createElement("div");s.innerHTML=Qe(t);const a=s.firstElementChild;e.el.querySelector(".hs-video-wrapper").append(a);const l=a.querySelector(".hsv-form"),d=()=>{Ve();e.postMessageToPlayer(n?I.FORM_SUBMITTED:I.FORM_SKIPPED,{isLegacyForm:r});a.style.display="none"},c=()=>{e.postMessageToPlayer(I.FORM_SUBMITTED,{isLegacyForm:r});a.style.display="none"},u=()=>{Ve();n=!0;const e=a.querySelector(".submitted-message")||l;if(!a.querySelector(".hsv-overlay-close")){const e=document.createElement("div");e.innerHTML=Ne;e.querySelector(".hsv-overlay-close").addEventListener("click",()=>c());a.appendChild(e.firstElementChild)}const t='\n      <div style="margin-top: 10px; text-align: center">\n        <a data-test-id="form-watch-video" style="cursor: pointer">Watch video</a>\n      </div>\n    ',o=document.createElement("div");o.innerHTML=t;o.querySelector("a").addEventListener("click",()=>c());e.append(o.firstElementChild)},h=e.el.querySelector(".hsv-overlay-close");h&&h.addEventListener("click",d);const p=()=>{if(window.HubSpotForms){je();e.form=window.HubSpotForms.create({formId:i,portalId:e.portalId,env:me()?"qa":null,region:X(),target:e.getPlaceholderSelector()+" .hsv-form",css:"",onFormDefinitionFetchSuccess:e=>{o=e.form;o&&o.formTypeNumber===Ke&&(r=!0)},onFormReady:()=>{const n=a.querySelector("form");n&&v(n)&&y(l,{background:"white",padding:"10px 20px"});Je(a,e.options.playButtonColor);if(o.redirectUrl&&t.position!==Te.POST){Ie(`Overriding redirectUrl ${o.redirectUrl} with generic inlineMessage`);e.form.setContext({inlineMessage:Ge,redirectUrl:""})}},getExtraMetaDataBeforeSubmit:()=>({hs_video_id:e.options.id,hs_video_title:e.video?e.video.title:null}),onFormSubmitted:()=>setTimeout(u,0)})}else{K("Could not load Forms JS");d()}};if(window.HubSpotForms)p();else{g(`//js.${me()?"hsformsqa.net":"hsforms.net"}/forms/embed/v2.js`).then(p).catch(e=>{console.error("Failed to display form",e);K("Failed to display form",{errorMessage:String(e)});d()})}}const Xe="hsv",Ze="ca",et=["id","width","height"],tt={fullWidth:"full_width"},ot=[".slick-slide.slick-cloned",".swiper-slide-duplicate"],nt=e=>`${e[0].toLowerCase()}${e.slice(1)}`;function rt(e){const t=e.querySelector("img[data-hsv-id]"),o=Object.assign({},t.dataset),n={embedId:e.dataset.hsvEmbedId};Object.keys(o).forEach(e=>{let t=o[e];(e=nt(e.replace(Xe,"")))in tt&&(e=tt[e]);"true"===t?t=!0:"false"===t?t=!1:et.includes(e)&&(e.includes("%")||Number.isNaN(Number(t))||(t=Number(t)));if(e.startsWith("ca")){e=nt(e.replace(Ze,""));n.conversionAsset=n.conversionAsset||{};"overlayDelaySeconds"===e&&(t=Number(t));n.conversionAsset[e]=t}else n[e]=t});return n}function it(e){return!ot.some(t=>E(e,t))}function st(e=document.body){const t=d(e,a).filter(e=>e.querySelector("img[data-hsv-id]")),o=t.filter(it);o.length!==t.length&&Ie(`Found only ${o.length} valid placeholders out of ${t.length} total.`,t);const n=o.map(rt),r={};o.forEach((e,t)=>{const o=n[t];o.embedId&&(r[o.embedId]={id:o.embedId,el:e,options:o})});Object.keys(r).length!==n.length&&Ie(`Found only ${Object.keys(r).length} unique embedIds for ${n.length} placeholders.`,o);return Le(r)}class at{constructor(e,t,o,n){this.status=_e.INITIAL;this.iframeLoaded=!1;this.injectPlayer=()=>{const{options:e,placeholderEl:t}=this;if(this.selectIframeElFromPage()){K("injectPlayer found iframe el on page via selector, not inserting again.");this.replaceIframeFromPage()}else if(t){this.injectIframe(t);t.setAttribute("data-hsv-status","rendered");if(!Ee()&&e.playerType!==Re.IN_APP_PREVIEW&&e.playerType!==Re.EDITOR_PREVIEW){setTimeout(this.afterInject);setTimeout(()=>this.confirmRendered(),A)}}else K("injectPlayer cannot find placeholder, no way to render!")};this.injectIframe=e=>{e.appendChild(this.el);const t=e.querySelector("img[data-hsv-id]");t&&t.style.setProperty("display","none","important")};this.afterInject=()=>{ve()&&this.maybeReparentIframe()};this.on=(e,t)=>{this.eventTarget?this.eventTarget.addEventListener(e,t):console.log("Browser does not support EventTarget API, on is a no-op.")};this.trigger=e=>{this.eventTarget&&this.eventTarget.dispatchEvent(e)};this.log=(...e)=>{Ie(`(${this.id})`,...e)};this.id=e;this.portalId=t;this.options=o;this.outgoingMessages=[];this.receivedMessages=[];this.placeholderEl=n||p(this.id,!0);this.placeholderEl&&this.addPlaceholderImgErrorListener();this.el=this.createPlayerIframe();this.iframeEl=this.el.querySelector("iframe");if(window.EventTarget)try{this.eventTarget=new EventTarget}catch(e){Ie("Cannot construct EventTarget, cannot support event handler API.",e)}}createPlayerIframe(){const{id:e,options:t}=this;Ie("Rendering iframe for player "+e,t,this.placeholderEl);const o="100%"===t.height&&("100%"===t.width||t.full_width);let n="",r="",i=t.style||"",s="";if(o)r=n="position: absolute; width: 100%; height: 100%";else{const e="string"==typeof t.width?Number(t.width):t.width;let o="string"==typeof t.height?Number(t.height):t.height;const a=e&&o?o/e*100:100*P;if("number"==typeof t.maxHeight){o=t.maxHeight;s=`max-height: ${t.maxHeight}px`}let l=e?`max-width: ${e}px; `:"";const d=o&&t.maxHeight&&o>=t.maxHeight?`max-height: ${t.maxHeight}px; `:"";if("boolean"==typeof t.full_width){i||(i="margin: 0 auto");t.full_width&&(l="")}n=`${l} ${d} ${i}`;r=`position: relative; height: 0; padding-bottom: ${a}%;`}const a=document.createElement("div");a.innerHTML=`\n    <div class="hs-video-container" style="${n.trim()}">\n      <div class="hs-video-wrapper" style="${r.trim()}">\n        <iframe id="hs_player_${e}"\n          src="${this.buildIframeUrl()}"\n          loading="lazy"\n          referrerPolicy="origin" \n          sandbox="allow-forms allow-scripts allow-same-origin allow-popups"\n          allow="autoplay; fullscreen;"\n          style="position: absolute !important; width: 100% !important; height: 100% !important; left: 0; top: 0; border: 0 none; pointer-events: initial; ${s}">\n        </iframe>\n      </div>\n    </div>\n  `;return a.firstElementChild}getPlaceholderSelector(){return`[data-hsv-embed-id="${this.id}"]`}findPlaceholderEls(){return l(this.getPlaceholderSelector())}findOtherPlaceholderEls(){return this.findPlaceholderEls().filter(e=>e!==this.placeholderEl&&it(e))}selectIframeElFromPage(){const e=l("iframe#hs_player_"+this.id);if(e.length>1){Ie("Found multiple iframes for player",e);K("Found multiple iframes for player")}return e[0]}confirmRendered(){if(document.contains(this.el))return;if(this.selectIframeElFromPage()){K("confirmRendered found new iframe el on page via selector.");this.replaceIframeFromPage();return}const e=this.findOtherPlaceholderEls();e.length?K("confirmRendered found duplicate placeholders for player",{embedId:this.id,otherPlaceholderCount:e.length}):K("confirmRendered could not find player el and exhausted options to render!")}buildIframeUrl(){const e=xe(this.options);return ke(this.portalId,this.options.id,e,this.id,this.options)}reparentIframe(e){Ie("Moving iframe to new visible placeholder",e);this.placeholderEl=e;this.options.renderContext="relocated-placeholder";this.createPlayerIframe();this.injectIframe(this.placeholderEl);return e}maybeReparentIframe(){const e=this.findOtherPlaceholderEls();if(!e.length)return null;Ie("Found duplicate placeholders for player "+this.id,e);K("Found duplicate placeholders for player",{embedId:this.id,otherPlaceholderCount:e.length});const t=e.filter(b);return t.length>=1?this.reparentIframe(t[t.length-1]):this.reparentIframe(e[e.length-1])}addPlaceholderImgErrorListener(){if(!this.placeholderEl)return;const e=this.placeholderEl.querySelector("img");e&&e.addEventListener("error",()=>{e.style.display="none"})}isIframeLoaded(){return this.iframeLoaded}getReadyQueue(){return this.outgoingMessages}onMessageReceived(e,t){Ie("Received message from player "+this.id,e,t);this.receivedMessages.push([e,t]);switch(e){case I.VIDEO_LOADED:this.video=t;this.handleVideoLoaded(this.video);this.trigger(new Event("videoLoaded"));break;case I.PLAYER_LOADED:this.executeReadyQueue();this.placeholderEl.setAttribute("data-hsv-status","loaded");this.trigger(new Event("loaded"));break;case I.PLAYER_READY:this.status=_e.READY;this.placeholderEl.setAttribute("data-hsv-status","ready");this.trigger(new Event("ready"));break;case I.PLAYER_PLAY:this.status=_e.PLAYING;this.placeholderEl.setAttribute("data-hsv-status","playing");this.trigger(new Event("play"));break;case I.PLAYER_PAUSE:this.status=_e.PAUSED;this.placeholderEl.setAttribute("data-hsv-status","paused");this.trigger(new Event("pause"));break;case I.PLAYER_ENDED:this.status=_e.ENDED;this.placeholderEl.setAttribute("data-hsv-status","ended");this.trigger(new Event("ended"));break;case I.PLAYER_SHOW_OVERLAY:{const{conversionAsset:e}=this.options;if(!(e&&e.type&&e.id)){K("Unexpected PLAYER_SHOW_OVERLAY message");break}this.status=_e.CONVERSION_ASSET_OVERLAY;this.placeholderEl.setAttribute("data-hsv-status",e.type.toLowerCase()+"-overlay");if(e.type===Ae.CTA)try{Ye(this,e)}catch(e){K("Error thrown rendering CTA")}else if(e.type===Ae.FORM)try{ze(this,e)}catch(e){K("Error thrown rendering form")}break}case I.PLAYER_ORPHANED:K("Player did not receive SET_PAGE_META postMessage",{iframeUrl:this.iframeEl.src})}}handleVideoLoaded(e){this.iframeEl.title||(this.iframeEl.title=e.altText||e.title)}triggerPause(){this.postMessageToPlayer(I.SET_PLAYER_STATUS,{status:_e.PAUSED})}postMessageToPlayer(e,t=null,o=!0){if(this.iframeLoaded&&this.iframeEl.contentWindow)this.sendMessage(e,t);else{this.iframeEl.contentWindow||Ie("Could not access contentWindow for player "+this.id);if(o){Ie("Queuing postMessage for player "+this.id,e,t);this.outgoingMessages.push([e,t])}}}sendMessage(e,t){if(this.iframeEl&&this.iframeEl.contentWindow){Ie("Sending postMessage to player "+this.id,e,t);t&&"object"==typeof t&&e===I.SET_UTK&&"utk"in t&&(this.utk=t.utk);try{this.iframeEl.contentWindow.postMessage({type:e,payload:t},ge(this.options))}catch(e){this.log("Failed to postMessage player",e)}}else Ie("sendMessage could not access contentWindow for player "+this.id)}replaceIframeFromPage(){const e=this.selectIframeElFromPage();if(e){Ie("Replacing iframeEl from page with ",this.iframeEl,this.iframeEl===e);this.iframeEl=e}}executeReadyQueue(){this.iframeEl.contentWindow||this.replaceIframeFromPage();if(this.outgoingMessages.length){if(this.iframeLoaded){Ie(`Player ${this.id} reloaded, executing readyQueue of length ${this.outgoingMessages.length}`);if(this.utk){const{utk:e}=this;this.sendMessage(I.SET_UTK,{utk:e})}}else Ie(`Executing readyQueue of length ${this.outgoingMessages.length} for player ${this.id}`);this.outgoingMessages.forEach(([e,t])=>{this.sendMessage(e,t)})}this.iframeLoaded=!0;if(!Ee())if(window.IntersectionObserver)try{this.setupIntersectionObserver()}catch(e){this.log("Failed to setup IntersectionObserver",e);K("Failed to setup IntersectionObserver",{err:String(e)});this.sendMessage(I.CONFIRM_VISIBLE)}else{K("Missing IntersectionObserver constructor");this.sendMessage(I.CONFIRM_VISIBLE)}}setupIntersectionObserver(){const e=new IntersectionObserver(t=>{t.forEach(t=>{if(t.isIntersecting){this.log("Found player in viewport via IntersectionObserver");this.sendMessage(I.CONFIRM_VISIBLE);e.disconnect()}})},{threshold:0});e.observe(this.iframeEl)}}function lt(e,t){if(e&&e.data&&"object"==typeof e.data&&Object.keys(I).includes(e.data.type)){t&&e.origin&&e.origin!==t&&Ie("isPlayerMessage saw unexpected origin",e);return!0}return!1}function dt(e,t,{placeholderEl:o}={}){!o&&t.embedId&&((o=p(e,!0))?t.renderContext="embed-id-selector":Ie(`Failed to find for embedId: ${t.embedId} for player: ${e}`));const n=t.portalId||J();n&&t.id||K("Required param `portalId` or video `id` missing");if(te()){t.playerType=Re.EDITOR_PREVIEW;t.renderContext="editor-preview"}const r=new at(e,n,t,o);r.injectPlayer();return r}function ct(e,t){const o=t.portalId||J(),n=xe(t),r=ke(o,t.id,n,e.id,t);if(t.conversionAsset&&e.options.conversionAsset&&t.conversionAsset.id!==e.options.conversionAsset.id){const t=e.el.querySelector(".hsv-overlay");t&&t.remove()}Ie("Updating src of existing iframe for player "+e.id,t);e.options=t;e.iframeEl.src=r;t.altText&&(e.iframeEl.title=t.altText);return e}function ut(e,t,o,n=!0){Le(e).forEach(e=>{e.postMessageToPlayer(t,o,n)})}function ht(e){window.addEventListener("message",t=>{if(lt(t,ge())){const{data:o}=t,{type:n,embedId:r,payload:i={}}=o,s=e[r];if(!s){console.warn("Could not find embedId "+r,o);return}s.onMessageReceived(n,i);if(!(n!==I.PLAYER_PLAY||s.options.autoplay&&i.isInitial)){const t=Le(e).filter(e=>e!==s&&e.status===_e.PLAYING);t.length&&Ie(`Pausing ${t.length} other currently playing players`,t);t.forEach(e=>e.triggerPause())}if(n===I.PLAYER_ANALYTICS_EVENTS){const e=JSON.parse(i);e.events&&e.events.length&&window._hsq&&e.events.forEach(e=>window._hsq.push(e))}}})}function pt(){const e=({id:e})=>{const t=document.querySelector(`.hs-form-${e}.submitted-message`);if(t){const e=st(t);Ie(`Found ${e.length} players in form thank you message`);e.forEach(({el:e,options:t})=>{t.renderContext="form-inline-message";window.hsVideoApi.renderPlayer(e,t)})}};window.addEventListener("message",t=>{if(t.data&&"hsFormCallback"===t.data.type&&"onFormSubmitted"===t.data.eventName){Ie("Form submitted",t.data);setTimeout(()=>e(t.data))}})}function ft(e){return Array.from(e).filter(e=>e instanceof HTMLElement).filter(e=>e.matches(s)||e.querySelector(s)).map(e=>e.matches(s)?e:e.querySelector(s))}function mt(e){if(!Array.prototype.flat){K("Missing Array.prototype.flat");return}if(!window.MutationObserver){K("Missing MutationObserver");return}const t={attributes:!1,childList:!0,subtree:!0};new MutationObserver(t=>{t.map(e=>ft(e.removedNodes)).filter(e=>e.length).flat().forEach(t=>{const o=t.dataset.hsvEmbedId,n=e[o];Ie("MutationObserver detected iframe removal for player: "+(n?n.id:"unknown"),t);K("MutationObserver detected iframe removal")});const o=t.map(e=>ft(e.addedNodes)).filter(e=>e.length).flat(),n=[];o.forEach(e=>{n.includes(e)||n.push(e)});n.forEach(t=>{const o=t.dataset.hsvEmbedId,n=e[o];Ie("MutationObserver detected new placeholder for player: "+(n?n.id:"unknown"),t);K("MutationObserver detected new placeholder");n&&n.maybeReparentIframe()})}).observe(document.body,t)}function gt(){document.addEventListener("securitypolicyviolation",e=>{Ie("SecurityPolicyViolationEvent event",e);const{blockedURI:t,disposition:o}=e;e.blockedURI&&i.test(t)&&K(`CSP ${o} blocked video-embed JS`,{blockedURI:t});e.blockedURI&&e.blockedURI.includes(ge())&&K(`CSP ${o} blocked player iframe load`,{blockedURI:t})})}let yt=1;function Et(e="uniq"){return`${e}${yt++}`}let bt=!1;function vt({testingMode:e=!1}={}){const t=window._hsq=window._hsq||[],o=window._hsp=window._hsp||[],n=[],r={};let i,s;const a=e=>Boolean(r[e]),l=e=>n.find(([t])=>e===t);function d(...e){let t,o,r;K("registerPlayer still being called");if("string"==typeof e[0]){t=e[0];o=e[1];o.embedId=t||Et()}else if(e[0]instanceof HTMLElement){r=e[0];o=e[1];t=o.embedId||Et()}else{if("object"!=typeof e[0]){console.warn("invalid args passed to `registerPlayer`",e);return}o=e[0];t=o.embedId||Et()}if(l(t)||a(t))Ie(`Player with embedId: ${t} already exists, ignoring call to registerPlayer`,o);else{if(f()){!r&&o.embedId&&(r=p(t));if(r){m(r,o);return}}n.push([t,o])}}function c(){return!!i&&(i.categories?i.categories.analytics:i.allowed)}function u(e){ut({[e]:r[e]},I.SET_PAGE_META,se());s&&c()&&!Ee()&&ut({[e]:r[e]},I.SET_UTK,{utk:s})}function h(e,t,o){r[e]=dt(e,t,o);Ee()||u(e);return r[e]}function m(e,t){let o,n;if("string"==typeof e){o=e;n=p(o);if(!n){console.warn(`Element id ${e} not found`);return null}}else{if(!(e instanceof HTMLElement)){console.warn("First argument to renderPlayer must be an id string or HTMLElement");return null}o=t.embedId||Et();n=e}if(a(o)){Ie(`Player with embedId: ${o} already exists, ignoring call to renderPlayer`,t);return null}return h(o,t,{placeholderEl:n})}function g(e,t){const o=w(e);if(!o){Ie(`Could not find player id ${e} to update`);return null}ct(o,t);return o}function y(e){s=e;if(i&&s)if(c()){Ie(`Received utk ${s} privacyConsent`,JSON.stringify(i));ut(r,I.SET_UTK,{utk:s})}else{Ie("Received privacyConsent but not allowed",s,i);ut(r,I.SET_UTK,null)}else Ie("Could not obtain utk cookie and privacyConsent",s,i)}function b(){o.push(["addPrivacyConsentListener",e=>{i=e;t.push(["addUserTokenListener",y])}])}function v(){return r}function w(e){return v()[e]}function P(){return Le(r).reduce((e,t)=>{t.receivedMessages.forEach(o=>{e.push([t.id,o[0],o[1]])});return e},[])}function _(){Le(r).forEach(e=>e.triggerPause())}function A(){st().forEach(({el:e,options:t})=>{if(t.embedId){t.renderContext=E(e,".widget-type-rich_text")?"rich-text-placeholder":"onload-placeholder";oe()&&(t.renderContext="share-page");h(t.embedId,t,{placeholderEl:e})}})}function T(){n.forEach(([e,t])=>{h(e,t)});ht(r);bt=!0;if(!Ee()){b();A();gt();pt();ve()&&mt(r);window._hsVideoReady&&Array.isArray(window._hsVideoReady)&&setTimeout(()=>window._hsVideoReady.forEach(e=>e()))}}if(bt&&!e)Ie("loader already initialized, not listening for document load");else if(f())try{T()}catch(e){G(e,{source:"already-loaded"})}else{document.addEventListener("DOMContentLoaded",()=>{try{T()}catch(e){G(e,{source:"DOMContentLoaded"})}});window.addEventListener("content-analytics-code-not-loaded",()=>y(null))}const R={registerPlayer:d,renderPlayer:m,updatePlayer:g,getPlayer:w,getPlayers:()=>Le(v()),pauseAllPlayers:_};return e||Pe()?Object.assign({},R,{getPlayerMessages:P,triggerLoad:T,renderPlaceholders:A}):R}o.d(t,"renderPlayer",(function(){return Pt}));o.d(t,"updatePlayer",(function(){return It}));let wt=window.hsVideoApi;wt?Ie("hsVideoApi found on page, not calling createLoader"):window.hsVideoApi=wt=vt();const Pt=wt.renderPlayer,It=wt.updatePlayer}});
//# sourceMappingURL=loader.js.map