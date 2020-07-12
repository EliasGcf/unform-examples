import React, { useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { useField } from '@unform/core';

// import {  } from './styles';

interface Props {
  name: string;
}

const ReactDropzoneInput: React.FC<Props> = ({ name }) => {
  const { fieldName, registerField } = useField(name);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    acceptedFiles,
  } = useDropzone({
    accept: 'image/*',
  });

  useEffect(() => {
    console.log('useEffect');
    registerField({
      name: fieldName,
      getValue: () => {
        return acceptedFiles;
      },
    });
  }, [fieldName, registerField, acceptedFiles]);

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag drop some files here, or click to select files</p>
      )}
    </div>
  );
};

export default ReactDropzoneInput;
