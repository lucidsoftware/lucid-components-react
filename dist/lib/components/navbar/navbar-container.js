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
const NavbarLink = react_1.forwardRef((_a, ref) => {
    var { theme, children } = _a, rest = __rest(_a, ["theme", "children"]);
    const { expanded } = react_1.useContext(navbar_1.NavbarContext);
    const StyledContainer = styled_1.default.div({
        display: 'flex',
        marginLeft: `-${theme.navbar.itemSpacing}`,
        marginRight: `-${theme.navbar.itemSpacing}`,
        [`@media (max-width: ${theme.navbar.collapseAt})`]: {
            display: 'none',
            flex: '0 1 100%'
        }
    });
    const expandedStyles = core_1.css({
        [`@media (max-width: ${theme.navbar.collapseAt})`]: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column'
        }
    });
    return (core_1.jsx(StyledContainer, Object.assign({ css: expanded ? expandedStyles : '', ref: ref }, rest), children));
});
exports.default = emotion_theming_1.withTheme(NavbarLink);