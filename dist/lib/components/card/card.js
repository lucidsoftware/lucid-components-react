"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("../../../theme/styled"));
const styled_system_1 = require("styled-system");
const card_action_1 = __importDefault(require("./card-action"));
const card_actions_1 = __importDefault(require("./card-actions"));
const card_content_1 = __importDefault(require("./card-content"));
const card_image_1 = __importDefault(require("./card-image"));
const card_title_1 = __importDefault(require("./card-title"));
const card_subtitle_1 = __importDefault(require("./card-subtitle"));
const CardContainer = styled_1.default.div({
    display: 'flex',
    padding: 0,
    textAlign: 'left',
    textDecoration: 'none',
    overflow: 'hidden'
}, styled_system_1.variant({
    scale: 'card',
    variants: {
        default: {
            background: 'white',
            flexDirection: 'row',
            borderRadius: 'card',
            border: `1px solid grey`,
            borderColor: 'grey'
        }
    }
}), styled_system_1.space, styled_system_1.display, styled_system_1.layout, styled_system_1.flex);
CardContainer.defaultProps = {
    variant: 'default'
};
const Card = Object.assign(CardContainer, {
    Action: card_action_1.default,
    Actions: card_actions_1.default,
    Content: card_content_1.default,
    Image: card_image_1.default,
    Title: card_title_1.default,
    Subtitle: card_subtitle_1.default
});
exports.default = Card;
