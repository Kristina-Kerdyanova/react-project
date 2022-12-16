import React from "react";
import { StyledBodyNavHead } from "../BodyNavSelect/style";

import {
  ContainerActionBar,
  ContainerLabels,
  ContainerStock,
  StyledDetailsItem,
  StyledHotestAvalible,
  StyledHotestAvalibleText,
  StyledHotestContainer,
  StyledHotestHeader,
  StyledHotestLableContent,
  StyledHotestLeft,
  StyledHotestLine,
  StyledHotestPrice,
  StyledHotestPriceMain,
  StyledHotestPriceOld,
  StyledHotestRight,
  StyledHotestText,
  StyledHotestTextLink,
  StyledHotestTimeContainer,
  TitleStockTime,
} from "./style";

import { BodyLine } from "../BodyLine/BodyLine";
import { ActionBar } from "../ActionBar/ActionBar";
import { StockTime } from "../StockTime/StockTime";
import { GreenLabel, PinkLabel, YellowLabel } from "../Label/Label";
import { Rating } from "../Rating/Rating";

export const DetailsItem = () => {
  return (
    <StyledDetailsItem>
      <StyledBodyNavHead>Самое горячее</StyledBodyNavHead>
      <BodyLine />
      <StyledHotestContainer>
        <StyledHotestLeft>
          <StyledHotestLableContent>
            <Rating/>
            <ContainerLabels>
              <GreenLabel />
              <PinkLabel />
              <YellowLabel />
            </ContainerLabels>
          </StyledHotestLableContent>
        </StyledHotestLeft>
        <StyledHotestRight>
          <StyledHotestHeader>Трехместный диван Claudia</StyledHotestHeader>
          <StyledHotestPrice>
            <StyledHotestPriceMain>43047 руб</StyledHotestPriceMain>
            <StyledHotestPriceOld>46790 руб</StyledHotestPriceOld>
          </StyledHotestPrice>
          <StyledHotestText>
            Этот диван просто создан для большой семьи. Его потрясающая мягкость
            и большое пространство подарят море приятных ощущений. Ваши дети
            будут в восторге - на этой модели найдется местечко для веселых игр
            даже для большой компании ...
            <StyledHotestTextLink>
              Подробнее
            </StyledHotestTextLink>
          </StyledHotestText>
          <StyledHotestAvalible>
            <StyledHotestAvalibleText>Имеется: 10</StyledHotestAvalibleText>
            <StyledHotestAvalibleText>Продано: 40</StyledHotestAvalibleText>
          </StyledHotestAvalible>
          <StyledHotestLine />
          <StyledHotestTimeContainer>
            <TitleStockTime>До конца</TitleStockTime>
            <ContainerStock>
              <StockTime />
              <ContainerActionBar>
                <ActionBar />
              </ContainerActionBar>
            </ContainerStock>
          </StyledHotestTimeContainer>
        </StyledHotestRight>
      </StyledHotestContainer>
    </StyledDetailsItem>
  );
};
