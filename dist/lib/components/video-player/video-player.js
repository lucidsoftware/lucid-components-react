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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const react_1 = require("react");
const react_player_1 = __importDefault(require("react-player"));
const video_play_button_1 = __importDefault(require("../video-play-button/video-play-button"));
const styled_1 = __importDefault(require("../../../theme/styled"));
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
const VideoPlayer = (_a) => {
    var { className, url, placeholder, playing, onClick = () => {
        return;
    }, ratio = 'wide' } = _a, rest = __rest(_a, ["className", "url", "placeholder", "playing", "onClick", "ratio"]);
    const [overlayVisible, setOverlayVisible] = react_1.useState(!playing);
    const [isPlaying, setIsPlaying] = react_1.useState(playing);
    react_1.useEffect(() => {
        if (playing) {
            setOverlayVisible(false);
            setIsPlaying(true);
        }
        else {
            setOverlayVisible(true);
            setIsPlaying(false);
        }
    }, [playing]);
    const reactPlayerCss = core_1.css({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0
    });
    const videoContainerCss = core_1.css({
        display: 'block',
        padding: 0,
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '5px',
        paddingTop: ratio === 'wide' ? '56.25%' : '100%'
    });
    return (core_1.jsx("div", { className: className, css: videoContainerCss },
        overlayVisible && (core_1.jsx(VideoOverlay, null,
            core_1.jsx(video_play_button_1.default, { size: "lg", onClick: () => {
                    if (url) {
                        setOverlayVisible(false);
                        setIsPlaying(true);
                    }
                    onClick();
                } }))),
        placeholder && overlayVisible && (core_1.jsx(VideoPlaceholder, null, placeholder())),
        url && (core_1.jsx(react_player_1.default, Object.assign({}, rest, { css: reactPlayerCss, height: "100%", width: "100%", url: url, playing: isPlaying })))));
};
exports.default = VideoPlayer;
