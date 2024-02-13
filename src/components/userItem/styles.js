import styled from 'styled-components'

export const Item = styled.li`
  border-radius: 10px;
  background-color: #ffffff;
  padding: 8px 8px 8px 8px;
  width: 100%;
  height: 60px;
  font-size: 16px;
  color: #696969;
  display: grid;
  grid-template-columns: 400px 1fr 150px 1fr 150px;
  cursor: pointer;
`

export const Avatar = styled.div`
  grid-column: 1 / 2;
  display: flex;
  align-items: center;
`

export const Img = styled.img`

`
export const Name = styled.p`
  grid-column: 3 / 4;
  display: flex;
  align-items: center;
`

export const Login = styled.p`
  grid-column: 5 / 6;
  display: flex;
  align-items: center;
`
