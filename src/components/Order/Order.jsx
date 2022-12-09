import React from 'react'
import cartfff from '../../assets/icons/cart_fff.svg'
import balance from '../../assets/icons/balance.svg'
import plus from '../../assets/icons/plus.svg'
import heart from '../../assets/icons/heart.svg'
import { OrderAddCard, OrderBox, OrderBtn, OrderCart, OrderPlus } from './style'

export const Order = () => {
    return(
        <OrderBox>
            <OrderBtn>
                <img src={balance} alt="balance" />
            </OrderBtn>
        <OrderBtn>
            <img src={heart} alt="heart" />
        </OrderBtn>
        <OrderAddCard>
            <OrderPlus>
                <img src={plus} alt="plus" />
            </OrderPlus>
            <OrderCart>
                <img src={cartfff} alt="cart" />
            </OrderCart>
        </OrderAddCard>
        </OrderBox>
    )
}