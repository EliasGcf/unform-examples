import React, { useRef } from 'react';
import { FormHandles } from '@unform/core';

import { CheckboxInput } from '../../components/Form';
import Button from '../../components/Button';

import { UnForm } from './styles';

interface CheckboxOption {
  id: string;
  value: string;
  label: string;
}

interface FormData {
  profiles: string[];
}

const CheckboxForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const checkboxOptions: CheckboxOption[] = [
    { id: 'rocketseat', value: 'rocketseat', label: 'Rocketseat' },
    { id: 'eliasgcf', value: 'eliasgcf', label: 'EliasGcf' },
  ];

  function handleSubmit(data: FormData) {
    if (data.profiles.length === 0) {
      return;
    }

    let links = '';
    data.profiles.forEach(profile => {
      links += `https://github.com/${profile}\n`;
    });

    window.alert(links);
    formRef.current?.reset();
  }

  return (
    <UnForm
      ref={formRef}
      onSubmit={handleSubmit}
      initialData={{ profiles: ['rocketseat'] }}
    >
      <CheckboxInput name="profiles" options={checkboxOptions} />

      <Button style={{ width: 100 }} type="submit">
        Open
      </Button>
    </UnForm>
  );
};

export default CheckboxForm;
