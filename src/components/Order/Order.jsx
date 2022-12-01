import React from 'react'
import cartfff from '../../assets/icons/cart_fff.svg'
import balance from '../../assets/icons/balance.svg'
import plus from '../../assets/icons/plus.svg'
import heart from '../../assets/icons/heart.svg'
import { OrderAddCard, OrderBox, OrderCart, OrderPlus } from './style'

export const Order = () => {
    return(
        <OrderBox>
        <img src={balance} alt="balance" />
        <img src={heart} alt="heart" />
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