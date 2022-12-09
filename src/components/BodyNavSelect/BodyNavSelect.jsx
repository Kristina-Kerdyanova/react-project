import React, { useState } from "react";
import {
  StyledBodyNavBorder,
  StyledBodyNavEllements,
  StyledBodyNavHead,
  StyledBodyNavHover,
  StyledBodyNavSell,
  StyledBodyNavText,
  StyledBodyNavWrapper,
} from "./style";
import "./style.css";
import { BodyLine } from "../BodyLine/BodyLine";
import { ButtonNavigation } from "../NavigationBar/style";
import { CardItem } from "../CardItem/CardItem";
export const BodyNavSelect = () => {
  const tabs = [
    { title: "Диваны / Кровати", content: <CardItem></CardItem> },
    { title: "Двери", content: "Двери" },
    { title: "Окна", content: "Окна" },
    { title: "Мебeль", content: "Мебeль" },
    { title: "Натяжные потолки", content: "Натяжные потолки" },
  ];

  const TabContent = ({ title, content }) => (
    <div className="tabcontent">
      <p>{content}</p>
    </div>
  );
  const [active, setActive] = React.useState(null);

  const openTab = (event) => setActive(+event.target.dataset.index);

  return (
    <StyledBodyNavWrapper>
      <StyledBodyNavText>
        <StyledBodyNavHead>Хиты продаж</StyledBodyNavHead>
        <StyledBodyNavEllements className="tab-menu">
          {tabs.map((item, index) => (
            <StyledBodyNavSell
              className={`tablinks ${index === active ? "active" : ""}`}
              onClick={openTab}
              data-index={index}
            >
              {item.title}
            </StyledBodyNavSell>
          ))}
        </StyledBodyNavEllements>
      </StyledBodyNavText>
    <BodyLine></BodyLine>
      {/* <StyledBodyNavBorder></StyledBodyNavBorder> */}

      {tabs[active] && <TabContent {...tabs[active]} />}
    </StyledBodyNavWrapper>
  );
};
