import React from 'react';
import { Story, Meta } from '@storybook/react';

import {
  default as AccordionComponent,
  AccordionProps
} from '../components/accordion/accordion';
import { AccordionButtonProps } from '../components/accordion/accordion-button';
import { AccordionPanelProps } from '../components/accordion/accordion-panel';
import seeder from '../utils/seeder';

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
    allowZeroExpanded: true,
    className: 'accordion',
    preExpanded: [''],
    variant: 'default',
    buttonClassName: 'accordionButton',
    buttonHasArrow: true,
    buttonVariant: 'default',
    headingVariant: 'default',
    itemVariant: 'default',
    panelVariant: 'inverse'
  },
  argTypes: {
    buttonClassName: {
      name: 'className',
      table: {
        category: 'Button'
      }
    },
    buttonHasArrow: {
      name: 'hasArrow',
      table: {
        category: 'Button'
      }
    },
    buttonVariant: {
      name: 'variant',
      table: {
        category: 'Button'
      }
    },
    headingVariant: {
      name: 'variant',
      table: {
        category: 'Heading'
      }
    },
    itemVariant: {
      name: 'variant',
      table: {
        category: 'Item'
      }
    },
    panelVariant: {
      name: 'variant',
      table: {
        category: 'Panel'
      }
    }
  }
} as Meta;

const Button = ({
  className,
  hasArrow,
  variant,
  suffix
}: AccordionButtonProps & { suffix?: string }) => (
  <AccordionComponent.Button
    className={className}
    hasArrow={hasArrow}
    variant={variant}
  >
    {seeder.title('Accordion Button', suffix)}
  </AccordionComponent.Button>
);

const Panel = ({ variant }: AccordionPanelProps) => (
  <AccordionComponent.Panel variant={variant}>
    {seeder.text}
  </AccordionComponent.Panel>
);

interface AccordionStoryProps extends AccordionProps {
  buttonClassName?: string;
  buttonHasArrow?: boolean;
  buttonVariant?: string;
  headingVariant?: string;
  itemVariant?: string;
  panelVariant?: string;
}

const AccordionTemplate: Story<AccordionStoryProps> = ({
  allowMultipleExpanded,
  allowZeroExpanded,
  className,
  preExpanded,
  variant,
  buttonClassName,
  buttonHasArrow,
  buttonVariant,
  headingVariant,
  itemVariant,
  panelVariant,
  ...args
}) => {
  return (
    <div
      css={{
        label: 'storybookWrapper',
        width: '75vw'
      }}
    >
      <AccordionComponent
        {...args}
        allowMultipleExpanded={allowMultipleExpanded}
        allowZeroExpanded={allowZeroExpanded}
        className={className}
        preExpanded={preExpanded}
        variant={variant}
      >
        <AccordionComponent.Item variant={itemVariant}>
          <AccordionComponent.Heading>
            <Button
              {...args}
              className={buttonClassName}
              hasArrow={buttonHasArrow}
              suffix="1"
              variant={buttonVariant}
            />
          </AccordionComponent.Heading>
          <Panel variant={panelVariant} />
        </AccordionComponent.Item>
        <AccordionComponent.Item variant={itemVariant}>
          <AccordionComponent.Heading>
            <Button
              {...args}
              className={buttonClassName}
              hasArrow={buttonHasArrow}
              variant={buttonVariant}
            />
          </AccordionComponent.Heading>
          <Panel variant={panelVariant} />
        </AccordionComponent.Item>
      </AccordionComponent>
    </div>
  );
};

export const Accordion = AccordionTemplate.bind({});

Accordion.args = {};
