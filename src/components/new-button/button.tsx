import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from '@emotion/react';

import { ThemeProps } from '../../theme/theme';
import { ButtonSizes, ButtonVariants } from '../../theme/components/buttons';

interface ButtonProps {
  children?: React.ReactChild;
  className?: string;
  primary?: boolean;
  secondary?: boolean;
  size?: ButtonSizes;
  theme: ThemeProps['theme'];
  variant?: ButtonVariants;
  buttonStyle?: string;
}

interface StyledButtonProps {
  theme?: ThemeProps['theme'];
  variant?: ButtonVariants;
  size?: ButtonSizes;
}

const StyledButton = styled('button')<StyledButtonProps>(
  ({ theme, variant, size }) => ({
    ...theme.buttons[variant],
    ...theme.buttons.sizes[size]
  })
);

const Button: React.FC<ButtonProps> = ({
  className,
  size = ButtonSizes.medium,
  primary,
  secondary,
  children,
  variant = ButtonVariants.primary,
  buttonStyle,
  ...rest
}) => {
  return (
    <StyledButton className={className} size={size} variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
};

export default withTheme(Button);
