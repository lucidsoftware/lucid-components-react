"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const emotion_theming_1 = require("emotion-theming");
const styled_1 = __importDefault(require("../../theme/styled"));
const NavbarBrand = styled_1.default.div(({ theme }) => ({
    label: 'navbarBrand',
    display: 'inline-block',
    margin: 'auto 0',
    '& > img': {
        maxHeight: theme.navbar.logoHeight,
        maxWidth: '100%'
    },
    [`@media (max-width: ${theme.navbar.collapseAt})`]: {
        padding: 0
    }
}));
exports.default = emotion_theming_1.withTheme(NavbarBrand);
