"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = require("../../../theme/styled");
const NavbarBorder = styled_1.default.div(({ theme, isHidden }) => ({
    flexBasis: '100%',
    order: 0,
    position: 'absolute',
    bottom: theme.navbar.borderOffset,
    left: 0,
    height: theme.navbar.borderWidth,
    width: '100%',
    backgroundColor: theme.navbar.borderColor,
    visibility: isHidden ? 'hidden' : 'visible'
}));
exports.default = NavbarBorder;
