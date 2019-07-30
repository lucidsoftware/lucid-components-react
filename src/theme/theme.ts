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
    disabled: "#EBEBEC",
    disabledBorder: "#A7A9AC"
  },
  buttons: {
    primary: {},
    secondary: {}
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
