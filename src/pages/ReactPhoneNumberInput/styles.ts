import { Form } from '@unform/web';
import styled from 'styled-components';

export const UnForm = styled(Form)`
  padding: 24px;
  border-radius: 10px;
  background: #3e3b47;

  input {
    padding: 8px 0 8px 8px;
    border-radius: 10px;
    border: none;

    margin-left: 8px;
  }

  .PhoneInputCountryIconImg,
  .PhoneInputCountrySelectArrow {
    color: #fbc131;
  }
`;
