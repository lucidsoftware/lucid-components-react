"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = require("../../../theme/styled");
const CardSubTitle = styled_1.default('h3') `
  display: block;
  margin: 0 0 ${props => props.theme.space[2]}px;
  font-size: ${props => props.theme.fontSizes[0]}px;
  line-height: ${props => props.theme.lineHeights.body};
  font-weight: ${props => props.theme.fontWeights.body};
  color: #939ea9;
`;
exports.default = CardSubTitle;
