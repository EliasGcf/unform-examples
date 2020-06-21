import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  h1 {
    font-size: 24px;
    color: #fff;
    margin-bottom: 16px;
  }
`;

export const UnForm = styled(Form)`
  padding: 24px;
  border-radius: 10px;
  background: #3e3b47;

  button {
    height: 40px;
    width: 100%;
    background: #fbc131;
    padding: 0 16px;
    border-radius: 10px;
    border: none;
    font-size: 18px;
    font-weight: 500;
    margin-top: 16px;
  }
`;
