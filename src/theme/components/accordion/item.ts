import colors from '../../colors';
import space from '../../space';

const item = {
  default: {
    padding: `${space[5]}px 0`,
    backgroundColor: colors.primary,
    borderTop: `0.5px solid ${colors.coolGrey[30]}`,
    '&:first-of-type': {
      borderTop: `1px solid ${colors.coolGrey[30]}`
    },
    '&:last-of-type': {
      borderBottom: `1px solid ${colors.coolGrey[30]}`
    }
  }
};

export default item;
