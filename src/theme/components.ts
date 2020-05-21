import * as colors from './colors';

export const navbar = {
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
};
export const accordion = {
  button: {
    default: {
      paddingTop: 3,
      paddingBottom: 3,
      paddingLeft: 2,
      paddingRight: 2,
      borderBottomWidth: '1px',
      borderBottomColor: 'lightgrey',
      borderBottomStyle: 'solid',
      '&:hover, &:focus': {
        borderBottomColor: 'primary'
      },
      '&[aria-expanded="true"]': {
        borderBottomColor: 'lightgrey'
      }
    },
    inverse: {
      paddingTop: 3,
      paddingBottom: 3,
      paddingLeft: 2,
      paddingRight: 2,
      borderBottomWidth: '1px',
      borderBottomColor: '#5358D5',
      borderBottomStyle: 'solid',
      '&:hover, &:focus': {
        borderBottomColor: 'primary',
        backgroundColor: '#323580'
      },
      '&[aria-expanded="true"]': {
        borderBottomColor: 'white'
      },
      backgroundColor: '#4247aa',
      color: 'white'
    }
  },
  panel: {
    default: {
      backgroundColor: 'hsl(0, 0%, 96%)',
      paddingTop: 2,
      paddingRight: 4,
      paddingBottom: 2,
      paddingLeft: 4,
      borderBottomWidth: '1px',
      borderBottomColor: 'primary',
      borderBottomStyle: 'solid',
      color: 'black'
    },
    inverse: {
      paddingTop: 2,
      paddingRight: 4,
      paddingBottom: 2,
      paddingLeft: 4,
      borderBottomWidth: '1px',
      borderBottomColor: 'primary',
      borderBottomStyle: 'solid',
      backgroundColor: 'primary',
      color: 'white'
    }
  }
};
export const forms = {
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
};
export const breadcrumb = {
  color: colors.blueSteel,
  inverseColor: colors.white,
  margin: '0 6px',
  crumbOpacity: 0.45
};
export const buttons = {
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
};
export const card = {
  default: {
    background: 'white',
    flexDirection: 'row',
    borderRadius: 'card',
    border: `1px solid grey`,
    borderColor: 'grey'
  },
  interactive: {
    background: 'white',
    flexDirection: 'row',
    borderRadius: 'card',
    border: `1px solid grey`,
    borderColor: 'grey',

    boxShadow: '10',
    transition: `box-shadow .3s ease, border-color .3s ease, transform .15s ease-out`,
    cursor: 'pointer',
    '&:hover, &:focus': {
      textDecoration: 'none',
      boxShadow: '20',
      borderColor: 'primary'
    },
    '&:focus': {
      outline: 'none'
    },
    '&:active': {
      transform: 'scale(.97)',
      boxShadow: 'none'
    }
  },
  raised: {
    background: 'white',
    flexDirection: 'row',
    borderRadius: 'card',
    border: `1px solid grey`,
    borderColor: 'grey',
    boxShadow: '20'
  }
};
export const links = {
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
};
export const paper = {
  default: {
    background: 'white',
    border: `1px solid lightgrey`,
    borderColor: 'grey',
    borderRadius: `paper`,
    padding: '5'
  },
  raised: {
    background: 'white',
    border: `1px solid lightgrey`,
    borderColor: 'grey',
    borderRadius: `paper`,
    boxShadow: '20',
    padding: '5'
  }
};
export const headings = {
  heading: {
    color: 'heading'
  },
  subheading: {
    color: '#555555'
  }
};
