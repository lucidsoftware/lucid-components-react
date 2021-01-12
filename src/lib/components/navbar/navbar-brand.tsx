import { withTheme } from '@emotion/react';

import { ThemeProps } from '../../../theme/theme';
import styled from '../../../theme/styled';

const NavbarBrand = styled.div(({ theme }: ThemeProps) => ({
  label: 'navbarBrand',
  display: 'inline-block',
  margin: 'auto 0',
  '& > img': {
    maxHeight: theme.navbar.logoHeight,
    maxWidth: '100%'
  },
  [`@media (max-width: ${theme.navbar.collapseAt})`]: {
    padding: 0
  }
}));

export default withTheme(NavbarBrand);
