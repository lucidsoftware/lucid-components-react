import React from 'react';
import { Story, Meta } from '@storybook/react';

import { default as BoxComponent } from '../components/box/box';

export default {
  title: 'Components/Box',
  component: BoxComponent
} as Meta;

const BoxTemplate: Story = args => <BoxComponent {...args} />;

export const Box = BoxTemplate.bind({});
Box.args = {
  children: 'Box Component'
};
