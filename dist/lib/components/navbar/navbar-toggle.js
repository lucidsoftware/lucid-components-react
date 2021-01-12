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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
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
const react_2 = require("@emotion/react");
const navbar_1 = require("./navbar");
const styled_1 = __importDefault(require("../../../theme/styled"));
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
    return (react_1.default.createElement(NavbarToggleButton, Object.assign({}, rest, { ref: ref, css: { label: 'navbarToggle' }, onClick: toggleExpanded }), children));
});
NavbarToggle.displayName = 'NavbarToggle';
exports.default = react_2.withTheme(NavbarToggle);
