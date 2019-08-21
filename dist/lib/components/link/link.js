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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@emotion/core");
const emotion_theming_1 = require("emotion-theming");
const button_1 = require("../button/button");
var LinkVariant;
(function (LinkVariant) {
    LinkVariant["Default"] = "default";
    LinkVariant["Primary"] = "primary";
    LinkVariant["Secondary"] = "secondary";
})(LinkVariant = exports.LinkVariant || (exports.LinkVariant = {}));
exports.getLinkStyles = (theme, variant = LinkVariant.Default, underline = 'none', inverse = false) => {
    const linkUnderline = underline === 'always' ? 'underline' : 'none';
    const linkUnderlineHover = underline === 'hover' || underline === 'always' ? 'underline' : 'none';
    const linkType = inverse ? 'inverse' : 'default';
    let { color, hover, disabled } = theme.links[variant][linkType];
    console.log(variant, color, hover, disabled);
    const css = {
        color,
        border: 'none',
        textDecoration: linkUnderline,
        cursor: 'pointer',
        ':visited': {
            color: color
        },
        ':hover,:focus': {
            color: hover,
            textDecoration: linkUnderlineHover
        },
        'a&:not([href])': {
            color: disabled,
            cursor: 'not-allowed'
        }
    };
    return css;
};
const LinkBase = (_a) => {
    var { href, disabled, underline = 'none', children, primary, secondary, inverse, asButton, theme, css } = _a, rest = __rest(_a, ["href", "disabled", "underline", "children", "primary", "secondary", "inverse", "asButton", "theme", "css"]);
    let variant;
    let baseCss = {};
    if (primary) {
        variant = LinkVariant.Primary;
    }
    else if (secondary) {
        variant = LinkVariant.Secondary;
    }
    if (asButton) {
        baseCss = button_1.getButtonStyles(theme, variant);
    }
    else {
        baseCss = exports.getLinkStyles(theme, variant, underline, inverse);
    }
    baseCss = Object.assign({}, baseCss, css);
    return (core_1.jsx("a", Object.assign({}, rest, { href: disabled ? undefined : href, css: baseCss }), children));
};
const Link = emotion_theming_1.withTheme(LinkBase);
exports.default = Link;
