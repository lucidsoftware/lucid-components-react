import React, { ReactNode, FC, HTMLAttributes } from 'react';
import { space, variant, SpaceProps, LayoutProps, layout } from 'styled-system';

import styled from '../../../theme/styled';

interface Props extends SpaceProps, LayoutProps {
  as?: 'div' | 'section' | 'article';
  children: ReactNode;
  variant?: string;
}

const PaperContainer = styled.div<Props>(
  {
    display: 'block',
    textAlign: 'left'
  },
  variant({
    scale: 'paper',
    variants: {
      default: {
        background: 'white',
        border: '1px solid grey',
        borderColor: 'grey',
        borderRadius: 'paper',
        padding: 5
      }
    }
  }),
  space,
  layout
);

PaperContainer.defaultProps = {
  variant: 'default'
};

const Paper: FC<HTMLAttributes<HTMLDivElement> & Props> = ({
  children,
  ...rest
}) => {
  return <PaperContainer {...rest}>{children}</PaperContainer>;
};

export default Paper;
