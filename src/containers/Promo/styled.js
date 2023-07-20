import styled from 'styled-components';

export const StyledContainer = styled.main`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;