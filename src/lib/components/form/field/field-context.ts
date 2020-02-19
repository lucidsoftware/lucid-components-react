import * as React from 'react';

interface Context {
  enableFloating: boolean;
  hasFocus?: boolean;
  isFloating: boolean;
  setIsFloating(value: boolean): void;
  setHasFocus(value: boolean): void;
}

const defaultContext: Context = {
  enableFloating: true,
  hasFocus: false,
  isFloating: false,
  setIsFloating: () => {
    throw new Error('setIsFloating() not implemented');
  },
  setHasFocus: () => {
    throw new Error('setHasFocus() not implemented');
  }
};

const FieldContext = React.createContext(defaultContext);

export default FieldContext;
