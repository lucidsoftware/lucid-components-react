import React from 'react';
import { Story, Meta } from '@storybook/react';

import { default as ButtonComponent } from '../components/button/button';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  args: {
    children: 'Button Label',
    variant: 'primary',
    size: 'medium'
  },
  argTypes: {
    variant: {
      defaultValue: 'primary',
      type: {
        control: 'enum',
        required: true
      },
      description: 'Sets the button variant with correct styles.',
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'primaryAlternate',
          'secondaryAlternate'
        ]
      },
      table: {
        type: {
          summary: 'primary | secondary | primaryAlternate | secondaryAlternate'
        },
        defaultValue: {
          summary: 'primary'
        }
      }
    },
    size: {
      defaultValue: 'medium',
      type: {
        control: 'enum'
      },
      description: 'Sets the padding around the button to control size.',
      control: {
        type: 'inline-radio',
        options: ['small', 'medium', 'large']
      },
      table: {
        type: {
          summary: 'small | medium | large'
        },
        defaultValue: {
          summary: 'medium'
        }
      }
    },
    isDisabled: {
      defaultValue: false,
      type: {
        control: 'boolean'
      },
      description: 'Disables the button interaction and changes the styles.',
      table: {
        type: {
          summary: 'true | false'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    onClick: {
      action: 'onClick'
    },
    onMouseOver: {
      action: 'onMouseOver'
    },
    onFocus: {
      action: 'onFocus'
    }
  }
} as Meta;

const ButtonTemplate: Story = ({ variant, ...args }) => (
  <ButtonComponent {...args} variant={variant} />
);

export const Button = ButtonTemplate.bind({});

Button.args = {};
