"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_1 = __importDefault(require("../../../theme/styled"));
const styled_system_1 = require("styled-system");
const HeadingBase = styled_1.default('h1')(styled_system_1.variant({
    prop: 'variant',
    scale: 'headings',
    variants: {
        heading: {
            color: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading'
        },
        subheading: {
            color: 'grey',
            lineHeight: 'heading',
            fontWeight: 'heading'
        }
    }
}), styled_system_1.color, styled_system_1.layout, styled_system_1.space, styled_system_1.typography);
const Heading = styled_1.default((_a) => {
    var { as } = _a, rest = __rest(_a, ["as"]);
    return react_1.default.createElement(HeadingBase, Object.assign({ as: as }, rest));
})();
exports.default = Heading;
