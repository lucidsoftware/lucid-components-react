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
const core_1 = require("@emotion/core");
const styled_1 = require("../../../theme/styled");
const PaperContainer = styled_1.default.div(({ theme, isRaised, noPadding }) => (Object.assign({ display: 'block', background: theme.colors.white, borderRadius: `${theme.borderRadius}px`, border: `1px solid ${theme.colors.grey}`, textAlign: 'left', boxShadow: isRaised ? '20px 20px 0 0 rgba(0,0,0,.3)' : 'none' }, (!noPadding && {
    padding: theme.paper.padding
}))));
const Paper = (_a) => {
    var { children } = _a, rest = __rest(_a, ["children"]);
    return core_1.jsx(PaperContainer, Object.assign({}, rest), children);
};
exports.default = Paper;
