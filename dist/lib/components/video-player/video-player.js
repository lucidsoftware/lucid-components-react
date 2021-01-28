"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const react_1 = require("@emotion/react");
const react_2 = __importStar(require("react"));
const lazy_1 = __importDefault(require("react-player/lazy"));
const video_play_button_1 = __importDefault(require("../video-play-button/video-play-button"));
const styled_1 = __importDefault(require("../../../theme/styled"));
const VideoPlaceholder = styled_1.default('div')({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1,
    img: {
        objectFit: 'cover',
        width: '100%',
        height: '100%'
    }
});
const VideoOverlay = styled_1.default('div')({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: 'rgba(0, 0, 0, 0.35)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2
});
const VideoPlayer = (_a) => {
    var { className, containerClassName, url, placeholder, playing, onClick = () => {
        return;
    }, ratio = 'wide' } = _a, rest = __rest(_a, ["className", "containerClassName", "url", "placeholder", "playing", "onClick", "ratio"]);
    const [overlayVisible, setOverlayVisible] = react_2.useState(!playing);
    const [isPlaying, setIsPlaying] = react_2.useState(playing);
    react_2.useEffect(() => {
        if (playing) {
            setOverlayVisible(false);
            setIsPlaying(true);
        }
        else {
            setOverlayVisible(true);
            setIsPlaying(false);
        }
    }, [playing]);
    const reactPlayerCss = react_1.css({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0
    });
    const videoContainerCss = react_1.css({
        display: 'block',
        padding: 0,
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '5px',
        paddingTop: ratio === 'wide' ? '56.25%' : '100%'
    });
    return (react_2.default.createElement("div", { className: containerClassName, css: videoContainerCss },
        overlayVisible && (react_2.default.createElement(VideoOverlay, null,
            react_2.default.createElement(video_play_button_1.default, { onClick: () => {
                    if (url) {
                        setOverlayVisible(false);
                        setIsPlaying(true);
                    }
                    onClick();
                }, size: "lg" }))),
        placeholder && overlayVisible && (react_2.default.createElement(VideoPlaceholder, null, placeholder())),
        url && (react_2.default.createElement(lazy_1.default, Object.assign({}, rest, { css: reactPlayerCss, 
            /* eslint-disable-next-line react/jsx-sort-props */
            className: className, height: "100%", playing: isPlaying, url: url, width: "100%" })))));
};
exports.default = VideoPlayer;
