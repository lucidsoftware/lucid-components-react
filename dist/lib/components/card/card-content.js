"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const emotion_theming_1 = require("emotion-theming");
const styled_system_1 = require("styled-system");
const styled_1 = __importDefault(require("../../theme/styled"));
const CardContent = styled_1.default.div(styled_system_1.variant({
    scale: 'card.content',
    variants: {
        default: {
            color: 'text',
            display: 'flex',
            flex: '1 1',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }
    }
}), styled_system_1.flex, styled_system_1.display, styled_system_1.layout, styled_system_1.space);
CardContent.defaultProps = {
    variant: 'default'
};
exports.default = emotion_theming_1.withTheme(CardContent);
