import styled from '../../../theme/styled';
import { withTheme } from 'emotion-theming';

const NavbarDropdownGroup = styled.div(({ theme }) => ({
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
