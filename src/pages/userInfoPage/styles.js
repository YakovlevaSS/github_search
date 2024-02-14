import styled from 'styled-components'

export const Wrap = styled.div`
  padding: 20px;
  background-color: #dcdcdc;
  display: flex;
  gap: 20px;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
justify-content: center;

`

export const Card = styled.div`
  border-radius: 20px;
  background-color: #ffffff;
  padding: 40px;
  width: 100%;
  height: 400px;
  display: flex;
  gap: 40px;
  align-items: center;
`
export const Avatar = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 300px;
  border-radius: 10px;
`

export const Img = styled.img`
  border-radius: 12px;
  height: 100%;
  width: 100%;
  object-fit: cover;
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 300px;
  width: 100%;
`

export const InfoBlog = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`
export const Text = styled.p`
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.24px;
color: #000000;
`
export const TextBig = styled.p`
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.24px;
color: #000000;
margin-bottom: 20px;
`
export const TextLable = styled.p`
font-size: 14px;
line-height: 20px; /* 142.857% */
color: #808080
`
