import React from 'react';
import { StyledSidebar, StyledLogo } from './styled'
import MbLogo from 'assets/img/mb-logo.jpg'

const Sidebar = () => {

  return(
    <StyledSidebar>
      <StyledLogo>
        <img src={MbLogo} alt="MB Distribuidora de Bebidas" />
      </StyledLogo>
    </StyledSidebar>
  )
}

export default Sidebar;