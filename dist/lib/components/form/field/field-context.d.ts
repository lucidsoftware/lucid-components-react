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
declare const FieldContext: React.Context<Context>;
export default FieldContext;
