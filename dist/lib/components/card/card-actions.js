"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("../../../theme/styled"));
const CardActions = styled_1.default('div') `
  display: flex;
  margin-top: ${props => props.theme.space[3]}px;
`;
exports.default = CardActions;
