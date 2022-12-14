import React from "react";
import { StyledBodyNavHead } from "../BodyNavSelect/style";
import bigstar from "../../assets/icons/big_star.svg"
import {
  StyledDetailsItem,
  StyledHotestAvalible,
  StyledHotestAvalibleText,
  StyledHotestContainer,
  StyledHotestHeader,
  StyledHotestLable,
  StyledHotestLableContent,
  StyledHotestLableGreen,
  StyledHotestLablePink,
  StyledHotestLableYellow,
  StyledHotestLeft,
  StyledHotestLine,
  StyledHotestPrice,
  StyledHotestPriceMain,
  StyledHotestPriceOld,
  StyledHotestRight,
  StyledHotestStarts,
  StyledHotestText,
  StyledHotestTextLink,
  StyledHotestTill,
  StyledHotestTimeContainer,
} from "./style";
import { BodyLine } from "../BodyLine/BodyLine";
import { ActionBar } from "../ActionBar/ActionBar";

export const DetailsItem = () => {
  return (
    <StyledDetailsItem>
      <StyledBodyNavHead>Самое горячее</StyledBodyNavHead>
      <BodyLine/>
      <StyledHotestContainer>
        <StyledHotestLeft>
          <StyledHotestLableContent>
            <StyledHotestStarts>
              <img src={bigstar} alt="" />
              <img src={bigstar} alt="" />
              <img src={bigstar} alt="" />
              <img src={bigstar} alt="" />
              <img src={bigstar} alt="" />
            </StyledHotestStarts>
            <StyledHotestLable>
              <StyledHotestLableGreen>Новинка</StyledHotestLableGreen>
              <StyledHotestLablePink>Акция</StyledHotestLablePink>
              <StyledHotestLableYellow>ХИТ</StyledHotestLableYellow>
            </StyledHotestLable>
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
          <StyledHotestLine/>
          <StyledHotestTimeContainer>
            <StyledHotestTill></StyledHotestTill>
            <ActionBar/>
          </StyledHotestTimeContainer>
        </StyledHotestRight>
      </StyledHotestContainer>
    </StyledDetailsItem>
  );
};
