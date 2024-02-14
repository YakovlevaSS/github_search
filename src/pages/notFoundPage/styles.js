import styled from 'styled-components'

export const Wrap = styled.div`
padding: 20px;
background-color: #DCDCDC;
display: flex;
gap: 20px;
flex-direction: column;
width: 100vw;
height: 100vh;
align-items: center;
justify-content: center;
`
export const SearchButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  background-color: #1E90FF;
  color: #fff;
  border: none;
  border-radius: 10px;
  outline: none;

  &:hover {
    background-color: #4169E1;
  }
  &:active {
    background-color: #0000CD;
  }
`;
export const Text = styled.p`
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.24px;
color: #000000;
text-align: center;
`