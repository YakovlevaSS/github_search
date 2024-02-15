import styled from 'styled-components'

export const Item = styled.li`
  border-radius: 10px;
  background-color: #ffffff;
  padding: 20px;
  width: 240px;
  height: 300px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.24px;
  color: #696969;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: flex-start;
  gap: 10px;
`

export const Avatar = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 240px;
  width: 200px;
  border-radius: 10px;
`

export const Img = styled.img`
  border-radius: 10px;
  height: 100%;
  width: 100%;
  object-fit: cover;
`

export const Login = styled.p`
  display: flex;
  align-items: center;
`
