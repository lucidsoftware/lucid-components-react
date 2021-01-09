import { withTheme } from '@emotion/react';

import { ThemeProps } from '../../../theme/theme';
import styled from '../../../theme/styled';

const NavbarItem = styled.li(({ theme }: ThemeProps) => ({
  label: 'navbarItem',
  flex: '0 1 auto',
  alignSelf: 'flex-start',
  listStyle: 'none',
  margin: `auto ${theme.navbar.itemSpacing}`,
  [`@media (max-width: ${theme.navbar.collapseAt})`]: {
    margin: 0,
    borderTop: `1px solid ${theme.navbar.borderColor}`,
    padding: '1rem 2rem',
    width: '100%',
    'button, a': {
      padding: theme.navbar.dropdown.mobilePadding
    },
    a: {
      paddingLeft: 0,
      paddingRight: 0
    },
    'a.is-button': {
      padding: theme.navbar.dropdown.mobilePadding
    },
    'button.is-link': {
      paddingLeft: 0,
      paddingRight: 0
    }
  }
}));

export default withTheme(NavbarItem);
