import React, { SyntheticEvent } from 'react';
import styled from '@emotion/styled';
import { withTheme } from '@emotion/react';

import { ThemeProps } from '../../theme/theme';
import { ButtonSizes, ButtonVariants } from '../../theme/components/buttons';

interface ButtonProps {
  children?: React.ReactChild;
  className?: string;
  isDisabled?: boolean;
  size?: ButtonSizes;
  theme: ThemeProps['theme'];
  variant: ButtonVariants;
  onClick?: (evt: SyntheticEvent<Element, Event>) => void;
  onHover?: (evt: SyntheticEvent<Element, Event>) => void;
  onFocus?: (evt: SyntheticEvent<Element, Event>) => void;
  onMouseOver?: (evt: SyntheticEvent<Element, Event>) => void;
}

interface StyledButtonProps {
  theme?: ThemeProps['theme'];
  variant: ButtonVariants;
  size?: ButtonSizes;
}

const StyledButton = styled('button')<StyledButtonProps>(
  ({ theme, variant, size }) => ({
    ...theme.buttons,
    ...theme.buttons[variant],
    ...theme.buttons.sizes[size]
  })
);

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  isDisabled,
  size = ButtonSizes.medium,
  variant = ButtonVariants.primary,
  ...rest
}) => {
  return (
    <StyledButton
      className={className}
      disabled={isDisabled}
      size={size}
      variant={variant}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default withTheme(Button);
