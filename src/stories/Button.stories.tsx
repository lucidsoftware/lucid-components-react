import React from 'react';
import { Story, Meta } from '@storybook/react';

import { default as ButtonComponent } from '../components/new-button/button';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  args: {
    children: 'Button Label',
    variant: 'primary',
    size: 'medium'
  },
  argTypes: {}
} as Meta;

const ButtonTemplate: Story = args => <ButtonComponent {...args} />;

export const Button = ButtonTemplate.bind({});

Button.args = {};
