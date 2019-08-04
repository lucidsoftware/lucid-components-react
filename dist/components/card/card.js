"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var core_1 = require("@emotion/core");
var styled_1 = require("@emotion/styled");
var emotion_theming_1 = require("emotion-theming");
var CardBase = function (_a) {
    var _b = _a.as, as = _b === void 0 ? 'div' : _b, children = _a.children, horizontal = _a.horizontal, theme = _a.theme, _c = _a.isRaised, isRaised = _c === void 0 ? false : _c, _d = _a.isInteractive, isInteractive = _d === void 0 ? false : _d, thumbnail = _a.thumbnail, title = _a.title, _e = _a.titleAs, titleAs = _e === void 0 ? 'h2' : _e, href = _a.href, actions = _a.actions, subtitle = _a.subtitle, subtitleAbove = _a.subtitleAbove;
    var boxShadow = 'none';
    var isInteractiveProps = {};
    if (isRaised) {
        boxShadow = theme.card.raised.boxShadow;
    }
    if (isInteractive) {
        isInteractiveProps = {
            boxShadow: theme.card.interactive.boxShadow,
            transition: "box-shadow .3s ease, border-color .3s ease, transform .15s ease-out",
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
    var cardCss = core_1.css(__assign({ boxShadow: boxShadow }, isInteractiveProps));
    var cardRenderType = isInteractive ? 'a' : as;
    var CardContainer = styled_1["default"](cardRenderType)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        display: flex;\n        height: 100%;\n        padding: 0;\n        background: ", ";\n        flex-direction: ", ";\n        border-radius: ", "px;\n        border: 1px solid ", ";\n        text-align: left;\n        text-decoration: none;\n        overflow: hidden;\n    "], ["\n        display: flex;\n        height: 100%;\n        padding: 0;\n        background: ", ";\n        flex-direction: ", ";\n        border-radius: ", "px;\n        border: 1px solid ", ";\n        text-align: left;\n        text-decoration: none;\n        overflow: hidden;\n    "])), theme.colors.white, horizontal ? 'row' : 'column', theme.borderRadius, theme.colors.grey);
    var CardContent = styled_1["default"]('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        padding: 2.5em;\n        color: ", ";\n        display: flex;\n        flex: 1;\n        flex-direction: column;\n        justify-content: space-between;\n    "], ["\n        padding: 2.5em;\n        color: ", ";\n        display: flex;\n        flex: 1;\n        flex-direction: column;\n        justify-content: space-between;\n    "])), theme.colors.text);
    var CardChildren = styled_1["default"]('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        margin: ", "px 0 0;\n    "], ["\n        margin: ", "px 0 0;\n    "])), theme.space[3]);
    var CardTitle = styled_1["default"](titleAs)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        margin: 0;\n        font-size: ", "px;\n        line-height: ", ";\n        font-weight: ", ";\n    "], ["\n        margin: 0;\n        font-size: ", "px;\n        line-height: ", ";\n        font-weight: ", ";\n    "])), theme.fontSizes[1], theme.lineHeights.body, theme.fontWeights.bolder);
    var CardSubTitle = styled_1["default"]('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        display: block;\n        margin: 0 0 ", "px;\n        font-size: ", "px;\n        line-height: ", ";\n        font-weight: ", ";\n        color: #939ea9;\n    "], ["\n        display: block;\n        margin: 0 0 ", "px;\n        font-size: ", "px;\n        line-height: ", ";\n        font-weight: ", ";\n        color: #939ea9;\n    "])), theme.space[2], theme.fontSizes[0], theme.lineHeights.body, theme.fontWeights.body);
    var CardThumbnail = styled_1["default"]('div')(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: top center;\n        flex: 1 1 auto;\n    "], ["\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: top center;\n        flex: 1 1 auto;\n    "])));
    var CardActions = styled_1["default"]('div')(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n        display: flex;\n        margin-top: ", "px;\n    "], ["\n        display: flex;\n        margin-top: ", "px;\n    "])), theme.space[3]);
    var CardAction = styled_1["default"]('div')(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n        margin-right: ", "px;\n    "], ["\n        margin-right: ", "px;\n    "])), theme.space[2]);
    var cardContainerProps = {};
    if (isInteractive && href) {
        cardContainerProps.href = href;
    }
    return (core_1.jsx(CardContainer, __assign({ css: cardCss }, cardContainerProps),
        thumbnail && core_1.jsx(CardThumbnail, { style: { backgroundImage: "url(" + thumbnail + ")" } }),
        core_1.jsx(CardContent, null,
            core_1.jsx("div", null,
                subtitle && subtitleAbove && core_1.jsx(CardSubTitle, null, subtitle),
                title && core_1.jsx(CardTitle, null, title),
                subtitle && !subtitleAbove && core_1.jsx(CardSubTitle, null, subtitle),
                children && core_1.jsx(CardChildren, null, children)),
            actions && core_1.jsx(CardActions, null, actions.map(function (action) {
                return core_1.jsx(CardAction, null, action);
            })))));
};
var Card = emotion_theming_1.withTheme(CardBase);
exports["default"] = Card;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
