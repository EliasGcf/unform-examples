import React, { useRef, useEffect } from 'react';
import { OptionTypeBase, StylesConfig, Theme } from 'react-select';
import Select, { Props as AsyncProps } from 'react-select/async';
import { useField } from '@unform/core';

interface Props extends AsyncProps<OptionTypeBase> {
  name: string;
}

const AsyncSelect: React.FC<Props> = ({ name, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  const colourStyles: StylesConfig = {
    control: styles => ({
      ...styles,
      marginTop: 8,
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
        primary25: '#666360',
        primary50: '#999591',
        neutral0: '#232129',
        neutral80: '#F4EDE8',
        neutral30: '#FBC131',
      },
    };
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.select.state.value) {
            return [];
          }

          return ref.select.state.value.map(
            (option: OptionTypeBase) => option.value,
          );
        }
        if (!ref.select.state.value) {
          return '';
        }

        return ref.select.state.value.value;
      },
      setValue: (ref: any, value: any) => {
        ref.select.select.setValue(value);
      },
      clearValue: (ref: any) => {
        ref.select.state.value = '';
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <Select
      cacheOptions
      defaultValue={defaultValue}
      ref={selectRef}
      classNamePrefix="react-select"
      theme={themeProps}
      maxMenuHeight={250}
      styles={colourStyles}
      {...rest}
    />
  );
};

export default AsyncSelect;
