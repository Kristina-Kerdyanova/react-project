import React from 'react'
import { StyledCardItem, StyledHintHitTitleCardItem, StyledHintNewTitleCardItem, StyledIconsCardItem, StyledLinkCardItem, StyledMainPriceCardItem, StyledOldPriceCardItem, StyledPriceCardItem, StyledStartsCardItem, StyledTitleCardItem } from './style'

export const CardItem = () => {
  return (
    <StyledCardItem>
      <StyledTitleCardItem>
      Трёхместный диван Claudia
        <StyledHintHitTitleCardItem>Новинка</StyledHintHitTitleCardItem>
        <StyledHintNewTitleCardItem>ХИТ</StyledHintNewTitleCardItem>
      </StyledTitleCardItem>

      <StyledPriceCardItem>
        <StyledMainPriceCardItem>43047 руб</StyledMainPriceCardItem>
        <StyledOldPriceCardItem>46790 руб</StyledOldPriceCardItem>
      </StyledPriceCardItem>
      <StyledStartsCardItem></StyledStartsCardItem>
      
      <StyledLinkCardItem>Подробнее</StyledLinkCardItem>
      <StyledIconsCardItem></StyledIconsCardItem>
    </StyledCardItem>
  )
}
