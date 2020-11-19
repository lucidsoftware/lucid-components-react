import { withTheme } from '@emotion/react';
import styled from '@emotion/styled';

const NavbarBrand = styled.div(({ theme }) => ({
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
