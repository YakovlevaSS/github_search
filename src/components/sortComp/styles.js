import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  background-color: #1E90FF;
  color: #fff;
  border: none;
  border-radius: 10px;
  outline: none;
  width: 300px;

  &:hover {
    background-color: #4169E1;
  }
  &:active {
    background-color: #0000CD;
  }
`;
