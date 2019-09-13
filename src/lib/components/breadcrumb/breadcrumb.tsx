/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import { ThemeProps } from '../../../theme/theme';

interface Props {
  className?: string;
  inverse?: boolean;
  items: ReactNode[];
  seperator?: ReactNode;
}

const BreadcrumbBase: FC<Props & ThemeProps> = ({
  className,
  inverse,
  items,
  seperator,
  theme
}) => {
  const BreadcrumbSeperator = styled('span')`
    font-size: 1em;
    margin: ${theme.breadcrumb.margin};
  `;
  const BreadcrumbWrapper = styled('li')`
    padding: 0;
    margin: 0;
    list-style-type: none;
    opacity: ${theme.breadcrumb.crumbOpacity};
    display: inline-block;
    &:hover {
      opacity: 1;
    }
  `;
  const BreadcrumbContent = styled('ul')`
    color: ${inverse ? theme.breadcrumb.inverseColor : theme.breadcrumb.color};
    margin: 0;
    padding: 0;
  `;

  if (!seperator) {
    seperator = <BreadcrumbSeperator>/</BreadcrumbSeperator>;
  }

  const getCrumbs = () => {
    const crumbs: ReactNode[] = [];
    for (let index = 0; index < items.length; index++) {
      const element = items[index];
      if (index !== items.length - 1) {
        crumbs.push(<BreadcrumbWrapper>{element}</BreadcrumbWrapper>);
        crumbs.push(seperator);
      } else {
        crumbs.push(element);
      }
    }
    return crumbs;
  };

  return (
    <nav className={className} aria-label="breadcrumbs">
      <BreadcrumbContent>{getCrumbs()}</BreadcrumbContent>
    </nav>
  );
};

const Breadcrumb = withTheme(BreadcrumbBase);
export default Breadcrumb;
