import styled from '../../../../theme/styled';
import TextInput from '../text-input/text-input';
import Label from '../label/label';
import Field from '../field/field';

import { layout, LayoutProps, space, SpaceProps } from 'styled-system';

interface Props extends LayoutProps, SpaceProps {}

const FormBase = styled.form<Props>(space, layout);

const Form = Object.assign(FormBase, {
  TextInput,
  Label,
  Field
});

export default Form;
