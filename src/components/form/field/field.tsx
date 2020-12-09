import React, { ReactNode, useState } from 'react';
import { SpaceProps, space } from 'styled-system';
import styled from '@emotion/styled';

import FieldContext from './field-context';

export enum FloatingStatus {
  Default = 'default',
  Floating = 'floating'
}

export interface FormFieldProps {
  children: ReactNode;
  floating?: boolean;
  disabled?: boolean;
}

interface WrapperProps {
  enableFloating?: boolean;
  disabled?: boolean;
}

const Wrapper = styled.div<WrapperProps>({
  position: 'relative'
});

const FieldBase = ({
  children,
  disabled,
  floating: enableFloating = false,
  ...rest
}: FormFieldProps) => {
  const [isFloating, setIsFloating] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const context = {
    disabled,
    enableFloating,
    hasError,
    hasFocus,
    isFloating,
    setIsFloating: (value: boolean) => setIsFloating(value),
    setHasError: (value: boolean) => setHasError(value),
    setHasFocus: (value: boolean) => setHasFocus(value)
  };

  return (
    <FieldContext.Provider value={context}>
      <Wrapper {...rest} enableFloating={enableFloating}>
        {children}
      </Wrapper>
    </FieldContext.Provider>
  );
};

const Field = styled(FieldBase)<FormFieldProps & SpaceProps>(space);

export default Field;
