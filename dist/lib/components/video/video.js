"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const styled_1 = require("@emotion/styled");
const emotion_theming_1 = require("emotion-theming");
const VideoBase = ({ className }) => {
    const videoCss = core_1.css({});
    const VideoContainer = styled_1.default('div') `
        display: flex;
        height: 100%;
        padding: 0;
    `;
    return (core_1.jsx(VideoContainer, { className: className, css: videoCss }));
};
const Video = emotion_theming_1.withTheme(VideoBase);
exports.default = Video;
