"use strict";
/** @jsx jsx */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@emotion/core");
const styled_1 = __importDefault(require("../../../theme/styled"));
const NavbarWrap = styled_1.default.nav(({ theme, sticky, stickyCollapsed, background, top, zIndex }) => ({
    display: 'block',
    background: background || theme.navbar.background,
    zIndex,
    top,
    left: 0,
    right: 0,
    padding: `${theme.navbar.padding} 0`,
    minHeight: theme.navbar.minHeight,
    textAlign: 'left',
    position: sticky ? ['fixed', 'sticky'] : 'relative',
    [`@media (max-width: ${theme.navbar.collapseAt})`]: {
        position: stickyCollapsed ? ['fixed', 'sticky'] : 'relative'
    }
}));
const isIE11 = typeof navigator !== 'undefined' &&
    navigator.userAgent &&
    navigator.userAgent.indexOf('Trident/') !== -1;
const NavbarWrapper = ({ as, sticky = false, stickyCollapsed = false, top = 0, zIndex = 1000, background, children }) => {
    return (core_1.jsx(NavbarWrap, { as: as, sticky: sticky, stickyCollapsed: stickyCollapsed, top: top, zIndex: zIndex, background: background },
        sticky && isIE11 && (core_1.jsx(core_1.Global, { styles: {
                body: {
                    marginTop: '60px'
                }
            } })),
        children));
};
exports.default = NavbarWrapper;
