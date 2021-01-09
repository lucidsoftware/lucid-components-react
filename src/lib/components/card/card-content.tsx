import { withTheme } from '@emotion/react';
import {
  display,
  DisplayProps,
  flex,
  FlexProps,
  layout,
  LayoutProps,
  variant,
  space,
  SpaceProps
} from 'styled-system';

import styled from '../../../theme/styled';
import { ThemeProps } from '../../../theme/theme';

export interface CardContentProps
  extends ThemeProps,
    DisplayProps,
    FlexProps,
    LayoutProps,
    SpaceProps {
  variant?: string;
}

const CardContent = styled.div<CardContentProps>(
  variant({
    scale: 'card.content',
    variants: {
      default: {
        color: 'text',
        display: 'flex',
        flex: '1 1',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }
    }
  }),
  flex,
  display,
  layout,
  space
);

CardContent.defaultProps = {
  variant: 'default'
};

export default withTheme(CardContent);
