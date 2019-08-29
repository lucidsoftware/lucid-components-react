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
const link_1 = require("../link/link");
exports.getButtonStyles = (theme, variant = '') => {
    let color = theme.colors.black;
    let backgroundColor = theme.colors.white;
    let border = theme.buttons.border;
    let boxShadow = theme.buttons.boxShadow;
    let hoverColor = theme.colors.black;
    let hoverBackgroundColor = theme.colors.grey;
    let hoverBorder = theme.buttons.border;
    let hoverBoxShadow = theme.buttons.hoverBoxShadow;
    let transition = theme.buttons.transition;
    if (variant === 'primary') {
        color = theme.colors.white;
        backgroundColor = theme.buttons.primary.backgroundColor;
        border = theme.buttons.primary.border;
        hoverColor = theme.buttons.primary.hoverColor;
        hoverBackgroundColor = theme.buttons.primary.hoverBackgroundColor;
        hoverBorder = theme.buttons.primary.hoverBorder;
    }
    else if (variant === 'secondary') {
        color = theme.buttons.secondary.color;
        backgroundColor = theme.buttons.secondary.backgroundColor;
        border = theme.buttons.secondary.border;
        hoverColor = theme.buttons.primary.hoverColor;
        hoverBackgroundColor = theme.buttons.primary.hoverBackgroundColor;
        hoverBorder = theme.buttons.primary.hoverBorder;
    }
    const css = {
        padding: `${theme.space[2]}px ${theme.space[4]}px`,
        fontSize: `${theme.fontSizes[0]}px`,
        fontWeight: theme.fontWeights.bolder,
        borderRadius: `${theme.borderRadius}px`,
        boxShadow,
        transition,
        textDecoration: 'none',
        color,
        backgroundColor,
        border,
        '&:visited': {
            color
        },
        ':hover,:focus': {
            color: hoverColor,
            backgroundColor: hoverBackgroundColor,
            border: hoverBorder,
            cursor: 'pointer',
            boxShadow: hoverBoxShadow,
            textDecoration: 'none',
        }
    };
    return css;
};
const ButtonBase = (_a) => {
    var { className = "", id = "", children, primary, secondary, inverse, asLink, underline, block, onClick, onHover, disabled, hover, active, theme, type = "button" } = _a, rest = __rest(_a, ["className", "id", "children", "primary", "secondary", "inverse", "asLink", "underline", "block", "onClick", "onHover", "disabled", "hover", "active", "theme", "type"]);
    let variant;
    if (primary) {
        variant = link_1.LinkVariant.Primary;
    }
    else if (secondary) {
        variant = link_1.LinkVariant.Secondary;
    }
    let css = {};
    if (asLink) {
        css = link_1.getLinkStyles(theme, variant, underline, inverse);
        css = Object.assign(Object.assign({}, css), { border: 0, backgroundColor: 'transparent', padding: 'initial' });
    }
    else {
        css = exports.getButtonStyles(theme, variant);
    }
    const getClasses = () => {
        return `${className}  ${hover ? 'is-hover' : ''} ${active ? 'is-active' : ''}  ${asLink ? 'is-link' : ''}  ${block ? 'block' : ''}`;
    };
    return (core_1.jsx("button", Object.assign({}, rest, { className: getClasses(), onClick: onClick, onMouseOver: onHover, type: type, id: id, css: css }), children));
};
const Button = emotion_theming_1.withTheme(ButtonBase);
exports.default = Button;
