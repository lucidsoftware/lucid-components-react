/** @jsx jsx */
import { jsx } from '@emotion/core';

import { InputDefaultValidator } from './input-validators';

import {
  InputProps,
  InputFieldProps,
  InputLabelProps,
  InputContainer,
  InputLabel,
  InputField,
  InputError,
  InputHint,
  InputType,
  InputRequired,
  InputWrapper
} from './input.styles';

import { withTheme } from 'emotion-theming';
import { ThemeProps } from '../../../theme/theme';
import { FC, createRef, useEffect, useState } from 'react';

export type InputType = 'email' | 'number' | 'password' | 'text';

const InputBase: FC<
  ThemeProps &
    JSX.IntrinsicElements['input'] &
    InputProps &
    InputFieldProps &
    InputLabelProps &
    InputError
> = ({
  className,
  theme,
  inverse,
  hasFloatingLabel,
  initialFocus,
  errorMessage: customErrorMessage,
  hintMessage,
  showHintMessage,
  name,
  placeholder = '',
  showValidation,
  type = 'text',
  validator: validate = InputDefaultValidator,
  value,
  hideLabel,
  label,
  disabled,
  required,
  requiredText,
  onChange = () => {
    return;
  },
  onValidate = () => {
    return;
  },
  // onClick = () => {
  //   return;
  // },
  ...rest
}) => {
  const placeholderText = hasFloatingLabel ? '' : placeholder;
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isFloating, setIsFloating] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const ref = createRef<HTMLInputElement>();

  useEffect(() => {
    if (initialFocus && ref.current) {
      ref.current.focus();
    }
  }, []);

  const runValidator = (newValue: string) => {
    if (validate) {
      const { passed, message } = validate(customErrorMessage)(newValue);
      setHasError(!passed);
      setErrorMessage(message);
      if (onValidate) {
        onValidate(passed);
      }
    }
  };

  const updateValue = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const inputElement = evt.nativeEvent.srcElement as HTMLInputElement;
    const newValue = inputElement.value;
    if (newValue.length) {
      setIsFloating(true);
    } else {
      setIsFloating(false);
    }

    if (showValidation) {
      runValidator(newValue);
    }

    if (onChange) {
      onChange(evt);
    }
  };

  const focusInput = () => {
    setIsFocused(!isFocused);
  };

  return (
    // The accessibility on these -- they don't have an outline. Do we want this?
    <InputContainer theme={theme}>
      {required && showValidation && (
        <InputRequired hasError={hasError} inverse={inverse}>
          {requiredText || 'Required'}
        </InputRequired>
      )}
      <InputWrapper>
        {label && !hideLabel && (
          <InputLabel
            htmlFor={name}
            value={value}
            hasFloatingLabel={hasFloatingLabel}
            hideLabel={hideLabel}
            label={label}
            isFloating={isFloating}
            isFocused={isFocused}
            showValidation={showValidation}
            hasError={hasError}
            disabled={disabled}
            inverse={inverse}
          >
            {label || placeholder}
          </InputLabel>
        )}
        {hasError && showValidation && (
          <InputError inverse={inverse}>{errorMessage}</InputError>
        )}
        <InputField
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholderText}
          ref={ref}
          disabled={disabled}
          inverse={inverse}
          showValidation={showValidation}
          hasError={hasError}
          isFloating={isFloating}
          hasFloatingLabel={hasFloatingLabel}
          onChange={updateValue}
          onBlur={focusInput}
          onFocus={focusInput}
        />
      </InputWrapper>
      {showHintMessage && hintMessage && (
        <InputHint inverse={inverse}>{hintMessage}</InputHint>
      )}
    </InputContainer>
  );
};

const Input = withTheme(InputBase);
export default Input;
