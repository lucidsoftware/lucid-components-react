"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_accessible_accordion_1 = require("react-accessible-accordion");
const styled_1 = __importDefault(require("../../../theme/styled"));
const styled_system_1 = require("styled-system");
const AccordionPanel = styled_1.default(react_accessible_accordion_1.AccordionItemPanel)(styled_system_1.variant({
    scale: 'accordion.panel',
    variants: {
        default: {
            backgroundColor: 'hsl(0, 0%, 96%)',
            paddingTop: 2,
            paddingRight: 4,
            paddingBottom: 2,
            paddingLeft: 4,
            borderBottomWidth: '1px',
            borderBottomColor: 'primary',
            borderBottomStyle: 'solid',
            color: 'black'
        }
    }
}), styled_system_1.background, styled_system_1.typography, styled_system_1.space, styled_system_1.border);
AccordionPanel.defaultProps = {
    variant: 'default'
};
exports.default = AccordionPanel;
