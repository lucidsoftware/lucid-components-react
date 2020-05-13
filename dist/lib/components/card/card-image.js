"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("../../../theme/styled"));
const emotion_theming_1 = require("emotion-theming");
const CardImage = styled_1.default.div({
    flex: '1 1 auto',
    margin: 0,
    padding: 0
});
exports.default = emotion_theming_1.withTheme(CardImage);
