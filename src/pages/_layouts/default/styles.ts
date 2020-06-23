import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  height: 100vh;

  > h1 {
    font-size: 24px;
    color: #fff;
    margin-bottom: 16px;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    margin-bottom: 32px;
  }
`;

export const Wrapper = styled.div`
  max-width: 450px;
  width: 100%;
`;

export const Form = styled(Unform)`
  max-width: 450px;
  width: 100%;

  margin-bottom: 40px;
`;
