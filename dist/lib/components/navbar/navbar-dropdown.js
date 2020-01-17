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
const styled_1 = require("../../../theme/styled");
const navbar_1 = require("./navbar");
const DropdownWrapper = styled_1.default.div(({ theme }) => ({
    position: 'relative',
    '&:hover': {
        cursor: 'pointer'
    },
    [`@media (max-width: ${theme.navbar.collapseAt})`]: {
        '> a, > button': {
            width: '100%',
            padding: theme.navbar.dropdown.mobilePadding,
            '&::after': {
                content: '":"'
            }
        },
        '> button.isLink': {
            paddingBottom: '1rem'
        }
    }
}));
const StyledDropdownContainer = styled_1.default.div(({ theme: { navbar: { collapseAt, dropdown: { background, border, borderRadius, padding, backgroundHover, mobilePadding } } }, displayLeft, maxWidth, flexWrap, isOpen }) => ({
    display: 'flex',
    visibility: isOpen ? 'visible' : 'hidden',
    position: 'absolute',
    background,
    top: '110%',
    textAlign: 'left',
    flexWrap,
    minWidth: '225px',
    maxWidth,
    border,
    borderRadius,
    zIndex: 2000,
    'li, p': {
        position: 'relative',
        display: 'block',
        flex: '1 1 100%',
        width: 'max-content',
        margin: 0,
        padding
    },
    'a, button': {
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
    right: displayLeft ? '' : '0',
    left: displayLeft ? '0' : '',
    '&::before': {
        content: '""',
        position: 'absolute',
        left: 0,
        right: 0,
        top: '-20px',
        height: '20px'
    },
    [`@media (max-width: ${collapseAt})`]: {
        top: '100%',
        visibility: 'visible',
        maxWidth: '100%',
        padding: 0,
        position: 'relative',
        border: 'none',
        flexWrap: 'wrap',
        'li, p': {
            padding: mobilePadding,
            width: 'auto'
        },
        'a, button': {
            padding: mobilePadding,
            width: 'auto',
            '&:hover': {
                background: 'transparent'
            }
        },
        '&::before': {
            display: 'none'
        }
    }
}));
const DROPDOWN_SAFETY_TIMER = 225;
const NavbarDropdown = react_1.forwardRef((_a, ref) => {
    var { toggle, maxWidth = '300px', flexWrap = 'wrap', children } = _a, rest = __rest(_a, ["toggle", "maxWidth", "flexWrap", "children"]);
    const dropdownRef = react_1.useRef(null);
    const [isOpen, setIsOpen] = react_1.useState(false);
    const [displayLeft, setDisplayLeft] = react_1.useState(true);
    const { setActiveDropdownSetIsOpen } = react_1.useContext(navbar_1.NavbarContext);
    let timer;
    const handleMouseOver = (evt) => {
        setIsOpen(true);
        setActiveDropdownSetIsOpen([setIsOpen]);
        const threshold = 400;
        const rect = evt.currentTarget.getBoundingClientRect();
        const dropdownRect = dropdownRef.current
            ? dropdownRef.current.getBoundingClientRect()
            : { width: 0 };
        const diff = document.body.offsetWidth - rect.left;
        if (diff < dropdownRect.width) {
            setDisplayLeft(false);
        }
        else if (diff < threshold && displayLeft) {
            setDisplayLeft(false);
        }
        else if (diff >= threshold && !displayLeft) {
            setDisplayLeft(true);
        }
        clearTimeout(timer);
    };
    const handleMouseLeave = () => {
        timer = setTimeout(() => setIsOpen(false), DROPDOWN_SAFETY_TIMER);
    };
    return (core_1.jsx(DropdownWrapper, Object.assign({}, rest, { role: "navigation", onMouseOver: handleMouseOver, onMouseLeave: handleMouseLeave, onFocus: handleMouseOver, onBlur: handleMouseLeave, ref: ref }),
        toggle(handleMouseOver),
        core_1.jsx(StyledDropdownContainer, { ref: dropdownRef, displayLeft: displayLeft, isOpen: isOpen, flexWrap: flexWrap, maxWidth: maxWidth }, children)));
});
exports.default = NavbarDropdown;
