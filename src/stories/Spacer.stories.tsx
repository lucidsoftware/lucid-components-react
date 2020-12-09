import React from 'react';
import { Story, Meta } from '@storybook/react';

import {
  default as SpacerComponent,
  SpacerProps
} from '../components/spacer/spacer';

export default {
  title: 'Components/Spacer',
  component: SpacerComponent
} as Meta;

const SpacerTemplate: Story<SpacerProps> = args => (
  <SpacerComponent {...args} />
);

export const Spacer = SpacerTemplate.bind({});
Spacer.args = {};
