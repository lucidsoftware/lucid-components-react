import styled from '../../../theme/styled';

const CardSubTitle = styled('h3')`
  display: block;
  margin: 0 0 ${props => props.theme.space[2]}px;
  font-size: ${props => props.theme.fontSizes[0]}px;
  line-height: ${props => props.theme.lineHeights.body};
  font-weight: ${props => props.theme.fontWeights.body};
  color: #939ea9;
`;

export default CardSubTitle;
