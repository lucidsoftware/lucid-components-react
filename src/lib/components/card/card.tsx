/** @jsx jsx */
import { ReactNode } from 'react';
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled';

import { withTheme } from 'emotion-theming';

interface Props {
    actions?: ReactNode[];
    as?: 'div' | 'section' | 'article';
    children?: ReactNode;
    className?: string;
    horizontal?: boolean;
    href?: string;
    isInteractive?: boolean;
    isRaised?: boolean;
    noPadding?: boolean;
    subtitle?: string;
    subtitleAbove?: boolean;
    theme: any;
    thumbnail?: string | JSX.Element | ReactNode;
    title?: string;
    titleAs?: 'h1' | 'h2';
}

const CardBase = ({ as = 'div', children, className, horizontal, theme, isRaised = false, isInteractive = false, thumbnail, title, titleAs = 'h2', href, actions, noPadding, subtitle, subtitleAbove }: Props) => {
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
        color: ${theme.colors.text};
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: space-between;

        ${!noPadding &&
            css`
                padding: ${theme.card.padding};
        `};
    `;

    const CardChildren = styled('div')`
        margin: 0;
    `;

    const CardTitle = styled(titleAs)`
        margin: 0;
        color: ${theme.colors.heading};
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

    const CardSpacer = styled('div')`
        margin-top: ${theme.space[3]}px;
    `;

    const cardContainerProps: {[key: string]: string | number} = {};
    if (isInteractive && href) {
        cardContainerProps.href = href;
    }

    const isCustomThumbnail = typeof thumbnail !== 'string';

    return (
        <CardContainer css={cardCss} {...cardContainerProps} className={className}>
            {thumbnail && !isCustomThumbnail && <CardThumbnail style={{backgroundImage: `url(${thumbnail})` }} /> }
            {thumbnail && isCustomThumbnail && thumbnail }
            <CardContent>
                <div>
                    {subtitle && subtitleAbove && <CardSubTitle>{subtitle}</CardSubTitle> }
                    {title && <CardTitle>{title}</CardTitle> }
                    {subtitle && !subtitleAbove && <CardSubTitle>{subtitle}</CardSubTitle> }
                    { subtitle && !subtitleAbove && children && <CardSpacer />}
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
