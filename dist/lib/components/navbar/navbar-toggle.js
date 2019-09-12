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
const navbar_1 = require("./navbar");
const NavbarToggle = react_1.forwardRef((_a, ref) => {
    var { theme, children } = _a, rest = __rest(_a, ["theme", "children"]);
    const { toggleExpanded } = react_1.useContext(navbar_1.NavbarContext);
    const StyledToggle = styled_1.default.button(navbar_1.navbarItemStyles, {
        display: 'none',
        background: 'transparent',
        border: 0,
        fontSize: 'inherit',
        [`@media (max-width: ${theme.navbar.collapseAt})`]: {
            display: 'block'
        }
    });
    return (core_1.jsx(StyledToggle, Object.assign({ ref: ref }, rest, { onClick: toggleExpanded }), children));
});
exports.default = emotion_theming_1.withTheme(NavbarToggle);
