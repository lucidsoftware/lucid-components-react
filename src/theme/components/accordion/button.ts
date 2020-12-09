import space from '../../space';
import colors from '../../colors';

const button = {
  default: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: colors.white,
    cursor: 'pointer',
    paddingTop: space.s8,
    paddingBottom: space.s8,
    paddingLeft: space.s4,
    paddingRight: space.s4,
    '&:hover, &:focus': {
      borderBottomColor: colors.primary,
      outline: 'none'
    },
    '&[aria-expanded="true"]': {
      borderBottomColor: 'lightgrey',
      '& > .accordionButtonArrow': {
        transform: 'rotate(90deg)'
      }
    }
  },
  inverse: {
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 2,
    paddingRight: 2,
    borderBottomWidth: '1px',
    borderBottomColor: 'indigo.60',
    borderBottomStyle: 'solid',
    '&:hover, &:focus': {
      borderBottomColor: colors.primary,
      backgroundColor: colors.indigo[90]
    },
    '&[aria-expanded="true"]': {
      borderBottomColor: 'white'
    },
    backgroundColor: colors.indigo[70],
    color: 'white'
  }
};

export default button;
