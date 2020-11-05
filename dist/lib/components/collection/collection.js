"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const emotion_theming_1 = require("emotion-theming");
const react_1 = __importDefault(require("react"));
const styled_1 = __importDefault(require("../../theme/styled"));
const InnerCollection = styled_1.default.div(({ justify, hSpace, vSpace }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    margin: `-${vSpace}px 0 0 -${hSpace}px`,
    justifyContent: `${justify === 'start' || justify === 'full'
        ? 'flex-start'
        : justify === 'center'
            ? 'center'
            : 'flex-end'}`
}));
const InnerItem = styled_1.default.div(({ justify, hSpace, vSpace }) => ({
    margin: `${vSpace}px 0 0 ${hSpace}px`,
    flex: justify === 'full' ? 'auto' : 'initial',
    display: 'flex'
}));
const JustifyInnerItem = styled_1.default.div(({ verticalJustify = 'start' }) => ({
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    marginTop: verticalJustify === 'end' || verticalJustify === 'center' ? 'auto' : 0,
    marginBottom: verticalJustify === 'start' || verticalJustify === 'center' ? 'auto' : 0
}));
const Collection = ({ className, children, theme, hSpace = 0, vSpace = 0, justify = 'start', verticalJustify }) => {
    const actualHSpace = theme.space ? theme.space[hSpace] : 0;
    const actualVSpace = theme.space ? theme.space[vSpace] : 0;
    return (react_1.default.createElement("div", { className: className },
        react_1.default.createElement(InnerCollection, { hSpace: actualHSpace, justify: justify, vSpace: actualVSpace }, react_1.default.Children.map(children, child => (react_1.default.createElement(InnerItem, { hSpace: actualHSpace, justify: justify, vSpace: actualVSpace },
            react_1.default.createElement(JustifyInnerItem, { verticalJustify: verticalJustify }, child)))))));
};
exports.default = emotion_theming_1.withTheme(Collection);
