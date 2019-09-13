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
const NavbarBrand = react_1.forwardRef((_a, ref) => {
    var { theme } = _a, props = __rest(_a, ["theme"]);
    const styles = core_1.css({
        display: 'inline-block',
        margin: 'auto 0',
        '& > img': {
            maxHeight: theme.navbar.logoHeight,
            maxWidth: '100%'
        },
        [`@media (max-width: ${theme.navbar.collapseAt})`]: {
            padding: 0
        }
    });
    return core_1.jsx("div", Object.assign({ css: styles, ref: ref }, props));
});
exports.default = emotion_theming_1.withTheme(NavbarBrand);
