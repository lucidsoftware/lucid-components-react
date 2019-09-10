/** @jsx jsx */
import { forwardRef, FC, HTMLProps, useContext } from 'react';
import { jsx } from '@emotion/core'
import { withTheme } from 'emotion-theming';
import styled from '@emotion/styled';

import { ThemeProps } from '../../../theme/theme';
import { navbarItemStyles, NavbarContext } from './navbar';

const NavbarText: FC<ThemeProps & HTMLProps<HTMLSpanElement>> = forwardRef(({ theme, children, ...rest }, ref) => {
	const { collapseAt } = useContext(NavbarContext);
	const StyledText = styled.span(navbarItemStyles, {
		[`@media (max-width: ${collapseAt})`]: {
			marginLeft: 0,
			marginRight: 0,
			padding: '1rem'
		}
	});

	return (
		<StyledText ref={ref} {...rest}>{children}</StyledText>
	);
});

export default withTheme(NavbarText);
