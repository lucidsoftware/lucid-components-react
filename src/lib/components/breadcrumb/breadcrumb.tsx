/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, ReactNode } from 'react';
import styled from '../../../theme/styled';

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

const Breadcrumb: FC<Props> = ({
  className,
  inverse = false,
  items,
  seperator = <BreadcrumbSeparator>/</BreadcrumbSeparator>
}) => {
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
      <BreadcrumbContent inverse={inverse}>{getCrumbs()}</BreadcrumbContent>
    </nav>
  );
};

export default Breadcrumb;
