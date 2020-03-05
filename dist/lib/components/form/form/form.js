"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("../../../../theme/styled"));
const text_input_1 = __importDefault(require("../text-input/text-input"));
const label_1 = __importDefault(require("../label/label"));
const field_1 = __importDefault(require("../field/field"));
const styled_system_1 = require("styled-system");
const FormBase = styled_1.default.form(styled_system_1.space, styled_system_1.layout);
const Form = Object.assign(FormBase, {
    TextInput: text_input_1.default,
    Label: label_1.default,
    Field: field_1.default
});
exports.default = Form;
