"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const react_1 = require("react");
const core_1 = require("@emotion/core");
const styled_1 = require("@emotion/styled");
const card_action_1 = require("./card-action");
const card_actions_1 = require("./card-actions");
const card_content_1 = require("./card-content");
const card_image_1 = require("./card-image");
const card_title_1 = require("./card-title");
const card_subtitle_1 = require("./card-subtitle");
const emotion_theming_1 = require("emotion-theming");
const CardBase = react_1.forwardRef(({ as = 'div', children, className, horizontal, theme, isRaised = false, isInteractive = false }, ref) => {
    let boxShadow = 'none';
    let isInteractiveProps = {};
    if (isRaised) {
        boxShadow = theme.card.raised.boxShadow;
    }
    if (isInteractive) {
        isInteractiveProps = {
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
        };
    }
    const cardCss = core_1.css(Object.assign({ boxShadow }, isInteractiveProps));
    const CardContainer = styled_1.default(as) `
      display: flex;
      padding: 0;
      background: ${theme.colors.white};
      flex-direction: ${horizontal ? 'row' : 'column'};
      border-radius: ${theme.borderRadius}px;
      border: 1px solid ${theme.colors.grey};
      text-align: left;
      text-decoration: none;
      overflow: hidden;
    `;
    return (core_1.jsx(CardContainer, { css: cardCss, className: className, ref: ref }, children));
});
const Card = Object.assign(emotion_theming_1.withTheme(CardBase), {
    Action: card_action_1.default,
    Actions: card_actions_1.default,
    Content: card_content_1.default,
    Image: card_image_1.default,
    Title: card_title_1.default,
    Subtitle: card_subtitle_1.default
});
exports.default = Card;
