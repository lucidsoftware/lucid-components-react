import {
  layout,
  LayoutProps,
  space,
  SpaceProps,
  BorderProps,
  border
} from 'styled-system';
import styled from '@emotion/styled';

export interface SpacerProps extends LayoutProps, SpaceProps, BorderProps {}

const Spacer = styled.div<SpacerProps>(border, layout, space, {
  width: '100%'
});

export default Spacer;
