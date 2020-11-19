import * as CSS from 'csstype';
import { ObjectOrArray } from 'styled-system';

import defaultColors, { BaseColors } from '../utils/colors';
import { ProductModes } from './theme';

export type ColorSpecific = {
  primary: CSS.Property.Color;
  primaryText: CSS.Property.Color;
  secondary: CSS.Property.Color;
  secondaryText: CSS.Property.Color;
  highlight?: CSS.Property.Color;
};

export type ThemeColors = {
  accent: CSS.Property.Color;
  background: CSS.Property.Color;
  blueSteel: CSS.Property.Color;
  disabled: CSS.Property.Color;
  disabledBorder: CSS.Property.Color;
  grey: CSS.Property.Color;
  heading: CSS.Property.Color;
  lightGrey: CSS.Property.Color;
  muted: CSS.Property.Color;
  subheading: CSS.Property.Color;
  text: CSS.Property.Color;
};

export type BaseThemeColors = BaseColors & ThemeColors & ColorSpecific;

export type ColorMode = {
  [k: string]: CSS.Property.Color | ObjectOrArray<CSS.Property.Color>;
} & BaseThemeColors;

export interface Colors extends BaseThemeColors {
  products?: {
    [Key in ProductModes]: ColorMode;
  };
}

const baseColors: BaseColors & ThemeColors = {
  ...defaultColors,
  accent: defaultColors.indigo[60],
  background: defaultColors.white,
  blueSteel: defaultColors.coolGrey[100],
  disabled: defaultColors.coolGrey[10],
  disabledBorder: defaultColors.coolGrey[30],
  grey: defaultColors.coolGrey[10],
  heading: defaultColors.coolGrey[100],
  lightGrey: defaultColors.coolGrey[30],
  muted: defaultColors.indigo[60],
  subheading: defaultColors.coolGrey[100],
  text: defaultColors.coolGrey[100]
};

const colors: Colors = {
  ...baseColors,
  primary: defaultColors.coolGrey[90],
  primaryText: defaultColors.coolGrey[90],
  secondary: defaultColors.coolGrey[100],
  secondaryText: defaultColors.coolGrey[100],
  products: {
    chart: {
      ...baseColors,
      primary: defaultColors.coolGrey[90],
      primaryText: defaultColors.coolGrey[90],
      secondary: defaultColors.coolGrey[100],
      secondaryText: defaultColors.coolGrey[100]
    },
    co: {
      ...baseColors,
      primary: defaultColors.blue[60],
      primaryText: defaultColors.blue[60],
      secondary: defaultColors.coolGrey[100],
      secondaryText: defaultColors.coolGrey[100]
    },
    edu: {
      ...baseColors,
      primary: defaultColors.indigo[70],
      primaryText: defaultColors.indigo[70],
      secondary: defaultColors.coolGrey[90],
      secondaryText: defaultColors.coolGrey[90]
    },
    press: {
      ...baseColors,
      primary: defaultColors.teal[30],
      primaryText: defaultColors.teal[30],
      secondary: defaultColors.blue[60],
      secondaryText: defaultColors.blue[60]
    },
    spark: {
      ...baseColors,
      primary: defaultColors.red[60],
      primaryText: defaultColors.red[60],
      secondary: defaultColors.blue[60],
      secondaryText: defaultColors.blue[60]
    }
  }
};

export default colors;
