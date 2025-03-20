import styled from 'styled-components';

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 10px auto;
  max-width: 400px;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const Title = styled.h2`
  font-size: 18px;
  color: #333;
  margin: 8px 0;
`;

export const Info = styled.p`
  font-size: 14px;
  color: #666;
  margin: 4px 0;
`;
