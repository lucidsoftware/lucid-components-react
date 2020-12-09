import colors from '../colors';

const links = {
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

export default links;
