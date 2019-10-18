import styled from '../../../theme/styled';

export interface NavbarBorderProps {
  isHidden?: boolean;
}

const NavbarBorder = styled('div')<NavbarBorderProps>({}, props => ({
  flexBasis: '100%',
  order: 0,
  position: 'absolute',
  bottom: props.theme.navbar.borderOffset,
  left: 0,
  height: props.theme.navbar.borderWidth,
  width: '100%',
  backgroundColor: props.theme.navbar.borderColor,
  visibility: props.isHidden ? 'hidden' : 'visible'
}));

export default NavbarBorder;
