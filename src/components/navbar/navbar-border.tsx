import styled from '@emotion/styled';

export interface NavbarBorderProps {
  isHidden?: boolean;
}

const NavbarBorder = styled.div<NavbarBorderProps>(({ theme, isHidden }) => ({
  label: 'navbarBorder',
  flexBasis: '100%',
  order: 0,
  position: 'absolute',
  bottom: theme.navbar.borderOffset,
  left: 0,
  height: theme.navbar.borderWidth,
  width: '100%',
  backgroundColor: theme.navbar.borderColor,
  visibility: isHidden ? 'hidden' : 'visible'
}));

export default NavbarBorder;
