import { withTheme } from '@emotion/react';
import {
  compose,
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
import styled from '@emotion/styled';

import { ThemeProps } from '../../theme/theme';

export interface CardContentProps
  extends ThemeProps,
    DisplayProps,
    FlexProps,
    LayoutProps,
    SpaceProps {
  variant?: string;
}

const contentStyleProps = compose(flex, display, layout, space);

const CardContent = styled.div<CardContentProps>(
  {
    label: 'content'
  },
  variant({
    scale: 'card.content'
  }),
  contentStyleProps
);

CardContent.defaultProps = {
  variant: 'default'
};

export default withTheme(CardContent);
