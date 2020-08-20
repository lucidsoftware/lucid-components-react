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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
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
const React = __importStar(require("react"));
const styled_1 = __importDefault(require("../../../../theme/styled"));
const styled_system_1 = require("styled-system");
const field_context_1 = __importDefault(require("../field/field-context"));
const field_1 = require("../field/field");
const LabelBase = styled_1.default.label(styled_system_1.space, styled_system_1.typography, styled_system_1.variant({
    variants: {
        default: {
            fontSize: 3,
            '& + input': {
                marginTop: 2
            }
        },
        floating: {
            fontSize: 3,
            position: 'absolute',
            top: '0',
            left: 2,
            color: 'lightgrey',
            height: '100%',
            transition: 'all .15s ease-out',
            display: 'flex',
            alignItems: 'center',
            lineHeight: '1',
            pointerEvents: 'none',
            transform: 'translateX(1px)',
            '&[data-floating="true"]': {
                transform: 'translateY(-24%) scale(.75)',
                transformOrigin: 'left center',
                letterSpacing: '.04rem',
                color: 'black',
                pointerEvents: 'auto'
            },
            '&[data-focus="true"][data-floating="true"]': {
                color: 'primary'
            },
            '&[data-error="true"][data-floating="true"]': {
                color: 'red.0'
            }
        }
    }
}));
const Label = styled_1.default((_a) => {
    var { variant = field_1.FloatingStatus.Default } = _a, rest = __rest(_a, ["variant"]);
    const { hasError, hasFocus, enableFloating, isFloating } = React.useContext(field_context_1.default);
    variant = enableFloating ? field_1.FloatingStatus.Floating : variant;
    return (React.createElement(LabelBase, Object.assign({}, rest, { floating: enableFloating, variant: variant, "data-floating": enableFloating && isFloating, "data-focus": hasFocus, "data-error": hasError })));
})();
exports.default = Label;
