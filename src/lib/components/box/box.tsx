import styled from '../../../theme/styled';
import {
  background,
  BackgroundProps,
  BackgroundColorProps,
  border,
  BorderProps,
  color,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  OpacityProps,
  space,
  SpaceProps
} from 'styled-system';

interface ColorProps extends BackgroundColorProps, OpacityProps {}

interface Props
  extends BackgroundProps,
    BorderProps,
    SpaceProps,
    ColorProps,
    FlexboxProps,
    GridProps,
    LayoutProps {}

const Box = styled.div<Props>(
  background,
  border,
  color,
  grid,
  space,
  flexbox,
  layout,
  {}
);

export default Box;
