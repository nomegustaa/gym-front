import styled from 'styled-components';

export const Card = styled.div`
  background: white;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 15px 0;
  max-width: 400px;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  &.active {
    border-left: 2px solid black;
  }
`;
