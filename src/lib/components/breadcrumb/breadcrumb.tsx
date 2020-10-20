import React, { FC, ReactNode } from 'react';
import { withTheme } from 'emotion-theming';

import styled from '../../../theme/styled';
import { ThemeProps } from '../../../theme/theme';

interface Props {
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
  ({ theme: { breadcrumb } }) => ({
    opacity: breadcrumb.crumbOpacity
  })
);

const BreadcrumbSeparator = styled.span(({ theme }) => ({
  fontSize: '1em',
  margin: theme.breadcrumb.margin
}));

const BreadcrumbContent = styled.ul<{ inverse: boolean }>(
  ({ theme, inverse }) => ({
    color: inverse ? theme.breadcrumb.inverseColor : theme.breadcrumb.color,
    margin: 0,
    padding: 0
  })
);

const Breadcrumb: FC<Props & ThemeProps> = ({
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
    <nav aria-label="breadcrumbs" className={className}>
      <BreadcrumbContent inverse={inverse}>{getCrumbs()}</BreadcrumbContent>
    </nav>
  );
};

export default withTheme(Breadcrumb);
