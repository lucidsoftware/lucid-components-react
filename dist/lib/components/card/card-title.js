"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = require("../../../theme/styled");
const CardTitle = styled_1.default('h2') `
  margin: 0;
  color: ${props => props.theme.colors.heading};
  font-size: ${props => props.theme.fontSizes[0]}px;
  line-height: ${props => props.theme.lineHeights.body};
  font-weight: ${props => props.theme.fontWeights.bolder};
`;
exports.default = CardTitle;
