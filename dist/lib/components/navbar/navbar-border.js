"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = require("../../../theme/styled");
const NavbarBorder = styled_1.default('div')({}, props => ({
    flexBasis: '100%',
    position: 'absolute',
    bottom: props.theme.navbar.borderOffset,
    left: 0,
    height: props.theme.navbar.borderWidth,
    width: '100%',
    backgroundColor: props.theme.navbar.borderColor,
    visibility: props.isHidden ? 'hidden' : 'visible'
}));
exports.default = NavbarBorder;
