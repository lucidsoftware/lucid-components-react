"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_accessible_accordion_1 = require("react-accessible-accordion");
const styled_1 = __importDefault(require("../../../theme/styled"));
const styled_system_1 = require("styled-system");
const AccordionButton = styled_1.default(react_accessible_accordion_1.AccordionItemButton)(styled_system_1.variant({
    scale: 'accordion.button',
    variants: {
        default: {
            paddingTop: 3,
            paddingBottom: 3,
            paddingLeft: 2,
            paddingRight: 2,
            borderBottomWidth: '1px',
            borderBottomColor: 'lightgrey',
            borderBottomStyle: 'solid',
            '&:hover, &:focus': {
                borderBottomColor: 'primary'
            },
            '&[aria-expanded="true"]': {
                borderBottomColor: 'lightgrey'
            }
        }
    }
}), {
    cursor: 'pointer'
}, styled_system_1.typography, styled_system_1.space);
AccordionButton.defaultProps = {
    variant: 'default'
};
exports.default = AccordionButton;
