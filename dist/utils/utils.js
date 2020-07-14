"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.windowIsAboveWidth = (width) => {
    return window.innerWidth <= parseInt(width);
};
exports.isIE11 = () => {
    return (typeof navigator !== 'undefined' &&
        navigator.userAgent &&
        navigator.userAgent.indexOf('Trident/') !== -1);
};
