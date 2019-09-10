/** @jsx jsx */
import { FC, HTMLProps } from 'react';
import { jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import { ThemeProps, ThemeInterface } from '../../../theme/theme';
import { getButtonStyles } from '../button/button';

export type UnderlineType = 'none' | 'hover' | 'always';

export interface CoreLinkProps {
  disabled?: boolean;
  primary?: boolean;
  secondary?: boolean;
  inverse?: boolean;
  asButton?: boolean;
  block?: boolean;
  underline?: UnderlineType;
  css?: any;
}

export type LinkProps = ThemeProps &
  HTMLProps<HTMLAnchorElement> &
  CoreLinkProps;

export enum LinkVariant {
  Default = 'default',
  Primary = 'primary',
  Secondary = 'secondary'
}

export const getLinkStyles = ({
  block,
  inverse = false,
  theme,
  underline = 'none',
  variant = LinkVariant.Default
}: {
  block?: boolean;
  inverse?: boolean;
  theme: ThemeInterface;
  underline: string;
  variant: LinkVariant;
}) => {
  const linkUnderline = underline === 'always' ? 'underline' : 'none';
  const linkUnderlineHover =
    underline === 'hover' || underline === 'always' ? 'underline' : 'none';

  const linkType = inverse ? 'inverse' : 'default';
  const { color, hover, disabled } = theme.links[variant][linkType];

  const css = {
    color,
    display: block ? 'block' : 'inline-block',
    fontSize: `${theme.buttons.fontSize}`,
    border: 'none',
    textDecoration: linkUnderline,
    cursor: 'pointer',
    ':visited': {
      color
    },
    ':hover,:focus': {
      color: hover,
      textDecoration: linkUnderlineHover
    },
    'a&:not([href])': {
      color: disabled,
      cursor: 'not-allowed'
    }
  };

  return css;
};

const LinkBase: FC<LinkProps> = ({
  href,
  disabled,
  underline = 'none',
  children,
  primary,
  secondary,
  inverse,
  asButton,
  block,
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
    baseCss = getButtonStyles({ theme, variant, block });
  } else {
    baseCss = getLinkStyles({ theme, variant, underline, inverse, block });
  }
  baseCss = { ...baseCss, ...css };

  return (
    <a {...rest} href={disabled ? undefined : href} css={baseCss}>
      {children}
    </a>
  );
};

const Link = withTheme(LinkBase);
export default Link;
