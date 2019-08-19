"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const styled_1 = require("@emotion/styled");
const react_1 = require("react");
const react_player_1 = require("react-player");
const emotion_theming_1 = require("emotion-theming");
const video_play_button_1 = require("../video-play-button/video-play-button");
const VideoPlayerBase = ({ className, url, placeholder, playing, onClick = () => { }, ratio = 'wide' }) => {
    const [overlayVisible, setOverlayVisible] = react_1.useState(!playing);
    const videoContainerCss = core_1.css({
        display: 'block',
        padding: 0,
        width: '100%',
        position: 'relative',
        paddingTop: ratio === 'wide' ? '56.25%' : '100%'
    });
    const VideoPlaceholder = styled_1.default('div') `
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1;
        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    `;
    const VideoOverlay = styled_1.default('div') `
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(0, 0, 0, .25);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;
    `;
    return (core_1.jsx("div", { className: className, css: videoContainerCss },
        overlayVisible && core_1.jsx(VideoOverlay, null,
            core_1.jsx(video_play_button_1.default, { onClick: () => {
                    setOverlayVisible(false);
                    onClick();
                } })),
        placeholder && overlayVisible && core_1.jsx(VideoPlaceholder, null, placeholder()),
        url && core_1.jsx(react_player_1.default, { css: core_1.css({
                position: 'absolute',
                left: 0,
                right: 0
            }), className: "react-player", height: "100%", width: "100%", url: url, playing: playing || !overlayVisible })));
};
const VideoPlayer = emotion_theming_1.withTheme(VideoPlayerBase);
exports.default = VideoPlayer;
