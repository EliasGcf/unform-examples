import React, { useEffect, useRef, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';

import { Label } from './styles';

export interface RadioOption {
  value: string;
  label: string;
}

interface RadioInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'type' | 'defaultChecked' | 'value' | 'defaultValue'
  > {
  name: string;
  options: RadioOption[];
}

const RadioInput: React.FC<RadioInputProps> = ({ name, options, ...rest }) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const { fieldName, registerField, defaultValue = '' } = useField(name);

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) => {
        return refs.find(ref => ref.checked)?.value || '';
      },
      setValue: (refs: HTMLInputElement[], value) => {
        const inputRef = refs.find(ref => ref.value === value);
        if (inputRef) inputRef.checked = true;
      },
      clearValue: (refs: HTMLInputElement[]) => {
        const inputRef = refs.find(ref => ref.checked);
        if (inputRef) inputRef.checked = false;
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      {options.map((option, index) => (
        <Label htmlFor={option.value} key={option.value}>
          <input
            ref={ref => ref && (inputRefs.current[index] = ref)}
            defaultChecked={defaultValue === option.value}
            value={option.value}
            id={option.value}
            name={name}
            type="radio"
            {...rest}
          />
          {option.label}
        </Label>
      ))}
    </>
  );
};

export default RadioInput;
