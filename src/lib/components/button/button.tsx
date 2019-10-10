/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, ReactNode, ButtonHTMLAttributes, RefAttributes } from 'react';
import styled from '@emotion/styled';

import { withTheme } from 'emotion-theming';
import { ThemeProps } from '../../../theme/theme';
import { getLinkStyles, LinkVariant, UnderlineType } from '../link/link';

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
  block,
  active
}: {
  variant?: string;
  block?: boolean;
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

    hoverColor = theme.buttons.primary.hoverColor;
    hoverBackgroundColor = theme.buttons.primary.hoverBackgroundColor;
    hoverBorder = theme.buttons.primary.hoverBorder;
  }

  const hoverCss = {
    color: hoverColor,
    backgroundColor: hoverBackgroundColor,
    border: hoverBorder,
    cursor: 'pointer',
    boxShadow: hoverBoxShadow,
    textDecoration: 'none'
  };

  let css = {
    display: block ? 'block' : 'inline-block',
    width: block ? '100%' : 'auto',
    textAlign: block ? 'center' : '',
    padding: `${theme.space[2]}px ${theme.space[4]}px`,
    fontSize: `${theme.fontSizes[0]}px`,
    fontWeight: theme.fontWeights.bolder,
    lineHeight: theme.buttons.lineHeight,
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
      padding: 'initial'
    };
  } else {
    css = getButtonStyles({ theme, variant, block, active });
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
