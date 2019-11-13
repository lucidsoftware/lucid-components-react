import { css } from '@emotion/core';
import styled from '../../../theme/styled';

import { InputValidator } from './input-validators';
import { ThemeProps } from '../../../theme/theme';

export type InputType = 'email' | 'number' | 'password' | 'text';

export interface InputProps {
  className?: string;
  inverse?: boolean;
  hasError?: boolean;
}

export interface InputError extends InputProps {
  errorMessage?: string;
  hintMessage?: string;
  showHintMessage?: boolean;
  required?: boolean;
  requiredText?: string;
}

export interface InputLabelProps extends InputProps {
  value: string;
  hasFloatingLabel?: boolean;
  isFloating?: boolean;
  isFocused?: boolean;
  showValidation?: boolean;
  label?: string;
  hideLabel?: boolean;
  disabled?: boolean;
}

export interface InputFieldProps extends InputLabelProps {
  value: string;
  initialFocus?: boolean;
  validator?: InputValidator;
  onValidate?: (isValid: boolean) => any;
}

const ContainerBaseStyles = (props: ThemeProps) =>
  css({
    display: 'flex',
    flexFlow: 'column nowrap',
    width: '100%',
    fontSize: `${props.theme.fontSizes[0]}px`,
    fontWeight: props.theme.fontWeights.bolder,
    position: 'relative',
    margin: props.theme.forms.container.margin
  });

export const InputContainer = styled('div')`
  ${ContainerBaseStyles}
`;

const WrapperBaseStyles = () =>
  css({
    display: 'flex',
    position: 'relative'
  });

export const InputWrapper = styled('div')`
  ${WrapperBaseStyles}
`;

const FieldBaseStyles = (props: ThemeProps) =>
  css({
    display: 'block',
    width: '100%',
    padding: props.theme.forms.input.padding,
    border: props.theme.forms.input.default.border,
    height: props.theme.forms.input.height,
    fontSize: props.theme.forms.input.fontSize,
    outline: props.theme.forms.input.outline,
    backgroundColor: props.theme.forms.input.default.backgroundColor,
    borderRadius: props.theme.forms.input.borderRadius,
    ':hover': {
      borderColor: props.theme.forms.input.default.hover.borderColor
    },
    ':focus': {
      borderColor: props.theme.forms.input.default.focus.borderColor
    }
  });

const FieldInvertedBaseStyles = (props: ThemeProps) =>
  css({
    backgroundColor: props.theme.forms.input.inverse.backgroundColor,
    ':hover': {
      backgroundColor: props.theme.forms.input.inverse.backgroundColor
    },
    ':focus': {
      borderColor: props.theme.forms.input.inverse.focus.borderColor
    }
  });

const FieldFloatLabelStyles = (props: ThemeProps) =>
  css({
    transition: 'padding .05s ease-out',
    paddingTop: props.theme.forms.input.floatingLabel.paddingTop
  });

const FieldScreenReaderStyles = (props: ThemeProps) =>
  css({
    border: 0,
    clip: 'rect(1px, 1px, 1px, 1px)',
    clipPath: 'inset(50%)',
    height: '1px',
    margin: '-1px',
    width: '1px',
    overflow: 'hidden',
    position: 'absolute',
    wordWrap: 'normal'
  });

const FieldErrorStyles = (props: ThemeProps) =>
  css({
    borderColor: props.theme.forms.error.default.borderColor,
    fontWeight: props.theme.forms.error.fontWeight,
    ':hover': {
      borderColor: props.theme.forms.error.default.borderColor
    }
  });

const FieldInvertedErrorStyles = (props: ThemeProps) =>
  css({
    borderColor: props.theme.forms.error.inverse.borderColor,
    ':hover': {
      borderColor: props.theme.forms.error.inverse.borderColor
    }
  });

const FieldDisabledStyles = (props: ThemeProps) =>
  css({
    borderColor: props.theme.forms.disabled.default.borderColor,
    color: props.theme.forms.disabled.default.color,

    ':hover': {
      borderColor: props.theme.forms.disabled.default.borderColor
    }
  });

const FieldInvertedDisabledStyles = (props: ThemeProps) =>
  css({
    borderColor: props.theme.forms.disabled.inverse.borderColor,
    color: props.theme.forms.disabled.inverse.color,

    ':hover': {
      borderColor: props.theme.forms.disabled.inverse.borderColor
    }
  });

export const InputField = styled('input')<InputFieldProps>`
  ${FieldBaseStyles}
  ${props => (props.inverse ? FieldInvertedBaseStyles : '')}
  ${props =>
    props.isFloating && props.hasFloatingLabel ? FieldFloatLabelStyles : ''}
  ${props =>
    props.hasFloatingLabel && props.hideLabel ? FieldScreenReaderStyles : ''}
  ${props => (props.hasError && props.showValidation ? FieldErrorStyles : '')}
  ${props =>
    props.hasError && props.showValidation && props.inverse
      ? FieldInvertedErrorStyles
      : ''}
  ${props => (props.disabled ? FieldDisabledStyles : '')}
  ${props =>
    props.disabled && props.inverse ? FieldInvertedDisabledStyles : ''}
  `;

