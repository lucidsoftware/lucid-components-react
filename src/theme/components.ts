// import * as colors from './colors';

// export const navbar = {
//   background: '#FFF',
//   collapseAt: '1000px',
//   minHeight: '40px',
//   logoHeight: '25px',
//   itemSpacing: '1rem',
//   padding: '10px',
//   borderColor: 'lightgrey',
//   borderWidth: '2px',
//   borderOffset: '-10px',
//   dropdown: {
//     padding: '0.5rem 1.5rem',
//     mobilePadding: '0.5rem',
//     background: '#FFFFFF',
//     backgroundHover: '#DDDDDD',
//     border: `1px solid ${colors.blueSteel}`,
//     borderRadius: '3px'
//   }
// };

// export const accordion = {
//   button: {
//     default: {
//       paddingTop: 3,
//       paddingBottom: 3,
//       paddingLeft: 2,
//       paddingRight: 2,
//       borderBottomWidth: '1px',
//       borderBottomColor: 'lightgrey',
//       borderBottomStyle: 'solid',
//       '&:hover, &:focus': {
//         borderBottomColor: 'primary'
//       },
//       '&[aria-expanded="true"]': {
//         borderBottomColor: 'lightgrey'
//       }
//     },
//     inverse: {
//       paddingTop: 3,
//       paddingBottom: 3,
//       paddingLeft: 2,
//       paddingRight: 2,
//       borderBottomWidth: '1px',
//       borderBottomColor: '#5358D5',
//       borderBottomStyle: 'solid',
//       '&:hover, &:focus': {
//         borderBottomColor: 'primary',
//         backgroundColor: '#323580'
//       },
//       '&[aria-expanded="true"]': {
//         borderBottomColor: 'white'
//       },
//       backgroundColor: '#4247AA',
//       color: 'white'
//     }
//   },
//   panel: {
//     default: {
//       backgroundColor: 'hsl(0, 0%, 96%)',
//       paddingTop: 2,
//       paddingRight: 4,
//       paddingBottom: 2,
//       paddingLeft: 4,
//       borderBottomWidth: '1px',
//       borderBottomColor: 'primary',
//       borderBottomStyle: 'solid',
//       color: 'black'
//     },
//     inverse: {
//       paddingTop: 2,
//       paddingRight: 4,
//       paddingBottom: 2,
//       paddingLeft: 4,
//       borderBottomWidth: '1px',
//       borderBottomColor: 'primary',
//       borderBottomStyle: 'solid',
//       backgroundColor: 'primary',
//       color: 'white'
//     }
//   }
// };

// export const forms = {
//   select: {
//     backgroundColor: '#FFFFFF',
//     border: '1px solid #A7A9AC',
//     borderRadius: '5px',
//     color: colors.white,
//     floatingLabel: {
//       paddingTop: '1.2em'
//     },
//     focus: {
//       borderColor: '#636AFF',
//       labelColor: '#636AFF'
//     },
//     fontSize: '1em',
//     fontSizeSmall: '0.75em',
//     height: '50px',
//     outline: 'none',
//     padding: '0.3375rem 0.75rem'
//   }
// };

// export const breadcrumb = {
//   color: colors.blueSteel,
//   inverseColor: colors.white,
//   margin: '0 6px',
//   crumbOpacity: 0.45
// };

// export const buttons = {
//   fontSize: '1em',
//   lineHeight: '1',
//   boxShadow: '2px 2px 0 0 rgba(0, 0, 0, 0.2)',
//   hoverBoxShadow: 'none',
//   disabledBoxShadow: 'none',
//   border: '1px solid #000',
//   transition: 'transform 0.15s ease-out',
//   sizes: {
//     small: {
//       padding: '6px 24px'
//     },
//     regular: {
//       padding: '10px 24px'
//     },
//     large: {
//       padding: '14px 24px'
//     }
//   },
//   primary: {
//     color: '#FFF',
//     border: '1px solid #636AFF',
//     backgroundColor: '#636AFF',
//     hoverColor: '#4247AA',
//     hoverBackgroundColor: '#B6B9FF',
//     hoverBorder: '1px solid #636AFF',
//     activeColor: '#4247AA',
//     activeBackgroundColor: '#B6B9FF',
//     activeBorder: '1px solid #636AFF',
//     activeTransform: 0.95
//   },
//   secondary: {
//     color: '#636AFF',
//     border: '1px solid #636AFF',
//     backgroundColor: '#FFFFFF',
//     hoverColor: '#4247AA',
//     hoverBackgroundColor: '#B6B9FF',
//     hoverBorder: '1px solid #636AFF',
//     activeTransform: 0.95
//   },
//   disabledColor: '#979EA8',
//   disabledBackgroundColor: '#F2F3F5',
//   disabledBorder: '1px solid #979EA8'
// };

