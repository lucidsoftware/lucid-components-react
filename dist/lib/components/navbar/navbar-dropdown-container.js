"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const react_1 = __importStar(require("react"));
const styled_1 = __importDefault(require("../../../theme/styled"));
const navbar_dropdown_1 = require("./navbar-dropdown");
const StyledDropdownContainer = styled_1.default.div(({ theme: { navbar: { collapseAt, dropdown: { background, border, borderRadius, padding, backgroundHover, mobilePadding } } }, displayLeft, isOpen, mobileToggle = false }) => ({
    label: 'navbarDropdownContainer',
    display: 'flex',
    flexWrap: 'wrap',
    visibility: isOpen ? 'visible' : 'hidden',
    position: 'absolute',
    background,
    top: 'calc(100% + 5px)',
    textAlign: 'left',
    minWidth: '225px',
    maxWidth: '300px',
    width: '100%',
    border,
    borderRadius,
    zIndex: 2000,
    'li, p': {
        flex: '1 1 100%',
        margin: 0,
        padding
    },
    'a, button': {
        flex: '1 1 100%',
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
        top: '-5px',
        height: '5px'
    },
    [`@media (max-width: ${collapseAt})`]: [
        mobileToggle && { transition: 'height ease-out 0.3s' },
        {
            top: '100%',
            visibility: mobileToggle ? (isOpen ? 'visible' : 'hidden') : 'visible',
            height: mobileToggle ? (isOpen ? 'auto' : '0') : 'auto',
            maxWidth: '100%',
            padding: 0,
            position: 'relative',
            border: 'none',
            flexWrap: 'wrap',
            'li, p': {
                padding: mobilePadding,
                paddingLeft: 0,
                paddingRight: 0
            },
            'a, button': {
                padding: mobilePadding,
                paddingLeft: 0,
                paddingRight: 0,
                '&:hover': {
                    background: 'transparent'
                }
            },
            '&::before': {
                display: 'none'
            }
        }
    ]
}));
const NavbarDropdownContainer = (_a) => {
    var { children } = _a, rest = __rest(_a, ["children"]);
    const { isOpen, displayLeft } = react_1.useContext(navbar_dropdown_1.NavbarDropdownContext);
    return (react_1.default.createElement(StyledDropdownContainer, Object.assign({ displayLeft: displayLeft, isOpen: isOpen }, rest), children));
};
exports.default = NavbarDropdownContainer;
