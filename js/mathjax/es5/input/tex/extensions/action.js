!function(a){var n={};function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=a,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=6)}([function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isObject=MathJax._.components.global.isObject,e.combineConfig=MathJax._.components.global.combineConfig,e.combineDefaults=MathJax._.components.global.combineDefaults,e.combineWithMathJax=MathJax._.components.global.combineWithMathJax,e.MathJax=MathJax._.components.global.MathJax},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(2),o=a(3),i=a(4),r=a(5);e.ActionMethods={},e.ActionMethods.Macro=r.default.Macro,e.ActionMethods.Toggle=function(t,e){for(var a,n=[];"\\endtoggle"!==(a=t.GetArgument(e));)n.push(new o.default(a,t.stack.env,t.configuration).mml());t.Push(t.create("node","maction",n,{actiontype:"toggle"}))},e.ActionMethods.Mathtip=function(t,e){var a=t.ParseArg(e),n=t.ParseArg(e);t.Push(t.create("node","maction",[a,n],{actiontype:"tooltip"}))},new i.CommandMap("action-macros",{toggle:"Toggle",mathtip:"Mathtip",texttip:["Macro","\\mathtip{#1}{\\text{#2}}",2]},e.ActionMethods),e.ActionConfiguration=n.Configuration.create("action",{handler:{macro:["action-macros"]}})},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Configuration=MathJax._.input.tex.Configuration.Configuration,e.ConfigurationHandler=MathJax._.input.tex.Configuration.ConfigurationHandler},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=MathJax._.input.tex.TexParser.default},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.AbstractSymbolMap=MathJax._.input.tex.SymbolMap.AbstractSymbolMap,e.RegExpMap=MathJax._.input.tex.SymbolMap.RegExpMap,e.AbstractParseMap=MathJax._.input.tex.SymbolMap.AbstractParseMap,e.CharacterMap=MathJax._.input.tex.SymbolMap.CharacterMap,e.DelimiterMap=MathJax._.input.tex.SymbolMap.DelimiterMap,e.MacroMap=MathJax._.input.tex.SymbolMap.MacroMap,e.CommandMap=MathJax._.input.tex.SymbolMap.CommandMap,e.EnvironmentMap=MathJax._.input.tex.SymbolMap.EnvironmentMap},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=MathJax._.input.tex.base.BaseMethods.default},function(t,e,a){"use strict";a.r(e);var n=a(0),o=a(1);Object(n.combineWithMathJax)({_:{input:{tex:{action:{ActionConfiguration:o}}}}})}]);
//# sourceMappingURL=action.js.map