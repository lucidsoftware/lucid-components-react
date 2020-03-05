"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("../../../theme/styled"));
const CardContent = styled_1.default('div')({}, props => ({
    color: props.theme.colors.text,
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: `${props.noPadding ? 0 : props.theme.card.padding}`
}));
exports.default = CardContent;
