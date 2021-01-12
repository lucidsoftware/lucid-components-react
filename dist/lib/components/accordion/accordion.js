"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_accessible_accordion_1 = require("react-accessible-accordion");
const styled_system_1 = require("styled-system");
const react_1 = require("@emotion/react");
const styled_1 = __importDefault(require("../../../theme/styled"));
const accordion_item_1 = __importDefault(require("./accordion-item"));
const accordion_heading_1 = __importDefault(require("./accordion-heading"));
const accordion_panel_1 = __importDefault(require("./accordion-panel"));
const accordion_button_1 = __importDefault(require("./accordion-button"));
const AccordionBase = styled_1.default(react_accessible_accordion_1.Accordion)(styled_system_1.border, styled_system_1.layout, styled_system_1.space);
const Accordion = Object.assign(react_1.withTheme(AccordionBase), {
    Panel: accordion_panel_1.default,
    Item: accordion_item_1.default,
    Heading: accordion_heading_1.default,
    Button: accordion_button_1.default
});
exports.default = Accordion;
