import styled from '../../../theme/styled';

const NavbarItem = styled.li(({ theme }) => ({
  flex: '0 1 auto',
  alignSelf: 'flex-start',
  listStyle: 'none',
  margin: `auto ${theme.navbar.itemSpacing}`,

  [`@media (max-width: ${theme.navbar.collapseAt})`]: {
    margin: `.75rem 0`,
    width: '100%',
    '> a, > button': {
      width: '100%'
    }
  }
}));

export default NavbarItem;
