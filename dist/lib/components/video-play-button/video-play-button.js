"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const styled_1 = require("@emotion/styled");
const emotion_theming_1 = require("emotion-theming");
const icon_1 = require("../icon/icon");
const VideoPlayButtonBase = ({ className, theme, onClick = () => { } }) => {
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
    return (core_1.jsx(PlayButton, { className: className, onClick: () => onClick() },
        core_1.jsx(IconContainer, null,
            core_1.jsx(icon_1.default, { type: icon_1.IconType.Play, color: theme.colors.primary }))));
};
const VideoPlayButton = emotion_theming_1.withTheme(VideoPlayButtonBase);
exports.default = VideoPlayButton;
