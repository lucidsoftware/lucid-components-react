/** @jsx jsx */
import {
  forwardRef,
  HTMLProps,
  ReactNode,
  SyntheticEvent,
  useContext,
  useState,
  createContext
} from 'react';
import { jsx } from '@emotion/core';

import styled from '../../../theme/styled';
import { NavbarContext } from './navbar';
import { withTheme } from 'emotion-theming';
import { ThemeProps } from '../../../theme/theme';
import { windowIsAboveWidth } from '../../../utils/utils';

export interface NavbarDropdownProps extends HTMLProps<HTMLDivElement> {
  toggle: (
    toggleHandler: (evt: SyntheticEvent<Element, Event>) => void
  ) => ReactNode;
}

const DropdownWrapper = styled.div(() => ({
  position: 'relative'
}));

const DROPDOWN_SAFETY_TIMER = 225;

export const NavbarDropdownContext = createContext({
  isOpen: false,
  displayLeft: false
});

const NavbarDropdown = forwardRef<
  HTMLDivElement,
  NavbarDropdownProps & ThemeProps
>(({ theme, toggle, children, ...rest }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayLeft, setDisplayLeft] = useState(true);
  const { setActiveDropdownSetIsOpen } = useContext(NavbarContext);
  let timer: NodeJS.Timeout;

  const openDropdown = (evt: SyntheticEvent) => {
    setIsOpen(true);
    setActiveDropdownSetIsOpen([setIsOpen]);

    const threshold = 400;
    const rect = evt.currentTarget.getBoundingClientRect();
    const diff = document.body.offsetWidth - rect.left;
    if (diff < threshold && displayLeft) {
      setDisplayLeft(false);
    } else if (diff >= threshold && !displayLeft) {
      setDisplayLeft(true);
    }

    clearTimeout(timer);
  };

  const closeDropdown = () => {
    timer = setTimeout(() => setIsOpen(false), DROPDOWN_SAFETY_TIMER);
  };

  const handleMouseOver = (evt: SyntheticEvent) => {
    if (windowIsAboveWidth(theme.navbar.collapseAt)) {
      openDropdown(evt);
    }
  };

  const handleMouseLeave = () => {
    if (windowIsAboveWidth(theme.navbar.collapseAt)) {
      closeDropdown();
    }
  };

  const handleClickToggle = (evt: SyntheticEvent) => {
    if (!windowIsAboveWidth(theme.navbar.collapseAt)) {
      if (!isOpen) {
        openDropdown(evt);
      } else {
        closeDropdown();
      }
    }
  };

  const context = {
    isOpen,
    displayLeft
  };

  return (
    <DropdownWrapper
      {...rest}
      role="navigation"
      onMouseOver={handleMouseOver}
      onClick={handleClickToggle}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseOver}
      onBlur={handleMouseLeave}
      ref={ref}
      css={{ label: 'navbarDropdown' }}
    >
      <NavbarDropdownContext.Provider value={context}>
        {toggle(handleMouseOver)}
        {children}
      </NavbarDropdownContext.Provider>
    </DropdownWrapper>
  );
});

NavbarDropdown.displayName = 'NavbarDropdown';

export default withTheme(NavbarDropdown);
