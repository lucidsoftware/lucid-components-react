/** @jsx jsx */
import { forwardRef, HTMLProps, useState, SyntheticEvent } from 'react';
import { css, jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import styled from '@emotion/styled';

import { navbarItemStyles, navbarItemCollapsed } from './navbar';
import Button from '../button/button';
import { ThemeProps } from '../../../theme/theme';

export interface NavbarDropdownProps {
  title: string;
  asLink?: boolean;
}

const NavbarDropdown = forwardRef<
  HTMLDivElement,
  NavbarDropdownProps & ThemeProps & HTMLProps<HTMLDivElement>
>(({ theme, title, asLink, children, ...rest }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayLeft, setDisplayLeft] = useState(true);
  let timer: NodeJS.Timeout;

  const handleMouseOver = (evt: SyntheticEvent) => {
    setIsOpen(true);

    const threshold = 400;
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

  const dropdownStyles = css(navbarItemStyles({ theme }), {
    position: 'relative',
    '&:hover': {
      cursor: 'pointer'
    },
    [`@media (max-width: ${theme.navbar.collapseAt})`]: {
      ...navbarItemCollapsed({ theme })
    }
  });

  const dropdownTheme = theme.navbar.dropdown;

  const StyledDropdownContainer = styled.div({
    display: 'flex',
    visibility: 'hidden',
    position: 'absolute',
    background: dropdownTheme.background,
    top: asLink ? '150%' : '110%',
    right: displayLeft ? '' : '0',
    left: displayLeft ? '0' : '',
    textAlign: 'left',
    flexWrap: 'wrap',
    minWidth: '225px',
    maxWidth: '300px',
    border: dropdownTheme.border,
    borderRadius: dropdownTheme.borderRadius,
    zIndex: 2000,
    '> *, > a': {
      position: 'relative',
      display: 'block',
      flex: '1 1 100%',
      width: 'max-content',
      margin: 0,
      padding: dropdownTheme.padding,
      '&:hover': {
        background: dropdownTheme.backgroundHover
      }
    },
    [`@media (max-width: ${theme.navbar.collapseAt})`]: {
      top: '100%',
      '> *, > a': {
        padding: dropdownTheme.mobilePadding
      }
    }
  });

  return (
    <div
      css={dropdownStyles}
      role="navigation"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseOver}
      onBlur={handleMouseLeave}
      ref={ref}
      {...rest}
    >
      <Button primary asLink={asLink} onFocus={handleMouseOver}>
        {title}
      </Button>
      <StyledDropdownContainer css={isOpen ? visible : []}>
        {children}
      </StyledDropdownContainer>
    </div>
  );
});

export default withTheme(NavbarDropdown);
