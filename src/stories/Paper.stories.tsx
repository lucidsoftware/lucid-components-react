import React from 'react';
import { Story, Meta } from '@storybook/react';

import {
  default as PaperComponent,
  PaperProps
} from '../components/paper/paper';

export default {
  title: 'Components/Paper',
  component: PaperComponent
} as Meta;

const PaperTemplate: Story<PaperProps> = args => <PaperComponent {...args} />;

const PaperChildren = () => <h1>TEXT</h1>;

export const Paper = PaperTemplate.bind({});
Paper.args = {
  children: <PaperChildren />
};
