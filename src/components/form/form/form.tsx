import { layout, LayoutProps, space, SpaceProps } from 'styled-system';
import styled from '@emotion/styled';

import TextInput from '../text-input/text-input';
import Label from '../label/label';
import Field from '../field/field';

interface FormProps extends LayoutProps, SpaceProps {}

const FormBase = styled.form<FormProps>(space, layout);

const Form = Object.assign(FormBase, {
  TextInput,
  Label,
  Field
});

export default Form;
