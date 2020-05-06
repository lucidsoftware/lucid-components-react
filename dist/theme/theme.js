"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const colors = __importStar(require("./colors"));
const base_1 = require("./base");
const components_1 = require("./components");
const theme = Object.assign(Object.assign({}, base_1.base), { colors: {
        text: colors.blueSteel,
        background: colors.white,
        heading: colors.blueSteel,
        primary: colors.primary,
        secondary: colors.blueSteel,
        accent: colors.accent,
        muted: colors.muted,
        grey: colors.grey,
        white: colors.white,
        black: colors.black,
        disabled: colors.grey,
        disabledBorder: colors.lightGrey
    }, navbar: components_1.navbar,
    accordion: components_1.accordion,
    forms: components_1.forms,
    breadcrumb: components_1.breadcrumb,
    buttons: components_1.buttons,
    card: components_1.card,
    links: components_1.links,
    paper: components_1.paper,
    headings: components_1.headings });
exports.default = theme;
