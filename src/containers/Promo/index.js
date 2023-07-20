import React from 'react';
import Sidebar from 'components/Sidebar';
import Slide from 'components/Slide';
import { StyledContainer } from './styled';

const Promo = () => {

  return (
    <StyledContainer>
      <Sidebar />
      <Slide />
    </StyledContainer>
  )
}

export default Promo;