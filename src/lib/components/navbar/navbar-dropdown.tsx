/** @jsx jsx */
import {
  forwardRef,
  HTMLProps,
  useState,
  SyntheticEvent,
  useContext,
  ReactNode
} from 'react';
import { jsx } from '@emotion/core';

import styled from '../../../theme/styled';
import { NavbarContext } from './navbar';
import { ThemeProps } from '../../../theme/theme';

export interface NavbarDropdownProps {
  toggle: (
    toggleHandler: (evt: SyntheticEvent<Element, Event>) => void
  ) => ReactNode;
  complexChildren?: boolean;
  maxWidth?: string;
}

const DropdownWrapper = styled.div<{
  complexChildren: boolean;
}>(({ theme, complexChildren }) => ({
  position: complexChildren ? 'static' : 'relative',
  '&:hover': {
    cursor: 'pointer'
  },
  [`@media (max-width: ${theme.navbar.collapseAt})`]: {
    '> *, > a, > button': {
      width: '100%'
    }
  }
}));

const StyledDropdownContainer = styled.div<{
  displayLeft: boolean;
  isOpen: boolean;
  complexChildren: boolean;
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
    complexChildren,
    maxWidth,
    isOpen
  }) => ({
    display: 'flex',
    visibility: isOpen ? 'visible' : 'hidden',
    position: 'absolute',
    background,
    top: '110%',
    textAlign: 'left',
    flexWrap: complexChildren ? 'nowrap' : 'wrap',
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

    [`@media (max-width: ${collapseAt})`]: {
      top: '100%',
      visibility: 'visible',
      maxWidth: '100%',
      paddingLeft: '.5rem',
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
      }
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      top: '-5px',
      height: '10px'
    }
  })
);

const DROPDOWN_SAFETY_TIMER = 225;

const NavbarDropdown = forwardRef<
  HTMLDivElement,
  NavbarDropdownProps & HTMLProps<HTMLDivElement>
>(
  (
    { toggle, complexChildren = false, maxWidth = '300px', children, ...rest },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [displayLeft, setDisplayLeft] = useState(true);
    const { setActiveDropdownSetIsOpen } = useContext(NavbarContext);
    let timer: NodeJS.Timeout;

    const handleMouseOver = (evt: SyntheticEvent) => {
      setIsOpen(true);
      setActiveDropdownSetIsOpen([setIsOpen]);

      const threshold = 400;
      const rect = evt.currentTarget.getBoundingClientRect() as DOMRect;
      const diff = document.body.offsetWidth - rect.left;
      if (complexChildren) {
        setDisplayLeft(false);
      } else {
        if (diff < threshold && displayLeft !== false) {
          setDisplayLeft(false);
        } else if (diff >= threshold && displayLeft !== true) {
          setDisplayLeft(true);
        }
      }

      clearTimeout(timer);
    };

    const handleMouseLeave = () => {
      timer = setTimeout(() => setIsOpen(false), DROPDOWN_SAFETY_TIMER);
    };

    return (
      <DropdownWrapper
        complexChildren={complexChildren}
        role="navigation"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        onFocus={handleMouseOver}
        onBlur={handleMouseLeave}
        ref={ref}
        {...rest}
      >
        {toggle(handleMouseOver)}
        <StyledDropdownContainer
          displayLeft={displayLeft}
          isOpen={isOpen}
          complexChildren={complexChildren}
          maxWidth={maxWidth}
        >
          {children}
        </StyledDropdownContainer>
      </DropdownWrapper>
    );
  }
);

export default NavbarDropdown;
