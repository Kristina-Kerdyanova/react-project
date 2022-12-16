import React, { useState } from "react";

import {
  StyledBodyNavEllements,
  StyledBodyNavHead,
  StyledBodyNavSell,
  StyledBodyNavText,
  StyledBodyNavWrapper,
} from "./style";

import "./style.css";
import { BodyLine } from "../BodyLine/BodyLine";
import { CardItemList } from "../CardItemList/CardItemList";

export const BodyNavSelect = () => {
  const tabs = [
    { title: "Диваны / Кровати", content: <CardItemList /> },
    { title: "Двери", content: "Двери" },
    { title: "Окна", content: "Окна" },
    { title: "Мебeль", content: "Мебeль" },
    { title: "Натяжные потолки", content: "Натяжные потолки" },
  ];

  const TabContent = ({ content }) => (
    <div className="tabcontent">
      <div>{content}</div>
    </div>
  );

  const [active, setActive] = useState(tabs[0]);

  const openTab = (event) => setActive(+event.target.dataset.index);

  return (
    <StyledBodyNavWrapper>
      <StyledBodyNavText>
        <StyledBodyNavHead>Хиты продаж</StyledBodyNavHead>
        <StyledBodyNavEllements className="tab-menu ">
          {tabs.map((item, index) => (
            <StyledBodyNavSell
              className={index === active ? "active" : null} 
              onClick={openTab}
              data-index={index}
            >
              {item.title}
            </StyledBodyNavSell>
          ))}
        </StyledBodyNavEllements>
      </StyledBodyNavText>
      <BodyLine />
      {tabs[active] && <TabContent {...tabs[active]} />}
    </StyledBodyNavWrapper>
  );
};
