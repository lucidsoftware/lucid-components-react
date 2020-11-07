"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("../../../theme/styled"));
const NavbarBorder = styled_1.default.div(({ theme, isHidden }) => ({
    label: 'navbarBorder',
    flexBasis: '100%',
    order: 0,
    marginTop: theme.navbar.borderOffset,
    height: theme.navbar.borderWidth,
    width: '100%',
    boxShadow: theme.navbar.boxShadow,
    visibility: isHidden ? 'hidden' : 'visible'
}));
exports.default = NavbarBorder;
