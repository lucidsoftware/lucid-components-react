/** @jsx jsx */
import { ReactNode } from 'react';
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled';

import { withTheme } from 'emotion-theming';
import { ThemeInterface } from '../../../theme/theme';

interface Props {
    className?: string;
    children: ReactNode;
    isRaised?: boolean;
    noPadding?: boolean;
    as?: 'div' | 'section' | 'article';
    theme: ThemeInterface;
}

const PaperBase = ({ as = 'div', className, children, noPadding, theme, isRaised = false }: Props) => {
    let boxShadow = 'box-shadow: none';
    if (isRaised) {
        boxShadow = `box-shadow: 20px 20px 0 0 rgba(0,0,0,.3)`;
    }
    
    const PaperContainer = styled(as)`
        display: 'flex';
        background: ${theme.colors.white};
        flex-direction: 'column';
        border-radius: ${theme.borderRadius}px;
        border: 1px solid ${theme.colors.grey};
        text-align: 'left';
        ${boxShadow};

        ${!noPadding &&
            css`
                padding: ${theme.paper.padding};
        `};
    `;

    return (
        <PaperContainer className={className}>
            {children}
        </PaperContainer>
    );
};

const Paper = withTheme(PaperBase)
export default Paper;
