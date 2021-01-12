import { withTheme } from '@emotion/react';

import styled from '../../../theme/styled';
import Heading from '../heading/heading';

const CardTitle = styled(Heading)();

export default withTheme(CardTitle);
