/** @jsx jsx */
import { FC } from 'react';
import { jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import { ThemeProps } from '../../../theme/theme';
import { getButtonStyles } from '../button/button';

export type UnderlineType = 'none' | 'hover' | 'always';

interface Props {
	disabled?: boolean,
	primary?: boolean,
	secondary?: boolean,
	inverse?: boolean,
	asButton?: boolean,
	underline?: UnderlineType,
	css?: any;
}

export enum LinkVariant {
	Default = 'default',
	Primary = 'primary',
	Secondary = 'secondary'
}

export const getLinkStyles = (theme: ThemeProps["theme"], variant: LinkVariant = LinkVariant.Default, underline = 'none', inverse = false) => {
	const linkUnderline = underline === 'always' ? 'underline' : 'none';
	const linkUnderlineHover = underline === 'hover' || underline === 'always' ? 'underline' : 'none';

	const linkType = inverse ? 'inverse' : 'default';
	let { color, hover, disabled } = theme.links[variant][linkType];

	const css = {
		color,
		fontSize: `${theme.buttons.fontSize}`,
		border: 'none',
		textDecoration: linkUnderline,
		cursor: 'pointer',
		':visited': {
			color: color
		},
		':hover,:focus': {
			color: hover,
			textDecoration: linkUnderlineHover
		},
		'a&:not([href])': {
			color: disabled,
			cursor: 'not-allowed'
		}
	}

	return css;
}

const LinkBase: FC<ThemeProps & JSX.IntrinsicElements['a'] & Props> = ({
	href,
	disabled,
	underline = 'none',
	children,
	primary,
	secondary,
	inverse,
	asButton,
	theme,
	css,
	...rest
}) => {
	let variant;
	let baseCss = {};
	if (primary) {
		variant = LinkVariant.Primary;
	} else if (secondary) {
		variant = LinkVariant.Secondary;
	}

	if (asButton) {
		baseCss = getButtonStyles(theme, variant);
	} else {
		baseCss = getLinkStyles(theme, variant, underline, inverse);
	}
	baseCss = {...baseCss, ...css};

	return (
		<a
			{...rest}
			href={disabled ? undefined : href}
			css={baseCss}
		>
			{children}
		</a>
	);
};

const Link = withTheme(LinkBase);
export default Link;
