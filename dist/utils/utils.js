"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIE11 = exports.windowIsAboveWidth = void 0;
const windowIsAboveWidth = (width) => {
    return window.innerWidth >= parseInt(width);
};
exports.windowIsAboveWidth = windowIsAboveWidth;
const isIE11 = () => {
    return (typeof navigator !== 'undefined' &&
        navigator.userAgent &&
        navigator.userAgent.indexOf('Trident/') !== -1);
};
exports.isIE11 = isIE11;
