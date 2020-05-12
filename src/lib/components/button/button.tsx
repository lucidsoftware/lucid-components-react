/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, ReactNode, ButtonHTMLAttributes, RefAttributes } from 'react';

import { withTheme } from 'emotion-theming';
import { ThemeProps } from '../../../theme/theme';
import { getLinkStyles, LinkVariant, UnderlineType } from '../link/link';

export type ButtonSize = 'small' | 'regular' | 'large';

export interface CoreButtonProps {
  className?: string;
  id?: string;
  children?: ReactNode;

  primary?: boolean;
  secondary?: boolean;
  inverse?: boolean;
  asLink?: boolean;
  underline?: UnderlineType;

  block?: boolean;
  size?: ButtonSize;

  disabled?: boolean;
  hover?: boolean;
  active?: boolean;

  css?: any;

  onClick?: () => void;
  onHover?: () => void;
  mouseOver?: () => void;
}

export type ButtonProps = CoreButtonProps &
  ThemeProps &
  RefAttributes<HTMLButtonElement> &
  ButtonHTMLAttributes<HTMLButtonElement>;

let color = '';

export const getButtonStyles = ({
  theme,
  variant = '',
  size = 'regular',
  block,
  active
}: {
  variant?: string;
  block?: boolean;
  size?: ButtonSize;
  active?: boolean;
} & ThemeProps) => {
  color = theme.colors.black;
  let backgroundColor = theme.colors.white;
  let border = theme.buttons.border;
  const boxShadow = theme.buttons.boxShadow;
  let hoverColor = theme.colors.black;
  let hoverBackgroundColor = theme.colors.grey;
  let hoverBorder = theme.buttons.border;
  const hoverBoxShadow = theme.buttons.hoverBoxShadow;
  const transition = theme.buttons.transition;

  if (variant === 'primary') {
    color = theme.colors.white;
    backgroundColor = theme.buttons.primary.backgroundColor;
    border = theme.buttons.primary.border;

    hoverColor = theme.buttons.primary.hoverColor;
    hoverBackgroundColor = theme.buttons.primary.hoverBackgroundColor;
    hoverBorder = theme.buttons.primary.hoverBorder;
  } else if (variant === 'secondary') {
    color = theme.buttons.secondary.color;
    backgroundColor = theme.buttons.secondary.backgroundColor;
    border = theme.buttons.secondary.border;

    hoverColor = theme.buttons.secondary.hoverColor;
    hoverBackgroundColor = theme.buttons.secondary.hoverBackgroundColor;
    hoverBorder = theme.buttons.secondary.hoverBorder;
  }

  const hoverCss = {
    color: hoverColor,
    backgroundColor: hoverBackgroundColor,
    border: hoverBorder,
    cursor: 'pointer',
    boxShadow: hoverBoxShadow,
    textDecoration: 'none'
  };

  const { padding } = theme.buttons.sizes[size];

  let css = {
    display: block ? 'block' : 'inline-block',
    width: block ? '100%' : 'auto',
    textAlign: 'center',
    padding,
    fontSize: 'inherit',
    fontWeight: 'bold',
    lineHeight: theme.buttons.lineHeight,
    borderRadius: `button`,
    boxShadow,
    transition,
    textDecoration: 'none',

    color,
    backgroundColor,
    border,

    '&:visited': {
      color
    },

    ':hover,:focus': hoverCss
  };

  if (active) {
    css = { ...css, ...hoverCss };
  }

  return css;
};

const ButtonBase: FC<ButtonProps> = ({
  className = '',
  id = '',
  children,

  primary,
  secondary,
  inverse,
  asLink,
  underline,

  block,
  size = 'regular',

  onClick,
  onHover,

  disabled,
  hover,
  active,

  theme,

  type = 'button',
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
    css = getLinkStyles({ theme, variant, underline, inverse, block, active });
    css = {
      ...css,
      border: 0,
      backgroundColor: 'transparent',
      padding: 0
    };
  } else {
    css = getButtonStyles({ theme, variant, block, active, size });
  }

  const getClasses = () => {
    return `${className}  ${hover ? 'is-hover' : ''} ${
      active ? 'is-active' : ''
    }  ${asLink ? 'is-link' : ''}  ${block ? 'block' : ''}`;
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
