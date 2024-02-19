import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  background-color: #1e90ff;
  color: #fff;
  border: none;
  border-radius: 10px;
  outline: none;
  width: 300px;

  &:hover {
    background-color: #4169e1;
  }
  &:active {
    background-color: #0000cd;
  }
`