// export const card = {
//   default: {
//     background: 'white',
//     flexDirection: 'row',
//     borderRadius: 'card',
//     border: '1px solid grey',
//     borderColor: 'grey'
//   },
//   interactive: {
//     background: 'white',
//     flexDirection: 'row',
//     borderRadius: 'card',
//     border: '1px solid grey',
//     borderColor: 'grey',
//     boxShadow: '10',
//     transition:
//       'box-shadow 0.3s ease, border-color 0.3s ease, transform 0.15s ease-out',
//     cursor: 'pointer',
//     '&:hover, &:focus': {
//       textDecoration: 'none',
//       boxShadow: '20',
//       borderColor: 'primary'
//     },
//     '&:focus': {
//       outline: 'none'
//     },
//     '&:active': {
//       transform: 'scale(0.97)',
//       boxShadow: 'none'
//     }
//   },
//   raised: {
//     background: 'white',
//     flexDirection: 'row',
//     borderRadius: 'card',
//     border: '1px solid grey',
//     borderColor: 'grey',
//     boxShadow: '20'
//   }
// };

// export const links = {
//   default: {
//     default: {
//       color: colors.blueSteel,
//       hover: colors.blueSteel,
//       disabled: colors.blueSteel
//     },
//     inverse: {
//       color: colors.white,
//       hover: colors.white,
//       disabled: colors.white
//     }
//   },
//   primary: {
//     default: {
//       color: colors.primary,
//       hover: colors.primary,
//       disabled: colors.primary
//     },
//     inverse: {
//       color: colors.white,
//       hover: colors.white,
//       disabled: colors.white
//     }
//   },
//   secondary: {
//     default: {
//       color: colors.primary,
//       hover: colors.primary,
//       disabled: colors.primary
//     },
//     inverse: {
//       color: colors.white,
//       hover: colors.white,
//       disabled: colors.white
//     }
//   }
// };

// export const paper = {
//   default: {
//     background: 'white',
//     border: '1px solid lightgrey',
//     borderColor: 'grey',
//     borderRadius: 'paper',
//     padding: '5'
//   },
//   raised: {
//     background: 'white',
//     border: '1px solid lightgrey',
//     borderColor: 'grey',
//     borderRadius: 'paper',
//     boxShadow: '20',
//     padding: '5'
//   }
// };

// export const headings = {
//   heading: {
//     color: 'heading'
//   },
//   subheading: {
//     color: '#555555'
//   }
// };

import colors from './colors';

