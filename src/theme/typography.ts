import headings from './components/headings';

export const paragraphStyles = {
  paragraph2XL400: {
    color: 'paragraph',
    fontSize: headings['2XL'],
    fontWeight: 'regular',
    lineHeight: 'paragraph',
    marginTop: 0,
    marginBottom: 6
  },
  paragraphXL400: {
    color: 'paragraph',
    fontSize: headings['XL'],
    fontWeight: 'regular',
    lineHeight: 'paragraph',
    marginTop: 0,
    marginBottom: 6
  },
  paragraphL400: {
    color: 'paragraph',
    fontSize: headings['L'],
    fontWeight: 'regular',
    lineHeight: 'paragraph',
    marginTop: 0,
    marginBottom: 6
  },
  paragraphM400: {
    color: 'paragraph',
    fontSize: headings['M'],
    fontWeight: 'regular',
    lineHeight: 'paragraph',
    marginTop: 0,
    marginBottom: '20px'
  },
  paragraphS400: {
    color: 'paragraph',
    fontSize: headings['S'],
    fontWeight: 'regular',
    lineHeight: 'paragraph',
    marginTop: 0,
    marginBottom: '20px'
  },
  paragraph2XL700: {
    color: 'paragraph',
    fontSize: headings['2XL'],
    fontWeight: 'bolder',
    lineHeight: 'paragraph',
    marginTop: 0,
    marginBottom: 6
  },
  paragraphXL700: {
    color: 'paragraph',
    fontSize: headings['XL'],
    fontWeight: 'bolder',
    lineHeight: 'paragraph',
    marginTop: 0,
    marginBottom: 6
  },
  paragraphL700: {
    color: 'paragraph',
    fontSize: headings['L'],
    fontWeight: 'bolder',
    lineHeight: 'paragraph',
    marginTop: 0,
    marginBottom: 6
  },
  paragraphM700: {
    color: 'paragraph',
    fontSize: headings['M'],
    fontWeight: 'bolder',
    lineHeight: 'paragraph',
    marginTop: 0,
    marginBottom: '20px'
  },
  paragraphS700: {
    color: 'paragraph',
    fontSize: headings['S'],
    fontWeight: 'bolder',
    lineHeight: 'paragraph',
    marginTop: 0,
    marginBottom: '20px'
  }
};

export const labelStyles = {
  labelS400: {
    color: 'label',
    fontSize: headings['S'],
    fontWeight: 'regular',
    lineHeight: 'label',
    marginTop: 0,
    marginBottom: 3
  },
  labelXS400: {
    color: 'label',
    fontSize: headings['XS'],
    fontWeight: 'regular',
    lineHeight: 'label',
    marginTop: 0,
    marginBottom: '12px'
  },
  label2XS400: {
    color: 'label',
    fontSize: headings['2XS'],
    fontWeight: 'regular',
    lineHeight: 'label',
    marginTop: 0,
    marginBottom: '12px'
  },
  label3XS400: {
    color: 'label',
    fontSize: headings['3XS'],
    fontWeight: 'regular',
    lineHeight: 'label',
    marginTop: 0,
    marginBottom: '12px'
  }
};

export const interactiveStyles = {
  interactiveL400: {
    color: 'interactive',
    fontSize: headings['L'],
    fontWeight: 'regular',
    lineHeight: 'interactive',
    marginTop: 0,
    marginBottom: 4
  },
  interactiveM400: {
    color: 'interactive',
    fontSize: headings['M'],
    fontWeight: 'regular',
    lineHeight: 'interactive',
    marginTop: 0,
    marginBottom: '20px'
  },
  interactiveS400: {
    color: 'interactive',
    fontSize: headings['S'],
    fontWeight: 'regular',
    lineHeight: 'interactive',
    marginTop: 0,
    marginBottom: 3
  },
  interactiveXS400: {
    color: 'interactive',
    fontSize: headings['XS'],
    fontWeight: 'regular',
    lineHeight: 'interactive',
    marginTop: 0,
    marginBottom: '12px'
  },
  interactiveL500: {
    color: 'interactive',
    fontSize: headings['L'],
    fontWeight: 'bold',
    lineHeight: 'interactive',
    marginTop: 0,
    marginBottom: 4
  },
  interactiveM500: {
    color: 'interactive',
    fontSize: headings['M'],
    fontWeight: 'bold',
    lineHeight: 'interactive',
    marginTop: 0,
    marginBottom: '20px'
  },
  interactiveS500: {
    color: 'interactive',
    fontSize: headings['S'],
    fontWeight: 'bold',
    lineHeight: 'interactive',
    marginTop: 0,
    marginBottom: 3
  },
  interactiveXS500: {
    color: 'interactive',
    fontSize: headings['XS'],
    fontWeight: 'bold',
    lineHeight: 'interactive',
    marginTop: 0,
    marginBottom: '12px'
  },
  interactiveL700: {
    color: 'interactive',
    fontSize: headings['L'],
    fontWeight: 'bolder',
    lineHeight: 'interactive',
    marginTop: 0,
    marginBottom: 4
  },
  interactiveM700: {
    color: 'interactive',
    fontSize: headings['M'],
    fontWeight: 'bolder',
    lineHeight: 'interactive',
    marginTop: 0,
    marginBottom: '20px'
  },
  interactiveS700: {
    color: 'interactive',
    fontSize: headings['S'],
    fontWeight: 'bolder',
    lineHeight: 'interactive',
    marginTop: 0,
    marginBottom: 3
  },
  interactiveXS700: {
    color: 'interactive',
    fontSize: headings['XS'],
    fontWeight: 'bolder',
    lineHeight: 'interactive',
    marginTop: 0,
    marginBottom: '12px'
  }
};

const textStyles = {
  ...paragraphStyles,
  ...labelStyles,
  ...interactiveStyles
};

export default textStyles;
