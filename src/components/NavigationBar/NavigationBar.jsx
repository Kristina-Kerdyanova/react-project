import React, { useState } from "react"
import { ButtonNavigation, ButtonTabNavigation, ButtonTitle, CategoriesList, CategoriesListItem, ContainerBody, ContainerContent, ContainerLink, ContainerList, ContainerListItem, ContainerNavigation, ContainerNavigationBar, ContainerTabNavigation, ContainerTabsContent, LinkItem, ListLink, ListText, StyledLink, StyledNavigationBar, TabItem, TextLink, TitleLink } from "./style";
import "./style.css";
import Lamp from "../../assets/icons/lamp.svg"
import Window from "../../assets/icons/window.svg"
import Burger from "../../assets/icons/burger.svg"
import Forged_products from "../../assets/icons/forged_products.svg"
import Chairs from "../../assets/icons/chairs.svg"
import Blinds from "../../assets/icons/blinds.svg"
import Sofas from "../../assets/icons/sofas.svg"
import Lamp_small from "../../assets/icons/lamp_small.svg"
import Doors from "../../assets/icons/doors.svg"
import Window_small from "../../assets/icons/window_small.svg"
import styled from "styled-components";
import { Sidebar } from "../Sidebar/Sidebar";


export const NavigationBar = () => {
  const tabs = [
    { title: "Горячие предложения", content: "Тут будут горячие предложения" },
    { title: "Акции", content: "Тут могла бы быть Ваша акция" },
    { title: "Новинки", content: "Новинки" },
  ];

  const categories = [
    { title: "Двери", img: Doors },
    { title: "Окна", img: Window_small },
    { title: "Натяжные потолки", img: Lamp_small },
    { title: "Диваны/Кровати", img: Sofas },
    { title: "Жалюзи/Ролеты", img: Blinds },
    { title: "Мебель", img: Chairs },
    { title: "Кованые изделия", img: Forged_products },
    { title: "Другие", img: null },
  ]

  const calculator = [
    { title: "Калькулятор", content: "Окон", img: Window, link: "" },
    { title: "Калькулятор", content: "Натяжных потолков", img: Lamp, link: "" },
  ];

  const TabContent = ({ content }) => (
    <div className="tab_content">
      <p>{content}</p>
    </div>
  );

  const [active, setActive] = useState(tabs[0]);

  const openTab = event => setActive(+event.target.dataset.index);

  return (
    <ContainerNavigation>
      <ContainerNavigationBar>
        <ButtonNavigation>
          <ButtonTitle>Все категории</ButtonTitle>
          <img src={Burger} alt=""></img>
        </ButtonNavigation>
        <StyledNavigationBar>
          <TabItem className="tab">
            {tabs.map((item, index) => (
              <ButtonTabNavigation
                className={index === active ? "active" : null}
                onClick={openTab}
                data-index={index}>
                {item.title}
              </ButtonTabNavigation>
            ))}
          </TabItem>
          <ListLink>
            {calculator.map((item) => (
              <LinkItem>
                <StyledLink href={item.link}> <img src={item.img} alt="" />
                  <ContainerContent>
                    <TextLink>{item.title}</TextLink>
                    <TitleLink>{item.content}</TitleLink>
                  </ContainerContent>
                </StyledLink>
              </LinkItem>
            ))}
          </ListLink>
        </StyledNavigationBar>
      </ContainerNavigationBar>
      <ContainerBody>
        <CategoriesList>
          <ContainerList>
          {categories.map((item) => (
            <CategoriesListItem>
              <ContainerListItem>
                <img src={item.img} alt="" />
                <ListText> {item.title} </ListText>
              </ContainerListItem>
            </CategoriesListItem>
          ))}
          </ContainerList>
        </CategoriesList>
        <ContainerTabsContent>
          {tabs[active] && <TabContent {...tabs[active]} />}
        </ContainerTabsContent>
      </ContainerBody>
      <StyledSidebar>
        <Sidebar />
      </StyledSidebar>
    </ContainerNavigation>
  )
}


const StyledSidebar = styled.div`
  position: fixed;
  z-index: 3;
  left: 90%;
`;
