/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, ReactNode } from "react";

import { withTheme } from 'emotion-theming';
import { ThemeProps } from '../../../theme/theme';
import { ThemeInterface } from "../../../theme/theme";
import { getLinkStyles, LinkVariant, UnderlineType } from '../link/link';

interface Props {
  className?: string;
  id?: string;
  children?: ReactNode;

  primary?: boolean;
  secondary?: boolean;
  inverse?: boolean;
  asLink?: boolean;
  underline?: UnderlineType;

  block?: boolean;

  disabled?: boolean;
  hover?: boolean;
  active?: boolean;

  type?: 'button' | 'submit' | 'reset';

  css?: any,
  theme: ThemeInterface


  onClick?: () => void;
  onHover?: () => void;
  mouseOver?: () => void;
}

export const getButtonStyles = (theme: ThemeInterface, variant = '') => {
	let color= theme.colors.black;
  let backgroundColor= theme.colors.white;
  let border= theme.buttons.border;
  let boxShadow= theme.buttons.boxShadow;
  let hoverColor= theme.colors.black;
  let hoverBackgroundColor= theme.colors.grey;
  let hoverBorder= theme.buttons.border;
  let hoverBoxShadow = theme.buttons.hoverBoxShadow;
	let transition = theme.buttons.transition;

	if (variant === 'primary'){
    color = theme.colors.white;
    backgroundColor = theme.buttons.primary.backgroundColor;
    border = theme.buttons.primary.border;

    hoverColor= theme.buttons.primary.hoverColor;
    hoverBackgroundColor= theme.buttons.primary.hoverBackgroundColor;
    hoverBorder= theme.buttons.primary.hoverBorder;
  } else if (variant === 'secondary') {
    color = theme.buttons.secondary.color;
    backgroundColor = theme.buttons.secondary.backgroundColor;
    border = theme.buttons.secondary.border;

    hoverColor = theme.buttons.primary.hoverColor;
    hoverBackgroundColor= theme.buttons.primary.hoverBackgroundColor;
    hoverBorder = theme.buttons.primary.hoverBorder;
  }

	const css = {
    display: 'inline-block',
    padding:  `${theme.space[2]}px ${theme.space[4]}px`,
    fontSize: `${theme.fontSizes[0]}px`,
    fontWeight: theme.fontWeights.bolder,
    borderRadius: `${theme.borderRadius}px`,
    boxShadow,
		transition,
		textDecoration: 'none',

    color,
    backgroundColor,
		border,

		'&:visited': {
			color
		},

    ':hover,:focus': {
      color: hoverColor,
      backgroundColor: hoverBackgroundColor,
      border: hoverBorder,
      cursor: 'pointer',
      boxShadow: hoverBoxShadow,
      textDecoration: 'none',
    }
	}

	return css;
}

const ButtonBase: FC<Props & ThemeProps & JSX.IntrinsicElements['button']> = ({
  className="",
  id="",
  children,

  primary,
  secondary,
  inverse,
  asLink,
  underline,

  block,

  onClick,
  onHover,

  disabled,
  hover,
  active,

  theme,

  type = "button",
  ...rest
}) => {
	let variant;
	if (primary) {
		variant = LinkVariant.Primary;
	} else if (secondary) {
		variant = LinkVariant.Secondary;
	}


	let css = {};

	if (asLink) {
    css = getLinkStyles(theme, variant, underline, inverse);
    css = {
      ...css,
      border: 0,
      backgroundColor: 'transparent',
      padding: 'initial'
    };
	} else {
		css = getButtonStyles(theme, variant);
	}

  const getClasses = () => {
    return `${className}  ${hover ? 'is-hover' : ''} ${active ? 'is-active' : ''}  ${asLink ? 'is-link' : ''}  ${block ? 'block' : ''}`;
  };

  return (
    <button
      {...rest}
      className={getClasses()}
      onClick={onClick}
      onMouseOver={onHover}
      type={type}
      id={id}
      css={css}
    >
      {children}
    </button>
  );
};

const Button = withTheme(ButtonBase);

export default Button;
