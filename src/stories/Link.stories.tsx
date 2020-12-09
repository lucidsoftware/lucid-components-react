import React from 'react';
import { Story, Meta } from '@storybook/react';

import { default as LinkComponent, LinkProps } from '../components/link/link';

export default {
  title: 'Components/Link',
  component: LinkComponent
} as Meta;

const LinkTemplate: Story<LinkProps> = args => <LinkComponent {...args} />;

export const Link = LinkTemplate.bind({});
Link.args = {};
