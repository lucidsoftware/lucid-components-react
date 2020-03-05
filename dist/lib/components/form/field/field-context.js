"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const defaultContext = {
    disabled: false,
    enableFloating: false,
    hasError: false,
    hasFocus: false,
    isFloating: false,
    setIsFloating: () => {
        throw new Error('setIsFloating() not implemented');
    },
    setHasError: () => {
        throw new Error('setHasError() not implemented');
    },
    setHasFocus: () => {
        throw new Error('setHasFocus() not implemented');
    }
};
const FieldContext = React.createContext(defaultContext);
exports.default = FieldContext;
