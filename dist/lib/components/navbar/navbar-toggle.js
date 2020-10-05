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
/** @jsx jsx */
const react_1 = require("react");
const core_1 = require("@emotion/core");
const navbar_1 = require("./navbar");
const styled_1 = __importDefault(require("../../../theme/styled"));
const emotion_theming_1 = require("emotion-theming");
const NavbarToggleButton = styled_1.default.button(({ theme }) => ({
    display: 'none',
    background: 'transparent',
    border: 0,
    fontSize: 'inherit',
    minHeight: theme.navbar.minHeight,
    [`@media (max-width: ${theme.navbar.collapseAt})`]: {
        display: 'block'
    }
}));
const NavbarToggle = react_1.forwardRef((_a, ref) => {
    var { children } = _a, rest = __rest(_a, ["children"]);
    const { toggleExpanded } = react_1.useContext(navbar_1.NavbarContext);
    return (core_1.jsx(NavbarToggleButton, Object.assign({}, rest, { ref: ref, onClick: toggleExpanded, css: { label: 'navbarToggle' } }), children));
});
NavbarToggle.displayName = 'NavbarToggle';
exports.default = emotion_theming_1.withTheme(NavbarToggle);
