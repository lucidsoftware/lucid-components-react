import button from './button';
import item from './item';
import panel from './panel';

const base = {
  default: {
    flex: '0 1 100%',
    maxWidth: '100%'
  }
};

const accordion = {
  ...base,
  button,
  item,
  panel
};

export default accordion;
