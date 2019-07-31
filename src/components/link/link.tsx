/** @jsx jsx */
import { FC } from 'react';
import { jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';

interface Props {
	disabled?: boolean,
	primary?: boolean,
	secondary?: boolean,
	inverse?: boolean,
	asButton?: boolean,
	underline?: 'none' | 'hover' | 'always'
}

interface ThemeProps {
	theme: any
}

const LinkBase: FC<Props & ThemeProps & JSX.IntrinsicElements['a']> = ({
	href,
	disabled,
	underline = 'none',
	children,
	primary,
	secondary,
	inverse,
	asButton,
	theme,
	...rest
}) => {
	const linkColor = theme.colors.primary;
	const linkHoverColor = theme.colors.secondary;
	const linkDisabledColor = theme.colors.disabled;

	const css = {
		color: linkColor,
		textDecoration: underline === 'always' ? 'underline' : 'none',
		':visited': {
			color: linkColor
		},
		':hover,:focus': {
			color: linkHoverColor,
			textDecoration: underline === 'hover' || underline === 'always' ? 'underline' : 'none'
		},
		':not([href])': {
			color: linkDisabledColor,
			cursor: 'not-allowed'
		}
	}

	return (
		<a
			href={disabled ? undefined : href}
			css={css}
			{...rest}
		>
			{children}
		</a>
	);
};

const Link = withTheme(LinkBase);
export default Link;
