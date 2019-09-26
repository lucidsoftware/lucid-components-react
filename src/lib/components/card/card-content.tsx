import styled from '../../../theme/styled';
import { withTheme } from 'emotion-theming';

export interface CardContentProps {
  noPadding?: boolean;
}

const CardContent = styled('div')<CardContentProps>({}, props => ({
  color: props.theme.colors.text,
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: `${props.noPadding ? 0 : props.theme.card.padding}`
}));

export default CardContent;
