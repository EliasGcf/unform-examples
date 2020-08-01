import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import 'react-phone-number-input/style.css';
import PhoneInput, { PhoneInputProps } from 'react-phone-number-input';

interface Props extends Omit<PhoneInputProps, 'value' | 'onChange'> {
  name: string;
}

interface InputRefProps extends PhoneInput {
  phoneValue: string;
}

const PhoneNumberInput: React.FC<Props> = ({ name, ...rest }) => {
  const inputRef = useRef<InputRefProps>(null);

  const { fieldName, defaultValue = '', registerField } = useField(name);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.phoneValue = defaultValue;
    }
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: ref => {
        return ref.phoneValue || '';
      },
      setValue: (ref, value: string) => {
        ref.phoneValue = value;
      },
      clearValue: ref => {
        ref.phoneValue = '';
        ref.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <PhoneInput
      ref={inputRef}
      value={defaultValue}
      onChange={value => {
        if (inputRef.current) inputRef.current.phoneValue = value;
      }}
      {...rest}
    />
  );
};

export default PhoneNumberInput;
