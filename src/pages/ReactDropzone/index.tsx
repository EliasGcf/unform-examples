import React from 'react';

import ReactDropzoneInput from '../../components/Form/react-dropzone';

import { UnForm } from './styles';

const ReactDropzone: React.FC = () => {
  function handleSubmit(data: any) {
    console.log(data);
  }

  return (
    <UnForm onSubmit={handleSubmit}>
      <ReactDropzoneInput name="image-url" />

      <button type="submit">Enviar</button>
    </UnForm>
  );
};

export default ReactDropzone;
