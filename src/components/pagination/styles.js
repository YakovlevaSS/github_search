import styled from 'styled-components';
import Pagination from 'react-js-pagination'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PageButton = styled.button`
  padding: 8px;
  margin: 0 5px;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: ${props => (props.active ? '#007bff' : '#fff')};
  color: ${props => (props.active ? '#fff' : '#007bff')};
  border-radius: 4px;
  font-weight: ${props => (props.active ? 'bold' : 'normal')};

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;