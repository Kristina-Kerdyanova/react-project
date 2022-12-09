import React from "react"
import { BlockFooterNavigation, BlockFooterNavigationContent, BurgerMenu, ContainerContent, ContainerContentText, FooterBtn, FooterNavigationContainer, ItemFooterNavigation, LinkFooterNavigation, ListFooterNavigation, StyledFooterNavigation, TextButton, TextContent, TextContentFooter, TitleFooterNavigation } from "./style"
import Logo from "../../assets/logo _vertical.svg"
import { PhoneButton } from "../PhoneButton/PhoneButton"
import { EmailButton } from "../EmailButton/EmailButton"
import Arrow from "../../assets/icons/arrow_to_down_white.svg"

export const FooterNavigation = () => {
  return (
    <StyledFooterNavigation>
      <FooterNavigationContainer>
        <BlockFooterNavigationContent>
          <img src={Logo} alt="logo" />
          <ContainerContent>
            <PhoneButton />
            <ContainerContentText>
              <TextContentFooter>
                Онлайн консультация
              </TextContentFooter>
              <TextContent>
                +38063728399
              </TextContent>
            </ContainerContentText>
          </ContainerContent>
          <ContainerContent>
            <EmailButton />
            <ContainerContentText>
              <TextContentFooter>
                somemail@gmail.com
              </TextContentFooter>
            </ContainerContentText>
          </ContainerContent>
        </BlockFooterNavigationContent>
        <BurgerMenu>
          <BlockFooterNavigation>
            <TitleFooterNavigation>SKIDKAMEGA.COM</TitleFooterNavigation>
            <ListFooterNavigation>
              <ItemFooterNavigation><LinkFooterNavigation href="">Для оптовых клиентов</LinkFooterNavigation></ItemFooterNavigation>
              <ItemFooterNavigation><LinkFooterNavigation href="">Для прессы</LinkFooterNavigation></ItemFooterNavigation>
              <ItemFooterNavigation><LinkFooterNavigation href="">Новости</LinkFooterNavigation></ItemFooterNavigation>
              <ItemFooterNavigation><LinkFooterNavigation href="">О нас</LinkFooterNavigation></ItemFooterNavigation>
              <ItemFooterNavigation><LinkFooterNavigation href="">Поддержка</LinkFooterNavigation></ItemFooterNavigation>
              <ItemFooterNavigation><LinkFooterNavigation href="">Карта сайта</LinkFooterNavigation></ItemFooterNavigation>
              <ItemFooterNavigation><LinkFooterNavigation href="">Сотрудничество</LinkFooterNavigation></ItemFooterNavigation>
              <ItemFooterNavigation><LinkFooterNavigation href="">Реферальная програма</LinkFooterNavigation></ItemFooterNavigation>
            </ListFooterNavigation>
          </BlockFooterNavigation>
          <BlockFooterNavigation>
            <TitleFooterNavigation>Категории</TitleFooterNavigation>
            <ListFooterNavigation>
              <ItemFooterNavigation><LinkFooterNavigation href="">Двери</LinkFooterNavigation></ItemFooterNavigation>
              <ItemFooterNavigation><LinkFooterNavigation href="">Окна</LinkFooterNavigation></ItemFooterNavigation>
              <ItemFooterNavigation><LinkFooterNavigation href="">Натяжные потолки</LinkFooterNavigation></ItemFooterNavigation>
              <ItemFooterNavigation><LinkFooterNavigation href="">Диваны</LinkFooterNavigation></ItemFooterNavigation>
              <ItemFooterNavigation><LinkFooterNavigation href="">Матрасы</LinkFooterNavigation></ItemFooterNavigation>
              <ItemFooterNavigation><LinkFooterNavigation href="">Мебель</LinkFooterNavigation></ItemFooterNavigation>
              <ItemFooterNavigation><LinkFooterNavigation href="">Другое</LinkFooterNavigation></ItemFooterNavigation>
            </ListFooterNavigation>
          </BlockFooterNavigation>
          <BlockFooterNavigation>
            <TitleFooterNavigation>Покупателю</TitleFooterNavigation>
            <ListFooterNavigation>
              <ItemFooterNavigation><LinkFooterNavigation href="">Как зделать заказ?</LinkFooterNavigation></ItemFooterNavigation>
              <ItemFooterNavigation><LinkFooterNavigation href="">Гарантия, обмен, возврат</LinkFooterNavigation></ItemFooterNavigation>
              <ItemFooterNavigation><LinkFooterNavigation href="">Акции</LinkFooterNavigation></ItemFooterNavigation>
              <ItemFooterNavigation><LinkFooterNavigation href="">Публичная оферта</LinkFooterNavigation></ItemFooterNavigation>
              <ItemFooterNavigation><LinkFooterNavigation href="">Доставка</LinkFooterNavigation></ItemFooterNavigation>
              <ItemFooterNavigation><LinkFooterNavigation href="">Оплата</LinkFooterNavigation></ItemFooterNavigation>
              <ItemFooterNavigation><LinkFooterNavigation href="">Бесплатная доставка</LinkFooterNavigation></ItemFooterNavigation>
            </ListFooterNavigation>
          </BlockFooterNavigation>
        </BurgerMenu>
      </FooterNavigationContainer>
      <FooterBtn>
        <TextButton>Подробнее</TextButton>
        <img src={Arrow} alt="arrow" />
      </FooterBtn>
    </StyledFooterNavigation >
  )
}
