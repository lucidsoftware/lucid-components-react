"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@emotion/core");
const styled_1 = require("@emotion/styled");
const emotion_theming_1 = require("emotion-theming");
const CardBase = ({ as = 'div', children, className, horizontal, theme, isRaised = false, isInteractive = false, thumbnail, title, titleAs = 'h2', href, actions, subtitle, subtitleAbove }) => {
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
    const cardRenderType = isInteractive ? 'a' : as;
    const CardContainer = styled_1.default(cardRenderType) `
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
    const CardContent = styled_1.default('div') `
        padding: 2.5em;
        color: ${theme.colors.text};
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: space-between;
    `;
    const CardChildren = styled_1.default('div') `
        margin: 0;
    `;
    const CardTitle = styled_1.default(titleAs) `
        margin: 0;
        font-size: ${theme.fontSizes[1]}px;
        line-height: ${theme.lineHeights.body};
        font-weight: ${theme.fontWeights.bolder};
    `;
    const CardSubTitle = styled_1.default('div') `
        display: block;
        margin: 0 0 ${theme.space[2]}px;
        font-size: ${theme.fontSizes[0]}px;
        line-height: ${theme.lineHeights.body};
        font-weight: ${theme.fontWeights.body};
        color: #939ea9;
    `;
    const CardThumbnail = styled_1.default('div') `
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top center;
        flex: 1 1 auto;
    `;
    const CardActions = styled_1.default('div') `
        display: flex;
        margin-top: ${theme.space[3]}px;
    `;
    const CardAction = styled_1.default('div') `
        margin-right: ${theme.space[2]}px;
    `;
    const CardSpacer = styled_1.default('div') `
        margin-top: ${theme.space[3]}px;
    `;
    const cardContainerProps = {};
    if (isInteractive && href) {
        cardContainerProps.href = href;
    }
    const isCustomThumbnail = typeof thumbnail !== 'string';
    return (core_1.jsx(CardContainer, Object.assign({ css: cardCss }, cardContainerProps, { className: className }),
        thumbnail && !isCustomThumbnail && core_1.jsx(CardThumbnail, { style: { backgroundImage: `url(${thumbnail})` } }),
        thumbnail && isCustomThumbnail && thumbnail,
        core_1.jsx(CardContent, null,
            core_1.jsx("div", null,
                subtitle && subtitleAbove && core_1.jsx(CardSubTitle, null, subtitle),
                title && core_1.jsx(CardTitle, null, title),
                subtitle && !subtitleAbove && core_1.jsx(CardSubTitle, null, subtitle),
                subtitle && !subtitleAbove && children && core_1.jsx(CardSpacer, null),
                children && core_1.jsx(CardChildren, null, children)),
            actions && core_1.jsx(CardActions, null, actions.map(action => {
                return core_1.jsx(CardAction, null, action);
            })))));
};
const Card = emotion_theming_1.withTheme(CardBase);
exports.default = Card;
