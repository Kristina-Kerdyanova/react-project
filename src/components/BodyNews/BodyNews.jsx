import React, { useState } from 'react'
import girl from '../../assets/images/girl.svg'
import { StyledBodyNewsButton, StyledBodyNewsContent, StyledBodyNewsImg, StyledBodyNewsInfo, StyledBodyNewsInfoText, StyledBodyNewsTitle, StyledBodyNewsWrapper } from './style'

export const BodyNews = () => {
  return (
    <StyledBodyNewsWrapper>
      <StyledBodyNewsImg src={girl} alt="girl"></StyledBodyNewsImg>
      <StyledBodyNewsInfo>
        <StyledBodyNewsInfoText>10.03.20</StyledBodyNewsInfoText>
        <StyledBodyNewsInfoText>Пост от: Nickname_14</StyledBodyNewsInfoText>
      </StyledBodyNewsInfo>
      <StyledBodyNewsTitle>
        Стильная пятница
      </StyledBodyNewsTitle>
      <StyledBodyNewsContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo, vitae amet eget in felis viverra. Consectetur malesuada mattis turpis tellus, sodales...
      </StyledBodyNewsContent>
      <StyledBodyNewsButton>Подробнее</StyledBodyNewsButton>
    </StyledBodyNewsWrapper>

  )
}