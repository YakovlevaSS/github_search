import styled from 'styled-components'

export const Item = styled.li`
  border-radius: 10px;
  background-color: #ffffff;
  padding: 10px;
  width: 100%;
  height: 80px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.24px;
  color: #696969;
  display: grid;
  grid-template-columns: 150px auto 200px auto 200px;
  cursor: pointer;
  align-items: center;
`

export const Avatar = styled.div`
  grid-column: 1 / 2;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  border-radius: 50%;
`

export const Img = styled.img`
  border-radius: 12px;
  height: 100%;
  width: 100%;
  object-fit: cover;
`
export const Name = styled.div`
  grid-column: 5 / 6;
  display: flex;
  align-items: center;
`

export const Login = styled.p`
  grid-column: 3 / 4;
  display: flex;
  align-items: center;
`
