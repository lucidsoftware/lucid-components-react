import {
  layout,
  LayoutProps,
  space,
  SpaceProps,
  BorderProps,
  border
} from 'styled-system';

import styled from '../../../theme/styled';

interface Props extends LayoutProps, SpaceProps, BorderProps {}

const Spacer = styled.div<Props>(border, layout, space, {
  width: '100%'
});

export default Spacer;
