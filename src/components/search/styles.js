import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 10px;
  outline: none;
  width: 100%;
  color: #696969;

  &:focus {
    border-color: #1e90ff;
  }
`

export const SearchButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  background-color: #1e90ff;
  color: #fff;
  border: none;
  border-radius: 10px;
  outline: none;

  &:hover {
    background-color: #4169e1;
  }
  &:active {
    background-color: #0000cd;
  }
`
