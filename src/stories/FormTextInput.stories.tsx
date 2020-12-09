import React from 'react';
import { Story, Meta } from '@storybook/react';

import {
  default as TextInputComponent,
  FormTextInputProps
} from '../components/form/text-input/text-input';

export default {
  title: 'Components/Form/Text Input',
  component: TextInputComponent
} as Meta;

const FormTextInputTemplate: Story<FormTextInputProps> = args => (
  <TextInputComponent {...args} />
);

export const TextInput = FormTextInputTemplate.bind({});
TextInput.args = {};
