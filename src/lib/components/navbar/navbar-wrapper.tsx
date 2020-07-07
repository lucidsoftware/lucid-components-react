/** @jsx jsx */

import { ReactNode, FC } from 'react';
import { Global, jsx } from '@emotion/core';
import styled from '../../../theme/styled';

interface Props {
  as?: 'nav' | 'header' | 'div';
  skipText?: string;
  sticky?: boolean;
  stickyCollapsed?: boolean;
  background?: string;
  top?: number;
  zIndex?: number;
  children?: ReactNode;
}

const NavbarWrap = styled.nav<Props>(
  ({ theme, sticky, stickyCollapsed, background, top, zIndex }) => ({
    display: 'block',
    background: background || theme.navbar.background,
    zIndex,
    top,
    left: 0,
    right: 0,
    position: sticky ? ['fixed', 'sticky'] : 'relative',
    [`@media (max-width: ${theme.navbar.collapseAt})`]: {
      position: stickyCollapsed ? ['fixed', 'sticky'] : 'relative'
    }
  })
);

const isIE11 =
  typeof navigator !== 'undefined' &&
  navigator.userAgent &&
  navigator.userAgent.indexOf('Trident/') !== -1;

const NavbarWrapper: FC<Props> = ({
  as,
  sticky = false,
  stickyCollapsed = false,
  top = 0,
  zIndex = 1000,
  background,
  children
}) => {
  return (
    <NavbarWrap
      as={as}
      sticky={sticky}
      stickyCollapsed={stickyCollapsed}
      top={top}
      zIndex={zIndex}
      background={background}
    >
      {sticky && isIE11 && (
        <Global
          styles={{
            body: {
              marginTop: '60px'
            }
          }}
        />
      )}
      {children}
    </NavbarWrap>
  );
};

export default NavbarWrapper;
