export const fonts = {
  fonts: {
    body:
      'Graphik, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif',
    heading:
      'Graphik, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif',
    monospace: 'monospace'
  },
  fontWeights: {
    light: 300,
    body: 400,
    subheading: 800,
    heading: 800,
    bold: 500,
    bolder: 700
  },
  lineHeights: {
    default: 1,
    body: 1.5,
    heading: 1.1,
    subheading: 1.1
  },
  letterSpacings: {
    body: 'normal',
    heading: 'normal'
  },
  fontSizes: [
    8, // 0
    10.2, // 1
    12.8, // 2
    16, // 3
    20, // 4
    25, // 5
    31.3, // 6
    39.1, // 7
    48.8, // 8
    61, // 9
    76.3, // 10
    95.4, // 11
    119.2 // 12
  ]
};

export const headings = {
  headlineXL: {
    color: 'heading',
    fontSize: [9, 10, 11, 12],
    fontWeight: 'heading',
    lineHeight: 'heading',
    margin: 0,
    marginBottom: 8
  },
  headlineL: {
    color: 'heading',
    fontSize: [8, 9, 10, 11],
    fontWeight: 'heading',
    lineHeight: 'heading',
    margin: 0,
    marginBottom: 8
  },
  headlineM: {
    color: 'heading',
    fontSize: [7, 8, 9, 10],
    fontWeight: 'heading',
    lineHeight: 'heading',
    margin: 0,
    marginBottom: 6
  },
  headlineS: {
    color: 'heading',
    fontSize: [6, 7, 8, 9],
    fontWeight: 'heading',
    lineHeight: 'heading',
    margin: 0,
    marginBottom: 6
  },
  headlineXS: {
    color: 'heading',
    fontSize: [5, 6, 7, 8],
    fontWeight: 'heading',
    lineHeight: 'heading',
    margin: 0,
    marginBottom: 5
  },
  headlineXS700: {
    color: 'heading',
    fontSize: [7, 8],
    fontWeight: 'bolder',
    lineHeight: 'heading',
    margin: 0,
    marginBottom: 5
  },
  subheadXL: {
    color: 'subheading',
    fontSize: [6, 7, 8, 9],
    fontWeight: 'subheading',
    lineHeight: 'subheading',
    margin: 0,
    marginBottom: 7
  },
  subheadL: {
    color: 'subheading',
    fontSize: [5, 6, 7, 8],
    fontWeight: 'subheading',
    lineHeight: 'subheading',
    margin: 0,
    marginBottom: 6
  },
  subheadM: {
    color: 'subheading',
    fontSize: [4, 5, 6, 7],
    fontWeight: 'subheading',
    lineHeight: 'subheading',
    margin: 0,
    marginBottom: 6
  },
  subheadS: {
    color: 'subheading',
    fontSize: [3, 4, 5, 6],
    fontWeight: 'subheading',
    lineHeight: 'subheading',
    margin: 0,
    marginBottom: 5
  },
  subheadM700: {
    color: 'subheading',
    fontSize: [6, 7],
    fontWeight: 'bolder',
    lineHeight: 'subheading',
    margin: 0,
    marginBottom: 5
  },
  subheadXS: {
    color: 'subheading',
    fontSize: [2, 3, 4, 5],
    fontWeight: 'subheading',
    lineHeight: 'subheading',
    margin: 0,
    marginBottom: 5
  },
  subheadXXS: {
    color: 'subheading',
    fontSize: [2, 3, 3, 4],
    fontWeight: 'subheading',
    lineHeight: 'subheading',
    margin: 0,
    marginBottom: 5
  },
  blogInTextCtaHeader: {
    color: 'primary',
    fontSize: 3,
    fontWeight: 'subheading',
    lineHeight: 'subheading',
    margin: 0,
    textTransform: 'uppercase'
  },
  cardTitle: {
    color: 'heading',
    fontSize: 4,
    fontWeight: 'subheading',
    lineHeight: 'subheading',
    margin: 0
  }
};

export const textStyles = {
  ...headings,
  body: {
    fontWeight: 'normal' as const,
    fontSize: 4,
    marginBottom: 5,
    color: 'text'
  },
  subhead: {
    fontWeight: 'light',
    fontSize: [4, 4, 5, 5],
    marginBottom: 5
  },
  introL: {
    fontWeight: 'light',
    fontSize: [5, 5, 5, 6, 7],
    lineHeight: 'body',
    marginBottom: 6
  },
  introS: {
    fontWeight: 'light',
    fontSize: [4, 4, 4, 4, 5],
    lineHeight: 'body',
    marginBottom: 6
  },
  quoteL: {
    fontWeight: 'light',
    fontSize: [5, 5, 5, 5, 6],
    lineHeight: 'body',
    marginBottom: 6,
    color: 'blueSteel'
  },
  quoteM: {
    fontWeight: 'light',
    fontSize: [4, 4, 4, 4, 5],
    lineHeight: 'body',
    marginBottom: 6,
    color: 'blueSteel'
  },
  navLabel: {
    fontWeight: 'normal',
    fontSize: 2,
    margin: 0,
    padding: 0
  },
  navText: {
    fontWeight: 'normal',
    fontSize: 2,
    margin: 0,
    padding: '4px 0 0 !important'
  },
  navHeader: {
    fontWeight: 'bold',
    fontSize: 3,
    margin: 0,
    padding: '0 !important'
  },
  heroText: {
    fontWeight: 'light',
    fontSize: 4,
    lineHeight: 'body',
    marginBottom: 6,
    color: 'blueSteel',
    fontFamily: 'body'
  },
  bodyText: {
    /* eslint-disable-next-line @typescript-eslint/prefer-as-const */
    fontWeight: 'normal' as 'normal',
    fontSize: 3,
    lineHeight: 'body',
    marginBottom: 5,
    color: 'text',
    fontFamily: 'body'
  }
};