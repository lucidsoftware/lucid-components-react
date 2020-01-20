import styled from '../../../theme/styled';

const NavbarItem = styled.li(({ theme }) => ({
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

    'button.is-link': {
      padding: 0
    }
  }
}));

export default NavbarItem;
