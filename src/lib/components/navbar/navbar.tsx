/** @jsx jsx */
import {
  ReactNode,
  forwardRef,
  createContext,
  useState,
  Dispatch,
  SetStateAction
} from 'react';
import { jsx } from '@emotion/core';

import styled from '../../../theme/styled';
import Button from '../button/button';
import NavbarItem from './navbar-item';
import NavbarBrand from './navbar-brand';
import NavbarBorder from './navbar-border';
import NavbarDropdown, { NavbarDropdownContext } from './navbar-dropdown';
import NavbarDropdownContainer from './navbar-dropdown-container';
import NavbarContainer from './navbar-container';
import NavbarInnerContainer from './navbar-inner-container';
import NavbarToggle from './navbar-toggle';
import NavbarDropdownGroup from './navbar-dropdown-group';

interface Props {
  skipText?: string;
  children?: ReactNode;
}

export const NavbarContext = createContext({
  expanded: false,
  toggleExpanded: () => {
    return;
  },
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  setActiveDropdownSetIsOpen: (activeDropdown: any): void => undefined
});

const NavbarContents = styled.div({
  label: 'navbarContents',
  display: 'flex',
  margin: '0 auto',
  position: 'relative'
});

const NavbarChildren = styled.div(({ theme }) => ({
  label: 'navbarChildren',
  display: 'flex',
  position: 'relative',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  width: '100%',
  padding: `${theme.navbar.padding} 0`,
  minHeight: theme.navbar.minHeight,
  textAlign: 'left'
}));

const NavbarSkip = styled(Button)({
  position: 'absolute',
  top: 0,
  left: '-9999px',
  zIndex: 9000,
  ':active, :focus': {
    left: 0
  }
});

const NavbarComp = forwardRef<HTMLDivElement, Props>(
  ({ skipText = 'Skip to Content', children }, forwardedRef) => {
    const [[activeDropdownSetIsOpen], setActiveDropdownSetIsOpen] = useState<
      Dispatch<SetStateAction<boolean>>[]
    >([]);
    const [expanded, setExpanded] = useState(false);

    const skipHandler = () => {
      const firstHeader = document.querySelectorAll(
        'h1, h2, h3, h4, h5, h6'
      )[0] as HTMLHeadingElement;
      if (firstHeader) {
        firstHeader.setAttribute('tabindex', '-1');
        firstHeader.focus();
      }
    };

    const context = {
      setActiveDropdownSetIsOpen: ([dropdownSetIsOpen]: any) => {
        if (!activeDropdownSetIsOpen) {
          setActiveDropdownSetIsOpen([dropdownSetIsOpen]);
        } else if (activeDropdownSetIsOpen !== dropdownSetIsOpen) {
          activeDropdownSetIsOpen(false);
          setActiveDropdownSetIsOpen([dropdownSetIsOpen]);
        }
      },
      expanded,
      toggleExpanded: () => setExpanded(!expanded)
    };

    return (
      <NavbarContext.Provider value={context}>
        <NavbarContents>
          <NavbarSkip primary onClick={skipHandler}>
            {skipText}
          </NavbarSkip>
        </NavbarContents>
        <NavbarChildren ref={forwardedRef}>{children}</NavbarChildren>
      </NavbarContext.Provider>
    );
  }
);

NavbarComp.displayName = 'NavbarComp';

const Navbar = Object.assign(NavbarComp, {
  Brand: NavbarBrand,
  Border: NavbarBorder,
  InnerContainer: NavbarInnerContainer,
  Container: NavbarContainer,
  Dropdown: NavbarDropdown,
  DropdownContext: NavbarDropdownContext,
  DropdownContainer: NavbarDropdownContainer,
  DropdownGroup: NavbarDropdownGroup,
  Item: NavbarItem,
  Toggle: NavbarToggle
});

export default Navbar;
