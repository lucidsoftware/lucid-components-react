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
exports.FloatingStatus = void 0;
const react_1 = __importStar(require("react"));
const styled_system_1 = require("styled-system");
const styled_1 = __importDefault(require("../../../../theme/styled"));
const field_context_1 = __importDefault(require("./field-context"));
var FloatingStatus;
(function (FloatingStatus) {
    FloatingStatus["Default"] = "default";
    FloatingStatus["Floating"] = "floating";
})(FloatingStatus = exports.FloatingStatus || (exports.FloatingStatus = {}));
const Wrapper = styled_1.default.div({
    position: 'relative'
});
const FieldBase = (_a) => {
    var { children, disabled, floating: enableFloating = false } = _a, rest = __rest(_a, ["children", "disabled", "floating"]);
    const [isFloating, setIsFloating] = react_1.useState(false);
    const [hasError, setHasError] = react_1.useState(false);
    const [hasFocus, setHasFocus] = react_1.useState(false);
    const context = {
        disabled,
        enableFloating,
        hasError,
        hasFocus,
        isFloating,
        setIsFloating: (value) => setIsFloating(value),
        setHasError: (value) => setHasError(value),
        setHasFocus: (value) => setHasFocus(value)
    };
    return (react_1.default.createElement(field_context_1.default.Provider, { value: context },
        react_1.default.createElement(Wrapper, Object.assign({}, rest, { enableFloating: enableFloating }), children)));
};
const Field = styled_1.default(FieldBase)(styled_system_1.space);
exports.default = Field;
