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
const react_1 = require("react");
const core_1 = require("@emotion/core");
const emotion_theming_1 = require("emotion-theming");
const styled_1 = require("../../../theme/styled");
const navbar_1 = require("./navbar");
const StyledDropdownContainer = styled_1.default.div(({ theme: { navbar: { collapseAt, dropdown: { background, border, borderRadius, padding, backgroundHover, mobilePadding } } } }) => ({
    display: 'flex',
    visibility: 'hidden',
    position: 'absolute',
    background,
    top: '110%',
    textAlign: 'left',
    flexWrap: 'wrap',
    minWidth: '225px',
    maxWidth: '300px',
    border,
    borderRadius,
    zIndex: 2000,
    '> li, > p': {
        position: 'relative',
        display: 'block',
        flex: '1 1 100%',
        width: 'max-content',
        margin: 0,
        padding,
    },
    '> a, > button': {
        position: 'relative',
        display: 'block',
        flex: '1 1 100%',
        width: 'max-content',
        margin: 0,
        padding,
        '&:hover': {
            background: backgroundHover
        }
    },
    [`@media (max-width: ${collapseAt})`]: {
        top: '100%',
        visibility: 'visible',
        maxWidth: '100%',
        paddingLeft: '.5rem',
        position: 'relative',
        border: 'none',
        '> li, > p': {
            padding: mobilePadding,
            width: 'auto'
        },
        '> a, > button': {
            padding: mobilePadding,
            width: 'auto',
            '&:hover': {
                background: 'transparent'
            }
        }
    }
}));
const DROPDOWN_SAFETY_TIMER = 225;
const NavbarDropdown = react_1.forwardRef((_a, ref) => {
    var { toggle, theme, children } = _a, rest = __rest(_a, ["toggle", "theme", "children"]);
    const [isOpen, setIsOpen] = react_1.useState(false);
    const [displayLeft, setDisplayLeft] = react_1.useState(true);
    const { setActiveDropdownSetIsOpen } = react_1.useContext(navbar_1.NavbarContext);
    let timer;
    const handleMouseOver = (evt) => {
        setIsOpen(true);
        setActiveDropdownSetIsOpen([setIsOpen]);
        const threshold = 400;
        const rect = evt.currentTarget.getBoundingClientRect();
        const diff = document.body.offsetWidth - rect.left;
        if (diff < threshold && displayLeft !== false) {
            setDisplayLeft(false);
        }
        else if (diff >= threshold && displayLeft !== true) {
            setDisplayLeft(true);
        }
        clearTimeout(timer);
    };
    const positioning = core_1.css({
        right: displayLeft ? '' : '0',
        left: displayLeft ? '0' : '',
    });
    const handleMouseLeave = () => {
        timer = setTimeout(() => setIsOpen(false), DROPDOWN_SAFETY_TIMER);
    };
    const visible = core_1.css({
        visibility: 'visible'
    });
    const dropdownStyles = core_1.css({
        position: 'relative',
        '&:hover': {
            cursor: 'pointer'
        },
        [`@media (max-width: ${theme.navbar.collapseAt})`]: {
            '> *, > a, > button': {
                width: '100%'
            }
        }
    });
    return (core_1.jsx("div", Object.assign({ css: dropdownStyles, role: "navigation", onMouseOver: handleMouseOver, onMouseLeave: handleMouseLeave, onFocus: handleMouseOver, onBlur: handleMouseLeave, ref: ref }, rest),
        toggle(handleMouseOver),
        core_1.jsx(StyledDropdownContainer, { css: [positioning, isOpen && visible] }, children)));
});
exports.default = emotion_theming_1.withTheme(NavbarDropdown);
