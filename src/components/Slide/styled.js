import styled from 'styled-components';

export const StyledPromo = styled.section`
  width: 70%;
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledPromoItem = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 768px) {
    height: auto;
    padding: 16px;
  }
`;

export const StyledPromoImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 768px) {
    height: auto;
  }

  img {
    display: block;
    max-width: 75%;
    height: auto;
    margin: 0 auto;
  }
`;

export const StyledPromoDetail = styled.div`
  position: absolute;
  right: 32px;
  bottom: 32px;
  z-index: 10;
  width: 35%;
  padding: 16px;
  background-color: #000;

  @media screen and (max-width: 960px) {
    right: 0;
    bottom: 0;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    position: static;
    width: 100%;
  }
`;

export const StyledPromoTitle = styled.h2`
  margin: 0 0 16px 0;
  color: #d05e14;
`;

export const StyledPromoPrice = styled.div`
  h3, h4 {
    margin: 0;
    color: #fff;
  }

  h3 {
    margin-top: 8px;
    font-size: 48px;
  }

  h4 {
    font-size: 32px;
    
    span {
      text-decoration: line-through;
    }
  }

  @media screen and (max-width: 1260px) {
    h3 {
      font-size: 32px;
    }

    h4 {
      font-size: 24px;
    }
  }
`;