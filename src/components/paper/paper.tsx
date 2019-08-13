/** @jsx jsx */
import { ReactNode } from 'react';
import { jsx } from '@emotion/core'
import styled from '@emotion/styled';

import { withTheme } from 'emotion-theming';
import { ThemeInterface } from '../../theme/theme';

interface Props {
    children: ReactNode;
    isRaised?: boolean;
    as?: 'div' | 'section' | 'article';
    theme: ThemeInterface;
}

const PaperBase = ({ as = 'div', children, theme, isRaised = false }: Props) => {
    let boxShadow = 'box-shadow: none';
    if (isRaised) {
        boxShadow = `box-shadow: 20px 20px 0 0 rgba(0,0,0,.3)`;
    }

    const PaperContent = styled('div')`
        padding: 2.5em;
    `;

    const PaperContainer = styled(as)`
        display: 'flex';
        padding: 0;
        background: ${theme.colors.white};
        flex-direction: 'column';
        border-radius: ${theme.borderRadius}px;
        border: 1px solid ${theme.colors.grey};
        text-align: 'left';
        ${boxShadow}
    `;

    return (
        <PaperContainer>
            <PaperContent>
                {children}
            </PaperContent>
        </PaperContainer>
    );
};

const Paper = withTheme(PaperBase)
export default Paper;
