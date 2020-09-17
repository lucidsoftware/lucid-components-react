import styled from '../../../theme/styled';
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps
} from 'styled-system';

interface Props
  extends BackgroundProps,
    BorderProps,
    ShadowProps,
    SpaceProps,
    ColorProps,
    FlexboxProps,
    GridProps,
    LayoutProps,
    PositionProps {
  color?: string;
  as?: 'div' | 'section' | 'main' | 'aside' | 'article' | 'header' | 'footer';
}

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
