/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { ReactNode } from "react";

import { withTheme } from 'emotion-theming';
import { ThemeInterface } from "../../theme/theme";

interface Styles {
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
}

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

type Button = Props & React.HTMLProps<HTMLButtonElement> & React.HTMLAttributes<HTMLButtonElement>;

const Button = ({
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
}: Button) => {
  let color= theme.colors.black;
  let backgroundColor= theme.colors.white;
  let border= theme.buttons.border;
  let boxshadow= theme.buttons.boxShadow;
  let hoverColor= theme.colors.black;
  let hoverBackgroundColor= theme.colors.gray;
  let hoverBorder= theme.colors.black;
  let hoverBoxShadow = theme.buttons.hoverBoxShadow;
  let transition = theme.buttons.transition;

  if (primary){
    color = theme.colors.white;
    backgroundColor = theme.buttons.primary.backgroundColor;
    border = theme.buttons.primary.border;

    hoverColor= theme.buttons.primary.hoverColor;
    hoverBackgroundColor= theme.buttons.primary.hoverBackgroundColor;
    hoverBorder= theme.buttons.primary.hoverBorder;
  } else if (secondary) {
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
    boxShadow: boxshadow,
    transition: transition,

    color: color,
    backgroundColor: backgroundColor,
    border: border,

    '&:hover': {
      color: hoverColor,
      backgroundColor: hoverBackgroundColor,
      border: hoverBorder,
      cursor: 'pointer',
      boxShadow: hoverBoxShadow
    }
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

export default withTheme(Button);
