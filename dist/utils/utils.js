"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIE11 = exports.windowIsAboveWidth = void 0;
exports.windowIsAboveWidth = (width) => {
    return window.innerWidth >= parseInt(width);
};
exports.isIE11 = () => {
    return (typeof navigator !== 'undefined' &&
        navigator.userAgent &&
        navigator.userAgent.indexOf('Trident/') !== -1);
};
