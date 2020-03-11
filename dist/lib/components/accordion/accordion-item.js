"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_accessible_accordion_1 = require("react-accessible-accordion");
const styled_1 = __importDefault(require("../../../theme/styled"));
const styled_system_1 = require("styled-system");
const AccordionItem = styled_1.default(react_accessible_accordion_1.AccordionItem)(styled_system_1.flexbox, styled_system_1.layout, {
    display: 'flex',
    flex: '0 1 100%',
    flexWrap: 'wrap'
});
exports.default = AccordionItem;
