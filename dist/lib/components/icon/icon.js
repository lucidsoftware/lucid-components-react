"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
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
            icon = core_1.jsx("svg", { version: "1.1", x: "0px", y: "0px", viewBox: "0 0 24.7 39.2" },
                core_1.jsx("polyline", { style: {
                        fill: 'none',
                        stroke: '#CCCCCC',
                        strokeWidth: 7,
                        strokeMiterlimit: 10
                    }, points: "2.5,2.5 19.7,19.5 2.5,36.7 " }));
            break;
        case IconType.CarotRight:
            icon = core_1.jsx("svg", { version: "1.1", x: "0px", y: "0px", viewBox: "0 0 24.7 39.2" },
                core_1.jsx("polyline", { style: {
                        fill: 'none',
                        stroke: '#CCCCCC',
                        strokeWidth: 7,
                        strokeMiterlimit: 10
                    }, points: "2.5,2.5 19.7,19.5 2.5,36.7 " }));
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
