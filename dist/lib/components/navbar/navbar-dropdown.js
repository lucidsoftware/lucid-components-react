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
exports.NavbarDropdownContext = void 0;
/** @jsx jsx */
const react_1 = require("react");
const core_1 = require("@emotion/core");
const emotion_theming_1 = require("emotion-theming");
const styled_1 = __importDefault(require("../../../theme/styled"));
const navbar_1 = require("./navbar");
const utils_1 = require("../../../utils/utils");
const DropdownWrapper = styled_1.default.div(() => ({
    position: 'relative'
}));
const DROPDOWN_SAFETY_TIMER = 225;
exports.NavbarDropdownContext = react_1.createContext({
    isOpen: false,
    displayLeft: false
});
const NavbarDropdown = react_1.forwardRef((_a, ref) => {
    var { theme, toggle, children } = _a, rest = __rest(_a, ["theme", "toggle", "children"]);
    const [isOpen, setIsOpen] = react_1.useState(false);
    const [displayLeft, setDisplayLeft] = react_1.useState(true);
    const { setActiveDropdownSetIsOpen } = react_1.useContext(navbar_1.NavbarContext);
    let timer;
    const openDropdown = (evt) => {
        setIsOpen(true);
        setActiveDropdownSetIsOpen([setIsOpen]);
        const threshold = 400;
        const rect = evt.currentTarget.getBoundingClientRect();
        const diff = document.body.offsetWidth - rect.left;
        if (diff < threshold && displayLeft) {
            setDisplayLeft(false);
        }
        else if (diff >= threshold && !displayLeft) {
            setDisplayLeft(true);
        }
        clearTimeout(timer);
    };
    const closeDropdown = () => {
        timer = setTimeout(() => setIsOpen(false), DROPDOWN_SAFETY_TIMER);
    };
    const handleMouseOver = (evt) => {
        if (utils_1.windowIsAboveWidth(theme.navbar.collapseAt)) {
            openDropdown(evt);
        }
    };
    const handleMouseLeave = () => {
        if (utils_1.windowIsAboveWidth(theme.navbar.collapseAt)) {
            closeDropdown();
        }
    };
    const handleClickToggle = (evt) => {
        if (!utils_1.windowIsAboveWidth(theme.navbar.collapseAt)) {
            if (!isOpen) {
                openDropdown(evt);
            }
            else {
                closeDropdown();
            }
        }
    };
    const context = {
        isOpen,
        displayLeft
    };
    return (core_1.jsx(DropdownWrapper, Object.assign({}, rest, { ref: ref, css: { label: 'navbarDropdown' }, onBlur: handleMouseLeave, onClick: handleClickToggle, onFocus: handleMouseOver, onMouseLeave: handleMouseLeave, onMouseOver: handleMouseOver, role: "navigation" }),
        core_1.jsx(exports.NavbarDropdownContext.Provider, { value: context },
            toggle(handleMouseOver),
            children)));
});
NavbarDropdown.displayName = 'NavbarDropdown';
exports.default = emotion_theming_1.withTheme(NavbarDropdown);
