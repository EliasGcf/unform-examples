import React, { useRef } from 'react';
import { FormHandles, FormHelpers } from '@unform/core';

import RadioInput, { RadioOption } from '../../components/Form/radio';
import Button from '../../components/Button';

import { UnForm } from './styles';

interface FormData {
  user: string;
}

const Radio: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const radioOptions: RadioOption[] = [
    { value: 'rocketseat', label: 'Rocketseat' },
    { value: 'eliasgcf', label: 'EliasGcf' },
  ];

  function handleSubmit(data: FormData, { reset }: FormHelpers) {
    if (!data.user) return;

    window.open(`https://github.com/${data.user}`);
    reset();
  }

  return (
    <UnForm
      ref={formRef}
      initialData={{ user: radioOptions[1].value }}
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
