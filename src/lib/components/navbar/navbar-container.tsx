import styled from '../../../theme/styled';

export interface NavbarContainerProps {
  className?: string;
}

const NavbarContainer = styled.div({
  label: 'navbarContainer',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  margin: '0 auto',
  position: 'relative'
});

export default NavbarContainer;
