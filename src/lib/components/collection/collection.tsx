import styled from '../../../theme/styled';
import { ThemeProps } from '../../../theme/theme';
import { withTheme } from 'emotion-theming';
import React from 'react';

export type Justify = 'start' | 'center' | 'end' | 'full';
export type Space =
  | string
  | number
  | React.ReactText[]
  | Record<string | number | symbol, React.ReactText>;

export interface InnerCollectionProps {
  space?: number;
  justify?: Justify;
}

export type CollectionProps = {
  className?: string;
  children: React.ReactNode;
  verticalJustify?: Justify;
} & ThemeProps &
  InnerCollectionProps;

const InnerCollection = styled.div<{
  justify?: Justify;
  space: Space;
}>(({ justify, space }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  margin: `-${space}px 0 0 -${space}px`,
  justifyContent: `${
    justify === 'start' || justify === 'full'
      ? 'flex-start'
      : justify === 'center'
      ? 'center'
      : 'flex-end'
  }`
}));

const InnerItem = styled.div<{ space: Space; justify?: Justify }>(
  ({ space, justify }) => ({
    margin: `${space}px 0 0 ${space}px`,
    flex: justify === 'full' ? 'auto' : 'initial',
    display: 'flex'
  })
);

const JustifyInnerItem = styled.div<{ verticalJustify?: Justify }>(
  ({ verticalJustify = 'start' }) => ({
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    marginTop:
      verticalJustify === 'end' || verticalJustify === 'center' ? 'auto' : 0,
    marginBottom:
      verticalJustify === 'start' || verticalJustify === 'center' ? 'auto' : 0
  })
);

const Collection = ({
  className,
  children,
  theme,
  space = 0,
  justify = 'start',
  verticalJustify
}: CollectionProps) => {
  const actualSpace = theme.space ? theme.space[space] : 0;
  return (
    <div className={className}>
      <InnerCollection space={actualSpace} justify={justify}>
        {React.Children.map(children, child => (
          <InnerItem space={actualSpace} justify={justify}>
            <JustifyInnerItem verticalJustify={verticalJustify}>
              {child}
            </JustifyInnerItem>
          </InnerItem>
        ))}
      </InnerCollection>
    </div>
  );
};

export default withTheme(Collection);
