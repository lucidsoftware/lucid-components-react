import { withTheme } from '@emotion/react';
import {
  variant,
  space,
  display,
  flex,
  layout,
  DisplayProps,
  FlexProps,
  LayoutProps,
  SpaceProps
} from 'styled-system';

import styled from '../../../theme/styled';
import { ThemeProps } from '../../../theme/theme';
import CardAction from './card-action';
import CardActions from './card-actions';
import CardContent from './card-content';
import CardImage from './card-image';
import CardTitle from './card-title';
import CardSubtitle from './card-subtitle';

interface Props
  extends ThemeProps,
    DisplayProps,
    FlexProps,
    LayoutProps,
    SpaceProps {
  as?: 'div' | 'section' | 'article';
  variant?: string;
}

const CardContainer = styled.div<Props>(
  {
    display: 'flex',
    padding: 0,
    textAlign: 'left',
    textDecoration: 'none',
    overflow: 'hidden'
  },
  variant({
    scale: 'card',
    variants: {
      default: {
        background: 'white',
        flexDirection: 'row',
        borderRadius: 'card',
        border: '1px solid grey',
        borderColor: 'grey'
      }
    }
  }),
  space,
  display,
  layout,
  flex
);

CardContainer.defaultProps = {
  variant: 'default'
};

const Card = Object.assign(withTheme(CardContainer), {
  Action: CardAction,
  Actions: CardActions,
  Content: CardContent,
  Image: CardImage,
  Title: CardTitle,
  Subtitle: CardSubtitle
});

export default Card;
