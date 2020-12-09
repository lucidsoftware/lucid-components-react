import { withTheme } from '@emotion/react';
import styled from '@emotion/styled';

import Heading from '../heading/heading';

const CardSubTitle = styled(Heading)({
  label: 'subTitle'
});

export default withTheme(CardSubTitle);