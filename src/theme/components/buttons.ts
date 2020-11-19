// import * as CSS from 'csstype';

import colors from '../colors';
// import { ProductModes } from '../theme';

export enum ButtonSizes {
  small = 'small',
  medium = 'medium',
  large = 'large'
}

export enum ButtonVariants {
  primary = 'primary',
  secondary = 'secondary'
  // primaryAlternate = 'primaryAlternate',
  // secondaryAlternate = 'secondaryAlternate'
}

const buttonShared = {
  cursor: 'pointer',
  textDecoration: 'none',
  fontSize: 'inherit',
  lineHeight: 1,
  transition: 'transform 0.15s ease-out',
  fontWeight: 'bold',
  ':disabled': {
    boxShadow: 'none'
  },
  ':hover': {
    boxShadow: 'none'
  }
};

// '&:hover, &:focus': {
//   label: 'buttonBaseHover',
//   color: key === 'default' ? theme?.colors.black : theme?.buttons[key].hoverColor,
//   backgroundColor: key === 'default' ? theme?.colors.grey : theme?.buttons[key].hoverBackgroundColor,
//   border: key === 'default' ? theme?.buttons.border : theme?.buttons[key].hoverBorder,
//   boxShadow: key === 'default' ? theme?.buttons.hoverBoxShadow : theme?.buttons.hoverBoxShadow,
//   cursor: 'pointer',
//   textDecoration: 'none'
// }

const chart = {
  ...buttonShared,
  boxShadow: '2px 2px 0 0 rgba(0, 0, 0, 0.2)',
  border: `1px solid ${colors.black}`,
  padding: '2px 4px',
  sizes: {
    small: {
      padding: '8px 16px'
    },
    medium: {
      padding: '12px 24px'
    },
    large: {
      padding: '16px 32px'
    }
  },
  ':disabled': {
    color: colors.coolGrey[40],
    backgroundColor: colors.coolGrey[5],
    border: `1px solid ${colors.coolGrey[40]}`
  },
  primary: {
    color: colors.white,
    border: `1px solid ${colors.indigo[60]}`,
    backgroundColor: colors.indigo[60],
    ':hover': {
      color: colors.indigo[80],
      backgroundColor: colors.indigo[10],
      border: `1px solid ${colors.indigo[80]}`
    },
    ':active': {
      color: colors.indigo[80],
      backgroundColor: colors.indigo[20],
      border: `1px solid ${colors.coolGrey[90]}`,
      transitionDelay: '0.95'
    }
  },
  secondary: {
    color: colors.coolGrey[100],
    border: `1px solid ${colors.indigo[60]}`,
    backgroundColor: colors.white,
    ':hover': {
      color: colors.indigo[80],
      backgroundColor: colors.indigo[10],
      border: `1px solid ${colors.indigo[80]}`
    },
    ':active': {
      transitionDelay: '0.95'
    }
  }
};

const co = {
  ...buttonShared,
  boxShadow: '2px 2px 0 0 rgba(0, 0, 0, 0.2)',
  border: `1px solid ${colors.coolGrey[100]}`,
  sizes: {
    small: {
      padding: '6px 24px'
    },
    medium: {
      padding: '10px 24px'
    },
    large: {
      padding: '14px 24px'
    }
  },
  primary: {
    color: colors.white,
    border: `1px solid ${colors.coolGrey[100]}`,
    backgroundColor: colors.coolGrey[100],
    ':hover': {
      color: colors.white,
      backgroundColor: colors.coolGrey[80],
      border: `1px solid ${colors.coolGrey[100]}`
    },
    ':active': {
      color: colors.white,
      backgroundColor: colors.coolGrey[100],
      border: `1px solid ${colors.blue[60]}`,
      transitionDelay: '0.95'
    }
  },
  secondary: {
    color: colors.white,
    border: `1px solid ${colors.blue[60]}`,
    backgroundColor: colors.blue[60],
    ':hover': {
      color: colors.white,
      backgroundColor: colors.blue[80],
      border: `1px solid ${colors.blue[80]}`
    },
    ':active': {
      color: colors.white[80],
      backgroundColor: colors.blue[80],
      border: `1px solid ${colors.blue[80]}`
    }
  },
  primaryAlternate: {
    color: colors.white,
    border: `1px solid ${colors.indigo[90]}`,
    backgroundColor: colors.indigo[90],
    ':hover': {
      color: colors.white,
      backgroundColor: colors.indigo[60],
      border: `1px solid ${colors.indigo[90]}`
    },
    ':active': {
      color: colors.white[80],
      backgroundColor: colors.coolGrey[100],
      border: `1px solid ${colors.coolGrey[100]}`
    }
  }
};

