import React, { ReactNode, useState } from 'react';
import styled from '../../../../theme/styled';

import { SpaceProps, space } from 'styled-system';

import FieldContext from './field-context';

export enum FloatingStatus {
  Default = 'default',
  Floating = 'floating'
}

interface Props {
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
  floating: enableFloating = false,
  ...rest
}: Props) => {
  const [isFloating, setIsFloating] = useState(false);
  const context = {
    enableFloating,
    isFloating,
    setIsFloating: (value: boolean) => {
      setIsFloating(value);
    }
  };

  return (
    <FieldContext.Provider value={context}>
      <Wrapper {...rest} enableFloating={enableFloating}>
        {children}
      </Wrapper>
    </FieldContext.Provider>
  );
};

const Field = styled(FieldBase)<Props & SpaceProps>(space);

export default Field;
