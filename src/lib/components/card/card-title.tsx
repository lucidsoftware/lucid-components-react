import styled from '../../../theme/styled';

const CardTitle = styled('h2')`
  margin: 0;
  color: ${props => props.theme.colors.heading};
  font-size: ${props => props.theme.fontSizes[0]}px;
  line-height: ${props => props.theme.lineHeights.body};
  font-weight: ${props => props.theme.fontWeights.bolder};
`;

export default CardTitle;
