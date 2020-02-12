// @ts-ignore
import React, { ReactNode, useState } from 'react';
import styled from '../../../../theme/styled';

import { SpaceProps, space } from 'styled-system';

import FieldContext from './field-context';

interface Props {
  children: ReactNode;
  floating?: boolean;
}

interface WrapperProps {
  floating?: boolean;
}

const Wrapper = styled.div<WrapperProps>(({ floating, theme }) => ({
  position: 'relative',
  ...(floating && {
    border: '1px solid lightgrey',
    padding: theme.space[2],
    borderRadius: '3px'
  })
}));

const FloatingFieldBase = ({ children, floating, ...rest }: Props) => {
  const [isFloating, setIsFloating] = useState(false);
  const context = {
    enableFloating: floating,
    isFloating,
    setIsFloating
  };

  return (
    // @ts-ignore
    <FieldContext.Provider value={context}>
      <Wrapper floating={floating} {...rest}>
        {children}
      </Wrapper>
    </FieldContext.Provider>
  );
};

const FloatingField = styled(FloatingFieldBase)<Props & SpaceProps>(space);

export default FloatingField;
