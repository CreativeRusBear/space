(self.webpackChunkspace=self.webpackChunkspace||[]).push([[826],{6163:function(t){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},6288:function(t,n,e){var r=e(3649),i=e(3590),o=e(4615),s=r("unscopables"),a=Array.prototype;null==a[s]&&o.f(a,s,{configurable:!0,value:i(null)}),t.exports=function(t){a[s][t]=!0}},2569:function(t,n,e){var r=e(794);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},3579:function(t,n,e){"use strict";var r=e(1324),i=e(6782),o=e(97);t.exports=function(t){for(var n=r(this),e=o(n.length),s=arguments.length,a=i(s>1?arguments[1]:void 0,e),c=s>2?arguments[2]:void 0,u=void 0===c?e:i(c,e);u>a;)n[a++]=t;return n}},3200:function(t,n,e){"use strict";var r=e(4805).forEach,i=e(906),o=e(9295),s=i("forEach"),a=o("forEach");t.exports=s&&a?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},5766:function(t,n,e){var r=e(2977),i=e(97),o=e(6782),s=function(t){return function(n,e,s){var a,c=r(n),u=i(c.length),f=o(s,u);if(t&&e!=e){for(;u>f;)if((a=c[f++])!=a)return!0}else for(;u>f;f++)if((t||f in c)&&c[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},4805:function(t,n,e){var r=e(2938),i=e(5044),o=e(1324),s=e(97),a=e(4822),c=[].push,u=function(t){var n=1==t,e=2==t,u=3==t,f=4==t,l=6==t,h=7==t,p=5==t||l;return function(v,y,d,m){for(var g,x,S=o(v),b=i(S),w=r(y,d,3),O=s(b.length),P=0,L=m||a,M=n?L(v,O):e||h?L(v,0):void 0;O>P;P++)if((p||P in b)&&(x=w(g=b[P],P,S),t))if(n)M[P]=x;else if(x)switch(t){case 3:return!0;case 5:return g;case 6:return P;case 2:c.call(M,g)}else switch(t){case 4:return!1;case 7:c.call(M,g)}return l?-1:u||f?f:M}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},9269:function(t,n,e){var r=e(6544),i=e(3649),o=e(4061),s=i("species");t.exports=function(t){return o>=51||!r((function(){var n=[];return(n.constructor={})[s]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},906:function(t,n,e){"use strict";var r=e(6544);t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},9295:function(t,n,e){var r=e(8494),i=e(6544),o=e(4402),s=Object.defineProperty,a={},c=function(t){throw t};t.exports=function(t,n){if(o(a,t))return a[t];n||(n={});var e=[][t],u=!!o(n,"ACCESSORS")&&n.ACCESSORS,f=o(n,0)?n[0]:c,l=o(n,1)?n[1]:void 0;return a[t]=!!e&&!i((function(){if(u&&!r)return!0;var t={length:-1};u?s(t,1,{enumerable:!0,get:c}):t[1]=1,e.call(t,f,l)}))}},4822:function(t,n,e){var r=e(794),i=e(4521),o=e(3649)("species");t.exports=function(t,n){var e;return i(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!i(e.prototype)?r(e)&&null===(e=e[o])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},9624:function(t){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},3478:function(t,n,e){var r=e(4402),i=e(929),o=e(6683),s=e(4615);t.exports=function(t,n){for(var e=i(n),a=s.f,c=o.f,u=0;u<e.length;u++){var f=e[u];r(t,f)||a(t,f,c(n,f))}}},57:function(t,n,e){var r=e(8494),i=e(4615),o=e(4677);t.exports=r?function(t,n,e){return i.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},4677:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},5999:function(t,n,e){"use strict";var r=e(2670),i=e(4615),o=e(4677);t.exports=function(t,n,e){var s=r(n);s in t?i.f(t,s,o(0,e)):t[s]=e}},8494:function(t,n,e){var r=e(6544);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},6668:function(t,n,e){var r=e(7583),i=e(794),o=r.document,s=i(o)&&i(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},6778:function(t){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},6918:function(t,n,e){var r=e(5897);t.exports=r("navigator","userAgent")||""},4061:function(t,n,e){var r,i,o=e(7583),s=e(6918),a=o.process,c=a&&a.versions,u=c&&c.v8;u?i=(r=u.split("."))[0]+r[1]:s&&(!(r=s.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/))&&(i=r[1]),t.exports=i&&+i},5690:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},7263:function(t,n,e){var r=e(7583),i=e(6683).f,o=e(57),s=e(1270),a=e(460),c=e(3478),u=e(4451);t.exports=function(t,n){var e,f,l,h,p,v=t.target,y=t.global,d=t.stat;if(e=y?r:d?r[v]||a(v,{}):(r[v]||{}).prototype)for(f in n){if(h=n[f],l=t.noTargetGet?(p=i(e,f))&&p.value:e[f],!u(y?f:v+(d?".":"#")+f,t.forced)&&void 0!==l){if(typeof h==typeof l)continue;c(h,l)}(t.sham||l&&l.sham)&&o(h,"sham",!0),s(e,f,h,t)}}},6544:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},2938:function(t,n,e){var r=e(6163);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)}}return function(){return t.apply(n,arguments)}}},1335:function(t,n,e){"use strict";var r=e(6163),i=e(794),o=[].slice,s={},a=function(t,n,e){if(!(n in s)){for(var r=[],i=0;i<n;i++)r[i]="a["+i+"]";s[n]=Function("C,a","return new C("+r.join(",")+")")}return s[n](t,e)};t.exports=Function.bind||function(t){var n=r(this),e=o.call(arguments,1),s=function(){var r=e.concat(o.call(arguments));return this instanceof s?a(n,r.length,r):n.apply(t,r)};return i(n.prototype)&&(s.prototype=n.prototype),s}},5897:function(t,n,e){var r=e(1287),i=e(7583),o=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?o(r[t])||o(i[t]):r[t]&&r[t][n]||i[t]&&i[t][n]}},7583:function(t,n,e){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},4402:function(t){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},4639:function(t){t.exports={}},482:function(t,n,e){var r=e(5897);t.exports=r("document","documentElement")},275:function(t,n,e){var r=e(8494),i=e(6544),o=e(6668);t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},5044:function(t,n,e){var r=e(6544),i=e(9624),o="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?o.call(t,""):Object(t)}:Object},9734:function(t,n,e){var r=e(1314),i=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return i.call(t)}),t.exports=r.inspectSource},2743:function(t,n,e){var r,i,o,s=e(9491),a=e(7583),c=e(794),u=e(57),f=e(4402),l=e(1314),h=e(9137),p=e(4639),v=a.WeakMap;if(s){var y=l.state||(l.state=new v),d=y.get,m=y.has,g=y.set;r=function(t,n){return n.facade=t,g.call(y,t,n),n},i=function(t){return d.call(y,t)||{}},o=function(t){return m.call(y,t)}}else{var x=h("state");p[x]=!0,r=function(t,n){return n.facade=t,u(t,x,n),n},i=function(t){return f(t,x)?t[x]:{}},o=function(t){return f(t,x)}}t.exports={set:r,get:i,has:o,enforce:function(t){return o(t)?i(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!c(n)||(e=i(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},4521:function(t,n,e){var r=e(9624);t.exports=Array.isArray||function(t){return"Array"==r(t)}},4451:function(t,n,e){var r=e(6544),i=/#|\.prototype\./,o=function(t,n){var e=a[s(t)];return e==u||e!=c&&("function"==typeof n?r(n):!!n)},s=o.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=o.data={},c=o.NATIVE="N",u=o.POLYFILL="P";t.exports=o},794:function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},6268:function(t){t.exports=!1},8640:function(t,n,e){var r=e(6544);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},9491:function(t,n,e){var r=e(7583),i=e(9734),o=r.WeakMap;t.exports="function"==typeof o&&/native code/.test(i(o))},7560:function(t,n,e){var r=e(7583),i=e(8940).trim,o=e(771),s=r.parseFloat,a=1/s(o+"-0")!=-1/0;t.exports=a?function(t){var n=i(String(t)),e=s(n);return 0===e&&"-"==n.charAt(0)?-0:e}:s},3590:function(t,n,e){var r,i=e(2569),o=e(8728),s=e(5690),a=e(4639),c=e(482),u=e(6668),f=e(9137)("IE_PROTO"),l=function(){},h=function(t){return"<script>"+t+"<\/script>"},p=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;p=r?function(t){t.write(h("")),t.close();var n=t.parentWindow.Object;return t=null,n}(r):((n=u("iframe")).style.display="none",c.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(h("document.F=Object")),t.close(),t.F);for(var e=s.length;e--;)delete p.prototype[s[e]];return p()};a[f]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(l.prototype=i(t),e=new l,l.prototype=null,e[f]=t):e=p(),void 0===n?e:o(e,n)}},8728:function(t,n,e){var r=e(8494),i=e(4615),o=e(2569),s=e(5432);t.exports=r?Object.defineProperties:function(t,n){o(t);for(var e,r=s(n),a=r.length,c=0;a>c;)i.f(t,e=r[c++],n[e]);return t}},4615:function(t,n,e){var r=e(8494),i=e(275),o=e(2569),s=e(2670),a=Object.defineProperty;n.f=r?a:function(t,n,e){if(o(t),n=s(n,!0),o(e),i)try{return a(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},6683:function(t,n,e){var r=e(8494),i=e(112),o=e(4677),s=e(2977),a=e(2670),c=e(4402),u=e(275),f=Object.getOwnPropertyDescriptor;n.f=r?f:function(t,n){if(t=s(t),n=a(n,!0),u)try{return f(t,n)}catch(t){}if(c(t,n))return o(!i.f.call(t,n),t[n])}},9275:function(t,n,e){var r=e(8356),i=e(5690).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},4012:function(t,n){n.f=Object.getOwnPropertySymbols},8356:function(t,n,e){var r=e(4402),i=e(2977),o=e(5766).indexOf,s=e(4639);t.exports=function(t,n){var e,a=i(t),c=0,u=[];for(e in a)!r(s,e)&&r(a,e)&&u.push(e);for(;n.length>c;)r(a,e=n[c++])&&(~o(u,e)||u.push(e));return u}},5432:function(t,n,e){var r=e(8356),i=e(5690);t.exports=Object.keys||function(t){return r(t,i)}},112:function(t,n){"use strict";var e={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!e.call({1:2},1);n.f=i?function(t){var n=r(this,t);return!!n&&n.enumerable}:e},929:function(t,n,e){var r=e(5897),i=e(9275),o=e(4012),s=e(2569);t.exports=r("Reflect","ownKeys")||function(t){var n=i.f(s(t)),e=o.f;return e?n.concat(e(t)):n}},1287:function(t,n,e){var r=e(7583);t.exports=r},1270:function(t,n,e){var r=e(7583),i=e(57),o=e(4402),s=e(460),a=e(9734),c=e(2743),u=c.get,f=c.enforce,l=String(String).split("String");(t.exports=function(t,n,e,a){var c,u=!!a&&!!a.unsafe,h=!!a&&!!a.enumerable,p=!!a&&!!a.noTargetGet;"function"==typeof e&&("string"!=typeof n||o(e,"name")||i(e,"name",n),(c=f(e)).source||(c.source=l.join("string"==typeof n?n:""))),t!==r?(u?!p&&t[n]&&(h=!0):delete t[n],h?t[n]=e:i(t,n,e)):h?t[n]=e:s(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||a(this)}))},3955:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},460:function(t,n,e){var r=e(7583),i=e(57);t.exports=function(t,n){try{i(r,t,n)}catch(e){r[t]=n}return n}},9137:function(t,n,e){var r=e(7836),i=e(8284),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},1314:function(t,n,e){var r=e(7583),i=e(460),o="__core-js_shared__",s=r[o]||i(o,{});t.exports=s},7836:function(t,n,e){var r=e(6268),i=e(1314);(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.8.1",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},8940:function(t,n,e){var r=e(3955),i="["+e(771)+"]",o=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),a=function(t){return function(n){var e=String(r(n));return 1&t&&(e=e.replace(o,"")),2&t&&(e=e.replace(s,"")),e}};t.exports={start:a(1),end:a(2),trim:a(3)}},6782:function(t,n,e){var r=e(5089),i=Math.max,o=Math.min;t.exports=function(t,n){var e=r(t);return e<0?i(e+n,0):o(e,n)}},2977:function(t,n,e){var r=e(5044),i=e(3955);t.exports=function(t){return r(i(t))}},5089:function(t){var n=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:n)(t)}},97:function(t,n,e){var r=e(5089),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},1324:function(t,n,e){var r=e(3955);t.exports=function(t){return Object(r(t))}},2670:function(t,n,e){var r=e(794);t.exports=function(t,n){if(!r(t))return t;var e,i;if(n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;if("function"==typeof(e=t.valueOf)&&!r(i=e.call(t)))return i;if(!n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},8284:function(t){var n=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+e).toString(36)}},7786:function(t,n,e){var r=e(8640);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3649:function(t,n,e){var r=e(7583),i=e(7836),o=e(4402),s=e(8284),a=e(8640),c=e(7786),u=i("wks"),f=r.Symbol,l=c?f:f&&f.withoutSetter||s;t.exports=function(t){return o(u,t)||(a&&o(f,t)?u[t]=f[t]:u[t]=l("Symbol."+t)),u[t]}},771:function(t){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},1646:function(t,n,e){"use strict";var r=e(7263),i=e(6544),o=e(4521),s=e(794),a=e(1324),c=e(97),u=e(5999),f=e(4822),l=e(9269),h=e(3649),p=e(4061),v=h("isConcatSpreadable"),y=9007199254740991,d="Maximum allowed index exceeded",m=p>=51||!i((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),g=l("concat"),x=function(t){if(!s(t))return!1;var n=t[v];return void 0!==n?!!n:o(t)};r({target:"Array",proto:!0,forced:!m||!g},{concat:function(t){var n,e,r,i,o,s=a(this),l=f(s,0),h=0;for(n=-1,r=arguments.length;n<r;n++)if(x(o=-1===n?s:arguments[n])){if(h+(i=c(o.length))>y)throw TypeError(d);for(e=0;e<i;e++,h++)e in o&&u(l,h,o[e])}else{if(h>=y)throw TypeError(d);u(l,h++,o)}return l.length=h,l}})},1271:function(t,n,e){var r=e(7263),i=e(3579),o=e(6288);r({target:"Array",proto:!0},{fill:i}),o("fill")},5680:function(t,n,e){"use strict";var r=e(7263),i=e(3200);r({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},7469:function(t,n,e){e(7263)({target:"Function",proto:!0},{bind:e(1335)})},4458:function(t,n,e){var r=e(8494),i=e(4615).f,o=Function.prototype,s=o.toString,a=/^\s*function ([^ (]*)/,c="name";r&&!(c in o)&&i(o,c,{configurable:!0,get:function(){try{return s.call(this).match(a)[1]}catch(t){return""}}})},4649:function(t,n,e){var r=e(7263),i=e(8494);r({target:"Object",stat:!0,forced:!i,sham:!i},{defineProperty:e(4615).f})},6718:function(t,n,e){var r=e(7263),i=e(7560);r({global:!0,forced:parseFloat!=i},{parseFloat:i})},5090:function(t,n,e){var r=e(7583),i=e(6778),o=e(3200),s=e(57);for(var a in i){var c=r[a],u=c&&c.prototype;if(u&&u.forEach!==o)try{s(u,"forEach",o)}catch(t){u.forEach=o}}},5165:function(t,n,e){"use strict";function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}e(4649),Object.defineProperty(n,"__esModule",{value:!0}),n.NBodyProblem=void 0;var i=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.g=n.g,this.dt=n.dt,this.softeningConst=n.softeningConst,this.masses=n.masses}var n,e;return n=t,(e=[{key:"updatePositionVectors",value:function(){for(var t=0,n=this.masses.length;t<n;t++){var e=this.masses[t];e.x+=e.vx*this.dt,e.y+=e.vy*this.dt,e.z+=e.vz*this.dt}return this}},{key:"updateVelocityVectors",value:function(){for(var t=0,n=this.masses.length;t<n;t++){var e=this.masses[t];e.vx+=e.ax*this.dt,e.vy+=e.ay*this.dt,e.vz+=e.az*this.dt}}},{key:"updateAccelerationVectors",value:function(){for(var t=0,n=this.masses.length;t<n;t++){for(var e=0,r=0,i=0,o=this.masses[t],s=0;s<n;s++)if(t!==s){var a=this.masses[s],c=a.x-o.x,u=a.y-o.y,f=a.z-o.z,l=c*c+u*u+f*f,h=this.g*a.m/(l*Math.sqrt(l+this.softeningConst));e+=c*h,r+=u*h,i+=f*h}o.ax=e,o.ay=r,o.az=i}return this}}])&&r(n.prototype,e),t}();n.NBodyProblem=i},7623:function(t,n,e){"use strict";function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}e(1646),e(1271),e(4649),Object.defineProperty(n,"__esModule",{value:!0}),n.Manifestation=void 0;var i=function(){function t(n,e,r){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=n,this.trailLength=e,this.radius=r,this.positions=[]}var n,e;return n=t,(e=[{key:"storePosition",value:function(t,n){this.positions.push({x:t,y:n}),this.positions.length>this.trailLength&&this.positions.shift()}},{key:"draw",value:function(t,n){this.storePosition(t,n);for(var e=0,r=this.positions.length;e<r;e++){var i=void 0,o=void 0,s=e/r;e===r-1?(i=1,o=1):(i=s/2,o=s),this.ctx.beginPath(),this.ctx.arc(this.positions[e].x,this.positions[e].y,o*this.radius,0,2*Math.PI),this.ctx.fillStyle="rgba(103, 102, ".concat(Math.floor(173*Math.random())+25,", ").concat(i,")"),this.ctx.fill()}}}])&&r(n.prototype,e),t}();n.Manifestation=i},4126:function(t,n,e){"use strict";var r=e(6261);e(3339),window.addEventListener("load",(function(){if("serviceWorker"in navigator)try{navigator.serviceWorker.register("serviceWorker.js")}catch(t){console.log("Service Worker Registration Failed")}var t=new r.Space;t.settings(),t.actionsForInnerSolarSystem(),t.animate()}))},6261:function(t,n,e){"use strict";e(1271),e(5680),e(7469),e(4458),e(4649),e(6718),e(5090),Object.defineProperty(n,"__esModule",{value:!0}),n.Space=void 0;var r=e(7623),i=e(5165);function o(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var s=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.g=39.5,this.dt=.008,this.softeningConst=.15,this.masses=[{name:"Sun",m:1,x:-150324727873647e-20,y:-393762725944737e-20,z:-4.86567877183925e-8,vx:31669325898331e-18,vy:-685489559263319e-20,vz:-7.90076642683254e-7},{name:"Mercury",m:1.65956463e-7,x:-.346390408691506,y:-.272465544507684,z:.00951633403684172,vx:4.25144321778261,vy:-7.61778341043381,vz:-1.01249478093275},{name:"Venus",m:244699613e-14,x:-.168003526072526,y:.698844725464528,z:.0192761582256879,vx:-7.2077847105093,vy:-1.76778886124455,vz:.391700036358566},{name:"Earth",m:30024584e-13,x:.648778995445634,y:.747796691108466,z:-322953591923124e-19,vx:-4.85085525059392,vy:4.09601538682312,vz:-.000258553333317722},{m:3.213e-7,name:"Mars",x:-.574871406752105,y:-1.395455041953879,z:-.01515164037265145,vx:4.9225288800471425,vy:-1.5065904473191791,vz:-.1524041758922603}],this.massesList=document.querySelector("#masses-list"),this.canvas=document.querySelector("#canvas"),this.ctx=this.canvas.getContext("2d"),this.width=this.canvas.width=window.innerWidth,this.height=this.canvas.height=window.innerHeight,this.scale=70,this.radius=6,this.trailLength=35,this.mousePressX=0,this.mousePressY=0,this.currentMouseX=0,this.currentMouseY=0,this.dragging=!1,this.innerSolarSystem=new i.NBodyProblem({g:this.g,dt:this.dt,masses:JSON.parse(JSON.stringify(this.masses)),softeningConst:this.softeningConst})}var n,e;return n=t,(e=[{key:"populateManifestations",value:function(t){var n=this;t.forEach((function(t){return t.manifestation=new r.Manifestation(n.ctx,n.trailLength,n.radius)}))}},{key:"animate",value:function(){this.innerSolarSystem.updatePositionVectors().updateAccelerationVectors().updateVelocityVectors(),this.ctx.clearRect(0,0,this.width,this.height);for(var t=0,n=this.innerSolarSystem.masses.length;t<n;t++){var e=this.innerSolarSystem.masses[t],r=this.width/2+e.x*this.scale,i=this.height/2+e.y*this.scale;e.manifestation.draw(r,i),e.name&&(this.ctx.font="16px Nunito Sans",this.ctx.fillText(e.name,r+12,i+4),this.ctx.fill()),(r<this.radius||r>this.width-this.radius)&&(e.vx=-e.vx),(i<this.radius||i>this.height-this.radius)&&(e.vy=-e.vy)}this.dragging&&(this.ctx.beginPath(),this.ctx.moveTo(this.mousePressX,this.mousePressY),this.ctx.lineTo(this.currentMouseX,this.currentMouseY),this.ctx.strokeStyle="rgb(0, ".concat(Math.floor(131*Math.random())+45,", 153)"),this.ctx.stroke()),requestAnimationFrame(this.animate.bind(this))}},{key:"actionsForInnerSolarSystem",value:function(){this.innerSolarSystem.updatePositionVectors().updateAccelerationVectors().updateVelocityVectors(),this.populateManifestations(this.innerSolarSystem.masses)}},{key:"loadOriginScene",value:function(){this.innerSolarSystem.masses=JSON.parse(JSON.stringify(this.masses)),this.populateManifestations(this.innerSolarSystem.masses)}},{key:"loadNewSpaceObj",value:function(t){var n=(this.mousePressX-this.width/2)/this.scale,e=(this.mousePressY-this.height/2)/this.scale,i=(t.clientX-this.mousePressX)/35,o=(t.clientY-this.mousePressY)/35;this.innerSolarSystem.masses.push({name:this.massesList.selectedOptions[0].label,m:parseFloat(this.massesList.value),x:n,y:e,z:0,vx:i,vy:o,vz:0,manifestation:new r.Manifestation(this.ctx,this.trailLength,this.radius)}),this.dragging=!1}},{key:"settings",value:function(){var t=this;document.querySelector("#reset-btn").addEventListener("click",this.loadOriginScene.bind(this)),this.canvas.addEventListener("mousedown",(function(n){t.mousePressX=n.clientX,t.mousePressY=n.clientY,t.dragging=!0}),!1),this.canvas.addEventListener("mousemove",(function(n){t.currentMouseX=n.clientX,t.currentMouseY=n.clientY}),!1),this.canvas.addEventListener("mouseup",this.loadNewSpaceObj.bind(this))}}])&&o(n.prototype,e),t}();n.Space=s},3339:function(t,n,e){"use strict";e.r(n)}},0,[[4126,497]]]);