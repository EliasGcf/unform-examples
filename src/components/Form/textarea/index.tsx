import React, { useRef, useEffect, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

const TextAreaInput: React.FC<Props> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { fieldName, registerField, defaultValue = '' } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return <textarea ref={inputRef} defaultValue={defaultValue} {...rest} />;
};

export default TextAreaInput;