export const accordion = {
  button: {
    default: {
      paddingTop: 3,
      paddingBottom: 3,
      paddingLeft: 2,
      paddingRight: 2,
      borderBottomWidth: '1px',
      borderBottomColor: 'coolGrey.30',
      borderBottomStyle: 'solid',
      '&:hover, &:focus': {
        borderBottomColor: 'primary'
      },
      '&[aria-expanded="true"]': {
        borderBottomColor: 'coolGrey.30'
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
      backgroundColor: '#4247AA',
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

export const breadcrumb = {
  color: colors.coolGrey[100],
  inverseColor: colors.white,
  margin: '0 6px',
  crumbOpacity: 0.45
};

export const buttons = {
  fontSize: '1rem',
  lineHeight: '1',
  boxShadow: '4px 4px 0 0 rgba(0, 0, 0, 0.2)',
  disabledBoxShadow: 'none',
  border: `1px solid ${colors.red[50]}`,
  transition: 'transform 0.15 ease-out',
  sizes: {
    small: {
      padding: '12px 24px'
    },
    regular: {
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
    hoverColor: colors.red[50],
    hoverBackgroundColor: colors.red[10],
    hoverBorder: `1px solid ${colors.red[30]}`,
    activeColor: colors.red[60],
    activeBackgroundColor: colors.red[20],
    activeBorder: `1px solid ${colors.red[30]}`,
    activeTransform: 0.95
  },
  secondary: {
    color: colors.white,
    border: `1px solid ${colors.indigo[90]}`,
    backgroundColor: colors.indigo[90],
    hoverColor: colors.indigo[90],
    hoverBackgroundColor: colors.white,
    hoverBorder: `1px solid ${colors.indigo[90]}`,
    activeTransform: 0.95
  },
  disabledColor: colors.coolGrey[40],
  disabledBackgroundColor: colors.coolGrey[5],
  disabledBorder: `1px solid ${colors.coolGrey[40]}`
};

export const card = {
  default: {
    background: 'white',
    flexDirection: 'row',
    borderRadius: 'card',
    border: `1px solid ${colors.coolGrey[5]}`,
    borderColor: 'grey'
  },
  interactive: {
    background: 'white',
    flexDirection: 'row',
    borderRadius: 'card',
    border: '1px solid coolGrey.40',
    borderColor: 'coolGrey.40',
    boxShadow: '10',
    transition:
      'box-shadow 0.3s ease, border-color 0.3s ease, transform 0.15s ease-out',
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
      transform: 'scale(0.97)',
      boxShadow: 'none'
    }
  },
  raised: {
    background: 'white',
    flexDirection: 'row',
    borderRadius: 'card',
    border: '1px solid coolGrey.40',
    borderColor: 'coolGrey.40',
    boxShadow: '20'
  }
};

export const forms = {
  select: {
    backgroundColor: 'white',
    border: '1px solid coolGrey.30',
    borderRadius: '5px',
    color: 'white',
    floatingLabel: {
      paddingTop: '1.2em'
    },
    focus: {
      borderColor: 'primary',
      labelColor: 'primary'
    },
    fontSize: '1rem',
    fontSizeSmall: '0.75em',
    height: '50px',
    outline: 'none',
    padding: '0.3375rem 0.75rem'
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

export const links = {
  fontWeight: 500,
  default: {
    default: {
      color: colors.coolGrey[100],
      hover: colors.red[60],
      disabled: colors.coolGrey[50]
    },
    inverse: {
      color: colors.white,
      hover: colors.white,
      disabled: colors.white
    }
  },
  primary: {
    default: {
      color: colors.red[60],
      hover: colors.red[60],
      disabled: colors.coolGrey[50]
    },
    inverse: {
      color: colors.white,
      hover: colors.white,
      disabled: colors.white
    }
  },
  secondary: {
    default: {
      color: colors.red[60],
      hover: colors.red[60],
      disabled: colors.coolGrey[50]
    },
    inverse: {
      color: colors.white,
      hover: colors.white,
      disabled: colors.white
    }
  }
};

export const navbar = {
  background: colors.white,
  collapseAt: '1000px',
  minHeight: '40px',
  logoHeight: '25px',
  itemSpacing: '0.5rem',
  padding: '14px',
  borderColor: colors.coolGrey[10],
  borderWidth: '1px',
  borderOffset: '-14px',
  dropdown: {
    padding: '0.5rem 1.5rem',
    mobilePadding: '0.5rem',
    background: colors.white,
    backgroundHover: colors.coolGrey[5],
    border: `1px solid ${colors.coolGrey[10]}`,
    borderRadius: '3px'
  }
};

export const paper = {
  default: {
    background: 'white',
    border: '1px solid coolGrey.30',
    borderColor: 'coolGrey.40',
    borderRadius: 'paper',
    padding: 6
  },
  raised: {
    background: 'white',
    border: '1px solid coolGrey.30',
    borderColor: 'coolGrey.40',
    borderRadius: 'paper',
    boxShadow: '20',
    padding: 6
  }
};
