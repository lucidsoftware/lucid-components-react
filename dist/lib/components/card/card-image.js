"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = require("../../../theme/styled");
const CardImage = styled_1.default('div') `
  flex: 1 1 auto;
  margin: 0;
  padding: 0;
  img {
    width: 100%;
    height: 100%;
  }
`;
exports.default = CardImage;
