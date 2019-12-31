/** @jsx jsx */
import { ReactNode } from 'react';
import { jsx } from '@emotion/core';

import styled from '../../../theme/styled';

interface Props {
  className?: string;
  children: ReactNode;
  isRaised?: boolean;
  noPadding?: boolean;
  as?: 'div' | 'section' | 'article';
}

const PaperContainer = styled.div<Props>(({ theme, isRaised, noPadding }) => ({
  display: 'block',
  background: theme.colors.white,
  borderRadius: `${theme.borderRadius}px`,
  border: `1px solid ${theme.colors.grey}`,
  textAlign: 'left',
  boxShadow: isRaised ? '20px 20px 0 0 rgba(0,0,0,.3)' : 'none',
  ...(!noPadding && {
    padding: theme.paper.padding
  })
}));

const Paper = ({ children, ...rest }: Props) => {
  return <PaperContainer {...rest}>{children}</PaperContainer>;
};

export default Paper;
