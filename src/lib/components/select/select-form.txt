import React from 'react';
import Button from '../button/button';
import Select from './select';

import { useState } from 'react';

const Form = () => {
  const [selectField, setSelectField] = useState('');

  const updateSelect = (event: any) => {
    console.log('in here', event.target.value);
    setSelectField(event.target.value);
    console.log(selectField);
  };

  const submit = (event: any) => {
    alert('The best team member is: ' + selectField);
    event.preventDefault();
  };

  const optionsForSelect = [
    'beto',
    'caleb',
    'dax',
    'emilie',
    'emily',
    'erin',
    'ether',
    'lars',
    'makell',
    'matt',
    'owen'
  ];

  return (
    <form onSubmit={submit}>
      <Select
        options={optionsForSelect}
        label="select the coolest team member"
        // value={selectField}
        onChange={updateSelect}
      />
      <Button primary type="submit" value="Submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
