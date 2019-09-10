/** @jsx jsx */
import {
  forwardRef,
  FC,
  HTMLProps,
  useState,
  useContext,
  SyntheticEvent
} from 'react';
import { css, jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import styled from '@emotion/styled';

import { navbarItemStyles, NavbarContext } from './navbar';
import { ThemeProps } from '../../../theme/theme';

export interface NavbarDropdownProps {
  title: string;
}

const NavbarDropdown: FC<
  NavbarDropdownProps & ThemeProps & HTMLProps<HTMLDivElement>
> = forwardRef(({ theme, title, children, ...rest }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayLeft, setDisplayLeft] = useState(true);
  const { collapseAt } = useContext(NavbarContext);
  let timer: NodeJS.Timeout;

  const handleMouseOver = (evt: SyntheticEvent) => {
    const threshold = 200;
    setIsOpen(true);
    const rect = evt.currentTarget.getBoundingClientRect() as DOMRect;
    const diff = document.body.offsetWidth - rect.x;

    if (diff < threshold && displayLeft !== false) {
      setDisplayLeft(false);
    } else if (diff >= threshold && displayLeft !== true) {
      setDisplayLeft(true);
    }

    clearTimeout(timer);
  };

  const handleMouseLeave = () => {
    timer = setTimeout(() => setIsOpen(false), 1000);
  };

  const visible = css({
    visibility: 'visible'
  });

  const StyledDropdown = styled.div(navbarItemStyles, {
    position: 'relative',
    '&:hover': {
      cursor: 'pointer'
    },
    [`@media (max-width: ${collapseAt})`]: {
      marginLeft: 0,
      marginRight: 0,
      width: '100%',
      padding: '1rem'
    }
  });

  const dropdownTheme = theme.navbar.dropdown;

  const StyledDropdownContainer = styled.div({
    display: 'flex',
    visibility: 'hidden',
    position: 'absolute',
    background: dropdownTheme.background,
    top: '150%',
    right: displayLeft ? 'unset' : '0',
    textAlign: 'left',
    whiteSpace: 'nowrap',
    flexWrap: 'wrap',
    border: dropdownTheme.border,
    borderRadius: dropdownTheme.borderRadius,
    zIndex: 2000,
    a: {
      position: 'relative',
      display: 'block',
      flex: '1 1 100%',
      margin: 0,
      padding: dropdownTheme.padding,
      '&:hover': {
        background: dropdownTheme.backgroundHover
      }
    },
    [`@media (max-width: ${collapseAt})`]: {
      top: '100%',
      a: {
        padding: dropdownTheme.mobilePadding
      }
    }
  });

  return (
    <StyledDropdown
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      ref={ref}
      {...rest}
    >
      <button onFocus={handleMouseOver}>{title}</button>
      <StyledDropdownContainer css={isOpen ? visible : []}>
        {children}
      </StyledDropdownContainer>
    </StyledDropdown>
  );
});

export default withTheme(NavbarDropdown);
