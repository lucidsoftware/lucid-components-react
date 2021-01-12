"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@emotion/react");
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
const Breadcrumb = ({ theme, className, inverse = false, items, seperator = react_1.default.createElement(BreadcrumbSeparator, { theme: theme }, "/") }) => {
    const getCrumbs = () => {
        const crumbs = items.map((item, index) => {
            if (index !== items.length - 1) {
                const crumb = (react_1.default.createElement(react_1.default.Fragment, { key: `fragment-${index}` },
                    react_1.default.createElement(BreadcrumbWrapper, { key: index, theme: theme }, item),
                    react_1.default.createElement(react_1.default.Fragment, { key: `seperator-${index}` }, seperator)));
                return crumb;
            }
            return item;
        });
        return crumbs;
    };
    return (react_1.default.createElement("nav", { "aria-label": "breadcrumbs", className: className },
        react_1.default.createElement(BreadcrumbContent, { inverse: inverse }, getCrumbs())));
};
exports.default = react_2.withTheme(Breadcrumb);
