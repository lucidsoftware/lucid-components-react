import { withTheme } from 'emotion-theming';

import styled from '../../theme/styled';

const CardImage = styled.div({
  flex: '1 1',
  margin: 0,
  padding: 0
});

export default withTheme(CardImage);
