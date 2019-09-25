"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const styled_1 = require("@emotion/styled");
const emotion_theming_1 = require("emotion-theming");
const BreadcrumbBase = ({ className, inverse, items, seperator, theme }) => {
    const BreadcrumbSeperator = styled_1.default('span') `
    font-size: 1em;
    margin: ${theme.breadcrumb.margin};
  `;
    const BreadcrumbWrapper = styled_1.default('li') `
    padding: 0;
    margin: 0;
    list-style-type: none;
    opacity: ${theme.breadcrumb.crumbOpacity};
    display: inline-block;
    &:hover {
      opacity: 1;
    }
  `;
    const BreadcrumbContent = styled_1.default('ul') `
    color: ${inverse ? theme.breadcrumb.inverseColor : theme.breadcrumb.color};
    margin: 0;
    padding: 0;
  `;
    if (!seperator) {
        seperator = core_1.jsx(BreadcrumbSeperator, null, "/");
    }
    const getCrumbs = () => {
        const crumbs = [];
        for (let index = 0; index < items.length; index++) {
            const element = items[index];
            if (index !== items.length - 1) {
                crumbs.push(core_1.jsx(BreadcrumbWrapper, null, element));
                crumbs.push(seperator);
            }
            else {
                crumbs.push(element);
            }
        }
        return crumbs;
    };
    return (core_1.jsx("nav", { className: className, "aria-label": "breadcrumbs" },
        core_1.jsx(BreadcrumbContent, null, getCrumbs())));
};
const Breadcrumb = emotion_theming_1.withTheme(BreadcrumbBase);
exports.default = Breadcrumb;
