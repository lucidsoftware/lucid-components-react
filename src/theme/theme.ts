import * as colors from './colors';
import { base } from './base';

const theme = {
  ...base,
  colors: {
    text: colors.blueSteel,
    background: colors.white,
    heading: colors.blueSteel,

    primary: colors.primary,
    secondary: colors.blueSteel,
    accent: colors.accent,
    muted: colors.muted,

    grey: colors.grey,
    white: colors.white,
    black: colors.black,

    disabled: colors.grey,
    disabledBorder: colors.lightGrey
  },
  navbar: {
    background: '#FFF',
    collapseAt: '1000px',
    minHeight: '40px',
    logoHeight: '25px',
    itemSpacing: '1rem',
    padding: '10px',
    borderColor: 'lightgrey',
    borderWidth: '2px',
    borderOffset: '-10px',
    dropdown: {
      padding: '.5rem 1.5rem',
      mobilePadding: '.5rem',
      background: '#FFF',
      backgroundHover: '#DDD',
      border: `1px solid ${colors.blueSteel}`,
      borderRadius: '3px'
    }
  },
  forms: {
    select: {
      backgroundColor: '#FFF',
      border: '1px solid #a7a9ac',
      borderRadius: '5px',
      color: colors.white,
      floatingLabel: {
        paddingTop: '1.2em'
      },
      focus: {
        borderColor: '#636aff',
        labelColor: '#636aff'
      },
      fontSize: '1em',
      fontSizeSmall: '.75em',
      height: '50px',
      outline: 'none',
      padding: '.3375rem .75rem'
    }
  },
  breadcrumb: {
    color: colors.blueSteel,
    inverseColor: colors.white,
    margin: '0 6px',
    crumbOpacity: 0.45
  },
  buttons: {
    fontSize: '1em',
    lineHeight: '1',
    boxShadow: '2px 2px 0 0 rgba(0, 0, 0, .2)',
    hoverBoxShadow: 'none',
    border: '1px solid #000',
    transition: 'transform 0.15 ease-out',
    sizes: {
      small: {
        padding: '6px 24px'
      },
      regular: {
        padding: '10px 24px'
      },
      large: {
        padding: '14px 24px'
      }
    },
    primary: {
      color: '#FFF',
      border: '1px solid #636AFF',
      backgroundColor: '#636AFF',
      hoverColor: '#4247aa',
      hoverBackgroundColor: '#B6B9FF',
      hoverBorder: '1px solid #636AFF',
      activeColor: '#4247aa',
      activeBackgroundColor: '#B6B9FF',
      activeBorder: '1px solid #636AFF',
      activeTransform: 0.95
    },
    secondary: {
      color: '#636AFF',
      border: '1px solid #636AFF',
      backgroundColor: '#FFF',
      hoverColor: '#4247aa',
      hoverBackgroundColor: '#B6B9FF',
      hoverBorder: '1px solid #636AFF',
      activeTransform: 0.95
    }
  },
  card: {
    padding: '40px',
    raised: {
      boxShadow: '20px 20px 0 0 rgba(0,0,0,.3)'
    },
    interactive: {
      boxShadow: '10px 10px 0 0 rgba(0,0,0,.2)',
      boxShadowHover: '20px 20px 0 0 rgba(0,0,0,.3)'
    }
  },
  links: {
    default: {
      default: {
        color: colors.blueSteel,
        hover: colors.blueSteel,
        disabled: colors.blueSteel
      },
      inverse: {
        color: colors.white,
        hover: colors.white,
        disabled: colors.white
      }
    },
    primary: {
      default: {
        color: colors.primary,
        hover: colors.primary,
        disabled: colors.primary
      },
      inverse: {
        color: colors.white,
        hover: colors.white,
        disabled: colors.white
      }
    },
    secondary: {
      default: {
        color: colors.primary,
        hover: colors.primary,
        disabled: colors.primary
      },
      inverse: {
        color: colors.white,
        hover: colors.white,
        disabled: colors.white
      }
    }
  },
  paper: {
    default: {
      background: 'white',
      borderRadius: '5px',
      border: '1px solid lightgrey',
      boxShadow: '10px 10px 0 0 rgba(0, 0, 0, .3)'
    },
    raised: {
      background: 'white',
      borderRadius: '5px',
      border: '1px solid lightgrey',
      boxShadow: '20px 20px 0 0 rgba(0, 0, 0, .3)'
    }
  },
  headings: {
    heading: {
      color: 'heading'
    },
    subheading: {
      color: '#555555'
    }
  }
};

type Theme = typeof theme;
export interface ThemeProps {
  theme: Theme;
}

export default theme;
