import React from 'react';
import { Story, Meta } from '@storybook/react';

import {
  default as FieldComponent,
  FormFieldProps
} from '../components/form/field/field';

export default {
  title: 'Components/Form/Field',
  component: FieldComponent
} as Meta;

const FormFieldTemplate: Story<FormFieldProps> = args => (
  <FieldComponent {...args} />
);

export const Field = FormFieldTemplate.bind({});
Field.args = {};
