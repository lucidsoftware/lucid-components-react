import styled from '../../../theme/styled';

import { ThemeProps } from '../../../theme/theme';

export interface AccordionProps {
  className?: string;
  isInverted?: boolean;
}

export const AccordionWrapper = styled('div')``;

export const getWrapperStyles = ({
  inverse = false,
  theme
}: { inverse?: boolean } & ThemeProps) => {
  const headerType = inverse ? 'inverse' : 'default';
  const css = {
    display: 'flex',
    flexDirection: 'column' as 'column',
    backgroundColor: theme.accordion.header[headerType].backgroundColor
  };

  return css;
};

export const getHeaderContainerStyles = () => {
  const css = {
    flex: '0 1 100%',
    maxWidth: '100%'
  };

  return css;
};

export const getHeaderStyles = ({
  inverse = false,
  theme
}: {
  inverse?: boolean;
} & ThemeProps) => {
  const headerType = inverse ? 'inverse' : 'default';
  const css = {
    flex: '0 1 100%',
    maxWidth: '100%',
    backgroundColor: theme.accordion.header[headerType].backgroundColor,
    color: theme.accordion.header[headerType].color,
    border: 'none',
    borderBottom: theme.accordion.header[headerType].bottomBorder,
    cursor: 'pointer',
    padding: theme.accordion.header[headerType].padding,
    display: 'flex',
    alignItems: 'center',
    transition: 'background-color 0.6s ease',

    ':focus': {
      backgroundColor: theme.accordion.header[headerType].activeBackgroundColor,
      borderBottom: theme.accordion.header[headerType].interactiveBorder
    },

    ':hover': {
      backgroundColor: theme.accordion.header[headerType].activeBackgroundColor,
      borderBottom: theme.accordion.header[headerType].interactiveBorder
    },

    '&[aria-expanded="true"]': {
      backgroundColor: theme.accordion.header[headerType].activeBackgroundColor,
      borderBottom: theme.accordion.header[headerType].interactiveBorder
    }
  };

  return css;
};

export const getContentStyles = ({
  inverse = false,
  theme
}: {
  inverse?: boolean;
} & ThemeProps) => {
  const contentType = inverse ? 'inverse' : 'default';
  const css = {
    flex: '0 1 100%',
    maxWidth: '100%',
    backgroundColor: theme.accordion.content[contentType].backgroundColor,
    padding: theme.accordion.content[contentType].padding,
    borderBottom: theme.accordion.content[contentType].bottomBorder,
    color: theme.accordion.content[contentType].color,
    overflow: 'hidden',
    transition: 'max-height 0.6s ease'
  };

  return css;
};

export const getItemStyles = () => {
  const css = {
    flex: '0 1 100%',
    maxWidth: '100%',
    flexWrap: 'wrap' as 'wrap',
    display: 'flex'
  };

  return css;
};
