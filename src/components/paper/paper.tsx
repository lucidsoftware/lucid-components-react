import React, { ReactNode, FC, HTMLAttributes } from 'react';
import { space, variant, SpaceProps, LayoutProps, layout } from 'styled-system';
import styled from '@emotion/styled';

export interface PaperProps extends SpaceProps, LayoutProps {
  as?: 'div' | 'section' | 'article';
  children: ReactNode;
  variant?: string;
}

const PaperContainer = styled.div<PaperProps>(
  {
    display: 'block',
    textAlign: 'left'
  },
  variant({
    scale: 'paper'
    // variants: {
    //   default: {
    //     background: 'white',
    //     border: '1px solid grey',
    //     borderColor: 'grey',
    //     borderRadius: 'paper',
    //     padding: 5
    //   }
    // }
  }),
  space,
  layout
);

PaperContainer.defaultProps = {
  variant: 'default'
};

const Paper: FC<HTMLAttributes<HTMLDivElement> & PaperProps> = ({
  children,
  ...rest
}) => <PaperContainer {...rest}>{children}</PaperContainer>;

export default Paper;
