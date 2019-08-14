/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, ReactNode } from "react";

import { withTheme } from 'emotion-theming';
import { ThemeProps } from '../../../theme/theme';
import { ThemeInterface } from "../../../theme/theme";
import { getLinkStyles } from '../link/link';

interface Props {
  className?: string;
  id?: string;
  children?: ReactNode;

  primary?: boolean;
  secondary?: boolean;
  inverse?: boolean;
  asLink?: boolean;

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
  let hoverBackgroundColor= theme.colors.gray;
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

    '&:hover': {
      color: hoverColor,
      backgroundColor: hoverBackgroundColor,
      border: hoverBorder,
      cursor: 'pointer',
      boxShadow: hoverBoxShadow
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
	let variant = '';
	if (primary) {
		variant = 'primary';
	} else if (secondary) {
		variant = 'secondary';
	} else if (inverse) {
		variant = 'inverse';
	}


	let css = {};

	if (asLink) {
		css = getLinkStyles(theme, variant);
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
