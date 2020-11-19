import React from 'react';
import { Story, Meta } from '@storybook/react';

import { default as AccordionComponent } from '../components/accordion/accordion';
import { ThemeProps } from '../theme/theme';

export default {
  title: 'Components/Accordion',
  component: AccordionComponent,
  subcomponents: {
    AccordionButton: AccordionComponent.Button,
    AccordionHeading: AccordionComponent.Heading,
    AccordionItem: AccordionComponent.Item,
    AccordionPanel: AccordionComponent.Panel
  },
  args: {
    allowMultipleExpanded: true,
    allowZeroExpanded: true
  }
} as Meta;

const AccordionTemplate: Story = args => <AccordionComponent {...args} />;

const AccordionItem = () => (
  <AccordionComponent.Item
    css={(theme: ThemeProps['theme']) => ({
      backgroundColor: theme.colors.primary,
      borderTop: `0.5px solid ${theme.colors.coolGrey[30]}`,
      padding: `${theme.space[5]}px ${theme.space[0]}`,
      '&:first-of-type': {
        borderTop: `1px solid ${theme.colors.coolGrey[30]}`
      },
      '&:last-of-type': {
        borderBottom: `1px solid ${theme.colors.coolGrey[30]}`
      }
    })}
  >
    <AccordionComponent.Heading>
      <AccordionComponent.Button variant="default">
        Button
      </AccordionComponent.Button>
    </AccordionComponent.Heading>
    <AccordionComponent.Panel variant="inverse">
      Panel Content
    </AccordionComponent.Panel>
  </AccordionComponent.Item>
);

export const Accordion = AccordionTemplate.bind({});

Accordion.args = {
  children: <AccordionItem />
};
