/** @jsx jsx */
import { FC, RefAttributes, AnchorHTMLAttributes } from 'react';
import { jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import { ThemeProps } from '../../../theme/theme';
import { getButtonStyles } from '../button/button';

export type UnderlineType = 'none' | 'hover' | 'always';

export interface CoreLinkProps {
  active?: boolean;
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
  AnchorHTMLAttributes<HTMLAnchorElement> &
  RefAttributes<HTMLAnchorElement> &
  CoreLinkProps;

export enum LinkVariant {
  Default = 'default',
  Primary = 'primary',
  Secondary = 'secondary'
}

export const getLinkStyles = ({
  active,
  block,
  inverse = false,
  theme,
  underline = 'none',
  variant = LinkVariant.Default
}: {
  active?: boolean;
  block?: boolean;
  inverse?: boolean;
  underline?: string;
  variant?: LinkVariant;
} & ThemeProps) => {
  const linkUnderline = underline === 'always' ? 'underline' : 'none';
  const linkUnderlineHover =
    underline === 'hover' || underline === 'always' ? 'underline' : 'none';

  const linkType = inverse ? 'inverse' : 'default';
  const { color, hover, disabled } = theme.links[variant][linkType];

  const hoverCss = {
    color: hover,
    textDecoration: linkUnderlineHover
  };

  let css = {
    color,
    display: block ? 'block' : 'inline-block',
    border: 'none',
    textDecoration: linkUnderline,
    cursor: 'pointer',
    ':visited': {
      color
    },
    ':hover,:focus': hoverCss,
    'a&:not([href])': {
      color: disabled,
      cursor: 'not-allowed'
    }
  };

  if (active) {
    css = { ...css, ...hoverCss };
  }

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
  active,
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
    baseCss = getButtonStyles({ theme, variant, block, active });
  } else {
    baseCss = getLinkStyles({
      theme,
      variant,
      underline,
      inverse,
      block,
      active
    });
  }

  return (
    <a {...rest} href={disabled ? undefined : href} css={[baseCss, css]}>
      {children}
    </a>
  );
};

const Link = withTheme(LinkBase);
export default Link;
