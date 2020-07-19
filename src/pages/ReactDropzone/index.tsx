import React, { useRef } from 'react';
import { FormHandles } from '@unform/core';

import ReactDropzoneInput from '../../components/Form/react-dropzone';
import Button from '../../components/Button';

import { UnForm } from './styles';

interface FormData {
  images: File[];
}

const ReactDropzone: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  function handleSubmit(data: FormData) {
    if (data.images.length === 0) return;

    const urls = data.images.map(image => URL.createObjectURL(image));

    // urls.forEach(url => {
    //   window.open(url);
    // });
    alert(urls);
  }

  return (
    <UnForm ref={formRef} onSubmit={handleSubmit}>
      <ReactDropzoneInput name="images" />

      <Button>Open</Button>
    </UnForm>
  );
};

export default ReactDropzone;
