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
const emotion_theming_1 = require("emotion-theming");
const icon_1 = require("../icon/icon");
const VideoPlayButtonBase = (_a) => {
    var { className, theme, onClick = () => { } } = _a, rest = __rest(_a, ["className", "theme", "onClick"]);
    const PlayButton = styled_1.default('button') `
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 50px;
        padding: 15px;
        border-radius: 50%;
        border: 0;
        position: relative;
        background: #FFFFFF;
        cursor: pointer;
        box-shadow: 0px 2px 3px rgba(0, 0, 0, .15);
        transition: transform .15s ease-out;
        &:hover {
            transform: scale(1.1);
        }
    `;
    const IconContainer = styled_1.default('div') `
        position: relative;
        left: 2px;
    `;
    return (core_1.jsx(PlayButton, Object.assign({}, rest, { className: className, onClick: () => onClick() }),
        core_1.jsx(IconContainer, null,
            core_1.jsx(icon_1.default, { type: icon_1.IconType.Play, color: theme.colors.primary }))));
};
const VideoPlayButton = emotion_theming_1.withTheme(VideoPlayButtonBase);
exports.default = VideoPlayButton;
