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
exports.getButtonStyles = void 0;
/** @jsx jsx */
const react_1 = require("@emotion/react");
const link_1 = require("../link/link");
let color = '';
const getButtonStyles = ({ theme, variant = '', size = 'regular', block, active, disabled }) => {
    color = theme.colors.black;
    let backgroundColor = theme.colors.white;
    let border = theme.buttons.border;
    const boxShadow = disabled
        ? theme.buttons.disabledBoxShadow
        : theme.buttons.boxShadow;
    let hoverColor = theme.colors.black;
    let hoverBackgroundColor = theme.colors.grey;
    let hoverBorder = theme.buttons.border;
    const hoverBoxShadow = theme.buttons.hoverBoxShadow;
    const transition = theme.buttons.transition;
    if (disabled) {
        color = theme.buttons.disabledColor;
        backgroundColor = theme.buttons.disabledBackgroundColor;
        border = theme.buttons.disabledBorder;
    }
    if (variant === 'primary') {
        color = theme.colors.white;
        backgroundColor = theme.buttons.primary.backgroundColor;
        border = theme.buttons.primary.border;
        hoverColor = theme.buttons.primary.hoverColor;
        hoverBackgroundColor = theme.buttons.primary.hoverBackgroundColor;
        hoverBorder = theme.buttons.primary.hoverBorder;
    }
    if (variant === 'secondary') {
        color = theme.buttons.secondary.color;
        backgroundColor = theme.buttons.secondary.backgroundColor;
        border = theme.buttons.secondary.border;
        hoverColor = theme.buttons.secondary.hoverColor;
        hoverBackgroundColor = theme.buttons.secondary.hoverBackgroundColor;
        hoverBorder = theme.buttons.secondary.hoverBorder;
    }
    const hoverCss = disabled
        ? {}
        : {
            color: hoverColor,
            backgroundColor: hoverBackgroundColor,
            border: hoverBorder,
            cursor: 'pointer',
            boxShadow: hoverBoxShadow,
            textDecoration: 'none'
        };
    const { padding } = theme.buttons.sizes[size];
    let css = {
        display: block ? 'block' : 'inline-block',
        width: block ? '100%' : 'auto',
        textAlign: 'center',
        padding,
        fontSize: theme.buttons.fontSize || 'inherit',
        fontWeight: 'bold',
        lineHeight: theme.buttons.lineHeight,
        borderRadius: theme.radii.button,
        boxShadow,
        transition,
        textDecoration: 'none',
        color,
        backgroundColor,
        border,
        '&:visited': {
            color
        },
        ':hover, :focus': hoverCss
    };
    if (active) {
        css = Object.assign(Object.assign({}, css), hoverCss);
    }
    return css;
};
exports.getButtonStyles = getButtonStyles;
const ButtonBase = (_a) => {
    var { className = '', id = '', children, primary, secondary, inverse, asLink, underline, block, size = 'regular', onClick, onHover, onFocus, hover, active, disabled, theme, type = 'button' } = _a, rest = __rest(_a, ["className", "id", "children", "primary", "secondary", "inverse", "asLink", "underline", "block", "size", "onClick", "onHover", "onFocus", "hover", "active", "disabled", "theme", "type"]);
    let variant;
    if (primary) {
        variant = link_1.LinkVariant.Primary;
    }
    else if (secondary) {
        variant = link_1.LinkVariant.Secondary;
    }
    let css = {};
    if (asLink) {
        css = link_1.getLinkStyles({ theme, variant, underline, inverse, block, active });
        css = Object.assign(Object.assign({}, css), { border: 0, backgroundColor: 'transparent', padding: 0 });
    }
    else {
        css = exports.getButtonStyles({ theme, variant, block, active, size, disabled });
    }
    const getClasses = () => {
        return `${className}${hover ? ' is-hover' : ''}${active ? ' is-active' : ''}${asLink ? ' is-link' : ''}${block ? ' block' : ''}`;
    };
    return (react_1.jsx("button", Object.assign({}, rest, { className: getClasses(), css: css, "data-button-as-link": `${asLink ? 'true' : 'false'}`, disabled: disabled, id: id, onClick: onClick, onFocus: onFocus, onMouseOver: onHover, type: type }), children));
};
const Button = react_1.withTheme(ButtonBase);
exports.default = Button;
