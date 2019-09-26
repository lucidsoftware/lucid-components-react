"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = require("../../../theme/styled");
const CardContent = styled_1.default('div')({}, props => ({
    color: props.theme.colors.text,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: `${props.noPadding ? 0 : props.theme.card.padding}`
}));
exports.default = CardContent;
