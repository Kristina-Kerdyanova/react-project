import Email from "../../assets/icons/email_white.svg"

import React from 'react'
import styled from "styled-components"

export const EmailButton = () => {
  return (
    <StyledEmailButton>
      <img src={Email} alt="email" />
    </StyledEmailButton>
  )
}

const StyledEmailButton = styled.button`
  border: solid 0px;
  background: none;
`;