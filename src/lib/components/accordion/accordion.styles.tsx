import { css } from '@emotion/core';
import styled from '../../../theme/styled';

import { ThemeProps } from '../../../theme/theme';

export interface AccordionProps {
  className?: string;
  isInverted?: boolean;
}

export interface AccordionItemProps extends AccordionProps {
  active?: boolean;
}

const WrapperBaseStyles = () =>
  css({
    display: 'flex',
    flexDirection: 'column'
  });

export const AccordionWrapper = styled('div')`
  ${WrapperBaseStyles}
`;

const ItemBaseStyles = () =>
  css({
    flex: '0 1 100%',
    maxWidth: '100%',
    flexWrap: 'wrap',
    display: 'flex'
  });

export const AccordionItemContainer = styled('li')`
  ${ItemBaseStyles}
`;

const AccordionChildrenStyles = () =>
  css({
    display: 'flex',
    position: 'relative',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    padding: '0px'
  });

export const AccordionChildren = styled('ul')<AccordionProps>`
  ${AccordionChildrenStyles}
`;

const AccordionHeaderStyles = (props: ThemeProps) =>
  css({
    flex: '0 1 100%',
    maxWidth: '100%',
    backgroundColor: props.theme.accordion.header.default.backgroundColor,
    color: props.theme.accordion.header.default.color,
    border: 'none',
    borderBottom: props.theme.accordion.header.default.bottomBorder,
    cursor: 'pointer',
    padding: props.theme.accordion.header.default.padding,
    display: 'flex',
    alignItems: 'center',
    transition: 'background-color 0.6s ease',

    ':focus': {
      backgroundColor:
        props.theme.accordion.header.default.activeBackgroundColor,
      borderBottom: props.theme.accordion.header.default.interactiveBorder
    },

    ':hover': {
      backgroundColor:
        props.theme.accordion.header.default.activeBackgroundColor,
      borderBottom: props.theme.accordion.header.default.interactiveBorder
    }
  });

const AccordionHeaderInverseStyles = (props: ThemeProps) =>
  css({
    flex: '0 1 100%',
    maxWidth: '100%',
    backgroundColor: props.theme.accordion.header.inverse.backgroundColor,
    color: props.theme.accordion.header.inverse.color,
    border: 'none',
    borderBottom: props.theme.accordion.header.inverse.bottomBorder,
    cursor: 'pointer',
    padding: props.theme.accordion.header.inverse.padding,
    display: 'flex',
    alignItems: 'center',
    transition: 'background-color 0.6s ease',

    ':focus': {
      backgroundColor:
        props.theme.accordion.header.inverse.activeBackgroundColor,
      borderBottom: props.theme.accordion.header.inverse.interactiveBorder
    },
    ':hover': {
      backgroundColor:
        props.theme.accordion.header.inverse.activeBackgroundColor,
      borderBottom: props.theme.accordion.header.inverse.interactiveBorder
    }
  });

export const AccordionHeaderStyle = styled('button')<AccordionProps>`
  ${AccordionHeaderStyles}
  ${props => (props.isInverted ? AccordionHeaderInverseStyles : '')}
`;

const AccordionContentStyles = (props: ThemeProps) =>
  css({
    flex: '0 1 100%',
    maxWidth: '100%',
    backgroundColor: props.theme.accordion.content.default.backgroundColor,
    padding: props.theme.accordion.content.default.padding,
    borderBottom: props.theme.accordion.content.default.bottomBorder,
    color: props.theme.accordion.content.default.color,
    overflow: 'hidden',
    transition: 'max-height 0.6s ease',
    textAlign: 'left'
  });

const AccordionContentInverseStyles = (props: ThemeProps) =>
  css({
    flex: '0 1 100%',
    maxWidth: '100%',
    backgroundColor: props.theme.accordion.content.inverse.backgroundColor,
    color: props.theme.accordion.content.inverse.color,
    padding: props.theme.accordion.content.inverse.padding,
    borderBottom: props.theme.accordion.content.inverse.bottomBorder,
    overflow: 'hidden',
    transition: 'height 0.6s ease',
    height: 'auto'
  });

const AccordionContentClosedStyles = (props: ThemeProps) =>
  css({
    height: '0px',
    maxHeight: '0px',
    padding: '0px',
    backgroundColor: props.theme.accordion.content.default.backgroundColor,
    borderBottom: '0'
  });

export const AccordionContentStyle = styled('div')<AccordionItemProps>`
  ${AccordionContentStyles}
  ${props => (props.isInverted ? AccordionContentInverseStyles : '')}
  ${props => (!props.active ? AccordionContentClosedStyles : '')}
`;

const AccordionIconContainerStyles = () =>
  css({
    marginLeft: 'auto',
    transition: 'transform 0.6s ease'
  });

export const AccordionIconContainer = styled('div')`
  ${AccordionIconContainerStyles}
`;