"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("../../../theme/styled"));
const NavbarBorder = styled_1.default.div(({ theme, isHidden }) => ({
    label: 'navbarBorder',
    marginTop: theme.navbar.borderOffset,
    height: theme.navbar.borderWidth,
    width: '100%',
    boxShadow: theme.navbar.boxShadow,
    transition: 'opacity 0.2s ease-out',
    opacity: isHidden ? '0' : '1'
}));
exports.default = NavbarBorder;
