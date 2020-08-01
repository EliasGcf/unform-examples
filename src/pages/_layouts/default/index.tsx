import React, { useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import unformLogo from '../../../assets/logo-unform.svg';

import Button from '../../../components/Button';
import { SelectInput } from '../../../components/Form';

import { Container, Wrapper, Form } from './styles';

interface InputOptionsData {
  value: string;
  label: string;
}

interface FormData {
  input: string;
}

const DefaultLayout: React.FC = ({ children }) => {
  const history = useHistory();
  const location = useLocation();

  const inputOptions: InputOptionsData[] = [
    { value: 'react-select', label: 'React Select' },
    { value: 'checkbox', label: 'Checkbox' },
    { value: 'radio', label: 'Radio' },
    { value: 'react-dropzone', label: 'React Dropzone' },
    { value: 'textarea', label: 'TextArea' },
    { value: 'react-phone-number-input', label: 'React Phone Number' },
  ];

  const defaultInput = inputOptions.find(
    option => option.value === location.pathname.replace('/', ''),
  );

  const handleInputOptions = useCallback(
    value => {
      history.push(`/${value.value}`);
    },
    [history],
  );

  const handleSubmit = useCallback(({ input }: FormData) => {
    if (!input) return;

    window.open(
      `https://github.com/EliasGcf/unform-examples/tree/master/src/components/Form/${input}`,
    );
  }, []);

  return (
    <Container>
      <img src={unformLogo} alt="Logo unForm" />

      <h1>Inputs examples with Unform</h1>

      <Form onSubmit={handleSubmit}>
        <SelectInput
          onChange={handleInputOptions}
          options={inputOptions}
          defaultValue={defaultInput}
          name="input"
        />

        <Button type="submit">Open code on GitHub</Button>
      </Form>

      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default DefaultLayout;
