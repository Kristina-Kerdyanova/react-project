import React from "react"
import { ButtonNavigation, ButtonTabNavigation, ButtonTitle, CategoriesList, CategoriesListItem, ContainerBody, ContainerContent, ContainerLink, ContainerNavigation, ContainerNavigationBar, ContainerTabNavigation, ContainerTabsContent, LinkItem, ListLink, ListText, StyledLink, StyledNavigationBar, TabItem, TextLink, TitleLink } from "./style";
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
    { title: "Другие", img: "" },
  ]

  const calculator = [
    { title: "Калькулятор", content: "Окон", img: Window, link: "" },
    { title: "Калькулятор", content: "Натяжных потолков", img: Lamp, link: "" },
  ];

  const TabContent = ({ content }) => (
    <div className="tabcontent">
      <p>{content}</p>
    </div>
  );

  const [active, setActive] = React.useState(null);

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
                className={`tablinks ${index === active ? "active" : ""}`}
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
          {categories.map((item) => (
            <CategoriesListItem>
              <img src={item.img} alt="" />
              <ListText> {item.title} </ListText>
            </CategoriesListItem>
          ))}
        </CategoriesList>
        <ContainerTabsContent>
          {tabs[active] && <TabContent {...tabs[active]} />}
        </ContainerTabsContent>
      </ContainerBody>
    </ContainerNavigation>
  )
}

