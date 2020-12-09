import React from 'react';
import { Story, Meta } from '@storybook/react';

import {
  default as BreadcrumbComponent,
  BreadcrumbProps
} from '../components/breadcrumb/breadcrumb';

export default {
  title: 'Components/Breadcrumb',
  component: BreadcrumbComponent,
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
} as Meta;

const BreadcrumbTemplate: Story<BreadcrumbProps> = args => (
  <BreadcrumbComponent {...args} />
);

const breadcrumbItems = [
  <a key="breadcrumb" href="#breadcrumb">
    Breadcrumb
  </a>,
  <a key="breadcrumb-path-1" href="#path">
    Path
  </a>
];

export const Breadcrumb = BreadcrumbTemplate.bind({});

Breadcrumb.args = {
  items: breadcrumbItems
};
