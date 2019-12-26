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
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const styled_1 = require("@emotion/styled");
const icon_1 = require("../icon/icon");
const emotion_theming_1 = require("emotion-theming");
const PlayButton = styled_1.default.button(({ sizePx, sizePadding }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: sizePx,
    width: sizePx,
    padding: sizePadding,
    borderRadius: '50%',
    border: 0,
    position: 'relative',
    background: '#ffffff',
    cursor: 'pointer',
    boxShadow: '0 2px 4px 2px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.15s ease-out',
    ['&:hover']: {
        transform: 'scale(1.1)'
    }
}));
const IconContainer = styled_1.default.div(({ sizePositionHorz, sizePositionVert }) => ({
    position: 'relative',
    left: sizePositionHorz,
    top: sizePositionVert
}));
const VideoPlayButton = (_a) => {
    var { size = 'reg' } = _a, rest = __rest(_a, ["size"]);
    let sizePx = '50px';
    let sizePadding = '15px';
    let sizePositionHorz = '2px';
    let sizePositionVert = '0';
    if (size === 'lg') {
        sizePx = '80px';
        sizePadding = '24px';
        sizePositionHorz = '5px';
        sizePositionVert = '-1px';
    }
    else if (size === 'sm') {
        sizePx = '40px';
        sizePadding = '12px';
        sizePositionHorz = '3px';
    }
    const theme = emotion_theming_1.useTheme();
    return (core_1.jsx(PlayButton, Object.assign({ sizePx: sizePx, sizePadding: sizePadding }, rest),
        core_1.jsx(IconContainer, { sizePositionHorz: sizePositionHorz, sizePositionVert: sizePositionVert },
            core_1.jsx(icon_1.default, { type: icon_1.IconType.Play, color: theme.colors.primary, sizing: "responsive" }))));
};
exports.default = VideoPlayButton;
