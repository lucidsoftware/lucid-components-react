import { Theme as StyledSystemTheme, ObjectOrArray } from 'styled-system';
import * as CSS from 'csstype';

import breakpoints from './breakpoints';
import colors, { Colors } from './colors';
import fonts, { Fonts } from './fonts';
import space, { Spaces } from './space';
import zIndices, { ZIndices } from './z-indices';
import {
  accordion,
  breadcrumb,
  buttons,
  card,
  headings,
  links,
  navbar,
  paper
} from './components';

export interface Theme
  extends Fonts,
    Omit<
      StyledSystemTheme,
      | 'colors'
      | 'buttons'
      | 'fonts'
      | 'fontSizes'
      | 'fontWeights'
      | 'lineHeights'
      | 'letterSpacings'
    > {
  borderRadius: number;
  breakpoints: ObjectOrArray<string | number>;
  colors: Colors;
  radii: Record<string, string | number>;
  shadows: {
    0: string;
    video: string;
    10: string;
    20: string;
    listItem: string;
  };
  space: Spaces;
  zIndices: ZIndices;
  // components
  accordion: Record<
    'button' | 'panel',
    Record<string, CSS.StandardProperties | object>
  >;
  breadcrumb: typeof breadcrumb;
  buttons: typeof buttons;
  card: typeof card;
  headings: ObjectOrArray<string>;
  links: typeof links;
  navbar: typeof navbar;
  paper: typeof paper;
}

export enum ProductModes {
  chart = 'chart',
  co = 'co',
  edu = 'edu',
  press = 'press',
  spark = 'spark'
}

const theme: Theme = {
  ...fonts,
  borderRadius: 5,
  breakpoints,
  colors,
  radii: {
    button: '5px',
    card: '5px',
    paper: '5px'
  },
  shadows: {
    0: 'none',
    video: '0px -4px 8px rgba(40, 44, 51, 0.15)',
    10: '10px 10px 0 0 rgba(0, 0, 0, 0.3)',
    20: '20px 20px 0 0 rgba(0, 0, 0, 0.3)',
    listItem: '0 0 5px 0 rgba(0, 0, 0, 0.1)'
  },
  space,
  zIndices,
  // components
  accordion,
  breadcrumb,
  buttons,
  card,
  headings,
  links,
  navbar,
  paper
};

export interface ThemeProps {
  theme: Theme;
}

export default theme;
