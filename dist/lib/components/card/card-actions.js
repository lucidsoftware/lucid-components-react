"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("../../../theme/styled"));
const emotion_theming_1 = require("emotion-theming");
const styled_system_1 = require("styled-system");
const CardActions = styled_1.default.div(({ theme }) => ({
    display: 'flex',
    marginTop: `${theme.space ? theme.space[3] : 0}px`
}), styled_system_1.space, styled_system_1.layout);
exports.default = emotion_theming_1.withTheme(CardActions);
