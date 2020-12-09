import React from 'react';
import { Story, Meta } from '@storybook/react';

import { default as CardComponent, CardProps } from '../components/card/card';

export default {
  title: 'Components/Card',
  component: CardComponent,
  subcomponents: {
    CardAction: CardComponent.Action,
    CardActions: CardComponent.Actions,
    CardContent: CardComponent.Content,
    CardImage: CardComponent.Image,
    CardTitle: CardComponent.Title,
    CardSubtitle: CardComponent.Subtitle
  }
} as Meta;

const CardTemplate: Story<CardProps> = args => (
  <CardComponent {...args}>
    <CardComponent.Content>
      <CardComponent.Title>Card Title</CardComponent.Title>
    </CardComponent.Content>
  </CardComponent>
);

export const Card = CardTemplate.bind({});
Card.args = {};