const edu = {
  ...buttonShared,
  boxShadow: '2px 2px 0 0 rgba(0, 0, 0, 0.2)',
  border: `1px solid ${colors.black}`,
  sizes: {
    small: {
      padding: '6px 24px'
    },
    medium: {
      padding: '10px 24px'
    },
    large: {
      padding: '14px 24px'
    }
  },
  primary: {
    color: colors.white,
    border: `1px solid ${colors.indigo[70]}`,
    backgroundColor: colors.indigo[70],
    ':hover': {
      color: colors.indigo[80],
      backgroundColor: colors.indigo[20],
      border: `1px solid ${colors.indigo[70]}`
    },
    ':active': {
      color: colors.indigo[80],
      backgroundColor: colors.indigo[10],
      border: `1px solid ${colors.coolGrey[80]}`
    }
  },
  secondary: {
    color: colors.coolGrey[90],
    border: `1px solid ${colors.indigo[70]}`,
    backgroundColor: colors.white,
    ':hover': {
      color: colors.indigo[80],
      backgroundColor: colors.indigo[10],
      border: `1px solid ${colors.indigo[80]}`
    },
    ':active': {}
  }
};

const press = {
  ...buttonShared,
  fontSize: '1.125rem',
  boxShadow: '2px 2px 0 0 rgba(0, 0, 0, 0.2)',
  border: `1px solid ${colors.black}`,
  sizes: {
    small: {
      padding: '6px 24px'
    },
    medium: {
      padding: '8px 32px'
    },
    large: {
      padding: '14px 24px'
    }
  },
  primary: {
    color: colors.white,
    border: `1px solid ${colors.teal[30]}`,
    backgroundColor: colors.teal[30],
    ':hover': {
      color: colors.teal[50],
      backgroundColor: colors.teal[5],
      border: `1px solid ${colors.teal[50]}`
    },
    ':active': {
      color: colors.teal[50],
      backgroundColor: colors.teal[5],
      border: `1px solid ${colors.teal[50]}`
    }
  },
  secondary: {
    color: colors.coolGrey[100],
    border: `1px solid ${colors.teal[30]}`,
    backgroundColor: colors.white,
    ':hover': {
      color: colors.teal[50],
      backgroundColor: colors.teal[5],
      border: `1px solid ${colors.teal[50]}`
    },
    ':active': {}
  }
};

const spark = {
  ...buttonShared,
  boxShadow: '4px 4px 0 0 rgba(0, 0, 0, 0.2)',
  border: `1px solid ${colors.red[50]}`,
  sizes: {
    small: {
      padding: '12px 24px'
    },
    medium: {
      padding: '15px 32px'
    },
    large: {
      padding: '16px 40px'
    }
  },
  primary: {
    color: colors.white,
    border: `1px solid ${colors.red[50]}`,
    backgroundColor: colors.red[50],
    ':hover': {
      color: colors.white,
      backgroundColor: colors.red[80],
      border: `1px solid ${colors.red[50]}`
    },
    ':active': {
      color: colors.white,
      backgroundColor: colors.coolGrey[100],
      border: `1px solid ${colors.red[50]}`
    }
  },
  secondary: {
    color: colors.white,
    border: `1px solid ${colors.indigo[90]}`,
    backgroundColor: colors.indigo[90],
    ':hover': {
      color: colors.white,
      backgroundColor: colors.indigo[60],
      border: `1px solid ${colors.indigo[90]}`
    },
    ':active': {
      color: colors.white,
      backgroundColor: colors.coolGrey[100],
      border: `1px solid ${colors.indigo[60]}`
    }
  }
};

const buttons = {
  ...buttonShared,
  ...co,
  products: {
    chart,
    co,
    edu,
    press,
    spark
  }
};

export default buttons;
