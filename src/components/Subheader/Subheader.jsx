import React from 'react'
import User from "../../assets/icons/user.svg";
import ArrowToDown from "../../assets/icons/arrow_to_down.svg";
import Map from "../../assets/icons/map.svg";
import { StyledSubheader, StyledSubheaderBlock, StyledSubheaderContainer, StyledSubheaderElement, StyledSubheaderElementContainer, StyledSubheaderText, StyledSubheaderTextBold } from './style'

export const Subheader = () => {
  return (
    <StyledSubheader>
      <StyledSubheaderContainer>
        <StyledSubheaderElement>
          <img src={User} alt="user" />
          <StyledSubheaderTextBold>Вход / Регистрация</StyledSubheaderTextBold>
          <img src={ArrowToDown} alt="arrow to down" />
        </StyledSubheaderElement>
        <StyledSubheaderElement>
          <img src={Map} alt="map" />
          <StyledSubheaderTextBold>Ваш город</StyledSubheaderTextBold>
          <img src={ArrowToDown} alt="arrow to down" />
        </StyledSubheaderElement>
        <StyledSubheaderBlock>
          <StyledSubheaderElement>
            <StyledSubheaderElementContainer>
              <StyledSubheaderTextBold>Язык</StyledSubheaderTextBold>
              <StyledSubheaderText>Русский</StyledSubheaderText>
            </StyledSubheaderElementContainer>
            <img src={ArrowToDown} alt="arrow to down" />
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
