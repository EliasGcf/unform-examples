import React, { ButtonHTMLAttributes } from 'react';

import { ButtonContainer } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <ButtonContainer {...rest}>{children}</ButtonContainer>;
};

export default Button;
