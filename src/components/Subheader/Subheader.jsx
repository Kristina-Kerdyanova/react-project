import React from 'react'
import ArrowToDown from "../../assets/icons/arrow_to_down.svg";
import { HeaderSelectTitle, StyledSubheader, StyledSubheaderBlock, StyledSubheaderContainer, StyledSubheaderElement, StyledSubheaderElementContainer, StyledSubheaderText, StyledSubheaderTextBold } from './style'
import { SubheaderAuthorization } from '../SubheaderAuthorization/SubheaderAuthorization';
import { HeaderSelect } from '../HeaderSelect/HeaderSelect';

export const Subheader = () => {
  return (
    <StyledSubheader>
      <StyledSubheaderContainer>
        <SubheaderAuthorization />
        {/* <HeaderSelect /> */}
        <StyledSubheaderBlock>
          <StyledSubheaderElement>
            <HeaderSelectTitle>Язык</HeaderSelectTitle>
            <HeaderSelect />
          </StyledSubheaderElement>
          <StyledSubheaderElement>
          <HeaderSelectTitle>Валюта</HeaderSelectTitle>
            <HeaderSelect />
          </StyledSubheaderElement>
        </StyledSubheaderBlock>
      </StyledSubheaderContainer>
    </StyledSubheader>
  )
}
