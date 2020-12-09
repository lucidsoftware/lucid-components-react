import { withTheme } from '@emotion/react';
import styled from '@emotion/styled';

import Heading from '../heading/heading';

const CardTitle = styled(Heading)({
  label: 'title'
});

export default withTheme(CardTitle);
