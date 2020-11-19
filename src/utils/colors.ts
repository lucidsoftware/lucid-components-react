import * as CSS from 'csstype';

export interface BaseColors {
  black: CSS.Property.Color;
  blue: Record<string, CSS.Property.Color>;
  coolGrey: Record<string, CSS.Property.Color>;
  earth: Record<string, CSS.Property.Color>;
  fuchsia: Record<string, CSS.Property.Color>;
  green: Record<string, CSS.Property.Color>;
  indigo: Record<string, CSS.Property.Color>;
  lime: Record<string, CSS.Property.Color>;
  orange: Record<string, CSS.Property.Color>;
  pink: Record<string, CSS.Property.Color>;
  purple: Record<string, CSS.Property.Color>;
  red: Record<string, CSS.Property.Color>;
  teal: Record<string, CSS.Property.Color>;
  white: CSS.Property.Color;
  yellow: Record<string, CSS.Property.Color>;
}

const colors: BaseColors = {
  black: '#000000',
  blue: {
    0: '#F7FBFF',
    5: '#EDF5FF',
    10: '#CFE4FF',
    20: '#B5D6FF',
    30: '#6DB1FF',
    40: '#4D9EFF',
    50: '#2888FA',
    60: '#1071E5',
    70: '#005ED0',
    80: '#004FAF',
    90: '#003D87',
    100: '#002A5E'
  },
  coolGrey: {
    0: '#FAFBFC',
    5: '#F2F3F5',
    10: '#DFE3E8',
    20: '#CED4DB',
    30: '#A9AFB8',
    40: '#979EA8',
    50: '#838A93',
    60: '#6F7681',
    70: '#5D646F',
    80: '#4C535D',
    90: '#3A414A',
    100: '#282C33'
  },
  earth: {
    0: '#FCFAF0',
    5: '#F7F4E4',
    10: '#E8E2C8',
    20: '#DBD3B6',
    30: '#C0B79A',
    40: '#A79C7F',
    50: '#8E8267',
    60: '#82755B',
    70: '#706148',
    80: '#5E5139',
    90: '#52442B',
    100: '#362A15'
  },
  fuchsia: {
    0: '#FFF7FB',
    5: '#FFF0F6',
    10: '#FFD6E8',
    20: '#FEBED9',
    30: '#FF87BA',
    40: '#F76DA7',
    50: '#ED4A8E',
    60: '#D92E75',
    70: '#BF195E',
    80: '#A40E4C',
    90: '#800538',
    100: '#5E0027'
  },
  green: {
    0: '#EBFFEB',
    5: '#E3FAE3',
    10: '#C3F7C8',
    20: '#8EE895',
    30: '#54C45E',
    40: '#2DB539',
    50: '#109E1C',
    60: '#008A0E',
    70: '#00730A',
    80: '#056105',
    90: '#024D02',
    100: '#003600'
  },
  indigo: {
    0: '#FAFAFF',
    5: '#F2F2FF',
    10: '#DEDEFF',
    20: '#CDCCFF',
    30: '#A7A6FF',
    40: '#9391FF',
    50: '#7C78FF',
    60: '#635DFF',
    70: '#4F4FE0',
    80: '#3C41C2',
    90: '#2F3296',
    100: '#21265C',
    105: '#1E2253'
  },
  lime: {
    0: '#EDFFDE',
    5: '#DCFFBF',
    10: '#B1F57F',
    20: '#8AF042',
    25: '#66DC17'
  },
  orange: {
    0: '#FFF9ED',
    5: '#FFF3D9',
    10: '#FFDDA6',
    20: '#FFCA73',
    30: '#FC9432',
    40: '#FA7811',
    45: '#F96B13',
    50: '#EB5A00',
    60: '#CC4E00',
    70: '#AB4200',
    80: '#8F3700',
    90: '#702B00',
    100: '#4F1E00'
  },
  pink: {
    0: '#FFF7FD',
    5: '#FFF0FB',
    10: '#FFD6F5',
    20: '#FEC1EF',
    30: '#FF80DF',
    40: '#F765D3',
    50: '#E547BE',
    60: '#D916A8',
    70: '#BD008D',
    80: '#9E0077',
    90: '#7D005D',
    100: '#590043'
  },
  purple: {
    0: '#FDF7FF',
    5: '#FBF0FF',
    10: '#F4D9FF',
    20: '#EEC4FF',
    30: '#E08FFF',
    40: '#D773FF',
    50: '#CC4AFF',
    60: '#B723F6',
    70: '#9F00DE',
    80: '#8700BA',
    90: '#680094',
    100: '#4D0066'
  },
  red: {
    0: '#FFF7F7',
    5: '#FFF0F0',
    10: '#FFD9D9',
    20: '#FFC4C4',
    30: '#FF8F8F',
    40: '#FE7070',
    50: '#FF3D3D',
    60: '#E81313',
    70: '#C90C0C',
    80: '#A80707',
    90: '#860303',
    100: '#610002'
  },
  teal: {
    0: '#E5FFFC',
    5: '#D7FAF5',
    10: '#B8F5ED',
    20: '#77E5D7',
    30: '#00C2A8',
    40: '#00B098',
    50: '#009985',
    60: '#008573',
    70: '#007061',
    80: '#005D51',
    90: '#00493F',
    100: '#00332C'
  },
  white: '#FFFFFF',
  yellow: {
    0: '#FCFCCA',
    5: '#FFF7A1',
    10: '#FFE342',
    20: '#FCCE14',
    25: '#F2BA00'
  }
};

export default colors;
