import React, { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { useField } from '@unform/core';

import { Container } from './styles';

interface Props {
  name: string;
}

interface InputRefProps extends HTMLInputElement {
  acceptedFiles: File[];
}

const ReactDropzoneInput: React.FC<Props> = ({ name }) => {
  const { fieldName, registerField } = useField(name);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    acceptedFiles,
    inputRef,
  } = useDropzone({
    accept: 'image/*',
    onDrop: onDropAcceptedFiles => {
      const onDropInputRef = inputRef as { current: InputRefProps };

      if (onDropInputRef.current) {
        onDropInputRef.current.acceptedFiles = onDropAcceptedFiles;
      }
    },
  });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: (ref: InputRefProps) => {
        return ref.acceptedFiles || [];
      },
      clearValue: (ref: InputRefProps) => {
        ref.acceptedFiles = [];
      },
      setValue: (ref: InputRefProps, value) => {
        ref.acceptedFiles = value;
      },
    });
  }, [fieldName, registerField, inputRef]);

  return (
    <Container {...getRootProps()}>
      <input {...getInputProps()} />
      {acceptedFiles.length !== 0 && (
        <ul>
          {acceptedFiles.map(file => (
            <li key={file.name}>{`${file.name} - ${file.size} bytes`}</li>
          ))}
        </ul>
      )}
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag drop some files here, or click to select files</p>
      )}
    </Container>
  );
};

export default ReactDropzoneInput;
