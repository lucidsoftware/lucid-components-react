import React from 'react';
import TextField from './input';
import Button from '../button/button';

import { useState } from 'react';
import { InputEmailValidator } from './input-validators';

const Form = () => {
  const [textField, setTextField] = useState('');

  const updateText = (event: any) => {
    setTextField(event.target.value);
  };

  const submit = (event: any) => {
    alert('A textfield was submitted: ' + textField);
    event.preventDefault();
  };

  return (
    <form onSubmit={submit} style={{ backgroundColor: '#333' }}>
      <TextField
        value={textField}
        onChange={updateText}
        name="email"
        initialFocus
        hasFloatingLabel
        label="email"
        showValidation
        validator={InputEmailValidator}
        showHintMessage
        hintMessage="hey there i'm a hint"
        // disabled
        required
        inverse
      />
      <Button primary type="submit" value="Submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
