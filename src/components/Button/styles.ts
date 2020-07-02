import styled from 'styled-components';

export const ButtonContainer = styled.button`
  height: 40px;
  width: 100%;
  background: #fbc131;
  padding: 0px 16px;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: background 0.3s;

  :hover {
    background: #cc9d29;
  }
`;
