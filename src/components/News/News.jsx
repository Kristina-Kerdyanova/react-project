import React from "react";
import { StyledBodyNavBorder, StyledBodyNavHead } from "../BodyNavSelect/style";
import { BodyNews } from "../BodyNews/BodyNews";
import { NavigationBar } from "../NavigationBar/NavigationBar";
import {
  StyledNewsContainer,
  StyledNewsContent,
  StyledNewsHeader,
  StyledNewsWrapper,
} from "./style";

export const News = () => {
  return (
    <StyledNewsContainer>
      <StyledNewsWrapper>
        <StyledNewsHeader>
          <StyledBodyNavHead>Последние новости</StyledBodyNavHead>
        </StyledNewsHeader>
        <StyledBodyNavBorder></StyledBodyNavBorder>
        <StyledNewsContent>
          <BodyNews></BodyNews>
          <BodyNews></BodyNews>
          <BodyNews></BodyNews>
        </StyledNewsContent>
      </StyledNewsWrapper>
    </StyledNewsContainer>
  );
};
