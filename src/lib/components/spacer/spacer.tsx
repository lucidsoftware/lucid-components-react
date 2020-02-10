import styled from '../../../theme/styled';
import { layout, LayoutProps, space, SpaceProps } from 'styled-system';

interface Props extends LayoutProps, SpaceProps {}

const Spacer = styled.div<Props>(layout, space, {
  width: '100%'
});

export default Spacer;
