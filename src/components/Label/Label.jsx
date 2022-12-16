import React from "react";
import { StyledLabel } from "./style";
import "./style.css";

const GreenLabel = () => {
  return (
    <StyledLabel className="green_label">Новинка</StyledLabel>
  )
}

const PinkLabel = () => {
  return (
    <StyledLabel className="pink_label">Акция</StyledLabel>
  )
}

const YellowLabel = () => {
  return (
    <StyledLabel className="yellow_label">ХИТ</StyledLabel>
  )
}


export {
  GreenLabel, PinkLabel, YellowLabel
}