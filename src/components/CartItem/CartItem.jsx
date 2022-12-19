import React from 'react'
import Remove from "../../assets/icons/remove.svg"
import Sofa from "../../assets/images/sofa.jpg"
import { ContentDetailCardItem, TitleDetailCardItem, ContainerDetailsCardItem, ContainerCartItem, ImageCartItem, ContainerContentCartItem, TitleCardItem, ImageButton, LineCartItem, StyledCartItem } from './style';

const options = [
  { title: "Цвет:", content: null || "Серый" },
  { title: "Количество:", content: null || "1" },
  { title: "Цена:", content: null || "43047 руб" },
];

export const CartItem = () => {
  return (
    <StyledCartItem>
      <ContainerCartItem>
        <ImageCartItem src={Sofa} alt="image" />
        <ContainerContentCartItem>
          <TitleCardItem>Трехместный диван Claudia</TitleCardItem>
          <ContainerDetailsCardItem>
            {options.map((item) => (
              <>
              <TitleDetailCardItem>{item.title}</TitleDetailCardItem>         
              <ContentDetailCardItem>{item.content}</ContentDetailCardItem>
              </>
            ))}
          </ContainerDetailsCardItem>
        </ContainerContentCartItem>
        <ImageButton src={Remove} alt="remove"></ImageButton>
      </ContainerCartItem >
      <LineCartItem />
    </StyledCartItem>
  )
}