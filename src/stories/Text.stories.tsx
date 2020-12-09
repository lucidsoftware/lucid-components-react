import React from 'react';
import { Story, Meta } from '@storybook/react';

import { default as TextComponent } from '../components/text/text';
import textStyles from '../theme/typography';

export default {
  title: 'Components/Text',
  component: TextComponent,
  args: {
    children: 'Text',
    variant: 'paragraph2XL400'
  },
  argTypes: {
    children: {
      control: {
        type: 'text'
      },
      description: 'The text displayed in the heading component.'
    },
    variant: {
      control: {
        type: 'select',
        options: Object.keys(textStyles)
      }
    }
  },
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
} as Meta;

const TextTemplate: Story = args => <TextComponent {...args} />;

export const Text = TextTemplate.bind({});
Text.args = {};
