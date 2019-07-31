const theme = {
  colors: {
    text: "#3D4752",
    background: "#FFF",
    primary: "#636AFF",
    primaryText: "#636AFF",
    secondary: "#3D4752",
    secondaryText: "#3D4752",
    grey: "#EBEBEC",
    white: "#FFF",
    black: "#000",
    disabled: "#EBEBEC",
    disabledBorder: "#A7A9AC"
  },
  buttons: {
    boxShadow: '2px 2px 0 0 rgba(0, 0, 0, .2)',
    hoverBoxShadow: "none",
    border: "1px solid #000",
    transition: 'transform 0.15 ease-out',
    
    primary: {
      color: "#FFF",
      border: "1px solid #636AFF",
      backgroundColor: '#636AFF',

      hoverColor: "#4247aa",
      hoverBackgroundColor: "#B6B9FF",
      hoverBorder: "1px solid #636AFF",

      activeColor: "#4247aa",
      activeBackgroundColor: "#B6B9FF",
      activeBorder: "1px solid #636AFF",
      activeTransform: 0.95,
    },
    secondary: {
      color: "#636AFF",
      border: "1px solid #636AFF",
      backgroundColor: '#FFF',
      hoverColor: "#4247aa",
      hoverBackgroundColor: "#B6B9FF",
      hoverBorder: "1px solid #636AFF",
      activeTransform: 0.95,
    }
  },
  fonts: {
    body:
      "BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif",
    heading:
      "BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif",
    monospace: "monospace"
  },
  fontWeights: {
    body: 400,
    bold: 500,
    bolder: 600,
    heading: 700
  },
  lineHeights: {
    body: 1.35,
    heading: 1.125
  },
  fontSizes: [
    18,
    19,
    21,
    22,
    24,
    26,
    28,
    32,
    36,
    40,
    46,
    53,
    56,
    66,
    48,
    64,
    72
  ],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: [320, 500, 768, 900, 1024, 1220, 1440],
  borderRadius: 5
};

export interface ThemeInterface {
  colors: {
    [key: string]: string
  };
  buttons: any,
  fonts: {
    body: string;
    heading: string;
    monospace: string;
  };
  fontWeights: {
    body: number;
    bold: number;
    bolder: number;
    heading: number;
  };
  lineHeights: {
    body: number;
    heading: number;
  };
  fontSizes: number[];
  space: number[];
  breakpoints: number[];
  borderRadius: number;
}

export default theme;
