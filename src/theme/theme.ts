import * as colors from './colors';
import { base } from './base';
import { Theme as DefaultTheme } from 'styled-system';
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
  radii: Record<string, string>;
  // components
  navbar: typeof navbar;
  accordion: typeof accordion;
  forms: typeof forms;
  breadcrumb: typeof breadcrumb;
  buttons: any;
  card?: typeof card;
  links: typeof links;
  paper?: typeof paper;
  headings?: typeof headings;
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
