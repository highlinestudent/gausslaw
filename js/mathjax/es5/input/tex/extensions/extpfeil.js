!function(a){var o={};function n(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=a,n.c=o,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isObject=MathJax._.components.global.isObject,e.combineConfig=MathJax._.components.global.combineConfig,e.combineDefaults=MathJax._.components.global.combineDefaults,e.combineWithMathJax=MathJax._.components.global.combineWithMathJax,e.MathJax=MathJax._.components.global.MathJax},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e(2),o=e(3),n=e(4),u=e(5),r=e(6),l=e(7);i.ExtpfeilMethods={},i.ExtpfeilMethods.xArrow=n.default.xArrow,i.ExtpfeilMethods.NewExtArrow=function(t,e){var a=t.GetArgument(e),o=t.GetArgument(e),n=t.GetArgument(e);if(!a.match(/^\\([a-z]+|.)$/i))throw new l.default("NewextarrowArg1","First argument to %1 must be a control sequence name",e);if(!o.match(/^(\d+),(\d+)$/))throw new l.default("NewextarrowArg2","Second argument to %1 must be two integers separated by a comma",e);if(!n.match(/^(\d+|0x[0-9A-F]+)$/i))throw new l.default("NewextarrowArg3","Third argument to %1 must be a unicode character number",e);a=a.substr(1);var r=o.split(",");u.default.addMacro(t,a,i.ExtpfeilMethods.xArrow,[parseInt(n),parseInt(r[0]),parseInt(r[1])])},new o.CommandMap("extpfeil",{xtwoheadrightarrow:["xArrow",8608,12,16],xtwoheadleftarrow:["xArrow",8606,17,13],xmapsto:["xArrow",8614,6,7],xlongequal:["xArrow",61,7,7],xtofrom:["xArrow",8644,12,12],Newextarrow:"NewExtArrow"},i.ExtpfeilMethods);i.ExtpfeilConfiguration=a.Configuration.create("extpfeil",{handler:{macro:["extpfeil"]},init:function(t){r.NewcommandConfiguration.init(t)}})},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Configuration=MathJax._.input.tex.Configuration.Configuration,e.ConfigurationHandler=MathJax._.input.tex.Configuration.ConfigurationHandler},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.AbstractSymbolMap=MathJax._.input.tex.SymbolMap.AbstractSymbolMap,e.RegExpMap=MathJax._.input.tex.SymbolMap.RegExpMap,e.AbstractParseMap=MathJax._.input.tex.SymbolMap.AbstractParseMap,e.CharacterMap=MathJax._.input.tex.SymbolMap.CharacterMap,e.DelimiterMap=MathJax._.input.tex.SymbolMap.DelimiterMap,e.MacroMap=MathJax._.input.tex.SymbolMap.MacroMap,e.CommandMap=MathJax._.input.tex.SymbolMap.CommandMap,e.EnvironmentMap=MathJax._.input.tex.SymbolMap.EnvironmentMap},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=MathJax._.input.tex.ams.AmsMethods.default},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=MathJax._.input.tex.newcommand.NewcommandUtil.default},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.NewcommandConfiguration=MathJax._.input.tex.newcommand.NewcommandConfiguration.NewcommandConfiguration},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=MathJax._.input.tex.TexError.default},function(t,e,a){"use strict";a.r(e);var o=a(0),n=a(1);Object(o.combineWithMathJax)({_:{input:{tex:{extpfeil:{ExtpfeilConfiguration:n}}}}})}]);
//# sourceMappingURL=extpfeil.js.map