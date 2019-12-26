"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = require("../../../theme/styled");
const NavbarItem = styled_1.default.li(({ theme }) => ({
    flex: '0 1 auto',
    alignSelf: 'flex-start',
    listStyle: 'none',
    margin: `auto ${theme.navbar.itemSpacing}`,
    [`@media (max-width: ${theme.navbar.collapseAt})`]: {
        margin: `.75rem 0`,
        width: '100%',
        '> a, > button': {
            width: '100%'
        }
    }
}));
exports.default = NavbarItem;
