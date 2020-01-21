"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = require("../../../theme/styled");
const NavbarItem = styled_1.default.li(({ theme }) => ({
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
exports.default = NavbarItem;
