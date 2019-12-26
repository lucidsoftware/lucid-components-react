/** @jsx jsx */
import CardAction from './card-action';
import CardActions from './card-actions';
import CardContent from './card-content';
import CardImage from './card-image';
import CardTitle from './card-title';
import CardSubtitle from './card-subtitle';
import styled from '../../../theme/styled';

interface Props {
  as?: 'div' | 'section' | 'article';
  horizontal?: boolean;
  isInteractive?: boolean;
  isRaised?: boolean;
}

const CardContainer = styled.div<Props>(
  {
    display: 'flex',
    padding: 0,
    textAlign: 'left',
    textDecoration: 'none',
    overflow: 'hidden'
  },

  ({ theme, horizontal, isRaised, isInteractive }) => ({
    background: theme.colors.white,
    flexDirection: horizontal ? 'row' : 'column',
    borderRadius: `${theme.borderRadius}px`,
    border: `1px solid ${theme.colors.grey}`,
    boxShadow: isRaised ? theme.card.raised.boxShadow : 'none',

    ...(isInteractive && {
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
    })
  })
);

const Card = Object.assign(CardContainer, {
  Action: CardAction,
  Actions: CardActions,
  Content: CardContent,
  Image: CardImage,
  Title: CardTitle,
  Subtitle: CardSubtitle
});

export default Card;
