"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = require("../../../theme/styled");
const NavbarBrand = styled_1.default.div(({ theme }) => ({
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
exports.default = NavbarBrand;
