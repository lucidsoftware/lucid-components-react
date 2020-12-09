import React, { FC, ReactNode } from 'react';
import { withTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { ThemeProps } from '../../theme/theme';

export interface BreadcrumbProps extends ThemeProps {
  className?: string;
  inverse?: boolean;
  items: ReactNode[];
  seperator?: ReactNode;
}

const BreadcrumbWrapper = styled.li(
  {
    padding: 0,
    margin: 0,
    listStyleType: 'none',
    display: 'inline-block',
    '&:hover': {
      opacity: 1
    }
  },
  ({ theme }) => ({
    opacity: theme.breadcrumb.opacity,
    '& > a': {
      color: theme.breadcrumb.color,
      textDecoration: 'none'
    }
  })
);

const BreadcrumbSeparator = styled.span(({ theme }) => ({
  fontSize: '1em',
  margin: theme.breadcrumb.margin
}));

const BreadcrumbContent = styled.ul<{ inverse: boolean }>(
  ({ theme, inverse }) => ({
    margin: 0,
    padding: 0,
    '& > a': {
      color: inverse ? theme.breadcrumb.inverseColor : theme.breadcrumb.color,
      textDecoration: 'none'
    }
  })
);

const Breadcrumb: FC<BreadcrumbProps> = ({
  theme,
  className,
  inverse = false,
  items,
  seperator = <BreadcrumbSeparator theme={theme}>/</BreadcrumbSeparator>
}) => {
  const getCrumbs = () => {
    const crumbs: ReactNode[] = items.map((item, index) => {
      if (index !== items.length - 1) {
        const crumb = (
          <React.Fragment key={`fragment-${index}`}>
            <BreadcrumbWrapper key={index} theme={theme}>
              {item}
            </BreadcrumbWrapper>
            <React.Fragment key={`seperator-${index}`}>
              {seperator}
            </React.Fragment>
          </React.Fragment>
        );

        return crumb;
      }

      return item;
    });

    return crumbs;
  };

  return (
    <nav aria-label="breadcrumb" className={className}>
      <BreadcrumbContent inverse={inverse} theme={theme}>
        {getCrumbs()}
      </BreadcrumbContent>
    </nav>
  );
};

export default withTheme(Breadcrumb);
