"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_accessible_accordion_1 = require("react-accessible-accordion");
const styled_system_1 = require("styled-system");
const styled_1 = __importDefault(require("../../theme/styled"));
const AccordionHeading = styled_1.default(react_accessible_accordion_1.AccordionItemHeading)({
    width: '100%'
}, styled_system_1.background, styled_system_1.border, styled_system_1.flexbox, styled_system_1.typography, styled_system_1.space);
exports.default = AccordionHeading;
