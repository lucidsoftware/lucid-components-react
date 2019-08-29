/** @jsx jsx */
import { jsx } from '@emotion/core'
import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import { ThemeInterface } from '../../../theme/theme';

// type Seperator = 'string' | ReactNode;

interface Props {
    className?: string;
    seperator?: ReactNode;
    items: ReactNode[];
    theme: ThemeInterface;
}

const BreadcrumbBase: FC<Props> = ({ className, seperator, items, theme }) => {
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
    `;
    const Breadcrumb = styled('ul')`
        color: ${theme.breadcrumb.color};
        margin: 0;
        padding: 0;
    `;

    if (!seperator) {
        seperator = (<BreadcrumbSeperator>/</BreadcrumbSeperator>);
    }

    const getCrumbs = () => {
        let crumbs: ReactNode[] = [];
        for (let index = 0; index < items.length; index++) {
            const element = items[index];
            if (index !== items.length - 1) {
                crumbs.push((<BreadcrumbWrapper>{element}</BreadcrumbWrapper>));
                crumbs.push(seperator);
            } else {
                crumbs.push(element);
            }
        }
        return crumbs;
    }

    return (
        <nav className={className} aria-label="breadcrumbs">
            <Breadcrumb>
                {getCrumbs()}
            </Breadcrumb>
        </nav>
    )
};

const Breadcrumb = withTheme(BreadcrumbBase);
export default Breadcrumb;
