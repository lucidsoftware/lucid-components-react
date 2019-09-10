/** @jsx jsx */
import { forwardRef, FC, HTMLProps, useContext } from 'react';
import { jsx, css } from '@emotion/core'
import { withTheme } from 'emotion-theming';
import styled from '@emotion/styled';
import { ThemeProps } from '../../../theme/theme';
import { NavbarContext } from './navbar';

interface NavbarContainerProps {
	background?: string;
}

const NavbarLink: FC<NavbarContainerProps & ThemeProps & HTMLProps<HTMLDivElement>> = forwardRef(({ theme, children, ...rest }, ref) => {
	const { collapseAt, isExpanded } = useContext(NavbarContext);
	const StyledContainer = styled.div({
		display: 'flex',
		'& > *': {
			'&:first-child': {
				marginLeft: 0
			},
			'&:last-child': {
				marginRight: 0
			}
		},
		[`@media (max-width: ${collapseAt})`]: {
			display: 'none',
			flex: '0 1 100%'
		}
	});

	const expanded = css({
		[`@media (max-width: ${collapseAt})`]: {
			display: 'flex',
			flexDirection: 'column'
		}
	});

	return (
		<StyledContainer css={isExpanded ? expanded : ''} ref={ref} {...rest}>{children}</StyledContainer>
	);
});

export default withTheme(NavbarLink);
