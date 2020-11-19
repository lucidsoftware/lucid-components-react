import React from 'react';
import { Story, Meta } from '@storybook/react';

import {
  default as HeadingComponent,
  HeadingProps
} from '../components/heading/heading';
import { headingAliases } from '../theme/headings';

export default {
  title: 'Components/Heading',
  component: HeadingComponent,
  argTypes: {
    as: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
      },
      description: 'Sets the component HTML tag.',
      defaultValue: 'h1',
      table: {
        defaultValue: {
          summary: 'h1'
        }
      }
    },
    children: {
      control: {
        type: 'text'
      },
      description: 'The text displayed in the heading component.'
    },
    variant: {
      control: {
        type: 'select',
        options: headingAliases
      }
    }
  },
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
} as Meta;

const HeadingTemplate: Story<HeadingProps> = args => (
  <HeadingComponent {...args} />
);

export const Heading = HeadingTemplate.bind({});
Heading.args = {
  as: 'h1',
  children: 'Heading Component',
  variant: 'xxxs'
};
