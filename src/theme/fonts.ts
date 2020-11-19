import fontSizes, { FontSizes } from './font-sizes';

const fontWeights = {
  light: 300,
  regular: 400,
  bold: 500,
  bolder: 700,
  heading: 800,
  subheading: 800
};

const lineHeights = {
  default: 1,
  heading: 1.1,
  subheading: 1.1,
  body: 1.5
};

const letterSpacings = {
  body: 'normal',
  heading: 'normal'
};

export interface Fonts {
  fonts: {
    body: string;
    heading: string;
    monospace: string;
  };
  fontSizes: FontSizes;
  fontWeights: {
    light: number;
    regular: number;
    bold: number;
    bolder: number;
    heading: number;
    subheading: number;
  };
  lineHeights: {
    default: number;
    heading: number;
    subheading: number;
    body: number;
  };
  letterSpacings: {
    body: string;
    heading: string;
  };
}

const fonts: Fonts = {
  fonts: {
    body:
      'Graphik, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif',
    heading:
      'Graphik, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif',
    monospace: 'monospace'
  },
  fontWeights,
  lineHeights,
  letterSpacings,
  fontSizes
};

export default fonts;