const ErrorBaseStyles = (props: ThemeProps) =>
  css({
    fontWeight: props.theme.fontWeights.body,
    textRendering: 'optimizeLegibility',
    textAlign: 'left',
    position: 'absolute',
    lineHeight: props.theme.forms.label.floating.lineHeight,
    display: 'block',
    top: props.theme.forms.label.floating.top,
    bottom: props.theme.forms.label.floating.bottom,
    left: props.theme.forms.label.floating.left,
    right: props.theme.forms.label.floating.right,
    margin: props.theme.forms.label.floating.margin,
    height: props.theme.forms.label.floating.height,
    transition: 'transform .15s ease-out',
    color: props.theme.forms.error.default.color,
    willChange: 'transform',
    userSelect: 'none',
    pointerEvents: 'none',
    transform: 'translateY(calc(-55%)) scale(.75)',
    transformOrigin: '0 0'
  });

const InvertedErrorStyles = (props: ThemeProps) =>
  css({
    color: props.theme.forms.error.inverse.color
  });

export const InputError = styled('span')<InputError>`
  ${ErrorBaseStyles}
  ${props => (props.inverse ? InvertedErrorStyles : '')}
`;

const HintBaseStyles = (props: ThemeProps) =>
  css({
    color: props.theme.forms.hint.default.color,
    fontSize: props.theme.forms.hint.fontSize,
    fontWeight: props.theme.forms.hint.fontWeight,
    position: 'absolute',
    width: '100%',
    padding: props.theme.forms.hint.padding,
    bottom: props.theme.forms.hint.bottom,
    transform: 'translateY(100%)'
  });

const InvertedHintStyles = (props: ThemeProps) =>
  css({
    color: props.theme.forms.hint.inverse.color
  });

export const InputHint = styled('div')<InputError>`
  ${HintBaseStyles}
  ${props => (props.inverse ? InvertedHintStyles : '')}
`;

const LabelBaseStyles = (props: ThemeProps) =>
  css({
    fontWeight: props.theme.fontWeights.body,
    textRendering: 'optimizeLegibility',
    textAlign: 'left'
  });

const LabelError = () =>
  css({
    display: 'none'
  });

const FloatingLabelStyles = (props: ThemeProps) =>
  css({
    position: 'absolute',
    lineHeight: props.theme.forms.label.floating.lineHeight,
    display: 'block',
    top: props.theme.forms.label.floating.top,
    bottom: props.theme.forms.label.floating.bottom,
    left: props.theme.forms.label.floating.left,
    right: props.theme.forms.label.floating.right,
    margin: props.theme.forms.label.floating.margin,
    height: props.theme.forms.label.floating.height,
    transition: 'transform .15s ease-out',
    color: props.theme.forms.label.default.color,
    willChange: 'transform',
    userSelect: 'none',
    pointerEvents: 'none',
    transformOrigin: '0 0'
  });

const InvertedFloatingLabelStyles = (props: ThemeProps) =>
  css({
    color: props.theme.forms.label.inverse.color
  });

const IsLabelFloatingStyle = (props: ThemeProps) =>
  css({
    transform: 'translateY(calc(-55%)) scale(.75)',
    transition: 'transform .15s ease-in color .15s ease-in'
  });

const IsFocusedLabelStyle = (props: ThemeProps) =>
  css({
    color: props.theme.forms.label.default.floatColor
  });

const InvertedIsFocusedLabelStyle = (props: ThemeProps) =>
  css({
    color: props.theme.forms.label.default.floatColor
  });

export const InputLabel = styled('label')<InputLabelProps>`
  ${LabelBaseStyles}
  ${props => (props.hasFloatingLabel ? FloatingLabelStyles : '')}
  ${props =>
    props.hasFloatingLabel && props.inverse ? InvertedFloatingLabelStyles : ''}
  ${props => (props.isFloating ? IsLabelFloatingStyle : '')}
  ${props => (props.isFocused ? IsFocusedLabelStyle : '')}
  ${props =>
    props.isFocused && props.inverse ? InvertedIsFocusedLabelStyle : ''}
  ${props => (props.hasError && props.showValidation ? LabelError : '')}
`;

const RequiredBaseStyles = (props: ThemeProps) =>
  css({
    color: props.theme.forms.required.default.color,
    fontSize: props.theme.forms.required.fontSize,
    fontWeight: props.theme.forms.required.fontWeight,
    marginBottom: props.theme.forms.required.marginBottom,
    visibility: 'hidden'
  });

const InvertedRequiredBaseStyles = (props: ThemeProps) =>
  css({
    color: props.theme.forms.required.default.color,
    fontSize: props.theme.forms.required.fontSize,
    fontWeight: props.theme.forms.required.fontWeight,
    marginBottom: props.theme.forms.required.marginBottom,
    visibility: 'hidden'
  });

const ShowRequiredStyles = () =>
  css({
    visibility: 'visible'
  });

export const InputRequired = styled('label')<InputProps>`
  ${RequiredBaseStyles}
  ${props => (props.inverse ? InvertedRequiredBaseStyles : '')}
  ${props => (props.hasError ? ShowRequiredStyles : '')}
`;
