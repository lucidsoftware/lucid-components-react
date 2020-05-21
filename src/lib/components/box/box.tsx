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
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps
} from 'styled-system';

interface ColorProps extends BackgroundColorProps, OpacityProps {}

interface Props
  extends BackgroundProps,
    BorderProps,
    ShadowProps,
    SpaceProps,
    ColorProps,
    FlexboxProps,
    GridProps,
    LayoutProps,
    PositionProps {}

const Box = styled.div<Props>(
  background,
  shadow,
  border,
  color,
  grid,
  space,
  flexbox,
  layout,
  position
);

export default Box;
