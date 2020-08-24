"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
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
        disabledBorder: colors.lightGrey,
    }, accordion: components_1.accordion,
    breadcrumb: components_1.breadcrumb,
    buttons: components_1.buttons,
    card: components_1.card,
    forms: components_1.forms,
    headings: components_1.headings,
    links: components_1.links,
    navbar: components_1.navbar,
    paper: components_1.paper });
exports.default = theme;
