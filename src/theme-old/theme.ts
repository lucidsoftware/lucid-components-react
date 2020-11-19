import * as CSS from 'csstype';
import { Theme as DefaultTheme } from 'styled-system';

import defaultColors from './colors';
import { base } from './base';
import { fonts, headings } from './typography';
import {
  accordion,
  breadcrumb,
  buttons,
  card,
  forms,
  links,
  navbar,
  paper
} from './components';

export enum ProductModes {
  chart = 'chart',
  co = 'co',
  edu = 'edu',
  press = 'press',
  spark = 'spark'
}

export interface Theme extends DefaultTheme {
  accordion: Record<
    'button' | 'panel',
    Record<string, CSS.StandardProperties | object>
  >;
  breadcrumb: typeof breadcrumb;
  buttons: any;
  card?: Record<string, CSS.StandardProperties | object>;
  colors: any;
  fonts: Record<string, any>;
  forms: typeof forms;
  headings?: Record<string, CSS.StandardProperties | object>;
  links: any;
  navbar: typeof navbar;
  paper?: Record<string, CSS.StandardProperties | object>;
  radii: Record<string, string | number>;
}

const theme: Theme = {
  ...base,
  accordion,
  breadcrumb,
  buttons,
  card,
  colors: defaultColors,
  fonts,
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
