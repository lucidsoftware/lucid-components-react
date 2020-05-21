"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("../../../theme/styled"));
const emotion_theming_1 = require("emotion-theming");
const NavbarDropdownGroup = styled_1.default.div(({ theme }) => ({
    flex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    width: '100%',
    [`@media (max-width: ${theme.navbar.collapseAt})`]: {
        flex: '0 1 100%'
    }
}));
exports.default = emotion_theming_1.withTheme(NavbarDropdownGroup);
