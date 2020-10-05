"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("../../../theme/styled"));
const emotion_theming_1 = require("emotion-theming");
const NavbarItem = styled_1.default.li(({ theme }) => ({
    label: 'navbarItem',
    flex: '0 1 auto',
    alignSelf: 'flex-start',
    listStyle: 'none',
    margin: `auto ${theme.navbar.itemSpacing}`,
    [`@media (max-width: ${theme.navbar.collapseAt})`]: {
        margin: 0,
        borderTop: `1px solid ${theme.navbar.borderColor}`,
        padding: '1rem 2rem',
        width: '100%',
        'button, a': {
            padding: theme.navbar.dropdown.mobilePadding
        },
        a: {
            paddingLeft: 0,
            paddingRight: 0
        },
        'a.is-button': {
            padding: theme.navbar.dropdown.mobilePadding
        },
        'button.is-link': {
            paddingLeft: 0,
            paddingRight: 0
        }
    }
}));
exports.default = emotion_theming_1.withTheme(NavbarItem);
