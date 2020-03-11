"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const styled_1 = __importDefault(require("../../../theme/styled"));
const BreadcrumbWrapper = styled_1.default.li({
    padding: 0,
    margin: 0,
    listStyleType: 'none',
    display: 'inline-block',
    '&:hover': {
        opacity: 1
    }
}, ({ theme: { breadcrumb } }) => ({
    opacity: breadcrumb.crumbOpacity
}));
const BreadcrumbSeparator = styled_1.default.span(({ theme }) => ({
    fontSize: '1em',
    margin: theme.breadcrumb.margin
}));
const BreadcrumbContent = styled_1.default.ul(({ theme, inverse }) => ({
    color: inverse ? theme.breadcrumb.inverseColor : theme.breadcrumb.color,
    margin: 0,
    padding: 0
}));
const Breadcrumb = ({ className, inverse = false, items, seperator = core_1.jsx(BreadcrumbSeparator, null, "/") }) => {
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
        core_1.jsx(BreadcrumbContent, { inverse: inverse }, getCrumbs())));
};
exports.default = Breadcrumb;
