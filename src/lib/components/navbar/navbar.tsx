/** @jsx jsx */
import { ReactNode, forwardRef, createContext, useState } from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

import { ThemeProps } from '../../../theme/theme';
import NavbarLink from './navbar-link';
import NavbarText from './navbar-text';
import NavbarButton from './navbar-button';
import NavbarBrand from './navbar-brand';
import NavbarDropdown from './navbar-dropdown';
import NavbarContainer from './navbar-container';
import NavbarToggle from './navbar-toggle';
import { withTheme } from 'emotion-theming';

interface Props {
  as?: 'nav' | 'header' | 'div';
  collapseAt?: string;
  sticky?: boolean;
  stickyCollapsed?: boolean;
  background?: string;
  children?: ReactNode;
}

export const navbarItemStyles = (props: any) => ({
  flex: '0 1 auto',
  margin: `auto ${props.theme.navbar.itemSpacing}`,
  alignSelf: 'flex-start'
});

export const NavbarContext = createContext({
  collapseAt: '500px',
  isExpanded: false,
  toggleExpanded: () => {
    return;
  }
});

const NavbarComp = forwardRef<HTMLElement, Props & ThemeProps>(
  (
    {
      as = 'nav',
      collapseAt = '500px',
      sticky = false,
      stickyCollapsed = false,
      background = '#FFF',
      theme,
      children
    },
    ref
  ) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const NavbarWrapper = styled(as)`
      display: block;
      position: ${sticky ? 'fixed' : 'relative'};
      position: ${sticky ? 'sticky' : 'relative'};
      background: ${background};
      z-index: 1000;
      top: 0;
      left: 0;
      right: 0;
      padding: ${theme.navbar.padding} 0;
      text-align: left;

      @media (max-width: ${collapseAt}) {
        position: ${stickyCollapsed ? 'fixed' : 'relative'};
        position: ${stickyCollapsed ? 'sticky' : 'relative'};
      }
    `;

    const NavbarContents = styled.div({
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      maxWidth: theme.navbar.maxWidth,
      minHeight: theme.navbar.minHeight,
      margin: '0 auto',
      position: 'relative',
      ':after': {
        content: '""',
        position: 'absolute',
        bottom: `-${theme.navbar.padding}`,
        height: theme.navbar.borderWidth,
        width: '100%',
        backgroundColor: theme.navbar.borderColor
      }
    });

    const context = {
      collapseAt,
      isExpanded,
      toggleExpanded: () => setIsExpanded(!isExpanded)
    };

    return (
      <NavbarContext.Provider value={context}>
        <NavbarWrapper ref={ref}>
          <NavbarContents>{children}</NavbarContents>
        </NavbarWrapper>
      </NavbarContext.Provider>
    );
  }
);

const Navbar = Object.assign(withTheme(NavbarComp), {
  Brand: NavbarBrand,
  Button: NavbarButton,
  Container: NavbarContainer,
  Dropdown: NavbarDropdown,
  Link: NavbarLink,
  Text: NavbarText,
  Toggle: NavbarToggle
});

export default Navbar;
