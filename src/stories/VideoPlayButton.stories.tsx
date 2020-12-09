import React from 'react';
import { Story, Meta } from '@storybook/react';

import { default as VideoPlayButtonComponent } from '../components/video-play-button/video-play-button';

export default {
  title: 'Components/Video Play Button',
  component: VideoPlayButtonComponent,
  args: {
    size: 'reg'
  }
} as Meta;

const VideoPlayButtonTemplate: Story = args => (
  <VideoPlayButtonComponent {...args} />
);

export const VideoPlayButton = VideoPlayButtonTemplate.bind({});

VideoPlayButton.args = {};
