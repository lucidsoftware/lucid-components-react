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
const styled_system_1 = require("styled-system");
const styled_1 = __importDefault(require("../../../theme/styled"));
const field_context_1 = __importDefault(require("../field/field-context"));
const field_1 = require("../field/field");
const TextInputBase = styled_1.default.input(styled_system_1.space, styled_system_1.typography, styled_system_1.variant({
    variants: {
        default: {
            fontSize: 3,
            border: '1px solid lightgrey',
            padding: 2,
            borderRadius: '3px',
            '&[disabled]': {
                background: 'lightgrey'
            }
        },
        floating: {
            fontSize: 3,
            border: '1px solid lightgrey',
            borderRadius: '3px',
            padding: 2,
            paddingLeft: 2,
            paddingTop: '16px',
            paddingBottom: '16px',
            '[disabled]': {
                background: 'purple'
            },
            '&[data-floating="true"]': {
                paddingTop: '20px',
                paddingBottom: '12px'
            },
            '&[data-error="true"]': {
                background: 'rgba(255, 30, 0, 0.55)'
            }
        }
    }
}), {
    display: 'block',
    width: '100%'
});
const TextInput = styled_1.default((_a) => {
    var { disabled, validator, validate, placeholder, variant = field_1.FloatingStatus.Default } = _a, rest = __rest(_a, ["disabled", "validator", "validate", "placeholder", "variant"]);
    const { disabled: contextDisabled, enableFloating, hasError, hasFocus, isFloating, setHasError, setHasFocus, setIsFloating } = React.useContext(field_context_1.default);
    if (enableFloating) {
        variant = field_1.FloatingStatus.Floating;
        placeholder = '';
    }
    const onChange = (evt) => {
        const { value } = evt.currentTarget;
        setIsFloating(value.length > 0);
        if (validate && validator) {
            const isValid = validator(evt);
            setHasError(!isValid);
        }
    };
    const onFocus = () => {
        if (!hasFocus) {
            setHasFocus(true);
        }
    };
    const onBlur = () => {
        if (hasFocus) {
            setHasFocus(false);
        }
    };
    return (React.createElement(TextInputBase, Object.assign({}, rest, { "data-error": hasError, "data-floating": enableFloating && isFloating, disabled: contextDisabled !== null && contextDisabled !== void 0 ? contextDisabled : disabled, onBlur: onBlur, onChange: onChange, onFocus: onFocus, placeholder: placeholder, variant: variant })));
})();
exports.default = TextInput;
