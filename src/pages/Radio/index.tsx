// https://codesandbox.io/embed/unform-web-radio-example-er0cn?autoresize=1&expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark
import React, { useRef } from 'react';
import { FormHandles } from '@unform/core';

import { RadioInput } from '../../components/Form';

import { UnForm } from './styles';

interface RadioOption {
  id: string;
  value: string;
  label: string;
}

const Radio: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const radioOptions: RadioOption[] = [
    { id: 'rocketseat', value: 'rocketseat', label: 'Rocketseat' },
    { id: 'eliasgcf', value: 'eliasgcf', label: 'EliasGcf' },
  ];

  function handleSubmit(data: any) {
    console.log(data);
  }

  return (
    <UnForm
      ref={formRef}
      initialData={{ radio: radioOptions[1].id }}
      onSubmit={handleSubmit}
    >
      <RadioInput name="radio" options={radioOptions} />
      <button type="submit">Open</button>
    </UnForm>
  );
};

export default Radio;
