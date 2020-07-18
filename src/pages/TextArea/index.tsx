import React, { useRef } from 'react';
import { FormHandles } from '@unform/core';

import { TextAreaInput } from '../../components/Form';
import Button from '../../components/Button';

import { UnForm } from './styles';

interface FormData {
  text: string;
}

const TextArea: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  function handleSubmit(data: FormData) {
    alert(data.text);
  }

  return (
    <UnForm ref={formRef} onSubmit={handleSubmit}>
      <TextAreaInput name="text" placeholder="Digite aqui ..." />
      <Button style={{ width: '100%' }} type="submit">
        Send
      </Button>
    </UnForm>
  );
};

export default TextArea;
