import React, { useRef } from 'react';
import { FormHandles, FormHelpers } from '@unform/core';

import { RadioInput } from '../../components/Form';
import Button from '../../components/Button';

import { UnForm } from './styles';

interface RadioOption {
  id: string;
  value: string;
  label: string;
}

interface FormData {
  user: string;
}

const Radio: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const radioOptions: RadioOption[] = [
    { id: 'rocketseat', value: 'rocketseat', label: 'Rocketseat' },
    { id: 'eliasgcf', value: 'eliasgcf', label: 'EliasGcf' },
  ];

  function handleSubmit(data: FormData, { reset }: FormHelpers) {
    if (!data.user) return;

    window.open(`https://github.com/${data.user}`);
    reset();
  }

  return (
    <UnForm
      ref={formRef}
      initialData={{ radio: radioOptions[1].id }}
      onSubmit={handleSubmit}
    >
      <RadioInput name="user" options={radioOptions} />

      <Button style={{ width: 100 }} type="submit">
        Open
      </Button>
    </UnForm>
  );
};

export default Radio;
