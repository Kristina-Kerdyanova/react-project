import React from 'react'
import { ButtonNavigation, ButtonTabNavigation, ButtonTitle, CategoriesList, CategoriesListItem, ContainerBody, ContainerContent, ContainerLink, ContainerNavigation, ContainerNavigationBar, ContainerTabNavigation, ContainerTabsContent, LinkItem, ListText, StyledLink, StyledNavigationBar, TabItem, TextLink, TitleLink } from './style';
import './style.css';
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
import { StyledLine } from '../BodyLine/style';


export const NavigationBar = () => {
  const tabs = [
    { title: 'Горячие предложения', content: 'Тут будут горячие предложения' },
    { title: 'Акции', content: 'Тут могла бы быть Ваша акция' },
    { title: 'Новинки', content: 'Новинки' },
  ];

  const TabContent = ({ title, content }) => (
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
                className={`tablinks ${index === active ? 'active' : ''}`}
                onClick={openTab}
                data-index={index}>
                {item.title}
              </ButtonTabNavigation>
            ))}
          </TabItem>
          <ContainerLink>
            <LinkItem>
              <StyledLink href=''> <img src={Window} alt="" />
                <ContainerContent>
                  <TextLink>Калькулятор</TextLink>
                  <TitleLink>Окон</TitleLink>
                </ContainerContent>
              </StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink href=''> <img src={Lamp} alt="" />
                <ContainerContent>
                  <TextLink>Калькулятор</TextLink>
                  <TitleLink>Натяжных потолков</TitleLink>
                </ContainerContent>
              </StyledLink>
            </LinkItem>
          </ContainerLink>
        </StyledNavigationBar>
      </ContainerNavigationBar>
      <ContainerBody>
        <CategoriesList>
          <CategoriesListItem>
            <img src={Doors} alt="" />
            <ListText>Двери</ListText>
          </CategoriesListItem>
          <CategoriesListItem>
            <img src={Window_small} alt="" />
            <ListText>Окна</ListText>
          </CategoriesListItem>
          <CategoriesListItem>
            <img src={Lamp_small} alt="" />
            <ListText>Натяжные потолки</ListText>
          </CategoriesListItem>
          <CategoriesListItem>
            <img src={Sofas} alt="" />
            <ListText>Диваны/Кровати</ListText>
          </CategoriesListItem>
          <CategoriesListItem>
            <img src={Blinds} alt="" />
            <ListText>Жалюзи / Ролеты</ListText>
          </CategoriesListItem>
          <CategoriesListItem>
            <img src={Chairs} alt="" />
            <ListText>Мебель</ListText>
          </CategoriesListItem>
          <CategoriesListItem>
            <img src={Forged_products} alt="" />
            <ListText>Кованые изделия</ListText>
          </CategoriesListItem>
          <CategoriesListItem>
            <ListText>Другие</ListText>
          </CategoriesListItem>
        </CategoriesList>
        <ContainerTabsContent>
          {tabs[active] && <TabContent {...tabs[active]} />}
        </ContainerTabsContent>
      </ContainerBody>
    </ContainerNavigation>
  )
}

