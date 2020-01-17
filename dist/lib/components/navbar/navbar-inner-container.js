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
const navbar_1 = require("./navbar");
const styled_1 = require("../../../theme/styled");
const NavbarInnerContainerList = styled_1.default.ol(({ theme, expanded }) => ({
    display: 'flex',
    order: 2,
    margin: `auto -${theme.navbar.itemSpacing}`,
    padding: 0,
    [`@media (max-width: ${theme.navbar.collapseAt})`]: Object.assign({ display: 'none', flex: '0 1 100%', overflowY: 'scroll', overflowX: 'hidden', maxHeight: 'calc(100vh - 60px)', padding: '0 5px 80px 5px', margin: 'auto 0' }, (expanded && {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        border: theme.navbar.dropdown.border,
        borderRadius: theme.navbar.dropdown.borderRadius,
        padding: '0 0 3rem'
    }))
}));
const NavbarInnerContainer = react_1.forwardRef((_a, ref) => {
    var { children } = _a, rest = __rest(_a, ["children"]);
    const { expanded } = react_1.useContext(navbar_1.NavbarContext);
    return (core_1.jsx(NavbarInnerContainerList, Object.assign({ ref: ref, expanded: expanded }, rest), children));
});
exports.default = NavbarInnerContainer;
