"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@emotion/react");
const styled_1 = __importDefault(require("../../../theme/styled"));
const CardImage = styled_1.default.div({
    flex: '1 1',
    margin: 0,
    padding: 0
});
exports.default = react_1.withTheme(CardImage);
