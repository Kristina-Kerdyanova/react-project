import React from 'react'
import {StyledNavigation, StyledNavigationBtnCart, StyledNavigationBtnPhone, StyledNavigationBtnSearch, StyledNavigationCart, StyledNavigationCartContainer, StyledNavigationCartText, StyledNavigationForm, StyledNavigationInput} from './style'
import Logo from "../../assets/logo.svg";
import Search from "../../assets/icons/search.svg";
import Phone from "../../assets/icons/phone.svg";
import Cart from "../../assets/icons/cart.svg";
import { NavigationSelect } from '../NavigationSelect/NavigationSelect';

export const Navigation = () => {
  return (
    <StyledNavigation>
      <img src={Logo} alt="logo" />
      <StyledNavigationForm>
        <NavigationSelect/>
        <StyledNavigationInput placeholder="Поиск товаров" />
        <StyledNavigationBtnSearch>
          <img src={Search} alt="search"/>
        </StyledNavigationBtnSearch>
      </StyledNavigationForm>
      <StyledNavigationBtnPhone>
        <img src={Phone} alt="phone" />
      </StyledNavigationBtnPhone>
      <StyledNavigationCart>
        <StyledNavigationCartContainer>
          <StyledNavigationCartText>Общая сумма:</StyledNavigationCartText>
          <StyledNavigationCartText>0 руб.</StyledNavigationCartText>
        </StyledNavigationCartContainer>
        <StyledNavigationBtnCart>
          <img src={Cart} alt="cart" />
        </StyledNavigationBtnCart>
      </StyledNavigationCart>
    </StyledNavigation>
  )
}

