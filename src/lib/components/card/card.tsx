/** @jsx jsx */
import { ReactNode, forwardRef, SyntheticEvent } from 'react';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { ThemeProps } from '../../../theme/theme';

import CardAction from './card-action';
import CardActions from './card-actions';
import CardContent from './card-content';
import CardImage from './card-image';
import CardTitle from './card-title';
import CardSubtitle from './card-subtitle';

import { withTheme } from 'emotion-theming';

interface Props {
  as?: 'div' | 'section' | 'article';
  children?: ReactNode;
  className?: string;
  horizontal?: boolean;
  isInteractive?: boolean;
  isRaised?: boolean;
  theme: any;
}

const CardBase = forwardRef<HTMLDivElement, Props & ThemeProps>(
  (
    {
      as = 'div',
      children,
      className,
      horizontal,
      theme,
      isRaised = false,
      isInteractive = false
    },
    ref
  ) => {
    let boxShadow = 'none';
    let isInteractiveProps = {};

    if (isRaised) {
      boxShadow = theme.card.raised.boxShadow;
    }

    if (isInteractive) {
      isInteractiveProps = {
        boxShadow: theme.card.interactive.boxShadow,
        transition: `box-shadow .3s ease, border-color .3s ease, transform .15s ease-out`,
        cursor: 'pointer',
        '&:hover, &:focus': {
          textDecoration: 'none',
          boxShadow: theme.card.interactive.boxShadowHover,
          borderColor: theme.colors.primary
        },
        '&:focus': {
          outline: 'none'
        },
        '&:active': {
          transform: 'scale(.97)',
          boxShadow: 'none'
        }
      };
    }

    const cardCss = css({
      boxShadow,
      ...isInteractiveProps
    });

    const cardRenderType = isInteractive ? 'a' : as;
    const CardContainer = styled(cardRenderType)`
      display: flex;
      padding: 0;
      background: ${theme.colors.white};
      flex-direction: ${horizontal ? 'row' : 'column'};
      border-radius: ${theme.borderRadius}px;
      border: 1px solid ${theme.colors.grey};
      text-align: left;
      text-decoration: none;
      overflow: hidden;
    `;

    // const CardSpacer = styled('div')`
    //   margin-top: ${theme.space[3]}px;
    // `;

    return (
      <CardContainer css={cardCss} className={className} ref={ref}>
        {children}
      </CardContainer>
    );
  }
);

const Card = Object.assign(withTheme(CardBase), {
  Action: CardAction,
  Actions: CardActions,
  Content: CardContent,
  Image: CardImage,
  Title: CardTitle,
  Subtitle: CardSubtitle
});

export default Card;
