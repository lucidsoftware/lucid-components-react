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
  enableFloating?: boolean;
}

const Wrapper = styled.div<WrapperProps>(({ enableFloating, theme }) => ({
  position: 'relative',
  ...(enableFloating && {
    border: '1px solid lightgrey',
    padding: theme.space[2],
    borderRadius: '3px'
  })
}));

const FieldBase = ({ children, floating: enableFloating, ...rest }: Props) => {
  const [isFloating, setIsFloating] = useState(false);
  const context = {
    enableFloating,
    isFloating,
    setIsFloating
  };

  return (
    // @ts-ignore
    <FieldContext.Provider value={context}>
      <Wrapper enableFloating={enableFloating} {...rest}>
        {children}
      </Wrapper>
    </FieldContext.Provider>
  );
};

const Field = styled(FieldBase)<Props & SpaceProps>(space);

export default Field;
