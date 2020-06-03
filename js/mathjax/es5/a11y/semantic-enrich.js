!function(r){var n={};function i(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=r,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=9)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(8),i="undefined"==typeof window?"./a11y/sre-node.js":"../../../speech-rule-engine/lib/sre_browser.js",a="undefined"==typeof sre?n.asyncLoad(i):Promise.resolve();e.sreReady=function(){return new Promise(function(r,n){a.then(function(){var e=(new Date).getTime();!function t(){sre.Engine.isReady()?r():(new Date).getTime()-e<2e4?setTimeout(t,100):n("Timed out waiting for Speech-Rule-Engine")}()}).catch(function(t){return n(t.message||t)})})}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isObject=MathJax._.components.global.isObject,e.combineConfig=MathJax._.components.global.combineConfig,e.combineDefaults=MathJax._.components.global.combineDefaults,e.combineWithMathJax=MathJax._.components.global.combineWithMathJax,e.MathJax=MathJax._.components.global.MathJax},function(t,e,r){"use strict";var n,s=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},l=this&&this.__values||function(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},a=this&&this.__read||function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,i,a=r.call(t),o=[];try{for(;(void 0===e||0<e--)&&!(n=a.next()).done;)o.push(n.value)}catch(t){i={error:t}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o},c=this&&this.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(a(arguments[e]));return t};Object.defineProperty(e,"__esModule",{value:!0});var o=r(4),u=r(5),h=r(6),p=r(7),f=r(0),d="none";function y(t,r,n){return s(e,i=t),e.prototype.serializeMml=function(t){if("outerHTML"in t)return t.outerHTML;if("undefined"!=typeof Element&&"undefined"!=typeof window&&t instanceof Element){var e=window.document.createElement("div");return e.appendChild(t),e.innerHTML}return t.toString()},e.prototype.enrich=function(t){if(!(this.state()>=u.STATE.ENRICHED||this.isEscaped)){"undefined"!=typeof sre&&sre.Engine.isReady()||o.mathjax.retryAfter(f.sreReady()),t.options.enrichSpeech!==d&&(SRE.setupEngine({speech:t.options.enrichSpeech}),d=t.options.enrichSpeech);var e=new t.options.MathItem("",r);e.math=this.serializeMml(SRE.toEnriched(n(this.root))),e.display=this.display,e.compile(t),this.root=e.root,this.inputData.originalMml=e.math,this.state(u.STATE.ENRICHED)}},e.prototype.attachSpeech=function(t){var e,r;if(!(this.state()>=u.STATE.ATTACHSPEECH)){var n=this.root.attributes.get("aria-label")||this.getSpeech(this.root);if(n){var i=t.adaptor,a=this.typesetRoot;i.setAttribute(a,"aria-label",n);try{for(var o=l(i.childNodes(a)),s=o.next();!s.done;s=o.next()){var c=s.value;i.setAttribute(c,"aria-hidden","true")}}catch(t){e={error:t}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(e)throw e.error}}}this.state(u.STATE.ATTACHSPEECH)}},e.prototype.getSpeech=function(t){var e,r,n=t.attributes;if(n){var i=n.getExplicit("data-semantic-speech");if(!n.getExplicit("data-semantic-parent")&&i)return i;try{for(var a=l(t.childNodes),o=a.next();!o.done;o=a.next()){var s=o.value,c=this.getSpeech(s);if(null!=c)return c}}catch(t){e={error:t}}finally{try{o&&!o.done&&(r=a.return)&&r.call(a)}finally{if(e)throw e.error}}}},e;function e(){return null!==i&&i.apply(this,arguments)||this}var i}function M(t,a){var e,o;return s(r,o=t),r.prototype.attachSpeech=function(){var e,t;if(!this.processed.isSet("attach-speech")){try{for(var r=l(this.math),n=r.next();!n.done;n=r.next())n.value.attachSpeech(this)}catch(t){e={error:t}}finally{try{n&&!n.done&&(t=r.return)&&t.call(r)}finally{if(e)throw e.error}}this.processed.set("attach-speech")}return this},r.prototype.enrich=function(){var e,t;if(!this.processed.isSet("enriched")){try{for(var r=l(this.math),n=r.next();!n.done;n=r.next())n.value.enrich(this)}catch(t){e={error:t}}finally{try{n&&!n.done&&(t=r.return)&&t.call(r)}finally{if(e)throw e.error}}this.processed.set("enriched")}return this},r.prototype.state=function(t,e){return void 0===e&&(e=!1),o.prototype.state.call(this,t,e),t<u.STATE.ENRICHED&&this.processed.clear("enriched"),this},(e=r).OPTIONS=i(i({},t.OPTIONS),{enrichSpeech:"none",renderActions:p.expandable(i(i({},t.OPTIONS.renderActions),{enrich:[u.STATE.ENRICHED],attachSpeech:[u.STATE.ATTACHSPEECH]}))}),e;function r(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=o.apply(this,c(t))||this;a.setMmlFactory(r.mmlFactory);var n=r.constructor.ProcessBits;n.has("enriched")||(n.allocate("enriched"),n.allocate("attach-speech"));var i=new h.SerializedMmlVisitor(r.mmlFactory);return r.options.MathItem=y(r.options.MathItem,a,function(t){return i.visitTree(t)}),r}}u.newState("ENRICHED",30),u.newState("ATTACHSPEECH",155),e.EnrichedMathItemMixin=y,e.EnrichedMathDocumentMixin=M,e.EnrichHandler=function(t,e){return e.setAdaptor(t.adaptor),t.documentClass=M(t.documentClass,e),t}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MathML=MathJax._.input.mathml_ts.MathML},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.mathjax=MathJax._.mathjax.mathjax},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.protoItem=MathJax._.core.MathItem.protoItem,e.AbstractMathItem=MathJax._.core.MathItem.AbstractMathItem,e.STATE=MathJax._.core.MathItem.STATE,e.newState=MathJax._.core.MathItem.newState},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DATAMJX=MathJax._.core.MmlTree.SerializedMmlVisitor.DATAMJX,e.SerializedMmlVisitor=MathJax._.core.MmlTree.SerializedMmlVisitor.SerializedMmlVisitor},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.APPEND=MathJax._.util.Options.APPEND,e.REMOVE=MathJax._.util.Options.REMOVE,e.Expandable=MathJax._.util.Options.Expandable,e.expandable=MathJax._.util.Options.expandable,e.makeArray=MathJax._.util.Options.makeArray,e.keys=MathJax._.util.Options.keys,e.copy=MathJax._.util.Options.copy,e.insert=MathJax._.util.Options.insert,e.defaultOptions=MathJax._.util.Options.defaultOptions,e.userOptions=MathJax._.util.Options.userOptions,e.selectOptions=MathJax._.util.Options.selectOptions,e.selectOptionsFromKeys=MathJax._.util.Options.selectOptionsFromKeys,e.separateOptions=MathJax._.util.Options.separateOptions},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.asyncLoad=MathJax._.util.AsyncLoad.asyncLoad},function(t,e,r){"use strict";r.r(e);var n=r(1),i=r(2),a=r(0);Object(n.combineWithMathJax)({_:{a11y:{"semantic-enrich":i,sre:a}}});var o=r(3);MathJax.loader&&Object(n.combineDefaults)(MathJax.config.loader,"a11y/semantic-enrich",{checkReady:function(){return Object(a.sreReady)()}}),MathJax.startup&&MathJax.startup.extendHandler(function(t){return Object(i.EnrichHandler)(t,new o.MathML)})}]);
//# sourceMappingURL=semantic-enrich.js.map