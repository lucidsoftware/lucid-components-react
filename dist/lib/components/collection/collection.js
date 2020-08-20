"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("../../../theme/styled"));
const emotion_theming_1 = require("emotion-theming");
const react_1 = __importDefault(require("react"));
const InnerCollection = styled_1.default.div(({ justify, space }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    margin: `-${space}px 0 0 -${space}px`,
    justifyContent: `${justify === 'start' || justify === 'full'
        ? 'flex-start'
        : justify === 'center'
            ? 'center'
            : 'flex-end'}`
}));
const InnerItem = styled_1.default.div(({ space, justify }) => ({
    margin: `${space}px 0 0 ${space}px`,
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
const Collection = ({ className, children, theme, space = 0, justify = 'start', verticalJustify }) => {
    const actualSpace = theme.space ? theme.space[space] : 0;
    return (react_1.default.createElement("div", { className: className },
        react_1.default.createElement(InnerCollection, { space: actualSpace, justify: justify }, react_1.default.Children.map(children, child => (react_1.default.createElement(InnerItem, { space: actualSpace, justify: justify },
            react_1.default.createElement(JustifyInnerItem, { verticalJustify: verticalJustify }, child)))))));
};
exports.default = emotion_theming_1.withTheme(Collection);
