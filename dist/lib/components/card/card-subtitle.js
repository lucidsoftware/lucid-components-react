"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const emotion_theming_1 = require("emotion-theming");
const styled_1 = __importDefault(require("../../theme/styled"));
const heading_1 = __importDefault(require("../heading/heading"));
const CardSubTitle = styled_1.default(heading_1.default)();
exports.default = emotion_theming_1.withTheme(CardSubTitle);
