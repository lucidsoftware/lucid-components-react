"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = require("../../../theme/styled");
const CardAction = styled_1.default('div') `
  margin-right: ${props => props.theme.space[2]}px;
`;
exports.default = CardAction;
