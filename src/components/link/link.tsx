/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';

interface Props {
	primary?: boolean,
	secondary?: boolean,
	inverse?: boolean,
	asButton?: boolean,
	css?: any,
	theme: any
}

type Link = Props & React.HTMLProps<HTMLAnchorElement> & React.HTMLAttributes<HTMLAnchorElement>;

const Link = withTheme(({ children, primary, secondary, inverse, asButton, theme, ...rest }: Link) => {
	const linkColor = theme.colors.primary;
	const linkHoverColor = theme.colors.secondary;

	return (
		<a
			css={{
				color: linkColor,
				':visited': {
					color: linkColor
				},
				':hover,:focus': {
					color: linkHoverColor
				}
			}}
			{...rest}
		>
			{children}
		</a>
	);
});

export default Link;
