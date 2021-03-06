import * as CSS from 'csstype';
import { Theme as DefaultTheme } from 'styled-system';

import * as colors from './colors';
import { base } from './base';
import {
  navbar,
  accordion,
  forms,
  breadcrumb,
  buttons,
  card,
  links,
  paper,
  headings
} from './components';

export interface Theme extends DefaultTheme {
  colors: Record<string, string>;
  radii: Record<string, string | number>;
  navbar: typeof navbar;
  accordion: Record<
    'button' | 'panel',
    Record<string, CSS.StandardProperties | object>
  >;
  forms: typeof forms;
  breadcrumb: typeof breadcrumb;
  buttons: any;
  card?: Record<string, CSS.StandardProperties | object>;
  links: any;
  paper?: Record<string, CSS.StandardProperties | object>;
  headings?: Record<string, CSS.StandardProperties | object>;
}

const theme: Theme = {
  ...base,
  colors: {
    text: colors.blueSteel,
    background: colors.white,
    heading: colors.blueSteel,
    primary: colors.primary,
    secondary: colors.blueSteel,
    accent: colors.accent,
    muted: colors.muted,
    grey: colors.grey,
    white: colors.white,
    black: colors.black,
    disabled: colors.grey,
    disabledBorder: colors.lightGrey
  },
  accordion,
  breadcrumb,
  buttons,
  card,
  forms,
  headings,
  links,
  navbar,
  paper
};

export interface ThemeProps {
  theme: Theme;
}

export default theme;
