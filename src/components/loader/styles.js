import styled, { keyframes }  from 'styled-components'

export const Wrap = styled.div`
padding: 20px;
background-color: inherit;
display: flex;
gap: 20px;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const Text = styled.p`
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.24px;
color: #000000;
text-align: center;
`

export const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const LoaderCircle = styled.div`
  border: 8px solid #f3f3f3; 
  border-top: 8px solid #3498db'; 
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spinAnimation} 1s linear infinite;
`;