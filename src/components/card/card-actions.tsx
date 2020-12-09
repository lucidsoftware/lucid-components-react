import { withTheme } from '@emotion/react';
import { space, SpaceProps, layout, LayoutProps } from 'styled-system';
import styled from '@emotion/styled';

import { ThemeProps } from '../../theme/theme';

export interface CardActionsProps extends ThemeProps, SpaceProps, LayoutProps {}

const CardActions = styled.div<CardActionsProps>(
  ({ theme }) => ({
    label: 'actions',
    display: 'flex',
    marginTop: `${theme.space ? theme.space[3] : 0}px`
  }),
  space,
  layout
);

export default withTheme(CardActions);
