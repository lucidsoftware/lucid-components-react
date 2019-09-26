"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = require("../../../theme/styled");
const CardActions = styled_1.default('div') `
  display: flex;
  margin-top: ${props => props.theme.space[3]}px;
`;
exports.default = CardActions;
