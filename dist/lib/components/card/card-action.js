"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("../../../theme/styled"));
const CardAction = styled_1.default('div') `
  margin-right: ${props => props.theme.space[2]}px;
`;
exports.default = CardAction;
