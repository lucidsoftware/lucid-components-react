"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@emotion/core");
const styled_1 = require("@emotion/styled");
const emotion_theming_1 = require("emotion-theming");
const PaperBase = ({ as = 'div', className, children, noPadding, theme, isRaised = false }) => {
    let boxShadow = 'box-shadow: none';
    if (isRaised) {
        boxShadow = `box-shadow: 20px 20px 0 0 rgba(0,0,0,.3)`;
    }
    const PaperContainer = styled_1.default(as) `
        display: 'flex';
        padding: ${noPadding ? 0 : '2.5em'};
        background: ${theme.colors.white};
        flex-direction: 'column';
        border-radius: ${theme.borderRadius}px;
        border: 1px solid ${theme.colors.grey};
        text-align: 'left';
        ${boxShadow}
    `;
    return (core_1.jsx(PaperContainer, { className: className }, children));
};
const Paper = emotion_theming_1.withTheme(PaperBase);
exports.default = Paper;
