import colors from '../colors';

export enum ButtonSizes {
  small = 'small',
  medium = 'medium',
  large = 'large'
}

export enum ButtonVariants {
  primary = 'primary',
  secondary = 'secondary',
  primaryAlternate = 'primaryAlternate',
  secondaryAlternate = 'secondaryAlternate'
}

const buttonShared = {
  cursor: 'pointer',
  textDecoration: 'none',
  fontSize: 'inherit',
  lineHeight: 1,
  transition: 'transform 0.15s ease-out',
  fontWeight: 'bold'
};

const chart = {
  ...buttonShared,
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
  borderRadius: '4px',
  outline: 'none',
  primary: {
    color: colors.white,
    backgroundColor: colors.orange[45],
    border: `1px solid ${colors.orange[45]}`,
    boxShadow: `4px 4px 0 0 ${colors.coolGrey[10]}`,
    '&:hover': {
      color: colors.white,
      backgroundColor: colors.orange[80],
      border: `1px solid ${colors.orange[45]}`
    },
    '&:focus': {
      color: colors.white,
      backgroundColor: colors.orange[80],
      border: `2px solid ${colors.orange[45]}`
    },
    '&:active': {
      color: colors.white,
      backgroundColor: colors.orange[80],
      border: `1px solid ${colors.orange[45]}`
    },
    '&:disabled': {
      color: colors.white,
      backgroundColor: colors.orange[45],
      border: `1px solid ${colors.orange[45]}`,
      boxShadow: 'none',
      cursor: 'default',
      opacity: '0.35'
    }
  },
  secondary: {
    color: colors.coolGrey[100],
    backgroundColor: colors.white,
    border: `1px solid ${colors.coolGrey[100]}`,
    '&:hover': {
      color: colors.coolGrey[100],
      backgroundColor: colors.coolGrey[5],
      border: `1px solid ${colors.coolGrey[100]}`
    },
    '&:focus': {
      color: colors.coolGrey[100],
      backgroundColor: colors.coolGrey[5],
      border: `2px solid ${colors.orange[45]}`
    },
    '&:active': {
      color: colors.white,
      backgroundColor: colors.coolGrey[100],
      border: `1px solid ${colors.orange[45]}`
    },
    '&:disabled': {
      color: colors.coolGrey[100],
      backgroundColor: colors.white,
      border: `1px solid ${colors.coolGrey[100]}`,
      boxShadow: 'none',
      cursor: 'default',
      opacity: '0.35'
    }
  },
  primaryAlternate: {
    color: colors.white,
    backgroundColor: colors.indigo[60],
    border: `1px solid ${colors.indigo[60]}`,
    boxShadow: `4px 4px 0 0 ${colors.coolGrey[10]}`,
    '&:hover': {
      color: colors.white,
      backgroundColor: colors.indigo[90],
      border: `1px solid ${colors.indigo[60]}`
    },
    '&:focus': {
      color: colors.white,
      backgroundColor: colors.indigo[90],
      border: `2px solid ${colors.indigo[60]}`
    },
    '&:active': {
      color: colors.white,
      backgroundColor: colors.coolGrey[100],
      border: `1px solid ${colors.indigo[60]}`
    },
    '&:disabled': {
      color: colors.white,
      backgroundColor: colors.indigo[60],
      border: `1px solid ${colors.indigo[60]}`,
      boxShadow: 'none',
      cursor: 'default',
      opacity: '0.35'
    }
  },
  secondaryAlternate: {
    color: colors.coolGrey[100],
    backgroundColor: colors.white,
    border: `1px solid ${colors.coolGrey[100]}`,
    '&:hover': {
      color: colors.coolGrey[100],
      backgroundColor: colors.coolGrey[5],
      border: `1px solid ${colors.coolGrey[100]}`
    },
    '&:focus': {
      color: colors.coolGrey[100],
      backgroundColor: colors.coolGrey[5],
      border: `2px solid ${colors.indigo[60]}`
    },
    '&:active': {
      color: colors.white,
      backgroundColor: colors.coolGrey[100],
      border: `1px solid ${colors.indigo[60]}`
    },
    '&:disabled': {
      color: colors.coolGrey[100],
      backgroundColor: colors.white,
      border: `1px solid ${colors.coolGrey[100]}`,
      boxShadow: 'none',
      cursor: 'default',
      opacity: '0.35'
    }
  }
};

