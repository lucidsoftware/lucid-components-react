/** @jsx jsx */
import { ReactNode } from 'react';
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled';

import { withTheme } from 'emotion-theming';

interface Props {
    children: ReactNode;
    as?: 'div' | 'section' | 'article';
    isRaised?: boolean;
    isInteractive?: boolean;
    theme: any;
    thumbnail?: string;
    title?: string;
    subtitle?: string;
    subtitleAbove?: boolean;
    titleAs?: 'h1' | 'h2';
    href?: string;
    actions?: ReactNode[];
    horizontal?: boolean;
}

const CardBase = ({ as = 'div', children, horizontal, theme, isRaised = false, isInteractive = false, thumbnail, title, titleAs = 'h2', href, actions, subtitle, subtitleAbove }: Props) => {
    let boxShadow = 'none';
    let isInteractiveProps = {};

    if (isRaised) {
        boxShadow = theme.card.raised.boxShadow;
    }

    if (isInteractive) {
        isInteractiveProps = {
            boxShadow: theme.card.interactive.boxShadow,
            transition: `box-shadow .3s ease, border-color .3s ease, transform .15s ease-out`,
            cursor: 'pointer',
            '&:hover, &:focus': {
                boxShadow: theme.card.interactive.boxShadowHover,
                borderColor: theme.colors.primary
            },
            '&:focus': {
                outline: 'none'
            },
            '&:active': {
                transform: 'scale(.97)',
                boxShadow: 'none'
            }
        };
    }

    const cardCss = css({
        boxShadow,
        ...isInteractiveProps
    });

    const cardRenderType = isInteractive ? 'a' : as;
    const CardContainer = styled(cardRenderType)`
        display: flex;
        height: 100%;
        padding: 0;
        background: ${theme.colors.white};
        flex-direction: ${ horizontal ? 'row' : 'column'};
        border-radius: ${theme.borderRadius}px;
        border: 1px solid ${theme.colors.grey};
        text-align: left;
        text-decoration: none;
        overflow: hidden;
    `;

    const CardContent = styled('div')`
        padding: 2.5em;
        color: ${theme.colors.text};
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: space-between;
    `;

    const CardChildren = styled('div')`
        margin: ${theme.space[3]}px 0 0;
    `;

    const CardTitle = styled(titleAs)`
        margin: 0;
        font-size: ${theme.fontSizes[1]}px;
        line-height: ${theme.lineHeights.body};
        font-weight: ${theme.fontWeights.bolder};
    `;

    const CardSubTitle = styled('div')`
        display: block;
        margin: 0 0 ${theme.space[2]}px;
        font-size: ${theme.fontSizes[0]}px;
        line-height: ${theme.lineHeights.body};
        font-weight: ${theme.fontWeights.body};
        color: #939ea9;
    `;

    const CardThumbnail = styled('div')`
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top center;
        flex: 1 1 auto;
    `;

    const CardActions = styled('div')`
        display: flex;
        margin-top: ${theme.space[3]}px;
    `;

    const CardAction = styled('div')`
        margin-right: ${theme.space[2]}px;
    `;

    const cardContainerProps: {[key: string]: string | number} = {};
    if (isInteractive && href) {
        cardContainerProps.href = href;
    }

    return (
        <CardContainer css={cardCss} {...cardContainerProps}>
            {thumbnail && <CardThumbnail style={{backgroundImage: `url(${thumbnail})` }} /> }
            <CardContent>
                <div>
                    {subtitle && subtitleAbove && <CardSubTitle>{subtitle}</CardSubTitle> }
                    {title && <CardTitle>{title}</CardTitle> }
                    {subtitle && !subtitleAbove && <CardSubTitle>{subtitle}</CardSubTitle> }
                    {children && <CardChildren>{children}</CardChildren> }
                </div>
                { actions && <CardActions>
                    { actions.map(action => {
                        return <CardAction>
                            {action}
                        </CardAction>
                    }) }
                </CardActions> }
            </CardContent>
        </CardContainer>
    );
};

const Card = withTheme(CardBase);
export default Card;
