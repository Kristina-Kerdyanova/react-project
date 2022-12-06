import Phone from "../../assets/icons/phone_white.svg"

import React from 'react'
import styled from "styled-components"

export const PhoneButton = () => {
  return (
    <StyledPhoneButton>
      <img src={Phone} alt="phone" />
    </StyledPhoneButton>
  )
}


const StyledPhoneButton = styled.button`
  border: solid 0px;
  background: none;
`;
