import React from 'react'
import Burger from "../../assets/icons/burger.svg";
import Comparison from "../../assets/icons/comparison.svg";
import Favorite from "../../assets/icons/favorite.svg";
import Calculator from "../../assets/icons/calculator.svg";
import User from "../../assets/icons/user_white.svg";
import TechnicalSupport from "../../assets/icons/technical_support.svg";
import ArrowToUp from "../../assets/icons/arrow_to_up.svg";
import { ItemSidebarBtn, ListSidebar, StyledSidebar } from './style';


export const Sidebar = () => {
  return (
    <StyledSidebar>
      <ListSidebar>
        <ItemSidebarBtn>
          <img src={Burger} alt="" />
        </ItemSidebarBtn>
        <ItemSidebarBtn>
          <img src={Comparison} alt="" />
        </ItemSidebarBtn>
        <ItemSidebarBtn>
          <img src={Favorite} alt="" />
        </ItemSidebarBtn>
        <ItemSidebarBtn>
          <img src={Calculator} alt="" />
        </ItemSidebarBtn>
        <ItemSidebarBtn>
          <img src={User} alt="" />
        </ItemSidebarBtn>
        <ItemSidebarBtn>
          <img src={TechnicalSupport} alt="" />
        </ItemSidebarBtn>
        <ItemSidebarBtn>
          <img src={ArrowToUp} alt="" />
        </ItemSidebarBtn>
        </ListSidebar> 
    </StyledSidebar>
  )
}
