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
const react_1 = require("react");
const react_player_1 = require("react-player");
const emotion_theming_1 = require("emotion-theming");
const video_play_button_1 = require("../video-play-button/video-play-button");
const VideoPlayerBase = (_a) => {
    var { className, url, placeholder, playing, onClick = () => {
        return;
    }, ratio = 'wide', theme } = _a, rest = __rest(_a, ["className", "url", "placeholder", "playing", "onClick", "ratio", "theme"]);
    const [overlayVisible, setOverlayVisible] = react_1.useState(!playing);
    react_1.useEffect(() => {
        setOverlayVisible(!playing);
    }, [playing]);
    const videoContainerCss = core_1.css({
        display: 'block',
        padding: 0,
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '5px',
        paddingTop: ratio === 'wide' ? '56.25%' : '100%'
    });
    const reactPlayerCss = core_1.css({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0
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
    background: rgba(0, 0, 0, 0.35);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  `;
    return (core_1.jsx("div", { className: className, css: videoContainerCss },
        overlayVisible && (core_1.jsx(VideoOverlay, null,
            core_1.jsx(video_play_button_1.default, { size: "lg", onClick: () => {
                    if (url) {
                        setOverlayVisible(false);
                    }
                    onClick();
                } }))),
        placeholder && overlayVisible && (core_1.jsx(VideoPlaceholder, null, placeholder())),
        url && (core_1.jsx(react_player_1.default, Object.assign({}, rest, { css: reactPlayerCss, height: "100%", width: "100%", url: url, playing: playing || !overlayVisible })))));
};
const VideoPlayer = emotion_theming_1.withTheme(VideoPlayerBase);
exports.default = VideoPlayer;
