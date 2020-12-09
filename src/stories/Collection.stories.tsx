import React from 'react';
import { Story, Meta } from '@storybook/react';

import {
  default as CollectionComponent,
  CollectionProps
} from '../components/collection/collection';

export default {
  title: 'Components/Collection',
  component: CollectionComponent
} as Meta;

const CollectionTemplate: Story<CollectionProps> = args => (
  <CollectionComponent {...args} />
);

export const Collection = CollectionTemplate.bind({});
Collection.args = {};
