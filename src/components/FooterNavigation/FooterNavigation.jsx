import React from "react"
import { BlockFooterNavigation, FooterNavigationContainer, ItemFooterNavigation, LinkFooterNavigation, ListFooterNavigation, StyledFooterNavigation, TitleFooterNavigation } from "./style"

export const FooterNavigation = () => {
  return (
    <StyledFooterNavigation>
      <FooterNavigationContainer>
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
      </FooterNavigationContainer>
    </StyledFooterNavigation >
  )
}
