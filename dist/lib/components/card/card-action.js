"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const emotion_theming_1 = require("emotion-theming");
const styled_system_1 = require("styled-system");
const styled_1 = __importDefault(require("../../theme/styled"));
const CardAction = styled_1.default.div(({ theme }) => ({
    marginRight: `${theme.space ? theme.space[2] : 0}px`
}), styled_system_1.space);
exports.default = emotion_theming_1.withTheme(CardAction);
