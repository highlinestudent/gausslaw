"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Wrapper_js_1 = require("../Wrapper.js");
var mglyph_js_1 = require("../../common/Wrappers/mglyph.js");
var mglyph_js_2 = require("../../../core/MmlTree/MmlNodes/mglyph.js");
var SVGmglyph = (function (_super) {
    __extends(SVGmglyph, _super);
    function SVGmglyph() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGmglyph.prototype.toSVG = function (parent) {
        var svg = this.standardSVGnode(parent);
        var _a = this.node.attributes.getList('src', 'alt'), src = _a.src, alt = _a.alt;
        var h = this.fixed(this.height);
        var w = this.fixed(this.width);
        var y = this.fixed(this.height + (this.valign || 0));
        var properties = {
            width: w, height: h,
            transform: 'translate(0 ' + y + ') matrix(1 0 0 -1 0 0)',
            preserveAspectRatio: 'none',
            alt: alt, title: alt,
            href: src
        };
        var img = this.svg('image', properties);
        this.adaptor.append(svg, img);
    };
    SVGmglyph.kind = mglyph_js_2.MmlMglyph.prototype.kind;
    return SVGmglyph;
}(mglyph_js_1.CommonMglyphMixin(Wrapper_js_1.SVGWrapper)));
exports.SVGmglyph = SVGmglyph;
//# sourceMappingURL=mglyph.js.map