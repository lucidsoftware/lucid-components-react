import styled from '../../../theme/styled';
import { ThemeProps } from '../../../theme/theme';

export interface NavbarBorderProps {
  isHidden?: boolean;
}

const NavbarBorder = styled.div<NavbarBorderProps>(
  ({ theme, isHidden }: ThemeProps & { isHidden: boolean }) => ({
    label: 'navbarBorder',
    marginTop: theme.navbar.borderOffset,
    height: theme.navbar.borderWidth,
    width: '100%',
    boxShadow: theme.navbar.boxShadow,
    transition: 'opacity 0.2s ease-out',
    opacity: isHidden ? '0' : '1'
  })
);

export default NavbarBorder;
