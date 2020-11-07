import styled from '../../../theme/styled';

export interface NavbarBorderProps {
  isHidden?: boolean;
}

const NavbarBorder = styled.div<NavbarBorderProps>(({ theme, isHidden }) => ({
  label: 'navbarBorder',
  flexBasis: '100%',
  order: 0,
  marginTop: theme.navbar.borderOffset,
  height: theme.navbar.borderWidth,
  width: '100%',
  boxShadow: theme.navbar.boxShadow,
  visibility: isHidden ? 'hidden' : 'visible'
}));

export default NavbarBorder;
