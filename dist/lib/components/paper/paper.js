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
const react_1 = __importDefault(require("react"));
const styled_system_1 = require("styled-system");
const styled_1 = __importDefault(require("../../../theme/styled"));
const PaperContainer = styled_1.default.div({
    display: 'block',
    textAlign: 'left'
}, styled_system_1.variant({
    scale: 'paper',
    variants: {
        default: {
            background: 'white',
            border: '1px solid grey',
            borderColor: 'grey',
            borderRadius: 'paper',
            padding: 5
        }
    }
}), styled_system_1.space, styled_system_1.layout);
PaperContainer.defaultProps = {
    variant: 'default'
};
const Paper = (_a) => {
    var { children } = _a, rest = __rest(_a, ["children"]);
    return react_1.default.createElement(PaperContainer, Object.assign({}, rest), children);
};
exports.default = Paper;
