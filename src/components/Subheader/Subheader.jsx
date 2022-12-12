import React from 'react'
import ArrowToDown from "../../assets/icons/arrow_to_down.svg";
import { StyledSubheader, StyledSubheaderBlock, StyledSubheaderContainer, StyledSubheaderElement, StyledSubheaderElementContainer, StyledSubheaderText, StyledSubheaderTextBold } from './style'
import { SubheaderAuthorization } from '../SubheaderAuthorization/SubheaderAuthorization';
import { HeaderSelect } from '../HeaderSelect/HeaderSelect';

export const Subheader = () => {
  return (
    <StyledSubheader>
      <StyledSubheaderContainer>
        <SubheaderAuthorization/>
        <HeaderSelect/>
        <StyledSubheaderBlock>
          <StyledSubheaderElement>
            <HeaderSelect/>
          </StyledSubheaderElement>
          <StyledSubheaderElement>
            <StyledSubheaderElementContainer>
              <StyledSubheaderTextBold>Валюта</StyledSubheaderTextBold>
              <StyledSubheaderText>РУБ/RUB</StyledSubheaderText>
            </StyledSubheaderElementContainer>
            <img src={ArrowToDown} alt="arrow to down" />
          </StyledSubheaderElement>
        </StyledSubheaderBlock>
      </StyledSubheaderContainer>
    </StyledSubheader>
  )
}
