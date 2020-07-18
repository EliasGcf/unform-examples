import { Form } from '@unform/web';
import styled from 'styled-components';

export const UnForm = styled(Form)`
  padding: 24px;
  border-radius: 10px;
  background: #3e3b47;

  display: flex;
  flex-direction: column;

  textarea {
    width: 100%;
    height: 150px;

    max-height: 300px;
    min-height: 56px;

    margin-bottom: 16px;
    border-radius: 10px;

    padding: 8px;

    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    resize: vertical;
  }
`;
