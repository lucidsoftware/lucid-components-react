import React from 'react';
import { Story, Meta } from '@storybook/react';

import {
  default as IconComponent,
  IconType,
  IconProps
} from '../components/icon/icon';

export default {
  title: 'Components/Icon',
  component: IconComponent,
  argTypes: {
    className: {
      control: 'text',
      description: 'Applies the className to the component.',
      table: {
        defaultValue: {
          summary: '""'
        }
      }
    },
    color: {
      control: 'color',
      description: 'The color of the icon.',
      table: {
        defaultValue: {
          summary: 'black'
        }
      }
    },
    flip: {
      control: {
        type: 'select',
        options: ['vertical', 'horizontal', 'both']
      },
      description: 'Flips the icon in a certain direction.',
      table: {
        type: {
          summary: 'vertical | horizontal | both'
        },
        defaultValue: {
          summary: 'null'
        }
      }
    },
    hoverColor: {
      control: 'color',
      description: 'The color of the icon when hovering.'
    },
    sizing: {
      control: {
        type: 'select',
        options: ['auto', 'responsive']
      },
      defaultValue: 'auto'
    },
    type: {
      control: {
        type: 'select',
        options: [
          'ArrowRight',
          'CarotRight',
          'CarotDown',
          'Checkmark',
          'Play',
          'RSS'
        ]
      },
      type: {
        control: 'enum',
        required: true
      },
      table: {
        type: {
          summary:
            'ArrowRight | CarotRight | CarotDown | Checkmark | Play | RSS'
        }
      }
    }
  },
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
} as Meta;

const IconTemplate: Story<IconProps> = ({ type, ...args }) => (
  <IconComponent {...args} type={type} />
);

export const Icon = IconTemplate.bind({});

Icon.args = {
  type: IconType.CarotRight
};
