import { withTheme } from 'emotion-theming';

import styled from '../../../theme/styled';
import Heading from '../heading/heading';

const CardSubTitle = styled(Heading)();

export default withTheme(CardSubTitle);
