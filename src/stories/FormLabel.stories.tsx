import React from 'react';
import { Story, Meta } from '@storybook/react';

import {
  default as LabelComponent,
  FormLabelProps
} from '../components/form/label/label';

export default {
  title: 'Components/Form/Label',
  component: LabelComponent
} as Meta;

const FormLabelTemplate: Story<FormLabelProps> = args => (
  <LabelComponent {...args} />
);

export const Label = FormLabelTemplate.bind({});
Label.args = {};
