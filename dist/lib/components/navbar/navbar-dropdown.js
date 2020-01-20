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
    [`@media (max-width: ${theme.navbar.collapseAt})`]: {
        '> a, > button': {
            '&::after': {
                content: '":"'
            }
        }
    }
}));
const DROPDOWN_SAFETY_TIMER = 225;
exports.NavbarDropdownContext = react_1.createContext({
    isOpen: false,
    displayLeft: false
});
const NavbarDropdown = react_1.forwardRef((_a, ref) => {
    var { toggle, children } = _a, rest = __rest(_a, ["toggle", "children"]);
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
    const context = {
        isOpen,
        displayLeft
    };
    return (core_1.jsx(DropdownWrapper, Object.assign({}, rest, { role: "navigation", onMouseOver: handleMouseOver, onMouseLeave: handleMouseLeave, onFocus: handleMouseOver, onBlur: handleMouseLeave, ref: ref }),
        core_1.jsx(exports.NavbarDropdownContext.Provider, { value: context },
            toggle(handleMouseOver),
            children)));
});
exports.default = NavbarDropdown;
