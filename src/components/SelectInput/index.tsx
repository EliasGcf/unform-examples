import React, { useRef, useEffect } from 'react';
import ReactSelect, {
  OptionTypeBase,
  Props as SelectProps,
  StylesConfig,
  Theme,
} from 'react-select';
import { useField } from '@unform/core';

interface Props extends SelectProps<OptionTypeBase> {
  name: string;
}

const SelectInput: React.FC<Props> = ({ name, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  const colourStyles: StylesConfig = {
    control: styles => ({
      ...styles,
      borderRadius: 10,
      borderColor: '#232129',
      fontSize: 18,
      height: 46,
    }),
    option: styels => ({
      ...styels,
      color: '#F4EDE8',
    }),
  };

  const themeProps = (theme: Theme): Theme => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary: '#666360',
        neutral0: '#232129',
        primary25: '#666360',
        primary50: '#999591',
        neutral80: '#F4EDE8',
        neutral30: '#FBC131',
      },
    };
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: undefined,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }

          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }

        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <ReactSelect
      defaultValue={defaultValue}
      ref={selectRef}
      classNamePrefix="react-select"
      styles={colourStyles}
      theme={themeProps}
      maxMenuHeight={250}
      {...rest}
    />
  );
};

export default SelectInput;
