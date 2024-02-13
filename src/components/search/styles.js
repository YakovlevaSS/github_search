import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  outline: none;

  &:hover {
    background-color: #0056b3;
  }
`;
