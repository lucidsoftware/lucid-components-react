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
exports.getLinkStyles = (theme, variant = '', underline = 'none') => {
    const linkColor = theme.colors.primary;
    const linkHoverColor = theme.colors.secondary;
    const linkDisabledColor = theme.colors.disabled;
    const linkUnderline = underline === 'always' ? 'underline' : 'none';
    const linkUnderlineHover = underline === 'hover' || underline === 'always' ? 'underline' : 'none';
    const css = {
        color: linkColor,
        border: 'none',
        textDecoration: linkUnderline,
        cursor: 'pointer',
        ':visited': {
            color: linkColor
        },
        ':hover,:focus': {
            color: linkHoverColor,
            textDecoration: linkUnderlineHover
        },
        'a&:not([href])': {
            color: linkDisabledColor,
            cursor: 'not-allowed'
        }
    };
    return css;
};
const LinkBase = (_a) => {
    var { href, disabled, underline = 'none', children, primary, secondary, inverse, asButton, theme } = _a, rest = __rest(_a, ["href", "disabled", "underline", "children", "primary", "secondary", "inverse", "asButton", "theme"]);
    let variant = '';
    let css = {};
    if (primary) {
        variant = 'primary';
    }
    else if (secondary) {
        variant = 'secondary';
    }
    else if (inverse) {
        variant = 'inverse';
    }
    if (asButton) {
        css = button_1.getButtonStyles(theme, variant);
    }
    else {
        css = exports.getLinkStyles(theme, variant, underline);
    }
    return (core_1.jsx("a", Object.assign({ href: disabled ? undefined : href, css: css }, rest), children));
};
const Link = emotion_theming_1.withTheme(LinkBase);
exports.default = Link;
