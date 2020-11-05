import * as React from 'react';

interface Context {
  disabled?: boolean;
  enableFloating: boolean;
  hasError?: boolean;
  hasFocus?: boolean;
  isFloating: boolean;
  setIsFloating(value: boolean): void;
  setHasError(value: boolean): void;
  setHasFocus(value: boolean): void;
}

const defaultContext: Context = {
  disabled: false,
  enableFloating: false,
  hasError: false,
  hasFocus: false,
  isFloating: false,
  setIsFloating: () => {
    throw new Error('setIsFloating() not implemented');
  },
  setHasError: () => {
    throw new Error('setHasError() not implemented');
  },
  setHasFocus: () => {
    throw new Error('setHasFocus() not implemented');
  }
};

const FieldContext = React.createContext(defaultContext);

export default FieldContext;
