import { withTheme } from 'emotion-theming';

import styled from '../../../theme/styled';
import Heading from '../heading/heading';

const CardTitle = styled(Heading)();

export default withTheme(CardTitle);
