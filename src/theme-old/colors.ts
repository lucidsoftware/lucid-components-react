import defaultColors from '../utils/colors';

const baseColors = {
  accent: defaultColors.indigo[60],
  background: defaultColors.white,
  black: defaultColors.black,
  blue: { ...defaultColors.blue },
  blueSteel: defaultColors.coolGrey[100],
  coolGrey: { ...defaultColors.coolGrey },
  disabled: defaultColors.coolGrey[10],
  disabledBorder: defaultColors.coolGrey[30],
  earth: { ...defaultColors.earth },
  fuchsia: { ...defaultColors.fuchsia },
  grey: defaultColors.coolGrey[10],
  green: { ...defaultColors.green },
  heading: defaultColors.coolGrey[100],
  indigo: { ...defaultColors.indigo },
  lightGrey: defaultColors.coolGrey[30],
  lime: { ...defaultColors.lime },
  muted: defaultColors.indigo[60],
  orange: { ...defaultColors.orange },
  pink: { ...defaultColors.pink },
  purple: { ...defaultColors.purple },
  red: { ...defaultColors.red },
  subheading: defaultColors.coolGrey[100],
  teal: { ...defaultColors.teal },
  text: defaultColors.coolGrey[100],
  yellow: { ...defaultColors.yellow },
  white: defaultColors.white
};

const colors = {
  ...baseColors,
  primary: defaultColors.coolGrey[90],
  primaryText: defaultColors.coolGrey[90],
  secondary: defaultColors.coolGrey[100],
  secondaryText: defaultColors.coolGrey[100],
  modes: {
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
