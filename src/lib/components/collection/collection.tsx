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
  hSpace?: number;
  vSpace?: number;
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
  hSpace: Space;
  vSpace: Space;
}>(({ justify, hSpace, vSpace }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  margin: `-${vSpace}px 0 0 -${hSpace}px`,
  justifyContent: `${
    justify === 'start' || justify === 'full'
      ? 'flex-start'
      : justify === 'center'
      ? 'center'
      : 'flex-end'
  }`
}));

const InnerItem = styled.div<{
  hSpace: Space;
  vSpace: Space;
  justify?: Justify;
}>(({ justify, hSpace, vSpace }) => ({
  margin: `${vSpace}px 0 0 ${hSpace}px`,
  flex: justify === 'full' ? 'auto' : 'initial',
  display: 'flex'
}));

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
  hSpace = 0,
  vSpace = 0,
  justify = 'start',
  verticalJustify
}: CollectionProps) => {
  const actualHSpace = theme.space ? theme.space[hSpace] : 0;
  const actualVSpace = theme.space ? theme.space[vSpace] : 0;
  return (
    <div className={className}>
      <InnerCollection
        hSpace={actualHSpace}
        vSpace={actualVSpace}
        justify={justify}
      >
        {React.Children.map(children, child => (
          <InnerItem
            hSpace={actualHSpace}
            vSpace={actualVSpace}
            justify={justify}
          >
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
