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
const styled_1 = require("@emotion/styled");
const NavbarDropdown = react_1.forwardRef((_a, ref) => {
    var { toggle, theme, children } = _a, rest = __rest(_a, ["toggle", "theme", "children"]);
    const [isOpen, setIsOpen] = react_1.useState(false);
    const [displayLeft, setDisplayLeft] = react_1.useState(true);
    let timer;
    const handleMouseOver = (evt) => {
        setIsOpen(true);
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
    const handleMouseLeave = () => {
        timer = setTimeout(() => setIsOpen(false), 200);
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
    const dropdownTheme = theme.navbar.dropdown;
    const StyledDropdownContainer = styled_1.default.div({
        display: 'flex',
        visibility: 'hidden',
        position: 'absolute',
        background: dropdownTheme.background,
        top: '110%',
        right: displayLeft ? '' : '0',
        left: displayLeft ? '0' : '',
        textAlign: 'left',
        flexWrap: 'wrap',
        minWidth: '225px',
        maxWidth: '300px',
        border: dropdownTheme.border,
        borderRadius: dropdownTheme.borderRadius,
        zIndex: 2000,
        '> *, > a': {
            position: 'relative',
            display: 'block',
            flex: '1 1 100%',
            width: 'max-content',
            margin: 0,
            padding: dropdownTheme.padding,
            '&:hover': {
                background: dropdownTheme.backgroundHover
            }
        },
        [`@media (max-width: ${theme.navbar.collapseAt})`]: {
            top: '100%',
            visibility: 'visible',
            maxWidth: '100%',
            paddingLeft: '.5rem',
            position: 'relative',
            border: 'none',
            '> *, > a': {
                padding: dropdownTheme.mobilePadding,
                '&:hover': {
                    background: 'transparent'
                }
            }
        }
    });
    return (core_1.jsx("div", Object.assign({ css: dropdownStyles, role: "navigation", onMouseOver: handleMouseOver, onMouseLeave: handleMouseLeave, onFocus: handleMouseOver, onBlur: handleMouseLeave, ref: ref }, rest),
        toggle(handleMouseOver),
        core_1.jsx(StyledDropdownContainer, { css: isOpen ? visible : [] }, children)));
});
exports.default = emotion_theming_1.withTheme(NavbarDropdown);
