/** @jsx jsx */
import {
  forwardRef,
  HTMLProps,
  useState,
  SyntheticEvent,
  useContext,
  ReactNode,
  useRef
} from 'react';
import { jsx } from '@emotion/core';

import styled from '../../../theme/styled';
import { NavbarContext } from './navbar';

export interface NavbarDropdownProps {
  toggle: (
    toggleHandler: (evt: SyntheticEvent<Element, Event>) => void
  ) => ReactNode;
  maxWidth?: string;
  flexWrap?: 'wrap' | 'nowrap';
}

const DropdownWrapper = styled.div(({ theme }) => ({
  position: 'relative',
  '&:hover': {
    cursor: 'pointer'
  },
  [`@media (max-width: ${theme.navbar.collapseAt})`]: {
    '> a, > button': {
      width: '100%',
      padding: theme.navbar.dropdown.mobilePadding,

      '&::after': {
        content: '":"'
      }
    },

    '> button.isLink': {
      paddingBottom: '1rem'
    }
  }
}));

const StyledDropdownContainer = styled.div<{
  displayLeft: boolean;
  flexWrap: 'wrap' | 'nowrap';
  isOpen: boolean;
  maxWidth: string;
}>(
  ({
    theme: {
      navbar: {
        collapseAt,
        dropdown: {
          background,
          border,
          borderRadius,
          padding,
          backgroundHover,
          mobilePadding
        }
      }
    },
    displayLeft,
    maxWidth,
    flexWrap,
    isOpen
  }) => ({
    display: 'flex',
    visibility: isOpen ? 'visible' : 'hidden',
    position: 'absolute',
    background,
    top: '110%',
    textAlign: 'left',
    flexWrap,
    minWidth: '225px',
    maxWidth,
    border,
    borderRadius,
    zIndex: 2000,
    'li, p': {
      position: 'relative',
      display: 'block',
      flex: '1 1 100%',
      width: 'max-content',
      margin: 0,
      padding
    },
    'a, button': {
      position: 'relative',
      display: 'block',
      flex: '1 1 100%',
      width: 'max-content',
      margin: 0,
      padding,
      '&:hover': {
        background: backgroundHover
      }
    },

    right: displayLeft ? '' : '0',
    left: displayLeft ? '0' : '',

    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      top: '-20px',
      height: '20px'
    },

    [`@media (max-width: ${collapseAt})`]: {
      top: '100%',
      visibility: 'visible',
      maxWidth: '100%',
      padding: 0,
      position: 'relative',
      border: 'none',
      flexWrap: 'wrap',
      'li, p': {
        padding: mobilePadding,
        width: 'auto'
      },
      'a, button': {
        padding: mobilePadding,
        width: 'auto',
        '&:hover': {
          background: 'transparent'
        }
      },

      '&::before': {
        display: 'none'
      }
    }
  })
);

const DROPDOWN_SAFETY_TIMER = 225;

const NavbarDropdown = forwardRef<
  HTMLDivElement,
  NavbarDropdownProps & HTMLProps<HTMLDivElement>
>(
  (
    { toggle, maxWidth = '300px', flexWrap = 'wrap', children, ...rest },
    ref
  ) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [displayLeft, setDisplayLeft] = useState(true);
    const { setActiveDropdownSetIsOpen } = useContext(NavbarContext);
    let timer: NodeJS.Timeout;

    const handleMouseOver = (evt: SyntheticEvent) => {
      setIsOpen(true);
      setActiveDropdownSetIsOpen([setIsOpen]);

      const threshold = 400;
      const rect = evt.currentTarget.getBoundingClientRect() as DOMRect;
      const dropdownRect = dropdownRef.current
        ? (dropdownRef.current.getBoundingClientRect() as DOMRect)
        : { width: 0 };
      const diff = document.body.offsetWidth - rect.left;
      if (diff < dropdownRect.width) {
        setDisplayLeft(false);
      } else if (diff < threshold && displayLeft) {
        setDisplayLeft(false);
      } else if (diff >= threshold && !displayLeft) {
        setDisplayLeft(true);
      }

      clearTimeout(timer);
    };

    const handleMouseLeave = () => {
      timer = setTimeout(() => setIsOpen(false), DROPDOWN_SAFETY_TIMER);
    };

    return (
      <DropdownWrapper
        {...rest}
        role="navigation"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        onFocus={handleMouseOver}
        onBlur={handleMouseLeave}
        ref={ref}
      >
        {toggle(handleMouseOver)}
        <StyledDropdownContainer
          ref={dropdownRef}
          displayLeft={displayLeft}
          isOpen={isOpen}
          flexWrap={flexWrap}
          maxWidth={maxWidth}
        >
          {children}
        </StyledDropdownContainer>
      </DropdownWrapper>
    );
  }
);

export default NavbarDropdown;
