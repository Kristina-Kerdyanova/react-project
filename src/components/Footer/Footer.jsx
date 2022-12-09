import React from 'react'
import { FooterNavigation } from '../FooterNavigation/FooterNavigation'
import { ContainerFooterPay, StyledFooter, StyledTextFooter } from './style'
import Visa from "../../assets/visa.svg"
import Mastercard from "../../assets/mastercard.svg"


export const Footer = () => {
  return (
    <>
    <FooterNavigation />
    <StyledFooter>
      <StyledTextFooter>
      @Интернет магазин - SKIDKAMEGA.COM. Все права защищены. 2020
      </StyledTextFooter>
      <ContainerFooterPay>
        <img src={Visa} alt="visa" />
        <img src={Mastercard} alt="mastercard" />
      </ContainerFooterPay>
    </StyledFooter>
    </>
  )
}
