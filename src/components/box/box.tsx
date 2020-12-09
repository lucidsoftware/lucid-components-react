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
import styled from '@emotion/styled';

export interface BoxProps
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

const Box = styled.div<BoxProps>(
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
