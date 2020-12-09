import React from 'react';
import { Story, Meta } from '@storybook/react';

import {
  default as ModalComponent,
  ModalProps
} from '../components/modal/modal';

export default {
  title: 'Components/Modal',
  component: ModalComponent
} as Meta;

const ModalTemplate: Story<ModalProps> = args => <ModalComponent {...args} />;

export const Modal = ModalTemplate.bind({});
Modal.args = {};
