import React from 'react'
import Close from "../../assets/icons/close.svg";
import CartWhite from "../../assets/icons/cart_white.svg";
import { ModalWinwowContainer, ModalWinwowHeader, ModalWinwowTitleHeader } from '../ModalWindow/style'
import { ButtonClose } from '../Sign/style';
import { CartItem } from '../CartItem/CartItem';
import { AddCartImage, AddCartText, ContainerContentTitle, FooterContentText, FooterContentTitle, ImageModalWindow, ListCardItem, ModalWindowContainerContent, ModalWindowFooter, ModalWindowFooterContent, StyledAddCard } from './style';

export const Cart = () => {
  return (
    <ModalWinwowContainer>
      <ModalWinwowHeader>
        <ContainerContentTitle>
          <ImageModalWindow src={CartWhite} alt="" />
          <ModalWinwowTitleHeader>
            Корзина
          </ModalWinwowTitleHeader>
        </ContainerContentTitle>
        <ButtonClose>
          <img src={Close} alt="close" />
        </ButtonClose>
      </ModalWinwowHeader>
      <ModalWindowContainerContent>
        <ListCardItem>
          <CartItem />
        </ListCardItem>
        <ModalWindowFooter>
          <ModalWindowFooterContent>
            <FooterContentTitle>Итого:</FooterContentTitle>
            <FooterContentText>43047 руб</FooterContentText>
          </ModalWindowFooterContent>
          <StyledAddCard>
            <AddCartText>
              Оформите заказ
            </AddCartText>
            <AddCartImage>
              <img src={CartWhite} alt="cart" />
            </AddCartImage>
          </StyledAddCard>
        </ModalWindowFooter>
      </ModalWindowContainerContent>
    </ModalWinwowContainer>
  )
}
