import colors from '../colors';

const card = {
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

export default card;
