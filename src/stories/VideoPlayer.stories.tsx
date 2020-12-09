import React from 'react';
import { Story, Meta } from '@storybook/react';

import PlaceholderImage from './assets/550x250.png';
import { default as VideoPlayerComponent } from '../components/video-player/video-player';

export default {
  title: 'Components/Video Player',
  component: VideoPlayerComponent,
  args: {
    controls: true,
    shouldAutoPlay: false,
    placeholder: () => <img alt="placeholder" src={PlaceholderImage} />,
    url: 'https://www.youtube.com/watch?v=_8JtnUpkP0s'
  }
} as Meta;

const VideoPlayerTemplate: Story = args => (
  <VideoPlayerComponent css={{ width: '550px' }} {...args} />
);

export const VideoPlayer = VideoPlayerTemplate.bind({});

VideoPlayer.args = {};
