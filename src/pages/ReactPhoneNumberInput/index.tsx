import React, { useCallback } from 'react';
import { FormHelpers } from '@unform/core';

import { PhoneNumberInput } from '../../components/Form';
import Button from '../../components/Button';

import { UnForm } from './styles';

interface FormProps {
  phone: string;
}

const ReactPhoneNumberInput: React.FC = () => {
  const handleSubmit = useCallback(
    (data: FormProps, { reset }: FormHelpers) => {
      reset();
      window.alert(data.phone);
    },
    [],
  );

  return (
    <UnForm onSubmit={handleSubmit}>
      <PhoneNumberInput name="phone" placeholder="+55 81 99145 0029" />

      <Button style={{ marginTop: 16 }} type="submit">
        Send
      </Button>
    </UnForm>
  );
};

export default ReactPhoneNumberInput;
