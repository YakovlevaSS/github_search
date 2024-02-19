import styled from 'styled-components'

export const BackButtonWrapper = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  background-color: #1e90ff;
  color: #fff;
  border: none;
  border-radius: 10px;
  outline: none;
  width: 60px;

  &:hover {
    background-color: #4169e1;
  }
  &:active {
    background-color: #0000cd;
  }
`

export const BackArrowIcon = styled.span`
  margin-right: 5px;
`
