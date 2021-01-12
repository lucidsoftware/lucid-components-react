import { withTheme } from '@emotion/react';

import { ThemeProps } from '../../../theme/theme';
import styled from '../../../theme/styled';

const NavbarDropdownGroup = styled.div(({ theme }: ThemeProps) => ({
  label: 'navbarDropdownGroup',
  flex: 1,
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  width: '100%',
  [`@media (max-width: ${theme.navbar.collapseAt})`]: {
    flex: '0 1 100%'
  }
}));

export default withTheme(NavbarDropdownGroup);
