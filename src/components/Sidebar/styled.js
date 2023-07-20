import styled from 'styled-components';

export const StyledSidebar = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;
  padding: 16px;
  background-color: #000;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const StyledLogo = styled.h1`
  margin: 0;
  color: #fff;
  text-align: center;

  img {
    max-width: 75%;
    height: auto;
  }

  @media screen and (max-width: 768px) {
    
    img {
      max-width: 100px;
    }
  }
`;