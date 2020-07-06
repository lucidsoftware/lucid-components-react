"use strict";
/** @jsx jsx */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@emotion/core");
const styled_1 = __importDefault(require("../../../theme/styled"));
const NavbarWrap = styled_1.default.nav(({ theme, sticky, stickyCollapsed, background }) => ({
    display: 'block',
    background: background || theme.navbar.background,
    zIndex: 1000,
    top: 0,
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
const NavbarWrapper = ({ as, sticky = false, stickyCollapsed = false, children }, ref) => {
    return (core_1.jsx(NavbarWrap, { ref: ref, as: as, sticky: sticky, stickyCollapsed: stickyCollapsed },
        sticky && isIE11 && (core_1.jsx(core_1.Global, { styles: {
                body: {
                    marginTop: '60px'
                }
            } })),
        children));
};
exports.default = NavbarWrapper;
