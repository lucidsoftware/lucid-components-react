import * as React from 'react';

const defaultContext = {
  enableFloating: true,
  isFloating: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsFloating: (isFloating: boolean) => isFloating
};

const FieldContext = React.createContext(defaultContext);

export default FieldContext;
