"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
require("./icon.scss");
var IconType;
(function (IconType) {
    IconType[IconType["ArrowRight"] = 0] = "ArrowRight";
    IconType[IconType["ArrowLeft"] = 1] = "ArrowLeft";
    IconType[IconType["CarotRight"] = 2] = "CarotRight";
    IconType[IconType["CarotDown"] = 3] = "CarotDown";
    IconType[IconType["Play"] = 4] = "Play";
})(IconType = exports.IconType || (exports.IconType = {}));
const Icon = ({ className, type }) => {
    const iconCss = core_1.css({
        height: '100%',
        width: '100%'
    });
    let icon;
    switch (type) {
        case IconType.ArrowRight:
            icon = core_1.jsx("div", null, "&rightarrow;");
            break;
        case IconType.CarotRight:
            icon = core_1.jsx("div", null, ">");
            break;
        case IconType.CarotDown:
            icon = core_1.jsx("div", { style: { transform: 'rotate(90deg)' } }, ">");
            break;
        default:
            icon = core_1.jsx("svg", null);
            break;
    }
    return (core_1.jsx("div", { css: iconCss, className: className }, icon));
};
exports.default = Icon;
