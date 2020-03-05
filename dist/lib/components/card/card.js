"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const card_action_1 = __importDefault(require("./card-action"));
const card_actions_1 = __importDefault(require("./card-actions"));
const card_content_1 = __importDefault(require("./card-content"));
const card_image_1 = __importDefault(require("./card-image"));
const card_title_1 = __importDefault(require("./card-title"));
const card_subtitle_1 = __importDefault(require("./card-subtitle"));
const styled_1 = __importDefault(require("../../../theme/styled"));
const CardContainer = styled_1.default.div({
    display: 'flex',
    padding: 0,
    textAlign: 'left',
    textDecoration: 'none',
    overflow: 'hidden'
}, ({ theme, horizontal, isRaised, isInteractive }) => (Object.assign({ background: theme.colors.white, flexDirection: horizontal ? 'row' : 'column', borderRadius: `${theme.borderRadius}px`, border: `1px solid ${theme.colors.grey}`, boxShadow: isRaised ? theme.card.raised.boxShadow : 'none' }, (isInteractive && {
    boxShadow: theme.card.interactive.boxShadow,
    transition: `box-shadow .3s ease, border-color .3s ease, transform .15s ease-out`,
    cursor: 'pointer',
    '&:hover, &:focus': {
        textDecoration: 'none',
        boxShadow: theme.card.interactive.boxShadowHover,
        borderColor: theme.colors.primary
    },
    '&:focus': {
        outline: 'none'
    },
    '&:active': {
        transform: 'scale(.97)',
        boxShadow: 'none'
    }
}))));
const Card = Object.assign(CardContainer, {
    Action: card_action_1.default,
    Actions: card_actions_1.default,
    Content: card_content_1.default,
    Image: card_image_1.default,
    Title: card_title_1.default,
    Subtitle: card_subtitle_1.default
});
exports.default = Card;
