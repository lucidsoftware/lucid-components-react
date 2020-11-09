import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
// @ts-ignore

const Button = styled('button')(({ theme }) => ({
  backgroundColor: theme.colors.primary
}));

const NewButton = (props: any) => {
  return <Button {...props}>{props.children}</Button>;
};

export default withTheme(NewButton);
