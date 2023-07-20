import styled from 'styled-components';

export const StyledPromo = styled.section`
  width: 70%;
  height: 100%;
`;

export const StyledPromoItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  img {
    width: auto;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const StyledPromoDetail = styled.div`
  position: absolute;
  right: 32px;
  bottom: 32px;
  z-index: 10;
  padding: 16px;
  background-color: #000;
`;

export const StyledPromoTitle = styled.h2`
  margin: 0 0 16px 0;
  color: #d05e14;
`;

export const StyledPromoPrice = styled.div`
  & h3, h4 {
    margin: 0;
    color: #fff;
  }

  & h3 {
    margin-top: 8px;
    font-size: 32px;
  }

  & h4 {
    font-size: 24px;
    text-decoration: line-through;
  }
`;