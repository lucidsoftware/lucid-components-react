"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("../../../theme/styled"));
const NavbarContainer = styled_1.default.div({
    label: 'navbarContainer',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '0 auto',
    position: 'relative'
});
exports.default = NavbarContainer;
