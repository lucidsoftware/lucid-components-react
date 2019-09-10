/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, ReactNode, HTMLProps } from 'react';

import { withTheme } from 'emotion-theming';
import { ThemeProps } from '../../../theme/theme';
import { ThemeInterface } from '../../../theme/theme';
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

  css?: any;
  theme: ThemeInterface;

  onClick?: () => void;
  onHover?: () => void;
  mouseOver?: () => void;
}

export type ButtonProps = Props & ThemeProps & HTMLProps<HTMLButtonElement>;

export const getButtonStyles = ({
  theme,
  variant = '',
  block
}: {
  theme: ThemeInterface;
  variant: string;
  block?: boolean;
}) => {
  let color = theme.colors.black;
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

  const css = {
    display: block ? 'block' : 'inline-block',
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

    ':hover,:focus': {
      color: hoverColor,
      backgroundColor: hoverBackgroundColor,
      border: hoverBorder,
      cursor: 'pointer',
      boxShadow: hoverBoxShadow,
      textDecoration: 'none'
    }
  };

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
    css = getLinkStyles({ theme, variant, underline, inverse, block });
    css = {
      ...css,
      border: 0,
      backgroundColor: 'transparent',
      padding: 'initial'
    };
  } else {
    css = getButtonStyles({ theme, variant, block });
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
