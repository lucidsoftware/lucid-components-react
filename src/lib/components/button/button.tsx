/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
  FC,
  ReactNode,
  ButtonHTMLAttributes,
  RefAttributes,
  SyntheticEvent
} from 'react';
import * as CSS from 'csstype';
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
  css?: CSS.Properties;
  onClick?: (evt: SyntheticEvent<Element, Event>) => void;
  onHover?: (evt: SyntheticEvent<Element, Event>) => void;
  onFocus?: (evt: SyntheticEvent<Element, Event>) => void;
  mouseOver?: (evt: SyntheticEvent<Element, Event>) => void;
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
  active,
  disabled
}: {
  variant?: string;
  block?: boolean;
  size?: ButtonSize;
  active?: boolean;
  disabled?: boolean;
} & ThemeProps) => {
  color = theme.colors.black;
  let backgroundColor = theme.colors.white;
  let border = theme.buttons.border;
  const boxShadow = disabled
    ? theme.buttons.disabledBoxShadow
    : theme.buttons.boxShadow;
  let hoverColor = theme.colors.black;
  let hoverBackgroundColor = theme.colors.grey;
  let hoverBorder = theme.buttons.border;
  const hoverBoxShadow = theme.buttons.hoverBoxShadow;
  const transition = theme.buttons.transition;

  if (disabled) {
    color = theme.buttons.disabledColor;
    backgroundColor = theme.buttons.disabledBackgroundColor;
    border = theme.buttons.disabledBorder;
  }

  if (variant === 'primary') {
    color = theme.colors.white;
    backgroundColor = theme.buttons.primary.backgroundColor;
    border = theme.buttons.primary.border;
    hoverColor = theme.buttons.primary.hoverColor;
    hoverBackgroundColor = theme.buttons.primary.hoverBackgroundColor;
    hoverBorder = theme.buttons.primary.hoverBorder;
  }

  if (variant === 'secondary') {
    color = theme.buttons.secondary.color;
    backgroundColor = theme.buttons.secondary.backgroundColor;
    border = theme.buttons.secondary.border;
    hoverColor = theme.buttons.secondary.hoverColor;
    hoverBackgroundColor = theme.buttons.secondary.hoverBackgroundColor;
    hoverBorder = theme.buttons.secondary.hoverBorder;
  }

  const hoverCss = disabled
    ? {}
    : {
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
    fontSize: theme.buttons.fontSize || 'inherit',
    fontWeight: 'bold',
    lineHeight: theme.buttons.lineHeight,
    borderRadius: theme.radii.button,
    boxShadow,
    transition,
    textDecoration: 'none',
    color,
    backgroundColor,
    border,
    '&:visited': {
      color
    },
    ':hover, :focus': hoverCss
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
  onFocus,
  hover,
  active,
  disabled,
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
    css = getButtonStyles({ theme, variant, block, active, size, disabled });
  }

  const getClasses = () => {
    return `${className}${hover ? ' is-hover' : ''}${
      active ? ' is-active' : ''
    }${asLink ? ' is-link' : ''}${block ? ' block' : ''}`;
  };

  return (
    <button
      {...rest}
      className={getClasses()}
      css={css}
      data-button-as-link={`${asLink ? 'true' : 'false'}`}
      disabled={disabled}
      id={id}
      onClick={onClick}
      onFocus={onFocus}
      onMouseOver={onHover}
      type={type}
    >
      {children}
    </button>
  );
};

const Button = withTheme(ButtonBase);

export default Button;
