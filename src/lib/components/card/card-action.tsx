import { withTheme } from '@emotion/react';
import { space, SpaceProps } from 'styled-system';

import styled from '../../../theme/styled';
import { ThemeProps } from '../../../theme/theme';

export interface CardActionProps extends ThemeProps, SpaceProps {}

const CardAction = styled.div<CardActionProps>(
  ({ theme }) => ({
    marginRight: `${theme.space ? theme.space[2] : 0}px`
  }),
  space
);

export default withTheme(CardAction);
