"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = require("../../../theme/styled");
const NavbarDropdownGroup = styled_1.default.div(({ theme, children }) => ({
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
exports.default = NavbarDropdownGroup;
