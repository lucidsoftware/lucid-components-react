/** @jsx jsx */
import { forwardRef } from 'react';
import { css, jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';

import { ThemeProps } from '../../../theme/theme';

export interface NavbarContainerProps {
  className?: string;
}

const NavbarContainer = forwardRef<
  HTMLDivElement,
  NavbarContainerProps & ThemeProps
>(({ className, children, theme, ...rest }, ref) => {
  const styles = css({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '0 auto',
    position: 'relative'
  });

  return (
    <div {...rest} className={className} css={styles} ref={ref}>
      {children}
    </div>
  );
});

export default withTheme(NavbarContainer);
