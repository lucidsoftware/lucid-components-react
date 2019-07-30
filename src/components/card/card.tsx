import React, { ReactNode } from 'react';

import { withTheme } from 'emotion-theming';
import { ThemeInterface } from '../../theme/theme';

interface Props {
    children: ReactNode;
    isRaised?: boolean;
    isInteractive?: boolean;
    theme: ThemeInterface;
}
const Card = withTheme(({ children, isRaised = false, isInteractive = false, theme }: Props) => {
    const classes = `card ${isRaised ? 'card--raised' : 'card--interactive'} ${
        isInteractive ? 'card--interactive' : ''
        }`;
        const styles = {
            color: theme.colors.primary
        };
    return (
        <div style={styles}>
            <div>{children}</div>
        </div>
    );
});


export default Card;
