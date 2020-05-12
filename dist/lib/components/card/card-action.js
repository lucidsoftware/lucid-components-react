"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("../../../theme/styled"));
const styled_system_1 = require("styled-system");
const CardAction = styled_1.default.div(({ theme }) => ({
    marginRight: `${theme.space ? theme.space[2] : 0}px`
}), styled_system_1.space);
exports.default = CardAction;
