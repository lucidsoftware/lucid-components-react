import React from 'react';
import { Story, Meta } from '@storybook/react';

import {
  default as FormComponent,
  FormProps
} from '../components/form/form/form';

export default {
  title: 'Components/Form/Form',
  component: FormComponent
} as Meta;

const FormFormTemplate: Story<FormProps> = args => <FormComponent {...args} />;

export const Form = FormFormTemplate.bind({});
Form.args = {};
