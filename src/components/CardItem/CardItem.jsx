import React from "react";
import sofa from "../../assets/images/sofa.png";
import star from "../../assets/icons/star.svg";
import { ActionBar} from "../ActionBar/ActionBar";
import {
  StyledCardImgBox,
  StyledCardInfo,
  StyledCardItem,
  StyledCardSale,
  StyledCardSaleText,
  StyledHintHitTitleCardItem,
  StyledHintNewTitleCardItem,
  StyledIconsCardItem,
  StyledLinkCardItem,
  StyledMainPriceCardItem,
  StyledOldPriceCardItem,
  StyledPriceCardItem,
  StyledStartsCardItem,
  StyledTitleCardItem,
} from "./style";

export const CardItem = () => {
  return (
    <StyledCardItem>
      <StyledCardImgBox>
        <img src={sofa} alt="sofa" />
      </StyledCardImgBox>
      <StyledCardSale>
        <StyledCardSaleText>Акция -10%</StyledCardSaleText>
      </StyledCardSale>
      <StyledCardInfo>
        <StyledTitleCardItem>
          Трёхместный диван Claudia
          <StyledHintNewTitleCardItem>Новинка</StyledHintNewTitleCardItem>
          <StyledHintHitTitleCardItem>ХИТ</StyledHintHitTitleCardItem>
        </StyledTitleCardItem>
        <StyledPriceCardItem>
          <StyledMainPriceCardItem>43047 руб</StyledMainPriceCardItem>
          <StyledOldPriceCardItem>46790 руб</StyledOldPriceCardItem>
        </StyledPriceCardItem>
        <StyledStartsCardItem>
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
        </StyledStartsCardItem>
        <StyledLinkCardItem href="">Подробнее</StyledLinkCardItem>
      </StyledCardInfo>
      <StyledIconsCardItem>
        <ActionBar/>
      </StyledIconsCardItem>
    </StyledCardItem>
  );
};
