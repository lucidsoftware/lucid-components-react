/** @jsx jsx */
import { FC } from 'react';
import { jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import { ThemeProps } from '../../theme/theme';
import { getButtonStyles } from '../button/button';

interface Props {
	disabled?: boolean,
	primary?: boolean,
	secondary?: boolean,
	inverse?: boolean,
	asButton?: boolean,
	underline?: 'none' | 'hover' | 'always'
}

export const getLinkStyles = (theme: ThemeProps["theme"], variant = '', underline = 'none') => {
	const linkColor = theme.colors.primary;
	const linkHoverColor = theme.colors.secondary;
	const linkDisabledColor = theme.colors.disabled;
	const linkUnderline = underline === 'always' ? 'underline' : 'none';
	const linkUnderlineHover = underline === 'hover' || underline === 'always' ? 'underline' : 'none';

	const css = {
		color: linkColor,
		border: 'none',
		textDecoration: linkUnderline,
		cursor: 'pointer',
		':visited': {
			color: linkColor
		},
		':hover,:focus': {
			color: linkHoverColor,
			textDecoration: linkUnderlineHover
		},
		'a&:not([href])': {
			color: linkDisabledColor,
			cursor: 'not-allowed'
		}
	}

	return css;
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
	let variant = '';
	let css = {};
	if (primary) {
		variant = 'primary';
	} else if (secondary) {
		variant = 'secondary';
	} else if (inverse) {
		variant = 'inverse';
	}

	if (asButton) {
		css = getButtonStyles(theme, variant);
	} else {
		css = getLinkStyles(theme, variant, underline);
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
