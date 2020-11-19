import React from 'react';
import { Story, Meta } from '@storybook/react';

import { default as TextComponent } from '../components/text/text';
import textStyles from '../theme/typography';

const textStyleKeys = Object.keys(textStyles);

export default {
  title: 'Components/Text',
  component: TextComponent,
  argTypes: {
    children: {
      control: {
        type: 'text'
      },
      description: 'The text displayed in the heading component.'
    },
    textStyles: {
      control: {
        type: 'select',
        options: textStyleKeys
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
Text.args = {
  children: 'Text'
};