const co = {
  ...buttonShared,
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
  borderRadius: '4px',
  outline: 'none',
  primary: {
    color: colors.white,
    backgroundColor: colors.coolGrey[100],
    border: `1px solid ${colors.coolGrey[100]}`,
    boxShadow: `4px 4px 0 0 ${colors.coolGrey[10]}`,
    '&:hover': {
      color: colors.white,
      backgroundColor: colors.coolGrey[70],
      border: `1px solid ${colors.coolGrey[100]}`
    },
    '&:focus': {
      color: colors.white,
      backgroundColor: colors.coolGrey[70],
      border: `2px solid ${colors.blue[60]}`
    },
    '&:active': {
      color: colors.white,
      backgroundColor: colors.coolGrey[100],
      border: `1px solid ${colors.blue[60]}`
    },
    '&:disabled': {
      color: colors.white,
      backgroundColor: colors.coolGrey[100],
      border: `1px solid ${colors.coolGrey[100]}`,
      boxShadow: 'none',
      cursor: 'default',
      opacity: '0.35'
    }
  },
  secondary: {
    color: colors.coolGrey[100],
    backgroundColor: colors.white,
    border: `1px solid ${colors.coolGrey[100]}`,
    '&:hover': {
      color: colors.coolGrey[100],
      backgroundColor: colors.coolGrey[5],
      border: `1px solid ${colors.coolGrey[100]}`
    },
    '&:focus': {
      color: colors.coolGrey[100],
      backgroundColor: colors.coolGrey[5],
      border: `2px solid ${colors.blue[60]}`
    },
    '&:active': {
      color: colors.white,
      backgroundColor: colors.coolGrey[100],
      border: `1px solid ${colors.blue[60]}`
    },
    '&:disabled': {
      color: colors.coolGrey[100],
      backgroundColor: colors.white,
      border: `1px solid ${colors.coolGrey[100]}`,
      boxShadow: 'none',
      cursor: 'default',
      opacity: '0.35'
    }
  },
  primaryAlternate: {
    color: colors.white,
    backgroundColor: colors.blue[60],
    border: `1px solid ${colors.blue[60]}`,
    boxShadow: `4px 4px 0 0 ${colors.coolGrey[10]}`,
    '&:hover': {
      color: colors.white,
      backgroundColor: colors.blue[90],
      border: `1px solid ${colors.blue[60]}`
    },
    '&:focus': {
      color: colors.white,
      backgroundColor: colors.blue[90],
      border: `2px solid ${colors.blue[60]}`
    },
    '&:active': {
      color: colors.white,
      backgroundColor: colors.coolGrey[100],
      border: `1px solid ${colors.blue[60]}`
    },
    '&:disabled': {
      color: colors.white,
      backgroundColor: colors.blue[60],
      border: `1px solid ${colors.blue[60]}`,
      boxShadow: 'none',
      cursor: 'default',
      opacity: '0.35'
    }
  },
  secondaryAlternate: {
    color: colors.coolGrey[100],
    backgroundColor: colors.white,
    border: `1px solid ${colors.coolGrey[100]}`,
    '&:hover': {
      color: colors.coolGrey[100],
      backgroundColor: colors.coolGrey[5],
      border: `1px solid ${colors.coolGrey[100]}`
    },
    '&:focus': {
      color: colors.coolGrey[100],
      backgroundColor: colors.coolGrey[5],
      border: `2px solid ${colors.blue[60]}`
    },
    '&:active': {
      color: colors.white,
      backgroundColor: colors.coolGrey[100],
      border: `1px solid ${colors.blue[60]}`
    },
    '&:disabled': {
      color: colors.coolGrey[100],
      backgroundColor: colors.white,
      border: `1px solid ${colors.coolGrey[100]}`,
      boxShadow: 'none',
      cursor: 'default',
      opacity: '0.35'
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
    '&:hover': {
      color: colors.indigo[80],
      backgroundColor: colors.indigo[20],
      border: `1px solid ${colors.indigo[70]}`
    },
    '&:active': {
      color: colors.indigo[80],
      backgroundColor: colors.indigo[10],
      border: `1px solid ${colors.coolGrey[80]}`
    }
  },
  secondary: {
    color: colors.coolGrey[90],
    border: `1px solid ${colors.indigo[70]}`,
    backgroundColor: colors.white,
    '&:hover': {
      color: colors.indigo[80],
      backgroundColor: colors.indigo[10],
      border: `1px solid ${colors.indigo[80]}`
    },
    '&:active': {}
  }
};

const press = {
  ...buttonShared,
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
  borderRadius: '4px',
  outline: 'none',
  primary: {
    color: colors.white,
    backgroundColor: colors.teal[30],
    border: `1px solid ${colors.teal[30]}`,
    boxShadow: `4px 4px 0 0 ${colors.coolGrey[10]}`,
    '&:hover': {
      color: colors.white,
      backgroundColor: colors.orange[80],
      border: `1px solid ${colors.teal[30]}`
    },
    '&:focus': {
      color: colors.white,
      backgroundColor: colors.orange[80],
      border: `2px solid ${colors.teal[30]}`
    },
    '&:active': {
      color: colors.white,
      backgroundColor: colors.orange[80],
      border: `1px solid ${colors.teal[30]}`
    },
    '&:disabled': {
      color: colors.white,
      backgroundColor: colors.teal[30],
      border: `1px solid ${colors.teal[30]}`,
      boxShadow: 'none',
      cursor: 'default',
      opacity: '0.35'
    }
  },
  secondary: {
    color: colors.coolGrey[100],
    backgroundColor: colors.white,
    border: `1px solid ${colors.coolGrey[100]}`,
    '&:hover': {
      color: colors.coolGrey[100],
      backgroundColor: colors.coolGrey[5],
      border: `1px solid ${colors.coolGrey[100]}`
    },
    '&:focus': {
      color: colors.coolGrey[100],
      backgroundColor: colors.coolGrey[5],
      border: `2px solid ${colors.teal[30]}`
    },
    '&:active': {
      color: colors.white,
      backgroundColor: colors.coolGrey[100],
      border: `1px solid ${colors.teal[30]}`
    },
    '&:disabled': {
      color: colors.coolGrey[100],
      backgroundColor: colors.white,
      border: `1px solid ${colors.coolGrey[100]}`,
      boxShadow: 'none',
      cursor: 'default',
      opacity: '0.35'
    }
  },
  primaryAlternate: {
    color: colors.white,
    backgroundColor: colors.indigo[60],
    border: `1px solid ${colors.indigo[60]}`,
    boxShadow: `4px 4px 0 0 ${colors.coolGrey[10]}`,
    '&:hover': {
      color: colors.white,
      backgroundColor: colors.indigo[90],
      border: `1px solid ${colors.indigo[60]}`
    },
    '&:focus': {
      color: colors.white,
      backgroundColor: colors.indigo[90],
      border: `2px solid ${colors.indigo[60]}`
    },
    '&:active': {
      color: colors.white,
      backgroundColor: colors.coolGrey[100],
      border: `1px solid ${colors.indigo[60]}`
    },
    '&:disabled': {
      color: colors.white,
      backgroundColor: colors.indigo[60],
      border: `1px solid ${colors.indigo[60]}`,
      boxShadow: 'none',
      cursor: 'default',
      opacity: '0.35'
    }
  },
  secondaryAlternate: {
    color: colors.coolGrey[100],
    backgroundColor: colors.white,
    border: `1px solid ${colors.coolGrey[100]}`,
    '&:hover': {
      color: colors.coolGrey[100],
      backgroundColor: colors.coolGrey[5],
      border: `1px solid ${colors.coolGrey[100]}`
    },
    '&:focus': {
      color: colors.coolGrey[100],
      backgroundColor: colors.coolGrey[5],
      border: `2px solid ${colors.indigo[60]}`
    },
    '&:active': {
      color: colors.white,
      backgroundColor: colors.coolGrey[100],
      border: `1px solid ${colors.indigo[60]}`
    },
    '&:disabled': {
      color: colors.coolGrey[100],
      backgroundColor: colors.white,
      border: `1px solid ${colors.coolGrey[100]}`,
      boxShadow: 'none',
      cursor: 'default',
      opacity: '0.35'
    }
  }
};

const spark = {
  ...buttonShared,
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
  borderRadius: '4px',
  outline: 'none',
  primary: {
    color: colors.white,
    backgroundColor: colors.red[50],
    border: `1px solid ${colors.red[50]}`,
    boxShadow: `4px 4px 0 0 ${colors.coolGrey[10]}`,
    '&:hover': {
      color: colors.white,
      backgroundColor: colors.red[80],
      border: `1px solid ${colors.red[50]}`
    },
    '&:focus': {
      color: colors.white,
      backgroundColor: colors.red[80],
      border: `2px solid ${colors.red[50]}`
    },
    '&:active': {
      color: colors.white,
      backgroundColor: colors.coolGrey[100],
      border: `1px solid ${colors.red[50]}`
    },
    '&:disabled': {
      color: colors.white,
      backgroundColor: colors.red[50],
      border: `1px solid ${colors.red[50]}`,
      boxShadow: 'none',
      cursor: 'default',
      opacity: '0.35'
    }
  },
  secondary: {
    color: colors.coolGrey[100],
    backgroundColor: colors.white,
    border: `1px solid ${colors.coolGrey[100]}`,
    '&:hover': {
      color: colors.coolGrey[100],
      backgroundColor: colors.coolGrey[5],
      border: `1px solid ${colors.coolGrey[100]}`
    },
    '&:focus': {
      color: colors.coolGrey[100],
      backgroundColor: colors.coolGrey[5],
      border: `2px solid ${colors.red[50]}`
    },
    '&:active': {
      color: colors.white,
      backgroundColor: colors.coolGrey[100],
      border: `1px solid ${colors.red[50]}`
    },
    '&:disabled': {
      color: colors.coolGrey[100],
      backgroundColor: colors.white,
      border: `1px solid ${colors.coolGrey[100]}`,
      boxShadow: 'none',
      cursor: 'default',
      opacity: '0.35'
    }
  },
  primaryAlternate: {
    color: colors.white,
    backgroundColor: colors.indigo[90],
    border: `1px solid ${colors.indigo[90]}`,
    boxShadow: `4px 4px 0 0 ${colors.coolGrey[10]}`,
    '&:hover': {
      color: colors.white,
      backgroundColor: colors.indigo[60],
      border: `1px solid ${colors.indigo[90]}`
    },
    '&:focus': {
      color: colors.white,
      backgroundColor: colors.indigo[60],
      border: `2px solid ${colors.indigo[90]}`
    },
    '&:active': {
      color: colors.white,
      backgroundColor: colors.coolGrey[100],
      border: `1px solid ${colors.indigo[60]}`
    },
    '&:disabled': {
      color: colors.white,
      backgroundColor: colors.indigo[90],
      border: `1px solid ${colors.indigo[90]}`,
      boxShadow: 'none',
      cursor: 'default',
      opacity: '0.35'
    }
  },
  secondaryAlternate: {
    color: colors.coolGrey[100],
    backgroundColor: colors.white,
    border: `1px solid ${colors.coolGrey[100]}`,
    '&:hover': {
      color: colors.coolGrey[100],
      backgroundColor: colors.coolGrey[5],
      border: `1px solid ${colors.coolGrey[100]}`
    },
    '&:focus': {
      color: colors.coolGrey[100],
      backgroundColor: colors.coolGrey[5],
      border: `2px solid ${colors.indigo[60]}`
    },
    '&:active': {
      color: colors.white,
      backgroundColor: colors.coolGrey[100],
      border: `1px solid ${colors.indigo[60]}`
    },
    '&:disabled': {
      color: colors.coolGrey[100],
      backgroundColor: colors.white,
      border: `1px solid ${colors.coolGrey[100]}`,
      boxShadow: 'none',
      cursor: 'default',
      opacity: '0.35'
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
