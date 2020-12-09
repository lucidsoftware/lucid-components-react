import colors from '../colors';

const navbar = {
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

export default navbar;
