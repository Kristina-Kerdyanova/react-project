import React from 'react'
import Burger from "../../assets/icons/burger_white.svg";
import Comparison from "../../assets/icons/comparison.svg";
import Favorite from "../../assets/icons/favorite.svg";
import Calculator from "../../assets/icons/calculator.svg";
import User from "../../assets/icons/user_white.svg";
import TechnicalSupport from "../../assets/icons/technical_support.svg";
import ArrowToUp from "../../assets/icons/arrow_to_up.svg";
import { ImageSideBar, ItemSidebarBtn, ListSidebar, StyledSidebar } from './style';

const options = [
  { img: Burger, button: "Все категории" },
  { img: Comparison, button: "Сравнение" },
  { img: Favorite, button: "Желаемое" },
  { img: Calculator, button: "Калькуляторы" },
  { img: User, button: "" },
  { img: TechnicalSupport, button: "Тех. поддержка" },
  { img: ArrowToUp, button: "" },
]

export const Sidebar = () => {

  return (
    <StyledSidebar>
      <ListSidebar>
        {options.map((item) => (
          <ItemSidebarBtn>
            <ImageSideBar src={item.img} alt="" />
          </ItemSidebarBtn>
        ))}
      </ListSidebar>
    </StyledSidebar>
  )
}
