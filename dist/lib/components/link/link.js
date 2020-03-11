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
/** @jsx jsx */
const core_1 = require("@emotion/core");
const emotion_theming_1 = require("emotion-theming");
const button_1 = require("../button/button");
var LinkVariant;
(function (LinkVariant) {
    LinkVariant["Default"] = "default";
    LinkVariant["Primary"] = "primary";
    LinkVariant["Secondary"] = "secondary";
})(LinkVariant = exports.LinkVariant || (exports.LinkVariant = {}));
exports.getLinkStyles = ({ active, block, inverse = false, theme, underline = 'none', variant = LinkVariant.Default }) => {
    console.log('link', theme);
    const linkUnderline = underline === 'always' ? 'underline' : 'none';
    const linkUnderlineHover = underline === 'hover' || underline === 'always' ? 'underline' : 'none';
    const linkType = inverse ? 'inverse' : 'default';
    const { color, hover, disabled } = theme.links[variant][linkType];
    const hoverCss = {
        color: hover,
        textDecoration: linkUnderlineHover,
        ':visited': {
            color: hover
        }
    };
    let css = {
        color,
        display: block ? 'block' : 'inline-block',
        border: 'none',
        fontSize: 'inherit',
        textAlign: 'left',
        textDecoration: linkUnderline,
        cursor: 'pointer',
        ':visited': {
            color
        },
        ':hover,:focus': hoverCss,
        'a&:not([href])': {
            color: disabled,
            cursor: 'not-allowed'
        }
    };
    if (active) {
        css = Object.assign(Object.assign({}, css), hoverCss);
    }
    return css;
};
const LinkBase = (_a) => {
    var { href, disabled, underline = 'none', children, buttonSize = 'regular', primary, secondary, inverse, asButton, block, theme, css, className = '', active } = _a, rest = __rest(_a, ["href", "disabled", "underline", "children", "buttonSize", "primary", "secondary", "inverse", "asButton", "block", "theme", "css", "className", "active"]);
    let variant;
    let baseCss = {};
    if (primary) {
        variant = LinkVariant.Primary;
    }
    else if (secondary) {
        variant = LinkVariant.Secondary;
    }
    if (asButton) {
        baseCss = button_1.getButtonStyles({
            theme,
            variant,
            block,
            active,
            size: buttonSize
        });
    }
    else {
        baseCss = exports.getLinkStyles({
            theme,
            variant,
            underline,
            inverse,
            block,
            active
        });
    }
    return (core_1.jsx("a", Object.assign({}, rest, { className: `${className}${asButton ? ' is-button' : ''}`, href: disabled ? undefined : href, css: [baseCss, css] }), children));
};
const Link = emotion_theming_1.withTheme(LinkBase);
exports.default = Link;
