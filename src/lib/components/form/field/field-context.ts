import * as React from 'react';

interface Context {
  enableFloating: boolean;
  isFloating: boolean;
  setIsFloating(value: boolean): void;
}

const defaultContext: Context = {
  enableFloating: true,
  isFloating: false,
  setIsFloating: () => {
    throw new Error('setIsFloating() not implemented');
  }
};

const FieldContext = React.createContext(defaultContext);

export default FieldContext;
