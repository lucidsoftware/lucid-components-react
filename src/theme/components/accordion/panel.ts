import colors from '../../colors';

const base = {
  flex: '0 1 100%',
  maxWidth: '100%'
};

const panel = {
  default: {
    ...base,
    backgroundColor: colors.primary,
    paddingTop: 2,
    paddingRight: 4,
    paddingBottom: 2,
    paddingLeft: 4
  },
  inverse: {
    ...base,
    backgroundColor: colors.primary,
    paddingTop: 2,
    paddingRight: 4,
    paddingBottom: 2,
    paddingLeft: 4,
    color: 'white'
  }
};

export default panel;
