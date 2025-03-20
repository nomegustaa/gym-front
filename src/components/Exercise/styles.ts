import styled from 'styled-components';

export const ContainerExercises = styled.div`
  margin: 20px;
  display: flex;
  gap: 3rem;

  @media screen and (max-width: 1000px) {
    justify-content: center;
    gap: 0;
  }
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
